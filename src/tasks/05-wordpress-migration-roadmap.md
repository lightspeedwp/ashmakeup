# Task 05: WordPress Migration Roadmap

**Generated:** February 21, 2026
**Updated:** February 21, 2026 (Post-Hygiene Audit)
**Based on:** Phase 5 (WordPress Migration Readiness)
**Priority:** P2 (Strategic)
**Status:** COMPLETE (Codebase Ready; External Setup Pending)

## 1. Objective

Prepare the codebase for migration to a Headless WordPress backend, leveraging the mock data structure and component architecture.

## 2. Tasks

### 2.1. Content Export (Mock -> JSON)

- [x] **Action:** Created `/scripts/export-content.ts`.
  - Converts `/data/mock/*.ts` content (Blog, Portfolio, Pages, Videos, Podcasts, Events) into JSON.
  - Fields map to WordPress standard fields (`post_title`, `post_content`) and ACF keys.
- [x] **Action:** Export file generated at `/dist/wordpress-export.json`.

### 2.2. Theme Definition (React -> theme.json)

- [x] **Action:** Created `/theme.json` mapping CSS variables to WordPress preset tokens.
  - Colors: Full Neon palette + Atomic Black.
  - Typography: Font families (`Playfair Display`, `Inter`, `Righteous`) + fluid sizes.
  - Spacing: `--wp--preset--spacing--*` scale.
  - Shadows: `--wp--preset--shadow--*` scale.
- [x] **Action:** Defined custom block styles for `core/button` and `core/group` matching React components.

### 2.3. Block Pattern Mapping

- [x] **Action:** Documented component-to-pattern mapping in `/guidelines/wordpress-block-patterns.md`:
  - `HeroLayout` -> `ash/hero-split` pattern.
  - `FaqSection` -> `ash/faq-accordion` pattern.
  - `WhySection` -> `ash/features-grid` pattern.
  - `BlogPreviewSection` -> `ash/blog-preview` pattern.
  - `TestimonialsSection` -> `ash/testimonials-slider` pattern.

### 2.4. Dual Mode Architecture

- [x] **Action:** Created `/hooks/useWordPress.ts` to fetch data from WP REST API.
- [x] **Action:** Created `/hooks/useContent.ts` facade to toggle between Mock/WP data.
- [x] **Action:** Toggle via `VITE_USE_WORDPRESS` environment variable.
- [x] **Action:** Created `.env.production.example` with all required variables documented.

### 2.5. WordPress Preset System

- [x] **Action:** Created `/guidelines/wordpress-preset-system.md` documenting the full preset mapping.

## 3. External Actions Remaining

These items require work **outside** the Figma Make environment:

- [ ] **Action:** Set up Production WordPress instance (WP 6.x + ACF Pro + WPGraphQL optional).
- [ ] **Action:** Import content using `wordpress-export.json` via WP All Import or custom script.
- [ ] **Action:** Configure production environment:
  ```
  VITE_USE_WORDPRESS=true
  VITE_WP_API_URL=https://your-wp-site.com/wp-json/wp/v2
  ```
- [ ] **Action:** Deploy frontend to Netlify/Vercel with production env vars.
- [ ] **Action:** Verify all content types render correctly from WP API.
- [ ] **Action:** Set up WP media library and update image URLs in ACF fields.

## 4. Dependencies

- Task 02 (Data Normalisation) ensures clean field mapping for the import.
- Task 03 (Imports Restructure) removes legacy assets that have no WP equivalent. **COMPLETE.**

## 5. Impact

- Unlocks content management via WP Admin.
- Preserves the high-fidelity "Neon vs Atomic Black" frontend design.
- Enables "Dual Mode" development (local mock data for dev, WP API for production).

## 6. Effort

- **Codebase work:** Completed in Sprint 3.
- **External setup:** 4-8 hours (WordPress installation, content import, deployment).
- **Complexity:** Medium (External configuration and testing).
