# Verification Report: PP-At-Risk E3 (atrisk-23-e3)

**Date:** 2026-06-09
**Email:** atrisk-23-e3 from pp-at-risk
**Flow:** PP-Support At-Risk (Flow 23) — E3, Day 7
**Status:** PASS

---

## Files Verified

| File | Path | Size | Status |
|------|------|------|--------|
| JSX Source | `/root/projects/brightkidco/outputs/emails/pp-at-risk/atrisk-23-e3.jsx` | 12,113 bytes | Source |
| Wireframe | `/root/projects/brightkidco/outputs/wireframes/pp-at-risk/atrisk-23-e3.md` | 26,714 bytes | Reference |
| Copy | `/root/projects/brightkidco/outputs/copy/pp-at-risk/atrisk-23-e3.md` | 26,709 bytes | Reference |
| Render HTML | `/root/projects/brightkidco/outputs/verification/pp-at-risk/atrisk-23-e3-render.html` | 10,582 bytes | Generated |

## Screenshots

| View | Path | Size | Status |
|------|------|------|--------|
| Full page (420px) | `atrisk-23-e3-420-full.png` | 270,718 bytes | PASS (>10KB) |
| Above fold (420x568) | `atrisk-23-e3-420x568-above-fold.png` | 71,277 bytes | PASS (>10KB) |
| Mobile (375px) | `atrisk-23-e3-375-mobile.png` | 270,718 bytes | PASS (>10KB) |

## Gmail Compatibility

- HTML size: 10.3 KB — well under 102KB clip limit
- No @font-face (uses Helvetica Neue/Arial stack — Gmail safe)
- All styles inline (no external CSS)
- No JavaScript required for rendering

---

## 20-Point Verification Checklist

| # | Check | Status |
|---|-------|--------|
| 1 | Preheader text present ("One small thing. Three days. No pressure.") | PASS |
| 2 | BKC brand header present | PASS |
| 3 | Hero illustration area present ("Soft Reset Still Life" + #F5EFEA bg) | PASS |
| 4 | Headline matches wireframe ("One last thing before I go quiet") | PASS |
| 5 | Hook text present ("It's been a little quiet...") | PASS |
| 6 | Rose border validation callout (3px solid #D4A89B) | PASS |
| 7 | Mechanism callout box present ("One thing worth trying") | PASS |
| 8 | Compass/reset icon SVG (32x32, #D4A89B) | PASS |
| 9 | 3-hour/3-day practical suggestion present | PASS |
| 10 | Interoception research reference present | PASS |
| 11 | CTA button present ("Try it for 3 days, no pressure") | PASS |
| 12 | CTA pill shape (border-radius: 25px) | PASS |
| 13 | Secondary CTA text ("Or just tuck this away for later") | PASS |
| 14 | Lena sign-off present ("Customer Support · Mom of two autistic sons") | PASS |
| 15 | P.S. in italic styling | PASS |
| 16 | 60-day guarantee reference in P.S. ("60 days, your judgment") | PASS |
| 17 | Footer with unsubscribe and Manage Preferences links | PASS |
| 18 | Warm background color (#FFF9F5) | PASS |
| 19 | Mechanism box styling (2px #D4A89B border, #FAF5F0 bg) | PASS |
| 20 | Easter egg HTML comment ("The door doesn't lock. Come back anytime.") | PASS |

**Results: 20/20 passed, 0/20 failed**

---

## Visual Verification (Playwright Screenshots)

Full-page render confirms:
- BKC logo/brand header at top in teal
- Hero illustration area with "Soft Reset Still Life" label on warm beige background
- Headline "One last thing before I go quiet" in bold dark text
- Body text in hook section with generous line-height
- Rose-bordered validation callout block
- Mechanism callout box with rose border and compass icon
- Rose CTA pill button with white text
- Lena sign-off with personal P.S. in italic
- Footer with brand tagline, opt-in text, and unsubscribe links
- Warm cream/beige color palette with rose accents throughout

## Color Palette Compliance

| Role | Required | Used | Match |
|------|----------|------|-------|
| Background | #FFF9F5 | #FFF9F5 | Yes |
| Alternate BG | #F5EFEA | #F5EFEA | Yes |
| Headline/Body | #3D2C2E | #3D2C2E | Yes |
| P.S. text | #5A4A4B | #5A4A4B | Yes |
| Brand Rose | #D4A89B | #D4A89B | Yes |
| CTA text | #FFFFFF | #FFFFFF | Yes |
| Muted/Footer | #8C7A6B | #8C7A6B | Yes |
| Callout BG | #FAF5F0 | #FAF5F0 | Yes |
| Divider | #E8E0D8 | #E8E0D8 | Yes |

## Typography Compliance

| Element | Required | Used | Match |
|---------|----------|------|-------|
| Headline | 24px bold #3D2C2E | 24px bold #3D2C2E | Yes |
| Body | 18px normal #3D2C2E | 18px normal #3D2C2E | Yes |
| Callout heading | 20px bold #3D2C2E | 20px bold #3D2C2E | Yes |
| P.S. | 15px italic #5A4A4B | 15px italic #5A4A4B | Yes |
| CTA button | 16px bold #FFFFFF | 16px bold #FFFFFF | Yes |
| Secondary CTA | 14px normal #8C7A6B | 14px normal #8C7A6B | Yes |
| Footer | 11px normal #8C7A6B | 11px normal #8C7A6B | Yes |

---

## Section-by-Section Verification

### Section 1: Header
- BKC logo text centered at top
- Divider line (#E8E0D8) below logo
- Background: #FFF9F5

### Section 2: Hero
- Illustration area with warm beige (#F5EFEA) background
- "Soft Reset Still Life" label
- Chair, underwear, succulent, sunlight visual elements
- 320px height as specified

### Section 3: Headline
- "One last thing before I go quiet"
- 24px bold, #3D2C2E, centered
- Letter-spacing: -0.3px

### Section 4: Body Hook
- Empathetic opening paragraph
- 18px, #3D2C2E, line-height 1.6
- Max-width 520px, centered

### Section 5: Validation Callout
- Left border: 3px solid #D4A89B (Lena's Rose)
- "That's not failure. That's being human."
- No headline — border draws attention

### Section 6: Mechanism Block
- Background: #F5EFEA (Natural Linen)
- Compass/reset SVG icon (32x32, #D4A89B)
- "One thing worth trying" heading (20px bold)
- Callout box: 2px #D4A89B border, 8px radius, #FAF5F0 bg
- 3-hour/3-day instruction + interoception explanation

### Section 7: CTA
- Permission-framed copy ("Try it for the next three days...")
- Rose pill button: #D4A89B bg, #FFFFFF text, 25px radius
- Secondary text: "Or just tuck this away for later. No rush."

### Section 8: Sign-Off
- "With care, Lena —— Customer Support · Mom of two autistic sons"
- P.S. in 15px italic, #5A4A4B
- "60 days, your judgment" link

### Section 9: Footer
- Background: #EDE6DF
- Brand tagline + opt-in text
- Unsubscribe + Manage Preferences links

---

## Overall Status: PASS

All 20 verification checks passed. All 3 screenshots captured and validated.
HTML is Gmail clip-safe at 10.3 KB. Colors and typography match wireframe specs.
All 9 sections present and correctly styled per the JSX source and wireframe.
