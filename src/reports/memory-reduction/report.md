# Memory reduction audit report

**Date:** March 2, 2026
**Prompt:** `/prompts/memory-reduction-audit.md`
**Version:** 1.0.0

---

## Executive summary

The codebase has significant memory bloat concentrated in five areas: oversized CSS block files (5 files over 1,000 lines each), monolithic TSX components (EbookPage at 1,297 lines), massive data files (about-subpages.ts at ~2,100 lines), orphaned reference files (content/ and imports/ folders), and duplicated CSS patterns (rich-text styling, badge/skeleton definitions, about-subpage accent overrides). This report identifies 32 actionable items across four audit categories.

---

## 1. Large files requiring splitting

### 1.1 CSS files (critical — 5 files over 1,000 lines)

| File | Lines | Recommended split |
|---|---|---|
| `styles/blocks/style-guide-page.css` | ~1,803 | Split into: `style-guide-typography.css`, `style-guide-colors.css`, `style-guide-theme-panels.css`, `style-guide-components.css` |
| `styles/blocks/ebook.css` | ~1,695 | Split into: `ebook-base.css`, `ebook-navigation.css`, `ebook-drawer.css`, `ebook-page-types.css`, `ebook-responsive.css` |
| `styles/blocks/about-subpage.css` | ~1,200 | Split into: `about-subpage-base.css` (~500 lines, shared structure) and `about-subpage-accents.css` (~700 lines, per-page colour overrides) — or better, replace accent overrides with CSS custom property pattern (see section 4.1) |
| `styles/blocks/portfolio-detail-page.css` | ~1,020 | Extract `.portfolio-rich-text` block (~400 lines) into shared `rich-text.css` |
| `styles/blocks/blog-page.css` | ~1,000 | Extract `.rich-text-content` block (~500 lines) into shared `rich-text.css`; extract pagination into existing `pagination.css` |

### 1.2 CSS files (moderate — 500-700 lines)

| File | Lines | Recommended split |
|---|---|---|
| `styles/blocks/stickers-page.css` | ~700 | Extract `.sticker-lightbox` block (~180 lines) into `sticker-lightbox.css` |
| `styles/blocks/about-page.css` | ~532 | Acceptable size — no split needed |
| `styles/blocks/hidden-about.css` | ~500 | Acceptable size — no split needed |

### 1.3 TSX components (critical)

| File | Lines | Recommended split |
|---|---|---|
| `components/pages/about/EbookPage.tsx` | ~1,297 | Extract: `EbookReaderNav.tsx` (bottom nav bar), `EbookDrawer.tsx` (chapter drawer), `EbookSpreadView.tsx` (desktop two-page mode), `EbookSingleView.tsx` (mobile swipe mode), `useEbookReader.ts` (state management hook) |
| `components/pages/portfolio/PortfolioDetailPage.tsx` | ~600 | Extract feedback/testimonials section into `PortfolioFeedbackSection.tsx` |
| `components/pages/StyleGuidePage.tsx` | ~500+ | Extract into sub-sections: `StyleGuideTypography.tsx`, `StyleGuideColors.tsx`, `StyleGuideComponents.tsx` |

### 1.4 Data files (critical)

| File | Lines | Recommended split |
|---|---|---|
| `data/mock/pages/about-subpages.ts` | ~2,100 | Split into per-subpage files: `about-adhd.ts`, `about-berlin.ts`, `about-cycling.ts`, etc. Re-export from `about-subpages.ts` index |
| `data/mock/pages/ebook-pages.ts` | ~1,550 | Split by book part: `ebook-part-1.ts`, `ebook-part-2.ts`, `ebook-appendices.ts` |
| `data/mock/blog/posts.ts` | ~1,000 | Split by category or publish date into 2-3 files |

---

## 2. Unused layers and orphaned files

### 2.1 Orphaned content folder (CRITICAL)

**Finding:** The `/content/` folder still exists with 10+ markdown files despite Guidelines.md v7.5.0 explicitly stating: *"The `/content/` folder was deleted during the comprehensive codebase cleanup audit (Audit 2). The 25 files it contained were confirmed as having zero code imports and were removed as orphaned reference material."*

**Files still present:**
- `/content/book/this-one-time.md`
- `/content/lightspeed/` (5 files: company-history, internship, jose-abreu, team-workflow, team)
- `/content/personal/` (10 files: artists-lifestyle, berlin, cape-town, education, fitness, identity, lucy, profile, six-cats, thailand)

**Zero code imports confirmed** — no TSX file imports from `/content/`.

**Action:** Delete the entire `/content/` folder to match documented state.

### 2.2 Orphaned imports folder files

**Finding:** The `/imports/` folder contains 8 orphaned markdown/text files with zero code imports:

| File | Type | Imported? |
|---|---|---|
| `ash-shaw-makeup-audit.md` | Legacy audit notes | No |
| `ash-shaw-makeup-audit-1.md` | Legacy audit notes | No |
| `berlin-personal-history.md` | Reference content | No |
| `ebook-features-notes.md` | Design notes | No |
| `ebook-ui-notes.md` | Design notes | No |
| `pasted-attachment.txt` | Unknown paste | No |
| `psytrance-makeup-artist.md` | Reference content | No |
| `psytrance-makeup-artist-1.md` | Reference content | No |
| `responsive-breakpoints.md` | Reference content | No |
| `MakeupPortfolio.tsx` | Legacy component | No (exports `MakeupPortfolio` but nothing imports it) |

**Protected:** `svg-pcq1xyxxqy.ts` is a valid SVG import and must NOT be deleted.

**Action:** Delete all 9 orphaned files from `/imports/` (keep only SVG file).

### 2.3 Duplicate CSS class definitions

**Finding:** Two CSS files define the same `.badge` block with conflicting values:

- `/styles/blocks/badge.css` — 77 lines, defines `.badge`, `.badge--default`, `.badge--secondary`, `.badge--destructive`, `.badge--outline`
- `/styles/blocks/data-display.css` — also defines `.badge`, `.badge--default`, `.badge--secondary`, `.badge--destructive`, `.badge--outline` (lines 38-112)

Same duplication exists for `.skeleton`:
- `/styles/blocks/skeleton.css` — 132 lines
- `/styles/blocks/data-display.css` — lines 183-193

**Action:** Remove the duplicate definitions from `data-display.css` or consolidate into one canonical file.

---

## 3. SVG and vector complexity

### 3.1 Icon set files

The 5 icon set files (`/lib/icons-set-a.tsx` through `icons-set-e.tsx`) are already well-split at ~300 lines each. Individual icon SVG paths are simple single-path definitions — no nesting or group complexity to flatten.

### 3.2 ColorfulIcons component

`/components/common/ColorfulIcons.tsx` contains inline SVGs with gradient definitions. These are inherently complex due to gradient stops but are rendering correctly. **No action needed.**

### 3.3 Noise overlay SVG

The `feTurbulence` SVG noise overlay in `RootLayout.tsx` is a single lightweight filter element. **No action needed.**

**Overall SVG finding:** SVG complexity is not a significant contributor to memory usage in this project. The icon system is already well-structured.

---

## 4. DRY patterns and variant reduction

### 4.1 About-subpage accent overrides (HIGH IMPACT)

**Finding:** `about-subpage.css` contains 15+ per-page accent blocks (ADHD=yellow, Berlin=blue, Cycling=green, Music=purple, etc.) that each repeat the exact same pattern:

```css
/* Pattern repeated ~15 times with only the color changing: */
.about-subpage--{page} .about-subpage__hero { background: linear-gradient(180deg, rgba({R},{G},{B}, 0.03) 0%, transparent 100%); }
.dark .about-subpage--{page} .about-subpage__hero { background: linear-gradient(180deg, rgba({R},{G},{B}, 0.06) 0%, transparent 100%); }
.about-subpage--{page} .about-subpage__hero-badge { color: var(--wp--preset--color--neon-{color}-text); background: rgba({R},{G},{B}, 0.08); border-color: rgba({R},{G},{B}, 0.15); }
.dark .about-subpage--{page} .about-subpage__hero-badge { color: var(--wp--preset--color--neon-{color}); background: rgba({R},{G},{B}, 0.12); border-color: rgba({R},{G},{B}, 0.3); }
/* ... plus pull-quote, chapter hover, step-number, fact-label, destination variants */
```

**Recommendation:** Replace with a CSS custom property pattern. Each page modifier sets one `--accent` variable, and all accent-dependent styles reference it:

```css
/* One set of accent rules (~40 lines) instead of 15 copies (~700 lines) */
.about-subpage--adhd { --accent: 255, 229, 0; --accent-var: var(--wp--preset--color--neon-yellow); --accent-text: var(--wp--preset--color--neon-yellow-text); }
.about-subpage--berlin { --accent: 31, 81, 255; --accent-var: var(--wp--preset--color--neon-blue); --accent-text: var(--wp--preset--color--neon-blue-text); }
/* ... etc. */

.about-subpage__hero { background: linear-gradient(180deg, rgba(var(--accent), 0.03) 0%, transparent 100%); }
.dark .about-subpage__hero { background: linear-gradient(180deg, rgba(var(--accent), 0.06) 0%, transparent 100%); }
```

**Estimated savings:** ~600 lines removed from `about-subpage.css`.

### 4.2 Rich-text styling duplication (HIGH IMPACT)

**Finding:** `blog-page.css` (`.rich-text-content`, ~500 lines) and `portfolio-detail-page.css` (`.portfolio-rich-text`, ~400 lines) define nearly identical styling for: h1-h3, p, strong, em, links, blockquotes, code, lists, and images — differing only in accent colour.

**Recommendation:** Extract into a shared `styles/blocks/rich-text.css` with a CSS custom property `--rich-text-accent` for the colour difference. Both blog and portfolio would import and set their accent:

```css
/* rich-text.css — shared base (~300 lines) */
.rich-text h1, .rich-text h2, .rich-text h3 { /* shared rules */ }
.rich-text blockquote { border-color: var(--rich-text-accent); }

/* blog-page.css — just sets accent */
.blog-article .rich-text { --rich-text-accent: var(--wp--preset--color--neon-purple); }

/* portfolio-detail-page.css — just sets accent */
.portfolio-detail .rich-text { --rich-text-accent: var(--wp--preset--color--neon-green); }
```

**Estimated savings:** ~500 lines removed across both files.

### 4.3 Category/tag page component duplication (MODERATE IMPACT)

**Finding:** 8 archive pages follow the same pattern with only the data source and a few labels changing:

| Category page | Tag page | Shared pattern |
|---|---|---|
| `BlogCategoryPage.tsx` | `BlogTagPage.tsx` | Archive list + ArchiveFilters + breadcrumbs + SEO + schema |
| `VideoCategoryPage.tsx` | `VideoTagPage.tsx` | Archive list + ArchiveFilters + breadcrumbs + SEO + schema |
| `PodcastCategoryPage.tsx` | `PodcastTagPage.tsx` | Archive list + ArchiveFilters + breadcrumbs + SEO + schema |
| `PortfolioCategoryPage.tsx` | `PortfolioTagPage.tsx` | Archive list + ArchiveFilters + breadcrumbs + SEO + schema |

**Recommendation:** Create a shared `ArchiveListPage.tsx` wrapper component that accepts data source, card renderer, and SEO config as props. Each specific page becomes a thin wrapper (~30 lines) instead of duplicating ~150 lines.

**Estimated savings:** ~800 lines across 8 files.

### 4.4 About subpage TSX component pattern (MODERATE IMPACT)

**Finding:** The 16+ about subpages (`AdhdPage`, `BerlinPage`, `CyclingPage`, etc.) all follow the same JSX structure:

1. `<main>` with `about-subpage about-subpage--{name}` class
2. `<header>` hero with breadcrumbs, badge, title, description
3. Optional `PullQuote` and `StatCard`
4. `data.sections.map()` rendering `ContentSection` components

**Recommendation:** Create an `AboutSubpageLayout.tsx` wrapper that accepts `data`, `pageName`, `accentColor`, and optional `children` for custom sections. Most subpages become ~15 lines:

```tsx
export function AdhdPage() {
  return <AboutSubpageLayout data={adhdPageData} pageName="adhd" seo={pageSEO.adhd} accentColor="yellow" />;
}
```

**Estimated savings:** ~1,500 lines across 16 subpage files.

---

## 5. Summary of estimated savings

| Category | Lines saved | Files affected |
|---|---|---|
| CSS file splitting (ebook, style-guide, about-subpage, blog, portfolio) | Organisation only | 5 large files → ~15 smaller files |
| About-subpage accent DRY refactor | ~600 lines | 1 CSS file |
| Rich-text DRY extraction | ~500 lines | 2 CSS files |
| Orphaned content/ folder deletion | ~15 files | 10+ markdown files |
| Orphaned imports/ file deletion | ~9 files | 9 markdown/text/tsx files |
| Duplicate CSS removal (badge, skeleton) | ~150 lines | 2 CSS files |
| EbookPage.tsx splitting | Organisation only | 1 file → 5 files |
| About subpage TSX DRY refactor | ~1,500 lines | 16 TSX files |
| Category/tag page DRY refactor | ~800 lines | 8 TSX files |
| Data file splitting | Organisation only | 3 large files → ~20 smaller files |

**Total estimated line savings:** ~3,550 lines removed through DRY patterns
**Total estimated file reduction:** ~24 orphaned files deleted
**Total estimated file organisation:** ~28 files reorganised into smaller, focused units

---

## Appendix: Execution log

### T05 — About-subpage accent CSS custom properties (Completed March 2)

**Before:** 1,140 lines with 16 duplicate per-page accent blocks
**After:** ~480 lines with one set of generic accent rules + 16 one-line modifier declarations
**Lines removed:** ~660
**Approach:** Introduced `--accent-rgb`, `--accent-text`, `--accent-full` CSS custom properties on `.about-subpage` with per-page modifiers. All accent-dependent elements (hero gradient, badge, fact-label, pull-quote, step-number, chapter-number, destination hover/icon/region) reference these generics. Lucy page kept as exception (two-stop gradient). Book cover and ebook excerpts kept hardcoded pink (intentional — they represent the physical book).

### T06 — Rich-text extraction (Investigated, deferred)

**Finding:** Blog (`.rich-text-content`) and portfolio (`.portfolio-rich-text`) rich-text themes share structural patterns (headings, paragraphs, lists, links, code, blockquotes) but differ substantially in decorative details:
- Different bullet characters (★ vs ◆)
- Different h2 underline decorations (pink bar vs diamond chain)
- Different blockquote treatments (solid border vs gradient + diamond pseudo-element)
- Different accent colour systems (blog=blue/pink/yellow; portfolio=green/cyan/purple)

Shared structural overlap is ~50 lines, not the ~500 originally estimated. The decorative differences are intentional thematic identities, not accidental duplication. **Decision: keep separate.**

### T07 — AboutSubpageLayout wrapper (Investigated, deferred)

**Finding:** The 16 about subpages fall into 5 complexity tiers:
- **Tier 1** (hero + sections only): Berlin — 1 page
- **Tier 2** (hero + PullQuote + sections): Partners — 1 page  
- **Tier 3** (hero + PullQuote + StatCard + sections): ADHD, Aquarius, Fitness — 3 pages
- **Tier 4** (hero + StatCard + sections): Bio — 1 page
- **Tier 5** (complex custom sections): Cycling, LightSpeed, Tribes, Book, Podcast, Travels, Process, Lucy, Education, Music — 10 pages (use Timeline, Accordion, custom grids, grouped tribes, episode previews, etc.)

A wrapper component could consolidate Tiers 1-4 (6 pages, ~390 lines saved) but would require render props for the varying middle content. Tier 5 pages (10 of 16) have too much custom middleware to benefit. **Revised estimate: ~390 lines** (down from ~1,500 original).

Note: `HistoryPage` and `ManifestoPage` use their OWN CSS classes (`history-page`, `manifesto-page`), not `about-subpage` — they cannot be included in any about-subpage wrapper.

### T08 — ArchiveListPage wrapper (Investigated, deferred)

**Finding:** The 8 category/tag archive pages are more diverse than initially estimated:

| Difference | Category pages | Tag pages |
|---|---|---|
| Filter UI | Full `ArchiveFilters` component | Inline sort pills + related tags |
| Navigation | Category toggle → route change | Related tag chips → route change |
| State | `activeCategories` + `sortBy` | `sortBy` only |

Each content type also has unique card rendering:
- **Blog**: `blog-card` with image, category badge, title, excerpt, date, readTime
- **Video**: `video-card` with thumbnail, play button, duration, meta
- **Podcast**: `podcast-card` with cover, play overlay, episode badge, category chip
- **Portfolio**: `portfolio-card` with image overlay, clickable category link

The CSS class namespaces differ completely (`blog-list-view`, `videos-page`, `podcasts-archive`, `portfolio-main`). A shared wrapper would need so many config props that it would be harder to maintain than the current duplicates.

**Revised estimate: ~320 lines** (down from ~800). **Recommended alternative:** Extract per-content-type archive card components to deduplicate the ~40 lines of card JSX shared between each category/tag pair.

Also identified: `BlogCategoryPage.tsx` uses ES6 arrow functions throughout (violates Figma Make bundler constraints). Needs syntax fix to named function expressions regardless of wrapper work.

### T11 — Blog page CSS split (Completed March 2)

**Before:** 1 file (`blog-page.css`, 1,060 lines)
**After:** 3 files:
- `blog-list.css` (238 lines) — listing grid, cards, header
- `blog-article.css` (822 lines) — single post, rich text, engagement, author, pagination
- `blog-page.css` (barrel, 10 lines) — `@import` of both files

**Approach:** Clean split at the natural boundary between list view and article view (line 239). The barrel file using CSS `@import` preserves all 7 existing component imports (`BlogPage`, `BlogCategoryPage`, `BlogTagPage`, `BlogPostPage`, `VideoDetailPage`, `PodcastDetailPage`, `StyleGuidePage`) without requiring any TSX changes.

### T13 — Sticker lightbox CSS extraction (Completed March 2)

**Before:** 1 file (`stickers-page.css`, 724 lines)
**After:** 2 files:
- `stickers-page.css` (535 lines) — gallery grid, polaroid cards, search/filter controls
- `sticker-lightbox.css` (189 lines) — lightbox overlay, polaroid, nav, close button, counter

**Approach:** Extracted the entire lightbox overlay block (lines 517-705) into a dedicated file. Added import to `StickersPage.tsx`. Clean separation since lightbox styles are a self-contained BEM block.

### Bundler constraint fixes (Completed March 2)

**BlogCategoryPage.tsx** (v1.0.0 → v1.1.0): Migrated from ES6 arrow functions, destructuring, and template literals to bundler-safe named function expressions, `var` declarations, and string concatenation. All 12 arrow functions replaced, 2 destructuring patterns removed, 3 template literals converted.

**BlogTagPage.tsx** (v1.0.0 → v1.1.0): Same migration. 8 arrow functions replaced, 1 destructuring pattern removed, 2 template literals converted, 1 nullish coalescing (`||`) converted to explicit ternary.

**Remaining:** `BlogPostPage.tsx` still has 3 destructuring violations (custom hook returns on lines 62, 63, 72). These require understanding the hook return types to refactor safely — flagged for next session.

### T09 — Ebook CSS 5-way split (Completed March 3)

**Before:** 1 file (`ebook.css`, 1,695 lines)
**After:** 6 files:
- `ebook-base.css` (378 lines) — reader shell, hero, single/spread views, page surface, page number, typography custom properties
- `ebook-navigation.css` (209 lines) — 3D page curl flip animations, click zones, unified nav bar, page counter, reading progress bar
- `ebook-page-types.css` (463 lines) — cover, back cover, inside front, title page, dedication, epigraph, TOC (with parts), foreword/afterword, chapter start, part title/appendix, chapter content, shared paragraph, about author
- `ebook-drawer.css` (261 lines) — chapter jump drawer backdrop, panel (mobile bottom-sheet / desktop side panel), header, list items, section headers, active indicator, collapsible groups
- `ebook-responsive.css` (382 lines) — prefers-reduced-motion, 6 legibility-first breakpoint tiers (320px through 1440px+), fullscreen close button, floating settings button with pulse animation
- `ebook.css` (barrel, 16 lines) — `@import` of all 5 modules

**Approach:** Mapped all 43 section headers in the file to identify 5 natural domain boundaries. Each split file is a self-contained BEM block or functional concern. The barrel file preserves the single `EbookPage.tsx` import with zero TSX changes required. This was the largest remaining CSS file in the project.

### T10 — Style guide page CSS 5-way split (Completed March 3)

**Before:** 1 file (`style-guide-page.css`, 1,803 lines)
**After:** 6 files:
- `style-guide-base.css` (~120 lines) — block container, hero (with gradient overlay), section scaffolding (header, title, description, subsection title)
- `style-guide-tokens.css` (~407 lines) — branding grid (logo wraps, favicon), colour swatches (grid, WCAG contrast badges, neutrals), gradients (animated preview), typography (type list, type meta/label/token, font family cards)
- `style-guide-elements.css` (~378 lines) — buttons (group, section label), icon grid (category title, hover glow), custom icons, spacing (bar chart visualisation), border radius (preview + label), shadows, social links, text gradient previews, reduced motion
- `style-guide-components.css` (~515 lines) — animations (card, preview, toggle with active state), chips/badges (group, row, variant label), card variants (showcase, mock card, info panel, token code), form elements (input, textarea, select with chevron, checkbox with checkmark pseudo-element)
- `style-guide-patterns.css` (~290 lines) — archive filters demo (props table), theme comparison (light/dark panels with mock card, buttons, chips, input)
- `style-guide-page.css` (barrel, 16 lines) — `@import` of all 5 modules

**Approach:** Mapped all 23 section headers to identify 5 domain-based boundaries. The split follows a progression from structure (base) → design tokens → atomic elements → composite components → page-level patterns. The barrel preserves the single `StyleGuidePage.tsx` import. This was the second largest CSS file (1,803 lines) and completes the entire P2 CSS splitting tier.

### T14 — EbookPage.tsx component split (Completed March 3)

**Before:** 1 file (`EbookPage.tsx`, 1,297 lines)
**After:** 5 files in `/components/pages/about/`:
- `ebook/ebookHelpers.ts` (~185 lines) — all pure logic: `ChapterEntry` and `DrawerGroup` interfaces, `SPREAD_BREAKPOINT`/`SWIPE_THRESHOLD`/`SWIPE_ANGLE_MAX` constants, `buildChapterIndex()`, `buildDrawerGroups()`, `buildSpreads()`, `pageToSpread()`, `spreadToPage()`, `useSpreadMode()` hook, `pageTypeClass()` helper. Pre-computed `chapterIndex` and `drawerGroups` module-level exports.
- `ebook/EbookPageContent.tsx` (~210 lines) — `PageContent` component with `switch` over all 13 page types (cover, back-cover, inside-front, title, dedication, epigraph, toc, foreword, afterword, chapter-start, part-title, appendix-title, chapter-content, about-author). All template literal concatenation converted to string concatenation. All arrow `.map()` callbacks converted to named function expressions.
- `ebook/EbookDrawer.tsx` (~105 lines) — `EbookDrawer` component with backdrop + aside + grouped collapsible chapter list. Props: `drawerOpen`, `onClose`, `drawerGroups`, `collapsedGroups`, `onToggleGroup`, `onJumpToPage`, `currentChapterIdx`. All bundler-safe patterns.
- `ebook/EbookReaderNav.tsx` (~90 lines) — `EbookReaderNav` component for bottom nav bar. Props: `pageLabel`, `isSpreadMode`, `isFullScreen`, `drawerOpen`, `disableBackward`, `disableForward`, 5 callback props. Renders chapters, prev/next, page counter, fullscreen toggle, and settings buttons.
- `EbookPage.tsx` (~710 lines, down from 1,297) — main component retaining: fullscreen management, page state, font size, minimal mode, touch swipe handlers, keyboard shortcuts, scroll passthrough, progress calculation, page label computation, auto-expand drawer logic, and the JSX shell composing all 4 extracted sub-components plus `EbookSettingsModal`.

**Reduction:** 1,297 → 710 lines in main file (45% reduction). Total code across all 5 files: ~1,300 lines (import overhead is ~3 lines net).

**Bundler safety:** All 4 extracted files use `var` declarations, named function expressions (no arrows in callbacks), string concatenation (no template literals), explicit `props.xxx` access (no destructuring), and classic `for` loops where applicable. The `useSpreadMode` hook in helpers uses `var` + array indexing on `useState` return to avoid destructuring.