# Verification Report: winback-b-24-e1-l2

**Flow:** Winback Path B  
**Email:** E1 | Level 2 (Lisa)  
**Date:** 2026-06-09  
**Rendered by:** Playwright Chromium  

---

## Screenshots

| Screenshot | Path | Size |
|-----------|------|------|
| 420px full-page | `winback-b-24-e1-l2-420-full.png` | 340KB |
| 375px mobile | `winback-b-24-e1-l2-375-mobile.png` | 279KB |
| 420x568 above-fold | `winback-b-24-e1-l2-420x568-above-fold.png` | 43KB |

---

## 20-Point Verification Checklist

### 1. JSX renders without errors
**PASS (minor)**
- All sections render correctly with no JavaScript errors
- Logo image is broken (local file path `../assets/brightkidco-logo-v2.png` does not resolve in the render environment) — acceptable for local verification; will work in production email client context

### 2. Copy matches verbatim
**PASS**
- All major copy sections verified against `winback-b-24-e1-l2.md`
- Hook marker phrase, validation, testimonial, offer, sign-off — all verbatim
- CTA button text "When you're ready to try" present (not in copy body but matches wireframe spec)

### 3. Brand tokens correct
**PASS**
- Teal `#2BAEB4` — CTA button fill ✓
- Green `#5DD07A` — Layer labels, testimonial quotation mark accent ✓
- Ink `#1F2D2F` — Body text, headings ✓
- Soft `#4A6568` — Supporting paragraphs, pricing sub-text ✓
- Cream `#FBF7F1` — Referenced in wireframe as background; JSX uses `#FAF9F7` for signoff bg (acceptable variant)
- Paper `#FFFFFF` — Email canvas ✓
- Muted `#8A9B9D` — Captions, footer, citations ✓

### 4. Colors match brand tokens
**PASS**
- All inline styles reference the correct hex values from the BRAND token set
- Science callout box `#DBFFCD` (mint) matches wireframe spec
- BCBA callout box `#E8DCC8` (sand) matches wireframe spec
- 3-layer diagram backgrounds (`#FBF7EB`, `#E8DCC8`, `#DBFFCD`) match wireframe spec

### 5. Fonts load (Questrial primary, Fraunces serif accent)
**PASS**
- Questrial used for all body text, headings, eyebrows, citations
- Fraunces used for marker phrase (18px italic), pull quote (20px italic), testimonial card quote
- Both Google Fonts loaded via stylesheet link in render HTML

### 6. 420px width correct
**PASS**
- Email shell width set to 420px via `MW` constant
- All content respects the 420px boundary
- Verified via viewport screenshot at 420px width

### 7. Above-fold captured
**PASS**
- 420x568 above-fold screenshot captures: preheader, header/logo, hero headline "The piece your therapy is missing", and the beginning of the hook section with marker phrase
- Properly establishes email purpose within first viewport

### 8. CTA visible
**PASS**
- CTA button "When you're ready to try" is teal `#2BAEB4`, 280px wide, 48px height
- High contrast against white background
- Sub-text "60-day guarantee stands." visible below button
- Button visible in mobile 375px render with proper tap target size

### 9. Band transitions smooth
**PASS**
- Consistent 36px section padding between content blocks
- Dashed rules (`#9AA8A7` at 25% opacity) separate major sections
- Paper texture band (8px `#FAF9F7`) provides subtle transition after hero
- 2px green rule and 1px gray rule provide clear section endings before signoff/footer

### 10. No repetition
**ISSUE — 2 FINDINGS**
- **Preheader text appears TWICE**: The `EmailShell` component adds a "Preheader: {text}" div, AND the email JSX has a dedicated preheader bar section with the same text. This causes the preheader to render twice at the top of the email.
- **"This isn't stubbornness. It's neurology." appears TWICE**: Once inside the science callout box (as part of the mechanism section copy), and once again as a standalone paragraph after the box. The copy file only has it once (line 46). This is a repetition error in the JSX.

### 11. Copy verbatim check
**PASS (with notes)**
- All body copy text matches the copy file verbatim
- JSX corrects a copy file typo: "Thisn't stubbornness" → "This isn't stubbornness" (line 45 of copy)
- Hyphenation difference: JSX uses "slow-to-pick-up-signals" (hyphenated), copy file uses "slow to pick up signals" (unhyphenated) — matches wireframe spec, which takes precedence

### 12. Component diversity
**PASS**
- 15 distinct sections/components: Preheader bar, Header, Hero, Paper texture band, Hook (letter), Validation (letter), Mechanism (ED8 with science callout + 3-layer diagram), BCBA acknowledgment callout, Testimonial with card, Realistic timelines (letter), Offer with pricing card, Permission (letter), CTA button, Lena sign-off, Footer
- Good mix of text blocks, structured cards, visual diagrams, and interactive elements

### 13. Flow identity correct
**PASS**
- Email is identified as Winback Path B, E1 position, Level 2 (Lisa)
- Content targets L2 avatar: BCBA-aware, mechanism-focused, skeptical, method-cycling parent
- Sign-off matches Long Winback variant per brand voice spec

### 14. Mobile ready (375px)
**PASS**
- Single-column layout renders properly at 375px
- Text is readable (17px body text, proper line-height 1.6)
- CTA button is properly sized for mobile tap (280px wide, 48px height)
- No horizontal overflow
- 3-layer diagram stacks vertically and remains legible
- All content fits within mobile viewport without truncation

### 15. Conversion rules
**PASS**
- Low-aggression CTA: "When you're ready to try" (permitted, not urgent)
- 60-day guarantee explicitly stated in offer section and CTA sub-text
- Permission-not-to-buy section present: "If today isn't the day, that's a real answer"
- No deadline pressure, no urgency language
- No forbidden words detected ("Quick", "Easy", "Pre-K", "Just like other kids")

### 16. Wireframe fidelity
**PASS**
- All 15 sections from wireframe ASCII layout are present and in correct order
- Section ordering matches wireframe: Preheader → Header → Hero → Paper Texture → Hook → Validation → Mechanism → BCBA Acknowledgment → Testimonial → Timelines → Offer → Permission → CTA → Sign-off → Footer
- Dashed rules between major sections match wireframe spec
- 2px and 1px rules at end match wireframe spec

### 17. Contraption accuracy
**PARTIAL**
- The wireframe describes a "Missing Piece Card" puzzle illustration as the contraption (design mechanism)
- This illustration is NOT implemented in the JSX — described as an optional Easter Egg in the wireframe
- All other structural elements match the contraption description

### 18. Image briefs noted
**PASS (expected)**
- Logo uses local file path `../assets/brightkidco-logo-v2.png` — renders as broken in local verification
- No other images in the email (text-led design per L2 spec)
- Image placeholder component from primitives.jsx not used (appropriate for this text-heavy mechanism email)

### 19. Dark mode prep
**ISSUE**
- No dark mode CSS or `@media (prefers-color-scheme: dark)` rules present
- All colors are hardcoded hex values with no dark mode overrides
- For email marketing, this is common and acceptable in most ESP contexts, but noted for completeness

### 20. Level calibration
**PASS**
| L2 Requirement | Status | Evidence |
|---|---|---|
| Real Symptom Recognition (3+ failed methods) | ✅ | Hook names 5+ methods |
| Mechanism Specificity | ✅ | Two mechanism sections, 3 citations |
| BCBA/OT Acknowledgment | ✅ | Dedicated callout box, complement framing |
| Realistic Timelines | ✅ | "4-8 weeks, some 12+" |
| 60-Day Guarantee | ✅ | In offer + CTA sub-text |
| Permission-Not-to-Buy | ✅ | Pre-offer + post-offer sections |
| Hope/Realism 40/60 | ✅ | Mechanism-heavy, realistic timelines |
| Science Density HIGH | ✅ | 3 citations (Nicholson, Mahler, Iqbal) |
| Urgency LOW | ✅ | No deadlines, no pressure language |
| CTA Low Aggression | ✅ | "When you're ready" / product will be here |
| No Forbidden Words | ✅ | None detected |
| Testimonial Length (LONG) | ✅ | ~80 words deep narrative |
| Sign-off Medium-Long | ✅ | "With care, Lena" Long Winback variant |

---

## Issues Summary

| # | Severity | Issue | Location |
|---|----------|-------|----------|
| 1 | **MEDIUM** | Preheader text renders twice (EmailShell wrapper + dedicated bar) | JSX lines 13 + 18-22 |
| 2 | **MEDIUM** | "This isn't stubbornness. It's neurology." appears twice | JSX lines 108 + 126-128 |
| 3 | **LOW** | Copy file has typo "Thisn't" (JSX corrects it) | Copy line 45 |
| 4 | **LOW** | Hyphenation mismatch: JSX "slow-to-pick-up-signals" vs copy "slow to pick up signals" | JSX line 183, Copy line 63 |
| 5 | **INFO** | Contraption "Missing Piece Card" not implemented (optional Easter Egg) | Wireframe §Strategy Box |
| 6 | **INFO** | No dark mode CSS | Full JSX |
| 7 | **INFO** | Logo broken in local render (expected — production path differs) | JSX line 8 |

---

## Recommendation

**REVISE** — Two medium-severity issues need fixing before PROCEED:

1. **Remove duplicate preheader** — Either remove the `EmailShell` preheader wrapper (since the JSX has its own dedicated preheader bar) OR remove the dedicated preheader bar section. Having both causes the same text to appear twice at the top of the email.

2. **Remove duplicate neurology line** — "This isn't stubbornness. It's neurology." appears both inside the science callout box AND as a standalone paragraph after it. The copy file only has it once (inside the mechanism section, as a standalone line between Nicholson and Iqbal citations). In the JSX, it should appear either inside the box OR after it, not both.

Both fixes are mechanical — single-line deletions that don't affect content integrity.
