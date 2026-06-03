# Quality Review: Flow 08 — PP-Direct Upsell & Flow 09 — PP-Level Detection

**Reviewer:** ops4
**Date:** 2026-05-26
**Files Reviewed:**
- flow-08-upsell/email-01-upsell-1.txt (Wash Bag)
- flow-08-upsell/email-01-upsell-1.html
- flow-08-upsell/email-02-upsell-2.txt (5+5 Bundle Upgrade)
- flow-08-upsell/email-02-upsell-2.html
- flow-09-level-detection/email-01-level-detect.txt (Level Segmentation)
- flow-09-level-detection/email-01-level-detect.html

**Reference Documents:**
- 00-design-system-reference.md (Design System v1.0)
- 15-level-messaging-matrix.md (Level-Specific Messaging Matrix)
- 11-brand-voice-reference.md (Brand Voice Reference)

---

## Flow 08: PP-Direct Upsell (2 Emails)

### Overview

Post-purchase upsell sequence targeting customers immediately after their first order. Two-email series offering complementary products: (1) Wash Bag accessory — Day 1, (2) 5+5 Bundle upgrade — Day 3.

### Email 1 — Wash Bag ($12.99) — Day 1

| Dimension | Status | Notes |
|-----------|--------|-------|
| Copy Quality | ✅ PASS | Clear, benefit-driven. Explains *why* the Wash Bag matters (preserves the learning layer). Lena's soft sign-off reduces pressure. |
| Subject Lines | ✅ PASS | Good variety: curiosity (#1 thing), social proof (73%), benefit (last longer). |
| Social Proof | ✅ PASS | Parent testimonial from Sarah C. — specific, believable ("even after 20+ washes"). |
| CTA | ✅ PASS | Primary button visible, price anchored, 60-day guarantee tied in. |
| Lena Voice | ✅ PASS | "I know adding another purchase can feel like decision fatigue" — authentic, empathetic. |
| Klaviyo Setup | ✅ PASS | Tag `upsell_wash_bag_sent`, dynamic `add_wash_bag_url`, Day 1 trigger after order placed. |
| Pricing | ✅ PASS | $12.99 — low-friction add-on. No price anchoring needed. |
| Guarantee | ✅ PASS | 60-Day Calm Progress Guarantee extended to accessory. Lowers purchase risk. |

**Issues Found:**

1. **CTA Color Mismatch (#A65D2A) vs Design System (#039902 brand green)**
   The HTML uses `#A65D2A` (orange-brown) for the button `btn` class. The design system reference specifies Brand Green `#039902` for all primary CTAs. If this is a deliberate choice to match Giuliano's prototype teal palette, it needs to be documented. Currently neither the teal palette nor the brand green palette use `#A65D2A`.

2. **Header Color #2D5A6D — missing from design system palette**
   The header background `#2D5A6D` (deep blue-teal) isn't listed in either the primary brand palette (Section 1.1) or Giuliano's palette (Section 1.2). It falls between Teal Deep `#1E8A8F` and Teal `#2BAEB4`. If this is an intentional header color, it should be added to the design system.

3. **Font stack (-apple-system) vs Questrial**
   The HTML uses `-apple-system, BlinkMacSystemFont, ...` as the font-family. The level messaging matrix and design system specify **Questrial weight 400** as the brand font. Questrial should be loaded via @import or @font-face and set as the primary font.

4. **No conditional routing if Wash Bag already purchased**
   If the customer already added the Wash Bag during checkout, this email still sends. Flow entry should check `property:has_purchased_wash_bag = false`. Currently no suppression logic is documented.

### Email 2 — 5+5 Bundle Upgrade ($119.99) — Day 3

| Dimension | Status | Notes |
|-----------|--------|-------|
| Copy Quality | ✅ PASS | Social proof bar at top (16,511 reviews, 4.9★). Comparison table clearly shows value. Testimonial from Amanda T. is specific. |
| Subject Lines | ✅ PASS | Three distinct angles: bundle naming, parent behavior, coverage benefit. |
| Comparison Table | ✅ PASS | Side-by-side feature comparison. Mobile-friendly. `current_pack_size` and `current_ppp` dynamic fields from Shopify. |
| CTA | ✅ PASS | "Upgrade to 5+5 — $119.99" visible, guarantee re-stated. |
| Social Proof | ✅ PASS | Star count, rating, families helped — all brand constants correct. |
| Klaviyo Setup | ✅ PASS | Tag `upsell_5plus5_sent`, Day 3 trigger, dynamic fields for personalization. |
| Guarantee | ✅ PASS | Extended to upgrade purchase. |
| Value Proposition | ✅ PASS | $11.99/pair vs [current_ppp], less laundry, overnight coverage, daycare ready. |

**Issues Found:**

1. **Same color/font issues as Email 1** — CTA (#A65D2A), header (#2D5A6D), font stack.

2. **Per-pair price math: "$12.99/pair in the 3+3 bundle"**
   The copy states: "$119.99 ($11.99/pair) — vs. $12.99/pair in the 3+3 bundle". The brand constants say "3+3 FREE $79.99 (BESTSELLER)". If 3+3 = 6 pairs at $79.99, the per-pair price is $13.33/pair, not $12.99. If the 3+3 bundle is actually 6 pairs at $77.94 (6 × $12.99), this needs to be reconciled with the stated $79.99 price. Verify actual bundle pricing with Shopify before going live.

3. **No conditional suppression after Email 1 conversion**
   If the customer purchased via Email 1 (Wash Bag), Email 2 still fires 2 days later. This is acceptable since they're different products, but worth noting. If the customer converts on Email 2 (buys the bundle), consider whether Email 1 should have already been suppressed. Sequence logic should handle both independently.

4. **Variable `current_pack_size` may not exist for first-time customers**
   The comparison table references `[current_pack_size]` and `[current_ppp]`. For a first-time buyer who chose a single pair ($34.99) or 3+3 ($79.99), this is fine. But if someone bought just 1 pair ($34.99), the "Your Current Pack" row shows "1 pair" and the price per pair anchors at $34.99 — which actually makes the 5+5 deal look *even better* ($11.99 vs $34.99). Edge case worth testing in Klaviyo preview.

### Flow 08 — Architectural Assessment

| Aspect | Status | Notes |
|--------|--------|-------|
| Timing | ✅ GOOD | Day 1 (Wash Bag) → Day 3 (Bundle). 2-day gap prevents fatigue. |
| Sequencing | ✅ GOOD | Lower-price offer first (low friction), higher-value offer second (higher consideration). Classic upsell structure. |
| Tagging | ⚠️ ADEQUATE | Simple pass/fail tracking. No suppression on purchase — if customer buys bundle, Wash Bag could still land. Needs conditional logic. |
| Order Independence | ⚠️ MINOR | Both emails fire independently. If a customer buys both products immediately in the original order, neither email is suppressed. |
| Cross-sell Logic | ❌ MISSING | No logic to suppress Wash Bag email if the customer's order already includes a Wash Bag. |
| Mobile Rendering | ✅ GOOD | Responsive padding, stackable tables, reasonable tap targets. |

---

## Flow 09: PP-Level Detection (1 Email)

### Overview

Single-email segmentation flow that asks parents to self-select their child's profile level (L1/L2/L3/General). Fires at Day 14 post-purchase for customers still tagged `avatar_general`. 4 unique click URLs route into tagged segments.

### Email 1 — Level Detection — Day 14

| Dimension | Status | Notes |
|-----------|--------|-------|
| Copy Quality | ✅ PASS | Warm, low-pressure. "Quick question about your kid" — feels personal. Privacy reassurance included. |
| Subject Lines | ✅ PASS | All three are casual, non-technical. "Quick question about your kid" is the strongest — creates curiosity. |
| Level Options | ✅ PASS | Four options cover all avatar levels accurately: Talks about potty (L1), Sensory issues (L2), Non-verbal/high support (L3), Still figuring it out (General). |
| Option Descriptions | ✅ PASS | Each description is 1-2 sentences, plain language, non-judgmental. |
| Fallback Option | ✅ PASS | "Still figuring it out" — normalizes uncertainty. Lowers cognitive load. |
| Privacy Note | ✅ PASS | Clear statement that data is used only for personalization. |
| Klaviyo Routing | ✅ PASS | 4 unique URLs with query params. Tag assignment: set `avatar_levelN`, remove `avatar_general`. |
| Lena Voice | ✅ PASS | Friendly, not clinical. Aligns with brand voice. |
| Mobile Design | ✅ PASS | Full-width buttons, 500px container, responsive. Easy tap targets (18px padding). |

**Issues Found:**

1. **Tag cleanup only removes `avatar_general`**
   When a parent selects L2 after previously having L1, the tag flow only removes `avatar_general` and sets `avatar_level2`. But `avatar_level1` would remain as a stale tag. Consider: when setting any level tag, remove all other level tags to prevent tag accumulation. Currently the email says "remove avatar_general" but doesn't mention removing other level tags.

2. **Expected click rate 35-50% is optimistic**
   The Klaviyo notes state "Expected click: 35-50% | Expected migration: 40-50%". Survey-type emails with 4 choices typically achieve 20-30% CTR for a warm post-purchase audience. 35-50% is achievable for a highly engaged list but should be benchmarked after 1,000 sends and adjusted. Flag for monitoring.

3. **Container width: 500px vs brand standard 600px**
   This email uses `max-width: 500px` while Flow 08 uses `max-width: 600px`. If the narrower width is intentional (easier to read choice buttons), it should be documented as a pattern for survey/interactive emails. Otherwise, standardize to 600px for brand consistency.

4. **`avatar_general` tag as flow entry filter misses edge cases**
   Flow trigger is "Order Placed + Day 14 + avatar_general tag". If a customer had `avatar_level1` but then a support agent manually removed it (leaving no level tag), they wouldn't enter this flow. Consider adding supplementary entry criteria: `avatar_general` OR (no avatar_* tag at all). This catches customers who slipped through without any tagging.

5. **Query parameter security**
   The click URLs pass `?level=1`, `?level=2`, `?level=3`, `?level=general` as open query params. In production, these should be routed through Klaviyo's dynamic URL system or signed to prevent tampering. A bad actor could modify the URL to assign an incorrect level tag. Low-risk for email (hard to intercept), but worth noting.

### Flow 09 — Architectural Assessment

| Aspect | Status | Notes |
|--------|--------|-------|
| Timing | ✅ GOOD | Day 14 — enough time for the parent to form an opinion about the product, but early enough to guide future communications. |
| Trigger | ✅ GOOD | Only for `avatar_general` tag — avoids re-surveying already-segmented customers. |
| Fallback | ✅ GOOD | Day 21 reminder if no click. If still no response, remain `avatar_general` permanently. |
| Segment Scope | ✅ GOOD | Covers all 4 avatar profiles in a single email. No flow branching needed at this stage. |
| Onboarding UX | ✅ GOOD | "One click — no wrong answers" — extremely low friction. |
| Data Collection | ✅ GOOD | Will build level-specific segments for personalized future flows. |
| Reminder Logic | ✅ GOOD | 7-day gap before reminder is generous. Avoids nagging. |

**Potential Enhancement: Post-selection thank-you/confirmation page**
After clicking, the parent lands on a URL that sets the tag but has no follow-up. Consider routing to a confirmation page that says "Thanks! We'll tailor our emails from here." This improves completion perception and could include a next-step CTA (e.g., "Read about [level]-specific tips").

---

## Cross-Flow Observations

### Color Palette Inconsistency

Both flows use colors that don't match the Design System Reference (Section 1.1 — Brand Constants):

| Element | Flow 08/09 HTML | Design System Spec | Delta |
|---------|----------------|-------------------|-------|
| Header BG | `#2D5A6D` (deep blue-teal) | #039902 (brand green) or #2BAEB4 (Giuliano's teal) | Unspecified color |
| CTA Button | `#A65D2A` (orange-brown) | #039902 (brand green) | Wrong color |
| Container BG | `#ffffff` | #FBF7EB (cream) or #FAF9F7 (off-white) | Minor — white is safe for email |
| Body Text | `#333333` | #1A1A1A (dark text) | Close but not exact |

**Recommendation:** Audit all prototype emails against the design system and either (a) normalize to brand green/mint/cream palette, (b) confirm Giuliano's teal palette as canonical, or (c) document deviations as intentional exceptions with rationale.

### Font Stack

All emails use `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...` system fonts. The level messaging matrix and design system specify **Questrial weight 400** as the brand font, used in Giuliano's React prototypes. Questrial is a Google Font — include `@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap')` in the `<style>` block and set `font-family: 'Questrial', sans-serif` on body.

### Klaviyo Tag Architecture

| Tag | Flow | Used In | Purpose |
|-----|------|---------|---------|
| `upsell_wash_bag_sent` | 08 | E1 | Tracking — no conditional logic |
| `upsell_5plus5_sent` | 08 | E2 | Tracking — no conditional logic |
| `avatar_general` | 09 | Entry filter + cleanup | Segment gate — removed on selection |
| `avatar_level1/2/3` | 09 | Set on click | Segment assignment |

**Gap:** Flow 08 has no purchase-suppression tags. If someone already owns a Wash Bag or the 5+5 bundle, the email should not send. Add `has_purchased_wash_bag` and `has_purchased_bundle` profile properties as flow suppression criteria.

---

## Verdict Summary

| Flow | Verdict | Next Action |
|------|---------|-------------|
| Flow 08 (Upsell) | **CONDITIONAL PASS** | Fix color palette to match canonical design system. Add purchase-suppression logic. Verify bundle pricing ($12.99/pair math). Standardize font to Questrial. |
| Flow 09 (Level Detection) | **PASS with minor notes** | Widen container to 600px or document 500px exception. Add cross-level tag cleanup. Monitor CTR against 35-50% benchmark. Consider confirmation page after selection. |

### Priority Fixes Before Production

1. **P0 — Color palette normalization**: Resolve discrepancy between brand green (#039902), Giuliano's teal (#2BAEB4), and the custom colors used in these prototypes (#2D5A6D headers, #A65D2A CTAs). Pick one palette system and apply consistently across all 27 flows.

2. **P0 — Font standardization**: Add Questrial as the brand font across all HTML templates.

3. **P1 — Bundle pricing verification**: Confirm the 3+3 bundle price ($79.99) and per-pair calculation with Shopify data. Fix "$12.99/pair" claim if inaccurate.

4. **P1 — Purchase-suppression for Flow 08**: Add suppression logic so upsell emails don't fire if the product is already in the customer's order.

5. **P2 — Cross-level tag cleanup for Flow 09**: When setting `avatar_levelN`, remove all other `avatar_*` tags to prevent stale state accumulation.

6. **P2 — Container width consistency**: Standardize email width to 600px (or document exceptions per email type).

7. **P3 — CTR benchmark monitoring**: Track actual click rates for Flow 09 Level Detection vs the predicted 35-50%. Adjust expectations after 500-1,000 sends.
