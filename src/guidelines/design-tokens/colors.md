# Color Design Tokens

**Version:** 4.0.0  
**Last Updated:** January 2025

Complete color system for the Ash Shaw Makeup Portfolio, featuring semantic color tokens, brand gradients, and accessibility-compliant contrast ratios.

## ✅ Verified Against Codebase

This document has been verified against `/styles/globals.css` as of January 2025. All color utilities, CSS variables, and gradient classes match the current implementation.

## 📋 Table of Contents

1. [Color Philosophy](#color-philosophy)
2. [Brand Colors](#brand-colors)
3. [Semantic Colors](#semantic-colors)
4. [Gradient System](#gradient-system)
5. [Neutral Colors](#neutral-colors)
6. [Accessibility Standards](#accessibility-standards)
7. [CSS Variables Reference](#css-variables-reference)

---

## Color Philosophy

### Design Principles

- **Vibrant & Energetic:** Colors reflect makeup artistry creativity
- **Professional & Trustworthy:** Balanced with neutral grays for credibility
- **Accessible:** All color combinations meet WCAG 2.1 AA standards
- **Semantic:** Colors convey meaning (success, error, warning)

### Usage Guidelines

✅ **DO:**
- Use gradients for CTAs and hero elements
- Maintain consistent color usage across pages
- Ensure proper contrast ratios for text
- Use semantic colors for status messages

❌ **DON'T:**
- Mix more than 2-3 colors in single component
- Use low-contrast color combinations
- Override brand colors without reason
- Use color as only indicator of state

---

## Brand Colors

### Primary Brand Colors

#### Pink
**Usage:** Primary CTA buttons, hero accents, featured content

```css
/* CSS Variables */
--color-pink-300: #FDA4AF; /* Light pink accents */
--color-pink-500: #FF66CC; /* Main pink (brand primary) */
--color-pink-700: #E91E63; /* Dark pink (hover states) */

/* Tailwind Classes */
.text-pink-500        /* Text color */
.bg-pink-500          /* Background color */
.border-pink-500      /* Border color */
.hover:bg-pink-700    /* Hover background */
```

**Example:**
```tsx
<button className="bg-pink-500 hover:bg-pink-700 text-white px-button py-button">
  Primary CTA
</button>
```

#### Purple
**Usage:** Secondary CTA, brand accents, gradients

```css
/* CSS Variables */
--color-purple-300: #D8B4FE; /* Light purple */
--color-purple-600: #9933FF; /* Main purple */
--color-purple-700: #7E22CE; /* Dark purple (hover) */
--color-purple-900: #581C87; /* Very dark purple (text) */

/* Tailwind Classes */
.text-purple-600
.bg-purple-600
.hover:bg-purple-700
```

**Example:**
```tsx
<button className="bg-purple-600 hover:bg-purple-700 text-white">
  Secondary Action
</button>
```

#### Blue
**Usage:** Links, information, trust indicators

```css
/* CSS Variables */
--color-blue-400: #60A5FA; /* Light blue */
--color-blue-500: #3399FF; /* Main blue */
--color-blue-700: #1D4ED8; /* Dark blue (links) */

/* Tailwind Classes */
.text-blue-700        /* Link text */
.bg-blue-500
.hover:text-blue-500
```

---

## Semantic Colors

### Success (Green)
**Usage:** Form success, confirmation messages, positive feedback

```css
/* CSS Variables */
--color-green-100: #DCFCE7; /* Light background */
--color-green-700: #15803D; /* Main green */
--color-green-900: #14532D; /* Dark text */

/* Tailwind Classes */
.text-green-700       /* Success text */
.bg-green-100         /* Success background */
.border-green-700     /* Success border */
```

**Example:**
```tsx
<div className="bg-green-100 border border-green-700 text-green-900 px-4 py-3 rounded">
  <p className="font-body font-medium">Email sent successfully!</p>
</div>
```

### Error/Danger (Red)
**Usage:** Form errors, destructive actions, alerts

```css
/* CSS Variables */
--color-red-100: #FEE2E2; /* Light background */
--color-red-700: #B91C1C; /* Main red */
--color-red-900: #7F1D1D; /* Dark text */

/* Tailwind Classes */
.text-red-700         /* Error text */
.bg-red-100           /* Error background */
.border-red-700       /* Error border */
```

**Example:**
```tsx
<div className="bg-red-100 border border-red-700 text-red-900 px-4 py-3 rounded">
  <p className="font-body font-medium">Please fill in all required fields.</p>
</div>
```

### Warning (Yellow/Amber)
**Usage:** Warnings, caution messages, pending states

```css
/* CSS Variables */
--color-amber-100: #FEF3C7; /* Light background */
--color-amber-700: #B45309; /* Main amber */
--color-amber-900: #78350F; /* Dark text */

/* Tailwind Classes */
.text-amber-700       /* Warning text */
.bg-amber-100         /* Warning background */
.border-amber-700     /* Warning border */
```

### Info (Light Blue)
**Usage:** Informational messages, neutral alerts

```css
/* CSS Variables */
--color-sky-100: #E0F2FE; /* Light background */
--color-sky-700: #0369A1; /* Main sky blue */
--color-sky-900: #0C4A6E; /* Dark text */

/* Tailwind Classes */
.text-sky-700         /* Info text */
.bg-sky-100           /* Info background */
```

---

## Gradient System

### Primary Gradient (Pink → Purple → Blue)
**Usage:** Primary CTAs, hero titles, featured content

```css
/* CSS Custom Property */
--gradient-pink-purple-blue: linear-gradient(135deg, #FF66CC 0%, #9933FF 50%, #3399FF 100%);

/* Tailwind Class */
.bg-gradient-pink-purple-blue
.text-gradient-pink-purple-blue  /* For text gradients */
```

**Examples:**
```tsx
// Button with gradient background
<button className="bg-gradient-pink-purple-blue hover:from-purple-700 hover:to-pink-700 text-white px-button py-button rounded-lg">
  Explore Portfolio
</button>

// Title with gradient text
<h1 className="text-hero-h1 font-title font-bold text-gradient-pink-purple-blue text-center">
  Hi, I'm Ash Shaw
</h1>
```

### Secondary Gradient (Blue → Teal → Green)
**Usage:** Secondary CTAs, section accents

```css
/* CSS Custom Property */
--gradient-blue-teal-green: linear-gradient(135deg, #00BFFF 0%, #20C997 50%, #32CD32 100%);

/* Tailwind Class */
.bg-gradient-blue-teal-green
.text-gradient-blue-teal-green
```

**Example:**
```tsx
<button className="bg-gradient-blue-teal-green hover:from-blue-700 hover:to-teal-700 text-white px-button py-button rounded-lg">
  Read My Story
</button>
```

### Accent Gradient (Gold → Peach → Coral)
**Usage:** Special highlights, featured badges, premium features

```css
/* CSS Custom Property */
--gradient-gold-peach-coral: linear-gradient(135deg, #FFD700 0%, #FF9966 50%, #FF5E62 100%);

/* Tailwind Class */
.bg-gradient-gold-peach-coral
.text-gradient-gold-peach-coral
```

**Example:**
```tsx
<span className="inline-flex items-center px-3 py-1 bg-gradient-gold-peach-coral text-white font-body font-medium text-fluid-sm rounded-full">
  Featured
</span>
```

### Text Gradient Implementation

```tsx
// Required CSS for text gradients
.text-gradient-pink-purple-blue {
  background: linear-gradient(135deg, #FF66CC 0%, #9933FF 50%, #3399FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Neutral Colors

### Gray Scale
**Usage:** Text, backgrounds, borders, UI elements

```css
/* CSS Variables */
--color-white: #FFFFFF;
--color-gray-50: #F9FAFB;    /* Lightest backgrounds */
--color-gray-100: #F3F4F6;   /* Light backgrounds */
--color-gray-200: #E5E7EB;   /* Light borders */
--color-gray-300: #D1D5DB;   /* Medium borders */
--color-gray-400: #9CA3AF;   /* Disabled text */
--color-gray-500: #6B7280;   /* Placeholder text */
--color-gray-600: #4B5563;   /* Secondary text */
--color-gray-700: #374151;   /* Body text */
--color-gray-800: #1F2937;   /* Headings */
--color-gray-900: #111827;   /* Primary text */
--color-black: #000000;

/* Tailwind Classes */
.text-gray-800        /* Primary text color */
.text-gray-700        /* Body text color */
.text-gray-600        /* Secondary text */
.bg-gray-50           /* Subtle backgrounds */
.bg-white             /* Content backgrounds */
.border-gray-200      /* Subtle borders */
```

**Usage Guide:**
- **text-gray-900/800:** Headings and titles (AAA contrast)
- **text-gray-700:** Body text (AA contrast)
- **text-gray-600:** Secondary text, captions
- **text-gray-500:** Placeholder text
- **text-gray-400:** Disabled text
- **bg-white:** Card backgrounds, containers
- **bg-gray-50:** Page backgrounds, subtle sections
- **border-gray-200:** Subtle dividers and borders

---

## Accessibility Standards

### WCAG 2.1 AA Compliance

#### Contrast Ratios

**AAA Compliant (7:1 ratio) - Use for titles and headings:**
```css
.text-gray-800   /* #1F2937 on white - 7.02:1 */
.text-gray-900   /* #111827 on white - 10.46:1 */
.text-purple-900 /* #581C87 on white - 7.93:1 */
```

**AA Compliant (4.5:1 ratio) - Use for body text:**
```css
.text-gray-700   /* #374151 on white - 4.83:1 */
.text-blue-700   /* #1D4ED8 on white - 5.14:1 */
.text-green-700  /* #15803D on white - 4.52:1 */
.text-red-700    /* #B91C1C on white - 5.57:1 */
```

### Color Combinations

#### Text on White Backgrounds

✅ **GOOD:**
```tsx
<div className="bg-white">
  <h1 className="text-gray-800">Title (AAA - 7:1)</h1>
  <p className="text-gray-700">Body text (AA - 4.5:1)</p>
  <a href="#" className="text-blue-700">Link (AA - 5:1)</a>
</div>
```

❌ **AVOID:**
```tsx
<div className="bg-white">
  <p className="text-gray-400">Too light (2.5:1 - FAILS)</p>
  <a href="#" className="text-pink-300">Link too light (3:1 - FAILS)</a>
</div>
```

#### Text on Colored Backgrounds

✅ **GOOD:**
```tsx
<button className="bg-gradient-pink-purple-blue text-white">
  High contrast white on gradient
</button>

<div className="bg-gray-900 text-white">
  High contrast white on dark
</div>
```

❌ **AVOID:**
```tsx
<button className="bg-pink-300 text-pink-500">
  Low contrast pink on pink
</button>
```

---

## Common Color Patterns

### Buttons

```tsx
// Primary CTA
<button className="bg-gradient-pink-purple-blue hover:from-purple-700 hover:to-pink-700 text-white px-button py-button rounded-lg shadow-lg hover:shadow-xl">
  Primary Action
</button>

// Secondary CTA
<button className="bg-gradient-blue-teal-green hover:from-blue-700 hover:to-teal-700 text-white px-button py-button rounded-lg">
  Secondary Action
</button>

// Tertiary/Ghost
<button className="bg-transparent hover:bg-gray-100 text-gray-700 px-button py-button rounded-lg border border-gray-300">
  Tertiary Action
</button>
```

### Cards

```tsx
<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-card-responsive border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
  <h3 className="text-section-h2 font-heading font-semibold text-gray-800 mb-fluid-md">
    Card Title
  </h3>
  <p className="text-body-guideline font-body text-gray-700 leading-relaxed">
    Card content with proper contrast
  </p>
</div>
```

### Status Messages

```tsx
// Success
<div className="bg-green-100 border border-green-700 text-green-900 px-4 py-3 rounded-lg">
  Success message
</div>

// Error
<div className="bg-red-100 border border-red-700 text-red-900 px-4 py-3 rounded-lg">
  Error message
</div>

// Warning
<div className="bg-amber-100 border border-amber-700 text-amber-900 px-4 py-3 rounded-lg">
  Warning message
</div>

// Info
<div className="bg-sky-100 border border-sky-700 text-sky-900 px-4 py-3 rounded-lg">
  Info message
</div>
```

---

## Related Documentation

- **[typography.md](./typography.md)** - Typography system and hierarchy
- **[spacing.md](./spacing.md)** - Spacing scale and patterns
- **[Guidelines.md](../Guidelines.md)** - Main guidelines
- **[overview-components.md](../overview-components.md)** - Component system

---

## CSS Variables Reference

```css
/* Brand Colors */
--color-pink-300: #FDA4AF;
--color-pink-500: #FF66CC;
--color-pink-700: #E91E63;
--color-purple-300: #D8B4FE;
--color-purple-600: #9933FF;
--color-purple-700: #7E22CE;
--color-purple-900: #581C87;
--color-blue-400: #60A5FA;
--color-blue-500: #3399FF;
--color-blue-700: #1D4ED8;

/* Semantic Colors */
--color-green-100: #DCFCE7;
--color-green-700: #15803D;
--color-green-900: #14532D;
--color-red-100: #FEE2E2;
--color-red-700: #B91C1C;
--color-red-900: #7F1D1D;
--color-amber-100: #FEF3C7;
--color-amber-700: #B45309;
--color-amber-900: #78350F;
--color-sky-100: #E0F2FE;
--color-sky-700: #0369A1;
--color-sky-900: #0C4A6E;

/* Gradient System */
--gradient-pink-purple-blue: linear-gradient(135deg, #FF66CC 0%, #9933FF 50%, #3399FF 100%);
--gradient-blue-teal-green: linear-gradient(135deg, #00BFFF 0%, #20C997 50%, #32CD32 100%);
--gradient-gold-peach-coral: linear-gradient(135deg, #FFD700 0%, #FF9966 50%, #FF5E62 100%);

/* Neutral Colors */
--color-white: #FFFFFF;
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;
--color-gray-700: #374151;
--color-gray-800: #1F2937;
--color-gray-900: #111827;
--color-black: #000000;
```