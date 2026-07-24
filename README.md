# Namoh

Dark-luxury spiritual platform homepage built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx        Root layout — fonts, Navbar, Footer
  page.tsx           Homepage — composes all sections
  globals.css         Tailwind base + custom utilities
components/
  ui/                Button, Card, Section, Container (reusable primitives)
  layout/            Navbar, Footer
  sections/           Hero, Services, Astrology, StorePreview, Testimonials
lib/
  types.ts            Shared TypeScript interfaces
  data.ts              Dummy data (pooja services, astrologers, products, testimonials)
```

## Theme

| Token   | Value     |
|---------|-----------|
| primary | `#FF6A00` |
| gold    | `#D4AF37` |
| bg      | `#0F0F0F` |
| surface | `#1A1A1A` |
| text    | `#FFFFFF` |

Fonts: Playfair Display (headings, `font-heading`) and Inter (body, `font-body`), loaded via `next/font/google`.
