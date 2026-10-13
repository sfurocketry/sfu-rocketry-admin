# SFU Rocketry — GitHub Pages site

React + Vite site migrated from Squarespace.

## Local dev
    npm install
    npm run dev

## Before first deploy
1. Add your logo to `public/images/logo.png`.
2. Add project images to `public/images/projects/` (see README there).
3. Add sponsor logos to `public/images/sponsors/`.
4. Fill in the TODOs in `src/pages/About.jsx`, `Join.jsx`, `Events.jsx`, `SupportUs.jsx`.
5. Confirm `base` in `vite.config.js` matches your repo name. For example,
   `https://username.github.io/sfu-rocketry/` requires `base: '/sfu-rocketry/'`.

## Deploy
Push to `main` — GitHub Actions (`.github/workflows/deploy.yml`) builds and
publishes automatically. In repo Settings → Pages, set Source to
"GitHub Actions" once. The workflow must be pushed to the `main` branch.
