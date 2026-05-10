# Horizons — Nonprofit Website Template

A modern, minimalistic nonprofit website template built for the **Next.js UI/UX Hackathon**.

## Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** (custom design tokens)
- **TypeScript**
- **Lucide React** (icons)

## Design System
| Token | Value |
|---|---|
| Forest (primary) | `#1B3A2D` |
| Terracotta (accent) | `#C4622D` |
| Cream (background) | `#F7F3ED` |
| Display font | Cormorant Garamond |
| Body font | DM Sans |

## Pages
| Route | Description |
|---|---|
| `/` | Home — hero, stats, featured programs, testimonials, CTA |
| `/programs` | Programs listing — search + category filter |
| `/programs/[slug]` | Program detail — milestones, updates, share, donate |
| `/donate` | Donate — 3-step form: amount → program → payment |
| `/about` | Impact / About — stats, values, timeline, team |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## Customization

All program data lives in `lib/data.ts`. Replace the mock programs, team members, testimonials, and donation amounts with your own data.

To connect a real payment processor (Stripe recommended):
1. `npm install @stripe/stripe-js`
2. Create `/api/create-payment-intent/route.ts`
3. Replace the form submit handler in `app/donate/page.tsx`

## Submission
Built by: [Your Name]  
Submission email: jusrin@crowdera.com  
Deadline: 11 May 2026 | 11:59 PM IST

```
nonprofit-template
├─ app
│  ├─ about
│  │  └─ page.tsx
│  ├─ donate
│  │  └─ page.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ not-found.tsx
│  ├─ page.tsx
│  └─ programs
│     ├─ page.tsx
│     └─ [slug]
│        └─ page.tsx
├─ components
│  ├─ Footer.tsx
│  ├─ Nav.tsx
│  ├─ ProgramCard.tsx
│  └─ ProgressBar.tsx
├─ lib
│  └─ data.ts
├─ next-env.d.ts
├─ next.config.js
├─ package.json
├─ postcss.config.js
├─ README.md
├─ tailwind.config.js
└─ tsconfig.json

```