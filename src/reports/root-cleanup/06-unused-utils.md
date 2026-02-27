# Audit Report: Unused Utility & Service Files

**Date:** February 25, 2026
**Prompt:** [root-cleanup-audit.md](../../prompts/root-cleanup-audit.md)
**Guidelines:** [Guidelines.md](../../guidelines/Guidelines.md)

---

## Findings

### `/utils/` Files Inventory

| File | Status | Imported By |
|---|---|---|
| `analyticsService.ts` | **ACTIVE** | Multiple components via useAnalytics hook |
| `contentCounts.ts` | **ACTIVE** | 10+ components (MegaMenus, pages, SitemapPage) |
| `extensionErrorSuppressor.ts` | **ACTIVE** | main.tsx |
| `faqSchema.ts` | **ACTIVE** | FaqSection, FAQ pages |
| `formatDate.ts` | **ACTIVE** | Multiple detail/list pages |
| `imageManifest.ts` | **ACTIVE** | OptimizedImage.tsx |
| `imageOptimizer.ts` | **ACTIVE** | OptimizedImage.tsx, useOptimizedImage hook |
| `portfolioService.ts` | **ACTIVE** | Portfolio pages |
| `pwaService.ts` | **ACTIVE** | main.tsx |
| `schemaService.ts` | **ACTIVE** | Multiple pages (Schema.org JSON-LD) |
| `searchService.ts` | **ACTIVE** | SearchResultsPage |
| `seo.ts` | **ACTIVE** | All pages (setSEO utility) |
| `simpleMarkdown.ts` | **ACTIVE** | BlogPostPage, PortfolioDetailPage, VideoDetailPage, PodcastDetailPage |

### `/utils/supabase/` Subfolder

| File | Status | Notes |
|---|---|---|
| `info.tsx` | **REVIEW** | Supabase integration info - needs verification |

### Assessment

All utility files in `/utils/` are actively imported. No orphaned utilities found.

---

## Actions

- [ ] Review `/utils/supabase/info.tsx` - verify if actively needed or can be removed
- [ ] No other deletions needed in `/utils/`
