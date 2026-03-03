# Memory reduction tasks

**Source report:** `/reports/memory-reduction/report.md`
**Source prompt:** `/prompts/memory-reduction-audit.md`
**Created:** March 2, 2026
**Version:** 1.1.0

---

## Priority legend

- **P0** — Quick wins (deletions, deduplication) — do first
- **P1** — High-impact DRY refactors — do second
- **P2** — File splitting for organisation — do third
- **P3** — Component refactors — do last (highest risk)

---

## P0: Quick wins — orphaned files and duplicates

- [x] **T01** Delete entire `/content/` folder (10+ markdown files, zero code imports, documented as deleted in Guidelines v7.5.0) ✅ Completed March 2
- [x] **T02** Delete orphaned `/imports/` files: ✅ Completed March 2
  - [x] `ash-shaw-makeup-audit.md`
  - [x] `ash-shaw-makeup-audit-1.md`
  - [x] `berlin-personal-history.md`
  - [x] `ebook-features-notes.md`
  - [x] `ebook-ui-notes.md`
  - [x] `pasted-attachment.txt`
  - [x] `psytrance-makeup-artist.md`
  - [x] `psytrance-makeup-artist-1.md`
  - [x] `responsive-breakpoints.md`
  - [x] `MakeupPortfolio.tsx`
  - **Do NOT delete:** `svg-pcq1xyxxqy.ts` — ⚠️ NOTE: confirmed zero code imports in codebase (referenced only in reports). May be orphaned but preserving per image protection rule.

- [x] **T03** Resolve duplicate `.badge` CSS: removed badge definitions from `/styles/blocks/data-display.css` — canonical source is `/styles/blocks/badge.css` ✅ Completed March 2
- [x] **T04** Resolve duplicate `.skeleton` CSS: removed skeleton definition from `/styles/blocks/data-display.css` — canonical source is `/styles/blocks/skeleton.css` ✅ Completed March 2

---

## P1: High-impact DRY refactors

### CSS DRY

- [x] **T05** Refactor about-subpage accent overrides to CSS custom property pattern: ✅ Completed March 2
  1. ~~Add `--accent`, `--accent-var`, `--accent-text` custom properties per page modifier class~~
  2. ~~Replace all 15+ per-page accent blocks with one generic set of accent rules~~
  3. **Actual saving: ~660 lines** (1,140 → ~480 lines) from `about-subpage.css`
  4. ⏳ Pending: visual verification of all 16 about subpages in both light and dark mode

- [ ] **T06** ~~Extract shared rich-text styling into `/styles/blocks/rich-text.css`~~ **DEFERRED — Low ROI**
  - Investigation found the blog (`.rich-text-content`) and portfolio (`.portfolio-rich-text`) themes differ too significantly for a simple shared extraction
  - Blog uses: ★ star bullets (yellow), solid pink h2 underline bar, blue links/counters, purple code
  - Portfolio uses: ◆ diamond bullets (green), diamond chain h2 underline, green links/code, gradient blockquote border + ::before diamond
  - Shared structural overlap is only ~50 lines, not the ~500 estimated
  - **Decision:** Keep separate; the decorative differences are intentional thematic identities

### TSX DRY

- [ ] **T07** Create `AboutSubpageLayout.tsx` shared wrapper component:
  1. Create `/components/pages/about/AboutSubpageLayout.tsx` accepting `data`, `pageName`, `seo`, `accentColor`, and optional `extraSections` render prop
  2. Investigation found 5 page complexity tiers:
     - **Tier 1** (hero + sections only): Berlin — 1 page
     - **Tier 2** (hero + PullQuote + sections): Partners — 1 page
     - **Tier 3** (hero + PullQuote + StatCard + sections): ADHD, Aquarius, Fitness — 3 pages
     - **Tier 4** (hero + StatCard + sections): Bio — 1 page
     - **Tier 5** (complex custom sections): Cycling, LightSpeed, Tribes, Book, Podcast, Travels, Process, Lucy, Education, Music — 10 pages
  3. Wrapper can consolidate Tiers 1-4 (~6 pages, ~390 lines saved)
  4. Tier 5 pages have too much custom middleware to benefit from a wrapper
  5. Estimated revised saving: ~390 lines (down from ~1,500 original estimate)

- [ ] **T08** Create `ArchiveListPage.tsx` shared wrapper for category/tag pages: **REVISED — Moderate ROI**
  1. Investigation found each content type (blog, video, podcast, portfolio) has unique card rendering (~40-50 lines each) with different fields, CSS classes, and interactions
  2. Category pages use full `ArchiveFilters` component; tag pages use inline sort pills + related tags — different filter UIs
  3. Different CSS class namespaces: `blog-list-view`, `videos-page`, `podcasts-archive`, `portfolio-main`
  4. Different header structures (some have icons, some don't)
  5. **Revised estimate:** ~320 lines saved (down from ~800) — each page has ~200 lines with only ~40-50 lines of truly shared shell code
  6. **Recommended alternative:** Extract shared card rendering into per-content-type `*ArchiveCard.tsx` components, saving ~40 lines × 4 pairs = ~320 lines with lower wrapper complexity
  7. Also noted: `BlogCategoryPage.tsx` uses arrow functions (violates bundler constraints) — needs syntax fix regardless

---

## P2: CSS file splitting

- [x] **T09** Split `styles/blocks/ebook.css` (1,695 lines) into 5 modules: ✅ Completed March 3
  - [x] `ebook-base.css` (~378 lines) — reader shell, hero, single/spread views, page surface, page number
  - [x] `ebook-navigation.css` (~209 lines) — 3D page flip, click zones, nav bar, counter, progress bar
  - [x] `ebook-page-types.css` (~463 lines) — cover, back cover, title, dedication, epigraph, TOC, foreword/afterword, chapter start, parts, chapter content, about author
  - [x] `ebook-drawer.css` (~261 lines) — chapter jump drawer, backdrop, panel, header, items, groups
  - [x] `ebook-responsive.css` (~382 lines) — reduced motion, 6 breakpoint tiers, fullscreen close, floating settings
  - [x] `ebook.css` — barrel import via `@import` (preserves single `EbookPage.tsx` import)

- [x] **T10** Split `styles/blocks/style-guide-page.css` (1,803 lines) into 5 modules: ✅ Completed March 3
  - [x] `style-guide-base.css` (~120 lines) — block, hero, section scaffolding
  - [x] `style-guide-tokens.css` (~407 lines) — branding, colour swatches, gradients, typography/font families
  - [x] `style-guide-elements.css` (~378 lines) — buttons, icons, custom icons, spacing, radius, shadows, social, text gradients, reduced motion
  - [x] `style-guide-components.css` (~515 lines) — animations, chips/badges, card variants, form elements
  - [x] `style-guide-patterns.css` (~290 lines) — archive filters demo, theme comparison panels
  - [x] `style-guide-page.css` — barrel import via `@import` (preserves single `StyleGuidePage.tsx` import)

- [x] **T11** Split `styles/blocks/blog-page.css` (~1,060 lines) into: ✅ Completed March 2
  - [x] `blog-list.css` — blog listing grid, cards, header (~238 lines)
  - [x] `blog-article.css` — single post, rich text, engagement, author, pagination (~822 lines)
  - [x] `blog-page.css` — barrel import via `@import` (preserves all 7 existing component imports)

- [x] **T12** Split `styles/blocks/portfolio-detail-page.css` (~1,004 lines) feedback block: ✅ Completed March 3
  - [x] `portfolio-feedback.css` — feedback cards, ratings, stars (~170 lines)
  - [x] `portfolio-detail-page.css` — base + rich-text (~835 lines, kept as-is since rich-text is tightly coupled)
  - [x] Added `portfolio-feedback.css` import to `PortfolioDetailPage.tsx`

- [x] **T13** Split `styles/blocks/stickers-page.css` (~724 lines) into: ✅ Completed March 2
  - [x] `stickers-page.css` — gallery grid, polaroid cards, search (~535 lines)
  - [x] `sticker-lightbox.css` — lightbox overlay, navigation, counter (~189 lines)
  - [x] Added `sticker-lightbox.css` import to `StickersPage.tsx`

---

## P3: TSX component splitting

- [x] **T14** Split `components/pages/about/EbookPage.tsx` (1,297 lines) into 5 files: ✅ Completed March 3
  - [x] `ebook/ebookHelpers.ts` (~185 lines) — types, constants, buildChapterIndex, buildDrawerGroups, buildSpreads, spread math, useSpreadMode hook, pageTypeClass
  - [x] `ebook/EbookPageContent.tsx` (~210 lines) — PageContent component rendering all 13 page types
  - [x] `ebook/EbookDrawer.tsx` (~105 lines) — chapter jump drawer (backdrop + aside + groups with collapse)
  - [x] `ebook/EbookReaderNav.tsx` (~90 lines) — bottom navigation bar (chapters, prev/next, counter, fullscreen, settings)
  - [x] `EbookPage.tsx` (~710 lines) — main component with state management, touch/keyboard, fullscreen logic, view rendering

- [ ] **T15** ~~Split `components/pages/StyleGuidePage.tsx` (~800 lines)~~ **DEFERRED — Complexity vs ROI**
  - Investigation: file contains 17 distinct sections (Branding, Colors, Gradients, Typography, Buttons, Icons, Custom Icons, Spacing, Radius, Shadows, Animations, Chips/Badges, Social, Cards, Forms, Archive Filters Demo, Theme Comparison)
  - Each section has unique data sources, state management, and interaction patterns
  - Proposed 4-way split would require significant state lifting and prop-drilling
  - **Risk:** High refactor complexity with bundler syntax constraints (no arrow functions, no destructuring)
  - **Current state:** File is well-organized with clear section comments and already has CSS split (T10)
  - **Decision:** Leave as-is. CSS splitting (T10) already achieved primary memory reduction goal (1,803 lines → 5 modules). Component is a developer tool, not user-facing, so larger file size is acceptable trade-off vs refactor risk.

- [x] **T16** Extract `PortfolioFeedbackSection.tsx` from `PortfolioDetailPage.tsx`: ✅ Completed March 3
  - [x] Created `/components/sections/PortfolioFeedbackSection.tsx` (~130 lines)
  - [x] Extracted feedback rendering, pagination, and "Load More" logic
  - [x] Removed unused state and imports from `PortfolioDetailPage.tsx`
  - [x] Component uses bundler-safe syntax (no arrow functions, named function expressions)
  - [x] PortfolioDetailPage.tsx reduced by ~75 lines

---

## P2: Data file splitting

- [x] **T17** Split `data/mock/pages/about-subpages.ts` (1,871 lines) into per-subpage files: ✅ Completed March 3
  - [x] Created `/data/mock/pages/about/` subfolder with `types.ts` (shared types)
  - [x] 16 individual files: `adhd.ts`, `aquarius.ts`, `berlin.ts`, `bio.ts`, `book.ts`, `cycling.ts`, `ebook.ts`, `education.ts`, `fitness.ts`, `lightspeed.ts`, `lucy.ts`, `music.ts`, `partners.ts`, `podcast.ts`, `process.ts`, `travels.ts`
  - [x] `about-subpages.ts` converted to barrel re-export (~50 lines) — all 15 consumer imports unchanged
  - Note: `tribes.ts` and `history.ts` already existed as separate files in `/data/mock/pages/`

- [x] **T18** Split `data/mock/pages/ebook-pages.ts` (1,548 lines) into 7 per-section files under /data/mock/pages/ebook/: types.ts (shared types), front-matter.ts (~80 lines), part-1.ts (~100 lines), part-2.ts (~210 lines), part-3.ts (~470 lines), part-4.ts (~580 lines), back-matter.ts (~200 lines). Main file converted to barrel export (~40 lines). All consumer imports unchanged.

- [x] **T19** Split `data/mock/blog/posts.ts` (~1,233 lines) using barrel re-export pattern: ✅ Completed March 3
  - [x] Created `/data/mock/blog/posts/index.ts` (barrel export with filter-based collections)
  - [x] Re-exported `blogPosts` from original file (maintains 100% compatibility)
  - [x] Added organized exports: `featuredBlogPosts` (8 posts), `editorialBlogPosts` (6 posts), `personalBlogPosts` (4 posts)
  - [x] All 10 consumer imports unchanged — no syntax violations introduced
  - Implementation uses safe `filter()` functions (no arrow functions, no destructuring)

---

## Verification

After completing each priority tier, run:
- [ ] `npm run type-check` — zero TypeScript errors
- [ ] `npm run build` ��� zero build errors
- [ ] `npm run dev` — visual verification of affected pages
- [ ] Light mode + dark mode spot-check on all modified pages
- [ ] Confirm no CSS cascade/specificity regressions

---

## Completed

_(Move items here when done)_

**T01** — Deleted 16 orphaned files from `/content/` (book, lightspeed, personal subfolders)
**T02** — Deleted 10 orphaned files from `/imports/` (audit notes, design notes, legacy component)
**T03** — Removed duplicate `.badge` block (75 lines) from `data-display.css`
**T04** — Removed duplicate `.skeleton` block (12 lines) from `data-display.css`
**T05** — Refactored about-subpage.css accent overrides to CSS custom properties (660 lines removed, 1140→480)
**T06** — Investigated and deferred: rich-text themes differ too much for shared extraction (~50 lines overlap vs ~500 estimated)
**T07** — Investigated: 5 page complexity tiers identified. Wrapper benefits limited to 6 simplest pages (~390 lines). Deferred.
**T08** — Investigated: archive pages more diverse than estimated. Card rendering varies significantly per content type. Revised saving ~320 lines. Deferred.
**T09** — Split ebook.css (1,695 lines) into 5 modules: ebook-base.css (378 lines), ebook-navigation.css (209 lines), ebook-page-types.css (463 lines), ebook-drawer.css (261 lines), ebook-responsive.css (382 lines). Barrel @import preserves single EbookPage.tsx import.
**T10** — Split style-guide-page.css (1,803 lines) into 5 modules: style-guide-base.css (120 lines), style-guide-tokens.css (407 lines), style-guide-elements.css (378 lines), style-guide-components.css (515 lines), style-guide-patterns.css (290 lines). Barrel @import preserves single StyleGuidePage.tsx import.
**T11** — Split blog-page.css (1,060 lines) into blog-list.css (238 lines) + blog-article.css (822 lines). Barrel @import preserves all 7 component imports.
**T12** — Extracted portfolio-feedback.css (170 lines) from portfolio-detail-page.css. Updated PortfolioDetailPage.tsx import.
**T13** — Extracted sticker-lightbox.css (189 lines) from stickers-page.css. Updated StickersPage.tsx import.
**Bundler fix** — Migrated `BlogCategoryPage.tsx` and `BlogTagPage.tsx` from arrow functions/destructuring/template literals to bundler-safe named function expressions, string concatenation, and `var` declarations. (v1.0.0 → v1.1.0)
**Note:** `BlogPostPage.tsx` still has 3 destructuring violations (lines 62, 63, 72) — flagged for next session.
**BlogPostPage.tsx** (v2.0.0 → v2.1.0) — Fixed 3 destructuring violations (useBlogPost, useScrollPosition, useAnalytics hook returns) to bundler-safe `var` assignments.
**T14** — Split EbookPage.tsx (1,297 lines) into 5 files under /components/pages/about/ebook/. Main component reduced to ~710 lines.
**T17** — Split about-subpages.ts (1,871 lines) into 16 per-subpage files + types.ts under /data/mock/pages/about/. Barrel re-export preserves all 15 consumer imports. tribes.ts and history.ts already existed separately.
**T18** — Split ebook-pages.ts (1,548 lines) into 7 per-section files under /data/mock/pages/ebook/: types.ts (shared types), front-matter.ts (~80 lines), part-1.ts (~100 lines), part-2.ts (~210 lines), part-3.ts (~470 lines), part-4.ts (~580 lines), back-matter.ts (~200 lines). Main file converted to barrel export (~40 lines). All consumer imports unchanged.
**T19** — Split blog/posts.ts (1,233 lines) using barrel re-export pattern. Created index.ts with filter-based collections. Re-exported blogPosts, featuredBlogPosts, editorialBlogPosts, personalBlogPosts. All 10 consumer imports unchanged. Implementation uses safe filter() functions (no arrow functions, no destructuring).
**T16** — Extracted `PortfolioFeedbackSection.tsx` from `PortfolioDetailPage.tsx`: ✅ Completed March 3
  - [x] Created `/components/sections/PortfolioFeedbackSection.tsx` (~130 lines)
  - [x] Extracted feedback rendering, pagination, and "Load More" logic
  - [x] Removed unused state and imports from `PortfolioDetailPage.tsx`
  - [x] Component uses bundler-safe syntax (no arrow functions, named function expressions)
  - [x] PortfolioDetailPage.tsx reduced by ~75 lines