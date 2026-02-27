# Master Task List

**Created:** February 25, 2026
**Last Updated:** February 25, 2026
**Source Prompts:**
- [root-cleanup-audit.md](../prompts/root-cleanup-audit.md)
- [comprehensive-cleanup orchestrator](../prompts/comprehensive-cleanup/orchestrator.md)

**Reports:**
- [/reports/root-cleanup/](../reports/root-cleanup/)
- [/reports/comprehensive-cleanup/](../reports/comprehensive-cleanup/)

> This is the all-purpose general task list. **Do not delete this file.**

---

## Critical Priority (Bundler / Build Breaks)

- [x] Bundler compatibility scan - all forbidden syntax eliminated (see [report](../reports/root-cleanup/07-bundler-compatibility.md))
- [ ] Monitor `/components/figma/ImageWithFallback.tsx` - contains `??` but is a **protected file** (cannot modify)
- [ ] Scan for `new Set<>()` generics in `.tsx` files if bundler errors recur

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

### UI Primitives Decision
- [ ] **Decision needed:** Keep or delete ~45 unused shadcn-style stubs in `/components/ui/` (see [report](../reports/root-cleanup/04-unused-ui-primitives.md))
  - Option A: Keep as protected UI library (no action)
  - Option B: Delete all unused stubs to reduce codebase size

### CSS Audit (Deeper Pass Needed)
- [ ] Run comprehensive CSS import scan for all 77 files in `/styles/blocks/` (see [report](../reports/root-cleanup/05-unused-css.md))

### Build Artifacts & Config
- [x] `/dist/wordpress-export.json` — deleted (build artifact) — Feb 25, 2026
- [ ] `/theme.json` — keep as WP reference or relocate to `/docs/`
- [ ] Update stale Tailwind comment in `postcss.config.js`
- [ ] Review `/utils/supabase/info.tsx` for active usage (see [report](../reports/root-cleanup/08-supabase-stubs.md))

### Remaining Comprehensive Cleanup Audits
- [ ] Audit 4: Unused Imports Within Files — deeper per-file analysis needed
- [ ] Audit 5: CSS Hygiene — full 77-file scan of `/styles/blocks/`
- [ ] Audit 6: Folder Hygiene — stale artifacts review across all folders

---

## Low Priority (Documentation)

- [x] Update `/guidelines/overview-components.md` to remove Contentful references — Feb 25, 2026
- [ ] Verify all guideline cross-references are accurate after cleanup

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
- [x] Bundler compatibility audit completed — all clear (see [report](../reports/root-cleanup/07-bundler-compatibility.md))
- [x] Utilities audit completed — all active (see [report](../reports/root-cleanup/06-unused-utils.md))
- [x] Supabase stubs reviewed — deployment artifacts, keep (see [report](../reports/root-cleanup/08-supabase-stubs.md))
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
