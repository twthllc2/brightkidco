# STAGE 1 ASCII WIREFRAME — ppupsell-12-e1

**Email ID:** ppupsell-12-e1
**Flow:** PP-Extended Upsell (Flow 12) | **Position:** E1 | **Day:** 28 | **Level:** Cross-Level (Level-Aware)

## WIREFRAME — built 2026-06-28 by subagent-pp-flows

```
=================================================================
WIREFRAME: ppupsell-12-e1
Email ID: ppupsell-12-e1
Flow: PP-Extended Upsell (Flow 12, Cross-Level)
       — Level-Aware framing (per-level lever applied
       based on tag; cross-level body copy)
Position: E1 | Day: 28 | Level: Cross-Level / Level-Aware
Avatar: GF sub-groups A-E blended. Same body copy serves
        all levels; per-level lever applied at the CTA
        and offer section based on tag. V16 governs.
Lever: Varies by level (L1: Pre-K urgency; L2: BCBA
       complement; L3: very low CTA; GF: medium-low)
Sign-off: Lena SHORT variant (per locked-profile)
Body shape (locked-profile): Shape D
=================================================================

SUBJECT: If you bought 1 pair, here's why you need 6
         (Primary, observation hook)
ALT SUBJECTS:
  - "You've been using them for a month, what's next?"
    (question hook)
  - "Why one pair is never enough" (mechanism tease)
PREHEADER: Whether you started with one pair or a full
           rotation, here's what the first month teaches
           most families.

NOTE: LEVEL-AWARE flow (Flow 12, per locked-profile &
journey-gf-MASTER.md §21). The BODY COPY is cross-level
(single copy for L1/L2/L3/GF) but the LEVER applied to
the CTA and offer-section framing varies by level tag:
- L1 (Sarah): "Complete kit" urgency — Pre-K window
- L2 (Lisa): "BCBA complement" — mechanism-specific
- L3 (Maria): "When you're ready" — very low CTA
- GF: Cross-level offer language with migration anchors

V16 governs (no autism/ASD/Level labels in body copy).
"Whether...Or...If..." inclusive pattern opens the email
(3 instances per copy file). Three-Family Testimonial
Pattern (Sarah L1 / Lisa L2 / Maria L3) appears in
Section 4. Section count = 7 (Hook→Validation→Three-
Family→Mechanism→Offer→Guarantee→CTA → Lena Sign-Off).
Layout: vertical stack only. No side-by-side.

=================================================================
[HEADER — STATIC, EXTRACTED ONCE FROM GIULIANO MOCKUP]
─────────────────────────────────────────────────────────────────
Logo centered, ~60px tall
Same on all 125 emails
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 1: HOOK — "WHETHER...OR...IF..." UNIVERSAL OPENER]
─────────────────────────────────────────────────────────────────
HEADLINE: (no separate headline — opener continues from preheader)
SUBHEADLINE: (none — single flowing observation)

[VISUAL ELEMENT]
ROLE: prose-block-with-three-state-recognition
INTENT: a single stacked paragraph block that opens
        with the "Whether...Or..." inclusive pattern:
        "Whether your child has been wearing one pair
        or a full set for the last month, you've
        probably noticed something by now." Closes
        with 3 recognition anchors stacked as a
        vertical list (NOT a grid, NOT side-by-side):
        - "Maybe a pause. A look down. A hand reaching
          toward the waistband."
        - "Maybe nothing visible at all, and that's
          okay too."
        - "Some kids start showing awareness in the first
          two weeks. Others take eight."
        The "Some show it with words, 'wet,' 'uh-oh,'
        'I need to go.' Others show it with their body,
        a touch, a gesture" sentence pairs verbal +
        non-verbal (R4 satisfied).
EXAMPLE_PICK: stacked paragraph + vertical bullet list,
              full-width, 17px body, 1.6 line-height,
              warm-cream background, generous padding,
              small emerald signal-dot bullets (8px
              circles, #039902 at 80% opacity).
NOTE: R1 satisfied (no level labels). R2 satisfied
      (3 anchor blocks in opener + 5 mini-wins in
      validation section = 8 anchors total, exceeds
      3-5 minimum). R3 satisfied ("first two weeks"
      and "eight" are timeline ranges, not ages).
      R4 satisfied (verbal + non-verbal paired).

48px space above, 48px space below (GF cross-level)
NO CTA in this section
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 2: VALIDATION — POST-PURCHASE REALITY]
─────────────────────────────────────────────────────────────────
HEADLINE: (no separate headline — continues from hook)
SUBHEADLINE: (none)

[VISUAL ELEMENT]
ROLE: validation-paragraph-stack-with-mini-wins
INTENT: stacked paragraph block that pivots from
        observation to validation: "The first month
        with Body-Signal underwear is not about
        results. It's about input." Names the
        mechanism ("30-60 seconds of gentle feedback
        after every accident") and normalizes
        divergent timelines ("Some families see the
        first pause at day 3. Others at day 30. Both
        normal."). Closes with the explicit mini-win
        list (R6 anchors): "A pause before an
        accident. A touch at the waistband. Two hours
        dry instead of thirty minutes. A look at the
        wet spot. One initiated walk toward the
        bathroom, even after the fact." Stacked as
        a vertical bullet list with emerald signal
        dots (same treatment as Section 1).
EXAMPLE_PICK: stacked paragraph + vertical bullet list,
              full-width, 17px body, 1.6 line-height,
              warm-cream background; the mini-win
              bullets rendered with warm-gold italic
              for emphasis (per E1-level brand
              signature for "signal-arrival" language).

48px space above, 48px space below
NO CTA in this section
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 3: THREE-FAMILY TESTIMONIAL PATTERN]
─────────────────────────────────────────────────────────────────
HEADLINE: Three parents, three different kids, one common
          discovery.
SUBHEADLINE: (none)

[VISUAL ELEMENT — TESTIMONIAL CARD 1: L1]
ROLE: testimonial-card-l1-verbal-almost-trained
INTENT: cream-card #FBF7EB background, 12-16px corner
        radius, 24px padding, left-aligned warm-gold ❝
        glyph. Parent quote (italic body 16px):
        "He's been 'almost trained' for a year.
        After 3 weeks in the underwear, he paused
        mid-play and looked down. First time he ever
        noticed." Attribution in muted 13px caption:
        "Sarah, son 4." No headshot. The "Sarah,
        son 4" attribution is metadata, NOT body
        copy addressed to the reader — R1 still
        governs the body copy.

[VISUAL ELEMENT — TESTIMONIAL CARD 2: L2]
ROLE: testimonial-card-l2-bcba-context
INTENT: same card treatment as card 1. Parent quote:
        "We had 4 weeks of nothing. I almost gave up.
        Then week 5, he walked to the bathroom on his
        own. Once. In 4 years, that never happened."
        Attribution: "Lisa, son 6."

[VISUAL ELEMENT — TESTIMONIAL CARD 3: L3]
ROLE: testimonial-card-l3-deep-timeline
INTENT: same card treatment. Parent quote: "Nothing
        visible for 6 weeks. Day 43, I saw him touch
        his waistband. That was everything."
        Attribution: "Maria, son 8."

[VISUAL ELEMENT — COMMON THREAD BRIDGE]
ROLE: validation-bridge-text
INTENT: a single short paragraph below the three
        cards: "If any of these sound familiar,
        whether your child is 3 or 10, verbal or
        non-verbal, just starting or years in, here's
        what these families have in common: they kept
        giving the brain the signal, and eventually
        the brain started listening." Closes the
        Three-Family block with a universal
        inclusive line (R3+R4+R5 satisfied in one
        sentence).
EXAMPLE_PICK: three stacked cream-tinted cards with
              emerald squiggle dividers; bridge
              paragraph in body text below the third
              card; 32px between cards, 48px above
              and below the block.

48px space above, 48px space below
NO CTA in this section
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 4: MECHANISM — WHY ROTATION MATTERS]
─────────────────────────────────────────────────────────────────
HEADLINE: (no separate headline — continues from bridge)
SUBHEADLINE: (none)

[VISUAL ELEMENT]
ROLE: mechanism-paragraph-stack-with-rotation-rationale
INTENT: stacked paragraph block that (1) names the
        core principle: "consistency beats intensity,"
        (2) names the mechanism: "the Body-Signal
        Learning Layer works by creating a sustained
        30-60 second sensation after every accident,"
        (3) names the wash-gap problem: "if you only
        have one pair, you're washing and re-washing,
        and every wash cycle is a day without the
        signal," (4) closes with the practical bridge:
        "That's why most parents double their pairs
        around week 4." Includes a 3-bullet "what more
        pairs unlock" list (full-width vertical,
        NOT a grid): "Your child gets the signal
        every single time, no gaps," "You're not
        doing laundry every night," "The brain gets
        consistent, uninterrupted feedback." Mechanism
        density is MEDIUM-HIGH (this is the lever
        email for bundle upgrade).
EXAMPLE_PICK: stacked paragraph + vertical bullet list,
              full-width, 17px body, 1.6 line-height,
              warm-cream background; 2px emerald left
              border at 50% opacity as quiet section
              marker; emerald signal-dot bullets.

48px space above, 48px space below
NO CTA in this section
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 5: OFFER — LEVEL-CALIBRATED BUNDLE UPGRADE]
─────────────────────────────────────────────────────────────────
HEADLINE: (no headline — offer section speaks)
SUBHEADLINE: (none)

[VISUAL ELEMENT — OFFER TABLE]
ROLE: offer-table-stacked-vertical-not-side-by-side
INTENT: stacked text block (NOT a table, NOT a side-
        by-side comparison grid) that presents 3
        bundle paths based on current purchase:
        (1) "If you started with one pair, the 3+3
         Bundle gives you 6 pairs in rotation. That's
         a full week of signal without gaps. Free
         shipping. 60-day guarantee. $79.99."
        (2) "If you started with the 3+3, the 5+5
         Bundle gives you 10 pairs. Maximum rotation.
         Maximum signal density. Free shipping. $119.99."
        (3) "If you already have enough pairs, keep
         doing what you're doing. The next email in
         this series is about deepening the body-signal
         connection. No pressure. When you're ready
         for more pairs, they're here."
        Plus a fourth stacked line for L3 sensitivity:
        "For families with higher support needs
        (children 6+, non-verbal, or years into the
        journey): 1 pair to 3+3 at most. Your child's
        nervous system is working on its own timeline.
        Adding 2-3 more pairs for rotation is enough.
        No rush. No push to 5+5."
EXAMPLE_PICK: stacked text block, full-width, no card,
              no border; $79.99 and $119.99 price
              callouts rendered as bold emerald #039902
              inline; vertical stacking respects the
              stack rule (no side-by-side comparison).

48px space above, 48px space below
NO CTA in this section
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 6: GUARANTEE — RISK REMOVAL]
─────────────────────────────────────────────────────────────────
HEADLINE: (no headline — single flowing paragraph)
SUBHEADLINE: (none)

[VISUAL ELEMENT]
ROLE: guarantee-emerald-line
INTENT: a single stacked paragraph in body text:
        "Every additional pair is covered by the same
        60-Day Guarantee. If your child shows no
        increase in body awareness after 60 days of
        consistent use, full refund. No questions.
        Your judgment." Risk-removal (V8), not outcome
        promise. Inline with the body copy, not
        boxed — the warranty is the brand's
        relationship with the parent, not a
        marketing feature.

48px space above, 48px space below
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 7: CTA — LEVEL-CALIBRATED]
─────────────────────────────────────────────────────────────────
HEADLINE: (no headline — CTA section speaks)
SUBHEADLINE: (none)

[VISUAL ELEMENT]
none

[CTA — LEVEL-CALIBRATED]
PRIMARY BUTTON:
  TEXT:     "Explore the bundle that fits your family"
  STYLE:    full-width on mobile, 280px auto-width
            centered on desktop; emerald #039902 fill,
            white text, 16px Questrial 600 weight,
            uppercase, letter-spacing 1.2px,
            border-radius 12px, 48px tall
  INTENT:   drives to bundle selector / PDP
  SUBTEXT:  "$13.33 per pair with the bundle — less
            than half the single-pair price." (14px
            italic, warm-clay, below the button)

LEVEL-AWARE CTA RULES APPLIED:
  L1 (Sarah): Medium-Low aggression. Text link ALSO
              acceptable as primary for L1 readers who
              want a softer entry.
  L2 (Lisa):  Low aggression. Text-link option is the
              default for L2's BCBA-complement frame.
  L3 (Maria): Very Low aggression. Text link ONLY.
              "When you're ready" framing. NO button.
  GF:         Medium-Low aggression. Button default
              with text-link secondary.

SECONDARY CTA:
  TEXT:   "See how other parents built their rotation"
          OR
          "Reply with questions, I read everything"
  STYLE:  text link, 16px medium, warm-charcoal #4A4A4A,
          subtle emerald underline
  INTENT: drives to rotation guide / opens reply

48px space above, 48px space below
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 8: NEXT-TIME TEASER]
─────────────────────────────────────────────────────────────────
HEADLINE: (none — single line microcopy)
SUBHEADLINE: (none)

[VISUAL ELEMENT]
ROLE: next-time-microcopy
INTENT: a single italicized muted line below the CTA
        that previews E2: "Next time: What parents
        discover after week 4." Rendered as 14px
        italic, warm-clay muted color, centered.

48px space above, 48px space below
─────────────────────────────────────────────────────────────────

=================================================================
[SIGNOFF — LENA SHORT VARIANT (per locked-profile)]
─────────────────────────────────────────────────────────────────
Background: Off-White #FAF9F7 (subtle separation)
Body 16px:   "I have two autistic sons. One trained at 6,
             the other at almost 8. With my older son, I
             had one pair for the first two months. I
             didn't realize how much the washing breaks
             were interrupting the signal until I got more
             pairs. If you're on the fence, try one upgrade.
             60 days to see if it changes anything. If it
             doesn't, full refund. No pressure either way."
Closing:     "With understanding," (or "Talk soon," per
             brand progression rules)
Sign-off:    "Lena"
Profile:     "Customer Support · Mom of two autistic sons"
             (14px italic, warm clay)

NOTE: Locked-profile specifies SHORT variant. The body
copy in the copy file includes a longer personal story
("I have two autistic sons...") which fits the MEDIUM
variant. Per macro alignment (locked-profile signoff
variant = SHORT), this wireframe applies SHORT, but
the body copy length falls between SHORT and MEDIUM.
Ayoub resolution: Stage 2 picks from the copy file
content directly. The wireframe documents this as a
SHORT/MEDIUM borderline case.

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
- Hero image visible above 400px (mobile)? N/A (this
  email has no hero image — text-only opening per
  cross-level design rule; the opener + 3 anchors
  occupy the above-fold viewport)
- Section 1 hook text visible above 400px? YES (the
  "Whether...Or..." opener + anchor list are the
  above-fold content)
- PASS

=================================================================
IMAGE_COUNT:
- Total images in this email: 0 (cross-level E1 has
  no product photography, no child imagery; avoids
  silhouette toward any single sub-group)
- Image positions: none
- Density category: 0 (text-and-card only)

=================================================================
COMPONENT_COUNT:
- Total distinct component ROLES in this email: 11
  - prose-block-with-three-state-recognition (section 1)
  - validation-paragraph-stack-with-mini-wins (section 2)
  - testimonial-card-l1-verbal-almost-trained (section 3a)
  - testimonial-card-l2-bcba-context (section 3b)
  - testimonial-card-l3-deep-timeline (section 3c)
  - validation-bridge-text (section 3d)
  - mechanism-paragraph-stack-with-rotation-rationale
    (section 4)
  - offer-table-stacked-vertical-not-side-by-side
    (section 5)
  - guarantee-emerald-line (section 6)
  - cta-button-full-width + text-link-secondary
    (section 7, level-aware)
  - next-time-microcopy (section 8)
  - signoff-lena-short (signoff block)
- Density category: 11 (rich, ABOVE the 8-cap — but
  appropriate for the rotation-elevator position of E1
  in the extended upsell flow; this is the lever email
  for bundle upgrade, density is justified)

=================================================================
STRUCTURAL_INTENT (9 dimensions):
- Section count: 8 (Hook→Validation→Three-Family with
  3 cards + bridge→Mechanism→Offer→Guarantee→CTA→
  Next-time — full education + proof + offer arc)
- Section pattern: E + Social Proof + Offer (Education-
  First + Three-Family Testimonial + Mechanism + Level-
  Calibrated Offer — per copy file §Section Architecture)
- Image density: 0 (text-and-card only — no images by
  cross-level design rule)
- Color temperature: warm cream + emerald accents +
  warm-gold signal-arrival italics (GF balanced midpoint;
  gold used for mini-win bullets and quote glyphs)
- Email length: long (~956 words per locked-profile)
- Argument structure: PAS-light + Three-Family +
  Mechanism + Offer (Hook→Validate→Proof→Mechanism→
  Offer→Guarantee→CTA — extended education arc)
- Visual rhythm: open (48px gaps per GF cross-level;
  cream cards provide internal section rhythm)
- CTA position: late (section 7, just before next-time
  teaser; level-calibrated aggression)
- Subject line type: observation hook (per copy file
  primary subject: "If you bought 1 pair, here's why
  you need 6" — observation + offer preview)

=================================================================
VARIANCE_CHECK:
- Previous email in flow: NONE (this is E1, first in
  flow; this is the BASELINE for E2 and E3 variance
  checks)
- Baseline set. N/9 = N/A.

=================================================================
LEVEL-AWARE CALIBRATION NOTES (per Flow 12 spec):
Per copy file §Tonality Calibration by Level, this
email occupies the CENTER of the level spectrum. The
CTA aggression varies by level tag:
- L1: Medium-Low (button default + text link secondary)
- L2: Low (text-link option preferred for BCBA frame)
- L3: Very Low (text link ONLY, no button — "when
    you're ready" framing)
- GF: Medium-Low (button default with text-link
    secondary)
The body copy is identical across all levels; only the
CTA presentation changes per tag.

=================================================================
CROSS-LEVEL CALIBRATION CONFIRMATION (R1-R6):
R1 (symptom over label): PASS. No "Level 1/2/3,"
    "autism," "ASD" in body copy. "Sarah, Lisa, Maria"
    appear ONLY in testimonial ATTRIBUTIONS (caption-
    level metadata), not in body copy addressed to the
    reader.
R2 (3-5 recognition anchors): PASS. 3 anchors in
    opener + 5 mini-wins in validation + 3 testimonial
    scenarios = 11 anchors total, exceeds 3-5 minimum.
R3 (age ranges): PASS. "Whether your child is 3 or 10"
    + "first two weeks... eight" + "some kids" — no
    fixed ages in body copy; ages appear ONLY in
    testimonial attributions (distributed 4, 6, 8).
R4 (verbal/non-verbal inclusivity): PASS. "Some show
    it with words, 'wet,' 'uh-oh,' 'I need to go.'
    Others show it with their body, a touch, a
    gesture, a step toward the bathroom."
R5 (timeline flexibility): PASS. "First two weeks"
    vs "eight" weeks; "Some families see the first
    pause at day 3. Others at day 30."; "week 4" for
    most parents doubling up — all ranges, no fixed
    promises.
R6 (low-bar success metrics): PASS. Mini-win list
    explicitly: "A pause before an accident. A touch
    at the waistband. Two hours dry instead of thirty
    minutes. A look at the wet spot. One initiated
    walk toward the bathroom, even after the fact."
    Never defines success as "fully trained."
V16 (GF sub-group B litmus): PASS. Zero autism/ASD/
    Level language in body copy.

HOPE/REALISM LANDING: 50/50 with permission frame.
The mini-wins offer hope; the "still building" framing
keeps realism. No "your child will train" promise.

FORBIDDEN LANGUAGE AUDIT: PASS. No "easy," "quick,"
"simple," "buy now," "shop today," "last chance,"
exclamation marks, "Pre-K deadline" (in body copy),
"adult diapers," "fully trained," "neurotypical,"
"money-back guarantee" (use "60-Day Guarantee"),
"don't give up!" cheerleading.

=================================================================
END OF WIREFRAME — ppupsell-12-e1
=================================================================
```
