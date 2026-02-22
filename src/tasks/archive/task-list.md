# Ash Shaw Portfolio - Task List & Expansion Plan

**Version:** 5.1.0
**Created:** February 2026
**Last Audit:** February 20, 2026
**Purpose:** Structured expansion plan for templates, components, routing, and design system

### Audit Changelog (v5.1.0)
- Corrected 3 CSS file claims (Tasks 24, 27, 28): components reuse shared CSS files, not dedicated ones
- Corrected 4 mock data file claims (Tasks 20.2, 24, 27, 28): data defined inline in components or reused from existing files
- Corrected Task 9.5: standalone `css-efficiency-plan.md` was never created; planned items were implemented directly
- Fixed component filename: `DocsGeneratorPage` → `DocumentationGeneratorPage` (Task 24)
- Fixed component filename: `VisualRegressionPage` → `VisualRegressionTesterPage` (Task 27)

## Progress: 36/36 sections complete (core work done; stretch items deferred)

## Priority Legend

| Priority | Label | Meaning |
|----------|-------|---------|
| **P0** | Blocker | Must be done first; other tasks depend on it |
| **P1** | High | Core deliverable; unlocks downstream work |
| **P2** | Medium | Important but not blocking other tasks |
| **P3** | Low | Enhancement / polish; no dependencies |
| **P4** | Deferred | Nice-to-have; future enhancement |

---

## Table of Contents

1. [Global Search System](#1-global-search-system)
2. [Reusable Archive Filters Component](#2-reusable-archive-filters-component)
3. [Portfolio Taxonomy Routes](#3-portfolio-taxonomy-routes)
4. [Blog Taxonomy Routes](#4-blog-taxonomy-routes)
5. [Videos Content Type Expansion](#5-videos-content-type-expansion)
6. [Podcasts Content Type](#6-podcasts-content-type)
7. [FAQ System Expansion](#7-faq-system-expansion)
8. [Style Guide Expansion](#8-style-guide-expansion)
9. [Guidelines Documentation Updates](#9-guidelines-documentation-updates)
10. [Shadow Token System](#10-shadow-token-system)
11. [Tailwind Removal Audit](#11-tailwind-removal-audit)
12. [Document Title Standardisation](#12-document-title-standardisation)
13. [FAQ Sticker Graphics](#13-faq-sticker-graphics)
14. [FAQ Aggregate Page](#14-faq-aggregate-page)
15. [Feedback Page (Testimonials)](#15-feedback-page-testimonials)
16. [Image Optimisation System](#16-image-optimisation-system)
17. [Future Enhancements](#17-future-enhancements)
18. [async_hooks Runtime Error Fix](#18-async_hooks-runtime-error-fix)
19. [Search Results Page Polish](#19-search-results-page-polish)
20. [Developer Tools Hub Expansion](#20-developer-tools-hub-expansion)
21. [Design Tokens Reference](#21-design-tokens-reference)
22. [Design System Playground](#22-design-system-playground)
23. [Component Showcase](#23-component-showcase)
24. [Documentation Generator](#24-documentation-generator)
25. [Snippet Generator](#25-snippet-generator)
26. [Code Quality Dashboard](#26-code-quality-dashboard)
27. [Visual Regression Tester](#27-visual-regression-tester)
28. [Integration Tester](#28-integration-tester)
29. [Component API Reference](#29-component-api-reference)
30. [Icon Library](#30-icon-library)
31. [Deployment Readiness](#31-deployment-readiness)
32. [Analytics Dashboard](#32-analytics-dashboard)
33. [Centralised SEO System](#33-centralised-seo-system)
34. [Schema.org Structured Data Optimisation](#34-schemaorg-structured-data-optimisation)
35. [Breadcrumbs Consistency Audit](#35-breadcrumbs-consistency-audit)
36. [Sitemap & Dev-Tools Page Accuracy](#36-sitemap--dev-tools-page-accuracy)

---

## Critical Rules (Apply to ALL Tasks)

- **NO Tailwind CSS** - Delete all Tailwind utilities when found; replace with BEM classes in `/styles/globals.css` or block CSS files
- **NO inline styles** - except truly dynamic data-driven values (e.g., `style={{ width: `${progress}%` }}`)
- **NO margin for spacing** - use `gap` (blockGap) on flex/grid parents always
- **NO hardcoded content** - all text, images, config from `/data/mock/`
- **Light + Dark mode** - every new element must have `.dark` variant styles
- **Neon interactions** - all interactive elements must consider: neon glow hover, pulse animations, gradient borders, focus ring with neon pink glow
- **Preset shadows** - use `--wp--preset--shadow--*` tokens (see Task 10 for definition)
- **Fluid spacing** - use `--wp--preset--spacing--*` tokens on all parent content sections
- **`console` calls** - wrap in `if (import.meta.env.DEV)` guard
- **Accessibility** - WCAG 2.1 AA, keyboard nav, ARIA labels, `prefers-reduced-motion` support

---

## 1. Global Search System

- [x] **COMPLETE** `P1`

### 1.1 Search in Header

**Prompt:** Add a global search form to the site header that searches across all content types (pages, blog posts, portfolio entries, videos, podcasts). The search input should live in the header navigation bar, expanding on click/focus with a neon glow animation. On mobile, it should expand to full-width below the header. Submitting a search query navigates to `/search?q={query}`. All styling must use BEM classes in a new `/styles/blocks/search.css` file. The search input must have neon border-glow on focus, a subtle pulse animation on idle, and a gradient underline in dark mode. No Tailwind. No inline styles. Import all label text from `/data/mock/ui/search.ts`.

- [x] Create `/data/mock/ui/search.ts` with all search UI strings (placeholder, labels, no results message, filter labels)
- [x] Create `/data/types/search.ts` with `SearchResult`, `SearchFilters`, `SearchState` interfaces
- [x] Search input built inline in `/components/common/Header.tsx` - positioned in nav bar, expandable on focus, neon glow, clear button
- [x] Create `/styles/blocks/search.css` with full BEM styles:
  - `.search-input`, `.search-input--expanded`, `.search-input__icon`, `.search-input__clear`
  - `.search-input--focused` with neon border glow (`box-shadow: 0 0 20px var(--wp--preset--color--neon-pink)`)
  - Dark mode variants for all states
  - Mobile responsive: full-width below header at `<768px`
- [x] Add keyboard shortcut: `Ctrl+K` / `Cmd+K` opens search, `Escape` closes
- [x] Screen reader: `role="search"`, `aria-label="Search all content"`, live region for result count
- [x] Removed `Ctrl+K` shortcut hint text from search input UI (v2.0.0)
- [x] Removed `.search-input__hint` CSS rules from `search.css` (v2.0.0)

> **Note:** Search input is built inline in Header.tsx rather than as a separate `SearchInput.tsx` component. This is acceptable because the search logic is tightly coupled with header navigation state. If reuse is needed elsewhere, extract to `/components/ui/SearchInput.tsx`.

### 1.2 Search Results Page

**Prompt:** Create a `/search` route with a `SearchResultsPage` component that displays results from all content types. The page header shows the search keyword and total result count. Results are grouped by content type (Blog, Portfolio, Videos, Podcasts, Pages) with type-specific card rendering. Each result card has a neon hover glow, gradient border on hover in dark mode, and a subtle float animation. The page must use `gap` (blockGap) between all sections, never margin. All content strings from mock data. BEM-only styling.

- [x] Create `/components/pages/search/SearchResultsPage.tsx`
- [x] Create `/utils/searchService.ts` - centralised search function that queries all mock data sources:
  - Blog posts (title, excerpt, content, tags, category)
  - Portfolio entries (title, description, tags, category)
  - Videos (title, description, category)
  - Podcasts (title, description, category)
  - Pages (static page titles and descriptions)
- [x] Add route `{ path: 'search', Component: SearchResultsPage }` to `/routes.ts`
- [x] Display: search keyword in header, total result count label (e.g., "12 results for 'neon'")
- [x] Group results by content type with collapsible sections
- [x] Each result card renders differently per type:
  - Blog: image thumbnail, title, excerpt, date, category badge
  - Portfolio: image thumbnail, title, category, tag pills
  - Video: thumbnail with play overlay, title, duration
  - Podcast: waveform icon, title, duration, episode number
  - Page: icon, page title, description
- [x] Add to `/styles/blocks/search.css`:
  - `.search-results`, `.search-results__header`, `.search-results__keyword`
  - `.search-results__group`, `.search-results__group-title`
  - `.search-result-card`, `.search-result-card--blog`, `.search-result-card--portfolio`, etc.
  - Neon hover glow on cards, gradient border in dark mode
  - All dark mode `.dark` variants
- [x] Empty state with neon-styled illustration and suggestion chips
- [x] Loading skeleton with pulse animation

### 1.3 Search Results Filters

**Prompt:** The search results page should include filters that change dynamically depending on what content types appear in the results. Use the reusable `ArchiveFilters` component (Task 2). Filters include: content type toggle (Blog, Portfolio, Videos, Podcasts), sort by (Relevance, Most Recent, Popular), and content-type-specific sub-filters (e.g., blog categories when blog results are shown). Filters must use the compact chip style (8px vertical / 16px horizontal padding). No Tailwind. BEM only.

- [x] Integrate `ArchiveFilters` component into `SearchResultsPage`
- [x] Content type toggle chips: Blog, Portfolio, Videos, Podcasts, Pages
- [x] Sort options: Relevance (default), Most Recent, Popular (by views/likes), Featured
- [x] Result count updates live as filters change
- [x] Dynamic sub-filters based on active content type:
  - Blog selected: show blog category chips
  - Portfolio selected: show portfolio category chips
  - Videos selected: show video category chips
  - Podcasts selected: show podcast category chips
- [x] URL query params sync: `?q=neon&type=blog&sort=recent&category=tutorials`
- [x] Mobile: full-screen filter overlay (via ArchiveFilters mobile overlay)

---

## 2. Reusable Archive Filters Component

- [x] **COMPLETE** `P1`

### 2.1 ArchiveFilters Component

**Prompt:** Extract the current blog page category filtering into a reusable `ArchiveFilters` component that can be dropped into any archive page (Blog, Portfolio, Videos, Podcasts, Search). The component accepts props for: content type, available categories, available tags, active filters, sort options, and result count. The category chips should use compact padding (8px top/bottom, 16px left/right). The active filters summary should appear in a 25-30% width column to the right of the category chips on desktop. Multiple categories can be selected simultaneously. All styling via BEM in a dedicated CSS file. Neon glow on active chips, gradient border on hover. No Tailwind.

- [x] Create `/components/ui/ArchiveFilters.tsx` with props:
  ```typescript
  interface ArchiveFiltersProps {
    contentType: string;
    categories: FilterCategory[];
    activeCategories: string[];
    sortBy: string;
    sortOptions: SortOption[];
    resultCount: number;
    onCategoryToggle: (slug: string) => void;
    onSortChange: (sortBy: string) => void;
    onClearAll: () => void;
  }
  ```
- [x] Create `/styles/blocks/archive-filters.css` with BEM:
  - `.archive-filters` - main container, flex/grid layout
  - `.archive-filters__categories` - 70-75% width column
  - `.archive-filters__active-summary` - 25-30% width column on right
  - `.archive-filters__chip` - compact: `padding: 8px 16px`
  - `.archive-filters__chip--active` - neon glow, gradient background
  - `.archive-filters__chip:hover` - neon border glow effect
  - `.archive-filters__result-count` - label with number: "12 results"
  - `.archive-filters__sort` - sort dropdown/chip group
  - `.archive-filters__clear` - clear all button with neon ghost style
  - All `.dark` variants
- [x] Create `/data/mock/ui/filters.ts` with shared filter labels

### 2.2 Compact Chip Styling

**Prompt:** Reduce the filter chip padding from current values to 8px vertical / 16px horizontal for a more compact, modern look. Chips should support multi-select (multiple active at once) with neon glow stacking. Active chips get a filled neon background with white text. Inactive chips have a ghost/outline style with neon border on hover.

- [x] Update chip padding: `padding: 8px 16px` (confirmed in `archive-filters.css` line 56)
- [x] Multi-select support: clicking a chip toggles it without deselecting others
- [x] Active chip style: filled neon purple background, white text, glow shadow
- [x] Inactive chip: transparent background, neutral border, neon border on hover
- [x] Chip count badge (optional): small superscript number showing items in category
- [x] Transition: smooth 200ms scale + glow on toggle

### 2.3 Active Filters Summary Column

**Prompt:** Create an active filters summary that appears in a 25-30% width column to the right of the category chips on desktop. It shows currently active filters as removable pills, with an "X" to remove each and a "Clear All" link at the bottom. On mobile (<768px), it collapses to a horizontal scrollable row above the results. Neon styling on pills, ghost button for Clear All.

- [x] `.archive-filters__active-summary` - 25-30% column on desktop (grid or flex)
- [x] Active filter pills: each shows filter name + "X" remove button
- [x] "Clear All" ghost button with neon hover glow at bottom of column
- [x] Mobile: horizontal scrollable row, sticky below header
- [x] Animation: pills animate in/out with scale + fade
- [x] Dark mode: pills have frosted glass background with neon text

### 2.4 Sort Options

**Prompt:** Add sort options to the archive filters: Popular (by views/likes tracking), Most Recent (by date), Featured (featured flag first), A-Z (alphabetical). Popular sort uses localStorage-based view/like counts. Display as a compact dropdown or pill group.

- [x] Sort options: `popular`, `recent`, `featured`, `alphabetical`
- [x] Popular: sort by `views` count (from localStorage tracking) + `likes`
- [x] Most Recent: sort by `publishedDate` or `publishedAt` descending
- [x] Featured: items with `featured: true` first, then by date
- [x] A-Z: alphabetical by title
- [x] Render as pill group on desktop, dropdown on mobile
- [x] Track page views in localStorage per content item

### 2.5 Result Count Label

**Prompt:** Add a "Number of results: X" label that displays the filtered result count. Positioned above the content grid, below the filters. Updates dynamically as filters change with a subtle count animation.

- [x] Label: "Number of results: {count}" using mock data string from `/data/mock/ui/filters.ts`
- [x] Position: between filters and content grid
- [x] Neon-coloured number in dark mode
- [x] Animate count changes (number ticks up/down) — `useAnimatedCount` hook with ease-out cubic rAF, `countPop` keyframe, `prefers-reduced-motion` support
- [x] Include active filter context: "12 results in Tutorials" — `filterContext` string from `activeCategoryNames`, italic `.archive-filters__result-context` styling

### 2.6 Mobile Filter Overlay

**Prompt:** Create a full-screen mobile filter interface that launches from a floating "Filter" button on mobile devices. The overlay contains all filter chips in a tap-friendly grid layout, sort options, and active filter pills. Includes a "Show X Results" button at the bottom to apply and close. Neon gradient header bar, frosted glass background in dark mode.

- [x] Floating filter button: fixed bottom-right on mobile, neon gradient background, pulse animation
- [x] Full-screen overlay: slides up from bottom (drawer pattern)
- [x] Filter chips: larger touch targets (min 44px height), grid layout
- [x] Sort options: radio-style pills
- [x] Active filters: shown at top with remove buttons
- [x] "Show {count} Results" CTA button at bottom, neon gradient
- [x] Close: X button or "Show Results" button
- [x] Register with `ModalContext` for proper modal management
- [x] Keyboard: `Escape` closes, focus trap inside overlay

---

## 3. Portfolio Taxonomy Routes

- [x] **COMPLETE** `P2`

### 3.1 Route Structure

**Prompt:** Add portfolio taxonomy routes so categories and tags have dedicated archive pages. Routes: `/portfolio` (main), `/portfolio/:slug` (single item), `/portfolio/category/:slug` (category archive), `/portfolio/tag/:slug` (tag archive). Each taxonomy archive uses the `ArchiveFilters` component and displays filtered portfolio cards. The sitemap page must link to all portfolio categories and tags that have content. All styling BEM-only, all content from mock data, light + dark mode.

- [x] Add routes to `/routes.ts`:
  - `{ path: 'portfolio/category/:slug', Component: PortfolioCategoryPage }`
  - `{ path: 'portfolio/tag/:slug', Component: PortfolioTagPage }`
- [x] Create `/components/pages/portfolio/PortfolioCategoryPage.tsx`
  - Header with category name + description
  - `ArchiveFilters` with portfolio categories, current category pre-selected
  - Portfolio card grid (reuse existing `PortfolioCard`)
  - Pagination support
- [x] Create `/components/pages/portfolio/PortfolioTagPage.tsx`
  - Header with tag name
  - `ArchiveFilters` with portfolio tags
  - Portfolio card grid filtered by tag
  - Pagination support
- [x] Create `/data/mock/portfolio/categories.ts` - define portfolio categories as structured data:
  ```typescript
  { id: string; name: string; slug: string; description: string; count: number; neonColor: string }
  ```
- [x] Create `/data/mock/portfolio/tags.ts` - define portfolio tags as structured data
- [x] Update `/components/pages/SitemapPage.tsx`:
  - Portfolio Categories section: link each to `/portfolio/category/:slug`
  - Portfolio Tags section: link each to `/portfolio/tag/:slug`
  - Only show categories/tags that have content
- [x] FaqSection added to PortfolioCategoryPage and PortfolioTagPage

### 3.2 Portfolio Category Data

**Prompt:** Create structured portfolio category and tag data files with all necessary fields. Categories derived from existing `PortfolioEntry.category` values. Tags derived from existing `PortfolioEntry.tags` arrays. Each has an id, name, slug, description, count (computed from actual data), and optional neon color.

- [x] Create `/data/mock/portfolio/categories.ts` with `PortfolioCategoryData` interface and data
- [x] Create `/data/mock/portfolio/tags.ts` with `PortfolioTagData` interface and data
- [x] Update `/utils/contentCounts.ts` to export portfolio tag counts
- [x] Export from `/data/mock/portfolio/index.ts`

> **Note:** `PortfolioCategoryData` and `PortfolioTagData` interfaces have been migrated to `/data/types/portfolio.ts` as of v2.0.0. Data files import from the types module.

---

## 4. Blog Taxonomy Routes

- [x] **COMPLETE** `P2`

### 4.1 Route Structure

**Prompt:** Add blog taxonomy routes so categories and tags have dedicated archive pages. Routes: `/blog` (main), `/blog/:slug` (single post), `/blog/category/:slug` (category archive), `/blog/tag/:slug` (tag archive). Each taxonomy archive uses the `ArchiveFilters` component and displays filtered blog cards. The sitemap page must link to all blog categories and tags that have content. BEM-only styling, mock data content, light + dark mode.

- [x] Add routes to `/routes.ts`:
  - `{ path: 'blog/category/:slug', Component: BlogCategoryPage }`
  - `{ path: 'blog/tag/:slug', Component: BlogTagPage }`
- [x] Create `/components/pages/blog/BlogCategoryPage.tsx`
  - Header with category name + description + post count
  - `ArchiveFilters` with blog categories, current category pre-selected
  - Blog card grid (reuse existing blog card markup)
  - Pagination
- [x] Create `/components/pages/blog/BlogTagPage.tsx`
  - Header with tag name
  - `ArchiveFilters` with blog tags
  - Blog card grid filtered by tag
  - Pagination
- [x] Create `/data/mock/blog/tags.ts` - define blog tags as structured data
- [x] Create `/data/mock/blog/categories.ts` - define blog categories as structured data
- [x] Update `/components/pages/SitemapPage.tsx`:
  - Blog Categories section: link each to `/blog/category/:slug`
  - Blog Tags section: link each to `/blog/tag/:slug`
  - Only show categories/tags that have content
- [x] FaqSection added to BlogCategoryPage and BlogTagPage

---

## 5. Videos Content Type Expansion

- [x] **COMPLETE** `P2`

### 5.1 Video Data Model Expansion

**Prompt:** Expand the video data model and mock data to support a full content type with categories, tags, single video template, archive pagination, and rich metadata. Add fields for: tags, slug, content/description (long-form), views, likes, featured image, episode number, series name. Create a proper categories and tags data structure. Start small with 2-3 categories and a few tags. All data in `/data/mock/`. BEM styling, neon interactions, light + dark mode.

- [x] Create `/data/types/videos.ts` with expanded `Video` interface:
  ```typescript
  interface Video {
    id: string; slug: string; title: string; description: string;
    content: string; thumbnailUrl: string; videoUrl: string;
    platform: 'youtube' | 'vimeo'; duration: string;
    category: string; tags: string[]; featured: boolean;
    publishedAt: string; views?: number; likes?: number;
    episodeNumber?: number; seriesName?: string;
  }
  ```
- [x] Add `VideoCategory` and `VideoTag` interfaces
- [x] Video mock data in `/data/mock/videos.ts` (single file with entries, categories, tags)
- [x] Create `/data/mock/ui/videos.ts` with video page UI strings

> **Note:** Video data has been restructured from a single file into `/data/mock/videos/` directory (entries.ts, categories.ts, tags.ts, index.ts barrel) as of v3.0.0. All consumer imports resolve unchanged via the barrel export.

### 5.2 Video Routes

**Prompt:** Add full video taxonomy routing: `/videos` (archive), `/video/:slug` (single), `/videos/category/:slug` (category archive), `/videos/tag/:slug` (tag archive). The archive supports pagination starting at page 1. Each page uses `ArchiveFilters`. The sitemap links to all video taxonomy pages.

- [x] Add routes to `/routes.ts`:
  - `{ path: 'video/:slug', Component: VideoDetailPage }`
  - `{ path: 'videos/category/:slug', Component: VideoCategoryPage }`
  - `{ path: 'videos/tag/:slug', Component: VideoTagPage }`
- [x] Create `/components/pages/videos/VideoDetailPage.tsx` - single video template:
  - Embedded video player (YouTube/Vimeo)
  - Title, description, long-form content below
  - Category badge (clickable to category archive), tag pills
  - View count, like button (localStorage)
  - Share component
  - Related videos section
- [x] Create `/components/pages/videos/VideoCategoryPage.tsx`
- [x] Create `/components/pages/videos/VideoTagPage.tsx`
- [x] Add pagination to video archive
- [x] Create `/styles/blocks/videos-page.css` with BEM styles:
  - `.video-detail`, `.video-detail__player`, `.video-detail__content`
  - `.video-detail__meta`, `.video-detail__tags`
  - Neon glow around video player frame in dark mode
  - All `.dark` variants
- [x] Update `/components/pages/SitemapPage.tsx` with video categories + tags
- [x] FaqSection added to VideosPage and VideoDetailPage

### 5.3 Single Video Template - "Electric Cine" Theme

**Prompt:** Create a single video post template at `/video/:slug` that displays the full video with rich content. Use the "Electric Cine" neon theme for markdown styling (electric blue/pink filmstrip vibes).

- [x] Video player with neon glow border (`box-shadow` in dark mode)
- [x] Meta bar: date, duration, views counter, category badge
- [x] Content area: markdown-to-HTML rendering (reuse `simpleMarkdown`)
- [x] `.video-rich-text` CSS theme in `videos-page.css` - "Electric Cine" palette
- [x] Engagement: like button (same pattern as blog)
- [x] Tags + Share section at bottom (reuses `.tags-share-container` and `.tag-badge` patterns)
- [x] Related videos: card grid at bottom
- [x] Back to Videos navigation button
- [x] Clickable category chip at top linking to `/videos/category/:slug`

---

## 6. Podcasts Content Type

- [x] **COMPLETE** `P3`

### 6.1 Podcast Data Model

**Prompt:** Create a new Podcasts content type with data model, mock data, and types. Start with 1 placeholder podcast that is a short introduction to the site. Fields include: id, slug, title, description, content (show notes), audioUrl, duration, episodeNumber, seasonNumber, category, tags, publishedAt, featured, coverImage, transcript. Create categories data. All data in `/data/mock/podcasts/`. Add a "Podcasts" menu item to the footer only (not main nav yet).

- [x] Create `/data/types/podcast.ts` with `Podcast` and `PodcastCategory` interfaces
- [x] Create `/data/mock/podcasts/index.ts` - barrel export
- [x] Create `/data/mock/podcasts/episodes.ts` - intro episode placeholder
- [x] Create `/data/mock/podcasts/categories.ts` - initial categories
- [x] Create `/data/mock/podcasts/tags.ts` - initial tags with `PodcastTag` interface
- [x] Create `/data/mock/ui/podcasts.ts` - podcast UI strings
- [x] Add "Podcasts" link to footer navigation in `/components/common/Footer.tsx`

### 6.2 Podcast Routes

**Prompt:** Add podcast routing: `/podcasts` (archive), `/podcast/:slug` (single episode), `/podcasts/category/:slug` (category archive), `/podcasts/tag/:slug` (tag archive). The archive supports pagination starting at page 1. Use `ArchiveFilters`. Add to sitemap.

- [x] Add routes to `/routes.ts`:
  - `{ path: 'podcasts', Component: PodcastsPage }`
  - `{ path: 'podcast/:slug', Component: PodcastDetailPage }`
  - `{ path: 'podcasts/category/:slug', Component: PodcastCategoryPage }`
  - `{ path: 'podcasts/tag/:slug', Component: PodcastTagPage }`
- [x] Create `/components/pages/podcasts/PodcastsPage.tsx` - archive listing with ArchiveFilters
- [x] Create `/components/pages/podcasts/PodcastDetailPage.tsx` - single episode template
- [x] Create `/components/pages/podcasts/PodcastCategoryPage.tsx`
- [x] Create `/components/pages/podcasts/PodcastTagPage.tsx`
- [x] Create `/styles/blocks/podcasts-page.css` with full BEM styles
- [x] Update sitemap with podcast categories and tags
- [x] FaqSection added to PodcastsPage and PodcastDetailPage

### 6.3 Single Podcast Template - "Soundwave Neon" Theme

**Prompt:** Create a single podcast episode template using the "Soundwave Neon" theme for rich text (warm orange/cyan palette with audio vibes).

- [x] Cover image with neon glow
- [x] Episode info: number, season, date, duration
- [x] Show notes (markdown rendered via `simpleMarkdown`)
- [x] `.podcast-rich-text` CSS theme in `podcasts-page.css` - "Soundwave Neon" palette
- [x] Category badge at top (clickable to `/podcasts/category/:slug`)
- [x] Tags + Share section at bottom (reuses `.tags-share-container` and `.tag-badge` patterns)
- [x] Related episodes section
- [x] Back to Podcasts navigation button

---

## 7. FAQ System Expansion

- [x] **COMPLETE** `P3`

### 7.1 Page-Specific FAQs

**Prompt:** Expand the FAQ system so every page, post, portfolio item, and video can have 2-3 contextual FAQs displayed in an accordion section near the bottom. Create a reusable `FaqSection` component that accepts a `pageId` prop and renders page-specific FAQs with neon-styled accordion interactions.

- [x] Enhanced `/components/sections/FaqSection.tsx` with `pageId` prop support (v2.0.0)
- [x] Expand `/data/mock/sections/faq.ts` with page-specific FAQ groups via `getFaqsForPage()`
- [x] Add FAQs for each page:
  - **Home** (2-3): "What is this site?", "Who is Ash Shaw?", "How can I get in touch?"
  - **About** (2-3): "Where are you based?", "What festivals do you attend?", "Do you do commissions?"
  - **Portfolio** (2-3): "Can I use your images?", "What camera do you use?", "How do I get featured?"
  - **Blog** (2-3): "How often do you post?", "Can I guest post?", "Do you accept product reviews?"
  - **Videos** (2-3): "What editing software do you use?", "Can I collaborate?", "Where can I watch more?"
  - **Podcasts** (2-3): "How do I subscribe?", "Can I be a guest?", "What topics do you cover?"
  - **Contact** (2-3): "What's the best way to reach you?", "Response time?", "Collaborations?"
- [x] Add `FaqSection` to bottom of each page component (above footer, below main content)
  - Confirmed in: HomePage, AboutPage, BlogPage, BlogCategoryPage, BlogTagPage, PortfolioMainPage, PortfolioCategoryPage, PortfolioTagPage, ContactPage, VideosPage, PodcastsPage, PodcastDetailPage
- [x] Accordion animation: smooth height transition via Motion, rotate chevron icon
- [x] Dark mode: neon accent colour on open state, subtle glow on hover
- [x] All FAQ content reflects personal art project identity (he/him, Berlin, festivals, non-commercial)

### 7.2 Single Post/Portfolio Item FAQs

**Prompt:** Allow individual blog posts and portfolio items to have their own specific FAQs defined in their frontmatter/mock data. Update the `FaqSection` to accept a direct array of FAQ items in addition to a `pageId`.

- [x] Update `FaqSection` to accept `items` prop (array of Question objects)
- [x] Update `BlogPost` and `PortfolioEntry` types to include optional `faqs` array
- [x] Render `FaqSection` with `items={entry.faqs}` in `BlogPostPage` and `PortfolioDetailPage` if data exists
- [x] Add sample FAQs to at least 1 blog post and 1 portfolio item for testing

---

## 8. Style Guide Expansion

- [x] **COMPLETE** `P3`

**Prompt:** Create a `/style-guide` route that visually documents all design tokens (colors, typography, spacing, shadows, radii) and core components (buttons, cards, inputs). This serves as a living documentation for the design system.

- [x] Create `/components/pages/StyleGuidePage.tsx`
- [x] Add route `/style-guide`
- [x] Sections:
  - **Colors:** Swatches for neon palette, gradients, and semantic roles (light/dark aware)
  - **Typography:** Headings (H1-H6), body text, diverse font weights
  - **Spacing:** Visual bars showing fluid spacing steps
  - **Shadows:** Card comparisons with different shadow depths
  - **Buttons:** Primary, secondary, ghost, icon buttons
  - **Cards:** Portfolio, blog, and section card previews
  - **Inputs:** Search bar, form fields
- [x] Use `ArchiveFilters` style filtering to toggle sections of the style guide
- [x] Styling: `style-guide-page.css`

---

## 9. Guidelines Documentation Updates

- [x] **COMPLETE** `P4`

### 9.1 Search System Documentation

**Prompt:** Create `/guidelines/search-system.md` documenting the global search architecture, weighting, data sources, and component hierarchy.

- [x] Created `/guidelines/search-system.md` (v1.0.0)
- [x] Documented `searchService` logic and fuzzy matching
- [x] Documented `ArchiveFilters` integration

### 9.2 Event System Documentation

**Prompt:** Create `/guidelines/events-system.md` documenting the Events data model and countdown logic.

- [x] Created `/guidelines/events-system.md` (v1.0.0)

---

## 10. Shadow Token System

- [x] **COMPLETE** `P0`

**Prompt:** Define a semantic shadow system in `globals.css` using `--wp--preset--shadow--*` tokens. Replace all arbitrary `box-shadow` values in the codebase.

- [x] Defined tokens: `--sm`, `--md`, `--lg`, `--xl`, `--2xl`, `--inner`, `--neon-pink`, `--neon-blue`, `--neon-purple`, `--card`, `--card-hover`
- [x] Updated `globals.css` with light/dark variants
- [x] Audited and updated components:
  - `portfolio-card.css`
  - `blog-card.css`
  - `header.css`
  - `footer.css`
  - `search.css`

---

## 11. Tailwind Removal Audit

- [x] **COMPLETE** `P0`

**Prompt:** Scan the entire codebase for remaining Tailwind utility classes (e.g., `flex`, `p-4`, `text-center`, `md:w-1/2`) and replace them with BEM classes.

- [x] Scanned all `/components`
- [x] Scanned all `/styles`
- [x] Verified strict BEM usage in recent additions (Search, Filters, Videos)

---

## 12. Document Title Standardisation

- [x] **COMPLETE** `P4`

**Prompt:** Ensure every page updates the `document.title` to "Page Name | Ash Shaw". Create a `useDocumentTitle` hook or update the existing SEO utility.

- [x] Verified `setSEO` utility in `/utils/seo.ts`
- [x] Ensured all pages call `setSEO` on mount
- [x] Pattern: `"{Title} | Ash Shaw"`

---

## 13. FAQ Sticker Graphics

- [x] **COMPLETE** `P3`

**Prompt:** Create a set of "Sticker" graphics (CSS-only or SVG) to randomly decorate the FAQ page, giving it a playful "laptop lid" vibe.

- [x] Created `/components/pages/StickersPage.tsx` (Gallery)
- [x] Implemented 26 unique sticker designs in pure CSS/SVG
- [x] Created `getRandomSticker()` utility
- [x] Integrated into `FaqAggregatePage` background

---

## 14. FAQ Aggregate Page

- [x] **COMPLETE** `P3`

**Prompt:** Create `/faq` page that aggregates all FAQs from the system into one searchable list.

- [x] Route: `/faq`
- [x] Component: `FaqAggregatePage.tsx`
- [x] Search functionality
- [x] Grouping by category (General, Portfolio, Blog, etc.)

---

## 15. Feedback Page (Testimonials)

- [x] **COMPLETE** `P3`

**Prompt:** Create `/feedback` page to showcase testimonials.

- [x] Route: `/feedback`
- [x] Component: `FeedbackPage.tsx`
- [x] Data source: `/data/mock/testimonials/index.ts`
- [x] Grid layout with masonry-style cards

---

## 16. Image Optimisation System

**Status:** Part Complete (16.4 DONE)

- [ ] 16.1 Automated WebP Generation (Future)
- [ ] 16.2 Blur-up Placeholders (Future)
- [ ] 16.3 CLS Prevention (Future)
- [x] 16.4 `useOptimizedImage` Hook (Core implementation complete)

---

## 17. Future Enhancements

- [ ] 17.1 Newsletter Integration
- [ ] 17.2 Comment System (Jamstack)
- [ ] 17.3 Multi-language Support (i18n)

---

## 18. async_hooks Runtime Error Fix

- [x] **COMPLETE** `P0`

**Prompt:** Fix the `async_hooks` runtime error causing the app to crash.

- [x] Identified conflict with `clsx` or similar server-side libs
- [x] Cleaned up `package.json`
- [x] Verified build

---

## 19. Search Results Page Polish

- [x] **COMPLETE** `P2`

**Prompt:** Polish the search results page layout and interactions.

- [x] Tabbed interface for content types
- [x] "Did you mean?" suggestions (mock)
- [x] Breadcrumbs integration
- [x] Mobile layout refinements

---

## 20. Developer Tools Hub Expansion

- [x] **COMPLETE** `P1`

**Prompt:** Expand the `/dev-tools` section into a comprehensive hub.

- [x] Created 11 sub-tools
- [x] Created 7 specimen pages
- [x] Updated sitemap

---

## 21. Design Tokens Reference

- [x] **COMPLETE** `P1`

**Prompt:** Create a live reference for all design tokens.

- [x] Route: `/dev-tools/tokens`
- [x] Collapsible sections for colors, spacing, typography
- [x] Live swatch previews

---

## 22. Design System Playground

- [x] **COMPLETE** `P2`

**Prompt:** Create an interactive playground to test components.

- [x] Route: `/dev-tools/playground`
- [x] Live controls for props
- [x] Preview card with reset

---

## 23. Component Showcase

- [x] **COMPLETE** `P2`

**Prompt:** A gallery of all core UI components.

- [x] Route: `/dev-tools/components`
- [x] Live previews of Logo, SocialLinks, Breadcrumbs, etc.

---

## 24. Documentation Generator

- [x] **COMPLETE** `P3`

**Prompt:** Auto-generate markdown docs from component code.

- [x] Route: `/dev-tools/docs`
- [x] Parsed component props
- [x] Generated markdown preview

---

## 25. Snippet Generator

- [x] **COMPLETE** `P3`

**Prompt:** Generate VS Code snippets for components.

- [x] Route: `/dev-tools/snippets`
- [x] 5 templates available
- [x] Copy to clipboard functionality

---

## 26. Code Quality Dashboard

- [x] **COMPLETE** `P2`

**Prompt:** Visual dashboard for code health metrics.

- [x] Route: `/dev-tools/code-quality`
- [x] Live DOM size tracking
- [x] CSS file size estimates
- [x] Dependency tree viz

---

## 27. Visual Regression Tester

- [x] **COMPLETE** `P3`

**Prompt:** Manual visual regression testing tool.

- [x] Route: `/dev-tools/visual-regression`
- [x] Side-by-side comparison
- [x] Overlay mode
- [x] Theme/viewport toggles

---

## 28. Integration Tester

- [x] **COMPLETE** `P3`

**Prompt:** Run integration tests in the browser.

- [x] Route: `/dev-tools/integration`
- [x] 6 test suites
- [x] 25 individual checks
- [x] Live pass/fail reporting

---

## 29. Component API Reference

- [x] **COMPLETE** `P1`

**Prompt:** Detailed API docs for all components.

- [x] Route: `/dev-tools/api`
- [x] Sidebar navigation
- [x] Props tables
- [x] Copy import paths

---

## 30. Icon Library

- [x] **COMPLETE** `P1`

**Prompt:** Searchable browser for all icons.

- [x] Route: `/dev-tools/icons`
- [x] Searchable grid
- [x] Category groups
- [x] Size toggle

---

## 31. Deployment Readiness

- [x] **COMPLETE** `P2`

**Prompt:** Checklist for pre-deployment verification.

- [x] Route: `/dev-tools/deployment`
- [x] 5 audit categories
- [x] 26 individual checks
- [x] Score gauge

---

## 32. Analytics Dashboard

- [x] **COMPLETE** `P1`

**Prompt:** Local analytics visualization.

- [x] Route: `/dev-tools/analytics`
- [x] Live session tracking
- [x] Mock trend charts
- [x] Top content list

---

## 33. Centralised SEO System

- [x] **COMPLETE** `P0`

**Prompt:** Centralise all SEO logic into `setSEO()` utility.

- [x] Created `setSEO()`
- [x] Wired 46 pages
- [x] Added OG and Twitter Card tags

---

## 34. Schema.org Structured Data Optimisation

- [x] **COMPLETE** `P0`

**Prompt:** Implement comprehensive JSON-LD schemas.

- [x] WebSite
- [x] Person
- [x] Article
- [x] Video
- [x] Podcast
- [x] Gallery
- [x] Collection

---

## 35. Breadcrumbs Consistency Audit

- [x] **COMPLETE** `P0`

**Prompt:** Ensure `Breadcrumbs` component is used consistently across all pages.

- [x] Single source component used
- [x] 13 pages fixed
- [x] 100% coverage verified

---

## 36. Sitemap & Dev-Tools Page Accuracy

- [x] **COMPLETE** `P0`

**Prompt:** Ensure Sitemap and Dev Tools hub accurately reflect all 23 sub-tools.

- [x] SITEMAP.md rewritten
- [x] All 24 dev-tools listed
- [x] Routes verified

---

**Last Updated:** February 20, 2026
**Version:** 5.1.0
**Maintained by:** Ash Shaw Portfolio Team
