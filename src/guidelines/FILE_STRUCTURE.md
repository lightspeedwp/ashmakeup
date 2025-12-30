# File & Folder Structure Guidelines

**Version:** 4.0.0  
**Last Updated:** January 2025  
**Purpose:** Define where to create files and how to organize the codebase

---

## 📚 Table of Contents

1. [Overview](#overview)
2. [Root Directory](#root-directory)
3. [Component Structure](#component-structure)
4. [Data Structure](#data-structure)
5. [Utilities & Services](#utilities--services)
6. [Styles & Assets](#styles--assets)
7. [Configuration Files](#configuration-files)
8. [Naming Conventions](#naming-conventions)
9. [File Creation Rules](#file-creation-rules)
10. [Best Practices](#best-practices)

---

## 🎯 Overview

### Philosophy

The Ash Shaw Portfolio uses a **feature-based** and **layer-based** architecture that separates:

- **Presentation** (`/components/`) - UI components
- **Data** (`/data/`) - Content and types
- **Business Logic** (`/utils/`, `/hooks/`) - Services and state
- **Configuration** (Root) - Build and deployment configs

**Key Principles:**
- 📁 **Colocate related files** - Keep related code together
- 🎯 **Single Responsibility** - Each file has one clear purpose
- 🔄 **Reusability** - DRY (Don't Repeat Yourself)
- 📦 **Modularity** - Easy to import and compose
- 🏗️ **Scalability** - Structure grows with project

---

## 📁 Root Directory

```
ash-shaw-makeup-portfolio/
├── 📄 App.tsx                    # Main application & routing
├── 📄 main.tsx                   # React entry point
├── 📄 index.html                 # HTML template
├──
├── 📁 components/                # All React components
├── 📁 data/                      # Mock data & types
├── 📁 hooks/                     # Custom React hooks
├── 📁 utils/                     # Utility functions & services
├── 📁 styles/                    # Global styles
├── 📁 public/                    # Static assets
├── 📁 supabase/                  # Backend functions
├── 📁 guidelines/                # Documentation
├──
├── 📄 package.json              # Dependencies
├── 📄 tsconfig.json             # TypeScript config
├── 📄 vite.config.ts            # Vite build config
├── 📄 tailwind.config.js        # Tailwind config
├── 📄 netlify.toml              # Deployment config
└── 📄 .env                      # Environment variables (gitignored)
```

### When to Create Root Files

**DO Create at Root:**
- ✅ Entry points (`App.tsx`, `main.tsx`)
- ✅ Configuration files
- ✅ Documentation summaries (`.md` files)

**DON'T Create at Root:**
- ❌ Component files
- ❌ Utility functions
- ❌ Data files
- ❌ Styles (except imports)

---

## 🧩 Component Structure

### Directory Layout

```
components/
├── admin/                       # CMS administration tools
│   ├── ContentfulSetup.tsx      # CMS configuration UI
│   ├── ContentfulStatus.tsx     # CMS connection status
│   └── PreviewBanner.tsx        # Draft content preview banner
│
├── common/                      # Shared global components
│   ├── Header.tsx               # Site header with navigation
│   ├── Footer.tsx               # Site footer with contact form
│   ├── Logo.tsx                 # Brand logo component
│   ├── ContactForm.tsx          # Contact form with email integration
│   ├── SocialLinks.tsx          # Social media links
│   ├── MobileMenu.tsx           # Mobile navigation menu
│   ├── ErrorBoundary.tsx        # Error handling wrapper
│   ├── SafetyWrapper.tsx        # Component safety wrapper
│   ├── ModalContext.tsx         # Modal state management
│   ├── AccessibilityUtils.tsx   # A11y helper functions
│   └── Constants.ts             # Shared constants (legacy)
│
├── figma/                       # Figma integration utilities
│   └── ImageWithFallback.tsx    # Image component with fallback
│
├── pages/                       # Page-level components
│   ├── home/
│   │   └── HomePage.tsx         # Homepage template
│   ├── about/
│   │   └── AboutPage.tsx        # About page template
│   ├── blog/
│   │   ├── BlogPage.tsx         # Blog listing page
│   │   └── BlogPostPage.tsx     # Individual blog post
│   └── portfolio/
│       ├── PortfolioPage.tsx    # Portfolio overview (legacy)
│       ├── PortfolioMainPage.tsx # Main portfolio page
│       └── PortfolioDetailPage.tsx # Portfolio detail view
│
├── sections/                    # Layout sections (composable)
│   ├── HeroLayout.tsx           # Hero section with lightbox
│   ├── HeroSection.tsx          # Legacy hero (check if used)
│   ├── FeaturedSection.tsx      # Featured work section
│   ├── WhySection.tsx           # Why choose section
│   ├── BlogPreviewSection.tsx   # Blog preview on homepage
│   ├── OneColumnLayout.tsx      # Single column layout
│   ├── TwoColumnLayout.tsx      # Two column layout
│   ├── ThreeColumnLayout.tsx    # Three column layout
│   ├── ThreeColumnPortfolioSection.tsx # Portfolio grid
│   └── FusionNailsSection.tsx   # Specific portfolio section
│
└── ui/                          # Reusable UI components
    ├── PortfolioCard.tsx        # Portfolio entry card
    ├── BlogPagination.tsx       # Blog pagination controls
    ├── EnhancedLightbox.tsx     # Image lightbox modal
    ├── PortfolioLightbox.tsx    # Portfolio-specific lightbox
    ├── PortfolioImage.tsx       # Portfolio image component
    ├── ScrollDownArrow.tsx      # Animated scroll indicator
    ├── ScrollToTop.tsx          # Scroll to top button
    ├── ReadMoreButton.tsx       # Expandable content button
    ├── ShareComponent.tsx       # Social sharing buttons
    ├── SectionCard.tsx          # Content section card
    ├── SliderCard.tsx           # Card with slider
    └── [...shadcn components]   # UI primitives (button, card, etc.)
```

---

### Where to Create Components

#### **1. Admin Components** (`/components/admin/`)

**When to use:**
- CMS administration tools
- Content preview features
- Debug/development utilities

**Example:**
```typescript
// /components/admin/ContentfulSetup.tsx
export function ContentfulSetup() {
  // CMS configuration UI
}
```

---

#### **2. Common Components** (`/components/common/`)

**When to use:**
- Global components used on every page (Header, Footer)
- Shared utilities used across multiple pages
- Core business logic components

**Example:**
```typescript
// /components/common/Header.tsx
export function Header() {
  // Global navigation
}
```

**DO Create Here:**
- ✅ Header, Footer, Logo
- ✅ Navigation components
- ✅ Global modals
- ✅ Context providers

**DON'T Create Here:**
- ❌ Page-specific components
- ❌ One-off UI elements
- ❌ Layout sections

---

#### **3. Page Components** (`/components/pages/`)

**When to use:**
- Top-level page templates
- Page-specific logic and state
- Route-level components

**Structure:**
```
pages/
├── [feature]/               # Group by feature/route
│   └── [Feature]Page.tsx   # Main page component
```

**Example:**
```typescript
// /components/pages/blog/BlogPage.tsx
export function BlogPage() {
  // Blog listing page logic
}
```

**DO Create Here:**
- ✅ Full page components
- ✅ Page-level state management
- ✅ Route components

**DON'T Create Here:**
- ❌ Reusable sections
- ❌ UI components
- ❌ Layout components

---

#### **4. Section Components** (`/components/sections/`)

**When to use:**
- Reusable layout sections
- Composable page parts
- Multi-page sections

**Example:**
```typescript
// /components/sections/HeroLayout.tsx
export function HeroLayout({ title, images }: HeroLayoutProps) {
  // Reusable hero section
}
```

**DO Create Here:**
- ✅ Hero sections
- ✅ Feature sections
- ✅ Column layouts
- ✅ Reusable page sections

**DON'T Create Here:**
- ❌ Full pages
- ❌ Small UI components
- ❌ Form controls

---

#### **5. UI Components** (`/components/ui/`)

**When to use:**
- Reusable UI elements
- Primitive components
- Design system components

**Example:**
```typescript
// /components/ui/PortfolioCard.tsx
export function PortfolioCard({ entry }: PortfolioCardProps) {
  // Reusable card component
}
```

**DO Create Here:**
- ✅ Cards, buttons, inputs
- ✅ Modals, dialogs
- ✅ Pagination, tabs
- ✅ Icons, badges

**DON'T Create Here:**
- ❌ Page layouts
- ❌ Business logic
- ❌ API calls

---

## 💾 Data Structure

### Directory Layout

```
data/
├── mock/                        # Mock data (single source of truth)
│   ├── blog/
│   │   ├── posts.ts             # Blog post data
│   │   ├── categories.ts        # Blog categories
│   │   └── index.ts             # Barrel export
│   ├── images/
│   │   ├── hero-images.ts       # Hero image data
│   │   └── index.ts
│   ├── pages/
│   │   ├── home.ts              # Homepage content
│   │   ├── about.ts             # About page content
│   │   ├── portfolio.ts         # Portfolio page content
│   │   └── index.ts
│   ├── portfolio/
│   │   ├── featured.ts          # Featured work
│   │   ├── thailand.ts          # Thailand entries
│   │   ├── festivals.ts         # Festival entries
│   │   ├── nail-art.ts          # Nail art entries
│   │   ├── swiss-festivals.ts   # Swiss festival entries
│   │   ├── uv-makeup.ts         # UV makeup entries
│   │   └── index.ts
│   ├── ui/
│   │   ├── social-links.ts      # Social media links
│   │   └── index.ts
│   └── index.ts                 # Main barrel export
│
├── types/                       # TypeScript type definitions
│   ├── blog.ts                  # Blog types
│   ├── page.ts                  # Page content types
│   ├── portfolio.ts             # Portfolio types
│   └── index.ts                 # Type barrel export
│
└── README.md                    # Data directory documentation
```

---

### Where to Create Data Files

#### **1. Mock Data** (`/data/mock/`)

**When to use:**
- All static content
- Development data
- CMS fallback data
- Testing fixtures

**Structure:**
```
mock/
├── [category]/          # Group by content type
│   ├── [entity].ts     # Data file
│   └── index.ts        # Barrel export
```

**Example:**
```typescript
// /data/mock/blog/posts.ts
import type { BlogPost } from '@/data/types';

export const blogPosts: BlogPost[] = [
  {
    id: 'festival-makeup-guide',
    title: 'Festival Makeup Survival Guide',
    // ... complete data
  }
];
```

**Rules:**
- ✅ One file per entity type
- ✅ Export as named constant
- ✅ Use TypeScript types
- ✅ Include barrel export (index.ts)
- ✅ Document in mock-data.md

**DON'T:**
- ❌ Mix categories in one file
- ❌ Use default exports
- ❌ Hardcode in components

---

#### **2. Type Definitions** (`/data/types/`)

**When to use:**
- Define data shapes
- Ensure type safety
- Share types across app

**Example:**
```typescript
// /data/types/blog.ts
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  // ... more fields
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  // ... more fields
}
```

**Rules:**
- ✅ One file per domain (blog, portfolio, page)
- ✅ Export as named interfaces
- ✅ Match Contentful content models
- ✅ Document all fields
- ✅ Use JSDoc comments

---

## 🔧 Utilities & Services

### Directory Layout

```
utils/
├── contentfulService.ts         # Contentful CMS API
├── contentfulValidation.ts      # CMS data validation
├── contentfulRichText.ts        # Rich text processing
├── contentfulPreview.ts         # Preview mode handling
├── contentfulAnalytics.ts       # CMS analytics
├── contentfulWebhooks.ts        # Webhook handling
├── portfolioService.ts          # Portfolio business logic
├── emailService.ts              # Email sending (Supabase)
├── timeoutHandler.ts            # Timeout & circuit breaker
├── browserExtensionDetector.ts  # Browser extension detection
├── extensionErrorSuppressor.ts  # Extension error handling
├── supabase/
│   └── info.tsx                 # Supabase configuration
└── __tests__/
    └── contentfulValidation.test.ts  # Unit tests
```

---

### Where to Create Utility Files

#### **Service Files** (`/utils/[service]Service.ts`)

**When to use:**
- API integrations
- External service wrappers
- Data fetching logic

**Example:**
```typescript
// /utils/contentfulService.ts
export async function getBlogPosts(): Promise<BlogPost[]> {
  // Contentful API logic
}
```

**Naming Convention:**
- `[domain]Service.ts` (e.g., `contentfulService.ts`)
- Use descriptive function names
- Export named functions

---

#### **Helper Files** (`/utils/[purpose].ts`)

**When to use:**
- Shared utilities
- Helper functions
- Pure functions

**Example:**
```typescript
// /utils/timeoutHandler.ts
export function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  // Timeout logic
}
```

---

### Hooks

```
hooks/
└── useContentful.ts             # Contentful React hooks
```

**When to create hooks:**
- ✅ Reusable stateful logic
- ✅ API data fetching
- ✅ Shared side effects

**Example:**
```typescript
// /hooks/useContentful.ts
export function useBlogPosts() {
  const [data, setData] = useState<BlogPost[]>(null);
  // Hook logic
  return { data, loading, error };
}
```

---

## 🎨 Styles & Assets

### Directory Layout

```
styles/
└── globals.css                  # Tailwind + custom styles

public/
├── fonts/
│   ├── Inter/                   # Inter font family
│   ├── Playfair_Display/        # Playfair Display
│   ├── Righteous/               # Righteous font
│   └── README.md
├── favicon.ico
└── favicon.svg
```

---

### Where to Create Style Files

**Global Styles:** `/styles/globals.css`
- Tailwind directives
- CSS custom properties
- Global resets
- Font-face declarations

**Component Styles:**
- Use Tailwind utility classes
- NO separate CSS files per component
- Inline styles only for dynamic values

**Example:**
```tsx
// ✅ CORRECT - Tailwind utilities
<div className="bg-gradient-pink-purple-blue text-white p-fluid-md">

// ❌ WRONG - Separate CSS file
import './MyComponent.css';
```

---

### Where to Place Assets

**Fonts:** `/public/fonts/[font-family]/`
```
public/fonts/
├── Inter/
│   ├── Inter-VariableFont.woff2
│   └── Inter-VariableFont.ttf
```

**Images:**
- Figma imports: Use `figma:asset` scheme
- Static images: `/public/images/` (if needed)
- Hero images: In mock data with Figma assets

**Icons:**
- Use Lucide React (imported)
- NO custom icon files
- NO SVG files for icons (use Lucide)

---

## ⚙️ Configuration Files

### Root Configuration Files

```
/
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript compiler config
├── vite.config.ts            # Vite bundler config
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
├── netlify.toml              # Netlify deployment
├── .gitignore                # Git ignore rules
└── .env                      # Environment variables (local)
```

**Rules:**
- ✅ Keep at root level
- ✅ Use standard names
- ✅ Document changes
- ❌ Don't nest config files

---

## 📝 Naming Conventions

### Files & Folders

**Components:**
```
PascalCase.tsx
Examples: Header.tsx, BlogPage.tsx, PortfolioCard.tsx
```

**Utilities & Services:**
```
camelCase.ts
Examples: emailService.ts, contentfulValidation.ts
```

**Data Files:**
```
kebab-case.ts
Examples: hero-images.ts, social-links.ts
```

**Type Files:**
```
camelCase.ts (matches domain)
Examples: blog.ts, portfolio.ts, page.ts
```

**Folders:**
```
kebab-case/ or camelCase/
Examples: components/, mock-data/, design-tokens/
```

---

### Code Naming

**React Components:**
```typescript
// PascalCase
export function BlogCard() {}
export function PortfolioLightbox() {}
```

**Functions:**
```typescript
// camelCase
export function sendContactEmail() {}
export function getBlogPosts() {}
```

**Constants:**
```typescript
// UPPER_SNAKE_CASE
export const MAX_BLOG_POSTS = 10;
export const API_TIMEOUT = 8000;
```

**Interfaces/Types:**
```typescript
// PascalCase
export interface BlogPost {}
export type PortfolioEntry = {};
```

---

## 📋 File Creation Rules

### Component Files

**Template:**
```typescript
/**
 * ComponentName
 * 
 * Brief description of component purpose
 * 
 * @component
 */

import React from 'react';
import type { ComponentProps } from '@/data/types';

interface ComponentNameProps {
  /** Prop description */
  title: string;
}

export function ComponentName({ title }: ComponentNameProps) {
  return (
    <div className="explicit-tailwind-classes">
      {title}
    </div>
  );
}
```

**Rules:**
- ✅ Named export (not default)
- ✅ TypeScript interfaces for props
- ✅ JSDoc documentation
- ✅ Explicit return types
- ✅ Accessibility attributes

---

### Data Files

**Template:**
```typescript
/**
 * Blog post mock data
 * 
 * Complete blog posts with content, metadata, and images.
 * Used as fallback when Contentful CMS is unavailable.
 */

import type { BlogPost } from '@/data/types';

export const blogPosts: BlogPost[] = [
  {
    id: 'unique-id',
    slug: 'url-slug',
    title: 'Post Title',
    // ... complete data
  }
];
```

**Rules:**
- ✅ Import types
- ✅ Named exports
- ✅ JSDoc header
- ✅ Complete data (no placeholders)
- ✅ Matches TypeScript type

---

### Service Files

**Template:**
```typescript
/**
 * @fileoverview Service description
 * 
 * Detailed service documentation
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import { dependency } from 'package';

/**
 * Function description
 * 
 * @param {Type} param - Parameter description
 * @returns {Promise<Type>} Return description
 */
export async function functionName(param: Type): Promise<Type> {
  // Implementation
}
```

**Rules:**
- ✅ File-level JSDoc
- ✅ Function-level JSDoc
- ✅ Named exports
- ✅ TypeScript types
- ✅ Error handling

---

## ✅ Best Practices

### File Organization

**DO:**
- ✅ Group related files together
- ✅ Use barrel exports (index.ts)
- ✅ Keep files focused and small (<500 lines)
- ✅ Colocate tests with code

**DON'T:**
- ❌ Create deeply nested folders (max 3-4 levels)
- ❌ Mix concerns in one file
- ❌ Use default exports (except App.tsx)
- ❌ Create orphaned files

---

### Import Organization

**Standard Import Order:**
```typescript
// 1. React & external libraries
import React, { useState } from 'react';
import { motion } from 'motion/react';

// 2. Internal utilities & hooks
import { useBlogPosts } from '@/hooks/useContentful';
import { sendEmail } from '@/utils/emailService';

// 3. Components
import { BlogCard } from '@/components/ui/BlogCard';
import { Header } from '@/components/common/Header';

// 4. Data & types
import { blogPosts } from '@/data/mock';
import type { BlogPost } from '@/data/types';

// 5. Styles (if any)
import './styles.css';
```

---

### Barrel Exports

**Use index.ts for:**
```typescript
// /data/mock/index.ts
export * from './blog';
export * from './portfolio';
export * from './pages';
export * from './ui';
```

**Allows clean imports:**
```typescript
import { blogPosts, portfolioEntries, socialLinks } from '@/data/mock';
```

---

### File Size Guidelines

**Recommended Limits:**
- Components: 200-300 lines
- Services: 300-500 lines
- Data files: No limit (can be large)
- Type files: 100-200 lines

**When to split:**
- File exceeds 500 lines
- Multiple unrelated functions
- Complex component with sub-components

---

## 🔍 Decision Tree

### "Where should I create this file?"

```
Is it a React component?
├─ Yes → Is it used on all pages?
│   ├─ Yes → /components/common/
│   └─ No → Is it a full page?
│       ├─ Yes → /components/pages/[feature]/
│       └─ No → Is it a layout section?
│           ├─ Yes → /components/sections/
│           └─ No → /components/ui/
│
├─ Is it data?
│   ├─ Mock data → /data/mock/[category]/
│   └─ Type definition → /data/types/
│
├─ Is it a service/utility?
│   ├─ API/Service → /utils/[service]Service.ts
│   ├─ Helper → /utils/[purpose].ts
│   └─ Hook → /hooks/use[Feature].ts
│
└─ Is it configuration?
    └─ Root directory
```

---

## 📊 Quick Reference

| What | Where | Example |
|------|-------|---------|
| **Full Page** | `/components/pages/[feature]/` | `HomePage.tsx` |
| **Global Component** | `/components/common/` | `Header.tsx` |
| **Reusable Section** | `/components/sections/` | `HeroLayout.tsx` |
| **UI Component** | `/components/ui/` | `PortfolioCard.tsx` |
| **Mock Data** | `/data/mock/[category]/` | `blog/posts.ts` |
| **Type Definition** | `/data/types/` | `blog.ts` |
| **Service** | `/utils/` | `emailService.ts` |
| **Hook** | `/hooks/` | `useContentful.ts` |
| **Style** | `/styles/` | `globals.css` |
| **Asset** | `/public/` | `fonts/Inter/` |

---

## 🔗 Related Documentation

- **[Guidelines.md](./Guidelines.md)** - Main project guidelines
- **[mock-data.md](./mock-data.md)** - Mock data system
- **[SITEMAP.md](./SITEMAP.md)** - Site structure and navigation
- **[overview-components.md](./overview-components.md)** - Component architecture

---

**Version:** 4.0.0  
**Last Updated:** January 2025  
**Maintained by:** Ash Shaw Portfolio Team

**Questions?** Check the decision tree above or refer to existing similar files as examples.
