# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Angular 21 website for worker cooperative education. Content is stored as markdown files in two locations:
- **Source content**: Root directory and `/states/` (57 markdown files total)
- **Rendered content**: Copied to `/worker-cooperatives/src/assets/content/` for the Angular app

The site uses standalone Angular components with `ngx-markdown` for rendering markdown content.

## Common Commands

All commands should be run from the `worker-cooperatives/` directory:

```bash
cd worker-cooperatives

# Install dependencies
npm install

# Development server (http://localhost:4200)
npm start
# or
npx ng serve

# Build for production
npm run build
# or
npx ng build

# Build with watch mode (development)
npm run watch

# Run all tests with Vitest
npm test
# or
npx ng test

# Run specific test file
npx ng test --include=**/component-name.spec.ts
```

## Architecture

### Content System

**Two-tier content structure:**
1. **Source markdown files** (root and `/states/`)
   - `home.md`, `what-is-a-worker-coop.md`, `how-coops-work.md`, `financing-and-capital.md`, `governance-and-by-laws.md`, `case-studies.md`, `start-a-coop.md`, `faq.md`
   - `/states/` contains 50 state-specific guides (e.g., `states/california.md`)

2. **Deployed content** (`/worker-cooperatives/src/assets/content/`)
   - Content must be copied here to be rendered by Angular
   - Currently only `home.md` is deployed

**Adding new pages workflow:**
1. Create/edit markdown file in root or `/states/`
2. Copy to `/worker-cooperatives/src/assets/content/`
3. Create page component in `/worker-cooperatives/src/app/pages/`
4. Add route in `app.routes.ts`

### Theme System

**ThemeService** (`src/app/services/theme.service.ts`):
- Manages light/dark mode using Angular signals
- Persists preference to localStorage
- Applies `data-theme` attribute to document root
- Respects system preference on first visit

**Global styling** (`src/styles.scss`):
- CSS custom properties (e.g., `--bg-primary`, `--text-primary`, `--link-color`)
- Theme variables defined in `:root` (light) and `[data-theme="dark"]` (dark)

**ThemeToggleComponent** (`src/app/components/theme-toggle/`):
- Standalone component with sun/moon SVG icons
- Injects ThemeService to toggle theme

### Component Architecture

All components use **standalone components** pattern (no NgModule):
- Import dependencies directly in component decorator
- Page components use inline templates or separate HTML files
- Markdown rendering via `ngx-markdown`'s `MarkdownComponent`

**Page component pattern:**
```typescript
@Component({
  standalone: true,
  imports: [MarkdownComponent],
  template: `<markdown src="assets/content/page-name.md"></markdown>`
})
```

### Routing

Routes defined in `src/app/app.routes.ts`:
- Pattern: `/{page-name}` → `PageNameComponent`
- Catch-all route `**` redirects to home
- Each route includes a `title` for SEO

### Styling

- **Global styles**: `src/styles.scss` (theme variables, typography, markdown elements)
- **Component styles**: Inline in component decorator or separate `.scss` files
- **Style language**: SCSS configured in `angular.json`
- **Prettier config**: In `package.json` (100-char width, single quotes, Angular parser for HTML)

### Build Configuration

**Development** (`ng serve`):
- Source maps enabled
- No optimization
- Hot reload at `http://localhost:4200`

**Production** (`ng build`):
- Output hashing enabled
- Bundle size limits: 500kB warning, 1MB error
- Component style limit: 4kB warning, 8kB error
- Output directory: `dist/`

## Project Structure

```
.
├── worker-cooperatives/          # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.ts           # Root component
│   │   │   ├── app.routes.ts    # Route definitions
│   │   │   ├── app.config.ts    # App providers (router, HTTP, markdown)
│   │   │   ├── components/      # Reusable components
│   │   │   │   └── theme-toggle/
│   │   │   ├── pages/           # Page components
│   │   │   │   └── home/
│   │   │   └── services/        # Injectable services
│   │   │       └── theme.service.ts
│   │   ├── assets/
│   │   │   └── content/         # Markdown files rendered by app
│   │   ├── styles.scss          # Global styles and theme variables
│   │   ├── main.ts              # Bootstrap entry point
│   │   └── index.html
│   ├── package.json
│   ├── angular.json
│   └── tsconfig.json
├── states/                       # State-specific markdown (50 files)
├── home.md                       # Core page markdown files
├── what-is-a-worker-coop.md
├── [other core markdown files]
├── PROGRESS.md                   # Content completion tracker
└── CLAUDE.md                     # Claude AI guidance (similar to this file)
```

## Key Dependencies

- **Angular**: v21.1.0 (standalone components, signals)
- **ngx-markdown**: v21.0.1 (markdown rendering with `marked` library)
- **Vitest**: v4.0.8 (unit testing framework)
- **SCSS**: Configured as style preprocessor

## Development Notes

### Adding a New Page

1. Create markdown in root (e.g., `new-page.md`)
2. Copy to `worker-cooperatives/src/assets/content/new-page.md`
3. Generate component: `cd worker-cooperatives && npx ng generate component pages/new-page`
4. Update component to load markdown from `assets/content/new-page.md`
5. Add route to `app.routes.ts`: `{ path: 'new-page', component: NewPageComponent, title: 'Page Title' }`

### Working with State Guides

50 state-specific guides exist in `/states/` directory but are not yet integrated into the Angular app. Each follows a consistent structure with legal information, formation steps, funding resources, and state-specific FAQs.

### Testing

Uses Vitest (not Karma) as configured in Angular 21. Test files use `.spec.ts` extension.
