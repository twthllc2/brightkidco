# BKC Email Production — Base Plan v2

---

## THE RAW DESIGN ENVIRONMENT (Source of Truth)

Everything we build comes FROM this environment. We do not invent a new system.

### Location
`/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/`

### Architecture
The environment is a React-based JSX system with 5 layers:

**Layer 1 — Brand Tokens (`tokens.js`)**
```js
window.BRAND = {
  teal: "#2BAEB4",      // primary accent
  tealDeep: "#1E8A8F",  // dark teal
  green: "#5DD07A",     // secondary accent
  greenDeep: "#3BB35E", // dark green
  ink: "#1F2D2F",       // primary text, borders, shadows
  soft: "#4A6568",      // body text
  muted: "#8A9B9D",     // secondary text
  cream: "#FBF7F1",     // warm background
  paper: "#FFFFFF",     // card/surface background
  gradient: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
  gradientText: { ... }, // gradient applied to text via background-clip
};

window.FONT = {
  main: "'Questrial', system-ui, sans-serif",
  display: "'Fraunces', Georgia, serif",
};
```
These colors and fonts are LAW. Every email uses these exact values.

**Layer 2 — Primitives (`primitives.jsx`)**
Reusable React components shared across all 6 emails:
- `ImgFrame` — image placeholder with dashed teal border + corner markers
- `FramedImage` — framed image wrapper (black border + drop-shadow)
- `Band` — gradient transition between sections
- `Header` — logo header
- `PartBadge` — yellow sticker badge ("Part 2 of 6")
- `TitleBlock` — badge + H1 + gradient accent + subhead
- `Letter` — paragraph stack on warm background
- `Eyebrow` — small uppercase section label
- `H2` — section heading
- `CTAClose` — dark CTA section with button
- And more (see full primitives.jsx)

**Layer 3 — Content Data (`content.js`, `content-flow2.js`)**
Per-email content as JavaScript objects:
- `meta` — part number, timing, theme
- `preheader`, `subject` — inbox preview
- `heroBadge`, `h1a`, `h1b` — hero section
- `letterOpening` — array of paragraph strings
- `definitionLabel/Title/Body` — mechanism section
- `reframeLabel/Title/Points` — reframe section
- `compareCards` — comparison cards (neg/pos tones)
- `expertQuote` — expert testimonial
- `ctaIntro/Button/FinePrint` — CTA section

**Layer 4 — Product Showcase (`product-showcase.jsx`)**
Three variants for different email contexts:
- `ProductShowcaseFull` — E4, E6 (hero product moment)
- `ProductShowcaseMedium` — E5 (inline in story)
- `ProductShowcaseSoft` — E2, E3 (end-of-email gentle nod)

**Layer 5 — App (`app.jsx`)**
Wraps everything in DesignCanvas with artboards for each email.

### The Two Flows in the Environment
- **Flow 1 (6 emails):** Welcome Flow · Autistic Parent — THIS is the branding reference
- **Flow 2 (4 emails):** Discount Welcome · BRIGHT10 — secondary reference

We take the BRANDING from Flow 1 (colors, fonts, presentation style, component patterns) but we do NOT copy the layout structure. Each new email gets its own unique structure.

---

## ASSET INVENTORY

### What We Have

**Component Library:** 922 components across 80 categories
- Full index: `/root/projects/email-ops/email-design/component-index.md`
- Categories: Hero (23), Badge (5), Text/Letter (84), Social Proof (18), Product Showcase (24), CTA (12), Footer (8), Navigation (6), Testimonial (15), Stat/Data (11), Visual Break (9), Decorative (14), + 65 more

**Copy Files:** 114+ emails across 22 flows
- welcome (32 across levels), winback-a (12), winback-b (12), pp-extended-ed (20), browse (3), cart (3), checkout (2), pp-at-risk (4), pp-direct-upsell (2), pp-education (4), pp-extended-upsell (3), pp-level-detection (2), pp-mary-story (1), pp-mid-checkin (3), replenish-a (3), replenish-b (2), replenish-c (2), review-request (2), site-abandonment (1), sunset (2), transactional (4)
- Each file has TWO halves: Email Copy + Creative Strategy
- Copy includes: subject, preview, from name, body sections (hook, validation, mechanism, social proof, product intro, guarantee, CTA)
- Creative Strategy includes: big idea, layout wireframe, color narrative, typography, custom illustrations, level calibration

**Product Photos:** 29 images across 4 categories
- accessories (5): potty targets stickers, wet bags, towel set, cloth pads, book
- branding (1): black placeholder
- flat-lay (14): training pants patterns (cloud, fox, bunny, woodland), swim diapers, pocket diaper, laundry bag
- lifestyle (9): toddler scenes (potty ladder, playing, napping, outdoors, founders)

**Reference Plans:** `/root/projects/brightkidco/plans/`
- email-copy-production.md — the detail level benchmark (186KB, shows exact rules, templates, source file paths)
- overnight-plan.md, strategy-8-decision-docs.md, wave-a-15-synthesis-docs.md

---

## THE WORKFLOW (5 PHASES)

### Phase 1: Strategy Mapping
`1 wave, ~5 agents`

**Goal:** Create a master map connecting every email to its components, images, and structure.

**What each agent receives:**
1. The copy file for their assigned emails (the full file with both halves)
2. The component index (relevant sections only)
3. The raw environment reference (primitives.jsx pattern)
4. Product photos list

**What each agent produces per email:**

```json
{
  "flow": "welcome",
  "email": "e1",
  "level": "gf",
  "subject": "Your child might not feel the signal",
  "timing": "Day 0",
  "purpose": "Immediate validation + mechanism teaser",

  "structure": {
    "hero_type": "split-asymmetric",
    "sections_order": ["hero", "letter", "definition", "reframe", "compare", "expert", "cta"],
    "column_layouts": {
      "hero": "2-column (35/65)",
      "body": "single-column",
      "compare": "3-column cards",
      "cta": "single-column centered"
    },
    "visual_density": "text-heavy with 2 illustration moments"
  },

  "components": {
    "hero": ["HERO-1 Curiosity Gap", "ImgFrame product"],
    "letter": ["Letter block", "Eyebrow label"],
    "definition": ["Stat callout box", "H2 gradient accent"],
    "reframe": ["Sticker Reasons 2x2 Grid"],
    "compare": ["3 comparison cards (neg/neg/pos)"],
    "expert": ["Expert Quote Card"],
    "cta": ["CTAClose dark section"]
  },

  "images": {
    "hero": "flat-lay/training-pant-cloud-raindrop-white.jpg",
    "lifestyle": "lifestyle/toddler-potty-ladder-yellow-woodland.png",
    "product": "flat-lay/training-pant-fox-red-white.jpg"
  },

  "color_emphasis": {
    "warm_pct": 70,
    "green_pct": 30,
    "accent_used": ["teal for stat callout", "cream for letter bg"]
  },

  "flags": [
    "GF level — needs 3-family testimonial pattern",
    "Inclusive framing required (Whether...Or...If...)",
    "No urgency language"
  ]
}
```

**Agent assignments (5 agents, parallel):**
- Agent 1: welcome flow (all 32 emails)
- Agent 2: winback-a + winback-b (24 emails)
- Agent 3: pp-extended-ed + pp-at-risk + pp-education (28 emails)
- Agent 4: browse + cart + checkout + site-abandonment + sunset (10 emails)
- Agent 5: replenish-a/b/c + review-request + pp-direct-upsell + pp-extended-upsell + pp-level-detection + pp-mid-checkin + pp-mary-story + transactional (20 emails)

**Output:** `outputs/strategy-map.json` — complete mapping for all 114 emails

---

### Phase 2: Structure Assembly
`Ralph waves, ~15 agents per wave`

**Goal:** Build each email as a JSX file using the raw environment.

**The Build Pattern:**

Every email JSX file follows this structure:
```jsx
// 1. Import tokens and primitives
const B = window.BRAND;
const F = window.FONT;
// Copy relevant primitives (ImgFrame, Letter, Eyebrow, H2, CTAClose, etc.)

// 2. Define the email component
const Welcome_E1_GF = () => {
  // 3. Use primitives + custom sections
  return (
    <div style={{ width: 600, margin: "0 auto", fontFamily: F.main, background: B.paper, color: B.ink, borderRadius: 24, overflow: "hidden" }}>
      {/* Preheader */}
      {/* Header with logo */}
      {/* Hero section — UNIQUE per email */}
      {/* Body sections — order varies per strategy map */}
      {/* Product showcase — Full/Medium/Soft variant */}
      {/* CTA section */}
      {/* Footer */}
    </div>
  );
};

window.Welcome_E1_GF = Welcome_E1_GF;
```

**Critical rules for assembly:**
1. Every email uses the SAME tokens (colors, fonts) from tokens.js
2. Every email reuses primitives from primitives.jsx (do not reinvent Letter, Header, CTAClose, etc.)
3. Each email's STRUCTURE is unique — determined by the strategy map
4. Product showcase variant (Full/Medium/Soft) is chosen based on the email's purpose
5. Images come from the product photos list — assigned by strategy map, no repetition within flow
6. The JSX renders at 600px width (email standard)
7. All styles are inline (no CSS classes — email client compatibility)

**Wave structure:**
- Wave 1: Welcome flow (32 emails) — highest priority, most complex
- Wave 2: Winback flows (24 emails)
- Wave 3: Post-purchase flows (pp-extended-ed 20 + pp-at-risk 4 + pp-education 4 + others)
- Wave 4: Browse/Cart/Checkout/Abandonment (13 emails)
- Wave 5: Remaining flows (sunset, review, transactional, etc.)

**Each agent receives:**
1. Strategy map entry for their assigned email(s)
2. The copy file
3. The primitives.jsx reference
4. The tokens.js reference
5. The product-showcase.jsx reference
6. Product photos list

**Each agent produces:**
- One JSX file per email at `outputs/emails/<flow>/<email-number>-<level>.jsx`
- Each JSX file is self-contained (includes all styles inline)
- Each JSX file uses the brand tokens and primitives

**Output:** `outputs/emails/<flow>/<email-number>.jsx` — 114 JSX files total

---

### Phase 3: Visual Verification
`Ralph waves, ~15 agents per wave`

**Goal:** Screenshot every email and analyze with vision.

**Verification checklist per email:**
1. **Layout correctness** — Does the JSX render properly? Are sections in the right order?
2. **Image placement** — Are product photos in the correct positions? No broken images?
3. **Brand consistency** — Are the correct colors/fonts used? Does it match Flow 1 branding?
4. **E-commerce structure** — Above the fold clarity? CTA visible? Social proof present?
5. **Mobile preview** — Does it work at 600px width? Text readable? Buttons tappable?
6. **Copy flow** — Does the visual structure support the copy's emotional arc?
7. **No repetition** — Is this email's structure genuinely different from others in the same flow?

**Each agent receives:**
1. The JSX file
2. The strategy map entry (for comparison)
3. The verification checklist

**Each agent produces:**
- Screenshot of the rendered email
- Verification report with pass/fail per checklist item
- Specific issues flagged for revision

**Output:** `outputs/verification/<flow>/<email-number>.md` — pass/fail + issues

---

### Phase 4: Revision
`Conditional — only if Phase 3 flags issues`

**Goal:** Fix any emails that failed visual verification.

**Each agent receives:**
1. The verification report (specific issues)
2. The JSX file
3. The strategy map entry

**Each agent:**
1. Reads the verification report
2. Fixes the specific issues flagged
3. Re-renders and re-verifies
4. Updates the verification report

**Output:** Updated JSX files + updated verification reports

---

### Phase 5: XHTML Compilation
`1 wave, ~5 agents`

**Goal:** Compile all JSX files to production-ready XHTML.

**Each agent:**
1. Takes a batch of verified JSX files
2. Compiles to XHTML using the existing build system (JSX → HTML → XHTML)
3. Validates the XHTML output (well-formed, all tags closed, no stray divs)
4. Packages with images (inline base64 for small images, linked for large)

**Output:** `outputs/production/<flow>/<email-number>.xhtml` + images

---

## STRUCTURE VARIETY RULES

Each email MUST have a unique structure. No two emails in the same flow share the same layout.

### Hero Variation
- Flow 1 uses: split-asymmetric hero (2-column, left illustration + right text)
- New flows must use different hero types:
  - Full-width illustration hero
  - Minimal text-only hero
  - Stat-led hero (big number + context)
  - Quote-led hero (testimonial as hero)
  - Product-led hero (product image as hero)
  - Curiosity gap hero (question + partial answer)

### Section Order Variation
- Flow 1 order: hero → letter → definition → reframe → compare → expert → product → CTA
- New emails must mix this order:
  - Some: hero → social proof → mechanism → product → CTA
  - Some: hero → product → story → mechanism → CTA
  - Some: hero → mechanism → social proof → product → guarantee → CTA

### Column Layout Variation
- Flow 1 uses: single-column body, 3-column comparison cards
- New emails must vary:
  - 2-column feature grid
  - 3-column testimonial cards
  - Single-column full-width blocks
  - Asymmetric layouts (sidebar + main content)

### Visual Density Variation
- Some emails: image-heavy (product showcase full, 3+ images)
- Some emails: text-heavy (letter block, mechanism explanation)
- Match the density to the copy's tone and purpose

### CTA Placement Variation
- Always: above the fold (hero) + bottom (before footer)
- Vary mid-email CTA:
  - After mechanism section
  - After social proof
  - After product showcase
  - Before guarantee
  - Or no mid-email CTA (some emails don't need it)

### Testimonial Treatment Variation
- Cards (3 side by side)
- Stacked quotes (single column, left border accent)
- Inline pull-quotes (within body text)
- Full-width blocks (testimonial as hero section)
- Expert vs parent testimonials vary by email purpose

---

## WHAT WE DO NOT TOUCH (Yet)
- Graveyard system (compilation/packaging) — easy part, Phase 5 handles
- Klaviyo integration — separate concern
- A/B test variants — after production emails are locked

---

## ESTIMATED SCALE
- Total emails: ~114
- Total Ralph waves: ~8-10
- Estimated time: 2-3 hours (15 concurrent agents)
- Critical path: Phase 1 must complete before Phase 2 starts
