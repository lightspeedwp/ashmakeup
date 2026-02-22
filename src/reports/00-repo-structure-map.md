# 🗺 Ash Makeup Portfolio — Repository Structure Map

**Generated:** February 21, 2026
**Scope:** Root Directory Analysis

## 1. Top-Level Hierarchy

| Directory | Purpose | Notes |
|-----------|---------|-------|
| `/components` | React UI components | Organized by type (pages, common, sections, ui, figma) |
| `/content` | Markdown content | Source for some pages (About sub-pages, social profiles) |
| `/data` | Mock data & Types | Centralized data source (Single Source of Truth) |
| `/guidelines` | Documentation | Design system, patterns, and usage guides |
| `/hooks` | Custom React Hooks | Logic extraction |
| `/public` | Static assets | Favicons, fonts, PWA manifest |
| `/styles` | CSS files | CSS Modules/BEM blocks (No Tailwind utilities) |
| `/supabase` | Backend functions | Server-side logic (KV store) |
| `/tasks` | Task tracking | Project management & checklists |
| `/utils` | Utility functions | Helpers, SEO, Analytics, Formatting |

## 2. Component Architecture (`/components`)

Structured by responsibility:

*   **`/common`**: Shared shell components (Header, Footer, Layout, Menus).
*   **`/pages`**: Route-level components (Home, About/*, Portfolio/*, Blog/*, etc.).
*   **`/sections`**: Large page sections (Hero, Featured, FAQ).
*   **`/ui`**: Primitives & Atoms (Buttons, Cards, Inputs, Icons).
*   **`/figma`**: Figma-specific utilities (ImageWithFallback).

## 3. Data Model (`/data`)

*   **`/mock`**: JSON-like data objects used throughout the app.
    *   Subdirectories: `blog`, `events`, `pages`, `portfolio`, `podcasts`, `ui`, `videos`.
*   **`/types`**: TypeScript interfaces defining the data shapes.

## 4. Content Strategy (`/content`)

Markdown files used for text-heavy sections, particularly the "About" sub-pages and social profiles.
*   `/content/personal/*.md`: Biographical content.
*   `/content/lightspeed/*.md`: Professional history.

## 5. Design System Artifacts

*   **Styles**: `/styles/blocks/*.css` (BEM-based).
*   **Guidelines**: `/guidelines/*.md` (Comprehensive documentation).
*   **Icons**: Lucide React (standard icon library; tree-shakeable).

## 6. Key Observation

The project uses a hybrid content approach:
1.  **Mock Data (`/data/mock`)**: Primary structured content (Lists, Navigation, UI strings).
2.  **Markdown (`/content`)**: Long-form narrative content.

Migration Readiness: High. The separation of data, content, and UI suggests a clean path to a CMS (like WordPress or Contentful) by replacing the `/data/mock` loaders with API calls.