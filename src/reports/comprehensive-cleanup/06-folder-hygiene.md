# Audit 6: Folder Hygiene & Stale Artifacts

**Date:** March 1, 2026
**Prompt:** [orchestrator.md](../../prompts/comprehensive-cleanup/orchestrator.md)
**Guidelines:** [Guidelines.md – Mandatory Folder Conventions](../../guidelines/Guidelines.md)

---

## Summary

Review of `/reports/`, `/tasks/`, `/prompts/`, `/docs/`, `/public/`, and root for stale artifacts and non-compliant file placement.

---

## Findings

### `/reports/` — Age Check

All existing reports are from **February 25, 2026** (4 days old). Guidelines state "Delete any report older than a few days," but these reports have open task items still referencing them. Keeping them active until all referenced tasks are resolved.

| Subfolder | Files | Age | Status |
|---|---|---|---|
| `/reports/root-cleanup/` | 8 reports (01–08) | 4 days | ⚠️ Keep — open tasks still reference reports 04, 05 |
| `/reports/comprehensive-cleanup/` | 6 reports (01–06) | 4 days (01–03), today (04–06) | ✅ Current |

**Action:** Archive `/reports/root-cleanup/` once tasks 04 and 05 are resolved (UI primitives decision + full CSS scan).

---

### `/tasks/` — Contents

| File | Status |
|---|---|
| `task-list.md` | ✅ Active master list — never delete |
| `comprehensive-cleanup-tasks.md` | ✅ Active — tracks this audit series |

No stale task files found. No task files outside `/tasks/`.

---

### `/prompts/` — Contents

| File | Status |
|---|---|
| `root-cleanup-audit.md` | ✅ Reusable — keep |
| `general-codebase-audit.md` | ✅ Reusable — keep |
| `comprehensive-cleanup/orchestrator.md` | ✅ Reusable — keep |

No orphaned or one-use prompt files found. No prompt files outside `/prompts/`.

---

### `/docs/` — Contents

| File | Status |
|---|---|
| `Attributions.md` | ✅ Active — referenced in root README |
| `cms-field-mapping.md` | ✅ Active — WP/ACF field reference |

No stale docs. No `.md` documentation outside root-allowed files or `/docs/`, `/guidelines/`.

---

### `/public/` — Static Assets

| Item | Status |
|---|---|
| `favicon.ico` | ✅ Active |
| `favicon.svg` | ✅ Active |
| `fonts/` | ✅ Active — variable fonts loaded by CSS |
| `manifest.json` | ✅ Active — PWA manifest |
| `offline.html` | ✅ Active — PWA offline fallback |
| `pwa-icons/` | ✅ Active — PWA install icons |
| `service-worker.js` | ✅ Active — PWA service worker |

No orphaned static assets found.

---

### Root Directory — `.md` Compliance

| File | Allowed? |
|---|---|
| `README.md` | ✅ Allowed |
| `CHANGELOG.md` | ✅ Allowed (protected) |
| `Attributions.md` | ✅ Allowed (system-protected) |
| `Guidelines.md` | ⚠️ Legacy root file — referenced by guideline system but technically should live in `/guidelines/`. However, removing it from root may break cross-references. **Leave in place.** |

No non-compliant `.md` or `.sh` files found in root beyond `Guidelines.md` (legacy exception).

---

### `/dist/` — Build Artifacts

No `/dist/` folder present in source tree. ✅ Clean.

---

## Actions Taken

- [x] All 6 audit reports written to `/reports/comprehensive-cleanup/` (March 1, 2026)

## Actions Pending

- [ ] Archive `/reports/root-cleanup/` once tasks 04 (UI primitives decision) and 05 (deep CSS scan) are resolved
- [ ] Confirm `Guidelines.md` root placement is intentional and add exception note to Guidelines.md root restriction rule
