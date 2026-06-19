# How to Build a BrightKidCo Email — Component & Image Selection

What this document covers: The process of going from a copy file to a wireframe-ready email design. Covers picking the copy, understanding it, reading the components, selecting components and images, extracting the brand, and writing the wireframe. Nothing about code, JSX, transpilation, or rendering.
>
> **Prerequisite:** The project exists at `/root/projects/brightkidco/` with copy files, component index, product photos, and Giuliano's source components already in place.

---

## Step 1 — Pick a Copy File

### Where the copy files live
`/root/projects/brightkidco/outputs/copy/`

### How they're organized
One folder per flow. Inside each folder, one `.md` file per email.

```
outputs/copy/
├── browse/          (3 files)
├── cart/            (3 files)
├── checkout/        (2 files)
├── faq-library/     (6 files)
├── pp-at-risk/      (4 files)
├── pp-direct-upsell/(2 files)
├── pp-education/    (4 files)
├── pp-extended-ed/  (20 files)
├── pp-extended-upsell/(3 files)
├── pp-level-detection/(2 files)
├── pp-mary-story/   (1 file)
├── pp-mid-checkin/  (3 files)
├── replenish-a/     (3 files)
├── replenish-b/     (2 files)
├── replenish-c/     (2 files)
├── review-request/  (2 files)
├── site-abandonment/(1 file)
├── sunset/          (2 files)
├── transactional/   (4 files)
├── welcome/         (32 files)
├── winback-a/       (12 files)
└── winback-b/       (12 files)
```

**Total:** 127 copy files across 22 flows.

### Naming convention
`<flow-slug>-<email-number>.md`
Example: `cart-02-e1.md` = Cart Abandonment (flow 02), Email 1

### How to pick which flow to build first

**Criteria (in order of priority):**

1. **Fewer emails = faster win.** A flow with 2-3 emails is better to start than welcome (32 files) or pp-extended-ed (20 files). You want to complete a full flow, not get stuck on email 1 of 32.

2. **Cross-level is simpler than per-level.** Some emails are "cross-level" — one copy file serves all 4 avatar levels (L1/L2/L3/GF) via R1-R6 calibration rules. Others have separate copy files per level (e.g., welcome has `welcome-01-e1-gf.md`, `welcome-01-e1-l1.md`, `welcome-01-e1-l2.md`, `welcome-01-e1-l3.md`). Cross-level = one design, one build. Per-level = 4 designs per email.

3. **Pre-purchase is simpler than post-purchase.** Cart, browse, checkout emails are typically shorter and more focused than post-purchase education flows.

4. **Check the flow has a creative strategy.** The copy file's second half must contain a "Creative Strategy — Visual Direction" section. If it doesn't, you're building blind — no color palette, no typography spec, no layout direction. Some copy files (especially older ones) may only have the email copy without the creative strategy.

### To list available flows and file counts
```bash
for d in /root/projects/brightkidco/outputs/copy/*/; do
  name=$(basename $d)
  [ "$name" = "analysis" ] && continue
  count=$(find $d -name '*.md' | wc -l)
  [ "$count" -gt 0 ] && echo "$name: $count files"
done
```

### To check if a copy file has a creative strategy
```bash
grep -l "Creative Strategy" /root/projects/brightkidco/outputs/copy/cart/*.md
```
If the file has a `## Creative Strategy` or `# HALF ONE — CREATIVE STRATEGY` section, it has visual direction. If not, pick a different email.

---

## Step 2 — Read and Understand the Copy File

### The rule
Read the ENTIRE file. Every line. No skimming. No skipping sections. The copy file is the single source of truth for what this email IS — its content, its tone, its visual design, its constraints.

### What a copy file contains

Every copy file has two halves. Both halves matter. The second half is the design spec.

**HALF ONE — The email copy:**
- **Metadata block:** flow name, email position, level scope, phase, purpose, emotional arc position
- **Subject line:** with character count, formula used, mobile preview check, spam check
- **Preview text:** the text that appears after the subject in the inbox
- **From name:** who the email is from (usually "Lena from BrightKidCo")
- **Email body:** labeled sections with exact copy text. Format varies by flow:
  - Format A (browse, cart, checkout, most post-purchase): "Section 1: Hook", "Section 2: Validation", etc.
  - Format B (welcome, some extended flows): "HALF ONE — CREATIVE STRATEGY" + "HALF TWO" with flowing copy embedded in strategy
- **Next-time teaser:** a line hinting at the next email
- **Sign-off:** Lena's closing with title
- **Footer:** brand name, address, unsubscribe, reply line
- **Source citations:** every claim traced back to strategy/synthesis docs

**HALF TWO — The creative strategy (visual direction):**
This section exists in well-written copy files. It tells you exactly what to build visually.

- **The Big Idea:** the central visual metaphor for the email
- **Layout Architecture:** above-fold / below-fold breakdown, mobile collapse rules, column structure
- **Custom Illustration / Contraption:** SVG specs, node descriptions, animation details
- **Color Narrative:** full palette with hex values for light AND dark mode, emotional arc of colors
- **Typography as Design:** font stack, hierarchy table with sizes/weights/tracking for every element, expressive treatments (e.g., "the word 'signal' gets emerald color")
- **Decorative Furniture:** dividers, bullets, borders, background textures, signatures
- **Hidden Detail / Easter Egg:** micro-interactions, progress indicators
- **Motion / Animation:** GIF specs, frame count, timing, client fallbacks (Apple Mail, Gmail, Outlook)
- **Level Calibration:** how the visual serves all 4 avatar levels without labeling them. Includes "What is NOT present" — the banned imagery list.

### How to read it (the process)

**Pass 1 — Get the shape:**
Read the whole file top to bottom. Don't stop to analyze. Just get a feel for:
- How long is this email? (count the sections)
- What's the emotional tone? (warm? clinical? urgent? gentle?)
- Is there a creative strategy section? (if not, flag it)
- How many copy sections are there?
- Are there testimonials? Product mentions? Guarantees?

**Pass 2 — Break down each copy section:**
Go section by section. For each one, write down:
- Section number and name
- The exact copy text (or a faithful summary if it's very long)
- What's the emotional purpose of this section? (hook? validate? educate? prove? close?)
- Does this section reference a specific component pattern? (e.g., "Three-Family Testimonial Pattern" = you know you need a 3-card testimonial component)
- Does this section need an image? (product shot? lifestyle? illustration? none?)
- Are there any special formatting requirements? (blockquote? numbered list? flowing prose?)

**Pass 3 — Extract the design specs:**
From the creative strategy section, extract and write down:

1. **Color palette** — every hex value and its role. Make a table:
   | Role | Hex | Notes |
   |------|-----|-------|
   | Background | #XXXXXX | |
   | Body text | #XXXXXX | |
   | Headline | #XXXXXX | |
   | Accent | #XXXXXX | Where used |
   | ... | ... | |

2. **Typography** — every element with its size, weight, font:
   | Element | Mobile | Desktop | Weight | Font |
   |---------|--------|---------|--------|------|
   | Eyebrow | Xpx | Xpx | X00 | |
   | H1 | Xpx/X | Xpx/X | X00 | |
   | Body | Xpx/X | Xpx/X | X00 | |
   | ... | ... | ... | ... | |

3. **Layout rules** — above-fold content, below-fold content, mobile collapse behavior, max-width, padding conventions

4. **Custom illustrations** — any SVG or visual that needs to be built from scratch (not a standard component). Note: what it looks like, dimensions, colors, animation if any.

5. **Constraints (the BANNED list)** — everything the creative strategy says must NOT be present. This drives your image selection in Step 4.

6. **Level calibration** — how the email serves all 4 levels simultaneously. Note any R1-R6 rule references.

### What the R1-R6 rules are

These are the cross-level calibration rules referenced throughout the copy files. They ensure one email works for all 4 avatar levels:

| Rule | Name | What it means |
|------|------|---------------|
| R1 | Symptom Over Label | Never use diagnostic labels. Describe symptoms instead. "Your child doesn't feel when they need to go" not "Your autistic child has interoception deficits" |
| R2 | 3-5 Recognition Anchors | Include 3-5 specific symptoms that parents recognize. Each level finds themselves in different anchors. |
| R3 | Age Ranges | Use inclusive age language. "Whether your child is 3 or 10" — never assume a specific age. |
| R4 | Verbal/Non-Verbal Inclusivity | Pair verbal and non-verbal cues in the same sentence. Don't assume the child speaks. |
| R5 | Timeline Flexibility | Don't promise specific timelines. "The signal arrives" not "results in 2 weeks." |
| R6 | Low Bar Success | Define success as awareness moments, not "trained." "A pause before an accident is progress." |

### What to do with the extracted info
You now have:
- A list of copy sections with their purposes
- A color palette
- A typography spec
- Layout rules
- Custom illustration specs
- A banned-items list
- Level calibration notes

This is your input for Step 4 (component and image selection). Keep it open while you work.

---

## Step 3 — Read the Full Component Index

### Where it lives
`/root/projects/brightkidco/outputs/email-design/component-index-v2.md`

### Size
1071 lines, 950 component entries

### Why you must read the ENTIRE index
The index is a catalog of every visual pattern available for building emails. You need to see ALL options before choosing. If you only skim the first few categories, you'll miss components in later categories that are a better fit.

### Structure

The index is organized by **13 email positions** — the order components appear in an email, top to bottom:

| # | Position | What it covers | Count |
|---|----------|---------------|-------|
| 1 | SHELL & HEADER | Email wrapper, logo, dividers, decorative SVGs, page chrome | 30 |
| 2 | HERO | Top fold, primary message opener (text-based, not photo) | 30 |
| 3 | BODY — RECOGNITION & STORY | "You are not alone" / emotional middle | 117 |
| 4 | BODY — MECHANISM & EDUCATION | "This is how it works" middle (always BEFORE trust per plan rule) | 177 |
| 5 | BODY — SOCIAL PROOF & TESTIMONIALS | "Real parents" middle (text-based) | 15 |
| 6 | BODY — IMAGES & PHOTOS | Visual content blocks, UGC, lifestyle, unboxing | 140 |
| 7 | PRODUCT SHOWCASE | "What you're buying" block (banned in post-purchase) | 81 |
| 8 | GUARANTEE & TRUST | Risk reversal (Cart, PP Mid Checkin, Winback B, PP At Risk only) | 84 |
| 9 | CTA — THE CLOSE | The ask (match to moment, never universal) | 53 |
| 10 | EMOTIONAL SUPPORT | "You don't have to be perfect" blocks | 37 |
| 11 | FLOW-SPECIFIC PATTERNS | Pre-built templates per flow (Welcome E1-E5, Cart E1-E3, etc.) | 103 |
| 12 | SEASONAL & CAMPAIGN | Date-specific or campaign visuals (use only when relevant) | 76 |
| 13 | SIGNOFF & FOOTER | Lena signoff, footer, social, legal | 7 |

### The tag system

Every component entry has a tag that tells you its origin and quality level:

| Tag | Meaning | Priority |
|-----|---------|----------|
| `[G]` | **Literal Giuliano source.** The component name matches what's in `primitives.jsx`, `product-showcase.jsx`, or `illustrations.jsx`. These are the 27 actual components Giuliano built. | **HIGHEST** — use these first |
| `[G+]` | **Giuliano-derived.** Wraps or aliases a `[G]` component. E.g., `3.2 Eyebrow Label` uses the `Eyebrow` primitive. | **HIGH** — second choice |
| `[A*]` | **Quality-approved.** Has the ✦ star marker. Giuliano approved the design, but it's not in his source files. | **MEDIUM** — good fallback |
| `[A]` | **Agent/standard.** No star, no Giuliano source link. Built by an agent or is a generic pattern. | **LOWEST** — use when nothing else fits |
| `⚠️ RETIRED` | **Banned.** On the plan's banned-patterns list. Do NOT use in new work. | **NEVER** |

**Rule of thumb:** When multiple components could work for a section, always pick the one with the highest-priority tag. A `[G]` component that's "close enough" beats an `[A]` component that's "perfect."

### The 27 Giuliano source components (THE FOUNDATION)

These are the components defined in Giuliano's actual source files. They are the design system. Everything else in the 950-entry index is either derived from these or is an agent-built pattern.

**From `primitives.jsx` (14):**
| Component | What it renders |
|-----------|----------------|
| `EmailShell` | Outer email wrapper — the 600px container with background color |
| `Header` | Logo header with background — centered logo image |
| `ImgFrame` | Image placeholder — dashed teal frame with corner marks, used when no photo is ready |
| `FramedImage` | Image wrapper — black border + drop shadow around an ImgFrame or real image |
| `Band` | Gradient transition band — a horizontal color gradient between sections |
| `PartBadge` | Sticker/badge — small rotated pill with text (e.g., "Part 2 of 6") |
| `TitleBlock` | Title block — badge + H1 (two-part headline) + optional subhead |
| `Letter` | Letter block — paragraph stack on warm background, the "Lena writing to you" feel |
| `Eyebrow` | Eyebrow label — small uppercase text above the headline |
| `H2` | Section heading — secondary heading for subsections |
| `CTAClose` | CTA button — the call-to-action button |
| `Signoff` | Lena signoff — closing with signature area |
| `OutLine` | Outline/border element — decorative border treatment |
| `Footer` | Footer bar — dark background with brand, address, unsubscribe |

**From `product-showcase.jsx` (3):**
| Component | What it renders |
|-----------|----------------|
| `ProductShowcaseFull` | Full product showcase — large product display with details |
| `ProductShowcaseMedium` | Medium product showcase — mid-size product display |
| `ProductShowcaseSoft` | Soft/gentle product showcase — text-forward, minimal imagery |

**From `illustrations.jsx` (10):**
| Component | What it renders |
|-----------|----------------|
| `Illu_GentleMorning` | Morning scene illustration |
| `Illu_Letter` | Letter/mail illustration |
| `Illu_QuietRoom` | Quiet room illustration |
| `Illu_Hands` | Hands illustration |
| `Illu_ProductPants` | Product pants illustration |
| `Illu_Airplane` | Paper airplane illustration |
| `Illu_Signal` | Signal waves illustration |
| `Illu_Sensory` | Sensory illustration |
| `Illu_CalmSun` | Calm sun illustration |
| `Illu_QuoteBadge` | Quote badge illustration |

### Where the primitives live
`/root/projects/brightkidco/outputs/email-design/welcome-flow/primitives.jsx`
`/root/projects/brightkidco/outputs/email-design/welcome-flow/product-showcase.jsx`
`/root/projects/brightkidco/outputs/email-design/autistic-welcome/` (illustrations may be here or in a separate file)

### How to see what a component actually looks like

Each entry in the index has a line number like `(L450)`. This points to the actual rendered HTML inside:
`/root/projects/brightkidco/outputs/email-design/showcase-artifacts-final.html`

This is a 2.5MB HTML file containing ALL 950 components rendered as actual HTML. To see a component:
1. Note the line number from the index (e.g., `L450`)
2. Open `showcase-artifacts-final.html` in a text editor
3. Jump to that line number
4. You'll see the actual HTML/CSS of that component

### The retired patterns (DO NOT USE)

| Pattern | Plan Rule | Why banned |
|---------|-----------|------------|
| 4.2 Quote Card Yellow (tilted yellow) | #1 | Was used in 18 out of 20 flows — massively overused |
| 60-day seal in non-guarantee flows | #3 | Only allowed in: Cart, PP Mid Checkin, Winback B, PP At Risk |
| Universal lime-on-dark CTA outside allowed flows | #5 | Only allowed in: Cart, Winback B, PP At Risk |
| Universal Body Signal SVG outside allowed flows | #7 | Only allowed in: Welcome E3, PP Ed D14, FAQ, PP Ext Ed W2 |
| Em dashes (—) in any copy text | #13 | Use commas, periods, or line breaks instead |
| $ pricing in copy | #10 | Use € (e.g., €34, €30.60 with BRIGHT10, €79.99 bundle) |
| External labels in customer text | #11 | Never say "this customer is a Level 2 mom" — use symptom language |

### How to navigate the index

1. **Start with your email's copy sections.** You know from Step 2 what sections the email has (hero, validation, mechanism, testimonials, product, guarantee, CTA, signoff, footer).

2. **Map each copy section to a position category.** "Hero" copy → HERO category. "Three testimonials" → BODY — SOCIAL PROOF. "60-day guarantee" → GUARANTEE & TRUST. And so on.

3. **Within each category, scan all entries.** Look at the tag first: `[G]` → `[G+]` → `[A*]` → `[A]`. Check if it's retired (⚠️). Read the component name — does it match what the copy section needs?

4. **Check the line number.** If you're unsure what a component looks like, look it up in `showcase-artifacts-final.html`.

5. **Consider flow-specific patterns.** Category 11 (FLOW-SPECIFIC PATTERNS) has pre-built templates like `FLOW-4 Cart Reminder` or `FLOWDEEP-6 Cart E1 Gentle Reminder`. These can be starting points, but the creative strategy in the copy file is usually more specific than any template. Use the primitives to build the custom design, don't drop in a generic template.

---

## Step 4 — Select Components AND Images Together

### Why together (not separate)

Images need components to hold them. A product photo needs a product showcase component. A lifestyle photo needs an image frame component. A logo needs a header component. You can't pick images without knowing which component will display them, and you can't pick components without knowing if they need to hold an image.

### The 3-4 image minimum rule

**Every email MUST have minimum 3-4 images.** No exceptions. Even text-forward emails. Even mechanism-focused emails. Even emails that say "no product push."

If the available photos don't fit the email's constraints, **leave a placeholder** — a marked slot that says "image needed here, spec: [description]."

Typical image slots in an email:
1. **Logo** — always present, lives in the Header component. This counts as image 1.
2. **Hero illustration or image** — the main visual above the fold. Could be a custom SVG, a lifestyle photo, or a product hero shot. Counts as image 2.
3. **Content images** — product photos, lifestyle shots, illustrations within the body. Counts as image 3.
4. **Secondary image** — another product angle, a decorative element, or a placeholder for a future image. Counts as image 4.

### The selection process (do both in one pass)

For each section of the email, answer these questions IN ORDER:

**A. Does this section need an image?**
- Check the copy text — does it describe a product? A person? A scene?
- Check the creative strategy — does it specify an illustration or photo for this section?
- Check the constraints — are there banned image types that would eliminate your options?

**B. If yes, which photo from the available set fits?**
- List all available photos (from `outputs/email-design/product-photos/` or `raw/product-photos/`)
- For each photo, check against the email's banned-items list (from the creative strategy's "What is NOT present" section)
- Eliminate photos that violate constraints
- From the remaining, pick the one that best matches the section's purpose

**C. Which component holds this image?**
- Go to the matching position category in the component index
- Find a component that displays images (look for image-related components: `IMG-03` Product Flat Lay, `FramedImage`, `ImgFrame`, `ProductShowcaseSoft`, etc.)
- Prioritize `[G]` and `[G+]` components

**D. If no photo fits, create a placeholder.**
- Describe what image is needed: subject, style, constraints
- This placeholder will be filled later with a custom photo or illustration

### Photo evaluation process

List every available photo. For each one, check:

| Check | Question | If yes |
|-------|----------|--------|
| Product match | Is this photo of the actual product this email is about? | Keep |
| Wrong product | Is this a different product (swim diaper when email is about training pants)? | Eliminate |
| Constraint violation | Does this photo violate any of the email's banned-items? (no children, no diapers, no clinical, etc.) | Eliminate |
| Relevance | Does this photo's subject matter match the email's emotional tone? | Keep |
| Quality | Is this a clean, well-lit, on-brand photo? | Keep |

### Example: Cart E1 photo evaluation

The Cart E1 email has these constraints (from creative strategy):
- No children depicted
- No pull-up or diaper imagery
- No Pre-K imagery
- No therapy/clinical imagery
- No age-specific imagery
- No autism-awareness symbols
- No level labels

Available photos (29 total):

| Photo | Product match? | Constraint violation? | Verdict |
|-------|---------------|----------------------|---------|
| training-pant-watermelon-pink.jpg | ✅ Yes — BSL underwear | None | ✅ USE |
| training-pant-cloud-raindrop-white.jpg | ✅ Yes | None | ✅ Available |
| training-pant-bunny-hearts-pink.jpg | ✅ Yes | None | ✅ Available |
| training-pant-fox-red-white.jpg | ✅ Yes | None | ✅ Available |
| training-pant-fox-woodland-white.jpg | ✅ Yes | None | ✅ Available |
| training-pant-penguin-multicolor.jpg | ✅ Yes | None | ✅ Available |
| diaper-woodland-creature-yellow.jpg | ❌ Diaper | "No diaper imagery" | ❌ Eliminate |
| pocket-diaper-moon-cloud-blue.jpg | ❌ Diaper | "No diaper imagery" | ❌ Eliminate |
| swim-diaper-giraffe-yellow.jpg | ❌ Wrong product | Swim diaper ≠ BSL underwear | ❌ Eliminate |
| swim-diaper-unicorn-pink.jpg | ❌ Wrong product | | ❌ Eliminate |
| swim-diaper-whale-ocean-blue.jpg | ❌ Wrong product | | ❌ Eliminate |
| laundry-bag-llama-cream.png | ❌ Accessory | Not the product | ❌ Eliminate |
| founders-holding-pants.png | ⚠️ Brand photo | Doesn't fit mechanism-first tone | ⚠️ Maybe |
| toddler-potty-ladder-yellow-woodland.png | ❌ Lifestyle | "No children depicted" | ❌ Eliminate |
| toddler-potty-ladder-pink-multicolor.png | ❌ Lifestyle | "No children depicted" | ❌ Eliminate |
| toddler-playing-train-moon-cloud-blue.png | ❌ Lifestyle | "No children depicted" | ❌ Eliminate |
| toddler-livingroom-dino-yellow.png | ❌ Lifestyle | "No children depicted" | ❌ Eliminate |
| toddler-napping-watermelon-pink-shorts.png | ❌ Lifestyle | "No children depicted" | ❌ Eliminate |
| toddler-backpack-moon-cloud-blue.png | ❌ Lifestyle | "No children depicted" | ❌ Eliminate |
| toddler-outdoors-grass-disposable-diaper.png | ❌ Lifestyle | "No children" + "No diaper" | ❌ Eliminate |
| toddler-rearview-cat-mustard.png | ❌ Lifestyle | "No children depicted" | ❌ Eliminate |
| toddlers-backview-disposable-diapers.png | ❌ Lifestyle | "No children" + "No diaper" | ❌ Eliminate |
| washing-machine-training-pants.png | ⚠️ Product context | No child visible — maybe | ⚠️ Maybe |
| book-potty-training-guide.png | ❌ Accessory | Not the product | ❌ Eliminate |
| cloth-pads-watermelon-astronaut-cat.png | ❌ Accessory | Not the product | ❌ Eliminate |
| potty-targets-stickers-chart.png | ❌ Accessory | Not the product | ❌ Eliminate |
| towel-set-llama-cactus.png | ❌ Accessory | Not the product | ❌ Eliminate |
| wet-bags-space-zebra-llama.png | ❌ Accessory | Not the product | ❌ Eliminate |
| black-placeholder.png | ❌ Placeholder | Not useful | ❌ Eliminate |

**Result:** 6 training pant flat-lays fit. 0 lifestyle photos fit (all show children). Need 3-4 images total.

### Image plan for this email

| Slot | What | Source | Status |
|------|------|--------|--------|
| 1 | Logo | `assets/brightkidco-logo-v2.png` (in Header component) | ✅ Ready |
| 2 | Hero illustration | Custom signal-path SVG (from creative strategy spec) | ✅ Build from spec |
| 3 | Product flat-lay | `training-pant-watermelon-pink.jpg` | ✅ Ready |
| 4 | Lifestyle/context | No available photo fits constraints | 🔲 Placeholder needed |

### Component selection (mapping sections to components)

For each email section, go through this decision tree:

```
1. What's the section's job? (from Step 2)
2. Which position category does it belong to? (from Step 3)
3. Does this section need an image?
   YES → look for image-holding components in that category
   NO → look for text-only components in that category
4. Within the category, what's the highest-priority tag that fits?
   [G] → [G+] → [A*] → [A]
5. Is the component retired? → skip it
6. Does the component match the creative strategy's visual direction?
   (colors, layout, tone should align)
7. Write down: component name, tag, why you picked it
```

### Cart E1 component selection (the result)

| # | Email Section | Position Category | Component | Tag | Why this one |
|---|--------------|-------------------|-----------|-----|-------------|
| 1 | Shell/wrapper | SHELL & HEADER | `EmailShell` | [G] | Giuliano's email wrapper. The outer 600px container. |
| 2 | Logo header | SHELL & HEADER | `Header` | [G] | Giuliano's logo header. Holds image 1 (logo). |
| 3 | Eyebrow tag | HERO | `3.2` Eyebrow Label | [G+] | Uses Giuliano's `Eyebrow` primitive. "Your cart's still here" text. |
| 4 | Hero illustration | HERO | Custom signal-path SVG | — | Not a standard component. Built from creative strategy spec. This is image 2. |
| 5 | Validation anchors | BODY — RECOGNITION | Custom signal-dot bullets | — | The 4 anchors are flowing prose, not a list. Signal-dots are decorative markers, not a component from the index. |
| 6 | Mechanism paragraph | BODY — MECHANISM | `ED3` Interoception Explainer | [A] | Purpose-built for the interoception concept. Matches the mechanism section perfectly. |
| 7 | Three testimonials | BODY — SOCIAL PROOF | `22.2` Three-Family Bridge | [A] | Three families in vertical stack. Exact match for Sarah/Lisa/Maria pattern. |
| 8 | Product image + text | BODY — IMAGES | `IMG-03` Product Flat Lay | [A] | Holds image 3 (training pant flat-lay). Clean product shot. |
| 9 | 60-day seal | GUARANTEE & TRUST | `TRUST-1` 60-Day Seal | [A*] | Cart is one of only 4 flows allowed the 60-day seal (plan rule #3). |
| 10 | Guarantee text | GUARANTEE & TRUST | `29.3` Guarantee Card | [A] | Centered explainer. Matches "sits alone as a centered statement" from creative strategy. |
| 11 | CTA button | CTA — THE CLOSE | `5.1` Dark CTA | [G+] | Uses Giuliano's `CTAClose` primitive. Styled per creative strategy: emerald pill, white text. |
| 12 | Next teaser | CTA — THE CLOSE | `CTA-7` Next Teaser | [A*] | "What other parents actually noticed" — exactly this pattern. |
| 13 | Lena signoff | SIGNOFF & FOOTER | `12.1` Lena Signoff | [G+] | Uses Giuliano's `Signoff` primitive. |
| 14 | Footer | SIGNOFF & FOOTER | `12.2` Footer | [G] | Giuliano's footer. |
| 15 | Dividers | SHELL & HEADER | `20.1` Wave Divider | [A] | Hand-drawn SVG squiggle dividers between sections. |

**Final counts:**
- Components: 15 selected + 2 custom builds (signal-path SVG, signal-dot bullets)
- Images: 4 slots (logo, signal-path SVG, product flat-lay, placeholder)
- [G] components: 3 (EmailShell, Header, Footer)
- [G+] components: 3 (Eyebrow, Dark CTA, Lena Signoff)
- [A*] components: 2 (60-Day Seal, Next Teaser)
- [A] components: 4 (Interoception Explainer, Three-Family Bridge, Product Flat Lay, Guarantee Card, Wave Divider)
- Custom builds: 3 (signal-path SVG, signal-dot bullets, placeholder slot)

### What was NOT selected (and why)

| Component | Category | Why not |
|-----------|----------|---------|
| `PartBadge` | SHELL & HEADER | Copy doesn't use a sticker/badge in this email |
| `TitleBlock` | SHELL & HEADER | H1 is clean typography, not badge + multi-part title |
| `Band` | SHELL & HEADER | Creative strategy uses subtle background tints, not gradient bands |
| `FramedImage` | BODY — IMAGES | Only 1 product photo needed, handled by IMG-03 |
| `ImgFrame` | BODY — IMAGES | Placeholder frames not needed — we have real photos |
| `ProductShowcaseFull/Medium/Soft` | PRODUCT SHOWCASE | Product section is a text paragraph + 1 flat-lay, not a showcase grid |
| `4.2` Quote Card Yellow | BODY — RECOGNITION | **RETIRED** per plan rule #1 |
| `FLOW-4` Cart Reminder | FLOW-SPECIFIC | Pre-built template. Creative strategy is more specific — build custom from primitives |
| `FLOWDEEP-6` Cart E1 Gentle Reminder | FLOW-SPECIFIC | Same — template is too generic for this custom design |
| `CFLOW-1` Cart Abandon E1 | FLOW-SPECIFIC | Same |
| Any urgency/countdown component | GUARANTEE & TRUST | Zero urgency by design — this is a permission-frame email |
| Any product grid component | PRODUCT SHOWCASE | "Gentle, no push" — single product shot, not a grid |

---

## Step 5 — Extract Brand Tokens from Giuliano's Source

### Why this step exists

The copy file's creative strategy section suggests colors, fonts, and spacing. These are SUGGESTIONS — they may not match what Giuliano actually coded. Giuliano's source files (`primitives.jsx`, `product-showcase.jsx`, `illustrations.jsx`) define the REAL brand: the actual colors, the actual fonts, the actual spacing, the actual border-radii. These are the source of truth.

If you write the wireframe using the copy file's suggested colors without checking the primitives, the email will look off-brand. This is exactly what happened in the first build attempt.

### What to read

| File | Location | What's in it |
|------|----------|-------------|
| `tokens.js` | `outputs/email-design/autistic-welcome/variants/tokens.js` | **THE canonical brand tokens.** Defines `window.BRAND` and `window.FONT` — the actual colors and fonts used by all primitives. |
| `primitives.jsx` | `outputs/email-design/welcome-flow/primitives.jsx` | 14 core components. Uses `window.BRAND` (B) and `window.FONT` (F) for all styling. Also has hardcoded values for specific components (badge colors, card backgrounds, etc.) |
| `product-showcase.jsx` | `outputs/email-design/welcome-flow/product-showcase.jsx` | 3 product display components with their styling |
| `illustrations.jsx` | `outputs/email-design/autistic-welcome/` or nearby | 10 illustration components |

### How to extract

**Pass 1 — Open `tokens.js` first.** This file defines `window.BRAND` and `window.FONT`. It's the canonical source. Read it and write down every value.

**Pass 2 — Open `primitives.jsx`.** Read it top to bottom. The primitives reference `B.teal`, `B.ink`, `F.main`, etc. — these map to the tokens from Pass 1. But the primitives ALSO have hardcoded values not in tokens.js:
- Component-specific colors (e.g., PartBadge background `#FFD866`, Signoff card background `#1F2A2C`)
- Specific spacing values (padding, margin, border-radius)
- Font sizes and weights per component
- Shadow values

**Pass 3 — Open product-showcase.jsx and illustrations.jsx.** Same process. Note any additional hardcoded values.

### What the primitives actually look like (extracted from reading the files)

**Primitives visual language:**
- BKC emails use `2px solid B.ink` borders and `boxShadow` on cards — this is the signature look
- CTA buttons are always: dark bg (B.ink), lime text (#D8F57C), pill shape (borderRadius 999)
- Cream backgrounds (#FFFDF6) for image areas inside cards
- The "soft" treatment = dashed teal border, text-forward, no heavy imagery

**ProductShowcaseSoft** (the "gentle, not pushy" product component):
- Dashed teal border: `2px dashed B.teal`, borderRadius 16
- 60x60 thumbnail with SVG icon (not a real photo)
- Text-forward: eyebrow + line + text-link CTA
- Used in Email 2, Email 3 (mechanism emails — Cart E1's vibe)
- BUT: Cart E1's creative strategy wants a product flat-lay photo (280px), not a 60x60 thumbnail. The wireframe must decide which approach.

**ProductShowcaseFull** (hero product block):
- Solid ink border: `2px solid B.ink`, borderRadius 24, boxShadow `6px 6px 0 B.ink`
- Large image area (300px height ImgFrame)
- Price in euros (€34), feature pills, CTA
- Has floating "60 days calm" badge (yellow #FFD866)
- Too heavy for Cart E1's "gentle, no push" intent

**ProductShowcaseMedium** (inline product card):
- Side-by-side: image (140px wide) + content
- Solid ink border, borderRadius 20, boxShadow `4px 4px 0 B.ink`
- CTA: dark bg, lime text, pill
- Could work for Cart E1 if a side-by-side layout is desired

**Illustrations** (10 SVG components):
- All use brand colors: B.teal (#2BAEB4), B.green (#5DD07A), #FFD866 (yellow), B.ink (#1F2D2F)
- Warm accent: #FFB5A0 (hardcoded, not in tokens.js)
- Hero scenes: viewBox 400x240, preserveAspectRatio="xMidYMid slice"
- Section images: viewBox 400x180 or 400x140, preserveAspectRatio="xMidYMid meet"
- Most relevant for Cart E1: `Illu_Signal` (body-signal concept — figure with signal waves from belly)
- Accept props: {width, height, bg} — bg sets the background color
### What to write down

### The actual brand tokens (extracted from tokens.js + primitives.jsx)

These are the REAL values. The copy file's creative strategy may suggest different values — ignore those and use these instead.

### Colors
| Role | Token name | Hex | Where used |
|------|-----------|-----|-----------|
| Primary accent | `B.teal` | `#2BAEB4` | Borders, accents, eyebrow color, SVG strokes |
| Dark accent | `B.tealDeep` | `#1E8A8F` | Eyebrow default color, dark teal variant |
| Secondary accent | `B.green` | `#5DD07A` | Gradient endpoint, positive indicators |
| Dark secondary | `B.greenDeep` | `#3BB35E` | Dark green variant |
| Dark text / backgrounds | `B.ink` | `#1F2D2F` | Body text, dark backgrounds, CTA dark bg, borders |
| Body text | `B.soft` | `#4A6568` | Letter paragraphs, body copy |
| Muted text | `B.muted` | `#8A9B9D` | Secondary text, captions, preheader |
| Background | `B.cream` | `#FBF7F1` | Email background |
| White | `B.paper` | `#FFFFFF` | Card backgrounds, white sections |
| Gradient | `B.gradient` | `linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)` | Gradient bars, accent elements |
| Gradient text | `B.gradientText` | CSS gradient text treatment | H1 accent words |
| PartBadge yellow | hardcoded | `#FFD866` | Badge/sticker background (in PartBadge component) |
| CTA button lime | hardcoded | `#D8F57C` | CTA button background (in CTAClose component) |
| Signoff card bg | hardcoded | `#1F2A2C` | Signoff card background |
| Signoff card border | hardcoded | `#2F3D40` | Signoff card border |
| Signature color | hardcoded | `#D8F57C` | Lena's handwritten signature (Caveat font) |

### Fonts
| Element | Token | Font stack | Source |
|---------|-------|-----------|--------|
| Body text | `F.main` | `'Questrial', system-ui, sans-serif` | tokens.js — Google Font, geometric sans |
| Display/headlines | `F.display` | `'Fraunces', Georgia, serif` | tokens.js — serif counterpoint for variants |
| Signature | hardcoded | `'Caveat', cursive` | primitives.jsx Signoff component |

### Spacing
| Property | Value | Where used |
|----------|-------|-----------|
| Max width (MW) | 420px | EmailShell — the email container width |
| Header padding | 24px top, 20px sides, 0 bottom | Header component |
| Letter padding | 4px top, 24px sides, 28px bottom | Letter component |
| TitleBlock padding | 34px top, 22px sides, 0 bottom | TitleBlock component |
| CTAClose padding | 20px top/sides, 44px bottom | CTAClose component |
| Signoff card padding | 26px top, 24px sides, 24px bottom | Signoff component |
| Footer padding | 30px all sides | Footer component |
| PartBadge borderRadius | 999 (pill shape) | PartBadge component |
| CTA button borderRadius | 999 (pill shape) | CTAClose button |
| Signoff card borderRadius | 22px | Signoff card |
| FramedImage borderRadius | 20px | FramedImage component |
| ImgFrame borderRadius | 20px default (configurable via prop) | ImgFrame component |
| Logo height | 34px | Header component |

### Component props
| Component | Props | Notes |
|-----------|-------|-------|
| EmailShell | `children`, `preheader`, `bg` | bg sets the email background color |
| Header | `bg` | bg sets the header background color |
| ImgFrame | `height`, `label`, `sublabel`, `radius`, `aspect` | height default 200, radius default 20 |
| FramedImage | `children`, `height`, `label`, `sublabel`, `shadow` | shadow default 4 |
| Band | `from`, `to`, `height` | height default 40 |
| PartBadge | `children` | children is the badge text |
| TitleBlock | `badge`, `part1`, `part2`, `accent2`, `subhead` | accent2 controls gradient text on part2 |
| Letter | `bg`, `paras`, `first` | bg sets background, paras is array of strings, first is optional bold opener |
| Eyebrow | `children`, `color` | color defaults to B.tealDeep |
| H2 | `children`, `center`, `size` | size defaults to 28 |
| CTAClose | `intro`, `button`, `fine`, `bg` | bg defaults to B.ink |
| Signoff | `bg` | bg defaults to B.ink. Reads from window.FLOW1_SHARED.signoff |
| OutLine | `bg` | bg defaults to #FFFFFF |
| Footer | (none) | Reads from window.FLOW1_SHARED.footer |
```

### Cross-reference with the copy file

After extracting from the primitives, compare with the creative strategy in the copy file. THIS IS WHERE THE BRAND CONFLICTS LIVE.

**Known conflict — Cart E1 example:**
The copy file's creative strategy suggests:
- Background: `#FAF7F0` (warm cream)
- Accent: `#067A6B` (emerald)
- Text: `#3A3530` (charcoal)
- Headline: `#2B2824` (deep brown)

The primitives actually use:
- Background: `#FBF7F1` (B.cream — slightly different cream)
- Accent: `#2BAEB4` (B.teal — completely different color family)
- Text: `#1F2D2F` (B.ink — much darker, blue-tinted)
- Body text: `#4A6568` (B.soft — blue-grey, not charcoal)

The copy file suggested emerald (#067A6B). The primitives use teal (#2BAEB4). These are different color families. The first build used the copy file's emerald — that's why it looked off-brand.

**Rules for resolving conflicts:**
1. **Colors:** Primitive wins. Always. `B.teal` not "emerald." `B.ink` not "charcoal."
2. **Fonts:** Primitive wins. Questrial for body (F.main). Fraunces for display (F.display). Caveat for signature.
3. **Spacing:** Primitive wins. 420px max width, not 600px. 24px header padding, not 28px.
4. **Border-radius:** Primitive wins. 999 for pills, 20px for frames, 22px for cards.
5. **If the copy file's intent is clearly different:** Document both values and note the discrepancy. Use the primitive's value by default. Only deviate if there's an explicit instruction from Giuliano to use a new color for a specific email.

### The rule

**Giuliano's primitives are the brand. The copy file's creative strategy is a direction. When they conflict, the primitives win. ALWAYS.**

---

## Step 6 — Write the Wireframe

### What the wireframe is

A wireframe is a written document that describes the email section by section, from top to bottom. It tells you exactly what goes where, what color everything is, what font and size every piece of text uses, and which component from the primitives renders each section.

Think of it like a recipe. A recipe tells you: ingredient list, quantities, oven temperature, cooking time, and step-by-step instructions. The wireframe does the same thing for an email: it tells you: colors, fonts, sizes, components, copy text, and the order everything appears.

The wireframe is NOT code. It is NOT a picture. It is a written description with exact values that someone could follow to build the email.

### Why you need it

Without a wireframe, you're guessing at colors, guessing at sizes, guessing at which component to use. That's how emails end up off-brand, with wrong backgrounds, missing sections, and broken layouts. The wireframe eliminates guessing. Every value comes from the brand tokens (Step 5) or the copy file (Step 2).

### What goes in it

At the top of the wireframe, put two reference tables that you'll use throughout:

**Color palette table** (from Step 5):
This lists every color the email uses, with the exact hex code and where it appears. Example:

| Role | Token | Hex | Where used |
|------|-------|-----|-----------|
| Background | B.cream | #FBF7F1 | Email background, section backgrounds |
| Body text | B.soft | #4A6568 | Paragraphs, body copy |
| Headlines | B.ink | #1F2D2F | H1, bold text, dark backgrounds |
| Accent | B.teal | #2BAEB4 | Borders, buttons, illustrations |
| Muted text | B.muted | #8A9B9D | Captions, fine print |
| Card background | B.paper | #FFFFFF | White cards, testimonial backgrounds |

**Typography table** (from Step 5):
This lists every text element in the email, with font, size, weight, and color. Example:

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Eyebrow | F.main | 10.5px | 700 | B.tealDeep |
| H1 headline | F.display | 24-40px | 700 | B.ink |
| Body paragraph | F.main | 15-17px | 400 | B.soft |
| CTA button | F.main | 15.5px | 700 | B.ink on #D8F57C |
| Footer | F.main | 11-12px | 400 | B.muted |

Then, for EACH section of the email (top to bottom), fill in these 9 fields:

1. **Section name** — what this section is called (e.g., "Hero", "Validation", "Testimonials")
2. **Component** — which primitive component renders this section (e.g., `Header`, `Eyebrow`, `Letter`, `CTAClose`). If no primitive fits, write "Custom" and describe what to build.
3. **Image** — which image goes in this section, or "none". Reference the image plan from Step 4.
4. **Exact copy text** — the full text for this section, word for word. Copy it from the copy file. Do not paraphrase.
5. **Layout** — how the content is arranged: left-aligned, centered, full-width, max-width in pixels, padding on each side (top, right, bottom, left), margin on each side.
6. **Typography** — which font, what size, what weight, what color, what line-height, what letter-spacing. Reference the typography table above.
7. **Background** — what color or gradient this section sits on. Reference the color palette table above.
8. **Borders and shadows** — border width, border color, border-radius (how rounded the corners are), box-shadow if any. Write "none" if there are no borders or shadows.
9. **Special treatments** — anything unique about this section: a rotated badge, a gradient text effect, a custom SVG illustration, a decorative element.

### How to write it (step by step)

1. **Copy the brand token tables** from Step 5 to the top of the wireframe document.

2. **List every section** of the email in order (header, hero, validation, mechanism, testimonials, product, guarantee, CTA, teaser, signoff, footer — or whatever sections the copy file defines).

3. **For each section, fill in all 9 fields.** Use the brand token tables for every color and font value. If the copy file's creative strategy suggests a different value, use the brand token value instead (the primitives are the source of truth — see Step 5).

4. **For custom illustrations** (like the signal-path SVG), describe them in enough detail to build: what shape is it, how wide and tall, what colors, what stroke width, what animation if any.

5. **For decorative elements** (dividers, dots, easter eggs), describe them: how big, what color, how far apart, what they do.

6. **At the bottom, add three summary tables:**
   - **Image table:** image number, source file path, status (ready or placeholder)
   - **Component table:** component name, tag ([G], [G+], [A*], [A]), which section it renders
   - **Compliance check:** list each retired pattern rule and confirm this email doesn't use it

### The test: is the wireframe detailed enough?

Ask yourself: "Could someone who has never seen this project build the email from this wireframe alone?" If they would need to open the copy file to find the text, or open the primitives to check the colors, or open the component index to find the right component — then the wireframe isn't detailed enough. Add whatever's missing.

### What the wireframe is NOT

- **Not code.** No JSX, no HTML, no CSS. Plain English with exact values like hex codes and pixel sizes.
- **Not a picture.** No drawings, no boxes, no arrows. Written descriptions.
- **Not a creative brief.** It doesn't explain why decisions were made. It just says what goes where.

### Example: complete wireframe for Cart E1

This is what a finished wireframe looks like. Every field filled in with exact values from the brand tokens and copy file.

```
CART ABANDONMENT E1 — WIREFRAME

COLOR PALETTE:
  Background: B.cream = #FBF7F1
  Text: B.soft = #4A6568
  Headlines: B.ink = #1F2D2F
  Accent: B.teal = #2BAEB4
  Muted: B.muted = #8A9B9D
  White: B.paper = #FFFFFF
  Cream panel: #FFFDF6
  Yellow badge: #FFD866
  CTA button: #D8F57C

TYPOGRAPHY:
  Eyebrow: F.main, 10.5px, 700, B.tealDeep, uppercase, letter-spacing 2px
  H1: F.display (Fraunces), 24px, 700, B.ink
  Body: F.main (Questrial), 15-17px, 400, B.soft, line-height 1.6-1.7
  Card title: F.main, 15px, 600, B.ink
  Card body: F.main, 15px, 400, B.ink, italic
  Attribution: F.main, 12px, 600, B.soft
  CTA button: F.main, 16px, 600, B.cream on B.teal
  Fine print: F.main, 11.5px, 400, B.muted
  Footer tagline: F.display, 20px, 500 italic, B.ink
  Signature: Caveat, 42px, 500, #D8F57C

SECTION 1 — HEADER
  Component: Header (from primitives)
  Image: Logo (brightkidco-logo-v2.png, embedded as base64)
  Copy: none (just the logo)
  Layout: centered, padding 24px top, 20px sides, 0 bottom
  Background: B.cream
  Borders: none

SECTION 2 — HERO (FLOWDEEP-6 pattern)
  Component: Custom (matches FLOWDEEP-6 from component index)
  Image: none
  Copy: H1 = "You left something, no rush."
         Body = "Your cart's still here. These things deserve thought."
         Cart card label = "Your cart"
         Cart card product = "Body-Signal Learning Layer Pants"
         Cart card price = "€34"
         Urgency note = "We hold your cart for 72 hours. After that, items may sell out (sizes move fast)."
         CTA = "Come back when you're ready →"
  Layout: centered, H1 padding 32px top 20px sides, body padding 0 20px 16px, cart card margin 0 20px 16px, CTA centered
  Typography: H1 = F.display 24px 700 B.ink, body = F.main 15px 400 B.ink, cart label = F.main 12px uppercase B.muted, cart product = F.main 15px 600 B.ink, price = Caveat 22px B.teal, urgency = F.main 13px B.muted, CTA = F.main 16px 600 B.cream
  Background: B.cream
  Cart card: background B.cream, border-radius 16px, padding 24px
  CTA button: background B.teal, color B.cream, padding 14px 36px, border-radius 28px
  Borders: none on section, cart card has no border

SECTION 3 — BAND TRANSITION
  Component: Band (from primitives)
  from: B.cream, to: B.cream, height: 8px

SECTION 4 — VALIDATION (Recognition Anchors)
  Component: Custom (no primitive for this pattern)
  Image: none
  Copy: first = "You've probably seen some version of this:"
         anchor 1 = "Your child sits on the toilet for 20 minutes, nothing happens, and then they're wet 30 seconds after standing up."
         anchor 2 = "Or they play right through a wet diaper without reacting."
         anchor 3 = "Or they've been 'almost trained' three times now."
         anchor 4 = "Or they don't initiate, ever."
         closing = "If even one of those sounds like your morning, you're not alone..."
  Layout: padding 28px top, 22px sides, 8px bottom. Each anchor is a flex row with signal-dot + text.
  Typography: first = F.main 17px 600 B.ink, anchor text = F.main 15px 400 B.soft, closing = F.main 15px 400 B.soft
  Background: B.cream
  Signal dots: 8px circle, 1px solid B.teal border, B.cream fill
  Borders: none

SECTION 5 — BAND TRANSITION
  Component: Band
  from: B.cream, to: B.cream, height: 8px

SECTION 6 — TESTIMONIALS (3 cards)
  Component: Custom (no primitive — cards match Email2 comparison card pattern)
  Image: none
  Copy: 3 testimonials (Sarah, Lisa, Maria) with quotes and attributions
         closing = "Three different kids. Three different timelines..."
  Layout: padding 8px top, 14px sides. Each card: margin-bottom 14px. Card inner: padding 20px.
  Typography: quote = F.main 15px 400 B.ink italic, attribution = F.main 12px 600 B.soft, closing = F.main 14px 400 B.soft centered
  Background: B.cream
  Card style: background B.paper, border-radius 18px, overflow hidden, border 2px solid B.ink, box-shadow 3px 3px 0 B.ink. Inner header: border-top 2px solid B.ink, background #FFFDF6.
  Borders: 2px solid B.ink on cards

SECTION 7 — BAND TRANSITION
  Component: Band
  from: B.cream, to: #FFFDF6, height: 40px

SECTION 8 — MECHANISM (Interoception)
  Component: Letter (from primitives)
  Image: none
  Copy: first = "Here's what most parents never get told..."
         paras = [research paragraph, signal-timing paragraph]
  Layout: padding 4px top, 24px sides, 28px bottom (primitives Letter default)
  Typography: first = F.main 17px 600 B.ink, paras = F.main 15px 1.7 B.soft
  Background: #FFFDF6
  Borders: none

SECTION 9 — BAND TRANSITION
  Component: Band
  from: #FFFDF6, to: B.cream, height: 40px

SECTION 10 — PRODUCT
  Component: Custom (ProductShowcaseSoft pattern from primitives)
  Image: training-pant-watermelon-pink.jpg (embedded as base64)
  Copy: eyebrow = "Designed around this"
         line = first 120 chars of product copy + "..."
         ctaText = "See the pants →"
  Layout: padding 8px top, 14px sides, 16px bottom. Card: flex row, gap 14px, align center. Image: 80x80px, border-radius 12px. Text: flex 1.
  Typography: eyebrow = F.main 10px uppercase B.tealDeep 700, line = F.main 13px 500 B.ink, cta = F.main 12.5px 700 B.tealDeep
  Background: B.cream
  Card: background #FFFDF6, border 2px dashed B.teal, border-radius 16px, padding 18px
  Image: border 1.5px solid B.ink, border-radius 12px, overflow hidden
  Borders: 2px dashed B.teal on card, 1.5px solid B.ink on image

SECTION 11 — BAND TRANSITION
  Component: Band
  from: B.cream, to: B.cream, height: 40px

SECTION 12 — GUARANTEE
  Component: Custom (PartBadge styling from primitives)
  Image: none
  Copy: badge = "60 DAY CALM GUARANTEE"
         body = full guarantee paragraph from copy file
  Layout: padding 24px top, 22px sides, 28px bottom, centered. Badge centered. Body max-width 360px, centered.
  Typography: badge = F.main 10.5px 700 uppercase letter-spacing 1.5px B.ink, body = F.main 15px 1.6 B.ink 500
  Background: B.cream
  Badge: background #FFD866, padding 7px 14px, border-radius 999 (pill), border 2px solid B.ink, transform rotate(-1.5deg)
  Borders: 2px solid B.ink on badge

SECTION 13 — BAND TRANSITION (dark)
  Component: Band
  from: B.cream, to: B.ink, height: 50px

SECTION 14 — CTA
  Component: CTAClose (from primitives)
  Image: none
  Copy: intro = "", button = "Check out when you're ready", fine = "Your original offer is saved"
  Layout: padding 20px top/sides, 44px bottom, centered (primitives CTAClose default)
  Typography: button = F.main 15.5px 700 B.ink on #D8F57C, fine = F.main 11.5px B.muted
  Background: B.ink (dark — primitives CTAClose default)
  Button: background #D8F57C, color B.ink, padding 17px 32px, border-radius 999 (pill)
  Borders: none

SECTION 15 — SIGNOFF
  Component: Custom (matches primitives Signoff styling)
  Image: none (avatar is placeholder SVG)
  Copy: greeting = "Talk soon,", name = "Lena", title = "Customer Support · Mom of two autistic sons", ps = "P.S. If you want to see..."
  Layout: padding 0 22px 28px. Card: padding 26px 24px 24px, border-radius 22px.
  Typography: greeting = F.main 15px 1.7 B.soft, name = Caveat 42px 500 #D8F57C, title = F.main 12px 500 italic #8FAFB2, ps = F.main 13px italic B.soft
  Background: B.cream (area around card)
  Card: background #1F2A2C, border 1.5px solid #2F3D40, border-radius 22px
  Top accent: height 4px, B.gradient
  Signature divider: 1.5px dashed #3A4547
  Borders: 1.5px solid #2F3D40 on card

SECTION 16 — OUTLINE
  Component: OutLine (from primitives)
  Copy: "No longer want to receive these emails? Unsubscribe."
  Layout: padding 18px 24px 0, centered
  Typography: F.main 12.5px B.muted italic
  Background: B.cream

SECTION 17 — FOOTER
  Component: Footer (from primitives)
  Image: none
  Copy: tagline = "BrightKidCo", links = ["Reply to this email. Lena reads every response."], address = "[Physical Address]"
  Layout: padding 30px 24px, centered
  Typography: tagline = F.display 20px 500 italic B.ink, links = F.main 14px 500 B.ink, unsubscribe = F.main 11.5px B.muted
  Background: B.paper (white)
  Gradient bar: width 60px, height 3px, B.gradient, border-radius 3px
  Social icons: Instagram, Facebook, TikTok SVGs in B.ink
  Borders: none

IMAGE TABLE:
  1. Logo: brightkidco-logo-v2.png — embedded as base64 in Header
  2. Product: training-pant-watermelon-pink.jpg — embedded as base64 in Product section

COMPONENT TABLE:
  1. Header [G] — Section 1
  2. Band [G+] — Sections 3, 5, 7, 9, 11, 13
  3. Letter [G+] — Section 8
  4. CTAClose [G+] — Section 14
  5. OutLine [G+] — Section 16
  6. Footer [G] — Section 17
  7. Custom (FLOWDEEP-6 pattern) — Section 2
  8. Custom (signal dots + text) — Section 4
  9. Custom (ink-border cards) — Section 6
  10. Custom (ProductShowcaseSoft pattern) — Section 10
  11. Custom (PartBadge styling) — Section 12
  12. Custom (Signoff card) — Section 15

COMPLIANCE CHECK:
  ✓ No Quote Card Yellow (retired pattern #1)
  ✓ 60-day seal used in Cart (allowed per rule #3)
  ✓ No universal lime-on-dark CTA (rule #5)
  ✓ No universal Body Signal SVG (rule #7)
  ✓ No em dashes in copy (rule #13)
  ✓ No $ pricing (rule #10)
  ✓ No external labels in customer text (rule #11)
Section 2 — Hero (Hook)
Position: Second section, below Header

Component: 3.2 Eyebrow Label [G+] + custom signal-path SVG illustration
Image: Custom signal-path SVG (image 2 of 4) — described below

--- Eyebrow Tag ---
Copy: Your cart's still here
Layout: centered, full content width
Typography:
  - Font: F.main (Questrial, system-ui, sans-serif)
  - Size: 10.5px (mobile and desktop — matches primitives Eyebrow component)
  - Weight: 700
  - Color: B.tealDeep (#1E8A8F)
  - Letter-spacing: 2px
  - Text-transform: uppercase
Margin-bottom: 10px (matches primitives Eyebrow)

--- H1 Headline ---
Copy: You left something, no rush.
Layout: centered, full content width
Typography:
  - Font: F.main (Questrial, system-ui, sans-serif)
  - Size: 40px mobile / 40px desktop (matches primitives TitleBlock h1)
  - Weight: 700
  - Color: B.ink (#1F2D2F)
  - Line-height: 1
  - Letter-spacing: -0.8px (matches primitives TitleBlock)
Margin-bottom: 16px

--- Signal-Path SVG Illustration ---
Type: Custom SVG (not a standard component)
Dimensions: width 376px, height 48px (scales to 100% max-width)
Placement: below H1, centered

Spec:
  - Line: horizontal dotted stroke
    - Color: B.teal (#2BAEB4)
    - Stroke-width: 1.5px
    - Dash-array: "4 6"
    - Opacity: 0.4
    - X1: 20, Y1: 24, X2: 356, Y2: 24

  - Node 1 (left, Sarah/L1): circle
    - Outer: cx=80, cy=24, r=8, fill=B.cream (#FBF7F1), stroke=B.teal (#2BAEB4), stroke-width=2
    - Inner: cx=80, cy=24, r=4, fill=B.teal (#2BAEB4), opacity=0.7
    - Detail: clock-face partial arc path (M76,24 L80,20), stroke=B.ink (#1F2D2F), stroke-width=1.2

  - Node 2 (center, Lisa/L2): circle
    - Outer: same as Node 1 but cx=188
    - Inner: opacity=0.85
    - Detail: sensory wave path (M182,24 Q185,18 188,24 Q191,30 194,24), fill=none

  - Node 3 (right, Maria/L3): circle
    - Outer: same as Node 1 but cx=296
    - Inner: opacity=1.0
    - Pulse ring: cx=296, cy=24, r=12, fill=none, stroke=B.teal, stroke-width=1, opacity=0.3

--- Primary CTA ---
Copy: Check out when you're ready
Component: 5.1 Dark CTA [G+] (uses CTAClose primitive)
Layout: centered
Button style:
  - Background: B.teal (#2BAEB4) — NOT the primitives' default lime (#D8F57C). This email uses teal as the CTA color per creative strategy intent, but the button shape matches CTAClose (pill shape).
  - Text color: #FFFFFF
  - Font: F.main (Questrial)
  - Size: 15.5px (matches primitives CTAClose button)
  - Weight: 700
  - Padding: 17px top/bottom, 32px sides (matches primitives CTAClose)
  - Border-radius: 999 (pill shape, matches primitives CTAClose)
  - Letter-spacing: 0.3px
  - Min-height: 48px (tap target)
  - Text-decoration: none

Secondary text below button:
  Copy: Your original offer is saved
  Font: F.main
  Size: 11.5px (matches primitives CTAClose fine print)
  Color: B.muted (#8A9B9D)
  Align: centered
  Margin-top: 16px (matches primitives CTAClose)
```

**Notice:**
- Every color value references a brand token (`B.teal`, `B.ink`, `B.cream`) — not invented hex values
- Every font references a token (`F.main`) — not a font name pulled from the copy file
- The CTA button uses `B.teal` instead of the primitives' default `#D8F57C` lime — this is a deliberate deviation documented in the wireframe, not a silent invention
- The signal-path SVG uses `B.teal` for its strokes, not the copy file's suggested emerald
### What the wireframe is NOT

- **Not code.** No JSX, no HTML, no CSS classes. Plain language with exact values.
- **Not a visual mockup.** No ASCII art, no wireframe boxes. Text descriptions with hex values and pixel measurements.
- **Not a creative brief.** It doesn't explain WHY design decisions were made. That's in the copy file's creative strategy. The wireframe says WHAT goes where, not why.

---

## What You Have After All 6 Steps

1. **A copy file fully understood** — every section, every constraint, every design spec extracted (Step 2)
2. **A component selection** — components mapped to email sections with justification (Step 4)
3. **An image plan** — slots with sources identified or placeholders marked (Step 4)
4. **Brand tokens extracted** — actual colors, fonts, spacing from Giuliano's primitives (Step 5)
5. **A wireframe** — section-by-section document with exact values, ready to build from (Step 6)

**This is the input for the next phase: Step 7 — Build the Email.**

---

## Step 7 — Build the Email

### What this step is

You have a wireframe (Step 6) that describes every section of the email with exact colors, fonts, sizes, and components. Now you turn that wireframe into a real HTML file that opens in a browser and shows the email.

The output is a single HTML file. You can double-click it and it opens in your browser. No server needed after this step. No build tools needed after this step. Just one file.

### What you need

1. The wireframe from Step 6 (tells you what to build)
2. The copy file from Step 2 (tells you the exact text)
3. The brand tokens from Step 5 (tells you the exact colors and fonts)
4. These source files from the email-design folder:
   - `autistic-welcome/variants/tokens.js` — the brand color and font definitions
   - `welcome-flow/primitives.jsx` — the 14 core components (Header, Eyebrow, Letter, CTAClose, etc.)
   - `autistic-welcome/variants/illustrations.jsx` — the 10 SVG illustration components
5. Product images from `product-photos/` folder
6. The logo from `assets/brightkidco-logo-v2.png`

### Step 7.1 — Understand what you're building

The HTML file you're building has this structure:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Load React (the UI library) from a CDN -->
  <!-- Load Google Fonts (Questrial, Fraunces, Caveat) -->
  <!-- Basic page styles -->
</head>
<body>
  <div id="root"></div>
  <script>
    // 1. Define brand colors and fonts (from tokens.js)
    // 2. Define signoff and footer content for this email
    // 3. Load the 14 core components (from primitives.jsx)
    // 4. Load the 10 illustration components (from illustrations.jsx)
    // 5. Define the email's copy/text (from content.js)
    // 6. Define the email component (your JSX file)
    // 7. Tell React to render the email component into the page
  </script>
</body>
</html>
```

Everything goes in one `<script>` tag because this is a standalone file. There are no separate JavaScript modules, no imports, no bundler. Everything is concatenated together in order.

### Step 7.2 — Prepare the primitives

The primitives file (`primitives.jsx`) is written in JSX — a syntax that lets you write HTML-like code inside JavaScript. Browsers can't read JSX directly. It needs to be converted to plain JavaScript first. This conversion is called "transpilation."

Before transpiling, you need to fix one problem: the primitives reference a logo file at a relative path:
```javascript
const LOGO = "../assets/brightkidco-logo-v2.png";
```

In a standalone HTML file, this relative path won't work — the browser won't find the file. The fix is to replace this path with the actual image data encoded as a string (base64).

**How to convert an image to base64:**
1. Read the image file as binary data
2. Encode it as a base64 string (a text representation of the binary data)
3. Prepend the data URI prefix so the browser knows it's an image: `data:image/png;base64,`
4. Replace the original path in primitives.jsx with this data URI

**The command:**
```bash
cd /root/projects/brightkidco/outputs/email-design
python3 -c "
import base64
logo_b64 = base64.b64encode(open('assets/brightkidco-logo-v2.png', 'rb').read()).decode()
jsx = open('/path/to/primitives.jsx').read()
jsx = jsx.replace('\"../assets/brightkidco-logo-v2.png\"', f'\"data:image/png;base64,{logo_b64}\"')
open('/path/to/primitives-fixed.jsx', 'w').write(jsx)
"
```

This reads the primitives file, finds the logo path, replaces it with the base64 version, and saves a new file.

### Step 7.3 — Transpile JSX to plain JavaScript

JSX is not valid JavaScript. Browsers will throw errors if you try to run JSX directly. You need to convert it to plain JavaScript using a tool called Babel.

Babel is already installed in the email-viewer project at `/root/projects/brightkidco/outputs/email-viewer/node_modules/`. You don't need to install anything.

**The transpilation command:**
```bash
cd /root/projects/brightkidco/outputs/email-viewer
node -e "
const babel = require('./node_modules/@babel/core');
const presetReact = require.resolve('./node_modules/@babel/preset-react');
const fs = require('fs');
const jsx = fs.readFileSync('/path/to/file.jsx', 'utf8');
const result = babel.transformSync(jsx, {
  presets: [[presetReact, { runtime: 'classic' }]],
  filename: 'file.jsx'
});
fs.writeFileSync('/path/to/output.js', result.code);
console.log('Done: ' + result.code.length + ' bytes');
"
```

**What this does, step by step:**
1. Loads Babel (the JavaScript-to-JavaScript compiler)
2. Tells Babel to use the React preset (which knows how to convert JSX to plain JavaScript)
3. Sets the runtime to "classic" — this is critical (see below)
4. Reads the JSX file from disk
5. Converts it to plain JavaScript
6. Writes the converted code to a new file

**Why "classic" runtime matters:** When Babel converts JSX like `<div>Hello</div>` to plain JavaScript, it needs to call `React.createElement("div", null, "Hello")`. The "classic" way does this directly. The "automatic" way tries to import helpers from `react/jsx-runtime`, which adds `import` statements to the output. Those `import` statements don't work in standalone HTML files (they only work in module-based JavaScript). Always use `{ runtime: 'classic' }`.

**You need to transpile three files:**
1. `primitives-fixed.jsx` → `primitives-transpiled.js`
2. `illustrations.jsx` → `illustrations-transpiled.js`
3. Your email JSX → `email-transpiled.js`

### Step 7.4 — Write the email JSX

Now you write the actual email component. This is a React component that uses the primitives from the previous step.

**What JSX looks like:**
JSX looks like HTML but it's actually JavaScript. You write it like this:
```jsx
<div style={{ background: "#FBF7F1", padding: "20px" }}>
  <h1 style={{ color: "#1F2D2F" }}>Hello</h1>
</div>
```

Note the double curly braces `{{ }}` for the `style` prop — that's how you pass a JavaScript object as a style in JSX.

**The composition pattern (how all BKC emails are built):**

Every BKC email follows this pattern. It's a series of colored sections connected by gradient bands:

```jsx
const CartE1 = () => {
  return (
    <EmailShell preheader="preview text" bg={B.cream}>
      <Header bg={B.cream} />

      {/* Section 1: Hero */}
      <div style={{ background: B.cream, padding: "32px 20px", textAlign: "center" }}>
        <h1 style={{ fontFamily: F.display, fontSize: 24, fontWeight: 700, color: B.ink }}>
          Headline text
        </h1>
      </div>

      <Band from={B.cream} to={B.cream} height={8} />

      {/* Section 2: Body content */}
      <div style={{ background: B.cream, padding: "28px 22px" }}>
        <p>Body text here</p>
      </div>

      <Band from={B.cream} to="#FFFDF6" height={40} />

      {/* Section 3: Different background color */}
      <div style={{ background: "#FFFDF6", padding: "24px 22px" }}>
        <p>More content on a different background</p>
      </div>

      <Band from="#FFFDF6" to={B.ink} height={50} />

      {/* CTA section (dark background, always at end) */}
      <CTAClose intro="" button="Click here" fine="Fine print" />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};

window.CartE1 = CartE1;
window.__defaultExport = CartE1;
```

**The seven rules of email composition:**

1. **Each section has its own background color.** The email is a series of colored panels stacked on top of each other. Section 1 might be cream (#FBF7F1). Section 2 might be warm beige (#FFFDF6). Section 3 might be white (#FFFFFF). This is what gives BKC emails their distinctive look — they're not one flat color, they're a sequence of tinted sections.

2. **Band components connect sections.** A Band creates a smooth gradient from one background color to the next. Put a Band between every two sections that have different backgrounds. If two sections have the same background, use a small Band (height 8px) as a visual separator. The Band takes two props: `from` (the color it starts with) and `to` (the color it ends with).

3. **Primitives go inside section wrappers.** You don't use `<Header />` as a standalone element floating in space. You wrap it in a div with a background: `<div style={{ background: B.cream }}><Header bg={B.cream} /></div>`. The div provides the background, the primitive provides the content.

4. **CTAClose goes at the end only.** The CTA (call-to-action) section uses a dark background (B.ink, which is #1F2D2F). It always comes right before the Signoff. Never put a CTA button in the hero or middle of the email. The hero's job is to present information. The CTA's job is to convert. They're different moments.

5. **Signoff and Footer are always last.** The order is: CTAClose → Signoff → OutLine → Footer. Footer is the very last thing in the email. Don't rearrange this.

6. **Don't build new components.** Use the primitives that already exist (Header, Eyebrow, Letter, CTAClose, Band, PartBadge, etc.). If a section doesn't have a matching primitive, write custom HTML/CSS for that section — but use the brand token values (B.cream, B.ink, F.main, etc.) for all colors and fonts. Don't invent new colors.

7. **Check the component index for pre-built patterns.** The component index (Step 3) has pre-built templates for specific emails. For example, FLOWDEEP-6 is the Cart E1 hero pattern. Look up its HTML in `showcase-artifacts-final.html` and follow its structure exactly.

### Step 7.5 — Embed product images

If the email shows a product photo, you need to embed it in the HTML file. The email references images by file path (like `../product-photos/photo.jpg`), but a standalone HTML file can't access local files when opened directly. The solution is to convert the image to a base64 data URI and paste it directly into the HTML.

**What a base64 data URI looks like:**
```
data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQg...
```

The first part (`data:image/jpeg;base64,`) tells the browser "this is a JPEG image encoded as base64." The rest is the actual image data.

**The conversion process:**
1. Read the image file as binary data
2. Base64-encode it (converts binary to text — every 3 bytes becomes 4 characters)
3. Prepend the data URI prefix: `data:image/jpeg;base64,` for JPEGs, `data:image/png;base64,` for PNGs
4. Use this entire string as the `src` attribute of the `<img>` tag in your JSX

**The command:**
```bash
cd /root/projects/brightkidco/outputs/email-design
python3 -c "
import base64
product_b64 = base64.b64encode(open('product-photos/flat-lay/training-pant-watermelon-pink.jpg', 'rb').read()).decode()
jsx = open('/path/to/your-email.jsx').read()
jsx = jsx.replace('IMAGE_PLACEHOLDER', f'data:image/jpeg;base64,{product_b64}')
open('/path/to/your-email-ready.jsx', 'w').write(jsx)
"
```

This reads your JSX file, finds the string `IMAGE_PLACEHOLDER` (which you put in the img src), replaces it with the actual base64 data URI, and saves a new file.

**In your JSX, write the image like this:**
```jsx
<img src="IMAGE_PLACEHOLDER" alt="Product photo" style={{ width: "100%" }} />
```

Then run the command above to replace `IMAGE_PLACEHOLDER` with the real data.

### Step 7.6 — Assemble the standalone HTML

Now you combine everything into one HTML file. The order matters — each file depends on the ones before it.

**The concatenation order:**
```
1. HTML header
2. tokens.js
3. FLOW1_SHARED definition
4. Transpiled primitives
5. Transpiled illustrations
6. Content data JS
7. Transpiled email component
8. HTML footer
```

**Why this order matters:**
- `tokens.js` defines `window.BRAND` and `window.FONT`. The primitives use these values. So tokens must come before primitives.
- `FLOW1_SHARED` defines `window.FLOW1_SHARED`. The Signoff and Footer components read from this. So FLOW1_SHARED must come before primitives.
- Primitives define components like `Header`, `Band`, `CTAClose`. The email component uses these. So primitives must come before the email.
- Illustrations define `window.Illus.Signal` and similar. The email might use these. So illustrations must come before the email.
- Content data defines `window.FLOW_CART.e1`. The email component reads from this. So content must come before the email.
- The email component depends on everything above. It must come last.

**The HTML header (copy this exactly):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cart Abandonment E1 — BrightKidCo</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #f0eee9;
      font-family: -apple-system, system-ui, sans-serif;
      display: flex;
      justify-content: center;
      padding: 20px;
    }
    #root { display: block; }
  </style>
  <link href="https://fonts.googleapis.com/css2?family=Questrial&family=Fraunces:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Caveat:wght@400;500&display=swap" rel="stylesheet">
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script>
```

**The FLOW1_SHARED definition (copy this, it's needed by Signoff and Footer):**
```javascript
window.FLOW1_SHARED = {
  signoff: {
    line1: "Talk soon,",
    ps: "P.S. If you want to see how the body-signal approach works, [link]. No pressure."
  },
  footer: {
    tagline: "BrightKidCo",
    links: ["Reply to this email. Lena reads every response."],
    address: "[Physical Address]"
  },
  out: "No longer want to receive these emails? Unsubscribe."
};
```

**The HTML footer (copy this exactly):**
```html
  </script>
  <script>
var Comp = window.__defaultExport || window.CartE1;
if (Comp) {
  ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(Comp));
} else {
  document.getElementById("root").innerHTML = "<pre>No component found</pre>";
}
  </script>
</body>
</html>
```

**What the render call does:** It finds the email component you defined (`window.CartE1`), tells React to create an instance of it, and puts the result inside the `<div id="root">` on the page. This is what makes the email appear in your browser.

**How to concatenate all files (command):**
```bash
cat html-header.html \
    tokens.js \
    flow1-shared.js \
    primitives-transpiled.js \
    illustrations-transpiled.js \
    content.js \
    email-transpiled.js \
    html-footer.html \
    > final-email.html
```

This `cat` command reads all the files in order and combines them into one file called `final-email.html`.

### Step 7.7 — Verify the email works

1. **Start a local web server.** Embedded images need to be served over HTTP, not opened as local files. The simplest way:
   ```bash
   cd /root/projects/brightkidco/outputs/email-design
   python3 -m http.server 8888
   ```
   This starts a web server on port 8888 that serves files from the current directory.

2. **Open the email in your browser:** `http://localhost:8888/staging/cart-e1/final-email.html`

3. **Check these things:**
   - The logo loads in the header (top of the email)
   - Product images load (if the email shows product photos)
   - Each section has the correct background color (compare to your wireframe)
   - Text is readable — correct font, correct size, correct color
   - The CTA button appears exactly once, at the bottom, with a dark background
   - There are no duplicate sections or duplicate CTAs
   - Band transitions look smooth between differently-colored sections
   - The email is 420px wide, centered on the page

4. **Stop the server when done:** Press Ctrl+C or run `kill %1`

### Step 7.8 — Ship to hp-laptop

```bash
rsync -avz /path/to/final-email.html hp-laptop:/home/ayoub/Documents/
```

This copies the file to hp-laptop so you can open it there for review.

### Common mistakes (and how to avoid them)

1. **Building new components instead of using primitives.** The primitives define exact styling — colors, fonts, spacing, border-radius. Don't rebuild them with different values. Use `<Header />`, not a custom header div. Use `<CTAClose />`, not a custom CTA button.

2. **Using FramedImage or ImgFrame as the hero.** These are wireframe placeholders. They show dashed teal frames with text labels like "HERO IMAGE GOES HERE." They're not real components — they're notes to self about where an image should go. For the hero, use actual illustrations from `illustrations.jsx` (like `Illu_Signal`), or text-based patterns like FLOWDEEP-6.

3. **Forgetting the data URI prefix on images.** If you have base64 text but no `data:image/jpeg;base64,` prefix, the browser won't render the image. It will show a broken image icon. Always include the prefix.

4. **Duplicate CTAs.** Don't put a CTA button in the hero AND use CTAClose at the end. The hero should have no CTA — its job is to present the headline and context. CTAClose at the end is the only CTA — its job is to convert.

5. **Wrong Babel runtime.** If you see `import { jsx } from "react/jsx-runtime"` in the transpiled JavaScript output, you used the wrong runtime. This line won't work in standalone HTML. Re-transpile with `{ runtime: 'classic' }`.

6. **Not loading illustrations.** If your email uses `window.Illus.Signal` or any other illustration component, the `illustrations-transpiled.js` file must be included in the HTML concatenation. Otherwise you'll get "Cannot read properties of undefined (reading 'Signal')".

7. **Missing backgrounds on sections.** Every section `<div>` needs a `background` style property. If you forget, the section will be transparent and you'll see the email's base background color instead of the color you intended. This is the most common visual bug.

8. **Wrong file order in concatenation.** If you get "window.BRAND is undefined" or "window.BRAND.teal is undefined", it means `tokens.js` was concatenated after the primitives file. The primitives try to use `B.teal` but the `B` object doesn't exist yet. Fix the order: tokens first, then everything else.
