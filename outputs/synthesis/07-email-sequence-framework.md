# BrightKidCo — Email Sequence Framework

> **The complete architecture of the BrightKidCo email program: 25 flows, 110+ emails, 3 deployment phases, 4 avatar levels**
> **Blueprint defining every flow, how they connect, and what each accomplishes**
> Generated: May 28, 2026 | Wave A2 — Synthesis Document 07 (REBUILD)
> Version: 2.0 — Complete 25-flow specification, all 16 sections

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [System Architecture Overview](#2-system-architecture-overview)
3. [Flow Connection Map — Complete Subscriber Lifecycle](#3-flow-connection-map--complete-subscriber-lifecycle)
4. [Avatar Segmentation & Tonality Matrix](#4-avatar-segmentation--tonality-matrix)
5. [Flow-by-Avatar-Level Matrix](#5-flow-by-avatar-level-matrix)
6. [Phase 1: Launch Flows (Months 1-2) — 10 Flows, 47 Emails](#6-phase-1-launch-flows-months-1-2)
7. [Phase 2: High-Value Flows (Months 3-4) — 11 Flows, 56 Emails](#7-phase-2-high-value-flows-months-3-4)
8. [Phase 3: Nice-to-Have Flows (Months 5-6) — 4 Flows, 23 Emails](#8-phase-3-nice-to-have-flows-months-5-6)
9. [Cross-Flow Suppression & Priority Chain](#9-cross-flow-suppression--priority-chain)
10. [GF-to-Level Migration Strategy](#10-gf-to-level-migration-strategy)
11. [Edge Cases & Exception Handling](#11-edge-cases--exception-handling)
12. [Tag Taxonomy & Klaviyo Profile Properties](#12-tag-taxonomy--klaviyo-profile-properties)
13. [Offer Rules Per Flow & Per Level](#13-offer-rules-per-flow--per-level)
14. [Domain Warming & Sending Schedule](#14-domain-warming--sending-schedule)
15. [Metrics Dashboard — Success Criteria Per Flow](#15-metrics-dashboard--success-criteria-per-flow)
16. [Appendices](#16-appendices)

---

## 1. EXECUTIVE SUMMARY

The BrightKidCo email ecosystem is a **25-flow, 110+ email automation system** deployed across **3 phases over 6 months**. It serves parents of autistic children (ages 3-10+) navigating potty training, segmented into **4 avatar levels** with distinct emotional states, tonality requirements, and decision speeds.

**Core Insight:** Every mom is solving the **wrong problem**. She thinks it's behavioral (child being difficult). It's neurological (child can't feel body signals). This reframe — from blame to neurology — is the emotional center of gravity for every communication. (Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 1.8)

**Source References for this document:**
- MASTER-DIAGNOSIS-COMPENDIUM.md — All 7 sections on customer, product, voice, conversion, segmentation
- MASTER-INGESTION-COMPENDIUM.md — Parent quotes, behavioral patterns, voice rules
- MASTER-RESEARCH-COMPENDIUM.md — Competitive landscape, science, benchmarks
- GIULIANO-DEMANDS.md — 37 sections of success criteria
- Layer 8 (Segmentation Mechanics) — Tag taxonomy, routing, migration
- Layer 16 (Flow Architecture) — 25 flow blueprint, timing, triggers
- Layer 17 (Tonality Calibration) — Per-level tone, voice rules
- Layer 18 (Cross-Level Calibration) — R1-R6 rules
- Layer 19 (Migration Strategy) — GF-to-level paths
- Layer 14 (Frequency & Wording) — Cadence rules
- Layer 15 (Offers) — Offer strategy per level
- Layer 36 (Deliverability) — Domain warming, sending infrastructure
- Layer 37 (Klaviyo Setup) — Technical implementation
- Synthesis Document 01 — Definitive Customer Avatar
- Synthesis Document 06 — Offer Research
- Synthesis Document 11 — Brand Voice Reference
- Synthesis Document 12 — Klaviyo Implementation Guide

### Ecosystem Summary

```
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                    BRIGHTKIDCO — 25 FLOW SYSTEM OVERVIEW                              ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                       ║
║  ┌──────────── PHASE 1: LAUNCH (Months 1-2) ────────────┐                              ║
║  │  10 flows — 47 emails — MUST exist before scaling     │                              ║
║  │  Welcome (32) | Cart (3) | Checkout (2) | Browse (3)  │                              ║
║  │  Order Confirm (1) | Shipping (1) | Out Deliv (1)     │                              ║
║  │  Arrived+Welcome (1) | PP-Upsell (2) | PP-Level (1)   │                              ║
║  └────────────────────────────────────────────────────────┘                              ║
║                              │                                                        ║
║                              ▼                                                        ║
║  ┌──────────── PHASE 2: HIGH-VALUE (Months 3-4) ─────────┐                              ║
║  │  10 flows — 40 emails — data-dependent deployment      │                              ║
║  │  PP-Mary S. Story (1) | PP-Education D0-21 (4)        │                              ║
║  │  PP-Ext Upsell (3) | PP-Mid Check-In (3)              │                              ║
║  │  Replenish A/B/C (7) | Review Request (2)             │                              ║
║  │  Winback A (3×4=12) | Browse Abandon (3)              │                              ║
║  └────────────────────────────────────────────────────────┘                              ║
║                              │                                                        ║
║                              ▼                                                        ║
║  ┌──────────── PHASE 3: NICE-TO-HAVE (Months 5-6) ───────┐                              ║
║  │  5 flows — 27 emails — team-established deployment     │                              ║
║  │  PP-Ext Ed (5×4=20) | PP-Support At-Risk (4)          │                              ║
║  │  Winback B (3×4=12) | Sunset (2) | FAQ/Objection (6)  │                              ║
║  │  Referral (3)                                         │                              ║
║  └────────────────────────────────────────────────────────┘                              ║
║                                                                                       ║
║  TOTAL: 25 flows | ~114 unique emails                                                    ║
║  Level-specific: 77 emails (4× copy where needed)                                       ║
║  Cross-level: ~37 emails (1 copy, 6 calibration rules R1-R6)                          ║
║                                                                                       ║
╚══════════════════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md, Section 2.1; Layer 16 Flow Architecture)

### Audience Snapshot

| Level | Profile | % of Known | Hope/Realism | Decision Speed | Conversion | Primary Phase |
|-------|---------|:----------:|:------------:|:--------------:|:----------:|:-------------:|
| Level 1 (Sarah) | Verbal, 3-5 yrs, Pre-K driven | ~35% | 70/30 | 2-7 days | 15-25% (🏆 best) | Phase 2 |
| Level 2 (Lisa) | Mixed verbal, 5-7 yrs, BCBA context | ~40% (🏆 largest) | 40/60 | 7-21 days | 8-15% | Phase 3 |
| Level 3 (Maria) | Non-verbal, 6-10+ yrs, dignity-first | ~25% | 20/80 | 14-30 days | 4-7% (highest LTV) | Phase 4 |
| General Fallback | Cross-level, ~50% real volume | N/A | 50/50 | Variable | 7-10% | Mixed |

(Source: 01-customer-avatar.md, Sections 3.2-3.5)

### Document Structure

This document is organized into **16 sections** covering every dimension of the BrightKidCo email ecosystem. Sections 1-5 provide the framework and reference data. Sections 6-8 define every flow with full detail. Sections 9-16 cover cross-cutting concerns — suppression, migration, edge cases, tags, offers, deliverability, metrics, and appendices.

Each flow definition in Sections 6-8 follows a consistent template:
- **Property Table:** Purpose, Trigger, Exit Conditions, Email Count, Timing, Segmentation
- **Per-Email Purposes:** Individual email goals, levers, expected opens, CTAs
- **Tonality Rules:** Voice calibration, forbidden language, cross-level rules
- **Offer Rules:** Primary offers, escalation, level-specific restrictions
- **Migration Rules:** GF-to-level paths, level detection, conversion tracking
- **Flow Filters:** Klaviyo technical filters for flow entry
- **Klaviyo Architecture:** Flow diagram showing trigger → condition → email → exit

---

## 2. SYSTEM ARCHITECTURE OVERVIEW

### 2.1 Subscriber Lifecycle Stages

Every subscriber enters the system through one of five entry points and proceeds through a designed journey:

```
                            ENTRY POINTS
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
        ▼                       ▼                       ▼
  ┌────────────┐        ┌──────────────┐        ┌──────────────┐
  │ Pop-up     │        │ Checkout     │        │ Referral/    │
  │ Self-ID    │        │ Signup       │        │ Direct       │
  │ (80%+)    │        │ (~15%)      │        │ (~5%)        │
  └─────┬──────┘        └──────┬───────┘        └──────┬───────┘
        │                      │                        │
        └──────────┬───────────┴────────────┬────────────┘
                   │                        │
                   ▼                        ▼
        ┌───────────────────┐    ┌───────────────────┐
        │ Level Tag Present │    │ No Level Tag      │
        │ → Variant Welcome │    │ → GF Welcome      │
        └─────────┬─────────┘    └─────────┬─────────┘
                  │                        │
                  └────────────┬───────────┘
                               │
                               ▼
                  ┌───────────────────────┐
                  │   WELCOME FLOW        │
                  │   8 emails × 21 days  │
                  │   4 level variants    │
                  └───────────┬───────────┘
                              │
              ┌───────────────┴───────────────┐
              │                               │
        ┌─────▼──────┐                  ┌─────▼──────┐
        │ PURCHASED  │                  │ NO PURCHASE│
        └─────┬──────┘                  └─────┬──────┘
              │                               │
              ▼                               ▼
    ┌─────────────────┐              ┌─────────────────┐
    │ PP Flows Suite  │              │ Cart/Checkout   │
    │ 14 flows total  │              │ Browse Abandon  │
    │ Education/Up-   │              │ Recovery Flows  │
    │ sell/Replenish  │              │ (3 flows)       │
    └────────┬────────┘              └────────┬────────┘
             │                                │
             ▼                                ▼
    ┌─────────────────┐              ┌─────────────────┐
    │ Loyalty → VIP   │              │ Winback Path B  │
    │ Referral → Re-  │              │ FAQ/Objection   │
    │ view → Repeat   │              │ Sunset          │
    └─────────────────┘              └─────────────────┘
```
(Source: Layer 16 Flow Architecture, Section "Customer Lifecycle Stages")

### 2.2 Recovery Funnel Hierarchy (by Intent Level)

```
                  SITE ABANDONMENT (lowest intent)
                  No product viewed, bounced from site
                         │
                         ▼
                  BROWSE ABANDONMENT (medium intent)
                  Viewed product, no cart created
                         │
                         ▼
                  ABANDONED CART (high intent)
                  Added to cart, no checkout started
                         │
                         ▼
                  ABANDONED CHECKOUT (highest intent)
                  Started checkout process, didn't complete
                         │
                         ▼
                  PURCHASE COMPLETED → PP Flows
```
(Source: Layer 16, Section "Recovery Funnel Hierarchy")

### 2.3 Flow Category Definitions

| Category | Flows | Purpose | Segmentation |
|----------|-------|---------|:------------:|
| **Acquisition** | Welcome (4 variants) | Onboard, educate, convert | Level-specific |
| **Recovery** | Site Abandon, Browse Abandon, Cart Abandon, Checkout Abandon | Recover lost conversions | Cross-level always |
| **Transactional** | Order Confirm, Shipping, Out for Delivery, Arrived & Welcome | Fulfillment communication | Cross-level |
| **Post-Purchase Education** | PP-Direct Upsell, PP-Level Detection, PP-Mary S. Story, PP-Education D0-21, PP-Ext Ed, PP-Ext Upsell, PP-Mid Check-In | Educate, upsell, support | Cross-level initially → Level-specific |
| **Replenishment** | Replenish A (1-pair), Replenish B (3+3), Replenish C (5+5) | Reorder reminders | Cross-level |
| **Retention** | Review Request, Referral, Support At-Risk | Engage, leverage, prevent churn | Cross-level |
| **Reactivation** | Winback A (post-buyer), Winback B (never-bought) | Re-engage inactive | Level-specific |
| **Exit** | Sunset | List hygiene, suppression | Cross-level |
| **Deep Education** | FAQ/Objection Library | Overcome remaining objections | Level-specific |

(Source: Layer 16; GIULIANO-DEMANDS.md, Section 2)

### 2.4 Phase Deployment Rationale

**Phase 1 (Months 1-2) — Launch:**
These flows MUST exist before scaling any paid traffic. They cover the complete acquisition-to-first-purchase loop: welcome, recovery, transactional, and initial post-purchase. Without these, every new subscriber enters a dead zone after signup.

**Phase 2 (Months 3-4) — High-Value:**
These flows depend on Phase 1 data — purchase history, engagement signals, level tags. They generate the majority of repeat revenue through education, replenishment, and reactivation. Deploy after 500+ customers exist for statistical significance.

**Phase 3 (Months 5-6) — Nice-to-Have:**
These flows require established team processes — content creation (20 emails for PP-Ext Ed), support team readiness (At-Risk flow), and list size for statistical validity in winback and sunset. Deploy after Phase 2 is stable and generating data.

### 2.5 Complete Flow Inventory — All 25 Flows

```
┌──────┬─────────────────────────────────┬───────┬──────┬───────┬────────────────────────────┐
│  #   │ FLOW NAME                       │ PHASE │ SEG  │ EMAILS│ PRIMARY OBJECTIVE           │
├──────┼─────────────────────────────────┼───────┼──────┼───────┼────────────────────────────┤
│  01  │ Welcome Flow                    │ P1    │ LV   │ 32    │ Onboard, educate, convert  │
│  02  │ Cart Abandonment                │ P1    │ CL   │  3    │ Recover cart abandoners    │
│  03  │ Checkout Abandonment            │ P1    │ CL   │  2    │ Recover checkout abandoners│
│  04  │ Browse Abandonment              │ P2    │ CL   │  3    │ Re-engage product viewers  │
│  05  │ Order Confirmation              │ P1    │ CL   │  1    │ Confirm order + trust      │
│  06  │ Shipping Notification           │ P1    │ CL   │  1    │ Fulfillment update         │
│  07  │ Out for Delivery                │ P1    │ CL   │  1    │ Anticipation building      │
│  08  │ Arrived & Welcome               │ P1    │ CL   │  1    │ Welcome product in-home    │
│  09  │ PP-Direct Upsell                │ P1    │ CL   │  2    │ 1-pair → 3+3 bundle       │
│  10  │ PP-Level Detection              │ P1    │ CL   │  1    │ GF → level migration       │
│  11  │ PP-Mary S. Story                │ P2    │ CL   │  1    │ Founder story, brand trust │
│  12  │ PP-Education Day 0-21           │ P2    │ CL   │  4    │ Product usage education    │
│  13  │ PP-Extended Upsell              │ P2    │ LA   │  3    │ Cross-sell, bundle upgrade │
│  14  │ PP-Mid Check-In                 │ P2    │ CL   │  3    │ Support, progress check    │
│  15  │ PP-Extended Education           │ P3    │ LV   │ 20    │ Deep education per level   │
│  16  │ PP-Support At-Risk              │ P3    │ CL   │  4    │ Re-engage disengaged buyers│
│  17  │ Replenish A (1-pair buyers)     │ P2    │ CL   │  3    │ Reorder 1-pair→3+3        │
│  18  │ Replenish B (3+3 buyers)        │ P2    │ CL   │  2    │ Reorder 3+3 or upgrade    │
│  19  │ Replenish C (5+5 buyers)        │ P2    │ CL   │  2    │ Reorder 5+5 or accessories │
│  20  │ Review Request                  │ P2    │ CL   │  2    │ Collect social proof       │
│  21  │ Winback Path A (post-buyer)     │ P2    │ LV   │ 12    │ Re-engage lapsed buyers    │
│  22  │ Winback Path B (never-bought)   │ P3    │ LV   │ 12    │ Re-engage non-buyers       │
│  23  │ Sunset                          │ P3    │ CL   │  2    │ List hygiene, re-permission│
│  24  │ FAQ/Objection Library           │ P3    │ LS   │  6    │ Overcome objections        │
│  25  │ Referral Flow                   │ P3    │ CL   │  3    │ Viral growth, word-of-mouth│
├──────┴─────────────────────────────────┴───────┴──────┴───────┴────────────────────────────┤
│ LEGEND: LV = Level Variants (×4 copy) | CL = Cross-Level (1 copy) | LA = Level-Aware      │
│ LS = Level-Specific content blocks (per-level text blocks in shared emails)                │
│ PHASE 1: 47 emails | PHASE 2: 40 emails | PHASE 3: 27 emails | GRAND TOTAL: ~114 emails   │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

(Source: Layer 16 Complete Flow Reference Table; GIULIANO-DEMANDS.md, Sections 2.2-2.4)

---

## 3. FLOW CONNECTION MAP — COMPLETE SUBSCRIBER LIFECYCLE

```
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║                          COMPLETE SUBSCRIBER LIFECYCLE DIAGRAM                            ║
║                          (How subscribers move between flows)                              ║
╠══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                           ║
║  ┌──────────────────────── PHASE 1 ENTRY ──────────────────────┐                          ║
║  │  POP-UP (Self-ID) ──→ [Level Tag Applied] ──→──┐            │                          ║
║  │  CHECKOUT SIGNUP ──→ [No Tag]     ──→──┐        │           │                          ║
║  │  REFERRAL ──→ [No Tag]       ──→──┐    │        │           │                          ║
║  └─────────────────────────────────────────┴────┴────┘           │                          ║
║                                                    │            │                          ║
║                                                    ▼            ▼                          ║
║  ┌──────────────────────────────────────────────────────────────────────────┐               ║
║  │                  WELCOME FLOW (8 emails × 21 days)                        │               ║
║  │  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌─────────┐ │               ║
║  │  │  E1   │→│  E2   │→│  E3   │→│  E4   │→│  E5   │→│  E6   │→│ E7 → E8 │ │               ║
║  │  │  D0   │ │  D1   │ │  D3   │ │  D7   │ │  D10  │ │  D14  │ │D17 → D21│ │               ║
║  │  └───┬───┘ └───┬───┘ └───┬───┘ └───┬───┘ └───┬───┘ └───┬───┘ └────┬────┘ │               ║
║  │      │         │         │         │         │         │          │       │               ║
║  │      │   INTERRUPT: If cart/checkout initiated during Welcome,             │               ║
║  │      │   recovery flows take priority. Welcome resumes after recovery.     │               ║
║  └──────────────────────────────────────────────────────────────────────────┘               ║
║                              │                                                            ║
║              ┌───────────────┴───────────────┐                                            ║
║              ▼                               ▼                                            ║
║     ┌─────────────────┐            ┌─────────────────┐                                    ║
║     │ PURCHASED       │            │ NO PURCHASE      │                                    ║
║     │ → Enter PP      │            │ → Recovery       │                                    ║
║     │   Flow Cluster  │            │   Flow Cluster   │                                    ║
║     └────────┬────────┘            └────────┬────────┘                                    ║
║              │                              │                                              ║
║              ▼                              ▼                                              ║
║  ┌─────────────────────────┐    ┌──────────────────────┐                                   ║
║  │ ORDER CONFIRM (D0)      │    │ CART ABANDON (3)     │                                   ║
║  │ SHIPPING NOTIF (D0-2)   │    │ CHECKOUT ABAND (2)   │                                   ║
║  │ OUT FOR DELIVERY (D2-7) │    │ BROWSE ABANDON (3)   │                                   ║
║  │ ARRIVED & WELCOME (D7)  │    │                      │                                   ║
║  └──────────┬──────────────┘    └──────────┬───────────┘                                   ║
║             │                              │                                                ║
║             ▼                              ▼                                                ║
║  ┌─────────────────────────┐    ┌──────────────────────┐                                   ║
║  │ PP-DIRECT UPSELL (D1-3) │    │ RECOVERY SUCCESS?    │                                   ║
║  │ PP-LEVEL DETECT (D14)  │    │ ┌──YES──→ PP Flows  ──┤                                   ║
║  │ PP-MARY S. STORY (D3)  │    │ └──NO───→ Remains in  │                                   ║
║  └──────────┬──────────────┘    │           GF Welcome  │                                   ║
║             │                   └──────────────────────┘                                   ║
║             ▼                                                                            ║
║  ┌──────────────────────────┐                                                             ║
║  │ PP-EDUCATION D0-21 (4)   │                                                             ║
║  │ PP-EXTENDED UPSELL (3)   │                                                             ║
║  │ PP-MID CHECK-IN (3)      │                                                             ║
║  └──────────┬───────────────┘                                                             ║
║             │                                                                            ║
║             ▼                                                                            ║
║  ┌──────────────────────────┐                                                             ║
║  │ REPLENISH A/B/C (7)      │  ← Based on purchase bundle                                ║
║  │ REVIEW REQUEST (D30)     │                                                             ║
║  │ REFERRAL FLOW (D30+)     │                                                             ║
║  └──────────┬───────────────┘                                                             ║
║             │                                                                            ║
║     ┌───────┴────────┐                                                                   ║
║     ▼                 ▼                                                                   ║
║  ┌────────────┐  ┌────────────┐                                                          ║
║  │ ENGAGED    │  │ INACTIVE   │                                                          ║
║  │ → Continue │  │ 90d → Winback A  (Level-specific, 3×4=12)                             ║
║  │   Nurture  │  │ 60d → Winback B  (Never-bought, 3×4=12)                              ║
║  └────────────┘  │ 120d → Sunset (2)                                                     ║
║                  └───────────────────────────────────────────                             ║
║                                                                                           ║
║  PARALLEL PATHS:                                                                          ║
║  ──────────────                                                                           ║
║  • FAQ/Objection Library: triggers at Welcome end (no purchase, Phase 3)                  ║
║  • PP-Support At-Risk: triggers at 3-7 days no opens (post-purchase, Phase 3)             ║
║  • PP-Extended Education: triggers Day 22+ if level tag known (Phase 3, 5×4=20)          ║
║  • Migration paths (GF → Level): embed in Welcome E2-E4, PP-Level Detection D14          ║
║                                                                                           ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```
(Source: Layer 16, Complete Flow Reference Table; GIULIANO-DEMANDS.md Section 2.2)

### 3.1 Connection Rules

| Rule | Description | Applies To |
|------|-------------|------------|
| Welcome → Purchase → PP | Any purchase during Welcome exits Welcome, enters PP flow cluster | ALL Welcome variants |
| Welcome → No Purchase → Recovery | Welcome completion without purchase routes to Cart/Checkout/Browse recovery (if event exists) or FAQ/Objection (Phase 3) | ALL Welcome variants |
| Recovery → Purchase → PP | Successful recovery exits recovery flow, routes to Order Confirm → PP cluster | Cart, Checkout, Browse |
| Recovery → No Purchase → GF Welcome | Failed recovery returns subscriber to GF Welcome remainder (if no level tag) | GF only |
| PP → No Engagement → Winback | 90d post-purchase inactivity → Winback A (if purchased) or Winback B (never bought) | ALL levels, level-specific variants |
| Winback → No Engagement → Sunset | Winback completion without re-engagement → 120d inactivity → Sunset Flow | ALL levels |
| GF → PP-Level Detection → Level-specific | Day 14 PP-Level Detection mail migrates GF purchasers to level-specific flows | GF only (D14 post-purchase) |
| Cart → Interrupts Welcome | Cart Abandonment suppresses Welcome E3+ until cart resolved (E1-E2 remain delivered) | All levels |
| Sunrise → Permanent Suppression | Sunset completion = Suppressed = True. Exclude from ALL flows and campaigns for 6-12 months | ALL |
| Browse → Suppresses Welcome | Browse Abandonment pauses Welcome between E3-E6 if browse event detected | All levels |
| At-Risk → Overrides PP-Education | PP-Support At-Risk takes priority when engagement drops below threshold | PP buyers |
| Referral → Runs in Parallel | Referral flow runs alongside main lifecycle; never suppresses other flows | Post-purchase |
| Winback → Priority Over Welcome | If subscriber re-enters Welcome (e.g., new list entry) while in Winback, Winback retains priority | Winback segments |

(Source: GIULIANO-DEMANDS.md, Section 2.5 "Cross-Flow Suppression Rules")

### 3.2 Flow Transition Map — ALL 25 Flows

```
                          ┌──────────────────────┐
                          │  01 WELCOME (4 var.)  │
                          │  8 emails × 21 days   │
                          └──────┬───────────────┘
                                 │
                    ┌────────────┴────────────┐
                    ▼                         ▼
           ┌────────────────┐      ┌──────────────────┐
           │ PURCHASED      │      │ NO PURCHASE      │
           └────────┬───────┘      └────────┬─────────┘
                    │                       │
          ┌─────────┴──────────┐   ┌────────┴────────────┐
          ▼                    ▼   ▼                     ▼
   ┌──────────┐        ┌────────────┐            ┌──────────────┐
   │05 Order  │        │02 CART (3) │            │04 BROWSE (3) │
   │Confirm(1)│        │03 CHKOUT   │            │              │
   └────┬─────┘        │   (2)      │            └──────┬───────┘
        │              └─────┬──────┘                   │
        ▼                    │                          │
   ┌──────────┐              ├── PURCHASED? ────────────┤
   │06 Ship   │              │  YES → 05 Order Confirm  │
   │Notif (1) │              │  NO  → Return to Welcome │
   └────┬─────┘              └──────────────────────────┘
        │
        ▼
   ┌──────────┐
   │07 Out for│
   │Deliv (1) │
   └────┬─────┘
        │
        ▼
   ┌──────────┐
   │08 Arrived│
   │& Welcome │
   │   (1)    │
   └────┬─────┘
        │
        ├─────────────────────────────────────────────────────────────┐
        ▼                                                             │
   ┌────────────┐                                              ┌─────┴──────┐
   │09 PP-     │                                              │10 PP-Level │
   │Upsell (2) │                                              │Detect (1)  │
   └─────┬─────┘                                              │(GF only)   │
         │                                                    └──────┬─────┘
         ▼                                                           │
   ┌────────────┐                                              ┌─────┴──────┐
   │11 Mary S.  │                                              │Level Tag    │
   │Story (1)   │                                              │Applied?     │
   └─────┬──────┘                                              │YES→Lvl flows│
         │                                                     │NO→Stay GF   │
         ▼                                                     └────────────┘
   ┌─────────────────┐
   │12 PP-Educ D0-21 │
   │      (4)        │
   └─────┬───────────┘
         │
         ├───────────────────────────────────────────┐
         ▼                                           ▼
   ┌──────────────┐                          ┌──────────────┐
   │13 PP-Ext     │                          │14 PP-Mid     │
   │Upsell (3)    │                          │Check-In (3)   │
   └──────┬───────┘                          └──────┬───────┘
          │                                        │
          └────────────────┬───────────────────────┘
                           ▼
               ┌──────────────────────┐
               │15 PP-Ext Ed (20) P3  │ ← Only if level tag known
               │16 At-Risk (4) P3     │
               └──────────────────────┘
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
   ┌──────────┐    ┌──────────┐    ┌──────────────┐
   │17 Repl A  │    │18 Repl B │    │19 Repl C    │
   │(3) D14   │    │(2) D75   │    │(2) D150     │
   │(1-pair)  │    │(3+3)     │    │(5+5)        │
   └──────────┘    └──────────┘    └──────┬───────┘
                                          │
                     ┌────────────────────┤
                     ▼                    ▼
              ┌──────────────┐    ┌──────────────┐
              │20 Review Req │    │25 Referral   │
              │(2) Day 30+  │    │(3) Day 30+   │
              └──────────────┘    └──────┬───────┘
                                          │
                    ┌─────────────────────┴──────────────┐
                    ▼                                    ▼
           ┌──────────────────┐                ┌──────────────────┐
           │ 90d Inactive     │                │ 60d Inactive     │
           │→ 21 Winback A    │                │→ 22 Winback B    │
           │  (3×4=12) LV     │                │  (3×4=12) LV     │
           └────────┬─────────┘                └────────┬─────────┘
                    │                                   │
                    └────────────────┬──────────────────┘
                                     ▼
                            ┌──────────────────┐
                            │ 120d + No Re-    │
                            │ engagement        │
                            │→ 23 Sunset (2)    │
                            └──────────────────┘

   PARALLEL NON-LINEAR FLOWS:
   ─────────────────────────
   24 FAQ/Objection Library (6): Triggers after Welcome if no purchase, Phase 3
   16 PP-Support At-Risk (4): Triggers during PP-Education if engagement drops
```

### 3.3 Timing Architecture — Full 6-Month Timeline

```
MONTH 1                          MONTH 2                          MONTH 3
┌───────────────────────────────┐┌───────────────────────────────┐┌───────────────────────────────┐
│ WEEK 1-2: POPUP LAUNCH        ││ WEEK 5-6: REFINEMENT          ││ WEEK 9-10: PHASE 2 DEPLOY     │
│ Welcome Flow (all 4 vars)     ││ Cart + Checkout tweaks        ││ PP-Education D0-21            │
│ Cart Abandonment              ││ Shipping/Out for Deliv LIVE   ││ PP-Mid Check-In               │
│ Checkout Abandonment          ││ PP-Upsell LIVE                ││ PP-Mary S. Story              │
│ Order Confirmation            ││ PP-Level Detection LIVE       ││ PP-Extended Upsell            │
│                               ││                               ││ Browse Abandonment            │
│ WEEK 3-4: TRANSACTIONAL       ││ WEEK 7-8: DATA COLLECTION     ││ Replenish A/B/C               │
│ Shipping Notification         ││ Collect level data + tags     ││                               │
│ Out for Delivery              ││ 500+ customers baseline       ││ WEEK 11-12: RETENTION         │
│ Arrived & Welcome             ││ Begin migration tracking      ││ Review Request                │
│ PP-Upsell build               ││                               ││ Winback Path A build/test     │
│ PP-Level Detection build      ││                               ││                               │
└───────────────────────────────┘└───────────────────────────────┘└───────────────────────────────┘

MONTH 4                          MONTH 5                          MONTH 6
┌───────────────────────────────┐┌───────────────────────────────┐┌───────────────────────────────┐
│ WEEK 13-14: OPTIMIZATION      ││ WEEK 17-18: PHASE 3 DEPLOY    ││ WEEK 21-22: REFINEMENT        │
│ A/B test Welcome variants     ││ PP-Extended Ed (20 emails)    ││ A/B test Winback variants     │
│ Optimize cart recovery        ││ PP-Support At-Risk            ││ Sunset optimization           │
│ Begin Winback A sends         ││ Winback Path B (never-bought) ││ Referral optimization         │
│                               ││                               ││                               │
│ WEEK 15-16: SCALE             ││ WEEK 19-20: CROSS-FLOW        ││ WEEK 23-24: FULL STACK        │
│ Level-specific data mature    ││ FAQ/Objection Library         ││ All 25 flows live             │
| Ext Ed content production     ││ Sunset Flow                   ││ Dashboard established         │
│ Referral Flow build           ││ Referral Flow live            ││ Optimization cadence set      │
└───────────────────────────────┘└───────────────────────────────┘└───────────────────────────────┘
```

(Source: GIULIANO-DEMANDS.md, Section 2.3 "Deployment Timeline")

---

## 4. AVATAR SEGMENTATION & TONALITY MATRIX

### 4.1 Level Profile Comparison

```
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║                         FOUR AVATAR LEVELS — COMPLETE COMPARISON                          ║
╠══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                           ║
║  DIMENSION           │ LEVEL 1 (Sarah) │ LEVEL 2 (Lisa)  │ LEVEL 3 (Maria) │ GF           ║
║ ─────────────────────┼────────────────┼────────────────┼────────────────┼────────────── ║
║  Audience %          │ ~35%           │ ~40% 🏆 LARGEST │ ~25%           │ ~50% (overlap)║
║  Child Age           │ 3-5 years      │ 5-7 years       │ 6-10+ years    │ Variable      ║
║  Verbal Ability      │ Verbal         │ Mixed verbal    │ Non-verbal     │ Unknown       ║
║  Support Needs       │ Low            │ Moderate        │ High           │ Unknown       ║
║  Hope/Realism        │ 70/30          │ 40/60           │ 20/80          │ 50/50         ║
║  Decision Speed      │ 2-7 days       │ 7-21 days       │ 14-30+ days    │ Variable      ║
║  Conversion Rate     │ 15-25% (🏆)   │ 8-15%           │ 4-7%           │ 7-10%         ║
║  LTV After Purchase  │ Medium         │ Medium-High     │ 🌟 HIGHEST     │ Medium        ║
║  Urgency Allowed     │ YES (Pre-K)    │ Very little     │ NEVER          │ Medium        ║
║  Primary Dimension   │ Deadline/      │ Overwhelm       │ Overwhelm/     │ Social/       ║
║                      │ Social Pressure │                 │ Dignity        │ Overwhelm     ║
║  Dominant Phase      │ Phase 2        │ Phase 3         │ Phase 4        │ Mixed         ║
║  BCBA Loyalty        │ Low            │ HIGH (gatekeeper)│ Medium        │ Low           ║
║  Medicaid Usage      │ 10-15%         │ ~25%            │ ~40%           │ Variable      ║
║  Dangerous Word      │ "Easy"         │ "Quick"         │ "Fix"/"Cure"  │ "Simple"      ║
║  Failed Methods      │ 10-20          │ 25-40+          │ 30-50+         │ Variable      ║
║  Top Objection       │ Pre-K deadline │ "Tried every-  │ "Get hopes up  │ "Nothing      ║
║                      │ panic          │  thing"          │  again?"       │ works"        ║
║  Preferred Offer     │ 3+3 Bundle     │ 3+3 Bundle      │ 1 Pair         │ Mixed         ║
║                      │ $79.99         │ $79.99          │ $34.99         │               ║
║  Visual Palette      │ Bright green   │ Muted greens    │ Earth tones    │ Mixed         ║
║                      │ Pre-K imagery  │ Science boxes   │ Soft CTAs      │ Universal     ║
║  BCBA Familiarity    │ Low            │ VERY HIGH 🏆    │ High           │ Variable      ║
║  Partner Conflict    │ Blame          │ Sabotage        │ Abandonment    │ Variable      ║
║                      │ "Why can't you?"│ Hands pull-ups │ "He'll never"  │               ║
║  Key Emotional       │ Calendar/      │ Tried everything│ Adult diaper   │ Universal     ║
║  Trigger             │ Deadline       │ + still failing │ transition     │ pain          ║
║                      │ countdown      │                  │                │               ║
║                                                                                           ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```
(Source: 01-customer-avatar.md, Sections 3.2-3.5; MASTER-DIAGNOSIS-COMPENDIUM.md, Section 1.3)

### 4.2 Tonality Calibration — Stage × Level Matrix (24 Cells)

Every subscriber has both a **Level** (1/2/3/GF) and a **Flow Stage** (Pre-Purchase, Conversion, Transactional, PP Early, PP Mid, Lifecycle). The tonality must match both dimensions:

```
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║                     TONALITY MATRIX — HOPE/REALISM RATIO BY STAGE × LEVEL                 ║
╠══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                           ║
║  FLOW STAGE         │ L1       │ L2       │ L3       │ GF       │ APPLIES TO               ║
║ ─────────────────────┼─────────┼─────────┼─────────┼─────────┼────────────────────────── ║
║  Pre-Purchase       │ 70/30   │ 40/60   │ 20/80   │ 50/50   │ Welcome E1-E4, Browse, Cart ║
║  Conversion         │ 60/40   │ 35/65   │ 15/85   │ 45/55   │ Welcome E5-E7, Checkout    ║
║  Transactional      │ 50/50   │ 50/50   │ 50/50   │ 50/50   │ Order Confirm, Shipping    ║
║  PP Early           │ 65/35   │ 40/60   │ 25/75   │ 50/50   │ Arrived, PP-Direct Upsell  ║
║  PP Mid             │ 50/50   │ 35/65   │ 15/85   │ 40/60   │ PP-Education, Replenishment║
║  Lifecycle          │ 55/45   │ 35/65   │ 20/80   │ 45/55   │ Winback, FAQ, Referral     ║
║                                                                                           ║
║  CRITICAL: Mismatched frequency kills. Calm tone for Deadline Parent = ❌.                 ║
║  Urgency for Overwhelmed Mom = ❌. Every email must match the subscriber's emotional state.║
║                                                                                           ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```
(Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 3.2 "Stage × Level Tonality Matrix")

### 4.3 Per-Level Tone Profiles

| Level | Science Density | Empathy Intensity | CTA Aggressiveness | Sign-Off Style | Voice Anchor |
|-------|:--------------:|:-----------------:|:------------------:|:--------------:|:------------:|
| L1 | Medium-Low | Medium | Medium | "Talk soon," | "He gets it, but he doesn't get it" |
| L2 | HIGH | HIGH | LOW | "With understanding," | BCBA complement, mechanism specificity |
| L3 | Medium-High | VERY HIGH | VERY LOW (Viagra) | "With care," | Dignity-first, "Whatever progress means" |
| GF | Medium | Medium | Medium | Mixed by position | "Whether...Or...If..." pattern |

(Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 3; GIULIANO-DEMANDS.md, Section 3)

### 4.4 Cross-Level Calibration Rules (R1-R6)

Every cross-level email MUST satisfy ALL 6 rules:

```
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║                  6 CROSS-LEVEL CALIBRATION RULES — NON-NEGOTIABLE FOR CROSS-LEVEL MAILS    ║
╠══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                           ║
║  R1 ── SYMPTOM OVER LABEL                                                                ║
║         ❌ "Level 2" or "Level 3."                                                        ║
║         ✅ "If your child doesn't feel when they need to go..."                          ║
║                                                                                           ║
║  R2 ── 3-5 RECOGNITION ANCHORS PER MAIL                                                  ║
║         L1 anchor: "Sits 20 minutes, nothing happens"                                    ║
║         L2 anchor: "Pees immediately when pull-up comes off"                             ║
║         L3 anchor: "Doesn't react to wet diaper at all"                                  ║
║         → Mom reads list, finds 1-2 that match HER child                                ║
║                                                                                           ║
║  R3 ── AGE RANGES OVER FIXED AGES                                                        ║
║         ❌ "For 5-year-olds..."                                                            ║
║         ✅ "For kids 3 to 10+..."                                                         ║
║                                                                                           ║
║  R4 ── VERBAL / NON-VERBAL INCLUSIVITY                                                   ║
║         Verbal: "saying 'wet'"                                                            ║
║         Non-verbal: "showing you with a gesture"                                          ║
║                                                                                           ║
║  R5 ── TIMELINE FLEXIBILITY                                                              ║
║         ❌ "In 30 days your child will..."                                                   ║
║         ✅ "Some kids 2 weeks. Others 8. Both normal."                                    ║
║                                                                                           ║
║  R6 ── LOW-BAR SUCCESS METRICS                                                           ║
║         "Look at the wet spot for the first time"                                         ║
║         "Pull at their pants in awareness"                                                ║
║         "Walk toward the bathroom (even after)"                                            ║
║         "Stay dry 2 hours instead of 30 minutes"                                          ║
║                                                                                           ║
║  ⚠ VIOLATION COST: Missing any rule destroys trust with that segment.                    ║
║  R1 violation is WORST — mom feels labeled and disengages.                                ║
║                                                                                           ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md, Section 4 "The 6 Cross-Level Calibration Rules"; Layer 18 Cross-Level Calibration)

### 4.5 Flows Requiring R1-R6 (Cross-Level) vs Level-Specific

| Cross-Level (R1-R6 Mandatory) | Level-Specific (Per Level Variant) |
|---------------------------|-------------------------------|
| Cart Abandonment (3) | Welcome Flow L1 (8 emails) |
| Checkout Abandonment (2) | Welcome Flow L2 (8 emails) |
| Browse Abandonment (3) | Welcome Flow L3 (8 emails) |
| Order Confirmation (1) | Welcome Flow GF (8 emails) |
| Shipping Notification (1) | PP-Extended Education L1 (5) |
| Out for Delivery (1) | PP-Extended Education L2 (5) |
| Arrived & Welcome (1) | PP-Extended Education L3 (5) |
| PP-Direct Upsell (2) | PP-Extended Education GF (5) |
| PP-Level Detection (1) | Winback Path A L1 (3) |
| PP-Mary S. Story (1) | Winback Path A L2 (3) |
| PP-Education Day 0-21 (4) | Winback Path A L3 (3) |
| PP-Extended Upsell (3) | Winback Path A GF (3) |
| PP-Mid Check-In (3) | Winback Path B L1 (3) |
| PP-Support At-Risk (4) | Winback Path B L2 (3) |
| Replenishment A (3) | Winback Path B L3 (3) |
| Replenishment B (2) | Winback Path B GF (3) |
| Replenishment C (2) | FAQ/Objection Library (6, level-specific content blocks) |
| Review Request (2) | |
| Sunset (2) | |
| Referral (3) | |

**Total Cross-Level: ~37 emails | Total Level-Specific: 77 emails (4× copy)**

(Source: GIULIANO-DEMANDS.md, Section 2.2; Layer 16, Section "Which Flows Are Level-Segmented vs Cross-Level")

---

## 5. FLOW-BY-AVATAR-LEVEL MATRIX

### 5.1 Complete Flow × Level × Email Count

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                      FLOW × AVATAR × EMAIL COUNT — COMPLETE HEATMAP                                   ║
╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                                       ║
║  #  FLOW NAME            │ PHASE │ SEG   │ L1   │ L2   │ L3   │ GF   │ TOTAL  │ PRIMARY CONV.        ║
║ ─────────────────────────┼───────┼───────┼──────┼──────┼──────┼──────┼────────┼───────────────────── ║
║  01 Welcome Flow         │ P1    │ LV    │ 8    │ 8    │ 8    │ 8    │ 32     │ 15-25% (L1×P2) 🏆    ║
║  02 Cart Abandonment     │ P1    │ CL    │ -    │ -    │ -    │ -    │ 3      │ 10-15% (L1)           ║
║  03 Checkout Abandonment │ P1    │ CL    │ -    │ -    │ -    │ -    │ 2      │ 10-20% (L1)           ║
║  04 Browse Abandonment   │ P2    │ CL    │ -    │ -    │ -    │ -    │ 3      │ 5-8% (L1)             ║
║  05 Order Confirmation   │ P1    │ CL    │ -    │ -    │ -    │ -    │ 1      │ N/A (transactional)   ║
║  06 Shipping Notification│ P1    │ CL    │ -    │ -    │ -    │ -    │ 1      │ N/A (transactional)   ║
║  07 Out for Delivery     │ P1    │ CL    │ -    │ -    │ -    │ -    │ 1      │ N/A (optional)        ║
║  08 Arrived & Welcome    │ P1    │ CL    │ -    │ -    │ -    │ -    │ 1      │ N/A (anticipation)    ║
║  09 PP-Direct Upsell     │ P1    │ CL    │ -    │ -    │ -    │ -    │ 2      │ 2-5% (all)            ║
║  10 PP-Level Detection   │ P1    │ CL    │ -    │ -    │ -    │ 1    │ 1      │ 40-50% migration      ║
║  11 PP-Mary S. Story     │ P2    │ CL    │ -    │ -    │ -    │ -    │ 1      │ 2-4% (brand build)    ║
║  12 PP-Education D0-21   │ P2    │ CL    │ -    │ -    │ -    │ -    │ 4      │ 2-5% (upsell)         ║
║  13 PP-Extended Upsell   │ P2    │ LA    │ -    │ -    │ -    │ -    │ 3      │ 5-10% (L2 best)       ║
║  14 PP-Mid Check-In      │ P2    │ CL    │ -    │ -    │ -    │ -    │ 3      │ 3-5% (retention)      ║
║  15 PP-Extended Ed       │ P3    │ LV    │ 5    │ 5    │ 5    │ 5    │ 20     │ 3-10% (L1 best)       ║
║  16 PP-Support At-Risk   │ P3    │ CL    │ -    │ -    │ -    │ -    │ 4      │ 2-4% (re-engagement)  ║
║  17 Replenish A (1-pair) │ P2    │ CL    │ -    │ -    │ -    │ -    │ 3      │ 5-10%                 ║
║  18 Replenish B (3+3)    │ P2    │ CL    │ -    │ -    │ -    │ -    │ 2      │ 4-8%                  ║
║  19 Replenish C (5+5)    │ P2    │ CL    │ -    │ -    │ -    │ -    │ 2      │ 3-6%                  ║
║  20 Review Request       │ P2    │ CL    │ -    │ -    │ -    │ -    │ 2      │ 1-3% (engagement)     ║
║  21 Winback Path A       │ P2    │ LV    │ 3    │ 3    │ 3    │ 3    │ 12     │ 2-5% (L3 best)        ║
║  22 Winback Path B       │ P3    │ LV    │ 3    │ 3    │ 3    │ 3    │ 12     │ 2-4% (L2 best)        ║
║  23 Sunset               │ P3    │ CL    │ -    │ -    │ -    │ -    │ 2      │ <1% (list hygiene)    ║
║  24 FAQ/Objection Lib    │ P3    │ LS    │ 6*   │ 6*   │ 6*   │ 6*   │ 6*     │ 4-8% (L2 best)        ║
║  25 Referral Flow        │ P3    │ CL    │ -    │ -    │ -    │ -    │ 3      │ 2-4% (growth)         ║
║ ─────────────────────────┴───────┴───────┴──────┴──────┴──────┴──────┴────────┴───────────────────── ║
║                                                                                                       ║
║  LEGEND: LV = Level Variants (×4 copy) | CL = Cross-Level (1 copy) | LA = Level-Aware (dynamic)      ║
║  LS = Level-Specific content blocks (6 emails with per-level text blocks, NOT 4× full variants)      ║
║  *FAQ = 6 cross-level emails with per-level objection-specific content blocks                         ║
║                                                                                                       ║
║  TOTALS:                                                                                              ║
║  Level-Variant Emails:     77  (Welcome 32 + PP-Ext Ed 20 + Winback A 12 + Winback B 12 + Detect 1)   ║
║  Cross-Level Emails:       37  (All CL flows)                                                         ║
║  GRAND TOTAL:              ~114 unique email copy units                                                ║
║                                                                                                       ║
║  HIGHEST REVENUE CELLS:                                                                               ║
║  🏆 L1 × Phase 2 → Welcome (15-25%) — Revenue rank #1                                                ║
║  🏆 L2 × Phase 3 → Welcome + FAQ (8-15%) — Volume rank #1                                            ║
║  🏆 L1 × Phase 3 → Welcome + Cart (10-18%) — Speed rank #1                                          ║
║                                                                                                       ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝
```
(Source: Layer 16 Complete Flow Reference Table; GIULIANO-DEMANDS.md, Sections 2.2-2.4; Layer 8, Section 5)

### 5.2 Conversion Probability — Flow × Level

| Flow | L1 Best Cell | L2 Volume Cell | L3 Long Game | GF Mixed | Weighted Average |
|:----:|:----------:|:--------------:|:------------:|:--------:|:----------------:|
| Welcome Flow | **15-25%** 🏆 | 8-15% | 4-8% | 5-10% | ~10% |
| Cart Recovery | 10-15% | 5-10% | 3-5% | 5-10% | ~7% |
| Checkout Abandon | 10-20% | 5-10% | 3-5% | 5-10% | ~8% |
| Browse Abandon | 5-8% | 3-5% | — | 3-5% | ~4% |
| FAQ/Objection | — | **4-8%** 🏆 | 2-4% | 2-3% | ~4% |
| PP-Ext Education | 5-10% | 4-8% | 3-5% | 3-6% | ~5% |
| Winback A (E1) | 2-3% | 2-4% | 3-5% 🏆 | 2-3% | ~3% |
| PP-Level Detection | N/A | N/A | N/A | **40-50% migration** | ~45% migration |

(Source: Layer 8, Section 5.3 "Conversion Probability by Flow × Segment")

### 5.3 Revenue Priority Ranking

```
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║                          REVENUE PRIORITY RANKING — TOP 10 COMBINATIONS                    ║
╠══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                           ║
║  RANK │ SEGMENT COMBINATION                │ CONV.   │ AUDIENCE │ REVENUE IMPACT          ║
║ ──────┼────────────────────────────────────┼─────────┼──────────┼──────────────────────── ║
║   1   │ L1 × Phase 2 (Deadline Pressure)   │ 15-25%  │ ~17.5%   │ ★★★ HIGHEST             ║
║       │ Welcome E2 "Holy shit that explains"│         │          │                         ║
║ ──────┼────────────────────────────────────┼─────────┼──────────┼──────────────────────── ║
║   2   │ L2 × Phase 3 (Method Cycling)      │ 8-15%   │ ~22%     │ ★★★ HIGH                ║
║       │ Welcome + FAQ/Objection            │         │          │                         ║
║ ──────┼────────────────────────────────────┼─────────┼──────────┼──────────────────────── ║
║   3   │ L1 × Phase 3                       │ 10-18%  │ ~10.5%   │ ★★★ HIGH                ║
║       │ Welcome + Cart Recovery            │         │          │                         ║
║ ──────┼────────────────────────────────────┼─────────┼──────────┼──────────────────────── ║
║   4   │ GF × C (Sensory-Difference)        │ 8-15%   │ ~10%     │ ★★ HIGH                 ║
║       │ Welcome + Browse                   │         │          │                         ║
║ ──────┼────────────────────────────────────┼─────────┼──────────┼──────────────────────── ║
║   5   │ L2 × Phase 2 (Early L2)            │ 10-15%  │ ~10%     │ ★★ HIGH                 ║
║       │ Welcome (less skeptical)           │         │          │                         ║
║ ──────┼────────────────────────────────────┼─────────┼──────────┼──────────────────────── ║
║   6   │ L1-2 × Phase 2 (Social Pressure)   │ 10-15%  │ ~28%     │ ★★ HIGH                 ║
║       │ Welcome E2-E3                      │         │          │                         ║
║ ──────┼────────────────────────────────────┼─────────┼──────────┼──────────────────────── ║
║   7   │ L3 × Phase 4B (Last Push)          │ 6-10%   │ ~8%      │ ★ Medium                ║
║       │ Winback A                          │         │          │                         ║
║ ──────┼────────────────────────────────────┼─────────┼──────────┼──────────────────────── ║
║   8   │ GF × D (Non-Selectors) → Migration │ 5-10%   │ ~10%     │ ★ Medium                ║
║       │ PP-Level Detection → Level Flows   │         │          │                         ║
║ ──────┼────────────────────────────────────┼─────────┼──────────┼──────────────────────── ║
║   9   │ L2 × Phase 4 (Resignation)         │ 6-10%   │ ~6%      │ ★ Medium                ║
║       │ Winback A                          │         │          │                         ║
║ ──────┼────────────────────────────────────┼─────────┼──────────┼──────────────────────── ║
║  10   │ L3 × Phase 3 (Still Cycling)       │ 5-10%   │ ~8%      │ ★ Medium                ║
║       │ Welcome (slow cadence)             │         │          │                         ║
║                                                                                           ║
║  INVESTMENT RULE: 70%+ of content investment targets Phase 2 and Phase 3                   ║
║  (they represent ~70% of audience and highest conversion potential).                       ║
║                                                                                           ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```
(Source: Layer 8, Section 5.4 "Revenue Priority Ranking"; MASTER-DIAGNOSIS-COMPENDIUM.md, Section 1.2)

---

## 6. PHASE 1: LAUNCH FLOWS (Months 1-2)

> **These flows MUST exist before BrightKidCo email marketing scales.**
> 10 flows, 47 emails total. Covers the complete acquisition-to-first-purchase loop.

---

### FLOW 01: Welcome Flow — THE FRAME (Level-Specific, 4 Variants)

**The most important flow in the entire system.** Sets the frame for ALL level-variant flows. All subscribers enter here. Flow architecture per level:

```
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║                 WELCOME FLOW — 8-EMAIL BUYER JOURNEY (× 4 LEVEL VARIANT COPIES)           ║
╠══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                           ║
║  Day 0        Day 1        Day 3        Day 7        Day 10       Day 14       Day 17-21 ║
║  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────────┐ ║
║  │  E1    │→│  E2    │→│  E3    │→│  E4    │→│  E5    │→│  E6    │→│  E7 → E8    │ ║
║  │ Code   │  │ Mech   │  │ Decis  │  │Reframe │  │ Deep   │  │ Social │  │ Last Call  │ ║
║  │ Deliv  │  │anism   │  │ion +   │  │"You    │  │ Educ   │  │ Proof  │  │ + Farewell │ ║
║  └───┬────┘  └───┬────┘  └───┬────┘  └───┬────┘  └───┬────┘  └───┬────┘  └──────┬─────┘ ║
║      │           │           │           │           │           │              │        ║
║      ▼           ▼           ▼           ▼           ▼           ▼              ▼        ║
║  Hopeful    "Holy shit  Decision   Wisdom     Deep       Objection    Final              ║
║  but        that        time:      audience   mechan     handling     conversion         ║
║  critical   explains    60d gtee + "You       ism +      + late       push +             ║
║             it"         perm not   didn't     science     pushback     door stays         ║
║                         to buy     fail"                  resolution   open              ║
║                                                                                           ║
║  CONVERSION LEVERS PER EMAIL:                                                             ║
║  ┌────┬──────────────────────────┬───────────────────┬──────────────────┐                ║
║  │ E1 │ L1: Sensory Gap          │ L2: Mech Specific │ L3: Lena Peer    │               ║
║  │ E2 │ L1: Failed Methods Refr  │ L2: Pull-Ups Harm  │ L3: Dignity-First│               ║
║  │ E3 │ L1: Pre-K Urgency        │ L2: 60-Day Guar. │ L3: 60-Day Guar. │               ║
║  │ E4 │ L1: "You didn't fail"    │ L2: BCBA Acknowl  │ L3: 49% SPARK   │               ║
║  │ E5 │ L1: Pre-K Countdown      │ L2: Sci. Deep Dive│ L3: Small Signs │               ║
║  │ E6 │ L1: Social Proof         │ L2: Testimonials  │ L3: Lena Story  │               ║
║  │ E7 │ L1: Last Call            │ L2: Perm Not Buy  │ L3: Door Open   │               ║
║  │ E8 │ L1: Door Stays Open      │ L2: FAQ Path      │ L3: Migration   │               ║
║  └────┴──────────────────────────┴───────────────────┴──────────────────┘               ║
║                                                                                           ║
║  LENA SIGN-OFF PROGRESSION:                                                               ║
║  E1-E2: "Talk soon," → E3-E5: "With understanding," → E6+: "With care,"                 ║
║                                                                                           ║
╚══════════════════════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md, Section 3 "Welcome Flow — The Frame"; Layer 16, Flow 01)

#### Welcome Flow — Flow Definition

| Property | Value |
|----------|-------|
| **Purpose** | Onboard new subscriber, educate on mechanism (interoception gap), build trust via Lena voice, convert to first purchase |
| **Trigger** | Pop-up form submit + `avatar_level` tag applied |
| **Exit Conditions** | Made a purchase, Unsubscribed, Entered higher-priority flow (Cart Abandonment, Winback, Sunset) |
| **Email Count** | **8 per level × 4 levels = 32 total unique emails** |
| **Timing** | E1: Day 0 (immediate) → E2: Day 1 → E3: Day 3 → E4: Day 7 → E5: Day 10 → E6: Day 14 → E7: Day 17 → E8: Day 21 |
| **L3 Cadence Adjustment** | E1→E2 gap 2 days instead of 1 (slower cadence, ZERO urgency in any email) |

**Per-Email Purposes:**

| Email | Day | Purpose | Primary Lever | Expected Open | CTA |
|-------|-----|---------|:------------:|:-------------:|-----|
| E1 | 0 | Welcome + code delivery (WELCOME10). Establish Lena voice. Mirror her reality. | Validation + Mechanism | 60-70% | Shop with code |
| E2 | 1 | Mechanism explanation — "It's not the method, it's a sensory gap." The "Holy shit, that explains it" moment. | Sensory Gap Reframe | 50-60% | Learn about product |
| E3 | 3 | Decision time: 60-day guarantee + permission-not-to-buy. Remove all risk. | 60-Day Guarantee | 45-55% | Try with guarantee |
| E4 | 7 | "You didn't fail. You solved the wrong problem." Education reframe. | Failure Acknowledgment | 40-50% | Continue learning |
| E5 | 10 | Deep mechanism education. For L1: Pre-K urgency. L2: Science deep-dive. L3: Dignity-first patience. | Level-specific | 35-45% | Purchase |
| E6 | 14 | Social proof + peer stories. Level-specific testimonials with Three-Family Pattern for GF. | Peer Trust | 30-40% | See success stories |
| E7 | 17 | Last call (L1 only) or deeper mechanism (L2/L3). Permission-not-to-buy energy. | Permission | 25-35% | Final opportunity |
| E8 | 21 | Gentle close. Door stays open. Migration anchors (GF → level story links). | Door-Open | 20-30% | Stay connected |

**Segmentation Rules:**
- `avatar_level1` → Welcome L1: 70/30 hope, Pre-K urgency, medium science
- `avatar_level2` → Welcome L2: 40/60 hope, high science, BCBA context, 6-element formula
- `avatar_level3` → Welcome L3: 20/80 hope, dignity-first, NO urgency, Viagra CTA
- `avatar_general` → Welcome GF: 50/50 hope, R1-R6 calibration, migration anchors

**Tonality Rules:**
- Lena voice throughout (peer parent, NOT founder, NOT marketer)
- Formula per email: Observation → Validation → Mechanism → Permission / Soft Action
- RS Integration Quota: 30-50% verbatim parent language, 30-50% Lena voice, 10-20% mechanism/brand
- Minimum 2-4 verbatim parent quotes per email
- 5 Conversion Levers: Layer progressively (Tier 1 → Tier 2 → Tier 4 → Tier 5)
- Trust Pyramid order: Mechanism → Peer Voice → Failure Ack → Timelines → Guarantee
- Sign-Off Progression: E1-E2: "Talk soon," → E3-E5: "With understanding," → E6+: "With care,"

**Offer Rules:**
- WELCOME10 code active first 7 days after signup (expires at E4)
- Default offer: 3+3 Bundle ($79.99) shown in E3-E5
- L3 primary offer: 1 Pair ($34.99) — NEVER math reframes, NEVER urgency
- Offer escalation: E1-E2: No offer (education only) → E3: First offer presentation with 60-day guarantee → E5-E7: Primary offer push
- Cross-level offer in GF: 3+3 Bundle with cross-level language (R1-R6 satisfied)
- NEVER discount to L3 — can feel like "we know you can't afford full price"

**Migration Rules (GF only):**
- E2-E4: Embed migration anchors (story links) for click-based level identification
- 3-4 anchors per mail targeting L1, L2, L3 scenarios
- Never "Click here if you're Level X" — organic story recommendation
- Mom must think "That's my kid!" for migration to work
- Expected click migration rate: 15-25% of GF subscribers
- Non-migrators stay GF permanently (valid outcome for Groups B and C)
- Group B (Diagnosis-Rejecters) and Group C (Sensory-Difference) are PERMANENT GF residents

**Klaviyo Architecture:**
```
[Trigger: Form Submit + avatar_level1/2/3/general]
        │
        ▼
  ┌──────────────┐
  │  Welcome E1   │ ← Immediate after signup
  │  Welcome +    │
  │  Code Display │
  └──────┬───────┘
         │
         ▼
  ┌──────────────────────┐
  │  Condition: Has       │
  │  Placed Order?        │ ← Check at each email step
  └──────┬───────┬───────┘
        YES      NO
         │        │
         ▼        ▼
      (Exit)   ┌──────────────┐
               │  Welcome E2   │ ← Day 1
               │  Mechanism    │
               └──────┬───────┘
                      │
         (Repeat condition check before each email)
```

**Flow Filters:**
- Placed Order = 0 times since starting this flow
- Started Checkout = 0 times since starting this flow
- Not in this flow last 90 days
- `welcome_completed = false`

(Source: GIULIANO-DEMANDS.md, Section 3; Layer 16, Flow 01; MASTER-DIAGNOSIS-COMPENDIUM.md, Sections 4-5; Layer 8, Section 5.1)

---

### FLOW 02: Cart Abandonment Flow (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | Recover revenue from shoppers who added items to cart but didn't complete purchase. Mechanism reminder + risk reversal. |
| **Trigger** | Cart Abandoned (requires custom "Added to Cart" Shopify snippet — Klaviyo's default fires on checkout start) |
| **Exit Conditions** | Made a purchase, Unsubscribed |
| **Email Count** | 3 (cross-level, 1 copy) |
| **Timing** | E1: 1 hour → E2: Day 1 → E3: Day 3 |
| **Segmentation** | Cross-level always (R1-R6 mandatory). Speed > segmentation. |

**Per-Email Purposes:**

| Email | Timing | Goal | Tipping Point | CTA |
|-------|--------|------|---------------|-----|
| E1 | Hour 1 | Mechanism reminder + reassurance. "It's not the method, it's a sensory gap." | Recognizes the sensory gap | Return to cart |
| E2 | Day 1 | Specific product reminder with peer stories. Social proof + product value. | Peer stories + product value | See what others love |
| E3 | Day 3 | 60-day guarantee + soft permission not to buy. Risk reversal + trust building. | Trust through permission | Try with guarantee |

**Cart Recovery Logic (Dynamic Content):**

| Cart Contents | Upsell Strategy |
|---------------|-----------------|
| 1 Pair in cart | Upsell to 3+3: "Most parents start with 1, then add more. Here's why the 3+3 bundle gives you everything." |
| 3+3 in cart | Reminder + free shipping emphasize. "You've chosen the bestseller — 62% savings, free shipping, 60-day guarantee." |
| 5+5 in cart | Total value emphasize. "The complete training kit — $119.99 for 10 pairs. Free e-book + targets + progress chart included." |

**Tonality Rules:**
- R1-R6 mandatory (cross-level)
- Energy: Friendly reminder, not pressure
- DO: Reduce friction, offer guarantee, soft permission
- DON'T: Pressure tactics, fake scarcity, guilt-tripping
- Lena voice: "Hey — noticed these were on your mind. Here's what I want you to know..."
- Three-Family Pattern (one testimonial per level) mandatory in E2

**Offer Rules:**
- Recovery offer: Reminder of original cart value + free shipping
- NO additional discount in E1-E2
- E3: Optional small incentive (10% off remaining items) if no recovery after 48 hours — but test without first
- 60-Day Guarantee present in ALL 3 emails
- If 1 Pair in cart, upsell framing for 3+3 bundle

**Migration Rules:**
- Cross-level — no migration anchors (speed > segmentation)
- If subscriber has level tag, continue using it for tone calibration within R1-R6 constraints
- If subscriber purchases → exit to Order Confirmation → PP flow cluster

**Flow Filters:**
- Placed Order = 0 times since starting this flow
- Started Checkout = 0 times since starting this flow
- Not in this flow last 10 days
- Cart value > $0

**Technical Note:** Klaviyo's default "Abandoned Cart" is actually checkout abandonment (fires on "Started Checkout"). True cart abandonment requires a custom "Added to Cart" Shopify snippet. Both flows coexist.

(Source: Layer 16, Flow 02; GIULIANO-DEMANDS.md, Section 2.2; Layer 8, Section 4.1)

---

### FLOW 03: Checkout Abandonment Flow (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | Recover revenue from shoppers who reached checkout but didn't complete. Highest-intent abandoners — remove last barriers. |
| **Trigger** | Started Checkout Abandoned (Klaviyo native event) |
| **Exit Conditions** | Made a purchase, Unsubscribed |
| **Email Count** | 2 (cross-level, 1 copy) |
| **Timing** | E1: 1 hour → E2: Day 1 |
| **Segmentation** | Cross-level always (R1-R6 mandatory) |

**Per-Email Purposes:**

| Email | Timing | Goal | Tone |
|-------|--------|------|------|
| E1 | Hour 1 | Friendly reminder + answer last doubts. "If today isn't right, that's a real answer." | Permission-based |
| E2 | Day 1 | Final nudge with 60-day guarantee. Decision-respect. "You decide." | Calm confidence |

**Tonality Rules:**
- Cross-level calibration (R1-R6) — highest-intent audience so more specific is OK
- Energy: Decision-respect. "This might not be right for you — but if it is, here's why."
- DO: Reduce friction, reinforce guarantee, offer support contact (reply to this email)
- DON'T: Pressure tactics, urgency, countdown timers
- Conversion Moment Stage — treat with care

**Offer Rules:**
- NO additional discount (checkout abandoners are high intent, they need a nudge not a deal)
- 60-Day Guarantee prominent in both emails
- Free shipping reminder if not already clear
- Dynamic content: show exact cart contents with pricing

**Flow Filters:**
- Placed Order = 0 times since starting this flow
- Not in this flow last 5 days

(Source: Layer 16, Flow 03)

---

### FLOW 04: Browse Abandonment Flow (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | Re-engage visitors who viewed a product but didn't add to cart. Lower intent — education-first approach. |
| **Trigger** | Viewed Product (Klaviyo native event) + No cart/checkout within 24 hours |
| **Exit Conditions** | Made a purchase, Added to Cart, Unsubscribed |
| **Email Count** | 3 (cross-level, 1 copy) |
| **Timing** | E1: 24 hours → E2: Day 3 → E3: Day 7 |
| **Segmentation** | Cross-level always (R1-R6 mandatory) |

**Per-Email Purposes:**

| Email | Timing | Goal | Tone |
|-------|--------|------|------|
| E1 | 24h | Mechanism education hook. "You were looking at something that helps kids who can't feel the signal." | Educational |
| E2 | Day 3 | Deep mechanism + product education. "Here's why the 3-layer system works differently." | Science-informed |
| E3 | Day 7 | Final touch with guarantee + permission not to buy. | Gentle close |

**Tonality Rules:**
- R1-R6 mandatory (cross-level)
- Energy: Educational, not promotional
- E1: Lead with mechanism question ("Does your child sit 20 minutes and nothing happens?")
- E2: Product mechanism + one testimonial (Three-Family Pattern)
- E3: 60-day guarantee + door-open close
- Lena voice: "I saw you were curious about BrightKidCo..."

**Offer Rules:**
- E1-E2: Education only — NO direct offer
- E3: First offer presentation with 60-day guarantee
- Default offer: 3+3 Bundle ($79.99)
- NEVER use urgency or countdown timers

**Flow Filters:**
- Placed Order = 0 times since starting this flow
- Added to Cart = 0 times since starting this flow
- Started Checkout = 0 times since starting this flow
- Not in this flow last 30 days

(Source: Layer 16, Flow 04; GIULIANO-DEMANDS.md, Section 2.2)

---

### FLOW 05: Order Confirmation (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | Confirm order, set expectations, build post-purchase trust. Reinforce that customer made the right decision. |
| **Trigger** | Placed Order event |
| **Exit Conditions** | N/A (single email, then exit) |
| **Email Count** | 1 (cross-level, 1 copy) |
| **Timing** | Immediate (within 5 minutes of purchase) |
| **Segmentation** | Cross-level (transactional — no level calibration needed) |

**Per-Email Purpose:**

| Timing | Goal | Key Elements |
|--------|------|-------------|
| Immediate | Confirm + reassure + next steps | Order summary, shipping timeline, 60-day guarantee reminder, "You made the right choice" validation, link to "First Use Guide" |

**Tonality Rules:**
- Warm confirmation tone (50/50 hope/realism — neutral transactional)
- Validation: "You've taken the first step toward body-signal learning"
- Include: Order #, items purchased, shipping estimate, tracking link placeholder
- 60-day guarantee reminder (post-purchase confidence)
- Lena sign-off: "You've got this. We've got your back. — Lena"
- Include link to support (reply-to-this-email)
- RS Integration: "Many parents tell us..." + 1 peer quote

**Offer Rules:**
- Show what was purchased with pricing
- Cross-sell suggestion: Wash Bag ($ accessory) — only 1, not pushy
- Never upsell in confirmation (too early — wait for PP-Direct Upsell)

**Klaviyo Note:** Use Klaviyo's native Order Confirmation template as base. Customize per BrightKidCo voice.

(Source: Layer 16, Flow 05)

---

### FLOW 06: Shipping Notification (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | Notify customer that order has shipped. Build anticipation and trust. |
| **Trigger** | Fulfilled Order event (Shopify) |
| **Exit Conditions** | N/A (single email, then exit) |
| **Email Count** | 1 (cross-level) |
| **Timing** | When order is fulfilled (typically Day 0-2 after purchase) |
| **Segmentation** | Cross-level — transactional, no level calibration |

**Per-Email Purpose:**

| Timing | Goal | Key Elements |
|--------|------|-------------|
| On fulfillment | Notify shipped + build anticipation | Tracking number, shipping carrier, est. delivery date, "What to expect when they arrive" teaser |

**Tonality Rules:**
- Excited-but-calm tone
- "Your BrightKidCo training underwear is on its way!"
- Tracking info prominent + link to track
- Teaser: "Here's what happens when they arrive..." (link to Arrived & Welcome)
- Lena sign-off: Short version — "Can't wait for you to try them. — Lena"

**Offer Rules:**
- No offers in this email (purely transactional)
- Unsubscribe link at bottom (CAN-SPAM compliance)

(Source: Layer 16, Flow 06)

---

### FLOW 07: Out for Delivery (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | Build excitement. Prepare customer for product arrival. Optional — skip if delivery window is same-day. |
| **Trigger** | Carrier event: Out for Delivery (conditional — depends on carrier webhooks) |
| **Exit Conditions** | N/A (single email) |
| **Email Count** | 1 (cross-level, optional) |
| **Timing** | Day of delivery (morning) |
| **Segmentation** | Cross-level |

**Per-Email Purpose:**

| Timing | Goal | Key Elements |
|--------|------|-------------|
| Morning of delivery | "Today's the day!" + prep guidance | Unboxing tips, first-use prep, manage expectations (progress takes weeks) |

**Tonality Rules:**
- Gentle excitement: "Today's the day your BrightKidCo package arrives!"
- Prep guidance: "Before they arrive: wash in warm water (no fabric softener). Have your child help unbox if they're up for it."
- Manage expectations: "Remember — the first few wears are about introducing the sensation, not results."
- Lena sign-off: "It's an exciting day. Savor it. — Lena"
- DO NOT: Over-promise outcomes. "Your child may not react right away — that's normal."

**Offer Rules:**
- No offers (purely transactional / educational)

(Source: Layer 16, Flow 07)

---

### FLOW 08: Arrived & Welcome (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | Welcome the product into the home. Educate on first use. Set up for success. |
| **Trigger** | Delivery Confirmed event OR Day 7 after shipping (whichever comes first) |
| **Exit Conditions** | N/A (single email) |
| **Email Count** | 1 (cross-level) |
| **Timing** | Day of delivery or Day 7 post-ship |
| **Segmentation** | Cross-level |

**Per-Email Purpose:**

| Timing | Goal | Key Elements |
|--------|------|-------------|
| Arrival day | Product welcome + first-use education | "They're here!" — unboxing story, first wear protocol, "Don't expect results on day 1", 60-day guarantee, link to PP-Education resources |

**Tonality Rules:**
- Warm welcome: "They're here! Here's what to do first."
- First-wear protocol: "Put them on like regular underwear. Watch for any reaction — even a pause."
- Education: "The wetness signal works by letting your child FEEL when they're wet. Most kids don't react at first. That's normal."
- What to expect: "Week 1: Awareness. Week 2-4: Recognition signs. Week 4-8: Active response."
- Lena sign-off: "Welcome to the journey. I'm here if you need anything. — Lena"
- Link to: PP-Education D0-21 (next flow in sequence)

**Offer Rules:**
- No direct offers
- If 1-pair buyer: gentle upsell mention: "Most parents find 1 pair isn't enough for consistent use. When you're ready for more..."
- If 3+3/5+5 buyer: Cross-sell wash bag or Magic Potty Targets

**Flow Filters:**
- Placed Order > 0
- NOT in this flow in last 90 days

(Source: Layer 16, Flow 08)

---

### FLOW 09: PP-Direct Upsell (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | Convert 1-pair buyers to 3+3 bundle. Immediate post-purchase upsell window. |
| **Trigger** | Order Placed (1 Pair) |
| **Exit Conditions** | Purchased 3+3 or higher, Unsubscribed |
| **Email Count** | 2 (cross-level, 1 copy) |
| **Timing** | E1: Day 1 post-purchase → E2: Day 3 |
| **Segmentation** | Cross-level — triggered only by purchase of 1 Pair |

**Per-Email Purposes:**

| Email | Timing | Goal | CTA |
|-------|--------|------|-----|
| E1 | Day 1 | "Most parents who buy 1 pair come back for the 3+3 within a week. Here's why." | Add 3+3 Bundle |
| E2 | Day 3 | "Your 1 pair is on its way. Here's how the 3+3 bundle complements it." | Add 3+3 with special link |

**Tonality Rules:**
- Cross-level calibration (R1-R6)
- Tone: Helper, not seller
- NEVER: "You didn't buy enough." Frame as: "Most parents find 1 pair isn't enough for consistent rotation"
- Math reframe allowed (cross-level safe): "3+3 bundle: $13.33/pair vs $34.99 for singles"
- Lena sign-off: "From one parent who started with 1 pair too... — Lena"

**Offer Rules:**
- E1: 3+3 Bundle at $79.99 with free shipping
- E2: 3+3 Bundle + 10% off add-on (test without discount first)
- 60-Day Guarantee prominent
- Include bundle comparison table: 1 Pair vs 3+3 vs 5+5

**Flow Filters:**
- Last purchase pack size = 1 Pair
- Not in this flow last 30 days

(Source: Layer 16, Flow 09)

---

### FLOW 10: PP-Level Detection (GF Only)

| Property | Value |
|----------|-------|
| **Purpose** | **Critical flow.** Detect GF subscriber's level so they can be migrated to level-specific content. GF purchasers who didn't self-identify get one gentle mechanism-driven email. |
| **Trigger** | GF subscriber purchased + no level tag applied |
| **Exit Conditions** | Level tag applied, Unsubscribed |
| **Email Count** | **1 email** (GF only, single mailing) |
| **Timing** | Day 14 post-purchase |
| **Segmentation** | GF only — subscribers who purchased without identifying their level |

**Per-Email Purpose:**

| Timing | Goal | Key Elements |
|--------|------|-------------|
| Day 14 | Level detection via click behavior | 3-4 story links targeting L1/L2/L3 scenarios; organic migration; "You might be seeing..." pattern |

**Tonality Rules:**
- Cross-level calibration (R1-R6)
- Energy: Check-in, not diagnostic
- Never: "Click here if you're Level X"
- Framing: "I've noticed parents in different situations have different experiences. You might recognize yourself in one of these stories..."
- Story links:
  - L1 anchor: "My son talks about going but never makes it in time" → L1 tag
  - L2 anchor: "We've been through 40 methods. Nothing sticks" → L2 tag
  - L3 anchor: "My child has never felt wet. Ever." → L3 tag
- Each link leads to a level-specific story page that applies the level tag
- Lena sign-off: "Every journey looks different. Yours is valid. — Lena"

**Offer Rules:**
- No offer in this email (purely detection)
- Post-detection: level-specific offers follow (via PP-Ext Ed or level-specific flows)

**Expected Outcomes:**
- Click migration rate: 40-50% of GF subscribers
- Non-clickers: permanent GF (valid for Groups B and C)
- Migration triggers: On click → apply `avatar_level1/2/3` tag → route to level-specific flows

**Flow Filters:**
- Avatar level = general
- Placed Order > 0
- NOT in this flow last 90 days

(Source: Layer 16, Flow 10; GIULIANO-DEMANDS.md, Section 4 "Migration Strategy")

---

## 7. PHASE 2: HIGH-VALUE FLOWS (Months 3-4) — 11 Flows, 56 Emails

> **These flows depend on Phase 1 data — purchase history, engagement signals, level tags.**
> 11 flows, 56 emails total. Generate the majority of repeat revenue.

---

### FLOW 11: PP-Mary S. Story (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | Brand-building. Mary S. (founder) appears once, telling her story. Builds deeper emotional connection. |
| **Trigger** | Day 3 post-purchase (after PP-Direct Upsell E1) |
| **Exit Conditions** | N/A (single email) |
| **Email Count** | 1 (cross-level) |
| **Timing** | Day 3 post-purchase |
| **Segmentation** | Cross-level — all buyers get the same founder story |

**Per-Email Purpose:**

| Timing | Goal | Key Elements |
|--------|------|-------------|
| Day 3 | Founder story — trust anchor | Mary's personal why, her child's journey, "Why BrightKidCo exists", brand mission |

**Tonality Rules:**
- **CRITICAL:** Mary S. appears ONLY in this single email. Lena voice returns afterward.
- Mary's voice: Warm, passionate, but NOT salesy
- "I started BrightKidCo because my own child couldn't feel the signal..."
- Cross-level calibration (R1-R6): symptom language, no level labels
- Contrast: Lena = peer parent (daily support); Mary = founder (vision, story, why)
- This is the ONLY email NOT signed by Lena. Signed: "— Mary S., Founder"
- Preceding email (PP-Upsell E2): Lena introduces Mary. "Mary has a story she wants to share with you..."

**Offer Rules:**
- No offer in this email (pure brand building)
- Link to About Us page for deeper story

(Source: Layer 16, Flow 11; GIULIANO-DEMANDS.md, Section 3.4)

---

### FLOW 12: PP-Education Day 0-21 (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | Educate new buyers on product usage, manage expectations, celebrate micro-wins. The training companion. |
| **Trigger** | Placed Order (any pack size) |
| **Exit Conditions** | Unsubscribed, Entered PP-Support At-Risk |
| **Email Count** | 4 (cross-level, 1 copy) |
| **Timing** | E1: Day 0 → E2: Day 7 → E3: Day 14 → E4: Day 21 |
| **Segmentation** | Cross-level initially (R1-R6). Level-aware content blocks if level tag known. |

**Per-Email Purposes:**

| Email | Timing | Theme | Key Content |
|-------|--------|-------|-------------|
| E1 | Day 0 | "Your first wear" | Put them on like regular underwear. No expectations. Just observe. |
| E2 | Day 7 | "What to look for" | Micro-signs: pause, touch, look down, shorter dry periods |
| E3 | Day 14 | "Week two reality" | Progress isn't linear. Regression is normal. Don't stop. |
| E4 | Day 21 | "Celebrate the small wins" | "He looked at the wet spot!" — share wins, encourage logging |

**Tonality Rules:**
- Cross-level calibration (R1-R6)
- Tone: Coaching + encouragement — "You're doing it right"
- NEVER: Over-promise outcomes ("Most kids show awareness within..." — let REAL data speak)
- RS Integration: 1-2 parent quotes per email about small wins
- Manage expectations: "Some kids react on day 3. Others day 30. Both are normal."
- Lena sign-off variat: "You're doing the hard work. It matters. — Lena"
- Level-aware content blocks:
  - L1: "Pre-K pressure doesn't change the timeline — but we understand the urgency"
  - L2: "Your BCBA may notice changes in prompted sessions"
  - L3: "Awareness can look different. A pause. A touch. That's progress."
  - GF: Cross-level safe version of all above

**Offer Rules:**
- E1-E3: No offers (pure education)
- E4: Soft upsell to 3+3 if 1-pair buyer: "Now that you've seen how they work, most parents add more pairs for consistent use."
- 60-day guarantee reminder in E4

**Flow Filters:**
- Placed Order > 0
- NOT in this flow last 90 days

(Source: Layer 16, Flow 12)

---

### FLOW 13: PP-Extended Upsell (Level-Aware)

| Property | Value |
|----------|-------|
| **Purpose** | Cross-sell additional products. Bundle upgrades. Accessory introductions. |
| **Trigger** | Day 28 post-purchase (after PP-Education completes) |
| **Exit Conditions** | Unsubscribed |
| **Email Count** | 3 (level-aware, dynamic content) |
| **Timing** | E1: Day 28 → E2: Day 35 → E3: Day 42 |
| **Segmentation** | Level-aware — tone shifts by level tag; offer varies by purchase history |

**Per-Email Purposes:**

| Email | Timing | Goal | Level-Aware Content |
|-------|--------|------|-------------------|
| E1 | Day 28 | Bundle upgrade (1-pair → 3+3 or 3+3 → 5+5) | L1: "Complete kit" urgency | L2: "BCBA complement" | L3: "When you're ready" |
| E2 | Day 35 | Accessory cross-sell (Wash Bag, Magic Targets) | Cross-level, R1-R6 |
| E3 | Day 42 | Final upsell + guarantee reinforcement | Cross-level, door open |

**Tonality Rules:**
- Level-aware: adjust tonality per level tag
- L1: More urgency allowed, math reframes OK
- L2: Science framing, BCBA complement language, careful math ("The math isn't the point")
- L3: Dignity-first, NO math, NO urgency — "When you feel ready"
- GF: Cross-level R1-R6 (if no level tag)
- Lena voice throughout

**Offer Rules:**
- E1: Bundle upgrade (current pack size → next tier up)
- E2: Accessory cross-sell (1-2 products, not overwhelming)
- E3: "Everything bundle" (complete kit offer)
- 60-Day Guarantee in all 3 emails
- L3: NEVER push 5+5. 1 Pair → 3+3 at most, organic only.

**Flow Filters:**
- Placed Order > 0
- Days since last purchase > 21
- NOT in this flow last 90 days

(Source: Layer 16, Flow 13)

---

### FLOW 14: PP-Mid Check-In (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | Mid-journey support. Check progress, offer help, catch disengagement early. |
| **Trigger** | Day 45 post-purchase (mid-point between education and replenishment) |
| **Exit Conditions** | Unsubscribed, Entered At-Risk flow |
| **Email Count** | 3 (cross-level, 1 copy) |
| **Timing** | E1: Day 45 → E2: Day 60 → E3: Day 75 |
| **Segmentation** | Cross-level initially. Level-aware content blocks if tag known. |

**Per-Email Purposes:**

| Email | Timing | Theme | Key Content |
|-------|--------|-------|-------------|
| E1 | Day 45 | "How's it going?" | Open-ended check-in. Reply-to-this-email for support. Celebrate any progress. |
| E2 | Day 60 | "At the 60-day mark" | Guarantee reminder (earliest use window). "If it's working, here's what to expect next." |
| E3 | Day 75 | "Looking ahead" | Replenishment timing preview. "You might need more pairs soon." |

**Tonality Rules:**
- Cross-level calibration (R1-R6)
- Tone: Supportive peer — "How's it going? I'd love to hear."
- "Reply to this email" — high-trust invitation (Lena reads them)
- E2: Guarantee mention — gentle, not pushy
- E3: "Your child's first pair has been working hard. They may need a break..."
- Lena sign-off: "I'm always here. Just reply. — Lena"

**Offer Rules:**
- E1: No offer (pure check-in)
- E2: Guarantee reassurance only
- E3: Gentle replenishment preview (no direct CTA, teaser for Replenish flow)

**Flow Filters:**
- Placed Order > 0
- Days since last purchase between 40-80
- NOT in this flow last 90 days

(Source: Layer 16, Flow 14)

---

### FLOW 15: PP-Extended Education (Level-Specific, 4 Variants)

| Property | Value |
|----------|-------|
| **Purpose** | Deep education for subscribers who need more support. Level-specific content for L1/L2/L3/GF. |
| **Trigger** | Day 22+ post-purchase + level tag known |
| **Exit Conditions** | Unsubscribed, Completed all 5 emails |
| **Email Count** | **5 per level × 4 levels = 20 total unique emails** |
| **Timing** | E1: Day 22 → E2: Day 28 → E3: Day 35 → E4: Day 42 → E5: Day 49 |
| **Segmentation** | Level-specific (full 4× copy variants) |

**Level-Specific Themes:**

| Level | E1 (D22) | E2 (D28) | E3 (D35) | E4 (D42) | E5 (D49) |
|-------|----------|----------|----------|----------|----------|
| **L1** | "Pre-K timeline — real talk" | "When other parents ask" | "Accidents happen — here's why" | "Building consistency" | "Graduation prep" |
| **L2** | "The interoception science" | "BCBA integration tips" | "Sensory bathroom setup" | "Prompt-to-awareness shift" | "Long-term progress tracking" |
| **L3** | "Dignity-first progress" | "Smallest signs that matter" | "Sensory overload solutions" | "Partner communication" | "When to try again" |
| **GF** | Cross-level R1-R6 deep ed | "Whether...If...Or..." pattern | Three-Family Pattern | Mixed scenarios | Migration reinforcement |

**Tonality Rules:**
- FULL level-specific voice calibration (Section 4.3)
- L1: Medium science, urgency allowed, "Talk soon" sign-off
- L2: HIGH science, BCBA context, "With understanding" sign-off
- L3: Dignity-first, NO urgency, REPEATED permission not to engage, "With care" sign-off
- GF: Cross-level R1-R6, "Whether...Or...If..." pattern
- Lena voice throughout all variants
- 1-2 verbatim parent quotes per email minimum

**Offer Rules:**
- E1-E4: Education only — NO offers
- E5: Soft upsell if appropriate (level-dependent offer rules)
- L5 offer: Bundle upgrade or replenishment
- L2 offer: Science kit framing
- L3 offer: 1 Pair only, permission framing
- GF offer: Cross-level 3+3 bundle

**Flow Filters:**
- Placed Order > 0
- Days since last purchase > 21
- Level tag known (L1/L2/L3/GF)
- NOT in this flow last 90 days

(Source: Layer 16, Flow 15; GIULIANO-DEMANDS.md, Section 4)

---

### FLOW 16: PP-Support At-Risk (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | Re-engage post-purchase subscribers showing early signs of disengagement (no opens, no usage signals). Prevent buyer's remorse. |
| **Trigger** | 3-7 days of no opens (post-purchase) OR `at_risk_no_open` tag applied |
| **Exit Conditions** | Open detected, Unsubscribed, Escalated to Winback |
| **Email Count** | 4 (cross-level, 1 copy) |
| **Timing** | E1: Day 3 of no open → E2: Day 7 → E3: Day 14 → E4: Day 21 |
| **Segmentation** | Cross-level (R1-R6). Tone varies by level tag if known. |

**Per-Email Purposes:**

| Email | Timing | Theme | Approach |
|-------|--------|-------|---------|
| E1 | 3d no open | Gentle re-engagement | "I noticed you haven't opened recent emails. Just checking in." |
| E2 | 7d no open | Support offering | "Here's how to get the most out of your BrightKidCo pairs." |
| E3 | 14d no open | Value reminder | "Your child's nervous system is learning even when it doesn't show." |
| E4 | 21d no open | Guarantee + door open | "No pressure. Your 60-day guarantee is here if needed." |

**Tonality Rules:**
- Cross-level calibration (R1-R6)
- Tone: Concerned peer, NOT corporate
- NEVER: "We miss you" (generic brand language)
- NEVER: Guilt-tripping or FOMO
- "I'm just checking in. No pressure. If BrightKidCo isn't right for your child, that's OK."
- Lena sign-off: "I'm here. Really. — Lena"
- If level tag known: adjust tone per level (L3: extra gentle)
- E4: "Your 60-day guarantee is still active. Some kids take 8 weeks to show awareness. Both timelines are normal."

**Offer Rules:**
- E1-E2: No offers (pure re-engagement)
- E3-E4: Soft guarantee reminder + support offering
- No upsells — re-engagement is the only goal

**Flow Filters:**
- Placed Order > 0
- No opens in last 3 days
- NOT in At-Risk flow in last 60 days

(Source: Layer 16, Flow 16)

---

### FLOW 17: Replenishment A (1-Pair Buyers)

| Property | Value |
|----------|-------|
| **Purpose** | Encourage 1-pair buyers to purchase more pairs. Timing based on wear-cycle. |
| **Trigger** | Day 14 post-purchase (1-pair buyers) |
| **Exit Conditions** | Purchased, Unsubscribed |
| **Email Count** | 3 (cross-level, 1 copy) |
| **Timing** | E1: Day 14 → E2: Day 30 → E3: Day 60 |
| **Segmentation** | Cross-level (R1-R6) — triggered by `buyer_1pair` tag |

**Per-Email Purposes:**

| Email | Timing | Theme | CTA |
|-------|--------|-------|-----|
| E1 | Day 14 | "Wash cycles reminder" | "Your 1 pair has been through ~14 washes. Time to add more for rotation." |
| E2 | Day 30 | "Consistency matters" | "Training works best with 3+ pairs for rotation. Here's the 3+3 bundle." |
| E3 | Day 60 | "Guarantee threshold" | "At 60 days, most parents know if it's working. Here's the next step." |

**Tonality Rules:**
- Cross-level (R1-R6)
- Tone: Practical reminder, not sales
- E1: "Training underwear works best when you rotate pairs. One pair spends more time in the laundry than on your child."
- Lena sign-off: "More pairs = less laundry = more consistency. — Lena"

**Offer Rules:**
- E1: 3+3 Bundle ($79.99) — bundle savings framing
- E2: 3+3 Bundle with "Most popular" badge
- E3: 3+3 or 5+5 depending on engagement signals
- 60-Day Guarantee on all offers

**Flow Filters:**
- Last purchase pack size = 1 Pair
- Days since last purchase > 10
- NOT in this flow last 90 days

(Source: Layer 16, Flow 17)

---

### FLOW 18: Replenishment B (3+3 Buyers)

| Property | Value |
|----------|-------|
| **Purpose** | Encourage 3+3 buyers to reorder or upgrade to 5+5. |
| **Trigger** | Day 75 post-purchase (3+3 buyers) |
| **Exit Conditions** | Purchased, Unsubscribed |
| **Email Count** | 2 (cross-level, 1 copy) |
| **Timing** | E1: Day 75 → E2: Day 100 |
| **Segmentation** | Cross-level (R1-R6) — triggered by `buyer_3plus3` tag |

**Per-Email Purposes:**

| Email | Timing | Theme | CTA |
|-------|--------|-------|-----|
| E1 | Day 75 | "Your 6 pairs have been working for 2.5 months" | Reorder 3+3 or upgrade to 5+5 |
| E2 | Day 100 | "Full rotation coverage" | Upgrade to 5+5 (complete kit) |

**Tonality Rules:**
- Cross-level (R1-R6)
- Tone: "Your pairs have earned their retirement"
- "6 pairs of training underwear + 75 days of learning = real progress. Want to keep the momentum going?"
- Lena sign-off: "Progress is a marathon. You're doing great. — Lena"

**Offer Rules:**
- E1: Reorder 3+3 ($79.99) OR upgrade to 5+5 ($119.99)
- E2: 5+5 Bundle with complete-kit framing
- 60-Day Guarantee (even on reorder)
- Consider small loyalty discount for repeat buyers

**Flow Filters:**
- Last purchase pack size = 3+3
- Days since last purchase > 60
- NOT in this flow last 90 days

(Source: Layer 16, Flow 18)

---

### FLOW 19: Replenishment C (5+5 Buyers)

| Property | Value |
|----------|-------|
| **Purpose** | Encourage 5+5 buyers to reorder or add accessories. Low-volume, high-LTV segment. |
| **Trigger** | Day 150 post-purchase (5+5 buyers) |
| **Exit Conditions** | Purchased, Unsubscribed |
| **Email Count** | 2 (cross-level, 1 copy) |
| **Timing** | E1: Day 150 → E2: Day 180 |
| **Segmentation** | Cross-level (R1-R6) — triggered by `buyer_5plus5` tag |

**Per-Email Purposes:**

| Email | Timing | Theme | CTA |
|-------|--------|-------|-----|
| E1 | Day 150 | "5 months in — how's it going?" | Check-in + reorder 5+5 |
| E2 | Day 180 | "Your 10 pairs have been through a lot" | Reorder + accessory cross-sell |

**Tonality Rules:**
- Cross-level (R1-R6)
- Tone: Appreciative, VIP-feeling
- "You're one of our most committed families. Thank you for trusting BrightKidCo."
- Lena sign-off: "Your journey inspires me. Truly. — Lena"

**Offer Rules:**
- E1: Reorder 5+5 ($119.99) or accessory bundles
- E2: 5+5 + accessory combo (Wash Bag + Magic Targets)

**Flow Filters:**
- Last purchase pack size = 5+5
- Days since last purchase > 120
- NOT in this flow last 90 days

(Source: Layer 16, Flow 19)

---

### FLOW 20: Review Request (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | Solicit product reviews and social proof. Critical for future buyer trust. |
| **Trigger** | Day 30 post-purchase (any pack size) |
| **Exit Conditions** | Review submitted, Unsubscribed |
| **Email Count** | 2 (cross-level, 1 copy) |
| **Timing** | E1: Day 30 → E2: Day 45 |
| **Segmentation** | Cross-level (R1-R6) |

**Per-Email Purposes:**

| Email | Timing | Goal | CTA |
|-------|--------|------|-----|
| E1 | Day 30 | "How's it going? Share your story." | "Help other parents like you. Leave a review." |
| E2 | Day 45 | "Your experience matters" | Review link + photo request |

**Tonality Rules:**
- Cross-level (R1-R6)
- Tone: "Your experience could be exactly what another parent needs to hear today."
- "The reviews that help most are the honest ones. Your child's journey — whatever it looks like — might be the story another mom needs."
- Lena sign-off: "Your voice matters. — Lena"
- DO NOT: Incentivize positive reviews. Ask for honest feedback.

**Offer Rules:**
- No offers (pure review solicitation)
- Link to review page with star rating + photo upload

**Flow Filters:**
- Placed Order > 0
- Days since last purchase > 25
- Review NOT already submitted
- NOT in this flow last 90 days

(Source: Layer 16, Flow 20)

---

### FLOW 21: Winback Path A — Post-Buyer (Level-Specific, 4 Variants)

| Property | Value |
|----------|-------|
| **Purpose** | Re-engage customers who purchased but went inactive (90+ days no purchase, no engagement). |
| **Trigger** | 90 days post-purchase + no opens/clicks/purchases in last 60 days |
| **Exit Conditions** | Purchased, Re-engaged, Unsubscribed |
| **Email Count** | **3 per level × 4 levels = 12 total unique emails** |
| **Timing** | E1: Day 90 → E2: Day 105 → E3: Day 120 |
| **Segmentation** | Level-specific (4× variants) |

**Per-Email Purposes (Cross-Level):**

| Email | Timing | Theme | Approach |
|-------|--------|-------|---------|
| E1 | Day 90 | "We haven't heard from you in a while" | Gentle re-engagement, value reminder |
| E2 | Day 105 | "What's changed?" | Check-in, support offer |
| E3 | Day 120 | "One more try" | Final re-engagement + guarantee/door open |

**Level-Specific Tonality:**

| Level | E1 Tone | E2 Tone | E3 Tone |
|-------|---------|---------|---------|
| L1 | "Pre-K might be here — we understand the shift" | "New phase of parenting" | "BrightKidCo is here when you need us" |
| L2 | "Progress doesn't have a deadline" | "Your BCBA program may need an update" | "We're not going anywhere" |
| L3 | "No pressure. Just checking in." | "Your journey is valid. Whatever it looks like." | "Door always open. Your terms." |
| GF | Cross-level R1-R6 | Three-Family Pattern | "Whether...If...Or..." |

**Offer Rules:**
- E1: Re-engagement only — no offers
- E2: Soft reorder suggestion
- E3: Special reorder offer (10% off OR free shipping on next order)
- L3: NEVER discount. "Your 60-day guarantee is always active."
- All levels: 60-Day Guarantee reminder

**Flow Filters:**
- Placed Order > 0
- Last engagement > 60 days ago
- NOT in Winback A in last 180 days

(Source: Layer 16, Flow 21)

---

## 8. PHASE 3: NICE-TO-HAVE FLOWS (Months 5-6) — 4 Flows, 23 Emails

> **These flows require established team processes and data maturity.**
> 4 flows, 23 emails total. Deploy after Phase 2 is stable.

---

### FLOW 22: Winback Path B — Never-Bought (Level-Specific, 4 Variants)

| Property | Value |
|----------|-------|
| **Purpose** | Re-engage subscribers who entered the ecosystem but never purchased. Lower intent than Winback A. |
| **Trigger** | 60 days post-Welcome completion + no purchase |
| **Exit Conditions** | Purchased, Re-engaged, Unsubscribed, Entered Sunset |
| **Email Count** | **3 per level × 4 levels = 12 total unique emails** |
| **Timing** | E1: Day 60 → E2: Day 75 → E3: Day 90 |
| **Segmentation** | Level-specific (4× variants) |

**Per-Email Purposes:**

| Email | Timing | Theme | Approach |
|-------|--------|-------|---------|
| E1 | Day 60 | "Still thinking about it?" | Mechanism reminder. "The science hasn't changed." |
| E2 | Day 75 | "What's holding you back?" | Objection handling (level-specific). "We're here." |
| E3 | Day 90 | "Last chance to try" | Final offer + guarantee. "Door stays open." |

**Level-Specific Differences from Winback A:**
- These subscribers NEVER bought — lower conviction, different objections
- L1: "Pre-K deadline is real. But it's not too late."
- L2: "You've tried everything. This is the one mechanism you haven't tried."
- L3: "Whether you decide to try or not, you've done right by your child."
- GF: Cross-level R1-R6, "Whether...Or...If..." pattern

**Offer Rules:**
- E1: No offer (re-engagement)
- E2: 3+3 Bundle with 60-Day Guarantee
- E3: 3+3 Bundle + small incentive (10% off — test without first)
- L3: 1 Pair ONLY, NEVER discount

**Flow Filters:**
- Welcome Flow completed
- Placed Order = 0
- Last engagement > 30 days ago
- NOT in Winback B in last 180 days

(Source: Layer 16, Flow 22)

---

### FLOW 23: Sunset Flow (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | List hygiene. Give unengaged subscribers one last chance before suppression. Protect deliverability. |
| **Trigger** | 120 days of inactivity after Winback completion (no re-engagement) |
| **Exit Conditions** | Re-engaged (clicked), Suppressed, Unsubscribed |
| **Email Count** | 2 (cross-level, 1 copy) |
| **Timing** | E1: Day 120 → E2: Day 135 |
| **Segmentation** | Cross-level (R1-R6) |

**Per-Email Purposes:**

| Email | Timing | Theme | CTA |
|-------|--------|-------|-----|
| E1 | Day 120 | "Are you still there?" | "Click here to stay updated. If we don't hear from you, we'll understand." |
| E2 | Day 135 | "This is our last email" | "We'll miss you. Click to stay. Otherwise, no hard feelings." |

**Tonality Rules:**
- Cross-level (R1-R6)
- Tone: Gentle, respectful, permission-based
- "We understand if BrightKidCo isn't right for your family right now. No hard feelings."
- "If you'd like to stay, just click below. If not, we respect your inbox."
- Lena sign-off: "Whenever you need us, we're here. — Lena"
- E2: "This is our last email. We've loved being part of your journey. If you ever want to come back, we'll be here."

**Offer Rules:**
- No offers (re-engagement or suppression only)

**Technical Implementation:**
- No click after E2: Apply `suppressed = true` tag
- Add to Master Suppression List
- Exclude from ALL flows and campaigns for 6-12 months
- Re-entry possible via fresh signup or support contact

(Source: Layer 16, Flow 23; Layer 36 Deliverability)

---

### FLOW 24: FAQ/Objection Library (Level-Specific Content Blocks)

| Property | Value |
|----------|-------|
| **Purpose** | Overcome remaining objections that prevent conversion. Deployed post-Welcome for non-purchasers (Phase 3). |
| **Trigger** | Welcome Flow completed + no purchase |
| **Exit Conditions** | Purchased, Unsubscribed |
| **Email Count** | **6 (cross-level structure + level-specific content blocks)** |
| **Timing** | Weekly (E1-E6 over 6 weeks) |
| **Segmentation** | Level-specific content blocks within 6 cross-level emails |

**Per-Email Purposes:**

| Email | Week | Objection | Key Content |
|-------|------|-----------|-------------|
| E1 | 1 | "I've tried everything" | Mechanism reframe. "You solved the wrong problem." |
| E2 | 2 | "Will it work for MY child?" | Level-specific scenarios. Three-Family Pattern. |
| E3 | 3 | "It's too expensive" | Math reframe (cross-level safe) OR dignity framing for L3 |
| E4 | 4 | "What if my child doesn't react?" | Timeline normalization + guarantee |
| E5 | 5 | "My BCBA/OT hasn't recommended it" | Professional validation + peer stories |
| E6 | 6 | "I'm not sure I can commit" | Permission-not-to-buy. Door stays open. |

**Level-Specific Content Blocks:**

Each email has a main cross-level body (R1-R6) plus level-specific objection-handling blocks:

| Objection | L1 Block | L2 Block | L3 Block | GF Block |
|-----------|----------|----------|----------|----------|
| "Tried everything" | "Oh Crap didn't fail you" | "40+ methods. Different mechanism." | "9 years. Different approach." | Cross-level safe |
| "Will it work?" | "Pre-K success stories" | "BCBA-integrated success" | "Dignity-first wins" | Three-Family Pattern |
| "Too expensive" | Pull-up math reframe | Careful add-alongside | NO MATH — dignity-only | Cross-level math |
| "No reaction" | "2 weeks is normal" | "8 weeks, some longer" | "Months. Maybe never. Both OK." | Timeline ranges |
| "BCBA hasn't mentioned" | N/A (L1 low BCBA) | "Here's how to discuss" | "OT/SPD context" | General professional |

**Tonality Rules:**
- Level-specific content blocks follow voice calibration per Section 4
- Main body: Cross-level R1-R6
- Lena voice throughout
- Each email ends with a soft CTA (shop / learn more)

**Offer Rules:**
- 3+3 Bundle primary offer across all emails
- L3: 1 Pair ONLY ($34.99)
- 60-Day Guarantee in every email

(Source: Layer 16, Flow 24; GIULIANO-DEMANDS.md, Section 3)

---

### FLOW 25: Referral Flow (Cross-Level)

| Property | Value |
|----------|-------|
| **Purpose** | Drive word-of-mouth growth. Incentivize satisfied customers to refer other parents. |
| **Trigger** | Day 30+ post-purchase (engagement-based) |
| **Exit Conditions** | Unsubscribed |
| **Email Count** | 3 (cross-level, 1 copy) |
| **Timing** | E1: Day 30 → E2: Day 60 → E3: Day 90 |
| **Segmentation** | Cross-level (R1-R6). Only triggered for engaged customers (post_purchase_active tag). |

**Per-Email Purposes:**

| Email | Timing | Theme | CTA |
|-------|--------|-------|-----|
| E1 | Day 30 | "Know another parent?" | "Share BrightKidCo with a friend. You both benefit." |
| E2 | Day 60 | "Your experience could help" | "The parents who need BrightKidCo are searching for answers." |
| E3 | Day 90 | "Growing the community" | Referral link + double-sided incentive reminder |

**Referral Incentive Structure:**
- Existing customer: $10 credit (or 10% off next purchase)
- Referred friend: $10 off first order
- Incentive delivered after referred friend completes purchase

**Tonality Rules:**
- Cross-level (R1-R6)
- Tone: Community-building, not transactional
- "If you know another parent who's been through what you have — share BrightKidCo with them."
- "The parents who need us most are the ones searching at 2am."
- Lena sign-off: "We're building something together. — Lena"
- NEVER: "Tell your friends about us" (generic, low-converting)
- Specific: "Is there another mom in your support group who's struggling with the same thing?"

**Offer Rules:**
- $10/$10 referral incentive
- Incentive applies to next purchase only
- No discount for L3 — offer as "community gift" instead

**Flow Filters:**
- Placed Order > 0
- `post_purchase_active` = true
- NOT in Referral flow in last 180 days

(Source: Layer 16, Flow 25)

---

## 9. CROSS-FLOW SUPPRESSION & PRIORITY CHAIN

### 9.1 Flow Priority Chain

When a subscriber qualifies for multiple flows simultaneously, the following priority chain determines which flow sends:

```
PRIORITY 1 (HIGHEST):  OPT-OUT FLOWS
├── Unsubscribe (permanent)
├── Sunset (suppression imminent)
├── PP-Support At-Risk (engagement critical)
└── Winback A/B (last reactivation attempt)

PRIORITY 2: RECOVERY & TRANSACTIONAL
├── Abandoned Cart
├── Abandoned Checkout
├── Browse Abandonment
├── Order Confirmation
├── Shipping Notification
└── Out for Delivery

PRIORITY 3: EDUCATION & UPSELL
├── PP-Direct Upsell
├── PP-Education D0-21
├── PP-Mid Check-In
├── PP-Extended Education
└── PP-Extended Upsell

PRIORITY 4: LIFECYCLE & RETENTION
├── Review Request
├── Referral Flow
├── Replenishment A/B/C
└── FAQ/Objection Library

PRIORITY 5 (LOWEST): ACQUISITION
├── Welcome Flow (paused during higher-priority flows)
├── Cart Abandonment (moves to Priority 2 when active)
└── Browse Abandonment (moves to Priority 2 when active)
```
(Source: GIULIANO-DEMANDS.md, Section 2.5 "Cross-Flow Suppression Rules")

### 9.2 Suppression Rules — Complete Table

| Rule | Condition | Action | Rationale |
|------|-----------|--------|-----------|
| **SR-01** | Subscriber in Welcome + triggers Cart Abandonment | Cart Abandonment takes priority. Welcome pauses E3+. E1-E2 delivered. | Recovery intent > education intent |
| **SR-02** | Subscriber in Welcome + triggers Browse Abandonment | Browse Abandonment takes priority for 24-72h. Welcome resumes after. | Lower intent, shorter suppression |
| **SR-03** | Subscriber in Welcome + makes purchase | Exits Welcome immediately. Enter Order Confirmation → PP cluster. | Purchase is primary conversion goal |
| **SR-04** | Subscriber in PP-Education + triggers At-Risk | At-Risk flow pauses PP-Education. After At-Risk completes (or re-engagement), PP-Education resumes. | Engagement health > education |
| **SR-05** | Subscriber in Winback A/B + re-engages | Exits Winback. Returns to appropriate lifecycle flow (Replenish, PP-Education, or Welcome if no purchase). | Re-engagement resets lifecycle |
| **SR-06** | Subscriber in Winback A/B + no re-engagement | Completed Winback → 30d buffer → Sunset Flow. | End of lifecycle |
| **SR-07** | Subscriber in Sunset + no click | Suppress after E2. Add to Master Suppression List. | List hygiene |
| **SR-08** | Subscriber in any flow + unsubscribes | Immediate exit ALL flows. Klaviyo auto-suppresses. | CAN-SPAM compliance |
| **SR-09** | Subscriber in Welcome + level detection click in PP-Level Detection | Apply level tag. Continue in level-specific Welcome variant. | Migration flow |
| **SR-10** | Multiple replenishment triggers (A+B+C) | Only the MOST RECENT purchase-based replenishment fires. | No double emails |

### 9.3 Suppression Segment Configuration in Klaviyo

**Master Suppression Segment (used as exclusion in ALL flows):**

```
Conditions:
  - Email is not undeliverable
  - Subscribed = false (unsubscribed)
  - Bounced = true (hard bounce)
  - Marked as Spam = true
  - Tag contains "suppressed" (Sunset completion)
  - Inactive 180+ days (final cleanup)
```
(Source: Layer 37 Klaviyo Setup; 12-klaviyo-implementation-guide.md)

### 9.4 Flow Frequency Caps

| Time Period | Max Emails | Notes |
|-------------|:----------:|-------|
| First 24 hours | 3 | Welcome E1 + Cart/Checkout E1 + Education start |
| Week 1 | 4-5 | Welcome E1-E2 + 1-2 recovery + 1 transactional |
| Normal weekly | 3-4 | Education + replenishment + lifecycle |
| Peak (Welcome+PP+Recovery) | 5-6 | Rare, when subscriber is in multiple flows |
| At-Risk phase | 2-3/week | Max to avoid accelerating unsubscribes |
| Winback phase | 2/week | Must be gentle to avoid spam complaints |
| Sunset | 2 total | Last chance — after that, suppression |

(Source: Layer 14 Frequency & Wording)

---

## 10. GF-TO-LEVEL MIGRATION STRATEGY

### 10.1 The 5 GF Sub-Groups

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    GENERAL FALLBACK — 5 SUB-GROUPS                            ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  GROUP A: DIAGNOSTIC ENTRANTS (~25% of GF)                                  ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  Pre-identity, education-first. Child not yet diagnosed. They're     │   ║
║  │  here because something is WRONG — they just don't have a label.     │   ║
║  │  Strategy: Educate first, migrate post-diagnosis.                    │   ║
║  │  Migration potential: HIGH                                            │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GROUP B: DIAGNOSIS-REJECTERS (~15% of GF)                                  ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  Anti-identity. They know about the diagnosis but reject it.         │   ║
║  │  Symptom language ONLY. Never "autism", "ASD", "Level". Use         │   ║
║  │  "nervous system differences" as umbrella.                           │   ║
║  │  Strategy: Convert IN GF. NEVER try to migrate.                      │   ║
║  │  Migration potential: LOW 💀                                          │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GROUP C: SENSORY-DIFFERENCE (~25% of GF)                                   ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  SPD/ADHD, no ASD label. Science-driven, mechanism-oriented.         │   ║
║  │  They respond to interoception science without ASD framing.          │   ║
║  │  Strategy: Convert IN GF. Hidden high-value segment.                 │   ║
║  │  Migration potential: LOW 💀                                          │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GROUP D: OVERWHELMED NON-SELECTORS (~25% of GF)                            ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  Has an ASD diagnosis but clicked past the pop-up. The goldmine.     │   ║
║  │  40-50% migration potential — highest of any GF group.               │   ║
║  │  Strategy: Gentle migration via organic story recommendations.       │   ║
║  │  Migration potential: HIGHEST (40-50%) 🌟                            │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GROUP E: CART/BROWSE WITHOUT OPT-IN (~10% of GF)                           ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  Unknown profile. Entered via cookie capture from cart/browse.       │   ║
║  │  Recovery framing, direct.                                           │   ║
║  │  Migration potential: VARIABLE                                        │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  RULE: Groups B and C are PERMANENT GF residents. Convert IN general.       ║
║  NEVER try to migrate them to level-specific flows.                          ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: 01-customer-avatar.md, Section 3.5; MASTER-DIAGNOSIS-COMPENDIUM.md, Section 5.6)

### 10.2 Migration Touchpoints — Complete Map

| Touchpoint | Timing | Mechanism | Expected Migration | Applies To |
|------------|--------|-----------|:-----------------:|------------|
| Pop-up self-ID | Entry | 4-button selection | ~50% of entrants | ALL (initial) |
| Welcome E2 anchor | Day 1 | Story link click | 5-10% of remaining GF | Groups A, D |
| Welcome E4 anchor | Day 7 | Story link click | 5-10% of remaining GF | Groups A, D |
| Welcome E6 anchor | Day 14 | Testimonial click | 3-7% of remaining GF | Groups A, D |
| PP-Level Detection | Day 14 post-purchase | Story link click | 40-50% of GF purchasers | Groups A, D (purchasers only) |
| Support reply | Any | Manual tag by support | <5% | All groups |
| **Cumulative migration** | | | **~65-75% of Groups A+D migrated** | |
| **Permanent GF rate** | | | **~25-35%** (Groups B+C+non-migrated) | |

### 10.3 The "Whether...Or...If..." Formula for GF Content

This is the canonical cross-level language formula. Covers ~50% of total email volume.

> "Whether [Sub-Group A situation], or [Sub-Group C situation] — if [common symptom], here's what most parents miss."

**5 axes this pattern covers:** Journey length, Verbal ability, Child's age, Diagnostic status, Method count.

(Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 4.4)

### 10.4 Migration Tag Flow

```
GF Subscriber (avatar_general)
        │
        ├── Group B or C → Stay GF permanently
        │     └── Convert IN general flows only
        │
        └── Group A or D → Migration touchpoints
              │
              ├── Click story link → Apply level tag
              │     └── Route to level-specific flows
              │
              └── No click → Stay GF
                    └── PP-Level Detection at D14 post-purchase
                          │
                          ├── Click → Apply level tag
                          └── No click → Permanent GF
```

### 10.5 Critical Rules for GF Content

1. **R1-R6 mandatory** in every GF email (cross-level content)
2. **Three-Family Pattern** always: one testimonial/scenario per level (L1, L2, L3)
3. **Group B (Diagnosis-Rejecters):** Use symptom language only. Never "autism", "ASD", "Level 1/2/3". Use "nervous system differences" as umbrella. (Rule V16)
4. **Group C (Sensory-Difference):** Science-driven, mechanism-oriented. They respond to interoception science without ASD framing.
5. **Migration timing:** Never before trust is established (first 48 hours). Welcome E2 is the earliest migration touchpoint.
6. **No forced migration:** If a subscriber doesn't click, they remain GF permanently. This is a valid outcome for Groups B and C.

(Source: GIULIANO-DEMANDS.md, Section 1.2; MASTER-DIAGNOSIS-COMPENDIUM.md, Section 4.6)

---

## 11. EDGE CASES & EXCEPTION HANDLING

### 11.1 Non-Standard Entry Paths

| Entry Path | Default Tag | Flow Routing | Migration Strategy |
|------------|:-----------:|--------------|-------------------|
| Checkout signup (pre-selected opt-in) | `avatar_general` | Welcome GF | PP-Level Detection at D14 post-purchase |
| Referral link click | `avatar_general` | Welcome GF | PP-Level Detection at D14 post-purchase |
| Manual add by support | Variable | Based on tag | Handled by support team |
| SMS opt-in (future) | `avatar_general` | Welcome GF | PP-Level Detection at D14 post-purchase |
| Facebook/IG lead form | `avatar_general` | Welcome GF | PP-Level Detection at D14 post-purchase |
| Gift purchase (buyer not wearer) | `avatar_general` | Welcome GF | PP-Level Detection only if gift-buyer signs up |
| Second child (existing customer) | Existing level tag | Welcome variant OR skip if already converted | Direct to level-specific PP flows |

### 11.2 Level Tag Edge Cases

| Scenario | Handling |
|----------|----------|
| Tag applied but subscriber doesn't match | GF sub-groups address this — cross-level content still works for GF |
| Subscriber's child changes levels (e.g., L2→L3) | Manual tag update by support. No automated re-leveling. |
| Subscriber has multiple children at different levels | Treat as highest-needs child. Content references "if your child..." (not age-specific). |
| Tag conflict: two level tags applied | Default to highest level (L3 > L2 > L1 > GF). Flag for support review. |
| Subscriber identifies at pop-up but clearly wrong level | Support can re-tag manually based on conversation. |

### 11.3 Offer Edge Cases

| Scenario | Handling |
|----------|----------|
| Customer wants only 1 pair but sees 3+3 offer | 1 Pair offered as alternate. Never force bundle upsell. |
| Customer on Medicaid | L3 pricing ($34.99) applies. No math reframes. Consider single-pair option highlighted. |
| International customer (UK/AU) | Currency display varies. Pricing: Check Shopify auto-conversion. Copy: Use local terms (nappies, loo). |
| Gift purchase (buyer ≠ child's parent) | No level-specific content. Buyer gets transactional + basic education. |
| Cart contains multiple products | Cross-sell logic: only upsell if items < $79.99 total. |
| Customer wants to combine discount codes | Klaviyo rule: single code per order. Higher discount wins. |
| Guarantee claim | Processed via support@brightkidco.com. No questions asked. |

### 11.4 Timing Edge Cases

| Scenario | Handling |
|----------|----------|
| Subscriber travels / changes timezone | Klaviyo sends in subscriber's timezone if set. Otherwise default EST. |
| Subscriber purchases immediately after signup (before Welcome E1) | Welcome E1 still sends (confirmation + code). Purchase does not suppress Welcome. |
| Subscriber purchases but returns item | Continue PP flows. If full refund, move to Winback B (never bought) after 60 days no reopen. |
| Holiday/promotional overlap | Suppress regular flows during BFCM campaign. Resume after promotion ends. |
| Multiple purchases in same flow window | Reset flow timers on latest purchase. Avoid duplicate content. |
| Subscriber re-enters through new signup | Check for existing profile. If already in flow with status=completed, do not repeat for 90 days. |

### 11.5 Content Edge Cases

| Scenario | Handling |
|----------|----------|
| Subscriber has no name (only email) | Use "Hey there," (no name = less personal, OK for GF). |
| Subscriber opted in with male parent name | Lena voice still works ("I'm Lena — mom of two autistic sons"). Content assumes primary caregiver. Don't gender-assume in body. |
| Image doesn't load | Alt text must carry the meaning (V23). "Mom smiling at child in training underwear" not "Happy family." |
| Plain text rendering | All emails must work in plain text. Lena voice is naturally readable. |
| Email forwarded to partner | External — no tracking. Content must be self-contained. Include BrightKidCo context in every email. |

### 11.6 The "Three-Family Pattern" (Cross-Level Testimonials)

For cross-level emails (R1-R6), always use exactly one testimonial per level:

```
┌──────────────────────────────────────────────────────────────────────┐
│                      THREE-FAMILY PATTERN                              │
│                                                                       │
│  "Our son could talk about potty all day but wouldn't actually       │
│   go. Three weeks with BrightKidCo and he started pausing..."        │
│                        — L1 family (verbal child)                     │
│                                                                       │
│  "After 3 years of ABA protocols, he never felt the signal.          │
│   Six weeks in, he looked down at the wet spot. First time."        │
│                        — L2 family (mixed verbal, BCBA context)       │
│                                                                       │
│  "Nine years. Not one sign of feeling wet. After 2 months with       │
│   BrightKidCo, he walked to the bathroom after an accident."          │
│                        — L3 family (non-verbal, high support)         │
│                                                                       │
│  RULE: All three together in cross-level mail. Each reader finds     │
│  herself in one of these stories.                                     │
└──────────────────────────────────────────────────────────────────────┘
```
(Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 4.6)

---

## 12. TAG TAXONOMY & KLAVIYO PROFILE PROPERTIES

### 12.1 Tag Categories Overview

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      COMPLETE TAG TAXONOMY (15 TAGS)                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  AVATAR TAGS (4)          BEHAVIORAL TAGS (6)         PURCHASE TAGS (5)     ║
║  ┌──────────────────────┐ ┌──────────────────────┐  ┌──────────────────────┐ ║
║  │ avatar_level1        │ │ welcome_completed    │  │ buyer_1pair          │ ║
║  │ avatar_level2        │ │ welcome_completed_   │  │ buyer_3plus3         │ ║
║  │ avatar_level3        │ │   no_purchase        │  │ buyer_5plus5         │ ║
║  │ avatar_general       │ │ post_purchase_active │  │ repeat_buyer         │ ║
║  └──────────────────────┘ │ at_risk_no_open      │  │ vip_buyer            │ ║
║                           │ inactive_60_days     │  └──────────────────────┘ ║
║                           │ inactive_120_days    │                           ║
║                           └──────────────────────┘                           ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 12.2 Avatar Level Tags (4 Tags)

| Tag | Trigger | Applied | Segment Size | Primary Flow |
|-----|---------|---------|:------------:|-------------|
| `avatar_level1` | Pop-up button 1: "Talks about potty but won't actually do it" | On signup | ~35% | Welcome L1 |
| `avatar_level2` | Pop-up button 2: "Sensory issues, tried many methods" | On signup | ~40% (LARGEST) | Welcome L2 |
| `avatar_level3` | Pop-up button 3: "Non-verbal or high support needs" | On signup | ~25% | Welcome L3 |
| `avatar_general` | Pop-up button 4: "Still figuring out what's going on" | On signup | ~50% real volume | Welcome GF |

**Routing rules for avatar tags:**
- Welcome Flow: Level-specific variant (4 different flows)
- Cart/Checkout/Browse Abandonment: Cross-level ALWAYS (speed > segmentation)
- PP-Education Day 0-21: Cross-level
- PP-Extended Education Day 22+: Level-specific if tag known
- PP-Extended Upsell Day 28: Level-aware content
- Winback Path A/B: Level-specific variants
- FAQ/Objection Library: Cross-level with level-aware blocks

### 12.3 Behavioral Tags (6 Tags)

| Tag | Trigger | When Applied | Flow Impact | Exit Condition |
|-----|---------|:------------:|-------------|:--------------:|
| `welcome_completed` | Welcome Flow exit | After Welcome Flow completes | Excludes from Welcome. Unlocks PP-Extended Education. | `welcome_flow_completed = true` (permanent) |
| `welcome_completed_no_purchase` | Welcome Flow exit (no purchase) | After Welcome Flow | Routes to FAQ/Objection Library. Enables Winback B. | Purchase OR 60d inactivity |
| `post_purchase_active` | Positive engagement signals | Behavioral check | Unlocks Referral Flow at Day 30 | Engagement degrades |
| `at_risk_no_open` | 3-7 days of no opens | Engagement check | Routes to PP-Support At-Risk | Open detected OR 60d escalation |
| `inactive_60_days` | 60 days with no engagement | Engagement check | Routes to Winback A (if buyer) or Winback B (if non-buyer) | Engagement detected |
| `inactive_120_days` | 120 days with no engagement | Engagement check | Routes to Sunset Flow | Suppression from active list |

### 12.4 Purchase Tags (5 Tags)

| Tag | Trigger | Flow Impact | Upsell Path |
|-----|---------|-------------|:-----------:|
| `buyer_1pair` | Purchased 1 Pair ($34.99) | Replenishment A at Day 14. PP-Direct Upsell at Day 1-3 | → 3+3 Bundle |
| `buyer_3plus3` | Purchased 3+3 Bundle ($79.99) | Replenishment B at Day 75. PP-Extended Upsell at Day 28 | → 5+5 Bundle |
| `buyer_5plus5` | Purchased 5+5 Bundle ($119.99) | Replenishment C at Day 150. VIP consideration | → Accessory Cross-Sell |
| `repeat_buyer` | Multiple purchases | Cross-level loyalty content. Excluded from Winback A | VIP track |
| `vip_buyer` | 3+ orders | VIP treatment. Early access. Referral/Loyalty rewards | Highest-tier content |

### 12.5 Tag Interaction Matrix

```
PRIMARY TAG         │ SECONDARY TAG      │ ROUTING BEHAVIOR
────────────────────┼───────────────────┼────────────────────────────────────
avatar_level1/2/3   │ welcome_completed │ Level-specific flows activated.
                    │                   │ Welcome flow skipped.
────────────────────┼───────────────────┼────────────────────────────────────
avatar_general      │ welcome_completed │ Cross-level flows activated.
                    │                   │ General content until migration.
────────────────────┼───────────────────┼────────────────────────────────────
avatar_level1/2/3   │ inactive_60_days  │ Winback Path A — still level-specific
────────────────────┼───────────────────┼────────────────────────────────────
avatar_general      │ inactive_60_days  │ Winback Path A — cross-level
────────────────────┼───────────────────┼────────────────────────────────────
avatar_level1/2/3   │ at_risk_no_open   │ PP-Support At-Risk (cross-level)
                    │                   │ At-risk overrides level-specific
────────────────────┼───────────────────┼────────────────────────────────────
buyer_[X]           │ avatar_level1/2/3 │ Avatar = content; Transaction = timing
```

### 12.6 Custom Profile Properties

```
PROPERTY             │ TYPE    │ VALUES                       │ PURPOSE
─────────────────────┼─────────┼─────────────────────────────┼────────────────────────
avatar_level         │ string  │ "level1"/"level2"/          │ PRIMARY routing
                     │         │ "level3"/"general"           │
child_age            │ string  │ Free text (optional)         │ Content calibration
signup_source        │ string  │ "popup"/"checkout"/          │ Channel attribution
                     │         │ "referral"/"other"           │
welcome_flow_        │ boolean │ true/false (default false)   │ Gate for flows
completed            │         │                              │
last_purchase_pack_  │ string  │ "1pair"/"3+3"/"5+5"          │ Replenishment timing
size                 │         │                              │
vip_customer         │ boolean │ true/false (default false)   │ VIP routing
purchase_reason      │ string  │ Free text                    │ Zero-party data
(Phase 2+)           │         │ "gift"/"own child"/"school"  │
label_sensitive      │ boolean │ true/false                   │ Sub-Group B flag
(Phase 2+)           │         │                              │
```

(Source: 12-klaviyo-implementation-guide.md, Section 5)

---

## 13. OFFER RULES PER FLOW & PER LEVEL

### 13.1 Offer-Avatar Fit Heatmap

```
                   1 PAIR        3+3 BUNDLE     5+5 BUNDLE
                   ($34.99)      ($79.99)       ($119.99)
────────────────────────────────────────────────────────────
LEVEL 1 (Sarah)
Fit                ◐ P4 only     🟢 PRIMARY      🟡 Secondary
Conv Impact        Very Low      HIGH (15-25%)   Medium
Revenue Potential   5%           65%             12%
Urgency OK?        Low           STRONG          Moderate
Math Reframe?      N/A           ✅ Yes           ✅ Yes

LEVEL 2 (Lisa)
Fit                ◐ P4 only     🟢 PRIMARY      🟢 L2×P3 ONLY
Conv Impact        5-8%          8-15%           8-12%
Revenue Potential   3%           20%             7%
Urgency OK?        Never         Low-Moderate    Low
Math Reframe?      N/A           ⚠️ Carefully    ⚠️ Carefully

LEVEL 3 (Maria)
Fit                🟢 PRIMARY     🟡 Post-trust    ❌ NEVER push
Conv Impact        4-8%          5-10%           Low
Revenue Potential   15%          5%              1%
Urgency OK?        NEVER         NEVER           NEVER
Math Reframe?      🚫 NEVER       🚫 NEVER        🚫 NEVER

GENERAL FALLBACK
Fit                ◐ Phase 4     🟢 DEFAULT      🟡 After migration
Conv Impact        4-7%          8-12%           5-8%
Revenue Potential   2%           30%             3%
Urgency OK?        Low           Low-Medium      Medium
Math Reframe?      N/A           ✅ Yes           ✅ Yes

LEGEND: 🟢 Primary Offer   🟡 Secondary   ◐ Fallback Only   ❌ Not Used

NOTE: 3+3 Bundle dominates 10 of 16 cells and 65% of revenue.
      The 5+5 Bundle is critically underutilized in L2 × P3.
```

(Source: 06-offer-research.md, Section 6.2)

### 13.2 Offer Rules Per Level

| Rule | L1 | L2 | L3 | GF |
|------|:--:|:--:|:--:|:--:|
| Free Shipping mention | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| BESTSELLER badge | ✅ Yes | ✅ Yes | ❌ No (dignity) | ✅ Yes |
| "Buy X Get X FREE" | ✅ Yes | ✅ Yes | ❌ No (math shame) | ✅ Yes |
| Save % claim | ✅ Yes | ⚠️ Gently | 🚫 NEVER | ✅ Yes |
| Per-pair savings | ✅ Yes | ⚠️ Gently | 🚫 NEVER | ✅ Yes |
| 60-Day Guarantee | ✅ Standard | ✅ Critical | ✅ Dignity | ✅ Standard |
| Math reframe | ✅ Yes | ⚠️ Carefully | 🚫 NEVER | ✅ Yes |
| Urgency (limited time) | ✅ OK | ❌ No | 🚫 NEVER | ⚠️ Low |
| Limited stock | ✅ OK | ❌ No | 🚫 NEVER | ❌ No |
| Social proof (reviews) | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |

(Source: 06-offer-research.md, Section 7.3)

### 13.3 Offer by Flow Summary

| Flow | Primary Offer | Secondary Offer | L3-Specific | Notes |
|------|:------------:|:--------------:|:----------:|-------|
| Welcome Flow | 3+3 Bundle ($79.99) | 1 Pair ($34.99) | 1 Pair ONLY | Offer appears E3+; L1 urgency OK |
| Cart Abandonment | Cart contents + free shipping | 3+3 upsell if 1 Pair in cart | 1 Pair reminder | NO discount in E1-E2 |
| Checkout Abandonment | Checkout contents | — | Same | NO discount (high intent) |
| Browse Abandonment | 3+3 Bundle (E3 only) | — | 1 Pair | Education first; offer last |
| PP-Direct Upsell | 3+3 Bundle ($79.99) | — | N/A | Only triggered for 1-pair buyers |
| PP-Extended Upsell | Bundle upgrade | Accessories | 1 Pair→3+3 only | Level-aware content |
| Replenish A (1-pair) | 3+3 Bundle ($79.99) | — | 3+3 (post-trust) | "More pairs = consistency" |
| Replenish B (3+3) | Reorder 3+3 or 5+5 | — | — | Loyalty discount option |
| Replenish C (5+5) | Reorder 5+5 | Accessories | — | VIP-level communication |
| Winback A (post) | Reorder offer | 10% incentive (E3) | 1 Pair | Gentle re-engagement first |
| Winback B (never) | 3+3 Bundle ($79.99) | 10% incentive (E3) | 1 Pair | Objection-focused |
| FAQ/Objection Lib | 3+3 Bundle | Level-specific | 1 Pair | Objection-dependent offers |
| Referral | $10/$10 split | — | Community gift | Double-sided incentive |

### 13.4 Math Reframe Rules

| Level | Reframe OK? | Approach | Restrictions |
|-------|:----------:|----------|:------------:|
| Level 1 (Sarah) | ✅ OK | Disposable income, value framing works, Pre-K urgency | No shame framing; keep aspirational |
| Level 2 (Lisa) | ⚠️ CAREFULLY | Financial sensitivity present; "Add alongside" language mandatory | Never imply she's wasting money; never "just" or "only" |
| Level 3 (Maria) | ❌ NEVER | Medicaid reality — $34.99 is already a significant commitment | "NO MATH REFRAMES" in every L3 cell |
| General Fallback | ✅ OK | Main target for value framing; 50/50 hope/realism | Include cross-level anchors (see R1-R6) |

(Source: 06-offer-research.md, Section 4.1)

### 13.5 Offer Copy per Level — Key Differences

**L1 Offer Copy:** "The 3+3 Bundle is $79.99 — less than two months of pull-ups. One-time purchase for underwear that lasts 12+ months. And with the 60-day guarantee, you're not out anything if it doesn't work."

**L2 Offer Copy:** "Pull-ups cost roughly $876 a year. And they're blocking the body signal. The 3+3 bundle is $79.99 — try it alongside your BCBA's program. The math isn't the point. But if the math helps, the math works."

**L3 Offer Copy:** (NO MATH) "One pair is enough to start. You'll see within 10 days if your child notices the wetness signal. If not, the 60-day guarantee has you covered."

**GF Offer Copy:** Cross-level safe: "Whether your child is 3, 7, or 10 — pull-ups cost roughly $50-100+ every month. The 3+3 Bundle is $79.99. One-time. 60-day guarantee."

---

## 14. DOMAIN WARMING & SENDING SCHEDULE

### 14.1 Domain Warming Protocol

| Week | Daily Volume | Sending Cadence | Focus | Cumulative |
|:----:|:-----------:|:---------------:|-------|:---------:|
| 1 | 50-100/day | 2-3 sends/week | Transactional only (Order Confirm, Shipping) | 350-700 |
| 2 | 100-200/day | 3-4 sends/week | Add Welcome Flow (low volume start) | 1,050-2,100 |
| 3 | 200-500/day | Daily | Add recovery flows (Cart, Checkout) | 2,450-5,600 |
| 4 | 500-1,000/day | Daily | Full Phase 1 + test PP flows | 5,950-12,600 |
| 5 | 1,000-2,500/day | Daily | Scale Welcome + recovery | 12,950-30,100 |
| 6 | 2,500-5,000/day | Daily | Regular sending reached | 30,450-65,100 |

**Warming Rules:**
- Start with highest-engagement sends (transactional → Welcome → recovery)
- Monitor bounce rate: keep under 2%
- Monitor spam complaints: keep under 0.1%
- If either exceeds threshold, reduce volume by 50% for 3 days
- DMARC policy: Start at `p=none`, move to `p=quarantine` at Week 8, `p=reject` at Week 16

(Source: Layer 36 Deliverability; 12-klaviyo-implementation-guide.md, Section 14)

### 14.2 Sending Schedule — Optimal Days and Times

| Day | Best Sending Window | Notes |
|:---:|:-------------------:|-------|
| Monday | 8-10am EST | High open rates (60-70% for transactional, 40-50% for Welcome) |
| Tuesday | 10am-12pm EST | Peak engagement day |
| Wednesday | 8-10am EST | Stable open rates |
| Thursday | 8-10am EST | Good for educational content |
| Friday | 8-9am EST | Lower afternoon engagement |
| Saturday | 9-11am EST | Weekend parents — lower but engaged |
| Sunday | 7-9pm EST | Evening check — higher click rates |

**Send Time Recommendations by Flow:**

| Flow Type | Best Day(s) | Best Time | Rationale |
|-----------|:----------:|:--------:|-----------|
| Transactional (Order Conf, Ship) | Any | Immediate | Expectation management |
| Recovery (Cart, Checkout) | Mon-Thu | 8-10am | Highest re-engagement |
| Welcome Flow | Mon-Sat | 8-10am | Maximizes opens during evaluation |
| Education (PP, FAQ) | Tue-Thu | 10am-12pm | Reading time required |
| Replenishment | Tue, Thu | 8-10am | Action-oriented |
| Winback/Sunset | Tue, Thu | 10am-12pm | Consideration requires time |
| Referral | Wed, Sat | 10am-12pm | Social-sharing mindset |

### 14.3 Sender Configuration

```
FROM:      "Lena from BrightKidCo" <support@brightkidco.com>
REPLY-TO:  support@brightkidco.com
SENDING:   send.brightkidco.com (subdomain)
TRACKING:  click.brightkidco.com → dct.klaviyodns.com

TRANSACTIONAL: orders@send.brightkidco.com (order confirmations)
MARKETING:     hello@send.brightkidco.com (promotional sends)

RULE: Always use "Lena from BrightKidCo" as from name. Never Mary S.
      The founder (Mary S.) appears only in dedicated flow (Flow 11).
```

(Source: 12-klaviyo-implementation-guide.md, Section 2.1)

### 14.4 DNS Records

```
RECORD          │ TYPE  │ VALUE
────────────────┼───────┼────────────────────────────────────────
SPF TXT         │ TXT   │ v=spf1 include:spf.klaviyo.com ~all
DKIM CNAME 1   │ CNAME │ s1._domainkey.send.brightkidco.com →
                │       │   s1._domainkey.klaviyo.com
DKIM CNAME 2   │ CNAME │ s2._domainkey.send.brightkidco.com →
                │       │   s2._domainkey.klaviyo.com
DMARC TXT       │ TXT   │ v=DMARC1; p=none; rua=mailto:dmarc@
                │       │ → Upgrade to p=quarantine → p=reject
TRACKING CNAME  │ CNAME │ click.brightkidco.com → dct.klaviyodns.com
```

(Source: 12-klaviyo-implementation-guide.md, Section 2.2)

---

## 15. METRICS DASHBOARD — SUCCESS CRITERIA PER FLOW

### 15.1 Flow-Level KPI Targets

| Flow | Open Rate | Click Rate | Conversion | Unsub Rate | Recovery/Conversion Rate |
|:----:|:--------:|:----------:|:----------:|:---------:|:------------------------:|
| 01 Welcome | 40-60% (E1) → 20-30% (E8) | 5-15% | 8-15% overall | <0.5% | 15-25% (L1×P2) |
| 02 Cart | 35-50% | 8-15% | — | <0.5% | 10-15% (E1-E3 combined) |
| 03 Checkout | 40-55% | 10-20% | — | <0.3% | 10-20% (E1-E2 combined) |
| 04 Browse | 25-35% | 3-8% | — | <0.3% | 5-8% (E1-E3 combined) |
| 05 Order Confirm | 60-70% | 15-25% | N/A | <0.1% | N/A (transactional) |
| 06 Shipping | 55-65% | 10-20% | N/A | <0.1% | N/A (transactional) |
| 07 Out for Delivery | 50-60% | 8-15% | N/A | <0.1% | N/A (optional) |
| 08 Arrived & Welcome | 45-55% | 10-18% | N/A | <0.2% | N/A (engagement) |
| 09 PP-Direct Upsell | 30-40% | 5-10% | — | <0.4% | 2-5% upsell rate |
| 10 PP-Level Detect | 25-35% | 8-15% | — | <0.3% | 40-50% migration |
| 11 Mary S. Story | 35-45% | 5-10% | N/A | <0.3% | Brand lift (qualitative) |
| 12 PP-Educ D0-21 | 30-45% | 5-12% | — | <0.4% | 2-5% upsell |
| 13 PP-Ext Upsell | 25-35% | 4-10% | — | <0.5% | 5-10% (L2 best) |
| 14 PP-Mid Check-In | 30-40% | 5-12% | — | <0.3% | 3-5% retention |
| 15 PP-Ext Ed | 25-40% | 4-10% | — | <0.5% | 3-10% (L1 best) |
| 16 At-Risk | 15-25% | 2-5% | — | <2% | 2-4% re-engagement |
| 17 Replenish A | 25-35% | 5-10% | — | <0.4% | 5-10% reorder |
| 18 Replenish B | 25-35% | 4-8% | — | <0.4% | 4-8% reorder |
| 19 Replenish C | 25-35% | 3-6% | — | <0.3% | 3-6% reorder |
| 20 Review Request | 20-30% | 3-7% | — | <0.3% | 1-3% review submission |
| 21 Winback A | 15-25% | 2-5% | — | <1% | 2-5% (L3 best) |
| 22 Winback B | 10-20% | 2-4% | — | <1% | 2-4% (L2 best) |
| 23 Sunset | 5-10% | 1-2% | — | <3% | N/A (list hygiene) |
| 24 FAQ/Objection | 20-30% | 3-8% | — | <0.5% | 4-8% (L2 best) |
| 25 Referral | 20-30% | 3-7% | — | <0.3% | 2-4% referral signups |

**Health Indicators (Overall Program):**
- List churn rate: <5% monthly
- Spam complaint rate: <0.1%
- Bounce rate: <2%
- Overall conversion (Welcome → Purchase): 8-12%
- Revenue per email: Track monthly trend

### 15.2 Dashboard Metrics to Track

```
BRIGHTKIDCO EMAIL DASHBOARD — KEY METRICS
═══════════════════════════════════════════

DAILY:
├── Sends (total per flow)
├── Opens (rate per flow)
├── Clicks (rate per flow)
├── Unsubscribes (rate per flow)
├── Spam complaints (rate — alert at >0.1%)
├── Bounces (rate — alert at >2%)
├── Revenue attributed (Klaviyo tracking)
└── Conversions (flow-attributed orders)

WEEKLY:
├── Flow performance (all 25 flows)
├── List growth (new vs churned)
├── Engagement trend (7-day rolling)
├── Migration rate (GF → level)
├── Replenishment rate (per cohort)
├── Winback re-engagement rate
└── Domain health (DMARC, DKIM, SPF pass rates)

MONTHLY:
├── Revenue per flow
├── Revenue per segment (L1/L2/L3/GF)
├── Offer performance (1 Pair vs 3+3 vs 5+5)
├── Cohort analysis (30/60/90-day post-purchase)
├── Unsubscribe reasons (from feedback)
├── A/B test results
├── Content audit (top/bottom performaning emails)
└── Phase deployment checklist
```

(Source: Layer 37 Klaviyo Setup; 12-klaviyo-implementation-guide.md, Section 16)

---

## 16. APPENDICES

### 16.1 Source Document Cross-Reference

| Flow # | Flow Name | Primary Source | Secondary Source | Tonality Source |
|--------|-----------|----------------|------------------|-----------------|
| 01 | Welcome Flow | Layer 16, Flow 01 | GIULIANO §3 | Layer 17, §10 |
| 02 | Cart Abandonment | Layer 16, Flow 02 | GIULIANO §2.2 | Layer 17, §12 |
| 03 | Checkout Abandonment | Layer 16, Flow 03 | GIULIANO §2.2 | Layer 17, §12 |
| 04 | Browse Abandonment | Layer 16, Flow 04 | GIULIANO §2.2 | Layer 17, §12 |
| 05 | Order Confirmation | Layer 16, Flow 05 | GIULIANO §2.2 | Layer 17, §12 |
| 06 | Shipping Notification | Layer 16, Flow 06 | GIULIANO §2.2 | Layer 17, §12 |
| 07 | Out for Delivery | Layer 16, Flow 07 | GIULIANO §2.2 | Layer 17, §12 |
| 08 | Arrived & Welcome | Layer 16, Flow 08 | GIULIANO §2.2 | Layer 17, §12 |
| 09 | PP-Direct Upsell | Layer 16, Flow 09 | GIULIANO §2.2 | Layer 17, §12 |
| 10 | PP-Level Detection | Layer 16, Flow 10 | Layer 19 Migration | Layer 18 |
| 11 | PP-Mary S. Story | Layer 16, Flow 11 | GIULIANO §3.4 | Layer 17, §12 |
| 12 | PP-Education D0-21 | Layer 16, Flow 12 | Synthesis 01 §7 | Layer 17, §12 |
| 13 | PP-Extended Upsell | Layer 16, Flow 13 | Synthesis 06 §7 | Layer 17, §12 |
| 14 | PP-Mid Check-In | Layer 16, Flow 14 | Synthesis 01 §5 | Layer 17, §12 |
| 15 | PP-Extended Education | Layer 16, Flow 15 | GIULIANO §4 | Layer 17, §10 |
| 16 | PP-Support At-Risk | Layer 16, Flow 16 | Layer 14 Frequency | Layer 17, §12 |
| 17-19 | Replenishment A/B/C | Layer 16, Flows 17-19 | Synthesis 06 §7.1 | Layer 17, §12 |
| 20 | Review Request | Layer 16, Flow 20 | GIULIANO §2.2 | Layer 17, §12 |
| 21-22 | Winback A/B | Layer 16, Flows 21-22 | Layer 14 Frequency | Layer 17, §11 |
| 23 | Sunset | Layer 16, Flow 23 | Layer 36 Deliverability | Layer 17, §12 |
| 24 | FAQ/Objection Lib | Layer 16, Flow 24 | GIULIANO §3 | Layer 17, §11 |
| 25 | Referral Flow | Layer 16, Flow 25 | Synthesis 06 §9 | Layer 17, §12 |

### 16.2 Implementation Sequence — Construction Order

**Week 1-2:** Build in this exact order:
1. Welcome Flow (4 variants) — the frame
2. Order Confirmation — transactional baseline
3. Cart Abandonment — recovery foundation
4. Checkout Abandonment — recovery foundation
5. Shipping Notification — transactional support
6. Arrived & Welcome — post-purchase bridge

**Week 3-4:**
7. PP-Level Detection — migration infrastructure
8. PP-Direct Upsell — upsell foundation
9. Out for Delivery — nice-to-have transactional
10. Browse Abandonment — recovery expansion (Phase 2 territory, build early)

**Week 5-8:**
11-14. PP-Education D0-21, PP-Ext Upsell, PP-Mid Check-In, PP-Mary S. Story
15-19. Replenish A/B/C, Review Request
20. Winback Path A

**Week 9-12:**
21. PP-Extended Education (20 emails — largest content lift)
22. PP-Support At-Risk
23. Winback Path B
24. FAQ/Objection Library
25. Referral Flow
26. Sunset

### 16.3 Content Production Estimate

| Flow # | Flow Name | Copy Units | Est. Writing Time (hours) | Level of Effort |
|--------|-----------|:---------:|:-------------------------:|:---------------:|
| 01 | Welcome Flow | 32 | 24 | 🔴 HIGHEST |
| 02-04 | Recovery (3 flows) | 8 | 4 | 🟡 MEDIUM |
| 05-08 | Transactional (4 flows) | 4 | 2 | 🟢 LOW |
| 09 | PP-Direct Upsell | 2 | 1 | 🟢 LOW |
| 10 | PP-Level Detection | 1 | 1 | 🟢 LOW |
| 11 | PP-Mary S. Story | 1 | 1 | 🟢 LOW |
| 12 | PP-Education D0-21 | 4 | 4 | 🟡 MEDIUM |
| 13 | PP-Extended Upsell | 3 | 2 | 🟡 MEDIUM |
| 14 | PP-Mid Check-In | 3 | 2 | 🟢 LOW |
| 15 | PP-Extended Education | 20 | 20 | 🔴 HIGHEST |
| 16 | PP-Support At-Risk | 4 | 2 | 🟡 MEDIUM |
| 17-19 | Replenishment (3 flows) | 7 | 3 | 🟢 LOW |
| 20 | Review Request | 2 | 1 | 🟢 LOW |
| 21-22 | Winback (2 flows) | 24 | 12 | 🔴 HIGH |
| 23 | Sunset | 2 | 1 | 🟢 LOW |
| 24 | FAQ/Objection Library | 6 | 6 | 🟡 MEDIUM |
| 25 | Referral Flow | 3 | 1 | 🟢 LOW |
| | **TOTAL** | **~114** | **~85 hours** | |

### 16.4 Klaviyo Technical Reference

**Base URL:** https://a.klaviyo.com/api/
**Auth Header:** Authorization: Klaviyo-API-Key {KEY}
**Revision:** revision: 2025-01-15
**Flow Creation:** POST /api/flows (draft status first)
**Trigger Types:** "metric" (event-based), "list" (subscription-based)
**Profile Ops:** POST /api/profiles, POST /api/profile-import

**Key Event Names for Flow Triggers:**
- `Subscribed to List` — List subscription
- `Placed Order` — Checkout completion
- `Fulfilled Order` — Order marked shipped
- `Added to Cart` — Custom snippet (see 12-klaviyo-implementation-guide.md §3.2)
- `Started Checkout` — Klaviyo native checkout start
- `Viewed Product` — Product page visit
- `Ordered Product` — Specific SKU purchased
- `Unsubscribed` — Unsubscribe event

### 16.5 Revision History

| Version | Date | Author | Changes |
|:-------:|:----:|--------|---------|
| 1.0 | May 28, 2026 | Synthesis Agent | Initial creation (68KB — truncated at Flow 03) |
| 2.0 | May 28, 2026 | Synthesis Agent | Complete rebuild. All 25 flows defined. All 16 sections complete. Total ~150KB+. |

---

*End of Document — BrightKidCo Email Sequence Framework v2.0*
*25 flows | ~114 emails | 3 phases | 4 avatar levels*
*All 16 sections complete*
