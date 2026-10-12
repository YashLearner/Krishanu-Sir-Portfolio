/**
 * Utility functions for Krishanu Kaundilya's Portfolio
 */

/**
 * Conditionally joins CSS class names into a single string.
 * Native zero-dependency implementation.
 */
export function cn(...classes: (string | undefined | null | false | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}
