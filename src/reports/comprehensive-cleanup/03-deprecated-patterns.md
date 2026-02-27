# Audit 3: Deprecated Patterns & Code Quality

**Date:** February 25, 2026
**Prompt:** [orchestrator.md](../../prompts/comprehensive-cleanup/orchestrator.md)
**Guidelines:** [Guidelines.md - Bundler Rules](../../guidelines/Guidelines.md), [css-architecture.md](../../guidelines/css-architecture.md)

---

## Findings

### `useContentful` Imports (5 files - MIGRATE)

All must be changed to import from `useContent` instead:

| File | Current Import | Required Change |
|---|---|---|
| `/components/sections/BlogPreviewSection.tsx:13` | `import { useBlogPosts } from '../../hooks/useContentful'` | Change to `useContent` |
| `/components/pages/home/HomePage.tsx:18` | `import { useHomepageContent } from '../../../hooks/useContentful'` | Change to `useContent` |
| `/components/pages/about/AboutPage.tsx:23` | `import { useAboutPageContent } from '../../../hooks/useContentful'` | Change to `useContent` |
| `/components/pages/blog/BlogPage.tsx:13` | `import { useBlogPosts } from '../../../hooks/useContentful'` | Change to `useContent` |
| `/components/pages/blog/BlogPostPage.tsx:13` | `import { useBlogPost } from '../../../hooks/useContentful'` | Change to `useContent` |

### `import.meta.env` Usage

**Status: RESOLVED.** All active `import.meta.env` calls have been removed. Only comment references remain (e.g., `// Dev logging removed -- import.meta.env.DEV crashes this bundler`). These comments are informational and harmless.

**Files with comments only (no action needed):** App.tsx, PortfolioImage.tsx, ScrollToTop.tsx, OptimizedImage.tsx, InstagramFeed.tsx, Footer.tsx, ErrorBoundary.tsx, TypeformEmbed.tsx, PWAInstallPrompt.tsx, EbookPage.tsx, IconLibraryPage.tsx, ComponentApiPage.tsx

### Inline Styles (21+ instances across 11 files)

Most inline styles found are **CSS custom property injection** (`style={{ '--var-name': value }}`), which is an acceptable pattern for dynamic CSS variable animation. These are NOT violations of the BEM-only rule.

**Acceptable (CSS custom properties for animation/dynamic values):**
- AboutDropdown.tsx (`--node-index`)
- PortfolioMegaMenu.tsx (`--col-index`, `--item-index`)
- BlogMegaMenu.tsx (`--col-index`, `--item-index`)
- WhySection.tsx (`--slide-index`)
- ResponsiveGridSlider.tsx (`translateX` for slider)
- UVMakeupSection.tsx (`translateX` for slider)
- EbookPage.tsx (`translateX` for swipe)

**Potential violations (dynamic background images):**
- PortfolioCard.tsx:192 - `backgroundImage: url(...)` (dynamic, may need CSS class alternative)
- SliderCard.tsx:257 - `backgroundImage: url(...)` (dynamic, may need CSS class alternative)
- SectionCard.tsx:123 - `borderColor` from theme variable
- HistoryPage.tsx:34 - `backgroundImage: radial-gradient(...)` (complex dynamic gradient)

**Action:** Dynamic background images and transforms are acceptable exceptions when the value must be computed at runtime. Document as allowed patterns in guidelines.

### Console Logging

**Status: COMPLIANT.** Only `console.error` calls found in `/components/common/ErrorBoundary.tsx`, all gated behind `_ebIsDev` (hardcoded to `false` in production). No unguarded console calls found.

---

## Summary
- **Critical:** 5 useContentful imports to migrate
- **Resolved:** import.meta.env (comments only)
- **Acceptable:** Inline styles for CSS custom properties and dynamic values
- **Compliant:** Console logging policy
