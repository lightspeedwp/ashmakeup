# 📦 Mock Data System Architecture

**Version:** 2.0.0
**Last Updated:** February 2026
**Scope:** Centralized Data Layer

This project uses a centralized mock data system to serve as the **single source of truth** for all application content. This architecture ensures type safety, maintainability, and seamless integration with Contentful CMS.

**Core Philosophy:**
- **Decoupled Content:** No hardcoded strings in components.
- **Type Safety:** All data follows strict TypeScript interfaces.
- **Centralized UI Text:** Labels, error messages, and button text are stored in `data/mock/ui/`.
- **Contentful Fallback:** The mock data serves as a robust fallback when the CMS is unavailable or during development.

---

## 📂 Directory Structure

```
/data/
├── mock/                          # Centralized mock data
│   ├── blog/                      # Blog content
│   │   ├── categories.ts          # Blog categories and tags
│   │   ├── posts.ts               # Blog posts with rich content
│   │   └── index.ts               # Barrel export for blog data
│   │
│   ├── images/                    # Asset management
│   │   ├── hero-images.ts         # Hero image collections
│   │   └── index.ts               # Barrel export for images
│   │
│   ├── pages/                     # Page-specific content
│   │   ├── home.ts                # Homepage hero, why section
│   │   ├── about.ts               # About page narrative
│   │   ├── contact.ts             # Contact page content
│   │   ├── portfolio.ts           # Portfolio page structure
│   │   └── index.ts               # Barrel export for pages
│   │
│   ├── portfolio/                 # Portfolio entries
│   │   ├── featured.ts            # Featured homepage work
│   │   ├── uv-makeup.ts           # UV makeup collection
│   │   ├── festivals.ts           # Festival makeup collection
│   │   ├── nail-art.ts            # Nail art portfolio
│   │   └── index.ts               # Barrel export for portfolio
│   │
│   ├── ui/                        # UI labels and text
│   │   ├── blog.ts                # Blog page UI strings
│   │   ├── branding.ts            # Logo and brand text
│   │   ├── contact.ts             # Contact page UI strings
│   │   ├── error.ts               # Error messages
│   │   ├── footer.ts              # Footer content
│   │   ├── home.ts                # Homepage UI strings
│   │   ├── navigation.ts          # Menu items
│   │   ├── portfolio.ts           # Portfolio page UI strings
│   │   └── social-links.ts        # Social media data
│   │
│   └── testimonials.ts            # Client testimonials
│
└── types/                         # TypeScript definitions
    ├── blog.ts                    # Blog interfaces
    ├── page.ts                    # Page content interfaces
    ├── portfolio.ts               # Portfolio interfaces
    └── index.ts                   # Barrel export
```

---

## 🛠️ Usage Patterns

### 1. UI Text & Labels
Use `data/mock/ui/*` for button text, headers, empty states, and error messages.

**Example (Component):**
```tsx
import { portfolioUI } from '@/data/mock/ui/portfolio';

export function PortfolioSection() {
  return (
    <section>
      <h2>{portfolioUI.listing.header.title}</h2>
      <p>{portfolioUI.listing.header.description}</p>
      {/* ... */}
      <button>{portfolioUI.listing.empty.action}</button>
    </section>
  );
}
```

### 2. Page Content (with Fallback)
Use `data/mock/pages/*` combined with CMS hooks for robust content loading.

**Example (Page):**
```tsx
import { aboutHero } from '@/data/mock/pages/about';
import { useAboutPageContent } from '@/hooks/useContentful';

export function AboutPage() {
  const { data } = useAboutPageContent();
  
  // Use CMS data if available, otherwise fallback to mock
  const title = data?.hero.title || aboutHero.title;
  
  return <Hero title={title} />;
}
```

### 3. Portfolio & Blog Data
Use utility functions from `data/mock/blog` and `data/mock/portfolio` to access content.

**Example (Data Access):**
```tsx
import { getPortfolioEntryById } from '@/utils/portfolioService'; // Abstraction layer
// OR directly
import { featuredWork } from '@/data/mock/portfolio/featured';
```

---

## 📝 Adding New Data

### Step 1: Define TypeScript Interface

```typescript
// /data/types/your-type.ts
export interface YourDataType {
  id: string;
  title: string;
  // ... other fields
}
```

### Step 2: Create Mock Data File

```typescript
// /data/mock/your-category/your-data.ts
import { YourDataType } from '../../types';

export const yourData: YourDataType[] = [
  {
    id: 'example-1',
    title: 'Example Title',
    // ... other fields
  }
];
```

### Step 3: Export from Barrel

```typescript
// /data/mock/your-category/index.ts
export * from './your-data';

// /data/mock/index.ts
export * from './your-category';
```

---

## 🎯 Best Practices

### 1. Keep Data Semantic

❌ **Don't include styling in data:**
```typescript
{
  title: "Example",
  className: "text-xl font-bold" // ❌ No!
}
```

✅ **Use semantic properties:**
```typescript
{
  title: "Example",
  position: "center", // ✅ Yes!
  featured: true
}
```

### 2. Use Descriptive IDs

❌ **Generic IDs:**
```typescript
{ id: '1', title: 'Work' }
```

✅ **Descriptive IDs:**
```typescript
{ id: 'festival-eye-art', title: 'Festival Eye Art' }
```

### 3. Use TypeScript Interfaces

Always import and use defined types:
```typescript
import { PortfolioEntry } from '@/data/types';

export const myWork: PortfolioEntry[] = [
  // TypeScript will enforce the correct structure
];
```

---

## 🎨 Theme Support

The data files support light and dark mode values where applicable, particularly for gradients and specific color tokens passed to components.

**Example (Theme-Aware Data):**
```typescript
// categories.ts
export const blogCategories = [
  {
    id: 'tutorials',
    color: '#a855f7', // Used for tag background
    // ...
  }
];
```

Ensure any new data structures added consider how they will be rendered in both light and dark modes by the consuming components.
