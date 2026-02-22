# Task 01: Guidelines & Documentation Cleanup

**Generated:** February 21, 2026
**Updated:** February 21, 2026 (All Items Complete)
**Based on:** Phase 1 (Guidelines Deep Audit) + Phase 6 (Cleanup & Hygiene Audit)
**Priority:** P2 (High Value, Low Effort)
**Status:** COMPLETE

## 1. Objective

Centralise documentation, update timestamps, remove legacy commercial references ("Shop", "Services", "Booking", "Book Now"), and fix broken `mock-data.md` links to align the `/guidelines/` directory with the v7.0.0 "Personal Art Project" scope.

## 2. Tasks

### 2.1. Update Metadata & Version Numbers

- [x] **Action:** Add "Last Updated: February 2026" to `Guidelines.md`.
- [x] **Action:** Update `README.md` version table from v6.0.0 to v7.0.0 for Guidelines.md and README.md.
- [x] **Action:** Verify version numbers in `ARCHITECTURE.md` match current `package.json`.
- [x] **Action:** Update "Last Updated" dates on design-token files flagged in Report 01:
  - `design-tokens/colors.md` (already "February 2026" - verified)
  - `design-tokens/neon-colors.md` (updated to "February 2026")
  - `overview-icons.md` (updated to "February 2026")

### 2.2. Fix Broken `mock-data.md` Links (10 references in 5 files)

The file `guidelines/mock-data.md` no longer exists. All references must point to `/data/README.md` instead.

- [x] **Action:** Fix `guidelines/README.md` line 177 -> Changed to `../data/README.md`.
- [x] **Action:** Fix `guidelines/Guidelines.md` (4 references at lines 41, 60, 167, 411).
  - Replace `[mock-data.md](./mock-data.md)` with `[Data System Documentation](../data/README.md)`.
  - Remove the tree-structure reference at line 167.
- [x] **Action:** Fix `guidelines/overview-components.md` line 173.
  - Replace `[mock-data.md](./mock-data.md)` with `[Data System](../data/README.md)`.
- [x] **Action:** Fix `guidelines/components/PortfolioCard.md` (2 references at lines 47, 650).
- [x] **Action:** Fix `guidelines/components/SocialLinks.md` (2 references at lines 276, 788).

### 2.3. Remove Legacy Commercial References

**Hygiene Audit Finding:** 25 matches for "Shop/Services/Booking/Book Now" found across 11 guideline files.

**Legitimate references (keep as-is):**
- `Guidelines.md` lines 14-25: These document the migration *away* from commercial features. Keep.
- `overview-components.md` / `overview-templates.md`: References to "Utility Services" (code architecture term, not commercial). Keep.

**Legacy examples requiring update (replace with portfolio/art-project equivalents):**
- [x] **Action:** `guidelines/components/Header.md` line 396: Replace "Book Now" button example with "View Portfolio".
- [x] **Action:** `guidelines/components/Footer.md` lines 163-166, 280-281: Replace "Services" section with "Portfolio Categories".
- [x] **Action:** `guidelines/components/Footer.md` line 380: Replace "Book Now" button with "Get in Touch".
- [x] **Action:** `guidelines/components/Footer.md` line 458: Replace "Services List" in Mermaid diagram with "Categories List".
- [x] **Action:** `guidelines/components/HeroSection.md` line 539: Replace `'Book Now'` CTA with `'Explore Portfolio'`.
- [x] **Action:** `guidelines/components/Modal.md` lines 157, 610, 616: Replace `BookingModal` / `BookingInquiry` / `submitBooking` with `CollaborationModal` / `Collaboration Inquiry` / `submitInquiry`.
- [x] **Action:** `guidelines/components/Tag.md` line 432: Replace `BookingStatus` example with `ProjectStatus` example.
- [x] **Action:** `guidelines/icons/travel.md` line 104: Replace "Group Booking (5+ people)" with "Group Festival Pass".
- [x] **Action:** `guidelines/mobile/forms.md` lines 269, 366, 449: Replace `BookingForm` / `submitBooking` with `CollaborationForm` / `submitInquiry`.
- [x] **Action:** `guidelines/sections/ThreeColumnLayout.md` lines 586, 592: Replace "Services Showcase" / "My Services" with "Portfolio Showcase" / "My Work".

### 2.4. Consolidate Reports

- [x] **Action:** `/reports/archive/` directory exists.
- [x] **Action:** Stale task lists moved to `/tasks/archive/`.
- [x] **Action:** Verify `/guidelines/reports/` directory is empty or remove if remnant.
  - **Finding:** Directory does not exist. Already consolidated into `/reports/` in a previous session. No action needed.

## 3. Dependencies

- None. Can start immediately.

## 4. Impact

- Eliminates 10 broken documentation links (`mock-data.md`).
- Removes 13 legacy commercial examples that contradict the v5.3.0 "Personal Art Project" pivot.
- Ensures documentation accurately reflects the current non-commercial scope.

## 5. Effort

- **Time:** 3-4 hours.
- **Complexity:** Low (Text replacement, no code logic changes).