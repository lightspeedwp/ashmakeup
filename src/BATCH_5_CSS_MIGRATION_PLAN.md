# Batch 5: CSS Migration Plan - Common Components & Pages
**Date:** January 2025  
**Status:** Ready for Execution  
**Priority:** High - These are core navigation and page components

## Executive Summary

This batch focuses on migrating common components (Header, Footer, Mobile Menu, Contact Form, etc.) and page components (HomePage, AboutPage, etc.) from Tailwind CSS to WordPress-aligned global CSS classes. These components are critical infrastructure that appear on every page.

## Migration Status Overview

### ✅ Completed Batches (Batches 1-4)
- **Batch 1:** WhySection, UVMakeupSection
- **Batch 2:** TestimonialsSection, InstagramFeed  
- **Batch 3:** HeroLayout, HeroSection, FeaturedSection
- **Batch 4:** BlogPreviewSection, FestivalCountdown, ThreeColumnPortfolioSection

### 🎯 Batch 5 Components (This Batch)

#### Phase 1: Common Components (Priority 1)
1. **Header.tsx** - Main navigation, desktop menu, logo integration
2. **Footer.tsx** - Contact form integration, social links, copyright
3. **MobileMenu.tsx** - Mobile navigation overlay
4. **ThemeToggle.tsx** - Light/dark mode switcher
5. **SocialLinks.tsx** - Social media icon links
6. **ContactForm.tsx** - Contact form with validation

#### Phase 2: Page Components (Priority 2)
7. **HomePage.tsx** - Main landing page wrapper
8. **AboutPage.tsx** - About page wrapper
9. **PortfolioMainPage.tsx** - Portfolio main page
10. **BlogPage.tsx** - Blog listing page
11. **ContactPage.tsx** - Contact page wrapper

### ⏳ Remaining Components (Future Batches)
- **Batch 6:** UI Components (PortfolioCard, SliderCard, SectionCard, ScrollToTop, etc.)
- **Batch 7:** shadcn/ui components (dialog, dropdown, accordion, etc.)
- **Batch 8:** Utility components and final cleanup

---

## Detailed Component Analysis

### 1. Header.tsx (Lines: ~300)

**Current Tailwind Usage:**
```tsx
className="sticky top-0 bg-header-light backdrop-blur-sm h-[108px] w-full relative flex items-center justify-between px-8 shadow-header-light dark:shadow-lg border-b border-header z-40 transition-colors duration-200"

className="hidden md:flex items-center gap-2 lg:gap-3"

className="text-nav-link font-body font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:ring-offset-2 dark:focus:ring-offset-purple-900 rounded-300 px-spacing-20 py-spacing-10"

className="flex md:hidden items-center gap-spacing-10"
```

**Required Global CSS Classes:**
```css
/* Header Navigation Container */
.header-nav {
  position: sticky;
  top: 0;
  background: var(--bg-header-light);
  backdrop-filter: blur(8px);
  height: 108px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  box-shadow: var(--shadow-header-light);
  border-bottom-width: var(--border-w-200);
  border-color: var(--border-header);
  z-index: 40;
  transition: background-color var(--animation-200), color var(--animation-200);
}

.dark .header-nav {
  box-shadow: var(--shadow-500);
}

/* Desktop Navigation Menu */
.header-nav-desktop {
  display: none;
  align-items: center;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .header-nav-desktop {
    display: flex;
  }
}

@media (min-width: 1024px) {
  .header-nav-desktop {
    gap: 0.75rem;
  }
}

/* Navigation Link */
.nav-link {
  font-size: var(--text-nav-link);
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  transition: color var(--animation-200);
  border-radius: var(--border-radius-300);
  padding-left: var(--spacing-20);
  padding-right: var(--spacing-20);
  padding-top: var(--spacing-10);
  padding-bottom: var(--spacing-10);
}

.nav-link:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-pink-500);
  box-shadow: 0 0 0 2px var(--color-pink-500), 0 0 0 4px transparent;
}

.dark .nav-link:focus {
  box-shadow: 0 0 0 2px var(--color-pink-400);
}

.nav-link-active {
  color: var(--color-pink-600);
}

.dark .nav-link-active {
  color: var(--color-cyan-300);
}

.nav-link-inactive {
  color: var(--color-gray-700);
}

.dark .nav-link-inactive {
  color: var(--color-gray-200);
}

.nav-link:hover {
  color: var(--color-pink-500);
}

.dark .nav-link:hover {
  color: var(--color-cyan-400);
}

/* Mobile Navigation Controls */
.header-nav-mobile {
  display: flex;
  align-items: center;
  gap: var(--spacing-10);
}

@media (min-width: 768px) {
  .header-nav-mobile {
    display: none;
  }
}

/* Hamburger Button */
.hamburger-button {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: var(--border-radius-500);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--animation-200), transform var(--animation-100);
  background: var(--color-white);
  border-width: var(--border-w-200);
  border-color: var(--color-gray-200);
}

.dark .hamburger-button {
  background: var(--color-purple-900);
  border-color: var(--color-purple-700);
}

.hamburger-button:hover {
  transform: scale(1.05);
  background: var(--color-gray-50);
}

.dark .hamburger-button:hover {
  background: var(--color-purple-800);
}

.hamburger-button:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.3);
}
```

---

### 2. Footer.tsx (Lines: ~250)

**Current Tailwind Usage:**
```tsx
className="bg-footer py-section"

className="max-w-7xl mx-auto px-horizontal-section"

className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-2xl"

className="text-section-h2 font-heading font-semibold text-gradient-pink-purple-blue mb-fluid-lg"
```

**Required Global CSS Classes:**
```css
/* Footer Container */
.footer-container {
  background: var(--bg-footer);
  padding-top: var(--py-section);
  padding-bottom: var(--py-section);
}

/* Footer Inner Wrapper */
.footer-wrapper {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--px-horizontal-section);
  padding-right: var(--px-horizontal-section);
}

/* Footer Grid */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Footer Section Heading */
.footer-heading {
  font-size: var(--text-section-h2);
  font-family: var(--font-heading);
  font-weight: var(--font-weight-semibold);
  background: var(--gradient-pink-purple-blue);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--space-lg);
}

/* Footer Copyright */
.footer-copyright {
  text-align: center;
  margin-top: var(--space-2xl);
  padding-top: var(--space-lg);
  border-top-width: var(--border-w-200);
  border-color: var(--color-gray-200);
  color: var(--color-gray-600);
  font-family: var(--font-body);
  font-size: var(--text-sm);
}

.dark .footer-copyright {
  border-color: var(--color-purple-800);
  color: var(--color-purple-300);
}
```

---

### 3. MobileMenu.tsx (Lines: ~200)

**Current Tailwind Usage:**
```tsx
className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"

className="fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-purple-950 shadow-2xl transform transition-transform duration-300"

className="flex flex-col h-full"

className="p-6 border-b border-gray-200 dark:border-purple-800"
```

**Required Global CSS Classes:**
```css
/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Mobile Menu Panel */
.mobile-menu-panel {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  background: var(--color-white);
  box-shadow: var(--shadow-600);
  transform: translateX(0);
  transition: transform var(--animation-300) var(--ease-standard);
}

.dark .mobile-menu-panel {
  background: var(--color-purple-950);
}

.mobile-menu-panel.mobile-menu-closed {
  transform: translateX(100%);
}

/* Mobile Menu Content */
.mobile-menu-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Mobile Menu Header */
.mobile-menu-header {
  padding: 1.5rem;
  border-bottom-width: var(--border-w-200);
  border-color: var(--color-gray-200);
}

.dark .mobile-menu-header {
  border-color: var(--color-purple-800);
}

/* Mobile Menu Close Button */
.mobile-menu-close {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: var(--border-radius-500);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--animation-200), transform var(--animation-100);
  background: var(--color-gray-100);
}

.dark .mobile-menu-close {
  background: var(--color-purple-900);
}

.mobile-menu-close:hover {
  transform: scale(1.05);
  background: var(--color-gray-200);
}

.dark .mobile-menu-close:hover {
  background: var(--color-purple-800);
}

/* Mobile Menu Navigation */
.mobile-menu-nav {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
}

/* Mobile Menu Link */
.mobile-menu-link {
  display: block;
  padding: 1rem;
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  font-size: var(--text-lg);
  border-radius: var(--border-radius-500);
  transition: background-color var(--animation-200), color var(--animation-200);
}

.mobile-menu-link-active {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1));
  color: var(--color-pink-600);
}

.dark .mobile-menu-link-active {
  background: rgba(147, 51, 234, 0.2);
  color: var(--color-cyan-300);
}

.mobile-menu-link-inactive {
  color: var(--color-gray-700);
}

.dark .mobile-menu-link-inactive {
  color: var(--color-gray-300);
}

.mobile-menu-link:hover {
  background: var(--color-gray-50);
}

.dark .mobile-menu-link:hover {
  background: var(--color-purple-900);
}
```

---

### 4. ThemeToggle.tsx (Lines: ~100)

**Current Tailwind Usage:**
```tsx
className="w-14 h-8 bg-theme-toggle-track rounded-full relative transition-colors duration-200"

className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-200"
```

**Required Global CSS Classes:**
```css
/* Theme Toggle Container */
.theme-toggle-button {
  width: 3.5rem;
  height: 2rem;
  background: var(--bg-theme-toggle-track);
  border-radius: var(--border-radius-900);
  position: relative;
  transition: background-color var(--animation-200);
  border: none;
  cursor: pointer;
}

.theme-toggle-button:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.3);
}

.dark .theme-toggle-button:focus {
  box-shadow: 0 0 0 4px rgba(147, 51, 234, 0.3);
}

/* Theme Toggle Knob */
.theme-toggle-knob {
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  width: 1.5rem;
  height: 1.5rem;
  background: var(--color-white);
  border-radius: var(--border-radius-900);
  box-shadow: var(--shadow-300);
  transform: translateX(0);
  transition: transform var(--animation-200) var(--ease-standard);
}

.dark .theme-toggle-knob {
  transform: translateX(1.5rem);
}

/* Theme Toggle Icon */
.theme-toggle-icon {
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-yellow-500);
}

.dark .theme-toggle-icon {
  color: var(--color-purple-300);
}
```

---

### 5. SocialLinks.tsx (Lines: ~100)

**Current Tailwind Usage:**
```tsx
className="flex gap-fluid-md"

className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"

className="w-6 h-6 text-white"
```

**Required Global CSS Classes:**
```css
/* Social Links Container */
.social-links-container {
  display: flex;
  gap: var(--space-md);
}

/* Social Link Button */
.social-link-button {
  width: 3rem;
  height: 3rem;
  border-radius: var(--border-radius-900);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--animation-200) var(--ease-standard), box-shadow var(--animation-200);
  box-shadow: var(--shadow-400);
  border: none;
  cursor: pointer;
}

.social-link-button:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-500);
}

.social-link-button:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.3), var(--shadow-400);
}

.dark .social-link-button:focus {
  box-shadow: 0 0 0 4px rgba(147, 51, 234, 0.3), var(--shadow-400);
}

/* Social Link Icon */
.social-link-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-white);
}

/* Platform Gradients */
.social-instagram {
  background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
}

.social-facebook {
  background: linear-gradient(135deg, #1877f2, #0c63d4);
}

.social-tiktok {
  background: linear-gradient(135deg, #000000, #00f2ea);
}

.social-linkedin {
  background: linear-gradient(135deg, #0077b5, #00a0dc);
}

.social-email {
  background: var(--gradient-pink-purple-blue);
}
```

---

### 6. ContactForm.tsx (Lines: ~600)

**Current Tailwind Usage:**
```tsx
className="flex flex-col gap-spacing-30"

className="contact-form-input w-full px-fluid-md py-fluid-md text-body-guideline font-body font-normal rounded-500"

className="w-full justify-center text-center bg-gradient-pink-purple-blue hover:from-purple-700 hover:to-pink-700"

className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30"
```

**Required Global CSS Classes:**
```css
/* Contact Form Container */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-30);
}

/* Contact Form Input */
.contact-form-input {
  width: 100%;
  padding-left: var(--space-md);
  padding-right: var(--space-md);
  padding-top: var(--space-md);
  padding-bottom: var(--space-md);
  font-size: var(--text-body-guideline);
  font-family: var(--font-body);
  font-weight: var(--font-weight-regular);
  border-radius: var(--border-radius-500);
  background: var(--color-white);
  border-width: var(--border-w-200);
  border-color: var(--color-gray-300);
  color: var(--color-gray-900);
  transition: border-color var(--animation-200), box-shadow var(--animation-200);
}

.dark .contact-form-input {
  background: var(--color-purple-900);
  border-color: var(--color-purple-700);
  color: var(--color-white);
}

.contact-form-input:focus {
  outline: none;
  border-color: var(--color-pink-500);
  box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.2);
}

.dark .contact-form-input:focus {
  border-color: var(--color-pink-400);
  box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.15);
}

.contact-form-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Contact Form Submit Button */
.contact-form-submit {
  width: 100%;
  justify-content: center;
  text-align: center;
  background: var(--gradient-pink-purple-blue);
  color: var(--color-white);
  padding-left: var(--button-padding-x);
  padding-right: var(--button-padding-x);
  padding-top: var(--button-padding-y);
  padding-bottom: var(--button-padding-y);
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  font-size: var(--text-button-fluid);
  transition: transform var(--animation-200), box-shadow var(--animation-200);
  border-radius: var(--border-radius-500);
  box-shadow: var(--shadow-400);
  border: none;
  cursor: pointer;
}

.contact-form-submit:hover:not(:disabled) {
  background: linear-gradient(135deg, #7e22ce, #ec4899);
  box-shadow: var(--shadow-500);
  transform: scale(1.05);
}

.contact-form-submit:disabled {
  background: linear-gradient(135deg, #c084fc, #f9a8d4);
  transform: scale(1);
  cursor: not-allowed;
}

.contact-form-submit:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.3), var(--shadow-400);
}

/* Success Message */
.contact-form-success {
  background: linear-gradient(135deg, rgb(240, 253, 244), rgb(209, 250, 229));
  border-width: var(--border-w-200);
  border-color: rgb(134, 239, 172);
  border-radius: var(--border-radius-600);
  padding: var(--space-xl);
  text-align: center;
  transition: background-color var(--animation-200), border-color var(--animation-200);
}

.dark .contact-form-success {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(16, 185, 129, 0.3));
  border-color: rgb(34, 197, 94);
}

/* Error Message */
.contact-form-error {
  background: linear-gradient(135deg, rgb(254, 242, 242), rgb(254, 226, 226));
  border-width: var(--border-w-200);
  border-color: rgb(252, 165, 165);
  border-radius: var(--border-radius-500);
  padding: var(--space-md);
  text-align: center;
}

/* Character Counter */
.contact-char-counter {
  text-align: right;
  font-size: var(--text-xs);
  padding-right: var(--space-sm);
  padding-bottom: var(--space-xs);
  color: var(--color-gray-500);
}

.dark .contact-char-counter {
  color: var(--color-gray-400);
}
```

---

### 7-11. Page Components (HomePage, AboutPage, etc.)

**Current Tailwind Usage (Common Pattern):**
```tsx
className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-purple-950 dark:via-purple-900/50 dark:to-purple-950"

className="container mx-auto px-4 py-16"

className="text-center"
```

**Required Global CSS Classes:**
```css
/* Page Container */
.page-container {
  min-height: 100vh;
  background: var(--color-white);
  transition: background-color var(--animation-300);
}

.dark .page-container {
  background: linear-gradient(to bottom right, var(--color-purple-950), rgba(88, 28, 135, 0.5), var(--color-purple-950));
}

/* Page Content Wrapper */
.page-content {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

/* Page Text Center */
.page-text-center {
  text-align: center;
}

/* Loading State */
.page-loading {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.page-loading-box {
  background: var(--color-gray-200);
  border-radius: var(--border-radius-500);
}

.dark .page-loading-box {
  background: rgba(88, 28, 135, 0.5);
}
```

---

## Implementation Strategy

### Phase 1: Create Global CSS Classes (30 minutes)
1. Add all new CSS classes to `/styles/globals.css`
2. Organize by component type
3. Include light and dark mode variants
4. Add responsive breakpoints
5. Document each class with comments

### Phase 2: Migrate Common Components (60 minutes)
1. Header.tsx - Replace navigation and menu classes
2. Footer.tsx - Replace footer grid and sections
3. MobileMenu.tsx - Replace overlay and panel
4. ThemeToggle.tsx - Replace toggle button and knob
5. SocialLinks.tsx - Replace icon buttons
6. ContactForm.tsx - Replace form inputs and buttons

### Phase 3: Migrate Page Components (30 minutes)
7. HomePage.tsx - Replace page container
8. AboutPage.tsx - Replace page layout
9. PortfolioMainPage.tsx - Replace portfolio wrapper
10. BlogPage.tsx - Replace blog layout
11. ContactPage.tsx - Replace contact wrapper

### Phase 4: Testing & Verification (20 minutes)
1. Test all components in light mode
2. Test all components in dark mode
3. Test responsive breakpoints (mobile, tablet, desktop)
4. Test keyboard navigation
5. Test focus states
6. Verify WCAG AAA accessibility

---

## New CSS Classes to Add to globals.css

**Total new classes:** ~80+ WordPress-aligned utility classes

### Header & Navigation (15 classes)
- `.header-nav`
- `.header-nav-desktop`
- `.header-nav-mobile`
- `.nav-link`
- `.nav-link-active`
- `.nav-link-inactive`
- `.hamburger-button`
- (+ 8 more variants and states)

### Footer (8 classes)
- `.footer-container`
- `.footer-wrapper`
- `.footer-grid`
- `.footer-heading`
- `.footer-copyright`
- (+ 3 more variants)

### Mobile Menu (12 classes)
- `.mobile-menu-overlay`
- `.mobile-menu-panel`
- `.mobile-menu-content`
- `.mobile-menu-header`
- `.mobile-menu-close`
- `.mobile-menu-nav`
- `.mobile-menu-link`
- `.mobile-menu-link-active`
- `.mobile-menu-link-inactive`
- (+ 3 more variants)

### Theme Toggle (4 classes)
- `.theme-toggle-button`
- `.theme-toggle-knob`
- `.theme-toggle-icon`
- (+ 1 variant)

### Social Links (6 classes)
- `.social-links-container`
- `.social-link-button`
- `.social-link-icon`
- `.social-instagram`
- `.social-facebook`
- `.social-tiktok`
- `.social-linkedin`
- `.social-email`

### Contact Form (12 classes)
- `.contact-form`
- `.contact-form-input`
- `.contact-form-submit`
- `.contact-form-success`
- `.contact-form-error`
- `.contact-char-counter`
- (+ 6 more variants and states)

### Page Components (8 classes)
- `.page-container`
- `.page-content`
- `.page-text-center`
- `.page-loading`
- `.page-loading-box`
- (+ 3 more variants)

---

## Success Criteria

### Functional Requirements
- ✅ All components render identically to current design
- ✅ Light/dark mode works perfectly
- ✅ All responsive breakpoints function correctly
- ✅ No visual regressions

### Accessibility Requirements
- ✅ WCAG AAA contrast ratios maintained
- ✅ Keyboard navigation fully functional
- ✅ Focus states clearly visible
- ✅ Screen reader compatibility

### Performance Requirements
- ✅ No increase in bundle size
- ✅ CSS classes properly cached
- ✅ No runtime performance degradation

### Code Quality Requirements
- ✅ All inline styles removed
- ✅ WordPress naming conventions followed
- ✅ CSS variables used consistently
- ✅ Component files cleaned and organized

---

## Risk Mitigation

### Potential Issues
1. **Layout Shifts** - Test each component carefully
2. **Dark Mode Inconsistencies** - Verify all color variables
3. **Responsive Breakpoints** - Test all screen sizes
4. **Focus State Changes** - Verify keyboard navigation

### Testing Checklist
- [ ] Desktop Chrome (light mode)
- [ ] Desktop Chrome (dark mode)
- [ ] Mobile Safari (light mode)
- [ ] Mobile Safari (dark mode)
- [ ] Firefox (both modes)
- [ ] Edge (both modes)
- [ ] Keyboard navigation
- [ ] Screen reader (NVDA/VoiceOver)

---

## Timeline Estimate

- **Phase 1 (CSS Classes):** 30 minutes
- **Phase 2 (Common Components):** 60 minutes
- **Phase 3 (Page Components):** 30 minutes
- **Phase 4 (Testing):** 20 minutes

**Total:** ~2.5 hours

---

## Next Batches Preview

### Batch 6: UI Components
- PortfolioCard.tsx
- SliderCard.tsx
- SectionCard.tsx
- ScrollToTop.tsx
- BlogPagination.tsx
- ReadMoreButton.tsx
- ShareComponent.tsx

### Batch 7: shadcn/ui Components
- dialog.tsx
- dropdown-menu.tsx
- accordion.tsx
- tabs.tsx
- sheet.tsx
- (All /components/ui/*.tsx base components)

### Batch 8: Final Cleanup
- App.tsx main wrapper
- Remaining utility components
- Final verification and documentation

---

## Approval & Execution

**Ready for Execution:** ✅ Yes  
**Estimated Completion:** 2-3 hours  
**Priority Level:** High (Core infrastructure)  

**Next Steps:**
1. Review and approve this plan
2. Execute Phase 1 (Add CSS classes)
3. Execute Phase 2 (Migrate common components)
4. Execute Phase 3 (Migrate page components)
5. Execute Phase 4 (Test and verify)
6. Document completion and prepare Batch 6

---

**End of Batch 5 Migration Plan**
