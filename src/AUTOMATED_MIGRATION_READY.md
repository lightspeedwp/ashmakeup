# 🤖 AUTOMATED MIGRATION - BATCHES 2-7

**Status:** Ready to execute after Batch 1 (CSS) is complete  
**Automation Level:** Fully automated  
**Estimated Time:** 5-10 minutes total

---

## 📋 WHAT WILL BE AUTOMATED

### Batch 2: Move Components ✅ Ready
**Action:** Move `/components/` → `/src/components/`  
**Method:** Create directory structure and move files

**Subdirectories to move:**
- `/components/admin/` (3 files)
- `/components/common/` (12 files)
- `/components/figma/` (1 file)
- `/components/pages/` (6 files)
- `/components/sections/` (14 files)
- `/components/ui/` (60+ files)

### Batch 3: Move Data ✅ Ready
**Action:** Move `/data/` → `/src/data/`  
**Method:** Create directory structure and move files

**Subdirectories to move:**
- `/data/mock/` (all subdirectories)
- `/data/types/` (4 files)

### Batch 4: Move Utils ✅ Ready
**Action:** Move `/utils/` → `/src/utils/`  
**Method:** Create directory structure and move files

**Files to move:**
- All utility files (~15 files)
- `/utils/__tests__/` subdirectory
- `/utils/supabase/` subdirectory

### Batch 5: Move Hooks ✅ Ready
**Action:** Move `/hooks/` → `/src/hooks/`  
**Method:** Create directory structure and move files

**Files to move:**
- `/hooks/useContentful.ts`

### Batch 7: Update Import Paths ✅ Ready
**Action:** Update all imports in `/src/App.tsx`  
**Method:** Find and replace import paths

**Updates:**
```typescript
// These imports will be automatically updated:
'../components' → './components'
'../utils' → './utils'
'../data' → './data'
'../hooks' → './hooks'
```

---

## 🎯 EXECUTION PLAN

### Step 1: Verify Batch 1 Complete
**Check:**
- [ ] `/src/styles/globals.css` exists
- [ ] `.py-section-sm` class added
- [ ] `npm run dev` works

### Step 2: Execute Automated Migrations
**I will:**
1. Create `/src/components/` directory
2. Create `/src/data/` directory  
3. Create `/src/utils/` directory
4. Create `/src/hooks/` directory
5. Update `/src/App.tsx` imports
6. Create migration report

**You will:**
1. Manually move files (I can't move files, only create/update)
2. Follow the generated instructions
3. Test after each batch

### Step 3: Verification
**After all moves:**
```bash
npm run dev    # Test development server
npm run build  # Test production build
```

---

## 📦 GENERATED MIGRATION SCRIPTS

I will generate bash scripts for you to execute:

### Script 1: `migrate-components.sh`
```bash
#!/bin/bash
# Move components to /src/components/
mkdir -p src/components/admin
mkdir -p src/components/common
mkdir -p src/components/figma
mkdir -p src/components/pages/about
mkdir -p src/components/pages/blog
mkdir -p src/components/pages/contact
mkdir -p src/components/pages/home
mkdir -p src/components/pages/portfolio
mkdir -p src/components/sections
mkdir -p src/components/ui

# Move files
mv components/admin/* src/components/admin/
mv components/common/* src/components/common/
mv components/figma/* src/components/figma/
mv components/pages/* src/components/pages/
mv components/sections/* src/components/sections/
mv components/ui/* src/components/ui/

echo "✅ Components moved to /src/components/"
```

### Script 2: `migrate-data.sh`
```bash
#!/bin/bash
# Move data to /src/data/
mkdir -p src/data/mock/blog
mkdir -p src/data/mock/images
mkdir -p src/data/mock/pages
mkdir -p src/data/mock/portfolio
mkdir -p src/data/mock/testimonials
mkdir -p src/data/mock/ui
mkdir -p src/data/types

# Move files
mv data/mock/* src/data/mock/
mv data/types/* src/data/types/
mv data/README.md src/data/

echo "✅ Data moved to /src/data/"
```

### Script 3: `migrate-utils-hooks.sh`
```bash
#!/bin/bash
# Move utils and hooks to /src/

# Utils
mkdir -p src/utils/__tests__
mkdir -p src/utils/supabase
mv utils/* src/utils/

# Hooks
mkdir -p src/hooks
mv hooks/* src/hooks/

echo "✅ Utils moved to /src/utils/"
echo "✅ Hooks moved to /src/hooks/"
```

### Script 4: `verify-migration.sh`
```bash
#!/bin/bash
# Verify migration completed successfully

echo "🔍 Verifying migration..."

# Check directories exist
if [ -d "src/components" ]; then
  echo "✅ /src/components/ exists"
else
  echo "❌ /src/components/ missing"
fi

if [ -d "src/data" ]; then
  echo "✅ /src/data/ exists"
else
  echo "❌ /src/data/ missing"
fi

if [ -d "src/utils" ]; then
  echo "✅ /src/utils/ exists"
else
  echo "❌ /src/utils/ missing"
fi

if [ -d "src/hooks" ]; then
  echo "✅ /src/hooks/ exists"
else
  echo "❌ /src/hooks/ missing"
fi

# Check old directories are empty
if [ -z "$(ls -A components 2>/dev/null)" ]; then
  echo "✅ /components/ is empty"
else
  echo "⚠️  /components/ still has files"
fi

if [ -z "$(ls -A data 2>/dev/null)" ]; then
  echo "✅ /data/ is empty"
else
  echo "⚠️  /data/ still has files"
fi

# Test build
echo ""
echo "🧪 Testing build..."
npm run build

if [ $? -eq 0 ]; then
  echo "✅ Build successful"
else
  echo "❌ Build failed"
fi
```

---

## 🚀 EXECUTION STEPS (After Batch 1)

### Step 1: I will update /src/App.tsx
**Automatic:** I'll update all import paths from `../components` to `./components`

### Step 2: You execute migration scripts
```bash
# Make scripts executable
chmod +x migrate-*.sh verify-migration.sh

# Run migrations
./migrate-components.sh
./migrate-data.sh
./migrate-utils-hooks.sh

# Verify
./verify-migration.sh
```

### Step 3: Test
```bash
npm run dev
npm run build
```

### Step 4: Clean up (optional)
```bash
# After verifying everything works
rm -rf components
rm -rf data
rm -rf utils
rm -rf hooks
```

---

## 📊 WHAT YOU'LL SEE

**Before migration:**
```
/
├── components/
├── data/
├── utils/
├── hooks/
└── src/
    ├── App.tsx
    └── styles/
```

**After migration:**
```
/
└── src/
    ├── App.tsx
    ├── components/
    ├── data/
    ├── utils/
    ├── hooks/
    └── styles/
```

---

## ✅ SUCCESS CRITERIA

After automated migration:
- [ ] `/src/components/` exists with all subdirectories
- [ ] `/src/data/` exists with all mock data
- [ ] `/src/utils/` exists with all utilities
- [ ] `/src/hooks/` exists with hooks
- [ ] `/src/App.tsx` imports updated (./components not ../components)
- [ ] `npm run dev` works without errors
- [ ] `npm run build` succeeds
- [ ] App loads in browser
- [ ] All features work

---

## ⏰ TIMELINE

| Batch | Action | Who | Time |
|-------|--------|-----|------|
| 1 | CSS Migration | You (manual) | 1 min |
| 2 | Move Components | You (script) | 1 min |
| 3 | Move Data | You (script) | 1 min |
| 4 | Move Utils | You (script) | 1 min |
| 5 | Move Hooks | You (script) | 1 min |
| 7 | Update Imports | Me (automatic) | 1 min |
| 8 | Verify | You (script) | 2 min |

**Total:** ~8 minutes

---

## 🎯 READY TO START?

**Once you complete Batch 1 (CSS migration), tell me:**
> "Batch 1 complete, ready for automated migration"

**I will then:**
1. ✅ Update `/src/App.tsx` with correct import paths
2. ✅ Generate migration scripts for you
3. ✅ Create verification checklist
4. ✅ Provide step-by-step execution guide

---

**Status:** Waiting for Batch 1 (CSS) completion  
**Next Action:** Complete CSS migration (see BATCH_1_CSS_MIGRATION_MANUAL.md)  
**Then:** Full automation! 🚀
