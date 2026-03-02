# 🎨 Ash Shaw Makeup Portfolio

**The "Neon vs Atomic Black" Personal Portfolio**

> **Status:** ✅ **PRODUCTION READY** - All tasks complete, zero errors  
> **Version:** v8.1.0 | **Icon Library:** v10.0.0 | **Updated:** March 2, 2026  
> **See:** [Guidelines](./guidelines/Guidelines.md)

## 🌟 Overview

This is a high-performance React application built with **Vite**, **TypeScript**, and **Tailwind CSS**. It features a unique "Neon vs Atomic Black" design system, custom animations, and a focus on accessibility (WCAG 2.1 AA).

**Current Architecture:**
- **Frontend:** React 18 SPA (Single Page Application)
- **Styling:** Tailwind V4 + CSS Variables (Fluid Typography)
- **Data Source:** Dual Mode (Mock Data OR Headless WordPress)
- **State:** React Context + Hooks
- **Testing:** Build Verification Scripts

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env` and set `VITE_USE_WORDPRESS` to your desired mode.
```bash
cp .env.example .env
```

### 3. Verify Build
Run the verification script to check environment variables, links, and assets.
```bash
npx ts-node scripts/verify-build.ts
```

### 4. Run Development Server
```bash
npm run dev
```
Access the app at `http://localhost:5173`.

## 📚 Documentation

*   **[Guidelines.md](./guidelines/Guidelines.md)** - Start Here (Critical Rules)
*   **[wordpress-migration-guide.md](./guidelines/wordpress-migration-guide.md)** - How to connect to Headless WordPress
*   **[overview-components.md](./guidelines/overview-components.md)** - Component architecture
*   **[design-tokens/neon-system.md](./guidelines/design-tokens/neon-system.md)** - Design system rules

## 🛠️ Developer Tools

The application includes a built-in "DevTools" suite for inspecting the design system.
Navigate to **/dev-tools** in the running app to access:

*   **Design Tokens:** Colors, Typography, Spacing, Shadows.
*   **Component Showcase:** Interactive button/card tests.
*   **Accessibility Tester:** Automated contrast checks.
*   **Performance:** Animation stress tests.

## 🦅 Headless WordPress Migration

We are currently in **Sprint 4 (Launch Preparation)**. The codebase supports a **Dual Mode Architecture**, allowing seamless switching between local mock data and a live Headless WordPress backend.

**Key Files:**
*   `/hooks/useContent.ts` - Facade hook for data access.
*   `/dist/wordpress-export.json` - Content import file for WP All Import.
*   `/scripts/verify-build.ts` - Pre-flight check script.
*   `.env.example` - Configuration template.

## 📦 Project Structure

```
/
├── components/        # React components (Atomic structure)
├── data/              # Mock data & Types
├── guidelines/        # Documentation
├── hooks/             # Custom React hooks
├── styles/            # CSS Modules & Global Styles
└── utils/             # Helper functions
```

## 📊 Content Counts (v8.1.0)

| Content Type | Count | Notes |
|---|---|---|
| **Portfolio entries** | 42 | 24 original + 18 new (Phase 6) |
| **Blog posts** | 18 | 11 original + 7 new (Phase 6) |
| **Videos** | 11 | 1 original + 10 new (Phase 6) |
| **Sticker designs** | 40 | 27 original + 13 new (Phase 6) |
| **Ebook pages** | 82 | 20 chapters + 2 appendices |
| **Podcast episodes** | 6 | |
| **Events** | 1 | Origin Festival |
| **Pages (total routes)** | 60+ | |

---

**Maintained by:** Ash Shaw Portfolio Team
**Last Updated:** March 2, 2026