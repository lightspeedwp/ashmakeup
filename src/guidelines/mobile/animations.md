# Mobile Animation Guidelines

Animation rules and best practices for mobile devices, covering CSS vs JavaScript animations, performance optimization, and accessibility.

## Purpose

Define animation standards with:
- CSS vs JavaScript animation decision criteria
- Performance-optimized animation patterns
- Mobile-friendly timing and easing
- Reduced motion support
- Battery-conscious animations
- Touch interaction animations

---

## CSS vs JavaScript Animations

### When to Use CSS Animations

**✅ Use CSS for:**
- Simple transitions (hover, focus, active states)
- Enter/exit animations (fade in/out, slide in/out)
- Loading spinners and pulse effects
- Scroll-triggered animations (via intersection observer + CSS classes)
- Transform-based animations (translate, rotate, scale)
- Infinite looping animations

**Why CSS?**
- GPU-accelerated (runs on compositor thread)
- Better performance on mobile
- Runs even when JavaScript is blocked
- Simpler to maintain

```css
/* ✅ CORRECT - CSS for simple transitions */
.button {
  transition: all 300ms ease-out;
}

.button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* ✅ CORRECT - CSS for fade-in */
.fade-in {
  animation: fadeIn 500ms ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### When to Use JavaScript Animations

**✅ Use JavaScript for:**
- Complex multi-step sequences
- Physics-based animations (spring, momentum)
- Scroll-linked parallax effects
- Gesture-driven animations (drag, swipe)
- Animations that need precise control or dynamic values
- Coordinated animations across multiple elements

**Why JavaScript?**
- Full control over timing and sequencing
- Dynamic values based on user input
- Can respond to events mid-animation
- Better for complex orchestration

```tsx
// ✅ CORRECT - JavaScript for complex sequences
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -50 }}
  transition={{ 
    type: 'spring',
    stiffness: 100,
    damping: 15
  }}
>
  Content
</motion.div>
```

---

## Performance Rules

### 1. Animate Only Transform and Opacity

These properties are GPU-accelerated and don't trigger layout or paint.

```css
/* ✅ CORRECT - GPU-accelerated properties */
.element {
  transition: transform 300ms ease-out, opacity 300ms ease-out;
}

.element:hover {
  transform: translateY(-4px);
  opacity: 0.8;
}

/* ❌ WRONG - Triggers layout recalculation */
.element:hover {
  top: -4px;        /* Triggers layout */
  margin-left: 10px; /* Triggers layout */
  width: 200px;      /* Triggers layout + paint */
}
```

### 2. Use will-change Sparingly

```css
/* ✅ CORRECT - Apply only when needed */
.element:hover {
  will-change: transform;
}

.element {
  transition: transform 300ms ease-out;
}

/* Remove after animation */
.element:not(:hover) {
  will-change: auto;
}

/* ❌ WRONG - Always applied, wastes GPU memory */
.element {
  will-change: transform, opacity;  /* Don't set permanently */
}
```

### 3. Limit Concurrent Animations

```tsx
// ❌ WRONG - Too many simultaneous animations
{items.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1 }}  // All animate at once
  />
))}

// ✅ CORRECT - Limit to first 6 items, instant for rest
{items.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: i < 6 ? 50 : 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i < 6 ? i * 0.1 : 0 }}
  />
))}
```

---

## Mobile-Optimized Timing

### Animation Duration Standards

```css
/* Micro-interactions */
--duration-instant: 100ms;   /* Checkbox checks, radio selects */
--duration-quick: 200ms;     /* Hover effects, focus rings */
--duration-normal: 300ms;    /* Standard transitions, button effects */
--duration-slow: 500ms;      /* Slide-ins, fade-ins, page transitions */
--duration-slower: 700ms;    /* Complex animations, modals */
```

**Mobile Adjustments:**
```css
/* Slightly faster on mobile for better responsiveness */
@media (max-width: 640px) {
  --duration-normal: 250ms;  /* 300ms → 250ms */
  --duration-slow: 400ms;    /* 500ms → 400ms */
  --duration-slower: 600ms;  /* 700ms → 600ms */
}
```

### Easing Functions

```css
/* Standard easing curves */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

/* Custom curves */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);

/* Use ease-out for most UI animations */
.button {
  transition: transform 300ms var(--ease-out);
}
```

---

## Common Animation Patterns

### 1. Hover Effects (CSS)

```css
/* Button hover - scale + shadow */
.button {
  transition: transform 300ms ease-out, box-shadow 300ms ease-out;
}

.button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Card hover - lift + shadow */
.card {
  transition: transform 300ms ease-out, box-shadow 300ms ease-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

/* Image zoom on hover */
.image-container {
  overflow: hidden;
}

.image {
  transition: transform 500ms ease-out;
}

.image-container:hover .image {
  transform: scale(1.1);
}
```

### 2. Fade In (CSS)

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 500ms ease-out forwards;
}

/* With slide up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 500ms ease-out forwards;
}
```

**React Implementation:**
```tsx
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  setIsVisible(true);
}, []);

<div className={`transition-all duration-500 ${
  isVisible 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-4'
}`}>
  Content
</div>
```

### 3. Slide In (CSS)

```css
@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.slide-in-right {
  animation: slideInRight 400ms ease-out forwards;
}

/* Mobile menu slide-in */
.mobile-menu {
  transform: translateX(-100%);
  transition: transform 300ms ease-out;
}

.mobile-menu.open {
  transform: translateX(0);
}
```

### 4. Loading Spinner (CSS)

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: spin 1s linear infinite;
}

/* Pulse animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.loading-pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

### 5. Stagger Animation (JavaScript)

```tsx
import { motion } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1  // 100ms delay between children
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.div variants={container} initial="hidden" animate="show">
  {items.map((item, i) => (
    <motion.div key={i} variants={item}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### 6. Modal Enter/Exit (JavaScript)

```tsx
import { motion, AnimatePresence } from 'motion/react';

<AnimatePresence>
  {isOpen && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50"
      />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-white rounded-2xl p-6">
          Modal content
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
```

---

## Scroll-Triggered Animations

### Intersection Observer + CSS Classes

```tsx
import { useEffect, useRef, useState } from 'react';

function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Animate once
        }
      },
      { threshold: 0.1, ...options }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return { ref, isInView };
}

// Usage
function AnimatedSection() {
  const { ref, isInView } = useInView();
  
  return (
    <div 
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
        }
      `}
    >
      Content fades in when scrolled into view
    </div>
  );
}
```

### Parallax Scroll (JavaScript)

```tsx
import { useScroll, useTransform, motion } from 'motion/react';

function ParallaxSection() {
  const { scrollYProgress } = useScroll();
  
  // Move slower than scroll (parallax effect)
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  return (
    <motion.div style={{ y }}>
      Parallax content
    </motion.div>
  );
}
```

---

## Touch Interaction Animations

### Tap/Press Effects

```css
/* Active state on touch */
.button {
  transition: transform 100ms ease-out;
}

.button:active {
  transform: scale(0.95);
}

/* Touch ripple effect */
@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.ripple {
  animation: ripple 600ms ease-out;
}
```

### Swipe Gestures (JavaScript)

```tsx
import { motion, useMotionValue, useTransform } from 'motion/react';

function SwipeableCard() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);
  
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -200, right: 200 }}
      style={{ x, rotateZ, opacity }}
      onDragEnd={(e, { offset, velocity }) => {
        if (Math.abs(offset.x) > 100) {
          // Swiped away
          handleSwipe(offset.x > 0 ? 'right' : 'left');
        }
      }}
    >
      Swipe me!
    </motion.div>
  );
}
```

---

## Reduced Motion Support

### Respect User Preferences

```css
/* Disable animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### JavaScript Detection

```tsx
function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);
  
  return prefersReducedMotion;
}

// Usage
function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
    >
      Content
    </motion.div>
  );
}
```

---

## Battery-Conscious Animations

### Pause on Background

```tsx
function usePauseWhenHidden() {
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  return isPaused;
}

// Usage - Pause carousel when tab hidden
function Carousel() {
  const isPaused = usePauseWhenHidden();
  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPaused]);
}
```

### Reduce Animations on Low Battery

```tsx
function useLowBattery() {
  const [isLowBattery, setIsLowBattery] = useState(false);
  
  useEffect(() => {
    (navigator as any).getBattery?.().then((battery: any) => {
      const checkBattery = () => {
        setIsLowBattery(battery.level < 0.2 && !battery.charging);
      };
      
      checkBattery();
      battery.addEventListener('levelchange', checkBattery);
      battery.addEventListener('chargingchange', checkBattery);
    });
  }, []);
  
  return isLowBattery;
}

// Usage
function AnimatedElement() {
  const isLowBattery = useLowBattery();
  
  // Disable animations on low battery
  if (isLowBattery) {
    return <div>Static content</div>;
  }
  
  return (
    <motion.div animate={{ y: [0, -10, 0] }}>
      Animated content
    </motion.div>
  );
}
```

---

## Common Mistakes

### ❌ Mistake 1: Animating Layout Properties

```css
/* ❌ WRONG - Triggers layout recalculation */
.element:hover {
  left: 10px;
  width: 200px;
  height: 100px;
}
```

**Solution:**
```css
/* ✅ CORRECT - GPU-accelerated */
.element:hover {
  transform: translateX(10px) scale(1.1);
}
```

### ❌ Mistake 2: No Reduced Motion Support

```tsx
// ❌ WRONG - Ignores user preferences
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 2, repeat: Infinity }}
>
  Always spinning
</motion.div>
```

**Solution:**
```tsx
// ✅ CORRECT - Respects preferences
const prefersReducedMotion = useReducedMotion();

<motion.div
  animate={{ rotate: prefersReducedMotion ? 0 : 360 }}
  transition={{ 
    duration: prefersReducedMotion ? 0 : 2,
    repeat: prefersReducedMotion ? 0 : Infinity
  }}
>
  Conditionally spinning
</motion.div>
```

### ❌ Mistake 3: Too Many Simultaneous Animations

```tsx
// ❌ WRONG - 100 elements animating at once
{items.map((item, i) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    {item}
  </motion.div>
))}
```

**Solution:**
```tsx
// ✅ CORRECT - Limit to visible items
{items.map((item, i) => (
  <motion.div
    initial={{ opacity: 0, y: i < 10 ? 20 : 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i < 10 ? i * 0.05 : 0 }}
  >
    {item}
  </motion.div>
))}
```

---

## Decision Tree

### Should I use CSS or JavaScript?

```
Is it a simple state change?
├─ Yes → CSS
│  └─ Examples: hover, focus, active, class toggle
│
└─ No → Is it based on user input/scroll?
   ├─ Yes → JavaScript
   │  └─ Examples: drag, scroll parallax, physics
   │
   └─ No → Is it a complex sequence?
      ├─ Yes → JavaScript
      │  └─ Examples: multi-step, coordinated, spring
      │
      └─ No → CSS is probably fine
         └─ Examples: fade in, slide in, spin
```

---

## Performance Checklist

- [ ] Animate only `transform` and `opacity`
- [ ] Use `will-change` only during animation
- [ ] Limit concurrent animations (< 10 at once)
- [ ] Use CSS for simple transitions
- [ ] Use JavaScript for complex sequences
- [ ] Support `prefers-reduced-motion`
- [ ] Pause animations when tab is hidden
- [ ] Test on low-end mobile devices
- [ ] Keep animations under 500ms (300ms ideal)
- [ ] Use `ease-out` for most UI animations

---

## Related Documentation

- **[mobile/performance.md](./performance.md)** - Performance optimization
- **[mobile/typography.md](./typography.md)** - Typography rules

---

**Last Updated:** January 2025  
**Version:** 3.2.0
