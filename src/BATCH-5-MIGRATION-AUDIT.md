# Batch 5: Tailwind CSS to WordPress-Aligned CSS Migration Audit & Plan

**Date:** January 2025  
**Status:** In Progress (Phase 2)  
**Completed:** Header.tsx (Phase 1)  
**Remaining:** 10 components

---

## ✅ **COMPLETED - Phase 1**

### Header.tsx
- ✅ Fully migrated to WordPress-aligned CSS classes
- ✅ Syntax error fixed
- ✅ Uses classes: `.bg-header-light`, `.shadow-header-light`, `.border-header`, `.nav-link-active`, `.nav-link-inactive`, `.burger-button`, `.burger-line`

---

## 📋 **REMAINING COMPONENTS - Phase 2**

### Priority Batch A: Common Components (4 components)

#### 1. Footer.tsx
**Status:** Needs migration  
**Current Tailwind Usage:**
- Sizing: `w-24`, `h-24`, `sm:w-48`, `sm:h-48`, `w-32`, `h-32`, `sm:w-64`, `sm:h-64`, `w-full`, `h-px`, `max-w-5xl`
- Layout: `mx-auto`, `relative`, `z-10`, `text-center`, `flex`, `flex-col`, `items-center`, `gap-fluid-lg`
- Positioning: `absolute`, `top-1/4`, `right-1/4`, `bottom-1/4`, `left-1/4`
- Styling: `blur-3xl`
- Responsive: `sm:` prefix classes

**Migration Strategy:**
1. Create WordPress classes for decorative orb sizing and positioning
2. Add `.footer-container`, `.footer-about-section`, `.footer-separator`, `.footer-social-logo-container` classes
3. Use existing: `.bg-footer-section`, `.text-gradient-blue-teal-green`, `.text-footer-description`, `.py-footer`, `.px-fluid-md`, `.mb-fluid-xl`, `.mb-fluid-lg`, `.mb-fluid-sm`, `.mb-fluid-md`

#### 2. MobileMenu.tsx
**Status:** Needs migration  
**Current Tailwind Usage:**
- Sizing: `w-16`, `h-16`, `sm:w-24`, `sm:h-24`, `w-12`, `h-12`, `sm:w-20`, `sm:h-20`, `w-8`, `h-8`, `sm:w-12`, `sm:h-12`
- Layout: `fixed`, `inset-0`, `z-50`, `md:hidden`, `flex`, `flex-col`, `items-center`, `justify-center`
- Positioning: `absolute`, `top-spacing-30`, `right-spacing-30`, `bottom-20`, `left-8`, `bottom-32`, `right-8`, `top-1/3`, `right-12`
- Transform: `rotate-45`, `translate-y-[0.375rem]`, `-rotate-45`, `-translate-y-[0.375rem]`
- Animation: `animate-pulse`, `delay-1000`, `delay-2000`
- Responsive: `sm:` prefix classes

**Migration Strategy:**
1. Use existing: `.mobile-menu-backdrop`, `.mobile-menu-content`, `.mobile-menu-close-btn`, `.mobile-menu-close-line`, `.mobile-menu-link-active`, `.mobile-menu-link-inactive`, `.mobile-menu-orb-1`, `.mobile-menu-orb-2`, `.mobile-menu-orb-3`
2. Add missing size utility classes for decorative elements
3. Create responsive classes for orb sizes: `.orb-size-md`, `.orb-size-lg` (mobile/desktop)

#### 3. ThemeToggle.tsx
**Status:** Needs migration  
**Current Tailwind Usage:**
- Sizing: `w-[48px]`, `h-[48px]`, `sm:w-[56px]`, `sm:h-[56px]`, `w-[22px]`, `h-[22px]`, `sm:w-[25px]`, `sm:h-[25px]`
- Layout: `relative`, `flex`, `items-center`, `justify-center`
- Borders: NO CLASSES (using `border-w-200` and `border-theme-toggle` which exist)
- Transform/Animation: `opacity-0`, `rotate-90`, `scale-0`, `opacity-100`, `rotate-0`, `scale-100`
- Group hover: `group-hover:scale-110`
- Shadow: Using `.shadow-theme-toggle`, `.hover:shadow-400`, `.dark:shadow-400`

**Migration Strategy:**
1. Use existing: `.bg-theme-toggle`, `.border-theme-toggle`, `.border-w-200`, `.rounded-900`, `.shadow-theme-toggle`, `.text-theme-sun`, `.text-theme-moon`
2. Create size utility classes: `.w-theme-toggle`, `.h-theme-toggle` (responsive 48px/56px)
3. Create icon size classes: `.w-theme-icon`, `.h-theme-icon` (responsive 22px/25px)
4. Add animation classes for icon transitions (already exist: `transition-all`, `duration-200`)

#### 4. SocialLinks.tsx
**Status:** Needs migration  
**Current Tailwind Usage:**
- Sizing: `w-12`, `h-12`, `w-6`, `h-6`
- Layout: `flex`, `items-center`, `justify-center`
- Border: `rounded-full`
- Transform: `hover:scale-110`, `transform`
- Shadow: `shadow-lg`, `hover:shadow-xl`

**Migration Strategy:**
1. Use existing: `.bg-gradient-social-instagram`, `.bg-gradient-social-facebook`, `.bg-gradient-social-tiktok`, `.bg-gradient-social-linkedin`, `.bg-gradient-social-email`, `.gap-fluid-md`
2. Create `.social-link-button` class with sizing and transform
3. Create `.social-link-icon` class with icon sizing

---

### Priority Batch B: Contact Form (1 component)

#### 5. ContactForm.tsx
**Status:** Needs migration  
**Current Tailwind Usage:**
- Extensive usage of spacing, borders, colors, gradients
- Multiple state-dependent classes (error, success, loading)
- Form field wrapper classes
- Button states and animations

**Migration Strategy:**
1. Use existing: `.contact-form-input`, `.contact-field-wrapper`, `.contact-char-counter`, `.bg-gradient-pink-purple-blue`
2. Add `.contact-form-container`, `.contact-status-message`, `.contact-success-container`, `.contact-error-container`, `.contact-demo-notice`, `.contact-submit-button`, `.contact-submit-icon`
3. Add state variant classes for success/error/loading states

---

### Priority Batch C: Page Components (5 components)

#### 6. HomePage.tsx
**Status:** Needs migration  
**Current Tailwind Usage (Loading/Error States):**
- `min-h-screen`, `bg-white`, `dark:bg-gradient-to-br`, `dark:from-purple-950`, `dark:via-purple-900/50`, `dark:to-purple-950`
- `container`, `mx-auto`, `px-4`, `py-16`, `text-center`
- `animate-pulse`, `h-16`, `h-8`, `h-6`, `h-12`, `w-80`, `w-96`, `w-64`, `w-48`, `mb-6`, `mb-4`, `mb-8`
- `bg-gray-200`, `dark:bg-purple-800/50`, `rounded-lg`, `rounded`
- Error state: `flex`, `items-center`, `justify-center`, `p-8`, `w-16`, `h-16`, `bg-red-100`, `dark:bg-red-900/30`
- `text-3xl`, `text-2xl`, `font-semibold`, `text-gray-800`, `dark:text-purple-100`, `text-gray-600`, `dark:text-purple-300`
- Buttons: `px-6`, `py-3`, `bg-purple-600`, `hover:bg-purple-700`, `bg-gray-600`, `hover:bg-gray-700`
- Loading indicator: `fixed`, `top-4`, `right-4`, `z-50`, `bg-blue-500`, `text-white`, `px-4`, `py-2`, `shadow-lg`, `text-sm`

**Migration Strategy:**
1. Create `.homepage-loading-container`, `.homepage-loading-skeleton`, `.homepage-error-container`, `.homepage-error-icon`, `.homepage-error-content`
2. Add skeleton classes: `.skeleton-title`, `.skeleton-subtitle`, `.skeleton-text`, `.skeleton-button`
3. Add loading indicator: `.loading-toast`, `.loading-spinner`
4. Use existing page background classes

#### 7. AboutPage.tsx
**Status:** Need to read and audit  

#### 8. PortfolioMainPage.tsx
**Status:** Need to read and audit  

#### 9. BlogPage.tsx
**Status:** Need to read and audit  

#### 10. ContactPage.tsx
**Status:** Need to read and audit  

---

## 📊 **WordPress-Aligned Classes Inventory**

### Already Available in globals.css:

#### Layout & Container Classes:
- ✅ `.hero-layout-container`, `.hero-content-column`, `.hero-media-column`
- ✅ `.blog-page-header`, `.blog-page-content`
- ✅ `.portfolio-page-header`, `.portfolio-page-content`
- ✅ `.contact-page-main`

#### Background & Section Classes:
- ✅ `.bg-hero-section`, `.bg-footer-section`, `.bg-featured-section`, `.bg-blog-preview-section`
- ✅ `.bg-journey-section`, `.bg-festival-section`, `.bg-nightlife-section`, `.bg-uv-section`
- ✅ `.bg-card` (with hover states for light/dark)
- ✅ `.bg-header-light` (light/dark mode support)
- ✅ `.mobile-menu-backdrop`, `.mobile-menu-content`

#### Typography Classes:
- ✅ `.text-fluid-xs` through `.text-fluid-7xl`
- ✅ `.text-hero-h1`, `.text-section-h2`, `.text-body-guideline`, `.text-quote-large`, `.text-button-fluid`
- ✅ `.text-nav-link`, `.nav-link-active`, `.nav-link-inactive`
- ✅ `.text-hero-description`, `.text-card-title`, `.text-card-description`, `.text-card-subtitle`
- ✅ `.mobile-menu-link-active`, `.mobile-menu-link-inactive`

#### Spacing Classes:
- ✅ `.p-spacing-10` through `.p-spacing-100`
- ✅ `.p-fluid-xs` through `.p-fluid-6xl`
- ✅ `.py-fluid-xs` through `.py-fluid-6xl`
- ✅ `.px-fluid-xs` through `.px-fluid-6xl`
- ✅ `.mb-fluid-xs` through `.mb-fluid-3xl`
- ✅ `.mt-fluid-xs` through `.mt-fluid-3xl`
- ✅ `.gap-fluid-xs` through `.gap-fluid-3xl`
- ✅ `.py-section`, `.py-section-xs`, `.py-section-sm`, `.py-section-md`, `.py-section-md-plus`, `.py-section-lg`
- ✅ `.px-section-sm`, `.px-section-md`, `.px-section-lg`
- ✅ `.px-button`, `.py-button`

#### Border & Shadow Classes:
- ✅ `.rounded-300`, `.rounded-500`, `.rounded-600`, `.rounded-900`, `.rounded-why-card`
- ✅ `.border-w-200` (and other border width classes)
- ✅ `.border-header`, `.border-theme-toggle`
- ✅ `.shadow-200`, `.shadow-300`, `.shadow-400`, `.shadow-500`, `.shadow-600`
- ✅ `.shadow-header-light`, `.shadow-theme-toggle`, `.shadow-why-card`

#### Gradient Classes:
- ✅ `.bg-gradient-pink-purple-blue`, `.bg-gradient-blue-teal-green`, `.bg-gradient-gold-peach-coral`
- ✅ `.text-gradient-pink-purple-blue`, `.text-gradient-blue-teal-green`, `.text-gradient-gold-peach-coral`
- ✅ `.bg-gradient-social-instagram`, `.bg-gradient-social-facebook`, `.bg-gradient-social-tiktok`, `.bg-gradient-social-linkedin`, `.bg-gradient-social-email`

#### Component-Specific Classes:
- ✅ `.burger-button`, `.burger-line`, `.burger-line-open-top`, `.burger-line-open-middle`, `.burger-line-open-bottom`
- ✅ `.mobile-menu-close-btn`, `.mobile-menu-close-line`, `.mobile-menu-orb-1`, `.mobile-menu-orb-2`, `.mobile-menu-orb-3`
- ✅ `.bg-theme-toggle`, `.text-theme-sun`, `.text-theme-moon`
- ✅ `.contact-form-input`, `.contact-field-wrapper`, `.contact-char-counter`
- ✅ `.why-card-container`, `.why-card-icon-container`, `.why-card-icon`, `.why-card-title-text`, `.why-card-description-text`

#### Animation Classes:
- ✅ `.duration-100`, `.duration-200`, `.duration-300`, `.duration-400`
- ✅ `.ease-standard`, `.ease-decelerate`, `.ease-accelerate`, `.ease-sharp`, `.ease-bounce`
- ✅ `.animate-fadeIn`, `.animate-fadeInUp`, `.animate-pulse`, `.animate-spin`
- ✅ `.button-hover-lift`, `.card-hover-float`

### Need to Add:

#### Sizing Utility Classes:
```css
/* Specific widths and heights */
.w-6 { width: 1.5rem; /* 24px */ }
.h-6 { height: 1.5rem; /* 24px */ }
.w-8 { width: 2rem; /* 32px */ }
.h-8 { height: 2rem; /* 32px */ }
.w-12 { width: 3rem; /* 48px */ }
.h-12 { height: 3rem; /* 48px */ }
.w-16 { width: 4rem; /* 64px */ }
.h-16 { height: 4rem; /* 64px */ }
.w-24 { width: 6rem; /* 96px */ }
.h-24 { height: 6rem; /* 96px */ }
.w-32 { width: 8rem; /* 128px */ }
.h-32 { height: 8rem; /* 128px */ }
.w-48 { width: 12rem; /* 192px */ }
.h-48 { height: 12rem; /* 192px */ }
.w-64 { width: 16rem; /* 256px */ }
.h-64 { height: 16rem; /* 256px */ }
.w-80 { width: 20rem; /* 320px */ }
.h-80 { height: 20rem; /* 320px */ }
.w-96 { width: 24rem; /* 384px */ }
.h-96 { height: 24rem; /* 384px */ }

/* Percentage widths */
.w-full { width: 100%; }
.h-px { height: 1px; }
.h-full { height: 100%; }

/* Max widths */
.max-w-2xl { max-width: 42rem; /* 672px */ }
.max-w-5xl { max-width: 64rem; /* 1024px */ }

/* Min heights */
.min-h-screen { min-height: 100vh; }
```

#### Layout Utility Classes:
```css
/* Flexbox */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.items-start { align-items: flex-start; }
.justify-center { justify-content: center; }
.justify-start { justify-content: flex-start; }
.justify-between { justify-content: space-between; }

/* Position */
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }

/* Position Values */
.top-0 { top: 0; }
.top-4 { top: 1rem; /* 16px */ }
.right-0 { right: 0; }
.right-4 { right: 1rem; /* 16px */ }
.bottom-0 { bottom: 0; }
.left-0 { left: 0; }

/* Z-index */
.z-10 { z-index: 10; }
.z-50 { z-index: 50; }

/* Text alignment */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

/* Display */
.hidden { display: none; }
.block { display: block; }

/* Responsive visibility */
.md\\:hidden { }
@media (min-width: 768px) {
  .md\\:hidden { display: none; }
}
```

#### Transform & Animation Classes:
```css
/* Transform */
.transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
.rotate-45 { --tw-rotate: 45deg; transform: var(--tw-transform); }
.-rotate-45 { --tw-rotate: -45deg; transform: var(--tw-transform); }
.rotate-90 { --tw-rotate: 90deg; transform: var(--tw-transform); }
.-rotate-90 { --tw-rotate: -90deg; transform: var(--tw-transform); }
.scale-0 { --tw-scale-x: 0; --tw-scale-y: 0; transform: var(--tw-transform); }
.scale-100 { --tw-scale-x: 1; --tw-scale-y: 1; transform: var(--tw-transform); }
.scale-110 { --tw-scale-x: 1.1; --tw-scale-y: 1.1; transform: var(--tw-transform); }
.hover\\:scale-105:hover { --tw-scale-x: 1.05; --tw-scale-y: 1.05; transform: var(--tw-transform); }
.hover\\:scale-110:hover { --tw-scale-x: 1.1; --tw-scale-y: 1.1; transform: var(--tw-transform); }

/* Translate */
.translate-y-\\[0\\.375rem\\] { --tw-translate-y: 0.375rem; transform: var(--tw-transform); }
.-translate-y-\\[0\\.375rem\\] { --tw-translate-y: -0.375rem; transform: var(--tw-transform); }

/* Opacity */
.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
```

#### Homepage Loading/Error State Classes:
```css
/* Loading states */
.homepage-loading-container { min-height: 100vh; /* Other styles */ }
.homepage-loading-skeleton { }
.skeleton-title { /* Animated skeleton styles */ }
.skeleton-subtitle { }
.skeleton-text { }
.skeleton-button { }

/* Error states */
.homepage-error-container { }
.homepage-error-icon { }
.homepage-error-content { }
.homepage-retry-button { }

/* Loading toast */
.loading-toast { position: fixed; top: 1rem; right: 1rem; z-index: 50; }
.loading-spinner { }
```

#### Footer Decorative Classes:
```css
.footer-decoration-orb { position: absolute; border-radius: 9999px; filter: blur(3rem); }
.footer-decoration-1 { /* Pink-purple gradient */ }
.footer-decoration-2 { /* Blue-teal gradient */ }
```

#### Social Links Classes:
```css
.social-link-button {
  width: 3rem; /* 48px */
  height: 3rem; /* 48px */
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.social-link-button:hover {
  transform: scale(1.1);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
.social-link-icon {
  width: 1.5rem; /* 24px */
  height: 1.5rem; /* 24px */
  color: white;
}
```

#### Theme Toggle Responsive Sizes:
```css
.w-theme-toggle {
  width: 48px;
}
@media (min-width: 640px) {
  .w-theme-toggle {
    width: 56px;
  }
}

.h-theme-toggle {
  height: 48px;
}
@media (min-width: 640px) {
  .h-theme-toggle {
    height: 56px;
  }
}

.w-theme-icon {
  width: 22px;
}
@media (min-width: 640px) {
  .w-theme-icon {
    width: 25px;
  }
}

.h-theme-icon {
  height: 22px;
}
@media (min-width: 640px) {
  .h-theme-icon {
    height: 25px;
  }
}
```

---

## 🎯 **Migration Execution Plan**

### Phase 2A: Add Missing WordPress CSS Classes
**Estimated Time:** 30-45 minutes  
**Status:** Ready to execute

1. Add sizing utility classes to globals.css
2. Add layout utility classes to globals.css
3. Add transform & animation classes to globals.css
4. Add component-specific classes to globals.css
5. Test class compilation

### Phase 2B: Migrate Common Components
**Estimated Time:** 60-90 minutes  
**Order:**
1. Footer.tsx (30 min)
2. SocialLinks.tsx (15 min)
3. ThemeToggle.tsx (20 min)
4. MobileMenu.tsx (25 min)

### Phase 2C: Migrate ContactForm
**Estimated Time:** 45-60 minutes  
1. ContactForm.tsx

### Phase 2D: Audit & Migrate Page Components
**Estimated Time:** 90-120 minutes  
**Order:**
1. Read and audit all 5 page components
2. Add any missing page-specific classes
3. Migrate HomePage.tsx
4. Migrate AboutPage.tsx
5. Migrate PortfolioMainPage.tsx
6. Migrate BlogPage.tsx
7. Migrate ContactPage.tsx

### Phase 2E: Testing & Validation
**Estimated Time:** 30-45 minutes  
1. Visual regression testing in light mode
2. Visual regression testing in dark mode
3. Responsive testing (mobile, tablet, desktop)
4. Accessibility audit (keyboard navigation, focus states)
5. Cross-browser testing (Chrome, Firefox, Safari, Edge)

---

## 📝 **Migration Checklist**

### For Each Component:
- [ ] Read current component file
- [ ] Document all Tailwind classes used
- [ ] Identify corresponding WordPress-aligned classes
- [ ] Add missing classes to globals.css
- [ ] Update component file with new classes
- [ ] Test component in isolation
- [ ] Test component in light mode
- [ ] Test component in dark mode
- [ ] Test component on mobile
- [ ] Test component on desktop
- [ ] Verify accessibility (keyboard nav, screen readers)
- [ ] Commit changes with descriptive message

### Global Checklist:
- [ ] No inline styles anywhere
- [ ] All Tailwind utilities replaced with WordPress classes
- [ ] WCAG AAA compliance maintained
- [ ] Responsive behavior preserved
- [ ] Dark mode functionality intact
- [ ] Animation performance optimal
- [ ] No console errors or warnings
- [ ] Build succeeds without errors

---

## 🚨 **Critical Rules**

1. **NO INLINE STYLES** - All styling must use CSS classes from globals.css
2. **WORDPRESS ALIGNMENT** - Follow `--wp--preset--*` and `--wp--custom--*` naming conventions
3. **LIGHT/DARK MODE** - Every class must have proper light/dark mode variants
4. **ACCESSIBILITY** - Maintain WCAG AAA standards for all color contrasts
5. **RESPONSIVE** - All components must work on mobile, tablet, and desktop
6. **NO BREAKING CHANGES** - Visual design must remain identical
7. **SEMANTIC CLASSES** - Use semantic names (`.footer-decoration-1` not `.absolute-top-1-4`)
8. **CONSISTENCY** - Follow existing naming patterns from Batches 1-4

---

**Last Updated:** January 2025  
**Migration Progress:** Phase 1 Complete (Header.tsx) | Phase 2 Ready to Execute
