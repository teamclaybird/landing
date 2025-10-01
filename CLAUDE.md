# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Building a landing page for Claybird (claybird.com) using Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Magic UI components.

This project was bootstrapped with `create-next-app` and uses Turbopack for faster builds.

## Development Commands

- **Start dev server**: `npm run dev` (uses Turbopack, runs on http://localhost:3000)
- **Build for production**: `npm run build` (uses Turbopack)
- **Start production server**: `npm run start`
- **Lint**: `npm run lint` (ESLint with Next.js TypeScript config)

## Architecture

### App Router Structure
- Uses Next.js 15 App Router (app directory)
- `app/layout.tsx`: Root layout with Geist fonts (sans and mono) configured via `next/font/google`
- `app/page.tsx`: Home page component
- `app/globals.css`: Global styles with Tailwind imports

### TypeScript Configuration
- Target: ES2017
- Strict mode enabled
- Path alias: `@/*` maps to project root
- Module resolution: bundler

### Styling
- Tailwind CSS 4 with PostCSS
- shadcn/ui components
- Magic UI components
- Custom CSS properties for foreground/background colors
- Geist font family (sans and mono) loaded via next/font

## Design System (Inspired by Lovable.dev)

**IMPORTANT**: Before making any design decisions or implementing UI components, ALWAYS read the reference images in `/public/references/` directory (design_part1.png, design_part2.png) to understand the exact visual style, spacing, colors, and component patterns.

### Key Design Principles
- **Full-page gradient background**: Purple/blue to pink/orange gradient spans entire viewport
- **Adaptive sticky header**: Transparent initially, transitions to opaque white with backdrop blur on scroll
- **Hero section**: Sits directly on gradient background (no card wrapper)
- **Content sections**: All non-hero sections wrapped in white rounded cards that float on the gradient
- **Card styling**: Large border radius (rounded-3xl), generous padding, subtle shadows
- **Footer**: Also contained in a rounded card

### ESLint
- Extends `next/core-web-vitals` and `next/typescript`
- Ignores: node_modules, .next, out, build, next-env.d.ts