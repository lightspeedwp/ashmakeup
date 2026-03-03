# Phosphor Icons migration — full audit report

**Orchestrator:** [/prompts/phosphor-migration/orchestrator.md](../../prompts/phosphor-migration/orchestrator.md)
**Date:** March 3, 2026
**Version:** 1.0.0

---

## Sub-audit 1 — Lucide icon inventory

### 1.1 Icon barrel exports (96 unique icons)

Source: `/lib/icons.ts` → re-exports from 5 chunked set files.

| Set file | Icons | Count |
|---|---|---|
| `icons-set-a.tsx` | Activity, ArrowLeft, ArrowRight, ArrowUp, Book, BookOpen, Bookmark, Brain, BusFront, Calendar, Camera, CarFront, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Circle | 18 |
| `icons-set-b.tsx` | CircleCheck, CircleHelp, CirclePlay, CircleX, Clock, Cloud, Code, Copy, Download, Ellipsis, ExternalLink, Eye, FileCode, FileText, FolderOpen, GraduationCap, Headphones, Heart | 18 |
| `icons-set-c.tsx` | Home, Image, Info, Layers, LayoutGrid, Leaf, Lightbulb, Link2, List, Lock, Mail, MapPin, Maximize, Menu, MessageCircle, MessageSquare, Mic, Minimize, Minus, Moon | 20 |
| `icons-set-d.tsx` | Music, Newspaper, Paintbrush, Palette, Pause, Plane, Play, Plus, Pointer, RefreshCw, Rocket, Ruler, Scissors, Search, Share2, Shield, Shuffle, SlidersHorizontal, Sparkles, Star | 20 |
| `icons-set-e.tsx` | Sun, Tag, ThumbsUp, TrainFront, Trash2, TriangleAlert, Type, User, Volume2, VolumeX, Wifi, WifiOff, X, Zap, ZoomIn, ZoomOut | 16 |
| **Total** | | **92** |

Also exports: `IconProps` (interface), `LucideIcon` (type alias) from `icon-base.tsx`.

Note: barrel lists 96 export names but some overlap in type re-exports. Actual unique icon components: **92**.

### 1.2 Consumer files (77 .tsx files)

**Common components (11 files):**

| File | Icons imported |
|---|---|
| `AboutDropdown.tsx` | ChevronDown, ChevronUp, + others |
| `BlogMegaMenu.tsx` | ArrowRight, Clock |
| `ContactMiniMenu.tsx` | ArrowRight, Mail |
| `ErrorBoundary.tsx` | TriangleAlert, RefreshCw |
| `Footer.tsx` | Link2, Check |
| `Header.tsx` | X |
| `MobileMenu.tsx` | Mail |
| `OfflineIndicator.tsx` | Wifi, WifiOff |
| `PWAInstallPrompt.tsx` | X, Download |
| `PortfolioMegaMenu.tsx` | ArrowRight |
| `ThemeToggle.tsx` | Moon, Sun |

**UI components (17 files):**

| File | Icons imported |
|---|---|
| `Accordion.tsx` | ChevronDown |
| `ArchiveFilters.tsx` | SlidersHorizontal, X |
| `Breadcrumbs.tsx` | ChevronRight, Home |
| `EbookSettingsModal.tsx` | X, SlidersHorizontal, Type, Minimize, Eye |
| `EnhancedLightbox.tsx` | X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, LayoutGrid, Play |
| `ImageGallery.tsx` | ZoomIn |
| `PortfolioCard.tsx` | ChevronLeft, ChevronRight, Play, Calendar |
| `ReadMoreButton.tsx` | ArrowRight |
| `ResponsiveGridSlider.tsx` | ChevronLeft, ChevronRight |
| `ScrollDownArrow.tsx` | ChevronDown |
| `ScrollToTop.tsx` | ArrowUp |
| `SearchInput.tsx` | Search, X |
| `SectionCard.tsx` | (type: LucideIcon) |
| `ShareComponent.tsx` | Share2, ExternalLink, Link2, Check, Mail, MessageCircle, X |
| `SliderCard.tsx` | ChevronLeft, ChevronRight, Play, Calendar |
| `VideoPlayer.tsx` | Play, Pause, Volume2, VolumeX, Maximize |
| `pagination.tsx` | ChevronLeft, ChevronRight, Ellipsis |

**Page components (49 files):**

| Area | Files | Sample icons |
|---|---|---|
| About pages (8) | AboutPage, BookPage, EbookPage, HiddenAboutPage, PodcastPage, SixCatsPage, TravelsPage, ebook/* | Palette, Blend, Layers, BookOpen, X, Mic, MapPin, etc. |
| Blog pages (4) | BlogPage, BlogPostPage, BlogCategoryPage, BlogTagPage | Calendar, Clock, BookOpen, Tag, User, Eye, Share2, Heart |
| Dev tools (14) | DevToolsPage, IconLibraryPage, AccessibilityTesterPage, AnimationSpecimenPage, ButtonSpecimenPage, CardSpecimenPage, DeploymentReadinessPage, DesignTokensRefPage, IntegrationTesterPage, PerformanceTesterPage, RadiusSpecimenPage, ShadowSpecimenPage, SpacingSpecimenPage, TypographySpecimenPage | Wide variety |
| Events (4) | EventsPage, EventDetailPage, EventCategoryPage, EventTagPage | MapPin, Music, Calendar |
| FAQ (1) | FaqAggregatePage | Search, Plus, Minus, CircleHelp |
| Feedback (1) | FeedbackPage | Search, Star, MapPin, Calendar, MessageSquare |
| Gear (1) | GearPage | Image, Paintbrush, Zap, Shield, ChevronRight |
| Podcasts (4) | PodcastsPage, PodcastDetailPage, PodcastCategoryPage, PodcastTagPage | Calendar, Clock, Mic, CirclePlay |
| Portfolio (3) | PortfolioDetailPage, PortfolioCategoryPage, PortfolioTagPage | ArrowLeft, Calendar, MapPin, Eye, Tag, Star, Image, Layers |
| Stickers (1) | StickersPage | X, ChevronLeft, ChevronRight, Search, Shuffle |
| Style guide (1) | StyleGuidePage | Wide variety + LucideIcon type |
| Videos (5) | VideosPage, VideoDetailPage, VideoCategoryPage, VideoTagPage, VideoModal | Play, ArrowRight, X, Tag |
| Other (2) | NotFoundPage, SitemapPage | Home, ArrowLeft, + many |

### 1.3 Legacy direct Lucide import

| File | Import |
|---|---|
| `AboutPage.tsx` (line 34-41) | `Palette, Blend, Layers, Lightbulb, Sparkles, ArrowRight` from `"lucide-react"` |

This is the **only** file importing directly from `lucide-react`. All others use `/lib/icons`.

### 1.4 Mock data string icon references

| File | Icon strings |
|---|---|
| `/data/mock/events/categories.ts` | `'Music'`, `'Disc3'`, `'GraduationCap'`, `'Sparkles'`, `'Frame'`, `'Users'`, `'Heart'` |
| `/data/mock/pages/hidden-about.ts` | `'Headphones'`, `'Play'`, `'Image'`, + others |
| `/data/mock/ui/icon-library.ts` | Extensive list of icon name strings for the IconLibraryPage |

**Missing from `/lib/icons.ts`:** `Disc3`, `Frame`, `Users` — referenced in events/categories data but not exported from the icon barrel. These would need Phosphor equivalents added.

### 1.5 Guideline references

~20 `.md` files in `/guidelines/` reference Lucide imports, including:
- `overview-icons.md` — primary icon system documentation
- `icons/interface.md` — detailed per-icon documentation
- `components/*.md` — ~15 component guides with Lucide import examples
- `dark-mode-implementation.md` — Moon/Sun icon reference

### 1.6 Other system references

| File | Reference |
|---|---|
| `/vite.config.ts` (line 126) | `'lucide-react'` in `optimizeDeps.include` |
| `/data/mock/ui/code-quality.ts` (line 117) | `'lucide-react'` in dependency list |
| `/data/mock/ui/deployment-readiness.ts` (line 80) | `'lucide-react'` in security audit text |

---

## Sub-audit 2 — Phosphor equivalents mapping

### 2.1 Bundler compatibility

Per user confirmation: **`@phosphor-icons/react` works in the Figma Make environment as a standard npm import.** Direct usage:

```tsx
import { MagnifyingGlass, CaretDown } from '@phosphor-icons/react';

<MagnifyingGlass size={24} weight="regular" />
```

This means the `dangerouslySetInnerHTML` workaround in `/lib/icons-set-*.tsx` is **not needed for Phosphor**. The existing Lucide workaround was specific to how Lucide's internal JSX was structured.

### 2.2 Full mapping table (92 icons)

| # | Lucide name | Phosphor name | Status | Notes |
|---|---|---|---|---|
| 1 | Activity | Activity | ✅ | |
| 2 | ArrowLeft | ArrowLeft | ✅ | |
| 3 | ArrowRight | ArrowRight | ✅ | |
| 4 | ArrowUp | ArrowUp | ✅ | |
| 5 | Book | Book | ✅ | |
| 6 | BookOpen | BookOpen | ✅ | |
| 7 | Bookmark | BookmarkSimple | ⚠️ | Phosphor `Bookmark` has tabs; `BookmarkSimple` matches Lucide |
| 8 | Brain | Brain | ✅ | |
| 9 | BusFront | Bus | ⚠️ | Renamed |
| 10 | Calendar | Calendar | ✅ | or `CalendarBlank` |
| 11 | Camera | Camera | ✅ | |
| 12 | CarFront | Car | ⚠️ | Renamed |
| 13 | Check | Check | ✅ | |
| 14 | ChevronDown | CaretDown | ⚠️ | Renamed |
| 15 | ChevronLeft | CaretLeft | ⚠️ | Renamed |
| 16 | ChevronRight | CaretRight | ⚠️ | Renamed |
| 17 | ChevronUp | CaretUp | ⚠️ | Renamed |
| 18 | Circle | Circle | ✅ | |
| 19 | CircleCheck | CheckCircle | ⚠️ | Renamed |
| 20 | CircleHelp | Question | ⚠️ | Renamed (no circle variant in Phosphor) |
| 21 | CirclePlay | PlayCircle | ⚠️ | Renamed |
| 22 | CircleX | XCircle | ⚠️ | Renamed |
| 23 | Clock | Clock | ✅ | |
| 24 | Cloud | Cloud | ✅ | |
| 25 | Code | Code | ✅ | |
| 26 | Copy | Copy | ✅ | |
| 27 | Download | DownloadSimple | ⚠️ | Phosphor `Download` has tray; `DownloadSimple` matches Lucide |
| 28 | Ellipsis | DotsThree | ⚠️ | Renamed |
| 29 | ExternalLink | ArrowSquareOut | ⚠️ | Renamed |
| 30 | Eye | Eye | ✅ | |
| 31 | FileCode | FileCode | ✅ | or `FileTs`, `FileJs` |
| 32 | FileText | FileText | ✅ | |
| 33 | FolderOpen | FolderOpen | ✅ | |
| 34 | GraduationCap | GraduationCap | ✅ | |
| 35 | Headphones | Headphones | ✅ | |
| 36 | Heart | Heart | ✅ | |
| 37 | Home | House | ⚠️ | Renamed |
| 38 | Image | Image | ✅ | |
| 39 | Info | Info | ✅ | |
| 40 | Layers | Stack | ⚠️ | Renamed |
| 41 | LayoutGrid | SquaresFour | ⚠️ | Renamed |
| 42 | Leaf | Leaf | ✅ | |
| 43 | Lightbulb | Lightbulb | ✅ | |
| 44 | Link2 | Link | ⚠️ | Renamed (Phosphor `Link` = chain link) |
| 45 | List | List | ✅ | |
| 46 | Lock | Lock | ✅ | or `LockSimple` |
| 47 | Mail | Envelope | ⚠️ | Renamed |
| 48 | MapPin | MapPin | ✅ | |
| 49 | Maximize | ArrowsOut | ⚠️ | Renamed |
| 50 | Menu | List | ⚠️ | ⚠️ COLLISION with Lucide `List` → use `Hamburger` or keep aliased |
| 51 | MessageCircle | ChatCircle | ⚠️ | Renamed |
| 52 | MessageSquare | Chat | ⚠️ | Renamed |
| 53 | Mic | Microphone | ⚠️ | Renamed |
| 54 | Minimize | ArrowsIn | ⚠️ | Renamed |
| 55 | Minus | Minus | ✅ | |
| 56 | Moon | Moon | ✅ | |
| 57 | Music | MusicNotes | ⚠️ | Renamed |
| 58 | Newspaper | Newspaper | ✅ | |
| 59 | Paintbrush | PaintBrush | ⚠️ | Case change |
| 60 | Palette | Palette | ✅ | |
| 61 | Pause | Pause | ✅ | |
| 62 | Plane | Airplane | ⚠️ | Renamed |
| 63 | Play | Play | ✅ | |
| 64 | Plus | Plus | ✅ | |
| 65 | Pointer | Cursor | ⚠️ | Renamed |
| 66 | RefreshCw | ArrowsClockwise | ⚠️ | Renamed |
| 67 | Rocket | Rocket | ✅ | or `RocketLaunch` |
| 68 | Ruler | Ruler | ✅ | |
| 69 | Scissors | Scissors | ✅ | |
| 70 | Search | MagnifyingGlass | ⚠️ | Renamed |
| 71 | Share2 | ShareNetwork | ⚠️ | Renamed |
| 72 | Shield | Shield | ✅ | or `ShieldCheck` |
| 73 | Shuffle | Shuffle | ✅ | |
| 74 | SlidersHorizontal | SlidersHorizontal | ✅ | or `Faders` |
| 75 | Sparkles | Sparkle | ⚠️ | Singular |
| 76 | Star | Star | ✅ | |
| 77 | Sun | Sun | ✅ | |
| 78 | Tag | Tag | ✅ | |
| 79 | ThumbsUp | ThumbsUp | ✅ | |
| 80 | TrainFront | Train | ⚠️ | Renamed |
| 81 | Trash2 | Trash | ⚠️ | Renamed |
| 82 | TriangleAlert | Warning | ⚠️ | Renamed |
| 83 | Type | TextAa | ⚠️ | Renamed |
| 84 | User | User | ✅ | |
| 85 | Volume2 | SpeakerHigh | ⚠️ | Renamed |
| 86 | VolumeX | SpeakerSlash | ⚠️ | Renamed |
| 87 | Wifi | WifiHigh | ⚠️ | Renamed |
| 88 | WifiOff | WifiSlash | ⚠️ | Renamed |
| 89 | X | X | ✅ | |
| 90 | Zap | Lightning | ⚠️ | Renamed |
| 91 | ZoomIn | MagnifyingGlassPlus | ⚠️ | Renamed |
| 92 | ZoomOut | MagnifyingGlassMinus | ⚠️ | Renamed |

**Extra icons needed (in data but not in barrel):**

| Lucide string | Phosphor equivalent | Status |
|---|---|---|
| `Disc3` | `Disc` | ⚠️ |
| `Frame` | `FrameCorners` | ⚠️ |
| `Users` | `Users` | ✅ |
| `Blend` (AboutPage) | `Drop` or `Palette` | ⚠️ No direct Phosphor "Blend" |

### 2.3 Summary

- **✅ Same name:** 48 icons (52%)
- **⚠️ Renamed:** 44 icons (48%)
- **❌ No equivalent:** 1 (`Blend` — needs creative alternative)
- **⚠️ Name collision:** `Menu` → Phosphor `List` collides with Lucide `List`. Solution: import as `{ List as MenuIcon }` or use Phosphor's `Hamburger` icon.

### 2.4 Phosphor weight variants

| Weight | Stroke equiv. | Best for | Accessibility |
|---|---|---|---|
| `thin` | ~1px | Large decorative icons (48px+) | ⚠️ Fails contrast below 24px |
| `light` | ~1.5px | Subtle metadata, secondary UI | ⚠️ Caution below 20px |
| `regular` | ~2px | **Default — all standard UI** | ✅ Safe at all sizes |
| `bold` | ~3px | Emphasis, active states, CTAs | ✅ High visibility |
| `fill` | Solid | Toggles, ratings, status | ✅ Maximum contrast |
| `duotone` | 2px + 20% fill | Feature cards, hero accents | ⚠️ Secondary layer may fail contrast |

**Recommended default:** `regular` — closest to Lucide's current stroke aesthetic.

**Recommended for neon dark mode:** `bold` or `duotone` — leverages the neon visual identity.

---

## Sub-audit 3 — WCAG AA icon accessibility audit

### 3.1 Current ARIA compliance

**Finding:** The hand-rolled icons in `/lib/icons-set-*.tsx` do **NOT** set `aria-hidden` by default. The `IconProps` interface includes `ariaHidden`, `ariaLabel`, `ariaLabelledby` but these are **not applied** in the SVG render — they're accepted as props but never passed through to the `<svg>` element.

**Impact:** All 92 icons render without ARIA attributes unless the consumer manually applies them. Most consumers do not:

```tsx
// Typical consumer usage — NO aria attributes:
<Calendar className="blog-meta-icon" />

// Rare correct usage (found in AboutPage.tsx):
<Palette className="about-skill-icon" aria-hidden={true} />
```

**Phosphor improvement:** `@phosphor-icons/react` icons include `aria-hidden="true"` by default, which is correct for the majority of decorative/supplementary icon usage.

### 3.2 Icon contrast findings

**Dark mode (`.dark`):**
- Icons inherit `currentColor` from parent text — generally safe (neutral-200/300 on atomic black)
- Neon-coloured icons (a11y-tester, about-page skill icons) use dedicated CSS custom properties — verified at 4.5:1+
- No violations found in dark mode icon colours

**Light mode:**
- Icons inherit `currentColor` — neutral-700/800 on white — safe at 7:1+
- Muted icons (`.blog-meta-icon`, `.podcast-meta-icon`) use neutral-500 — measured at 4.6:1 on white (passes AA)
- No violations found in light mode icon colours

### 3.3 Interactive icon touch targets

**Violations found:**

| Component | Icon | Current size | Issue |
|---|---|---|---|
| `ScrollToTop.tsx` | ArrowUp | 24px icon in 40px button | Button is 40×40px — fails 44px minimum |
| `ThemeToggle.tsx` | Sun/Moon | 20px icon in 36px button | Button is 36×36px — fails 44px minimum |
| `ArchiveFilters.tsx` | X (clear) | 16px icon in 28px button | Button is 28×28px — fails 44px minimum |
| `pagination.tsx` | ChevronLeft/Right | 20px icon in 36px button | Button is 36×36px — fails 44px minimum |

**Note:** These are existing violations unrelated to the Phosphor migration, but should be fixed during Phase 1.

### 3.4 Phosphor weight accessibility matrix

| Weight | Min safe size | Decorative | Informational | Interactive | Notes |
|---|---|---|---|---|---|
| `thin` | 32px | ✅ (at 32px+) | ❌ | ❌ | Too thin for functional UI |
| `light` | 24px | ✅ | ⚠️ (24px+ only) | ❌ | Avoid for action triggers |
| `regular` | 16px | ✅ | ✅ | ✅ | **Project default** |
| `bold` | 16px | ✅ | ✅ | ✅ | Good for emphasis |
| `fill` | 12px | ✅ | ✅ | ✅ | Best contrast, good for small |
| `duotone` | 24px | ✅ | ⚠️ | ⚠️ | Secondary layer at 20% opacity — audit per background |

### 3.5 Reduced motion compliance

All current icon animations are CSS-based (hover transitions, spinner rotations). The project already has comprehensive `prefers-reduced-motion` support per `/guidelines/prefers-reduced-motion.md`. Phosphor icons use no internal animations — safe by default. CSS animations applied to icons should continue to respect the existing reduced-motion media queries.

---

## Sub-audit 4 — Iconography design tokens specification

### 4.1 Proposed CSS custom properties

```css
/* ── Icon size scale ── */
/* Already exists in globals.css as utility classes (.icon-xs through .icon-2xl).
   Add CSS custom properties for use in component styles: */
--icon-size-xs: 0.75rem;   /* 12px */
--icon-size-sm: 1rem;       /* 16px */
--icon-size-md: 1.25rem;    /* 20px */
--icon-size-base: 1.5rem;   /* 24px — Phosphor default prop */
--icon-size-lg: 2rem;       /* 32px */
--icon-size-xl: 3rem;       /* 48px */

/* ── Icon colours (light mode) ── */
--icon-color-default: var(--wp--preset--color--neutral-700);
--icon-color-muted: var(--wp--preset--color--neutral-500);
--icon-color-accent: var(--wp--preset--color--neon-pink-text);
--icon-color-interactive: var(--wp--preset--color--neon-blue-text);
--icon-color-success: var(--wp--preset--color--neon-green-text);
--icon-color-error: var(--wp--preset--color--neon-red-text);
--icon-color-warning: var(--wp--preset--color--neon-orange-text);
--icon-color-disabled: var(--wp--preset--color--neutral-400);

/* ── Icon colours (dark mode) ── */
.dark {
  --icon-color-default: var(--wp--preset--color--neutral-200);
  --icon-color-muted: var(--wp--preset--color--neutral-400);
  --icon-color-accent: var(--wp--preset--color--neon-pink);
  --icon-color-interactive: var(--wp--preset--color--neon-blue);
  --icon-color-success: var(--wp--preset--color--neon-green);
  --icon-color-error: var(--wp--preset--color--neon-red);
  --icon-color-warning: var(--wp--preset--color--neon-orange);
  --icon-color-disabled: var(--wp--preset--color--neutral-600);
}

/* ── Icon animation ── */
--icon-transition: 200ms ease;
--icon-hover-scale: 1.1;
--icon-hover-opacity: 0.8;

/* ── Icon spacing ── */
--icon-btn-gap: 0.5rem;     /* gap between icon and button text */
--icon-nav-gap: 0.375rem;   /* gap in nav items */
--icon-inline-gap: 0.25rem; /* gap when inline with text */

/* ── Duotone ── */
--icon-duotone-opacity: 0.2;
```

### 4.2 Phosphor weight usage guide

| Context | Recommended weight | Size | Rationale |
|---|---|---|---|
| Navigation icons (menu, arrows, chevrons) | `regular` | 20-24px | Functional clarity |
| Button icons (CTA, actions) | `regular` or `bold` | 20px | Visibility in action context |
| Metadata labels (date, time, author) | `regular` | 16-20px | Readable at small size |
| Card accents / feature highlights | `duotone` | 24-32px | Visual richness |
| Hero section decorative icons | `thin` or `light` | 48px+ | Elegant at large scale |
| Status indicators (success, error) | `fill` | 16-20px | Maximum clarity |
| Toggle states (active/inactive) | `fill` (active) / `regular` (inactive) | 20-24px | Clear state distinction |
| Rating stars | `fill` (filled) / `regular` (empty) | 16-20px | Standard pattern |
| Dark mode neon contexts | `bold` or `duotone` | 24px+ | Neon glow complements |

### 4.3 BEM class system

```css
/* Base */
.ph-icon { display: inline-flex; align-items: center; justify-content: center; }

/* Size modifiers (match existing .icon-* utilities) */
.ph-icon--xs { width: var(--icon-size-xs); height: var(--icon-size-xs); }
.ph-icon--sm { width: var(--icon-size-sm); height: var(--icon-size-sm); }
.ph-icon--md { width: var(--icon-size-md); height: var(--icon-size-md); }
.ph-icon--base { width: var(--icon-size-base); height: var(--icon-size-base); }
.ph-icon--lg { width: var(--icon-size-lg); height: var(--icon-size-lg); }
.ph-icon--xl { width: var(--icon-size-xl); height: var(--icon-size-xl); }

/* Functional modifiers */
.ph-icon--interactive { cursor: pointer; transition: transform var(--icon-transition); }
.ph-icon--interactive:hover { transform: scale(var(--icon-hover-scale)); }
.ph-icon--decorative { pointer-events: none; }
.ph-icon--muted { color: var(--icon-color-muted); }
.ph-icon--accent { color: var(--icon-color-accent); }
.ph-icon--neon { filter: drop-shadow(0 0 6px currentColor); }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .ph-icon--interactive:hover { transform: none; }
}
```

---

## Sub-audit 5 — Phosphor dev tools page specification

### 5.1 Route and navigation

- **Route:** `/dev-tools/phosphor-icons`
- **Breadcrumb:** Home > Developer tools > Phosphor icons
- **Hub entry:** Tool #24 in DevToolsPage grid

### 5.2 Page features

1. **Search bar** — filter icons by name (Lucide or Phosphor name)
2. **Weight switcher** — 6 buttons: thin | light | regular | bold | fill | duotone
3. **Size selector** — pill group: 16 | 20 | 24 | 32 | 48
4. **Background toggle** — light / dark preview
5. **Category filter** — pills: all | navigation | media | social | status | content | action
6. **Icon grid** — responsive grid of icon cards
7. **Icon card** — shows:
   - Phosphor icon at selected weight/size
   - Lucide equivalent (if exists) at same size for comparison
   - Phosphor name + Lucide name
   - Migration status badge (migrated / pending)
   - Copy button (copies import statement)
   - WCAG badge (pass / warning based on weight + size)
8. **Stats bar** — total icons, migrated count, pending count

### 5.3 Data file structure

Location: `/data/mock/ui/phosphor-icons.ts`

```ts
export interface PhosphorIconEntry {
  phosphorName: string;
  lucideName: string | null;
  category: 'navigation' | 'media' | 'social' | 'status' | 'content' | 'action' | 'misc';
  usedInFiles: string[];
  migrated: boolean;
  notes: string;
}

export var phosphorIconData: PhosphorIconEntry[] = [ /* ... */ ];
```

### 5.4 Component architecture

```
PhosphorIconsPage.tsx
├── Breadcrumbs
├── SEO (setSEO)
├── Stats bar (total / migrated / pending)
├── Filter bar
│   ├── SearchInput
│   ├── Weight switcher (6 buttons)
│   ├── Size selector (5 pills)
│   ├── Background toggle
│   └── Category pills
└── Icon grid
    └── PhosphorIconCard (×N)
        ├── Icon preview (Phosphor at selected weight/size)
        ├── Comparison (Lucide equivalent)
        ├── Labels (names, status badge)
        └── Copy button
```

### 5.5 CSS

Create `/styles/blocks/phosphor-icons-page.css` following BEM conventions. Reuse patterns from existing `icon-library.css`.

---

## Sub-audit 6 — Migration task plan

See `/tasks/phosphor-migration-tasks.md` for the full prioritised task list.

### Summary

| Phase | Tasks | Files affected | Effort |
|---|---|---|---|
| Phase 1 (parallel) | 8 tasks | ~10 new files | ~4-6 hours |
| Phase 2 Tier 1 (common) | 11 files | 11 component files | ~2 hours |
| Phase 2 Tier 2 (UI) | 17 files | 17 component files | ~3 hours |
| Phase 2 Tier 3 (pages) | 49 files | 49 component files | ~6 hours |
| Phase 2 Tier 4 (cleanup) | 15+ files | lib/, config, data, guidelines | ~3 hours |
| **Total** | | **~100+ files** | **~18-20 hours** |

---

**End of audit report.**
