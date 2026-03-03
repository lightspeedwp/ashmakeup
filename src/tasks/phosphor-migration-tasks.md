# Phosphor Icons migration — task list

**Source report:** `/reports/phosphor-migration/full-audit-report.md`
**Source prompt:** `/prompts/phosphor-migration/orchestrator.md`
**Created:** March 3, 2026
**Version:** 1.0.0

---

## Phase 1 — Parallel operation (Phosphor alongside Lucide)

Goal: Enable Phosphor usage for new components without touching existing ones.

- [ ] **P1-T01** Verify `@phosphor-icons/react` bundler compatibility
  - Import 3-4 test icons in a scratch component
  - Test all 6 weights render correctly
  - Test `size`, `color`, `weight`, `className` props
  - Confirm no bundler crashes
  - **Files:** 1 test component | **Effort:** 30 min | **Risk:** Low

- [ ] **P1-T02** Create `/guidelines/design-tokens/iconography.md`
  - Full Phosphor weight system documentation
  - Size scale tokens (`--icon-size-xs` through `--icon-size-xl`)
  - Colour tokens for light/dark mode
  - Weight-to-context mapping table
  - BEM class system (`.ph-icon`, `.ph-icon--interactive`, etc.)
  - Duotone usage guide
  - Accessibility weight matrix (min sizes per weight)
  - **Files:** 1 new `.md` | **Effort:** 1 hour | **Risk:** None

- [ ] **P1-T03** Add icon design tokens to CSS
  - Add `--icon-size-*`, `--icon-color-*`, `--icon-transition`, `--icon-duotone-opacity` custom properties to `/styles/globals.css`
  - Add `.ph-icon` BEM classes to `/styles/blocks/icons.css` (new file)
  - Import in globals or relevant components
  - **Files:** 2 CSS files | **Effort:** 45 min | **Risk:** Low

- [ ] **P1-T04** Create `/data/mock/ui/phosphor-icons.ts`
  - Populate `PhosphorIconEntry[]` array with all 92+ icon mappings
  - Include `phosphorName`, `lucideName`, `category`, `usedInFiles`, `migrated`, `notes`
  - Source data from Sub-audit 2 mapping table
  - **Files:** 1 new `.ts` | **Effort:** 1 hour | **Risk:** None

- [ ] **P1-T05** Create `PhosphorIconsPage.tsx` dev tools page
  - Searchable grid with weight/size/background controls
  - Side-by-side Lucide vs Phosphor comparison
  - Copy-to-clipboard import statements
  - WCAG contrast badges
  - Migration status tracking
  - Reuse patterns from existing `IconLibraryPage.tsx`
  - **Files:** 1 new `.tsx`, 1 new `.css` | **Effort:** 2-3 hours | **Risk:** Low
  - **Depends on:** P1-T04

- [ ] **P1-T06** Add PhosphorIconsPage to router and DevToolsPage hub
  - Add route: `{ path: 'dev-tools/phosphor-icons', Component: PhosphorIconsPage }`
  - Add card to DevToolsPage tool grid
  - Add SEO entry in `/data/mock/seo.ts`
  - **Files:** 3 files (routes.ts, DevToolsPage.tsx, seo.ts) | **Effort:** 30 min | **Risk:** Low
  - **Depends on:** P1-T05

- [ ] **P1-T07** Update `/guidelines/overview-icons.md`
  - Add Phosphor Icons section alongside existing Lucide section
  - Document dual-library usage during migration
  - Link to new iconography design tokens guide
  - **Files:** 1 `.md` | **Effort:** 30 min | **Risk:** None

- [ ] **P1-T08** Fix WCAG touch target violations (existing)
  - `ScrollToTop.tsx` — increase button to 44×44px minimum
  - `ThemeToggle.tsx` — increase button to 44×44px minimum
  - `ArchiveFilters.tsx` — increase clear button to 44×44px minimum
  - `pagination.tsx` — increase nav buttons to 44×44px minimum
  - **Files:** 4 `.tsx` + related CSS | **Effort:** 1 hour | **Risk:** Medium (visual impact)

---

## Phase 2 — File-by-file migration

### Tier 1 — Common components (11 files)

Highest impact: these render on every page.

- [ ] **P2-T01** `Header.tsx` — X → X (same name)
- [ ] **P2-T02** `Footer.tsx` — Link2 → Link, Check → Check
- [ ] **P2-T03** `MobileMenu.tsx` — Mail → Envelope
- [ ] **P2-T04** `ThemeToggle.tsx` — Moon → Moon, Sun → Sun (same names)
- [ ] **P2-T05** `ErrorBoundary.tsx` — TriangleAlert → Warning, RefreshCw → ArrowsClockwise
- [ ] **P2-T06** `AboutDropdown.tsx` — ChevronDown → CaretDown, ChevronUp → CaretUp
- [ ] **P2-T07** `BlogMegaMenu.tsx` — ArrowRight → ArrowRight, Clock → Clock
- [ ] **P2-T08** `ContactMiniMenu.tsx` — ArrowRight → ArrowRight, Mail → Envelope
- [ ] **P2-T09** `OfflineIndicator.tsx` — Wifi → WifiHigh, WifiOff → WifiSlash
- [ ] **P2-T10** `PWAInstallPrompt.tsx` — X → X, Download → DownloadSimple
- [ ] **P2-T11** `PortfolioMegaMenu.tsx` — ArrowRight → ArrowRight

**Per file:** Change import from `'../../lib/icons'` to `'@phosphor-icons/react'`, update icon names, add `weight="regular"` prop.
**Effort:** ~15 min per file, ~3 hours total for tier
**Risk:** Medium — affects all pages, needs visual verification

### Tier 2 — UI components (17 files)

Shared building blocks used across multiple pages.

- [ ] **P2-T12** `Accordion.tsx` — ChevronDown → CaretDown
- [ ] **P2-T13** `ArchiveFilters.tsx` — SlidersHorizontal → SlidersHorizontal, X → X
- [ ] **P2-T14** `Breadcrumbs.tsx` — ChevronRight → CaretRight, Home → House
- [ ] **P2-T15** `EbookSettingsModal.tsx` — X, SlidersHorizontal, Type → TextAa, Minimize → ArrowsIn, Eye
- [ ] **P2-T16** `EnhancedLightbox.tsx` — X, ChevronLeft/Right → CaretLeft/Right, ZoomIn/Out → MagnifyingGlassPlus/Minus, LayoutGrid → SquaresFour, Play
- [ ] **P2-T17** `ImageGallery.tsx` — ZoomIn → MagnifyingGlassPlus
- [ ] **P2-T18** `PortfolioCard.tsx` — ChevronLeft/Right → CaretLeft/Right, Play, Calendar
- [ ] **P2-T19** `ReadMoreButton.tsx` — ArrowRight
- [ ] **P2-T20** `ResponsiveGridSlider.tsx` — ChevronLeft/Right → CaretLeft/Right
- [ ] **P2-T21** `ScrollDownArrow.tsx` — ChevronDown → CaretDown
- [ ] **P2-T22** `ScrollToTop.tsx` — ArrowUp
- [ ] **P2-T23** `SearchInput.tsx` — Search → MagnifyingGlass, X
- [ ] **P2-T24** `SectionCard.tsx` — LucideIcon type → Phosphor `Icon` type
- [ ] **P2-T25** `ShareComponent.tsx` — Share2 → ShareNetwork, ExternalLink → ArrowSquareOut, Link2 → Link, Check, Mail → Envelope, MessageCircle → ChatCircle, X
- [ ] **P2-T26** `SliderCard.tsx` — ChevronLeft/Right → CaretLeft/Right, Play, Calendar
- [ ] **P2-T27** `VideoPlayer.tsx` — Play, Pause, Volume2 → SpeakerHigh, VolumeX → SpeakerSlash, Maximize → ArrowsOut
- [ ] **P2-T28** `pagination.tsx` — ChevronLeft/Right → CaretLeft/Right, Ellipsis → DotsThree

**Effort:** ~15 min per file, ~4 hours total for tier
**Risk:** Medium — shared components, visual verification per component needed

### Tier 3 — Page components (49 files)

Individual pages — can be migrated in batches by area.

**Batch 3a — About pages (8 files):**
- [ ] **P2-T29** `AboutPage.tsx` — Palette, Blend → (TBD alternative), Layers → Stack, Lightbulb, Sparkles → Sparkle, ArrowRight. **Also:** remove legacy `lucide-react` import.
- [ ] **P2-T30** `BookPage.tsx`, `EbookPage.tsx`, `HiddenAboutPage.tsx`, `PodcastPage.tsx`, `SixCatsPage.tsx`, `TravelsPage.tsx`
- [ ] **P2-T31** `ebook/EbookDrawer.tsx`, `ebook/EbookReaderNav.tsx`

**Batch 3b — Blog pages (4 files):**
- [ ] **P2-T32** `BlogPage.tsx`, `BlogPostPage.tsx`, `BlogCategoryPage.tsx`, `BlogTagPage.tsx`

**Batch 3c — Dev tools pages (14 files):**
- [ ] **P2-T33** `DevToolsPage.tsx` (hub — many icons)
- [ ] **P2-T34** `IconLibraryPage.tsx` — major refactor: update `ICON_MAP` to Phosphor components, or merge with PhosphorIconsPage
- [ ] **P2-T35** Remaining 12 dev tools pages (specimen pages, testers, etc.)

**Batch 3d — Events, podcasts, portfolio, videos (16 files):**
- [ ] **P2-T36** Events: `EventsPage`, `EventDetailPage`, `EventCategoryPage`, `EventTagPage`
- [ ] **P2-T37** Podcasts: `PodcastsPage`, `PodcastDetailPage`, `PodcastCategoryPage`, `PodcastTagPage`
- [ ] **P2-T38** Portfolio: `PortfolioDetailPage`, `PortfolioCategoryPage`, `PortfolioTagPage`
- [ ] **P2-T39** Videos: `VideosPage`, `VideoDetailPage`, `VideoCategoryPage`, `VideoTagPage`, `VideoModal`

**Batch 3e — Other pages (7 files):**
- [ ] **P2-T40** `NotFoundPage.tsx`, `SitemapPage.tsx`, `StickersPage.tsx`, `StyleGuidePage.tsx`, `FaqAggregatePage.tsx`, `FeedbackPage.tsx`, `GearPage.tsx`

**Effort:** ~10-15 min per file, ~8 hours total for tier
**Risk:** Low per file (isolated pages), but high cumulative verification effort

### Tier 4 — Cleanup (remove Lucide system)

Only after ALL Tier 1-3 migrations are verified.

- [ ] **P2-T41** Delete `/lib/icons-set-a.tsx` through `icons-set-e.tsx` (5 files)
- [ ] **P2-T42** Delete `/lib/icon-base.tsx`
- [ ] **P2-T43** Delete `/lib/icons.ts` barrel
- [ ] **P2-T44** Update `/vite.config.ts` — remove `lucide-react` from `optimizeDeps.include`, add `@phosphor-icons/react`
- [ ] **P2-T45** Update `/data/mock/ui/code-quality.ts` — dependency list string
- [ ] **P2-T46** Update `/data/mock/ui/deployment-readiness.ts` — security audit string
- [ ] **P2-T47** Update `/data/mock/events/categories.ts` — icon string references (Disc3 → Disc, Frame → FrameCorners, etc.)
- [ ] **P2-T48** Update `/data/mock/pages/hidden-about.ts` — icon string references
- [ ] **P2-T49** Update `/data/mock/ui/icon-library.ts` — icon name strings
- [ ] **P2-T50** Merge or retire `IconLibraryPage.tsx` — replace with `PhosphorIconsPage.tsx` as canonical icon reference
- [ ] **P2-T51** Update `StyleGuidePage.tsx` — replace `LucideIcon` type with Phosphor `Icon` type
- [ ] **P2-T52** Update all `/guidelines/` `.md` files (~20 files) — replace Lucide references with Phosphor
- [ ] **P2-T53** Update `CHANGELOG.md` with migration entry

**Effort:** ~3 hours
**Risk:** Low (post-verification cleanup)

---

## Verification checkpoints

### After Phase 1:
- [ ] Phosphor imports work without bundler errors
- [ ] PhosphorIconsPage renders correctly at `/dev-tools/phosphor-icons`
- [ ] All 6 weights display correctly
- [ ] Existing Lucide icons unchanged — no regressions

### After each Tier 2 batch:
- [ ] `npm run type-check` — zero errors
- [ ] `npm run build` — zero errors
- [ ] Visual spot-check of affected components (light + dark mode)
- [ ] Interactive icons still function (click, hover, focus)

### After Phase 2 complete:
- [ ] Full visual regression pass — all 47+ pages
- [ ] Light mode + dark mode comparison
- [ ] Lighthouse accessibility audit — target 100
- [ ] Lighthouse performance audit — confirm no bundle size regression
- [ ] Keyboard navigation test (Tab, Enter, Escape flows)
- [ ] `prefers-reduced-motion` test — no icon animations when enabled

---

## Risk register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Phosphor bundler crash | Low (user confirmed it works) | High | P1-T01 verification before any consumer changes |
| Visual regression (icon style change) | High | Medium | Per-batch visual review, PhosphorIconsPage comparison tool |
| `Menu` / `List` name collision | Certain | Low | Alias: `import { List as MenuIcon } from '@phosphor-icons/react'` |
| `Blend` icon missing in Phosphor | Certain | Low | Use `Drop` or `Intersect` as alternative |
| Touch target violations (existing) | Certain | Medium | P1-T08 fixes before Phase 2 |
| Bundle size increase (dual libraries) | Medium | Low | Temporary during parallel phase; removed at Tier 4 |

---

## Effort summary

| Phase | Estimated hours |
|---|---|
| Phase 1 (parallel setup) | 4-6 hours |
| Phase 2 Tier 1 (common, 11 files) | 2-3 hours |
| Phase 2 Tier 2 (UI, 17 files) | 3-4 hours |
| Phase 2 Tier 3 (pages, 49 files) | 6-8 hours |
| Phase 2 Tier 4 (cleanup, 15+ files) | 2-3 hours |
| Verification & QA | 2-3 hours |
| **Total** | **~20-27 hours** |

---

**End of task list.**
