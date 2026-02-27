# Audit Report: Root File Cleanup

**Date:** February 25, 2026
**Prompt:** [root-cleanup-audit.md](../../prompts/root-cleanup-audit.md)
**Guidelines:** [Guidelines.md](../../guidelines/Guidelines.md)

---

## Findings

### Root-Level Files Inventory

| File | Status | Reason |
|---|---|---|
| `App.tsx` | **ACTIVE** | Main application component |
| `main.tsx` | **ACTIVE** | React entry point |
| `index.html` | **ACTIVE** | HTML template |
| `routes.ts` | **ACTIVE** | Route definitions, imported by App.tsx |
| `package.json` | **ACTIVE** | NPM config |
| `tsconfig.json` | **ACTIVE** | TypeScript config |
| `tsconfig.node.json` | **ACTIVE** | Referenced by tsconfig.json |
| `vite.config.ts` | **ACTIVE** | Vite build config |
| `postcss.config.js` | **ACTIVE** | PostCSS/autoprefixer config (referenced by Vite) |
| `netlify.toml` | **ACTIVE** | Netlify deployment config |
| `README.md` | **ACTIVE** | Project documentation |
| `Attributions.md` | **ORPHANED** | Zero references found in any source file |
| `theme.json` | **REVIEW** | WordPress theme.json reference file; not imported by any `.ts`/`.tsx` code. Referenced only in guideline docs as documentation. Could be moved to `/data/` or kept as WP migration artifact. |

### Build Artifacts

| Path | Status | Action |
|---|---|---|
| `/dist/wordpress-export.json` | **REVIEW** | Build artifact / WP migration data. Referenced in `/data/schema.md` documentation only. Not imported by app code. Consider keeping as deployment artifact but excluding from source. |

### Config Files Assessment

- `postcss.config.js` - Contains stale comment referencing Tailwind CSS plugin but only uses `autoprefixer`. The comment should be updated but the file is functional.
- `netlify.toml` - Active and correctly configured.

---

## Actions

- [ ] Delete `/Attributions.md` (orphaned, zero references)
- [ ] Review `/theme.json` - keep as WP migration reference or move to `/data/`
- [ ] Update comment in `postcss.config.js` to remove Tailwind CSS references
- [ ] Review `/dist/wordpress-export.json` status
