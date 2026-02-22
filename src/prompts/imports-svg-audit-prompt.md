# 🖼 Phase 3: Imports & SVG Audit Prompt

**Role:** Frontend Asset Auditor
**Focus:** Asset Hygiene, Performance, Maintainability, Technical Debt.

## Input Paths
- `/imports/` (and all subdirectories)
- `/components/` (scan for imports)

## Scoring Framework
Evaluate each `svg-*.ts` file on a scale of **1-5**:
1.  **Harmful:** Broken, unused, huge bundle size.
2.  **Opaque:** Magic string filenames, unmaintainable.
3.  **Functional:** Works but redundant (e.g., standard icon).
4.  **Acceptable:** Complex illustration that needs code splitting.
5.  **Exemplary:** Well-named, tree-shakable component (e.g., Lucide).

## Execution Steps
1.  **Inventory:** List all `svg-*.ts` files in `/imports/`.
2.  **Usage Tracing:** Grep the codebase for imports of these files.
3.  **Semantic Mapping:** Identify what visual asset each file represents (e.g., "Facebook Logo", "Menu Icon").
4.  **Redundancy Check:** Determine if a standard Lucide React icon exists.
5.  **Replacement Plan:** Propose specific Lucide replacements or inline SVGs.

## Structured Output (`/reports/03-imports-svg-audit.md`)

```markdown
# 🖼 Phase 3: Imports & SVG Audit

**Generated:** [Date]
**Scope:** /imports/
**Status:** [Complete/In-Progress]

## 1. Executive Summary
[Analysis of legacy SVG usage vs modern system]

## 2. File Analysis
| File | Usage Count | Semantic Meaning | Recommendation | Lucide Equivalent |
|------|-------------|------------------|----------------|-------------------|
| ...  | ...         | ...              | ...            | ...               |

## 3. Usage Pattern
[Code examples of how these imports are used]

## 4. Recommendations
1. [Actionable Step: Deprecate]
2. [Actionable Step: Replace]
```
