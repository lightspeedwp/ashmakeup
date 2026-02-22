# Task 06: Design System Stabilisation

**Generated:** February 21, 2026
**Updated:** February 21, 2026 (Post-Hygiene Audit)
**Based on:** Phase 4 (Component & Design Integrity Audit) + Phase 7 (Root Cause Analysis)
**Priority:** P3 (Technical Debt)
**Status:** COMPLETE

## 1. Objective

Formalise the "Neon vs Atomic Black" design language and refactor large CSS files for better maintainability.

## 2. Tasks

### 2.1. Documentation

- [x] **Action:** Created `/guidelines/design-tokens/neon-system.md`.
  - Documents the specific interaction model (hover glow, focus ring, active state).
  - Explains the "Atomic Black" (#0F0F0F) background strategy vs standard Dark Mode.
- [x] **Action:** Added usage examples for `box-shadow` tokens.
- [x] **Action:** Documented all 26 keyframe animations in `/guidelines/design-tokens/animations.md`.
- [x] **Action:** Documented 4 signature gradients (Cyberpunk, Toxic Lime, Solar Flare, Hyperpop).

### 2.2. CSS Refactoring

- [x] **Action:** Split large CSS files (e.g., `header.css`) into sub-modules:
  - Created `blocks/header/layout.css`
  - Created `blocks/header/navigation.css`
  - Created `blocks/header/mobile.css`
  - Created `blocks/header/search-overlay.css`
  - **Re-consolidated (February 2026):** The split sub-modules were merged back into the single `blocks/header.css` file when scroll-state modifiers (`header--at-top`, `header--scrolled`) were added. The 4 sub-module files in `blocks/header/` were deleted as dead code (zero importers).
- [x] **Action:** Ensured all `z-index` values use a consistent scale:
  - Defined `z-index--0` to `z-index--100` scale in `globals.css`.
  - Updated `hero.css`, `mobile-menu.css`, `button.css`.

### 2.3. Token Audit

- [x] **Action:** Replaced hardcoded `box-shadow` values in `hero.css` and `search-overlay.css`.
- [x] **Action:** Replaced hardcoded `border-radius` values.
  - Added `--wp--preset--border-radius--circle`.
  - Updated `button.css`, `mobile-menu.css`, `hero.css`.
- [x] **Action:** Verified `gap` usage over `margin` for layout spacing.

### 2.4. SVG Grain Noise Texture

- [x] **Action:** Site-wide `feTurbulence` noise overlay documented.
- [x] **Action:** Applied via `::before` pseudo-elements on all major sections.

## 3. Verification (Hygiene Audit Findings)

**Inline Style Audit Result:**
- 20 inline `style={{}}` instances found across 11 component files.
- **All are legitimate dynamic values** (image URLs, slider transforms, CSS custom properties for animation stagger).
- **Zero static inline styles** violating the BEM architecture rule.

**No Tailwind Rule:**
- **Confirmed compliant.** No Tailwind utility classes found in component files.
- All styling uses BEM classes from `/styles/blocks/*.css`.

## 4. Dependencies

- None.

## 5. Impact

- Consistent "Neon vs Atomic Black" visual identity across all components.
- Reduced regression risk when modifying styles (split CSS files, tokenised values).
- WCAG 2.1 AA compliance maintained (3px neon pink focus indicators with glow effects).

## 6. Effort

- **Time:** Completed.
- **Complexity:** Low/Medium (CSS refactoring).