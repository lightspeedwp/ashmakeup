# Sub-Audit 2: Video Showcase Expansion

**Parent:** [orchestrator.md](./orchestrator.md)  
**Created:** March 2, 2026  
**Output:** `/reports/content-expansion-phase6/02-video-expansion.md`

---

## Objective

Add 8-10 new video entries across festival coverage, tutorials, behind-the-scenes, and documentary content.

---

## Audit Steps

### Step 1: Review Current Videos
**File:** `/data/mock/videos.ts`

Document:
- Current count (baseline)
- Category distribution
- Date range coverage
- Content gaps

### Step 2: Identify Video Categories

**Required categories:**
- **Festival coverage** (UV painting sessions at festivals)
- **Tutorials** (UV makeup techniques)
- **Behind-the-scenes** (Preparation, travel, festival logistics)
- **Documentary** (Longer-form storytelling: cycling adventures, Berlin scene, Six Cats)
- **Cycling** (Endurance adventures, festival rides)

### Step 3: Generate Video Entries

For each video:
1. **Title** (sentence case)
2. **Category**
3. **Duration**
4. **Date** (backdate appropriately)
5. **Description** (2-3 sentences)
6. **Featured status**
7. **View count** (realistic for backdate)
8. **Thumbnail source** (unsplash query or figma:asset)

### Step 4: Content Pillar Alignment

Ensure videos support the 5 content pillars:
- UV makeup & festivals (40%)
- Cycling & endurance (20%)
- WordPress & web dev (20%) — Dev vlogs, WordCamp talks
- Six Cats cultivation (10%) — Garden tours, harvest process
- Tribes & community (10%) — Festival community, Berlin scene

---

## Output Format

### Section 1: Current State
- Total videos
- Category breakdown
- Date range
- Content gaps

### Section 2: Recommended Videos (8-10 entries)

For each video:
```markdown
#### Video N: [Title]
- **Category:** [Festival/Tutorial/BTS/Documentary/Cycling]
- **Duration:** MM:SS
- **Date:** YYYY-MM-DD
- **Description:** [2-3 sentences]
- **Featured:** Yes/No
- **Views:** [Realistic count]
- **Pillar:** [Content pillar alignment]
- **Thumbnail:** [unsplash query]
```

### Section 3: Pillar Balance Analysis
- Current vs new distribution
- Gap closure

---

## References

- [videos.ts](../../data/mock/videos.ts)
- [social-media-guidelines.md](../../docs/social-media-guidelines.md)

---

**Status:** Ready to execute
