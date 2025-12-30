# Site Structure & Navigation Guide (Sitemap)

**Version:** 4.0.0  
**Last Updated:** January 2025  
**Purpose:** Define site structure, navigation, and routing

---

## 📚 Table of Contents

1. [Overview](#overview)
2. [Site Architecture](#site-architecture)
3. [Navigation Structure](#navigation-structure)
4. [Page Hierarchy](#page-hierarchy)
5. [URL Structure](#url-structure)
6. [Routing Implementation](#routing-implementation)
7. [Navigation Components](#navigation-components)
8. [SEO & Meta](#seo--meta)
9. [Breadcrumbs](#breadcrumbs)
10. [Mobile Navigation](#mobile-navigation)

---

## 🎯 Overview

### Site Type

**Single Page Application (SPA)** with client-side routing

**Technology:**
- React Router (client-side)
- State-based navigation
- Hash routing for GitHub Pages compatibility
- Scroll restoration

**Key Features:**
- ✅ Fast page transitions
- ✅ No full page reloads
- ✅ Persistent header/footer
- ✅ Deep linking support
- ✅ Browser back/forward support

---

## 🗺️ Site Architecture

### Visual Sitemap

```
┌─────────────────────────────────────────────────┐
│                   Home Page                      │
│              ashshaw.makeup                      │
│  • Hero with lightbox gallery                   │
│  • Featured work preview                        │
│  • Blog post preview                            │
│  • Call-to-action                               │
└────────┬────────────────────────────────────────┘
         │
    ─────┼────────────────────────────────
    │    │          │            │
    ▼    ▼          ▼            ▼
┌────────┐  ┌─────────┐  ┌──────────┐  ┌────────┐
│ About  │  │Portfolio│  │   Blog   │  │Contact │
│  Page  │  │  Page   │  │   Page   │  │(Footer)│
└────────┘  └────┬────┘  └────┬─────┘  └────────┘
                 │            │
                 │            │
         ┌───────┴────┐       │
         ▼            ▼       ▼
    ┌──────────┐  ┌──────┐  ┌──────────┐
    │Portfolio │  │Detail│  │ Blog     │
    │ Category │  │Page  │  │ Post     │
    │ Sections │  │      │  │ Detail   │
    └──────────┘  └──────┘  └──────────┘
         │
         ▼
    ┌──────────┐
    │Lightbox  │
    │  Modal   │
    └──────────┘
```

---

## 📄 Page Hierarchy

### Level 1: Primary Pages

All accessible from main navigation:

| Page | Route | Component | Description |
|------|-------|-----------|-------------|
| **Home** | `/` | `HomePage.tsx` | Landing page with hero, featured work, blog preview |
| **About** | `/about` | `AboutPage.tsx` | About Ash, journey, philosophy, skills |
| **Portfolio** | `/portfolio` | `PortfolioMainPage.tsx` | Complete portfolio gallery with categories |
| **Blog** | `/blog` | `BlogPage.tsx` | Blog listing with search, filters, pagination |

---

### Level 2: Detail Pages

Accessed from primary pages:

| Page | Route | Component | Parent | Description |
|------|-------|-----------|--------|-------------|
| **Blog Post** | `/blog/:slug` | `BlogPostPage.tsx` | Blog Page | Individual blog post detail |
| **Portfolio Detail** | `/portfolio/:id` | `PortfolioDetailPage.tsx` | Portfolio | Single portfolio entry (if implemented) |

---

### Level 3: Modals & Overlays

Not separate routes, triggered by interactions:

| Component | Trigger | Purpose |
|-----------|---------|---------|
| **Lightbox** | Click image | Full-screen image gallery |
| **Contact Form** | Footer | Contact form submission |
| **Mobile Menu** | Menu button | Mobile navigation |

---

## 🧭 Navigation Structure

### Primary Navigation

**Location:** Header (persistent across all pages)

**Menu Items:**
1. **Home** → `/`
2. **About** → `/about`
3. **Portfolio** → `/portfolio`
4. **Blog** → `/blog`

**Implementation:**
```typescript
// /components/common/Header.tsx
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' }
];
```

---

### Secondary Navigation

**Location:** Footer

**Links:**
- Social media (Instagram, Facebook, TikTok, LinkedIn, Email)
- Contact form (inline in footer)
- Scroll to top button

**Implementation:**
```typescript
// /data/mock/ui/social-links.ts
export const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: '...', icon: 'Instagram' },
  { platform: 'Facebook', url: '...', icon: 'Facebook' },
  // ...
];
```

---

### Contextual Navigation

**Blog Page:**
- Search bar
- Category filter
- Pagination (Previous / Next)

**Portfolio Page:**
- Category sections (scroll-based)
- Lightbox navigation (arrows, thumbnails)

**Blog Post:**
- Back to blog link
- Share buttons
- Related posts (if implemented)

---

## 🔗 URL Structure

### URL Patterns

**Homepage:**
```
https://ashshaw.makeup/
```

**Static Pages:**
```
https://ashshaw.makeup/about
https://ashshaw.makeup/portfolio
https://ashshaw.makeup/blog
```

**Dynamic Pages:**
```
https://ashshaw.makeup/blog/festival-makeup-survival-guide
https://ashshaw.makeup/portfolio/lost-paradise-thailand
```

**URL Parameters:**
```
https://ashshaw.makeup/blog?page=2
https://ashshaw.makeup/blog?category=makeup-tips
https://ashshaw.makeup/blog?search=festival
```

---

### URL Best Practices

**DO:**
- ✅ Use lowercase
- ✅ Use hyphens for spaces (`festival-makeup`)
- ✅ Keep URLs short and descriptive
- ✅ Use slugs for readability

**DON'T:**
- ❌ Use underscores (`festival_makeup`)
- ❌ Use spaces or special characters
- ❌ Use IDs in URLs (`/blog/123`)
- ❌ Make URLs too long

---

## ⚙️ Routing Implementation

### Client-Side Routing

**Technology:** React state-based routing (no React Router library)

**Implementation:**
```typescript
// /App.tsx
const [currentPage, setCurrentPage] = useState<string>('home');
const [blogPostSlug, setBlogPostSlug] = useState<string | null>(null);
const [portfolioId, setPortfolioId] = useState<string | null>(null);

// Navigation function
const navigateTo = (page: string, slug?: string) => {
  setCurrentPage(page);
  if (slug) {
    if (page === 'blog-post') setBlogPostSlug(slug);
    if (page === 'portfolio-detail') setPortfolioId(slug);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

---

### Page Rendering Logic

```typescript
// /App.tsx
function renderPage() {
  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'about':
      return <AboutPage />;
    case 'portfolio':
      return <PortfolioMainPage />;
    case 'blog':
      return <BlogPage onPostClick={(slug) => navigateTo('blog-post', slug)} />;
    case 'blog-post':
      return <BlogPostPage slug={blogPostSlug} onBack={() => navigateTo('blog')} />;
    default:
      return <HomePage />;
  }
}
```

---

### Deep Linking Support

**Hash-based routing** for GitHub Pages compatibility:

```typescript
// URL: https://ashshaw.makeup/#/blog/festival-makeup

// Parse hash on load
useEffect(() => {
  const hash = window.location.hash;
  if (hash.startsWith('#/blog/')) {
    const slug = hash.replace('#/blog/', '');
    navigateTo('blog-post', slug);
  } else if (hash === '#/about') {
    navigateTo('about');
  }
  // ... more routes
}, []);
```

---

### Scroll Restoration

**Scroll to top** on navigation:

```typescript
const navigateTo = (page: string) => {
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

**Preserve scroll position** within page:

```typescript
// For blog pagination, maintain scroll position
const handlePageChange = (newPage: number) => {
  setCurrentPage(newPage);
  // Don't scroll to top
};
```

---

## 🧩 Navigation Components

### Header Component

**File:** `/components/common/Header.tsx`

**Features:**
- Logo (links to home)
- Primary navigation menu
- Mobile menu toggle
- Active page highlighting
- Sticky positioning

**Example:**
```typescript
export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
      <Logo onClick={() => onNavigate('home')} />
      <nav>
        {navItems.map(item => (
          <NavLink
            key={item.path}
            label={item.label}
            active={currentPage === item.path}
            onClick={() => onNavigate(item.path)}
          />
        ))}
      </nav>
      <MobileMenuToggle />
    </header>
  );
}
```

---

### Mobile Menu Component

**File:** `/components/common/MobileMenu.tsx`

**Features:**
- Full-screen overlay
- Animated slide-in
- Touch-friendly buttons
- Close on navigation

**Example:**
```typescript
export function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      className="fixed inset-0 z-50 bg-white"
    >
      <button onClick={onClose} aria-label="Close menu">
        <X className="w-6 h-6" />
      </button>
      <nav>
        {navItems.map(item => (
          <button
            key={item.path}
            onClick={() => {
              onNavigate(item.path);
              onClose();
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </motion.div>
  );
}
```

---

### Scroll to Top Component

**File:** `/components/ui/ScrollToTop.tsx`

**Features:**
- Floating button (bottom-right)
- Appears after scrolling down
- Smooth scroll animation
- Accessible

**Example:**
```typescript
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  ) : null;
}
```

---

## 🏷️ SEO & Meta Tags

### Page Titles

**Format:** `[Page Title] | Ash Shaw Makeup Artist`

**Examples:**
```typescript
const pageTitles = {
  home: 'Ash Shaw | Makeup Artist & Creative Spirit',
  about: 'About | Ash Shaw Makeup Artist',
  portfolio: 'Portfolio | Ash Shaw Makeup Artist',
  blog: 'Blog | Ash Shaw Makeup Artist',
  'blog-post': '[Post Title] | Ash Shaw Makeup Artist'
};
```

---

### Meta Descriptions

**Homepage:**
```html
<meta name="description" content="Ash Shaw is a professional makeup artist specializing in festival makeup, creative looks, and travel beauty. Explore the portfolio and read makeup tips." />
```

**About Page:**
```html
<meta name="description" content="Meet Ash Shaw, a passionate makeup artist with a love for color, travel, and creative expression. Learn about the journey and philosophy." />
```

**Portfolio:**
```html
<meta name="description" content="Browse Ash Shaw's complete portfolio of makeup artistry including festival looks, creative makeup, and nail art from around the world." />
```

**Blog:**
```html
<meta name="description" content="Makeup tips, tutorials, and stories from Ash Shaw. Learn festival makeup techniques, product reviews, and travel beauty insights." />
```

---

### Implementation

```typescript
// /App.tsx
useEffect(() => {
  document.title = pageTitles[currentPage] || pageTitles.home;
}, [currentPage]);
```

---

## 🍞 Breadcrumbs

### Breadcrumb Structure

**Blog Post Example:**
```
Home > Blog > Festival Makeup Survival Guide
```

**Portfolio Detail Example:**
```
Home > Portfolio > Thailand > Lost Paradise
```

---

### Implementation

```typescript
export function Breadcrumbs({ path }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex gap-2 text-sm text-gray-600">
      <Link to="/">Home</Link>
      <span>/</span>
      {path.map((item, index) => (
        <React.Fragment key={index}>
          <Link to={item.url}>{item.label}</Link>
          {index < path.length - 1 && <span>/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}
```

---

## 📱 Mobile Navigation

### Mobile Menu Behavior

**Trigger:** Hamburger menu button (≤768px)

**Animation:**
- Slide from right
- Full-screen overlay
- Backdrop blur

**Menu Items:**
- Same as desktop navigation
- Larger touch targets (min 44px)
- Vertical stack layout

**Close Triggers:**
- Close button (X)
- Select menu item
- Swipe right
- Back button

---

### Mobile-Specific Navigation

**Features:**
- ✅ Touch-friendly spacing
- ✅ Thumb-reachable areas
- ✅ Swipe gestures
- ✅ Reduced motion support

**Example:**
```typescript
// Large touch targets for mobile
<button className="w-full py-4 text-left text-lg">
  Portfolio
</button>
```

---

## 🔄 Navigation State Management

### State Variables

```typescript
// /App.tsx
const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'portfolio' | 'blog' | 'blog-post'>('home');
const [blogPostSlug, setBlogPostSlug] = useState<string | null>(null);
const [portfolioId, setPortfolioId] = useState<string | null>(null);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

---

### Navigation Props Pattern

**Pass navigation handlers down:**
```typescript
<Header
  currentPage={currentPage}
  onNavigate={navigateTo}
  mobileMenuOpen={mobileMenuOpen}
  onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
/>

<BlogPage
  onPostClick={(slug) => navigateTo('blog-post', slug)}
  onCategoryClick={(category) => navigateTo('blog', { category })}
/>
```

---

## 🎨 Active State Styling

### Header Active Link

```typescript
<a
  className={`
    px-4 py-2 transition-colors
    ${isActive 
      ? 'text-gradient-pink-purple-blue font-semibold' 
      : 'text-gray-700 hover:text-pink-500'
    }
  `}
>
  {label}
</a>
```

---

### Page-Specific Highlighting

**Portfolio sections:**
```typescript
// Highlight active category based on scroll position
const [activeSection, setActiveSection] = useState('');

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe sections
}, []);
```

---

## 📊 Navigation Analytics

### Track Navigation Events

```typescript
const navigateTo = (page: string, slug?: string) => {
  // Navigation logic
  setCurrentPage(page);
  
  // Analytics tracking
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageTitles[page],
      page_location: window.location.href,
      page_path: `/${page}${slug ? `/${slug}` : ''}`
    });
  }
};
```

---

## ✅ Navigation Checklist

### Accessibility

- [ ] All navigation has `aria-label`
- [ ] Active states clearly indicated
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus management on page change
- [ ] Skip to main content link
- [ ] Screen reader announcements

### Performance

- [ ] No full page reloads
- [ ] Smooth transitions
- [ ] Instant navigation feedback
- [ ] Lazy load pages (if needed)
- [ ] Prefetch on hover (if needed)

### User Experience

- [ ] Clear visual hierarchy
- [ ] Consistent navigation position
- [ ] Breadcrumbs on detail pages
- [ ] Back button functionality
- [ ] Mobile-friendly touch targets
- [ ] Loading states for transitions

---

## 🗺️ Sitemap.xml

### XML Sitemap Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ashshaw.makeup/</loc>
    <lastmod>2025-01-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ashshaw.makeup/about</loc>
    <lastmod>2025-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ashshaw.makeup/portfolio</loc>
    <lastmod>2025-01-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ashshaw.makeup/blog</loc>
    <lastmod>2025-01-30</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Dynamic blog posts -->
  <url>
    <loc>https://ashshaw.makeup/blog/festival-makeup-survival-guide</loc>
    <lastmod>2024-06-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

## 🔗 Related Documentation

- **[FILE_STRUCTURE.md](./FILE_STRUCTURE.md)** - File organization
- **[Guidelines.md](./Guidelines.md)** - Main guidelines
- **[overview-components.md](./overview-components.md)** - Component architecture
- **[Header.md](./components/Header.md)** - Header component details

---

**Version:** 4.0.0  
**Last Updated:** January 2025  
**Maintained by:** Ash Shaw Portfolio Team

**Need help with navigation?** Check the routing implementation in `/App.tsx` or refer to Header/MobileMenu components.
