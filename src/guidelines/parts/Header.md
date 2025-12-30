# Header Part Guidelines

Site-wide navigation header with logo and menu.

**File:** `/components/common/Header.tsx`  
**WordPress Equivalent:** `header.html` template part  
**Used In:** All pages (via App.tsx)

---

## Purpose

The Header is a **global navigation part** that appears on every page. It combines:
- Brand logo (links to homepage)
- Desktop navigation menu
- Mobile menu toggle button
- Fixed positioning on scroll
- Responsive behavior

---

## Part Structure

```tsx
<header className="[header-container]">
  <div className="[inner-container]">
    <div className="[content-wrapper]">
      {/* Logo */}
      <Logo
        size="header"
        onClick={() => setCurrentPage('home')}
      />
      
      {/* Desktop Navigation */}
      <nav className="[desktop-nav]">
        <ul role="menubar">
          <li role="none">
            <NavLink
              href="/"
              active={currentPage === 'home'}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </NavLink>
          </li>
          {/* More nav items */}
        </ul>
      </nav>
      
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="[mobile-toggle]"
        aria-label="Open navigation menu"
      >
        <Menu className="w-6 h-6" />
      </button>
    </div>
  </div>
  
  {/* Mobile Menu */}
  <MobileMenu
    isOpen={isMobileMenuOpen}
    onClose={() => setIsMobileMenuOpen(false)}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
  />
</header>
```

---

## Container Styles

### Header Container
```tsx
className="
  fixed top-0 left-0 right-0                       // Fixed at top
  z-50                                             // Above all content
  bg-white                                         // White background
  shadow-lg                                        // Elevation shadow
  transition-transform duration-300                // Smooth transitions
"
```

### Inner Container
```tsx
className="
  max-w-7xl                                        // 1280px max-width
  mx-auto                                          // Center horizontally
  px-fluid-md                                      // clamp(1rem, 0.6rem + 2vw, 2rem)
  py-4                                             // 16px vertical padding
"
```

### Content Wrapper
```tsx
className="
  flex                                             // Flexbox layout
  items-center                                     // Vertical center
  justify-between                                  // Space between logo and nav
"
```

---

## Visual Elements

### 1. Logo

```tsx
<Logo
  size="header"                                    // 'header' size variant
  onClick={() => handleNavigateHome()}
  className="
    cursor-pointer                                 // Indicate clickable
    transition-transform duration-300 
    hover:scale-105                                // Subtle scale on hover
  "
/>
```

**Logo Sizes:**
- Mobile: ~100px width
- Desktop: ~120px width

**Logo Behavior:**
- Clickable → Navigate to homepage
- Maintains aspect ratio
- Accessible via keyboard (Enter/Space)

**Guideline:** [components/Logo.md](../components/Logo.md)

---

### 2. Desktop Navigation

#### Nav Container
```tsx
<nav
  className="
    hidden md:block                                // Desktop only
  "
  aria-label="Main navigation"
>
  <ul
    role="menubar"
    className="
      flex                                         // Horizontal layout
      items-center                                 // Vertical center
      gap-6                                        // 24px between items
    "
  >
```

#### Nav Link (Active)
```tsx
<NavLink
  active={true}
  className="
    text-base                                      // 16px
    font-body 
    font-medium 
    text-gradient-pink-purple-blue                 // Active: gradient text
    hover:opacity-80                               // Hover effect
    transition-all duration-300 
    focus:outline-none 
    focus:ring-2 focus:ring-pink-500 
    focus:ring-offset-2 
    rounded-md 
    px-2 py-1
  "
>
  Home
</NavLink>
```

#### Nav Link (Inactive)
```tsx
<NavLink
  active={false}
  className="
    text-base 
    font-body 
    font-medium 
    text-gray-700                                  // Inactive: gray text
    hover:text-gradient-pink-purple-blue           // Hover: gradient
    transition-all duration-300 
    focus:outline-none 
    focus:ring-2 focus:ring-pink-500 
    focus:ring-offset-2 
    rounded-md 
    px-2 py-1
  "
>
  About
</NavLink>
```

**Nav Items:**
1. Home
2. About
3. Portfolio
4. Blog

---

### 3. Mobile Menu Toggle

```tsx
<button
  onClick={() => setIsMobileMenuOpen(true)}
  className="
    md:hidden                                      // Mobile only
    w-10 h-10                                      // 40×40px tap target
    flex items-center justify-center 
    rounded-lg 
    text-gray-700 
    hover:bg-gray-100                              // Hover background
    transition-colors duration-300 
    focus:outline-none 
    focus:ring-2 focus:ring-pink-500 
    focus:ring-offset-2
  "
  aria-label="Open navigation menu"
  aria-expanded={isMobileMenuOpen}
>
  <Menu className="w-6 h-6" />
</button>
```

---

## Interactive Features

### 1. Navigation

```typescript
const handleNavigate = (page: string) => {
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

### 2. Mobile Menu Toggle

```typescript
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// Close on navigation
useEffect(() => {
  setIsMobileMenuOpen(false);
}, [currentPage]);

// Close on outside click
useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (isMobileMenuOpen && !menuRef.current?.contains(e.target)) {
      setIsMobileMenuOpen(false);
    }
  };
  
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isMobileMenuOpen]);
```

### 3. Scroll Behavior (Optional)

Hide header on scroll down, show on scroll up:

```typescript
const [isVisible, setIsVisible] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down - hide header
      setIsVisible(false);
    } else {
      // Scrolling up - show header
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);
```

Apply transform:
```tsx
<header
  className={`
    fixed top-0 
    transition-transform duration-300
    ${isVisible ? 'translate-y-0' : '-translate-y-full'}
  `}
>
```

---

## Accessibility

### Semantic HTML
```tsx
<header role="banner">
  <nav aria-label="Main navigation">
    <ul role="menubar">
      <li role="none">
        <a role="menuitem">Home</a>
      </li>
    </ul>
  </nav>
</header>
```

### ARIA Attributes
```tsx
// Mobile toggle
<button
  aria-label="Open navigation menu"
  aria-expanded={isMobileMenuOpen}
  aria-controls="mobile-menu"
>

// Nav items
<NavLink
  aria-current={isActive ? 'page' : undefined}
>
```

### Keyboard Navigation
- Tab through navigation items
- Enter/Space to activate links
- Escape to close mobile menu
- Focus visible on all interactive elements

---

## Responsive Breakpoints

### Mobile (< 768px)
- Logo only + hamburger icon
- Desktop nav hidden
- Mobile menu drawer available
- Compact padding

### Tablet (768px - 1024px)
- Logo + desktop nav visible
- Hamburger hidden
- Standard spacing

### Desktop (1024px+)
- Full header layout
- Enhanced hover effects
- Larger spacing

---

## Typography & Sizing

| Element | Size | Weight |
|---------|------|--------|
| Nav Links | 16px | Medium (500) |
| Logo | ~120px width | - |
| Mobile Icon | 24×24px | - |

---

## Color Palette

### Background
```css
bg-white                           /* Header background */
shadow-lg                          /* Elevation shadow */
```

### Text Colors
```css
text-gray-700                      /* Inactive nav links */
text-gradient-pink-purple-blue     /* Active nav links */
hover:text-gradient                /* Hover state */
```

### Interactive States
```css
hover:bg-gray-100                  /* Mobile toggle hover */
focus:ring-pink-500                /* Focus ring */
```

---

## Best Practices

### 1. Fixed Positioning
```tsx
// ✅ Keep header fixed at top
<header className="fixed top-0 left-0 right-0 z-50">
```

### 2. Active State Management
```tsx
// ✅ Highlight current page
<NavLink active={currentPage === 'home'}>
  Home
</NavLink>
```

### 3. Close Menu on Navigation
```tsx
// ✅ Auto-close mobile menu
useEffect(() => {
  setIsMobileMenuOpen(false);
}, [currentPage]);
```

### 4. Accessibility
```tsx
// ✅ Proper ARIA labels
<button
  aria-label="Open navigation menu"
  aria-expanded={isOpen}
>
```

---

## Related Documentation

- **[overview-parts.md](../overview-parts.md)** - Parts system
- **[Logo.md](../components/Logo.md)** - Logo component
- **[MobileMenu.md](./MobileMenu.md)** - Mobile menu drawer
- **[design-tokens/colors.md](../design-tokens/colors.md)** - Color system

---

**Last Updated:** January 2025  
**Version:** 3.2.0
