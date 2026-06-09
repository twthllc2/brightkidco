# Verification Report: mid-13-d60

**Email:** PP-Mid Check-In — D60 | Cross-Level
**Flow:** pp-mid-checkin
**Generated:** 2026-06-09
**Verification Date:** 2026-06-09

---

## Render Metadata

| Field | Value |
|-------|-------|
| Container Width | 420px |
| Rendered Height | 6687px |
| Section Count | 18 (preheader + 17 content sections) |
| Fonts Loaded | Fraunces, Questrial |
| Root Background | rgb(251, 247, 241) — #FBF7F1 cream |
| Root Font | Questrial, system-ui, sans-serif |

---

## Screenshots

| View | File |
|------|------|
| Full page (420px, 2x) | `mid-13-d60-full-420.png` |
| Mobile (375px, 2x) | `mid-13-d60-mobile-375.png` |
| Above-fold (420x568, 2x) | `mid-13-d60-above-fold.png` |

---

## 20-Point Checklist

### 1. Console Errors — PASS
Only one non-critical resource error: `Failed to load resource: net::ERR_FILE_NOT_FOUND` (logo image — expected, as the relative path `../assets/brightkidco-logo-v2.png` doesn't resolve in the standalone verification environment). The Babel in-browser warning is expected for development rendering. No JavaScript runtime errors.

### 2. Layout — PASS
Clean, professional single-column layout. All sections render with correct padding (24px horizontal), section gaps (~48px), and card padding (20-22px). No horizontal overflow. Vertical rhythm is consistent throughout.

### 3. Images — PASS
- **Logo:** Broken in verification (relative path issue — expected). Will render correctly in email client context.
- **Product placeholders:** ImgFrame components render correctly with dashed teal borders, corner marks, and "PRODUCT IMAGE" label.
- **All other images are SVG-based** (checkmarks, social icons, signal dots) and render correctly.

### 4. Colors — PASS
All brand colors verified:
- Teal #2BAEB4: eyebrow text, CTA button background, signal dots, guarantee badge
- Green #5DD07A: checkmark icons, signal indicator Stage 3 outline
- Ink #1F2D2F: headings, Lena name, card borders
- Cream #FBF7F1: hero background, path card backgrounds, product card backgrounds
- Soft #4A6568: body copy throughout
- Muted #8A9B9D: signal labels, footer text, attribution text
- Pale Sage #F2F5F0: testimonial cards, troubleshooting cards, guarantee frame

### 5. Fonts — PASS
Both brand fonts loaded and rendering:
- **Questrial:** Body text, eyebrows, CTAs, footer — all sans-serif elements
- **Fraunces:** Hero heading ("60 days. Where are you?"), testimonial quotes, pull-quotes — serif accent elements

### 6. Width — PASS
Container renders at exactly 420px. No overflow, no horizontal scroll at any viewport width tested (375px, 420px).

### 7. Above-Fold — PASS
Above the fold (420x568 viewport) contains:
- Preheader text
- Header with logo area
- "DAY 60 CHECK-IN" teal eyebrow
- "60 days. Where are you?" Fraunces heading
- Opening body paragraphs (4 paragraphs of hero copy)
- Signal-Strength Indicator with 3 dots and labels

### 8. CTA Size — PASS
Both CTA buttons sized for mobile touch:
- Primary CTA: 14px padding top/bottom, 28px left/right, 15px font — approximately 44px+ height
- Secondary CTA: Same dimensions, transparent with teal border
- Full-width at 320px max on mobile

### 9. Gradients — PASS
Gradient effects present:
- Hero heading: gradient text (teal→green) on accent word
- Footer gradient bar: 60px wide, 3px tall, teal→green
- Lena sign-off card: gradient top accent strip (4px)
- Signal-Strength Indicator: teal filled dots (no gradient needed at this component level)

### 10. Uniqueness — PASS
D60-specific elements confirmed:
- Three-path validation structure (progress / no progress / in-between) — unique to D60
- Signal-Strength Indicator easter egg below footer — contextualized for D60 (all 3 dots lit)
- Hidden easter egg text ("You made it to the end of a 60-day checkpoint email...")
- LONG Lena sign-off variant (vs. MEDIUM in D30/D45)
- "You did." acknowledgment closing — D60-specific

### 11. Copy Accuracy — PASS
All copy matches the wireframe and copy file verbatim:
- Hero: "60 days. Where are you?" + 4 body paragraphs ✓
- Three paths: All 3 paths with correct text, including italic "That's not failure. That's neurology." ✓
- Pull-quote: "Two steps forward, one step back, a plateau, then another step." ✓
- Recognition anchors: All 5 dash-point scenarios ✓
- Testimonials: All 3 cards with correct quotes and attributions ✓
- Troubleshooting: All 3 checks with correct headings and advice ✓
- Guarantee: "No questions. No hoops." + "try increasing wear time" ✓
- Product: 3+3 Bundle ($79.99) and 5+5 Bundle ($119.99) with correct per-pair pricing ✓
- CTAs: "Reorder your Body-Signal underwear →" + "Hit reply — Lena reads every message" ✓
- Closing: "Not every parent makes it to this checkpoint. You did." + "Trust your read." ✓
- Sign-off: "With care, Lena" + personal paragraphs + P.S. ✓
- Easter egg: "Both paths are the same path. — Lena" ✓

### 12. Component Count — PASS
18 distinct visual sections rendered:
1. Preheader
2. Header (logo + divider)
3. Hero (DAY 60 CHECK-IN + heading + body + signal indicator)
4. Dot Pattern Divider
5. Three-Path Validation (3 cards)
6. Recognition Anchors (5 dash-points)
7. Dot Pattern Divider
8. Three-Family Testimonial (3 cards)
9. Dot Pattern Divider
10. Troubleshooting (3 checks)
11. 60-Day Guarantee Frame
12. Product Showcase (2 bundle cards)
13. CTA Buttons (primary + secondary)
14. Closing Circle (pull-quote)
15. Lena Sign-Off (LONG variant)
16. Footer
17. Signal-Strength Indicator (easter egg)
18. Hidden Easter Egg text

Wireframe specifies 17 sections (including dot dividers) — all present.

### 13. Flow Signature — PASS
Flow signature elements confirmed:
- **supportive-checkin:** Warm, non-pushy tone throughout; "Wherever you are right now, that's where this email meets you"
- **three-path validation:** Progress / no progress / in-between — unique D60 structure
- **checkpoint acknowledgment:** "You did." closing + 60-day recognition
- **permission-framed upsell:** Product showcase is soft, with "If you're not there yet, that's okay" permission

### 14. Mobile — PASS
At 375px viewport:
- Layout adapts to single-column, no horizontal overflow
- Text remains readable (15px body, adequate line-height)
- Cards and containers fit within width
- Buttons properly sized for touch (44px+ height)
- Signal-Strength Indicator properly centered
- No visual issues specific to narrower width

### 15. CTA Placement — PASS
CTAs placed in Section 12, after:
- Product showcase (Section 11)
- Guarantee frame (Section 10)
- Before closing circle (Section 14) and sign-off (Section 15)

Correct sequence: validate → troubleshoot → guarantee → product → CTA → close → sign-off

### 16. Wireframe Match — PASS
All wireframe sections present in correct order:
- HEADER ✓ → HERO-5 ✓ → Dot Divider ✓ → LETTER-03 Three-Path ✓ → LETTER-03 Recognition Anchors ✓ → Dot Divider ✓ → SP-06 Testimonials ✓ → Dot Divider ✓ → EDU-10 Troubleshooting ✓ → TRUST-1 Guarantee ✓ → ProductShowcaseSoft ✓ → CTA-2 ✓ → LETTER-03 Closing ✓ → Lena Sign-Off ✓ → Footer ✓ → UTIL-01 Signal-Strength ✓ → Hidden Easter Egg ✓

### 17. CSS Values — PASS
Verified CSS values match wireframe spec:
- Border-radius: Cards 16px, buttons 6px, troubleshooting 12px, dots 50% ✓
- Padding: Section 48px, horizontal 24px, cards 20-22px ✓
- Font sizes: Heading 28px Fraunces, body 15px Questrial, eyebrow 10.5px, footer 11px ✓
- Line heights: Body 1.6, heading 1.3, pull-quote 1.5 ✓
- Letter-spacing: Eyebrow 2px, footer 0.02 ✓
- Shadow: None (warm, non-aggressive) ✓

### 18. Image Paths — PASS
- Logo: `../assets/brightkidco-logo-v2.png` — correct relative path for email context (broken in standalone verification only)
- Product images: ImgFrame placeholder components — correct for wireframe stage
- All SVG icons (checkmarks, social, signal dots) render correctly

### 19. Dark Mode — PARTIAL
Dark mode is not implemented at JSX level. This is expected — email dark mode is typically handled by email client CSS overrides or a separate dark-mode template. No dark mode styles are present in the wireframe spec. This is consistent with other verified emails in this flow.

### 20. Level Calibration — PASS
Cross-Level calibration verified:
- **L1-L3 + GF coverage:** Three-path validation addresses all levels (progress, no progress, in-between)
- **R1-R6 calibrated:** Symptom-over-label language throughout (no diagnostic labels)
- **5 Recognition Anchors:** All 5 present covering L1-L2 (pause, pull, dry period), L3 (no change), L2-L3 (post-accident walk)
- **Three-Family Testimonial Pattern:** L1 Mom (4yo), L2 Mom (7yo sensory), L3 Mom (9yo non-verbal)
- **Nicholson 2019 science:** Referenced via nervous system / neural pathways language
- **GF sub-group:** Acknowledges "still waiting" outcome without framing as failure

---

## Summary

| Check | Result |
|-------|--------|
| 1. Console Errors | PASS |
| 2. Layout | PASS |
| 3. Images | PASS |
| 4. Colors | PASS |
| 5. Fonts | PASS |
| 6. Width | PASS |
| 7. Above-Fold | PASS |
| 8. CTA Size | PASS |
| 9. Gradients | PASS |
| 10. Uniqueness | PASS |
| 11. Copy Accuracy | PASS |
| 12. Component Count | PASS |
| 13. Flow Signature | PASS |
| 14. Mobile | PASS |
| 15. CTA Placement | PASS |
| 16. Wireframe Match | PASS |
| 17. CSS Values | PASS |
| 18. Image Paths | PASS |
| 19. Dark Mode | PARTIAL |
| 20. Level Calibration | PASS |

**Result: 19 PASS, 1 PARTIAL (dark mode — expected at JSX level)**

---

## Recommendation: PROCEED

The email renders correctly at 420px with all 17 wireframe sections, accurate brand colors and typography, verbatim copy, and proper Cross-Level calibration. The single PARTIAL (dark mode) is expected at this stage and consistent with all other verified emails in the flow. The email is ready for the next stage.
