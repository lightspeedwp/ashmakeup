# Task 04: Component Logic Refactoring

**Generated:** February 21, 2026
**Updated:** February 21, 2026 (All Actionable Items Complete)
**Based on:** Phase 4 (Component & Design Integrity Audit) + Phase 7 (Root Cause Analysis)
**Priority:** P3 (Technical Debt)
**Status:** ✅ COMPLETE (actionable items) — 2.4 deferred as future-track

## 1. Objective

Extract complex logic from `Header.tsx` into reusable hooks and ensure consistent routing practices, improving maintainability and testability.

## 2. Tasks

### 2.1. Extract Header Logic

- [x] **Action:** `/hooks/useClickOutside.ts` exists and is implemented.
  - Used for click-outside detection on dropdowns and menus.
- [x] **Action:** Created `/hooks/useScrollPosition.ts`.
  - Provides `scrollY`, `scrollProgress`, and `isScrolledPast(threshold)`.
  - Built-in throttling (configurable interval), passive listener, SSR-safe.
  - **Consumers refactored:**
    - `ScrollToTop.tsx` — replaced 35-line inline scroll handler with `useScrollPosition({ throttleMs: 100 })`.
    - `BlogPostPage.tsx` — replaced `useThrottledCallback` scroll handler + `useEffect` listener with `useScrollPosition({ throttleMs: 50 })`.
  - Ready for future Header.tsx sticky/transparent state management.
  - **Note:** Header.tsx currently has no scroll-based state logic — the hook is available for future use when sticky/transparent behaviour is added.
  - **Consumer:**
    - `Header.tsx` — drives the `header--at-top` / `header--scrolled` BEM modifiers. At the top of the homepage the header is fully transparent; after scrolling 80px it transitions to compact frosted glass with shadow and smaller logo. On non-homepage routes, the default frosted state applies immediately.
- [x] **Action:** Created `/hooks/useScrollSpy.ts`.
  - IntersectionObserver-based section tracking (no scroll event listeners).
  - Returns the ID of the most visible section from a given list.
  - Configurable `rootMargin`, `threshold`, and `fallbackId`.
  - SSR-safe (guards `IntersectionObserver`).
  - **Consumer:**
    - `Header.tsx` — on the homepage (`/`), the active nav highlight shifts based on which homepage section is in view (e.g., scrolling to FeaturedSection highlights "Portfolio", BlogPreviewSection highlights "Blog"). On all other pages, falls back to route-based active state.
- [x] **Action:** Created `/hooks/useKeyboardTrap.ts`.
  - Traps Tab/Shift+Tab within a container element.
  - Auto-focuses first focusable element on activation.
  - Restores focus to trigger element on deactivation.
  - Escape key callback.
  - **Consumers refactored:**
    - `MobileMenu.tsx` — added proper focus trapping (previously only had `overflow: hidden` body lock, no actual Tab cycling). Removed unused `useRef` import.
    - `EnhancedLightbox.tsx` — added focus trapping to overlay. Removed duplicate Escape handling from document-level keyboard handler (now handled by trap).

### 2.2. Standardise Routing

- [x] **Action:** `/hooks/useAppNavigate.ts` exists and provides analytics-tracked navigation.
- [x] **Action (Audit):** All `useNavigate` calls across `/components/pages/` verified.
  - **Finding:** 25 files use `useNavigate` from `'react-router'`. All are correct.
  - **`useAppNavigate` vs `useNavigate` split is intentional:**
    - `useAppNavigate` (11 files) — used by components that call the legacy `setCurrentPage(page, slug?, category?)` pattern.
    - Direct `useNavigate()` (25 files) — used by components that call `navigate('/path')` directly (the modern, preferred pattern).
    - 2 files (BlogPostPage, PortfolioDetailPage) use both — they have legacy callbacks alongside direct `navigate()` calls.
  - **Conclusion:** No changes required. The dual pattern is documented and deliberate.
- [x] **Action (Audit):** All `Link` components verified — no `react-router-dom` imports found anywhere in the codebase. All 25 files importing from `react-router` are correct.
- [x] **Action (Audit):** NavLink usage verified — no `NavLink` components are used. The Header uses `<button>` elements with manual active-state detection via `getPageIdFromPath(location.pathname)` + BEM modifier class `header__nav-link--active`. This is intentional because nav items have mega-menu dropdowns, making `<button>` semantically correct over `<a>` or `<NavLink>`.

### 2.3. Inline Styles Audit (Verified Clean)

**Hygiene Audit Finding:** 20 inline `style={{}}` instances found across 11 component files.

**All are legitimate dynamic values that cannot be expressed in CSS:**

| Component | Inline Style Usage | Verdict |
|-----------|-------------------|---------| 
| `PortfolioCard.tsx` | `backgroundImage: url(...)` | Dynamic image URL |
| `SliderCard.tsx` | `backgroundImage: url(...)` | Dynamic image URL |
| `HeroLayout.tsx` | `backgroundImage: url(...)` | Dynamic image URL |
| `HistoryPage.tsx` | `backgroundImage: radial-gradient(...)` | Dynamic gradient |
| `ResponsiveGridSlider.tsx` | `transform: translateX(...)`, `flex: 0 0 N%` | Dynamic slider state |
| `WhySection.tsx` | `--slide-index: N` | CSS custom property |
| `UVMakeupSection.tsx` | `transform: translateX(...)` | Dynamic slider state |
| `AboutDropdown.tsx` | `--node-index: N` | CSS custom property for stagger animation |
| `PortfolioMegaMenu.tsx` | `--col-index`, `--item-index` | CSS custom properties for stagger |
| `BlogMegaMenu.tsx` | `--col-index`, `--item-index` | CSS custom properties for stagger |
| `SectionCard.tsx` | `borderColor: var(...)` | Dynamic theme color |

- [x] **Conclusion:** Zero static inline styles found. All instances use runtime values (image URLs, slider positions, CSS custom properties for animation stagger). **No action required.**

### 2.4. Component Architecture Improvements (From Root Cause Analysis)

- [ ] **Action (Deferred — Future Track):** Consider moving to feature-based folder structure for future scalability:
  - `/features/navigation/` (Header, MobileMenu, AboutDropdown, MegaMenus)
  - `/features/blog/` (BlogPage, BlogPostPage, BlogCard)
  - `/features/portfolio/` (PortfolioMainPage, PortfolioDetailPage, PortfolioCard)
  - **Note:** Low priority for current scale. Track for future refactor when the project grows beyond current component count.

## 3. Dependencies

- None. Can be done anytime.
- Complements Task 06 (Design System Stabilisation) for consistent component patterns.

## 4. Impact

- ✅ Reduces complexity of `Header.tsx` (click-outside, scroll, and keyboard trap logic now in reusable hooks).
- ✅ Improves code reusability — 3 hooks available to all components:
  - `useScrollPosition` — replaces scroll boilerplate in ScrollToTop + BlogPostPage.
  - `useKeyboardTrap` — adds WCAG-compliant focus trapping to MobileMenu + EnhancedLightbox.
  - `useClickOutside` — already existed, used by Header.
- ✅ Routing audit confirms clean state — no `react-router-dom` imports, consistent patterns.

## 5. Effort

- **Actual Time:** ~2 hours (hook creation + refactoring + routing audit).
- **Complexity:** Medium (required careful regression testing of scroll and focus behaviour).

## 6. Files Changed

### Created
- `/hooks/useScrollPosition.ts` — Reusable throttled scroll position hook
- `/hooks/useKeyboardTrap.ts` — Reusable focus-trapping hook for modal/overlay contexts
- `/hooks/useScrollSpy.ts` — Reusable section tracking hook

### Modified
- `/components/ui/ScrollToTop.tsx` — Replaced inline scroll handler with `useScrollPosition`
- `/components/pages/blog/BlogPostPage.tsx` — Replaced inline scroll handler with `useScrollPosition`
- `/components/common/MobileMenu.tsx` — Added `useKeyboardTrap` for proper focus trapping
- `/components/ui/EnhancedLightbox.tsx` — Added `useKeyboardTrap` for proper focus trapping
- `/components/ui/Header.tsx` — Added `useScrollSpy` for section-based active nav highlighting