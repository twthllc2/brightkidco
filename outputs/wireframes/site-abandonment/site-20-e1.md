# Wireframe: Site Abandonment — E1 | Cross-Level

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Site Abandonment (Flow 20) |
| **Position** | E1 — 1 Hour After Site Exit |
| **Level** | Cross-Level (L1 + L2 + L3 + GF) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/site-abandonment/site-20-e1.md |
| **Strategy Map Entry** | flows.site-abandonment.emails.e1 |
| **Flow Signature** | Quick nudge, ink primary, teal accents, low density, direct CTA |
| **Level Calibration** | Cross-Level — 50/50 hope/realism, zero urgency, medium science density, minimal "Keep exploring" CTA, education-first, no product mention anywhere |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM/EDUCATION, PRODUCT, CTA, GUARANTEE/TRUST, DECORATIVE |
| **Total Estimated Height** | ~3,200px (desktop) / ~3,600px (mobile) |

---

## 2. Strategy Box

**Big Idea:** The softest touch in the entire recovery funnel — an educational first impression, not a recovery email. Site abandoners have zero product context. The email bridges curiosity to understanding: connect the symptom she typed into Google to the mechanism she hasn't heard of, without assuming she knows what BrightKidCo sells. No product mention. No urgency. No pressure.

**Emotional Arc Position:** Standalone single-email flow (no E2, E3). The entire recovery arc — Curiosity → Recognition → Validation → Mechanism → Soft Invitation — must compress into one message. This email does the work of a full sequence in a single send.

**Component Selection Rationale:**
- HERO-3 (Permission Open): Opens with the "Whether...Or...If..." pattern — no product image, no hero photo. Text-forward permission opener matching lowest-intent audience. The visitor has zero context; a product hero would feel premature.
- LETTER-01 (Paragraph Stack): Long-form education copy supports the mechanism explanation and Three-Family testimonial pattern. Medium density (~400 words body).
- SP-05 (Before/After Testimonial): Three-Family Testimonial Pattern — three tiered success stories (verbal, sensory, non-verbal) so each mom sees "someone like me."
- EDU-8 (Mechanism Diagram): Interoception explainer with SPARK study citation (49% stat) and mechanism paragraph. Science-forward for L2 access, light enough for L1 and GF.
- ProductShowcaseSoft: NOT USED in body — zero product mention per copy strategy. Only appears as subtle lifestyle imagery in decorative elements.
- CTA-4 (Gentle Invite): "Keep exploring" — the softest possible CTA. No "Shop now," no "Buy," no "Learn More." Education-first positioning.
- TRUST-1 (60-Day Seal): 60-day guarantee in P.S. only — safety signal, not conversion lever. "By your judgment. Full refund, no questions."
- DESDEEP-14 (Handwritten Touch): Lena's personal note feel — handwritten signature element, personal identity as trust anchor.

**Differentiation Note:** This is the ONLY email in the entire program with zero product mention in the body copy and zero urgency. The CTA is "Keep exploring" — lower friction than Browse Abandonment's "Keep reading." The Three-Family Testimonial Pattern appears here (same as Browse E1) because this standalone email must do the work of a full sequence. The HERO is text-forward (no image) unlike Browse E1 which uses a curiosity gap hero with lifestyle photo.

---

## 3. Creative Box

**Color Palette:**
- Primary: #1F2D2F (B.ink) — Page background emphasis, headings, body text, card borders. Ink-primary matches flow signature.
- Secondary: #2BAEB4 (B.teal) — CTA accents, eyebrow labels, gradient band, link highlights
- Accent: #5DD07A (B.green) — Gradient endpoint, secondary accent
- Background: #FBF7F1 (B.cream) — Warm section backgrounds, validation block, testimonial cards
- Text: #1F2D2F (B.ink) — Primary body text, headings, borders
- Page Background: #FFFFFF (B.paper) — Email canvas
- Secondary Text: #4A6568 (B.soft) — Body copy, secondary paragraphs
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer, citations, preheader
- CTA Text on Dark: #D8F57C (Lime green) — CTA button text on dark backgrounds

**Typography:**
- Heading: Questrial, 30px desktop / 22px mobile, weight 700, line-height 1.15, letter-spacing -0.4px
- Body: Questrial, 17px desktop / 16px mobile, weight 400, line-height 1.7, color B.soft
- Accent: Fraunces, 22px desktop / 18px mobile, weight 400 italic, line-height 1.4, color B.ink (pull quotes, testimonial highlights)
- Eyebrow: Questrial, 10.5px, weight 700, letter-spacing 2px, text-transform uppercase, color B.teal

**Border Radius:** Cards: 14px, Buttons: 999px (pill), Images: 18px, Small elements: 10px, Testimonial cards: 14px
**Shadow:** Primary: 4px 4px 0 B.ink (card shadow — consistent with primitives.jsx), Secondary: 3px 3px 0 B.ink (sub-card)
**Spacing:** Section gap: 36px, H-padding: 22px, Card padding: 22px top/bottom, 20px left/right, Element gap: 14px

---

## 4. Layout ASCII

```
┌────────────────────── 420px ──────────────────────┐
│ [white #FFFFFF]                                    │
│  ┌─ Preheader Bar ─────────────────────────────┐   │
│  │ UTIL-06 Preheader Bar                       │   │ 36px
│  │ bg: #F6F2EA, italic 11px, B.muted          │   │
│  │ "Whether you've been at this for weeks or   │   │
│  │  years — here's what most parents miss."    │   │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ Header ───────────────────────────────────┐    │
│  │ Header (bg: #FFFFFF)                       │    │ 72px
│  │ Logo: brightkidco-logo-v2.png (h:34)       │    │
│  │ padding: 24px 20px 0, text-align: center   │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ HERO-3: Permission Open ──────────────────┐    │
│  │ [bg: #FFFFFF — no image, text-forward]      │    │ ~340px
│  │                                              │    │
│  │  padding: 34px 22px 28px                    │    │
│  │                                              │    │
│  │  ┌─ Eyebrow ──────────────────────────┐    │    │
│  │  │ "From Lena"                         │    │    │
│  │  │ Questrial 10.5px, B.teal, upper     │    │    │
│  │  └────────────────────────────────────┘    │    │
│  │                                              │    │
│  │  ┌─ H1 Title ────────────────────────┐     │    │
│  │  │ "The real reason your child        │     │    │
│  │  │  isn't potty trained"              │     │    │
│  │  │ Questrial 30px, weight 700, B.ink  │     │    │
│  │  │ gradient text on second line       │     │    │
│  │  └───────────────────────────────────┘     │    │
│  │                                              │    │
│  │  ┌─ Subhead ─────────────────────────┐     │    │
│  │  │ "Whether you've been at this for   │     │    │
│  │  │  weeks or years, here's what most  │     │    │
│  │  │  parents miss."                    │     │    │
│  │  │ Questrial 17px, B.soft, line 1.4   │     │    │
│  │  └───────────────────────────────────┘     │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ GRADIENT BAND — Teal → Green ─────────────┐   │
│  │ linear-gradient(180deg, #2BAEB4 0%,         │   │ 6px
│  │   #5DD07A 100%)                             │   │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ LETTER-01: Paragraph Stack (Opener) ─────┐    │
│  │ [bg: #FBF7F1 cream]                       │    │ ~600px
│  │ padding: 20px 24px 28px                    │    │
│  │                                              │    │
│  │  "Whether your child is 3 or 10, talks      │    │
│  │   about the potty but won't use it, or has  │    │
│  │   never shown a sign of feeling wet, if     │    │
│  │   they don't feel when they need to go,     │    │
│  │   traditional methods can't work."          │    │
│  │   [Questrial 17px, B.ink, weight 600]       │    │
│  │                                              │    │
│  │  "You came here because something is off.    │    │
│  │   Maybe your kid sits on the toilet         │    │
│  │   forever. Nothing happens. Then you put    │    │
│  │   the pull-up back on and there's pee in    │    │
│  │   it 30 seconds later. Maybe she plays      │    │
│  │   while peeing without noticing, no pause,  │    │
│  │   no reaction, no signal at all. Maybe he   │    │
│  │   has never reacted to being wet. Not once. │    │
│  │   Not in years."                            │    │
│  │   [Questrial 15px, B.soft, line-height 1.7] │    │
│  │                                              │    │
│  │  "Or maybe you've been through all of it:    │    │
│  │   the sticker charts, the timed sits, the   │    │
│  │   social stories, the BCBA protocols, every  │    │
│  │   book that promised 'train your child in   │    │
│  │   X days.' Something about potty training   │    │
│  │   your child just won't click, and you can't│    │
│  │   figure out why."                          │    │
│  │   [Questrial 15px, B.soft]                  │    │
│  │                                              │    │
│  │  "If that sounds familiar, you're not alone."│    │
│  │   [Questrial 16px, B.ink, italic, weight 500]│   │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ 1px RULE — #E8DED5 ──────────────────────┐   │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ LETTER-01: Validation Block ─────────────┐    │
│  │ [bg: #FFFFFF]                              │    │ ~520px
│  │ padding: 22px 24px 28px                    │    │
│  │                                              │    │
│  │  ┌─ SP-05: Stat Highlight Card ────────┐   │    │
│  │  │ [bg: #FBF7F1 cream, border: 2px     │   │    │
│  │  │  B.teal, radius: 14px]              │   │    │
│  │  │                                      │   │    │
│  │  │  "49%"                              │   │    │
│  │  │  [Fraunces 42px, B.teal, weight 700]│   │    │
│  │  │                                      │   │    │
│  │  │  "of autistic 4-5 year olds aren't  │   │    │
│  │  │   toilet trained"                    │   │    │
│  │  │  [Questrial 17px, B.ink, weight 600]│   │    │
│  │  │                                      │   │    │
│  │  │  "(Wiggins et al. 2022, CDC-funded  │   │    │
│  │  │   study of 743 children)"            │   │    │
│  │  │  [Questrial 12px, B.muted]          │   │    │
│  │  └──────────────────────────────────────┘   │    │
│  │                                              │    │
│  │  "Here's a number that changed how I think   │    │
│  │   about all of this: 49% of autistic 4-5     │    │
│  │   year olds aren't toilet trained (Wiggins   │    │
│  │   et al. 2022, CDC-funded study of 743       │    │
│  │   children). That's not a parenting failure  │    │
│  │   rate, that's a method failure rate. Six    │    │
│  │   out of seven kids in that age range face   │    │
│  │   a gap that standard potty training         │    │
│  │   approaches weren't built to address."      │    │
│  │   [Questrial 15px, B.soft, line-height 1.7] │    │
│  │                                              │    │
│  │  "You didn't fail. The methods did."         │    │
│  │   [Questrial 17px, B.ink, weight 700,       │    │
│  │    text-align: center]                       │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ GRADIENT BAND — Teal → Green ─────────────┐   │
│  │ linear-gradient(180deg, #2BAEB4 0%,         │   │ 6px
│  │   #5DD07A 100%)                             │   │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ EDU-8: Mechanism Diagram ─────────────────┐   │
│  │ [bg: #FBF7F1 cream]                        │   │ ~680px
│  │ padding: 28px 22px 28px, radius: 14px      │   │
│  │ border: 2px solid B.teal                    │   │
│  │                                              │    │
│  │  ┌─ Eyebrow ──────────────────────────┐    │    │
│  │  │ "THE SIGNAL GAP"                    │    │    │
│  │  │ Questrial 10.5px, B.teal, uppercase │    │    │
│  │  └────────────────────────────────────┘    │    │
│  │                                              │    │
│  │  "The reason so many methods fall short     │    │
│  │   isn't that you didn't try hard enough.    │    │
│  │   It's that they're built on an assumption  │    │
│  │   that doesn't hold for every child."       │    │
│  │   [Questrial 15px, B.soft]                  │    │
│  │                                              │    │
│  │  ┌─ Mechanism Flow Diagram ────────────┐    │    │
│  │  │ [ASCII signal chain visualization]   │    │    │
│  │  │                                      │    │    │
│  │  │  Bladder → Brain → Child Acts       │    │    │
│  │  │  (signal)  (receives) (goes to      │    │    │
│  │  │            bathroom)                 │    │    │
│  │  │                                      │    │    │
│  │  │  "For many kids, this chain is       │    │    │
│  │  │   broken. The signal arrives too     │    │    │
│  │  │   late. Or not at all."              │    │    │
│  │  │  [Questrial 15px, B.soft, center]   │    │    │
│  │  │                                      │    │    │
│  │  │  [visual: dashed line break in chain]│    │    │
│  │  │  bg: B.cream, border: 1px #E8DED5   │    │    │
│  │  └──────────────────────────────────────┘   │    │
│  │                                              │    │
│  │  "This has a name: interoception, the        │    │
│  │   body's internal messaging system. It's     │    │
│  │   the sense that tells you when you're       │    │
│  │   hungry, when you're thirsty, when you      │    │
│  │   need the bathroom. Research shows          │    │
│  │   interoception works differently in          │    │
│  │   children whose nervous systems process     │    │
│  │   signals differently (Nicholson et al.      │    │
│  │   2019; Barmpagiannis & Baldimtsi 2025,     │    │
│  │   49-study review)."                        │    │
│  │   [Questrial 15px, B.soft]                  │    │
│  │                                              │    │
│  │  "The signal isn't stubbornness. It's not    │    │
│  │   defiance. It's not something you failed    │    │
│  │   to teach. It's a signal-timing gap, and    │    │
│  │   until you know it exists, every method     │    │
│  │   you try will be solving the wrong problem."│    │
│  │   [Questrial 15px, B.ink, weight 600]       │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ 1px RULE — #E8DED5 ──────────────────────┐   │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ SP-05: Three-Family Testimonial ─────────┐    │
│  │ [bg: #FFFFFF]                              │    │ ~700px
│  │ padding: 28px 22px                          │    │
│  │                                              │    │
│  │  "Three families. Three different kids.     │    │
│  │   One missing piece."                       │    │
│  │   [Questrial 17px, B.ink, weight 700,      │    │
│  │    text-align: center]                      │    │
│  │                                              │    │
│  │  ┌─ Testimonial Card 1 (L1) ──────────┐   │    │
│  │  │ [bg: #FBF7F1, radius: 14px,        │   │    │
│  │  │  border-left: 3px B.teal,           │   │    │
│  │  │  shadow: 4px 4px 0 B.ink]           │   │    │
│  │  │ "Lena, mom of a verbal 4-year-old:"  │   │    │
│  │  │ [Questrial 12px, B.muted, italic]   │   │    │
│  │  │ > "He knew the routine. He could     │   │    │
│  │  │ > tell me 'I need to pee', after     │   │    │
│  │  │ > he'd already gone. We spent months │   │    │
│  │  │ > thinking he was being difficult.   │   │    │
│  │  │ > Turned out the signal was reaching │   │    │
│  │  │ > his brain after he was already wet.│   │    │
│  │  │ > Once we addressed that, everything │   │    │
│  │  │ > shifted."                          │   │    │
│  │  │ [Fraunces 16px, B.ink, italic]      │   │    │
│  │  └──────────────────────────────────────┘   │    │
│  │                                              │    │
│  │  ┌─ Testimonial Card 2 (L2) ──────────┐   │    │
│  │  │ [bg: #FBF7F1, radius: 14px,        │   │    │
│  │  │  border-left: 3px B.green,          │   │    │
│  │  │  shadow: 4px 4px 0 B.ink]           │   │    │
│  │  │ "Sofia, mom of a 6-year-old with    │   │    │
│  │  │  sensory differences:"              │   │    │
│  │  │ [Questrial 12px, B.muted, italic]   │   │    │
│  │  │ > "We tried everything the BCBA     │   │    │
│  │  │ > recommended. Scheduled sits,      │   │    │
│  │  │ > reward systems, social narratives. │   │    │
│  │  │ > Nothing transferred. I was ready  │   │    │
│  │  │ > to accept it would never happen.  │   │    │
│  │  │ > Then I learned about the          │   │    │
│  │  │ > interoception gap, his brain      │   │    │
│  │  │ > wasn't getting the body signal    │   │    │
│  │  │ > in time. That changed our entire  │   │    │
│  │  │ > approach."                        │   │    │
│  │  │ [Fraunces 16px, B.ink, italic]      │   │    │
│  │  └──────────────────────────────────────┘   │    │
│  │                                              │    │
│  │  ┌─ Testimonial Card 3 (L3) ──────────┐   │    │
│  │  │ [bg: #FBF7F1, radius: 14px,        │   │    │
│  │  │  border-left: 3px B.teal,           │   │    │
│  │  │  shadow: 4px 4px 0 B.ink]           │   │    │
│  │  │ "Priya, mom of a 9-year-old with    │   │    │
│  │  │  high support needs:"               │   │    │
│  │  │ [Questrial 12px, B.muted, italic]   │   │    │
│  │  │ > "Nine years. Never a sign. I'd    │   │    │
│  │  │ > stopped looking for one. Then     │   │    │
│  │  │ > after a few months of body-signal │   │    │
│  │  │ > work, he paused mid-play. Looked  │   │    │
│  │  │ > down at the wet spot. Then walked │   │    │
│  │  │ > toward the bathroom. He's not     │   │    │
│  │  │ > trained, but he FELT something.   │   │    │
│  │  │ > That had never happened before."  │   │    │
│  │  │ [Fraunces 16px, B.ink, italic]      │   │    │
│  │  └──────────────────────────────────────┘   │    │
│  │                                              │    │
│  │  "The common thread across all three: before│    │
│  │   they understood the signal gap, the       │    │
│  │   learning couldn't start because the       │    │
│  │   information couldn't arrive."             │    │
│  │   [Questrial 15px, B.soft, text-align: center]│  │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ CTA-4: Gentle Invite ────────────────────┐    │
│  │ [bg: #1F2D2F ink]                         │    │ ~320px
│  │ padding: 28px 22px 44px                    │    │
│  │ text-align: center, color: #FFF            │    │
│  │                                              │    │
│  │  "If any of this sounds like your child,    │    │
│  │   the next step isn't buying anything."     │    │
│  │   [Questrial 14px, #B8CACD, line-height 1.6]│   │
│  │                                              │    │
│  │  "The next step is understanding what        │    │
│  │   'signal arrival' actually looks like for   │    │
│  │   a nervous system that processes            │    │
│  │   differently. And whether there's a way     │    │
│  │   to bridge that gap."                       │    │
│  │   [Questrial 14px, #B8CACD]                 │    │
│  │                                              │    │
│  │  ┌─ CTA Button ─────────────────────┐      │    │
│  │  │ "Keep exploring →"                │      │    │
│  │  │ bg: #D8F57C, color: B.ink         │      │    │
│  │  │ padding: 17px 32px, radius: 999   │      │    │
│  │  │ Questrial 15.5px, weight 700      │      │    │
│  │  └───────────────────────────────────┘      │    │
│  │                                              │    │
│  │  [DESDEEP-14: Decorative handwritten touch] │    │
│  │  [subtle flourish SVG, teal-to-green]       │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ Signoff Card (SHORT variant) ────────────┐    │
│  │ [bg: #1F2A2C dark teal]                   │    │ ~280px
│  │ border: 1.5px solid #2F3D40                │    │
│  │ radius: 22px, padding: 26px 24px 24px      │    │
│  │ margin: 0 22px 0                            │    │
│  │                                              │    │
│  │  ┌─ Top gradient accent ──────────────┐    │    │
│  │  │ height: 4px, B.gradient            │    │    │
│  │  └────────────────────────────────────┘    │    │
│  │                                              │    │
│  │  [Avatar 58x58 round, gradient ring]       │    │
│  │  "A note from" [10.5px, #8FAFB2, upper]    │    │
│  │  "Lena Bauer" [17px, #FFF, weight 700]     │    │
│  │  "Customer Support · Mom of two autistic   │    │
│  │   sons" [12px, #8FAFB2, italic]            │    │
│  │                                              │    │
│  │  [dashed border #3A4547]                    │    │
│  │                                              │    │
│  │  "Talk soon," [12.5px, #B8CACD]            │    │
│  │  "Lena" [Caveat 42px, #D8F57C, cursive]    │    │
│  │  [flourish SVG, #D8F57C]                    │    │
│  │                                              │    │
│  │  ┌─ P.S. Block ──────────────────────┐     │    │
│  │  │ "P.S. You can try the body-signal │     │    │
│  │  │  approach for 60 days. By your     │     │    │
│  │  │  judgment. If it's not right for   │     │    │
│  │  │  your child, full refund, no       │     │    │
│  │  │  questions. That's how sure we are │     │    │
│  │  │  that understanding the signal gap │     │    │
│  │  │  changes everything."              │     │    │
│  │  │ [13px, #B8CACD, italic]            │     │    │
│  │  │ "P.S." in #D8F57C, weight 700     │     │    │
│  │  └───────────────────────────────────┘     │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ OutLine ─────────────────────────────────┐    │
│  │ [bg: #FFFFFF]                              │    │ 40px
│  │ "Unsubscribe link. You're in control."     │    │
│  │ [12.5px, B.muted, italic]                  │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ Footer ──────────────────────────────────┐    │
│  │ [bg: #FFFFFF]                              │    │ ~240px
│  │ padding: 30px 24px                          │    │
│  │ "Helping every body learn to listen."      │    │
│  │ [Fraunces 20px, B.ink, italic]             │    │
│  │ [Links: Blog | FAQ | Contact]              │    │
│  │ [14px, B.ink, weight 500]                  │    │
│  │ [Social icons: IG | FB | YT]               │    │
│  │ [Unsubscribe + address]                    │    │
│  │ [11.5px, B.muted]                          │    │
│  │ [gradient bar 60x3px]                      │    │
│  └─────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────┘
```

## 5. Technique Specs

### Section: Email Shell
- Component: EmailShell (from primitives.jsx)
- Width: 420px (MW constant)
- Height: auto
- Background: #FFFFFF (B.paper)
- Font-family: Questrial (F.main)
- Color: B.ink (#1F2D2F)

### Section: Preheader Bar
- Component: UTIL-06 Preheader Bar (inline div)
- Width: 100%
- Height: 36px
- Background: #F6F2EA
- Padding: 6px 20px
- Font-family: Questrial
- Font-size: 11px
- Font-style: italic
- Color: B.muted (#8A9B9D)
- Text-align: center

### Section: Header
- Component: Header (from primitives.jsx)
- Width: 100%
- Height: 72px
- Background: #FFFFFF (B.paper)
- Padding: 24px 20px 0
- Text-align: center
- Logo: brightkidco-logo-v2.png, height: 34px

### Section: HERO-3 — Permission Open
- Component: TitleBlock pattern (from primitives.jsx, adapted — no PartBadge for this email)
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 34px 22px 28px
- Text-align: center

#### Eyebrow
- Font-family: Questrial
- Font-size: 10.5px
- Font-weight: 700
- Letter-spacing: 2px
- Text-transform: uppercase
- Color: B.teal (#2BAEB4)
- Margin-bottom: 10px

#### H1
- Font-family: Questrial
- Font-size: 30px (desktop) / 22px (mobile)
- Font-weight: 700
- Line-height: 1.15
- Letter-spacing: -0.4px
- Color: B.ink (#1F2D2F)
- Margin: 0
- Second line: gradient text (B.gradientText)
- "isn't potty trained" rendered with B.gradient

#### Subhead
- Font-family: Questrial
- Font-size: 17px
- Font-weight: 500
- Line-height: 1.4
- Color: B.soft (#4A6568)
- Margin-top: 14px

### Section: Gradient Band (2 instances)
- Component: Band (from primitives.jsx)
- Width: 100%
- Height: 6px
- Background: linear-gradient(180deg, #2BAEB4 0%, #5DD07A 100%)
- No padding

### Section: LETTER-01 — Opener (Hook Block)
- Component: Letter (from primitives.jsx)
- Width: 100%
- Background: #FBF7F1 (B.cream)
- Padding: 20px 24px 28px

#### Opening paragraph (first = true)
- Font-family: Questrial
- Font-size: 17px
- Font-weight: 600
- Color: B.ink (#1F2D2F)
- Line-height: 1.6
- Margin-bottom: 14px

#### Body paragraphs
- Font-family: Questrial
- Font-size: 15px
- Font-weight: 400
- Color: B.soft (#4A6568)
- Line-height: 1.7
- Margin-bottom: 14px (between paragraphs), 0 (last)

#### Closing line ("If that sounds familiar...")
- Font-family: Questrial
- Font-size: 16px
- Font-style: italic
- Font-weight: 500
- Color: B.ink (#1F2D2F)

### Section: 1px Rule Divider
- Width: 100%
- Height: 1px
- Background: #E8DED5
- Margin: 0

### Section: LETTER-01 — Validation Block
- Component: Letter (from primitives.jsx)
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 22px 24px 28px

#### Stat Highlight Card (SP-05 pattern)
- Width: 100% (max-width 380px centered)
- Background: #FBF7F1 (B.cream)
- Border: 2px solid B.teal (#2BAEB4)
- Border-radius: 14px
- Padding: 24px 22px
- Text-align: center
- Margin-bottom: 20px

##### Stat Number "49%"
- Font-family: Fraunces
- Font-size: 42px
- Font-weight: 700
- Color: B.teal (#2BAEB4)
- Line-height: 1

##### Stat Label
- Font-family: Questrial
- Font-size: 17px
- Font-weight: 600
- Color: B.ink (#1F2D2F)
- Line-height: 1.3
- Margin-top: 8px

##### Stat Citation
- Font-family: Questrial
- Font-size: 12px
- Color: B.muted (#8A9B9D)
- Margin-top: 6px

#### Validation paragraph
- Font-family: Questrial
- Font-size: 15px
- Font-weight: 400
- Color: B.soft (#4A6568)
- Line-height: 1.7

#### Bold closing ("You didn't fail...")
- Font-family: Questrial
- Font-size: 17px
- Font-weight: 700
- Color: B.ink (#1F2D2F)
- Text-align: center
- Margin-top: 16px

### Section: EDU-8 — Mechanism Diagram
- Width: 100%
- Background: #FBF7F1 (B.cream)
- Border: 2px solid B.teal (#2BAEB4)
- Border-radius: 14px
- Padding: 28px 22px 28px
- Margin: 36px 22px

#### Eyebrow ("THE SIGNAL GAP")
- Font-family: Questrial
- Font-size: 10.5px
- Font-weight: 700
- Letter-spacing: 2px
- Text-transform: uppercase
- Color: B.teal (#2BAEB4)
- Margin-bottom: 10px

#### Mechanism paragraphs
- Font-family: Questrial
- Font-size: 15px
- Font-weight: 400
- Color: B.soft (#4A6568)
- Line-height: 1.7
- Margin-bottom: 14px

#### Signal chain diagram (inline ASCII/visual)
- Width: 100%
- Background: #FFFFFF (B.paper)
- Border: 1px solid #E8DED5
- Border-radius: 10px
- Padding: 18px 16px
- Text-align: center
- Font-family: Questrial
- Font-size: 13px
- Color: B.soft
- Elements: "Bladder → Brain → Child" with dashed break

#### Bold closing paragraph
- Font-family: Questrial
- Font-size: 15px
- Font-weight: 600
- Color: B.ink (#1F2D2F)
- Line-height: 1.7

### Section: SP-05 — Three-Family Testimonial
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 28px 22px

#### Section title ("Three families...")
- Font-family: Questrial
- Font-size: 17px
- Font-weight: 700
- Color: B.ink (#1F2D2F)
- Text-align: center
- Margin-bottom: 24px

#### Testimonial Card (×3)
- Background: #FBF7F1 (B.cream)
- Border-left: 3px solid (B.teal for Cards 1 & 3, B.green for Card 2)
- Border-radius: 14px
- Box-shadow: 4px 4px 0 B.ink
- Padding: 22px 20px
- Margin-bottom: 16px (between cards)

##### Attribution label ("Lena, mom of...")
- Font-family: Questrial
- Font-size: 12px
- Font-weight: 500
- Font-style: italic
- Color: B.muted (#8A9B9D)
- Margin-bottom: 8px

##### Quote text
- Font-family: Fraunces
- Font-size: 16px
- Font-weight: 400
- Font-style: italic
- Color: B.ink (#1F2D2F)
- Line-height: 1.6
- Border-left: 3px solid #E8DED5
- Padding-left: 14px

#### Closing line ("The common thread...")
- Font-family: Questrial
- Font-size: 15px
- Font-weight: 400
- Color: B.soft (#4A6568)
- Text-align: center
- Margin-top: 16px

### Section: CTA-4 — Gentle Invite
- Component: CTAClose pattern (from primitives.jsx)
- Width: 100%
- Background: B.ink (#1F2D2F)
- Padding: 28px 22px 44px
- Text-align: center

#### Intro text ("If any of this...")
- Font-family: Questrial
- Font-size: 14px
- Font-weight: 400
- Line-height: 1.6
- Color: #B8CACD
- Margin-bottom: 12px

#### Body text ("The next step is understanding...")
- Font-family: Questrial
- Font-size: 14px
- Font-weight: 400
- Line-height: 1.6
- Color: #B8CACD
- Margin-bottom: 24px

#### CTA Button ("Keep exploring →")
- Display: inline-block
- Padding: 17px 32px
- Background: #D8F57C
- Color: B.ink (#1F2D2F)
- Font-family: Questrial
- Font-size: 15.5px
- Font-weight: 700
- Border-radius: 999px
- Text-decoration: none
- Letter-spacing: 0.3px

#### Decorative flourish
- DESDEEP-14: Handwritten touch SVG
- Color: B.teal → B.green gradient
- Margin-top: 24px
- Opacity: 0.6

### Section: Signoff Card (SHORT variant)
- Component: Signoff (from primitives.jsx)
- Width: calc(100% - 44px)
- Background: #1F2A2C (dark teal)
- Border: 1.5px solid #2F3D40
- Border-radius: 22px
- Padding: 26px 24px 24px
- Margin: 0 22px 0

#### Top gradient accent
- Height: 4px
- Background: B.gradient (#2BAEB4 → #5DD07A)
- Position: absolute, top: 0

#### Avatar
- Width: 58px, height: 58px
- Border-radius: 50%
- Background: linear-gradient(135deg, #FFD866 0%, B.teal 100%)
- Padding: 2.5px
- Inner background: #FFFDF6
- Border: 1.5px solid B.ink

#### "A note from" label
- Font-family: Questrial
- Font-size: 10.5px
- Letter-spacing: 1.6px
- Text-transform: uppercase
- Color: #8FAFB2
- Font-weight: 700

#### Name "Lena Bauer"
- Font-family: Questrial
- Font-size: 17px
- Font-weight: 700
- Color: #FFFFFF

#### Role
- Font-family: Questrial
- Font-size: 12px
- Color: #8FAFB2
- Font-style: italic

#### Dashed separator
- Border-top: 1.5px dashed #3A4547
- Border-bottom: 1.5px dashed #3A4547
- Padding: 16px 0

#### "Talk soon,"
- Font-family: Questrial
- Font-size: 12.5px
- Color: #B8CACD

#### "Lena" signature
- Font-family: Caveat, cursive
- Font-size: 42px
- Line-height: 0.95
- Font-weight: 500
- Color: #D8F57C
- Letter-spacing: -0.5px

#### Flourish SVG
- Width: 54px, height: 40px
- Stroke: #D8F57C
- Opacity: 0.55

#### P.S. text
- Font-family: Questrial
- Font-size: 13px
- Line-height: 1.65
- Color: #B8CACD
- Font-style: italic
- "P.S." prefix: #D8F57C, font-weight: 700, font-style: normal

### Section: OutLine
- Component: OutLine (from primitives.jsx)
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 18px 24px 0
- Text-align: center
- Font-family: Questrial
- Font-size: 12.5px
- Color: B.muted (#8A9B9D)
- Font-style: italic

### Section: Footer
- Component: Footer (from primitives.jsx)
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 30px 24px 30px
- Text-align: center

#### Tagline
- Font-family: Fraunces (F.display)
- Font-size: 20px
- Font-style: italic
- Font-weight: 500
- Color: B.ink (#1F2D2F)
- Letter-spacing: -0.2px
- Margin-bottom: 30px

#### Links
- Font-family: Questrial
- Font-size: 14px
- Font-weight: 500
- Color: B.ink (#1F2D2F)
- Text-decoration: none
- Margin-bottom: 14px each

#### Social icons
- Width: 22px, height: 22px
- Stroke: B.ink, stroke-width: 1.8
- Gap: 22px between icons
- Margin: 14px 0 28px

#### Unsubscribe + address
- Font-size: 11.5px
- Color: B.muted (#8A9B9D)
- Line-height: 1.65
- Max-width: 340px

#### Gradient bar
- Width: 60px, height: 3px
- Background: B.gradient
- Border-radius: 3px
- Margin: 28px auto 0

---

## 6. Copy Blocks

### Block: Preheader
Whether you've been at this for weeks or years — here's what most parents miss.

### Block: Subject Line
The real reason your child isn't potty trained

### Block: Hero Eyebrow
From Lena

### Block: Hero Title Part 1
The real reason your child

### Block: Hero Title Part 2 (Accent)
isn't potty trained

### Block: Hero Subhead
Whether you've been at this for weeks or years, here's what most parents miss.

### Block: Letter Opening (Opener)
Whether your child is 3 or 10, talks about the potty but won't use it, or has never shown a sign of feeling wet, if they don't feel when they need to go, traditional methods can't work.

### Block: Letter Body (Recognition)
You came here because something is off. Maybe your kid sits on the toilet forever. Nothing happens. Then you put the pull-up back on and there's pee in it 30 seconds later. Maybe she plays while peeing without noticing, no pause, no reaction, no signal at all. Maybe he has never reacted to being wet. Not once. Not in years.

### Block: Letter Body (Failed Methods)
Or maybe you've been through all of it: the sticker charts, the timed sits, the social stories, the BCBA protocols, every book that promised "train your child in X days." Something about potty training your child just won't click, and you can't figure out why.

### Block: Letter Closing
If that sounds familiar, you're not alone.

### Block: Validation Body
Here's a number that changed how I think about all of this: 49% of autistic 4-5 year olds aren't toilet trained (Wiggins et al. 2022, CDC-funded study of 743 children). That's not a parenting failure rate, that's a method failure rate. Six out of seven kids in that age range face a gap that standard potty training approaches weren't built to address.

### Block: Validation Bold
You didn't fail. The methods did.

### Block: Mechanism Intro
The reason so many methods fall short isn't that you didn't try hard enough. It's that they're built on an assumption that doesn't hold for every child.

### Block: Mechanism Body
Most potty training methods assume the child can feel the internal signal that says "I need to go." The body sends the message, the brain receives it, the child acts on it. That chain works for neurotypical kids.

But for many kids whose nervous systems process signals differently, that chain is broken. The signal from bladder to brain arrives too late. Or it doesn't arrive at all.

### Block: Mechanism Definition
This has a name: interoception, the body's internal messaging system. It's the sense that tells you when you're hungry, when you're thirsty, when you need the bathroom. Research shows interoception works differently in children whose nervous systems process signals differently (Nicholson et al. 2019; Barmpagiannis & Baldimtsi 2025, 49-study review).

### Block: Mechanism Closing
The signal isn't stubbornness. It's not defiance. It's not something you failed to teach. It's a signal-timing gap, and until you know it exists, every method you try will be solving the wrong problem.

### Block: Social Proof Header
Three families. Three different kids. One missing piece.

### Block: Testimonial 1 (Lena — L1)
**Lena, mom of a verbal 4-year-old:**
> "He knew the routine. He could tell me 'I need to pee', after he'd already gone. We spent months thinking he was being difficult. Turned out the signal was reaching his brain after he was already wet. Once we addressed that, everything shifted."

### Block: Testimonial 2 (Sofia — L2)
**Sofia, mom of a 6-year-old with sensory differences:**
> "We tried everything the BCBA recommended. Scheduled sits, reward systems, social narratives. Nothing transferred. I was ready to accept it would never happen. Then I learned about the interoception gap, his brain wasn't getting the body signal in time. That changed our entire approach."

### Block: Testimonial 3 (Priya — L3)
**Priya, mom of a 9-year-old with high support needs:**
> "Nine years. Never a sign. I'd stopped looking for one. Then after a few months of body-signal work, he paused mid-play. Looked down at the wet spot. Then walked toward the bathroom. He's not trained, but he FELT something. That had never happened before."

### Block: Social Proof Closing
The common thread across all three: before they understood the signal gap, the learning couldn't start because the information couldn't arrive.

### Block: CTA Intro
If any of this sounds like your child, the next step isn't buying anything.

### Block: CTA Body
The next step is understanding what "signal arrival" actually looks like for a nervous system that processes differently. And whether there's a way to bridge that gap.

### Block: CTA Button Text
Keep exploring →

### Block: Signoff
Talk soon,

Lena ——
Customer Support · Mom of two autistic sons

### Block: P.S.
P.S. You can try the body-signal approach for 60 days. By your judgment. If it's not right for your child, full refund, no questions. That's how sure we are that understanding the signal gap changes everything.

### Block: Footer
Helping every body learn to listen.

Blog | FAQ | Contact

No longer want to receive these emails? Unsubscribe.
BrightKidCo, [address]

---

## 7. Image Briefs

### Image: Hero / Decorative (NOT IN BODY — zero product mention)
- Note: This email has ZERO product mention in the body copy (per creative strategy). No product images appear in the email body. The only imagery is:
  1. Logo in header
  2. Avatar in signoff card
  3. Decorative flourish SVG in CTA section

### Image: Header Logo
- Source: /root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/ (referenced as ../assets/brightkidco-logo-v2.png)
- Display: height 34px, auto width
- Border-radius: 0 (logo is transparent PNG)
- Context: Standard header placement, centered
- Alt text: "BrightKidCo"

### Image: Signoff Avatar
- Source: Placeholder SVG (portrait silhouette — swap for real Lena photo)
- Display: 58px × 58px, circular crop
- Border-radius: 50%
- Border: 1.5px solid B.ink
- Ring: gradient #FFD866 → B.teal, 2.5px padding
- Background: #FFFDF6
- Context: Lena's personal avatar in signoff card
- Alt text: "Lena Bauer, Founder of BrightKidCo"

### Image: Strategy Map Assigned Photos (NOT USED IN THIS EMAIL)
- /root/projects/brightkidco/raw/product-photos/lifestyle/founders-holding-pants-yellow-watermelon.png — ASSIGNED but NOT displayed (zero product mention strategy)
- /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-potty-ladder-yellow-woodland.png — ASSIGNED but NOT displayed (zero product mention strategy)
- Note: These images are reserved for potential future use in follow-up sequences or retargeting. The creative strategy explicitly states "No product mention anywhere" for this educational first impression.

---

## 8. Render Notes

### Dark Mode
- Background inversions: Email shell background stays #FFFFFF. Cream sections (#FBF7F1) invert to #1A2A2C. White sections (#FFFFFF) invert to #1F2D2F.
- Text color inversions: B.ink (#1F2D2F) → #FFFFFF. B.soft (#4A6568) → #B8CACD. B.muted (#8A9B9D) → #6A7B7D.
- CTA button: #D8F57C background stays (high contrast on dark). B.ink text stays.
- Signoff card: #1F2A2C background inverts to #0D1A1C. Text stays light.
- Gradient band: No change (teal-green reads well in dark mode).
- Testimonial cards: Cream background (#FBF7F1) inverts to #1A2A2C. Border-left colors (B.teal, B.green) remain vibrant.

### Responsive
- Breakpoint: 320px (minimum supported)
- Behavior at 320px: Hero title reduces to 22px. Body text reduces to 14px. Padding reduces to 16px horizontal. CTA button padding reduces to 14px 24px. Testimonial cards full-width. Mechanism diagram card padding reduces to 18px 14px.
- Behavior at 420px: Default rendering (all specs as listed above).
- Behavior at 600px+: Max-width 420px centered. Email appears in a centered column. Background outside email can be #E8E0D8 for warmth.

### Email Client Compatibility
- Outlook: MSO conditional comments for background colors on sections. VML background for cream sections. Border-radius fallback: use `mso-border-radius` or accept square corners on Outlook desktop. Gradient band: use solid teal fallback.
- Gmail: All styles inline (no CSS classes). Gmail strips <style> blocks in non-AMP mode. Ensure all colors are inline. Background-image on gradient band: Gmail supports inline style background. Testimonial card border-left: works in Gmail. Box-shadow: NOT supported in Gmail — accept flat rendering.
- Apple Mail: Full CSS support including gradients, border-radius, box-shadow, and background-image. Renders as designed.
- Mobile clients: Preheader text visible in preview. Hero title scales down. CTA button is 44px+ tap target. All sections stack vertically (default email rendering).

### Special Instructions
1. ZERO PRODUCT MENTION: The copy file and creative strategy explicitly state no product images or product text in the body. Do NOT add product photos, product showcases, or product links. The only images are the header logo and Lena's avatar.
2. COPY VERBATIM (Rule 4): Every word in the Copy Blocks section is extracted verbatim from the copy file. The JSX agent must place this exact text. No paraphrasing, no "improving."
3. SHORT SIGN-OFF: This email uses Lena's SHORT sign-off variant (not the full founder story variant). "Talk soon, Lena —— Customer Support · Mom of two autistic sons."
4. 60-DAY GUARANTEE: Appears ONLY in the P.S. block. Not in the CTA section, not as a standalone guarantee badge. The guarantee is a safety signal, not a conversion lever.
5. GRADIENT TEXT: The second line of the hero title ("isn't potty trained") uses B.gradientText (teal-to-green gradient text effect). This is the only gradient text in the email.
6. CROSS-LEVEL COMPLIANCE: This email satisfies R1-R6 simultaneously. No level labels. No diagnosis gatekeeping. "Nervous systems process signals differently" is the umbrella language. Symptom-only entry. Age range "3 or 10." Verbal/non-verbal paired. No timeline promises. Mini-win success framing.
7. FLOW DESIGN SIGNATURE: "Quick nudge, ink primary, teal accents, low density, direct CTA" — despite being "quick nudge" in signature, the copy file is ~400 words of body copy, so density is MEDIUM. The "low" density in signature refers to the absence of product blocks and comparison sections, not word count.
8. EMAIL CLIENT: Ensure the cream background (#FBF7F1) renders on Outlook via VML fallback. Gmail renders it via inline background-color.
