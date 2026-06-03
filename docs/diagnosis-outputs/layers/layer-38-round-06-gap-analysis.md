# Layer 38 Round 06: Brand Constants — Gap Analysis

**Date:** 2026-05-25
**Type:** Gap Analysis (R6)
**Sources:** L38 Brand Constants (archived synthesis, 370 lines, 85+ constants), Overnight Plan L38 (lines 617-642), L36 Gap Analysis (deliverability cross-reference)
**Status:** 4 critical discrepancies identified, 7 gaps requiring resolution

---

## EXECUTIVE SUMMARY

The Layer 38 brand constants synthesis is thorough — 85+ constants cataloged across 16 categories, with live website verification and cross-document comparison. However, the gap analysis reveals **4 critical discrepancies** between internal docs and the live website, **3 items with unresolved conflicts** between sources, and **7 gaps** where constants are either missing, unverifiable, or may have changed since the client files were written.

**Highest-risk items:** Discount code ambiguity (WELCOME10 vs 10%OFF-BKCO) blocks email deployment. Guarantee period mismatch (30 vs 60 days) could create legal/compliance exposure. Contact page is broken, affecting footer links in every email.

---

## 1. GAP MATRIX — Required vs Documented vs Verified

| # | Brand Constant | Plan Requires (L38) | Synthesis Documents | Website Verified | Gap Status |
|---|---------------|---------------------|---------------------|------------------|------------|
| G1 | 1 Pair price | $34.99 | $34.99 (DOC6 §5) | ✅ MATCH | **Complete** |
| G2 | 3+3 Bundle price | $79.99 | $79.99 (DOC6 §5) | ✅ MATCH (cart flow) | **Complete** |
| G3 | 5+5 Bundle price | $119.99 | $119.99 (DOC6 §5) | ⚪ Not visible on PDP | **Partial** — doc-only, not site-verified |
| G4 | Guarantee period | 60-Day Money Back | 60-Day (DOC6 §5) | ❌ Site shows 30-Day | 🔴 **CRITICAL DISCREPANCY** |
| G5 | Reviews count | 16,511 | 16,511 (DOC6 §5) | ✅ MATCH (Autistic PDP) | **Complete** |
| G6 | Star rating | 4.9★ | 4.9 (DOC6 §5) | ✅ MATCH | **Complete** |
| G7 | Trustpilot | NO links | NO links (DOC6 §5) | ❌ Trustpilot EXISTS (2,666 reviews) | 🟡 **DISCREPANCY** |
| G8 | From Name | "Lena from BrightKidCo" | "Lena from BrightKidCo" (DOC6 §5) | ⚪ Cannot verify (Klaviyo) | **Unverifiable** — needs Klaviyo check |
| G9 | From Email | support@brightkidco.com | support@brightkidco.com (DOC6 §5) | ⚪ Cannot verify | **Unverifiable** |
| G10 | Reply-To | support@brightkidco.com | support@brightkidco.com (DOC6 §5) | ⚪ Cannot verify | **Unverifiable** |
| G11 | Sending Subdomain | Send.brightkidco.com | Send.brightkidco.com (DOC6 §5) | ⚪ Cannot verify | **Unverifiable** — verify via dig |
| G12 | Shipping days | 10 days | 10 days (DOC6 §5) | ⚪ No timeline on site banner | **Partial** — doc-only |
| G13 | Shipping markets | USA, UK, AU, NZ, Canada | USA, UK, AU, NZ, NZ, CA (DOC6 §5) | ⚪ Not verifiable from homepage | **Unverifiable** — needs shipping page check |
| G14 | Font | Questrial 400 | Questrial 400 (DOC6 §5, L33) | ✅ CSS confirmed | **Complete** |
| G15 | Brand Green | #039902 | #039902 (DOC6 §5, L33) | ⚪ Could not extract hex | **Unverifiable** — needs DevTools |
| G16 | Mint | #DBFFCD | #DBFFCD (DOC6 §5, L33) | ⚪ Could not extract hex | **Unverifiable** |
| G17 | Cream | #FBF7EB or #FAF5E8 | Both variants (DOC6 §5, L33) | ⚪ Could not extract hex | **Unverifiable** |
| G18 | Yellow | #F5C84B or #F5CB5C | Both variants (DOC6 §5, L33) | ⚪ Could not extract hex | **Unverifiable** |
| G19 | Gray | #9AA8A7 | #9AA8A7 (DOC6 §5, L33) | ⚪ Could not extract hex | **Unverifiable** |
| G20 | Instagram | instagram.com/brightkidco_official | Matches (DOC6 §5) | ⚪ Not in footer extract | **Partial** — doc-only |
| G21 | TikTok | tiktok.com/@brightkidco.com | Matches (DOC6 §5) | ⚪ Not in footer extract | **Partial** — doc-only |
| G22 | Facebook | NOT USED | NOT USED (DOC6 §5) | ⚪ Policy only | **Complete** (policy) |
| G23 | Discount code | WELCOME10 (plan) | 10%OFF-BKCO (DOC6 §5) | ⚪ Shopify unknown | 🔴 **SOURCE CONFLICT** |
| G24 | Auto-apply link | /discount/10%25OFF-WELCOME | /discount/10%25OFF-BKCO | ⚪ Unknown | 🔴 **SOURCE CONFLICT** |
| G25 | Contact page | /pages/contact | Documented | ❌ Returns error | 🟡 **BROKEN ON SITE** |
| G26 | Footer order | Shop·Parent Stories·Contact·FAQ | Matches | ✅ Verified | **Complete** |
| G27 | 49% SPARK stat | Required | Documented (DOC6 §5) | ⚪ Research claim | **Complete** — cite as authority |
| G28 | Kelly Mahler ref | Required | Documented (DOC6 §5) | ⚪ Research claim | **Complete** — cite as authority |

---

## 2. CONTRADICTIONS BETWEEN SOURCES

### C1: Guarantee Period — 30 Days vs 60 Days
| Source | Value |
|--------|-------|
| DOC6 §5 (internal doc) | **60-Day Money Back** |
| DOC1 §14 (internal doc) | **60-Day Money Back** |
| Overnight Plan L38 | **60-Day Money Back** |
| Live Website — Homepage banner | **30-Day Money-Back Guarantee** |
| Live Website — FAQ section | **30-day guarantee** (multiple) |
| Live Website — Product page | **30-Day Money-Back Guarantee** |

**Resolution status:** UNRESOLVED. The synthesis says "use 60 days per docs" but the website uniformly says 30 days. This is either:
- (a) The website is outdated and the guarantee was extended to 60 days, OR
- (b) The docs are wrong and the guarantee is actually 30 days

**Impact on Sections 2-6:** Every email mentioning the guarantee will use either 30 or 60 days. If the wrong number is used, it's a potential FTC compliance issue (advertising a guarantee period the company doesn't honor).

### C2: Discount Code — WELCOME10 vs 10%OFF-BKCO
| Source | Code | Auto-Apply Link |
|--------|------|-----------------|
| Overnight Plan L38 | `WELCOME10` | `brightkidco.com/discount/10%25OFF-WELCOME` |
| DOC6 §5 | `10%OFF-BKCO` | `brightkidco.com/discount/10%25OFF-BKCO` |

**Resolution status:** UNRESOLVED. Two different codes with different naming conventions. Could be:
- (a) Both exist (different campaigns), OR
- (b) One replaced the other and the docs weren't updated, OR
- (c) The plan spec was written with a placeholder code

**Impact on Sections 2-6:** The Welcome Flow, any promotional email, and the auto-apply link in the email template all depend on the correct code. Wrong code = broken discount = lost conversions.

### C3: Trustpilot — Exists vs Forbidden
| Source | Position |
|--------|----------|
| DOC6 §5 | "NO Trustpilot links (no page exists)" |
| Live Website | Trustpilot page EXISTS with 2,666 reviews, link on All Products page |

**Resolution status:** RESOLVED (for email purposes). Emails follow docs: no Trustpilot links. But the docs' reasoning ("no page exists") is factually wrong — a page does exist.

**Impact on Sections 2-6:** Minimal — the decision is clear (no Trustpilot in emails). But if the client ever asks why emails don't link to their Trustpilot, the answer needs to reference this discrepancy.

---

## 3. ASSUMPTIONS NEEDING VALIDATION

| # | Assumption | Risk if Wrong | Validation Method | Priority |
|---|-----------|---------------|-------------------|----------|
| A1 | 5+5 bundle price is $119.99 | Pricing error in email copy | Check Shopify admin or cart flow | **High** |
| A2 | Color hex codes haven't changed since docs were written | Visual mismatch between email and site | Chrome DevTools → inspect elements on brightkidco.com | **Medium** |
| A3 | Social links (Instagram, TikTok) are still active | Dead links in email footer | Click links, verify accounts exist | **Medium** |
| A4 | "Lena from BrightKidCo" persona is still the intended sender | Sender confusion if persona changed | Check Klaviyo sender settings | **Low** |
| A5 | Shipping is still 10 days to all 5 markets | Incorrect delivery promise | Check Shopify shipping settings or recent orders | **Medium** |
| A6 | Review count (16,511) is current | Stale social proof number | Check live site (may have increased) | **Low** |
| A7 | Trust statement is "100,000+ parents trust BrightKidCo" | Inconsistent trust copy | Check homepage/About page for current wording | **Low** |

---

## 4. UNRESOLVED QUESTIONS

| # | Question | Who Can Answer | Impact |
|---|----------|---------------|--------|
| Q1 | Is the guarantee 30 days or 60 days? | Yurishizu / Shopify settings | Legal compliance — every guarantee mention in emails |
| Q2 | Which discount code is currently active in Shopify? | Yurishizu / Shopify admin | Welcome flow, promotional emails, auto-apply links |
| Q3 | Is /pages/contact intentionally broken or a bug? | Yurishizu / Shopify dev | Footer link in every email — broken link = bad UX |
| Q4 | Were the hex codes verified via DevTools or copied from docs? | Ops (re-verify) | Visual consistency between email templates and site |
| Q5 | Is the Trustpilot page official or unauthorized? | Yurishizu | Decision on whether to ever link it in future |
| Q6 | Does the 5+5 bundle show on the site or only in bundle builder? | Ops (re-verify) | Whether to reference it in email copy with confidence |
| Q7 | Are there any other discount codes in Shopify besides these two? | Shopify admin | Avoid code conflicts in email campaigns |

---

## 5. PRIORITY-RANKED GAPS

### 🔴 P0 — Blockers (Must resolve before email deployment)

| # | Gap | Category | Impact | Effort | Action |
|---|-----|----------|--------|--------|--------|
| G-P0-1 | Discount code ambiguity (WELCOME10 vs 10%OFF-BKCO) | Pricing/CTA | Wrong code = broken discount in all emails | 5 min | Check Shopify admin for active codes |
| G-P0-2 | Guarantee period mismatch (30 vs 60 days) | Compliance | Legal exposure if wrong period advertised | 5 min | Confirm with Yurishizu, update website or docs |
| G-P0-3 | Contact page broken (/pages/contact returns error) | URLs/Footer | Broken link in every email footer | 15 min | Fix page or update footer URL |

### 🟡 P1 — High Priority (Should resolve before first campaign)

| # | Gap | Category | Impact | Effort | Action |
|---|-----|----------|--------|--------|--------|
| G-P1-1 | Color hex codes not verified on live site | Visual | Email templates may not match current site branding | 20 min | Chrome DevTools inspection of brightkidco.com |
| G-P1-2 | Social links not verified as active | Footer | Dead Instagram/TikTok links in email footer | 10 min | Click-test both links |
| G-P1-3 | 5+5 bundle not visible on site (doc-only) | Pricing | Cannot confidently reference in email copy | 10 min | Check bundle builder or Shopify admin |
| G-P1-4 | Sender configuration unverifiable (Klaviyo-only) | Sender | From Name/Email could be different in live Klaviyo | 5 min | Check Klaviyo sender settings |

### 🟢 P2 — Medium Priority (Verify during implementation)

| # | Gap | Category | Impact | Effort | Action |
|---|-----|----------|--------|--------|--------|
| G-P2-1 | Shipping markets not site-verifiable | Shipping | Delivery promise may be inaccurate for some markets | 15 min | Check Shopify shipping zones |
| G-P2-2 | Review count may be stale (16,511) | Social Proof | Slightly outdated number in email copy | 2 min | Check live site — likely increased |
| G-P2-3 | Trustpilot page docs reasoning is wrong | Documentation | Misleading internal docs ("no page exists" — it does) | 2 min | Update docs to say "exists but don't link" |

---

## 6. IMPACT ASSESSMENT FOR SECTIONS 2-6

### Section 2: Welcome Flow
- **Affected by:** G-P0-1 (discount code), G-P0-2 (guarantee), G-P0-3 (contact URL in footer)
- **Risk:** Welcome email #1 is the highest-volume email. Wrong discount code or guarantee period = immediate revenue/compliance impact
- **Mitigation:** Verify discount code and guarantee before writing any Welcome copy

### Section 3: Abandonment Flows (Cart + Checkout)
- **Affected by:** G-P0-1 (discount code), G-P0-2 (guarantee), G-P1-1 (colors for urgency badges)
- **Risk:** Abandonment emails rely on discount codes for conversion. Wrong code = zero recovery
- **Mitigation:** Confirm active discount code, use correct auto-apply link format

### Section 4: Post-Purchase Flows
- **Affected by:** G-P0-2 (guarantee — post-purchase reassurance), G-P0-3 (contact link for support)
- **Risk:** Post-purchase emails reference guarantee for confidence. Broken contact link = customer can't reach support
- **Mitigation:** Fix contact page or update footer URL before post-purchase flow goes live

### Section 5: Campaign Calendar
- **Affected by:** G-P0-1 (discount code for promotions), G-P1-3 (5+5 bundle pricing for bundle campaigns)
- **Risk:** Bundle campaigns cannot confidently reference 5+5 pricing if it's not verified on-site
- **Mitigation:** Verify 5+5 bundle exists and pricing is correct before scheduling bundle campaigns

### Section 6: Replenishment + Winback
- **Affected by:** G-P0-2 (guarantee for winback trust-building), G-P1-2 (social links for engagement)
- **Risk:** Winback emails use guarantee as trust signal. Wrong period undermines credibility
- **Mitigation:** Same guarantee resolution as above

---

## 7. WEBSITE VERIFICATION NOTES

### What WAS verified (from archived synthesis)
- ✅ Homepage: loads, confirms pricing, free shipping banner
- ✅ Autistic PDP: loads, 16,511 reviews, $34.99, "Bestseller" badge
- ✅ Standard PDP: loads, 16,305 reviews, $34.99
- ✅ All Products: loads, Trustpilot link present (discrepancy noted)
- ✅ Parent Stories: loads with reviews
- ✅ FAQ: loads with Q&A
- ✅ Font: CSS confirms Questrial, Arial, Helvetica, sans-serif fallback
- ✅ Footer link order: Shop · Parent Stories · Contact us · FAQ

### What was NOT verified
- ❌ Color hex codes (could not extract via web_extract — needs DevTools)
- ❌ Social links (not in nav/footer extract — needs click-testing)
- ❌ Contact page (returns "Something went wrong" error)
- ❌ 5+5 bundle pricing (not visible on PDPs — bundle builder only)
- ❌ Shipping timelines (banner says "Free Shipping over $35" but no days)
- ❌ Sender configuration (Klaviyo-only, not verifiable from site)

### What needs RE-verification (may have changed since May 23)
- ⚠️ Review counts (16,511 may have increased in 2 days)
- ⚠️ Trustpilot review count (2,666 may have changed)
- ⚠️ Guarantee period on site (30 vs 60 — may have been updated)
- ⚠️ Discount codes in Shopify (may have been added/removed)

---

## 8. CROSS-LAYER IMPACT

| Gap | Layers Affected | Downstream Impact |
|-----|----------------|-------------------|
| G-P0-1 (Discount code) | L38 → All Sections (2-6) | Every promotional email uses a discount code — wrong code = broken conversion |
| G-P0-2 (Guarantee) | L38 → Sections 2, 3, 4, 6 | Trust-building copy in Welcome, Abandonment, Post-Purchase, Winback |
| G-P0-3 (Contact page) | L38 → Every email footer | Broken link in universal footer block |
| G-P1-1 (Colors) | L38 → L33 (Format) | Email templates need correct hex for visual brand consistency |
| G-P1-2 (Social links) | L38 → Every email footer | Dead social links = broken footer UX |
| G-P1-3 (5+5 bundle) | L38 → Section 5 (Campaigns) | Bundle campaigns need verified pricing |
| L36 G2 (List hygiene) | L36 → L38 (social proof) | If reviews microcopy links to unverified landing pages, trust breaks |

---

*Gap analysis complete. 28 constants mapped. 3 P0 blockers, 4 P1 high-priority, 3 P2 medium-priority gaps. 4 critical discrepancies between docs and live site. 7 unresolved questions requiring client input or re-verification. Total remediation effort: ~1.5 hours for all P0+P1 items.*
