# 🖼 Phase 3: Imports & SVG Audit

**Generated:** February 21, 2026
**Scope:** `/imports/` directory
**Status:** Audit Complete

## 1. Executive Summary

The `/imports/` directory contains **legacy, machine-generated SVG path definitions**. These files (`svg-*.ts`) use opaque filenames and hashed keys, making them impossible to maintain manually.

**Contrast:**
*   **Modern System:** `Lucide React` (verified in `overview-icons.md`) is the standard for UI icons.
*   **Legacy System:** `/imports/` seems to be used for specific vector illustrations or Figma-exported assets that haven't been migrated or are too complex for Lucide.

**Risk:** High maintenance debt. If a specific path needs changing, finding the correct file/hash is purely trial-and-error.

## 2. File Analysis

| File Pattern | Content Structure | Usage | Status | Recommendation |
|--------------|-------------------|-------|--------|----------------|
| `svg-*.ts` | `export default { "p{hash}": "M..." }` | `import paths from "./imports/svg-..."` | **Opaque** | Rename to semantic names (e.g., `icons-social.ts`) or replace with components. |

## 3. Usage Pattern

Codebase analysis shows usage like:
```typescript
import svgPaths from "./imports/svg-wg56ef214f";
// ...
<svg viewBox="0 0 24 24">
  <path d={svgPaths.p18103a00} />
</svg>
```

**Issues:**
1.  **Magic Strings:** `svgPaths.p18103a00` has no semantic meaning.
2.  **ViewBox Dependency:** The path data assumes a specific viewBox (often 24x24 or similar), but this isn't encoded in the file.
3.  **Duplication:** High probability of duplicate paths across different files.

## 4. Recommendations

### 4.1. Short Term (Cleanup)
1.  **Audit Usage:** Search the codebase for imports from `/imports/`. Map each file to the component using it.
2.  **Rename:** If `svg-07b3spvum2.ts` is only used in `SocialLinks.tsx` for brand icons, rename it to `assets/social-icons.ts`.

### 4.2. Long Term (Migration)
1.  **Replace with Components:** Convert these path strings into React components (e.g., `<InstagramIcon />`) or use Lucide equivalents.
2.  **Asset Folder:** Move valid custom SVGs to `/components/assets/` or `/public/images/` if they are static illustrations.
3.  **Delete:** Remove `/imports/` entirely once migration is complete.

## 5. Next Steps

Proceed to **Phase 4: Component Audit** to see exactly *where* these legacy SVGs are being consumed and if they violate the "No Hardcoded Values" rule.
