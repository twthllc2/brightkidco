BKC EMAIL PIPELINE — Session End Notes (June 27, 2026)

125 Klaviyo HTML emails for BrightKidCo.
4 attempts failed (v1-v4). Root cause: scripts instead of design.
Clean slate: only source assets remain.

THE PLAN (plans/the-plan.md):
  1 subagent per email, NO SCRIPTS.
  Subagent reads copy, studies component HTML visually, 
  decides structure, picks components/images, writes raw HTML.
  Shared tracking prevents overuse.

KEEP:
  outputs/copy/ (125 .md files)
  outputs/email-assets/ (949 component catalog, section mapping, 31 images)
  output/email-design-environment/ (Giuliano JSX)
  scripts/generate-layouts.py, map-section-components.py, track-variance.py
  plans/ (status-report.md, the-plan.md)

Ayoub wants: NO SCRIPTING for assembly. Design decisions only.
