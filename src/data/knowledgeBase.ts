
export type FAQ = {
  id: string;
  category: string;
  questions: string[];
  keywords: string[];
  answer: string;
};

export const knowledgeBase: FAQ[] = [
  {
    id: "github-profile",
    category: "profile",
    questions: [
      "What is Krishanu's GitHub profile?",
      "Where can I find his GitHub?",
      "What is his GitHub username?",
      "Krishanu ka GitHub account kya hai?",
    ],
    keywords: [
      "github",
      "username",
      "repositories",
      "source code",
    ],
    answer:
      "You can explore the GitHub profile associated with this portfolio here: https://github.com/krishanumishra778",
  },
  {
    id: "portfolio-owner",
    category: "profile",
    questions: [
      "Who is Krishanu?",
      "Tell me about the portfolio owner",
      "Who is this portfolio about?",
    ],
    keywords: [
      "krishanu",
      "about",
      "introduction",
      "portfolio owner",
    ],
    answer:
      "This portfolio presents Krishanu's professional work. Explore the About, Experience, Services, and Projects sections to learn more.",
  },
  {
    id: "ai-security",
    category: "expertise",
    questions: [
      "What is AI security?",
      "Does he work on AI security?",
      "What is LLM security testing?",
    ],
    keywords: [
      "ai security",
      "llm security",
      "prompt injection",
      "red teaming",
    ],
    answer:
      "AI and LLM security testing focuses on identifying weaknesses in AI applications, including prompt injection and unsafe model behavior. Check the portfolio's verified projects and services for the owner's specific work.",
  },
];
