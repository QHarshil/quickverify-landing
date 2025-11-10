# QuickVerify Landing Site

Marketing site for the QuickVerify React Native SDK. It is built with Vite, React 18, TypeScript, and Tailwind CSS and mirrors the functionality that actually ships in the SDK repo.

**Live site:** https://qharshil.ca/quickverify

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
npm run build   # runs tsc -b && vite build (base = /quickverify/)
npm run preview # optional local preview of the output
```

The build artifacts land in `dist/`. The folder contains:

- `index.html`
- `404.html` (SPA fallback redirecting to `/quickverify/`)
- `assets/…` (JS + CSS)
- `favicon.svg`
- screenshots copied from `src/assets/screens`

You can copy that folder anywhere and serve it from `/quickverify/` on any host (e.g., `qharshil.ca/quickverify`).

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

## Deploying to `qharshil.ca/quickverify`

1. From this repo, run `npm run build`.  
2. In your portfolio repo (the one backing `qharshil.ca`), create or clear a folder named `quickverify`.  
3. Copy the contents of this repo’s `dist/` into that folder (`index.html`, `404.html`, `assets/`, `favicon.svg`).  
4. Commit and deploy your portfolio site as usual. The QuickVerify landing page will now live at `https://qharshil.ca/quickverify/`.
