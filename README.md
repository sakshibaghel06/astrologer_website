# AstroJyotish — Vedic Astrology Website

A full-stack astrology business website built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Supabase.

## Features

- Public website: Home, About, Shop/Services, Appointment booking, Contact
- Appointment booking with real-time slot availability (Supabase)
- Contact form with Supabase storage
- Admin portal: Dashboard, Appointments management, Product CRUD, Messages
- Supabase Auth for admin login
- Row Level Security on all tables
- Fully responsive, dark cosmic design

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database / Auth**: Supabase (PostgreSQL + Row Level Security)
- **Validation**: Zod + React Hook Form
- **Deployment**: Vercel

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (Settings → API) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service-role secret key (**server-only**) |
| `NEXT_PUBLIC_SITE_URL` | Full URL of the deployed site |

> ⚠️ Never commit `.env.local`. Never prefix `SUPABASE_SERVICE_ROLE_KEY` with `NEXT_PUBLIC_`.

### 3. Supabase setup

Run the SQL migrations in order in your Supabase SQL Editor:

1. `supabase/migrations/001_create_appointments.sql`
2. `supabase/migrations/002_create_products.sql`
3. `supabase/migrations/003_create_contact_messages.sql`

Then run this grant (required for server-side reads):

```sql
GRANT SELECT, INSERT, UPDATE, DELETE ON public.appointments TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.products TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_messages TO service_role;
```

Create an admin user in Supabase Dashboard → Authentication → Users.

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Admin portal: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

### 5. Build for production

```bash
npm run build
```

## Deployment (Vercel)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add all environment variables from `.env.example` in Vercel project settings
4. Deploy

The project is Vercel-compatible out of the box with no additional configuration.
