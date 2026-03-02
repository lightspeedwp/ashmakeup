# Sub-Audit 3: Portfolio Entry Expansion

**Parent:** [orchestrator.md](./orchestrator.md)  
**Created:** March 2, 2026  
**Output:** `/reports/content-expansion-phase6/03-portfolio-expansion.md`

---

## Objective

Add 15-20 new portfolio entries across all 5 categories (Festival, Editorial, Editorial Campaign, Tribal, Experimental).

---

## Audit Steps

### Step 1: Review Current Portfolio
**Files:** `/data/mock/portfolio/*.ts`

Document:
- Current count per category
- Date range coverage
- Location diversity
- Style diversity

### Step 2: Define Portfolio Categories

**Current categories:**
1. **Festival** — UV makeup at psytrance/techno festivals
2. **Editorial** — High-fashion UV editorial shoots
3. **Editorial Campaign** — Multi-image campaign series
4. **Tribal** — Cultural/spiritual aesthetic UV work
5. **Experimental** — Avant-garde, abstract, boundary-pushing

### Step 3: Generate Portfolio Entries

For each entry:
1. **Title** (sentence case)
2. **Category**
3. **Location** (Berlin, Cape Town, Thailand, festivals)
4. **Date** (backdate across 2019–2026)
5. **Description** (2-3 sentences)
6. **Techniques used** (UV reactive, neon gradients, geometric patterns, etc.)
7. **Featured status**
8. **Image source** (unsplash query — use "UV makeup neon festival" variations)

### Step 4: Location & Date Distribution

**Target locations:**
- Berlin (40%) — Clubs, warehouses, open-airs
- Festivals (30%) — Origin, Vortex, international festivals
- Cape Town (20%) — Studios, outdoor shoots
- Thailand (10%) — Koh Phangan, Chiang Mai

**Target dates:**
- 2019: 3 entries (early Berlin discovery)
- 2020: 2 entries (pre-COVID)
- 2021: 2 entries (pandemic pause)
- 2022: 3 entries (re-emergence)
- 2023: 4 entries (peak activity)
- 2024: 3 entries
- 2025: 2 entries
- 2026: 1 entry (recent)

---

## Output Format

### Section 1: Current State
- Total entries per category
- Date range per category
- Location distribution
- Featured entries count

### Section 2: Recommended Entries (15-20)

For each entry:
```markdown
#### Entry N: [Title]
- **Category:** [Festival/Editorial/Campaign/Tribal/Experimental]
- **Location:** [City/Festival]
- **Date:** YYYY-MM-DD
- **Description:** [2-3 sentences]
- **Techniques:** [UV reactive, geometric, gradient, etc.]
- **Featured:** Yes/No
- **Image:** [unsplash query]
```

### Section 3: Balance Analysis
- Category distribution (current vs new)
- Location distribution
- Date range coverage

---

## References

- [portfolio/*.ts](../../data/mock/portfolio/)
- [Guidelines.md](../../guidelines/Guidelines.md) — Neon vs Atomic Black aesthetic

---

**Status:** Ready to execute
