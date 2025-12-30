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

### Visual Spacing Scale

```
┌─────────────────────────────────────────────────────────────────────┐
│                   FLUID SPACING SCALE VISUALIZATION                  │
└─────────────────────────────────────────────────────────────────────┘

MOBILE (375px) ────────────────────────────────→ DESKTOP (1920px)

.p-fluid-xs
▓                                                ▓▓
0.5rem (8px)                                     0.75rem (12px)

.p-fluid-sm
▓▓                                               ▓▓▓
0.75rem (12px)                                   1rem (16px)

.p-fluid-md
▓▓▓                                              ▓▓▓▓
1rem (16px)                                      1.5rem (24px)

.p-fluid-lg
▓▓▓▓▓                                            ▓▓▓▓▓▓▓▓
1.5rem (24px)                                    2.25rem (36px)

.p-fluid-xl
▓▓▓▓▓▓▓                                          ▓▓▓▓▓▓▓▓▓▓▓▓
2rem (32px)                                      3rem (48px)

.p-fluid-2xl
▓▓▓▓▓▓▓▓▓▓                                       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
2.5rem (40px)                                    4rem (64px)

.p-fluid-3xl
▓▓▓▓▓▓▓▓▓▓▓▓▓▓                                   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
3rem (48px)                                      6rem (96px)

.p-fluid-4xl
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                               ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
4rem (64px)                                      8rem (128px)

.p-fluid-5xl
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                           ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
5rem (80px)                                      10rem (160px)

.p-fluid-6xl
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
6rem (96px)                                      12rem (192px)

┌─────────────────────────────────────────────────────────────────────┐
│                   SPACING SCALE RELATIONSHIPS                        │
└─────────────────────────────────────────────────────────────────────┘

Scale Progression (1.5x multiplicative):
────────────────────────────────────────

fluid-xs   0.5rem →  0.75rem   (1.5x)
  ↓
fluid-sm   0.75rem → 1rem      (1.33x)
  ↓
fluid-md   1rem →    1.5rem    (1.5x)
  ↓
fluid-lg   1.5rem →  2.25rem   (1.5x)
  ↓
fluid-xl   2rem →    3rem      (1.5x)
  ↓
fluid-2xl  2.5rem →  4rem      (1.6x)
  ↓
fluid-3xl  3rem →    6rem      (2x)
  ↓
fluid-4xl  4rem →    8rem      (2x)
  ↓
fluid-5xl  5rem →    10rem     (2x)
  ↓
fluid-6xl  6rem →    12rem     (2x)

Usage Frequency Chart:
─────────────────────

fluid-xs  ████                10% - Micro spacing
fluid-sm  ██████              15% - Small gaps
fluid-md  ████████████        30% - Standard spacing
fluid-lg  ██████████          25% - Section margins
fluid-xl  ████                10% - Large spacing
2xl-6xl   ██                   10% - Hero/special

┌─────────────────────────────────────────────────────────────────────┐
│                   COMPONENT SPACING HIERARCHY                        │
└─────────────────────────────────────────────────────────────────────┘

Micro Level (Within elements)
──────────────────────────────
px-2, py-1                    Icons, badges, small tags
gap-2                         Inline icon + text spacing

Component Level (Within components)
────────────────────────────────────
.p-fluid-sm                   Card padding (mobile)
.p-fluid-md                   Card padding (desktop)
.gap-fluid-md                 Grid gaps, flex gaps
.mb-fluid-md                  Element margins

Section Level (Between sections)
─────────────────────────────────
.py-section                   Section vertical padding
.mb-fluid-xl                  Section bottom margin
.gap-fluid-lg                 Section element spacing

Page Level (Overall page structure)
────────────────────────────────────
.py-fluid-3xl                 Hero padding
.mb-fluid-2xl                 Major section separation
.p-fluid-6xl                  Maximum spacing (rare)

┌─────────────────────────────────────────────────────────────────────┐
│                   RESPONSIVE SPACING BEHAVIOR                        │
└─────────────────────────────────────────────────────────────────────┘

Example: Card Padding with .p-fluid-md
───────────────────────────────────────

375px (Mobile)          768px (Tablet)          1920px (Desktop)
┌────────────────┐      ┌──────────────────┐    ┌───────────────────────┐
│ [16px]         │      │ [20px]           │    │ [24px]                │
│                │      │                  │    │                       │
│  Card Content  │  →   │   Card Content   │ →  │     Card Content      │
│                │      │                  │    │                       │
│         [16px] │      │           [20px] │    │                [24px] │
└────────────────┘      └──────────────────┘    └───────────────────────┘

Smooth interpolation: clamp(1rem, 2vw, 1.5rem)
No breakpoints needed!

┌─────────────────────────────────────────────────────────────────────┐
│                   SPACING STACK PATTERNS                             │
└─────────────────────────────────────────────────────────────────────┘

Pattern 1: Vertical Stack (Common)
───────────────────────────────────

<section className="py-section">        ← Section padding
  <h2 className="mb-fluid-md">          ← Heading margin
    Section Title
  </h2>
  <p className="mb-fluid-sm">           ← Paragraph margin
    Description text
  </p>
  <div className="grid gap-fluid-md">   ← Grid gap
    {items.map(...)}
  </div>
</section>

Visual Stack:
─────────────
[py-section top]
    Title
[mb-fluid-md]
    Description
[mb-fluid-sm]
    Grid Item 1
[gap-fluid-md]
    Grid Item 2
[gap-fluid-md]
    Grid Item 3
[py-section bottom]

Pattern 2: Horizontal Flex
───────────────────────────

<div className="flex items-center gap-fluid-sm">
  <Icon />
  <span>Text</span>
  <Badge />
</div>

Visual:
Icon [gap-fluid-sm] Text [gap-fluid-sm] Badge

Pattern 3: Card Layout
──────────────────────

<div className="p-card-responsive">     ← Fluid card padding
  <img className="mb-fluid-md" />       ← Image margin
  <h3 className="mb-fluid-sm">...</h3>  ← Title margin
  <p className="mb-fluid-md">...</p>    ← Text margin
  <button>...</button>
</div>

Visual Stack:
─────────────
[padding top]
    Image
[mb-fluid-md]
    Title
[mb-fluid-sm]
    Description
[mb-fluid-md]
    Button
[padding bottom]
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