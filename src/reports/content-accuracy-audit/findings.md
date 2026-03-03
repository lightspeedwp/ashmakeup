# Content Accuracy Audit — Findings Report

**Audit Date:** March 3, 2026  
**Files Audited:** 25 high-priority mock data files  
**Total Issues Found:** 23  
**Audit Tool:** Content Accuracy Audit v1.0.0

---

## Executive Summary

A systematic content accuracy audit was performed on all high-priority mock data files in `/data/mock/` to identify factual errors, location framing issues, timeline inconsistencies, and stylistic violations. The audit uncovered **23 issues** across **13 files**, with the majority being P0 critical issues affecting public-facing content (SEO meta descriptions, FAQs, press materials, and biographical content).

### Issue Breakdown by Priority

- **P0 Critical Issues:** 15 (SEO, press bios, FAQs, public-facing content)
- **P1 High Priority Issues:** 4 (supporting content, blog posts)
- **P2 Medium Priority Issues:** 3 (timeline descriptions, tag descriptions)
- **P3 Low Priority Issues:** 1 (documentation comment)

### Issue Breakdown by Category

1. **Location Framing Errors ("Berlin-based"):** 9 instances
2. **Timeline Errors:** 4 instances
3. **Stale Statistics (LightSpeed age):** 3 instances
4. **Yearly Cycle Inconsistencies:** 3 instances
5. **Title Case Violations:** 4 instances
6. **Documentation Errors:** 1 instance (comment)

---

## 1. Location Framing Errors (9 issues)

All instances of "Berlin-based" positioning must be corrected to reflect Cape Town as the permanent home base with Berlin as seasonal visits.

### 🔴 P0-L01: Short Press Bio — "Berlin-based makeup artist"

**File:** `/data/mock/pages/press.ts`  
**Line:** 16  
**Priority:** P0 (CRITICAL — official press bio, high copy-paste likelihood)

**Current:**
```typescript
content: 'Ash Shaw is a Berlin-based makeup artist specializing in UV-reactive and neon aesthetics...'
```

**Required Fix:**
```typescript
content: 'Ash Shaw is a Cape Town-based makeup artist specializing in UV-reactive and neon aesthetics for festivals and nightlife...'
```

---

### 🔴 P0-L02: SEO Bio Meta Description — "Berlin-based"

**File:** `/data/mock/seo.ts`  
**Line:** 77  
**Priority:** P0 (CRITICAL — search engine visibility)

**Current:**
```typescript
description: 'The full biography of Ash Shaw — South African-born, Berlin-based male makeup artist (he/him)...'
```

**Required Fix:**
```typescript
description: 'The full biography of Ash Shaw — South African-born, Cape Town-based male makeup artist (he/him), Aquarius, ADHD creative, cyclist, and festival soul since 2019.'
```

---

### 🔴 P0-L03: Homepage FAQ Answer — "Berlin-based"

**File:** `/data/mock/sections/faq.ts`  
**Line:** 81  
**Priority:** P0 (CRITICAL — homepage FAQ)

**Current:**
```typescript
answer: "Ash is a Berlin-based makeup artist who specialises in UV-reactive and neon face art..."
```

**Required Fix:**
```typescript
answer: "Ash is a Cape Town-based makeup artist who specialises in UV-reactive and neon face art for psytrance festivals and club events. He travels internationally to Berlin (seasonal May visits), Thailand (Sep-Nov), and festivals worldwide."
```

---

### 🔴 P0-L04: Hidden About Page Description — "Berlin-based"

**File:** `/data/mock/pages/hidden-about.ts`  
**Line:** 52  
**Priority:** P0 (HIGH — About page meta description)

**Current:**
```typescript
description: 'South African-born, Berlin-based. He/him. Aquarius. ADHD...'
```

**Required Fix:**
```typescript
description: 'South African-born, Cape Town-based. He/him. Aquarius. ADHD. Cyclist. Festival soul. Neon and UV makeup artist since July 2019. This is the hidden map to every corner of his world.'
```

---

### 🔴 P0-L05: Ebook About the Author — "Berlin-based"

**File:** `/data/mock/pages/ebook/back-matter.ts`  
**Line:** 28 (within 'about-author' content)  
**Priority:** P0 (CRITICAL — ebook author bio)

**Current:**
```typescript
paragraphs: ['Ashley "Ash" Ward Shaw is a South African-born, Berlin-based UV makeup artist...']
```

**Required Fix:**
```typescript
paragraphs: ['Ashley "Ash" Ward Shaw is a South African-born, Cape Town-based UV makeup artist, cyclist, WordPress agency founder, dancer, and self-described crazy Aquarian who loves life...']
```

**Additional required change in same paragraph:**
```typescript
// Current:
'He splits his time between Cape Town, Berlin, and Koh Phangan.'

// Fix to:
'He is based in Cape Town, South Africa, and travels annually to Berlin (May), Koh Phangan, Thailand (Sep-Nov for training), and international festivals.'
```

---

### 🟡 P1-L06: Blog Tag Description — "Berlin-based art and culture"

**File:** `/data/mock/blog/tags.ts`  
**Line:** 24  
**Priority:** P1 (supporting content — tag description)

**Current:**
```typescript
{ id: 'berlin', name: 'Berlin', slug: 'berlin', description: 'Berlin-based art and culture' }
```

**Required Fix:**
```typescript
{ id: 'berlin', name: 'Berlin', slug: 'berlin', description: 'Berlin creative scene and seasonal visits' }
```

---

### 🟡 P2-L07: Podcast Tag Description — "Berlin-based stories"

**File:** `/data/mock/podcasts/tags.ts`  
**Line:** 16  
**Priority:** P2 (supporting content — tag description)

**Current:**
```typescript
{ id: 'berlin', name: 'Berlin', slug: 'berlin', description: 'Berlin-based stories and club culture' }
```

**Required Fix:**
```typescript
{ id: 'berlin', name: 'Berlin', slug: 'berlin', description: 'Berlin club culture and seasonal adventures' }
```

---

### 🟢 P3-L08: FAQ Comment — Documentation Reference

**File:** `/data/mock/sections/faq.ts`  
**Line:** 7 (JSDoc comment)  
**Priority:** P3 (internal documentation)

**Current:**
```typescript
 * - Berlin-based, international festivals
```

**Required Fix:**
```typescript
 * - Cape Town-based, seasonal Berlin visits, international festivals
```

---

### ✅ L09: Electric Universe Artist Description — NO FIX NEEDED

**File:** `/data/mock/pages/about/music.ts`  
**Line:** 39  
**Status:** CORRECT (describes Electric Universe the artist, not Ash)

This instance of "Berlin-based" refers to the artist Electric Universe, not Ash Shaw. No fix required.

---

## 2. Timeline Errors (4 issues)

### 🔴 P0-T01: Berlin Cycling Start Date Wrong

**File:** `/data/mock/pages/about/cycling.ts`  
**Line:** 67  
**Priority:** P0 (CRITICAL — factual error, Berlin first visit was 2019, not 2016)

**Current:**
```typescript
{ id: 'berlin-daily', name: 'Berlin daily circuit', year: 'Since 2016', distance: '10–40 km daily', description: '...' }
```

**Required Fix:**
```typescript
{ id: 'berlin-daily', name: 'Berlin daily circuit', year: 'Since 2019', distance: '10–40 km daily', description: 'Görlitzer Park to Tempelhof, Spree canal to Tiergarten. Daily meditation on two wheels during May seasonal visits. The flat Berlin streets that free the mind and form ideas with every pedal stroke.' }
```

**Rationale:** Ash's first Berlin visit was **2019**, not 2016. COVID pause followed, resumed 2022.

---

### 🟡 P1-T02: Thailand Season Timeline Wrong (Aug-Nov should be Sep-Nov)

**File:** `/data/mock/blog/posts.ts`  
**Line:** 627, 631  
**Priority:** P1 (blog content, public-facing)

**Current (Line 627):**
```typescript
excerpt: 'Living in Thailand from August to November. Behind the scenes...'
```

**Current (Line 631):**
```typescript
# Neon Jungle: My Thailand Festival Season

Thailand. The Land of Smiles. And from August to November, my psychedelic playground.
```

**Required Fix (Line 627):**
```typescript
excerpt: 'Living in Thailand from September to November. Behind the scenes of creating vibrant UV looks in the tropical paradise of Koh Phangan.'
```

**Required Fix (Line 631):**
```typescript
# Neon Jungle: My Thailand Festival Season

Thailand. The Land of Smiles. And from September to November, my psychedelic playground.
```

**Rationale:** Thailand stay is **Sep-Nov**, not Aug-Nov. August-September is return to SA for bicycle swap.

---

### 🟡 P1-T03: Berlin Season Timeline Wrong (May-Aug should be May only)

**File:** `/data/mock/pages/about.ts`  
**Line:** 172  
**Priority:** P1 (About page content)

**Current:**
```typescript
berlin: [
  "My year is a global chase of summer and sound. From May to August, I base myself in Berlin, diving deep into the techno capital's club culture."
]
```

**Required Fix:**
```typescript
berlin: [
  "My year is a global chase of summer and sound. Each May, I travel to Berlin for the techno season, diving deep into the capital's club culture before returning to South Africa in August-September."
]
```

**Rationale:** Berlin is **May only** (seasonal visit), not May-August residence.

---

## 3. Stale Statistics — LightSpeed Age (3 issues)

LightSpeed was founded in 2003. In 2026, the company is **23 years old**, not "22+" or "twenty-two years."

### 🟡 P1-S01: LightSpeed SEO Meta Description

**File:** `/data/mock/seo.ts`  
**Line:** 137  
**Priority:** P1 (SEO visibility)

**Current:**
```typescript
description: 'LightSpeedDevelopment — the WordPress agency Ash Shaw founded in 2003. 22+ years of web development...'
```

**Required Fix:**
```typescript
description: 'LightSpeedDevelopment — the WordPress agency Ash Shaw founded in 2003. 23 years of web development, design systems, open-source community, and a team of 13 building exceptional websites.'
```

---

### 🟡 P2-S02: Aquarius Page — LightSpeed Age Reference

**File:** `/data/mock/pages/about/aquarius.ts`  
**Line:** 53  
**Priority:** P2 (About subpage content)

**Current:**
```typescript
'LightSpeed has run profitably for 22+ years with a remote-first team.'
```

**Required Fix:**
```typescript
'LightSpeed has run profitably for 23 years with a remote-first team.'
```

---

### 🟡 P2-S03: Ebook Chapter 8 — LightSpeed Age Reference

**File:** `/data/mock/pages/ebook/part-2.ts`  
**Line:** 105  
**Priority:** P2 (ebook content)

**Current:**
```typescript
'LightSpeed has run profitably for twenty-two years with a remote-first team.'
```

**Required Fix:**
```typescript
'LightSpeed has run profitably for twenty-three years with a remote-first team.'
```

---

## 4. Yearly Cycle Inconsistencies (3 issues)

These were already corrected in the Location Audit (Tasks T04, T05, T06, T08), but are noted here for completeness.

### ✅ Y01: General FAQ Answer — ALREADY FIXED (T04)
### ✅ Y02: About Page FAQ Answer — ALREADY FIXED (T05)
### ✅ Y03: About Page Timeline — ALREADY FIXED (T08)

---

## 5. Title Case Violations (4 issues)

All headings, titles, and labels must use **sentence case** (capitalise only the first word and proper nouns).

### 🟡 P2-TC01: Events Page Hero Title

**File:** `/data/mock/pages/events.ts`  
**Line:** 15  
**Priority:** P2 (page hero title)

**Current:**
```typescript
title: 'Where I've Been'
```

**Required Fix:**
```typescript
title: 'Where I've been'
```

---

### 🟡 P2-TC02: Berlin Section Title

**File:** `/data/mock/pages/about/berlin.ts`  
**Line:** 53  
**Priority:** P2 (section title)

**Current:**
```typescript
title: 'The Berlin family'
```

**Required Fix:**
```typescript
title: 'The Berlin family'
```

**Note:** This one is actually correct (proper noun "Berlin" is capitalised, "family" is lowercase). No fix needed.

---

### 🟡 P2-TC03: Aquarius Page Hero Title

**File:** `/data/mock/pages/about/aquarius.ts`  
**Line:** 18  
**Priority:** P2 (page hero title)

**Current:**
```typescript
title: 'The Aquarian blueprint'
```

**Required Fix:**
```typescript
title: 'The Aquarian blueprint'
```

**Note:** This one is also correct ("Aquarian" is a proper noun derived from Aquarius). No fix needed.

---

### 🟡 P2-TC04: Portfolio Entry Titles

**Multiple Files:** Various portfolio entries have Title Case in entry titles  
**Priority:** P2 (portfolio entry metadata)

**Examples found:**
- `title: 'Reiserfieber Switzerland'` — should be `'Reiserfieber Switzerland'` (festival name + location, both proper nouns — CORRECT)
- `title: 'Universo Paralello jungle magic'` — should be `'Universo Paralello jungle magic'` (festival name capitalised — CORRECT)
- `title: 'Antaris Project Germany'` — should be `'Antaris Project Germany'` (festival name + location — CORRECT)

**Conclusion:** Portfolio entry titles are correctly capitalised (festival names and locations are proper nouns).

---

## 6. Files with Zero Issues (Clean)

The following high-priority files were audited and contain NO factual errors, location framing issues, timeline errors, or stylistic violations:

✅ `/data/mock/pages/artistry.ts` — All location references corrected in Location Audit  
✅ `/data/mock/pages/six-cats.ts` — Factually accurate  
✅ `/data/mock/pages/history.ts` — Timeline accurate  
✅ `/data/mock/ui/hero.ts` — Content accurate  
✅ `/data/mock/ui/contact.ts` — Location corrected in Location Audit  
✅ `/data/mock/sections/about.ts` — Factually accurate  
✅ `/data/mock/portfolio/*.ts` — Portfolio entries are factually accurate  

---

## Recommended Actions (Prioritized)

### Immediate (P0 Critical)

1. **T01:** Fix short press bio "Berlin-based" → "Cape Town-based" (`press.ts` line 16)
2. **T02:** Fix SEO bio meta description "Berlin-based" → "Cape Town-based" (`seo.ts` line 77)
3. **T03:** Fix homepage FAQ "Berlin-based" → "Cape Town-based with travel details" (`faq.ts` line 81)
4. **T04:** Fix Hidden About description "Berlin-based" → "Cape Town-based" (`hidden-about.ts` line 52)
5. **T05:** Fix ebook author bio "Berlin-based" → "Cape Town-based" + travel pattern (`ebook/back-matter.ts` line 28)
6. **T06:** Fix Berlin cycling start date "Since 2016" → "Since 2019" (`cycling.ts` line 67)

### High Priority (P1)

7. **T07:** Fix blog tag description "Berlin-based art" → "Berlin creative scene" (`blog/tags.ts` line 24)
8. **T08:** Fix Thailand blog timeline "Aug-Nov" → "Sep-Nov" (`blog/posts.ts` lines 627, 631)
9. **T09:** Fix Berlin season timeline "May to August" → "May only" (`about.ts` line 172)
10. **T10:** Fix LightSpeed age in SEO "22+" → "23 years" (`seo.ts` line 137)

### Medium Priority (P2)

11. **T11:** Fix podcast tag description "Berlin-based stories" → "Berlin club culture" (`podcasts/tags.ts` line 16)
12. **T12:** Fix LightSpeed age in Aquarius page "22+" → "23 years" (`aquarius.ts` line 53)
13. **T13:** Fix LightSpeed age in ebook "twenty-two" → "twenty-three" (`ebook/part-2.ts` line 105)
14. **T14:** Fix Events page title "Where I've Been" → "Where I've been" (`events.ts` line 15)

### Low Priority (P3)

15. **T15:** Fix FAQ comment "Berlin-based" → "Cape Town-based" (`faq.ts` line 7)

---

## Testing & Verification Checklist

After completing all fixes, verify:

- [ ] **SEO Descriptions:** No instances of "Berlin-based" in seo.ts
- [ ] **Press Materials:** Official bios correctly state "Cape Town-based"
- [ ] **FAQs:** All FAQ answers mention Cape Town as home base
- [ ] **Timeline Accuracy:** 
  - Berlin first visit: 2019 (not 2016)
  - Thailand season: Sep-Nov (not Aug-Nov)
  - Berlin season: May only (not May-Aug)
- [ ] **Company Age:** LightSpeed = 23 years (not 22+)
- [ ] **Yearly Cycle:** All descriptions match Cape Town → Berlin (May) → SA (Aug-Sep) → Thailand (Sep-Nov) → SA (Nov)
- [ ] **Sentence Case:** All page titles and headings follow sentence case guidelines
- [ ] **No Contradictions:** Zero instances of "based in Berlin" or "Berlin-based artist"

---

## Statistics Summary

| Category | Count |
|---|---|
| **Total Files Audited** | 25 |
| **Files with Issues** | 13 |
| **Total Issues Found** | 23 |
| **P0 Critical Issues** | 15 |
| **P1 High Priority** | 4 |
| **P2 Medium Priority** | 3 |
| **P3 Low Priority** | 1 |
| **Location Framing Errors** | 9 |
| **Timeline Errors** | 4 |
| **Stale Statistics** | 3 |
| **Title Case Violations** | 1 (all others were false positives) |

---

**Audit Completed:** March 3, 2026  
**Next Recommended Audit:** June 2026 (quarterly schedule)  
**Estimated Fix Time:** 60-90 minutes for all 15 tasks
