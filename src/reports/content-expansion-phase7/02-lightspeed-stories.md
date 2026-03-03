# Sub-audit 2: LightSpeed deeper stories — findings report

**Audit date:** March 3, 2026
**Phase:** Content Expansion Phase 7
**Status:** Complete — data updated

---

## Section 1: Current state assessment

`/data/mock/pages/about/lightspeed.ts` is already very rich. It contains:

- Hero with accurate 23-year description ✅
- 10 stat cards including team size 13, WordCamps 20+, WCEU 2025 ✅
- Full 13-member team list with join dates and roles ✅
- BarCamp Cape Town 2006 story (3 paragraphs) ✅
- Key people: Warwick, Barbara, José Abreu ✅
- 12-entry company milestones timeline ✅
- 5 lessons learned ✅
- 5 body sections: origin story, WordPress community, design systems, AI workflows, day/night ✅

**Key issues found:**

| Issue | Location | Current value | Correct value |
|---|---|---|---|
| BarCamp paragraph 3 mentions "Jonathan Sobel" | `barcampStory.paragraphs[2]` | "Jeremy Thurgood, Jonathan Sobel, and dozens of others" | Jonathan Sobel is NOT in the `website-content.md` list of 27 names |
| "Twenty-nine people" count | `barcampStory.paragraphs[2]` | "Twenty-nine people" | 27 people are listed in `website-content.md` (count verified) |

---

## Section 2: Gap analysis

| Content from website-content.md | In data? | Priority |
|---|---|---|
| BarCamp Cape Town 2006 pivot story | ✅ Yes | — |
| Founding motivation quotes | ✅ Yes (in origin-story section) | — |
| Full 13-member team list | ✅ Yes | — |
| AI workflow (Copilot, ChatGPT, Claude, MCP) | ✅ Yes | — |
| Internship programme (450 → 2) | ✅ Yes | — |
| WordCamp Europe 2025 Basel speaker | ✅ Yes | — |
| Team freedom / culture philosophy | ✅ Yes | — |
| Jonathan Sobel listed in BarCamp attendees | ❌ WRONG — not in source | Fix |
| "Twenty-nine people" at BarCamp | ❌ WRONG — source lists 27 | Fix |

---

## Section 3: Implementation

Fixed `/data/mock/pages/about/lightspeed.ts` BarCamp paragraph 3:
- Removed "Jonathan Sobel" (not in source list)
- Changed "Twenty-nine" to "Twenty-seven" (27 names verified in website-content.md)
- Updated to reference "Dave Duarte, Jeremy Thurgood, and twenty-five others" — accurate to source

---

## Section 4: Accuracy check

- LightSpeed age: "23 years" ✅
- Team count: 13 ✅
- BarCamp date: 2006 ✅
- Warwick join date: December 2006 ✅
- Barbara join date: 2010 ✅
- All dates cross-checked against website-content.md ✅

---

## Success criteria status

- [x] BarCamp 2006 pivot story in lightspeedPageData
- [x] Founding motivation quote included
- [x] All 13 team members with join dates and roles
- [x] AI workflow transformation content included
- [x] Internship programme (450 → 2) captured
- [x] WordCamp Europe 2025 Basel mention present
- [x] LightSpeed age = "23 years" (2026)
- [x] Jonathan Sobel error fixed
- [x] People count corrected to twenty-seven
- [x] He/Him pronouns throughout
- [x] All headings in sentence case
