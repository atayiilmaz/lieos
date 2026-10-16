# Lieos

Minimal, responsive, single-page game studio website built with Next.js App Router, TypeScript, and GSAP.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run typecheck
npm run build
npm start
```

The production build is a static export in `out/`. Deploy this folder to any static host. No API or database is required. Fonts are bundled locally. Before deployment, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your real domain so social image URLs resolve correctly.

## Content

Edit `lib/site.ts` for the email and games. Pipeyard includes its live App Store and Google Play links; Rush Hour Station is marked as coming soon. The footer links to `yiilmazataberk@gmail.com`.

Add `appStoreUrl` and `playStoreUrl` values to Rush Hour Station when it launches. Store links appear on the cards and in each game's details dialog.

`components/studio.tsx` contains the page content. Theme, spacing, and responsive rules are in `app/globals.css`. The page starts with About us, followed by Our games and a Contact us footer. Subtle GSAP entrance animations respect reduced-motion preferences. Game details use native accessible dialogs with Escape, focus trapping, and backdrop dismissal.

## Brand assets

- `public/brand/lieos-logo.svg` — standalone vector wordmark
- `public/brand/lieos-mark.svg` — square logomark / favicon
- `public/brand/social-card.png` — social preview
- `components/logo.tsx` — shared navbar and footer logo
- `public/games/` — locally bundled and optimized game artwork

Pipeyard artwork and gameplay copy come from its official App Store / Google Play listing. Rush Hour Station artwork was supplied by the owner. Raster artwork is optimized as WebP.

The logomark combines an L with a detached square, referencing a small game piece. The palette is pure white, charcoal, and neutral gray. Fonts: Outfit and DM Sans, distributed through Fontsource under their respective open font licenses.
