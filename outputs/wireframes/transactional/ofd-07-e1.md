# Wireframe: Out for Delivery — E1 | Cross-Level (R1-R6)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Out for Delivery (Flow 07) |
| **Position** | E1 — Day of Delivery |
| **Level** | Cross-Level (L1/L2/L3/GF via R1-R6 calibration) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/transactional/ofd-07-e1.md |
| **Strategy Map Entry** | strategy-map.json → flows.transactional.emails.e3 |
| **Flow Signature** | clean-efficient, ink primary, transactional clarity |
| **Level Calibration** | Single visual direction, no level-specific imagery. R1-R6 calibrated. Cross-level: inclusive, symptom-over-label, timeline-flexible. |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL/SOCIAL PROOF, MECHANISM/EDUCATION, PRODUCT SHOWCASE, CTA, GUARANTEE/TRUST, DECORATIVE |
| **Total Estimated Height** | ~4200px |

## 2. Strategy Box

**Big Idea:** The email is structured like an unboxing moment, warm anticipation building from the top as a tracking-package icon transforms into an open box revealing the underwear, with a gentle "signal path" dotted line flowing from the package toward the bottom CTA, symbolizing that the signal is finally on its way to the child's brain.
**Emotional Arc Position:** Transactional clarity → Warm Lena touch → Anticipation
**Component Selection Rationale:** HERO-2 (Warm Hero) opens with a functional tracking status and package illustration — warm but transactional, not marketing-heavy. LETTER-01 (Paragraph Stack) delivers the body copy as a clean single-column reading flow, appropriate for transactional content. SP-04 (Trust Pills Row) provides quick credibility signals without clutter. EDU-2 (Step Cards) presents the 3-step "Wash → Hold → Wear" sequence as rounded cards with icons. ProductShowcaseSoft provides a gentle product reminder. FLOW-9 (Shipping Tracker) delivers the primary CTA: tracking link. TG2 (Shipping Timeline) shows expected delivery window. UTIL-07 (Section Header) provides clean section breaks.
**Differentiation Note:** This is a transactional email — clean, efficient, informative. No promotional CTA, no upsell. The tracking button is the primary action. The tone is "excited but grounded" (75/25 hope/realism). The ink primary palette is brand-aligned but restrained. The 3-step card sequence and "What to Expect" section provide genuine post-purchase education, not filler.

## 3. Creative Box

**Color Palette:**
- Primary: #1F2D2F (ink dark) — headings, CTA button, footer
- Secondary: #2BAEB4 (brand teal) — signal-path illustration accents, interactive hover states
- Accent: #5DD07A (brand green) — tracking button fill, signal dots, progress indicators
- Background: #FBF7F1 (warm off-white) — full email background
- Text: #4A6568 (ink medium) — all body copy
- Muted: #8A9B9D (ink light) — captions, citations, secondary info
- White: #FFFFFF — card backgrounds, button text on dark

**Typography:**
- Heading: 'Questrial', sans-serif — 28px desktop / 22px mobile, letter-spacing -0.02em
- Body: 'Questrial', sans-serif — 17px desktop / 16px mobile, Regular (400), line-height 1.6, color #4A6568
- Accent: 'Questrial', sans-serif — 16px, Bold (700), letter-spacing 0.02em, uppercase for tracking button
- Section headers: 'Questrial', sans-serif — 18px desktop / 16px mobile, letter-spacing normal
- Email-safe fallback: Arial, Helvetica, sans-serif

**Border Radius:** Cards: 16px, Buttons: 999px (pill), Images: 0px (within cards), Small: 8px (guarantee border), Step cards: 12px
**Shadow:** Primary: 0 1px 3px rgba(0,0,0,0.04) (subtle card depth)
**Spacing:** Section gap: 40px, H-padding: 30px desktop / 20px mobile, Card padding: 22/22px, Element gap: 14px

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────┐
│  BRIGHTKIDCO LOGO  (60px height, centered)      │
│  "Body-Signal Learning" tagline                  │
├──────────────────────────────────────────────────┤
│                                                   │
│  ┌──────────────────────────────────────────┐    │
│  │  [TRACKING PACKAGE ICON]                  │    │
│  │  ┌──────────────────────────────────────┐│    │
│  │  │  📦  TRACKING: OUT FOR DELIVERY      ││    │
│  │  │  ═══════════════════════════════════ ││    │
│  │  └──────────────────────────────────────┘│    │
│  │                                          │    │
│  │  "Your package is out for delivery       │    │
│  │   today."                                │    │
│  │  "That box on the truck? It's carrying   │    │
│  │   more than underwear..."                │    │
│  │                                          │    │
│  │  ┌──────────────────────────────────┐    │    │
│  │  │  [◉ TRACK YOUR DELIVERY →]       │    │    │
│  │  └──────────────────────────────────┘    │    │
│  └──────────────────────────────────────────┘    │
│                                                   │
├────────── · · · · · · · · · · · · · · · · · ──┤
│                                                   │
│  ═══ WHAT TO DO WHEN IT ARRIVES ═══              │
│                                                   │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────┐  │
│  │  ①  💧       │ │  ②  🤲       │ │  ③  👖   │  │
│  │  WASH        │ │  HOLD        │ │  WEAR    │  │
│  │  before      │ │  Let your    │ │  1-2 hrs │  │
│  │  first wear  │ │  child hold  │ │  at home │  │
│  │  (gentle     │ │  it. Touch   │ │  No      │  │
│  │  cycle, no   │ │  fabric.     │ │  prompts │  │
│  │  softener)   │ │  Explore.    │ │  No      │  │
│  │              │ │  Get familiar│ │  pressure│  │
│  └──────────────┘ └──────────────┘ └──────────┘  │
│                                                   │
│  · · · · (wavy divider) · · · ·                  │
│                                                   │
│  ═══ WHAT TO EXPECT IN WEEK 1 ═══                │
│                                                   │
│  ┌─emerald left border─┐                         │
│  │ "Most kids don't show│                        │
│  │  first signs in the  │                        │
│  │  first week..."      │                        │
│  └──────────────────────┘                        │
│                                                   │
│  Look for the small wins:                        │
│  • A pause before an accident                    │
│  • Looking down at the wet spot                  │
│  • Pulling at their pants afterward              │
│  • Staying dry 2 hours instead of 30 minutes     │
│                                                   │
├────────── · · · · · · · · · · · · · · · · · ──┤
│                                                   │
│  ═══ A GENTLE REMINDER ═══                       │
│                                                   │
│  ┌─mint #DBFFCD highlight box────┐               │
│  │ "Pull-ups wick moisture away  │               │
│  │  completely. That's great for │               │
│  │  furniture, but it removes    │               │
│  │  the one piece of feedback    │               │
│  │  the brain can use..."        │               │
│  └───────────────────────────────┘               │
│                                                   │
│  "Your job isn't to teach. Your job is to let    │
│   the underwear do the teaching..."              │
│                                                   │
│  · · · · (wavy divider) · · · ·                  │
│                                                   │
│  ═══ GUARANTEE ═══                               │
│  ┌──teal left border──┐                          │
│  │ "60 days to try it. │                         │
│  │  By your judgment.  │                         │
│  │  Full refund.       │                         │
│  │  No questions."     │                         │
│  └─────────────────────┘                         │
│                                                   │
│  ┌──────────────────────────────────┐            │
│  │  [◉ TRACK YOUR DELIVERY →]       │            │
│  └──────────────────────────────────┘            │
│                                                   │
├──────────────────────────────────────────────────┤
│  LENA SIGN-OFF                                   │
│  ┌─dark card with avatar─┐                      │
│  │  Photo + "A note from" │                     │
│  │  Lena                  │                     │
│  │  Customer Support ·    │                     │
│  │  Mom of two autistic   │                     │
│  │  sons                  │                     │
│  │  ─── dashed line ────  │                     │
│  │  "I've been where you  │                     │
│  │   are. Take your time. │                     │
│  │   When it arrives, let │                     │
│  │   your child hold it   │                     │
│  │   first."              │                     │
│  │  Talk soon,            │                     │
│  │  Lena                  │                     │
│  └────────────────────────┘                     │
│                                                   │
├──────────────────────────────────────────────────┤
│  FOOTER (#1F2D2F background)                    │
│  BrightKidCo                                    │
│  [Physical Address]                             │
│  support@brightkidco.com                        │
│  Reply to this email. Lena reads every response. │
│  Manage Preferences · Unsubscribe                │
└──────────────────────────────────────────────────┘
```

## 5. Section Specs

### Section 1: Brand Header
- Component: UTIL-08 — Nav Bar
- Copy: Logo image + "Body-Signal Learning" tagline
- Image: brightkidco-logo-v2.png (height: 34px)
- Background: #FBF7F1
- Padding: 24px 20px 0, centered
- Typography: Logo image only
- Notes: Full-width brand ribbon, 60px total height

### Section 2: Hero (HERO-2 — Warm Hero)
- Component: HERO-2 — Warm Hero
- Copy (verbatim from copy file):
  - Headline: "Out for delivery today, your Body-Signal underwear is arriving!"
  - Preview text: "Quick tip: open the box together and let your child feel the fabric first. Sensory familiarity helps the learning begin."
- Image: Tracking package icon (custom illustration, see Image Briefs)
- Background: #FBF7F1
- Padding: 30px horizontal, 40px vertical
- Typography: Headline 28px Questrial #1F2D2F, letter-spacing -0.02em. Preview 17px Questrial regular #4A6568.
- Notes: Full-width hero with tracking status bar at top. Package illustration in cardboard brown tones (#C19A6B). Below hero: concise "It's arriving today" statement in Lena's voice. Tracking button (green #5DD07A pill, 48px height, white text).

### Section 3: Anticipation Body Copy
- Component: LETTER-01 — Paragraph Stack
- Copy (verbatim):
  "Your package is out for delivery today. That box on the truck? It's carrying more than underwear, it's carrying the piece that's been missing."
  "Whether you've been trying for weeks or years, verbal or non-verbal, 3 or 10, if your child doesn't feel when they need to go, the Body-Signal Learning Layer is about to give their brain the feedback it's been missing."
- Background: #FBF7F1
- Padding: 30px horizontal, 40px section gap above
- Typography: Body 17px Questrial regular #4A6568, line-height 1.6
- Notes: Single-column reading flow. The word "signal" uses soft green #5DD07A italic treatment — subtle, noticeable on second read.

### Section 4: Divider
- Component: Hand-drawn wavy divider
- Background: transparent
- Padding: 30px above, 20px below
- Notes: SVG wavy line in #8A9B9D at 50% opacity. Organic, human, non-corporate.

### Section 5: 3-Step Cards (EDU-2 — Step Cards)
- Component: EDU-2 — Step Cards
- Copy (verbatim):
  "Here's what to do when the box lands on your porch:"
  Step 1: "Wash before first wear. The cotton inner layer is the signal-creator. Wash once on gentle cycle, no fabric softener, it coats the cotton and dulls the sensation."
  Step 2: "Let your child hold it. Open the package together. Let them touch the fabric, explore it, get familiar. Some kids need a day or two of sensory familiarity before wearing. That's normal."
  Step 3: "Start with 1-2 hours at home. No prompts. No pressure. Just wear, let the underwear do the teaching. The gentle 'uh-oh' feedback after every accident is how the brain learns to connect sensation to action."
- Card backgrounds: #FFFFFF, border-radius 12px, shadow: 0 1px 3px rgba(0,0,0,0.04)
- Step number dots: #5DD07A at 30% opacity, 8px diameter
- Background: #FBF7F1
- Padding: 30px horizontal, 40px section gap above
- Typography: Step label 13px Questrial Bold #1F2D2F, uppercase, letter-spacing +1px. Step text 15px Questrial regular #4A6568, line-height 1.4.
- Notes: Three rounded cards in a horizontal row (desktop), stacking vertically on mobile. Each card has an icon (water droplet, hands holding fabric, underwear outline) on left, step text on right. Signal dots (1/2/3 ascending pattern) in card corners as easter egg — #8A9B9D, 6px, visible only on second read.

### Section 6: Divider
- Component: Hand-drawn wavy divider
- Same as Section 4

### Section 7: What to Expect in Week 1
- Component: LETTER-01 — Paragraph Stack
- Copy (verbatim):
  "Most kids don't show first signs in the first week. That's not delay, that's desensitization. The nervous system needs time to register a new sensation."
  "Some kids show awareness in 2 weeks. Others need 8. Both normal."
  "Look for the small wins: a pause before an accident, looking down at the wet spot, pulling at their pants afterward, staying dry 2 hours instead of 30 minutes. These aren't failures, they're the signal wiring."
- Left border: 2px solid #5DD07A, 30% opacity
- Background: #FBF7F1
- Padding: 30px horizontal, 40px section gap above
- Typography: Body 17px Questrial regular #4A6568, line-height 1.6. "signal" in #5DD07A italic.
- Notes: Hairline emerald left border frames this section as important but not urgent. The mini-win list is presented as signal dots (8px #5DD07A circles) instead of standard bullets.

### Section 8: Gentle Reminder (Mint Callout)
- Component: Highlight box
- Copy (verbatim):
  "Pull-ups wick moisture away completely. That's great for furniture, but it removes the one piece of feedback the brain can use, the feeling of wetness. The Body-Signal Learning Layer lets that signal through. Just enough. Just long enough."
  "Your job isn't to teach. Your job is to let the underwear do the teaching, and be there when the signal finally arrives."
- Background: #DBFFCD (mint), border-radius 16px, 4px left #5DD07A border
- Background section: #FBF7F1
- Padding: 20px internal, 30px horizontal, 40px section gap above
- Typography: Body 17px Questrial regular #4A6568. "signal" in #5DD07A italic.
- Notes: Mint highlight box gives visual weight without urgency. The mechanism reminder sits inside the box. The closing line sits outside, below the box.

### Section 9: Divider
- Component: Hand-drawn wavy divider
- Same as Section 4

### Section 10: Guarantee
- Component: Guarantee block
- Copy (verbatim):
  "60 days to try it. By your judgment. If it doesn't work for your child, full refund. No questions."
- Border: 2px solid #2BAEB4, border-radius 8px
- Background: #FBF7F1
- Padding: 20px internal, 30px horizontal, 40px section gap above
- Typography: Heading 20px Questrial Bold #1F2D2F. Body 17px Questrial regular #4A6568.
- Notes: Teal-bordered card. Simple, confident, no hedging.

### Section 11: CTA Repeat
- Component: FLOW-9 — Shipping Tracker
- Copy (verbatim):
  - Button text: "Track your delivery"
- Background: #FBF7F1
- Padding: 30px horizontal, 24px vertical
- Typography: Button 16px Questrial Bold #FFFFFF on #5DD07A, pill shape (border-radius 999), 48px min height
- Notes: Primary CTA is tracking link — the only action in this email. No cross-sells, no upsells per S2 spec. Hover: background shifts to #4BC06A over 0.2s.

### Section 12: Lena Sign-Off (UTIL-05 — Signoff Card)
- Component: UTIL-05 — Signoff Card
- Copy (verbatim):
  "Talk soon,"
  "Lena ——"
  "Customer Support · Mom of two autistic sons"
  "P.S. I've been where you are. Take your time. When it arrives, let your child hold it first. That's enough for today."
- Background: #1F2D2F (dark card)
- Border: 1.5px solid #2F3D40, border-radius 22px
- Padding: 26px 24px 24px
- Typography: "A note from" 10.5px Questrial Bold #8FAFB2, name 17px Bold #FFFFFF, role 12px italic #8FAFB2, body 14px #B8CACD, signature 42px Caveat #5DD07A, closing 14px #B8CACD
- Notes: Avatar circle with teal gradient ring (#2BAEB4 → #5DD07A), dashed border separator, handwritten signature in Caveat font.

### Section 13: Footer
- Component: UTIL-04 — Footer
- Copy (verbatim):
  "You're receiving this because you placed an order with BrightKidCo."
  "BrightKidCo"
  "[Physical Address]"
  "support@brightkidco.com"
  "Reply to this email. Lena reads every response."
  "If you don't want to receive shipping updates, you can unsubscribe here."
- Background: #1F2D2F (dark navy)
- Padding: 20px 22px
- Typography: 12px regular #8A9B9D, links #2BAEB4
- Notes: CAN-SPAM compliant with unsubscribe + physical address.

## 6. Component Details

### HERO-2 — Warm Hero
- Props: headline, preview text, tracking status bar
- Variants: Full-width with tracking status
- Custom overrides: Tracking status bar at top (cardboard brown #C19A6B tones). Package icon transforms from closed to open. Signal-path dotted line emerging from package.

### LETTER-01 — Paragraph Stack
- Props: body paragraphs
- Variants: Single-column reading flow
- Custom overrides: "signal" words in #5DD07A italic throughout.

### EDU-2 — Step Cards
- Props: step number, icon, title, description
- Variants: 3-column desktop (horizontal), single-column mobile (stacked)
- Custom overrides: Each card 12px border-radius, white background, subtle shadow. Signal dots (1/2/3) in corners as easter egg. Icons: water droplet, hands, underwear outline.

### SP-04 — Trust Pills Row
- Props: trust badges
- Variants: Horizontal pill row
- Custom overrides: Not prominently used in this email — transactional nature means trust signals are embedded in Lena's sign-off and guarantee block rather than standalone pills.

### FLOW-9 — Shipping Tracker
- Props: button text, tracking URL
- Variants: Pill button, #5DD07A fill
- Custom overrides: Primary CTA at two positions (above fold after hero, and after guarantee at bottom). 48px min height. No secondary links.

### TG2 — Shipping Timeline
- Props: delivery status
- Variants: Minimal status bar
- Custom overrides: Integrated into hero section as a tracking status bar.

### UTIL-07 — Section Header
- Props: section title
- Variants: Clean text header
- Custom overrides: Used for "What to Do When It Arrives" and "What to Expect" section breaks.

### UTIL-05 — Signoff Card
- Props: signoff content
- Variants: Dark card with avatar + handwritten signature
- Custom overrides: Teal gradient ring on avatar (#2BAEB4 → #5DD07A). P.S. includes Lena's personal touch.

### UTIL-04 — Footer
- Props: footer content
- Variants: Standard email footer
- Custom overrides: CAN-SPAM compliant, includes physical address and unsubscribe link.

## 7. Image Briefs

### Image 1: Tracking Package Icon (Hero Illustration)
- Path: Custom illustration (not from product photos — created per creative strategy spec)
- Alt text: "Tracking package icon showing a cardboard box with a dotted signal path emerging, representing the Body-Signal Learning Layer on its way to your child"
- Recommended dimensions: 280px wide (desktop), scales to 100% on mobile
- Cropping/focal point: Centered on package
- Fallback color: #FBF7F1
- Style: Warm, minimal. Cardboard brown tones (#C19A6B, #E8D5B7). Dotted signal path in #8A9B9D transitioning to #5DD07A.

### Image 2: 3-Step Icons (Step Cards)
- Path: Custom icons (not from product photos)
- Alt text: "Three icons: water droplet for washing, hands holding fabric for holding, and underwear outline for wearing"
- Recommended dimensions: 48px × 48px each
- Cropping/focal point: Centered
- Fallback color: #FFFFFF
- Style: Hairline stroke, rounded caps, #1F2D2F outline, #5DD07A accent on signal dot.

### Image 3: Product Flat Lay (Gentle Product Reference)
- Path: /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-penguin-multicolor.jpg
- Alt text: "BrightKidCo Body-Signal Learning pants flat lay, penguin multicolor colourway"
- Recommended dimensions: 300×200px
- Cropping/focal point: Centered product
- Fallback color: #FBF7F1

### Image 4: Lifestyle Reference (Step 3 Context)
- Path: /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-outdoors-grass-disposable-diaper.png
- Alt text: "Toddler outdoors on grass, natural lifestyle shot showing real-world context"
- Recommended dimensions: 300×200px
- Cropping/focal point: Child centered, natural light
- Fallback color: #FBF7F1

## 8. Style Notes (Color Tokens)

| Role | Token | Hex | OKLCH | Usage |
|------|-------|-----|-------|-------|
| Ink Dark | --ink-dark | #1F2D2F | oklch(26% 0.02 185) | Headings, CTA button, footer background |
| Brand Teal | --brand-teal | #2BAEB4 | oklch(72% 0.08 185) | Guarantee border, interactive accents, avatar ring |
| Brand Green | --brand-green | #5DD07A | oklch(80% 0.18 145) | Tracking button, signal dots, progress indicators, sign-off signature |
| Ink Medium | --ink-medium | #4A6568 | oklch(48% 0.03 185) | Body copy, all reading text |
| Ink Light | --ink-light | #8A9B9D | oklch(64% 0.02 185) | Captions, citations, secondary info, wavy dividers |
| Warm Off-White | --warm-bg | #FBF7F1 | oklch(97% 0.01 85) | Full email background |
| White | --white | #FFFFFF | oklch(100% 0 0) | Card backgrounds, button text on dark |
| Mint | --mint | #DBFFCD | oklch(95% 0.06 145) | Mechanism reminder highlight box |
| Cardboard | --cardboard | #C19A6B | oklch(72% 0.08 65) | Package illustration tones |

## 9. Technique Specs

| Element | Property | Value | Notes |
|---------|----------|-------|-------|
| Body background | background | #FBF7F1 | Warm off-white, full email |
| Body background texture | SVG filter | 3% micro-noise overlay | Barely visible paper texture |
| Hero section | background | #FBF7F1 | Consistent with body |
| Tracking status bar | background | #C19A6B | Cardboard brown, 40% opacity |
| Tracking status bar | border-radius | 8px | Rounded corners |
| Tracking button | background | #5DD07A | Brand green fill |
| Tracking button | color | #FFFFFF | White text |
| Tracking button | border-radius | 999px | Pill shape |
| Tracking button | height | 48px | Minimum tap target |
| Tracking button | font | Questrial 16px Bold | Uppercase, letter-spacing 0.02em |
| Tracking button hover | background | #4BC06A | 10% darker green |
| Tracking button hover | transition | 0.2s ease | Smooth transition |
| Step cards | background | #FFFFFF | White |
| Step cards | border-radius | 12px | Rounded |
| Step cards | box-shadow | 0 1px 3px rgba(0,0,0,0.04) | Subtle depth |
| Step cards | padding | 22px | Internal |
| Signal dots | background | #5DD07A | Brand green |
| Signal dots | opacity | 30% | Subtle |
| Signal dots | diameter | 8px | Small circles |
| Wavy divider | stroke | #8A9B9D | Ink light |
| Wavy divider | opacity | 50% | Subtle |
| Wavy divider | stroke-width | 1px | Hairline |
| Week 1 section | left-border | 2px solid #5DD07A | 30% opacity |
| Mint highlight | background | #DBFFCD | Mint |
| Mint highlight | border-radius | 16px | Rounded |
| Mint highlight | border-left | 4px solid #5DD07A | Brand green accent |
| Guarantee card | border | 2px solid #2BAEB4 | Brand teal |
| Guarantee card | border-radius | 8px | Rounded |
| Lena sign-off card | background | #1F2D2F | Ink dark |
| Lena sign-off card | border-radius | 22px | Rounded |
| Lena sign-off card | border | 1.5px solid #2F3D40 | Subtle border |
| Lena signature | font | Caveat | Handwritten feel |
| Lena signature | color | #5DD07A | Brand green |
| Footer | background | #1F2D2F | Ink dark |
| Footer text | color | #8A9B9D | Ink light |
| Footer links | color | #2BAEB4 | Brand teal |
| Section gap | margin | 40px | Between major sections |
| H-padding desktop | padding | 30px | Horizontal |
| H-padding mobile | padding | 20px | Horizontal |

## 10. Level Markers

| Level | Differentiation |
|-------|-----------------|
| Cross-Level | Single visual direction. No level labels. Copy describes behaviors ("doesn't feel when they need to go") not diagnoses. |
| R1 — Symptom over label | No level labels anywhere. Behaviors, not diagnoses. |
| R2 — Recognition anchors | "What to Expect" section includes wins spanning all levels: pause (L1-L2), looking down (L2-L3), pulling pants (all), staying dry 2 hours (L1), staying dry 30 minutes (L2-L3). |
| R3 — Age ranges | "Whether you've been trying for weeks or years...3 or 10" — age-inclusive throughout. |
| R4 — Verbal/non-verbal | "Let your child hold it...explore it" — non-verbal accessible. Do-this-together framing works for any communication style. |
| R5 — Timeline flexibility | "Some kids show awareness in 2 weeks. Others need 8. Both normal." — no fixed promises. |
| R6 — Low-bar success | "A pause before an accident, looking down, pulling at pants, staying dry 2 hours instead of 30 minutes" — all mini-wins, not "trained." |

## 11. Interaction Notes

| Element | Interaction | Fallback |
|---------|-------------|----------|
| Tracking button | Hover: background #4BC06A, 0.2s transition | Static green button |
| Signal path GIF | 2-3s loop, dot traveling gray→green, settling at CTA | Static frame: dot at end, bright green |
| Button pulse (on GIF final frame) | Scale 1.0 → 1.03 → 1.0, 0.6s, once | No animation |
| Signal dots (step cards) | Hover (Apple Mail): gentle pulse | Static dots |
| Wavy dividers | Static SVG, no animation | N/A |
| Apple Mail / iOS | Full CSS animation support | — |
| Gmail app (Android/iOS) | No CSS animation | Static fallback |
| Outlook desktop | No CSS animation | Static fallback |

## 12. Easter Egg

**Signal Dots Easter Egg:** In the three-step card sequence, each card has ascending signal dots in its corner (1 dot, 2 dots, 3 dots). The dots are small (#8A9B9D, 6px), visible only on second read. Different levels interpret them differently:
- L1: "Growing progress toward Pre-K readiness"
- L2: "Accumulating sensory awareness data"
- L3: "Small steps accumulating, no rush"
- GF: "Building blocks, whatever the timeline"
