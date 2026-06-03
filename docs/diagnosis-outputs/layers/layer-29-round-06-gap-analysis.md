# Layer 29 Round 6: Visual Calibration — Gap Analysis

**Task:** t_36a56d7e — L29 R6: Visual Calibration — Gap Analysis
**Date:** May 25, 2026
**Assignee:** ops3

---

## 1. EXECUTIVE SUMMARY

This gap analysis reviews all Layer 29 Rounds 1-5 outputs plus cross-layer references (L4 Avatar Levels, L9 Voice of Lena) to identify missing visual guidelines, contradictions, and unresolved questions in the Visual Calibration per Level system.

**Total gaps identified:** 12
**Critical gaps:** 3
**High gaps:** 4
**Medium gaps:** 3
**Low gaps:** 2

---

## 2. GAP CATALOG

### GAP 1: Questrial Font vs Email-Safe Font — UNRESOLVED CONTRADICTION

**Severity:** CRITICAL
**Sources:** R1 §2, R2 §3, R3 §2.5, L29 Visual Calibration §1.2, R4 C4

The brand spec locks Questrial as the mandatory font for ALL assets. The email design SOPs specify Arial/Helvetica system fonts only, because Questrial fails in Gmail (~30% market share) and Outlook (~18% market share). This affects ~48% of email opens.

R4 identified this as C4 and recommended resolution before template build. The L29 Visual Calibration synthesis §1.2 acknowledges the fallback ("Email-safe fallback: Arial, Helvetica, sans-serif") but does NOT resolve the contradiction — it lists both without specifying when to use which.

**What's missing:**
- No decision on whether Questrial is website-only or email-capable
- No guidance on whether to embed Questrial with @font-face (Apple Mail only) or abandon it entirely in emails
- No fallback stack definition beyond Arial/Helvetica
- No guidance on how Questrial's visual feel translates to Arial (weight, spacing, tracking differences)

**Impact:** Template build is BLOCKED until resolved. Designers cannot choose fonts without a decision.

**Recommendation:** Adopt a two-tier system: Questrial for website/landing pages, Arial/Helvetica for all HTML emails. Document this as a brand constant exception with rationale.

---

### GAP 2: Level 2 Color Dominance — UNRESOLVED CONTRADICTION

**Severity:** CRITICAL
**Sources:** L4 §4.18, L29 R3 §2.2, L29 Visual Calibration §3.2, R4 C5

L4 §4.18 says Level 2: "Color: Brand-Green dominant, Mint for highlight boxes." L29 R3 §2.2 says Level 2: "Color: RESTRAINED — mint more prominent (science-adjacent), soft gray prominent (credibility)." The L29 Visual Calibration synthesis §3.2 follows R3 (mint/gray prominent, green restrained).

These directly contradict. R4 identified this as C5 and recommended following R3. But the L4 document — which is the authoritative avatar level source — still says green dominant.

**What's missing:**
- No authoritative single source of truth for L2 color weighting
- L4 §4.18 has not been updated to match the more detailed R3/L29 synthesis
- No design team sign-off on which version is correct

**Impact:** Designers building L2 templates will get conflicting instructions depending on which document they read.

**Recommendation:** Update L4 §4.18 to match L29 Visual Calibration §3.2 (mint/gray prominent, green restrained). Add a cross-reference note in L4 pointing to L29 for visual details.

---

### GAP 3: No Actual Photography Assets or Style Guide

**Severity:** CRITICAL
**Sources:** R1 §3, R3 §4, R4 G2, L29 Visual Calibration §2-5

All rounds define image DIRECTION rules (age ranges, settings, moods, DO/DON'T lists) but no actual photography exists. There are:
- No curated stock photo URLs per level
- No photo shoot brief with specific shot lists
- No image asset library
- No Figma mockups with placeholder images

R3 §4 flagged this as High. R4 G2 flagged it as High. No round has produced a solution.

**What's missing:**
- Photography style brief per level (specific shot list, mood board, lighting specs)
- Curated stock photo library (Unsplash/Pexels URLs organized by level)
- Image selection criteria for email template slots (hero, testimonial, product)
- Diversity requirements checklist (ethnicity, family setup, ability representation)
- Image naming convention for asset management

**Impact:** Email templates cannot be built without images. Designers will default to generic stock, violating brand rules.

**Recommendation:** Create a photography brief per level with: 10+ example stock photo URLs, shot composition rules, lighting specs, and diversity requirements. This is a prerequisite for template build.

---

### GAP 4: Brand-Green Contrast Ratio Unverified

**Severity:** HIGH
**Sources:** R3 §4, R4 G5, L29 R2 §Standard 5, L29 Visual Calibration §9.2

WCAG AA requires 4.5:1 contrast ratio for CTA buttons. Brand-Green #039902 has NOT been tested against the brand's background colors:
- #FBF7EB (Cream Card)
- #FAF9F7 (Off-white BG)
- #DBFFCD (Mint)
- #FFFFFF (White)

R3 §4 flagged this as Medium. R4 G5 flagged it as Medium. Still unresolved.

**What's missing:**
- WebAIM contrast checker results for #039902 against all 4 backgrounds
- If #039902 fails, a secondary CTA color that passes
- Dark mode contrast verification (#039902 against #1a1a1a, #2a2a2a)
- Documentation of results in brand constants

**Impact:** If Brand-Green fails WCAG AA, ALL CTA buttons across ALL levels are inaccessible. This is a legal and usability risk.

**Recommendation:** Run contrast checks immediately. If #039902 fails against cream/off-white, define a darker green variant for CTAs while keeping #039902 for non-text accents.

---

### GAP 5: No Dark Mode Color Mapping Per Level

**Severity:** HIGH
**Sources:** R2 §Framework 2, R3 §2.5, R4 G1, L29 Visual Calibration §8.3

The L29 Visual Calibration §8.3 provides generic dark mode overrides (page bg, text, borders) but does NOT address per-level color weighting in dark mode:
- L1's vibrant green dominant palette will look different in dark mode than L3's muted gray/cream palette
- No testing of whether L3's muted palette maintains dignity-first feel in dark mode
- No guidance on whether accent weighting (green dominant vs restrained vs minimal) shifts in dark mode

**What's missing:**
- Per-level dark mode color override table
- Brand-Green dark mode rendering test results
- Guidance on whether muted L3 palette needs different dark mode treatment than vibrant L1
- Dark mode logo variants (light logo for dark backgrounds)

**Impact:** 40%+ of email opens happen in dark mode (Apple Mail, Gmail app). Without per-level dark mode testing, the carefully calibrated visual hierarchy may collapse.

**Recommendation:** Create a dark mode color mapping table per level. At minimum, verify that L3's cream/gray palette doesn't become invisible against dark backgrounds.

---

### GAP 6: CTA Button Shape Not Standardized Across Levels

**Severity:** HIGH
**Sources:** R2 §2, R2 §10, R4 G3, L29 Visual Calibration §9.2

R2 §2 says "Pick ONE shape across all templates — never mix" (rounded 4-6px vs pill 50%). R2 §10 recommends pill-shaped ("playful, kid-friendly"). L29 Visual Calibration §9.2 lists both options without choosing.

But should Level 3 (dignity-first, quiet warmth) use the same "playful" pill shape as Level 1 (hope-forward, Pre-K energy)? The pill shape signals playfulness, which may conflict with L3's dignity-first mandate.

**What's missing:**
- Decision on universal pill vs per-level shape
- If per-level: L1/L2 = pill (playful), L3 = rounded rectangle (dignified), GF = ?
- Rationale document for the chosen approach
- Figma component library with the chosen shape(s)

**Impact:** Inconsistent button shapes across levels will look unprofessional. Wrong shape for L3 may undermine dignity-first feel.

**Recommendation:** Use pill shape for L1/L2/GF (consistent with kid-friendly brand), rounded rectangle (4-6px) for L3 (dignity-first). Document as a per-level visual constant.

---

### GAP 7: No Visual Rules for SMS/MMS

**Severity:** MEDIUM
**Sources:** L9 §4.2 (V24), R4 G4

V24 defines SMS voice rules (symptom hook + single CTA, max 160 chars) but no visual rules exist for MMS. If BrightKidCo sends image messages:
- No per-level image selection for MMS format
- No MMS image size specs
- No guidance on whether MMS images should follow email hero rules or have different requirements

**What's missing:**
- MMS image dimensions and format specs
- Per-level MMS image selection rules
- Whether MMS follows email visual calibration or has its own
- Alt-text requirements for MMS

**Impact:** Low if BrightKidCo doesn't use MMS. Medium if they do — wrong images could violate dignity-first rules for L3.

**Recommendation:** If MMS is planned, create a separate MMS visual brief. If not planned, document "SMS only — no MMS" as a brand decision.

---

### GAP 8: No Figma Template Files

**Severity:** MEDIUM
**Sources:** R3 §4, L29 Visual Calibration §9

The L29 Visual Calibration document specifies Figma artboard width (600px) and wireframing protocol, but no actual Figma files exist for BrightKidCo templates. R3 §4 flagged this as Medium.

**What's missing:**
- Figma master template files for each email type
- Component library (buttons, cards, testimonial blocks, sign-off sections)
- Per-level color style presets in Figma
- Typography presets matching brand constants

**Impact:** Designers cannot build templates without Figma files. They'll create ad-hoc designs that may not follow the visual calibration specs.

**Recommendation:** Create Figma template files after resolving GAP 1 (font), GAP 4 (contrast), and GAP 6 (button shape). These decisions must be made first.

---

### GAP 9: No Guidance on Visual Treatment of Lena's Sign-Off Per Level

**Severity:** MEDIUM
**Sources:** L9 §8, L29 Visual Calibration §7.1, R1 §8

The L29 Visual Calibration §7.1 specifies sign-off section visual treatment: "dark text #1A1A1A on cream #FBF7EB" — but this is universal. L9 §8 defines sign-off energy per phase (warm/empathetic/science-respectful/gentle) but NOT per level.

The sign-off is the trust anchor in every email. Should Level 3's "gentle, no pressure" sign-off look visually different from Level 1's "encouraging, forward-looking" sign-off?

**What's missing:**
- Per-level sign-off visual treatment (background color, border, spacing)
- Whether L3 sign-off should be visually quieter than L1
- Whether sign-off section uses level-specific accent colors or stays universal cream
- P.S. line visual treatment per level

**Impact:** Medium. The sign-off is consistent across levels by design, but visual nuance could reinforce level-specific tone.

**Recommendation:** Keep sign-off visual treatment universal (cream background, dark text) for consistency. Differentiate through copy (L9 rules), not visual design. Document this decision.

---

### GAP 10: No Specification for "Steps" Visualization Format (Level 1)

**Severity:** LOW
**Sources:** L29 Visual Calibration §2.6, L4 §3.16

L29 Visual Calibration §2.6 says Level 1 benefits from "'Steps' visualizations work well." But no specification exists:
- How many steps?
- Visual format (numbered cards? horizontal flow? vertical list?)
- Icon treatment per step?
- Mobile rendering of steps?

**What's missing:**
- Steps visualization wireframe
- Number of steps per email type
- Mobile stacking behavior
- Icon/illustration style for steps

**Impact:** Low. Steps are a nice-to-have for L1 emails, not a blocker.

**Recommendation:** Define a simple 3-step visualization format: numbered cards with cream background, Brand-Green numbers, Questrial/Arial body text. Mobile: stack vertically.

---

### GAP 11: No Specification for "Science Callout Boxes" (Level 2)

**Severity:** LOW
**Sources:** L29 Visual Calibration §3.4, L3.6, R3 §2.2

L29 Visual Calibration §3.4 and §3.6 reference "science callout boxes" and "Kelly Mahler quotes" for Level 2, but no visual specification exists:
- Background color (mint? cream? dedicated box color?)
- Border treatment (left border? full border? no border?)
- Typography (italic? different size? different weight?)
- Icon treatment (quote marks? Kelly Mahler headshot?)

**What's missing:**
- Science callout box wireframe
- Typography specs for callout text
- Kelly Mahler attribution format
- Mobile rendering

**Impact:** Low. These are supporting elements, not primary design components.

**Recommendation:** Define callout boxes as: Mint #DBFFCD background, left border 4px Brand-Green, body text 16px italic, attribution line 14px gray. Mobile: full-width with 16px padding.

---

## 3. CONTRADICTIONS BETWEEN VISUAL RULES AND OTHER LAYERS

### C1: Questrial Font Spec vs Email Client Reality
- **Visual Rule:** Questrial mandatory for ALL assets (R1 §2, L29 §1.2)
- **Technical Reality:** Questrial fails in Gmail and Outlook (R2 §3, R3 §2.5)
- **Status:** UNRESOLVED — both specs coexist without reconciliation
- **Resolution:** See GAP 1

### C2: Level 2 Green Dominant vs Mint Dominant
- **L4 §4.18:** "Brand-Green dominant, Mint for highlight boxes"
- **L29 R3 §2.2 / L29 Synthesis §3.2:** "RESTRAINED — mint more prominent, soft gray prominent"
- **Status:** UNRESOLVED — L4 has not been updated
- **Resolution:** See GAP 2

### C3: Level 2 Urgency — Static vs Event-Driven
- **R1 §7:** Level 2 urgency = "Low"
- **L4 §4.11:** "LOW (baseline) — can spike to HIGH on trigger events"
- **L29 Synthesis §3.5:** "NONE — event-driven only"
- **Status:** PARTIALLY RESOLVED — L29 Synthesis §8.4 documents the exception but the main urgency matrix (§6.1) still shows "Low" without the event-driven qualifier
- **Resolution:** Update the urgency matrix in §6.1 to add a footnote: "L2 can spike to HIGH during withholding crisis or school transition events. See §8.4."

### C4: Visual Energy Terminology vs Voice Tonality
- **Visual:** "Optimistic but grounded" / "Clinical warmth" / "Quiet warmth + clinical reality"
- **Voice (L9):** "Hope-forward Lena" / "Science-respectful Lena" / "Dignity-first Lena"
- **Status:** NOT A TRUE CONTRADICTION — complementary dimensions
- **Resolution:** Document the mapping explicitly: visual energy handles color/imagery/layout, voice tonality handles copy/word choice/tone. They reinforce each other but are distinct.

### C5: General Fallback Audience Share Ambiguity
- **R1 §3:** "~50% real volume"
- **L4 §1:** L1+L2+L3 sum to ~100% of "assigned" audience, GF is ~50% of total volume
- **Status:** NOT A CONTRADICTION — but confusing terminology
- **Resolution:** Clarify: "GF handles ~50% of total email volume. L1/L2/L3 percentages are of the remaining ~50% that has level tags."

---

## 4. MISSING BRAND CONSTANTS

### BC1: Logo Asset Not Specified
- No logo URL (CDN or hosted) specified in any document
- R2 §10 references `{{LOGO_URL}}` macro but no actual URL
- Dark mode logo variant not defined
- Logo dimensions not locked (R2 says "150×h" but no actual file)

### BC2: Social Media Icon Assets Not Specified
- Instagram and TikTok icons referenced in footer but no asset URLs
- Icon style not defined (filled? outline? monochrome? brand-colored?)
- Icon dimensions not specified for email context

### BC3: Product Image Standards Not Locked
- Product images referenced (270×270 grid, 300×300 single) but no actual product photos
- No standard product photography angle/background
- No lifestyle vs studio product photo guidance

### BC4: Guarantee Badge Design Not Specified
- "60-Day Money Back Guarantee" referenced everywhere but no visual badge
- Badge dimensions, colors, placement not defined
- No Figma component for guarantee badge

### BC5: Review Stars Visual Not Specified
- "4.9 ★" referenced in footer and trust signals but star visual not defined
- Star color (yellow #F5C84B?), size, rendering not specified
- No guidance on how to render stars in email HTML (Unicode? image? CSS?)

---

## 5. PRIORITY RANKING OF GAPS

| Rank | Gap | Severity | Blocks Template Build? | Effort to Resolve |
|------|-----|----------|----------------------|-------------------|
| 1 | GAP 1: Questrial vs Email Font | CRITICAL | YES | Low (decision only) |
| 2 | GAP 2: L2 Color Dominance | CRITICAL | YES | Low (update L4) |
| 3 | GAP 4: Brand-Green Contrast | HIGH | YES | Low (run WebAIM) |
| 4 | GAP 6: CTA Button Shape | HIGH | YES | Low (decision only) |
| 5 | GAP 3: No Photography Assets | CRITICAL | YES | High (curation + brief) |
| 6 | GAP 5: Dark Mode Per Level | HIGH | Partial | Medium (testing) |
| 7 | GAP 9: Sign-Off Visual Per Level | MEDIUM | No | Low (decision only) |
| 8 | GAP 8: No Figma Templates | MEDIUM | YES | High (design work) |
| 9 | GAP 7: SMS/MMS Visual Rules | MEDIUM | No | Low (if needed) |
| 10 | GAP 10: Steps Visualization | LOW | No | Low (wireframe) |
| 11 | GAP 11: Science Callout Boxes | LOW | No | Low (wireframe) |
| 12 | GAP 12: Missing Brand Constants (BC1-5) | (see BC section) | Partial | Medium |

---

## 6. RECOMMENDED NEXT STEPS

### Immediate (Before Template Build)

1. **Resolve GAP 1** — Make a decision: Questrial for web, Arial/Helvetica for email. Document in brand constants.
2. **Resolve GAP 2** — Update L4 §4.18 to match L29 synthesis. Green restrained for L2.
3. **Verify GAP 4** — Run WebAIM contrast checker for #039902 against all backgrounds. Document results.
4. **Resolve GAP 6** — Choose button shape per level. Document in brand constants.
5. **Lock brand constants (BC1-5)** — Logo URL, social icons, product photos, guarantee badge, star rendering.

### Short-Term (During Template Build)

6. **Create GAP 3** — Photography brief per level with stock photo URLs.
7. **Test GAP 5** — Dark mode rendering for all 4 levels.
8. **Build GAP 8** — Figma template files with resolved constants.

### Medium-Term (Post-Template Build)

9. **Document GAP 9** — Sign-off visual treatment decision.
10. **Define GAP 10/11** — Steps and callout box wireframes.
11. **Decide GAP 7** — MMS visual rules if applicable.

---

## 7. CROSS-LAYER DEPENDENCY MAP

```
GAP 1 (Font) ──────────┐
GAP 4 (Contrast) ──────┤
GAP 6 (Button Shape) ──┼──▶ Figma Templates (GAP 8) ──▶ Email HTML Build
GAP 3 (Photography) ───┤
BC1-5 (Brand Constants)┘

GAP 5 (Dark Mode) ──────▶ Post-template testing
GAP 9 (Sign-Off) ───────▶ Copy deck integration
GAP 10/11 (Components) ─▶ Template build support
GAP 7 (SMS/MMS) ────────▶ Separate track (if needed)
```

**Critical path:** GAP 1 → GAP 4 → GAP 6 → BC1-5 → GAP 8 (Figma) → Template Build

---

*Generated: May 25, 2026*
*Sources: L29 R1 (Client Files), L29 R2 (Skill Loading), L29 R3 (Wiki Extraction), L29 R4 (Cross-Reference), L29 Visual Calibration (Synthesis), L4 (Avatar Levels), L9 (Voice — Lena)*
*Gaps identified: 12 | Contradictions: 5 | Missing brand constants: 5*
*Priority ranking: Included*
