# Master Task List

**Created:** February 25, 2026
**Last Updated:** March 2, 2026 (18:00)
**Source Prompts:**
- [root-cleanup-audit.md](../prompts/root-cleanup-audit.md)
- [comprehensive-cleanup orchestrator](../prompts/comprehensive-cleanup/orchestrator.md)
- Content migration and ebook expansion (ongoing)
- [content-expansion-phase6 orchestrator](../prompts/content-expansion-phase6/orchestrator.md)
- [design-system-audit-full.md](../prompts/design-system-audit-full.md)
**Reports:**
- `/reports/root-cleanup/` — _(archived March 1, 2026)_
- `/reports/comprehensive-cleanup/` — _(archived March 2, 2026)_
- `/reports/content-expansion/` — _(archived March 2, 2026)_
- `/reports/content-audit-phase3/` — _(archived March 2, 2026)_
- `/reports/content-expansion-phase6/` — ✅ **COMPLETE** (all 4 sub-audits done, QA 13/13 PASS, documentation updated)
- `/reports/design-system-audit/` — _(archived March 2, 2026)_
- `/reports/accessibility-audit/` — retained as reference (protected `/about/journey/` page documentation)

**📊 Project Status:** ✅ **AUDIT-CLEAN, FEATURE-COMPLETE, CONTENT-EXPANDED**

**📖 Full status summary:** See `/docs/project-status-march-2026.md`

---

## Design System Audit — March 2, 2026

> Source: [/reports/design-system-audit/report.md](../reports/design-system-audit/report.md)
> Prompt: [/prompts/design-system-audit-full.md](../prompts/design-system-audit-full.md)
> 9 violations found (0 Critical · 3 High · 4 Medium · 2 Low) · 8 accepted exceptions

### P1 High — Fix `p-[0px]` Tailwind arbitrary values (V-02, V-03)

**Status:** ✅ DONE — March 2, 2026
**Files:** `/components/pages/blog/BlogPage.tsx`, `/components/pages/portfolio/PortfolioDetailPage.tsx`

- [x] **`BlogPage.tsx:338`** — removed `p-[0px]`; added `padding: 0` to `.blog-preview__grid` in `/styles/blocks/blog-page.css`
- [x] **`PortfolioDetailPage.tsx:466`** — replaced `p-[0px]` with `.portfolio-feedback__container` BEM class; added `padding: 0` rule to `/styles/blocks/portfolio-detail-page.css`

---

### P1 High — Add `prefers-reduced-motion` transition suppression to priority block CSS files (V-04)

**Status:** ✅ DONE — March 2, 2026
**Files:** `/styles/blocks/` — 8 files checked, 2 fixed, 6 confirmed already compliant

- [x] `/styles/blocks/header.css` — confirmed: 2 existing `prefers-reduced-motion` blocks ✅
- [x] `/styles/blocks/mega-menu.css` — confirmed: 1 existing block ✅
- [x] `/styles/blocks/portfolio-card.css` — **FIXED**: added comprehensive `@media (prefers-reduced-motion: reduce)` block (13 rules covering all card transitions and transforms)
- [x] `/styles/blocks/stickers-page.css` — confirmed: 2 existing blocks ✅
- [x] `/styles/blocks/blog-page.css` — confirmed: 1 existing block ✅
- [x] `/styles/blocks/videos-page.css` — **FIXED**: added `@media (prefers-reduced-motion: reduce)` block (6 rules covering card and link transitions)
- [x] `/styles/blocks/footer.css` — confirmed: 1 existing block ✅
- [x] `/styles/blocks/enhanced-lightbox.css` — confirmed: 1 existing block ✅

---

### P2 Medium — Move hardcoded author bio to mock data (V-05, V-08)

**Status:** ✅ DONE — March 2, 2026
**Files:** `/components/pages/blog/BlogPostPage.tsx`, `/data/mock/pages/blog.ts`

- [x] Added `authorBio` export to `/data/mock/pages/blog.ts` with `name`, `bio`, and `socials` fields (URLs only — icons stay in component as code concerns)
- [x] Imported `authorBio` in `BlogPostPage.tsx`; `AUTHOR_PROFILE` constant now sources `name`, `bio`, and social `url`/`name` from mock data; `avatar` (figma:asset) and social icons (Camera, ExternalLink) remain as component-level code
- [x] Updated stale "Hardcoded as requested" comment to "Author Section — content from /data/mock/pages/blog.ts authorBio"
- [x] All data field values are in sentence case

---

### P2 Medium — Replace sitemap dynamic inline `backgroundColor` with token-based CSS class lookup (V-07)

**Status:** ✅ DONE — March 2, 2026
**Files:** `/data/mock/blog/categories.ts`, `/data/mock/podcasts/categories.ts`

- [x] All 5 blog category `color` fields updated from raw hex to neon CSS variable strings:
  - `makeup-tips` → `var(--wp--preset--color--neon-pink)`
  - `tutorials` → `var(--wp--preset--color--neon-purple)`
  - `festival-tips` → `var(--wp--preset--color--neon-orange)`
  - `travel` → `var(--wp--preset--color--neon-cyan)`
  - `education` → `var(--wp--preset--color--neon-blue)`
- [x] Podcast `introduction` category color updated: `#FF10F0` → `var(--wp--preset--color--neon-pink)`
- [x] `SitemapPage.tsx` inline `style={{ backgroundColor: cat.color }}` pattern retained — now correctly passes CSS variable strings from data (no raw hex leaks into rendered attributes); `NEON_DOT_COLORS` array already used token strings — confirmed already compliant

---

### P3 Low — Replace hardcoded hex in `SocialLinks.tsx` with CSS token (V-01)

**Status:** ✅ DONE — March 2, 2026
**File:** `/components/common/SocialLinks.tsx:74`

- [x] `"#ffffff"` replaced with `"var(--wp--preset--color--base)"` in `iconFill` logic — resolves to white in both themes via the CSS custom property

---

### P3 Low — Replace `text-center` utility with BEM modifier on portfolio detail page (V-06)

**Status:** ✅ DONE — March 2, 2026
**Files:** `/components/pages/portfolio/PortfolioDetailPage.tsx`, `/styles/blocks/portfolio-detail-page.css`, `/data/mock/ui/portfolio.ts`

- [x] Added `.portfolio-feedback__heading { text-align: center; }` to `portfolio-detail-page.css`
- [x] Replaced `className="text-section-h2 text-center mb-fluid-lg"` with `className="text-section-h2 portfolio-feedback__heading mb-fluid-lg"` in `PortfolioDetailPage.tsx`
- [x] Bonus: hardcoded `"What People Say"` string migrated to `portfolioUI.detail.sections.feedback.heading` in `/data/mock/ui/portfolio.ts` (sentence case: "What people say")

---

### Passive Monitor — Protected files with known exceptions

**Status:** No action required — monitor only

- [ ] `/components/figma/ImageWithFallback.tsx` — Tailwind classes (`flex items-center justify-center w-full h-full`) — **protected file, cannot modify**
- [ ] `/components/pages/about/EbookPage.tsx` — dynamic inline transform and progress width — **accepted pattern, no CSS alternative**
- [ ] Dev-tool pages (`StyleGuidePage`, `PlaygroundPage`, `AnalyticsDashboardPage`) — inline styles for live token demos — **accepted dev-tool context**

---

## Critical Priority (Bundler / Build Breaks)

- [x] Bundler compatibility scan - all forbidden syntax eliminated _(report archived)_
- [ ] Monitor `/components/figma/ImageWithFallback.tsx` - contains `??` but is a **protected file** (cannot modify) — passive monitor only, no action needed
- [ ] Scan for `new Set<>()` generics in `.tsx` files if bundler errors recur — reactive only, no current errors

---

## High Priority (Orphaned Code Cleanup)

### ~~Orphaned `/content/` Folder (20 files, zero imports)~~ ✅ DONE
- [x] Delete entire `/content/` folder — all 25 files deleted — Feb 25, 2026

### ~~Deprecated `useContentful` Hook Migration~~ ✅ DONE
- [x] Migrate `BlogPreviewSection.tsx:13` — `useContentful` to `useContent`
- [x] Migrate `HomePage.tsx:18` — `useContentful` to `useContent`
- [x] Migrate `AboutPage.tsx:23` — `useContentful` to `useContent`
- [x] Migrate `BlogPage.tsx:13` — `useContentful` to `useContent`
- [x] Migrate `BlogPostPage.tsx:13` — `useContentful` to `useContent`
- [x] Update guideline references: `overview-components.md`, `PortfolioCard.md`, `BlogCard.md` — Contentful → WordPress/useContent
- [x] Delete `/hooks/useContentful.ts` after all migrations complete

---

## Medium Priority (Code Quality)

### UI Primitives Decision ✅ DECIDED
- [x] **Decision: Option A — Keep all 45 shadcn stubs.** Rationale: deleting would cascade into CSS orphan issues (`data-display.css`, `skeleton.css`, `misc-ui.css`, `form-elements.css` are only imported by stubs); project is feature-complete; stubs are tree-shaken from production bundle (zero imports from active code); `utils.ts` must be retained regardless as `pagination.tsx` (active) imports from it.

### CSS Audit ✅ COMPLETE
- [x] Run comprehensive CSS import scan — **87 files scanned, zero orphans** — full results in [Audit 5 report](../reports/comprehensive-cleanup/05-css-hygiene.md) — March 1, 2026

### Build Artifacts & Config ✅ ALL RESOLVED
- [x] `/dist/wordpress-export.json` — deleted (build artifact) — Feb 25, 2026
- [x] `/theme.json` — **Keep at root** (standard WP spec location; `.json` files are not subject to the root `.md` restriction rule) — March 1, 2026
- [x] Update stale Tailwind comment in `postcss.config.js` — updated to reflect Tailwind V4 Vite plugin architecture and BEM-only styling — March 1, 2026
- [x] Review `/utils/supabase/info.tsx` for active usage — confirmed deployment artifact, keep _(report archived)_ — Feb 25, 2026

### Remaining Comprehensive Cleanup Audits ✅ ALL COMPLETE
- [x] Audit 4: Unused Imports Within Files — [report](../reports/comprehensive-cleanup/04-unused-imports.md) — March 1, 2026
- [x] Audit 5: CSS Hygiene — full 87-file scan complete, zero orphans — [report](../reports/comprehensive-cleanup/05-css-hygiene.md) — March 1, 2026
- [x] Audit 6: Folder Hygiene — [report](../reports/comprehensive-cleanup/06-folder-hygiene.md) — March 1, 2026

---

## Content Migration & Expansion — Status Summary

**All 5 phases complete!** (March 2, 2026)

**Phase 6 COMPLETE:** All content implemented, QA passed, documentation updated (v8.1.0)

### Phase completion timeline:
- ✅ **Phase 1:** Content Organization — March 1, 2026
- ✅ **Phase 2:** Ebook Expansion (82 pages, 20 chapters, 2 appendices) — March 1, 2026
- ✅ **Phase 3:** Content Audit & Website Updates (8 errors fixed) — March 2, 2026
- ✅ **Phase 4:** Blog Topic Generation (4 backdated posts, 11 total) — March 2, 2026
- ✅ **Phase 5:** Social Media Guidelines (comprehensive voice guide + calendar templates) — March 2, 2026
- ✅ **Phase 6:** Multi-Content Expansion — March 2, 2026
  - 18 portfolio entries (42 total), 7 blog posts (18 total), 10 videos (11 total), 13 stickers (40 total)
  - Header light mode fix applied
  - QA: 13/13 data integrity tests passed, 0 critical issues
  - Documentation: README v8.1.0, CHANGELOG [8.1.0], /data/README v3.0.0

**Total deliverables:**
- 82-page ebook with 20 chapters + 2 appendices
- 18 blog posts (7 new backdated from ebook content in Phase 6)
- 11 videos (10 new backdated in Phase 6)
- 42 portfolio entries (18 new in Phase 6 — baseline corrected from 20 to 24 original)
- 40 sticker designs (13 new in Phase 6)
- 8 factual errors corrected across Berlin, Bio, and LightSpeed pages
- 2 comprehensive social media strategy documents (guidelines + calendar template)
- Header light mode nav link contrast fix (WCAG AA)

---

## Low Priority (Documentation)

- [x] Update `/guidelines/overview-components.md` to remove Contentful references — Feb 25, 2026
- [x] Verify all guideline cross-references are accurate after cleanup — **3 stale references found and fixed** — March 1, 2026:
  - `Guidelines.md` — Content Folder Protection Rule updated to reflect deletion; file structure diagram updated
  - `sections/BlogPreviewSection.md` — `useContentful` code example updated to `useContent`
  - `wordpress-migration-guide.md` — `/dist/wordpress-export.json` reference updated to note deletion and regeneration steps

---

## Completed

_Archive completed tasks here for reference._

- [x] Guidelines v7.1.0 — workflow folder conventions added — Feb 25, 2026
- [x] Guidelines v7.2.0 — root directory restrictions, `/docs/` and `/scripts/` folders added — Feb 25, 2026
- [x] Guidelines v7.3.0 — Default AI Workflow section added — Feb 25, 2026
- [x] `/prompts/` folder restored with `root-cleanup-audit.md` orchestrator prompt — Feb 25, 2026
- [x] `/prompts/comprehensive-cleanup/orchestrator.md` created — Feb 25, 2026
- [x] `/reports/root-cleanup/` created with 8 audit reports — Feb 25, 2026
- [x] `/reports/comprehensive-cleanup/` created with 3 audit reports — Feb 25, 2026
- [x] `/tasks/task-list.md` created as master task list — Feb 25, 2026
- [x] `/docs/Attributions.md` created (copy of root-protected file) — Feb 25, 2026
- [x] Bundler compatibility audit completed — all clear _(report archived)_
- [x] Utilities audit completed — all active _(report archived)_
- [x] Supabase stubs reviewed — deployment artifacts, keep _(report archived)_
- [x] Root .md compliance verified — only README.md + protected Attributions.md remain — Feb 25, 2026
- [x] `import.meta.env` verified removed — only comments remain — Feb 25, 2026
- [x] Console logging policy verified compliant — Feb 25, 2026
- [x] Inline styles audited — CSS custom property injection is acceptable pattern — Feb 25, 2026
- [x] `/data/schema.md` relocated to `/docs/cms-field-mapping.md` — Feb 25, 2026
- [x] Guidelines v7.3.0 updated with `/docs/` folder rule (rule #7) and CMS field mapping reference — Feb 25, 2026
- [x] `/CHANGELOG.md` created in project root following Keep a Changelog v1.1.0 format (protected file) — Feb 25, 2026
- [x] `/guidelines/changelog.md` created with format rules, writing standards, and protection policies — Feb 25, 2026
- [x] Guidelines promoted to v7.4.0 with changelog protection and Section 10 "Protected Root Files" — Feb 25, 2026
- [x] **`useContentful` → `useContent` migration** — all 5 component files migrated — Feb 25, 2026
- [x] **`/hooks/useContentful.ts` deleted** — deprecated re-export shim removed — Feb 25, 2026
- [x] **`/content/` folder deleted** — 25 orphaned files across 5 subfolders removed — Feb 25, 2026
- [x] **`/dist/wordpress-export.json` deleted** — stale build artifact removed — Feb 25, 2026
- [x] **Guideline docs updated** — `overview-components.md`, `PortfolioCard.md`, `BlogCard.md` updated from Contentful → WordPress/useContent — Feb 25, 2026
- [x] **Comprehensive Cleanup Audits 4–6** — unused imports, CSS hygiene (87 files, zero orphans), folder hygiene — March 1, 2026
- [x] **Contact Page sticker migration** — `contactGraphic` added to `sticker-graphics.ts` as `makeup-artist` entry (#27); `OptimizedImage` removed from `ContactPage.tsx`; FAQ section moved full-width below two-column grid — March 1, 2026
- [x] **Post-audit follow-ups** — all 4 open items resolved: `.contact-page-faq-inline` removed, dev-tools deep scan complete (2 fixes), `Guidelines.md` legacy exception documented, `/theme.json` root placement confirmed — March 1, 2026
- [x] **Guideline cross-reference verification** — 3 stale references fixed across Guidelines.md, BlogPreviewSection.md, wordpress-migration-guide.md — March 1, 2026
- [x] **postcss.config.js** — stale Tailwind comment corrected to reflect V4 Vite plugin + BEM-only architecture — March 1, 2026
- [x] **UI Primitives Decision** — Option A (keep all 45 shadcn stubs): CSS cascade dependency confirmed, project feature-complete, stubs are tree-shaken — March 1, 2026
- [x] **Content Organization (Phase 1)** — broke up `RESTORE-FROM-GIT.md` into 16 organized reference files across `/content/personal/` (10 files), `/content/lightspeed/` (5 files), `/content/book/` (1 file) — March 1, 2026
- [x] **Ebook Expansion (Phase 2)** — added Chapter 19 "Twenty-Three Years" (3 pages), renumbered Chapter 20 "The Cumulative Effect", added Appendix B "The Tribes" (6 pages covering global + location-specific tribes); fixed duplicate Chapter 18 entries; updated all page numbers; total ebook now 82 pages — March 1, 2026