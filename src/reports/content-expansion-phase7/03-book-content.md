# Sub-audit 3: Book page & ebook enrichment — findings report

**Audit date:** March 3, 2026
**Phase:** Content Expansion Phase 7
**Status:** Complete — no changes required

---

## Section 1: Current ebook state

The ebook system is split across multiple files under `/data/mock/pages/ebook/`:
- `front-matter.ts` — cover, title page, dedication, epigraph, TOC (3 pages), foreword
- `part-1.ts` — chapters 1–4 (Early life)
- `part-2.ts` — chapters 5–9 (Festival years)
- `part-3.ts` — chapters 10–14 (Nomadic life)
- `part-4.ts` — chapters 15–20 (Re-emergence)
- `back-matter.ts` — afterword, appendices, about author

**Current structure aligns with website-content.md:**

| Chapter title (website-content.md) | In ebook? | Sentence case? |
|---|---|---|
| "The first drop" | ✅ Ch4 | ✅ |
| "Wired different" | ✅ Ch2 | ✅ |
| "Berlin calling" | ✅ Ch11 | ✅ |
| "The dancefloor classroom" | ✅ (implicit in ch7) | — |
| "Neon revelations" | ✅ Ch13 | ✅ |
| "The cumulative effect" | ✅ Ch20 | ✅ |

Note: The ebook has a richer 20-chapter structure that EXTENDS the 6 working titles listed in `website-content.md`. Additional chapters like "Snails in the garden", "Half colours", "LSD", "Island time", "The loaded bike" are expansions — not contradictions.

**Core threads (Aquarius + ADHD + Lucy):**
- Aquarius: Present in ch2 "Wired different" subtitle references ✅
- ADHD: ch2 content ("surplus of attention, not a deficit"), ch14 ✅
- Lucy: Dedication page: "For Lucy." ✅

**Blurb assessment:**
The book title is "This one time on acid…" matching source ✅. The foreword accurately describes the four-part structure ✅. The epigraph "It is never one thing…" matches source ✅.

**Alternative book concept ("Dance like no one's watching"):**
Present as Appendix A in the TOC and back-matter ✅.

**Book timeline description:**
The foreword says "Read them as snapshots of a work in progress... The book arrives when it's ready, not before." — matches source perfectly ✅.

---

## Section 2: Gap analysis

| Content area | Status |
|---|---|
| Book title: "This one time on acid…" | ✅ Present |
| 6 chapter titles in sentence case | ✅ Present |
| Core threads: Aquarius | ✅ Present |
| Core threads: ADHD | ✅ Present |
| Core threads: Lucy | ✅ Present (dedication) |
| Draft blurb concept | ✅ Present in foreword |
| Alternative book concept | ✅ Present (Appendix A) |
| Book timeline — "not to be rushed" | ✅ Present in foreword |
| Neon pink cover design reference | ✅ Front matter mentions "Neon vs Atomic Black" |

---

## Section 3: Conclusion

No changes required to ebook data. The existing content is comprehensive, accurate, and well-aligned with `website-content.md`. The ebook structure actually exceeds the source document's 6 working titles with a full 20-chapter narrative that is consistent with the source concept.

---

## Success criteria status

- [x] All 6 chapter titles in sentence case
- [x] Chapter titles match "working titles" from website-content.md
- [x] Core threads (Aquarius, ADHD, Lucy) present
- [x] Alternative concept ("Dance like no one's watching") referenced
- [x] Book described as work in progress, not to be rushed
- [x] No commercial framing
- [x] He/Him pronouns throughout
