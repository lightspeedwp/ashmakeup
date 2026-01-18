# ⚡ QUICK REFERENCE - Complete CSS Consolidation

**Status:** 2 steps to 100% completion

---

## ✅ STEP 1: Copy CSS File (10 seconds)

```bash
cp styles/globals.css src/styles/globals.css
```

---

## ✅ STEP 2: Add CSS Class (30 seconds)

Open `/src/styles/globals.css` and add:

```css
/* Section Padding - Small (32px top/bottom) */
.py-section-sm {
  padding-top: 32px;
  padding-bottom: 32px;
}
```

Add this in the `@layer utilities` section (around line 360-800).

---

## ✅ STEP 3: Test (5 seconds)

```bash
npm run dev
```

---

## 🎯 DONE!

Your CSS is now:
- ✅ Consolidated to `/src/styles/`
- ✅ HeroLayout has 32px padding
- ✅ All imports working correctly
- ✅ WordPress-aligned semantic CSS

---

## 📊 What Changed

| File | Change |
|------|--------|
| `/components/sections/HeroLayout.tsx` | ✅ Added `py-section-sm` class |
| `/src/styles/globals.css` | ⚠️ Copy + add class |

---

**Total time:** < 1 minute  
**Commands:** 3 simple steps  
**Let's go!** 🚀
