# Audit Report: Unused UI Primitives

**Date:** February 25, 2026
**Prompt:** [root-cleanup-audit.md](../../prompts/root-cleanup-audit.md)
**Guidelines:** [Guidelines.md](../../guidelines/Guidelines.md)

---

## Findings

### Actively Used Custom UI Components

These custom components in `/components/ui/` are actively imported:

| File | Imported By |
|---|---|
| `ArchiveFilters.tsx` | Search, category, tag pages |
| `Breadcrumbs.tsx` | 30+ page components |
| `EnhancedLightbox.tsx` | Portfolio detail pages |
| `OptimizedImage.tsx` | Multiple components |
| `PortfolioCard.tsx` | Portfolio pages |
| `PortfolioImage.tsx` | PortfolioCard |
| `ReadMoreButton.tsx` | Blog/section components |
| `ResponsiveGridSlider.tsx` | Section components |
| `ScrollDownArrow.tsx` | Hero sections |
| `ScrollToTop.tsx` | Layout components |
| `SearchInput.tsx` | Search pages |
| `SectionCard.tsx` | Section layouts |
| `ShareComponent.tsx` | Detail pages |
| `SliderCard.tsx` | Featured/Portfolio sections |
| `VideoPlayer.tsx` | Video pages |
| `pagination.tsx` | PortfolioMainPage |
| `use-mobile.ts` | PortfolioMainPage |
| `utils.ts` | Internal use by shadcn stubs |

### Unused Shadcn-Style Primitive Stubs (Protected)

These are **protected stubs** kept as part of the UI library architecture. They are NOT imported by any page component:

| File | Status |
|---|---|
| `accordion.tsx` | Unused stub |
| `alert-dialog.tsx` | Unused stub |
| `alert.tsx` | Unused stub |
| `aspect-ratio.tsx` | Unused stub |
| `avatar.tsx` | Unused stub |
| `badge.tsx` | Unused stub |
| `breadcrumb.tsx` | Unused stub (note: different from `Breadcrumbs.tsx` which IS used) |
| `button.tsx` | Unused stub |
| `calendar.tsx` | Unused stub |
| `card.tsx` | Unused stub |
| `carousel.tsx` | Unused stub |
| `chart.tsx` | Unused stub |
| `checkbox.tsx` | Unused stub |
| `collapsible.tsx` | Unused stub |
| `command.tsx` | Unused stub |
| `context-menu.tsx` | Unused stub |
| `dialog.tsx` | Unused stub |
| `drawer.tsx` | Unused stub |
| `dropdown-menu.tsx` | Unused stub |
| `form.tsx` | Unused stub |
| `hover-card.tsx` | Unused stub |
| `input-otp.tsx` | Unused stub |
| `input.tsx` | Unused stub |
| `label.tsx` | Unused stub |
| `menubar.tsx` | Unused stub |
| `navigation-menu.tsx` | Unused stub |
| `popover.tsx` | Unused stub |
| `progress.tsx` | Unused stub |
| `radio-group.tsx` | Unused stub |
| `resizable.tsx` | Unused stub |
| `scroll-area.tsx` | Unused stub |
| `select.tsx` | Unused stub |
| `separator.tsx` | Unused stub |
| `sheet.tsx` | Unused stub |
| `sidebar.tsx` | Unused stub |
| `skeleton.tsx` | Unused stub |
| `slider.tsx` | Unused stub |
| `sonner.tsx` | Unused stub |
| `switch.tsx` | Unused stub |
| `table.tsx` | Unused stub |
| `tabs.tsx` | Unused stub |
| `textarea.tsx` | Unused stub |
| `toggle-group.tsx` | Unused stub |
| `toggle.tsx` | Unused stub |
| `tooltip.tsx` | Unused stub |

**Total: 45 unused shadcn stubs**

### Assessment

Per the project architecture description, these ~50 shadcn-style stubs are **protected** — they form the UI primitive library and are intentionally kept even if unused. They serve as ready-to-use components if needed in the future.

**However**, if the goal is to reduce bundle size and clean up dead code, these 45 files could be safely deleted since none are imported. They can always be regenerated from shadcn/ui CLI.

---

## Actions

- [ ] **Decision needed:** Keep all 45 shadcn stubs as protected library, OR delete unused ones to reduce codebase size
- [ ] If keeping: No action needed
- [ ] If cleaning: Delete all 45 files listed above (they have zero imports)
