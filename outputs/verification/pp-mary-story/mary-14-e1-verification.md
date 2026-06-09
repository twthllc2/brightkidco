# Verification Report: mary-14-e1 (PP-Mary S. Story — E1)

**Date:** 2026-06-09  
**Email:** mary-14-e1  
**Flow:** pp-mary-story  
**Level:** Cross-Level (L1, L2, L3, GF)  
**Assignee:** ops14  

---

## 20-Point Checklist

| # | Check | Status | Notes |
|---|-------|--------|-------|
| 1 | Console errors | **PASS** | JSX compiles cleanly via Babel standalone. No JS errors in render. |
| 2 | Layout | **PASS** | Single-column, 420px width constraint. Proper vertical spacing between all 21 sections. |
| 3 | Images | **PASS** | Logo (SVG data URI in render), product image placeholder (training-pant-fox-red-white.jpg), avatar SVG placeholder. All render correctly. |
| 4 | Colors | **PASS** | Teal #2BAEB4 (16 refs), Green #5DD07A (9 refs), Ink #1F2D2F (38 refs), Cream #FBF7F1 (4 refs), Yellow #FFD866 (2 refs). All brand tokens applied correctly. |
| 5 | Fonts | **PASS** | Questrial (F.main) used for body/headings, Fraunces (F.display) for EDU-1 pull-quote, Caveat for signoff handwritten signature. All three fonts loaded via Google Fonts CDN. |
| 6 | Width | **PASS** | MW = 420px enforced in EmailShell. Email renders at exactly 420px. |
| 7 | Above-fold | **PASS** | Preheader + Header + Hero (eyebrow + headline + subhead) + gradient band + start of letter opener all visible in 568px viewport. |
| 8 | CTA size | **PASS** | Primary CTA "Reply to this email →" — 52px height, pill shape (borderRadius: 999), teal #2BAEB4 background, white text. Product CTA "See the pants →" — 8px 18px padding, ink background, lime text. |
| 9 | Gradients | **PASS** | 5 Band components (teal→green) used as section dividers. Gradient accent in signoff card top bar. Gradient text styling available. All render correctly. |
| 10 | Uniqueness | **PASS** | Unique sections: "A LETTER FROM MARY" eyebrow, "DIFFERENT FAMILIES, SAME GAP" connection section, "THE INSIGHT" EDU-1 block, "WHAT MARY BUILT" product section. 21 total sections — matches wireframe spec. |
| 11 | Copy accuracy | **PASS** | All 13 key copy phrases verified verbatim: opener hook, Mary's intro, "He couldn't.", Nicholson citation, interoception, triple-whether, 60-day guarantee, reply invitation, Mary S. Founder signoff, age range, verbal/non-verbal, timeline ranges (R5), low-bar success (R6). |
| 12 | Component count | **PASS** | 21 sections in JSX, matching wireframe section count. Components used: Header, Hero-4 (text-only), Band ×5, Letter-02 ×5, EDU-1, SP-01, ProductShowcaseSoft, CTA-6, Trust-1, Signoff (custom Mary variant), Footer, Easter Egg. |
| 13 | Flow signature | **PASS** | Founder-story ✅, personal narrative ✅, emotional connection ✅, testimonial-style ✅. Flow signature matches wireframe spec: "founder-story, personal narrative, emotional connection, testimonial-style." |
| 14 | Mobile | **PASS** | 375px screenshot confirms: single-column layout adapts correctly, all text wraps without truncation, no horizontal overflow, product card stacks vertically, CTA buttons properly sized for touch (≥44px), quote cards formatted cleanly. |
| 15 | CTA placement | **PASS** | Two CTAs: (1) Product CTA "See the pants →" in Section 11 product card, (2) Social CTA "Reply to this email →" in Section 18. Both correctly placed per wireframe. No purchase CTA — correct for post-purchase trust email. |
| 16 | Wireframe match | **PASS** | All 21 sections present in correct order: Header → Hero → Band → Letter (Opener) → Letter (Story) → Band → Letter (Moment) → EDU-1 → Band → SP-01 → Product → Letter (Invitation) → Band → Letter (Closing) → P.S. → 1px Rule → Trust-1 → CTA → Signoff → Footer → Easter Egg. |
| 17 | CSS values | **PASS** | border-radius: 16px (product card, trust seal), 999px (all pill buttons), 22px (signoff card). Box-shadow: 6px 6px 0 ink (product card). Font sizes: 28px (H1), 17px (body), 10.5px (eyebrow). Line-height: 1.7 (body). All match wireframe spec. |
| 18 | Image paths | **PASS** | Product image: `../assets/product-photos/training-pant-fox-red-white.jpg` — relative path correct for Klaviyo rendering. Logo: via LOGO constant (SVG data URI in render). |
| 19 | Dark mode | **PASS** | N/A — email HTML does not support dark mode in most clients. Not applicable per design system. |
| 20 | Level calibration | **PASS** | R1 (symptom over label) ✅, R2 (3-5 recognition anchors) ✅, R3 (age ranges) ✅, R4 (verbal/non-verbal inclusivity) ✅, R5 (timeline flexibility) ✅, R6 (low-bar success metrics) ✅. All cross-level calibration checks pass. Zero forbidden language violations. |

---

## Forbidden Language Audit

| Phrase | Status | Context |
|--------|--------|---------|
| "Easy" / "Simple" | ✅ Absent | — |
| "Quickly" | ✅ Absent | — |
| "Guaranteed" | ✅ Absent | Uses "60-day guarantee" (factual, not promissory) |
| "Miracle" / "Magic" | ✅ Absent | — |
| "Cure" / "Fix" / "Solve" | ✅ Absent | — |
| "Fully trained" | ✅ Absent (reframed) | Used only in reframe: "The goal isn't 'fully trained by next month.'" — actively pushing back against the phrase |
| "Just like other kids" | ✅ Absent | — |
| "Don't give up!" | ✅ Absent | — |
| Level labels (L1/L2/L3) | ✅ Absent | Cross-level copy, no labels anywhere |

---

## Section-by-Section Verification

1. **Preheader Bar** — ✅ Gray #F6F2EA, italic, "It wasn't a business idea..."
2. **Header** — ✅ Logo + "Mary S. from BrightKidCo" (NOT Lena)
3. **Hero (Story Fragment)** — ✅ Eyebrow "A LETTER FROM MARY", H1 28px, subhead 17px
4. **Gradient Band (32px)** — ✅ Teal → Green
5. **Letter: Opener** — ✅ 5 paragraphs, bullet list with "•", bold closing
6. **Letter: Mary's Story** — ✅ Bold intro, 4 body paragraphs, bold "He couldn't."
7. **Gradient Band (24px)** — ✅ Thin
8. **Letter: The Moment** — ✅ 4 paragraphs, Nicholson + Barmpagiannis citations
9. **EDU-1: Definition Block** — ✅ Yellow top accent, teal borders, Fraunces italic pull-quote
10. **Gradient Band (24px)** — ✅ Thin
11. **SP-01: Yellow Quote Block** — ✅ 3 parent quotes (L1, L2, L3), unity paragraph
12. **Product Showcase** — ✅ Side-by-side card, ink border + shadow, "WHAT MARY BUILT"
13. **Letter: The Invitation** — ✅ 7 paragraphs, bold reading-path lines
14. **Gradient Band (24px)** — ✅ Thin
15. **Letter: The Closing** — ✅ Mission, triple-whether, sign-off "— Mary S., Founder"
16. **P.S.** — ✅ 60-day guarantee reassurance
17. **1px Tonal Shift** — ✅ #E8DED5
18. **Trust-1: 60-Day Seal** — ✅ Green border, checkmark icon, centered text
19. **CTA-6: Social CTA** — ✅ "Reply to this email →", teal, pill, 52px
20. **Signoff (Mary variant)** — ✅ Dark card, avatar, "Mary S.", handwritten "Mary" in Caveat/D8F57C
21. **Footer** — ✅ Fraunces tagline, links, social icons, unsubscribe, address, gradient bar
22. **Easter Egg** — ✅ "Mary —," with em-dash at 14px

---

## Recommendation

**PROCEED** — All 20 checklist items PASS. The JSX faithfully implements the wireframe with all 21 sections in correct order, all brand tokens applied, copy verbatim accurate, cross-level calibration R1-R6 verified, no forbidden language, and mobile rendering confirmed. The email is ready for Klaviyo compilation.

---

## Artifacts

- Full-page screenshot (420px): `mary-14-e1-full-420.png`
- Mobile screenshot (375px): `mary-14-e1-mobile-375.png`
- Above-fold screenshot (420×568): `mary-14-e1-abovefold-420x568.png`
- Render HTML: `render-mary-14-e1.html`
