# QuickVerify Landing Site

Marketing site for the QuickVerify React Native SDK. It is built with Vite, React 18, TypeScript, and Tailwind CSS and mirrors the functionality that actually ships in the SDK repo.

## Prerequisites

- Node.js 18+ (I developed with Node 25.1.0 via `brew install node`)
- npm (bundled with Node)

## Getting Started

```bash
cd quickverify-complete/quickverify-landing
npm install
npm run dev    # local dev server at http://localhost:5173
```

## Production Build

```bash
npm run build   # runs tsc -b && vite build
npm run preview # serve dist/ locally
```

The output lives under `dist/` and can be deployed to GitHub Pages, Netlify, Vercel, etc.

## Project Structure

```
src/
├─ App.tsx             # App shell + routing
├─ pages/Home.tsx      # Primary marketing page
├─ components/ui/*     # Lightweight UI primitives (button, badge, card)
├─ contexts/ThemeContext.tsx
└─ index.css           # Tailwind tokens + base styles
```

## Linking to the SDK

CTA buttons point to the QuickVerify SDK repository at [github.com/QHarshil/quickverify-sdk](https://github.com/QHarshil/quickverify-sdk); adjust the URLs in `src/pages/Home.tsx` if the SDK ever lives elsewhere.
