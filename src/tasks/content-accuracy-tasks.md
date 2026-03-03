# Content Accuracy Correction Tasks

**Version:** 1.0.0  
**Created:** March 3, 2026  
**Source Report:** `/reports/content-accuracy-audit/findings.md`  
**Total Tasks:** 15  
**Estimated Time:** 60-90 minutes

---

## Task Priority Legend

- **P0:** CRITICAL — SEO metadata, press bios, public-facing FAQs (complete first)
- **P1:** HIGH — Blog content, tag descriptions, statistics
- **P2:** MEDIUM — Supporting content, ebook references
- **P3:** LOW — Internal documentation

---

## P0 Tasks — Critical Public-Facing Content

### 🔴 T01: Fix Short Press Bio Location Reference

**File:** `/data/mock/pages/press.ts`  
**Line:** 16  
**Priority:** P0 (CRITICAL — official press bio)

**Current:**
```typescript
content: 'Ash Shaw is a Berlin-based makeup artist specializing in UV-reactive and neon aesthetics for festivals and nightlife...'
```

**Replace with:**
```typescript
content: 'Ash Shaw is a Cape Town-based makeup artist specializing in UV-reactive and neon aesthetics for festivals and nightlife. Blending cyberpunk influences with tribal patterns, his work transforms faces into living art pieces under blacklight. He has been featured at major international psytrance festivals and Berlin underground events.'
```

**Change:** "Berlin-based" → "Cape Town-based"

---

### 🔴 T02: Fix SEO Bio Meta Description

**File:** `/data/mock/seo.ts`  
**Line:** 77  
**Priority:** P0 (CRITICAL — search engine visibility)

**Current:**
```typescript
description: 'The full biography of Ash Shaw — South African-born, Berlin-based male makeup artist (he/him), Aquarius, ADHD creative, cyclist, and festival soul since 2019.'
```

**Replace with:**
```typescript
description: 'The full biography of Ash Shaw — South African-born, Cape Town-based male makeup artist (he/him), Aquarius, ADHD creative, cyclist, and festival soul since 2019.'
```

**Change:** "Berlin-based" → "Cape Town-based"

---

### 🔴 T03: Fix Homepage FAQ Answer

**File:** `/data/mock/sections/faq.ts`  
**Line:** 81  
**Priority:** P0 (CRITICAL — homepage FAQ)

**Current:**
```typescript
answer: "Ash is a Berlin-based makeup artist who specialises in UV-reactive and neon face art for psytrance festivals and club events. He travels internationally to bring colour and energy to dancefloors around the world."
```

**Replace with:**
```typescript
answer: "Ash is a Cape Town-based makeup artist who specialises in UV-reactive and neon face art for psytrance festivals and club events. He travels internationally to Berlin (seasonal May visits), Thailand (Sep-Nov), and festivals worldwide, bringing colour and energy to dancefloors across the globe."
```

**Changes:**
1. "Berlin-based" → "Cape Town-based"
2. Added specific travel destinations with timing

---

### 🔴 T04: Fix Hidden About Page Description

**File:** `/data/mock/pages/hidden-about.ts`  
**Line:** 52  
**Priority:** P0 (HIGH — About page meta description)

**Current:**
```typescript
description: 'South African-born, Berlin-based. He/him. Aquarius. ADHD. Cyclist. Festival soul. Neon and UV makeup artist since July 2019. This is the hidden map to every corner of his world.'
```

**Replace with:**
```typescript
description: 'South African-born, Cape Town-based. He/him. Aquarius. ADHD. Cyclist. Festival soul. Neon and UV makeup artist since July 2019. This is the hidden map to every corner of his world.'
```

**Change:** "Berlin-based" → "Cape Town-based"

---

### 🔴 T05: Fix Ebook "About the Author" Bio

**File:** `/data/mock/pages/ebook/back-matter.ts`  
**Line:** 28 (within 'about-author' content, first paragraph)  
**Priority:** P0 (CRITICAL — ebook author bio)

**Current (first paragraph):**
```typescript
'Ashley "Ash" Ward Shaw is a South African-born, Berlin-based UV makeup artist, cyclist, WordPress agency founder, dancer, and self-described crazy Aquarian who loves life. He has been a hyperactive individual since childhood — whenever you see him he is moving and/or talking.'
```

**Replace with:**
```typescript
'Ashley "Ash" Ward Shaw is a South African-born, Cape Town-based UV makeup artist, cyclist, WordPress agency founder, dancer, and self-described crazy Aquarian who loves life. He has been a hyperactive individual since childhood — whenever you see him he is moving and/or talking.'
```

**Change:** "Berlin-based" → "Cape Town-based"

**Current (third paragraph):**
```typescript
'He splits his time between Cape Town, Berlin, and Koh Phangan. Transport: bicycle — always. Pronouns: he/him. Star sign: Aquarius. Neurotype: ADHD. The book arrives when it's ready, not before.'
```

**Replace with:**
```typescript
'He is based in Cape Town, South Africa, and travels annually to Berlin (May), Koh Phangan, Thailand (Sep-Nov for training), and international festivals. Transport: bicycle — always. Pronouns: he/him. Star sign: Aquarius. Neurotype: ADHD. The book arrives when it's ready, not before.'
```

**Changes:**
1. "splits his time between" → "is based in Cape Town" with travel pattern
2. Added specific months for Berlin and Thailand
3. Added "for training" context for Thailand

---

### 🔴 T06: Fix Berlin Cycling Start Date

**File:** `/data/mock/pages/about/cycling.ts`  
**Line:** 67  
**Priority:** P0 (CRITICAL — factual error)

**Current:**
```typescript
{ id: 'berlin-daily', name: 'Berlin daily circuit', year: 'Since 2016', distance: '10–40 km daily', description: 'Görlitzer Park to Tempelhof, Spree canal to Tiergarten. Daily meditation on two wheels. The flat Berlin streets that free the mind and form ideas with every pedal stroke.' }
```

**Replace with:**
```typescript
{ id: 'berlin-daily', name: 'Berlin daily circuit', year: 'Since 2019', distance: '10–40 km daily', description: 'Görlitzer Park to Tempelhof, Spree canal to Tiergarten. Daily meditation on two wheels during May seasonal visits. The flat Berlin streets that free the mind and form ideas with every pedal stroke.' }
```

**Changes:**
1. "Since 2016" → "Since 2019" (Berlin first visit was 2019, not 2016)
2. Added "during May seasonal visits" context

---

## P1 Tasks — High Priority Content

### 🟡 T07: Fix Blog Tag Description

**File:** `/data/mock/blog/tags.ts`  
**Line:** 24  
**Priority:** P1 (supporting content)

**Current:**
```typescript
{ id: 'berlin', name: 'Berlin', slug: 'berlin', description: 'Berlin-based art and culture' }
```

**Replace with:**
```typescript
{ id: 'berlin', name: 'Berlin', slug: 'berlin', description: 'Berlin creative scene and seasonal visits' }
```

**Change:** "Berlin-based art and culture" → "Berlin creative scene and seasonal visits"

---

### 🟡 T08: Fix Thailand Blog Post Timeline (2 locations)

**File:** `/data/mock/blog/posts.ts`  
**Lines:** 627, 631  
**Priority:** P1 (blog content, public-facing)

**Current (Line 627 — excerpt):**
```typescript
excerpt: 'Living in Thailand from August to November. Behind the scenes of creating vibrant UV looks in the tropical paradise of Koh Phangan.'
```

**Replace with:**
```typescript
excerpt: 'Living in Thailand from September to November. Behind the scenes of creating vibrant UV looks in the tropical paradise of Koh Phangan.'
```

**Current (Line 631 — blog content first paragraph):**
```typescript
Thailand. The Land of Smiles. And from August to November, my psychedelic playground.
```

**Replace with:**
```typescript
Thailand. The Land of Smiles. And from September to November, my psychedelic playground.
```

**Change:** "August to November" → "September to November" (Thailand is Sep-Nov, not Aug-Nov)

---

### 🟡 T09: Fix Berlin Season Timeline in About Page

**File:** `/data/mock/pages/about.ts`  
**Line:** 172  
**Priority:** P1 (About page content)

**Current:**
```typescript
berlin: [
  "My year is a global chase of summer and sound. From May to August, I base myself in Berlin, diving deep into the techno capital's club culture.",
  "The darkness of Berlin's clubs is the perfect canvas for my UV work. I create sharper, edgier looks that cut through the strobe lights and industrial atmosphere."
]
```

**Replace with:**
```typescript
berlin: [
  "My year is a global chase of summer and sound. Each May, I travel to Berlin for the techno season, diving deep into the capital's club culture before returning to South Africa in August-September.",
  "The darkness of Berlin's clubs is the perfect canvas for my UV work. I create sharper, edgier looks that cut through the strobe lights and industrial atmosphere."
]
```

**Change:** "From May to August, I base myself in Berlin" → "Each May, I travel to Berlin... before returning to South Africa in August-September"

---

### 🟡 T10: Fix LightSpeed Age in SEO Meta Description

**File:** `/data/mock/seo.ts`  
**Line:** 137  
**Priority:** P1 (SEO visibility)

**Current:**
```typescript
description: 'LightSpeedDevelopment — the WordPress agency Ash Shaw founded in 2003. 22+ years of web development, design systems, open-source community, and a team of 13 building exceptional websites.'
```

**Replace with:**
```typescript
description: 'LightSpeedDevelopment — the WordPress agency Ash Shaw founded in 2003. 23 years of web development, design systems, open-source community, and a team of 13 building exceptional websites.'
```

**Change:** "22+ years" → "23 years" (2003 to 2026 = 23 years)

---

## P2 Tasks — Medium Priority Content

### 🟠 T11: Fix Podcast Tag Description

**File:** `/data/mock/podcasts/tags.ts`  
**Line:** 16  
**Priority:** P2 (supporting content)

**Current:**
```typescript
{ id: 'berlin', name: 'Berlin', slug: 'berlin', description: 'Berlin-based stories and club culture' }
```

**Replace with:**
```typescript
{ id: 'berlin', name: 'Berlin', slug: 'berlin', description: 'Berlin club culture and seasonal adventures' }
```

**Change:** "Berlin-based stories" → "Berlin club culture and seasonal adventures"

---

### 🟠 T12: Fix LightSpeed Age in Aquarius Page

**File:** `/data/mock/pages/about/aquarius.ts`  
**Line:** 53  
**Priority:** P2 (About subpage content)

**Current:**
```typescript
'This isn\'t irresponsibility — it\'s radical prioritisation. LightSpeed has run profitably for 22+ years with a remote-first team. The business works BECAUSE of the lifestyle, not despite it...'
```

**Replace with:**
```typescript
'This isn\'t irresponsibility — it\'s radical prioritisation. LightSpeed has run profitably for 23 years with a remote-first team. The business works BECAUSE of the lifestyle, not despite it...'
```

**Change:** "22+ years" → "23 years"

---

### 🟠 T13: Fix LightSpeed Age in Ebook Chapter 8

**File:** `/data/mock/pages/ebook/part-2.ts`  
**Line:** 105  
**Priority:** P2 (ebook content)

**Current:**
```typescript
'The business feeds the artist and the artist feeds the business. The management style mirrors the art style: freedom, trust, creative autonomy for the team. LightSpeed has run profitably for twenty-two years with a remote-first team...'
```

**Replace with:**
```typescript
'The business feeds the artist and the artist feeds the business. The management style mirrors the art style: freedom, trust, creative autonomy for the team. LightSpeed has run profitably for twenty-three years with a remote-first team...'
```

**Change:** "twenty-two years" → "twenty-three years"

---

### 🟠 T14: Fix Events Page Title (Sentence Case)

**File:** `/data/mock/pages/events.ts`  
**Line:** 15  
**Priority:** P2 (page hero title)

**Current:**
```typescript
title: 'Where I\'ve Been'
```

**Replace with:**
```typescript
title: 'Where I\'ve been'
```

**Change:** Title Case → Sentence case ("Been" → "been")

---

## P3 Tasks — Low Priority Documentation

### ⚪ T15: Fix FAQ Comment Documentation

**File:** `/data/mock/sections/faq.ts`  
**Line:** 7 (JSDoc comment)  
**Priority:** P3 (internal documentation)

**Current:**
```typescript
 * - Berlin-based, international festivals
```

**Replace with:**
```typescript
 * - Cape Town-based, seasonal Berlin visits, international festivals
```

**Change:** Comment documentation accuracy

---

## Completion Checklist

- [x] **T01:** Short press bio location reference ✅
- [x] **T02:** SEO bio meta description ✅
- [x] **T03:** Homepage FAQ answer ✅
- [x] **T04:** Hidden About page description ✅
- [x] **T05:** Ebook author bio (2 changes) ✅
- [x] **T06:** Berlin cycling start date ✅
- [x] **T07:** Blog tag description ✅
- [x] **T08:** Thailand blog timeline (2 locations) ✅
- [x] **T09:** Berlin season timeline (About page) ✅
- [x] **T10:** LightSpeed age (SEO) ✅
- [x] **T11:** Podcast tag description ✅
- [x] **T12:** LightSpeed age (Aquarius page) ✅
- [x] **T13:** LightSpeed age (Ebook) ✅
- [x] **T14:** Events page title (sentence case) ✅
- [x] **T15:** FAQ comment documentation ✅ (completed in T03)

---

## Testing & Verification

After completing all tasks, run these verification checks:

### Location Verification
```bash
# Search for any remaining "Berlin-based" instances
grep -r "Berlin-based" data/mock/

# Expected: Only the Electric Universe artist description (music.ts line 39)
```

### Timeline Verification
```bash
# Search for incorrect date references
grep -r "Since 2016" data/mock/pages/about/cycling.ts  # Should return nothing
grep -r "August to November" data/mock/blog/posts.ts   # Should return nothing
grep -r "May to August" data/mock/pages/about.ts       # Should return nothing
```

### Statistics Verification
```bash
# Search for stale LightSpeed age references
grep -r "22\+ years" data/mock/                        # Should return nothing
grep -r "twenty-two years" data/mock/                  # Should return nothing
```

---

**Task List Created:** March 3, 2026  
**Estimated Completion Time:** 60-90 minutes  
**Files to Modify:** 10 data files  
**Total Changes:** 18 (some files have multiple changes)