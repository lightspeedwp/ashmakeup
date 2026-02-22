# 🎨 Ash Makeup Portfolio — Master Orchestrator Audit Prompt

**Repository:** `lightspeedwp/ashmakeup`
**Focus:** Design system integrity, data structure quality, import hygiene, migration readiness, and documentation governance.

---

# 🔒 Global Hard Rules

1. **No tasks before synthesis**
   * All audits must be completed.
   * `/reports/07-root-cause-analysis.md` must exist.
   * Tasks must reference ≥2 audit findings where possible.

2. **Docs-first discipline**
   * Write reports.
   * Then root-cause synthesis.
   * Then tasks.

3. **Every guideline file must be verified**
   * Add/update `Last reviewed: YYYY-MM-DD`
   * Mark outdated guidance clearly.
   * Identify conflicts between guideline docs.

---

# 🧠 Phase 0 — Repository Structure Mapping

**Goal:** Understand architectural intent before auditing.

**Output:** `/reports/00-repo-structure-map.md`

**Instructions:**
1. Map folder hierarchy.
2. Identify React component layout.
3. Identify Data model layout.
4. Identify SVG import usage.
5. Identify Pattern-like structures.
6. Identify any WP migration artifacts.

---

# 🧾 Phase 1 — Guidelines Deep Audit

**Goal:** Verify documentation accuracy and relevance.

**Output:** `/reports/01-guidelines-audit.md`

**Instructions:**
1. Audit `/guidelines/` for currency, conflicts, naming consistency.
2. update `Last reviewed:` date on each file.
3. Flag obsolete sections inline.

---

# 🗃 Phase 2 — Data Model Audit

**Goal:** Assess data quality and migration readiness.

**Output:** `/reports/02-data-model-audit.md`

**Instructions:**
1. Audit `/data/` for types, mock data structure, redundancy.
2. Identify hardcoded values and typing inconsistencies.
3. Evaluate WP migration feasibility (CPT equivalents).

---

# 🖼 Phase 3 — Imports & SVG Audit

**Goal:** Clean up legacy asset management.

**Output:** `/reports/03-imports-svg-audit.md`

**Instructions:**
1. Audit `/imports/` for usage patterns.
2. Identify opaque file names vs semantic usage.
3. Propose rename/replacement strategy (Lucide/Assets).

---

# 🧩 Phase 4 — Component & Design Integrity Audit

**Goal:** Ensure design system enforcement.

**Output:** `/reports/04-component-audit.md`

**Instructions:**
1. Audit `/components/` for token usage, hardcoded values.
2. Verify "No Tailwind" rule.
3. Score components (1-5) on clean code and accessibility.

---

# 🧱 Phase 5 — WordPress Migration Readiness

**Goal:** Strategic assessment for backend migration.

**Output:** `/reports/05-wordpress-migration-readiness.md`

**Instructions:**
1. Map components to Block Patterns/Templates.
2. Map data types to CPTs/Taxonomies.
3. Identify migration blockers (React Router, Local State).

---

# 🧹 Phase 6 — Cleanup & Hygiene Audit

**Goal:** Remove noise and technical debt.

**Output:** `/reports/06-cleanup-plan.md`

**Instructions:**
1. Identify dead files, unused components, duplicate assets.
2. Check for old reports and stale tasks.

---

# 🔍 Phase 7 — Root Cause & Pattern Extraction

**Goal:** Synthesize findings into actionable insights.

**Output:** `/reports/07-root-cause-analysis.md`

**Instructions:**
1. Categorize systemic issues (Structural, Data, Design, etc.).
2. Define Risk Level and Strategic Fix for each.

---

# 📋 Phase 8 — Task Generation

**Goal:** Create an execution plan.

**Output:** `/tasks/` files (01-07).

**Instructions:**
1. Generate detailed tasks based on root causes.
2. Include Description, Evidence, Dependencies, Impact, Effort, Owner, Priority.
