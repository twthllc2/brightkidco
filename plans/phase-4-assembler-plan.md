# Phase 4: The Assembler

## What it does

Takes 3 inputs → outputs Klaviyo-compatible HTML:

```
INPUT 1: Decision picks JSON (from Phase 3)
INPUT 2: Component HTML (from 950+ library)
INPUT 3: Brand tokens (colors, fonts, spacing)

OUTPUT: 600px HTML file with inline CSS, ready for Klaviyo
```

## The Problem It Solves

Right now we have:
- Decisions: "Use HERO-4 for hook, EMO-7 for validation, EDU-8 for mechanism"
- But HERO-4 is just an ID — we need the actual HTML
- And the HTML needs to be filled with the copy text
- And styled with Giuliano's brand tokens
- And output as Klaviyo-compatible HTML (inline CSS, table layout, no JS)

## Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│ ASSEMBLER PIPELINE                                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐      │
│  │  DECISION    │    │  COMPONENT   │    │  BRAND       │      │
│  │  PICKS JSON  │    │  HTML LIB    │    │  TOKENS      │      │
│  │  (from P3)   │    │  (950+ HTML) │    │  (Giuliano)  │      │
│  └──────┬───────┘    └──────┬───────┘    └──────┬───────┘      │
│         │                   │                   │                │
│         └───────────────────┼───────────────────┘                │
│                             │                                    │
│                             ▼                                    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ STEP 1: LOOKUP COMPONENT HTML                           │    │
│  │                                                         │    │
│  │ For each pick in decisions JSON:                        │    │
│  │   component_id: "HERO-4"                                │    │
│  │   → Lookup in component catalog                         │    │
│  │   → Get source_line: 3882                               │    │
│  │   → Extract HTML from showcase-artifacts-final.html     │    │
│  │   → Result: raw HTML block                              │    │
│  │                                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                             │                                    │
│                             ▼                                    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ STEP 2: INJECT COPY TEXT                                │    │
│  │                                                         │    │
│  │ For each section in the email:                          │    │
│  │   Read copy from parsed-email JSON                      │    │
│  │   Find placeholder slots in component HTML              │    │
│  │   Replace placeholders with actual copy                 │    │
│  │                                                         │    │
│  │ Example:                                                │    │
│  │   Component HTML: <h1>{{HEADLINE}}</h1>                 │    │
│  │   Copy text: "He talks about it but won't do it"       │    │
│  │   Result: <h1>He talks about it but won't do it</h1>   │    │
│  │                                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                             │                                    │
│                             ▼                                    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ STEP 3: INJECT IMAGES                                   │    │
│  │                                                         │    │
│  │ For each section with an image:                         │    │
│  │   Get image filename from decision picks                │    │
│  │   Map to actual image URL/path                          │    │
│  │   Replace image placeholder in component HTML           │    │
│  │                                                         │    │
│  │ Example:                                                │    │
│  │   Component HTML: <img src="{{HERO_IMAGE}}" />          │    │
│  │   Image file: toddler-playing.jpg                       │    │
│  │   Result: <img src="images/toddler-playing.jpg" />     │    │
│  │                                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                             │                                    │
│                             ▼                                    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ STEP 4: APPLY BRAND TOKENS                              │    │
│  │                                                         │    │
│  │ For each component HTML block:                          │    │
│  │   Find CSS variables/placeholders                       │    │
│  │   Replace with actual brand values                      │    │
│  │                                                         │    │
│  │ Example:                                                │    │
│  │   Component HTML: color: {{INK}}                        │    │
│  │   Brand token: ink = #1F2D2F                            │    │
│  │   Result: color: #1F2D2F                                │    │
│  │                                                         │    │
│  │ Token replacements:                                     │    │
│  │   {{TEAL}} → #2BAEB4                                   │    │
│  │   {{GREEN}} → #5DD07A                                  │    │
│  │   {{INK}} → #1F2D2F                                    │    │
│  │   {{SOFT}} → #4A6568                                   │    │
│  │   {{CREAM}} → #FBF7F1                                  │    │
│  │   {{PAPER}} → #FFFFFF                                  │    │
│  │   {{FONT_MAIN}} → 'Questrial', system-ui, sans-serif   │    │
│  │   {{FONT_DISPLAY}} → 'Fraunces', Georgia, serif        │    │
│  │   {{GRADIENT}} → linear-gradient(135deg, #2BAEB4...)   │    │
│  │                                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                             │                                    │
│                             ▼                                    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ STEP 5: WRAP IN KLAVIYO SHELL                           │    │
│  │                                                         │    │
│  │ Add email client compatibility layer:                   │    │
│  │                                                         │    │
│  │ <!DOCTYPE html>                                         │    │
│  │ <html>                                                  │    │
│  │ <head>                                                  │    │
│  │   <meta charset="UTF-8">                                │    │
│  │   <meta name="viewport" content="width=device-width">   │    │
│  │   <title>{{SUBJECT}}</title>                            │    │
│  │   <!--[if mso]>                                         │    │
│  │   <style>table{border-collapse:collapse;}</style>       │    │
│  │   <![endif]-->                                          │    │
│  │ </head>                                                 │    │
│  │ <body style="margin:0;padding:0;">                      │    │
│  │   <table role="presentation" width="100%">              │    │
│  │     <tr><td align="center">                             │    │
│  │       <table width="600">                               │    │
│  │         <tr><td>                                        │    │
│  │                                                         │    │
│  │           <!-- ASSEMBLED COMPONENTS HERE -->             │    │
│  │                                                         │    │
│  │         </td></tr>                                      │    │
│  │       </table>                                          │    │
│  │     </td></tr>                                          │    │
│  │   </table>                                              │    │
│  │ </body>                                                 │    │
│  │ </html>                                                 │    │
│  │                                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                             │                                    │
│                             ▼                                    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ STEP 6: INLINE ALL CSS                                  │    │
│  │                                                         │    │
│  │ Gmail strips <style> blocks                             │    │
│  │ All CSS must be inline style="" attributes              │    │
│  │                                                         │    │
│  │ Before:                                                 │    │
│  │   <style>.headline { color: #1F2D2F; }</style>          │    │
│  │   <h1 class="headline">Text</h1>                        │    │
│  │                                                         │    │
│  │ After:                                                  │    │
│  │   <h1 style="color: #1F2D2F;">Text</h1>                │    │
│  │                                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                             │                                    │
│                             ▼                                    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ STEP 7: CONVERT TO TABLE LAYOUT                         │    │
│  │                                                         │    │
│  │ Outlook uses Word engine — no flexbox/grid               │    │
│  │ Must use <table> for all layout                         │    │
│  │                                                         │    │
│  │ Before (flexbox):                                       │    │
│  │   <div style="display:flex; gap:20px;">                 │    │
│  │     <div style="flex:1;">Left</div>                     │    │
│  │     <div style="flex:1;">Right</div>                    │    │
│  │   </div>                                                │    │
│  │                                                         │    │
│  │ After (table):                                          │    │
│  │   <table width="100%"><tr>                              │    │
│  │     <td width="50%" style="padding:10px;">Left</td>     │    │
│  │     <td width="50%" style="padding:10px;">Right</td>    │    │
│  │   </tr></table>                                         │    │
│  │                                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                             │                                    │
│                             ▼                                    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ STEP 8: ADD KLAVIYO VARIABLES                           │    │
│  │                                                         │    │
│  │ Replace personalization tokens:                         │    │
│  │   {first_name} → {{ first_name|default:"there" }}       │    │
│  │   {email} → {{ email }}                                 │    │
│  │   WELCOME10 → {{ discount_code }}                       │    │
│  │                                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                             │                                    │
│                             ▼                                    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ STEP 9: OUTPUT FILE                                     │    │
│  │                                                         │    │
│  │ Save to: outputs/html/<flow>/<email-id>.html            │    │
│  │                                                         │    │
│  │ File is ready to paste into Klaviyo HTML editor         │    │
│  │                                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Example: Assembling Welcome E1 L1

```
DECISION PICKS:
{
  "hook": {
    "component_id": "HERO-5",
    "image": "toddler-playing.jpg"
  },
  "validation": {
    "component_id": "4.1",
    "image": "toddler-livingroom-dino-yellow.png"
  },
  "mechanism": {
    "component_id": "PSYCH-06",
    "image": "washing-machine.jpg"
  },
  "cta": {
    "component_id": "5.1",
    "image": "toddler-napping-watermelon-pink-shorts.png"
  }
}

COPY TEXT (from parsed-email):
{
  "subject": "He talks about it but won't do it",
  "preview": "His brain and bladder are sending messages on different frequencies...",
  "sections": [
    {"type": "hook", "content": "He talks about the potty..."},
    {"type": "validation", "content": "This isn't your fault..."},
    {"type": "mechanism", "content": "This is called interoception..."},
    {"type": "cta", "content": "Let's explore what's happening"}
  ]
}

ASSEMBLY PROCESS:

Step 1: Lookup HERO-5 HTML
  → Extract from showcase-artifacts-final.html line 3904
  → Get raw HTML block

Step 2: Inject hook copy
  → Find {{HEADLINE}} in HERO-5 HTML
  → Replace with "He talks about it but won't do it"
  → Find {{BODY}} in HERO-5 HTML
  → Replace with hook paragraph text

Step 3: Inject image
  → Find {{HERO_IMAGE}} in HERO-5 HTML
  → Replace with "images/toddler-playing.jpg"

Step 4: Apply brand tokens
  → Find {{INK}} → replace with #1F2D2F
  → Find {{TEAL}} → replace with #2BAEB4
  → Find {{FONT_DISPLAY}} → replace with 'Fraunces', Georgia, serif

Step 5: Repeat for validation, mechanism, CTA sections

Step 6: Wrap all sections in Klaviyo shell
  → Add DOCTYPE, head, body, table layout

Step 7: Inline all CSS
  → Convert any style blocks to inline style=""

Step 8: Convert flexbox to tables
  → Replace display:flex with table layout

Step 9: Add Klaviyo variables
  → {{ first_name|default:"there" }} for personalization

Step 10: Save to outputs/html/welcome/welcome-01-e1-l1.html
```

## The Hard Parts

### 1. Component HTML Extraction

The 950+ components are in one massive HTML file (30,968 lines). Need to:
- Parse the HTML to find each component by line number
- Extract the HTML block for each component
- Handle nested components (some components contain others)

### 2. Placeholder Mapping

Each component has different placeholder names. Need to:
- Map component placeholders to copy sections
- Handle components that don't have standard placeholders
- Deal with components that have multiple content slots

### 3. CSS Inlining

Gmail strips <style> blocks. Need to:
- Parse CSS rules
- Match selectors to elements
- Inline styles into each element
- Handle media queries (keep as-is for Apple Mail)

### 4. Table Layout Conversion

Outlook uses Word engine. Need to:
- Convert flexbox to table layout
- Handle nested flex containers
- Preserve spacing and alignment
- Add MSO conditionals for Outlook-specific fixes

### 5. Image Hosting

Klaviyo needs image URLs, not local paths. Need to:
- Upload images to a CDN or Klaviyo media library
- Replace local paths with URLs
- Handle image alt text and sizing

## Output Structure

```
outputs/html/
├── welcome/
│   ├── welcome-01-e1-l1.html
│   ├── welcome-01-e1-l2.html
│   ├── welcome-01-e1-l3.html
│   ├── welcome-01-e1-gf.html
│   ├── welcome-01-e2-l1.html
│   └── ...
├── cart/
│   ├── cart-02-e1.html
│   ├── cart-02-e2.html
│   └── cart-02-e3.html
├── browse/
├── checkout/
├── pp-at-risk/
├── pp-direct-upsell/
├── pp-education/
├── pp-extended-ed/
├── pp-mary-story/
├── pp-mid-checkin/
├── replenish-a/
├── replenish-b/
├── replenish-c/
├── review-request/
├── site-abandonment/
└── sunset/
```

## Validation Checklist (per email)

```
□ HTML is valid
□ Width is 600px max
□ All CSS is inline (no <style> blocks)
□ Table-based layout (no flexbox/grid)
□ No JavaScript
□ Images have URLs (not local paths)
□ Klaviyo variables present ({{ first_name }})
□ Subject line present
□ Preview text present
□ Unsubscribe link present
□ Physical address present
□ Lena sign-off present
□ All copy text injected correctly
□ All brand tokens replaced
□ No broken HTML tags
```
