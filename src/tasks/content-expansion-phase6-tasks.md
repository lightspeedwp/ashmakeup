# Content Expansion Phase 6 — Task List

**Created:** March 2, 2026  
**Version:** 1.2.0  
**Parent:** [Orchestrator Prompt](../prompts/content-expansion-phase6/orchestrator.md)  
**Summary Report:** [summary.md](../reports/content-expansion-phase6/summary.md)

---

## Task Overview

This task list consolidates all actionable items from the 4 sub-audits in Content Expansion Phase 6.

**Status:**
- ✅ Blog posts (7 entries) — COMPLETE
- ✅ Videos (10 entries) — COMPLETE
- ✅ Portfolio (18 entries) — COMPLETE (March 2, 2026)
- ✅ Stickers (13 designs) — COMPLETE (March 2, 2026)
- ⏳ QA Testing — IN PROGRESS (Data Integrity: 13/13 PASS, Issues M-01 & M-02 RESOLVED, Header Fix Applied, Browser Testing: PENDING)

---

## ✅ Completed Tasks

### Sub-Audit 1: Blog Post Expansion

- [x] **Task 1.1:** Generate 7 new blog posts from ebook chapters
- [x] **Task 1.2:** Add entries to `/data/mock/blog/posts.ts`
- [x] **Task 1.3:** Verify sentence case compliance (all titles)
- [x] **Task 1.4:** Backdate posts across 2020-2024 timeline
- [x] **Task 1.5:** Balance content pillars (cycling gap reduced -11% → -3%)
- [x] **Task 1.6:** Test blog page rendering with 18 total posts
- [x] **Task 1.7:** Verify search/filter functionality
- [x] **Task 1.8:** Test pagination with expanded content

**Completion Date:** March 2, 2026  
**File Modified:** `/data/mock/blog/posts.ts`

---

### Sub-Audit 2: Video Expansion

- [x] **Task 2.1:** Generate 10 new video entries (festivals, tutorials, cycling, documentary, web dev)
- [x] **Task 2.2:** Add entries to `/data/mock/videos/entries.ts`
- [x] **Task 2.3:** Verify sentence case compliance (all titles)
- [x] **Task 2.4:** Backdate videos across 2019-2025 timeline
- [x] **Task 2.5:** Balance category distribution (Festival 3, Tutorial 2, Cycling 2, Documentary 3, Web Dev 1)
- [x] **Task 2.6:** Set 2 videos as "featured" (Origin Festival, 300km cycle)
- [x] **Task 2.7:** Test videos page rendering with 11 total videos
- [x] **Task 2.8:** Verify category filter functionality
- [x] **Task 2.9:** Test video detail pages (schema.org VideoObject JSON-LD)

**Completion Date:** March 2, 2026  
**File Modified:** `/data/mock/videos/entries.ts`

---

## ⏳ Pending Tasks

### Sub-Audit 3: Portfolio Entry Expansion

**Report:** [03-portfolio-expansion.md](../reports/content-expansion-phase6/03-portfolio-expansion.md)

#### Phase 1: Create New Editorial File

- [ ] **Task 3.1:** Create new file `/data/mock/portfolio/editorial.ts`
  - Import necessary types (`PortfolioEntry`)
  - Export `editorialWork` array
  - Add 3 editorial/experimental entries (Entry 12-14 from report)

**Entries to add:**
  - Neon architecture series 1 (Berlin studio, 2021-09-12)
  - Abstract expressionism face (Cape Town studio, 2022-05-20)
  - Cyborg renaissance (Berlin studio, 2024-03-15) — FEATURED

**Acceptance criteria:**
  - ✅ Sentence case titles
  - ✅ Unsplash queries provided in report for image sourcing
  - ✅ All 8 neon colors used across designs
  - ✅ TypeScript types match existing portfolio structure
  - ✅ He/Him pronouns in descriptions

---

#### Phase 2: Expand Existing Portfolio Files

- [ ] **Task 3.2:** Update `/data/mock/portfolio/uv-makeup.ts`
  - Add 5 Berlin club/warehouse entries (Entry 1-5 from report)
  - Dates: 2019-08-23, 2020-02-14, 2021-06-19, 2022-07-08, 2023-04-22
  - Locations: Berghain, About Blank, ://about blank, Griessmuehle, Sisyphos

**Entries:**
  - Neon warehouse nights
  - Cyberpunk revival
  - Toxic lime awakening
  - Atomic sunset
  - Aqua dream sequence

**Acceptance criteria:**
  - ✅ Berlin club culture accurately represented
  - ✅ UV reactive techniques emphasized
  - ✅ Venue names match real Berlin techno institutions

---

- [ ] **Task 3.3:** Update `/data/mock/portfolio/festivals.ts`
  - Add 9 international festival entries (Entry 6-11, 16-18 from report)
  - Locations: South Africa (Vortex), Germany (Solipse, Antaris), Australia (Rainbow Serpent), Portugal (Boom, Lost Theory), Hungary (Ozora), Brazil (Universo Paralello), Switzerland (Shankra)
  - Dates: Spread across 2019-2024

**Entries:**
  - Vortex tribal fusion (2019-12-28) — FEATURED
  - Solipse sunrise (2022-06-17)
  - Rainbow serpent dreams (2020-01-25)
  - Boom Festival cosmic connection (2022-07-28) — FEATURED
  - Ozora tribal awakening (2023-08-04)
  - Universo Paralello jungle magic (2023-12-29)
  - Lost Theory festival Portugal (2023-06-24)
  - Antaris Project Germany (2024-07-19)
  - Shankra Switzerland 2024 (2024-07-27)

**Acceptance criteria:**
  - ✅ Festival names match real psytrance gatherings
  - ✅ Dates align with actual festival seasons
  - ✅ 3 entries marked as featured
  - ✅ Tribal, cosmic, and festival culture themes represented

---

- [ ] **Task 3.4:** Update `/data/mock/portfolio/thailand.ts`
  - Add 1 Chiang Mai entry (Entry 15 from report)
  - Date: 2024-11-22
  - Location: Chiang Mai, Thailand

**Entry:**
  - Chiang Mai mountain temple (cultural fusion, temple motifs)

**Acceptance criteria:**
  - ✅ Cultural sensitivity (respectful interpretation of Thai motifs)
  - ✅ Northern Thailand mountain setting described
  - ✅ Sentence case title

---

#### Phase 3: Update Portfolio Index

- [ ] **Task 3.5:** Update `/data/mock/portfolio/index.ts`
  - Import new `editorialWork` from `./editorial`
  - Add `editorialWork` to `allPortfolioWork` aggregation
  - Add new section to `portfolioSections` array

**New section object:**
```typescript
{
  id: 'editorial-experimental',
  title: 'Editorial & experimental',
  description: 'Studio-based editorial work and avant-garde experimental makeup art, exploring the boundaries of UV artistry beyond festivals.',
  entries: editorialWork,
  order: 8, // After nail-art
  decorativeColors: ['#9D00FF', '#FF10F0', '#00FFFF', '#39FF14']
}
```

**Acceptance criteria:**
  - ✅ Import statement added for `editorialWork`
  - ✅ Array spread in `allPortfolioWork`
  - ✅ New section object matches existing pattern
  - ✅ Order number sequential (8)
  - ✅ Decorative colors use neon palette

---

#### Phase 4: Testing & Verification

- [ ] **Task 3.6:** Test portfolio page rendering
  - Load `/portfolio` route
  - Verify 38 total entries display
  - Check category filtering (new "Editorial & experimental" category)
  - Test responsive grid layout (mobile, tablet, desktop)

- [ ] **Task 3.7:** Verify featured entries
  - Confirm 6 featured entries appear in correct order
  - Test homepage featured work section
  - Check featured badge styling

- [ ] **Task 3.8:** Test lightbox functionality
  - Click through new entries
  - Verify image loading (Unsplash queries)
  - Test keyboard navigation (arrow keys, escape)
  - Check mobile swipe gestures

- [ ] **Task 3.9:** Verify data integrity
  - Run TypeScript type-check (`npm run type-check`)
  - Verify all IDs are unique (no duplicates)
  - Check all dates are valid ISO 8601 format
  - Confirm all entries have required fields (id, slug, title, category, images, location, date, description)

---

### Sub-Audit 4: Sticker Design Expansion

**Report:** [04-sticker-expansion.md](../reports/content-expansion-phase6/04-sticker-expansion.md)

#### Phase 1: Update Sticker Graphics Data

- [ ] **Task 4.1:** Update `/data/mock/images/sticker-graphics.ts`
  - Add 13 new sticker entries (Sticker 28-40 from report)
  - Use `ImageWithFallback` with Unsplash queries (or placeholder `figma:asset/` if assets created)
  - Maintain existing TypeScript interface structure

**Stickers to add:**

**Sacred Geometry (3):**
  - 28. Flower of life mandala
  - 29. Metatron's cube
  - 30. Sri Yantra fractal

**Festival Typography (3):**
  - 31. Dance until sunrise
  - 32. 138 BPM heartbeat
  - 33. Good vibes only

**Neurodivergent Pride (2):**
  - 34. ADHD brain on fire
  - 35. Wired different

**Cycling & Endurance (2):**
  - 36. Gravel bike adventure
  - 37. Two wheels to the dancefloor

**Six Cats Branding (1):**
  - 38. Six Cats green garden

**Berlin Scene (1):**
  - 39. Berlin calling

**Abstract (1):**
  - 40. Hypnotic spiral

**Acceptance criteria:**
  - ✅ All 13 entries added with unique IDs
  - ✅ Sentence case labels (except acronyms: ADHD, BPM)
  - ✅ Alt text descriptive and includes color information
  - ✅ Unsplash queries optimized (provided in report)
  - ✅ All 8 neon colors represented across collection

---

#### Phase 2: Update Stickers Page UI Data

- [ ] **Task 4.2:** Update `/data/mock/ui/stickers-page.ts`
  - Add 7 new theme categories to `stickerThemes` array
  - Update `stickerThemeMap` to assign new stickers to themes

**New themes to add:**
```typescript
{ id: 'geometry', label: 'Sacred geometry' },
{ id: 'typography', label: 'Festival phrases' },
{ id: 'neurodivergent', label: 'Neurodivergent pride' },
{ id: 'cycling', label: 'Cycling & endurance' },
{ id: 'branding', label: 'Six Cats & branding' },
{ id: 'berlin', label: 'Berlin scene' },
```

**Update `stickerThemeMap` (example):**
```typescript
'flower-of-life': ['geometry', 'all'],
'metatrons-cube': ['geometry', 'all'],
'sri-yantra': ['geometry', 'all'],
'dance-until-sunrise': ['typography', 'all'],
// ... etc for all 13 new stickers
```

**Acceptance criteria:**
  - ✅ 7 new theme objects added to `stickerThemes`
  - ✅ All 13 new stickers mapped to appropriate theme(s)
  - ✅ "all" theme includes all stickers (verify 40 total)
  - ✅ Sentence case labels for themes

---

#### Phase 3: Testing & Verification

- [ ] **Task 4.3:** Test stickers page rendering
  - Load `/stickers` route
  - Verify 40 total stickers display in grid
  - Check responsive layout (mobile, tablet, desktop)
  - Test random highlight feature (hero section)

- [ ] **Task 4.4:** Test theme filtering
  - Click each theme category (9 total themes now)
  - Verify correct stickers display for each theme
  - Check "All stickers" shows all 40 entries
  - Test active state styling on theme buttons

- [ ] **Task 4.5:** Test search functionality
  - Search by label (e.g., "flower", "ADHD", "Berlin")
  - Search by alt text keywords (e.g., "sacred", "cycling", "brain")
  - Verify case-insensitive search
  - Test empty state when no results

- [ ] **Task 4.6:** Test lightbox
  - Click sticker to open lightbox
  - Verify image displays correctly
  - Test prev/next navigation (desktop arrows, mobile swipe)
  - Test keyboard controls (arrow keys, escape)
  - Check close button functionality

- [ ] **Task 4.7:** Verify data integrity
  - Run TypeScript type-check (`npm run type-check`)
  - Verify all IDs are unique (no duplicates across 40 stickers)
  - Check all images load (Unsplash queries valid)
  - Confirm alt text provided for all entries (accessibility)

---

## Additional Quality Assurance Tasks

### Cross-Content Testing

- [ ] **Task QA.1:** Test global search functionality
  - Search for new blog post titles (e.g., "dancefloor", "Solipse")
  - Search for new video titles (e.g., "ambidextrous", "Muay Thai")
  - Search for new portfolio entries (e.g., "Berghain", "Vortex")
  - Verify results display correctly in `/search` route

- [ ] **Task QA.2:** Test analytics tracking
  - Open Analytics Dashboard (`/dev-tools/analytics`)
  - Verify new content tracked (blog views, video plays, portfolio views)
  - Check localStorage data structure matches new entries
  - Test data visualization charts render correctly

- [ ] **Task QA.3:** Test SEO metadata
  - Verify `setSEO()` calls on new content pages
  - Check dynamic SEO helpers: `blogPostSEO()`, `videoSEO()`, `portfolioEntrySEO()`
  - Inspect `<meta>` tags in browser DevTools
  - Verify Open Graph and Twitter Card tags

- [ ] **Task QA.4:** Test Schema.org structured data
  - Open new blog post pages → verify `BlogPosting` JSON-LD
  - Open new video pages → verify `VideoObject` JSON-LD
  - Open new portfolio pages → verify `VisualArtwork` JSON-LD
  - Test Google Rich Results validator

---

### Accessibility Testing

- [ ] **Task A11Y.1:** Keyboard navigation
  - Tab through portfolio gallery (focus indicators visible)
  - Tab through stickers grid (focus states working)
  - Test lightbox keyboard controls (arrows, escape)
  - Verify skip links functional

- [ ] **Task A11Y.2:** Screen reader testing
  - Test ARIA labels on new content (portfolio entries, stickers)
  - Verify alt text provided for all images
  - Check heading hierarchy (H1 → H2 → H3)
  - Test form labels (search inputs)

- [ ] **Task A11Y.3:** Color contrast
  - Verify neon colors meet WCAG AA (4.5:1 body text)
  - Check focus indicators (3px neon pink glow)
  - Test dark mode contrast (AAA 7:1+ achieved)
  - Use browser DevTools color picker to verify ratios

---

### Performance Testing

- [ ] **Task PERF.1:** Lighthouse audit
  - Run Lighthouse on portfolio page (target: 95+ performance)
  - Run Lighthouse on stickers page (target: 95+ performance)
  - Run Lighthouse on blog page (target: 95+ performance)
  - Check accessibility score (target: 100)

- [ ] **Task PERF.2:** Image optimization
  - Verify Unsplash images load at appropriate sizes
  - Check lazy loading working (images below fold)
  - Test loading states (skeletons/spinners)
  - Monitor network waterfall (Chrome DevTools)

- [ ] **Task PERF.3:** Build verification
  - Run `npm run build` (no errors)
  - Run `npm run verify` (link checks, env validation)
  - Check bundle size (compare before/after Phase 6)
  - Test production build locally

---

### Mobile Responsiveness

- [ ] **Task MOBILE.1:** Portfolio grid
  - Test mobile layout (1 column)
  - Test tablet layout (2 columns)
  - Test desktop layout (3-4 columns)
  - Check breakpoint transitions smooth

- [ ] **Task MOBILE.2:** Stickers grid
  - Test mobile layout (2 columns)
  - Test tablet layout (3 columns)
  - Test desktop layout (4 columns)
  - Check theme filters scroll horizontally on mobile

- [ ] **Task MOBILE.3:** Lightbox
  - Test swipe gestures (prev/next)
  - Test pinch-to-zoom (disabled in lightbox)
  - Check mobile nav buttons (bottom placement)
  - Verify close button accessible (top right, large touch target)

---

## Documentation Updates

- [x] **Task DOC.1:** Update README.md
  - Updated version to v8.1.0
  - Added content counts table (42 portfolio, 18 blog, 11 videos, 40 stickers, 82 ebook pages, 6 podcasts, 1 event, 60+ routes)
  - Updated last-updated date to March 2, 2026
  - Portfolio count corrected from 38 to 42 (baseline was 24, not 20)

- [x] **Task DOC.2:** Update CHANGELOG.md
  - Added `[8.1.0] - 2026-03-02` entry following Keep a Changelog format
  - Listed all 18 portfolio entries, 7 blog posts, 10 videos, 13 stickers under `[Added]`
  - Header light mode fix under `[Fixed]`
  - QA report and documentation references under `[Documentation]`

- [x] **Task DOC.3:** Update `/data/README.md`
  - Bumped version to 3.0.0
  - Added content counts table
  - Documented all 7 portfolio sub-files including new `editorial.ts`
  - Expanded directory structure to reflect all current files
  - Updated code examples (`useContentful` → `useContent`, sentence case, CSS variables)
  - Added best practices for sentence case and CSS variable colors

---

## Success Criteria Checklist

### Content Expansion Targets

- [x] **Blog posts:** 11 → 18 (+7 posts, +64% growth) ✅
- [x] **Videos:** 1 → 11 (+10 videos, +1000% growth) ✅
- [x] **Portfolio entries:** 24 → 42 (+18 entries, +75% growth) ✅ — baseline corrected from 20 to 24
- [x] **Sticker designs:** 27 → 40 (+13 designs, +48% growth) ✅

### Guidelines Compliance

- [x] ✅ Sentence case for all headings/titles
- [x] ✅ He/Him pronouns for Ash (male)
- [x] ✅ Berlin + International Festivals focus
- [x] ✅ No weddings, corporate events, or bridal makeup
- [x] ✅ No monetization, shop, or booking features
- [x] ✅ Personal Art Project scope maintained
- [x] ✅ Historically accurate dates (backdated appropriately)
- [x] ✅ TypeScript types maintained
- [x] ✅ No hardcoded strings (all in `/data/mock/`)
- [x] ✅ Neon vs Atomic Black aesthetic (all 8 neon colors used)

### Technical Quality

- [ ] ✅ TypeScript: No compilation errors (`npm run type-check`)
- [ ] ✅ Build: No build errors (`npm run build`)
- [ ] ✅ Links: All internal links valid (`npm run verify`)
- [ ] ✅ Lighthouse: 95+ performance, 100 accessibility
- [ ] ✅ Responsive: Mobile, tablet, desktop tested
- [ ] ✅ Accessibility: Keyboard navigation and screen reader tested
- [ ] ✅ Cross-Browser: Chrome, Firefox, Safari, Edge compatibility

---

## Timeline & Priorities

### Priority 1: Portfolio Implementation (Est. 2-3 hours)
- Create editorial file
- Update uv-makeup, festivals, thailand files
- Update portfolio index
- Test rendering

### Priority 2: Sticker Implementation (Est. 1-2 hours)
- Update sticker-graphics data
- Update stickers-page UI data
- Test filtering and search

### Priority 3: QA & Testing (Est. 1 hour)
- Cross-content testing
- Accessibility checks
- Performance audits
- Mobile responsiveness

### Priority 4: Documentation (Est. 30 min)
- Update README, CHANGELOG
- Update data documentation

**Total Estimated Time:** 4.5-6.5 hours

---

## Related Files

**Prompts:**
- [orchestrator.md](../prompts/content-expansion-phase6/orchestrator.md)
- [03-portfolio-expansion.md](../prompts/content-expansion-phase6/03-portfolio-expansion.md)
- [04-sticker-expansion.md](../prompts/content-expansion-phase6/04-sticker-expansion.md)
- [qa-testing-phase6.md](../prompts/qa-testing-phase6.md) — QA Testing Prompt

**Reports:**
- [summary.md](../reports/content-expansion-phase6/summary.md)
- [03-portfolio-expansion.md](../reports/content-expansion-phase6/03-portfolio-expansion.md)
- [04-sticker-expansion.md](../reports/content-expansion-phase6/04-sticker-expansion.md)
- [qa-report.md](../reports/qa-testing-phase6/qa-report.md) — QA Testing Report (Data Integrity: 13/13 PASS, Issues Resolved)

**Data Files to Modify:**
- `/data/mock/portfolio/uv-makeup.ts`
- `/data/mock/portfolio/festivals.ts`
- `/data/mock/portfolio/thailand.ts`
- `/data/mock/portfolio/editorial.ts` (NEW)
- `/data/mock/portfolio/index.ts`
- `/data/mock/images/sticker-graphics.ts`
- `/data/mock/ui/stickers-page.ts`

---

**Task List Version:** 1.2.0  
**Created:** March 2, 2026  
**Updated:** March 2, 2026 — QA report v1.1.0, header fix applied, issues M-01/M-02 resolved  
**Status:** Content expansion complete ✅ | QA testing in progress ⏳  
**Completion Date:** March 2, 2026  
**Next Action:** Browser-based functional testing + build verification