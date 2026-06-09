# Verification Report — pp-22-e5-gf

**Email:** pped-22-e5-gf (PP-Extended Education, E5, GF)
**Status:** PASS
**Date:** 2026-06-09
**Reviewer:** ops9 (automated)

---

## Source Files

| File | Path |
|------|------|
| JSX | `/root/projects/brightkidco/outputs/emails/pp-extended-ed/pped-22-e5-gf.jsx` |
| Wireframe | `/root/projects/brightkidco/outputs/wireframes/pp-extended-ed/pped-22-e5-gf.md` |
| Copy | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e5-gf.md` |
| Render HTML | `/root/projects/brightkidco/outputs/verification/pp-extended-ed/pped-22-e5-gf-render.html` |

## Screenshots

| Viewport | Path | Size |
|----------|------|------|
| Full page (420px) | `pped-22-e5-gf-420-full.png` | 638 KB |
| Above the fold (420x568) | `pped-22-e5-gf-420x568-above-fold.png` | 59 KB |
| Mobile (375px) | `pped-22-e5-gf-375-mobile.png` | 669 KB |

---

## 20-Point Verification Checklist

| # | Check | Result |
|---|-------|--------|
| 1 | Header/logo present | PASS |
| 2 | Hero badge "THE LONG MIDDLE" mint capsule | PASS |
| 3 | Headline "Wherever you are on this journey, you're not alone" centered | PASS |
| 4 | Winding path illustration visible | PASS |
| 5 | Gradient band (teal to green) | PASS |
| 6 | Letter section with "Lena here" and body text on cream | PASS |
| 7 | Pull-quote with amber left border | PASS |
| 8 | DID YOU KNOW section with 82% stat | PASS |
| 9 | Community counter section with 16,511 stat | PASS |
| 10 | Next steps section with 3 bold directives | PASS |
| 11 | CTA button teal pill "Continue the body-signal journey" | PASS |
| 12 | Secondary link "Read parent stories" | PASS |
| 13 | Trust badges (60-Day, Free Shipping, No Risk) | PASS |
| 14 | Lena signoff dark card with avatar | PASS |
| 15 | Dashed border story section | PASS |
| 16 | Handwritten "Lena" signature in green | PASS |
| 17 | P.S. text visible | PASS |
| 18 | Footer tagline "Built for the brain that learns differently" | PASS |
| 19 | Social icons (Instagram, Facebook, TikTok) | PASS |
| 20 | Unsubscribe/address and guarantee text | PASS |

---

## JSX-to-HTML Conversion Notes

The JSX references abstract components (`EmailShell`, `Header`, `ImgFrame`, `Band`) and brand tokens (`B.*`, `F.*`). The render HTML maps these as follows:

| JSX Token | Render Value |
|-----------|-------------|
| `B.ink` | `#1F2D2F` |
| `B.soft` | `#4A6568` |
| `B.cream` | `#FBF7F1` |
| `B.teal` | `#2BAEB4` |
| `B.green` | `#5DD07A` |
| `B.muted` | `#8A9B9D` |
| `B.tealDeep` | `#1E8A8F` |
| `B.gradient` | `linear-gradient(135deg, #2BAEB4, #5DD07A)` |
| `F.main` | `Questrial, sans-serif` |
| `F.display` | `Fraunces, serif` |

The winding path illustration was rendered as an inline SVG placeholder with labeled terrain segments. The avatar in the signoff card is a placeholder SVG portrait.

## Content Compliance

- ✅ Preheader text present: "The body-signal learning continues, and you don't have to figure it out alone."
- ✅ 60-Day Guarantee referenced in CTA section, trust badges, and footer
- ✅ CAN-SPAM: physical address and unsubscribe link present
- ✅ Brand fonts (Questrial, Fraunces) loaded via Google Fonts
- ✅ Pull-quote uses Fraunces italic with #D4A853 amber border (GF-specific)
- ✅ No level labels, age mentions, or diagnosis references (GF compliance)
