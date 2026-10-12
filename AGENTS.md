# AGENTS.md — Instructions for AI Coding Agents

## Project Overview
This repository contains the official personal portfolio website for **Krishanu Kaundilya** — Founder @ CoreDhristi, AI Agent & Automation Developer, and Cybersecurity Specialist.

The project is built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**. The primary Next.js project is located in `sir-portfolio/`.

---

## Critical Engineering & Workflow Protocols

### 1. Mandatory Phase-Wise Development
- Development proceeds through sequentially approved phases:
  - **Phase 0:** Project inspection, rules, and documentation setup *(Current Phase)*.
  - **Phase 1:** Reference review, architecture, and design system tokens.
  - **Phase 2:** Navbar, Hero, and About sections.
  - **Phase 3:** Work Experience and Achievements.
  - **Phase 4:** Services, Current Initiatives (CoreDhristi & Nextwaves), and Testimonials.
  - **Phase 5:** Footer, integration, responsive testing, and accessibility verification.
  - **Phase 6:** SEO, GEO, AIO, structured data (JSON-LD), performance, and micro-animations.
- **NEVER** build sections belonging to future phases before the current phase is completed, tested, and explicitly approved by the user.
- **NEVER** attempt to generate the entire website in a single prompt or batch.

### 2. Component Reuse & Strict DRY Principle
- Inspect `src/components/` before creating any new component.
- Build and reuse core layout and UI primitives:
  - Shared `Navbar` and `Footer`.
  - Shared `Button` (with variants: primary orange pill, secondary dark, outline, text).
  - Shared `Container` (standardized max-width and horizontal padding).
  - Shared `SectionHeading` (section badge, heading, subtitle).
  - Reusable card patterns for Experience, Achievements, Services, and Testimonials.
- Do not duplicate markup, Tailwind classes, or event handlers across pages.

### 3. Separation of Concerns & Clean Data Architecture
- All content and profile copy must reside in dedicated data modules: `src/data/portfolioData.ts`.
- Component files must handle presentation and user interactions only.
- Utility functions (e.g., class merge `cn()`, analytics helpers) belong in `src/lib/`.

### 4. Visual Fidelity & Verified Design Reference
- Match the visual aesthetics established by the reference screenshot (`localhost:3000`) and the handwritten wireframe:
  - **Background:** Subtle warm linen/cream grid background (`#F9F8F4`).
  - **Navbar:** Floating dark pill navbar (`#1E1E1E`) with rounded edges, brand mark, navigation links, and amber "Let's Talk" button.
  - **Hero Section:**
    - Left: "Welcome" pill, "Krishanu Kaundilya ✦", "Founder @ CoreDhristi" in golden amber, concise subtext highlighting verified AI agents & 7-layer security, and "Let's Talk" CTA.
    - Right: Rounded portrait card utilizing `public/Images/Sir image.jpg` with floating "7-Layer Security" badge and "Solutions for the AI Agent Economy" pill.
- Avoid generic templates, saturated primary colors, or excessive decorative clutter.

### 5. Truthful Information & No Hallucinations
- Present verified information only. Krishanu Kaundilya's background:
  - Founder of CoreDhristi (CoreDhristi LLP, incorporated Oct 2026).
  - Cybersecurity Specialist / Information Security Consultant (CEH, VAPT, SAST/DAST, offensive security).
  - AI Agent and Automation Developer (MCP servers, multi-agent frameworks, 7-layer security verification).
- Do not fabricate client testimonials, company metrics, student counts, or employment tenures. Keep unverified items documented in `roadmap.md` under blockers/pending.

### 6. Verification & Quality Gates
- After each code modification, execute:
  1. `npm run lint` — Must report 0 errors.
  2. `npx tsc --noEmit` — Must report 0 type errors.
  3. Visual & responsive verification at mobile (375px), tablet (768px), and desktop (1280px+).
- Record actual command output in `docs/CHANGELOG.md`. Never invent or assume test results.

### 7. Documentation Synchronization
- At the end of every phase:
  - Update `roadmap.md` with actual task status, completed work, and remaining items.
  - Add an entry to `docs/CHANGELOG.md` with dates, changed files, components created, and check results.
  - Update `docs/DEVELOPER_GUIDE.md` when architectural patterns or data schemas change.
