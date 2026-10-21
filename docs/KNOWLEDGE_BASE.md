# Portfolio assistant knowledgebase

Updated October 21, 2026.

## Coverage

This enhancement adds **375 authored English and Hinglish questions**, grouped into **125 detailed answer topics**. Each question resolves to its topic's complete answer. Grouping paraphrases avoids duplicating answers and keeps corrections consistent. With the 29 existing topics, the corpus contains 154 answer topics and 576 saved questions.

Coverage includes founder identity, career transitions, employment dates, education, credential validity, all six client cases, AI/CRM services, WhatsApp and calling workflows, security assessments, CoreD, CAPT Bhopal and practical project enquiries.

Corrections: DTSS ended March 2026; CEH renewal is not confirmed; the petroleum CRM is not claimed to use AI; Crawl Digitally is a security engagement; Next Tech Waves is closed. Unsupported outcome percentages and aviation-client questions were removed rather than treated as established results.

## Architecture

- `src/data/portfolioData.ts`: new `professionalFAQs`, shared `assistantCopy` and visible first-party content.
- `src/data/knowledgeBase.ts`: corrected existing topics plus the assembled corpus.
- `src/types/knowledgeBase.ts`: shared schema and optional evidence category.
- `src/lib/answerMatcher.ts`: precomputed retrieval, normalization and scoring.
- `src/lib/findAnswer.ts`: stable public import for the matcher.
- `src/components/chatbot/ChatbotWindow.tsx`: display and interactions, without new factual generation.
- `src/lib/findAnswer.test.ts`: corpus integrity, all saved questions, keyword/paraphrase/typo tests and unrelated-query rejection.

No model API, embeddings service or new dependency was added. This local matcher does not know live account state, pricing updates or calendar availability.

## Matching

Exact saved questions take priority. Normalization handles punctuation, case, organization aliases, CV and pricing synonyms. Unknown words receive a spelling correction only if exactly one close candidate exists. Whole-word keywords and weighted query coverage rank the remaining candidates. Recognized organization or credential names constrain matches, so a Tohfa feature is not used as evidence for ADSMARK01.

Short queries such as CRM, fees, AI, automation, CEH, GitHub and Core D have explicit coverage. Personal services are distinguished from marketplace categories and platform prices. Empty, over-500-character or unrelated queries return no answer and trigger the honest fallback.

## Maintenance

1. Check `docs/CONTENT_BRIEF.md` and subsequent user corrections before adding facts.
2. Add a stable ID, three distinct questions, relevant keywords and one complete answer to `professionalFAQs`. Keep content in data modules.
3. Evidence categories are `portfolio`, `public-profile`, `engagement-scope` and `platform`. Process guidance describes scope to agree, not an existing contractual promise.
4. Do not infer renewal, an MBA, client metrics, rates, phone numbers or weekly capacity. Do not use unverified testimonials in answers.
5. Keep normalized questions unique across topics. Add regression queries with different wording and retain unknown-query checks.
6. Run lint, TypeScript, tests and production build. Check displayed chat copy and interactions on mobile, tablet and desktop.

## Windows verification

An initial test run failed before collection because the sandbox default temporary directory rejected a rename. A workspace temporary directory resolved it:

```powershell
New-Item -ItemType Directory -Path '.next\test-temp' -Force | Out-Null
$env:TEMP = Join-Path (Get-Location) '.next\test-temp'
$env:TMP = $env:TEMP
npm test
```

Actual check outputs are in `docs/CHANGELOG.md`. Browser evidence is in `docs/previews/knowledgebase-*.png`. A production build was verified with normal process/network access after the restricted build stalled.
