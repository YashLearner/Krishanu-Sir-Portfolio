# Developer Guide — Krishanu Kaundilya Personal Portfolio

Welcome to the technical developer documentation for **Krishanu Kaundilya's Personal Portfolio**. This guide provides an architectural overview, design token conventions, data update procedures, and development workflows to enable seamless maintenance without reverse-engineering the codebase.

---

## 1. Project Architecture & Directory Structure

The project is built on **Next.js 16 (App Router)** with **React 19**, **Tailwind CSS v4**, and **TypeScript**.

```text
portfolio/
├── sir-portfolio/                       # Next.js Application Root
│   ├── .cursor/rules/
│   │   └── portfolio.mdc               # Cursor AI engineering & quality rules
│   ├── docs/
│   │   ├── DEVELOPER_GUIDE.md          # Technical documentation & guide (this file)
│   │   └── CHANGELOG.md                # Chronological development log
│   ├── public/
│   │   ├── Images/
│   │   │   └── Sir image.jpg           # Official portrait of Krishanu Kaundilya (preserved)
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css             # Design tokens, CSS variables & theme rules
│   │   │   ├── layout.tsx              # Root HTML layout, font loader, base meta
│   │   │   └── page.tsx                # Main single-page portfolio view
│   │   ├── components/                 # Reusable component architecture
│   │   │   ├── ui/                     # Primitives (Container, Button, Badge, SectionHeading)
│   │   │   ├── layout/                 # Layout structures (Navbar in Phase 2, Footer in Phase 5)
│   │   │   └── sections/               # Hero, Marquee, About, Experience, Achievements, Services, Testimonials
│   │   ├── data/
│   │   │   └── portfolioData.ts        # Centralized single source of truth for all content
│   │   ├── lib/
│   │   │   └── utils.ts                # Shared helper functions (zero-dependency cn helper)
│   │   └── types/
│   │       └── portfolio.ts            # Strict TypeScript interfaces for all content structures
│   ├── AGENTS.md                       # Core instructions for AI coding assistants
│   ├── roadmap.md                      # Living project roadmap and milestone tracker
│   ├── package.json                    # Project dependencies and script runner
│   ├── tsconfig.json                   # TypeScript configuration
│   ├── next.config.ts                  # Next.js configuration (Turbopack, cacheComponents)
│   └── eslint.config.mjs               # ESLint 9 configuration
```

---

## 2. Design System & Token Conventions

The visual aesthetic is tailored specifically to Krishanu Kaundilya's brand identity: an authoritative blend of cybersecurity leadership, AI agent innovation, and startup founder credibility. It is directly referenced from his `localhost:3000` reference screenshot, handwritten wireframe, and CoreDhristi (`https://coredhristi.com`).

### Color Palette

| Token | CSS Variable / Hex | Purpose |
|---|---|---|
| **Canvas (Background)** | `#F9F8F4` / `--canvas-bg` | Warm off-white / linen background for a welcoming, human aesthetic. |
| **Grid Lines** | `rgba(0, 0, 0, 0.045)` / `--grid-line` | Subtle technical blueprint grid (72px square overlay via `.bg-grid-pattern`). |
| **Dark Surface (Navbar / Hero Card)** | `#1E1E1E` / `--surface-dark` | Floating pill navbar and hero portrait frame. |
| **Surface Card** | `#FFFFFF` / `--surface-card` | Light cards and floating metric badges. |
| **Brand Accent (Amber / Orange)** | `#F59E0B` / `--brand-accent` | Primary action buttons ("Let's Talk"), highlights, badge accents. |
| **Hover Brand Accent** | `#D97706` / `--brand-accent-hover` | Interactive hover state for primary amber buttons. |
| **Brand Orange** | `#E58A1F` / `--brand-orange` | CoreDhristi brand orange for subtitle text highlights. |
| **Foreground (Primary Text)** | `#18181B` / `--text-primary` | High contrast dark charcoal for headings and body text. |
| **Foreground (Secondary Text)** | `#52525B` / `--text-secondary` | Secondary body text, descriptions, and taglines. |
| **Foreground (Muted Text)** | `#71717A` / `--text-muted` | Metadata, dates, and subtle footnotes. |
| **Border Subtle** | `rgba(0, 0, 0, 0.08)` / `--border-subtle` | Refined container and card borders. |
| **Border Dark** | `rgba(255, 255, 255, 0.12)` / `--border-dark` | Borders for dark surfaces (Navbar, Hero frame). |

### Typography & Spacing
- **Font Sans:** Geist Sans (`var(--font-geist-sans)`), with clean fallback to `system-ui, -apple-system, sans-serif`.
- **Font Mono:** Geist Mono (`var(--font-geist-mono)`).
- **Responsive Layout Constraints:** Standard max-width `max-w-7xl` (1280px) with responsive horizontal padding `px-4 sm:px-6 lg:px-8`.
- **Border Radii:**
  - `rounded-full` (9999px): Floating Navbar, pill buttons, and badge chips.
  - `rounded-3xl` (24px–32px): Hero portrait card and primary containers.
  - `rounded-2xl` (16px): Service, Experience, and Achievement cards.

---

## 3. Reusable UI Primitives

All UI components reside in `src/components/ui/` and adhere strictly to DRY principles:

1. **`Container` (`src/components/ui/Container.tsx`)**:
   - Standardizes maximum layout bounds (`size="default"`: `max-w-7xl`, `size="narrow"`: `max-w-5xl`, `size="wide"`: `max-w-[1400px]`).
2. **`Button` (`src/components/ui/Button.tsx`)**:
   - `variant="primary"`: High-contrast amber pill button (`#F59E0B`).
   - `variant="secondary"`: Dark pill button (`#1E1E1E`) with subtle border and text contrast.
   - `variant="outline"`: Transparent pill button with subtle border.
   - `variant="ghost"`: Minimal text button.
   - Built-in Next.js Link support when `href` is passed.
3. **`Badge` (`src/components/ui/Badge.tsx`)**:
   - Standardized chip component (`neutral`, `accent`, `dark`, `outline`).
4. **`SectionHeading` (`src/components/ui/SectionHeading.tsx`)**:
   - Unifies section headers with an optional top badge, primary `<h2>` title, and subtitle text.

---

## 4. Planned Section Architecture & Company Marquee

1. **Section Order (Per Wireframe & Approved Plan):**
   - **Navbar:** Floating dark pill navigation (`Home`, `About`, `Achievements`, `Services`, `Let's Talk`).
   - **Hero Section:** Left title & copy, right rounded portrait card with floating 7-Layer Security and AI economy badges.
   - **Company Logo Marquee (Planned Position):** Placed immediately below the Hero section.
     * *Note on Logos:* Company logos will be downloaded and supplied by the user in a subsequent phase. The data structure in `portfolioData.ts` supports `{ id, name, logoUrl, placeholder }`. The marquee component and animation will be implemented in its designated phase without blocking Phase 1 or Phase 2.
   - **About Section:** Background, credentials (CEH Master, Bhopal executive training), and 7-layer verification pillars.
   - **Work Experience:** Chronological timeline cards.
   - **Achievements:** Verified milestones.
   - **Services:** Modular service offerings (AI Agents, MCP Servers, VAPT/Audits, Automation).
   - **Current Initiatives:** CoreDhristi and Nextwaves showcase.
   - **Testimonials:** Verified endorsements.
   - **Footer:** CoreDhristi-inspired dark footer with social links and navigation.

---

## 5. Content Architecture & Updating Guide

All website copy, biographical data, credentials, and achievements are decoupled from layout components and centralized in `src/data/portfolioData.ts`.

### How to Add / Edit an Item:

- **Adding a Work Experience:**
  Locate `portfolioData.experiences` in `src/data/portfolioData.ts` and append an entry conforming to the `ExperienceItem` interface.
- **Adding an Achievement:**
  Locate `portfolioData.achievements` and append an entry conforming to `AchievementItem`.
- **Updating Profile Image & Alt Text:**
  Image is stored in `public/Images/Sir image.jpg` and referenced in `portfolioData.hero.profileImage`. Alt text must accurately describe Krishanu Kaundilya.

---

## 6. Development & Verification Commands

All commands are executed within the `sir-portfolio/` directory:

```bash
# 1. Run local development server (Turbopack enabled)
npm run dev

# 2. Run ESLint checks
npm run lint

# 3. Run TypeScript type validation (zero-emit check)
npx tsc --noEmit

# 4. Run production Next.js build
npm run build
```

---

## 7. Known Blockers & Pending Content

1. **Company Logos:** User will download and add logos later. Marquee placement is planned below Hero.
2. **Nextwaves Canonical Domain:** User prompt referenced `https://nextwaves.onlinecom/` (a malformed URL). Domain `nextwaves.online` is not yet active on public DNS. Data marks status as `pending_domain`.
3. **Past Employment Tenures:** Specific past company roles (prior to CoreDhristi) will be added in Phase 3.
4. **Verified Testimonials:** Client endorsements will be added in Phase 4.
