# Wireframe: Winback Path A — E1 | GF (General Fallback)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Winback Path A (Flow 19) |
| **Position** | E1 — Day 0 (triggered when last purchase + 90 days no engagement) |
| **Level** | General Fallback (GF) — avatar_general, all 5 sub-groups (A-E) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e1-gf.md |
| **Strategy Map Entry** | flows.winback-a.emails.e1-gf |
| **Flow Signature** | winback-reengagement, compassionate re-anchor, dignity-first, permission-framed |
| **Level Calibration** | Hope/Realism 40/60, Urgency ZERO, Subject Line Observation hook, CTA Aggression LOW, Mechanism Density Medium, Email Length Medium (400-500w) |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM, PRODUCT, CTA, GUARANTEE, DECORATIVE |
| **Total Estimated Height** | ~3,800px (desktop) / ~4,100px (mobile) |

---

## 2. Strategy Box

**Big Idea:** "No guilt, re-anchor, re-educate — body-signal learning is non-linear." The 90-day gap is reframed as a normal part of the learning cycle, not a failure. The email validates whatever outcome the parent experienced, re-explains the interoception mechanism briefly, and leaves the door open for re-engagement or exit.

**Emotional Arc Position:** Position 1 of 3 in Winback A flow — The compassionate check-in. E1 is the first re-engagement after 90 days of silence. The parent may feel they "failed" at using the product or that the product "failed" their child. Both paths are validated as normal. The email replaces the original purchase context (excitement/hope) with a compassionate reality check.

**Component Selection Rationale:**
- HERO-9 (Whisper Tone): Low-intensity, non-intrusive hero. No lifestyle image — just quiet text treatment that signals "this isn't marketing." Appropriate for GF's 40/60 hope/realism ratio.
- LETTER-02 (Handwritten Opener): Personal letter format with peer opening. Lena as peer, not brand. The handwritten opener signals warmth without manipulation.
- SP-08 (Stacked Mini-Reviews): 5 recognition anchors presented as mini-stacks. Each anchor validates a different family experience. No single testimonial — GF needs cross-level coverage.
- EDU-3 (Interoception Explainer): Mechanism re-explanation. The "pathway doesn't build on a straight line" framing. Brief, non-condescending, science-grounded.
- ProductShowcaseSoft: Soft product presentation. The product is secondary to the emotional arc. Shown gently, not as a sales push.
- CTA-11 (Permission CTA): "Try again — 60 days, your judgment." Low-aggression, permission-framed. No button pressure. The parent decides.
- TRUST-1 (60-Day Seal): Compact trust anchor. The original guarantee still stands. Risk removal without sales energy.
- DESDEEP-4 (The Minimalist Statement): Decorative element — minimal, non-distracting. Reinforces the quiet, dignified tone.

**Differentiation Note:** Winback A E1 GF uses the whisper-tone hero (HERO-9) and stacked mini-reviews (SP-08) for cross-level recognition coverage. This differs from E2 GF (which uses HERO-17 Social Proof Hero with Three-Family testimonials) and E3 GF (which uses HERO-1 Curiosity Gap). The GF wireframe uses the softest visual language in the winback flow — no urgency indicators, no countdown timers, no bright accent colors.

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — CTA button fill, accent highlights, link text
- Secondary: #5DD07A (B.green) — Trust indicators, guarantee badge border
- Accent: #B8A88A (Warm Wheat) — Decorative elements, quote marks
- Background: #FBF7F1 (B.cream) — Overall email background
- Text: #1F2D2F (B.ink) — Primary body text, headings
- Page Background: #FFFFFF (B.paper) — Email canvas
- Secondary Text: #4A6568 (B.soft) — Body copy, secondary paragraphs
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer, citations
- CTA Text on Dark: #FFFFFF — CTA button text
- Cream Card: #FBF7F1 — Recognition anchor card backgrounds
- Divider: #E8E2DA — Section dividers, borders
- Mechanism BG: #F8F6F3 — Mechanism section background

**Typography:**
- Heading: Questrial, 28px desktop / 22px mobile, weight 700, line-height 1.15, letter-spacing -0.02em
- Body: Questrial, 17px desktop / 16px mobile, weight 400, line-height 1.6, color B.soft
- Accent: Fraunces, 20px desktop / 18px mobile, weight 400 italic, line-height 1.4, color B.ink (for pull-quotes)
- Eyebrow: Questrial, 10.5px, weight 700, letter-spacing 2px, text-transform uppercase, color B.teal
- CTA button: Questrial, 18px, weight 700, white #FFFFFF
- Recognition anchor: Questrial, 15px, weight 400, color B.ink
- Footer: Questrial, 11px, weight 400, color B.muted

**Border Radius:** Cards: 16px, Buttons: 999px (pill for primary CTA), Images: 16px, Small: 12px
**Shadow:** Primary: 4px 4px 0 B.ink (card shadow)
**Spacing:** Section gap: 44px, H-padding: 30px desktop / 20px mobile, Card padding: 24/22px, Element gap: 16px

---

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────────────┐ │
│ │                  [PREHEADER BAR]                     │ │ 36px
│ │  Whether your child showed signs or didn't, both    │ │
│ │  tell you something.                                │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              [HEADER — Logo + From Name]             │ │ 80px
│ │         BrightKidCo · Lena from BrightKidCo         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │        HERO-9: Whisper Tone                          │ │ ~200px
│ │                                                      │ │
│ │  [Eyebrow: "WINBACK · DAY 0"]                       │ │
│ │  [Questrial 10.5px, B.teal, uppercase, 2px spacing] │ │
│ │                                                      │ │
│ │  "How's it going with the body signals?"            │ │
│ │   [H1 — Questrial 28px/22px, B.ink, -0.02em]       │ │
│ │                                                      │ │
│ │  "It's been 90 days since your order. So I'm        │ │
│ │   checking in, no pressure attached."                │ │
│ │   [Subhead — Questrial 17px, B.soft, 1.5 line-h]   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── DESDEEP-4: THE MINIMALIST STATEMENT ─────────┐ │ 8px
│ │  [Subtle horizontal rule in B.teal]                  │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-02: Handwritten Opener — Hook           │ │ ~600px
│ │                                                      │ │
│ │  "Hey there,"                                       │ │
│ │  [Questrial 17px, B.ink, italic]                    │ │
│ │                                                      │ │
│ │  "It's been about 90 days since your order. So I'm  │ │
│ │   checking in, no pressure attached."                │ │
│ │                                                      │ │
│ │  "Whether your child showed their first glimmer of  │ │
│ │   awareness or you're still waiting for any sign,   │ │
│ │   both of those tell you something useful. And      │ │
│ │   neither means you did anything wrong."            │ │
│ │                                                      │ │
│ │  "If you're reading this thinking 'we paused after  │ │
│ │   a week' or 'it didn't click' or 'I'm not sure if │ │
│ │   it's working', that's exactly why I'm writing."   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       SP-08: Stacked Mini-Reviews — Recognition      │ │ ~700px
│ │       Anchors                                         │ │
│ │                                                      │ │
│ │  [Eyebrow: "WHAT PARENTS TELL ME"]                   │ │
│ │  [Questrial 10.5px, B.teal, uppercase]              │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 1 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.teal        │   │ │
│ │  │  16px radius, padding 20px                    │   │ │
│ │  │                                              │   │ │
│ │  │  "He wore them for a few days, nothing        │   │ │
│ │  │   changed, we stopped."                       │   │ │
│ │  │  [Questrial 15px, B.ink]                      │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 2 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.green       │   │ │
│ │  │                                              │   │ │
│ │  │  "She showed a tiny pause in week two, then  │   │ │
│ │  │   nothing for a month."                       │   │ │
│ │  │  [Questrial 15px, B.ink]                      │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 3 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.muted       │   │ │
│ │  │                                              │   │ │
│ │  │  "He never seemed to notice, even after      │   │ │
│ │  │   weeks."                                    │   │ │
│ │  │  [Questrial 15px, B.ink]                      │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 4 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.teal        │   │ │
│ │  │                                              │   │ │
│ │  │  "We had a good week, then regression, then  │   │ │
│ │  │   we gave up."                               │   │ │
│ │  │  [Questrial 15px, B.ink]                      │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 5 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.green       │   │ │
│ │  │                                              │   │ │
│ │  │  "I'm not even sure what 'working' should    │   │ │
│ │  │   look like."                                │   │ │
│ │  │  [Questrial 15px, B.ink]                      │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       EDU-3: Interoception Explainer                  │ │ ~500px
│ │                                                      │ │
│ │  [Eyebrow: "WHY THE PATHWAY MATTERS"]                │ │
│ │  [Questrial 10.5px, B.teal, uppercase]              │ │
│ │                                                      │ │
│ │  "If any of those sound familiar, here's what most  │ │
│ │   parents don't realize: the interoception pathway  │ │
│ │   doesn't build on a straight line. It builds in    │ │
│ │   cycles. Pauses are part of the process. Some weeks│ │
│ │   the signal registers. Some weeks the nervous      │ │
│ │   system recalibrates. Both are normal."            │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [MECHANISM DIAGRAM — SVG/GIF]                │   │ │
│ │  │                                              │   │ │
│ │  │  Non-linear path:                            │   │ │
│ │  │  ───╱╲──╱╲──╱──────╱╲──╱╲╱╲──╱╲──          │   │ │
│ │  │  "The pathway doesn't build on a straight     │   │ │
│ │  │   line."                                     │   │ │
│ │  │  [B.teal stroke, 2px]                         │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "For some kids, the first sign comes in 2-4 weeks  │ │
│ │   of consistent wear. For others, it takes 8-12     │ │
│ │   weeks, or longer. And for some, the first sign    │ │
│ │   isn't 'I need to go.' It's smaller: a pause. A   │ │
│ │   look down. A hand toward the pants. A moment of   │ │
│ │   stillness where there used to be none."           │ │
│ │                                                      │ │
│ │  "Those aren't failures. Those are the nervous      │ │
│ │   system starting to receive information it's been  │ │
│ │   missing."                                         │ │
│ │  [Bold reading path: "starting to receive           │ │
│ │   information"]                                     │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-02: Action Guidance Block                │ │ ~400px
│ │                                                      │ │
│ │  "Here's what I'd suggest if you're unsure:"        │ │
│ │  [Questrial 17px, B.ink, bold]                      │ │
│ │                                                      │ │
│ │  "If you paused because it didn't seem to work,     │ │
│ │   try 2 hours of wear daily for 2-3 weeks.          │ │
│ │   Consistency matters more than intensity."          │ │
│ │                                                      │ │
│ │  "If you saw something, even once, that's real.     │ │
│ │   Build on it."                                     │ │
│ │                                                      │ │
│ │  "If you didn't see anything, that's also real.     │ │
│ │   Some nervous systems need more time."              │ │
│ │                                                      │ │
│ │  "Your original 60-day guarantee still stands."     │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       ProductShowcaseSoft — Gentle Product            │ │ ~300px
│ │       Introduction                                   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [PRODUCT IMAGE — Flat Lay]                    │   │ │
│ │  │  training-pant-fox-woodland-white.jpg          │   │ │
│ │  │  180 x 240px, rounded 16px                     │   │ │
│ │  │  border: 1px B.ink                             │   │ │
│ │  │  Shadow: 4px 4px 0 B.ink                      │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "The 3+3 Bundle ($79.99) is still available."      │ │
│ │   [Questrial 17px, B.ink]                           │ │
│ │                                                      │ │
│ │  "1 Pair ($34.99) is also available if you want     │ │
│ │   to test before committing."                       │ │
│ │   [Questrial 15px, B.soft]                          │ │
│ │                                                      │ │
│ │  "Use code WELCOME10 at checkout for 10% off."      │ │
│ │   [Questrial 15px, B.teal, bold]                    │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       CTA-11: Permission CTA                         │ │ ~280px
│ │                                                      │ │
│ │  [ Get the 3+3 Bundle, $79.99 with free shipping → ] │ │
│ │  [Full-width, B.teal #2BAEB4 bg, white text         │ │
│ │   52px height, pill shape]                           │ │
│ │                                                      │ │
│ │  "That's $13.33 per pair with the bundle — less     │ │
│ │   than half the single-pair price."                  │ │
│ │   [Questrial 13px, B.muted, italic]                  │ │
│ │                                                      │ │
│ │  [ or try 1 Pair for $34.99 ]                        │ │
│ │  [Text link, B.teal, underline]                      │ │
│ │                                                      │ │
│ │  "Hit reply and tell me how it's going."            │ │
│ │   [Questrial 14px, B.soft, italic]                   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       TRUST-1: 60-Day Seal                            │ │ ~120px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [SEAL — Circular badge]                      │   │ │
│ │  │  bg: B.cream, border: 2px B.green             │   │ │
│ │  │  "60 DAYS · YOUR JUDGMENT"                     │   │ │
│ │  │  [Questrial 11px, B.green, centered]          │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "Your original 60-day guarantee still stands."     │ │
│ │  "If the underwear didn't work for your child,      │ │
│ │   the guarantee covers it. No questions.             │ │
│ │   Your judgment."                                    │ │
│ │  [Questrial 14px, B.soft, centered]                  │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       SIGNOFF — Lena Sign-Off (MEDIUM variant)       │ │ ~300px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  "With care,"                                │   │ │
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
│ │  │  P.S. If you hit reply, you get me, not a   │   │ │
│ │  │  bot. I read everything. Sometimes it takes  │   │ │
│ │  │  me a day to answer, but I will.             │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.ink, card bg: #1F2A2C, 22px radius]        │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │                 FOOTER                               │ │ ~180px
│ │                                                      │ │
│ │  BrightKidCo · Brooklyn, NY 11201                   │ │
│ │  [Questrial 11px, B.muted]                           │ │
│ │                                                      │ │
│ │  No longer want these emails? Unsubscribe or        │ │
│ │  Manage Preferences                                  │ │
│ │  [Questrial 11px, B.muted]                           │ │
│ │                                                      │ │
│ │  Built for the brain that learns differently.        │ │
│ │  [Questrial 12px, B.teal, italic]                    │ │
│ │                                                      │ │
│ │  © 2026 BrightKidCo. All rights reserved.           │ │
│ │  [Questrial 10px, B.muted]                           │ │
│ │                                                      │ │
│ │  [Gradient accent bar: 60px x 3px]                   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│  ★ Easter Egg: The 5 recognition anchors span all      │
│    levels — L1 ("wore days, stopped"), L2 ("tiny       │
│    pause, then nothing"), L3 ("never seemed to         │
│    notice"), cross-level regression ("good week,       │
│    then gave up"), and universal uncertainty ("not     │
│    sure what working should look like").               │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Technique Specs

### Section 1: Preheader Bar
- **Component:** UTIL-06 — Preheader Bar
- **Exact Copy:** "Whether your child showed signs or didn't, both tell you something."
- **Background:** #F6F2EA
- **Typography:** Questrial 11px, italic, B.muted
- **Padding:** 6px 20px, centered
- **Notes:** 61 chars. Inclusive validation frame. Sets the no-guilt tone before the email body loads. Cross-level safe — no urgency pressure.

### Section 2: Header
- **Component:** UTIL-08 — Nav Bar
- **Exact Copy:** "Lena from BrightKidCo" (from name)
- **Image:** BrightKidCo logo, 34px height
- **Background:** B.paper (#FFFFFF)
- **Padding:** 24px 20px 0, centered
- **Notes:** Consistent with all winback flow headers.

### Section 3: Hero — HERO-9 Whisper Tone
- **Component:** HERO-9 — Whisper Tone
- **Exact Copy:**
  - Eyebrow: "WINBACK · DAY 0"
  - Headline: "How's it going with the body signals?"
  - Subhead: "It's been 90 days since your order. So I'm checking in, no pressure attached."
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Headline: Questrial 28px desktop / 22px mobile, weight 700, letter-spacing -0.02em, color B.ink
  - Subhead: Questrial 17px, weight 500, color B.soft, line-height 1.5
  - Eyebrow: Questrial 10.5px, weight 700, letter-spacing 2px, uppercase, B.teal
- **Padding:** 44px 30px (desktop) / 32px 20px (mobile)
- **Notes:** Whisper tone hero — no image, no visual noise. The question format ("How's it going?") signals a peer check-in, not a marketing re-engagement. The 90-day acknowledgment is honest and direct. No guilt language.

### Section 4: Minimalist Statement Band
- **Component:** DESDEEP-4 — The Minimalist Statement
- **Exact Copy:** None (decorative)
- **Height:** 8px
- **Element:** Subtle horizontal rule in B.teal, 60px width, centered
- **Notes:** Minimal decorative element. Signals transition from hero to body copy. Non-distracting.

### Section 5: Letter — Handwritten Opener (Hook)
- **Component:** LETTER-02 — Handwritten Opener
- **Exact Copy (VERBATIM):**

  **Greeting:** "Hey there,"

  **Hook paragraph 1:** "It's been about 90 days since your order. So I'm checking in, no pressure attached."

  **Hook paragraph 2:** "Whether your child showed their first glimmer of awareness or you're still waiting for any sign, both of those tell you something useful. And neither means you did anything wrong."

  **Hook paragraph 3:** "If you're reading this thinking 'we paused after a week' or 'it didn't click' or 'I'm not sure if it's working', that's exactly why I'm writing. The body-signal learning pathway doesn't work the same way for every child."

- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Greeting: Questrial 17px, B.ink, italic
  - Body: Questrial 17px desktop / 16px mobile, weight 400, line-height 1.6, color B.soft
- **Padding:** 0 30px (desktop) / 0 20px (mobile)
- **Notes:** Peer opening, no-guilt framing. "Hey there" is Lena speaking as a person, not a brand. The "Whether...Or..." structure validates both outcomes (signs vs. no signs). "Neither means you did anything wrong" is the guilt absolution anchor.

### Section 6: Stacked Mini-Reviews (Recognition Anchors)
- **Component:** SP-08 — Stacked Mini-Reviews
- **Exact Copy (VERBATIM — 5 recognition anchors):**

  **Card 1:** "He wore them for a few days, nothing changed, we stopped."
  **Card 2:** "She showed a tiny pause in week two, then nothing for a month."
  **Card 3:** "He never seemed to notice, even after weeks."
  **Card 4:** "We had a good week, then regression, then we gave up."
  **Card 5:** "I'm not even sure what 'working' should look like."

- **Card styling:** bg #FBF7F1, left-border 3px (alternating B.teal / B.green / B.muted / B.teal / B.green), 16px radius, padding 20px
- **Card typography:** Questrial 15px, weight 400, color B.ink
- **Eyebrow:** "WHAT PARENTS TELL ME" — Questrial 10.5px, B.teal, uppercase
- **Background:** B.paper (#FFFFFF)
- **Padding:** 44px 30px (desktop) / 32px 20px (mobile)
- **Notes:** 5 recognition anchors covering all levels (L1-L3) + universal uncertainty. R2 compliance: 5 anchors (minimum 3-5). R1 compliance: No level labels, symptom-only recognition. These are the "things parents tell me" — Lena's social proof. No attribution needed (these are anonymous voices, not testimonials).

### Section 7: Interoception Explainer (Mechanism)
- **Component:** EDU-3 — Interoception Explainer
- **Exact Copy (VERBATIM):**

  "If any of those sound familiar, here's what most parents don't realize: the interoception pathway doesn't build on a straight line. It builds in cycles. Pauses are part of the process. Some weeks the signal registers. Some weeks the nervous system recalibrates. Both are normal."

  **Mechanism diagram caption:** "The pathway doesn't build on a straight line."

  "For some kids, the first sign comes in 2-4 weeks of consistent wear. For others, it takes 8-12 weeks, or longer. And for some, the first sign isn't 'I need to go.' It's smaller: a pause. A look down. A hand toward the pants. A moment of stillness where there used to be none."

  "Those aren't failures. Those are the nervous system starting to receive information it's been missing."

- **Section background:** #F8F6F3 (light gray)
- **Eyebrow:** "WHY THE PATHWAY MATTERS" — Questrial 10.5px, B.teal, uppercase
- **Diagram:** Non-linear SVG path in B.teal, 2px stroke. Caption below in Questrial 13px, B.soft, italic.
- **Typography:**
  - Body: Questrial 17px, weight 400, line-height 1.6, color B.soft
  - Bold reading path: weight 600, color B.ink — "starting to receive information"
- **Padding:** 44px 30px (desktop) / 32px 20px (mobile)
- **Notes:** R5 compliance: "2-4 weeks... 8-12 weeks... or longer." "The pathway doesn't build on a straight line." "Pauses are part of the process." R6 compliance: Success defined as "a pause, a look down, a hand toward the pants, a moment of stillness." No fixed timeline promises.

### Section 8: Action Guidance Block
- **Component:** LETTER-02 (continuation)
- **Exact Copy (VERBATIM):**

  "Here's what I'd suggest if you're unsure:"

  "If you paused because it didn't seem to work, try 2 hours of wear daily for 2-3 weeks. Consistency matters more than intensity. The wetness signal needs repetition before the brain learns to recognize it. Pull-ups wick that signal away completely, so if your child is still in pull-ups during the day, the learning window narrows."

  "If you saw something, even once, that's real. Build on it."

  "If you didn't see anything, that's also real. Some nervous systems need more time. And some children may need to try alongside other approaches."

  "Your original 60-day guarantee still stands. If the underwear didn't work for your child, the guarantee covers it. No questions. Your judgment."

- **Background:** B.paper (#FFFFFF)
- **Typography:** Questrial 17px, weight 400, line-height 1.6, color B.soft. Bold header in B.ink.
- **Padding:** 0 30px (desktop) / 0 20px (mobile)
- **Notes:** Three-path guidance: (1) paused → try 2 hours daily, (2) saw something → build on it, (3) saw nothing → that's real too. V9 compliance: "Pull-ups wick that signal away completely." V12 compliance: "No questions. Your judgment."

### Section 9: Product Introduction (Soft)
- **Component:** ProductShowcaseSoft
- **Exact Copy (VERBATIM):**

  "The **3+3 Bundle ($79.99)** is still available."

  "1 Pair ($34.99) is also available if you want to test before committing."

  "Use code **WELCOME10** at checkout for 10% off."

- **Image:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-fox-woodland-white.jpg
  - Alt text: "BrightKidCo training pants, woodland fox pattern, flat lay"
  - Dimensions: 180 x 240px
  - Border-radius: 16px
  - Border: 1px B.ink
  - Shadow: 4px 4px 0 B.ink
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Product name: Questrial 17px, B.ink, bold
  - Price: Questrial 15px, B.soft
  - Code: Questrial 15px, B.teal, bold
- **Padding:** 44px 30px (desktop) / 32px 20px (mobile)
- **Notes:** Soft product presentation. Product is secondary to the emotional arc. No aggressive upsell language. The 3+3 Bundle is mentioned first but the 1-pair option is equally prominent. WELCOME10 auto-applies to remove friction.

### Section 10: Permission CTA
- **Component:** CTA-11 — Permission CTA
- **Exact Copy (VERBATIM):**

  **Primary CTA:** "Get the 3+3 Bundle, $79.99 with free shipping"

  **Fine print:** "That's $13.33 per pair with the bundle — less than half the single-pair price."

  **Secondary CTA:** "or try 1 Pair for $34.99"

  **Reply invite:** "Hit reply and tell me how it's going."

- **Primary CTA styling:** Full-width, B.teal #2BAEB4 bg, white #FFFFFF text, 52px height, pill shape (border-radius 999px), Questrial 18px bold
- **Secondary CTA styling:** Text link, B.teal, underline, Questrial 14px
- **Reply invite:** Questrial 14px, B.soft, italic
- **Background:** B.paper (#FFFFFF)
- **Padding:** 24px 30px (desktop) / 20px 20px (mobile)
- **Notes:** Permission-framed CTA. "Hit reply" is the secondary action — builds engagement and feeds GF sub-group migration logic. V15 compliance: Lena sign-off as trust lever.

### Section 11: 60-Day Guarantee Seal
- **Component:** TRUST-1 — 60-Day Seal
- **Exact Copy (VERBATIM):**

  "Your original 60-day guarantee still stands. If the underwear didn't work for your child, the guarantee covers it. No questions. Your judgment."

- **Seal:** Circular badge, bg B.cream, border 2px B.green, text "60 DAYS · YOUR JUDGMENT" in Questrial 11px, B.green, centered
- **Body text:** Questrial 14px, B.soft, centered
- **Background:** B.paper (#FFFFFF)
- **Padding:** 32px 30px
- **Notes:** Trust anchor near CTA. V8 compliance: "Your original 60-day guarantee still stands." Permission-not-to-buy reinforced: "Your judgment."

### Section 12: Lena Sign-Off (MEDIUM)
- **Component:** SIGNOFF — Medium variant
- **Exact Copy (VERBATIM):**

  "With care,"

  "Lena ——"

  "Customer Support · Mom of two autistic sons"

  **P.S.:** "If you hit reply, you get me, not a bot. I read everything. Sometimes it takes me a day to answer, but I will."

- **Background:** B.ink (#1F2D2F), card bg #1F2A2C, 22px radius
- **Typography:**
  - "With care,": Questrial 16px, B.ink (on dark card, light text)
  - "Lena": Caveat font, 42px, B.teal
  - Subtitle: Questrial 12px, B.muted
  - P.S.: Questrial 14px, light text on dark bg
- **Padding:** 32px 30px
- **Notes:** Medium variant. "With care" winback sign-off. Reply invitation in P.S. builds trust and engagement.

### Section 13: Footer
- **Component:** UTIL-04 — Footer
- **Exact Copy (VERBATIM):**

  "BrightKidCo · Brooklyn, NY 11201"

  "No longer want these emails? Unsubscribe or Manage Preferences"

  "Built for the brain that learns differently."

  "© 2026 BrightKidCo. All rights reserved."

- **Background:** B.paper (#FFFFFF)
- **Typography:** Questrial 11px, B.muted. Tagline: Questrial 12px, B.teal, italic.
- **Gradient accent bar:** 60px x 3px, B.teal to B.green
- **Padding:** 32px 30px
- **Notes:** Standard footer. Physical address per Klaviyo settings.

---

## 6. Copy Blocks

### Block: Preheader
Whether your child showed signs or didn't, both tell you something.

### Block: Subject Line
How's it going with the body signals?

### Block: Hero Title
How's it going with the body signals?

### Block: Hero Subhead
It's been 90 days since your order. So I'm checking in, no pressure attached.

### Block: Letter Opening
Hey there,

It's been about 90 days since your order. So I'm checking in, no pressure attached.

Whether your child showed their first glimmer of awareness or you're still waiting for any sign, both of those tell you something useful. And neither means you did anything wrong.

If you're reading this thinking "we paused after a week" or "it didn't click" or "I'm not sure if it's working", that's exactly why I'm writing. The body-signal learning pathway doesn't work the same way for every child.

### Block: Recognition Anchors
Some things parents tell me:

, He wore them for a few days, nothing changed, we stopped.
, She showed a tiny pause in week two, then nothing for a month.
, He never seemed to notice, even after weeks.
, We had a good week, then regression, then we gave up.
, I'm not even sure what "working" should look like.

### Block: Mechanism
If any of those sound familiar, here's what most parents don't realize: the interoception pathway doesn't build on a straight line. It builds in cycles. Pauses are part of the process. Some weeks the signal registers. Some weeks the nervous system recalibrates. Both are normal.

For some kids, the first sign comes in 2-4 weeks of consistent wear. For others, it takes 8-12 weeks, or longer. And for some, the first sign isn't "I need to go." It's smaller: a pause. A look down. A hand toward the pants. A moment of stillness where there used to be none.

Those aren't failures. Those are the nervous system starting to receive information it's been missing.

### Block: Action Guidance
Here's what I'd suggest if you're unsure:

If you paused because it didn't seem to work, try 2 hours of wear daily for 2-3 weeks. Consistency matters more than intensity. The wetness signal needs repetition before the brain learns to recognize it. Pull-ups wick that signal away completely, so if your child is still in pull-ups during the day, the learning window narrows.

If you saw something, even once, that's real. Build on it.

If you didn't see anything, that's also real. Some nervous systems need more time. And some children may need to try alongside other approaches.

Your original 60-day guarantee still stands. If the underwear didn't work for your child, the guarantee covers it. No questions. Your judgment.

### Block: Product Introduction
The **3+3 Bundle ($79.99)** is still available.

1 Pair ($34.99) is also available if you want to test before committing.

Use code **WELCOME10** at checkout for 10% off.

### Block: CTA Button Text
Get the 3+3 Bundle, $79.99 with free shipping

### Block: Secondary CTA
or try 1 Pair for $34.99

### Block: Guarantee Text
Your original 60-day guarantee still stands. If the underwear didn't work for your child, the guarantee covers it. No questions. Your judgment.

### Block: Signoff
With care,

Lena ——

Customer Support · Mom of two autistic sons

P.S. If you hit reply, you get me, not a bot. I read everything. Sometimes it takes me a day to answer, but I will.

### Block: Footer
BrightKidCo · Brooklyn, NY 11201
No longer want these emails? Unsubscribe or Manage Preferences
Built for the brain that learns differently.
© 2026 BrightKidCo. All rights reserved.

---

## 7. Image Briefs

### Image: Product Flat Lay
- **Source:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-fox-woodland-white.jpg
- **Display:** 180px x 240px
- **Border-radius:** 16px
- **Border:** 1px B.ink (#1F2D2F)
- **Box-shadow:** 4px 4px 0 B.ink (#1F2D2F)
- **Context:** Product introduction section. Shown softly, not as a sales hero. Positioned to the left of product text.
- **Overlay:** None
- **Alt text:** "BrightKidCo training pants, woodland fox pattern, flat lay on neutral surface"

### Image: Lifestyle Reference (Optional)
- **Source:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-backpack-moon-cloud-blue.png
- **Display:** Not used in primary layout. Reserved for A/B test variant where a lifestyle image replaces the whisper-tone hero.
- **Alt text:** "Child with backpack, calm moment, warm tones"

---

## 8. Render Notes

### Dark Mode
- Background inversions: B.cream (#FBF7F1) → #1A1A1A, B.paper (#FFFFFF) → #121212
- Text color inversions: B.ink (#1F2D2F) → #E0E0E0, B.soft (#4A6568) → #B0B0B0
- Border adjustments: B.ink borders → #3A3A3A
- Image handling: Images retain original colors. Product flat lay has neutral background that works in dark mode.

### Responsive
- Breakpoint: 320px (minimum supported)
- Behavior at 320px: Headline drops to 22px, body to 16px, horizontal padding drops to 20px. Recognition anchor cards stack vertically. Product image scales to 140px width. CTA button remains full-width.
- Behavior at 420px: Default rendering as specified.
- Behavior at 600px+: Content centers at 420px max-width. Background extends to full width. No desktop-specific layout changes.

### Email Client Compatibility
- Outlook: MSO conditional comments for background colors. B.cream background on body tag for Outlook fallback. Pill button uses VML for Outlook rendering.
- Gmail: CSS animation stripped but layout unaffected. Background colors on div elements render correctly. Hero text renders at specified sizes.
- Apple Mail: Supports CSS animations. Mechanism SVG diagram renders correctly. Dark mode auto-inverts via `prefers-color-scheme`.
- Mobile clients: Single-column layout. Touch targets minimum 44px. Preheader truncation at 90 characters in Gmail/iOS — key message fits.

### Special Instructions
- The 5 recognition anchors (SP-08) are the core of this email's emotional strategy. They must render as visually distinct cards, not as a bulleted list.
- The mechanism SVG diagram (non-linear pathway) should be a simple inline SVG, not an external image. Maximum width 360px.
- The "With care" sign-off uses Caveat font for "Lena" signature — ensure web font loads or fallback to cursive.
- Reply-to address: support@brightkidco.com (Lena's inbox, not a no-reply address).
- Suppression: This email pauses ALL other nurture flows while Winback A is active.
