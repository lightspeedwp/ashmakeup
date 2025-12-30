# Guidelines Update Plan - Systematic Execution

**Date:** January 2025  
**Status:** 🎯 Ready to Execute  
**Total Files:** 42 files  
**Estimated Time:** 3.5-4.5 hours

---

## 📊 Executive Summary

This plan systematically updates all remaining guidelines files to v4.0.0 with:
- Version alignment
- Mock data integration
- CMS integration references
- Code example updates
- Cross-reference verification

---

## 🎯 Three-Phase Approach

### Phase 1: Component Guidelines (24 files) - 2-3 hours
Priority components with integration → Remaining components

### Phase 2: Design Token Verification (3 files) - 30-40 minutes
Verify against globals.css and document all utilities

### Phase 3: Section/Block/Pattern Updates (15 files) - 45-60 minutes
Version updates and component verification

---

## 📋 Phase 1: Component Guidelines (24 Files)

### Priority 1: Integration-Heavy Components (4 files)

These components have external integrations that need documentation.

---

#### 1.1 ContactForm.md (PRIORITY 1)

**File:** `/guidelines/components/ContactForm.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 20 minutes

**Updates Required:**

✅ **Version Update:**
```markdown
**Version:** 4.0.0  
**Last Updated:** January 2025
```

✅ **Add Supabase Integration Section:**
```markdown
## 🔗 Backend Integration

This component uses Supabase Edge Functions for email delivery via SendGrid.

### Features

- **Dual Email System:** Notification email to Ash + auto-reply to user
- **Bot Protection:** Honeypot field detection
- **Email Validation:** Client-side and server-side validation
- **Demo Mode:** Full functionality without SendGrid API keys
- **Error Handling:** Circuit breaker with timeout protection

### Complete Documentation

- **[Supabase Integration Guide](../supabase-integration.md)** - Complete setup guide
- **Edge Function:** `/supabase/functions/server/index.tsx`
- **Email Service:** `/utils/emailService.ts`

### Usage Pattern

```typescript
import { sendContactFormEmail } from '@/utils/emailService';

const handleSubmit = async (data: ContactFormData) => {
  const result = await sendContactFormEmail(data);
  
  if (result.success) {
    toast.success('Message sent successfully!');
  } else {
    toast.error('Failed to send message. Please try again.');
  }
};
```

### Demo Mode

Works without Supabase configuration:
- Validates form data
- Simulates email sending
- Returns success response
- Logs to console in development

### Environment Variables

```bash
# Required for production email
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
SENDGRID_API_KEY=your_api_key
TO_EMAIL=ashley@ashshaw.makeup
FROM_EMAIL=noreply@ashshaw.makeup
```

See [Supabase Integration Guide](../supabase-integration.md) for complete setup.
```

✅ **Update Code Examples:**
- Replace any hardcoded content
- Use environment variables
- Show error handling
- Include accessibility features

---

#### 1.2 SocialLinks.md (PRIORITY 2)

**File:** `/guidelines/components/SocialLinks.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 15 minutes

**Updates Required:**

✅ **Version Update:**
```markdown
**Version:** 4.0.0  
**Last Updated:** January 2025
```

✅ **Add Mock Data Section:**
```markdown
## 📦 Data Source

Social links are managed in the centralized mock data system.

### Import Pattern

```typescript
// Recommended: Main barrel export
import { socialLinks } from '@/data/mock';

// Or category-specific import
import { socialLinks } from '@/data/mock/ui/social-links';

// Type import
import type { SocialLink } from '@/data/types';
```

### Available Platforms

The project includes 5 social media links:

| Platform | Icon | URL | Priority |
|----------|------|-----|----------|
| **Instagram** | `Instagram` | `https://instagram.com/ashshawmakeup` | Primary |
| **Facebook** | `Facebook` | `https://facebook.com/ashshawmakeup` | Secondary |
| **TikTok** | `Music` | `https://tiktok.com/@ashshawmakeup` | Secondary |
| **LinkedIn** | `Linkedin` | `https://linkedin.com/in/ashshaw` | Tertiary |
| **Email** | `Mail` | `mailto:ashley@ashshaw.makeup` | Contact |

### Data Structure

```typescript
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;      // Lucide icon name
  label: string;     // Accessible label
  primary?: boolean; // Featured link
}
```

### Usage in Components

```typescript
import { socialLinks } from '@/data/mock';

export function Footer() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-gray-600 hover:text-pink-500 transition-colors"
        >
          <Icon name={link.icon} className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}
```

### Updating Social Links

To add or modify social links, edit:
```
/data/mock/ui/social-links.ts
```

See [Mock Data Guide](../mock-data.md) for complete documentation.
```

✅ **Remove Legacy References:**
- Remove any references to `Constants.ts`
- Replace with mock data imports
- Update all code examples

---

#### 1.3 PortfolioCard.md (PRIORITY 3)

**File:** `/guidelines/components/PortfolioCard.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 20 minutes

**Updates Required:**

✅ **Version Update:**
```markdown
**Version:** 4.0.0  
**Last Updated:** January 2025
```

✅ **Add CMS Integration Section:**
```markdown
## 🔗 CMS Integration

This component displays portfolio entries from Contentful CMS with automatic fallback to mock data.

### Data Flow

```
Component Request
    ↓
usePortfolioSections() hook
    ↓
contentfulService.getPortfolioSections()
    ↓
Contentful API (with timeout)
    ↓
Success → CMS Data
Timeout/Error → Mock Data (fallback)
    ↓
Component renders with data
```

### Complete Documentation

- **[Contentful Integration Guide](../contentful-integration.md)** - Complete CMS setup
- **[Mock Data Guide](../mock-data.md)** - Fallback data system

### Usage Pattern

```typescript
import { portfolioEntries } from '@/data/mock/portfolio';
import { usePortfolioSections } from '@/hooks/useContentful';

export function PortfolioSection() {
  // Fetch CMS data with automatic fallback
  const { sectionData, loading, error } = usePortfolioSections();
  
  // Use CMS data if available, otherwise fallback to mock
  const entries = sectionData?.thailand || portfolioEntries.thailand;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {entries.map((entry) => (
        <PortfolioCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
```

### Portfolio Data Sources

**Mock Data (Development/Fallback):**
- 43 complete portfolio entries
- 19 real Figma assets integrated
- 6 categories (Thailand, Festivals, UV Makeup, etc.)
- Located in `/data/mock/portfolio/`

**Contentful CMS (Production):**
- Dynamic content updates
- Rich text descriptions
- Image optimization
- Draft/published workflow

### Data Structure

```typescript
export interface PortfolioEntry {
  id: string;
  title: string;
  description: string;
  category: string;
  images: PortfolioImage[];
  tags: string[];
  featured: boolean;
  date?: string;
  location?: string;
}
```

### Benefits

✅ **Works Offline** - Uses mock data when CMS unavailable  
✅ **Fast Development** - No CMS setup required  
✅ **Production Ready** - Seamless CMS integration  
✅ **Type Safe** - Full TypeScript support  
✅ **Real Assets** - 19 actual Figma images

See [Contentful Integration Guide](../contentful-integration.md) for setup.
```

��� **Update Code Examples:**
- Show CMS fallback pattern
- Use mock data imports
- Include loading states
- Show error handling

---

#### 1.4 BlogCard.md (PRIORITY 4)

**File:** `/guidelines/components/BlogCard.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 20 minutes

**Updates Required:**

✅ **Version Update:**
```markdown
**Version:** 4.0.0  
**Last Updated:** January 2025
```

✅ **Add CMS Integration Section:**
```markdown
## 🔗 CMS Integration

This component displays blog posts from Contentful CMS with automatic fallback to mock data.

### Data Flow

```
Component Request
    ↓
useBlogPosts() hook
    ↓
contentfulService.getBlogPosts()
    ↓
Contentful API (with timeout)
    ↓
Success → CMS Data
Timeout/Error → Mock Data (fallback)
    ↓
Component renders with data
```

### Complete Documentation

- **[Contentful Integration Guide](../contentful-integration.md)** - Complete CMS setup
- **[Mock Data Guide](../mock-data.md)** - Fallback data system

### Usage Pattern

```typescript
import { blogPosts } from '@/data/mock/blog';
import { useBlogPosts } from '@/hooks/useContentful';

export function BlogPage() {
  // Fetch CMS data with automatic fallback
  const { data: cmsPosts, loading, error } = useBlogPosts();
  
  // Use CMS data if available, otherwise fallback to mock
  const posts = cmsPosts || blogPosts;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
```

### Blog Data Sources

**Mock Data (Development/Fallback):**
- 5 complete blog posts (~15,000 words total)
- 6 blog categories with descriptions
- 50+ tags organized by type
- Rich text content with formatting
- Located in `/data/mock/blog/`

**Contentful CMS (Production):**
- Dynamic content updates
- Rich text editor with markdown
- Image optimization
- SEO metadata
- Draft/published workflow
- Scheduled publishing

### Data Structure

```typescript
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: BlogCategory;
  tags: string[];
  author: string;
  publishedAt: string;
  readTime: number;
}
```

### Blog Features

✅ **Search** - Full-text search across posts  
✅ **Filtering** - By category and tags  
✅ **Pagination** - Configurable posts per page  
✅ **Rich Text** - Formatted content with headings, lists, code  
✅ **SEO** - Meta tags and structured data  
✅ **Sharing** - Social media share buttons

See [Contentful Integration Guide](../contentful-integration.md) for setup.
```

✅ **Update Code Examples:**
- Show CMS fallback pattern
- Use mock data imports
- Include search/filter examples
- Show pagination integration

---

### Priority 2: Standard Component Updates (20 files)

These components need version updates and standard enhancements.

#### Update Template for Standard Components

**Standard Updates (All 20 Files):**

1. **Version Update:**
```markdown
**Version:** 4.0.0  
**Last Updated:** January 2025
```

2. **Add Related Documentation Section:**
```markdown
## 🔗 Related Documentation

- **[Guidelines.md](../Guidelines.md)** - Main project guidelines
- **[overview-components.md](../overview-components.md)** - Component architecture
- **[design-tokens/](../design-tokens/)** - Design system tokens
- **[FILE_STRUCTURE.md](../FILE_STRUCTURE.md)** - File organization
```

3. **Verify Code Examples:**
- Use current imports
- Use mock data where applicable
- Use design token classes
- Include accessibility features

4. **Check Component Name:**
- Verify actual file exists
- Update if name changed
- Add note if legacy

---

#### 2.1 Logo.md

**File:** `/guidelines/components/Logo.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Add related documentation
- ✅ Verify responsive behavior examples
- ✅ Check accessibility attributes

**Special Notes:**
- Component is current and accurate
- No integration needed
- Examples are good

---

#### 2.2 Header.md

**File:** `/guidelines/components/Header.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Add SITEMAP.md cross-reference
- ✅ Verify navigation patterns
- ✅ Check mobile menu integration

**Special Notes:**
- Reference new SITEMAP.md
- Show state management pattern
- Document sticky behavior

---

#### 2.3 Footer.md

**File:** `/guidelines/components/Footer.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Reference SocialLinks.md (updated)
- ✅ Reference ContactForm.md (updated)
- ✅ Verify layout examples

**Special Notes:**
- Cross-reference updated component docs
- Show integrated components

---

#### 2.4 ScrollDownArrow.md

**File:** `/guidelines/components/ScrollDownArrow.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Verify animation examples
- ✅ Check accessibility
- ✅ Add related docs

**Special Notes:**
- Component is current
- Good animation examples
- Accessibility compliant

---

#### 2.5 ScrollBackToTop.md → ScrollToTop.tsx

**File:** `/guidelines/components/ScrollBackToTop.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 15 minutes

**IMPORTANT:** Component name mismatch!

**Updates:**
- ✅ Version update
- ⚠️ **Add note about actual filename**
- ✅ Verify scroll behavior
- ✅ Check visibility logic

**Special Note to Add:**
```markdown
## 📁 File Location

**Actual Component:** `/components/ui/ScrollToTop.tsx`  
**Note:** Component is named `ScrollToTop` in codebase (not `ScrollBackToTop`)

This guideline covers the `ScrollToTop` component functionality.
```

---

#### 2.6 LayoutSwitcher.md

**File:** `/guidelines/components/LayoutSwitcher.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Verify grid/list toggle
- ✅ Check state management
- ✅ Verify icons (Lucide)

---

#### 2.7 HeroSection.md → HeroLayout.tsx

**File:** `/guidelines/components/HeroSection.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 15 minutes

**IMPORTANT:** Component name mismatch!

**Updates:**
- ✅ Version update
- ⚠️ **Add note about actual filename**
- ✅ Add mock data import example
- ✅ Verify lightbox integration

**Special Note to Add:**
```markdown
## 📁 File Location

**Primary Component:** `/components/sections/HeroLayout.tsx`  
**Legacy Component:** `/components/sections/HeroSection.tsx` (check if still used)

This guideline primarily covers the `HeroLayout` component which includes:
- Hero image lightbox gallery
- Responsive image handling
- Touch-friendly navigation
- Keyboard accessibility

### Usage with Mock Data

```typescript
import { homepageHeroImages } from '@/data/mock';
import { HeroLayout } from '@/components/sections/HeroLayout';

<HeroLayout
  title="Ash Shaw"
  subtitle="Makeup Artist"
  heroImages={homepageHeroImages}
/>
```
```

---

#### 2.8 SectionCard.md

**File:** `/guidelines/components/SectionCard.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Verify card styling
- ✅ Check design tokens
- ✅ Verify hover effects

---

#### 2.9 Lightbox.md → EnhancedLightbox.tsx

**File:** `/guidelines/components/Lightbox.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 15 minutes

**IMPORTANT:** Component name mismatch!

**Updates:**
- ✅ Version update
- ⚠️ **Add note about actual filename**
- ✅ Verify keyboard navigation
- ✅ Check accessibility
- ✅ Document touch gestures

**Special Note to Add:**
```markdown
## 📁 File Location

**Enhanced Component:** `/components/ui/EnhancedLightbox.tsx`  
**Portfolio Specific:** `/components/ui/PortfolioLightbox.tsx`

This guideline covers the `EnhancedLightbox` component which provides:
- Full-screen image viewing
- Keyboard navigation (arrows, escape)
- Touch gestures (swipe)
- Thumbnail navigation
- Zoom controls
- Accessibility features

### Usage

```typescript
import { EnhancedLightbox } from '@/components/ui/EnhancedLightbox';

<EnhancedLightbox
  images={images}
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  initialIndex={0}
/>
```
```

---

#### 2.10 ReadMoreButton.md

**File:** `/guidelines/components/ReadMoreButton.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Verify expand/collapse logic
- ✅ Check animation
- ✅ Verify accessibility

---

#### 2.11 ShareComponent.md

**File:** `/guidelines/components/ShareComponent.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Verify social platforms
- ✅ Check share URLs
- ✅ Verify icons (Lucide)

---

#### 2.12 SearchBar.md

**File:** `/guidelines/components/SearchBar.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Verify search logic
- ✅ Check debounce
- ✅ Verify accessibility

---

#### 2.13 CategoryFilter.md

**File:** `/guidelines/components/CategoryFilter.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Add mock data reference (categories)
- ✅ Verify filter logic
- ✅ Check active state

**Add:**
```markdown
### Category Data

Categories are managed in mock data:

```typescript
import { blogCategories } from '@/data/mock/blog';

<CategoryFilter
  categories={blogCategories}
  activeCategory={activeCategory}
  onCategoryChange={setActiveCategory}
/>
```

See [mock-data.md](../mock-data.md) for category structure.
```

---

#### 2.14 Pagination.md → BlogPagination.tsx

**File:** `/guidelines/components/Pagination.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 15 minutes

**IMPORTANT:** Component name mismatch!

**Updates:**
- ✅ Version update
- ⚠️ **Add note about actual filename**
- ✅ Verify pagination logic
- ✅ Check accessibility
- ✅ Document keyboard navigation

**Special Note to Add:**
```markdown
## 📁 File Location

**Actual Component:** `/components/ui/BlogPagination.tsx`

This guideline covers the `BlogPagination` component used for blog post pagination.

### Usage

```typescript
import { BlogPagination } from '@/components/ui/BlogPagination';

<BlogPagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
/>
```

### Features

- Previous/Next navigation
- Page number display
- Keyboard navigation (Arrow keys)
- Accessible labels
- Mobile-friendly
```

---

#### 2.15 Breadcrumbs.md

**File:** `/guidelines/components/Breadcrumbs.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Reference SITEMAP.md
- ✅ Verify breadcrumb structure
- ✅ Check accessibility

---

#### 2.16 ImageGallery.md

**File:** `/guidelines/components/ImageGallery.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Verify grid layout
- ✅ Check lightbox integration
- ✅ Verify responsive behavior

---

#### 2.17 SliderCard.md

**File:** `/guidelines/components/SliderCard.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Verify slider logic
- ✅ Check touch gestures
- ✅ Verify accessibility

---

#### 2.18 TestimonialCard.md

**File:** `/guidelines/components/TestimonialCard.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Check if component exists (verify usage)
- ✅ Update examples if needed

**Note:** Verify if testimonials are currently implemented

---

#### 2.19 Modal.md

**File:** `/guidelines/components/Modal.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Verify modal context usage
- ✅ Check focus trap
- ✅ Verify accessibility

---

#### 2.20 LoadingSpinner.md

**File:** `/guidelines/components/LoadingSpinner.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Verify spinner animation
- ✅ Check accessibility labels
- ✅ Verify design tokens

---

#### 2.21 Tag.md

**File:** `/guidelines/components/Tag.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Add mock data reference (blog tags)
- ✅ Verify tag styling
- ✅ Check interactive states

**Add:**
```markdown
### Tag Data

Blog tags are managed in mock data:

```typescript
import { blogPosts } from '@/data/mock/blog';

// Tags from posts
const allTags = blogPosts.flatMap(post => post.tags);
const uniqueTags = [...new Set(allTags)];
```

See [mock-data.md](../mock-data.md) for tag structure.
```

---

#### 2.22 ColorfulIcons.md

**File:** `/guidelines/components/ColorfulIcons.md`  
**Current Version:** 3.2.0  
**Target Version:** 4.0.0  
**Time:** 10 minutes

**Updates:**
- ✅ Version update
- ✅ Verify icon implementation
- ✅ Reference overview-icons.md
- ✅ Check gradient usage

---

### Phase 1 Summary

**Total Files:** 24  
**Priority 1 (Integration):** 4 files - 75 minutes  
**Priority 2 (Standard):** 20 files - 205 minutes  
**Total Time:** 280 minutes (~4.5 hours)

**Adjusted Time:** 2-3 hours with batch processing

---

## 📋 Phase 2: Design Token Verification (3 Files)

### 2.1 colors.md

**File:** `/guidelines/design-tokens/colors.md`  
**Current Version:** Current  
**Target Version:** 4.0.0  
**Time:** 15 minutes

**Tasks:**

1. **Read globals.css** to verify all colors
2. **Document any new colors** added since last update
3. **Verify gradient classes** match implementation
4. **Check semantic tokens** (backgrounds, text, borders)

**Verification Checklist:**
- [ ] All CSS custom properties documented
- [ ] Gradient classes match globals.css
- [ ] Semantic tokens explained
- [ ] Usage examples current
- [ ] Color contrast ratios noted

**Updates:**
```markdown
**Version:** 4.0.0  
**Last Updated:** January 2025

## Verified Against

This document has been verified against `/styles/globals.css` and all color utilities are current as of January 2025.
```

---

### 2.2 typography.md

**File:** `/guidelines/design-tokens/typography.md`  
**Current Version:** Current  
**Target Version:** 4.0.0  
**Time:** 15 minutes

**Tasks:**

1. **Read globals.css** to verify all typography utilities
2. **Check font-face declarations** match public/fonts
3. **Verify fluid typography scale** (clamp values)
4. **Document font-weight utilities**
5. **Check line-height values**

**Verification Checklist:**
- [ ] All font families documented
- [ ] Fluid typography scale complete
- [ ] Font weights listed
- [ ] Line heights documented
- [ ] Letter spacing noted
- [ ] Usage examples current

**Updates:**
```markdown
**Version:** 4.0.0  
**Last Updated:** January 2025

## Verified Against

This document has been verified against:
- `/styles/globals.css` - Typography utilities
- `/public/fonts/` - Variable font files
- Component implementations

All typography utilities are current as of January 2025.
```

---

### 2.3 spacing.md

**File:** `/guidelines/design-tokens/spacing.md`  
**Current Version:** Current  
**Target Version:** 4.0.0  
**Time:** 15 minutes

**Tasks:**

1. **Read globals.css** to verify all spacing utilities
2. **Document all custom spacing classes**:
   - `px-button`, `py-button`
   - `py-section`
   - `p-card-responsive`
   - `p-fluid-xs` through `p-fluid-6xl`
   - `gap-fluid-*`
   - `mb-fluid-*`, `mt-fluid-*`
3. **Verify responsive breakpoints**
4. **Check component-specific spacing**

**Verification Checklist:**
- [ ] All spacing utilities documented
- [ ] Fluid spacing scale complete
- [ ] Component spacing (button, card, section)
- [ ] Gap utilities listed
- [ ] Margin utilities documented
- [ ] Responsive patterns noted

**Updates:**
```markdown
**Version:** 4.0.0  
**Last Updated:** January 2025

## Verified Against

This document has been verified against `/styles/globals.css` and all spacing utilities are current as of January 2025.

## Complete Utility List

### Component-Specific Spacing

- `px-button` - Button horizontal padding
- `py-button` - Button vertical padding  
- `py-section` - Section vertical spacing
- `p-card-responsive` - Responsive card padding

### Fluid Spacing Scale

- `p-fluid-xs` through `p-fluid-6xl` - Padding scale
- `m-fluid-xs` through `m-fluid-6xl` - Margin scale
- `gap-fluid-xs` through `gap-fluid-6xl` - Gap scale

### Directional Utilities

- `px-*`, `py-*` - Horizontal/vertical padding
- `mx-*`, `my-*` - Horizontal/vertical margin
- `mt-*`, `mb-*`, `ml-*`, `mr-*` - Individual margins

All documented with responsive behavior and clamp values.
```

---

### Phase 2 Summary

**Total Files:** 3  
**Total Time:** 45 minutes

---

## 📋 Phase 3: Section/Block/Pattern/Part Updates (15 Files)

### Standard Update Template

All 15 files need:

1. **Version Update:**
```markdown
**Version:** 4.0.0  
**Last Updated:** January 2025
```

2. **Component Name Verification:**
- Check if component file exists
- Note if name changed
- Update examples

3. **WordPress Alignment:**
- Verify block theme alignment
- Check pattern structure
- Document template hierarchy

4. **Related Documentation:**
```markdown
## 🔗 Related Documentation

- **[Guidelines.md](../Guidelines.md)** - Main guidelines
- **[overview-sections.md](../overview-sections.md)** - Section patterns
- **[FILE_STRUCTURE.md](../FILE_STRUCTURE.md)** - File organization
```

---

### 3.1 Sections (6 files) - 30 minutes

#### HeroSection.md
**Time:** 5 minutes  
**Updates:** Version, verify HeroLayout.tsx, add mock data example

#### FeaturedSection.md
**Time:** 5 minutes  
**Updates:** Version, verify component, add mock data example

#### WhySection.md
**Time:** 5 minutes  
**Updates:** Version, verify component, check content structure

#### BlogPreviewSection.md
**Time:** 5 minutes  
**Updates:** Version, verify component, add mock data example

#### ThreeColumnLayout.md
**Time:** 5 minutes  
**Updates:** Version, verify component, check responsive behavior

#### ThreeColumnPortfolioSection.md
**Time:** 5 minutes  
**Updates:** Version, verify component, add portfolio data example

---

### 3.2 Blocks (4 files) - 20 minutes

**Note:** Some blocks overlap with components

#### blocks/BlogCard.md
**Time:** 5 minutes  
**Updates:** Same as component version (already planned)

#### blocks/Lightbox.md
**Time:** 5 minutes  
**Updates:** Same as component version (already planned)

#### blocks/Pagination.md
**Time:** 5 minutes  
**Updates:** Same as component version (already planned)

#### blocks/PortfolioCard.md
**Time:** 5 minutes  
**Updates:** Same as component version (already planned)

---

### 3.3 Parts (3 files) - 15 minutes

#### Header.md
**Time:** 5 minutes  
**Updates:** Version, verify component, reference SITEMAP.md

#### Footer.md
**Time:** 5 minutes  
**Updates:** Version, verify component, reference integration guides

#### MobileMenu.md
**Time:** 5 minutes  
**Updates:** Version, verify component, check navigation pattern

---

### 3.4 Patterns (1 file) - 5 minutes

#### CardGridWithFilters.md
**Time:** 5 minutes  
**Updates:** Version, verify pattern usage, check examples

---

### 3.5 Templates (1 file) - 5 minutes

#### HomePage.md
**Time:** 5 minutes  
**Updates:** Version, verify template structure, add data integration

---

### Phase 3 Summary

**Total Files:** 15  
**Sections:** 6 files - 30 minutes  
**Blocks:** 4 files - 20 minutes (some overlap with components)  
**Parts:** 3 files - 15 minutes  
**Patterns:** 1 file - 5 minutes  
**Templates:** 1 file - 5 minutes  
**Total Time:** 75 minutes (~1.25 hours)

---

## 📊 Complete Execution Plan

### Time Breakdown

| Phase | Files | Estimated Time | Adjusted Time |
|-------|-------|---------------|---------------|
| **Phase 1: Components** | 24 | 280 min (4.5 hrs) | 2-3 hours |
| **Phase 2: Design Tokens** | 3 | 45 min | 30-40 min |
| **Phase 3: Sections/etc** | 15 | 75 min (1.25 hrs) | 45-60 min |
| **TOTAL** | 42 | 400 min (6.5 hrs) | 3.5-4.5 hrs |

**Note:** Adjusted time accounts for batch processing and templates

---

## ✅ Quality Checkpoints

### After Each File

- [ ] Version number is 4.0.0
- [ ] Last Updated shows January 2025
- [ ] Code examples are current
- [ ] Component names match files
- [ ] Integration guides referenced
- [ ] Mock data imports used
- [ ] Cross-references correct

### After Each Phase

- [ ] All files in phase updated
- [ ] Examples tested (if possible)
- [ ] Links verified
- [ ] Consistent formatting

### Final Verification

- [ ] All 42 files updated
- [ ] No broken links
- [ ] Version consistency
- [ ] Examples accurate
- [ ] Documentation complete

---

## 🚀 Execution Strategy

### Batch Processing

**Group files by similarity:**

1. **Integration Components** (4 files) - Custom updates
2. **Standard Components** (20 files) - Template updates
3. **Design Tokens** (3 files) - Verification updates
4. **Sections/Blocks/etc** (15 files) - Quick updates

### Parallel Processing

Where possible, update similar files in parallel:
- Multiple standard components
- Section files
- Block files

### Templates

Use pre-built templates for:
- Standard version updates
- Related documentation sections
- Code example patterns

---

## 📝 Update Templates

### Template 1: Standard Version Update

```markdown
**Version:** 4.0.0  
**Last Updated:** January 2025
```

### Template 2: Related Documentation

```markdown
## 🔗 Related Documentation

- **[Guidelines.md](../Guidelines.md)** - Main project guidelines
- **[overview-components.md](../overview-components.md)** - Component architecture
- **[FILE_STRUCTURE.md](../FILE_STRUCTURE.md)** - File organization
- **[SITEMAP.md](../SITEMAP.md)** - Site structure and navigation
```

### Template 3: Mock Data Integration

```markdown
## 📦 Data Source

This component uses data from the centralized mock data system.

### Import Pattern

```typescript
import { [dataName] } from '@/data/mock';
import type { [TypeName] } from '@/data/types';
```

See [mock-data.md](../mock-data.md) for complete data documentation.
```

### Template 4: CMS Integration

```markdown
## 🔗 CMS Integration

This component integrates with Contentful CMS with automatic fallback to mock data.

### Usage Pattern

```typescript
import { [mockData] } from '@/data/mock';
import { [useContentfulHook] } from '@/hooks/useContentful';

const { data: cmsData, loading, error } = [useContentfulHook]();
const data = cmsData || [mockData];
```

### Complete Documentation

- **[Contentful Integration Guide](../contentful-integration.md)**
- **[Mock Data Guide](../mock-data.md)**

See integration guides for setup and configuration.
```

### Template 5: Component Name Mismatch

```markdown
## 📁 File Location

**Actual Component:** `/components/[category]/[ActualName].tsx`  
**Note:** Component is named `[ActualName]` in codebase

This guideline covers the `[ActualName]` component.
```

---

## 🎯 Success Criteria

### Documentation Quality

- [x] All files version 4.0.0
- [x] Current dates (January 2025)
- [x] Accurate code examples
- [x] Working cross-references
- [x] Consistent formatting

### Technical Accuracy

- [x] Component names match codebase
- [x] Imports are current
- [x] Integration guides referenced
- [x] Mock data patterns shown
- [x] Design tokens used correctly

### Completeness

- [x] All 42 files updated
- [x] No files missed
- [x] All links work
- [x] Examples complete
- [x] Best practices documented

---

## 📦 Deliverables

### Phase 1 Deliverables
- ✅ 4 priority component files with integration docs
- ✅ 20 standard component files updated
- ✅ All component guidelines at v4.0.0

### Phase 2 Deliverables
- ✅ 3 design token files verified against globals.css
- ✅ All utilities documented
- ✅ Design tokens at v4.0.0

### Phase 3 Deliverables
- ✅ 15 section/block/pattern/part files updated
- ✅ WordPress alignment verified
- ✅ All structural guidelines at v4.0.0

### Final Deliverables
- ✅ 42 files updated to v4.0.0
- ✅ Complete cross-reference network
- ✅ Professional documentation quality
- ✅ Ready for production use

---

## 🔄 Rollback Plan

If issues arise:

1. **Git Revert:** All changes in version control
2. **Backup:** Keep previous versions
3. **Verification:** Test links before committing
4. **Incremental:** Commit after each phase

---

## 📞 Support Resources

**During Execution:**
- Refer to existing integration guides
- Check FILE_STRUCTURE.md for file locations
- Verify against actual codebase files
- Use templates for consistency

**After Completion:**
- Run link checker
- Review random samples
- Test code examples
- Verify cross-references

---

**Ready to Execute?** This plan provides systematic, batch-processed updates for all 42 remaining guidelines files with quality checkpoints and templates for efficiency.

**Total Time:** 3.5-4.5 hours  
**Total Files:** 42  
**Target Version:** 4.0.0  
**Status:** 🎯 Ready to Execute
