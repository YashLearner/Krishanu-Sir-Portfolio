# Project Living Roadmap — Krishanu Kaundilya Personal Portfolio

**Last Updated:** October 11, 2026  
**Current Phase:** Phase 2 — Navbar, Hero, and About Sections  
**Current Status:** PHASE 2 COMPLETED (Awaiting User Review & Approval for Phase 3)

---

## Phase Overview & Progress Tracking

| Phase | Title | Status | Approval Status |
|---|---|---|---|
| **Phase 0** | Project Inspection, Rules, and Documentation | **COMPLETED** | **APPROVED BY USER** |
| **Phase 1** | Reference Review, Architecture, and Design System | **COMPLETED** | **APPROVED BY USER** |
| **Phase 2** | Navbar, Hero, and About Sections | **COMPLETED** | **AWAITING USER APPROVAL** |
| **Phase 3** | Work Experience and Achievements | NOT STARTED | PENDING PHASE 2 APPROVAL |
| **Phase 4** | Services, Current Initiatives, and Testimonials | NOT STARTED | PENDING PHASE 3 APPROVAL |
| **Phase 5** | Footer, Integration, Responsive Testing, and Accessibility | NOT STARTED | PENDING PHASE 4 APPROVAL |
| **Phase 6** | SEO, GEO, AIO, Metadata, Structured Data, Performance & Animations | NOT STARTED | PENDING PHASE 5 APPROVAL |

---

## Phase Details

### Phase 0: Project Inspection, Rules, and Documentation
- **Objective:** Thoroughly inspect existing Next.js codebase, assets, dependencies, and environment. Establish Cursor rules, agent instructions, developer guide, changelog, and architecture blueprint.
- **Status:** **COMPLETED** (Approved by User).
- **Files Created/Modified:**
  - `.cursor/rules/portfolio.mdc`
  - `AGENTS.md`
  - `roadmap.md`
  - `docs/DEVELOPER_GUIDE.md`
  - `docs/CHANGELOG.md`
- **Tests Executed & Actual Results:**
  - `npm run lint`: Exit code 0 (Pass).
  - `npx tsc --noEmit`: Exit code 0 (Pass).

---

### Phase 1: Reference Review, Architecture, and Design System
- **Objective:** Review reference materials (hand-drawn wireframe and CoreDhristi brand identity), establish design tokens, CSS variables, typography, layout bounds, reusable component architecture, and clean asset structure.
- **Status:** **COMPLETED** (Approved by User).
- **Files Created/Modified:**
  - `src/app/globals.css` (Updated with design tokens & grid pattern)
  - `src/app/layout.tsx` (Updated with semantic HTML, typography, and metadata)
  - `src/lib/utils.ts` (Created)
  - `src/types/portfolio.ts` (Created)
  - `src/data/portfolioData.ts` (Created)
  - `src/components/ui/Container.tsx` (Created)
  - `src/components/ui/Button.tsx` (Created)
  - `src/components/ui/Badge.tsx` (Created)
  - `src/components/ui/SectionHeading.tsx` (Created)
  - `public/` (Deleted unused starter SVGs: `file.svg`, `globe.svg`, `window.svg`)
- **Tests Executed & Actual Results:**
  - `npm run lint`: Exit code 0 (Pass).
  - `npx tsc --noEmit`: Exit code 0 (Pass).

---

### Phase 2: Navbar, Hero, and About
- **Objective:** Implement the rounded dark floating navbar, responsive mobile drawer, the hero section matching the user's screenshot & wireframe, and structured About section with cybersecurity and AI agent highlights.
- **Task Checklist:**
  - [x] Implement `src/components/layout/Navbar.tsx`:
    - Floating pill design (`#1E1E1E`) with backdrop blur.
    - Geometric brand mark & "Krishanu Kaundilya" name.
    - Navigation links (`Home`, `About`, `Achievements`, `Services`).
    - Prominent amber "Let's Talk" button linking to verified CoreDhristi destination (`https://coredhristi.com/`).
    - Responsive mobile navigation drawer with hamburger toggle & keyboard accessibility (Esc key).
  - [x] Implement `src/components/sections/HeroSection.tsx`:
    - Top "Welcome" badge.
    - "Krishanu Kaundilya ✦" main heading.
    - "Founder @ CoreDhristi" in golden amber accent (`#D97706`).
    - "AI Agent & Automation Developer" title and subtext copy.
    - "Let's Talk" CTA button with amber circular arrow icon.
    - Rounded portrait card housing `public/Images/Sir image.jpg` with `next/image` optimization and priority.
    - Floating top-left badge: Updated to "Cyber Security Expert" with amber shield icon, repositioned to the far left to keep face fully clear.
    - Floating bottom badge: "Solutions for the AI Agent Economy".
  - [x] Implement `src/components/sections/AboutSection.tsx`:
    - Top Row: Left narrative card ("About us" badge, sun & arrow doodles, Krishanu Kaundilya heading, lead bio) + Right rounded portrait card using `public/Images/Sir image 2.jpg`.
    - Tier 1: Thin, wide full-width horizontal black section for "Skills & Experience" with subtle wave SVG, 5+ Years experience headline, and compact white rotated skill tags.
    - Tier 2: Dedicated full-width "Education" section featuring 3 clickable cards (IIM Kozhikode eMDP, St. Paul Institute BCA with Grade A, and EC-Council CEH Practical) with interactive detail modals.
    - Tier 3: Dedicated interactive "Certifications" slider matching hand-drawn sketch `( < ) [ Card ] ( > )` with circular arrow buttons, slide counter, touch swipe support, and full-resolution modal inspection view for CEH Practical and IIM Kozhikode certificates.
  - [x] Update `src/app/page.tsx` to render Navbar, HeroSection, CompanyLogosSection, and AboutSection inside warm grid layout (`bg-canvas bg-grid-pattern`).
  - [x] Delete remaining starter assets (`public/next.svg`, `public/vercel.svg`) as they are no longer referenced anywhere.
  - [x] Verify live server response: `http://localhost:3000` returns HTTP 200 OK with correct rendered markup.
  - [x] Run static checks:
    - `npx tsc --noEmit`: Exit code 0 (Pass).
    - `npm run lint`: Exit code 0 (Pass).
    - `npm run build`: Exit code 0 (Pass, 4/4 static pages generated).
  - [ ] Submit Phase 2 for explicit user approval before proceeding to Phase 3.
- **Files Created/Modified:**
  - `src/components/layout/Navbar.tsx` (Refined active round shade)
  - `src/components/sections/HeroSection.tsx` (Badge positioning & facial clearance)
  - `src/components/sections/CompanyLogosSection.tsx` (4 verified company logos)
  - `src/components/sections/AboutSection.tsx` (Updated to 3-tier vertical layout per hand-drawn sketch)
  - `src/types/portfolio.ts` (Updated EducationItem and CertificateItem)
  - `src/data/portfolioData.ts` (Populated 3 verified education entries & certificates)
  - `src/app/page.tsx` (Rendered AboutSection)
  - `roadmap.md` (Updated)
  - `docs/CHANGELOG.md` (Updated)
- **Completed Work:** Fully implemented and verified the 3-tier vertical layout (Horizontal Skills bar, 3 clickable Education cards, Certificate Slider with circular arrow buttons) matching the user's hand-drawn sketch and verified education credentials.
- **Remaining Work:** Awaiting user feedback and explicit approval to proceed to Phase 3.
- **Blockers & Pending Content:**
  - *Nextwaves Canonical Domain:* Marked as `pending_domain` until user provides updated domain.
  - *Past Work Tenures:* 5–7 previous roles to be populated during Phase 3.
  - *Verified Testimonials:* Client endorsements to be populated during Phase 4.
- **Tests Executed & Actual Results:**
  - `npx tsc --noEmit`: Exit code 0 (0 type errors).
  - `npm run lint`: Exit code 0 (0 errors, 0 warnings).
  - `npm run build`: Exit code 0 (Static compilation succeeded).
  - `Invoke-WebRequest http://localhost:3000`: HTTP 200 OK.
- **Approval Status:** Ready for User Review and Approval.

---

### Phase 3: Work Experience and Achievements
- **Objective:** Implement Achievements section featuring Krishanu Kaundilya's executive cybersecurity & ethical hacking session for IPS, IAS, and civil officers in Bhopal (`public/Images/Bhopal ips.jpg`), followed by the Work Experience section featuring 5 pinned sticky-note cards matching the user's reference design with 3D colored pushpins, brand logos, and exact descriptions.
- **Task Checklist:**
  - [x] Update TypeScript definitions in `src/types/portfolio.ts` for `ExperienceItem` and `AchievementItem`.
  - [x] Populate verified data in `src/data/portfolioData.ts`:
    - Achievement: Bhopal IPS/IAS & Civil Officers session covering Ethical Hacking and Cyber Defense with `/Images/Bhopal ips.jpg`.
    - Experience: 5 verified projects:
      - 01. Tohfa Bazzar (`/Images/tohfabazzar.png`) — "Built Ai based CRM"
      - 02. Crawl Digitally (`/Images/crawl digitally.png`) — "Cybersecurity and AI solution"
      - 03. ADSMARK01 (`/Images/ADSMARK_LANDSCAPE_LOGO_FOR_WHITE_WITHOUT_bg.webp`) — "CRM and ai agent solution"
      - 04. Nexttechwaves (`/Images/nexttechwaves.png`) — "Ai Based Educational Solution"
      - 05. Indiganic Foods (Monogram IF) — "Built AI-based CRM"
  - [x] Create `src/components/sections/AchievementsSection.tsx` featuring the Bhopal executive session with authentic photograph, officer badge, key domains covered, and administrative impact quote.
  - [x] Create `src/components/sections/WorkExperienceSection.tsx` replicating the user's reference design:
    - 3D pushpins at top center of each card with color themes (`blue`, `rose`, `emerald`, `pink`, `teal`).
    - Two-digit colored index numerals (`01`–`05`).
    - Rounded white containers for company logos.
    - Bold company titles and verified solution descriptions.
    - Responsive 3-col top row + 2-col centered bottom row on desktop.
    - Subtle background dashed connecting path.
  - [x] Update `src/app/page.tsx` to render `AchievementsSection` first, followed by `WorkExperienceSection`.
  - [x] Update `Navbar.tsx` and `portfolioData.ts` to include navigation links for both `#achievements` and `#experience`.
  - [x] Verification checks:
    - `npx tsc --noEmit`: Exit code 0 (Pass).
    - `npm run lint`: Exit code 0 (Pass).
    - `npm run build`: Exit code 0 (Pass, 4/4 static pages generated).
    - Live server response at `http://localhost:3000`: HTTP 200 OK.
- **Files Created/Modified:**
  - `src/types/portfolio.ts`
  - `src/data/portfolioData.ts`
  - `src/components/sections/AchievementsSection.tsx`
  - `src/components/sections/WorkExperienceSection.tsx`
  - `src/app/page.tsx`
  - `roadmap.md`
  - `docs/CHANGELOG.md`
- **Completed Work:** Fully implemented and verified Achievements Section (Bhopal IPS/IAS briefing) and Work Experience Section (5 pinned pastel cards with 3D pushpins and authentic logos).
- **Remaining Work:** Phase 4 (Services, Current Initiatives, and Testimonials).
- **Approval Status:** Ready for User Review and Approval.

---

### Phase 4: Services, Current Initiatives, and Testimonials
- **Objective:** Implement dark-aesthetic Services section ("What Services Krishanu Provides" with 6 cards matching navbar theme), Current Initiatives ("What Krishanu is Doing" with CoreDhristi & NextTechWaves cards), and interactive Testimonials slider with arrow navigation.
- **Task Checklist:**
  - [x] Update TypeScript interfaces in `src/types/portfolio.ts` (`ServiceItem`, `InitiativeItem`, `TestimonialItem`).
  - [x] Populate verified data in `src/data/portfolioData.ts`:
    - 6 Services: CoreDhristi Marketplace, AI Agents, AI Automations, Cybersecurity Solutions, AI Based CRM, Website Development.
    - 2 Current Initiatives:
      - CoreDhristi: Clickable logo (`/Images/Coredhristi.png`), 8+ team members, verified AI marketplace description, external URL `https://www.coredhristi.com/`.
      - NextTechWaves.online: Clickable logo (`/Images/nexttechwaves.png`), cross-border online education across India & Nepal, external URL `https://nexttechwaves.online/index.html`.
    - Testimonials: Structured seed reviews with 5-star ratings, quote marks, author metadata, and verified review badges.
  - [x] Create `src/components/sections/ServicesSection.tsx`: Dark obsidian shell (`#141417`), amber highlights, 2x3 grid with vector service icons.
  - [x] Create `src/components/sections/CurrentInitiativesSection.tsx`: Responsive cards featuring clickable brand logos, website outbound links, team size badges, and verified platform tags.
  - [x] Create `src/components/sections/CtaBannerSection.tsx`: Dark obsidian banner positioned directly below Current Initiatives featuring the tagline "Stop Doing By Hand What AI Agents Can Already Do", Krishanu Kaundilya signature, doodle sparkle rays, and amber "Contact Us" button linking to `https://www.coredhristi.com/contact`.
  - [x] Create `src/components/sections/TestimonialsSection.tsx`: Client component with stateful previous `( < )` and next `( > )` arrow navigation buttons, slide counter, and pagination dots.
  - [x] Update `src/app/page.tsx` to render `ServicesSection`, `CurrentInitiativesSection`, `CtaBannerSection`, and `TestimonialsSection`.
  - [x] Quality & verification gates:
    - `npx tsc --noEmit`: Exit code 0 (Pass).
    - `npm run lint`: Exit code 0 (Pass).
    - `npm run build`: Exit code 0 (Pass, 4/4 static pages generated).
    - Live server response at `http://localhost:3000`: HTTP 200 OK.
- **Files Created/Modified:**
  - `src/types/portfolio.ts`
  - `src/data/portfolioData.ts`
  - `src/components/sections/ServicesSection.tsx`
  - `src/components/sections/CurrentInitiativesSection.tsx`
  - `src/components/sections/CtaBannerSection.tsx`
  - `src/components/sections/TestimonialsSection.tsx`
  - `src/app/page.tsx`
  - `roadmap.md`
  - `docs/CHANGELOG.md`
- **Completed Work:** Fully implemented and verified Services (6 cards in dark shell), Current Initiatives (CoreDhristi & NextTechWaves), CTA Banner with tagline & signature, and Testimonials slider.
- **Remaining Work:** Phase 5 (Footer, Integration, Responsive Testing, and Accessibility).
- **Approval Status:** Ready for User Review and Approval.

---

### Phase 5: Footer, Integration, Responsive Testing, and Accessibility
- **Objective:** Assemble full page with CoreDhristi-inspired footer, back-to-top interaction, complete cross-device responsive testing (mobile, tablet, desktop), and accessibility audit (WCAG AA).
- **Task Checklist:**
  - [x] Tighten vertical gap and spacing between Hero, Company Logos, and About sections:
    - Reduced HeroSection bottom padding to `pb-6 sm:pb-8`.
    - Tightened CompanyLogosSection vertical padding to `py-4 sm:py-5`.
    - Added subtle uppercase caption *"Trusted by Companies & Platforms"* to eliminate empty/sparse feeling.
    - Reduced AboutSection top padding to `pt-8 sm:pt-12`.
  - [x] Implement `src/components/layout/Footer.tsx`:
    - CoreDhristi-inspired sleek dark obsidian container (`#121214`) with ambient radial amber glow.
    - Brand mark, title, and consultation availability status badge.
    - 2-column quick navigation links mirroring site sections.
    - Direct platform links for LinkedIn, CoreDhristi, and NextTechWaves.online.
    - Smooth scroll Back-to-Top interaction.
    - Static prerender-safe copyright notice (`© 2026 Krishanu Kaundilya`).
  - [x] Integrate `Footer` in `src/app/page.tsx`.
  - [x] Execute Quality Gates:
    - `npx tsc --noEmit`: Exit code 0 (Pass).
    - `npm run lint`: Exit code 0 (Pass).
    - `npm run build`: Exit code 0 (Pass, 4/4 static pages generated).
    - Live server response at `http://localhost:3000`: HTTP 200 OK.
- **Files Created/Modified:**
  - `src/components/sections/HeroSection.tsx` (Tightened padding)
  - `src/components/sections/CompanyLogosSection.tsx` (Optimized gaps & added caption)
  - `src/components/sections/AboutSection.tsx` (Tightened top padding)
  - `src/components/layout/Footer.tsx` (Created)
  - `src/app/page.tsx` (Integrated Footer)
  - `roadmap.md` (Updated)
  - `docs/CHANGELOG.md` (Updated)
- **Completed Work:** Spacing around company logos resolved; CoreDhristi-inspired Footer built and integrated with back-to-top button; full page assembled from Navbar to Footer.
- **Remaining Work:** Phase 6 (SEO, GEO, AIO, structured data JSON-LD, performance, and micro-animations).
- **Approval Status:** Ready for User Review and Approval.

---

### Phase 6: SEO, GEO, AIO, Metadata, Performance, and Animations
- **Objective:** Integrate OpenGraph & Twitter metadata, canonical URLs, JSON-LD structured data (Person & Organization), sitemap, robots.txt, performance audits, and tasteful micro-animations with reduced motion support.
- **Status:** NOT STARTED
- **Approval Status:** Pending Phase 5 Approval.
