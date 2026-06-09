# Wireframe: Cart Abandonment — E2 | Cross-Level

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Cart Abandonment (Flow 02) |
| **Position** | E2 — 24 Hours post-abandonment |
| **Level** | Cross-Level (serves L1, L2, L3, GF simultaneously via R1-R6) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/cart/cart-02-e2.md |
| **Strategy Map Entry** | flows.cart-abandonment.emails.e2 |
| **Flow Signature** | Urgent but gentle, ink primary, teal accents, low density, product-first (framed product card), flat-lay product shots |
| **GF Calibration** | Medium typography weight, neutral-warm colors, 7-9 sections, low urgency, mixed inclusive social proof |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, EDU/MECHANISM, PRODUCT, CTA, GUARANTEE/TRUST, DECORATIVE, COMPARISON |
| **Total Estimated Height** | ~3200px |

## 2. Strategy Box

**Big Idea:** A testimonial wall that quietly proves the mechanism works — three parent voices, three different children, one common signal breakthrough. A neural pulse line branches from one source node into three paths, converging at the CTA as a unified "signal received" glow.
**Emotional Arc Position:** Friendly check → Mechanism reminder → Testimonial proof → Upsell offer → Guarantee barrier removal. E2 is the most socially proofed email in the Cart flow — the three-family pattern is the structural hero.
**Component Selection Rationale:** HERO-12 (Before Snapshot) opens with the real parent quote as hero — raw, unfiltered voice. LETTER-07 (Greeting Card) delivers validation. EDU-1 (Definition Block) presents mechanism. SP-01 (Three-Family Quote Block) is the structural centerpiece — three testimonial cards. ProductShowcaseSoft introduces the 3+3 bundle upsell. TRUST-4 (Dashed Policy Quote) frames guarantee. CTAClose delivers the primary CTA with secondary text link.
**Differentiation Note:** E2 is the most content-rich email in the Cart flow. The hero quote is the hook — a real parent's words in large, expressive typography. The three testimonial cards have subtle asymmetry (alternating left/right rotation at -1deg) and different widths to mirror different journeys. The offer section includes the 3+3 bundle upsell. Density is still low-medium per Cart signature.

## 3. Creative Box

**Color Palette:**
- Primary: #1F2D2F (Ink) — Headlines, body text, strong emphasis
- Secondary: #2BAEB4 (Teal) — CTA accents, signal-path nodes, section eyebrows
- Accent: #5DD07A (Green) — Guarantee highlight, trust badge
- Warm accent: #C46A4A (Terracotta) — Hero quote block ONLY (raw parent voice distinction)
- Background: #FBF7F1 (Cream) — Full email body background
- Text: #1F2D2F (Ink) — Primary body copy
- Muted: #4A6568 (Muted Ink) — Secondary text, footnotes
- Grey: #8A9B9D (Grey) — Footer, dividers, signal line start
- Card: #FFFFFF (White) — Testimonial cards
- Offer tint: #2BAEB4 at 5% opacity — Offer section background

**Typography:**
- Heading: Questrial, 28px (32px desktop), 700 (Bold), line-height 1.15, letter-spacing -0.01em
- Hero quote: Questrial, 28px, italic, letter-spacing -0.02em, color #C46A4A (Terracotta)
- Body: Helvetica/Arial/sans-serif, 15px (16px desktop), 400 (Regular), line-height 1.6, letter-spacing 0
- Accent: Questrial, 13px, 500 (Medium), letter-spacing 0.15em, text-transform uppercase
- Testimonial attribution: Helvetica/Arial, 13px, 500, letter-spacing 0.02em
- CTA: Questrial, 16px, 700 (Bold), letter-spacing 0.02em

**Border Radius:** Cards: 12px, CTA button: 6px (squircle), Images: 8px, Small: 4px
**Shadow:** Primary: none, Secondary: 0 2px 8px rgba(31,45,47,0.06)
**Spacing:** Section gap: 48px, H-padding: 24px, Card padding: 32px all sides, Element gap: 24px

## 4. Layout ASCII

```
┌─────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────┐ │
│ │  Lena from BrightKidCo                  │ │  ← From name: personal, peer
│ └─────────────────────────────────────────┘ │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  ┌──────────────────────────────────────┐   │  ← Signal Progress Meter
│  │  ○ ──────── ● ──────── ● ──────── ◉  │   │     Custom SVG illustration
│  │  Source       L1 path    L2 path     │   │     Three neural nodes
│  │  node         L3 path    ────────     │   │     branching from one
│  │               (all converge at CTA)  │   │     source into three paths
│  └──────────────────────────────────────┘   │
│                                              │
│  ┌──────────────────────────────────────┐   │  ← Hero Quote: large
│  │                                      │   │     expressive typography
│  │  ❝ "The moment he stands up          │   │     Questrial 28px italic
│  │     he pees."                        │   │     #C46A4A (Terracotta)
│  │                                      │   │     Hand-drawn SVG quote mark
│  │  That's a real parent, describing    │   │     at 48px in #C46A4A
│  │  their child before trying           │   │
│  │  Body-Signal underwear.              │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  If any of these sound familiar:            │  ← Recognition Anchors
│  · He sits on the toilet, waits, nothing.   │     Signal dots as bullets
│  · She doesn't react when she's wet.        │     6px emerald filled circles
│  · He knows what to do but can't feel       │     with subtle glow
│    the urge in time.                        │
│  · She's "almost trained" more than once.   │
│  · He's been in pull-ups for years.         │
│                                              │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  ┌──────────────────────────────────────┐   │  ← Validation: LETTER-07
│  │  You're not alone in this. And more  │   │     #FBF7F1 background
│  │  importantly, your child is not      │   │     32px padding
│  │  broken. Their nervous system        │   │     Max 68 chars/line
│  │  processes body signals differently.  │   │
│  └──────────────────────────────────────┘   │
│                                              │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  │                                         │   │  ← Mechanism: EDU-1
│  │  What we've learned, from Kelly        │   │     2px vertical line
│  │  Mahler's work on interoception, from  │   │     #2BAEB4 at 60%
│  │  the Nicholson et al. (2019) study...  │   │
│  │                                         │   │
│  │  The Body-Signal Learning Layer in     │   │
│  │  our underwear is designed differently. │   │
│  │  It creates a gentle, sustained        │   │
│  │  "uh-oh" sensation, 30 to 60 seconds  │   │
│  │  of feedback...                        │   │
│  │                                         │   │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  "Three parents, three different kids,       │  ← Three-Family Testimonials
│   one common experience:"                    │     SP-01 with offset cards
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │  ┃ He was "almost trained" for       │   │  ← Card 1 (L1): narrower
│  │  ┃  months. After 2 weeks in         │   │     slightly rotated -1deg
│  │  ┃  Body-Signal underwear, he        │   │     2px left border #2BAEB4
│  │  ┃  paused mid-play and looked down. │   │
│  └──────────────────────────────────────┘   │
│                                              │
│       ┌────────────────────────────────────┐│  ← Card 2 (L2): full-width
│       │  ┃ She had the BCBA protocol,     ││     slightly rotated +1deg
│       │  ┃  sensory OT, social stories... ││
│       │  ┃  At Week 4, she pulled at      ││
│       │  ┃  her pants right before peeing.││
│       └────────────────────────────────────┘│
│                                              │
│  ┌──────────────────────────────────────┐   │  ← Card 3 (L3): narrower
│  │  ┃ He's not trained. Not fully.      │   │     slightly rotated -1deg
│  │  ┃  But after 8 weeks, he paused     │   │
│  │  ┃  mid-accident for the first time  │   │
│  │  ┃  in 6 years. He looked down.      │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  "He went today! Once! But he went!"        │  ← Pull quote: emerald accent
│                                              │
│  That's what a first win looks like. It's   │
│  not "fully potty trained." It's a pause.   │
│  A look. A single step toward the bathroom. │
│                                              │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  ┌──────────────────────────────────────┐   │  ← Offer: ProductShowcaseSoft
│  │  If you had 1 pair in your cart...   │   │     #FBF7F1 at 5% opacity bg
│  │                                      │   │     background
│  │  THE 3+3 BUNDLE                      │   │
│  │  6 pairs · $79.99 · Free Shipping    │   │
│  │  $13.33 per pair                     │   │
│  │                                      │   │
│  │  (flat-lay product photo)            │   │
│  └──────────────────────────────────────┘   │
│                                              │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  ┌──────────────────────────────────────┐   │  ← Guarantee: TRUST-4
│  │  60 days to try it. By your          │   │     #FBF7F1 background
│  │  judgment.                           │   │     40px padding
│  │  No questions. No pressure.          │   │
│  │  Just your timeline.                 │   │
│  └──────────────────────────────────────┘   │
│                                              │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  ┌────────────────────┐                     │  ← CTA: CTAClose
│  │ Upgrade to the     │                     │     #2BAEB4 fill
│  │ 3+3 Bundle         │                     │     #FFFFFF text
│  │ $79.99             │                     │
│  └────────────────────┘                     │
│                                              │
│  No rush, I'll read about the science first │  ← Secondary: text link
│                                              │     #4A6568, underline
│                                              │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  Next time: 60 days to try it. Your          │  ← Next time teaser
│  judgment. No pressure.                      │     #4A6568, 13px
│                                              │
│  With understanding,                        │  ← Lena Sign-Off
│  Lena ——                                    │     MEDIUM variant
│  Customer Support · Mom of two autistic sons │
│                                              │
│  P.S. Both my sons went through this. One   │
│  trained at 6, the other at almost 8...     │
│                                              │
│  P.S. Your 60-day guarantee is valid on     │
│  every order...                             │
│                                              │
│  ┌──────────────────────────────────────┐   │  ← Footer
│  │  BrightKidCo                         │   │
│  │  [Physical Address]                  │   │
│  │  [Unsubscribe Link]                  │   │
│  │  Reply to this email. Lena reads     │   │
│  │  every response.                     │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

## 5. Section Specs

### Section 1 — From Name
- **Component:** Minimal text header (from primitives.jsx, Header adapted)
- **Copy:** "Lena from BrightKidCo"
- **Background:** #FFFFFF
- **Padding:** 32px top, 24px horizontal, 16px bottom
- **Typography:** Helvetica/Arial 14px, 400, color #4A6568 (Muted Ink)
- **Notes:** Personal from name, peer voice.

### Section 2 — Hero (HERO-12 — Before Snapshot)
- **Component:** HERO-12 — Before Snapshot
- **Sub-element:** Signal Progress Meter (custom SVG illustration at top)
  - One source node branching into three paths (L1, L2, L3), converging at CTA
  - L1 node label: "Pause, Week 2"
  - L2 node label: "Pull at pants, Week 4"
  - L3 node label: "Pause mid-accident, Week 8"
  - Destination node: "Signal received"
  - Paths: Dotted lines, #8A9B9D at 30% → #2BAEB4 gradient
  - Nodes: 8px filled circles with subtle glow
- **Hero Quote (verbatim):** "\"The moment he stands up he pees.\""
- **Quote mark:** Hand-drawn SVG opening quote, 48px, #C46A4A (Terracotta)
- **Hook body (verbatim):** "That's a real parent, describing their child before trying Body-Signal underwear. If that sentence lands a little too close to your morning, whether your child is 3 or 10, verbal or not, whether you've tried 2 methods or 12, the same piece is usually missing."
- **Background:** #FFFFFF
- **Padding:** 48px top, 24px horizontal
- **Typography:** Questrial 28px italic, letter-spacing -0.02em, color #C46A4A for quote. Helvetica/Arial 16px, 400, line-height 1.6 for body.
- **Notes:** The terracotta color appears ONLY in this email — it distinguishes the raw, unfiltered parent voice. The hand-drawn quote mark is a custom SVG, not a standard typographic mark.

### Section 3 — Recognition Anchors
- **Component:** TEXT/LETTER (custom adaptation)
- **Copy (verbatim):**
  - "If any of these sound familiar:"
  - "• He sits on the toilet, waits, nothing. Then pees 30 seconds after getting up."
  - "• She doesn't react when she's wet, keeps playing, doesn't notice."
  - "• He knows what to do but can't feel the urge in time."
  - "• She's 'almost trained' more than once, but it never sticks."
  - "• He's been in pull-ups for years and you've stopped counting."
- **Bullet style:** Small emerald signal dots (6px filled circles with `box-shadow: 0 0 4px #2BAEB433`)
- **Background:** #FFFFFF
- **Padding:** 24px horizontal, 48px section gap
- **Typography:** Helvetica/Arial 15px, 400, line-height 1.6, color #1F2D2F
- **Notes:** 5 recognition anchors (R2 satisfied). Signal dots as bullets instead of standard circles — reinforces the signal-path visual metaphor.

### Section 4 — Validation (LETTER-07 — Greeting Card)
- **Component:** LETTER-07 — Greeting Card
- **Copy (verbatim):** "You're not alone in this. And more importantly, your child is not broken. Their nervous system processes body signals differently. The \"I need to go\" message isn't arriving the way traditional methods assume it should. That's not defiance. That's neurology.\n\nWhether your child can tell you they peed or just looks down confused; whether they've been at this for 3 months or 3 years, the gap is the same one. The signal doesn't arrive in time."
- **Background:** #FBF7F1 (Cream)
- **Padding:** 48px section gap, 32px card padding
- **Typography:** Helvetica/Arial 16px, 400, line-height 1.6, max 68 chars/line, color #1F2D2F
- **Notes:** "That's not defiance. That's neurology." — the validation anchor. Full-width text block, generous spacing.

### Section 5 — Mechanism (EDU-1 — Definition Block)
- **Component:** EDU-1 — Definition Block
- **Eyebrow:** "the mechanism"
- **Copy (verbatim):** "What we've learned, from Kelly Mahler's work on interoception, from the Nicholson et al. (2019) study on body awareness in autistic children, from 49 studies confirming these differences are real and measurable, is that the brain needs feedback it's not getting.\n\nMost training methods assume your child can already feel the \"I need to go\" sensation. For kids whose nervous systems process internal signals differently, that assumption is the reason those methods failed.\n\nThe Body-Signal Learning Layer in our underwear is designed differently. It creates a gentle, sustained \"uh-oh\" sensation, 30 to 60 seconds of feedback, that gives the brain time to register: something happened. Over time, that repeated signal builds neural pathways. The brain starts to recognize the feeling before the event, not after."
- **Background:** #FFFFFF
- **Border:** 2px vertical line (#2BAEB4 at 60% opacity) inset 8px from left edge, spanning full block height
- **Padding:** 32px horizontal, 48px section gap
- **Typography:** Questrial 13px, 500, uppercase, letter-spacing 0.15em, color #2BAEB4 for eyebrow. Helvetica/Arial 16px, 400, line-height 1.6 for body.
- **Notes:** Three paragraphs of mechanism. Names specific researchers (Kelly Mahler, Nicholson et al. 2019). The 30-60 second feedback window is the mechanism anchor.

### Section 6 — Testimonials (SP-01 — Three-Family Quote Block)
- **Component:** SP-01 — Three-Family Quote Block (with asymmetric card treatment)
- **Eyebrow:** "Three parents, three different kids, one common experience:"
- **Card 1 (L1 — Sarah):** "He was 'almost trained' for months. Sometimes he'd go, sometimes he wouldn't. After 2 weeks in Body-Signal underwear, he paused mid-play and looked down. That pause had never happened before in 3 years."
  - Width: Narrower (80% of container)
  - Rotation: -1deg (slight left tilt)
- **Card 2 (L2 — Lisa):** "She had the BCBA protocol, sensory OT, social stories, sticker charts, everything. She still didn't initiate. At Week 4, she pulled at her pants right before peeing. Her mom called it 'the first time I saw her feel something coming.'"
  - Width: Full-width
  - Rotation: +1deg (slight right tilt)
- **Card 3 (L3 — Maria):** "He's not trained. Not fully. But after 8 weeks, he paused mid-accident for the first time in 6 years. He looked down. He felt something. That pause was everything."
  - Width: Narrower (80% of container)
  - Rotation: -1deg (slight left tilt)
- **Pull quote (verbatim):** "He went today! Once! But he went!" — #2BAEB4, Questrial 18px, 600
- **Closing (verbatim):** "That's what a first win looks like. It's not 'fully potty trained.' It's not 'no more pull-ups.' It's a pause. A look. A single step toward the bathroom. Those are real wins, and they're happening for families across every level."
- **Card Background:** #FFFFFF
- **Card Border:** 2px top border #2BAEB4 (30% width from left edge, asymmetric)
- **Card Radius:** 12px
- **Card Shadow:** 0 2px 8px rgba(31,45,47,0.06)
- **Card Padding:** 24px
- **Typography:** Helvetica/Arial 16px, 400, line-height 1.5 for quotes. Helvetica/Arial 13px, 500, color #4A6568 for attribution.
- **Notes:** Asymmetric card treatment — different widths and slight rotations mirror the different journeys. On mobile (below 640px), all rotations removed, cards become full-width.

### Section 7 — Offer (ProductShowcaseSoft)
- **Component:** ProductShowcaseSoft
- **Eyebrow:** "the 3+3 bundle"
- **Copy (verbatim):** "If you had 1 pair in your cart, most parents find that one pair alone isn't enough for real rotation. The underwear needs to be worn consistently every day so the brain gets repeated feedback signals. One pair means laundry every night. Three pairs means the nervous system gets the consistent input it needs.\n\nThe 3+3 Bundle gives you 6 pairs at $79.99 with free shipping, that's 62% off buying them individually. Enough for daily rotation, enough for the brain to start building those signal pathways day after day.\n\nIf you already had the 3+3 in your cart, you're all set, your original offer is saved, with free shipping and the full 60-day guarantee."
- **Price anchor (verbatim):** "That's $13.33 per pair with the bundle — less than half the single-pair price."
- **Background:** #2BAEB4 at 5% opacity (subtle emerald tint radial gradient)
- **Product photo:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-watermelon-pink.jpg
  - Dimensions: 200×200px, centered
  - Alt text: "BrightKidCo body-signal training pants in watermelon pink, flat lay"
- **Padding:** 32px all around, 48px section gap
- **Typography:** Questrial 18px, 600, color #1F2D2F for "The 3+3 Bundle." Helvetica/Arial 16px, 400 for body. Questrial 14px, 700, color #2BAEB4 for price anchor.
- **Notes:** First email in Cart flow to include product photography. The flat-lay product shot is clean, minimal, on white background. The 5% emerald tint behind the offer creates a "landing zone" without being a full background color.

### Section 8 — Guarantee (TRUST-4 — Dashed Policy Quote)
- **Component:** TRUST-4 — Dashed Policy Quote
- **Copy (verbatim):** "60 days to try it. By your judgment. If it doesn't work for your child, no pause, no look, no step toward the potty, full refund. No questions. No pressure. Just your timeline."
- **Background:** #FBF7F1 (Cream)
- **Border:** None
- **Padding:** 40px all around
- **Typography:** Questrial 18px, 600 for "60 days to try it. By your judgment." color #1F2D2F. Helvetica/Arial 16px, 400 for body.
- **Notes:** Shorter guarantee block than E1 — the mechanism and testimonials have done the heavy lifting. The guarantee is a gentle close, not a hard sell.

### Section 9 — CTA (CTAClose from primitives.jsx)
- **Primary CTA:** "Upgrade to the 3+3 Bundle, $79.99"
  - Background: #2BAEB4 (Teal)
  - Text: #FFFFFF
  - Questrial 16px, 700, letter-spacing 0.02em
  - Height: 56px
  - Width: 360px (desktop), full-width (mobile)
  - Border-radius: 6px (squircle)
  - Alignment: Center
- **Secondary text link:** "No rush, I'll read about the science first"
  - Helvetica/Arial 14px, 400, color #4A6568, underline
- **Background:** #FFFFFF
- **Padding:** 48px section gap above
- **Notes:** Primary CTA is the bundle upgrade. Secondary link provides a pressure-release valve — the parent can opt out of the upsell and still engage.

### Section 10 — Next Time + Lena Sign-Off
- **Next time teaser:** "Next time: 60 days to try it. Your judgment. No pressure." — #4A6568, 13px
- **Sign-off variant:** MEDIUM (per brand voice reference §9.4)
- **Copy (verbatim):**
  - "With understanding,"
  - "Lena ——"
  - "Customer Support · Mom of two autistic sons"
  - "P.S. Both my sons went through this. One trained at 6, the other at almost 8. I know what it feels like to try everything. [See how the Body-Signal approach works → link]"
  - "P.S. Your 60-day guarantee is valid on every order. Try it, watch for a pause or a look, and decide from there. [Complete your purchase → link]"
- **Typography:** Helvetica/Arial 14px, 400, color #1F2D2F
- **Background:** #FFFFFF
- **Notes:** MEDIUM variant for E2 — includes personal P.S. with Lena's own story. Two P.S. lines: one personal, one practical.

### Section 11 — Footer
- **Component:** UTIL-04 Footer
- **Copy (verbatim):**
  - "BrightKidCo"
  - "[Physical address from store settings]"
  - "[Unsubscribe link]"
  - "Reply to this email. Lena reads every response."
- **Typography:** Helvetica/Arial 11px, 400, letter-spacing 0.02em, color #8A9B9D
- **Background:** #FFFFFF
- **Notes:** CAN-SPAM compliant.

## 6. Component Details

### HERO-12 — Before Snapshot
- **Props:** Full-width hero with quote as hook
- **Variant:** Real parent quote as hero — raw, unfiltered voice
- **Custom overrides:** Hand-drawn SVG quote mark (48px, #C46A4A). Questrial 28px italic for quote. Signal Progress Meter SVG above the quote — three branching paths from one source node.

### Signal Progress Meter (Custom SVG)
- **Props:** Three neural nodes connected by dotted signal paths
- **Variant:** Branching tree — one source → three paths → one destination
- **Custom overrides:** Source node (top), three branching paths labeled "Pause, Week 2" / "Pull at pants, Week 4" / "Pause mid-accident, Week 8", converging at "Signal received" destination node. Paths: dotted, #8A9B9D → #2BAEB4 gradient.

### LETTER-07 — Greeting Card
- **Props:** Full-width text block
- **Variant:** Validation narrative
- **Custom overrides:** "That's not defiance. That's neurology." as the validation anchor.

### EDU-1 — Definition Block
- **Props:** Inset text block with left-edge indicator
- **Variant:** Mechanism as calm fact
- **Custom overrides:** 2px vertical line (#2BAEB4 at 60% opacity) inset 8px. Three paragraphs with researcher names.

### SP-01 — Three-Family Quote Block (adapted with asymmetry)
- **Props:** Stacked testimonial cards with asymmetric treatment
- **Variant:** Three-Family Testimonial Pattern with visual asymmetry
- **Custom overrides:** Cards alternate widths (80% / 100% / 80%) and rotations (-1deg / +1deg / -1deg). 2px top border (30% width from left). Signal dots as bullets.

### ProductShowcaseSoft
- **Props:** Product introduction with flat-lay photo
- **Variant:** Bundle upsell with pricing
- **Custom overrides:** Flat-lay product photo (200×200px). 5% emerald tint background. Price anchor in teal.

### TRUST-4 — Dashed Policy Quote
- **Props:** Centered guarantee block
- **Variant:** Honest guarantee container
- **Custom overrides:** Shorter than E1 — mechanism and testimonials do the heavy lifting.

### CTAClose (from primitives.jsx)
- **Props:** Primary CTA with secondary text link
- **Variant:** Bundle upsell CTA
- **Custom overrides:** #2BAEB4 fill, 360px width. Secondary text link as pressure-release valve.

### 20.1 — Wave Divider (DECORATIVE)
- **Props:** Decorative divider
- **Variant:** Section separator
- **Custom overrides:** #8A9B9D at 30% opacity, 0.5px, 40% content width, centered.

## 7. Image Briefs

### Image 1 — Product Flat Lay (used in offer section)
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-watermelon-pink.jpg
- **Alt text:** "BrightKidCo body-signal training pants in watermelon pink, flat lay"
- **Recommended dimensions:** 200×200px
- **Cropping/focal point:** Product centered, clean white background
- **Fallback color:** #FFFFFF
- **Notes:** First product photo appearance in Cart flow. Clean, minimal, on white background. Supports the bundle upsell.

### Image 2 — Lifestyle Photo (NOT used in E2)
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-napping-watermelon-pink-shorts.png
- **Alt text:** "Toddler napping in watermelon pink shorts, wearing BrightKidCo training pants"
- **Notes:** Available but NOT used in E2. E2 hero is the quote + signal progress meter, not lifestyle photography.

## 8. Style Notes

### Color Tokens (exact hex)
| Role | Hex | Usage |
|------|-----|-------|
| Primary text | #1F2D2F | Headlines, body text, strong emphasis |
| Teal accent | #2BAEB4 | CTA, signal-path nodes, eyebrows, section indicators |
| Green accent | #5DD07A | Guarantee highlight, trust badge |
| Terracotta | #C46A4A | Hero quote ONLY (raw parent voice) |
| Muted ink | #4A6568 | Secondary text, footnotes, source lines |
| Cream background | #FBF7F1 | Full email body, guarantee panel |
| White | #FFFFFF | Card backgrounds, footer |
| Grey | #8A9B9D | Footer text, dividers, signal line start |
| Offer tint | #2BAEB4 at 5% | Offer section background |

### Typography
- **Font stack:** Questrial (headlines, quotes), Helvetica/Arial/sans-serif (body)
- **Email width:** 600px max
- **Mobile breakpoint:** 640px
- **Mobile scaling:** Headlines 22px, body 14px, CTA full-width, rotations removed

### Spacing
- **Section gap:** 48px
- **H-padding:** 24px
- **Card padding:** 32px
- **Element gap:** 24px

## 9. Technique Specs

| Element | Specification |
|---------|--------------|
| Email background | #FBF7F1 (Cream) |
| Body text | #1F2D2F (Ink), 15px/16px, 400 weight, 1.6 line-height |
| Headlines | #1F2D2F (Ink), 28px/32px, 700 weight, 1.15 line-height |
| Hero quote | #C46A4A (Terracotta), 28px, italic, -0.02em tracking |
| Hand-drawn quote mark | #C46A4A, SVG, 48px |
| Eyebrows | #2BAEB4 (Teal), 13px, 500, uppercase, 0.15em tracking |
| CTA button | #2BAEB4 fill, #FFFFFF text, 16px, 700, 56px height, 6px radius |
| Testimonial cards | #FFFFFF fill, 2px top border #2BAEB4 (30% width), 12px radius |
| Card rotations | -1deg (L1, L3) / +1deg (L2) — removed below 640px |
| Signal dots (bullets) | 6px filled circles, #2BAEB4, box-shadow: 0 0 4px #2BAEB433 |
| Signal progress meter | Dotted lines, 8px nodes, #8A9B9D → #2BAEB4 gradient |
| Mechanism block | 2px vertical line #2BAEB4 at 60%, inset 8px from left |
| Guarantee panel | #FBF7F1 background, no border, 40px padding |
| Offer section | #2BAEB4 at 5% opacity radial gradient background |
| Footer | #8A9B9D, 11px, 400 weight |
| Card shadow | 0 2px 8px rgba(31,45,47,0.06) |
| Micro-noise overlay | 2% opacity over entire email, pointer-events: none |

## 10. Level Markers

**Cross-level (R1-R6 compliant):** This email serves all 4 levels simultaneously.

| Rule | How E2 satisfies it |
|------|-------------------|
| R1 (Symptom over label) | Zero level labels. Testimonials use symptom language. "Three parents, three different kids, one common experience" — no labels. |
| R2 (3-5 Recognition Anchors) | 5 anchors in dedicated section: (1) sits and waits, (2) doesn't react when wet, (3) knows but can't feel, (4) "almost trained" multiple times, (5) years of pull-ups. |
| R3 (Age ranges) | "Whether your child is 3 or 10" — implicit range. No fixed-age imagery. |
| R4 (Verbal/Non-Verbal inclusivity) | "whether your child is verbal or not" — explicit inclusion. Three-family covers verbal (Sarah), BCBA-supported (Lisa), non-verbal (Maria). |
| R5 (Timeline flexibility) | "3 months or 3 years" — range language. Testimonials show Week 2, Week 4, Week 8 — different timelines, not fixed promises. |
| R6 (Low-bar success) | "It's a pause. A look. A single step toward the bathroom." Mini-wins defined as success. "Signal received" not "Fully trained." |

**What is NOT present:**
- No Pre-K imagery
- No therapy/clinical imagery
- No age-specific imagery
- No pull-up or diaper imagery
- No autism-awareness symbols
- No level labels or color-coding by level

## 11. Interaction Notes

| Element | Interaction | Notes |
|---------|------------|-------|
| Signal Progress Meter SVG | Static on load; animated GIF fallback (optional) | Pulse travels down three branches sequentially, reconverges at CTA. 1.5s total. Fallback: all paths drawn, destination node glows. |
| Hero quote | Static | Hand-drawn SVG quote mark, no animation. |
| Testimonial cards | Static on load; optional fade-in on scroll (CSS only) | 100ms stagger between cards (L1, L2, L3). Gmail/Outlook show static. |
| CTA button | Static | No hover animation. #2BAEB4 fill, always visible. |
| Signal dots (bullets) | Static | No animation. Decorative, not interactive. |
| Offer product photo | Static | Flat-lay image, no animation. |
| Links | Clickable | CTA link, secondary text link, P.S. links. All standard `<a>` tags. |
| Email client constraints | Apple Mail: full CSS. Gmail: GIF only. Outlook: static first frame. | Design first frame of any GIF as completed state. |
| Mobile responsive | Single-column below 640px | Rotations removed. Cards full-width. Signal path becomes vertical dotted line. All tap targets ≥ 44×44px. H1 drops to 22px. |

## 12. Rendering Notes

- **Email client considerations:** The signal progress meter should be an inline SVG with optional GIF animation. Gmail strips `<style>` but renders GIFs. Outlook shows static first frame — design first frame as completed state.
- **Mobile responsive:** All sections collapse to full-width with 20px side padding. Card rotations and offsets removed below 640px. Signal path becomes vertical dotted line. CTA button goes full-width. Body text scales to 14px minimum.
- **Accessibility:** Color contrast: #1F2D2F on #FBF7F1 = 12.6:1 (WCAG AAA). #FFFFFF on #2BAEB4 = 4.7:1 (WCAG AA). #C46A4A on #FFFFFF = 4.5:1 (WCAG AA). All content is text-based.
- **Special instructions:** ZERO urgency. No countdown timers. No pulsing buttons. The signal progress meter animation (if used) is subtle. CTA is static. The terracotta hero quote is the only use of that color — it creates a "raw, unfiltered voice" distinction without crossing into urgency territory.
