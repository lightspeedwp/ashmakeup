# 🧱 Phase 5: WordPress Migration Readiness (Portfolio-Specific)

**Generated:** February 21, 2026
**Scope:** Migration path to a WordPress Block Theme (FSE) or Headless WP
**Status:** Assessment Complete

## 1. Executive Summary

The project is **highly compatible** with a modern WordPress architecture. The strict separation of "Mock Data" (`/data/`) and "UI Components" (`/components/`) means the frontend is effectively already "headless," waiting for an API.

**Readiness Score:** 4.5/5
**Primary Gap:** React Router logic and local state management (Theme Toggle, Search) need adaptation.

## 2. Component Mapping

We can map current React components directly to WordPress Full Site Editing (FSE) concepts:

| React Component | WordPress Equivalent | Notes |
|-----------------|----------------------|-------|
| `Header.tsx` | **Template Part** (`header.html`) | Contains Navigation block + Search block. |
| `Footer.tsx` | **Template Part** (`footer.html`) | Contains Social Links block + Copyright. |
| `HeroLayout.tsx` | **Block Pattern** (Synced) | "Hero with Split Content" pattern. |
| `PortfolioCard.tsx` | **Query Loop Template** | Used inside a Query Loop block for `portfolio` CPT. |
| `BlogCard.tsx` | **Query Loop Template** | Used inside a Query Loop block for `post` post type. |
| `FaqSection.tsx` | **Block Pattern** | "Accordion FAQ" pattern, likely using `details`/`summary` blocks. |
| `ArchiveFilters.tsx` | **Filter Block** (Custom) | Requires a custom block or facet plugin (e.g., WP Grid Builder). |
| `LayoutSwitcher.tsx` | **UI Control** | Client-side only; no direct WP equivalent (would remain React). |

## 3. Data Model Mapping

The TypeScript interfaces in `/data/types/` map cleanly to WordPress structures:

| TS Interface | WordPress Object | Fields Mapping |
|--------------|------------------|----------------|
| `PortfolioEntry` | **CPT** (`portfolio`) | `title` -> `post_title`, `description` -> `post_content`, `images` -> `acf_gallery`. |
| `BlogPost` | **Post Type** (`post`) | `title` -> `post_title`, `content` -> `post_content`, `category` -> `category` tax. |
| `Video` | **CPT** (`video`) | `videoUrl` -> `acf_oembed`, `duration` -> `acf_text`. |
| `Podcast` | **CPT** (`podcast`) | `audioUrl` -> `acf_file`, `season` -> `acf_number`. |
| `HeroContent` | **ACF Options Page** | Global site settings or per-page meta. |

## 4. Migration Blockers & Risks

### 4.1. Routing & State
*   **React Router:** The app currently uses `react-router` for client-side transitions. A standard WP theme uses server-side routing.
    *   *Solution:* Move to Next.js (Headless) or accept full page reloads (Classic Theme).
*   **Local State:** `ThemeToggle` uses `localStorage`.
    *   *Solution:* This logic is fine to keep as a client-side script in WP.

### 4.2. "Magic" Imports
*   The `/imports/svg-*.ts` files (identified in Phase 3) are not compatible with WP media management.
    *   *Solution:* Must be converted to standard SVGs or an Icon Block.

### 4.3. Interactive Components
*   `EnhancedLightbox.tsx` and `ResponsiveGridSlider.tsx` are complex React components.
    *   *Solution:* Wrap these as **Custom Blocks** (using `@wordpress/scripts` + React) to maintain their fidelity.

## 5. Migration Strategy

1.  **Content First:** Export `/data/mock/*.ts` to CSV/XML and import into WordPress (using WP All Import).
2.  **Theme Second:** Create a block theme (`theme.json`) defining the tokens from `/styles/blocks/*.css`.
3.  **Blocks Third:** Port `HeroLayout`, `FaqSection`, `WhySection` to Block Patterns.
4.  **Headless Option:** Alternatively, keep this React app as-is and replace `/hooks/useContentful.ts` (mock) with a real `useWordPress.ts` hook fetching JSON API data.

## 6. Conclusion

The code is "Headless Ready." The most efficient path is **Headless WordPress**, keeping this React frontend and simply swapping the data layer. Converting to a PHP-based Block Theme would require rewriting 60% of the logic.
