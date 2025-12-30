# MobileMenu Guidelines

Full-screen mobile navigation overlay with focus trapping and brand styling.

**File:** `/components/common/MobileMenu.tsx`  
**WordPress Equivalent:** Custom mobile navigation (no direct equivalent)  
**Used In:** Header component (mobile viewports only)

---

## Purpose

The MobileMenu is a **conditional template part** that provides mobile-specific navigation through:
- Full-screen overlay with blur backdrop
- Focus trapping for accessibility
- Touch-optimized button sizes
- Smooth animations and transitions
- Screen reader announcements
- Brand-consistent gradient styling

---

## MobileMenu Structure

```tsx
{isOpen && (
  <div id="mobile-menu" role="dialog" className="[overlay-wrapper]">
    {/* Backdrop Layer */}
    <div className="[backdrop]" onClick={onClose} />
    
    {/* Menu Content */}
    <div className="[menu-container]">
      {/* Screen Reader Title */}
      <h2 className="sr-only">Mobile Navigation Menu</h2>
      
      {/* Header Section */}
      <div className="[header-section]">
        {/* Close Button (Absolute) */}
        <button className="[close-button]">X</button>
        
        {/* Logo (Centered) */}
        <div className="[logo-wrapper]">
          <Logo size="mobile-sm" onClick={...} />
        </div>
      </div>
      
      {/* Navigation Items (Centered) */}
      <div className="[nav-wrapper]">
        <nav role="menu">
          <button role="menuitem">About</button>
          <button role="menuitem">Portfolio</button>
          <button role="menuitem">Blog</button>
          <button role="menuitem">Contact</button>
        </nav>
      </div>
      
      {/* Decorative Elements */}
      <div className="[decorative-orbs]" aria-hidden="true" />
    </div>
  </div>
)}
```

---

## Container Styles

### Overlay Wrapper
```tsx
className="
  fixed inset-0                              // Full viewport coverage
  z-50                                       // Above all other content
  md:hidden                                  // Hidden on desktop (768px+)
"
id="mobile-menu"
role="dialog"                                // ARIA dialog role
aria-modal="true"                            // Modal behavior
aria-labelledby="mobile-menu-title"
```

**Why `md:hidden`?**
- Only shown on mobile/tablet viewports
- Desktop uses standard header navigation
- Prevents unnecessary rendering on large screens

### Backdrop
```tsx
className="
  absolute inset-0                           // Cover entire overlay
  bg-gradient-to-br from-pink-500/20 
    via-purple-500/20 to-blue-500/20        // Subtle brand gradient
  backdrop-blur-sm                           // Blur background content
"
onClick={onClose}                            // Click to close
aria-hidden="true"                           // Decorative only
```

**Why blur?**
- Provides visual separation from page content
- Reduces distraction
- Maintains brand aesthetic

### Menu Container
```tsx
className="
  relative                                   // Position context for decorations
  w-full h-full                              // Full overlay size
  bg-gradient-to-br from-white 
    via-pink-50 to-purple-50                // Gradient background
  flex flex-col                              // Vertical stacking
"
```

---

## Visual Elements

### 1. Header Section with Close Button

#### Container
```tsx
<div className="
  relative                                   // Position context for close button
  p-6 pt-8                                   // Padding
">
```

#### Close Button (Absolute Positioning)
```tsx
<button
  className="
    absolute top-6 right-6                   // Top-right corner
    flex flex-col justify-center items-center
    w-10 h-10                                // Touch-friendly size
    focus:outline-none 
    focus:ring-2 focus:ring-pink-500 
    focus:ring-offset-2 
    rounded-md p-1
  "
  onClick={onClose}
  aria-label="Close mobile menu"
>
  {/* Animated X icon using spans */}
  <span className="block w-3 h-0.5 bg-gray-700 rotate-45 translate-y-1.5" />
  <span className="block w-3 h-0.5 bg-gray-700 opacity-0" />
  <span className="block w-3 h-0.5 bg-gray-700 -rotate-45 -translate-y-1.5" />
</button>
```

**Close Icon Structure:**
- Three horizontal lines (spans)
- First line: rotated 45deg, moved down
- Second line: hidden (opacity-0)
- Third line: rotated -45deg, moved up
- Result: X shape

#### Logo (Centered)
```tsx
<div className="
  flex justify-center                        // Center logo
  pt-8                                       // Space from top
">
  <button
    onClick={() => onNavigation("home")}
    className="
      focus:outline-none 
      focus:ring-2 focus:ring-pink-500 
      focus:ring-offset-2 
      rounded-md p-2
    "
    aria-label="Go to home page"
  >
    <Logo size="mobile-sm" />                // Half-size logo
  </button>
</div>
```

**Why `mobile-sm` size?**
- Smaller logo prevents overlap with close button
- Better visual balance on mobile screens
- Maintains brand recognition

---

### 2. Navigation Items (Centered)

#### Wrapper
```tsx
<div className="
  flex-1                                     // Take remaining space
  flex items-center justify-center           // Center content
">
```

#### Navigation Menu
```tsx
<nav 
  className="
    flex flex-col                            // Vertical stacking
    items-center                             // Center items
    space-y-8                                // 2rem gap between items
  "
  role="menu"
  aria-label="Mobile navigation"
>
```

#### Navigation Buttons
```tsx
<button
  onClick={() => onNavigation("about")}
  className={`
    text-fluid-3xl sm:text-fluid-4xl         // Large, readable text
    font-heading                             // Playfair Display
    font-semibold 
    transition-all duration-300 
    transform hover:scale-110                // Hover animation
    focus:outline-none 
    focus:ring-2 focus:ring-pink-500 
    focus:ring-offset-4                      // Larger offset for mobile
    rounded-md 
    px-4 py-2                                // Touch-friendly padding
    ${currentPage === "about"
      ? "text-gradient-pink-purple-blue"     // Active state
      : "text-gray-800 hover:text-gradient-pink-purple-blue"
    }
  `}
  role="menuitem"
  aria-current={currentPage === "about" ? "page" : undefined}
>
  About
</button>
```

**Key Features:**
- Large text for mobile readability
- Touch-friendly padding (minimum 44px height)
- Scale animation on hover
- Active state with gradient text
- ARIA current page indicator

**Navigation Items:**
1. **About** - About page
2. **Portfolio** - Portfolio page
3. **Blog** - Blog page
4. **Contact** - Scroll to contact section on home

---

### 3. Decorative Orbs

Three animated gradient orbs positioned around the menu:

```tsx
{/* Bottom-left orb */}
<div className="absolute bottom-20 left-8">
  <div className="
    w-16 h-16 sm:w-24 sm:h-24                // Responsive sizing
    bg-gradient-to-br from-pink-300 to-purple-400
    rounded-full 
    opacity-20 
    animate-pulse                            // Subtle animation
  " 
    aria-hidden="true" 
  />
</div>

{/* Bottom-right orb */}
<div className="absolute bottom-32 right-8">
  <div className="
    w-12 h-12 sm:w-20 sm:h-20
    bg-gradient-to-br from-blue-300 to-teal-400
    rounded-full 
    opacity-25 
    animate-pulse delay-1000                 // 1s delay
  " 
    aria-hidden="true" 
  />
</div>

{/* Right-side orb */}
<div className="absolute top-1/3 right-12">
  <div className="
    w-8 h-8 sm:w-12 sm:h-12
    bg-gradient-to-br from-yellow-300 to-orange-400
    rounded-full 
    opacity-20 
    animate-pulse delay-2000                 // 2s delay
  " 
    aria-hidden="true" 
  />
</div>
```

**Purpose:** Add visual interest without interfering with navigation

---

## Interactive Features

### Focus Management

```tsx
const firstFocusableRef = useRef<HTMLButtonElement>(null);

useEffect(() => {
  if (isOpen) {
    // Focus first element (close button) when menu opens
    firstFocusableRef.current?.focus();
    
    // Prevent body scroll while menu is open
    document.body.style.overflow = "hidden";
  } else {
    // Restore body scroll when menu closes
    document.body.style.overflow = "unset";
  }
  
  return () => {
    document.body.style.overflow = "unset";
  };
}, [isOpen]);
```

**Features:**
- Auto-focus close button when menu opens
- Prevent page scroll while menu is open
- Restore scroll when menu closes
- Cleanup on unmount

### Focus Trapping

```tsx
useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (!isOpen) return;

    // Close on Escape
    if (event.key === "Escape") {
      onClose();
    }

    // Tab focus trapping
    if (event.key === "Tab" && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      // Shift+Tab on first element → focus last
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
      // Tab on last element → focus first
      else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  };

  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, [isOpen, onClose]);
```

**Features:**
- Escape key closes menu
- Tab cycles through focusable elements
- Shift+Tab cycles backwards
- Focus trapped within menu

### Backdrop Click to Close

```tsx
<div 
  className="[backdrop-styles]"
  onClick={onClose}                          // Click backdrop to close
  aria-hidden="true"                         // Decorative only
/>
```

---

## Responsive Breakpoints

### Mobile (<640px)
- Orbs: 64×64px, 48×48px, 32×32px
- Text: `text-fluid-3xl` (2rem base)
- Logo: `mobile-sm` size
- Close button: 40×40px
- Spacing: space-y-8 (2rem)

### Tablet (640px - 768px)
- Orbs: 96×96px, 80×80px, 48×48px
- Text: `text-fluid-4xl` (2.5rem)
- Logo: `mobile-sm` size
- Same layout as mobile

### Desktop (768px+)
- **Component hidden** (`md:hidden`)
- Desktop header navigation used instead

---

## Accessibility

### ARIA Roles and Labels
```tsx
// Dialog role for modal behavior
<div role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title">

// Hidden title for screen readers
<h2 id="mobile-menu-title" className="sr-only">
  Mobile Navigation Menu
</h2>

// Menu role for navigation
<nav role="menu" aria-label="Mobile navigation">

// Menu item roles
<button role="menuitem" aria-current={currentPage === "about" ? "page" : undefined}>
```

### Keyboard Navigation
- **Tab** - Move to next focusable element
- **Shift+Tab** - Move to previous focusable element
- **Enter/Space** - Activate button
- **Escape** - Close menu

### Screen Reader Support
- Hidden title announces "Mobile Navigation Menu"
- Current page indicated with `aria-current="page"`
- All buttons have descriptive labels
- Decorative elements hidden with `aria-hidden="true"`

### Focus Management
- Auto-focus close button on open
- Focus trapping within menu
- Return focus to menu button on close (handled by Header)

---

## Typography Scale

| Element | Class | Size (Mobile → Tablet) |
|---------|-------|----------------------|
| Nav Buttons | `text-fluid-3xl sm:text-fluid-4xl` | 32px → 40px |
| Logo | `mobile-sm` size | Scaled for mobile |

---

## Color Palette

### Background
```css
/* Menu container */
bg-gradient-to-br from-white via-pink-50 to-purple-50

/* Backdrop */
bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20
backdrop-blur-sm
```

### Text
```css
text-gray-800                       /* Inactive nav items */
text-gradient-pink-purple-blue      /* Active nav items */
text-gray-700                       /* Close button icon */
```

### Decorative Orbs
```css
from-pink-300 to-purple-400         /* Bottom-left */
from-blue-300 to-teal-400           /* Bottom-right */
from-yellow-300 to-orange-400       /* Right-side */
```

---

## Best Practices

### 1. Conditional Rendering
```tsx
// ✅ Only render when open - performance optimization
if (!isOpen) return null;
```

### 2. Body Scroll Lock
```tsx
// ✅ Prevent page scroll while menu is open
document.body.style.overflow = "hidden";

// ✅ Always restore on unmount
return () => {
  document.body.style.overflow = "unset";
};
```

### 3. Focus Trapping
```tsx
// ✅ Trap focus within menu for accessibility
const focusableElements = mobileMenuRef.current.querySelectorAll(
  'button, [href], input, ...'
);
```

### 4. Touch Targets
```tsx
// ✅ Minimum 44px for touch accessibility
className="w-10 h-10"              // Close button
className="px-4 py-2"              // Nav buttons (with large text)
```

---

## Usage Example

```tsx
import { MobileMenu } from './components/common/MobileMenu';

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleNavigation = (page: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);            // Close menu
    
    if (sectionId && page === "home") {
      // Handle section scrolling
      setCurrentPage("home");
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      setCurrentPage(page);
    }
  };
  
  return (
    <>
      <nav>
        {/* Mobile menu button */}
        <button onClick={() => setIsMobileMenuOpen(true)}>
          Menu
        </button>
      </nav>
      
      {/* Mobile menu overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPage={currentPage}
        onNavigation={handleNavigation}
      />
    </>
  );
}
```

---

## Related Documentation

- **[overview-parts.md](../overview-parts.md)** - Template parts overview
- **[Header.md](./Header.md)** - Site header navigation
- **[components/Logo.md](../components/Logo.md)** - Logo component
- **[patterns/DesktopMobileNav.md](../patterns/DesktopMobileNav.md)** - Navigation pattern
- **[Guidelines.md](../Guidelines.md)** - Main guidelines

---

**Last Updated:** January 2025  
**Version:** 3.2.0
