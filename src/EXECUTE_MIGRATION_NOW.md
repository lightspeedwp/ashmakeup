# 🎯 EXECUTE MIGRATION NOW - Step-by-Step

**Current Status:** Import paths updated ✅  
**Remaining Time:** 5-6 minutes

---

## ⚡ QUICK START (If Step 1 CSS is Done)

```bash
# 1. Make scripts executable (5 seconds)
chmod +x migrate-components.sh migrate-data.sh migrate-utils-hooks.sh verify-migration.sh

# 2. Run migrations (3 minutes)
./migrate-components.sh
./migrate-data.sh
./migrate-utils-hooks.sh

# 3. Verify (1 minute)
./verify-migration.sh
npm run dev
```

---

## 📋 DETAILED STEPS

### ⚠️ **PREREQUISITE: Complete Step 1 (CSS)**

**If you haven't done this yet:**
```bash
# Copy CSS file
cp styles/globals.css src/styles/globals.css

# Then edit /src/styles/globals.css and add this class:
# .py-section-sm {
#   padding-top: 32px;
#   padding-bottom: 32px;
# }

# Test
npm run dev
```

---

### **Step 2: Make Scripts Executable**

```bash
chmod +x migrate-components.sh
chmod +x migrate-data.sh
chmod +x migrate-utils-hooks.sh
chmod +x verify-migration.sh
```

**Expected output:**
- No output = success
- Scripts are now executable

---

### **Step 3: Run Migration Scripts**

#### **3A: Move Components** (~1 minute)
```bash
./migrate-components.sh
```

**Expected output:**
```
📦 Batch 2: Moving components to /src/components/...
Creating directory structure...
Moving component files...
  ✅ Admin components moved
  ✅ Common components moved
  ✅ Figma components moved
  ✅ Page components moved
  ✅ Section components moved
  ✅ UI components moved

✅ Batch 2 Complete: Components moved to /src/components/

📊 Summary:
  - Admin components: 3 files
  - Common components: 12 files
  - Figma components: 1 files
  - Page components: 6 files
  - Section components: 14 files
  - UI components: 60+ files

🔜 Next: Run ./migrate-data.sh
```

#### **3B: Move Data** (~30 seconds)
```bash
./migrate-data.sh
```

**Expected output:**
```
📦 Batch 3: Moving data to /src/data/...
Creating directory structure...
Moving data files...
  ✅ Blog mock data moved
  ✅ Images mock data moved
  ✅ Pages mock data moved
  ✅ Portfolio mock data moved
  ✅ Testimonials mock data moved
  ✅ UI mock data moved
  ✅ Mock data index moved
  ✅ Type definitions moved
  ✅ README moved

✅ Batch 3 Complete: Data moved to /src/data/

🔜 Next: Run ./migrate-utils-hooks.sh
```

#### **3C: Move Utils & Hooks** (~30 seconds)
```bash
./migrate-utils-hooks.sh
```

**Expected output:**
```
📦 Batch 4 & 5: Moving utils and hooks to /src/...
Creating utils directory structure...
Creating hooks directory structure...
Moving utility files...
  ✅ Test files moved
  ✅ Supabase utils moved
  ✅ Utility files moved
Moving hooks...
  ✅ Hooks moved

✅ Batch 4 & 5 Complete: Utils and hooks moved to /src/

🔜 Next: Run ./verify-migration.sh
```

---

### **Step 4: Verify Migration**

```bash
./verify-migration.sh
```

**Expected output:**
```
🔍 Verifying /src migration...

📁 Checking directories...
  ✅ /src/components/ exists
  ✅ /src/data/ exists
  ✅ /src/utils/ exists
  ✅ /src/hooks/ exists
  ✅ /src/styles/ exists

📄 Checking key files...
  ✅ /src/App.tsx exists
  ✅ /src/styles/globals.css exists
  ✅ /src/styles/section-card-themes.css exists

🗑️  Checking old directories...
  ✅ /components/ is empty or removed
  ✅ /data/ is empty or removed
  ✅ /utils/ is empty or removed
  ✅ /hooks/ is empty or removed

📊 File count summary:
  - Components: 96 files
  - Data files: 22 files
  - Utilities: 15 files
  - Hooks: 1 files
  - Styles: 2 files

🧪 Testing build...
  ✅ Build successful

═══════════════════════════════════════
📊 VERIFICATION SUMMARY
═══════════════════════════════════════
  ✅ Checks passed: 13
  ❌ Checks failed: 0
═══════════════════════════════════════

🎉 MIGRATION SUCCESSFUL!
```

---

### **Step 5: Test Application**

```bash
# Start development server
npm run dev
```

**Test in browser (http://localhost:5173):**
- ✅ Homepage loads
- ✅ Navigation works (About, Portfolio, Blog, Contact)
- ✅ Dark mode toggle works
- ✅ All sections display correctly
- ✅ No console errors
- ✅ Hero section has 32px padding (from .py-section-sm)

---

### **Step 6: Test Production Build**

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

**Expected:**
- ✅ Build succeeds without errors
- ✅ Preview works correctly
- ✅ All features functional

---

## 🎉 SUCCESS CRITERIA

**All migrations complete when:**
- ✅ All scripts ran without errors
- ✅ Verification script shows 100% success
- ✅ `npm run dev` works
- ✅ `npm run build` succeeds
- ✅ App loads in browser
- ✅ All pages navigate correctly
- ✅ Dark mode works
- ✅ No console errors

---

## 🧹 CLEANUP (Optional)

**After verifying everything works:**

```bash
# Remove old empty directories
rm -rf components
rm -rf data
rm -rf utils
rm -rf hooks
rm -rf styles

# Keep old globals.css as backup (optional)
# Or delete: rm styles/globals.css
```

---

## 📊 FINAL STRUCTURE

```
/
├── src/
│   ├── App.tsx ✅
│   ├── components/ ✅
│   │   ├── admin/
│   │   ├── common/
│   │   ├── figma/
│   │   ├── pages/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/ ✅
│   │   ├── mock/
│   │   └── types/
│   ├── hooks/ ✅
│   ├── utils/ ✅
│   └── styles/ ✅
│       ├── globals.css
│       └── section-card-themes.css
├── main.tsx
├── index.html
├── vite.config.ts
├── package.json
└── ... (other root files)
```

---

## ❓ TROUBLESHOOTING

### **Migration script fails:**
```bash
# Check script permissions
ls -la migrate-*.sh

# Should show: -rwxr-xr-x (executable)
# If not: chmod +x migrate-*.sh
```

### **Build fails after migration:**
```bash
# Check for import errors
npm run build 2>&1 | grep "Cannot find module"

# Common fix: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **Dev server fails:**
```bash
# Check if CSS file exists
ls -lh src/styles/globals.css

# If missing, copy it:
cp styles/globals.css src/styles/globals.css

# Restart server
npm run dev
```

---

## 🚀 READY TO EXECUTE!

**Start with Step 2 if you've completed Step 1 (CSS migration).**

**Estimated total time:** 5-6 minutes

**Let's go!** ⚡

---

**Last Updated:** January 13, 2026  
**Status:** Ready for execution  
**Next:** Run migration scripts
