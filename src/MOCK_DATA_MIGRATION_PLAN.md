# Mock Data Migration Plan

**Project:** Ash Shaw Makeup Portfolio  
**Date:** January 2025  
**Goal:** Centralize all static content into mock data files  
**Status:** 📋 PLANNING PHASE

---

## 🎯 Objectives

1. **Centralize Data** - Move all content from components and Constants.ts to `/data/mock/`
2. **Separate Concerns** - Remove styling from data objects
3. **Type Safety** - Create TypeScript interfaces for all data
4. **Easy Updates** - Enable content changes without touching component code
5. **Development Ready** - Provide complete mock data for offline development

---

## 📁 New Folder Structure

```
/data/
├── mock/
│   ├── portfolio/
│   │   ├── featured.ts           // Featured work (homepage)
│   │   ├── thailand.ts           // Thailand festival work
│   │   ├── festivals.ts          // Festival makeup collection
│   │   ├── shankra.ts            // Shankra Festival 2023
│   │   ├── reiserfieber.ts       // Reiserfieber Festival
│   │   ├── uv-makeup.ts          // UV/blacklight work
│   │   ├── nail-art.ts           // Nail art portfolio
│   │   └── index.ts              // Portfolio barrel export
│   │
│   ├── blog/
│   │   ├── posts.ts              // Mock blog posts
│   │   ├── categories.ts         // Blog categories
│   │   └── index.ts              // Blog barrel export
│   │
│   ├── pages/
│   │   ├── home.ts               // Homepage content
│   │   ├── about.ts              // About page content
│   │   ├── portfolio.ts          // Portfolio page content
│   │   └── index.ts              // Pages barrel export
│   │
│   ├── ui/
│   │   ├── social-links.ts       // Social media links
│   │   ├── navigation.ts         // Nav menu items
│   │   ├── ctas.ts               // Call-to-action buttons
│   │   └── index.ts              // UI barrel export
│   │
│   ├── images/
│   │   ├── hero-images.ts        // All hero section images
│   │   └── index.ts              // Images barrel export
│   │
│   └── index.ts                  // Main barrel export
│
├── types/
│   ├── portfolio.ts              // Portfolio type definitions
│   ├── blog.ts                   // Blog type definitions
│   ├── page.ts                   // Page content type definitions
│   └── index.ts                  // Types barrel export
│
└── README.md                     // Data documentation
```

---

## 📊 TypeScript Interfaces

### `/data/types/portfolio.ts`

```typescript
/**
 * Portfolio Image Interface
 * Represents a single image in a portfolio entry
 */
export interface PortfolioImage {
  /** Image source (figma:asset or URL) */
  src: string;
  
  /** Accessible description of the image */
  alt: string;
  
  /** Short title for lightbox display */
  title: string;
  
  /** Optional caption for additional context */
  caption?: string;
  
  /** Optional position hint (for mosaic layouts) */
  position?: 'left' | 'center' | 'right' | 'top' | 'bottom';
  
  /** Aspect ratio hint */
  aspectRatio?: '1:1' | '4:3' | '16:9' | '3:4';
}

/**
 * Portfolio Entry Interface
 * Unified structure for all portfolio items
 */
export interface PortfolioEntry {
  /** Unique identifier */
  id: string;
  
  /** URL-friendly slug */
  slug: string;
  
  /** Display title */
  title: string;
  
  /** Primary category */
  category: 'Festival Makeup' | 'UV Makeup' | 'Nail Art' | 'Portrait' | 'Special Effects';
  
  /** Optional subcategory */
  subcategory?: string;
  
  /** Array of images */
  images: PortfolioImage[];
  
  /** Location where work was created/performed */
  location?: string;
  
  /** Event or context */
  event?: string;
  
  /** Date of work (ISO string or display string) */
  date?: string;
  
  /** Detailed description of the work */
  description: string;
  
  /** Short excerpt for cards */
  excerpt?: string;
  
  /** Searchable tags */
  tags: string[];
  
  /** Is this featured work? */
  featured: boolean;
  
  /** Display order (lower = higher priority) */
  order: number;
  
  /** Optional Contentful ID for CMS sync */
  contentfulId?: string;
}

/**
 * Portfolio Section Interface
 * Groups portfolio entries by theme/location
 */
export interface PortfolioSection {
  /** Section identifier */
  id: string;
  
  /** Display title */
  title: string;
  
  /** Section description */
  description: string;
  
  /** Entries in this section */
  entries: PortfolioEntry[];
  
  /** Display order */
  order: number;
  
  /** Background gradient colors (for decorative elements) */
  decorativeColors?: string[];
}
```

### `/data/types/blog.ts`

```typescript
/**
 * Blog Post Image Interface
 */
export interface BlogImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Blog Post Author Interface
 */
export interface BlogAuthor {
  name: string;
  image?: string;
  bio?: string;
}

/**
 * Blog Post Interface
 * Mirrors Contentful structure for development
 */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // For mock data, use plain string instead of Rich Text
  featuredImage: BlogImage;
  publishedDate: string; // ISO date string
  updatedDate?: string;
  category?: string;
  tags?: string[];
  readingTime: number; // In minutes
  author?: BlogAuthor;
  featured?: boolean;
}

/**
 * Blog Category Interface
 */
export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  count?: number;
}
```

### `/data/types/page.ts`

```typescript
/**
 * Hero Image Interface
 * Used for hero section mosaics
 */
export interface HeroImage {
  src: string;
  alt: string;
  caption: string;
  description: string;
  position?: 'left' | 'center' | 'right';
  aspectRatio?: '1:1' | '4:3' | '16:9' | '3:4';
}

/**
 * Hero Section Content Interface
 */
export interface HeroContent {
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
  backgroundImages?: HeroImage[];
}

/**
 * Why Section Reason Interface
 */
export interface WhyReason {
  id: string;
  icon: 'shine' | 'joy' | 'growth';
  title: string;
  description: string;
  order: number;
}

/**
 * Page Content Interface
 */
export interface PageContent {
  id: string;
  title: string;
  metaDescription?: string;
  hero?: HeroContent;
  sections?: Record<string, any>; // Flexible for different section types
}
```

### `/data/types/index.ts`

```typescript
// Barrel export for all types
export * from './portfolio';
export * from './blog';
export * from './page';
```

---

## 📝 Mock Data Files

### `/data/mock/portfolio/featured.ts`

```typescript
import { PortfolioEntry } from '../../types';

/**
 * Featured Work - Homepage Portfolio Section
 * Curated selection of best work across all categories
 */
export const featuredWork: PortfolioEntry[] = [
  {
    id: 'festival-eye-art',
    slug: 'festival-eye-art',
    title: 'Festival Eye Art',
    category: 'Festival Makeup',
    images: [
      {
        src: 'figma:asset/f4a28f747d49fc9d37311b17f513b62e2b95a73e.png',
        alt: 'Close-up artistic eye makeup with vibrant purple stripe, red metallic lashes and colorful crystal gems',
        title: 'Festival Eye Art - Main',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Koh Phangan, Thailand',
    event: 'Jungle Festival',
    description: 'Intricate eye makeup featuring a bold purple stripe design, metallic red lashes, and decorative crystal gems showcasing precision and creativity in festival artistry.',
    excerpt: 'Bold festival eye art with purple stripes and metallic red lashes',
    tags: ['Eye Art', 'Festival', 'Gems', 'Colorful', 'Creative'],
    featured: true,
    order: 1
  },
  // ... more featured entries
];
```

### `/data/mock/blog/posts.ts`

```typescript
import { BlogPost } from '../../types';

/**
 * Mock Blog Posts
 * For development without Contentful CMS
 */
export const mockBlogPosts: BlogPost[] = [
  {
    id: 'festival-makeup-guide-2024',
    slug: 'festival-makeup-guide-2024',
    title: 'The Ultimate Festival Makeup Guide 2024',
    excerpt: 'Everything you need to know about creating stunning, long-lasting festival makeup that glows under UV lights and survives dancing all night.',
    content: `
# The Ultimate Festival Makeup Guide 2024

Festival season is here, and it's time to unleash your creativity! After years of creating festival looks across Thailand and Europe, I've learned what works (and what doesn't) when it comes to makeup that needs to last from sunset to sunrise.

## Essential Products

1. **Primer is Non-Negotiable**
   - Use a long-lasting, sweat-proof primer
   - My favorite: [Product Name]
   
2. **UV Reactive Paints**
   - Choose neon colors that pop under blacklight
   - Test them before the festival!

## Techniques That Work

### Creating Geometric Designs

Start with tape to create clean lines...

[Continue with full blog post content]
    `,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-...',
      alt: 'Colorful festival makeup with UV reactive paints',
      width: 1200,
      height: 800
    },
    publishedDate: '2024-06-15T10:00:00Z',
    category: 'Tutorials',
    tags: ['Festival', 'Makeup Guide', 'UV Makeup', 'Tutorial'],
    readingTime: 8,
    author: {
      name: 'Ash Shaw',
      image: '/images/ash-shaw-avatar.jpg',
      bio: 'Festival makeup artist and creative explorer'
    },
    featured: true
  },
  {
    id: 'thailand-festival-experience',
    slug: 'thailand-festival-experience',
    title: 'My Festival Makeup Journey in Thailand',
    excerpt: 'A personal story about discovering the vibrant festival scene in Thailand and how it transformed my approach to makeup artistry.',
    content: `
# My Festival Makeup Journey in Thailand

When I first arrived in Koh Phangan, I had no idea how much the island's festival culture would change my life...

[Continue with full blog post content]
    `,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-...',
      alt: 'Sunset beach scene in Koh Phangan, Thailand',
      width: 1200,
      height: 800
    },
    publishedDate: '2024-05-20T14:30:00Z',
    category: 'Stories',
    tags: ['Thailand', 'Festival', 'Personal Story', 'Travel'],
    readingTime: 6,
    author: {
      name: 'Ash Shaw',
      image: '/images/ash-shaw-avatar.jpg'
    },
    featured: false
  }
];
```

### `/data/mock/pages/home.ts`

```typescript
import { PageContent, HeroContent, WhyReason } from '../../types';

/**
 * Homepage Content
 * All static content for the homepage
 */
export const homepageHero: HeroContent = {
  title: "Hi, I'm Ash Shaw",
  subtitle: "Makeup that shines with colour, energy, and connection",
  description: "Makeup is my art, my joy, and my way of bringing people together. From festivals to the dance floor, I use colour and light to create looks that make people feel radiant, confident, and alive. ✨ This portfolio is a growing collection of that journey.",
  ctaText: "Explore My Portfolio",
  ctaLink: "/portfolio"
};

/**
 * Why I Do Makeup Section
 */
export const whyReasons: WhyReason[] = [
  {
    id: 'spread-joy',
    icon: 'shine',
    title: 'Spread Joy',
    description: 'When I do makeup for others, it lights them up. They feel special, happy, and confident — and seeing that sparkle in their eyes inspires me to keep creating.',
    order: 1
  },
  {
    id: 'brings-joy',
    icon: 'joy',
    title: 'Brings Me Joy',
    description: 'Makeup is my creative playground. Whether it\'s festival glitter, glowing UV paints, or bold eyeshadow blends, I love the process of experimenting and expressing.',
    order: 2
  },
  {
    id: 'keep-growing',
    icon: 'growth',
    title: 'To Keep Growing',
    description: 'Every face, every colour, every night out is a chance to evolve. Makeup is a journey — and I treat each session as an opportunity to learn and expand my artistry.',
    order: 3
  }
];

export const homepageContent: PageContent = {
  id: 'home',
  title: 'Ash Shaw - Makeup Artist Portfolio',
  metaDescription: 'Festival makeup artist specializing in creative, colorful looks. Based in Thailand, creating joy through makeup artistry.',
  hero: homepageHero,
  sections: {
    why: whyReasons
  }
};
```

### `/data/mock/ui/social-links.ts`

```typescript
/**
 * Social Media Links
 * Platform configurations for footer and contact sections
 */
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/feedmymedia',
    icon: 'instagram',
    label: 'Follow Ash Shaw on Instagram'
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/ash.shaw/',
    icon: 'facebook',
    label: 'Connect on Facebook'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ashshaw/',
    icon: 'linkedin',
    label: 'Professional network on LinkedIn'
  },
  {
    platform: 'Email',
    url: 'mailto:ashley@ashshaw.makeup',
    icon: 'email',
    label: 'Email Ash Shaw'
  }
];
```

### `/data/mock/images/hero-images.ts`

```typescript
import { HeroImage } from '../../types';

// Import Figma assets
import heroImage1 from 'figma:asset/f4a28f747d49fc9d37311b17f513b62e2b95a73e.png';
import heroImage2 from 'figma:asset/378acbf4a7518ca6c40b44540bd7a121a91375fe.png';
import heroImage3 from 'figma:asset/e82a7d901c5a28bf9313c7535228e647eaf06b75.png';

/**
 * Homepage Hero Images
 * Curated mosaic for homepage hero section
 */
export const homepageHeroImages: HeroImage[] = [
  {
    src: heroImage1,
    alt: 'Close-up artistic eye makeup with vibrant purple stripe, red metallic lashes and colorful crystal gems',
    caption: 'Festival Eye Art',
    description: 'Intricate eye makeup featuring a bold purple stripe design, metallic red lashes, and decorative crystal gems showcasing precision and creativity in festival artistry',
    position: 'left',
    aspectRatio: '4:3'
  },
  {
    src: heroImage2,
    alt: 'Joyful festival participant with rainbow heart body paint on chest, smiling radiantly in colorful festival environment',
    caption: 'Rainbow Heart Love',
    description: 'Beautiful expression of festival joy and connection with rainbow heart body art, capturing the loving and inclusive spirit of festival culture and community celebration',
    position: 'right',
    aspectRatio: '4:3'
  },
  {
    src: heroImage3,
    alt: 'Portrait of person with blonde hair and colorful face paint featuring blue and pink stripes in outdoor festival setting',
    caption: 'Vibrant Face Art',
    description: 'Striking portrait showcasing colorful face paint with blue and pink geometric stripes, demonstrating bold artistic expression and the transformative power of festival makeup',
    position: 'center',
    aspectRatio: '3:4'
  }
];

/**
 * About Page Hero Images
 * Images representing Ash's journey
 */
export const aboutHeroImages: HeroImage[] = [
  // ... about page images
];

/**
 * Portfolio Page Hero Images
 * Portfolio showcase images
 */
export const portfolioHeroImages: HeroImage[] = [
  // ... portfolio page images
];
```

### `/data/mock/index.ts`

```typescript
/**
 * Main Mock Data Barrel Export
 * Central access point for all mock data
 */

// Portfolio Data
export * from './portfolio';

// Blog Data
export * from './blog';

// Page Content
export * from './pages';

// UI Elements
export * from './ui';

// Images
export * from './images';

// Re-export types for convenience
export * from '../types';
```

---

## 🔄 Component Refactoring Examples

### Before: WhySection.tsx (Hardcoded)

```typescript
export function WhySection({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const reasons = [
    {
      icon: ShineIcon,
      title: "Spread Joy",
      description: "When I do makeup for others, it lights them up..."
    },
    // ... hardcoded data
  ];

  return (
    <ThreeColumnLayout>
      {reasons.map((reason, index) => (
        // ... render
      ))}
    </ThreeColumnLayout>
  );
}
```

### After: WhySection.tsx (Using Mock Data)

```typescript
import { whyReasons } from '../../data/mock/pages/home';
import { ShineIcon, JoyIcon, GrowthIcon } from '../common/ColorfulIcons';

// Map icon names to components
const iconMap = {
  shine: ShineIcon,
  joy: JoyIcon,
  growth: GrowthIcon
};

export function WhySection({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <ThreeColumnLayout>
      {whyReasons.map((reason) => {
        const IconComponent = iconMap[reason.icon];
        
        return (
          <div key={reason.id} className="...">
            <IconComponent />
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        );
      })}
    </ThreeColumnLayout>
  );
}
```

---

### Before: HomePage.tsx (Mixed Data Sources)

```typescript
export function HomePage({ setCurrentPage }: HomePageProps) {
  const { data: homepageContent } = useHomepageContent();
  
  const heroTitle = homepageContent?.hero.title || "Hi, I'm Ash Shaw";
  const heroDescription = homepageContent?.hero.description || "Makeup is my art...";
  const heroBackgroundImages = homepageContent?.hero.backgroundImages?.length > 0 
    ? homepageContent.hero.backgroundImages.map(img => ({ ... }))
    : HOMEPAGE_HERO_IMAGES;

  return (
    <main>
      <HeroLayout
        title={heroTitle}
        description={heroDescription}
        heroImages={heroBackgroundImages}
        // ...
      />
      // ...
    </main>
  );
}
```

### After: HomePage.tsx (Clean Data Import)

```typescript
import { homepageHero, homepageHeroImages } from '../../data/mock/pages/home';

export function HomePage({ setCurrentPage }: HomePageProps) {
  // Use Contentful if available, otherwise use mock data
  const { data: cmsContent, loading } = useHomepageContent();
  
  // Merge CMS content with mock data fallbacks
  const heroContent = {
    title: cmsContent?.hero.title || homepageHero.title,
    description: cmsContent?.hero.description || homepageHero.description,
    ctaText: cmsContent?.hero.ctaText || homepageHero.ctaText,
    images: cmsContent?.hero.backgroundImages || homepageHeroImages
  };

  return (
    <main>
      <HeroLayout
        title={heroContent.title}
        description={heroContent.description}
        heroImages={heroContent.images}
        // ...
      />
      // ...
    </main>
  );
}
```

---

## 📋 Migration Checklist

### Phase 1: Infrastructure Setup ✅

- [ ] Create `/data` folder structure
- [ ] Create `/data/types/` folder
- [ ] Define TypeScript interfaces
  - [ ] `portfolio.ts`
  - [ ] `blog.ts`
  - [ ] `page.ts`
  - [ ] `index.ts` (barrel export)
- [ ] Create `/data/mock/` folder structure
  - [ ] `portfolio/` folder
  - [ ] `blog/` folder
  - [ ] `pages/` folder
  - [ ] `ui/` folder
  - [ ] `images/` folder
- [ ] Create README.md with documentation

**Estimated Time:** 1-2 hours

---

### Phase 2: Portfolio Data Migration ✅

- [ ] Create portfolio type definitions
- [ ] Extract data from Constants.ts
- [ ] Create `/data/mock/portfolio/featured.ts`
- [ ] Create `/data/mock/portfolio/thailand.ts`
- [ ] Create `/data/mock/portfolio/festivals.ts`
- [ ] Create `/data/mock/portfolio/shankra.ts`
- [ ] Create `/data/mock/portfolio/reiserfieber.ts`
- [ ] Create `/data/mock/portfolio/uv-makeup.ts`
- [ ] Create `/data/mock/portfolio/nail-art.ts`
- [ ] Create barrel export `/data/mock/portfolio/index.ts`
- [ ] Normalize all portfolio data structures
- [ ] Remove styling classes from data

**Estimated Time:** 4-5 hours

---

### Phase 3: Page Content Migration ✅

- [ ] Create page type definitions
- [ ] Create `/data/mock/pages/home.ts`
  - [ ] Extract hero content
  - [ ] Extract why section reasons
- [ ] Create `/data/mock/pages/about.ts`
  - [ ] Extract journey timeline
  - [ ] Extract philosophy content
- [ ] Create `/data/mock/pages/portfolio.ts`
  - [ ] Extract page-specific content
- [ ] Create `/data/mock/images/hero-images.ts`
  - [ ] Move homepage hero images
  - [ ] Move about hero images
  - [ ] Move portfolio hero images
- [ ] Create barrel exports

**Estimated Time:** 3-4 hours

---

### Phase 4: Blog Mock Data ✅

- [ ] Create blog type definitions (mirror Contentful)
- [ ] Create `/data/mock/blog/posts.ts`
  - [ ] Create 5-10 sample blog posts
  - [ ] Include full content
  - [ ] Match Contentful structure
- [ ] Create `/data/mock/blog/categories.ts`
- [ ] Create barrel export
- [ ] Add development mode switch

**Estimated Time:** 2-3 hours

---

### Phase 5: UI Data Migration ✅

- [ ] Create `/data/mock/ui/social-links.ts`
- [ ] Create `/data/mock/ui/navigation.ts` (if needed)
- [ ] Create `/data/mock/ui/ctas.ts` (common CTAs)
- [ ] Create barrel export

**Estimated Time:** 1 hour

---

### Phase 6: Component Refactoring ✅

Update components to use mock data:

- [ ] Update `HomePage.tsx`
- [ ] Update `WhySection.tsx`
- [ ] Update `FeaturedSection.tsx`
- [ ] Update `FusionNailsSection.tsx`
- [ ] Update `AboutPage.tsx`
- [ ] Update `PortfolioPage.tsx`
- [ ] Update `BlogPreviewSection.tsx`
- [ ] Update `Footer.tsx`
- [ ] Update `Header.tsx` (if needed)

**Estimated Time:** 4-5 hours

---

### Phase 7: Clean Up ✅

- [ ] Remove data from Constants.ts (keep only if needed)
- [ ] Remove hardcoded content from components
- [ ] Update imports across codebase
- [ ] Add JSDoc comments to all data files
- [ ] Create data README with examples

**Estimated Time:** 2 hours

---

### Phase 8: Testing ✅

- [ ] Test all pages render correctly
- [ ] Test portfolio sections display properly
- [ ] Test blog preview with mock data
- [ ] Test CMS fallback system
- [ ] Test navigation
- [ ] Verify no broken imports
- [ ] Check TypeScript compilation
- [ ] Visual regression testing

**Estimated Time:** 3-4 hours

---

## 📊 Total Effort Estimation

| Phase | Time | Complexity |
|-------|------|------------|
| **Phase 1: Infrastructure** | 1-2 hours | LOW |
| **Phase 2: Portfolio Migration** | 4-5 hours | MEDIUM |
| **Phase 3: Page Content** | 3-4 hours | MEDIUM |
| **Phase 4: Blog Mock Data** | 2-3 hours | LOW |
| **Phase 5: UI Data** | 1 hour | LOW |
| **Phase 6: Components** | 4-5 hours | MEDIUM |
| **Phase 7: Clean Up** | 2 hours | LOW |
| **Phase 8: Testing** | 3-4 hours | MEDIUM |
| **TOTAL** | **20-28 hours** | **MEDIUM** |

**Recommended Approach:** Implement over 3-4 days with incremental commits

---

## 🎯 Benefits After Migration

### Developer Experience
✅ Single source of truth for all content  
✅ Easy to find and update content  
✅ Type-safe data with autocomplete  
✅ Mock data for offline development  
✅ Clear separation of concerns  

### Maintainability
✅ Content changes without code deployment  
✅ Consistent data structures  
✅ Better code organization  
✅ Easier to onboard new developers  
✅ Reduced coupling between data and UI  

### Scalability
✅ Easy to add new portfolio items  
✅ Simple to create new pages  
✅ Ready for CMS migration  
✅ Flexible for future features  
✅ Better testing capabilities  

---

## 🚀 Next Steps

1. **Review and approve this plan**
2. **Begin Phase 1: Create infrastructure**
3. **Migrate incrementally** (one phase at a time)
4. **Test thoroughly** after each phase
5. **Document changes** in commit messages

---

**Plan Created:** January 2025  
**Estimated Completion:** 3-4 days  
**Risk Level:** MEDIUM  
**Status:** ✅ READY TO IMPLEMENT
