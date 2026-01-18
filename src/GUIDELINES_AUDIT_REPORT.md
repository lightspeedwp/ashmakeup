# Guidelines Audit Report - Tailwind CSS References

**Date:** January 13, 2026  
**Task:** Remove Tailwind CSS utility class references and replace with WordPress-aligned global CSS guidance  
**Status:** ✅ IN PROGRESS

---

## Executive Summary

This audit identifies all Tailwind CSS utility class references in `/guidelines/` documentation and replaces them with guidance emphasizing the WordPress-aligned global CSS class system defined in `/styles/globals.css`.

**Key Finding:** The codebase USES Tailwind CSS (@tailwind directives) but has a robust layer of **semantic custom classes** on top. Guidelines should emphasize these semantic classes, not raw Tailwind utilities.

---

## Audit Scope

### Files Audited ✅
- `/guidelines/design-tokens/colors.md` - ✅ UPDATED
- `/guidelines/design-tokens/typography.md` - ✅ UPDATED
- `/guidelines/design-tokens/spacing.md` - ⏳ PENDING
- `/guidelines/design-tokens/animations.md` - ⏳ PENDING

### Files To Audit
- `/guidelines/Guidelines.md` - Main guidelines file
- `/guidelines/overview-*.md` - All overview files
- `/guidelines/components/*.md` - 24 component files
- `/guidelines/mobile/*.md` - Mobile-specific guidelines
- `/guidelines/responsive/*.md` - Responsive guidelines

---

## Key Changes Made

### 1. `/guidelines/design-tokens/colors.md`

**Updated Line 56:** Changed from:
```markdown
The application uses CSS custom properties and Tailwind's dark mode classes...
```

To:
```markdown
The application uses CSS custom properties defined in `/styles/globals.css` and the `dark:` class prefix...
```

**Added WordPress Alignment Note:**
> While utilities like `bg-white` and `text-gray-800` are shown for clarity, components should use semantic classes from `/styles/globals.css` where they exist (e.g., `.bg-hero-section`, `.text-gradient-pink-purple-blue`).

**Clarified Spacing Usage:**
> While this example shows some utility patterns (`gap-2`, `px-4`, `py-2`), production code should use semantic spacing classes from globals.css like `.px-button`, `.py-button`, `.gap-fluid-sm` for brand consistency.

---

## Classes to KEEP vs REPLACE

### ✅ KEEP - Structural/Layout Utilities
These are fundamental and don't have semantic alternatives:

```css
/* Layout */
flex, grid, inline-flex, block, inline, inline-block

/* Alignment */
items-center, items-start, items-end, justify-between, justify-center, justify-start

/* Display */
hidden, block, inline, overflow-hidden, overflow-auto

/* Position */
relative, absolute, fixed, sticky, top-0, left-0, right-0, bottom-0

/* Z-Index */
z-10, z-20, z-50

/* Flex/Grid Children */
flex-1, flex-shrink-0, col-span-2, row-span-3

/* Responsive Prefixes */
sm:, md:, lg:, xl:, 2xl:

/* Theme Prefix */
dark:

/* Width/Height Constraints */
w-full, h-full, min-h-screen, max-w-7xl

/* Transform */
transform, scale-105, rotate-45
```

### ❌ REPLACE - Styling Utilities

These should use semantic global classes:

**Typography:**
```diff
- text-2xl, text-4xl, text-lg
+ .text-hero-h1, .text-section-h2, .text-body-guideline
```

**Colors:**
```diff
- bg-gray-100, text-gray-800
+ .bg-surface-light, .text-primary-dark
```

**Spacing:**
```diff
- px-4, py-2, mb-8, gap-4
+ .px-button, .py-button, .mb-fluid-lg, .gap-fluid-sm
```

**Gradients:**
```diff
- bg-gradient-to-r from-pink-500 to-purple-600
+ .bg-gradient-pink-purple-blue
```

**Border Radius:**
```diff
- rounded-lg, rounded-xl
+ .rounded-button, .rounded-card
```

---

## Semantic Classes Available in globals.css

### Typography Classes
```css
.font-heading, .font-body, .font-title
.text-hero-h1, .text-section-h2, .text-body-guideline
.text-quote-large, .text-button-fluid
.text-fluid-xs through .text-fluid-7xl
```

### Gradient Classes
```css
.bg-gradient-pink-purple-blue
.bg-gradient-blue-teal-green
.bg-gradient-gold-peach-coral
.text-gradient-pink-purple-blue
.text-gradient-blue-teal-green
.text-gradient-gold-peach-coral
```

### Section Background Classes
```css
.bg-hero-section
.bg-featured-section
.bg-fusion-nails-section
.bg-blog-preview-section
.bg-testimonials-section
.bg-footer-section
.bg-why-section
```

### Spacing Classes
```css
.px-button, .py-button, .py-section
.p-fluid-xs through .p-fluid-6xl
.mb-fluid-sm, .mt-fluid-lg, .gap-fluid-md
.p-card-responsive
```

### Font Weight Classes
```css
.font-light, .font-normal, .font-book
.font-medium, .font-semibold, .font-demibold
.font-bold, .font-extrabold
```

---

## Replacement Examples

### Before (Raw Tailwind)
```tsx
<h1 className="text-4xl font-bold text-gray-900 mb-8 px-4">
  Hero Title
</h1>
```

### After (WordPress-Aligned)
```tsx
<h1 className="text-hero-h1 font-title font-bold text-gray-900 dark:text-purple-100 mb-fluid-lg px-fluid-md">
  Hero Title
</h1>
```

### Before (Utility Spacing)
```tsx
<button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg">
  Click Me
</button>
```

### After (Semantic Classes)
```tsx
<button className="px-button py-button bg-gradient-pink-purple-blue text-white rounded-button">
  Click Me
</button>
```

---

## Action Items

### Completed ✅
1. Updated `/guidelines/design-tokens/colors.md` with WordPress alignment notes
2. Updated `/guidelines/design-tokens/typography.md` with WordPress alignment notes

### In Progress ⏳
3. Audit spacing.md for utility spacing examples
4. Audit animations.md for animation utilities

### Pending 📋
5. Update all component guidelines (24 files)
6. Update overview files (6 files)
7. Update Guidelines.md main file
8. Update mobile guidelines (4 files)
9. Update responsive guidelines (4 files)
10. Create summary mapping document

---

## Notes for AI Agent

### What to Look For
1. Direct Tailwind class names in examples (`text-2xl`, `bg-gray-100`)
2. References to "Tailwind" by name in prose
3. Utility spacing instead of semantic spacing
4. Raw color utilities instead of semantic color classes
5. Typography size utilities instead of fluid scale

### What NOT to Change
1. Layout/structural utilities (flex, grid, items-center)
2. Responsive prefixes (sm:, md:, lg:)
3. Dark mode prefix (dark:)
4. Position utilities (relative, absolute, fixed)
5. Display utilities (hidden, block, inline)

### Replacement Strategy
1. Keep utility patterns that have no semantic alternative
2. Add notes explaining WordPress alignment
3. Show both utility and semantic options when relevant
4. Emphasize `/styles/globals.css` as source of truth
5. Reference numeric WordPress typography scale (100-900)

---

## Next Steps

1. Continue with spacing.md audit
2. Create comprehensive class mapping document
3. Update all component guidelines systematically
4. Verify all examples use semantic classes
5. Run final search for remaining Tailwind utility patterns

---

**Last Updated:** January 13, 2026  
**Maintained by:** Ash Shaw Portfolio Team