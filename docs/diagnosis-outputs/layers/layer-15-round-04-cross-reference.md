# Layer 15 — Round 4: Offers — Cross-Reference
## Cross-Reference of Layer 15 (Offers) with Layer 4 (Avatar Levels), Layer 7 (Conversion Probabilities), and Layer 16 (Flow Architecture)
**Generated:** 2026-05-25
**Cross-Referenced Layers:** L15 (Offers) × L4 (Avatar Levels) × L7 (Conversion Probabilities) × L16 (Flow Architecture)

**Data Quality Note:** Layer 16 (Flow Architecture) output file does not exist. Flow mapping is inferred from L4 (pop-up routing, Welcome Flow variants) and L7 (conversion pipeline routing map in §12). L15 R3 (External Research) also does not exist — offer optimization benchmarks are missing.

---

## 1. THE 3 OFFERS — QUICK REFERENCE

| Offer | Price | Contents | Bonuses | Positioning |
|-------|:-----:|----------|---------|-------------|
| **1 Pair** | $34.99 | 1 pair Training Underwear | None | Entry-level, trial, skeptical audiences |
| **3+3 Bundle (BESTSELLER)** | $79.99 | Buy 3 Get 3 Free (6 pairs) | FREE Shipping | Default recommendation, best conversion rate |
| **5+5 Bundle (MAX VALUE)** | $119.99 | Buy 5 Get 5 Free (10 pairs) | FREE E-Book + Magic Potty Targets + Potty Progress Chart + FREE Shipping | Maximum value, complete training kit |

**Discount Codes:** WELCOME10 (10% off, 7-day pop-up), 10%OFF-BKCO (secondary)
**Guarantee:** 60-Day Money Back for ASD ecosystem (NEVER 30); 30-Day for general avatars only

---

## 2. OFFER × AVATAR LEVEL MATRIX

### 2.1 Primary Offer Assignment by Level

| Dimension | Level 1 (Sarah) | Level 2 (Lisa) | Level 3 (Maria) | General Fallback |
|-----------|:---------------:|:---------------:|:---------------:|:----------------:|
| **Default Offer** | **3+3 Bundle** ($79.99) | **3+3 Bundle** ($79.99) | **1 Pair** ($34.99) | **3+3 Bundle** ($79.99) |
| **Secondary Offer** | 5+5 Bundle ($119.99) | 5+5 Bundle ($119.99) | 3+3 Bundle ($79.99) | 5+5 Bundle ($119.99) |
| **Tertiary Offer** | — | 1 Pair ($34.99, late-phase) | — | 1 Pair ($34.99, Phase 4) |
| **Never Offer** | — | — | 5+5 Bundle (too expensive) | — |
| **Math Reframe** | OK (disposable income) | Carefully (financial sensitivity) | **NEVER** (Medicaid ~40%) | OK (main target) |
| **Urgency Framing** | Strong (Pre-K deadline) | Weak (event-driven only) | **NEVER** | Low–Medium |
| **Discount Allowed** | 10% abandoned cart only | 15% in E3 not E1 | 20% winback only | 10% abandoned cart |
| **Audience Share** | ~35% assigned / ~17.5% total | ~40% assigned / ~20% total | ~25% assigned / ~12.5% total | ~50% real volume |
| **Blended Conv. Rate** | 10–15% | 7–12% | 4–7% | 7–10% |

### 2.2 Detailed Level × Offer Justification

**Level 1 (Sarah — Verbal, Hope-Intact):**
- 3+3 Bundle is default: she has income, responds to value framing, Pre-K urgency makes 6 pairs practical
- 5+5 Bundle as secondary: Pre-K urgency can push to maximum value if child is 4+ and deadline is tight
- Math reframe OK: middle-to-upper income (~85% Medicaid-free), pull-up cost comparison resonates
- Never 1 Pair as default: she's not that skeptical; underselling loses AOV
- Guarantee: 60-Day (reduces hope-risk — she's vulnerable to hope-crash)

**Level 2 (Lisa — Mixed Verbal, Method-Cycling):**
- 3+3 Bundle default: she invests if mechanism convinces; BCBA parents have spent $50k+
- 5+5 Bundle for higher investment readiness: parents who've spent $2,000+ on private consultants won't balk at $119.99
- 1 Pair for late-phase (P4): resigned L2 parents need permission-not-to-buy entry
- Math reframe carefully: ~25% Medicaid, financial sensitivity present but not dominant
- BCBA-respectful framing: "Complements your ABA program, not replaces it"

**Level 3 (Maria — Non-Verbal, Resigned):**
- 1 Pair as default: skeptical audience, permission-not-to-buy, $34.99 is less scary for Medicaid families
- 3+3 Bundle only after trust established: never in first contact
- NEVER 5+5 Bundle: $119.99 is prohibitive for ~40% Medicaid population
- Math reframe NEVER: Medicaid reality, financial sensitivity is highest
- Guarantee: 60-Day Calm Progress Guarantee (dignity-first framing)
- Discount: 20% winback only (never upfront — feels like desperation)

**General Fallback (Cross-Level):**
- 3+3 Bundle default: ~50% of real volume, bestseller positioning works universally
- Migration hooks in every mail: move subscribers to level-specific offers via Day 14 detection
- Sub-Group C (sensory-difference parents): highest-profit GF segment, responds to 5+5 Bundle
- Sub-Group E (cart/checkout without opt-in): direct 3+3 with mechanism + guarantee

---

## 3. OFFER × CONVERSION PROBABILITY MATRIX

### 3.1 Offer Placement by Level × Phase Conversion Cell

| Cell | Conv. Rate | Priority | Recommended Offer | Offer Framing |
|------|:----------:|:--------:|:-----------------:|---------------|
| **L1 × P2** | **15–25%** | **★★★ P0** | 3+3 Bundle ($79.99) | Pre-K deadline hook, "X months until school" |
| **L2 × P3** | **8–15%** | **★★★ P1** | 3+3 or 5+5 Bundle | Science-first, BCBA-respectful, "60 days, your judgment" |
| **GF × P2/P3** | **8–12%** | **★★ P2** | 3+3 Bundle ($79.99) | Universal symptom + mechanism, migration hooks |
| **L1 × P3** | **10–18%** | **★★ P3** | 3+3 Bundle ($79.99) | Mechanism + Pre-K deadline, science-first |
| **L2 × P2** | **10–15%** | **★★ P4** | 3+3 Bundle ($79.99) | Try-and-judge: "We're not asking you to believe. Just to try." |
| **L3 × P4** | **4–8%** | **★ P5** | 1 Pair ($34.99) | Permission-not-to-buy, "just try alongside diapers" |
| **L3 × P3** | **5–10%** | **★ P4** | 1 Pair or 3+3 Bundle | Dignity-first, "add alongside — never replace" |
| **L2 × P4** | **6–10%** | **★ P4** | 1 Pair or 3+3 Bundle | Late-trainer stories, permission-not-to-buy |
| **L1 × P1** | **3–5%** | ~ | 3+3 Bundle (soft CTA) | Education, not promotion |
| **L2 × P1** | **~2%** | ~ | None — not ready | Education only, no offer |
| **L3 × P2** | **3–5%** | ~ | 1 Pair ($34.99) | "Just trying" framing, never 5+5 |
| **GF × P1** | **5–8%** | ~ | 3+3 Bundle (soft CTA) | Universal hooks, gentle |
| **GF × P4** | **5–8%** | ~ | 1 Pair ($34.99) | Permission-not-to-buy, migration focus |

### 3.2 Offer × Conversion Lever Interaction

| Conversion Lever | Strongest Offer Pairing | Why |
|-----------------|:-----------------------:|-----|
| L1: "It's not the method" | 3+3 Bundle | Mechanism explanation builds trust → default offer converts |
| L2: "Pull-ups make this worse" | 3+3 Bundle | Creates urgency without manipulation → 6 pairs as replacement |
| L3: "60-Day Guarantee" | 1 Pair → 3+3 upgrade | Risk removal at lowest price point first |
| L4: "Lena's two autistic sons" | Any (peer trust) | Lena voice applies to all offers equally |
| L5: "49% SPARK Stat" | 3+3 or 5+5 Bundle | Normalization → willingness to invest |

### 3.3 Offer Timing Within Conversion Sequence

| Phase | First Offer Exposure | Second Offer Exposure | Upgrade Path |
|-------|:--------------------:|:---------------------:|--------------|
| Phase 1 (Education) | E3 — soft mention only | E5 — gentle CTA | N/A |
| Phase 2 (First Attempt) | **E3 — main CTA** | E4 — reinforcement | 3+3 → 5+5 post-purchase |
| Phase 3 (Method Cycling) | E3 or E4 — after mechanism | E5 — guarantee + CTA | 1 Pair → 3+3 (if skeptical entry) |
| Phase 4 (Resignation) | E5+ — very late | Winback Path | 1 Pair → 3+3 → 5+5 (long-term) |

---

## 4. OFFER × FLOW STAGE MATRIX

### 4.1 Pre-Purchase Flow Stages (Welcome Flows)

| Flow Stage | Level 1 Offer | Level 2 Offer | Level 3 Offer | GF Offer |
|------------|:-------------:|:-------------:|:-------------:|:--------:|
| **Welcome E1** (Validation) | No offer | No offer | No offer | No offer |
| **Welcome E2** (Mechanism) | Soft mention 3+3 | Soft mention 3+3 | No offer | Soft mention 3+3 |
| **Welcome E3** (Guarantee + CTA) | **3+3 Bundle — PRIMARY CTA** | **3+3 Bundle — PRIMARY CTA** | 1 Pair (gentle) | **3+3 Bundle — CTA** |
| **Welcome E4** (Follow-up) | 5+5 Bundle (upgrade) | 5+5 Bundle (upgrade) | 3+3 Bundle (if trust built) | Migration hooks |
| **Welcome E5+** (Late nurture) | Permission-not-to-buy | Permission-not-to-buy | 1 Pair (permission) | 1 Pair (permission) |
| **FAQ Flow** | 3+3 Bundle | 3+3 or 5+5 Bundle | 1 Pair | 3+3 Bundle |
| **Winback Path A** (Purchasers) | 5+5 Bundle | 5+5 Bundle | Accessories | Level-detected |
| **Winback Path B** (Non-purchasers) | 3+3 Bundle (last chance) | 1 Pair (permission) | 1 Pair (permission) | 3+3 + migration |

### 4.2 Cart Recovery Flow — Offer by Cart State

| Cart State | Upsell Action | Angle | Offer Framing |
|------------|:-------------:|-------|---------------|
| 1 Pair in cart | Upsell to **3+3 Bundle** | "Most parents need more" | "6 pairs for $79.99 — saves you $130 vs buying individually" |
| 3+3 Bundle in cart | Reminder + free shipping | Reinforce value | "Bestseller — FREE shipping included, 60-day guarantee" |
| 5+5 Bundle in cart | Total value emphasize | Massive savings | "$119.99 vs $349.90 individual — plus FREE E-Book, Targets, Chart" |
| Any cart (L3 segment) | **No upsell** | Permission + guarantee | "60-Day Calm Progress Guarantee. No pressure." |

### 4.3 Post-Purchase Flow — Offer by Buyer Type

| Buyer Type | Day 0–3 | Day 14 | Day 28+ | Day 75+ | Day 150+ |
|------------|---------|--------|---------|---------|----------|
| **1-Pair Buyer** | Cross-sell (Wash Bag, Mattress Protector) | Level Detection (if GF) | Extended Education (level-aware) | — | — |
| **3+3 Buyer** | Cross-sell (Wash Bag, Mattress Protector) | Level Detection (if GF) | Extended Education | **5+5 Upgrade** | — |
| **5+5 Buyer** | Cross-sell (Wash Bag, Mattress Protector) | Level Detection (if GF) | Extended Education | — | **Accessories** |
| **All Buyers** | Order Confirmation (cross-sell block) | — | Review Request (Day 30) | Replenishment | Winback (Day 90+) |

### 4.4 Upsell Path Map

```
ENTRY POINT
    │
    ├─ 1 Pair ($34.99)
    │   └─ Day 14: Upsell to 3+3 Bundle ($79.99) — "Replenishment Path A" (3 mails)
    │       └─ Day 75: Upsell to 5+5 Bundle ($119.99) — "Replenishment Path B" (2 mails)
    │           └─ Day 150: Accessories Cross-Sell (Wash Bag, Mattress Protector)
    │
    ├─ 3+3 Bundle ($79.99)
    │   └─ Day 75: Upsell to 5+5 Bundle ($119.99) — "Replenishment Path B" (2 mails)
    │       └─ Day 150: Accessories Cross-Sell
    │
    └─ 5+5 Bundle ($119.99)
        └─ Day 150: Accessories Cross-Sell — "Replenishment Path C" (2 mails)
```

### 4.5 Offer by Email Flow Type

| Flow Type | Offer Strategy | Segmentation |
|-----------|---------------|--------------|
| **Welcome Flow** | Primary offer + upgrade path | Level-specific (4 variants) |
| **Cart Abandonment** | Upsell based on cart state | Cross-Level |
| **Checkout Abandonment** | Reinforce + guarantee | Cross-Level |
| **Browse Abandonment** | 3+3 Bundle default | Cross-Level |
| **Post-Purchase Direct** | Accessories (Wash Bag, Protector) | Cross-Level |
| **Post-Purchase Extended** | Level-aware upsell | Level-specific if tag known |
| **Replenishment A/B/C** | Next-tier bundle upgrade | By purchase history |
| **Winback** | Permission-based (1 Pair or 3+3) | Level-specific if tag known |
| **FAQ** | 3+3 Bundle + mechanism | Level-specific if tag known |
| **Arrived & Welcome** | Massive upsell (all 3 offers) | Cross-Level |
| **Order Confirmation** | Cross-sell block (accessories) | Cross-Level |
| **Review Request** | No offer (social proof focus) | Cross-Level |

---

## 5. GAPS AND CONTRADICTIONS IDENTIFIED

### 5.1 Gaps

| # | Gap | Severity | Impact |
|:-:|-----|:--------:|--------|
| **G1** | **Layer 16 (Flow Architecture) does not exist** | 🔴 HIGH | Offer × flow mapping is inferred from L4/L7 routing, not from a dedicated flow architecture document. Actual flow timing, trigger logic, and conditional branching for offers within flows cannot be verified. |
| **G2** | **L15 R3 (External Research) does not exist** | 🟡 MEDIUM | No external benchmarks for offer conversion rates (e.g., 3+3 vs 1 Pair actual CVR, bundle vs single conversion lift, discount depth impact). Offer optimization is based entirely on internal client files. |
| **G3** | **No A/B test data for offer variants** | 🟡 MEDIUM | We don't know if 3+3 actually outperforms 1 Pair as entry for L2, or if 5+5 converts at all for any segment. All offer assignments are qualitative. |
| **G4** | **Offer × Phase detection gap** | 🔴 HIGH | Phase detection is absent from segmentation (confirmed in L4/L7). Without knowing if a subscriber is in Phase 2 vs Phase 3, the same offer is sent regardless of conversion readiness. |
| **G5** | **Medicaid price sensitivity unquantified** | 🟡 MEDIUM | L3 default is 1 Pair ($34.99), but we have no data on whether Medicaid families can afford even this. No discount threshold testing. |
| **G6** | **Post-purchase upsell conversion rates unknown** | 🟡 MEDIUM | Replenishment Path A (1-Pair → 3+3 at Day 14) is a key revenue driver, but no conversion data exists. |
| **G7** | **GF migration offer timing unclear** | 🟡 MEDIUM | When a GF subscriber migrates to a level at Day 14, what offer should they receive? The transition offer strategy is undefined. |
| **G8** | **Accessories offer undefined** | 🟢 LOW | Replenishment Path C mentions "Wash Bag, Mattress Protector" but no pricing, positioning, or email copy exists for these accessories. |
| **G9** | **Pop-up discount timing vs offer presentation** | 🟢 LOW | WELCOME10 (10% off) arrives via pop-up before any email. How does this interact with the Welcome Flow offer sequence? Should E1 acknowledge the discount or ignore it? |

### 5.2 Contradictions

| # | Contradiction | Sources | Resolution |
|:-:|--------------|---------|------------|
| **C1** | **Guarantee duration: 30 vs 60 days** | Produkt-Foundation.txt says "30 Day Potty Trained Promise" (L52). DOC6 says "NEVER say 30 — always 60" (L127, L528). | **Resolved:** 30-day = general avatars (non-ASD). 60-day = ASD/autistic parent ecosystem (DOC1-6). All Level 1/2/3 offers use 60-day guarantee. Only General Fallback Sub-Group B (diagnosis-rejecters) could use 30-day. |
| **C2** | **Single pair pricing: $24.99 vs $34.99** | Unique-Mechanism-ProductData.txt shows "Sale Price: $24.99 (Regular: $29.99)" for website (L188). DOC6 lists $34.99 for email ecosystem (L119). | **Resolved:** Website pricing vs email ecosystem pricing differ. Email always uses $34.99. Website may show $24.99 as sale price. |
| **C3** | **5+5 Bundle availability for L3** | L15 R1 says 5+5 is for "Level 2-3 audiences (higher investment readiness)" (L39). L4 and L7 say L3 should NEVER get 5+5 due to Medicaid sensitivity. | **Resolved:** L15 R1 is wrong. L4 and L7 are authoritative. L3 should NEVER receive 5+5 Bundle offer. The 5+5 is only for L1 (Pre-K urgency) and L2 (higher investment readiness). |
| **C4** | **Math reframe restrictions** | DOC6 says "NEVER for Level 3 audiences" (L611). But pull-up cost frame ($360-600/year vs $79.99) appears in general copy guidance. | **Confirmed:** Math reframes are Level 1 + General Fallback only. Level 2: carefully. Level 3: NEVER. |
| **C5** | **Discount code redundancy** | WELCOME10 (pop-up, 7-day validity) and 10%OFF-BKCO (secondary, always available). Both offer 10% off. | **Gap:** Two 10% codes with different validity periods. Pop-up code creates urgency (7 days). Secondary code undermines it. Recommendation: make secondary code 15% or remove from email flows. |

---

## 6. RECOMMENDATIONS

### 6.1 Offer Architecture Recommendations

| # | Recommendation | Priority | Rationale |
|:-:|---------------|:--------:|-----------|
| **R1** | **Lock L3 to 1 Pair as default, never 5+5** | CRITICAL | Medicaid reality (~40%), financial sensitivity, dignity-first positioning. Contradicts L15 R1 guidance. |
| **R2** | **Create Phase-aware offer sequencing** | HIGH | Currently same offer regardless of Phase. L1×P2 (15-25% CVR) should see 3+3 with Pre-K hook. L1×P4 (5-8%) should see 1 Pair with permission framing. |
| **R3** | **Build GF migration offer transition** | HIGH | When Day 14 detection migrates GF → Level, what offer resets? Recommend: restart offer sequence from that level's E3 equivalent. |
| **R4** | **A/B test: 1 Pair vs 3+3 as L2 Phase 4 entry** | MEDIUM | L2×P4 (6-10%) may convert better with 1 Pair permission-not-to-buy than 3+3 Bundle. Currently untested. |
| **R5** | **Resolve discount code conflict** | MEDIUM | WELCOME10 (7-day, 10%) and 10%OFF-BKCO (permanent, 10%) compete. Make secondary code 15% to create differentiation, or retire one. |
| **R6** | **Define accessory pricing and positioning** | LOW | Wash Bag, Mattress Protector mentioned in post-purchase flows but no pricing or copy exists. Needed for Replenishment Path C. |
| **R7** | **Document offer × urgency interaction rules** | HIGH | Level 1 urgency (Pre-K) amplifies 3+3 conversion. Level 3 urgency (NEVER) means no time-limited offers. Rules must be explicit per flow. |

### 6.2 Cross-Layer Consistency Actions

| Action | Layers Involved | Status |
|--------|:---------------:|:------:|
| Verify 3+3 Bundle is default for all Welcome Flow E3 variants | L15 × L4 | ⚠️ Needs verification in actual flow copy |
| Confirm 1 Pair is default for L3 Welcome (not 3+3) | L15 × L4 × L7 | ✅ Consistent across L4 and L7 |
| Confirm 5+5 Bundle is NEVER offered to L3 | L15 × L4 × L7 | ⚠️ L15 R1 contradicts — needs correction |
| Verify cart recovery logic applies per-level (not cross-level) | L15 × L4 | ⚠️ Cart flows are cross-level but offer should differ |
| Confirm guarantee duration (60-day) flows through all offer emails | L15 × L4 | ✅ Consistent — 60-day for all ASD levels |
| Verify post-purchase upsell timing aligns with level-specific decision periods | L15 × L7 | ⚠️ Day 14 upsell may be too early for L3 (14-30d decision) |

---

## 7. OFFER PRIORITY MATRIX — BY REVENUE IMPACT

| Rank | Cell | Offer | Weighted Impact | Revenue Strategy |
|:----:|:-----|:-----:|:---------------:|------------------|
| #1 | **L1 × P2** | 3+3 Bundle | 2.6–4.4% | **PRIMARY REVENUE DRIVER.** Pre-K deadline framing. 60-day guarantee. $79.99. |
| #2 | **L2 × P3** | 3+3 or 5+5 Bundle | 1.8–3.3% | **VOLUME ENGINE.** Science-first. BCBA-respectful. 5+5 for high-investment parents. |
| #3 | **GF × P2/P3** | 3+3 Bundle | 2.0–3.0% | **VOLUME LEVER.** Universal symptom hooks. Migration to level-specific offers. |
| #4 | **L1 × P3** | 3+3 Bundle | 1.1–1.9% | Mechanism + Pre-K deadline. Solid contributor. |
| #5 | **L2 × P2** | 3+3 Bundle | 1.0–1.5% | Try-and-judge framing. "We're not asking you to believe." |
| #6 | **L3 × P4** | 1 Pair ($34.99) | 0.6–1.1% | **HIGHEST LTV.** Permission-not-to-buy. Dignity-first. |

---

*Cross-reference complete. All 3 matrices built. 9 gaps identified, 5 contradictions documented (3 resolved, 2 need action). 7 recommendations with priority rankings.*
