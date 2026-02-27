# Audit 2: Orphaned Files & Imports

**Date:** February 25, 2026
**Prompt:** [orchestrator.md](../../prompts/comprehensive-cleanup/orchestrator.md)
**Guideline:** [Guidelines.md](../../guidelines/Guidelines.md), [overview-components.md](../../guidelines/overview-components.md)

---

## Findings

### `/content/` Folder (ORPHANED - 20 files)

> **CORRECTION (Feb 25, 2026):** This recommendation was WRONG. The `/content/` folder contains Ash's personal reference notes that took significant time to compile. "Not imported by code" does NOT mean "safe to delete." These files are intentionally kept as reference material for seeding website content. The `/content/` folder is now PROTECTED in Guidelines.md. **Files must be restored from git history.**

~~The entire `/content/` directory contains 20 markdown files with **zero imports** from any `.ts`/`.tsx` file. This is leftover from the pre-mock-data era. All content is now served from `/data/mock/`.~~

| Subfolder | Files | Status |
|---|---|---|
| `/content/about/` | `six-cats.md` | **PROTECTED** |
| `/content/book/` | `this-one-time.md` | **PROTECTED** |
| `/content/lightspeed/` | 5 files (blog-conclusion, company-history, existing-team, internship-program, senior-block-developer) | **PROTECTED** |
| `/content/personal/` | 12 files (artists-lifestyle, berlin, bio-professional-v1, bio-professional-v2, education, festivals, fitness, identity, lucy-private-notes, partners, philosophy, travelling, uv-art-origin) | **PROTECTED** |
| `/content/social-profiles/` | 5 files (cross-platform-strategy, facebook, instagram, linkedin, twitter) | **PROTECTED** |

~~**Action:** Delete entire `/content/` folder.~~

**Action:** RESTORE from git. Folder is now protected — see Guidelines.md "Content Folder Protection Rule".

### `/hooks/useContentful.ts` (DEPRECATED)

This hook is deprecated and re-exports from `useContent.ts`. Still imported by **5 components**:
1. `/components/sections/BlogPreviewSection.tsx`
2. `/components/pages/home/HomePage.tsx`
3. `/components/pages/about/AboutPage.tsx`
4. `/components/pages/blog/BlogPage.tsx`
5. `/components/pages/blog/BlogPostPage.tsx`

**Action:** Migrate all 5 imports to `useContent`, then delete `useContentful.ts`.

### `/data/schema.md` (DOCUMENTATION ONLY)

Not imported by any code. WordPress migration reference documentation.

**Action:** Keep as WP migration reference or move to `/docs/`.

### `/dist/wordpress-export.json` (BUILD ARTIFACT)

Not imported by any frontend code. Deployment/export artifact.

**Action:** Flag for `.gitignore` or delete.

---

## Summary
- **Orphaned folders:** 1 (`/content/` - 20 files)
- **Deprecated hooks:** 1 (`useContentful.ts` - 5 files to migrate)
- **Documentation files:** 1 (`/data/schema.md`)
- **Build artifacts:** 1 (`/dist/wordpress-export.json`)