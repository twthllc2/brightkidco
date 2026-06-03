# BrightKidCo — Retention & Loyalty Program Strategy

> **Systematic engine for maximizing customer lifetime value through subscription models, referral programs, loyalty rewards, and repeat purchase mechanics**
> Generated: May 28, 2026 | Sources: MASTER-DIAGNOSIS-COMPENDIUM, MASTER-INGESTION-COMPENDIUM, MASTER-RESEARCH-COMPENDIUM, GIULIANO-DEMANDS, Layers 4, 7, 8, 15, 16, 19, 38

---

## TABLE OF CONTENTS

1. [Current Retention Analysis & Benchmarks](#1-current-retention-analysis--benchmarks)
2. [Email Retention Program Optimization](#2-email-retention-program-optimization)
3. [Subscribe & Save Model with Pricing](#3-subscribe--save-model-with-pricing)
4. [Referral Program Design](#4-referral-program-design)
5. [Loyalty Program Framework](#5-loyalty-program-framework)
6. [Repeat Purchase Trigger Analysis](#6-repeat-purchase-trigger-analysis)
7. [LTV Optimization Levers Prioritized](#7-ltv-optimization-levers-prioritized)
8. [Implementation Roadmap](#8-implementation-roadmap)
9. [Metrics & KPI Dashboard](#9-metrics--kpi-dashboard)

---

## 1. CURRENT RETENTION ANALYSIS & BENCHMARKS

### 1.1 The Retention Opportunity

BrightKidCo operates in a market where **acquisition is expensive and retention is structurally underbuilt.** Current email ecosystem diagnosis reveals:

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              RETENTION ECOSYSTEM — CURRENT STATE ASSESSMENT                  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  EXISTING (Phase 1-3 Flows)                  ABSENT (Not Yet Built)         ║
║  ┌─────────────────────────────────────┐    ┌─────────────────────────────┐  ║
║  │ ✅ Welcome Flow (8×4 = 32 mails)    │    │ ❌ Subscribe & Save Model    │  ║
║  │ ✅ Post-Purchase Education (4)       │    │ ❌ Loyalty Points Program    │  ║
║  │ ✅ PP-Extended Education (5×4=20)   │    │ ❌ VIP Tier System           │  ║
║  │ ✅ Replenishment A/B/C (7 mails)    │    │ ❌ Birthday/Anniversary Flow │  ║
║  │ ✅ Winback Path A (3×4=12 mails)    │    │ ❌ Community Retention Loop  │  ║
║  │ ✅ Winback Path B (3×4=12 mails)    │    │ ❌ Product Subscription       │  ║
║  │ ✅ Review Request (2 mails)          │    │ ❌ Cross-Sell Program        │  ║
║  │ ✅ Referral Flow (3 mails)          │    │ ❌ Lapsed Buyer Auto-Renew   │  ║
║  │ ✅ Sunset Flow (2 mails)            │    └─────────────────────────────┘  ║
║  └─────────────────────────────────────┘                                     ║
║                                                                              ║
║  STRENGTHS: Post-purchase education is strong. Winback paths exist for      ║
║  both buyers and never-bought subscribers. Replenishment flows by pack size. ║
║                                                                              ║
║  GAPS: No recurring revenue model. No structured loyalty. No VIP treatment.  ║
║  No birthdate/anniversary personalization. No community loop back.           ║
║  Referral is Phase 3 (currently not built).                                  ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

**Retention analysis per avatar level** (source: MASTER-DIAGNOSIS-COMPENDIUM §4.2):

| Level | Current Repeat Purchase Rate | LTV Multiplier vs Single Purchase | Retention Challenge |
|-------|:---------------------------:|:---------------------------------:|---------------------|
| L1 Sarah | Moderate (~25%) | 1.4× | Pre-K urgency masks need — once deadline passes, urgency drops |
| L2 Lisa | Low (~15%) | 1.3× | Hyper-skeptical, single-purchase mindset, BCBA override |
| **L3 Maria** | **Highest (~35%)** | **2.1× 🏆** | **Lowest conversion but highest LTV** (DIAG §1.3) |
| GF General | Very Low (~10%) | 1.1× | Unknown profile, weak emotional connection |

**Critical finding** (source: MASTER-DIAGNOSIS-COMPENDIUM §1.3):
> "Level 3 has the **lowest conversion rate but the highest LTV after purchase.**"
> This means L3 buyers are the most retention-investment-worthy segment — yet they receive the gentlest, lowest-urgency treatment.

### 1.2 Industry Benchmarks vs BKC Projections

Benchmarks from MASTER-RESEARCH-COMPENDIUM §3.1:

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║          RETENTION BENCHMARKS — BKC TARGET vs INDUSTRY STANDARDS             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  METRIC                  │ ECOMM FLOOR  │ INDUSTRY AVG  │ BKC TARGET         ║
║ ─────────────────────────┼──────────────┼───────────────┼─────────────────── ║
║  Repeat Purchase Rate    │ 15-20%       │ 27%           │ 35% (stretch 45%)  ║
║  Purchase Frequency      │ 1.5×/yr      │ 2.0×/yr       │ 2.5×/yr            ║
║  Average Order Value     │ $45          │ $65           │ $79.99 (3+3 bundle)║
║  Customer Lifetime Value │ $100         │ $200          │ $300 (stretch $450)║
║  Churn Rate (annual)     │ 70-80%       │ 60-70%        │ 50% (stretch 40%)  ║
║  Retention Rate          │ 20-30%       │ 30-40%        │ 50% (stretch 60%)  ║
║  Welcome Flow RPR        │ $1.00        │ $2.00-3.00    │ $3.00-4.00         ║
║  Abandoned Cart RPR      │ $1.50        │ $3.65         │ $4.00-5.00         ║
║  Winback Conversion      │ 1-3%         │ 3-5%          │ 5-8%               ║
║                                                                              ║
║  KEY INSIGHT: BKC's niche (autism parents) naturally has HIGHER retention   ║
║  potential than generic ecommerce because:                                   ║
║  1. Product is consumable-repeatable (wash, wear, replace — ~6mo cycle)    ║
║  2. Emotional connection is deep (Lena voice, peer-to-peer)                 ║
║  3. Community effect (autism parent groups, Reddit, Facebook)               ║
║  4. Pull-up replacement = ongoing savings ($50-100/mo)                      ║
║  5. Child grows → needs new sizes (natural replenishment cycle)             ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 1.3 Retention Economics — Single Purchase vs LTV Build

**Current state:** Most buyers purchase once (3+3 Bundle, $79.99). Retention triggers exist (Replenishment flows) but are Phase 2-3 (not yet built).

**Projected LTV by tier** (source: GIULIANO-DEMANDS §2, LAYER-15):

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║           CUSTOMER LIFETIME VALUE — 24-MONTH PROJECTION BY TIER              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TIER         │ SINGLE PURCHASE  │ CURRENT LTV  │ TARGET LTV  │ UPSIDE      ║
║ ──────────────┼──────────────────┼──────────────┼─────────────┼───────────── ║
║  One-Time     │ $79.99           │ $79.99       │ $79.99      │ N/A         ║
║  Repeat Buyer │ $159.98 (2×)     │ $159.98      │ $239.97     │ +50%        ║
║  Loyalist     │ $399.95 (5×)     │ $399.95      │ $559.93     │ +40%        ║
║  VIP          │ $799.90 (10×)    │ $799.90      │ $1,199.85   │ +50%        ║
║  Advocate     │ $799.90 + refs   │ $1,199.85    │ $1,799.78   │ +50%        ║
║                                                                              ║
║  ASSUMPTIONS:                                                               ║
║  • Average order: $79.99 (3+3 bundle)                                      ║
║  • Repeat buyer = 2 purchases over 18 months                                ║
║  • Loyalist = 5 purchases over 24 months (every ~5 months)                 ║
║  • VIP = 10 purchases over 24 months (every ~2.5 months — Subscribe & Save)║
║  • Advocate = 10 purchases + 3 successful referrals @ $34.99 avg           ║
║  • Current LTV WITHOUT retention program = ~1.3× single purchase avg       ║
║  • Target LTV WITH retention program = ~3.0× single purchase avg           ║
║                                                                              ║
║  ⚠ Note: L3 buyers have 2.1× LTV on average — this is 60% higher than      ║
║  baseline. Retention investment should skew toward L3 despite lower volume. ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 1.4 Retention Bottleneck — The 6 Factors

Based on diagnosis compendium analysis, 6 structural factors suppress retention:

| Factor | Impact | Root Cause | Source |
|--------|:------:|------------|--------|
| Product is durable (not consumable daily) | HIGH | Training underwear lasts months — no daily need to rebuy | LAYER-15 |
| One-time purchase mindset | HIGH | Customers buy "to solve problem" not "to subscribe" | GIULIANO-DEMANDS §2 |
| Price sensitivity (Medicaid L3) | MEDIUM | $79.99 is a significant commitment for ~40% of L3 | MASTER-DIAGNOSIS §6.5 |
| No subscription infrastructure | HIGH | No recurring billing, no auto-replenishment | LAYER-16 |
| Post-purchase education (Phase 2) | MEDIUM | Builds habit but not loyalty mechanism | LAYER-16 §PP-Education |
| Winback-only re-engagement | MEDIUM | Passive waiting for churn rather than active retention | LAYER-16 §Winback |

---

## 2. EMAIL RETENTION PROGRAM OPTIMIZATION

### 2.1 Post-Purchase Email Flow — Current Architecture

The existing post-purchase flow architecture (source: LAYER-16 §Flow Connection Map):

```text
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║              POST-PURCHASE FLOW ARCHITECTURE — CURRENT STATE                            ║
╠══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                          ║
║  ORDER PLACED                                                                           ║
║     │                                                                                     ║
║     ├── D0:  Order Confirmation (1)    — Transactional, cross-sell block                  ║
║     ├── D1:  Shipping Notification (1) — Transactional, tracking                          ║
║     ├── D3:  Out for Delivery (1)      — Optional, arrival anticipation                   ║
║     ├── D5:  Arrived & Welcome (1)     — Massive upsell opportunity                       ║
║     │                                                                                     ║
║     ├── D7:  PP-Direct Upsell (2)      — Wash Bag + Mattress Protector ($12.99-$24.99)  ║
║     ├── D14: PP-Level Detection (1)    — GF → Level-Specific (40-50% migration)          ║
║     │                                                                                     ║
║     ├── D0-21: PP-Education (4)       — Cross-level education + habit building           ║
║     ├── D7:    PP-Mary S. Story (1)   — Founder story (Phase 2)                         ║
║     │                                                                                     ║
║     ├── D14:   PP-Extended Upsell (3) — Bundle upsells                                    ║
║     ├── D30:   PP-Mid Check-In (3)    — Check progress + troubleshoot                     ║
║     │                                                                                     ║
║     ├── D22+:  PP-Extended Education (5×4=20) — Level-specific deeper education          ║
║     └── D45+:  PP-Support At-Risk (4)  — Engagement rescue                                ║
║                                                                                          ║
║  ┌──────────────────────────────────────────────────────────────────────────────────┐   ║
║  │ KEY RETENTION GAP: No flow explicitly teaches WHY to buy again. Education builds │   ║
║  │ trust but doesn't build purchase habit. Replenishment triggers passive but        │   ║
║  │ misses the emotional "I want to support this brand" moment.                      │   ║
║  └──────────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                          ║
╚══════════════════════════════════════════════════════════════════════════════════════════╝
```

### 2.2 Replenishment Flow Optimization — By Pack Size

Current Replenishment paths (source: LAYER-16 §Replenishment A/B/C, LAYER-15):

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              REPLENISHMENT FLOW — TIMING CALIBRATION BY PACK SIZE            ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  PACK SIZE     │ PAIRS  │ EST. DURATION  │ REPLENISH TRIGGER │ URGENCY ANGLE  ║
║ ───────────────┼────────┼────────────────┼───────────────────┼──────────────── ║
║  1 Pair        │ 1      │ ~30 days       │ Day 21            │ "Running low"  ║
║  3+3 Bundle    │ 6      │ ~90-120 days   │ Day 75            │ "Time to restock"║
║  5+5 Bundle    │ 10     │ ~150-180 days  │ Day 120           │ "Stock up again"║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ OPTIMIZATION: Replenishment flows should use LEVEL-SPECIFIC copy      │   ║
║  │ despite being cross-level in current architecture. L3 replenishment   │   ║
║  │ needs dignity-first framing ("ready for the next set"). L1 can use    │   ║
║  │ lighter urgency ("don't run out"). L2 needs science framing.          │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  REPLENISHMENT A (1-pair buyers — 3 emails):                                ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ E1 (D21): "How's it going?" — Check in + mechanism reminder          │   ║
║  │ E2 (D30): "Most parents order more about now" — Social proof + 3+3   │   ║
║  │ E3 (D45): "60-day check — how is your child responding?" — Guarantee │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  REPLENISHMENT B (3+3 buyers — 2 emails):                                   ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ E1 (D75): "Your 3+3 bundle is probably running thin" — Reframe value │   ║
║  │ E2 (D90): "Should we send another set?" — Direct CTA, upsell to 5+5 │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  REPLENISHMENT C (5+5 buyers — 2 emails):                                   ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ E1 (D120): "Still going strong?" — Check-in, usage tips              │   ║
║  │ E2 (D150): "Time to re-up the supply" — Reorder, VIP pricing offer   │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 2.3 Mid-Check-In Flow — Retention Intervention Point

PP-Mid Check-In (3 emails at D30-60) is the **critical retention intervention point** (source: GIULIANO-DEMANDS §2.2):

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              PP-MID CHECK-IN — RETENTION INTERVENTION ARCHITECTURE           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ EMAIL 1 (D30): "30 days in — what you might be seeing"               │   ║
║  │ ┌──────────┐ ┌─────────┐ ┌─────────┐ ┌────────────┐                  │   ║
║  │ │ VALIDATE  │ │ TROUBLE │ │ MINI-WIN │ │ LENA SIGN  │                  │   ║
║  │ │progression│ │ -SHOOT  │ │ STORIES  │ │ OFF        │                  │   ║
║  │ └──────────┘ └─────────┘ └─────────┘ └────────────┘                  │   ║
║  │ CTA: "Share your progress with us — reply with what you've noticed" │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ EMAIL 2 (D45): "When progress feels slow — here's why"               │   ║
║  │ CTA: "Need a second pair rotation? Many parents order more here."    │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ EMAIL 3 (D60): "Your 60-day check (by your judgment)"                │   ║
║  │ CTA: "Love them? Tell another mom. Not sure? Reply to Lena."        │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  ⚠ CRITICAL: This is where most brands lose customers. The check-in must   ║
║  NOT feel like a sales follow-up. It must feel like Lena checking in.      ║
║  Any hint of "you should buy more" will trigger L2 skepticism.            ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 2.4 Winback Flow Optimization — Level-Specific Approaches

Winback Paths (source: GIULIANO-DEMANDS §2.2, LAYER-16):

| Flow | Trigger | Emails | Level Variants | Expected Recovery |
|------|---------|--------|:--------------:|:-----------------:|
| Winback A (post-buyer) | 90d no engagement | 3 × 4 = 12 | ✅ Yes | 5-8% |
| Winback B (never-bought) | 60d no purchase | 3 × 4 = 12 | ✅ Yes | 3-5% |

**Level-specific Winback tonality:**

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              WINBACK TONALITY — PER-LEVEL CALIBRATION                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  L1 WINBACK — 55/45 Hope/Realism                                            ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ E1 (D90): "We noticed it's been a while — has anything changed?"     │   ║
║  │ E2 (D100): "New Pre-K year? Here's how to prepare"                   │   ║
║  │ E3 (D110): "Back-to-school stocking reminder"                         │   ║
║  │ Urgency: ✅ Allowed (Pre-K calendar driven)                          │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  L2 WINBACK — 35/65 Hope/Realism                                           ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ E1 (D90): "How's the body-signal journey going? Any progress?"       │   ║
║  │ E2 (D100): "New research on interoception — 2-min read"              │   ║
║  │ E3 (D110): "Your BCBA might not know about this (updated fact-sheet)"│   ║
║  │ Urgency: ❌ Not allowed. Science-forward only.                       │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  L3 WINBACK — 20/80 Hope/Realism                                           ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ E1 (D90): "Just checking in — no pressure. How is your child doing?" │   ║
║  │ E2 (D100): "A story from another parent who was where you are"       │   ║
║  │ E3 (D110): "Whenever you're ready — same 60-day promise stands"      │   ║
║  │ Urgency: 🚫 ABSOLUTELY NEVER. Dignity-first always.                  │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GF WINBACK — 45/55 Hope/Realism                                           ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ E1 (D90): "Did you find the help you were looking for?"              │   ║
║  │ E2 (D100): "Whether your child is 3 or 10..." (R3 cross-level)      │   ║
║  │ E3 (D110): "Last email — Lena's honest note"                         │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 2.5 At-Risk Flow — Prevention Before Churn

PP-Support At-Risk (4 emails, Phase 3) is triggered by 3-7 days of no opens (source: LAYER-8 §4.2):

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              AT-RISK INTERVENTION — ESCALATION PROTOCOL                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  DETECTION: 3-7 consecutive days with no opens                              ║
║      │                                                                        ║
║      ▼                                                                        ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ LEVEL 1 (D7 no opens): Subject line change — "Lena here"             │   ║
║  │ └─ Change from name or subject to trigger re-engagement              │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║      │                                                                        ║
║      ▼                                                                        ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ LEVEL 2 (D14 no opens): "Did we lose you?" — Honest check-in         │   ║
║  │ └─ "Reply to tell Lena what's up. Or just ignore this."              │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║      │                                                                        ║
║      ▼                                                                        ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ LEVEL 3 (D21 no opens): "One more try" — Last value email            │   ║
║  │ └─ Strongest mechanism content, no CTA except "save this for later"  │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║      │                                                                        ║
║      ▼                                                                        ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ LEVEL 4 (D30 no opens): Escalation to Winback A (post-buyer)         │   ║
║  │ └─ After Winback A fails: Sunset (120d)                             │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  ⚠ KEY RULE: Never send at-risk intervention to L3 with urgency.            ║
║  L3 "no opens" may mean caregiver burnout, not disinterest.                  ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 2.6 Sunset Flow — Clean Exit

Sunset Flow (2 emails, Phase 3) at 120 days inactivity (source: LAYER-8 §4.2):

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              SUNSET FLOW — FINAL TWO EMAILS                                  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  CONDITION: inactive_120_days tag applied                                   ║
║      │                                                                        ║
║      ▼                                                                        ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ SUNSET E1: "We'll miss you — here's a last resource"                 │   ║
║  │ └─ High-value content gift (free guide, printable)                  │   ║
║  │ └─ "If you ever need us, we're here"                                │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║      │                                                                        ║
║      ▼                                                                        ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ SUNSET E2: "Last email from BrightKidCo"                             │   ║
║  │ └─ Lena's personal note — "Both my sons... I understand."           │   ║
║  │ └─ "Click here if you'd like to stay" (last-chance re-engage)       │   ║
║  │ └─ 14 days after: Suppression + tag: unengaged = true               │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  SUPPRESSED (Master Suppression List)                                       ║
║  └─ Can only re-enter via fresh signup or manual reactivation              ║
║                                                                              ║
║  EXPECTED RE-ENGAGEMENT RATE: 2-5% on E1, 1-3% on E2                        ║
║  LIST CLEANLINESS TARGET: <0.5% bounce rate, <0.01% spam complaints         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 3. SUBSCRIBE & SAVE MODEL WITH PRICING

### 3.1 The Subscribe & Save Opportunity

BrightKidCo's product is **naturally suited for subscription** for 5 reasons (source: MASTER-INGESTION §4.3, MASTER-RESEARCH §1.1):

1. **Consumable by nature** — Training underwear wears out, needs replacement
2. **Child grows** — Size changes every 6-12 months
3. **Multi-pair usage** — Families need 5-10 pairs in rotation
4. **Pull-up replacement cost** — $50-100/month ongoing (Subscribe & Save at $40-60/month = savings)
5. **Competitor gap** — NO competitor has a subscription model for autism training underwear

### 3.2 Subscribe & Save Tier Structure

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              SUBSCRIBE & SAVE — THREE-TIER PROPOSAL                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TIER           │ FREQUENCY  │ DELIVERY     │ PRICE     │ SAVINGS  │ BEST FOR║
║ ────────────────┼────────────┼──────────────┼───────────┼──────────┼──────── ║
║  Starter        │ Every 2 mo │ 3 pairs      │ $39.99    │ 10%      │ L3/L1   ║
║  Standard 🏆   │ Every 3 mo │ 6 pairs (3+3)│ $69.99    │ 12.5%    │ L2 (ALL)║
║  Premium        │ Every 4 mo │ 10 pairs     │ $99.99    │ 16.5%    │ L2 repeat║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ PRICING JUSTIFICATION:                                                │   ║
║  │ • Starter ($39.99) = 1-pair ($34.99) + subscription discount = 10%  │   ║
║  │ • Standard ($69.99) = 3+3 ($79.99) - subscription discount = 12.5%  │   ║
║  │ • Premium ($99.99) = 5+5 ($119.99) - subscription discount = 16.5%  │   ║
║  │ • All tiers include FREE shipping (currently $79.99+ threshold)      │   ║
║  │ • vs Pull-ups ($50-100/mo) = 20-60% savings from day one            │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  VS COMPETITION — MONTHLY COST COMPARISON:                                  ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Product                  │ Monthly Cost │ Training Benefit            │   ║
║  │ ─────────────────────────┼──────────────┼──────────────────────────── │   ║
║  │ Pull-Ups (Huggies)       │ $50-100      │ ❌ Blocks body awareness    │   ║
║  │ Pampers Easy Ups         │ $50-100      │ ❌ Keeps too dry            │   ║
║  │ GoodNites (night)        │ $30-50       │ ❌ No learning signal       │   ║
║  │ Super Undies             │ $22-44/mo*   │ ⚠️ Partial (no 3-layer)    │   ║
║  │ ─────────────────────────┼──────────────┼──────────────────────────── │   ║
║  │ BrightKidCo Standard S&S │ $23.33/mo    │ ✅ Body-signal learning     │   ║
║  │ *Super Undies: $22-44 (one-time, prorated over ~2mo wear)              │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 3.3 Subscribe & Save — Customer Benefits

**The 5-value pitch:**

1. **Never run out** — New pairs arrive before old ones wear out
2. **Save money** — 10-16.5% off one-time prices + free shipping
3. **Size flexibility** — Change size on next delivery as child grows
4. **Skip or cancel anytime** — No lock-in. Real parent flexibility.
5. **Priority support** — Email "I'm a subscriber" for faster response from Lena

### 3.4 Subscribe & Save — Level-Specific Copy

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              SUBSCRIBE & SAVE — PER-LEVEL MESSAGING                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  L1 MESSAGING: "Never worry about running out before Pre-K"                 ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Hook: "One less thing to remember"                                    │   ║
║  │ Mechanism: "Pairs wear out with washing — subscribe means they       │   ║
║  │            show up automatically, sized up as your child grows."      │   ║
║  │ CTA: "Set it and forget it — for $23/month"                          │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  L2 MESSAGING: "Science-backed consistency — delivered"                     ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Hook: "Body-signal learning needs consistency"                       │   ║
║  │ Mechanism: "The interoception loop builds over 8-12 weeks. Having   │   ║
║  │            fresh pairs ensures the signal doesn't degrade."           │   ║
║  │ CTA: "Lock in the supply — adjust anytime"                          │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  L3 MESSAGING: "Gentle, predictable, always available"                     ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Hook: "No surprises — just what you need, when you need it"          │   ║
║  │ Mechanism: "Your child's comfort matters. The right size, fresh     │   ║
║  │            pairs, showing up so you don't have to think about it."    │   ║
║  │ CTA: "Start at $39.99 every 2 months — skip or cancel anytime"      │   ║
║  │ ⚠ No urgency. No math reframes. No "lock in" language.             │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GF MESSAGING: "Wherever you are in the journey — we've got you"           ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Hook: "Whether you're just starting or still trying"                  │   ║
║  │ CTA: "Flexible. Cancel anytime. Your call entirely."                 │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 3.5 Subscribe & Save — Technical Requirements

| Requirement | Detail | Priority |
|-------------|--------|:--------:|
| Shopify Subscription App | Recharge, Bold Subscriptions, or similar | P0 |
| Klaviyo Integration | Subscribe event → welcome flow variant | P0 |
| Billing Calendar | Charge on delivery, not upfront for full year | P1 |
| Size Change Mechanism | Customer portal or reply-to-email to change size | P1 |
| Skip/Cancel Workflow | One-click, no friction (L3 trust requirement) | P0 |
| Free Shipping Logic | All subscription tiers include free shipping | P0 |
| Subscription Analytics | Churn rate, LTV by tier, upgrade/downgrade rate | P2 |

**Projected Subscribe & Save adoption rate:**

```text
┌─────────────────────────────────────────────────────────────────────────┐
│  Adoption by Tier: Starter ~40%, Standard ~45%, Premium ~15%            │
│  Adoption by Level: L1 ~20%, L2 ~25%, L3 ~30%, GF ~10%                 │
│  L3 highest adoption — consistent with highest LTV finding              │
│  First purchase conversion: 8-12% of buyers opt in at checkout          │
│  Post-purchase add-on: 15-20% of buyers subscribe within 90 days        │
└─────────────────────────────────────────────────────────────────────────┘
```

### 3.6 Subscribe & Save — Projected Revenue Impact

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              SUBSCRIBE & SAVE — 12-MONTH REVENUE PROJECTION                 ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ASSUMPTIONS: 1,000 customers/mo | 20% subscribe | Avg $69.99/mo            ║
║                                                                              ║
║  MONTH │ NEW BUYERS │ SUB RATE │ SUB ADDED │ SUB BASE │ MONTHLY SUB REV     ║
║ ───────┼────────────┼──────────┼───────────┼──────────┼─────────────────────║
║  M1    │ 1,000      │ 10%      │ 100       │ 100      │ $7,000              ║
║  M2    │ 1,000      │ 12%      │ 120       │ 220      │ $15,400             ║
║  M3    │ 1,000      │ 15%      │ 150       │ 370      │ $25,900             ║
║  M4    │ 1,000      │ 17%      │ 170       │ 540      │ $37,800             ║
║  M5    │ 1,000      │ 18%      │ 180       │ 720      │ $50,400             ║
║  M6    │ 1,000      │ 20%      │ 200       │ 920      │ $64,400             ║
║  M7    │ 1,000      │ 20%      │ 200       │ 1,120    │ $78,400             ║
║  M8    │ 1,000      │ 20%      │ 200       │ 1,320    │ $92,400             ║
║  M9    │ 1,000      │ 20%      │ 200       │ 1,520    │ $106,400            ║
║  M10   │ 1,000      │ 20%      │ 200       │ 1,720    │ $120,400            ║
║  M11   │ 1,000      │ 20%      │ 200       │ 1,920    │ $134,400            ║
║  M12   │ 1,000      │ 20%      │ 200       │ 2,120    │ $148,400            ║
║ ───────┼────────────┼──────────┼───────────┼──────────┼─────────────────────║
║ TOTAL  │ 12,000     │ —        │ 2,120     │ —        │ $881,900            ║
║                                                                              ║
║  ⚠ SUBSCRIBER CHURN: Assume 5-8%/mo subscription churn                      ║
║  • Net subscriber growth still positive through M12                          ║
║  • At steady state: ~2,000 active subscribers = ~$140K/mo MRR              ║
║  • Compare: no subscription model = one-time revenue only                   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 4. REFERRAL PROGRAM DESIGN

### 4.1 Referral Program — Strategic Rationale

The autism parent community is **uniquely referral-friendly** (source: MASTER-RESEARCH §4.1-4.3):

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              WHY REFERRALS WORK FOR BRIGHTKIDCO                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TRUST DYNAMIC: Autism parents trust OTHER autism parents more than         ║
║  they trust brands, doctors, or experts. Peer-to-peer recommendation is     ║
║  the #1 purchase driver in this community (source: MASTER-INGESTION §2).     ║
║                                                                              ║
║  COMMUNITY STRUCTURE: Facebook groups (30-200K+ members), Reddit            ║
║  communities r/Autism_Parenting (~65K), and WhatsApp groups are already     ║
║  sharing product recommendations. BKC needs to MAKE IT EASY to share.       ║
║                                                                              ║
║  EXISTING DEMAND: Parents are ALREADY asking: "What training pants work    ║
║  for kids who can't feel wetness?" (source: MASTER-RESEARCH §4.2).          ║
║                                                                              ║
║  COMPETITOR GAP: ZERO direct competitors have structured referral programs   ║
║  for the autism potty training niche (source: MASTER-RESEARCH §1.3).        ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 4.2 Referral Program Design — Two-Way Reward

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              REFERRAL PROGRAM STRUCTURE — TWO-WAY INCENTIVE                  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  REFERRER GETS:                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ ★ $10 store credit per referral (no limit)                          │   ║
║  │ ★ $20 store credit when friend subscribes to Subscribe & Save       │   ║
║  │ ★ Free pair after 5 referrals                                        │   ║
║  │ ★ "BrightKidCo Advocate" badge (email footer, private FB group)      │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  REFERRED FRIEND GETS:                                                       ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ ★ 15% off first order (vs standard 10% pop-up)                      │   ║
║  │ ★ Same 60-day guarantee                                              │   ║
║  │ ★ Free shipping on first order if >$34.99                            │   ║
║  │ ★ Personalized welcome from Lena: "[Friend] thought of you"          │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  PROGRAM RULES:                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ • Credit valid for 12 months                                          │   ║
║  │ • Cannot be combined with other discounts on same order               │   ║
║  │ • Referral link is unique per customer (Klaviyo property)             │   ║
║  │ • Reward applied after friend's first order ships                     │   ║
║  │ • No minimum order for credit use                                     │   ║
║  │ • Cannot refer yourself (multiple email detection)                    │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 4.3 Referral Flow — Email Sequence

The Referral Flow (3 emails, Phase 3 per GIULIANO-DEMANDS §2.2):

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              REFERRAL FLOW — 3-EMAIL SEQUENCE                                ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TRIGGER: Purchase received + 30 days (post_purchase_active tag)           ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ EMAIL 1 (D30): "Know another mom who could use this?"                │   ║
║  │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌─────────┐     │   ║
║  │ │ VALIDATE │ │ HER STORY│ │ OFFER    │ │ EASY CTA │ │ LENA    │     │   ║
║  │ │ her wins │ │ → Lena   │ │ ($10/$20)│ │ share btn│ │ SIGN OFF│     │   ║
║  │ └──────────┘ └──────────┘ └──────────┘ └──────────┘ └─────────┘     │   ║
║  │ └─ Validation: "Progress is real. You know it. Other moms need it." │   ║
║  │ └─ Lena: "When I found something that worked for my sons,          │   ║
║  │        I couldn't stop telling other autism moms."                  │   ║
║  │ CTA: "Share your referral link — it's your URL"                     │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ EMAIL 2 (D60): "Your referral bonus is waiting"                      │   ║
║  │ └─ "You've earned $X so far (show balance)"                          │   ║
║  │ └─ "Know a parent whose child is [symptom]?" (symptom-first)        │   ║
║  │ CTA: "Share now →"                                                    │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ EMAIL 3 (D120): "Your referral impact" (replenishment trigger)       │   ║
║  │ └─ "You've helped X other families start their journey"             │   ║
║  │ └─ Combined with replenishment: "Time to restock?"                  │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  EXPECTED PERFORMANCE:                                                       ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ • Referral rate: 8-15% of customers share at least once             │   ║
║  │ • Conversion of referred: 15-25% (higher than cold traffic)         │   ║
║  │ • LTV of referred customers: 1.3-1.5× higher than organic           │   ║
║  │ • Cost per acquisition (referral): $10-20 vs $50+ cold              │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 4.4 Community-Integrated Referral Mechanics

Beyond email, referral mechanics should integrate into community touchpoints:

| Channel | Referral Integration | Priority |
|---------|---------------------|:--------:|
| Post-purchase thank-you page | "Know another mom? Share your link" | P0 |
| Welcome Flow E6 (social proof) | "Thousands of moms share BrightKidCo. Here's how." | P1 |
| Instagram/TikTok content | #autismpottytraining content → bio link with UTM | P1 |
| Facebook group posts | "My son's progress — link in comments" (organic) | P2 |
| Newsletter footer | "Refer a friend, get $10 credit" | P2 |
| Package insert | QR code to referral page | P0 |

**Referral link implementation:**

```
Your unique referral link:
  brightkidco.com/?ref={{customer.referral_code}}

Shared via email, text, or social media.
Referred friend lands on personalized page:
  "You were referred by [name] — welcome!"
```

---

## 5. LOYALTY PROGRAM FRAMEWORK

### 5.1 Loyalty Program Philosophy

BrightKidCo's loyalty program must reflect the brand's voice: **peer-to-peer, dignity-first, benefit-rich not gamified.** Unlike a typical points-and-redeem system, BKC's program is built on recognition, community, and practical benefits (source: MASTER-DIAGNOSIS §3.5 Trust Pyramid).

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              LOYALTY PROGRAM — DESIGN PRINCIPLES                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  PRINCIPLE 1: DIGNITY-FIRST                                                ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Rewards must NEVER feel like a game. This isn't Starbucks.           │   ║
║  │ Points, badges, and tiers must be practical, not performative.       │   ║
║  │ L3 parents especially: no gamification. Instead: reliable benefits. │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  PRINCIPLE 2: PEER-TO-PEER                                                 ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ The best reward is connection to other parents who get it.            │   ║
║  │ Private community, shout-outs, shared progress stories.              │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  PRINCIPLE 3: SIMPLE & TRANSPARENT                                         ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Autism parents have enough complexity. Loyalty must be 1-2-3:        │   ║
║  │ 1 purchase = 1 benefit. Repeat = more benefit. No math. No tiers.   │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  PRINCIPLE 4: LEVEL-AWARE                                                  ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ L1 gets forward-looking rewards (Pre-K prep content).                 │   ║
║  │ L2 gets science-forward rewards (BCBA fact-sheets, research).        │   ║
║  │ L3 gets dignity-forward rewards (community, no-pressure support).    │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 5.2 Loyalty Tier Structure — Three Simple Tiers

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              BRIGHTKIDCO LOYALTY — THREE TIERS                               ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ TIER 1: FRIEND (All purchasers, automatic)                           │   ║
║  ├──────────────────────────────────────────────────────────────────────┤   ║
║  │ ★ 60-day guarantee (already standard)                               │   ║
║  │ ★ Access to Lena's email (reply anytime, get Lena)                  │   ║
║  │ ★ Welcome code (WELCOME10)                                          │   ║
║  │ ★ Free shipping on orders >$34.99                                   │   ║
║  │ ★ Post-purchase education series (existing PP-Education flow)        │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                              ┃                                              ║
║                              ▼                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ TIER 2: FAMILY (2+ purchases OR Subscribe & Save member)             │   ║
║  ├──────────────────────────────────────────────────────────────────────┤   ║
║  │ ★ Everything in Friend                                               │   ║
║  │ ★ $10 birthday credit every year (child's birthday)                  │   ║
║  │ ★ Early access to new sizes/releases                                 │   ║
║  │ ★ Exclusive content: "BrightKidCo Parent Guide" (digital)           │   ║
║  │ ★ $5 credit on your child's potty-anniversary (day of first purchase)│   ║
║  │ ★ Referral bonus boost: $15/friend (vs $10 at Friend tier)          │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                              ┃                                              ║
║                              ▼                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ TIER 3: ADVOCATE (5+ purchases OR referred 3+ friends)               │   ║
║  ├──────────────────────────────────────────────────────────────────────┤   ║
║  │ ★ Everything in Family                                               │   ║
║  │ ★ $25 birthday credit                                                 │   ║
║  │ ★ Private Facebook/WhatsApp group for Advocates only                 │   ║
║  │ ★ Product testing invites (new patterns, fabrics, character designs) │   ║
║  │ ★ Partner discounts (OT tools, sensory-friendly brands)              │   ║
║  │ ★ "BrightKidCo Advocate" badge in email footer                       │   ║
║  │ ★ Free pair on your 5th purchase                                     │   ║
║  │ ★ Direct line to Lena (priority email response)                      │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 5.3 Birthday & Anniversary Flow

A key loyalty differentiator — NO competitor does personalized lifecycle celebrations for autism parents (source: MASTER-RESEARCH §1.3):

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              BIRTHDAY & ANNIVERSARY — TWO NEW FLOWS                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ BIRTHDAY FLOW (Child's birthday — collected at signup)               │   ║
║  ├──────────────────────────────────────────────────────────────────────┤   ║
║  │ D-7: "Your child's birthday is coming — here's a little something"   │   ║
║  │       → Reveal that credit is waiting                                │   ║
║  │ D-0: "Happy birthday to your amazing kid!"                           │   ║
║  │       → Credit applied automatically at checkout                     │   ║
║  │ D+7: "Hope your child had a great birthday"                          │   ║
║  │       → Replenishment gentle nudge                                   │   ║
║  │ CREDIT: $10 (Family tier) / $25 (Advocate tier)                      │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ ANNIVERSARY FLOW (Potty-anniversary — date of first purchase)         │   ║
║  ├──────────────────────────────────────────────────────────────────────┤   ║
║  │ D-3: "It's been almost a year since you joined BrightKidCo"          │   ║
║  │ D-0: "One year of progress — we see you, mama"                       │   ║
║  │       → $5 credit (Family tier)                                      │   ║
║  │       → Progress reflection + testimonial prompt                     │   ║
║  │ D+3: "Want to share your story? Other parents need to hear it."      │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  ⚠ CRITICAL: Birthday content for L3 must NOT frame the child's age        ║
║  as a problem. "Your child is [age] and that's exactly where they         ║
║  need to be." No comparison to typical development milestones.              ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 5.4 Loyalty Content — Per-Level Programming

| Benefit | L1 | L2 | L3 | GF |
|---------|:--:|:--:|:--:|:--:|
| Birthday credit | ✅ Tier 2+ | ✅ Tier 2+ | ✅ Tier 2+ | ✅ Tier 2+ |
| Pre-K Prep Guide | 🏆 Primary | N/A | N/A | Secondary |
| BCBA Fact-Sheets | N/A | 🏆 Primary | Secondary | N/A |
| Resignation Support Content | N/A | N/A | 🏆 Primary | N/A |
| Private Community | Tier 3 | Tier 3 | Tier 3 | Tier 3 |
| Product Testing | Tier 3 | Tier 3 | Tier 3 | Tier 3 |
| Partner Discounts | Tier 3 | Tier 3 | Tier 3 | Tier 3 |
| Direct Lena Line | Tier 3 | Tier 3 | Tier 3 | Tier 3 |

### 5.5 Loyalty Program Economics

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              LOYALTY PROGRAM — COST-BENEFIT ANALYSIS                         ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  COSTS:                                                                     ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Birthday credits ($10 × 35% × 12,000 buyers/yr)    = $42,000/yr       │   ║
║  │ Anniversary credits ($5 × 35% × 12,000)            = $21,000/yr       │   ║
║  │ Free pair at 5th purchase ($34.99 × 5% × 12,000)   = $20,994/yr       │   ║
║  │ Referral bonus boost ($5 × 1,200 refs)             = $6,000/yr        │   ║
║  │ Community management (part-time)                    = $24,000/yr       │   ║
║  │ TOTAL PROGRAM COST:                                 = ~$114,000/yr    │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  BENEFITS:                                                                  ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Retention lift (35% → 50%) = +2,100 repeat buyers @ $79.99          │   ║
║  │   → Incremental revenue: $167,979                                    │   ║
║  │ Subscribe & Save MRR ($140K/yr steady state)                         │   ║
║  │ Referral-added customers (200/yr × $79.99 × 1.5 LTV) = $23,997/yr  │   ║
║  │ TOTAL PROGRAM BENEFIT:                               = ~$332,000/yr  │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  NET ROI: $332K - $114K = $218K/yr                                           ║
║  ROI RATIO: ~2.9:1                                                           ║
║  PAYBACK PERIOD: ~4 months                                                    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 6. REPEAT PURCHASE TRIGGER ANALYSIS

### 6.1 Natural Purchase Cycles

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              REPEAT PURCHASE TRIGGERS — NATURAL VS DESIGNED                  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ NATURAL TRIGGERS (already happening)                                   │   ║
║  ├──────────────────────────────────────────────────────────────────────┤   ║
║  │ TRIGGER                 │ STRENGTH │ TIMING    │ AFFECTED LEVEL        │   ║
║  │ ────────────────────────┼──────────┼───────────┼────────────────────── │   ║
║  │ Wearing out / holes     │ 🟢 High  │ 3-6 mo    │ ALL                   │   ║
║  │ Child growth (size up)  │ 🟢 High  │ 6-12 mo   │ L1, L2               │   ║
║  │ Child outgrows pull-ups │ 🟢 High  │ 1-5 yrs   │ L3 (adult diaper fear)│   ║
║  │ Laundry rotation need   │ 🟡 Medium│ 2-3 mo    │ ALL                   │   ║
║  │ School requirement      │ 🟡 Medium│ Annual     │ L1 (Pre-K)            │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ DESIGNED TRIGGERS (to be built)                                       │   ║
║  ├──────────────────────────────────────────────────────────────────────┤   ║
║  │ TRIGGER                 │ EST. CONV   │ TIMING    │ FLOW              │   ║
║  │ ────────────────────────┼─────────────┼───────────┼────────────────── │   ║
║  │ Replenishment reminder  │ 8-12%       │ 60-150d   │ Replenish A/B/C   │   ║
║  │ New size available      │ 12-18%      │ 6-12 mo   │ Size notification │   ║
║  │ Subscribe & Save auto   │ 20-25%      │ 30-120d   │ S&S billing       │   ║
║  │ Birthday/anniversary    │ 5-8%        │ Annual    │ Birthday flow     │   ║
║  │ New character/design   │ 8-12%       │ Quarterly │ Product launch     │   ║
║  │ Seasonal (Back to School)| 10-15%    │ Annual    │ Seasonal campaign  │   ║
║  │ Accessory upsell        │ 5-10%       │ 30-90d    │ PP-Direct Upsell   │   ║
║  │ Content/education hook  │ 3-7%        │ Ongoing   │ PP-Ext. Education  │   ║
║  │ Referral triggered      │ 15-25%*     │ Ongoing   │ Referral flow      │   ║
║  │ *Higher conv because trust-brokered                                   │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 6.2 Trigger Matrix — By Avatar Level

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              REPEAT PURCHASE TRIGGER — LEVEL-SPECIFIC MATRIX                 ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  L1 (SARAH — 35%)                                                          ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Primary trigger: PRE-K DEADLINE (annual, high urgency)               │   ║
║  │ Secondary:   Wearing out, growth spurt                               │   ║
║  │ Best timing: May-August (Pre-K enrollment cycle)                     │   ║
║  │ Email angle: "Is your child ready for September?"                    │   ║
║  │ Lever:       L1-A Pre-K Readiness + L1-B "Gets It But Doesn't"      │   ║
║  │ Conversion prediction: 15-25% with Pre-K hook                       │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  L2 (LISA — 40% 🏆)                                                       ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Primary trigger: PRODUCT WEAR + NEW RESEARCH                          │   ║
║  │ Secondary:   BCBA new protocol, size change, sensory change          │   ║
║  │ Best timing: Science-driven (new study, new research)                │   ║
║  │ Email angle: "Updated research on interoception + replenishment"     │   ║
║  │ Lever:       L2-A Complements BCBA/OT + L2-B Break Regression Cycle │   ║
║  │ Conversion prediction: 8-15% (skeptical — needs mechanism)          │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  L3 (MARIA — 25%)                                                          ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Primary trigger: SIZE CHANGE (adult diaper threshold fear)            │   ║
║  │ Secondary:   Wearing out, dignity need, community story              │   ║
║  │ Best timing: No urgency — gentle reminder at 90d intervals            │   ║
║  │ Email angle: "Your child deserves comfort. Same as always."          │   ║
║  │ Lever:       L3-A "Late Is Not Never" + L3-C Mini-Wins Count         │   ║
║  │ ⚠ NEVER:    Urgency, "don't wait," countdown, Pre-K references      │   ║
║  │ Conversion prediction: 4-8% (low but HIGHEST LTV after purchase)      │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GF (GENERAL — 50% real volume)                                            ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Primary trigger: CROSS-LEVEL universal need (wear, comfort)           │   ║
║  │ Secondary:   Migration to level-specific → stronger triggers         │   ║
║  │ Best timing: Follow cross-level calibration (R1-R6)                  │   ║
║  │ Email angle: "Whether your child is 3 or 10..." (R3)                 │   ║
║  │ Conversion prediction: 7-10% (lowest — but largest audience)         │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 6.3 Size Transition Flow — New Trigger Opportunity

One of the strongest natural repeat purchase triggers is **the child growing out of their current size.** This is currently NOT addressed by any flow:

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              SIZE TRANSITION FLOW — PROPOSED NEW FLOW                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TRIGGER: Customer provides child's age/weight at signup → Klaviyo         ║
║  property tracks estimated growth → D-day when size change expected        ║
║                                                                              ║
║  FLOW (3 emails):                                                           ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ E1 (estimated size-change date - 30d): "Your child is growing"        │   ║
║  │   → "The current size still fits? Every child grows differently."     │   ║
║  │   → Sizing guide + how to check fit                                   │   ║
║  │                                                                        │   ║
║  │ E2 (estimated date): "Time to check the fit"                          │   ║
║  │   → "If pants feel snug or leave marks, it's time."                   │   ║
║  │   → Size-up offer + Subscribe & Save upsell                            │   ║
║  │                                                                        │   ║
║  │ E3 (+14 days): "New size, same comfort"                               │   ║
║  │   → Final size-up reminder                                            │   ║
║  │   → "Your child's comfort is worth the right fit"                     │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  EXPECTED CONVERSION: 12-18% (2nd+ purchase window)                         ║
║  UPLIFT TO LTV: +20-30% (additional purchase per growth cycle)              ║
║  PER-LEVEL TIMING:                                                          ║
║  • L1: ~9-12 months between sizes (age 3-5 = rapid growth)                 ║
║  • L2: ~12-18 months (age 5-7 = moderate growth)                           ║
║  • L3: ~18-24 months (age 6-10+ = slower growth + larger size range)       ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 6.4 Emotional Repeat Purchase Triggers

Beyond practical wear-and-tear, BKC has unique **emotional triggers** that drive repurchase:

| Emotional Trigger | Description | Strength | Level Targeting |
|-------------------|-------------|:--------:|:---------------:|
| **"This brand gets me"** | Lena's voice makes customers feel understood — they WANT to support the brand | High | ALL (L2 strongest) |
| **"I want to help other moms"** | Community ethic — buying = supporting the mission | Medium | L3 (altruism) |
| **"It's the only thing that worked"** | Product loyalty — gratitude-driven repurchase | High | L3 (highest attachment) |
| **"Pull-up hate"** | Anti-disposable sentiment — continuous savings story | Medium | L2 (math reframe) |
| **"Progress celebration"** | Child's milestone motivates re-engagement | High | L1 (hope-driven) |
| **"Adult diaper fear"** | Identity preservation — avoid escalation | Very High | L3 (deep emotional) |

### 6.5 Repurchase Journey Map

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              COMPLETE REPURCHASE JOURNEY MAP — BUYER TO ADVOCATE             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║                       FIRST PURCHASE                                         ║
║                           │                                                   ║
║                           ▼                                                   ║
║               ┌───────────────────────┐                                     ║
║               │  D0-5: Onboarding      │ → Education + upsell               ║
║               │  (PP-Education)        │                                     ║
║               └───────────────────────┘                                     ║
║                           │                                                   ║
║               ┌───────────┴───────────┐                                       ║
║               ▼                       ▼                                       ║
║     ┌─────────────────┐    ┌─────────────────┐                               ║
║     │  USES PRODUCT   │    │  TRIES & DOUBTS │ → At-Risk intervention        ║
║     │  (Sees result)  │    │  (No result)     │      │                       ║
║     └────────┬────────┘    └────────┬────────┘      │                       ║
║              │                      │                ▼                       ║
║              ▼                      ▼          ┌──────────┐                  ║
║     ┌─────────────────┐    ┌─────────────────┐ │ SUPPORT  │ → WINBACK        ║
║     │  REPLENISHMENT  │    │  REPLENISHMENT  │ │ (PP-Mid  │                  ║
║     │  (Natural)      │    │  (Convince)     │ │ Check-In)│                  ║
║     └────────┬────────┘    └────────┬────────┘ └──────────┘                  ║
║              │                      │                                         ║
║              ▼                      ▼                                         ║
║     ┌─────────────────┐    ┌─────────────────┐                               ║
║     │  2ND PURCHASE   │    │  LOST (no rep)  │ → Churn                       ║
║     └────────┬────────┘    └─────────────────┘                               ║
║              │                                                               ║
║              ▼                                                               ║
║     ┌─────────────────┐                                                     ║
║     │  SUB & SAVE     │ ← Best retention inflection point                    ║
║     │  OR REGULAR REP │                                                     ║
║     └────────┬────────┘                                                     ║
║              │                                                               ║
║     ┌────────┴────────┐                                                     ║
║     ▼                 ▼                                                     ║
║  ┌─────────┐    ┌──────────┐                                                ║
║  │ SIZE UP │    │ NEW CHAR │ → Engage (designs, characters)                 ║
║  └────┬────┘    └────┬─────┘                                                ║
║       │              │                                                        ║
║       ▼              ▼                                                        ║
║  ┌──────────────────────────┐                                               ║
║  │  3RD+ PURCHASE → ADVOCATE│ → Referral, community, testimonials           ║
║  └──────────────────────────┘                                               ║
║                                                                              ║
║  KEY RETENTION NODES (where intervention has highest impact):                ║
║  ════════════════════════════════════════════════════════════════════════   ║
║  ★ Node 1: D30 Mid Check-In — Validate progress, normalize timeline         ║
║  ★ Node 2: D60 Guarantee Boundary — Reassure, offer 2nd purchase            ║
║  ★ Node 3: D75-90 Replenishment — Timing + value reframe                    ║
║  ★ Node 4: Size Change — Natural growth trigger                             ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 7. LTV OPTIMIZATION LEVERS PRIORITIZED

### 7.1 The LTV Lever Framework

All LTV levers ranked by **impact × effort** for BrightKidCo:

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              LTV OPTIMIZATION LEVERS — PRIORITY QUADRANT                     ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║                    IMPACT                                                     ║
║                     ▲                                                         ║
║                     │                                                         ║
║    QUICK WINS      │         STRATEGIC INVESTMENTS                            ║
║    (High Impact,   │         (High Impact, High Effort)                      ║
║     Low Effort)    │                                                         ║
║                     │                                                         ║
║  ① Replenish flow   │  ⑥ Subscribe & Save Model (#3)                        ║
║     optimization     │  ⑦ Loyalty Program Framework (#5)                     ║
║  ② Winback timing   │  ⑧ Size Transition Flow (#6.3)                       ║
║  ③ At-Risk rescue   │  ⑨ Community Retention Loop                          ║
║  ④ Review Request   │  ⑩ Product Expansion (accessories)                   ║
║  ⑤ Referral (Phase3)│                                                         ║
║                     │                                                         ║
║         ◄───────────┼───────────► EFFORT                                     ║
║                     │                                                         ║
║    TABLE STAKES     │         DEEP MOATS                                     ║
║    (Low Impact,     │         (Low Impact, High Effort — skip)              ║
║     Low Effort)     │                                                         ║
║                     │                                                         ║
║  ⑪ Email frequency  │  ⑮ Cross-brand partnerships                            ║
║     optimization    │  ⑯ Multi-product bundles                              ║
║  ⑫ Subject line A/B│  ⑰ White-label reseller                               ║
║  ⑬ Guarantee A/B   │  ⑱ International expansion                            ║
║  ⑭ From-name test  │                                                         ║
║                     │                                                         ║
║                     ▼                                                         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 7.2 Priority 1-5: Quick Wins (Implement Months 1-3)

| # | Lever | Current State | Optimization | Expected LTV Lift | Effort | Source |
|---|-------|:------------:|:------------:|:-----------------:|:------:|--------|
| 1 | Replenishment flow optimization | Phase 2 (not built) | Level-specific copy + timing calibration | +15-25% | Medium | LAYER-16 |
| 2 | Winback timing recalibration | Phase 2 (90d trigger) | Reduce to 60d for L1/L2; keep 90d for L3 | +8-12% | Low | GIULIANO §2.2 |
| 3 | At-Risk rescue escalation | Phase 3 (not built) | 4-level intervention at D7/D14/D21/D30 | +10-15% | Medium | LAYER-8 §4.2 |
| 4 | Review Request flow | Phase 3 (not built) | D30 + D60 + Trustpilot integration | +3-5% | Low | GIULIANO §2.2 |
| 5 | Referral flow activation | Phase 3 (not built) | Move to Phase 2 (Month 3 not Month 5) | +15-20% | Medium | GIULIANO §2.2 |

### 7.3 Priority 6-10: Strategic Investments (Months 4-8)

| # | Lever | Rationale | Expected LTV Lift | Investment |
|---|---------|:---------:|:-----------------:|:----------:|
| 6 | Subscribe & Save Model | Recurring revenue transforms unit economics | +50-80% | $5-10K (app + integration) |
| 7 | Loyalty Program | Structured retention mechanic | +20-30% | $3-5K (app + design) |
| 8 | Size Transition Flow | Captures natural growth trigger | +15-20% | $1-2K (flow copy + Klaviyo) |
| 9 | Community Retention Loop | Private group for Advocates | +10-15% | $1K/mo (management) |
| 10 | Product Expansion | Accessories, night-time solutions | +10-20% | $10-50K (product dev) |

### 7.4 LTV Optimization by Avatar Level

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              LTV OPTIMIZATION — PER-AVATAR STRATEGY                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  L1 (SARAH — 35%)                                                          ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Current LTV: $112 (1.4× single purchase)                             │   ║
║  │ Target LTV: $240 (3.0×)                                              │   ║
║  │ Strategy: Pre-K deadline repeat cycle + Back-to-school campaign      │   ║
║  │ Levers: L1-A Pre-K Readiness, L1-B "Gets It But Doesn't"            │   ║
║  │ Key risk: Once child is trained, she's gone — no ongoing need       │   ║
║  │ Mitigation: Nighttime solution, younger sibling upsell, referral     │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  L2 (LISA — 40% 🏆 — LARGEST SEGMENT)                                    ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Current LTV: $104 (1.3×)                                             │   ║
║  │ Target LTV: $240 (3.0×)                                              │   ║
║  │ Strategy: Subscribe & Save + BCBA fact-sheet loop + science content  │   ║
║  │ Levers: L2-A Complements BCBA/OT, L2-B Break Regression Cycle       │   ║
║  │ Key risk: Method cycling leads to brand abandonment (moves on)       │   ║
║  │ Mitigation: Continuous new research, product updates, BCBA alignment │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  L3 (MARIA — 25% — HIGHEST LTV POTENTIAL)                                 ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Current LTV: $168 (2.1× single purchase) 🏆                         │   ║
║  │ Target LTV: $350 (4.4×)                                              │   ║
║  │ Strategy: Subscribe & Save (highest adoption), dignity loyalty       │   ║
║  │ Levers: L3-A "Late Is Not Never", L3-C Mini-Wins Count, L3-D Dignity│   ║
║  │ Key opportunity: 2.1× LTV is ALREADY highest. Every retention       │   ║
║  │ investment here has the highest ROI of any segment.                 │   ║
║  │ Mitigation: Never push. Consistent gentle presence. Community.       │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GF (GENERAL — 50% real volume — TRANSITIONING)                            ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ Current LTV: $88 (1.1×)                                              │   ║
║  │ Target: $200 (2.5× after migration)                                  │   ║
║  │ Strategy: Migrate 65-75% to level-specific → unlock higher triggers  │   ║
║  │ Path: PP-Level Detection (D14) is strongest tool                     │   ║
║  │ Key rule: 25-35% stay GF permanently — must convert them IN general  │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 7.5 Projected LTV Curve — With vs Without Retention Program

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              PROJECTED LTV CURVE — 24 MONTHS                                 ║
║              With Retention Program vs Current Baseline                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  LTV ($)                                                                     ║
║   450 ┤                                                                     ║
║      ┤                                                          ┌──── VIP   ║
║   400 ┤                                                    ┌────┘            ║
║      ┤                                              ┌────┘                   ║
║   350 ┤                                        ┌────┘                        ║
║      ┤                                  ┌────┘                               ║
║   300 ┤                            ┌────┘   ▲ Target LTV with Program       ║
║      ┤                      ┌────┘          ($300 avg, +50% vs baseline)    ║
║   250 ┤                ┌────┘                                                ║
║      ┤          ┌────┘                                                       ║
║   200 ┤    ┌────┘  ▲ Current Baseline ($200 avg)                            ║
║      ┤ ┌──┘                                                                  ║
║   150 ┤─┘                                                                    ║
║      ┤                                                                       ║
║   100 ┤                                                                      ║
║      ┤                                                                       ║
║    50 ┤                                                                      ║
║      ┤                                                                       ║
║      └────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────        ║
║          1    2    3    4    5    6    7    8    9   10   11   12   18        ║
║                                        MONTHS SINCE 1ST PURCHASE             ║
║                                                                              ║
║  ─── Current (No Program)     - - - With Subscribe & Save                   ║
║  ── With Loyalty + Referral    ── Combined (Full Program)                   ║
║                                                                              ║
║  KEY BREAKTHROUGH: Subscribe & Save + Loyalty + Referral together            ║
║  drive 3.0-4.0× LTV vs 1.0-1.3× without. Module cost is ~$15K total         ║
║  with 2.9:1 ROI in year one.                                                 ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 7.6 LTV Optimization Decision Tree

For any new retention initiative:

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              RETENTION INVESTMENT — DECISION FRAMEWORK                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║               ┌─────────────────────────────┐                               ║
║               │ Does this improve           │                               ║
║               │ retention for L3?           │                               ║
║               └────────────┬────────────────┘                               ║
║                   YES │    │ NO                                              ║
║                       ▼    ▼                                                 ║
║               ┌─────────────────────────────┐                               ║
║               │ YES: Prioritize ahead of    │  NO: Check L2 & L1 impact     ║
║               │ other segments. L3 has      │  → If L2-positive: Medium     ║
║               │ highest LTV ROI.            │  → If only L1: Lower priority ║
║               └─────────────────────────────┘                               ║
║                       │                                                       ║
║                       ▼                                                       ║
║               ┌─────────────────────────────┐                               ║
║               │ Does this require urgent?   │                               ║
║               │ (countdown, deadline)       │                               ║
║               └────────────┬────────────────┘                               ║
║                   YES │    │ NO                                              ║
║                       ▼    ▼                                                 ║
║               ┌────────────┐  ┌────────────────┐                             ║
║               │ L1 ONLY     │  │ Apply to ALL   │                            ║
║               │ Never L3   │  │ with level-    │                             ║
║               └────────────┘  │ specific copy  │                             ║
║                               └────────────────┘                             ║
║                                                                              ║
║  GOLDEN RULE: Any retention initiative that works for L3 will work for      ║
║  all segments. Any retention initiative that doesn't work for L3 should      ║
║  be tested on L1 first, then extended carefully.                             ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 8. IMPLEMENTATION ROADMAP

### 8.1 Phase 1 — Quick Wins (Month 1-2)

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              IMPLEMENTATION ROADMAP — PHASE 1: QUICK WINS                    ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  WEEK 1-2:                                                                    ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ □ Prioritize L3 in all retention flows (reorder segment priority)     │   ║
║  │ □ Write Replenishment A/B/C with level-specific copy variants        │   ║
║  │ □ Recalibrate Winback timing: 60d for L1/L2, 90d for L3              │   ║
║  │ □ Implement At-Risk 4-level escalation                               │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  WEEK 3-4:                                                                    ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ □ Deploy Review Request flow (D30 + D60)                              │   ║
║  │ □ Implement PP-Mid Check-In with level-specific tonality              │   ║
║  │ □ Build Referral Flow (move to Phase 2)                              │   ║
║  │ □ Start collecting child birthdate data on signup                     │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  WEEK 5-6:                                                                    ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ □ Sunset Flow copy (final 2 emails + suppression)                    │   ║
║  │ □ Segment-based frequency tiers implementation                       │   ║
║  │ □ L3 Subscribe & Save teaser in PP-Extended Education                │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 8.2 Phase 2 — Strategic Build (Month 3-4)

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              IMPLEMENTATION ROADMAP — PHASE 2: STRATEGIC BUILD               ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  MONTH 3:                                                                     ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ □ Install Shopify subscription app (Recharge or Bold)                │   ║
║  │ □ Configure Subscribe & Save tiers (Starter/Standard/Premium)         │   ║
║  │ □ Build Subscribe & Save email flow (welcome + billing + cancel)      │   ║
║  │ □ Create Klaviyo properties: subscription_tier, subscriber_status    │   ║
║  │ □ Write 3 S&S benefit emails for post-purchase flow                  │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  MONTH 4:                                                                     ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ □ Launch Loyalty Program (Friend → Family → Advocate)                │   ║
║  │ □ Build Birthday Flow + Anniversary Flow                              │   ║
║  │ □ Implement size transition notification (estimated growth tracking)  │   ║
║  │ □ Set up Advocate private community (FB group or Circle)              │   ║
║  │ □ Install referral link in Klaviyo (unique per customer)              │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 8.3 Phase 3 — Deep Optimization (Month 5-6)

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              IMPLEMENTATION ROADMAP — PHASE 3: DEEP OPTIMIZATION             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  MONTH 5:                                                                     ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ □ A/B test replenishment timing: D60 vs D75 vs D90 for 3+3 buyers    │   ║
║  │ □ Test S&S vs one-time pricing: does S&S cannibalize or expand?      │   ║
║  │ □ Implement community referral loop (shared in FB group)              │   ║
║  │ □ Launch product expansion: night-time solution (wetting alarm)       │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  MONTH 6:                                                                     ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ □ Klaviyo Predictive Analytics: churn risk scoring                   │   ║
║  │ □ Full LTV reporting dashboard (by level, tier, source)              │   ║
║  │ □ Cross-brand partner discounts for Advocates                        │   ║
║  │ □ International localization for S&S (UK/AU pricing)                 │   ║
║  │ □ Continuous A/B on subject lines, CTAs, guarantee framing           │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 9. METRICS & KPI DASHBOARD

### 9.1 Retention KPIs — Core Metrics

| Metric | Current | Target | Stretch | Measurement |
|--------|:-------:|:------:|:-------:|-------------|
| Repeat Purchase Rate | ~20% | 35% | 45% | Klaviyo cohort analysis |
| Purchase Frequency | 1.3×/yr | 2.5×/yr | 3.5×/yr | Orders per customer / time |
| Average Order Value | $79.99 | $79.99 | $95.00 | Revenue / orders |
| Customer Lifetime Value | $104 | $300 | $450 | Total rev / total customers |
| Churn Rate (annual) | ~75% | 50% | 40% | Customers lost / total |
| Subscribe & Save Adoption | 0% | 20% | 30% | S&S customers / total buyers |
| S&S Churn (monthly) | N/A | <8% | <5% | S&S cancellations / active |
| Referral Rate | 0% | 10% | 15% | Customers who refer ≥1 |
| Referral Conversion | N/A | 15% | 25% | Referred visits → purchase |
| Net Promoter Score | Unknown | 60+ | 75+ | Post-purchase survey |

### 9.2 Flow Performance Benchmarks

| Flow Type | Open Rate | Click Rate | Conversion | RPR (Revenue Per Recipient) |
|-----------|:---------:|:----------:|:----------:|:---------------------------:|
| Welcome Flow | 45-65% | 8-15% | 8-15% | $1.50-4.00 |
| Replenishment | 35-50% | 5-10% | 3-8% | $0.50-2.00 |
| Winback A (post-buyer) | 25-35% | 3-7% | 5-8% | $0.25-1.00 |
| Winback B (never-bought) | 20-30% | 2-5% | 3-5% | $0.10-0.50 |
| Referral Flow | 30-40% | 5-10% | 2-5% | $0.50-1.50 |
| Birthday Flow | 40-50% | 8-12% | 5-8% | $0.75-2.00 |
| Anniversary Flow | 35-45% | 5-8% | 3-5% | $0.50-1.25 |
| Sunset (recovery) | 20-30% | 2-5% | 1-3% | $0.05-0.25 |

### 9.3 LTV by Segment — Tracking Dashboard

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              LTV TRACKING DASHBOARD — TEMPLATE                                ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  QUARTERLY REPORT — BRIGHTKIDCO LTV BY SEGMENT                               ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │                     │ Q1  │ Q2  │ Q3  │ Q4  │ YoY  │ vs Target      │   ║
║  │ ────────────────────┼─────┼─────┼─────┼─────┼──────┼─────────────── │   ║
║  │ L1 — Sarah          │     │     │     │     │      │ Target: $240   │   ║
║  │ L2 — Lisa           │     │     │     │     │      │ Target: $240   │   ║
║  │ L3 — Maria          │     │     │     │     │      │ Target: $350   │   ║
║  │ GF — General        │     │     │     │     │      │ Target: $200   │   ║
║  │ ────────────────────┼─────┼─────┼─────┼─────┼──────┼─────────────── │   ║
║  │ BLENDED LTV         │     │     │     │     │      │ Target: $300   │   ║
║  │                                                                        │   ║
║  │ SUBSCRIBE & SAVE KPIS                                                  │   ║
║  │ ────────────────────┬─────┬─────┬─────┬─────┬──────┬─────────────── │   ║
║  │ Active Subscribers   │     │     │     │     │      │ Target: 2,000  │   ║
║  │ Monthly MRR          │     │     │     │     │      │ Target: $140K  │   ║
║  │ S&S Churn Rate       │     │     │     │     │      │ Target: <8%    │   ║
║  │ S&S LTV uplift       │     │     │     │     │      │ Target: +50%   │   ║
║  │                                                                        │   ║
║  │ LOYALTY PROGRAM KPIS                                                  │   ║
║  │ ────────────────────┬─────┬─────┬─────┬─────┬──────┬─────────────── │   ║
║  │ Friend tier count    │     │     │     │     │      │                │   ║
║  │ Family tier count    │     │     │     │     │      │ Target: 30% of │   ║
║  │ Advocate tier count  │     │     │     │     │      │ buyers         │   ║
║  │ Credit redemption %  │     │     │     │     │      │ Target: >60%   │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 9.4 Customer Health Score Model

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║              CUSTOMER HEALTH SCORE — 5-FACTOR MODEL                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  FACTOR                   │ WEIGHT │ MEASUREMENT               │ SCORE       ║
║ ──────────────────────────┼────────┼───────────────────────────┼──────────── ║
║  Recency of purchase      │ 30%    │ Days since last purchase  │ 1-10 scale  ║
║  Email engagement         │ 25%    │ Opens & clicks (30d)      │ 1-10 scale  ║
║  Purchase frequency       │ 20%    │ Orders / time since first │ 1-10 scale  ║
║  Subscription status      │ 15%    │ Active S&S?               │ 0 or 10     ║
║  Feedback/sentiment       │ 10%    │ Review score, reply tone  │ 1-10 scale  ║
║ ──────────────────────────┼────────┼───────────────────────────┼──────────── ║
║  HEALTH SCORE (weighted)  │ 100%   │ 0-10 scale                │             ║
║                                                                              ║
║  INTERVENTION THRESHOLDS:                                                    ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │ HEALTH 8-10 ═══ GREEN ═══ No action needed. VIP treatment.           │   ║
║  │ HEALTH 5-7  ═══ AMBER ═══ At-risk check. Preventive content.         │   ║
║  │ HEALTH 3-4  ═══ ORANGE ═══ At-Risk flow activation. Winback prep.   │   ║
║  │ HEALTH 0-2  ═══ RED ═══ Winback A/B immediate. Sunset if no response.│   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## APPENDIX A: SOURCE REFERENCE INDEX

| Section | Primary Sources |
|---------|----------------|
| §1 Current Retention Analysis | MASTER-DIAGNOSIS-COMPENDIUM §1.3, §4.2; MASTER-RESEARCH-COMPENDIUM §3.1; GIULIANO-DEMANDS §2 |
| §2 Email Retention Optimization | LAYER-16 §Flow Architecture; GIULIANO-DEMANDS §2.2; LAYER-8 §4.2 |
| §3 Subscribe & Save Model | MASTER-INGESTION §4.3; MASTER-RESEARCH §1.1; LAYER-15 §Pricing |
| §4 Referral Program Design | GIULIANO-DEMANDS §2.2; MASTER-RESEARCH §4.1-4.3; MASTER-INGESTION §2 |
| §5 Loyalty Program Framework | MASTER-DIAGNOSIS §3.5; LAYER-38 §Brand Constants |
| §6 Repeat Purchase Trigger Analysis | MASTER-INGESTION §4.4; MASTER-DIAGNOSIS §1.3; GIULIANO-DEMANDS §2 |
| §7 LTV Optimization Levers | MASTER-DIAGNOSIS §4.2; LAYER-7 §Conversion Probabilities; LAYER-15 |
| §8 Implementation Roadmap | GIULIANO-DEMANDS §2.1; LAYER-16 §Phases |
| §9 Metrics & KPI Dashboard | MASTER-RESEARCH §3.1; GIULIANO-DEMANDS §12 |

---

## APPENDIX B: KEY INSIGHTS SUMMARY

1. **L3 (Maria) has the highest LTV after purchase** — 2.1× vs 1.3× baseline. All retention investment should prioritize L3 first. Source: MASTER-DIAGNOSIS §1.3.

2. **Subscribe & Save transforms unit economics** — Projected $140K/mo MRR at steady state with 20% adoption. No competitor offers this. Source: §3.6.

3. **Birthday/Anniversary flows are unbuilt competitive advantages** — No autism potty training competitor uses lifecycle personalization. Source: MASTER-RESEARCH §1.3.

4. **Size transition is the strongest natural repurchase trigger** — Currently unaddressed. 12-18% expected conversion from a properly built Size Transition Flow. Source: §6.3.

5. **Referral programs work because the autism parent community already shares** — BKC needs to make it easy. Structured referral + community loop = 15-25% conversion on referred traffic. Source: MASTER-INGESTION §2.

6. **L2 (Lisa) is the largest segment at 40% but hardest to retain** — Needs science-forward, BCBA-aligned retention content. Subscribe & Save with "adjust anytime" messaging. Source: MASTER-DIAGNOSIS §1.3, §6.1.

7. **Current email ecosystem has retention infrastructure but NOT retention mechanics** — Flows exist for replenishment, winback, at-risk but lack emotional loyalty hooks, subscription incentives, and community loop. Source: LAYER-16.

---

*End of BrightKidCo Retention & Loyalty Program Strategy — 32-Retention-Loyalty-Program.md*
*Total size: ~85KB | Diagrams: 12 | Claims cited: 40+ from source documents*
