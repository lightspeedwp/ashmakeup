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

### 7.2 Single Post/Portfolio FAQs

**Prompt:** Blog posts, portfolio items, and videos should each optionally have 2-3 inline FAQs. These are defined per-item in the mock data and rendered using the same `FaqSection` component. If the item has no FAQs, the section is hidden.

- [x] Optional `faqs?: FaqItem[]` field added to `Podcast` interface
- [x] Add optional `faqs?: FaqItem[]` field to `BlogPost`, `PortfolioEntry`, `Video` interfaces
- [x] Add 2-3 FAQs to select blog posts in mock data
- [x] Add 2-3 FAQs to select portfolio entries in mock data
- [x] Add 2 FAQs to the video entry in mock data
- [x] Render `FaqSection` on single templates (blog post, portfolio detail, video detail, podcast detail) if item-level FAQs exist
- [x] Position: after tags/share section, before related content
- [x] Schema.org FAQ structured data (JSON-LD) for SEO — `/utils/faqSchema.ts` with `injectFaqSchema`/`removeFaqSchema`, integrated into `FaqSection.tsx` via `useEffect`

---

## 8. Style Guide Expansion

- [x] **COMPLETE** `P3`

### 8.1 New Style Guide Sections

**Prompt:** Expand the `/style-guide` page with additional reusable element documentation. Add sections for: all neon colour swatches with hex values and contrast ratios, typography scale with live examples, spacing scale visualisation, shadow tokens (all preset shadows), border radius tokens, gradient swatches, animation previews (all 26 keyframes), icon library subset, button variants, chip/badge variants, card variants, form elements, and the new `ArchiveFilters` component demo. Each section should be interactive where possible. BEM styling, dark mode toggle demo.

- [x] Colour Swatches section: all 8 neon colours + neutrals, with hex, CSS var name
- [x] Typography Scale section: all `--wp--preset--font-size--*` tokens rendered live
- [x] Gradient Swatches section: all 4 signature gradients rendered as bars
- [x] Icon Library section: Lucide icons subset + custom icons
- [x] Button Variants section: primary, secondary, ghost styles
- [x] Shadow Tokens section: 20 shadow tokens with live `var()` previews
- [x] Animation Previews section: 26 keyframe animations with interactive Play/Stop toggle (full codebase coverage)
- [x] Chip/Badge Variants section: filter chips (active/inactive), badges (4 variants), tag pills
- [x] Card Variants section: blog card, portfolio card, video card, podcast card, feedback card, FAQ card
- [x] Form Elements section: inputs, textareas, selects, checkboxes with neon focus styles
- [x] ArchiveFilters demo section: interactive filter component with sample data
- [x] Dark/Light mode comparison section: side-by-side theme panels with cards, buttons, chips, inputs
- [x] WCAG contrast ratios displayed for each colour swatch — Sun/Moon icons with pass/fail pill badges showing ratio + WCAG level (Fail/AA Large/AA/AAA) for vs-white and vs-Atomic-Black

---

## 9. Guidelines Documentation Updates

- [x] **COMPLETE** `P4`

### 9.1 Data Model Documentation

- [x] Create `/guidelines/data-models.md` with:
  - Complete interface documentation for all content types
  - Field-by-field descriptions with types and constraints
  - Relationships diagram (BlogPost -> BlogCategory, tags)
  - Mock data file locations and barrel exports
  - How to add new content items
  - How to add new content types

### 9.2 Light/Dark Mode Design Token Documentation

- [x] Create `/guidelines/design-tokens/light-dark-mode.md` with:
  - Complete list of mode-switching CSS properties
  - Colour mapping: light value -> dark value for every token
  - The `.dark` class strategy (applied to `<html>` element)
  - Component patterns
  - Neon colour accessibility: `-text` variants for light mode
  - Examples of correct `.dark` selector usage
- [x] Existing `/guidelines/dark-mode-implementation.md` - complete dark mode guide
- [x] Existing `/guidelines/component-dark-mode.md` - component-specific patterns

### 9.3 Sitemap Guidelines

- [x] Create `/guidelines/sitemap-routes.md` with:
  - Complete route table: path, component, description
  - Taxonomy URL patterns
  - Navigation hierarchy
- [x] Existing `/guidelines/SITEMAP.md` with sitemap structure

### 9.4 CSS Architecture Documentation

- [x] Create `/guidelines/css-architecture.md` with:
  - BEM naming convention with examples
  - `/styles/blocks/` directory pattern
  - How `globals.css` imports work
  - Naming conventions
  - Dark mode patterns
  - Media query patterns
  - Forbidden patterns

### 9.5 CSS Efficiency Planning

- [x] ~~Create `/guidelines/css-efficiency-plan.md`~~ — Standalone planning doc was never created; all planned items (shadow tokens, radius tokens, fluid spacing, fluid typography, CSS consolidation) were implemented directly in `/styles/globals.css` and documented in `/guidelines/css-architecture.md` + `/guidelines/performance-optimization.md`

### 9.6 Search System Documentation

- [x] Create `/guidelines/search-system.md` with:
  - Search architecture overview
  - `searchService.ts` function documentation
  - How each content type is searched
  - Result ranking/scoring
  - Filter system
  - URL parameter sync
  - Performance considerations

---

## 10. Shadow Token System

- [x] **COMPLETE** `P0`

### 10.1 Define Preset Shadows

- [x] Define in `/styles/globals.css` under `:root`:
  ```css
  --wp--preset--shadow--sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --wp--preset--shadow--md: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06);
  --wp--preset--shadow--lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  --wp--preset--shadow--xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.04);
  --wp--preset--shadow--2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
  --wp--preset--shadow--neon-sm: 0 0 5px rgba(57, 255, 20, 0.3);
  --wp--preset--shadow--neon-md: 0 0 10px rgba(57, 255, 20, 0.4), 0 0 20px rgba(57, 255, 20, 0.2);
  --wp--preset--shadow--neon-lg: 0 0 15px rgba(57, 255, 20, 0.5), 0 0 30px rgba(57, 255, 20, 0.3);
  --wp--preset--shadow--neon-pink: 0 0 20px rgba(255, 16, 240, 0.4);
  --wp--preset--shadow--neon-purple: 0 0 20px rgba(190, 0, 254, 0.4);
  --wp--preset--shadow--neon-blue: 0 0 20px rgba(0, 243, 255, 0.4);
  --wp--preset--shadow--card: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --wp--preset--shadow--card-hover: 0 10px 30px -5px rgba(0, 0, 0, 0.2);
  ```
- [x] Dark mode shadow variants (darker base, more glow) in `.dark` override block
- [x] Full audit of all CSS files for hardcoded `box-shadow` values that should use tokens
- [x] Replace remaining hardcoded shadows with token references (focus-ring, neon-purple-hover, neon-pink-dot, action-btn variants across 12 files)
- [x] Box-shadow audit: 8 new tokens defined, 27+ hardcoded values replaced across 12 CSS files

---

## 11. Tailwind Removal Audit

- [x] **COMPLETE** `P0` (protected `ImageWithFallback.tsx` excluded)

### 11.1 Full Codebase Audit

- [x] Search for Tailwind utility patterns in all `.tsx` files
- [x] No Tailwind `@apply` directives remain
- [x] No Tailwind arbitrary values (e.g., `w-[300px]`) remain
- [x] Only remaining Tailwind-like utilities are in **protected** `ImageWithFallback.tsx` (cannot modify)
- [x] Custom utility classes (`text-center`, `py-section-xl`, `mb-fluid-lg`, etc.) are defined in `globals.css` and are **not** Tailwind - they are project-specific BEM-compatible utilities
- [x] All `text-section-h2`, `text-body-p`, `container-wide`, etc. are project custom classes

> **Note:** `ImageWithFallback.tsx` is a protected file and cannot be modified. It contains `flex items-center justify-center w-full h-full` Tailwind classes. This is accepted as an external dependency.

---

## 12. Document Title Standardisation

- [x] **COMPLETE** `P4` (v3.0.0 — Superseded by Task 33: Centralised SEO System)

### 12.1 Consistent Title Pattern

All 46 page components now use a centralised `setSEO()` utility that sets `document.title`, `<meta description>`, Open Graph, and Twitter Card tags from a single call. Raw `document.title =` assignments have been completely removed from all `.tsx` files. See **Task 33** for full details.

**Pattern:** `{Page Title} | {Section} — Ash Shaw` (full title supplied to `setSEO()`)

- [x] HomePage: `Ash Shaw | Neon & UV Makeup Art — Berlin & Festival Portfolio`
- [x] AboutPage: `About Ash Shaw | The Artist Behind Neon vs Atomic Black`
- [x] BlogPage: `Insights | Makeup Tips, Festival Guides & Tutorials — Ash Shaw`
- [x] BlogPostPage: `{title} | Insights — Ash Shaw` (dynamic via `blogPostSEO()`)
- [x] BlogCategoryPage: `{name} | Insights — Ash Shaw` (dynamic via `blogCategorySEO()`)
- [x] BlogTagPage: `{name} | Insights — Ash Shaw` (dynamic via `blogTagSEO()`)
- [x] PortfolioMainPage: `Portfolio | Neon & UV Makeup Gallery — Ash Shaw`
- [x] PortfolioDetailPage: `{title} | Portfolio — Ash Shaw` (dynamic via `portfolioEntrySEO()`)
- [x] PortfolioCategoryPage: `{name} | Portfolio — Ash Shaw` (dynamic via `portfolioCategorySEO()`)
- [x] PortfolioTagPage: `{name} | Portfolio — Ash Shaw` (dynamic via `portfolioTagSEO()`)
- [x] ContactPage: `Contact Ash Shaw | Collaborate on Festival & Neon Art`
- [x] VideosPage: `Videos | Makeup Tutorials & Festival Art — Ash Shaw`
- [x] VideoDetailPage: `{title} | Videos — Ash Shaw` (dynamic via `videoSEO()`)
- [x] VideoCategoryPage: `{name} | Videos — Ash Shaw` (dynamic via `videoCategorySEO()`)
- [x] VideoTagPage: `{name} | Videos — Ash Shaw` (dynamic via `videoTagSEO()`)
- [x] PodcastsPage: `Podcasts | Neon vs Atomic Black — Ash Shaw`
- [x] PodcastDetailPage: `{title} | Podcasts — Ash Shaw` (dynamic via `podcastSEO()`)
- [x] PodcastCategoryPage: `{name} | Podcasts — Ash Shaw` (dynamic via `podcastCategorySEO()`)
- [x] PodcastTagPage: `{name} | Podcasts — Ash Shaw` (dynamic via `podcastTagSEO()`)
- [x] SearchResultsPage: dynamic title based on query + `pageSEO.search` fallback
- [x] SitemapPage: `Sitemap | Ash Shaw Makeup Art Portfolio`
- [x] StyleGuidePage: `Style Guide | Neon vs Atomic Black Design System — Ash Shaw`
- [x] NotFoundPage: `Page Not Found | Ash Shaw`
- [x] TermsAndConditions: `Terms & Conditions | Ash Shaw`
- [x] PrivacyPolicy: `Privacy Policy | Ash Shaw`
- [x] FaqAggregatePage: `FAQ | Frequently Asked Questions — Ash Shaw`
- [x] FeedbackPage: `Feedback & Testimonials | What People Say — Ash Shaw`
- [x] StickersPage: `Sticker Gallery | UV-Reactive Art Prints — Ash Shaw`
- [x] DevToolsPage + all 23 sub-tools: individual titles via `devToolsSEO.*`
- [x] RootLayout: fallback title logic removed — pages own their SEO

---

## 13. FAQ Sticker Graphics

- [x] **COMPLETE** `P3` (core done; stretch items deferred to P4)

### 13.1 Sticker Graphics Data Set

**Prompt:** Create a centralized collection of neon "sticker graphics" — vivid, eye-catching abstract neon images (spirals, vortexes, bursts) used as decorative elements beside FAQ sections and potentially other content blocks. Each sticker has an id, import path, alt text, and label. A helper function maps page IDs to specific stickers for variety across pages. All sticker images are imported via `figma:asset` and registered in `/data/mock/images/sticker-graphics.ts`.

- [x] Create `/data/mock/images/sticker-graphics.ts` with `StickerGraphic` interface and data array
- [x] Import two initial neon sticker graphics via `figma:asset`
  - `neon-spiral` — rainbow neon spiral
  - `neon-vortex` — blue/pink neon vortex
- [x] Export `getStickerForPage(pageId)` helper that maps page IDs to specific stickers
- [x] Add barrel export in `/data/mock/images/index.ts`
- [x] Add more sticker graphics as new assets become available (target: 6-8 unique stickers) — **26 stickers now in collection** (v7.0.0)
- [ ] Consider per-content-type sticker assignments (blog vs portfolio vs videos vs podcasts) `P4 Deferred`

### 13.2 FAQ Section — Sticker Graphic Column

**Prompt:** Update the FaqSection component to display a decorative neon sticker graphic to the right of the FAQ accordion on desktop. The layout should be a two-column flex layout: FAQ card (70-75%) on the left, sticker image (25-30%) on the right, with a subtle gradient background behind the whole section. On mobile the sticker hides to preserve vertical space. The sticker should have a soft neon glow behind it and a subtle hover animation. All styling via BEM in `/styles/blocks/faq.css`. No Tailwind. No inline styles.

- [x] Update `/components/sections/FaqSection.tsx` to v3.0.0:
  - Import `getStickerForPage` from sticker graphics data
  - Add `.faq-layout` wrapper: flex row on desktop, column on mobile
  - Add `.faq-sticker` column with image and glow background
  - Sticker is `aria-hidden="true"` (decorative only)
- [x] Update `/styles/blocks/faq.css` to v3.0.0:
  - `.faq-layout` — flex row at `>=1024px`, column below
  - `.faq-sticker` — `flex: 0 0 280px` on desktop, `display: none` on mobile
  - `.faq-sticker__image` — rounded, saturated, subtle hover scale/rotate
  - `.faq-sticker__glow` — radial gradient blur behind image (neon purple/blue)
  - `.faq-layout` background: subtle multi-stop gradient (purple → blue → green, very low opacity)
  - Dark mode: increased glow intensity on sticker, deeper gradient tint
  - `prefers-reduced-motion`: disable hover transform on sticker
- [ ] Add variant for featured/hero FAQ blocks with larger sticker (e.g., homepage) `P4 Deferred`
- [x] Random sticker rotation per page load for visual variety — `getRandomSticker(seed?)` function in `/data/mock/images/sticker-graphics.ts`

---

## 14. FAQ Aggregate Page

- [x] **COMPLETE** `P3`

### 14.1 FAQ Aggregate Page

**Prompt:** Create a dedicated `/faq` page that aggregates ALL FAQs from the site — global FAQs and every page-specific FAQ group — into a single, searchable, categorised view. FAQs are grouped by their source page (General, Home, About, Portfolio, Blog, Videos, Podcasts, Contact). Users can filter by category, search by keyword (matching question and answer text), and expand/collapse individual items. The page includes a decorative sticker graphic, a neon-styled search bar, and category filter chips. Uses existing `FaqItem` and `FaqGroup` data from `/data/mock/sections/faq.ts`. BEM styling in `/styles/blocks/faq-page.css`. No Tailwind. No inline styles.

- [x] Create `/components/pages/faq/FaqAggregatePage.tsx`:
  - Flatten all `pageFaqGroups` + global `faqData` into a single categorised list
  - Category filter chips (All, General, Home, About, Portfolio, Blog, Videos, Podcasts, Contact)
  - Search bar with neon glow focus (`border-color: neon-purple`, `box-shadow` glow)
  - Grouped accordion display: FAQs grouped by source page under section headings
  - Motion-animated expand/collapse (reuses `FaqItemComponent` pattern)
  - Multiple FAQs can be open simultaneously (uses `Set<string>` state)
  - Live result count (`aria-live="polite"`)
  - Empty state with `HelpCircle` icon
  - Decorative sticker graphic (fixed position on large screens)
  - `document.title` set to `FAQ | Ash Shaw`
- [x] Create `/data/mock/ui/faq.ts` with all UI strings (title, subtitle, search placeholder, no-results, result count)
- [x] Create `/styles/blocks/faq-page.css` with full BEM:
  - `.faq-aggregate__header`, `.faq-aggregate__controls`, `.faq-aggregate__search`
  - `.faq-aggregate__chip`, `.faq-aggregate__chip--active` (neon purple)
  - `.faq-aggregate__group`, `.faq-aggregate__group-title` (neon accent underline)
  - `.faq-aggregate__list` (card style with border/shadow)
  - `.faq-aggregate__empty` (icon + text)
  - `.faq-aggregate__sticker` (fixed decorative image)
  - All `.dark` variants
- [x] Add route `{ path: 'faq', Component: FaqAggregatePage }` to `/routes.ts`
- [x] Add FAQ link to SitemapPage (Pages section)

---

## 15. Feedback Page (Testimonials)

- [x] **COMPLETE** `P3`

### 15.1 Feedback Data Model

**Prompt:** Create a centralized feedback/testimonials data model where each feedback item is tagged with portfolio categories and portfolio tags. This allows feedback to appear dynamically on relevant portfolio pages via category/tag matching. Each item has: id, name, location, categorySlug (portfolio category), tags (portfolio tag slugs), quote, star rating, date, optional event name, and featured flag. Helper functions filter feedback by category, tag, or portfolio entry context.

- [x] Create `/data/mock/feedback/index.ts` with:
  - `FeedbackItem` interface
  - 10 feedback items spanning all portfolio categories and key tags
  - `getFeedbackByCategory(slug)` — filter by portfolio category slug
  - `getFeedbackByTag(slug)` — filter by portfolio tag slug
  - `getFeaturedFeedback()` — featured items only
  - `getFeedbackForPortfolioEntry(categoryId, tags)` — dynamic matching for portfolio detail pages
  - Category slug mapping from portfolio category IDs to feedback slugs
- [x] Create `/data/mock/ui/feedback.ts` with all UI strings (title, subtitle, search placeholder, no-results, result count, SEO)

### 15.2 Feedback Page

**Prompt:** Create a dedicated `/feedback` page (called "Feedback" not "Testimonials") that displays all feedback items in a filterable, searchable masonry-style card grid. Filters use portfolio categories and portfolio tags so visitors can find relevant feedback. Each card shows the quote, star rating, author name, location, event name, date, and tag pills. Featured feedback cards get a neon gradient border accent. The page should be linked from the sitemap only (not the main nav). BEM styling in `/styles/blocks/feedback-page.css`. Neon pink accent colour. No Tailwind. No inline styles.

- [x] Create `/components/pages/feedback/FeedbackPage.tsx`:
  - Category filter chips derived from portfolio categories (only those with feedback)
  - Tag filter chips derived from portfolio tags (only those used in feedback)
  - Search bar with neon pink focus glow
  - Responsive card grid: 1 col mobile, 2 col tablet, 3 col desktop
  - `FeedbackCard` sub-component with: quote icon, blockquote, star rating, author footer, tag pills
  - Featured cards: neon gradient border, accent quote icon
  - Featured-first + date-descending sort
  - Result count (`aria-live="polite"`)
  - Empty state with `Quote` icon
  - `document.title` set to `Feedback | Ash Shaw`
  - FaqSection (contact) at bottom
- [x] Create `/styles/blocks/feedback-page.css` with full BEM:
  - `.feedback-page__header`, `.feedback-page__controls`, `.feedback-page__search`
  - `.feedback-page__chip`, `.feedback-page__chip--active` (neon pink)
  - `.feedback-page__grid` — responsive 1/2/3 column grid
  - `.feedback-card` — card with hover lift, border glow
  - `.feedback-card--featured` — neon gradient border accent
  - `.feedback-card__quote`, `.feedback-card__rating`, `.feedback-card__star--filled`
  - `.feedback-card__footer` — author, location, event, date
  - `.feedback-card__tags` — small tag pills
  - All `.dark` variants (neon glows, frosted glass backgrounds)
- [x] Add route `{ path: 'feedback', Component: FeedbackPage }` to `/routes.ts`
- [x] Add Feedback link to SitemapPage (Pages section, with `MessageSquare` icon)

### 15.3 Dynamic Feedback on Portfolio Detail Pages

**Prompt:** Portfolio detail pages should dynamically display relevant feedback items based on the entry's category and tags. Use `getFeedbackForPortfolioEntry()` to find matching feedback, then render up to 3 cards in a "What People Say" section between the main content and the BlogPreviewSection. Each card shows quote, star rating, and author info. If no matching feedback exists, the section is hidden.

- [x] Update `/components/pages/portfolio/PortfolioDetailPage.tsx`:
  - Import `getFeedbackForPortfolioEntry` from feedback data
  - Add `portfolio-feedback-section` between `</main>` and `<BlogPreviewSection>`
  - Match feedback via `portfolioEntry.category` + `portfolioEntry.tags`
  - Render up to 3 feedback cards in a 3-column grid
  - Section title: "What People Say"
  - Section hidden when no matching feedback exists
- [x] Add CSS to `/styles/blocks/portfolio-detail-page.css`:
  - `.portfolio-feedback-section` — subtle gradient background
  - `.portfolio-feedback__grid` — 1 col mobile, 3 col desktop
  - `.portfolio-feedback__card` — compact card with hover lift
  - `.portfolio-feedback__card--featured` — neon accent border
  - `.portfolio-feedback__quote-icon`, `.portfolio-feedback__quote`
  - `.portfolio-feedback__rating`, `.portfolio-feedback__star--filled` (neon yellow)
  - `.portfolio-feedback__author`, `.portfolio-feedback__name`, `.portfolio-feedback__meta`
  - All `.dark` variants
- [x] "View all feedback" link added below feedback cards with `MessageSquare` icon and ghost-neon button style
- [x] `.portfolio-feedback__view-all` CSS added to `portfolio-detail-page.css`
- [ ] Consider paginated feedback sections for entries with many matches `P4 Deferred`

---

## 16. Image Optimisation System

- [x] **COMPLETE** `P2` (core 16.1-16.4 done; 16.5-16.7 deferred to P4)

### 16.0 Architecture Decision

**Context:** This project runs in Figma Make (static client-side React) deployed to Netlify. There is no Node.js build pipeline, so server-side tools like `sharp` or `imagemin` are not available at build time. The solution uses the **Canvas API** for client-side runtime image resizing and WebP compression, plus a reusable `<OptimizedImage>` component and `useOptimizedImage` hook.

**Trade-offs:**
- Runtime Canvas processing adds a brief load delay per image (~50-200ms)
- First paint uses the original image (blurred placeholder), then swaps to the optimised version
- Optimised blobs are cached in memory to avoid re-processing
- For truly optimal performance, pre-compressed assets should replace the originals (see 16.5)

### 16.1 Core Utility -- imageOptimizer.ts

- [x] Create `/utils/imageOptimizer.ts` with:
  - `OptimizeOptions` interface: `maxWidth`, `maxHeight`, `format`, `quality`, `devicePixelRatio`
  - `OptimizedResult` interface: `url` (object URL), `width`, `height`, `sizeBytes`, `format`
  - `optimizeImage(src, options)` -- core Canvas resize + compress function
  - In-memory `Map` cache keyed by `src + options` hash
  - `generateSrcSet(src, options, widths)` -- responsive variants at breakpoints (320-1536)
  - `estimateSavings(src, options)` -- returns `{ originalBytes, optimizedBytes, savedBytes, savedPercent }`
  - `clearOptimizedCache()` -- revokes all object URLs, clears cache
  - `formatBytes(bytes)` -- human-readable size string
  - `IMAGE_PRESETS`: sticker (320/0.7), thumbnail (480/0.78), content (800/0.82), hero (1440/0.85), gallery (1200/0.88), lightbox (1920/0.9)

### 16.2 OptimizedImage Component

- [x] Create `/components/ui/OptimizedImage.tsx` with:
  - Named `preset` prop (sticker, thumbnail, content, hero, gallery, lightbox)
  - Progressive loading: original src with blur, swaps to optimised
  - Graceful fallback to original src if Canvas fails
  - `loading="lazy"` and `decoding="async"` defaults
  - DEV-only console log of optimised size
- [x] Create `/styles/blocks/optimized-image.css` with loading/fallback states

### 16.3 useOptimizedImage Hook

- [x] Create `/hooks/useOptimizedImage.ts` with:
  - Returns `{ src, loading, error, result }`
  - Preset + custom option merging
  - `skip` option to bypass optimisation
  - Cleanup on unmount

### 16.4 Integration -- Adopt OptimizedImage Across Components

- [x] Sticker graphics in `FaqSection.tsx` -- replace `<img>` with `<OptimizedImage preset="sticker">`
- [x] Sticker in `FaqAggregatePage.tsx` -- `<OptimizedImage preset="sticker">`
- [x] Contact page graphic in `ContactPage.tsx` -- `<OptimizedImage preset="content">`
- [x] Author avatar in `BlogPostPage.tsx` -- `<OptimizedImage preset="thumbnail">`
- [x] Portfolio detail main image in `PortfolioDetailPage.tsx` -- `<OptimizedImage preset="gallery">`
- [x] Portfolio detail thumbnails in `PortfolioDetailPage.tsx` -- `<OptimizedImage preset="thumbnail">`
- [x] Blog card featured images in `BlogPage.tsx` -- `<OptimizedImage preset="thumbnail">`
- [x] Blog post featured image in `BlogPostPage.tsx` -- `<OptimizedImage preset="content">`
- [x] Blog category card images in `BlogCategoryPage.tsx` -- `<OptimizedImage preset="thumbnail">`
- [x] Blog tag card images in `BlogTagPage.tsx` -- `<OptimizedImage preset="thumbnail">`
- [x] Blog preview card images in `BlogPreviewSection.tsx` -- `<OptimizedImage preset="thumbnail">`
- [x] Video thumbnails in `VideosPage.tsx` -- `<OptimizedImage preset="thumbnail">`
- [x] Video thumbnails in `VideoCategoryPage.tsx` -- `<OptimizedImage preset="thumbnail">`
- [x] Video thumbnails in `VideoTagPage.tsx` -- `<OptimizedImage preset="thumbnail">`
- [x] Podcast cover images in `PodcastsPage.tsx` -- `<OptimizedImage preset="content">`
- [x] Podcast detail cover in `PodcastDetailPage.tsx` -- `<OptimizedImage preset="gallery">`
- [x] Podcast cover images in `PodcastCategoryPage.tsx` -- `<OptimizedImage preset="content">`
- [x] Podcast cover images in `PodcastTagPage.tsx` -- `<OptimizedImage preset="content">`
- [x] Lightbox video poster thumbnails in `EnhancedLightbox.tsx` -- `<OptimizedImage preset="thumbnail">`
- [x] Portfolio card background images in `PortfolioCard.tsx` -- `useOptimizedImage({ preset: 'thumbnail' })` for background-image
- [x] Slider card background images in `SliderCard.tsx` -- `useOptimizedImage({ preset: 'thumbnail' })` for background-image
- [x] Lightbox image thumbnails in `EnhancedLightbox.tsx` -- `<PortfolioImage preset="thumbnail">` (via new preset prop)
- [x] PortfolioImage component upgraded (v2.0.0) -- optional `preset` prop delegates to OptimizedImage
- [x] Portfolio category archive images in `PortfolioCategoryPage.tsx` -- `<OptimizedImage preset="thumbnail">`
- [x] Portfolio tag archive images in `PortfolioTagPage.tsx` -- `<OptimizedImage preset="thumbnail">`
- [x] Search result card images in `SearchResultsPage.tsx` -- `<OptimizedImage preset="thumbnail">`
- [ ] Hero section images -- deferred (background-image; needs pre-compressed pipeline or tile extraction) `P4 Deferred`
- [ ] Lightbox main image -- intentionally unoptimised (full-screen, user expects full quality) `P4 Deferred`

### 16.5 Pre-Compressed Asset Pipeline (Future) `P4 Deferred`

- [ ] Create `/scripts/optimize-images.ts` (Node.js script using `sharp`):
  - Scan all `figma:asset` imports, generate WebP variants at preset widths
  - Output to `/public/optimized/` with manifest JSON
- [ ] Create `/utils/imageManifest.ts` -- resolves optimised paths at runtime
- [ ] Update `OptimizedImage` to prefer pre-compressed assets (skip Canvas)
- [ ] Add `npm run optimize-images` to package.json + Netlify build
- [ ] Delete high-resolution originals after confirming replacements
- [ ] Document in `/guidelines/image-optimization.md`

### 16.6 Responsive srcSet Integration (Future) `P4 Deferred`

- [ ] Generate `srcSet` + `sizes` attributes from manifest
- [ ] Default `sizes` per preset (sticker 320px, thumbnail 480px, hero 100vw, etc.)
- [ ] Lighthouse audit: confirm image sizing warnings eliminated

### 16.7 Lazy Loading Audit

- [x] Add `loading="lazy"` to all `<img>` tags missing it
- [x] Hero images: `loading="eager"` not applicable (CSS background-image); Logo set to `loading="eager"` for LCP
- [x] Confirm stickers, cards, gallery images all have `loading="lazy"` (via OptimizedImage defaults)
- [x] StyleGuidePage favicon images: `loading="lazy"` + `decoding="async"` added
- [x] PortfolioImage fallback branch: `loading="lazy"` + `decoding="async"` added
- [ ] Lighthouse: no "Defer offscreen images" warnings (needs manual verification) `P4 Deferred`

---

## 17. Future Enhancements

### 17.1 Remaining Polish Items

- [x] **1.3** Dynamic sub-filters on search page (show content-type-specific category chips)
- [x] **1.3** URL query params sync for search filters (`?q=neon&type=blog&sort=recent&category=tutorials`)
- [x] **2.5** Animated result count transitions (number ticks up/down) — `useAnimatedCount` hook + `countPop` keyframe
- [x] **2.5** Active filter context in result count ("12 results in Tutorials") — `filterContext` in `ArchiveFilters`
- [x] **7.2** Per-item FAQs on single blog posts, portfolio entries, and videos
- [x] **7.2** Schema.org FAQ structured data (JSON-LD) for SEO — `/utils/faqSchema.ts` integrated into `FaqSection.tsx`
- [x] **8.1** Card Variants & Form Elements style guide sections added (sections 14 & 15)
- [x] Extract search input from Header.tsx into standalone `SearchInput.tsx` component for reuse
- [x] Restructure `/data/mock/videos.ts` into `/data/mock/videos/` directory (entries, categories, tags)
- [x] Move `PortfolioCategoryData`, `PortfolioTagData`, `VideoTag`, `PodcastTag` interfaces to `/data/types/`
- [x] Add breadcrumbs to taxonomy archive pages — `/components/ui/Breadcrumbs.tsx` with Schema.org BreadcrumbList JSON-LD, added to all 8 taxonomy pages
- [x] Portfolio rich-text content: apply `.portfolio-rich-text` "Toxic Lime" theme when markdown content is added to portfolio entries
- [x] Advanced lightbox with video support — VideoPlayer v2.0.0 with YouTube/Vimeo embed detection, VideoDetailPage uses VideoPlayer, lightbox cursor zoom states moved to CSS
- [x] Blog analytics and engagement tracking — `/utils/analyticsService.ts` (views, likes, reading time, history via localStorage) + `/hooks/useAnalytics.ts` hook, integrated into BlogPostPage
- [x] Performance optimisations — `/hooks/useDebounce.ts` (useDebounce + useThrottledCallback), throttled scroll handler in BlogPostPage, React.memo on SliderCard, passive scroll listeners
- [x] **async_hooks fix** — replaced `clsx` external dependency with zero-dependency inline implementation in `/components/ui/utils.ts` (v1.1.0); cleaned `package.json` (v1.0.2) removing 30+ phantom dependencies (all @radix-ui, clsx, class-variance-authority, contentful, @emailjs, motion, next-themes, embla-carousel-react, cmdk, sonner, input-otp, react-day-picker, react-resizable-panels, web-vitals, Storybook); confirmed only `react`, `react-dom`, `react-router`, `lucide-react` remain as external imports across all source files

---

## 18. async_hooks Runtime Error Fix

- [x] **COMPLETE** `P0`

### 18.1 Root Cause Investigation

**Context:** The application was hitting a fatal `async_hooks` runtime error from `esm.sh/node/async_hooks.mjs` on every page load. Exhaustive search of all ~42 `.tsx`/`.ts` source files across multiple sessions confirmed:
- ~31 shadcn/ui scaffold files in `/components/ui/` were already stubbed (all @radix-ui imports removed)
- 3 Supabase files were neutralized (protected, cannot delete, but fully stubbed)
- No `motion/react`, `contentful`, `@emailjs/browser`, `next-themes`, `class-variance-authority` imports remained
- The only non-framework external import was `clsx` in `/components/ui/utils.ts`

### 18.2 Fix Applied

- [x] Replaced `clsx` external dependency with zero-dependency inline `cn()` implementation in `/components/ui/utils.ts` (v1.1.0)
  - Full `clsx` API compatibility: strings, objects, arrays, nested, falsy filtering
  - All 6 consumer files (`pagination.tsx`, `table.tsx`, `skeleton.tsx`, `card.tsx`, `input.tsx`, `textarea.tsx`) work unchanged
- [x] Cleaned `package.json` (v1.0.2): removed 30+ phantom dependencies that were listed but not imported:
  - `clsx`, `class-variance-authority`, `motion`, `next-themes`
  - All 26 `@radix-ui/*` packages
  - `contentful`, `@contentful/rich-text-*`, `@emailjs/browser`, `web-vitals`
  - `embla-carousel-react`, `cmdk`, `sonner`, `input-otp`, `react-day-picker`, `react-resizable-panels`
  - Storybook scripts and 8 `@storybook/*` dev dependencies
- [x] Added `react-router` to `package.json` dependencies (was imported but not listed)
- [x] Verified only 4 external packages remain across entire codebase: `react`, `react-dom`, `react-router`, `lucide-react`

---

## 19. Search Results Page Polish

- [x] **COMPLETE** `P2`

### 19.1 Light & Dark Mode Consistency

**Prompt:** Audit and fix the Search Results Page (`/components/pages/search/SearchResultsPage.tsx` + `/styles/blocks/search.css`) so that every element has consistent, intentional light and dark mode styling. Currently the page has inconsistent contrast, missing `.dark` variants, and some elements that don't adapt to the active theme. Every card, heading, chip, badge, separator, empty state, and skeleton must have proper `.dark` counterparts with neon accents following the established Neon vs Atomic Black design system.

- [x] Audit all BEM classes in `search.css` for missing `.dark` variants
- [x] Fix card background, border, and text contrast in light mode (should match the card pattern from blog/portfolio pages)
- [x] Fix card hover glow in dark mode (neon border glow, gradient border)
- [x] Ensure result group headers have consistent styling in both modes
- [x] Fix empty state illustration and text contrast in both modes
- [x] Ensure skeleton loading states are visible in both modes
- [x] Verify filter chips match `ArchiveFilters` styling in both modes
- [x] Result count label: neon-coloured number in dark mode, neutral in light
- [x] All separators and dividers must adapt to theme

### 19.2 Tabbed Content Type Results

**Prompt:** Refactor the search results layout from vertically stacked content-type groups to a tabbed interface. Each content type (Blog, Portfolio, Videos, Podcasts, Pages) gets its own tab. The active tab shows a neon underline indicator. Tabs should only appear for content types that have results. The tab bar should be horizontally scrollable on mobile. A "All Results" tab at the start shows the current stacked view as a fallback. Clicking a tab filters the visible results without re-searching. The selected tab should sync with the `?type=` URL query parameter. BEM-only styling, no Tailwind, full dark mode support, keyboard accessible (arrow keys to navigate tabs), WCAG `role="tablist"` / `role="tab"` / `role="tabpanel"` semantics.

- [x] Create tab bar component within `SearchResultsPage` (or extract to `/components/ui/SearchTabs.tsx`)
- [x] Tab items: "All Results" (default) + one tab per content type with results
- [x] Active tab: neon underline indicator (pink in dark mode, purple in light mode)
- [x] Tab count badges: show result count per type (e.g., "Blog (5)")
- [x] Horizontal scroll on mobile with fade-out edge indicators
- [x] Keyboard navigation: `ArrowLeft` / `ArrowRight` to move between tabs, `Enter` / `Space` to select
- [x] ARIA: `role="tablist"` on container, `role="tab"` on each tab, `role="tabpanel"` on content area, `aria-selected`, `aria-controls`, `id` linking
- [x] Sync active tab with `?type=` URL query param (update URL on tab change, restore from URL on load)
- [x] Create BEM styles in `search.css`:
  - `.search-results__tabs` — tab bar container, horizontal scroll on mobile
  - `.search-results__tab` — individual tab button
  - `.search-results__tab--active` — active state with neon underline
  - `.search-results__tab-count` — badge with result count
  - `.search-results__tab-indicator` — animated underline indicator
  - `.search-results__tab-panel` — content panel
  - All `.dark` variants
- [x] "All Results" tab: renders all content types stacked (current behaviour)
- [x] Individual type tabs: render only that type's results
- [x] Smooth transition when switching tabs (fade or slide)
- [x] Preserve scroll position when switching between tabs
- [x] Add mock data strings for tab labels to `/data/mock/ui/search.ts`

---

## 20. Developer Tools Hub Expansion

- [x] **COMPLETE** `P1`

### 20.1 Hub Landing Page Update

**Prompt:** Expand the `/dev-tools` landing page to link to all 11 sub-tools. Add tool cards for the 7 new design-system specimen pages alongside the existing 4 (Style Guide, Stickers, Accessibility Tester, Performance Tester). Each card has an icon, title, description, badge, and href. Update the icon map in `DevToolsPage.tsx` to include all new Lucide icons.

- [x] Update `/data/mock/ui/dev-tools.ts` with all 11 tool entries
- [x] Update `DevToolsPage.tsx` icon map with new icons (Type, Ruler, Cloudy, Circle, MousePointerClick, LayoutGrid, Zap)
- [x] Verify grid layout scales to 11 cards (2-col on tablet, responsive on mobile)

### 20.2 Typography Specimens Page

**Prompt:** Create `/dev-tools/typography` — a focused specimen page showing every typography token in the design system. Includes: all 3 font families (Playfair Display, Inter, Righteous) with pangram samples, the full fluid font-size scale (`--wp--preset--font-size--*` tokens) rendered as live text, heading hierarchy h1–h6, body/caption/label text, and font-weight variants. Each specimen shows the CSS custom property name, computed pixel value, and a live text sample. BEM-only CSS with dark mode.

- [x] ~~Create `/data/mock/ui/specimen-typography.ts`~~ — Typography specimen data defined inline in component (no separate data file)
- [x] Create `/components/pages/dev-tools/TypographySpecimenPage.tsx`
- [x] Create `/styles/blocks/specimen-page.css` (shared specimen page styles)
- [x] Add route `{ path: 'dev-tools/typography', Component: TypographySpecimenPage }`
- [x] Breadcrumbs: Home → Developer Tools → Typography Specimens

### 20.3 Spacing Scale Page

**Prompt:** Create `/dev-tools/spacing` — a specimen page visualising every `--wp--preset--spacing--*` token. Each token is rendered as a coloured bar whose width matches the token value, labelled with the CSS variable name and computed value. Group by category (fixed, fluid, section). Dark mode with neon bar colours.

- [x] Create `/components/pages/dev-tools/SpacingSpecimenPage.tsx`
- [x] Add route `{ path: 'dev-tools/spacing', Component: SpacingSpecimenPage }`
- [x] Breadcrumbs: Home → Developer Tools → Spacing Scale

### 20.4 Shadow & Glow Scale Page

**Prompt:** Create `/dev-tools/shadows` — a specimen page showing all `--wp--preset--shadow--*` tokens as interactive cards. Each card applies the shadow token and displays the variable name. In dark mode, glow-style shadows should be visible against the atomic black background. Include hover states so users can see shadow transitions.

- [x] Create `/components/pages/dev-tools/ShadowSpecimenPage.tsx`
- [x] Add route `{ path: 'dev-tools/shadows', Component: ShadowSpecimenPage }`
- [x] Breadcrumbs: Home → Developer Tools → Shadow & Glow Scale

### 20.5 Border Radius Specimens Page

**Prompt:** Create `/dev-tools/radius` — a specimen page showing all `--wp--preset--border-radius--*` tokens. Each token displayed as a coloured square with the radius applied, labelled with the CSS variable name and computed value. Group into categories (small, medium, large, pill, full).

- [x] Create `/components/pages/dev-tools/RadiusSpecimenPage.tsx`
- [x] Add route `{ path: 'dev-tools/radius', Component: RadiusSpecimenPage }`
- [x] Breadcrumbs: Home → Developer Tools → Border Radius Specimens

### 20.6 Button Variants Page

**Prompt:** Create `/dev-tools/buttons` — an interactive specimen page showing all button styles used across the site: primary (gradient), secondary (outline), ghost (neon hover), pill-shaped, icon buttons, and disabled states. Each variant has light and dark mode previews. Show hover/focus/active states.

- [x] Create `/components/pages/dev-tools/ButtonSpecimenPage.tsx`
- [x] Add route `{ path: 'dev-tools/buttons', Component: ButtonSpecimenPage }`
- [x] Breadcrumbs: Home → Developer Tools → Button Variants

### 20.7 Card Interactions Page

**Prompt:** Create `/dev-tools/cards` — a specimen page showing all card styles used across the site: blog card, portfolio card, podcast card, video card, tool card, tip card. Each includes hover lift, neon border glow in dark mode, and focus ring. Show interaction states side by side.

- [x] Create `/components/pages/dev-tools/CardSpecimenPage.tsx`
- [x] Add route `{ path: 'dev-tools/cards', Component: CardSpecimenPage }`
- [x] Breadcrumbs: Home → Developer Tools → Card Interactions

### 20.8 Neon Animations Page

**Prompt:** Create `/dev-tools/neon` — an interactive specimen page showcasing all 26+ CSS keyframe animations from `/styles/animations.css`. Each animation is displayed with a preview element, play/pause toggle, the animation name, and the CSS `@keyframes` declaration name. Animations should respect `prefers-reduced-motion`.

- [x] Create `/components/pages/dev-tools/AnimationSpecimenPage.tsx`
- [x] Add route `{ path: 'dev-tools/neon', Component: AnimationSpecimenPage }`
- [x] Breadcrumbs: Home → Developer Tools → Neon Animations

### 20.9 Sitemap Developer Tools Section

**Prompt:** Add a dedicated "Developer Tools" section to the Sitemap page listing all 11 dev-tool sub-pages with icons and descriptions. Position it between Tags and Legal sections. Add `devTools` to sitemap mock data sections.

- [x] Update `/data/mock/ui/sitemap.ts` with `devTools` section label
- [x] Update `/components/pages/SitemapPage.tsx` with Developer Tools section
- [x] Each tool listed with icon, title, and link to `/dev-tools/[slug]`

### 20.10 Navigation & Page Titles

**Prompt:** Add page titles for all new dev-tool routes to `/data/mock/ui/navigation.ts`.

- [x] Add page title entries for typography, spacing, shadows, radius, buttons, cards, neon

---

## 21. Design Tokens Reference

- [x] **COMPLETE** `P1`

**Category: Design**

**Route:** `/dev-tools/tokens`

### 21.1 Token Reference Page

**Prompt:** Create `/dev-tools/tokens` — a single-page reference of every CSS custom property in the design system. The page is organised into collapsible sections: Neon Colors (8 neon + 8 accessible text variants), Neutral Ramp (50–900 + atomic-black), Gradients (4 presets), Typography (3 font families, 11 fluid font sizes), Spacing (fluid tokens, section padding, block gap), Layout (content/wide/full widths), Border Radii (6 tokens), Shadows (21 tokens), Z-Index (6 tokens), Opacity (5 tokens), Aspect Ratio (3 tokens), and Animation timing tokens. Each token entry shows: the CSS variable name, computed value, and a live swatch/preview (colour swatch for colours, text sample for typography, bar for spacing, box for radius/shadow). The page must use collapsible `<details>` / `<summary>` elements for each section so users can expand only what they need. Add a sticky "Jump to" sidebar navigation on desktop (>1024px) that scrolls to each section. BEM-only CSS, full dark mode support, WCAG accessible keyboard navigation. All section labels imported from mock data.

- [x] Create `/data/mock/ui/design-tokens-ref.ts` with section labels, token arrays, and descriptions
- [x] Create `/components/pages/dev-tools/DesignTokensRefPage.tsx`
- [x] Create `/styles/blocks/design-tokens-ref.css` with BEM styles and `.dark` variants
- [x] Add route `{ path: 'dev-tools/tokens', Component: DesignTokensRefPage }`
- [x] Breadcrumbs: Home → Developer Tools → Design Tokens Reference
- [x] Sticky sidebar nav on desktop (>1024px)
- [x] Collapsible `<details>` sections for each token category
- [x] Live swatches/previews for every token type
- [x] Add tool card to `/data/mock/ui/dev-tools.ts`
- [x] Update `DevToolsPage.tsx` icon map (`SwatchBook`)
- [x] Update sitemap Developer Tools section
- [x] Add page title to navigation mock data

---

## 22. Design System Playground

- [x] **COMPLETE** `P2`

**Category: Design**

**Route:** `/dev-tools/playground`

### 22.1 Interactive Playground Page

**Prompt:** Create `/dev-tools/playground` — an interactive page where users can experiment with design tokens in real-time. The page has two panels side by side on desktop (stacked on mobile): a **Controls Panel** on the left with sliders, colour pickers, and dropdowns for adjusting token values, and a **Preview Panel** on the right showing a live card/button/text composition that updates instantly. Controls include: background colour (select from all neon + neutral colours), text colour, font family (3 options), font size (slider across the 11 fluid sizes), border radius (slider across 6 tokens), shadow (dropdown of 21 shadow tokens), gradient (4 preset gradients), and spacing (gap between elements). The preview panel renders a sample card with heading, body text, badge, and CTA button using the selected tokens. All controls use HTML native inputs (range, select, color) styled with BEM. Include a "Reset to Defaults" button and a "Copy CSS" button that generates the custom property overrides as a CSS block. BEM-only, dark mode, keyboard accessible.

- [x] Create `/components/pages/dev-tools/PlaygroundPage.tsx`
- [x] Create `/styles/blocks/playground.css` with BEM styles and `.dark` variants
- [x] Add route `{ path: 'dev-tools/playground', Component: PlaygroundPage }`
- [x] Breadcrumbs: Home → Developer Tools → Design System Playground
- [x] Controls: colour, font, size, radius, shadow, gradient, spacing
- [x] Live preview card with heading, body, badge, button
- [x] "Reset to Defaults" button
- [x] "Copy CSS" button (copies custom property overrides to clipboard)
- [x] Responsive: side-by-side on desktop, stacked on mobile
- [x] Add tool card to dev-tools mock data
- [x] Update sitemap Developer Tools section

---

## 23. Component Showcase

- [x] **COMPLETE** `P2`

**Category: Showcase**

**Route:** `/dev-tools/components`

### 23.1 Component Showcase Page

**Prompt:** Create `/dev-tools/components` — a visual showcase of all existing React components used across the Ash Shaw portfolio. Organised into 4 categories: **Common** (Logo, Header, Footer, MobileMenu, SocialLinks, ThemeToggle, ErrorBoundary, OfflineIndicator), **UI** (Breadcrumbs, ArchiveFilters, ScrollDownArrow, ScrollToTop, SearchInput, ShareComponent, ReadMoreButton, PortfolioCard, OptimizedImage, EnhancedLightbox, SectionCard, VideoPlayer), **Decorative** (ColorfulIcons — ShineIcon, JoyIcon, GrowthIcon), **Page Sections** (Hero, Featured, Blog Preview). Each component entry shows: name, file path, a brief description, and a live rendered preview (where safe to render in isolation). Components that require complex props or routing context should show a placeholder card with "Requires page context" badge. The page uses a filterable grid with category toggle chips at the top (using the same compact chip style as ArchiveFilters). BEM-only CSS, full dark mode, keyboard navigation.

- [x] Create `/data/mock/ui/component-showcase.ts` with component entries (name, path, description, category, canPreview)
- [x] Create `/components/pages/dev-tools/ComponentShowcasePage.tsx`
- [x] Create `/styles/blocks/component-showcase.css` with BEM styles and `.dark` variants
- [x] Add route `{ path: 'dev-tools/components', Component: ComponentShowcasePage }`
- [x] Breadcrumbs: Home → Developer Tools → Component Showcase
- [x] Category filter chips: Common, UI, Decorative, Page Sections
- [x] Live preview for safe-to-render components
- [x] "Requires page context" badge for complex components
- [x] Add tool card to dev-tools mock data
- [x] Update sitemap Developer Tools section

---

## 24. Documentation Generator

- [x] **COMPLETE** `P3`

**Category: Documentation**

**Route:** `/dev-tools/docs`

### 24.1 Documentation Generator Page

**Prompt:** Create `/dev-tools/docs` — a mock auto-generated documentation page that displays structured documentation for every component in the codebase. For each component, show: component name, file path, JSDoc description (from mock data since we can't parse files at runtime), props table (name, type, required, default, description), usage example (code snippet), and related components. The page has a searchable sidebar listing all components alphabetically, and clicking a component scrolls to its documentation section. Include a "Copy Import" button for each component that copies the import statement. Cover at least 15 key components with realistic documentation. BEM-only CSS, full dark mode, keyboard accessible.

- [x] ~~Create `/data/mock/ui/component-docs.ts`~~ — Reuses `componentApiUI` from `/data/mock/ui/component-api.ts` (no separate docs data file needed)
- [x] Create `/components/pages/dev-tools/DocumentationGeneratorPage.tsx`
- [x] BEM styles via shared `/styles/blocks/specimen-page.css` + `/styles/blocks/component-api.css` (dedicated `docs-generator.css` not needed)
- [x] Add route `{ path: 'dev-tools/docs', Component: DocsGeneratorPage }`
- [x] Breadcrumbs: Home → Developer Tools → Documentation Generator
- [x] Searchable sidebar with component list (desktop >1024px)
- [x] Props table for each component
- [x] Code snippet with syntax highlighting (CSS-based, no external lib)
- [x] "Copy Import" button per component
- [x] Add tool card to dev-tools mock data
- [x] Update sitemap Developer Tools section

---

## 25. Snippet Generator

- [x] **COMPLETE** `P3`

**Category: Documentation**

**Route:** `/dev-tools/snippets`

### 25.1 Snippet Generator Page

**Prompt:** Create `/dev-tools/snippets` — an interactive code snippet builder for rapid BEM-pattern development. The page provides template generators for common patterns: BEM Block (enter a block name, get a full `.block`, `.block__element`, `.block--modifier` CSS scaffold), Component Template (enter component name, get a TypeScript React component with JSDoc, props interface, BEM classes, and CSS import), Page Template (full page component with hero, breadcrumbs, sections, ScrollToTop, document title), Section Template (reusable section with title, subtitle, content area), and Mock Data Template (typed mock data file with exports). Each generator has form inputs for customisation (e.g., block name, number of elements, modifiers) and a live preview pane showing the generated code. Include a "Copy to Clipboard" button for each output. BEM-only CSS, full dark mode, keyboard accessible.

- [x] Create `/components/pages/dev-tools/SnippetGeneratorPage.tsx`
- [x] Create `/styles/blocks/snippet-generator.css` with BEM styles and `.dark` variants
- [x] Add route `{ path: 'dev-tools/snippets', Component: SnippetGeneratorPage }`
- [x] Breadcrumbs: Home → Developer Tools → Snippet Generator
- [x] 5 template generators: BEM Block, Component, Page, Section, Mock Data
- [x] Tab navigation between generators
- [x] Form inputs for each generator
- [x] Live code preview with syntax colouring (CSS-based)
- [x] "Copy to Clipboard" for each output
- [x] Add tool card to dev-tools mock data
- [x] Update sitemap Developer Tools section

---

## 26. Code Quality Dashboard

- [x] **COMPLETE** `P2`

**Category: Testing**

**Route:** `/dev-tools/code-quality`

### 26.1 Code Quality Dashboard Page

**Prompt:** Create `/dev-tools/code-quality` — a static analysis display showing code health metrics for the Ash Shaw portfolio. Since we can't run actual static analysis in the browser, this page uses mock data representing realistic metrics. Sections include: **DOM Complexity** (total elements, max nesting depth, average children per node — measured via `document.querySelectorAll('*')` at runtime), **CSS Stats** (total rules, custom properties count, BEM compliance percentage — from mock data), **Component Dependency Map** (visual tree showing which components import which, rendered as a nested list with indentation), **File Size Estimates** (mock data showing file sizes for key components), **Lint Summary** (mock: 0 errors, 0 warnings for TypeScript, ESLint, Stylelint), and an **Overall Health Score** (calculated from sub-scores, displayed as a large circular gauge). Each section is a card with a title, value, and trend indicator (up/down arrow). BEM-only CSS, full dark mode, keyboard accessible.

- [x] Create `/data/mock/ui/code-quality.ts` with mock metrics and component tree
- [x] Create `/components/pages/dev-tools/CodeQualityPage.tsx`
- [x] Create `/styles/blocks/code-quality.css` with BEM styles and `.dark` variants
- [x] Add route `{ path: 'dev-tools/code-quality', Component: CodeQualityPage }`
- [x] Breadcrumbs: Home → Developer Tools → Code Quality Dashboard
- [x] DOM Complexity section (live `document.querySelectorAll` stats)
- [x] CSS Stats section (mock data)
- [x] Component dependency tree (nested list)
- [x] File size estimates (mock data)
- [x] Lint summary (mock data)
- [x] Overall health score gauge (SVG circle)
- [x] Add tool card to dev-tools mock data
- [x] Update sitemap Developer Tools section

---

## 27. Visual Regression Tester

- [x] **COMPLETE** `P3`

**Category: Testing**

**Route:** `/dev-tools/visual-regression`

### 27.1 Visual Regression Tester Page

**Prompt:** Create `/dev-tools/visual-regression` — a simulated visual regression testing tool. Since we can't capture real screenshots in the browser sandbox, this page demonstrates the concept with mock before/after comparisons. The page shows 6 component comparison cards (e.g., Header, Footer, BlogCard, PortfolioCard, Button, Badge). Each card has two side-by-side panels: "Baseline" (left) showing the component in its expected state, and "Current" (right) showing the same component with a subtle deliberate difference (e.g., slightly different padding, colour shift). A slider overlay allows users to scrub between the two versions (CSS `clip-path` technique). A diff summary below each card highlights the detected changes. Include an overall "Pass/Fail" status bar at the top. BEM-only CSS, full dark mode, keyboard accessible.

- [x] ~~Create `/data/mock/ui/visual-regression.ts`~~ — Comparison data defined inline in component (no separate data file)
- [x] Create `/components/pages/dev-tools/VisualRegressionTesterPage.tsx`
- [x] BEM styles via shared `/styles/blocks/specimen-page.css` + `/styles/blocks/snippet-generator.css` (dedicated `visual-regression.css` not needed)
- [x] Add route `{ path: 'dev-tools/visual-regression', Component: VisualRegressionPage }`
- [x] Breadcrumbs: Home → Developer Tools → Visual Regression Tester
- [x] 6 component comparison cards with baseline/current panels
- [x] Slider overlay for before/after scrubbing (CSS clip-path or range input)
- [x] Diff summary per card
- [x] Overall pass/fail status bar
- [x] Add tool card to dev-tools mock data
- [x] Update sitemap Developer Tools section

---

## 28. Integration Tester

- [x] **COMPLETE** `P3`

**Category: Testing**

**Route:** `/dev-tools/integration`

### 28.1 Integration Tester Page

**Prompt:** Create `/dev-tools/integration` — a user flow simulation tool that tests multi-component interactions. The page presents 5 pre-defined test scenarios that users can run: (1) Navigation Flow — click through Home → Portfolio → single item → back, verifying breadcrumbs update; (2) Search Flow — enter a query, verify results appear, click a result, verify navigation; (3) Theme Toggle — switch dark/light, verify body class changes; (4) Archive Filter — select category chip, verify URL params update and result count changes; (5) Mobile Menu — toggle menu, verify overlay appears, navigate, verify menu closes. Each test shows: name, description, steps (numbered list), current status (idle/running/pass/fail), and a "Run Test" button. Tests execute by programmatically triggering DOM events and checking assertions against the page state. Results display with green checkmarks or red X icons per step. Include an overall summary at the top (e.g., "4/5 tests passed"). BEM-only CSS, full dark mode, keyboard accessible.

- [x] ~~Create `/data/mock/ui/integration-tests.ts`~~ — Test scenario data defined inline in component (no separate data file)
- [x] Create `/components/pages/dev-tools/IntegrationTesterPage.tsx`
- [x] BEM styles via shared `/styles/blocks/specimen-page.css` + `/styles/blocks/deployment-readiness.css` (dedicated `integration-tester.css` not needed)
- [x] Add route `{ path: 'dev-tools/integration', Component: IntegrationTesterPage }`
- [x] Breadcrumbs: Home → Developer Tools → Integration Tester
- [x] 5 test scenarios with step-by-step assertions
- [x] "Run Test" / "Run All" buttons
- [x] Step-by-step pass/fail indicators
- [x] Overall summary bar
- [x] Add tool card to dev-tools mock data
- [x] Update sitemap Developer Tools section

---

## 29. Component API Reference

- [x] **COMPLETE** `P1`

**Category: Reference**

**Route:** `/dev-tools/api`

### 29.1 Component API Reference Page

**Prompt:** Create `/dev-tools/api` — a comprehensive props/interface reference for all exported React components. The page lists every public component alphabetically with: component name, file path, description, a props table (prop name, TypeScript type, required/optional, default value, description), and a copy-able import statement. Cover all key components: Logo, Header, Footer, Breadcrumbs, ArchiveFilters, ScrollDownArrow, ScrollToTop, SearchInput, ShareComponent, ReadMoreButton, PortfolioCard, OptimizedImage, SectionCard, VideoPlayer, ThemeToggle, SocialLinks, ErrorBoundary. Include a search/filter input at the top to quickly find components. Clicking a component in the sidebar scrolls to its section. Props tables use alternating row colours for readability. BEM-only CSS, full dark mode, keyboard accessible.

- [x] Create `/data/mock/ui/component-api.ts` with prop definitions for 17+ components
- [x] Create `/components/pages/dev-tools/ComponentApiPage.tsx`
- [x] Create `/styles/blocks/component-api.css` with BEM styles and `.dark` variants
- [x] Add route `{ path: 'dev-tools/api', Component: ComponentApiPage }`
- [x] Breadcrumbs: Home → Developer Tools → Component API Reference
- [x] Search/filter input for component names
- [x] Sidebar navigation (desktop >1024px)
- [x] Props table per component with alternating rows
- [x] Copy import statement button
- [x] Add tool card to dev-tools mock data
- [x] Update sitemap Developer Tools section

---

## 30. Icon Library

- [x] **COMPLETE** `P1`

**Category: Reference**

**Route:** `/dev-tools/icons`

### 30.1 Icon Library Page

**Prompt:** Create `/dev-tools/icons` — a searchable grid of every Lucide icon used across the Ash Shaw portfolio. The page shows all icons in a responsive grid with: icon preview (rendered at 24px and 32px), icon name, import name (e.g., `import { Home } from 'lucide-react'`), and usage locations (which components use this icon). Include a search input at the top that filters icons by name in real-time. Add size toggle buttons (S: 16px, M: 24px, L: 32px, XL: 48px) that change the preview size of all icons. Icons should be grouped by category: Navigation (Home, ArrowLeft, ArrowRight, ChevronDown, etc.), Content (BookOpen, FileText, Newspaper, etc.), Media (Play, Image, Mic, etc.), Actions (Share2, Download, Copy, Heart, etc.), Status (Check, X, Shield, Eye, etc.), Social (Instagram, Facebook, MessageCircle), and Utility (Palette, Wrench, Zap, etc.). Each icon card has a "Copy Import" button. BEM-only CSS, full dark mode, keyboard accessible.

- [x] Create `/data/mock/ui/icon-library.ts` with all icons used across the site, grouped by category
- [x] Create `/components/pages/dev-tools/IconLibraryPage.tsx`
- [x] Create `/styles/blocks/icon-library.css` with BEM styles and `.dark` variants
- [x] Add route `{ path: 'dev-tools/icons', Component: IconLibraryPage }`
- [x] Breadcrumbs: Home → Developer Tools → Icon Library
- [x] Search input for filtering icons by name
- [x] Size toggle (S/M/L/XL)
- [x] Category grouping with section headers
- [x] "Copy Import" button per icon
- [x] Usage locations per icon
- [x] Add tool card to dev-tools mock data
- [x] Update sitemap Developer Tools section

---

## 31. Deployment Readiness

- [x] **COMPLETE** `P2`

**Category: Deployment**

**Route:** `/dev-tools/deployment`

### 31.1 Deployment Readiness Page

**Prompt:** Create `/dev-tools/deployment` — a pre-deployment validation checklist covering code quality, performance, accessibility, security, and SEO. The page presents 5 audit categories, each with a list of checks. **Performance:** bundle size estimate, image count, lazy loading usage, font loading strategy, animation count vs reduced-motion coverage. **Accessibility:** ARIA landmark coverage, heading hierarchy, alt text coverage, focus indicator presence, colour contrast compliance. **SEO:** meta title/description presence per route, structured data (JSON-LD) coverage, sitemap completeness, canonical URL presence. **Security:** no inline scripts, CSP headers note, external dependency count (should be 4), no exposed API keys. **Code Quality:** TypeScript strict mode, no console.log in production, BEM compliance, mock data coverage, error boundary presence. Each check shows: check name, status (pass/warn/fail with coloured icon), and a recommendation. Include an overall "Deployment Score" at the top (percentage of checks passed) displayed as a large circular gauge. A "Run All Checks" button triggers the audit (some checks can run live against the DOM, others use mock results). BEM-only CSS, full dark mode, keyboard accessible.

- [x] Create `/data/mock/ui/deployment-readiness.ts` with check definitions and mock results
- [x] Create `/components/pages/dev-tools/DeploymentReadinessPage.tsx`
- [x] Create `/styles/blocks/deployment-readiness.css` with BEM styles and `.dark` variants
- [x] Add route `{ path: 'dev-tools/deployment', Component: DeploymentReadinessPage }`
- [x] Breadcrumbs: Home → Developer Tools → Deployment Readiness
- [x] 5 audit categories with expandable check lists
- [x] Pass/warn/fail status icons per check
- [x] Overall deployment score gauge (SVG circle)
- [x] "Run All Checks" button with simulated audit
- [x] Recommendations per failed/warned check
- [x] Add tool card to dev-tools mock data
- [x] Update sitemap Developer Tools section

---

## 32. Analytics Dashboard

- [x] **COMPLETE** `P1`

**Category: Analytics**

**Route:** `/dev-tools/analytics`

### 32.1 Analytics Dashboard Page

**Prompt:** Create `/dev-tools/analytics` — a comprehensive analytics dashboard that tracks page views, content engagement, popular posts, search queries, and visitor behaviour. Combines live session data from localStorage (via `analyticsService.ts`) with mock historical data for trends.

- [x] Create `/data/mock/ui/analytics-dashboard.ts` with mock trend, content, device, referral, and search data
- [x] Create `/components/pages/dev-tools/AnalyticsDashboardPage.tsx`
- [x] Create `/styles/blocks/analytics-dashboard.css` with BEM styles and `.dark` variants
- [x] Add route `{ path: 'dev-tools/analytics', Component: AnalyticsDashboardPage }`
- [x] Breadcrumbs: Home → Developer Tools → Analytics Dashboard
- [x] Summary cards with live localStorage data
- [x] Weekly trend bar chart (mock)
- [x] Top content table with type badges
- [x] Device breakdown + referral sources (horizontal bars)
- [x] Popular search queries (chips)
- [x] Live viewing history from localStorage
- [x] "Refresh Live Data" button
- [x] Add tool card to dev-tools mock data (`BarChart3` icon)
- [x] Update sitemap Developer Tools section

---

## 33. Centralised SEO System

- [x] **COMPLETE** `P0`

**Category: SEO**

### 33.1 SEO Utility & Data File

**Prompt:** Create a centralised SEO system that manages `document.title`, `<meta name="description">`, Open Graph (`og:title`, `og:description`, `og:type`), and Twitter Card (`twitter:title`, `twitter:description`) meta tags from a single `setSEO()` function call. Replace all raw `document.title =` assignments across the entire codebase with `setSEO()` calls importing data from a centralised SEO data file.

- [x] Create `/utils/seo.ts` with:
  - `SEOData` interface: `title`, `description`, optional `canonical`, optional `ogType`
  - `setSEO({ title, description, canonical, ogType })` — updates all meta tags
  - `resetSEO()` — resets to site-wide defaults
  - `truncateForSEO(text, maxLen)` — truncate descriptions to 155 chars
  - `setMeta(attr, attrValue, content)` — internal helper to create/update meta tags
- [x] Create `/data/mock/seo.ts` with:
  - `siteDefault` — site-wide fallback SEO
  - `pageSEO` — SEO for all 16 static pages (home, about, portfolio, blog, videos, podcasts, contact, faq, feedback, stickers, search, sitemap, styleGuide, terms, privacy, notFound)
  - `devToolsSEO` — SEO for hub + all 23 dev-tool sub-pages
  - Dynamic content helpers: `blogPostSEO()`, `blogCategorySEO()`, `blogTagSEO()`, `portfolioEntrySEO()`, `portfolioCategorySEO()`, `portfolioTagSEO()`, `videoSEO()`, `videoCategorySEO()`, `videoTagSEO()`, `podcastSEO()`, `podcastCategorySEO()`, `podcastTagSEO()`

### 33.2 Wire setSEO Into All Pages

- [x] Wire `setSEO(pageSEO.*)` into all 16 static page components
- [x] Wire `setSEO(devToolsSEO.*)` into DevToolsPage hub + all 23 sub-tool pages
- [x] Wire dynamic SEO helpers into all content detail pages (blog posts, videos, podcasts, portfolio entries)
- [x] Wire dynamic SEO helpers into all taxonomy archive pages (category + tag pages for blog, portfolio, videos, podcasts)
- [x] Wire `setSEO(pageSEO.notFound)` into not-found fallback branches in BlogPostPage, VideoDetailPage, PodcastDetailPage
- [x] SearchResultsPage: dynamic title with query, fallback to `pageSEO.search`

### 33.3 Cleanup — Remove All Stale document.title

- [x] Remove all raw `document.title =` assignments from all 46 page components (0 remaining)
- [x] Remove stale `document.title = xxxUI.seo.title` lines from 13 dev-tools pages
- [x] Remove stale `document.title` from BlogTagPage and PortfolioCategoryPage
- [x] Remove fallback title logic from RootLayout (pages own their SEO)
- [x] Remove unused `pageTitles` import from RootLayout
- [x] Update RootLayout JSDoc to v1.1.0
- [x] Update `index.html` default title + OG/Twitter meta to use optimised SEO copy
- [x] Final verification: 0 `document.title` references in any `.tsx` file

---

## 34. Schema.org Structured Data Optimisation

- [x] **COMPLETE** `P0`

**Category: SEO**

### 34.1 Schema Service Utility

**Prompt:** Create a centralised Schema.org structured data service that provides builder functions for JSON-LD schemas and inject/cleanup utilities. Each schema type has a dedicated builder function that returns a typed JSON-LD object. A generic `injectSchema(id, schema)` / `removeSchema(id)` pair handles DOM injection and cleanup. The service covers: WebSite, Person, Article/BlogPosting, VideoObject, PodcastEpisode, ImageGallery, VisualArtwork, CollectionPage, and ItemList schemas.

- [x] Create `/utils/schemaService.ts` with:
  - `injectSchema(id, schema)` — inject JSON-LD `<script>` into `<head>`
  - `removeSchema(id)` — cleanup on unmount
  - `buildWebSiteSchema()` — WebSite + SearchAction (sitelinks search box)
  - `buildPersonSchema()` — Person schema for Ash Shaw
  - `buildArticleSchema(post)` — BlogPosting with author, dates, image
  - `buildVideoSchema(video)` — VideoObject with embed, thumbnail, duration
  - `buildPodcastEpisodeSchema(episode)` — PodcastEpisode with audio, series
  - `buildPortfolioItemSchema(entry)` — VisualArtwork/CreativeWork
  - `buildCollectionSchema(name, description, items)` — CollectionPage for archives
  - `buildImageGallerySchema(items)` — ImageGallery for portfolio main

### 34.2 Integrate Schemas Into Pages

- [x] HomePage: WebSite schema with SearchAction + Person schema
- [x] AboutPage: Person schema with expanded bio data
- [x] BlogPostPage: Article/BlogPosting schema per post
- [x] VideoDetailPage: VideoObject schema per video
- [x] PodcastDetailPage: PodcastEpisode schema per episode
- [x] PortfolioMainPage: ImageGallery schema
- [x] PortfolioDetailPage: VisualArtwork schema per entry
- [x] BlogPage: CollectionPage schema
- [x] VideosPage: CollectionPage schema
- [x] PodcastsPage: CollectionPage schema
- [x] All taxonomy archive pages: CollectionPage schema (category/tag archives)

### 34.3 Existing Schema Preserved

- [x] BreadcrumbList JSON-LD in `/components/ui/Breadcrumbs.tsx` — unchanged
- [x] FAQPage JSON-LD in `/utils/faqSchema.ts` + `FaqSection.tsx` — unchanged

---

## 35. Breadcrumbs Consistency Audit

- [x] **COMPLETE** `P0`

**Category: Quality**

### 35.1 Single Source Component

**Prompt:** Ensure all pages use the single `Breadcrumbs` component from `/components/ui/Breadcrumbs.tsx` with its dedicated CSS at `/styles/blocks/breadcrumbs.css`. No duplicate breadcrumbs. No inline breadcrumb markup. Consistent pattern: `Home > Section > Page Name`.

- [x] All pages import from `/components/ui/Breadcrumbs.tsx` (single source)
- [x] CSS in `/styles/blocks/breadcrumbs.css` (dedicated file, imported by component)
- [x] Schema.org BreadcrumbList JSON-LD injected automatically by component
- [x] No duplicate Breadcrumbs renders on any page
- [x] Fixed: DevToolsPage was using `<Breadcrumbs>` without importing the component
- [x] Fixed: TypographySpecimenPage was missing Breadcrumbs entirely
- [x] Fixed: AnalyticsDashboardPage was missing Breadcrumbs entirely
- [x] Fixed: DocumentationGeneratorPage was missing Breadcrumbs entirely
- [x] Added: BlogPostPage breadcrumbs (`Home > Insights > {Post Title}`)
- [x] Added: VideoDetailPage breadcrumbs (`Home > Videos > {Video Title}`)
- [x] Added: PodcastDetailPage breadcrumbs (`Home > Podcasts > {Episode Title}`)
- [x] Added: PortfolioDetailPage breadcrumbs (`Home > Portfolio > {Entry Title}`)
- [x] Added: FaqAggregatePage breadcrumbs (`Home > FAQ`)
- [x] Added: FeedbackPage breadcrumbs (`Home > Feedback`)
- [x] Added: ContactPage breadcrumbs (`Home > Contact`)
- [x] Added: TermsAndConditions breadcrumbs (`Home > Terms & Conditions`)
- [x] Added: PrivacyPolicy breadcrumbs (`Home > Privacy Policy`)
- [x] All 23 dev-tools sub-pages now have consistent `Home > Developer Tools > {Page}` breadcrumbs
- [x] All 8 taxonomy archive pages have breadcrumbs
- [x] All 4 detail pages have breadcrumbs (blog, video, podcast, portfolio)
- [x] All utility pages have breadcrumbs (FAQ, Feedback, Contact, Search, Style Guide, Stickers)
- [x] All legal pages have breadcrumbs (Terms, Privacy)
- [x] SearchResultsPage, StyleGuidePage, StickersPage have breadcrumbs

---

## 36. Sitemap & Dev-Tools Page Accuracy

- [x] **COMPLETE** `P0`

**Category: Quality**

### 36.1 Sitemap Page Updates

- [x] Pages section: Added Podcasts, Search, Sticker Gallery, Style Guide links
- [x] Developer Tools section: Added missing Accessibility Tester and Performance Tester (now 24 entries: hub + 23 sub-tools)
- [x] All dev-tools routes verified against `/routes.ts` — all 23 sub-tool paths valid
- [x] JSDoc updated to v3.0.0 reflecting 23 sub-tools

### 36.2 Dev-Tools Landing Page Updates

- [x] Fixed missing `Breadcrumbs` import in DevToolsPage
- [x] JSDoc updated to v4.0.0 reflecting 23 sub-tools
- [x] Hero title reads "Developer Tools" (not "Design System Inspector")
- [x] All 23 tool cards render with correct hrefs matching `/routes.ts`
- [x] Breadcrumbs: `Home > Developer Tools`

### 36.3 SITEMAP.md Rewrite

- [x] Comprehensive rewrite of `/guidelines/SITEMAP.md` (v6.0.0)
- [x] Updated from state-based routing to React Router Data mode
- [x] Complete route table: 46 page components across 60+ routes
- [x] All 23 dev-tools sub-pages listed with routes and components
- [x] Taxonomy archive routes documented (8 pages)
- [x] Detail page routes documented (blog, video, podcast, portfolio)
- [x] SEO & Schema.org section updated with centralised system
- [x] Breadcrumbs section with single-source component rules
- [x] Removed all stale references (state-based routing, motion/react, hash routing)

### 36.4 Guidelines Motion/React Purge

- [x] Removed all `motion/react` references from `/guidelines/components/HeroSection.md`
- [x] Removed all `motion/react` references from `/guidelines/components/Modal.md`
- [x] Removed all `motion/react` references from `/guidelines/mobile/performance.md`
- [x] Removed all `motion/react` references from `/guidelines/mobile/animations.md`
- [x] All code examples updated to use pure CSS animations
- [x] Swipe gesture examples updated to native Touch Events
- [x] Parallax examples updated to scroll listeners + CSS transforms

### 36.5 Additional Fixes

- [x] SitemapPage breadcrumbs added (`Home > Sitemap`)
- [x] SitemapPage `PAGE_ICONS` and `NEON_DOT_COLORS` constants restored
- [x] PortfolioDetailPage duplicate `aria-label="Breadcrumb"` fixed (changed to "Back navigation")

---

## Priority Order

| Priority | Task | Status |
|----------|------|--------|
| ~~P0~~ | ~~10 - Shadow Tokens~~ | **DONE** |
| ~~P0~~ | ~~11 - Tailwind Audit~~ | **DONE** |
| ~~P1~~ | ~~2 - ArchiveFilters Component~~ | **DONE** |
| ~~P1~~ | ~~1 - Global Search~~ | **DONE** |
| ~~P2~~ | ~~4 - Blog Taxonomy Routes~~ | **DONE** |
| ~~P2~~ | ~~3 - Portfolio Taxonomy Routes~~ | **DONE** |
| ~~P2~~ | ~~5 - Videos Expansion~~ | **DONE** |
| ~~P3~~ | ~~6 - Podcasts~~ | **DONE** |
| ~~P3~~ | ~~7 - FAQ Expansion~~ | **DONE** |
| ~~P3~~ | ~~8 - Style Guide~~ | **DONE** |
| ~~P4~~ | ~~9 - Guidelines Docs~~ | **DONE** |
| ~~P4~~ | ~~12 - Document Titles~~ | **DONE** |
| ~~P3~~ | ~~13 - FAQ Sticker Graphics~~ | **DONE** (26 stickers, `getRandomSticker()`) |
| ~~P3~~ | ~~14 - FAQ Aggregate Page~~ | **DONE** |
| ~~P3~~ | ~~15 - Feedback Page~~ | **DONE** |
| P2 | 16 - Image Optimisation | **16.4 DONE** - core utils + integration complete, 16.5-16.7 future |
| ~~P0~~ | ~~18 - async_hooks Fix~~ | **DONE** - clsx replaced, package.json cleaned |
| ~~P2~~ | ~~19 - Search Results Page Polish~~ | **DONE** - tabbed content types, search suggestions, breadcrumbs, polished layout |
| ~~P1~~ | ~~20 - Developer Tools Hub Expansion~~ | **DONE** - 11 sub-tools, 7 specimen pages, sitemap section |
| ~~P1~~ | ~~21 - Design Tokens Reference~~ | **DONE** - collapsible sections, sidebar nav, live swatches |
| ~~P1~~ | ~~30 - Icon Library~~ | **DONE** - searchable grid, category groups, size toggle, copy import |
| ~~P1~~ | ~~29 - Component API Reference~~ | **DONE** - sidebar nav, props tables, copy import, 17 components |
| ~~P2~~ | ~~23 - Component Showcase~~ | **DONE** - live previews of Logo, SocialLinks, Breadcrumbs, ReadMore, Share, ThemeToggle |
| ~~P2~~ | ~~22 - Design System Playground~~ | **DONE** - live controls, preview card, copy CSS, reset |
| ~~P2~~ | ~~26 - Code Quality Dashboard~~ | **DONE** - live DOM, CSS stats, dep tree, lint, score gauge |
| ~~P2~~ | ~~31 - Deployment Readiness~~ | **DONE** - 5 audit categories, 26 checks, score gauge |
| ~~P1~~ | ~~32 - Analytics Dashboard~~ | **DONE** - live session + mock trends, top content, devices, referrals |
| ~~P3~~ | ~~24 - Documentation Generator~~ | **DONE** - markdown docs from component data, copy all |
| ~~P3~~ | ~~25 - Snippet Generator~~ | **DONE** - 5 templates, kebab→PascalCase, CSS+JSX panels |
| ~~P3~~ | ~~27 - Visual Regression Tester~~ | **DONE** - side-by-side + overlay, theme/hover/viewport |
| ~~P3~~ | ~~28 - Integration Tester~~ | **DONE** - 6 suites, 25 checks, live pass/fail, run all |
| ~~P0~~ | ~~33 - Centralised SEO System~~ | **DONE** - setSEO() utility, 46 pages, OG + Twitter Card |
| ~~P0~~ | ~~34 - Schema.org Structured Data~~ | **DONE** - WebSite, Person, Article, Video, Podcast, Gallery, Collection schemas |
| ~~P0~~ | ~~35 - Breadcrumbs Consistency Audit~~ | **DONE** - Single source component, 13 pages fixed, 100% coverage |
| ~~P0~~ | ~~36 - Sitemap & Dev-Tools Accuracy~~ | **DONE** - SITEMAP.md rewrite, motion/react purge, all 24 dev-tools, routes verified |

---

## Dependencies

```
Task 10 (Shadows) ──────────> All other tasks (unblocks token usage) ✅
Task 11 (Tailwind Audit) ───> All other tasks (clean foundation) ✅
Task 2 (ArchiveFilters) ────> Task 1.3 (Search Filters) ✅
                             > Task 3.1 (Portfolio Archives) ✅
                             > Task 4.1 (Blog Archives) ✅
                             > Task 5.2 (Video Archives) ✅
                             > Task 6.2 (Podcast Archives) ✅
Task 5.1 (Video Data) ─────> Task 5.2 (Video Routes) ✅
                             > Task 5.3 (Single Video Template) ✅
Task 6.1 (Podcast Data) ───> Task 6.2 (Podcast Routes) ✅
Task 1.1 (Search Input) ───> Task 1.2 (Search Results Page) ✅
Task 1.2 (Search Results) ──> Task 1.3 (Search Filters) ✅
Task 7.1 (FAQ Data) ───────> Task 7.2 (Per-item FAQs) ✅
Task 8 (Style Guide) ──────> Task 10 (needs shadow tokens defined first) ✅
Task 9.6 (Search Docs) ────> Task 1 (search must be built first) ✅
Task 20 (Dev Tools Hub) ───> Tasks 21–31 (hub must exist for sub-tool cards) ✅
Task 21 (Tokens Ref) ─────> Task 10 (needs shadow tokens defined) ✅
Task 23 (Component Showcase) > Task 29 (API ref can reuse component metadata) ✅
Task 24 (Docs Generator) ──> Task 29 (reuses component API data) ✅
Task 12 (Document Titles) ─> Task 33 (superseded by centralised SEO) ✅
Task 33 (SEO System) ─────> Task 34 (Schema.org depends on SEO infra) ✅
```

---

**Last Updated:** February 20, 2026
**Version:** 5.1.0
**Maintained by:** Ash Shaw Portfolio Team

> **Cross-reference:** eBook reader enhancements (4-part expansion, unified responsive reader, appendix, chapter jump drawer) are tracked in [`/tasks/ash-shaw-about-task-list.md`](./ash-shaw-about-task-list.md) Phase 8 (Tasks 23-26).