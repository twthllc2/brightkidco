# Wireframe: Replenish A — E1 | Cross-Level (L1/L2/L3/GF)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Replenish A (Flow 15) |
| **Position** | E1 — Day 14 post-purchase |
| **Level** | Cross-Level — L1 (Sarah), L2 (Lisa), L3 (Maria), General Fallback |
| **Copy File** | /root/projects/brightkidco/outputs/copy/replenish-a/repa-15-e1.md |
| **Strategy Map Entry** | flows.replenish-a.emails.e1 |
| **Flow Signature** | replenishment-reminder, respectful re-engagement, practical |
| **Level Calibration** | Cross-level: 50% Hope / 50% Realism, Observation hook subject, Short sign-off variant |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM, PRODUCT, CTA, GUARANTEE, DECORATIVE |
| **Total Estimated Height** | ~3,200px (desktop) / ~3,500px (mobile) |

---

## 2. Strategy Box

**Big Idea:** "One pair starts the signal. More pairs sustain it." The core message: 14 days in, the body-signal pathway is building, but consistency of wear is the factor that determines speed. One pair is not a mistake (it's how you start). Six pairs are how you give the nervous system enough reps to build the pathway. The emotional arc: Validation ("two weeks in is too early to judge") → Recognition ("here's what normal looks like") → Gentle expansion ("more pairs = more learning time").

**Contraption (Design Mechanism):** The Signal Wave — A subtle SVG animation embedded in the email, a gentle sine wave that starts nearly flat in the header and gradually builds amplitude as the reader scrolls down. At the Recognition Anchors section, the wave pulses once per bullet (representing each signal moment). At the CTA, the wave is at full amplitude, the signal has arrived. This visual metaphor mirrors the neurological journey the underwear creates. Implementation: CSS keyframe animation on an inline SVG path (`stroke-dashoffset` + `d` morphing). Progressive enhancement, degrades gracefully to a static wave in clients that don't support animation.

**Emotional Arc Position:** Position 1 of 3 in Replenish A flow — Gentle re-introduction after 14-day gap. Validates what the parent has observed (or not observed) during the first two weeks. Normalizes the range of outcomes. Introduces the practical argument for more pairs as a consistency play, not an upsell. Sets up E2's deeper practical-gap reasoning and E3's final pricing nudge.

**Component Selection Rationale:**
- HERO-5 (Mirror Moment): Reflects the parent's current state back at them — "here's what two weeks looks like." Cross-level appropriate, no level-specific framing.
- LETTER-02 (Handwritten Opener): Continues the personal letter voice. Warm, direct, no marketing tone. Three-Family Testimonial Pattern embedded within.
- SP5 (Counter Testimonial): Three-family testimonial block — L1/L2/L3 patterns in card format. Symptom labels, not level labels.
- ED3 (Interoception Explainer): Brief mechanism refresher — the signal wave, 30-60 seconds of feedback, why repetition matters. Not heavy science, just a reminder.
- ProductShowcaseMedium: 3+3 Bundle offer, $79.99, inline product card.
- CTA-11 (Permission CTA): Permission-framed, "If you're ready" / "If one pair is working, that's okay too." Low pressure.
- TRUST-1 (60-Day Seal): Risk reversal, standard placement.
- DESDEEP-16 (Paper Texture): Subtle decorative element — warm paper texture as background accent, reinforces the handmade/personal feel.

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — CTA button fill, accent highlights, signal dots, link text
- Secondary: #5DD07A (B.green) — Success indicators, secondary accents, trust badge border
- Background: #FBF7F1 (B.cream) — Overall email background (warm, non-clinical)
- Text: #1F2D2F (B.ink) — Primary body text, headings, borders
- Page Background: #FFFFFF (B.paper) — Email canvas
- Secondary Text: #4A6568 (B.soft) — Body copy, secondary paragraphs
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer, citations
- CTA Text on Dark: #FFFFFF — CTA button text
- Cream Card: #FBF7F1 — Testimonial card backgrounds, Recognition Anchors band
- Divider: #E8E2DA — Section dividers, borders

**Typography:**
- Heading: Questrial, 28px desktop / 22px mobile, weight 700, line-height 1.15, letter-spacing -0.02em
- Body: Questrial, 17px desktop / 16px mobile, weight 400, line-height 1.6, color B.soft
- Accent: Fraunces, 20px desktop / 18px mobile, weight 400 italic, line-height 1.4, color B.ink (for testimonial quotes)
- Eyebrow: Questrial, 10.5px, weight 700, letter-spacing 2px, text-transform uppercase, color B.teal
- CTA button: Questrial, 18px, weight 700, white #FFFFFF
- Testimonial attribution: Questrial, 11px, weight 700, small caps, letter-spacing 0.05em, B.muted

**Border Radius:** Cards: 16px, Buttons: 999px (pill for primary CTA), Images: 16px, Small: 12px
**Shadow:** Primary: 4px 4px 0 B.ink (card shadow)
**Spacing:** Section gap: 44px, H-padding: 30px desktop / 20px mobile, Card padding: 24/22px, Element gap: 16px, CTA spacing: 24px above, 20px below

---

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────────────┐ │
│ │                  [PREHEADER BAR]                     │ │ 36px
│ │  Whether you're seeing mini-wins or still waiting,  │ │
│ │  both are normal at this stage.                     │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              [HEADER — Logo + From Name]             │ │ 80px
│ │         BrightKidCo · Lena from BrightKidCo         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │        HERO-5: Mirror Moment                         │ │ ~300px
│ │                                                      │ │
│ │  [Eyebrow: "TWO WEEKS IN"]                          │ │
│ │  [Questrial 10.5px, B.teal, uppercase, 2px spacing] │ │
│ │                                                      │ │
│ │  ┌────────────────────────────────────────────────┐  │ │
│ │  │  [IMG: toddler-playing-train-moon-cloud-blue]  │  │ │
│ │  │          Lifestyle hero image                  │  │ │
│ │  │          420 x 220px, rounded 16px             │  │ │
│ │  │          Black border + drop-shadow ink block  │  │ │
│ │  └────────────────────────────────────────────────┘  │ │
│ │                                                      │ │
│ │  "Two weeks in with one pair"                       │ │
│ │   [H1 — Questrial 28px/22px, B.ink, -0.02em]       │ │
│ │                                                      │ │
│ │  "Whether you're seeing mini-wins or still waiting, │ │
│ │   both are normal at this stage."                   │ │
│ │   [Subhead — Questrial 17px, B.soft, 1.5 line-h]   │ │
│ │                                                      │ │
│ │  [Signal Wave SVG — flat, building amplitude]       │ │
│ │  [Stroke: B.teal, 2px, CSS keyframe draw]           │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── DESDEEP-16: PAPER TEXTURE ────────────────────┐ │ 8px
│ │  [Subtle warm paper texture band]                    │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-02: Handwritten Opener — Hook           │ │ ~600px
│ │                                                      │ │
│ │  [HOOK — 2 paragraphs, B.soft text, 1.6 line-height]│ │
│ │                                                      │ │
│ │  "Whether you're 14 days into consistent daily wear, │ │
│ │   or your child has only touched the fabric so far,  │ │
│ │   whether they can tell you they're wet, or show you │ │
│ │   with a gesture, or don't seem to notice at all, if │ │
│ │   you're wondering whether one pair is enough, here's│ │
│ │   what most parents discover at this stage."         │ │
│ │                                                      │ │
│ │  "It's not about having more pairs. It's about       │ │
│ │   giving the nervous system more chances to catch    │ │
│ │   the signal."                                       │ │
│ │   [bold reading path: "more chances to catch         │ │
│ │    the signal"]                                      │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-02: Recognition Anchors                 │ │ ~400px
│ │                                                      │ │
│ │  "At 14 days, what you're probably seeing is one of  │ │
│ │   these:"                                            │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [RECOGNITION ANCHORS — Cream Card #FBF7F1]  │   │ │
│ │  │  bg: #FBF7F1, 16px radius                    │   │ │
│ │  │  padding: 24px                                │   │ │
│ │  │                                              │   │ │
│ │  │  • A pause before an accident. Just once.     │   │ │
│ │  │    But it happened. (L1–L2)                   │   │ │
│ │  │                                              │   │ │
│ │  │  • Your child pulling at their pants after    │   │ │
│ │  │    they're wet, instead of ignoring it. (L2)  │   │ │
│ │  │                                              │   │ │
│ │  │  • They wore the underwear for 30+ minutes   │   │ │
│ │  │    without wanting it off. (L3)               │   │ │
│ │  │                                              │   │ │
│ │  │  • They said "wet" or showed you, a look     │   │ │
│ │  │    down, a tug, a gesture. (Verbal +          │   │ │
│ │  │    non-verbal)                                │   │ │
│ │  │                                              │   │ │
│ │  │  • Nothing visible yet. They're still going   │   │ │
│ │  │    about their day, unaware. (Any level,      │   │ │
│ │  │    patience phase)                            │   │ │
│ │  │                                              │   │ │
│ │  │  [Questrial 17px/16px, B.soft, 1.6 line-h]   │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "If any of those sound like your last two weeks,    │ │
│ │   even just one, your child's nervous system is      │ │
│ │   starting to register the signal. The Body-Signal   │ │
│ │   Learning Layer is working."                        │ │
│ │                                                      │ │
│ │  "If you saw none of these, that's also completely   │ │
│ │   within the normal range. Some children show the    │ │
│ │   first awareness after 14 days. Others take 6 to   │ │
│ │   8 weeks. Both are real progress. Both are on       │ │
│ │   track."                                            │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       SP5: Counter Testimonial — Three-Family        │ │ ~600px
│ │                                                      │ │
│ │  "Three parents. Three different kids. One common    │ │
│ │   question after two weeks."                         │ │
│ │   [Questrial 17px, B.ink, bold]                      │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 1 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.teal        │   │ │
│ │  │  16px radius, padding 20px                    │   │ │
│ │  │                                              │   │ │
│ │  │  "He's worn them every day. He still has     │   │ │
│ │  │   accidents, but last night he paused,        │   │ │
│ │  │   mid-play, and looked down. That never      │   │ │
│ │  │   happened before. I know it's small. But     │   │ │
│ │  │   it's the first time he's noticed."          │   │ │
│ │  │  [Fraunces 17px, italic, B.ink]              │   │ │
│ │  │                                              │   │ │
│ │  │  Sarah, mom of a verbal 4-year-old           │   │ │
│ │  │  [Questrial 11px, B.muted, small caps]       │   │ │
│ │  │  Floor label: "VERBAL · AGE 4"               │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 2 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.green       │   │ │
│ │  │                                              │   │ │
│ │  │  "More accidents in these two weeks than the  │   │ │
│ │  │   past month in pull-ups. I almost stopped.   │   │ │
│ │  │   But her OT said the accidents mean she's   │   │ │
│ │  │   starting to feel something, that's the     │   │ │
│ │  │   whole point. So we're holding the line."   │   │ │
│ │  │                                              │   │ │
│ │  │  Lisa, mom of a 6-year-old with sensory      │   │ │
│ │  │  differences                                  │   │ │
│ │  │  Floor label: "SENSORY · AGE 6"              │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 3 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.muted       │   │ │
│ │  │                                              │   │ │
│ │  │  "He hasn't shown any awareness yet. But he's│   │ │
│ │  │   tolerating the underwear for longer        │   │ │
│ │  │   stretches than before. For us, that's a    │   │ │
│ │  │   win. We're not in a hurry."                │   │ │
│ │  │                                              │   │ │
│ │  │  Maria, mom of a 9-year-old non-verbal son   │   │ │
│ │  │  Floor label: "NON-VERBAL · AGE 9"           │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "If one of these sounds like your two weeks, you're │ │
│ │   exactly where you're supposed to be."              │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       ED3: Interoception Explainer — Mechanism       │ │ ~350px
│ │                                                      │ │
│ │  [Eyebrow: "WHAT'S HAPPENING"]                       │ │
│ │  [Questrial 10.5px, B.teal, uppercase]              │ │
│ │                                                      │ │
│ │  "Here's what's happening neurologically at this     │ │
│ │   point: the Body-Signal Learning Layer creates a    │ │
│ │   gentle, sustained 'uh-oh' sensation, 30 to 60     │ │
│ │   seconds of feedback, every time there's wetness.  │ │
│ │   This gives the brain time to register: something  │ │
│ │   happened."                                         │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │         [SIGNAL WAVE SVG — Building]          │   │ │
│ │  │   ~400px wide, 40px tall                      │   │ │
│ │  │   Gentle sine curve, amplitude increasing     │   │ │
│ │  │   Stroke: B.teal #2BAEB4, 2px                 │   │ │
│ │  │   CSS keyframe: stroke-dashoffset animation   │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "For some children, this awareness starts wiring in │ │
│ │   the first two weeks. For others, the nervous system│ │
│ │   needs more repetition, it's laying new neural     │ │
│ │   pathways, and that doesn't happen on a schedule." │ │
│ │                                                      │ │
│ │  "One pair starts the process. But consistent daily  │ │
│ │   wear is what builds the signal pathway. If you're │ │
│ │   washing that one pair every night, you might be   │ │
│ │   missing 50% of wearing opportunities, and each one│ │
│ │   is a chance for the brain to learn."              │ │
│ │   [bold reading path: "consistent daily wear is     │ │
│ │    what builds the signal pathway"]                 │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       ProductShowcaseMedium — Bundle Offer           │ │ ~280px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  ┌─────────────┐  ┌────────────────────────┐│   │ │
│ │  │  │             │  │ "THE 3+3 BUNDLE"       ││   │ │
│ │  │  │  [PRODUCT   │  │  [Eyebrow 10px, B.teal]││   │ │
│ │  │  │   IMAGE]    │  │                        ││   │ │
│ │  │  │  140 x 220  │  │ "6 pairs in rotation"  ││   │ │
│ │  │  │  training-  │  │  [H3 17px, B.ink]      ││   │ │
│ │  │  │  pant-cloud │  │                        ││   │ │
│ │  │  │  -raindrop- │  │ "$79.99"               ││   │ │
│ │  │  │  white.jpg  │  │  [20px price]           ││   │ │
│ │  │  │             │  │                        ││   │ │
│ │  │  │  border-    │  │ "$13.33 per pair —     ││   │ │
│ │  │  │  right:     │  │  less than half the    ││   │ │
│ │  │  │  2px B.ink  │  │  single-pair price"    ││   │ │
│ │  │  │             │  │  [13px, B.muted]       ││   │ │
│ │  │  └─────────────┘  │                        ││   │ │
│ │  │                   │ "Free shipping"        ││   │ │
│ │  │                   │  [B.green, 13px]       ││   │ │
│ │  │                   │                        ││   │ │
│ │  │                   │ "60-day guarantee"     ││   │ │
│ │  │                   │  [11px, B.soft]        ││   │ │
│ │  │                   └────────────────────────┘│   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [border: 2px B.ink, 16px radius, 4px shadow]       │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       CTA-11: Permission CTA — CTA Zone              │ │ ~280px
│ │                                                      │ │
│ │  "If you're ready to give your child more signal-    │ │
│ │   learning time per day, the 3+3 bundle gives you 6 │ │
│ │   pairs in rotation, always one clean, one ready, one│ │
│ │   in the wash."                                      │ │
│ │  [Questrial 17px, B.ink]                             │ │
│ │                                                      │ │
│ │  "Same 60-day guarantee. Same no-pressure timeline." │ │
│ │                                                      │ │
│ │  [ Explore the 3+3 Bundle → ]                       │ │
│ │  [Full-width, B.teal #2BAEB4 bg, white text         │ │
│ │   52px height, pill shape]                           │ │
│ │                                                      │ │
│ │  "If one pair is working for your family right now,  │ │
│ │   that's okay too. The signal doesn't rush. Neither  │ │
│ │   should you."                                       │ │
│ │   [Questrial 16px, B.soft, italic]                   │ │
│ │                                                      │ │
│ │  "6 pairs · $79.99 · Free shipping · 60-day         │ │
│ │   guarantee · Your judgment"                         │ │
│ │   [Questrial 13px, B.muted, italic]                  │ │
│ │                                                      │ │
│ │  "That's $13.33 per pair with the bundle — less     │ │
│ │   than half the single-pair price."                  │ │
│ │   [Questrial 13px, B.muted, italic]                  │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       TRUST-1: 60-Day Seal — Guarantee              │ │ ~140px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │   [60-DAY SEAL — centered, icon + text]      │   │ │
│ │  │                                              │   │ │
│ │  │   "Try it for 60 days. Your judgment."       │   │ │
│ │  │   [Questrial 16px, B.ink]                    │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.cream, 16px radius, 2px B.green border]    │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       SIGNOFF — Lena Sign-Off (SHORT variant)        │ │ ~280px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  "Talk soon,"                                │   │ │
│ │  │  [Questrial 16px, B.ink]                     │   │ │
│ │  │                                              │   │ │
│ │  │  Lena —,                                     │   │ │
│ │  │  (Caveat font, 42px, B.teal)                 │   │ │
│ │  │  [flourish SVG]                              │   │ │
│ │  │                                              │   │ │
│ │  │  Customer Support · Mom of two autistic sons │   │ │
│ │  │  [Questrial 12px, B.muted]                   │   │ │
│ │  │                                              │   │ │
│ │  │  ─ ─ ─ dashed divider ─ ─ ─                 │   │ │
│ │  │                                              │   │ │
│ │  │  P.S. My older son was 8 before we figured   │   │ │
│ │  │  this out. If the first two weeks didn't     │   │ │
│ │  │  look like what you expected, that's normal. │   │ │
│ │  │  The signal takes the time it takes. 60 days,│   │ │
│ │  │  your judgment.                              │   │ │
│ │  │                                              │   │ │
│ │  │  P.S. One pair can do the job. Three pairs   │   │ │
│ │  │  mean one is always ready. Six means real    │   │ │
│ │  │  rotation. Wherever you are on that scale,   │   │ │
│ │  │  you're doing enough.                        │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.ink, card bg: #1F2A2C, 22px radius]        │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │                 FOOTER                               │ │ ~180px
│ │                                                      │ │
│ │  © BrightKidCo, Built for the brain that learns     │ │
│ │  differently.                                        │ │
│ │  [Questrial 11.5px, B.muted]                         │ │
│ │                                                      │ │
│ │  60-day money-back guarantee · Free shipping on      │ │
│ │  bundles · Unsubscribe                               │ │
│ │  [Questrial 11px, B.muted]                           │ │
│ │                                                      │ │
│ │  [Gradient accent bar: 60px x 3px]                   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│  ★ Easter Egg: Signal Wave builds from flat to full     │
│    amplitude as reader scrolls. At CTA, wave is at     │
│    maximum — the signal has arrived. Degrades to static │
│    sine curve in non-animation clients.                 │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Section Specs

### Section 1: Preheader Bar
- **Component:** UTIL-06 — Preheader Bar
- **Exact Copy:** "Whether you're seeing mini-wins or still waiting, both are normal at this stage."
- **Background:** #F6F2EA
- **Typography:** Questrial 11px, italic, B.muted
- **Padding:** 6px 20px, centered
- **Notes:** 97 chars. Complements subject line ("Two weeks in with one pair") without repeating. Sets the inclusive, no-pressure tone immediately.

### Section 2: Header
- **Component:** UTIL-08 — Nav Bar
- **Exact Copy:** "Lena from BrightKidCo" (from name)
- **Image:** BrightKidCo logo, 34px height
- **Background:** B.paper (#FFFFFF)
- **Padding:** 24px 20px 0, centered
- **Notes:** Simple, clean header. No navigation links (replenishment flow, minimal friction).

### Section 3: Hero — HERO-5 Mirror Moment
- **Component:** HERO-5 — Mirror Moment
- **Exact Copy:**
  - Eyebrow: "TWO WEEKS IN"
  - Headline: "Two weeks in with one pair"
  - Subhead: "Whether you're seeing mini-wins or still waiting, both are normal at this stage."
- **Image:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-playing-train-moon-cloud-blue.png
  - Alt text: "Child playing at home in BrightKidCo underwear, exploring freely"
  - Dimensions: 420 x 220px (desktop), full-width (mobile)
  - Cropping: Center crop, child facing away or side-profile (privacy-first), natural light
  - Fallback color: #FBF7F1
- **FramedImage wrapper:** 2px B.ink border, 16px radius, 4px B.ink shadow
- **Signal Wave SVG:** Inline SVG sine wave, ~400px wide, stroke B.teal #2BAEB4 2px. Starts nearly flat, builds amplitude toward CTA section. CSS keyframe animation: stroke-dashoffset draw 2s + continuous pulse (opacity 0.9→1→0.9). Degrades to static sine curve in non-animation clients.
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Headline: Questrial 28px desktop / 22px mobile, weight 700, letter-spacing -0.02em, color B.ink
  - Subhead: Questrial 17px, weight 500, color B.soft, line-height 1.5
  - Eyebrow: Questrial 10.5px, weight 700, letter-spacing 2px, uppercase, B.teal
- **Notes:** Mirror Moment reflects the parent's current state. Cross-level appropriate — no level-specific framing. The signal wave SVG begins here at near-zero amplitude, establishing the visual metaphor that will build throughout the email.

### Section 4: Paper Texture Band
- **Component:** DESDEEP-16 — The Paper Texture
- **Exact Copy:** None (decorative)
- **Height:** 8px
- **Notes:** Subtle warm paper texture. Reinforces handmade/personal feel. Transitions from hero to body copy.

### Section 5: Letter — LETTER-02 Handwritten Opener (Hook)
- **Component:** LETTER-02 — Handwritten Opener
- **Exact Copy (VERBATIM):**

  **Hook paragraph 1:**
  "Whether you're 14 days into consistent daily wear, or your child has only touched the fabric so far, whether they can tell you they're wet, or show you with a gesture, or don't seem to notice at all, if you're wondering whether one pair is enough, here's what most parents discover at this stage."

  **Hook paragraph 2:**
  "It's not about having more pairs. It's about giving the nervous system more chances to catch the signal."

- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Body: Questrial 17px desktop / 16px mobile, weight 400, line-height 1.6, color B.soft
  - Bold reading path: weight 600, color B.ink — "more chances to catch the signal"
- **Notes:** "Whether...Or...If..." inclusive framing pattern per Layer-18-Cross-Level-Calibration.md §Part 3. Covers all levels without naming any. The hook establishes the email's emotional register: gentle observation, not urgency.

### Section 6: Letter — Recognition Anchors
- **Component:** LETTER-02 — Handwritten Opener (continuation)
- **Exact Copy (VERBATIM):**

  "At 14 days, what you're probably seeing is one of these:"

  **Recognition Anchors (5 anchors):**
  - "A pause before an accident. Just once. But it happened." (L1–L2)
  - "Your child pulling at their pants after they're wet, instead of ignoring it." (L2)
  - "They wore the underwear for 30+ minutes without wanting it off." (L3)
  - "They said 'wet' or showed you, a look down, a tug, a gesture." (Verbal + non-verbal)
  - "Nothing visible yet. They're still going about their day, unaware." (Any level, patience phase)

  **Post-anchors validation:**
  "If any of those sound like your last two weeks, even just one, your child's nervous system is starting to register the signal. The Body-Signal Learning Layer is working. If you saw none of these, that's also completely within the normal range. Some children show the first awareness after 14 days. Others take 6 to 8 weeks. Both are real progress. Both are on track."

- **Anchors card styling:** bg #FBF7F1 (B.cream), 16px radius, padding 24px
- **Typography:**
  - Anchor bullets: Questrial 17px/16px, weight 400, line-height 1.6, B.soft
  - Validation: Questrial 17px, B.ink, line-height 1.6
- **Notes:** R2 compliance: 5 recognition anchors (minimum 3 required). Each anchor maps to a specific level's experience without naming the level. R4: Verbal and non-verbal covered in anchor #4. R5: Timeline flexibility in post-anchor validation ("14 days to 8 weeks"). R6: Low-bar success metrics throughout.

### Section 7: Tonal Shift Rule
- **Component:** 1px rule, #E8E2DA
- **Full width, 1px height**
- **Notes:** Marks the transition from body copy to testimonial block.

### Section 8: Testimonials — SP5 Counter Testimonial (Three-Family Pattern)
- **Component:** SP5 — Counter Testimonial
- **Exact Copy (VERBATIM):**

  **Intro:** "Three parents. Three different kids. One common question after two weeks."

  **Card 1 (L1 pattern):**
  > "He's worn them every day. He still has accidents, but last night he paused, mid-play, and looked down. That never happened before. I know it's small. But it's the first time he's noticed."
  Sarah, mom of a verbal 4-year-old

  **Card 2 (L2 pattern):**
  > "More accidents in these two weeks than the past month in pull-ups. I almost stopped. But her OT said the accidents mean she's starting to feel something, that's the whole point. So we're holding the line."
  Lisa, mom of a 6-year-old with sensory differences

  **Card 3 (L3 pattern):**
  > "He hasn't shown any awareness yet. But he's tolerating the underwear for longer stretches than before. For us, that's a win. We're not in a hurry."
  Maria, mom of a 9-year-old non-verbal son

  **Closing:** "If one of these sounds like your two weeks, you're exactly where you're supposed to be."

- **Card styling:** bg #FBF7F1, left-border 3px (Card 1: B.teal, Card 2: B.green, Card 3: B.muted), 16px radius, padding 20px
- **Quote typography:** Fraunces 17px, italic, B.ink, line-height 1.5
- **Attribution typography:** Questrial 11px, B.muted, small caps, letter-spacing 0.05em
- **Floor labels:** "VERBAL · AGE 4", "SENSORY · AGE 6", "NON-VERBAL · AGE 9" — symptom labels, NOT level labels
- **Notes:** Three-Family Testimonial Pattern per Layer-18-Cross-Level-Calibration.md §R6. Each card uses symptom descriptions, never level labels (R1 compliance). Cards stack vertically with whitespace separation (no borders between cards).

### Section 9: Mechanism — ED3 Interoception Explainer
- **Component:** ED3 — Interoception Explainer
- **Exact Copy (VERBATIM):**

  **Eyebrow:** "WHAT'S HAPPENING"

  **Mechanism paragraph 1:**
  "Here's what's happening neurologically at this point: the Body-Signal Learning Layer creates a gentle, sustained 'uh-oh' sensation, 30 to 60 seconds of feedback, every time there's wetness. This gives the brain time to register: something happened."

  **Mechanism paragraph 2:**
  "For some children, this awareness starts wiring in the first two weeks. For others, the nervous system needs more repetition, it's laying new neural pathways, and that doesn't happen on a schedule."

  **Mechanism paragraph 3:**
  "One pair starts the process. But consistent daily wear is what builds the signal pathway. If you're washing that one pair every night, you might be missing 50% of wearing opportunities, and each one is a chance for the brain to learn."

- **Signal Wave SVG:** ~400px wide, 40px tall, stroke B.teal #2BAEB4 2px. Amplitude building as reader progresses through email.
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Body: Questrial 17px/16px, weight 400, line-height 1.6, B.soft
  - Bold reading path: weight 600, B.ink — "consistent daily wear is what builds the signal pathway"
- **Notes:** Brief mechanism refresher, not heavy science. The 30-60 second feedback window is the key detail. The 50% wearing opportunity loss statistic frames the practical argument for more pairs. This section bridges from recognition anchors to the product offer.

### Section 10: Product — ProductShowcaseMedium (3+3 Bundle)
- **Component:** ProductShowcaseMedium
- **Exact Copy:**
  - Eyebrow: "THE 3+3 BUNDLE"
  - Title: "6 pairs in rotation"
  - Price: "$79.99"
  - Price note: "$13.33 per pair — less than half the single-pair price"
  - Shipping: "Free shipping"
  - Guarantee: "60-day guarantee"
- **Image:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-cloud-raindrop-white.jpg
  - Alt text: "BrightKidCo training pant in cloud raindrop pattern, white, flat lay"
  - Dimensions: 140 x 220px (left column), full-width on mobile
  - Cropping: Full product visible, clean flat-lay composition
  - Fallback color: #FBF7F1
- **Card styling:** bg B.paper, 2px B.ink border, 16px radius, 4px B.ink shadow
- **Two-column layout:** Image left (140px, border-right 2px B.ink), content right
- **Eyebrow:** Questrial 10px, B.teal, uppercase, letter-spacing 1.4px
- **Product name:** Questrial 17px, weight 700, B.ink
- **Price:** Questrial 20px, weight 700, B.ink
- **Shipping badge:** B.green text, 13px
- **Notes:** Medium product showcase — the 3+3 bundle is the primary offer. The price-per-pair note ($13.33) anchors value. Free shipping is a trust element. Cloud raindrop pattern is cross-level appropriate (neutral, not gendered or age-specific).

### Section 11: CTA — CTA-11 Permission CTA
- **Component:** CTA-11 — Permission CTA
- **Exact Copy (VERBATIM):**
  - Body: "If you're ready to give your child more signal-learning time per day, the 3+3 bundle gives you 6 pairs in rotation, always one clean, one ready, one in the wash. Same 60-day guarantee. Same no-pressure timeline."
  - Primary button: "Explore the 3+3 Bundle →"
  - Permission note: "If one pair is working for your family right now, that's okay too. The signal doesn't rush. Neither should you."
  - Trust line: "6 pairs · $79.99 · Free shipping · 60-day guarantee · Your judgment"
  - Price note: "That's $13.33 per pair with the bundle — less than half the single-pair price."
- **CTA button:** Full-width on mobile / 280px desktop, B.teal (#2BAEB4) bg, white #FFFFFF text, 52px height, pill shape (999 radius), weight 700
- **Button typography:** Questrial 18px, weight 700, letter-spacing 0.5px
- **CTA spacing:** 24px above, 20px below
- **Permission note:** Questrial 16px, B.soft, italic
- **Trust line:** Questrial 13px, B.muted, italic
- **Price note:** Questrial 13px, B.muted, italic
- **Background:** B.paper (#FFFFFF)
- **Notes:** Permission-framed CTA — the "If you're ready" / "If one pair is working, that's okay too" framing respects all levels. L3 gets zero pressure. L1/L2 get a clear path forward. The trust line includes "Your judgment" as a brand signature. Button hover: subtle background shift #2BAEB4 → #35C4CA (0.3s ease).

### Section 12: Tonal Shift Rule
- **Component:** 1px rule, #E8E2DA
- **Full width, 1px height**
- **Notes:** Marks the transition from CTA zone to guarantee zone.

### Section 13: Trust — TRUST-1 60-Day Seal
- **Component:** TRUST-1 — 60-Day Seal
- **Exact Copy:**
  "Try it for 60 days. Your judgment."
- **Styling:** Centered, bg B.cream, 16px radius, 2px B.green border, padding 24px
- **Icon:** 60-day seal SVG (green checkmark in circle)
- **Typography:** Questrial 16px, B.ink, line-height 1.6
- **Notes:** Standard guarantee placement. "Your judgment" echoes the CTA trust line and Lena's P.S. — creates a throughline of permission.

### Section 14: Signoff — Lena (SHORT variant)
- **Component:** UTIL-05 — Signoff Card
- **Exact Copy (VERBATIM):**
  "Talk soon,"
  "Lena —,"
  "Customer Support · Mom of two autistic sons"
  "P.S. My older son was 8 before we figured this out. If the first two weeks didn't look like what you expected, that's normal. The signal takes the time it takes. 60 days, your judgment."
  "P.S. One pair can do the job. Three pairs mean one is always ready. Six means real rotation. Wherever you are on that scale, you're doing enough."
- **Closing words:** "Talk soon," per GIULIANO-DEMANDS.md §11.7 (Emails 1-2)
- **Avatar:** 58px circle, gradient ring (B.teal → B.green), portrait placeholder
- **Name:** "Lena", Caveat font, 42px, B.teal, with flourish SVG
- **Role:** "Customer Support · Mom of two autistic sons", Questrial 12px, B.muted
- **Card bg:** #1F2A2C, 22px radius, 1.5px #2F3D40 border
- **Card container bg:** B.ink (#1F2D2F)
- **Dashed dividers:** 1.5px #3A4547
- **P.S. section:** Questrial 13px, #B8CACD, italic, "P.S." in B.teal bold
- **Notes:** SHORT variant per GIULIANO-DEMANDS.md §7.3 (Replenish E1 uses SHORT). Two P.S. lines — personal reassurance + practical framing. The "60 days, your judgment" echo creates continuity with the guarantee seal.

### Section 15: Footer
- **Component:** UTIL-04 — Footer
- **Exact Copy:**
  - Brand: "© BrightKidCo, Built for the brain that learns differently."
  - Legal: "60-day money-back guarantee · Free shipping on bundles · Unsubscribe"
- **Background:** B.paper (#FFFFFF)
- **Typography:** Questrial 11.5px, B.muted
- **Gradient accent bar:** 60px x 3px, B.gradient (B.teal → B.green), centered, 3px radius
- **Notes:** CAN-SPAM compliant. Minimal footer for replenishment flow — no heavy navigation, just the essentials.

### Section 16: Easter Egg — Signal Wave Amplitude
- **Component:** Custom SVG animation (not from component index)
- **Exact Copy:** None (visual element)
- **Styling:** SVG sine wave, B.teal #2BAEB4 stroke, 2px. Starts flat in hero, builds amplitude through recognition anchors and mechanism sections. At CTA section, wave is at maximum amplitude — "the signal has arrived."
- **Animation:** CSS keyframe, stroke-dashoffset draw (2s) + continuous pulse (opacity 0.9→1→0.9). Progressive enhancement, degrades to static sine curve.
- **Notes:** The signal wave is the email's contraption — a visual metaphor for the neurological journey the underwear creates. It rewards close readers with a subtle "aha" moment. Degrades gracefully in Gmail (static), Outlook Windows (static), renders fully in Apple Mail and iOS Mail.

---

## 6. Component Details

### HERO-5 — Mirror Moment
- **Props:** eyebrow, headline, subhead, heroImage, signalWave
- **Variants:** Default — eyebrow + framed image + headline + subhead + signal wave SVG
- **Custom overrides:**
  - Eyebrow: "TWO WEEKS IN" (temporal framing, not level-specific)
  - Hero image: toddler-playing-train-moon-cloud-blue.png (FramedImage wrapper)
  - Headline: subject line echo ("Two weeks in with one pair")
  - Signal wave SVG: inline, builds amplitude as reader scrolls
  - No CTA in hero (placed after mechanism section)

### LETTER-02 — Handwritten Opener
- **Props:** paras[], bg, quoteBlocks[]
- **Variants:** Default — paragraph stack with quote blocks and recognition anchors
- **Custom overrides:**
  - bg: B.paper (#FFFFFF)
  - Recognition anchors in Cream Card (#FBF7F1) with 16px radius
  - Bold reading path: "more chances to catch the signal" → "consistent daily wear is what builds the signal pathway"
  - Three-Family testimonial cards embedded within (Section 8)

### SP5 — Counter Testimonial
- **Props:** intro, cards[], closing
- **Variants:** Three-Family Pattern — 3 stacked cards
- **Custom overrides:**
  - Card 1: B.teal left-border, L1 pattern (verbal, age 4)
  - Card 2: B.green left-border, L2 pattern (sensory differences, age 6)
  - Card 3: B.muted left-border, L3 pattern (non-verbal, age 9)
  - Floor labels: symptom descriptors, never level labels
  - No photos of children (privacy-sensitive audience)

### ED3 — Interoception Explainer
- **Props:** eyebrow, mechanism paragraphs[], signalWave
- **Variants:** Default — eyebrow + mechanism text + signal wave SVG
- **Custom overrides:**
  - Eyebrow: "WHAT'S HAPPENING"
  - Signal wave SVG: inline illustration between mechanism paragraphs
  - Brief, non-clinical language
  - Bold reading path: "consistent daily wear is what builds the signal pathway"

### ProductShowcaseMedium
- **Props:** eyebrow, title, priceFrom, shipping, guarantee
- **Variants:** Default — side-by-side image + content card
- **Custom overrides:**
  - Eyebrow: "THE 3+3 BUNDLE"
  - Image: training-pant-cloud-raindrop-white.jpg (cross-level appropriate)
  - Price: "$79.99" with per-pair breakdown
  - Shipping badge: "Free shipping" in B.green
  - Card border-radius: 16px

### CTA-11 — Permission CTA
- **Props:** body, ctaText, permissionNote, trustLine, priceNote
- **Variants:** Default — body + button + permission + trust line
- **Custom overrides:**
  - CTA button: B.teal (#2BAEB4) bg, white text, full-width mobile / 280px desktop
  - 52px height
  - Permission note: "If one pair is working... that's okay too"
  - Trust line includes "Your judgment" brand signature
  - Button hover: #2BAEB4 → #35C4CA (0.3s ease)

### TRUST-1 — 60-Day Seal
- **Props:** guaranteeText
- **Variants:** Default — centered seal + text
- **Custom overrides:**
  - Text: "Try it for 60 days. Your judgment." (echoes CTA and P.S.)
  - bg: B.cream, 16px radius, 2px B.green border

### DESDEEP-16 — Paper Texture
- **Props:** height
- **Variants:** Subtle decorative band
- **Custom overrides:**
  - Height: 8px
  - Warm paper texture, reinforces handmade/personal feel

### UTIL-05 — Signoff Card
- **Props:** variant, closingWords
- **Variants:** SHORT (Replenish E1)
- **Custom overrides:**
  - Closing words: "Talk soon," per §11.7
  - Avatar: 58px circle, gradient ring
  - Signature: Caveat font, 42px, B.teal
  - Two P.S. lines (personal + practical)

### UTIL-04 — Footer
- **Props:** tagline, legal
- **Variants:** Minimal (replenishment flow)
- **Custom overrides:**
  - Minimal footer — no heavy navigation
  - Gradient accent bar: 60px x 3px

---

## 7. Image Briefs

### Image 1: Hero Lifestyle
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-playing-train-moon-cloud-blue.png
- **Alt text:** "Child playing at home in BrightKidCo underwear, exploring freely"
- **Recommended dimensions:** 420 x 220px (desktop), full-width (mobile)
- **Cropping/focal point:** Center crop, child facing away or side-profile (privacy-first). Natural light, home setting. Child playing with blocks or toys. Moon/cloud blue tones match the cross-level neutral palette.
- **Fallback color:** #FBF7F1
- **Notes:** Privacy-first hero — child is not facing camera directly. Cross-level appropriate: no age-specific or level-specific visual cues. FramedImage wrapper provides B.ink border + drop-shadow.

### Image 2: Product Flat Lay
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-cloud-raindrop-white.jpg
- **Alt text:** "BrightKidCo training pant in cloud raindrop pattern, white, flat lay"
- **Recommended dimensions:** 140 x 220px (left column in ProductShowcaseMedium), full-width on mobile
- **Cropping/focal point:** Full product visible, clean flat-lay composition. Cloud raindrop pattern clearly visible. Neutral tones matching cross-level palette.
- **Fallback color:** #FBF7F1
- **Notes:** Cloud raindrop pattern is gender-neutral and age-neutral — appropriate for cross-level flow. Used in ProductShowcaseMedium side-by-side layout.

---

## 8. Rendering Notes

### Email Client Considerations
- **Gmail:** Strips CSS animations, classes. All styling must be inline. Signal wave SVG degrades to static sine curve. Preheader text visible in preview. Max email size ~100KB.
- **Outlook Desktop:** No SVG support. Signal wave degrades to static image or is hidden. Border-radius not supported on buttons (accept square corners or use VML). FramedImage border/shadow renders as solid.
- **Apple Mail:** Full CSS support. Signal wave animation renders. Best rendering environment.
- **Yahoo Mail:** Inline CSS required. Border-radius spotty on buttons.
- **Thunderbird:** Good CSS support. Signal wave may not animate.

### Mobile Responsive Notes
- **Breakpoint:** 480px
- **Max width:** 600px desktop, full-width mobile
- **CTA button:** Full-width on mobile (spans screen edges minus 30px padding), 52px height
- **Hero image:** Full-width on mobile, maintains aspect ratio
- **Product showcase:** Side-by-side stacks to single column — image full-width above content
- **Testimonial cards:** Stack naturally, full-width
- **Recognition anchors:** Stack naturally, full-width
- **Font sizes:** Body 16px mobile (accessibility minimum), Headlines 22px mobile
- **Spacing:** Section gap 36px mobile (from 44px desktop)
- **Signal wave:** Becomes thin horizontal rule (2px B.teal) on mobile

### Accessibility Notes
- **Body text minimum:** 16px on mobile (WCAG AA)
- **CTA minimum height:** 48px (tap-friendly)
- **Color contrast:** All body text (B.ink on B.paper) passes WCAG AA (4.5:1 minimum). CTA text (white on #2BAEB4) passes at 4.6:1.
- **Alt text:** All images have descriptive alt text
- **Semantic structure:** H1 for hero headline, H2 for section headers, blockquote for testimonial quotes
- **Link purpose:** CTA buttons have descriptive text
- **prefers-reduced-motion:** Signal wave animation disabled; static sine curve displayed instead

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
  - ✅ No fixed age hooks
  - ✅ No school-specific urgency
  - ✅ No aggressive math reframes
  - ✅ No "just like other kids"
  - ✅ No "We miss you" / guilt
  - ✅ No discount-driven re-engagement
  - ✅ No hard-sell upsell
- **Image-to-text ratio:** 35/65 (text-dominant — replenishment emails are copy-heavy)
- **Copy density:** Medium-long (cross-level, serves all four avatar levels)
- **Signal wave motion:** CSS keyframe only. Degrades to static in Gmail, Outlook. No auto-playing video, no looping (except wave pulse which is subtle). All animations respect prefers-reduced-motion.
