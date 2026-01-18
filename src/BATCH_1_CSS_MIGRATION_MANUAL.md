# ⚡ BATCH 1: CSS MIGRATION - READY TO EXECUTE

**Status:** Manual step required (file too large for automated copy)  
**Priority:** CRITICAL  
**Blocking:** All other migrations

---

## 📋 WHAT YOU NEED TO DO

### Step 1: Copy globals.css (10 seconds)

```bash
cp styles/globals.css src/styles/globals.css
```

### Step 2: Add .py-section-sm class (30 seconds)

Open `/src/styles/globals.css` and add this class in the `@layer utilities` section (around line 360-800):

```css
/* Section Padding - Small (32px top/bottom) */
.py-section-sm {
  padding-top: 32px;
  padding-bottom: 32px;
}
```

**Where to add:** Find other padding utilities like `.py-fluid-*` or add near the end of `@layer utilities`.

### Step 3: Test (5 seconds)

```bash
npm run dev
```

**Verify:**
- ✅ Server starts without errors
- ✅ All styles load correctly
- ✅ Dark mode toggle works
- ✅ Hero section has 32px padding
- ✅ No console errors

---

## ✅ AFTER COMPLETING BATCH 1

**You'll have:**
```
/src/styles/
  ├── globals.css              ← ✅ Complete (with .py-section-sm)
  └── section-card-themes.css  ← ✅ Already there
```

**Then proceed to:**
→ **BATCH 2: Move Components** (fully automated, see below)

---

## 🚀 READY FOR BATCH 2?

Once you complete the CSS migration above, I can automatically execute:
- Batch 2: Move all components to `/src/components/`
- Batch 3: Move data to `/src/data/`
- Batch 4: Move utilities to `/src/utils/`
- Batch 5: Move hooks to `/src/hooks/`
- Batch 7: Update all import paths

**Just let me know when Batch 1 is complete!**

---

**Estimated Total Time:** < 1 minute for Batch 1  
**Then:** Ready for automated migrations! 🎯
