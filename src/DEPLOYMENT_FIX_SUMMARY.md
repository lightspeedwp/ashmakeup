# ✅ Deployment & Environment Verification

## 1. 🛠️ Build Error Resolution
**Issue:** Netlify is failing with `Deploy directory 'dist' does not exist`.
**Cause:** Your GitHub repository currently builds to `build/` (default), but Netlify expects `dist/`.
**Status:** I have updated `package.json` locally to force the output to `dist/`.
**Action Required:**
1.  **Commit and Push** the changes to `package.json` and `utils/contentfulService.ts` to GitHub.
2.  **Redeploy** on Netlify.

## 2. 🔐 Environment Variables Checklist
Please configure the following variables in **Netlify Site Settings > Environment Variables**.

### **Backend (Supabase & Email)**
| Variable | Status | Value / Notes |
| :--- | :--- | :--- |
| `SUPABASE_SERVICE_ROLE_KEY` | ✅ Provided | Use the key you provided. |
| `SUPABASE_ANON_KEY` | ✅ Provided | Use the key you provided. |
| `SUPABASE_URL` | ⚠️ **MISSING** | `https://prvzveitduxglkwyfvxf.supabase.co` (Required for `kv_store.tsx`) |
| `SENDGRID_API_KEY` | ⚠️ **MISSING** | `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` |
| `TO_EMAIL` | Optional | Defaults to `ashley@ashshaw.makeup` |
| `FROM_EMAIL` | Optional | Defaults to `noreply@ashshaw.makeup` |

### **Frontend (Contentful)**
| Variable | Status | Value / Notes |
| :--- | :--- | :--- |
| `VITE_CONTENTFUL_SPACE_ID` | ✅ Provided | `7vxxc626vbxu` |
| `VITE_CONTENTFUL_ACCESS_TOKEN` | ✅ Provided | `O-JZQjQn1oyykRlAfa_zCpriKE8Lk3WC90sAS0sIGkY` |

## 3. 🔍 Detailed Verification
- **`supabase/functions/server/kv_store.tsx`**: Uses `Deno.env.get("SUPABASE_URL")`. This file is protected and cannot be changed. **You MUST add `SUPABASE_URL` to Netlify.**
- **`supabase/functions/server/index.tsx`**: I updated this file to fallback to your project URL if `SUPABASE_URL` is missing, but `kv_store.tsx` requires the env var explicitly.
- **`package.json`**: Updated command to `"build": "vite build --outDir dist"` to match Netlify's expectation.

## 🚀 Final Steps
1.  Add `SUPABASE_URL` and `SENDGRID_API_KEY` to Netlify.
2.  Commit and push all local changes.
3.  Trigger a deployment.
