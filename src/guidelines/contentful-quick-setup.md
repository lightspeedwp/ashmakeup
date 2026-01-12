# Contentful Quick Setup Guide

**⏱️ Estimated Time:** 2-3 hours  
**💡 Purpose:** Step-by-step instructions to create all Contentful content models

---

## 🚀 Before You Start

### Prerequisites

✅ Contentful account created  
✅ New space created  
✅ API keys generated (Settings → API keys)  
✅ Environment variables ready to add to project

### What You'll Build

| Content Type | Fields | Priority | Time |
|--------------|--------|----------|------|
| Blog Category | 6 | High | 5 min |
| Why Reason | 5 | Medium | 5 min |
| Social Link | 6 | Low | 5 min |
| Homepage | 8 | High | 10 min |
| About Page | 10 | High | 15 min |
| Portfolio Page | 5 | Medium | 8 min |
| Portfolio Entry | 14 | High | 20 min |
| Blog Post | 12 | High | 20 min |
| Testimonial | 11 | Medium | 15 min |

**Total:** 9 content types, ~103 minutes

---

## 📋 Content Type 1: Blog Category

**⏱️ Time:** 5 minutes  
**🎯 Purpose:** Organize blog posts into categories

### Create Content Type

1. Click **Content model** in sidebar
2. Click **Add content type**
3. Enter:
   - **Name:** `Blog Category`
   - **API Identifier:** `blogCategory`
   - **Description:** `Category classification for blog posts`
4. Click **Create**

### Add Fields

Click **Add field** for each field below:

#### Field 1: Category ID
- **Field type:** Short text
- **Name:** `Category ID`
- **Field ID:** `id`
- Click **Create and configure**
- Settings:
  - ✅ Required field
  - ✅ This field represents the Entry title
  - Validation: Max length = 50
  - Help text: `Unique identifier (e.g., "makeup-tips")`
- Click **Confirm**

#### Field 2: Category Name
- **Field type:** Short text
- **Name:** `Category Name`
- **Field ID:** `name`
- Settings:
  - ✅ Required field
  - Validation: Max length = 100
  - Help text: `Display name (e.g., "Makeup Tips")`

#### Field 3: URL Slug
- **Field type:** Short text
- **Name:** `URL Slug`
- **Field ID:** `slug`
- Settings:
  - ✅ Required field
  - ✅ Unique field
  - Validation: Max length = 100
  - Help text: `URL-friendly slug (e.g., "makeup-tips")`

#### Field 4: Description
- **Field type:** Long text
- **Name:** `Description`
- **Field ID:** `description`
- Settings:
  - ❌ Not required
  - Validation: Max length = 300
  - Help text: `Category description for SEO`

#### Field 5: Color Code
- **Field type:** Short text
- **Name:** `Color Code`
- **Field ID:** `color`
- Settings:
  - ❌ Not required
  - Validation: Pattern = `^#[0-9A-Fa-f]{6}$`
  - Help text: `Hex color (e.g., "#EC4899")`

#### Field 6: Icon
- **Field type:** Short text
- **Name:** `Icon`
- **Field ID:** `icon`
- Settings:
  - ❌ Not required
  - Validation: Max length = 50
  - Help text: `Emoji or Lucide icon name`

### Save Content Type
- Click **Save** in top right

---

## 📋 Content Type 2: Why Reason

**⏱️ Time:** 5 minutes  
**🎯 Purpose:** Reasons for "Why Choose" section

### Create Content Type

1. Click **Add content type**
2. Enter:
   - **Name:** `Why Reason`
   - **API Identifier:** `whyReason`
   - **Description:** `Individual reason for Why Section`
3. Click **Create**

### Add Fields

#### Field 1: Reason ID
- **Field type:** Short text
- **Name:** `Reason ID`
- **Field ID:** `id`
- Settings:
  - ✅ Required field
  - ✅ This field represents the Entry title
  - Validation: Max length = 50
  - Help text: `Unique identifier (e.g., "professional-quality")`

#### Field 2: Reason Title
- **Field type:** Short text
- **Name:** `Reason Title`
- **Field ID:** `title`
- Settings:
  - ✅ Required field
  - Validation: Max length = 100
  - Help text: `Heading for this reason`

#### Field 3: Icon
- **Field type:** Short text
- **Name:** `Icon`
- **Field ID:** `icon`
- Settings:
  - ✅ Required field
  - Validation: Max length = 50
  - Help text: `Emoji or Lucide icon name`

#### Field 4: Description
- **Field type:** Long text
- **Name:** `Description`
- **Field ID:** `description`
- Settings:
  - ✅ Required field
  - Validation: Max length = 500
  - Help text: `Detailed explanation`

#### Field 5: Display Order
- **Field type:** Integer
- **Name:** `Display Order`
- **Field ID:** `order`
- Settings:
  - ❌ Not required
  - Validation: Min = 0, Max = 99
  - Default value: 99
  - Help text: `Sort order (lower = higher priority)`

### Save Content Type
- Click **Save**

---

## 📋 Content Type 3: Social Link

**⏱️ Time:** 5 minutes  
**🎯 Purpose:** Social media profile links

### Create Content Type

1. Click **Add content type**
2. Enter:
   - **Name:** `Social Link`
   - **API Identifier:** `socialLink`
   - **Description:** `Social media profiles and contact links`
3. Click **Create**

### Add Fields

#### Field 1: Link ID
- **Field type:** Short text
- **Name:** `Link ID`
- **Field ID:** `id`
- Settings:
  - ✅ Required field
  - ✅ This field represents the Entry title
  - Validation: Max length = 50
  - Help text: `Unique identifier (e.g., "instagram")`

#### Field 2: Platform Name
- **Field type:** Short text
- **Name:** `Platform Name`
- **Field ID:** `platform`
- Settings:
  - ✅ Required field
  - Validation: Max length = 50
  - Help text: `Social platform name (e.g., "Instagram")`

#### Field 3: Profile URL
- **Field type:** Short text
- **Name:** `Profile URL`
- **Field ID:** `url`
- Settings:
  - ✅ Required field
  - Validation: Pattern = URL format
  - Help text: `Full profile URL`

#### Field 4: Icon Name
- **Field type:** Short text
- **Name:** `Icon Name`
- **Field ID:** `icon`
- Settings:
  - ✅ Required field
  - Validation: Max length = 50
  - Help text: `Lucide icon name (e.g., "Instagram")`

#### Field 5: Accessible Label
- **Field type:** Short text
- **Name:** `Accessible Label`
- **Field ID:** `label`
- Settings:
  - ✅ Required field
  - Validation: Max length = 100
  - Help text: `ARIA label (e.g., "Visit Ash on Instagram")`

#### Field 6: Display Order
- **Field type:** Integer
- **Name:** `Display Order`
- **Field ID:** `order`
- Settings:
  - ❌ Not required
  - Validation: Min = 0, Max = 99
  - Default value: 99

### Save Content Type
- Click **Save**

---

## 📋 Content Type 4: Homepage

**⏱️ Time:** 10 minutes  
**🎯 Purpose:** Homepage hero section and featured content

### Create Content Type

1. Click **Add content type**
2. Enter:
   - **Name:** `Homepage`
   - **API Identifier:** `homepage`
   - **Description:** `Homepage hero section and featured content`
3. Click **Create**

### Add Fields

#### Field 1: Hero Title
- **Field type:** Short text
- **Name:** `Hero Title`
- **Field ID:** `title`
- Settings:
  - ✅ Required field
  - ✅ This field represents the Entry title
  - Validation: Max length = 100
  - Help text: `Main homepage title (e.g., "Ash Shaw")`

#### Field 2: Hero Subtitle
- **Field type:** Short text
- **Name:** `Hero Subtitle`
- **Field ID:** `subtitle`
- Settings:
  - ✅ Required field
  - Validation: Max length = 150
  - Help text: `Professional tagline`

#### Field 3: Hero Description
- **Field type:** Long text
- **Name:** `Hero Description`
- **Field ID:** `description`
- Settings:
  - ✅ Required field
  - Validation: Max length = 500
  - Help text: `Brief introduction paragraph`

#### Field 4: Hero Images
- **Field type:** Media (Multiple files)
- **Name:** `Hero Images`
- **Field ID:** `heroImages`
- Settings:
  - ✅ Required field
  - Validation: 
    - Min files = 1, Max files = 5
    - Accept only images
  - Help text: `Background slideshow images (recommended: 3)`

#### Field 5: CTA Button Text
- **Field type:** Short text
- **Name:** `CTA Button Text`
- **Field ID:** `ctaButtonText`
- Settings:
  - ❌ Not required
  - Validation: Max length = 30
  - Default value: `View My Work`

#### Field 6: CTA Button Link
- **Field type:** Short text
- **Name:** `CTA Button Link`
- **Field ID:** `ctaButtonLink`
- Settings:
  - ❌ Not required
  - Default value: `#portfolio`

#### Field 7: Why Choose Reasons
- **Field type:** Reference (Multiple entries)
- **Name:** `Why Choose Reasons`
- **Field ID:** `whyReasons`
- Settings:
  - ❌ Not required
  - Accept entries of type: `Why Reason`
  - Help text: `Reasons to choose (displayed in Why Section)`

#### Field 8: Featured Portfolio
- **Field type:** Reference (Multiple entries)
- **Name:** `Featured Portfolio`
- **Field ID:** `featuredWork`
- Settings:
  - ❌ Not required
  - Accept entries of type: `Portfolio Entry`
  - Help text: `Featured portfolio items for homepage`

### Save Content Type
- Click **Save**

---

## 📋 Content Type 5: Portfolio Entry

**⏱️ Time:** 20 minutes  
**🎯 Purpose:** Individual portfolio work items

### Create Content Type

1. Click **Add content type**
2. Enter:
   - **Name:** `Portfolio Entry`
   - **API Identifier:** `portfolioEntry`
   - **Description:** `Individual portfolio work item with images and details`
3. Click **Create**

### Add Fields

#### Field 1: Entry ID
- **Field type:** Short text
- **Name:** `Entry ID`
- **Field ID:** `id`
- Settings:
  - ✅ Required field
  - ✅ This field represents the Entry title
  - ✅ Unique field
  - Validation: Max length = 100
  - Help text: `Unique identifier (e.g., "lost-paradise-thailand")`

#### Field 2: URL Slug
- **Field type:** Short text
- **Name:** `URL Slug`
- **Field ID:** `slug`
- Settings:
  - ✅ Required field
  - ✅ Unique field
  - Validation: Max length = 150
  - Help text: `URL-friendly slug`

#### Field 3: Entry Title
- **Field type:** Short text
- **Name:** `Entry Title`
- **Field ID:** `title`
- Settings:
  - ✅ Required field
  - Validation: Max length = 200
  - Help text: `Display title (e.g., "Lost Paradise - Thailand")`

#### Field 4: Category
- **Field type:** Short text (Dropdown)
- **Name:** `Category`
- **Field ID:** `category`
- Settings:
  - ✅ Required field
  - Appearance: Dropdown
  - Predefined values:
    - `Festival Makeup`
    - `UV Makeup`
    - `Nail Art`
    - `Portrait`
    - `Special Effects`
    - `Body Art`
  - Help text: `Main category classification`

#### Field 5: Subcategory
- **Field type:** Short text
- **Name:** `Subcategory`
- **Field ID:** `subcategory`
- Settings:
  - ❌ Not required
  - Validation: Max length = 100

#### Field 6: Images
- **Field type:** Media (Multiple files)
- **Name:** `Images`
- **Field ID:** `images`
- Settings:
  - ✅ Required field
  - Validation:
    - Min files = 1, Max files = 20
    - Accept only images
  - Help text: `Portfolio images for this entry`

#### Field 7: Location
- **Field type:** Short text
- **Name:** `Location`
- **Field ID:** `location`
- Settings:
  - ❌ Not required
  - Validation: Max length = 100
  - Help text: `Where work was created (e.g., "Byron Bay, NSW")`

#### Field 8: Event Name
- **Field type:** Short text
- **Name:** `Event Name`
- **Field ID:** `event`
- Settings:
  - ❌ Not required
  - Validation: Max length = 150
  - Help text: `Event or occasion`

#### Field 9: Date
- **Field type:** Date
- **Name:** `Date`
- **Field ID:** `date`
- Settings:
  - ❌ Not required
  - Format: Date only
  - Help text: `When work was completed`

#### Field 10: Description
- **Field type:** Long text
- **Name:** `Description`
- **Field ID:** `description`
- Settings:
  - ✅ Required field
  - Validation: Max length = 2000
  - Help text: `Detailed description of the work`

#### Field 11: Excerpt
- **Field type:** Long text
- **Name:** `Excerpt`
- **Field ID:** `excerpt`
- Settings:
  - ❌ Not required
  - Validation: Max length = 300
  - Help text: `Short preview (auto-generated if empty)`

#### Field 12: Tags
- **Field type:** Short text (List)
- **Name:** `Tags`
- **Field ID:** `tags`
- Settings:
  - ❌ Not required
  - Validation: Max items = 20
  - Help text: `Searchable tags (e.g., "Festival", "Glitter")`

#### Field 13: Featured
- **Field type:** Boolean
- **Name:** `Featured`
- **Field ID:** `featured`
- Settings:
  - ❌ Not required
  - Default value: false
  - Help text: `Display on homepage featured section`

#### Field 14: Display Order
- **Field type:** Integer
- **Name:** `Display Order`
- **Field ID:** `order`
- Settings:
  - ❌ Not required
  - Validation: Min = 0, Max = 999
  - Default value: 999
  - Help text: `Sort order (lower = higher priority)`

### Save Content Type
- Click **Save**

---

## 📋 Content Type 6: Blog Post

**⏱️ Time:** 20 minutes  
**🎯 Purpose:** Blog articles with rich content

### Create Content Type

1. Click **Add content type**
2. Enter:
   - **Name:** `Blog Post`
   - **API Identifier:** `blogPost`
   - **Description:** `Individual blog article with rich content`
3. Click **Create**

### Add Fields

#### Field 1: Post ID
- **Field type:** Short text
- **Name:** `Post ID`
- **Field ID:** `id`
- Settings:
  - ✅ Required field
  - ✅ This field represents the Entry title
  - ✅ Unique field
  - Validation: Max length = 100

#### Field 2: URL Slug
- **Field type:** Short text
- **Name:** `URL Slug`
- **Field ID:** `slug`
- Settings:
  - ✅ Required field
  - ✅ Unique field
  - Validation: Max length = 150

#### Field 3: Post Title
- **Field type:** Short text
- **Name:** `Post Title`
- **Field ID:** `title`
- Settings:
  - ✅ Required field
  - Validation: Max length = 200
  - Help text: `Blog post headline`

#### Field 4: Excerpt
- **Field type:** Long text
- **Name:** `Excerpt`
- **Field ID:** `excerpt`
- Settings:
  - ✅ Required field
  - Validation: Max length = 500
  - Help text: `Short summary for previews`

#### Field 5: Post Content
- **Field type:** Rich text
- **Name:** `Post Content`
- **Field ID:** `content`
- Settings:
  - ✅ Required field
  - Help text: `Full blog post content`

#### Field 6: Featured Image
- **Field type:** Media (Single file)
- **Name:** `Featured Image`
- **Field ID:** `featuredImage`
- Settings:
  - ✅ Required field
  - Validation: Accept only images
  - Help text: `Main post image for previews`

#### Field 7: Published Date
- **Field type:** Date and time
- **Name:** `Published Date`
- **Field ID:** `publishedAt`
- Settings:
  - ✅ Required field
  - Format: Date and time with timezone
  - Help text: `When post was published`

#### Field 8: Last Updated
- **Field type:** Date and time
- **Name:** `Last Updated`
- **Field ID:** `updatedAt`
- Settings:
  - ❌ Not required
  - Format: Date and time with timezone

#### Field 9: Category
- **Field type:** Reference (Single entry)
- **Name:** `Category`
- **Field ID:** `category`
- Settings:
  - ✅ Required field
  - Accept entries of type: `Blog Category`
  - Help text: `Primary category`

#### Field 10: Tags
- **Field type:** Short text (List)
- **Name:** `Tags`
- **Field ID:** `tags`
- Settings:
  - ❌ Not required
  - Validation: Max items = 30
  - Help text: `Searchable tags`

#### Field 11: Reading Time
- **Field type:** Integer
- **Name:** `Reading Time`
- **Field ID:** `readTime`
- Settings:
  - ❌ Not required
  - Validation: Min = 1, Max = 60
  - Help text: `Estimated reading time in minutes`

#### Field 12: Featured Post
- **Field type:** Boolean
- **Name:** `Featured Post`
- **Field ID:** `featured`
- Settings:
  - ❌ Not required
  - Default value: false
  - Help text: `Display prominently on blog page`

### Save Content Type
- Click **Save**

---

## 📋 Content Type 7: Testimonial

**⏱️ Time:** 15 minutes  
**🎯 Purpose:** Client testimonials and reviews

### Create Content Type

1. Click **Add content type**
2. Enter:
   - **Name:** `Testimonial`
   - **API Identifier:** `testimonial`
   - **Description:** `Client testimonials and reviews for social proof`
3. Click **Create**

### Add Fields

#### Field 1: Testimonial ID
- **Field type:** Short text
- **Name:** `Testimonial ID`
- **Field ID:** `id`
- Settings:
  - ✅ Required field
  - ✅ This field represents the Entry title
  - ✅ Unique field
  - Validation: Max length = 50

#### Field 2: Client Name
- **Field type:** Short text
- **Name:** `Client Name`
- **Field ID:** `name`
- Settings:
  - ✅ Required field
  - Validation: Max length = 100

#### Field 3: Client Role
- **Field type:** Short text
- **Name:** `Client Role`
- **Field ID:** `role`
- Settings:
  - ❌ Not required
  - Validation: Max length = 100
  - Help text: `Role (e.g., "Bride", "Event Organizer")`

#### Field 4: Event Name
- **Field type:** Short text
- **Name:** `Event Name`
- **Field ID:** `event`
- Settings:
  - ❌ Not required
  - Validation: Max length = 150

#### Field 5: Rating
- **Field type:** Integer (Dropdown)
- **Name:** `Rating`
- **Field ID:** `rating`
- Settings:
  - ✅ Required field
  - Appearance: Dropdown
  - Predefined values: 1, 2, 3, 4, 5
  - Help text: `Star rating (1-5 stars)`

#### Field 6: Testimonial Text
- **Field type:** Long text
- **Name:** `Testimonial Text`
- **Field ID:** `text`
- Settings:
  - ✅ Required field
  - Validation: Max length = 1000
  - Help text: `Full testimonial content`

#### Field 7: Client Photo
- **Field type:** Media (Single file)
- **Name:** `Client Photo`
- **Field ID:** `image`
- Settings:
  - ❌ Not required
  - Validation: Accept only images

#### Field 8: Date
- **Field type:** Date
- **Name:** `Date`
- **Field ID:** `date`
- Settings:
  - ✅ Required field
  - Format: Date only
  - Help text: `When testimonial was given`

#### Field 9: Featured
- **Field type:** Boolean
- **Name:** `Featured`
- **Field ID:** `featured`
- Settings:
  - ❌ Not required
  - Default value: false
  - Help text: `Display on homepage`

#### Field 10: Video Testimonial URL
- **Field type:** Short text
- **Name:** `Video Testimonial URL`
- **Field ID:** `videoUrl`
- Settings:
  - ❌ Not required
  - Validation: URL format
  - Help text: `Optional video testimonial link`

#### Field 11: Video Thumbnail
- **Field type:** Media (Single file)
- **Name:** `Video Thumbnail`
- **Field ID:** `videoPoster`
- Settings:
  - ❌ Not required
  - Validation: Accept only images

### Save Content Type
- Click **Save**

---

## ✅ Post-Setup Checklist

### Verify Content Types Created

- [ ] Blog Category (6 fields)
- [ ] Why Reason (5 fields)
- [ ] Social Link (6 fields)
- [ ] Homepage (8 fields)
- [ ] About Page (10 fields) - **Not included above, see full guide**
- [ ] Portfolio Page (5 fields) - **Not included above, see full guide**
- [ ] Portfolio Entry (14 fields)
- [ ] Blog Post (12 fields)
- [ ] Testimonial (11 fields)

### Next Steps

1. **Generate API Keys:**
   - Go to Settings → API keys
   - Create new key
   - Copy Space ID and Delivery API access token
   - Add to project `.env` file:
     ```bash
     VITE_CONTENTFUL_SPACE_ID=your_space_id
     VITE_CONTENTFUL_ACCESS_TOKEN=your_token
     ```

2. **Create Sample Content:**
   - Add 6 blog categories
   - Add 3-5 why reasons
   - Add 5 social links
   - Create 1 homepage entry
   - Add 5-10 portfolio entries
   - Add 3-5 blog posts
   - Add 3-5 testimonials

3. **Test Integration:**
   - Run development server
   - Check content loads from Contentful
   - Test fallback to mock data

---

## 📚 Additional Content Types

For **About Page** and **Portfolio Page** content types, see the complete guide:

👉 **[contentful-content-models.md](./contentful-content-models.md)**

---

## 🆘 Need Help?

### Common Issues

**Q: Can't find "Add field" button?**  
A: Make sure you've created the content type first and are in the content type editor.

**Q: Field validation not working?**  
A: Check that you've clicked "Confirm" after setting validation rules for each field.

**Q: Reference fields not showing options?**  
A: The referenced content type must be created first (e.g., create `blogCategory` before `blogPost`).

### Resources

- [Contentful Content Modeling Guide](https://www.contentful.com/developers/docs/concepts/data-model/)
- [Field Types Documentation](https://www.contentful.com/developers/docs/references/content-management-api/#/reference/content-types)
- Project Documentation: [contentful-integration.md](./contentful-integration.md)

---

**Last Updated:** January 2025  
**Maintained by:** Ash Shaw Portfolio Team
