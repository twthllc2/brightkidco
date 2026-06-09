# Wireframe: Welcome Flow — E3 | Level 3 (Maria)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Welcome Flow (01) |
| **Position** | E3 — Day 3 |
| **Level** | Level 3 — Maria (avatar_level3) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/welcome/welcome-01-e3-l3.md |
| **Strategy Map Entry** | strategy-map.json → flows.welcome.emails.e3-l3 |
| **Flow Signature** | dignity-first, warm cream + amber + clay palette, medium density, ZERO urgency, text-link CTA |
| **Level Calibration** | L3: Bold typography weight, cooler color warmth, zero ctaUrgency, medium copy density, dignity-first social proof, borderRadius 12px, shadowIntensity 4px, background #F8F6F3 |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL/SOCIAL PROOF, MECHANISM/EDUCATION, PRODUCT SHOWCASE, CTA, GUARANTEE/TRUST, DECORATIVE |
| **Total Estimated Height** | ~4200px |

## 2. Strategy Box

**Big Idea:** A single cotton thread, glowing gently, connecting a child's body to the bathroom light — not a training journey or success path, but a signal, something small, fragile, and real.
**Emotional Arc Position:** Validation → Stat normalization → Mechanism clarity → Cautious hope (E3 = credibility-building for the most resigned segment)
**Component Selection Rationale:** HERO-9 (Whisper Tone) opens with the quietest possible hero — no diagram, no stats, just a single sentence in serif that marks this as a story, not a pitch. LETTER-07 (Greeting Card) wraps the body copy in a greeting-card-like format that feels personal and intimate. SP-07 (Counter-Testimonial) uses the "negative" testimonial — acknowledging what hasn't worked before offering hope. EDU-1 (Definition Block) presents interoception as a simple definition, not a mechanism diagram. ProductShowcaseSoft presents the 1 Pair $34.99 offer gently, after the mechanism is explained. CTA-2 (Soft Link) is a text link, not a button — zero urgency. TRUST-4 (Dashed Policy Quote) uses a dashed-border quote for the guarantee.
**Differentiation Note:** L3 is the only level where: product follows mechanism by rule ("product NEVER before mechanism explanation"). The CTA is a text link (not button), left-aligned (not centered). No urgency animation. No countdown. No "limited time." The highest whitespace-to-content ratio of all levels (~55%). Motion approaches stillness.

## 3. Creative Box

**Color Palette:**
- Primary: oklch(65% 0.12 75) — warm amber — inline links, glow in textile visual, one word in CTA. Never more than 5% of canvas.
- Secondary: oklch(55% 0.04 60) — faded clay — subtle dividers, testimonial quote marks. Warm but recessive.
- Accent: oklch(35% 0.04 65) — deep warm brown — Lena's signature block only. Distinguishes her voice from body copy.
- Background: oklch(98% 0.008 85) — warm cream — full email background. Not white (#fff banned — too cold, transactional).
- Text: oklch(25% 0.01 80) — soft charcoal — all body copy. Not black (#000 banned — too harsh, too marketing).

**Typography:**
- Heading: Serif (Georgia or similar) — 28px desktop / 22px mobile, Bold (700), line-height 1.3, letter-spacing -0.02em. Only serif in the email — marks this as a story, not a pitch.
- Body: Sans-serif — 17px desktop / 16px mobile, Regular (400), line-height 1.6, color oklch(25% 0.01 80). 16px minimum on mobile (accessibility floor).
- Accent: Sans-serif — 17px, Medium (500), letter-spacing +0.05em — loose tracking signals "invitation, not command" (CTA text).
- Eyebrow: Sans-serif — 18px, Semi-bold (600), letter-spacing +0.02em — small caps feel, not traditional H2 styling.

**Border Radius:** Cards: 12px (only where absolutely necessary), Buttons: 999px (pill, for CTA), Images: 0px, Small: 0px (no bordered cards)
**Shadow:** Primary: 4px 4px 0 (minimal), Secondary: 2px 2px 0 (sub-cards)
**Spacing:** Section gap: 48px (2× base unit 24px), H-padding: 30px desktop / 20px mobile, Card padding: 24/24px (where used), Element gap: 16px

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────┐
│  BRIGHTKIDCO LOGO  (60px height, centered)      │
│  "Body-Signal Learning" tagline                  │
├──────────────────────────────────────────────────┤
│                                                   │
│  ═══ HERO — Whisper Tone ═══                     │
│  (serif italic, 28px, centered)                  │
│                                                   │
│  "He looked down at the wet spot for the         │
│   first time in 9 years."                        │
│                                                   │
│  [Signal Glow — abstract textile texture]        │
│  [warm amber radial glow, breathing animation]   │
│                                                   │
├────────── 0.5px hairline (60px wide) ───────────┤
│                                                   │
│  ═══ HOOK ═══                                    │
│  [LETTER-07 Greeting Card]                       │
│  "You're not expecting a miracle..."             │
│  "You stopped expecting miracles years ago..."   │
│  "But that moment, a pause, a look..."           │
│  "It took 9 years for one child's brain to       │
│   register: something happened."                 │
│                                                   │
├────────── 0.5px hairline (60px wide) ───────────┤
│                                                   │
│  ═══ VALIDATION ═══                              │
│  "You haven't failed. You've been fighting       │
│   the wrong problem."                            │
│  "Every method you tried..."                     │
│  "Sticker charts. Timer sits. Social stories."   │
│  "Forty hours of ABA a week."                    │
│  "A $2,500 private consultant."                  │
│  "Not because you didn't try hard enough."       │
│  "Because your child's nervous system processes  │
│   body signals differently."                     │
│                                                   │
├────────── 0.5px hairline (60px wide) ───────────┤
│                                                   │
│  ═══ MECHANISM ═══                               │
│  "49 studies. One clear finding."                │
│  [EDU-1 Definition Block]                        │
│                                                   │
│  **Layer 1, Inner Body-Signal Layer.**           │
│  Soft 100% cotton creates a gentle sensation     │
│  that lasts — an "uh-oh" feeling that lasts      │
│  30-60 seconds.                                  │
│                                                   │
│  **Layer 2, Smart Absorption Core.**             │
│  Protects furniture and clothing without         │
│  wicking the signal away.                        │
│                                                   │
│  **Layer 3, Protective Outer Barrier.**          │
│  Leak-resistant — not leak-proof.                │
│                                                   │
│  "The mechanism is one-step biology:             │
│   feedback creates awareness.                    │
│   Awareness creates the possibility of action."  │
│                                                   │
│  [Easter egg — barely visible at 40% opacity]    │
│  "The thread has always been there.              │
│   It's just never been felt before."             │
│                                                   │
├────────── 0.5px hairline (60px wide) ───────────┤
│                                                   │
│  ═══ TESTIMONIAL (Counter) ═══                   │
│  [SP-07 Counter-Testimonial]                     │
│                                                   │
│  "He looked down at the wet spot for the first   │
│   time in 9 years. That pause, that was more     │
│   than we'd seen in his entire life."            │
│                                                   │
│  "Another mother, another child:"                │
│                                                   │
│  "He has 30 words. 'Bathroom' isn't one of them. │
│   After 6 weeks in the Body-Signal underwear,   │
│   he started pulling at his pants when he'd      │
│   had an accident. He couldn't tell me. But he   │
│   showed me."                                    │
│                                                   │
│  "These are not success stories in the way other │
│   brands define success. There's no confetti..." │
│  "These are micro-wins, a pause, a touch, a look.│
│   And for mothers who have spent years seeing    │
│   nothing, those micro-wins are everything."     │
│                                                   │
├────────── 0.5px hairline (60px wide) ───────────┤
│                                                   │
│  ═══ PRODUCT ═══                                 │
│  [ProductShowcaseSoft]                           │
│                                                   │
│  "1 Pair, $34.99"                                │
│  "That's all this. One pair of underwear."       │
│  "Not a system. Not a program."                  │
│  "Add it alongside everything you're already     │
│   doing."                                        │
│  "No pressure. No schedule."                     │
│                                                   │
│  [product image — cotton texture with warm glow] │
│                                                   │
│  "For L3 families, the 3+3 Bundle and 5+5        │
│   bundles exist if you ever want them."          │
│  "But they're not the first step."               │
│                                                   │
├────────── 0.5px hairline (60px wide) ───────────┤
│                                                   │
│  ═══ GUARANTEE ═══                               │
│  [TRUST-4 Dashed Policy Quote]                   │
│  ┌──dashed border──┐                             │
│  │ "60 days. Your   │                            │
│  │  judgment. No     │                           │
│  │  questions."      │                           │
│  │                   │                           │
│  │ "If it doesn't    │                           │
│  │  work for your    │                           │
│  │  child, email us. │                           │
│  │  Full refund."    │                           │
│  └───────────────────┘                           │
│                                                   │
├────────── 0.5px hairline (60px wide) ───────────┤
│                                                   │
│  ═══ CTA ═══                                     │
│  [CTA-2 Soft Link]                               │
│                                                   │
│  "When you decide, it's here."                   │
│  (text link, left-aligned, loose tracking)       │
│                                                   │
│  "No deadline. No countdown. No 'limited time.'"  │
│  "The offer is here when you're ready."          │
│  "If that's today, it's here."                   │
│  "If that's next month, it's here."              │
│  "If that's in six months, it's here."           │
│                                                   │
│  "Your timeline. Your child's timeline.          │
│   Not ours."                                     │
│                                                   │
│  "Next time: How the Body-Signal Learning Layer  │
│   works — and why it's different..."             │
│                                                   │
├──────────────────────────────────────────────────┤
│  LENA SIGN-OFF                                   │
│  (no animation — sits still)                     │
│  "I have two autistic sons. One's 6, still in    │
│   the middle of it. The other took us until he   │
│   was almost 8."                                 │
│  "I know what it feels like to read an email     │
│   like this and think, 'I've heard this before.'" │
│  "We built this for families like mine.          │
│   And like yours."                               │
│  "If you have questions, real ones, honest ones, │
│   hit reply. You'll get me. I read every         │
│   response."                                     │
│  With understanding,                             │
│  Lena ——                                         │
│                                                   │
├──────────────────────────────────────────────────┤
│  FOOTER (warm cream background)                  │
│  BrightKidCo                                    │
│  [Physical Address, TBD by client]               │
│  No longer want these emails? Unsubscribe or     │
│  Manage Preferences                              │
│  Questions? Reply to this email, Lena reads      │
│  every response.                                 │
└──────────────────────────────────────────────────┘
```

## 5. Section Specs

### Section 1: Brand Header
- Component: UTIL-08 — Nav Bar (from component index)
- Copy: Logo image + "Body-Signal Learning" tagline
- Image: brightkidco-logo-v2.png (height: 34px)
- Background: oklch(98% 0.008 85) (warm cream)
- Padding: 24px 20px 0, centered
- Typography: Logo image only
- Notes: Full-width brand ribbon, 60px total height. Same brand header as other levels for consistency.

### Section 2: Hero (HERO-9 — Whisper Tone)
- Component: HERO-9 — Whisper Tone
- Copy (verbatim from copy file):
  "He looked down at the wet spot for the first time in 9 years."
- Image: Signal Glow — abstract textile texture (see Image Briefs)
- Background: oklch(98% 0.008 85) (warm cream, full email background)
- Padding: 30px horizontal, 48px vertical (2× base unit)
- Typography: Hook sentence 28px serif Bold #1A2A3A, letter-spacing -0.02em. This is the ONLY serif in the email — marks it as a story, not a pitch.
- Notes: The hero is intentionally minimal. No headline overlay, no badge, no diagram. Just the hook sentence in serif, centered, with generous whitespace above and below. The Signal Glow textile visual sits below the hook as a full-width band (~200px high on mobile, side panel on desktop). The glow has a 6-second breathing animation (CSS @keyframes breathe: scale(1.0) → scale(1.015) → scale(1.0), opacity 0.6 → 0.8 → 0.6). Falls back to static in clients without CSS animation.

### Section 3: Hairline Divider
- Component: 20.1 — Wave Divider
- Style: 0.5px hairline, 60px wide, left-aligned, color oklch(55% 0.04 60) (faded clay)
- Background: transparent
- Padding: 48px above (section gap), 0px below
- Notes: NOT full-width. Only 60px. Creates subtle section break without visual weight. This replaces the dot pattern divider used in L1/L2.

### Section 4: Hook (LETTER-07 — Greeting Card)
- Component: LETTER-07 — Greeting Card
- Copy (verbatim):
  "You're not expecting a miracle. You stopped expecting miracles years ago. But that moment, a pause, a look, a single step toward the bathroom, that's not an overnight change. That's a nervous system finally receiving a signal it never got before."
  "It took 9 years for one child's brain to register: *something happened.*"
- Background: oklch(98% 0.008 85) (warm cream)
- Padding: 30px horizontal
- Typography: Body 17px sans-serif regular oklch(25% 0.01 80), line-height 1.6. Emphasis "something happened" in italic.
- Notes: Single-column reading flow. No columns, no sidebars. The greeting-card format wraps the hook in a personal, intimate frame. Copy starts high on the page — no large hero image pushing the first words below the fold. The Hook sentence appears at approximately 15% from the top of the viewport.

### Section 5: Hairline Divider
- Component: 20.1 — Wave Divider
- Style: Same as Section 3

### Section 6: Validation
- Component: LETTER-07 — Greeting Card (continued)
- Copy (verbatim):
  "You haven't failed. You've been fighting the wrong problem."
  "Every method you tried, and you've tried them all, assumed your child could feel when they needed to go. Sticker charts. Timer sits. Social stories. Forty hours of ABA a week. A $2,500 private consultant. You did everything the experts told you, and nothing changed."
  "Not because you didn't try hard enough."
  "Because your child's nervous system processes body signals differently. The signal from bladder to brain doesn't arrive the way traditional methods assume it does. It's not behavioral. It's neurological. It's interoception, the eighth sensory system, and for deeply nervous system that picks up signals slowlys, that signal is delayed or absent."
- Background: oklch(98% 0.008 85) (warm cream)
- Padding: 30px horizontal, 48px section gap above
- Typography: Body 17px sans-serif regular oklch(25% 0.01 80). "You haven't failed. You've been fighting the wrong problem." — 18px sans-serif Semi-bold (600), letter-spacing +0.02em. The method list (sticker charts, timer sits, etc.) is inline in the paragraph, NOT bulleted.
- Notes: No bullet points in body copy. The Mechanism section's three layers use a custom inset treatment (4px left indent with 1px hairline), but the Validation section is pure paragraph flow.

### Section 7: Hairline Divider
- Component: 20.1 — Wave Divider
- Style: Same as Section 3

### Section 8: Mechanism (EDU-1 — Definition Block)
- Component: EDU-1 — Definition Block
- Copy (verbatim):
  "**49 studies. One clear finding.** Interoceptive differences in autism are real, measurable, and well-established."
  "The Body-Signal Learning Layer gives their brain the information it's been missing:"
  "**Layer 1, Inner Body-Signal Layer.** Soft 100% cotton creates a gentle sensation that lasts — an \"uh-oh\" feeling that lasts 30-60 seconds. Long enough for the brain to register: something happened."
  "**Layer 2, Smart Absorption Core.** Protects furniture and clothing without wicking the signal away. Unlike pull-ups, which keep your child completely dry and therefore completely unaware."
  "**Layer 3, Protective Outer Barrier.** Leak-resistant — not leak-proof. The small signal that reaches the outer layer is part of the feedback loop."
  "The mechanism is one-step biology: feedback creates awareness. Awareness creates the possibility of action."
- Background: oklch(98% 0.008 85) (warm cream)
- Padding: 30px horizontal, 48px section gap above
- Typography: Stat intro 18px sans-serif Semi-bold (600). Layer names 17px sans-serif Bold (500), followed by colon and explanation in regular weight. No bold emphasis on body text — hierarchy through weight contrast only.
- Notes: The three layers use a custom inset treatment: 4px left indent with 1px hairline (NOT a side-stripe border — side-stripes are banned). Each layer name is in bold, followed by a colon and the explanation in regular weight. No card containers, no bordered callout blocks. Copy lives directly on the warm cream background.

### Section 9: Easter Egg
- Component: Custom inline element
- Copy (verbatim):
  "The thread has always been there. It's just never been felt before."
- Background: oklch(98% 0.008 85) (warm cream)
- Typography: 17px sans-serif regular, color oklch(65% 0.12 75 / 0.4) — warm amber at 40% opacity. So faint it could be a rendering artifact.
- Notes: Woven into the final paragraph of the Mechanism section. Only readers who look closely will see it. Only readers who need it will understand it. For L3 Maria, the easter egg is philosophical — a quiet statement that acknowledges he has always had this capacity. The signal just needed a way through. This is the entire brand philosophy reduced to seven words.

### Section 10: Hairline Divider
- Component: 20.1 — Wave Divider
- Style: Same as Section 3

### Section 11: Testimonial (SP-07 — Counter-Testimonial)
- Component: SP-07 — Counter-Testimonial
- Copy (verbatim):
  "> \"He looked down at the wet spot for the first time in 9 years. That pause, that was more than we'd seen in his entire life.\""
  "Another mother, another child:"
  "> \"He has 30 words. 'Bathroom' isn't one of them. After 6 weeks in the Body-Signal underwear, he started pulling at his pants when he'd had an accident. He couldn't tell me. But he showed me.\""
  "These are not success stories in the way other brands define success. There's no confetti. No graduation certificate. No \"fully trained in 3 days.\" These are micro-wins, a pause, a touch, a look. And for mothers who have spent years seeing nothing, those micro-wins are everything."
- Background: oklch(98% 0.008 85) (warm cream)
- Padding: 30px horizontal, 48px section gap above
- Typography: Quotes 16px sans-serif italic oklch(25% 0.01 80), letter-spacing +0.01em. Generous left margin (NO block quote border — absolute ban on side-stripe borders). Attribution 14px sans-serif regular oklch(55% 0.04 60). Follow-up body 17px sans-serif regular.
- Notes: Large, faded (opacity 0.15) quote marks in clay color. NOT accompanied by a side stripe or colored bar. The italic text + faded quote marks provide enough visual distinction. This is the Counter-Testimonial format — it acknowledges what hasn't worked before offering hope.

### Section 12: Hairline Divider
- Component: 20.1 — Wave Divider
- Style: Same as Section 3

### Section 13: Product (ProductShowcaseSoft)
- Component: ProductShowcaseSoft (from product-showcase.jsx)
- Copy (verbatim):
  "**1 Pair, $34.99**"
  "That's all this. One pair of underwear. Not a system. Not a program. Not a replacement for your current routine."
  "Add it alongside everything you're already doing. Put it on after bath time. Try it for weekend afternoons when you're home and can watch. No pressure. No schedule. No \"you must commit to this method.\""
  "Just one pair of cotton underwear that gives a signal pull-ups can't."
  "For L3 families, the 3+3 Bundle and 5+5 bundles exist if you ever want them. But they're not the first step. The first step is one pair. No more."
- Image: /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-napping-watermelon-pink-shorts.png
- Alt text: "Toddler napping in BrightKidCo Body-Signal Learning pants, watermelon pink"
- Background: oklch(98% 0.008 85) (warm cream)
- Padding: 30px horizontal, 48px section gap above
- Typography: Price 17px sans-serif Bold (500), body 17px sans-serif regular. Price ($34.99) stated once, flatly, without formatting emphasis. No price anchor, no "was/now" comparison.
- Notes: Product follows mechanism by rule (GIULIANO-DEMANDS.md §25: "product NEVER before mechanism explanation"). This is the ONLY level where this ordering is enforced. The 1 Pair offer is primary L3 offer per GIULIANO-DEMANDS.md §25, Medicaid sensitivity. No product card with border/shadow — just the image and copy on the warm cream background. ProductShowcaseSoft is the gentlest product presentation variant.

### Section 14: Hairline Divider
- Component: 20.1 — Wave Divider
- Style: Same as Section 3

### Section 15: Guarantee (TRUST-4 — Dashed Policy Quote)
- Component: TRUST-4 — Dashed Policy Quote
- Copy (verbatim):
  "**60 days. Your judgment. No questions.**"
  "If it doesn't work for your child, email us. Full refund. Keep the underwear if it helps with anything, even if that's just nighttime protection or familiar texture. We mean it."
- Background: oklch(98% 0.008 85) (warm cream)
- Border: 1px dashed oklch(55% 0.04 60) (faded clay), border-radius 12px
- Padding: 24px internal, 30px horizontal, 48px section gap above
- Typography: Heading 18px sans-serif Semi-bold (600) oklch(25% 0.01 80). Body 17px sans-serif regular.
- Notes: The dashed border is subtle and warm — not a hard amber card like L2. The guarantee is presented as a quiet promise, not a prominently framed offer. "Keep the underwear if it helps with anything" — this is unique to L3, acknowledging that even if the primary function doesn't work, the product has value.

### Section 16: Hairline Divider
- Component: 20.1 — Wave Divider
- Style: Same as Section 3

### Section 17: CTA (CTA-2 — Soft Link)
- Component: CTA-2 — Soft Link
- Copy (verbatim):
  "When you decide, it's here."
  "No deadline. No countdown. No \"limited time.\" The offer is here when you're ready. If that's today, it's here. If that's next month, it's here. If that's in six months, it's here."
  "Your timeline. Your child's timeline. Not ours."
  "Next time: How the Body-Signal Learning Layer works — and why it's different from everything you've tried."
- Background: oklch(98% 0.008 85) (warm cream)
- Padding: 30px horizontal, 48px section gap above
- Typography: CTA text 17px sans-serif Medium (500), letter-spacing +0.05em, oklch(65% 0.12 75) (warm amber). Body 17px sans-serif regular oklch(25% 0.01 80). Next time teaser 14px sans-serif regular oklch(55% 0.04 60).
- Notes: Text link only — NO button. Left-aligned (NOT centered). Loose tracking signals "invitation, not command." NO CTA button animation (suggests urgency, forbidden for L3). NO border, NO background on the CTA text. The CTA sits at the bottom of the left column on desktop, not centered, not button-blocked. Just a text CTA with generous whitespace around it.

### Section 18: Lena Sign-Off
- Component: Custom sign-off block (no animation — sits still)
- Copy (verbatim):
  "I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8. If your kid is anywhere on this curve, that's normal here."
  "I know what it feels like to read an email like this and think, \"I've heard this before.\" I thought that too. Many times. What I didn't know was that the problem wasn't my child. It wasn't me. It was that no one had built underwear that actually teaches the signal."
  "We built this for families like mine. And like yours."
  "If you have questions, real ones, honest ones, the kind you're afraid to ask because you don't want to sound naive, hit reply. You'll get me. I read every response."
  "With understanding,"
  "Lena ——"
- Background: oklch(98% 0.008 85) (warm cream)
- Padding: 30px horizontal, 48px section gap above
- Typography: "A note from" 10.5px sans-serif Bold 700 oklch(55% 0.04 60). Name 17px sans-serif Bold oklch(35% 0.04 65) (deep warm brown). Role 12px italic oklch(55% 0.04 60). Body 15px sans-serif regular oklch(55% 0.04 60). Signature 42px Caveat oklch(65% 0.12 75) (warm amber). Closing 14px sans-serif regular oklch(55% 0.04 60).
- Notes: Lena's sign-off sits STILL — no animation. Motion before Lena's voice feels performative; stillness before it feels honest. The sign-off is smaller than body (15px vs 17px) to create intimacy. Deep warm brown (#3A2F25) for Lena's name distinguishes her voice from the body copy. The sign-off sits at the bottom of the left column on desktop, aligned with the visual's lower third.

### Section 19: Footer
- Component: UTIL-04 — Footer
- Copy (verbatim):
  "BrightKidCo"
  "[Physical Address, TBD by client]"
  "No longer want these emails? Unsubscribe or Manage Preferences"
  "Questions? Reply to this email, Lena reads every response."
- Background: oklch(98% 0.008 85) (warm cream) — NOT dark navy like L1/L2
- Padding: 20px 22px
- Typography: 12px sans-serif Light (300) oklch(55% 0.04 60), letter-spacing +0.01em, links oklch(65% 0.12 75)
- Notes: The footer stays on the warm cream background — no dark navy band. This maintains the seamless, personal-letter feel throughout. CAN-SPAM compliant with unsubscribe + physical address. Lowest visual priority by design.

## 6. Component Details

### HERO-9 — Whisper Tone (L3996)
- Props: hook text, visual slot
- Variants: Minimal centered text, textile visual below
- Custom overrides: The hook sentence is the ONLY serif in the email (Georgia Bold 28px). Signal Glow textile visual below with CSS breathing animation (6-second cycle, scale 1.0→1.015, opacity 0.6→0.8). Fallback: static image. No headline overlay, no badge, no diagram.

### LETTER-07 — Greeting Card (L7937)
- Props: body paragraphs, greeting format
- Variants: Personal intimate frame, single-column
- Custom overrides: Wraps body copy in a greeting-card-like format. Single-column, no sidebars. Copy starts high (15% from viewport top). Maximum line length: 65-75ch (cap body line length per impeccable design laws).

### SP-07 — Counter-Testimonial (L4940)
- Props: quote texts, attribution, follow-up body
- Variants: Counter-testimonial format — acknowledges what hasn't worked
- Custom overrides: Large faded (opacity 0.15) quote marks in clay color. NO side-stripe borders (absolute ban). Italic text + generous left margin. The counter-testimonial is unique to L3 — it validates resignation before offering micro-hope.

### EDU-1 — Definition Block (L5203)
- Props: definition text, layer descriptions
- Variants: Clean definition format
- Custom overrides: Three layers use custom inset treatment: 4px left indent with 1px hairline (NOT side-stripe). Layer names in bold followed by colon and regular-weight explanation. No card containers, no bordered blocks.

### ProductShowcaseSoft (from product-showcase.jsx)
- Props: product image, price, description
- Variants: Softest product presentation — no card, no border, no shadow
- Custom overrides: 1 Pair $34.99 as primary offer. No price anchor. No "was/now" comparison. Product follows mechanism (enforced rule for L3). Image on warm cream background, no framing.

### CTA-2 — Soft Link (L6658)
- Props: link text, body copy
- Variants: Text link only, left-aligned
- Custom overrides: NO button. NO border. NO background. Text link in warm amber, left-aligned, loose tracking (+0.05em). NO CTA animation (forbidden for L3). The CTA communicates "no pressure, whenever you're ready."

### TRUST-4 — Dashed Policy Quote (L6476)
- Props: guarantee heading, policy text
- Variants: Dashed border quote frame
- Custom overrides: 1px dashed clay border, border-radius 12px. Background transparent (cream shows through). "Keep the underwear" clause unique to L3.

### 20.1 — Wave Divider (L1858)
- Props: none
- Variants: Hairline separator
- Custom overrides: 0.5px hairline, 60px wide, left-aligned, clay color. NOT full-width. Used between all major sections.

### UTIL-08 — Nav Bar (L7682)
- Props: logo image, tagline
- Variants: Centered brand header
- Custom overrides: Same as L2 for brand consistency.

### UTIL-04 — Footer (L7571)
- Props: footer content
- Variants: Warm cream footer (NOT dark navy)
- Custom overrides: Stays on cream background. No dark band. Lightest visual priority.

## 7. Image Briefs

### Image 1: Signal Glow — Textile Texture (Hero Visual)
- Path: Custom CSS rendering (not from product photos)
- Alt text: "Abstract textile texture of cotton weave, softly illuminated from within with a warm amber-gold glow, suggesting a signal waking up"
- Recommended dimensions: Full-width band (~200px high on mobile, 40% column width on desktop)
- Cropping/focal point: Centered glow, diffuse
- Fallback color: oklch(98% 0.008 85) (warm cream)
- Style: CSS radial-gradient from oklch(70% 0.08 75 / 0.3) (warm amber glow) to oklch(75% 0.01 80 / 0.05) (barely-tinted cream) over a subtle textile-noise texture (repeating-linear-gradient at 45° with 0.5px lines at oklch(70% 0.005 80 / 0.08)). 6-second breathing animation.

### Image 2: Product Lifestyle (ProductShowcaseSoft)
- Path: /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-napping-watermelon-pink-shorts.png
- Alt text: "Toddler napping in BrightKidCo Body-Signal Learning pants, watermelon pink"
- Recommended dimensions: Full-width, max-height 250px
- Cropping/focal point: Child centered, soft natural light, peaceful moment
- Fallback color: oklch(98% 0.008 85)

### Image 3: Product Flat Lay (secondary)
- Path: /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-watermelon-pink.jpg
- Alt text: "BrightKidCo Body-Signal Learning pants flat lay, watermelon pink colourway"
- Recommended dimensions: 300×200px
- Cropping/focal point: Centered product, clean background
- Fallback color: oklch(98% 0.008 85)

## 8. Rendering Notes

- **Email client considerations:** Apple Mail (iOS/macOS): Full CSS animation support for Signal Glow breathing and Hook fade-in. Gmail app: No style block support — all enhancements degrade gracefully to static. Outlook desktop: No animation support, static fallback on everything. Samsung Mail, Yahoo: Partial support, test before deployment. The email is designed to work perfectly without any animation — motion is enhancement only.
- **Mobile responsive notes:** Desktop (>768px): 60/40 asymmetrical split. Left column (60%) carries body copy (max-width 600px, 65-75ch line length). Right column (40%) carries Signal Glow textile visual. Mobile (<768px): Collapses to single-column stack. Textile visual becomes full-width 200px band above body copy. All body text minimum 16px on mobile. H-padding reduces from 30px to 20px. CTA remains left-aligned on mobile — the asymmetry says "we're not trying to look like a sales email."
- **Accessibility notes:** Soft charcoal text on warm cream: contrast ratio meets WCAG AA (4.5:1 minimum) at the softer end of the range — feels less like a marketing document and more like a personal letter. All images require descriptive alt text. CTA text link has sufficient touch target (44px minimum). Easter egg text at 40% opacity may not meet contrast requirements — it is intentionally decorative and not essential content.
- **Special instructions:** ZERO urgency in ANY email — no countdown timers, no "limited time" flags, no red/orange alert tones, no CTA button animation. L3 decision cycle is 14-30+ days; pressure is forbidden. Product follows mechanism by rule (GIULIANO-DEMANDS.md §25). The CTA is a text link, not a button — this is the only level where this is the case. No card containers, no bordered callout blocks — copy lives directly on the warm cream background. Absolute bans enforced: side-stripe borders, gradient text, glassmorphism, identical card grids, emoji as icons. The CSS noise overlay on the entire email (opacity 0.015) gives a tactile, paper-like quality — imperceptible consciously but felt.
