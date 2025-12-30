# Typography Design Tokens

**Version:** 4.0.0  
**Last Updated:** January 2025

Complete typography system for the Ash Shaw Makeup Portfolio, featuring fluid responsive scaling, semantic HTML hierarchy, and WordPress-inspired best practices.

## ✅ Verified Against Codebase

This document has been verified against `/styles/globals.css` as of January 2025. All typography utilities, font families, font weights, and fluid scaling values match the current implementation.

**Verified Components:**
- ✅ Font face declarations (Google Fonts CDN)
- ✅ Variable font system with custom weights
- ✅ All fluid typography classes and clamp() values
- ✅ Semantic HTML base styles
- ✅ Font weight variables (including custom book/demibold weights)

## 📋 Table of Contents

1. [Typography Philosophy](#typography-philosophy)
2. [Font Families](#font-families)
3. [Variable Font System](#variable-font-system)
4. [Fluid Typography Scale](#fluid-typography-scale)
5. [Semantic HTML Usage](#semantic-html-usage)
6. [Responsive Behavior](#responsive-behavior)

---

## Typography Philosophy

### Design Principles

- **Fluid Scaling:** Uses `clamp()` functions for smooth responsive behavior
- **Semantic HTML:** Proper HTML elements for SEO and accessibility
- **Hierarchy:** Clear visual hierarchy through size and weight
- **Readability:** Optimized line heights and letter spacing
- **Performance:** Variable fonts reduce file requests by 73%

### WordPress-Inspired Approach

The typography system is inspired by WordPress 6.6+ fluid typography:
- Low specificity base styles (easy to override)
- `clamp()` functions for smooth scaling without media queries
- Mobile-first responsive design
- Golden ratio scale (1.25) for harmonious progression

---

## Font Families

### Primary Fonts

#### Playfair Display (Serif)
**Usage:** Headings, elegant titles, sophisticated moments

```css
/* CSS Variable */
--font-heading: 'Playfair Display', Georgia, 'Times New Roman', serif;

/* Tailwind Class */
.font-heading
```

**Characteristics:**
- High-contrast serif design
- Elegant and sophisticated
- Best for headings and display text
- Variable font (400-900 weight range)

**Example:**
```tsx
<h1 className="font-heading font-semibold text-section-h2">
  Elegant Section Title
</h1>
```

#### Inter (Sans-Serif)
**Usage:** Body text, UI elements, readable content

```css
/* CSS Variable */
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Tailwind Class */
.font-body
```

**Characteristics:**
- Highly readable sans-serif
- Optimized for screens
- Excellent for body text
- Variable font (100-900 weight range)

**Example:**
```tsx
<p className="font-body font-normal text-body-guideline text-gray-700">
  Readable body text with optimal line height
</p>
```

#### Righteous (Display)
**Usage:** Hero titles, main headlines, special moments

```css
/* CSS Variable */
--font-title: 'Righteous', cursive, fantasy;

/* Tailwind Class */
.font-title
```

**Characteristics:**
- Bold display font
- High visual impact
- Use sparingly for hero moments
- Fixed weight (400 only)

**Example:**
```tsx
<h1 className="font-title font-bold text-hero-h1 text-gradient-pink-purple-blue">
  Hi, I'm Ash Shaw
</h1>
```

---

## Variable Font System

### Performance Benefits

**Before (Individual Fonts):**
- 11 font files
- ~400KB+ total size
- 11 HTTP requests

**After (Variable Fonts):**
- 3 font files
- ~200KB total size
- 3 HTTP requests
- ✅ **73% fewer requests**
- ✅ **50% smaller download**
- ✅ **Infinite weight flexibility**

### Font Weight Variables

```css
/* Standard Weights */
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;  /* NEW with variable fonts */

/* Custom Intermediate Weights (Variable fonts only) */
--font-weight-book: 450;       /* Between regular and medium */
--font-weight-demibold: 650;   /* Between semibold and bold */

/* Tailwind Classes */
.font-light       /* 300 */
.font-normal      /* 400 */
.font-book        /* 450 - Custom! */
.font-medium      /* 500 */
.font-semibold    /* 600 */
.font-demibold    /* 650 - Custom! */
.font-bold        /* 700 */
.font-extrabold   /* 800 - NEW! */
```

**Example:**
```tsx
// Standard weights
<h2 className="font-heading font-semibold text-section-h2">Section Title</h2>
<p className="font-body font-normal text-body-guideline">Body text</p>

// NEW: Custom weights with variable fonts
<h3 className="font-heading font-book text-fluid-xl">Subtle Heading</h3>
<button className="font-body font-demibold text-button-fluid">Button Text</button>

// NEW: Extra bold emphasis
<span className="font-body font-extrabold text-fluid-2xl">Featured Text</span>
```

---

## Fluid Typography Scale

### Guidelines-Specific Typography Classes

These are the primary typography classes defined in the brand guidelines:

```css
/* Hero Title - Largest display text */
.text-hero-h1 {
  font-size: clamp(2.25rem, 6vw, 7.5rem);  /* 36px → 120px */
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Section Headings - Page section titles */
.text-section-h2 {
  font-size: clamp(1.5rem, 4vw, 3rem);  /* 24px → 48px */
  line-height: 1.2;
  letter-spacing: -0.01em;
}

/* Body Text - Standard content */
.text-body-guideline {
  font-size: clamp(1rem, 1.5vw, 1.25rem);  /* 16px → 20px */
  line-height: 1.6;
  letter-spacing: 0;
}

/* Quote Text - Large pull quotes */
.text-quote-large {
  font-size: clamp(2rem, 5vw, 5rem);  /* 32px → 80px */
  line-height: 1.2;
  letter-spacing: -0.02em;
}

/* Button Text - CTA buttons */
.text-button-fluid {
  font-size: clamp(1.25rem, 2vw, 2rem);  /* 20px → 32px */
  line-height: 1;
  letter-spacing: 0;
}
```

### Extended Fluid Typography Scale

Complete responsive scale for flexible usage:

```css
/* Extra Small */
.text-fluid-xs {
  font-size: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);  /* 12px → 14px */
  line-height: 1.5;
}

/* Small */
.text-fluid-sm {
  font-size: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);  /* 14px → 16px */
  line-height: 1.5;
}

/* Base */
.text-fluid-base {
  font-size: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);  /* 16px → 18px */
  line-height: 1.6;
}

/* Large */
.text-fluid-lg {
  font-size: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);  /* 18px → 20px */
  line-height: 1.5;
}

/* Extra Large */
.text-fluid-xl {
  font-size: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);  /* 20px → 24px */
  line-height: 1.4;
}

/* 2XL */
.text-fluid-2xl {
  font-size: clamp(1.5rem, 1.3rem + 1vw, 2rem);  /* 24px → 32px */
  line-height: 1.3;
}

/* 3XL */
.text-fluid-3xl {
  font-size: clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem);  /* 30px → 40px */
  line-height: 1.2;
}

/* 4XL */
.text-fluid-4xl {
  font-size: clamp(2.25rem, 2rem + 1.25vw, 3rem);  /* 36px → 48px */
  line-height: 1.1;
}

/* 5XL */
.text-fluid-5xl {
  font-size: clamp(2.5rem, 2.2rem + 1.5vw, 3.5rem);  /* 40px → 56px */
  line-height: 1.1;
}

/* 6XL */
.text-fluid-6xl {
  font-size: clamp(3rem, 2.5rem + 2.5vw, 4.5rem);  /* 48px → 72px */
  line-height: 1;
}

/* 7XL */
.text-fluid-7xl {
  font-size: clamp(3.5rem, 3rem + 2.5vw, 5rem);  /* 56px → 80px */
  line-height: 1;
}
```

---

## Semantic HTML Usage

### Required HTML Structure

Always use proper semantic HTML elements with explicit typography classes:

```tsx
// ✅ CORRECT - Semantic HTML with explicit classes
<h1 className="text-hero-h1 font-title font-bold text-gradient-pink-purple-blue">
  Main Page Title
</h1>

<h2 className="text-section-h2 font-heading font-semibold text-gray-800">
  Section Title
</h2>

<h3 className="text-fluid-xl font-heading font-semibold text-gray-800">
  Subsection Title
</h3>

<p className="text-body-guideline font-body font-normal text-gray-700 leading-relaxed">
  Body paragraph with proper line height and readability
</p>

// ❌ WRONG - Div elements styled as headings
<div className="text-2xl font-bold">
  Fake heading (bad for SEO and accessibility)
</div>
```

### Heading Hierarchy

Maintain logical heading levels for SEO and accessibility:

```tsx
// ✅ CORRECT - Logical hierarchy
<h1>Main Title</h1>
  <h2>Section 1</h2>
    <h3>Subsection 1.1</h3>
    <h3>Subsection 1.2</h3>
  <h2>Section 2</h2>
    <h3>Subsection 2.1</h3>

// ❌ WRONG - Skipped heading levels
<h1>Main Title</h1>
  <h4>Section 1</h4>  /* Skipped h2 and h3 */
```

---

## Typography Patterns

### Hero Section

```tsx
<section className="min-h-screen flex flex-col items-center justify-center text-center">
  <h1 className="text-hero-h1 font-title font-bold text-gradient-pink-purple-blue mb-fluid-md">
    Hi, I'm Ash Shaw
  </h1>
  
  <p className="text-fluid-xl font-body font-normal text-gray-700 max-w-3xl mb-fluid-lg">
    Makeup that shines with colour, energy, and connection.
  </p>
  
  <button className="bg-gradient-pink-purple-blue text-white px-button py-button font-body font-medium text-button-fluid rounded-lg">
    Explore Portfolio
  </button>
</section>
```

### Content Section

```tsx
<section className="py-section">
  <h2 className="text-section-h2 font-heading font-semibold text-gray-800 text-center mb-fluid-md">
    Why I Do Makeup
  </h2>
  
  <p className="text-body-guideline font-body font-normal text-gray-700 text-center max-w-2xl mx-auto mb-fluid-lg leading-relaxed">
    Makeup artistry is my passion, connecting with people through creative expression
    and helping them feel confident and beautiful.
  </p>
</section>
```

### Card Content

```tsx
<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-card-responsive">
  <h3 className="text-fluid-xl font-heading font-semibold text-gray-800 mb-fluid-sm">
    Card Title
  </h3>
  
  <p className="text-body-guideline font-body font-normal text-gray-700 leading-relaxed mb-fluid-md">
    Card description with proper line height for optimal readability.
  </p>
  
  <a href="#" className="text-fluid-sm font-body font-medium text-blue-700 hover:text-pink-500 transition-colors">
    Read More →
  </a>
</div>
```

### Blog Post Content

```tsx
<article className="max-w-4xl mx-auto px-6 py-12">
  <h1 className="text-section-h2 font-heading font-bold text-gray-800 mb-fluid-md">
    Blog Post Title
  </h1>
  
  <div className="flex items-center gap-4 text-fluid-sm text-gray-600 mb-fluid-lg">
    <span>5 min read</span>
    <span>•</span>
    <time>January 15, 2025</time>
  </div>
  
  <div className="prose prose-lg">
    <p className="text-body-guideline font-body font-normal text-gray-700 leading-relaxed mb-fluid-md">
      First paragraph of blog content with optimal reading experience.
    </p>
    
    <h2 className="text-fluid-2xl font-heading font-semibold text-gray-800 mt-fluid-xl mb-fluid-md">
      Section Heading
    </h2>
    
    <p className="text-body-guideline font-body font-normal text-gray-700 leading-relaxed">
      More content here...
    </p>
  </div>
</article>
```

---

## Responsive Behavior

### Mobile (320px - 767px)
- Smallest font sizes from clamp() range
- Single column layouts
- Reduced line lengths for readability
- Larger tap targets for buttons

```tsx
// Mobile-optimized text
<h1 className="text-hero-h1">  {/* 36px on mobile */}
<p className="text-body-guideline">  {/* 16px on mobile */}
```

### Tablet (768px - 1023px)
- Mid-range font sizes
- Two-column layouts where appropriate
- Balanced spacing

```tsx
// Tablet-optimized (mid-range automatically applied)
<h1 className="text-hero-h1">  {/* ~60px on tablet */}
<p className="text-body-guideline">  {/* ~18px on tablet */}
```

### Desktop (1024px+)
- Maximum font sizes from clamp() range
- Multi-column layouts
- Enhanced visual hierarchy

```tsx
// Desktop-optimized (max sizes automatically applied)
<h1 className="text-hero-h1">  {/* 120px on large desktop */}
<p className="text-body-guideline">  {/* 20px on desktop */}
```

---

## Common Mistakes

### ❌ Mistake 1: Fixed Font Sizes

```tsx
// ❌ WRONG - Fixed sizes don't scale
<h1 className="text-4xl">Title</h1>
<p className="text-base">Body</p>
```

**Solution:**
```tsx
// ✅ CORRECT - Fluid responsive sizing
<h1 className="text-hero-h1 font-title font-bold">Title</h1>
<p className="text-body-guideline font-body">Body</p>
```

### ❌ Mistake 2: Missing Font Families

```tsx
// ❌ WRONG - No font family specified
<h1 className="text-hero-h1 font-bold">Title</h1>
```

**Solution:**
```tsx
// ✅ CORRECT - Explicit font family
<h1 className="text-hero-h1 font-title font-bold">Title</h1>
```

### ❌ Mistake 3: Wrong HTML Elements

```tsx
// ❌ WRONG - Div styled as heading
<div className="text-3xl font-bold">Heading</div>
```

**Solution:**
```tsx
// ✅ CORRECT - Semantic HTML
<h2 className="text-section-h2 font-heading font-semibold">Heading</h2>
```

---

## Related Documentation

- **[colors.md](./colors.md)** - Color system and accessibility
- **[spacing.md](./spacing.md)** - Spacing scale and patterns
- **[Guidelines.md](../Guidelines.md)** - Main guidelines
- **[overview-components.md](../overview-components.md)** - Component usage

---

**Last Updated:** January 2025  
**Version:** 4.0.0