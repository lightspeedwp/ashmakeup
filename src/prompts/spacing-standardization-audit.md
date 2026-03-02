# 🎨 Spacing Standardization Audit Prompt

This prompt defines the scope and steps for auditing and standardizing the horizontal padding and vertical `blockGap` spacing across all primary sections and pages of the Ash Shaw Makeup Portfolio.

## 🎯 Objective
Ensure a consistent visual rhythm by applying unified semantic BEM classes for spacing.

## 📋 Audit Scope
1. **Horizontal Padding:** All primary sections and pages must use the unified `.px-horizontal-section` class or its equivalent token `--wp--preset--spacing--section-horizontal`.
2. **Vertical Rhythm:** All primary sections and pages must adhere to the 48px–80px vertical rhythm using `.section-spacing` or `.py-section`.
3. **Block Gap:** All flex/grid containers must use `--wp--preset--spacing--block-gap` (fluid-md) or its helper classes `.gap-block-sm/md/lg`.
4. **BEM Architecture:** Ensure no Tailwind spacing utilities (e.g., `px-4`, `py-8`, `gap-4`) are used.
5. **Container Alignment:** Ensure all parent containers use `.container-wide` (1440px) or appropriate width variants with consistent alignment.

## 🛠️ Audit Steps
1. **Scan CSS Files:** Review all files in `/styles/blocks/` for hardcoded padding/margin/gap values and Tailwind utilities.
2. **Scan TSX Files:** Review all page and section components in `/components/pages/` and `/components/sections/` for inline styles or remaining Tailwind spacing classes.
3. **Verify Tokens:** Ensure `globals.css` tokens for section horizontal and vertical spacing are correctly defined and used.
4. **Check Mobile Overrides:** Verify that spacing scales correctly on smaller viewports using fluid tokens.
5. **Identify Deviations:** Document any sections or pages that do not match the unified spacing system.

## 📝 Expected Output
- A comprehensive report in `/reports/spacing-standardization/report.md` with detailed findings.
- An actionable task list in `/tasks/spacing-standardization-tasks.md`.

## 🔗 References
- [CSS Architecture Guide](../guidelines/css-architecture.md)
- [Spacing Tokens Reference](../guidelines/design-tokens/spacing.md)
- [Guidelines.md](../guidelines/Guidelines.md)
