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
│   ├── 📄 emailService.ts             # SendGrid integration
│   └── 📄 contentfulService.ts        # CMS integration
│
├── 📁 hooks/                          # React hooks
├── 📁 supabase/                       # Backend functions
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
- **Supabase Edge Functions** - SendGrid email integration
- **Contentful CMS** - Dynamic content management
- **Netlify** - Production deployment and CDN

### Backend Integration Documentation

**📖 Complete Integration Guides:**
- **[Contentful Integration](./contentful-integration.md)** - Complete CMS integration guide with content model alignment
- **[Supabase Integration](./supabase-integration.md)** - Email service, Edge Functions, and backend setup

### Key Features
- ✅ Variable Font System (73% fewer requests)
- ✅ SendGrid Professional Email (dual system)
- ✅ Contentful CMS Integration (with static fallbacks)
- ✅ WordPress-Inspired Fluid Typography
- ✅ WCAG 2.1 AA Accessibility Compliance
- ✅ Advanced Blog System (search, filtering, pagination)

---

## 3. 🎨 Brand Identity & Design System

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

### SendGrid Email System
- **Professional dual email system** (notification + auto-reply)
- **Integration:** Supabase Edge Functions
- **Features:** Honeypot protection, validation, branded templates
- **Demo Mode:** Full functionality without SendGrid setup

**📖 Detailed Documentation:** See **[Supabase Integration Guide](./supabase-integration.md)** for complete email service setup, Edge Functions deployment, and troubleshooting.

### Contentful CMS
- **Dynamic content management** for portfolio, blog, and pages
- **Static fallbacks** for development without CMS setup
- **Image optimization** with automatic WebP conversion
- **Rich text processing** for blog content

**📖 Detailed Documentation:** See **[Contentful Integration Guide](./contentful-integration.md)** for content model alignment, CMS setup, and fallback strategies.

### Environment Variables Required
```bash
# SendGrid (Production)
SENDGRID_API_KEY=your_key_here
TO_EMAIL=ashley@ashshaw.makeup
FROM_EMAIL=noreply@ashshaw.makeup

# Contentful (Optional - works without)
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=your_token
```

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