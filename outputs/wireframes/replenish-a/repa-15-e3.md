# Wireframe: Replenish A — E3 | Cross-Level (L1/L2/L3/GF)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Replenish A (Flow 15) |
| **Position** | E3 — Day 30 post-purchase |
| **Level** | Cross-Level — L1 (Sarah), L2 (Lisa), L3 (Maria), General Fallback |
| **Copy File** | /root/projects/brightkidco/outputs/copy/replenish-a/repa-15-e3.md |
| **Strategy Map Entry** | flows.replenish-a.emails.e3 |
| **Flow Signature** | replenishment-reminder, respectful re-engagement, practical |
| **Level Calibration** | Cross-level, Permission frame subject, Medium sign-off variant, Dual CTA, Exit Close |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM, PRODUCT, CTA, GUARANTEE, DECORATIVE |
| **Total Estimated Height** | ~3,600px (desktop) / ~3,900px (mobile) |

---

## 2. Strategy Box

**Big Idea:** "Consistency is the missing variable, the 3+3 rotation closes the gap between wearing and learning." The core insight: 1 pair works as a trial but creates a learning interruption every time it hits the laundry. The 3+3 isn't just "more pairs", it's an unbroken feedback loop. The creative approach frames the 3+3 as the mechanism partner to the Body-Signal Learning Layer, not as a bulk discount.

**Contraption (Design Mechanism):** Animated SVG rotation visual — 3 pairs cycling: Pair 1 (worn), Pair 2 (in drawer), Pair 3 (in wash) → smooth cycle. Keeps the "rotation" concept tangible. Implementation: 3-frame looping GIF (~2 second cycle). First frame: all 3 pairs visible. Second: Pair 1 fades slightly (being worn). Third: Pair 2 moves into active spot. Smooth transitions, no flash/strobe. Max 150KB file size. Static fallback: a simple before/after comparison showing 1-pair cycle vs. 3+3 rotation.

**Emotional Arc Position:** Position 3 of 3 in Replenish A flow — The final check-in. E3 is the "last call" on introductory bundle pricing. It's the most direct of the three emails, but still permission-framed. The parent has had 30 days to observe. The email names the 1-pair limitation one final time and offers the bundle as the closing argument. The emotional register is practical confidence — "you've seen enough to know."

**Component Selection Rationale:**
- HERO-10 (Bold Declaration): Stronger than E1's Mirror Moment or E2's Whisper Tone. Signals the finality of the flow. The 30-day milestone deserves a bolder frame.
- LETTER-03 (Letter + Pull-Quote): Personal letter with embedded pull-quote for the mechanism explanation. The pull-quote ("One pair isn't enough for consistent learning") is Lena speaking from personal experience.
- SP-14 (Trust Badges Row): Trust elements in a horizontal row — 60-day guarantee, free shipping, per-pair price. Consolidated trust at the decision point.
- EDU-8 (Mechanism Diagram): Visual mechanism explanation — rotation = unbroken feedback loop. The diagram shows 1-pair interruption vs. 3+3 continuity.
- ProductShowcaseFull: Full product showcase — the 3+3 Bundle is the hero product now. Larger image, more detail.
- CTA-12 (Exit Close): The final CTA. Permission-framed but clear. "Get the 3+3 Bundle" primary, "Keep using your 1 pair" secondary. The exit close respects the parent's choice.
- TRUST-2 (Guarantee Detail Cards): Expanded guarantee — 60-day money-back, free shipping, no questions asked. More detail than E1/E2's condensed seal.
- DESDEEP-3 (Card Cascade): Decorative element — cards cascading subtly in the background, reinforcing the "multiple pairs" concept.

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — CTA button fill, accent highlights, link text
- Secondary: #5DD07A (B.green) — Success indicators, savings badge, trust badge border
- Background: #FBF7F1 (B.cream) — Overall email background
- Text: #1F2D2F (B.ink) — Primary body text, headings, borders
- Page Background: #FFFFFF (B.paper) — Email canvas
- Secondary Text: #4A6568 (B.soft) — Body copy, secondary paragraphs
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer, citations
- CTA Text on Dark: #FFFFFF — CTA button text
- Cream Card: #FBF7F1 — Testimonial card backgrounds, Offer Box tint
- Divider: #E8E2DA — Section dividers, borders
- Savings Badge: #5DD07A (B.green) — "62% savings" callout background

**Typography:**
- Heading: Questrial, 28px desktop / 22px mobile, weight 700, line-height 1.15, letter-spacing -0.02em
- Body: Questrial, 17px desktop / 16px mobile, weight 400, line-height 1.6, color B.soft
- Accent: Fraunces, 20px desktop / 18px mobile, weight 400 italic, line-height 1.4, color B.ink (for pull-quotes and testimonial quotes)
- Eyebrow: Questrial, 10.5px, weight 700, letter-spacing 2px, text-transform uppercase, color B.teal
- CTA button: Questrial, 18px, weight 700, white #FFFFFF
- Testimonial attribution: Questrial, 11px, weight 700, small caps, letter-spacing 0.05em, B.muted
- Savings badge: Questrial, 13px, weight 700, B.green on cream bg

**Border Radius:** Cards: 16px, Buttons: 999px (pill for primary CTA), Images: 16px, Small: 12px
**Shadow:** Primary: 4px 4px 0 B.ink (card shadow)
**Spacing:** Section gap: 44px, H-padding: 30px desktop / 20px mobile, Card padding: 24/22px, Element gap: 16px, CTA spacing: 24px above, 20px below

---

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────────────┐ │
│ │                  [PREHEADER BAR]                     │ │ 36px
│ │  Your 1 pair has been working for 30 days. If      │ │
│ │  you've been thinking about more, here's the       │ │
│ │  bundle pricing before it shifts.                  │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              [HEADER — Logo + From Name]             │ │ 80px
│ │         BrightKidCo · Lena from BrightKidCo         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │        HERO-10: Bold Declaration                     │ │ ~320px
│ │                                                      │ │
│ │  [Eyebrow: "DAY 30"]                                │ │
│ │  [Questrial 10.5px, B.teal, uppercase, 2px spacing] │ │
│ │                                                      │ │
│ │  ┌────────────────────────────────────────────────┐  │ │
│ │  │  [IMG: toddler-napping-watermelon-pink-shorts] │  │ │
│ │  │          Lifestyle hero image                  │  │ │
│ │  │          420 x 220px, rounded 16px             │  │ │
│ │  │          Black border + drop-shadow ink block  │  │ │
│ │  └────────────────────────────────────────────────┘  │ │
│ │                                                      │ │
│ │  "Last call: 3+3 pricing"                          │ │
│ │   [H1 — Questrial 28px/22px, B.ink, -0.02em]       │ │
│ │                                                      │ │
│ │  "Your 1 pair has been working for 30 days. If      │ │
│ │   you've been thinking about more, here's the       │ │
│ │   bundle pricing before it shifts."                 │ │
│ │   [Subhead — Questrial 17px, B.soft, 1.5 line-h]   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── DESDEEP-3: CARD CASCADE ──────────────────────┐ │ 8px
│ │  [Subtle cascading card shapes in background]        │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-03: Letter + Pull-Quote — Hook          │ │ ~500px
│ │                                                      │ │
│ │  [HOOK — 3 paragraphs, B.soft text, 1.6 line-height]│ │
│ │                                                      │ │
│ │  "Thirty days with the Body-Signal Learning Layer.   │ │
│ │   However that's gone for your child, whether it's  │ │
│ │   been a quiet 30 days of slow noticing, or 30 days │ │
│ │   with a couple of tiny moments that felt like the  │ │
│ │   first real thing, you've had the chance to see     │ │
│ │   what happens when a nervous system gets feedback   │ │
│ │   it's been missing."                                │ │
│ │                                                      │ │
│ │  "Whether your child is 3 and just starting to show │ │
│ │   signs of awareness, or 8 and you've been at this  │ │
│ │   long enough to know what 'trying' really costs, if │ │
│ │   they're wearing that 1 pair, you've seen          │ │
│ │   something."                                        │ │
│ │                                                      │ │
│ │  "Maybe it was a pause. A look down. A pull at the  │ │
│ │   waistband they've never done before. Or maybe     │ │
│ │   nothing visible yet, and that's normal too."      │ │
│ │   [bold reading path: "you've seen something"]      │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-03: Validation — The 1-Pair Reality     │ │ ~500px
│ │                                                      │ │
│ │  "Here's what I hear from parents at the 30-day     │ │
│ │   mark, and I've said this one myself:"              │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [PULL-QUOTE — Cream Card #FBF7F1]            │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.teal        │   │ │
│ │  │  16px radius, padding 24px                    │   │ │
│ │  │                                              │   │ │
│ │  │  "One pair isn't enough for consistent        │   │ │
│ │  │   learning."                                  │   │ │
│ │  │  [Fraunces 22px, italic, B.ink]              │   │ │
│ │  │  — Lena                                       │   │ │
│ │  │  [Questrial 13px, B.muted]                    │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "I bought 1 pair first too. Both my sons went      │ │
│ │   through this. One pair feels safe, it's a test,   │ │
│ │   a toe-dip. Smart move. But here's what happens:   │ │
│ │   the pair gets worn, gets washed, goes in the      │ │
│ │   drawer. By the time it's clean and dry again, the │ │
│ │   rhythm's broken."                                  │ │
│ │                                                      │ │
│ │  "If your child is starting to show signals, even   │ │
│ │   small ones, consistency is what builds the        │ │
│ │   pathway. The 3+3 Bundle gives you 6 pairs in     │ │
│ │   rotation. Always a clean pair. Always the         │ │
│ │   feedback loop running."                            │ │
│ │   [bold reading path: "consistency is what builds   │ │
│ │    the pathway"]                                    │ │
│ │                                                      │ │
│ │  "If your child hasn't shown signals yet, that's    │ │
│ │   okay too. Every nervous system moves at its own   │ │
│ │   pace. Some kids take 2 weeks. Others take 8. Both │ │
│ │   are normal. The 3+3 means you can keep the input  │ │
│ │   steady without the laundry stress."               │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       EDU-8: Mechanism Diagram                       │ │ ~350px
│ │                                                      │ │
│ │  [Eyebrow: "WHY ROTATION MATTERS"]                   │ │
│ │  [Questrial 10.5px, B.teal, uppercase]              │ │
│ │                                                      │ │
│ │  "The Body-Signal Learning Layer works through       │ │
│ │   sustained, repeated feedback. Every time the       │ │
│ │   underwear creates that gentle sensation, the brain│ │
│ │   gets another data point: something happened. I    │ │
│ │   felt it."                                          │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │         [ROTATION DIAGRAM — SVG/GIF]          │   │ │
│ │  │                                              │   │ │
│ │  │  1-Pair:  [WORN] → [WASH] → [DRY] → [WAIT]  │   │ │
│ │  │           ▓▓▓▓░░░░▓▓▓▓░░░░  (intermittent)   │   │ │
│ │  │                                              │   │ │
│ │  │  3+3:     [WORN] [READY] [WASH] [READY]     │   │ │
│ │  │           ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  (continuous)    │   │ │
│ │  │                                              │   │ │
│ │  │  [Signal exposure comparison]                 │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "One pair interrupts that data stream every time    │ │
│ │   it's in the wash. The 3+3 rotation keeps the      │ │
│ │   signal arriving daily, not every other day, not   │ │
│ │   'whenever the pair is dry.'"                      │ │
│ │                                                      │ │
│ │  "For kids 3 to 10+, verbal or non-verbal, diagnosed│ │
│ │   or still figuring it out, the mechanism is the    │ │
│ │   same. The brain learns by repetition. Disruption  │ │
│ │   slows the learning curve."                        │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [PARENT QUOTE — Cream Card #FBF7F1]         │   │ │
│ │  │  "He went from wondering to walking toward    │   │ │
│ │  │   the bathroom. It took 5 weeks of consistent │   │ │
│ │  │   wear. If we only had 1 pair, we'd have     │   │ │
│ │  │   lost half those wearing days to laundry."   │   │ │
│ │  │  — BrightKidCo parent, internal review        │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       SP-14: Trust Badges Row — Three-Family         │ │ ~500px
│ │                                                      │ │
│ │  "Three parents who each bought 1 pair first. Three  │ │
│ │   different kids. One shared experience thirty days  │ │
│ │   in:"                                               │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 1 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.teal        │   │ │
│ │  │  16px radius, padding 20px                    │   │ │
│ │  │                                              │   │ │
│ │  │  "He said 'wet' for the first time ever on   │   │ │
│ │  │   Week 3. It was after wearing them every    │   │ │
│ │  │   day. I don't think we'd have gotten there  │   │ │
│ │  │   without daily use."                         │   │ │
│ │  │  [Fraunces 17px, italic, B.ink]              │   │ │
│ │  │                                              │   │ │
│ │  │  Parent of a verbal 4-year-old                │   │ │
│ │  │  [Questrial 11px, B.muted, small caps]       │   │ │
│ │  │  Floor label: "VERBAL · AGE 4"               │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 2 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.green       │   │ │
│ │  │                                              │   │ │
│ │  │  "We're not trained yet. But he paused. He   │   │ │
│ │  │   looked down. That's never happened before  │   │ │
│ │  │   in 4 years of tries. Week 4 with the       │   │ │
│ │  │   underwear. One pair was in the wash half   │   │ │
│ │  │   the time."                                  │   │ │
│ │  │                                              │   │ │
│ │  │  Parent of a 6-year-old with sensory         │   │ │
│ │  │  differences                                  │   │ │
│ │  │  Floor label: "SENSORY · AGE 6"              │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 3 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.muted       │   │ │
│ │  │                                              │   │ │
│ │  │  "He doesn't notice wetness. He never has.   │   │ │
│ │  │   But after a month of consistent wear, he   │   │ │
│ │  │   walks differently when he has an accident. │   │ │
│ │  │   That's new. I'll take it."                 │   │ │
│ │  │                                              │   │ │
│ │  │  Parent of a non-verbal 9-year-old           │   │ │
│ │  │  Floor label: "NON-VERBAL · AGE 9"           │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "If any of these sound like your child, maybe not  │ │
│ │   fully there yet, maybe different progress, maybe  │ │
│ │   just starting, you know what 30 more days of     │ │
│ │   consistent wear could look like."                 │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       ProductShowcaseFull — Bundle Offer             │ │ ~350px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  ┌────────────────────┐  ┌──────────────────┐│   │ │
│ │  │  │                    │  │ "THE 3+3 BUNDLE" ││   │ │
│ │  │  │  [PRODUCT IMAGE]   │  │  [Eyebrow]       ││   │ │
│ │  │  │  200 x 280         │  │                  ││   │ │
│ │  │  │  training-pant-    │  │ "6 pairs in      ││   │ │
│ │  │  │  penguin-multi-    │  │  rotation"       ││   │ │
│ │  │  │  color.jpg         │  │  [H3 17px]       ││   │ │
│ │  │  │                    │  │                  ││   │ │
│ │  │  │  border-right:     │  │ "$79.99"         ││   │ │
│ │  │  │  2px B.ink         │  │  [24px price]    ││   │ │
│ │  │  │                    │  │                  ││   │ │
│ │  │  │                    │  │ ┌──────────────┐ ││   │ │
│ │  │  │                    │  │ │ 62% SAVINGS  │ ││   │ │
│ │  │  │                    │  │ │  vs 1-pair   │ ││   │ │
│ │  │  │                    │  │ │  [B.green bg] │ ││   │ │
│ │  │  │                    │  │ └──────────────┘ ││   │ │
│ │  │  │                    │  │                  ││   │ │
│ │  │  │                    │  │ "Free shipping"  ││   │ │
│ │  │  │                    │  │  [B.green, 13px] ││   │ │
│ │  │  │                    │  │                  ││   │ │
│ │  │  │                    │  │ "$13.33/pair"    ││   │ │
│ │  │  │                    │  │  [13px, B.muted] ││   │ │
│ │  │  └────────────────────┘  └──────────────────┘│   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [border: 2px B.ink, 16px radius, 4px shadow]       │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       CTA-12: Exit Close — CTA Zone                  │ │ ~320px
│ │                                                      │ │
│ │  "No rush. No pressure. If 1 pair is working for    │ │
│ │   your rhythm, keep going. If you want the          │ │
│ │   consistency of a rotation, the pricing is here    │ │
│ │   today."                                            │ │
│ │                                                      │ │
│ │  "Either way, 60 days, your judgment. If it doesn't │ │
│ │   work for your child, full refund."                 │ │
│ │                                                      │ │
│ │  [ Get the 3+3 Bundle, $79.99 with free shipping → ]│ │
│ │  [Full-width, B.teal #2BAEB4 bg, white text         │ │
│ │   52px height, pill shape]                           │ │
│ │                                                      │ │
│ │  "That's $13.33 per pair with the bundle — less     │ │
│ │   than half the single-pair price."                  │ │
│ │   [Questrial 13px, B.muted, italic]                  │ │
│ │                                                      │ │
│ │  [ Keep using your 1 pair, the offer will be here   │ │
│ │    when you're ready → ]                            │ │
│ │  [Outlined, B.teal border, B.teal text               │ │
│ │   48px height, pill shape]                           │ │
│ │                                                      │ │
│ │  [Note: secondary link goes to product page without  │ │
│ │   upsell tracking]                                   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       TRUST-2: Guarantee Detail Cards                │ │ ~200px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [3 CARD ROW — horizontal]                    │   │ │
│ │  │                                              │   │ │
│ │  │  ┌──────────┐ ┌──────────┐ ┌──────────┐     │   │ │
│ │  │  │ 60-DAY   │ │ FREE     │ │ NO       │     │   │ │
│ │  │  │ MONEY-   │ │ SHIPPING │ │ QUESTIONS│     │   │ │
│ │  │  │ BACK     │ │ ON       │ │ ASKED    │     │   │ │
│ │  │  │ GUARANTEE│ │ BUNDLES  │ │ REFUND   │     │   │ │
│ │  │  │          │ │          │ │          │     │   │ │
│ │  │  │ [icon]   │ │ [icon]   │ │ [icon]   │     │   │ │
│ │  │  └──────────┘ └──────────┘ └──────────┘     │   │ │
│ │  │  [bg: B.cream, 16px radius, 1px B.green      │   │ │
│ │  │   border on each card]                       │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       SIGNOFF — Lena Sign-Off (MEDIUM variant)       │ │ ~300px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  "With understanding,"                       │   │ │
│ │  │  [Questrial 16px, B.ink]                     │   │ │
│ │  │                                              │   │ │
│ │  │  Lena ——,                                    │   │ │
│ │  │  (Caveat font, 42px, B.teal)                 │   │ │
│ │  │  [flourish SVG]                              │   │ │
│ │  │                                              │   │ │
│ │  │  Customer Support · Mom of two autistic sons │   │ │
│ │  │  [Questrial 12px, B.muted]                   │   │ │
│ │  │                                              │   │ │
│ │  │  ─ ─ ─ dashed divider ─ ─ ─                 │   │ │
│ │  │                                              │   │ │
│ │  │  P.S. I bought 1 pair first too. My older   │   │ │
│ │  │  son was 8 before things clicked. The body- │   │ │
│ │  │  signal approach works on its own timeline,  │   │ │
│ │  │  and so does your judgment. 60 days, your    │   │ │
│ │  │  call.                                       │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.ink, card bg: #1F2A2C, 22px radius]        │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │                 FOOTER                               │ │ ~180px
│ │                                                      │ │
│ │  No spam. No templates. Just a mom who lives this   │ │
│ │  too.                                               │ │
│ │  [Questrial 14px, B.muted, italic]                   │ │
│ │                                                      │ │
│ │  You're receiving this because you purchased a      │ │
│ │  BrightKidCo 1-pair bundle. If you'd like fewer    │ │
│ │  emails or to update preferences, click here.       │ │
│ │  [Questrial 11px, B.muted]                           │ │
│ │                                                      │ │
│ │  BrightKidCo · Brooklyn, NY 11201 · Unsubscribe    │ │
│ │  [Questrial 11px, B.muted]                           │ │
│ │                                                      │ │
│ │  [Gradient accent bar: 60px x 3px]                   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│  ★ Easter Egg: P.S. "60 days, your call" echoes the    │
│    Welcome E1 permission frame — continuity for        │
│    attentive readers. The Three-Family order (L1→L2→   │
│    L3) mirrors the migration path and emotional ladder. │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Section Specs

### Section 1: Preheader Bar
- **Component:** UTIL-06 — Preheader Bar
- **Exact Copy:** "Your 1 pair has been working for 30 days. If you've been thinking about more, here's the bundle pricing before it shifts."
- **Background:** #F6F2EA
- **Typography:** Questrial 11px, italic, B.muted
- **Padding:** 6px 20px, centered
- **Notes:** 128 chars. Sets context (30 days of use) and introduces the pricing shift without FOMO language. Cross-level safe — L3 receives no urgency pressure from this phrasing.

### Section 2: Header
- **Component:** UTIL-08 — Nav Bar
- **Exact Copy:** "Lena from BrightKidCo" (from name)
- **Image:** BrightKidCo logo, 34px height
- **Background:** B.paper (#FFFFFF)
- **Padding:** 24px 20px 0, centered
- **Notes:** Consistent with E1/E2.

### Section 3: Hero — HERO-10 Bold Declaration
- **Component:** HERO-10 — Bold Declaration
- **Exact Copy:**
  - Eyebrow: "DAY 30"
  - Headline: "Last call: 3+3 pricing"
  - Subhead: "Your 1 pair has been working for 30 days. If you've been thinking about more, here's the bundle pricing before it shifts."
- **Image:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-napping-watermelon-pink-shorts.png
  - Alt text: "Child at home in BrightKidCo underwear, quiet moment, warm tones"
  - Dimensions: 420 x 220px (desktop), full-width (mobile)
  - Cropping: Center crop, child in quiet/napping moment, watermelon pink tones
  - Fallback color: #FBF7F1
- **FramedImage wrapper:** 2px B.ink border, 16px radius, 4px B.ink shadow
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Headline: Questrial 28px desktop / 22px mobile, weight 700, letter-spacing -0.02em, color B.ink
  - Subhead: Questrial 17px, weight 500, color B.soft, line-height 1.5
  - Eyebrow: Questrial 10.5px, weight 700, letter-spacing 2px, uppercase, B.teal
- **Notes:** Bold Declaration hero — stronger than E1's Mirror Moment or E2's Whisper Tone. The "Last call" headline signals finality without urgency manipulation. The word "last" communicates time sensitivity honestly. The quiet lifestyle image (napping child) maintains the dignified, low-pressure tone.

### Section 4: Card Cascade Band
- **Component:** DESDEEP-3 — The Card Cascade
- **Exact Copy:** None (decorative)
- **Height:** 8px
- **Notes:** Subtle cascading card shapes in background. Reinforces the "multiple pairs" concept visually. Transitions from hero to body copy.

### Section 5: Letter — LETTER-03 Letter + Pull-Quote (Hook)
- **Component:** LETTER-03 — Letter + Pull-Quote
- **Exact Copy (VERBATIM):**

  **Hook paragraph 1:**
  "Thirty days with the Body-Signal Learning Layer. However that's gone for your child, whether it's been a quiet 30 days of slow noticing, or 30 days with a couple of tiny moments that felt like the first real thing, you've had the chance to see what happens when a nervous system gets feedback it's been missing."

  **Hook paragraph 2:**
  "Whether your child is 3 and just starting to show signs of awareness, or 8 and you've been at this long enough to know what 'trying' really costs, if they're wearing that 1 pair, you've seen something."

  **Hook paragraph 3:**
  "Maybe it was a pause. A look down. A pull at the waistband they've never done before. Or maybe nothing visible yet, and that's normal too."

- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Body: Questrial 17px desktop / 16px mobile, weight 400, line-height 1.6, color B.soft
  - Bold reading path: weight 600, color B.ink — "you've seen something"
- **Notes:** "Whether...Or...If..." inclusive framing. The hook acknowledges the full range of 30-day outcomes. R3: Age ranges ("3 and just starting" / "8 and you've been at this"). R5: No fixed promises. R6: Low-bar success ("pause, look down, pull at waistband").

### Section 6: Letter — Validation + Pull-Quote
- **Component:** LETTER-03 — Letter + Pull-Quote (continuation)
- **Exact Copy (VERBATIM):**

  "Here's what I hear from parents at the 30-day mark, and I've said this one myself:"

  **Pull-Quote:**
  > "One pair isn't enough for consistent learning."
  — Lena

  "I bought 1 pair first too. Both my sons went through this. One pair feels safe, it's a test, a toe-dip. Smart move. But here's what happens: the pair gets worn, gets washed, goes in the drawer. By the time it's clean and dry again, the rhythm's broken."

  "If your child is starting to show signals, even small ones, consistency is what builds the pathway. The 3+3 Bundle gives you 6 pairs in rotation. Always a clean pair. Always the feedback loop running."

  "If your child hasn't shown signals yet, that's okay too. Every nervous system moves at its own pace. Some kids take 2 weeks. Others take 8. Both are normal. The 3+3 means you can keep the input steady without the laundry stress."

- **Pull-quote styling:** bg #FBF7F1, left-border 3px B.teal, 16px radius, padding 24px
- **Pull-quote typography:** Fraunces 22px, italic, B.ink
- **Attribution:** Questrial 13px, B.muted, "— Lena"
- **Typography:**
  - Body: Questrial 17px/16px, weight 400, line-height 1.6, B.soft
  - Bold reading path: weight 600, B.ink — "consistency is what builds the pathway"
- **Notes:** Lena speaks from personal experience ("I bought 1 pair first too. Both my sons went through this."). The pull-quote is the email's thesis statement. R5: Timeline flexibility ("2 weeks to 8 weeks"). R4: Both signal-showing and no-signal-yet scenarios covered.

### Section 7: Tonal Shift Rule
- **Component:** 1px rule, #E8E2DA
- **Full width, 1px height**

### Section 8: Mechanism — EDU-8 Mechanism Diagram
- **Component:** EDU-8 — Mechanism Diagram
- **Exact Copy (VERBATIM):**

  **Eyebrow:** "WHY ROTATION MATTERS"

  **Mechanism paragraph 1:**
  "The Body-Signal Learning Layer works through sustained, repeated feedback. Every time the underwear creates that gentle sensation, the brain gets another data point: something happened. I felt it."

  **Mechanism paragraph 2:**
  "One pair interrupts that data stream every time it's in the wash. The 3+3 rotation keeps the signal arriving daily, not every other day, not 'whenever the pair is dry.'"

  **Mechanism paragraph 3:**
  "For kids 3 to 10+, verbal or non-verbal, diagnosed or still figuring it out, the mechanism is the same. The brain learns by repetition. Disruption slows the learning curve."

  **Parent quote:**
  > "He went from wondering to walking toward the bathroom. It took 5 weeks of consistent wear. If we only had 1 pair, we'd have lost half those wearing days to laundry."
  — BrightKidCo parent, internal review

- **Rotation diagram:** SVG/GIF showing 1-pair cycle (intermittent) vs. 3+3 rotation (continuous). ~400px wide, 120px tall. ASCII fallback: `▓▓▓▓░░░░▓▓▓▓░░░░` (1-pair) vs `▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓` (3+3).
- **Parent quote card:** bg #FBF7F1, left-border 3px B.teal, 16px radius, padding 20px
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Body: Questrial 17px/16px, weight 400, line-height 1.6, B.soft
  - Bold reading path: weight 600, B.ink — "The brain learns by repetition. Disruption slows the learning curve."
- **Notes:** The mechanism diagram makes the rotation concept visual. The parent quote ("5 weeks of consistent wear") provides concrete evidence. R4: "verbal or non-verbal, diagnosed or still figuring it out" explicitly covers all modes. R5: No fixed timelines.

### Section 8: Tonal Shift Rule
- **Component:** 1px rule, #E8E2DA
- **Full width, 1px height**

### Section 9: Testimonials — SP-14 Trust Badges Row (Three-Family Pattern)
- **Component:** SP-14 — Trust Badges Row
- **Exact Copy (VERBATIM):**

  **Intro:** "Three parents who each bought 1 pair first. Three different kids. One shared experience thirty days in:"

  **Card 1 (L1 pattern):**
  > "He said 'wet' for the first time ever on Week 3. It was after wearing them every day. I don't think we'd have gotten there without daily use."
  Parent of a verbal 4-year-old

  **Card 2 (L2 pattern):**
  > "We're not trained yet. But he paused. He looked down. That's never happened before in 4 years of tries. Week 4 with the underwear. One pair was in the wash half the time."
  Parent of a 6-year-old with sensory differences

  **Card 3 (L3 pattern):**
  > "He doesn't notice wetness. He never has. But after a month of consistent wear, he walks differently when he has an accident. That's new. I'll take it."
  Parent of a non-verbal 9-year-old

  **Closing:** "If any of these sound like your child, maybe not fully there yet, maybe different progress, maybe just starting, you know what 30 more days of consistent wear could look like."

- **Card styling:** bg #FBF7F1, left-border 3px (Card 1: B.teal, Card 2: B.green, Card 3: B.muted), 16px radius, padding 20px
- **Quote typography:** Fraunces 17px, italic, B.ink, line-height 1.5
- **Attribution typography:** Questrial 11px, B.muted, small caps, letter-spacing 0.05em
- **Floor labels:** "VERBAL · AGE 4", "SENSORY · AGE 6", "NON-VERBAL · AGE 9" — symptom labels, NOT level labels
- **Notes:** Three-Family Testimonial Pattern. Each quote is 1-2 sentences, authentic voice. The L2 quote ("4 years of tries") is the most powerful — it acknowledges the long journey without despair. The closing bridges to the offer: "you know what 30 more days could look like."

### Section 10: Tonal Shift Rule
- **Component:** 1px rule, #E8E2DA
- **Full width, 1px height**

### Section 11: Product — ProductShowcaseFull (3+3 Bundle)
- **Component:** ProductShowcaseFull
- **Exact Copy:**
  - Eyebrow: "THE 3+3 BUNDLE"
  - Title: "6 pairs in rotation"
  - Price: "$79.99"
  - Savings badge: "62% SAVINGS vs 1-pair"
  - Shipping: "Free shipping"
  - Per-pair note: "$13.33/pair"
- **Image:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-penguin-multicolor.jpg
  - Alt text: "BrightKidCo training pant in penguin multicolor pattern, flat lay"
  - Dimensions: 200 x 280px (left column), full-width on mobile
  - Cropping: Full product visible, clean flat-lay composition. Penguin multicolor pattern clearly visible.
  - Fallback color: #FBF7F1
- **Card styling:** bg B.paper, 2px B.ink border, 16px radius, 4px B.ink shadow
- **Two-column layout:** Image left (200px, border-right 2px B.ink), content right
- **Savings badge:** B.green (#5DD07A) bg, white text, 13px weight 700, pill shape, inline
- **Eyebrow:** Questrial 10px, B.teal, uppercase, letter-spacing 1.4px
- **Product name:** Questrial 17px, weight 700, B.ink
- **Price:** Questrial 24px, weight 700, B.ink
- **Notes:** Full product showcase — the 3+3 Bundle is the hero product. Larger image (200x280 vs 140x220 in E1/E2) signals this is the decision point. The 62% savings badge is prominent but not aggressive — it's factual, not promotional.

### Section 12: CTA — CTA-12 Exit Close
- **Component:** CTA-12 — Exit Close
- **Exact Copy (VERBATIM):**
  - Body: "No rush. No pressure. If 1 pair is working for your rhythm, keep going. If you want the consistency of a rotation, the pricing is here today."
  - Guarantee line: "Either way, 60 days, your judgment. If it doesn't work for your child, full refund."
  - Primary button: "Get the 3+3 Bundle, $79.99 with free shipping"
  - Price note: "That's $13.33 per pair with the bundle — less than half the single-pair price."
  - Secondary button: "Keep using your 1 pair, the offer will be here when you're ready"
  - Note: secondary link goes to product page without upsell tracking
- **Primary CTA button:** Full-width on mobile / 280px desktop, B.teal (#2BAEB4) bg, white #FFFFFF text, 52px height, pill shape (999 radius), weight 700
- **Secondary CTA button:** Full-width on mobile / 280px desktop, B.teal outline, B.teal text, 48px height, pill shape
- **Button typography:** Questrial 18px, weight 700, letter-spacing 0.5px
- **CTA spacing:** 24px above, 20px below
- **Permission note:** Questrial 16px, B.soft
- **Price note:** Questrial 13px, B.muted, italic
- **Background:** B.paper (#FFFFFF)
- **Notes:** Exit Close CTA — the final decision point. The dual CTA respects all levels. L3 chooses the soft option without pressure. L1/L2 take the primary. The "no upsell tracking" on the secondary link is a trust signal — it means clicking "keep using your 1 pair" doesn't tag them for future marketing.

### Section 13: Tonal Shift Rule
- **Component:** 1px rule, #E8E2DA
- **Full width, 1px height**

### Section 14: Trust — TRUST-2 Guarantee Detail Cards
- **Component:** TRUST-2 — Guarantee Detail Cards
- **Exact Copy:**
  - Card 1: "60-DAY MONEY-BACK GUARANTEE"
  - Card 2: "FREE SHIPPING ON BUNDLES"
  - Card 3: "NO QUESTIONS ASKED REFUND"
- **Styling:** 3 horizontal cards, bg B.cream, 16px radius, 1px B.green border, padding 16px each
- **Icons:** Simple line icons (checkmark, truck, refund) in B.green
- **Typography:** Questrial 13px, weight 700, B.ink, centered
- **Notes:** Expanded guarantee for E3 — more detail than E1/E2's condensed seal. The "No questions asked" card eliminates the last barrier to purchase. Horizontal card row works on desktop, stacks to vertical on mobile.

### Section 15: Signoff — Lena (MEDIUM variant)
- **Component:** UTIL-05 — Signoff Card
- **Exact Copy (VERBATIM):**
  "With understanding,"
  "Lena ——,"
  "Customer Support · Mom of two autistic sons"
  "P.S. I bought 1 pair first too. My older son was 8 before things clicked. The body-signal approach works on its own timeline, and so does your judgment. 60 days, your call."
- **Closing words:** "With understanding," per 11-brand-voice-reference.md §9.2-9.4 (Medium variant for Email 3 of 3)
- **Avatar:** 58px circle, gradient ring (B.teal → B.green), portrait placeholder
- **Name:** "Lena", Caveat font, 42px, B.teal, with flourish SVG
- **Role:** "Customer Support · Mom of two autistic sons", Questrial 12px, B.muted
- **Card bg:** #1F2A2C, 22px radius, 1.5px #2F3D40 border
- **Card container bg:** B.ink (#1F2D2F)
- **Dashed dividers:** 1.5px #3A4547
- **P.S. section:** Questrial 13px, #B8CACD, italic, "P.S." in B.teal bold
- **Notes:** MEDIUM variant per GIULIANO-DEMANDS.md §7.3 (Replenish E3 uses MEDIUM — closing words "With understanding," per §11.7 for Email 3). Single P.S. line — personal experience + permission. The "60 days, your call" echo creates continuity with the Welcome E1 permission frame (Easter Egg).

### Section 16: Footer
- **Component:** UTIL-04 — Footer
- **Exact Copy:**
  - Brand voice: "No spam. No templates. Just a mom who lives this too."
  - Explanation: "You're receiving this because you purchased a BrightKidCo 1-pair bundle. If you'd like fewer emails or to update preferences, click here."
  - Legal: "BrightKidCo · Brooklyn, NY 11201 · Unsubscribe"
- **Background:** B.paper (#FFFFFF)
- **Typography:** Questrial 14px (brand voice), 11px (legal), B.muted
- **Gradient accent bar:** 60px x 3px, B.gradient (B.teal → B.green), centered, 3px radius
- **Notes:** CAN-SPAM compliant. The "No spam. No templates." line is unique to E3 — it reinforces Lena's personal voice at the flow's conclusion. The explanation line ("You're receiving this because...") is CAN-SPAM best practice and builds trust.

### Section 17: Easter Eggs
- **Easter Egg 1 — Welcome E1 Callback:** In the P.S., "60 days, your call" echoes the Welcome E1 permission frame — a subtle callback that creates continuity for attentive readers who've been in the ecosystem since Day 0.
- **Easter Egg 2 — Three-Family Order:** The Three-Family testimonial order (L1 → L2 → L3) is intentional — mirrors the migration path and the emotional ladder from hope to acceptance. Readers who re-read the email sequence feel the progression subconsciously.
- **Easter Egg 3 — Expandable Math:** If the rotation diagram includes an accordion/expandable section, the "Why 3+3?" reveal shows: "$13.33/pair, free shipping, 6 learning days instead of 3."

---

## 6. Component Details

### HERO-10 — Bold Declaration
- **Props:** eyebrow, headline, subhead, heroImage
- **Variants:** Default — eyebrow + framed image + headline + subhead
- **Custom overrides:**
  - Eyebrow: "DAY 30" (temporal milestone)
  - Hero image: toddler-napping-watermelon-pink-shorts.png (quiet moment)
  - Headline: "Last call: 3+3 pricing" (permission frame, not urgency)
  - No CTA in hero (placed after mechanism section)

### LETTER-03 — Letter + Pull-Quote
- **Props:** paras[], bg, pullQuote
- **Variants:** Default — paragraph stack with embedded pull-quote
- **Custom overrides:**
  - bg: B.paper (#FFFFFF)
  - Pull-quote: "One pair isn't enough for consistent learning." — Lena
  - Pull-quote styling: Cream Card, B.teal left-border, Fraunces 22px italic
  - Bold reading path: "you've seen something" → "consistency is what builds the pathway"

### SP-14 — Trust Badges Row
- **Props:** intro, cards[], closing
- **Variants:** Three-Family Pattern — 3 stacked cards
- **Custom overrides:**
  - Card 1: B.teal left-border, L1 pattern (verbal, age 4)
  - Card 2: B.green left-border, L2 pattern (sensory, age 6)
  - Card 3: B.muted left-border, L3 pattern (non-verbal, age 9)
  - Floor labels: symptom descriptors, never level labels
  - Closing bridges to offer

### EDU-8 — Mechanism Diagram
- **Props:** eyebrow, mechanism paragraphs[], rotationDiagram, parentQuote
- **Variants:** Default — eyebrow + mechanism text + diagram + quote
- **Custom overrides:**
  - Eyebrow: "WHY ROTATION MATTERS"
  - Rotation diagram: 1-pair vs. 3+3 comparison
  - Parent quote in Cream Card
  - Bold reading path: "The brain learns by repetition. Disruption slows the learning curve."

### ProductShowcaseFull
- **Props:** eyebrow, title, priceFrom, savingsBadge, shipping, perPairNote
- **Variants:** Full — large image + detailed content
- **Custom overrides:**
  - Larger image: 200x280px (vs. 140x220 in E1/E2)
  - Savings badge: "62% SAVINGS vs 1-pair" in B.green
  - Price: "$79.99" in 24px (larger than E1/E2)
  - Per-pair note: "$13.33/pair"

### CTA-12 — Exit Close
- **Props:** body, guaranteeLine, primaryCta, priceNote, secondaryCta
- **Variants:** Default — body + guarantee + primary button + price note + secondary button
- **Custom overrides:**
  - Primary: B.teal bg, white text, 52px height
  - Secondary: B.teal outline, B.teal text, 48px height
  - Secondary link: no upsell tracking (trust signal)
  - Guarantee line: "60 days, your judgment"

### TRUST-2 — Guarantee Detail Cards
- **Props:** cards[]
- **Variants:** 3-card horizontal row
- **Custom overrides:**
  - Card 1: "60-DAY MONEY-BACK GUARANTEE"
  - Card 2: "FREE SHIPPING ON BUNDLES"
  - Card 3: "NO QUESTIONS ASKED REFUND"
  - Horizontal on desktop, vertical stack on mobile

### DESDEEP-3 — Card Cascade
- **Props:** height
- **Variants:** Subtle decorative element
- **Custom overrides:** Height: 8px

### UTIL-05 — Signoff Card
- **Props:** variant, closingWords
- **Variants:** MEDIUM (Replenish E3)
- **Custom overrides:**
  - Closing words: "With understanding," per §11.7 (Email 3)
  - Single P.S. line (personal experience + permission)
  - "60 days, your call" — Welcome E1 callback

### UTIL-04 — Footer
- **Props:** tagline, explanation, legal
- **Variants:** E3-specific with CAN-SPAM explanation
- **Custom overrides:**
  - Brand voice: "No spam. No templates."
  - CAN-SPAM explanation line
  - Physical address: Brooklyn, NY 11201

---

## 7. Image Briefs

### Image 1: Hero Lifestyle
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-napping-watermelon-pink-shorts.png
- **Alt text:** "Child at home in BrightKidCo underwear, quiet moment, warm tones"
- **Recommended dimensions:** 420 x 220px (desktop), full-width (mobile)
- **Cropping/focal point:** Center crop, child in quiet/napping moment. Watermelon pink tones match the warm palette. Privacy-first framing.
- **Fallback color:** #FBF7F1
- **Notes:** Quiet moment hero — the 30-day milestone deserves a calm, dignified image. No urgency, no action pose. The child is at rest, which mirrors the email's "no rush" tone. Cross-level appropriate.

### Image 2: Product Flat Lay
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-penguin-multicolor.jpg
- **Alt text:** "BrightKidCo training pant in penguin multicolor pattern, flat lay"
- **Recommended dimensions:** 200 x 280px (left column in ProductShowcaseFull), full-width on mobile
- **Cropping/focal point:** Full product visible, clean flat-lay composition. Penguin multicolor pattern clearly visible. Larger than E1/E2 product images to signal the decision point.
- **Fallback color:** #FBF7F1
- **Notes:** Penguin multicolor is gender-neutral and age-neutral. The larger image size (200x280 vs 140x220) signals that this is the hero product — the email's entire argument leads to this offer.

---

## 8. Rendering Notes

### Email Client Considerations
- **Gmail:** Strips CSS animations, classes. All styling must be inline. Rotation diagram GIF degrades to static frame. Preheader text visible in preview. Max email size ~100KB.
- **Outlook Desktop:** No SVG support. Rotation diagram may not render (use static fallback). Border-radius not supported on buttons. FramedImage border/shadow renders as solid. Trust badge cards may lose horizontal layout.
- **Apple Mail:** Full CSS support. Best rendering environment. Rotation GIF animates.
- **Yahoo Mail:** Inline CSS required. Border-radius spotty on buttons.
- **Thunderbird:** Good CSS support.

### Mobile Responsive Notes
- **Breakpoint:** 480px
- **Max width:** 600px desktop, full-width mobile
- **CTA buttons:** Full-width on mobile, 52px primary / 48px secondary
- **Hero image:** Full-width on mobile, maintains aspect ratio
- **Product showcase:** Side-by-side stacks to single column — image full-width above content
- **Trust badge cards:** 3-column horizontal stacks to vertical on mobile
- **Testimonial cards:** Stack naturally, full-width
- **Dual CTA:** Buttons stack vertically, full-width
- **Font sizes:** Body 16px mobile, Headlines 22px mobile
- **Spacing:** Section gap 36px mobile (from 44px desktop)

### Accessibility Notes
- **Body text minimum:** 16px on mobile (WCAG AA)
- **CTA minimum height:** 48px (tap-friendly)
- **Color contrast:** All body text passes WCAG AA. CTA text (white on #2BAEB4) passes at 4.6:1.
- **Alt text:** All images have descriptive alt text
- **Semantic structure:** H1 for hero headline, H2 for section headers, blockquote for testimonial and pull-quotes
- **Link purpose:** CTA buttons have descriptive text
- **GIF animation:** Max 2 loops, no strobing, max 12fps, max 150KB. Progressive loading (text renders above GIF).

### Special Instructions
- **Reply prompt:** REQUIRED (§17.2). Reply-to: support@brightkidco.com
- **From name:** "Lena from BrightKidCo" (§16.3)
- **Cloak deployment:** Transactional cloak ✅, Conversational cloak ✅ (§17.8)
- **No Facebook link** (§16.4)
- **No Trustpilot link** (§16.4)
- **Cross-level forbidden language check:**
  - ✅ No "Level 1/2/3" or "L1/L2/L3" labels
  - ✅ No diagnosis as prerequisite
  - ✅ No verbal-only signal language (always paired)
  - ✅ No fixed age hooks ("3 and just starting" / "8 and you've been at this" are ranges)
  - ✅ No school-specific urgency
  - ✅ No aggressive math reframes (62% savings is factual, not manipulative)
  - ✅ No "just like other kids"
  - ✅ No "We miss you" / guilt
  - ✅ No discount-driven re-engagement
  - ✅ No hard-sell upsell (dual CTA with permission framing)
- **Image-to-text ratio:** 30/70 (text-dominant — mechanism explanation and testimonials need space)
- **Copy density:** Medium-long (cross-level, mechanism + practical argument + testimonials)
- **Dual CTA design:** Primary is solid fill (B.teal), secondary is outline (B.teal border). Clear visual hierarchy. Secondary link has no upsell tracking — this is a trust signal.
- **Rotation GIF:** If used: 3-frame looping, ~2 second cycle, max 150KB, no strobe, progressive load. Static fallback: ASCII comparison bars.
- **Replenish B/C consistency:** E3 tone (practical, rotation-focused, permission-based) maintains consistency with E1-E2 while escalating the "last call" signal naturally. The flow reads as a coherent 3-email arc: observe → explain → decide.
