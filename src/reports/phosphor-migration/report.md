# Phosphor Icons migration investigation

**Date:** March 3, 2026
**Scope:** Assess effort to replace Lucide React with [Phosphor Icons React](https://github.com/phosphor-icons/react)
**Status:** Investigation complete — findings only (no code changes)

---

## 1. Current icon architecture

The project does **NOT** import from `lucide-react` directly (except one legacy line in `AboutPage.tsx`). Instead, it uses a **fully custom inline SVG icon system** across 7 files in `/lib/`:

| File | Purpose | Icons |
|---|---|---|
| `/lib/icon-base.tsx` | Shared `IconProps` interface + `LucideIcon` type | — |
| `/lib/icons-set-a.tsx` | Icons A–Ch | 19 icons |
| `/lib/icons-set-b.tsx` | Icons Ci–He | 18 icons |
| `/lib/icons-set-c.tsx` | Icons Ho–Mo | 21 icons |
| `/lib/icons-set-d.tsx` | Icons Mu–St | 21 icons |
| `/lib/icons-set-e.tsx` | Icons Su–Zo | 17 icons |
| `/lib/icons.ts` | Barrel re-export | 96 unique icons |

**Key insight:** Each icon is a hand-written named function rendering an `<svg>` with `dangerouslySetInnerHTML` — specifically engineered to work around the Figma Make bundler's JSX transform limitations (can't handle SVG child elements natively). The Lucide SVG path data was extracted and baked into these functions.

### Why this architecture exists

The bundler cannot process:
- `import * as Icons from 'lucide-react'` — crashes the esm.sh CDN runtime (1,000+ icon barrel)
- SVG child elements (`<path>`, `<circle>`, etc.) inside JSX — the `jsxs` transform chokes on them
- Arrow functions, destructuring, and other modern syntax in certain contexts

The workaround: every icon is a named function expression that uses `dangerouslySetInnerHTML` to inject raw SVG path markup as a string.

---

## 2. Total usage footprint

### Code files importing icons

| Category | Files | Import source |
|---|---|---|
| UI components (`/components/ui/`) | 17 files | `../../lib/icons` |
| Page components (`/components/pages/`) | 48+ files | `../../../lib/icons` |
| Common components (`/components/common/`) | 11 files | `../../lib/icons` |
| Legacy direct Lucide import | 1 file (`AboutPage.tsx`) | `lucide-react` |
| **Total consumer files** | **~77 files** | |

### Icon inventory (96 unique icons)

```
Activity, ArrowLeft, ArrowRight, ArrowUp, Book, BookOpen, Bookmark, Brain,
BusFront, Calendar, Camera, CarFront, Check, ChevronDown, ChevronLeft,
ChevronRight, ChevronUp, Circle, CircleCheck, CircleHelp, CirclePlay,
CircleX, Clock, Cloud, Code, Copy, Download, Ellipsis, ExternalLink, Eye,
FileCode, FileText, FolderOpen, GraduationCap, Headphones, Heart, Home,
Image, Info, Layers, LayoutGrid, Leaf, Lightbulb, Link2, List, Lock, Mail,
MapPin, Maximize, Menu, MessageCircle, MessageSquare, Mic, Minimize, Minus,
Moon, Music, Newspaper, Paintbrush, Palette, Pause, Plane, Play, Plus,
Pointer, RefreshCw, Rocket, Ruler, Scissors, Search, Share2, Shield,
Shuffle, SlidersHorizontal, Sparkles, Star, Sun, Tag, ThumbsUp, TrainFront,
Trash2, TriangleAlert, Type, User, Volume2, VolumeX, Wifi, WifiOff, X, Zap,
ZoomIn, ZoomOut
```

Plus **2 icon string references** in mock data (`Disc3`, `Frame`, `Users` in events/categories — not in lib, likely unused).

### Other references to update

- `/vite.config.ts` — `optimizeDeps.include` lists `lucide-react`
- `/data/mock/ui/code-quality.ts` — dependency list string
- `/data/mock/ui/deployment-readiness.ts` — dependency audit string
- `/guidelines/overview-icons.md` — full documentation references Lucide
- `/guidelines/icons/interface.md` — every icon documented with Lucide imports
- `/guidelines/components/*.md` — ~15 component guideline files reference Lucide imports
- `/guidelines/dark-mode-implementation.md` — references Lucide
- `IconLibraryPage.tsx` — Dev tools icon browser, curated `ICON_MAP` of 55+ entries
- `StyleGuidePage.tsx` — imports `LucideIcon` type alias

---

## 3. Phosphor Icons comparison

### API differences

| Feature | Lucide React | Phosphor React |
|---|---|---|
| Import style | `import { Search } from 'lucide-react'` | `import { MagnifyingGlass } from '@phosphor-icons/react'` |
| Size prop | `size={24}` | `size={24}` ✅ same |
| Color prop | `color="red"` | `color="red"` ✅ same |
| Stroke width | `strokeWidth={2}` | N/A — Phosphor uses `weight` prop |
| Weight/style | N/A | `weight="regular" \| "bold" \| "fill" \| "duotone" \| "thin" \| "light"` |
| Default size | 24px | 32px (differs!) |
| viewBox | `0 0 24 24` | `0 0 256 256` (differs!) |
| Style | Stroke-based | Multiple weights including fill |
| Icon count | ~1,500 | ~1,200+ (comparable) |

### Name mapping (significant renames)

Many icons have different names. Examples of the 96 used icons:

| Lucide name | Phosphor equivalent | Notes |
|---|---|---|
| `ArrowLeft` | `ArrowLeft` | ✅ Same |
| `ArrowRight` | `ArrowRight` | ✅ Same |
| `BookOpen` | `BookOpen` | ✅ Same |
| `Calendar` | `Calendar` | ✅ Same |
| `Check` | `Check` | ✅ Same |
| `ChevronDown` | `CaretDown` | ❌ Renamed |
| `ChevronLeft` | `CaretLeft` | ❌ Renamed |
| `ChevronRight` | `CaretRight` | ❌ Renamed |
| `ChevronUp` | `CaretUp` | ❌ Renamed |
| `CircleCheck` | `CheckCircle` | ❌ Renamed |
| `CircleHelp` | `Question` | ❌ Renamed |
| `CirclePlay` | `PlayCircle` | ❌ Renamed |
| `CircleX` | `XCircle` | ❌ Renamed |
| `Clock` | `Clock` | ✅ Same |
| `Copy` | `Copy` | ✅ Same |
| `Download` | `Download` | ✅ Same |
| `Ellipsis` | `DotsThree` | ❌ Renamed |
| `ExternalLink` | `ArrowSquareOut` | ❌ Renamed |
| `Eye` | `Eye` | ✅ Same |
| `FileText` | `FileText` | ✅ Same |
| `FolderOpen` | `FolderOpen` | ✅ Same |
| `GraduationCap` | `GraduationCap` | ✅ Same |
| `Heart` | `Heart` | ✅ Same |
| `Home` | `House` | ❌ Renamed |
| `Image` | `Image` | ✅ Same |
| `Info` | `Info` | ✅ Same |
| `Layers` | `Stack` | ❌ Renamed |
| `LayoutGrid` | `SquaresFour` | ❌ Renamed |
| `Lightbulb` | `Lightbulb` | ✅ Same |
| `Link2` | `Link` | ❌ Renamed |
| `List` | `List` | ✅ Same |
| `Lock` | `Lock` | ✅ Same |
| `Mail` | `Envelope` | ❌ Renamed |
| `MapPin` | `MapPin` | ✅ Same |
| `Maximize` | `ArrowsOut` | ❌ Renamed |
| `Menu` | `List` (collision!) | ⚠️ Conflict with `List` icon |
| `MessageCircle` | `ChatCircle` | ❌ Renamed |
| `MessageSquare` | `ChatSquare` | ❌ Renamed (or `Chat`) |
| `Mic` | `Microphone` | ❌ Renamed |
| `Minimize` | `ArrowsIn` | ❌ Renamed |
| `Moon` | `Moon` | ✅ Same |
| `Music` | `MusicNotes` | ❌ Renamed |
| `Newspaper` | `Newspaper` | ✅ Same |
| `Paintbrush` | `PaintBrush` | ❌ Case change |
| `Palette` | `Palette` | ✅ Same |
| `Pause` | `Pause` | ✅ Same |
| `Plane` | `Airplane` | ❌ Renamed |
| `Play` | `Play` | ✅ Same |
| `Plus` | `Plus` | ✅ Same |
| `RefreshCw` | `ArrowsClockwise` | ❌ Renamed |
| `Rocket` | `Rocket` | ✅ Same |
| `Search` | `MagnifyingGlass` | ❌ Renamed |
| `Share2` | `ShareNetwork` | ❌ Renamed |
| `Shield` | `Shield` | ✅ Same |
| `Shuffle` | `Shuffle` | ✅ Same |
| `SlidersHorizontal` | `SlidersHorizontal` | ✅ Same (or `Faders`) |
| `Sparkles` | `Sparkle` | ❌ Renamed (singular) |
| `Star` | `Star` | ✅ Same |
| `Sun` | `Sun` | ✅ Same |
| `Tag` | `Tag` | ✅ Same |
| `Trash2` | `Trash` | ❌ Renamed |
| `TriangleAlert` | `Warning` | ❌ Renamed |
| `Type` | `TextAa` | ❌ Renamed |
| `User` | `User` | ✅ Same |
| `Volume2` | `SpeakerHigh` | ❌ Renamed |
| `VolumeX` | `SpeakerSlash` | ❌ Renamed |
| `Wifi` | `Wifi` (or `WifiHigh`) | ⚠️ Slightly different |
| `WifiOff` | `WifiSlash` | ❌ Renamed |
| `X` | `X` | ✅ Same |
| `Zap` | `Lightning` | ❌ Renamed |
| `ZoomIn` | `MagnifyingGlassPlus` | ❌ Renamed |
| `ZoomOut` | `MagnifyingGlassMinus` | ❌ Renamed |

**Summary:** ~40 of 96 icons need renaming. ~56 share the same name.

### Visual differences

Phosphor and Lucide have **distinctly different visual styles**:
- **Lucide:** 24×24 viewBox, stroke-based, 2px stroke width, rounded caps/joins. Clean, minimal.
- **Phosphor:** 256×256 viewBox, available in 6 weights (thin/light/regular/bold/fill/duotone). The "regular" weight is closest to Lucide but noticeably different in detail — rounder corners, slightly thicker default proportions, different metaphors for some concepts.

**This WILL change the visual appearance of the site.** Every icon will look subtly (or noticeably) different.

---

## 4. Bundler compatibility — the critical blocker

### The `@phosphor-icons/react` package

Phosphor React exports components that render SVG child elements directly in JSX:

```tsx
// Phosphor's internal rendering (simplified):
export function MagnifyingGlass({ size, color, weight }) {
  return (
    <svg viewBox="0 0 256 256">
      <path d="M..." />  // ← Direct SVG child elements
      <circle cx="..." />
    </svg>
  );
}
```

**This is the exact pattern the Figma Make bundler CANNOT handle.** The current Lucide workaround exists specifically because SVG child elements inside JSX crash the `jsxs` transform.

### Options to resolve

**Option A: Use Phosphor directly (WILL NOT WORK)**
Importing `@phosphor-icons/react` will crash the bundler for the same reason the original `lucide-react` was replaced — SVG children in JSX.

**Option B: Rebuild the `/lib/icons-set-*.tsx` files with Phosphor SVG paths**
Same architecture as today, but swap the SVG `innerHTML` strings from Lucide path data to Phosphor path data. This preserves bundler safety.

- Requires extracting raw SVG path data from Phosphor's source for all 96 icons
- Phosphor uses `viewBox="0 0 256 256"` instead of `0 0 24 24` — every icon wrapper must change
- Phosphor paths are more complex (higher resolution), resulting in larger `innerHTML` strings
- The `strokeWidth` prop concept doesn't apply — Phosphor uses `weight` which selects different path sets
- Would need to pick one weight (e.g., "regular") and bake it in, OR support multiple weights with conditional path selection

**Option C: Use `@phosphor-icons/core` (SVG strings only)**
Phosphor provides a `@phosphor-icons/core` package with raw SVG strings per weight. These could be injected via `dangerouslySetInnerHTML` — exactly matching the current pattern. This is the most compatible approach.

---

## 5. Migration effort estimate

### If proceeding (Option B or C):

| Task | Files | Effort |
|---|---|---|
| Rebuild 5 icon set files with Phosphor SVG paths | 5 files | High — 96 icons × manual SVG extraction |
| Update `icon-base.tsx` types (remove `strokeWidth`, add `weight`) | 1 file | Low |
| Update `icons.ts` barrel (same exports, no rename needed) | 1 file | Low — keep Lucide names as aliases |
| Fix `AboutPage.tsx` direct Lucide import | 1 file | Low |
| Update `vite.config.ts` optimizeDeps | 1 file | Trivial |
| Update mock data string references | 2 files | Trivial |
| Update `IconLibraryPage.tsx` dev tool | 1 file | Medium |
| Update `StyleGuidePage.tsx` type references | 1 file | Low |
| Update all guideline `.md` files | ~20 files | Medium (docs only) |
| Visual regression testing (all 47+ pages) | — | High |
| **Total estimated effort** | **~30 files** | **~8-12 hours** |

### Key strategy: keep export names unchanged

The `/lib/icons.ts` barrel can continue exporting `Search`, `Menu`, `ChevronDown`, etc. — internally mapping to Phosphor's `MagnifyingGlass`, `List`, `CaretDown` paths. **This means zero changes to the 77 consumer files.** Only the 5 icon set files and the barrel need updating.

---

## 6. Recommendation

### Not recommended at this time

**Reasons:**

1. **High effort, low user-visible benefit.** The current hand-rolled icon system works, is bundler-safe, and is visually consistent. Swapping to Phosphor changes the visual language of every icon across 47+ pages without a clear design motivation.

2. **Bundler constraint makes it harder, not easier.** You can't use `@phosphor-icons/react` directly — you'd still need the `dangerouslySetInnerHTML` wrapper pattern. The migration is really "swap 96 SVG path strings" which is mechanical but tedious.

3. **Visual regression risk.** Phosphor's 256×256 viewBox and different design language mean every icon will render differently. This requires full visual QA across all pages in both light and dark mode.

4. **No functional gain.** Phosphor's `weight` system (6 variants per icon) is compelling for new projects, but the current site uses a single stroke weight consistently. The multi-weight feature would be unused.

### When it WOULD make sense

- If the project is redesigning its visual language and wants Phosphor's duotone/fill weights
- If migrating away from Figma Make to a standard bundler (then `@phosphor-icons/react` can be used directly)
- If adding significant new icon-heavy features where Phosphor has better metaphors

### If proceeding anyway

The lowest-risk approach:
1. Use `@phosphor-icons/core` for raw SVG strings
2. Rebuild the 5 `/lib/icons-set-*.tsx` files with Phosphor path data
3. Keep all export names identical (Lucide names as aliases)
4. Zero changes to 77 consumer files
5. Full visual regression pass

---

**End of report.**
