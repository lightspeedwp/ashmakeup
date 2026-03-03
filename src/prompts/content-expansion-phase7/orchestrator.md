# Content Expansion Phase 7 — Orchestrator Prompt

**Created:** March 3, 2026
**Version:** 1.0.0
**Workflow:** Multi-audit orchestrator (6 sub-audits)
**Output:** `/reports/content-expansion-phase7/` + `/tasks/content-expansion-phase7-tasks.md`

---

## Context & Background

Phase 6 is complete. The codebase now contains:
- **18 blog posts** (including ebook-to-blog conversions)
- **11 video entries** (diverse categories: festival, tutorial, BTS, documentary, cycling)
- **42 portfolio entries** across all categories
- **40 sticker designs** (UV-reactive, psytrance-aligned)

**New input:** `/docs/website-content.md` has been manually updated by Ash with rich biographical, personal, and professional content that is **not yet reflected in the website**. This is the primary source for Phase 7.

**Old prompts merged into this orchestrator** (now deleted):
- `content-accuracy-audit.md` → Sub-audit 05
- `content-audit-phase3.md` → Sub-audit 05 (merged)
- `content-expansion-redesign.md` → Sub-audits 03, 04, 06
- `location-biography-audit.md` → Sub-audit 05 (merged)
- `content-expansion-phase6/` folder → All completed; tasks superseded

---

## Objective

Integrate the new content from `/docs/website-content.md` into the site's mock data, enriching pages that are currently sparse. Priority is given to **people stories**, **brand depth**, and **factual accuracy** — not raw volume.

---

## Sub-Audits (Execute in Order)

### 1. Six Cats page enrichment
**Prompt:** [01-six-cats-expansion.md](./01-six-cats-expansion.md)
**Goal:** Expand `/data/mock/pages/six-cats.ts` with individual cat profiles, cultivation processes, grading system, and packaging story from `website-content.md`
**Output:** `/reports/content-expansion-phase7/01-six-cats-expansion.md`

### 2. LightSpeed deeper stories
**Prompt:** [02-lightspeed-stories.md](./02-lightspeed-stories.md)
**Goal:** Expand LightSpeed sub-page data with the BarCamp 2006 pivot, internship programme, extended team profiles, WordCamp history, and AI workflow story
**Output:** `/reports/content-expansion-phase7/02-lightspeed-stories.md`

### 3. Book page & ebook enrichment
**Prompt:** [03-book-content.md](./03-book-content.md)
**Goal:** Use the "This one time on acid..." content from `website-content.md` to enrich the ebook data (ebook-pages.ts) and any existing book/press pages
**Output:** `/reports/content-expansion-phase7/03-book-content.md`

### 4. About page & biography enrichment
**Prompt:** [04-about-enrichment.md](./04-about-enrichment.md)
**Goal:** Use the professional profiles (v1 & v2), yearly cycle, legacy content, and identity material to enrich the About sub-pages and Press page
**Output:** `/reports/content-expansion-phase7/04-about-enrichment.md`

### 5. Content accuracy & location audit
**Prompt:** [05-content-accuracy.md](./05-content-accuracy.md)
**Goal:** Full audit of all mock data for factual errors, location framing, pronoun usage, sentence case, and stale statistics — using `website-content.md` as ground truth
**Output:** `/reports/content-expansion-phase7/05-content-accuracy.md`

### 6. New blog posts from website-content.md
**Prompt:** [06-new-blog-posts.md](./06-new-blog-posts.md)
**Goal:** Generate 4–6 new blog posts based on the new story material in `website-content.md` that does not overlap with the 18 existing posts
**Output:** `/reports/content-expansion-phase7/06-new-blog-posts.md`

---

## Primary Source: `/docs/website-content.md`

The following sections of `website-content.md` are the **primary source of new content** for Phase 7. Each section maps to one or more sub-audits:

| Section | Sub-audit |
|---|---|
| Book / "This one time on acid..." | Sub-audit 03 |
| Six Cats Club — full story | Sub-audit 01 |
| LightSpeed / Team & Workflow Update | Sub-audit 02 |
| LightSpeed / Company History | Sub-audit 02 |
| LightSpeed / Existing Team | Sub-audit 02 |
| LightSpeed / Internship Program | Sub-audit 02, 06 |
| LightSpeed / Senior Block Developer — José Abreu | Sub-audit 02 |
| LightSpeed / Professional Profile v1 & v2 | Sub-audit 04 |

---

## Execution Workflow

1. **Read source files first:**
   - `/docs/website-content.md` — Primary content source (MUST read in full)
   - `/data/mock/pages/six-cats.ts` — Current Six Cats page data
   - `/data/mock/pages/about-subpages.ts` — Current About sub-pages
   - `/data/mock/pages/ebook-pages.ts` — Current ebook content
   - `/data/mock/pages/press.ts` — Current Press/Bio page
   - `/data/mock/blog/posts.ts` — Current blog posts (18 posts)
   - `/data/mock/seo.ts` — All SEO metadata
   - `/data/README.md` — Data system documentation

2. **Execute sub-audits in order** (01 → 02 → 03 → 04 → 05 → 06)

3. **Write individual reports** to `/reports/content-expansion-phase7/`

4. **Generate consolidated task list** at `/tasks/content-expansion-phase7-tasks.md`

---

## Phase 7 Priorities

**P0 — Critical (do first):**
- Six Cats cat bios (rich new content, clear page gap)
- Content accuracy audit (factual errors affect credibility)
- LightSpeed BarCamp story (foundational brand narrative)

**P1 — High:**
- LightSpeed internship programme story
- About/Press enrichment from professional profiles
- Yearly cycle lifestyle content

**P2 — Medium:**
- Book chapter previews in ebook data
- New blog posts from internship/Six Cats/book content
- Legacy quotes and impact stories

**P3 — Lower:**
- Professional profile polishing (v1 vs v2 reconciliation)
- Origin reel content
- Additional sticker or video entries (not priority this phase)

---

## Success Criteria

- [ ] Six Cats page reflects all cat bios (6 living + 3 in memoriam) with personality-rich descriptions
- [ ] Six Cats cultivation content (living soil, rainwater harvesting, companion planting, worm tea, harvest phases) is in the data layer
- [ ] LightSpeed sub-page reflects BarCamp 2006 pivot, AI workflow, internship programme
- [ ] Ebook data enriched with "This one time on acid..." chapter previews and blurb
- [ ] About/Press page data uses the professional profile content
- [ ] Zero factual errors in public-facing data (dates, locations, stats)
- [ ] Zero "Berlin-based" or similar location framing errors
- [ ] All pronouns He/Him throughout
- [ ] All headings in sentence case
- [ ] LightSpeed age is "23 years" (2026) throughout
- [ ] 4–6 new blog posts with no topic duplication
- [ ] All content follows personal art project scope (non-commercial)

---

## Content Rules (Non-Negotiable)

- **NO Tailwind utilities** — strict BEM architecture only
- **NO hardcoded strings in components** — all content via `/data/mock/`
- **NO commercial intent** — no pricing, booking, shop features
- **NO weddings, corporate events, bridal** — excluded content
- **Sentence case** — all headings, titles, labels
- **He/Him pronouns** — Ash is male
- **Cape Town = home base** — Berlin is seasonal (May), Thailand is Sep–Nov
- **LightSpeed = 23 years** in 2026

---

## References

- [Guidelines.md](../../guidelines/Guidelines.md) — Master guidelines
- [website-content.md](../../docs/website-content.md) — Primary content source
- [Data System Documentation](../../data/README.md)
- [neon-colors.md](../../guidelines/design-tokens/neon-colors.md)
- [social-media-guidelines.md](../../docs/social-media-guidelines.md)

---

**Status:** Ready to execute
**Next step:** Run [01-six-cats-expansion.md](./01-six-cats-expansion.md)
