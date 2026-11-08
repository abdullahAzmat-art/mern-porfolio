# Abdullah Azmat — Portfolio

A fast, editorial portfolio for an AI engineer and full-stack developer, built with
Next.js (App Router), React, and a custom CSS design system. The markup is
server-rendered; browser behavior lives in one small client island.

## Requirements

- Node.js 20+
- npm 10+

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Scripts

| Command         | What it does                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the development server with HMR     |
| `npm run build` | Create an optimized production build      |
| `npm run start` | Serve the production build                |

## Deploy

The site deploys to **Vercel** with zero extra configuration:

1. Import the repository in Vercel.
2. Framework preset: **Next.js** (detected automatically).
3. Build command: `npm run build`; output: handled by Next.js.

`vercel.json` adds security headers plus long-lived caching for fonts, images,
and the AI-readable files (`index.md`, `llms.txt`, `sitemap.xml`,
`site.webmanifest`).

Before going live, confirm the production URL in `app/layout.jsx`
(`SITE_URL`) and `lib/schema.js` matches the final domain.

## Analytics

The site uses Vercel Web Analytics (cookieless, no consent banner needed).

1. In the Vercel dashboard, open the project → **Analytics** → **Enable**.
2. Deploy. Traffic data starts appearing in that tab after a few visits.

The Hobby plan includes 50,000 events per month (a page view is one event);
extra usage is never charged on Hobby — collection pauses instead.

## Structure

```
.
├── app/
│   ├── layout.jsx                 # Metadata, fonts, viewport, js-flag script
│   ├── page.jsx                   # Page composition + JSON-LD + noscript fallback
│   └── globals.css                # Design system, layout, responsive + motion
├── components/
│   ├── SiteHeader.jsx             # Desktop nav + mobile menu
│   ├── SiteFooter.jsx
│   ├── SvgSprite.jsx              # Inline icon sprite
│   ├── ProjectDialog.jsx          # Case-study dialog shell
│   ├── SiteInteractions.jsx       # Client island that boots browser behavior
│   └── sections/                  # Hero, Marquee, Work, About, Services,
│                                  # Roadmap, Achievements, Contact
├── data/
│   ├── projects.js                # Case-study content
│   └── roadmap.js                 # Growth quiz questions and plan logic
├── lib/
│   ├── interactions.js            # Menu, reveals, filters, dialog, form, counters
│   └── schema.js                  # Person / WebSite / ProfilePage JSON-LD
├── public/
│   ├── assets/                    # Fonts, images, résumé PDF
│   ├── favicon.svg
│   ├── sw.js                      # Service worker: offline + installable PWA
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   ├── llms.txt
│   └── index.md                   # Markdown alternate for AI crawlers
├── legacy/                        # Previous static build, kept for reference
├── next.config.mjs
├── jsconfig.json                  # `@/*` import alias
└── vercel.json
```

## Editing content

- **Sections / copy** — edit the components in `components/sections/`.
- **Case studies** — edit the `projects` object in `data/projects.js`.
- **Design tokens, spacing, type** — edit the tokens at the top of
  `app/globals.css`.
- **Interactions** — edit `lib/interactions.js`; it runs once after hydration.
- **SEO / metadata** — edit `app/layout.jsx` and `lib/schema.js`.
- **Résumé** — replace `public/assets/Abdullah-Azmat-Resume.pdf`.

## Features

- Server-rendered content with a single client island for interactions
- Self-hosted, subset fonts via `next/font/local` (no layout shift)
- Scroll reveals, split-word headline reveals, scroll progress, active nav
- Filterable project grid with accessible, native `<dialog>` case studies
- Interactive growth roadmap: four business questions generate a 90-day plan
- Animated counters, magnetic buttons, custom cursor, reduced-motion support
- Responsive mobile menu and layouts down to 360px, no horizontal overflow
- Copy-email button and a contact form that composes a pre-filled email
- Full SEO metadata, Open Graph, Twitter cards, JSON-LD, sitemap, `llms.txt`
- Installable PWA with a service worker and an offline fallback page
- Free traffic analytics via Vercel Web Analytics

## Notes

The contact form intentionally uses a `mailto:` handoff, so it needs no backend.
For real submissions later, connect it to a serverless function, Resend, or
Formspree.
