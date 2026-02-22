# 🗃 Phase 2: Data Model Audit

**Generated:** February 21, 2026
**Scope:** `/data/` directory
**Status:** Audit Complete

## 1. Executive Summary

The data model is **exceptionally clean, strongly typed, and centralized**. It uses TypeScript interfaces (`/data/types/`) to enforce shape and a "Mock Data" pattern (`/data/mock/`) that simulates a CMS response. This architecture is highly mature and ready for a headless CMS migration (e.g., Contentful or WPGraphQL).

**Strengths:**
*   **Centralization:** All mock data lives in `/data/mock`, making it a true "Single Source of Truth."
*   **Typing:** TypeScript interfaces in `/data/types` are comprehensive and well-documented.
*   **CMS Readiness:** Fields like `contentfulId` and `slug` are already present.
*   **Personal Art Focus:** No e-commerce debris (prices, cart) found in the core models.

**Weaknesses:**
*   **Legacy Fields:** `BlogPost` interface maintains legacy fields (`publishedDate` vs `publishedAt`, `readingTime` vs `readTime`) to avoid breaking changes. This should eventually be normalized.
*   **File Naming:** `/imports/svg-*.ts` naming convention (audited in Phase 3) bleeds into data usage, creating opaque references.

## 2. File-by-File Audit

| File | Purpose | Structure | Status | Recommendation |
|------|---------|-----------|--------|----------------|
| `/data/types/portfolio.ts` | Portfolio interfaces | `PortfolioEntry`, `PortfolioImage` | **Excellent** | Keep as reference. |
| `/data/types/blog.ts` | Blog interfaces | `BlogPost`, `BlogAuthor` | **Good** | Mark legacy fields as `@deprecated`. |
| `/data/mock/portfolio/index.ts` | Portfolio barrel | Aggregates all portfolio files | **Excellent** | Clean barrel pattern. |
| `/data/mock/pages/home.ts` | Homepage content | `HeroContent`, `WhyReason` | **Excellent** | Strictly typed. |

## 3. Key Findings

### 3.1. "Personal Art Project" Compliance
The data structure strictly supports the non-commercial scope:
*   **PortfolioEntry:** Fields for `event`, `location`, `date` (Artistic context). No `price`, `sku`, or `bookingLink`.
*   **PageContent:** Focus on narrative text (`description`, `content`) rather than transactional data.

### 3.2. WordPress/CMS Readiness
The schema maps 1:1 with standard WordPress structures:
*   `PortfolioEntry` -> CPT `portfolio`
*   `BlogPost` -> Post Type `post`
*   `category` -> Taxonomy `category` (or custom tax)
*   `tags` -> Taxonomy `post_tag`
*   `HeroContent` -> ACF Field Group / Block Attributes

### 3.3. Legacy Technical Debt
The `BlogPost` interface explicitly handles transition states:
```typescript
/** Publication date (ISO 8601 string) - primary field */
publishedAt: string;

/** Legacy support for publishedDate */
publishedDate?: string;
```
This is a safe, non-destructive pattern, but a cleanup task should be scheduled.

## 4. Recommendations

1.  **Deprecate Legacy Fields:** Mark `publishedDate` and `readingTime` as `@deprecated` in JSDoc to discourage new usage.
2.  **Schema Documentation:** Create a `schema.md` or similar to document the content model for the future CMS developer (mapping Mock -> Contentful/WP).
3.  **Validation:** Consider adding Zod schemas if runtime validation becomes necessary (low priority for now).

## 5. Next Steps

Proceed to **Phase 3: Imports & SVG Audit** to investigate the opaque `svg-*.ts` file references often seen in the codebase.
