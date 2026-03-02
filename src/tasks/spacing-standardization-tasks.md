# 📋 Spacing Standardization Task List

This task list is based on the [Spacing Standardization Audit Report](../reports/spacing-standardization/report.md).

## 🚀 Priority 1: Primary Layout Containers (Critical)
- [x] **Unify `BlogPage.tsx`:** Replace `container-7xl` with `container-wide` (lines 293, 306). ✅ Already complete
- [x] **Unify `ContactPage.tsx`:** Replace `container-7xl` with `container-wide` (line 58). ✅ Already complete
- [x] **Standardize `SitemapPage.tsx`:** Apply `container-wide` wrapper to main content sections. ✅ Already complete

## 📐 Priority 2: Semantic Padding (High)
- [x] **Update `About sub-pages` (CSS):** Replace hardcoded `clamp` in `about-subpage.css` with `var(--wp--preset--spacing--section-horizontal)` (lines 22, 88, 188, 240, 297, 445, 541, 744). ✅ Already complete
- [x] **Standardize `StyleGuidePage.tsx`:** Ensure all major sections use `section-spacing` and `px-horizontal-section`. ✅ Already complete
- [x] **Standardize `DevToolsPage.tsx`:** Apply `px-horizontal-section` to hero and jump-nav containers. ✅ Already complete

## 🧩 Priority 3: Block Gap & Rhythm (Medium)
- [x] **Update `legal-page.css`:** Replace `gap: 2rem` with `gap: var(--wp--preset--spacing--block-gap)` in `.legal-page-body` (line 25). ✅ Already complete
- [x] **Update `dev-tools-page.css`:** Replace `gap: var(--wp--preset--spacing--fluid-xl)` with `gap: var(--wp--preset--spacing--block-gap)` or helper (line 246). ✅ Already complete
- [x] **Update `about-page.css`:** Replace legacy gaps in `.about-landing__sections` with `var(--wp--preset--spacing--block-gap)`. ✅ COMPLETED March 2, 2026

## 🧹 Priority 4: Final Cleanup (Low)
- [x] **Review `InstagramFeed.tsx`:** Ensure consistent spacing with other homepage sections. ✅ Already compliant
- [x] **Review `FaqSection.tsx`:** Verify padding and gap standardization across all page contexts. ✅ Already compliant
- [x] **Verify Mobile Scaling:** Perform a final check on responsive behavior for all standardized containers. ✅ Verified

---
**Status Tracking:**
- 2026-03-02: Initial list created after audit.
- 2026-03-02: All tasks verified complete. Only `.about-landing__sections` gap updated from `fluid-xl` to `block-gap`.