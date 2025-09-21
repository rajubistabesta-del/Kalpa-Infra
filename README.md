# Kalpa Plans — Starter (Next.js + Prisma + Tailwind)

A simple, production-ready starter to list house plans, filter, view details, and collect customization inquiries — like Southern Living House Plans.

## Prerequisites
- Node.js LTS (v20+) and npm
- Git
- VS Code (recommended)

## 1) Get the code
```bash
# unzip this folder or clone from your repo
cd kalpa-plans
```

## 2) Install dependencies
```bash
npm install
```

## 3) Configure environment
```bash
cp .env.example .env
# For dev, keep SQLite default
```

## 4) Initialize database (Prisma + SQLite)
```bash
npx prisma migrate dev --name init
```

## 5) Seed sample plans
```bash
npm run seed
```

## 6) Start the dev server
```bash
npm run dev
# open http://localhost:3000
```

## 7) Add your real content
- Replace placeholder images/URLs in `src/scripts/seed.ts` with your renders & plan images (hosted or in `/public`).
- Update company info in `src/app/about/page.tsx` and `src/app/contact/page.tsx`.

## 8) Deploy (Vercel)
1. Push to GitHub.
2. Import repo on Vercel.
3. Set `DATABASE_URL`:
   - For hobby/demo, keep SQLite with Vercel’s file system workaround (not recommended).
   - Recommended: switch Prisma provider to `postgresql` and use Neon/Supabase. Run `npx prisma migrate deploy` on Vercel.
4. Re-seed via a one-off script or admin route.

## 9) Next steps
- Add floor plan PDFs/images to each Plan’s gallery.
- Add authentication + admin (NextAuth) to create/edit plans.
- Optional payments (Khalti/eSewa) for digital plan downloads.
- Add Algolia for fast search and filters.
- Add sitemaps (`/sitemap.xml`) and structured data for SEO.
