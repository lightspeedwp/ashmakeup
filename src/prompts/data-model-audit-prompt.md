# 🗃 Phase 2: Data Model Audit Prompt

**Role:** Data Architect & CMS Integration Specialist
**Focus:** Type Integrity, Mock Data Quality, Migration Readiness.

## Input Paths
- `/data/` (and all subdirectories)
- `/content/` (if any markdown exists)

## Scoring Framework
Evaluate each data file on a scale of **1-5**:
1.  **Broken:** Invalid JSON, type errors, or untyped.
2.  **Legacy:** Works but violates current standards (e.g., old field names).
3.  **Functional:** Correctly typed, consistent.
4.  **Strong:** Strongly typed, extensible, well-documented.
5.  **Exemplary:** Perfect "Headless CMS" simulation, ready for migration.

## Execution Steps
1.  **Inventory:** List all files in `/data/types/` and `/data/mock/`.
2.  **Validation:** Check if mock data matches TypeScript interfaces.
3.  **Redundancy Check:** Identify duplicate fields or overlapping types.
4.  **Legacy Fields:** Identify `publishedDate` vs `publishedAt` inconsistencies.
5.  **Hardcoded Content:** Ensure all strings are in `/data/mock/` or `/content/`, not hardcoded in components.

## Structured Output (`/reports/02-data-model-audit.md`)

```markdown
# 🗃 Phase 2: Data Model Audit

**Generated:** [Date]
**Scope:** /data/
**Status:** [Complete/In-Progress]

## 1. Executive Summary
[Brief overview of data health]

## 2. File-by-File Audit
| File | Score (1-5) | Structure | Issues | Migration Readiness |
|------|-------------|-----------|--------|---------------------|
| ...  | ...         | ...       | ...    | ...                 |

## 3. Key Findings
### 3.1. [Topic]
[Analysis]

## 4. Recommendations
1. [Actionable Step]
2. [Actionable Step]
```
