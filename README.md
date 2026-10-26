# My site

About page and CV built with [Astro](https://astro.build), deployed to GitHub Pages.

## Edit

- Your content: `src/data/cv.ts`
- Look and feel: `src/styles/global.css`
- Site URL: `astro.config.mjs` (set `site` to your domain)

## Run locally

```sh
npm install
npm run dev
```

## Deploy

Push to `main`. In the repo go to Settings → Pages → Source: **GitHub Actions**.
To use your own domain, add a `public/CNAME` file containing just the domain
(for example `yourname.dev`) and set it under Settings → Pages → Custom domain.
