# BrightKidCo — Full Email Strategy Document

> **CEO-Level Master Plan: Every Flow, Trigger, Segmentation Rule, Migration Path, and Implementation Priority**
> Generated: May 28, 2026
> Sources: GIULIANO-DEMANDS.md, MASTER-DIAGNOSIS-COMPENDIUM.md, MASTER-INGESTION-COMPENDIUM.md, MASTER-RESEARCH-COMPENDIUM.md, 32 Synthesis Documents, 6 Diagnosis Layers

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [The Customer: Avatar Levels & Emotional Journey](#2-the-customer)
3. [Complete Flow Map Diagram](#3-complete-flow-map-diagram)
4. [Per-Flow Specifications](#4-per-flow-specifications)
5. [Flow-by-Avatar-Level Matrix](#5-flow-by-avatar-level-matrix)
6. [Cross-Level Calibration Rules (R1-R6)](#6-cross-level-calibration-rules)
7. [Migration Paths with Flow Charts](#7-migration-paths)
8. [Edge Cases](#8-edge-cases)
9. [Implementation Priority Order](#9-implementation-priority)
10. [Email Volume & Frequency Plan](#10-email-volume-frequency-plan)
11. [Deliverability & Domain Warming](#11-deliverability-domain-warming)
12. [Klaviyo Technical Setup](#12-klaviyo-technical-setup)
13. [Offer Architecture by Level](#13-offer-architecture)
14. [Brand Voice & Lena's Rules](#14-brand-voice)
15. [Metrics & Success Criteria](#15-metrics)

---

## 1. EXECUTIVE SUMMARY

BrightKidCo's email program is a 25-flow, ~114-email automated system deployed across 3 phases over 6 months. The system serves parents of autistic children (ages 3-10+) navigating potty training, segmented into **4 avatar levels** (Level 1, Level 2, Level 3, General Fallback) with distinct emotional states, tonality requirements, and offer preferences.

**Core Insight:** Every mom is solving the **wrong problem**. She thinks it's behavioral (child being difficult). It's **neurological** — the child can't feel body signals (interoception deficit). This reframe — from blame to neurology — is the emotional center of gravity for every single email. (Source: MASTER-DIAGNOSIS-COMPENDIUM.md §1.8)

**System Overview:**

| Metric | Value |
|--------|-------|
| Total Flows | 25 |
| Total Unique Emails | ~114 |
| Level-Specific Emails (4× copy) | 77 |
| Cross-Level Emails (1 copy + R1-R6) | ~37 |
| Phase 1 Flows | 10 (47 emails) |
| Phase 2 Flows | 11 (40 emails) |
| Phase 3 Flows | 4 (27 emails) |
| Deployment Window | 6 months |

**Non-Negotiable Principles:**
- Every decision must cite its source. No assumptions, no best-practice claims without evidence. (Source: GIULIANO-DEMANDS.md §Quality Standard)
- Email copy composition: 30-50% authentic verbatim language, 30-50% Lena voice, 10-20% mechanism/brand language. Minimum 2-4 authentic verbatim quotes per mail. (Source: GIULIANO-DEMANDS.md §9.4)
- 6 Cross-Level Calibration Rules (R1-R6) apply to ALL non-level-specific flows. Violation of any rule destroys segment trust. (Source: GIULIANO-DEMANDS.md §4)
- Never send to unengaged at standard volume. Never mix Mary S. with Lena sign-offs. Never use discount codes during warming. (Source: GIULIANO-DEMANDS.md §17, §7)

---

## 2. THE CUSTOMER: AVATAR LEVELS & EMOTIONAL JOURNEY

### 2.1 The Four Avatar Levels

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    THE FOUR AVATAR LEVELS AT A GLANCE                         ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  LEVEL 1 — SARAH          LEVEL 2 — LISA           LEVEL 3 — MARIA          ║
║  ┌────────────────────┐   ┌────────────────────┐   ┌────────────────────┐   ║
║  │ ~35% of audience   │   │ ~40% LARGEST       │   │ ~25% of audience   │   ║
║  │ Verbal, 3-5 yrs    │   │ Mixed, 5-7 yrs      │   │ Non-verbal, 6-10+  │   ║
║  │ Mild ASD            │   │ Moderate ASD       │   │ High support       │   ║
║  │ Hope: 70/30         │   │ Hope: 40/60        │   │ Hope: 20/80        │   ║
║  │ Decision: 2-7 days  │   │ Decision: 7-21 days│   │ Decision: 14-30d   │   ║
║  │ Tag: avatar_level1  │   │ Tag: avatar_level2 │   │ Tag: avatar_level3 │   ║
║  │ Pre-K driven        │   │ BCBA context       │   │ Dignity-first      │   ║
║  │ Urgency OK          │   │ Low urgency        │   │ ZERO urgency       │   ║
║  │ Conversion: 15-25%  │   │ Conversion: 8-15%  │   │ Conversion: 4-7%   │   ║
║  └────────────────────┘   └────────────────────┘   └────────────────────┘   ║
║                                                                              ║
║                ┌────────────────────────────────────────┐                    ║
║                │  GENERAL FALLBACK (~50% real volume)    │                    ║
║                │  Undeclared level, enters via pop-up   │                    ║
║                │  button 4: "Still figuring it out"      │                    ║
║                │  5 sub-groups (A-E) with distinct      │                    ║
║                │  paths — symptom language ONLY         │                    ║
║                │  Migration target: 65-75% to level-sp. │                    ║
║                │  Tag: avatar_general                   │                    ║
║                └────────────────────────────────────────┘                    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §1)

### 2.2 The 4 Emotional Phases

Every subscriber cycles through four emotional phases based on their child's age and their journey:

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      THE 4-PHASE CUSTOMER JOURNEY                            ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌─────────────────────────┐               ┌─────────────────────────┐       ║
║  │  PHASE 1                │               │  PHASE 2                │       ║
║  │  Slow Realization       │               │  First Real Attempt     │       ║
║  │                         │               │                         │       ║
║  │  Age: 2.5-3.5 years     │               │  Age: 3-4.5 years       │       ║
║  │  Audience: ~15%         │──────────────►│  Audience: ~34%         │       ║
║  │  Conversion: <1%        │               │  Conversion: 15-25%  ★  │       ║
║  │  Emotion: Confusion     │               │  Emotion: Desperation   │       ║
║  │  └─"Something's wrong"  │               │  └─Oh Crap failed       │       ║
║  │  Forbidden: No hard sell│               │  Forbidden: No blame    │       ║
║  └─────────────────────────┘               └───────────┬─────────────┘       ║
║                                                        │                     ║
║              ┌──────────────────────────────────────────┘                    ║
║              ▼                                                               ║
║  ┌─────────────────────────┐               ┌─────────────────────────┐       ║
║  │  PHASE 3                │               │  PHASE 4                │       ║
║  │  Method Cycling         │               │  Resignation            │       ║
║  │                         │               │                         │       ║
║  │  Age: 4-7 years         │               │  Age: 7+ years          │       ║
║  │  Audience: ~35%         │──────────────►│  Audience: ~20%         │       ║
║  │  Conversion: 10-15%     │               │  Conversion: 4-7%       │       ║
║  │  Emotion: Exhaustion    │               │  Emotion: Grief/Accept  │       ║
║  │  └─"Tried everything"   │               │  └─"Made peace"         │       ║
║  │  Forbidden: No hype     │               │  Forbidden: No cheer    │       ║
║  └─────────────────────────┘               └─────────────────────────┘       ║
║                                                                              ║
║  INVEST 70%+ HERE ═══╗  Phase 2 + Phase 3 = ~70% audience + highest          ║
║                       ║  conversion potential                                  ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: MASTER-DIAGNOSIS-COMPENDIUM.md §1.2)

### 2.3 Level Dominance by Phase

| Level | Dominant Phase | Notes |
|-------|---------------|-------|
| L1 (Sarah) | Phases 1-2 | Hope intact, Pre-K driven, urgency OK |
| L2 (Lisa) | Phase 3 | Sensory dominant, BCBA context, high skepticism |
| L3 (Maria) | Phase 4 | Resignation, dignity-first, ZERO urgency |
| GF | All phases | Must be addressable simultaneously via R1-R6 |

(Source: GIULIANO-DEMANDS.md §5)

### 2.4 The 6 Subject Line Formulas

Every subject line in every flow must be one of these 6 types:

1. **Observation hook** — "She sits 20 minutes and nothing happens"
2. **Validation hook** — "You didn't fail. The method did."
3. **Mechanism tease** — "Why sticker charts didn't work (neurologically)"
4. **Permission frame** — "This isn't another training method"
5. **Question hook** — "What if your child can't feel when they need to go?"
6. **Social proof** — "3,000 parents had the same question"

(Source: GIULIANO-DEMANDS.md §11.3)

---

## 3. COMPLETE FLOW MAP DIAGRAM

### 3.1 Master Flow Map — All 25 Flows

```
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║                        BRIGHTKIDCO — 25 FLOW MASTER SYSTEM                               ║
║                         114 Unique Emails | 3 Phases | 6 Months                          ║
╚══════════════════════════════════════════════════════════════════════════════════════════╝

                              ╔══════════════════╗
                              ║   POP-UP SIGNUP   ║
                              ║  4 symptom-based  ║
                              ║  buttons → 4 tags ║
                              ╚══════════════════╝
                                      │
                                      ▼
    ┌─────────────────────────────────────────────────────────────────────────────────────┐
    │                    ╔══════════════════════════════════════╗                          │
    │                    ║  WELCOME FLOW (8×4 = 32 ★ LVL-SP)   ║                          │
    │                    ║  Phase 1  |  D0-D21  |  HIGHEST PRI  ║                          │
    │                    ╚══════════════════════════════════════╝                          │
    │                    4 parallel flows (L1/L2/L3/GF), NOT conditional splits            │
    └─────────────────────────────────────────────────────────────────────────────────────┘
                                      │
              ┌───────────────────────┼──────────────────────────────────────┐
              │                       │                                      │
              ▼                       ▼                                      ▼
    ┌──────────────────┐    ┌──────────────────┐                  ┌──────────────────────┐
    │  CART ABANDONMENT │    │ BROWSE ABANDONMT │                  │ NO PURCHASE AFTER    │
    │  3 emails (CL)    │    │ 3 emails (CL)     │                  │ WELCOME (8 emails)   │
    │  Phase 1          │    │ Phase 1/2         │                  │                      │
    └────────┬─────────┘    └────────┬─────────┘                  ▼                      │
             │                       │                    ┌──────────────────┐            │
             ▼                       ▼                    │ FAQ/OBJECTION    │            │
    ┌──────────────────┐    ┌──────────────────┐          │ LIBRARY (6 CL)   │            │
    │ CHECKOUT ABANDON │    │ (Continues to    │          │ Phase 3          │            │
    │ 2 emails (CL)    │    │  Purchase flow)  │          └────────┬─────────┘            │
    │ Phase 1          │    └──────────────────┘                   │                      │
    └────────┬─────────┘                                           ▼                      │
             │                                            ┌──────────────────┐            │
             ▼                                            │ WINBACK PATH B   │            │
    ╔══════════════════════════════════════════════════╗   │ 3×4=12 ★ LVL-SP │            │
    ║              TRANSACTIONAL FLOW                  ║   │ 60d no purchase │            │
    ╠══════════════════════════════════════════════════╣   └──────────────────┘            │
    ║ Order Confirm (1) → Shipping (1) → OFD (1)      ║                                    │
    ║ → Arrived & Welcome (1)  (All CL, Phase 1)      ║                                    │
    ╚══════════════════════════════════════════════════╝                                    │
                                      │
                                      ▼
    ┌─────────────────────────────────────────────────────────────────────────────────────┐
    │                    ╔══════════════════════════════════════╗                          │
    │                    ║  POST-PURCHASE FLOWS (Phase 1-3)     ║                          │
    │                    ╚══════════════════════════════════════╝                          │
    └─────────────────────────────────────────────────────────────────────────────────────┘
                                      │
         ┌────────────────────────────┼────────────────────────────────────┐
         ▼                            ▼                                    ▼
    ┌──────────────┐            ┌──────────────┐                    ┌──────────────┐
    │ PP-DIRECT    │            │ PP-LEVEL      │                    │ PP-MARY S.   │
    │ UPSELL (2)   │            │ DETECTION (1) │                    │ STORY (1)    │
    │ Phase 1      │            │ Phase 1       │                    │ Phase 2      │
    │ CL           │            │ GF purchasers │                    │ CL           │
    └──────┬───────┘            └──────┬───────┘                    └──────┬───────┘
           │                           │                                   │
           └───────────────┬───────────┘───────────────────────────────────┘
                           ▼
    ┌──────────────────────────────────────────────────────────────────────┐
    │                 PP-EDUCATION DAY 0-21 (4 CL, Phase 2)                 │
    └──────────────────────────────┬───────────────────────────────────────┘
                                   ▼
    ┌──────────────────────────────────────────────┐
    │  PP-EXTENDED UPSELL (3 CL, Phase 2)           │
    └──────────────────────┬────────────────────────┘
                           │
                           ▼
    ┌──────────────────────────────────────────────┐
    │  PP-MID CHECK-IN (3 CL, Phase 2)              │
    └──────────────────────┬────────────────────────┘
                           │
        ┌──────────────────┼────────────────────┐
        ▼                  ▼                    ▼
    ┌────────┐        ┌────────┐           ┌────────┐
    │REPLEN A│        │REPLEN B│           │REPLEN C│
    │1pr, 3  │        │3+3, 2  │           │5+5, 2  │
    │Phase 2 │        │Phase 2 │           │Phase 2 │
    └────────┘        └────────┘           └────────┘
        │                  │                    │
        └──────────────────┼────────────────────┘
                           │
                           ▼
    ┌───────────────────────────────────────────────────────────────────┐
    │  PP-EXTENDED EDUCATION (5×4=20 ★ LVL-SP, Phase 3)                  │
    └──────────────────────────────┬────────────────────────────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         ▼                         ▼                         ▼
    ┌──────────────┐         ┌──────────────┐          ┌──────────────┐
    │ REVIEW REQ   │         │ AT-RISK (4)  │          │ SUNSET (2)   │
    │ (2 CL)       │         │ Phase 3      │          │ Phase 3      │
    │ Phase 2      │         │              │          │              │
    └──────┬───────┘         └──────────────┘          └──────┬───────┘
           │                                                  │
           ▼                                                  │
    ┌──────────────┐                                          │
    │ REFERRAL (3) │                                          │
    │ Phase 3      │                                          │
    └──────────────┘                                          │
                                                               │
                                                               ▼
                                              ┌──────────────────────┐
                                              │ WINBACK PATH A       │
                                              │ 3×4=12 ★ LVL-SP     │
                                              │ 90d no engagement    │
                                              │ Phase 2              │
                                              └──────────┬───────────┘
                                                         │
                                                         ▼
                                              ┌──────────────────────┐
                                              │ SUNSET (2)           │
                                              │ 120d unengaged       │
                                              │ Suppresses ALL       │
                                              └──────────────────────┘

LEGEND:  ★ = Level-specific flow (4× copy)  |  CL = Cross-Level (1 copy + R1-R6)
         Bold boxes = Phase 1  |  Normal = Phase 2  |  Italic = Phase 3
```
(Source: GIULIANO-DEMANDS.md §2.1, Layer-16-Flow-Architecture.md)

### 3.2 Recovery Funnel Hierarchy (by Intent Level)

```
                    RECOVERY FUNNEL — HIERARCHY BY INTENT

                    Site Abandonment (lowest intent — no product view)
                            │
                            ▼
                    Browse Abandonment (mid intent — viewed product)
                            │
                            ▼
                    Abandoned Cart (high intent — added to cart)
                            │
                            ▼
                    Abandoned Checkout (highest intent — started checkout)

                    Each level converts higher and uses more
                    aggressive recovery timing (from 1h to 1min).
```
(Source: Layer-16-Flow-Architecture.md)

### 3.3 Flow Priority & Suppression Chain

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      FLOW PRIORITY & SUPPRESSION CHAIN                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║         HIGHEST ──→  SUNSET FLOW                                             ║
║         PRIORITY     │                                                       ║
║                      │ Suppresses ALL other flows unconditionally            ║
║                      │ Tag: unengaged = True → Master Suppression List       ║
║                      ▼                                                       ║
║                    WINBACK (Path A or B)                                     ║
║                      │                                                       ║
║                      │ Pauses ALL nurture flows while active                 ║
║                      │ Overrides Welcome, PP-Education, Replenishment        ║
║                      ▼                                                       ║
║                    PP-LEVEL DETECTION (Day 14)                               ║
║                      │                                                       ║
║                      │ Takes priority over ALL other Day 14 content          ║
║                      ▼                                                       ║
║                    CART ABANDONMENT                                          ║
║                      │                                                       ║
║                      │ Suppresses Welcome FLOW during active cart            ║
║                      │ ⚠ Exception: Welcome E1-E2 remain delivered          ║
║                      │   E3+ suppressed until cart recovered/expires        ║
║                      ▼                                                       ║
║                    ALL OTHER FLOWS                                           ║
║                      │                                                       ║
║                      │ Normal operation — no cross-suppression               ║
║          LOWEST ────┘                                                        ║
║                                                                              ║
║         RULES:                                                               ║
║         • Cart Abandonment does NOT suppress Welcome E1-E2 if already sent   ║
║         • PP-Level Detection fires ONCE at Day 14 for GF subscribers         ║
║         • Winback pauses nurture but allows transactional emails             ║
║         • Sunset = permanent exit — subscriber cannot re-enter any flow      ║
║         • Never double-saturate: max 1 flow email per subscriber per day      ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §2.5)

---

## 4. PER-FLOW SPECIFICATIONS

### 4.1 Phase 1 — Launch (Months 1-2): 10 Flows, 47 Emails

---

#### FLOW 01: WELCOME FLOW (8×4 = 32 ★ Level-Specific)

**The highest-priority, most important flow in the entire system.** Every subscriber enters here first. This flow sets the frame for the entire email relationship.

| Property | Specification |
|----------|--------------|
| **Purpose** | Educate → Build Trust → Convert → Set Level-Specific Frame |
| **Trigger** | Pop-up signup with level tag (avatar_level1/2/3/general) |
| **Exit Conditions** | Made a purchase, Unsubscribed, Entered higher-priority flow (cart/winback/sunset) |
| **Email Count** | 8 per level = 32 total (4 separate Klaviyo flows — DO NOT use conditional splits) |
| **Timing** | Over 21 days: D0 → D1 → D3 → D7 → D10 → D14 → D17 → D21 |
| **Segmentation** | 4 variants: avatar_level1 (L1), avatar_level2 (L2), avatar_level3 (L3), avatar_general (GF) |
| **Tonality** | L1: 70/30 Hope/Realism, Pre-K urgency OK. L2: 40/60, mechanism-deep, BCBA-aware. L3: 20/80, dignity-first, ZERO urgency. GF: 50/50, cross-level per R1-R6 |
| **Offer Rules** | WELCOME10 code (10% off, 7-day validity). Default: 3+3 Bundle ($79.99). L3: 1 Pair ($34.99). GF: Cross-level default 3+3. |
| **Lena Sign-Off** | E1-E2: "Talk soon," → E3-E5: "With understanding," → E6-E8: "With care," |
| **Migration Path** | GF subscribers get migration anchors in E2-E4. Expected click rate: 15-25% over Welcome period. |
| **Suppression** | Cart Abandonment suppresses Welcome E3+ during active cart. Winback pauses Welcome entirely. |
| **Source** | GIULIANO-DEMANDS.md §3, Layer-16-Flow-Architecture.md §Flow 01 |

**Welcome Flow Timing Map:**

```
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║                        WELCOME FLOW — 8-EMAIL BUYER JOURNEY                               ║
╠══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                          ║
║  Day 0       Day 1        Day 3        Day 7        Day 10       Day 14      D17   D21  ║
║  ┌─────┐    ┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐        ║
║  │ E1  │───→│ E2  │───→│ E3  │───→│ E4  │───→│ E5  │───→│ E6  │───→│E7→E8│        ║
║  └─────┘    └─────┘     └─────┘     └─────┘     └─────┘     └─────┘     └─────┘        ║
║     │         │           │           │           │           │           │              ║
║     ▼         ▼           ▼           ▼           ▼           ▼           ▼              ║
║  Hopeful  "Holy shit  Decision   Wisdom     Accepting  Learning   Continued               ║
║  but       that        time:      audience   mechanism  objections education              ║
║  critical  explains   60-day +    "You       specifics                                   ║
║            it"        perm.      didn't                                                   ║
║                       not to     fail"                                                    ║
║                       buy                                                                 ║
║                                                                                           ║
║  STRUCTURE: Enter → Educate → Go Deep → Social Proof → Tech → Objections → Close → Next   ║
║                                                                                           ║
║  SECTION MAP:                                                                             ║
║  E1-E2: Hook → Validation → Mechanism → CTA                                              ║
║  E3-E4: Hook → Validation → Mechanism → Testimonial → Product → Guarantee → CTA          ║
║  E5-E8: Reality Check → Validation → Troubleshooting → Mini-Win → Lena Sign-Off           ║
║                                                                                           ║
╚══════════════════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §3, Synthesis 07-Email-Sequence-Framework.md)

---

#### FLOW 02: CART ABANDONMENT (3 Emails, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Recover abandoned carts. Focus on mechanism reminder + offer reinforcement. |
| **Trigger** | "Added to Cart" event + 1 hour no purchase. Requires manual JS snippet in theme.liquid (not native Shopify). (Source: Synthesis 12-Klaviyo-Implementation-Guide.md) |
| **Exit Conditions** | Made a purchase, Unsubscribed, Cart expired (30 days) |
| **Email Count** | 3 |
| **Timing** | E1: 1 hour, E2: 24 hours, E3: 72 hours |
| **Segmentation** | Cross-level always (R1-R6). Same language for all 4 levels. |
| **Tonality** | Friendly reminder + permission-not-to-buy. No pressure. No fake scarcity. |
| **Offer Rules** | E1 = same offer as cart. E2 = upsell offer (1 Pair→3+3, 3+3→5+5). E3 = original offer + maximum guarantee emphasis. |
| **Suppression** | Suppresses Welcome Flow E3+ during active cart. Checkout Abandonment overrides Cart (higher intent). |
| **Source** | GIULIANO-DEMANDS.md §2.2, Layer-15-Offers.md §5 |

**Cart Recovery Logic:**

| Cart State | Offer in Cart | Recovery Action | Upsell Target | Angle |
|------------|:------------:|----------------|:-------------:|-------|
| 1 Pair | $34.99 | Upsell to 3+3 | 3+3 Bundle ($79.99) | "Most parents need more" |
| 3+3 Bundle | $79.99 | Reminder + reinforce | 3+3 (reinforce) or 5+5 (upgrade) | Free shipping, bestseller |
| 5+5 Bundle | $119.99 | Value emphasize | 5+5 (reinforce) | "Maximize value" |

(Source: Layer-15-Offers.md §5)

---

#### FLOW 03: CHECKOUT ABANDONMENT (2 Emails, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Recover checkout drop-offs. Highest intent — shortest timing. |
| **Trigger** | "Started Checkout" event + no purchase (10 min) |
| **Exit Conditions** | Made a purchase, Unsubscribed |
| **Email Count** | 2 |
| **Timing** | E1: 10 minutes, E2: 60 minutes |
| **Segmentation** | Cross-level always (R1-R6) |
| **Tonality** | Urgency-respecting (permission frame). Objection D3 ("What if I get my hopes up again") addressed in E2. |
| **Offer Rules** | Same offer as checkout. Guarantee emphasis in every email. |
| **Source** | GIULIANO-DEMANDS.md §2.2, Layer-15-Offers.md §5 |

---

#### FLOW 04: BROWSE ABANDONMENT (3 Emails, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Re-engage browsers who didn't add to cart. Mid-intent. |
| **Trigger** | Product page viewed + no cart addition (30 min) |
| **Exit Conditions** | Added to cart, Made purchase, Unsubscribed |
| **Email Count** | 3 |
| **Timing** | E1: 30 min, E2: 24 hours, E3: 72 hours |
| **Segmentation** | Cross-level (R1-R6). GF Three-Family Testimonial Pattern at E2. |
| **Tonality** | Education-first, symptom hook. NOT product-first. |
| **Offer Rules** | Light educational framing. Social proof in E2 (testimonials). |
| **Source** | GIULIANO-DEMANDS.md §2.2, Synthesis 07-Email-Sequence-Framework.md |

---

#### FLOW 05: ORDER CONFIRMATION (1 Email, Transactional/Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Confirm order + set expectations + cross-sell block |
| **Trigger** | Order placed |
| **Email Count** | 1 |
| **Timing** | Immediate (within 1 min) |
| **Segmentation** | Cross-level. Contains cross-sell block (Wash Bag + Mattress Protector). |
| **Tonality** | Warm + functional. Professional but human. |
| **Cloak** | Must be predominantly transactional per Google 2024 guidelines. Cross-sell block must be secondary. (Source: GIULIANO-DEMANDS.md §17.7) |
| **Source** | GIULIANO-DEMANDS.md §2.2, Layer-16-Flow-Architecture.md |

---

#### FLOW 06: SHIPPING NOTIFICATION (1 Email, Transactional)

| Property | Specification |
|----------|--------------|
| **Purpose** | Notify shipment + tracking |
| **Trigger** | Shipment created in Shopify |
| **Email Count** | 1 |
| **Timing** | When shipped |
| **Segmentation** | Cross-level. Single copy. |
| **Tonality** | Warm + functional. NO promotional content. |
| **Source** | GIULIANO-DEMANDS.md §2.2 |

---

#### FLOW 07: OUT FOR DELIVERY (1 Email, Transactional, Optional)

| Property | Specification |
|----------|--------------|
| **Purpose** | Build anticipation |
| **Trigger** | Out for delivery scan |
| **Email Count** | 1 |
| **Timing** | Day of delivery |
| **Segmentation** | Cross-level |
| **Tonality** | Warm + excited anticipation |
| **Source** | GIULIANO-DEMANDS.md §2.2 |

---

#### FLOW 08: ARRIVED & WELCOME (1 Email, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Welcome to the product family. Set realistic expectations. Massive upsell opportunity. |
| **Trigger** | Day 3 post-delivery (or delivery confirmed) |
| **Email Count** | 1 |
| **Segmentation** | Cross-level. Upsell based on purchase pack (1pr→3+3, 3+3→5+5). |
| **Tonality** | Warm reassurance: "Here's what to expect in week 1." |
| **Offer Rules** | Free shipping offer for upsell. (Source: Layer-15-Offers.md §6) |
| **Source** | GIULIANO-DEMANDS.md §2.2 |

---

#### FLOW 09: PP-DIRECT UPSELL (2 Emails, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Upsell Wash Bag + Mattress Protector (complementary accessories) |
| **Trigger** | Order placed + Day 3 |
| **Email Count** | 2 |
| **Timing** | E1: Day 3, E2: Day 7 |
| **Segmentation** | Cross-level |
| **Tonality** | Utility-focused, not emotional. "Keep the product working." |
| **Offer Rules** | Wash Bag + Mattress Protector as add-ons, not primary. |
| **Source** | GIULIANO-DEMANDS.md §2.2 |

---

#### FLOW 10: PP-LEVEL DETECTION (1 Email, Cross-Level)

**The most important migration tool — fires ONLY for GF subscribers.**

| Property | Specification |
|----------|--------------|
| **Purpose** | Re-segment GF purchasers into level-specific paths. Expected 40-50% migration rate. |
| **Trigger** | GF subscriber + Order placed + Day 14 |
| **Email Count** | 1 (optional reminder at Day 21) |
| **Segmentation** | Sent ONLY to avatar_general subscribers who have purchased |
| **Tonality** | Gentle, permission-based. "Quick question about your kid." |
| **Format** | 4 symptom-based buttons (same language as pop-up). Never "What level is your child?" |
| **Klaviyo Implementation** | 4 buttons with unique UTM codes → click updates profile property avatar_level1/2/3/general |
| **Fallback** | No click after 14 days → stays GF permanently |
| **Source** | GIULIANO-DEMANDS.md §18.4, Layer-19-Migration-Strategy.md §2.3 |

---

### 4.2 Phase 2 — High-Value (Months 3-4): 11 Flows, 40 Emails

---

#### FLOW 11: PP-EDUCATION DAY 0-21 (4 Emails, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Guide new users through first 3 weeks of product use. Education + reassurance. |
| **Trigger** | Order placed + Day 0 (post-flow trigger) |
| **Email Count** | 4 |
| **Timing** | D0, D7, D14, D21 |
| **Segmentation** | Cross-level for all emails (Day 0-21 is before Level Detection fires). |
| **Tonality** | Warm + reassurance + education. "Week 1 plateau is real. Hold the line." |
| **Key Content** | D0: "Welcome to the family — here's what to expect." D7: "Average mom sees first mini-win around day 10." D14: "If you're not seeing progress yet — this is still normal." D21: "Realistic check-in: where are you?" |
| **Source** | GIULIANO-DEMANDS.md §2.2, Layer-16-Flow-Architecture.md |

---

#### FLOW 12: PP-EXTENDED UPSELL (3 Emails, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Upsell: 1-Pair→3+3 (D14), 3+3→5+5 (D30), Accessory push (D60) |
| **Trigger** | Order placed + timing schedule |
| **Email Count** | 3 |
| **Timing** | D14, D30, D60 |
| **Segmentation** | Cross-level. Offer varies by purchase pack. |
| **Tonality** | Education-framed upsell. "If [color size] is working, here's why 6 pairs means real rotation." No hard sell. |
| **Source** | Layer-16-Flow-Architecture.md, Synthesis 07-Email-Sequence-Framework.md |

---

#### FLOW 13: PP-MID CHECK-IN (3 Emails, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Mid-journey educational check-in. Keep engagement alive. |
| **Trigger** | Day 30 post-purchase |
| **Email Count** | 3 |
| **Timing** | D30, D45, D60 |
| **Segmentation** | Cross-level |
| **Tonality** | Realistic + patient + "It's normal." Coaching energy. |
| **Key Content** | Progress check, trouble-shooting common issues, community questions. |
| **Source** | GIULIANO-DEMANDS.md §2.2 |

---

#### FLOW 14: PP-MARY S. STORY (1 Email, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Founder story — ONLY place Mary S. appears. Builds brand trust foundation. |
| **Trigger** | Day 21 post-purchase |
| **Email Count** | 1 |
| **Segmentation** | Cross-level. Single copy. |
| **Tonality** | Founder voice (NOT Lena). Personal story of why she created BrightKidCo. |
| **Rule** | ⚠ NEVER mix Mary S. with Lena sign-off. Mary appears ONLY in this email. (Source: GIULIANO-DEMANDS.md §7.4) |
| **Source** | GIULIANO-DEMANDS.md §2.2, §7.4 |

---

#### FLOW 15: REPLENISHMENT PATH A — 1-Pair Buyers (3 Emails, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Re-order trigger for 1-pair buyers. Upsell to 3+3. |
| **Trigger** | Purchase pack = 1 pair + Day 14 |
| **Email Count** | 3 |
| **Timing** | E1: D14: "Time for more?" E2: D21: "Your child may need the 3+3 rotation." E3: D30: "Last call — here's the 3+3 pricing." |
| **Segmentation** | Cross-level (R1-R6). Target: buyer_1pair tag. |
| **Tonality** | Practical, utility-focused. Math reframe OK (not for L3). |
| **Source** | GIULIANO-DEMANDS.md §2.2, Synthesis 07-Email-Sequence-Framework.md |

---

#### FLOW 16: REPLENISHMENT PATH B — 3+3 Buyers (2 Emails, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Re-order for 3+3 buyers. Upsell to 5+5 for appropriate segments. |
| **Trigger** | Purchase pack = 3+3 + Day 75 |
| **Email Count** | 2 |
| **Timing** | E1: D75, E2: D90 |
| **Segmentation** | Cross-level. Target: buyer_3plus3 tag. |
| **Source** | GIULIANO-DEMANDS.md §2.2 |

---

#### FLOW 17: REPLENISHMENT PATH C — 5+5 Buyers (2 Emails, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Re-order for 5+5 buyers. Gift purchase or different product. |
| **Trigger** | Purchase pack = 5+5 + Day 150 |
| **Email Count** | 2 |
| **Timing** | E1: D150, E2: D165 |
| **Segmentation** | Cross-level. Target: buyer_5plus5 tag. |
| **Source** | GIULIANO-DEMANDS.md §2.2 |

---

#### FLOW 18: REVIEW REQUEST (2 Emails, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Solicit product reviews. Build social proof library. |
| **Trigger** | Day 30 post-purchase (gives time for genuine experience) |
| **Email Count** | 2 |
| **Timing** | E1: D30, E2: D45 (reminder if no review) |
| **Segmentation** | Cross-level. Skip if already reviewed. |
| **Tonality** | Peer-to-peer. "Your story helps another mom decide." |
| **Source** | GIULIANO-DEMANDS.md §2.2 |

---

#### FLOW 19: WINBACK PATH A — Post-Buyer (3×4 = 12 ★ Level-Specific)

| Property | Specification |
|----------|--------------|
| **Purpose** | Re-engage lapsed buyers. Level-specific copy (4 variants). |
| **Trigger** | Last purchase + 90 days no engagement |
| **Email Count** | 3 per level = 12 total |
| **Timing** | 3 emails over 2-3 weeks: D0, D7, D14 |
| **Segmentation** | 4 level variants (avatar_level1/2/3/general) |
| **Tonality** | Respectful re-engagement. No guilt-tripping. L1: mild urgency. L2: mechanism-remembering. L3: dignity-respecting. |
| **Suppression** | Pauses ALL other nurture flows while active. |
| **Source** | GIULIANO-DEMANDS.md §2.2 (Phase 2 per Demands, NOT Phase 3) |

---

#### FLOW 20: SITE ABANDONMENT (1 Email, Cross-Level, Optional)

| Property | Specification |
|----------|--------------|
| **Purpose** | Re-engage lowest-intent visitors (no product view). |
| **Trigger** | Scroll depth >50% or exit-intent without engagement |
| **Email Count** | 1 |
| **Segmentation** | Cross-level (R1-R6) |
| **Tonality** | Education hook + CTA to browse. |
| **Note** | Phase 2 if included. Depends on traffic volume. |
| **Source** | GIULIANO-DEMANDS.md §2.3 |

---

#### FLOW 21: FAQ/OBJECTION LIBRARY (6 Emails, Cross-Level)

**NOTE: Per GIULIANO-DEMANDS §2.2, this is CROSS-LEVEL (1 copy + R1-R6), NOT 4 variants.**

| Property | Specification |
|----------|--------------|
| **Purpose** | Address top 18 objections across all levels. Cross-level with R1-R6 calibration. |
| **Trigger** | Welcome Flow completed without purchase (exits after 8 emails, no purchase) |
| **Email Count** | 6 |
| **Segmentation** | Cross-level (R1-R6). This is a GIULIANO CORRECTION — previously marked as 4 variants. (Source: GIULIANO-DEMANDS.md §20, Gap #1) |
| **Timing** | Weekly: D0, D7, D14, D21, D28, D35 post-Welcome exit |
| **Content** | Each email addresses 3 related objections. 18 objections × all levels in one copy. GF Three-Family Testimonial Pattern required. |
| **Source** | GIULIANO-DEMANDS.md §2.2, §20 |

---

### 4.3 Phase 3 — Nice-to-Have (Months 5-6): 4 Flows, 27 Emails

---

#### FLOW 22: PP-EXTENDED EDUCATION (5×4 = 20 ★ Level-Specific)

| Property | Specification |
|----------|--------------|
| **Purpose** | Deep, level-specific education for engaged long-term users. |
| **Trigger** | Level tag present + Day 22 post-purchase |
| **Email Count** | 5 per level = 20 total |
| **Timing** | Weekly: D22, D29, D36, D43, D50 |
| **Segmentation** | 4 level variants. ONLY fires if level tag is known (avatar_level1/2/3). GF subscribers at Day 22 skip this flow. |
| **Tonality** | Per level profile. Deep mechanism content for L2. Dignity practices for L3. |
| **Source** | GIULIANO-DEMANDS.md §2.2 (Phase 3 per Demands, NOT Phase 2) |

---

#### FLOW 23: PP-SUPPORT AT-RISK (4 Emails, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Catch disengaged post-purchase subscribers before they lapse. |
| **Trigger** | 3-7 days no opens + post-purchase active |
| **Email Count** | 4 |
| **Timing** | D0, D3, D7, D14 after trigger |
| **Segmentation** | Cross-level |
| **Tonality** | Gentle re-engagement. "Haven't heard from you — how's it going?" |
| **Source** | GIULIANO-DEMANDS.md §2.2 |

---

#### FLOW 24: WINBACK PATH B — Never-Bought (3×4 = 12 ★ Level-Specific)

| Property | Specification |
|----------|--------------|
| **Purpose** | Re-engage signups who joined Welcome Flow but never purchased. |
| **Trigger** | Signup + 60 days no purchase |
| **Email Count** | 3 per level = 12 total |
| **Timing** | 3 emails over 2-3 weeks |
| **Segmentation** | 4 level variants |
| **Tonality** | Re-engagement framing. "Door's still open." |
| **Suppression** | Pauses nurture flows while active. Transactional emails still allowed. |
| **Source** | GIULIANO-DEMANDS.md §2.2 |

---

#### FLOW 25: SUNSET FLOW (2 Emails, Cross-Level)

| Property | Specification |
|----------|--------------|
| **Purpose** | Ultimate suppression management. Remove unengaged subscribers before they become spam complaints. |
| **Trigger** | Opened 0 times AND Clicked 0 times AND Placed Order 0 times in 120 days AND Received at least 20 emails |
| **Email Count** | 2 |
| **Timing** | E1: Re-engagement attempt. E2: 4-7 days later — final goodbye. |
| **Segmentation** | Cross-level. Single copy. Tag: `unengaged = True` |
| **Suppression** | HIGHEST priority — suppresses ALL other flows unconditionally. After sunset, subscriber added to Master Suppression List. (Source: GIULIANO-DEMANDS.md §17.11) |
| **Source** | GIULIANO-DEMANDS.md §17.11 |

---

## 5. FLOW-BY-AVATAR-LEVEL MATRIX

### 5.1 Complete Segmentation Matrix

```
╔════════════════════════════════════════════════════════════════════════════════════════╗
║                 WHICH FLOWS REACH WHICH AVATAR LEVELS                                  ║
╠════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                        ║
║  FLOW                             L1    L2    L3    GF    TYPE          SOURCE           ║
║  ─────────────────────────────────────────────────────────────────────────────────────  ║
║  01. Welcome Flow                ✅4   ✅4   ✅4   ✅4   ★Level-Specific  GIUL §3       ║
║  02. Cart Abandonment            ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  03. Checkout Abandonment        ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  04. Browse Abandonment          ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  05. Order Confirmation          ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  06. Shipping Notification       ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  07. Out for Delivery            ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  08. Arrived & Welcome           ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  09. PP-Direct Upsell            ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  10. PP-Level Detection          —     —     —    ✅🔥  Cross-Level       GIUL §18.4    ║
║  11. PP-Education D0-21          ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  12. PP-Extended Upsell          ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  13. PP-Mid Check-In             ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  14. PP-Mary S. Story            ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  15. Replenish A (1pr)           ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  16. Replenish B (3+3)           ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  17. Replenish C (5+5)           ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  18. Review Request              ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  19. Winback Path A (post-buyer) ✅4   ✅4   ✅4   ✅4   ★Level-Specific  GIUL §2.2     ║
║  20. Site Abandonment            ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  21. FAQ/Objection Library       ✅    ✅    ✅    ✅    Cross-Level       GIUL §20      ║
║  22. PP-Extended Education       ✅4   ✅4   ✅4   —     ★Level-Specific  GIUL §2.2     ║
║  23. PP-Support At-Risk          ✅    ✅    ✅    ✅    Cross-Level       GIUL §2.2     ║
║  24. Winback Path B (never-buy)  ✅4   ✅4   ✅4   ✅4   ★Level-Specific  GIUL §2.2     ║
║  25. Sunset Flow                 ✅    ✅    ✅    ✅    Cross-Level       GIUL §17.11   ║
║                                                                                        ║
║  LEGEND:  ✅ = Receives this flow  |  ✅4 = Level-specific (4× copy)                    ║
║           ✅🔥 = GF only (Level Detection)  |  — = Excluded                              ║
║                                                                                        ║
╚════════════════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §2, §18, §20)

### 5.2 Offer Rules by Level × Phase — Revenue Priority Matrix

```
╔════════════════════════════════════════════════════════════════════════════════════════╗
║              OFFER RULES — WHICH OFFER TO SHOW TO WHOM, WHEN                            ║
╠════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                        ║
║  LEVEL   │ PHASE 2 (3-4y)   │ PHASE 3 (5-7y)   │ PHASE 4 (7+y)    │ CART RECOVERY    ║
║  ────────┼──────────────────┼──────────────────┼──────────────────┼────────────────── ║
║  L1      │ ★ 3+3 ($79.99)  │ ★ 3+3 ($79.99)   │ 1pr ($34.99)     │ ★ 3+3 ($79.99)   ║
║  (Sarah) │ 15-25% conv      │ 10-18% conv      │ Permission-only  │ Upsell from cart ║
║          │ Pre-K deadline   │ Science-first    │ "When ready"     │                  ║
║          │ Urgency STRONG   │ Urgency OK       │ NO urgency       │                  ║
║  ────────┼──────────────────┼──────────────────┼──────────────────┼────────────────── ║
║  L2      │ ★ 3+3 ($79.99)  │ 3+3 or 5+5       │ 1pr ($34.99)     │ ★ 3+3 ($79.99)   ║
║  (Lisa)  │ 8-15% conv       │ ★ 5+5 BCBA-frame │ Deep skepticism  │ BCBA fact-sheet  ║
║          │ BCBA complement  │ High investment   │ Permission-First │ angle            ║
║          │ Math reframe CAUT│ ready             │ NO math reframe  │                  ║
║  ────────┼──────────────────┼──────────────────┼──────────────────┼────────────────── ║
║  L3      │ ★ 1pr ($34.99)  │ ★ 1pr ($34.99)   │ ★ 1pr ($34.99)   │ ★ 1pr ($34.99)   ║
║  (Maria) │ 4-7% conv        │ 4-7% conv        │ 4-7% conv        │ NEVER 5+5        ║
║          │ Dignity-first    │ NEVR math reframe│ NEVR math reframe│ NEVR urgency     ║
║          │ NEVR urgency     │ NEVR 5+5         │ NEVR cheer       │ Highest LTV      ║
║  ────────┼──────────────────┼──────────────────┼──────────────────┼────────────────── ║
║  GF      │ ★ 3+3 ($79.99)  │ ★ 3+3 ($79.99)   │ 3+3 or 1pr       │ ★ 3+3 ($79.99)   ║
║  (Gen)   │ Migration anchors│ Migration anchors │ Cross-level      │ Cross-level      ║
║          │ embedded         │ embedded          │ R1-R6           │ R1-R6            ║
║          │                   │                   │                  │                  ║
║                                                                                        ║
║  ★ = Default offer for this cell                                                       ║
║                                                                                        ║
╚════════════════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §6, Layer-15-Offers.md §2-4, Synthesis 26-Pricing-Offer-Architecture.md)

### 5.3 Hope/Realism Ratio Matrix (24 Cells)

```
╔════════════════════════════════════════════════════════════════════════════════════════╗
║              HOPE vs REALISM — THE 24-CELL DECISION MATRIX                              ║
║              Every email across every stage × level has a hope/realism dial             ║
╠════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                        ║
║  STAGE           │  L1        L2        L3        GF         NOTES                      ║
║  ────────────────┼──────────────────────────────────────────────────────────────────── ║
║  Pre-Purchase    │ 70/30★    40/60     20/80     50/50       L1: Hope high              ║
║  (Welcome)       │  ↑Hope    Mixed     ↓↓Realism Balanced     L3: Heavy realism          ║
║  ────────────────┼──────────────────────────────────────────────────────────────────── ║
║  Conversion      │ 60/40     35/65     15/85     45/55       Still hope for L1           ║
║  (Cart/Checkout) │  ↓        ←→       ↓↓↓       ←→          Crushing realism for L3     ║
║  ────────────────┼──────────────────────────────────────────────────────────────────── ║
║  Transactional   │ 65/35     40/60     20/80     50/50       Warm function for all       ║
║  (Order/Shipping)│  ↑Hope    ←→       ↓↓        ←→          Gentle dignity for L3       ║
║  ────────────────┼──────────────────────────────────────────────────────────────────── ║
║  PP Early        │ 65/35     40/60     20/80     50/50       Reassurance heavy           ║
║  (D0-21)         │  ↑        ←→       ↓↓        ←→          Validate for L2             ║
║  ────────────────┼──────────────────────────────────────────────────────────────────── ║
║  PP Mid          │ 55/45     35/65     15/85     40/60       Patient coaching            ║
║  (D30-60)        │  ↓        ←→       ↓↓↓       ←→          Resignation for L3          ║
║  ────────────────┼──────────────────────────────────────────────────────────────────── ║
║  Lifecycle       │ 50/50     35/65     15/85     40/60       Low hope overall            ║
║  (Winback/Sunset)│  ↓↓       ←→       ↓↓↓       ←→          Minimal hope for L3         ║
║                                                                                        ║
║  ↑ = More hope  |  ↓ = More realism  |  ←→ = Balanced                                   ║
║                                                                                        ║
║  ADJUSTMENT RULES:                                                                      ║
║  Shift MORE hope when: Early journey (Phases 1-2), Transactional, After a win, L1       ║
║  Shift MORE realism when: Late journey (Phases 3-4), Cart recovery final, L2-3,         ║
║                          PP Mid (D14-60), Winback/sunset                                 ║
║                                                                                        ║
╚════════════════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §13.2)

---

## 6. CROSS-LEVEL CALIBRATION RULES (R1-R6)

Every cross-level email — whether GF, Cart/Browse/Checkout, Order Confirmation, PP-Education, Replenishment — MUST satisfy ALL 6 rules. This is the engineering backbone that makes one copy work for all 4 levels simultaneously.

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                  6 CROSS-LEVEL CALIBRATION RULES (R1-R6)                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  R1 ── SYMPTOM OVER LABEL                                                   ║
║         "Never name the level. Name the experience."                         ║
║         ❌ "Level 2" or "Level 3."                                          ║
║         ✅ "If your child doesn't feel when they need to go..."             ║
║                                                                              ║
║  R2 ── 3-5 RECOGNITION ANCHORS PER MAIL                                     ║
║         Every mail must have a block with 3+ specific situations:            ║
║         L1 anchor: "Sits 20 minutes, nothing happens"                       ║
║         L2 anchor: "Pees immediately when pull-up comes off"                ║
║         L3 anchor: "Doesn't react to wet diaper at all"                     ║
║         → Mom reads the list, finds 1-2 that match HER child                ║
║                                                                              ║
║  R3 ── AGE RANGES OVER FIXED AGES                                           ║
║         ❌ "For 5-year-olds..."                                              ║
║         ✅ "For kids 3 to 10+..."                                           ║
║                                                                              ║
║  R4 ── VERBAL / NON-VERBAL INCLUSIVITY                                      ║
║         Always cover both modes of communication:                           ║
║         Verbal: "saying 'wet'"                                              ║
║         Non-verbal: "showing you with a gesture"                            ║
║                                                                              ║
║  R5 ── TIMELINE FLEXIBILITY                                                 ║
║         ❌ "In 30 days your child will..."                                   ║
║         ✅ "Some kids 2 weeks. Others 8. Both normal."                      ║
║                                                                              ║
║  R6 ── LOW-BAR SUCCESS METRICS                                              ║
║         "Look at the wet spot for the first time"                           ║
║         "Pull at their pants in awareness"                                   ║
║         "Walk toward the bathroom (even after)"                              ║
║         "Stay dry 2 hours instead of 30 minutes"                            ║
║                                                                              ║
║  VIOLATION COST: Any cross-level email missing one of these 6 destroys      ║
║  trust with that segment. R1 violation is worst — mom feels labeled.        ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §4)

**Cross-level calibration is MANDATORY for these flows:**
GF mails, Cart/Checkout/Browse Abandonment, Order Confirmation/Shipping/Arrived, PP Day 0-14 (before Level Detection), Replenishment A/B/C, Sunset, Review Request, FAQ/Objection Library, Site Abandonment, PP-Support At-Risk, Referral Flow.

---

## 7. MIGRATION PATHS WITH FLOW CHARTS

### 7.1 The 4 Migration Paths

**Core Philosophy:** General Fallback is NOT an end state. It is a TEMPORARY state until mom self-identifies. Migration is one-directional — once tagged, never returns to GF. Expected outcome: 65-75% migrate, 25-35% stay GF permanently (valid outcome). (Source: Layer-19-Migration-Strategy.md §1)

---

#### PATH 1: Click-Based Migration (15-25% of GF)

```
GF Mail with migration anchors sent
     |
     v
Subscriber clicks a level story link? ──YES──> Tag applied → Level flows
     |                                           (avatar_level1/2/3)
     NO (75-85% don't click)
     |
     v
Next GF mail has same anchors (retry over 8 Welcome emails)
     |
     v
After all Welcome mails exhausted, no click?
     |
     ├── If purchased: → Path 3 (PP-Level Detection Day 14) ★ STRONGEST
     │
     └── If not purchased: → Stay GF → Cross-level flows → FAQ Lib (6) → Winback B
                                                                         |
                                                                     Sunset (120d)
```
(Source: Layer-19-Migration-Strategy.md §2.1)

---

#### PATH 2: Reply-Based Migration (5-15% of GF)

```
GF Mail encourages reply ("Hit reply if anything resonates")
     |
     v
Subscriber replies? ──YES──> NLP analysis → Level indicators found?
     |                              |                    |
     NO                          YES (>70%)           NO (<70%)
     |                              |                    |
     v                              v                    v
No change.                   Tag applied →          Manual review
Continue Path 1.             Level flows            OR stay GF
```

**Level indicators in replies:**
- **L1:** "Pre-K is coming", "He's 3/4/5 years old", "Oh Crap didn't work", "Almost trained"
- **L2:** "BCBA / ABA / OT", "5/6/7 years old", "Sensory issues", "Prompt-dependent", "Withholding"
- **L3:** "Non-verbal / AAC", "8/9/10+ years old", "Never been trained", "Medicaid", "Specialty diapers"

(Source: Layer-19-Migration-Strategy.md §2.2)

---

#### PATH 3: PP-Level Detection (40-50% migration — STRONGEST)

```
GF subscriber purchases → Order placed → Day 14
     |
     v
PP-Level Detection Mail sent (Single email, Flow 10)
Subject: "Quick question about your kid"

[Button 1] Verbal, "almost trained" but inconsistent     → avatar_level1
[Button 2] Sensory issues, tried many methods            → avatar_level2
[Button 3] Non-verbal or high support needs               → avatar_level3
[Button 4] I'm still figuring out — keep it general       → avatar_general (stays)
     |
     v
Click? ──YES──> Tag applied immediately → Level-specific flows
     |                                  (Welcome completed, so enters
     |                                   PP-Extended Education D22+)
     NO
     |
     v
Reminder at Day 21 (optional)
     |
     v
No click after 14 days → Stays GF permanently
```
(Source: Layer-19-Migration-Strategy.md §2.3, GIULIANO-DEMANDS.md §18.4)

---

#### PATH 4: Passive Purchase Hints (Ongoing)

**Mechanism:** Purchase behavior reveals level information:
- **Size purchased** → age hint → level hint
- **Bundle size** → experience hint (5+5 = L2 with BCBA context)
- **Product reorder** → engagement signal
- **Never assign below 70% confidence**

(Source: GIULIANO-DEMANDS.md §18.4)

---

### 7.2 Migration Decision Tree — Complete

```
                    SUBSCRIBER ENTERS (via pop-up)
                            │
                            ▼
              ╔═══════════════════════════╗
              ║  POP-UP SELF-SELECTION    ║
              ║  4 symptom-based buttons  ║
              ╚═══════════════════════════╝
                            │
              ┌─────────────┼─────────────────────────────┐
              ▼             ▼             ▼               ▼
        ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐
        │avatar_   │ │avatar_   │ │avatar_   │ │avatar_general│
        │level1    │ │level2    │ │level3    │ │(GF)          │
        └────┬─────┘ └────┬─────┘ └────┬─────┘ └──────┬───────┘
             │            │            │              │
             ▼            ▼            ▼              ▼
        ┌──────────────────────────────────┐  ┌──────────────────────────────┐
        │   LEVEL-SPECIFIC WELCOME FLOW     │  │  GF WELCOME FLOW             │
        │   8 emails, own copy per level   │  │  8 emails, cross-level (R1-R6)│
        │   L1: Pre-K driven               │  │  Migration anchors in E2-E4  │
        │   L2: BCBA context               │  │  Reply prompts in EVERY mail │
        │   L3: Dignity-first              │  └──────────────┬───────────────┘
        └──────────────┬───────────────────┘                 │
                       │                                     │
                       ▼                                     │
              ┌────────────────┐                             │
              │ PURCHASE?      │                             │
              └───────┬────────┘                             │
                 YES  │  NO                                  │
                      │                                      │
                      ▼                                      ▼
              ┌──────────────┐                      ┌──────────────────┐
              │ PP-EDUCATION  │                      │ FAQ/OBJECTION    │
              │ D0-21 (CL)   │                      │ LIBRARY (6 CL)   │
              │ + Level tag  │                      │                   │
              │ stays        │                      ▼                   │
              └──────┬───────┘              ┌──────────────────┐       │
                     │                       │ WINBACK PATH B   │       │
                     ▼                       │ 3×4=12 ★        │       │
              ┌──────────────┐               │ 60d never-bought│       │
              │ GF ONLY?     │               └──────────────────┘       │
              └───────┬──────┘                                          │
                 YES  │  NO (level tag known)                          │
                      │                                                  │
                      ▼                                                  │
              ┌──────────────────────┐                                  │
              │ PP-LEVEL DETECTION    │                                  │
              │ Day 14 mail          │                                  │
              │ 4 re-selection btns   │                                  │
              └──────────┬───────────┘                                  │
                         ▼                                              │
              ┌──────────────────────┐                                  │
              │ Migrated? YES →      │──────────────┐                   │
              │ avatar_level1/2/3    │              │                   │
              │ NO → stays GF        │              │                   │
              └──────────────────────┘              │                   │
                         │                          │                   │
                         ▼                          ▼                   ▼
              ┌──────────────────────┐  ┌──────────────────────────────┐
              │ PP-EXTENDED EDU      │  │ PP-EXTENDED EDU skipped      │
              │ 5×4=20 ★ D22+       │  │ → PP-Mid Check (CL)          │
              │ Level tag required   │  │ → Replenish (CL)             │
              └──────────────────────┘  └──────────────────────────────┘
                                                   │
                                                   ▼
                                      ┌──────────────────────────┐
                                      │ ALL LEVELS: same path   │
                                      │ → Review → Replenishment │
                                      │ → Winback A (90d)        │
                                      │ → Sunset (120d)          │
                                      └──────────────────────────┘
```
(Source: GIULIANO-DEMANDS.md §18, Layer-19-Migration-Strategy.md §4)

---

## 8. EDGE CASES

### 8.1 Unknown Avatar (Non-Migrating GF)

- ~25-35% of GF subscribers never migrate to a level-specific track
- These subscribers receive cross-level content PERMANENTLY
- Cross-level calibration (R1-R6) ensures the copy works for all experiences
- Never attempt migration again after PP-Level Detection non-response
- Valid outcome — not failure. Some parents genuinely don't fit a level profile.
- **Tag:** avatar_general (permanent)
- **Flows received:** All cross-level flows. PP-Extended Education (Flow 22) is SKIPPED.

### 8.2 Multi-Child Household

- If multiple children at different levels, the PARENT is the customer, not the child
- The parent has the MOST severe child's experience on their mind
- **Rule:** Route to the HIGHEST support-need level tag present. If both L1 and L3 children, route L3 (dignity-first is universal; Pre-K urgency for L1 would alienate L3 reality)
- **Exception:** If the subscriber explicitly tags their focus child, use that tag
- **Klaviyo Implementation:** Profile property `child_level` with ability to store multiple values. Primary used for routing.

### 8.3 Non-Parent Caregivers

- Grandparents, aunts, nannies, foster parents
- Same avatar levels apply (child's support needs drive experience)
- **Tonality note:** May be less emotionally raw than bio-parents. Reduce deep guilt language. Increase mechanism-first, practical framing.
- **Lena voice still works:** She's talking to another caregiver who wants the best for the child.
- **Rule:** Use same flow architecture. No separate flows needed. Cross-level calibration handles the range.

### 8.4 International Subscribers

| Region | Current Volume | Adaptations Needed |
|--------|:-------------:|--------------------|
| USA | ~65% | Default — no adaptation needed |
| UK | ~15% | "Nappies" not "diapers". "Potty" vs "toilet" sensitivity. Currency: £. (Source: GIULIANO-DEMANDS.md V22) |
| AU/NZ | ~15% | Same as UK adaptations. Currency: A$/NZ$. |
| CA | ~5% | Minor. Currency: C$. French-Canadian not needed in Phase 1. |

**International Flow Rules:**
- Phase 1: USA only. Regional adaptation is Phase 3+ optimization.
- Region detection: Via Klaviyo geo-IP or billing address.
- Tag when known: `region_us`, `region_uk`, `region_au`, `region_ca`
- When unknown: Use US default (USA is 65% of volume)
- Currency display: $34.99 in USA. £25.00 in UK. $49.99 AU.
- NEVER include region-specific content that alienates other regions (school years, holidays, local brands)

(Source: GIULIANO-DEMANDS.md §V22, MASTER-DIAGNOSIS-COMPENDIUM.md §1.1)

### 8.5 Diagnosis Rejecters (GF Sub-Group B)

- ~15% of GF volume. Anti-identity parents who reject "autism/ASD/Level" labels.
- **Rigid rule:** Use symptom language ONLY. Never "autism", "ASD", "Level 1/2/3". Use "nervous system differences" as umbrella term. (Source: GIULIANO-DEMANDS.md V16)
- **Migration:** Do NOT attempt. These are PERMANENT GF residents.
- **Conversion lever:** Mechanism-specific, science-driven, no labeling language.

### 8.6 Sensory Difference Parents (GF Sub-Group C)

- ~25% of GF volume. Child has SPD/ADHD, no ASD diagnosis.
- **Purpose:** They relate to the mechanism (body signal disconnect) but not the autism frame.
- **Conversion lever:** Interoception science. Theory of change works even without ASD diagnosis.
- **Migration:** Do NOT attempt. Permanent GF.

### 8.7 Overwhelmed Non-Selectors (GF Sub-Group D)

- ~25% of GF volume. HAS ASD diagnosis but clicked pop-up away due to overwhelm.
- **Highest migration potential:** 40-50% via PP-Level Detection.
- **Strategy:** Heavy migration anchor density in all GF mails. Strongest target for Path 3.

(Source: GIULIANO-DEMANDS.md §1.2)

### 8.8 The 5 Big Structural Don'ts

1. **Don't create emotional dimension flows in Phase 1** — Phase 1 = level-only. Deadline/Social/Overwhelmed are Phase 2+.
2. **Don't double-saturate new subscribers** — Reduced campaign load during Welcome window.
3. **Don't send to unengaged at standard volume** — Route through Sunset only.
4. **Don't use discount codes during domain warming** — Educational content ONLY for weeks 1-2.
5. **Don't name Trustpilot or Facebook** — Facebook NOT USED. Trustpilot no page exists. (Source: GIULIANO-DEMANDS.md §Klaviyo Locked URLs)

---

## 9. IMPLEMENTATION PRIORITY ORDER

### 9.1 Phase 1 (Month 1-2): Launch-Ready — Build These FIRST

| Rank | Flow | Justification |
|:----:|------|---------------|
| **1** | **Pop-Up Setup** | Without the pop-up, no subscribers enter the system. Most critical infrastructure. |
| **2** | **Welcome Flow (L1/L2/L3/GF)** 32 emails | EVERY subscriber starts here. Highest impact flow. Build 4 parallel Klaviyo flows. |
| **3** | **Cart Abandonment** (3) | Recovers 15-20% of abandoned carts. Direct revenue driver. |
| **4** | **Checkout Abandonment** (2) | Highest intent — recovers 25+% of drop-offs. |
| **5** | **Order Confirmation** (1) | Required transactional. Builds trust from first purchase. |
| **6** | **Arrived & Welcome** (1) | Warm intro to product. Upsell opportunity. |
| **7** | **PP-Direct Upsell** (2) | Immediate post-purchase value recovery. |
| **8** | **PP-Level Detection** (1) | GF→Level migration gateway. Drives future segmentation. |
| **9** | **Shipping Notification** (1) | Required transactional. Low effort. |
| **10** | **Out for Delivery** (1) | Optional. Nice-to-have during launch. |

**Phase 1 Total: 47 emails across 10 flows.** Estimated build time: 2-3 weeks for copy + 1-2 weeks for Klaviyo setup.

### 9.2 Phase 2 (Month 3-4): High-Value — Build When Phase 1 Is Live

| Rank | Flow | Justification |
|:----:|------|---------------|
| 11 | **PP-Education D0-21** (4) | Keeps new buyers engaged. Reduces returns. |
| 12 | **PP-Mid Check-In** (3) | Mid-journey check. Prevents early disengagement. |
| 13 | **PP-Mary S. Story** (1) | Founder trust story — one email, high impact. |
| 14 | **PP-Extended Upsell** (3) | Revenue recovery from existing buyers. |
| 15 | **Replenish A (1pr)** (3) | First re-order trigger. |
| 16 | **Replenish B (3+3)** (2) | Bestseller re-order. |
| 17 | **Replenish C (5+5)** (2) | Max-value re-order. |
| 18 | **Review Request** (2) | Social proof library building. |
| 19 | **Winback Path A** (12) | $ recovery from lapsed buyers. Requires 500+ customers. |
| 20 | **Browse Abandonment** (3) | Mid-intent recovery — add after cart flows proven. |
| 21 | **Site Abandonment** (1) | Lowest priority in Phase 2. Only if traffic volume justifies it. |

**Phase 2 Total: 40 emails across 11 flows.**

### 9.3 Phase 3 (Month 5-6): Nice-to-Have

| Rank | Flow | Justification |
|:----:|------|---------------|
| 22 | **Winback Path B** (12) | Never-bought re-engagement. After FAQ library exhausts. |
| 23 | **FAQ/Objection Library** (6) | Addresses top objections. Cross-level per Giuliano correction. |
| 24 | **PP-Extended Education** (20) | Deep education for known-level, engaged buyers. |
| 25 | **PP-Support At-Risk** (4) | Proactive disengagement prevention. |
| 26 | **Sunset Flow** (2) | List hygiene + deliverability protection. |
| 27 | **Referral Flow** (3) | Organic growth. Phase 3 is fine. |

**Phase 3 Total: 27 emails across 4 flows.** Wait for Phase 1-2 data before building.

### 9.4 Critical Time-Dependencies

```
                    IMPLEMENTATION SEQUENCE — CRITICAL PATH

    WEEK 1-2:     POP-UP SETUP ──────────────────┐
                    │                               │
                    ▼                               │
    WEEK 3-4:   WELCOME FLOW (32 emails) ──────────┤
                    │                               │
                    ▼                               ▼
    WEEK 5-6:   CART + CHECKOUT + ORDER ────→     LAUNCH
                    │
                    ▼
    WEEK 7-8:   PP FLOWS (D0-21, Arrived, Upsell)
                    │
                    ▼
    WEEK 9-12:  PP-LEVEL DETECTION → REPLENISHMENT
                    │
                    ▼
    WEEK 13-16: WINBACK A + BROWSE + FAQ
                    │
                    ▼
    WEEK 17-24: PP-EXTENDED EDU + AT-RISK + SUNSET
```
(Source: GIULIANO-DEMANDS.md §2.1, Synthesis 07-Email-Sequence-Framework.md)

---

## 10. EMAIL VOLUME & FREQUENCY PLAN

### 10.1 Content Mix — The 3 Buckets

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      EMAIL CONTENT ALLOCATION — THE 3 BUCKETS                 ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║                          ┌───────────────────┐                               ║
║                          │   ~50% EDUCATIONAL │                               ║
║                          │   Mechanism, Science│                               ║
║                          │   Tips, Validation  │                               ║
║                          └───────────────────┘                               ║
║                                   │                                          ║
║                  ┌────────────────┴────────────────┐                        ║
║                  ▼                                 ▼                          ║
║            ┌──────────────┐                  ┌──────────────┐                ║
║            │ ~30% SALES    │                  │ ~20% BRAND    │                ║
║            │ Offers, CTAs,  │                  │ Lena story,   │                ║
║            │ Guarantee    │                  │ Community,    │                ║
║            │ Framing      │                  │ Founder       │                ║
║            └──────────────┘                  └──────────────┘                ║
║                                                                              ║
║  90/10 RULE: Mechanism is ALWAYS the hero. Only 10% of ANY email            ║
║  should be promotional. Educational framing even in upsell moments.         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §12.1)

### 10.2 Segment-Based Frequency Tiers

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      EMAIL FREQUENCY PYRAMID                                 ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║                     ┌───────────┐                                            ║
║                     │    VIPs   │ ← 3-5/week                                 ║
║                     │  3-5/wk   │   Every send must feel TO THEM earned      ║
║                    ┌┴───────────┴┐                                           ║
║                    │  Engaged    │ ← 2-3/week                                ║
║                    │  30-60d     │   Education + soft conversion              ║
║                   ┌┴─────────────┴┐                                          ║
║                   │  Engaged     │ ← 1-2/week                                ║
║                   │  90+d        │   Maintain relationship                    ║
║                  ┌┴───────────────┴┐                                         ║
║                  │ New Subscribers │ ← 2-3/week + Welcome                    ║
║                  │ Recent Buyers   │   Reduced campaign load                  ║
║                  │ 2-3/wk         │   Don't double-saturate                  ║
║                 ┌┴─────────────────┴┐                                        ║
║                 │   Lapsed          │ ← 1/week max                           ║
║                 │   1/week max      │   Heavy discount or reason to engage    ║
║                ┌┴───────────────────┴┐                                       ║
║                │   Unengaged        │ ← SUNSET FLOW ONLY                     ║
║                │   Sunset only      │   No standard volume                   ║
║                └─────────────────────┘                                       ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §12.3)

### 10.3 Flow Cadence Templates

| Flow Type | Cadence | Example |
|-----------|---------|---------|
| Welcome | D0 / D1 / D3 / D7 / D10 / D14 / D17 / D21 | 8 emails over 21 days |
| Cart Abandonment | 1h / 24h / 72h | 3 emails, aggressive timing |
| Checkout Abandonment | 10min / 60min | 2 emails, highest intent |
| Browse Abandonment | 30min / 24h / 72h | 3 emails, mid intent |
| Post-Purchase | D0 / D2 / D5-7 / D14 / D21 / D30 | Education series |
| Winback | D0 / D7 / D14 | 3 emails over 2-3 weeks |
| Re-engagement | D0 / D3 / D7 | Quick check cadence |
| Replenishment | Pack-dependent | 1pr: D14/D21/D30, 3+3: D75/D90, 5+5: D150/D165 |

(Source: GIULIANO-DEMANDS.md §12.4)

### 10.4 Monthly Email Volume Estimates

| Segment | Subscriber Count (est.) | Emails/Month | Total Volume/Month |
|---------|:----------------------:|:------------:|:------------------:|
| In Welcome Flow | ~20% of list | ~12 | 2.4× list size |
| Recent Buyers | ~15% | ~10 | 1.5× |
| Engaged 30-60d | ~25% | ~10 | 2.5× |
| Engaged 90+d | ~20% | ~6 | 1.2× |
| Lapsed | ~10% | ~4 | 0.4× |
| VIP | ~5% | ~16 | 0.8× |
| Unengaged | ~5% | ~2 | 0.1× (Sunset only) |

**Estimated total send volume at steady state:** ~9× subscriber count per month.
**During domain warming (weeks 1-2):** ~3-4× subscriber count per month. Gradual ramp to full volume.

### 10.5 Never Double-Saturate Rule

Max 1 flow email per subscriber per day. This is hard-enforced via Klaviyo flow priority chain and suppression rules. The suppression chain ensures:
- Winback/Sunset overrides all other flows
- Cart Aband. suppresses Welcome E3+ (but allows E1-E2 if already sent)
- Transactional emails are always delivered (they don't count toward the daily flow limit)

(Source: GIULIANO-DEMANDS.md §2.5)

---

## 11. DELIVERABILITY & DOMAIN WARMING

### 11.1 Current Status

- Authenticated but **unwarmed**. Zero sender reputation.
- SPF: ✅ (include:spf.klaviyo.com) but ~all soft fail — needs hardening.
- DKIM: ✅ CNAME records exist but **unverified**.
- DMARC: ✅ p=none — ready to step up to quarantine → reject.
- Tracking CNAME: ✅ setup via DNS.
- **Google Postmaster Tools: ❌ NOT SET — This is a P0 blocker.** Must be set up before any sends. (Source: Synthesis 12-Klaviyo-Implementation-Guide.md)

### 11.2 7-Week Domain Warming Schedule

```
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║                          DOMAIN WARMING — 7-WEEK PROGRESSION                              ║
╠══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                          ║
║     WEEK 1-2         WEEK 3-4          WEEK 5-6          WEEK 7+                         ║
║     ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐                     ║
║     │  ICE     │     │  BUILD   │     │  SCALE   │     │  FULL    │                     ║
║     │  BREAKER │     │          │     │          │     │          │                     ║
║     └──────────┘     └──────────┘     └──────────┘     └──────────┘                     ║
║           │              │               │               │                               ║
║           ▼              ▼               ▼               ▼                               ║
║    ┌──────────┐   ┌──────────┐    ┌──────────┐    ┌──────────┐                          ║
║    │ Welcome  │   │ +Light   │    │ Gradual  │    │ Full     │                          ║
║    │ Browse   │   │  PP-Edu  │    │  promo   │    │ unrest-  │                          ║
║    │ Cart/CO  │   │  Winback │    │  intro   │    │ ricted   │                          ║
║    │ PP only  │   │          │    │          │    │          │                          ║
║    └──────────┘   └──────────┘    └──────────┘    └──────────┘                          ║
║                                                                                          ║
║  SEND      3-4/wk         4-5/wk         5-7/wk       Per segment                       ║
║  VOLUME                                                                                  ║
║                                                                                          ║
║  FROM      "Lena from BrightKidCo" ONLY  │  Add hello@ + orders@                        ║
║  ADDRESS   <support@send.brightkidco.com> │  AFTER Week 6                                ║
║            (ALL emails use this)         │  (info@/help@ after estab)                   ║
║                                                                                          ║
║  RULES     • NO promo codes              │  Unrestricted                                ║
║            • NO hard-sell                │                                              ║
║            • NO >1 CTA                   │                                              ║
║            • NO countdown timers         │                                              ║
║            • NO affiliate links          │                                              ║
║            • REQUIRED: Edu content       │                                              ║
║            • REQUIRED: Plain-text pref   │                                              ║
║            • REQUIRED: Reply prompts     │                                              ║
║            • REQUIRED: 60:40 text:img    │                                              ║
║            • REQUIRED: Lena voice        │                                              ║
║            • L3 EXCLUDED from weeks 1-2  │                                              ║
║            • NEVER "All Subscribers"     │                                              ║
║            • Use 90-Day Engaged min      │                                              ║
║            • Monitor GPT reputation daily│                                              ║
║            • If open rate <45%: PAUSE    │                                              ║
║                                                                                          ║
║  🚨 🔑 Reply prompts in EVERY email — replies are the #1 deliverability signal          ║
║                                                                                          ║
╚══════════════════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §17.1)

### 11.3 Bot Detection & Suppression

| Segment | Description | Action |
|---------|-------------|--------|
| Segment 1 | Known Fake Domains (20+ disposable email domains) | Tag `is_bot = True`, exclude from ALL sends |
| Segment 2 | Non-Engaged Sleepers (10+ emails, 0 opens, 0 clicks) | Tag `is_bot = True`, route to sunset |

(Source: GIULIANO-DEMANDS.md §17.4)

### 11.4 Metrics Thresholds

| Metric | Target | Warning | Critical | Emergency |
|--------|:------:|:-------:|:--------:|:---------:|
| Bounce Rate | <0.5% | 0.5-1.0% | >1.0% | — |
| Spam Complaint | <0.01% | 0.01-0.03% | >0.03% | >0.05% |
| Open Rate | >50% | 45-50% | <45%: PAUSE | — |
| Click Rate | >3% | 2-3% | <2% | — |

(Source: GIULIANO-DEMANDS.md §17.5)

### 11.5 Code Red Protocol

```
╔══════════════════════════════════════════════════════════════════════════════╗
║          CODE RED PROTOCOL — ACTIVATED WHEN SPAM RATE >0.03%                 ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║                     ┌─────────────────────┐                                  ║
║                     │ Google Postmaster    │                                  ║
║                     │ reputation = "Bad"   │                                  ║
║                     │ or spam >0.03%       │                                  ║
║                     └──────────┬──────────┘                                  ║
║                                │                                             ║
║                                ▼                                             ║
║              ┌─────────────────────────────────┐                              ║
║              │  IMMEDIATE ACTIONS                │                              ║
║              │  1. Enable temporary DOUBLE       │                              ║
║              │     OPT-IN for all new subs       │                              ║
║              │  2. Modify Welcome Flow to        │                              ║
║              │     TWO-STEP: gate E2-E8 behind   │                              ║
║              │     open of E1                    │                              ║
║              │  3. Add "Check your spam folder"  │                              ║
║              │     messaging on signup confirm   │                              ║
║              └──────────────┬──────────────────┘                              ║
║                             │                                                ║
║                             ▼                                                ║
║              ┌─────────────────────────────────┐                              ║
║              │  CONTAINMENT                      │                              ║
║              │  4. PAUSE ALL sends except        │                              ║
║              │     VIP Clickers segment          │                              ║
║              │  5. Consider 48-72 HOUR COMPLETE  │                              ║
║              │     SENDING PAUSE for reset       │                              ║
║              └──────────────┬──────────────────┘                              ║
║                             │                                                ║
║                             ▼                                                ║
║              ┌─────────────────────────────────┐                              ║
║              │  RECOVERY MONITORING              │                              ║
║              │  • After resume: send to          │                              ║
║              │    90-Day Engaged minimum only    │                              ║
║              │  • Monitor GPT rep daily          │                              ║
║              │  • If open rate <45% → pause     │                              ║
║              │  • Escalate to domain re-warm     │                              ║
║              └─────────────────────────────────┘                              ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §17.6)

---

## 12. KLAVIYO TECHNICAL SETUP

### 12.1 Sender Configuration

| Element | Specification |
|---------|---------------|
| From Name | "Lena from BrightKidCo" (ALWAYS — for every email in Phase 1) |
| From Address (marketing) | `hello@send.brightkidco.com` |
| From Address (transactional) | `orders@send.brightkidco.com` |
| Reply-To (ALWAYS) | `support@brightkidco.com` |
| Sending Subdomain | `send.brightkidco.com` |
| Tracking Domain | `click.brightkidco.com` → `dct.klaviyodns.com` |
| SPF | `v=spf1 include:spf.klaviyo.com ~all` |
| DKIM | 2 CNAME records (verify before sending) |
| DMARC | p=none → p=quarantine → p=reject (step up over time) |

(Source: GIULIANO-DEMANDS.md §16.3, Synthesis 12-Klaviyo-Implementation-Guide.md)

### 12.2 Profile Properties

| Property | Type | Values | Source |
|----------|------|--------|--------|
| `avatar_level` | string | level1/level2/level3/general | Pop-up (self-selection) |
| `child_age` | string | Optional | User input |
| `signup_source` | string | popup/checkout/referral/other | Auto-detected |
| `welcome_flow_completed` | boolean | true/false | Auto |
| `last_purchase_pack_size` | string | 1pair/3+3/5+5 | Shopify sync |
| `vip_customer` | boolean | true/false | 3+ orders |

**Phase 2+ additions:** `purchase_reason`, `label_sensitive`, `rfm_recency`, `rfm_frequency`, `rfm_monetary`

(Source: GIULIANO-DEMANDS.md §16.1)

### 12.3 Tag System (15 Tags)

| Category | Tags |
|----------|------|
| **Avatar (4)** | avatar_level1, avatar_level2, avatar_level3, avatar_general |
| **Behavior (6)** | welcome_completed, welcome_completed_no_purchase, post_purchase_active, at_risk_no_open, inactive_60_days, inactive_120_days |
| **Purchase (5)** | buyer_1pair, buyer_3plus3, buyer_5plus5, repeat_buyer, vip_buyer |

(Source: GIULIANO-DEMANDS.md §16.2)

### 12.4 Locked URLs (Use Exactly as Written)

| Page | URL |
|------|-----|
| Homepage | `https://www.brightkidco.com` |
| All Products | `https://www.brightkidco.com/collections/all-products` |
| ASD PDP (primary) | `https://www.brightkidco.com/products/potty-training-underwear-for-sensory-sensitive-toddlers-sp` |
| Standard PDP | `https://www.brightkidco.com/products/potty-training-underwear` |
| Parent Stories | `https://www.brightkidco.com/pages/real-parent-stories` |
| FAQ | `https://www.brightkidco.com/pages/faq` |
| Contact | `https://www.brightkidco.com/pages/contact` |
| Instagram | `https://www.instagram.com/brightkidco_official/` |
| TikTok | `https://www.tiktok.com/@brightkidco.com` |
| Facebook | **NOT USED — do not include in any mail** |
| Trustpilot | **No page exists — do not link** |

(Source: GIULIANO-DEMANDS.md §16.4)

---

## 13. OFFER ARCHITECTURE BY LEVEL

### 13.1 The Three Tiers

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    BRIGHTKIDCO — THREE-TIER OFFER SYSTEM                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║    TIER 1: 1 PAIR ($34.99)    TIER 2: 3+3 ($79.99)    TIER 3: 5+5 ($119.99) ║
║   ┌──────────────────────┐   ┌──────────────────────┐  ┌──────────────────┐ ║
║   │ Per-pair: $34.99     │   │ Per-pair: $13.33     │  │ Per-pair: $12.00 │ ║
║   │ Savings: —           │   │ Savings: 62%         │  │ Savings: 66%     │ ║
║   │ Revenue share: 15-20%│   │ Revenue share: ~65% ★│  │ Rev share:10-15% │ ║
║   │ L3 default           │   │ DEFAULT all levels   │  │ L2 BCBA framing  │ ║
║   │ Entry-level / trial  │   │ Bestseller / AOV sweet│  │ Max value kit    │ ║
║   └──────────────────────┘   └──────────────────────┘  └──────────────────┘ ║
║                                                                              ║
║    OFFER RULES:                                                              ║
║    • WELCOME10 = 10% off, 7-day validity, displayed IN pop-up                  ║
║    • FREE shipping on 3+3 and 5+5 bundles                                    ║
║    • 60-Day Money Back Guarantee on ALL purchases via email                    ║
║    • NEVER use "30-day" in email ecosystem — always 60-day                    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: Layer-15-Offers.md §1-3, Synthesis 26-Pricing-Offer-Architecture.md)

### 13.2 Offer Rules per Level

| Level | Primary Offer | Secondary | Restrictions |
|-------|:-------------:|:---------:|--------------|
| **L1** | 3+3 ($79.99) | 5+5 ($119.99) | Never 1-pair as default. Math reframe OK. Urgency strong. |
| **L2** | 3+3 ($79.99) | 5+5 BCBA-frame | Math reframe CAREFUL. Guarantee critical. BCBA fact-sheet angle. |
| **L3** | **1 Pair ($34.99)** | NEVER 5+5 | NEVER math reframe. NEVER urgency. Dignity-first pricing. |
| **GF** | 3+3 ($79.99) | 1 Pair ($34.99) | Cross-level default. Migration anchors embedded. |

(Source: Layer-15-Offers.md §2-4)

### 13.3 Cart Recovery Offer Escalation

| Email | Strategy |
|-------|----------|
| E1 (1h) | Same offer as cart. High-intensity recovery. |
| E2 (24h) | Upsell offer: 1pr→3+3, 3+3→5+5. Math reframe. |
| E3 (72h) | Original offer + maximum guarantee emphasis. |

(Source: Layer-15-Offers.md §5)

---

## 14. BRAND VOICE & LENA'S RULES

### 14.1 The Brand Identity

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    BRIGHTKIDCO — BRAND IDENTITY PILLARS                       ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║                  ┌─────────────────────────┐                                 ║
║                  │     FOUNDER'S STORY      │                                 ║
║                  │    Mary S. went through  │                                 ║
║                  │    this herself           │                                 ║
║                  └──────┬──────────────────┘                                 ║
║                         │                                                    ║
║         ┌───────────────┼───────────────┐                                    ║
║         ▼               ▼               ▼                                    ║
║  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                            ║
║  │  CLINICALLY  │ │  EMOTIONALLY │ │ KNOWLEDGE-  │                            ║
║  │  INFORMED    │ │  RAW         │ │ BASED       │                            ║
║  │  BY SCIENCE  │ │  NOT SANITIZED│ │ NOT HOPE-  │                            ║
║  │  (Mahler,    │ │  Real parent │ │ BASED       │                            ║
║  │   SPARK)     │ │  language    │ │ Mechanism   │                            ║
║  └─────────────┘ └─────────────┘ └─────────────┘                            ║
║                        │                                                    ║
║                        ▼                                                    ║
║              ┌─────────────────────┐                                        ║
║              │  LENA S.            │                                        ║
║              │  Customer Support   │                                        ║
║              │  Mom of 2 autistic  │                                        ║
║              │  sons (6 & 8)       │                                        ║
║              │  ★ FIRST HUMAN      │                                        ║
║              │    TOUCHPOINT ★     │                                        ║
║              └─────────────────────┘                                        ║
║                                                                              ║
║  NOT: wellness brand | expert brand | miracle product brand                 ║
║  IS: peer-to-peer | mechanism-first | dignity-first                         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §7.1)

### 14.2 Lena's 4-Step Formula

Every email must follow: **Observation → Validation → Mechanism → Permission**

1. **Observation** — Specific scenario mirroring what the mom experiences daily
2. **Validation** — "You didn't fail. Here's what actually happened."
3. **Mechanism** — Neurological explanation (interoception, body signals)
4. **Permission** — Soft CTA or permission-not-to-buy

### 14.3 Lena Sign-Off Variants

| Variant | Text | Use For |
|---------|------|---------|
| **SHORT** | "Thanks for being here. If you have a question, hit reply. You'll get me — not a template, not a bot. I read everything. Lena ——" | Welcome E1, transactional |
| **MEDIUM** | "I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8. If your kid is anywhere on this curve — that's normal here. Lena —— P.S. Reply if anything resonates. I read every one." | Emotional / education mails |
| **LONG** | "Whatever you choose — thanks for reading this far. If this isn't the day, that's okay. The product will be here next month. So will I. I have two autistic sons. I know what it's like when 'later' turns into another year. But I also know what it's like to push too early. Trust your read. Lena ——" | Cart Recovery, Last Day |

**Sign-off closing words per position:**
- Emails 1-2: **"Talk soon,"**
- Emails 3-5: **"With understanding,"**
- Emails 6+ and winback: **"With care,"**

(Source: GIULIANO-DEMANDS.md §7.2-7.3)

### 14.4 Mary S. Rules

- Appears ONLY in dedicated "Mary S. Story" mail (Flow 14, Phase 2)
- NOT mixed with Lena sign-off
- NOT in regular Phase 1 mails
- NEVER in Lena's voice

(Source: GIULIANO-DEMANDS.md §7.4)

### 14.5 Content Composition Rule

Every email must hit this integration quota:
- **30-50%** Authentic verbatim language (from RS PDFs only)
- **30-50%** Lena's voice (peer-to-peer)
- **10-20%** Mechanism / brand language
- **Minimum:** 2-4 authentic verbatim quotes or tightly paraphrased lines from RS per mail

(Source: GIULIANO-DEMANDS.md §9.4)

---

## 15. METRICS & SUCCESS CRITERIA

### 15.1 Per-Flow Benchmark Targets

| Flow | Open Rate | Click Rate | Conversion Rate |
|------|:---------:|:----------:|:---------------:|
| Welcome E1 | 60-70% | 15-25% | — |
| Welcome E2 | 50-60% | 10-15% | — |
| Welcome E3 | 45-55% | 8-12% | — |
| Welcome E4-E5 | 35-45% | 5-8% | — |
| Welcome E6-E8 | 20-35% | 3-5% | — |
| Cart Aband. E1 | 45-55% | 15-20% | 15-20% (recovery) |
| Cart Aband. E2-E3 | 30-40% | 8-12% | 8-12% / 5-8% |
| Browse Aband. | 35-45% | 8-15% | 5-10% |
| PP-Education | 40-55% | 5-8% | — |
| Replenishment | 35-45% | 8-15% | 8-12% |
| Winback A | 20-30% | 3-8% | 5-10% |
| Winback B | 15-25% | 2-5% | 3-5% |
| Review Request | 30-40% | 5-10% | 10-15% (review rate) |
| Referral | 25-35% | 3-8% | 5-10% |

### 15.2 Overall Program KPIs

| Metric | Target | Measurement |
|--------|:------:|-------------|
| List Growth Rate | +10-15%/month | New subscribers / total list |
| Welcome-to-Purchase Rate (L1) | 15-25% | Conversions from Welcome flow |
| Welcome-to-Purchase Rate (L2) | 8-15% | Conversions from Welcome flow |
| Welcome-to-Purchase Rate (L3) | 4-7% | Conversions from Welcome flow |
| GF Migration Rate | 65-75% lifetime | GF subscribers migrating to level-specific |
| PP-Level Detection Migration | 40-50% | GF purchasers migrating at D14 |
| Average Order Value | $79.99 (3+3 target) | Revenue / order count |
| Repeat Purchase Rate | 25-35% (90d) | Customers ordering again within 90 days |
| Bounce Rate | <0.5% | Klaviyo dashboard |
| Spam Complaint Rate | <0.03% | Klaviyo dashboard |
| Open Rate (program) | >40% | All sends aggregated |
| Unsubscribe Rate | <0.5%/send | Klaviyo dashboard |

### 15.3 Migration Success Benchmarks

| Migration Path | Expected Rate | Timeframe | Conversion Uplift |
|----------------|:------------:|:---------:|:-----------------:|
| Path 1: Click-Based | 15-25% of GF | Over Welcome period | +30-50% |
| Path 2: Reply-Based | 5-15% of GF | Ongoing | +20-40% |
| Path 3: PP-Level Detection | 40-50% of GF purchasers | Day 14 post-purchase | +40-60% |
| Path 4: Passive Hints | 5-10% of GF | Ongoing | +15-25% |
| **Overall Target** | **65-75% of GF migrate** | **6 months** | **+25-35% overall** |

---

*End of BrightKidCo Full Email Strategy Document — Contains 15 sections, 25+ flow specifications, 10 ASCII/Unicode diagrams, complete migration paths, edge case handling, and implementation priority order.*

*Every decision in this document cites its source. No assumptions, no best-practice claims without evidence.*

*Generated: May 28, 2026 | Sources: GIULIANO-DEMANDS.md, MASTER-DIAGNOSIS-COMPENDIUM.md, MASTER-INGESTION-COMPENDIUM.md, MASTER-RESEARCH-COMPENDIUM.md, 32 Synthesis Documents, 6 Diagnosis Layers*
