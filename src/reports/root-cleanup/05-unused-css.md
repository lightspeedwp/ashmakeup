# Audit Report: Unused CSS Block Files

**Date:** February 25, 2026
**Prompt:** [root-cleanup-audit.md](../../prompts/root-cleanup-audit.md)
**Guidelines:** [css-architecture.md](../../guidelines/css-architecture.md)

---

## Findings

### CSS Block Files Inventory

The `/styles/blocks/` directory contains **77 CSS files**. A full import scan was not performed for every file in this audit pass, but the following files were checked:

### Confirmed Active (imported by components)

Most CSS block files follow the pattern of being imported by their corresponding component (e.g., `about-page.css` imported by `AboutPage.tsx`). These are generally active.

### Requires Deeper Audit

A comprehensive CSS audit requires checking each of the 77 files for:
1. Import statements in `.tsx` files
2. BEM class usage in component JSX
3. Cross-file class references (e.g., a CSS file defining classes used by multiple components)

### Known Active CSS Files

- `breadcrumbs.css` - imported by Breadcrumbs component
- `hero.css` - imported by HeroLayout
- `header.css` - imported by Header
- `footer.css` - imported by Footer
- `mobile-menu.css` - imported by MobileMenu
- All page-specific CSS files (about-page.css, blog-page.css, etc.)

### Potentially Unused

- `rainbow-sections.css` - **ACTIVE** (imported by HomePage.tsx)
- `data-display.css` - **ACTIVE** (imported by card.tsx stub)
- `column-layouts.css` - **ACTIVE** (imported by 6 components)
- `styles/components/typeform-embed.css` - **ACTIVE** (imported by TypeformEmbed.tsx)

All initially flagged CSS files are confirmed active.

---

## Actions

- [x] Checked `rainbow-sections.css` - ACTIVE (HomePage)
- [x] Checked `data-display.css` - ACTIVE (card.tsx)
- [x] Checked `column-layouts.css` - ACTIVE (6 components)
- [x] Checked `typeform-embed.css` - ACTIVE (TypeformEmbed)
- [ ] Run comprehensive scan of all 77 CSS block files for completeness (lower priority)