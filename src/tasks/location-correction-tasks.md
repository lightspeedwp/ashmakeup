# Location & Biography Correction Tasks

**Version:** 1.0.0  
**Created:** March 3, 2026  
**Source Report:** `/reports/location-audit/location-biography-findings.md`  
**Total Tasks:** 11

---

## Task Priority Legend

- **P0:** CRITICAL — SEO metadata and public-facing content (complete first)
- **P1:** HIGH — Biographical content accuracy
- **P2:** MEDIUM — Consistency and completeness
- **P3:** LOW — Nice-to-have improvements

---

## P0 Tasks — SEO & Public-Facing Content

### ✅ T01: Update About Page SEO Meta Description
**File:** `/data/mock/seo.ts`  
**Line:** 35  
**Priority:** P0 (CRITICAL — search engine visibility)

**Current:**
```typescript
description: 'Meet Ash Shaw — an Aquarian ADHD creative based in Berlin, painting bold neon and UV face art at psytrance festivals worldwide since 2019. His story, his wiring, his evolution.'
```

**Replace with:**
```typescript
description: 'Meet Ash Shaw — an Aquarian ADHD creative based in Cape Town, South Africa, painting bold neon and UV face art at psytrance festivals worldwide since 2019. His story, his wiring, his evolution.'
```

**Change:** "based in Berlin" → "based in Cape Town, South Africa"

---

### ✅ T02: Update Contact Page SEO Meta Description
**File:** `/data/mock/seo.ts`  
**Line:** 191  
**Priority:** P0 (CRITICAL — search engine visibility)

**Current:**
```typescript
description: 'Get in touch with Ash Shaw for festival makeup collaborations, art projects, and creative partnerships. Based in Berlin, available internationally.'
```

**Replace with:**
```typescript
description: 'Get in touch with Ash Shaw for festival makeup collaborations, art projects, and creative partnerships. Based in Cape Town, South Africa, available internationally.'
```

**Change:** "Based in Berlin" → "Based in Cape Town, South Africa"

---

### ✅ T03: Rewrite Press Biography
**File:** `/data/mock/pages/press.ts`  
**Line:** 20  
**Priority:** P0 (CRITICAL — official press bio, high copy-paste likelihood)

**Current:**
```typescript
content: 'Ash Shaw is a makeup artist and creative technologist based in Berlin, Germany. His journey began in the vibrant underground scene of 2019, where he first experimented with UV-reactive paints. Since then, he has developed a signature style that fuses "Atomic Black" minimalism with explosive neon color palettes.\n\nAsh is not just a makeup artist but a visual storyteller who believes in the transformative power of adornment. His work is strictly non-commercial and driven by artistic expression, focusing on the connection between the performer and the audience. He is a regular contributor to the visual landscape of festivals like Ozora and MoDem, and his tutorials have inspired a growing community of aspiring artists.\n\nBeyond makeup, Ash advocates for accessibility in digital spaces and sustainable artistic practices.'
```

**Replace with:**
```typescript
content: 'Ash Shaw is a makeup artist and creative technologist based in Cape Town, South Africa. His journey began in the vibrant underground scene of 2019, where he first experimented with UV-reactive paints. Since then, he has developed a signature style that fuses "Atomic Black" minimalism with explosive neon color palettes.\n\nAsh follows an annual creative cycle that fuels his artistic energy: based in Woodstock, Cape Town, he travels to Berlin each May for the techno season, returns to South Africa in August-September to swap bicycles, then relocates to Koh Phangan, Thailand (September-November) for Muay Thai training, triathlon, and remote work before returning to Cape Town for the South African summer festival season.\n\nAsh is not just a makeup artist but a visual storyteller who believes in the transformative power of adornment. His work is strictly non-commercial and driven by artistic expression, focusing on the connection between the performer and the audience. He is a regular contributor to the visual landscape of festivals like Ozora and MoDem, and his tutorials have inspired a growing community of aspiring artists.\n\nBeyond makeup, Ash advocates for accessibility in digital spaces and sustainable artistic practices.'
```

**Changes:**
1. "based in Berlin, Germany" → "based in Cape Town, South Africa"
2. Added new paragraph explaining yearly travel cycle with accurate timeline
3. Mentions Woodstock homeownership
4. Mentions Koh Phangan training (Muay Thai, triathlon)

---

### ✅ T04: Update General FAQ Answer (Location)
**File:** `/data/mock/sections/faq.ts`  
**Line:** 59  
**Priority:** P0 (HIGH — public-facing FAQ)

**Current:**
```typescript
answer: "He follows the sun and the sound. He's based in Berlin for the techno season and travels internationally for psytrance festivals. Check his social media to see where he is right now!"
```

**Replace with:**
```typescript
answer: "He follows the sun and the sound. He's based in Cape Town, South Africa, and travels annually to Berlin (May), Thailand (Sep-Nov for Muay Thai and triathlon training), and international festivals across Europe and Asia. Check his social media to see where he is right now!"
```

**Changes:**
1. "based in Berlin for the techno season" → "based in Cape Town, South Africa"
2. Added specific travel destinations with timing
3. Added Muay Thai and triathlon training context for Thailand

---

### ✅ T05: Update About Page FAQ Answer
**File:** `/data/mock/sections/faq.ts`  
**Line:** 98  
**Priority:** P0 (HIGH — public-facing FAQ)

**Current:**
```typescript
answer: "Ash is based in Berlin, Germany. He uses the city as his home base between international festival trips across Europe, Southeast Asia, and beyond."
```

**Replace with:**
```typescript
answer: "Ash is based in Cape Town, South Africa, where he owns a house in Woodstock. He travels annually to Berlin in May, then to Koh Phangan, Thailand (Sep-Nov) for training and remote work, before returning to South Africa for summer festival season. This yearly cycle fuels his creative energy and artistic inspiration."
```

**Changes:**
1. "based in Berlin, Germany" → "based in Cape Town, South Africa"
2. Added Woodstock homeownership detail
3. Replaced "home base between trips" with accurate yearly cycle description
4. Emphasized creative inspiration from the travel cycle

---

### ✅ T06: Update Artistry Page FAQ Answer
**File:** `/data/mock/pages/artistry.ts`  
**Line:** 254  
**Priority:** P0 (HIGH — public-facing FAQ)

**Current:**
```typescript
answer: 'Ash is based in Berlin, Germany. He uses the city as his home base between international festival trips across Europe, Southeast Asia, and beyond.'
```

**Replace with:**
```typescript
answer: 'Ash is based in Cape Town, South Africa, where he owns a house in Woodstock. He travels annually to Berlin in May, then to Koh Phangan, Thailand (Sep-Nov) for Muay Thai training, triathlon, and remote work, before returning to South Africa for summer festival season. This yearly cycle fuels his creative energy and artistic inspiration.'
```

**Changes:** Same as T05 (duplicate FAQ answer)

---

### ✅ T07: Update Contact Page Description
**File:** `/data/mock/ui/contact.ts`  
**Line:** 13  
**Priority:** P0 (HIGH — Contact page intro)

**Current:**
```typescript
description: "I'm a nomad of the psytrance scene. Based in Berlin, chasing festivals internationally. Open to creative collaborations and spontaneous projects worldwide."
```

**Replace with:**
```typescript
description: "I'm a nomad of the psytrance scene. Based in Cape Town, South Africa, I travel annually to Berlin (May), Koh Phangan, Thailand (Sep-Nov for training), and festivals worldwide. Open to creative collaborations and spontaneous projects across all continents."
```

**Changes:**
1. "Based in Berlin" → "Based in Cape Town, South Africa"
2. Added specific travel cycle (Berlin May, Thailand Sep-Nov)
3. Added "training" context for Thailand
4. "internationally" → "across all continents" (clearer global reach)

---

## P1 Tasks — Biographical Content Accuracy

### ✅ T08: Correct About Page Timeline Description
**File:** `/data/mock/pages/about.ts`  
**Line:** 42  
**Priority:** P1 (HIGH — main About page content)

**Current:**
```typescript
text: 'My life is a continuous loop of summer and sound. Based in Cape Town, I migrate to Berlin (May-Aug) for the techno season, then to Thailand (Aug-Nov) for the island psytrance circuit. I am a nomad of the scene.'
```

**Replace with:**
```typescript
text: 'My life is a continuous loop of summer and sound. Based in Cape Town, South Africa, I travel annually to Berlin each May for the techno season, return to swap bicycles in August-September, then relocate to Koh Phangan, Thailand (Sep-Nov) for Muay Thai training, triathlon, remote work, and the island psytrance circuit before returning to Cape Town in November for South African summer. I am a nomad of the scene.'
```

**Changes:**
1. "migrate to Berlin (May-Aug)" → "travel annually to Berlin each May" (Berlin is May only, not May-Aug)
2. Added "return to swap bicycles in August-September" (missing from current description)
3. "Thailand (Aug-Nov)" → "Koh Phangan, Thailand (Sep-Nov)" (corrected timeline and added specific location)
4. Added "Muay Thai training, triathlon, remote work" (missing context for Thailand stays)
5. Added "before returning to Cape Town in November for South African summer" (completes the cycle)

---

## P2 Tasks — Consistency Improvements

### ✅ T09: Add Yearly Cycle Detail to Artistry Hero Description
**File:** `/data/mock/pages/artistry.ts`  
**Line:** 102  
**Priority:** P2 (MEDIUM — already correct, but could be more detailed)

**Current:**
```typescript
description: 'A journey through sound and color. Based in Cape Town, chasing summers in Berlin and Thailand. I bring neon visions to life on the world\'s biggest psytrance dancefloors.'
```

**Suggested Enhancement (optional):**
```typescript
description: 'A journey through sound and color. Based in Cape Town, South Africa, I chase summers globally — Berlin in May, Koh Phangan, Thailand for training and island life (Sep-Nov), and international festivals year-round. I bring neon visions to life on the world\'s biggest psytrance dancefloors.'
```

**Note:** This is optional — current version is technically correct, just less detailed.

---

### ✅ T10: Add Woodstock Homeownership to About Hero Description
**File:** `/data/mock/pages/about.ts`  
**Line:** 20  
**Priority:** P2 (MEDIUM — adds personal detail)

**Current:**
```typescript
description: 'A journey through sound and color. Based in Cape Town, chasing summers in Berlin and Thailand. I bring neon visions to life on the world\'s biggest psytrance dancefloors.'
```

**Suggested Enhancement (optional):**
```typescript
description: 'A journey through sound and color. Based in Woodstock, Cape Town, I chase summers globally — Berlin in May, Koh Phangan, Thailand (Sep-Nov for training), and international festivals. I bring neon visions to life on the world\'s biggest psytrance dancefloors.'
```

**Changes:**
1. "Cape Town" → "Woodstock, Cape Town" (adds specific neighborhood detail)
2. "chasing summers in Berlin and Thailand" → "chase summers globally — Berlin in May, Koh Phangan, Thailand (Sep-Nov for training), and international festivals" (more specific)

---

## P3 Tasks — Documentation Updates

### ✅ T11: Update Guidelines.md Location References
**File:** `/Guidelines.md`  
**Line:** Various (Section 1: Personal Identity & Content Scope)  
**Priority:** P3 (LOW — internal documentation)

**Action:** Review Section 1 and update any location references to ensure consistency with the corrected biography.

**Current Reference (Line 67):**
```markdown
- **Locations:** Focus strictly on **Berlin** and **International Festivals**.
```

**Replace with:**
```markdown
- **Locations:** Focus strictly on **Cape Town (home base)**, **Berlin (May visits)**, **Thailand (Koh Phangan training base, Sep-Nov)**, and **International Festivals**.
```

---

## Completion Checklist

- [x] **T01:** About Page SEO (seo.ts line 35) ✅ COMPLETE
- [x] **T02:** Contact Page SEO (seo.ts line 191) ✅ COMPLETE
- [x] **T03:** Press Biography (press.ts line 20) ✅ COMPLETE
- [x] **T04:** General FAQ (faq.ts line 59) ✅ COMPLETE
- [x] **T05:** About FAQ (faq.ts line 98) ✅ COMPLETE
- [x] **T06:** Artistry FAQ (artistry.ts line 254) ✅ COMPLETE
- [x] **T07:** Contact Page Description (contact.ts line 13) ✅ COMPLETE
- [x] **T08:** About Page Timeline (about.ts line 42) ✅ COMPLETE
- [ ] **T09:** Artistry Hero Description (artistry.ts line 102) — OPTIONAL (deferred)
- [ ] **T10:** About Hero Description (about.ts line 20) — OPTIONAL (deferred)
- [x] **T11:** Guidelines.md Location References ✅ COMPLETE

---

## Testing & Verification

After completing all tasks, verify:

1. **SEO Meta Descriptions:** Search "site:ash-shaw-portfolio.com" and check meta descriptions show "Cape Town"
2. **FAQ Consistency:** All FAQ answers mention Cape Town as base, not Berlin
3. **Timeline Accuracy:** All yearly cycle descriptions match:
   - May: Berlin
   - Aug-Sep: South Africa (bicycle swap)
   - Sep-Nov: Thailand (Koh Phangan, training)
   - Nov: Return to South Africa (summer season)
4. **Press Bio:** Official biography correctly positions Cape Town as home base with full travel cycle
5. **No Contradictions:** No remaining instances of "based in Berlin" or "Berlin-based"

---

**Task List Created:** March 3, 2026  
**Estimated Time:** 45-60 minutes  
**Files to Modify:** 6 data files, 1 guideline file