# 🎨 Ash Shaw Makeup Portfolio – Design & Development Guidelines

This document defines the core design, development, and technical guidelines for building and maintaining the Ash Shaw Makeup Portfolio in **Figma Make**. It serves as the entry point to a comprehensive design system with detailed documentation organized in separate files.

**Version:** 5.0.0  
**Last Updated:** January 2025

## 📋 Major Update (v5.0.0)

**🚀 WordPress-Aligned Design Token System**

This version introduces a complete restructuring of our CSS variable system to align with WordPress theme.json standards while maintaining our existing visual design. This architectural improvement provides:

- ✅ **Single Source of Truth:** Predictable, token-based system
- ✅ **WordPress Standards:** CSS variables follow `--wp--preset--` naming conventions
- ✅ **Numeric Slugs:** Size-like presets use numeric scale (100-900)
- ✅ **Semantic Colors:** Color presets use semantic names + prefixed scales
- ✅ **Future-Proof:** Compatible with WordPress block theme ecosystem

**Migration Impact:**
- CSS variables renamed from custom names to WordPress-aligned names
- Design tokens reorganized into WordPress preset categories
- No visual changes to the website
- Better maintainability and predictability

**See:** [wordpress-preset-system.md](./wordpress-preset-system.md) for complete implementation details

## 📚 How to Use These Guidelines

This project has a comprehensive design system with guidelines organized across multiple files. **Always follow this reading order:**

### Step 1: Read Overview Files (REQUIRED)
Read ALL overview files in this directory:
- **[overview-components.md](./overview-components.md)** - Component system and React architecture diagram
- **[overview-icons.md](./overview-icons.md)** - Icon system and verification process
- **[overview-sections.md](./overview-sections.md)** - Section patterns (WordPress block theme aligned)
- **[overview-blocks.md](./overview-blocks.md)** - Block patterns and content units
- **[overview-patterns.md](./overview-patterns.md)** - Design patterns and compositions
- **[overview-parts.md](./overview-parts.md)** - Template parts (Header, Footer, etc.)
- **[overview-templates.md](./overview-templates.md)** - Page templates and layouts
- **[mock-data.md](./mock-data.md)** - 🆕 Mock data system and usage (IMPORTANT!)

### Step 2: Read Design Tokens (REQUIRED)
Read ALL files in the `design-tokens/` folder. Do NOT skip this step:
- **[colors.md](./design-tokens/colors.md)** - Color system with semantic tokens and light/dark mode palettes
- **[typography.md](./design-tokens/typography.md)** - Typography scale and hierarchy
- **[spacing.md](./design-tokens/spacing.md)** - Spacing system and responsive patterns

### Step 2.5: Understand Light/Dark Mode System (REQUIRED)
Read the light/dark mode documentation for complete theme implementation:
- **[dark-mode-implementation.md](./dark-mode-implementation.md)** - Complete dark mode implementation guide
- **[component-dark-mode.md](./component-dark-mode.md)** - Component-specific dark/light mode patterns

### Step 3: Understand Mock Data System (REQUIRED)
Read the mock data guidelines to understand centralized data management:
- **[mock-data.md](./mock-data.md)** - Complete guide to the mock data system

### Step 4: Read Component Guidelines BEFORE Using (REQUIRED)
BEFORE using ANY component, you MUST read its specific guideline file:
- Using Logo? → Read **[components/Logo.md](./components/Logo.md)** FIRST
- Using ScrollDownArrow? → Read **[components/ScrollDownArrow.md](./components/ScrollDownArrow.md)** FIRST
- Using ScrollBackToTop? → Read **[components/ScrollBackToTop.md](./components/ScrollBackToTop.md)** FIRST

### Step 5: Verify Icons Before Using (REQUIRED)
Before using ANY icon, check **[overview-icons.md](./overview-icons.md)** for the verification process. Never assume an icon exists.

---

## 🚨 CRITICAL STYLING RULE - MUST FOLLOW

### ⚠️ Global CSS Classes Over Tailwind Utilities

**SYSTEMATIC TRANSITION IN PROGRESS:** This codebase is actively migrating from Tailwind utility classes to WordPress-aligned global CSS classes defined in `/styles/globals.css`.

**Priority Order for Styling:**
1. **✅ FIRST CHOICE:** Use global CSS classes from `/styles/globals.css` (e.g., `.bg-card`, `.text-hero-h1`, `.py-section-md`)
2. **⚠️ FALLBACK ONLY:** Use Tailwind utilities ONLY when global CSS class doesn't exist
3. **🚫 NEVER:** Use inline styles

```tsx
// ✅ CORRECT - Global CSS classes from globals.css
<div className="bg-card p-card-responsive rounded-card-default">
  <h2 className="text-section-h2 text-card-title">Title</h2>
</div>

// ⚠️ ACCEPTABLE - Tailwind as fallback when global class unavailable
<div className="flex items-center gap-4">
  <span className="text-gray-600 dark:text-gray-300">Text</span>
</div>

// ❌ WRONG - Inline styles
<div style={{ padding: '16px', backgroundColor: '#ffffff' }}>
  Content
</div>
```

### ⚠️ Base Component Override Requirements

**YOU MUST EXPLICITLY SET ALL STYLING** from guidelines to override component defaults:

```tsx
// ❌ WRONG - May inherit unwanted defaults, gaps, or typography
<Button>Submit</Button>
<div className="flex">
  <Card>Content</Card>
</div>

// ✅ CORRECT - Explicitly styled per guidelines with all required classes
<Button className="w-full sm:w-auto justify-center text-center bg-gradient-pink-purple-blue hover:from-purple-700 hover:to-pink-700 text-white px-button py-button font-body font-medium text-button-fluid transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:ring-opacity-50">
  Submit
</Button>
```

**Every component must use guidelines-compliant classes. Never rely on component defaults.**

### 🚫 NO INLINE STYLES - CRITICAL RULE

**NEVER USE INLINE STYLES.** All styling must be done through CSS classes defined in `/styles/globals.css` or Tailwind utility classes.

---

## 1. 📁 Project Structure & Architecture

### File Organization (January 2025)

```
ash-shaw-makeup-portfolio/
├── 📄 App.tsx                         # Main application router
├── 📄 main.tsx                        # React entry point
├── 📄 index.html                      # HTML template
├──
├── 📁 components/
│   ├── 📁 admin/                      # CMS tools
│   ├── 📁 common/                     # Shared components (Header, Footer, Logo)
│   ├── 📁 pages/                      # Page components (Home, About, Portfolio, Blog)
│   ├── 📁 sections/                   # Layout sections
│   ├── 📁 ui/                         # UI primitives
│   └── 📁 figma/                      # Figma integration utilities
│
├── 📁 data/                           # 🆕 Centralized mock data system
│   ├── 📁 mock/                       # Mock data (single source of truth)
│   │   ├── 📁 images/                 # Hero images (9 images)
│   │   ├── 📁 pages/                  # Page content (home, about, portfolio)
│   │   ├── 📁 portfolio/              # Portfolio entries (43 entries, 19 Figma assets)
│   │   ├── 📁 blog/                   # Blog data (5 posts, 6 categories)
│   │   └── 📁 ui/                     # UI elements (social links, etc.)
│   └── 📁 types/                      # TypeScript type definitions
│
├── 📁 styles/
│   └── 📄 globals.css                 # Tailwind V4 + brand system
│
├── 📁 utils/
│   ├── 📄 emailService.ts             # Email service (demo mode)
│   └── 📄 contentfulService.ts        # CMS integration
│
├── 📁 hooks/                          # React hooks
│
├── 📁 guidelines/                     # THIS DIRECTORY
│   ├── 📄 Guidelines.md               # This file (start here)
│   ├── 📄 README.md                   # Documentation index
│   ├── 📄 mock-data.md                # 🆕 Mock data system guide
│   ├── 📄 overview-components.md      # Component system overview + React diagram
│   ├── 📄 overview-icons.md           # Icon system guide
│   ├── 📁 components/                 # Component-specific docs (24 files)
│   ├── 📁 design-tokens/              # Design token specifications (colors, typography, spacing)
│   ├── 📁 icons/                      # Icon category docs (travel, interface)
│   ├── 📁 mobile/                     # Mobile-specific guidelines (typography, spacing, buttons, animations)
│   ├── 📁 sections/                   # Section patterns (WordPress block theme aligned)
│   ├── 📁 blocks/                     # Block patterns and content units
│   ├── 📁 patterns/                   # Design patterns and compositions
│   ├── 📁 parts/                      # Template parts (Header, Footer, etc.)
│   └── 📁 templates/                  # Page templates and layouts
│
├── 📁 public/                         # Static assets
└── 📁 Configuration Files             # Build and deployment configs
```

### Component Architecture Overview

See **[overview-components.md](./overview-components.md)** for complete component hierarchy and usage patterns.

**Key Application Structure:**
```typescript
App.tsx (Router + Global State)
├── Header (Navigation + Mobile Menu)
├── HomePage (Hero + Featured + Blog Preview)
├── AboutPage (Journey + Philosophy)
├── PortfolioPage (Gallery + Lightbox)
├── BlogPage (Search + Filtering + Pagination)
├── BlogPostPage (Rich Content + Sharing)
└── Footer (Contact Form + Social Links)
```

---

## 2. 🔗 Dependencies & Integrations

### Core Dependencies
- **React 18+** - Concurrent features and modern hooks
- **Tailwind CSS V4** - Utility-first styling with custom design tokens
- **Lucide React** - Icon library (1000+ icons)
- **TypeScript** - Type safety and developer experience

### Backend Integration
- **Contentful CMS** - Dynamic content management
- **Netlify** - Production deployment and CDN

### Backend Integration Documentation

**📖 Complete Integration Guides:**
- **[Contentful Integration](./contentful-integration.md)** - Complete CMS integration guide with content model alignment

### Key Features
- ✅ Variable Font System (73% fewer requests)
- ✅ Contentful CMS Integration (with static fallbacks)
- ✅ WordPress-Inspired Fluid Typography
- ✅ WCAG 2.1 AA Accessibility Compliance
- ✅ Advanced Blog System (search, filtering, pagination)
- ✅ Demo Mode Contact Form (ready for backend integration)

---

## 3. 🎨 Brand Identity & Design System

### Responsive Breakpoints

**Fluid Width System:**
```css
/* Desktop (large screens) */
@media (min-width: 1440px) { /* Desktop > 1440px */ }

/* Desktop (standard) */
@media (min-width: 1024px) { /* Tablet landscape > 1024px */ }

/* Tablet Portrait */
@media (min-width: 768px) { /* Tablet portrait > 768px */ }

/* Mobile */
@media (min-width: 420px) { /* Mobile > 420px */ }

/* Mobile Compact */
@media (min-width: 320px) { /* Mobile compact > 320px */ }
```

**Fluid Horizontal Padding:**
- **Range:** 16px (min) to 32px (max)
- **CSS Variable:** `--wp--custom--spacing--horizontal` or `--px-horizontal-section`
- **Implementation:** `padding-left: clamp(1rem, 2vw, 2rem);` and `padding-right: clamp(1rem, 2vw, 2rem);`
- **CSS Class:** `.px-horizontal-section` for consistent horizontal padding
- **Applied to:** All major sections, page containers, and layout wrappers

```tsx
// ✅ CORRECT - Using the global CSS class
<section className="px-horizontal-section py-section">
  Content with consistent horizontal padding
</section>

// ✅ CORRECT - Using the CSS variable
<div style={{ paddingLeft: 'var(--wp--custom--spacing--horizontal)', paddingRight: 'var(--wp--custom--spacing--horizontal)' }}>
  Custom element with fluid padding
</div>
```

### Fluid Typography Scale

**Heading Sizes (H1-H6) with Fluid Min/Max:**

```css
/* H1 - Hero Title */
.text-hero-h1 {
  font-size: clamp(2.25rem, 6vw, 7.5rem); /* 36px → 120px */
}

/* H2 - Section Headings */
.text-section-h2 {
  font-size: clamp(1.5rem, 4vw, 3rem); /* 24px → 48px */
}

/* H3 - Subsection Headings */
.text-subsection-h3 {
  font-size: clamp(1.25rem, 3vw, 2rem); /* 20px → 32px */
}

/* H4 - Card Titles */
.text-card-h4 {
  font-size: clamp(1.125rem, 2.5vw, 1.5rem); /* 18px → 24px */
}

/* H5 - Small Headings */
.text-small-h5 {
  font-size: clamp(1rem, 2vw, 1.25rem); /* 16px → 20px */
}

/* H6 - Micro Headings */
.text-micro-h6 {
  font-size: clamp(0.875rem, 1.5vw, 1rem); /* 14px → 16px */
}

/* P - Body Text */
.text-body-p {
  font-size: clamp(1rem, 1.5vw, 1.25rem); /* 16px → 20px */
}

/* P - Small Body Text */
.text-body-small-p {
  font-size: clamp(0.875rem, 1.25vw, 1rem); /* 14px → 16px */
}

/* P - Large Body Text */
.text-body-large-p {
  font-size: clamp(1.125rem, 1.75vw, 1.375rem); /* 18px → 22px */
}
```

**Typography Implementation Notes:**
- All headings use `font-heading` (Playfair Display) for elegance
- Body text uses `font-body` (Inter) for readability
- Line heights are automatically calculated based on font size
- Letter spacing adjusts proportionally with fluid sizing
- Always use semantic HTML (`<h1>`, `<h2>`, `<p>`) with these CSS classes

### Complete Fluid Typography & Spacing Reference

**Quick Reference Table:**

| Element | CSS Class | Min Size | Max Size | CSS Variable |
|---------|-----------|----------|----------|--------------|
| **Hero Title (H1)** | `.text-hero-h1` | 36px (2.25rem) | 120px (7.5rem) | `--text-hero-h1` |
| **Section Heading (H2)** | `.text-section-h2` | 24px (1.5rem) | 48px (3rem) | `--text-section-h2` |
| **Subsection (H3)** | `.text-subsection-h3` | 20px (1.25rem) | 32px (2rem) | N/A |
| **Card Title (H4)** | `.text-card-h4` | 18px (1.125rem) | 24px (1.5rem) | N/A |
| **Small Heading (H5)** | `.text-small-h5` | 16px (1rem) | 20px (1.25rem) | N/A |
| **Micro Heading (H6)** | `.text-micro-h6` | 14px (0.875rem) | 16px (1rem) | N/A |
| **Body Text (P)** | `.text-body-p` | 16px (1rem) | 20px (1.25rem) | `--text-body-guideline` |
| **Small Body (P)** | `.text-body-small-p` | 14px (0.875rem) | 16px (1rem) | N/A |
| **Large Body (P)** | `.text-body-large-p` | 18px (1.125rem) | 22px (1.375rem) | N/A |
| **Horizontal Padding** | `.px-horizontal-section` | 16px (1rem) | 32px (2rem) | `--wp--custom--spacing--horizontal` |

**Usage Examples:**

```tsx
// Hero Section with fluid typography
<section className="px-horizontal-section py-section">
  <h1 className="text-hero-h1 font-title">
    Ash Shaw Makeup Artist
  </h1>
  <p className="text-body-large-p font-body">
    Makeup that shines with colour, energy, and connection.
  </p>
</section>

// Card with responsive typography
<div className="bg-card p-card-responsive">
  <h4 className="text-card-h4 font-heading">Card Title</h4>
  <p className="text-body-p font-body">Card content description</p>
</div>

// Section with consistent padding
<section className="px-horizontal-section py-section-md">
  <h2 className="text-section-h2 font-heading">Section Title</h2>
  <h3 className="text-subsection-h3 font-heading">Subsection</h3>
  <p className="text-body-p font-body">Section content</p>
</section>
```

**Mobile Menu Visibility:**
- Mobile menu is visible at breakpoints: **768px and below** (tablet portrait, mobile, mobile compact)
- Desktop menu is visible at breakpoints: **1024px and above** (tablet landscape, desktop)

### Logo & Brand Mark
- **Fonts:** Playfair Display (serif) + Inter (sans-serif)
- **Icon:** Colorful brushstroke/paintbrush motif
- **Behavior:** Links to homepage, responsive scaling, hover animations
- **Implementation:** See **[components/Logo.md](./components/Logo.md)**

### Tagline & Brand Voice
_"Makeup that shines with colour, energy, and connection."_

- **Usage:** Hero, footer, email templates
- **Styling:** `text-gradient-pink-purple-blue` class

### Design Tokens
Comprehensive design system with semantic tokens for:
- **Colors** - See **[design-tokens/colors.md](./design-tokens/colors.md)**
- **Typography** - See **[design-tokens/typography.md](./design-tokens/typography.md)**
- **Spacing** - See **[design-tokens/spacing.md](./design-tokens/spacing.md)**

---

## 3.5. 📐 Fluid & Responsive Implementation Guide

### Overview

This project uses a **comprehensive fluid design system** that automatically adapts to all screen sizes (320px → 1440px) using CSS `clamp()` functions and viewport-based calculations. All values are pre-defined in `/styles/globals.css` as WordPress-aligned CSS variables and helper classes.

### ✅ System Status: FULLY IMPLEMENTED

**All fluid systems are complete and production-ready:**
- ✅ **5 Responsive Breakpoints** - Mobile compact → Desktop large
- ✅ **Fluid Horizontal Padding** - 16px → 32px across all screen sizes
- ✅ **9 Fluid Typography Classes** - H1-H6 + 3 P variants with min/max values
- ✅ **7 Vertical Spacing Classes** - Section padding variants
- ✅ **150+ Helper Classes** - Complete WordPress-aligned utility system

### Responsive Breakpoints (Media Queries)

**Use these breakpoints for custom responsive behavior:**

```css
/* Mobile Compact - 320px and up */
@media (min-width: 320px) {
  /* Base mobile styles - smallest phones */
}

/* Mobile Standard - 420px and up */
@media (min-width: 420px) {
  /* Enhanced mobile experience */
}

/* Tablet Portrait - 768px and up */
@media (min-width: 768px) {
  /* Tablet vertical orientation */
  /* Mobile menu switches to desktop menu at 1024px */
}

/* Tablet Landscape - 1024px and up */
@media (min-width: 1024px) {
  /* Tablet horizontal + small desktop */
  /* Desktop navigation becomes visible */
}

/* Desktop Large - 1440px and up */
@media (min-width: 1440px) {
  /* Large desktop screens and up */
}
```

**Navigation Behavior:**
- **Mobile Menu Visible:** 320px - 1023px (mobile compact, mobile, tablet portrait)
- **Desktop Menu Visible:** 1024px and above (tablet landscape, desktop)

### Fluid Horizontal Padding (16px → 32px)

**Automatically applied horizontal padding that scales with viewport:**

```tsx
// ✅ Method 1: Use the helper class (RECOMMENDED)
<section className="px-horizontal-section">
  Content with automatic 16px → 32px horizontal padding
</section>

// ✅ Method 2: Use the CSS variable
<div style={{ 
  paddingLeft: 'var(--wp--custom--spacing--horizontal)',
  paddingRight: 'var(--wp--custom--spacing--horizontal)'
}}>
  Custom element with fluid padding
</div>
```

**CSS Variable:** `--wp--custom--spacing--horizontal`  
**CSS Class:** `.px-horizontal-section`  
**Implementation:** `clamp(1rem, 2vw, 2rem)` (16px → 32px)

### Complete Fluid Typography System

**All typography classes include proper font family, line height, and letter spacing:**

| Element | CSS Class | Min | Max | Font Family |
|---------|-----------|-----|-----|-------------|
| **Hero Title (H1)** | `.text-hero-h1` | 36px | 120px | Righteous (title font) |
| **Section Heading (H2)** | `.text-section-h2` | 24px | 48px | Playfair Display (heading) |
| **Subsection (H3)** | `.text-subsection-h3` | 20px | 32px | Playfair Display (heading) |
| **Card Title (H4)** | `.text-card-h4` | 18px | 24px | Playfair Display (heading) |
| **Small Heading (H5)** | `.text-small-h5` | 16px | 20px | Playfair Display (heading) |
| **Micro Heading (H6)** | `.text-micro-h6` | 14px | 16px | Playfair Display (heading) |
| **Body Text (P)** | `.text-body-p` | 16px | 20px | Inter (body) |
| **Small Body (P)** | `.text-body-small-p` | 14px | 16px | Inter (body) |
| **Large Body (P)** | `.text-body-large-p` | 18px | 22px | Inter (body) |

**Usage Examples:**

```tsx
// ✅ Hero section with proper fluid typography
<section className="px-horizontal-section py-section-lg">
  <h1 className="text-hero-h1 font-title text-gradient-pink-purple-blue">
    Ash Shaw Makeup Artist
  </h1>
  <p className="text-body-large-p font-body text-center">
    Makeup that shines with colour, energy, and connection.
  </p>
</section>

// ✅ Standard section with heading hierarchy
<section className="px-horizontal-section py-section-md">
  <h2 className="text-section-h2 font-heading text-center mb-fluid-lg">
    My Journey
  </h2>
  <h3 className="text-subsection-h3 font-heading mb-fluid-md">
    Getting Started
  </h3>
  <p className="text-body-p font-body">
    Section content with responsive body text.
  </p>
</section>

// ✅ Card component with appropriate sizing
<div className="bg-card p-card-responsive rounded-card-default">
  <h4 className="text-card-h4 font-heading mb-spacing-20">
    Card Title
  </h4>
  <p className="text-body-small-p font-body">
    Card description text.
  </p>
</div>
```

### Vertical Section Spacing Classes

**Pre-defined classes for consistent vertical rhythm:**

| CSS Class | Min Padding | Max Padding | Use Case |
|-----------|-------------|-------------|----------|
| `.py-section-xs` | 16px | 16px | Minimal spacing (fixed) |
| `.py-section-sm` | 16px | 32px | Small sections |
| `.py-section-md` | 24px | 48px | **Default** - Most sections |
| `.py-section-md-plus` | 27.6px | 55.2px | Enhanced spacing (+15%) |
| `.py-section-lg` | 32px | 64px | Large sections |
| `.py-section-xl` | 48px | 96px | Hero sections |
| `.py-section` | 48px | 128px | Maximum spacing |

**Usage:**

```tsx
// ✅ Standard section with medium padding
<section className="px-horizontal-section py-section-md bg-hero-light">
  <h2 className="text-section-h2">Section Title</h2>
  {/* Content */}
</section>

// ✅ Hero section with extra large padding
<section className="px-horizontal-section py-section-xl">
  <h1 className="text-hero-h1">Hero Title</h1>
  {/* Hero content */}
</section>

// ✅ Compact section with small padding
<section className="px-horizontal-section py-section-sm">
  {/* Compact content */}
</section>
```

### Complete Layout Pattern

**Standard page section with all fluid values applied:**

```tsx
export function MyPageSection() {
  return (
    <section className="px-horizontal-section py-section-md bg-section-light dark:bg-section-dark">
      <div className="max-w-screen-xl mx-auto">
        {/* Hero Title */}
        <h1 className="text-hero-h1 font-title text-gradient-pink-purple-blue text-center mb-fluid-xl">
          Page Title
        </h1>
        
        {/* Section Heading */}
        <h2 className="text-section-h2 font-heading text-center mb-fluid-lg">
          Section Heading
        </h2>
        
        {/* Subsection */}
        <h3 className="text-subsection-h3 font-heading mb-fluid-md">
          Subsection Title
        </h3>
        
        {/* Body Content */}
        <p className="text-body-p font-body mb-fluid-md">
          This is body text that automatically scales from 16px to 20px
          based on viewport width. All spacing is fluid and responsive.
        </p>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-lg">
          <div className="bg-card p-card-responsive rounded-card-default shadow-card hover:shadow-card-hover transition-shadow-300">
            <h4 className="text-card-h4 font-heading mb-spacing-20">
              Card Title
            </h4>
            <p className="text-body-small-p font-body">
              Card description
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Best Practices

**✅ DO:**
1. Always use `.px-horizontal-section` for horizontal padding
2. Use semantic heading classes (`.text-hero-h1`, `.text-section-h2`, etc.)
3. Apply appropriate vertical spacing classes (`.py-section-md`, `.py-section-lg`)
4. Combine fluid typography with proper font families (`.font-heading`, `.font-body`, `.font-title`)
5. Use spacing helper classes for margins (`.mb-fluid-lg`, `.mt-fluid-md`)

**❌ DON'T:**
1. Don't hardcode pixel values for padding or font sizes
2. Don't use inline styles for responsive values
3. Don't override fluid classes with fixed values
4. Don't mix Tailwind spacing classes with WordPress-aligned classes
5. Don't forget to add proper font family classes

### Quick Reference: Common Patterns

```tsx
// Hero Section
<section className="px-horizontal-section py-section-xl bg-hero-light dark:bg-section-dark">
  <h1 className="text-hero-h1 font-title">Title</h1>
</section>

// Standard Section
<section className="px-horizontal-section py-section-md">
  <h2 className="text-section-h2 font-heading">Heading</h2>
  <p className="text-body-p font-body">Content</p>
</section>

// Card Component
<div className="bg-card p-card-responsive">
  <h4 className="text-card-h4 font-heading">Title</h4>
  <p className="text-body-small-p font-body">Description</p>
</div>

// Horizontal Padding Only
<div className="px-horizontal-section">
  Content with fluid horizontal padding
</div>
```

### CSS Variables Reference

**For custom implementations, use these CSS variables:**

```css
/* Horizontal Padding */
--wp--custom--spacing--horizontal: clamp(1rem, 2vw, 2rem);

/* Typography */
--text-hero-h1: clamp(2.25rem, 6vw, 7.5rem);
--text-section-h2: clamp(1.5rem, 4vw, 3rem);
--text-body-guideline: clamp(1rem, 1.5vw, 1.25rem);

/* Spacing Scale */
--wp--preset--spacing--fluid-md: clamp(1rem, 0.6rem + 2vw, 2rem);
--wp--preset--spacing--fluid-lg: clamp(1.5rem, 1rem + 2.5vw, 3rem);
--wp--preset--spacing--section: clamp(3rem, 6vw + 1rem, 8rem);
```

### Migration Checklist

**When updating existing components:**

- [ ] Replace hardcoded horizontal padding with `.px-horizontal-section`
- [ ] Replace fixed font sizes with fluid typography classes
- [ ] Replace fixed vertical padding with `.py-section-*` classes
- [ ] Ensure all headings have proper font family classes
- [ ] Test across all breakpoints (320px, 768px, 1024px, 1440px)
- [ ] Verify mobile menu visibility at 768px breakpoint
- [ ] Confirm desktop menu visibility at 1024px breakpoint

---

## 4. ♿ Accessibility Standards

### WCAG 2.1 AA Compliance

All components must meet:
- **Color Contrast:** 4.5:1 minimum (body text), 7:1 for headings
- **Keyboard Navigation:** Full support (Tab, Enter, Space, Arrows, Escape)
- **Screen Readers:** Proper ARIA labels and semantic HTML
- **Focus Management:** Visible focus indicators and logical tab order
- **Touch Targets:** Minimum 44px for mobile accessibility

### Implementation Patterns

```tsx
// Focus Management
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    onAction();
  } else if (e.key === 'Escape') {
    closeModal();
  }
};

// Screen Reader Support
<button
  aria-label="View portfolio in lightbox"
  aria-expanded={isOpen}
  onClick={handleAction}
  onKeyDown={handleKeyDown}
>
  View Gallery
</button>
```

---

## 5. 📧 Backend Integrations

## 5. 📧 Backend Integrations

### Contact Form Email Service
- **Demo Mode:** Fully functional contact form with validation and UX
- **Features:** Honeypot protection, client-side validation, error handling
- **Ready for Integration:** Can be connected to any backend service (Netlify Functions, Vercel, AWS Lambda, etc.)

**Implementation Details:**
- Contact form validates all inputs client-side
- Simulates realistic email delivery with success/error states
- Provides user-friendly feedback messages
- Includes comprehensive logging for debugging
- No backend required for testing and development

### Contentful CMS
- **Dynamic content management** for portfolio, blog, and pages
- **Static fallbacks** for development without CMS setup
- **Image optimization** with automatic WebP conversion
- **Rich text processing** for blog content

**📖 Detailed Documentation:** See **[Contentful Integration Guide](./contentful-integration.md)** for content model alignment, CMS setup, and fallback strategies.

### Environment Variables Required
```bash
# Contentful (Optional - works without)
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=your_token
```

**Note:** Email backend integration has been removed. To enable real email delivery, integrate with your preferred backend service:
- Netlify Functions
- Vercel Serverless Functions
- AWS Lambda
- Custom API server

---

## 6. 🛠️ Component Implementation Standards

### TypeScript Requirements

Every component must include:

```typescript
/**
 * Component description and purpose
 * 
 * @component
 * @param {ComponentProps} props - Component properties
 * @returns {JSX.Element} Rendered component
 * 
 * @accessibility
 * - WCAG compliance details
 * - Keyboard navigation support
 * 
 * @example
 * <Component title="Example" />
 */
interface ComponentProps {
  /** Required prop with description */
  title: string;
  /** Optional prop with default */
  size?: 'sm' | 'md' | 'lg';
  /** Callback with parameters documented */
  onAction: (value: string) => void;
}

export function Component({ title, size = 'md', onAction }: ComponentProps) {
  // Implementation
}
```

### Export Standards
- **Named Exports:** All components (for tree-shaking)
- **Default Export:** Only App.tsx
- **Type Exports:** Separate export for shared interfaces

```typescript
// ✅ Correct
export function ComponentName(props: ComponentProps) {}
export type { ComponentProps };

// ❌ Avoid (except App.tsx)
export default ComponentName;
```

### Naming Conventions
- **Files:** PascalCase (`ContactForm.tsx`)
- **Functions:** camelCase (`sendContactForm()`)
- **Constants:** UPPER_SNAKE_CASE (`SOCIAL_LINKS`)
- **CSS Classes:** Design token utilities (`text-hero-h1`, `bg-gradient-pink-purple-blue`)

---

## 7. 🎯 Styling Requirements

### Must Use Explicit Design Token Classes

```tsx
// ✅ REQUIRED: Complete typography styling
<h1 className="text-hero-h1 font-title font-bold text-gradient-pink-purple-blue text-center lg:text-left leading-tight tracking-tight mb-fluid-lg">
  Hero Title
</h1>

// ✅ REQUIRED: Complete button styling
<button className="w-full sm:w-auto bg-gradient-pink-purple-blue hover:from-purple-700 hover:to-pink-700 text-white px-button py-button font-body font-medium text-button-fluid transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-200">
  Submit
</button>

// ✅ REQUIRED: Complete card styling
<div className="bg-white/80 backdrop-blur-sm rounded-xl p-fluid-md border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
  Content
</div>
```

### Typography Classes (REQUIRED)
See **[design-tokens/typography.md](./design-tokens/typography.md)** for complete scale.

```css
.font-heading          /* Playfair Display serif - elegant headings */
.font-body             /* Inter sans-serif - readable body text */
.font-title            /* Righteous - main hero titles */

.text-hero-h1          /* clamp(2.25rem, 6vw, 7.5rem) - 36px → 120px */
.text-section-h2       /* clamp(1.5rem, 4vw, 3rem) - 24px → 48px */
.text-body-guideline   /* clamp(1rem, 1.5vw, 1.25rem) - 16px → 20px */
```

### Color Classes (REQUIRED)
See **[design-tokens/colors.md](./design-tokens/colors.md)** for complete palette.

```css
/* Background Gradients */
.bg-gradient-pink-purple-blue    /* Primary CTA gradient */
.bg-gradient-blue-teal-green     /* Secondary CTA gradient */
.bg-gradient-gold-peach-coral    /* Accent gradient */

/* Text Gradients */
.text-gradient-pink-purple-blue  /* Hero title gradients */
.text-gradient-blue-teal-green   /* Section accents */
```

### Spacing Classes (REQUIRED)
See **[design-tokens/spacing.md](./design-tokens/spacing.md)** for complete scale.

```css
/* Component-Specific Spacing */
.px-button             /* Button horizontal padding */
.py-button             /* Button vertical padding */
.py-section            /* Section vertical spacing */
.p-card-responsive     /* Responsive card padding */

/* Fluid Spacing Scale */
.p-fluid-xs through .p-fluid-6xl    /* Complete padding scale */
.mb-fluid-md, .mt-fluid-lg          /* Margin utilities */
.gap-fluid-sm                        /* Gap for grids/flexbox */
```

---

## 8. 📦 Mock Data System

### Overview

The project uses a comprehensive centralized mock data system that serves as:
- **Single source of truth** for all application content
- **Development data** for building without Contentful CMS
- **Fallback data** when CMS is unavailable
- **Type-safe content** with full TypeScript support

**📖 Complete Documentation:** See **[mock-data.md](./mock-data.md)** for comprehensive guide

### Data Organization

```
/data/
├── mock/                          # Centralized mock data
│   ├── images/                    # Hero images (9 images)
│   ├── pages/                     # Page content (home, about, portfolio)
│   ├─ portfolio/                 # Portfolio entries (43 entries, 19 Figma assets)
│   ├── blog/                      # Blog posts (5 posts, 6 categories)
│   └── ui/                        # UI elements (social links, etc.)
│
└── types/                         # TypeScript definitions
    ├── blog.ts                    # Blog types
    ├── page.ts                    # Page content types
    └── portfolio.ts               # Portfolio types
```

### Quick Start

**Import from centralized location:**
```typescript
// Recommended: Main barrel export
import { homepageHero, blogPosts, socialLinks } from '@/data/mock';

// Or category-specific
import { homepageHero } from '@/data/mock/pages/home';
import { blogPosts } from '@/data/mock/blog';
import { getFeaturedWork } from '@/data/mock/portfolio';
```

**Use with Contentful fallback:**
```typescript
import { aboutHero, aboutHeroImages } from '@/data/mock';
import { useAboutPageContent } from '@/hooks/useContentful';

export function AboutPage() {
  const { data: cmsData } = useAboutPageContent();
  
  // Use CMS data if available, fallback to mock
  const heroTitle = cmsData?.hero.title || aboutHero.title;
  const heroImages = cmsData?.hero.images || aboutHeroImages;
  
  return <HeroLayout title={heroTitle} heroImages={heroImages} />;
}
```

### Key Benefits

✅ **No Hardcoded Content** - All content in centralized files  
✅ **Type Safety** - Full IntelliSense and compile-time checking  
✅ **Real Assets** - 19 actual Figma images integrated  
✅ **Easy Updates** - Change content without touching components  
✅ **CMS Compatible** - Works seamlessly with Contentful  
✅ **Testing Ready** - Reliable data for unit and integration tests

### Available Data

| Category | Count | Details |
|----------|-------|---------|
| **Hero Images** | 9 | 3 sets (homepage, about, portfolio) |
| **Portfolio Entries** | 43 | With 19 real Figma assets |
| **Blog Posts** | 5 | ~15,000 words total |
| **Blog Categories** | 6 | With descriptions and colors |
| **Blog Tags** | 50+ | Organized by type |
| **Social Links** | 5 | Instagram, Facebook, TikTok, LinkedIn, Email |

### Important Rules

**DO ✅**
```typescript
// Import from mock data
import { homepageHero } from '@/data/mock';
const title = homepageHero.title;

// Use utility functions
import { getFeaturedWork, searchPosts } from '@/data/mock';
```

**DON'T ❌**
```typescript
// Hardcode content in components
const title = "Ash Shaw"; // ❌ BAD

// Import Figma assets directly
import heroImg from 'figma:asset/abc123.png'; // ❌ BAD

// Duplicate data in multiple places
const socialLinks = [{...}]; // ❌ BAD
```

**📖 For complete documentation, read [mock-data.md](./mock-data.md)**

---

## 9. 🔍 Quality Standards

### Pre-Deployment Checklist
- [ ] TypeScript: No compilation errors
- [ ] Lighthouse: 95+ performance, 100 accessibility
- [ ] Responsive: Mobile, tablet, desktop tested
- [ ] Accessibility: Keyboard navigation and screen reader tested
- [ ] Cross-Browser: Chrome, Firefox, Safari, Edge compatibility

### Component Standards
- [ ] Named exports with TypeScript interfaces
- [ ] Guidelines-compliant CSS classes applied explicitly
- [ ] ARIA labels and keyboard navigation
- [ ] JSDoc documentation with examples
- [ ] No unnecessary re-renders or memory leaks

---

## 10. 📖 Additional Documentation

### Component-Specific Guidelines
Before using any component, read its specific guideline file:
- **[Logo](./components/Logo.md)** - Brand logo usage and responsive behavior
- **[ScrollDownArrow](./components/ScrollDownArrow.md)** - Animated scroll indicator
- **[ScrollBackToTop](./components/ScrollBackToTop.md)** - Floating scroll button
- **[LayoutSwitcher](./components/LayoutSwitcher.md)** - Grid/list view toggle

### Design Token References
Complete specifications for all design tokens:
- **[Colors](./design-tokens/colors.md)** - Semantic color system
- **[Typography](./design-tokens/typography.md)** - Font hierarchy and scaling
- **[Spacing](./design-tokens/spacing.md)** - Responsive spacing patterns

### Icon Documentation
Icon categories and usage patterns:
- **[Overview](./overview-icons.md)** - Icon verification process
- **[Travel Icons](./icons/travel.md)** - Travel and location icons
- **[Interface Icons](./icons/interface.md)** - UI controls and navigation

---

## 11. 🚀 Future Enhancements

### Current Foundation (Complete)
- ✅ CSS system with fluid typography and variable fonts
- ✅ SendGrid professional email system
- ✅ Contentful CMS with blog system
- ✅ Full accessibility compliance (WCAG 2.1 AA)
- ✅ Production deployment optimization

### Enhanced Features (In Progress)
- 🔄 Advanced lightbox with video support
- 🔄 Blog analytics and engagement tracking
- 🔄 Enhanced social integration
- 🔄 Performance optimizations

### Scale & Growth (Future)
- 🔮 Online booking system
- 🔮 E-commerce integration
- 🔮 Multi-language support

---

## 🔄 Version History

- **v5.0.0** (Current - January 2025) - WordPress-Aligned Design Token System
  - **✅ COMPLETE:** WordPress theme.json preset standards implemented
  - **CSS Variables:** Full `--wp--preset--` and `--wp--custom--` naming conventions
  - **Typography Presets:** Numeric slugs (100-900) for font sizes
  - **Color Presets:** Semantic roles + prefixed numeric scales
  - **Spacing Presets:** Numeric scale (10-100) + fluid extensions
  - **Shadow Presets:** Numeric elevation scale (100-600)
  - **Border Presets:** Numeric radius scale (0-900) + width custom tokens
  - **Helper Classes:** 150+ utility classes for WordPress variables
  - **✅ FIXED:** `.bg-card:hover` light mode issue (v4.1.1)
  - **Documentation:** Complete wordpress-preset-system.md guide
  - **Migration:** Non-breaking phased approach, existing variables preserved
  - **See:** [wordpress-preset-system.md](./wordpress-preset-system.md) for details

- **v4.1.0** - Systematic CSS cleanup and optimization
  - **CSS Migration:** Active transition from Tailwind utilities to WordPress-aligned global CSS classes
  - **Spacing Optimizations:**
    - Halved vertical padding for all hero section classes (50% VH/VW reduction)
    - Added `.py-section-md-plus` class (15% increase over `.py-section-md`)
    - Created Why Section card system with 50% reduced padding and spacing
  - **Light/Dark Mode Refinements:**
    - Fixed ThemeToggle purple background issue in light mode
    - Updated PortfolioCard: white bg + dark text (light), black bg + light text (dark)
    - Enhanced SliderCard hover states for proper light/dark mode behavior
  - **Responsive Improvements:**
    - HeroLayout now uses viewport-based fluid heights (50vh-70vh)
    - Improved full-width responsiveness for hero media containers
  - **Component Updates:**
    - All sections now have consistent top/bottom/left/right padding
    - Enhanced card hover effects with proper contrast in both modes

- **v4.0.0** - Restructured guidelines into modular files
  - Separated component, token, and icon documentation
  - Created overview files for better navigation
  - Improved AI agent instructions and reading order
  - Added mock data system documentation

- **v3.2.0** - Restructured guidelines into modular files
  - Separated component, token, and icon documentation
  - Created overview files for better navigation
  - Improved AI agent instructions and reading order

- **v2.3.1** - BlogPostPage layout optimization
  - Enhanced information hierarchy
  - Improved category positioning and tags/share integration

- **v2.3.0** - Major feature updates
  - Variable font system (73% performance improvement)
  - SendGrid fixes (correct endpoints and email addresses)
  - Complete blog system with search, filtering, pagination
  - Enhanced accessibility and documentation

---

**Last Updated:** January 2025  
**Maintained by:** Ash Shaw Portfolio Team

**Need Help?**
- Component not working? → Check **[overview-components.md](./overview-components.md)**
- Styling issues? → Review **[design-tokens/](./design-tokens/)** files
- Icon not found? → Follow **[overview-icons.md](./overview-icons.md)** verification
- Architecture questions? → See project structure above