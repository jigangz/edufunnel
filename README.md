# EduFunnel

A StudyPug-style education marketing landing page with conversion funnel tracking.
Built as a portfolio project demonstrating full-stack skills: Next.js 15, Express.js, TypeScript, Tailwind CSS, and Supabase PostgreSQL.

## What's in here

```
edufunnel/
├── apps/
│   ├── web/          — Next.js 15 frontend (App Router, Tailwind v4)
│   └── api/          — Express.js REST API (TypeScript)
└── README.md
```

## Getting started

### Prerequisites
- Node.js 18+
- A Supabase project (already wired up)

### Run locally

**API (port 4000):**
```bash
cd apps/api
npm install
npm run dev
```

**Frontend (port 3000):**
```bash
cd apps/web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Marketing landing page (hero, social proof, courses, pricing, FAQ) |
| `/register` | Sign-up form — step 2 of the funnel |
| `/courses` | Course selection — step 3 of the funnel |
| `/admin` | Funnel analytics dashboard |

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/funnel/event` | Track a funnel step |
| GET | `/api/funnel/stats` | Aggregated funnel stats (for admin page) |

### Track an event

```bash
curl -X POST http://localhost:4000/api/funnel/event \
  -H "Content-Type: application/json" \
  -d '{"step": "page_view", "sessionId": "sess_abc123"}'
```

Valid steps: `page_view`, `cta_click`, `register`, `course_select`

## Funnel tracking

The funnel tracks 4 conversion steps:
1. **page_view** — user lands on the page
2. **cta_click** — user clicks any CTA button
3. **register** — user submits the sign-up form
4. **course_select** — user picks a course

Each event is stored in the `funnel_events` table in Supabase. The admin page at `/admin` shows live conversion rates and drop-off points.

## Database

Uses Supabase PostgreSQL. The `funnel_events` table is created automatically on first API startup:

```sql
CREATE TABLE IF NOT EXISTS funnel_events (
  id SERIAL PRIMARY KEY,
  step TEXT NOT NULL,
  session_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Tech choices

- **Next.js 15 + App Router** — latest stable, good for SEO and static generation
- **Tailwind CSS v4** — faster builds, cleaner config
- **Express.js** — lightweight, flexible, TypeScript-friendly
- **pg** — direct PostgreSQL driver (no ORM overhead for this use case)
- **Supabase** — managed Postgres with connection pooling via Session Pooler
