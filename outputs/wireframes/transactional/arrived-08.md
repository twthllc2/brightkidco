# Wireframe: Arrived & Welcome — E1 | Cross-Level (R1-R6)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Arrived & Welcome (Flow 08) |
| **Position** | E1 — Day 3 Post-Delivery |
| **Level** | Cross-Level (R1-R6 Calibrated) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/transactional/arrived-08.md |
| **Strategy Map Entry** | strategy-map.json → flows.transactional.emails.e4 |
| **Flow Signature** | clean-efficient, ink primary, transactional clarity, warm welcome |
| **Level Calibration** | Single visual direction, no level-specific imagery. R1-R6 calibrated. Cross-level: inclusive, symptom-over-label, timeline-flexible. |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL/SOCIAL PROOF, MECHANISM/EDUCATION, PRODUCT SHOWCASE, CTA, GUARANTEE/TRUST, DECORATIVE |
| **Total Estimated Height** | ~5200px |

## 2. Strategy Box

**Big Idea:** The email is structured like a delivery moment, a package arriving, being opened, revealing the learning journey inside. A subtle motion sequence of a cardboard box opening from left to right reveals the 3-layer illustration, with the signature 'uh-oh' signal pulse emanating outward. The visual metaphor: the package doesn't just contain underwear, it contains the first tangible bridge between the child's nervous system and body awareness.
**Emotional Arc Position:** Anticipation → Reassurance → Mechanism reinforcement → Gentle upsell
**Component Selection Rationale:** HERO-12 (Before Snapshot) opens with an editorial product shot on warm cream linen — the underwear casually worn-looking, suggesting real use. LETTER-04 (Letter + Image Break) delivers the long body copy with strategic image breaks to prevent reading fatigue. SP-04 (Trust Pills Row) provides credibility signals. EDU-8 (Mechanism Diagram) presents the 3-layer system as a visual diagram. ProductShowcaseMedium provides a gentle product moment. CTA-5 (Product CTA) delivers the primary upsell: "See what fits your routine" based on purchase. TRUST-1 (60-Day Seal) provides risk reversal. UTIL-05 (Signoff Card) closes with Lena's personal sign-off.
**Differentiation Note:** Unlike OFD (tracking-focused, functional), this email is the warm welcome — the "now what?" moment. It validates skepticism, sets realistic Week 1 expectations, and introduces the mechanism within a narrative flow. The editorial product shot on linen signals "real product, real use, not a stock photo." The upsell is gentle and permission-based, not promotional.

## 3. Creative Box

**Color Palette:**
- Primary: #1F2D2F (ink dark) — headings, CTA button, footer
- Secondary: #2BAEB4 (brand teal) — signal path illustration, interactive hover states, guarantee seal
- Accent: #5DD07A (brand green) — CTA button fill, emerald signal path, emphasis
- Background: #FBF7F1 (warm off-white) — full email background
- Body card: #FFFFFF (white) — content cards for readability
- Text: #4A6568 (ink medium) — all body copy
- Subtext: #8A9B9D (ink light) — captions, citations, secondary info, Lena sign-off text
- Warm Beige: #E8D5C4 — card backgrounds, dividers
- Mint: #DBFFCD — Week 1 expectations callout background

**Typography:**
- Heading: 'Questrial', sans-serif — 42px desktop / 28px mobile, letter-spacing -0.5px (tight for intrigue)
- H2: 'Questrial', sans-serif — 28px desktop / 22px mobile, letter-spacing -0.2px, line-height 1.3
- Body: 'Questrial', sans-serif — 17px desktop / 15px mobile, Regular (400), line-height 1.6, color #4A6568
- Accent: 'Questrial', sans-serif — 16px, Bold (700), letter-spacing 0.02em, uppercase for CTA buttons
- Eyebrow: 'Questrial', sans-serif — 13px, Bold (700), letter-spacing +1px, text-transform uppercase, color #5DD07A
- Email-safe fallback: Arial, Helvetica, sans-serif

**Border Radius:** Cards: 12px, Buttons: 999px (pill), Images: 0px (within cards), Callout boxes: 12px
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
│  │  [HERO-12 — BEFORE SNAPSHOT]              │    │
│  │  ┌──────────────────────────────────────┐│    │
│  │  │                                      ││    │
│  │  │  EDITORIAL PRODUCT SHOT              ││    │
│  │  │  Body-Signal underwear on warm       ││    │
│  │  │  cream linen, slightly angled        ││    │
│  │  │  for depth. Casually worn-looking.   ││    │
│  │  │                                      ││    │
│  │  │  ═══════════════════════════════════ ││    │
│  │  │  "It's here. Now what?"              ││    │
│  │  │  Questrial 42px #1F2D2F             ││    │
│  │  │  letter-spacing: -0.5px             ││    │
│  │  │                                      ││    │
│  │  │  "Week 1 is about exploring.        ││    │
│  │  │   Here's what to expect."            ││    │
│  │  │  Questrial 18px #4A6568             ││    │
│  │  └──────────────────────────────────────┘│    │
│  └──────────────────────────────────────────┘    │
│                                                   │
│  · · · · (emerald squiggle divider) · · · ·      │
│                                                   │
│  ═══ HOOK ═══                                    │
│  "Your package is here. The Body-Signal          │
│   underwear, the cotton, the layers, the         │
│   whole thing."                                  │
│  "If you're feeling a mix of excitement and      │
│   hesitation, that's the right combination."     │
│                                                   │
│  "Every parent who opens that first box has      │
│   the same question: 'Now what?'"                │
│                                                   │
│  "And the answer might surprise you: for the     │
│   first few days, you just let your child        │
│   wear them. That's it."                         │
│                                                   │
│  · · · · (emerald squiggle divider) · · · ·      │
│                                                   │
│  ═══ VALIDATION ═══                              │
│  ┌─emerald left border, 2px, 30% opacity──┐     │
│  │ "I know the skepticism you're carrying.  │     │
│  │  You've read the product pages. You've   │     │
│  │  watched the videos. But after years of  │     │
│  │  trying, that voice in your head says,   │     │
│  │  'What if this another thing that         │     │
│  │  doesn't work?'"                         │     │
│  │                                          │     │
│  │  "That voice isn't cynicism. It's        │     │
│  │   experience. And it's valid."           │     │
│  └──────────────────────────────────────────┘     │
│                                                   │
│  "Some kids show their first signal... in week   │
│   2 or 3. Some take 8 weeks. Both are normal."   │
│                                                   │
│  · · · · (emerald squiggle divider) · · · ·      │
│                                                   │
│  ═══ MECHANISM — 3-LAYER SYSTEM ═══              │
│  [EDU-8 Mechanism Diagram]                       │
│  ┌──────────────────────────────────────────┐    │
│  │  ┌──Layer 1: Signal Creation──┐          │    │
│  │  │  Cotton inner for gentle   │          │    │
│  │  │  first-contact awareness   │          │    │
│  │  └────────────────────────────┘          │    │
│  │  ┌──Layer 2: Smart Absorption──┐         │    │
│  │  │  Protects without wicking  │          │    │
│  │  │  the signal away           │          │    │
│  │  └────────────────────────────┘          │    │
│  │  ┌──Layer 3: Leak Resistance──┐          │    │
│  │  │  Outer barrier for leak    │          │    │
│  │  │  resistance                │          │    │
│  │  └────────────────────────────┘          │    │
│  └──────────────────────────────────────────┘    │
│                                                   │
│  "Unlike pull-ups, which wick moisture away to   │
│   keep your child 'too dry to learn,' the        │
│   Body-Signal Learning Layer gives the brain     │
│   the information it's been missing."            │
│                                                   │
│  "Nicholson et al. (2019) documented what many   │
│   parents already sense: autistic children       │
│   process internal body signals differently..."  │
│                                                   │
│  · · · · (emerald squiggle divider) · · · ·      │
│                                                   │
│  ═══ WHAT TO EXPECT IN WEEK 1 ═══                │
│  ┌─mint #DBFFCD highlight box────┐               │
│  │  Week 1 is exploration.        │              │
│  │  Your child may notice the     │              │
│  │  underwear. They may ignore    │              │
│  │  it completely. Both are fine. │              │
│  │                                │              │
│  │  Let them wear it for 1-2      │              │
│  │  hours at home. No timer.      │              │
│  │  No "did you feel anything?"   │              │
│  │  Just wear, go about the day,  │              │
│  │  change when wet, repeat.      │              │
│  └────────────────────────────────┘              │
│                                                   │
│  "If nothing happens in the first week, good.    │
│   That's not failure. That's your child's        │
│   nervous system registering a new sensation     │
│   for the first time."                           │
│                                                   │
│  ┌─warm beige card────────────────────┐          │
│  │  "He paused. He felt something.     │          │
│  │   That never happened before."      │          │
│  │   — Parent of a 5-year-old          │          │
│  └────────────────────────────────────┘          │
│                                                   │
│  · · · · (emerald squiggle divider) · · · ·      │
│                                                   │
│  ═══ GUARANTEE ═══                               │
│  ┌──teal border, rounded 12px──┐                 │
│  │ "60 days to try it.           │               │
│  │  By your judgment.            │               │
│  │  If you don't see a shift,    │               │
│  │  no pause, no awareness,      │               │
│  │  no change, full refund."     │               │
│  │                               │               │
│  │ "The guarantee isn't a sales  │               │
│  │  tactic. It's the only        │               │
│  │  honest thing to offer..."    │               │
│  └───────────────────────────────┘               │
│                                                   │
│  · · · · (emerald squiggle divider) · · · ·      │
│                                                   │
│  ═══ CTA ═══                                     │
│  ┌──────────────────────────────────────────┐    │
│  │  ┌──────────────────────────────────┐    │    │
│  │  │  [◉ SEE WHAT FITS YOUR ROUTINE →]│    │    │
│  │  └──────────────────────────────────┘    │    │
│  │                                           │    │
│  │  Secondary: "Learn more about how the     │    │
│  │  body signal works"                       │    │
│  └──────────────────────────────────────────┘    │
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
│  │  "I have two autistic  │                     │
│  │   sons. One's 6, still│                     │
│  │   in the middle of it. │                     │
│  │   The other took us    │                     │
│  │   until he was almost  │                     │
│  │   8."                  │                     │
│  │                        │                     │
│  │  "If your child is     │                     │
│  │   anywhere on this     │                     │
│  │   curve, that's normal │                     │
│  │   here."               │                     │
│  │                        │                     │
│  │  "P.S. 60 days to try  │                     │
│  │   it. By your judgment."│                     │
│  │                        │                     │
│  │  With understanding,   │                     │
│  │  Lena                  │                     │
│  └────────────────────────┘                     │
│                                                   │
├──────────────────────────────────────────────────┤
│  FOOTER (#1F2D2F background)                    │
│  BrightKidCo                                    │
│  123 Commerce Street, Suite 200                 │
│  San Francisco, CA 94111                        │
│  United States                                  │
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

### Section 2: Hero (HERO-12 — Before Snapshot)
- Component: HERO-12 — Before Snapshot
- Copy (verbatim from copy file):
  - Headline: "It's here. Now what?"
  - Subheadline: "Week 1 is about exploring. Here's what to expect."
- Image: Editorial product shot on warm cream linen (see Image Briefs)
- Background: #FBF7F1
- Padding: 30px horizontal, 40px vertical
- Typography: Headline 42px Questrial #1F2D2F, letter-spacing -0.5px. Subheadline 18px Questrial regular #4A6568.
- Notes: Full-width hero with editorial product shot. The underwear is NOT folded flat — it's casually worn-looking, suggesting real use. Headline overlaid or below image. Product shot at 50% viewport height on mobile.

### Section 3: Hook Body Copy
- Component: LETTER-04 — Letter + Image Break
- Copy (verbatim):
  "Your package is here. The Body-Signal underwear, the cotton, the layers, the whole thing. If you're feeling a mix of excitement and hesitation, that's the right combination. Every parent who opens that first box has the same question: 'Now what?'"
  "And the answer might surprise you: for the first few days, you just let your child wear them. That's it. No timer. No prompts. No pressure. Because the underwear is the teacher, not you."
  "Whether your child is 3 or 10, verbal or non-verbal, newly diagnosed or you're still figuring it out, if they don't feel when they need to go, the Body-Signal Learning Layer starts doing its work from the first wear. Each 'uh-oh' sensation, 30 to 60 seconds of gentle feedback, builds a neural pathway that no sticker chart, no scheduled sit, and no pull-up has ever been able to create."
- Background: #FBF7F1
- Padding: 30px horizontal, 40px section gap above
- Typography: Body 17px Questrial regular #4A6568, line-height 1.6. "uh-oh" in #5DD07A italic. "signal" in #5DD07A italic.
- Notes: Single-column reading flow. The opening paragraph is warm and validating. The mechanism introduction ("Each 'uh-oh' sensation...") is woven into the narrative, not a separate section.

### Section 4: Emerald Squiggle Divider
- Component: Hand-drawn SVG squiggle
- Stroke: #5DD07A, 1.5px, organic curve
- Background: transparent
- Padding: 30px above, 20px below
- Notes: Emerald squiggle mimics the "signal path" motif. Not a straight horizontal rule.

### Section 5: Validation Section
- Component: LETTER-04 — Letter + Image Break (continued)
- Copy (verbatim):
  "I know the skepticism you're carrying. You've read the product pages. You've watched the videos. But after years of trying, whether it's been a few months or a few years, that voice in your head says, 'What if this another thing that doesn't work?'"
  "That voice isn't cynicism. It's experience. And it's valid."
  "Some kids show their first signal, a pause, a look down, a step toward the bathroom, in week 2 or 3. Some take 8 weeks. Both are normal. Your child's nervous system isn't behind schedule; it's learning a new language, the language of body signals, and that takes repetition, not rushing."
- Left border: 2px solid #5DD07A, 30% opacity
- Background: #FBF7F1
- Padding: 30px horizontal, 40px section gap above
- Typography: Body 17px Questrial regular #4A6568. "That voice isn't cynicism. It's experience. And it's valid." — 17px Questrial Bold #1F2D2F, standalone emphasis line.
- Notes: The validation block has a subtle emerald left border (2px, 30% opacity) to anchor it as important. The emphasis line is centered, bold, with extra vertical margin.

### Section 6: Emerald Squiggle Divider
- Same as Section 4

### Section 7: Mechanism — 3-Layer System (EDU-8)
- Component: EDU-8 — Mechanism Diagram
- Copy (verbatim):
  "Here's what happens physically: the 3-layer system, cotton inner for gentle first-contact awareness, a smart absorption layer that protects without wicking the signal away, and an outer barrier for leak resistance, creates gentle sensation that lasts about 30 to 60 seconds long."
  "Unlike pull-ups, which wick moisture away to keep your child 'too dry to learn,' the Body-Signal Learning Layer gives the brain the information it's been missing."
  "Nicholson et al. (2019) documented what many parents already sense: autistic children process internal body signals, like bladder fullness, differently. The signal arrives; it just arrives differently. This underwear is designed around that neurological fact, not despite it."
- Layer diagram:
  ```
  Layer 1: Signal Creation (cotton inner)
  Layer 2: Smart Absorption (protects without blocking)
  Layer 3: Leak Resistance (outer barrier)
  ```
  Each layer as a rounded card with emerald accent border
- Background: #FBF7F1
- Padding: 30px horizontal, 40px section gap above
- Typography: Layer names 13px Questrial Bold #1F2D2F, uppercase, letter-spacing +1px. Body 17px Questrial regular #4A6568.
- Notes: The mechanism diagram is a visual breakdown of the 3-layer system. Each layer is a small card with emerald left border (2px #5DD07A). The Nicholson citation is included as source credibility but kept lightweight (14px #8A9B9D).

### Section 8: Emerald Squiggle Divider
- Same as Section 4

### Section 9: What to Expect in Week 1
- Component: Mint callout box
- Copy (verbatim):
  "Week 1 is exploration. Your child may notice the underwear. They may ignore it completely. Both are fine. Let them wear it for 1-2 hours at home. No timer. No 'did you feel anything?' Just wear, go about the day, change when wet, repeat."
  "If nothing happens in the first week, good. That's not failure. That's your child's nervous system registering a new sensation for the first time. The real magic starts when the brain recognizes that sensation consistently, usually in weeks 2-4 for some kids, 6-8 for others."
  "As one parent of a 5-year-old who'd been 'almost trained' for a year told us: 'He paused. He felt something. That never happened before.'"
- Mint box: #DBFFCD background, border-radius 16px, 4px left #5DD07A border
- Parent quote card: #E8D5C4 background, border-radius 12px
- Background: #FBF7F1
- Padding: 20px internal (mint box), 30px horizontal, 40px section gap above
- Typography: Mint box body 17px Questrial regular #4A6568. Parent quote 19px Questrial italic #4A6568 with #5DD07A accent. Attribution 14px #8A9B9D.
- Notes: The mint box gives visual weight to Week 1 expectations without urgency. The parent quote is elevated treatment — 19px italic with emerald accent, inside a warm beige card.

### Section 10: Emerald Squiggle Divider
- Same as Section 4

### Section 11: Guarantee (TRUST-1)
- Component: TRUST-1 — 60-Day Seal
- Copy (verbatim):
  "60 days to try it. By your judgment. If you don't see a shift, no pause, no awareness, no change, full refund. The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system, not on your effort."
- Border: 2px solid #2BAEB4, border-radius 12px
- Background: #FBF7F1
- Padding: 20px internal, 30px horizontal, 40px section gap above
- Typography: Heading 20px Questrial Bold #1F2D2F. Body 17px Questrial regular #4A6568.
- Notes: Teal-bordered card. Simple, confident. The guarantee is framed as honesty, not a sales tactic.

### Section 12: Emerald Squiggle Divider
- Same as Section 4

### Section 13: CTA Section (CTA-5)
- Component: CTA-5 — Product CTA
- Copy (verbatim):
  - Button text: "See what fits your routine"
  - Secondary link: "Learn more about how the body signal works"
- Background: #FBF7F1
- Padding: 30px horizontal, 24px vertical
- Typography: Button 16px Questrial Bold #FFFFFF on #5DD07A, pill shape (border-radius 999), 48px min height. Secondary 14px #2BAEB4 underlined.
- Notes: Primary CTA is the upsell: "See what fits your routine" linking to recommended bundle based on purchase. Secondary link provides educational content. No countdown, no urgency. Hover: background shifts to #4BC06A over 0.2s.

### Section 14: Lena Sign-Off (UTIL-05)
- Component: UTIL-05 — Signoff Card
- Copy (verbatim):
  "With understanding,"
  "Lena ——"
  "Customer Support · Mom of two autistic sons"
  "P.S. I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8. If your child is anywhere on this curve, that's normal here."
  "P.S. 60 days to try it. By your judgment."
- Background: #1F2D2F (dark card)
- Border: 1.5px solid #2F3D40, border-radius 22px
- Padding: 26px 24px 24px
- Typography: "A note from" 10.5px Questrial Bold #8FAFB2, name 17px Bold #FFFFFF, role 12px italic #8FAFB2, body 14px #B8CACD, signature 42px Caveat #5DD07A, closing 14px #B8CACD
- Notes: Avatar circle with teal gradient ring (#2BAEB4 → #5DD07A), dashed border separator, handwritten signature in Caveat font. Two P.S. lines — the personal story and the guarantee reminder.

### Section 15: Footer
- Component: UTIL-04 — Footer
- Copy (verbatim):
  "If you'd rather not hear from us, you can unsubscribe here."
  "Reply to this email, Lena reads every response."
  "BrightKidCo"
  "123 Commerce Street, Suite 200"
  "San Francisco, CA 94111"
  "United States"
- Background: #1F2D2F (dark navy)
- Padding: 20px 22px
- Typography: 12px regular #8A9B9D, links #2BAEB4
- Notes: CAN-SPAM compliant with physical address and unsubscribe link.

## 6. Component Details

### HERO-12 — Before Snapshot
- Props: headline, subheadline, product image
- Variants: Full-width editorial hero
- Custom overrides: Editorial product shot on warm cream linen — NOT a stock photo. The underwear is casually worn-looking. Headline "It's here. Now what?" in Questrial 42px with tight letter-spacing (-0.5px).

### LETTER-04 — Letter + Image Break
- Props: body paragraphs, optional image breaks
- Variants: Single-column reading flow with strategic image breaks
- Custom overrides: Long-form copy delivered as a letter from Lena. "uh-oh" and "signal" words in #5DD07A italic throughout. The validation block gets emerald left border treatment.

### EDU-8 — Mechanism Diagram
- Props: layer names, layer descriptions, diagram visual
- Variants: 3-layer card layout
- Custom overrides: Each layer as a small card with emerald left border (2px #5DD07A). Layer names in uppercase Questrial Bold. The Nicholson citation is included as source credibility.

### SP-04 — Trust Pills Row
- Props: trust badges
- Variants: Horizontal pill row
- Custom overrides: Trust signals embedded in the guarantee block and Lena's sign-off rather than standalone pills — transactional nature means trust is delivered through personal authority, not badges.

### ProductShowcaseMedium
- Props: product name, features, price
- Variants: Medium product card
- Custom overrides: Gentle product moment — not the hero. Product image from flat-lay collection. Feature pills: Body-Signal Layer™, 60-day guarantee, Sensory-friendly.

### CTA-5 — Product CTA
- Props: button text, secondary link
- Variants: Pill button + text link
- Custom overrides: Primary button "See what fits your routine" — upsell based on purchase. Secondary "Learn more about how the body signal works" — educational. No countdown, no urgency.

### TRUST-1 — 60-Day Seal
- Props: guarantee text
- Variants: Teal-bordered card
- Custom overrides: 2px solid #2BAEB4 border, border-radius 12px. Framed as honesty, not a sales tactic.

### UTIL-05 — Signoff Card
- Props: signoff content
- Variants: Dark card with avatar + handwritten signature
- Custom overrides: Two P.S. lines — personal story and guarantee reminder. Teal gradient ring on avatar (#2BAEB4 → #5DD07A).

### UTIL-04 — Footer
- Props: footer content
- Variants: Standard email footer
- Custom overrides: CAN-SPAM compliant, physical address included.

## 7. Image Briefs

### Image 1: Editorial Product Shot (Hero)
- Path: Custom editorial shot (see creative strategy spec)
- Alt text: "BrightKidCo Body-Signal Learning underwear on warm cream linen, casually worn-looking, slightly angled for depth"
- Recommended dimensions: 420×300px (hero area), 4:5 ratio
- Cropping/focal point: Product centered, natural light from left, linen texture visible
- Fallback color: #FBF7F1
- Style: Editorial, not stock. Warm cream linen background (#E8D5C4 tones). The underwear is NOT folded flat — it's casually placed, suggesting real use. Soft window light.

### Image 2: 3-Layer Diagram (Mechanism)
- Path: Custom illustration (not from product photos)
- Alt text: "Diagram showing the 3-layer Body-Signal Learning System: cotton inner for signal creation, smart absorption for protection, outer barrier for leak resistance"
- Recommended dimensions: 350×200px
- Cropping/focal point: Centered diagram
- Fallback color: #FBF7F1
- Style: Clean, minimal. Each layer as a rounded card with emerald (#5DD07A) left border. Lines connecting layers. Ethereal Glass meets Soft Structuralism — translucent overlapping circles.

### Image 3: Product Flat Lay (CTA Section)
- Path: /root/projects/brightkidco/raw/product-photos/flat-lay/laundry-bag-llama-cream.png
- Alt text: "BrightKidCo laundry bag with llama cream pattern"
- Recommended dimensions: 300×200px
- Cropping/focal point: Centered product
- Fallback color: #FBF7F1

### Image 4: Lifestyle Reference (Week 1 Context)
- Path: /root/projects/brightkidco/raw/product-photos/lifestyle/toddlers-backview-disposable-diapers.png
- Alt text: "Toddlers from behind, natural lifestyle shot showing real-world context"
- Recommended dimensions: 300×200px
- Cropping/focal point: Children centered, natural light
- Fallback color: #FBF7F1

## 8. Style Notes (Color Tokens)

| Role | Token | Hex | OKLCH | Usage |
|------|-------|-----|-------|-------|
| Ink Dark | --ink-dark | #1F2D2F | oklch(26% 0.02 185) | Headings, CTA button, footer background |
| Brand Teal | --brand-teal | #2BAEB4 | oklch(72% 0.08 185) | Guarantee border, interactive accents, avatar ring |
| Brand Green | --brand-green | #5DD07A | oklch(80% 0.18 145) | CTA button, emerald signal path, emphasis, squiggle dividers |
| Ink Medium | --ink-medium | #4A6568 | oklch(48% 0.03 185) | Body copy, all reading text |
| Ink Light | --ink-light | #8A9B9D | oklch(64% 0.02 185) | Captions, citations, secondary info |
| Warm Off-White | --warm-bg | #FBF7F1 | oklch(97% 0.01 85) | Full email background |
| White | --white | #FFFFFF | oklch(100% 0 0) | Content cards for readability |
| Warm Beige | --warm-beige | #E8D5C4 | oklch(88% 0.03 65) | Parent quote card, dividers |
| Mint | --mint | #DBFFCD | oklch(95% 0.06 145) | Week 1 expectations callout |

## 9. Technique Specs

| Element | Property | Value | Notes |
|---------|----------|-------|-------|
| Body background | background | #FBF7F1 | Warm off-white, full email |
| Body background texture | SVG filter | 3% micro-noise overlay | Subtle paper/cotton texture |
| Hero section | background | #FBF7F1 | Consistent with body |
| Hero headline | font | Questrial 42px | letter-spacing -0.5px, #1F2D2F |
| Hero subheadline | font | Questrial 18px | #4A6568 |
| Emerald squiggle divider | stroke | #5DD07A | Brand green, organic curve |
| Emerald squiggle divider | stroke-width | 1.5px | Not too thick |
| Emerald squiggle divider | opacity | 100% | Full visibility |
| Validation block | left-border | 2px solid #5DD07A | 30% opacity |
| Validation emphasis line | font | Questrial 17px Bold | #1F2D2F, centered |
| Mechanism layer cards | background | #FFFFFF | White |
| Mechanism layer cards | border-radius | 12px | Rounded |
| Mechanism layer cards | border-left | 2px solid #5DD07A | Brand green accent |
| Mechanism layer cards | box-shadow | 0 1px 3px rgba(0,0,0,0.04) | Subtle depth |
| Layer name labels | font | Questrial 13px Bold | uppercase, letter-spacing +1px |
| Mint callout | background | #DBFFCD | Mint |
| Mint callout | border-radius | 16px | Rounded |
| Mint callout | border-left | 4px solid #5DD07A | Brand green accent |
| Parent quote card | background | #E8D5C4 | Warm beige |
| Parent quote card | border-radius | 12px | Rounded |
| Parent quote | font | Questrial 19px italic | #4A6568 |
| Parent quote accent | color | #5DD07A | Brand green for quote marks |
| CTA button | background | #5DD07A | Brand green fill |
| CTA button | color | #FFFFFF | White text |
| CTA button | border-radius | 999px | Pill shape |
| CTA button | height | 48px | Minimum tap target |
| CTA button | font | Questrial 16px Bold | Uppercase, letter-spacing 0.02em |
| CTA button hover | background | #4BC06A | 10% darker green |
| CTA button hover | transition | 0.2s ease | Smooth |
| Guarantee card | border | 2px solid #2BAEB4 | Brand teal |
| Guarantee card | border-radius | 12px | Rounded |
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
| Cross-Level | Single visual direction. No level labels. Copy describes behaviors not diagnoses. |
| R1 — Symptom over label | No level labels anywhere. The signal path illustration shows universal body silhouette and brain icon, no labels, no clinical diagramming. "Body signal" language, not "Level 2 body signal gap." |
| R2 — Recognition anchors | Body copy includes anchors for L1 ("sits 20 minutes, nothing happens"), L2 ("tried everything, BCBA, sensory work"), L3 ("doesn't react to wet diaper at all") woven naturally. |
| R3 — Age ranges | "Whether your child is 3 or 10" — no fixed age imagery in hero or illustration. |
| R4 — Verbal/non-verbal | Callout box lists signals spanning both: "Pulling at their pants, looking down, saying 'wet,' or showing you with a gesture." |
| R5 — Timeline flexibility | Week 1 Expectations section explicitly says "some kids 2 weeks, others 8", visualized as flexible timeline (not fixed calendar). |
| R6 — Low-bar success | Mini-win examples celebrate "pause, look, step toward bathroom" — the signal path reaching awareness, not a "100% trained" endpoint. |

## 11. Interaction Notes

| Element | Interaction | Fallback |
|---------|-------------|----------|
| CTA button | Hover: background #4BC06A, 0.2s transition | Static green button |
| CTA button | Hover: gentle pulse (scale 1.02, box-shadow intensifies) | Static |
| Signal Path Pulse GIF | 2s cycle, dotted line from brain to body, cubic-bezier(0.4, 0, 0.2, 1) | Static: pulse frozen at midpoint, all nodes illuminated |
| "Uh-Oh" Awareness Wave | 3 concentric arcs pulse outward every 4 seconds from body outline | Static: arcs at midpoint opacity |
| Body outline glow | Opacity 0.3 → 0.7 → 0.3, scale 1.0 → 1.2 → 1.0, 1.5s, 4s delay loop | Static at midpoint |
| Emerald squiggle dividers | Static SVG, no animation | N/A |
| Apple Mail / iOS | Full CSS animation support (use @keyframes, will-change: opacity/transform) | — |
| Gmail app (Android/iOS) | No CSS animation | Static fallback at midpoint state |
| Outlook desktop | No CSS animation | Static illustration, no pulse |
| Samsung Mail, Yahoo | Partial support | Test before deployment |

## 12. Easter Egg

**Cross-Level Easter Egg: A 4-part signal icon in the footer.** A single small icon (24×24px) sits in the footer area, depicting four tiny dots arranged in a subtle path pattern. Each level reads it differently:
- L1 (Sarah): The dots form a subtle clock face arc — the Pre-K deadline marker without stating it
- L2 (Lisa): The dots form a partial neural diagram — the unsolved equation, the "still working on it" feeling
- L3 (Maria): The dots are scattered like floating leaves — no urgency, just gentle presence
- GF: The dots form an open circle — inviting, inclusive, no label needed

The dots are rendered at emerald #5DD07A at 40% opacity, visible only on second read, never calling attention to itself.
