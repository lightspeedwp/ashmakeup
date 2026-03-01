# Content Expansion & Redesign — Task List

**Version:** 1.0.0  
**Created:** March 1, 2026  
**Source:** `/reports/content-expansion/audit-report.md`  
**Priority Legend:** P0 = Critical, P1 = High, P2 = Medium, P3 = Low  
**Effort Legend:** S = Small (1-2 hours), M = Medium (3-6 hours), L = Large (1-2 days), XL = Extra Large (3+ days)

---

## 📖 Phase 1: Ebook Content Expansion (P0)

### Task 1.1: Expand Chapter 10 — Six Cats: The Green Garden
**Priority:** P0  
**Effort:** L  
**Source:** `/content/personal/six-cats.md`

- [ ] Expand Chapter 10 from 2 pages → 8-10 pages
- [ ] Add cat bios section:
  - [ ] Timmy (Resident Therapy Cat)
  - [ ] Wendy (The Agile Matriarch)
  - [ ] Jimmy (FIV Fighter)
  - [ ] Bean (The Survivor)
  - [ ] Jeff (The Wanderer)
  - [ ] Frank (Blue Eyes)
- [ ] Add "In Memoriam" section:
  - [ ] Lisa (Granny Cat) — passed July 2020
  - [ ] Moe (Fat-Boy-Fat) — passed Jan 2022
  - [ ] Lucy (Dennis the Menace) — passed Oct 2023
- [ ] Add Six Cats values section (8 values):
  - [ ] Authenticity, Consciousness, Consistency, Experience
  - [ ] Meticulousness, Sustainability, Passion, Quality
- [ ] Add cultivation methods section:
  - [ ] Living soil (Bokashi bins, worm farm)
  - [ ] Rainwater harvesting (13,500 litres)
  - [ ] Companion planting (basil with cannabis)
  - [ ] Worm tea (aerobic compost tea)
- [ ] Add harvest phases section:
  - [ ] Flushing (10 days before harvest)
  - [ ] Drying (16-18°C, 55-60% humidity)
  - [ ] Dry trimming
  - [ ] Curing (2 months in glass jars)
- [ ] Add grading system:
  - [ ] Quads (AAAA) → Budget Blend (A)
- [ ] Add "Ash's Green Fingers" closing section
- [ ] Update page numbering (spread from page 20 → page 28)
- [ ] Test ebook reader with new page count

**Files Modified:**
- `/data/mock/pages/ebook-pages.ts`

---

### Task 1.2: Expand Chapter 19 — Twenty-Three Years
**Priority:** P0  
**Effort:** L  
**Source:** `/content/lightspeed/company-history.md`

- [ ] Expand Chapter 19 from 2 pages → 6-8 pages
- [ ] Add timeline highlights section:
  - [ ] 2003: Founded (age 22, IT support)
  - [ ] 2005: First employee hired
  - [ ] 2006: BarCamp Cape Town (WordPress pivot)
  - [ ] 2006: Warwick Booth joins
  - [ ] 2009: Chris Vancoillie joins
  - [ ] 2010: Barbara Kerr joins as partner
  - [ ] 2017-2019: José Abreu first period
  - [ ] 2020: Justin Abrahamse rejoins
  - [ ] 2021: Lourens Visser joins
  - [ ] 2023: Tibi Buzdugan, Zared Rogers join
  - [ ] 2025: 3 interns + José rejoins
- [ ] Add BarCamp Cape Town 2006 story (pivotal moment)
  - [ ] Dave Duarte introduced him to WordPress
  - [ ] List 29 people who impacted Ash's career at BarCamp
- [ ] Add team member spotlight stories:
  - [ ] Warwick Booth (joined Dec 2006, Lead Developer)
  - [ ] Barbara Kerr (partner, COO/CFO/HR)
  - [ ] José Abreu (rejoined Sept 2025 story)
- [ ] Add products & open source section:
  - [ ] LSX Design System (Figma)
  - [ ] Tour Operator plugin suite
  - [ ] WooCommerce Style Book
- [ ] Add AI & modern workflow section:
  - [ ] GitHub Copilot, ChatGPT, Claude, MCP
  - [ ] Mentoring the team into AI
- [ ] Add "What 23 Years Teaches You" (5 lessons):
  - [ ] Freedom requires structure
  - [ ] The right people change everything
  - [ ] ADHD is an engine, not a handicap
  - [ ] The business feeds the art, the art feeds the business
  - [ ] Autonomy is non-negotiable
- [ ] Update page numbering
- [ ] Test ebook reader

**Files Modified:**
- `/data/mock/pages/ebook-pages.ts`

---

### Task 1.3: Write Appendix B — The Tribes
**Priority:** P0  
**Effort:** L

- [ ] Research and map Ash's 6 communities:
  - [ ] Psytrance tribe (25+ years, global festivals)
  - [ ] WordPress community (since 2006, 20+ WordCamps)
  - [ ] Berlin cycling/techno scene (since 2019)
  - [ ] Cape Town creative community (Six Cats, LightSpeed)
  - [ ] Koh Phangan Muay Thai crew (2023, 2025 training seasons)
  - [ ] LightSpeed team as tribe (13 people, extended family)
- [ ] Write opening paragraph: "A map of belonging across six continents"
- [ ] Write section for each tribe (1 page each):
  - [ ] Geographic spread
  - [ ] Core values of that community
  - [ ] Key people/relationships
  - [ ] How Ash found them
  - [ ] What they taught him
- [ ] Write closing section: "The overlap is the identity"
- [ ] Expand from 2 placeholder pages → 7 pages
- [ ] Update page numbering
- [ ] Update TOC
- [ ] Test ebook reader

**Files Modified:**
- `/data/mock/pages/ebook-pages.ts`

---

### Task 1.4: Update Ebook Page Numbering & TOC
**Priority:** P0  
**Effort:** M

- [ ] Recalculate page numbers after expansions
- [ ] Update TOC page with new page ranges
- [ ] Verify page number display in ebook reader navigation
- [ ] Test "Pages X–Y" display in spread mode
- [ ] Test "Page X" display in single-page mode
- [ ] Ensure last page number matches total (e.g., "Page 126 of 126")

**Files Modified:**
- `/data/mock/pages/ebook-pages.ts`
- `/components/pages/about/EbookPage.tsx` (if page label logic needs adjustment)

---

### Task 1.5: Final Ebook Testing (Phase 1)
**Priority:** P0  
**Effort:** S

- [ ] Test ebook with ~126 pages (85 → 126 = +41 pages)
- [ ] Verify smooth page transitions in single-page mode
- [ ] Verify smooth page curl animations in spread mode
- [ ] Test chapter jump drawer with expanded chapters
- [ ] Test settings modal with new page count
- [ ] Test keyboard navigation (arrows, Home, End)
- [ ] Test touch swipe on mobile
- [ ] Verify progress bar accuracy
- [ ] Check for any performance issues with larger page count

**Files Tested:**
- `/components/pages/about/EbookPage.tsx`
- `/data/mock/pages/ebook-pages.ts`

---

## 🎨 Phase 2: Content Design Tokens (P1)
- [x] Content layout tokens created
- [x] Content interactive tokens created
- [x] Content typography tokens created
- [x] Content color tokens created
- [x] Content animation tokens created
- [x] All tokens imported in globals.css

---

## 🧩 Phase 3: Core Content Components (P1)
- [x] Timeline component built
- [x] PullQuote component built
- [x] SplitContent component built
- [x] Accordion component built
- [x] ContentSection component built
- [x] ChapterNav component built
- [ ] All components documented

---

## 🌐 Phase 4: About Landing Page Redesign (P1)

### Task 4.1: Create About Landing Data File
**Priority:** P1  
**Effort:** S  
**Status:** ✅ COMPLETE

- [x] Create `/data/mock/pages/about-landing.ts`
- [x] Extract all hardcoded content from `AboutPage.tsx`
- [x] Structure data based on new design sections
- [x] Source content from `/content/personal/identity.md`
- [x] Add TypeScript interface for page data
- [x] Export data as named export

---

### Task 4.2: Redesign About Landing Hero Section
**Priority:** P1  
**Effort:** M  
**Status:** ✅ COMPLETE

- [x] Import data from `/data/mock/pages/about-landing.ts`
- [x] Replace hardcoded content with data imports
- [x] Redesign hero with scroll arrow targeting new sections
- [x] Add entrance animations (`.entrance-fade-up`)
- [x] Update SEO meta tags (`pageSEO.about`)

---

### Task 4.3: Add "The Aquarian Blueprint" Section
**Priority:** P1  
**Effort:** S  
**Status:** ✅ COMPLETE

- [x] Add `<ContentSection variant="callout" colorAccent="blue">`
- [x] Add PullQuote with Aquarian identity quote
- [x] Add `.color-philosophy` accent (royal blue)
- [x] Add entrance animation

---

### Task 4.4: Add "ADHD — Wired Different" Section
**Priority:** P1  
**Effort:** M  
**Status:** ✅ COMPLETE

- [x] Add `<SplitContent imageSide="left">` with Unsplash UV art image
- [x] Add ADHD art points and business points lists
- [x] Add `.color-tech` accent (electric green)
- [x] Add entrance animation

---

### Task 4.5: Add "The Costume Evolution" Timeline
**Priority:** P1  
**Effort:** M  
**Status:** ✅ COMPLETE

- [x] Add `<Timeline variant="vertical" colorAccent="pink">` with 5 events
- [x] Source timeline data from about-landing.ts
- [x] Add `.color-story` accent (hot pink)

---

### Task 4.6: Add "The Bullied Kid" Pull Quote
**Priority:** P1  
**Effort:** S  
**Status:** ✅ COMPLETE

- [x] Add `<PullQuote variant="center" neonColor="pink">`
- [x] Add context paragraphs before quote
- [x] Add entrance animation

---

### Task 4.7: Add Chapter Navigation
**Priority:** P1  
**Effort:** S  
**Status:** ✅ COMPLETE

- [x] Add `<ChapterNav>` with 4 chapters
- [x] Desktop sticky sidebar + mobile horizontal scroll
- [x] Scroll spy for active chapter highlighting
- [x] Smooth scroll with prefers-reduced-motion support

---

### Task 4.8: About Landing Page Testing & Accessibility
**Priority:** P1  
**Effort:** M

- [ ] Test full page in light/dark mode
- [ ] Test responsive behavior (mobile → tablet → desktop)
- [ ] Test all interactive elements (scroll, hover, click)
- [ ] Test entrance animations (staggered delays)
- [ ] Test `prefers-reduced-motion` mode (animations disabled)
- [ ] Keyboard navigation audit:
  - [ ] Tab through all interactive elements
  - [ ] Test ChapterNav keyboard controls
  - [ ] Verify focus indicators visible
- [ ] Screen reader audit:
  - [ ] Test page with NVDA/VoiceOver
  - [ ] Verify all images have alt text
  - [ ] Verify ARIA labels present
- [ ] Lighthouse audit:
  - [ ] Performance: 95+
  - [ ] Accessibility: 100
  - [ ] SEO: 100

**Files Tested:**
- `/components/pages/about/AboutPage.tsx`

---

## 🎨 Phase 5: About Sub-Pages Polish (P2)
- [x] ManifestoPage redesigned (removed inline styles, template literals, Tailwind; added PullQuote + ContentSection)
- [x] AquariusPage upgraded (PullQuote + ContentSection components, entrance animations)
- [x] AdhdPage upgraded (PullQuote + ContentSection components, entrance animations)
- [x] LightSpeedPage upgraded (PullQuote + Timeline + Accordion + ContentSection)
- [x] Manifesto SEO entry added to pageSEO
- [ ] Remaining sub-pages (Berlin, Process, Travels, etc.) polish pass
- [ ] All sub-pages accessibility audit

---

## 📖 Phase 6: Additional Ebook Expansions (P2)

### Task 6.1: Expand Chapter 2 — Wired Different
**Priority:** P2  
**Effort:** M  
**Source:** `/content/personal/identity.md`

- [ ] Expand Chapter 2 from 2 pages → 4 pages
- [ ] Add "The Aquarian Blueprint" section
- [ ] Add deep dive into ADHD:
  - [ ] Not a deficit, a surplus of attention
  - [ ] How ADHD shows up in art (hyperfocus, ambidextrous painting, spontaneous design)
  - [ ] How ADHD shows up in business (process obsession, radical delegation)
  - [ ] School/offices felt like incompatible software
  - [ ] Twenty years to understand it's a feature, not a bug
- [ ] Update page numbering
- [ ] Test ebook reader

**Files Modified:**
- `/data/mock/pages/ebook-pages.ts`

---

### Task 6.2: Expand Chapter 6 — The Costume Evolution
**Priority:** P2  
**Effort:** M  
**Source:** `/content/personal/identity.md`

- [ ] Expand Chapter 6 from 1 page → 3 pages
- [ ] Add full costume timeline with details:
  - [ ] The Yellow Suit (found at charity shop, Vortex 1999, "Chicken Man")
  - [ ] The Red Suit (escalation)
  - [ ] White & Black Cow Suit (pivot to character)
  - [ ] Brown & Beige Cow Suit ("Cow Man" era — people still ask about this)
  - [ ] UV Paint (July 2019 — the final evolution)
- [ ] Add narrative: "The costume became the art became the identity"
- [ ] Add reflection: "No longer wearing something outrageous — now MAKING other people outrageous"
- [ ] Update page numbering
- [ ] Test ebook reader

**Files Modified:**
- `/data/mock/pages/ebook-pages.ts`

---

### Task 6.3: Expand Chapter 8 — LSD (LightSpeedDevelopment)
**Priority:** P2  
**Effort:** M  
**Source:** `/content/lightspeed/company-history.md`

- [ ] Expand Chapter 8 from 2 pages → 4 pages
- [ ] Add founding motivation:
  - [ ] "I've always been entrepreneurial, but I really didn't like working for an employer..."
  - [ ] "You never know if you're ready to start a business, but I knew I didn't want to work at City Varsity for another year"
  - [ ] Born from fundamental need for autonomy
- [ ] Add first employee story (2005)
- [ ] Add BarCamp Cape Town 2006 pivot moment:
  - [ ] Dave Duarte introduced him to WordPress
  - [ ] Single networking event redirected LightSpeed from IT support to WordPress
- [ ] Add intentional acronym (LSD) — double meaning
- [ ] Update page numbering
- [ ] Test ebook reader

**Files Modified:**
- `/data/mock/pages/ebook-pages.ts`

---

### Task 6.4: Add "The Bullied Kid" Section
**Priority:** P2  
**Effort:** S  
**Source:** `/content/personal/identity.md`

- [ ] Decide placement:
  - [ ] Option A: Add to Chapter 2 (Wired Different) as formative experience
  - [ ] Option B: Add to Chapter 16 (Dance Like No One's Watching) as connection to makeup artistry
- [ ] Write section:
  - [ ] Bullied as a kid for being small
  - [ ] Matric kids made him stand on stage and apologize to entire school
  - [ ] Formative pain directly connected to makeup artistry
  - [ ] Kid who was made to feel small now makes others feel radiant
  - [ ] Kid who was publicly humiliated now creates moments of public celebration
- [ ] Update page numbering
- [ ] Test ebook reader

**Files Modified:**
- `/data/mock/pages/ebook-pages.ts`

---

### Task 6.5: Ebook Content Polish Pass
**Priority:** P2  
**Effort:** L

- [ ] Read through all 20 chapters for consistency
- [ ] Check tone and voice (raw, honest, conversational)
- [ ] Verify all content flows logically
- [ ] Check for repetition across chapters
- [ ] Ensure chapter endings lead naturally to next chapter
- [ ] Polish language (remove filler, tighten sentences)
- [ ] Verify chapter titles match content
- [ ] Final page count estimate: ~135 pages

**Files Modified:**
- `/data/mock/pages/ebook-pages.ts`

---

### Task 6.6: Final Ebook Testing (Phase 6)
**Priority:** P2  
**Effort:** M

- [ ] Test ebook with final page count (~135 pages)
- [ ] Verify all chapters render correctly
- [ ] Test navigation (chapter drawer, keyboard, touch swipe)
- [ ] Test settings modal (font size, minimal mode)
- [ ] Test fullscreen mode
- [ ] Test page numbering accuracy
- [ ] Test TOC page with final chapters
- [ ] Performance test (page load, transitions)
- [ ] Cross-browser test (Chrome, Firefox, Safari, Edge)
- [ ] Mobile test (iOS, Android)

**Files Tested:**
- `/components/pages/about/EbookPage.tsx`
- `/data/mock/pages/ebook-pages.ts`

---

## ✅ Completion Checklist

### Phase 1: Ebook Content Expansion (P0)
- [ ] Chapter 10 expanded (Six Cats)
- [ ] Chapter 19 expanded (Twenty-Three Years)
- [ ] Appendix B written (The Tribes)
- [ ] Page numbering updated
- [ ] Ebook tested with ~126 pages

### Phase 2: Content Design Tokens (P1)
- [x] Content layout tokens created
- [x] Content interactive tokens created
- [x] Content typography tokens created
- [x] Content color tokens created
- [x] Content animation tokens created
- [x] All tokens imported in globals.css

### Phase 3: Core Content Components (P1)
- [x] Timeline component built
- [x] PullQuote component built
- [x] SplitContent component built
- [x] Accordion component built
- [x] ContentSection component built
- [x] ChapterNav component built
- [ ] All components documented

### Phase 4: About Landing Page Redesign (P1)
- [x] About landing data file created
- [x] Hero section redesigned
- [x] Aquarian Blueprint section added
- [x] ADHD section added
- [x] Costume Evolution timeline added
- [x] Bullied Kid pull quote added
- [x] Chapter navigation added
- [x] SEO meta updated
- [ ] Accessibility audit passed

### Phase 5: About Sub-Pages Polish (P2)
- [x] ManifestoPage redesigned (removed inline styles, template literals, Tailwind; added PullQuote + ContentSection)
- [x] AquariusPage upgraded (PullQuote + ContentSection components, entrance animations)
- [x] AdhdPage upgraded (PullQuote + ContentSection components, entrance animations)
- [x] LightSpeedPage upgraded (PullQuote + Timeline + Accordion + ContentSection)
- [x] Manifesto SEO entry added to pageSEO
- [ ] Remaining sub-pages (Berlin, Process, Travels, etc.) polish pass
- [ ] All sub-pages accessibility audit

### Phase 6: Additional Ebook Expansions (P2)
- [ ] Chapter 2 expanded (Wired Different)
- [ ] Chapter 6 expanded (Costume Evolution)
- [ ] Chapter 8 expanded (LSD)
- [ ] Bullied Kid section added
- [ ] Ebook content polish pass complete
- [ ] Final ebook testing complete (~135 pages)

---

**Task List Complete**  
**Total Tasks:** 65+ individual tasks  
**Estimated Timeline:** 6 weeks (with dedicated effort)  
**Next Action:** Phase 5 — About sub-pages polish, then Phases 1/6 — ebook content expansion