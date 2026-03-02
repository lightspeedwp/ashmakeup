# Sub-Audit 4: Sticker Design Expansion

**Parent:** [orchestrator.md](./orchestrator.md)  
**Created:** March 2, 2026  
**Output:** `/reports/content-expansion-phase6/04-sticker-expansion.md`

---

## Objective

Add 10-15 new UV-reactive sticker designs that align with the Neon vs Atomic Black aesthetic and festival/psytrance culture.

---

## Audit Steps

### Step 1: Review Current Stickers
**File:** `/data/mock/stickers.ts`

Document:
- Current count (baseline: 26 entries)
- Theme distribution
- Color palette usage
- Size/format variety

### Step 2: Define Sticker Themes

**Theme categories:**
1. **Psytrance symbols** — Sacred geometry, fractals, mandalas, chakras
2. **Festival culture** — Dancefloor phrases, UV symbols, bassline visuals
3. **Neurodivergent pride** — ADHD, Aquarius, "wired different" themes
4. **Cycling & endurance** — Bicycles, mountains, roads, badges
5. **Six Cats branding** — Cat silhouettes, cannabis leaves, green garden symbols
6. **Berlin scene** — Club culture, techno symbols, warehouse aesthetics
7. **Neon typography** — Motivational phrases, lyrics, mantras

### Step 3: Generate Sticker Designs

For each sticker:
1. **Title** (sentence case)
2. **Theme category**
3. **Description** (1-2 sentences)
4. **Neon colors used** (electric green, hot pink, royal blue, etc.)
5. **Size** (Small: 3", Medium: 5", Large: 7", Die-cut)
6. **UV reactive:** Yes (all stickers)
7. **Price:** $3–$8 (⚠️ **Note:** Non-commercial project — prices for reference only, not for sale)

### Step 4: Neon Color Distribution

Ensure balanced use of the 8 neon colors:
- Electric green (`#39FF14`)
- Hot pink (`#FF10F0`)
- Royal blue (`#4169E1`)
- Pure yellow (`#FFFF00`)
- Blazing orange (`#FF6600`)
- Violet purple (`#9D00FF`)
- Aqua cyan (`#00FFFF`)
- Hot red (`#FF073A`)

---

## Output Format

### Section 1: Current State
- Total stickers (baseline: 26)
- Theme breakdown
- Color usage
- Size distribution

### Section 2: Recommended Stickers (10-15 designs)

For each sticker:
```markdown
#### Sticker N: [Title]
- **Theme:** [Psytrance/Festival/Neurodivergent/Cycling/Six Cats/Berlin/Typography]
- **Description:** [1-2 sentences]
- **Colors:** [List neon colors]
- **Size:** [Small 3" / Medium 5" / Large 7" / Die-cut]
- **UV Reactive:** Yes
- **Price:** $X (reference only)
```

### Section 3: Theme & Color Balance
- Theme distribution (current vs new)
- Neon color usage analysis
- Size variety

---

## Design Guidelines

**Aesthetic requirements:**
- ✅ High contrast (neon on atomic black)
- ✅ Bold outlines (2-3px minimum for visibility)
- ✅ Simple, recognizable shapes (festival-ready)
- ✅ UV reactive compatibility (all designs)
- ✅ Festival culture alignment (psytrance, techno, dancefloor)

**Content rules:**
- ✅ Sentence case for all text elements
- ✅ No copyrighted symbols/logos
- ✅ Personal art project scope (non-commercial)

---

## References

- [stickers.ts](../../data/mock/stickers.ts)
- [neon-colors.md](../../guidelines/design-tokens/neon-colors.md)
- [Guidelines.md](../../guidelines/Guidelines.md) — Personal Art Project scope

---

**Status:** Ready to execute
