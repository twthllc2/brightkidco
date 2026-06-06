# Phase G: Process Forensics

> Evidence from file timestamps, git history, folder structure

---

## Timeline

| Date | Event |
|------|-------|
| May 21 | Giuliano's source files uploaded (raw/, assets/, research/) |
| May 28 | Strategy docs written (4 files, 548KB total) |
| May 29 | Copy files written (124 files across 22 flows) |
| Jun 5 | XHTML-emails built (127 files across 37 flows) |

**Key observation:** Copy and xhtml-emails were built 1 WEEK APART, likely by different agents.

---

## Git History

### brightkidco (5 commits)
1. `initial backup`
2. `fix README: reflect rejected HTML attempts and pivot`
3. `update: latest email templates and project files`
4. `cleanup: move files, delete stale artifacts`
5. `update README: 127 xhtml-emails exist but mostly broken`

### email-ops (9 commits)
1. `Initial commit: universal email design system`
2. `Reorganize: move content under email-design/`
3. `Expand README: full system docs`
4. `Update README: add project structure`
5. `Cleanup: consolidate files`
6. `Remove artifacts folder`
7. `Flatten archive-html`
8. `Rename archive-html to xhtml-emails`
9. `Update README: current state`

**Key observations:**
- Multiple reorganizations suggest confusion about project structure
- "Mostly broken" in README confirms awareness of quality issues
- "Remove artifacts folder" — artifacts were deleted at some point
- "Rejected HTML attempts" — earlier attempts were rejected

---

## Folder Structure Issues

### brightkidco/raw/
- Contains duplicates (original + Notion-exported versions with hash suffixes)
- Mixed languages (German PDFs, English text)
- No clear naming convention

### brightkidco/outputs/
- Symlink to email-ops/email-design (cross-repo dependency)
- Copy files organized by flow name
- Strategy docs in separate folder
- Synthesis docs in separate folder

### email-ops/email-design/
- xhtml-emails/ — 37 flow directories
- raw/ — Giuliano's source (duplicate of brightkidco/raw/)
- canvas.html — the React application
- email-artifact-library.md — 100 artifacts

---

## Process Issues

### No Design Review
- Emails were built without checking against Giuliano's source
- The artifact library exists but wasn't used
- The canvas.html design system wasn't followed

### No Copy Review
- Copy files were written without integrating with design
- The xhtml-emails use different content than the copy files
- 0% text match confirms disconnection

### No Quality Gates
- Emails were marked "done" without validation
- 5 files have broken HTML
- 4 files not responsive
- No email client testing evidence

### No Version Control for Emails
- Git tracks project structure but not individual email iterations
- No evidence of review before commit
- Multiple reorganizations suggest ad-hoc management

---

## Knowledge Transfer

### What Exists
- Strategy docs (comprehensive)
- Copy files (detailed)
- Artifact library (100 components)
- Klaviyo docs (technical)

### What's Missing
- No documentation of WHY design choices were made
- No record of what was tried and rejected
- No agent handoff notes
- No decision log

---

## Key Findings

1. **Copy and xhtml-emails built 1 WEEK APART** — likely different agents
2. **Multiple reorganizations** — project structure was confusing
3. **"Mostly broken" in README** — quality issues were known
4. **Artifacts were deleted at some point** — "remove artifacts folder"
5. **No design review, no copy review, no quality gates** — emails shipped without validation
6. **Documentation exists but isn't used** — strategy docs don't connect to production
7. **The process was AD-HOC** — no systematic workflow, no version control for iterations
