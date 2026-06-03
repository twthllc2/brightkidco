# Review: Flow 02 (Cart Abandonment) + Flow 03 (Checkout Abandonment)

**Reviewer:** ops2
**Date:** 2026-05-26
**Scope:** 3 emails (cart) + 2 emails (checkout) — Design System Compliance, Copy Flow, Urgency Hooks
**Design System Reference:** 00-design-system-reference.md (v1.0)

---

## 1. CRITICAL: Design System Compliance Gaps

The emails in flows 02 and 03 follow a consistent internal structure but deviate significantly from the BrightKidCo Design System (00-design-system-reference.md). Below is a systematic audit.

### 1.1 Email Width

| Spec (D.S. §1.4) | Actual | Verdict |
|---|---|---|
| 420px max-width | 600px max-width | **FAIL** — 43% wider than spec |

All 5 emails wrap content in a 600px container. This breaks the design system constraint that all emails are limited to 420px for consistent mobile-first rendering.

### 1.2 Color Chapters & Gradient Transition Bands (D.S. §2.4–2.5)

The design system mandates a "color chapters" approach — each email is divided into visual sections with distinct background colors separated by gradient transition bands (standard 40px height, linear-gradient from one section bg to the next). The section flow is:

```
PREHEADER → HEADER → HERO IMAGE → TITLE → (band)
→ LETTER/OPENING → (band) → REFRAME → (band)
→ COMPARISON/PRODUCT → (band) → QUOTE → (band)
→ PRODUCT → (band → ink) → CTA SECTION (dark ink)
→ SIGNOFF (dark ink) → OUT LINE → FOOTER
```

**Actual:** All emails use a single white (#FFFFFF) body background with occasional soft gray (#F5F1EA) callout boxes. There are no color chapters, no section-specific background colors, and zero gradient transition bands. This is a **total architectural deviation** — the visual rhythm designed for the brand is absent.

### 1.3 Header / Sender Bar

| Spec | Actual |
|---|---|
| Logo only (D.S. §3.1): 34px height, centered | Sender bar ("Lena from BrightKidCo | support@...") above logo |
| No sender bar in design system | Logo uses external URL, width=160 (not height=34) |

The sender bar is not part of the design system. If intentional, it should be documented. If not, it should be removed for compliance.

### 1.4 Heading Font

| Spec (D.S. §1.3) | Actual |
|---|---|
| H1: Questrial 700, 36-40px, letter-spacing -0.6 to -0.8 | Fraunces serif 500, 28px |
| Fraunces reserved for "Display Accent" only | Used as primary headline |

All 5 emails use Fraunces serif 28px for the main headline. The design system specifies Questrial 700 at 36-40px for H1. Fraunces should only appear as a "serif counterpoint" (§1.3, row "Display Accent"). This is a **consistent non-compliance** across all 5 emails.

### 1.5 CTA Button Style

| Spec (D.S. §2.6) | Actual |
|---|---|
| **On light bg:** ink (#1F2D2F) bg, D8F57C text | Gradient (teal→green) bg, white text |
| **On dark ink bg:** D8F57C bg, ink text | Not applicable (no dark ink section used) |
| Pill shape, 999px radius | Pill shape, 40px radius (close) |
| Padding: 16-17px 28-32px | Padding: 14px 40px |

The gradient CTA button is **not in the design system** as a button style. It borrows the brand gradient (teal→green) but applies it to the button bg rather than using either of the two approved CTA patterns. The button's text color white on a gradient also risks contrast issues.

### 1.6 Preheader

| Spec (D.S. §2.2) | Actual |
|---|---|
| Visible: 11px italic, muted (#8A9B9D), #F6F2EA bg | Hidden: display:none, font-size:1px, mso-hide:all |

The design system shows a visible preheader bar. The emails use a common email-development hidden preheader pattern that is functionally invisible. This is a minor aesthetic deviation — the hidden preheader is arguably better for modern email clients — but does not match the spec.

### 1.7 Signoff (Lena)

| Spec (D.S. §2.7) | Actual |
|---|---|
| Caveat cursive 42px handwritten "Lena" signature | Fraunces 18px "Lena" text |
| Avatar circle with gradient border (58px) | No avatar |
| Dark ink card (#1F2A2C) with gradient accent bar | Simple HR line + inline text |
| "A note from" / "Lena Bauer" / role subtext | "With you," / "Lena" / "Customer Support · Mom..." |

This is the **largest single deviation** from the design system. The signoff is the most visually distinctive brand element — the handwritten Caveat signature, the avatar circle with gradient ring, the dark ink card — and none of it appears in these emails. The current implementation is functional but lacks the warmth and polish the design system prescribes.

### 1.8 Out Line (D.S. §2.8)

| Spec | Actual |
|---|---|
| "You can pause this series anytime. Come back when you're ready." — visible between signoff and footer, italic, #8A9B9D | **Not present** in any email |

No email includes the Out Line between the Lena signoff and the footer.

### 1.9 Footer (D.S. §2.9)

| Spec | Actual |
|---|---|
| Fraunces italic tagline "Calm progress, one day at a time." | No tagline |
| Social icons: Instagram, Facebook, TikTok (SVG) | No social icons |
| Gradient bar accent (60px, 3px) | No gradient bar |
| Address + unsubscribe | Present, simplified |
| Links: "Our Method", "Shop the Pants", "Parent Stories" | "Shop", "Parent Stories", "Contact us", "FAQ" |

The footer omits the brand tagline, all social icons, and the gradient bar accent. The link labels also differ from spec (e.g., "Shop" vs "Shop the Pants").

### 1.10 Image Placeholders (D.S. §3.2)

**Spec:** Dashed teal border with corner marks, image icon, label, sublabel. Used for all prototype image slots.

**Actual:** No image placeholders at all. The emails use text-only layouts. For prototype-stage emails, image placeholders help stakeholders envision the final layout.

---

## 2. COPY FLOW ANALYSIS

### 2.1 Cart Abandonment (Flow 02) — Excellent Narrative Arc

| Email | Theme | Copy Effectiveness |
|---|---|---|
| E1 (1h) | "Forgot something?" — Gentle reminder + mechanism education | Strong opener. Identifies the core doubt ("what if this doesn't work?") and addresses it directly. The "I'm not chasing" line is on-brand: respectful, not desperate. |
| E2 (24h) | Cost reframe + Social proof | Best email in the pair. The side-by-side "What you've tried / This option" comparison is compelling. The $150-500+ total vs. $79.99 framing is powerful. 16,511 families + testimonial provide solid social proof. |
| E3 (72h) | Maximum guarantee + soft permission to leave | The "Last check-in — then I'll stop" promise is respectful and builds trust. The guarantee hero block at center is appropriate for the final touch. "No rush. Whenever you're ready." — closes gracefully. |

**Arc quality:** Excellent — progresses logically from awareness → reframe → guarantee, each email adds a new persuasion layer without feeling repetitive. No discounting, consistent with policy. ✅

### 2.2 Checkout Abandonment (Flow 03) — Clean, Low-Friction Arc

| Email | Theme | Copy Effectiveness |
|---|---|---|
| E1 (1h) | "Did something go wrong?" — Friction removal + support | Strong for higher-intent audience. "If something came up, no problem. If a question came up, I'm here." — positions checkout issue as either technical (recoverable) or hesitancy (answerable). The "reply to this email" line is the strongest hook. |
| E2 (24h) | "The only question that matters" — Doubt resolution + personal close | Addresses the final objection with Lena's personal story. The testimonial about "10 accidents to 3 in two weeks" is concrete and believable. P.S. is warm: "This is my last email... You're doing a great job." |

**Arc quality:** Good — appropriate for higher-intent audience. Shorter flow (2 emails) respects that checkout abandoners are closer to purchase and don't need as much education. ✅

### 2.3 Cross-Flow Repetition Risk

**Issue:** Both flows explain the core mechanism ("pull-ups wick away the wetness signal, our underwear preserves it"). A user who enters both flows (abandons cart, then abandons checkout) will see this explanation twice. Consider an exclusion rule or a different framing in the checkout flow (e.g., focus on logistics/support rather than re-explaining the mechanism).

**Severity:** Medium — recommends an exclusion segment or copy differentiation.

---

## 3. URGENCY HOOKS ASSESSMENT

### 3.1 What's Used

- **Soft temporal pressure:** "60 days to try it" (implies a window, but is long enough to not feel pressured)
- **Risk reversal:** 60-Day Calm Progress Guarantee — the primary urgency mechanism
- **Social proof:** "Trusted by 16,511 families" + specific testimonials
- **Value anchoring:** Cost reframe in cart E2
- **Permission to leave:** "No pressure", "No rush", "The door is open" — reinforces trust

### 3.2 What's NOT Used (Good Choices)

- ❌ No countdown timers (correct — inappropriate for this audience)
- ❌ No discount stacking / coupon codes (correct — policy-compliant)
- ❌ No "limited stock" scarcity (correct — would feel manipulative)
- ❌ No aggressive "last chance" language (correct — brand-voice appropriate)

### 3.3 Verdict

The urgency strategy is **appropriate and well-calibrated** for the audience (parents of neurodivergent children). The primary lever is the 60-Day Guarantee as a risk-reversal mechanism rather than traditional scarcity. This is consistent with the brand voice rules (D.S. §6). ✅

---

## 4. TEXT VERSION QUALITY

All 5 `.txt` versions are present and well-structured:
- Clear subject line and preheader labels
- Plain-text formatting with `---` section dividers
- "->" arrows for CTA links with readable URLs
- ✅ Consistent with HTML version content

No issues found.

---

## 5. ISSUE SUMMARY

| # | Severity | Area | Description |
|---|---|---|---|
| 1 | **High** | Email width | 600px vs 420px spec — all 5 emails |
| 2 | **High** | Color chapters | Missing entirely — all 5 emails |
| 3 | **High** | Gradient transition bands | Missing entirely — all 5 emails |
| 4 | **High** | Signoff | No Caveat signature, no avatar, no dark ink card — all 5 emails |
| 5 | **High** | CTA button | Uses gradient style not in spec — all 5 emails |
| 6 | **Medium** | Heading font | Fraunces H1 instead of Questrial — all 5 emails |
| 7 | **Medium** | Footer | Missing tagline, social icons, gradient bar — all 5 emails |
| 8 | **Medium** | Out Line | Missing in all emails |
| 9 | **Medium** | Header | Sender bar not in spec |
| 10 | **Low** | Image placeholders | Not present in any email |
| 11 | **Low** | Preheader | Hidden pattern vs visible bar (minor aesthetic) |
| 12 | **Info** | Cross-flow repetition | Mechanism explanation shared between flows |
| 13 | **Info** | Dynamic placeholders | [product] / [Product name(s)] need Klaviyo dynamic data binding |

---

## 6. RECOMMENDATIONS

### High Priority (Design System Compliance)

1. **Collapse width to 420px** — All email containers should be constrained to the design system's 420px max-width.

2. **Implement color chapter sections** — Map sections onto the design system's color backgrounds (e.g., Story=#FFF6E2, Mechanism=#EAF6F2, Guarantee=#FFFBF0) with gradient transition bands between them.

3. **Rebuild Lena signoff** — Replace the current inline signoff with the design system's dark ink card containing: avatar circle with gradient border, handwritten Caveat "Lena" at 42px, gradient accent bar, P.S. line.

4. **Switch CTA buttons to approved patterns** — Use either (a) ink #1F2D2F bg with D8F57C text on light sections, or (b) D8F57C bg with ink text if/when dark ink sections are implemented.

### Medium Priority

5. **Change H1 to Questrial 700** — Headlines should use the primary brand font at the specified size (36-40px) and letter spacing (-0.6 to -0.8). Reserve Fraunces for sub-headers or accent phrases.

6. **Add footer brand elements** — Include the "Calm progress, one day at a time." tagline in Fraunces italic, social icons (IG, TikTok, FB), and the gradient bar accent.

7. **Add Out Line** — Include "You can pause this series anytime. Come back when you're ready." in the italic muted pattern between signoff and footer.

### Low Priority / FYI

8. **Add placeholder image frames** — For prototype clarity, add design-system-compliant image placeholder frames at key visual sections.

9. **Consider cross-flow differentiation** — Add an exclusion rule to prevent users in both flows from seeing duplicate mechanism explanations, or vary the copy in flow 03 to focus on checkout-specific benefits.

10. **Bind dynamic content** — Replace `[product]`, `[Product name(s)]`, and `[Price]` placeholders with proper Klaviyo event properties (`{{ event.ShopifyItems }}`, etc.) as noted in the README.

---

## 7. OVERALL VERDICT

| Criterion | Score | Notes |
|---|---|---|
| Copy Quality | ★★★★☆ | Excellent narrative arcs, on-brand voice, appropriate for audience |
| Urgency Hooks | ★★★★★ | Well-calibrated soft urgency, no scarcity/discounting abuse |
| Text Version Quality | ★★★★★ | All present, clean, consistent |
| Design System Compliance | ★★☆☆☆ | Major deviations: width, color chapters, signoff, CTA, heading font |
| Klaviyo Readiness | ★★★☆☆ | Trigger/filter logic well-documented; dynamic content placeholders need binding |
| **Overall** | **★★★☆☆** | Strong copy foundation needs design system alignment for production |

**Summary:** The copy and narrative arc are excellent — the cart flow's cost reframe (E2) is particularly strong, and the checkout flow's friction-removal positioning is appropriate for higher-intent users. The urgency strategy is perfectly calibrated for the audience. However, the HTML implementation deviates from the design system in several significant ways: wrong email width, missing color chapter architecture, incorrect button style, and a simplified signoff that loses the brand's most distinctive visual element. Design system alignment is recommended before production deployment.
