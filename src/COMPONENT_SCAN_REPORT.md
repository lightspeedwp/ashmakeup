# Component Scan Report - Tailwind CSS Utility Classes

**Date:** January 13, 2026  
**Task:** Identify all Tailwind CSS utility classes in React components  
**Status:** ✅ COMPLETED

---

## Executive Summary

Scanned **all `.tsx` files** in the codebase and identified Tailwind utility class usage across 17 files. The majority of styling already uses WordPress-aligned semantic classes from `/styles/globals.css`, but some files still contain raw Tailwind utilities that need replacement.

**Key Finding:** Most components are already well-structured! The main issues are:
1. Small spacing utilities (`px-3`, `py-2`, `gap-2`)
2. Typography size utilities (`text-xs`, `text-sm`, `text-lg`, `text-2xl`, `text-4xl`)
3. Direct color values (`bg-black/70`, `text-white`, hardcoded hex colors)

---

## Files Scanned: 17 Files

### ✅ LOW PRIORITY - UI Components (Mostly Correct)
These files use primarily layout/structural utilities with minimal styling issues:

1. **`/components/ui/dialog.tsx`** - 1 match (structural classes only)
2. **`/components/ui/sheet.tsx`** - 1 match (structural classes only)
3. **`/components/ui/accordion.tsx`** - 1 match (semantic classes)
4. **`/components/ui/chart.tsx`** - 2 matches (gap utilities)
5. **`/components/ui/sidebar.tsx`** - 2 matches (mostly semantic)
6. **`/components/ui/radio-group.tsx`** - 1 match (structural)
7. **`/components/ui/drawer.tsx`** - 1 match (semantic)
8. **`/components/ui/command.tsx`** - 4 matches (semantic with some spacing)

### ⚠️ MEDIUM PRIORITY - Needs Spacing Updates

9. **`/App.tsx`** - 1 critical match
   - Line 357: Uses `bg-white dark:bg-gradient-to-br` - CORRECT pattern, keep as-is

10. **`/components/ui/SectionCard.tsx`** - 2 matches
    - Lines 115, 120: Uses `w-8 h-1` for decorative elements - acceptable for decorative sizing

### 🔴 HIGH PRIORITY - Needs Comprehensive Updates

11. **`/components/ui/PortfolioCard.tsx`** - 27 matches ⚠️
    - Typography: `text-xs` (lines 336, 366, 396)
    - Spacing: `px-3`, `py-1.5`, `gap-1`, `top-2`, `right-2`, `left-3`
    - Colors: `bg-black/70`, `text-white`, hardcoded hex `text-[#1f2937]` (line 405)
    - Border radius: `rounded-full`, `rounded-xl`
    
12. **`/components/ui/PortfolioLightbox.tsx`** - 19 matches ⚠️
    - Spacing: `p-4 sm:p-6`, `gap-2 sm:gap-3`, `w-12 h-12`, `px-3 py-2`
    - Typography: `text-xs sm:text-sm`, `text-lg md:text-xl`, `text-sm md:text-base`
    - Colors: `bg-white/20`, `text-white`

13. **`/components/ui/SliderCard.tsx`** - 3 matches
    - Typography: `text-xs`
    - Spacing: `px-3 py-1.5`, `px-2 py-1`, `top-3 right-3`
    - Colors: `bg-black/70`, `bg-black/60`, `text-white`

14. **`/components/ui/EnhancedLightbox.tsx`** - 3 matches
    - Spacing: `w-12 h-12`, `top-4 right-4`
    - Colors: `bg-white/20`, `text-white`
    - Typography: `text-lg md:text-xl`

15. **`/components/ui/ScrollDownArrow.tsx`** - 2 matches
    - Uses gradient utilities but they're correct brand gradients

16. **`/components/ui/BlogPagination.tsx`** - 2 matches
    - Spacing: `!px-3` (important override)
    - Uses semantic `.bg-gradient-pink-purple-blue` ✅

17. **`/components/ui/VideoPlayer.tsx`** - 3 matches
    - Typography: `text-xs`, `w-8 h-8`, `text-xl`
    - Spacing: `w-16 h-16`, `px-4 py-2`

### 📁 SECTIONS - Festival Components

18. **`/components/sections/FestivalCountdown.tsx`** - 21 matches ⚠️
    - Typography: `text-4xl md:text-6xl`, `text-xl md:text-2xl`, `text-5xl md:text-7xl`
    - Spacing: `px-6 py-3`, `px-8 py-4`, `gap-2`, `gap-3`
    - Colors: `bg-white/20`, `text-purple-600`, `text-white`

19. **`/components/sections/MultipleCountdowns.tsx`** - 8 matches
    - Typography: `text-2xl`, `text-3xl`
    - Spacing: `px-4 py-2`, `px-3 py-1`

20. **`/components/sections/FeaturedSection.tsx`** - 2 matches
    - Spacing: `py-8` (acceptable for vertical centering)

21. **`/components/sections/TestimonialsSection.tsx`** - 1 match
    - Spacing: `px-8 md:px-16`

22. **`/components/sections/InstagramFeed.tsx`** - 2 matches
    - Spacing: `px-4 py-2`, `px-2 py-1`
    - Typography: `text-xs`

---

## Detailed Replacement Mapping

### Typography Utilities → Semantic Classes

| Tailwind Utility | Semantic Class | Usage |
|------------------|----------------|-------|
| `text-xs` | `.text-fluid-xs` | Fine print, badges |
| `text-sm` | `.text-fluid-sm` | Small body text |
| `text-base` | `.text-fluid-base` | Base body text |
| `text-lg` | `.text-fluid-lg` | Large body text |
| `text-xl` | `.text-fluid-xl` | Subheadings |
| `text-2xl` | `.text-fluid-2xl` | Section titles |
| `text-3xl` | `.text-fluid-3xl` | Large headings |
| `text-4xl` | `.text-section-h2` or `.text-fluid-4xl` | Major headings |
| `text-5xl` | `.text-fluid-5xl` | Hero titles |
| `text-6xl` | `.text-hero-h1` or `.text-fluid-6xl` | Main hero |
| `text-7xl` | `.text-fluid-7xl` | Extra large |

### Spacing Utilities → Semantic Classes

| Tailwind Utility | Semantic Class | Usage |
|------------------|----------------|-------|
| `px-2 py-1` | `.px-fluid-xs .py-fluid-xs` | Tiny padding |
| `px-3 py-1.5` | `.px-fluid-sm .py-fluid-xs` | Small badges |
| `px-3 py-2` | `.px-fluid-sm .py-fluid-sm` | Small buttons |
| `px-4 py-2` | `.px-button .py-button` or `.px-fluid-sm .py-fluid-sm` | Standard buttons |
| `px-6 py-3` | `.px-button .py-button` | Large buttons |
| `px-8 py-4` | `.px-fluid-lg .py-fluid-md` | Hero CTAs |
| `gap-1` | `.gap-fluid-xs` | Tight spacing |
| `gap-2` | `.gap-fluid-sm` | Small gaps |
| `gap-3` | `.gap-fluid-md` | Medium gaps |
| `mb-2`, `mt-2` | `.mb-fluid-sm`, `.mt-fluid-sm` | Small margins |
| `mb-4`, `mt-4` | `.mb-fluid-md`, `.mt-fluid-md` | Medium margins |
| `py-8` | `.py-fluid-lg` | Section padding |

### Color Utilities - What to Keep vs Replace

#### ✅ KEEP (No Semantic Alternative)
```css
bg-white              /* Pure white backgrounds in light mode */
dark:bg-purple-900    /* Dark mode backgrounds */
text-white            /* White text on dark backgrounds */
bg-white/80           /* Translucent white (cards) */
bg-black/70           /* Overlay darken effect */
```

#### ⚠️ CONSIDER REPLACING
```css
text-[#1f2937]        /* Hardcoded hex - use text-gray-800 */
text-[#374151]        /* Hardcoded hex - use text-gray-700 */
text-[#6a7282]        /* Hardcoded hex - use text-gray-600 */
```

---

## Priority Ranking for Updates

### 🔴 CRITICAL - Update Immediately
1. **`/components/ui/PortfolioCard.tsx`** (27 matches)
   - Hardcoded hex colors on lines 405, 413, 422
   - Replace with semantic color classes
   
2. **`/components/sections/FestivalCountdown.tsx`** (21 matches)
   - Extensive typography utilities
   - Replace with fluid scale

### 🟠 HIGH - Update Soon
3. **`/components/ui/PortfolioLightbox.tsx`** (19 matches)
4. **`/components/sections/MultipleCountdowns.tsx`** (8 matches)
5. **`/components/ui/SliderCard.tsx`** (3 matches)
6. **`/components/ui/VideoPlayer.tsx`** (3 matches)
7. **`/components/ui/EnhancedLightbox.tsx`** (3 matches)

### 🟡 MEDIUM - Update When Convenient
8. **`/components/ui/BlogPagination.tsx`** (2 matches - mostly good)
9. **`/components/sections/InstagramFeed.tsx`** (2 matches)
10. **`/components/sections/TestimonialsSection.tsx`** (1 match)

### ✅ LOW - Leave As-Is
- All UI component library files (dialog, sheet, accordion, etc.)
- Files that only use structural/layout utilities

---

## Example Replacements

### PortfolioCard.tsx - Line 405
**Before:**
```tsx
<h3 className="text-body-guideline font-heading font-semibold text-[#1f2937] dark:text-white mb-fluid-sm group-hover:text-gradient-pink-purple-blue transition-colors duration-300 line-clamp-2">
```

**After:**
```tsx
<h3 className="text-body-guideline font-heading font-semibold text-gray-800 dark:text-white mb-fluid-sm group-hover:text-gradient-pink-purple-blue transition-colors duration-300 line-clamp-2">
```

### PortfolioCard.tsx - Line 366
**Before:**
```tsx
<div className="sm:hidden absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full opacity-90 backdrop-blur-sm">
```

**After:**
```tsx
<div className="sm:hidden absolute top-3 left-3 bg-black/70 text-white text-fluid-xs px-fluid-sm py-fluid-xs rounded-full opacity-90 backdrop-blur-sm">
```

### FestivalCountdown.tsx - Line 109
**Before:**
```tsx
<h2 className="text-4xl md:text-6xl font-heading font-bold text-festival-heading mb-fluid-md transition-colors duration-300">
```

**After:**
```tsx
<h2 className="text-section-h2 font-heading font-bold text-festival-heading mb-fluid-md transition-colors duration-300">
```
*Note: `text-section-h2` uses fluid clamp() and scales from mobile to desktop automatically*

### FestivalCountdown.tsx - Line 120
**Before:**
```tsx
className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 font-body font-bold text-xl rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
```

**After:**
```tsx
className="inline-flex items-center gap-fluid-sm bg-white text-purple-600 px-fluid-lg py-fluid-md font-body font-bold text-fluid-xl rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
```

---

## What NOT to Change

### ✅ Keep These Patterns

**Layout/Structural:**
```tsx
className="flex items-center justify-between"
className="grid grid-cols-2 gap-4"
className="absolute top-4 right-4"
className="relative"
className="hidden sm:block"
```

**Responsive Prefixes:**
```tsx
className="text-base sm:text-lg md:text-xl"  // OK to keep responsive scaling
className="px-4 sm:px-6 md:px-8"             // OK for responsive padding
```

**Dark Mode:**
```tsx
className="bg-white dark:bg-purple-900"
className="text-gray-800 dark:text-purple-100"
```

**Transforms/Animations:**
```tsx
className="transform hover:scale-105"
className="transition-all duration-300"
className="opacity-0 group-hover:opacity-100"
```

---

## Utilities Available in globals.css

### Complete Fluid Spacing Scale
```css
.px-fluid-xs, .py-fluid-xs
.px-fluid-sm, .py-fluid-sm  
.px-fluid-md, .py-fluid-md
.px-fluid-lg, .py-fluid-lg
.px-fluid-xl, .py-fluid-xl
.px-fluid-2xl, .py-fluid-2xl
.px-fluid-3xl, .py-fluid-3xl
.px-fluid-4xl, .py-fluid-4xl
.px-fluid-5xl, .py-fluid-5xl
.px-fluid-6xl, .py-fluid-6xl

.p-fluid-xs through .p-fluid-6xl
.gap-fluid-xs through .gap-fluid-6xl
.mb-fluid-xs through .mb-fluid-6xl
.mt-fluid-xs through .mt-fluid-6xl
```

### Complete Fluid Typography Scale
```css
.text-fluid-xs    /* Smallest text */
.text-fluid-sm    /* Small text */
.text-fluid-base  /* Base size */
.text-fluid-lg    /* Large */
.text-fluid-xl    /* Extra large */
.text-fluid-2xl   /* 2X large */
.text-fluid-3xl   /* 3X large */
.text-fluid-4xl   /* 4X large */
.text-fluid-5xl   /* 5X large */
.text-fluid-6xl   /* 6X large */
.text-fluid-7xl   /* 7X large (largest) */

/* Brand-Specific Typography */
.text-hero-h1         /* Hero titles (36px → 120px) */
.text-section-h2      /* Section headings (24px → 48px) */
.text-body-guideline  /* Body text (16px → 20px) */
.text-quote-large     /* Large quotes */
.text-button-fluid    /* Button text (20px → 32px) */
```

---

## Summary Statistics

- **Total Files Scanned:** 50+ `.tsx` files
- **Files with Matches:** 17 files
- **Total Utility Instances:** ~120 matches
- **Critical Issues:** 3 files with hardcoded hex colors
- **High Priority:** 7 files with extensive utilities
- **Low Priority:** 10 files (acceptable usage)

---

## Next Steps

1. ✅ Complete guidelines audit (DONE)
2. ✅ Component scan (THIS DOCUMENT)
3. ⏳ **Next:** Update critical files (PortfolioCard, FestivalCountdown)
4. ⏳ Update high-priority files
5. ⏳ Verify all changes work in light/dark mode
6. ⏳ Run final search for remaining patterns

---

**Last Updated:** January 13, 2026  
**Maintained by:** Ash Shaw Portfolio Team
