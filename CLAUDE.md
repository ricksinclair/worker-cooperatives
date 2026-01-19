# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular website for worker cooperative education. Content is stored as markdown files that are rendered as web pages.

## Commands

```bash
cd worker-cooperatives

# Install dependencies
npm install

# Development server (http://localhost:4200)
npx ng serve

# Build for production
npx ng build

# Run tests
npx ng test

# Run single test file
npx ng test --include=**/component-name.spec.ts
```

## Architecture

### Content Structure
- `/worker-cooperatives/src/assets/content/` - Markdown files for each page
- `home.md` - Homepage content
- Future: Additional core pages and 50 state-specific guides

### Theme System
- **ThemeService** (`/worker-cooperatives/src/app/services/theme.service.ts`) - Manages light/dark mode state, persists to localStorage, applies `data-theme` attribute to document
- **Global styles** (`/worker-cooperatives/src/styles.scss`) - CSS custom properties for theming (`--bg-primary`, `--text-primary`, etc.)
- **ThemeToggleComponent** (`/worker-cooperatives/src/app/components/theme-toggle/`) - Toggle button with sun/moon icons

### Page Structure
- Pages live in `/worker-cooperatives/src/app/pages/`
- Each page component loads its corresponding markdown from `/src/assets/content/`
- Uses `ngx-markdown` with `MarkdownComponent` for markdown rendering

### Routing
- Routes defined in `/worker-cooperatives/src/app/app.routes.ts`
- Pattern: `/{page-name}` maps to `PageNameComponent`

## Content Files (Source)
Original markdown content lives at project root:
- `home.md`, `what-is-a-worker-coop.md`, `how-coops-work.md`, etc.
- `/states/` - 50 state-specific guides (alabama.md through wyoming.md)

When adding new pages:
1. Copy markdown to `/worker-cooperatives/src/assets/content/`
2. Create page component in `/worker-cooperatives/src/app/pages/`
3. Add route in `app.routes.ts`
