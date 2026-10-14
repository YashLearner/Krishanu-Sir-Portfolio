
import { knowledgeBase } from "@/data/knowledgeBase";

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "is",
  "are",
  "was",
  "were",
  "what",
  "who",
  "where",
  "when",
  "why",
  "how",
  "do",
  "does",
  "did",
  "his",
  "he",
  "me",
  "tell",
  "about",
  "please",
  "can",
  "you",
  "your",
  "hai",
  "hain",
  "kya",
  "ka",
  "ki",
  "ke",
  "ko",
  "batao",
]);

function getMeaningfulWords(text: string): string[] {
  return normalizeText(text)
    .split(" ")
    .filter((word) => word.length > 1 && !STOP_WORDS.has(word));
}

export function findAnswer(
  userQuestion: string
): string | null {
  const question = normalizeText(userQuestion);

  if (!question) {
    return null;
  }

  let bestAnswer: string | null = null;
  let bestScore = 0;

  for (const faq of knowledgeBase) {
    let score = 0;

    // 1. Exact question match
    const exactMatch = faq.questions.some(
      (savedQuestion) =>
        normalizeText(savedQuestion) === question
    );

    if (exactMatch) {
      return faq.answer;
    }

    // 2. Similarity with saved FAQ questions
    const userWords = new Set(getMeaningfulWords(question));

    for (const savedQuestion of faq.questions) {
      const savedWords = getMeaningfulWords(savedQuestion);

      if (savedWords.length === 0) {
        continue;
      }

      const matchedWords = savedWords.filter((word) =>
        userWords.has(word)
      ).length;

      const similarity = matchedWords / savedWords.length;

      score = Math.max(
        score,
        similarity * 4
      );
    }

    // 3. Match against FAQ keywords
    for (const keyword of faq.keywords) {
      const normalizedKeyword = normalizeText(keyword);

      if (
        normalizedKeyword &&
        ` ${question} `.includes(` ${normalizedKeyword} `)
      ) {
        score += 2;
      }
    }

    // 4. Remember the best matching FAQ
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = faq.answer;
    }
  }

  // Avoid returning an answer for an unrelated question.
  if (bestScore < 2 || bestAnswer === null) {
    return null;
  }

  return bestAnswer;
}
