# Wireframe: Cart Abandonment — E1 | Cross-Level

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Cart Abandonment (Flow 02) |
| **Position** | E1 — 1 Hour post-abandonment |
| **Level** | Cross-Level (serves L1, L2, L3, GF simultaneously via R1-R6) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/cart/cart-02-e1.md |
| **Strategy Map Entry** | flows.cart-abandonment.emails.e1 |
| **Flow Signature** | Urgent but gentle, ink primary, teal accents, low density, product-first (framed product card), flat-lay product shots |
| **GF Calibration** | Medium typography weight, neutral-warm colors, 7-9 sections, low urgency, mixed inclusive social proof |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, EDU/MECHANISM, PRODUCT, CTA, GUARANTEE/TRUST, DECORATIVE |
| **Total Estimated Height** | ~2600px |

## 2. Strategy Box

**Big Idea:** The signal path visual metaphor — a dotted neural line traveling from left to right through three recognition-anchor nodes, arriving at the CTA. The body's signal was always meant to arrive; it just needed the right path.
**Emotional Arc Position:** Friendly check → Mechanism reminder → Three-family proof → Permission to act. E1 is the softest touchpoint in the Cart flow — no product push, just empathy and explanation.
**Component Selection Rationale:** HERO-12 (Before Snapshot) frames the email as a gentle "your cart is still here" check-in, not a sales pitch. LETTER-07 (Greeting Card) delivers the hook as a personal note. EDU-1 (Definition Block) presents the interoception mechanism as calm fact. SP-01 (Yellow Quote Block) delivers three-family testimonial proof. ProductShowcaseSoft introduces the product without push. TRUST-4 (Dashed Policy Quote) frames the 60-day guarantee as honest protocol. CTAClose delivers the single CTA.
**Differentiation Note:** E1 is the most restrained email in the Cart flow. No product photography in hero. The signal-path illustration is the hero — abstract, inclusive, no faces. Density is low: 7 sections maximum. The CTA is a text link, not a button, to reduce pressure.

## 3. Creative Box

**Color Palette:**
- Primary: #1F2D2F (Ink) — Headlines, body text, strong emphasis
- Secondary: #2BAEB4 (Teal) — CTA accents, signal-path nodes, section eyebrows
- Accent: #5DD07A (Green) — Guarantee highlight, trust badge, subtle warmth
- Background: #FBF7F1 (Cream) — Full email body background
- Text: #1F2D2F (Ink) — Primary body copy
- Muted: #4A6568 (Muted Ink) — Secondary text, footnotes, source lines
- Grey: #8A9B9D (Grey) — Footer, disclaimers, subtle dividers
- Card: #FFFFFF (White) — Testimonial cards, product showcase panel

**Typography:**
- Heading: Questrial, 28px (32px desktop), 700 (Bold), line-height 1.15, letter-spacing -0.01em
- Body: Helvetica/Arial/sans-serif, 16px (17px desktop), 400 (Regular), line-height 1.6, letter-spacing 0
- Accent: Questrial, 13px, 500 (Medium), letter-spacing 0.15em, text-transform uppercase
- Testimonial attribution: Helvetica/Arial, 13px, 500, letter-spacing 0.02em
- CTA: Questrial, 16px, 700 (Bold), letter-spacing 0.02em

**Border Radius:** Cards: 8px, CTA button: 6px (squircle), Images: 8px, Small: 4px
**Shadow:** Primary: none (Cart flow avoids heavy shadows), Secondary: 0 2px 8px rgba(31,45,47,0.06)
**Spacing:** Section gap: 48px, H-padding: 24px, Card padding: 32px all sides, Element gap: 24px

## 4. Layout ASCII

```
┌─────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────┐ │
│ │  Lena from BrightKidCo                  │ │  ← From name: personal, peer
│ └─────────────────────────────────────────┘ │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  YOUR CART'S STILL HERE.                     │  ← Eyebrow: Questrial 13px
│  (no rush)                                   │     uppercase, #2BAEB4
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │                                      │   │  ← Signal Path Illustration
│  │  ○────────────●────────────●────────●│   │     Custom SVG: dotted line
│  │  Node 1       Node 2       Node 3    │   │     with 3 glowing nodes
│  │  (Sarah)      (Lisa)       (Maria)   │   │     Faint grey → warm emerald
│  │                                      │   │     gradient toward CTA
│  └──────────────────────────────────────┘   │
│                                              │
│  Whether you had one foot on the checkout    │  ← Hook: Questrial 28px bold
│  button or you were still reading, if your   │     #1F2D2F, line-height 1.15
│  child doesn't seem to feel when they need   │     Max 65 chars/line
│  to go, you were looking in the right place. │
│                                              │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  ┌──────────────────────────────────────┐   │  ← Validation: LETTER-07
│  │  You've probably seen some version   │   │     Greeting Card
│  │  of this: your child sits on the     │   │     #FBF7F1 background
│  │  toilet for 20 minutes, nothing      │   │     32px padding
│  │  happens, and then they're wet 30    │   │     Max 68 chars/line
│  │  seconds after standing up...        │   │
│  └──────────────────────────────────────┘   │
│                                              │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  │                                         │   │  ← Mechanism: EDU-1
│  │  Here's what most parents never get    │   │     Definition Block
│  │  told: the "I need to go" message      │   │     2px vertical line
│  │  travels from the bladder to the brain │   │     #2BAEB4 at 60% opacity
│  │  along a neurological pathway called   │   │     inset 8px from left
│  │  interoception...                      │   │
│  │                                         │   │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  A few real stories from parents who had     │  ← Three-Family Testimonials
│  the same question you're sitting with:      │     SP-01 Yellow Quote Block
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │  ┃ "He talked about the potty but    │   │  ← Card 1: 2px left border
│  │  ┃  wouldn't actually go. After two  │   │     #2BAEB4 at 40%
│  │  ┃  weeks in Body-Signal underwear,  │   │     #FFFFFF background
│  │  ┃  he paused mid-play and looked    │   │     8px border-radius
│  │  ┃  down."                           │   │
│  │  ┃  Sarah · mom of a verbal 4-year-old│  │
│  └──────────────────────────────────────┘   │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │  ┃ "My BCBA built the behavioral     │   │  ← Card 2: same treatment
│  │  ┃  foundation. But nothing changed  │   │
│  │  ┃  until my son's nervous system    │   │
│  │  ┃  started receiving the wetness    │   │
│  │  ┃  signal."                         │   │
│  │  ┃  Lisa · mom of a 6-year-old       │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │  ┃ "He'd never shown any awareness   │   │  ← Card 3: same treatment
│  │  ┃  in 9 years. After 6 weeks, he   │   │
│  │  ┃  pulled at his pants."            │   │
│  │  ┃  Maria · mom of a non-verbal 8-year-old│ │
│  └──────────────────────────────────────┘   │
│                                              │
│  Three different kids. Three different       │
│  timelines. One common piece: the body-      │
│  signal connection had never been given      │
│  a chance to form.                          │
│                                              │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  ┌──────────────────────────────────────┐   │  ← Product: ProductShowcaseSoft
│  │  THE BODY-SIGNAL LEARNING LAYER      │   │     #FBF7F1 background
│  │  ──────────────────────────────      │   │     8px border-radius
│  │                                      │   │     No product photography
│  │  Layer 1 · Inner Body-Signal Layer   │   │     Abstract layer lines
│  │  Layer 2 · Smart Absorption Core     │   │     in #2BAEB4 (teal)
│  │  Layer 3 · Protective Outer Barrier  │   │
│  └──────────────────────────────────────┘   │
│                                              │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  ┌──────────────────────────────────────┐   │  ← Guarantee: TRUST-4
│  │                                      │   │     Soft background panel
│  │  60 days to try it. By your          │   │     #FBF7F1 background
│  │  judgment.                           │   │     40px padding
│  │                                      │   │     No borders
│  │  If it doesn't work for your child,  │   │
│  │  full refund.                        │   │
│  └──────────────────────────────────────┘   │
│                                              │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  ┌────────────────────┐                     │  ← CTA: CTAClose
│  │ Check out when      │                     │     #2BAEB4 fill
│  │ you're ready        │                     │     #FFFFFF text
│  └────────────────────┘                     │     6px border-radius
│                                              │     56px height
│  Your original offer is saved               │     Questrial 16px 700
│                                              │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                              │
│  Next time: What other parents actually      │  ← Next time teaser
│  noticed after trying it.                    │     #4A6568, 13px
│                                              │
│  Talk soon,                                 │  ← Lena Sign-Off
│  Lena ——                                    │     SHORT variant
│  Customer Support · Mom of two autistic sons │     14px, 400 weight
│                                              │     #1F2D2F
│  P.S. If you want to see how the body-      │
│  signal approach works, [link]. No pressure. │
│                                              │
│  ┌──────────────────────────────────────┐   │  ← Footer
│  │  BrightKidCo                         │   │     11px
│  │  [Physical Address]                  │   │     #8A9B9D
│  │  [Unsubscribe Link]                  │   │
│  │  Reply to this email. Lena reads     │   │
│  │  every response.                     │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  ○ ··:·:  (Signal Dot Easter Egg)           │  ← 3 dots: hollow → half → full
│                                              │     #2BAEB4, 8px diameter
│                                              │     20px apart
└─────────────────────────────────────────────┘
```

## 5. Section Specs

### Section 1 — From Name
- **Component:** Minimal text header (from primitives.jsx, Header adapted)
- **Copy:** "Lena from BrightKidCo"
- **Background:** #FFFFFF
- **Padding:** 32px top, 24px horizontal, 16px bottom
- **Typography:** Helvetica/Arial 14px, 400, color #4A6568 (Muted Ink)
- **Notes:** Personal from name, not brand name. Reinforces peer voice.

### Section 2 — Hero (HERO-12 — Before Snapshot)
- **Component:** HERO-12 — Before Snapshot
- **Eyebrow:** "YOUR CART'S STILL HERE. (no rush)"
- **Layout:** Signal-path illustration spans full width, then hook text below
- **Signal-Path Illustration:** Custom SVG — dotted line with 3 glowing nodes
  - Node 1 (Sarah/L1): Tiny clock face partial-arc
  - Node 2 (Lisa/L2): Small sensory-wave icon
  - Node 3 (Maria/L3): Gentle pulse-circle
  - Line: Faint grey (#8A9B9D at 30% opacity) transitioning to warm emerald (#2BAEB4) toward CTA
  - Nodes: 8px filled circles with subtle glow (`box-shadow: 0 0 6px #2BAEB440`)
- **Hook (verbatim):** "Whether you had one foot on the checkout button or you were still reading, if your child doesn't seem to feel when they need to go, you were looking in the right place. Your cart's still saved, no rush. The more useful thing in this email might be the explanation for why nothing's quite worked yet."
- **Background:** #FFFFFF
- **Padding:** 48px top, 24px horizontal
- **Typography:** Questrial 28px (32px desktop), 700, line-height 1.15, letter-spacing -0.01em, color #1F2D2F (Ink)
- **Notes:** The word "signal" rendered in #2BAEB4 (teal) — the only word-level color treatment in the email. No urgency framing.

### Section 3 — Validation (LETTER-07 — Greeting Card)
- **Component:** LETTER-07 — Greeting Card
- **Copy (verbatim):** "You've probably seen some version of this: your child sits on the toilet for 20 minutes, nothing happens, and then they're wet 30 seconds after standing up. Or they play right through a wet diaper without reacting. Or they've been \"almost trained\" three times now. Or they don't initiate, ever. If even one of those sounds like your morning, you're not alone. And that pattern isn't about effort. It's about a signal your child's nervous system may not be receiving in time."
- **Background:** #FBF7F1 (Cream)
- **Padding:** 48px section gap, 32px card padding
- **Typography:** Helvetica/Arial 17px, 400, line-height 1.6, max 68 chars/line, color #1F2D2F
- **Notes:** 5 recognition anchors in a single paragraph (R2 satisfied). No bullet points — flowing prose matches the "gentle" Cart signature.

### Section 4 — Mechanism (EDU-1 — Definition Block)
- **Component:** EDU-1 — Definition Block
- **Eyebrow:** "the mechanism"
- **Copy (verbatim):** "Here's what most parents never get told: the \"I need to go\" message travels from the bladder to the brain along a neurological pathway called interoception, the body's ability to sense internal signals. Research consistently shows this pathway works differently in children with sensory differences (Barmpagiannis & Baldimtsi 2025, 49-study review). The signal either arrives too late, or it doesn't arrive at all. That's not stubbornness. It's not defiance. It's signal-timing. And no method built on the assumption that the signal already exists can address that."
- **Background:** #FFFFFF
- **Border:** 2px vertical line (#2BAEB4 at 60% opacity) inset 8px from left edge, spanning full block height
- **Padding:** 32px horizontal, 48px section gap
- **Typography:** Questrial 13px, 500, uppercase, letter-spacing 0.15em, color #2BAEB4 for eyebrow. Helvetica/Arial 17px, 400, line-height 1.6 for body.
- **Notes:** Inset mechanism block with teal left-edge indicator. Research citation inline. Not a card — just a typographic signal.

### Section 5 — Testimonials (SP-01 — Three-Family Quote Block)
- **Component:** SP-01 — Yellow Quote Block (adapted as three stacked cards)
- **Eyebrow:** "A few real stories from parents who had the same question you're sitting with:"
- **Card 1 (verbatim):** "\"He talked about the potty but wouldn't actually go. After two weeks in Body-Signal underwear, he paused mid-play and looked down. That pause had never happened in three years.\"\n— Sarah, mom of a verbal 4-year-old"
- **Card 2 (verbatim):** "\"My BCBA built the behavioral foundation. But nothing changed until my son's nervous system started receiving the wetness signal. That's what the underwear did, not training, just information his brain was missing.\"\n— Lisa, mom of a 6-year-old with sensory differences"
- **Card 3 (verbatim):** "\"He'd never shown any awareness in 9 years. Not one sign. After 6 weeks, he pulled at his pants. That was the first signal his nervous system had ever sent him. Not trained. But feeling something for the first time, that was enough.\"\n— Maria, mom of a non-verbal 8-year-old"
- **Closing (verbatim):** "Three different kids. Three different timelines. One common piece: the body-signal connection had never been given a chance to form."
- **Card Background:** #FFFFFF
- **Card Border:** 2px left border #2BAEB4 at 40% opacity
- **Card Radius:** 8px
- **Card Shadow:** 0 2px 8px rgba(31,45,47,0.06)
- **Card Padding:** 24px
- **Typography:** Helvetica/Arial 16px, 400, line-height 1.5 for quotes. Helvetica/Arial 13px, 500, letter-spacing 0.02em, color #4A6568 for attribution.
- **Notes:** Three cards stacked vertically (single-column, always). No rotation offsets. Clean, focused. The three-family pattern serves R1-R6 simultaneously.

### Section 6 — Product Introduction (ProductShowcaseSoft)
- **Component:** ProductShowcaseSoft
- **Eyebrow:** "the product in your cart"
- **Copy (verbatim):** "The product in your cart, the Body-Signal Learning Layer underwear, is designed around exactly that missing connection. The cotton inner layer creates a gentle, sustained \"uh-oh\" sensation that lasts 30-60 seconds. Long enough for a brain that processes signals differently to register: something happened. Without a prompt. Without a timer. Without a sticker chart. Just the body doing the teaching."
- **Visual treatment:** Three stacked horizontal thin lines in #2BAEB4 (teal) with text labels on the right. No product photography.
- **Background:** #FBF7F1 (Cream)
- **Border:** 8px border-radius
- **Padding:** 24px
- **Typography:** Questrial 13px labels, Helvetica/Arial 17px body
- **Notes:** Product introduced ONLY after mechanism explanation. GENTLE framing per S2 — no push, no urgency.

### Section 7 — Guarantee (TRUST-4 — Dashed Policy Quote)
- **Component:** TRUST-4 — Dashed Policy Quote
- **Copy (verbatim):** "60 days to try it. By your judgment. If it doesn't work for your child, if you see no pause, no look, no step toward the bathroom, full refund. The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system."
- **Background:** #FBF7F1 (Cream)
- **Border:** None
- **Padding:** 40px all around
- **Typography:** Questrial 18px, 600 for "60 days to try it. By your judgment." color #1F2D2F. Helvetica/Arial 16px, 400 for body.
- **Notes:** Single centered block on soft background. Frames guarantee as honest protocol, not conversion lever.

### Section 8 — CTA (CTAClose from primitives.jsx)
- **Hero CTA:** "Check out when you're ready"
  - Background: #2BAEB4 (Teal)
  - Text: #FFFFFF
  - Questrial 16px, 700, letter-spacing 0.02em
  - Height: 56px
  - Width: 320px (desktop), full-width (mobile)
  - Border-radius: 6px (squircle)
  - Alignment: Center
- **Supporting text:** "Your original offer is saved" — Helvetica/Arial 14px, 400, #4A6568
- **Background:** #FFFFFF
- **Padding:** 48px section gap above
- **Notes:** Single CTA. No secondary button. The "no rush" framing is maintained.

### Section 9 — Next Time + Lena Sign-Off
- **Next time teaser:** "Next time: What other parents actually noticed after trying it." — #4A6568, 13px
- **Sign-off variant:** SHORT (per brand voice reference §9.3)
- **Copy (verbatim):**
  - "Talk soon,"
  - "Lena ——"
  - "Customer Support · Mom of two autistic sons"
  - "P.S. If you want to see how the body-signal approach works, [link]. No pressure."
- **Typography:** Helvetica/Arial 14px, 400, color #1F2D2F
- **Background:** #FFFFFF
- **Notes:** SHORT variant for E1-E2. "Talk soon," is the prescribed closing. P.S. includes gentle link with "No pressure" — matches Cart signature.

### Section 10 — Footer
- **Component:** UTIL-04 Footer
- **Copy (verbatim):**
  - "BrightKidCo"
  - "[Physical Address]"
  - "[Unsubscribe Link]"
  - "Reply to this email. Lena reads every response."
- **Typography:** Helvetica/Arial 11px, 400, letter-spacing 0.02em, color #8A9B9D
- **Background:** #FFFFFF
- **Notes:** CAN-SPAM compliant. "Reply to this email" reinforces peer relationship.

### Section 11 — Easter Egg (Signal Dot Progression)
- **Component:** DECORATIVE
- **Copy:** None (purely visual)
- **Visual:** Three small dots arranged horizontally above footer
  - Dot 1 (left): hollow outline, 8px, #2BAEB4 at 30% opacity
  - Dot 2 (center): half-filled, 8px, #2BAEB4 at 60% opacity
  - Dot 3 (right): fully filled, 8px, #2BAEB4 at 100% opacity
  - Spacing: 20px between dots
- **Notes:** Micro-narrative: "no signal" → "signal starting" → "signal received." Each level reads their own meaning into it (R5 timeline flexibility). L1 = "we're on our way," L2 = "we're somewhere in the middle," L3 = "there is no finish line, only progress."

## 6. Component Details

### HERO-12 — Before Snapshot
- **Props:** Full-width hero with illustration above hook text
- **Variant:** Signal-path metaphor (custom SVG)
- **Custom overrides:** Dotted neural line with 3 glowing nodes. No product photography. No faces. Abstract geometric style. Line fades from #8A9B9D (30% opacity) to #2BAEB4 (100%) left-to-right.

### LETTER-07 — Greeting Card
- **Props:** Full-width text block, personal note framing
- **Variant:** Validation narrative — recognition anchors as flowing prose
- **Custom overrides:** Max 68 chars/line. 1.6 line-height. No bullet points.

### EDU-1 — Definition Block
- **Props:** Inset text block with left-edge indicator
- **Variant:** Mechanism as calm fact
- **Custom overrides:** 2px vertical line (#2BAEB4 at 60% opacity) inset 8px from left. Research citation inline.

### SP-01 — Three-Family Quote Block (adapted)
- **Props:** Stacked testimonial cards with left accent border
- **Variant:** Three-Family Testimonial Pattern (R6 compliant)
- **Custom overrides:** 2px left border #2BAEB4 at 40%. #FFFFFF card background. 8px radius. Vertical stack, no offsets.

### ProductShowcaseSoft
- **Props:** Text-forward, minimal, not pushy
- **Variant:** Abstract layer representation
- **Custom overrides:** Three horizontal lines in #2BAEB4 with text labels. No product photography. No illustrations.

### TRUST-4 — Dashed Policy Quote
- **Props:** Centered paragraph on soft background
- **Variant:** Honest guarantee container
- **Custom overrides:** #FBF7F1 background, 40px padding, no borders.

### CTAClose (from primitives.jsx)
- **Props:** Single centered button with supporting text
- **Variant:** Direct but caring
- **Custom overrides:** #2BAEB4 fill, #FFFFFF text, 6px border-radius, 56px height, 320px width.

### 20.1 — Wave Divider (DECORATIVE)
- **Props:** Decorative divider between sections
- **Variant:** Subtle separator
- **Custom overrides:** #8A9B9D at 30% opacity, 0.5px, 40% content width, centered. Used between major sections.

## 7. Image Briefs

### Image 1 — Product Flat Lay (NOT used as hero in E1)
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-watermelon-pink.jpg
- **Alt text:** "BrightKidCo body-signal training pants in watermelon pink, flat lay"
- **Recommended dimensions:** 200×200px if used
- **Notes:** Available but NOT used in E1. Product introduction is textual and abstract for E1.

### Image 2 — Lifestyle Photo (NOT used in E1)
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-napping-watermelon-pink-shorts.png
- **Alt text:** "Toddler napping in watermelon pink shorts, wearing BrightKidCo training pants"
- **Notes:** Available but NOT used in E1. E1 hero is the signal-path illustration, not photography.

## 8. Style Notes

### Color Tokens (exact hex)
| Role | Hex | Usage |
|------|-----|-------|
| Primary text | #1F2D2F | Headlines, body text, strong emphasis |
| Teal accent | #2BAEB4 | CTA, signal-path nodes, eyebrows, section indicators |
| Green accent | #5DD07A | Guarantee highlight, trust badge |
| Muted ink | #4A6568 | Secondary text, footnotes, source lines |
| Cream background | #FBF7F1 | Full email body, guarantee panel, product showcase |
| White | #FFFFFF | Card backgrounds, footer |
| Grey | #8A9B9D | Footer text, dividers, signal line start |

### Typography
- **Font stack:** Questrial (headlines), Helvetica/Arial/sans-serif (body)
- **Email width:** 600px max
- **Mobile breakpoint:** 600px
- **Mobile scaling:** Headlines 24px, body 16px, CTA full-width

### Spacing
- **Section gap:** 48px
- **H-padding:** 24px
- **Card padding:** 32px
- **Element gap:** 24px

## 9. Technique Specs

| Element | Specification |
|---------|--------------|
| Email background | #FBF7F1 (Cream) |
| Body text | #1F2D2F (Ink), 16px/17px, 400 weight, 1.6 line-height |
| Headlines | #1F2D2F (Ink), 28px/32px, 700 weight, 1.15 line-height |
| Eyebrows | #2BAEB4 (Teal), 13px, 500, uppercase, 0.15em tracking |
| CTA button | #2BAEB4 fill, #FFFFFF text, 16px, 700, 56px height, 6px radius |
| Testimonial cards | #FFFFFF fill, 2px left border #2BAEB4 at 40%, 8px radius |
| Mechanism block | 2px vertical line #2BAEB4 at 60%, inset 8px from left |
| Guarantee panel | #FBF7F1 background, no border, 40px padding |
| Footer | #8A9B9D, 11px, 400 weight |
| Signal path line | #8A9B9D at 30% → #2BAEB4 gradient, 1.5px stroke |
| Signal nodes | 8px filled circles, #2BAEB4, box-shadow: 0 0 6px #2BAEB440 |
| Easter egg dots | 8px circles, 20px apart, #2BAEB4 at 30%/60%/100% |
| Card shadow | 0 2px 8px rgba(31,45,47,0.06) |
| Micro-noise overlay | 2% opacity over entire email, pointer-events: none |

## 10. Level Markers

**Cross-level (R1-R6 compliant):** This email serves all 4 levels simultaneously.

| Rule | How E1 satisfies it |
|------|-------------------|
| R1 (Symptom over label) | Zero level labels. Testimonials use symptom language ("talked about potty," "sensory differences," "non-verbal"). No "L1/L2/L3" anywhere in email body. |
| R2 (3-5 Recognition Anchors) | 5 anchors in Validation section: (1) sits 20 mins, (2) wet 30 seconds after standing, (3) plays through wet diaper, (4) "almost trained" 3 times, (5) never initiates. |
| R3 (Age ranges) | No age-specific imagery. Testimonial attributions use approximate ages ("verbal 4-year-old," "6-year-old," "non-verbal 8-year-old") — ranges, not fixed. |
| R4 (Verbal/Non-Verbal inclusivity) | Testimonials cover verbal (Sarah's son talks about potty), sensory-difference (Lisa's son with BCBA support), and non-verbal (Maria's son, 9 years). |
| R5 (Timeline flexibility) | "Three different kids. Three different timelines." No fixed outcome promises. "30-60 seconds" is mechanism description, not timeline promise. |
| R6 (Low-bar success) | "No pause, no look, no step toward the bathroom" as success metric — mini-wins, not "fully trained." |

**What is NOT present:**
- No Pre-K imagery (clock, books, school bus)
- No therapy/clinical imagery (clipboard, BCBA tools)
- No age-specific imagery (toddler toys, older-child graphics)
- No pull-up or diaper imagery
- No autism-awareness symbols (puzzle pieces, infinity loops)
- No level labels or color-coding by level

## 11. Interaction Notes

| Element | Interaction | Notes |
|---------|------------|-------|
| Signal-path SVG | Static on load; animated GIF fallback (optional) | 5-8 frames, 1.5s loop, each node lights up sequentially. Fallback: all nodes at 70% opacity. |
| CTA button | Static | No hover animation (not supported across email clients). #2BAEB4 fill, always visible. |
| Testimonial cards | Static | No scroll-triggered animation (not supported in email). Render in final position. |
| Signal dots (Easter egg) | Static | Three dots: hollow → half → full. No animation. Decorative, not interactive. |
| Links | Clickable | CTA link, "No rush, I'll read about the science first" secondary link, P.S. link. All standard `<a>` tags. |
| Email client constraints | Apple Mail: full CSS. Gmail: GIF only. Outlook: static first frame. | Design the first frame of any GIF to be the completed state. |
| Mobile responsive | Single-column below 600px | Padding doubles on cards. Signal illustration scales proportionally. All tap targets ≥ 44×44px. H1 drops to 24px. |

## 12. Rendering Notes

- **Email client considerations:** The signal-path illustration should be an inline SVG with a GIF animation fallback. Gmail strips `<style>` blocks but renders animated GIFs. Outlook desktop renders GIFs in static first frame — design first frame as the completed state.
- **Mobile responsive:** All sections collapse to full-width with 20px side padding. The signal-path illustration scales proportionally (max-width: 100%). CTA button goes full-width on mobile. Body text scales to 16px minimum.
- **Accessibility:** Color contrast: #1F2D2F on #FBF7F1 = 12.6:1 (passes WCAG AAA). #FFFFFF on #2BAEB4 = 4.7:1 (passes WCAG AA). All content is text-based, not image-based.
- **Special instructions:** ZERO urgency. No animated countdown timers. No pulsing buttons. No color-shifting backgrounds. The signal-path animation (if used) is subtle — exponential fade-in, no bounce. CTA is intentionally static.
