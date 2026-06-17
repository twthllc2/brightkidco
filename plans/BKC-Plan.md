# BKC Plan — Build Out

> **The concrete plan for building 125 email designs across 22 flows.**
> Replaces: `BKC-Plan-Final.md.archived-2026-06-15`
> Date: 2026-06-17

This plan is **about building the email designs** — the JSX components, the bundled HTMLs, the scp'd files. Not about delivery, payment, or Giuliano. The build environment is already prepared (see `BKCO - EMAIL MARKETING/README.md`).

---

## 1. THE PROBLEM WE'RE SOLVING

Giuliano's 10 working emails (welcome-flow) all look the same. The 950 components in `component-index-v2.md` exist as inspiration, not as modular JSX. The 28 photos are real but under-used. We have 125 emails to build. **If we use only the 14 primitives + 3 product showcases + 10 illustrations, every email will look like every other email.**

The fix: every email section picks its image + component based on **what the copy is trying to convey in that specific section** — not on slot-filling or code lookup. Mechanical rules enforce variety; creative decisions pick the right fit.

---

## 2. THE TWO INVENTORIES

### 2.1 Image Inventory (29 files)

```
flat-lay/ (12 product shots):
  training-pant-fox-red-white.jpg          — "fox-red"
  training-pant-cloud-raindrop-white.jpg   — "cloud-raindrop-white"
  training-pant-whale-ocean-blue.jpg      — "whale-ocean-blue"
  training-pant-bunny-hearts-pink.jpg     — "bunny-hearts-pink"
  training-pant-watermelon-pink.jpg       — "watermelon-pink"
  training-pant-fox-woodland-white.jpg    — "fox-woodland-white"
  training-pant-penguin-multicolor.jpg    — "penguin-multicolor"
  pocket-diaper-moon-cloud-blue.jpg       — "moon-cloud-blue"
  swim-diaper-giraffe-yellow.jpg          — "giraffe-yellow"
  swim-diaper-unicorn-pink.jpg            — "unicorn-pink"
  swim-diaper-whale-ocean-blue.jpg        — "swim-whale-ocean-blue"
  diaper-woodland-creature-yellow.jpg     — "woodland-creature-yellow"
  laundry-bag-llama-cream.png             — "laundry-bag-llama"  (accessory)

lifestyle/ (10 usable + 2 banned):
  toddler-livingroom-dino-yellow.png              — "toddler-livingroom-dino"  (L1, smiling, active)
  toddler-napping-watermelon-pink-shorts.png      — "toddler-napping"          (L3, dignity-first)
  toddler-backpack-moon-cloud-blue.png            — "toddler-backpack"         (L1, adventure)
  toddler-potty-ladder-yellow-woodland.png        — "toddler-potty-yellow"     (L1, action, on-product)
  toddler-rearview-cat-mustard.png                — "toddler-rearview"         (L3, dignity-first)
  founders-holding-pants-yellow-watermelon.png    — "founders"                 (BCBA / authority)
  toddler-playing-train-moon-cloud-blue.png       — "toddler-playing-train"    (L1, calm activity)
  toddler-potty-ladder-pink-multicolor.png        — "toddler-potty-pink"       (L2, on-product)
  washing-machine-training-pants.png              — "washing-machine"          (practical context)
  ❌ toddlers-backview-disposable-diapers.png     — BANNED (disposable = brand violation)
  ❌ toddler-outdoors-grass-disposable-diaper.png — BANNED (disposable = brand violation)

accessories/ (5):
  book-potty-training-guide.png                    — "book-guide"
  cloth-pads-watermelon-astronaut-cat.png          — "cloth-pads"
  potty-targets-stickers-chart.png                — "potty-targets"
  towel-set-llama-cactus.png                       — "towel-set"
  wet-bags-space-zebra-llama.png                   — "wet-bags"

branding/ (1):
  black-placeholder.png                             — "placeholder" (fallback only)
```

**29 usable images. 2 banned. 1 placeholder.**

### 2.2 Component Inventory

**Modular JSX (always available, 27 components):**
- 14 primitives: `EmailShell`, `Header`, `ImgFrame`, `FramedImage`, `Band`, `PartBadge`, `TitleBlock`, `Letter`, `Eyebrow`, `H2`, `CTAClose`, `Signoff`, `OutLine`, `Footer`
- 3 product showcases: `ProductShowcaseFull`, `ProductShowcaseMedium`, `ProductShowcaseSoft`
- 10 illustrations: `Illu_GentleMorning`, `Illu_Letter`, `Illu_QuietRoom`, `Illu_Hands`, `Illu_ProductPants`, `Illu_Airplane`, `Illu_Signal`, `Illu_Sensory`, `Illu_CalmSun`, `Illu_QuoteBadge`

**Showcase HTML (inline-able, 637 distinct component codes in `showcase-artifacts-final.html`):**
- These are pre-rendered HTML sections. Subagents copy-paste the HTML into `emails.jsx` when they need a specialized section the 27 modular components don't cover.

**Why both:** The 27 modular = the skeleton (always works, always fast). The showcase HTML = the variety layer (slow to integrate but unlocks the 950 "components" in the index).

---

## 3. THE CANONICAL SECTION TYPES

Across 254 copy files, the body sections reduce to these canonical types. Every email section is one of these:

| Section | What the copy does | What image goes here | What component style goes here |
|---------|---------------------|----------------------|---------------------------------|
| **HOOK** | Opens the email, mirrors the parent's state, sets emotional tone | L1: smiling toddler, L3: gentle illustration (Illu_GentleMorning / Illu_QuietRoom) | TitleBlock + FramedImage hero, OR Letter-only no image |
| **VALIDATION** | "You're not alone" — 3-5 recognition anchors describing real situations | L1: no image (text-only), L3: napping/rearview (gentle) | Letter (multi-paragraph) + PartBadge sticker |
| **MECHANISM** | Explains the body-signal gap, interoception, the "why nothing worked" | Illu_Signal (the body-signal wave graphic) — primary. Or no image for text-heavy flows. | Letter + H2 with gradient accent + optional Illu_Signal |
| **SOCIAL PROOF** | 3 parent quotes ("He talked about the potty but wouldn't actually go...") | founders photo for BCBA authority; toddler-livingroom for L1; no image for L3 | Eyebrow "FROM PARENTS" + 3 stacked quote cards (inline HTML) |
| **PRODUCT INTRO** | Introduces the BSL underwear, what it does, what's different | The flow's primary product photo (e.g. bunny-pink for Cart) | ProductShowcaseSoft (gentle mention) OR ProductShowcaseMedium (inline) |
| **GUARANTEE** | 60-day promise, full refund, no questions | No image. The seal IS the visual. | 60-Day Seal (alias for PartBadge/Letter pattern) + dashed policy quote |
| **CTA** | The ask: buy / try / reply | The flow's primary product photo for ProductShowcaseFull | CTAClose (dark block) OR ProductShowcaseFull + CTAClose |
| **RECOGNITION ANCHORS** | Bulleted list of 3-5 specific parent situations | No image (text-only list) | Eyebrow "DOES THIS SOUND FAMILIAR?" + bulleted Letter |
| **TIMELINE FLEXIBILITY** | "Some kids show signs in 2 weeks, some in 8 weeks" | No image | Letter (multi-paragraph) + H2 |
| **WEEK-1 GUIDE** | What to expect in days 1-7 (post-purchase) | toddler-on-product (potty ladder) for L1/L2, napping for L3 | Numbered step list (inline HTML) + small product photo |
| **WHAT'S NEW / UPDATE** | Tells customer about a product change, color, or feature | The flow's primary product photo, new angle | ProductShowcaseMedium + Letter |
| **FAQ / ANSWER** | Answers a specific question parents ask | book-guide (post-purchase context) or no image | Q&A blocks (inline HTML) |
| **LOW-BAR SUCCESS** | "Any of these count as a win this week" | No image (text-only) | Bulleted list (inline HTML) + H2 |
| **STORY (Founder / Mary / Lena)** | First-person narrative from founder or Lena | founders photo | Letter (long-form) + Illu_Letter as accent |
| **URGENCY** | Time-limited offer, last chance | The bundle product photo | ProductShowcaseFull + CTAClose with lime CTA |
| **RECOVERY / REASSURANCE** | "It's okay if you paused" | toddler-napping OR no image | Letter + PartBadge "No guilt" |

**Not every email has every section. Most emails have 5-8 sections chosen from this list.**

---

## 4. PER-SECTION DECISION RULES (how the image is picked)

The subagent reads the section, identifies its canonical type from the table above, and then picks the image based on these rules:

### Rule 1: Image by Section Type + Level

| Section | L1 (verbal, 3-5, hope) | L2 (mixed, 5-7) | L3 (non-verbal, 6-10, dignity) | GF (general) |
|---------|------------------------|----------------|-------------------------------|--------------|
| **HOOK** | toddler-livingroom-dino (smiling) | toddler-backpack (calm adventure) | Illu_GentleMorning (illustration) | toddler-livingroom-dino |
| **VALIDATION** | no image | no image | toddler-napping (gentle) | no image |
| **MECHANISM** | Illu_Signal (the wave) | Illu_Signal | Illu_Signal | Illu_Signal |
| **SOCIAL PROOF** | toddler-livingroom-dino (kid-validated) | founders (authority) | founders (parent-validated, no kid face) | founders |
| **PRODUCT INTRO** | flow's primary product | flow's primary product | flow's primary product (no smiling child) | flow's primary product |
| **GUARANTEE** | no image | no image | no image | no image |
| **CTA** | flow's primary product (full showcase) | flow's primary product | flow's primary product | flow's primary product |
| **RECOGNITION ANCHORS** | no image | no image | no image | no image |
| **TIMELINE FLEXIBILITY** | no image | no image | no image | no image |
| **WEEK-1 GUIDE** | toddler-potty-yellow (action) | toddler-potty-pink (on-product) | toddler-napping (gentle) | toddler-potty-yellow |
| **STORY** | founders | founders | founders | founders |
| **URGENCY** | flow's primary product | flow's primary product | flow's primary product | flow's primary product |
| **RECOVERY** | toddler-napping | toddler-napping | toddler-napping | toddler-napping |
| **FAQ** | book-guide (or no image) | book-guide | no image (text-only) | book-guide |

### Rule 2: The Flow's Primary Product Photo (mandatory, distinct per flow)

Every flow has ONE primary product photo. It appears in PRODUCT INTRO and CTA sections. No two flows share the same primary product.

| Flow | Primary product |
|------|-----------------|
| welcome | fox-red |
| cart | bunny-hearts-pink |
| browse | cloud-raindrop-white |
| checkout | watermelon-pink |
| pp-education | moon-cloud-blue |
| pp-extended-ed | penguin-multicolor |
| pp-direct-upsell | fox-woodland-white |
| pp-extended-upsell | woodland-creature-yellow |
| pp-mid-checkin | fox-red |
| pp-level-detection | giraffe-yellow |
| pp-mary-story | whale-ocean-blue |
| pp-at-risk | bunny-hearts-pink |
| winback-a | watermelon-pink |
| winback-b | fox-red |
| replenish-a | cloud-raindrop-white |
| replenish-b | bunny-hearts-pink |
| replenish-c | moon-cloud-blue |
| review-request | penguin-multicolor |
| site-abandonment | fox-woodland-white |
| sunset | whale-ocean-blue |
| transactional | unicorn-pink |
| faq | woodland-creature-yellow |

### Rule 3: Photo Diversity Per Email (the hard rule)

**Every email must use ≥3 different images.** The pick depends on the section types present:

- If email has HOOK + PRODUCT + CTA → HOOK image + PRODUCT image + (no third needed, but add accessory if possible)
- If email has VALIDATION + MECHANISM + SOCIAL PROOF + PRODUCT → MECHANISM illustration + SOCIAL PROOF founder photo + PRODUCT photo = 3 ✓
- If email is text-only (FAQ, sunset) → still use 1 image somewhere, even if just the book-guide accessory

### Rule 4: The Banned Pairings

These combinations are off-brand and must never appear:

- ❌ toddler-outdoors-grass-disposable (banned, disposable diaper in photo)
- ❌ toddlers-backview-disposable (banned, same reason)
- ❌ Disposable diaper with product in same email
- ❌ Yellow quote card (tilted, plan rule #1, "4.2 Quote Card Yellow" retired pattern)
- ❌ Universal PartBadge → H1 → illustration → CTA opener (plan rule #4)
- ❌ Lime-on-dark CTA outside Cart / Winback B / PP At Risk (plan rule #5)
- ❌ Em dash (—) in any copy text (use commas, periods, line breaks)

---

## 5. PER-SECTION COMPONENT DECISION RULES

The 27 modular JSX components are the default. The 950 showcase components are the variety layer. Decision tree:

### Step 1: Does the section match a primitive directly?

| Section type | Modular JSX (use directly) |
|--------------|---------------------------|
| HOOK | `TitleBlock` + `FramedImage` (with the HOOK image) |
| VALIDATION | `Letter` (multi-paragraph, "you're not alone") + optional `PartBadge` sticker "You're not alone" |
| MECHANISM | `Letter` + `H2` with gradient accent + `Illu_Signal` if needed |
| SOCIAL PROOF | `Eyebrow` ("FROM PARENTS") + inline HTML for 3 stacked quote cards (or copy from showcase TRUSTDEEP-2 / SP-08) |
| PRODUCT INTRO | `ProductShowcaseSoft` (gentle) or `ProductShowcaseMedium` (inline) |
| GUARANTEE | inline HTML 60-Day Seal component (copy from `10.1 60-Day Seal` at L887 in showcase) + dashed policy quote |
| CTA | `ProductShowcaseFull` + `CTAClose` (dark block) |
| RECOGNITION ANCHORS | `Eyebrow` + bulleted list (inline HTML or LETTER-12 Fragmented Text) |
| TIMELINE FLEXIBILITY | `Letter` + `H2` (no image) |
| WEEK-1 GUIDE | `Eyebrow` ("WEEK 1") + numbered step list (inline HTML or STEP/PROCESS components) |
| FAQ | inline Q&A blocks (copy from `30.1 FAQ Card` at L2600) |
| STORY | `Letter` (long-form) + `Illu_Letter` as visual accent |
| URGENCY | `ProductShowcaseFull` + `CTAClose` with lime CTA |
| RECOVERY | `Letter` + `PartBadge` "No guilt" |

### Step 2: If the section needs a pattern the 27 primitives don't cover, use a showcase component

The subagent opens `showcase-artifacts-final.html`, finds the line number from `component-index-v2.md`, copies the relevant HTML, and pastes it as a `<div>` section in `emails.jsx`. The `component-index-v2.md` file is the index; the showcase HTML is the source.

Common showcase-component extractions (high-value, copy these first):

- **TRUSTDEEP-13 The Guarantee Breakdown** (L13744) — for Cart/Checkout guarantee section
- **SP-08 Stacked Mini-Reviews** (L4966) — for SOCIAL PROOF when 3 quotes are needed
- **EDU-2 Step Cards** (L5226) — for WEEK-1 GUIDE numbered steps
- **EDU-3 Checklist** (L5259) — for RECOGNITION ANCHORS bulleted lists
- **EDU-7 Did You Know** (L5389) — for MECHANISM science callout
- **CMP-1 Three-Column Method Cards** (L6052) — for MECHANISM comparison
- **EMO-2 Micro-Win Card** (L6884) — for LOW-BAR SUCCESS section
- **CMP-3 Promise vs Reality** (L6113) — for VALIDATION contrast
- **LETTER-12 Fragmented Text** (L8096) — for STORY / first-person narrative

### Step 3: If the section is text-only, no image is needed

Sections without images: VALIDATION, GUARANTEE (mostly), RECOGNITION ANCHORS, TIMELINE FLEXIBILITY, FAQ, LOW-BAR SUCCESS, parts of MECHANISM.

### Step 4: If the section is URGENCY or RE-ENGAGEMENT, allow extra variety

These can break the "primary product only" rule for the CTA section — show 2 products (e.g. the single pair + the bundle), or use the accessory photos (book-guide, potty-targets, wet-bags) to signal "more than just the pants."

---

## 6. THE BUILD PROCESS (per email, step by step)

For each email, the subagent does these 9 steps in order. **Do not skip steps. Do not reorder.**

### Step 1: Read the copy
```
Read /root/projects/brightkidco/outputs/copy/<flow>/<file>.md FULLY.
Don't skim. Note:
- The subject line and its formula
- The preview text
- The from name
- The body sections (Hook, Validation, Mechanism, etc.)
- The Lena sign-off
- The Creative Strategy section if present
```

### Step 2: Identify the level and emotional phase
```
If the copy has a level marker (L1, L2, L3, GF, or a sub-group), use it.
If not, default to GF.
The level determines the image picks (see Rule 1).
```

### Step 3: List the canonical sections
```
For each "## Section N: Name" or "## Hook" / "## Validation" etc. in the copy,
identify its canonical type from the Section Table in §3 above.
The result: [HOOK, VALIDATION, MECHANISM, SOCIAL_PROOF, PRODUCT, GUARANTEE, CTA]
```

### Step 4: Assign images
```
For each section, apply the Image by Section Type + Level table.
The flow's primary product photo goes in PRODUCT and CTA sections.
Check the Banned Pairings list.
Verify ≥3 different images across the email.
```

### Step 5: Pick components
```
For each section, decide: modular primitive OR showcase HTML extraction.
Start with the 27 primitives. Extract from showcase only when needed.
For each modular pick, note the props (bg, color, shadow, etc.) to vary from
the previous email in the same flow.
```

### Step 6: Pick the color palette
```
Pick 3 distinct bg colors for the email sections. They must NOT match
the previous email in the same flow. Use the 5-bg-options rotation:
[cream (#FBF7F1), white (#FFFFFF), mint (#EAF6F2), lavender (#F0EDF8), beige (#F5F1EA)]
```

### Step 7: Write content.js
```
Add to window.FLOW_<KEY>:
  <emailKey>: {
    meta: { part, timing, theme, level },
    preheader: "...",
    subject: "...",
    fromName: "Lena from BrightKidCo",
    sections: {
      hook: { headline: "...", body: "...", image: "<image path>" },
      validation: { ... },
      mechanism: { ... },
      ...
    },
    signoff: { line1, name, ps },
    out: "...",
    footer: { tagline, links, address }
  }
```

### Step 8: Write emails.jsx
```
const Email<N> = () => {
  const c = window.FLOW_<KEY>.<emailKey>;
  return (
    <EmailShell preheader={c.preheader} bg={c.shellBg}>
      <Header bg={c.shellBg} />
      {/* Hero — based on HOOK image + headline */}
      <TitleBlock badge={c.sections.hook.badge} part1={c.sections.hook.part1} part2={c.sections.hook.part2} />
      <FramedImage src={c.sections.hook.image} height={240} shadow={6} />
      {/* Body sections — one per canonical type */}
      <Band from={c.shellBg} to="#EAF6F2" />
      <Eyebrow>You're not alone</Eyebrow>
      <Letter bg="#EAF6F2" paras={c.sections.validation.paras} />
      {/* ... more sections ... */}
      {/* CTA */}
      <ProductShowcaseSoft ... />
      <CTAClose button={c.sections.cta.button} fine={c.sections.cta.fine} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};
Object.assign(window, { Email<N> });
```

### Step 9: Write app.jsx + bundle + ship
```
Add the email to the canvas:
<DCArtboard id="<emailKey>" label="<position> · <theme>" width={MW} height={estimatedHeight}>
  <window.Email<N> />
</DCArtboard>

Bundle the canvas HTML (NOT the .jsx source):
python3 /root/projects/email-ops/email-design/tools/bundle_standalone.py \
  "raw/BKCO - EMAIL MARKETING/<flow>-flow/<Flow> Local.html" \
  "raw/<Flow> _standalone_.html"

The bundler inlines React, Babel runtime, all .jsx files, all images, and
all fonts into a single self-contained HTML (~3.2MB). Opening this file in
a browser shows the design canvas with all emails in the flow rendered at 420px.
This is what gets scp'd to cachy — the canvas HTML, not the source.

Run all 13 verification checks (§8). Fix any failures and re-run until all 13 pass.

Ship the bundled canvas HTML (autonomous, no confirmation):
scp "raw/<Flow> _standalone_.html" ayoub@100.76.121.113:/home/ayoub/Documents/
ssh ayoub@100.76.121.113 "chmod 644 '/home/ayoub/Documents/<Flow> _standalone_.html'"

If scp returns non-zero, retry up to 2 times. If still failing, log the exit code and
continue — the file is on disk at raw/<Flow> _standalone_.html and ready for manual
shipment later. Do not stop.

NEVER scp the .jsx source. The .jsx files are build artifacts, not deliverables.
The deliverable is the bundled canvas HTML (raw/<Flow> _standalone_.html).
```

---

## 7. SUBAGENT BRIEF TEMPLATE

Every subagent dispatched to build an email gets this brief:

```markdown
─────────────────────────────────────────────
TASK: <flow> · email <N> · <level>
─────────────────────────────────────────────

## YOUR JOB

You are building ONE email for BrightKidCo. Read the copy, understand the
moment, and pick the right image + component for each section. No slot-filling.
No random selection. Every pick must match the section's intent.

## MANDATORY READS (open BEFORE writing any code)

1. /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/BKC-WORKFLOW.md
   — the build pipeline (READ FIRST)
2. /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/BKC - EMAIL MARKETING/README.md
   — the folder structure
3. /root/projects/brightkidco/outputs/copy/<flow>/<copy-file>.md
   — THE COPY (read in full)
4. /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/email-6.jsx
   — the best real example of an email component
5. /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/content.js
   — the best real example of content data
6. /root/projects/email-ops/email-design/component-index-v2.md
   — 950 components indexed by email position
7. /root/projects/email-ops/email-design/showcase-artifacts-final.html
   — the actual HTML for the 950 components (search by line number)
8. /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/<flow>-flow/<Flow> Local.html
   — the loader for this flow (already templated, just needs your emails.jsx)
9. /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx
   — the 14 shared components (use these first)
10. /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/product-showcase.jsx
    — the 3 product variants
11. /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/autistic-welcome/variants/illustrations.jsx
    — the 10 SVG illustrations
12. /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/design-canvas.jsx
    — the canvas wrapper (already loaded)

## FLOW-SPECIFIC INPUTS

- Flow: <flow>
- Flow key: <FLOW_KEY>  (used in window.FLOW_<KEY>)
- Flow primary product photo: <primary product>  (use in PRODUCT and CTA sections)
- Flow copy directory: /root/projects/brightkidco/outputs/copy/<flow>/
- Flow number of emails: <count>
- This email: <email file>
- Email position: <E1/E2/E3>
- Level: <L1/L2/L3/GF>
- Lena closing word: "Talk soon" (E1-E2) | "With understanding" (E3-E5) | "With care" (E6+)

## SECTION-BY-SECTION IMAGE PLAN (your output)

For each section in the copy, write:
  Section N: <name>
  Type: <canonical type from §3 table>
  Level: <L1/L2/L3/GF>
  Image: <path>  (from §4 table)
  Why: <1 sentence — what the image conveys that matches the copy>

## SECTION-BY-SECTION COMPONENT PLAN (your output)

For each section:
  Section N: <name>
  Component: <modular JSX name OR showcase component code + line>
  Source: <modular | showcase extract>
  Props: <key props, e.g. bg="#EAF6F2" shadow={4}>

## PALETTE PLAN (your output)

  Shell bg: <color>
  Section bg 1: <color>
  Section bg 2: <color>
  Section bg 3: <color>
  Must differ from previous email in this flow.

## DIVERSITY CHECK (run before reporting back)

- [ ] ≥3 different images used
- [ ] No banned pairings
- [ ] Level-appropriate image picks (no smiling toddler in L3)
- [ ] Primary product photo appears in PRODUCT or CTA section
- [ ] Color palette differs from previous email in this flow
- [ ] Section structure differs from previous email (≥3 unique sections)
- [ ] No yellow tilted quote card
- [ ] No universal PartBadge → H1 → illustration opener
- [ ] No em dashes in copy
- [ ] € symbol not $

## VERIFICATION (run before reporting back)

- File exists, >500 bytes
- `grep "—" content.js` → 0
- `grep "\\$" content.js` → 0
- Count sections → ≥7
- `grep yellow + tilted` emails.jsx → 0
- Bundle output exists, >2MB

## OUTPUT (your report-back)

1. File paths produced
2. Subject line + formula used
3. Section-by-section image + component picks (with justifications)
4. Color palette used
5. Bundler output size
6. scp status (exit code) + final file location on cachy
```

---

## 8. THE 13-POINT VERIFICATION (run before shipping every email)

The 13 checks are split into two passes: **§8.1 — Variety checks** (7 points) and **§8.2 — Brand-on checks** (6 points). All 13 run automatically. If any check fails, fix and re-run until all pass. The email is done when all 13 pass. No human gate. The subagent fixes the issue and proceeds.

**The 13 mechanical checks catch the dumb mistakes. The 14th check (auto-fix loop) catches the lazy ones: if a check fails, the subagent does not move on. It fixes, re-verifies, and proceeds.**

### 8.1 — Variety Checks (7 points)

```bash
cd /root/projects/email-ops/email-design

# 1. File exists, >500 bytes
test -s "raw/BKCO - EMAIL MARKETING/<flow>-flow/emails.jsx" && echo "✅ V1: JSX exists"

# 2. No em dashes in copy
test -z "$(grep -c '—' "raw/BKCO - EMAIL MARKETING/<flow>-flow/content.js")" && echo "✅ V2: no em dashes"

# 3. No $ in customer text (use €)
test -z "$(grep -c '\$' "raw/BKCO - EMAIL MARKETING/<flow>-flow/content.js")" && echo "✅ V3: no dollar signs"

# 4. ≥7 sections per email
test $(grep -c 'return (' "raw/BKCO - EMAIL MARKETING/<flow>-flow/emails.jsx") -ge 7 && echo "✅ V4: ≥7 sections"

# 5. No yellow tilted quote card (retired pattern #1)
test -z "$(grep -E 'PartBadge.*transform.*rotate' "raw/BKCO - EMAIL MARKETING/<flow>-flow/emails.jsx")" && echo "✅ V5: no tilted badge as quote card"

# 6. ≥3 different images used in the email
# Count unique <img src=...> patterns
test $(grep -oE 'src="[^"]+"' "raw/BKCO - EMAIL MARKETING/<flow>-flow/emails.jsx" | sort -u | wc -l) -ge 3 && echo "✅ V6: ≥3 unique images"

# 7. No banned pairings (disposable diaper photos)
test -z "$(grep -E 'disposable-diaper|disposable_diapers|outdoors-grass' "raw/BKCO - EMAIL MARKETING/<flow>-flow/emails.jsx")" && echo "✅ V7: no banned photos"
```

### 8.2 — Brand-on Checks (6 points)

```bash
cd /root/projects/email-ops/email-design

# 8. Lena identity per email position
# E1 must be "The BrightKidCo team" (we/our voice)
# E2+ must be "Lena Bauer" (I/my voice)
# F2 (Flow 2 discount) may be "Lena" first name only
# Subagent MUST tag each email key (e1, e2, d0, d7, etc.) in content.js.
# Check fails if any email's signoff.name doesn't match the expected Lena identity.
python3 << 'PYEOF'
import re, sys

content = open('raw/BKCO - EMAIL MARKETING/<flow>-flow/content.js').read()

# Find each email block with its key (e1, e2, d0, d7, etc.) and its signoff.name
pattern = re.compile(
    r'^\s*(e\d+|d\d+|f2e\d+):\s*\{',
    re.MULTILINE
)
matches = list(pattern.finditer(content))
errors = []
for i, m in enumerate(matches):
    key = m.group(1)
    # Get the block for this email (until next key or end)
    start = m.end()
    end = matches[i+1].start() if i+1 < len(matches) else len(content)
    block = content[start:end]
    # Find signoff.name in this block
    name_m = re.search(r'signoff\s*:\s*\{[^}]*?name\s*:\s*[\"\']([^\"\']+)[\"\']', block)
    if not name_m:
        errors.append(f"{key}: no signoff.name found")
        continue
    name = name_m.group(1)
    # E1 = "The BrightKidCo team", E2+ = "Lena Bauer", F2 = "Lena" allowed
    digit = int(re.search(r'\d+', key).group())
    if key.startswith('f2'):
        expected = ["Lena", "Lena Bauer", "The BrightKidCo team"]
    elif digit == 1:
        expected = ["The BrightKidCo team"]
    else:
        expected = ["Lena Bauer", "Lena"]
    if name not in expected:
        errors.append(f"{key}: signoff.name='{name}' but expected one of {expected}")

if errors:
    print(f"❌ B8: Lena identity violations:")
    for e in errors:
        print(f"  - {e}")
    sys.exit(1)
print("✅ B8: Lena identity correct for all emails")
PYEOF

# 9. Closing word per email position
# E1-E2 closing: 'Talk soon,'
# E3-E5 closing: 'With understanding,'
# E6+ closing: 'With care,'
# Subagent MUST tag each email key (e1, e2, d0, d7, etc.) in content.js.
# Check fails if any email's signoff.line1 doesn't match the expected position.
python3 << 'PYEOF'
import re, sys

content = open('raw/BKCO - EMAIL MARKETING/<flow>-flow/content.js').read()

pattern = re.compile(
    r'^\s*(e\d+|d\d+|f2e\d+):\s*\{',
    re.MULTILINE
)
matches = list(pattern.finditer(content))
errors = []
for i, m in enumerate(matches):
    key = m.group(1)
    start = m.end()
    end = matches[i+1].start() if i+1 < len(matches) else len(content)
    block = content[start:end]
    line1_m = re.search(r'signoff\s*:\s*\{[^}]*?line1\s*:\s*[\"\']([^\"\']+)[\"\']', block)
    if not line1_m:
        errors.append(f"{key}: no signoff.line1 found")
        continue
    line1 = line1_m.group(1)
    digit = int(re.search(r'\d+', key).group())
    if digit <= 2:
        expected = "Talk soon,"
    elif digit <= 5:
        expected = "With understanding,"
    else:
        expected = "With care,"
    if line1 != expected:
        errors.append(f"{key}: signoff.line1='{line1}' but expected '{expected}' (E{digit})")

if errors:
    print(f"❌ B9: closing word violations:")
    for e in errors:
        print(f"  - {e}")
    sys.exit(1)
print("✅ B9: closing word correct for all emails")
PYEOF

# 10. No rgba / blur / soft shadows in emails.jsx (hard shadows only)
# Brand rule: 3px 3px 0, 4px 4px 0, 6px 6px 0 with B.ink — no blur, no rgba
test -z "$(grep -E 'rgba\(' "raw/BKCO - EMAIL MARKETING/<flow>-flow/emails.jsx")" && echo "✅ B10: no rgba"
test -z "$(grep -E 'boxShadow.*[0-9]+px [0-9]+px [0-9]+px [0-9]+px' "raw/BKCO - EMAIL MARKETING/<flow>-flow/emails.jsx")" && echo "✅ B10b: no blur shadows (4th value = blur)"
# Allow: '3px 3px 0', '4px 4px 0', '6px 6px 0' — but flag any 4-value shadow

# 11. No colors outside the brand palette in emails.jsx
# Allowed: teal #2BAEB4, tealDeep #1E8A8F, green #5DD07A, greenDeep #3BB35E,
#          ink #1F2D2F, soft #4A6568, muted #8A9B9D, cream #FBF7F1, paper #FFFFFF,
#          yellow #FFD866, lime #D8F57C, lavender #F0EDF8, mint #EAF6F2, beige #F5F1EA
# Plus dark signoff #1F2A2C
ALLOWED='#(2BAEB4|1E8A8F|5DD07A|3BB35E|1F2D2F|4A6568|8A9B9D|FBF7F1|FFFFFF|FFD866|D8F57C|F0EDF8|EAF6F2|F5F1EA|1F2A2C|FFFBF0|FFF6E2|FFFD|F6F)'
BAD_COLORS=$(grep -oE '#[0-9A-Fa-f]{6}' "raw/BKCO - EMAIL MARKETING/<flow>-flow/emails.jsx" | grep -viE "$ALLOWED" | sort -u)
test -z "$BAD_COLORS" && echo "✅ B11: all colors in brand palette" || echo "❌ B11: off-palette colors: $BAD_COLORS"

# 12. No external labels in customer-facing copy
# Banned phrases in content.js: 'Level 1', 'Level 2', 'Level 3', 'autism', 'ASD', 'autistic'
# (allowed: 'autistic' can appear in the from name "Mom of two autistic sons" — Lena's signoff)
test -z "$(grep -iE 'Level [123]|the autism|an asd|with asd' "raw/BKCO - EMAIL MARKETING/<flow>-flow/content.js")" && echo "✅ B12: no external labels"

# 13. No discount codes during warming (or in welcome/cart early flows)
# Allowed in: cart-flow E3, replenish-c, winback-b, transactional
# Banned in: welcome-flow, all PP flows (post-purchase has no discount), sunset
# This is a flow-specific check
python3 -c "
import re, sys
content = open('raw/BKCO - EMAIL MARKETING/<flow>-flow/content.js').read()
flow = '<flow>'
# Detect discount patterns: BRIGHT10, %, 'off your first', etc.
discounts = re.findall(r'(BRIGHT\\w+|\\d+%\\s*off|save\\s*\\d+%|\\$\\d+)', content, re.IGNORECASE)
# Flows where discounts are banned
banned_flows = ['welcome', 'pp-', 'sunset']
if any(flow.startswith(bf) for bf in banned_flows):
    if discounts:
        print(f'❌ B13: discount code in flow {flow}: {discounts}')
        sys.exit(1)
print('✅ B13: no unauthorized discount codes')
"
```

### 8.3 — Auto-Fix Loop (no human gate)

If any of the 13 checks fails, the subagent fixes the issue and re-runs the full 13-check suite. Loop terminates only when all 13 pass. There is no fallback, no manual override, no "ship anyway." The email is done when all 13 pass.

**The standard for done:** all 13 mechanical checks pass on a single run with no warnings. The file is on cachy. The subagent reports back file paths + bundler size + scp status. That is the end of the build for that email. Move to the next.

---

## 9. THE PER-FLOW BUILD ORDER

We build 125 emails across 22 flows. To maximize variety feedback early and avoid repeating mistakes late, build in this order:

### Phase 1 — Flagship (4 flows, 12 emails)
1. **cart-flow** (3 emails) — most-used flow, validates the system
2. **browse-flow** (3 emails) — similar to cart, second-validation
3. **checkout-flow** (2 emails) — completes the abandonment trio
4. **pp-education-flow** (4 emails) — first post-purchase flow, tests product showcase in different context

### Phase 2 — Cross-level reworks (5 flows, 50 emails)
5. **pp-direct-upsell-flow** (2)
6. **pp-extended-upsell-flow** (3)
7. **pp-mid-checkin-flow** (3)
8. **pp-at-risk-flow** (4)
9. **replenish-a/b/c-flows** (7 total)

### Phase 3 — Long-tail reworks (5 flows, 43 emails)
10. **pp-level-detection-flow** (2)
11. **pp-mary-story-flow** (1)
12. **pp-extended-ed-flow** (20 — biggest single block, level variants)
13. **winback-a-flow** (12)
14. **winback-b-flow** (12)

### Phase 4 — Welcome levels (1 flow, 32 emails)
15. **welcome-flow** (32 — split by level: L1, L2, L3, GF × 8 each)

### Phase 5 — Reference flows (7 flows, 23 emails)
16. **review-request-flow** (2)
17. **site-abandonment-flow** (1)
18. **sunset-flow** (2)
19. **transactional-flow** (4)
20. **faq-flow** (6)
21. **winback-a-flow** (rev — already done in Phase 3)
22. **winback-b-flow** (rev — already done in Phase 3)

**Total: 125 emails across 22 flows.**

---

## 10. PARALLEL vs SEQUENTIAL DECISION

When dispatching multiple emails at once, use this rule:

| Flow | Parallel safe? | Reason |
|------|----------------|--------|
| Different flows | ✅ Yes | Different copy files, different variety budgets |
| Same flow, different emails | ⚠️ Cautious | The previous email's palette + component picks constrain the next. Subagent must read both. |
| Same email, different levels | ❌ No | Variants must share skeleton. Build one, then derive the others. |

**Rule of thumb:** Dispatch up to 3 emails in parallel, all from different flows. For same-flow emails, build them sequentially (1-2-3 in order).

---

## 11. WHEN TO PROMOTE A SHOWCASE COMPONENT TO MODULAR

Start with copy-paste from showcase. Promote to modular when:

1. The same showcase component is used in ≥3 different emails
2. The HTML is the same across all 3 uses (not customized per use)
3. It would save more than 30 lines per use

**High-priority candidates for promotion (likely 3+ uses):**
- TRUSTDEEP-13 The Guarantee Breakdown → `<GuaranteeBreakdown />` 
- SP-08 Stacked Mini-Reviews → `<StackedReviews quotes={[]} />`
- EDU-2 Step Cards → `<StepCards steps={[]} />`
- EDU-3 Checklist → `<Checklist items={[]} />`
- EMO-2 Micro-Win Card → `<MicroWinCard label="" />`
- LETTER-12 Fragmented Text → `<FragmentedText lines={[]} />`

After 5+ modular components are added, the variety available per email doubles.

---

## 12. WHAT THIS PLAN IS NOT

This plan does NOT cover:
- Delivery to Giuliano, payment, business relationships
- Klaviyo implementation, sending, segments, tags
- Subject line A/B testing
- Deliverability (DKIM, SPF, warmup)
- Performance tracking, analytics

This plan ONLY covers: building the 125 email designs, ensuring they have variety in images and components, and bundling them to `_standalone_.html` for handoff.

---

## 13. THE COMPLETION STANDARD

When the 125 emails are done, they are **done**. There is no further gate.

**Done means:**
- 22 flow folders have populated `content.js`, `emails.jsx`, `app.jsx` files
- All 13 mechanical verification checks pass on every email
- All 125 bundled `_standalone_.html` files exist at `raw/<Flow> _standalone_.html`
- All 125 files are on cachy at `/home/ayoub/Documents/<Flow> _standalone_.html` with `chmod 644`
- The `_TEMPLATE/content.js` structure is followed in every flow (per-email key + signoff inside each email block)

**When done, the build is uploadable.** No final review, no second pass, no human check. The 13 mechanical checks are the standard. If they pass, the email is on-brand and varied. If they fail, fix and re-run. The end.

---

## 14. RELATED DOCS

- `BKCO - EMAIL MARKETING/README.md` — folder structure
- `BKCO - EMAIL MARKETING/BKC-WORKFLOW.md` — the build pipeline in 6 steps
- `BKCO - EMAIL MARKETING/_TEMPLATE/README.md` — the 4-file pattern
- `component-index-v2.md` — 950 components by position
- `BKC-Plan-Final.md.archived-2026-06-15` — the old plan (for reference, will be deleted later)
