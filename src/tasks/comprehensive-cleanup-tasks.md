# Comprehensive Cleanup - Task List

**Created:** February 25, 2026
**Last Updated:** February 25, 2026
**Source Prompt:** [orchestrator.md](../prompts/comprehensive-cleanup/orchestrator.md)
**Reports:** [/reports/comprehensive-cleanup/](../reports/comprehensive-cleanup/)

> Dedicated task list for the comprehensive cleanup audit. Critical items are also in the master [task-list.md](./task-list.md).

---

## From Audit 1: Root Compliance
- [x] `/dist/wordpress-export.json` — deleted (build artifact, not needed in source)
- [ ] `/theme.json` — decide: keep in root as WP reference OR relocate to `/docs/`

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

## Pending Audits (Not Yet Executed)
- [ ] Audit 4: Unused Imports Within Files — deeper per-file analysis needed
- [ ] Audit 5: CSS Hygiene — full 77-file scan of `/styles/blocks/`
- [ ] Audit 6: Folder Hygiene — stale artifacts review across all folders

---

## Completed
- [x] Audit 1: Root Compliance — [report](../reports/comprehensive-cleanup/01-root-compliance.md)
- [x] Audit 2: Orphaned Files — [report](../reports/comprehensive-cleanup/02-orphaned-files.md)
- [x] Audit 3: Deprecated Patterns — [report](../reports/comprehensive-cleanup/03-deprecated-patterns.md)
- [x] All Audit 1-3 remediation tasks completed — Feb 25, 2026
