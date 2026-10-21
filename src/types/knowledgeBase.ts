export type FAQ = {
  id: string;
  category: string;
  questions: string[];
  keywords: string[];
  answer: string;
  /** First-party record supporting facts; process entries describe scope, not promises. */
  source?: "portfolio" | "engagement-scope" | "public-profile" | "platform";
};
