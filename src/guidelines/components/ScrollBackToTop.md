# ScrollBackToTop Component

**Version:** 4.0.0  
**Last Updated:** January 2025

A floating button that appears after scrolling down, allowing users to quickly return to the top of the page with smooth scrolling animation.

## Purpose

Improve user experience on long pages by:
- Providing quick navigation back to top
- Appearing only when needed (after scrolling threshold)
- Smooth scroll animation
- Fixed positioning for easy access
- Accessibility compliance

---

## Usage

### Basic Usage

```tsx
import { ScrollBackToTop } from './components/ui/ScrollBackToTop';

function App() {
  return (
    <>
      {/* Page content */}
      <ScrollBackToTop />
    </>
  );
}
```

### Custom Threshold

```tsx
<ScrollBackToTop 
  showAfterScroll={300} // Show after scrolling 300px
/>
```

### Custom Styling

```tsx
<ScrollBackToTop 
  className="bg-gradient-pink-purple-blue text-white"
  iconSize={24}
/>
```

---

## Props

```typescript
interface ScrollBackToTopProps {
  /**
   * Scroll position (in pixels) after which button appears
   * @default 200
   */
  showAfterScroll?: number;
  
  /**
   * Additional CSS classes for customization
   * @default ""
   * @example "bg-purple-600 text-white"
   */
  className?: string;
  
  /**
   * Size of the arrow icon in pixels
   * @default 20
   */
  iconSize?: number;
  
  /**
   * Custom aria-label for accessibility
   * @default "Scroll back to top of page"
   */
  ariaLabel?: string;
  
  /**
   * Animation duration for scroll in milliseconds
   * @default 500
   */
  scrollDuration?: number;
  
  /**
   * Position from bottom of screen in pixels
   * @default 32
   */
  bottomOffset?: number;
  
  /**
   * Position from right of screen in pixels
   * @default 32
   */
  rightOffset?: number;
}
```

---

## Features

### Show/Hide Based on Scroll

```typescript
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const shouldShow = window.scrollY > showAfterScroll;
    setIsVisible(shouldShow);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [showAfterScroll]);
```

### Smooth Scroll to Top

```typescript
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
```

### Fade In/Out Animation

```tsx
<div 
  className={`
    transition-opacity duration-300
    ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `}
>
  {/* Button content */}
</div>
```

---

## Styling

### Default Styling

```tsx
<ScrollBackToTop 
  className="bg-white/90 backdrop-blur-sm text-gray-700 shadow-lg hover:shadow-xl"
/>
```

### Brand Gradient

```tsx
<ScrollBackToTop 
  className="bg-gradient-pink-purple-blue text-white shadow-lg hover:shadow-2xl"
/>
```

### Subtle Appearance

```tsx
<ScrollBackToTop 
  className="bg-gray-100/80 backdrop-blur-sm text-gray-600 hover:bg-gray-200/90"
/>
```

### Large Button

```tsx
<ScrollBackToTop 
  className="w-14 h-14"
  iconSize={28}
/>
```

---

## Common Patterns

### Standard Implementation

```tsx
import { ScrollBackToTop } from './components/ui/ScrollBackToTop';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Long page content */}
        <section className="min-h-screen">Section 1</section>
        <section className="min-h-screen">Section 2</section>
        <section className="min-h-screen">Section 3</section>
      </main>
      
      <Footer />
      
      {/* Floating scroll button */}
      <ScrollBackToTop />
    </div>
  );
}
```

### With Custom Styling

```tsx
<ScrollBackToTop 
  showAfterScroll={300}
  className="
    bg-gradient-pink-purple-blue 
    text-white 
    shadow-lg 
    hover:shadow-2xl 
    hover:scale-110 
    transition-all 
    duration-300
    w-12 h-12 
    rounded-full
  "
  iconSize={22}
  ariaLabel="Return to top of page"
/>
```

### Responsive Positioning

```tsx
<ScrollBackToTop 
  className="
    bottom-4 right-4
    sm:bottom-6 sm:right-6
    lg:bottom-8 lg:right-8
  "
/>
```

### Blog Page Implementation

```tsx
import { ScrollBackToTop } from './components/ui/ScrollBackToTop';

function BlogPostPage() {
  return (
    <>
      <Header />
      
      <article className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-hero-h1 font-heading">Blog Post Title</h1>
        
        {/* Long blog content */}
        <div className="prose prose-lg">
          {/* Thousands of words of content */}
        </div>
      </article>
      
      <Footer />
      
      {/* Show button after user scrolls past header */}
      <ScrollBackToTop showAfterScroll={150} />
    </>
  );
}
```

---

## Implementation Example

Complete implementation with all features:

```tsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollBackToTopProps {
  showAfterScroll?: number;
  className?: string;
  iconSize?: number;
  ariaLabel?: string;
}

export function ScrollBackToTop({ 
  showAfterScroll = 200,
  className = '',
  iconSize = 20,
  ariaLabel = 'Scroll back to top of page'
}: ScrollBackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfterScroll);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll]);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Keyboard support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <div
      role="button"
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      className={`
        fixed bottom-8 right-8 z-50
        w-12 h-12 
        rounded-full 
        flex items-center justify-center
        cursor-pointer
        transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        hover:scale-110
        focus:outline-none focus:ring-4 focus:ring-pink-200 focus:ring-opacity-50
        ${className}
      `}
    >
      <ArrowUp size={iconSize} />
    </div>
  );
}
```

---

## Accessibility

### Keyboard Navigation

```tsx
// Full keyboard support
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    scrollToTop();
  }
};

<button
  onClick={scrollToTop}
  onKeyDown={handleKeyDown}
  aria-label="Scroll to top of page"
  className="focus:outline-none focus:ring-4 focus:ring-pink-200"
>
  <ArrowUp />
</button>
```

### Screen Reader Support

```tsx
// Proper ARIA labeling
<ScrollBackToTop 
  ariaLabel="Return to top of page"
/>

// With hidden text for context
<button aria-label="Scroll to top">
  <ArrowUp />
  <span className="sr-only">Back to top</span>
</button>
```

### Focus Management

```tsx
// Only focusable when visible
<button
  tabIndex={isVisible ? 0 : -1}
  className={`
    focus:outline-none 
    focus:ring-4 
    focus:ring-pink-200 
    focus:ring-opacity-50
    ${isVisible ? '' : 'pointer-events-none'}
  `}
>
  <ArrowUp />
</button>
```

### Reduced Motion Support

```tsx
// Respect user's motion preferences
const scrollToTop = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });
};
```

---

## Common Mistakes

### ❌ Mistake 1: Always Visible

```tsx
// ❌ WRONG - Button always visible
<button className="fixed bottom-8 right-8">
  <ArrowUp />
</button>
```

**Solution:**
```tsx
// ✅ CORRECT - Conditional visibility
<ScrollBackToTop showAfterScroll={200} />
```

### ❌ Mistake 2: No Smooth Scrolling

```tsx
// ❌ WRONG - Instant jump to top
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
```

**Solution:**
```tsx
// ✅ CORRECT - Smooth scroll
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
```

### ❌ Mistake 3: Missing Accessibility

```tsx
// ❌ WRONG - No accessibility support
<div onClick={scrollToTop}>
  <ArrowUp />
</div>
```

**Solution:**
```tsx
// ✅ CORRECT - Full accessibility
<ScrollBackToTop 
  ariaLabel="Scroll back to top of page"
/>
```

### ❌ Mistake 4: Blocking Content

```tsx
// ❌ WRONG - Button covers important content
<ScrollBackToTop className="bottom-4 right-4" />
{/* Footer action buttons in same position */}
```

**Solution:**
```tsx
// ✅ CORRECT - Position away from other UI elements
<ScrollBackToTop className="bottom-20 right-8 lg:bottom-8 lg:right-8" />
```

---

## Performance Considerations

### Throttle Scroll Events

```typescript
import { useEffect, useState } from 'react';

function useThrottledScroll(threshold: number, delay: number = 100) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(window.scrollY > threshold);
      }, delay);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [threshold, delay]);
  
  return isVisible;
}
```

---

## Related Components

- **[ScrollDownArrow](./ScrollDownArrow.md)** - Scroll down indicator
- **[Header](../common/Header.tsx)** - Main navigation
- **[Footer](../common/Footer.tsx)** - Page footer

---

## Related Documentation

- **[Guidelines.md](../Guidelines.md)** - Main guidelines
- **[overview-components.md](../overview-components.md)** - Component system
- **[overview-icons.md](../overview-icons.md)** - Icon system
- **[FILE_STRUCTURE.md](../FILE_STRUCTURE.md)** - File organization
- **[design-tokens/spacing.md](../design-tokens/spacing.md)** - Spacing system

---