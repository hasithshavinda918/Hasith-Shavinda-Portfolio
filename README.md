# Hasith Shavinda – Portfolio (Next.js + Tailwind)

A modern, minimalist black & white portfolio built with Next.js (App Router), React, TypeScript, and Tailwind CSS. Optimized for static export, so it can be hosted easily on shared hosting (cPanel) without a Node.js runtime.

- Location: `D:\latest portfolio\portfolio`
- Stack: Next.js 16, React 19, TypeScript 5, Tailwind CSS 4, Tabler Icons, ESLint 9, Prettier 3

Live:
- Portfolio: https://www.hasithkarunarathne.me
- Projects showcased:
	- D&T Job Agency – https://www.dandtjobagency.com
	- Lanka Tour Gate (FYP) – https://lankatourgate.free.nf/index.php

## Features

- Clean black & white minimal UI, responsive across devices
- Sections: Hero, About, Skills, Projects, Content, Education, Contact
- Contact form with EmailJS; graceful mailto fallback if env keys are missing
- Static export for simple shared-hosting deployment (no server required)
- Tabler Icons with explicit light/dark contrast handling

## Getting Started (Dev)

```powershell
# from the project folder
cd "D:\latest portfolio\portfolio"
npm install
npm run dev
```

Open http://localhost:3000 to view the app. Edit `src/app/page.tsx` or components under `src/components/`; the page auto-refreshes.

## Scripts

- `npm run dev` – Start dev server at http://localhost:3000
- `npm run build` – Static export build to `out/` (see config)
- `npm run start` – Start production server (not needed for static hosting)
- `npm run lint` – Run ESLint
- `npm run format` – Format with Prettier
- `npm run format:check` – Check formatting

## EmailJS setup (optional)

1) Copy `.env.local.example` to `.env.local` and fill values from your EmailJS dashboard:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

2) Ensure your EmailJS template expects: `user_name`, `user_email`, `subject`, `message`. If these are missing at runtime, the site falls back to a `mailto:` link so users can still contact you.

## Build and Static Export

This project is configured for static export in `next.config.ts`:

- `output: "export"`
- `images: { unoptimized: true }`

Build the static site:

```powershell
cd "D:\latest portfolio\portfolio"
npm run build
```

The generated static site will be in the `out/` folder.

## Deploy to cPanel (Shared Hosting)

1) Build (see above) to produce `out/`.
2) Zip the contents of `out/` (files inside, not the folder itself).
3) Upload to your domain’s document root (e.g., `public_html/` or `public_html/yourdomain/`).
4) Ensure `index.html` is at the root of that directory.
5) (Optional) Force HTTPS via `.htaccess` if needed.

## Project Structure Highlights

- `src/app/page.tsx` – page composition using the App Router
- `src/components/*` – UI building blocks (Navbar, Hero, About, Skills, Projects, Content, Education, Contact, Footer)
- `src/data/site.ts` – central data (name, contact, CTA/CV path, skills, education)
- `public/assets/*` – static images (logo, hero image, CV, etc.)
- `next.config.ts` – static export configuration

## License

Personal portfolio project. All rights reserved.
