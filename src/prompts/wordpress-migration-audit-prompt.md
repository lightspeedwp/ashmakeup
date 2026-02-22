# 🧱 Phase 5: WordPress Migration Readiness Audit Prompt

**Role:** WordPress Solutions Architect
**Focus:** Platform Migration, Data Portability, Block Editor Compatibility.

## Input Paths
- `/components/` (Pattern identification)
- `/data/types/` (Schema identification)
- `/data/mock/` (Content volume)

## Scoring Framework
Evaluate readiness on a scale of **1-5**:
1.  **Blocked:** Requires total rewrite (e.g., direct DB queries, complex state).
2.  **Difficult:** Significant logic refactoring needed.
3.  **Feasible:** Mappable, but manual effort required.
4.  **Ready:** Mapped cleanly to WP concepts (CPTs, Patterns).
5.  **Native-Like:** Structure mirrors a Block Theme (JSON-driven, Component-based).

## Execution Steps
1.  **Component Mapping:** Map React components to WordPress Block Patterns, Template Parts, or Blocks.
2.  **Data Mapping:** Map TypeScript interfaces to WordPress Post Types, Taxonomies, and Meta Fields.
3.  **Gap Analysis:** Identify features that have no direct WP equivalent (e.g., Client-side routing state).
4.  **Strategy Selection:** Evaluate Headless (Next.js/React) vs Integrated (PHP Block Theme).

## Structured Output (`/reports/05-wordpress-migration-readiness.md`)

```markdown
# 🧱 Phase 5: WordPress Migration Readiness

**Generated:** [Date]
**Scope:** Architecture Analysis
**Status:** [Complete/In-Progress]

## 1. Executive Summary
[High-level readiness assessment]

## 2. Component Mapping
| React Component | WordPress Equivalent | Notes |
|-----------------|----------------------|-------|
| ...             | ...                  | ...   |

## 3. Data Model Mapping
| TS Interface | WordPress Object | Fields Mapping |
|--------------|------------------|----------------|
| ...          | ...              | ...            |

## 4. Migration Blockers & Risks
### 4.1. [Risk Area]
[Analysis and Mitigation]

## 5. Migration Strategy
1. [Step 1]
2. [Step 2]
```
