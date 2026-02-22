# 🧩 Phase 4: Component & Design Integrity Audit Prompt

**Role:** Frontend Architect & Design Systems Lead
**Focus:** Code Quality, Design System Enforcement, Accessibility, Performance.

## Input Paths
- `/components/` (all subdirectories)
- `/styles/blocks/` (all CSS modules)

## Scoring Framework
Evaluate each component on a scale of **1-5**:
1.  **Broken/Harmful:** Uses inline styles, hardcoded values, or broken types.
2.  **Legacy:** Works but violates core rules (e.g., Tailwind classes).
3.  **Functional:** Correctly structured, accessible, mostly clean.
4.  **Strong:** Uses Design Tokens, semantic HTML, strictly typed props.
5.  **Exemplary:** Fully documented, performant, reusable pattern.

## Execution Steps
1.  **Inventory:** List all React components.
2.  **Token Check:** Grep for hardcoded colors/spacing vs `--wp--preset--*` tokens.
3.  **Tailwind Scan:** Grep for utility classes (e.g., `flex`, `p-4`) in `.tsx`.
4.  **A11y Review:** Check for `aria-label`, `role`, semantic tags (`nav`, `main`, `article`).
5.  **Logic Separation:** Check for complex logic inside render vs custom hooks.

## Structured Output (`/reports/04-component-audit.md`)

```markdown
# 🧩 Phase 4: Component & Design Integrity Audit

**Generated:** [Date]
**Scope:** /components/
**Status:** [Complete/In-Progress]

## 1. Executive Summary
[Analysis of component health and design system adherence]

## 2. Component Scorecard
| Component | Type | Token Usage | A11y | Clean Code | Score (1-5) | Notes |
|-----------|------|-------------|------|------------|-------------|-------|
| ...       | ...  | ...         | ...  | ...        | ...         | ...   |

## 3. Key Findings
### 3.1. Design System Enforcement
[Analysis of BEM/CSS Module usage vs Tailwind violations]

## 4. Recommendations
1. [Refactor Step]
2. [Cleanup Step]
```
