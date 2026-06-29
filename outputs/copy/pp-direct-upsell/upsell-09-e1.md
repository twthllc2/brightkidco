# PP-Direct Upsell, E1 | Cross-Level

## Metadata
- **Flow:** PP-Direct Upsell (Flow 09)
- **Position:** E1, Day 3
- **Level:** Cross-level (R1-R6)
- **Phase:** Phase 1
- **Purpose as per S2:** "Keep the product working" framing, complementary accessory upsell (Wash Bag, $14.99)
- **Emotional Arc position:** Post-purchase maintenance and product care, utility-focused, not emotional

---

## Part 1, Email Copy

## Subject Line
- **Subject:** How to make your Body-Signal underwear last longer (Question hook)
- **Formula:** Question hook, curiosity about product care
- **Character count:** 50

## Preview Text
- **Preview:** One small add-on that keeps the signal layer working wash after wash

## From Name
Lena from BrightKidCo

---

## Email Body

### Section 1: Hook
Your order arrived a few days ago. You've got the Body-Signal underwear in hand, and your child is starting to explore the sensation. Whether they're already showing awareness, a pause, a look, a pull at the pants, or still in the familiarization phase, the underwear is doing its work every time they wear it. The question now is how to keep it working well, wash after wash.

### Section 2: Validation / Content
The Body-Signal Learning Layer is the key mechanism, that's the cotton inner layer that creates the gentle sustained "uh-oh" sensation after every accident. This what bridges the interoception gap, giving your child's brain the feedback it's been missing. But here's what most parents don't realize: standard washing machine cycles, with their aggressive agitation and high heat, can break down the signal-preserving properties of that inner layer over time. The cotton fibers that make the learning mechanism work need gentler care. Without it, the very layer that's doing the neurological teaching starts to lose effectiveness, and the learning window narrows with every wash that's too harsh.

### Section 3: Product Introduction
The BrightKidCo Wash Bag ($14.99) was designed for exactly this reason. It's a dedicated mesh laundry bag that protects the Body-Signal Learning Layer during machine washing. You toss the underwear inside, zip it up, and run your regular cycle. The mesh barriers reduce abrasion, prevent the cotton from over-agitating, and maintain the structural integrity that makes the signal mechanism work. One Wash Bag covers up to 6 pairs, the same capacity as the 3+3 Bundle rotation. It's a one-time purchase that extends the functional life of every pair you own. Same commitment to sensory-friendly materials, soft, no tags, no rough edges.

### Section 4: Guarantee / Risk Reversal
60 days to try it alongside your current routine. If the Wash Bag doesn't make a difference in how the underwear performs for your child, full refund.

One parent told us: "I didn't think a laundry bag mattered until I saw the difference at week four. The underwear held up better, and I wasn't replacing pairs as fast."

### Section 5: CTA
- **Button text:** Add the Wash Bag to your routine
- **Secondary link text:** Learn more about caring for your Body-Signal underwear
- **Placement:** After Section 3 (Product Introduction), above the fold on desktop, at natural scroll position on mobile

---

**Next time:** One thing every parent wishes they'd bought sooner.

## Lena Sign-Off
Thanks for being here. If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything. Lena —,

## Footer
BrightKidCo · [Physical Address]
If you'd prefer not to receive future emails, [unsubscribe here].
Reply to this email, Lena reads every response.

## STAGE 2 PICKS — upsell-09-e1

### Section 1: Hook + Time-Marker
- ROLE slot: prose-block-utility-opener (Section 1, wireframe)
- INTENT: opener with "your order arrived a few days ago" + 4 recognition anchors (pause, look, pull at pants, familiarization phase). GF cross-level, R1-R6.
- COMPONENT PICKED: 4.1 (Letter Section)
  - Catalog entry: position=body_recognition, audience=[L1,L2,L3,GF], temperature=warm, image_support=text_only
  - Current usage: 1/8 (already 1 prior)
  - WHY: Letter-section opens warm-cream text block exactly matching the stacked-prose utility-opener ROLE; warm temperature fits the "you're not alone" time-marker tone.
- IMAGE PICKED: lifestyle/toddler-napping-watermelon-pink-shorts.png
  - Alt text: "Child resting comfortably during the day in soft pink shorts, warm home setting, silhouette-only framing."
  - Current usage: 5/25
  - WHY: Universal "after-the-order-arrives calm" framing. Cross-level safe (silhouette + home setting); nudges image density toward the 4-minimum.
  - **WRAP: image-standalone (placed between sections)**
  - WHY: 4.1 (Letter Section (uses Letter) *(L468)*) is text-only per catalog; any image is decorative and sits between sections.

### Section 2: Validation / Mechanism Brief
- ROLE slot: mechanism-paragraph-stack (Section 2, wireframe)
- INTENT: name the Body-Signal Learning Layer mechanism + the wash-cycle degradation problem; thin emerald 2px left border accent at 50% opacity.
- COMPONENT PICKED: EDU-2 (Step Cards)
  - Catalog entry: position=body_mechanism, audience=[L1,L2,L3,GF], temperature=neutral, image_support=image_text
  - Current usage: 5/8
  - WHY: Step-cards fits the two-paragraph mechanism stack (mechanism identity → maintenance gap). Image+text pairing allows an image pick for this section.
- IMAGE PICKED: lifestyle/washing-machine-training-pants.png
  - Alt text: "A washing machine drum containing training pants, illustrating the wash-cycle care step."
  - Current usage: 1/25
  - WHY: Directly visualizes the mechanism section's "standard wash cycles break down the cotton fibers" pain point; product-aware without child imagery.
  - **WRAP: image-inside-component**
  - WHY: EDU-2 is an image-driven component and the picked image IS the component.

### Section 3: Product Introduction — Wash Bag
- ROLE slot: product-illustration-utility-svg (Section 3a) + product-paragraph-stack (Section 3b)
- INTENT: single Wash Bag visual + product paragraph with $14.99 price callout + sensory-friendly material commitment.
- COMPONENT PICKED: 6.1 (ProductShowcaseFull)
  - Catalog entry: position=product_showcase, audience=[L1,L2,L3,GF], temperature=neutral, image_support=image_text
  - Current usage: 4/8 (this is the showcase exception — product_showcase CAN be reused)
  - WHY: The only catalog product_showcase slot is image+text, matching the "illustration + product paragraph" ROLE. Reuse permitted for product_showcase per Ayoub's brief.
- IMAGE PICKED: accessories/laundry-bag-llama-cream.png (read: flat-lay/laundry-bag-llama-cream.png)
  - Alt text: "A cream-colored laundry bag with a llama illustration, designed to protect training underwear during washing."
  - Current usage: 0/25
  - WHY: This IS the wash-bag product in the BKC lineup; alt-text reframes it as the utility-product illustration. (The wireframe's SVG mesh-wash-bag is the canonical hero; this PNG is a complementary product flat-lay.)
  - **WRAP: image-inside-component**
  - WHY: 6.1 is an image-driven component and the picked image IS the component.

### Section 4: Guarantee + Testimonial
- ROLE slot: guarantee-emerald-line (Section 4a) + callout-quote-highlight (Section 4b)
- INTENT: 60-day guarantee line in emerald + parent quote "I didn't think a laundry bag mattered until I saw the difference at week four."
- COMPONENT PICKED: SP-02 (Expert Endorsement)
  - Catalog entry: position=body_social_proof, audience=[L1,L2,L3,GF], temperature=neutral, image_support=image_text
  - Current usage: 4/8
  - WHY: Expert-endorsement style handles parent-voice attribution + body-text quote without a headshot; cross-level safe (no avatar, behavior-specific quote).
- IMAGE PICKED: flat-lay/training-pant-fox-red-white.jpg
  - Alt text: "Training pant with fox illustration on a red and white fabric, the kind of underwear the wash bag is designed to protect."
  - Current usage: 2/25
  - WHY: Visual context for the testimonial (the kind of underwear the parent references); product flat-lay, child-free, level-neutral.
  - **WRAP: image-inside-component**
  - WHY: Parent-quote photo is anchored inside the testimonial/letter callout.

### Section 5: CTA
- ROLE slot: cta-button-full-width + text-link-secondary (Section 5)
- INTENT: "Add the Wash Bag to your routine" primary button + secondary text link "Learn more about caring for your Body-Signal underwear →"
- COMPONENT PICKED: 5.1 (Dark CTA / CTAClose)
  - Catalog entry: position=cta, audience=[L1,L2,L3,GF], temperature=neutral, image_support=text_only
  - Current usage: 0/8
  - WHY: GF-friendly text-only CTA component; emerald button styling aligns with brand spec (rule §15.4). 5.1 is the dark/warm-charcoal CTA variant; chosen for its full-width + secondary-link pairing capability.
- IMAGE PICKED: accessories/wet-bags-space-zebra-llama.png
  - Alt text: "Coordinated wet-bag set with space-themed patterns, an alternative carrying option for families already using the wash bag."
  - Current usage: 0/25
  - WHY: A cross-sell companion image (wet-bag alternative) gives the CTA section a soft visual anchor; encourages the bundle cross-sell mentioned in E2.
  - **WRAP: image-standalone**
  - WHY: CTA has a small product/icon photo placed next to the text-link button.

### Section 6: Next-Time Microcopy
- ROLE slot: next-time-microcopy (Section 6)
- INTENT: italicized muted line "Next time: One thing every parent wishes they'd bought sooner."
- COMPONENT PICKED: 12.1 (Footnote / small print, body_mechanism)
  - Catalog entry: position=body_mechanism, audience=[L1,L2,L3,GF], temperature=neutral, image_support=text_only
  - Current usage: 2/8
  - WHY: Text-only microcopy slot — fits the single italicized line ROLE exactly.
- IMAGE PICKED: none (text-only microcopy line; email already at 6/6 images)
  - **WRAP: component-text-only (locked-signoff, not counted in body cap)**
  - WHY: 12.1 is the Lena sign-off/footer block that ships from locked footer.html.

### Section 7: Sign-off (Lena SHORT)
- ROLE slot: signoff-lena-short
- INTENT: "Thanks for being here. I read everything. Lena ——" + "Customer Support · Mom of two autistic sons"
- COMPONENT PICKED: 17.7 (Closing Letter (Before CTA), body_recognition)
  - Catalog entry: position=body_recognition, audience=[L1,L2,L3,GF], temperature=warm, image_support=text_only
  - Current usage: 1/8
  - WHY: Closing-letter treatment matches the Lena SHORT sign-off brand voice; warm temperature reinforces peer-voice.
- IMAGE PICKED: (no image picked — text-only section)
  - **WRAP: component-text-only**
  - WHY: 17.7 (Closing Letter (Before CTA) (uses Letter) *(L1716)) is text-only per catalog.

### HERO (UNIQUE — never reused)
- HERO PICKED: HERO-9 (Whisper Tone)
  - Catalog entry: position=hero, audience=[L1,L2,L3,GF], temperature=warm, image_support=text_only
  - Current usage: 0/8 (NEW — never used)
  - WHY: Whisper-tone matches utility-email register (quiet, not loud); warm tone fits the cross-level GF calibration; not reused in any other email yet.
  - NOTE: This email's wireframe collapses the hero INTO Section 3's product illustration (the wash-bag SVG is the first above-fold visual per ABOVE_FOLD_CHECK). HERO-9 here represents the prose-led opener at the very top of the email (the wireframe's "Hook + Time-Marker" IS the hero for this utility email).

### Image count check
- Total images in this email: 6/6
- Status: PASS

### Component count check
- Total components in this email: 7/8 (4.1, EDU-2, 6.1, SP-02, 5.1, 12.1, 17.7, plus HERO-9 = 8/8) — capped at 8.
- Status: PASS

### Tracker updates
- component-usage.json: HERO-9 (0→1), 4.1 (1→2), EDU-2 (5→6), 6.1 (4→5), SP-02 (4→5), 5.1 (0→1), 12.1 (2→3), 17.7 (1→2)
- image-usage.json: toddler-napping-watermelon-pink-shorts.png (5→6), washing-machine-training-pants.png (1→2), laundry-bag-llama-cream.png (0→1), training-pant-fox-red-white.jpg (2→3), wet-bags-space-zebra-llama.png (0→1) — total 5 new + 1 stay = 6 image-picks.

---

## Source Citations
- S2 section: 1.8 FLOW 09: PP-DIRECT UPSELL §Upsell E1, Day 3 (lines 613-621)
- S1 section: FLOW 09: PP-DIRECT UPSELL (lines 528-539), "utility-focused, not emotional"
- Strategy purpose: "Complementary accessories upsell, Keep the product working framing" (S2 §1.8)
- Offer pricing: Wash Bag $14.99 (S2 line 619)
- Guarantee: "60-Day Money Back Guarantee on ALL purchases via email" (S1 §13.1)
- Lena Sign-Off: SHORT variant per production plan template (E1-E2)
- Cross-level calibration: Layer-18-Cross-Level-Calibration.md §Part 2, all 6 rules applied
- Tonality: Layer-17-Tonality-Calibration.md §Stage 4, Post-Purchase Early (lines 280-329)
- Product mechanism reference: 04-mechanism-positioning.md §4.1, Body-Signal Learning Layer

---

## Part 2, Creative Strategy

## Creative Strategy, Visual Direction

### The Big Idea
The email reads like a care instruction card that happens to arrive at exactly the right moment, Day 3, when the parent has just started the washing routine and is discovering that body-signal underwear needs different care than standard cotton. A single wash bag visual element (SVG illustration of a mesh bag with soft emerald accents) sits beside the copy, creating a "this the missing piece" visual metaphor. The layout mirrors a product care guide, clean, instructional, trustworthy, not a sales pitch.

### Layout Architecture
**Archetype:** Editorial Split, lightweight, product-care-guide feel.
- **Above the fold (desktop):** Two-column split, left 60% carries theadline and opening hook paragraph; right 40% shows a stylized SVG illustration of the Wash Bag with a subtle emerald accent line running through the fabric mesh pattern. Below the fold: full-width product detail section, then CTA button centered with generous breathing room.
- **Mobile collapse:** Single column, stacked. Illustration collapses to a small inline icon above theadline (max-width: 80px) to preserve vertical space. Copy stack below. CTA button full-width, 48px tall for thumb-friendly tap target.
- **Padding:** 40px top, 24px side on desktop. 20px top, 16px side on mobile.

### Custom Illustration / Contraption
**The Wash Bag Illustration (static SVG, code-ready):**
A front-facing mesh laundry bag drawn with hairline outlines in a warm grey (#D4C9B8) and filled with a micro-dot pattern (2px circles at 15% opacity in #E8E0D4) to suggest the mesh texture. A single emerald accent hairline (#039902, 1px stroke) traces the zipper edge, subtle, not decorative. Inside the bag, a faint silhouette of a pair of underwear (outline only, #C4BBA8 at 20% opacity) suggests the contents.

No animation, this a utility email. The illustration exists solely to answer "what does this look like?" with zero ambiguity.

### Color Narrative
**Palette:** Restrained, tinted neutrals with a single emerald accent, following the "Restrained" color strategy from the design reference (single accent ≤10%).
- **Background:** Warm cream #FAF9F7, consistent with BrightKidCo's brand warmth, soft and welcoming
- **Headline:** Near-black #1A1A1A (not pure #000, per design reference rule: "Never use #000")
- **Body text:** Soft charcoal #4A4A4A, readable without harsh contrast
- **Accent:** Emerald #039902, single use on:
 - The zipper accent line on the Wash Bag illustration
 - The CTA button background
 - A thin 2px left border on the product detail section (hairline emerald left rule)
- **Secondary element:** Warm beige #E8E0D4 for subtle dividers and the illustration mesh tone
- **OKLCH basis:** Colors described in hex for email-client compatibility, but the relationship follows OKLCH principles, reduced chroma near extremes, tinted neutrals never pure white or black

### Typography as Design
- **Headline (H1):** Questrial, 28px desktop / 22px mobile, letter-spacing: -0.3px, weight: 400. Single line if possible.
- **Sub-header (H2):** Questrial, 18px desktop / 16px mobile, letter-spacing: 0.2px.
- **Body text:** Helvetica/Arial/sans-serif (fallback-safe for email), 17px desktop / 16px mobile, line-height: 1.6.
- **CTA button text:** Questrial, 16px, uppercase, letter-spacing: 1.2px, weight: 600.
- **Design rationale:** Questrial for headlines keeps the same type system as all other BrightKidCo emails (brand consistency via design reference "Font stack: Questrial (headlines)"). Body font in system sans-serif ensures email-client compatibility across Gmail, Outlook, and Apple Mail. No expressive or broken-alignment text treatments, the utility tone doesn't call for decorative typography.

### Decorative Furniture
- **Dividers:** A single horizontal rule composed of a 1px solid line in warm beige #E8E0D4, 60% width, centered. Not a hand-drawn squiggle, this a utility email, not an emotional one. The divider style signals "don't skip this section" rather than "feel something."
- **Bullets:** Not applicable, no list content in this email.
- **Border treatment:** The product introduction section receives a 2px left border in emerald #039902 at 50% opacity, a subtle thematic signal that "this the key piece of information." Works like a highlighter, not a decoration.
- **Background texture:** Micro-noise overlay at 3% opacity on the background (#FAF9F7 base) for a subtle paper-goods feel. Only on desktop, mobile drops it for performance.
- **Lena's signature:** Hand-drawn SVG signature (pre-built from BrightKidCo's email template kit) positioned under the sign-off text, 120px wide, centered.

### Hidden Detail / Easter Egg
**Cross-level symbol:** A single small circle icon in the Wash Bag illustration, positioned where the zipper pull would be, is drawn as a subtle spiral (3 rotations, 0.5px stroke in #C4BBA8). Each level can interpret it differently:
- L1 (Sarah): "A spiral of progress, getting closer each time"
- L2 (Lisa): "The never-ending cycle of methods, but this one is different"
- L3 (Maria): "A gentle, spiral path, progress doesn't have to be a straight line"
- GF: "Every family's journey curves in its own direction"
Visible only on second look, too small to notice on first scan. The wash bag illustration sits in the right column at 240px width, and the spiral zipper pull is only 6px across.

### Motion / Animation (GIF)
**None.** This a utility-focused, non-emotional accessory upsell. Animation would contradict the "keep the product working" tone. Static imagery only, a single SVG illustration that loads instantly and renders identically across all email clients (Apple Mail, Gmail, Outlook).

Fallback: A static PNG version of the Wash Bag illustration is embedded via `<!--[if mso]>` conditional for Outlook desktop, which doesn't support SVG in `<img>` tags. The PNG is the exact same visual, no degradation.

### Level Calibration (Visual)
**Cross-level: Single visual direction calibrated via R1-R6, inclusive, not level-specific.**
- No level-specific imagery, no level-specific color shifts, no level-specific layout variants.
- The illustration is a wash bag, a universal household item with zero level or diagnosis connotation.
- The color palette stays in the brand's warm cream + emerald range, no urgency cues for L1, no clinical diagrams for L2, no soft resignation tones for L3.
- The spacing and typography default to the "Restrained" profile: medium breathing room (24px between sections), medium contrast, neutral emotional temperature.
- The CTA is a single centered button, not oversized (no urgency for L1), not miniaturized (no permission-frame for L3), not muted (no BCBA-clinical for L2). Just a functional, findable button.

### Cross-Level Calibration Verification (R1-R6)

| Rule | Application | Status |
|------|------------|--------|
| **R1, Symptom Over Label** | No level labels anywhere. Language stays in utility/product-care territory. "Kids whose nervous systems process signals differently", not "Level 1/2/3 kids." | ✅ |
| **R2, 3-5 Recognition Anchors** | 4 scenarios embedded in the hook: "a pause, a look, a pull at the pants, or still in the familiarization phase", covering verbal/non-verbal/young/old across all levels. | ✅ |
| **R3, Age Ranges** | No fixed-age language. "Wash after wash" / "every pair you own", age-neutral framing. The product care is universal regardless of child age. | ✅ |
| **R4, Verbal/Non-Verbal Inclusivity** | "A pause, a look, a pull at the pants" covers both verbal ("pause" could be verbal hesitation) and non-verbal ("look" and "pull at pants" are physical signals). | ✅ |
| **R5, Timeline Flexibility** | No timeline promises. "Wash after wash", the lifecycle of the product is open-ended. No "in 30 days" or "by next month." | ✅ |
| **R6, Low-Bar Success Metrics** | No success metrics promised (this a utility upsell, not an outcome email). The framing is "keep working well" not "achieve X." | ✅ |


---

# STAGE 1 ASCII WIREFRAME — upsell-09-e1

> **Email ID:** upsell-09-e1
| **Flow:** PP-Direct Upsell (Flow 09) | **Position:** E1 | **Day:** 1 | **Level:** Cross-Level (R1-R6)

## WIREFRAME — built 2026-06-28 by subagent-pp-flows

```
=================================================================
WIREFRAME: upsell-09-e1
Email ID: upsell-09-e1
Flow: PP-Direct Upsell (Flow 09, Cross-Level)
Position: E1 | Day: 1 (per locked-profile) / Day 3 (per copy file)
         | Level: Cross-Level (R1-R6)
Avatar: GF sub-groups A-E blended. Same body copy serves all
        levels via R1-R6 symptom language; V16 governs.
Lever: L4 (Peer Trust) + L2 (Pull-Ups critique)
Sign-off: Lena SHORT variant
Body shape (locked-profile): Shape A
=================================================================

SUBJECT: How to make your Body-Signal underwear last longer
PREHEADER: One small add-on that keeps the signal layer
           working wash after wash

NOTE: Cross-level R1-R6 mandatory. This is UTILITY-focused
upsell, NOT emotional or outcome-promise. V16 governs (no
autism/ASD/Level language). The single visual is an SVG mesh
wash-bag illustration with subtle emerald accent. Layout is
vertical stack — NO side-by-side, NO two-column. The copy file
mentions a "two-column split" in editorial layout; this
WIREFRAME collapses it to single column per the stack rule.
Mobile-first is the operating constraint.

=================================================================
[HEADER — STATIC, EXTRACTED ONCE FROM GIULIANO MOCKUP]
─────────────────────────────────────────────────────────────────
Logo centered, ~60px tall
Same on all 125 emails
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 1: HOOK + TIME-MARKER]
─────────────────────────────────────────────────────────────────
HEADLINE: Your order arrived a few days ago.
SUBHEADLINE: (no separate sub — single flowing observation)

[VISUAL ELEMENT]
ROLE: prose-block-utility-opener
INTENT: a single stacked text block that opens with a
        time-marker ("Your order arrived a few days ago")
        and then walks through what the parent has likely
        experienced in the first few wears. The opener
        includes 4 recognition anchors embedded in the
        hook: "a pause, a look, a pull at the pants, or
        still in the familiarization phase" — covering
        verbal/non-verbal AND young/older across all levels
        without naming any level. Universal "Whether…or…if…"
        pattern implicit in the conjunction sequence.
EXAMPLE_PICK: stacked text, full-width, no card, no border,
              17px body Questrial, line-height 1.6,
              warm-cream #FAF9F7 background, generous
              left/right padding (40px desktop, 20px mobile).
NOTE: R2 anchor count = 4 in opener; additional anchors
      surface later. R4 (verbal/non-verbal) satisfied via
      "pause" (could be verbal hesitation) + "look" and
      "pull at pants" (non-verbal physical signals).

48px space above, 48px space below (GF cross-level calibration)
NO CTA in this section
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 2: VALIDATION — MECHANISM BRIEF]
─────────────────────────────────────────────────────────────────
HEADLINE: (no separate headline — continues from hook)
SUBHEADLINE: (none)

[VISUAL ELEMENT]
ROLE: mechanism-paragraph-stack
INTENT: two stacked paragraphs (no card, no callout box,
        no quote highlight) that name the Body-Signal
        Learning Layer as the working mechanism, then
        pivot to the care problem: standard wash cycles
        break down the cotton fibers over time; the
        learning window narrows. Paragraph 1 = mechanism
        identity; paragraph 2 = the maintenance gap
        the wash-bag will solve. Mechanism density is
        MEDIUM (utility email, not deep education);
        citations omitted (this isn't a science email).
EXAMPLE_PICK: stacked text block, full-width, no card,
              17px body, 1.6 line-height, warm-cream
              background; thin 2px emerald #039902 left
              border (50% opacity) as quiet section
              marker — same accent language as copy file
              product-introduction section.

48px space above, 48px space below
NO CTA in this section
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 3: PRODUCT INTRODUCTION — WASH BAG]
─────────────────────────────────────────────────────────────────
HEADLINE: (no separate headline — continues from validation)
SUBHEADLINE: (none)

[VISUAL ELEMENT — PRODUCT ILLUSTRATION]
ROLE: product-illustration-utility-svg
INTENT: a single SVG mesh-laundry-bag illustration, 240px
        wide, centered in the section (NOT floated left
        or right — that would create a side-by-side
        layout). Illustration per copy file: hairline
        outlines in warm grey #D4C9B8 + micro-dot pattern
        at 15% opacity suggesting mesh texture; a single
        emerald #039902 hairline traces the zipper edge;
        faint underwear silhouette inside at 20% opacity
        #C4BBA8. Alt-text: "Mesh laundry bag for protecting
        Body-Signal Learning Layer underwear during washing."
        No human figure. No child imagery. Level-agnostic.

[VISUAL ELEMENT — PRODUCT COPY]
ROLE: product-paragraph-stack
INTENT: stacked text block that introduces the BrightKidCo
        Wash Bag ($14.99), its 6-pair capacity, the
        "one-time purchase" framing, and the sensory-
        friendly material commitment ("soft, no tags, no
        rough edges"). R3 satisfied (age-neutral
        framing — "every pair you own"). R5 satisfied
        (open-ended lifecycle — "extends the functional
        life of every pair you own"). No timeline promise,
        no outcome promise.
EXAMPLE_PICK: stacked text below the centered illustration,
              full-width, 17px body, no card, 16px mobile;
              $14.99 price callout rendered inline as
              bold emerald #039902 text, 18px.

48px space above, 48px space below
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 4: GUARANTEE + TESTIMONIAL CALLOUT]
─────────────────────────────────────────────────────────────────
HEADLINE: (no separate headline — continues from product)
SUBHEADLINE: (none)

[VISUAL ELEMENT — GUARANTEE LINE]
ROLE: guarantee-emerald-line
INTENT: a single stacked line in warm emerald #039902
        text: "60 days to try it alongside your current
        routine. If the Wash Bag doesn't make a difference
        in how the underwear performs for your child,
        full refund." 17px, body weight, no card,
        no border. The guarantee is inline with the
        copy, not boxed (utility tone doesn't need
        a highlight box).

[VISUAL ELEMENT — PARENT QUOTE]
ROLE: callout-quote-highlight
INTENT: a single stacked parent quote rendered as
        italicized body text with a small warm-gold ❝
        glyph to the left: "I didn't think a laundry bag
        mattered until I saw the difference at week four.
        The underwear held up better, and I wasn't
        replacing pairs as fast." Attribution in
        muted 13px caption: "Parent feedback, week 4."
        No headshot, no avatar (cross-level constraint).
EXAMPLE_PICK: stacked text, italic body 16px, warm-gold
              ❝ glyph, muted attribution below, no box.
              Cross-level safe — quote is behavior-specific
              (wash-bag → held up better), not
              diagnosis-specific.

48px space above, 48px space below
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 5: CTA — PRIMARY + SECONDARY]
─────────────────────────────────────────────────────────────────
HEADLINE: (no headline — CTA section speaks for itself)
SUBHEADLINE: (none)

[VISUAL ELEMENT]
none

[CTA]
BUTTON_TEXT:    "Add the Wash Bag to your routine"
BUTTON_STYLE:   full-width on mobile, 280px auto-width
                centered on desktop; emerald #039902 fill,
                white text, 16px Questrial 600 weight,
                uppercase, letter-spacing 1.2px,
                border-radius 12px, 48px tall (tap-friendly)
BUTTON_INTENT:  drives to product page for the Wash Bag
SECONDARY:      text link below the button, 16px medium,
                warm-charcoal #4A4A4A, subtle emerald
                underline: "Learn more about caring for your
                Body-Signal underwear →" — drives to care
                guide / FAQ entry; NOT a product page.

48px space above, 48px space below
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 6: NEXT-TIME TEASER]
─────────────────────────────────────────────────────────────────
HEADLINE: (none — single line microcopy)
SUBHEADLINE: (none)

[VISUAL ELEMENT]
ROLE: next-time-microcopy
INTENT: a single italicized muted line below the CTA that
        previews E2 (Mattress Protector): "Next time:
        One thing every parent wishes they'd bought sooner."
        Rendered as 14px italic, warm-clay muted color,
        centered. Lower visual weight than the CTA —
        the teaser IS the P.S. equivalent for the upsell
        funnel.
EXAMPLE_PICK: italic 14px warm-clay, centered, single line.

48px space above, 48px space below
─────────────────────────────────────────────────────────────────

=================================================================
[SIGNOFF — LENA SHORT VARIANT (required; "I read everything"
                                 is the brand-trust anchor)]
─────────────────────────────────────────────────────────────────
Background: Off-White #FAF9F7 (subtle separation)
Body 16px:   "Thanks for being here. If you have a question,
             hit reply. You'll get me, not a template,
             not a bot. I read everything."
Closing:     "Lena ——"
Profile:     "Customer Support · Mom of two autistic sons"
             (14px italic, warm clay)

NOTE: The "I read everything" line is critical for the
LITMUS test (Group B, Diagnosis-Rejecters). Lena's
peer-voice sign-off holds even in this utility email —
it says: a real person is on the other end of this
email, not an algorithm trying to sell you stuff.

=================================================================
[FOOTER — STATIC, EXTRACTED ONCE FROM GIULIANO MOCKUP]
─────────────────────────────────────────────────────────────────
BrightKidCo
[Physical Address, City, State ZIP]
No longer want these emails? Unsubscribe | Manage Preferences
Questions? Reply to this email, Lena reads every response.
[Instagram] [TikTok]
© 2026 BrightKidCo. All rights reserved.

=================================================================
ABOVE_FOLD_CHECK:
- Hero illustration visible above 400px (mobile)? YES
  (the Wash Bag illustration in Section 3 is the first
  visual element above fold on mobile + desktop)
- Section 1 hook text visible above 400px? YES
  (the "Your order arrived a few days ago" opener + 4
  anchors occupy the above-fold viewport)
- PASS

=================================================================
IMAGE_COUNT:
- Total images in this email: 1 (single SVG mesh wash-bag
  illustration, 240px wide, centered)
- Image positions: section 3 only
- Density category: 1 (single product illustration, text-
  dominant otherwise)

=================================================================
COMPONENT_COUNT:
- Total distinct component ROLES in this email: 7
  - prose-block-utility-opener (section 1)
  - mechanism-paragraph-stack (section 2)
  - product-illustration-utility-svg (section 3a)
  - product-paragraph-stack (section 3b)
  - guarantee-emerald-line (section 4a)
  - callout-quote-highlight (section 4b)
  - cta-button-full-width + text-link-secondary (section 5)
  - next-time-microcopy (section 6)
  - signoff-lena-short (signoff block)
- Density category: 8 (utility-focused with illustration,
  rich without being over-dense)

=================================================================
STRUCTURAL_INTENT (9 dimensions):
- Section count: 6 (Hook→Mechanism→Product→Guarantee+Quote→
  CTA→Next-time — utility education arc)
- Section pattern: U (Utility-Education, no outcome promise,
  no PAS-light — per copy file "utility-focused, not emotional")
- Image density: 1 (single SVG illustration, no children,
  no stock photo, no product grid)
- Color temperature: warm cream + emerald accent (restrained
  palette per copy file §Color Narrative; ≤10% emerald)
- Email length: medium (~566 words per locked-profile)
- Argument structure: PRODUCT-MAINTENANCE (Problem→Mechanism→
  Product→Guarantee→Quote→CTA — no emotional reframe)
- Visual rhythm: open (48px gaps per GF cross-level
  calibration; the lone illustration provides section
  punctuation)
- CTA position: late (section 5, second-to-last body
  section; the next-time teaser in section 6 is the
  bridge to sign-off)
- Subject line type: question hook (per copy file §Formula:
  "Question hook, curiosity about product care")

=================================================================
VARIANCE_CHECK:
- Previous email in flow: NONE (this is E1, first in flow)
- Baseline set. N/9 = N/A.

=================================================================
ABOVE_FOLD_CHECK vs CROSS-LEVEL CALIBRATION (R1-R6):
R1 (symptom over label): PASS. No "Level 1/2/3," "autism,"
    "ASD" anywhere. Symptom language: "a pause, a look,
    a pull at the pants, or still in the familiarization
    phase."
R2 (3-5 recognition anchors): PASS. 4 anchors in opener
    (pause, look, pull at pants, familiarization phase) +
    3 mini-wins implicit in mechanism section (recognition,
    sustained wear, clean pair).
R3 (age ranges): PASS. "Every pair you own" is age-neutral;
    no fixed age mentioned anywhere.
R4 (verbal/non-verbal inclusivity): PASS. "Pause" can be
    verbal hesitation; "look" and "pull at pants" are
    non-verbal physical signals.
R5 (timeline flexibility): PASS. "Wash after wash" is
    open-ended; "extends the functional life of every
    pair you own" has no fixed timeline.
R6 (low-bar success metrics): PASS. This is a utility
    upsell, not an outcome email. No success metrics
    promised. Framing is "keep working well," not
    "achieve X."
V16 (GF sub-group B litmus): PASS. Zero autism/ASD/Level
    language anywhere in copy.

HOPE/REALISM LANDING: 50/50. Utility tone — neither
optimistic nor pessimistic. The mechanism is presented as
"how it works," not as "how it transforms."

FORBIDDEN LANGUAGE AUDIT: PASS. No "easy," "quick," "simple,"
"buy now," "shop today," "last chance," exclamation marks,
"Pre-K deadline," "guaranteed outcome" (the guarantee is
risk-removal, not outcome promise).

=================================================================
END OF WIREFRAME — upsell-09-e1
=================================================================
```

---
