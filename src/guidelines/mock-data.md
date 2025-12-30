# Mock Data System Guidelines

**Version:** 4.0.0  
**Last Updated:** January 2025  
**Status:** Production-Ready

---

## 📚 Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Contentful Integration](#contentful-integration)
4. [Directory Structure](#directory-structure)
5. [Data Categories](#data-categories)
6. [Usage Patterns](#usage-patterns)
7. [Type Safety](#type-safety)
8. [Best Practices](#best-practices)
9. [Contentful Alignment](#contentful-alignment)
10. [Migration Guide](#migration-guide)

---

## 🎯 Overview

### What is the Mock Data System?

The mock data system is a centralized, type-safe data management layer that provides:

- **Single source of truth** for all application content
- **Development data** for building without Contentful CMS
- **Fallback data** when CMS is unavailable or times out
- **Testing data** for reliable unit and integration tests
- **Type safety** with full TypeScript support
- **CMS alignment** - Structure matches Contentful content models exactly

### Key Benefits

✅ **Centralized Management** - One place to update all content  
✅ **Type Safety** - Full IntelliSense and compile-time checking  
✅ **Real Assets** - 19 actual Figma images integrated  
✅ **CMS Compatibility** - Works seamlessly with Contentful  
✅ **Automatic Fallback** - Graceful degradation when CMS unavailable  
✅ **Zero Hardcoding** - No content scattered in components  
✅ **Easy Updates** - Change content without touching code  
✅ **Offline Development** - Build and test without internet

---

## 🏗️ Architecture

### System Design

```
Application Components
        ↓
   React Hooks (useContentful)
        ↓
   contentfulService.ts
        ↓
   ┌─────────────┬──────────────┐
   ▼             ▼              ▼
Contentful   Timeout?      Mock Data
   API         Error?       (Fallback)
   │             │              │
   └─────────────┴──────────────┘
                ↓
         Validated Data
                ↓
          Components
```

**Flow:**
1. Component requests data via hook
2. Hook calls Contentful service
3. Service tries CMS first (with timeout)
4. On failure/timeout → Falls back to mock data
5. Data is validated before return
6. Component receives type-safe data

**This ensures:**
- App works without CMS configuration
- App works during CMS downtime
- App works offline
- Consistent data structure
- Type safety throughout

---

## 🔗 Contentful Integration

### Critical Requirement

**Every mock data structure MUST match the corresponding Contentful content model exactly.**

This ensures seamless fallback and data consistency.

### Integration Pattern

```typescript
// 1. Define shared TypeScript interface
// /data/types/blog.ts
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  publishedAt: string;
  // ... all fields
}

// 2. Create mock data matching interface
// /data/mock/blog/posts.ts
export const blogPosts: BlogPost[] = [
  {
    id: 'festival-makeup-guide',
    slug: 'festival-makeup-survival-guide',
    title: 'Festival Makeup Survival Guide',
    content: '...',
    publishedAt: '2024-06-15'
  }
];

// 3. Contentful service returns same structure
// /utils/contentfulService.ts
export async function getBlogPosts(): Promise<BlogPost[]> {
  const entries = await client.getEntries({ content_type: 'blogPost' });
  return entries.items.map(transformBlogPost); // Returns BlogPost[]
}

// 4. Component uses with automatic fallback
// /components/pages/blog/BlogPage.tsx
import { blogPosts } from '@/data/mock';
import { useBlogPosts } from '@/hooks/useContentful';

export function BlogPage() {
  const { data: cmsPosts, loading, error } = useBlogPosts();
  
  // Automatic fallback to mock data
  const posts = cmsPosts || blogPosts;
  
  return <BlogGrid posts={posts} />;
}
```

### Benefits of This Pattern

✅ **Development Without CMS** - Use mock data locally  
✅ **Production Resilience** - Fallback during CMS issues  
✅ **Type Safety** - Same types for both sources  
✅ **Testability** - Reliable test data  
✅ **Preview Content** - See changes before CMS update

---

## 📁 Directory Structure

### Complete File Organization

```
/data/
├── mock/                          # Mock data root
│   ├── index.ts                   # Main barrel export
│   │
│   ├── images/                    # Hero images
│   │   ├── hero-images.ts         # All hero image data
│   │   └── index.ts               # Image exports
│   │
│   ├── pages/                     # Page content
│   │   ├── home.ts                # Homepage content
│   │   ├── about.ts               # About page content
│   │   ├── portfolio.ts           # Portfolio page content
│   │   └── index.ts               # Page exports
│   │
│   ├── portfolio/                 # Portfolio entries
│   │   ├── featured.ts            # Featured work (19 real Figma assets)
│   │   ├── thailand.ts            # Thailand adventures (7 entries)
│   │   ├── festivals.ts           # Festival makeup (4 entries)
│   │   ├── swiss-festivals.ts     # Swiss festivals (6 entries)
│   │   ├── uv-makeup.ts           # UV/blacklight (3 entries)
│   │   ├── nail-art.ts            # Nail art (4 entries)
│   │   └── index.ts               # Portfolio exports
│   │
│   ├── blog/                      # Blog data
│   │   ├── posts.ts               # Blog posts (5 comprehensive posts)
│   │   ├── categories.ts          # Categories and tags
│   │   └── index.ts               # Blog exports
│   │
│   └── ui/                        # UI elements
│       ├── social-links.ts        # Social media links
│       └── index.ts               # UI exports
│
└── types/                         # TypeScript definitions
    ├── index.ts                   # Main type exports
    ├── blog.ts                    # Blog types
    ├── page.ts                    # Page content types
    └── portfolio.ts               # Portfolio types
```

### Import Paths

**Main Barrel Export (Recommended):**
```typescript
import { homepageHero, blogPosts, socialLinks } from '@/data/mock';
```

**Category-Specific Imports:**
```typescript
import { homepageHero } from '@/data/mock/pages/home';
import { blogPosts } from '@/data/mock/blog';
import { socialLinks } from '@/data/mock/ui';
```

**Type Imports:**
```typescript
import { BlogPost, PortfolioEntry, HeroImage } from '@/data/types';
```

---

## 📦 Data Categories

### 1. Images (`/data/mock/images/`)

**Hero Images for all pages:**

```typescript
// hero-images.ts
export const homepageHeroImages: HeroImage[] = [
  {
    src: 'figma:asset/f4a28f747d49fc9d37311b17f513b62e2b95a73e.png',
    alt: 'Thailand Festival Makeup - Lost Paradise',
    caption: 'Lost Paradise',
    description: 'Vibrant festival makeup celebrating friendship',
    position: 'center',
    aspectRatio: '4:3'
  }
  // ... more images
];

export const aboutHeroImages: HeroImage[] = [...];
export const portfolioHeroImages: HeroImage[] = [...];
```

**Available Image Sets:**
- `homepageHeroImages` - Homepage hero gallery (3 images)
- `aboutHeroImages` - About page hero gallery (3 images)
- `portfolioHeroImages` - Portfolio page hero gallery (3 images)

**Usage:**
```typescript
import { homepageHeroImages } from '@/data/mock/images';

<HeroLayout heroImages={homepageHeroImages} />
```

---

### 2. Page Content (`/data/mock/pages/`)

#### Home Page Content

```typescript
// home.ts
export const homepageHero = {
  title: 'Ash Shaw',
  subtitle: 'Makeup Artist & Creative Spirit',
  description: 'Bringing colour, energy, and connection...'
};

export const whyReasons: WhyReason[] = [
  {
    id: 'festival-specialist',
    title: 'Festival Specialist',
    icon: '🎪',
    description: 'Expertise in bold, long-lasting looks...',
    order: 1
  }
  // ... more reasons
];
```

**Available Content:**
- `homepageHero` - Hero section content
- `whyReasons` - Why work with Ash (4 reasons)

---

#### About Page Content

```typescript
// about.ts
export const aboutHero = {
  title: 'About Ash Shaw',
  subtitle: 'Makeup Artist & Creative Spirit',
  description: 'From festivals to fine art...'
};

export const journeySection: AboutSection = {
  id: 'journey-section',
  title: 'My Creative Journey',
  content: [
    {
      type: 'paragraph',
      text: 'My makeup journey began at festivals...'
    }
  ],
  order: 1
};

export const philosophySection: AboutSection = {...};
export const skillsSection: AboutSection = {...};
export const experienceHighlights = [...];
export const aboutCTA = {...};
```

**Available Content:**
- `aboutHero` - Hero content
- `journeySection` - Journey story
- `philosophySection` - Philosophy and beliefs
- `skillsSection` - Skills and specialties (8 skills)
- `experienceHighlights` - Festival experiences (4 events)
- `aboutCTA` - Call-to-action

---

#### Portfolio Page Content

```typescript
// portfolio.ts
export const portfolioHero = {
  title: 'Portfolio',
  subtitle: 'Festival Artistry & Creative Makeup',
  description: 'Explore a vibrant collection...'
};

export const portfolioCategories = [
  {
    id: 'featured-work',
    title: 'Featured Work',
    description: 'Standout pieces...',
    icon: '⭐',
    gradient: 'from-pink-600 via-purple-600 to-blue-500'
  }
  // ... 7 categories total
];

export const portfolioStats = {
  totalWorks: '50+',
  festivals: '15+',
  countries: '5',
  happyClients: '100+'
};
```

**Available Content:**
- `portfolioHero` - Hero content
- `portfolioIntro` - Introduction text
- `portfolioCategories` - 7 category overviews
- `portfolioStats` - Portfolio statistics
- `portfolioCTA` - Call-to-action

---

### 3. Portfolio Entries (`/data/mock/portfolio/`)

**43 Portfolio Entries with Real Figma Assets:**

```typescript
// thailand.ts
export const thailandWork: PortfolioEntry[] = [
  {
    id: 'lost-paradise',
    slug: 'lost-paradise-thailand',
    title: 'Lost Paradise',
    category: 'Festival Makeup',
    subcategory: 'Thailand Adventures',
    images: [
      {
        src: 'figma:asset/e7ee10c85c112ab4acfc9e54087974a5faae5966.png',
        alt: 'Lost Paradise - makeup artistry in Thailand',
        caption: 'Lost Paradise',
        description: 'Tropical festival makeup celebrating friendship',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Thailand',
    event: 'Lost Paradise',
    description: 'My dear friend Gabi & sista from another mista!',
    tags: ['Thailand', 'Festival', 'Friendship'],
    featured: false,
    order: 1
  }
  // ... more entries
];
```

**Available Collections:**
- `thailandWork` - 4 entries (7 images)
- `festivalWork` - 4 entries
- `shankraWork` - 3 entries (6 images)
- `reiserfieberWork` - 3 entries
- `swissFestivalWork` - Combined Swiss entries
- `uvMakeupWork` - 3 entries (3 images)
- `nailArtWork` - 4 entries (3 images)

**Featured Work:**
```typescript
import { getFeaturedWork } from '@/data/mock/portfolio';

const featured = getFeaturedWork(); // Returns all featured entries
```

**19 Real Figma Assets** integrated across portfolio entries!

---

### 4. Blog Data (`/data/mock/blog/`)

#### Blog Posts

**5 Comprehensive Posts (15,000+ words):**

```typescript
// posts.ts
export const blogPosts: BlogPost[] = [
  {
    id: 'festival-makeup-survival-guide',
    slug: 'festival-makeup-survival-guide',
    title: 'Festival Makeup Survival Guide: 10 Tips...',
    excerpt: 'From heat-proof primers to waterproof...',
    content: `# Festival Makeup Survival Guide...`, // Full markdown
    author: {
      name: 'Ash Shaw',
      avatar: '...',
      bio: 'Festival makeup artist...'
    },
    publishedAt: '2024-06-15',
    category: 'Makeup Tips',
    tags: ['Festival Makeup', 'Tutorial', 'Tips'],
    featuredImage: {
      src: '...',
      alt: '...',
      caption: '...'
    },
    featured: true,
    readTime: 8
  }
  // ... 4 more posts
];
```

**Blog Posts:**
1. Festival Makeup Survival Guide (8 min read)
2. Ultimate UV Makeup Guide (10 min read)
3. Festival Makeup Packing List (5 min read)
4. Thailand Festival Experience (7 min read)
5. Color Theory for Makeup Artists (6 min read)

---

#### Blog Categories & Tags

```typescript
// categories.ts
export const blogCategories: BlogCategory[] = [
  {
    id: 'makeup-tips',
    name: 'Makeup Tips',
    slug: 'makeup-tips',
    description: 'Expert tips and tricks...',
    count: 12,
    color: '#ec4899'
  }
  // ... 6 categories
];

export const popularTags = [
  'Festival Makeup',
  'UV Makeup',
  'Tutorial',
  // ... 15 popular tags
];

export const allTags = [
  // ... 50+ comprehensive tags
];
```

**6 Categories:**
1. Makeup Tips (#ec4899)
2. Tutorials (#a855f7)
3. Festival Tips (#f97316)
4. Travel (#14b8a6)
5. Education (#3b82f6)
6. Product Reviews (#22c55e)

---

#### Blog Utilities

```typescript
// blog/index.ts
export const featuredPosts = blogPosts.filter(post => post.featured);
export const recentPosts = [...blogPosts]
  .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
  .slice(0, 3);

export function getPostsByCategory(categorySlug: string): BlogPost[];
export function getPostsByTag(tag: string): BlogPost[];
export function getPostBySlug(slug: string): BlogPost | undefined;
export function searchPosts(query: string): BlogPost[];
```

**Usage:**
```typescript
import { 
  featuredPosts,
  recentPosts,
  getPostsByCategory,
  searchPosts 
} from '@/data/mock/blog';

const festivalPosts = getPostsByCategory('festival-tips');
const results = searchPosts('UV makeup');
```

---

### 5. UI Data (`/data/mock/ui/`)

#### Social Links

```typescript
// social-links.ts
export const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    platform: 'Instagram',
    url: 'https://www.instagram.com/ashshawmakeup',
    icon: 'Instagram',
    username: '@ashshawmakeup',
    ariaLabel: 'Follow Ash Shaw on Instagram',
    isPrimary: true,
    displayOrder: 1
  }
  // ... 4 social links
];
```

**Available Links:**
- Instagram (primary)
- Facebook
- TikTok
- LinkedIn
- Email

---

## 🎓 Usage Patterns

### Basic Import and Usage

```typescript
// Import what you need
import { homepageHero, whyReasons } from '@/data/mock';

export function HomePage() {
  return (
    <div>
      <Hero {...homepageHero} />
      <WhySection reasons={whyReasons} />
    </div>
  );
}
```

---

### CMS Integration Pattern

**Contentful with Mock Fallback:**

```typescript
import { aboutHero, aboutHeroImages } from '@/data/mock';
import { useAboutPageContent } from '@/hooks/useContentful';

export function AboutPage() {
  const { data: cmsData, loading, error } = useAboutPageContent();
  
  // Use CMS data if available, fallback to mock
  const heroTitle = cmsData?.hero.title || aboutHero.title;
  const heroImages = cmsData?.hero.images || aboutHeroImages;
  
  return (
    <HeroLayout
      title={heroTitle}
      heroImages={heroImages}
    />
  );
}
```

---

### Portfolio Service Pattern

```typescript
import { getFeaturedWork, thailandWork } from '@/data/mock/portfolio';

export function PortfolioPage() {
  const featured = getFeaturedWork();
  const thailand = thailandWork;
  
  return (
    <div>
      <FeaturedSection entries={featured} />
      <ThailandSection entries={thailand} />
    </div>
  );
}
```

---

### Blog Data Pattern

```typescript
import { 
  blogPosts,
  featuredPosts,
  getPostsByCategory 
} from '@/data/mock/blog';

export function BlogPage() {
  const [posts, setPosts] = useState(blogPosts);
  const featured = featuredPosts;
  
  const handleCategoryFilter = (category: string) => {
    setPosts(getPostsByCategory(category));
  };
  
  return <BlogListing posts={posts} featured={featured} />;
}
```

---

## 🔒 Type Safety

### Type Definitions

All mock data is fully typed with TypeScript interfaces:

```typescript
// /data/types/portfolio.ts
export interface PortfolioEntry {
  id: string;
  slug: string;
  title: string;
  category: string;
  subcategory?: string;
  images: PortfolioImage[];
  location?: string;
  event?: string;
  date?: string;
  description: string;
  excerpt?: string;
  tags: string[];
  featured: boolean;
  order?: number;
}

export interface PortfolioImage {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  description?: string;
  position?: 'left' | 'center' | 'right' | 'top' | 'bottom';
  aspectRatio?: '1:1' | '4:3' | '3:4' | '16:9' | '9:16' | string;
}
```

### Import Types

```typescript
// Import data with types
import { blogPosts } from '@/data/mock/blog';
import type { BlogPost } from '@/data/types';

// TypeScript knows the exact structure
const post: BlogPost = blogPosts[0];
console.log(post.title); // ✅ Type-safe
console.log(post.invalid); // ❌ TypeScript error
```

---

## ✅ Best Practices

### DO ✅

**1. Import from Barrel Exports**
```typescript
// ✅ GOOD - Clean, simple
import { homepageHero, blogPosts } from '@/data/mock';
```

**2. Use Type Imports**
```typescript
// ✅ GOOD - Explicit types
import type { BlogPost, PortfolioEntry } from '@/data/types';
```

**3. Provide Fallbacks**
```typescript
// ✅ GOOD - Safe fallback
const heroData = cmsData?.hero || homepageHero;
```

**4. Use Utility Functions**
```typescript
// ✅ GOOD - Built-in helpers
import { getFeaturedWork, searchPosts } from '@/data/mock';
```

**5. Keep Mock Data Updated**
```typescript
// ✅ GOOD - Regular updates
// Update mock data when CMS content changes
// Keep images current with Figma assets
```

---

### DON'T ❌

**1. Hardcode Content in Components**
```typescript
// ❌ BAD - Hardcoded
const title = "About Ash Shaw";

// ✅ GOOD - From mock data
import { aboutHero } from '@/data/mock';
const title = aboutHero.title;
```

**2. Duplicate Data**
```typescript
// ❌ BAD - Data in multiple places
const socialLinks = [{ platform: 'Instagram', url: '...' }];

// ✅ GOOD - Single source
import { socialLinks } from '@/data/mock';
```

**3. Skip Type Definitions**
```typescript
// ❌ BAD - No types
const data: any = mockData;

// ✅ GOOD - Typed
import type { BlogPost } from '@/data/types';
const data: BlogPost = mockData;
```

**4. Import Figma Assets Directly in Components**
```typescript
// ❌ BAD - Direct Figma import
import heroImg from 'figma:asset/abc123.png';

// ✅ GOOD - From centralized data
import { homepageHeroImages } from '@/data/mock/images';
```

---

## 🔄 Migration Guide

### From Constants.ts to Mock Data

**Old Pattern (Constants.ts):**
```typescript
// ❌ OLD - components/common/Constants.ts
export const HOMEPAGE_HERO = {
  title: "Ash Shaw",
  description: "..."
};

import heroImage from 'figma:asset/abc123.png';
export const HERO_IMAGES = [heroImage];
```

**New Pattern (Mock Data):**
```typescript
// ✅ NEW - data/mock/pages/home.ts
export const homepageHero = {
  title: "Ash Shaw",
  subtitle: "Makeup Artist & Creative Spirit",
  description: "..."
};

// data/mock/images/hero-images.ts
export const homepageHeroImages: HeroImage[] = [
  {
    src: 'figma:asset/abc123.png',
    alt: 'Description',
    caption: 'Caption'
  }
];
```

---

### Component Migration Steps

**Step 1: Identify Current Data Source**
```typescript
// Find Constants imports
import { HOMEPAGE_HERO } from '@/components/common/Constants';
```

**Step 2: Find Equivalent Mock Data**
```typescript
// Replace with mock data import
import { homepageHero } from '@/data/mock';
```

**Step 3: Update Component**
```typescript
// Before
<Hero title={HOMEPAGE_HERO.title} />

// After
<Hero {...homepageHero} />
```

**Step 4: Remove Old Imports**
```typescript
// Remove unused Constants import
// import { HOMEPAGE_HERO } from '@/components/common/Constants'; ❌
```

---

## 📝 Adding New Data

### Adding a New Portfolio Entry

```typescript
// 1. Open relevant file: /data/mock/portfolio/thailand.ts

// 2. Add new entry to array
export const thailandWork: PortfolioEntry[] = [
  // ... existing entries
  {
    id: 'new-festival-entry',
    slug: 'new-festival-entry',
    title: 'New Festival',
    category: 'Festival Makeup',
    subcategory: 'Thailand Adventures',
    images: [
      {
        src: 'figma:asset/YOUR_FIGMA_ASSET_ID.png',
        alt: 'Description of image',
        caption: 'Caption',
        description: 'Detailed description',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Location',
    event: 'Event Name',
    description: 'Full description...',
    tags: ['Tag1', 'Tag2'],
    featured: false,
    order: 5
  }
];

// 3. Entry is automatically available via barrel export
import { thailandWork } from '@/data/mock/portfolio';
```

---

### Adding a New Blog Post

```typescript
// 1. Open: /data/mock/blog/posts.ts

// 2. Add to blogPosts array
export const blogPosts: BlogPost[] = [
  // ... existing posts
  {
    id: 'new-blog-post',
    slug: 'new-blog-post',
    title: 'New Blog Post Title',
    excerpt: 'Short summary...',
    content: `# Full Blog Post Content in Markdown...`,
    author: {
      name: 'Ash Shaw',
      avatar: '...',
      bio: '...'
    },
    publishedAt: '2025-01-30',
    category: 'Makeup Tips',
    tags: ['Tag1', 'Tag2'],
    featuredImage: {
      src: 'https://...',
      alt: '...',
      caption: '...'
    },
    featured: false,
    readTime: 5
  }
];

// 3. Post is automatically available
import { blogPosts } from '@/data/mock/blog';
```

---

## 🎯 Real-World Examples

### Example 1: Homepage Hero

```typescript
// data/mock/pages/home.ts
export const homepageHero = {
  title: 'Ash Shaw',
  subtitle: 'Makeup Artist & Creative Spirit',
  description: 'Bringing colour, energy, and connection to every face I paint.'
};

// components/pages/home/HomePage.tsx
import { homepageHero, homepageHeroImages } from '@/data/mock';

export function HomePage() {
  return (
    <HeroLayout
      title={homepageHero.title}
      subtitle={homepageHero.subtitle}
      description={homepageHero.description}
      heroImages={homepageHeroImages}
    />
  );
}
```

---

### Example 2: Portfolio Featured Work

```typescript
// data/mock/portfolio/featured.ts (auto-generated)
import { thailandWork } from './thailand';
import { uvMakeupWork } from './uv-makeup';

export function getFeaturedWork(): PortfolioEntry[] {
  return [
    ...thailandWork.filter(entry => entry.featured),
    ...uvMakeupWork.filter(entry => entry.featured)
    // Automatically collects all featured entries
  ];
}

// components/sections/FeaturedSection.tsx
import { getFeaturedWork } from '@/data/mock/portfolio';

export function FeaturedSection() {
  const featured = getFeaturedWork();
  
  return (
    <section>
      {featured.map(entry => (
        <PortfolioCard key={entry.id} entry={entry} />
      ))}
    </section>
  );
}
```

---

### Example 3: Blog with Search

```typescript
// components/pages/blog/BlogPage.tsx
import { blogPosts, searchPosts } from '@/data/mock/blog';
import { useState } from 'react';

export function BlogPage() {
  const [posts, setPosts] = useState(blogPosts);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPosts(query ? searchPosts(query) : blogPosts);
  };
  
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <BlogList posts={posts} />
    </div>
  );
}
```

---

## 📊 Data Statistics

### Current Data Volume

| Category | Count | Details |
|----------|-------|---------|
| **Hero Image Sets** | 3 | Homepage, About, Portfolio |
| **Total Hero Images** | 9 | 3 per page |
| **Portfolio Entries** | 43 | Across 6 categories |
| **Real Figma Assets** | 19 | Actual uploaded images |
| **Blog Posts** | 5 | ~15,000 words total |
| **Blog Categories** | 6 | With descriptions |
| **Blog Tags** | 50+ | Organized by type |
| **Social Links** | 5 | Instagram, Facebook, TikTok, LinkedIn, Email |
| **Why Reasons** | 4 | Homepage features |

---

## 🔗 Related Documentation

- **[Guidelines.md](./Guidelines.md)** - Main project guidelines
- **[overview-components.md](./overview-components.md)** - Component system
- **[design-tokens/](./design-tokens/)** - Design system specs

---

## 🆘 Troubleshooting

### Issue: Import not found

```typescript
// ❌ Error: Cannot find module '@/data/mock'
import { homepageHero } from '@/data/mock';
```

**Solution:** Check your import path configuration in `tsconfig.json`

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

### Issue: Type mismatch

```typescript
// ❌ Error: Type 'string' is not assignable to type 'HeroImage'
```

**Solution:** Import and use the correct type

```typescript
import type { HeroImage } from '@/data/types';
const images: HeroImage[] = homepageHeroImages;
```

---

### Issue: Figma asset not loading

```typescript
// ❌ Image not displaying: figma:asset/abc123.png
```

**Solution:** 
1. Verify the asset exists in PortfolioImage.tsx FIGMA_ASSET_MAP
2. Ensure you're using the exact asset ID
3. Check that the asset was properly uploaded to Figma

---

## ✅ Checklist for New Data

When adding new mock data:

- [ ] Data is in correct category folder
- [ ] TypeScript interface is defined
- [ ] Export added to barrel file (index.ts)
- [ ] JSDoc comments included
- [ ] Real Figma assets used (when applicable)
- [ ] Data follows existing patterns
- [ ] No hardcoded content
- [ ] Proper type safety
- [ ] Added to appropriate collection

---

**Version:** 4.0.0  
**Last Updated:** January 2025  
**Maintained by:** Ash Shaw Portfolio Team

For questions or issues, refer to the main [Guidelines.md](./Guidelines.md) or create a documentation request.