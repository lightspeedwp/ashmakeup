# Content Expansion Phase 6 — Orchestrator Prompt

**Created:** March 2, 2026  
**Version:** 1.0.0  
**Workflow:** Multi-audit orchestrator (4 sub-audits)  
**Output:** `/reports/content-expansion-phase6/` + `/tasks/content-expansion-phase6-tasks.md`

---

## Objective

Expand content across four key areas to enrich the Ash Shaw Makeup Portfolio:

1. **Blog posts** — Convert ebook chapters to backdated blog posts
2. **Video showcase** — Expand video entries with festival coverage and tutorials
3. **Portfolio entries** — Add new makeup work across all categories
4. **Sticker designs** — Create additional UV-reactive sticker art entries

---

## Sub-Audits (Execute in Order)

### 1. Blog Post Generation
**Prompt:** [01-blog-expansion.md](./01-blog-expansion.md)  
**Goal:** Identify ebook chapters suitable for blog conversion, generate 5-7 new posts  
**Output:** `/reports/content-expansion-phase6/01-blog-expansion.md`

### 2. Video Showcase Expansion
**Prompt:** [02-video-expansion.md](./02-video-expansion.md)  
**Goal:** Add 8-10 new video entries (festivals, tutorials, behind-the-scenes)  
**Output:** `/reports/content-expansion-phase6/02-video-expansion.md`

### 3. Portfolio Entry Expansion
**Prompt:** [03-portfolio-expansion.md](./03-portfolio-expansion.md)  
**Goal:** Add 15-20 new portfolio entries across all categories  
**Output:** `/reports/content-expansion-phase6/03-portfolio-expansion.md`

### 4. Sticker Design Expansion
**Prompt:** [04-sticker-expansion.md](./04-sticker-expansion.md)  
**Goal:** Add 10-15 new UV-reactive sticker designs  
**Output:** `/reports/content-expansion-phase6/04-sticker-expansion.md`

---

## Execution Workflow

1. **Read reference data:**
   - `/data/mock/pages/ebook-pages.ts` (current ebook content)
   - `/data/mock/blog/blog-posts.ts` (current blog posts)
   - `/data/mock/videos.ts` (current videos)
   - `/data/mock/portfolio/*.ts` (current portfolio entries)
   - `/data/mock/stickers.ts` (current stickers)
   - `/docs/social-media-guidelines.md` (content pillars & voice)

2. **Execute sub-audits:** Run each prompt in sequence (1→2→3→4)

3. **Consolidate findings:** Write individual reports to `/reports/content-expansion-phase6/`

4. **Generate task list:** Create `/tasks/content-expansion-phase6-tasks.md` with all actionable items

---

## Success Criteria

- [ ] 5-7 new blog posts generated from ebook chapters
- [ ] 8-10 new video entries added (diverse categories)
- [ ] 15-20 new portfolio entries across all 5 categories
- [ ] 10-15 new UV-reactive sticker designs
- [ ] All content follows sentence case rule
- [ ] All content aligns with "Personal Art Project" scope (non-commercial)
- [ ] All dates are historically accurate and backdated appropriately
- [ ] All content uses He/Him pronouns for Ash

---

## Guidelines Compliance

**Content Rules:**
- ✅ Sentence case for all headings/titles
- ✅ He/Him pronouns (Ash is male)
- ✅ Berlin + International Festivals focus
- ✅ No weddings, corporate events, or bridal makeup
- ✅ No monetization, shop, or booking features

**Data Storage:**
- ✅ All new content in `/data/mock/` subdirectories
- ✅ No hardcoded strings in components
- ✅ TypeScript types maintained

**References:**
- [Guidelines.md](../../guidelines/Guidelines.md) — Project overview
- [social-media-guidelines.md](../../docs/social-media-guidelines.md) — Content pillars & voice
- [Data System Documentation](../../data/README.md) — Mock data structure

---

**Status:** Ready to execute  
**Next step:** Run [01-blog-expansion.md](./01-blog-expansion.md)
