# Hyzam Nazar — Portfolio

A responsive, editorial-style portfolio built with React, TypeScript, Vite, Motion and Lucide icons.

**Live site:** https://typoss.github.io/hyzam-nazar-portfolio/

## Highlights

- Cybersecurity, security operations, risk and GRC profile
- Project summaries for RiskForge, AshaPlus and KAVACH
- Interactive GRC risk register with illustrative likelihood × impact scoring
- Inherent-risk heatmap, severity filters and optional residual-risk comparison
- Responsive layout and light/dark theme
- GitHub Pages deployment through GitHub Actions

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.

Check the [GitHub Actions history](https://github.com/Typoss/hyzam-nazar-portfolio/actions) for the latest build and deployment status.

## Content accuracy and demo boundaries

- The risk register uses fictional example records. Its scoring is illustrative and is not a formal risk assessment or audit.
- RiskForge is presented as a project; describe individual capabilities as implemented only when they are implemented in the project itself.
- AshaPlus and KAVACH are described as concepts.
- Security+ is a preparation track; planned credentials must not be presented as earned.
- The internship description is limited to the stated team and exposure areas.

## Before applying

- Keep `public/Hyzam-Nazar-Resume.pdf` up to date.
- Add project-specific repository/demo links once the correct public URLs are confirmed.
- Test the live site at mobile widths and with keyboard navigation after significant UI changes.
