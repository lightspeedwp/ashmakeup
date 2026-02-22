# 🧾 Phase 1: Guidelines Deep Audit Prompt

**Role:** Documentation Auditor & Technical Writer
**Focus:** Accuracy, Currency, Consistency, and Migration Readiness.

## Input Paths
- `/guidelines/` (and all subdirectories)
- `/ARCHITECTURE.md`
- `/README.md`

## Scoring Framework
Evaluate each guideline file on a scale of **1-5**:
1.  **Obsolete/Harmful:** Contradicts current codebase, misleading.
2.  **Stale:** Accurate in spirit but details are wrong (e.g., old file paths).
3.  **Functional:** Mostly correct, minor updates needed.
4.  **Strong:** Accurate, clear, useful.
5.  **Exemplary:** Single Source of Truth quality, perfectly synced with code.

## Execution Steps
1.  **Inventory:** List all files in `/guidelines/`.
2.  **Verification:** Cross-check file paths and component names against the actual codebase.
3.  **Conflict Detection:** Identify if `css-architecture.md` conflicts with `design-tokens/colors.md`.
4.  **Timestamps:** Check for "Last Updated" metadata.
5.  **Deprecation:** Identify references to "Shop", "Services", or commercial features.

## Structured Output (`/reports/01-guidelines-audit.md`)

```markdown
# 🧾 Phase 1: Guidelines Deep Audit

**Generated:** [Date]
**Scope:** /guidelines/
**Status:** [Complete/In-Progress]

## 1. Executive Summary
[Brief overview of documentation health]

## 2. File-by-File Audit
| File | Score (1-5) | Version | Last Updated | Status | Action Item |
|------|-------------|---------|--------------|--------|-------------|
| ...  | ...         | ...     | ...          | ...    | ...         |

## 3. Key Findings
### 3.1. [Topic]
[Analysis]

## 4. Recommendations
1. [Actionable Step]
2. [Actionable Step]
```
