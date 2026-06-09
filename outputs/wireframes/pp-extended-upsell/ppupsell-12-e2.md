# Wireframe: PP-Extended Upsell — E2 (Day 35) | Cross-Level

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | PP-Extended Upsell (Flow 12) |
| **Position** | E2 — Day 35 Post-Purchase |
| **Level** | Cross-Level (L1/L2/L3/GF — single copy, R1-R6 calibrated) |
| **Copy File** | `/root/projects/brightkidco/outputs/copy/pp-extended-upsell/ppupsell-12-e2.md` |
| **Strategy Map Entry** | `flows.pp-extended-upsell.emails["e2"]` |
| **Flow Signature** | value-demonstration · rotation reinforcement · social proof normalization · FAQ objection handling |
| **Level Calibration** | Cross-level: symptom language only (R1), 3-5 recognition anchors (R2), age ranges not fixed ages (R3), verbal+non-verbal inclusive (R4), timeline flexibility (R5), low-bar success metrics (R6). Permission-not-to-buy preserved. |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL/SOCIAL PROOF, MECHANISM/EDUCATION, PRODUCT SHOWCASE, CTA, GUARANTEE/TRUST, DECORATIVE/DIVIDER |
| **Total Estimated Height** | ~3,200px (mobile 420px width) |

## 2. Strategy Box

**Big Idea:** "Three parents, one shared next step" — at Day 35, the families who are seeing progress want to know: does adding more pairs actually help? This email normalizes the "add more pairs" decision through social proof, explains the rotation mechanism in neurological terms, and handles the top 3 objections inline. The FAQ section is the key differentiator from E1.

**Emotional Arc Position:** Position 2 of 3 in the Extended Upsell flow. This is the mid-flow reinforcement. The reader has already received E1 (D28) and may have upgraded. Now they need validation that they made the right choice, plus a path for those who didn't upgrade yet. The FAQ section addresses the unspoken: "I already bought something, why do I need more?"

**Component Selection Rationale:**
- HERO-17 (Social Proof Hero): The hook is social proof — "Three moms, three different kids, one common next step." This hero variant leads with crowd validation, not mechanism. Perfect for E2's "you're not alone in adding more pairs" message.
- LETTER-01 (Paragraph Stack): Long-form letter body — social proof bridge, mechanism, FAQ section, permission close, Lena sign-off. Dense copy requires paragraph stack treatment.
- SP-14 (Trust Badges Row): Trust badges after the testimonials — "60-Day Guarantee · Free Shipping · No Subscription · Lena Reads Replies." Compact row of trust signals, not stacked cards.
- EDU-8 (Mechanism Diagram): Rotation mechanism — visual diagram showing how more pairs = more signal exposure = faster neural wiring. Simpler than E1's diagram, focused on the neurology angle.
- ProductShowcaseFull: Bundle comparison cards — 1-pair→3+3, 3+3→5+5, 5+5→accessories. Match-based personalization blocks.
- CTA-4 (Gentle Invite): "Find my next pair count" — permission-based, educational, gentler than E1's CTA-5. Matches the "whatever you decide" tone.
- TRUST-2 (Guarantee Detail Cards): Expanded guarantee detail — "60 days to try, full refund if it doesn't work." Detail cards with expandable FAQ-style treatment, not just a badge.
- UTIL-05 (Signoff Card): Lena sign-off with role line — "Customer Support · Mom of two autistic sons." Dedicated card treatment for the sign-off, not inline text.

**Differentiation Note:** E2 is visually differentiated from E1 by:
1. Social proof hero (HERO-17) vs. mechanism tease hero (HERO-16)
2. FAQ section (unique to E2) — three objection-handling blocks
3. Trust badges row (SP-14) vs. stacked testimonials (SP-08) in E1
4. Gentle invite CTA (CTA-4) vs. product CTA (CTA-5) in E1
5. Guarantee detail cards (TRUST-2) vs. seal badge (TRUST-1) in E1
6. Lena sign-off in dedicated card (UTIL-05) vs. inline text in E1

## 3. Creative Box

**Color Palette:**
- Primary: `#2BAEB4` B.teal — CTAs, links, accent elements, hero eyebrow
- Secondary: `#5DD07A` B.green — Success indicators, mechanism section accent
- Accent: `#FBF7F1` Warm cream — Main email background, card backgrounds
- Text: `#1F2D2F` B.ink — Primary text, headings, borders
- Supporting backgrounds:
  - `#EDF7ED` Pale green — Testimonial section background
  - `#E8F6F4` Pale teal — Mechanism section background
  - `#F5F0EB` Warm linen — FAQ section background
  - `#FFFFFF` White — Card backgrounds, diagram bg
- Supporting text: `#4A6568` B.stone — Subheadings, body secondary
- Muted text: `#8A9B9D` B.muted — Footer, secondary info, tag text
- CTA button fill: `#5DD07A` B.green — Primary CTA background (differentiated from E1's teal)
- CTA text: `#FFFFFF` white — On dark backgrounds
- Dividers: `#D3D1C7` Light warm gray — Section rules
- Blockquote border: `#2BAEB4` B.teal — Left border accent
- FAQ accent: `#2BAEB4` B.teal — Question highlight

**Typography:**
- Heading: Questrial, 28px mobile / 36px desktop, Bold (700), line-height 1.15, letter-spacing -0.4px, color `#1F2D2F`
- Body: Questrial, 16px mobile / 17px desktop, Regular (400), line-height 1.6, color `#1F2D2F`
- Accent: Fraunces (serif), 16px italic, Regular (400), line-height 1.5, color `#4A6568` — for pull-quotes and emphasis
- Eyebrow: Questrial, 10.5px, Bold (700), letter-spacing 1.5px, text-transform uppercase, color `#2BAEB4`
- FAQ question: Questrial, 16px, Bold (700), color `#2BAEB4` — italicized
- FAQ answer: Questrial, 16px, Regular (400), line-height 1.6, color `#1F2D2F`
- CTA button: Questrial, 16px, Bold (700), letter-spacing 0.3px, color `#FFFFFF`
- Footer: Questrial, 11px, Regular (400), color `#8A9B9D`

**Border Radius:** Cards: 16px, Buttons: 6px, Images: 0px (FramedImage uses ink-border style), Small (badges): 999px pill

**Shadow:** Primary: `6px 6px 0 #1F2D2F` (ink block shadow), Secondary: `3px 3px 0 #1F2D2F` (sub-cards)

**Spacing:** Section gap: 30px, H-padding: 22px (mobile) / 30px (desktop), Card padding: 22px, Element gap: 14px

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────────┐
│                    420px width                        │
├──────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────────────┐ │
│ │  [LOGO]  BrightKidCo                            │ │
│ │          Header: bg #FBF7F1, centered logo       │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  HERO-17: Social Proof Hero                      │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  Eyebrow: [WHAT PARENTS DISCOVER]                │ │
│ │  H1: "What parents discover after week 4"        │ │
│ │  Sub: "Three moms, three different kids, one     │ │
│ │       common next step."                         │ │
│ │                                                  │ │
│ │  ┌─ ImgFrame ──────────────────────────────────┐ │ │
│ │  │  Hero lifestyle image                       │ │ │
│ │  │  training-pant-fox-woodland-white.jpg        │ │ │
│ │  │  600×400px (2×: 1200×800)                   │ │ │
│ │  └─────────────────────────────────────────────┘ │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Divider: 1px #D3D1C7 ─────────────────────────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  LETTER-01: Social Proof Bridge (Paragraph Stack)│ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  H2: "Whether your child is 3 or 10, verbal or  │ │
│ │       non-verbal... if you're seeing any sign    │ │
│ │       of awareness, you're past the hardest      │ │
│ │       part."                                     │ │
│ │                                                  │ │
│ │  Body: "The question now isn't 'will it work?'   │ │
│ │  It's 'do I have enough pairs to make it         │ │
│ │  consistent?'"                                   │ │
│ │                                                  │ │
│ │  ┌─ Blockquote 1 ───────────────────────────┐   │ │
│ │  │ "He went from 'almost trained' to 'mostly  │   │ │
│ │  │  there' in about 4 weeks. But with only 2  │   │ │
│ │  │  pairs, we were doing laundry every night.  │   │ │
│ │  │  The 3+3 changed everything."               │   │ │
│ │  │  — L1 mom, verbal 4-year-old                │   │ │
│ │  │  left-border: 3px #5DD07A                   │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  ┌─ Blockquote 2 ───────────────────────────┐   │ │
│ │  │ "We saw the first pause in week 3. By      │   │ │
│ │  │  week 5, she was initiating once a week.    │   │ │
│ │  │  The BCBA said the consistency from having  │   │ │
│ │  │  enough pairs made the difference."         │   │ │
│ │  │  — L2 mom, sensory 6-year-old               │   │ │
│ │  │  left-border: 3px #2BAEB4                   │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  ┌─ Blockquote 3 ───────────────────────────┐   │ │
│ │  │ "He's not trained. But he's feeling         │   │ │
│ │  │  something for the first time in 8 years.   │   │ │
│ │  │  That's enough for now. We added more pairs  │   │ │
│ │  │  so he can wear them longer without me       │   │ │
│ │  │  rushing to wash."                           │   │ │
│ │  │  — L3 mom, non-verbal 8-year-old            │   │ │
│ │  │  left-border: 3px #8A9B9D                   │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  Bridge: "If any of those sound familiar...     │ │
│ │  the body-signal learning works best when the   │ │
│ │  underwear is available every single day."      │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Divider: 1px #D3D1C7 ─────────────────────────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  EDU-8: Mechanism Diagram — Rotation = Signal   │ │
│ │  bg: #E8F6F4 pale teal                           │ │
│ │                                                  │ │
│ │  H2: "Here's why rotation matters,              │ │
│ │       neurologically"                            │ │
│ │                                                  │ │
│ │  Body: "The body signal doesn't wire itself in   │ │
│ │  a week. It takes repeated exposure, the 30-60   │ │
│ │  second 'uh-oh' sensation, over and over..."     │ │
│ │                                                  │ │
│ │  ┌─ Signal Diagram ────────────────────────┐    │ │
│ │  │                                           │    │ │
│ │  │  1 PAIR:   [Wear] → [Wash] → [Wear]     │    │ │
│ │  │            ════════ ✗ GAP ══════════     │    │ │
│ │  │            Signal breaks every wash       │    │ │
│ │  │                                           │    │ │
│ │  │  6 PAIRS:  [W] [W] [W] [W] [W] [W]      │    │ │
│ │  │            ══════════════════════════     │    │ │
│ │  │            Signal every day, no gaps      │    │ │
│ │  │                                           │    │ │
│ │  │  Pull-ups wick signal away. One pair in  │    │ │
│ │  │  the wash = half a day without practice.  │    │ │
│ │  │  More pairs = more consistent signal      │    │ │
│ │  │  exposure = faster neural wiring.         │    │ │
│ │  │                                           │    │ │
│ │  │  bg: #FFFFFF, border: 1px #D3D1C7        │    │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  Timeline note: "Some kids show first signals   │ │
│ │  in 2 weeks. Others need 8 weeks. Both normal." │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Gradient Band: #E8F6F4 → #EDF7ED ─────────────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  ProductShowcaseFull: Bundle Comparison          │ │
│ │  bg: #EDF7ED pale green                          │ │
│ │                                                  │ │
│ │  H2: "What to add based on where you started"    │ │
│ │                                                  │ │
│ │  ┌─ Product Card: 1-Pair → 3+3 ─────────────┐  │ │
│ │  │  "If you started with 1 pair → The 3+3    │  │ │
│ │  │   Bundle gives you 6 pairs, 3 in rotation, │  │ │
│ │  │   3 in the wash."                          │  │ │
│ │  │  Price: $79.99 · FREE SHIPPING             │  │ │
│ │  │  bg: #FFFFFF, shadow: 6px 6px 0 #1F2D2F  │  │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  ┌─ Product Card: 3+3 → 5+5 + Wash Bag ───┐   │ │
│ │  │  "If you started with 3+3 → The 5+5      │   │ │
│ │  │   Bundle adds more rotation plus the Wash │   │ │
│ │  │   Bag, a waterproof travel pouch."        │   │ │
│ │  │  Price: $119.99 · INCLUDES WASH BAG       │   │ │
│ │  │  bg: #FFFFFF, shadow: 6px 6px 0 #1F2D2F  │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  ┌─ Product Card: 5+5 → Accessories ───────┐   │ │
│ │  │  "If you started with 5+5 → Extra pairs   │   │ │
│ │  │   and accessories. Magic Targets make      │   │ │
│ │  │   bathroom visits engaging."               │   │ │
│ │  │  bg: #FFFFFF, shadow: 6px 6px 0 #1F2D2F  │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Gradient Band: #EDF7ED → #FBF7F1 ─────────────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  TRUST-2: Guarantee Detail Cards                 │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  ┌─ Guarantee Card ────────────────────────┐    │ │
│ │  │  [60-DAY GUARANTEE]                       │    │ │
│ │  │  "60 days to try, full refund if it       │    │ │
│ │  │   doesn't work for your child.             │    │ │
│ │  │   Your judgment."                          │    │ │
│ │  │  bg: #FFFFFF, border: 1px #2BAEB4        │    │ │
│ │  │  shadow: 3px 3px 0 #1F2D2F               │    │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  Micro-copy: "60-day guarantee on every bundle. │ │
│ │  Add alongside your current routine. No          │ │
│ │  replacement of anything. Just an addition."     │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  CTA-4: Gentle Invite                            │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  [  Find my next pair count → ]                   │ │
│ │  bg: #5DD07A B.green, text: #FFFFFF              │ │
│ │  border-radius: 6px                               │ │
│ │                                                  │ │
│ │  Micro-copy: "That's $13.33 per pair with the   │ │
│ │  bundle — less than half the single-pair price." │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Divider: 1px #D3D1C7 ─────────────────────────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  FAQ Section: Top 3 Objections                   │ │
│ │  bg: #F5F0EB warm linen                          │ │
│ │                                                  │ │
│ │  H2: "A few things parents ask at this point:"   │ │
│ │                                                  │ │
│ │  ┌─ FAQ 1 ──────────────────────────────────┐   │ │
│ │  │  Q: "What if the 1 pair worked but I'm    │   │ │
│ │  │      not sure about committing to more?"  │   │ │
│ │  │  A: "That's fair. The 60-day guarantee     │   │ │
│ │  │      covers the upgrade too. If the 3+3   │   │ │
│ │  │      doesn't improve consistency, full     │   │ │
│ │  │      refund on the whole bundle."          │   │ │
│ │  │  Q color: #2BAEB4 italic, A: #1F2D2F      │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  ┌─ FAQ 2 ──────────────────────────────────┐   │ │
│ │  │  Q: "My child still resists wearing them  │   │ │
│ │  │      sometimes."                          │   │ │
│ │  │  A: "Some kids take to the fabric          │   │ │
│ │  │      immediately. Others need 30 minutes   │   │ │
│ │  │      of wear time, building up. That's     │   │ │
│ │  │      normal. More pairs mean less pressure,│   │ │
│ │  │      you can wash and rotate without       │   │ │
│ │  │      rushing."                             │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  ┌─ FAQ 3 ──────────────────────────────────┐   │ │
│ │  │  Q: "Will more pairs actually speed        │   │ │
│ │  │      things up?"                           │   │ │
│ │  │  A: "The signal fires when the underwear   │   │ │
│ │  │      is worn. More worn pairs = more       │   │ │
│ │  │      firing opportunities. It's not magic. │   │ │
│ │  │      It's repetition. The nervous system   │   │ │
│ │  │      learns through exposure, not          │   │ │
│ │  │      intensity."                           │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Divider: 1px #D3D1C7 ─────────────────────────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  Permission Close + Lena Sign-Off (UTIL-05)     │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  Body: "Whatever you decide, you're already      │ │
│ │  doing what matters. You noticed something       │ │
│ │  shifting. You're considering the next step.     │ │
│ │  That's enough."                                 │ │
│ │                                                  │ │
│ │  ┌─ Signoff Card ──────────────────────────┐    │ │
│ │  │  "I have two autistic sons. One trained   │    │ │
│ │  │   at 6. The other at almost 8. I know     │    │ │
│ │  │   what it's like to wonder if you're      │    │ │
│ │  │   doing enough. You are."                 │    │ │
│ │  │                                           │    │ │
│ │  │  With care,                               │    │ │
│ │  │  Lena                                     │    │ │
│ │  │  Customer Support · Mom of two autistic   │    │ │
│ │  │  sons                                     │    │ │
│ │  │  bg: #FFFFFF, border: 1px #D3D1C7        │    │ │
│ │  │  shadow: 3px 3px 0 #1F2D2F               │    │ │
│ │  │  name: Fraunces italic #4A6568            │    │ │
│ │  │  role: Questrial 11px #8A9B9D             │    │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  Next time: "Your final check-in — and what     │ │
│ │  happens after Day 42."                          │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  FOOTER                                          │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  BrightKidCo | [Unsubscribe] | [Manage Prefs]   │ │
│ │  Questrial 11px, color #8A9B9D                   │ │
│ └──────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

## 5. Copy Blocks (Verbatim)

| Block | Source Section | Verbatim Copy |
|-------|---------------|---------------|
| **Subject Line** | Primary | "If the 3+3 is working → more pairs add rotation" |
| **Subject Line** | Alt 1 | "What parents discover after week 4" |
| **Subject Line** | Alt 2 | "The one thing most parents add by week 5" |
| **Preheader** | Primary | "Three moms, three different kids, one common next step" |
| **Preheader** | Alt 1 | "Whether you started with 1 pair or 6, here's what comes next" |
| **Preheader** | Alt 2 | "Some kids 3. Others 10. Both need more than 1 pair." |
| **Hook** | Body | "Whether your child is 3 or 10, verbal or non-verbal, a few weeks into this or years into trying, if you're seeing any sign of awareness, you're past the hardest part." |
| **Bridge** | Body | "The question now isn't 'will it work?' It's 'do I have enough pairs to make it consistent?'" |
| **Testimonial 1** | Body | "He went from 'almost trained' to 'mostly there' in about 4 weeks. But with only 2 pairs, we were doing laundry every night. The 3+3 changed everything." — L1 mom, verbal 4-year-old |
| **Testimonial 2** | Body | "We saw the first pause in week 3. By week 5, she was initiating once a week. The BCBA said the consistency from having enough pairs in rotation made the difference." — L2 mom, sensory 6-year-old |
| **Testimonial 3** | Body | "He's not trained. But he's feeling something for the first time in 8 years. That's enough for now. We added more pairs so he can wear them longer without me rushing to wash." — L3 mom, non-verbal 8-year-old |
| **Social Proof Bridge** | Body | "If any of those sound familiar, here's what they all share: the body-signal learning works best when the underwear is available every single day. Not washed overnight. Not 'saved for later.' Worn, consistently, day after day." |
| **Mechanism** | Body | "The body signal doesn't wire itself in a week. It takes repeated exposure, the 30-60 second 'uh-oh' sensation, over and over, for the brain to learn: this feeling means I need the bathroom." |
| **Mechanism** | Body | "Pull-ups wick the signal away. One pair in the wash means half a day without practice. The math is simple: more pairs = more consistent signal exposure = faster neural wiring." |
| **Mechanism** | Timeline | "Some kids show first signals in 2 weeks. Others need 8 weeks. Both are normal. The common thread: the underwear needs to be there, every day, for the learning to stick." |
| **Offer** | 1-Pair | "If you started with 1 pair → The 3+3 Bundle gives you 6 pairs, 3 in rotation, 3 in the wash. Enough to never miss a day. Most parents tell us 1 pair showed them it works. 6 pairs made it stick." |
| **Offer** | 3+3 | "If you started with 3+3 → The 5+5 Bundle adds more rotation plus the Wash Bag, a waterproof travel pouch for the diaper bag, school, grandma's house. Because progress doesn't pause when you leave the house." |
| **Offer** | 5+5 | "If you started with 5+5 → Extra pairs and accessories keep the momentum going. The Magic Targets make bathroom visits engaging without pressure, a visual cue that turns aim into a game, for kids who respond to structure." |
| **Guarantee** | Body | "60-Day Guarantee, 60 days to try, full refund if it doesn't work for your child. Your judgment." |
| **CTA** | Primary | "Find my next pair count" |
| **CTA** | Micro-copy | "That's $13.33 per pair with the bundle — less than half the single-pair price." |
| **FAQ 1** | Body | Q: "What if the 1 pair worked but I'm not sure about committing to more?" A: "That's fair. The 60-day guarantee covers the upgrade too. If the 3+3 doesn't improve consistency, full refund on the whole bundle." |
| **FAQ 2** | Body | Q: "My child still resists wearing them sometimes." A: "Some kids take to the fabric immediately. Others need 30 minutes of wear time, building up. That's normal. More pairs mean less pressure, you can wash and rotate without rushing." |
| **FAQ 3** | Body | Q: "Will more pairs actually speed things up?" A: "The signal fires when the underwear is worn. More worn pairs = more firing opportunities. It's not magic. It's repetition. The nervous system learns through exposure, not intensity." |
| **Permission Close** | Body | "Whatever you decide, you're already doing what matters. You noticed something shifting. You're considering the next step. That's enough." |
| **Lena Sign-Off** | LONG | "I have two autistic sons. One trained at 6. The other at almost 8. I know what it's like to wonder if you're doing enough. You are. With care, Lena, Customer Support · Mom of two autistic sons" |

## 6. Component Briefs

| Component | Category | Variant | Purpose | Key Specs |
|-----------|----------|---------|---------|-----------|
| **HERO-17** | HERO | Social Proof Hero | Lead with social proof — "three moms, three different kids." Hook with crowd validation, not mechanism. | bg: #FBF7F1, eyebrow: "WHAT PARENTS DISCOVER", H1: subject line, sub: preheader, img-frame: lifestyle photo 600×400px |
| **LETTER-01** | TEXT/LETTER | Paragraph Stack | Long-form body — social proof bridge, three-family pattern, mechanism, offer blocks. | bg: #FBF7F1, padding: 22px, body: Questrial 16px/1.6, blockquote: left-border 3px per level |
| **SP-14** | TESTIMONIAL | Trust Badges Row | Compact trust signal row after testimonials — guarantee, shipping, no subscription, Lena reads replies. | Row of 4 badges, each: icon + text, bg: transparent, text: #8A9B9D, icon: #2BAEB4 |
| **EDU-8** | MECHANISM | Mechanism Diagram | Visual rotation diagram — 1 pair wash gap vs 6 pairs no gap. Neurology angle: signal exposure = neural wiring. | bg: #E8F6F4, diagram bg: #FFFFFF, border: 1px #D3D1C7, simple 2-column comparison |
| **ProductShowcaseFull** | PRODUCT | Bundle Comparison | Three purchase-path cards — 1-pair→3+3, 3+3→5+5, 5+5→accessories. Match-based self-identification. | bg: #EDF7ED, card bg: #FFFFFF, shadow: 6px 6px 0 #1F2D2F, each card: path description + price + feature |
| **CTA-4** | CTA | Gentle Invite | Permission-based CTA — "Find my next pair count." Educational framing, not "Buy Now." | bg: #5DD07A B.green, text: #FFFFFF, border-radius: 6px, micro-copy: #4A6568 14px |
| **TRUST-2** | GUARANTEE | Guarantee Detail Cards | Expanded guarantee treatment — detail card with explanation, not just a badge. | bg: #FFFFFF, border: 1px #2BAEB4, shadow: 3px 3px 0 #1F2D2F, icon + headline + body text |
| **UTIL-05** | DECORATIVE | Signoff Card | Dedicated Lena sign-off card — personal story + role line in bordered card. | bg: #FFFFFF, border: 1px #D3D1C7, shadow: 3px 3px 0 #1F2D2F, name: Fraunces italic #4A6568, role: Questrial 11px #8A9B9D |

## 7. Image Briefs

| Slot | Image Path | Dimensions | Purpose | Treatment |
|------|-----------|------------|---------|-----------|
| **Hero lifestyle** | `/root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-fox-woodland-white.jpg` | 600×400px (2×: 1200×800) | Flat-lay product shot — fox woodland pattern, relatable parent moment | FramedImage: ink-border style, 0px border-radius, shadow: 6px 6px 0 #1F2D2F |
| **Product card** | `/root/projects/brightkidco/raw/product-photos/accessories/cloth-pads-watermelon-astronaut-cat.png` | 300×300px (2×: 600×600) | Accessory product — cloth pads, watermelon/astronaut/cat patterns | FramedImage: ink-border style, bg: #FFFFFF, centered |
| **Mechanism diagram** | (Generated SVG or annotated diagram) | 300×150px | Rotation comparison: 1 pair wash gap vs 6 pairs no gap | Custom illustration, #2BAEB4 / #5DD07A accents, #1F2D2F text |

## 8. Style Notes

| Token | Hex | Usage |
|-------|-----|-------|
| **B.teal** | `#2BAEB4` | Links, eyebrow text, blockquote left-border (L2), guarantee card border, FAQ question color |
| **B.green** | `#5DD07A` | Primary CTA fill, testimonial card 1 left-border (verbal/wins), mechanism accent |
| **B.ink** | `#1F2D2F` | Primary text, headings, card shadows, product card shadow |
| **B.stone** | `#4A6568` | Subheadings, body secondary text, micro-copy, Fraunces accent text |
| **Warm cream** | `#FBF7F1` | Main email background, hero bg, letter bg, footer bg, CTA section bg |
| **White** | `#FFFFFF` | Card backgrounds, CTA text, diagram bg, product card bg, signoff card bg |
| **B.muted** | `#8A9B9D` | Footer text, L3 testimonial left-border, role line text, trust badge text |
| **Pale teal** | `#E8F6F4` | Mechanism section background |
| **Warm linen** | `#F5F0EB` | FAQ section background |
| **Pale green** | `#EDF7ED` | Product showcase section background |
| **Light warm gray** | `#D3D1C7` | Section divider rules, signoff card border |

## 9. Technique Specs

| Technique | Specification |
|-----------|--------------|
| **Card shadow** | `6px 6px 0 #1F2D2F` — ink block shadow on product cards |
| **Sub-card shadow** | `3px 3px 0 #1F2D2F` — on trust cards, signoff card |
| **Card border-radius** | 16px on all cards |
| **Button border-radius** | 6px on CTA button |
| **Badge border-radius** | 999px (pill) on trust badges |
| **Blockquote left-border** | 3px solid per level: Card 1: `#5DD07A`, Card 2: `#2BAEB4`, Card 3: `#8A9B9D` |
| **Section divider** | 1px `#D3D1C7` horizontal rule, full width |
| **Gradient band** | `#E8F6F4` → `#EDF7ED`, 8px height, full width |
| **Image framing** | Ink-border style: no border-radius, 6px shadow, `#1F2D2F` border |
| **CTA button** | bg `#5DD07A`, text `#FFFFFF`, padding 16px 24px, border-radius 6px, Questrial 16px Bold |
| **Typography heading** | Questrial 28px/36px, Bold 700, line-height 1.15, letter-spacing -0.4px, `#1F2D2F` |
| **Typography body** | Questrial 16px/17px, Regular 400, line-height 1.6, `#1F2D2F` |
| **Typography accent** | Fraunces 16px italic, Regular 400, line-height 1.5, `#4A6568` |
| **Typography eyebrow** | Questrial 10.5px, Bold 700, letter-spacing 1.5px, uppercase, `#2BAEB4` |
| **Typography FAQ question** | Questrial 16px, Bold 700, italic, `#2BAEB4` |
| **Typography FAQ answer** | Questrial 16px, Regular 400, line-height 1.6, `#1F2D2F` |
| **Section padding** | 22px horizontal (mobile) / 30px (desktop), 30px vertical gap between sections |
| **Mobile width** | 420px fixed |

## 10. Level Markers

| Level | E2-Specific Differences |
|-------|------------------------|
| **L1 (Sarah)** | Verbal child, "almost trained" → "mostly there." 1pr→3+3 or 3+3→5+5. CTA aggression: Medium-Low. Testimonial references verbal milestone. |
| **L2 (Lisa)** | BCBA context explicit in testimonial. Method-cycling history implied. CTA aggression: Low. Testimonial references BCBA recommendation. |
| **L3 (Maria)** | Non-verbal 8-year-old. "He's not trained. But he's feeling something." Permission-first. CTA aggression: Very Low. No push beyond 3+3. |
| **GF** | Cross-level "Whether...Or...If..." opening frame. Three-testimonial structure lets self-identification without labels. CTA aggression: Medium-Low. |

## 11. Interaction Notes

| Element | Interaction | Notes |
|---------|------------|-------|
| **Primary CTA** | Button click → product bundle page | Full-width button, tap target ≥44px height |
| **FAQ accordions** | Static (future: expandable) | Placeholder for future interactive FAQ with expand/collapse |
| **Testimonial cards** | Static, no interaction | Visual distinction via left-border color coding |
| **Product cards** | Static, no interaction (future: clickable) | Placeholder for future Klaviyo conditional content blocks |
| **Trust badges row** | Static, no interaction | Compact visual trust signals |
| **Signoff card** | Static, no interaction | Dedicated card treatment for Lena sign-off |
| **"Next time" teaser** | Static text | Sets expectation for E3 (Day 60) |
| **Permission close** | Static text | "Whatever you decide, you're already doing what matters" — emotional anchor |
