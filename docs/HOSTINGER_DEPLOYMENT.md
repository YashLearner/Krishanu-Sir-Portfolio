# Hostinger deployment

Production URL: https://krishanukaundilya.com/

Deployed and verified October 23, 2026, using the existing Hostinger managed Node.js web app. No hosting/domain purchase or website deletion was required. Existing domain routing and HTTPS were preserved.

## Maintained source and build settings

- Repository: https://github.com/YashLearner/Krishanu-Sir-Portfolio
- Branch: `main`
- Published application commit: `b33ac34`
- Hostinger build ID: `01a1677e-2f58-702e-ac42-ce8aa0098291`
- Framework: Next.js
- Node: 22.x
- Root: `./`
- Package manager: npm
- Build command: `npm run build` (runs `next build --webpack`)
- Output: `.next`
- Environment variables: none required

The former `YashLearner/krishanu-sir-portfolio-live` connection was replaced through Dashboard → menu → Change repository. Its initial commit stalled during Turbopack compilation for 15m14s. The maintained build uses standard Tailwind PostCSS and patched Next.js 16.4.2. Hostinger compiled the new build in 20.9s, finished TypeScript in 3.6s and generated the static pages in 802ms, then reported Deployment completed.

## Verification

Local: lint, TypeScript, all 648 tests and production build pass. Production-only npm audit reports zero vulnerabilities. Full audit has 5 high development-tool entries; do not apply the suggested breaking downgrade blindly.

Public browser: HTTPS page loaded after the hosting provider's automatic browser check. Hero typography/portrait and restored About image rendered. About navigation and story dialog opened/closed. The chatbot answered `Tohfa Bazzar CRM` with the correct client workflow. Mobile at 375px and desktop at 1280px had no horizontal overflow; captured browser error logs were empty. Local production styling also checked at 768px.

Evidence: `docs/previews/hostinger-deployment-success.png`, `hostinger-live-desktop.png`, `hostinger-live-mobile.png`, and local production screenshots `hostinger-build-{desktop,tablet,mobile}.png`.

## Future updates and recovery

Use this maintained repository, not a separate copied repository. Review changes and run the documented quality gates before publishing to `main`. In Hostinger open this domain's Dashboard → Redeploy/Settings and redeploy, retain the settings above and inspect build logs. Verify the real HTTPS URL after each release. A successful build alone does not prove images and browser interactions work. Do not expose secrets in source, upload dependency/build directories, disable HTTPS, delete the website or change unrelated domain/email settings to fix a build.
