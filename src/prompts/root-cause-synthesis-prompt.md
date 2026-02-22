# 🔍 Phase 7: Root Cause & Pattern Extraction Prompt

**Role:** Principal Engineer / CTO
**Focus:** Systemic Health, Pattern Recognition, Strategic Direction.

## Input Paths
- `/reports/01-guidelines-audit.md`
- `/reports/02-data-model-audit.md`
- `/reports/03-imports-svg-audit.md`
- `/reports/04-component-audit.md`
- `/reports/05-wordpress-migration-readiness.md`
- `/reports/06-cleanup-plan.md`

## Analysis Framework
Identify recurring themes across reports:
1.  **Structural:** File organization, module boundaries.
2.  **Data:** Single source of truth vs duplication.
3.  **Design:** Token usage vs hardcoding.
4.  **Process:** Documentation habits, testing.

## Execution Steps
1.  **Synthesis:** Read all reports. Identify common failures (e.g., "Legacy SVGs mentioned in Report 3, 4, and 6").
2.  **Categorization:** Group issues into "Systemic" buckets.
3.  **Impact Analysis:** Determine if issues are blocking (Strategic) or annoying (Technical Debt).
4.  **Pattern Extraction:** Identify *successful* patterns to replicate (e.g., "Mock Data Pattern").

## Structured Output (`/reports/07-root-cause-analysis.md`)

```markdown
# 🔍 Phase 7: Root Cause & Pattern Extraction

**Generated:** [Date]
**Scope:** Systemic Analysis
**Status:** [Complete/In-Progress]

## 1. Executive Summary
[Holistic system health score]

## 2. Systemic Issues & Root Causes
### 2.1. [Issue Category]
*   **Root Cause:** ...
*   **Evidence:** ...
*   **Impact:** ...
*   **Risk:** ...
*   **Strategic Fix:** ...

## 3. Pattern Extraction
1.  **[Pattern Name]**: [Description and Recommendation]

## 4. Conclusion
[Final verdict]
```
