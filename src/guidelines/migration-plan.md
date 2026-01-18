# WordPress Preset System Migration Plan

**Version:** 1.0.0  
**Started:** January 2025  
**Status:** Phase 2 - In Progress

---

## 📋 Migration Overview

This document tracks the migration of all components from legacy CSS variables and Tailwind utilities to WordPress-aligned preset system classes.

### Migration Phases

- ✅ **Phase 1: Foundation** (COMPLETE) - WordPress variables and helper classes added to globals.css
- 🔄 **Phase 2: Component Migration** (IN PROGRESS) - Gradual component updates
- 🔮 **Phase 3: Deprecation** (FUTURE) - Remove legacy variables after full migration

---

## 🎯 Migration Goals

1. **Replace Tailwind utilities** with WordPress-aligned helper classes
2. **Use semantic spacing** from preset system
3. **Maintain visual consistency** - no design changes
4. **Improve maintainability** - predictable, standardized classes
5. **Enable WordPress compatibility** - ready for block theme integration

---

## 📊 Migration Progress

### Overall Progress: 23% (9/40 components)

#### Components Status

| Component | Priority | Status | Lines Changed | Notes |
|-----------|----------|--------|---------------|-------|
| **Common Components** |
| Header | High | ✅ Complete | 12/12 | Navigation spacing & border radius migrated |
| MobileMenu | High | ✅ Complete | 18/18 | Mobile nav spacing & animations migrated |
| Footer | High | ✅ Complete | 6/6 | Border radius & duration migrated |
| ThemeToggle | Medium | ✅ Complete | 4/4 | Border radius, shadows & duration migrated |
| ContactForm | High | ✅ Complete | 10/10 | Form inputs, buttons & borders migrated |
| Logo | Medium | ⏸️ Pending | 0/50 | Brand logo component |
| **Layout Components** |
| HeroLayout | High | ✅ Complete | 15/15 | Hero images, borders, shadows & overlays migrated |
| SectionLayout | High | ⏸️ Pending | 0/80 | Generic section wrapper |
| **UI Components** |
| Button | High | ✅ Complete | 8/8 | Primary, secondary, CTA buttons |
| PortfolioCard | High | ✅ Complete | 14/14 | Card, borders, shadows, dots & transitions migrated |
| BlogCard | Medium | ⏸️ Pending | 0/80 | Blog post preview card |

---

## 🔧 Migration Checklist

### For Each Component:

#### 1. **Spacing Migration**
- [ ] Replace `p-4`, `p-6`, `p-8` → `.p-spacing-20`, `.p-spacing-30`, `.p-spacing-40`
- [ ] Replace `px-6`, `py-4` → `.px-spacing-30`, `.py-spacing-20`
- [ ] Replace `m-4`, `mb-6` → `.mb-spacing-30`, `.mt-spacing-20`
- [ ] Replace `gap-4`, `gap-6` → `.gap-spacing-20`, `.gap-spacing-30`
- [ ] Replace section padding → `.py-section`, `.py-section-small`, `.py-section-large`

#### 2. **Typography Migration**
- [ ] Replace `text-sm`, `text-base`, `text-lg` → `.text-size-200`, `.text-size-300`, `.text-size-400`
- [ ] Replace `text-2xl`, `text-4xl` → `.text-size-500`, `.text-size-700`
- [ ] Replace `font-heading`, `font-body` → `.font-brand-heading`, `.font-brand-body`
- [ ] Keep semantic classes like `.text-hero-h1` (they use WordPress variables internally)

#### 3. **Shadow Migration**
- [ ] Replace `shadow-sm`, `shadow`, `shadow-lg` → `.shadow-100`, `.shadow-300`, `.shadow-500`
- [ ] Replace `shadow-xl`, `shadow-2xl` → `.shadow-500`, `.shadow-600`

#### 4. **Border Radius Migration**
- [ ] Replace `rounded`, `rounded-md`, `rounded-lg` → `.rounded-200`, `.rounded-400`, `.rounded-500`
- [ ] Replace `rounded-xl`, `rounded-2xl` → `.rounded-600`, `.rounded-700`
- [ ] Replace `rounded-full` → `.rounded-900`

#### 5. **Animation Migration**
- [ ] Replace `duration-300`, `duration-500` → `.duration-200`, `.duration-300`
- [ ] Replace `ease-in-out` → `.ease-standard`
- [ ] Replace custom transitions → `.duration-{slug} .ease-{slug}`

#### 6. **Color Migration** (Optional - existing classes work)
- [ ] Consider semantic color classes where appropriate
- [ ] Verify dark mode classes still work
- [ ] Ensure WCAG contrast ratios maintained

#### 7. **Testing**
- [ ] Visual regression test (compare before/after screenshots)
- [ ] Test in light mode
- [ ] Test in dark mode
- [ ] Test responsive breakpoints (mobile, tablet, desktop)
- [ ] Test keyboard navigation
- [ ] Test screen reader compatibility

---

## 📝 Migration Examples

### Example 1: Button Component

**Before (Tailwind Utilities):**
```tsx
<button className="px-6 py-3 bg-gradient-pink-purple-blue text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
  Click Me
</button>
```

**After (WordPress Presets):**
```tsx
<button className="px-spacing-30 py-spacing-20 bg-gradient-pink-purple-blue text-white rounded-500 shadow-400 hover:shadow-500 transition-all duration-200">
  Click Me
</button>
```

### Example 2: Card Component

**Before (Tailwind Utilities):**
```tsx
<div className="p-6 bg-white dark:bg-purple-900 rounded-xl shadow-lg">
  <h3 className="text-2xl font-heading mb-4">Title</h3>
  <p className="text-base">Content</p>
</div>
```

**After (WordPress Presets):**
```tsx
<div className="p-spacing-40 bg-white dark:bg-purple-900 rounded-600 shadow-400">
  <h3 className="text-size-500 font-brand-heading mb-spacing-30">Title</h3>
  <p className="text-size-200">Content</p>
</div>
```

### Example 3: Section Layout

**Before (Tailwind Utilities):**
```tsx
<section className="py-16 px-6 md:py-24 md:px-12">
  <div className="max-w-7xl mx-auto space-y-8">
    {/* Content */}
  </div>
</section>
```

**After (WordPress Presets):**
```tsx
<section className="py-section px-spacing-40 md:px-spacing-60">
  <div className="max-w-7xl mx-auto gap-spacing-40 flex flex-col">
    {/* Content */}
  </div>
</section>
```

---

## 🎨 Design Token Mapping Reference

### Spacing Equivalents

| Tailwind | WordPress Preset | Value |
|----------|------------------|-------|
| `p-1` | `.p-spacing-10` | 0.625rem (10px) |
| `p-2` | `.p-spacing-10` | 0.625rem (10px) |
| `p-3` | `.p-spacing-10` | 0.625rem (10px) |
| `p-4` | `.p-spacing-20` | 1.25rem (20px) |
| `p-5` | `.p-spacing-20` | 1.25rem (20px) |
| `p-6` | `.p-spacing-30` | 1.875rem (30px) |
| `p-8` | `.p-spacing-40` | 2.5rem (40px) |
| `p-10` | `.p-spacing-50` | 3.125rem (50px) |
| `p-12` | `.p-spacing-60` | 3.75rem (60px) |
| `p-16` | `.p-spacing-80` | 5rem (80px) |
| `p-20` | `.p-spacing-100` | 6.25rem (100px) |

### Typography Equivalents

| Tailwind | WordPress Preset | Value |
|----------|------------------|-------|
| `text-xs` | `.text-size-100` | clamp(0.75rem, ..., 0.875rem) |
| `text-sm` | `.text-size-100` | clamp(0.75rem, ..., 0.875rem) |
| `text-base` | `.text-size-200` | clamp(1rem, ..., 1.125rem) |
| `text-lg` | `.text-size-300` | clamp(1.125rem, ..., 1.25rem) |
| `text-xl` | `.text-size-400` | clamp(1.25rem, ..., 1.5rem) |
| `text-2xl` | `.text-size-500` | clamp(1.5rem, ..., 2rem) |
| `text-3xl` | `.text-size-600` | clamp(1.875rem, ..., 2.5rem) |
| `text-4xl` | `.text-size-700` | clamp(2.25rem, ..., 3rem) |
| `text-5xl` | `.text-size-800` | clamp(2.5rem, ..., 3.5rem) |
| `text-6xl` | `.text-size-900` | clamp(3rem, ..., 4.5rem) |

### Shadow Equivalents

| Tailwind | WordPress Preset | Description |
|----------|------------------|-------------|
| `shadow-sm` | `.shadow-100` | Tiny shadow |
| `shadow` | `.shadow-200` | Base shadow |
| `shadow-md` | `.shadow-300` | Small elevation |
| `shadow-lg` | `.shadow-400` | Medium elevation |
| `shadow-xl` | `.shadow-500` | Large elevation |
| `shadow-2xl` | `.shadow-600` | X-Large elevation |

### Border Radius Equivalents

| Tailwind | WordPress Preset | Value |
|----------|------------------|-------|
| `rounded-none` | `.rounded-0` | 0 |
| `rounded-sm` | `.rounded-100` | 0.125rem (2px) |
| `rounded` | `.rounded-200` | 0.25rem (4px) |
| `rounded-md` | `.rounded-300` | 0.375rem (6px) |
| `rounded-lg` | `.rounded-500` | 0.75rem (12px) |
| `rounded-xl` | `.rounded-600` | 1rem (16px) |
| `rounded-2xl` | `.rounded-700` | 1.5rem (24px) |
| `rounded-3xl` | `.rounded-800` | 2rem (32px) |
| `rounded-full` | `.rounded-900` | 9999px |

---

## 🚀 Migration Workflow

### Step-by-Step Process

1. **Select Component**
   - Choose from pending list above
   - Prioritize high-traffic components first

2. **Create Feature Branch**
   ```bash
   git checkout -b migrate/component-name
   ```

3. **Update Component**
   - Replace Tailwind utilities with WordPress preset classes
   - Follow migration checklist
   - Maintain exact visual appearance

4. **Test Thoroughly**
   - Visual regression testing
   - Light/dark mode testing
   - Responsive testing
   - Accessibility testing

5. **Document Changes**
   - Update this migration plan
   - Note any issues or decisions
   - Update component documentation if needed

6. **Commit & Review**
   ```bash
   git add .
   git commit -m "migrate: Convert ComponentName to WordPress presets"
   ```

7. **Update Progress Tracker**
   - Mark component as complete
   - Update overall progress percentage
   - Note lessons learned

---

## 📌 Migration Priorities

### High Priority (Do First)
Components with highest visibility and usage:

1. **Button** ✅ (COMPLETE)
2. **Card** ✅ (COMPLETE)
3. Header (Navigation)
4. Footer (Contact)
5. HeroSection
6. PortfolioCard
7. BlogCard
8. ContactForm

### Medium Priority (Do Second)
Important but less critical:

9. HeroLayout
10. SectionLayout
11. PortfolioGrid
12. BlogPage
13. HomePage
14. AboutPage

### Low Priority (Do Last)
Nice-to-have, less visible:

15. ThemeToggle
16. ScrollDownArrow
17. ScrollBackToTop
18. Badge
19. Pagination
20. ShareButtons

---

## ⚠️ Known Issues & Decisions

### Issue 1: Responsive Spacing
**Problem:** Some components use responsive spacing (e.g., `p-4 md:p-8 lg:p-12`)  
**Solution:** Use Tailwind responsive prefixes with WordPress classes: `p-spacing-20 md:p-spacing-40 lg:p-spacing-60`

### Issue 2: Custom Gradients
**Problem:** Brand gradients aren't in WordPress preset system  
**Decision:** Keep existing gradient classes (`.bg-gradient-pink-purple-blue`) - they're brand-specific

### Issue 3: Gap Utilities
**Problem:** `space-y-4` doesn't have direct WordPress equivalent  
**Solution:** Replace with `gap-spacing-20` when using flex/grid, or use margin utilities

### Issue 4: Complex Hover States
**Problem:** Hover states with multiple property changes  
**Decision:** Keep existing hover utilities, combine with WordPress classes where possible

---

## 📊 Success Metrics

### Completion Metrics
- [ ] 100% of components migrated
- [ ] 0 visual regressions
- [ ] All tests passing
- [ ] Documentation updated

### Quality Metrics
- [ ] Consistent class naming across all components
- [ ] Reduced CSS bundle size (remove unused Tailwind utilities)
- [ ] Improved maintainability (predictable patterns)
- [ ] WordPress block theme ready

### Performance Metrics
- [ ] No performance degradation
- [ ] Lighthouse scores maintained (95+)
- [ ] Bundle size same or smaller

---

## 🎓 Lessons Learned

### What Works Well
- WordPress preset classes are more semantic
- Numeric scales are easier to remember
- Helper classes reduce repetition
- Migration is non-breaking (can do gradually)

### Challenges
- Responsive utilities require Tailwind prefixes
- Some custom brand patterns need special handling
- Need to maintain muscle memory for new class names

### Best Practices
1. Migrate one component at a time
2. Test thoroughly before moving to next
3. Document any custom solutions
4. Keep visual design exactly the same
5. Update this plan as we learn

---

## 📅 Timeline

### Week 1 (Current)
- ✅ Phase 1: Foundation complete
- ✅ Migration plan created
- ✅ Button component migrated
- ✅ Card component migrated

### Week 2
- [ ] Header component
- [ ] Footer component
- [ ] HeroSection component
- [ ] Update documentation

### Week 3
- [ ] Portfolio components
- [ ] Blog components
- [ ] Form components

### Week 4
- [ ] Page components
- [ ] Final testing
- [ ] Documentation review

### Future
- Phase 3: Deprecate old variables
- Full WordPress block theme integration

---

## 🔗 Related Documentation

- [WordPress Preset System Guide](./wordpress-preset-system.md)
- [Design Tokens - Colors](./design-tokens/colors.md)
- [Design Tokens - Typography](./design-tokens/typography.md)
- [Design Tokens - Spacing](./design-tokens/spacing.md)
- [Main Guidelines](./Guidelines.md)

---

**Last Updated:** January 2025  
**Maintained By:** Ash Shaw Portfolio Team  
**Status:** Phase 2 - In Progress (5% Complete)