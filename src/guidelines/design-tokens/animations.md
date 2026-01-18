# Animation Design Tokens

**Version:** 5.0.0  
**Last Updated:** January 2025  
**WordPress Theme.json Compatible:** ✅

Complete animation system for the Ash Shaw Makeup Portfolio, aligned with WordPress block theme standards using numeric duration scale with accessibility-first design.

## ✅ WordPress Theme.json Alignment

This animation system follows WordPress 6.9+ standards with:
- ✅ **Numeric duration scale (100-400)** for predictable timing
- ✅ **CSS custom properties** for theme integration
- ✅ **Accessibility-first** with `prefers-reduced-motion` support
- ✅ **Performance optimized** using `transform` and `opacity`

## 📋 Table of Contents

1. [Animation Duration Scale](#animation-duration-scale)
2. [Easing Functions](#easing-functions)
3. [Animation Categories](#animation-categories)
4. [Device-Specific Considerations](#device-specific-considerations)
5. [Accessibility Requirements](#accessibility-requirements)
6. [Common Animation Patterns](#common-animation-patterns)

---

## Animation Duration Scale

### Numeric Duration Scale (WordPress-Aligned)

All animations use **numeric slugs (100-400)** for predictable timing:

```css
/* WordPress Animation Duration Scale */
--animation-100: 150ms;   /* Fast - Microinteractions */
--animation-200: 300ms;   /* Normal - Transitions */
--animation-300: 500ms;   /* Slow - Modals, overlays */
--animation-400: 800ms;   /* Very Slow - Hero effects, page loads */
```

### Visual Duration Scale

```
┌─────────────────────────────────────────────────────────────────────┐
│              WORDPRESS ANIMATION DURATION SCALE                      │
└─────────────────────────────────────────────────────────────────────┘

--animation-100 (Fast)
▓                                    150ms - Button hover, ripple

--animation-200 (Normal)
▓▓                                   300ms - Color change, scale

--animation-300 (Slow)
▓▓▓▓                                 500ms - Modal fade, slide

--animation-400 (Very Slow)
▓▓▓▓▓▓▓                              800ms - Hero reveal, page transition
```

### Duration Usage Guidelines

| Duration | Slug | Use Case | Examples |
|----------|------|----------|----------|
| **150ms** | `100` | Microinteractions | Button hover, ripple, icon changes |
| **300ms** | `200` | Standard transitions | Color changes, scale transforms, fades |
| **500ms** | `300` | Complex animations | Modal open/close, slide panels, accordions |
| **800ms** | `400` | Hero animations | Page transitions, hero reveals, loading states |

---

## Easing Functions

### Standard Easing Curves

```css
/* Easing Function Variables */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);      /* Material Design standard */
--ease-decelerate: cubic-bezier(0, 0, 0.2, 1);     /* Fast start, slow end */
--ease-accelerate: cubic-bezier(0.4, 0, 1, 1);     /* Slow start, fast end */
--ease-sharp: cubic-bezier(0.4, 0, 0.6, 1);        /* Snappy, energetic */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Playful bounce */
```

### Easing Visualization

```
Standard (ease-standard)
────────────────────────────────
    ╱╱╱╱╱╱╱╱╱╱╱╱╱────────
   ╱
  ╱
 ╱
Start                         End

Decelerate (ease-decelerate)
────────────────────────────────
 ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱──────────
╱
Start                         End

Accelerate (ease-accelerate)
────────────────────────────────
          ────────╱╱╱╱╱╱╱╱╱╱╱╱
                 ╱
                ╱
               ╱
Start                         End
```

### When to Use Each Easing

| Easing | Use Case |
|--------|----------|
| **standard** | General purpose, most animations |
| **decelerate** | Elements entering the screen |
| **accelerate** | Elements leaving the screen |
| **sharp** | Quick, snappy interactions |
| **bounce** | Playful, attention-grabbing effects |

---

## Animation Categories

### 1. Microinteractions (100ms)

**Definition:** Small, immediate feedback for user actions

```css
/* Button Hover */
.button {
  transition: transform var(--animation-100) var(--ease-standard),
              box-shadow var(--animation-100) var(--ease-standard);
}

.button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* Icon Rotation */
.icon-chevron {
  transition: transform var(--animation-100) var(--ease-sharp);
}

.icon-chevron.rotated {
  transform: rotate(180deg);
}

/* Ripple Effect */
.ripple {
  animation: ripple var(--animation-100) var(--ease-decelerate);
}

@keyframes ripple {
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(4);
    opacity: 0;
  }
}
```

**Examples:**
- Button hover states
- Icon changes
- Toggle switches
- Checkbox checks
- Radio button selections

---

### 2. Standard Transitions (200ms)

**Definition:** Common UI state changes and property transitions

```css
/* Color Transition */
.link {
  color: var(--wp--preset--color--primary);
  transition: color var(--animation-200) var(--ease-standard);
}

.link:hover {
  color: var(--wp--preset--color--secondary);
}

/* Background Fade */
.card {
  background: white;
  transition: background-color var(--animation-200) var(--ease-standard);
}

.card:hover {
  background: var(--color-pink-50);
}

/* Scale Transform */
.image-hover {
  transition: transform var(--animation-200) var(--ease-standard);
}

.image-hover:hover {
  transform: scale(1.1);
}

/* Opacity Fade */
.fade-element {
  opacity: 0;
  transition: opacity var(--animation-200) var(--ease-decelerate);
}

.fade-element.visible {
  opacity: 1;
}
```

**Examples:**
- Link color changes
- Card hover effects
- Image scaling
- Dropdown arrows
- Tab switching

---

### 3. Complex Animations (300ms)

**Definition:** Multi-property animations for modals, panels, overlays

```css
/* Modal Fade In */
.modal-overlay {
  opacity: 0;
  transition: opacity var(--animation-300) var(--ease-decelerate);
}

.modal-overlay.open {
  opacity: 1;
}

.modal-content {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
  transition: 
    transform var(--animation-300) var(--ease-decelerate),
    opacity var(--animation-300) var(--ease-decelerate);
}

.modal-content.open {
  transform: scale(1) translateY(0);
  opacity: 1;
}

/* Slide Panel */
.slide-panel {
  transform: translateX(100%);
  transition: transform var(--animation-300) var(--ease-standard);
}

.slide-panel.open {
  transform: translateX(0);
}

/* Accordion */
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--animation-300) var(--ease-standard);
}

.accordion-content.expanded {
  max-height: 500px; /* Set appropriate max-height */
}
```

**Examples:**
- Modal open/close
- Side drawer navigation
- Accordion expand/collapse
- Lightbox gallery
- Mobile menu slide

---

### 4. Hero Animations (400ms)

**Definition:** Large, impactful animations for page loads and hero sections

```css
/* Hero Fade In */
.hero-content {
  opacity: 0;
  transform: translateY(30px);
  animation: heroFadeIn var(--animation-400) var(--ease-decelerate) forwards;
}

@keyframes heroFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered Fade In */
.hero-title {
  animation: fadeInUp var(--animation-400) var(--ease-decelerate);
  animation-delay: 0ms;
}

.hero-subtitle {
  animation: fadeInUp var(--animation-400) var(--ease-decelerate);
  animation-delay: 100ms;
}

.hero-description {
  animation: fadeInUp var(--animation-400) var(--ease-decelerate);
  animation-delay: 200ms;
}

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

/* Page Transition */
.page-transition-enter {
  opacity: 0;
  transform: translateY(20px);
  transition: 
    opacity var(--animation-400) var(--ease-decelerate),
    transform var(--animation-400) var(--ease-decelerate);
}

.page-transition-enter-active {
  opacity: 1;
  transform: translateY(0);
}
```

**Examples:**
- Hero section reveals
- Page transitions
- Loading animations
- Image gallery reveals
- Scroll-triggered animations

---

## Device-Specific Considerations

### Mobile (< 768px)

**Touch Feedback:** Immediate visual response (100ms)

```css
/* Mobile Button Active State */
.button-mobile {
  transition: 
    transform var(--animation-100) var(--ease-sharp),
    background-color var(--animation-100) var(--ease-standard);
}

.button-mobile:active {
  transform: scale(0.95);
  background-color: var(--color-pink-600);
}

/* Swipe Gesture */
.swipeable {
  transition: transform var(--animation-200) var(--ease-standard);
}

.swipeable.swiping {
  transition: none; /* Disable during swipe */
}
```

**Guidelines:**
- ✅ Use faster animations (100-200ms)
- ✅ Immediate touch feedback
- ✅ Simple, performant animations
- ❌ Avoid complex multi-property animations
- ❌ Don't rely on hover states

---

### Tablet (768px - 1023px)

**Hybrid Interactions:** Support both touch and hover

```css
/* Tablet-Optimized Card */
.card-tablet {
  transition: 
    transform var(--animation-200) var(--ease-standard),
    box-shadow var(--animation-200) var(--ease-standard);
}

@media (hover: hover) {
  .card-tablet:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
}

.card-tablet:active {
  transform: scale(0.98);
}
```

**Guidelines:**
- ✅ Detect hover capability (`@media (hover: hover)`)
- ✅ Provide touch AND hover states
- ✅ Use medium durations (200-300ms)
- ✅ Test on both iPad and Surface devices

---

### Desktop (1024px+)

**Hover Interactions:** Rich, detailed animations

```css
/* Desktop Card Hover */
.card-desktop {
  transition: 
    transform var(--animation-200) var(--ease-standard),
    box-shadow var(--animation-200) var(--ease-standard);
}

.card-desktop:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.card-desktop:hover .card-image {
  transform: scale(1.1);
}

/* Desktop Navigation Underline */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--wp--preset--color--primary);
  transition: width var(--animation-200) var(--ease-standard);
}

.nav-link:hover::after {
  width: 100%;
}
```

**Guidelines:**
- ✅ Rich hover effects allowed
- ✅ Multi-property animations work well
- ✅ Use standard durations (200-300ms)
- ✅ Can layer multiple animations

---

## Accessibility Requirements

### Reduced Motion Support

**CRITICAL:** Always respect `prefers-reduced-motion` user preference

```css
/* Default: Animations enabled */
.animated-element {
  transition: transform var(--animation-200) var(--ease-standard);
}

.animated-element:hover {
  transform: scale(1.1);
}

/* Reduced Motion: Instant or subtle */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    transition: none; /* Instant change */
  }
  
  /* OR provide subtle alternative */
  .animated-element {
    transition: opacity var(--animation-100) linear;
  }
}
```

### Reduced Motion Alternatives

Instead of removing all animation, provide subtle alternatives:

```css
/* Full animation */
.hero-title {
  animation: slideInFade var(--animation-400) var(--ease-decelerate);
}

/* Reduced motion alternative */
@media (prefers-reduced-motion: reduce) {
  .hero-title {
    animation: subtleFade var(--animation-200) linear;
  }
}

@keyframes slideInFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes subtleFade {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Accessibility Checklist

- [ ] All animations have `prefers-reduced-motion` alternatives
- [ ] No auto-playing animations longer than 5 seconds
- [ ] Users can pause, stop, or hide animations
- [ ] No flashing or strobing effects (seizure risk)
- [ ] Focus indicators are clearly visible during transitions
- [ ] Screen reader users not disrupted by animations

---

## Common Animation Patterns

### Button Animations

```css
/* Primary Button */
.button-primary {
  transition: 
    transform var(--animation-100) var(--ease-standard),
    box-shadow var(--animation-100) var(--ease-standard),
    background-color var(--animation-200) var(--ease-standard);
}

.button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(236, 72, 153, 0.3);
}

.button-primary:active {
  transform: translateY(0);
  box-shadow: 0 4px 8px rgba(236, 72, 153, 0.2);
}

/* Icon Button */
.icon-button {
  transition: 
    transform var(--animation-100) var(--ease-sharp),
    background-color var(--animation-200) var(--ease-standard);
}

.icon-button:hover {
  transform: rotate(90deg);
}
```

---

### Card Animations

```css
/* Portfolio Card */
.portfolio-card {
  transition: 
    transform var(--animation-200) var(--ease-standard),
    box-shadow var(--animation-200) var(--ease-standard);
}

.portfolio-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.portfolio-card:hover .card-image {
  transform: scale(1.1);
  transition: transform var(--animation-300) var(--ease-standard);
}

.portfolio-card:hover .card-overlay {
  opacity: 1;
  transition: opacity var(--animation-200) var(--ease-decelerate);
}
```

---

### Navigation Animations

```css
/* Mobile Menu Slide */
.mobile-menu {
  transform: translateX(100%);
  transition: transform var(--animation-300) var(--ease-standard);
}

.mobile-menu.open {
  transform: translateX(0);
}

/* Desktop Nav Hover Underline */
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #EC4899, #A855F7, #3B82F6);
  transition: width var(--animation-200) var(--ease-standard);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
```

---

### Loading States

```css
/* Spinner */
.spinner {
  animation: spin var(--animation-400) linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Skeleton Loading */
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: shimmer var(--animation-400) linear infinite;
}

@keyframes shimmer {
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
}

/* Progress Bar */
.progress-bar {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--animation-300) var(--ease-decelerate);
}

.progress-bar[data-progress="50"] {
  transform: scaleX(0.5);
}
```

---

### Modal/Overlay Animations

```css
/* Modal Backdrop */
.modal-backdrop {
  opacity: 0;
  transition: opacity var(--animation-300) var(--ease-decelerate);
  pointer-events: none;
}

.modal-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

/* Modal Content */
.modal-content {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
  transition: 
    transform var(--animation-300) var(--ease-decelerate),
    opacity var(--animation-300) var(--ease-decelerate);
}

.modal-content.open {
  transform: scale(1) translateY(0);
  opacity: 1;
}

/* Lightbox Gallery */
.lightbox {
  opacity: 0;
  transition: opacity var(--animation-200) var(--ease-decelerate);
}

.lightbox.open {
  opacity: 1;
}

.lightbox-image {
  transform: scale(0.8);
  opacity: 0;
  transition: 
    transform var(--animation-300) var(--ease-decelerate),
    opacity var(--animation-300) var(--ease-decelerate);
}

.lightbox-image.visible {
  transform: scale(1);
  opacity: 1;
}
```

---

## Performance Best Practices

### ✅ DO

1. **Animate transform and opacity only**
   ```css
   /* ✅ GOOD - GPU accelerated */
   .element {
     transition: transform var(--animation-200), opacity var(--animation-200);
   }
   ```

2. **Use `will-change` sparingly**
   ```css
   /* ✅ GOOD - Only on hover */
   .card:hover {
     will-change: transform;
   }
   ```

3. **Batch animations together**
   ```css
   /* ✅ GOOD - Single transition property */
   .element {
     transition: 
       transform var(--animation-200) var(--ease-standard),
       opacity var(--animation-200) var(--ease-standard);
   }
   ```

### ❌ DON'T

1. **Don't animate expensive properties**
   ```css
   /* ❌ BAD - Causes layout recalculation */
   .element {
     transition: width 300ms, height 300ms, top 300ms, left 300ms;
   }
   
   /* ✅ GOOD - Use transform instead */
   .element {
     transition: transform 300ms;
     transform: scale(1.5) translate(10px, 20px);
   }
   ```

2. **Don't overuse will-change**
   ```css
   /* ❌ BAD - Always on */
   .element {
     will-change: transform, opacity;
   }
   ```

3. **Don't animate too many elements simultaneously**
   ```css
   /* ❌ BAD - 50 elements animating */
   .grid-item {
     animation: fadeIn 300ms;
   }
   
   /* ✅ GOOD - Stagger animations */
   .grid-item:nth-child(1) { animation-delay: 0ms; }
   .grid-item:nth-child(2) { animation-delay: 50ms; }
   .grid-item:nth-child(3) { animation-delay: 100ms; }
   ```

---

## Summary

### Key Takeaways

- ✅ **Numeric duration scale (100-400)** for predictable timing
- ✅ **Always support prefers-reduced-motion** for accessibility
- ✅ **Animate transform and opacity** for best performance
- ✅ **Device-specific considerations** (touch vs hover)
- ✅ **WordPress CSS variables** for consistency

### Quick Reference

| Duration | Slug | Use Case | Easing |
|----------|------|----------|--------|
| 150ms | `100` | Microinteractions | `ease-sharp` |
| 300ms | `200` | Standard transitions | `ease-standard` |
| 500ms | `300` | Complex animations | `ease-decelerate` |
| 800ms | `400` | Hero effects | `ease-decelerate` |

---

**Version:** 5.0.0 (WordPress Animation System)  
**Last Updated:** January 2025  
**Maintained By:** Ash Shaw Portfolio Team

**Related Documentation:**
- [Spacing Design Tokens](./spacing.md) - Spacing system
- [Typography Design Tokens](./typography.md) - Font system
- [Colors Design Tokens](./colors.md) - Color palette
- [Interactions & Accessibility](../interactions-accessibility.md) - Functional patterns
