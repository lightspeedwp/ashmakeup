# 🎨 Ash Shaw Makeup Portfolio – Design & Development Guidelines

This document defines the core design, development, and technical guidelines for building and maintaining the Ash Shaw Makeup Portfolio in **Figma Make**. It serves as the entry point to a comprehensive design system with detailed documentation organized in separate files.

**Version:** 7.0.0
**Last Updated:** February 2026
**Last Reviewed:** February 21, 2026

## 📋 Major Update (v5.3.0) - Personal Art Project

**🚫 NOT FOR PROFIT - PERSONAL ART PROJECT**

This website is strictly a **personal art portfolio**.
- **NO Monetization:** There are no shop, e-commerce, or payment features.
- **NO Services/Booking:** This is not a business site. No "Book Now" or pricing information.
- **NO Commercial Intent:** The project exists solely to showcase artistic work and tutorials.

**✅ PERSONAL IDENTITY & CONTENT SCOPE**
- **Pronouns:** Strict **He/Him** usage. Ash is male. (e.g., "guy with the bike", "he created").
- **Locations:** Focus strictly on **Berlin** and **International Festivals**.
- **Excluded Content:** NO weddings, NO corporate events, NO bridal makeup.

**Migration Impact:**
- Removed all "Shop" and "Services" pages.
- Removed pricing, booking forms, and "Add to Cart" functionality.
- Focus is entirely on Portfolio (Gallery), Videos (Showcase), and Blog (Insights).

## 📚 How to Use These Guidelines

This project has a comprehensive design system with guidelines organized across multiple files. **Always follow this reading order:**

### Step 1: Read Overview Files (REQUIRED)
Read ALL overview files in this directory:
- **[overview-components.md](./overview-components.md)** - Component system and React architecture diagram
- **[overview-icons.md](./overview-icons.md)** - Icon system and verification process
- **[overview-sections.md](./overview-sections.md)** - Section patterns (WordPress block theme aligned)
- **[overview-blocks.md](./overview-blocks.md)** - Block patterns and content units
- **[overview-patterns.md](./overview-patterns.md)** - Design patterns and compositions
- **[overview-parts.md](./overview-parts.md)** - Template parts (Header, Footer, etc.)
- **[overview-templates.md](./overview-templates.md)** - Page templates and layouts
- **[Data System Documentation](../data/README.md)** - Mock data system and usage (IMPORTANT!)
- **[pwa-implementation.md](./pwa-implementation.md)** - 🆕 Progressive Web App features and offline support

### Step 2: Read Design Tokens (REQUIRED)
Read ALL files in the `design-tokens/` folder. Do NOT skip this step:
- **[neon-colors.md](./design-tokens/neon-colors.md)** - 🆕 Neon vs Atomic Black color system (PRIMARY)
- **[animations.md](./design-tokens/animations.md)** - 🆕 Complete animation system with 26 keyframes
- **[colors.md](./design-tokens/colors.md)** - Legacy color documentation (reference only)
- **[typography.md](./design-tokens/typography.md)** - Typography scale and hierarchy
- **[spacing.md](./design-tokens/spacing.md)** - Spacing system and responsive patterns
- **[accessibility-report-feb-2025.md](./accessibility-report-feb-2025.md)** - 🆕 WCAG AA compliance report
- **[prefers-reduced-motion.md](./prefers-reduced-motion.md)** - 🆕 Reduced motion coding standards & accessibility guide

### Step 2.5: Understand Light/Dark Mode System (REQUIRED)
Read the light/dark mode documentation for complete theme implementation:
- **[dark-mode-implementation.md](./dark-mode-implementation.md)** - Complete dark mode implementation guide
- **[component-dark-mode.md](./component-dark-mode.md)** - Component-specific dark/light mode patterns

### Step 3: Understand Mock Data System (REQUIRED)
Read the mock data guidelines to understand centralized data management:
- **[Data System Documentation](../data/README.md)** - Complete guide to the mock data system

### Step 4: Read Component Guidelines BEFORE Using (REQUIRED)
BEFORE using ANY component, you MUST read its specific guideline file:
- Using Logo? → Read **[components/Logo.md](./components/Logo.md)** FIRST
- Using ScrollDownArrow? → Read **[components/ScrollDownArrow.md](./components/ScrollDownArrow.md)** FIRST
- Using ScrollToTop? → Read **[components/ScrollToTop.md](./components/ScrollToTop.md)** FIRST

### Step 5: Verify Icons Before Using (REQUIRED)
Before using ANY icon, check **[overview-icons.md](./overview-icons.md)** for the verification process. Never assume an icon exists.

---

## 🚨 CRITICAL STYLING RULE - STRICT BEM ARCHITECTURE

### ⛔ NO TAILWIND UTILITIES ALLOWED

**SYSTEMATIC MIGRATION COMPLETE:** This codebase has fully migrated to a strict **Semantic BEM (Block Element Modifier)** architecture. Tailwind utility classes are **STRICTLY FORBIDDEN**.

**Priority Order for Styling:**
1. **✅ ONLY CHOICE:** Use BEM classes defined in `/styles/globals.css` (e.g., `.portfolio-card__image--featured`, `.hero__title`)
2. **🚫 NEVER:** Use Tailwind utilities (e.g., `flex`, `p-4`, `text-center`)
3. **🚫 NEVER:** Use inline styles

```tsx
// ✅ CORRECT - Semantic BEM Classes
<div className="card card--featured">
  <h2 className="card__title">Title</h2>
</div>

// ❌ WRONG - Tailwind Utilities
<div className="flex items-center gap-4">
  <span className="text-gray-600">Text</span>
</div>

// ❌ WRONG - Inline styles
<div style={{ padding: '16px' }}>
  Content
</div>
```

### ⚠️ BEM Naming Convention

**All CSS classes must follow the BEM naming convention:**

- **Block:** `.block` (e.g., `.header`, `.card`, `.hero`)
- **Element:** `.block__element` (e.g., `.header__logo`, `.card__title`)
- **Modifier:** `.block--modifier` or `.block__element--modifier` (e.g., `.header--transparent`, `.card__title--large`)

### ⚠️ Data & Content Rules

**NO HARDCODED CONTENT:** All text, images, and configuration data must be imported from the `/data/mock` directory.

```tsx
// ✅ CORRECT - Imported Data
import { heroContent } from "@/data/mock";

<h1 className="hero__title">{heroContent.title}</h1>

// ❌ WRONG - Hardcoded String
<h1 className="hero__title">Welcome to my Portfolio</h1>
```

### 🚫 NO INLINE STYLES - CRITICAL RULE

**NEVER USE INLINE STYLES.** All styling must be done through CSS classes defined in `/styles/globals.css`.

---

## 1. 📁 Project Structure & Architecture

### File Organization (February 2026)

```
ash-shaw-makeup-portfolio/
├── 📄 App.tsx                         # Main application router
├── 📄 main.tsx                        # React entry point
├── 📄 index.html                      # HTML template
├──
├── 📁 components/
│   ├── 📁 common/                     # Shared components (Header, Footer, Logo)
│   ├── 📁 pages/                      # Page components (Home, About, Portfolio, Blog)
│   ├── 📁 sections/                   # Layout sections
│   ├── 📁 ui/                         # UI primitives
│   └── 📁 figma/                      # Figma integration utilities
│
├── 📁 data/                           # 🆕 Centralized mock data system
│   ├── 📁 mock/                       # Mock data (single source of truth)
│   │   ├── 📁 images/                 # Hero images
│   │   ├── 📁 pages/                  # Page content (home, about, portfolio)
│   │   ├── 📁 portfolio/              # Portfolio entries
│   │   ├── 📁 blog/                   # Blog data
│   │   └── 📁 ui/                     # UI elements
│   └── 📁 types/                      # TypeScript type definitions
│
├── 📁 styles/
│   └── 📄 globals.css                 # Tailwind V4 + brand system
│
├── 📁 utils/
│   ├── 📄 portfolioService.ts         # Portfolio data service
│   └── 📄 pwaService.ts               # Progressive Web App utilities
│
├── 📁 hooks/                          # React hooks (custom hooks)
│
├── 📁 guidelines/                     # THIS DIRECTORY
│   ├── 📄 Guidelines.md               # This file (start here)
│   ├── 📄 README.md                   # Documentation index
│   ├── 📄 overview-components.md      # Component system overview + React diagram
│   ├── 📄 overview-icons.md           # Icon system guide
│   ├── 📁 components/                 # Component-specific docs
│   ├── 📁 design-tokens/              # Design token specifications
│   ├── 📁 icons/                      # Icon category docs
│   ├── 📁 mobile/                     # Mobile-specific guidelines
│   ├── 📁 sections/                   # Section patterns
│   ├── 📁 blocks/                     # Block patterns
│   ├── 📁 patterns/                   # Design patterns
│   ├── 📁 parts/                      # Template parts
│   └── 📁 templates/                  # Page templates
│
├── 📁 public/                         # Static assets
└── 📁 Configuration Files             # Build and deployment configs
```

### Component Architecture Overview

See **[overview-components.md](./overview-components.md)** for complete component hierarchy and usage patterns.

**Key Application Structure:**
```typescript
App.tsx (Router + Global State)
├── Header (Navigation + Mobile Menu)
├── HomePage (Hero + Featured + Blog Preview)
├── AboutPage (Journey + Philosophy)
├── PortfolioPage (Gallery + Lightbox)
├── BlogPage (Search + Filtering + Pagination)
├── BlogPostPage (Rich Content + Sharing)
├── VideosPage (Video showcase)
├── PodcastsPage (Podcast archive)
├── SearchResultsPage (Global search)
├── FaqAggregatePage (FAQ system)
├── FeedbackPage (Testimonials)
├── StickersPage (Sticker art gallery)
├── DevToolsPage (23 sub-tools hub)
│   ├── DesignTokensRefPage (/dev-tools/tokens)
│   ├── IconLibraryPage (/dev-tools/icons)
│   ├── ComponentApiPage (/dev-tools/api)
│   ├── PlaygroundPage (/dev-tools/playground)
│   ├── CodeQualityPage (/dev-tools/code-quality)
│   ├── DeploymentReadinessPage (/dev-tools/deployment)
│   ├── AnalyticsDashboardPage (/dev-tools/analytics)
│   ├── ComponentShowcasePage (/dev-tools/components)
│   ├── SnippetGeneratorPage (/dev-tools/snippets)
│   ├── DocumentationGeneratorPage (/dev-tools/docs)
│   ├── VisualRegressionTesterPage (/dev-tools/visual-regression)
│   ├── IntegrationTesterPage (/dev-tools/integration)
│   ├── 7 specimen pages (typography, spacing, shadows, radius, buttons, cards, neon)
│   ├── AccessibilityTesterPage (/dev-tools/accessibility)
│   └── PerformanceTesterPage (/dev-tools/performance)
└── Footer (Link to Contact Page + Social Links)
```

---

## 2. 🔗 Dependencies & Integrations

### Core Dependencies
- **React 18+** - Concurrent features and modern hooks
- **Tailwind CSS V4** - Utility-first styling with custom design tokens
- **Lucide React** - Icon library
- **TypeScript** - Type safety and developer experience

### Deployment & Hosting
- **Netlify** - Production deployment, CDN, and hosting
- **Progressive Web App** - Installable, offline-capable application

### Key Features
- ✅ Variable Font System (73% fewer requests)
- ✅ Centralized Mock Data System (single source of truth)
- ✅ WordPress-Inspired Fluid Typography
- ✅ WCAG 2.1 AA Accessibility Compliance
- ✅ Advanced Blog System (search, filtering, pagination)
- ✅ Progressive Web App (installable, offline support, service worker)
- ✅ Developer Tools Hub (23 sub-tools for design system inspection)
- ✅ Analytics Dashboard (localStorage-based content tracking)
- ✅ Global search system with ArchiveFilters
- ✅ FAQ system with Schema.org structured data
- ✅ Stickers Gallery (26 entries)

### SEO & Structured Data
- ✅ Centralised `setSEO()` utility (`/utils/seo.ts`) — single call sets title, description, OG, Twitter Card
- ✅ Centralised SEO data file (`/data/mock/seo.ts`) — all 46 page components wired
- ✅ Schema.org JSON-LD structured data (`/utils/schemaService.ts`) — WebSite, Person, BlogPosting, VideoObject, PodcastEpisode, VisualArtwork, ImageGallery, CollectionPage, BreadcrumbList, FAQPage
- ✅ Breadcrumbs component (`/components/ui/Breadcrumbs.tsx`) — single source, dedicated CSS, Schema.org BreadcrumbList JSON-LD

### All Planned Features Complete
All tasks from the v4.0.0 task list (Tasks 19–36) are now complete. The project is feature-complete.

---

## 3. 🎨 Brand Identity & Design System

### 🌟 Neon vs Atomic Black Visual Identity

**Design Philosophy:**
The Ash Shaw Makeup Portfolio uses a bold **Neon vs Atomic Black** design system that reflects the vibrant, energetic nature of makeup artistry.

**Core Elements:**
- **8 Neon Colors:** Electric green, hot pink, royal blue, pure yellow, blazing orange, violet purple, aqua cyan, hot red
- **Atomic Black:** Deep #0F0F0F background for maximum neon contrast
- **4 Signature Gradients:** Cyberpunk (pink→blue), Toxic Lime (green→cyan), Solar Flare (orange→yellow), Hyperpop (animated multi-color)
- **26 Animations:** Neon pulse, gradient shift, float, bounce, and more
- **Dual Theme:** Accessible text variants for light mode, full-brightness neon for dark mode
- **SVG Grain Noise Texture:** Site-wide `feTurbulence` noise overlay on all major sections via `::before` pseudo-elements

**📖 Complete Documentation:**
- **[neon-colors.md](./design-tokens/neon-colors.md)** - Full neon color system
- **[animations.md](./design-tokens/animations.md)** - All 26 animations documented

### Responsive Breakpoints & Fluid Typography
(See [design-tokens/typography.md](./design-tokens/typography.md) for full details)

**Fluid Width System:**
- Mobile Compact: >320px
- Mobile: >420px
- Tablet Portrait: >768px
- Tablet Landscape: >1024px
- Desktop: >1440px

**Fluid Typography:**
- H1: 36px → 120px (`.text-hero-h1`)
- H2: 24px → 48px (`.text-section-h2`)
- Body: 16px → 20px (`.text-body-p`)

---

## 4. ♿ Accessibility Standards

### WCAG 2.1 AA Compliance ✅

**Status:** 100% WCAG 2.1 Level AA Compliant

All components meet the following standards:
- **Color Contrast:** 4.5:1 minimum (body text), 7:1+ achieved in dark mode (AAA)
- **Reduced Motion:** Full `prefers-reduced-motion` support for all 26 animations
  - See **[prefers-reduced-motion.md](./prefers-reduced-motion.md)** for coding standards and implementation guide
- **Keyboard Navigation:** Full support (Tab, Enter, Space, Arrows, Escape)
- **Screen Readers:** Proper ARIA labels and semantic HTML
- **Focus Management:** Enhanced 3px neon pink focus indicators with glow effects

---

## 5. 📧 Backend Integrations

### Contact Page Integration (Typeform)
- **Solution:** Typeform embed integration
- **Features:** Professional inquiry form for collaborations (non-commercial).
- **Implementation:** `TypeformEmbed` component dynamically loads the form

### Content Management
- **Dual Mode Architecture** - Toggle between Mock Data and Headless WordPress via `VITE_USE_WORDPRESS`
- **Centralized Data Access** - All components use `useContent` hooks (facade pattern)
- **Type-safe** - Full TypeScript support for both Mock and WP data shapes
- **Single source of truth** - Content is managed externally (WP) or in `/data/mock/`


---

## 6. 🛠️ Component Implementation Standards

### TypeScript Requirements

Every component must include JSDoc comments describing purpose, props, and accessibility features.

### Export Standards
- **Named Exports:** All components (for tree-shaking)
- **Default Export:** Only App.tsx
- **Type Exports:** Separate export for shared interfaces

### Breadcrumbs (REQUIRED on all sub-pages)

**Single Source Component:** All breadcrumbs MUST use `/components/ui/Breadcrumbs.tsx`. Never create inline breadcrumb markup.

**CSS:** `/styles/blocks/breadcrumbs.css` (imported by the component itself — no need to import CSS separately).

**Pattern:** `Home > Section > Page Name`

```tsx
import { Breadcrumbs } from '../../ui/Breadcrumbs';

<Breadcrumbs items={[
  { label: 'Home', href: '/' },
  { label: 'Developer Tools', href: '/dev-tools' },
  { label: 'Typography Specimens' },
]} />
```

**Rules:**
- Never render `<Breadcrumbs>` more than once per page
- Last item has no `href` (renders as plain text with `aria-current="page"`)
- Schema.org BreadcrumbList JSON-LD is injected automatically

### SEO (REQUIRED on all pages)

**Single Source Utility:** All SEO meta tags MUST use `setSEO()` from `/utils/seo.ts`. Never set `document.title` directly.

```tsx
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';

useEffect(() => {
  setSEO(pageSEO.about);
}, []);
```

**Dynamic content pages** use helper functions: `blogPostSEO()`, `videoSEO()`, `podcastSEO()`, `portfolioEntrySEO()`, etc.

---

## 7. 🎯 Styling Requirements

### Must Use Explicit Design Token Classes

**Layout Components (Header, Footer, MobileMenu):**
- **Strictly Prohibited:** Hardcoded pixel values (e.g., `w-[300px]`, `top-[50px]`)
- **Required:** Use responsive design tokens or fluid utilities

### Typography Classes (REQUIRED)
See **[design-tokens/typography.md](./design-tokens/typography.md)** for complete scale.

```css
.font-heading          /* Playfair Display serif - elegant headings */
.font-body             /* Inter sans-serif - readable body text */
.font-title            /* Righteous - main hero titles */
```

### Color Classes (REQUIRED)
See **[design-tokens/colors.md](./design-tokens/colors.md)** for complete palette.

```css
.bg-gradient-pink-purple-blue    /* Primary CTA gradient */
.text-gradient-pink-purple-blue  /* Hero title gradients */
```

---

## 8. 📦 Mock Data System

### Overview

The project uses a comprehensive centralized mock data system that serves as the **Single source of truth** for all application content.

**📖 Complete Documentation:** See **[Data System Documentation](../data/README.md)** for comprehensive guide

### Data Organization

```
/data/
├── mock/                          # Centralized mock data
│   ├── images/                    # Hero images
│   ├── pages/                     # Page content
│   ├── portfolio/                 # Portfolio entries
│   ├── blog/                      # Blog posts
│   └── ui/                        # UI elements
```

---

## 9. 🔍 Quality Standards

### Pre-Deployment Checklist
- [ ] TypeScript: No compilation errors (`npm run type-check`)
- [ ] Build Verification: Run `npm run verify` (checks links & env)
- [ ] Lighthouse: 95+ performance, 100 accessibility
- [ ] Responsive: Mobile, tablet, desktop tested
- [ ] Accessibility: Keyboard navigation and screen reader tested
- [ ] Cross-Browser: Chrome, Firefox, Safari, Edge compatibility

---

## 10. 📖 Additional Documentation

### Component-Specific Guidelines
Before using any component, read its specific guideline file:
- **[Logo](./components/Logo.md)** - Brand logo usage and responsive behavior
- **[ScrollDownArrow](./components/ScrollDownArrow.md)** - Animated scroll indicator
- **[ScrollToTop](./components/ScrollToTop.md)** - Floating scroll button
- **[LayoutSwitcher](./components/LayoutSwitcher.md)** - Grid/list view toggle

---

## 11. 🚀 Future Enhancements

### Current Foundation (Complete)
- ✅ CSS system with fluid typography and variable fonts
- ✅ Centralized mock data system with blog, portfolio, videos, podcasts
- ✅ Full accessibility compliance (WCAG 2.1 AA)
- ✅ PWA Implementation
- ✅ Developer Tools Hub (23 sub-tools for design system inspection)
- ✅ Analytics Dashboard (localStorage-based content tracking)
- ✅ Global search system with ArchiveFilters
- ✅ FAQ system with Schema.org structured data
- ✅ Stickers Gallery (26 entries)

---

## 12. 🧹 Code Quality Standards

### Console Logging Policy

**Strict Rule:** No `console.log`, `console.warn`, or `console.error` calls are allowed in production code unless wrapped in a development environment check.

```tsx
if (import.meta.env.DEV) {
  console.log('🐞 Debug info:', data);
}
```

### Error Handling
- **Uncaught Promises:** All async operations must have `try/catch` blocks or `.catch()` handlers.
- **Global Errors:** The `ErrorBoundary` component handles React lifecycle errors.

---

**Last Updated:** February 2026
**Maintained by:** Ash Shaw Portfolio Team

**Need Help?**
- Component not working? → Check **[overview-components.md](./overview-components.md)**
- Styling issues? → Review **[design-tokens/](./design-tokens/)** files