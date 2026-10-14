
import { describe, expect, it } from "vitest";
import { knowledgeBase } from "@/data/knowledgeBase";
import { findAnswer } from "./findAnswer";

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
