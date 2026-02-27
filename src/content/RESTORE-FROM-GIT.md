# CONTENT FOLDER — RESTORE FROM GIT

**STATUS: FILES WERE INCORRECTLY DELETED BY AN AUDIT**

The original content files in this folder were deleted during a cleanup audit that incorrectly flagged them as "orphaned" because no `.ts`/`.tsx` file imports them. This was WRONG — these are personal reference notes used to seed website content.

## How to Restore

Run this command to find the commit where files were deleted:
```bash
git log --diff-filter=D -- content/
```

Then restore all files:
```bash
git checkout <commit-hash-before-deletion> -- content/
```

## Files That Need Restoring (25 total)

### /content/about/
- `six-cats.md`

### /content/book/
- `this-one-time.md`

### /content/lightspeed/
- `blog-conclusion.md`
- `company-history.md`
- `existing-team.md`
- `internship-program.md`
- `senior-block-developer.md`

### /content/personal/
- `artists-lifestyle.md`
- `berlin.md`
- `bio-professional-v1.md`
- `bio-professional-v2.md`
- `education.md`
- `festivals.md`
- `fitness.md`
- `identity.md`
- `lucy-private-notes.md`
- `partners.md`
- `philosophy.md`
- `travelling.md`
- `uv-art-origin.md`

### /content/social-profiles/
- `cross-platform-strategy.md`
- `facebook.md`
- `instagram.md`
- `linkedin.md`
- `twitter.md`

## Protection

This folder is now PROTECTED in `/guidelines/Guidelines.md` under the "Content Folder Protection Rule". No audit may ever recommend deleting these files again.
