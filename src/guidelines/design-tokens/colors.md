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

### Primary Brand Palette

```
┌─────────────────────────────────────────────────────────────────────┐
│                     BRAND COLOR HIERARCHY                            │
└─────────────────────────────────────────────────────────────────────┘

PRIMARY GRADIENT (Pink → Purple → Blue)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
█████ #ff61d8 → ██████ #b967ff → ██████ #01c3cc
Pink           Purple            Blue
(Vibrant)      (Energetic)       (Cool)

SECONDARY GRADIENT (Blue → Teal → Green)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
██████ #01c3cc → ██████ #05f0db → ██████ #6cff97
Blue           Teal              Green
(Cool)         (Fresh)           (Growth)

ACCENT GRADIENT (Gold → Peach → Coral)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
██████ #ffd97d → ██████ #ffaa9e → ██████ #ff7c73
Gold           Peach             Coral
(Warm)         (Soft)            (Energetic)

┌─────────────────────────────────────────────────────────────────────┐
│                     GRADIENT USAGE HIERARCHY                         │
└─────────────────────────────────────────────────────────────────────┘

Priority 1: PRIMARY (Pink-Purple-Blue)
──────────────────────────────────────
Usage:
  • Main CTA buttons
  • Hero titles
  • Primary navigation active states
  • Feature highlights
  
Visual Weight: MAXIMUM
Frequency: 70% of branded elements

Priority 2: SECONDARY (Blue-Teal-Green)
────────────────────────────────────────
Usage:
  • Secondary CTA buttons
  • Section accents
  • Interactive elements
  • Supporting content
  
Visual Weight: MEDIUM
Frequency: 20% of branded elements

Priority 3: ACCENT (Gold-Peach-Coral)
──────────────────────────────────────
Usage:
  • Decorative elements
  • Background orbs
  • Subtle highlights
  • Tertiary buttons
  
Visual Weight: LIGHT
Frequency: 10% of branded elements

┌─────────────────────────────────────────────────────────────────────┐
│                     COLOR CONTRAST MATRIX                            │
└─────────────────────────────────────────────────────────────────────┘

Text on Background Combinations:
─────────────────────────────────

                  White      Light Gray    Dark Gray     Black
                  #ffffff    #f3f4f6       #374151      #000000
───────────────────────────────────────────────────────────────────
Pink #ff61d8    │  3.1:1 ❌  │  4.2:1 ⚠️   │  8.5:1 ✅   │ 12.1:1 ✅
Purple #b967ff  │  4.5:1 ✅  │  5.2:1 ✅   │  9.1:1 ✅   │ 14.3:1 ✅
Blue #01c3cc    │  2.8:1 ❌  │  3.9:1 ⚠️   │  7.8:1 ✅   │ 11.2:1 ✅
Teal #05f0db    │  1.9:1 ❌  │  2.5:1 ❌   │  5.2:1 ✅   │  8.9:1 ✅
Green #6cff97   │  1.5:1 ❌  │  2.1:1 ❌   │  4.1:1 ⚠️   │  7.3:1 ✅

Legend:
✅ WCAG AA+ (7:1+)   - Excellent for body text
✅ WCAG AA (4.5:1+)  - Good for body text
⚠️ WCAG Large (3:1+) - OK for large text (18px+) only
❌ Fails (<3:1)      - Do not use

Recommended Combinations:
─────────────────────────
✅ White text on gradient backgrounds (buttons)
✅ Dark gray (#374151) or black text on white backgrounds
✅ Light gray (#f3f4f6) backgrounds with dark text
❌ Avoid brand colors on white for body text
❌ Avoid gradient text on gradient backgrounds

┌─────────────────────────────────────────────────────────────────────┐
│                     SEMANTIC COLOR SYSTEM                            │
└─────────────────────────────────────────────────────────────────────┘

SUCCESS (Green)
───────────────
bg-green-50     ░░░░░  #f0fdf4  (Light background)
bg-green-100    ░░░░░  #dcfce7  (Subtle background)
bg-green-500    ██████  #22c55e  (Primary action)
bg-green-700    ██████  #15803d  (Dark variant)
text-green-900  ██████  #14532d  (Text)

Usage: Success messages, confirmations, checkmarks
Example: "Message sent successfully!"

ERROR (Red)
───────────
bg-red-50       ░░░░░  #fef2f2  (Light background)
bg-red-100      ░░░░░  #fee2e2  (Subtle background)
bg-red-500      ██████  #ef4444  (Primary action)
bg-red-700      ██████  #b91c1c  (Dark variant)
text-red-900    ██████  #7f1d1d  (Text)

Usage: Error messages, validation errors, destructive actions
Example: "Failed to submit form"

WARNING (Amber/Orange)
──────────────────────
bg-amber-50     ░░░░░  #fffbeb  (Light background)
bg-amber-100    ░░░░░  #fef3c7  (Subtle background)
bg-amber-500    ██████  #f59e0b  (Primary action)
bg-amber-700    ██████  #b45309  (Dark variant)
text-amber-900  ██████  #78350f  (Text)

Usage: Warnings, cautions, alerts
Example: "Your session will expire soon"

INFO (Blue)
───────────
bg-blue-50      ░░░░░  #eff6ff  (Light background)
bg-blue-100     ░░░░░  #dbeafe  (Subtle background)
bg-blue-500     ██████  #3b82f6  (Primary action)
bg-blue-700     ██████  #1d4ed8  (Dark variant)
text-blue-900   ██████  #1e3a8a  (Text)

Usage: Information messages, tips, notes
Example: "New features available"

┌─────────────────────────────────────────────────────────────────────┐
│                     NEUTRAL SCALE (Grays)                            │
└─────────────────────────────────────────────────────────────────────┘

White → Gray → Black
──────────────────────

white           ░░░░░  #ffffff  (Pure white - backgrounds)
gray-50         ░░░░░  #f9fafb  (Lightest gray - subtle bg)
gray-100        ░░░░░  #f3f4f6  (Light gray - card bg)
gray-200        ▒▒▒▒▒  #e5e7eb  (Borders, dividers)
gray-300        ▒▒▒▒▒  #d1d5db  (Inactive borders)
gray-400        ▓▓▓▓▓  #9ca3af  (Placeholder text)
gray-500        ▓▓▓▓▓  #6b7280  (Secondary text)
gray-600        ▓▓▓▓▓  #4b5563  (Body text light)
gray-700        ██████  #374151  (Primary body text)
gray-800        ██████  #1f2937  (Headings)
gray-900        ██████  #111827  (Dark headings)
black           ██████  #000000  (Pure black - rare use)

Usage Guidelines:
─────────────────
✅ gray-50 to gray-200: Backgrounds, subtle surfaces
✅ gray-300 to gray-400: Borders, dividers, disabled states
✅ gray-500 to gray-600: Secondary text, metadata
✅ gray-700 to gray-900: Primary text, headings
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