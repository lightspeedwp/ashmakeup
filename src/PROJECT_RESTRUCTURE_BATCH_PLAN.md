# 🚀 PROJECT RESTRUCTURE TO /src - BATCH MIGRATION PLAN

**Date:** January 13, 2026  
**Status:** In Progress  
**Current Completion:** 10% (CSS partial, App.tsx created)

---

## ✅ COMPLETED BATCHES

### Batch 0: Initial Setup ✅
- [x] Created `/src/App.tsx`
- [x] Removed Tailwind config files
- [x] Updated build configuration
- [x] Created `/src/styles/` directory
- [x] Copied `section-card-themes.css` to `/src/styles/`

---

## 📋 REMAINING BATCHES

### **Batch 1: Complete CSS Migration** ⚠️ IN PROGRESS
**Priority:** CRITICAL (blocks other migrations)  
**Files to Move:**
```bash
/styles/globals.css → /src/styles/globals.css
```

**Additional Tasks:**
- [ ] Copy globals.css to /src/styles/ (3,583 lines)
- [ ] Add `.py-section-sm` CSS class to globals.css
- [ ] Verify `@import './section-card-themes.css';` works
- [ ] Test build: `npm run build`
- [ ] Test dev: `npm run dev`

**Manual Steps Required:**
```bash
# Step 1: Copy globals.css
cp styles/globals.css src/styles/globals.css

# Step 2: Add .py-section-sm class
# Open /src/styles/globals.css and add in @layer utilities:
# .py-section-sm {
#   padding-top: 32px;
#   padding-bottom: 32px;
# }
```

**Verification:**
```bash
npm run dev
# Check: All styles load correctly
# Check: Dark mode works
# Check: Hero section has 32px padding
```

---

### **Batch 2: Move Components** 🔜 NEXT
**Priority:** HIGH  
**Estimated Time:** 5-10 minutes  
**Files to Move:** ~60 component files

```bash
/components/ → /src/components/
```

**Sub-directories:**
- `/components/admin/` (3 files)
- `/components/common/` (12 files)
- `/components/figma/` (1 file - protected)
- `/components/pages/` (6 files)
- `/components/sections/` (14 files)
- `/components/ui/` (60+ files)

**Impact:**
- ✅ Cleaner project structure
- ✅ Standard Vite/React pattern
- ⚠️ Requires import path updates in `/src/App.tsx`

**Import Updates Needed:**
```typescript
// In /src/App.tsx
// BEFORE:
import { Header } from '../components/common/Header';

// AFTER:
import { Header } from './components/common/Header';
```

**Commands:**
```bash
# Create directory
mkdir -p /src/components

# Move all components
mv /components/* /src/components/

# Or use rsync to preserve structure
rsync -av /components/ /src/components/
```

---

### **Batch 3: Move Data Layer** 🔜
**Priority:** HIGH  
**Estimated Time:** 2-3 minutes  
**Files to Move:** ~20 data files

```bash
/data/ → /src/data/
```

**Sub-directories:**
- `/data/mock/blog/` (3 files)
- `/data/mock/images/` (2 files)
- `/data/mock/pages/` (4 files)
- `/data/mock/portfolio/` (7 files)
- `/data/mock/testimonials/` (1 file)
- `/data/mock/ui/` (2 files)
- `/data/types/` (4 files)

**Impact:**
- ✅ Data layer with components
- ✅ Better co-location
- ⚠️ Requires import path updates in components

**Commands:**
```bash
# Create directory
mkdir -p /src/data

# Move all data files
mv /data/* /src/data/
```

---

### **Batch 4: Move Utilities** 🔜
**Priority:** MEDIUM  
**Estimated Time:** 2-3 minutes  
**Files to Move:** ~15 utility files

```bash
/utils/ → /src/utils/
```

**Files:**
- `/utils/contentfulService.ts`
- `/utils/emailService.ts`
- `/utils/instagramService.ts`
- `/utils/portfolioService.ts`
- `/utils/contentfulValidation.ts`
- `/utils/contentfulPreview.ts`
- `/utils/contentfulRichText.ts`
- `/utils/contentfulAnalytics.ts`
- `/utils/contentfulWebhooks.ts`
- `/utils/browserExtensionDetector.ts`
- `/utils/extensionErrorSuppressor.ts`
- `/utils/timeoutHandler.ts`
- `/utils/__tests__/` (test files)
- `/utils/supabase/` (Supabase utilities)

**Commands:**
```bash
# Create directory
mkdir -p /src/utils

# Move all utilities
mv /utils/* /src/utils/
```

---

### **Batch 5: Move Hooks** 🔜
**Priority:** MEDIUM  
**Estimated Time:** 1 minute  
**Files to Move:** 1 hook file

```bash
/hooks/ → /src/hooks/
```

**Files:**
- `/hooks/useContentful.ts`

**Commands:**
```bash
# Create directory
mkdir -p /src/hooks

# Move hooks
mv /hooks/* /src/hooks/
```

---

### **Batch 6: Move Supabase Functions** 🔜
**Priority:** LOW (backend code)  
**Estimated Time:** 1-2 minutes  
**Files to Move:** 3 Supabase function files

```bash
/supabase/ → /src/supabase/
```

**Files:**
- `/supabase/functions/server/index.tsx`
- `/supabase/functions/server/kv_store.tsx`

**Note:** Supabase functions can stay in root OR move to /src. This is optional.

**Commands:**
```bash
# Option A: Keep in root (recommended for Supabase deployment)
# No action needed

# Option B: Move to /src (better organization)
mkdir -p /src/supabase
mv /supabase/* /src/supabase/
```

---

### **Batch 7: Update Import Paths** 🔜
**Priority:** CRITICAL (after Batches 2-5)  
**Estimated Time:** 10-15 minutes  
**Files to Update:** Multiple

**Update these files:**
- [ ] `/src/App.tsx` - Update component imports
- [ ] `/main.tsx` - Verify imports
- [ ] `/preview.tsx` - Verify Storybook imports
- [ ] `vite.config.ts` - Update alias paths
- [ ] `tsconfig.json` - Update path mappings
- [ ] All component files - Update relative imports

**Example Updates:**

**In `/src/App.tsx`:**
```typescript
// BEFORE:
import { Header } from '../components/common/Header';
import { homepageHero } from '../data/mock';
import { sendContactForm } from '../utils/emailService';

// AFTER:
import { Header } from './components/common/Header';
import { homepageHero } from './data/mock';
import { sendContactForm } from './utils/emailService';
```

**In `vite.config.ts`:**
```typescript
// BEFORE:
resolve: {
  alias: {
    "@": resolve(__dirname, "./"),
    "@/components": resolve(__dirname, "./components"),
    "@/data": resolve(__dirname, "./data"),
    "@/utils": resolve(__dirname, "./utils"),
  },
}

// AFTER:
resolve: {
  alias: {
    "@": resolve(__dirname, "./src"),
    "@/components": resolve(__dirname, "./src/components"),
    "@/data": resolve(__dirname, "./src/data"),
    "@/utils": resolve(__dirname, "./src/utils"),
  },
}
```

---

### **Batch 8: Clean Up Old Directories** 🔜
**Priority:** LOW (after all migrations complete)  
**Estimated Time:** 1 minute  

**Delete empty directories:**
```bash
# After verifying everything works
rm -rf /components
rm -rf /data  
rm -rf /utils
rm -rf /hooks
rm -rf /styles  # Keep /styles temporarily for backup
```

**Verification before deletion:**
```bash
# Check directories are empty
ls -la /components
ls -la /data
ls -la /utils
ls -la /hooks

# Verify app works
npm run dev
npm run build
```

---

## 📊 MIGRATION PROGRESS TRACKER

| Batch | Status | Priority | Files | Est. Time |
|-------|--------|----------|-------|-----------|
| 0: Initial Setup | ✅ Done | - | 2 | - |
| 1: CSS Complete | ⚠️ In Progress | CRITICAL | 1 | 5 min |
| 2: Components | 🔜 Next | HIGH | ~60 | 10 min |
| 3: Data | 🔜 Pending | HIGH | ~20 | 3 min |
| 4: Utils | 🔜 Pending | MEDIUM | ~15 | 3 min |
| 5: Hooks | 🔜 Pending | MEDIUM | 1 | 1 min |
| 6: Supabase | 🔜 Pending | LOW | 3 | 2 min |
| 7: Import Paths | 🔜 Pending | CRITICAL | Many | 15 min |
| 8: Cleanup | 🔜 Pending | LOW | - | 1 min |

**Total Estimated Time:** ~40 minutes

---

## 🎯 RECOMMENDED EXECUTION ORDER

### Phase 1: Foundation (CRITICAL)
1. ✅ Batch 0: Initial Setup (DONE)
2. ⚠️ **Batch 1: CSS Complete** (DO THIS NOW)
3. 🔜 Batch 2: Move Components
4. 🔜 Batch 7: Update Import Paths (partial)

**Checkpoint:** Verify app runs with `npm run dev`

### Phase 2: Data & Services (HIGH)
5. 🔜 Batch 3: Move Data
6. 🔜 Batch 4: Move Utils
7. 🔜 Batch 5: Move Hooks
8. 🔜 Batch 7: Update Import Paths (complete)

**Checkpoint:** Verify build with `npm run build`

### Phase 3: Optional & Cleanup (LOW)
9. 🔜 Batch 6: Move Supabase (optional)
10. 🔜 Batch 8: Clean Up

**Final Checkpoint:** Full testing

---

## ⚡ QUICK START - NEXT STEPS

**Step 1: Complete CSS Migration (Batch 1)**
```bash
# Copy globals.css
cp styles/globals.css src/styles/globals.css

# Add .py-section-sm class to /src/styles/globals.css
# (See Batch 1 details above)

# Test
npm run dev
```

**Step 2: Move Components (Batch 2)**
```bash
# Create directory
mkdir -p src/components

# Move components
mv components/* src/components/

# Update imports in /src/App.tsx
# (Change ../components to ./components)

# Test
npm run dev
```

**Step 3: Continue with remaining batches...**

---

## 🚨 IMPORTANT NOTES

### DO NOT MOVE These Files:
- ❌ `/main.tsx` - Must stay in root (Vite entry point)
- ❌ `/index.html` - Must stay in root (Vite entry point)
- ❌ `/vite.config.ts` - Must stay in root (Vite config)
- ❌ `/tsconfig.json` - Must stay in root (TypeScript config)
- ❌ `/package.json` - Must stay in root (npm config)
- ❌ `/guidelines/` - Keep in root (documentation)
- ❌ `/public/` - Keep in root (static assets)
- ❌ `/imports/` - Keep in root (Figma imports)

### Protected Files:
- ⚠️ `/components/figma/ImageWithFallback.tsx` - Protected, but can move
- ⚠️ `/src/App.tsx` - Created, update imports only

---

## 📋 VERIFICATION CHECKLIST

After each batch:
- [ ] Files moved successfully
- [ ] No compilation errors: `npm run build`
- [ ] Dev server runs: `npm run dev`
- [ ] App loads in browser
- [ ] No console errors
- [ ] All features work (navigation, dark mode, etc.)

After all batches:
- [ ] Full app functionality verified
- [ ] Storybook works: `npm run storybook`
- [ ] Build succeeds: `npm run build`
- [ ] Production build tested
- [ ] All imports resolved correctly
- [ ] No broken links or missing files

---

**Current Status:** Ready for Batch 1 (CSS Complete)  
**Next Action:** Complete CSS migration  
**Estimated Total Time:** ~40 minutes for complete restructure

---

**Last Updated:** January 13, 2026  
**Ready to execute!** 🚀
