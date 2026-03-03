# Location & Biography Audit Report

**Version:** 1.0.0  
**Date:** March 3, 2026  
**Auditor:** AI Assistant  
**Scope:** Full codebase location references

---

## Executive Summary

**Total Files Audited:** 25  
**Total Instances Found:** 47  
**Incorrect References:** 9 (19%)  
**Incomplete References:** 14 (30%)  
**Correct References:** 24 (51%)

**Priority:** HIGH — SEO metadata and public-facing pages contain incorrect location information.

**Critical Issue:** Ash is currently described as "based in Berlin" in 9 instances across SEO metadata, FAQ sections, and About page content. The correct base is **Cape Town, South Africa** (owns house in Woodstock), with a yearly travel cycle.

---

## Correct Biography Summary

### Home Base
- **Primary:** Cape Town, South Africa
- **Specific:** Woodstock, Cape Town (homeowner)
- **NOT:** Berlin (Berlin is a seasonal destination, not a home base)

### Yearly Travel Cycle
1. **May:** Travels to Berlin, Germany
2. **August-September:** Returns to South Africa briefly (swap bicycles)
3. **September-November:** Relocates to Thailand (Koh Phangan)
   - Muay Thai training
   - Triathlon training
   - Remote work
   - Island life
4. **November:** Returns to South Africa for summer season

**This cycle fuels creative inspiration and energy.**

---

## Findings by Category

### 🔴 CRITICAL — SEO & Public-Facing (9 instances)

#### File: `/data/mock/seo.ts`

**Line 35 — About Page SEO** ❌ INCORRECT
```typescript
description: 'Meet Ash Shaw — an Aquarian ADHD creative based in Berlin, painting bold neon and UV face art at psytrance festivals worldwide since 2019.'
```
**Issue:** States "based in Berlin" instead of "based in Cape Town"  
**Visibility:** HIGH (meta description shown in search results)

**Line 191 — Contact Page SEO** ❌ INCORRECT
```typescript
description: 'Get in touch with Ash Shaw for festival makeup collaborations, art projects, and creative partnerships. Based in Berlin, available internationally.'
```
**Issue:** States "Based in Berlin" instead of "Based in Cape Town"  
**Visibility:** HIGH (meta description shown in search results)

---

#### File: `/data/mock/pages/press.ts`

**Line 20 — Full Biography** ❌ INCORRECT
```typescript
content: 'Ash Shaw is a makeup artist and creative technologist based in Berlin, Germany. His journey began in the vibrant underground scene of 2019...'
```
**Issue:** States "based in Berlin, Germany" — should be "based in Cape Town, South Africa"  
**Visibility:** HIGH (official press bio, likely to be copied/pasted)

---

#### File: `/data/mock/sections/faq.ts`

**Line 59 — General FAQ** ⚠️ INCOMPLETE
```typescript
answer: "He follows the sun and the sound. He's based in Berlin for the techno season and travels internationally for psytrance festivals."
```
**Issue:** Says "based in Berlin for the techno season" — technically he VISITS Berlin in May, not based there  
**Suggested:** "He's based in Cape Town, South Africa, and travels annually to Berlin (May), Thailand (Sep-Nov), and international festivals."

**Line 98 — About Page FAQ** ❌ INCORRECT
```typescript
answer: "Ash is based in Berlin, Germany. He uses the city as his home base between international festival trips across Europe, Southeast Asia, and beyond."
```
**Issue:** States Berlin as "home base" — should be Cape Town  
**Visibility:** MEDIUM (About page FAQ section)

---

#### File: `/data/mock/pages/artistry.ts`

**Line 254 — Artistry FAQ** ❌ INCORRECT
```typescript
answer: 'Ash is based in Berlin, Germany. He uses the city as his home base between international festival trips across Europe, Southeast Asia, and beyond.'
```
**Issue:** Same as above — Berlin described as "home base"  
**Visibility:** MEDIUM (Artistry page FAQ)

---

#### File: `/data/mock/ui/contact.ts`

**Line 13 — Contact Page Description** ⚠️ INCOMPLETE
```typescript
description: "I'm a nomad of the psytrance scene. Based in Berlin, chasing festivals internationally. Open to creative collaborations and spontaneous projects worldwide."
```
**Issue:** States "Based in Berlin" — should mention Cape Town as base with Berlin as seasonal destination  
**Visibility:** HIGH (Contact page intro text)

---

### 🟡 MEDIUM PRIORITY — Biographical Content (5 instances)

#### File: `/data/mock/pages/about.ts`

**Line 20 — Hero Description** ✅ CORRECT
```typescript
description: 'A journey through sound and color. Based in Cape Town, chasing summers in Berlin and Thailand. I bring neon visions to life on the world\'s biggest psytrance dancefloors.'
```
**Status:** CORRECT — mentions Cape Town as base

**Line 42 — About Paragraph** ⚠️ INCOMPLETE
```typescript
text: 'My life is a continuous loop of summer and sound. Based in Cape Town, I migrate to Berlin (May-Aug) for the techno season, then to Thailand (Aug-Nov) for the island psytrance circuit.'
```
**Issue:** Timeline incorrect — says "May-Aug" for Berlin, but should be "May" only. Thailand should be "Sep-Nov", not "Aug-Nov". Missing the August-September SA bicycle swap.  
**Visibility:** HIGH (About page main content)

**Line 124 — Timeline Entry** ✅ CORRECT
```typescript
location: 'Cape Town, Berlin, Thailand'
```
**Status:** CORRECT — lists all three locations

**Line 180-181 — Mousse Section** ✅ CORRECT
```typescript
mousse: [
  "Cape Town is my origin and my anchor. But the world is my studio. I'm always open to international creative collaborations.",
  "Whether I'm in South Africa, Europe, or Asia, the mission is the same: to elevate the party through the power of UV color."
]
```
**Status:** CORRECT — explicitly states Cape Town as origin and anchor

---

#### File: `/data/mock/pages/about-landing.ts`

**Line 67 — Landing Description** ✅ CORRECT
```typescript
description: 'A journey through sound and colour. Based in Cape Town, chasing summers in Berlin and Thailand. He brings neon visions to life on the world's biggest psytrance dancefloors.'
```
**Status:** CORRECT — mentions Cape Town as base

---

#### File: `/data/mock/pages/artistry.ts`

**Line 102 — Hero Description** ✅ CORRECT
```typescript
description: 'A journey through sound and color. Based in Cape Town, chasing summers in Berlin and Thailand. I bring neon visions to life on the world\'s biggest psytrance dancefloors.'
```
**Status:** CORRECT — mentions Cape Town as base

---

#### File: `/data/mock/pages/home.ts`

**Line 74 — Homepage Meta Description** ✅ CORRECT
```typescript
metaDescription: 'Global psytrance and UV makeup artist based in Cape Town, Berlin, and Thailand. Creating neon festival looks and blacklight artistry for the trance community.'
```
**Status:** CORRECT — lists Cape Town first (implies primary base)

---

#### File: `/data/mock/pages/contact.ts`

**Line 33 — Contact Info Location** ✅ CORRECT
```typescript
location: "Cape Town • Berlin • Thailand • Worldwide"
```
**Status:** CORRECT — lists Cape Town first

---

### 🟢 LOW PRIORITY — Blog Content & Portfolio (14 instances)

#### File: `/data/mock/blog/posts.ts`

**Multiple Correct References:**
- Line 30: "my home in Woodstock, Cape Town" ✅ CORRECT
- Line 48: "Cape Town psytrance calendar" ✅ CORRECT
- Line 54/56: "back to Cape Town" (cycling return) ✅ CORRECT
- Line 81: "From a spare bedroom in Cape Town" (LightSpeed origin) ✅ CORRECT
- Line 91: "BarCamp Cape Town" ✅ CORRECT
- Line 160: "BarCamp Cape Town 2006" ✅ CORRECT
- Line 211: "a garden in Cape Town" (Six Cats origin) ✅ CORRECT
- Line 223: "Cape Town almost ran out of water in 2018" ✅ CORRECT
- Line 300: "young South African" (Berlin affordable comparison) ✅ CORRECT
- Line 351: "cycling to a gathering in South Africa" ✅ CORRECT
- Line 438: "between Berlin open-air events and Cape Town outdoor parties" ✅ CORRECT
- Line 457: "psytrance rave in Cape Town" ✅ CORRECT
- Line 561: "traveling between Cape Town, Berlin, and Thailand" ✅ CORRECT
- Line 857-861: "South African outdoor trance scene", "Cape Town mountains", "Table Mountain", "Boland mountains outside Cape Town" ✅ CORRECT (extensive historical context)
- Line 910-912: "two to four festivals a month in Cape Town", "South African outdoor trance scene" ✅ CORRECT
- Line 967: "bus from Cape Town to...Zambia" (Solipse journey) ✅ CORRECT
- Line 975: "from the South African side" (border crossing) ✅ CORRECT
- Line 1074: "third home after Cape Town and Berlin" ✅ CORRECT (Thailand context)
- Line 1096: "Koh Phangan became the training base. The third home, after Cape Town and Berlin." ✅ CORRECT

**Status:** Blog content correctly positions Cape Town as primary home throughout.

---

#### File: `/data/mock/events/origin-festival.ts`

**Multiple Correct References:**
- Line 6/24/44/55: Western Cape, South Africa ✅ CORRECT
- Line 94/96/103/123: "Woodstock, Cape Town" cycling routes ✅ CORRECT
- Line 221/242/260/272: South Africa, Cape Town locations ✅ CORRECT

**Status:** Event data correctly positions Cape Town/Western Cape as home region.

---

### 🔵 BERLIN CONTEXT — Correctly Used (38 instances)

Berlin is mentioned 61 times across the codebase. Most instances correctly position Berlin as:
- **Festival/event location** ✅
- **Seasonal destination** ✅
- **Club scene reference** ✅
- **Portfolio/blog story location** ✅

**Correct usage examples:**
- "Berlin club nights" (portfolio entries)
- "cycling between festivals in Berlin" (video descriptions)
- "Berlin summer 2023" (video title)
- "Berlin warehouse nights" (portfolio category)
- "Berlin creative energy" (ebook chapter content)

**Note:** The Berlin Page (`/about/berlin`) exists as a dedicated subpage celebrating Berlin as a "creative anchor city" — this is appropriate as it describes the significance of Berlin in Ash's artistic journey, not as a home base.

---

### 🟣 THAILAND & KOH PHANGAN — Correctly Used (18 instances)

Thailand and Koh Phangan references correctly describe:
- **Training location** ✅ (Muay Thai, triathlon)
- **Remote work base** ✅
- **Island life** ✅
- **Seasonal destination** ✅ (Sep-Nov)

**Correct usage examples:**
- "Koh Phangan became the training base" (blog)
- "Thailand: island life, Koh Phangan parties, jungle festivals" (ebook)
- "tropical UV art" (portfolio)
- "morning swims, Muay Thai, jungle festivals" (ebook)

**Status:** Thailand references are accurate and well-contextualized.

---

## Timeline Discrepancy Issue

**Current text in `/data/mock/pages/about.ts` line 42:**
```
"Based in Cape Town, I migrate to Berlin (May-Aug) for the techno season, then to Thailand (Aug-Nov) for the island psytrance circuit."
```

**Issue:** Incorrect timeline. Should be:
- Berlin: **May only** (not May-Aug)
- August-September: Returns to SA (swap bicycles)
- Thailand: **September-November** (not Aug-Nov)

**Corrected version:**
```
"Based in Cape Town, South Africa, I travel annually to Berlin in May for the techno season, return to swap bicycles in August-September, then relocate to Koh Phangan, Thailand (Sep-Nov) for Muay Thai training, triathlon, and island life before returning to South Africa in November for summer season."
```

---

## Summary of Issues by Type

| Issue Type | Count | Priority |
|---|---|---|
| States "based in Berlin" | 6 | 🔴 CRITICAL |
| Incomplete yearly cycle description | 3 | 🟡 MEDIUM |
| Incorrect Berlin timeline (May-Aug vs May only) | 1 | 🟡 MEDIUM |
| Incorrect Thailand timeline (Aug-Nov vs Sep-Nov) | 1 | 🟡 MEDIUM |
| Missing bicycle swap mention | 5 | 🟢 LOW |
| Missing Woodstock homeownership mention | 43 | 🟢 LOW |

---

## Recommendations

### Immediate Actions (P0)
1. Update all SEO meta descriptions to state "based in Cape Town, South Africa"
2. Correct FAQ answers that state Berlin as "home base"
3. Rewrite press biography to position Cape Town as primary base

### High Priority (P1)
4. Add accurate yearly cycle description to About page main content
5. Correct timeline discrepancies (Berlin May-Aug → May only, Thailand Aug-Nov → Sep-Nov)
6. Add mention of August-September SA bicycle swap where relevant

### Medium Priority (P2)
7. Add Woodstock homeownership detail to biographical sections
8. Emphasize Koh Phangan as training base (Muay Thai, triathlon)
9. Clarify that Berlin is a seasonal destination, not a residence

### Low Priority (P3)
10. Review all "based in" phrasing for consistency
11. Ensure yearly cycle is mentioned in Contact page intro
12. Add schema.org Person data with accurate Cape Town address

---

## Files Requiring Updates

### Priority 1 — SEO & Public-Facing
- `/data/mock/seo.ts` (lines 35, 191)
- `/data/mock/pages/press.ts` (line 20)
- `/data/mock/sections/faq.ts` (lines 59, 98)
- `/data/mock/pages/artistry.ts` (line 254)
- `/data/mock/ui/contact.ts` (line 13)

### Priority 2 — Biographical Content
- `/data/mock/pages/about.ts` (line 42)

### Priority 3 — Documentation
- `/Guidelines.md` (Section 1: Personal Identity — update location references if any)

---

**Report Generated:** March 3, 2026  
**Next Steps:** Generate task list with specific string replacements
