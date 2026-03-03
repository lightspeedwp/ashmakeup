# 📋 Bundler Compatibility & Stability Task List

This task list defines the next steps for stabilizing the Ash Shaw Makeup Portfolio for the v8.2.0 release and Headless WordPress migration.

## ✅ Phase 7 Content Verification (Completed)
- [x] Verify all 5 new blog posts are present in `/data/mock/blog/posts.ts`.
- [x] Audit cat bios for accuracy in `/data/mock/pages/six-cats.ts`.
- [x] Check LightSpeed story updates for BarCamp 2006 correction.

## 🔴 High Priority: Bundler Compatibility Cleanup (Immediate)
- [ ] **Fix `BlogPage.tsx`:** 
  - [ ] Memoize `useBlogPosts` options with `useMemo`.
  - [ ] Replace all props/variable destructuring with explicit access.
  - [ ] Convert all arrow functions in JSX to named function expressions.
  - [ ] Replace template literals with string concatenation.
- [ ] **Fix `BlogPreviewSection.tsx`:**
  - [ ] Memoize `useBlogPosts` options.
  - [ ] Replace props/variable destructuring with explicit access.
  - [ ] Convert all arrow functions in JSX to named function expressions.
  - [ ] Replace template literals with string concatenation.
- [ ] **Fix `PortfolioMainPage.tsx`:**
  - [ ] Standardize on named function expressions in all props.
  - [ ] Remove destructuring in `useEffect` and component props.

## 🟠 Medium Priority: Hook Stabilization (Next)
- [ ] Update `useContent.ts` to ensure `USE_WORDPRESS` is reliably handled (though currently false).
- [ ] Check `useWordPress.ts` for any remaining arrow functions or destructuring.
- [ ] Ensure all content hooks in `useMockData.ts` use stable dependencies.

## 🟢 Low Priority: Narrative Consistency
- [ ] Audit new blog posts for sentence case in headings.
- [ ] Double-check `Attributions.md` for any new Phase 7 image sources.

---
*Created: March 3, 2026*
*Source: [/reports/bundler-compatibility/audit-report-march-3-2026.md](../reports/bundler-compatibility/audit-report-march-3-2026.md)*
