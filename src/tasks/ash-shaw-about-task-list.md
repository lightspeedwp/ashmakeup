# Ash Shaw — About Sub-Pages Task List

**Version:** 5.0.0
**Created:** February 2026
**Last Updated:** February 20, 2026
**Status:** COMPLETE — All 32 tasks done

---

## Priority Legend

| Priority | Label | Meaning |
|----------|-------|---------|
| **P0** | Blocker | Must be done first; other tasks depend on it |
| **P1** | High | Core deliverable; unlocks downstream work |
| **P2** | Medium | Important but not blocking other tasks |
| **P3** | Low | Enhancement / polish; no dependencies |

## Dependency Map

```
Phase 1 — Page Creation (P0, independent of each other)
  Tasks 1-8  (About sub-pages)

Phase 2 — Integration (P1, depends on Phase 1)
  Task 10  Sitemap         <- Tasks 1-8
  Task 11  SEO entries     <- Tasks 1-8
  Task 12  Routes          <- Tasks 1-8
  Task 13  Mock data       <- Tasks 1-8
  Task 14  CSS accents     <- Tasks 1-8

Phase 3 — Content Extraction (P1, parallel with Phase 2)
  Tasks 9a-9f  Interview questions  <- content files

Phase 4 — Navigation & UX (P2, depends on Phase 2)
  Task 15  Header dropdown         <- Tasks 10-14
  Task 16  eBook page flipper      <- content files
  Task 17  eBook touch + progress  <- Task 16

Phase 5 — Content Processing (P1, depends on Phase 3)
  Task 18  Interview Q&A -> content files  <- Tasks 9a-9f
  Task 19  Social profiles -> content files <- Tasks 9a-9f

Phase 6 — Content Integration (P2, depends on Phases 4+5)
  Task 20  Enriched content -> eBook pages       <- Tasks 16-17, 18-19
  Task 21  Enriched content -> About sub-pages   <- Tasks 1-8, 18-19

Phase 7 — Final Processing (P3, depends on Phase 5)
  Task 22  Round 2 content processing  <- Tasks 18-19

Phase 8 — eBook Reader Enhancements (P2, depends on Phases 4+6)
  Task 23  4-part expansion + privacy redactions   <- Tasks 16-17, 20
  Task 24  Unified responsive reader (v4.0.0)      <- Task 23
  Task 25  Appendix: Dance Like No One's Watching  <- Task 23
  Task 26  Reading position + chapter jump drawer  <- Task 24
```

---

## Completed Pages

| Route | Page | Neon Accent | Status |
|-------|------|-------------|--------|
| `/about` | About (main) | Purple | Done |
| `/about/berlin` | Berlin | Blue | Done |
| `/about/book` | The Book | Pink | Done |
| `/about/bio` | Biography | Purple | Done |
| `/about/process` | Creative Process | Green | Done |
| `/about/lucy-in-the-sky-with-diamonds` | Lucy in the Sky | Cyan | Done |
| `/about/travels` | Travels | Orange | Done |
| `/about/history` | History | -- | Done |
| `/about/podcast` | Podcast | Red | Done |
| `/ebook` | eBook Preview | Pink (reuse book) | Done |
| `/ebook` | eBook Unified Responsive Reader | Pink | Done (v4.1.0) |
| `/about/adhd` | ADHD -- Wired Different | Yellow | Done |
| `/about/cycling` | Cycling | Green | Done |
| `/about/aquarius` | Aquarius -- The Aquarian Blueprint | Cyan | Done |
| `/about/music` | Music -- 140 BPM Heartbeat | Purple | Done |
| `/about/lightspeed` | LightSpeed -- The Day Job | Blue | Done |
| `/about/education` | Education -- The Unconventional Classroom | Orange | Done |
| `/about/partners` | Partners -- The People Along the Way | Pink | Done |
| `/about/fitness` | Fitness -- The Moving Body | Green | Done |

---

## Phase 1 — About Sub-Page Creation (P0 Blocker)

> **Depends on:** Nothing (these are the foundation)
> **Unlocks:** Tasks 10-14 (integration), Task 15 (dropdown), Task 21 (content enrichment)

- [x] **Task 1:** `/about/adhd` -- Wired Different `P0`
  - **Neon Accent:** Yellow
  - **Content Source:** `/content/personal/education.md`, `/content/book/this-one-time.md` (Chapter 2: "Wired Different"), `/content/personal/identity.md`, `/content/personal/philosophy.md`
  - **Summary:** A page dedicated to Ash's experience with ADHD -- how he discovered it, how it shaped his life before and after diagnosis, and why the festival/creative environment finally made the wiring make sense. Tone: honest, personal, anti-stigma.
  - **Sections:**
    - [x] Growing Up Undiagnosed
    - [x] The Surplus of Attention (reframing "deficit")
    - [x] ADHD + Creativity: The Hyperfocus Superpower
    - [x] Finding the Right Operating System
    - [x] Resources & Further Reading (external links)

- [x] **Task 2:** `/about/aquarius` -- The Aquarian Blueprint `P0`
  - **Neon Accent:** Cyan
  - **Sections:** The Questioner, Why Conventions Never Stuck, Seeing Patterns Others Miss, The Amplification Effect, The Tribe of Misfits
  - **Unique Elements:** Pull quote with cyan neon glow, traits grid (10 facts), thread cards (4 intersection cards)

- [x] **Task 3:** `/about/cycling` -- Two Wheels & UV Paint `P0`
  - **Neon Accent:** Green
  - **Sections:** Berlin by Bike, The Festival Pilgrimage, Notable Rides, What the Road Teaches You, Kit List

- [x] **Task 4:** `/about/music` -- 140 BPM Heartbeat `P0`
  - **Neon Accent:** Purple
  - **Sections:** First Encounters with Psytrance, The Dancefloor as Classroom, Favourite Artists & Sets, Music + UV Art: The Synesthesia Effect, Curated Playlists

- [x] **Task 5:** `/about/lightspeed` -- The Day Job `P0`
  - **Neon Accent:** Blue
  - **Sections:** The Origin Story (2003), WordPress & the Open Source Community, Block-Based Themes & Design Systems, AI Workflows & Modern Publishing, What the Day Job Teaches the Night Artist

- [x] **Task 6:** `/about/education` -- The Unconventional Classroom `P0`
  - **Neon Accent:** Orange
  - **Sections:** Formal Education, The Self-Taught Developer, Festival as Education, Teaching Others, What He'd Tell His Younger Self
  - **Unique Elements:** Timeline-style formal education cards using step pattern (7 entries)

- [x] **Task 7:** `/about/partners` -- The People Along the Way `P0`
  - **Neon Accent:** Pink
  - **Sections:** The Ones Who Changed Everything, Creative Collaborators, The Festival Family, Gratitude

- [x] **Task 8:** `/about/fitness` -- The Moving Body `P0`
  - **Neon Accent:** Green
  - **Sections:** Movement as Medicine, Festival Endurance, Cycling as Meditation, The Mind-Body-Art Connection, Daily Practices
  - **Unique Elements:** Sports discipline cards (6 entries: cycling, yoga, running, triathlon, swimming, Muay Thai)

---

## Phase 2 — Integration Tasks (P1 High)

> **Depends on:** Phase 1 (Tasks 1-8)
> **Unlocks:** Task 15 (dropdown), Tasks 20-21 (content integration)

- [x] **Task 10:** Add New Sub-Pages to Sitemap `P1`
- [x] **Task 11:** Update SEO Entries `P1`
- [x] **Task 12:** Update Routes `P1`
- [x] **Task 13:** Update Mock Data `P1`
- [x] **Task 14:** Add CSS Accent Modifiers `P1`

---

## Phase 3 — Content Extraction (P1 High, parallel with Phase 2)

> **Depends on:** Existing `/content/` files
> **Unlocks:** Tasks 18-19 (content processing)

- [x] **Task 9:** Generate Interview Questions from Content `P1`
- [x] **Task 9a:** Personal History Questions `P1` (6 questions)
- [x] **Task 9b:** Festival & Music Questions `P1` (8 questions)
- [x] **Task 9c:** Creative Practice Questions `P1` (7 questions)
- [x] **Task 9d:** Berlin & Identity Questions `P1` (6 questions)
- [x] **Task 9e:** Inner Life & Philosophy Questions `P1` (6 questions)
- [x] **Task 9f:** Professional & WordPress Questions `P1` (4 questions)

---

## Phase 4 — Navigation & eBook UX (P2 Medium)

> **Depends on:** Phase 2 (integration complete), content files
> **Unlocks:** Task 20 (eBook content enrichment)

- [x] **Task 15:** Header About Dropdown Integration `P2`
  - **Summary:** Added 4 About sub-pages (ADHD, Cycling, Music, LightSpeed) to the Header's About dropdown mega menu.

- [x] **Task 16:** eBook HTML5 Page Flipper `P2`
  - **Summary:** Converted the eBook Preview page from a static scrollable excerpt list into a full HTML5 page-flipper book reader.
  - **Implementation:**
    - [x] 3D CSS page-turn animation (`rotateY`, `backface-visibility`, `perspective`) -- no Framer Motion
    - [x] 26 book pages across 13 spreads: cover, front matter, TOC, all 6 chapters (12 content pages), afterword, back cover
    - [x] Desktop: full-width two-page spread with click-zone and keyboard navigation (arrow keys)
    - [x] Mobile (<768px): single-page vertical reader with sticky bottom navigation bar
    - [x] Light mode: warm off-white paper (`#FAFAF7`), dark mode: atomic black pages
    - [x] Neon pink cover with neon yellow title text (matches book design spec)
    - [x] Spine visual, inner page shadows, reduced-motion support
  - **Files Created:**
    - [x] `/data/mock/pages/ebook-pages.ts` -- 26 BookPage objects with typed discriminators
    - [x] `/styles/blocks/ebook.css` -- Full BEM stylesheet (~550 lines)
  - **Files Updated:**
    - [x] `/components/pages/about/EbookPage.tsx` -- Complete rewrite (v1.0 -> v2.0)

- [x] **Task 17:** eBook Touch-Swipe & Progress Bar `P2` (depends on Task 16)
  - **Summary:** Added touch-swipe gesture support and a reading progress bar to the eBook page flipper.
  - **Implementation:**
    - [x] Touch-swipe navigation on the desktop book region
    - [x] Reading progress bar (neon pink -> blue gradient)
    - [x] Mobile progress bar (2px thin line) at top of sticky bottom nav
    - [x] Full light/dark mode support for progress bar
    - [x] `prefers-reduced-motion` respected

---

## Phase 5 — Content Processing (P1 High)

> **Depends on:** Phase 3 (Tasks 9a-9f, interview questions generated)
> **Unlocks:** Tasks 20-22 (content integration into components)

- [x] **Task 18:** Process Interview Q&A into Content Files `P1`
  - **Summary:** Integrated raw biographical content from 103 interview questions into 11 existing `/content/` files.

- [x] **Task 19:** Process Social Profile Content into Content Files `P1`
  - **Summary:** Consolidated all social media profile content into the `/content/social-profiles/` directory.

---

## Phase 6 — Content Integration (P2 Medium)

> **Depends on:** Phase 4 (eBook built) + Phase 5 (content processed)
> **Unlocks:** Nothing (final integration step)

- [x] **Task 20:** Integrate Enriched Content into eBook Pages `P2`
  - **Summary:** Updated eBook page content to incorporate biographical details from Tasks 18-19 across all 6 chapters.

- [x] **Task 21:** Integrate Enriched Content into About Sub-Pages `P2`
  - **Summary:** Updated mock data for 6 about sub-pages (Education, Fitness, Partners, LightSpeed, Cycling, Music) to reflect enriched content.

---

## Phase 7 — Final Processing (P3 Low)

> **Depends on:** Phase 5 (Tasks 18-19)
> **Unlocks:** Nothing (final polish)

- [x] **Task 22:** Process Extended Interview & Social Profile Content (Round 2) `P3`
  - **Summary:** Processed a second large batch of raw content. Most material had already been processed in Tasks 18-19; only genuinely new content was merged without creating duplicates.
  - **New content identified and integrated:**
    - [x] Alternative book concept "Dance like no one's watching" with 5-chapter structure
    - [x] Origin reel musical beats (Fatboy Slim, Bob Moses, Depeche Mode)
    - [x] Legacy reflections (makeup reunion story, WordPress community identity)
    - [x] Social media bios (Facebook personal + company, Instagram @feedmymedia, BugHerd webinar intro)
    - [x] Koh Phangan temple wellness detail (herbal steam baths, massage)
    - [x] Confirmed Muay Thai start year consistency across all files (2019)

---

## Phase 8 — eBook Reader Enhancements (P2 Medium)

> **Depends on:** Phase 4 (Tasks 16-17, eBook built) + Phase 6 (Task 20, content enriched)
> **Unlocks:** Nothing (final reader UX polish)

- [x] **Task 23:** eBook 4-Part Expansion & Privacy Redactions `P2`
  - **Summary:** Expanded the eBook from 6 chapters / 26 pages to 18 chapters / 72 pages across a 4-part structure, with privacy redactions applied to all `/content/` files.
  - **Implementation:**
    - [x] 4-part structure: Part 1 (Early Life pre-Y2K), Part 2 (Carefree 20s & Early), Part 3 (Nomadic Life Begins BC), Part 4 (Re-emergence & Finding Myself Again)
    - [x] Two new page types: `part-title` (neon-on-atomic-black full-page dividers) and `epigraph` (centred italic quote pages)
    - [x] Enhanced TOC with part label rows (Roman numerals I-IV with horizontal dividers)
    - [x] Privacy redactions: all specific dates relating to Aix Reynosa and Barbs removed from `/content/personal/partners.md`, `/content/personal/berlin.md`, `/content/personal/festivals.md`, `/data/mock/pages/about-subpages.ts`
  - **Files Updated:**
    - [x] `/data/mock/pages/ebook-pages.ts` -- Expanded from 26 to 69 BookPage objects; added `part-title` and `epigraph` types
    - [x] `/components/pages/about/EbookPage.tsx` -- Added `part-title` and `epigraph` renderers
    - [x] `/styles/blocks/ebook.css` -- Added `.ebook-page--part-title` and `.ebook-page--epigraph` BEM blocks
    - [x] `/content/personal/partners.md` -- Privacy redactions applied
    - [x] `/content/personal/berlin.md` -- Privacy redactions applied
    - [x] `/content/personal/festivals.md` -- Privacy redactions applied
    - [x] `/data/mock/pages/about-subpages.ts` -- Privacy redactions applied

- [x] **Task 24:** eBook Unified Responsive Reader (v4.0.0) `P2` (depends on Task 23)
  - **Summary:** Complete rewrite of the eBook reader from separate desktop/mobile DOM trees to a unified responsive component with a single source of state (`currentPage`).
  - **Implementation:**
    - [x] Single-page swipe mode for mobile + portrait tablet (< 1024px): CSS `translateX` slide transitions, touch gesture detection with angle threshold, prev/next page peek during drag
    - [x] Two-page spread mode for landscape tablet + desktop (>= 1024px): 3D flip animation, spine detail, click-zone navigation (unchanged from v2.0)
    - [x] Live mode switching via `matchMedia` -- rotate a tablet and it transitions seamlessly, position synced
    - [x] 100% fluid typography: every text element uses `clamp()` for seamless scaling from mobile to 4K
    - [x] Unified navigation bar and progress bar (replaces separate mobile/desktop nav)
    - [x] `prefers-reduced-motion` support for all transitions
  - **Files Updated:**
    - [x] `/components/pages/about/EbookPage.tsx` -- Complete rewrite (v2.0 -> v4.0); removed separate mobile DOM, added `useSpreadMode` hook, unified touch handlers
    - [x] `/styles/blocks/ebook.css` -- Complete rewrite; removed all `@media (max-width: 767px)` mobile blocks, added `.ebook-reader__single-wrapper` / `.ebook-reader__single-track` / `.ebook-reader__single-page` swipe system

- [x] **Task 25:** "Dance Like No One's Watching" Appendix `P2` (depends on Task 23)
  - **Summary:** Added the alternative book concept as a proper appendix section between the afterword and about-author, expanding the book from 69 to 72 pages.
  - **Implementation:**
    - [x] New `appendix-title` page type added to `BookPageType` union
    - [x] Appendix title page with neon-on-atomic-black styling (matches part-title design)
    - [x] 2 content pages tracing the costume-to-artist evolution through 5 conceptual chapters (early dancing, cow suit, chicken suit, rave suit, makeup)
    - [x] Updated TOC page 2 with "Appendix -- Dance Like No One's Watching" entry
    - [x] Renderer added for `appendix-title` type in `PageContent` component
  - **Files Updated:**
    - [x] `/data/mock/pages/ebook-pages.ts` -- Added `appendix-title` to `BookPageType`, 3 new pages (appendix title + 2 content), updated TOC, renumbered about-author and back-cover pages
    - [x] `/components/pages/about/EbookPage.tsx` -- Added `appendix-title` case to `PageContent` switch
    - [x] `/styles/blocks/ebook.css` -- Added `.ebook-page--appendix-title` selector (shares part-title styling)

- [x] **Task 26:** Reading Position Persistence & Chapter Jump Drawer `P2` (depends on Task 24)
  - **Summary:** Added localStorage-based reading position persistence and a chapter jump navigation drawer with active position indicator.
  - **Implementation:**
    - [x] localStorage persistence: saves `currentPage` to `ash-ebook-position` key on every navigation, restores on mount with bounds checking, try/catch safety for blocked storage
    - [x] Chapter index builder: scans `bookPages` for navigation landmarks (cover, TOC, foreword, part-titles, chapter-starts, appendix-title, afterword, about-author, back-cover)
    - [x] Drawer UI: bottom sheet on mobile (slides up, 75dvh max), side panel on desktop (slides in from right, 18-24rem width)
    - [x] Active chapter indicator: neon pink dot beside current reading position, computed by closest chapter-start at or before `currentPage`
    - [x] Section headers (parts, front/back matter) styled as uppercase neon pink labels with dividers; chapter entries indented below
    - [x] Backdrop overlay with fade-in animation, closes on tap or Escape key
    - [x] Keyboard navigation suppressed while drawer is open (arrows don't turn pages)
    - [x] Full light/dark mode support with `prefers-reduced-motion` for drawer transition
  - **Files Updated:**
    - [x] `/components/pages/about/EbookPage.tsx` -- Added `List` and `X` icon imports, `readSavedPage`/`savePage` helpers, `buildChapterIndex`, drawer state + toggle button in nav bar, drawer `<aside>` with backdrop
    - [x] `/styles/blocks/ebook.css` -- Added `.ebook-drawer`, `.ebook-drawer__backdrop`, `.ebook-drawer__header`, `.ebook-drawer__title`, `.ebook-drawer__list`, `.ebook-drawer__item` (with `--section`, `--indent`, `--active` modifiers), `@keyframes ebookFadeIn`, desktop `@media` override for side panel, reduced-motion rules

---

## Summary (v5.0.0)

### Progress: 32/32 tasks complete (100%)

| Phase | Tasks | Priority | Status | Progress |
|-------|-------|----------|--------|----------|
| Phase 1 -- Page Creation | 1-8 | P0 | Done | 8/8 |
| Phase 2 -- Integration | 10-14 | P1 | Done | 5/5 |
| Phase 3 -- Content Extraction | 9, 9a-9f | P1 | Done | 7/7 |
| Phase 4 -- Navigation & eBook | 15-17 | P2 | Done | 3/3 |
| Phase 5 -- Content Processing | 18-19 | P1 | Done | 2/2 |
| Phase 6 -- Content Integration | 20-21 | P2 | Done | 2/2 |
| Phase 7 -- Final Processing | 22 | P3 | Done | 1/1 |
| Phase 8 -- eBook Enhancements | 23-26 | P2 | Done | 4/4 |

### Deliverables

- [x] 16 About sub-pages (Berlin, Book, Bio, Process, Lucy, Travels, Podcast, eBook, ADHD, Cycling, Aquarius, Music, LightSpeed, Education, Partners, Fitness)
- [x] Full eBook HTML5 reader with 18 chapters / 72 pages across 4 parts + appendix
- [x] Unified responsive reader: single-page swipe (< 1024px), two-page spread (>= 1024px)
- [x] localStorage reading position persistence + chapter jump navigation drawer
- [x] Header About dropdown surfacing 4 key sub-pages (ADHD, Cycling, Music, LightSpeed)
- [x] All content enriched with interview Q&A material and social profile content
- [x] Privacy redactions applied to all partner/relationship date references
- [x] Shared BEM CSS in `/styles/blocks/about-subpage.css` with per-page neon accent modifiers
- [x] Centralised mock data in `/data/mock/pages/about-subpages.ts`

---
