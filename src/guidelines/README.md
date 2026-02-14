# Ash Shaw Makeup Portfolio - Guidelines Directory

**Welcome to the comprehensive design system guidelines for the Ash Shaw Makeup Portfolio project.**

This directory contains all the documentation needed to build and maintain the portfolio using Figma Make's AI-powered development environment.

**Version:** 4.0.0  
**Last Updated:** January 2025

---

## 📚 Quick Start

### For AI Agents (Figma Make)

Follow this **exact reading order** to understand the design system:

#### Step 1: Start Here (REQUIRED)
1. **[Guidelines.md](./Guidelines.md)** - Read this FIRST for project overview and critical rules

#### Step 2: Read Overviews (REQUIRED)
2. **[overview-components.md](./overview-components.md)** - Complete component system overview
3. **[overview-icons.md](./overview-icons.md)** - Icon system and verification process
4. **[overview-sections.md](./overview-sections.md)** - Section patterns
5. **[overview-blocks.md](./overview-blocks.md)** - Block patterns
6. **[overview-patterns.md](./overview-patterns.md)** - Design patterns
7. **[overview-parts.md](./overview-parts.md)** - Template parts
8. **[overview-templates.md](./overview-templates.md)** - Page templates

#### Step 3: Read Design Tokens (REQUIRED)
9. **[design-tokens/colors.md](./design-tokens/colors.md)** - Color system with semantic tokens
10. **[design-tokens/typography.md](./design-tokens/typography.md)** - Typography hierarchy
11. **[design-tokens/spacing.md](./design-tokens/spacing.md)** - Spacing system

#### Step 4: Understand Data System (REQUIRED)
12. **[mock-data.md](./mock-data.md)** - Mock data system and centralized content management

#### Step 5: Backend Integrations (REQUIRED for Features)
13. **[contentful-integration.md](./contentful-integration.md)** - CMS integration guide

#### Step 6: Read Component Guidelines BEFORE Using
15. Before using ANY component, read its specific file in **[components/](./components/)**

#### Step 7: Mobile Guidelines (If Building Mobile Features)
16. **[mobile/typography.md](./mobile/typography.md)** - Mobile typography rules
17. **[mobile/images.md](./mobile/images.md)** - Mobile image optimization
18. **[mobile/performance.md](./mobile/performance.md)** - Mobile performance
19. **[mobile/forms.md](./mobile/forms.md)** - Mobile form patterns

---

## 📁 Complete Directory Structure

```
guidelines/
├── 📄 Guidelines.md                  ⭐ START HERE - Main entry point
├── 📄 README.md                      📖 This file - Navigation guide
├── 📄 AUDIT_REPORT.md                🔍 Guidelines audit report
│
├── 📄 overview-components.md         📋 Component system overview
├── 📄 overview-icons.md              🎨 Icon system guide
├── 📄 overview-sections.md           📐 Section patterns
├── 📄 overview-blocks.md             🧱 Block patterns
├── 📄 overview-patterns.md           🎯 Design patterns
├── 📄 overview-parts.md              🔧 Template parts
├── 📄 overview-templates.md          📋 Page templates
│
├── 📄 mock-data.md                   💾 Mock data system guide (NEW in v4.0)
├── 📄 contentful-integration.md      🌐 Contentful CMS guide (NEW in v4.0)
│
├── 📁 components/                    📦 Component-specific guides (24 files)
│   ├── Logo.md
│   ├── Header.md
│   ├── Footer.md
│   ├── ScrollDownArrow.md
│   ├── ScrollBackToTop.md
│   ├── SocialLinks.md
│   ├── LayoutSwitcher.md
│   ├── PortfolioCard.md
│   ├── BlogCard.md
│   ├── Lightbox.md
│   ├── ShareComponent.md
│   ├── ReadMoreButton.md
│   ├── SearchBar.md
│   ├── CategoryFilter.md
│   ├── Pagination.md
│   ├── SectionCard.md
│   └── ... (more components)
│
├── 📁 design-tokens/                 🎨 Design system specifications
│   ├── colors.md                     🌈 Color palette and semantic tokens
│   ├── typography.md                 📝 Font system and hierarchy
│   └── spacing.md                    📏 Spacing scale and utilities
│
├── 📁 icons/                         🎨 Icon category documentation
│   ├── travel.md                     ✈️ Travel and location icons
│   └── interface.md                  🖱️ UI controls and navigation icons
│
├── 📁 mobile/                        📱 Mobile-specific guidelines
│   ├── typography.md                 Mobile typography rules
│   ├── spacing.md                    Mobile spacing patterns
│   ├── buttons.md                    Mobile button specifications
│   ├── animations.md                 Mobile animation guidelines
│   ├── images.md                     Mobile image optimization
│   ├── performance.md                Mobile performance guide
│   └── forms.md                      Mobile form patterns
│
├── 📁 sections/                      📐 Section pattern guides
│   └── ... (WordPress block theme aligned)
│
├── 📁 blocks/                        🧱 Block pattern guides
│   └── ... (Content building blocks)
│
├── 📁 patterns/                      🎯 Design pattern guides
│   └── ... (Reusable design patterns)
│
├── 📁 parts/                         🔧 Template parts guides
│   └── ... (Header, Footer, etc.)
│
└── 📁 templates/                     📋 Page template guides
    └── ... (Full page layouts)
```

---

## 🎯 What's New in v4.0.0

### Major Updates

#### 1. Mock Data System 🆕
- **[mock-data.md](./mock-data.md)** - Complete centralized data management system
- Single source of truth for all content
- Type-safe data structures
- 43 portfolio entries with 19 real Figma assets
- 5 comprehensive blog posts
- Seamless Contentful CMS fallback

#### 2. Contentful Integration 🆕
- **[contentful-integration.md](./contentful-integration.md)** - Complete CMS integration guide
- Content model alignment with mock data
- Type-safe CMS integration
- Error handling and fallback strategies
- Setup and configuration guide

#### 2. Contentful Integration 🆕
- **[contentful-integration.md](./contentful-integration.md)** - CMS setup guide
- Portfolio, blog, and page content management
- Content model alignment
- Static fallbacks for development
- Image optimization

#### 3. Updated Project Structure
- Added `/data/` directory documentation
- Centralized mock data architecture
- TypeScript type definitions
- Improved data organization

---

## 📖 Core Documentation Files

### Main Guidelines

| File | Purpose | Version | Status |
|------|---------|---------|--------|
| **[Guidelines.md](./Guidelines.md)** | Main entry point, project overview | v4.0.0 | ✅ Current |
| **[README.md](./README.md)** | This file - navigation guide | v4.0.0 | ✅ Current |
| **[AUDIT_REPORT.md](./AUDIT_REPORT.md)** | Guidelines audit and maintenance | v1.0.0 | ✅ Current |

### Overview Documents

| File | Purpose | Version | Status |
|------|---------|---------|--------|
| **[overview-components.md](./overview-components.md)** | Component system architecture | v3.2.0 | ⚠️ Update pending |
| **[overview-icons.md](./overview-icons.md)** | Icon system and verification | v3.2.0 | ⚠️ Update pending |
| **[overview-sections.md](./overview-sections.md)** | Section patterns | v3.2.0 | ⚠️ Update pending |
| **[overview-blocks.md](./overview-blocks.md)** | Block patterns | v3.2.0 | ⚠️ Update pending |
| **[overview-patterns.md](./overview-patterns.md)** | Design patterns | v3.2.0 | ⚠️ Update pending |
| **[overview-parts.md](./overview-parts.md)** | Template parts | v3.2.0 | ⚠️ Update pending |
| **[overview-templates.md](./overview-templates.md)** | Page templates | v3.2.0 | ⚠️ Update pending |

### Data & Integration Guides (NEW)

| File | Purpose | Version | Status |
|------|---------|---------|--------|
| **[mock-data.md](./mock-data.md)** | Mock data system guide | v1.0.0 | ✅ Current |
| **[contentful-integration.md](./contentful-integration.md)** | CMS integration | v1.0.0 | ✅ Current |

### Design Tokens

| File | Purpose | Coverage |
|------|---------|----------|
| **[colors.md](./design-tokens/colors.md)** | Color system | Gradients, semantic colors, accessibility |
| **[typography.md](./design-tokens/typography.md)** | Typography | Fonts, scales, fluid typography |
| **[spacing.md](./design-tokens/spacing.md)** | Spacing | Fluid scale, component utilities |

---

## 🔍 Finding What You Need

### By Feature

**Building a Page Component?**
→ Start with [overview-components.md](./overview-components.md)
→ Check [mock-data.md](./mock-data.md) for content
→ Review [Guidelines.md](./Guidelines.md) Section 1 for architecture

**Integrating with CMS?**
→ Read [contentful-integration.md](./contentful-integration.md)
→ Check [mock-data.md](./mock-data.md) for data alignment
→ Review specific component guides for usage

**Using a Specific Component?**
→ Find component in [components/](./components/) directory
→ Read full component guide before implementing
→ Check [overview-components.md](./overview-components.md) for architecture

**Styling an Element?**
→ Read [design-tokens/](./design-tokens/) for system
→ Check [Guidelines.md](./Guidelines.md) Section 7 for requirements
→ Never skip explicit styling (critical rule!)

**Working with Icons?**
→ Read [overview-icons.md](./overview-icons.md) FIRST
→ Verify icon exists before using
→ Check [icons/](./icons/) for category guides

**Building for Mobile?**
→ Read [mobile/](./mobile/) guidelines
→ Focus on responsive patterns
→ Follow mobile-first approach

---

## 🎨 Design System at a Glance

### Color System
- **7 gradient combinations** (pink-purple-blue, blue-teal-green, etc.)
- **Semantic color tokens** (brand-primary, accent-highlight, etc.)
- **WCAG AA compliant** contrast ratios

### Typography
- **3 font families** (Playfair Display, Inter, Righteous)
- **Fluid typography scale** (clamp-based responsive sizing)
- **Variable fonts** (73% performance improvement)

### Spacing
- **Fluid spacing scale** (xs through 6xl)
- **Component-specific utilities** (px-button, py-section, etc.)
- **Responsive patterns** (mobile-first scaling)

### Components
- **50+ React components**
- **Type-safe with TypeScript**
- **Accessibility compliant (WCAG 2.1 AA)**
- **Mobile-responsive design**

---

## 💾 Data Management

### Mock Data System

**Location:** `/data/mock/`

**Structure:**
```
/data/mock/
├── images/        # 9 hero images (3 per page)
├── pages/         # Page content (home, about, portfolio)
├── portfolio/     # 43 entries with 19 real Figma assets
├── blog/          # 5 posts + 6 categories + 50+ tags
└── ui/            # Social links and UI elements
```

**Usage:**
```typescript
import { homepageHero, blogPosts, socialLinks } from '@/data/mock';
```

**Documentation:** [mock-data.md](./mock-data.md)

---

### Content Management (Contentful)

**Integration:** Seamless CMS with mock data fallback

**Content Types:**
- Homepage content
- About page content
- Portfolio entries
- Blog posts and categories

**Usage:**
```typescript
import { useAboutPageContent } from '@/hooks/useContentful';

const { data } = useAboutPageContent();
const content = data || mockData; // Automatic fallback
```

**Documentation:** [contentful-integration.md](./contentful-integration.md)

---

### Backend Services

**CMS Integration:**
- Contentful for dynamic content management
- Static fallbacks for development

---

## 📱 Component Categories

### Layout Components
- **Header** - Navigation with mobile menu
- **Footer** - Contact form and social links
- **HeroLayout** - Flexible hero section with lightbox
- **SectionCard** - Content sections with themes

### Interactive Components
- **SearchBar** - Blog search with highlighting
- **CategoryFilter** - Blog category filtering
- **Pagination** - Blog pagination with keyboard nav
- **LayoutSwitcher** - Grid/list view toggle
- **Lightbox** - Image gallery with navigation

### Content Components
- **BlogCard** - Blog post preview
- **PortfolioCard** - Portfolio entry display
- **ShareComponent** - Social sharing
- **ReadMoreButton** - Expandable content
- **SocialLinks** - Social media links

### Utility Components
- **ScrollDownArrow** - Animated scroll indicator
- **ScrollBackToTop** - Floating scroll button
- **Logo** - Brand logo with animations

---

## 🔗 Quick Links

### Essential Reading
- [Guidelines.md](./Guidelines.md) - Start here
- [mock-data.md](./mock-data.md) - Data management
- [overview-components.md](./overview-components.md) - Component architecture

### Integration Guides
- [contentful-integration.md](./contentful-integration.md) - CMS setup

### Design System
- [design-tokens/colors.md](./design-tokens/colors.md) - Colors
- [design-tokens/typography.md](./design-tokens/typography.md) - Typography
- [design-tokens/spacing.md](./design-tokens/spacing.md) - Spacing

### Components
- [components/](./components/) - All component guides
- [overview-icons.md](./overview-icons.md) - Icon system

---

## 🔄 Version History

### v4.1.0 (Current - January 2025)
- ✅ Removed backend integration
- ✅ Contact form now operates in demo mode
- ✅ Ready for backend integration (Netlify/Vercel/AWS Lambda)
- ✅ Updated documentation to reflect changes

### v4.0.0 (January 2025)
- ✅ Added mock data system documentation
- ✅ Added Contentful integration guide
- ✅ Updated project structure with /data/ directory
- ✅ Enhanced reading order and navigation
- ✅ Added AUDIT_REPORT.md for maintenance

### v3.2.0 (January 2025)
- Restructured guidelines into modular files
- Separated component, token, and icon documentation
- Created overview files for better navigation
- Improved AI agent instructions

### v2.3.1 (December 2024)
- BlogPostPage layout optimization
- Enhanced information hierarchy
- Improved category positioning

### v2.3.0 (December 2024)
- Variable font system (73% performance improvement)
- SendGrid email integration fixes
- Complete blog system with search, filtering, pagination
- Enhanced accessibility documentation

---

## ✅ Guidelines Checklist

Before starting development:

### For AI Agents
- [ ] Read Guidelines.md completely
- [ ] Review all overview files
- [ ] Understand design token system
- [ ] Review mock data system
- [ ] Check integration guides (if needed)
- [ ] Read component guidelines before using
- [ ] Verify icons before importing
- [ ] Follow explicit styling rules

### For Developers
- [ ] Clone and setup project
- [ ] Review Guidelines.md
- [ ] Understand data architecture (/data/mock/)
- [ ] Setup environment variables (optional)
- [ ] Review component architecture
- [ ] Read mobile guidelines (for responsive)
- [ ] Test with and without CMS/Backend

---

## 🆘 Getting Help

### Common Questions

**Q: Where do I find content data?**  
A: See [mock-data.md](./mock-data.md) - All content in `/data/mock/`

**Q: How do I integrate with Contentful?**  
A: See [contentful-integration.md](./contentful-integration.md)

**Q: Which component should I use?**  
A: See [overview-components.md](./overview-components.md) for architecture

**Q: How do I verify an icon exists?**  
A: See [overview-icons.md](./overview-icons.md) for verification process

**Q: Component not working as expected?**  
A: Read specific component guide in [components/](./components/)

**Q: Styling not applying correctly?**  
A: Review [Guidelines.md](./Guidelines.md) Section 7 - Must use explicit classes!

---

## 📊 Documentation Statistics

- **Total Guidelines:** 30+ files
- **Component Guides:** 24 files
- **Design Token Docs:** 3 files
- **Integration Guides:** 3 files
- **Overview Files:** 7 files
- **Mobile Guidelines:** 7 files

---

**Last Updated:** January 2025  
**Version:** 4.0.0  
**Maintained by:** Ash Shaw Portfolio Team

**Need to update guidelines?**  
→ Review [AUDIT_REPORT.md](./AUDIT_REPORT.md) for maintenance checklist

**Contributing to documentation?**  
→ Follow existing structure and versioning
→ Update version history
→ Cross-reference related docs
