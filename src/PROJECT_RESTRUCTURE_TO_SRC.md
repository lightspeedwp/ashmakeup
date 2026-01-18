# ✅ PROJECT RESTRUCTURE TO /src DIRECTORY - INSTRUCTIONS

**Date:** January 13, 2026  
**Status:** ⚠️ PARTIALLY COMPLETE - MANUAL STEPS REQUIRED  
**Reason:** globals.css is 3,500+ lines and exceeds tool limitations

---

## ✅ COMPLETED AUTOMATICALLY

### 1. **Created /src/App.tsx** ✅
- Copied content from root `/App.tsx`
- Updated all imports to use relative paths from `/src`
- Import paths changed from `"./components"` to `"../components"`
- Version updated to 3.0.0 with restructure notes

### 2. **Removed Tailwind Config Files** ✅ (Already done in previous step)
- ✅ Deleted `tailwind.config.js`
- ✅ Updated `postcss.config.js` (removed Tailwind, kept autoprefixer)
- ✅ Updated `package.json` (removed Tailwind dependency)

---

## ⚠️ MANUAL STEPS REQUIRED

Due to file size limitations (globals.css is 3,583 lines), you'll need to perform these steps manually:

### Step 1: Create /src/styles/ Directory
```bash
mkdir -p /src/styles
```

### Step 2: Move CSS Files to /src/styles/
```bash
cp /styles/globals.css /src/styles/globals.css
cp /styles/section-card-themes.css /src/styles/section-card-themes.css
```

**Verification:**
- ✅ `/src/styles/globals.css` should exist (3,583 lines)
- ✅ `/src/styles/section-card-themes.css` should exist (564 lines)
- ✅ The `@import './section-card-themes.css';` in globals.css will work correctly

###Step 3: Update /main.tsx

**Current import:**
```typescript
import './styles/globals.css';
```

**Change to:**
```typescript
import './src/styles/globals.css';
```

**Full file should be:**
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App.tsx';
import './src/styles/globals.css';
import { SafetyWrapper } from './components/common/SafetyWrapper';

// ... rest of file
```

### Step 4: Update /preview.tsx (Storybook)

**Current import:**
```typescript
import '../styles/globals.css';
```

**Change to:**
```typescript
import '../src/styles/globals.css';
```

### Step 5: Update vite.config.ts

**Current config:**
```typescript
resolve: {
  alias: {
    "@": resolve(__dirname, "./"),
    "@/components": resolve(__dirname, "./components"),
    "@/styles": resolve(__dirname, "./styles"),
    "@/utils": resolve(__dirname, "./utils"),
  },
},
```

**Change to:**
```typescript
resolve: {
  alias: {
    "@": resolve(__dirname, "./src"),
    "@/components": resolve(__dirname, "./components"),
    "@/styles": resolve(__dirname, "./src/styles"),
    "@/utils": resolve(__dirname, "./utils"),
  },
},
```

### Step 6: Update tsconfig.json

**Current paths:**
```json
"paths": {
  "@/*": ["./*"],
  "@/components/*": ["./components/*"],
  "@/styles/*": ["./styles/*"],
  "@/utils/*": ["./utils/*"]
}
```

**Change to:**
```json
"paths": {
  "@/*": ["./src/*"],
  "@/components/*": ["./components/*"],
  "@/styles/*": ["./src/styles/*"],
  "@/utils/*": ["./utils/*"]
}
```

### Step 7: Create /vercel.json (Optional - You use Netlify)

Since you deploy to **Netlify** (not Vercel), this file is **optional**. However, if you ever want Vercel compatibility:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

**⚠️ Note:** You already have `netlify.toml` for deployment, so `/vercel.json` is NOT necessary unless you plan to deploy to Vercel.

---

## 📋 VERIFICATION CHECKLIST

After performing manual steps, verify:

- [ ] `/src/App.tsx` exists with updated imports
- [ ] `/src/styles/globals.css` exists (3,583 lines)
- [ ] `/src/styles/section-card-themes.css` exists (564 lines)
- [ ] `/main.tsx` imports from `'./src/App.tsx'` and `'./src/styles/globals.css'`
- [ ] `/preview.tsx` imports from `'../src/styles/globals.css'`
- [ ] `vite.config.ts` updated with new paths
- [ ] `tsconfig.json` updated with new paths
- [ ] `npm run dev` works without errors
- [ ] `npm run build` completes successfully

---

## 🎯 EXPECTED FINAL STRUCTURE

```
ash-shaw-makeup-portfolio/
├── src/
│   ├── App.tsx                  ← New location ✅
│   └── styles/
│       ├── globals.css          ← Moved here (manual)
│       └── section-card-themes.css ← Moved here (manual)
│
├── App.tsx                      ← Protected (ignore, not used)
├── main.tsx                     ← Update imports (manual)
├── index.html                   ← No changes needed
├── vite.config.ts               ← Update paths (manual)
├── tsconfig.json                ← Update paths (manual)
├── package.json                 ← Already updated ✅
├── postcss.config.js            ← Already updated ✅
│
├── components/                  ← Stays in root
├── data/                        ← Stays in root
├── utils/                       ← Stays in root
├── hooks/                       ← Stays in root
├── public/                      ← Stays in root
└── guidelines/                  ← Stays in root
```

**Philosophy:** Only App.tsx and styles move to /src. Everything else stays in root for easier imports.

---

## 🚀 NEXT STEPS

1. **Perform Manual Steps 1-6** (copy CSS, update configs)
2. **Test Build:**
   ```bash
   npm run dev
   ```
3. **Verify No Errors:**
   - Check browser console
   - Verify styles are loading
   - Test navigation works

4. **Once Working:**
   - Delete old `/styles/` directory (optional, after verification)
   - Keep `/App.tsx` in root (it's protected, can't delete)

---

## ❓ WHY THIS STRUCTURE?

### Why Only /src/App.tsx and /src/styles/?

**Standard Vite Pattern:**
- Most Vite projects use `/src` for source code
- Keeps compiled code separate from root config files
- Makes imports cleaner (`import from './src/App'`)

**Why Not Move Everything to /src?**
- Would require updating 100+ import statements
- Components already organized well in root
- Minimal disruption with this hybrid approach

**Trade-offs:**
- ✅ Cleaner main entry point (main.tsx → src/App.tsx)
- ✅ CSS consolidated in src/styles/
- ✅ Minimal breaking changes
- ⚠️ Hybrid structure (not fully /src)

---

## 🛠️ TROUBLESHOOTING

### If `npm run dev` fails:

**Error: "Cannot find module './src/App'"**
- Solution: Make sure `/src/App.tsx` exists
- Verify `/main.tsx` has correct import path

**Error: "Cannot find './src/styles/globals.css'"**
- Solution: Make sure CSS files are copied to `/src/styles/`
- Verify `/main.tsx` and `/preview.tsx` have correct paths

**Error: "Module not found: @/styles"**
- Solution: Update `vite.config.ts` and `tsconfig.json` paths
- Restart dev server after config changes

### If styles don't load:

1. Check browser dev tools → Network tab
2. Verify `globals.css` is being loaded
3. Check console for CSS import errors
4. Ensure `@import './section-card-themes.css';` works (same directory)

---

## 📊 SUMMARY

### ✅ Completed Automatically:
- Created `/src/App.tsx` with updated imports
- Already removed Tailwind configs (previous step)
- Documented all required manual steps

### ⚠️ Requires Manual Completion:
- Copy CSS files to `/src/styles/`
- Update imports in `/main.tsx` and `/preview.tsx`
- Update paths in `vite.config.ts` and `tsconfig.json`
- Test and verify build works

### 📁 Files Created:
- `/src/App.tsx` - New main component
- This instruction document

### 🎯 End Goal:
Clean, organized structure with CSS in `/src/styles/` and main App component in `/src/App.tsx`, while keeping everything else in root for easier imports.

---

**Last Updated:** January 13, 2026  
**Status:** Awaiting manual completion of CSS moves and config updates  
**Estimated Time:** 5-10 minutes to complete manual steps
