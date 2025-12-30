# Mock Data Implementation Guide

**Project:** Ash Shaw Makeup Portfolio  
**Goal:** Step-by-step guide to implement mock data system  
**Date:** January 2025

---

## 🚀 Quick Start

This guide will walk you through implementing the mock data system in the correct order, with code examples for each step.

---

## 📋 Step 1: Create Folder Structure (15 minutes)

### Action: Create all folders

```bash
# From project root
mkdir -p data/types
mkdir -p data/mock/portfolio
mkdir -p data/mock/blog
mkdir -p data/mock/pages
mkdir -p data/mock/ui
mkdir -p data/mock/images
```

### Verify Structure

```
/data/
├── types/
├── mock/
│   ├── portfolio/
│   ├── blog/
│   ├── pages/
│   ├── ui/
│   └── images/
```

---

## 📋 Step 2: Create TypeScript Interfaces (30 minutes)

### Create `/data/types/portfolio.ts`

```typescript
/**
 * Portfolio type definitions
 * @module data/types/portfolio
 */

/**
 * Single image in a portfolio entry
 */
export interface PortfolioImage {
  /** Image source URL or Figma asset path */
  src: string;
  
  /** Accessible alt text */
  alt: string;
  
  /** Display title */
  title: string;
  
  /** Optional caption */
  caption?: string;
  
  /** Layout position hint (not CSS class) */
  position?: 'left' | 'center' | 'right' | 'top' | 'bottom';
  
  /** Aspect ratio */
  aspectRatio?: '1:1' | '4:3' | '16:9' | '3:4';
}

/**
 * Complete portfolio entry
 */
export interface PortfolioEntry {
  id: string;
  slug: string;
  title: string;
  category: 'Festival Makeup' | 'UV Makeup' | 'Nail Art' | 'Portrait' | 'Special Effects';
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

/**
 * Portfolio section grouping
 */
export interface PortfolioSection {
  id: string;
  title: string;
  description: string;
  entries: PortfolioEntry[];
  order: number;
  decorativeColors?: string[];
}
```

### Create `/data/types/blog.ts`

```typescript
/**
 * Blog type definitions
 * Mirrors Contentful structure for consistency
 */

export interface BlogImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface BlogAuthor {
  name: string;
  image?: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Plain markdown for mock data
  featuredImage: BlogImage;
  publishedDate: string; // ISO date
  updatedDate?: string;
  category?: string;
  tags?: string[];
  readingTime: number;
  author?: BlogAuthor;
  featured?: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  count?: number;
}
```

### Create `/data/types/page.ts`

```typescript
/**
 * Page content type definitions
 */

export interface HeroImage {
  src: string;
  alt: string;
  caption: string;
  description: string;
  position?: 'left' | 'center' | 'right';
  aspectRatio?: '1:1' | '4:3' | '16:9' | '3:4';
}

export interface HeroContent {
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
  backgroundImages?: HeroImage[];
}

export interface WhyReason {
  id: string;
  icon: 'shine' | 'joy' | 'growth';
  title: string;
  description: string;
  order: number;
}

export interface PageContent {
  id: string;
  title: string;
  metaDescription?: string;
  hero?: HeroContent;
  sections?: Record<string, any>;
}
```

### Create `/data/types/index.ts`

```typescript
/**
 * Barrel export for all types
 */
export * from './portfolio';
export * from './blog';
export * from './page';
```

---

## 📋 Step 3: Create UI Data (30 minutes)

### Create `/data/mock/ui/social-links.ts`

```typescript
/**
 * Social media links configuration
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

### Create `/data/mock/ui/index.ts`

```typescript
export * from './social-links';
```

---

## 📋 Step 4: Create Hero Images Data (45 minutes)

### Create `/data/mock/images/hero-images.ts`

```typescript
import { HeroImage } from '../../types';

// Import Figma assets (these paths stay the same)
import heroImage1 from 'figma:asset/f4a28f747d49fc9d37311b17f513b62e2b95a73e.png';
import heroImage2 from 'figma:asset/378acbf4a7518ca6c40b44540bd7a121a91375fe.png';
import heroImage3 from 'figma:asset/e82a7d901c5a28bf9313c7535228e647eaf06b75.png';

/**
 * Homepage Hero Section Images
 * Mosaic layout with 3 curated images
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
 */
export const aboutHeroImages: HeroImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1729599102515-710a4dd83637?w=1080',
    alt: 'Artistic makeup portrait with creative festival styling',
    caption: 'Festival Portrait',
    description: 'Showcasing artistic evolution and creative expression',
    position: 'left',
    aspectRatio: '4:3'
  },
  // Add 2 more images...
];

/**
 * Portfolio Page Hero Images
 */
export const portfolioHeroImages: HeroImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1747121445324-8ed1aec4b451?w=1080',
    alt: 'Professional makeup artist portfolio work',
    caption: 'Creative Portfolio Work',
    description: 'Professional makeup artist portfolio showcasing creative and artistic styling',
    position: 'center',
    aspectRatio: '16:9'
  },
  // Add 2 more images...
];
```

### Create `/data/mock/images/index.ts`

```typescript
export * from './hero-images';
```

---

## 📋 Step 5: Create Homepage Content (1 hour)

### Create `/data/mock/pages/home.ts`

```typescript
import { PageContent, HeroContent, WhyReason } from '../../types';

/**
 * Homepage Hero Section Content
 */
export const homepageHero: HeroContent = {
  title: "Hi, I'm Ash Shaw",
  subtitle: "Makeup that shines with colour, energy, and connection",
  description: "Makeup is my art, my joy, and my way of bringing people together. From festivals to the dance floor, I use colour and light to create looks that make people feel radiant, confident, and alive. ✨ This portfolio is a growing collection of that journey.",
  ctaText: "Explore My Portfolio",
  ctaLink: "/portfolio"
};

/**
 * Why I Do Makeup - Three Core Reasons
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

/**
 * Complete Homepage Content
 */
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

### Create `/data/mock/pages/index.ts`

```typescript
export * from './home';
// Export other pages as they're created
// export * from './about';
// export * from './portfolio';
```

---

## 📋 Step 6: Update WhySection Component (30 minutes)

### Before: `/components/sections/WhySection.tsx`

```typescript
export function WhySection({ setCurrentPage }) {
  const reasons = [
    {
      icon: ShineIcon,
      title: "Spread Joy",
      description: "When I do makeup for others..."
    },
    // ... hardcoded
  ];
  
  return (
    <ThreeColumnLayout>
      {reasons.map((reason, index) => (
        // render
      ))}
    </ThreeColumnLayout>
  );
}
```

### After: `/components/sections/WhySection.tsx`

```typescript
import React from 'react';
import { ThreeColumnLayout } from './ThreeColumnLayout';
import { ShineIcon, JoyIcon, GrowthIcon } from '../common/ColorfulIcons';
import { whyReasons } from '../../data/mock/pages/home';

// Map icon string IDs to components
const iconMap = {
  shine: ShineIcon,
  joy: JoyIcon,
  growth: GrowthIcon
};

export function WhySection({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const decorativeElements = (
    <>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-5" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full blur-3xl opacity-5" />
    </>
  );

  const headerContent = (
    <div className="text-center">
      <h2
        id="why-section"
        className="text-section-h2 font-heading font-bold text-gradient-pink-purple-blue mb-fluid-lg"
      >
        Why I Do Makeup
      </h2>
    </div>
  );

  const footerContent = (
    <div className="text-center">
      <button
        onClick={() => setCurrentPage('about')}
        className="w-full sm:w-auto justify-center text-center bg-gradient-pink-purple-blue text-white px-button py-button rounded-lg font-body font-medium text-button-fluid shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:ring-opacity-50"
        aria-label="Navigate to About page to read full story"
      >
        Read My Full Story
      </button>
    </div>
  );

  return (
    <ThreeColumnLayout
      id="why-section"
      backgroundGradient={{
        from: 'purple-50',
        via: 'pink-50',
        to: 'orange-50',
      }}
      gap="lg"
      mobileColumns={1}
      tabletColumns={2}
      decorativeElements={decorativeElements}
      header={headerContent}
      footer={footerContent}
    >
      {whyReasons.map((reason) => {
        const IconComponent = iconMap[reason.icon];
        
        return (
          <div
            key={reason.id}
            className="text-center cursor-pointer group bg-white/60 backdrop-blur-sm rounded-xl p-fluid-md shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 h-full"
            onClick={() => setCurrentPage('about')}
          >
            <div className="mb-fluid-lg flex justify-center">
              <IconComponent />
            </div>
            <h3 className="text-xl font-heading font-bold text-gray-800 mb-fluid-sm">
              {reason.title}
            </h3>
            <p className="text-base font-body text-gray-700 leading-relaxed">
              {reason.description}
            </p>
          </div>
        );
      })}
    </ThreeColumnLayout>
  );
}
```

---

## 📋 Step 7: Update HomePage Component (30 minutes)

### Update `/components/pages/home/HomePage.tsx`

```typescript
import React from 'react';
import { HeroLayout } from '../../sections/HeroLayout';
import { WhySection } from '../../sections/WhySection';
import { FeaturedSection } from '../../sections/FeaturedSection';
import { BlogPreviewSection } from '../../sections/BlogPreviewSection';
import { FusionNailsSection } from '../../sections/FusionNailsSection';
import { Footer } from '../../common/Footer';
import { ScrollToTop } from '../../ui/ScrollToTop';

// Import mock data
import { homepageHero } from '../../../data/mock/pages/home';
import { homepageHeroImages } from '../../../data/mock/images/hero-images';

// Import Contentful hook
import { useHomepageContent } from '../../../hooks/useContentful';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

export function HomePage({ setCurrentPage }: HomePageProps) {
  // Fetch dynamic content from Contentful (optional)
  const { 
    data: cmsContent, 
    loading: contentLoading, 
    error: contentError 
  } = useHomepageContent();

  // Merge CMS content with mock data fallbacks
  const heroContent = {
    title: cmsContent?.hero.title || homepageHero.title,
    description: cmsContent?.hero.description || homepageHero.description,
    ctaText: cmsContent?.hero.ctaText || homepageHero.ctaText,
    images: cmsContent?.hero.backgroundImages?.length > 0 
      ? cmsContent.hero.backgroundImages.map(img => ({
          src: img.url,
          alt: img.alt,
          title: img.title
        }))
      : homepageHeroImages
  };

  return (
    <main id="main-content" role="main">
      <HeroLayout
        title={heroContent.title}
        subtitle={
          <>
            Makeup that shines with{' '}
            <em className="italic bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              colour
            </em>
            ,{' '}
            <em className="italic bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
              energy
            </em>
            , and{' '}
            <em className="italic bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              connection
            </em>
            .
          </>
        }
        description={heroContent.description}
        size="xl"
        layout="split"
        backgroundGradient={{
          from: 'pink-50',
          via: 'purple-50',
          to: 'blue-50',
        }}
        titleGradient={{ from: 'pink-500', to: 'purple-600' }}
        scrollArrowTarget="why-section"
        heroImages={heroContent.images}
        lightboxTitle="Ash Shaw Makeup Artistry"
        enableLightbox={true}
        actions={
          <button
            onClick={() => setCurrentPage('portfolio')}
            className="w-full sm:w-auto px-button py-button bg-gradient-pink-purple-blue text-white font-body font-medium rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            aria-label="Navigate to portfolio page"
          >
            {heroContent.ctaText}
          </button>
        }
      />

      <WhySection setCurrentPage={setCurrentPage} />
      <FeaturedSection setCurrentPage={setCurrentPage} />
      <BlogPreviewSection setCurrentPage={setCurrentPage} />
      <FusionNailsSection setCurrentPage={setCurrentPage} />
      <Footer setCurrentPage={setCurrentPage} />
      <ScrollToTop />
    </main>
  );
}
```

---

## 📋 Step 8: Create Main Data Barrel Export (15 minutes)

### Create `/data/mock/index.ts`

```typescript
/**
 * Main Mock Data Barrel Export
 * Central access point for all mock data
 */

// UI Elements
export * from './ui';

// Images
export * from './images';

// Page Content
export * from './pages';

// Portfolio (when created)
// export * from './portfolio';

// Blog (when created)
// export * from './blog';

// Re-export types for convenience
export * from '../types';
```

---

## ✅ Testing Checklist

After each step, verify:

- [ ] TypeScript compiles without errors
- [ ] No import errors
- [ ] Components render correctly
- [ ] Data displays as expected
- [ ] No runtime errors in console

### Test Commands

```bash
# Check TypeScript
npm run type-check

# Run dev server
npm run dev

# Build for production
npm run build
```

---

## 🎯 Next Steps

1. ✅ Complete Steps 1-8 (homepage basics)
2. ⏳ Create portfolio mock data
3. ⏳ Create blog mock data
4. ⏳ Update remaining components
5. ⏳ Clean up Constants.ts
6. ⏳ Full testing

---

## 📚 Quick Reference

### Import Patterns

```typescript
// Import types
import { PortfolioEntry, HeroImage } from '../../data/types';

// Import mock data
import { homepageHero, whyReasons } from '../../data/mock/pages/home';
import { homepageHeroImages } from '../../data/mock/images/hero-images';
import { socialLinks } from '../../data/mock/ui/social-links';

// Import from barrel export
import { homepageHero, whyReasons, socialLinks } from '../../data/mock';
```

### File Naming Convention

- **Types:** `lowercase-kebab.ts` (e.g., `portfolio.ts`)
- **Data:** `lowercase-kebab.ts` (e.g., `hero-images.ts`)
- **Folders:** `lowercase` (e.g., `portfolio/`, `pages/`)

---

**Guide Created:** January 2025  
**Estimated Time:** 4-5 hours for basic implementation  
**Status:** ✅ READY TO USE
