# Email Assembly Pipeline — Macro Plan (Full Expansion)

## THE GOAL
Build 125 unique Klaviyo-compatible HTML emails from approved copy files.
Each email must:
- Have a UNIQUE layout (different from other emails in same flow)
- Use the approved copy text (from .md files)
- Stay on brand (same logo, colors, fonts, footer)
- Include 4-6 product images
- Include 3-6 distinct visual components
- Be ready to paste into Klaviyo HTML editor

---

## WHAT WE HAVE

### 125 Copy Files
Location: outputs/copy/<flow>/<email>.md
Each file contains:
- Subject line
- Preview text
- From name (Lena from BrightKidCo)
- Email body sections (hook, validation, mechanism, social proof, product, guarantee, CTA)
- Lena sign-off
- Footer

### 950+ Components
Location: outputs/email-assets/showcase-artifacts-final.html
This is a single HTML file containing all components as visual examples.
Each component is wrapped in a card with:
- Card header (component name)
- Card body (the actual HTML/CSS)
- Card footer (description)

The components are DESIGN PATTERNS — they show what different email sections look like when rendered. They are NOT email-ready HTML. They are REFERENCE DESIGNS.

### 31 Product Images
Location: outputs/email-assets/product-photos/
Categories:
- lifestyle/ (11 images) — toddlers wearing products, playing, potty training
- flat-lay/ (12 images) — training pants, swim diapers, accessories laid flat
- accessories/ (5 images) — stickers, book, wet bags, towel, cloth pads
- resized/ (2 images) — toddler playing, washing machine
- branding/ (1 image) — logo placeholder
### Brand Tokens (ACTUAL — extracted from tokens.js in JSX source)
Source file: outputs/email-design-environment/autistic-welcome/variants/tokens.js

```javascript
window.BRAND = {
  teal: "#2BAEB4",
  tealDeep: "#1E8A8F",
  green: "#5DD07A",
  greenDeep: "#3BB35E",
  ink: "#1F2D2F",
  soft: "#4A6568",
  muted: "#8A9B9D",
  cream: "#FBF7F1",
  paper: "#FFFFFF",
  gradient: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
  gradientText: {
    background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  },
};
window.FONT = {
  main: "'Questrial', system-ui, sans-serif",
  display: "'Fraunces', Georgia, serif",
};
```

Additional fonts used: Caveat (handwritten), Inter (body alternative)

### Section Background Colors (ACTUAL — extracted from JSX email files)
These are the real colors used across all 10 email variants:

```
  warm white  #FFFBF0 — hero, creed, path, comparison, order summary
  cream       #FFF6E2 — letter, reframe, quote, story, closing, diff
  mint        #EAF6F2 — definition, feel, guarantee, next steps, reframe-alt
  lavender    #F0EDF8 — product, expert, upgrade
  beige       #F5F1EA — product full, image sections
  code bg     #FAF7F0 — discount code blocks
  dark        #1F2D2F — CTA sections (B.ink)
  white       #FFFFFF — objection cards, data tables, footer
```

### The Core Pattern (DISCOVERED FROM STUDYING 10 ACTUAL EMAILS)

Every email follows this structure:

```
EmailShell (wrapper with preheader, width=420px or 600px)
  ├── Header (logo centered, background inherits from section)
  ├── [FramedImage] (hero image with label + sublabel) — OPTIONAL
  ├── [TitleBlock] (badge + H1 headline)
  ├── Band (gradient transition: color1 → color2)
  ├── SECTION 1 (Letter, Definition, Reframe, Comparison, Product, etc.)
  │   └── each section has its own background color
  ├── Band (gradient transition)
  ├── SECTION 2
  │   └── different background color — NEVER same as adjacent
  ├── Band
  ├── SECTION 3
  ├── ...
  ├── CTA Section (always B.ink = #1F2D2F dark background)
  ├── Signoff (Lena Bauer, personal close)
  ├── OutLine (calming unsubscribe text)
  └── Footer (tagline, links, address, gradient bar)
```

CRITICAL RULES (from studying actual emails):
1. No two adjacent sections share the same background color
2. Sections are connected by GradientBands (40px height gradient)
3. The CTA section is ALWAYS dark (B.ink = #1F2D2F)
4. Images are wrapped in FramedImage (black border + drop-shadow)
5. Headlines use gradientText (teal → green) for accent words
6. All CTAs are pill-shaped (border-radius: 999px)
7. Email width is 420px mobile, 600px desktop
8. Body text uses Questrial, headlines use Fraunces

### Section Type → Background Color Mapping (from actual emails)

```
hero              → warm white #FFFBF0 or lilac #EEE8F6
letter/body       → cream #FFF6E2
creed             → warm white #FFFBF0
reframe/insight   → mint #EAF6F2
definition        → mint #EAF6F2
comparison        → warm white #FFFBF0
expert/quote      → lavender #F0EDF8
product           → lavender #F0EDF8 or beige #F5F1EA
feel/benefits     → mint #EAF6F2
testimonial       → cream #FFF6E2
objections/FAQ    → white #FFFFFF
guarantee         → mint #EAF6F2
CTA               → dark #1F2D2F (ALWAYS)
story             → cream #FFF6E2
path/steps        → warm white #FFFBF0
code/discount     → code bg #FAF7F0
```

### VARIETY comes from 3 things:

1. Different COLOR SEQUENCES per email
   Example Email 1:  #FFFBF0 → #FFF6E2 → #FFFBF0 → #EAF6F2 → #FFFBF0 → #FFF6E2 → #F0EDF8 → #1F2D2F
   Example Email 2:  #FFFBF0 → #FFF6E2 → #EAF6F2 → #FFFBF0 → #F0EDF8 → #1F2D2F
   Example Email 4:  #FFFBF0 → #FFF6E2 → #F0EDF8 → #FFFBF0 → #EAF6F2 → #FFF6E2 → #FFFFFF → #1F2D2F

2. Different SECTION ORDER per email
   Some have: hero → letter → definition → comparison → expert → cta
   Others have: hero → letter → product → layers → feel → testimonial → objections → cta

3. Different SECTION TYPES per email
   Welcome E1: no product, no guarantee
   Welcome E2: mechanism heavy, comparison, expert quote
   Welcome E4: product reveal, layers explanation, feel/benefits
   Welcome E6: guarantee heavy, product, closing letter

---

## MACRO STEP 0: STUDY ACTUAL RENDERED EMAILS

### What this means
The file `raw/Welcome Flows - 10 Emails _standalone_ (copy 1).html` contains the ACTUAL emails as they render. This is the source of truth for brand colors, layouts, and visual patterns.

### How to do it
1. Open the HTML file in a browser (or extract the bundled React content)
2. Look at each email as it ACTUALLY renders
3. Note the REAL brand colors in context (not just hex codes)
4. Note the REAL layouts (how sections are arranged)
5. Note the REAL visual rhythm (spacing, typography, image placement)

### What to extract
For each of the 10 emails in the Welcome Flows:
- Actual background colors used
- Actual text colors used
- Actual font sizes and weights
- Actual spacing (padding, margins)
- Actual image placement and sizing
- Actual component layouts (hero, body, CTA)
- Actual visual flow (how sections connect)

### Output of Step 0
A visual reference document that shows what the ACTUAL emails look like, not what the design system reference says they should look like.

---

## MACRO STEP 1: STUDY 950+ COMPONENTS

### What this means
I need to LOOK at each component and understand what it looks like when rendered. Not what it's called. What it LOOKS LIKE visually.

### How to do it
The showcase file is 30,968 lines of HTML. I can't open it in a browser from the command line. But I CAN read the HTML/CSS and understand the visual structure.

For each component, I need to extract:
1. Background color (light, dark, gradient, transparent)
2. Layout structure (single column, multi-column, grid, flex)
3. Image presence (does it have an image? what size? what position?)
4. Text hierarchy (headline size, body size, caption size)
5. Spacing (tight, normal, generous)
6. Border treatment (none, rounded, shadow, outlined)
7. Interactive elements (buttons, links, cards)

### Visual categories to create
After studying all components, group them by visual type:

```
HERO COMPONENTS (30 total):
├── image-first (image dominates, text below)
│   Examples: large product photo with headline overlay
├── text-first (headline dominates, image secondary)
│   Examples: big headline with small image accent
├── dark (dark background, light text)
│   Examples: ink background with white text
├── light (white/cream background, dark text)
│   Examples: clean white with teal accents
├── split (image left, text right or vice versa)
│   Examples: 50/50 image + text layout
├── gradient (colored gradient background)
│   Examples: teal-to-green gradient with text
└── minimal (just text, no image area)
    Examples: headline + paragraph only

BODY COMPONENTS (various totals):
├── paragraph (simple text blocks)
│   Examples: letter-style text with good line height
├── cards (2-3 column grid of cards)
│   Examples: feature cards with icon + title + description
├── timeline (vertical or horizontal sequence)
│   Examples: numbered steps with connecting lines
├── comparison (side-by-side contrast)
│   Examples: before/after or us vs them
├── quote (testimonial with attribution)
│   Examples: italic text with name and role
├── steps (numbered step-by-step)
│   Examples: 1-2-3 numbered list with descriptions
├── FAQ (questions and answers)
│   Examples: expandable or visible Q&A pairs
└── stat (data/statistics display)
    Examples: big numbers with context

CTA COMPONENTS (various totals):
├── button (colored button with text)
│   Examples: rounded rectangle with gradient background
├── text-link (simple text with arrow)
│   Examples: "Learn more →" in teal text
├── dark-block (dark background section)
│   Examples: ink background with white CTA button
├── gradient (gradient background with CTA)
│   Examples: teal-green gradient with white button
├── inline (CTA embedded in text flow)
│   Examples: button appears within paragraph
└── floating (CTA stands out from content)
    Examples: sticky or prominently positioned

PRODUCT COMPONENTS (various totals):
├── hero (full-width product image)
│   Examples: large product photo with price overlay
├── grid (2-3 product images)
│   Examples: product gallery layout
├── lifestyle (product in use)
│   Examples: child wearing product in real setting
├── detail (close-up feature)
│   Examples: zoomed fabric texture or stitching
├── comparison (product vs alternative)
│   Examples: pull-up vs BSL side by side
└── bundle (multiple products together)
    Examples: starter pack with 3 items
```

### What I record for each component
```
Component ID: HERO-5
Visual type: hero/text-first
Background: gradient (light to cream)
Layout: single column, centered
Image: optional (small accent)
Text: headline + subheadline + CTA
Spacing: generous (40px padding)
Border: none
Interactive: CTA button (green)
Brand match: uses teal, ink, Questrial font
```

### Output of Step 1
A visual catalog file: visual-catalog.json
```
{
  "HERO-1": {
    "visual_type": "hero/image-first",
    "background": "light",
    "layout": "single-column",
    "has_image": true,
    "image_position": "top",
    "text_hierarchy": "headline-large-body-small",
    "spacing": "generous",
    "brand_colors_used": ["teal", "ink"],
    "fonts_used": ["Fraunces", "Questrial"]
  },
  ...
}
```

---

## MACRO STEP 2: CREATE 125 LAYOUTS

### What this means
For each of the 125 copy files, create a LAYOUT BLUEPRINT that describes the visual structure of that email.

A layout blueprint is NOT the final HTML. It's a DESCRIPTION of what the email should look like.

### How to do it

#### 2.1 Read the copy file
Open outputs/copy/<flow>/<email>.md
Parse out:
- Subject line
- Preview text
- From name
- Email body sections (each ### header is a section)
- CTA text
- Lena sign-off variant

#### 2.2 Classify each section
For each section in the email body, classify it:

```
READ the section content.
ASK: What is this section DOING in the email?

If it opens with emotional hook → type = hook
If it validates guilt or pain → type = validation
If it explains science or mechanism → type = mechanism
If it shares parent story or review → type = social_proof
If it shows product features → type = product
If it offers guarantee or trust → type = guarantee
If it asks for action → type = cta
If it compares methods → type = comparison
If it shares statistics → type = stats
If it tells a narrative → type = story
```

#### 2.3 Determine visual treatment for each section
Based on the section type AND the copy content, determine what it should LOOK like:

```
FOR HOOK SECTIONS:
  Read the copy.
  If copy is emotional/personal → visual = hero/image-first
    (needs emotional image to match the feeling)
  If copy is data-driven/factual → visual = hero/text-first
    (let the numbers speak, minimal image)
  If copy is dark/serious topic → visual = hero/dark
    (dark background matches the tone)
  If copy is warm/gentle → visual = hero/light
    (clean, calm, approachable)
  If copy has two contrasting ideas → visual = hero/split
    (visual contrast matches content contrast)

FOR VALIDATION SECTIONS:
  Read the copy.
  If copy is calm paragraphs → visual = body/paragraph
    (let the words breathe)
  If copy has a quote or testimonial → visual = body/quote
    (attribution card style)
  If copy has multiple validation points → visual = body/cards
    (break into scannable cards)

FOR MECHANISM SECTIONS:
  Read the copy.
  If copy explains step by step → visual = body/steps
    (numbered sequence)
  If copy compares things → visual = body/comparison
    (side by side)
  If copy has data points → visual = body/stat
    (big numbers with context)
  If copy is educational paragraphs → visual = body/paragraph
    (clean text with good spacing)

FOR SOCIAL PROOF SECTIONS:
  Read the copy.
  If copy has direct quotes → visual = body/quote
    (testimonial cards)
  If copy has multiple reviews → visual = body/cards
    (review grid)
  If copy has statistics → visual = body/stat
    (counter or stat display)

FOR PRODUCT SECTIONS:
  Read the copy.
  If copy introduces product → visual = product/hero
    (full-width product image)
  If copy compares products → visual = product/comparison
    (side by side)
  If copy shows bundle → visual = product/bundle
    (multiple items together)

FOR GUARANTEE SECTIONS:
  Read the copy.
  If copy mentions 60-day guarantee → visual = guarantee/badge
    (trust seal style)
  If copy explains refund → visual = body/paragraph
    (clean text explanation)

FOR CTA SECTIONS:
  Read the copy.
  If copy is soft/gentle → visual = cta/text-link
    (subtle nudge)
  If copy is direct/clear → visual = cta/button
    (prominent action)
  If copy is final closing → visual = cta/dark-block
    (stands out from rest)
```

#### 2.4 Create the layout blueprint
Combine section types and visual treatments into a blueprint:

```
email_id: welcome-01-e1-l1
subject: "He talks about it but won't do it"
preview: "His brain and bladder are sending messages..."
sections:
  1:
    type: hook
    copy_excerpt: "He talks about the potty..."
    visual_treatment: hero/image-first
    needs_image: true
    image_type: lifestyle
  2:
    type: validation
    copy_excerpt: "This isn't your fault..."
    visual_treatment: body/paragraph
    needs_image: false
  3:
    type: mechanism
    copy_excerpt: "This gap has a name..."
    visual_treatment: body/cards
    needs_image: true
    image_type: flatlay
  4:
    type: cta
    copy_excerpt: "Let's explore..."
    visual_treatment: cta/button
    needs_image: false
```

#### 2.5 Enforce variance
For emails in the same flow, check that layouts differ by at least 2 sections:

```
Welcome E1 L1: hero/image-first → body/paragraph → body/cards → cta/button
Welcome E1 L2: hero/dark → body/quote → body/steps → cta/text-link
Welcome E1 L3: hero/text-first → body/cards → body/quote → cta/button
Welcome E1 GF: hero/split → body/paragraph → body/steps → cta/dark-block

Variance check:
  L1 vs L2: hero differs (image-first vs dark), body differs (paragraph vs quote) ✓
  L1 vs L3: hero differs (image-first vs text-first), body differs (paragraph vs cards) ✓
  L1 vs GF: hero differs (image-first vs split), cta differs (button vs dark-block) ✓
```

### Output of Step 2
125 layout blueprint files: layouts/<email-id>.json

---

## MACRO STEP 3: FILL LAYOUTS WITH COMPONENTS

### What this means
For each section in each layout, pick a SPECIFIC component from the 950+ catalog and a SPECIFIC image from the 31 available.

This is done by subagents. Each subagent handles ONE section of ONE email.

### 3.1 Subagent input
Each subagent receives:
```
{
  email_id: "welcome-01-e1-l1",
  section_index: 0,
  section_type: "hook",
  copy_text: "He talks about the potty, 'I need to go,' he says...",
  visual_treatment: "hero/image-first",
  brand_tokens: { teal, ink, fonts, gradient, ... },
  available_components: [ list of components matching this visual type ],
  available_images: [ list of unused images ],
  used_components: [ components already picked for this email ],
  used_images: [ images already picked for this email ]
}
```

### 3.2 The 4 Questions (full expansion)

#### QUESTION 1: SECTION TYPE
"What is this section doing in the email?"

Process:
1. Read the copy text
2. Identify the PRIMARY purpose
3. Classify into one of: hook, validation, mechanism, social_proof, product, guarantee, cta, comparison, stats, story

The classification must be based on what the section DOES, not what it's CALLED in the copy file.

Example:
```
Copy: "He talks about the potty, 'I need to go,' he says..."
Purpose: Opens with emotional hook to grab attention
Classification: hook
```

#### QUESTION 2: VISUAL TREATMENT
"How should this section LOOK?"

Process:
1. Consider the section type (from Q1)
2. Consider the copy content (tone, length, complexity)
3. Consider the email's overall flow (what comes before/after)
4. Select a visual treatment from the available options

Decision tree:
```
hook:
  emotional copy → hero/image-first
  data copy → hero/text-first
  dark topic → hero/dark
  warm/gentle → hero/light
  contrast → hero/split

validation:
  paragraphs → body/paragraph
  has quote → body/quote
  multiple points → body/cards

mechanism:
  step-by-step → body/steps
  comparison → body/comparison
  data points → body/stat
  educational → body/paragraph

social_proof:
  quotes → body/quote
  multiple reviews → body/cards
  statistics → body/stat

product:
  introduces product → product/hero
  compares → product/comparison
  bundle → product/bundle

guarantee:
  trust seal → guarantee/badge
  explanation → body/paragraph

cta:
  soft → cta/text-link
  direct → cta/button
  final → cta/dark-block
```

#### QUESTION 3: SPECIFIC COMPONENT
"Which exact component from 950+ matches this visual treatment?"

Process:
1. Query the visual catalog for components matching:
   - visual_type = the treatment from Q2
   - position = section type from Q1
   - image_support = matches needs (if section needs image, prefer image_text)
   - audience = matches email level (L1, L2, L3, GF)
2. Filter out components already used in this email
3. Filter out retired components
4. From remaining, pick one:
   - Prefer giuliano-derived or quality-approved
   - If multiple equal options, pick randomly
   - Ensure it's DIFFERENT from components used in same flow

Query example:
```
SELECT * FROM components
WHERE visual_type = 'hero/image-first'
  AND position = 'hero'
  AND image_support = 'image_text'
  AND 'L1' IN audience
  AND id NOT IN used_components
  AND retired = false
LIMIT 10
```

#### QUESTION 4: IMAGE
"What image goes here?"

Process:
1. Determine if section needs image (from layout blueprint)
2. If yes:
   a. Determine image type needed (lifestyle, flatlay, accessories)
   b. Query image catalog for unused images of that type
   c. Pick one that's relevant to the copy content
3. If no: output null

Image type mapping:
```
hook → lifestyle (emotional connection)
validation → lifestyle (empathy)
mechanism → flatlay (product detail)
social_proof → lifestyle (real usage)
product → flatlay (product showcase)
guarantee → accessories (trust elements)
stats → flatlay (data visualization)
```

### 3.3 Subagent output
Each subagent outputs:
```
{
  section_type: "hook",
  visual_treatment: "hero/image-first",
  component_id: "HERO-5",
  component_name: "Mirror Moment",
  image: "toddler-playing.jpg",
  unique_in_email: true,
  unique_in_flow: true,
  brand_match: true,
  notes: "Image-first hero with emotional headline, warm tones, matches copy"
}
```

### 3.4 Assembly
After all sections are filled, assemble the email:

1. Start with email shell (DOCTYPE, head, body, table wrapper)
2. Add header (logo, fixed)
3. For each section in order:
   a. Get component HTML from showcase file
   b. Strip card wrapper (remove card-header, card-footer)
   c. Inject copy text into the component
   d. Inject image if needed
   e. Apply brand tokens (colors, fonts)
   f. Wrap in table layout for Outlook compatibility
   g. Inline all CSS for Gmail compatibility
4. Add signoff (Lena, fixed)
5. Add footer (fixed)
6. Save as HTML file

### 3.5 Validation
After assembly, check each email:
- Width is 600px max
- All CSS is inline (no <style> blocks)
- Table-based layout (no flexbox/grid)
- Images have URLs (not local paths)
- Klaviyo variables present ({{ first_name }})
- Subject line present
- Preview text present
- Unsubscribe link present
- Physical address present
- Lena signoff present
- No broken HTML tags
- Visual variety (different from other emails in same flow)

---

## CALCULATION

### Section counts
```
Welcome flow: 32 emails × avg 5 sections = 160 tasks
Cart flow: 3 emails × avg 6 sections = 18 tasks
Browse flow: 3 emails × avg 5 sections = 15 tasks
Checkout flow: 2 emails × avg 5 sections = 10 tasks
Other flows: 85 emails × avg 5 sections = 425 tasks
─────────────────────────────────────────────────
TOTAL: 628 section tasks
```

### Waves
```
Concurrent limit: 10 subagents
Waves: 63 (last wave has 8)
Time per wave: ~2 minutes
Total time: ~126 minutes
```

### Full pipeline
```
Step 1: Study components (me) → ~30 minutes
Step 2: Create layouts (me) → ~60 minutes
Step 3: Fill sections (subagents) → ~126 minutes
Assembly (me) → ~30 minutes
Validation (me) → ~15 minutes
─────────────────────────────────
TOTAL: ~261 minutes (4.35 hours)
```

---

## EXECUTION ORDER

```
Phase A: Preparation (me)
  1. Study 950+ components → visual-catalog.json
  2. Create 125 layouts → layouts/*.json

Phase B: Section filling (subagents)
  For each wave of 10 emails:
    For each section in each email:
      Launch subagent with input
      Wait for output
      Store result
  Total: 63 waves

Phase C: Assembly (me)
  For each email:
    Get all section results
    Assemble HTML from components + copy + images
    Apply brand tokens
    Inline CSS
    Convert to tables
    Save HTML file

Phase D: Validation (me)
  For each email:
    Check all constraints
    Visual variety check
    Fix any issues
```

---

## RISKS AND MITIGATIONS

```
Risk: Component doesn't fit the copy content
  Mitigation: Q1 forces section type classification before component pick
  Mitigation: Q2 considers copy content when choosing visual treatment

Risk: Subagent picks same component as previous section
  Mitigation: Track used_components per email, filter before pick

Risk: Subagent picks same component as another email in same flow
  Mitigation: Track used_components per flow, prefer unused

Risk: Layout variance not enough
  Mitigation: Enforce rule: same flow = 2+ sections differ

Risk: Images run out
  Mitigation: 31 images, reuse across emails is OK, but vary within email

Risk: Component HTML doesn't render well in email clients
  Mitigation: Strip card wrapper, inline CSS, convert to tables

Risk: Copy text doesn't fit component design
  Mitigation: Truncate if needed, maintain readability
```
