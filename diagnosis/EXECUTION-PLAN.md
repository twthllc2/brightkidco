# BKC Diagnosis — Execution Plan

> Created: June 6, 2026
> Total questions: 244 (all covered — see gap fixes below)
> Method: execute_code for quantitative data, direct reading for qualitative analysis
> Output: diagnosis/COMPLETE-DIAGNOSIS.md + per-phase findings files
> Gap fixes applied: C5 (copy vs strategy), C6 (CTA effectiveness), D4-D5 (artifact usability/composability), G1-G3 (process forensics)

---

## PHASE 0 — BULK DATA COLLECTION

> execute_code scripts. No LLM analysis. Pure pattern detection.
> These scripts run FIRST. Their output feeds into every subsequent phase.
> Estimated time: 10-15 minutes total.

### Step 0.1: HTML Structure Scan
- **Tool:** execute_code
- **Input:** All 127 files in `projects/brightkidco/outputs/xhtml-emails/`
- **What it does:**
  - Parse every HTML file
  - Count: total files, files with `<table` layout, files with `<div` layout
  - Count: files with `role="presentation"`, files without
  - Count: files with `<!DOCTYPE>`, files without
  - Count: files with `<html lang=`, files without
  - Count: files with `@media` queries, files without
  - Count: files with `<preheader` or `class="preheader"`, files without
  - Count: files with Outlook conditional comments `<!--[if mso]>`
  - Count: files with inline styles only vs files with `<style>` block
  - Count: files with `<script` tags (should be zero)
  - Count: files with dark mode meta/media queries
  - List: files that are XHTML-valid vs broken HTML
  - List: specific broken patterns found (missing closing tags, invalid nesting)
- **Output file:** `diagnosis/outputs/Phase0-html-structure.md`
- **Dependencies:** None

### Step 0.2: Image & Visual Scan
- **Tool:** execute_code
- **Input:** All 127 files in `projects/brightkidco/outputs/xhtml-emails/`
- **What it does:**
  - Count: files with `<img` tags, files without
  - Count: files with product images (src containing "product", "item", "hero")
  - Count: files with inline SVGs
  - Count: files with gradients (`linear-gradient`, `radial-gradient`)
  - Count: files with `border-radius`
  - Count: files with `box-shadow`
  - Count: files with alternating image/text sections (pattern: img followed by text block)
  - List: files with interactive elements (hover, accordion, carousel)
  - Count: average image-to-text ratio across all files
  - List: files that are text-only (no img, no SVG, no gradient)
- **Output file:** `diagnosis/outputs/Phase0-image-visual.md`
- **Dependencies:** None

### Step 0.3: E-commerce Structure Scan
- **Tool:** execute_code
- **Input:** All 127 files in `projects/brightkidco/outputs/xhtml-emails/`
- **What it does:**
  - Count: files with logo/header (look for `<img` with "logo" in src or alt)
  - Count: files with product showcase (look for price patterns: $, £, €, digits near product images)
  - Count: files with CTA buttons (look for `<a` with class "button" or "cta" or styled as button)
  - Count: files with unsubscribe link
  - Count: files with physical address (CAN-SPAM)
  - Count: files with footer section
  - List: files with urgency elements (countdown, timer, scarcity, "limited", "last chance")
  - List: files with social proof (review, testimonial, star rating patterns)
  - List: files with product grid (multiple product blocks in one email)
  - Categorize each email: "e-commerce structure" vs "newsletter structure" vs "hybrid"
- **Output file:** `diagnosis/outputs/Phase0-ecommerce-structure.md`
- **Dependencies:** None

### Step 0.4: Brand Consistency Scan
- **Tool:** execute_code
- **Input:** All 127 files in `projects/brightkidco/outputs/xhtml-emails/`
- **What it does:**
  - Extract: color values used across all files (hex codes, rgb values)
  - Count: files using each color
  - Extract: font-family values used across all files
  - Count: files using each font
  - Extract: max-width values used
  - Count: files at each max-width
  - Extract: padding/margin patterns (common values)
  - Identify: files that deviate from the majority pattern
  - List: outliers — emails that look different from the rest
- **Output file:** `diagnosis/outputs/Phase0-brand-consistency.md`
- **Dependencies:** None

### Step 0.5: Copy AI Marker Scan
- **Tool:** execute_code
- **Input:** All 124 files in `projects/brightkidco/outputs/copy/`
- **What it does:**
  - Count: em-dashes (—) per file, total across all files
  - Count: files with "In today's world"
  - Count: files with "It's no secret"
  - Count: files with "Whether you're" or "Whether you are"
  - Count: files with "It's important to note"
  - Count: files with "Research suggests"
  - Count: files with "In a world where"
  - Count: files with "At the end of the day"
  - Count: files with "It goes without saying"
  - List: top 10 files by em-dash count
  - List: top 10 files by AI phrase count
  - List: files with "Email [flow] [number] out of [total]" pattern
  - List: files with internal labels ("Level 1", "Level 2", "Level 3" in customer-facing text)
  - List: files with variable names ("E1_CONTENT", "FLOW1", etc.)
  - List: files with placeholder text patterns
- **Output file:** `diagnosis/outputs/Phase0-ai-markers.md`
- **Dependencies:** None

### Step 0.6: Flow Completeness Scan
- **Tool:** execute_code
- **Input:** All 127 files in `projects/brightkidco/outputs/xhtml-emails/` + 124 in `outputs/copy/`
- **What it does:**
  - Parse folder structure of xhtml-emails (flow-XX-name/)
  - For each of the 25 flows: count emails that exist
  - For flows with sub-variants (GF, L1, L2, L3): list which variants exist, which are missing
  - Compare against the strategy doc's flow architecture
  - List: flows with all emails built
  - List: flows with partial builds (and which are missing)
  - List: flows with zero emails
  - Count: total xhtml-emails vs total expected
  - Count: total copy files vs total expected
- **Output file:** `diagnosis/outputs/Phase0-flow-completeness.md`
- **Dependencies:** None

### Step 0.7: Copy vs XHTML Text Match
- **Tool:** execute_code
- **Input:** 127 xhtml-emails + 124 copy files
- **What it does:**
  - For each xhtml-email, extract the plain text content (strip HTML tags)
  - For each copy file, extract the plain text content
  - Match: which xhtml-emails have copy that corresponds to a copy file?
  - For matched pairs: compare text — exact match, partial match, or completely different?
  - List: xhtml-emails that use copy NOT in the copy folder
  - List: xhtml-emails where copy matches the copy file
  - List: xhtml-emails where copy differs from the copy file (and how)
  - Count: percentage of emails using current copy vs old copy
- **Output file:** `diagnosis/outputs/Phase0-copy-match.md`
- **Dependencies:** None

### Step 0.8: Deliverability Scan
- **Tool:** execute_code
- **Input:** All 127 files in `projects/brightkidco/outputs/xhtml-emails/`
- **What it does:**
  - Count: files with proper MIME structure hints (multipart, content-type)
  - Count: files with text/plain fallback
  - Count: files with unsubscribe mechanism
  - Count: files with physical address
  - Count: files with excessive ALL CAPS (spam trigger)
  - List: files with potential spam trigger words
  - Count: files with image-to-text ratio issues (too many images, too little text)
  - Count: files with proper sender/reply-to setup hints
- **Output file:** `diagnosis/outputs/Phase0-deliverability.md`
- **Dependencies:** None

**Phase 0 total: 8 execute_code scripts, 8 output files, ~10-15 minutes**

---

## PHASE 1 — GIULIANO'S SOURCE MATERIAL (Brand Truth)

> Me reading JSX files directly. One phase per file group.
> Each step: read file(s), analyze, write findings.
> Dependencies: Phase 0 data available for context.
> Estimated time: 20-30 minutes.

### Step 1.1: HTML Canvas Analysis
- **Tool:** read_file
- **Input:** `projects/brightkidco/outputs/raw/giuliano-source/Welcome Flows - 10 Emails _standalone_.html`
- **What I'm looking for:**
  - How many flows are shown? Structure of each?
  - Visual layout: spacing, hierarchy, color usage, image placement
  - Repeated components across emails
  - Relationship between 6-email flow and 4-email flow
  - Design intent: spatial vs hierarchical organization
  - Annotations or notes left by Giuliano
  - Visual density: image-heavy vs text-heavy
  - Product image placement relative to text
  - CTA pattern: placement, style, frequency
- **Output file:** `diagnosis/outputs/PhaseA-canvas.md`
- **Dependencies:** None

### Step 1.2: Autistic-Welcome JSX Deep Read
- **Tool:** read_file
- **Input:** ALL JSX files in `projects/brightkidco/outputs/raw/giuliano-source/BKCO - EMAIL MARKETING/autistic-welcome/` and `variants/`
  - design-canvas.jsx
  - email-1.jsx
  - V10-final.jsx
  - variants/content.js
  - variants/tokens.js
  - variants/illustrations.jsx
  - variants/variants-1-3.jsx
  - variants/variants-4-6.jsx
  - variants/variants-7-10.jsx
  - variants/new-v1-4.jsx
  - variants/new-v5-7.jsx
  - variants/new-v8-10.jsx
  - variants/10 New UX Variants.html
  - variants/10 UX Variants.html
  - Welcome Flow - Autistic Parent.html
  - V10 Final.html
- **What I'm looking for:**
  - Every component defined (name, purpose, props)
  - Component hierarchy: primitives → sections → compositions
  - Modular vs monolithic architecture
  - Naming conventions
  - SVGs, illustrations: style, subjects, inline vs referenced
  - Gradient patterns: type, color stops, frequency
  - Spacing system: padding/margin scale
  - Border-radius values: consistency
  - Typography: hierarchy, sizes, line-heights, letter-spacing
  - Design tokens in tokens.js: exact values
  - Content separation in content.js
  - Theme variations
  - Font imports and actual font stack
  - Email structure: header → hero → body → CTA → signoff → footer
  - Image treatment: compositing, dimensions, responsiveness
  - Variant differences: what changes between versions
- **Output file:** `diagnosis/outputs/PhaseA-autistic-welcome.md`
- **Dependencies:** None

### Step 1.3: Welcome-Flow JSX Deep Read
- **Tool:** read_file
- **Input:** ALL JSX files in `projects/brightkidco/outputs/raw/giuliano-source/BKCO - EMAIL MARKETING/welcome-flow/`
  - app.jsx
  - content.js
  - content-flow2.js
  - design-canvas.jsx
  - email-6.jsx
  - emails-2-3.jsx
  - emails-4-5.jsx
  - flow2-emails.jsx
  - primitives.jsx
  - product-showcase.jsx
  - Welcome Flows - 10 Emails.html
- **What I'm looking for:**
  - Same as Step 1.2 but for welcome-flow variant
  - Differences between welcome-flow and autistic-welcome approaches
  - How product-showcase.jsx works
  - How primitives.jsx defines base components
  - Content architecture: content.js vs content-flow2.js
- **Output file:** `diagnosis/outputs/PhaseA-welcome-flow.md`
- **Dependencies:** None

### Step 1.4: Email JSX Files
- **Tool:** read_file
- **Input:**
  - `projects/brightkidco/outputs/raw/giuliano-source/BKCO - EMAIL MARKETING/emails/hifi.jsx`
  - `projects/brightkidco/outputs/raw/giuliano-source/BKCO - EMAIL MARKETING/emails/wireframes.jsx`
- **What I'm looking for:**
  - How do standalone email JSX differ from the flow-based ones?
  - What does "hifi" contain vs "wireframes"?
  - Are these more advanced/complete than the flow JSX?
  - What components/patterns are unique to these files?
- **Output file:** `diagnosis/outputs/PhaseA-emails-jsx.md`
- **Dependencies:** None

### Step 1.5: Asset Inventory
- **Tool:** search_files + read_file
- **Input:** `projects/brightkidco/outputs/raw/giuliano-source/` — all subfolders
  - Search for: logo files (png, svg, jpg with "logo" in name)
  - Search for: image files (png, jpg, svg in reference/, uploads/)
  - Search for: PDF files
  - List everything in uploads/
  - List everything in reference/
- **What I'm looking for:**
  - Logo versions: which is current, differences between them
  - Reference images: what visual inspiration did Giuliano provide?
  - Uploads: original PDFs and images
  - Mood boards or style references
  - What aesthetic is Giuliano aiming for?
- **Output file:** `diagnosis/outputs/PhaseA-assets.md`
- **Dependencies:** None

### Step 1.6: Research PDFs
- **Tool:** search_files + read_file
- **Input:** `projects/brightkidco/outputs/raw/giuliano-source/` — research/ folder
  - List all PDFs
  - Check for extracted text files
  - Read any extracted text
- **What I'm looking for:**
  - What did Giuliano research?
  - Are text extractions accurate?
  - What insights should inform emails?
  - Specific claims, mechanisms, data points
  - Language patterns in research materials
- **Output file:** `diagnosis/outputs/PhaseA-research.md`
- **Dependencies:** None

### Step 1.7: Phase A Synthesis
- **Tool:** read_file (re-read PhaseA-*.md files)
- **Input:** All PhaseA-*.md output files from Steps 1.1-1.6
- **What I'm doing:**
  - Cross-reference findings across all Phase A steps
  - Extract the complete component library from JSX analysis
  - Extract the complete design token system
  - Extract the visual language rules
  - Extract the email structure patterns
  - Identify what Giuliano's brand ACTUALLY looks like
  - Compare against what the artifact library claims
- **Output file:** `diagnosis/outputs/PhaseA-SYNTHESIS.md`
- **Dependencies:** Steps 1.1-1.6 complete

**Phase 1 total: 7 steps, 7 output files, ~20-30 minutes**

---

## PHASE 2 — XHTML-EMAILS AUDIT (Output Quality)

> Me reading specific email files, informed by Phase 0 data.
> Phase 0 gave me counts and outliers. Now I read the actual files.
> Estimated time: 15-20 minutes.

### Step 2.1: Read the "Good" Emails
- **Tool:** read_file
- **Input:** Read the Level Detection Flow emails (both files)
  - `projects/brightkidco/outputs/xhtml-emails/flow-12-level-detection/email-01-level-detection.html`
  - `projects/brightkidco/outputs/xhtml-emails/flow-12-level-detection/email-02-level-detection-backup.html`
- **What I'm looking for:**
  - Why does this work? Exact code patterns that are correct
  - Brand expression: colors, fonts, spacing
  - Structure: header → body → CTA → footer
  - Code quality: valid XHTML? Table layout? Inline styles?
  - What makes this the "good" example?
- **Output file:** `diagnosis/outputs/PhaseB-good-emails.md`
- **Dependencies:** Phase 0 data (to identify which are "good")

### Step 2.2: Read Representative Bad Emails
- **Tool:** read_file
- **Input:** 6 emails from different flows (chosen from Phase 0 outliers)
  - 1 from welcome flow
  - 1 from cart abandonment
  - 1 from winback
  - 1 from replenishment
  - 1 from browse abandonment
  - 1 from sunset
- **What I'm looking for:**
  - What's actually broken in the code?
  - How do these differ from the "good" ones?
  - Do they have product images? CTAs? Brand elements?
  - What's the visual rhythm?
  - Do they feel like e-commerce emails?
- **Output file:** `diagnosis/outputs/PhaseB-bad-emails.md`
- **Dependencies:** Phase 0 data (to identify outliers)

### Step 2.3: Read Emails with Sub-Variants
- **Tool:** read_file
- **Input:** 4 emails from the same flow, different variants
  - Welcome flow: GF, L1, L2, L3 variants
  - Or winback flow: GF, L1, L2, L3 variants
- **What I'm looking for:**
  - How do variants differ? Just text? Or layout too?
  - Is the brand consistent across variants?
  - Do variants feel like they're from the same brand?
  - What changes between GF (General Fallback) and level-specific?
- **Output file:** `diagnosis/outputs/PhaseB-variant-analysis.md`
- **Dependencies:** Phase 0 data

### Step 2.4: Phase B Synthesis
- **Tool:** read_file (re-read PhaseB-*.md + Phase0-*.md)
- **Input:** Phase B output files + Phase 0 data
- **What I'm doing:**
  - Combine quantitative data (Phase 0) with qualitative reading (Steps 2.1-2.3)
  - Categorize failures by type and severity
  - Identify what works and why
  - Score each email category (welcome, cart, winback, etc.)
  - Determine: can any of these be salvaged or do they need full rebuild?
- **Output file:** `diagnosis/outputs/PhaseB-SYNTHESIS.md`
- **Dependencies:** Phase 0 + Steps 2.1-2.3

**Phase 2 total: 4 steps, 4 output files, ~15-20 minutes**

---

## PHASE 3 — COPY ANALYSIS (Voice Quality)

> Me reading specific copy files, informed by Phase 0 data.
> Phase 0 gave me AI marker counts and contamination lists.
> Now I read the actual copy to judge quality.
> Estimated time: 15-20 minutes.

### Step 3.1: Read High AI-Score Copy Files
- **Tool:** read_file
- **Input:** 10 copy files with highest AI marker counts (from Phase 0)
  - 3 from welcome flow
  - 2 from winback
  - 2 from replenishment
  - 2 from cart/checkout
  - 1 from browse
- **What I'm looking for:**
  - Does it sound like a real person or a model?
  - Em-dash usage in context (not just count)
  - Formulaic structures: same opening pattern, same sentence length
  - Lack of personality
  - Excessive hedging
  - Repetitive sentence structures
  - Absence of specific details
  - Does it sound like "Lena from BrightKidCo"?
- **Output file:** `diagnosis/outputs/PhaseC-ai-quality.md`
- **Dependencies:** Phase 0 data (AI marker counts)

### Step 3.2: Read Contaminated Copy Files
- **Tool:** read_file
- **Input:** 10 copy files with internal label contamination (from Phase 0)
  - Files with "Email [flow] [number] out of [total]"
  - Files with "Level 1/2/3" in customer-facing text
  - Files with variable names
  - Files with placeholder text
- **What I'm looking for:**
  - What internal labels leak into customer-facing text?
  - How severe is the contamination?
  - Is it fixable with find-replace or do files need rewrite?
  - Are the labels structural (embedded in sentences) or isolated (easy to remove)?
- **Output file:** `diagnosis/outputs/PhaseC-contamination.md`
- **Dependencies:** Phase 0 data (contamination lists)

### Step 3.3: Read Cross-Flow Copy for Voice Consistency
- **Tool:** read_file
- **Input:** 10 copy files across different flows (1 per flow type)
  - welcome, replenishment-a, replenishment-b, replenishment-c, winback-a, winback-b, cart, checkout, browse, sunset
- **What I'm looking for:**
  - Does the voice stay consistent across flows?
  - Does it sound like the same person writing?
  - Tone shifts between flows
  - Compare against Giuliano's words from research PDFs
  - Genuine empathy vs performative
  - Does it avoid speaking down to parents?
- **Output file:** `diagnosis/outputs/PhaseC-voice-consistency.md`
- **Dependencies:** PhaseA-research.md (for Giuliano's voice reference)

### Step 3.4: Read Flow Coherence (Sequential Reads)
- **Tool:** read_file
- **Input:** 3 complete flows read in sequence:
  - Welcome: email 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 (GF variant)
  - Replenishment-a: email 1 → 2 → 3
  - Winback-a: email 1 → 2 → 3 (GF variant)
- **What I'm looking for:**
  - Narrative arc: does email 1 → 2 → 3 tell a story?
  - Does each email build on the previous?
  - Contradictions or redundancies between emails
  - Emotional progression: does it make sense?
  - CTA escalation: soft → firmer → direct?
  - Gaps: does the reader get lost?
- **Output file:** `diagnosis/outputs/PhaseC-flow-coherence.md`
- **Dependencies:** None

### Step 3.5: Read Segmentation Copy
- **Tool:** read_file
- **Input:** 8 copy files comparing same flow across segments:
  - Welcome GF vs Welcome L1 vs Welcome L2 vs Welcome L3
  - Cart GF vs Cart L1 vs Cart L2 vs Cart L3
- **What I'm looking for:**
  - Do Level 1 emails use age-appropriate language (3-5 year olds)?
  - Do Level 2 emails address moderate ASD experience?
  - Do Level 3 emails use dignity-first language (6-10+ year olds)?
  - Do General Fallback emails avoid autism-specific language?
  - Does the copy differentiate between segments meaningfully?
  - Or is it just keyword swapping?
- **Output file:** `diagnosis/outputs/PhaseC-segmentation.md`
- **Dependencies:** None

### Step 3.6: Phase C Synthesis
- **Tool:** read_file (re-read PhaseC-*.md + Phase0-ai-markers.md)
- **Input:** Phase C output files + Phase 0 AI marker data
- **What I'm doing:**
  - Combine quantitative AI marker data with qualitative reading
  - Score copy quality per flow
  - Determine: which copy files are usable, which need rewrite?
  - Identify systemic copy problems vs isolated issues
  - Assess voice authenticity
  - Map contamination severity
- **Output file:** `diagnosis/outputs/PhaseC-SYNTHESIS.md`
- **Dependencies:** Phase 0 + Steps 3.1-3.5

### Step 3.7: Copy vs Strategy Side-by-Side (C5 Gap Fix)
- **Tool:** read_file
- **Input:**
  - Strategy doc: `projects/brightkidco/outputs/strategy/1-full-email-strategy.md`
  - Strategy doc: `projects/brightkidco/outputs/strategy/2-full-email-copy-strategy.md`
  - Copy files: 3 corresponding copy files for flows defined in those strategy docs
    (e.g., if strategy defines "welcome flow has 8 emails, purpose is X", read the
     actual welcome copy files and compare)
- **What I'm looking for:**
  - Does the strategy define what each flow should achieve?
  - Does the copy actually achieve those goals?
  - Are the right mechanisms/angles being used in the right flows?
  - Are segments addressed correctly (Level 1, 2, 3, General Fallback)?
  - Does the copy follow the flow architecture from Giuliano's demands?
  - Specific misalignments between strategy intent and copy execution
- **Output file:** `diagnosis/outputs/PhaseC-copy-vs-strategy.md`
- **Dependencies:** PhaseA-SYNTHESIS.md (for Giuliano's demands context)

### Step 3.8: CTA Effectiveness Audit (C6 Gap Fix)
- **Tool:** read_file
- **Input:** 10 emails selected for CTA analysis:
  - 2 from welcome flow (first and last email in sequence)
  - 2 from cart abandonment (1h and 24h)
  - 2 from checkout abandonment
  - 2 from winback
  - 1 from browse abandonment
  - 1 from sunset
- **What I'm looking for:**
  - CTA language: action-oriented ("Shop Now", "Get Yours") vs informational ("Learn More", "Read More")
  - CTA placement: how many per email? Where positioned (top, middle, bottom, multiple)?
  - Urgency elements: countdown timers, scarcity language, "limited time", "last chance"
  - Restraint in appropriate flows: does welcome flow ease in or push hard?
  - Value proposition clarity: is it clear what the reader gets by clicking?
  - "Click NOW vs maybe later" motivation: does every email give a reason to act now?
  - CTA-to-content ratio: enough CTAs? Too many? Too few?
  - Button styling: consistent? On-brand? Visible?
- **Output file:** `diagnosis/outputs/PhaseC-cta-effectiveness.md`
- **Dependencies:** None

**Phase 3 total: 8 steps, 8 output files, ~20-25 minutes**

---

## PHASE 4 — ARTIFACT LIBRARY + STRATEGY DOCS

> Me reading documentation files.
> Estimated time: 10-15 minutes.

### Step 4.1: Artifact Library Full Read
- **Tool:** read_file
- **Input:** `projects/brightkidco/outputs/email-artifact-library.md` (112KB)
- **What I'm looking for:**
  - How many artifacts documented?
  - For each: name, description, CSS values, usage rules
  - Are descriptions accurate or interpreted?
  - Are CSS values precise?
  - Are usage rules backed by Giuliano's actual usage?
- **Output file:** `diagnosis/outputs/PhaseD-artifact-analysis.md`
- **Dependencies:** PhaseA-SYNTHESIS.md (to compare claimed vs actual)

### Step 4.1a: Artifact Library Deep Pass (D4-D5 Gap Fix)
- **Tool:** read_file
- **Input:** `projects/brightkidco/outputs/email-artifact-library.md` (112KB) — second pass
  Also re-read: PhaseA-SYNTHESIS.md (Giuliano's actual component system)
- **What I'm looking for (D4 — Usability):**
  - Can an agent actually use this library to build an email?
  - Is the information format consistent across artifacts?
  - Are CSS values precise enough to implement? (exact px, hex, rem?)
  - Are there examples of how artifacts combine?
  - Are there anti-patterns documented (what NOT to do)?
  - Is the library organized by function (hero, body, CTA, footer) or by appearance?
  - Is there a "getting started" path or is it just a list?
- **What I'm looking for (D5 — Composability):**
  - Can artifacts be combined freely or are there constraints?
  - Are there rules about which artifacts go together?
  - Are there ordering rules (hero before body, CTA after story)?
  - Are there context rules (this artifact for welcome, that artifact for cart)?
  - Does the library document component dependencies?
  - Can you build a complete email using ONLY artifacts from the library?
- **Cross-reference:** Compare each artifact's claimed CSS values against Giuliano's actual JSX
  - For each artifact: claim vs actual (border-radius, colors, spacing, fonts)
  - Flag any discrepancies
- **Output file:** `diagnosis/outputs/PhaseD-artifact-deep.md`
- **Dependencies:** PhaseA-SYNTHESIS.md

### Step 4.2: Strategy Docs Read
- **Tool:** read_file
- **Input:** 4 strategy docs in `projects/brightkidco/outputs/strategy/`
  - 1-full-email-strategy.md
  - 2-full-email-copy-strategy.md
  - 3-segmentation-blueprint.md
  - 4-popup-strategy.md
- **What I'm looking for:**
  - Do they match Giuliano's demands?
  - Are the 25 flows correct?
  - Is the segmentation model accurate?
  - Are conversion goals realistic?
  - Do they account for all 4 avatar levels + General Fallback?
- **Output file:** `diagnosis/outputs/PhaseE-strategy.md`
- **Dependencies:** None

### Step 4.3: Key Synthesis Docs Read
- **Tool:** read_file
- **Input:** 8 synthesis docs in `projects/brightkidco/outputs/synthesis/`
  - 01-customer-avatar.md
  - 07-email-sequence-framework.md
  - 11-brand-voice-reference.md
  - 16-executive-master-plan.md
  - 21-customer-journey-map.md
  - 26-pricing-offer-architecture.md
  - 27-brand-identity-guidelines.md
  - 15-level-messaging-matrix.md
- **What I'm looking for:**
  - Do customer avatars match Giuliano's descriptions?
  - Does email sequence framework match Giuliano's design?
  - Does brand voice reference match actual brand voice?
  - Does executive master plan align with demands?
  - Does level messaging matrix correctly segment?
- **Output file:** `diagnosis/outputs/PhaseE-synthesis.md`
- **Dependencies:** None

### Step 4.4: Klaviyo Docs Read
- **Tool:** read_file
- **Input:** 8 Klaviyo docs in `projects/brightkidco/outputs/klaviyo/`
  - 01-template-variables.md
  - 02-conversion-process.md
  - 03-segment-configuration.md
  - 04-flow-triggers.md
  - 05-dns-authentication.md
  - 06-warming-bot-detection.md
  - 07-cloak-transactional-rules.md
  - 08-deliverability-monitoring.md
- **What I'm looking for:**
  - Are template variables correct for Klaviyo?
  - Are segment configurations accurate?
  - Are flow triggers correct?
  - Is deliverability guidance accurate?
  - Is warming/bot detection guidance correct?
- **Output file:** `diagnosis/outputs/PhaseE-klaviyo.md`
- **Dependencies:** None

### Step 4.5: Phase D+E Synthesis
- **Tool:** read_file (re-read PhaseD-*.md + PhaseE-*.md)
- **Input:** All Phase D and E output files
- **What I'm doing:**
  - Artifact library: what's accurate, what's wrong, what's missing?
  - Strategy: what matches demands, what doesn't?
  - Synthesis docs: what's reliable, what's questionable?
  - Klaviyo: what's correct, what needs fixing?
- **Output file:** `diagnosis/outputs/PhaseDE-SYNTHESIS.md`
- **Dependencies:** Steps 4.1-4.4 + PhaseA-SYNTHESIS.md

**Phase 4 total: 6 steps, 6 output files, ~15-20 minutes**

---

## PHASE 5 — CROSS-REFERENCE & GAP MAP

> Me reading my own output files and connecting dots.
> This is where the real diagnosis happens.
> Dependencies: ALL previous phases complete.
> Estimated time: 15-20 minutes.

### Step 5.1: Source vs Output Gap
- **Tool:** read_file
- **Input:** PhaseA-SYNTHESIS.md + PhaseB-SYNTHESIS.md
- **What I'm doing:**
  - What Giuliano designed (Phase A) vs what was built (Phase B)
  - Where did interpretation go wrong?
  - What was lost in translation?
  - What was added that shouldn't have been?
  - Specific component-level comparison
- **Output file:** `diagnosis/outputs/PhaseF-source-vs-output.md`
- **Dependencies:** PhaseA-SYNTHESIS.md + PhaseB-SYNTHESIS.md

### Step 5.2: Copy vs Design Gap
- **Tool:** read_file
- **Input:** PhaseC-SYNTHESIS.md + PhaseA-SYNTHESIS.md + PhaseB-SYNTHESIS.md
- **What I'm doing:**
  - Does copy match design intent?
  - Were emails designed to fit copy, or copy to fit design?
  - Or were they developed independently?
  - Specific misalignment examples
- **Output file:** `diagnosis/outputs/PhaseF-copy-vs-design.md`
- **Dependencies:** PhaseA + PhaseB + PhaseC syntheses

### Step 5.3: Strategy vs Execution Gap
- **Tool:** read_file
- **Input:** PhaseE-strategy.md + PhaseB-SYNTHESIS.md + Phase0-flow-completeness.md
- **What I'm doing:**
  - What strategy says vs what was actually built
  - What's missing from execution?
  - What was executed that wasn't in strategy?
  - Flow-by-flow comparison
- **Output file:** `diagnosis/outputs/PhaseF-strategy-vs-execution.md`
- **Dependencies:** PhaseE + PhaseB syntheses + Phase 0 flow data

### Step 5.4: Brand Fidelity Score
- **Tool:** read_file
- **Input:** ALL Phase syntheses
- **What I'm doing:**
  - How close are current outputs to Giuliano's source?
  - Percentage of brand captured vs missing
  - Highest-impact gaps
  - Component-level fidelity scoring
  - Color, typography, spacing, imagery, structure scores
- **Output file:** `diagnosis/outputs/PhaseF-brand-fidelity.md`
- **Dependencies:** All syntheses

### Step 5.5: Copy vs Source Voice Gap
- **Tool:** read_file
- **Input:** PhaseC-voice-consistency.md + PhaseA-research.md + PhaseA-autistic-welcome.md
- **What I'm doing:**
  - Does copy voice match Giuliano's voice from research PDFs?
  - Where does it diverge?
  - Specific patterns from Giuliano's writing missing in copy
  - Voice authenticity score
- **Output file:** `diagnosis/outputs/PhaseF-voice-gap.md`
- **Dependencies:** PhaseC + PhaseA syntheses

### Step 5.6: Systemic Issues
- **Tool:** read_file
- **Input:** ALL output files
- **What I'm doing:**
  - Process audit: how were emails actually built? Workflow?
  - Design review step? Code review? Copy review?
  - Tested in email clients before marking "done"?
  - Quality gates: what exists, what's missing?
  - Tooling: JSX-to-HTML pipeline? Preview capability? CI/CD?
  - Knowledge transfer: did agents know what previous agents did?
  - Documentation of why decisions were made
- **Output file:** `diagnosis/outputs/PhaseG-systemic.md`
- **Dependencies:** All syntheses

### Step 5.7: Process Forensics (G1-G3 Gap Fix)
- **Tool:** terminal + search_files + read_file
- **Input:**
  - `projects/brightkidco/outputs/xhtml-emails/` — folder structure, file timestamps
  - `projects/brightkidco/outputs/copy/` — folder structure, file timestamps
  - `projects/brightkidco/outputs/` — top-level folder structure
  - Any git history if available in the project
- **What I'm looking for (G1 — Process Audit):**
  - File timestamp analysis: were emails built sequentially or in batches?
  - Naming patterns: do names reveal a workflow (draft → review → final)?
  - Folder structure: is there a "drafts" or "review" folder?
  - Evidence of iteration: are there multiple versions of the same email?
  - How were emails actually built? What was the workflow?
  - Was there a design review step? Evidence in file structure?
  - Was there a code review step? Evidence in comments or commit history?
  - Was there a copy review step?
  - Were emails tested in email clients before being marked "done"?
  - What quality gates exist (or don't)?
- **What I'm looking for (G2 — Tooling Audit):**
  - Is there a JSX-to-HTML compilation pipeline? Search for build scripts, package.json, Makefile
  - Is there a way to preview emails locally? Search for dev server configs
  - Is there a way to test emails in multiple clients?
  - Is there a CI/CD pipeline for email production?
  - Evidence of tooling: search for scripts, configs, automation files
- **What I'm looking for (G3 — Knowledge Transfer):**
  - When one agent built an email, did the next agent know what was done?
  - Is there documentation of what was tried and rejected?
  - Are the "why" decisions recorded, not just the "what"?
  - Search for README, CHANGELOG, NOTES files in the project
  - Search for comments in code that explain decisions
  - Evidence of agent handoff: session logs, task records, or交接 notes?
- **Method:**
  - `find` commands for file timestamps and structure
  - `search_files` for build configs, README, CHANGELOG
  - `search_files` for comments explaining decisions
  - `terminal` for directory tree analysis
- **Output file:** `diagnosis/outputs/PhaseG-process-forensics.md`
- **Dependencies:** None (runs independently)

**Phase 5 total: 7 steps, 7 output files, ~20-25 minutes**

---

## PHASE 6 — FINAL DIAGNOSIS REPORT

> Me reading ALL output files and writing the comprehensive diagnosis.
> Estimated time: 15-20 minutes.

### Step 6.1: Re-Read All Outputs
- **Tool:** read_file
- **Input:** ALL 32 output files from Phase 0-5
- **What I'm doing:**
  - Load everything into context
  - Identify the 10 biggest findings
  - Identify the 5 most critical failures
  - Identify the 3 things that actually work
  - Prepare the executive summary structure

### Step 6.2: Write Complete Diagnosis
- **Tool:** write_file
- **Input:** All findings from Steps 6.1
- **Output file:** `diagnosis/COMPLETE-DIAGNOSIS.md`
- **Structure:**
  1. Executive Summary (1 page)
  2. Phase A Findings: Giuliano's Source Truth
  3. Phase B Findings: Output Quality
  4. Phase C Findings: Copy Quality
  5. Phase D Findings: Artifact Library
  6. Phase E Findings: Strategy & Docs
  7. Phase F: Gap Analysis
  8. Phase G: Systemic Issues
  9. Brand Fidelity Score (with component-level scoring)
  10. Recommendations (prioritized by impact)
  11. Appendix: Raw Data (Phase 0 counts)

### Step 6.3: Write Executive Summary
- **Tool:** write_file
- **Input:** Step 6.2 findings
- **Output file:** `diagnosis/EXECUTIVE-SUMMARY.md`
- **Structure:**
  - One paragraph: what is the state of BKC email system?
  - Top 5 problems (ranked by severity)
  - Top 3 things that work
  - Brand fidelity score: X%
  - Recommended next steps: rebuild vs salvage?
  - Estimated effort to fix

**Phase 6 total: 3 steps, 2 output files, ~15-20 minutes**

---

## SUMMARY

```
Phase 0: 8 execute_code scripts     → 8 output files   → 10-15 min
Phase 1: 7 read/analyze steps       → 7 output files   → 20-30 min
Phase 2: 4 read/analyze steps       → 4 output files   → 15-20 min
Phase 3: 8 read/analyze steps       → 8 output files   → 20-25 min
Phase 4: 6 read/analyze steps       → 6 output files   → 15-20 min
Phase 5: 7 cross-reference steps    → 7 output files   → 20-25 min
Phase 6: 3 synthesis steps          → 2 output files   → 15-20 min
─────────────────────────────────────────────────────────────────
TOTAL:   43 steps                   → 42 output files  → 115-155 min
```

## FILE MAP

```
diagnosis/
├── EXECUTION-PLAN.md                    (this file)
├── COMPLETE-DIAGNOSIS.md                (final output)
├── EXECUTIVE-SUMMARY.md                 (final output)
├── ayoub-landscape-concerns-*.md        (source: the 244 questions)
├── progress-log.md                      (source: file inventory)
└── outputs/
    ├── Phase0-html-structure.md
    ├── Phase0-image-visual.md
    ├── Phase0-ecommerce-structure.md
    ├── Phase0-brand-consistency.md
    ├── Phase0-ai-markers.md
    ├── Phase0-flow-completeness.md
    ├── Phase0-copy-match.md
    ├── Phase0-deliverability.md
    ├── PhaseA-canvas.md
    ├── PhaseA-autistic-welcome.md
    ├── PhaseA-welcome-flow.md
    ├── PhaseA-emails-jsx.md
    ├── PhaseA-assets.md
    ├── PhaseA-research.md
    ├── PhaseA-SYNTHESIS.md
    ├── PhaseB-good-emails.md
    ├── PhaseB-bad-emails.md
    ├── PhaseB-variant-analysis.md
    ├── PhaseB-SYNTHESIS.md
    ├── PhaseC-ai-quality.md
    ├── PhaseC-contamination.md
    ├── PhaseC-voice-consistency.md
    ├── PhaseC-flow-coherence.md
    ├── PhaseC-segmentation.md
    ├── PhaseC-SYNTHESIS.md
    ├── PhaseC-copy-vs-strategy.md       (NEW: C5 gap fix)
    ├── PhaseC-cta-effectiveness.md      (NEW: C6 gap fix)
    ├── PhaseD-artifact-analysis.md
    ├── PhaseD-artifact-deep.md          (NEW: D4-D5 gap fix)
    ├── PhaseE-strategy.md
    ├── PhaseE-synthesis.md
    ├── PhaseE-klaviyo.md
    ├── PhaseDE-SYNTHESIS.md
    ├── PhaseF-source-vs-output.md
    ├── PhaseF-copy-vs-design.md
    ├── PhaseF-strategy-vs-execution.md
    ├── PhaseF-brand-fidelity.md
    ├── PhaseF-voice-gap.md
    ├── PhaseG-systemic.md
    └── PhaseG-process-forensics.md      (NEW: G1-G3 gap fix)
```
