# Wireframe: PP-Level Detection — E1 | Cross-Level (Detection-10)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | PP-Level Detection (Flow 10) |
| **Position** | E1 — Day 14 |
| **Level** | Cross-Level (GF/L1/L2/L3) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/pp-level-detection/detection-10.md |
| **Strategy Map Entry** | flows.pp-level-detection.emails.e1 |
| **Flow Signature** | Gentle-diagnostic, kitchen-table conversation, four symptom cards |
| **Level Calibration** | No level-specific targeting. Single visual direction calibrated via R1-R6. Warmth-first, not brand-first. |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM, PRODUCT, CTA, GUARANTEE, DECORATIVE |
| **Total Estimated Height** | ~2800px (8 sections, long copy density) |

---

## 2. Strategy Box

**Big Idea:** The email is structured like a friendly conversation happening at the kitchen table — warm, informal, one mom asking another a gentle question over coffee. A single custom contraption sits at the center: four expandable symptom cards that feel like handwritten sticky notes. As the reader scans down, the email narrows from wide-open warmth (the initial hook) into a focused moment — four simple choices that each reveal a different path forward.

**Emotional Arc Position:** Post-purchase discovery moment. The subscriber has used the product for 14 days and now we gently ask for self-identification to personalize future support. This is not a sales email — it is a recognition email.

**Component Selection Rationale:**
- HERO-11 (Question Storm) — opens with a conversational question, matches the kitchen-table warmth
- LETTER-02 (Handwritten Opener) — personal, handwritten tone for the validation + mechanism sections
- SP-01 (Yellow Quote Block) — social proof as recognition, not conversion
- EDU-1 (Definition Block) — mechanism explained as gentle education, not clinical lecture
- ProductShowcaseSoft — soft product mention, no hard sell
- FLOW-12 (Level Detection) — the four symptom cards ARE the interaction, no CTA button
- TRUST-8 (Trust Icons Row) — subtle trust signals below the detection cards
- UTIL-05 (Signoff Card) — Lena sign-off in dark section, personal closeness

**Differentiation Note:** This is a segmentation email disguised as a conversation. The four cards use symptom-based language ONLY — no "Level 1," "Level 2," etc. The hidden accent stripes encode level specificity without ever displaying it. The overall visual temperature is warm but neutral.

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — CTAs, links, accent highlights
- Secondary: #1F2D2F (B.ink) — Primary text, borders, card shadows
- Accent: #5DD07A (B.green) — Success indicators, signal-dot icons
- Background: #FAF9F7 — Full email canvas, warm cream (kitchen-table warmth)
- Text: #4A6568 (B.soft) — Secondary text, body paragraphs
- Level 1 accent: #D4A853 (desaturated amber) — card left-edge stripe only
- Level 2 accent: #4A8C8C (muted teal) — card left-edge stripe only
- Level 3 accent: #8B6B8B (soft plum) — card left-edge stripe only
- GF accent: #B8A898 (warm gray) — card left-edge stripe only

**Typography:**
- Heading: Questrial, 36px mobile / 42px desktop, 700 weight, letter-spacing -0.02em
- Body: Helvetica Neue / Arial / sans-serif stack, 18px mobile / 20px desktop, 400 weight, line-height 1.6
- Card button text: Questrial, 16px, 400 weight
- Eyebrow: Questrial, 10.5px, 700 weight, letter-spacing 2px, uppercase, #2BAEB4
- Lena sign-off: 16px, italic for the P.S., handwritten feel. Lena's name at 18px bold with role line below at 14px regular

**Border Radius:** Cards: 12px (rounded corners), Buttons: 999px (pill), Images: 16px, Small: 8px
**Shadow:** Card: 0 2px 8px rgba(0,0,0,0.04), Primary: 3px 3px 0 #1F2D2F (ink block shadow)
**Spacing:** Section gap: 24px, H-padding: 24px, Card padding: 20px, Element gap: 14px

---

## 4. Layout ASCII

```
┌──────────────────────────────────────┐  420px
│  [EMAILSHELL] bg: #FAF9F7            │  (2% noise overlay)
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  HEADER: Logo + "Lena at        │ │  bg: #FFFFFF
│  │  BrightKidCo" centered          │ │  h: 58px
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  HERO-11: QUESTION STORM        │ │  bg: #FAF9F7
│  │  Eyebrow: "A QUESTION ABOUT     │ │  h: ~140px
│  │  YOUR KID"                       │ │
│  │  H1: "It's been two weeks       │ │
│  │  since your order arrived.       │ │
│  │  How's it going so far?"         │ │
│  │  Subtext: (warmth paragraph)     │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  LETTER-02: HANDWRITTEN OPENER  │ │  bg: #FAF9F7
│  │  ┌───────────────────────────┐  │ │  h: ~600px
│  │  │ VALIDATION SECTION        │  │ │
│  │  │ "Every family's situation │  │ │
│  │  │  is different..."         │  │ │
│  │  │ [thin emerald left-border │  │ │
│  │  │  on key paragraphs]       │  │ │
│  │  ├───────────────────────────┤  │ │
│  │  │ MECHANISM SECTION         │  │ │
│  │  │ "Here's what we know      │  │ │
│  │  │  happens next..."         │  │ │
│  │  │ [neural pathway visual]   │  │ │
│  │  └───────────────────────────┘  │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  SQUIGGLE DIVIDER (SVG)        │ │  bg: #FAF9F7
│  │  hand-drawn organic curve       │ │  h: 24px
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  FLOW-12: LEVEL DETECTION       │ │  bg: #FAF9F7
│  │  "Which of these sounds most    │ │  h: ~520px
│  │  like your child right now?"    │ │
│  │                                │ │
│  │  ┌───────────────────────────┐  │ │
│  │  │ CARD 1: Talk about potty  │  │ │  2px left stripe: #D4A853
│  │  │ but won't actually do it  │  │ │  bg: #FFFFFF, shadow: soft
│  │  │ [⬜ checkbox circle]      │  │ │  rounded: 12px
│  │  └───────────────────────────┘  │ │
│  │  ┌───────────────────────────┐  │ │
│  │  │ CARD 2: Sensory issues,   │  │ │  2px left stripe: #4A8C8C
│  │  │ tried many methods, still │  │ │
│  │  │ stuck                     │  │ │
│  │  │ [⬜ checkbox circle]      │  │ │
│  │  └───────────────────────────┘  │ │
│  │  ┌───────────────────────────┐  │ │
│  │  │ CARD 3: Non-verbal or     │  │ │  2px left stripe: #8B6B8B
│  │  │ high support needs,       │  │ │
│  │  │ progress looks different  │  │ │
│  │  │ [⬜ checkbox circle]      │  │ │
│  │  └───────────────────────────┘  │ │
│  │  ┌───────────────────────────┐  │ │
│  │  │ CARD 4: Still figuring    │  │ │  2px left stripe: #B8A898
│  │  │ out what's going on, keep │  │ │  bg: #EAF6F2 (mint)
│  │  │ it general                │  │ │  border: 2px dashed #2BAEB4
│  │  │ [⬜ checkbox circle]      │  │ │  (dashed variant)
│  │  └───────────────────────────┘  │ │
│  │                                │ │
│  │  Helper: "Pick whichever one   │ │  #8A9B9D, 14px, centered
│  │  fits. No wrong choice."       │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  GUARANTEE / RISK REVERSAL     │ │  bg: #FAF9F7
│  │  "Whatever you tell us, the     │ │  h: ~120px
│  │  60-day guarantee still stands."│ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  TRUST-8: TRUST ICONS ROW      │ │  bg: #FFFFFF
│  │  [Shield] [Star] [Heart]       │ │  h: ~80px
│  │  16,511 reviews · 4.9 ★       │ │
│  │  100,000+ parents              │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  UTIL-05: LENA SIGNOFF CARD    │ │  bg: #1F2D2F
│  │  "With understanding,           │ │  h: ~220px
│  │   Lena ——                       │ │
│  │   Customer Support ·            │ │
│  │   Mom of two autistic sons"     │ │
│  │  P.S. "Both my sons went        │ │
│  │  through this..."              │ │
│  │  Reply prompt                  │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  FOOTER                        │ │  bg: #FFFFFF
│  │  BrightKidCo · Address         │ │  h: ~140px
│  │  Unsubscribe · Social icons    │ │
│  └─────────────────────────────────┘ │
│                                       │
└──────────────────────────────────────┘
```

---

## 5. Section Specs

### Section 1: Header
- **Component:** UTIL-08 — Nav Bar
- **Exact copy:** Logo image "BrightKidCo" centered
- **Image:** /root/projects/brightkidco/raw/assets/brightkidco-logo-v2.png (alt: "BrightKidCo")
- **Dimensions:** Height 34px, centered
- **Background:** #FFFFFF
- **Padding:** 24px top, 20px sides, 0 bottom
- **Typography:** N/A (image)
- **Rendering Notes:** Logo must be retina-ready (2x). Center-aligned.

### Section 2: Hero — Question Storm
- **Component:** HERO-11 — Question Storm
- **Exact copy (verbatim from copy file):**
  - Eyebrow: "A QUESTION ABOUT YOUR KID"
  - H1: "It's been two weeks since your order arrived. How's it going so far?"
  - Subtext: "Maybe your kid is starting to pause when they feel the wetness. Maybe they haven't noticed at all yet. Maybe you're somewhere in between, a look here, a tug at the pants there, nothing consistent. All of that is completely normal for this stage."
- **Image:** No hero image — this is a connection email, not a product email. No product imagery above the fold.
- **Dimensions:** 420×140px
- **Background:** #FAF9F7 with 2% opacity noise overlay (micro-texture)
- **Padding:** 34px top, 24px sides
- **Typography:** Eyebrow: 10.5px, 700, letter-spacing 2px, uppercase, #2BAEB4. H1: Questrial 28px mobile / 36px desktop, 700, letter-spacing -0.02em, lowercase treatment, #1F2D2F. Subtext: 16px, 400, line-height 1.6, #4A6568
- **Rendering Notes:** Lowercase treatment on the question to feel conversational, not formal. No bold emphasis on headline. Warm, direct tone.

### Section 3: Letter + Handwritten Opener (Body Copy)
- **Component:** LETTER-02 — Handwritten Opener
- **Exact copy (verbatim from copy file):**
  - **Hook:** "Every kid's nervous system works on its own timeline. Some start showing awareness after two weeks. Others need eight. Both are normal. The only thing that matters is that the signal is getting a chance to arrive, and now we know it is, because the underwear is creating the feedback loop the brain needs."
  - **Validation:** "We've been doing this long enough to know: every family's situation is different. Your child might be 3 or 10. Verbal or non-verbal. Diagnosed or still figuring it out. You might have tried one method or twelve. You might be feeling hopeful or you might be protecting yourself from disappointment."
  - **Validation continued:** "Wherever you are on that spectrum, you're not alone in it. Two weeks into the Body-Signal approach, the most common experience is 'nothing dramatic happened yet.' That's not failure. That's the nervous system doing exactly what it needs to do, adjusting to receiving a signal it's never had before."
  - **Mechanism:** "Here's what we know happens next. The 30-60 seconds of gentle 'uh-oh' sensation after every accident gives the brain formation it's been missing. Each time that sensation arrives, a tiny neural connection strengthens. One day, sometimes two weeks in, sometimes eight, the brain connects the dots: 'This feeling means I peed. I should use the potty.'"
  - **Mechanism continued:** "The first sign is almost never 'I need to go.' It's smaller. A pause. A look down. A hand touching the underwear. A step toward the bathroom, even after it's already happened. That small moment is the entire mechanism working."
- **Image:** None (text-only section)
- **Background:** #FAF9F7
- **Padding:** 4px sides, 28px bottom
- **Typography:** Body: Helvetica Neue / Arial, 18px mobile / 20px desktop, 400, line-height 1.6, color #4A6568. Emphasis words ("pause," "look down," "tug at the pants") in gentle bold weight, not italic.
- **Rendering Notes:** Thin emerald (#5DD07A) 2px left-border on the validation paragraph and the mechanism paragraph — like underlining the most important thought with a colored pen. Applied only to these two paragraphs to keep it precious, not routine. Max-width 560px, generous top and bottom padding.

### Section 4: Squiggle Divider
- **Component:** 20.1 — Wave Divider (hand-drawn SVG variant)
- **Exact copy:** None (decorative)
- **Background:** #FAF9F7
- **Dimensions:** 420×24px, centered
- **Rendering Notes:** Hand-drawn SVG squiggle — 3-pass organic curve, NOT a straight horizontal rule. Subtle 2-second drawing animation (stroke-dashoffset to 0) renders in Apple Mail only. Fallback: static squiggle in #D6DCE5.

### Section 5: Flow-12 Level Detection (The Four Decision Cards)
- **Component:** FLOW-12 — Level Detection
- **Exact copy (verbatim from copy file):**
  - Prompt: "To make sure the emails you get from here match your child's experience, could you answer one question? It takes ten seconds. There's no wrong answer."
  - H2: "Which of these sounds most like your child right now?"
  - **Card 1:** ⬜ "Talks about the potty but won't actually do it"
  - **Card 2:** ⬜ "Sensory issues, tried many methods, still stuck"
  - **Card 3:** ⬜ "Non-verbal or high support needs, progress looks different here"
  - **Card 4:** ⬜ "Still figuring out what's going on, keep it general"
  - Helper: "Pick whichever one fits. There's no wrong choice, and whatever you tell us, the 60-day guarantee still stands."
- **Image:** None
- **Background:** #FAF9F7
- **Padding:** 28px sides, 20px top
- **Typography:** Prompt: 15px, 400, line-height 1.6, #4A6568. H2: Questrial 20px, 700, #1F2D2F. Card label: Questrial 16px, 400, #1F2D2F. Helper: 14px, 400, #8A9B9D, centered.
- **Rendering Notes — Custom Contraption:**
  - Four cards stacked vertically with gentle separation (12px gap)
  - Each card: warm-white (#FFFFFF) background, rounded corners (12px), soft shadow (0 2px 8px rgba(0,0,0,0.04))
  - Left edge: 2px-wide vertical accent stripe (hidden level coding):
    - Card 1: #D4A853 (desaturated amber) → L1 Sarah
    - Card 2: #4A8C8C (muted teal) → L2 Lisa
    - Card 3: #8B6B8B (soft plum) → L3 Maria
    - Card 4: #B8A898 (warm gray) → GF inclusive
  - Cards stack with slight 1-2px vertical offset (sticky-note feel)
  - Checkbox circles: Custom SVG circles (42px diameter), 1.5px dashed #2BAEB4 border when unfilled (invitation, not demand). On hover/tap: gentle emerald (#5DD07A) pulse fill.
  - Card 4 (dashed variant): #EAF6F2 (mint) background, 2px dashed #2BAEB4 border — visually distinct from solid-border cards. Signals "this is also welcome."
  - Animation: Cards fade in sequentially (50ms delay between each) via CSS opacity transition. Fallback: all cards visible static. Gmail/Outlook get static.
  - No CTA button — the buttons ARE the interaction. Each card links to a Klaviyo flow trigger or landing page that updates the subscriber's tag (L1/L2/L3/GF).

### Section 6: Guarantee / Risk Reversal
- **Component:** TRUST-1 — 60-Day Seal (text variant)
- **Exact copy (verbatim from copy file):**
  - "Pick whichever one fits. There's no wrong choice, and whatever you tell us, the 60-day guarantee still stands. You decide if this approach is working for your family."
- **Image:** None
- **Background:** #FAF9F7
- **Padding:** 20px sides, 24px top
- **Typography:** 15px, 400, line-height 1.6, #4A6568. "60-day guarantee" in bold, #2BAEB4.
- **Rendering Notes:** Clean, minimal. No guarantee seal image — text-only for this section. Serves as the safety net below the detection cards.

### Section 7: Trust Icons Row
- **Component:** TRUST-8 — Trust Icons Row
- **Exact copy (verbatim from copy file):**
  - "16,511 reviews · 4.9 ★ — 100,000+ parents trust BrightKidCo"
- **Image:** None (text + icons)
- **Background:** #FFFFFF
- **Padding:** 18px all sides
- **Typography:** 13px, 400, #8A9B9D, centered
- **Rendering Notes:** Three inline icons (shield, star, heart) in 16×16px, stroke #8A9B9D. Trust statement centered below icons. Subtle social proof without being heavy.

### Section 8: Lena Sign-Off (SHORT)
- **Component:** UTIL-05 — Signoff Card
- **Exact copy (verbatim from copy file):**
  - "With understanding,"
  - Sign-off: "Lena ——"
  - Role: "Customer Support · Mom of two autistic sons"
  - P.S.: "Both my sons went through this. One took 6, the other almost 8. However long it takes, we're here."
  - Reply prompt: "Reply to this email, Lena reads every response."
- **Image:** None
- **Background:** #1F2D2F
- **Padding:** 0 sides, 36px bottom
- **Typography:** Body: 13px, 400, line-height 1.65, color #B8CACD, italic. Signature: 42px Caveat cursive, #D8F57C. P.S.: 13px, #D8F57C (lime green). Reply: 12px, #8A9B9D.
- **Rendering Notes:** Dark card (#1F2A2C) with 22px border-radius, 1.5px border #2F3D40. Handwritten "Lena" in Caveat font. P.S. in lime green #D8F57C for emphasis. Avatar ring gradient #FFD866 to #2BAEB4. 1px emerald underline on Lena's name.

### Section 9: Footer
- **Component:** UTIL-04 — Footer
- **Exact copy (verbatim from copy file):**
  - BrightKidCo
  - [Physical Address, 123 Commerce St, Suite 200, Nashville, TN 37201]
  - "No longer want these emails? Unsubscribe or Manage Preferences."
  - "Questions? Reply to this email, Lena reads every response."
- **Background:** #FFFFFF
- **Padding:** 30px all sides
- **Typography:** Tagline: 20px, italic, 500, #1F2D2F. Links: 14px, 500, #1F2D2F. Legal: 11.5px, #8A9B9D, line-height 1.65
- **Rendering Notes:** Social icons (Instagram, Facebook, TikTok) in 22×22px, stroke #1F2D2F. Gradient accent bar at bottom: 60×3px, #2BAEB4 to #5DD07A.

---

## 6. Component Details

### HERO-11 — Question Storm
- **Component ID:** HERO-11 (L4103)
- **Props:** eyebrow text, headline text, subtext
- **Variants:** Default (no animation on cross-level — warmth, not urgency)
- **Custom overrides:** Lowercase treatment on question. No product imagery. 2% noise overlay on background for paper feel.

### LETTER-02 — Handwritten Opener
- **Component ID:** LETTER-02 (L7823)
- **Props:** background color, paragraph array
- **Variants:** Default with emerald left-border variant
- **Custom overrides:** Thin 2px emerald (#5DD07A) left-border on validation and mechanism paragraphs. Max-width 560px. Generous vertical padding. Emphasis words in gentle bold weight.

### SP-01 — Yellow Quote Block
- **Component ID:** SP-01 (L4803)
- **Props:** quote text, attribution, accent color
- **Variants:** Default
- **Custom overrides:** Not used as standalone section — social proof is embedded in the detection card context (the cards themselves ARE social proof via recognition).

### EDU-1 — Definition Block
- **Component ID:** EDU-1 (L5549)
- **Props:** title, body text, accent color
- **Variants:** Default
- **Custom overrides:** Mechanism section uses definition block format. "30-60 seconds" highlighted in #2BAEB4 teal. Neural pathway explanation in body text, not diagram.

### ProductShowcaseSoft
- **Component ID:** ProductShowcaseSoft (from product-showcase.jsx)
- **Props:** eyebrow, title, sub
- **Variants:** Soft (no hard product imagery in this email)
- **Custom overrides:** Not used as standalone product section — product is referenced in body copy only. The detection cards ARE the email's purpose, not product conversion.

### FLOW-12 — Level Detection
- **Component ID:** FLOW-12 (custom detection component)
- **Props:** prompt text, heading, card array, helper text
- **Variants:** Four-card stacked variant with hidden level coding
- **Custom overrides:** Cards use symptom-based language ONLY. Hidden accent stripes encode level specificity (amber=L1, teal=L2, plum=L3, warm-gray=GF). Card 4 is dashed variant on mint (#EAF6F2) background. Checkbox circles: 42px SVG, dashed #2BAEB4 border, emerald #5DD07A pulse on hover. Sequential fade-in animation (50ms delay). NO CTA button — cards ARE the interaction.

### TRUST-8 — Trust Icons Row
- **Component ID:** TRUST-8 (L6420)
- **Props:** icon array, text
- **Variants:** Default
- **Custom overrides:** Three icons (shield, star, heart) in 16×16px. Trust statement "16,511 reviews · 4.9 ★ — 100,000+ parents" centered below.

### UTIL-05 — Signoff Card
- **Component ID:** UTIL-05 (L9012)
- **Props:** signoff text, body text, role text
- **Variants:** SHORT variant (per brand voice §9)
- **Custom overrides:** SHORT sign-off. "With understanding" opener. P.S. in lime green #D8F57C. Reply prompt included. 1px emerald underline on Lena's name.

---

## 7. Image Briefs

### Image 1: Logo
- **Path:** /root/projects/brightkidco/raw/assets/brightkidco-logo-v2.png
- **Alt text:** "BrightKidCo"
- **Recommended dimensions:** 120×34px (header)
- **Cropping/Focal:** Full logo, retina-ready (2x)
- **Fallback color:** #FFFFFF

### Image 2: Lifestyle (optional, not used above fold)
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-rearview-cat-mustard.png
- **Alt text:** "Toddler from behind wearing BrightKidCo training pants with cat and mustard design"
- **Recommended dimensions:** 420×280px (if used in mechanism section)
- **Cropping/Focal:** Child from behind, warm tones, natural setting
- **Fallback color:** #FAF9F7
- **Usage note:** This email is connection-first, not product-first. Image may be used in the mechanism section as a small inline illustration (200px wide) rather than full-width hero. If used, it reinforces the "your kid is on their own timeline" message.

### Image 3: Accessory (optional, not used)
- **Path:** /root/projects/brightkidco/raw/product-photos/accessories/potty-targets-stickers-chart.png
- **Alt text:** "BrightKidCo potty training targets sticker chart"
- **Recommended dimensions:** 200×140px (if used in mechanism section)
- **Cropping/Focal:** Sticker chart fully visible
- **Fallback color:** #FAF9F7
- **Usage note:** Optional. Can be used as a small inline illustration in the mechanism section to visualize "the signal is getting a chance to arrive." Not required for this email's core purpose.

---

## 8. Rendering Notes

- **Email client considerations:** All CSS inline. No @font-face (Gmail strips). Questrial via system stack fallback (Helvetica Neue, Arial, sans-serif). Caveat for Lena's signature via Google Fonts with fallback to cursive. Outlook: VML background for hero area. Dark mode: respects prefers-color-scheme, #FAF9F7 → #1A1A1A, #1F2D2F → #FFFFFF, #D8F57C → #5DD07A.
- **Mobile responsive:** Single column below 480px. Cards become full-width with increased touch targets (min 48px height per button area). Padding reduces from 40px to 24px. Headline drops to 24px. Body text stays at minimum 16px for readability. Checkbox circles increase to 48px diameter on mobile.
- **Accessibility:** All images have descriptive alt text. Color contrast ratios: #1F2D2F on #FAF9F7 = 13.2:1 ✓, #4A6568 on #FAF9F7 = 5.8:1 ✓, #B8CACD on #1F2D2F = 6.1:1 ✓. Link text descriptive (no "click here"). ARIA labels on interactive card elements. Checkbox circles have role="button" and aria-label describing the card's symptom text.
- **Special instructions:** Cross-level email — serves ALL levels simultaneously. No level-specific imagery or language. The hidden accent stripes (amber/teal/plum/warm-gray) on card left-edges encode level specificity without ever displaying it. Only the design team and careful observers will notice the color thread. The 2% noise overlay creates a paper-stock feel that most readers won't consciously notice but will feel as "warmer" than a flat color. Checkbox circles: custom SVG, 42px diameter, 1.5px dashed #2BAEB4 border (invitation state), emerald #5DD07A pulse on hover (response state). The "Still figuring it out" card (Card 4) uses a dashed border on mint (#EAF6F2) background — visually distinct from solid-border cards, preventing abandonment from parents who can't categorize yet.
