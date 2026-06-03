# Review: Flow 24 - Winback B (L1/L2/L3) & Flow 25 - Site Abandonment

**Reviewer:** ops13
**Date:** 2026-05-26
**Scope:** 9 winback-b email variants (3 emails × 3 levels) + 1 site-abandonment email

---

## Overview

Flow 24 (Winback B) is a 3-email re-engagement sequence targeting visitors who researched but never purchased. Three level variants serve distinct parent personas. Flow 25 (Site Abandonment) is a single exit-intent catch email. The copy is consistently strong across all 10 files — voice, empathy, and parent-to-parent tone are excellent. The main issues are design system compliance (color palette, border tokens, responsive font rules) and lack of HTML build for Winback B Email 3.

---

## Flow 24: Winback B — Copy & Strategy Review

### Email 1 (D0): Awareness / Re-Engagement

| Aspect | L1 (Sarah) | L2 (Lisa) | L3 (Maria) |
|--------|-----------|-----------|-----------|
| **Heading** | "It's been a while." | "It's been a while. No pressure." | "It's been a while. Quietly." |
| **Tone** | Gentle urgency (Pre-K deadline) | Curiosity / research respect | Emotional / permission-based |
| **Core message** | 49% of autistic 4-5 yr olds untrained; mechanism reminder | Kelly Mahler interoception science; behavioral methods limitation | "Late is not never"; personal story (son trained at 8) |
| **CTA type** | Full button | Full button | Text link only |
| **CTA text** | "Revisit the mechanism →" | "See the mechanism again →" | "Read one family's late-training story →" |
| **P.S.** | "If you want to revisit, I'm here." | "If you found something that works, I'd love to hear." | "I took breaks too. That's not giving up." |

**Verdict:** Excellent level differentiation. L1 drives action with Pre-K timing pressure. L2 respects the researcher parent. L3 offers pure emotional validation with no conversion ask — correct for L3 rules. The three headings follow a clear escalation pattern (direct → slightly softer → quiet/emotional).

### Email 2 (D7): Offer

| Aspect | L1 (Sarah) | L2 (Lisa) | L3 (Maria) |
|--------|-----------|-----------|-----------|
| **Heading** | "A small offer, with no strings attached." | "A quiet offer." | "A small thing, with no expiration." |
| **Offer** | 15% off (explicit, transactional) | 15% off (research-logic frame) | 15% off (gentle, "on your terms") |
| **CTA type** | Full button | Full button | Text link only |
| **CTA text** | "Claim your offer →" | "See the offer →" | "See the options at your own pace →" |
| **Guarantee ref** | Yes (60-day + Pre-K timing) | Yes (60-day guarantee) | Yes (60-day) |
| **Sub-note** | "No deadline on this." | "Whenever you're ready." | No sub-note (implied gentleness) |

**Verdict:** Strong. L1's direct "Claim your offer" paired with "No deadline" is well-balanced tension. L2 respects the researcher persona ("sometimes a small nudge can turn researching into trying"). L3 uses text link, no deadline framing, permission-based closure. Good. Note: L2 E2 uses a teal-tinted callout (#E8F4F4) instead of a standard Design System callout color.

### Email 3 (D14): Permission / Sunset

All three levels are in **.txt only** — no HTML build. This is a gap.

| Aspect | L1 (Sarah) | L2 (Lisa) | L3 (Maria) |
|--------|-----------|-----------|-----------|
| **Subject examples** | "This is my last check-in" / "I'm going to stop emailing after this" | "Last email — a final thought" / "I'm going to stop emailing" | "Quietly going — but leaving the door open" |
| **Core message** | "You still have time for Pre-K"; final mechanism recall | "Your child isn't failing. It's neurology." | "You're doing a good job. You always were." |
| **CTA type** | Full button | Full button | Text link (stay subscribed) |
| **CTA text** | "60 days to try — your judgment →" | "Leave the door open →" | "I want to stay subscribed (quiet link) →" |
| **Sunset tag** | flow_winback_b_e3_sent → ready_for_sunset → inactive_120_days | same | same |

**Verdict:** Copy is well-structured. L1 gives a final Pre-K push with deadline awareness. L2 concludes the research narrative with dignity. L3 is the quietest with a renewal-style CTA instead of a purchase ask. All three need HTML builds before production deployment.

### Level Differentiation Assessment

- **L1 (Direct/Action)** — Full buttons, urgency signals (Pre-K deadlines, "you still have time"), stats, clear offers. Correct.
- **L2 (Researcher/Balanced)** — Full buttons, science references (Kelly Mahler, interoception), acknowledges research process. Correct.
- **L3 (Soft/Permission)** — Text links only, no buttons, emotional framing, "no pressure," "it's okay if not." Correct.

---

## Flow 24: Winback B — Design & Technical Issues

### ISSUE-1: Accent Color Mismatch (All Winback B variants)
**Where:** All 6 HTML files
**What:** Accent bar, CTA buttons, and footer links use `#2A7A7B` (teal) instead of the Design System's `#FF6B4A` (coral) for primary CTAs and `#4A9BFF` (blue) for text links.
**Impact:** Brand inconsistency. The teal is not in the Design System palette at all. Coral (#FF6B4A) is the designated primary action color.
**Fix:** Replace `#2A7A7B` with `#FF6B4A` for CTA buttons/accents. Footer links should use `#6B7280` (medium gray). Text links in body should use `#4A9BFF`.
**Affected files:** All 6 HTML files in winback-b/

### ISSUE-2: Background Color Non-Standard
**Where:** All Winback B HTML files
**What:** Outer wrapper uses `#F8F6F3` (warm beige). Design System specifies main email background as `#FFFFFF` with optional warm sections at `#FFF8F5`.
**Impact:** May render inconsistently across email clients. The beige `#F8F6F3` is not a documented Design System token.
**Fix:** Change outer background to `#FFFFFF` (or `#FFF8F5` only on container itself if warm tone is desired). The email shell (Section 4.1) uses `#FFF5F0` as the wrapper — pick one Design System color and use it.

### ISSUE-3: Border Color Off-Spec
**Where:** All dividers use `#E2DCD3`
**What:** Design System specifies `#E5E7EB` for border/dividers.
**Impact:** Minor visual drift.
**Fix:** Replace `#E2DCD3` with `#E5E7EB`.

### ISSUE-4: Secondary Text Color Off-Spec
**Where:** Lena sign-off, metadata, sub-notes use `#636E72`
**What:** Design System specifies `#6B7280` for medium/secondary text.
**Impact:** Slightly darker secondary text than intended.
**Fix:** Replace `#636E72` with `#6B7280`.

### ISSUE-5: Placeholder/Small Text Color Off-Spec
**Where:** Footer text, section markers use `#B2BEC3`
**What:** Design System specifies `#9CA3AF` for light/placeholder text.
**Impact:** Placeholder text is lighter than intended.
**Fix:** Replace `#B2BEC3` with `#9CA3AF`.

### ISSUE-6: H1 Size Exceeds Design System Spec
**Where:** All emails — `font-size:28px` inline on heading
**What:** Design System specifies `fs-heading-1` at 26px (desktop). The responsive class `.h1` correctly overrides to 22px on mobile, but desktop should be 26px not 28px.
**Impact:** Minor over-size. 28px is not a documented token.
**Fix:** Change to `font-size:26px`.

### ISSUE-7: Mobile Body Font Below 16px (All variants)
**Where:** `p[class="body"]{font-size:15px!important}` in responsive CSS
**What:** Design System rule: "Never go below 16px on mobile." The responsive override sets body to 15px.
**Impact:** WCAG readability risk on small screens.
**Fix:** Remove or change the `.body` class to stay at 16px on mobile. The Design System explicitly forbids < 16px body text.

### ISSUE-8: No Responsive h2 Class
**Where:** Subheadings use inline Georgia styles but lack a `.h2` responsive class to scale on mobile.
**What:** E1 variants have "A reminder of what we know" / "The science in one paragraph" / "Late is not never" as h2-type elements but no mobile override for font-size.
**Fix:** Add `h2[class="h2"]{font-size:18px!important}` to the responsive CSS and apply class="h2" to subheadings.

### ISSUE-9: Email 3 Lacks HTML Build
**Where:** All three E3 variants exist only as .txt spec files
**What:** No HTML templates built. These need to be coded to the same standard as E1/E2 before deployment.
**Impact:** Cannot deploy this flow.
**Fix:** Build HTML versions for L1/L2/L3 E3 variants following the established template structure.

### ISSUE-10: Unique Callout Background Colors
**Where:** L1 E1 uses `#E8F4F4`, L2 E1 uses `#E8F4F4`, L3 E2 uses `#F8F6F3`
**What:** Design System specifies `#F0F7FF` (soft blue) for education/science callouts, `#FFF8F5` (warm) for general callouts, `#F0FDF4` (soft green) for success messages. `#E8F4F4` is not a documented color.
**Fix:** Replace with standard Design System callout colors: `#FFF8F5` for warm/general callouts, `#F0F7FF` for science/education sections.

### ISSUE-11: Preheader Text Opacity
**Where:** Preheader divs use `color:#F8F6F3` to match outer background
**What:** Standard practice is `color:#FFFFFF` on a white or near-white preheader to hide it. Using the bg color works but risks visibility if email client strips the bg. Minor concern.
**Suggestion:** Use `color:#FFFFFF` with the existing `font-size:1px;line-height:1px;max-height:0;opacity:0;overflow:hidden` for bulletproof hiding.

### ISSUE-12: Button Labels Not From Approved List
**Where:** "Revisit the mechanism →", "See the mechanism again →", "Claim your offer →", "See the offer →", "60 days to try — your judgment →", "Leave the door open →"
**What:** Design System Section 5.1 lists approved button labels. None of the above are in the approved list.
**Impact:** Minor — the approved list is labeled as guidelines. But these labels should be reviewed for brand consistency.
**Suggestion:** Consider mapping Winback-specific labels to the approved set or extend the approved list in the Design System.

---

## Flow 25: Site Abandonment — Copy Review

**Content:** Single email triggered by site exit intent. From Lena. Focuses on the "signal-timing gap" explanation.

**Strengths:**
- Clean, direct copy. Addresses the visitor who "stopped by" but left.
- Good education on signal-timing gap vs. method failure.
- Strong social proof block (stars, 16,511 reviews, 100K+ parents).
- CTA text "See How the Mechanism Works →" aligns with education goal.

**Weaknesses:**
- Opening "Lena from BrightKidCo" text above the divider lacks the standard Design System header (logo, accent bar).
- No Lena sign-off block — just ends after CTA without the personal closing ("With you, Lena") that other flows use.
- Very minimal footer (missing Shop, Parent Stories, Contact us, FAQ links, no company address).
- Preheader is missing entirely.

---

## Flow 25: Site Abandonment — Design & Technical Issues

### ISSUE-SA1: Color Palette Off-Spec
**Where:** Throughout
**What:** Same `#2A7A7B` (teal) issue for CTA button instead of coral `#FF6B4A`. Background `#F8F6F3` instead of `#FFF8F5`/`#FFFFFF`.
**Fix:** Consistent with Winback B fixes above — replace teal with coral for CTAs.

### ISSUE-SA2: No Logo Header
**Where:** Line 39-48
**What:** Uses plain text "Lena from BrightKidCo" instead of the standard logo header + accent bar from Design System Section 8.2.
**Impact:** Inconsistent with other flows. Missing brand recognition at the top of the email.
**Fix:** Add standard logo header + teal/coral accent bar matching Design System Section 8.2.

### ISSUE-SA3: Missing Lena Sign-Off Block
**Where:** After CTA section (lines 100-121)
**What:** Jumps straight to social proof → footer. No "With you, Lena — Mom of two" sign-off.
**Impact:** Loses the personal connection that Winback B and other flows use effectively.
**Fix:** Add standard Lena sign-off block (Georgia italic, 15px, signature + support tagline + P.S.) before footer.

### ISSUE-SA4: Missing Preheader
**Where:** Head section
**What:** No hidden preheader div found.
**Impact:** Missed opportunity for preview text control in inbox.
**Fix:** Add standard hidden preheader div with 80-100 char preview text.

### ISSUE-SA5: Footer Too Sparse
**Where:** Lines 133-148
**What:** Only has "BrightKidCo — Body-Signal Learning Layer...", email address, unsubscribe link, and manage preferences. Design System footer includes: Shop, Parent Stories, Contact us, FAQ links, company address, tagline.
**Impact:** Looks incomplete compared to other flows.
**Fix:** Expand footer to match Design System Section 9 template with full link set and company address.

### ISSUE-SA6: Mobile Body Font at 15px
**Where:** `p[class="body"]{font-size:15px!important}` in responsive CSS
**What:** Same as ISSUE-7 — Design System forbids body text below 16px.
**Fix:** Remove 15px override or set to 16px min.

### ISSUE-SA7: 14px Text Used in Body
**Where:** Line 63-65 — "You stopped by BrightKidCo earlier" is styled at 14px
**What:** Design System says body text should never be smaller than 16px. 14px is only for metadata/footnotes.
**Fix:** Use 16px for this text, or treat it as metadata if intended as such.

### ISSUE-SA8: No Pre-K / Urgency Hook
**Where:** Throughout
**What:** Unlike Winback B which references Pre-K deadlines effectively, the site-abandonment email has no timing-based urgency at all.
**Suggestion:** Add a light Pre-K reference ("If Pre-K is approaching...") to improve conversion.

---

## Summary of Required Fixes by Priority

### P0 — Blocking (cannot deploy)

| # | Flow | Issue | Fix |
|---|------|-------|-----|
| 1 | 24 | E3 (all 3 levels) are .txt only | Build HTML for L1/L2/L3 E3 |
| 2 | 25 | Missing preheader | Add hidden preheader div |
| 3 | 25 | No Lena sign-off block | Add standard sign-off |

### P1 — Brand Integrity (must fix)

| # | Flow | Issue | Fix |
|---|------|-------|-----|
| 4 | 24+25 | #2A7A7B teal used instead of coral #FF6B4A | Replace all teal CTAs/accents with coral |
| 5 | 24+25 | Border colors (#E2DCD3) off-spec | Replace with #E5E7EB |
| 6 | 24+25 | Secondary text (#636E72) off-spec | Replace with #6B7280 |
| 7 | 24+25 | Light text (#B2BEC3) off-spec | Replace with #9CA3AF |
| 8 | 24+25 | Background (#F8F6F3) not in palette | Use #FFF8F5 or #FFFFFF |
| 9 | 24+25 | Callout backgrounds (#E8F4F4) off-palette | Use #F0F7FF (science) or #FFF8F5 (warm) |
| 10 | 25 | No logo header | Add standard logo + accent bar |
| 11 | 25 | Footer too sparse | Expand to full Design System footer |

### P2 — UX & Accessibility

| # | Flow | Issue | Fix |
|---|------|-------|-----|
| 12 | 24+25 | 15px body text on mobile (DS says min 16px) | Keep body at 16px on all breakpoints |
| 13 | 24+25 | H1 at 28px (DS says 26px) | Reduce to 26px |
| 14 | 24 | Subheadings lack responsive h2 class | Add `.h2` class and responsive override |
| 15 | 25 | 14px text in body area | Bump to 16px or designate as metadata |
| 16 | 24 | Button labels not in approved DS list | Review & extend approved set |

### P3 — Polish

| # | Flow | Issue | Fix |
|---|------|-------|-----|
| 17 | 24 | Preheader uses bg-matched color | Use #FFFFFF for bulletproof hiding |
| 18 | 25 | No Pre-K urgency hook | Consider adding timing reference |
| 19 | 24 | Footer links use teal | Use #6B7280 per DS |

---

## Flow Structure Summary

### Flow 24 — Winback B (3 emails × 3 levels)

```
Day 0  ─┬─ L1 (Sarah):  "It's been a while."        [button → revisit mechanism]
         ├─ L2 (Lisa):   "It's been a while. No pressure." [button → see mechanism]
         └─ L3 (Maria):  "It's been a while. Quietly."     [text link → late-training story]

Day 7  ─┬─ L1:  "A small offer, no strings attached."      [button → claim 15% off]
         ├─ L2:  "A quiet offer."                          [button → see offer]
         └─ L3:  "A small thing, no expiration."           [text link → options at own pace]

Day 14 ─┬─ L1:  "This is the last one."                    [button → 60 days to try]
         ├─ L2:  "One last thought."                       [button → leave door open]
         └─ L3:  "Quietly closing for now."                [text link → stay subscribed]
```

**Conversion path:** Awareness → Offer → Sunset. Well-structured. Level differentiation is functional and consistent.

### Flow 25 — Site Abandonment (1 email, single variant)

Single-trigger exit intent email. Good entry-level education on signal-timing gap. Needs design system alignment before it matches the quality of other flows.

---

## Final Assessment

**Copy quality:** Excellent across all 10 files. The Lena voice is consistent, empathetic, and parent-appropriate. Level differentiation passes the L1/L2/L3 test — each level serves a distinct persona with appropriate CTA intensity.

**Technical quality:** Needs work. The consistent use of an off-palette color (#2A7A7B teal) across all files suggests a deliberate but undocumented design decision that conflicts with the Design System. Multiple color tokens are off-spec. Mobile font size 15px violates Design System rules. Email 3 is only .txt. Site-abandonment is missing standard structural elements (preheader, logo, sign-off, footer).

**Recommendation:** Fix P0-P1 items before deployment. P2 items should be resolved in a follow-up pass. The color discrepancy (#2A7A7B vs #FF6B4A) merits a decision — either update the Design System to include teal as a Winback variant, or align all files with the published palette.
