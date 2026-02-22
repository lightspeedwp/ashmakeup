# Ash Shaw — v7.0.0 Personal Art Project Task List

**Version:** 7.0.0
**Created:** February 2026
**Last Updated:** February 21, 2026
**Status:** COMPLETE — All tasks done

---

## Overview

Major update shifting the project explicitly to a **Non-Commercial Personal Art Project**.
Focus on "Neon vs Atomic Black" identity, removing all booking/service language, and adding dedicated resource pages.

## Priority Legend

| Priority | Label | Meaning |
|----------|-------|---------|
| **P0** | Blocker | Must be done first; legal/brand compliance |
| **P1** | High | Core feature pages |
| **P2** | Medium | Enhancements |

---

## Phase 1 — Core Identity Pages (P0)

- [x] **Task 1: Manifesto Page** (`/about/manifesto`)
  - **Status:** Done
  - **Details:** Implemented "Neon vs Atomic Black" philosophy page.
  - **Features:** Parallax hero, 4-part philosophy section, distinct color themes.
  - **Data:** `/data/mock/pages/manifesto.ts`

- [x] **Task 2: Press Kit / Media Hub** (`/press`)
  - **Status:** Done
  - **Details:** Resource hub for journalists and organizers.
  - **Critical Update:** Changed "Contact & Booking" to **"Media Inquiries & Collaboration"** to enforce non-commercial nature.
  - **Features:** Downloadable assets, bio copy-paste, official branding.
  - **Data:** `/data/mock/pages/press.ts`

- [x] **Task 3: Accessibility Statement** (`/about/accessibility`)
  - **Status:** Done
  - **Details:** Dedicated page outlining WCAG 2.1 AA compliance.
  - **Features:** High contrast mode explanation, screen reader support details, feedback contact.
  - **Data:** `/data/mock/pages/accessibility.ts`

---

## Phase 2 — Feature Pages (P1)

- [x] **Task 4: Toolkit / Gear Page** (`/toolkit`)
  - **Status:** Done
  - **Details:** "What's In My Bag" style page showcasing tools and pigments.
  - **Features:** Categories for Paints, Brushes, Tech, Survival.
  - **Data:** `/data/mock/pages/gear.ts`

- [x] **Task 5: Festival Landing Page** (`/next-festival`)
  - **Status:** Done
  - **Details:** Countdown and hype page for the next major event.
  - **Features:** Countdown timer, immersive hero background, community call-to-action.
  - **Data:** `/data/mock/pages/festival.ts`

---

## Phase 3 — Compliance & Infrastructure (P0)

- [x] **Task 6: Non-Commercial Enforcement**
  - **Status:** Done
  - **Details:** Audit and update all content to remove "booking", "services", and "prices".
  - **Updates:** 
    - Updated `legal.ts` (Terms & Privacy) to explicitly state "Personal Art Project".
    - Updated `home.ts` CTAs to focus on "Viewing Portfolio".
    - Updated `PressKitPage` headers.

- [x] **Task 7: Data Architecture**
  - **Status:** Done
  - **Details:** Centralized all new page content in `/data/mock/pages/`.
  - **Files:** `manifesto.ts`, `press.ts`, `gear.ts`, `festival.ts`, `accessibility.ts`.

- [x] **Task 8: Routing & Sitemap**
  - **Status:** Done
  - **Details:** Registered all new routes in `routes.ts`.
  - **Routes:** `/about/manifesto`, `/press`, `/toolkit`, `/next-festival`, `/about/accessibility`.

---

**Completion Date:** February 21, 2026
**Maintained by:** Ash Shaw Portfolio Team
