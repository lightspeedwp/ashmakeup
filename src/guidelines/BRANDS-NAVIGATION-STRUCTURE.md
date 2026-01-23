# Brands Navigation Structure - Visual Reference

## 🗂️ Site Navigation Map

```
┌─────────────────────────────────────────────────────────────────┐
│                    HEADER NAVIGATION                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  [Logo] Home  About  Portfolio  Blog  Contact  [Brands ▼]  🌙   │
│                                                         └────┐   │
│                         Mega Menu Dropdown                  │   │
│                         ┌───────────────────────┐           │   │
│                         │  All Brands           │◄──────────┘   │
│                         ├───────────────────────┤               │
│                         │  ─────────────────    │               │
│                         │  Local News          │               │
│                         │  Sport               │               │
│                         │  Magazines           │               │
│                         │  Digital             │               │
│                         └───────────────────────┘               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📱 Mobile Navigation

```
┌──────────────────────────┐
│    MOBILE MENU           │
├──────────────────────────┤
│                          │
│  [Logo]         [✕]      │
│                          │
│                          │
│     Home                 │
│     About                │
│     Portfolio            │
│     Blog                 │
│     Contact              │
│     Brands      ⭐ NEW   │
│                          │
│                          │
└──────────────────────────┘
```

---

## 🌳 Brands Page Hierarchy

```
📄 Brands Landing Page
   ├── 🏢 Local News
   │     └── /brands-local-news
   │
   ├── ⚽ Sport
   │     └── /brands-sport
   │
   ├── 📖 Magazines
   │     └── /brands-magazines
   │
   └── 💻 Digital
         └── /brands-digital
```

---

## 🎨 Brands Landing Page Layout

```
┌───────────────────────────────────────────────────────────┐
│                                                            │
│               Brand Collaborations                         │
│          [Subtitle describing categories]                  │
│                                                            │
│  ┌────────────────────┐    ┌────────────────────┐        │
│  │   [📺 Icon]        │    │   [⚽ Icon]         │        │
│  │   Local News       │    │   Sport            │        │
│  │   Description...   │    │   Description...   │        │
│  │   [Explore →]      │    │   [Explore →]      │        │
│  └────────────────────┘    └────────────────────┘        │
│                                                            │
│  ┌────────────────────┐    ┌────────────────────┐        │
│  │   [📖 Icon]        │    │   [💻 Icon]         │        │
│  │   Magazines        │    │   Digital          │        │
│  │   Description...   │    │   Description...   │        │
│  │   [Explore →]      │    │   [Explore →]      │        │
│  └────────────────────┘    └────────────────────┘        │
│                                                            │
└───────────────────────────────────────────────────────────┘
```

**Responsive Behavior:**
- **Mobile (< 768px):** Single column stack
- **Tablet+ (≥ 768px):** 2-column grid

---

## 📄 Sub-Page Layout (e.g., Local News)

```
┌───────────────────────────────────────────────────────────┐
│  [← Back to Brands]                                        │
│                                                            │
│                    Local News                              │
│           [Description paragraph]                          │
│                                                            │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐           │
│  │ [Icon]   │    │ [Icon]   │    │ [Icon]   │           │
│  │ Feature 1│    │ Feature 2│    │ Feature 3│           │
│  │ Details  │    │ Details  │    │ Details  │           │
│  └──────────┘    └──────────┘    └──────────┘           │
│                                                            │
│            [View Portfolio Examples]                       │
│                                                            │
└───────────────────────────────────────────────────────────┘
```

**Responsive Behavior:**
- **Mobile (< 768px):** Single column stack
- **Tablet+ (≥ 768px):** 3-column grid

---

## 🎯 User Flow Diagrams

### Desktop User Journey

```
Header Navigation
       ↓
   Hover "Brands"
       ↓
  Dropdown Opens
       ↓
   [Select Category or "All Brands"]
       ↓
┌──────────┴───────────┐
│                      │
↓                      ↓
Brands Landing      Category Page
                    (Local News, Sport, etc.)
      │                    │
      └─────────┬──────────┘
                ↓
       [View Portfolio Examples]
                ↓
         Portfolio Page
         (Filtered Content)
```

### Mobile User Journey

```
Header Burger Menu
       ↓
   Tap to Open
       ↓
   Mobile Menu
       ↓
   Tap "Brands"
       ↓
 Brands Landing Page
       ↓
  Tap Category Card
       ↓
  Category Page
       ↓
 [View Portfolio]
       ↓
Portfolio Page
```

---

## 🔗 URL Structure

```
Website Domain
├── / (Home)
├── /about (About)
├── /portfolio (Portfolio)
├── /blog (Blog)
├── /contact (Contact)
└── /brands (Brands Landing) ⭐ NEW
    ├── /brands-local-news ⭐ NEW
    ├── /brands-sport ⭐ NEW
    ├── /brands-magazines ⭐ NEW
    └── /brands-digital ⭐ NEW
```

**Note:** This is a client-side routed SPA using React state, not actual file paths.  
The URLs shown represent the `currentPage` state values.

---

## 🎨 Visual Design Elements

### Dropdown Menu Styling

```
┌─────────────────────────┐
│  All Brands             │  ← Slightly bolder
├─────────────────────────┤
│  ─────────────────      │  ← Divider
│  Local News             │
│  Sports broadcasting... │  ← Subtitle
│                         │
│  Sport                  │
│  Athletes & events...   │
│                         │
│  Magazines              │
│  Editorial shoots...    │
│                         │
│  Digital                │
│  Content creators...    │
└─────────────────────────┘
```

**Hover States:**
- Background: Light gray (light mode) / Purple-800 (dark mode)
- Animation: Smooth 200ms transition
- Cursor: Pointer

### Category Card Styling

```
┌────────────────────┐
│   ┌──────────┐     │
│   │  [Icon]  │     │  ← Gradient circle icon
│   └──────────┘     │
│                    │
│   Category Name    │  ← H2 with gradient text
│                    │
│   Description...   │  ← Body text
│   Description...   │
│                    │
│   Explore → │      │  ← CTA with arrow
└────────────────────┘
```

**Hover States:**
- Transform: translateY(-4px)
- Shadow: Elevated shadow
- Border: Pink-500 (light) / Purple-500 (dark)
- CTA Arrow: Moves right

---

## 📐 Spacing & Sizing

### Breakpoint Grid Behavior

| Breakpoint | Width | Brands Grid | Features Grid |
|------------|-------|-------------|---------------|
| Mobile Compact | 320px | 1 column | 1 column |
| Mobile | 420px | 1 column | 1 column |
| Tablet Portrait | 768px | **2 columns** | **3 columns** |
| Tablet Landscape | 1024px | 2 columns | 3 columns |
| Desktop | 1440px+ | 2 columns | 3 columns |

### Container Padding

| Viewport | Horizontal Padding |
|----------|-------------------|
| 320px | 16px |
| 768px | 20px |
| 1024px | 24px |
| 1440px+ | 32px |

**CSS Implementation:** `clamp(1rem, 2vw, 2rem)`

---

## 🎭 Animation Timings

| Element | Duration | Easing |
|---------|----------|--------|
| Dropdown fade-in | 200ms | ease-out |
| Card hover | 300ms | ease |
| CTA arrow slide | 300ms | ease |
| ChevronDown rotate | 200ms | ease |
| Page transitions | 300ms | ease-in-out |

---

## 🧩 Component Dependencies

```
BrandsPage
├── lucide-react (ArrowRight)
└── Reuses: text gradients, buttons, layouts

BrandsLocalNewsPage
├── lucide-react (ArrowLeft, Tv, Users, Clock)
└── Reuses: back button, feature cards, CTA

BrandsSportPage
├── lucide-react (ArrowLeft, Zap, Droplet, Sun)
└── Reuses: back button, feature cards, CTA

BrandsMagazinesPage
├── lucide-react (ArrowLeft, Sparkles, Camera, Palette)
└── Reuses: back button, feature cards, CTA

BrandsDigitalPage
├── lucide-react (ArrowLeft, Video, Monitor, Wifi)
└── Reuses: back button, feature cards, CTA

Header
└── lucide-react (ChevronDown) ⭐ NEW

MobileMenu
└── No new dependencies
```

---

## 📊 State Management

### App.tsx State Values

```typescript
type PageState = 
  | "home"
  | "about"
  | "portfolio"
  | "blog"
  | "blog-post"
  | "contact"
  | "brands"             // ⭐ NEW
  | "brands-local-news"  // ⭐ NEW
  | "brands-sport"       // ⭐ NEW
  | "brands-magazines"   // ⭐ NEW
  | "brands-digital";    // ⭐ NEW
```

### Active State Detection

```typescript
// Desktop dropdown
currentPage.startsWith("brands") ? "active" : "inactive"

// Mobile menu
currentPage.startsWith("brands") ? "active" : "inactive"

// Exact page match
currentPage === "brands-local-news" ? "active" : "inactive"
```

---

This visual reference provides a comprehensive overview of the Brands navigation structure, layouts, and user experience flows!
