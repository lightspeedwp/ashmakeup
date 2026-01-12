# Contentful Content Models - Complete Structure Guide

**Version:** 1.0.0  
**Last Updated:** January 2025  
**Purpose:** Comprehensive field definitions for all Contentful content types

---

## 📚 Table of Contents

1. [Overview](#overview)
2. [Content Model Summary](#content-model-summary)
3. [Page Content Types](#page-content-types)
4. [Portfolio Content Types](#portfolio-content-types)
5. [Blog Content Types](#blog-content-types)
6. [Testimonial Content Types](#testimonial-content-types)
7. [UI Element Content Types](#ui-element-content-types)
8. [Field Validation Rules](#field-validation-rules)
9. [Content Relationships](#content-relationships)
10. [Import/Export Instructions](#importexport-instructions)

---

## 🎯 Overview

### What This Document Covers

This guide provides **exact field specifications** for creating Contentful content models that align with the Ash Shaw Portfolio application. Every field includes:

✅ **Field Name** - Internal identifier  
✅ **Display Name** - User-friendly label  
✅ **Field Type** - Contentful field type  
✅ **Validation** - Required/optional, limits, patterns  
✅ **Help Text** - Editor guidance  
✅ **Default Value** - Pre-populated values (if applicable)

### Critical Requirements

🚨 **Field names MUST match exactly** - TypeScript interfaces depend on these  
🚨 **All content types MUST align with `/data/types/`** - Ensures mock data compatibility  
🚨 **Validation rules prevent invalid content** - Maintain data quality

---

## 📊 Content Model Summary

| Content Type ID | Purpose | Priority | Mock Data Reference |
|----------------|---------|----------|-------------------|
| **homepage** | Homepage hero section | High | `/data/mock/pages/home.ts` |
| **aboutPage** | About page content | High | `/data/mock/pages/about.ts` |
| **portfolioPage** | Portfolio page header | Medium | `/data/mock/pages/portfolio.ts` |
| **portfolioEntry** | Individual portfolio items | High | `/data/mock/portfolio/*.ts` |
| **blogPost** | Blog articles | High | `/data/mock/blog/posts.ts` |
| **blogCategory** | Blog categories | Medium | `/data/mock/blog/categories.ts` |
| **testimonial** | Client testimonials | Medium | `/data/mock/testimonials/index.ts` |
| **whyReason** | Why choose reasons | Low | `/data/mock/pages/home.ts` |
| **socialLink** | Social media links | Low | `/data/mock/ui/social.ts` |

---

## 📄 Page Content Types

### 1. Homepage (`homepage`)

**Content Type ID:** `homepage`  
**Display Name:** Homepage  
**Description:** Homepage hero section and featured content

#### Fields:

| Field Name | Display Name | Type | Required | Validation | Help Text |
|-----------|--------------|------|----------|------------|-----------|
| `title` | Hero Title | Short Text | ✅ Yes | Max 100 chars | Main homepage title (e.g., "Ash Shaw") |
| `subtitle` | Hero Subtitle | Short Text | ✅ Yes | Max 150 chars | Professional tagline (e.g., "Makeup Artist & Creative Spirit") |
| `description` | Hero Description | Long Text | ✅ Yes | Max 500 chars | Brief introduction paragraph |
| `heroImages` | Hero Images | Media (Multiple) | ✅ Yes | Min 1, Max 5 images | Background slideshow images (recommended: 3 images) |
| `ctaButtonText` | CTA Button Text | Short Text | ❌ No | Max 30 chars | Call-to-action button label (default: "View My Work") |
| `ctaButtonLink` | CTA Button Link | Short Text | ❌ No | URL or anchor | Button destination (e.g., "#portfolio" or "/portfolio") |
| `whyReasons` | Why Choose Reasons | Reference (Multiple) | ❌ No | Links to `whyReason` | Reasons to choose (displayed in Why Section) |
| `featuredWork` | Featured Portfolio | Reference (Multiple) | ❌ No | Links to `portfolioEntry` | Featured portfolio items for homepage |

**Example Entry:**

```json
{
  "title": "Ash Shaw",
  "subtitle": "Makeup Artist & Creative Spirit",
  "description": "Bringing colour, energy, and connection to festivals, photoshoots, and special events across Australia.",
  "heroImages": [
    { "asset": "hero-image-1.jpg" },
    { "asset": "hero-image-2.jpg" },
    { "asset": "hero-image-3.jpg" }
  ],
  "ctaButtonText": "View My Work",
  "ctaButtonLink": "#portfolio"
}
```

---

### 2. About Page (`aboutPage`)

**Content Type ID:** `aboutPage`  
**Display Name:** About Page  
**Description:** About page content and journey sections

#### Fields:

| Field Name | Display Name | Type | Required | Validation | Help Text |
|-----------|--------------|------|----------|------------|-----------|
| `heroTitle` | Hero Title | Short Text | ✅ Yes | Max 100 chars | About page main title (e.g., "About Ash") |
| `heroSubtitle` | Hero Subtitle | Short Text | ✅ Yes | Max 150 chars | About page tagline |
| `heroDescription` | Hero Description | Long Text | ✅ Yes | Max 500 chars | Opening paragraph |
| `heroImages` | Hero Images | Media (Multiple) | ✅ Yes | Min 1, Max 5 images | About page hero images |
| `journeyTitle` | Journey Section Title | Short Text | ❌ No | Max 100 chars | Title for journey section (default: "My Journey") |
| `journeyContent` | Journey Content | Rich Text | ✅ Yes | - | Story of becoming a makeup artist |
| `philosophyTitle` | Philosophy Section Title | Short Text | ❌ No | Max 100 chars | Title for philosophy section (default: "My Philosophy") |
| `philosophyContent` | Philosophy Content | Rich Text | ✅ Yes | - | Approach and values |
| `skillsTitle` | Skills Section Title | Short Text | ❌ No | Max 100 chars | Title for skills section (default: "What I Do") |
| `skills` | Skills List | JSON Object | ❌ No | Array of objects | Skills and specialties |

**Skills JSON Structure:**

```json
{
  "skills": [
    {
      "id": "festival-makeup",
      "title": "Festival Makeup",
      "description": "Bold, colorful looks that last all day",
      "icon": "✨"
    },
    {
      "id": "bridal-makeup",
      "title": "Bridal Makeup",
      "description": "Elegant, timeless beauty",
      "icon": "💐"
    }
  ]
}
```

---

### 3. Portfolio Page (`portfolioPage`)

**Content Type ID:** `portfolioPage`  
**Display Name:** Portfolio Page  
**Description:** Portfolio page header and category information

#### Fields:

| Field Name | Display Name | Type | Required | Validation | Help Text |
|-----------|--------------|------|----------|------------|-----------|
| `title` | Page Title | Short Text | ✅ Yes | Max 100 chars | Portfolio page heading (e.g., "Portfolio") |
| `subtitle` | Page Subtitle | Short Text | ❌ No | Max 150 chars | Portfolio description |
| `description` | Page Description | Long Text | ❌ No | Max 500 chars | Overview of portfolio work |
| `heroImages` | Hero Images | Media (Multiple) | ❌ No | Max 5 images | Portfolio page hero images |
| `categories` | Categories | JSON Object | ❌ No | Array of category objects | Available portfolio categories |

**Categories JSON Structure:**

```json
{
  "categories": [
    {
      "id": "festival-makeup",
      "name": "Festival Makeup",
      "slug": "festival-makeup",
      "description": "Vibrant festival looks",
      "icon": "🎪"
    },
    {
      "id": "uv-makeup",
      "name": "UV Makeup",
      "slug": "uv-makeup",
      "description": "Glow-in-the-dark artistry",
      "icon": "💎"
    }
  ]
}
```

---

## 🖼️ Portfolio Content Types

### 4. Portfolio Entry (`portfolioEntry`)

**Content Type ID:** `portfolioEntry`  
**Display Name:** Portfolio Entry  
**Description:** Individual portfolio work item with images and details

#### Fields:

| Field Name | Display Name | Type | Required | Validation | Help Text |
|-----------|--------------|------|----------|------------|-----------|
| `id` | Entry ID | Short Text | ✅ Yes | Max 100 chars, Unique, Slug format | Unique identifier (e.g., "lost-paradise-thailand") |
| `slug` | URL Slug | Short Text | ✅ Yes | Max 150 chars, Unique, URL-safe | URL-friendly slug (e.g., "lost-paradise-thailand-2024") |
| `title` | Entry Title | Short Text | ✅ Yes | Max 200 chars | Display title (e.g., "Lost Paradise - Thailand") |
| `category` | Category | Short Text (Dropdown) | ✅ Yes | Predefined values | Main category classification |
| `subcategory` | Subcategory | Short Text | ❌ No | Max 100 chars | Optional secondary category |
| `images` | Images | Media (Multiple) | ✅ Yes | Min 1, Max 20 images | Portfolio images for this entry |
| `location` | Location | Short Text | ❌ No | Max 100 chars | Where work was created (e.g., "Byron Bay, NSW") |
| `event` | Event Name | Short Text | ❌ No | Max 150 chars | Event or occasion (e.g., "Lost Paradise Festival") |
| `date` | Date | Date | ❌ No | ISO 8601 format | When work was completed |
| `description` | Description | Long Text | ✅ Yes | Max 2000 chars | Detailed description of the work |
| `excerpt` | Excerpt | Long Text | ❌ No | Max 300 chars | Short preview (auto-generated from description if empty) |
| `tags` | Tags | Short Text (List) | ❌ No | Max 20 tags | Searchable tags (e.g., ["Festival", "Glitter", "Thailand"]) |
| `featured` | Featured | Boolean | ❌ No | Default: false | Display on homepage featured section |
| `order` | Display Order | Integer | ❌ No | Min 0, Max 999 | Sort order (lower = higher priority, default: 999) |

**Category Dropdown Values:**
- Festival Makeup
- UV Makeup
- Nail Art
- Portrait
- Special Effects
- Body Art

**Example Entry:**

```json
{
  "id": "lost-paradise-thailand",
  "slug": "lost-paradise-thailand-festival-2024",
  "title": "Lost Paradise - Thailand",
  "category": "Festival Makeup",
  "subcategory": "International Festival",
  "images": [
    { "asset": "lost-paradise-1.jpg" },
    { "asset": "lost-paradise-2.jpg" },
    { "asset": "lost-paradise-3.jpg" }
  ],
  "location": "Koh Phangan, Thailand",
  "event": "Lost Paradise Festival",
  "date": "2024-12-30",
  "description": "Created vibrant festival makeup looks for Lost Paradise in Thailand...",
  "excerpt": "Vibrant festival makeup featuring bold colors and tropical themes",
  "tags": ["Festival", "Thailand", "Glitter", "Tropical", "Bold Colors"],
  "featured": true,
  "order": 1
}
```

---

## 📝 Blog Content Types

### 5. Blog Post (`blogPost`)

**Content Type ID:** `blogPost`  
**Display Name:** Blog Post  
**Description:** Individual blog article with rich content

#### Fields:

| Field Name | Display Name | Type | Required | Validation | Help Text |
|-----------|--------------|------|----------|------------|-----------|
| `id` | Post ID | Short Text | ✅ Yes | Max 100 chars, Unique, Slug format | Unique identifier (e.g., "festival-makeup-guide") |
| `slug` | URL Slug | Short Text | ✅ Yes | Max 150 chars, Unique, URL-safe | URL-friendly slug (e.g., "festival-makeup-survival-guide") |
| `title` | Post Title | Short Text | ✅ Yes | Max 200 chars | Blog post headline |
| `excerpt` | Excerpt | Long Text | ✅ Yes | Max 500 chars | Short summary for previews |
| `content` | Post Content | Rich Text | ✅ Yes | - | Full blog post content (supports headings, lists, images, links) |
| `featuredImage` | Featured Image | Media (Single) | ✅ Yes | One image | Main post image for previews and header |
| `publishedAt` | Published Date | Date & Time | ✅ Yes | ISO 8601 format | When post was published |
| `updatedAt` | Last Updated | Date & Time | ❌ No | ISO 8601 format | Last modification date (auto-updated) |
| `category` | Category | Reference (Single) | ✅ Yes | Links to `blogCategory` | Primary category |
| `tags` | Tags | Short Text (List) | ❌ No | Max 30 tags | Searchable tags (e.g., ["Tutorial", "Festival", "Beginners"]) |
| `author` | Author | JSON Object | ❌ No | Author object structure | Post author details |
| `readTime` | Reading Time | Integer | ❌ No | Min 1, Max 60 minutes | Estimated reading time (auto-calculated if empty) |
| `featured` | Featured Post | Boolean | ❌ No | Default: false | Display prominently on blog page |

**Author JSON Structure:**

```json
{
  "author": {
    "name": "Ash Shaw",
    "avatar": "https://example.com/ash-avatar.jpg",
    "bio": "Professional makeup artist specializing in festival and creative makeup"
  }
}
```

**Example Entry:**

```json
{
  "id": "festival-makeup-survival-guide",
  "slug": "festival-makeup-survival-guide",
  "title": "Festival Makeup Survival Guide: Your Complete Checklist",
  "excerpt": "From heat-proof primers to biodegradable glitter, discover the essential products and techniques for festival makeup that lasts.",
  "content": "<Rich Text Content>",
  "featuredImage": { "asset": "festival-makeup-guide.jpg" },
  "publishedAt": "2024-06-15T00:00:00.000Z",
  "category": { "link": "makeup-tips" },
  "tags": ["Festival Makeup", "Tutorial", "Product Recommendations", "Beginner Friendly"],
  "author": {
    "name": "Ash Shaw",
    "avatar": "/images/ash-avatar.jpg",
    "bio": "Festival makeup specialist"
  },
  "readTime": 8,
  "featured": true
}
```

---

### 6. Blog Category (`blogCategory`)

**Content Type ID:** `blogCategory`  
**Display Name:** Blog Category  
**Description:** Category classification for blog posts

#### Fields:

| Field Name | Display Name | Type | Required | Validation | Help Text |
|-----------|--------------|------|----------|------------|-----------|
| `id` | Category ID | Short Text | ✅ Yes | Max 50 chars, Unique, Slug format | Unique identifier (e.g., "makeup-tips") |
| `name` | Category Name | Short Text | ✅ Yes | Max 100 chars | Display name (e.g., "Makeup Tips") |
| `slug` | URL Slug | Short Text | ✅ Yes | Max 100 chars, Unique, URL-safe | URL-friendly slug (e.g., "makeup-tips") |
| `description` | Description | Long Text | ❌ No | Max 300 chars | Category description for SEO and display |
| `color` | Color Code | Short Text | ❌ No | Hex color format | Accent color for category badge (e.g., "#EC4899") |
| `icon` | Icon | Short Text | ❌ No | Emoji or icon code | Category icon (emoji or Lucide icon name) |

**Example Entry:**

```json
{
  "id": "makeup-tips",
  "name": "Makeup Tips",
  "slug": "makeup-tips",
  "description": "Expert advice and tutorials for all skill levels",
  "color": "#EC4899",
  "icon": "✨"
}
```

**Recommended Categories:**

| ID | Name | Color | Icon |
|----|------|-------|------|
| `makeup-tips` | Makeup Tips | #EC4899 (Pink) | ✨ |
| `festival-guides` | Festival Guides | #8B5CF6 (Purple) | 🎪 |
| `product-reviews` | Product Reviews | #3B82F6 (Blue) | 🛍️ |
| `behind-the-scenes` | Behind the Scenes | #14B8A6 (Teal) | 🎬 |
| `inspiration` | Inspiration | #F59E0B (Amber) | 💡 |
| `tutorials` | Tutorials | #10B981 (Green) | 📚 |

---

## 💬 Testimonial Content Types

### 7. Testimonial (`testimonial`)

**Content Type ID:** `testimonial`  
**Display Name:** Testimonial  
**Description:** Client testimonials and reviews for social proof

#### Fields:

| Field Name | Display Name | Type | Required | Validation | Help Text |
|-----------|--------------|------|----------|------------|-----------|
| `id` | Testimonial ID | Short Text | ✅ Yes | Max 50 chars, Unique | Unique identifier (e.g., "test-001") |
| `name` | Client Name | Short Text | ✅ Yes | Max 100 chars | Client's full name |
| `role` | Client Role | Short Text | ❌ No | Max 100 chars | Role or relationship (e.g., "Bride", "Event Organizer") |
| `event` | Event Name | Short Text | ❌ No | Max 150 chars | Event or occasion (e.g., "Wedding - Byron Bay") |
| `rating` | Rating | Integer (Dropdown) | ✅ Yes | Values: 1-5 | Star rating (1-5 stars) |
| `text` | Testimonial Text | Long Text | ✅ Yes | Max 1000 chars | Full testimonial content |
| `image` | Client Photo | Media (Single) | ❌ No | One image | Optional client photo or event photo |
| `date` | Date | Date | ✅ Yes | ISO 8601 format | When testimonial was given |
| `featured` | Featured | Boolean | ❌ No | Default: false | Display on homepage |
| `videoUrl` | Video Testimonial URL | Short Text | ❌ No | Valid URL | Optional video testimonial link |
| `videoPoster` | Video Thumbnail | Media (Single) | ❌ No | One image | Thumbnail for video testimonial |

**Example Entry:**

```json
{
  "id": "test-001",
  "name": "Sarah Mitchell",
  "role": "Bride",
  "event": "Wedding - Byron Bay",
  "rating": 5,
  "text": "Ash completely transformed my vision into reality! Her attention to detail and ability to enhance natural beauty while creating that festival-inspired glow was absolutely perfect.",
  "image": { "asset": "sarah-mitchell.jpg" },
  "date": "2025-12-15",
  "featured": true,
  "videoUrl": "https://www.youtube.com/watch?v=example",
  "videoPoster": { "asset": "video-thumb.jpg" }
}
```

---

## 🎨 UI Element Content Types

### 8. Why Reason (`whyReason`)

**Content Type ID:** `whyReason`  
**Display Name:** Why Choose Reason  
**Description:** Individual reason for Why Section

#### Fields:

| Field Name | Display Name | Type | Required | Validation | Help Text |
|-----------|--------------|------|----------|------------|-----------|
| `id` | Reason ID | Short Text | ✅ Yes | Max 50 chars, Unique, Slug format | Unique identifier (e.g., "professional-quality") |
| `title` | Reason Title | Short Text | ✅ Yes | Max 100 chars | Heading for this reason |
| `icon` | Icon | Short Text | ✅ Yes | Emoji or icon code | Visual icon (emoji or Lucide icon name) |
| `description` | Description | Long Text | ✅ Yes | Max 500 chars | Detailed explanation |
| `order` | Display Order | Integer | ❌ No | Min 0, Max 99 | Sort order (default: 99) |

**Example Entry:**

```json
{
  "id": "professional-quality",
  "title": "Professional Quality",
  "icon": "✨",
  "description": "Years of experience creating stunning looks for festivals, weddings, and special events.",
  "order": 1
}
```

---

### 9. Social Link (`socialLink`)

**Content Type ID:** `socialLink`  
**Display Name:** Social Media Link  
**Description:** Social media profiles and contact links

#### Fields:

| Field Name | Display Name | Type | Required | Validation | Help Text |
|-----------|--------------|------|----------|------------|-----------|
| `id` | Link ID | Short Text | ✅ Yes | Max 50 chars, Unique, Slug format | Unique identifier (e.g., "instagram") |
| `platform` | Platform Name | Short Text | ✅ Yes | Max 50 chars | Social platform name (e.g., "Instagram") |
| `url` | Profile URL | Short Text | ✅ Yes | Valid URL | Full profile URL |
| `icon` | Icon Name | Short Text | ✅ Yes | Lucide icon name | Icon name from Lucide React (e.g., "Instagram") |
| `label` | Accessible Label | Short Text | ✅ Yes | Max 100 chars | ARIA label for accessibility (e.g., "Visit Ash on Instagram") |
| `order` | Display Order | Integer | ❌ No | Min 0, Max 99 | Sort order (default: 99) |
| `enabled` | Enabled | Boolean | ❌ No | Default: true | Show/hide this link |

**Example Entry:**

```json
{
  "id": "instagram",
  "platform": "Instagram",
  "url": "https://instagram.com/ashshaw.makeup",
  "icon": "Instagram",
  "label": "Visit Ash on Instagram",
  "order": 1,
  "enabled": true
}
```

---

## ✅ Field Validation Rules

### Text Field Limits

| Field Type | Minimum | Maximum | Notes |
|-----------|---------|---------|-------|
| Short Text (ID) | 1 char | 50 chars | Slug format, no spaces |
| Short Text (Title) | 1 char | 200 chars | User-friendly text |
| Short Text (URL) | 5 chars | 500 chars | Valid URL format |
| Long Text (Excerpt) | 50 chars | 500 chars | Summary text |
| Long Text (Description) | 100 chars | 2000 chars | Detailed content |
| Rich Text | No limit | No limit | Formatted content |

### Number Field Limits

| Field Name | Minimum | Maximum | Default |
|-----------|---------|---------|---------|
| `rating` | 1 | 5 | - |
| `readTime` | 1 minute | 60 minutes | Auto-calculated |
| `order` | 0 | 999 | 999 |

### Date/Time Fields

All date fields should use **ISO 8601 format**: `YYYY-MM-DDTHH:mm:ss.sssZ`

Example: `2024-06-15T00:00:00.000Z`

### Media Fields

| Field Name | Min | Max | Accepted Formats |
|-----------|-----|-----|------------------|
| `heroImages` | 1 | 5 | JPG, PNG, WebP |
| `images` (Portfolio) | 1 | 20 | JPG, PNG, WebP |
| `featuredImage` | 1 | 1 | JPG, PNG, WebP |
| `image` | 0 | 1 | JPG, PNG, WebP |

**Recommended Image Sizes:**
- Hero Images: 1920x1080px (landscape)
- Portfolio Images: 1200x1600px (portrait) or 1600x1200px (landscape)
- Featured Images: 1200x630px (social sharing optimized)
- Avatars: 400x400px (square)

---

## 🔗 Content Relationships

### Reference Field Connections

```
homepage
├── whyReasons (Multiple) → whyReason
└── featuredWork (Multiple) → portfolioEntry

blogPost
└── category (Single) → blogCategory

portfolioEntry
└── No direct references (uses tags for filtering)
```

### Recommended Content Organization

**1. Create Foundation Content First:**
1. Blog Categories (6 categories)
2. Why Reasons (3-5 reasons)
3. Social Links (5 links)

**2. Create Core Content:**
1. Homepage (1 entry)
2. About Page (1 entry)
3. Portfolio Page (1 entry)

**3. Create Content Items:**
1. Portfolio Entries (20-50 entries)
2. Blog Posts (5-20 posts)
3. Testimonials (5-10 testimonials)

---

## 📥 Import/Export Instructions

### Exporting Content Models

1. **Using Contentful CLI:**
   ```bash
   # Install Contentful CLI
   npm install -g contentful-cli
   
   # Login to Contentful
   contentful login
   
   # Export content model
   contentful space export \
     --space-id YOUR_SPACE_ID \
     --export-dir ./contentful-export \
     --content-model-only
   ```

2. **Manual Export:**
   - Navigate to Contentful web app
   - Go to **Settings → Content model**
   - Click **Export** button
   - Download JSON file

### Importing Content Models

1. **Using Contentful CLI:**
   ```bash
   # Import content model
   contentful space import \
     --space-id YOUR_SPACE_ID \
     --content-file ./contentful-export/contentful-export.json
   ```

2. **Manual Import:**
   - Create each content type manually following this guide
   - Use the field specifications exactly as documented
   - Set validation rules for each field

### JSON Template for Import

**Complete content model export template:**

```json
{
  "contentTypes": [
    {
      "sys": {
        "id": "homepage",
        "type": "ContentType"
      },
      "name": "Homepage",
      "displayField": "title",
      "fields": [
        {
          "id": "title",
          "name": "Hero Title",
          "type": "Symbol",
          "required": true,
          "validations": [
            { "size": { "max": 100 } }
          ]
        },
        {
          "id": "subtitle",
          "name": "Hero Subtitle",
          "type": "Symbol",
          "required": true,
          "validations": [
            { "size": { "max": 150 } }
          ]
        },
        {
          "id": "description",
          "name": "Hero Description",
          "type": "Text",
          "required": true,
          "validations": [
            { "size": { "max": 500 } }
          ]
        },
        {
          "id": "heroImages",
          "name": "Hero Images",
          "type": "Array",
          "required": true,
          "items": {
            "type": "Link",
            "linkType": "Asset",
            "validations": [
              {
                "linkMimetypeGroup": ["image"]
              }
            ]
          },
          "validations": [
            { "size": { "min": 1, "max": 5 } }
          ]
        }
      ]
    }
  ]
}
```

---

## 🎯 Quick Start Checklist

Use this checklist when setting up Contentful for the first time:

### Phase 1: Foundation (30 minutes)
- [ ] Create Contentful space
- [ ] Generate API keys (Delivery + Preview)
- [ ] Add API keys to environment variables
- [ ] Create `blogCategory` content type (6 fields)
- [ ] Create `whyReason` content type (5 fields)
- [ ] Create `socialLink` content type (6 fields)

### Phase 2: Core Content Types (1 hour)
- [ ] Create `homepage` content type (8 fields)
- [ ] Create `aboutPage` content type (10 fields)
- [ ] Create `portfolioPage` content type (5 fields)
- [ ] Create `portfolioEntry` content type (14 fields)
- [ ] Create `blogPost` content type (12 fields)
- [ ] Create `testimonial` content type (11 fields)

### Phase 3: Sample Content (2 hours)
- [ ] Add 6 blog categories
- [ ] Add 5 why reasons
- [ ] Add 5 social links
- [ ] Create 1 homepage entry
- [ ] Create 1 about page entry
- [ ] Create 1 portfolio page entry
- [ ] Add 5-10 portfolio entries
- [ ] Add 3-5 blog posts
- [ ] Add 3-5 testimonials

### Phase 4: Testing (30 minutes)
- [ ] Test API connection in development
- [ ] Verify content displays correctly
- [ ] Test fallback to mock data
- [ ] Check image loading
- [ ] Validate rich text rendering

---

## 📚 Additional Resources

### Related Documentation

- **[contentful-integration.md](./contentful-integration.md)** - Integration architecture and code patterns
- **[mock-data.md](./mock-data.md)** - Mock data system alignment
- **[Guidelines.md](./Guidelines.md)** - Main project guidelines

### Contentful Resources

- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Content Modeling Guide](https://www.contentful.com/developers/docs/concepts/data-model/)
- [Contentful CLI](https://github.com/contentful/contentful-cli)

### TypeScript Type Definitions

All content types have corresponding TypeScript interfaces in `/data/types/`:

- `/data/types/page.ts` - Page content types (Homepage, About, Portfolio Page)
- `/data/types/portfolio.ts` - Portfolio entry types
- `/data/types/blog.ts` - Blog post and category types
- `/data/mock/testimonials/index.ts` - Testimonial types

---

## 🆘 Support

### Common Issues

**Q: Field names don't match TypeScript interfaces**  
A: Field names in Contentful MUST match exactly. Check `/data/types/` files for correct names.

**Q: Images not loading from Contentful**  
A: Ensure assets are published and use HTTPS URLs. Check CORS settings.

**Q: Content not appearing on site**  
A: Verify environment variables are set correctly. Check browser console for errors.

**Q: Rich text not rendering**  
A: Ensure you're using Contentful's rich text renderer and transforming content properly.

---

**Last Updated:** January 2025  
**Version:** 1.0.0  
**Maintained by:** Ash Shaw Portfolio Team

For implementation details, see [contentful-integration.md](./contentful-integration.md).
