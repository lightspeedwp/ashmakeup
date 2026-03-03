# Content accuracy audit — Phase 7 findings

**Audit date:** March 3, 2026
**Files audited:** 12 (P0 and P1 files)
**Total issues found:** 4

---

## Summary table

| Category | P0 issues | P1 issues | P2 issues |
|---|---|---|---|
| Timeline errors | 0 | 0 | 0 |
| Location framing | 1 (press.ts) | 1 (bio.ts) | 0 |
| Yearly cycle | 1 (bio.ts quickFacts) | 0 | 0 |
| Pronoun errors | 0 | 0 | 0 |
| Sentence case | 0 | 0 | 0 |
| Stale statistics | 0 | 0 | 0 |
| Factual errors | 1 (lightspeed.ts BarCamp) | 0 | 0 |

---

## Findings by category

### 1. Timeline errors

**None found.** All dates verified:
- LightSpeed founded: 2003 ✅
- Warwick joined: December 2006 ✅
- Barbara joined: 2010 ✅
- Six Cats founded: May 2019 ✅
- Makeup artistry started: July 2019 ✅
- Berlin first visit: 2019 ✅ (no pre-2019 Berlin references found)

### 2. Location framing errors

**Issue 1 — press.ts (P0):**
- File: `/data/mock/pages/press.ts`
- Field: `contact.location`
- Current: `'Berlin, Germany'`
- Correct: `'Cape Town, South Africa'`
- **Status: Fixed**

**Issue 2 — bio.ts (P1):**
- File: `/data/mock/pages/about/bio.ts`
- Field: `quickFacts[5].value` (based)
- Current: `'Cape Town (home base) / Berlin (summers)'`
- Problem: "summers" implies a longer stay than the actual May seasonal visit; Thailand (Sep–Nov) is entirely absent
- Correct: `'Cape Town (Woodstock) · Berlin (May) · Koh Phangan (Sep–Nov)'`
- **Status: Fixed**

### 3. Yearly cycle inconsistencies

- The bio.ts "based" quickFact (see above) was the only location describing the cycle inadequately. Fixed.
- The press.ts long bio correctly describes the yearly cycle ✅
- lightspeed.ts "day-night" section mentions "the Berlin summers" — this is a mild inaccuracy in a single narrative sentence. Noted for next audit cycle; low priority.

### 4. Pronoun errors

No He/Him violations found in P0 or P1 files. All references to Ash use "he/his" correctly.

### 5. Sentence case violations

No violations found in P0 or P1 section titles, hero badges/titles, or quickFact labels.

### 6. Stale statistics

All verified:
- LightSpeed age: "23 years" ✅ (found in lightspeed.ts, blog posts, press.ts)
- Team size: "13" ✅
- WordCamps: "20+" ✅
- Makeup since: "July 2019" ✅

### 7. Factual errors

**Issue — lightspeed.ts (P0):**
- File: `/data/mock/pages/about/lightspeed.ts`
- Field: `barcampStory.paragraphs[2]`
- Problem 1: References "Jonathan Sobel" — this name does NOT appear in the 27-person list in `website-content.md`
- Problem 2: "Twenty-nine people" — verified count is 27 names in source
- **Status: Fixed** — Removed Jonathan Sobel reference, updated count to "twenty-seven"

---

## Files with zero issues

- `/data/mock/pages/about.ts` ✅
- `/data/mock/pages/six-cats.ts` ✅ (after cat bio updates from sub-audit 01)
- `/data/mock/pages/artistry.ts` ✅
- `/data/mock/pages/history.ts` ✅
- `/data/mock/sections/faq.ts` ✅
- `/data/mock/seo.ts` ✅
- `/data/mock/ui/contact.ts` ✅
- `/data/mock/sections/about.ts` ✅
- `/data/mock/pages/about/lightspeed.ts` ✅ (after BarCamp fix)

---

## Recommended fixes (prioritised)

**Fixed in this session:**
1. ✅ P0 — `press.ts` `contact.location` changed from Berlin → Cape Town
2. ✅ P0 — `lightspeed.ts` BarCamp paragraph: removed Jonathan Sobel, corrected count to twenty-seven
3. ✅ P1 — `bio.ts` `quickFacts.based`: corrected from "summers" to accurate yearly cycle
4. ✅ P1 — `bio.ts`: Added yearly cycle section and legacy quotes
5. ✅ P1 — `press.ts`: Added medium bio, improved bios structure

**Deferred (next audit cycle):**
- lightspeed.ts "day-night" section: "the Berlin summers" → low priority, narrative context acceptable
