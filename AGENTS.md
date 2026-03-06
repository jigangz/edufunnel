# EduFunnel - Education Marketing Landing Page + Conversion Funnel

## Project Overview
Build a StudyPug-style marketing landing page with conversion funnel tracking.
This is a portfolio/showcase project for a full-stack developer interview at an ed-tech company.

## Tech Stack
- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS (App Router)
- **Backend**: Express.js + TypeScript + Node.js (separate API)
- **Database**: Supabase PostgreSQL (already have account)
- **Deployment**: Vercel (both frontend and backend via serverless)
- **NO Jest, NO A/B testing** - keep it simple

## Architecture
Monorepo structure:
```
edufunnel/
├── apps/
│   ├── web/          ← Next.js frontend (Tailwind, responsive)
│   │   ├── app/
│   │   │   ├── page.tsx              ← Marketing landing page
│   │   │   ├── register/page.tsx     ← Sign-up form (funnel step 2)
│   │   │   ├── courses/page.tsx      ← Course selection (funnel step 3)
│   │   │   ├── admin/page.tsx        ← Funnel analytics dashboard
│   │   │   └── api/                  ← Next.js API routes (proxy or direct)
│   │   └── components/
│   │       ├── hero.tsx              ← Hero section with CTA
│   │       ├── pricing-table.tsx     ← Free / Pro / Premium
│   │       ├── testimonials.tsx      ← Student reviews
│   │       ├── course-cards.tsx      ← Subject grid
│   │       ├── faq.tsx              ← Accordion FAQ
│   │       └── footer.tsx
│   └── api/          ← Express.js backend
│       ├── src/
│       │   ├── index.ts             ← Express app entry
│       │   ├── routes/
│       │   │   ├── funnel.ts        ← POST /api/funnel/event (track conversions)
│       │   │   └── health.ts        ← GET /api/health
│       │   └── db.ts               ← Supabase/PostgreSQL connection
│       ├── package.json
│       └── tsconfig.json
├── package.json       ← Root workspace
└── README.md
```

## Landing Page Sections (in order)
1. **Nav**: Logo + "Login" + "Start Free Trial" CTA button
2. **Hero**: Big headline "Master Math, Science & More" + subheadline + CTA + student count
3. **Social Proof**: "Trusted by 50,000+ students" + university logos row
4. **How It Works**: 3-step process (Sign Up → Pick Subject → Start Learning)
5. **Course Grid**: Math, Science, English cards with icons
6. **Testimonials**: 3 student review cards with star ratings
7. **Pricing Table**: Free / Pro ($9.99/mo) / Premium ($19.99/mo) - 3 columns
8. **FAQ**: 5 questions, accordion style
9. **Final CTA**: "Ready to boost your grades?" + CTA button
10. **Footer**: Links + copyright

## Conversion Funnel
Track 4 steps:
1. `page_view` — landed on the page
2. `cta_click` — clicked any CTA button
3. `register` — submitted sign-up form
4. `course_select` — picked a course

Each event: POST /api/funnel/event { step, timestamp, sessionId }
Admin page shows: step name → count → conversion rate from previous step

## Design Style
- Clean, modern, StudyPug-like
- Blue/indigo primary color
- Lots of whitespace
- Mobile-first responsive
- Smooth scroll between sections

## Supabase Connection
- Project ref: gxgogveyzwgkpideamjf
- Session Pooler: postgresql://postgres.gxgogveyzwgkpideamjf:[PASSWORD]@aws-1-us-east-2.pooler.supabase.com:5432/postgres
- Password: qqXO9BOko60NYdVf
- Create a `funnel_events` table: id (serial), step (text), session_id (text), created_at (timestamptz default now())

## Important Constraints
- All code comments and README in English, natural dev style (NOT AI-sounding)
- Python version on machine is 3.9.6 (irrelevant, this is Node.js)
- Node.js is available
- Keep it simple — this needs to be done in ~1 hour
- The landing page design quality matters MORE than the API complexity
