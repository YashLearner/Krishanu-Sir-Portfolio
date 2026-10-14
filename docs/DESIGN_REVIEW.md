## Desktop headline relocation and About-photo enhancement

Scope: only desktop headline relocation and enhancement of the existing About photo. At 1280 x 900 the desktop headline box ran from y=660 to y=780 above Indore/LinkedIn. Below 1024px, top placement remains: 768px y=130; 375px y=96. The portrait, split type and mobile hero composition are unchanged.

Built-in image-generation edit restored the original 453 x 488 About photo to 1208 x 1302, saved as `public/Images/sir-about-enhanced.png`; original retained. Prompt: restore the same photographed person, smile, hair, beard, skin tone, shirt, watch, standing pose, lawn/building/framing; reduce JPEG blur/compression and gently improve face exposure/detail; no beautification, facial reshaping, added text or scene redesign. Inspected source, generated result and the implemented card. This is an AI-restored image, not recovered camera detail; original remains available for comparison.

Actual production screenshots: `hero-headline-bottom-desktop.jpg`, `hero-headline-tablet.jpg`, `hero-headline-mobile.jpg`, `about-photo-enhanced-desktop.jpg`, `about-photo-enhanced-mobile.jpg`. Enhanced asset loaded in desktop and mobile cards. Actual 375/768/1280 checks had no horizontal overflow. Console warnings/errors returned `[]`. Lint, TypeScript and production build passed.
## Latest hero typography and spacing follow-up

The user's new reference asks for less separation and side lettering on mobile as well. Bebas Neue replaces Anton; it matches the reference's tall condensed direction without claiming the unidentified reference font is an exact match. The portrait frame now follows the real image aspect ratio and remains centered independently. FOUN/DER text tracks follow the face width, avoiding the empty space around the shoulders. Mobile keeps the same side composition and reduces the hero's empty height while preserving the 337.68px portrait width at 375 × 812. The final mobile hero height is 730.80px.

Fresh production screenshots personally inspected: `hero-spacing-mobile.jpg` (375 × 812), `hero-spacing-tablet.jpg` (768 × 1024), `hero-spacing-desktop.jpg` (1280 × 900), `hero-spacing-wide.jpg` (1880 × 870). All letters are readable beside the face. Portrait center measured 180px on a 360px content width at mobile and 632.40px versus page center 632.50px at desktop (rounding). No horizontal overflow at any checked width. Production console warnings/errors returned `[]`.

A new built-in image-generation composition study is saved as `previews/hero-spacing-concept.png`. Prompt: two-panel desktop/mobile cinematic black founder hero; tall condensed Bebas Neue-style FOUN and DER close to a centered monochrome portrait at face level on both views; equal optical gaps, compact headline, floating dark/amber nav, no hero CTA or invented biography. The mockup is for spacing exploration only; the generated person is not used in the website.
# Design review — October 14, 2026

Scope: the user's supplied portfolio, at `E:\porfolio\portfolio-ui`. Applied design-taste-frontend with preservation of the supplied black/cream/amber visual language. Variance 6, motion 5, density 4. Latest user direction supersedes the older grid background and hero arrangement.

## Implemented and visually reviewed

- Large, centered real founder portrait with FOUN and DER spans either side. At 1280 × 900 the two grid gaps measured 25.60px each, and portrait center was within 0.1px of the page center. All letters visible. On 375px, spans form one word above the large portrait. No hero project button. Exact supplied headline includes @coreD; orange Building line removed.
- Original three academic cards and separate certificate carousel restored. Real pill buttons, real certificate images. At 768px the card grid is two columns to prevent date-pill squeezing; at 1280px it is three columns. At 375px it stacks. Certificate arrows move underneath on mobile.
- Original large CAPT showcase restored: actual session photo, dark caption, large title/details, topic tiles and amber callout. Date June 2025 and law-enforcement audience retained; unsupported officer ranks and invented quotations omitted.
- All six Read the project buttons open their corresponding shared book. Desktop spread and mobile stacked pages visually reviewed. Escape dismissal and focus restoration verified; Shift+Tab trapped within the desktop book. Story popup and certificate popup work on mobile.
- Career map retains chronological connectors and four real PNG tool assets. Burp Suite, Nuclei, Semgrep and CodeQL all reported loaded in the production page once scrolled into view.
- Plain cream backgrounds: square grid removed. Career's small dot canvas is retained. Section/card scroll reveals use blur, scale and rise; IntersectionObserver class transition was verified on entry. Reduced-motion and no-JavaScript visibility are source-verified fallbacks; no claim of a browser-emulated reduced-motion test.

## Evidence

Actual built-in browser screenshots in `previews/`:

- `revised-hero-desktop.jpg` (production, 1280 × 900)
- `revised-hero-tablet.jpg` (768 × 1024)
- `revised-hero-mobile.jpg` (375 × 812)
- `revised-education-tablet.jpg`
- `revised-certifications-mobile.jpg`
- `revised-capt-desktop.jpg`, `revised-capt-mobile.jpg`
- `revised-project-book.jpg`, `revised-project-book-mobile.jpg`
- `revised-career-desktop.jpg` (production)

375/768/1280 checks reported no horizontal page overflow. Production browser console error/warning collection returned an empty list. Lint, TypeScript and production build passed; actual output is recorded in CHANGELOG.md.

## Image-generation thinking artifact

The built-in image-generation tool produced `previews/design-exploration.png` earlier in this revision session. Design brief: a four-panel contact sheet exploring the cinematic founder hero, three academic cards and certificate carousel, connected career workflow with tool icons, and a warm white story dialog; preserve black, cream and amber, real-world portfolio hierarchy and no invented metrics. The generated mockup was used only for composition thinking. Its synthetic portrait, certificate details and dates were not copied into the website. The user's later split-FOUN/DER instruction overrides the exploratory hero composition.

Pending: user visual review; final Discuss a project destination in TODO.md. No deployment or GitHub push is part of this local handover.
