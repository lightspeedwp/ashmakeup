# Sitemap & Route Reference

**Version:** 1.0.0
**Last Updated:** February 2026
**Purpose:** Complete route table, taxonomy URL patterns, and navigation hierarchy

---

## 1. Current Routes

| Path | Component | Description | Nav Location |
|------|-----------|-------------|-------------|
| `/` | `HomePage` | Landing: hero, featured work, blog preview | Main nav |
| `/about` | `AboutPage` | Journey, philosophy, skills | Main nav |
| `/portfolio` | `PortfolioMainPage` | Gallery with category filtering | Main nav |
| `/portfolio/:slug` | `PortfolioResolver` | Single portfolio item or category view | Via gallery |
| `/blog` | `BlogPage` | Blog listing with search & pagination | Main nav |
| `/blog/:slug` | `BlogPostPageRoute` | Individual blog post | Via blog listing |
| `/contact` | `ContactPage` | Typeform embed for enquiries | Main nav |
| `/videos` | `VideosPage` | Video showcase grid | Main nav |
| `/terms` | `TermsAndConditions` | Legal terms | Footer |
| `/privacy` | `PrivacyPolicy` | Privacy policy | Footer |
| `/sitemap` | `SitemapPage` | Visual site index | Footer |
| `/style-guide` | `StyleGuidePage` | Design system reference | Footer |
| `*` | `NotFoundPage` | 404 catch-all | N/A |

---

## 2. Planned Taxonomy Routes

### Portfolio

| Path | Component | Description |
|------|-----------|-------------|
| `/portfolio` | `PortfolioMainPage` | All portfolio items |
| `/portfolio/:slug` | `PortfolioResolver` | Single item or category resolver |
| `/portfolio/category/:slug` | `PortfolioCategoryPage` | Category archive |
| `/portfolio/tag/:slug` | `PortfolioTagPage` | Tag archive |

### Blog

| Path | Component | Description |
|------|-----------|-------------|
| `/blog` | `BlogPage` | All blog posts |
| `/blog/:slug` | `BlogPostPageRoute` | Single post |
| `/blog/category/:slug` | `BlogCategoryPage` | Category archive |
| `/blog/tag/:slug` | `BlogTagPage` | Tag archive |

### Videos

| Path | Component | Description |
|------|-----------|-------------|
| `/videos` | `VideosPage` | All videos |
| `/video/:slug` | `VideoDetailPage` | Single video |
| `/videos/category/:slug` | `VideoCategoryPage` | Category archive |
| `/videos/tag/:slug` | `VideoTagPage` | Tag archive |

### Podcasts

| Path | Component | Description |
|------|-----------|-------------|
| `/podcasts` | `PodcastsPage` | All episodes |
| `/podcast/:slug` | `PodcastDetailPage` | Single episode |
| `/podcasts/category/:slug` | `PodcastCategoryPage` | Category archive |

### Search

| Path | Component | Description |
|------|-----------|-------------|
| `/search` | `SearchResultsPage` | Global search results |
| `/search?q=neon&type=blog` | Same | Filtered search |

---

## 3. Navigation Hierarchy

```
Header (Main Nav)
  Home /
  About /about
  Portfolio /portfolio
  Blog /blog
  Videos /videos
  Contact /contact

Footer
  Home /
  About /about
  Portfolio /portfolio
  Blog /blog
  Videos /videos
  Contact /contact
  Podcasts /podcasts           (planned)
  Terms /terms
  Privacy /privacy
  Sitemap /sitemap
  Style Guide /style-guide

Sitemap Page
  Pages (all main pages)
  Portfolio Categories /portfolio/category/:slug
  Portfolio Tags /portfolio/tag/:slug
  Blog Categories /blog/category/:slug
  Blog Tags /blog/tag/:slug
  Blog Posts /blog/:slug
  Video Categories /videos/category/:slug
  Podcast Categories /podcasts/category/:slug
  Legal (terms, privacy)
```

---

## 4. Breadcrumb Patterns

| Route | Breadcrumb |
|-------|-----------|
| `/portfolio/category/uv-makeup` | Portfolio > UV Makeup |
| `/portfolio/tag/neon` | Portfolio > Tag: Neon |
| `/blog/category/tutorials` | Blog > Tutorials |
| `/blog/tag/festival-makeup` | Blog > Tag: Festival Makeup |
| `/blog/my-post-slug` | Blog > Post Title |
| `/video/my-video` | Videos > Video Title |
| `/podcast/intro-episode` | Podcasts > Episode Title |
| `/search?q=neon` | Search > "neon" |

---

## 5. URL Query Parameters

| Route | Parameter | Purpose |
|-------|-----------|---------|
| `/blog` | `?category=tutorials` | Pre-filter by category |
| `/search` | `?q=neon` | Search query |
| `/search` | `?type=blog` | Content type filter |
| `/search` | `?sort=recent` | Sort order |
| `/search` | `?category=tutorials` | Sub-filter |

---

## 6. Router Configuration

All routes are defined in `/routes.ts` using React Router's Data mode:

```tsx
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,   // Header + Footer shell
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      // ... all child routes
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
```

The `RootLayout` component wraps all pages with the persistent `Header` and `Footer`, rendering child routes via React Router's `<Outlet />`.

---

**Last Updated:** February 2026
