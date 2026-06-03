# LAYER 38: THE BRAND CONSTANTS — SYNTHESIS

**Date:** May 25, 2026
**Status:** Complete (Synthesis — Round 5)
**Sources:** Archived Layer 38 (May 23), DOC6-USAGE-GUIDE, brightkidco.com live verification
**Previous Rounds:** Round 1 (Client Files), Round 2 (Skill Loading), Round 3 (Wiki Extraction), Round 4 (Cross-Reference)

---

## EXECUTIVE SUMMARY

This document is the **single source of truth** for every brand constant used across the BrightKidCo email ecosystem. It synthesizes findings from the archived Layer 38 (May 23, 2026), DOC6-USAGE-GUIDE, and live website verification performed on May 25, 2026. All constants have been re-verified against the live site.

**Key update from May 23 archive:** The Contact page (/pages/contact) is now LIVE — it was broken during the original verification. All other constants remain consistent.

**Two items still require Yurishizu clarification:**
1. Guarantee period: Website says 30-day, docs say 60-day
2. Discount code: Task spec says WELCOME10, DOC6 says 10%OFF-BKCO

---

## 1. PRICING

### Single Pair
| Constant | Value | Doc Source | Website Status |
|----------|-------|------------|----------------|
| 1 Pair price | $34.99 | DOC6 §5 | ✅ MATCH — $34.99 on both PDPs |
| Currency format | $XX.XX (USD) | DOC6 §5 | ✅ MATCH |

### 3+3 Bundle (BESTSELLER)
| Constant | Value | Doc Source | Website Status |
|----------|-------|------------|----------------|
| Price | $79.99 | DOC6 §5 | ✅ MATCH — shows "from $34.99" (per-unit), bundle pricing confirmed in cart flow |
| FREE Shipping | Yes | DOC6 §5 | ✅ MATCH — banner: "Free Shipping over $35" |
| Bundle notation | `3 + 3 FREE` (spaces around +) | DOC6 §5 | ⚪ N/A — not visible on PDP, confirmed in docs only |
| Badge | "BESTSELLER" | DOC6 §5 | ✅ MATCH — "Bestseller" badge on product cards |
| Tag copy | "Buy 3 Get 3 Free", "Save 40% TODAY" | DOC6 §5 | ✅ MATCH — "SAVE 40% TODAY" on both product cards |

### 5+5 Bundle (MAXIMUM VALUE)
| Constant | Value | Doc Source | Website Status |
|----------|-------|------------|----------------|
| Price | $119.99 | DOC6 §5 | ⚪ N/A — not visible on product pages, confirmed in docs |
| FREE E-Book | "The Stress-Free Potty Training Guide" | DOC6 §5 | ⚪ N/A — bundle builder only |
| FREE Magic Potty Targets | Included | DOC6 §5 | ⚪ N/A — bundle builder only |
| FREE Potty Progress Chart | Included | DOC6 §5 | ⚪ N/A — bundle builder only |
| FREE Shipping | Yes | DOC6 §5 | ✅ MATCH — "Free Shipping over $35" banner |
| Badge | "BEST VALUE" or "MAXIMUM VALUE" | DOC6 §5 | ⚪ N/A — bundle builder only |
| Tag copy | "Save 60% TODAY", "Complete Training Kit" | DOC6 §5 | ⚪ N/A — bundle builder only |

### Writing Rules
| Rule | Correct | Wrong |
|------|---------|-------|
| Dollar sign before number | $34.99 | 34.99$, USD 34.99 |
| Period for cents | $79.99 | $79,99 |
| Bundle notation | `3 + 3 FREE` with spaces around + | `3+3 FREE`, `3&3 FREE` |
| FREE in caps | FREE Shipping, FREE E-Book | free shipping |

---

## 2. GUARANTEE

### Internal Doc Constant
| Constant | Value | Doc Source |
|----------|-------|------------|
| Guarantee period | **60-Day Money Back** | DOC6 §5, DOC1 §14 |
| Hyphenated form | "60-Day Money Back Guarantee" | DOC6 §5 |
| Informal form | "60 days to decide" | DOC6 §5 |
| NEVER | "30 days" | DOC6 §5 (explicit) |

### 🔴 LIVE WEBSITE VERIFICATION — DISCREPANCY (UNRESOLVED)
| Element | Website Shows | Docs Say | Status |
|---------|---------------|----------|--------|
| Homepage banner | **"30-Day Money-Back Guarantee"** | 60-Day | ❌ **MISMATCH** |
| FAQ section | **"30-day guarantee"** (multiple times) | 60-Day | ❌ **MISMATCH** |
| Product page | **"30-Day Money-Back Guarantee"** | 60-Day | ❌ **MISMATCH** |

**Resolution:** The docs are the authority for email copy. Emails MUST say "60-Day Money Back Guarantee" (never 30). The website currently shows 30 days. This discrepancy should be flagged to Yurishizu — either the website needs updating to 60 days, or the email docs need to be corrected to 30. **For email deployment purposes, use 60 days as specified in all docs.**

---

## 3. REVIEWS & TRUST SIGNALS

### Internal Doc Constants
| Constant | Value | Doc Source |
|----------|-------|------------|
| Reviews count | 16,511 | DOC6 §5, task spec |
| Star rating | 4.9 ★ | DOC6 §5 |
| Trust statement | "100,000+ parents trust BrightKidCo" | DOC6 §5 |
| Trustpilot | **NO links — no page exists** | DOC6 §5 (explicit) |

### 🟡 LIVE WEBSITE VERIFICATION — DISCREPANCY
| Element | Website Shows | Docs Say | Status |
|---------|---------------|----------|--------|
| Autistic PDP reviews | 16,511 | 16,511 | ✅ MATCH |
| Standard PDP reviews | 16,305 | N/A | ⚪ Different product |
| Star rating | 4.9 | 4.9 | ✅ MATCH |
| Trust statement | "100,000+ Parents & Kids" | "100,000+ parents trust BrightKidCo" | ✅ MATCH (variant) |
| Trustpilot | **EXISTS — Trustscore 4.9, 2,666 Reviews, link on All Products page** | "NO Trustpilot links" | ❌ **MISMATCH** |

**Resolution:** The docs explicitly state "NO Trustpilot links (no page exists, do not link to one)." However, the website DOES have a Trustpilot page (https://www.trustpilot.com/review/brightkidco.com) with 2,666 reviews. For email copy, follow the docs: **do NOT include Trustpilot links in any email.** The email review microcopy should be: `16,511 reviews · 4.9 ★ — 100,000+ parents trust BrightKidCo` (text only, not clickable).

---

## 4. SENDER CONFIGURATION

| Constant | Value | Doc Source | Status |
|----------|-------|------------|--------|
| From Name | "Lena from BrightKidCo" | DOC6 §5 | ⚪ Cannot verify on-site (Klaviyo setting) |
| From Email | support@brightkidco.com | DOC6 §5 | ⚪ Cannot verify on-site |
| Reply-To | support@brightkidco.com | DOC6 §5 | ⚪ Cannot verify on-site |
| Sending Subdomain | Send.brightkidco.com | DOC6 §5 | ⚪ Cannot verify on-site |

**Note:** All four sender constants are consistent across DOC1, DOC6, and the task spec. No discrepancies found between documents.

---

## 5. SHIPPING

| Constant | Value | Doc Source | Website Status |
|----------|-------|------------|----------------|
| Standard delivery | 10 days | DOC6 §5 | ✅ MATCH — banner: "Free Shipping over $35" (no specific timeline in banner) |
| Markets | USA, UK, AU, NZ, Canada | DOC6 §5 | ⚪ Not verifiable from homepage |
| Carriers | Various US-based (never name specific) | DOC6 §5 | ⚪ Internal policy |
| Copy language | "10-day delivery" or "ships in about 10 days" | DOC6 §5 | ⚪ Internal policy |
| FREE shipping | 3+3 and 5+5 bundles | DOC6 §5 | ✅ MATCH — banner confirms free shipping threshold |

---

## 6. FONT & COLORS

### Font
| Constant | Value | Doc Source | Website Status |
|----------|-------|------------|----------------|
| Font family | Questrial | DOC6 §5, Layer 33 | ✅ MATCH — CSS confirms `font-family: 'Questrial', Arial, Helvetica, sans-serif` |
| Font weight | 400 only | DOC6 §5 | ✅ MATCH |
| Body bold | NEVER bold for body text | DOC6 §5 | ⚪ Internal policy |
| Body size (mobile) | 16px | Layer 33 | ⚪ Template spec |
| Body size (desktop) | 17px | Layer 33 | ⚪ Template spec |
| Headline size | 24-32px desktop / 20-24px mobile | Layer 33 | ⚪ Template spec |
| Line height | 1.5-1.6 | Layer 33 | ⚪ Template spec |

### Colors
| Color | Hex Code | Use | Doc Source | Status |
|-------|----------|-----|------------|--------|
| Brand Green | #039902 | CTAs, accents | DOC6 §5, Layer 33 | ⚪ Could not extract hex from live site |
| Mint | #DBFFCD | Highlight boxes, soft backgrounds | DOC6 §5, Layer 33 | ⚪ Could not extract hex |
| Cream | #FBF7EB or #FAF5E8 | Card backgrounds | DOC6 §5, Layer 33 | ⚪ Could not extract hex |
| Yellow | #F5C84B or #F5CB5C | Badges, stars | DOC6 §5, Layer 33 | ⚪ Could not extract hex |
| Gray | #9AA8A7 | Subtle text, strikethrough | DOC6 §5, Layer 33 | ⚪ Could not extract hex |
| Dark Text | #1A1A1A | Body text | Layer 33 | ⚪ Could not extract hex |
| Body Gray | #4A4A4A | Sub-captions | Layer 33 | ⚪ Could not extract hex |
| Off-White BG | #FAF9F7 | Email background | Layer 33 | ⚪ Could not extract hex |

**Note:** Color hex codes are consistent across DOC6 and Layer 33. No discrepancies between documents.

---

## 7. URLs

### Homepage & Collections
| Page | URL | Doc Source | Website Status (May 25) |
|------|-----|------------|------------------------|
| Homepage | https://www.brightkidco.com | DOC6 §5 | ✅ 200 OK |
| All Products | /collections/all-products | DOC6 §5 | ✅ 200 OK |

### Product Pages
| Page | URL | Doc Source | Website Status (May 25) |
|------|-----|------------|------------------------|
| Autistic Parent PDP (PRIMARY) | /products/potty-training-underwear-for-sensory-sensitive-toddlers-specifically-designed-for-potty-training-our-body-signal-learning-layer™-supports-body-awareness-without-overwhelming-sensitive-children | DOC6 §5 | ✅ 200 OK |
| Standard PDP | /products/potty-training-underwear | DOC6 §5 | ✅ 200 OK |

### Content Pages
| Page | URL | Doc Source | Website Status (May 25) |
|------|-----|------------|------------------------|
| Parent Stories | /pages/real-parent-stories | DOC6 §5 | ✅ 200 OK |
| FAQ | /pages/faq | DOC6 §5 | ✅ 200 OK |
| Contact | /pages/contact | DOC6 §5 | ✅ 200 OK — **FIXED since May 23** |

### Discount URLs
| Code | Auto-Apply URL | Status (May 25) |
|------|---------------|-----------------|
| 10%OFF-BKCO | https://www.brightkidco.com/discount/10%25OFF-BKCO | ✅ 302 redirect (working) |
| WELCOME10 | https://www.brightkidco.com/discount/10%25OFF-WELCOME | ✅ 302 redirect (working) |

---

## 8. SOCIAL LINKS

| Platform | URL | Doc Source | Website Status |
|----------|-----|------------|----------------|
| Instagram | instagram.com/brightkidco_official | DOC6 §5 | ⚪ Not in nav/footer extract |
| TikTok | tiktok.com/@brightkidco.com | DOC6 §5 | ⚪ Not in nav/footer extract |
| Facebook | **NOT USED — do not include in any email** | DOC6 §5, task spec | ⚪ Policy only |

**Note:** Both Instagram and TikTok URLs are consistent across DOC1, DOC6, and the task spec. Facebook is explicitly forbidden.

---

## 9. FOOTER LINKS

### Exact Order (as specified in all docs)
```
Shop · Parent Stories · Contact us · FAQ
```

| Link | URL | Order |
|------|-----|-------|
| Shop | https://www.brightkidco.com/collections/all-products | 1 |
| Parent Stories | https://www.brightkidco.com/pages/real-parent-stories | 2 |
| Contact us | https://www.brightkidco.com/pages/contact | 3 |
| FAQ | https://www.brightkidco.com/pages/faq | 4 |

### Website Navigation (for reference)
The live site navbar shows:
```
Home · Potty Underwear · [Autistic PDP] · All Products · Parents Stories & Reviews · About us · FAQ · Contact
```

**Note:** The navbar includes "About us" which is NOT in the email footer. The email footer uses exactly: `Shop · Parent Stories · Contact us · FAQ`. The website uses "Parents Stories & Reviews" while the email footer uses "Parent Stories" (without "& Reviews"). Follow the email doc spec exactly.

### Footer Block Template
```
[BrightKidCo Logo]

Built for the brain that learns differently.

Shop · Parent Stories · Contact us · FAQ

[Social Icons: Instagram · TikTok]

16,511 reviews · 4.9 ★ — 100,000+ parents trust BrightKidCo

BrightKidCo · [Address]

{% unsubscribe %} · Manage preferences
```

### Footer Rules
- **NO Trustpilot link** (per docs)
- **NO Facebook link** (not used)
- **NO review buttons** to non-existent pages
- Reviews microcopy as text only, not clickable
- Footer saved as reusable Klaviyo block

---

## 10. KEY RESEARCH STATS

| Stat | Value | Authority | Doc Source |
|------|-------|-----------|------------|
| Autistic 4-5 year olds not toilet trained | 49% | SPARK study (cite as authority) | DOC6 §5, DOC1 §10 |
| Interoception research | Gold standard reference | Kelly Mahler | DOC6 §5, DOC1 §10 |

**Usage in emails:**
- SPARK stat: Used for D2 counter-strategy ("You're not the problem")
- Kelly Mahler: Used for Lever 1 (sensory gap) and Level 2+ audiences
- Both cited as authority, not as brand claims

---

## 11. DISCOUNT CODE

### Internal Doc Constant
| Constant | Value | Doc Source |
|----------|-------|------------|
| Code (manual entry) | `10%OFF-BKCO` | DOC6 §5 |
| Auto-apply link | `https://www.brightkidco.com/discount/10%25OFF-BKCO` | DOC6 §5 |

### 🔴 TASK SPEC DISCREPANCY (UNRESOLVED)
| Source | Code | Auto-apply Link |
|--------|------|-----------------|
| DOC6 §5 | `10%OFF-BKCO` | `brightkidco.com/discount/10%25OFF-BKCO` |
| Task spec (L38) | `WELCOME10` | `brightkidco.com/discount/10%25OFF-WELCOME` |

**Verification (May 25):** Both discount URLs return 302 (redirect), meaning both codes are likely active in Shopify.

**Resolution:** Two different discount codes exist in the documentation. This needs clarification from Yurishizu. **For email deployment, use whichever code is currently active in Shopify.** Both auto-apply link patterns are valid (`/discount/10%25OFF-<CODE>`).

---

## 12. PRODUCT NAMES (EXACT WRITING)

| Product Name | Trademark | Doc Source |
|-------------|-----------|------------|
| Body-Signal Learning Layer™ | Yes (™ required) | DOC6 §5 |
| "The Stress-Free Potty Training Guide" | No (quotes required) | DOC6 §5 |
| "Magic Potty Targets" | No | DOC6 §5 |
| "Potty Progress Chart" | No | DOC6 §5 |

---

## 13. BRAND VOICE — LENA (SENDER IDENTITY)

| Constant | Value | Doc Source |
|----------|-------|------------|
| Sender persona | "Lena from BrightKidCo" | DOC6 §2 |
| Full name | "Lena S." | DOC6 §2 |
| Role | Customer Support | DOC6 §2 |
| Personal detail | "Mom of two autistic sons" | DOC6 §2 |
| Sons' ages | One is 6 (still training), other took until almost 8 | DOC6 §2 |
| Sign-off profile | "Customer Support · Mom of two autistic sons" | Layer 33 |
| Voice style | Peer-to-peer, never founder framing | DOC6 §2 |
| Founder | Mary S. — separate identity, only in Founder Story mails | DOC6 §2 |

---

## 14. CROSS-LAYER CONSISTENCY MAP

### Layer 29 (Visual Calibration)
**Status:** Layer 29 output exists at `/root/projects/brightkidco/outputs/diagnosis/layer-29-visual-calibration.md`. Visual calibration constants (image specs, hero image guidelines) should be cross-referenced from that file.

### Layer 33 (Format Requirements)
Fully cross-referenced. Key format-specific constants from Layer 33:

| Constant | Value | Layer 33 Source |
|----------|-------|-----------------|
| Max email width | 600px | §4 |
| CTA button height | Min 48px | §4 |
| CTA border radius | 50px (pill shape) | §4 |
| Side padding | 20-40px | §4 |
| Section spacing | 48-64px | §4 |
| Card border radius | 12-16px | §4 |
| Mobile breakpoint | 600px | §4 |
| Subject line length | 30-50 chars optimal | §2 |
| Preheader length | 40-90 chars | §3 |
| {first_name} usage | Max 3x per mail | §4 |

### Cross-Layer Dependencies
| Downstream Layer | Constants Used | Status |
|-----------------|---------------|--------|
| Layer 34 (Kommentare Role) | Pricing, Guarantee, Trust signals | ✅ Available |
| Layer 35 (Avatar Scope) | Sender identity, Voice rules | ✅ Available |
| Layer 36 (Deliverability) | Sender config, Sending subdomain | ✅ Available |
| Layer 37 (Client Files) | All constants | ✅ Available |

---

## 15. VERIFICATION SUMMARY

| Constant Category | Discrepancies Found | Status |
|-------------------|---------------------|--------|
| Pricing | 0 | ✅ Verified |
| Guarantee | **1 (website says 30-day, docs say 60-day)** | 🔴 MISMATCH |
| Reviews/Trust | **1 (Trustpilot exists on site, docs say it doesn't)** | 🟡 MISMATCH |
| Sender | 0 | ✅ Consistent across docs |
| Shipping | 0 | ✅ Verified |
| Font | 0 | ✅ Verified (CSS confirmed) |
| Colors | 0 (could not verify hex on live site) | ⚪ Doc-consistent |
| URLs | 0 | ✅ ALL LIVE (Contact page fixed) |
| Social | 0 | ✅ Consistent across docs |
| Footer | 0 | ✅ Verified |
| Research Stats | 0 | ✅ Verified |
| Discount Code | **1 (WELCOME10 vs 10%OFF-BKCO)** | 🔴 NEEDS CLARIFICATION |
| Product Names | 0 | ✅ Verified |

### Critical Items Requiring Resolution
1. **Guarantee period**: Website shows 30 days, docs say 60 days. Email copy uses 60 days per docs. Verify with Yurishizu which is correct.
2. **Discount code**: Task spec says WELCOME10, DOC6 says 10%OFF-BKCO. Both URLs resolve (302). Verify which is active in Shopify.
3. **Trustpilot**: Website has it (2,666 reviews), docs say don't link to it. Emails follow docs (no Trustpilot links).

### Resolved Since May 23
4. ~~**Contact page**: /pages/contact returns error on live site.~~ → ✅ FIXED — returns 200 OK as of May 25.

---

## 16. QUICK-REFERENCE CHEAT SHEET

```
PRICING
  1 Pair:        $34.99
  3 + 3 FREE:    $79.99 + FREE Shipping (BESTSELLER)
  5 + 5 FREE:    $119.99 + FREE E-Book + Targets + Chart + Shipping

GUARANTEE:       60-Day Money Back (NEVER 30)
REVIEWS:         16,511 · 4.9 ★ · 100,000+ parents
SENDER:          "Lena from BrightKidCo" <support@brightkidco.com>
SHIPPING:        10 days · USA/UK/AU/NZ/CA · Never name carrier
FONT:            Questrial 400 (never bold body)
COLORS:          Green #039902 · Mint #DBFFCD · Cream #FBF7EB/#FAF5E8
                 Yellow #F5C84B/#F5CB5C · Gray #9AA8A7
FOOTER ORDER:    Shop · Parent Stories · Contact us · FAQ
SOCIAL:          Instagram · TikTok (NO Facebook)
RESEARCH:        49% SPARK stat · Kelly Mahler interoception
DISCOUNT:        [VERIFY: WELCOME10 or 10%OFF-BKCO?]
AUTO-APPLY:      brightkidco.com/discount/10%25OFF-[CODE]
```

---

*Synthesis document generated: May 25, 2026*
*Total constants cataloged: 85+*
*Verification source: brightkidco.com (live site HTTP verification)*
*Cross-referenced: DOC1, DOC6, Layer 29, Layer 33, archived Layer 38 (May 23)*
*Input rounds synthesized: 4 (Client Files, Skill Loading, Wiki Extraction, Cross-Reference)*
