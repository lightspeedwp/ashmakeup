# 🧹 Phase 6: Cleanup & Hygiene Audit Prompt

**Role:** Technical Debt Collector & Code Janitor
**Focus:** Removing dead code, consolidating documentation, and ensuring repository hygiene.

## Input Paths
- `/imports/` (Legacy SVG handling)
- `/components/` (Unused components)
- `/tasks/` (Stale task lists)
- `/reports/` (Duplicate or misplaced reports)
- `/guidelines/` (Redundant documentation)

## Scoring Framework
Evaluate the hygiene of the repository on a scale of **1-5**:
1.  **Cluttered:** Significant dead code, duplicate files, confusing structure.
2.  **Messy:** Noticeable legacy artifacts, but core structure is visible.
3.  **Acceptable:** Some minor cleanup needed, but generally organized.
4.  **Clean:** Minimal dead code, clear organization.
5.  **Pristine:** Zero dead code, perfect documentation hierarchy.

## Execution Steps
1.  **Dead Code Identification:**
    - Scan for unused files in `/components/` and `/imports/`.
    - Check for orphaned CSS files in `/styles/`.
2.  **Documentation Consolidation:**
    - Identify duplicate documentation across `/guidelines/`, `/reports/`, and root.
    - Flag old task lists in `/tasks/` for archiving.
3.  **Asset Verification:**
    - verify if `/imports/svg-*.ts` files are still in use or replaced by Lucide/Assets.
4.  **Report Organization:**
    - Ensure all audit reports are centralized in `/reports/`.

## Structured Output (`/reports/06-cleanup-plan.md`)

```markdown
# 🧹 Phase 6: Cleanup & Hygiene Audit

**Generated:** [Date]
**Scope:** Entire Repository
**Status:** [Complete/In-Progress]

## 1. Executive Summary
[Brief assessment of repo hygiene]

## 2. Dead Code & Assets
| File / Folder | Status | Action | Notes |
|---------------|--------|--------|-------|
| ...           | ...    | ...    | ...   |

## 3. Unused Components Check
[List of components checked and their status]

## 4. Documentation Consolidation
[Plan for merging/moving docs]

## 5. Duplicate Logic
[Identify any duplicate utility functions or patterns]

## 6. Action Plan
1. [Step 1]
2. [Step 2]
...
```
