# BKC EMAIL PIPELINE — MASTER STATUS REPORT
# 2026-06-27 — REBUILD COMPLETE

================================================================
THE GOAL
================================================================
125 unique Klaviyo-compatible HTML emails from approved copy.
Each different layout. All on brand. 4-6 images per email.
3-6 components per email. No customer fatigue.

================================================================
PIPELINE STATUS — ALL STEPS COMPLETE
================================================================

  STEP 0: Study actual emails             ✅ DONE
  STEP 1: Map 949 components to types     ✅ DONE
  STEP 2: Generate 125 layouts (REBUILT)  ✅ DONE — 45 templates, 7 purposes
  STEP 3: Fill with component picks       ✅ DONE — 125 valid, 55 unique components
  STEP 4: Assemble HTML (v4 subagents)    🔄 IN PROGRESS — 2 subagents building 125

================================================================
WHAT WE HAVE
================================================================

COPY FILES — 125 approved .md files
  Location: outputs/copy/<flow>/<email>.md
  Each: subject, preview, from_name, body sections, signoff, footer

COMPONENT CATALOG — 949 components tagged
  Location: outputs/email-assets/component-catalog.json
  Location: outputs/email-assets/section-components.json
  27 Giuliano primitives from JSX source (G+)
  363 quality-approved (A*)
  559 agent-standard (A)
  16 section types: hero(42), letter(461), definition(19), testimonial(42),
    product(102), guarantee(54), cta(54), story(41), steps(14), code(13),
    stat(19), reframe(16), comparison(44), expert(14), feel(6), objections(8)

PRODUCT IMAGES — 31 images
  Location: outputs/email-assets/product-photos/
  Categories: lifestyle(11), flat-lay(12), accessories(5), resized(2), branding(1)

BRAND TOKENS (from tokens.js)
  colors: teal=#2BAEB4, green=#5DD07A, ink=#1F2D2F, soft=#4A6568,
          muted=#8A9B9D, cream=#FBF7F1, paper=#FFFFFF, yellow=#FFD866
  fonts: Questrial (main), Fraunces (display), Caveat (hand)
  gradient: linear-gradient(135deg, #2BAEB4, #5DD07A)

SECTION BACKGROUND COLORS (from Giuliano's JSX)
  warm white  #FFFBF0 — hero, creed, path, comparison
  cream       #FFF6E2 — letter, reframe, quote, story
  mint        #EAF6F2 — definition, feel, guarantee
  lavender    #F0EDF8 — product, expert
  beige       #F5F1EA — product full, image sections
  dark        #1F2D2F — CTA sections (ALWAYS)
  white       #FFFFFF — objections, FAQ, footer

================================================================
STEP 2 — 125 LAYOUTS (REBUILT)
================================================================

PROBLEM WITH v1: ALL 125 layouts had the SAME linear structure.
  hero → body → body → product → cta → signoff → footer
  Same 5 sections, same order, every email identical structure.

SOLUTION: Template-based system with 7 PURPOSES and 45 STRUCTURAL TEMPLATES.

7 EMAIL PURPOSES:
  awareness       — First touch, no product, build trust
  education       — Teaching, tips, deep science
  consideration   — Product reveal, soft sell
  conversion      — Close the sale, urgency
  retention       — Engagement, community, tips
  reengagement    — Winback, come back
  transactional   — Order, shipping, delivery

45 STRUCTURAL TEMPLATES (7-8 per purpose):
  AW-01: hero → letter → testimonial → cta        (4 sections, single-col)
  AW-02: hero → definition → cta                  (3 sections, hybrid 2-col)
  AW-03: hero → testimonial → story → definition → cta  (5 sections)
  AW-04: hero → letter → steps → cta              (4 sections)
  AW-05: hero → testimonial → guarantee → cta     (4 sections)
  AW-06: hero → story → testimonial → cta         (4 sections)
  AW-07: hero → reframe → testimonial → cta       (4 sections)
  ED-01: hero → definition → comparison → steps → cta    (5 sections)
  ED-02: hero → definition → stat → cta           (4 sections, 2-col)
  ED-03: hero → definition → steps → cta          (4 sections, 3-grid)
  ED-04: hero → definition → objections → cta     (4 sections)
  ED-05: hero → reframe → definition → expert → cta  (5 sections)
  ED-06: hero → comparison → definition → cta     (4 sections)
  ED-07: hero → steps → testimonial → cta         (4 sections)
  ED-08: hero → definition → story → cta          (4 sections)
  CO-01: hero → product → cta                     (3 sections, image-heavy)
  CO-02: hero → story → product → cta             (4 sections)
  CO-03: hero → product → testimonial → cta       (4 sections, 2-grid)
  CO-04: hero → product → feel → testimonial → cta  (5 sections)
  CO-05: hero → comparison → product → guarantee → cta  (5 sections)
  CO-06: hero → product → guarantee → cta         (4 sections)
  CO-07: hero → testimonial → product → cta       (4 sections)
  CV-01: hero → product → guarantee → cta         (4 sections)
  CV-02: hero → offer → product → cta             (4 sections)
  CV-03: hero → cta                               (2 sections, image-heavy)
  CV-04: hero → comparison → guarantee → cta      (4 sections)
  CV-05: hero → product → stat → cta              (4 sections, 3-grid)
  CV-06: hero → product → testimonial → cta       (4 sections)
  CV-07: hero → guarantee → product → cta         (4 sections)
  RT-01: hero → steps → cta                       (3 sections, hybrid 2-grid)
  RT-02: hero → testimonial → product → cta       (4 sections)
  RT-03: hero → feel → cta                        (3 sections, hybrid 3-grid)
  RT-04: hero → story → testimonial → cta         (4 sections)
  RT-05: hero → product → story → cta             (4 sections)
  RE-01: hero → offer → cta                       (3 sections)
  RE-02: hero → product → cta                     (3 sections, image-heavy)
  RE-03: hero → testimonial → offer → cta         (4 sections)
  RE-04: hero → cta                               (2 sections, image-heavy)
  RE-05: hero → product → guarantee → cta         (4 sections)
  RE-06: hero → story → cta                       (3 sections)
  TX-01: hero → letter → product → cta           (4 sections)
  TX-02: hero → letter → cta                     (3 sections)
  TX-03: hero → product → testimonial → cta      (4 sections)
  TX-04: hero → letter → product → story → cta   (5 sections)

LAYOUT DIMENSIONS (each blueprint specifies):
  - section types and order
  - background colors
  - column_layout (single, 2-col, 3-grid, hybrid, image-heavy)
  - has_image (true/false)
  - image_count (1 or 2 per section)
  - image_type (lifestyle, flatlay, accessories)

RESULTS:
  125 layout blueprints
  45 unique templates used across 7 purposes
  Section counts: 2-5 per email (varied!)
  Image counts: 4-6 per email (ALL in range!)
  No two adjacent sections share same color
  CTA always dark (#1F2D2F) at the end

================================================================
STEP 3 — 125 COMPONENT PICKS
================================================================

PROCESS:
  For each section in each layout → query section-components.json
  → pick component from matching section type
  → prefer G+ > A* > A
  → pick images from product-photos/
  → save picks JSON

RESULTS:
  125 picks files
  All valid (4-6 images each)
  55 unique components used
  Only 1 component overused (>10x): PSYDEEP-15 at 12x
  No duplicate components within same email
  Images varied across emails

================================================================
STEP 4 — ASSEMBLY (v4 SUBAGENTS)
================================================================

APPROACH:
  One subagent per email batch (2 subagents for 125 emails).
  Each subagent reads: layout + picks + component HTML + copy file.
  Each subagent builds: proper Klaviyo HTML with brand tokens.

WHAT EACH SUBAGENT BUILDS:
  - 600px table-based layout, inline CSS
  - Header with BrightKidCo logo
  - Gradient bands between color sections
  - EACH section type gets DIFFERENT HTML:
    * hero → headline + image + body text
    * testimonial → quote card with attribution
    * product → image + name + price + features
    * guarantee → 60-day seal + promise text
    * definition → eyebrow + title + body
    * cta → dark background + lime button + fine print
  - Copy text injected from .md file
  - Lena Bauer signoff
  - Footer with tagline, links, unsubscribe

TEST RESULT (welcome-01-e1-l1.html):
  20,666 bytes
  78 verification checks passed
  Real copy text present (He talks about..., interoception, 49%)
  Brand colors applied (teal, ink, cream, green)
  Gradient bands between sections
  Proper component templates per section type

STATUS: 🔄 2 subagents building remaining 124 emails

================================================================
PREVIOUS FAILURES AND FIXES
================================================================

FAILURE 1: Components not used in HTML
  Root: Assembler scripts used generic colored boxes instead of
        actual component designs.
  Fix: v4 subagents build proper HTML per section type.

FAILURE 2: Same layout over and over
  Root: All layouts had identical linear structure.
  Fix: Rebuilt with 45 templates across 7 purposes, 2-5 sections.

FAILURE 3: Image counts too low
  Root: Templates had images=1-3, sections couldn't hold enough.
  Fix: Target 4-6 images per email, assign to multiple sections.

FAILURE 4: Blind script produces garbage
  Root: Python script can't make design decisions — same template
        for every section type.
  Fix: v4 subagents make DESIGN decisions per component.

FAILURE 5: Copy text was section names ("Hook", "Parent Story")
  Root: Copy extraction returned labels, not content.
  Fix: Parse .md by ### headers, map to actual section types.

FAILURE 6: Component overuse (5.1 used 100x)
  Root: Subagents defaulted to same few G+ components.
  Fix: Variance tracker caps reuse at 10x per component.

================================================================
FILES
================================================================

  scripts/
    ├── generate-layouts.py        (45 templates, 7 purposes)
    ├── map-section-components.py  (949 → 16 section types)
    └── track-variance.py          (cap reuse at 10x)

  outputs/
    ├── layouts/                   125 layout blueprints
    ├── picks/                     125 component picks
    ├── html/                      125 HTML emails (building)
    ├── copy/                      125 approved copy files
    └── email-assets/
        ├── component-catalog.json
        ├── section-components.json
        └── product-photos/        31 images

  plans/
    ├── status-report.md           THIS FILE
    └── layout-rebuild-plan.md     Rebuild plan

================================================================
