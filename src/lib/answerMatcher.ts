import { knowledgeBase } from "@/data/knowledgeBase";
import type { FAQ } from "@/types/knowledgeBase";

const MAX_QUESTION_LENGTH = 500;

/** Normalize names and common English/Hinglish variants before whole-word matching. */
export function normalizeQuestion(text: string): string {
  return text.normalize("NFKC").toLowerCase()
    .replace(/[’']/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\b(?:core\s*dhristi|core\s*drishti|coredrishti|coredhrsti)\b/g, "coredhristi")
    .replace(/\bcore\s+d\b/g, "cored")
    .replace(/\b(?:whats\s*app|whatsap|watsapp)\b/g, "whatsapp")
    .replace(/\b(?:next\s*tech\s*waves|nexttechwaves|next\s*waves)\b/g, "nextwaves")
    .replace(/\b(?:tohfa|thofa)\s*(?:bazaar|bazzar|bazar)\b/g, "tohfa")
    .replace(/\b(?:adsmark|adsmark\s*01)\b/g, "adsmark01")
    .replace(/\bcyber\s*security\b/g, "cybersecurity")
    .replace(/\bcybersapiens?\b/g, "cybersapiens")
    .replace(/\bcustomer relationship management\b/g, "crm")
    .replace(/\bartificial intelligence\b/g, "ai")
    .replace(/\bfollow\s*ups?\b/g, "followup")
    .replace(/\b(?:prices?|costs?|fees?|rates?|charges?|budget|paisa)\b/g, "pricing")
    .replace(/\b(?:resum[eé]|cv)\b/g, "resume")
    .replace(/\b(?:certifications|certificates?)\b/g, "certification")
    .replace(/\bservices?\b/g, "services")
    .replace(/\b(?:licence|licenses)\b/g, "license")
    .replace(/\b(?:refuelling|refueling|petrol)\b/g, "fuel")
    .replace(/\bre\s*testing\b/g, "retesting")
    .replace(/\s+/g, " ").trim();
}

const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "what", "who", "where", "when", "why", "how",
  "do", "does", "did", "his", "he", "him", "her", "me", "my", "i", "it", "its", "this", "that",
  "tell", "about", "please", "can", "could", "would", "you", "your", "for", "of", "to", "in", "on",
  "with", "and", "or", "at", "as", "be", "been", "have", "has", "had", "there", "which", "any",
  "hai", "hain", "kya", "ka", "ki", "ke", "ko", "batao", "bata", "bataiye", "mujhe",
  "mera", "mere", "mein", "se", "aur", "ya", "kar", "karna", "karte", "sakte", "sakta",
  "karo", "kare", "liye", "tha", "thi", "koi", "kuch", "hoga", "hoti", "hota",
  "unke", "unka", "uska", "apna", "apne", "details", "detail", "information", "share", "show",
  "know", "need", "want", "get", "give", "haan", "ji", "krishanu", "kaundilya",
  "am", "looking", "interested", "regarding", "roughly", "approximately", "much", "also", "needed",
]);

function words(text: string): string[] {
  return [...new Set(normalizeQuestion(text).split(" ").filter(token => token.length > 1 && !STOP_WORDS.has(token)))];
}

// Known entities distinguish e.g. Tohfa channels from ADSMARK01 channels.
const ENTITY_WORDS = new Set([
  "dtss", "technomize", "cybersapiens", "tohfa", "adsmark01", "indiganic", "crawl", "nextwaves",
  "coredhristi", "cored", "capt", "iim", "bca", "ceh", "github", "linkedin",
]);
const exactQuestions = new Map<string, FAQ>();
const frequencies = new Map<string, number>();
const index = knowledgeBase.map(faq => {
  const questions = faq.questions.map(question => ({ text: normalizeQuestion(question), words: words(question) }));
  for (const question of questions) exactQuestions.set(question.text, faq);
  const keywords = faq.keywords.map(keyword => ({ text: normalizeQuestion(keyword), words: words(keyword) }));
  const allWords = new Set([...questions.flatMap(q => q.words), ...keywords.flatMap(k => k.words)]);
  allWords.forEach(word => frequencies.set(word, (frequencies.get(word) ?? 0) + 1));
  return { faq, questions, keywords, allWords };
});
const weight = (word: string) => Math.min(4, 1 + Math.log((index.length + 1) / ((frequencies.get(word) ?? 0) + 1)));

/** One edit or transposition; only used for an unknown word with a unique close candidate. */
function nearWord(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) > 1) return false;
  if (a.length === b.length) {
    const differences = [...a].flatMap((char, i) => char === b[i] ? [] : [i]);
    return differences.length === 1 || (differences.length === 2 && differences[1] === differences[0] + 1
      && a[differences[0]] === b[differences[1]] && a[differences[1]] === b[differences[0]]);
  }
  const [short, long] = a.length < b.length ? [a, b] : [b, a];
  let i = 0;
  while (i < short.length && short[i] === long[i]) i++;
  return short.slice(i) === long.slice(i + 1);
}

function correctWord(token: string): string {
  if (frequencies.has(token) || token.length < 5 || /^\d/.test(token)) return token;
  const candidates = [...frequencies.keys()].filter(word => word.length >= 5 && nearWord(token, word));
  return candidates.length === 1 ? candidates[0] : token;
}

/** Precomputed local retrieval: no API calls, answer generation or substring-only matches. */
export function findAnswer(userQuestion: string): string | null {
  if (userQuestion.length > MAX_QUESTION_LENGTH) return null;
  const normalized = normalizeQuestion(userQuestion);
  if (!normalized) return null;
  const exact = exactQuestions.get(normalized);
  if (exact) return exact.answer;

  const tokens = words(normalized);
  // Ignore an opening greeting when it accompanies an actual topic.
  const queryWords = [...new Set(tokens.filter(word => tokens.length === 1 || !["hi", "hello", "hey"].includes(word)).map(correctWord))];
  if (!queryWords.length) {
    return /\bkrishanu\b/.test(normalized) ? knowledgeBase.find(faq => faq.id === "krishanu-profile")!.answer : null;
  }
  const queryEntities = queryWords.filter(word => ENTITY_WORDS.has(word));
  const totalWeight = queryWords.reduce((sum, word) => sum + weight(word), 0);
  let best: { answer: string; score: number } | null = null;

  for (const entry of index) {
    if (queryEntities.some(entity => !entry.allWords.has(entity))) continue;
    const overlap = queryWords.filter(word => entry.allWords.has(word));
    const coverage = overlap.reduce((sum, word) => sum + weight(word), 0) / totalWeight;
    // An entity name alone must not answer a long unrelated question about that entity.
    if (coverage < (queryWords.length > 2 ? .65 : 1)) continue;

    let bestSimilarity = 0;
    for (const saved of entry.questions) {
      const matching = queryWords.filter(word => saved.words.includes(word));
      const matchedWeight = matching.reduce((sum, word) => sum + weight(word), 0);
      const savedWeight = saved.words.reduce((sum, word) => sum + weight(word), 0);
      const similarity = (2 * matchedWeight) / (totalWeight + savedWeight || 1);
      bestSimilarity = Math.max(bestSimilarity, similarity);
    }
    let keywordScore = 0;
    for (const keyword of entry.keywords) {
      if (!keyword.words.length) continue;
      if (keyword.words.every(word => queryWords.includes(word))) {
        const queryExact = keyword.text === normalized;
        keywordScore = Math.max(keywordScore, (queryExact ? 6 : 2) + keyword.words.length * .25);
      }
    }
    const score = bestSimilarity * 6 + coverage * 2 + keywordScore;
    if (score >= 5 && (!best || score > best.score)) best = { answer: entry.faq.answer, score };
  }
  return best?.answer ?? null;
}
