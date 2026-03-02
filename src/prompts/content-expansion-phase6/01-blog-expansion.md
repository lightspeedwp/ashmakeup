# Sub-Audit 1: Blog Post Expansion

**Parent:** [orchestrator.md](./orchestrator.md)  
**Created:** March 2, 2026  
**Output:** `/reports/content-expansion-phase6/01-blog-expansion.md`

---

## Objective

Identify ebook chapters suitable for conversion to blog posts and generate 5-7 new backdated entries that align with the social media content pillars.

---

## Audit Steps

### Step 1: Review Current Blog Posts
**File:** `/data/mock/blog/blog-posts.ts`

Document:
- Current count (baseline: 11 posts)
- Featured posts (baseline: 5 featured)
- Category distribution
- Date range coverage
- Which ebook chapters already converted

### Step 2: Review Ebook Content
**File:** `/data/mock/pages/ebook-pages.ts`

Identify chapters that:
- ✅ Have standalone narrative value (not dependent on surrounding chapters)
- ✅ Align with content pillars (UV makeup, festivals, cycling, WordPress, Six Cats, tribes)
- ✅ Have clear "hook" for blog audience
- ✅ Are 400-800 words (suitable blog length)
- ✅ Haven't been converted yet

**Already converted (Phase 4):**
- "Six Cats: the green garden begins" (Chapter 5)
- "Berlin called, I answered" (Chapter 4)
- "Twenty-three years of LightSpeed" (Chapter 19)
- "The tribes that made me" (Appendix B)

### Step 3: Review Content Pillars
**File:** `/docs/social-media-guidelines.md`

Target distribution for new posts:
- **UV makeup & festivals:** 40% (2-3 posts)
- **Cycling & endurance:** 20% (1-2 posts)
- **WordPress & web dev:** 20% (1 post)
- **Six Cats cultivation:** 10% (1 post)
- **Tribes & community:** 10% (0-1 post — Appendix B already covered)

### Step 4: Generate Candidate List

For each candidate chapter:
1. **Chapter number & title**
2. **Content pillar alignment**
3. **Proposed blog title** (sentence case)
4. **Proposed slug**
5. **Proposed category** (Education, Tutorial, Festival, Travel, Insights)
6. **Proposed date** (backdate to historically accurate timeframe)
7. **Excerpt** (2-3 sentences)
8. **Featured status** (yes/no)
9. **Estimated word count**
10. **Reading time**

### Step 5: Select Final 5-7 Posts

Criteria for selection:
- Diverse category representation
- Balanced content pillar coverage
- Chronological spread (2019-2026)
- Mix of featured/non-featured
- No duplicate topics with existing posts

---

## Output Format

### Section 1: Current State Analysis
- Total blog posts
- Category breakdown
- Content pillar coverage gaps
- Date range gaps

### Section 2: Ebook Chapter Audit
- Total chapters reviewed (20 chapters + 2 appendices)
- Chapters already converted (4)
- Chapters suitable for conversion (list with rationale)
- Chapters not suitable (list with rationale)

### Section 3: Recommended Blog Posts (5-7 entries)

For each post:
```markdown
#### Post N: [Title]
- **Source:** Chapter X: "Chapter Title"
- **Pillar:** [UV Makeup/Cycling/WordPress/Six Cats/Tribes]
- **Category:** [Education/Tutorial/Festival/Travel/Insights]
- **Slug:** `chapter-slug`
- **Date:** YYYY-MM-DD (backdate rationale)
- **Featured:** Yes/No
- **Word count:** ~XXX words
- **Reading time:** X min
- **Excerpt:** [2-3 sentences]
- **Why this chapter:** [Rationale for selection]
```

### Section 4: Content Pillar Balance

Table showing:
- Current pillar distribution (11 posts)
- New posts pillar distribution (5-7 posts)
- Final pillar distribution (16-18 posts)
- Gap analysis

---

## Success Criteria

- [ ] 5-7 blog posts identified
- [ ] All content pillars represented
- [ ] Chronological spread (no clustering)
- [ ] Mix of featured/regular posts
- [ ] All titles in sentence case
- [ ] All dates historically accurate
- [ ] No duplicate topics

---

## References

- [blog-posts.ts](../../data/mock/blog/blog-posts.ts) — Current blog data
- [ebook-pages.ts](../../data/mock/pages/ebook-pages.ts) — Ebook content source
- [social-media-guidelines.md](../../docs/social-media-guidelines.md) — Content pillars
- [Guidelines.md](../../guidelines/Guidelines.md) — Sentence case rule

---

**Status:** Ready to execute  
**Next:** Run audit and write report
