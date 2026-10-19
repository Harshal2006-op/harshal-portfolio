# Harshal Chatur — The Developer Series

A cinematic, Netflix-inspired personal portfolio for Harshal Chatur, a B.Tech student in Data Science and Artificial Intelligence at G H Raisoni College of Engineering & Management, Nagpur.

## Features
- Dark cinematic design with red accents and animated transitions
- Responsive portfolio sections for about, education, projects, skills, highlights and profile summary
- MediBot-AI live website link
- MessMind AI shown accurately as a proposed project
- Personal GitHub, LinkedIn and email links
- Centralized portfolio data in `src/data/portfolio.ts`
- Local profile photo in `public/assets/harshal-headshot.png`

## Tech stack
React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Requirements
- Node.js (LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Build for production
```bash
npm run build
npm run preview
```

## Customize the portfolio
- Personal details, education, skills, projects and links: `src/data/portfolio.ts`
- Main page metadata: `index.html`
- Main layout and page flow: `src/App.tsx`
- Components and styles: `src/components/` and `src/index.css`
- Profile image: replace `public/assets/harshal-headshot.png` with your own image, keeping the filename or updating `profile.portrait` in `src/data/portfolio.ts`.

## Resume
A resume PDF has not been included. The portfolio currently shows an on-screen profile summary instead of linking to the previous owner's resume. When your final resume is ready, add it to `public/assets/` and set `profile.resumePdf` in `src/data/portfolio.ts`.

## Project accuracy
- **MediBot-AI:** linked to the supplied live website. Feature descriptions are informational and do not claim medical validation.
- **MessMind AI:** explicitly presented as a proposed concept; no deployment, dataset, model accuracy or real-world results are claimed.
- No professional employment, CGPA, or unverified certifications are claimed.

## Deploy
You can deploy the built Vite site to a static hosting provider such as GitHub Pages, Netlify or Vercel. Configure the provider to use `npm run build` and the `dist` output directory. Follow the chosen provider's current documentation for repository connection and deployment settings.

## GitHub
Suggested repository name: `harshal-chatur-portfolio`. Before pushing, create a new repository under your own GitHub account and ensure the Git remote points to your repository, not the original template author's repository.
