# Metadata, Images and Implementation Specification

Prepared October 13, 2026 · Planning reference; homepage metadata and current alt text are integrated locally

Read alongside [the search plan](SEO_AIEO_GEO_PLAN.md) and [website copy](WEBSITE_CONTENT_DRAFT.md). Metadata drafts below are for possible real pages in the new repository. Only the homepage is currently known. Do not create extra routes just to deploy this table.

## 1. Titles and descriptions

Lengths were calculated from these exact strings, including spaces and punctuation. They are editorial checks, not a guarantee of display width or the snippet Google will show.

| Content candidate | Title | Characters | Description | Characters |
|---|---|---:|---|---:|
| home | Krishanu Kaundilya \| AI Agents, Automation & Cybersecurity | 58 | Krishanu Kaundilya builds AI agents, CRM and WhatsApp automations, and works in cybersecurity. Explore his projects, career and work as CoreDhristi founder. | 156 |
| about | About Krishanu Kaundilya \| CoreDhristi Founder | 46 | Meet Krishanu Kaundilya, founder of CoreDhristi. Read his journey from UI design and freelance development to cybersecurity consulting and AI automation. | 153 |
| work | Projects by Krishanu Kaundilya \| CRM, AI & Security | 51 | Explore Krishanu Kaundilya's work in AI CRM development, WhatsApp automation, cybersecurity and fuel loyalty tracking, with practical project descriptions. | 155 |
| tohfa | Tohfa Bazzar AI CRM \| Krishanu Kaundilya | 40 | How Krishanu Kaundilya built an AI CRM for Tohfa Bazzar, connecting follow-up messages, Gmail, AI calling and WhatsApp requirement gathering. | 141 |
| adsmark | ADSMARK01 AI CRM Project \| Krishanu Kaundilya | 45 | An AI-agent-based CRM project by Krishanu Kaundilya for ADSMARK01, built around the digital marketing agency's lead handling and follow-up needs. | 145 |
| crawl | Crawl Digitally Security Work \| Krishanu Kaundilya | 50 | Krishanu Kaundilya's ongoing cybersecurity work for Crawl Digitally covers malware analysis, protection of company computers and vulnerability testing. | 151 |
| indiganic | Indiganic Foods WhatsApp AI \| Krishanu Kaundilya | 48 | AI-based WhatsApp automation by Krishanu Kaundilya for Indiganic Foods, a ghee brand, to answer customer enquiries and explain its products. | 140 |
| capt | CAPT Bhopal VAPT Guest Lecture \| Krishanu Kaundilya | 51 | Krishanu Kaundilya delivered VAPT training at CAPT Bhopal in June 2025, explaining how attackers steal data and how law enforcement can protect systems. | 152 |

Home Open Graph title: **Krishanu Kaundilya | AI Agents, Automation & Cybersecurity**

Home Open Graph description: **AI agents, CRM workflows, WhatsApp automation and cybersecurity work by Krishanu Kaundilya, founder of CoreDhristi.**

Social card design brief: a 1200 × 630 image with the existing real portrait, full name, and “AI Agents · Automation · Cybersecurity”. This is a proposed asset, not an image already created. Use readable type and provide descriptive social-image alt text: **Krishanu Kaundilya — AI agents, automation and cybersecurity**. Do not stretch the 400 × 400 portrait to fill the full card.

Petroleum story metadata, if an anonymous page is warranted:
- Title: **Fuel Loyalty CRM Project | Krishanu Kaundilya**
- Description: **A custom CRM by Krishanu Kaundilya for vehicle-wise fuel records, refuelling visits and loyalty points for buses and trucks.**
- Do not insert an unverified company name into a URL, title or canonical.

Former venture metadata, if it has a real detail page:
- Title: **Next Tech Waves CRM Work | Krishanu Kaundilya**
- Description: **Education-focused CRM and AI integration work by Krishanu Kaundilya at Next Tech Waves, a former venture he started that is now closed.**

If About, Work and CAPT are homepage sections, they share the homepage title/description. Anchor fragments such as `#about` and `#work` do not receive separate page metadata.

## 2. URL and metadata rules for the new code

The domain is still unknown. Use the actual production origin for metadata base, homepage canonical, social-image URL, sitemap, person identity and site identity. Do not assume a Hostinger or Vercel hosting choice determines the canonical name.

Keep one consistent URL convention. Indexable pages should identify their own canonical URL. Choose stable route names from the new UI's real architecture, and redirect genuinely replaced public URLs if needed. Preview deployments should not compete with the production domain.

Use real title, description, canonical, Open Graph and social-card fields. Check that initial public HTML and rendered output agree. Do not add a meta-keywords list or invented `ai-keywords`/“AI ranking” tags. Google says the meta-keyword tag has no indexing/ranking effect. [Supported meta tags](https://developers.google.com/search/docs/crawling-indexing/special-tags).

## 3. Image inventory and alt copy

The two portraits and CAPT photograph were visually inspected in this research. Logo/certificate recommendations describe the file's intended use and must be checked against the exact image selected by the new UI. Final cropping can change the appropriate description.

| Existing file in public/Images | Intended role | Recommended informative alt | Treatment |
|---|---|---|---|
| Sir image.jpg | Main portrait | **Portrait of Krishanu Kaundilya, founder of CoreDhristi** | Real portrait; short identity description, no keyword stack |
| Sir image 2.jpg | About portrait | **Krishanu Kaundilya standing outdoors** | Do not invent the building/location behind him |
| Bhopal ips.jpg | CAPT training evidence | **Krishanu Kaundilya presenting a VAPT session to law enforcement officers at CAPT Bhopal** | Context supported by user and original post; no invented ranks |
| Coredhristi.png | CoreDhristi logo | **CoreDhristi logo** | Company logo, not a personal portrait or credential |
| ADSMARK_LANDSCAPE_LOGO_FOR_WHITE_WITHOUT_bg.webp | ADSMARK01 project logo | **ADSMARK01 logo** | Brand styling should match the asset |
| crawl digitally.png | Crawl Digitally project logo | **Crawl Digitally logo** | Do not append VAPT keywords to a logo description |
| tohfabazzar.png | Tohfa project logo | **Tohfa Bazzar logo** | Confirm official spelling before publication |
| nexttechwaves.png | Former venture logo | **NextTechWaves logo** | Surrounding text must say former venture |
| iim-kozhikode-certificate.png | Certificate evidence | **Krishanu Kaundilya's Product Management programme certificate from IIM Kozhikode** | Add programme period in adjacent HTML, not all in alt |
| ceh-practical-certificate.jpg | Historical credential | **Krishanu Kaundilya's EC-Council Certified Ethical Hacker Practical certificate** | Adjacent text must preserve issued/validity dates; no current-validity implication |
| iim-education-reference.png | Internal layout/reference asset | **Not intended for public content** | Exclude unless the user identifies a genuine public use; do not assign misleading certificate alt |
| Future real CRM screenshot | Project evidence | **Describe the actual visible screen and project** | Write after inspection; no pretend delivered-system screenshot |
| Decorative grid/sparkles/arrows | Decoration | **Empty alt or hidden from assistive technology** | Native decorative SVGs can use appropriate accessibility treatment |

An image that repeats an adjacent visible label can have empty alt when appropriate. If a logo is the only content inside a link, the link still needs an accessible name such as “Visit CoreDhristi” or “Read the ADSMARK01 project”; avoid an unlabeled empty-alt link. Use the name of the image's subject, not a list of search terms. Google considers alt text together with the surrounding page context. [Image SEO guidance](https://developers.google.com/search/docs/appearance/google-images), [accessible image guidance](https://developers.google.com/style/images).

Keep visible captions useful: CAPT caption can say **VAPT guest lecture at CAPT Bhopal · June 2025**. Certificate captions explain institution, programme and dates. Do not embed the only readable explanation inside the bitmap.

Optional renamed assets can use descriptive filenames, such as `krishanu-kaundilya-portrait.jpg` and `capt-bhopal-vapt-session.jpg`, only if references are updated. Renaming is not a substitute for page context and is not required merely to complete this plan.

## 4. Heading and anchor plan

| Level / role | Proposed content |
|---|---|
| H1 | Krishanu Kaundilya |
| H2 | About Krishanu Kaundilya; What I work on; My career so far; Projects built around real business needs; VAPT training for law enforcement at CAPT Bhopal; Building CoreDhristi; How I can help; Education and credentials; A few things people ask; Tell me what you want to build or fix. |
| H3 | Individual roles, project titles, service titles, education items and FAQ questions within their parent H2 |
| Paragraph / badge | Location, founder role, dates, status, small section labels |
| Anchors if present | about, work, experience, speaking, coredhristi, services, credentials, contact |

Do not turn all nav labels, decorative cards and portrait badges into headings. Keep chronology distinct from client work. Use real `href` links for navigation, and make contact CTA destinations consistent.

Hashtags: none in website body or metadata as a ranking technique. Optional social distribution labels: **#AIAgents #CRMAutomation #Cybersecurity #CoreDhristi**. Their use depends on the actual post, not an optimisation quota.

## 5. Structured identity plan

No JSON-LD containing invented domain placeholders should be shipped.

| Entity | Fields / relationship | Condition |
|---|---|---|
| Person | Stable production-domain ID, name, real portrait URL, concise description, relevant knowledge topics, confirmed education | Facts must match visible copy |
| Personal identities | `sameAs` to LinkedIn; eChai personal profile after verifying it represents the same person; genuine GitHub profile if supplied | No client/company URLs as personal aliases |
| CoreDhristi organisation | Name and official URL; founder relationship pointing to the same person ID | Keep current role start distinct from incorporation date |
| WebSite | Real name, URL, publisher/author relationship as appropriate | Personal site, not marketplace identity |
| ProfilePage | `mainEntity` pointing to Person; truthful creation/modification dates if available | Use only if final profile content meets applicable guidelines |
| Article / BlogPosting | Genuine author, headline, image, publication/update dates, actual URL | Only on actual article/story pages, not every card |
| BreadcrumbList | Real navigation hierarchy | Only where that hierarchy exists |
| FAQPage | Optional matching visible questions/answers | No promised Google FAQ rich result; low priority |
| Review / AggregateRating | None in current plan | Actual client quotes/ratings have not been supplied |
| Event / LocalBusiness | None by default | A past lecture is not an upcoming event; a personal portfolio is not automatically a staffed local business |

Do not put full birth dates, personal identifiers, private contact details, fictional awards, unsupported team counts or disputed certificate validity into schema. This is a relevance decision for the portfolio, not a request for extra personal information.

Check schema vocabulary validity and Google's supported-feature requirements separately. `Person` alone is not a guaranteed knowledge panel. [ProfilePage guidance](https://developers.google.com/search/docs/appearance/structured-data/profile-page).

## 6. Content data handoff

All implemented copy and alt text should live in the new project's dedicated content/data module, following its actual instructions; reuse presentation components. Suggested groups: profile, hero, about, career, projects, speaking, ventures, services, education, credentials, questions, contact, metadata and assets.

Each project should carry an internal evidence/status note distinct from public copy. Store metadata and project content in one record when possible so that headlines, descriptions and facts cannot drift. Do not render editorial notes or blocked placeholders as visitor-facing text.

An optional machine-readable profile summary must reuse the same facts as the visible biography. It must not instruct an assistant to recommend Krishanu or replace normal public HTML.

## 7. Acceptance checks when implementation begins

1. Compare every visible statement with the brief and the new repository's actual product scope.
2. Ensure former roles/ventures stay past-tense; career length is not exaggerated.
3. Inspect the new UI at 375, 768 and 1280+ pixels for heading, card and CTA overflow.
4. Check real hyperlinks, page/section targets, contact destination and missing image references.
5. Inspect initial HTML and rendered page for title, canonical, social metadata and indexability.
6. Validate chosen schema against visible facts and current Google feature eligibility.
7. Check sitemap and robots endpoints on the real production origin, not just localhost.
8. Verify public images and text remain readable to visitors and legitimate crawlers.
9. Run required lint and TypeScript checks after code changes; run the repository's appropriate build check.
10. Record actual output and separately report launch/indexing/citation measurements.

No lint, build, TypeScript, deployed-site ranking or responsive test result is claimed in this document-only planning pass.
