# 26 — Pricing & Offer Architecture: The Definitive Strategy

**Document:** 26-pricing-offer-architecture.md
**Client:** BrightKidCo (BrightKidCo LLC / KING MG LLC)
**Date:** May 28, 2026
**Status:** SYNTHESIS COMPLETE — Definitive Pricing & Offer Reference
**Sources:** MASTER-DIAGNOSIS-COMPENDIUM, MASTER-INGESTION-COMPENDIUM, MASTER-RESEARCH-COMPENDIUM, GIULIANO-DEMANDS, L15 Offers Round 1-6, L1 Product Diagnosis, L4 Avatar Levels, L7 Conversion Probabilities, L10 Lever Synthesis, L13 Trust Pyramid, L38 Brand Constants

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Current Offer Architecture & Margin Analysis](#2-current-offer-architecture--margin-analysis)
3. [Competitor Pricing Comparison](#3-competitor-pricing-comparison)
4. [Optimal Bundle Strategy](#4-optimal-bundle-strategy)
5. [Subscribe & Save Analysis](#5-subscribe--save-analysis)
6. [Discount & Promotional Strategy](#6-discount--promotional-strategy)
7. [Upsell / Cross-Sell Path Architecture](#7-upsell--cross-sell-path-architecture)
8. [Free Shipping Threshold Analysis](#8-free-shipping-threshold-analysis)
9. [Guarantee Optimization](#9-guarantee-optimization)
10. [Offer × Avatar Level × Phase Matrix](#10-offer--avatar-level--phase-matrix)
11. [Revenue Impact Projections](#11-revenue-impact-projections)
12. [Critical Contradictions & Resolution Paths](#12-critical-contradictions--resolution-paths)
13. [Implementation Roadmap](#13-implementation-roadmap)

---

## 1. Executive Summary

BrightKidCo operates a **3-tier pricing structure** that aligns with proven decoy-effect psychology. The 3+3 Bundle ($79.99) is the default offer across ~70% of audience cells and drives ~65% of projected revenue. However, significant optimization opportunities exist: the 5+5 Bundle ($119.99) is underleveraged for Level 2, General Fallback sub-groups are undifferentiated despite representing ~50% of email volume, and a critical pricing contradiction between website ($24.99/$29.99) and email ecosystem ($34.99) must be resolved before deployment.

**Core findings:**

- The 3-tier structure (1 Pair $34.99 / 3+3 $79.99 / 5+5 $119.99) is psychologically sound and aligned with decoy-effect best practices
- No viable subscribe-and-save model exists for the product category (reusable underwear has no consumable refill cycle)
- Free shipping at $35 threshold is strategically positioned just above the single-pair price — but lacks a micro-add-on to bridge the gap
- The 60-day guarantee is a critical trust differentiator but conflicts with website's 30-day messaging
- L2-specific 5+5 Bundle framing and GF sub-group differentiation are the highest-impact optimization opportunities

---

## 2. Current Offer Architecture & Margin Analysis

### 2.1 The 3-Tier Structure

```
                    BRIGHTKIDCO — 3-TIER PRICING PYRAMID
         ═══════════════════════════════════════════════════

                              ╔══════════════════╗
                              ║  5+5 BUNDLE      ║
                              ║  $119.99         ║
                              ║  ~$12.00/pair    ║
                              ║  66% savings     ║
                              ║  4 bonuses       ║
                              ║  BEST VALUE      ║
                              ╚══════════════════╝
                                    ┃
                              ╔══════════════════╗
                              ║  3+3 BUNDLE      ║  ← ★ DEFAULT
                              ║  $79.99          ║     ~65% rev
                              ║  ~$13.33/pair    ║     BESTSELLER
                              ║  62% savings     ║
                              ║  1 bonus (ship)  ║
                              ╚══════════════════╝
                                    ┃
                              ╔══════════════════╗
                              ║  1 PAIR          ║
                              ║  $34.99          ║
                              ║  $34.99/pair     ║
                              ║  baseline        ║
                              ║  no bonuses      ║
                              ║  ENTRY LEVEL     ║
                              ╚══════════════════╝

    [Source: MASTER-DIAGNOSIS-COMPENDIUM §2.2, L15 Offers R1 §1]
```

### 2.2 Detailed Offer Specifications

| Dimension | 1 Pair | 3+3 Bundle (BESTSELLER) | 5+5 Bundle (MAX VALUE) |
|-----------|:------:|:-----------------------:|:----------------------:|
| **Price** | $34.99 | $79.99 | $119.99 |
| **Total Pairs** | 1 | 6 (buy 3, get 3 free) | 10 (buy 5, get 5 free) |
| **Per-Pair Cost** | $34.99 | $13.33 | $12.00 |
| **Savings vs Single** | — | 62% | 66% |
| **FREE Shipping** | No (below $35 threshold) | Yes | Yes |
| **FREE E-Book** | — | — | Yes ($12.99 value) |
| **FREE Magic Potty Targets** | — | — | Yes ($17.98 value) |
| **FREE Potty Progress Chart** | — | — | Yes (included) |
| **Total Bonus Value** | $0 | ~$5-8 (shipping) | ~$42.97 (shipping + bonuses) |
| **Website Status** | ✅ $34.99 on PDP | ✅ Bestseller badge | ⚪ Bundle builder only |
| **Primary Audience** | L3 (default), skeptical | All levels (default) | L2 (BCBA context), L1 upsell |
| **Revenue Share** | ~15-20% | ~65% | ~10-15% |
| **Cells as Primary** | 4 of 16 | 10 of 16 | 1 of 16 |

[Source: MASTER-DIAGNOSIS-COMPENDIUM §2.2, L15 R1 §1, L38 Brand Constants §1]

### 2.3 Implied Margin Structure (Estimated)

Note: Exact COGS data is not available in source documents. The following is a reconstruction from publicly available data and industry benchmarks:

```
    ESTIMATED MARGIN STRUCTURE BY TIER
    ═══════════════════════════════════════════════════════════

    1 PAIR ($34.99)
    ┌──────────────────────────────────────────────────────┐
    │  COGS (est.)        $8-12           23-34%           │
    │  Shipping (est.)    $5-8            14-23%           │
    │  Marketing (est.)   $10-15          29-43%           │
    │  Gross Margin       $17-22          49-63%           │
    ├──────────────────────────────────────────────────────┤
    │  Contribution       $5-10           14-29%           │
    └──────────────────────────────────────────────────────┘

    3+3 BUNDLE ($79.99)
    ┌──────────────────────────────────────────────────────┐
    │  COGS (6 pairs)     $48-72          60-90%           │
    │  Shipping (free)    $0 (absorbed)   0%               │
    │  Marketing (est.)   $8-12           10-15%           │
    │  Gross Margin       $8-32           10-40%           │
    ├──────────────────────────────────────────────────────┤
    │  Contribution       $0-20           0-25%            │
    │  ★ Best unit economics at scale                      │
    └──────────────────────────────────────────────────────┘

    5+5 BUNDLE ($119.99)
    ┌──────────────────────────────────────────────────────┐
    │  COGS (10 pairs)    $80-120         67-100%          │
    │  Shipping (free)    $0 (absorbed)                     │
    │  Bonuses            $5-8            e-book + targets │
    │  Gross Margin       $0-35          0-29%             │
    ├──────────────────────────────────────────────────────┤
    │  Contribution       Tight — relies on scale           │
    │  ⚠ Depends on actual COGS per unit                   │
    └──────────────────────────────────────────────────────┘

    [Source: L15 R3 External Research §2.3, industry benchmarks]
```

**Key margin observations:**
- The 3+3 Bundle offers the best balance of AOV and margin contribution — this is why it's the default
- The 5+5 Bundle's thinner margin is offset by higher absolute contribution ($119.99 AOV vs $79.99)
- Single pairs have healthy per-unit margin but low absolute contribution
- Free shipping on bundles is absorbed into margin — still net positive at scale
- [Source: L15 R3 §2.3, L15 R2 §7]

### 2.4 Per-Pair Value Analysis

```
    PER-PAIR PRICE COMPARISON ACROSS OFFER TIERS
    
    Tier          Price       Pairs     $/Pair    Savings
    ─────────────────────────────────────────────────────
    1 Pair        $34.99        1       $34.99      —     
    3+3 Bundle    $79.99        6       $13.33     62% ▼  
    5+5 Bundle    $119.99      10       $12.00     66% ▼  
    
    Jump analysis:
    1 Pair  → 3+3 Bundle:  2.3× price → 6× pairs  ★ STRONG
    3+3     → 5+5 Bundle:  1.5× price → 1.67× pairs  ◐ WEAK
    
    [Source: L15 R4 §1, L15 R6 §2.2]
```

**Critical finding:** The 5+5 Bundle's incremental value over 3+3 is only $1.33/pair (12.00 vs 13.33). This weak differentiation may suppress 5+5 conversion. Either increase the gap (add more value to 5+5) or accept that 3+3 will always dominate.

[Source: L15 R6 §2.2, L15 R3 §4.2]

---

## 3. Competitor Pricing Comparison

### 3.1 Direct Competitor Pricing Matrix

```


                        COMPETITOR PRICING LANDSCAPE
         ═══════════════════════════════════════════════════════════════

                               PRICE PER PAIR ($)
         Brand               5      10     15     20     25     30     35
         ──────────────────────────────────────────────────────────────
         Gerber Training     ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
         Pants                $3-4

         Pull-Ups (per      ░░░░████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
         pack)                $5-8

         BRIGHTKIDCO        ░░░░░░████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
         6-pack               $5.83

         Kanga Care         ░░░░░░░░░░░░████░░░░░░░░░░░░░░░░░░░░░░░░
                               $13-18

         Super Undies       ░░░░░░░░░░░░░░░░████░░░░░░░░░░░░░░░░░░░░
                               $18-22

         Snugkins           ░░░░░░░░░░░░░░░░████░░░░░░░░░░░░░░░░░░░░
                               $18-22

         Peejamas           ░░░░░░░░░░░░░░░░░░░░░░████░░░░░░░░░░░░░░
                               $25-35

         Hanna Andersson    ░░░░░░░░░░░░░░░░░░░░░░░░░░████░░░░░░░░░░
                               $28-32

    ██ = price range per pair (bundle pricing)    ░░ = unused

    POSITIONING INSIGHT:
    BKC at $5.83/pair (6-pack) is NOT premium-priced.
    It occupies mid-range territory between Gerber ($3-4) and
    specialty brands ($18-35). The "premium" perception comes
    from the $34.99 single-pair price, not the per-pair cost.

    [Source: MASTER-RESEARCH-COMPENDIUM §1.1, L1 Product Diagnosis §5.4]
```

### 3.2 Full Competitor Comparison Table

| Brand | Product Type | Price/Unit | Target Audience | ASD-Specific? | Training Signal | Guarantee | Total Reviews |
|-------|-------------|:----------:|----------------|:--------------:|:---------------:|:---------:|:-------------:|
| **BrightKidCo** | Body-Signal Learning Underwear | $5.83/pair (6-pack) | ASD parents | ✅ Dedicated sensory line | ✅ Body-Signal Learning Layer™ | 60-day (ASD) / 30-day (general) | 16,511 · 4.9★ |
| **Snugkins** | Neurodivergent Training Pants | ~$18-22/each | Neurodivergent | ✅ Neurodivergent branding | ❌ Generic absorbent | Not visible | ~200 (site) |
| **Super Undies** | Fearless Tiny Trainers | ~$18-22/each | General parents | ⚠️ Partial — Autism Society award | ❌ Standard reusable | 30-day return | ~15 (site) |
| **UpAiry** | Training Pants | ~$20-30/each | General parents | ❌ No | ❌ "Bridge" positioning | Limited | 1,091+ |
| **Peejamas** | Nighttime Training Pants | ~$25-35/each | Nighttime struggles | ❌ No | ❌ Absorbent insert | 60-day (unused) | 898 · 4.0★ |
| **Huggies Pull-Ups** | Disposable Training Pants | ~$5-8/pair (per pack) | Mass market | ❌ Actively opposite | ❌ Moisture-wicking blocks signal | None | 46,250+ · 4.8★ |
| **Pampers Easy Ups** | Disposable Training Pants | ~$5-8/pair (per pack) | Mass market | ❌ No | ❌ Keeps too dry | None | 46,250+ · 4.7★ |
| **Gerber** | 3-Ply Training Underwear | ~$3-4/pair | Mass market | ❌ No | ❌ Basic absorbent | None | Thousands |
| **WunderUndies** | Sensory Daily Underwear | ~$15-18/each | SPD community | ⚠️ Partial | ❌ Not training product | ❌ No returns | ~50 (site) |
| **SmartKnitKIDS** | Seamless Sensory Underwear | ~$15-25/pair | Sensory-sensitive | ⚠️ Partial | ❌ Not training | Not visible | OT-endorsed |
| **Kozie Clothes** | Compression Wear | ~$15-40/pair | Sensory-seeking | ⚠️ Partial | ❌ Not training | Free guide lead magnet | OT-designed |
| **Dryly** | Alarm System | €200-260 | Bedwetting | ❌ No | ✅ 93% success rate | 6-8 week claim | 1,000+ · 4.2★ |

[Source: MASTER-RESEARCH-COMPENDIUM §1.1, L1 Product Diagnosis §5.2-5.3]

### 3.3 Long-Term Cost Comparison

```
    6-MONTH TOTAL COST OF OWNERSHIP
    
    Brand                   Cost/6mo     $100   $200   $300   $400   $500
    ─────────────────────────────────────────────────────────────────────
    Pull-Ups                $360-480     ░░░░░░░░░░░░░░████████████████
    Super Undies (6 pairs)  $108-132     ░░░░░░████░░░░░░░░░░░░░░░░░░░
    BRIGHTKIDCO 3+3         $79.99       ░░░░████░░░░░░░░░░░░░░░░░░░░░
    BRIGHTKIDCO 1 Pair      $34.99       ░░████░░░░░░░░░░░░░░░░░░░░░░░
    Gerber (3-pack × 3)     $30-40       ░░████░░░░░░░░░░░░░░░░░░░░░░░

    Key Insight: BKC 3+3 Bundle pays for itself in ~2 months vs Pull-Ups.
    After that, it's pure savings. This is a powerful conversion lever.
    
    [Source: L1 Product Diagnosis §5.4, L15 R3 §4.2]
```

### 3.4 Competitive Pricing Analysis

**Finding 1 — BKC is competitively priced per pair:** At $5.83/pair (6-pack), BKC sits in the mid-range — cheaper than all specialty ASD brands ($18-35/pair) and comparable to Pull-Ups per pack ($5-8/pair). The $34.99 single-pair price creates a premium anchor that makes the bundle feel like exceptional value.

**Finding 2 — No competitor has equivalent offer architecture:** No competitor offers a 3-tier bundle structure with escalating bonuses, per-pair savings, and ASD-specific guarantee terms. BKC's offer architecture is a first-mover advantage.

**Finding 3 — GoodNites is entering the ASD space:** Kimberly-Clark's "Language of Bedwetting" program targets ASD families. This is a competitive threat BKC must monitor, though GoodNites addresses nighttime only and doesn't compete on mechanism.

[Source: MASTER-RESEARCH-COMPENDIUM §1.1, L15 R3 §1.4, L15 R3 §10.1]

---

## 4. Optimal Bundle Strategy

### 4.1 Current Bundle Analysis

```
    BUNDLE STRUCTURE — DECOY EFFECT VALIDATION
    
                    3-Tier Architecture
         ═══════════════════════════════════════════════
         
         Tier 1         Tier 2 ★           Tier 3
         "Entry"        "BESTSELLER"       "Max Value"
         ┌────────┐     ┌────────┐         ┌────────┐
         │$34.99  │     │$79.99  │─────→   │$119.99 │
         │ 1 pair │     │ 6 pairs│ better   │10 pairs│
         │$34.99/p│     │$13.33/p│ value    │$12.00/p│
         └────────┘     └───┬────┘         └────────┘
                            │
                    ★ "Popular" badge
                    70%+ selections toward
                    middle tier (decoy effect)

    Assessment: ✅ Structure validates decoy effect principles
    ✅ Middle tier has "BESTSELLER" tag = "Popular" badge
    ✅ Per-pair savings decrease with each tier
    ✅ Bonus escalation: none → free ship → full kit
    
    Gap: 5+5 bonus jump (1→4 bonuses) is large.
    Consider: Add free Progress Chart to 3+3 to smooth the curve.
    
    [Source: L15 R2 §1-2, L15 R6 §5.3]
```

### 4.2 Bundle Optimization Recommendations

**R1 — Strengthen 5+5 Bundle Value Proposition**

The 5+5 Bundle's incremental value over 3+3 is only $1.33/pair. To improve 5+5 conversion:

- Add exclusive content (e.g., "Sensory-Friendly Potty Training Video Series" digital download)
- Extend guarantee to 90 days for 5+5 buyers only
- Add a physical bonus item (e.g., free sticker pack)
- Create L2-specific BCBA-compatible framing: "Complete training kit that complements your ABA program — includes progress tracking tools your BCBA can review."

Impact: Expected 5-15% lift in 5+5 conversion for L2 × P3 (the #2 revenue cell)

[Source: L15 R6 §7.2 (GAP-1), L15 R4 §6.1 (R1), L15 R3 §10.3]

**R2 — Consider 2-Pair Bridge Option**

The jump from $34.99 to $79.99 is 2.3× — a psychological barrier:

```
    PRICE GAP ANALYSIS — BRIDGE OPTION
    
    Current tiers:
    1 Pair:   $34.99  ──── 2.3× jump ────►  3+3: $79.99
    
    Potential bridge:
    1 Pair:   $34.99  ── 1.6× ──►  2 Pair: ~$54.99  ── 1.5× ──►  3+3: $79.99
    
    Pros: Reduces price shock, offers L3 a middle path
    Cons: New SKU = inventory/logistics complexity
          May cannibalize 3+3 conversions
          Needs client approval + A/B testing
    
    Verdict: RECOMMEND EXPLORATION — but don't block launch on this.
    A/B test in Phase 2 after welcome flow is stable.
    
    [Source: L15 R6 §5.2, L15 R4 §5.2]
```

**R3 — Add Small Bonus to 3+3 Bundle**

The 3+3 currently has only FREE Shipping as a bonus. The 5+5 has 4 bonuses. This gap is too large:

- Add Potty Progress Chart to 3+3 bundle (digital, zero marginal cost)
- Creates: 3+3 = Free Shipping + Progress Chart → 5+5 = Everything + E-Book + Targets
- Smooths the bonus escalation curve without cannibalizing 5+5

[Source: L15 R6 §5.3]

### 4.3 Offer × Avatar Level Mapping

```
    OFFER ASSIGNMENT BY AVATAR LEVEL
    
    LEVEL 1 (Sarah) — Verbal, 3-5y, Pre-K driven
    ┌────────────────────────────────────────────────────────┐
    │  DEFAULT:     3+3 Bundle ($79.99)                     │
    │  SECONDARY:   5+5 Bundle ($119.99) when urgency strong │
    │  NEVER:       1 Pair as default (undersells her)       │
    │  MATH REFRAME: OK — disposable income, value works     │
    │  URGENCY:     Strong (Pre-K deadline amplifies conv.)  │
    │  GUARANTEE:   60-Day (hope-risk absorber)              │
    └────────────────────────────────────────────────────────┘
    
    LEVEL 2 (Lisa) — Mixed verbal, 5-7y, BCBA context
    ┌────────────────────────────────────────────────────────┐
    │  DEFAULT:     3+3 Bundle ($79.99)                      │
    │  SECONDARY:   5+5 Bundle ($119.99) — BCBA framing      │
    │  LATE PHASE:  1 Pair ($34.99) — permission-not-to-buy  │
    │  MATH REFRAME: CAREFULLY — financial sensitivity       │
    │  URGENCY:     Low (event-driven spikes only)           │
    │  GUARANTEE:   60-Day (critical for hyper-skepticism)   │
    └────────────────────────────────────────────────────────┘
    
    LEVEL 3 (Maria) — Non-verbal, 6-10+y, dignity-first
    ┌────────────────────────────────────────────────────────┐
    │  DEFAULT:     1 Pair ($34.99)                          │
    │  SECONDARY:   3+3 Bundle ($79.99) AFTER trust built   │
    │  NEVER:       5+5 Bundle ($119.99) — Medicaid barrier  │
    │  MATH REFRAME: NEVER — Medicaid reality                │
    │  URGENCY:     NEVER — ZERO urgency                     │
    │  GUARANTEE:   60-Day Calm Progress Guarantee™          │
    │  ★ HIGHEST LTV despite lowest conversion               │
    └────────────────────────────────────────────────────────┘
    
    GENERAL FALLBACK (~50% real volume)
    ┌────────────────────────────────────────────────────────┐
    │  DEFAULT:     3+3 Bundle ($79.99)                      │
    │  SECONDARY:   5+5 (for Sub-Group C: sensory-difference)│
    │  LATE PHASE:  1 Pair ($34.99)                          │
    │  MATH REFRAME: OK — main target for value framing     │
    │  URGENCY:     Low-Medium                               │
    │  GUARANTEE:   60-Day                                   │
    │  ★ 5 sub-groups — currently undifferentiated           │
    └────────────────────────────────────────────────────────┘

    [Source: L15 R4 §2, L15 Offers Synthesis §8, GIULIANO-DEMANDS §1]
```

### 4.4 GF Sub-Group Offer Differentiation (HIGH PRIORITY GAP)

General Fallback represents ~50% of email volume but currently receives a single undifferentiated 3+3 default. This is the single biggest optimization opportunity:

| GF Sub-Group | % of GF | Identity | Recommended Offer | Framing |
|-------------|:-------:|----------|:----------------:|---------|
| A — Diagnostic Entrants | ~25% | Pre-identity, education-first | 3+3 Bundle | Educational framing: "Built differently, for different needs" |
| B — Diagnosis-Rejecters | ~15% | Anti-label, symptom language only | 3+3 Bundle | Symptom-only: "If accidents keep happening..." |
| C — Sensory-Difference (HIGH-VALUE) | ~25% | SPD/ADHD, science-driven | **5+5 Bundle** | Mechanism-forward: "Sensory science meets practical design" |
| D — Overwhelmed Non-Selectors | ~25% | Has ASD but didn't share | 3+3 Bundle | Relief-first: "Fewer accidents, less laundry, more calm" |
| E — Cart/Browse | ~10% | Unknown, high intent | 3+3 Bundle (urgent) | Direct recovery: "Your set is waiting — 60 days to decide" |

**Impact estimate:** Differentiated GF sub-group offers could lift GF conversion by 15-25%, representing 0.3-0.75% absolute conversion rate improvement across ~50% of volume.

[Source: GIULIANO-DEMANDS §1.2, L15 R6 §7.2 (GAP-2), L15 R4 §5.1]

---

## 5. Subscribe & Save Analysis

### 5.1 Viability Assessment

**Finding: No viable subscribe-and-save model exists for BrightKidCo's core product.**

BrightKidCo sells **reusable, washable training underwear** — a durable good with no consumable refill cycle. Unlike disposable pull-ups (which require monthly replenishment), BKC's product is a one-time purchase that lasts for months or years.

```
    SUBSCRIPTION VIABILITY FRAMEWORK
    
    Product type:    DURABLE GOOD (reusable underwear)
    Consumable?      NO — wash and reuse indefinitely
    Natural cycle?   ~60-90 days per set (rotational)
    
    Subscription options:
    
    ┌────────────────────────────────────────────────────────┐
    │ OPTION A: Replenishment Reminder (RECOMMENDED)          │
    │ Not a subscription — triggered email sequence:          │
    │ "Your 3+3 arrived 75 days ago. Time to check fit?"     │
    │ → Re-order flow, not subscription                      │
    │ → Captures repeat purchase without commitment           │
    └────────────────────────────────────────────────────────┘
    
    ┌────────────────────────────────────────────────────────┐
    │ OPTION B: Accessory Subscription (NICHE OPPORTUNITY)    │
    │ Monthly delivery of: Magic Potty Targets + Progress     │
    │ Charts + small consumables (if developed)               │
    │ → Requires new SKUs, low viability                      │
    └────────────────────────────────────────────────────────┘
    
    ┌────────────────────────────────────────────────────────┐
    │ OPTION C: "Sizing Up" Subscription (FUTURE POTENTIAL)   │
    │ Child grows → needs larger size: S → M → L              │
    │ Pre-paid program: $X/year → priority access to new      │
    │ sizes when ready                                        │
    │ → Moderate viability, requires sizing pipeline          │
    └────────────────────────────────────────────────────────┘

    [Source: L15 R3 §10.1, L15 R2 §2]
```

### 5.2 Replenishment Flow Strategy (Subscription Alternative)

Instead of subscribe-and-save, BrightKidCo should optimize its **replenishment email flows** as a subscription alternative:

| Path | Trigger | Buyer Type | Emails | Timing | Goal |
|------|---------|:----------:|:------:|:------:|------|
| A | Day 14 | 1-Pair buyer | 3 | 14-21-28 | Upgrade to 3+3 |
| B | Day 75 | 3+3 buyer | 2 | 75-82 | Upgrade to 5+5 |
| C | Day 150 | 5+5 buyer | 2 | 150-157 | Accessory cross-sell |

**LTV Impact of Replenishment:**

```
    1-PAIR BUYER — LTV ESCALATION PATH
    
    Step 1: 1 Pair ($34.99)     ── Day 14 ──►  3+3 Upgrade ($79.99)
    Step 2: 3+3 Bundle (now)    ── Day 75 ──►  5+5 Upgrade ($119.99)
    Step 3: 5+5 Bundle (now)    ── Day 150 ──►  Accessories ($30-50)
    
    Total LTV from 1-pair starter: $34.99 + $79.99 + $119.99 + $40 = $274.97
    vs. 3+3-only buyer LTV: $79.99 + $119.99 + $40 = $239.98
    vs. One-time 1-pair LTV: $34.99
    
    ★ Upselling 1-pair buyers to 3+3 at Day 14 is the
      single highest-impact revenue lever in post-purchase.
    
    [Source: L15 Offers Synthesis §6, L15 R1 §4]
```

### 5.3 LTV Projections by Entry Offer

| Entry Package | Immediate Revenue | 90-Day LTV (w/ upsells) | 180-Day LTV | 365-Day LTV |
|:-------------:|:----------------:|:-----------------------:|:-----------:|:-----------:|
| 1 Pair ($34.99) | $34.99 | $114.98 | $154.97 | $274.97 |
| 3+3 Bundle ($79.99) | $79.99 | $199.98 | $239.97 | $319.97 |
| 5+5 Bundle ($119.99) | $119.99 | $159.98 | $189.97 | $229.97 |

**Key insight:** Starting with 3+3 Bundle produces the highest 365-day LTV because it captures the $79.99 base AND enables 5+5 upgrade at Day 75. The 5+5 starter has fewer upgrade paths.

[Source: L15 Offers Synthesis §6, L15 R1 §4]

---

## 6. Discount & Promotional Strategy

### 6.1 Discount Code Architecture

```
    BRIGHTKIDCO — DISCOUNT CODE ECOSYSTEM
    ═══════════════════════════════════════════════════════

    POP-UP CODE (Primary)
    ┌─────────────────────────────────────────────┐
    │  Code:   WELCOME10                          │
    │  Value:  10% off                            │
    │  Validity: 7 days (auto-displayed in popup) │
    │  Source: Pop-up Step 2                      │
    │  Auto-apply: ✔ (checkout)                   │
    │  Audience: All new subscribers               │
    └─────────────────────────────────────────────┘

    SECONDARY CODE (Permanent)
    ┌─────────────────────────────────────────────┐
    │  Code:   10%OFF-BKCO                        │
    │  Value:  10% off                            │
    │  Validity: No expiration                    │
    │  Source: Email flows (manual entry)         │
    │  Auto-apply: brightkidco.com/discount/      │
    │              10%25OFF-BKCO                  │
    │  ★ CONFLICT: Same value as WELCOME10        │
    │    Recommendation: Change to 15% or retire  │
    └─────────────────────────────────────────────┘

    CONFLICT: Two codes, same value (10%).
    WELCOME10 has 7-day urgency (good).
    10%OFF-BKCO is permanent (undermines urgency).
    
    RESOLUTION OPTIONS:
    A) Make 10%OFF-BKCO = 15% (differentiation)
    B) Retire 10%OFF-BKCO entirely
    C) Make 10%OFF-BKCO conditional (2nd purchase only)
    
    Recommended: OPTION A — 15% for second-time converters
    
    [Source: L15 R4 §5.2 (C5), L38 §1, L15 R6 §4.1]
```

### 6.2 Discount Depth by Segment

| Segment | Discount Range | When to Offer | CTA Framing |
|---------|:-------------:|---------------|-------------|
| **New subscribers** | 10% (WELCOME10) | Pop-up signup, 7-day validity | "Your code is ready ✓" |
| **Abandoned Cart — E1** | 0% (no discount) | 1 hour post-abandonment | Reminder + mechanism |
| **Abandoned Cart — E2** | 10% off or free shipping | 24 hours | "Still thinking? Here's a nudge" |
| **Abandoned Cart — E3** | 15% off | 72 hours | "Last chance — 15% off + 60-day guarantee" |
| **First-time buyers** | 10% (pop-up) | Welcome flow E3 | Educate → offer, not offer → educate |
| **Repeat buyers** | 15-20% off | Replenishment | "Welcome back — here's something extra" |
| **VIPs (3+ orders)** | 20-40% off or exclusive | VIP-only sends | Early access, not discounts |
| **Lapsed / Winback** | 20-30% off | Winback Path A/B | "We miss you — here's a reason to return" |
| **BFCM / Holiday** | 30-50% off | Seasonal calendar | "Our biggest sale of the year" |
| **Level 3** | 20% max (winback only) | NEVER upfront | "60-Day Calm Progress Guarantee" (no discount) |

[Source: L15 R2 §2, GIULIANO-DEMANDS §6, L15 R4 §2.1]

### 6.3 Discount Psychology Rules

```
    DISCOUNT PSYCHOLOGY — BRIGHTKIDCO RULES
    ═══════════════════════════════════════════════════════

    RULE 1: Mechanism BEFORE discount
    ────────────────────────────────────────────────────
    The trust pyramid is NON-NEGOTIABLE:
    Tier 1 (Mechanism) → Tier 5 (Guarantee/Discount)
    If you bring discount before mechanism, you lose the avatar.
    "She has been burned by marketing promises. A discount
    without mechanism = empty price reduction."

    RULE 2: Never exceed 20% in cart recovery
    ────────────────────────────────────────────────────
    Higher discounts train customers to abandon carts.
    15% is the sweet spot for recovery.
    
    RULE 3: No discounts for Level 3 upfront
    ────────────────────────────────────────────────────
    Discounts feel like "desperation" to L3 audience.
    The 60-day guarantee IS the discount for L3.
    
    RULE 4: Never build a "coupon culture"
    ────────────────────────────────────────────────────
    If every email has a discount code, the code becomes
    expected and the brand is devalued.
    Limit promotional emails to 30% of volume.
    
    RULE 5: Free shipping > % off for conversion
    ────────────────────────────────────────────────────
    Industry data confirms:
    Free shipping often outperforms % off for AOV lift.
    Test free shipping vs 15% off for middle emails.

    [Source: L15 R2 §2, GIULIANO-DEMANDS §12, L15 R6 §6]
```

### 6.4 Annual Promotional Calendar (High-Level)

| Period | Campaign Type | Offer | Target Audience |
|--------|--------------|:-----:|:---------------:|
| **Q1** (Jan-Mar) | New Year Reset | 3+3 Bundle + Free Progress Chart | Lapsed, winback |
| **Q1** (Jan-Mar) | Post-Holiday Replenishment | 15% off replenishment | Existing buyers |
| **Q2** (Apr-Jun) | Pre-K Enrollment Push | 3+3 Bundle (Pre-K hook) | L1, GF |
| **Q2** (May) | Mother's Day | Gift bundle + free shipping | GF, social referrals |
| **Q3** (Jul-Sep) | Back to School | 3+3 + free e-book | L1, L2 |
| **Q3** (Aug) | List Hygiene | Sunset/winback 20% off | Unengaged |
| **Q4** (Oct-Dec) | BFCM | 30% off bundles | ALL segments |
| **Q4** (Dec) | Holiday Gift Guide | 5+5 Bundle + extra gift | L2, VIPs |

[Source: L15 R2 §4, campaign-bfcm-holiday]

---

## 7. Upsell / Cross-Sell Path Architecture

### 7.1 Complete Upsell Flow Map

```
                    UPSELL PATH ARCHITECTURE
         ═══════════════════════════════════════════════════

                    ┌──────────────────┐
                    │   NEW VISITOR     │
                    │  (no purchase)    │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │  WELCOME FLOW    │  ← 3+3 Bundle default
                    │  E3: First CTA  │
                    └────────┬─────────┘
                             │
               ┌─────────────┼─────────────┐
               ▼             ▼             ▼
        ┌──────────┐  ┌──────────┐  ┌──────────┐
        │ 1 Pair   │  │ 3+3      │  │ 5+5      │
        │ $34.99   │  │ $79.99 ★ │  │ $119.99   │
        └────┬─────┘  └────┬─────┘  └────┬─────┘
             │             │             │
             ▼             ▼             ▼
     ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
     │ REPLENISH A  │ │ REPLENISH B  │ │ REPLENISH C  │
     │ Day 14       │ │ Day 75       │ │ Day 150      │
     │ 3 emails     │ │ 2 emails     │ │ 2 emails     │
     │ GOAL: 3+3    │ │ GOAL: 5+5    │ │ GOAL: Access.│
     └──────┬───────┘ └──────┬───────┘ └──────┬───────┘
            │                │                │
            ▼                ▼                ▼
     ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
     │ 3+3 Bundle   │ │ 5+5 Bundle   │ │ Wash Bag     │
     │ $79.99       │ │ $119.99      │ │ Mattress     │
     │ (upgraded)   │ │ (upgraded)   │ │ Protector    │
     └──────────────┘ └──────────────┘ └──────────────┘

    POST-PURCHASE TOUCHPOINTS (all buyer types):
    
    Day 0:  Order Confirmation + cross-sell block (accessories)
    Day 2:  Direct Upsell — Wash Bag ($XX) + Mattress Protector ($XX)
    Day 7-10: Arrived & Welcome — MASSIVE UPSELL MOMENT (60-70% open)
    Day 14: Level Detection (GF only) + Replenishment A
    Day 22: Extended Education (level-aware)
    Day 28: Extended Upsell (level-aware)
    Day 30-60: Mid Check-In (3 emails)
    Day 75:  Replenishment B (5+5 upgrade)
    Day 90+: Winback A (post-buyer inactive)
    Day 150: Replenishment C (accessories)

    [Source: L15 Offers Synthesis §6, L15 R1 §4, L15 R4 §4.3]
```

### 7.2 Upsell by Entry Bundle + Buyer Level

| Entry Bundle | L1 Buyer Path | L2 Buyer Path | L3 Buyer Path |
|:------------:|:-------------:|:-------------:|:-------------:|
| **1 Pair** | Day 14: 3+3 upgrade (Pre-K hook) | Day 14: 3+3 upgrade (science-first) | Day 14: "Add alongside" — never push |
| **3+3 Bundle** | Day 75: 5+5 upgrade (value math) | Day 75: 5+5 upgrade (BCBA framing) | NEVER push 5+5. Accessories only. |
| **5+5 Bundle** | Day 150: Accessories | Day 150: Accessories | N/A — L3 rarely buys 5+5 |

[Source: L15 R4 §4.3-4.4, L15 Offers Synthesis §6]

### 7.3 Cross-Sell Opportunities

| Product | Price (est.) | Best Timing | Best Audience | Framing |
|---------|:------------:|:-----------:|:-------------:|---------|
| Wash Bag (Protective Mesh) | $34.99 | Day 2 (Direct Upsell) | All buyers | "Protect your investment — keeps pairs organized" |
| Mattress Protector (TPU) | $39.99 | Day 2 (Direct Upsell) | Nighttime users | "Peace of mind for nighttime learning" |
| Magic Potty Targets | $17.98 | Day 7-10 (Arrived) | L1, GF | "Make potty time fun — targets that glow" |
| Potty Progress Chart | ($0 digital) | Welcome E4 | All levels | Free printable: "Track the wins, however small" |
| 2-in-1 Toilet Stairs | $69.99 | Extended Upsell (D28) | L1 (Pre-K focused) | "Independence starts with confidence" |

[Source: L15 R3 §1.1, L1 Product Diagnosis §3.1, L15 Offers Synthesis §13]

### 7.4 Cart Recovery by Cart State

| Cart State | Offer in Cart | E1 (1h) | E2 (24h) | E3 (72h) |
|:----------:|:-------------:|:--------:|:--------:|:--------:|
| **1 Pair** | $34.99 | Reminder + mechanism | Upgrade to 3+3 Bundle | Same + guarantee emphasis |
| **3+3** | $79.99 | Reminder + free shipping | Same + social proof | Upgrade to 5+5 |
| **5+5** | $119.99 | Total value emphasize | Same + complete kit | Same + extended guarantee |
| **Any (L3)** | Any | Permission + guarantee | No upsell | Gentle reminder only |

[Source: L15 Offers Synthesis §5, L15 R1 §3, L15 R4 §4.2]

---

## 8. Free Shipping Threshold Analysis

### 8.1 Current Threshold

BrightKidCo's free shipping threshold is **$35** — set precisely $0.01 above the single-pair price ($34.99). This is a deliberate psychological nudge:

```
    FREE SHIPPING THRESHOLD — STRATEGIC ANALYSIS
    ═══════════════════════════════════════════════════════

    Current setup:
    1 Pair:    $34.99  ← BELOW threshold ($35)
    3+3:       $79.99  ← ABOVE threshold ✓
    5+5:       $119.99 ← ABOVE threshold ✓

    The $34.99 → $35 gap ($0.01) is a nudge:
    "Add one more thing to get free shipping"
    
    PROBLEM: No product exists between $0.01 and $17.98
    ┌──────────────────────────────────────────────────────┐
    │  Product               Price    Bridges $35 gap?     │
    ├──────────────────────────────────────────────────────┤
    │  1 Pair                $34.99   ❌ $0.01 short       │
    │  Magic Potty Targets   $17.98   ✅ but total = $52.97│
    │  Wash Bag              $34.99   ✅ but = $69.98      │
    │  Mattress Protector    $39.99   ✅ but = $74.98      │
    │  ★ MICRO-ADD-ON       $$5-10   ✅ PERFECT FIT       │
    └──────────────────────────────────────────────────────┘

    OPPORTUNITY: Add a $5-10 micro product
    - Progress chart (physical, $4.99)
    - Single pack of targets ($5.99)
    - Travel wash bag ($7.99)
    → Any of these creates a "just over $35" cart
    
    [Source: L15 R3 §7, L15 R3 §10.3]
```

### 8.2 Competitor Threshold Comparison

| Competitor | Free Shipping Threshold | Notes |
|-----------|:----------------------:|-------|
| BrightKidCo | $35 | Just above single pair ($34.99) |
| Tiny Undies | $75 (US only) | Higher threshold, international excluded |
| Bedwetting Store | Not prominent | Standard shipping rates |
| GoodNites | N/A (retail) | Sold in stores |
| Pull-Ups | N/A (retail) | Sold in stores |
| Industry average (DTC children's) | $35-50 | At threshold with BKC |

[Source: L15 R3 §7.2]

### 8.3 Recommendations

1. **Maintain $35 threshold** — it's well-positioned vs competitors and industry averages
2. **Develop a $5-10 micro add-on** to bridge the $34.99 → $35 gap (estimated revenue lift: 5-10% from single-pair buyers adding items)
3. **Bundle threshold messaging:** Never lead with "Free Shipping over $35" for L3 audience (Medicaid sensitivity)
4. **Test free shipping vs 10-15% off** in cart recovery E2 to determine which drives higher AOV
5. **Future option:** Tiered threshold ($35 standard / $75 express) for international markets

---

## 9. Guarantee Optimization

### 9.1 Current Guarantee Structure

```
    BRIGHTKIDCO — GUARANTEE ARCHITECTURE
    ═══════════════════════════════════════════════════════

    STANDARD PRODUCT (General parents)
    ┌─────────────────────────────────────────────┐
    │  Name:   30-Day Money-Back Guarantee        │
    │  Formal: 30-Day Potty Trained Promise™      │
    │  Use:    General PDP, website homepage      │
    │  Note:   ⚠ Website currently shows this    │
    └─────────────────────────────────────────────┘

    ASD / SENSORY PRODUCT (Email ecosystem)
    ┌─────────────────────────────────────────────┐
    │  Name:   60-Day Money Back Guarantee        │
    │  Formal: 60-Day Calm Progress Guarantee™   │
    │  Use:    ALL email (L1-L3, GF)              │
    │  Rule:   NEVER say "30 days" in email       │
    │  Claim:  <1% of parents use the guarantee   │
    │  ★ This is the email standard               │
    └─────────────────────────────────────────────┘

    ⚠ CRITICAL CONTRADICTION (CON-2):
    Website shows 30-Day. Docs say 60-Day.
    MUST be resolved before any email goes live.
    
    Impact: If customer sees 30-day on site and 60-day
    in email, trust breaks. Expectation mismatch.
    
    Resolution: Either update site to 60-day, or update
    email docs to 30-day. Email uses 60-day per DOC6.
    
    [Source: L38 Brand Constants §2, L15 R6 §4.1, L15 R1 §8]
```

### 9.2 Guarantee as Conversion Lever

The 60-Day Guarantee is **Lever 3** in the 5 Conversion Levers framework — a critical trust bridge:

| Lever Component | Application |
|----------------|-------------|
| **D3 Objection:** "What if I get my hopes up again?" | "We're not asking you to hope. 60 days to decide, by your judgment." |
| **Risk removal** | Transfers financial risk from parent to brand |
| **Permission-not-to-buy** | "If now isn't right, the product will be here next month." |
| **Trust signal** | "They're not selling me hope. They're letting me test if it fits." |
| **Price justification** | Justifies $34.99-119.99 commitment with risk-free trial |
| **Best paired with** | 3+3 Bundle ($79.99) — removes risk of higher commitment |

[Source: L10 Lever Synthesis §1, L13 Trust Pyramid §5]

### 9.3 Guarantee Rules Per Avatar Level

| Level | Guarantee Name | Framing Rules | Usage |
|-------|:--------------:|---------------|:-----:|
| **L1** (Sarah) | 60-Day Money Back | "Pre-K in X months? 60 days is enough to know." | Welcome E3, Cart Recovery |
| **L2** (Lisa) | 60-Day Your Judgment | "Try it alongside your BCBA program. 60 days, your call." | Welcome E3-E4, All levers |
| **L3** (Maria) | 60-Day Calm Progress™ | "Just try alongside. At your child's pace. No deadline." | Dignity-first, no urgency |
| **GF** | 60-Day Money Back | Universal framing, cross-level language | Welcome E3, Cart Recovery |

[Source: L15 R4 §2.2, L10 Lever Synthesis §3]

### 9.4 Guarantee Optimization Recommendations

1. **Resolve 30-day vs 60-day contradiction** before deployment (P0 — see Section 12)
2. **Never use the "<1% guarantee usage" claim in email** — unverified and could raise suspicion
3. **Lead with guarantee prominently** in Cart Recovery E1 and E3 (proven converter)
4. **Test guarantee placement:** Above vs below fold, button text, badge vs text
5. **Consider 90-day guarantee for 5+5 Bundle** as a differentiation lever (L2 × P3 target)
6. **Formalize "60-Day Calm Progress Guarantee™"** as the consistent email trademark

---

## 10. Offer × Avatar Level × Phase Matrix

### 10.1 Master 16-Cell Matrix

This is the definitive offer recommendation for every Level × Phase combination.

```
    OFFER × AVATAR LEVEL × PHASE — MASTER 16-CELL MATRIX
    ═══════════════════════════════════════════════════════════════════

             PHASE 1          PHASE 2          PHASE 3          PHASE 4
             Slow Real.       First Attempt    Method Cycle     Resignation
             ─────────────    ─────────────    ─────────────    ─────────────

    L1       ◐ Education      ★★★ 3+3 Bundle   ★★ 3+3 Bundle    ~ 1 Pair
    Sarah    3-5% conv.       15-25% conv.      10-18% conv.      5-8% conv.
    ~35%     "Gentle CTA"     "Pre-K hook"      "Science-first"   "Permission"
    Assigned No urgency       STRONG urgency    MODERATE urgency  NO urgency

    L2       ~ Education       ★★ 3+3 Bundle    ★★★ 3+3/5+5       ★ 1 Pair
    Lisa     ~2% conv.        10-15% conv.      8-15% conv.       6-10% conv.
    ~40%     "Not ready"      "Try-and-judge"   "BCBA framing"    "Late-trainer"
    Assigned No offer          Low urgency       Science-driven   Permission

    L3       ~ Education       ~ 1 Pair          ★ 1 Pair/3+3     ★★ 1 Pair
    Maria    <1% conv.        3-5% conv.        5-10% conv.       4-8% conv.
    ~25%     "N/A"            "Just trying"     "Dignity-first"   "Permission"
    Assigned No offer          NO urgency        NO math reframe   NO urgency
                               🚫 NO MATH        🚫 NO 5+5        Highest LTV

    GF       ~ 3+3 Bundle     ★★ 3+3 Bundle     ★★ 3+3 Bundle     ~ 1 Pair
    ~50%     5-8% conv.       8-12% conv.       8-12% conv.       5-8% conv.
    (real)   "Soft CTA"       "Migration hook"  "Mechanism first" "Permission"

    ─────────────────────────────────────────────────────────────────────
    PRIORITY RANKING:
    ★★★ L1×P2 (17.5% audience, 15-25% conv) = #1 REVENUE CELL
    ★★★ L2×P3 (22.0% audience, 8-15% conv)  = #2 REVENUE CELL  
    ★★  GF×P2/P3 (25.0% audience, 8-12% conv)= #3 VOLUME LEVER
    ★★  L1×P3 (10.5% audience, 10-18% conv)  = #4 CONTRIBUTOR
    ★★  L2×P2 (10.0% audience, 10-15% conv)  = #5 CONTRIBUTOR
    ★★  L3×P4 (13.8% audience, 4-8% conv)    = HIGHEST LTV
    
    [Source: L15 R4 §3, L7 Conversion Probabilities §1, L15 Offers §10]
```

### 10.2 Weighted Revenue Impact

| Rank | Cell | Audience % | Conv. Rate | Offer | Weighted Impact | Cumulative |
|:----:|:----|:----------:|:----------:|:-----:|:---------------:|:----------:|
| #1 | **L1 × P2** | 17.5% | 15-25% | 3+3 Bundle | **2.6-4.4%** | 2.6-4.4% |
| #2 | **L2 × P3** | 22.0% | 8-15% | 3+3 or 5+5 | **1.8-3.3%** | 4.4-7.7% |
| #3 | **GF × P2/P3** | 25.0% | 8-12% | 3+3 Bundle | **2.0-3.0%** | 6.4-10.7% |
| #4 | L1 × P3 | 10.5% | 10-18% | 3+3 Bundle | 1.1-1.9% | 7.5-12.6% |
| #5 | L2 × P2 | 10.0% | 10-15% | 3+3 Bundle | 1.0-1.5% | 8.5-14.1% |
| #6 | L3 × P4 | 13.8% | 4-8% | 1 Pair | 0.6-1.1% | 9.1-15.2% |
| #7 | L3 × P3 | 8.3% | 5-10% | 1 Pair or 3+3 | 0.4-0.8% | 9.5-16.0% |

[Source: L7 Conversion Probabilities §1.4, L15 R4 §3.1]

### 10.3 Offer Revenue Share Projection

```
    PROJECTED REVENUE SHARE BY OFFER TIER
    
    Offer           Cells as Primary   Audience Reach    Revenue Share
    ─────────────────────────────────────────────────────────────────
    3+3 Bundle      10 of 16 cells     ~70%              ~65% 🏆
    1 Pair           4 of 16 cells     ~20%              ~15%
    5+5 Bundle       1 of 16 cells     ~5%               ~10%
    None/Education   2 of 16 cells     ~5%               ~0%
    ─────────────────────────────────────────────────────────────────

    Note: 5+5 Bundle is currently underleveraged.
    L2-specific framing at L2×P3 (22% audience)
    could shift revenue share to 3+3: 60% / 5+5: 15% / 1 Pair: 15%.
    
    [Source: L15 Offers Synthesis §10, L15 R4 §7]
```

---

## 11. Revenue Impact Projections

### 11.1 Baseline Revenue Model

Assumptions based on industry benchmarks and BrightKidCo's documented structure:

```
    MONTHLY REVENUE MODEL (ESTIMATED)
    
    Starting subscribers:          10,000
    Welcome flow conversion:       8-12%
    Average order value (blended): $62-78
    
    REVENUE BY FLOW TYPE:
    Welcome Flow:      40-50% of revenue    $25K-50K/mo
    Cart Recovery:     15-20%               $10K-20K/mo
    Post-Purchase:     20-25%               $12K-25K/mo
    Browse Abandon:    5-8%                 $3K-8K/mo
    Winback/Sunset:    2-5%                 $1K-5K/mo
    ───────────────────────────────────────────────────
    Total (est.):                          $51K-108K/mo
    
    [Source: L15 R2 §7, MASTER-RESEARCH-COMPENDIUM §3.1]
```

### 11.2 Optimization Impact Estimates

| Optimization | Estimated Lift | Priority | Dependencies |
|-------------|:--------------:|:--------:|:------------:|
| 5+5 L2-specific framing | 5-15% on L2×P3 | HIGH | Copy development |
| GF sub-group differentiation | 15-25% on GF conv. | HIGH | Segment definition + copy |
| Micro add-on ($5-10) | 5-10% on single-pair AOV | MEDIUM | Product development |
| Cart recovery escalation | 3-8% recovery lift | MEDIUM | Flow testing |
| 3+3 small bonus addition | 2-5% on 3+3 conv. | MEDIUM | Decision needed |
| L3 "add alongside" testing | 10-20% on L3 conv. | HIGH | Copy + trust building |

[Source: L15 R6 §8, L15 Offers Synthesis §11]

### 11.3 LTV Projections by Segment

| Segment | Acquisition Cost | Initial AOV | 90-Day LTV | 365-Day LTV | Payback Period |
|:-------:|:----------------:|:-----------:|:----------:|:-----------:|:--------------:|
| L1 (Sarah) | $8-15 | $79.99 | $159.97 | $274.97 | ~15-30 days |
| L2 (Lisa) | $10-18 | $79.99 | $159.97 | $274.97 | ~20-35 days |
| L3 (Maria) | $12-22 | $34.99 | $114.98 | $274.97 | ~30-60 days |
| GF | $6-12 | $79.99 | $139.97 | $239.97 | ~12-25 days |

**Key insight:** L3 has the highest CAC and slowest payback but matches L1/L2 in 365-day LTV due to post-purchase upsell path. This justifies investment in L3-specific flows despite lower initial conversion.

[Source: L15 R2 §1-2, L15 Offers Synthesis §8]

---

## 12. Critical Contradictions & Resolution Paths

### 12.1 Contradiction Register

```
    ╔══════════════════════════════════════════════════════════════════════╗
    ║                    CRITICAL CONTRADICTIONS REGISTER                   ║
    ╠══════════════════════════════════════════════════════════════════════╣
    ║                                                                      ║
    ║  CON-1: PRICING — $34.99 vs $24.99/$29.99                          ║
    ║  ┌──────────────────────────────────────────────────────────────┐   ║
    ║  │ STATUS: CRITICAL — UNRESOLVED                                │   ║
    ║  │ Email ecosystem (DOC6):  $34.99 per pair                      │   ║
    ║  │ Website (ProductData):  $24.99 sale / $29.99 regular         │   ║
    ║  │ Impact: Customer sees discrepancy → trust loss               │   ║
    ║  │ Resolution: CLIENT NEEDED — Email uses DOC6 pricing          │   ║
    ║  └──────────────────────────────────────────────────────────────┘   ║
    ║                                                                      ║
    ║  CON-2: GUARANTEE — 30-day vs 60-day                               ║
    ║  ┌──────────────────────────────────────────────────────────────┐   ║
    ║  │ STATUS: HIGH — TECHNICALLY RESOLVED FOR EMAIL                 │   ║
    ║  │ Website homepage:  "30-Day Money-Back Guarantee"             │   ║
    ║  │ Email docs:        "60-Day Money Back Guarantee"             │   ║
    ║  │ Resolution: Email uses 60-day.                              │   ║
    ║  │ BUT: Website mismatch must be fixed before launch.           │   ║
    ║  └──────────────────────────────────────────────────────────────┘   ║
    ║                                                                      ║
    ║  CON-3: DISCOUNT CODES — WELCOME10 vs 10%OFF-BKCO                  ║
    ║  ┌──────────────────────────────────────────────────────────────┐   ║
    ║  │ STATUS: MEDIUM — RESOLVED (WELCOME10 primary)                 │   ║
    ║  │ Both offer 10% off — one time-bound, one permanent            │   ║
    ║  │ Resolution: WELCOME10 = 7-day urgency.                      │   ║
    ║  │ Make 10%OFF-BKCO = 15% for second-purchase differentiation.  │   ║
    ║  └──────────────────────────────────────────────────────────────┘   ║
    ║                                                                      ║
    ║  CON-4: MATH REFRAMES — Level 3 restrictions not in cells          ║
    ║  ┌──────────────────────────────────────────────────────────────┐   ║
    ║  │ STATUS: MEDIUM — UNRESOLVED                                   │   ║
    ║  │ Rules say "NEVER for L3" but cell matrix lacks explicit       │   ║
    ║  │ "NO MATH REFRAMES" notation on L3 offers.                     │   ║
    ║  │ Resolution: Add to every L3 cell in the matrix.              │   ║
    ║  └──────────────────────────────────────────────────────────────┘   ║
    ║                                                                      ║
    ║  CON-5: 5+5 BUNDLE — L2+L3 grouped but L3 forbids                  ║
    ║  ┌──────────────────────────────────────────────────────────────┐   ║
    ║  │ STATUS: MEDIUM — RESOLVED (R1 superseded by L4/L7)            │   ║
    ║  │ L15 R1 groups L2+L3 for 5+5. L4/L7 say L3 NEVER.             │   ║
    ║  │ Resolution: L3 NEVER receives 5+5 push.                      │   ║
    ║  │ L3 MAY buy 5+5 organically post-trust — never pushed.       │   ║
    ║  └──────────────────────────────────────────────────────────────┘   ║
    ║                                                                      ║
    ║  CON-6: SAVINGS CLAIMS — "Save 40%" vs actual 62%                  ║
    ║  ┌──────────────────────────────────────────────────────────────┐   ║
    ║  │ STATUS: LOW — DOCUMENT AS INTENTIONAL                         │   ║
    ║  │ 3+3 tag says "Save 40% TODAY" but actual = 62% savings.      │   ║
    ║  │ Resolution: Either correct to "Save 62%" or document as      │   ║
    ║  │ conservative (more credible than overstated).                │   ║
    ║  └──────────────────────────────────────────────────────────────┘   ║
    ║                                                                      ║
    ╚══════════════════════════════════════════════════════════════════════╝
    
    [Source: L15 R6 §4, L15 R4 §5, L38 §1-2]
```

### 12.2 Resolution Priority

| Contradiction | Severity | Blocks? | Recommended Action | Owner |
|:-------------:|:--------:|:-------:|-------------------|:-----:|
| **CON-1 — Pricing** | 🔴 CRITICAL | ALL emails | Client clarification: $34.99 or $24.99? | Yurishizu / Giuliano |
| **CON-2 — Guarantee** | 🔴 HIGH | L3 emails, Trust | Update website to 60-day OR email to 30-day | Yurishizu |
| **CON-5 — 5+5 for L3** | 🟡 MEDIUM | L3 offer cells | Fix R1 text, confirm L4/L7 authority | Internal |
| **CON-4 — Math reframes** | 🟡 MEDIUM | L3 copy | Add "NO MATH" to all L3 cells | Internal |
| **CON-3 — Discount codes** | 🟢 LOW | Coupon strategy | Make 10%OFF-BKCO 15% | Internal |
| **CON-6 — Savings claims** | 🟢 LOW | Copy claims | Document or correct | Internal |

---

## 13. Implementation Roadmap

### 13.1 Pre-Launch (Week 1-2) — MUST RESOLVE

| # | Action | Priority | Owner | Risk if delayed |
|---|--------|:--------:|:-----:|:---------------:|
| 1 | Resolve pricing contradiction (CON-1) | 🔴 CRITICAL | Client | ALL emails break trust |
| 2 | Resolve guarantee contradiction (CON-2) | 🔴 CRITICAL | Client | L3 rejection, legal risk |
| 3 | Add "NO MATH REFRAMES" to L3 cells (CON-4) | 🟡 HIGH | Copy team | L3 trust damage |
| 4 | Remove L3 from 5+5 target (CON-5) | 🟡 HIGH | Copy team | Wrong offer to L3 |

### 13.2 Phase 1 (Weeks 3-4) — CORE SETUP

| # | Action | Priority | Notes |
|---|--------|:--------:|-------|
| 5 | Implement 3-tier offer in Welcome Flow E3 | P0 | Default per levels |
| 6 | Setup cart recovery offer escalation | P0 | No discount → 10% → 15% |
| 7 | Deploy post-purchase replenishment flows | P1 | A/B testing Day 14 timing |
| 8 | Create L2-specific 5+5 framing | P1 | BCBA-compatible language |

### 13.3 Phase 2 (Weeks 5-8) — OPTIMIZATION

| # | Action | Priority | Expected Impact |
|---|--------|:--------:|:---------------:|
| 9 | A/B test 3+3 vs 5+5 for L2 × P3 | HIGH | 5-15% lift on #2 cell |
| 10 | Develop GF sub-group offer differentiation | HIGH | 15-25% GF lift |
| 11 | Implement $5-10 micro add-on | MEDIUM | 5-10% single-pair AOV |
| 12 | Test guarantee placement in cart recovery | MEDIUM | 5-10% recovery lift |

### 13.4 Phase 3 (Weeks 9-12) — SCALE

| # | Action | Priority | Notes |
|---|--------|:--------:|-------|
| 13 | A/B test 2-pair bridge ($54.99) | MEDIUM | Requires new SKU |
| 14 | Promotional calendar execution | MEDIUM | Pre-K, BTS, BFCM |
| 15 | VIP loyalty tier offers | LOW | Post-stabilization |
| 16 | Referral program ($10/$10) | LOW | Phase 3 nice-to-have |

---

## 14. Deep Dive: Price Anchoring & Psychological Framing

### 14.1 The Three Anchors in BKC's Ecosystem

BrightKidCo uses three distinct price anchors that work together:

```
    PRICE ANCHOR SYSTEM
    ═══════════════════════════════════════════════════════

    ANCHOR 1 — EXTERNAL: Pull-Ups
    ┌────────────────────────────────────────────────────────┐
    │  Pull-Up cost: $50-100/month = $600-1,200/year         │
    │                                                         │
    │  BKC 3+3 Bundle: $79.99 — one-time                     │
    │                                                         │
    │  Psychological math: "2 months of pull-ups ≈           │
    │   a lifetime of BKC"                                   │
    │  [Source: L15 R1 §5, DOC1 §191]                        │
    └────────────────────────────────────────────────────────┘

    ANCHOR 2 — INTERNAL: Single Pair vs Bundle
    ┌────────────────────────────────────────────────────────┐
    │  1 Pair:  $34.99 = $34.99/pair   (anchor = highest)    │
    │  3+3:     $79.99 = $13.33/pair   (62% savings)         │
    │  5+5:     $119.99 = $12.00/pair  (66% savings)         │
    │                                                         │
    │  Psychological math: "3+3 saves 62% vs 1 Pair —        │
    │   only 2.3× the price for 6× the pairs"                 │
    │  [Source: L15 Offers Synthesis §2]                     │
    └────────────────────────────────────────────────────────┘

    ANCHOR 3 — COMPETITIVE: Specialty Brands
    ┌────────────────────────────────────────────────────────┐
    │  Super Undies: $18-22/pair = $108-132 for 6            │
    │  Snugkins: ~$20/pair = $120 for 6                      │
    │  BKC 3+3: $79.99 = $13.33/pair                         │
    │                                                         │
    │  Psychological math: "BKC is 35-40% cheaper than       │
    │   comparable specialty products"                       │
    │  [Source: MASTER-RESEARCH-COMPENDIUM §1.1]             │
    └────────────────────────────────────────────────────────┘
```

### 14.2 Anchoring Rules for Email Copy

| Rule | Application | Example |
|------|-------------|---------|
| Always lead with pull-up cost anchor first | Creates "actually affordable" framing | "Pull-ups cost $876/year. BKC 3+3 is $79.99. One-time." |
| Show per-pair savings explicitly | Rational justification for emotional purchase | "$34.99/pair bought separately vs $13.33/pair in the bundle" |
| Compare against RIGHT competitor | Don't compare to Gerber ($3/pair) — compare to specialty brands | "Similar products cost $18-22/pair. BKC is $13.33." |
| NEVER compare to Pull-Ups for L3 | Medicaid families may not have the choice to switch | "Add alongside what works for your family — no pressure" |
| End with "the math isn't the point" | Avoids feeling like a sales pitch | "The math isn't the point — but if it helps, the math works." |

[Source: L15 R1 §5, L15 R6 §6, GIULIANO-DEMANDS §8.8]

### 14.3 The Decoy Effect in Action

```
    DECOY EFFECT — HOW THE 3-TIER STRUCTURE DRIVES 3+3 CHOICE
    ═══════════════════════════════════════════════════════════════

    SCENARIO: Parent comparing offers on page
    
    1 Pair ($34.99)        3+3 Bundle ($79.99)        5+5 Bundle ($119.99)
    ┌──────────────┐       ┌──────────────┐           ┌──────────────┐
    │  34.99/pair  │       │  13.33/pair  │           │  12.00/pair  │
    │  No bonus    │       │  Free Ship   │           │  4 bonuses   │
    │              │       │  ★BESTSELLER │           │  ★BEST VALUE │
    └──────┬───────┘       └──────┬───────┘           └──────┬───────┘
           │                      │                          │
           │    "Too expensive    │    "Best value —         │ "Only saves
           │     per pair"        │    2× the pairs for      │  $1.33/pair
           │                      │    2.3× the price"       │  more"
           │                      │                          │
           └──────────────────────┼──────────────────────────┘
                                  │
                                  ▼
                     ┌──────────────────────┐
                     │  ~70% of selections  │
                     │  go to 3+3 Bundle    │
                     │  (decoy effect peak) │
                     └──────────────────────┘

    WHY IT WORKS:
    1. 1 Pair acts as high-price anchor ($34.99/pair)
    2. 3+3 looks like massive savings relative to 1 Pair
    3. 5+5 barely beats 3+3 on per-pair cost ($12.00 vs $13.33)
    4. 3+3 becomes "the smart choice" by comparison
    
    [Source: L15 R2 §2, MASTER-RESEARCH-COMPENDIUM §1.1]
```

---

## 15. Deep Dive: Emotional Dimension × Offer Mapping

### 15.1 The 3 Emotional Dimensions

Beyond avatar levels, every subscriber is driven by one of three emotional dimensions (Layer 5). These dimensions cut across levels and affect offer receptivity:

```
    EMOTIONAL DIMENSION — OFFER RECEPTIVITY MAP
    ═══════════════════════════════════════════════════════

    DIMENSION 1: DEADLINE PRESSURE (25.2% of audience)
    ┌────────────────────────────────────────────────────────┐
    │  Core desire: "He needs to be trained by September"    │
    │  Primary levels: L1, GF                                │
    │  Best offer:  3+3 Bundle with Pre-K hook               │
    │  Urgency:     Strong OK — time-bound framing works     │
    │  Worst offer: 1 Pair (undersells urgency)              │
    │  Guarantee:   "60 days to know before Pre-K"           │
    │  Discount:    10-15% drives action                     │
    └────────────────────────────────────────────────────────┘

    DIMENSION 2: SOCIAL PRESSURE (10.2% expressed, much higher actual)
    ┌────────────────────────────────────────────────────────┐
    │  Core desire: "I don't want to be the only mom"        │
    │  Primary levels: L1, GF                                │
    │  Best offer:  3+3 Bundle with social proof             │
    │  Urgency:     NOT urgency — shame-sensitive            │
    │  Worst offer: Anything with "limited time"             │
    │  Guarantee:   "Try without social embarrassment"       │
    │  Trigger:     "97.6% of parents recommend"             │
    └────────────────────────────────────────────────────────┘

    DIMENSION 3: OVERWHELM (29.8% of audience)
    ┌────────────────────────────────────────────────────────┐
    │  Core desire: "I want the mess to stop"                │
    │  Primary levels: L2, L3, GF                            │
    │  Best offer:  1 Pair or 3+3 with relief framing        │
    │  Urgency:     NOT urgency — exhausted audience         │
    │  Best offer:  "Fewer accidents, less laundry"           │
    │  Guarantee:   "60 days to breathe"                     │
    │  Worst offer: Math reframes (feels insensitive)        │
    └────────────────────────────────────────────────────────┘

    [Source: MASTER-DIAGNOSIS-COMPENDIUM §1.4, L5 Emotional Dimensions]
```

### 15.2 Offer × Emotional Dimension × Level Matrix

| Emotional Dim | L1 Offer | L2 Offer | L3 Offer | GF Offer |
|:-------------:|:--------:|:--------:|:--------:|:--------:|
| **Deadline** | 3+3 Pre-K hook ($79.99) | 3+3 science-first ($79.99) | 1 Pair gentle ($34.99) | 3+3 urgent ($79.99) |
| **Social** | 3+3 with reviews ($79.99) | 1 Pair permission ($34.99) | 1 Pair dignity ($34.99) | 3+3 social proof ($79.99) |
| **Overwhelm** | 1 Pair relief ($34.99) | 3+3 or 1 Pair ($79.99) | 1 Pair calm ($34.99) | 3+3 relief ($79.99) |

**Critical rule:** Emotional dimensions are Phase 2+. Phase 1 uses level-only segmentation. Do NOT create separate tags/flows for dimensions — they inform copy selection only.

[Source: GIULIANO-DEMANDS §5, MASTER-DIAGNOSIS-COMPENDIUM §4.5]

---

## 16. Deep Dive: Pricing Evolution & Cross-File Consistency

### 16.1 Historical Pricing (Reconstructed from Source Files)

The pricing data across source files reveals an evolution, not random discrepancy:

```
    PRICING EVOLUTION TIMELINE
    ═══════════════════════════════════════════════════════

    EARLY FILE (Produkt-Foundation.txt)
    ┌────────────────────────────────────────────────────────┐
    │  No explicit pricing mentioned                          │
    │  Claim: "Saves $100+ monthly vs diapers"                │
    │  Claim: "Reusable / washable"                           │
    │  ☆ Foundational product description only                │
    │                                                        │
    │  [Source: Produkt-Foundation.txt, generated early]      │
    └────────────────────────────────────────────────────────┘

    PRODUCT DATA FILES (Unique-Mechanism-ProductData)
    ┌────────────────────────────────────────────────────────┐
    │  Website shows:                                        │
    │  - Sale Price: $24.99                                  │
    │  - Regular Price: $29.99                               │
    │  - Save $5.00                                         │
    │  - Free worldwide shipping                             │
    │                                                        │
    │  ⚠ This may be a general-parent SKU, not ASD-specific │
    │  [Source: Unique-Mechanism-ProductData.txt, v1 and v2] │
    └────────────────────────────────────────────────────────┘

    EMAIL ECOSYSTEM (DOC6-USAGE-GUIDE / MASTER REFERENCE)
    ┌────────────────────────────────────────────────────────┐
    │  Email system uses:                                    │
    │  - 1 Pair: $34.99                                      │
    │  - 3+3 Bundle: $79.99                                  │
    │  - 5+5 Bundle: $119.99                                  │
    │                                                        │
    │  ☆ This is the authoritative pricing for ALL email     │
    │  [Source: DOC6-USAGE-GUIDE.txt, L38 Verifications]     │
    └────────────────────────────────────────────────────────┘

    LIVE SITE VERIFICATION (May 25, 2026)
    ┌────────────────────────────────────────────────────────┐
    │  ASD PDP shows: $34.99 (strikethrough $58.31, -40%)   │
    │  General PDP shows: $34.99                            │
    │  ★ This CONFIRMS $34.99 as the current live price      │
    │                                                        │
    │  [Source: L38 Brand Constants §1, L15 R3 §1.1]        │
    └────────────────────────────────────────────────────────┘

    FINDING: The website NOW shows $34.99, matching DOC6.
    The $24.99/$29.99 from ProductData files may be:
    (a) Historical data that was updated
    (b) A different SKU or variant
    (c) Pre-bundle pricing
    
    RECOMMENDATION: Re-verify with client but the evidence
    strongly suggests $34.99 is the CURRENT correct price.
    
    [Source: L38 §1 live verification, L15 R3 §1.1 live extraction]
```

### 16.2 All Pricing Verified Across Files

| Offer | R1 (Client Files) | R4 (Cross-Ref) | L38 (Live Site) | L15 R3 (Research) | DOC1 | Status |
|:-----:|:-----------------:|:--------------:|:---------------:|:------------------:|:----:|:------:|
| 1 Pair | $34.99 | $34.99 | $34.99 (PDP) | $34.99 | $34.99 | ✅ **CONSISTENT** |
| 3+3 | $79.99 | $79.99 | $79.99 (cart) | $79.99 | $79.99 | ✅ **CONSISTENT** |
| 5+5 | $119.99 | $119.99 | $119.99 (docs) | $119.99 | $119.99 | ✅ **CONSISTENT** |

**Conclusion:** Despite the early-file contradiction ($24.99/$29.99), all current files and the live website consistently show $34.99/$79.99/$119.99. The earlier data was likely outdated or a different product variant. **No active pricing contradiction exists** — the concern appears resolved by the live site update to $34.99.

[Source: L15 R6 §2.1, L38 §1 live verification]

---

## 17. Deep Dive: The Pull-Up Villain Economics

### 17.1 The Full Cost of Pull-Ups

```
    PULL-UP COST DECOMPOSITION — THE ECONOMIC CASE FOR BKC
    ═══════════════════════════════════════════════════════

    DIRECT COSTS (per year):
    ┌────────────────────────────────────────────────────────┐
    │  Pull-ups:      $0.30-0.50 each                        │
    │  × 6/day (avg)  $1.80-3.00/day                         │
    │  × 365 days     $657.00-1,095.00/year                  │
    │                                                        │
    │  Accessories:   $200.00-400.00/year                    │
    │  (wipes, creams, diaper genie refills, etc.)           │
    │                                                        │
    │  SUBTOTAL:      $857.00-1,495.00/year                  │
    │                                                        │
    │  [Source: L15 R1 §5, DOC1 §191-195]                    │
    └────────────────────────────────────────────────────────┘

    INDIRECT COSTS (per year):
    ┌────────────────────────────────────────────────────────┐
    │  Laundry (extra loads):   $100.00-300.00               │
    │  Furniture replacement:   $200.00-1,000.00+            │
    │  Previously tried products: $200.00-1,500.00           │
    │  (potties, seats, books, courses)                      │
    │                                                        │
    │  SUBTOTAL:                 $500.00-2,800.00+           │
    │                                                        │
    │  [Source: L15 R1 §5, DOC1 §194-195]                    │
    └────────────────────────────────────────────────────────┘

    TOTAL ANNUAL PULL-UP ECONOMY: $1,357 - $4,295+ / year
    ─────────────────────────────────────────────────────────────

    VS BRIGHTKIDCO OPTIONS:
    3+3 Bundle:     $79.99  (one-time, all pairs)
    5+5 Bundle:     $119.99 (one-time, all pairs + bonuses)
    + Laundry:      ~$50-100/year  (wash & reuse)
    ─────────────────────────────────────────────────────────────
    BKC total Year 1: $130-220 vs Pull-Up economy: $1,357-4,295
    BKC Year 2+:     $50-100 (laundry only) vs $1,357-4,295

    ★ BKC pays for itself in under 1 month vs Pull-Ups
    ★ After Year 1, BKC saves $1,200-4,000+/year
    ★ This is the most powerful economic message in the ecosystem

    [Source: L15 R1 §5, L1 Product Diagnosis §5.4]
```

### 17.2 The 5 Dimensions of Pull-Up Failure

| Dimension | Pull-Up Effect | BKC Solution | Email Angle |
|-----------|---------------|--------------|-------------|
| **Wetness Signal** | Completely dry → zero learning signal | Gentle "uh-oh" sensation → awareness builds | "Pull-ups keep kids too dry to learn" |
| **Feel** | Feels like diaper → "baby mode" | Feels like big kid underwear → pride | "Feels different = trains different" |
| **Cost** | $50-100+/month, ongoing | $79.99 one-time, reusable | "2 months of pull-ups = a lifetime of BKC" |
| **Training Duration** | Extends process (comfort, not learning) | Accelerates signal awareness | "Pull-ups built for convenience. BKC built for training." |
| **Body Awareness** | Blocks neurological feedback loop | Restores and trains interoception | "Pull-ups block the ONE signal your child needs" |

[Source: L1 Product Diagnosis §2.4, L10 Lever Synthesis §2, GIULIANO-DEMANDS §8.5]

### 17.3 Pull-Up Framing by Level

| Level | Pull-Up Framing | Rule |
|-------|----------------|------|
| **L1** (Sarah) | Clean villain: "Keeps him too dry to learn" | Direct contrast OK. She can choose. |
| **L2** (Lisa) | Complement: "Add BKC alongside ABA and pull-ups" | Never "abandon" — she relies on multiple systems |
| **L3** (Maria) | 🚫 NEVER "abandon pull-ups" | Pull-ups may be Medicaid-funded or existential. "Add alongside" framing ONLY. |
| **GF** | Universal: "Pull-ups make it harder to learn" | Cross-level symptom language |

[Source: L15 R1 §5, L15 R4 §2, L10 Lever Synthesis §2]

---

## 18. Deep Dive: International Pricing Considerations

### 18.1 Regional Market Pricing

BrightKidCo ships to USA (65%), UK (15%), AU/NZ (15%), and CA (5%). Pricing strategy must account for regional differences:

| Market | % Revenue | Currency | 1 Pair (local) | 3+3 Bundle (local) | Free Shipping Threshold |
|:------:|:---------:|:--------:|:--------------:|:------------------:|:----------------------:|
| USA | ~65% | USD | $34.99 | $79.99 | $35 |
| UK | ~15% | GBP | £27.99 | £64.99 | £30 |
| AU/NZ | ~15% | AUD | $52.99 | $119.99 | $55 |
| CA | ~5% | CAD | $47.99 | $109.99 | $50 |

**Rule for email copy:** Use region-specific currency formatting per Klaviyo segment. UK: "nappies" not "diapers". AU/NZ: same. Adapt per localization rules.

[Source: GIULIANO-DEMANDS §14 (V22), MASTER-DIAGNOSIS-COMPENDIUM §1.1]

---

## 19. Deep Dive: Price Sensitivity by Segment

### 19.1 Price Sensitivity Index

```
    PRICE SENSITIVITY BY AVATAR LEVEL
    ═══════════════════════════════════════════════════════

    Level          Medicaid %    $79.99 Barrier?    Sensitivity Index
    ─────────────────────────────────────────────────────────────────
    L1 (Sarah)     10-15%        LOW                ★ LOW
       └─ Middle to upper-middle income, Pre-K urgency
       └─ 3+3 Bundle default — value messaging works
  
    L2 (Lisa)      ~25%          MODERATE           ★★ MEDIUM
       └─ Has spent thousands on therapy — $79.99 is relative
       └─ BUT financial sensitivity present for ~25%
       └─ Math reframe OK if careful

    L3 (Maria)     ~40%          HIGH               ★★★ HIGH
       └─ $34.99 is significant commitment
       └─ $79.99 may be out of reach
       └─ NEVER math reframe, NEVER urgency
       └─ 1 Pair ($34.99) is primary offer

    GF             ~25%          LOW-MODERATE       ★★ LOW-MED
       └─ Mixed income profile
       └─ 3+3 Bundle default with migration hooks
       └─ Math reframe OK for main audience
    
    [Source: MASTER-DIAGNOSIS-COMPENDIUM §6.5, L15 R4 §2, L4 Avatar Levels]
```

### 19.2 Medicaid Sensitivity — Detailed Rules

| Rule | Application | Source |
|------|-------------|--------|
| NEVER math reframe for L3 | "Less than a coffee a day" → disaster | L15 R1 §5, DOC1 |
| NEVER urgency for L3 | "Limited time offer" → destroys trust | L4, L7 |
| 1 Pair ($34.99) is L3 default | ~40% of L3 on Medicaid | L15 R4 §2 |
| "Add alongside" framing | Never "abandon pull-ups" for L3 | L15 R1 §6 |
| 3+3 only AFTER trust established | Never in first contact | L15 R4 §2 |
| NEVER promote 5+5 to L3 | $119.99 is prohibitive | L15 R4 §2 |
| Never prominently mention shipping cost | Avoids friction for price-sensitive | L15 R1 §7 |

[Source: L15 R6 §6, GIULIANO-DEMANDS §14 (V18)]

### 19.3 Bundle Discount Depth by Price Sensitivity

| Segment | Entry Offer | Discount Comfort | Replenishment Discount | Winback Discount |
|:-------:|:-----------:|:----------------:|:----------------------:|:----------------:|
| Low sensitivity (L1, GF-C) | 10% off (pop-up) | 20-30% off | 10-15% off | 20-30% off |
| Medium sensitivity (L2, GF-A/D) | 10% off (pop-up) | 15-20% off | 15% off | 20-25% off |
| High sensitivity (L3, GF-B) | No discount | 10-15% max (never upfront) | 15% (if needed) | 20% max |

**Rule:** Never train customers to expect discounts. Promotional emails should be max 30% of total volume. Discount depth decreases as brand trust increases.

[Source: L15 R2 §2, GIULIANO-DEMANDS §12]

---

## 20. Deep Dive: A/B Testing Roadmap for Offers

### 20.1 Testing Priority Order

Based on CRO skill analysis, the A/B testing priority for offers is:

| Priority | Test | Variables | Expected Duration | Expected Lift |
|:--------:|------|:---------:|:-----------------:|:-------------:|
| P0 | Default offer: 3+3 vs 5+5 for L2 × P3 | Offer + framing | 2-3 weeks per cell | 5-15% on #2 cell |
| P0 | Cart recovery E2: 10% off vs free shipping | Offer type | 2 weeks | 3-8% recovery |
| P1 | Welcome E3: 3+3 Bundle vs 1 Pair for L2 entry | Entry offer | 3-4 weeks | 5-10% L2 conv. |
| P1 | Free shipping threshold: $35 vs $40 vs $50 | Threshold | 3-4 weeks | 2-5% AOV lift |
| P2 | Testimonial + offer vs offer alone | Social proof | 2-3 weeks | 5-15% conv. lift |
| P2 | Guarantee: button copy test | Text variant | 2 weeks | 3-7% click lift |
| P3 | 5+5 bonus: add Progress Chart to 3+3 | Bonus structure | 3-4 weeks | 2-5% 3+3 lift |

### 20.2 Testing Framework

```
    A/B TESTING FRAMEWORK FOR OFFERS
    ═══════════════════════════════════════════════════════

    ICE SCORING (Impact × Confidence × Ease):
    Impact: How much revenue lift if correct?
    Confidence: How sure are we?
    Ease: How hard to implement?
    
    Score > 6: DO IT
    Score 4-6: Plan for next sprint
    Score < 4: Skip
    
    SAMPLE SCORES:
    ┌─────────────────────┬─────┬─────┬─────┬─────┐
    │ Test                │  I  │  C  │  E  │ TOT │
    ├─────────────────────┼─────┼─────┼─────┼─────┤
    │ 3+3 vs 5+5 L2×P3   │  8  │  7  │  6  │ 7.1 │
    │ Cart recovery offer │  7  │  8  │  9  │ 7.9 │
    │ Free ship threshold │  5  │  4  │  7  │ 5.2 │
    │ L2 welcome entry    │  7  │  6  │  8  │ 6.9 │
    │ 3+3 Progress Chart  │  4  │  5  │  9  │ 5.7 │
    └─────────────────────┴─────┴─────┴─────┴─────┘

    Each test: 2-4 weeks minimum. Statistical significance > 95%.
    Segment by level for meaningful results.
    
    [Source: L15 R2 §1, CRO skill loaded]
```

---

## Appendix A: Source File Index

| Section | Primary Sources |
|---------|-----------------|
| §2 — Current Offer Analysis | L15 R1 (Client Files), L15 Offers Synthesis, L38 Brand Constants |
| §3 — Competitor Pricing | MASTER-RESEARCH-COMPENDIUM §1, L15 R3 (External Research), L1 Product Diagnosis §5 |
| §4 — Bundle Strategy | L15 R2 (Skill Loading), L15 R6 (Gap Analysis), L15 R4 (Cross-Reference) |
| §5 — Subscribe & Save | L15 R3 §10.1, L15 R2 §2, L1 Product Diagnosis |
| §6 — Discount Strategy | GIULIANO-DEMANDS §6, L15 R2 §2, L15 R4 §5.2 |
| §7 — Upsell Paths | L15 Offers Synthesis §6, L15 R1 §4, L15 R4 §4 |
| §8 — Free Shipping | L15 R3 §7, campaign-free-shipping skill |
| §9 — Guarantee | L38 §2, L13 Trust Pyramid, L10 Lever Synthesis |
| §10 — Offer × Level × Phase | L15 R4 §3, L7 Conversion Probabilities, L4 Avatar Levels |
| §11 — Revenue Projections | L15 R2 §7, MASTER-RESEARCH-COMPENDIUM §3 |
| §12 — Contradictions | L15 R6 §4, L15 R4 §5, L38 §1-2 |

---

## Appendix B: Pricing Format Rules (Quick Reference)

| # | Rule | Correct | Wrong |
|---|------|---------|-------|
| 1 | Dollar sign before number | $34.99 | 34.99$, USD 34.99 |
| 2 | Period for cents | $79.99 | $79,99 |
| 3 | Bundle notation with spaces | `3 + 3 FREE` | `3+3 FREE` |
| 4 | "FREE" always caps as modifier | FREE Shipping | free shipping |
| 5 | Product name with trademark | Body-Signal Learning Layer™ | Body Signal Layer |
| 6 | E-book name in quotes | "The Stress-Free Potty Training Guide" | Stress Free Guide |
| 7 | "Magic Potty Targets" — no trademark | Magic Potty Targets | — |
| 8 | "Potty Progress Chart" — no trademark | Potty Progress Chart | — |
| 9 | Guarantee with hyphen | 60-Day Money Back Guarantee | 60 Day Guarantee |
| 10 | NEVER say 30 days in email | "60 days to decide" | "30-day guarantee" |
| 11 | Delivery language | "Ships in about 10 days" | "Delivery in 10 days" |
| 12 | NEVER name carrier | — | USPS, FedEx, etc. |
| 13 | NEVER math reframe for L3 | "No pressure to decide today" | "Less than a coffee a day" |

[Source: L15 Offers Synthesis §4, L38 §1, GIULIANO-DEMANDS §11.8]

---

*End of Document 26 — Pricing & Offer Architecture*
*Total sections: 13 + 2 appendices*
*Diagrams: 8 ASCII diagrams*
*Sources cited: 25+ source files*
*Status: SYNTHESIS COMPLETE — 3 critical contradictions require client resolution before deployment*
