# BKC Email Production — Base Plan v1

---

## ASSET INVENTORY

### What We Have

**Component Library:** 922 components across 80 categories
- Hero (23), Badge (5), Text/Letter (84), and 77 more categories
- Full index at: `email-ops/email-design/component-index.md`

**Copy Files:** 114+ emails across 22 flows
- welcome (32 across levels), winback-a (12), winback-b (12), pp-extended-ed (20), browse (3), cart (3), checkout (2), pp-at-risk (4), pp-direct-upsell (2), pp-education (4), pp-extended-upsell (3), pp-level-detection (2), pp-mary-story (1), pp-mid-checkin (3), replenish-a (3), replenish-b (2), replenish-c (2), review-request (2), site-abandonment (1), sunset (2), transactional (4)
- Each copy file has: subject line, preview text, from name, email body sections (hook, validation, mechanism, social proof, product intro, guarantee, CTA), creative strategy/visual direction

**Brand Tokens:** `raw/BKCO - EMAIL MARKETING/autistic-welcome/variants/tokens.js`
- Colors: teal #2BAEB4, green #5DD07A, ink #1F2D2F, cream #FBF7F1, paper #FFFFFF
- Fonts: Questrial (primary), Fraunces (serif accent)

**Raw JSX Environment:**
- `design-canvas.jsx` — design canvas wrapper (React components)
- `email-1.jsx` — reference email (Welcome Flow · Autistic Parent · Email 1)
- JSX compiles to XHTML via the existing build system

**Product Photos:** 29 images across 4 categories
- accessories (5), branding (1), flat-lay (14), lifestyle (9)
- Content: training pants patterns, potty ladder, lifestyle shots, accessories

**Reference Designs:** Giuliano's welcome flow (10 standalone emails) built in CloudDesign using the raw JSX environment — this is the quality benchmark

---

## THE WORKFLOW (5 PHASES)

### Phase 1: Strategy Mapping (1 wave, ~5 agents)

**Goal:** Create a master map connecting every email to its components, images, and structure.

Each email copy file already contains a "Creative Strategy — Visual Direction" section with:
- Layout architecture (ASCII wireframe)
- Color narrative
- Typography specs
- Custom illustrations/contraptions
- Level calibration notes

**Agents do:**
1. Read each copy file
2. Extract the visual direction section
3. Map components from the 922-component library to each section (hero, body, social proof, product, CTA, footer)
4. Assign product images to each email (avoid repetition)
5. Flag structural requirements (e.g., "2-column hero", "3 testimonial cards", "3-layer product visual")

**Output:** `outputs/strategy-map.json` — one entry per email with:
- Flow name, email number, level/avatar
- Component IDs for each section
- Image assignments
- Structure type (unique per flow, not per email)

---

### Phase 2: Structure Assembly (Ralph waves, ~15 agents per wave)

**Goal:** Build each email as a JSX file using the raw environment.

**Wave structure:**
- Wave 1: Welcome flow (32 emails) — highest priority, most complex
- Wave 2: Winback flows (24 emails)
- Wave 3: Post-purchase flows (pp-extended-ed 20 + pp-at-risk 4 + pp-education 4 + others)
- Wave 4: Browse/Cart/Checkout/Abandonment (13 emails)
- Wave 5: Remaining flows (sunset, review, transactional, etc.)

**Each agent:**
1. Reads the strategy map entry for their assigned email
2. Reads the copy file
3. Reads the component library (relevant section only)
4. Reads the reference JSX (email-1.jsx) for structure pattern
5. Writes a complete JSX file using the raw environment
6. Each email gets UNIQUE structure based on its creative strategy — no copy-paste layouts

**Output:** `outputs/emails/<flow>/<email-number>.jsx` — one JSX file per email

---

### Phase 3: Visual Verification (Ralph waves, ~15 agents per wave)

**Goal:** Screenshot every email and analyze with vision.

**Each agent:**
1. Takes the JSX file
2. Renders it in a browser (using the existing design-canvas wrapper or standalone HTML)
3. Takes a Playwright screenshot
4. Analyzes the screenshot with vision:
   - Is the layout correct?
   - Are images properly placed?
   - Is the email structure following e-commerce best practices?
   - Above the fold clarity?
   - CTA visibility?
   - Mobile preview check?
5. Flags issues for revision

**Output:** `outputs/verification/<flow>/<email-number>.md` — pass/fail + specific issues

---

### Phase 4: Revision (Ralph waves, conditional)

**Goal:** Fix any emails that failed visual verification.

Only runs if Phase 3 flags issues. Each agent:
1. Reads the verification report
2. Reads the JSX file
3. Fixes the specific issues
4. Re-renders and re-verifies

---

### Phase 5: XHTML Compilation (1 wave, ~5 agents)

**Goal:** Compile all JSX files to production-ready XHTML.

**Each agent:**
1. Takes a batch of verified JSX files
2. Compiles to XHTML using the existing build system
3. Validates the XHTML output
4. Packages with images

**Output:** `outputs/production/<flow>/<email-number>.xhtml` + images

---

## STRUCTURE VARIETY RULES

Each email MUST have a unique structure. No two emails in the same flow share the same layout. Rules:

1. **Hero variation:** Each flow gets a different hero style (split-asymmetric, full-width, minimal, illustration-led, stat-led, quote-led)
2. **Section order:** Mix the order of social proof, mechanism, product intro, guarantee — don't always stack the same way
3. **Column count:** Alternate between single-column, 2-column, and 3-column sections
4. **Visual density:** Some emails image-heavy, some text-heavy — match the copy's tone
5. **CTA placement:** Above the fold + bottom (always), but vary mid-email CTA placement
6. **Testimonial treatment:** Cards, stacked quotes, inline pull-quotes, full-width blocks — vary within flow

---

## WHAT WE DO NOT TOUCH (Yet)

- Graveyard system (compilation/packaging) — easy part, Phase 5 handles
- Klaviyo integration — separate concern
- A/B test variants — after production emails are locked

---

## ESTIMATED SCALE

- Total emails: ~114
- Total Ralph waves: ~8-10 waves
- Estimated agent-hours: 2-3 hours (parallelized via 15 concurrent agents)
- Critical path: Phase 1 (strategy map) must complete before Phase 2 starts
