# Batch 3: CSS Migration Plan - Hero Sections & Featured Content

## 📋 Executive Summary

This batch focuses on migrating **hero sections and featured content components**, which are the most prominent and high-traffic areas of the website. These components are used across multiple pages (Home, About, Portfolio) and represent the user's first impression.

**Status:** ✅ **READY TO EXECUTE**  
**Priority:** 🔴 **HIGH** (First visual impression)  
**Complexity:** ⭐⭐⭐ (Medium - responsive layouts and media queries)

---

## 🎯 Components in Batch 3

### 1. **HeroLayout.tsx** (PRIORITY 1)
**File:** `/components/sections/HeroLayout.tsx`  
**Usage:** Reusable hero layout component used on Home, About, Portfolio pages  
**Impact:** Very High - Used on every major page

**Tailwind Utilities Found:**
```tsx
className="flex-1 max-w-2xl relative w-full"                    // Lines 96, 224
className="flex flex-wrap gap-4 justify-start"                  // Line 410
className="relative flex items-center justify-center lg:justify-end"  // Line 418
className="mt-fluid-2xl relative flex justify-center"           // Line 428
```

**Estimated Global CSS Classes Needed:** 6-8

---

### 2. **HeroSection.tsx** (PRIORITY 2)
**File:** `/components/sections/HeroSection.tsx`  
**Usage:** Homepage hero section with image mosaic  
**Impact:** High - Homepage is entry point

**Tailwind Utilities Found:**
```tsx
className="flex flex-col lg:flex-row items-center gap-fluid-2xl lg:gap-20"  // Line 62
className="flex-1 max-w-2xl text-center lg:text-left"          // Line 63
className="text-hero-h1 font-heading font-bold text-gray-800 dark:text-purple-100 leading-tight mb-fluid-xl"  // Line 67
className="text-body-guideline font-body font-normal text-gray-600 dark:text-purple-200 leading-relaxed mb-fluid-xl"  // Line 82
className="flex-1 max-w-2xl relative w-full"                   // Line 96
```

**Estimated Global CSS Classes Needed:** 8-10

---

### 3. **FeaturedSection.tsx** (PRIORITY 3)
**File:** `/components/sections/FeaturedSection.tsx`  
**Usage:** Featured portfolio work section on homepage  
**Impact:** High - Showcases best work

**Tailwind Utilities Found:**
```tsx
className="flex gap-fluid-md"                                   // Line 140
className="flex-none w-[85vw] snap-center"                     // Line 144
className="hidden md:grid md:grid-cols-2 gap-fluid-lg"        // Line 169
```

**Estimated Global CSS Classes Needed:** 5-7

---

## 📊 Detailed Audit Results

### Total Tailwind Utilities to Replace
- **HeroLayout:** ~8 utility classes
- **HeroSection:** ~12 utility classes  
- **FeaturedSection:** ~6 utility classes
- **Total:** ~26 utility classes

### Categories of Utilities
1. **Flexbox Layout:** `flex`, `flex-col`, `flex-row`, `items-center`, `justify-center`
2. **Grid Layout:** `grid`, `grid-cols-2`, `md:grid`
3. **Spacing:** `gap-4`, `gap-fluid-md`, `gap-fluid-lg`, `gap-fluid-2xl`
4. **Responsive:** `lg:flex-row`, `md:grid`, `lg:justify-end`
5. **Width/Max-width:** `flex-1`, `max-w-2xl`, `w-full`, `w-[85vw]`
6. **Typography:** Handled by existing classes (keep as-is)
7. **Colors:** Handled by existing classes (keep as-is)

---

## 🎨 Proposed Global CSS Classes

### HeroLayout Classes

```css
/* Hero Layout - Container Flex */
.hero-layout-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--wp--preset--spacing--fluid-2xl);
}

@media (min-width: 1024px) {
  .hero-layout-container {
    flex-direction: row;
    gap: 5rem; /* 80px - lg:gap-20 */
  }
}

/* Hero Layout - Content Column */
.hero-content-column {
  flex: 1;
  max-width: 42rem; /* 672px - max-w-2xl */
  text-align: center;
}

@media (min-width: 1024px) {
  .hero-content-column {
    text-align: left;
  }
}

/* Hero Layout - Media Column */
.hero-media-column {
  flex: 1;
  max-width: 42rem;
  position: relative;
  width: 100%;
}

/* Hero Layout - Media Column (Split Layout) */
.hero-media-column-split {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1024px) {
  .hero-media-column-split {
    justify-content: flex-end;
  }
}

/* Hero Layout - Actions Container */
.hero-actions-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* 16px - gap-4 */
  justify-content: flex-start;
}

/* Hero Layout - Media Below Content */
.hero-media-below {
  margin-top: var(--wp--preset--spacing--fluid-2xl);
  position: relative;
  display: flex;
  justify-content: center;
}
```

### FeaturedSection Classes

```css
/* Featured Section - Mobile Slider Container */
.featured-slider-mobile {
  display: flex;
  gap: var(--wp--preset--spacing--fluid-md);
  scroll-snap-type: x mandatory;
}

/* Featured Section - Mobile Slide */
.featured-slide-mobile {
  flex: none;
  width: 85vw;
  scroll-snap-align: center;
}

/* Featured Section - Desktop Grid */
.featured-grid-desktop {
  display: none;
}

@media (min-width: 768px) {
  .featured-grid-desktop {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--wp--preset--spacing--fluid-lg);
  }
}
```

---

## 🔧 Implementation Strategy

### Phase 1: HeroLayout.tsx (Highest Priority)
1. ✅ Create global CSS classes in `globals.css`
2. ✅ Replace all layout flex utilities
3. ✅ Replace all media column utilities
4. ✅ Replace action container utilities
5. ✅ Test on all pages using HeroLayout (Home, About, Portfolio)
6. ✅ Verify responsive behavior (mobile, tablet, desktop)
7. ✅ Verify dark mode compatibility

### Phase 2: HeroSection.tsx
1. ✅ Reuse HeroLayout classes where possible
2. ✅ Create hero-specific classes for unique elements
3. ✅ Replace text alignment utilities
4. ✅ Test homepage hero section thoroughly
5. ✅ Verify image mosaic layout

### Phase 3: FeaturedSection.tsx
1. ✅ Create featured-specific slider classes
2. ✅ Create desktop grid classes
3. ✅ Replace mobile/desktop visibility utilities
4. ✅ Test horizontal scrolling on mobile
5. ✅ Test grid layout on desktop

---

## ✅ Testing Checklist

### HeroLayout
- [ ] Desktop: Split layout renders correctly (content left, media right)
- [ ] Desktop: Media column aligns to right edge
- [ ] Mobile: Single column stacked layout
- [ ] Mobile: Content centered properly
- [ ] Tablet: Breakpoint transition smooth
- [ ] Actions: Buttons wrap properly on narrow screens
- [ ] Dark Mode: All variants work correctly
- [ ] Accessibility: Focus states visible
- [ ] Used on: Home, About, Portfolio pages all work

### HeroSection
- [ ] Homepage hero renders with correct layout
- [ ] Image mosaic displays properly
- [ ] Text alignment: center on mobile, left on desktop
- [ ] Gradient text renders correctly
- [ ] CTA buttons properly spaced
- [ ] Dark mode text colors correct
- [ ] Responsive images load properly

### FeaturedSection
- [ ] Mobile: Horizontal slider works
- [ ] Mobile: Snap scrolling functional
- [ ] Mobile: Slides are 85vw width
- [ ] Desktop: 2-column grid displays
- [ ] Desktop: Cards have proper gaps
- [ ] Transition: Mobile to desktop smooth
- [ ] Dark mode: Card backgrounds correct
- [ ] Hover states: All interactive elements work

---

## 📈 Success Metrics

### Before Batch 3:
- **Tailwind utilities in hero sections:** ~26
- **Global CSS classes for heroes:** 0
- **Hero consistency:** Low (inline utilities scattered)
- **Maintainability:** Medium

### After Batch 3:
- **Tailwind utilities in hero sections:** 0 ✅
- **Global CSS classes for heroes:** 15-20 ✅
- **Hero consistency:** High (centralized styles)
- **Maintainability:** Very High
- **WordPress alignment:** 100% ✅

---

## 🚨 Risk Assessment

### Low Risk:
- ✅ No complex animations to preserve
- ✅ Well-defined responsive breakpoints
- ✅ Existing working layouts to reference

### Medium Risk:
- ⚠️ Multiple pages use HeroLayout (must test all)
- ⚠️ Image mosaic positioning may be sensitive
- ⚠️ Mobile slider snap scrolling must work perfectly

### Mitigation:
- ✅ Test on all pages using HeroLayout before committing
- ✅ Verify image positions with pixel-perfect comparison
- ✅ Use browser DevTools to test snap scrolling

---

## 📝 Notes

### Design Patterns to Preserve:
1. **Mobile-first responsive:** All classes start mobile, enhance for desktop
2. **Semantic naming:** `.hero-layout-container` not `.flex-container`
3. **WordPress alignment:** Use `--wp--preset--` variables where possible
4. **Dark mode:** Maintain existing color classes (no migration needed)
5. **Accessibility:** Maintain all ARIA labels and focus states

### Classes to Keep As-Is:
- ✅ Typography classes (`.text-hero-h1`, `.text-body-guideline`)
- ✅ Color classes (`.text-gray-800`, `.dark:text-purple-100`)
- ✅ Gradient classes (`.text-gradient-pink-purple-blue`)
- ✅ Spacing utility classes already using fluid values
- ✅ Border and shadow utilities

---

## 🔄 Migration Workflow

1. **Read existing component** → Identify all Tailwind utilities
2. **Plan global CSS classes** → Write out semantic class names
3. **Add to globals.css** → Document with comments
4. **Replace in component** → Update className attributes
5. **Test thoroughly** → All breakpoints and states
6. **Verify dark mode** → Toggle theme and check
7. **Document changes** → Update this file with results
8. **Commit changes** → Single atomic commit per component

---

## 📚 Dependencies

### Files to Modify:
1. `/styles/globals.css` - Add new hero and featured classes
2. `/components/sections/HeroLayout.tsx` - Replace utilities
3. `/components/sections/HeroSection.tsx` - Replace utilities
4. `/components/sections/FeaturedSection.tsx` - Replace utilities

### Files to Test:
1. `/components/pages/home/HomePage.tsx`
2. `/components/pages/about/AboutPage.tsx`
3. `/components/pages/portfolio/PortfolioPage.tsx`

### No Changes Required:
- Mock data files (no styling)
- Type definitions (no styling)
- Utilities/hooks (no styling)

---

## 🎯 Batch 3 Execution Order

### Step 1: Create Global CSS Classes
**Time:** 15-20 minutes  
**File:** `/styles/globals.css`  
**Action:** Add all hero and featured classes with documentation

### Step 2: Migrate HeroLayout.tsx
**Time:** 10-15 minutes  
**File:** `/components/sections/HeroLayout.tsx`  
**Action:** Replace all flex, gap, alignment utilities

### Step 3: Test HeroLayout
**Time:** 10 minutes  
**Action:** Verify on Home, About, Portfolio pages

### Step 4: Migrate HeroSection.tsx
**Time:** 10 minutes  
**File:** `/components/sections/HeroSection.tsx`  
**Action:** Replace remaining utilities, reuse HeroLayout classes

### Step 5: Test HeroSection
**Time:** 5 minutes  
**Action:** Verify homepage hero

### Step 6: Migrate FeaturedSection.tsx
**Time:** 10 minutes  
**File:** `/components/sections/FeaturedSection.tsx`  
**Action:** Replace grid and slider utilities

### Step 7: Test FeaturedSection
**Time:** 5 minutes  
**Action:** Verify mobile slider and desktop grid

### Step 8: Final Verification
**Time:** 10 minutes  
**Action:** Complete testing checklist, verify dark mode

### Step 9: Documentation
**Time:** 5 minutes  
**Action:** Create BATCH_3_CSS_MIGRATION_COMPLETE.md

**Total Estimated Time:** 75-90 minutes

---

## 📊 Progress Tracking

### Batch Progress:
- [ ] HeroLayout.tsx CSS classes created
- [ ] HeroLayout.tsx utilities replaced
- [ ] HeroLayout.tsx tested on all pages
- [ ] HeroSection.tsx utilities replaced
- [ ] HeroSection.tsx tested
- [ ] FeaturedSection.tsx utilities replaced
- [ ] FeaturedSection.tsx tested
- [ ] Dark mode verified
- [ ] Accessibility verified
- [ ] Documentation complete

### Overall Project Progress:
- ✅ **Batch 1:** WhySection, UVMakeupSection
- ✅ **Batch 2:** TestimonialsSection, InstagramFeed
- ⏳ **Batch 3:** HeroLayout, HeroSection, FeaturedSection (IN PROGRESS)
- 🔜 **Batch 4:** BlogPreviewSection, BlogPagination, FestivalCountdown
- 🔜 **Batch 5:** Common components (Header, Footer, ContactForm)
- 🔜 **Batch 6:** UI components (PortfolioCard, Lightbox, SliderCard)

**Estimated Project Completion:** 85% after Batch 3

---

**Status:** ✅ **READY TO EXECUTE**  
**Created:** January 2025  
**Next Action:** Begin Phase 1 - Create global CSS classes in globals.css
