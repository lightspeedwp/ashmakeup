# Contentful CMS - Quick Reference Cheat Sheet

**📋 One-page reference for all content types and fields**

---

## 🎯 Content Type Summary

| # | ID | Display Name | Fields | Display Field |
|---|----|--------------| -------|---------------|
| 1 | `blogCategory` | Blog Category | 6 | `id` |
| 2 | `whyReason` | Why Reason | 5 | `id` |
| 3 | `socialLink` | Social Link | 6 | `id` |
| 4 | `homepage` | Homepage | 8 | `title` |
| 5 | `aboutPage` | About Page | 10 | `heroTitle` |
| 6 | `portfolioPage` | Portfolio Page | 5 | `title` |
| 7 | `portfolioEntry` | Portfolio Entry | 14 | `id` |
| 8 | `blogPost` | Blog Post | 12 | `id` |
| 9 | `testimonial` | Testimonial | 11 | `id` |

---

## 📋 Field Quick Reference

### 1. Blog Category (`blogCategory`)

| Field ID | Type | Required | Validation | Default |
|----------|------|----------|------------|---------|
| `id` | Symbol | ✅ | Max 50, Unique | - |
| `name` | Symbol | ✅ | Max 100 | - |
| `slug` | Symbol | ✅ | Max 100, Unique | - |
| `description` | Text | ❌ | Max 300 | - |
| `color` | Symbol | ❌ | Hex format | - |
| `icon` | Symbol | ❌ | Max 50 | - |

---

### 2. Why Reason (`whyReason`)

| Field ID | Type | Required | Validation | Default |
|----------|------|----------|------------|---------|
| `id` | Symbol | ✅ | Max 50, Unique | - |
| `title` | Symbol | ✅ | Max 100 | - |
| `icon` | Symbol | ✅ | Max 50 | - |
| `description` | Text | ✅ | Max 500 | - |
| `order` | Integer | ❌ | 0-99 | 99 |

---

### 3. Social Link (`socialLink`)

| Field ID | Type | Required | Validation | Default |
|----------|------|----------|------------|---------|
| `id` | Symbol | ✅ | Max 50, Unique | - |
| `platform` | Symbol | ✅ | Max 50 | - |
| `url` | Symbol | ✅ | URL format | - |
| `icon` | Symbol | ✅ | Max 50 | - |
| `label` | Symbol | ✅ | Max 100 | - |
| `order` | Integer | ❌ | 0-99 | 99 |

---

### 4. Homepage (`homepage`)

| Field ID | Type | Required | Validation | Default |
|----------|------|----------|------------|---------|
| `title` | Symbol | ✅ | Max 100 | - |
| `subtitle` | Symbol | ✅ | Max 150 | - |
| `description` | Text | ✅ | Max 500 | - |
| `heroImages` | Asset[] | ✅ | 1-5 images | - |
| `ctaButtonText` | Symbol | ❌ | Max 30 | "View My Work" |
| `ctaButtonLink` | Symbol | ❌ | - | "#portfolio" |
| `whyReasons` | Entry[] | ❌ | Links to whyReason | - |
| `featuredWork` | Entry[] | ❌ | Links to portfolioEntry | - |

---

### 5. About Page (`aboutPage`)

| Field ID | Type | Required | Validation | Default |
|----------|------|----------|------------|---------|
| `heroTitle` | Symbol | ✅ | Max 100 | - |
| `heroSubtitle` | Symbol | ✅ | Max 150 | - |
| `heroDescription` | Text | ✅ | Max 500 | - |
| `heroImages` | Asset[] | ✅ | 1-5 images | - |
| `journeyTitle` | Symbol | ❌ | Max 100 | "My Journey" |
| `journeyContent` | RichText | ✅ | - | - |
| `philosophyTitle` | Symbol | ❌ | Max 100 | "My Philosophy" |
| `philosophyContent` | RichText | ✅ | - | - |
| `skillsTitle` | Symbol | ❌ | Max 100 | "What I Do" |
| `skills` | JSON | ❌ | Array of objects | - |

---

### 6. Portfolio Page (`portfolioPage`)

| Field ID | Type | Required | Validation | Default |
|----------|------|----------|------------|---------|
| `title` | Symbol | ✅ | Max 100 | - |
| `subtitle` | Symbol | ❌ | Max 150 | - |
| `description` | Text | ❌ | Max 500 | - |
| `heroImages` | Asset[] | ❌ | Max 5 images | - |
| `categories` | JSON | ❌ | Array of objects | - |

---

### 7. Portfolio Entry (`portfolioEntry`)

| Field ID | Type | Required | Validation | Default |
|----------|------|----------|------------|---------|
| `id` | Symbol | ✅ | Max 100, Unique | - |
| `slug` | Symbol | ✅ | Max 150, Unique | - |
| `title` | Symbol | ✅ | Max 200 | - |
| `category` | Symbol | ✅ | Dropdown (6 options) | - |
| `subcategory` | Symbol | ❌ | Max 100 | - |
| `images` | Asset[] | ✅ | 1-20 images | - |
| `location` | Symbol | ❌ | Max 100 | - |
| `event` | Symbol | ❌ | Max 150 | - |
| `date` | Date | ❌ | - | - |
| `description` | Text | ✅ | Max 2000 | - |
| `excerpt` | Text | ❌ | Max 300 | - |
| `tags` | Symbol[] | ❌ | Max 20 tags | - |
| `featured` | Boolean | ❌ | - | false |
| `order` | Integer | ❌ | 0-999 | 999 |

**Category Dropdown Values:**
- Festival Makeup
- UV Makeup
- Nail Art
- Portrait
- Special Effects
- Body Art

---

### 8. Blog Post (`blogPost`)

| Field ID | Type | Required | Validation | Default |
|----------|------|----------|------------|---------|
| `id` | Symbol | ✅ | Max 100, Unique | - |
| `slug` | Symbol | ✅ | Max 150, Unique | - |
| `title` | Symbol | ✅ | Max 200 | - |
| `excerpt` | Text | ✅ | Max 500 | - |
| `content` | RichText | ✅ | - | - |
| `featuredImage` | Asset | ✅ | 1 image | - |
| `publishedAt` | DateTime | ✅ | ISO 8601 | - |
| `updatedAt` | DateTime | ❌ | ISO 8601 | - |
| `category` | Entry | ✅ | Links to blogCategory | - |
| `tags` | Symbol[] | ❌ | Max 30 tags | - |
| `readTime` | Integer | ❌ | 1-60 minutes | - |
| `featured` | Boolean | ❌ | - | false |

---

### 9. Testimonial (`testimonial`)

| Field ID | Type | Required | Validation | Default |
|----------|------|----------|------------|---------|
| `id` | Symbol | ✅ | Max 50, Unique | - |
| `name` | Symbol | ✅ | Max 100 | - |
| `role` | Symbol | ❌ | Max 100 | - |
| `event` | Symbol | ❌ | Max 150 | - |
| `rating` | Integer | ✅ | 1-5 (dropdown) | - |
| `text` | Text | ✅ | Max 1000 | - |
| `image` | Asset | ❌ | 1 image | - |
| `date` | Date | ✅ | - | - |
| `featured` | Boolean | ❌ | - | false |
| `videoUrl` | Symbol | ❌ | URL format | - |
| `videoPoster` | Asset | ❌ | 1 image | - |

---

## 🎨 Predefined Values Reference

### Portfolio Categories
```
Festival Makeup
UV Makeup
Nail Art
Portrait
Special Effects
Body Art
```

### Testimonial Ratings
```
1 ⭐
2 ⭐⭐
3 ⭐⭐⭐
4 ⭐⭐⭐⭐
5 ⭐⭐⭐⭐⭐
```

### Blog Category Colors (Recommended)
```
Makeup Tips:        #EC4899 (Pink)
Festival Guides:    #8B5CF6 (Purple)
Product Reviews:    #3B82F6 (Blue)
Behind the Scenes:  #14B8A6 (Teal)
Inspiration:        #F59E0B (Amber)
Tutorials:          #10B981 (Green)
```

---

## 🔗 Content Relationships

```
homepage
  ├── whyReasons → whyReason (Multiple)
  └── featuredWork → portfolioEntry (Multiple)

blogPost
  └── category → blogCategory (Single)
```

---

## 📏 Validation Patterns

### URL Pattern (for social links and video URLs)
```regex
^(https?|ftp)://[^\s/$.?#].[^\s]*$
```

### Hex Color Pattern (for category colors)
```regex
^#[0-9A-Fa-f]{6}$
```

### Slug Format (recommendation)
```
lowercase-with-hyphens
no-spaces-or-special-chars
max-150-characters
```

---

## 🖼️ Image Size Guidelines

| Usage | Recommended Size | Aspect Ratio |
|-------|------------------|--------------|
| Hero Images | 1920×1080px | 16:9 |
| Portfolio Images | 1200×1600px | 3:4 |
| Featured Blog Images | 1200×630px | 1.91:1 |
| Thumbnails | 800×800px | 1:1 |
| Avatars | 400×400px | 1:1 |

**Max File Size:** 5MB per image  
**Formats:** JPG, PNG, WebP (preferred)

---

## 📊 Content Type Dependencies

**Create in this order:**

1. **Foundation** (no dependencies)
   - `blogCategory`
   - `whyReason`
   - `socialLink`

2. **Pages** (reference foundation)
   - `homepage` (references whyReason)
   - `aboutPage`
   - `portfolioPage`

3. **Content** (reference foundation)
   - `portfolioEntry`
   - `blogPost` (references blogCategory)
   - `testimonial`

---

## ⚡ Quick CLI Commands

### Export Content Model
```bash
contentful space export \
  --space-id YOUR_SPACE_ID \
  --export-dir ./backup \
  --content-model-only
```

### Import Content Model
```bash
contentful space import \
  --space-id YOUR_SPACE_ID \
  --content-file ./contentful-import-template.json
```

### Login to Contentful
```bash
contentful login
```

### List Spaces
```bash
contentful space list
```

---

## 🎯 TypeScript Type Mapping

| Contentful Type | TypeScript Type | Example |
|----------------|-----------------|---------|
| Symbol | `string` | "Ash Shaw" |
| Text | `string` | "Long description..." |
| Integer | `number` | 42 |
| Boolean | `boolean` | true |
| Date | `string` | "2024-01-15" |
| DateTime | `string` | "2024-01-15T10:30:00.000Z" |
| Asset | `HeroImage` | { src, alt, title } |
| Asset[] | `HeroImage[]` | [{ src, alt }, ...] |
| RichText | `string \| any` | Document object or markdown |
| Entry | Reference | Link to other entry |
| Entry[] | Reference[] | Links to multiple entries |
| JSON | `any` | Custom object structure |

---

## 📝 Environment Variables

```bash
# Required for production
VITE_CONTENTFUL_SPACE_ID=your_space_id_here
VITE_CONTENTFUL_ACCESS_TOKEN=your_delivery_token_here

# Optional for preview mode
VITE_CONTENTFUL_PREVIEW_TOKEN=your_preview_token_here
VITE_CONTENTFUL_PREVIEW_MODE=false
```

---

## 🔍 Field ID Naming Convention

All field IDs use **camelCase** to match TypeScript interfaces:

```
✅ CORRECT:
heroTitle
featuredImage
publishedAt
ctaButtonText

❌ INCORRECT:
hero_title
featured-image
published_at
CTA_Button_Text
```

---

## 🆘 Troubleshooting Quick Fixes

| Problem | Quick Fix |
|---------|-----------|
| Content not loading | Check environment variables, verify content is published |
| Images not showing | Publish assets, check HTTPS URLs |
| Reference field empty | Create referenced content type first, publish entries |
| Validation error | Check field requirements, max lengths, patterns |
| Type mismatch | Verify field IDs match TypeScript interfaces in `/data/types/` |

---

## 📚 Full Documentation

For complete setup instructions, see:

- **Quick Setup:** `/guidelines/contentful-quick-setup.md`
- **Content Models:** `/guidelines/contentful-content-models.md`
- **Integration:** `/guidelines/contentful-integration.md`
- **Import Template:** `/guidelines/contentful-import-template.json`

---

**Last Updated:** January 2025  
**Version:** 1.0.0

---

## 🎉 You're All Set!

Print this cheat sheet or keep it open while creating content types.

**Ready to start?** → [Quick Setup Guide](./contentful-quick-setup.md)
