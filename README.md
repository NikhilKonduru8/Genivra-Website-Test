# Genivra Insights

AI-Powered Clinical Intelligence for CNS (Central Nervous System) trials.

## Overview

Genivra Insights helps pharmaceutical and biotech companies transform decades of CNS trial data into actionable insights. The platform predicts outcomes, identifies failure patterns, and discovers biomarkers that drive success in neurological drug development.

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

- `src/app/` - Next.js App Router pages
  - `page.tsx` - Homepage
  - `PlatformFeatures/` - Platform capabilities & features
  - `HowItWorksGuide/` - Step-by-step workflow guide
  - `Science/` - AI methodology & science
- `src/components/` - Reusable components (Header, Footer)

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Supabase** - Waitlist signups (new publishable/secret API keys)

## Environment variables

Copy `.env.example` to `.env` and set:

- `NEXT_PUBLIC_SUPABASE_URL` – From Supabase Dashboard → Project Settings → API (e.g. `https://xxxxx.supabase.co`)
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` – Publishable key (safe for client)
- `SUPABASE_SECRET_KEY` – Secret key (server-only, never expose)

For **Vercel**: add the same three variables in Project → Settings → Environment Variables. Do not commit `.env` (it is in `.gitignore`).

## Supabase: waitlist table

Create the table in the Supabase SQL Editor (Dashboard → SQL Editor):

```sql
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  company_email text not null,
  created_at timestamptz default now()
);

-- Optional: enable RLS and allow only service role to insert (server uses secret key)
alter table public.waitlist enable row level security;

create policy "Service role can insert"
  on public.waitlist for insert
  to service_role
  with check (true);
```

## License

Private - © Genivra AI. All rights reserved.
