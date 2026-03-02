# Ash Shaw Makeup – Full Design‑System Audit Prompt

## Purpose

This prompt initiates a **comprehensive, file‑wide audit** of the **Ash Shaw Makeup Portfolio** prototype in **Figma Make**. The objective is to ensure that **every page, artboard, frame, component and nested layer** adheres to the project’s **Neon vs Atomic Black** design system, strict BEM architecture, naming conventions and accessibility guidelines. The audit goes beyond design tokens to evaluate structural patterns, animations, motion preferences, and the integration of guidelines related to dark/light modes, neon identity, spacing, documentation, tasks and reporting. The audit surfaces deviations and creates a roadmap for remediation without directly editing the design.

### Value

* **Visual fidelity** – verifies that neon colours, gradients, animations and typography reflect the bold, cyber‑punk aesthetic defined in the design tokens and that dark/light modes are implemented correctly across all pages[\[1\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L261-L278).

* **System consistency** – ensures strict adherence to semantic BEM classes, absence of Tailwind utilities and no inline styles[\[2\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L74-L100). It also confirms that naming and folder structures match the guidelines (e.g., sections, blocks, patterns, parts).

* **Accessibility & performance** – checks that the design meets WCAG 2.1 AA criteria, honours prefers‑reduced‑motion, uses variable fonts to reduce payload and includes proper alt text and ARIA labels[\[3\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L296-L308).

* **Holistic guideline adherence** – ensures that the broader guidelines (neon system, light/dark mode, spacing, colours, animations, documentation) are correctly integrated into the design and that any missing documentation notes or cross‑references are identified.

### Risks

* The prototype contains extensive animations and neon effects; misinterpreting tokens may produce false positives. Compare each element to the design‑token documentation before flagging a violation.

* Do not modify any layers; all issues should be documented in a report and tasks.

### Next step

Follow the audit steps below. When complete, export a report to /reports/ and tasks to /tasks/task‑list.md.

---

## Audit Steps

### 1\. Inventory & classification

1. **List all pages, artboards and frames** in the Ash Shaw Makeup prototype—no matter how small. Note each page’s purpose (Home, About, Portfolio, Blog, Video, Podcast, etc.) and any hidden or draft content.

2. For every page, **inventory every layer**: text layers, shapes, gradient backgrounds, neon elements, icons, images, animations, components and variants. Record layer names and class names, making sure to capture nested elements within components.

3. **Capture style attributes** for each element: font family, size, weight, line height, letter spacing, fill/stroke colours, gradient definitions, border radius, shadows, glows, spacing, animations and motion preferences. Note any inline styles or Tailwind classes (both are banned)[\[2\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L74-L100).

4. **Classify each element** according to the design system’s content hierarchy: identify whether it belongs to a **Hero section**, **Card**, **Grid**, **Section** or **Template Part**. Use naming conventions to map elements back to the pattern guidelines. Record any elements that do not match a defined pattern.

### 2\. Typography compliance

1. Verify that only the authorised fonts are used: **Playfair Display** for headings (.font-heading), **Inter** for body text (.font-body) and **Righteous** for main hero titles (.font-title)[\[4\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L387-L394).

2. Check that font sizes, weights, line heights and letter spacing follow the scale defined in design-tokens/typography.md (e.g., .text-hero-h1, .text-section-h2, .text-body-p and corresponding fluid values)[\[5\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L279-L293). Flag any hard‑coded pixel sizes or unapproved classes.

3. Ensure that headings are semantically structured (H1–H6), and that each page contains one H1. Confirm that body text uses the correct Inter font and that Righteous is only used for hero titles.

4. Verify there are no Tailwind typography classes (e.g., text‑xl, font‑bold)—only semantic BEM classes are allowed[\[2\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L74-L100).

### 3\. Colour and gradient system

1. Identify all colours and gradients used. Ensure they reference the **neon colour tokens** defined in design-tokens/neon-colors.md (electric green, hot pink, royal blue, pure yellow, blazing orange, violet purple, aqua cyan, hot red) and the four **signature gradients** (Cyberpunk, Toxic Lime, Solar Flare, Hyperpop)[\[6\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L263-L273).

2. Check that backgrounds use **Atomic Black (\#0F0F0F)** or the appropriate neon gradient. Hard‑coded hex values outside the palette should be flagged.

3. Verify dark and light mode variants exist and maintain contrast ratios ≥4.5:1 for body text[\[7\]](https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/#:~:text=Leading%20,it%C2%A0is%C2%A0line%20spacing%20familiar%20to%C2%A0almost%20everybody). Neon colours may require lighter equivalents in light mode[\[6\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L263-L273).

4. Review animated gradients and ensure they match the defined animations in design-tokens/animations.md.

### 4\. Spacing & layout

1. Check that **spacing tokens** from design-tokens/spacing.md are used for padding, margin and gaps. These should be fluid and responsive (e.g., tokens for Mobile, Tablet, Desktop breakpoints)[\[8\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L279-L287). Flag any hard‑coded pixel values.

2. Verify that BEM classes define layout (e.g., .hero\_\_content, .card\_\_body), and there are no Tailwind utility classes for spacing (e.g., p‑4, gap‑8)[\[2\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L74-L100).

3. Ensure container widths and breakpoints align with the fluid width system defined in the guidelines (mobile compact, mobile, tablet portrait, tablet landscape, desktop)[\[9\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L279-L288).

### 5\. Borders, radii, shadows & glows

1. Confirm that corner radii follow the values defined in the design tokens (e.g., 4 px default and variations for sm/md/lg). No custom radii should be used.

2. Inspect shadows and glows. Shadows should utilise defined tokens (e.g., \--shadow-sm, \--shadow-lg), while glows must use neon‑colored glows defined in the neon system. Flag any undefined shadow or glow styles.

3. Check that transitions and animations use variables specified in design-tokens/animations.md and support prefers‑reduced‑motion[\[3\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L296-L308). Each animation should degrade gracefully when reduced motion is requested.

### 6\. Accessibility & usability

1. Evaluate contrast ratios for text and key UI elements; they must meet or exceed WCAG 2.1 AA guidelines (≥4.5:1 for body text)[\[7\]](https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/#:~:text=Leading%20,it%C2%A0is%C2%A0line%20spacing%20familiar%20to%C2%A0almost%20everybody).

2. Verify that all interactive components (buttons, links, inputs) have visible focus rings and states. Focus indicators should use neon colours with glows as defined in the accessibility guidelines[\[3\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L296-L308).

3. Ensure all images include alt text, and icons have ARIA labels.

4. Confirm that animations respect the prefers‑reduced‑motion setting: when the user prefers reduced motion, animations should slow down or be replaced with static states[\[3\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L296-L308).

### 7\. BEM architecture & content

1. **BEM and semantic naming:** verify that class names follow the strict BEM convention (.block, .block\_\_element, .block--modifier, .block\_\_element--modifier)[\[10\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L104-L109) and are semantically meaningful. Avoid generic names and ensure that names reflect the component’s purpose and pattern.

2. **Folder and frame organisation:** ensure that frames and components are organised by **sections**, **templates**, **patterns** and **blocks** as described in the guidelines. Each section (e.g., hero, about, portfolio-grid) should have its own frame with a clear name. There should be no mixing of patterns within a single frame.

3. **Documentation hooks:** where complex animations, gradients or interactions are used, confirm that comments or notes reference the appropriate guideline documents (e.g., neon system, animations) to help developers and writers. This improves maintainability and ensures that guidelines are easily discoverable.

4. **No Tailwind or inline styles:** identify any Tailwind utility classes or inline styles; they are strictly prohibited[\[2\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L74-L100). All styling should be encapsulated in classes using design tokens.

5. **Content placeholders:** ensure there is **no hard‑coded content** within the design; placeholders should reference the mock data system or API keys (for example, layer names referencing data keys rather than real copy)[\[11\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L110-L123). This helps maintain separation between design and content.

### 8\. Report compilation

1. Compose a Markdown report (/reports/ashmakeup-design-system-audit.md) including:

2. **Summary** – count of pages, elements audited and total violations by category.

3. **Violations** – table listing each violation (element name, location/page, guideline broken, description, recommended fix with token/class reference).

4. **Observations** – note any patterns or systemic issues (e.g., multiple components using Tailwind spacing, inconsistent neon colours across pages).

5. **Recommendations** – suggestions for updating guidelines or tokens if gaps are discovered.

6. Do not edit the Figma file during the audit; only report findings.

### 9\. Task list generation

1. Write tasks to /tasks/task‑list.md for each issue found. Each task should include a title, description, priority and status (default “To Do”).

2. Group similar issues where possible (e.g., “Replace all hard‑coded neon colours with design tokens”).

---

## Notes

* Always cross‑reference the design token files in /guidelines/design-tokens/ for correct values (neon colours, animations, typography, spacing).

* Use the TypeType article on kerning, tracking, leading and spacing for additional context on typographic best practices[\[7\]](https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/#:~:text=Leading%20,it%C2%A0is%C2%A0line%20spacing%20familiar%20to%C2%A0almost%20everybody)[\[12\]](https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/#:~:text=with%20kerning).

* Remember: **No Tailwind utilities or inline styles**—all styles must be applied via semantic BEM classes and variables[\[2\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L74-L100).

---

[\[1\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L261-L278) [\[2\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L74-L100) [\[3\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L296-L308) [\[4\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L387-L394) [\[5\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L279-L293) [\[6\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L263-L273) [\[8\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L279-L287) [\[9\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L279-L288) [\[10\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L104-L109) [\[11\]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md#L110-L123) Guidelines.md

[https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/Guidelines.md)

[\[7\]](https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/#:~:text=Leading%20,it%C2%A0is%C2%A0line%20spacing%20familiar%20to%C2%A0almost%20everybody) [\[12\]](https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/#:~:text=with%20kerning) The Differences between Kerning, Tracking, Leading | TypeType®

[https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/](https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/)