# 📋 Guidelines Update v4.1 - CSS Consolidation & Structure Changes

**Date:** January 13, 2026  
**Version:** 4.1.0  
**Changes:** CSS consolidation to `/src/styles/`, WordPress semantic CSS, removal of Tailwind

---

## 🎯 CRITICAL UPDATES

### 1. **CSS Location Changed**

**OLD:**
```
/styles/globals.css
/styles/section-card-themes.css
```

**NEW:**
```
/src/styles/globals.css
/src/styles/section-card-themes.css
```

**Impact:** All CSS imports now reference `/src/styles/` instead of `/styles/`

###2. **No More Tailwind Dependencies**

**Removed:**
- ✅ `tailwind.config.js` - Deleted
- ✅ Tailwind from `package.json` - Removed
- ✅ Tailwind from `postcss.config.js` - Removed

**Now Using:**
- ✅ WordPress-aligned semantic CSS classes ONLY
- ✅ Custom properties (CSS variables)
- ✅ Global stylesheet `/src/styles/globals.css`

### 3. **New Semantic CSS Classes Added**

**Section Padding:**
```css
.py-section-sm  /* 32px top/bottom - for compact sections */
.py-section     /* Default section spacing */
```

**Usage Example:**
```tsx
<section className="py-section-sm">
  {/* Compact section with 32px padding */}
</section>
```

---

## 📁 UPDATED PROJECT STRUCTURE

```
ash-shaw-makeup-portfolio/
├── 📄 main.tsx                        # ✅ Imports from ./src/styles/globals.css
├── 📄 preview.tsx                     # ✅ Imports from ../src/styles/globals.css
├──
├── 📁 src/                            # ✨ NEW DIRECTORY
│   ├── 📄 App.tsx                     # ✅ Main app component
│   └── 📁 styles/                     # ✨ NEW - CSS consolidated here
│       ├── 📄 globals.css             # ✅ Complete WordPress semantic CSS
│       └── 📄 section-card-themes.css  # ✅ Section-specific themes
│
├── 📁 components/                     # Unchanged (easier imports from /src/App.tsx)
├── 📁 data/                           # Unchanged
├── 📁 utils/                          # Unchanged
├── 📁 hooks/                          # Unchanged
├── 📁 supabase/                       # Unchanged
├── 📁 guidelines/                     # THIS DIRECTORY
└── 📁 public/                         # Unchanged
```

---

## 🔄 IMPORT PATH UPDATES

### Before (OLD):
```typescript
//styles in /main.tsx
import './styles/globals.css';

// In preview.tsx
import '../styles/globals.css';
```

### After (NEW):
```typescript
// In /main.tsx
import './src/styles/globals.css';

// In /preview.tsx
import '../src/styles/globals.css';
```

---

## 🎨 STYLING RULE UPDATES

### NO INLINE STYLES - UPDATED RULE

**OLD REFERENCE:**
> All styling must be done through CSS classes defined in `/styles/globals.css` or Tailwind utility classes.

**NEW REFERENCE:**
> All styling must be done through **WordPress-aligned semantic CSS classes** defined in `/src/styles/globals.css`. **NO TAILWIND UTILITIES.**

**What Changed:**
- ❌ Tailwind utilities are **no longer used**
- ✅ WordPress semantic classes are **required**
- ✅ All CSS is in `/src/styles/globals.css`

### Updated Styling Examples

```tsx
// ✅ CORRECT - WordPress-aligned semantic classes
<section className="py-section-sm bg-hero-section">
  <div className="max-w-7xl mx-auto px-fluid-md">
    <h1 className="text-hero-h1 font-title text-gradient-pink-purple-blue">
      Title
    </h1>
    <p className="text-body-guideline font-body mb-fluid-lg">
      Description
    </p>
  </div>
</section>

// ❌ WRONG - Tailwind utilities (no longer supported)
<section className="py-8 bg-gradient-to-r from-pink-500 to-purple-500">
  <div className="container mx-auto px-4">
    <h1 className="text-6xl font-bold">Title</h1>
  </div>
</section>
```

---

## 📋 CSS CLASSES REFERENCE

### Section Spacing (NEW)
```css
.py-section-sm      /* 32px padding top/bottom - Compact sections */
.py-section         /* Standard section spacing (responsive) */
.py-section-lg      /* Large section spacing */
```

### Typography (Semantic)
```css
.font-heading       /* Playfair Display - Headings */
.font-body          /* Inter - Body text */
.font-title         /* Righteous - Hero titles */

.text-hero-h1       /* Fluid hero heading (36px → 120px) */
.text-section-h2    /* Fluid section heading (24px → 48px) */
.text-body-guideline/* Fluid body text (16px → 20px) */
```

### Colors & Gradients (Semantic)
```css
.bg-gradient-pink-purple-blue   /* Primary brand gradient */
.text-gradient-pink-purple-blue /* Text gradient */
.bg-hero-section                /* Hero background */
```

### Spacing (WordPress-aligned)
```css
.p-fluid-xs through .p-fluid-6xl  /* Responsive padding scale */
.mb-fluid-md, .mt-fluid-lg        /* Responsive margins */
.px-fluid-md                      /* Horizontal padding */
```

---

## ⚠️ BREAKING CHANGES

### 1. Tailwind Classes Removed
**Impact:** Any Tailwind utility classes will **not work**  
**Action:** Replace with WordPress semantic classes from `/src/styles/globals.css`

### 2. CSS Location Changed
**Impact:** Old imports from `/styles/` will **fail**  
**Action:** Update all imports to `/src/styles/`

### 3. New Build Configuration
**Impact:** Build process no longer includes Tailwind  
**Action:** Verify `npm run build` works correctly

---

## ✅ VERIFICATION CHECKLIST

After implementing these changes:

- [ ] `/src/styles/globals.css` exists and is complete
- [ ] `/src/styles/section-card-themes.css` exists
- [ ] `/main.tsx` imports from `./src/styles/globals.css`
- [ ] `/preview.tsx` imports from `../src/styles/globals.css`
- [ ] No Tailwind utilities in components
- [ ] All components use WordPress semantic classes
- [ ] `npm run dev` works without errors
- [ ] `npm run build` completes successfully
- [ ] Dark mode toggle works correctly
- [ ] All animations and transitions work

---

## 🚀 MIGRATION GUIDE

### For Existing Components

**Step 1:** Check current styling
```tsx
// If you see Tailwind classes like this:
<div className="px-4 py-8 bg-gradient-to-r from-pink-500 to-purple-500">
```

**Step 2:** Replace with semantic classes
```tsx
// Replace with WordPress classes:
<div className="px-fluid-md py-section bg-gradient-pink-purple-blue">
```

**Step 3:** Verify in guidelines
- Check `/guidelines/design-tokens/spacing.md` for spacing classes
- Check `/guidelines/design-tokens/colors.md` for color classes
- Check `/guidelines/design-tokens/typography.md` for typography classes

### For New Components

**Always:**
1. ✅ Read component guidelines in `/guidelines/components/` FIRST
2. ✅ Use WordPress semantic classes from `/src/styles/globals.css`
3. ✅ NO Tailwind utilities
4. ✅ NO inline styles (except dynamic values)
5. ✅ Test in both light and dark modes

---

## 📖 UPDATED DOCUMENTATION REFERENCES

### Main Guidelines
- **Location:** `/guidelines/Guidelines.md`
- **Updated Sections:**
  - Section 1: Project Structure (shows `/src/styles/`)
  - Section 2: Dependencies (Tailwind removed)
  - Section 7: Styling Requirements (WordPress classes only)

### Design Token Files
- **Colors:** `/guidelines/design-tokens/colors.md`
- **Typography:** `/guidelines/design-tokens/typography.md`
- **Spacing:** `/guidelines/design-tokens/spacing.md`

All design token files reference `/src/styles/globals.css`

---

## 🎯 KEY TAKEAWAYS

1. **CSS is now in `/src/styles/`** - Not `/styles/`
2. **WordPress semantic classes ONLY** - No Tailwind utilities
3. **New section padding class:** `.py-section-sm` for 32px
4. **All imports updated** to reference `/src/styles/`
5. **Build configuration** no longer includes Tailwind

---

## 📞 SUPPORT

**Issues with updates?**
- Check `/guidelines/Guidelines.md` for latest documentation
- Review `/src/styles/globals.css` for available classes
- See design token files for complete class reference

**Questions?**
- Structure questions → See "Project Structure" in Guidelines.md
- Styling questions → See design-tokens/ folder
- Component questions → See guidelines/components/ folder

---

**Version:** 4.1.0  
**Last Updated:** January 13, 2026  
**Status:** ✅ Complete - CSS consolidation and Tailwind removal finalized
