# Wireframe: FAQ/Objection Library — E3 | Cross-Level

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | FAQ/Objection Library (Flow 21) |
| **Position** | E3 — "Why won't my child just use the potty?" (Power Struggle + Refusal + Bathroom Fear) |
| **Level** | Cross-Level (serves L1, L2, L3, GF) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/faq-library/faq-21-e3.md |
| **Strategy Map Entry** | flows.faq-library.emails.e3 |
| **Flow Signature** | education-library |
| **R1-R6 Compliance** | Cross-level: symptom over label, 3-5 recognition anchors, age ranges, verbal/non-verbal, timeline flexibility, low-bar success |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM/EDUCATION, PRODUCT, CTA, GUARANTEE/TRUST, DECORATIVE |
| **Total Estimated Height** | ~3,200px (desktop) / ~3,600px (mobile) |

---

## 2. Strategy Box

**Big Idea:** "The protective curve." A gentle, protective visual metaphor — like a parent's arm around a child — cradles the entire email. The email itself is a safe container where no pressure exists. Inside that curve, a small, steady signal pulse travels upward, from overwhelm toward recognition, proving that learning happens without force.

**Emotional Arc Position:** Objection resolution — moving from "my child fights everything" to "their nervous system is protecting them, here's how we work with it, not against it." This is the deepest empathy email in the FAQ library, addressing the most emotionally charged objections (power struggle, refusal, bathroom fear).

**Component Selection Rationale:**
- HERO-10 (Bold Declaration): Bold, direct headline that names the three objection clusters without sugarcoating. "Your child isn't stubborn. Their nervous system is protecting them."
- LETTER-09 (Double Column): Two-column layout for the three objection clusters — visual separation that mirrors the three distinct responses (hold, scream, rip off). Double column allows parallel processing.
- SP-03 (Stat Row): Horizontal stat row — "60-Day Guarantee" / "30-60 second signal" / "No bathroom required" — scannable trust signals before the deep-dive mechanism.
- EDU-12 (Comparison Matrix): Comparison matrix — pull-ups vs cotton underwear vs BSL underwear. Visual proof of why existing approaches fail.
- ProductShowcaseFull: Full product presentation — the mechanism is most compelling here because it directly addresses "no bathroom required" and "no compliance needed."
- CTA-5 (Product CTA): Product-focused CTA — "Learn how the Body-Signal Layer works with any child." After three emails of mechanism education, the CTA can be more direct.
- TRUST-2 (Guarantee Detail Cards): Detailed guarantee cards — three specific scenarios (no pause, no look, no moment) with full refund promise. Maximum risk reversal for the most resistant reader.
- DESDEEP-6 (The Color Block): Decorative color block treatment — soft, muted blocks that create visual warmth without clinical precision. The "safe container" feeling.

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — CTA buttons, accent highlights, signal dots
- Secondary: #5DD07A (B.green) — Success indicators, secondary accents, signal path
- Accent: #FFD866 — Badge backgrounds
- Background: #FBF7F1 (B.cream) — Warm section backgrounds, protective curve
- Text: #1F2D2F (B.ink) — Primary body text, headings
- Page Background: #FFFFFF (B.paper) — Email canvas
- Secondary Text: #4A6568 (B.soft) — Body copy
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer
- CTA Text on Dark: #D8F57C (Lime green) — CTA button text on dark backgrounds
- Protective Curve: #D4C9B8 (Muted taupe) — Barely visible border, "whisper of containment"

**Typography:**
- Heading: Questrial, 32px desktop / 24px mobile, weight 700, line-height 1.15, letter-spacing -0.5px
- Body: Questrial, 17px desktop / 16px mobile, weight 400, line-height 1.7, color B.soft
- Accent: Fraunces, 24px desktop / 20px mobile, weight 400 italic, line-height 1.4, color B.ink (pull quotes)
- Eyebrow: Questrial, 10.5px, weight 700, letter-spacing 2px, text-transform uppercase, color B.teal

**Border Radius:** Cards: 16px, Buttons: 999px (pill), Images: 20px, Small: 12px, Outer shell: 48px (protective curve)
**Shadow:** Primary: 6px 6px 0 B.ink, Secondary: 3px 3px 0 B.ink, Testimonial: ultra-soft (2px 2px 0 B.ink at 20%)
**Spacing:** Section gap: 44px, H-padding: 22px, Card padding: 24/22px, Element gap: 16px

---

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────────────┐
│  ╔══════════════════════════════════════════════════════╗ │
│  ║          PROTECTIVE CURVE BORDER                     ║ │ 48px radius
│  ║  (SVG border-radius container, faint taupe #D4C9B8) ║ │ on outer
│  ║  Creates psychological safety — the email itself    ║ │ shell
│  ║  is a safe container where no pressure exists.      ║ │
│  ╠══════════════════════════════════════════════════════╣ │
│  ║                                                      ║ │
│  ║  ┌──────────────────────────────────────────────┐   ║ │
│  ║  │                  [PREHEADER BAR]             │   ║ │ 36px
│  ║  │  "Whether they scream, hold, or run, the    │   ║ │
│  ║  │   answer isn't more pressure."              │   ║ │
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌──────────────────────────────────────────────┐   ║ │
│  ║  │              [HEADER — Logo + From Name]     │   ║ │ 80px
│  ║  │         BrightKidCo · Lena from BrightKidCo │   ║ │
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌──────────────────────────────────────────────┐   ║ │
│  ║  │          HERO-10: Bold Declaration            │   ║ │ ~280px
│  ║  │                                              │   ║ │
│  ║  │  [Eyebrow: "POWER STRUGGLE · REFUSAL ·       │   ║ │
│  ║  │   BATHROOM FEAR"]                            │   ║ │
│  ║  │   Questrial 10.5px, B.teal, uppercase        │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  "Your child isn't stubborn.                 │   ║ │
│  ║  │   Their nervous system is protecting them."  │   ║ │
│  ║  │   [H1 — Questrial 32px/24px, B.ink]        │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  [SIGNAL PATH ILLUSTRATION — Above fold]     │   ║ │
│  ║  │  ┌────────────────────────────────────────┐  │   ║ │
│  ║  │  │  Scattered zigzag ──→ Smooth pulse     │  │   ║ │
│  ║  │  │  (faint gray)      (B.green, amplified)│  │   ║ │
│  ║  │  │  [SVG: 420px width, organic curves]    │  │   ║ │
│  ║  │  └────────────────────────────────────────┘  │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  [3 Nervous System Dots]                     │   ║ │
│  ║  │  🔴 Alarm (large)  🟡 Alert (large)  🟢 Calm │   ║ │
│  ║  │  (small, barely visible)                     │   ║ │
│  ║  │  [silently validates the parent's reality]   │   ║ │
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌─────── DESDEEP-6: Color Block ───────────────┐   ║ │ 32px
│  ║  │  Soft muted block, B.cream at 40% opacity    │   ║ │
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌──────────────────────────────────────────────┐   ║ │
│  ║  │  LETTER-09: Double Column — Three Objections │   ║ │ ~900px
│  ║  │                                              │   ║ │
│  ║  │  [3-COLUMN SYMPTOM GRID]                     │   ║ │
│  ║  │  ┌───────────┬───────────┬───────────┐      │   ║ │
│  ║  │  │ POWER     │ REFUSAL   │ BATHROOM  │      │   ║ │
│  ║  │  │ STRUGGLE  │           │ FEAR      │      │   ║ │
│  ║  │  ├───────────┼───────────┼───────────┤      │   ║ │
│  ║  │  │ 💥        │ ✋        │ 🛡️       │      │   ║ │
│  ║  │  │ Holds pee │ Screams,  │ Walking   │      │   ║ │
│  ║  │  │ for hours │ arches,   │ past the  │      │   ║ │
│  ║  │  │ rather    │ fights    │ bathroom  │      │   ║ │
│  ║  │  │ than sit  │ every     │ triggers  │      │   ║ │
│  ║  │  │ on toilet │ attempt   │ meltdown  │      │   ║ │
│  ║  │  │           │           │           │      │   ║ │
│  ║  │  │ [icon:    │ [icon:    │ [icon:    │      │   ║ │
│  ║  │  │ explosion │ hand      │ shield]   │      │   ║ │
│  ║  │  │ hinting   │ hinting   │ hinting   │      │   ║ │
│  ║  │  │ protective│ sensory   │ protective│      │   ║ │
│  ║  │  │ response] │ overload] │ response] │      │   ║ │
│  ║  │  └───────────┴───────────┴───────────┘      │   ║ │
│  ║  │  [Questrial 16px small caps, B.ink,         │   ║ │
│  ║  │   letter-spacing +1px for column headers]   │   ║ │
│  ║  │  [Mobile: stacks vertically]                │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  [HOOK — Unified framing]                    │   ║ │
│  ║  │  "These three situations all share one thing:│   ║ │
│  ║  │   Your child's nervous system has learned    │   ║ │
│  ║  │   that the bathroom, the potty, and the     │   ║ │
│  ║  │   pressure to perform are overwhelming."    │   ║ │
│  ║  │  [Questrial 17px, B.soft]                   │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  [THIN RULE — 1px #E8DED5]                 │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  [VALIDATION BLOCK]                          │   ║ │
│  ║  │  "Your child is not being stubborn. They're │   ║ │
│  ║  │   not winning a battle of wills. They're    │   ║ │
│  ║  │   not manipulating you."                    │   ║ │
│  ║  │  [bold reading path anchor]                  │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  "When a child screams at the sight of the  │   ║ │
│  ║  │   potty, when they hold their pee all day   │   ║ │
│  ║  │   rather than sit down, when they rip off   │   ║ │
│  ║  │   every pair of underwear you try — that's  │   ║ │
│  ║  │   a sensory feedback loop that has gone     │   ║ │
│  ║  │   into alarm mode."                         │   ║ │
│  ║  │  [B.cream bg, B.teal left border 3px]       │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  [LENA'S PERSONAL STORY]                     │   ║ │
│  ║  │  ┌──────────────────────────────────────┐    │   ║ │
│  ║  │  │ "Both my sons went through phases    │    │   ║ │
│  ║  │  │  where any mention of the potty      │    │   ║ │
│  ║  │  │  triggered a full shutdown. I was    │    │   ║ │
│  ║  │  │  told it was defiance. I was told    │    │   ║ │
│  ║  │  │  to 'be firmer.' I tried being       │    │   ║ │
│  ║  │  │  firmer. It made everything worse."  │    │   ║ │
│  ║  │  │ — Lena                               │    │   ║ │
│  ║  │  └──────────────────────────────────────┘    │   ║ │
│  ║  │  [bg: B.cream, 16px radius, 3px B.green     │   ║ │
│  ║  │   left border]                              │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  [THIN RULE — 1px #E8DED5]                 │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  [MECHANISM REFRAME — "What I learned"]     │   ║ │
│  ║  │  "The Body-Signal Learning Layer doesn't    │   ║ │
│  ║  │   require your child to sit on the potty.  │   ║ │
│  ║  │   It doesn't require compliance. It doesn't│   ║ │
│  ║  │   even require them to try.                │   ║ │
│  ║  │                                              │   ║ │
│  ║  │   It just needs to be worn."                │   ║ │
│  ║  │  [Fraunces italic, B.ink, centered]         │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  "The learning happens through sensation,   │   ║ │
│  ║  │   not instruction."                         │   ║ │
│  ║  │  [bold reading path anchor]                  │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  [3-SCENARIO RESPONSE CARDS]                 │   ║ │
│  ║  │  ┌──────────────────────────────────────┐    │   ║ │
│  ║  │  │ FOR THE CHILD WHO FIGHTS THE POTTY:  │    │   ║ │
│  ║  │  │ "You don't mention the potty. You    │    │   ║ │
│  ║  │  │  put the underwear on during play,   │    │   ║ │
│  ║  │  │  in their favorite corner of the     │    │   ║ │
│  ║  │  │  living room, anywhere that doesn't  │    │   ║ │
│  ║  │  │  trigger the bathroom fear."         │    │   ║ │
│  ║  │  └──────────────────────────────────────┘    │   ║ │
│  ║  │  ┌──────────────────────────────────────┐    │   ║ │
│  ║  │  │ FOR THE CHILD WHO RIPS EVERYTHING:   │    │   ║ │
│  ║  │  │ "The underwear is tagless, flat-seamed│   │   ║ │
│  ║  │  │  100% cotton inner layer, designed   │    │   ║ │
│  ║  │  │  to feel less intrusive than a       │    │   ║ │
│  ║  │  │  pull-up, not more."                 │    │   ║ │
│  ║  │  └──────────────────────────────────────┘    │   ║ │
│  ║  │  ┌──────────────────────────────────────┐    │   ║ │
│  ║  │  │ FOR THE CHILD TERRIFIED OF THE       │    │   ║ │
│  ║  │  │ BATHROOM:                             │    │   ║ │
│  ║  │  │ "You start in the safest space in    │    │   ║ │
│  ║  │  │  your home. The bathroom can come    │    │   ║ │
│  ║  │  │  later — days, weeks, or months      │    │   ║ │
│  ║  │  │  later."                             │    │   ║ │
│  ║  │  └──────────────────────────────────────┘    │   ║ │
│  ║  │  [each: B.cream bg, 12px radius,            │   ║ │
│  ║  │   2px B.teal left border]                    │   ║ │
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌─────── DESDEEP-6: Color Block ───────────────┐   ║ │ 24px
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌──────────────────────────────────────────────┐   ║ │
│  ║  │  SP-03: Stat Row — Quick Trust Signals       │   ║ │ ~100px
│  ║  │                                              │   ║ │
│  ║  │  ┌──────────┐ ┌──────────┐ ┌──────────┐    │   ║ │
│  ║  │  │ ⏱ 60-Day │ │ 🔔 30-60 │ │ 🚫 No    │    │   ║ │
│  ║  │  │ Guarantee│ │ second   │ │ bathroom │    │   ║ │
│  ║  │  │          │ │ signal   │ │ required │    │   ║ │
│  ║  │  └──────────┘ └──────────┘ └──────────┘    │   ║ │
│  ║  │  [bg: B.cream, 12px radius, centered]       │   ║ │
│  ║  │  [icons: B.teal 28px, text: B.ink 13px]     │   ║ │
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌──────────────────────────────────────────────┐   ║ │
│  ║  │  SOCIAL PROOF — Single Testimonial           │   ║ │ ~200px
│  ║  │                                              │   ║ │
│  ║  │  ┌──────────────────────────────────────┐    │   ║ │
│  ║  │  │ "He fought every single thing — the  │    │   ║ │
│  ║  │  │  potty, the underwear, the whole     │    │   ║ │
│  ║  │  │  concept. I put the Body-Signal undies│   │   ║ │
│  ║  │  │  on during his favorite TV show.     │    │   ║ │
│  ║  │  │  Didn't say a word. Three days later,│    │   ║ │
│  ║  │  │  I found him standing in front of    │    │   ║ │
│  ║  │  │  the bathroom door, pants around his │    │   ║ │
│  ║  │  │  ankles, looking confused. He didn't │    │   ║ │
│  ║  │  │  make it to the toilet. But he never │    │   ║ │
│  ║  │  │  did that before."                   │    │   ║ │
│  ║  │  │ — Mom of a 6-year-old who had been   │    │   ║ │
│  ║  │  │   in pull-ups for 4 years            │    │   ║ │
│  ║  │  └──────────────────────────────────────┘    │   ║ │
│  ║  │  [bg: B.cream, 16px radius, ultra-soft      │   ║ │
│  ║  │   shadow (2px 2px 0 B.ink at 20%)]          │   ║ │
│  ║  │  [left border: 3px B.green]                  │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  "Not every child responds the same way.    │   ║ │
│  ║  │   But that pause, that moment when the brain│   ║ │
│  ║  │   finally registers the signal — that's the │   ║ │
│  ║  │   first step, and it doesn't require the   │   ║ │
│  ║  │   bathroom OR your child's cooperation."   │   ║ │
│  ║  │  [Questrial 16px, B.soft]                   │   ║ │
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌─────── DESDEEP-6: Color Block ───────────────┐   ║ │ 24px
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌──────────────────────────────────────────────┐   ║ │
│  ║  │     EDU-12: Comparison Matrix                │   ║ │ ~400px
│  ║  │                                              │   ║ │
│  ║  │  [Eyebrow: "WHY EXISTING APPROACHES FAIL"]  │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  ┌────────────┬────────────┬────────────┐   │   ║ │
│  ║  │  │ PULL-UPS   │ COTTON     │ BSL UNDER- │   │   ║ │
│  ║  │  │            │ UNDERWEAR  │ WEAR       │   │   ║ │
│  ║  │  ├────────────┼────────────┼────────────┤   │   ║ │
│  ║  │  │ Wicks away │ Floods all │ Gentle,    │   │   ║ │
│  ║  │  │ wetness    │ at once    │ sustained  │   │   ║ │
│  ║  │  │ signal     │ overwhelming│ 30-60 sec │   │   ║ │
│  ║  │  │            │ sensation  │ signal     │   │   ║ │
│  ║  │  ├────────────┼────────────┼────────────┤   │   ║ │
│  ║  │  │ Brain gets │ Brain gets │ Brain gets │   │   ║ │
│  ║  │  │ NO signal  │ TOO MUCH   │ RIGHT      │   │   ║ │
│  ║  │  │            │ signal     │ amount     │   │   ║ │
│  ║  │  ├────────────┼────────────┼────────────┤   │   ║ │
│  ║  │  │ ❌ No      │ ❌ No      │ ✅ Signal  │   │   ║ │
│  ║  │  │ learning   │ learning   │ building   │   │   ║ │
│  ║  │  └────────────┴────────────┴────────────┘   │   ║ │
│  ║  │  [2px B.ink border, 12px radius]            │   ║ │
│  ║  │  [BSL column: B.green left border,          │   ║ │
│  ║  │   B.cream bg — visual emphasis]              │   ║ │
│  ║  │  [Mobile: stacks to single column]           │   ║ │
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌──────────────────────────────────────────────┐   ║ │
│  ║  │     ProductShowcaseFull — Full Product       │   ║ │ ~550px
│  ║  │                                              │   ║ │
│  ║  │  [Eyebrow: "THE PRODUCT"]                   │   ║ │
│  ║  │  [H2: "Body-Signal Learning Layer™ Pants"]  │   ║ │
│  ║  │  [Sub: "Underwear that creates the signal   │   ║ │
│  ║  │   — a gentle sensation that gives your      │   ║ │
│  ║  │   child's brain something to connect to."]  │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  ┌──────────────────────────────────────┐    │   ║ │
│  ║  │  │  [HERO SHOT — swim-diaper-unicorn]   │    │   ║ │
│  ║  │  │  420 x 300px, rounded 20px           │    │   ║ │
│  ║  │  │  ┌─────────────────┐                  │    │   ║ │
│  ║  │  │  │ ✿ 60 days calm  │ ← floating badge│    │   ║ │
│  ║  │  │  └─────────────────┘                  │    │   ║ │
│  ║  │  └──────────────────────────────────────┘    │   ║ │
│  ║  │  [border: 2px B.ink, 24px radius, 6px shadow]│  ║ │
│  ║  │                                              │   ║ │
│  ║  │  "BrightKidCo" eyebrow                       │   ║ │
│  ║  │  "From €34"                                  │   ║ │
│  ║  │  "Starter pair · 10% off first order"        │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  [Feature pills row]                         │   ║ │
│  ║  │  [◉ Body-Signal Layer™] [✓ 60-day guarantee] │   ║ │
│  ║  │  [♡ Sensory-friendly] [🧵 Tagless, flat-seam]│   ║ │
│  ║  │                                              │   ║ │
│  ║  │  [CTA: "Learn how the Body-Signal Layer     │   ║ │
│  ║  │   works with any child →"]                   │   ║ │
│  ║  │  [B.teal bg, D8F57C text, pill shape]       │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  [2-up sub row]                              │   ║ │
│  ║  │  ┌─────────────┐  ┌─────────────┐           │   ║ │
│  ║  │  │ SENSORY     │  │ SIZE RANGE  │           │   ║ │
│  ║  │  │ FRIENDLY    │  │ 2T-6T      │           │   ║ │
│  ║  │  │ 100% cotton │  │ Ages 2-7   │           │   ║ │
│  ║  │  │ inner layer │  │            │           │   ║ │
│  ║  │  └─────────────┘  └─────────────┘           │   ║ │
│  ║  │  [each: 2px B.ink border, 14px radius]      │   ║ │
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌──────────────────────────────────────────────┐   ║ │
│  ║  │     TRUST-2: Guarantee Detail Cards          │   ║ │ ~240px
│  ║  │                                              │   ║ │
│  ║  │  [3 GUARANTEE SCENARIO CARDS]                │   ║ │
│  ║  │  ┌──────────┐ ┌──────────┐ ┌──────────┐    │   ║ │
│  ║  │  │ NO PAUSE │ │ NO LOOK  │ │ NO MOMENT│    │   ║ │
│  ║  │  │          │ │          │ │          │    │   ║ │
│  ║  │  │ If your  │ │ If your  │ │ If you   │    │   ║ │
│  ║  │  │ child    │ │ child    │ │ never    │    │   ║ │
│  ║  │  │ shows no │ │ never    │ │ wonder   │    │   ║ │
│  ║  │  │ sign of  │ │ looks    │ │ "did they│    │   ║ │
│  ║  │  │ aware-   │ │ down at  │ │ feel     │    │   ║ │
│  ║  │  │ ness,    │ │ a wet    │ │ something│    │   ║ │
│  ║  │  │ FULL     │ │ spot,    │ │ ?" —     │    │   ║ │
│  ║  │  │ REFUND   │ │ FULL     │ │ FULL     │    │   ║ │
│  ║  │  │          │ │ REFUND   │ │ REFUND   │    │   ║ │
│  ║  │  └──────────┘ └──────────┘ └──────────┘    │   ║ │
│  ║  │  [each: B.cream bg, 12px radius,            │   ║ │
│  ║  │   2px B.green border]                        │   ║ │
│  ║  │  [icons: B.teal checkmarks]                  │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  "No questions. The guarantee is there       │   ║ │
│  ║  │   because the outcome depends on your       │   ║ │
│  ║  │   child's nervous system."                   │   ║ │
│  ║  │  [Questrial 16px, B.ink, centered]           │   ║ │
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌─────── 1px RULE — #E8DED5 — Tonal Shift ────┐   ║ │ 1px
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌──────────────────────────────────────────────┐   ║ │
│  ║  │       CTA-5: Product CTA — CTA Zone          │   ║ │ ~260px
│  ║  │                                              │   ║ │
│  ║  │  "Still have questions? Hit reply, I read    │   ║ │
│  ║  │   every response."                           │   ║ │
│  ║  │  [Questrial 17px, B.ink]                     │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  [ Learn how the Body-Signal Layer works    │   ║ │
│  ║  │    with any child → ]                        │   ║ │
│  ║  │  [CTA-5: B.teal bg, D8F57C text, pill shape │   ║ │
│  ║  │   full-width mobile / 380px desktop,         │   ║ │
│  ║  │   52px height]                               │   ║ │
│  ║  │                                              │   ║ │
│  ║  │  "60 days to try it. By your judgment.       │   ║ │
│  ║  │   If your child shows no sign of awareness, │   ║ │
│  ║  │   no pause, no look down, no moment where   │   ║ │
│  ║  │   you wonder 'did they feel something?' —   │   ║ │
│  ║  │   full refund."                              │   ║ │
│  ║  │  [Questrial 13px, B.muted, italic]           │   ║ │
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌──────────────────────────────────────────────┐   ║ │
│  ║  │       SIGNOFF — Lena Sign-Off (FAQ variant)  │   ║ │ ~300px
│  ║  │                                              │   ║ │
│  ║  │  ┌──────────────────────────────────────┐    │   ║ │
│  ║  │  │  [Avatar: 58px circle, gradient ring]│    │   ║ │
│  ║  │  │  "A note from" eyebrow               │    │   ║ │
│  ║  │  │  "Lena S."                           │    │   ║ │
│  ║  │  │  "Customer Support · Mom of two      │    │   ║ │
│  ║  │  │   autistic sons"                     │    │   ║ │
│  ║  │  │                                      │    │   ║ │
│  ║  │  │  ─ ─ ─ dashed divider ─ ─ ─         │    │   ║ │
│  ║  │  │                                      │    │   ║ │
│  ║  │  │  "Every child's nervous system is    │    │   ║ │
│  ║  │  │   different. What works for one      │    │   ║ │
│  ║  │  │   might not work for another, and    │    │   ║ │
│  ║  │  │   that's okay. The 60-day guarantee  │    │   ║ │
│  ║  │  │   exists so you can find out without │    │   ║ │
│  ║  │  │   pressure. If your child fights     │    │   ║ │
│  ║  │  │   everything right now, I see you.   │    │   ║ │
│  ║  │  │   That's normal here. Start with one │    │   ║ │
│  ║  │  │   pair during the calmest 30 minutes │    │   ║ │
│  ║  │  │   of your day."                      │    │   ║ │
│  ║  │  │                                      │    │   ║ │
│  ║  │  │  ", Lena"                            │    │   ║ │
│  ║  │  │  "Customer Support · Mom of two      │    │   ║ │
│  ║  │  │   autistic sons"                     │    │   ║ │
│  ║  │  │                                      │    │   ║ │
│  ║  │  │  ─ ─ ─ dashed divider ─ ─ ─         │    │   ║ │
│  ║  │  │                                      │    │   ║ │
│  ║  │  │  P.S. "If your child fights          │    │   ║ │
│  ║  │  │   everything right now, I see you.   │    │   ║ │
│  ║  │  │   Start with one pair during the     │    │   ║ │
│  ║  │  │   calmest 30 minutes of your day.    │    │   ║ │
│  ║  │  │   Nothing else needs to change."     │    │   ║ │
│  ║  │  └──────────────────────────────────────┘    │   ║ │
│  ║  │  [bg: B.ink, card bg: #1F2A2C, 22px radius] │   ║ │
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ┌──────────────────────────────────────────────┐   ║ │
│  ║  │                 FOOTER                       │   ║ │ ~200px
│  ║  │  [Tagline, links, social, unsubscribe,      │   ║ │
│  ║  │   address, gradient accent bar]              │   ║ │
│  ║  └──────────────────────────────────────────────┘   ║ │
│  ║                                                      ║ │
│  ║  ★ Easter Egg: Pulse Dot                            ║ │
│  ║    Bottom-right corner of testimonial card,         ║ │
│  ║    green but very faint (5% opacity), grows         ║ │
│  ║    slightly brighter on hover (desktop).            ║ │
│  ║    "The signal was there all along."                ║ │
│  ║                                                      ║ │
│  ╠══════════════════════════════════════════════════════╣ │
│  ╚══════════════════════════════════════════════════════╝ │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Section Specs

### Section 1: Preheader Bar
- **Component:** UTIL-06 — Preheader Bar
- **Exact Copy:** "Whether they scream, hold, or run, the answer isn't more pressure."
- **Background:** #F6F2EA
- **Typography:** Questrial 11px, italic, B.muted
- **Padding:** 6px 20px, centered
- **Notes:** 74 chars. Subject line asks the question; preheader reframes immediately.

### Section 2: Header
- **Component:** UTIL-08 — Nav Bar
- **Exact Copy:** "Lena from BrightKidCo" (from name)
- **Image:** BrightKidCo logo, 34px height
- **Background:** B.paper (#FFFFFF)

### Section 3: Hero — HERO-10 Bold Declaration
- **Component:** HERO-10 — Bold Declaration
- **Exact Copy:**
  - Eyebrow: "POWER STRUGGLE · REFUSAL · BATHROOM FEAR"
  - Headline: "Your child isn't stubborn. Their nervous system is protecting them."
  - Signal path illustration: Scattered zigzag → Smooth steady pulse (SVG)
  - 3 Nervous System Dots: 🔴 Alarm (large), 🟡 Alert (large), 🟢 Calm (small, barely visible)
- **Signal path SVG:** Horizontal, organic curves, thin emerald lines on cream, 420px width
- **Nervous system dots:** B.teal icons, 24px; alarm/alert are larger (validates parent's reality), calm is small but visible (hope)
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Eyebrow: Questrial 10.5px, weight 700, letter-spacing 2px, B.teal
  - Headline: Questrial 32px desktop / 24px mobile, weight 700, letter-spacing -0.5px, B.ink
- **Notes:** Bold, direct headline names the three objection clusters without sugarcoating. Signal path illustration is the central visual metaphor — chaos to calm. The three dots silently validate the parent's reality without clinical labels.

### Section 4: Decorative — DESDEEP-6 Color Block
- **Component:** DESDEEP-6 — The Color Block
- **Exact Copy:** None (decorative)
- **Visual:** Soft muted block, B.cream at 40% opacity
- **Height:** 32px
- **Notes:** Visual transition from hero to body. Creates the "safe container" feeling.

### Section 5: Letter — LETTER-09 Double Column (Three Objections + Mechanism)
- **Component:** LETTER-09 — Double Column
- **Exact Copy (VERBATIM):**

  **3-Column Symptom Grid:**
  - Column 1 (POWER STRUGGLE): "Holds their pee for hours rather than sit on the toilet" — icon: explosion (hints at protective response)
  - Column 2 (REFUSAL): "Screaming, arching, fighting every attempt" — icon: hand (hints at sensory overload)
  - Column 3 (BATHROOM FEAR): "Walking past the bathroom triggers a meltdown" — icon: shield (hints at protective response)

  **Hook:**
  "These three situations all share one thing: Your child's nervous system has learned that the bathroom, the potty, and the pressure to perform are overwhelming. And when a nervous system goes into protective mode, no amount of gentle encouragement, sticker charts, or consequences can override it."

  **Validation:**
  "Your child is not being stubborn. They're not winning a battle of wills. They're not manipulating you."

  "When a child screams at the sight of the potty, when they hold their pee all day rather than sit down, when they rip off every pair of underwear you try — that's a sensory feedback loop that has gone into alarm mode. The bathroom has become associated with overwhelm. The pressure to 'perform' has created a threat response. And a child in threat mode cannot learn, cannot cooperate, and cannot feel the subtle signal their body is trying to send."

  **Lena's Personal Story:**
  "Both my sons went through phases where any mention of the potty triggered a full shutdown. I was told it was defiance. I was told to 'be firmer.' I tried being firmer. It made everything worse."

  **Mechanism Reframe:**
  "The Body-Signal Learning Layer doesn't require your child to sit on the potty. It doesn't require compliance. It doesn't even require them to try."
  "It just needs to be worn."
  "The learning happens through sensation, not instruction."

  **3-Scenario Response Cards:**
  - "FOR THE CHILD WHO FIGHTS THE POTTY: You don't mention the potty. You put the underwear on during play, in their favorite corner of the living room, anywhere that doesn't trigger the bathroom fear. The sensation does the teaching without the pressure."
  - "FOR THE CHILD WHO RIPS EVERYTHING OFF: The underwear is tagless, flat-seamed, 100% cotton inner layer, designed to feel less intrusive than a pull-up, not more. Many kids who fight everything else tolerate this one because the sensation is predictable, not surprising."
  - "FOR THE CHILD TERRIFIED OF THE BATHROOM: You start in the safest space in your home. The bathroom can come later — days, weeks, or months later. The signal doesn't need the toilet to work."

- **3-column grid:** Questrial 16px small caps headers, letter-spacing +1px, B.ink; body text B.soft
- **Mobile:** Stacks vertically
- **Highlighted validation:** B.cream bg, 3px B.teal left border
- **Lena's story:** B.cream card, 16px radius, 3px B.green left border
- **Scenario cards:** B.cream bg, 12px radius, 2px B.teal left border each
- **Typography:**
  - Body: Questrial 17px/16px, weight 400, line-height 1.7, B.soft
  - Bold anchors: weight 600, B.ink
  - Tagline: Fraunces italic 20px, B.ink, centered
- **Notes:** Most empathetic email in the FAQ library. Three-column grid provides visual structure for the three objection clusters. Each scenario card directly addresses a specific behavior pattern. "It just needs to be worn" is the key reframe.

### Section 6: Decorative — DESDEEP-6 Color Block
- **Component:** DESDEEP-6 — The Color Block
- **Height:** 24px

### Section 7: Stat Row — SP-03 Quick Trust Signals
- **Component:** SP-03 — Stat Row
- **Exact Copy:**
  - Stat 1: "⏱ 60-Day Guarantee"
  - Stat 2: "🔔 30-60 second signal"
  - Stat 3: "🚫 No bathroom required"
- **Styling:** B.cream bg, 12px radius, centered
- **Icons:** B.teal, 28px
- **Text:** Questrial 13px, B.ink
- **Desktop:** 3 stats in row
- **Mobile:** Stack vertically
- **Notes:** Scannable trust signals before the deep-dive. "No bathroom required" is the key differentiator for the refusal/fear audience.

### Section 8: Social Proof — Single Testimonial
- **Component:** Custom (single testimonial card)
- **Exact Copy (VERBATIM):**
  > "He fought every single thing — the potty, the underwear, the whole concept. I put the Body-Signal undies on during his favorite TV show. Didn't say a word. Three days later, I found him standing in front of the bathroom door, pants around his ankles, looking confused. He didn't make it to the toilet. But he never did that before."
  > *— Mom of a 6-year-old who had been in pull-ups for 4 years*

  "Not every child responds the same way. But that pause, that moment when the brain finally registers the signal — that's the first step, and it doesn't require the bathroom OR your child's cooperation. Just the sensation, repeated over time, building a pathway their nervous system has never had before."

- **Card styling:** B.cream bg, 16px radius, ultra-soft shadow (2px 2px 0 B.ink at 20%), 3px B.green left border
- **Bridge copy:** Questrial 16px, B.soft, line-height 1.6
- **Notes:** Single testimonial (not three-family pattern) because E3's audience needs deep recognition, not breadth. The story directly mirrors the "refusal" objection — the child who fights everything. "Didn't say a word" is the key detail (no compliance required).

### Section 9: Decorative — DESDEEP-6 Color Block
- **Component:** DESDEEP-6 — The Color Block
- **Height:** 24px

### Section 10: Mechanism — EDU-12 Comparison Matrix
- **Component:** EDU-12 — Comparison Matrix
- **Exact Copy (VERBATIM):**

  **Eyebrow:** "WHY EXISTING APPROACHES FAIL"

  **Comparison Matrix:**

  | PULL-UPS | COTTON UNDERWEAR | BSL UNDERWEAR |
  |----------|------------------|---------------|
  | Wicks away wetness signal | Floods all at once, overwhelming sensation | Gentle, sustained 30-60 sec signal |
  | Brain gets NO signal | Brain gets TOO MUCH signal | Brain gets RIGHT amount |
  | ❌ No learning | ❌ No learning | ✅ Signal building |

- **Matrix styling:** 2px B.ink border, 12px radius
- **BSL column:** B.green left border, B.cream bg (visual emphasis)
- **Mobile:** Stacks to single column
- **Background:** B.paper (#FFFFFF)
- **Notes:** Visual proof of why existing approaches fail. The BSL column is visually emphasized (green border, cream bg) to draw the eye. Three-row comparison is scannable and memorable.

### Section 11: Product — ProductShowcaseFull
- **Component:** ProductShowcaseFull
- **Exact Copy:**
  - Eyebrow: "THE PRODUCT"
  - Title: "Body-Signal Learning Layer™ Pants"
  - Sub: "Underwear that creates the signal — a gentle sensation that gives your child's brain something to connect to."
  - Price: "From €34"
  - Price note: "Starter pair · 10% off first order"
  - Features: ["◉ Body-Signal Layer™", "✓ 60-day guarantee", "♡ Sensory-friendly", "🧵 Tagless, flat-seam"]
  - CTA: "Learn how the Body-Signal Layer works with any child →"
  - Sub-cards: "Sensory Friendly · 100% cotton inner layer" / "Size Range · 2T-6T, Ages 2-7"
- **Image:** /root/projects/brightkidco/raw/product-photos/swim-diaper-unicorn-pink.jpg
  - Alt text: "BrightKidCo training pant in unicorn pink pattern"
  - Dimensions: 420 x 300px (hero), 200 x 110px (sub-cards)
  - Fallback color: #FFFDF6
- **Badge:** "✿ 60 days calm" — FFD866 bg, 2px B.ink border, 999 radius, rotated 4°
- **Card styling:** bg B.paper, 2px B.ink border, 24px radius, 6px B.ink shadow
- **Feature pills:** bg #FAF7F0, 1.5px B.ink border, 999 radius
- **CTA:** B.teal bg, D8F57C text, pill shape
- **Sub-cards:** 2px B.ink border, 14px radius, 3px shadow
- **Notes:** Full product showcase — after three emails of mechanism education, the product presentation can be more complete. "Tagless, flat-seam" feature pill is specifically relevant for the refusal audience (E3).

### Section 12: Trust — TRUST-2 Guarantee Detail Cards
- **Component:** TRUST-2 — Guarantee Detail Cards
- **Exact Copy:**
  - Card 1: "NO PAUSE — If your child shows no sign of awareness, FULL REFUND"
  - Card 2: "NO LOOK — If your child never looks down at a wet spot, FULL REFUND"
  - Card 3: "NO MOMENT — If you never wonder 'did they feel something?' — FULL REFUND"
  - Closing: "No questions. The guarantee is there because the outcome depends on your child's nervous system."
- **Card styling:** B.cream bg, 12px radius, 2px B.green border each
- **Icons:** B.teal checkmarks
- **Typography:** Questrial 14px, B.ink
- **Desktop:** 3 cards in row
- **Mobile:** Stack vertically
- **Notes:** Maximum risk reversal — three specific scenarios with full refund promise. The guarantee is tied to observable outcomes (pause, look, wonder), not time-based. This is the deepest trust lever in the FAQ library.

### Section 13: Tonal Shift Rule
- **Component:** 1px rule, #E8DED5
- **Full width, 1px height**

### Section 14: CTA — CTA-5 Product CTA
- **Component:** CTA-5 — Product CTA
- **Exact Copy (VERBATIM):**
  - Intro: "Still have questions? Hit reply, I read every response."
  - Button: "Learn how the Body-Signal Layer works with any child →"
  - Guarantee: "60 days to try it. By your judgment. If your child shows no sign of awareness, no pause, no look down, no moment where you wonder 'did they feel something?' — full refund."
- **CTA button:** B.teal (#2BAEB4) bg, #D8F57C text, full-width on mobile / 380px desktop, 52px height, pill shape
- **Button typography:** Questrial 16px, weight 700, letter-spacing 0.3px
- **Guarantee text:** Questrial 13px, B.muted, italic
- **Background:** B.paper (#FFFFFF)
- **Notes:** Product-focused CTA — after three emails of mechanism education, the CTA can be more direct. "Learn how it works" not "Buy now." The guarantee text below the button reinforces risk reversal.

### Section 15: Signoff — Lena (FAQ variant)
- **Component:** UTIL-05 — Signoff Card + 12.1 — Lena Signoff
- **Exact Copy (VERBATIM):**
  "Every child's nervous system is different. What works for one might not work for another, and that's okay. The 60-day guarantee exists so you can find out without pressure. If your child fights everything right now, I see you. That's normal here. Start with one pair during the calmest 30 minutes of your day. Nothing else needs to change."
  ", Lena"
  "Customer Support · Mom of two autistic sons"
  "P.S. If your child fights everything right now, I see you. Start with one pair during the calmest 30 minutes of your day. Nothing else needs to change."
- **Avatar:** 58px circle, gradient ring
- **Name:** "Lena S.", Questrial 17px, weight 700, white
- **Role:** "Customer Support · Mom of two autistic sons", Questrial 12px, #8FAFB2, italic
- **Card bg:** #1F2A2C, 22px radius, 1.5px #2F3D40 border
- **P.S. section:** Questrial 13px, #B8CACD, italic, "P.S." in D8F57C bold
- **Notes:** Most empathetic signoff in the FAQ library. "I see you. That's normal here." is the validation anchor. "Start with one pair during the calmest 30 minutes" is the lowest-bar action in the entire sequence — no bathroom, no compliance, no change in routine. P.S. repeats the key action for emphasis.

### Section 16: Footer
- **Component:** UTIL-04 — Footer
- **Exact Copy:** Standard footer (same as E1/E2)
- **Background:** B.paper (#FFFFFF)
- **Gradient accent bar:** 60px x 3px, B.gradient (B.teal → B.green)

### Section 17: Easter Egg — Pulse Dot
- **Component:** Custom SVG (not from component index)
- **Exact Copy:** None (visual only)
- **SVG:** Single small green dot in bottom-right corner of testimonial card
- **Size:** 8×8px, 5% opacity, grows to 15% opacity on hover (desktop only)
- **Color:** #5DD07A (B.green)
- **Notes:** Represents the first signal finally arriving. "The signal was there all along, even when the parent couldn't see it yet." Works at all levels: L1 reads it as hope, L2 as evidence, L3 as permission, GF as recognition.

---

## 6. Component Details

### HERO-10 — Bold Declaration
- **Props:** eyebrow, headline, signalPath, nervousSystemDots
- **Variants:** Default — eyebrow + headline + illustration + dots
- **Custom overrides:**
  - Eyebrow: Three objection clusters named
  - Signal path: SVG illustration (scattered → smooth)
  - 3 dots: Alarm (large), Alert (large), Calm (small)

### LETTER-09 — Double Column
- **Props:** symptomGrid[], hook, validation, lenaStory, mechanismReframe, scenarioCards[]
- **Variants:** Default — 3-column grid + unified hook + validation + mechanism
- **Custom overrides:**
  - 3-column symptom grid with icons (explosion, hand, shield)
  - Lena's personal story in cream card
  - 3-scenario response cards with B.teal left border

### SP-03 — Stat Row
- **Props:** stats[]
- **Variants:** Horizontal row
- **Custom overrides:**
  - 3 stats: 60-Day Guarantee, 30-60 second signal, No bathroom required
  - B.cream bg, 12px radius

### EDU-12 — Comparison Matrix
- **Props:** columns[], rows[]
- **Variants:** Default — 3-column matrix
- **Custom overrides:**
  - Pull-ups vs Cotton vs BSL
  - BSL column: B.green border, B.cream bg

### ProductShowcaseFull
- **Props:** eyebrow, title, sub, priceFrom, priceNote, features[], ctaButton, subCards[]
- **Variants:** Default — hero card + 2-up sub row
- **Custom overrides:**
  - Image: swim-diaper-unicorn-pink.jpg
  - Feature pill: "Tagless, flat-seam" (E3-specific)
  - CTA: "Learn how the Body-Signal Layer works with any child →"

### TRUST-2 — Guarantee Detail Cards
- **Props:** scenarios[]
- **Variants:** 3 cards in row (desktop), stack (mobile)
- **Custom overrides:**
  - 3 scenarios: No Pause, No Look, No Moment
  - Each: FULL REFUND promise
  - B.green border on each card

### CTA-5 — Product CTA
- **Props:** intro, ctaText, guarantee
- **Variants:** Default — intro + button + guarantee
- **Custom overrides:**
  - Button: "Learn how the Body-Signal Layer works with any child →"
  - Guarantee: Three specific refund scenarios

### DESDEEP-6 — The Color Block
- **Props:** position, opacity
- **Variants:** Three positions with soft muted blocks
- **Custom overrides:**
  - B.cream at 40% opacity
  - Creates "safe container" feeling

---

## 7. Image Briefs

### Image 1: Product Photo
- **Path:** /root/projects/brightkidco/raw/product-photos/swim-diaper-unicorn-pink.jpg
- **Alt text:** "BrightKidCo training pant in unicorn pink pattern"
- **Dimensions:** 420 x 300px (hero), 200 x 110px (sub-card)
- **Fallback color:** #FFFDF6
- **Notes:** Primary product image. Unicorn pattern is playful — appropriate for the youngest age range (2-3) in the E3 audience.

### Image 2: Product Photo
- **Path:** /root/projects/brightkidco/raw/product-photos/laundry-bag-llama-cream.png
- **Alt text:** "BrightKidCo laundry bag in llama cream pattern"
- **Dimensions:** 200 x 110px (sub-card)
- **Fallback color:** #FFFDF6
- **Notes:** Complementary product in sub-card. Supports the "system" framing.

---

## 8. Rendering Notes

### Email Client Considerations
- **Gmail:** Strips CSS animations. All styling inline. Max ~100KB.
- **Outlook Desktop:** No SVG. Signal path degrades to static two-panel illustration. Protective curve border-radius not supported (degrades to square).
- **Apple Mail:** Full CSS. SVG renders. Protective curve renders. Best rendering.
- **Yahoo Mail:** Inline CSS. Border-radius spotty.
- **Thunderbird:** Good CSS. SVG may not render.

### Mobile Responsive Notes
- **Breakpoint:** 480px
- **Max width:** 600px desktop, full-width mobile
- **CTA button:** Full-width on mobile, 52px height
- **3-column symptom grid:** Stacks vertically on mobile
- **Comparison matrix:** Stacks to single column on mobile
- **Guarantee cards:** Stack vertically on mobile
- **Trust icons:** Stack vertically on mobile
- **Font sizes:** Body 16px mobile, Headlines 24px mobile
- **Spacing:** Section gap 32px mobile
- **Protective curve:** On mobile, arc sits at bottom edge

### Accessibility Notes
- **Body text minimum:** 16px on mobile (WCAG AA)
- **CTA minimum height:** 48px (tap-friendly)
- **Color contrast:** All text passes WCAG AA
- **Alt text:** All images have descriptive alt text
- **Semantic structure:** H1 for hero, H2 for objection blocks, blockquote for testimonial
- **3-column grid:** Screen readers read columns sequentially (logical order)

### Special Instructions
- **Reply prompt:** REQUIRED (§17.2). "Reply to this email, Lena reads every response" in footer.
- **Warmup compliance:** No promo codes, no hard-sell, no countdown timers (§17.2).
- **From name:** "Lena from BrightKidCo" (§16.3)
- **Reply-to:** support@brightkidco.com (§16.3)
- **No Facebook link** (§16.4)
- **No Trustpilot link** (§16.4)
- **Physical address:** 123 Commerce Street, Suite 200, Portland, OR 97201 (CAN-SPAM)
- **Cross-Level R1-R6 compliance:** ✅ R1 (symptom over label — "holds pee," "screams," "rips off"), ✅ R2 (3 recognition anchors in symptom grid + 3 scenario cards), ✅ R3 (age ranges "2T-6T, Ages 2-7"), ✅ R4 (verbal/non-verbal — "doesn't require verbal ability"), ✅ R5 (timeline flexibility — "days, weeks, or months"), ✅ R6 (low-bar success — "start with one pair during the calmest 30 minutes")
- **Forbidden phrases check:** ✅ No "easy/simple/effortless", ✅ No "fix/cure", ✅ No AI-isms, ✅ No level labels, ✅ No urgency countdown, ✅ No "defiance" as a positive label (reframed as "protective mode")
- **Image-to-text ratio:** 15/85 (most text-heavy FAQ email — deep empathy requires space)
- **Copy density:** Long (~700 words across three objection blocks + mechanism + scenarios)
- **Protective curve:** Unique to E3 — creates psychological safety through visual container
- **Easter egg:** Pulse dot (5% opacity, grows on hover) — "the signal was there all along"
