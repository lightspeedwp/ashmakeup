# Media Library image breakpoint verification

**Date:** March 3, 2026
**Scope:** All image-rendering components across all breakpoints (320px–1920px+)
**Auditor:** AI (automated)
**Result:** 1 bug fixed, 2 improvements applied, 2 accepted patterns documented

---

## Summary

Audited all components that render images (blog cards, portfolio cards, mega menus, hero mosaics, lightbox, stickers, videos) against the 10-breakpoint responsive grid system (320px–1920px+). All images scale correctly at every breakpoint via CSS `aspect-ratio`, `object-fit: cover`, and responsive grid column changes.

---

## Bug fixed

### B-01: BlogPostPage share image URL used `.url` instead of `.src`
- **File:** `/components/pages/blog/BlogPostPage.tsx:395`
- **Issue:** `post.featuredImage.url` always resolved to `undefined` — the `BlogImage` type defines `.src`, not `.url`
- **Impact:** Open Graph and Twitter Card image metadata was empty for all blog posts
- **Fix:** Changed to `post.featuredImage.src`

---

## Improvements applied

### I-01: Lightbox main image now uses `preset="lightbox"`
- **File:** `/components/ui/EnhancedLightbox.tsx:313`
- **Before:** `<PortfolioImage>` with no preset → raw image at original resolution
- **After:** `preset="lightbox"` → Canvas-optimized with `sizes="100vw"` hint
- **Impact:** Lightbox images now go through the optimization pipeline

### I-02: Mega menu images now have `decoding="async"`
- **Files:** `BlogMegaMenu.tsx`, `PortfolioMegaMenu.tsx`
- **Before:** Raw `<img>` with `loading="lazy"` but no `decoding` attribute
- **After:** Added `decoding="async"` to all 4 `<img>` tags (2 per mega menu)
- **Impact:** Prevents image decode from blocking main thread

---

## Accepted patterns (no change needed)

### A-01: PortfolioCard uses `background-image` pattern
- **File:** `/components/ui/PortfolioCard.tsx:194`
- **Pattern:** `style={{ backgroundImage: url(...) }}` with `useOptimizedImage` hook
- **Why accepted:** Image is pre-optimized via Canvas API with `preset: 'thumbnail'`; CSS `background-size: cover` handles responsive display; swipe navigation requires this pattern
- **Breakpoint behaviour:** Container aspect-ratio 16/9 scales correctly through all 10 breakpoints

### A-02: Hero mosaic uses inline `background-image`
- **File:** `/components/sections/HeroLayout.tsx:172`
- **Pattern:** `background-image: url(...)` on CSS Grid cells
- **Why accepted:** Mosaic layout uses overlapping CSS Grid positioning (3 tiles in 12×12 grid); no native `<img>` alternative preserves this layout; `background-size: cover` and responsive `@media` rules handle all breakpoints
- **Breakpoint behaviour:** Container max-width 500px on mobile, expands to 500px height at 1024px+

---

## Responsive grid verification (all PASS)

| Breakpoint | Blog Cards | Portfolio Cards | Mega Menu | Hero | Lightbox |
|---|---|---|---|---|---|
| 320px (compact) | 1 col ✅ | 1 col ✅ | Hidden ✅ | 500px max ✅ | Fullscreen ✅ |
| 480px (mobile) | 1 col ✅ | 1 col ✅ | Hidden ✅ | 500px max ✅ | Fullscreen ✅ |
| 600px (small) | 2 col ✅ | 2 col ✅ | Hidden ✅ | 500px max ✅ | Fullscreen ✅ |
| 768px (tablet) | 2 col ✅ | 2 col ✅ | 3-col dropdown ✅ | 500px max ✅ | Fullscreen ✅ |
| 1024px (landscape) | 3 col ✅ | 3 col ✅ | 3-col dropdown ✅ | 500px height ✅ | Fullscreen ✅ |
| 1280px (wide) | 3 col ✅ | 3 col ✅ | 3-col dropdown ✅ | 500px height ✅ | Fullscreen ✅ |
| 1440px (desktop) | 3 col ✅ | 4 col ✅ | 3-col dropdown ✅ | 500px height ✅ | Fullscreen ✅ |
| 1568px (wide) | 3 col ✅ | 4 col ✅ | 3-col dropdown ✅ | 500px height ✅ | Fullscreen ✅ |
| 1800px (XL) | 3 col ✅ | 5 col ✅ | 3-col dropdown ✅ | 500px height ✅ | Fullscreen ✅ |
| 1920px (FHD) | 3 col ✅ | 5 col ✅ | 3-col dropdown ✅ | 500px height ✅ | Fullscreen ✅ |

---

## Image optimization pipeline summary

| Component | Image Element | Optimization | Preset | Lazy | Sizes Hint |
|---|---|---|---|---|---|
| Blog cards | `<OptimizedImage>` | Canvas API | `thumbnail` | ✅ | `(max-width: 640px) 480px, 480px` |
| Blog article | `<OptimizedImage>` | Canvas API | `content` | ✅ | `(max-width: 768px) 100vw, 800px` |
| Portfolio cat/tag | `<OptimizedImage>` | Canvas API | `thumbnail` | ✅ | `(max-width: 640px) 480px, 480px` |
| Portfolio card | `background-image` | `useOptimizedImage` | `thumbnail` | CSS | N/A |
| Lightbox main | `<PortfolioImage>` | Canvas API | `lightbox` ✅ | ✅ | `100vw` |
| Lightbox thumb | `<PortfolioImage>` | Canvas API | `thumbnail` | ✅ | `(max-width: 640px) 480px, 480px` |
| Mega menu featured | Raw `<img>` | None | N/A | ✅ | N/A |
| Mega menu thumb | Raw `<img>` | None | N/A | ✅ | N/A |
| Hero mosaic | `background-image` | None | N/A | CSS | N/A |
| Stickers | `<OptimizedImage>` | Canvas API | varies | ✅ | varies |
| Videos | `<OptimizedImage>` | Canvas API | varies | ✅ | varies |
| Logo | Raw `<img>` | None | N/A | `eager` ✅ | N/A |

---

**Last Updated:** March 3, 2026
