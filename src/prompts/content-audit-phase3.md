# Content Audit — Phase 3: Sync Reference Files to Mock Data

**Created:** March 2, 2026
**Scope:** Compare `/content/` reference files against `/data/mock/pages/` and fix factual discrepancies
**Status:** Reusable template — re-run after any `/content/` file is updated

---

## Objective

Audit every `/content/` reference file against its corresponding mock data export. Identify and correct:

1. Factual errors (wrong dates, wrong locations, wrong stats)
2. Missing narrative content (key stories not yet reflected in mock data)
3. Tone / pronoun inconsistencies (He/Him, sentence case)
4. Stale numbers (company age, team size)

---

## Files to Audit

| Reference file | Mock data file | Key export |
|---|---|---|
| `/content/personal/berlin.md` | `/data/mock/pages/about-subpages.ts` | `berlinPageData` |
| `/content/personal/profile.md` | `/data/mock/pages/about-subpages.ts` | `bioPageData` |
| `/content/lightspeed/company-history.md` | `/data/mock/pages/about-subpages.ts` | `lightspeedPageData` |
| `/content/personal/six-cats.md` | `/data/mock/pages/six-cats.ts` | `sixCatsPageData` |
| `/content/personal/identity.md` | `/data/mock/pages/about-subpages.ts` | `bioPageData` |
| `/content/personal/profile.md` | `/data/mock/pages/history.ts` | `historyPageData` |

---

## Audit Steps

1. Read the reference file completely
2. Read the corresponding mock data export completely
3. For each factual claim in mock data, verify against reference file
4. Flag: wrong dates, wrong locations, wrong numbers, missing key stories
5. Flag: "Berlin-based" or "relocated to Berlin" errors (Cape Town is permanent home)
6. Flag: stale company age numbers (LightSpeed = 23 years as of 2026)
7. Fix all confirmed errors directly in the mock data file
8. Document all findings in `/reports/content-audit-phase3/report.md`
9. Mark completed items in `/tasks/task-list.md`

---

## Key Facts to Verify (Quick Reference)

- **Berlin**: First visit **2019** (not 2016). COVID pause. Returned **2022**. Seasonal only (late May – September). Cape Town is permanent home.
- **Bases**: Cape Town (permanent, owns house) / Berlin (summers) / Koh Phangan (training seasons)
- **LightSpeed**: Founded **2003**, **23 years** active as of 2026, team of **13**
- **Six Cats**: Founded **May 2019**, co-founder Barbara Kerr
- **Makeup started**: **July 2019** in Berlin
- **Pronouns**: He/Him throughout

---

## Sentence Case Check

All titles, headings, badge labels, and section titles in mock data exports must follow sentence case. Verify:
- Section `title` fields
- Hero `badge`, `title`, `description` fields
- Quick fact `label` / `value` fields

---

## Acceptance Criteria

- Zero factual discrepancies between reference files and mock data
- All location framing correct (Cape Town = home, Berlin = seasonal)
- Company age stat reads "23" (not "22+") in `lightspeedPageData`
- Bio `based` quick-fact reads "Cape Town (home base) / Berlin (summers)"
- All headings and titles in sentence case
