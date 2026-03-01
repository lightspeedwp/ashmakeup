# Changelog

All notable changes to the Ash Shaw Makeup Portfolio will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [7.5.0] - 2026-03-01

### Added

- `makeup-artist` sticker entry added to `/data/mock/images/sticker-graphics.ts` — contact graphic (`figma:asset/6095d8818a83e64a063161f9df091d561fde7105.png`) registered as sticker #27, theme `psychedelic`
- `makeup-artist` mapped in `stickerThemeMap` in `/data/mock/ui/stickers.ts`
- `.contact-page-faq-fullwidth` CSS class added to `/styles/blocks/contact-page.css` — full-width FAQ block below the two-column grid
- Comprehensive Cleanup Audit 4 report — `/reports/comprehensive-cleanup/04-unused-imports.md`
- Comprehensive Cleanup Audit 5 report — `/reports/comprehensive-cleanup/05-css-hygiene.md` (87 CSS files verified, zero orphans)
- Comprehensive Cleanup Audit 6 report — `/reports/comprehensive-cleanup/06-folder-hygiene.md`

### Changed

- `ContactPage.tsx` — `OptimizedImage` graphic removed; FAQ section lifted out of left column and placed full-width below the two-column grid
- `BlogPreviewSection.tsx` — `useContentful` import → `useContent`
- `HomePage.tsx` — `useContentful` import → `useContent`
- `AboutPage.tsx` — `useContentful` import → `useContent`
- `BlogPage.tsx` — `useContentful` import → `useContent`
- `BlogPostPage.tsx` — `useContentful` import → `useContent`
- `CardSpecimenPage.tsx` — removed unused `Tag`, `Heart`, `Mic` icon imports (dev-tools deep scan)
- `VisualRegressionTesterPage.tsx` — removed unused `takeScreenshotNote` callback and `useCallback` import (dev-tools deep scan)
- `postcss.config.js` — stale comment updated to accurately reflect Tailwind V4 Vite-plugin architecture and BEM-only styling approach
- `/guidelines/Guidelines.md` — Content Folder Protection Rule updated to historical status (folder deleted Feb 25); file structure diagram corrected; `Guidelines.md` legacy root exception explicitly documented in root restriction rule
- `/guidelines/sections/BlogPreviewSection.md` — `useContentful` code example corrected to `useContent`
- `/guidelines/wordpress-migration-guide.md` — `/dist/wordpress-export.json` reference updated with deletion notice and regeneration instructions
- `/guidelines/overview-components.md`, `/guidelines/components/PortfolioCard.md`, `/guidelines/components/BlogCard.md` — Contentful CMS references updated to WordPress/useContent
- `/tasks/task-list.md` and `/tasks/comprehensive-cleanup-tasks.md` — all post-audit follow-up items resolved and ticked; dead report links replaced with `_(report archived)_` notation
- UI Primitives Decision documented: Option A (keep all 45 shadcn stubs) — CSS cascade dependency confirmed, project feature-complete, stubs tree-shaken from production bundle

### Removed

- `OptimizedImage` and `contactGraphic` imports removed from `ContactPage.tsx` (image migrated to sticker data file)
- `/hooks/useContentful.ts` — deprecated re-export shim deleted (all consumers migrated to `useContent`)
- `/content/` folder — 25 orphaned markdown files across 5 subfolders deleted (zero imports, all content migrated to `/data/mock/`)
- `/dist/wordpress-export.json` — stale build artifact deleted
- `.contact-page-faq-inline` rule removed from `/styles/blocks/contact-page.css` (confirmed unused — zero references in codebase)
- `/reports/root-cleanup/` — all 8 audit reports deleted (lifecycle rule: reports older than a few days; all items fully resolved)

## [7.4.0] - 2026-02-25

### Added

- `/CHANGELOG.md` restored in project root as a protected file
- Changelog guidelines at `/guidelines/changelog.md` with format rules, writing standards, and protection policies
- "Protected Root Files" subsection added to Guidelines.md Section 10

### Changed

- Guidelines promoted to v7.4.0
- `CHANGELOG.md` entry in root directory restrictions updated with protection status and cross-reference to changelog guideline

## [7.3.0] - 2026-02-25

### Added

- Default AI Workflow (MUST FOLLOW) section in Guidelines — enforces 4-step sequence: prompt, audit, report, task list
- Multi-audit orchestrator pattern for complex audits
- Reusability requirement for all prompt templates
- `/docs/` folder formally added to mandatory folder conventions (rule #7)
- `/docs/cms-field-mapping.md` — relocated from `/data/schema.md`
- Comprehensive cleanup orchestrator prompt at `/prompts/comprehensive-cleanup/orchestrator.md`
- 3 audit reports in `/reports/comprehensive-cleanup/` (root compliance, orphaned files, deprecated patterns)
- 8 audit reports in `/reports/root-cleanup/`
- Master task list at `/tasks/task-list.md` (permanent, never delete)

### Changed

- Guidelines.md promoted to v7.3.0
- CMS field mapping reference updated to point to `/docs/cms-field-mapping.md`

### Removed

- `/data/schema.md` — relocated to `/docs/cms-field-mapping.md`

## [7.2.0] - 2026-02-25

### Added

- Root directory restrictions — only `README.md`, `CHANGELOG.md`, and `Attributions.md` allowed as `.md` files in root
- `/docs/` folder for general project documentation
- `/scripts/` folder for all build, utility, and automation scripts
- Enforcement rules for `.md` and `.sh` file placement

### Changed

- Guidelines.md promoted to v7.2.0

## [7.1.0] - 2026-02-25

### Added

- Workflow folder conventions for `/prompts/`, `/reports/`, `/tasks/`
- Cross-referencing rules between workflow folders and guidelines
- Lifecycle rules for archiving tasks and cleaning reports

### Changed

- Guidelines.md promoted to v7.1.0

## [7.0.0] - 2026-02-25

### Added

- SEO system — centralised `setSEO()` utility (`/utils/seo.ts`) with single-call meta tag management
- Centralised SEO data file (`/data/mock/seo.ts`) — all 46 page components wired
- Schema.org JSON-LD structured data service (`/utils/schemaService.ts`)
  - WebSite, Person, BlogPosting, VideoObject, PodcastEpisode, VisualArtwork, ImageGallery, CollectionPage, BreadcrumbList, FAQPage
- Breadcrumbs component (`/components/ui/Breadcrumbs.tsx`) with Schema.org BreadcrumbList JSON-LD
- Dedicated breadcrumbs CSS at `/styles/blocks/breadcrumbs.css`

### Changed

- All 46 page components now use `setSEO()` instead of direct `document.title` manipulation
- Breadcrumbs standardised to single-source component across all sub-pages

## [6.0.0] - 2026-02-01

### Added

- Stickers Gallery page with 26 entries
- FAQ system with Schema.org FAQPage structured data
- FAQ aggregate page (`FaqAggregatePage`)
- Global search system with `ArchiveFilters` component
- Search results page (`SearchResultsPage`)
- Feedback page for testimonials (`FeedbackPage`)

### Changed

- All planned features from v4.0.0 task list (Tasks 19-36) marked complete
- Project declared feature-complete

## [5.3.0] - 2026-01-15

### Added

- Personal Art Project designation — strict non-commercial classification
- Pronoun guidelines (He/Him) and personal identity rules
- Location scope (Berlin and International Festivals only)
- Content scope restrictions (no weddings, corporate events, bridal makeup)

### Removed

- All "Shop" and "Services" pages
- Pricing, booking forms, and "Add to Cart" functionality
- All commercial and e-commerce features
- Bridal/wedding/corporate content references

### Changed

- Site focus narrowed to Portfolio (Gallery), Videos (Showcase), and Blog (Insights) only

## [5.0.0] - 2026-01-01

### Added

- Developer Tools Hub page with 23 sub-tools for design system inspection
  - Design Tokens Reference, Icon Library, Component API, Playground
  - Code Quality, Deployment Readiness, Analytics Dashboard
  - Component Showcase, Snippet Generator, Documentation Generator
  - Visual Regression Tester, Integration Tester
  - 7 specimen pages (typography, spacing, shadows, radius, buttons, cards, neon)
  - Accessibility Tester, Performance Tester
- Analytics Dashboard with localStorage-based content tracking
- Podcasts page and podcast archive system
- Videos page and video showcase system

### Changed

- Component architecture expanded to support 23 DevTools sub-routes

## [4.0.0] - 2025-12-01

### Added

- Strict BEM Architecture — systematic migration from Tailwind utilities complete
- BEM naming convention enforced (Block, Element, Modifier)
- Centralised mock data system (`/data/mock/`) as single source of truth
- TypeScript type definitions in `/data/types/`
- Portfolio data service (`/utils/portfolioService.ts`)
- Advanced blog system with search, filtering, and pagination
- Blog post page with rich content and social sharing
- Dual Mode Architecture toggle (`VITE_USE_WORDPRESS`) for Headless WordPress
- `useContent` facade hook pattern (mock data vs WordPress)
- CMS field mapping documentation for WordPress CPT/ACF fields
- Custom lightweight router at `/lib/router.tsx`
- Bundler compatibility workarounds (no optional chaining, nullish coalescing, etc.)
- Helper functions: `grab()`, `arrayGet()`, `setProp()`, `buildContextValue()`

### Changed

- All styling migrated from Tailwind utilities to semantic BEM classes
- All hardcoded content migrated to `/data/mock/` imports
- Inline styles prohibited — all styling via CSS classes in `/styles/globals.css`

### Removed

- Tailwind utility class usage (strictly forbidden)
- Inline styles from all components
- Hardcoded content strings from components

## [3.0.0] - 2025-10-01

### Added

- Neon vs Atomic Black visual identity system
- 8 neon colors: electric green, hot pink, royal blue, pure yellow, blazing orange, violet purple, aqua cyan, hot red
- Atomic Black (#0F0F0F) background system
- 4 signature gradients: Cyberpunk, Toxic Lime, Solar Flare, Hyperpop
- 26 animation keyframes (neon pulse, gradient shift, float, bounce, etc.)
- SVG grain noise texture overlay via `feTurbulence`
- Dual theme system (accessible text for light mode, full neon for dark mode)
- Dark mode implementation with component-specific patterns
- `prefers-reduced-motion` support for all 26 animations
- WCAG 2.1 AA accessibility compliance (100%)
- Enhanced focus indicators (3px neon pink with glow effects)
- Keyboard navigation support (Tab, Enter, Space, Arrows, Escape)
- Screen reader support with proper ARIA labels

### Changed

- Complete visual redesign from previous brand identity to Neon vs Atomic Black

## [2.0.0] - 2025-08-01

### Added

- Progressive Web App (PWA) implementation
- Service worker for offline support
- PWA utilities (`/utils/pwaService.ts`)
- App installability (Add to Home Screen)
- Variable font system (73% fewer font requests)
- WordPress-inspired fluid typography system
- Fluid width breakpoints (320px to 1440px)
- Responsive typography scale (H1: 36px to 120px)

### Changed

- Font loading strategy migrated to variable fonts
- Typography system migrated to fluid `clamp()` values

## [1.0.0] - 2025-06-01

### Added

- Initial project setup with React 18+ and TypeScript
- Tailwind CSS V4 integration with custom design tokens
- Lucide React icon library
- Core page structure: Home, About, Portfolio, Blog
- Header component with navigation and mobile menu
- Footer component with social links
- Hero section with image carousel
- Portfolio gallery with lightbox
- Blog listing with post detail pages
- About page with journey and philosophy sections
- Contact page with Typeform embed integration
- Error boundary component for React lifecycle errors
- Figma integration utilities (`/components/figma/`)
- `ImageWithFallback` component for graceful image loading