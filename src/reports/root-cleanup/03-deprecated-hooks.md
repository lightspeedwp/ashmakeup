# Audit Report: Deprecated Hook Migration

**Date:** February 25, 2026
**Prompt:** [root-cleanup-audit.md](../../prompts/root-cleanup-audit.md)
**Guidelines:** [Guidelines.md](../../guidelines/Guidelines.md)

---

## Findings

### `/hooks/useContentful.ts` - Deprecated Re-export

The file contains only:
```typescript
// @deprecated - Use @/hooks/useContent instead
export * from './useContent';
```

It re-exports everything from `useContent.ts` for backward compatibility.

### Components Still Importing from `useContentful`

| Component | Import |
|---|---|
| `/components/sections/BlogPreviewSection.tsx` | `useBlogPosts` |
| `/components/pages/home/HomePage.tsx` | `useHomepageContent` |
| `/components/pages/about/AboutPage.tsx` | `useAboutPageContent` |
| `/components/pages/blog/BlogPage.tsx` | `useBlogPosts` |
| `/components/pages/blog/BlogPostPage.tsx` | `useBlogPost` |

**5 components** still import from the deprecated `useContentful` hook.

### Guideline References

The following guideline files also reference `useContentful`:
- `/guidelines/overview-components.md` (3 references)
- `/guidelines/components/PortfolioCard.md` (2 references)

---

## Migration Plan

1. Update all 5 component imports: change `useContentful` to `useContent`
2. Update guideline documentation references
3. Delete `/hooks/useContentful.ts`

---

## Actions

- [ ] Migrate `BlogPreviewSection.tsx`: `useContentful` -> `useContent`
- [ ] Migrate `HomePage.tsx`: `useContentful` -> `useContent`
- [ ] Migrate `AboutPage.tsx`: `useContentful` -> `useContent`
- [ ] Migrate `BlogPage.tsx`: `useContentful` -> `useContent`
- [ ] Migrate `BlogPostPage.tsx`: `useContentful` -> `useContent`
- [ ] Update `/guidelines/overview-components.md` references
- [ ] Update `/guidelines/components/PortfolioCard.md` references
- [ ] Delete `/hooks/useContentful.ts`
