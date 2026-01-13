# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

John Keane Studios portfolio website - a Next.js 16 static site with dark glassmorphism design for an independent recording studio.

## Development Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
```

## Architecture

### Next.js App Router Structure
- `app/layout.tsx` - Root layout with Header/Footer, metadata, Google Fonts
- `app/page.tsx` - Home page (only implemented route)
- `app/globals.css` - CSS variables, Tailwind layers, custom classes

### Component Patterns
- **Server Components** (default): `Header.tsx`, `Footer.tsx`, `Card.tsx` - pure presentational
- **Client Components** (with `"use client"`): `MobileNav.tsx`, `Input.tsx` - use `useState`
- **UI primitives**: `components/ui/` - button, card, input

### Styling System
Tailwind CSS with custom dark theme defined in `tailwind.config.ts`:
- **Colors**: background `#0B0B0F`, secondary `#FF3D7F` (pink), accent `#00E5FF` (cyan)
- **Fonts**: Space Grotesk (headings), Manrope (body) via Google Fonts
- **Custom classes**: `.glass-card` (glassmorphism), `.gradient-btn` (animated gradient)

### Current State
- Only `/` route is implemented; other routes (`/html/*`) are linked but not built
- No database, API, or backend integration
- No testing framework configured
- Images load from `johnkeanestudios.com` and local `/public/generated/`
