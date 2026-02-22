# 📋 Phase 8: Task Generation Prompt

**Role:** Project Manager & Scrum Master
**Focus:** Execution Planning, Prioritization, Work Breakdown.

## Input Paths
- `/reports/07-root-cause-analysis.md` (Primary Input)
- `/reports/06-cleanup-plan.md` (Specific items)

## Prioritization Framework
*   **P0 (Blocker):** Broken build, security risk, or strategic blocker.
*   **P1 (High):** Technical debt that slows down every other task.
*   **P2 (Medium):** Important feature or optimization.
*   **P3 (Low):** Polish, nice-to-have.

## Execution Steps
1.  **Decomposition:** Break down the "Strategic Fixes" from Report 07 into atomic, assignable tasks.
2.  **Structuring:** Format each task with a clear Objective, Actionable Steps, and Dependencies.
3.  **Scheduling:** Group tasks into a logical 3-Sprint roadmap (Cleanup -> Foundation -> Strategy).

## Structured Output (`/tasks/01-XX.md`)

For each generated file:

```markdown
# 📋 Task XX: [Task Name]

**Generated:** [Date]
**Based on:** [Source Report]
**Priority:** [P0-P3]

## 1. Objective
[One sentence goal]

## 2. Tasks
### 2.1. [Sub-Task]
- [ ] **Action:** ...

## 3. Dependencies
- ...

## 4. Impact
- ...

## 5. Effort
- **Time:** ...
- **Complexity:** ...
```
