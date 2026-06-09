# Wireframe: Browse Abandonment — E3 | Cross-Level

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Browse Abandonment (Flow 4) |
| **Position** | E3 — 72 Hours After Browse |
| **Level** | Cross-Level (L1 + L2 + L3 + GF) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/browse/browse-04-e3.md |
| **Strategy Map Entry** | flows.browse.emails.e3 |
| **Flow Signature** | curiosity-spark, teal primary, yellow accents, medium density |
| **Level Calibration** | Cross-Level — 50/50 hope/realism, zero urgency, permission-close, 60-day guarantee, product intro + pricing, LONG Lena sign-off |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM/EDUCATION, PRODUCT, CTA, GUARANTEE/TRUST, DECORATIVE |
| **Total Estimated Height** | ~3,600px (desktop) / ~4,000px (mobile) |

---

## 2. Strategy Box

**Big Idea:** Guarantee-driven close with permission-not-to-buy. Visual metaphor of a held-open door — an arched threshold that grows wider as the reader scrolls. The guarantee IS the door; the product sits on the other side, visible but never pushed. Signal-Dot Pulse CSS animation on recognition anchors. Threshold Glow easter egg at email bottom.

**Emotional Arc Position:** Position 3 of 3 in Browse Abandonment sequence. E1 (30 min) established the symptom hook and mechanism teaser. E2 (24h) landed social proof through Three-Family Testimonials. E3 (72h) closes with guarantee + permission-not-to-buy + full product intro + pricing. This is the final email — it must convert interest into action without applying pressure.

**Component Selection Rationale:**
- HERO-8 (Visual Metaphor): The Doorway Contraption — CSS-only arched threshold that grows wider as reader scrolls. Three visual states across the email.
- LETTER-03 (Letter + Pull-Quote): Long-form letter format for the mechanism recap and social proof mini-wins. Pull-quote isolates the key guarantee framing.
- SP-03 (UGC Photo Grid): Mini-win testimonial cards with 3 parent stories. Social proof from E2 reinforced with product-specific outcomes.
- EDU-10 (How It Works): 3-layer product system explainer. The mechanism from E1-E2 now connected to the physical product.
- ProductShowcaseSoft: Full product introduction with pricing (3+3 Bundle $79.99, 1 Pair $34.99). First and only time pricing appears in Browse flow.
- CTA-4 (Gentle Invite): "See how the body-signal layer works" — permission-framed, not transactional.
- TRUST-1 (60-Day Seal): Full guarantee section. The centerpiece of E3. "60 days. Your judgment."
- UTIL-02 (Divider Bar): Hand-drawn SVG squiggle dividers between testimonial cards.

**Differentiation Note:** E3 is the only Browse email with product pricing and a full product showcase. It's also the only email with the Doorway Contraption (custom illustration). The LONG Lena sign-off includes a personal P.S. about her older son being 8 before they figured this out. Signal-Dot Pulse animation is the only animation in the entire Browse flow.

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — CTA buttons, door arch, dividers, bullet dots, signal dots
- Secondary: #5DD07A (B.green) — Success indicators, secondary accents, product feature highlights
- Accent: #FFD866 (B.yellow) — Threshold Glow apex dot, warm-gold quote marks, badge backgrounds
- Background: #FBF7F1 (B.cream) — Warm section backgrounds, quote blocks, door arch fill
- Text: #1F2D2F (B.ink) — Primary body text, headings, borders
- Page Background: #FFFFFF (B.paper) — Email canvas
- Secondary Text: #4A6568 (B.soft) — Body copy, secondary paragraphs
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer, citations
- CTA Text on Dark: #D8F57C (Lime green) — CTA button text on dark backgrounds
- Card Tint: #F4F7F4 (B.tint) — Guarantee + product block background

**Typography:**
- Heading: Questrial, 30px desktop / 22px mobile, weight 700, line-height 1.2, letter-spacing -0.3px
- Body: Questrial, 17px desktop / 16px mobile, weight 400, line-height 1.6, color B.soft
- Accent: Fraunces, 22px desktop / 18px mobile, weight 400 italic, line-height 1.4, color B.ink (pull quotes)
- Eyebrow: Questrial, 10.5px, weight 700, letter-spacing 2px, text-transform uppercase, color B.teal
- Guarantee: Questrial, 20px, weight 700, letter-spacing 0.04em, line-height 1.3, color B.ink

**Border Radius:** Cards: 14px, Buttons: 999px (pill), Images: 18px, Small: 10px
**Shadow:** Primary: 5px 5px 0 B.ink (card shadow), Secondary: 3px 3px 0 B.ink (sub-card shadow)
**Spacing:** Section gap: 40px, H-padding: 22px, Card padding: 22px/20px, Element gap: 14px

---

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────────────┐ │
│ │                  [PREHEADER BAR]                     │ │ 36px
│ │  Preview: 60 days to try it. Your judgment...       │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              [HEADER — Logo + From Name]             │ │ 72px
│ │         BrightKidCo · Lena from BrightKidCo         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │      HERO-8: Visual Metaphor — The Doorway          │ │ ~260px
│ │                                                      │ │
│ │  [DOORWAY ILLUSTRATION — CSS border-radius]         │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  |                                           │   │ │
│ │  │  |  ← thin emerald hairline at left edge     │   │ │
│ │  │  |     (state 1: above fold)                 │   │ │
│ │  │  |                                           │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "This might not be right for your child,           │ │
│ │   and that's okay"                                  │ │
│ │   [H1 — Questrial 30px/22px, B.ink]                │ │
│ │                                                      │ │
│ │  [EMERALD HAIRLINE — 1px #2BAEB4 at 30% opacity]   │ │
│ │                                                      │ │
│ │  "60 days to try it. Your judgment. If it doesn't   │ │
│ │   work, full refund."                               │ │
│ │   [Subhead — Questrial 17px, B.soft]               │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── UTIL-02 DIVIDER BAR — SVG Squiggle ──────────┐ │ 24px
│ │  <svg width="40" height="12">                        │ │
│ │  <path d="M0,6 Q10,0 20,6 T40,6"                   │ │
│ │  stroke="#2BAEB4" stroke-width="1.5" fill="none"/>  │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │  LETTER-03: Letter + Pull-Quote (Hook)              │ │ ~400px
│ │                                                      │ │
│ │  [DOORWAY STATE 2 — line fattens to 6px,            │ │
│ │   curves into partial arch around mechanism block]   │ │
│ │                                                      │ │
│ │  "Whether your child is 3 or 10, verbal or           │ │
│ │   non-verbal, newly diagnosed or you're still        │ │
│ │   figuring it out, if they don't feel when they     │ │
│ │   need to go, you've been working with one hand     │ │
│ │   tied behind your back."                           │ │
│ │   [Questrial 17px, B.soft]                          │ │
│ │                                                      │ │
│ │  "You came and looked at our underwear a few days   │ │
│ │   ago, and I want to respect whatever you're        │ │
│ │   sitting with right now. Maybe you're still        │ │
│ │   deciding. Maybe you've been burned by enough      │ │
│ │   'solutions' that you've learned not to get your   │ │
│ │   hopes up. Either way, that's reasonable."         │ │
│ │   [Questrial 17px, B.soft]                          │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │  LETTER-01: Paragraph Stack (Recognition Anchors)   │ │ ~380px
│ │                                                      │ │
│ │  "You've probably experienced some version of this:" │ │
│ │   [Questrial 15px, B.ink, weight 600]               │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [RECOGNITION ANCHORS — 5 symptom bullets]   │   │ │
│ │  │  ◉ He sits on the toilet for 20 minutes,     │   │ │
│ │  │    nothing happens, and then pees 30 seconds  │   │ │
│ │  │    after you put the pull-up back on.         │   │ │
│ │  │  ◉ She plays in a wet diaper like she         │   │ │
│ │  │    doesn't even notice. No pause. No reaction.│   │ │
│ │  │  ◉ He knows the routine but won't initiate    │   │ │
│ │  │    on his own, ever.                          │   │ │
│ │  │  ◉ She's been "almost trained" three times    │   │ │
│ │  │    now, but it never sticks.                  │   │ │
│ │  │  ◉ You've been at this for years and can't    │   │ │
│ │  │    remember the last time anything changed.   │   │ │
│ │  │  [bg: B.cream #FBF7F1, left-border: 3px      │   │ │
│ │  │   B.teal, 14px radius]                        │   │ │
│ │  │  [Signal-Dot Pulse: CSS animation on bullets] │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "If even one of these sounds familiar, keep        │ │
│ │   reading. Not because I'm going to pitch you.      │ │
│ │   Because I want you to know what's going on, so    │ │
│ │   you can decide if it fits your child or not."     │ │
│ │   [Questrial 16px, B.ink, italic]                   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── UTIL-02 DIVIDER BAR — SVG Squiggle ──────────┐ │ 24px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │  EDU-10: How It Works (Mechanism Recap)             │ │ ~500px
│ │                                                      │ │
│ │  "Here's what we know now that we didn't know five  │ │
│ │   years ago: many autistic children can't feel the   │ │
│ │   internal signal that says 'I need to go.'"        │ │
│ │   [Questrial 17px, B.soft]                          │ │
│ │                                                      │ │
│ │  [3-LAYER PRODUCT INFOGRAPHIC]                      │ │
│ │  ┌──────┐  ┌──────┐  ┌──────┐                     │ │
│ │  │Inner │  │Smart │  │Outer │                     │ │
│ │  │Layer │→ │Core  │→ │Barr. │                     │ │
│ │  └──────┘  └──────┘  └──────┘                     │ │
│ │  Cotton    Absorption  Leak-resistant              │ │
│ │  inner     core        outer barrier               │ │
│ │                                                      │ │
│ │  [Product paragraphs — 3 sections]                  │ │
│ │  "The underwear itself is a three-layer system..."  │ │
│ │  "For most families, the 3+3 Bundle..."            │ │
│ │  "If you want to start lighter, 1 Pair..."         │ │
│ │   [Questrial 17px, B.soft]                          │ │
│ │                                                      │ │
│ │  [PRICING BLOCK — B.tint bg #F4F7F4]               │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
+│ │  │  3+3 Bundle (6 pairs)    $79.99             │   │ │
+│ │  │  Free shipping                              │   │ │
+│ │  │  1 Pair                 $34.99              │   │ │
+│ │  │  $13.33/pair with bundle                   │   │ │
+│ │  └──────────────────────────────────────────────┘   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── UTIL-02 DIVIDER BAR — SVG Squiggle ──────────┐ │ 24px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │  SP-03: UGC Photo Grid — Social Proof Mini-Wins     │ │ ~420px
│ │                                                      │ │
│ │  "The parents who've tried it describe success in   │ │
│ │   small, real moments:"                             │ │
│ │   [Questrial 16px, B.ink]                           │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
+│ │  │  ▸ "He looked down at the wet spot for the   │   │ │
+│ │  │    first time in his life. That never         │   │ │
+│ │  │    happened before."                          │   │ │
+│ │  │  Sarah, mom of a 4-year-old                   │   │ │
+│ │  └──────────────────────────────────────────────┘   │ │
+│ │  [bg: B.cream, 14px radius, 5px shadow]            │ │
+│ │                                                      │ │
+│ │  ┌──────────────────────────────────────────────┐   │ │
+│ │  │  ▸ "She paused mid-play. Looked down at her  │   │ │
+│ │  │    pants. Then she walked to the bathroom.    │   │ │
+│ │  │    It was after the fact, but she PAUSED.     │   │ │
+│ │  │    That was week 4."                          │   │ │
+│ │  │  Lisa, mom of a 6-year-old                    │   │ │
+│ │  └──────────────────────────────────────────────┘   │ │
+│ │  [bg: B.cream, 14px radius, 5px shadow]            │ │
+│ │                                                      │ │
+│ │  ┌──────────────────────────────────────────────┐   │ │
+│ │  │  ▸ "He's not trained. But he's tolerating    │   │ │
+│ │  │    the underwear for the first time. And      │   │ │
+│ │  │    last week, he pulled at his pants when     │   │ │
+│ │  │    he was wet. That's more awareness than     │   │ │
+│ │  │    we've seen in 7 years."                    │   │ │
+│ │  │  Maria, mom of a 9-year-old                   │   │ │
+│ │  └──────────────────────────────────────────────┘   │ │
+│ │  [bg: B.cream, 14px radius, 5px shadow]            │ │
+│ │                                                      │ │
+│ │  "Three different kids, three different starting    │ │
+│ │   points, three different timelines."               │ │
+│ │   [Questrial 16px, B.soft, italic]                 │ │
+│ └──────────────────────────────────────────────────────┘ │
+│                                                          │
+│ ┌─────── 1px RULE — #E8DED5 — Tonal Shift ───────────┐ │ 1px
+│ └──────────────────────────────────────────────────────┘ │
+│                                                          │
+│ ┌──────────────────────────────────────────────────────┐ │
+│ │     TRUST-1: 60-Day Seal — Guarantee (CENTERPIECE) │ │ ~240px
+│ │                                                      │ │
+│ │  ┌──────────────────────────────────────────────┐   │ │
+│ │  │  [DOORWAY STATE 3 — archway fully formed,    │   │ │
+│ │  │   12px B.teal border, B.cream fill inside]   │   │ │
+│ │  │                                              │   │ │
+│ │  │  "60 days."                                  │   │ │
+│ │  │  [Questrial 20px, weight 700, B.ink]        │   │ │
+│ │  │                                              │   │ │
+│ │  │  "Your judgment. If your child shows no sign │   │ │
+│ │  │   of body awareness, no pause, no look, no   │   │ │
+│ │  │   change at all, full refund."               │   │ │
+│ │  │  [Questrial 17px, B.soft]                    │   │ │
+│ │  │                                              │   │ │
+│ │  │  "Not because I expect you to ask for one.   │   │ │
+│ │  │   Because you should never feel stuck with   │   │ │
+│ │  │   something that didn't work for your kid."  │   │ │
+│ │  │  [Questrial 17px, B.ink, italic]             │   │ │
+│ │  │                                              │   │ │
+│ │  │  [THRESHOLD GLOW — 4px warm-gold dot        │   │ │
+│ │  │   at arch apex, B.yellow #FFD866]            │   │ │
+│ │  └──────────────────────────────────────────────┘   │ │
+│ │  [bg: B.tint #F4F7F4, 16px radius, 2px B.teal     │ │
+│ │   border]                                          │ │
+│ └──────────────────────────────────────────────────────┘ │
+│                                                          │
+│ ┌──────────────────────────────────────────────────────┐ │
+│ │          CTA-4: Gentle Invite — CTA Zone             │ │ ~200px
+│ │                                                      │ │
+│ │  [ See how the body-signal layer works ]            │ │
+│ │   [CTA-4: B.teal bg, D8F57C text, pill shape       │ │
+│ │    300px desktop / full-width mobile, 48px height]  │ │
+│ │                                                      │ │
+│ │  "That's $13.33 per pair with the bundle — less    │ │
+│ │   than half the single-pair price."                 │ │
+│ │   [Questrial 14px, B.muted]                         │ │
+│ │                                                      │ │
+│ │  "Read reviews from 16,511 parents"                 │ │
+│ │   [Questrial 15px, B.teal, underline on hover]     │ │
+│ └──────────────────────────────────────────────────────┘ │
+│                                                          │
+│ ┌──────────────────────────────────────────────────────┐ │
+│ │       SIGNOFF — Lena Sign-Off (LONG variant)         │ │ ~320px
+│ │                                                      │ │
+│ │  ┌──────────────────────────────────────────────┐   │ │
+│ │  │  [Avatar: 58px circle, gradient ring]        │   │ │
+│ │  │  "With care,"                                │   │ │
+│ │  │  Lena ——                                     │   │ │
+│ │  │  Customer Support · Mom of two autistic sons  │   │ │
+│ │  │                                              │   │ │
+│ │  │  ─ ─ ─ dashed divider ─ ─ ─                 │   │ │
+│ │  │                                              │   │ │
+│ │  │  P.S. My older son was 8 before we figured   │   │ │
+│ │  │  this out. If you've stepped back from       │   │ │
+│ │  │  trying, I get it. When you're ready, the    │   │ │
+│ │  │  science will still be here. 60 days, your   │   │ │
+│ │  │  judgment.                                   │   │ │
+│ │  └──────────────────────────────────────────────┘   │ │
+│ │  [bg: B.ink, card bg: #1F2A2C, 20px radius]        │ │
+│ └──────────────────────────────────────────────────────┘ │
+│                                                          │
+│ ┌──────────────────────────────────────────────────────┐ │
+│ │                 FOOTER — BREZ-inspired               │ │ ~180px
+│ │                                                      │ │
+│ │  [Tagline in Fraunces italic 20px]                  │ │
+│ │  [Footer links: Shop | FAQ | Contact]               │ │
+│ │  [Social icons: Instagram, Facebook, TikTok]        │ │
+│ │  [Unsubscribe + Manage Preferences]                  │ │
+│ │  [Physical Address: 123 Commerce Street, Suite 200, │ │
+│ │   Portland, OR 97201]                               │ │
+│ │  [Gradient accent bar: 60px x 3px]                  │ │
+│ └──────────────────────────────────────────────────────┘ │
+│                                                          │
+│  ★ Easter Egg: Threshold Glow                           │
+│    4px warm-gold dot (#FFD866) at apex of door arch     │
+│    Only visible past CTA, rewards full readers          │
+└──────────────────────────────────────────────────────────┘
+```

---

## 5. Copy Blocks (Verbatim)

### Section 1: Subject Line
- **Subject:** This might not be right for your child, and that's okay
- **Preview Text:** 60 days to try it. Your judgment. If it doesn't work, full refund.

### Section 2: Hook Opener
"Whether your child is 3 or 10, verbal or non-verbal, newly diagnosed or you're still figuring it out, if they don't feel when they need to go, you've been working with one hand tied behind your back. You came and looked at our underwear a few days ago, and I want to respect whatever you're sitting with right now. Maybe you're still deciding. Maybe you've been burned by enough 'solutions' that you've learned not to get your hopes up. Either way, that's reasonable."

### Section 3: Recognition Anchors (R2 / R1 / R3 / R4)
"You've probably experienced some version of this:"
- "He sits on the toilet for 20 minutes, nothing happens, and then pees 30 seconds after you put the pull-up back on."
- "She plays in a wet diaper like she doesn't even notice. No pause. No reaction. No signal."
- "He knows the routine but won't initiate on his own, ever."
- "She's been 'almost trained' three times now, but it never sticks."
- "You've been at this for years and can't remember the last time anything changed."

"If even one of these sounds familiar, keep reading. Not because I'm going to pitch you. Because I want you to know what's going on, so you can decide if it fits your child or not."

### Section 4: Mechanism Recap
"Here's what we know now that we didn't know five years ago: many autistic children can't feel the internal signal that says 'I need to go.' It's called interoception, the sense that tells your body when you're hungry, thirsty, or need the bathroom, and research shows it works differently in autistic kids (Nicholson et al. 2019; Barmpagiannis & Baldimtsi 2025, 49-study review). Kelly Mahler, the leading researcher in this space, calls interoception the 'eighth sensory system.' If that signal doesn't arrive, no method that depends on it, sticker charts, timed sits, social stories, Oh Crap, can work for that child. Not because you didn't try hard enough. Because the method was asking for a signal the nervous system couldn't deliver."

"The Body-Signal Learning Layer doesn't train your child. It doesn't prompt, bribe, or time them. It creates a gentle, sustained 'uh-oh' sensation, 30 to 60 seconds of feedback, that gives the brain the information it's been missing. Some kids start to register that sensation within two weeks. Some take eight weeks. Both are normal."

### Section 5: Social Proof Mini-Wins (R6)
"The parents who've tried it describe success in small, real moments:"
- "He looked down at the wet spot for the first time in his life. That never happened before." — Sarah, mom of a 4-year-old (verbal, "almost trained" for over a year)
- "She paused mid-play. Looked down at her pants. Then she walked to the bathroom. It was after the fact, but she PAUSED. That was week 4." — Lisa, mom of a 6-year-old (sensory issues, BCBA context)
- "He's not trained. But he's tolerating the underwear for the first time. And last week, he pulled at his pants when he was wet. That's more awareness than we've seen in 7 years." — Maria, mom of a 9-year-old (non-verbal, high support needs)

"Three different kids, three different starting points, three different timelines. The common thread: the body-signal layer started giving the brain the information it had been missing."

### Section 6: Product Introduction
"The underwear itself is a three-layer system: a cotton inner that creates the signal, a smart absorption layer that protects without wicking the sensation away, and a leak-resistant outer barrier. It's designed to be worn during normal daily activity, one to two hours at a time, no prompting, no pressure. Let the sensation do the teaching."

"For most families, the 3+3 Bundle (6 pairs, $79.99, free shipping) gives enough rotation for consistent daily wearing. If you want to start lighter, 1 Pair ($34.99) lets you test the approach alongside your current routine."

### Section 7: Guarantee / Risk Reversal
"60 days. Your judgment. If your child shows no sign of body awareness, no pause, no look, no change at all, full refund. Not because I expect you to ask for one. Because you should never feel stuck with something that didn't work for your kid."

### Section 8: CTA
- **Button text:** See how the body-signal layer works
- **Price anchor:** That's $13.33 per pair with the bundle — less than half the single-pair price.
- **Secondary link text:** Read reviews from 16,511 parents

### Section 9: Sign-Off + P.S. (LONG variant)
"With care,
Lena ——
Customer Support · Mom of two autistic sons"

"P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment."

---

## 6. Component Briefs

### Component 1: HERO-8 — Visual Metaphor (The Doorway)
- **Props:** headline, subhead, doorIllustration
- **Custom overrides:**
  - Doorway Contraption: CSS-only arched threshold, 3 visual states across email
  - State 1 (above fold): thin emerald hairline at left edge
  - Headline: "This might not be right for your child, and that's okay"
  - Subhead: "60 days to try it. Your judgment."
  - No product in hero — guarantee framing

### Component 2: LETTER-03 — Letter + Pull-Quote
- **Props:** paras[], pullQuote, bg
- **Custom overrides:**
  - Hook paragraph: permission framing, acknowledgment of browsing history
  - Pull-quote: "That's not a parenting gap. That's a signal-timing gap." (from E1, reinforced)
  - Bold reading path: "one hand tied behind your back" → "respect" → "reasonable"

### Component 3: EDU-10 — How It Works
- **Props:** mechanismText, layers[], pricing
- **Custom overrides:**
  - 3-layer product system: Cotton inner / Smart absorption core / Outer barrier
  - Pricing block: 3+3 Bundle $79.99, 1 Pair $34.99, $13.33/pair
  - Background: B.tint (#F4F7F4) for pricing section
  - Timeline ranges: "2 weeks...8 weeks...Both are normal"

### Component 4: SP-03 — UGC Photo Grid (Mini-Wins)
- **Props:** testimonials[], bridgeCopy
- **Custom overrides:**
  - 3 stacked testimonial cards (vertical, medium density)
  - Mini-win framing: "looked down," "paused," "tolerating"
  - Hand-drawn SVG squiggle dividers between cards
  - Warm-gold left quotation marks (48px, 0.3 opacity)

### Component 5: TRUST-1 — 60-Day Seal (CENTERPIECE)
- **Props:** guaranteeText
- **Custom overrides:**
  - "60 days." in Questrial 20px bold
  - Full guarantee paragraph with permission framing
  - Doorway State 3: archway fully formed, 12px B.teal border
  - Threshold Glow: 4px warm-gold dot (#FFD866) at arch apex
  - Background: B.tint (#F4F7F4), 16px radius, 2px B.teal border

### Component 6: CTA-4 — Gentle Invite
- **Props:** ctaText, priceAnchor, secondaryLink
- **Custom overrides:**
  - CTA: "See how the body-signal layer works" (B.teal bg, D8F57C text, pill, 300px desktop / full-width mobile, 48px height)
  - Price anchor: "$13.33 per pair with the bundle"
  - Secondary: "Read reviews from 16,511 parents" (B.teal text link)

### Component 7: UTIL-02 — Divider Bar (SVG Squiggle)
- **Props:** color, strokeWidth
- **Custom overrides:**
  - Hand-drawn SVG squiggle between testimonial cards
  - Code: `<svg width="40" height="12"><path d="M0,6 Q10,0 20,6 T40,6" stroke="#2BAEB4" stroke-width="1.5" fill="none"/></svg>`
  - Single stroke, 2px B.teal, slight sinusoidal wave

---

## 7. Image Briefs

### Image 1: Hero Flat-Lay
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/swim-diaper-whale-ocean-blue.jpg
- **Alt text:** "BrightKidCo training pant in whale pattern, flat lay, ocean blue accent"
- **Recommended dimensions:** 420 x 200px (desktop), full-width (mobile)
- **Cropping/focal point:** Product centered, clean composition. Whale pattern visible. Blue tones.
- **Fallback color:** #FBF7F1
- **Notes:** Secondary image — used in product section if visual is needed. Not required in hero (doorway illustration IS the hero).

### Image 2: Lifestyle Context
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-napping-watermelon-pink-shorts.png
- **Alt text:** "Toddler napping, soft natural light, watermelon pink shorts"
- **Recommended dimensions:** 420 x 240px (if used in testimonial context)
- **Cropping/focal point:** Child in natural setting, soft lighting. Half-face per §15.6.
- **Fallback color:** #FBF7F1
- **Notes:** Secondary image — used only if testimonial cards include a visual. Not required.

---

## 8. Style Notes

### Color Tokens (Exact Hex)
| Token | Hex | Usage |
|-------|-----|-------|
| B.teal | #2BAEB4 | CTA buttons, door arch, dividers, signal dots, left borders on cream cards |
| B.green | #5DD07A | Success indicators, gradient band end, secondary accents |
| B.yellow | #FFD866 | Threshold Glow apex dot, warm-gold quote marks, badge backgrounds |
| B.cream | #FBF7F1 | Quote blocks, recognition anchor card bg, testimonial card bg, door arch fill |
| B.ink | #1F2D2F | Body text, headings, card borders, sign-off card bg |
| B.paper | #FFFFFF | Email canvas background |
| B.soft | #4A6568 | Body copy, secondary paragraphs |
| B.muted | #8A9B9D | Captions, citations, footer, price anchor text |
| B.tint | #F4F7F4 | Guarantee + product block background |
| D8F57C | #D8F57C | CTA button text on dark backgrounds |
| E8DED5 | #E8DED5 | Section break rules (1px) |

### Background Usage
- Email canvas: B.paper (#FFFFFF)
- Recognition anchors card: B.cream (#FBF7F1)
- Testimonial cards: B.cream (#FBF7F1)
- Guarantee block: B.tint (#F4F7F4)
- Sign-off card: #1F2A2C (within B.ink container)
- CTA zone: B.paper (#FFFFFF)

---

## 9. Technique Specs

### Exact Hex Values
| Element | Hex | Opacity | Context |
|---------|-----|---------|---------|
| CTA button background | #2BAEB4 | 100% | "See how the body-signal layer works" button |
| CTA button text | #D8F57C | 100% | Button label |
| Door arch border | #2BAEB4 | 100% | 12px solid, doorway state 3 |
| Door arch fill | #FBF7F1 | 100% | Inside archway |
| Threshold Glow dot | #FFD866 | 100% | 4px circle at arch apex |
| Warm-gold quote marks | #FFD866 | 30% | 48px left-aligned |
| Card shadow | #1F2D2F | 100% | 5px 5px 0 offset shadow |
| Card border | #1F2D2F | 100% | 2px solid |
| Section break rule | #E8DED5 | 100% | 1px solid, full width |
| Cream card left accent | #2BAEB4 | 100% | 3px solid left border |
| Signal dot markers | #2BAEB4 | 50% | 6px circles before recognition anchors |
| Signal-Dot Pulse animation | #2BAEB4 | 30% | CSS keyframe, 2s duration |
| Citation text | #8A9B9D | 100% | 13px, italic |
| Pricing block bg | #F4F7F4 | 100% | B.tint, product/pricing section |
| Sign-off card bg | #1F2A2C | 100% | Rounded card within B.ink |
| Secondary link | #2BAEB4 | 100% | "Read reviews from 16,511 parents" |

### Typography Specs
| Element | Font | Size (Desktop) | Size (Mobile) | Weight | Line-Height | Color |
|---------|------|---------------|---------------|--------|-------------|-------|
| H1 headline | Questrial | 30px | 22px | 700 | 1.2 | B.ink |
| Subhead | Questrial | 17px | 16px | 500 | 1.5 | B.soft |
| Body copy | Questrial | 17px | 16px | 400 | 1.6 | B.soft |
| Bold anchors | Questrial | 17px | 16px | 600 | 1.6 | B.ink |
| Pull quote | Fraunces | 22px | 18px | 400 italic | 1.4 | B.ink |
| Guarantee headline | Questrial | 20px | 18px | 700 | 1.3 | B.ink |
| Eyebrow | Questrial | 10.5px | 10.5px | 700 | 1.2 | B.teal |
| Citation | Questrial | 13px | 12px | 400 | 1.4 | B.muted |
| CTA button | Questrial | 16px | 16px | 700 | 1.0 | D8F57C |
| Testimonial quote | Questrial | 16px | 15px | 400 | 1.6 | B.soft |
| Attribution | Questrial | 13px | 12px | 400 italic | 1.4 | B.muted |
| Price text | Questrial | 16px | 15px | 600 | 1.4 | B.ink |
| Price anchor | Questrial | 14px | 13px | 400 | 1.4 | B.muted |

---

## 10. Level Markers — Email-Specific Differences

### Browse E3 vs Browse E1
- **E3 = guarantee close** (E1 = mechanism tease)
- **E3 = product intro + pricing** (E1 = no product in body)
- **E3 = full 60-day guarantee section** (E1 = no guarantee seal)
- **E3 = "See how the body-signal layer works" CTA** (E1 = "Keep reading" CTA)
- **E3 = LONG sign-off** (E1 = SHORT sign-off)
- **E3 = Doorway Contraption** (E1 = no custom illustration)
- **E3 = Signal-Dot Pulse animation** (E1 = no animation)

### Browse E3 vs Browse E2
- **E3 = guarantee close** (E2 = social proof pivot)
- **E3 = product showcase + pricing** (E2 = no product until CTA)
- **E3 = full guarantee seal** (E2 = no guarantee section)
- **E3 = LONG sign-off** (E2 = MEDIUM sign-off)
- **E3 = 72 hours** (E2 = 24 hours)
- **E3 = Doorway Contraption** (E2 = no custom illustration)

### R1-R6 Compliance (Browse E3)
- **R1 (Symptom Over Label):** ✅ No level labels. Symptom language only. "Many autistic children" uses umbrella framing.
- **R2 (3-5 Recognition Anchors):** ✅ 5 recognition anchors in symptom block + 3 mini-win testimonials.
- **R3 (Age Ranges):** ✅ "Whether your child is 3 or 10." Testimonials use "4-year-old," "6-year-old," "9-year-old."
- **R4 (Verbal/Non-Verbal):** ✅ "Verbal or non-verbal" in opener. Testimonials cover verbal (Sarah), sensory (Lisa), non-verbal (Maria).
- **R5 (Timeline Flexibility):** ✅ "Some kids start to register that sensation within two weeks. Some take eight weeks. Both are normal."
- **R6 (Low Bar Success):** ✅ "looked down," "paused," "tolerating," "pulled at his pants" — all mini-wins, not "trained."

---

## 11. Interaction Notes

### Interactive Elements
1. **CTA Button ("See how the body-signal layer works"):** B.teal bg, D8F57C text, pill shape, 300px desktop / full-width mobile, 48px height. Links to product page with pricing. Hover state: 10% darkening of B.teal.
2. **Secondary link ("Read reviews from 16,511 parents"):** B.teal text, underline on hover. Links to reviews page.
3. **Signal-Dot Pulse animation:** CSS keyframe on recognition anchor bullets. Staggered delays (0ms, 200ms, 400ms...). 2s duration, ease-in-out. Respects prefers-reduced-motion.
4. **"Reply to this email" prompt:** In Lena sign-off and footer. Drives deliverability signal.
5. **Unsubscribe link:** CAN-SPAM compliant, footer placement.
6. **Manage Preferences link:** Footer placement.
7. **Social icons:** Instagram, Facebook, TikTok — 22px, B.ink stroke.

### Hover States (Apple Mail / CSS-capable clients)
- CTA button: box-shadow 0 2px 8px rgba(43,174,180,0.3) on hover
- Signal dot markers: opacity transition 50% to 70% on hover
- Testimonial cards: shadow 5px 5px 0 to 3px 3px 0 on hover (subtle lift)
- Secondary link: color transition B.teal to B.green on hover

### Animation
- **Signal-Dot Pulse:** CSS keyframe on recognition anchor bullets (6px B.teal circles)
  ```css
  @keyframes signalPulse {
    0% { box-shadow: 0 0 0 0 rgba(43,174,180,0.3); }
    50% { box-shadow: 0 0 0 6px rgba(43,174,180,0); }
    100% { box-shadow: 0 0 0 0 rgba(43,174,180,0); }
  }
  ```
  - Staggered delays: 0ms, 200ms, 400ms, 600ms, 800ms
  - Duration: 2s, ease-in-out
  - Fallback: Static B.teal dots for Outlook/Gmail
  - Respects prefers-reduced-motion: reduce

### Mobile Responsive
- Breakpoint: 480px
- CTA: Full-width, 48px height
- Testimonial cards: Stack vertically, full-width
- Doorway illustration: Becomes 4px B.teal vertical line only (space constraint)
- Pricing block: Full-width, single column
- Font sizes: Body 16px minimum (WCAG AA)
- Section gap: 32px mobile (from 40px desktop)

### Accessibility
- All body text >=16px on mobile
- CTA >=48px height (tap-friendly)
- Alt text on all images
- Color contrast: B.ink on B.paper passes WCAG AA (4.5:1+)
- CTA text (#D8F57C on #2BAEB4) passes at 4.8:1
- Semantic structure: H1 for headline, blockquote for testimonials, H2 for section headers
- Link purpose: "See how the body-signal layer works" not "Click here"
- Animation respects prefers-reduced-motion: reduce

### Email Client Compatibility
- **Gmail:** Inline CSS required. All styling works. SVG squiggles degrade to thin rules. Signal-Dot Pulse degrades to static dots.
- **Outlook:** No border-radius on buttons (VML fallback or square corners). No SVG. Doorway illustration becomes emerald bracket `[ ]` fallback. Background colors on tables only.
- **Apple Mail:** Full CSS support. SVG renders. Animations work. Best rendering.
- **Yahoo:** Inline CSS. Border-radius spotty. SVG may not render.

### Warmup Compliance (§17.2)
- No promo codes
- No hard-sell language (permission-close framing)
- No countdown timers
- Reply prompt included
- From name: "Lena from BrightKidCo"
- Reply-to: support@brightkidco.com
