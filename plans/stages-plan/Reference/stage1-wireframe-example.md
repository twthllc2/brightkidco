# STAGE 1 ASCII WIREFRAME EXAMPLE — Welcome E1 L1

**Email ID:** welcome-01-e1-l1
**Flow:** welcome | **Position:** E1 | **Day:** 0 | **Level:** L1

> **THE RULE:** Every section follows this vertical stack:
> HEADER → HEADLINE → IMAGE or COMPONENT → CTA → NEXT SECTION
> NO side-by-side. NO two-column. NO image-LEFT text-RIGHT. STACK VERTICALLY.

---

## THE WIREFRAME

```
=================================================================
WIREFRAME: welcome-01-e1-l1
Email ID: welcome-01-e1-l1
Flow: welcome | Position: E1 | Day: 0 | Level: L1
=================================================================

SUBJECT: He talks about it but won't do it
PREHEADER: It's not behavior. It's signal-timing.

=================================================================
[HEADER — STATIC, EXTRACTED ONCE FROM GIULIANO MOCKUP]
─────────────────────────────────────────────────────────────────
Logo centered, ~60px tall
Same on all 125 emails
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 1: HERO]
─────────────────────────────────────────────────────────────────
HEADLINE: He talks about the potty
SUBHEADLINE: (none)

[VISUAL ELEMENT]
ROLE: hero-image-lifestyle
INTENT: shows the kid Sarah recognizes (verbal, 3-5 yrs,
        hopeful posture, real home setting, not stock photo)
EXAMPLE_PICK: lifestyle photo of kid 3-5 yrs, hopeful
              posture, real home, soft natural light

NO CTA in this section

─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 2: OBSERVATION + CALLOUT]
─────────────────────────────────────────────────────────────────
HEADLINE: (no separate headline — continues from hero)
SUBHEADLINE: (none)

[VISUAL ELEMENT]
ROLE: callout-quote-highlight
INTENT: highlights the parent quote that stops the scroll
        ("He says 'I need to pee' AFTER it's already happened.")
EXAMPLE_PICK: visual callout box containing the verbatim
              parent quote from copy file
NOTE: This is the FIRST callout in the email. Sets the
      callout style for subsequent callouts (Stage 2 may
      vary this for variance or keep it consistent).

NO CTA in this section

─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 3: VALIDATION]
─────────────────────────────────────────────────────────────────
HEADLINE: This isn't your fault. And it's not his.
SUBHEADLINE: (none)

[VISUAL ELEMENT]
ROLE: callout-quote-highlight (variant — same family as
        Section 2 or different for variance)
INTENT: highlights the second parent quote
        ("He has a perfect week, then a month of accidents.")
EXAMPLE_PICK: callout box, same style as Section 2 OR
              different (Stage 2 decides for variance)

NO CTA in this section

─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 4: MECHANISM]
─────────────────────────────────────────────────────────────────
HEADLINE: (no separate headline — continues from validation)
SUBHEADLINE: (none)

[VISUAL ELEMENT]
ROLE: stat-highlight-box
INTENT: highlights the 49% SPARK statistic
EXAMPLE_PICK: visual box containing "49% of autistic 4-5 year
              olds aren't toilet trained" with citation

NO CTA in this section

─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 5: CTA]
─────────────────────────────────────────────────────────────────
HEADLINE: Let's explore what's really happening
          with his body signals.
SUBHEADLINE: (none)

[VISUAL ELEMENT]
none

[CTA]
BUTTON_TEXT: See How Body-Signal Learning Works
BUTTON_INTENT: drives to PDP
              landing.brightkidco.com/products/potty-training-underwear-for-sensory-sensitive-toddlers-sp
SECONDARY: text link "Read the science behind it →" (small, muted)

─────────────────────────────────────────────────────────────────

=================================================================
[SIGNOFF — LENA SHORT VARIANT]
─────────────────────────────────────────────────────────────────
Background: Off-White #FAF9F7 (subtle separation)
Body 16px: "Thanks for being here. If you have a question,
            hit reply. You'll get me — not a template,
            not a bot. I read everything."
Closing: "Talk soon,"
Signature: "Lena —," (em-dash, 14px, italic, Body Gray)

=================================================================
[FOOTER — STATIC, EXTRACTED ONCE FROM GIULIANO MOCKUP]
─────────────────────────────────────────────────────────────────
BrightKidCo
[Physical Address, City, State ZIP]
No longer want these emails? Unsubscribe
Questions? Reply to this email, we read every response.
[Instagram] [TikTok]
© 2026 BrightKidCo. All rights reserved.

=================================================================
ABOVE_FOLD_CHECK:
- Hero image visible above 400px (mobile)? YES (hero is the
  first section, definitely above fold on mobile + desktop)
- Section 1 headline visible above 400px? YES
- PASS

=================================================================
IMAGE_COUNT:
- Total images in this email: 1 (hero only)
- Image positions: section-1 only
- Density category: 1 (text-dominant, single hero image)

=================================================================
COMPONENT_COUNT:
- Total distinct component ROLES in this email: 5
  - hero-image-lifestyle (section 1)
  - callout-quote-highlight (sections 2 AND 3 — same role,
    could be same or different component)
  - stat-highlight-box (section 4)
  - cta-button-full-width (section 5)
  - signoff-lena-short (signoff block)
- Density category: 5 (rich, but not over the 8-cap)

=================================================================
STRUCTURAL_INTENT (9 dimensions):
- Section count: 5 (4 body sections + 1 CTA section)
- Section pattern: A (Hero→Validation→Mechanism→CTA standard)
- Image density: 1
- Color temperature: warm (per L1 calibration)
- Email length: short (~387 words per locked-profile)
- Argument structure: PAS-light (Problem→Absolve→Solve)
- Visual rhythm: open (40px gaps per L1 calibration)
- CTA position: late (last section)
- Subject line type: observation

=================================================================
VARIANCE_CHECK:
- Previous email in flow: NONE (this is E1, first in flow)
- Baseline set. N/9 = N/A.

=================================================================
END OF WIREFRAME — welcome-01-e1-l1
=================================================================
```

---

## WHAT THIS WIREFRAME GIVES STAGE 2

The wireframe defines 5 ROLE slots. Stage 2 picks from libraries:

| ROLE slot | Stage 2 picks from | Constraint |
|-----------|---------------------|------------|
| `hero-image-lifestyle` | 36 product images (11 in lifestyle/) | cap 25x per image |
| `callout-quote-highlight` (×2 sections) | 949 components (body_recognition, quote_block, etc.) | cap 8x per component |
| `stat-highlight-box` | 949 components (stat_callout, fact_box, etc.) | cap 8x |
| `cta-button-full-width` | 949 components (CTA variants) | cap 8x |
| `signoff-lena-short` | 949 components (signoff variants) | cap 8x |
| `header-static` + `footer-static` | Extracted ONCE from Giuliano mockup, applied to all 125 | static, no cap |

Stage 2 also applies System B colors automatically:
- Brand-Green #039902 (CTAs, accents)
- Mint #DBFFCD (highlights)
- Cream Card #FBF7EB (cards)
- Yellow #F5C84B (L1 stats only)
- Dark Text #1A1A1A (body)
- Body Gray #4A4A4A (captions)
- Off-White #FAF9F7 (background)
- Soft Gray #9AA8A7 (subtle text)

---

## THE STACK RULE (visual reference)

```
CORRECT (every section):
┌────────────────────────┐
│ HEADLINE               │  ← text first
├────────────────────────┤
│ IMAGE or COMPONENT     │  ← visual second (stacked below)
├────────────────────────┤
│ CTA (if applicable)    │  ← action last
└────────────────────────┘


WRONG (never do this):
┌──────────┬─────────────┐
│ IMAGE    │ HEADLINE    │  ← side-by-side is forbidden
│ LEFT     │ RIGHT       │
└──────────┴─────────────┘
```

Every email section follows the correct stack. No exceptions. Mobile-first means stacked. Desktop honors the same stack (just wider).

---

## END OF EXAMPLE

This is the format Stage 1 subagents must produce for each of 125 emails. Stage 2 picks the actual assets from the 949 + 36 libraries to fill the ROLE slots.