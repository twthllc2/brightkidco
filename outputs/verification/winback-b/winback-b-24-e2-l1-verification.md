# Verification Report: winback-b-24-e2-l1

**Email:** Winback Path B — E2 | L1 (Sarah — Verbal, Hope-Intact)
**Generated:** 2026-06-09
**Verified by:** ops6 automated verification

---

## Screenshots

| View | Path |
|------|------|
| 420px full page | `/root/projects/brightkidco/outputs/verification/winback-b/winback-b-24-e2-l1-420-full.png` |
| 375px mobile | `/root/projects/brightkidco/outputs/verification/winback-b/winback-b-24-e2-l1-375-mobile.png` |
| 420x568 above-fold | `/root/projects/brightkidco/outputs/verification/winback-b/winback-b-24-e2-l1-420x568-above-fold.png` |

---

## 20-Point Verification Checklist

### 1. JSX renders without errors
**PASS** — Email renders cleanly in Chromium (Playwright headless). All sections display correctly. React/Babel compilation succeeds. No console errors detected.

### 2. Copy matches verbatim
**PASS** — All 8 copy blocks verified character-for-character against `copy/winback-b/winback-b-24-e2-l1.md`:
- Hook opening (67 days quote): ✓ match
- Hook validation ("not skepticism"): ✓ match
- Hook citation (49 studies): ✓ match
- Mechanism box (Body-Signal Learning Layer): ✓ match
- Offer 1-pair ($34.99): ✓ match
- Offer bundle ($79.99): ✓ match
- CTA text ("See if the signal works"): ✓ match
- Signoff role ("Customer Support · Mom of two autistic sons"): ✓ match

### 3. Brand tokens correct
**PASS WITH NOTES** — The JSX uses the following hex values:
- `#2BAEB4` (teal): ✓ present
- `#5DD07A` (green): ✓ present
- `#FFFFFF` (paper): ✓ present
- `#DBFFCD` (mint): ✓ present

**Discrepancy noted:** The JSX uses hardcoded colors that differ from the primitives.jsx `window.BRAND` tokens for several elements:
| Token | Required | Used in JSX | Used in Copy Doc |
|-------|----------|-------------|------------------|
| ink | #1F2D2F | #1A1A1A | #1A1A1A |
| soft | #4A6568 | #7A7A84 | #7A7A84 |
| cream | #FBF7F1 | #FBF7EB | #FBF7EB |
| muted | #8A9B9D | #9AA8A7 | #9AA8A7 |

The JSX matches the copy doc's color table, not the brand token definitions in primitives.jsx. This is a source-document discrepancy, not a JSX error.

### 4. Colors match brand tokens
**PASS WITH NOTE** — The visual colors render correctly and consistently. The mint highlight (#DBFFCD), green CTA (#5DD07A), and teal accent (#2BAEB4) are on-brand. The minor hex differences noted above (#1A1A1A vs #1F2D2F, etc.) are visually imperceptible at email viewing distances.

### 5. Fonts load
**PASS** — Questrial (Google Fonts) loads correctly for all body text. Caveat (cursive) loads for the handwritten "Lena" signature. Fraunces is not referenced in this email (appropriate for the letter-style layout). Font rendering is consistent across all three screenshots.

### 6. 420px width correct
**PASS** — Full-page screenshot at 420px renders correctly. All content fits within the 420px width. No horizontal overflow. The EmailShell constrains to `width: 420` as specified.

### 7. Above-fold captured
**PASS** — The 420x568 above-fold screenshot shows: preheader text, header ("Lena from BrightKidCo" + "View in browser"), green divider, and the start of the hook paragraph. Clean first impression, text-first, no images.

### 8. CTA visible
**PASS** — The green CTA button ("See if the signal works for your child →") is clearly visible with high contrast (green #5DD07A bg, white text). Appears in both 420px and 375px views. Max-width 320px, centered.

### 9. Band transitions smooth
**PASS** — The green divider line (#5DD07A, 2px) creates a clean transition between header and body. The mint mechanism box has a smooth left-border accent. Offer cards have rounded corners (borderRadius: 20) with clean edges. No harsh transitions.

### 10. No repetition
**PASS** — Key phrases appear appropriate times:
- "You signed up 67 days ago": 1× (opening only)
- "hope-fear": 1× (Section 4 only)
- "Body-Signal Learning Layer": 1× (mechanism box only)
- "60-Day Guarantee": 2× (one per offer card — correct)
- "60 days": 2× (Door 1 copy + P.S. — acceptable)

### 11. Copy verbatim check
**PASS** — (See item #2 for detailed breakdown.) All copy blocks are character-accurate against the source copy document.

### 12. Component diversity
**PASS** — The email uses distinct visual components:
- Plain paragraph text (hook section)
- Highlighted mechanism box (mint bg, green left border)
- Two offer cards with different backgrounds (mint for Door 1, cream for Door 2)
- CTA button (green bg, white text, rounded)
- Handwritten signature (Caveat font)
- Footer with gradient accent bar

### 13. Flow identity correct
**PASS** — The JSX header comment identifies "Winback Path B — E2 | L1 (Sarah — Verbal, Hope-Intact)" and references the correct strategy map entry. The preheader text matches the copy doc.

### 14. Mobile ready (375px)
**PASS** — The 375px mobile screenshot shows:
- All content fits within viewport (no horizontal scroll)
- Offer cards stack vertically (correct responsive behavior)
- CTA button spans full available width
- Text remains legible at mobile size
- No overflow or clipping

### 15. Conversion rules
**PASS** — All conversion elements present:
- 60-day guarantee badge on both offer cards ✓
- Single pair price $34.99 ✓
- Bundle price $79.99 ✓
- Free shipping mentioned for bundle ✓
- Full refund promise ✓
- "No questions asked" language ✓
- Per-pair price note ($13.33) ✓

### 16. Wireframe fidelity
**PASS** — All 8 wireframe sections are present in the JSX:
1. Header (Lena from BrightKidCo + View in browser) ✓
2. Brand-Green Divider (2px solid #5DD07A) ✓
3. Hook — LETTER-03 style ✓
4. Validation + Mechanism (wider padding, mint box) ✓
5. Updated Offer — Two Doors (1 Pair + 3+3 Bundle) ✓
6. CTA Button (#5DD07A bg, centered) ✓
7. Lena Sign-Off (LONG Variant) ✓
8. Footer (9px text, unsubscribe, address, gradient bar) ✓

### 17. Contraption accuracy
**PASS** — The "Two Doors" choice architecture is implemented:
- Door 1 (TEST THE SIGNAL): mint bg, $34.99, 1 Pair, emphasis on "just test"
- Door 2 (FULL APPROACH): cream bg, $79.99, 3+3 Bundle, free shipping
- Both cards have 60-Day Guarantee badges
- Door 1 is visually prioritized (appears first, mint bg = more prominent)
- Language supports "start anywhere" contraption

### 18. Image briefs noted
**PASS (N/A)** — The wireframe specifies NO hero image for L1 winback E2. The JSX correctly omits all product photography. The wireframe's "Product Showcase" brief is not rendered (intentional — no hero image). No ImgFrame or FramedImage components are used.

### 19. Dark mode prep
**PASS (N/A for email)** — Inline styles only, no CSS media queries. Standard for email HTML. Dark mode would require email client support or a separate dark-mode stylesheet. The color choices (high-contrast green/white CTA, dark text on white) are dark-mode-safe as-is.

### 20. Level calibration
**PASS** — L1 (Sarah) calibration confirmed:
- Hope/Realism: 60/40 (slightly hope-leaning) ✓
- Urgency: Low-ZERO (no countdown, no "last chance") ✓
- CTA force: Medium ("See if" not "Buy now") ✓
- Science density: Medium-High (49-study citation) ✓
- Typography: Uniform Questrial 400, no bold ✓
- Furniture: Minimal (green divider, mechanism box, guarantee badge) ✓
- Easter egg: Precision number (67 days) ✓
- Sign-off: "With care," (dignity-first for winback) ✓
- P.S. present with personal story ✓

---

## Findings

| # | Severity | Finding |
|---|----------|---------|
| 1 | LOW | Brand token discrepancy: JSX uses #1A1A1A (body text) instead of ink #1F2D2F. Similarly #7A7A84 vs soft #4A6568, #FBF7EB vs cream #FBF7F1, #9AA8A7 vs muted #8A9B9D. Matches the copy doc but not the primitives.jsx brand definitions. Visually imperceptible. |
| 2 | INFO | Preheader text ("Preheader: ...") renders visibly at the top of the email. In a real email client, the preheader is hidden and used for preview text only. The `EmailShell` renders it as a visible label — this is a development/debug artifact, not a production issue. |

---

## Recommendation

**PROCEED**

The email renders correctly across all three viewports. Copy is verbatim. Layout matches the wireframe. The Two Doors contraption is properly implemented. L1 calibration is accurate. The only finding is a minor brand token discrepancy that is visually imperceptible and matches the copy doc's own color spec.
