# ⚡ STEP 1: CSS Migration - EXECUTE NOW

**Time Required:** < 1 minute  
**Difficulty:** Easy (copy + paste)

---

## 🎯 WHAT TO DO

### **Action 1: Copy globals.css (10 seconds)**

Run this command in your terminal:

```bash
cp styles/globals.css src/styles/globals.css
```

**Expected Result:**
- ✅ File `/src/styles/globals.css` now exists (3,583 lines)
- ✅ It's an exact copy of `/styles/globals.css`

---

### **Action 2: Add .py-section-sm Class (30 seconds)**

Open the file `/src/styles/globals.css` and find the `@layer utilities` section (around line 360).

**Find this section:**
```css
@layer utilities {
  /* Brand Font Families - Enhanced with variable font support */
  .font-heading {
    font-family: var(--font-heading) !important;
    font-display: swap;
  }
```

**Add this class ANYWHERE inside the `@layer utilities {` section:**

```css
  /* Section Padding - Small (32px top/bottom) */
  .py-section-sm {
    padding-top: 32px;
    padding-bottom: 32px;
  }
```

**Suggested location:** Add it near other padding utilities (search for `.py-fluid` or `.px-fluid` classes and add it nearby).

---

### **Action 3: Test (5 seconds)**

Run the development server:

```bash
npm run dev
```

**Expected Result:**
- ✅ Server starts without errors
- ✅ Open http://localhost:5173 in browser
- ✅ Site loads correctly
- ✅ All styles work (hero section, dark mode, etc.)
- ✅ No console errors

---

## ✅ VERIFICATION

After completing Actions 1-3, verify:

```bash
# Check file exists
ls -lh src/styles/globals.css

# Should show: ~130KB file size (3,583 lines)
```

**File structure should be:**
```
/src/styles/
  ├── globals.css              ← ✅ NEW (3,583 lines)
  └── section-card-themes.css  ← ✅ Already exists
```

---

## 🚀 WHAT'S NEXT?

### **Once you complete Step 1, tell me:**

> **"Step 1 complete"**

**I will then:**
1. ✅ Update `/src/App.tsx` imports automatically
2. ✅ Update `/main.tsx` imports (if needed)
3. ✅ Provide you with migration scripts for Steps 2-5

---

## 📋 QUICK COPY-PASTE

**Terminal commands:**
```bash
# Step 1: Copy CSS
cp styles/globals.css src/styles/globals.css

# Step 2: Edit file (use your editor)
# Add .py-section-sm class to @layer utilities section

# Step 3: Test
npm run dev
```

**CSS to add:**
```css
/* Section Padding - Small (32px top/bottom) */
.py-section-sm {
  padding-top: 32px;
  padding-bottom: 32px;
}
```

---

## ⏰ ESTIMATED TIME

- **Copy file:** 10 seconds
- **Add CSS class:** 30 seconds
- **Test:** 5 seconds
- **Total:** < 1 minute

---

## ❓ TROUBLESHOOTING

**If `npm run dev` fails:**
1. Check that `/src/styles/globals.css` exists
2. Check that the CSS syntax is correct
3. Check that there are no missing closing braces `}`
4. Run `npm install` to ensure dependencies are installed

**If styles don't load:**
1. Check browser console for errors
2. Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
3. Check that `@import './section-card-themes.css';` is still present in globals.css

---

**🎯 Start now! Execute the commands above and let me know when Step 1 is complete.**

---

**Last Updated:** January 13, 2026  
**Status:** Ready to execute
