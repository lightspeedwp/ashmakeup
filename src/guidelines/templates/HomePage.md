# HomePage Template Guidelines

Main landing page template with hero, featured work, and blog preview.

**File:** `/components/pages/HomePage.tsx`  
**WordPress Equivalent:** `front-page.html` or `home.html`  
**Route:** `/` (root)

---

## Purpose

The HomePage is the **primary landing page template** that introduces visitors to the portfolio. It combines:
- Hero section with brand messaging
- Featured portfolio work showcase
- "Why I Do Makeup" philosophy section
- Latest blog posts preview
- Call-to-actions throughout
- Footer with contact form

---

## Template Structure

```tsx
export function HomePage({ setCurrentPage }: Props) {
  return (
    <main 
      id="main-content" 
      role="main" 
      className="min-h-screen"
    >
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Work */}
      <FeaturedSection setCurrentPage={setCurrentPage} />
      
      {/* Why I Do Makeup */}
      <WhySection setCurrentPage={setCurrentPage} />
      
      {/* Blog Preview */}
      <BlogPreviewSection setCurrentPage={setCurrentPage} />
      
      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />
      
      {/* Scroll Back to Top */}
      <ScrollBackToTop />
    </main>
  );
}
```

---

## Sections Breakdown

### 1. HeroSection

**Purpose:** First impression and brand introduction  
**Content:**
- Brand tagline with gradient text
- Image mosaic showcasing makeup work
- Floating decorative gradient orbs
- Responsive layout (stacked mobile, side-by-side desktop)

**File:** `/components/sections/HeroSection.tsx`  
**Guideline:** [sections/HeroSection.md](../sections/HeroSection.md)

---

### 2. FeaturedSection

**Purpose:** Showcase latest portfolio work  
**Content:**
- Section title and description
- 3-6 portfolio cards in responsive grid
- Each card with image slider
- "View Full Portfolio" CTA button

**File:** `/components/sections/FeaturedSection.tsx`  
**Guideline:** [sections/FeaturedSection.md](../sections/FeaturedSection.md)

---

### 3. WhySection

**Purpose:** Communicate brand values and philosophy  
**Content:**
- Three-column card layout
- Custom animated icons (ShineIcon, JoyIcon, GrowthIcon)
- Core messaging pillars
- "Read My Story" CTA button

**File:** `/components/sections/WhySection.tsx`  
**Guideline:** [sections/WhySection.md](../sections/WhySection.md)

---

### 4. BlogPreviewSection

**Purpose:** Highlight recent blog posts  
**Content:**
- Latest 3 blog posts
- Featured images and excerpts
- Publication metadata
- "View All Posts" CTA button

**File:** `/components/sections/BlogPreviewSection.tsx`  
**Guideline:** [sections/BlogPreviewSection.md](../sections/BlogPreviewSection.md)

---

### 5. Footer

**Purpose:** Site-wide footer with contact form  
**Content:**
- Contact form with validation
- Quick links navigation
- Social media links
- Copyright information

**File:** `/components/common/Footer.tsx`  
**Guideline:** [parts/Footer.md](../parts/Footer.md)

---

### 6. ScrollBackToTop

**Purpose:** Utility button to scroll to top  
**Content:**
- Floating button (bottom-right)
- Appears after scrolling down
- Smooth scroll animation

**File:** `/components/ui/ScrollBackToTop.tsx`  
**Guideline:** [components/ScrollBackToTop.md](../components/ScrollBackToTop.md)

---

## Page Flow

```
User lands on page
    ↓
Hero Section (Brand introduction)
    ↓
Featured Section (Visual portfolio showcase)
    ↓
Why Section (Philosophy and values)
    ↓
Blog Section (Recent content)
    ↓
Footer (Contact and navigation)
```

---

## Key User Actions

1. **View Portfolio Work**
   - Click featured portfolio cards → Open lightbox
   - Click "View Full Portfolio" → Navigate to PortfolioMainPage

2. **Learn About Artist**
   - Read hero tagline and description
   - Read "Why I Do Makeup" cards
   - Click "Read My Story" → Navigate to AboutPage

3. **Read Blog Posts**
   - Click blog post cards → Navigate to BlogPostPage
   - Click "View All Posts" → Navigate to BlogPage

4. **Get In Touch**
   - Scroll to footer
   - Fill contact form
   - Submit inquiry

---

## Responsive Behavior

### Mobile (< 768px)
- Hero: Stacked layout (text above, images below)
- Featured: Single column grid
- Why: Single column cards
- Blog: Single column cards

### Tablet (768px - 1024px)
- Hero: Still stacked (may adjust spacing)
- Featured: Two column grid
- Why: Three column grid (may wrap)
- Blog: Two column grid

### Desktop (1024px+)
- Hero: Side-by-side layout
- Featured: Three column grid
- Why: Three column grid
- Blog: Three column grid

---

## SEO Considerations

### Meta Tags
```tsx
<Helmet>
  <title>Ash Shaw - Makeup Artist | Festival & Creative Makeup</title>
  <meta name="description" content="Professional makeup artist specializing in festival glitter, UV paint, and creative looks. Based in [location]." />
  <meta property="og:title" content="Ash Shaw Makeup Artistry" />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="/og-image.jpg" />
</Helmet>
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Ash Shaw Makeup Artistry",
  "description": "...",
  "url": "https://ashshaw.makeup",
  "image": "...",
  "priceRange": "$$"
}
```

---

## Accessibility

### Landmarks
```tsx
<main id="main-content" role="main">
  <section aria-labelledby="hero-heading">
  <section aria-labelledby="featured-heading">
  <section aria-labelledby="why-heading">
  <section aria-labelledby="blog-heading">
</main>
<footer role="contentinfo">
```

### Skip Links
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

### Focus Management
- Proper tab order through sections
- Visible focus indicators
- Keyboard navigation support

---

## Performance

### Image Optimization
- Use `loading="lazy"` for below-fold images
- Responsive image sizes
- WebP format with fallbacks

### Code Splitting
```tsx
// Lazy load lightbox
const EnhancedLightbox = lazy(() => import('../ui/EnhancedLightbox'));
```

### Metrics Targets
- Lighthouse Performance: 95+
- Lighthouse Accessibility: 100
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

---

## Best Practices

### 1. Consistent Navigation
```tsx
// ✅ Pass setCurrentPage to all sections
<FeaturedSection setCurrentPage={setCurrentPage} />
<WhySection setCurrentPage={setCurrentPage} />
```

### 2. Section Spacing
```tsx
// ✅ Each section handles its own py-section spacing
<section className="py-section px-fluid-md">
```

### 3. Loading States
```tsx
// ✅ Handle loading states gracefully
{loading && <LoadingSpinner />}
{error && <ErrorMessage />}
{!loading && <Content />}
```

---

## Related Documentation

- **[overview-templates.md](../overview-templates.md)** - Template system
- **[sections/HeroSection.md](../sections/HeroSection.md)** - Hero implementation
- **[sections/FeaturedSection.md](../sections/FeaturedSection.md)** - Featured work
- **[sections/WhySection.md](../sections/WhySection.md)** - Philosophy section
- **[sections/BlogPreviewSection.md](../sections/BlogPreviewSection.md)** - Blog preview

---

**Last Updated:** January 2025  
**Version:** 3.2.0
