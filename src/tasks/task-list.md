# Master Task List

**Created:** February 25, 2026
**Last Updated:** March 1, 2026 (18:30)
**Source Prompts:**
- [root-cleanup-audit.md](../prompts/root-cleanup-audit.md)
- [comprehensive-cleanup orchestrator](../prompts/comprehensive-cleanup/orchestrator.md)
- Content migration and ebook expansion (ongoing)

**Reports:**
- `/reports/root-cleanup/` — ~~8 reports~~ **Deleted March 1, 2026** (lifecycle rule: reports older than a few days; all items resolved)
- [/reports/comprehensive-cleanup/](../reports/comprehensive-cleanup/) — active

> This is the all-purpose general task list. **Do not delete this file.**

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

## Content Migration & Expansion (Ongoing)

### ✅ Phase 1: Content Organization (COMPLETE — March 1, 2026)
- [x] Break up `RESTORE-FROM-GIT.md` into organized content files
- [x] Create `/content/personal/` folder with 10 reference files:
  - `artists-lifestyle.md`, `berlin.md`, `cape-town.md`, `education.md`, `fitness.md`
  - `identity.md`, `lucy.md`, `profile.md`, `six-cats.md`, `thailand.md`
- [x] Create `/content/lightspeed/` folder with 5 reference files:
  - `company-history.md`, `internship.md`, `jose-abreu.md`, `team-workflow.md`, `team.md`
- [x] Create `/content/book/` folder with 1 file:
  - `this-one-time.md` (ebook master content)

### ✅ Phase 2: Ebook Expansion (COMPLETE — March 1, 2026)
- [x] Fix duplicate Chapter 18 entries in `/data/mock/pages/ebook-pages.ts`
- [x] Fix misplaced `ch17-content-2` block (merged into ch18-content-2)
- [x] Add **Chapter 19: Twenty-Three Years** (3 content pages, pages 65-68)
  - Content about LightSpeed's 23-year history sourced from `/content/lightspeed/company-history.md`
  - BarCamp Cape Town 2006 pivot story
  - Team evolution and WordPress community
  - Lessons from 23 years of entrepreneurship
- [x] Renumber "The Cumulative Effect" from Chapter 18 to **Chapter 20** (pages 69-71)
- [x] Add **Appendix B: The Tribes** (6 content pages, pages 76-81)
  - Global tribes: Psytrance/140 BPM, WordPress Community, Techno & House Music Scene
  - Location-specific tribes: Cape Town Psytrance, Berlin Club Scene, Cape Town WordPress/Tech, Trail Running, Mountain Biking, Triathlon
  - "The Overlap" section on multi-tribal identity
- [x] Update all page numbers for Afterword (72), Appendix A (73-75), About the Author (82)
- [x] Correct all company age references from "twenty-two years" to "twenty-three years"

**Ebook stats after expansion:**
- **Total pages:** 82 (was 69)
- **Chapters:** 20 (was 18, but one was duplicated)
- **Appendices:** 2 (was 1)
- **New content:** 13 pages added (3 for Chapter 19, 6 for Appendix B, 4 from page renumbering)

### 🔄 Phase 3: Content Audit & Website Updates (TODO)
- [ ] Audit `/content/` files against `/data/mock/pages/` to identify update opportunities
- [ ] Update `AboutPage`, `BerlinPage`, `LightSpeedPage`, `SixCatsPage` with new content from reference files
- [ ] Review `BioPage`, `HistoryPage`, `TravelsPage` for consistency with ebook content
- [ ] Update `/data/mock/pages/about-subpages.ts` with enhanced content
- [ ] Sync `/content/personal/berlin.md` with `/data/mock/pages/about-subpages.ts` Berlin section
- [ ] Sync `/content/lightspeed/company-history.md` with `/data/mock/pages/about-subpages.ts` LightSpeed section

### 🔄 Phase 4: Blog Topic Generation (TODO)
- [ ] Review ebook chapters for backdated blog post ideas
- [ ] Create blog post proposals from:
  - Chapter 10: Six Cats (May 2019 backdated post)
  - Chapter 11: Berlin Calling (July 2019 discovery backdated post)
  - Chapter 19: Twenty-Three Years (Jan 2026 retrospective post)
  - Appendix B: The Tribes (multi-part series idea)
- [ ] Draft 3-5 backdated blog posts for `/data/mock/blog/posts.ts`

### 🔄 Phase 5: Social Media Guidelines Update (TODO)
- [ ] Review `/content/social-profiles/` for updates needed
- [ ] Update social media voice/tone guidelines to reflect tribal identity
- [ ] Create content calendar templates for cross-platform posting

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