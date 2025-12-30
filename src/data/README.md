# Mock Data Documentation

**Version:** 1.0.0  
**Last Updated:** January 2025

---

## 📚 Overview

This directory contains all mock data and type definitions for the Ash Shaw Makeup Portfolio application. Mock data enables:

- ✅ **Development without CMS** - Work offline with complete data
- ✅ **Type safety** - TypeScript interfaces for all data structures
- ✅ **Centralized content** - Single source of truth for static content
- ✅ **Easy updates** - Change content without touching component code
- ✅ **Testing** - Consistent data for automated tests

---

## 📁 Folder Structure

```
/data/
├── types/                    # TypeScript type definitions
│   ├── portfolio.ts          # Portfolio entry interfaces
│   ├── blog.ts               # Blog post interfaces
│   ├── page.ts               # Page content interfaces
│   └── index.ts              # Barrel export
│
├── mock/                     # Mock data files
│   ├── portfolio/            # Portfolio entries (organized by category)
│   │   ├── featured.ts       # Featured work (homepage)
│   │   ├── thailand.ts       # Thailand festival work
│   │   ├── festivals.ts      # Festival makeup collection
│   │   ├── uv-makeup.ts      # UV/blacklight work
│   │   ├── nail-art.ts       # Nail art portfolio
│   │   └── index.ts          # Portfolio barrel export
│   │
│   ├── blog/                 # Blog mock data
│   │   ├── posts.ts          # Mock blog posts
│   │   ├── categories.ts     # Blog categories
│   │   └── index.ts          # Blog barrel export
│   │
│   ├── pages/                # Page-specific content
│   │   ├── home.ts           # Homepage content
│   │   ├── about.ts          # About page content
│   │   ├── portfolio.ts      # Portfolio page content
│   │   └── index.ts          # Pages barrel export
│   │
│   ├── ui/                   # UI element data
│   │   ├── social-links.ts   # Social media links
│   │   ├── navigation.ts     # Navigation menu items
│   │   └── index.ts          # UI barrel export
│   │
│   ├── images/               # Image data
│   │   ├── hero-images.ts    # Hero section images
│   │   └── index.ts          # Images barrel export
│   │
│   └── index.ts              # Main barrel export
│
└── README.md                 # This file
```

---

## 🚀 Quick Start

### Importing Data

```typescript
// Method 1: Import from main barrel (recommended)
import { 
  homepageHero, 
  whyReasons, 
  socialLinks,
  homepageHeroImages 
} from '@/data/mock';

// Method 2: Import from specific module
import { homepageHero } from '@/data/mock/pages/home';
import { socialLinks } from '@/data/mock/ui/social-links';
```

### Importing Types

```typescript
// Import types
import { 
  PortfolioEntry, 
  BlogPost, 
  HeroContent 
} from '@/data/types';

// Or from main barrel
import { PortfolioEntry } from '@/data/mock';
```

---

## 📋 Available Data

### UI Elements

#### Social Links (`/mock/ui/social-links.ts`)

```typescript
import { socialLinks } from '@/data/mock';

// socialLinks: SocialLink[]
// Contains: Instagram, Facebook, LinkedIn, Email
```

---

### Images

#### Hero Images (`/mock/images/hero-images.ts`)

```typescript
import { 
  homepageHeroImages,
  aboutHeroImages,
  portfolioHeroImages 
} from '@/data/mock';

// Each: HeroImage[]
// Contains: src, alt, caption, description, position, aspectRatio
```

---

### Page Content

#### Homepage (`/mock/pages/home.ts`)

```typescript
import { 
  homepageHero,      // HeroContent
  whyReasons,        // WhyReason[]
  homepageContent    // PageContent (complete)
} from '@/data/mock';
```

---

### Portfolio (Coming Soon)

```typescript
// Will be available soon:
import { 
  featuredWork,      // Featured portfolio entries
  thailandWork,      // Thailand festival work
  festivalWork,      // Festival makeup
  uvWork,            // UV makeup
  nailArt            // Nail art portfolio
} from '@/data/mock';
```

---

### Blog (Coming Soon)

```typescript
// Will be available soon:
import { 
  mockBlogPosts,     // BlogPost[]
  blogCategories     // BlogCategory[]
} from '@/data/mock';
```

---

## 🎨 Usage Examples

### Example 1: Using Hero Content

```typescript
// Component: HomePage.tsx
import { homepageHero, homepageHeroImages } from '@/data/mock';
import { useHomepageContent } from '@/hooks/useContentful';

export function HomePage() {
  // Use Contentful if available, fallback to mock data
  const { data: cmsContent } = useHomepageContent();
  
  const heroContent = {
    title: cmsContent?.hero.title || homepageHero.title,
    description: cmsContent?.hero.description || homepageHero.description,
    ctaText: cmsContent?.hero.ctaText || homepageHero.ctaText,
    images: cmsContent?.hero.backgroundImages || homepageHeroImages
  };

  return (
    <HeroLayout
      title={heroContent.title}
      description={heroContent.description}
      heroImages={heroContent.images}
      ctaText={heroContent.ctaText}
    />
  );
}
```

### Example 2: Using Why Section Data

```typescript
// Component: WhySection.tsx
import { whyReasons } from '@/data/mock';
import { ShineIcon, JoyIcon, GrowthIcon } from '@/components/common/ColorfulIcons';

const iconMap = {
  shine: ShineIcon,
  joy: JoyIcon,
  growth: GrowthIcon
};

export function WhySection() {
  return (
    <ThreeColumnLayout>
      {whyReasons.map((reason) => {
        const IconComponent = iconMap[reason.icon];
        
        return (
          <Card key={reason.id}>
            <IconComponent />
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </Card>
        );
      })}
    </ThreeColumnLayout>
  );
}
```

### Example 3: Using Social Links

```typescript
// Component: Footer.tsx
import { socialLinks } from '@/data/mock';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const iconComponents = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  mail: Mail
};

export function Footer() {
  return (
    <div className="social-links">
      {socialLinks.map((link) => {
        const Icon = iconComponents[link.icon];
        
        return (
          <a 
            key={link.platform}
            href={link.url}
            aria-label={link.label}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
```

---

## 🔧 Type Definitions

### Portfolio Types

```typescript
interface PortfolioImage {
  src: string;
  alt: string;
  title: string;
  caption?: string;
  position?: 'left' | 'center' | 'right' | 'top' | 'bottom';
  aspectRatio?: '1:1' | '4:3' | '16:9' | '3:4' | '9:16';
}

interface PortfolioEntry {
  id: string;
  slug: string;
  title: string;
  category: 'Festival Makeup' | 'UV Makeup' | 'Nail Art' | 'Portrait' | 'Special Effects' | 'Body Art';
  subcategory?: string;
  images: PortfolioImage[];
  location?: string;
  event?: string;
  date?: string;
  description: string;
  excerpt?: string;
  tags: string[];
  featured: boolean;
  order: number;
  contentfulId?: string;
}
```

### Page Types

```typescript
interface HeroImage {
  src: string;
  alt: string;
  caption: string;
  description: string;
  position?: 'left' | 'center' | 'right' | 'top' | 'bottom';
  aspectRatio?: '1:1' | '4:3' | '16:9' | '3:4' | '9:16';
}

interface HeroContent {
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
  backgroundImages?: HeroImage[];
}

interface WhyReason {
  id: string;
  icon: 'shine' | 'joy' | 'growth';
  title: string;
  description: string;
  order: number;
}
```

### Blog Types

```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string | any;
  featuredImage: BlogImage;
  publishedDate: string;
  updatedDate?: string;
  category?: string;
  tags?: string[];
  readingTime: number;
  author?: BlogAuthor;
  featured?: boolean;
}
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

### Step 4: Use in Component

```typescript
import { yourData } from '@/data/mock';

export function YourComponent() {
  return (
    <>
      {yourData.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
}
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

### 3. Provide Complete Alt Text

❌ **Generic alt text:**
```typescript
{ alt: 'Makeup' }
```

✅ **Descriptive alt text:**
```typescript
{ 
  alt: 'Close-up artistic eye makeup with vibrant purple stripe and red metallic lashes' 
}
```

### 4. Use TypeScript Interfaces

Always import and use defined types:
```typescript
import { PortfolioEntry } from '@/data/types';

export const myWork: PortfolioEntry[] = [
  // TypeScript will enforce the correct structure
];
```

---

## 🔄 CMS Integration

Mock data serves as fallback when Contentful is unavailable:

```typescript
// Pattern for CMS + Mock Data
const { data: cmsData, loading } = useContentfulData();

const displayData = cmsData || mockData; // Fallback to mock
```

This allows:
- ✅ Development without CMS access
- ✅ Offline functionality
- ✅ Fast local development
- ✅ Consistent data structure

---

## 📊 Current Status

### ✅ Completed

- [x] TypeScript interfaces (portfolio, blog, page)
- [x] Social links data
- [x] Hero images (homepage, about, portfolio)
- [x] Homepage content (hero, why section)
- [x] Folder structure
- [x] Barrel exports

### 🔄 In Progress

- [ ] Portfolio data migration (47 entries)
- [ ] Blog mock data (5-10 posts)
- [ ] About page content
- [ ] Navigation data

### 📋 Planned

- [ ] Complete documentation
- [ ] Data validation utilities
- [ ] Migration helpers
- [ ] Test data sets

---

## 📚 Related Documentation

- **Migration Plan:** `/MOCK_DATA_MIGRATION_PLAN.md`
- **Implementation Guide:** `/IMPLEMENTATION_GUIDE.md`
- **Data Audit:** `/DATA_AUDIT_REPORT.md`
- **Guidelines:** `/guidelines/Guidelines.md`

---

**Version:** 1.0.0  
**Last Updated:** January 2025  
**Maintainer:** Ash Shaw Portfolio Team

For questions or additions, refer to the migration plan or implementation guide.
