# Krishanu Kaundilya — Portfolio

Personal portfolio for Krishanu Kaundilya, founder of CoreDhristi and CoreD, AI agent and automation developer, and cybersecurity professional.

The GitHub repository itself is the Next.js application root. In this workspace the updated checkout is `E:\porfolio\portfolio-ui`.

## Run locally

From this application directory:

```sh
npm ci
npm run dev -- --port 3001
```

Open [the local portfolio](http://localhost:3001/).

To review a production build:

```sh
npm run build
npm run start -- --port 3001
```

Stop the development server before starting production on the same port.

## Edit content

Update `src/data/portfolioData.ts`. It contains profile copy, project stories, career history, section text, contact links, metadata and identity structured data. Components handle presentation and interactions.

Next Tech Waves is a closed former venture. CoreD is CoreDhristi's AI and IT solutions arm. Testimonials stay empty until actual reviews are supplied. Credential copy records the supplied dates without implying an unconfirmed renewal.

## Verify changes

```sh
npm run lint
npx tsc --noEmit
npm run build
```

Check mobile (375px), tablet (768px) and desktop (1280px+) layouts, then update the [roadmap](roadmap.md) and [changelog](docs/CHANGELOG.md).

See the [developer guide](docs/DEVELOPER_GUIDE.md) for motion, cursor, book, metadata and data architecture. Research and draft documents are under `docs/`; local preview screenshots are under `docs/previews/`.

The production domain is pending. Canonical URLs, sitemap, social image URLs and search-engine submission should use the real domain when it is selected.

