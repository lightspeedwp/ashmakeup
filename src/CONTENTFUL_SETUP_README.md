# 📦 Contentful CMS Setup - Complete Guide

Welcome! This guide will help you set up Contentful CMS for the Ash Shaw Makeup Portfolio.

---

## 🎯 Quick Start

**⏱️ Total Time:** 2-3 hours  
**💰 Cost:** Free (Contentful Community tier)  
**📋 What You'll Create:** 9 content types with 80+ fields

---

## 📚 Documentation Structure

This project has comprehensive Contentful documentation organized in 4 files:

### 1. **Quick Setup Guide** ⚡ (Start Here!)
**File:** `/guidelines/contentful-quick-setup.md`

**Purpose:** Step-by-step instructions to create all content types  
**Best for:** First-time setup, creating content models manually  
**Time:** 2-3 hours

**What's inside:**
- ✅ Field-by-field instructions for each content type
- ✅ Validation rules and settings
- ✅ Exact names and IDs to use
- ✅ Screenshots and tips

**Start here:** [contentful-quick-setup.md](./guidelines/contentful-quick-setup.md)

---

### 2. **Complete Content Models Reference** 📖
**File:** `/guidelines/contentful-content-models.md`

**Purpose:** Comprehensive field specifications for all content types  
**Best for:** Reference, understanding data structure, troubleshooting  
**Pages:** 45+ pages

**What's inside:**
- ✅ Complete field specifications (80+ fields)
- ✅ Field validation rules
- ✅ Example entries with real data
- ✅ TypeScript alignment with `/data/types/`
- ✅ Import/export instructions
- ✅ Content relationships diagram

**Reference:** [contentful-content-models.md](./guidelines/contentful-content-models.md)

---

### 3. **Integration Architecture** 🏗️
**File:** `/guidelines/contentful-integration.md`

**Purpose:** How Contentful integrates with the application  
**Best for:** Developers, understanding fallback system, API usage  
**Pages:** 30+ pages

**What's inside:**
- ✅ System architecture diagrams
- ✅ API integration patterns
- ✅ React hooks usage
- ✅ Mock data fallback strategy
- ✅ Error handling and validation
- ✅ Content sync workflow

**Reference:** [contentful-integration.md](./guidelines/contentful-integration.md)

---

### 4. **JSON Import Template** 🔧
**File:** `/guidelines/contentful-import-template.json`

**Purpose:** Pre-configured content model for automated import  
**Best for:** Advanced users, CLI import, quick setup  
**Format:** Contentful-compatible JSON

**What's inside:**
- ✅ All 9 content types pre-configured
- ✅ Field validations included
- ✅ Ready for CLI import
- ✅ No manual clicking required

**Use with:**
```bash
contentful space import --content-file ./guidelines/contentful-import-template.json
```

---

## 🚀 Setup Workflow

### Option A: Manual Setup (Recommended for First Time)

1. **Read Quick Setup Guide** (15 min)
   - `/guidelines/contentful-quick-setup.md`
   - Understand the process

2. **Create Contentful Account** (10 min)
   - Sign up at [contentful.com](https://www.contentful.com/)
   - Create new space
   - Choose "Empty space" template

3. **Create Content Types** (2 hours)
   - Follow quick setup guide step-by-step
   - Create all 9 content types
   - Set field validations

4. **Generate API Keys** (5 min)
   - Settings → API keys
   - Create new API key
   - Copy Space ID and Delivery token

5. **Configure Environment** (5 min)
   - Add to `.env` file:
     ```bash
     VITE_CONTENTFUL_SPACE_ID=your_space_id
     VITE_CONTENTFUL_ACCESS_TOKEN=your_token
     ```

6. **Add Sample Content** (30 min)
   - Create 6 blog categories
   - Add 3-5 why reasons
   - Add 5 social links
   - Create homepage entry
   - Add portfolio entries

7. **Test Integration** (15 min)
   - Run `npm run dev`
   - Verify content loads
   - Test fallback to mock data

---

### Option B: CLI Import (Advanced Users)

1. **Install Contentful CLI**
   ```bash
   npm install -g contentful-cli
   ```

2. **Login to Contentful**
   ```bash
   contentful login
   ```

3. **Import Content Model**
   ```bash
   contentful space import \
     --space-id YOUR_SPACE_ID \
     --content-file ./guidelines/contentful-import-template.json
   ```

4. **Continue from Step 4** in Option A

---

## 📊 Content Types Overview

| # | Content Type | Fields | Priority | Purpose |
|---|--------------|--------|----------|---------|
| 1 | **Blog Category** | 6 | High | Blog organization |
| 2 | **Why Reason** | 5 | Medium | Homepage reasons |
| 3 | **Social Link** | 6 | Low | Social media links |
| 4 | **Homepage** | 8 | High | Hero section |
| 5 | **About Page** | 10 | High | About content |
| 6 | **Portfolio Page** | 5 | Medium | Portfolio header |
| 7 | **Portfolio Entry** | 14 | High | Portfolio items |
| 8 | **Blog Post** | 12 | High | Blog articles |
| 9 | **Testimonial** | 11 | Medium | Client reviews |

**Total:** 80+ fields across 9 content types

---

## ✅ Recommended Content Creation Order

### Phase 1: Foundation (15 minutes)
Create these first as they're referenced by other content types:

1. ✅ **Blog Category** (6 entries)
   - Makeup Tips
   - Festival Guides
   - Product Reviews
   - Behind the Scenes
   - Inspiration
   - Tutorials

2. ✅ **Why Reason** (3-5 entries)
   - Professional Quality
   - Creative Approach
   - Client Focused

3. ✅ **Social Link** (5 entries)
   - Instagram
   - Facebook
   - TikTok
   - LinkedIn
   - Email

---

### Phase 2: Pages (30 minutes)
Create singleton page content:

4. ✅ **Homepage** (1 entry)
   - Title: "Ash Shaw"
   - Subtitle: "Makeup Artist & Creative Spirit"
   - 3 hero images
   - Link to why reasons and featured work

5. ✅ **About Page** (1 entry)
   - Journey section
   - Philosophy section
   - Skills list

6. ✅ **Portfolio Page** (1 entry)
   - Title: "Portfolio"
   - Category list

---

### Phase 3: Content Items (1-2 hours)
Create actual content:

7. ✅ **Portfolio Entry** (5-20 entries)
   - Start with featured work (3-5 entries)
   - Add category examples (2-3 per category)
   - Include images, descriptions, tags

8. ✅ **Blog Post** (3-10 entries)
   - Start with 1 per category
   - Add featured posts
   - Include rich text content

9. ✅ **Testimonial** (3-10 entries)
   - Add recent testimonials
   - Include 1-2 with video
   - Mark 3-5 as featured

---

## 🔗 Content Relationships

```
Homepage
├── References → Why Reason (multiple)
└── References → Portfolio Entry (multiple, featured)

Blog Post
└── References → Blog Category (single)

(All other content types are standalone)
```

**Important:** Create foundation content (Blog Category, Why Reason) before creating content that references them.

---

## 🎨 Sample Content Data

### Blog Categories (Required)

Create these 6 categories:

| ID | Name | Color | Icon |
|----|------|-------|------|
| `makeup-tips` | Makeup Tips | #EC4899 | ✨ |
| `festival-guides` | Festival Guides | #8B5CF6 | 🎪 |
| `product-reviews` | Product Reviews | #3B82F6 | 🛍️ |
| `behind-the-scenes` | Behind the Scenes | #14B8A6 | 🎬 |
| `inspiration` | Inspiration | #F59E0B | 💡 |
| `tutorials` | Tutorials | #10B981 | 📚 |

---

### Why Reasons (Suggested)

Create 3-5 reasons:

1. **Professional Quality**
   - Icon: ✨
   - Description: "Years of experience creating stunning looks for festivals, weddings, and special events."

2. **Creative Approach**
   - Icon: 🎨
   - Description: "Every look is unique and tailored to your personal style and vision."

3. **Client Focused**
   - Icon: 💖
   - Description: "Your comfort and confidence are my top priorities."

---

### Social Links (Required)

Create these 5 links:

| Platform | URL | Icon | Label |
|----------|-----|------|-------|
| Instagram | https://instagram.com/ashshaw.makeup | Instagram | Visit Ash on Instagram |
| Facebook | https://facebook.com/ashshaw.makeup | Facebook | Visit Ash on Facebook |
| TikTok | https://tiktok.com/@ashshaw.makeup | Video | Visit Ash on TikTok |
| LinkedIn | https://linkedin.com/in/ashshaw | Linkedin | Connect on LinkedIn |
| Email | mailto:ashley@ashshaw.makeup | Mail | Email Ash |

---

## 🖼️ Image Guidelines

### Recommended Image Sizes

| Usage | Size | Aspect Ratio | Format |
|-------|------|--------------|--------|
| Hero Images | 1920x1080px | 16:9 | JPG, WebP |
| Portfolio Images | 1200x1600px | 3:4 (portrait) | JPG, WebP |
| Featured Images | 1200x630px | 1.91:1 | JPG, WebP |
| Thumbnails | 800x800px | 1:1 | JPG, WebP |
| Avatars | 400x400px | 1:1 | JPG, WebP |

### Image Optimization Tips

✅ Compress images before uploading (use TinyPNG or Squoosh)  
✅ Use descriptive filenames (e.g., `festival-makeup-byron-bay.jpg`)  
✅ Add alt text for accessibility  
✅ Use WebP format when possible  
✅ Keep file sizes under 500KB per image

---

## 🧪 Testing Checklist

After setup, verify everything works:

### API Connection
- [ ] Environment variables added to `.env`
- [ ] Space ID is correct
- [ ] Delivery API token is correct
- [ ] No CORS errors in console

### Content Loading
- [ ] Homepage content displays from CMS
- [ ] Portfolio entries load correctly
- [ ] Blog posts render with rich text
- [ ] Images load from Contentful CDN

### Fallback System
- [ ] Disconnect from internet
- [ ] Verify mock data displays
- [ ] Reconnect and verify CMS loads
- [ ] Check console for fallback logs

### Content Publishing
- [ ] All entries are published (not draft)
- [ ] Images are published
- [ ] References are linked correctly

---

## 🆘 Troubleshooting

### Common Issues

**Q: Content not loading from Contentful?**  
A: Check:
1. Environment variables are set correctly
2. Content is published (not in draft)
3. API keys have correct permissions
4. Space ID matches your Contentful space

**Q: Images not displaying?**  
A: Verify:
1. Assets are published in Contentful
2. Image URLs use HTTPS
3. CORS is configured (usually automatic)
4. File size is reasonable (<5MB)

**Q: Rich text not rendering?**  
A: Ensure:
1. Content uses Contentful Rich Text format
2. Transform function in `contentfulService.ts` is working
3. All embedded assets are published

**Q: Reference fields empty?**  
A: Make sure:
1. Referenced content type exists and has entries
2. Entries are published
3. Content model allows the reference

---

## 📚 Additional Resources

### Project Documentation
- **Main Guidelines:** `/guidelines/Guidelines.md`
- **Mock Data Guide:** `/guidelines/mock-data.md`
- **TypeScript Types:** `/data/types/`

### Contentful Resources
- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Content Modeling Best Practices](https://www.contentful.com/developers/docs/concepts/data-model/)
- [Contentful CLI](https://github.com/contentful/contentful-cli)
- [API Reference](https://www.contentful.com/developers/docs/references/content-delivery-api/)

### Community
- [Contentful Community](https://www.contentful.com/community/)
- [Stack Overflow - Contentful Tag](https://stackoverflow.com/questions/tagged/contentful)

---

## 🎯 Next Steps

After completing Contentful setup:

1. ✅ **Verify Integration**
   - Run `npm run dev`
   - Check all content loads correctly
   - Test image loading

2. ✅ **Add More Content**
   - Expand portfolio entries (20-50 entries)
   - Write blog posts (10-20 posts)
   - Collect testimonials (10-15 testimonials)

3. ✅ **Configure Preview**
   - Set up preview API token
   - Enable preview mode in app
   - Test draft content preview

4. ✅ **Deploy to Production**
   - Add environment variables to Netlify
   - Test production build
   - Verify CMS connection in production

---

## 📞 Support

Need help? Check these resources:

1. **Documentation:** Read the comprehensive guides in `/guidelines/`
2. **TypeScript Types:** Review `/data/types/` for data structures
3. **Mock Data:** See `/data/mock/` for example content
4. **Contentful Docs:** [contentful.com/developers](https://www.contentful.com/developers/docs/)

---

**Last Updated:** January 2025  
**Version:** 1.0.0  
**Maintained by:** Ash Shaw Portfolio Team

---

## 🎉 You're Ready!

You now have everything you need to set up Contentful CMS for the Ash Shaw Portfolio.

**Start here:** [Quick Setup Guide](./guidelines/contentful-quick-setup.md)

Good luck! 🚀
