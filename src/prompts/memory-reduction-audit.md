# Memory reduction audit

**Purpose:** Identify and resolve memory bloat across CSS, TSX components, data files, and SVGs by splitting large files, removing unused layers, flattening complexity, and applying DRY patterns.

**Version:** 1.0.0
**Created:** March 2, 2026

---

## Scope

This audit covers four areas of memory reduction:

### 1. Break up large files into smaller ones

**CSS files to review (by size priority):**
- `/styles/blocks/style-guide-page.css` (~1,800 lines)
- `/styles/blocks/ebook.css` (~1,695 lines)
- `/styles/blocks/about-subpage.css` (~1,200 lines)
- `/styles/blocks/portfolio-detail-page.css` (~1,020 lines)
- `/styles/blocks/blog-page.css` (~1,000 lines)
- `/styles/globals.css` (~865 lines)
- `/styles/blocks/stickers-page.css` (~700 lines)
- `/styles/blocks/about-page.css` (~532 lines)
- `/styles/blocks/hidden-about.css` (~500 lines)

**TSX components to review:**
- `/components/pages/about/EbookPage.tsx` (~1,297 lines)
- `/components/pages/portfolio/PortfolioDetailPage.tsx` (~600 lines)
- `/components/pages/StyleGuidePage.tsx` (~500+ lines)
- `/components/pages/blog/BlogPage.tsx` (~400+ lines)
- `/components/pages/StickersPage.tsx` (~400+ lines)
- `/components/common/Header.tsx` (~470 lines)

**Data files to review:**
- `/data/mock/pages/about-subpages.ts` (~2,100 lines)
- `/data/mock/pages/ebook-pages.ts` (~1,550 lines)
- `/data/mock/blog/posts.ts` (~1,000 lines)
- `/data/mock/seo.ts` (~600 lines)

**Steps:**
1. Read each file and identify logical split points (sections, features, page-specific overrides).
2. Propose specific file splits with new filenames.
3. Identify shared/reusable patterns that can be extracted (e.g. rich-text theming, dark/light accent patterns).
4. Verify no circular dependencies would be introduced.

### 2. Clean up layers and components

**Steps:**
1. Scan for unused component imports across the codebase.
2. Identify deeply nested JSX structures (3+ levels of wrapper divs with no semantic purpose).
3. Check for hidden/conditional elements that are never rendered (dead branches).
4. Review the `/content/` folder — [Guidelines.md](../guidelines/Guidelines.md) declares it deleted (Feb 25, 2026) but files still exist.
5. Check for orphaned CSS classes (defined in CSS but never referenced in TSX).
6. Review `/imports/` for unused markdown files and legacy attachments.
7. Count the 93 CSS block files and identify candidates for consolidation (files under 50 lines).

### 3. Flatten complex SVGs and vector shapes

**Steps:**
1. Scan `/imports/` for SVG files and measure their complexity (path count, nesting depth).
2. Review the 5 icon set files (`/lib/icons-set-a.tsx` through `icons-set-e.tsx`) for SVG path complexity.
3. Check `/components/common/ColorfulIcons.tsx` for complex inline SVGs.
4. Identify SVGs with excessive groups, transforms, or nested elements that can be flattened.
5. Check the inline SVG noise overlay in `/components/common/RootLayout.tsx`.

### 4. Trim component variants and apply DRY patterns

**Steps:**
1. Review the 16+ about subpages for shared pattern extraction (hero, breadcrumbs, chapters, pull-quotes, stats).
2. Examine the per-page accent colour overrides in `about-subpage.css` (~40-60 lines each for 15+ pages) — can these be driven by a single CSS custom property per page?
3. Check for repeated dark/light mode pattern pairs that could use CSS custom properties.
4. Identify components that duplicate logic (e.g. `BlogCategoryPage` / `BlogTagPage`, `VideoCategoryPage` / `VideoTagPage`).
5. Review the portfolio category pages for shared patterns.
6. Assess whether `blog-page.css` and `portfolio-detail-page.css` share rich-text styling that could be extracted to a shared `rich-text.css`.

---

## References

- [Guidelines.md](../guidelines/Guidelines.md) — Project standards and file organisation rules
- [CSS Architecture](../guidelines/css-architecture.md) — BEM naming and file structure
- [Component Overview](../guidelines/overview-components.md) — Component hierarchy
- [Data System README](../data/README.md) — Mock data structure

## Output

- **Report:** `/reports/memory-reduction/report.md`
- **Task list:** `/tasks/memory-reduction-tasks.md`
