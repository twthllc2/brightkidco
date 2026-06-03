# Layer 37 Round 4: Klaviyo Technical Setup — Cross-Reference

**Generated:** 2026-05-25
**Type:** Cross-Reference (R4)
**Source Layer:** Layer 37 (Klaviyo Technical Setup — Client Files)
**Cross-Referenced With:** Layer 8 (Segmentation Mechanics), Layer 16 (Flow Architecture), Layer 36 (Deliverability Infrastructure), Layer 4 (Avatar Levels)

---

## 1. EXECUTIVE SUMMARY

Cross-referencing Layer 37's technical setup spec against Layers 4, 8, 16, and 36 reveals **8 inconsistencies** and **6 gaps** that must be resolved before Klaviyo implementation. The most critical: (1) Layer 37 documents only 9 flow triggers while Layer 16 specifies 25 flows, (2) a discount code mismatch (`10%OFF-BKCO` in L37 vs `WELCOME10` in L4/L8), and (3) Layer 37 omits 6 custom profile properties that Layer 8 defines for advanced segmentation.

---

## 2. PROFILE PROPERTIES CROSS-REFERENCE

### 2.1 Custom Profile Properties — Layer Comparison

| Property | L37 (Setup) | L8 (Segmentation) | L4 (Avatar) | L36 (Deliverability) | Status |
|----------|:-----------:|:------------------:|:-----------:|:--------------------:|:------:|
| `avatar_level` | ✅ defined | ✅ used in routing | ✅ maps to levels | — | CONSISTENT |
| `child_age` | ✅ defined | ✅ age-based calibration | ✅ age ranges per level | — | CONSISTENT |
| `signup_source` | ✅ 3 values | ✅ 4 values (adds "other") | — | — | GAP: L37 missing "other" |
| `welcome_flow_completed` | ✅ defined | ✅ binary gate | — | — | CONSISTENT |
| `last_purchase_pack_size` | ✅ defined | ✅ replenishment targeting | — | — | CONSISTENT |
| `vip_customer` | ✅ defined | ✅ VIP segment | — | — | CONSISTENT |
| `purchase_reason` | ❌ missing | ✅ zero-party data | — | — | GAP: not in L37 |
| `label_sensitive` | ❌ missing | ✅ Sub-Group B | — | — | GAP: not in L37 |
| `rfm_recency` | ❌ missing | ✅ Phase 2+ | — | — | GAP: not in L37 (Phase 2+) |
| `rfm_frequency` | ❌ missing | ✅ Phase 2+ | — | — | GAP: not in L37 (Phase 2+) |
| `rfm_monetary` | ❌ missing | ✅ Phase 2+ | — | — | GAP: not in L37 (Phase 2+) |
| `rfm_persona` | ❌ missing | ✅ Phase 2+ | — | — | GAP: not in L37 (Phase 2+) |

**Summary:** L37 defines 6 properties. L8 defines 11 (6 core + 5 Phase 2+). L37 is missing `purchase_reason`, `label_sensitive`, and all RFM properties. The 6 core properties are consistent across layers. RFM properties are Phase 2+ and may be intentionally excluded from L37's launch spec.

### 2.2 Profile Property → Segmentation Purpose Map

| Property | Segmentation Purpose | Automation Trigger | Flows Affected |
|----------|---------------------|-------------------|----------------|
| `avatar_level` | Primary routing — determines Welcome Flow variant (DOC 2/3/4/5) | Tag applied on pop-up submit | Welcome (4 variants), PP-Extended Education (4 variants), Winback A/B (4 variants), FAQ (4 variants) |
| `child_age` | Age-based content calibration within level | Collected at signup, optional | All level-specific flows (tone adjustment) |
| `signup_source` | Acquisition channel tracking | Set at signup: popup/checkout/referral/other | Campaign attribution, segment filtering |
| `welcome_flow_completed` | Binary gate — unlocks post-welcome flows | Set true on Welcome Flow exit | Blocks re-entry to Welcome; unlocks PP-Extended Education |
| `last_purchase_pack_size` | Replenishment timing + upsell targeting | Set on purchase: 1pair/3+3/5+5 | Replenishment A/B/C, PP-Direct Upsell, cart recovery upsell logic |
| `vip_customer` | High-value segment — VIP content routing | Set after 3+ orders | VIP Flow (Phase 2+), referral eligibility |
| `purchase_reason` | Zero-party data — motivation insight | Post-purchase survey | Content personalization (Phase 2+) |
| `label_sensitive` | Internal flag — no ASD language | Reply detection or Sub-Group B | All flows (content variant selector) |
| `rfm_recency/frequency/monetary` | Predictive segmentation | Quarterly RFM scoring (500+ customers) | All flows (Phase 2+ targeting) |
| `rfm_persona` | RFM-based persona label | Quarterly RFM scoring | Campaign targeting (Phase 2+) |

---

## 3. TAG CROSS-REFERENCE

### 3.1 Avatar Tags — All Layers Consistent

| Tag | L37 | L8 | L16 | L4 | Notes |
|-----|:---:|:--:|:---:|:--:|-------|
| `avatar_level1` | ✅ | ✅ | ✅ | ✅ "Sarah" | Pop-up button 1, DOC 2, 70% hope |
| `avatar_level2` | ✅ | ✅ | ✅ | ✅ "Lisa" | Pop-up button 2, DOC 3, 40% hope |
| `avatar_level3` | ✅ | ✅ | ✅ | ✅ "Maria" | Pop-up button 3, DOC 4, 20% hope |
| `avatar_general` | ✅ | ✅ | ✅ | ✅ Fallback | Pop-up button 4, DOC 5, 50/50 |

**Status:** CONSISTENT across all 4 layers. No discrepancies.

### 3.2 Behavioral Tags — L8 Adds Flow Mapping Details

| Tag | L37 | L8 (Details) | Flow Impact | Exit Condition |
|-----|:---:|:-------------|-------------|----------------|
| `welcome_completed` | ✅ | ✅ Excludes from Welcome, unlocks PP-Extended | Welcome Flow exit gate | `welcome_completed = true` (permanent) |
| `welcome_completed_no_purchase` | ✅ | ✅ Routes to FAQ, enables Winback B | FAQ/Objection Library trigger | Purchase OR 60d inactivity |
| `post_purchase_active` | ✅ | ✅ Referral eligibility at Day 30 | Referral Flow trigger | Engagement degrades |
| `at_risk_no_open` | ✅ | ✅ Routes to PP-Support At-Risk | PP-Support At-Risk trigger | Open detected OR 60d escalation |
| `inactive_60_days` | ✅ | ✅ Routes to Winback A/B | Winback Path A/B trigger | Engagement detected |
| `inactive_120_days` | ✅ | ✅ Routes to Sunset | Sunset Flow trigger | Suppression from active list |

**Status:** CONSISTENT. L8 adds richer flow impact detail but tags are identical.

### 3.3 Purchase Tags — L37 vs L8

| Tag | L37 | L8 | Flow Impact | Upsell Path |
|-----|:---:|:--:|-------------|-------------|
| `buyer_1pair` | ✅ | ✅ | Replenishment A @ Day 14, PP-Direct Upsell | Upgrade to 3+3 |
| `buyer_3plus3` | ✅ | ✅ | Replenishment B @ Day 75, PP-Extended Upsell | Upgrade to 5+5 |
| `buyer_5plus5` | ✅ | ✅ | Replenishment C @ Day 150, VIP consideration | Referral flow |
| `repeat_buyer` | ✅ | ✅ | Cross-level loyalty, excluded from Winback A | VIP track |
| `vip_buyer` | ✅ | ✅ | VIP Flow, highest-tier content | Referral/Loyalty |

**Status:** CONSISTENT across both layers.

### 3.4 Tag → Flow Trigger Verification

Every tag in L37 must have a corresponding flow trigger or segment filter. Verification:

| Tag | Has Flow Trigger in L37? | Has Flow Trigger in L8? | Has Flow Trigger in L16? | Status |
|-----|:------------------------:|:-----------------------:|:------------------------:|:------:|
| `avatar_level1` | ✅ Welcome | ✅ Flow 01 | ✅ Flow 01 | OK |
| `avatar_level2` | ✅ Welcome | ✅ Flow 01 | ✅ Flow 01 | OK |
| `avatar_level3` | ✅ Welcome | ✅ Flow 01 | ✅ Flow 01 | OK |
| `avatar_general` | ✅ Welcome | ✅ Flow 01 | ✅ Flow 01 | OK |
| `welcome_completed` | ❌ not explicit | ✅ segment filter | ✅ gate condition | GAP in L37 |
| `welcome_completed_no_purchase` | ❌ not explicit | ✅ Flow 24 trigger | ✅ Flow 24 | GAP in L37 |
| `post_purchase_active` | ❌ not explicit | ✅ Flow 25 trigger | ✅ Flow 25 | GAP in L37 |
| `at_risk_no_open` | ❌ not explicit | ✅ Flow 16 trigger | ✅ Flow 16 | GAP in L37 |
| `inactive_60_days` | ❌ not explicit | ✅ Winback A/B | ✅ Flows 21/22 | GAP in L37 |
| `inactive_120_days` | ❌ not explicit | ✅ Flow 23 trigger | ✅ Flow 23 | GAP in L37 |
| `buyer_1pair` | ❌ not explicit | ✅ Replenishment A | ✅ Flow 17 | GAP in L37 |
| `buyer_3plus3` | ❌ not explicit | ✅ Replenishment B | ✅ Flow 18 | GAP in L37 |
| `buyer_5plus5` | ❌ not explicit | ✅ Replenishment C | ✅ Flow 19 | GAP in L37 |
| `repeat_buyer` | ❌ not explicit | ✅ loyalty routing | ✅ cross-level | GAP in L37 |
| `vip_buyer` | ❌ not explicit | ✅ VIP Flow | ✅ VIP Flow | GAP in L37 |

**Finding:** L37 only maps avatar tags to flow triggers. All 11 behavioral + purchase tags lack explicit flow trigger documentation in L37, but are fully mapped in L8 and L16.

---

## 4. FLOW TRIGGER CONSISTENCY CHECK

### 4.1 Flow Count Discrepancy

| Source | Flow Count | Notes |
|--------|:----------:|-------|
| L37 (Technical Setup) | 9 triggers, 12 doc-mapped flows | Covers Phase 1 core only |
| L8 (Segmentation) | 25 flows | Complete system |
| L16 (Flow Architecture) | 25 flows, 110+ emails | Complete system with phasing |

**Gap:** L37 documents only 9 of 25 flows. Missing 16 flows across Phase 2 and Phase 3.

### 4.2 Flow Trigger Timing Discrepancies

| Flow | L37 Trigger Timing | L16 Trigger Timing | Status |
|------|-------------------|-------------------|:------:|
| Welcome Flow | Immediate after pop-up | Immediate | ✅ OK |
| Cart Abandonment | **24h after cart abandon** | **1 hour after abandon** | ⚠️ CONFLICT |
| Checkout Abandonment | **1h after checkout start** | **1 hour after checkout** | ✅ OK |
| Browse Abandonment | **24h after product view** | **1-2 hours after view** | ⚠️ CONFLICT |
| Order Confirmation | Immediate | Immediate | ✅ OK |
| Shipping Notification | Immediate on fulfillment | When order ships | ✅ OK |
| Arrived & Welcome | On delivery | On delivery | ✅ OK |
| PP-Direct Upsell | Days 1-3 | Day 1-3 | ✅ OK |
| PP-Level Detection | Day 14 | Day 14 | ✅ OK |

**Critical Conflicts:**
- **Cart Abandonment:** L37 says 24h delay, L16 says 1 hour. L16 is correct (industry standard: first email within 1 hour of abandon).
- **Browse Abandonment:** L37 says 24h delay, L16 says 1-2 hours. L16 is correct (first email within 1-2 hours).

### 4.3 Flows Missing from L37

| # | Flow Name | Phase | L8 Has | L16 Has | L37 Has | Priority |
|---|-----------|:-----:|:------:|:-------:|:-------:|:--------:|
| 04 | Browse Abandonment | P2 | ✅ | ✅ | ❌ | HIGH |
| 07 | Out for Delivery | P1 | ✅ | ✅ | ❌ | LOW (optional) |
| 10 | PP-Mary S. Story | P2 | ✅ | ✅ | ❌ | MEDIUM |
| 11 | PP-Education Day 0-21 | P2 | ✅ | ✅ | ❌ | HIGH |
| 13 | PP-Extended Upsell | P2 | ✅ | ✅ | ❌ | MEDIUM |
| 14 | PP-Mid Check-In | P2 | ✅ | ✅ | ❌ | MEDIUM |
| 15 | PP-Extended Education | P3 | ✅ | ✅ | ❌ | HIGH |
| 16 | PP-Support At-Risk | P3 | ✅ | ✅ | ❌ | HIGH |
| 17 | Replenishment Path A | P2 | ✅ | ✅ | ❌ | HIGH |
| 18 | Replenishment Path B | P2 | ✅ | ✅ | ❌ | HIGH |
| 19 | Replenishment Path C | P2 | ✅ | ✅ | ❌ | HIGH |
| 20 | Review Request | P2 | ✅ | ✅ | ❌ | MEDIUM |
| 21 | Winback Path A | P2 | ✅ | ✅ | ❌ | HIGH |
| 22 | Winback Path B | P3 | ✅ | ✅ | ❌ | HIGH |
| 23 | Sunset Flow | P3 | ✅ | ✅ | ❌ | HIGH |
| 25 | Referral Flow | P3 | ✅ | ✅ | ❌ | LOW |

**Note:** L37 also omits Site Abandonment (L16 Flow — not in L8's 25 count).

### 4.4 Flow Routing: Level-Segmented vs Cross-Level

| Flow | L37 Routing | L8 Routing | L16 Routing | Status |
|------|-------------|------------|-------------|:------:|
| Welcome Flow | 4 level variants ✅ | 4 level variants | 4 level variants (DOC 2/3/4/5) | ✅ OK |
| Cart Abandonment | Cross-level (DOC 5) | Cross-level (speed > segmentation) | Cross-level | ✅ OK |
| Checkout Abandonment | Cross-level (DOC 5) | Cross-level | Cross-level | ✅ OK |
| Browse Abandonment | Cross-level (DOC 5) | Cross-level | Cross-level | ✅ OK |
| Order Confirmation | All (DOC 5) | Cross-level | Cross-level | ✅ OK |
| PP-Level Detection | No level tag (DOC 5) | GF only | Cross-level (asks level) | ✅ OK |
| PP-Extended Education | not in L37 | 4 level variants | 4 level variants | GAP |
| Winback Path A | not in L37 | 4 level variants | 4 level variants | GAP |
| Winback Path B | not in L37 | 4 level variants | 4 level variants | GAP |
| FAQ/Objection Library | not in L37 | Level-specific | Cross-level (DOC 5) | ⚠️ L8 vs L16 conflict |

**Note on FAQ/Objection Library:** L8 says "Level-specific" but L16 says "Cross-level (DOC 5)." L16 is the flow architecture authority — likely means the flow trigger is cross-level but content includes level-specific objection handling.

---

## 5. DELIVERABILITY CROSS-REFERENCE (L37 vs L36)

### 5.1 Sender Configuration — CONSISTENT

| Setting | L37 Value | L36 Value | Status |
|---------|-----------|-----------|:------:|
| From Email | `support@brightkidco.com` | `support@brightkidco.com` | ✅ OK |
| From Name | `Lena from BrightKidCo` | `Lena from BrightKidCo` | ✅ OK |
| Reply-To | `support@brightkidco.com` | `support@brightkidco.com` | ✅ OK |
| Sending Subdomain | `Send.brightkidco.com` | `send.brightkidco.com` | ✅ OK (case difference only) |

### 5.2 Authentication — CONSISTENT

| Protocol | L37 | L36 | Status |
|----------|-----|-----|:------:|
| SPF | "Done" | ✅ `include:_spf-us.ionos.com include:klaviyo.com ~all` | ✅ OK |
| DKIM | "Done" | ✅ Klaviyo-managed (assumed) | ✅ OK |
| DMARC | "Done" | ✅ `p=none` (monitoring mode) | ✅ OK |
| Custom Tracking | not mentioned | ✅ `click.brightkidco.com → dct.klaviyodns.com` | L37 omission |

### 5.3 Domain Warming — L37 MISSING

| Aspect | L37 | L36 | Status |
|--------|-----|-----|:------:|
| Warming plan | "Needs warming" | 6-week detailed plan | GAP: L37 lacks detail |
| Tier classification | not specified | Tier 2 (New/Rewarming) | GAP |
| Pre-warming checklist | not specified | 10 items (ZeroBounce, GPT, segments, etc.) | GAP |
| Weeks 1-2 flow restrictions | not specified | Only 5 flows active (Welcome, Browse, Cart/Checkout, Post-Purchase) | GAP |
| Promotional restrictions | not specified | Weeks 1-2 = zero promo, Weeks 3-4 = mild | GAP |

**Critical:** L37 states "Authentication: Done" but L36 identifies warming as the critical gap. Authentication ≠ warmed. L37's "Done" may create a false sense of readiness.

### 5.4 Discount Code Discrepancy

| Source | Code | Notes |
|--------|------|-------|
| L37 (Technical Setup) | `10%OFF-BKCO` | Manual code + auto-apply link |
| L4 (Avatar Levels) | `WELCOME10` | Auto-apply: `brightkidco.com/discount/10%25OFF-WELCOME` |
| L8 (Segmentation) | `WELCOME10` | Displayed in pop-up Step 2 |

**CONFLICT:** L37 uses `10%OFF-BKCO` while L4 and L8 use `WELCOME10`. These may be two different codes (one for manual entry, one for auto-apply), but the discrepancy must be resolved. If they're the same code, one layer has the wrong name.

### 5.5 Transactional Cloak — L37 MISSING

L36 specifies a "Transactional Cloak" (hidden 300-400 word text block) that must be deployed in EVERY email for deliverability optimization. L37 does not mention this technique. This is a critical implementation detail that must be added to L37's technical spec.

---

## 6. AVATAR LEVEL CROSS-REFERENCE (L37 vs L4)

### 6.1 Avatar Tag Definitions — CONSISTENT

| Tag | L37 Description | L4 Avatar | L4 Hope Level | L4 Child Age | Status |
|-----|----------------|-----------|:-------------:|:------------:|:------:|
| `avatar_level1` | Verbal, 3-5 yrs, "almost trained", Pre-K driven | Sarah | 70% Hope | 3-5 yrs | ✅ OK |
| `avatar_level2` | Mixed verbal, 5-7 yrs, sensory + BCBA | Lisa | 40% Hope | 5-7 yrs | ✅ OK |
| `avatar_level3` | Non-verbal, 6-10+ yrs, dignity-first | Maria | 20% Hope | 6-10+ yrs | ✅ OK |
| `avatar_general` | Cross-level, diagnostic-pending | Fallback | 50/50 | 3-10+ | ✅ OK |

### 6.2 Audience Distribution — CONSISTENT

| Level | L37 | L4 | L8 | Status |
|-------|-----|-----|-----|:------:|
| Level 1 | ~35% | ~35% | ~35% (~17.5% real) | ✅ OK |
| Level 2 | ~40% (LARGEST) | ~40% (LARGEST) | ~40% (~20% real) | ✅ OK |
| Level 3 | ~25% | ~25% | ~25% (~12.5% real) | ✅ OK |
| General | N/A | ~50% real volume | ~50% real volume | ✅ OK |

### 6.3 Conversion Rates — CONSISTENT

| Level | L37 (implied) | L4 | L8 | Status |
|-------|---------------|-----|-----|:------:|
| Level 1 | — | 15-25% | 15-25% | ✅ OK |
| Level 2 | — | 8-15% | 8-15% | ✅ OK |
| Level 3 | — | 4-8% | 4-8% | ✅ OK |
| General | — | 5-10% (variable) | 5-10% | ✅ OK |

---

## 7. CROSS-REFERENCE MATRIX

### 7.1 Full Cross-Reference Matrix: L37 Elements × Layers

| L37 Element | L4 | L8 | L16 | L36 | Overall |
|-------------|:--:|:--:|:---:|:---:|:-------:|
| `avatar_level` property | ✅ | ✅ | ✅ | — | ✅ OK |
| `child_age` property | ✅ | ✅ | — | — | ✅ OK |
| `signup_source` property | — | ⚠️ values | — | — | ⚠️ GAP |
| `welcome_flow_completed` property | — | ✅ | ✅ | — | ✅ OK |
| `last_purchase_pack_size` property | — | ✅ | — | — | ✅ OK |
| `vip_customer` property | — | ✅ | — | — | ✅ OK |
| `avatar_level1` tag | ✅ | ✅ | ✅ | — | ✅ OK |
| `avatar_level2` tag | ✅ | ✅ | ✅ | — | ✅ OK |
| `avatar_level3` tag | ✅ | ✅ | ✅ | — | ✅ OK |
| `avatar_general` tag | ✅ | ✅ | ✅ | — | ✅ OK |
| 6 behavioral tags | — | ✅ | ✅ | — | ✅ OK |
| 5 purchase tags | — | ✅ | ✅ | — | ✅ OK |
| Welcome Flow trigger | ✅ | ✅ | ✅ | ⚠️ warming | ✅ OK |
| Cart Abandonment trigger | — | ⚠️ | ⚠️ timing | — | ⚠️ CONFLICT |
| Checkout Abandonment trigger | — | ✅ | ✅ | — | ✅ OK |
| Browse Abandonment trigger | — | ⚠️ | ⚠️ timing | — | ⚠️ CONFLICT |
| Order Confirmation trigger | — | ✅ | ✅ | — | ✅ OK |
| Shipping trigger | — | ✅ | ✅ | — | ✅ OK |
| Arrived trigger | — | ✅ | ✅ | — | ✅ OK |
| PP-Direct Upsell trigger | — | ✅ | ✅ | — | ✅ OK |
| PP-Level Detection trigger | — | ✅ | ✅ | — | ✅ OK |
| Sender config | — | — | — | ✅ | ✅ OK |
| Authentication | — | — | — | ✅ | ✅ OK |
| Discount code | — | ⚠️ | — | — | ⚠️ CONFLICT |
| Exit conditions (3) | — | ⚠️ | ⚠️ | — | ⚠️ PARTIAL |
| Doc mapping (12 flows) | — | — | ⚠️ | — | ⚠️ INCOMPLETE |
| Flow segmentation type | — | ✅ | ✅ | — | ✅ OK |
| Offer pushing logic | — | — | ✅ | — | ✅ OK |
| A/B testing spec | — | — | — | — | L37 only |
| Transactional Cloak | — | — | — | ⚠️ | GAP in L37 |
| Domain warming plan | — | — | — | ⚠️ | GAP in L37 |

### 7.2 Summary Counts

| Status | Count |
|--------|:-----:|
| ✅ CONSISTENT | 22 |
| ⚠️ GAP or CONFLICT | 8 |
| ❌ MISSING from L37 | 6 profile properties, 16 flows, warming details, cloak |

---

## 8. IDENTIFIED INCONSISTENCIES

### 8.1 Critical Inconsistencies (Must Resolve Before Implementation)

| ID | Issue | Layers Affected | Resolution |
|:--:|-------|:---------------:|------------|
| **I1** | **Discount code mismatch:** L37 = `10%OFF-BKCO`, L4/L8 = `WELCOME10` | L37, L4, L8 | Confirm which code is correct. If both exist, clarify purpose (manual vs auto-apply). If only one, update the wrong layer. |
| **I2** | **Cart Abandonment timing:** L37 = 24h, L16 = 1h | L37, L16 | L16 is correct. Cart abandonment first email should fire within 1 hour. Update L37. |
| **I3** | **Browse Abandonment timing:** L37 = 24h, L16 = 1-2h | L37, L16 | L16 is correct. Browse abandonment first email should fire within 1-2 hours. Update L37. |

### 8.2 Moderate Inconsistencies (Should Resolve)

| ID | Issue | Layers Affected | Resolution |
|:--:|-------|:---------------:|------------|
| **I4** | **L37 documents only 9 of 25 flows** | L37, L8, L16 | L37 is a Round 1 client-file extraction — intentionally limited to what's in client docs. The remaining 16 flows are specified in L8/L16. L37 should reference L16 for complete flow list. |
| **I5** | **Exit conditions:** L37 lists 3 generic; L8/L16 have flow-specific conditions | L37, L8, L16 | L37's 3 conditions are correct but incomplete. Each flow in L16 has specific exit conditions. L37 should note that flow-specific exits are defined in L16. |
| **I6** | **FAQ/Objection Library segmentation:** L8 = level-specific, L16 = cross-level | L8, L16 | Likely: trigger is cross-level, content includes level-specific objection variants. Clarify in L37's doc mapping. |
| **I7** | **Authentication vs Warming:** L37 says "Authentication: Done" implying readiness; L36 shows warming is the critical gap | L37, L36 | Update L37 to explicitly state: "Authentication complete. Domain warming NOT started — 6-week protocol required before promotional sends." |
| **I8** | **`signup_source` values:** L37 = 3 values (popup/checkout/referral), L8 = 4 values (adds "other") | L37, L8 | Add "other" to L37's allowed values list. |

### 8.3 Gaps (Missing from L37)

| ID | Gap | Source Layer | Priority |
|:--:|-----|:----------:|:--------:|
| **G1** | 6 custom profile properties missing (`purchase_reason`, `label_sensitive`, 4 RFM) | L8 | LOW (Phase 2+) |
| **G2** | 16 flows missing from L37's doc mapping | L16 | HIGH |
| **G3** | Domain warming plan not referenced | L36 | CRITICAL |
| **G4** | Transactional Cloak technique not mentioned | L36 | HIGH |
| **G5** | Behavioral tag → flow trigger mapping incomplete | L8 | HIGH |
| **G6** | Purchase tag → flow trigger mapping incomplete | L8 | HIGH |

---

## 9. RECOMMENDATIONS

### 9.1 Immediate Actions (Pre-Implementation)

1. **Resolve discount code conflict (I1):** Confirm `10%OFF-BKCO` vs `WELCOME10`. This affects pop-up, Welcome Flow, and all discount references.
2. **Update abandonment timing (I2, I3):** Cart Abandonment = 1h (not 24h), Browse Abandonment = 1-2h (not 24h).
3. **Add warming reference (G3):** L37 should reference L36's 6-week warming protocol as a prerequisite.
4. **Add Transactional Cloak (G4):** L37's implementation notes must include the hidden text block technique from L36.

### 9.2 Pre-Launch Actions

5. **Complete flow trigger mapping (G5, G6):** Map all 15 tags to their primary, secondary, and tertiary flows using L8's Tag → Flow Assignment table.
6. **Reference L16 for complete flow list (I4):** L37 should note that L16 contains the full 25-flow specification.
7. **Add "other" to signup_source (I8):** Minor value addition.
8. **Clarify warming vs authentication (I7):** Add explicit warming status to L37's technical spec.

### 9.3 Phase 2+ Actions

9. **Add RFM properties (G1):** When 500+ customers exist, add RFM properties to L37's spec.
10. **Add `purchase_reason` and `label_sensitive` (G1):** Zero-party data collection and label-sensitive routing.

---

## 10. DATA QUALITY NOTES

- **L37 source:** Round 1 client file extraction — reflects what's IN the client docs, not the complete system design.
- **L8/L16 source:** Round 5 synthesis — consolidated from multiple rounds plus skill loading and external research.
- **L36 source:** Round 5 synthesis — consolidated deliverability infrastructure with action items.
- **L4 source:** Round 5 synthesis — definitive avatar level definitions.
- **Limitation:** L37 was extracted from 4 client files (DOC6, Onboarding-todos, Claude-PI, overnight-plan). L8/L16/L36 draw from 6+ source files plus external research and skill loading. L37's narrower scope explains most gaps.

---

*Cross-reference complete. 4 layers compared. 8 inconsistencies identified. 6 gaps documented. 22 elements verified consistent. 3 critical issues require resolution before implementation.*
