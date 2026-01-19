# Worker Cooperatives

An educational website about worker cooperatives - businesses owned and democratically controlled by their employees.

## Overview

This Angular application provides comprehensive resources for anyone interested in learning about, starting, or joining a worker cooperative. It includes:

- **Educational content** explaining what worker cooperatives are and how they operate
- **State-by-state guides** with specific legal requirements and resources for all 50 US states
- **Interactive tools** like the Patronage Equity Calculator for understanding member equity
- **Case studies** of successful worker cooperatives
- **Governance and bylaws** guidance for structuring democratic businesses

## Features

### Content Pages
- **Home** - Introduction and overview of worker cooperatives
- **What Is a Worker Coop?** - Definition, principles, and benefits
- **How It Works** - Detailed guide to ownership, governance, compensation, and membership
- **Start a Co-op** - Step-by-step guide to forming a cooperative
- **Financing & Capital** - Funding options and financial structures
- **Governance & Bylaws** - Decision-making frameworks and legal documents
- **Case Studies** - Real-world success stories
- **FAQ** - Common questions answered

### State Guides
Individual guides for all 50 states covering:
- Legal entity options (LLC, cooperative corporation, etc.)
- State-specific statutes and requirements
- Filing procedures and costs
- Local resources and support organizations
- Tax considerations

States with dedicated worker cooperative statutes are highlighted, including California, Colorado, New York, North Carolina, Oregon, and others.

### Interactive Tools

**Patronage Equity Calculator**
- Calculate annual patronage allocations based on hours worked
- Project long-term equity growth over 5-40 years
- Visualize compounding returns with interactive charts
- Compare equity milestones at key intervals

## Tech Stack

- **Framework**: Angular 19
- **Styling**: SCSS with CSS custom properties for theming
- **Content**: Markdown files rendered with ngx-markdown
- **State Management**: Angular Signals

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
cd worker-cooperatives
npm install
```

### Development

```bash
npx ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload when you modify source files.

### Build

```bash
npx ng build
```

Build artifacts are stored in the `dist/` directory.

### Testing

```bash
npx ng test
```

## Project Structure

```
worker-cooperatives/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── equity-calculator/    # Interactive equity calculator modal
│   │   │   ├── page-nav/             # Site navigation component
│   │   │   └── theme-toggle/         # Light/dark mode toggle
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── what-is-a-worker-coop/
│   │   │   ├── how-coops-work/
│   │   │   ├── start-a-coop/
│   │   │   ├── financing-and-capital/
│   │   │   ├── governance-and-by-laws/
│   │   │   ├── case-studies/
│   │   │   ├── faq/
│   │   │   └── states/               # State index and detail pages
│   │   ├── services/
│   │   │   └── theme.service.ts      # Theme state management
│   │   ├── app.routes.ts
│   │   └── app.ts
│   ├── assets/
│   │   └── content/
│   │       ├── home.md
│   │       ├── what-is-a-worker-coop.md
│   │       ├── how-coops-work-part1.md
│   │       ├── how-coops-work-part2.md
│   │       ├── start-a-coop.md
│   │       ├── financing-and-capital.md
│   │       ├── governance-and-by-laws.md
│   │       ├── case-studies.md
│   │       ├── faq.md
│   │       └── states/               # 50 state-specific markdown files
│   └── styles.scss                   # Global styles and theme variables
└── angular.json
```

## Theming

The site supports light and dark modes using CSS custom properties. Theme preference is persisted to localStorage.

Key theme variables:
- `--bg-primary`, `--bg-secondary` - Background colors
- `--text-primary`, `--text-secondary` - Text colors
- `--accent-color` - Primary accent color
- `--border-color` - Border colors

## Content Management

All page content is stored as Markdown files in `src/assets/content/`. To update content:

1. Edit the relevant `.md` file
2. The changes will be reflected immediately in development mode
3. Rebuild for production deployment

## Adding New States

State pages use a dynamic route (`/states/:state`). To add or update a state:

1. Create/edit the markdown file in `src/assets/content/states/{state-slug}.md`
2. Update the state data in `src/app/pages/states/states.component.ts` if needed

## License

This project provides educational content about worker cooperatives. Content is sourced from and inspired by organizations including:

- [U.S. Federation of Worker Cooperatives](https://www.usworker.coop/)
- [Democracy at Work Institute](https://institute.coop/)
- [Project Equity](https://project-equity.org/)
- [Cooperative Development Institute](https://cdi.coop/)

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests for:

- Content corrections or updates
- New state-specific resources
- UI/UX improvements
- Accessibility enhancements
