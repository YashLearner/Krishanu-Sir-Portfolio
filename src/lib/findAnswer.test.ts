
import { describe, expect, it } from "vitest";
import { knowledgeBase } from "@/data/knowledgeBase";
import { professionalFAQs } from "@/data/portfolioData";
import { findAnswer, normalizeQuestion } from "./findAnswer";

function getExpectedAnswer(faqId: string): string {
  const faq = knowledgeBase.find(
    (entry) => entry.id === faqId
  );

  if (!faq) {
    throw new Error(`FAQ not found: ${faqId}`);
  }

  return faq.answer;
}

describe("findAnswer", () => {
  it("returns the correct answer for an exact question", () => {
    expect(
      findAnswer("What is Krishanu's GitHub profile?")
    ).toBe(getExpectedAnswer("github-profile"));
  });

  it("finds answers using relevant keywords", () => {
    expect(
      findAnswer("Please show me the GitHub repositories")
    ).toBe(getExpectedAnswer("github-profile"));
  });

  it("supports saved Hinglish questions", () => {
    expect(
      findAnswer("Krishanu ka GitHub account kya hai?")
    ).toBe(getExpectedAnswer("github-profile"));
  });

  it("returns null for an empty question", () => {
    expect(findAnswer("   ")).toBeNull();
  });

  it("returns null for an unrelated question", () => {
    expect(
      findAnswer("What is your favorite color?")
    ).toBeNull();
  });
});

describe("knowledgebase integrity", () => {
  it("adds 375 authored questions across 125 detailed answer topics", () => {
    expect(professionalFAQs).toHaveLength(125);
    expect(professionalFAQs.flatMap(faq => faq.questions)).toHaveLength(375);
    expect(new Set(knowledgeBase.map(faq => faq.id)).size).toBe(knowledgeBase.length);
  });

  it("has no conflicting normalized questions and no empty records", () => {
    const owners = new Map<string, string>();
    for (const faq of knowledgeBase) {
      expect(faq.answer.trim().length, faq.id).toBeGreaterThan(30);
      expect(faq.keywords.length, faq.id).toBeGreaterThan(0);
      for (const question of faq.questions) {
        const normalized = normalizeQuestion(question);
        expect(owners.get(normalized) ?? faq.id, question).toBe(faq.id);
        owners.set(normalized, faq.id);
      }
    }
  });

  it.each(knowledgeBase.flatMap(faq => faq.questions.map(question => ({ id: faq.id, question, answer: faq.answer }))))(
    "$id resolves $question",
    ({ question, answer }) => expect(findAnswer(question)).toBe(answer),
  );

  it("keeps known historical facts accurate", () => {
    expect(getExpectedAnswer("consulting-work")).toContain("March 2026");
    expect(getExpectedAnswer("ceh-renewal")).toContain("not confirmed");
    expect(getExpectedAnswer("iim-not-mba")).toContain("not as an MBA");
    expect(getExpectedAnswer("crawl-not-crm")).toContain("cybersecurity");
    expect(getExpectedAnswer("fuel-not-ai")).toContain("AI was not confirmed");
  });
});

describe("natural language and keyword retrieval", () => {
  const cases = [
    ["CRM", "custom-crm-service"],
    ["AI agents", "ai-agent-service"],
    ["AI", "ai-agent-service"],
    ["automation", "ai-agent-service"],
    ["cybersecurity", "security-focus-areas"],
    ["skills", "skills-overview"],
    ["projects", "projects-overview"],
    ["education", "education-overview"],
    ["tools", "tools-overview"],
    ["service", "services-overview"],
    ["email", "project-contact"],
    ["whatsapp", "whatsapp-service"],
    ["fees", "project-pricing"],
    ["budget", "project-pricing"],
    ["CV", "resume-request"],
    ["Core D", "cored-purpose"],
    ["Coredhrsti", "coredhristi-purpose"],
    ["DTSS", "dtss-tenure"],
    ["Technomize", "technomize-tenure"],
    ["CyberSapien", "cybersapiens-tenure"],
    ["BCA", "bca-institution"],
    ["MBA", "iim-not-mba"],
    ["LinkedIn", "linkedin-profile"],
    ["GitHub", "github-profile"],
    ["Gmail", "gmail-workflows"],
    ["VAPT", "vapt-service"],
    ["malware", "malware-service"],
    ["n8n", "specific-tool-stack"],
    ["CAPT Bhopal", "capt-content"],
    ["Crawl Digitally", "crawl-overview"],
    ["ADSMARK01", "adsmark-overview"],
    ["Tohfa Bazaar", "tohfa-overview"],
    ["NextTechWaves", "nextwaves-founder"],
    ["Indiganic Foods", "indiganic-overview"],
    ["Do you do crm developmnt?", "custom-crm-service"],
    ["I want whatsap automation", "whatsapp-service"],
    ["Tohfa integrations please", "tohfa-channels"],
    ["adsmark channels", "adsmark-integrations"],
    ["Crawl CRM", "crawl-not-crm"],
    ["CEH renewal", "ceh-renewal"],
    ["petroleum AI", "fuel-not-ai"],
    ["Please explain DTSS reporting", "dtss-reporting"],
    ["HELLO!!!", "greeting"],
    ["Thanks!", "thanks"],
    ["How much are the freelance charges?", "project-pricing"],
    ["I am looking for custom CRM pricing", "project-pricing"],
    ["What budget is needed for AI automation?", "project-pricing"],
    ["VAPT delivery time", "project-timeline"],
    ["CEH", "certifications"],
    ["Hi CRM", "custom-crm-service"],
  ];

  it.each(cases)("%s matches %s", (question, id) => {
    expect(findAnswer(question)).toBe(getExpectedAnswer(id));
  });

  it.each([
    "", "  ", "???", "What is your favorite color?", "Who won the cricket match?",
    "capital of France", "Tohfa football league results", "DTSS favorite dinosaur name",
    "buy my crypto token now", "x".repeat(501), "they", "is he",
    "What is the price of gold?", "VAPT football tickets pricing",
  ])("does not invent an answer for %s", question => {
    expect(findAnswer(question)).toBeNull();
  });
});
