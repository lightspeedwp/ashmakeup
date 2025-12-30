# Spacing Design Tokens

**Version:** 4.0.0  
**Last Updated:** January 2025

Complete spacing system for the Ash Shaw Makeup Portfolio, featuring fluid responsive spacing based on WordPress 6.6+ best practices.

## ✅ Verified Against Codebase

This document has been verified against `/styles/globals.css` as of January 2025. All spacing utilities, CSS variables, and responsive patterns match the current implementation.

**Verified Components:**
- ✅ Complete fluid spacing scale (xs through 6xl)
- ✅ Component-specific spacing (buttons, cards, sections)
- ✅ Directional utilities (px, py, mb, mt, gap)
- ✅ Reduced spacing variants (half values)
- ✅ Block gap utilities for content flow

## 📋 Table of Contents

1. [Spacing Philosophy](#spacing-philosophy)
2. [Fluid Spacing Scale](#fluid-spacing-scale)
3. [Component-Specific Spacing](#component-specific-spacing)
4. [Responsive Patterns](#responsive-patterns)
5. [Common Spacing Mistakes](#common-spacing-mistakes)

---

## Spacing Philosophy

### Design Principles

- **Fluid Scaling:** Uses `clamp()` for smooth responsive spacing
- **WordPress-Inspired:** Based on WordPress 6.6+ spacingScale approach
- **Multiplicative Progression:** 1.5x increment for harmonious scaling
- **Mobile-First:** Starts with small spacing, grows to desktop
- **Semantic Names:** Component-specific spacing tokens for clarity

### Spacing Scale Strategy

```css
/* WordPress-inspired spacing scale */
--spacing-operator: "*";
--spacing-increment: 1.5;
--spacing-steps: 7;
--spacing-unit: "rem";
```

This generates a harmonious scale:
- xs → sm (1.5x)
- sm → md (1.5x)
- md → lg (1.5x)
- etc.

---

## Fluid Spacing Scale

### Base Spacing Tokens

```css
/* Extra Small - Tight spacing */
.space-xs, .p-fluid-xs, .py-fluid-xs, .px-fluid-xs
  padding: clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem);  /* 4px → 8px */

/* Small - Compact spacing */
.space-sm, .p-fluid-sm, .py-fluid-sm, .px-fluid-sm
  padding: clamp(0.5rem, 0.4rem + 0.5vw, 1rem);  /* 8px → 16px */

/* Medium - Standard spacing */
.space-md, .p-fluid-md, .py-fluid-md, .px-fluid-md
  padding: clamp(1rem, 0.8rem + 1vw, 2rem);  /* 16px → 32px */

/* Large - Generous spacing */
.space-lg, .p-fluid-lg, .py-fluid-lg, .px-fluid-lg
  padding: clamp(1.5rem, 1.2rem + 1.5vw, 3rem);  /* 24px → 48px */

/* Extra Large - Section spacing */
.space-xl, .p-fluid-xl, .py-fluid-xl, .px-fluid-xl
  padding: clamp(2rem, 1.5rem + 2.5vw, 4rem);  /* 32px → 64px */

/* 2XL - Major section spacing */
.space-2xl, .p-fluid-2xl, .py-fluid-2xl, .px-fluid-2xl
  padding: clamp(3rem, 2rem + 5vw, 6rem);  /* 48px → 96px */

/* 3XL - Hero section spacing */
.space-3xl, .p-fluid-3xl, .py-fluid-3xl, .px-fluid-3xl
  padding: clamp(4rem, 3rem + 5vw, 8rem);  /* 64px → 128px */

/* 4XL - Page section spacing */
.space-4xl, .p-fluid-4xl, .py-fluid-4xl, .px-fluid-4xl
  padding: clamp(5rem, 4rem + 5vw, 10rem);  /* 80px → 160px */

/* 5XL - Major visual break spacing */
.space-5xl, .p-fluid-5xl, .py-fluid-5xl, .px-fluid-5xl
  padding: clamp(6rem, 5rem + 5vw, 12rem);  /* 96px → 192px */

/* 6XL - Hero section spacing */
.space-6xl, .p-fluid-6xl, .py-fluid-6xl, .px-fluid-6xl
  padding: clamp(7rem, 6rem + 5vw, 14rem);  /* 112px → 224px */
```

### Margin Utilities

```css
/* Margin Bottom */
.mb-fluid-xs    /* clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem) */
.mb-fluid-sm    /* clamp(0.5rem, 0.4rem + 0.5vw, 1rem) */
.mb-fluid-md    /* clamp(1rem, 0.8rem + 1vw, 2rem) */
.mb-fluid-lg    /* clamp(1.5rem, 1.2rem + 1.5vw, 3rem) */
.mb-fluid-xl    /* clamp(2rem, 1.5rem + 2.5vw, 4rem) */
.mb-fluid-2xl   /* clamp(3rem, 2rem + 5vw, 6rem) */
.mb-fluid-3xl   /* clamp(4rem, 3rem + 5vw, 8rem) */
.mb-fluid-4xl   /* clamp(5rem, 4rem + 5vw, 10rem) */
.mb-fluid-5xl   /* clamp(6rem, 5rem + 5vw, 12rem) */
.mb-fluid-6xl   /* clamp(7rem, 6rem + 5vw, 14rem) */

/* Margin Top */
.mt-fluid-xs through .mt-fluid-6xl  /* Same values as mb */

/* Gap (for Grid/Flexbox) */
.gap-fluid-xs through .gap-fluid-6xl  /* Same values for consistent spacing */
```

---

## Component-Specific Spacing

### Button Spacing

```css
/* Button Horizontal Padding */
.px-button {
  padding-left: clamp(1rem, 2vw, 3.375rem);   /* 16px → 54px */
  padding-right: clamp(1rem, 2vw, 3.375rem);
}

/* Button Vertical Padding */
.py-button {
  padding-top: clamp(1rem, 2vw, 2rem);   /* 16px → 32px */
  padding-bottom: clamp(1rem, 2vw, 2rem);
}
```

**Example:**
```tsx
<button className="px-button py-button bg-gradient-pink-purple-blue text-white rounded-lg font-body font-medium text-button-fluid">
  Explore Portfolio
</button>
```

### Section Spacing

```css
/* Section Vertical Spacing */
.py-section {
  padding-top: clamp(2rem, 6vw, 6rem);      /* 32px → 96px */
  padding-bottom: clamp(2rem, 6vw, 6rem);
}
```

**Example:**
```tsx
<section className="py-section">
  <h2 className="text-section-h2 font-heading font-semibold mb-fluid-lg">
    Section Title
  </h2>
  {/* Section content */}
</section>
```

### Card Padding

```css
/* Responsive Card Padding */
.p-card-responsive {
  /* Mobile: 16px, Desktop: 48px */
  padding: clamp(1rem, 3vw, 3rem);
}
```

**Example:**
```tsx
<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-card-responsive border border-white/50 shadow-lg">
  <h3 className="text-fluid-xl font-heading font-semibold mb-fluid-md">
    Card Title
  </h3>
  <p className="text-body-guideline font-body">
    Card content
  </p>
</div>
```

---

## Responsive Patterns

### Content Sections

```tsx
// Standard content section with responsive spacing
<section className="py-section px-6 lg:px-12">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-section-h2 font-heading font-semibold text-center mb-fluid-lg">
      Section Title
    </h2>
    
    <p className="text-body-guideline font-body text-center max-w-3xl mx-auto mb-fluid-xl">
      Section description
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-md">
      {/* Grid items */}
    </div>
  </div>
</section>
```

### Card Grids

```tsx
// Responsive card grid with consistent spacing
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-fluid-md">
  <div className="bg-white rounded-xl p-fluid-md shadow-lg">
    <h3 className="text-fluid-lg font-heading font-semibold mb-fluid-sm">Card 1</h3>
    <p className="text-body-guideline font-body">Content</p>
  </div>
  
  <div className="bg-white rounded-xl p-fluid-md shadow-lg">
    <h3 className="text-fluid-lg font-heading font-semibold mb-fluid-sm">Card 2</h3>
    <p className="text-body-guideline font-body">Content</p>
  </div>
  
  <div className="bg-white rounded-xl p-fluid-md shadow-lg">
    <h3 className="text-fluid-lg font-heading font-semibold mb-fluid-sm">Card 3</h3>
    <p className="text-body-guideline font-body">Content</p>
  </div>
</div>
```

### Hero Section

```tsx
// Hero with generous spacing
<section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-fluid-3xl">
  <h1 className="text-hero-h1 font-title font-bold text-gradient-pink-purple-blue mb-fluid-lg">
    Hi, I'm Ash Shaw
  </h1>
  
  <p className="text-fluid-xl font-body text-gray-700 max-w-3xl mb-fluid-xl">
    Makeup that shines with colour, energy, and connection.
  </p>
  
  <div className="flex flex-col sm:flex-row gap-fluid-md">
    <button className="btn-primary">Explore Portfolio</button>
    <button className="btn-secondary">Read My Story</button>
  </div>
</section>
```

### Blog Content

```tsx
// Blog post with proper content spacing
<article className="max-w-4xl mx-auto px-6 py-12">
  <h1 className="text-section-h2 font-heading font-bold mb-fluid-md">
    Blog Post Title
  </h1>
  
  <div className="flex items-center gap-fluid-sm text-fluid-sm text-gray-600 mb-fluid-lg">
    <span>5 min read</span>
    <span>•</span>
    <time>January 15, 2025</time>
  </div>
  
  <div className="prose prose-lg">
    <p className="mb-fluid-md">First paragraph...</p>
    <p className="mb-fluid-md">Second paragraph...</p>
    
    <h2 className="text-fluid-2xl font-heading font-semibold mt-fluid-xl mb-fluid-md">
      Section Heading
    </h2>
    
    <p className="mb-fluid-md">More content...</p>
  </div>
</article>
```

---

## Mobile vs Desktop Spacing

### Mobile (320px - 767px)

**Minimum spacing values (left side of clamp):**
```css
.p-fluid-xs   /* 4px (0.25rem) */
.p-fluid-sm   /* 8px (0.5rem) */
.p-fluid-md   /* 16px (1rem) */
.p-fluid-lg   /* 24px (1.5rem) */
.p-fluid-xl   /* 32px (2rem) */
.py-section   /* 32px (2rem) */
```

**Example:**
```tsx
// Mobile: compact spacing
<section className="py-section px-4">  {/* 32px vertical, 16px horizontal */}
  <h2 className="mb-fluid-md">Title</h2>  {/* 16px margin bottom */}
  <div className="grid grid-cols-1 gap-fluid-sm">  {/* 8px gap */}
    {/* Content */}
  </div>
</section>
```

### Desktop (1024px+)

**Maximum spacing values (right side of clamp):**
```css
.p-fluid-xs   /* 8px (0.5rem) */
.p-fluid-sm   /* 16px (1rem) */
.p-fluid-md   /* 32px (2rem) */
.p-fluid-lg   /* 48px (3rem) */
.p-fluid-xl   /* 64px (4rem) */
.py-section   /* 96px (6rem) */
```

**Example:**
```tsx
// Desktop: generous spacing
<section className="py-section px-12">  {/* 96px vertical, 48px horizontal */}
  <h2 className="mb-fluid-lg">Title</h2>  {/* 48px margin bottom */}
  <div className="grid grid-cols-3 gap-fluid-md">  {/* 32px gap */}
    {/* Content */}
  </div>
</section>
```

---

## Common Spacing Mistakes

### ❌ Mistake 1: Fixed Spacing Values

```tsx
// ❌ WRONG - Fixed spacing doesn't scale
<section className="py-16 px-8">
  <h2 className="mb-8">Title</h2>
  <div className="grid gap-4">
    {/* Content */}
  </div>
</section>
```

**Solution:**
```tsx
// ✅ CORRECT - Fluid responsive spacing
<section className="py-section px-6 lg:px-12">
  <h2 className="mb-fluid-lg">Title</h2>
  <div className="grid gap-fluid-md">
    {/* Content */}
  </div>
</section>
```

### ❌ Mistake 2: Inconsistent Spacing

```tsx
// ❌ WRONG - Random spacing values
<div className="mb-4">Item 1</div>
<div className="mb-7">Item 2</div>
<div className="mb-5">Item 3</div>
```

**Solution:**
```tsx
// ✅ CORRECT - Consistent spacing scale
<div className="mb-fluid-md">Item 1</div>
<div className="mb-fluid-md">Item 2</div>
<div className="mb-fluid-md">Item 3</div>
```

### ❌ Mistake 3: Over-Spaced Content

```tsx
// ❌ WRONG - Excessive spacing
<div className="py-fluid-3xl px-fluid-3xl">  {/* 64-128px all sides */}
  <p className="mb-fluid-3xl">Paragraph</p>  {/* 64-128px margin */}
</div>
```

**Solution:**
```tsx
// ✅ CORRECT - Appropriate spacing
<div className="py-fluid-lg px-fluid-md">  {/* 24-48px vertical, 16-32px horizontal */}
  <p className="mb-fluid-md">Paragraph</p>  {/* 16-32px margin */}
</div>
```

### ❌ Mistake 4: Missing Responsive Adjustments

```tsx
// ❌ WRONG - Same spacing on mobile and desktop
<section className="p-12">
  {/* Content */}
</section>
```

**Solution:**
```tsx
// ✅ CORRECT - Responsive spacing
<section className="px-4 sm:px-6 lg:px-12 py-section">
  {/* Content */}
</section>
```

---

## Spacing Usage Guide

### When to Use Each Scale

**Extra Small (xs):**
- Inline element spacing
- Icon margins
- Badge padding

**Small (sm):**
- Button group gaps
- Form input spacing
- List item padding

**Medium (md):**
- Card padding
- Component margins
- Grid gaps

**Large (lg):**
- Section title margins
- Feature spacing
- Card grids

**Extra Large (xl):**
- Section spacing (vertical)
- Hero sections
- Major layout spacing

**2XL & 3XL:**
- Page sections
- Hero sections
- Major visual breaks

---

## Related Documentation

- **[typography.md](./typography.md)** - Typography scale and hierarchy
- **[colors.md](./colors.md)** - Color system
- **[Guidelines.md](../Guidelines.md)** - Main guidelines
- **[overview-components.md](../overview-components.md)** - Component usage

---

**Last Updated:** January 2025  
**Version:** 4.0.0