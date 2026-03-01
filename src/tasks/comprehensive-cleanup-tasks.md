# Comprehensive Cleanup - Task List

**Created:** February 25, 2026
**Last Updated:** March 1, 2026
**Source Prompt:** [orchestrator.md](../prompts/comprehensive-cleanup/orchestrator.md)
**Reports:** [/reports/comprehensive-cleanup/](../reports/comprehensive-cleanup/)

> Dedicated task list for the comprehensive cleanup audit. Critical items are also in the master [task-list.md](./task-list.md).

---

## From Audit 1: Root Compliance
- [x] `/dist/wordpress-export.json` — deleted (build artifact, not needed in source)
- [x] `/theme.json` — **Keep at root** (standard WP spec location; `.json` files are not subject to the root `.md` restriction rule) — March 1, 2026

## From Audit 2: Orphaned Files
- [x] Delete entire `/content/` folder (20 orphaned files, zero imports) — deleted Feb 25, 2026
- [x] Migrate 5 `useContentful` imports to `useContent` — completed Feb 25, 2026
- [x] Delete `/hooks/useContentful.ts` after migration — deleted Feb 25, 2026
- [x] Review `/data/schema.md` — relocated to `/docs/cms-field-mapping.md` (done previously)

## From Audit 3: Deprecated Patterns
- [x] `BlogPreviewSection.tsx:13` — changed `useContentful` to `useContent`
- [x] `HomePage.tsx:18` — changed `useContentful` to `useContent`
- [x] `AboutPage.tsx:23` — changed `useContentful` to `useContent`
- [x] `BlogPage.tsx:13` — changed `useContentful` to `useContent`
- [x] `BlogPostPage.tsx:13` — changed `useContentful` to `useContent`
- [x] Update `/guidelines/overview-components.md` — Contentful → WordPress/useContent
- [x] Update `/guidelines/components/PortfolioCard.md` — Contentful → WordPress/useContent
- [x] Update `/guidelines/components/BlogCard.md` — Contentful → WordPress/useContent (bonus)

## From Audits 4–6: Post-Audit Follow-ups
- [x] `/theme.json` — **Keep at root** _(resolved above in Audit 1)_
- [x] Deep scan of all 22 dev-tools pages for unused utility/hook imports — **Complete.** 2 issues found and fixed: `Tag`, `Heart`, `Mic` removed from `CardSpecimenPage.tsx`; `takeScreenshotNote` + `useCallback` removed from `VisualRegressionTesterPage.tsx`. Full results in [Audit 4 report (updated)](../reports/comprehensive-cleanup/04-unused-imports.md) — March 1, 2026
- [x] Confirm `.contact-page-faq-inline` class is no longer used; remove from `contact-page.css` if confirmed — **Confirmed unused** (zero hits across all `.tsx` files). Rule removed from `contact-page.css` — March 1, 2026
- [x] Archive `/reports/root-cleanup/` once UI primitives decision (task 04) and deep CSS scan (task 05) are resolved — **Both prerequisites met.** All 8 reports deleted per the "delete reports older than a few days" lifecycle rule. Master task list updated to note archival — March 1, 2026
- [x] Confirm `Guidelines.md` root placement is intentional (legacy exception) — add note to root restriction rule — **Done.** Legacy exception bullet added to root restriction rule in `/guidelines/Guidelines.md`. `Guidelines.md` is the Figma Make platform-level file; exempt from folder restriction by platform convention — March 1, 2026

---

## Completed

- [x] Audit 1: Root Compliance — [report](../reports/comprehensive-cleanup/01-root-compliance.md) — Feb 25, 2026
- [x] Audit 2: Orphaned Files — [report](../reports/comprehensive-cleanup/02-orphaned-files.md) — Feb 25, 2026
- [x] Audit 3: Deprecated Patterns — [report](../reports/comprehensive-cleanup/03-deprecated-patterns.md) — Feb 25, 2026
- [x] All Audit 1–3 remediation tasks completed — Feb 25, 2026
- [x] Audit 4: Unused Imports — [report](../reports/comprehensive-cleanup/04-unused-imports.md) — March 1, 2026
- [x] Audit 5: CSS Hygiene — 87 files scanned, zero orphans — [report](../reports/comprehensive-cleanup/05-css-hygiene.md) — March 1, 2026
- [x] Audit 6: Folder Hygiene — [report](../reports/comprehensive-cleanup/06-folder-hygiene.md) — March 1, 2026
- [x] All post-audit follow-up tasks resolved — March 1, 2026
- [x] `/reports/root-cleanup/` archived (8 reports deleted, lifecycle rule applied) — March 1, 2026
