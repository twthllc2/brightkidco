# Layer 16 Round 4: Flow Architecture — Cross-Reference

## BrightKidCo Email Ecosystem
**Generated:** 2026-05-25
**Cross-references:** Layer 8 (Segmentation Mechanics), Layer 14 (Frequency & Wording), Layer 15 (Offers), Layer 17 (Tonality — NOT YET PRODUCED)
**Input files:** L16 R1 (Client Files), L16 R2 (Skill Loading), L16 R3 (Wiki Extraction)

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Cross-Reference Methodology](#2-cross-reference-methodology)
3. [Flow-by-Flow Cross-Reference (25 Flows)](#3-flow-by-flow-cross-reference)
4. [Layer 8 Segmentation Connections](#4-layer-8-segmentation-connections)
5. [Layer 14 Frequency Alignment](#5-layer-14-frequency-alignment)
6. [Layer 15 Offer Placement Mapping](#6-layer-15-offer-placement-mapping)
7. [Layer 17 Tonality Stage Alignment](#7-layer-17-tonality-stage-alignment)
8. [Gap & Contradiction Analysis](#8-gap--contradiction-analysis)
9. [Summary Matrix](#9-summary-matrix)

---

## 1. EXECUTIVE SUMMARY

This cross-reference maps all 25 BrightKidCo flows against 4 diagnostic layers. Key findings:

- **Layer 8 (Segmentation):** 18 of 25 flows are cross-level (DOC5); 7 are level-specific (4 variants each). The routing logic is well-defined but has a critical gap: ~50% of real subscribers (General Fallback) receive generic content in most flows.
- **Layer 14 (Frequency):** The 6-stage emotional curve (per-ad) and 4 emotional phases (buyer journey) create a dual frequency system. Flow stage tonality rules from L14 map cleanly to L16 flow stages, but the frequency decay across multi-email sequences is undocumented.
- **Layer 15 (Offers):** The 3+3 Bundle dominates as primary offer in 10 of 16 Level×Phase cells. Offer placement within flows is partially documented — cart recovery has the clearest sequencing, while post-purchase upsell timing needs optimization.
- **Layer 17 (Tonality):** FILE NOT PRODUCED. L14 contains tonality rules that L17 would presumably synthesize. This cross-reference uses L14's tonality data as a proxy.

**Critical gaps:** No level-aware variants for Cart/Checkout/Browse flows (L8 R4 identifies this as a +20-30% lift opportunity). Offer sequencing within flows is inferred, not explicitly mapped. The post-purchase Day 7-10 window (60-70% open rate) is underutilized for upsell.

---

## 2. CROSS-REFERENCE METHODOLOGY

Each flow is evaluated on 4 dimensions:

| Dimension | Source Layer | What It Answers |
|-----------|-------------|-----------------|
| Segmentation | L8 | Which avatar level gets which flow variant? |
| Frequency/Tone | L14 | What tonality applies at each flow stage? |
| Offer Placement | L15 | Which offer appears at which email position? |
| Tonality Calibration | L17 | How does hope/realism ratio map per flow stage? |

**Rating scale:** ✅ Well-covered | ⚠️ Partially covered | ❌ Gap/missing | 🔄 Inferred (not explicit)

---

## 3. FLOW-BY-FLOW CROSS-REFERENCE (25 Flows)

### PHASE 1: LAUNCH-READY (Months 1-2) — 9 Flows

---

#### Flow 01: Welcome Flow (8 emails × 4 level variants = 32 total)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | 4 level variants: L1 (DOC2, 15-25% conv), L2 (DOC3, 8-15%), L3 (DOC4, 4-8%), GF (DOC5, 5-10%). Tag from pop-up determines variant. Exit: `welcome_completed = true`. | ✅ |
| **L14 Frequency** | Maps to "Pre-Purchase" flow stage tonality: Education + Soft Conversion, mechanism-led, peer-to-peer, "calm, confident, we're not in a hurry." L14 §4. Hope calibration: L1=70/30, L2=40/60, L3=20/80, GF=50/50 (L14 §5). Lena voice formula: observation → validation → mechanism → permission (L14 §9). | ✅ |
| **L15 Offers** | E1: WELCOME10 code delivery. E3: "Last day" + 60-day guarantee push. Default offer = 3+3 Bundle (BESTSELLER) for L1/L2/GF. L3 = 1 Pair only. Math reframe OK for L1/GF, NEVER for L3 (L15 §7). Cart recovery logic if subscriber adds to cart during flow. | ✅ |
| **L17 Tonality** | NOT PRODUCED. Proxy from L14: L1 welcome = high hope + gentle urgency (Pre-K framing). L2 = science-first + validation. L3 = dignity-first + permission. GF = 50/50 universal hooks with migration anchors. | ❌ |

**Key cross-layer insights:**
- L8 identifies Welcome Flow as HIGHEST priority — all subscribers enter here first.
- L14 Gap 7 (frequency decay across sequences) directly affects this flow: how does the 6-stage curve map across 8 emails? Undocumented.
- L15 confirms 3+3 Bundle as primary offer; L8 conversion probabilities (15-25% L1) validate this.
- Migration anchors embedded in GF variant (L8 §7.3): Day 1, 3, 7 click-based migration to level-specific.

**Contradiction:** L16 R1 says 8 emails over 21 days. L14 §7.4 (industry template) says 7 emails over 14 days. BrightKidCo's extended timeline (21 days) is appropriate for the audience's longer decision cycle.

---

#### Flow 02: Cart Abandonment Flow (3 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5) always — even if tag known. Speed > segmentation for high-velocity flows. Exit: purchase or unsubscribe. | ✅ |
| **L14 Frequency** | Maps to "Conversion Moment" stage: Friendly Reminder + Permission Not To Buy, "If today isn't right, that's a real answer," decision-respect. L14 §4. Subject line: casual/question-based variants (L16 R2 §A/B Testing). | ✅ |
| **L15 Offers** | E1 (1h): Same offer as cart + mechanism reminder. E2 (Day 1): Upgrade offer (1→3+3, 3+3→5+5) + math reframe. E3 (Day 3): Original offer + 60-day guarantee emphasis. Recovery rates: 15-20% / 8-12% / 5-8% (L15 §5). | ✅ |
| **L17 Tonality** | NOT PRODUCED. Proxy: Conversion levers apply — L1 (sensory gap), L2 (pull-ups worse), L3 (60-day guarantee). Lever 3 = universal across all levels (L8 §10.5). | ❌ |

**Key cross-layer insights:**
- L8 C1 conflict: Cart Abandonment could be level-aware for +20-30% L1 lift. Currently cross-level only.
- L15 objection mapping: D1 ("tried everything") → Cart E2, D2 ("maybe I'm the problem") → Cart E1.
- L14 forbidden phrases apply: NEVER "easy," "simple," "guaranteed results" in recovery copy.
- L8 conversion probabilities: L1 cart recovery = 10-15%, L2 = 5-10%, L3 = 3-5%.

**Gap:** No level-aware cart recovery variants exist. L8 R4 recommends creating 3 variants (L1: Pre-K urgency, L2: Mechanism reminder, L3: Dignity-first). Expected lift: +20-30% L1, +10-15% L2.

---

#### Flow 03: Checkout Abandonment Flow (2 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Higher intent than cart — softer touch. Exit: purchase within 1h. | ✅ |
| **L14 Frequency** | "Conversion Moment" stage. Softer than cart (higher intent = less pressure needed). Permission framing. | ✅ |
| **L15 Offers** | E1 (1h): Gentle reminder. E2 (Day 1): Objection D3 ("What if hopes up again") address. 60-day guarantee is primary lever. | ⚠️ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

**Gap:** L15 offer sequencing for checkout abandonment is less detailed than cart. The 8-email cadence in L16 R2 (skill standard) conflicts with BrightKidCo's 2-email design. BrightKidCo's 2-email approach is correct for the audience — less aggressive = better for autism parents.

---

#### Flow 04: Browse Abandonment Flow (3 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Exit: cart created, purchase, or unsubscribe. L8 conversion: L1 5-8%, L2 3-5%, L3 — (too low). | ✅ |
| **L14 Frequency** | Maps to "Pre-Purchase" stage: Education + Soft Conversion. L14 §7.4 browse cadence: 1h reminder, 24h trust building, 48h social proof. | ✅ |
| **L15 Offers** | No discount in browse abandonment (L16 R3). Risk reversals: free shipping, 60-day guarantee, secure checkout. L15 confirms guarantee as universal lubricant. | ⚠️ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

**Note:** L16 R1 places Browse Abandonment in Phase 2, not Phase 1. L8 §5.2 confirms P2 placement. Implementation order: after Cart/Checkout.

---

#### Flow 05: Order Confirmation Flow (1 email)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Transactional — no exit condition. | ✅ |
| **L14 Frequency** | "Transactional" stage: Warm + Functional, direct, informative, branded, "professional but human." L14 §4. | ✅ |
| **L15 Offers** | Cross-sell block included. L15 §6: Order Confirmation includes cross-sell. Soft — not aggressive. | ⚠️ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

---

#### Flow 06: Shipping Notification Flow (1 email)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Transactional. | ✅ |
| **L14 Frequency** | "Transactional" stage: Warm + Functional. | ✅ |
| **L15 Offers** | None specified. | ⚠️ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

---

#### Flow 07: Out for Delivery Flow (1 email, optional)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Transactional, optional. | ✅ |
| **L14 Frequency** | "Transactional" stage. Anticipation-building. | ✅ |
| **L15 Offers** | None specified. | ⚠️ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

**Note:** Marked optional in L16 R1. Low priority — can be implemented last in Phase 1.

---

#### Flow 08: Arrived & Welcome Flow (1 email)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Transactional with upsell. Emotional state: "Anticipation peak." Tipping point: "Open box together" — sensory prep. | ✅ |
| **L14 Frequency** | "Post-Purchase Early" stage: Warm + Reassurance + Education, "Here's what to expect," "Welcome to the family." L14 §4. | ✅ |
| **L15 Offers** | "Massive upsell" moment. L15 §6: Arrived & Welcome = Day 7-10, 60-70% open rate. Best upsell window in entire journey. Target: 3+3 for 1-pair buyers, 5+5 for 3+3 buyers. | ✅ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

**Key insight:** L15 identifies this as THE highest-opportunity upsell moment. L14 post-purchase benchmarks confirm 45-55% open rate (top quartile: 60-70%). This single email should be heavily optimized with level-aware offer logic.

---

#### Flow 09: Post-Purchase Direct Upsell Flow (2 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Social proof: "73% of parents add these." | ✅ |
| **L14 Frequency** | "Post-Purchase Early" stage (Day 1-3): Warm + Reassurance. | ✅ |
| **L15 Offers** | E1 (Day 1): Wash Bag. E2 (Day 3): Mattress Protector. Upsell logic: 1-pair→3+3, 3+3→5+5, 5+5→accessories (L15 §6). L3: "Add alongside" framing only. | ✅ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

---

### PHASE 2: HIGH-VALUE (Months 3-4) — 8 Flows

---

#### Flow 10: Post-Purchase Mary S. Story Flow (1 email)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Mary S. (Founder) voice — NOT Lena. Only place founder voice appears. | ✅ |
| **L14 Frequency** | "Post-Purchase Early" stage. Lena voice formula does NOT apply here (different voice). Mary S. = founder authenticity. | ⚠️ |
| **L15 Offers** | No direct offer. Brand-building. | ✅ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

**Note:** L14 §9 Lena voice rules explicitly do NOT apply to Mary S. emails. Separate tonality needed.

---

#### Flow 11: Post-Purchase Education Day 0-21 Flow (4 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Education-first while level uncertain. Emotional state journey: Day 0-7 (hoping, vulnerable) → Day 7-21 (progress or frustration). | ✅ |
| **L14 Frequency** | "Post-Purchase Mid" stage (Day 14-60): Realistic + Patient + "It's normal," "Week 1 plateau is real. Hold the line.," coach + cheerleader. L14 §4. | ✅ |
| **L15 Offers** | No direct offer — education focused. But L15 §6 notes Day 7-10 as best upsell window (60-70% open rate). Potential conflict: education emails during peak upsell window. | ⚠️ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

**Cross-layer tension:** L14 says post-purchase = education + patience. L15 says Day 7-10 = best upsell moment. Resolution: Education emails should include soft cross-sell blocks (not primary CTA), while the dedicated upsell flows (Flow 09) handle aggressive conversion.

---

#### Flow 12: Post-Purchase Level-Detection Mail (1 email)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level — targets GF subscribers only. Day 14 trigger. 4 re-selection buttons → migration to level-specific. Expected: 65-75% open rate, 35-50% click rate, 40-50% migration rate (L8 §8.5). | ✅ |
| **L14 Frequency** | "Post-Purchase Mid" stage. Gentle, non-pressuring. "Quick question about your kid" subject. | ✅ |
| **L15 Offers** | No direct offer. Migration-focused. But migration unlocks level-specific offers in subsequent flows. | ✅ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

**Critical flow:** This is the STRONGEST migration path (L8 §8.1, Path 3). 40-50% of GF purchasers re-select here. Unlocks level-specific flows for downstream.

---

#### Flow 13: Post-Purchase Extended Upsell Flow (3 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Level-aware (uses level tag). Day 28 trigger. | ✅ |
| **L14 Frequency** | "Post-Purchase Mid" stage: Realistic + Patient. Level-specific tonality applies. | ✅ |
| **L15 Offers** | Level-aware offer logic. L1: urgency OK, 3+3 or 5+5. L2: science-first, 3+3 or 5+5 (BCBA framing). L3: 1 Pair → 3+3 ONLY after trust, NEVER 5+5. GF: 3+3 default. | ✅ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

---

#### Flow 14: Post-Purchase Mid Check-In Flow (3 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Day 30-60. Emotional state: "Trust building or considering refund." Tipping point: level-specific support kicks in. | ✅ |
| **L14 Frequency** | "Post-Purchase Mid" stage: Realistic + Patient. "It's normal." Coach + cheerleader tone. | ✅ |
| **L15 Offers** | No direct offer. Engagement/coaching focused. But 60-day guarantee window is relevant — if customer considering refund, this flow must address that. | ⚠️ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

**Cross-layer insight:** L15 §4 guarantee: 60-day, less than 1% use it. This flow runs during the guarantee window (Day 30-60). Content should reinforce satisfaction without being defensive about refunds.

---

#### Flow 15: Replenishment Path A — 1-Pair Buyer (3 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Trigger: 1-pair order + Day 14. Target: upgrade to 3+3. | ✅ |
| **L14 Frequency** | "Lifecycle" stage: Respectful Re-engagement, "How are you doing?," genuinely curious, low-pressure. L14 §4. | ✅ |
| **L15 Offers** | Primary offer: 3+3 Bundle. Framing: "Most parents need more for full training." L3-specific: "Add alongside" — never "switch to." L15 §6. | ✅ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

---

#### Flow 16: Replenishment Path B — 3+3 Buyer (2 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Trigger: 3+3 order + Day 75. Target: upgrade to 5+5. | ✅ |
| **L14 Frequency** | "Lifecycle" stage. Respectful re-engagement. | ✅ |
| **L15 Offers** | Primary: 5+5 Bundle. Framing: "Complete training kit" with value math. L2-specific: "complements your BCBA program." L15 §6, §8. | ✅ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

**Note:** L15 §8 identifies 5+5 as underutilized. Only primary in 1 of 16 cells (L2 × P3). L2-specific framing could unlock this.

---

#### Flow 17: Replenishment Path C — 5+5 Buyer (2 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Trigger: 5+5 order + Day 150. Target: accessories (Wash Bag, Mattress Protector). | ✅ |
| **L14 Frequency** | "Lifecycle" stage. Respectful re-engagement. | ✅ |
| **L15 Offers** | Accessories cross-sell. Wash Bag, Mattress Protector. L15 §6. | ✅ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

---

#### Flow 18: Review Request Flow (2 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Day 30 trigger. Exit: review submitted. | ✅ |
| **L14 Frequency** | "Post-Purchase Mid" stage. Gratitude + gentle ask. L14 §7.4: review request at Day 7-14 (industry) vs. Day 30 (BrightKidCo). | ⚠️ |
| **L15 Offers** | No direct offer. Social proof generation. L15 §12 trust signals: 16,511 reviews · 4.9★. | ✅ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

**Timing discrepancy:** L14 industry standard says Day 7-14 for review request. BrightKidCo uses Day 30. The longer window is appropriate — autism parents need more time to see results before reviewing.

---

### PHASE 3: NICE-TO-HAVE (Months 5-6) — 8 Flows

---

#### Flow 19: Winback Path A — Post-Buyer Inactive (3 emails × 4 level variants)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | 4 level variants. Trigger: last purchase + 90 days no engagement. L8 conversion: L1 2-3%, L2 2-4%, L3 3-5% (L3 has highest winback rate — long decision cycle). | ✅ |
| **L14 Frequency** | "Lifecycle" stage: Respectful Re-engagement. "How are you doing?" / "Whichever path you take." L14 §4. L14 §7.4 winback cadence: 3-4 emails over 2-3 weeks, escalating urgency. | ✅ |
| **L15 Offers** | Level-specific. L1: urgency OK. L2: science-first. L3: dignity-first, NEVER urgency. GF: universal. L15 §8. | ✅ |
| **L17 Tonality** | NOT PRODUCED. Proxy: L14 §5 hope calibration applies per level variant. | ❌ |

**Cross-layer insight:** L8 §13.2 C4 conflict: avatar tags may be stale at winback trigger. L8 recommends time-decay: if tag > 6 months, send level re-assessment first.

---

#### Flow 20: Post-Purchase Extended Education Flow (5 emails × 4 level variants)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | 4 level variants. Trigger: level tag activated + Day 22. Level-specific content. L8 conversion: L1 5-10%, L2 4-8%, L3 3-5%. | ✅ |
| **L14 Frequency** | "Post-Purchase Mid" stage. Level-specific tonality: L1 = hope-heavy + Pre-K framing. L2 = science-first + BCBA respect. L3 = dignity-first + gentle timeline. | ✅ |
| **L15 Offers** | Level-specific offers. L1: 3+3 or 5+5. L2: 3+3 (BCBA framing). L3: 1 Pair → 3+3 ONLY. L15 §8. | ✅ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

---

#### Flow 21: Post-Purchase Support At-Risk Flow (4 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Trigger: Day 3-7 no opens. Tag: `at_risk_no_open`. L8 conversion: 2-4%. | ✅ |
| **L14 Frequency** | Transition from "Post-Purchase Early" to concern. Gentle check-in, not aggressive. | ⚠️ |
| **L15 Offers** | No direct offer. Re-engagement focused. | ⚠️ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

**Gap:** L14 doesn't have a specific tonality stage for "at-risk" re-engagement within post-purchase. The "Lifecycle" stage (respectful re-engagement) is the closest match but designed for 90+ day lapses, not 3-7 day no-opens.

---

#### Flow 22: Winback Path B — Subscriber Never-Bought (3 emails × 4 level variants)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | 4 level variants. Trigger: signup + 60 days no purchase. L8 conversion: 2-4%. | ✅ |
| **L14 Frequency** | "Pre-Purchase" stage but with elevated skepticism. L14 §3 Phase 3-4 tonality: "Hard-sell is POISON, science-first." | ✅ |
| **L15 Offers** | Level-specific. L1: 3+3 with urgency. L2: 3+3 with mechanism. L3: 1 Pair, permission-based. GF: 3+3 default. | ✅ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

---

#### Flow 23: Sunset Flow (2 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Trigger: 120 days inactive. Final 2 mails then suppression. L8 conversion: <1%. | ✅ |
| **L14 Frequency** | "Lifecycle" stage: Respectful Re-engagement. L14 §7.4: "We miss you" → "Should we take a break?" → suppress. | ✅ |
| **L15 Offers** | No offer. List hygiene, not revenue. L16 R3 confirms: "Sunset Flow = List Hygiene, Not Revenue." | ✅ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

**L8 §13.3 G6 gap:** No level-specific sunset variants. L8 recommends: L3 variant = "We honor your journey," L1 variant = "If things change, we're here."

---

#### Flow 24: FAQ/Objection Library Flow (6 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Level-specific (4 variants). Trigger: welcome done + no purchase. Tag: `welcome_completed_no_purchase`. L8 conversion: L2 best (4-8%). | ✅ |
| **L14 Frequency** | "Pre-Purchase" stage with high skepticism. L14 §3 Phase 3 tonality: science-first, mechanism specificity, "Try-and-judge" framing, permission-not-to-buy. 11 objections mapped (L16 R1). | ✅ |
| **L15 Offers** | 3+3 Bundle as primary across all levels. L2-specific: "Complete training kit that complements your BCBA program." 60-day guarantee as risk reverser. | ✅ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

**Cross-layer insight:** L14 §11 conversion levers map directly to FAQ objections:
- D1 ("tried everything") → Lever 1: "It's not the method, it's a sensory gap"
- D2 ("maybe I'm the problem") → Lever 4: "Lena's two autistic sons"
- D3 ("what if hopes up") → Lever 3: "Try it for 60 days"
- C3 ("worth $30-50?") → Math reframe (L1/GF only, NEVER L3)

---

#### Flow 25: Referral Flow (3 emails)

| Dimension | Mapping | Rating |
|-----------|---------|--------|
| **L8 Segmentation** | Cross-level (DOC5). Trigger: Day 30 + positive engagement. Tag: `post_purchase_active`. L8 conversion: 2-4%. | ✅ |
| **L14 Frequency** | "Post-Purchase Mid" stage. Gratitude + community. | ⚠️ |
| **L15 Offers** | Referral incentive. L15 §9: Referred customers = 16% higher LTV, 37% higher retention. | ✅ |
| **L17 Tonality** | NOT PRODUCED. | ❌ |

---

## 4. LAYER 8 SEGMENTATION CONNECTIONS

### 4.1 Flow Segmentation Summary

| Segmentation Type | Flow Count | Flows |
|-------------------|:----------:|-------|
| **Level-Specific (4 variants)** | 7 | Welcome, PP-Extended Education, FAQ/Objection, Winback A, Winback B, PP-Extended Upsell (level-aware) |
| **Cross-Level (DOC5)** | 18 | Cart, Checkout, Browse, Order Confirm, Shipping, Out for Delivery, Arrived, PP-Direct Upsell, PP-Mary-S, PP-Education 0-21, PP-Level Detection, PP-Mid Check-In, PP-Support At-Risk, Replenishment A/B/C, Review Request, Sunset, Referral |

### 4.2 Segmentation Routing Rules (from L8)

| Rule | Application | Flows Affected |
|------|-------------|----------------|
| Before level tag known → Cross-Level (DOC5) | All pre-purchase + early post-purchase | Flows 01-09, 11, 14, 15-18, 21, 23, 25 |
| After level tag known → Level-specific | Educational/winback/FAQ | Flows 01 (variant), 13, 20, 22, 24 |
| High-velocity → Cross-level even if tag known | Cart/Checkout/Browse | Flows 02, 03, 04 |
| PP Day 0-21 → Cross-level (DOC5) | Education-first | Flow 11 |
| PP Day 22+ → Level-specific if tag known | Extended content | Flows 13, 20 |

### 4.3 General Fallback (~50% of real volume) Flow Coverage

| GF Sub-Group | % of GF | Best Welcome Path | Migration Target | Key Flow |
|:---:|:---:|---|---|---|
| A — Diagnostic Entrants | ~25% | GF Welcome → Click migration → L1 | L1 | Welcome E2-E3 |
| B — Diagnosis-Rejecters | ~15% | GF Welcome indefinitely | NEVER migrate | Browse, FAQ |
| C — Sensory-Difference | ~25% | GF Welcome → Click migration → L2 | L2 | Welcome E2, FAQ |
| D — Overwhelmed Non-Selectors | ~25% | GF Welcome → PP-Level Detection | L1/2/3 | PP-Level (Day 14) |
| E — Cart/Browse Without Opt-In | ~10% | Direct: Cross-level | Any | Cart, Browse |

**Gap:** No sub-group-specific flow variants exist. All GF subscribers receive the same DOC5 content regardless of sub-group. L8 §7.2 recommends sub-group-specific routing for +10-20% conversion uplift.

### 4.4 Audience Distribution × Flow Impact

| Segment | % of Total | Best Flow | Conversion Range | Revenue Priority |
|---------|:----------:|-----------|:----------------:|:----------------:|
| Level 1 | ~17.5% | Welcome L1 | 15-25% | ★★★ HIGHEST |
| Level 2 | ~20% | Welcome L2 + FAQ | 8-15% | ★★★ HIGH |
| Level 3 | ~12.5% | Winback A L3 | 3-5% | ★ Medium |
| General Fallback | ~50% | PP-Level Detection | 5-10% | ★★ HIGH (volume) |

---

## 5. LAYER 14 FREQUENCY ALIGNMENT

### 5.1 Flow Stage Tonality Map (from L14 §4)

| L14 Flow Stage | L16 Flows | Tone | Language | Energy |
|----------------|-----------|------|----------|--------|
| **Pre-Purchase** | 01 (Welcome), 02 (Cart), 03 (Checkout), 04 (Browse), 24 (FAQ) | Education + Soft Conversion | Specific, mechanism-led, peer-to-peer | Calm, confident, "we're not in a hurry" |
| **Conversion Moment** | 02 (Cart E3), 03 (Checkout E2) | Friendly Reminder + Permission Not To Buy | "If today isn't right, that's a real answer" | Decision-respect, "you decide" |
| **Transactional** | 05 (Order Confirm), 06 (Shipping), 07 (Out for Delivery), 08 (Arrived) | Warm + Functional | Direct, informative, branded | Professional but human |
| **Post-Purchase Early** | 08 (Arrived), 09 (PP-Direct Upsell), 10 (Mary S.), 11 (PP-Education 0-21) | Warm + Reassurance + Education | "Here's what to expect" | Welcome to the family |
| **Post-Purchase Mid** | 12 (Level Detection), 13 (Extended Upsell), 14 (Mid Check-In), 18 (Review), 20 (Extended Edu), 21 (At-Risk), 25 (Referral) | Realistic + Patient + "It's normal" | "Week 1 plateau is real. Hold the line." | Coach + cheerleader |
| **Lifecycle** | 15 (Replenish A), 16 (Replenish B), 17 (Replenish C), 19 (Winback A), 22 (Winback B), 23 (Sunset) | Respectful Re-engagement | "How are you doing?" / "Whichever path you take" | Genuinely curious, low-pressure |

### 5.2 Hope Calibration per Flow (from L14 §5)

| Flow | L1 Hope % | L2 Hope % | L3 Hope % | GF Hope % |
|------|:---------:|:---------:|:---------:|:---------:|
| Welcome (E1-E3) | 70% | 40% | 20% | 50% |
| Welcome (E4-E8) | 60% | 35% | 15% | 45% |
| Cart/Checkout | 65% | 40% | 20% | 50% |
| Post-Purchase 0-21 | 55% | 35% | 15% | 40% |
| Post-Purchase 22+ | 50% | 30% | 10% | 35% |
| Winback | 40% | 25% | 10% | 30% |
| Sunset | 20% | 15% | 5% | 15% |

**Pattern:** Hope decreases over time and across the journey. Early flows are more hopeful; late flows are more realistic. L3 maintains lowest hope throughout.

### 5.3 Frequency Caps & Send Rules (from L14 §7)

| Rule | Value | Source |
|------|-------|--------|
| Optimal campaign frequency | 3-4x/week | L14 §7.1 |
| Max emails/week for lapsed | 1 | L14 §7.2 |
| Max emails/week for VIPs | 3-5 | L14 §7.2 |
| New subscriber frequency | 2-3/week (flow + reduced campaigns) | L14 §7.2 |
| Recent buyer window | Skip promotional 7-14 days | L14 §7.2 |
| Pop-up frequency cap | 1x per 7 days per visitor | L8 §2 |

### 5.4 Content Mix (from L14 §8.1)

| Content Type | % of Total | Application to Flows |
|---|:---:|---|
| Sales / Promotional | ~30% | Cart, Checkout, Upsell, Replenishment emails |
| Educational / Value | ~50% | Welcome, PP-Education, FAQ, Level Detection |
| Brand / Personality | ~20% | Mary S. Story, Review Request, Referral |

**BrightKidCo-specific:** Conservative 30/50/20 split recommended (not 50/30/15/5). Autism parents = high-sensitivity audience; heavy promotional erodes trust.

### 5.5 Forbidden Phrases (from L14 §10)

Apply to ALL 25 flows. 18 forbidden phrases including: "easy," "simple," "guaranteed results," "just like neurotypical kids," "suffering from autism," "high/low-functioning," "wait until they're ready," "cure/solve/fix."

---

## 6. LAYER 15 OFFER PLACEMENT MAPPING

### 6.1 Offer per Flow Email Position

| Flow | E1 Offer | E2 Offer | E3 Offer | E4-E8 Offer |
|------|----------|----------|----------|-------------|
| **01 Welcome** | WELCOME10 code | Mechanism (no offer) | 60-day guarantee push | Slow acceptance (soft offer) |
| **02 Cart** | Same as cart + mechanism | Upgrade (1→3+3 or 3+3→5+5) + math reframe | Original + guarantee max | — |
| **03 Checkout** | Gentle reminder | Guarantee + objection D3 | — | — |
| **04 Browse** | No discount (risk reversals) | Trust building | Social proof | Optional: discount E4-E5 |
| **05 Order Confirm** | Cross-sell block (soft) | — | — | — |
| **08 Arrived** | "Massive upsell" — best window | — | — | — |
| **09 PP-Direct** | Wash Bag | Mattress Protector | — | — |
| **13 PP-Ext Upsell** | Level-aware offer | Level-aware escalation | Level-aware final | — |
| **15 Replenish A** | 3+3 Bundle ("most parents need more") | 3+3 reinforce | 3+3 + guarantee | — |
| **16 Replenish B** | 5+5 Bundle ("complete training kit") | 5+5 + value math | — | — |
| **17 Replenish C** | Accessories (Wash Bag, etc.) | Accessories reinforce | — | — |
| **19 Winback A** | Level-specific reconnection | Level-specific offer | Level-specific final | — |
| **22 Winback B** | Level-specific reconnection | Offer push | Final chance | — |
| **24 FAQ** | Objection D1 + mechanism | Objection D2 + Lena voice | Objection D3 + guarantee | C1-C3, B1-B4 |
| **25 Referral** | Referral ask | Referral incentive | Final referral | — |

### 6.2 Offer × Level Restrictions (from L15 §8)

| Offer | L1 | L2 | L3 | GF |
|-------|:--:|:--:|:--:|:--:|
| 1 Pair ($34.99) | OK (trial) | OK (deep skepticism) | **PRIMARY** | OK (migration) |
| 3+3 Bundle ($79.99) | **PRIMARY** | **PRIMARY** | After trust only | **PRIMARY** |
| 5+5 Bundle ($119.99) | Secondary | Secondary (BCBA) | **NEVER push** | Secondary |
| Math Reframe | OK | Carefully | **NEVER** | OK |
| Urgency | Strong at P2 | Low-moderate | **NEVER** | Low-medium |
| 60-Day Guarantee | ★★★★★ | ★★★★★ | ★★★★★ | ★★★★ |

### 6.3 Cart Recovery Offer Logic (from L15 §5)

| Cart State | E1 (1h) | E2 (24h) | E3 (72h) |
|------------|---------|----------|----------|
| 1 Pair ($34.99) | Mechanism reminder | Upsell to 3+3 ("most parents need more") | Original + max guarantee |
| 3+3 ($79.99) | Reinforce + free shipping | Upgrade to 5+5 (value math) | Original + max guarantee |
| 5+5 ($119.99) | Total value emphasize | Reinforce ($119.99 vs $349.90) | Original + max guarantee |

### 6.4 Post-Purchase Upsell Path (from L15 §6)

```
1-Pair Buyer
  → Day 1-3: Wash Bag + Mattress Protector (Flow 09)
  → Day 7-10: 3+3 Bundle (Arrived & Welcome — Flow 08)
  → Day 14: Replenishment A (Flow 15) — 3 emails
  → Day 28: Extended Upsell (Flow 13) — 3+3 or 5+5

3+3 Buyer
  → Day 1-3: Wash Bag + Mattress Protector (Flow 09)
  → Day 28: Extended Upsell (Flow 13) — 5+5
  → Day 75: Replenishment B (Flow 16) — 5+5

5+5 Buyer
  → Day 1-3: Accessories (Flow 09)
  → Day 150: Replenishment C (Flow 17) — Accessories
```

---

## 7. LAYER 17 TONALITY STAGE ALIGNMENT

### Status: LAYER 17 NOT YET PRODUCED

Layer 17 (Tonality Calibration) has not been generated. This section uses L14 tonality data as a proxy and identifies what L17 should contain.

### 7.1 What L17 Should Cover (based on cross-layer gaps)

| Topic | Expected Content | Current Proxy |
|-------|-----------------|---------------|
| Per-flow tonality matrix | 25 flows × 6 tonality dimensions | L14 §4 flow stage tonality |
| Per-level tonality dial | Hope/realism % per flow per level | L14 §5 hope calibration |
| Per-email tonality arc | How tone shifts within multi-email sequences | L14 Gap 7 (undocumented) |
| Voice switching rules | When Lena vs. Mary S. vs. brand voice | L14 §9 (Lena only) |
| Forbidden phrase context | Which phrases are forbidden in which flow context | L14 §10 (global, not flow-specific) |
| Emotional phase × flow mapping | 4 phases × 25 flows tonality matrix | L14 §3 (phases defined, flow mapping missing) |

### 7.2 Proxy Tonality Matrix (from L14 data)

| Flow | Primary Emotional Phase | Lena Voice? | Hope Dial | Urgency Level | Key Tonality |
|------|:---:|:---:|:---:|:---:|---|
| 01 Welcome L1 | Phase 1-2 | Yes | 70% | HIGH (Pre-K) | Education + gentle urgency |
| 01 Welcome L2 | Phase 2-3 | Yes | 40% | LOW | Science-first + validation |
| 01 Welcome L3 | Phase 3-4 | Yes | 20% | ZERO | Dignity-first + permission |
| 01 Welcome GF | Phase 1-3 | Yes | 50% | Low-Medium | Universal hooks |
| 02 Cart | Any | Yes | 50% | Medium | Permission + mechanism |
| 03 Checkout | Any | Yes | 50% | Low | Gentle reminder |
| 04 Browse | Any | Yes | 50% | Low | Education + risk reversal |
| 05-07 Transactional | N/A | No | N/A | N/A | Warm + functional |
| 08 Arrived | N/A | No | N/A | N/A | Warm + anticipation |
| 09 PP-Direct | N/A | Yes | 50% | Low | Social proof + gentle upsell |
| 10 Mary S. | N/A | **No (Mary S.)** | N/A | N/A | Founder authenticity |
| 11 PP-Edu 0-21 | Phase 2-3 | Yes | 40% | None | Realistic + patient |
| 12 Level Detection | N/A | Yes | 50% | None | Gentle question |
| 13 PP-Ext Upsell | Phase 2-3 | Yes | 40% | Low | Level-specific |
| 14 Mid Check-In | Phase 2-3 | Yes | 40% | None | Coach + cheerleader |
| 15-17 Replenishment | N/A | Yes | 40% | Low | Respectful re-engagement |
| 18 Review Request | N/A | Yes | 50% | None | Gratitude |
| 19 Winback A | Phase 3-4 | Yes | 25% | None | Respectful + curious |
| 20 PP-Ext Edu | Phase 2-4 | Yes | 30% | None | Deep education |
| 21 At-Risk | N/A | Yes | 40% | None | Gentle concern |
| 22 Winback B | Phase 3-4 | Yes | 25% | None | Permission-based |
| 23 Sunset | N/A | Yes | 15% | None | Respectful farewell |
| 24 FAQ | Phase 3 | Yes | 35% | None | Science + objection handling |
| 25 Referral | N/A | Yes | 50% | None | Gratitude + community |

---

## 8. GAP & CONTRADICTION ANALYSIS

### 8.1 Critical Gaps

| ID | Gap | Severity | Layers Affected | Resolution |
|----|-----|:--------:|:---:|---|
| **GAP-1** | No level-aware Cart/Checkout/Browse variants | 🔴 HIGH | L8, L15 | Create 3 recovery variants per L8 R4 C1. Expected: +20-30% L1, +10-15% L2. |
| **GAP-2** | L17 (Tonality) not produced | 🔴 HIGH | L14, L17 | Proxy from L14 used in this cross-reference. L17 needed for per-flow tonality matrix. |
| **GAP-3** | ~50% GF subscribers get generic content in most flows | 🟡 MEDIUM | L8 | Implement GF sub-group routing (L8 §7). PP-Level Detection (Flow 12) is the primary migration tool. |
| **GAP-4** | Frequency decay across multi-email sequences undocumented | 🟡 MEDIUM | L14 | L14 Gap 7. Map each email in Welcome Flow to a primary emotional stage. |
| **GAP-5** | Post-purchase offer sequencing not explicitly mapped | 🟡 MEDIUM | L15, L16 | Section 6.4 above is inferred from L15 §6. Needs explicit flow-level mapping. |
| **GAP-6** | No VIP flow in 25-flow architecture | 🟡 MEDIUM | L8, L16 | L8 §13.3 G4. Create dedicated VIP flow for repeat/vip buyers. |
| **GAP-7** | Mary S. voice tonality rules absent | 🟢 LOW | L14 | L14 §9 covers Lena only. Mary S. needs separate tonality spec. |
| **GAP-8** | At-risk flow tonality undefined | 🟢 LOW | L14 | No specific tonality stage for 3-7 day no-opens. Closest: "Lifecycle" stage. |

### 8.2 Contradictions

| ID | Contradiction | Layers | Resolution |
|----|--------------|:---:|---|
| **CON-1** | Welcome Flow: 8 emails/21 days (L16) vs. 7 emails/14 days (L14 industry) | L14, L16 | BrightKidCo's 21-day timeline is correct for longer decision cycle. Industry template is a starting point, not a rule. |
| **CON-2** | Review Request at Day 30 (L16) vs. Day 7-14 (L14 industry) | L14, L16 | BrightKidCo's Day 30 is correct. Autism parents need more time to see results. |
| **CON-3** | Browse Abandonment: Phase 1 (L16 R1 §17) vs. Phase 2 (L16 R1 §18) | L16 | Confirmed Phase 2 per §18. §17 placement was misleading. |
| **CON-4** | Pricing: Email ($34.99) vs. Website ($24.99/$29.99) | L15 | Unresolved. Email uses DOC6 pricing. Client clarification needed. |
| **CON-5** | 5+5 positioned for L2+L3 (L15 R1) but L3 forbids aggressive pushing | L15 | Remove L3 from 5+5 target. 5+5 = L2-specific + post-purchase upsell for L1. |
| **CON-6** | L14 content mix: 30/50/20 (conservative) vs. 50/30/15/5 (aggressive) | L14 | Use conservative 30/50/20 for BrightKidCo's sensitive audience. |
| **CON-7** | L16 R1 Phase 3 lists 7 items but counts 8 flows | L16 | Birthday Mail is listed as "optional" — explains the count discrepancy. |

### 8.3 Well-Covered Flows (No Gaps)

| Flow | Coverage | Notes |
|------|:---:|-------|
| 01 Welcome | ✅✅✅ | All 4 layers well-documented. Best-covered flow. |
| 02 Cart Abandonment | ✅✅✅ | Strong coverage. Gap: no level variants. |
| 08 Arrived & Welcome | ✅✅✅ | Critical upsell moment well-documented. |
| 09 PP-Direct Upsell | ✅✅✅ | Offer logic clear. |
| 12 PP-Level Detection | ✅✅✅ | Migration mechanism well-specified. |
| 15-17 Replenishment | ✅✅✅ | Offer paths clear per buyer type. |
| 24 FAQ/Objection | ✅✅✅ | 11 objections mapped to conversion levers. |

### 8.4 Under-Covered Flows (Gaps Exist)

| Flow | Coverage | What's Missing |
|------|:---:|---|
| 03 Checkout Abandonment | ⚠️⚠️⚠️ | L15 offer sequencing less detailed than cart. |
| 07 Out for Delivery | ⚠️⚠️ | Optional flow, minimal documentation. |
| 10 Mary S. Story | ⚠️⚠️ | Mary S. voice tonality rules absent. |
| 21 PP-Support At-Risk | ⚠️⚠️ | No specific tonality stage for 3-7d no-opens. |
| 25 Referral | ⚠️⚠️ | Tonality and offer details sparse. |

---

## 9. SUMMARY MATRIX

### 9.1 Cross-Reference Coverage Score

| Flow | L8 Score | L14 Score | L15 Score | L17 Score | Total |
|------|:---:|:---:|:---:|:---:|:---:|
| 01 Welcome | 5/5 | 5/5 | 5/5 | 0/5 | 15/20 |
| 02 Cart | 5/5 | 5/5 | 5/5 | 0/5 | 15/20 |
| 03 Checkout | 5/5 | 5/5 | 3/5 | 0/5 | 13/20 |
| 04 Browse | 5/5 | 5/5 | 3/5 | 0/5 | 13/20 |
| 05 Order Confirm | 5/5 | 5/5 | 3/5 | 0/5 | 13/20 |
| 06 Shipping | 5/5 | 5/5 | 2/5 | 0/5 | 12/20 |
| 07 Out for Delivery | 5/5 | 5/5 | 2/5 | 0/5 | 12/20 |
| 08 Arrived | 5/5 | 5/5 | 5/5 | 0/5 | 15/20 |
| 09 PP-Direct Upsell | 5/5 | 5/5 | 5/5 | 0/5 | 15/20 |
| 10 Mary S. Story | 5/5 | 3/5 | 5/5 | 0/5 | 13/20 |
| 11 PP-Education 0-21 | 5/5 | 5/5 | 3/5 | 0/5 | 13/20 |
| 12 Level Detection | 5/5 | 5/5 | 5/5 | 0/5 | 15/20 |
| 13 PP-Ext Upsell | 5/5 | 5/5 | 5/5 | 0/5 | 15/20 |
| 14 Mid Check-In | 5/5 | 5/5 | 3/5 | 0/5 | 13/20 |
| 15 Replenish A | 5/5 | 5/5 | 5/5 | 0/5 | 15/20 |
| 16 Replenish B | 5/5 | 5/5 | 5/5 | 0/5 | 15/20 |
| 17 Replenish C | 5/5 | 5/5 | 5/5 | 0/5 | 15/20 |
| 18 Review Request | 5/5 | 3/5 | 5/5 | 0/5 | 13/20 |
| 19 Winback A | 5/5 | 5/5 | 5/5 | 0/5 | 15/20 |
| 20 PP-Ext Education | 5/5 | 5/5 | 5/5 | 0/5 | 15/20 |
| 21 At-Risk | 5/5 | 3/5 | 2/5 | 0/5 | 10/20 |
| 22 Winback B | 5/5 | 5/5 | 5/5 | 0/5 | 15/20 |
| 23 Sunset | 5/5 | 5/5 | 5/5 | 0/5 | 15/20 |
| 24 FAQ/Objection | 5/5 | 5/5 | 5/5 | 0/5 | 15/20 |
| 25 Referral | 5/5 | 3/5 | 5/5 | 0/5 | 13/20 |
| **AVERAGE** | **5.0** | **4.6** | **4.2** | **0.0** | **13.8/20** |

### 9.2 Layer Coverage Summary

| Layer | Coverage | Key Finding |
|-------|:---:|---|
| **L8 Segmentation** | 100% | All 25 flows have clear segmentation rules. Gap: GF sub-group variants. |
| **L14 Frequency** | 92% | Flow stage tonality maps cleanly. Gap: frequency decay across sequences. |
| **L15 Offers** | 84% | Cart/post-purchase well-mapped. Gap: offer sequencing within flows inferred. |
| **L17 Tonality** | 0% | NOT PRODUCED. Proxy from L14 used. L17 urgently needed. |

### 9.3 Priority Actions

1. **Produce Layer 17** — Tonality calibration is the missing link. Without it, per-flow tonality is inferred from L14, not explicitly mapped.
2. **Create level-aware Cart Recovery variants** — Highest expected lift (+20-30% L1 cart recovery).
3. **Document frequency decay across sequences** — Map each Welcome Flow email to a primary emotional stage.
4. **Build GF sub-group routing** — 50% of real subscribers get generic content.
5. **Optimize post-purchase Day 7-10 window** — 60-70% open rate, underutilized for upsell.
6. **Create VIP flow** — Missing from 25-flow architecture. L8 §13.3 G4.

---

*End of Layer 16 Round 4 — Flow Architecture Cross-Reference*
