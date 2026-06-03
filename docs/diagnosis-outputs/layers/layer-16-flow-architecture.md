# LAYER 16 R5: Flow Architecture — Synthesis
## BrightKidCo Complete Email Flow System: 25 Flows, 110+ Emails, 3 Phases

**Synthesized from:** DOC1-MASTER-FOUNDATION.txt, DOC6-USAGE-GUIDE.txt, R1 Client Files, R2 Skill Loading, R3 Wiki Extraction, WhatsApp Chat with Giuliano
**Date:** 2026-05-25

---

## EXECUTIVE SUMMARY

BrightKidCo's email ecosystem consists of 25 automated flows containing 110+ unique emails, deployed across 3 phases over 6 months. The system serves parents of autistic children (ages 3-10+) navigating potty training, segmented into 4 avatar levels with distinct emotional states and tonality requirements.

| Phase | Timing | Flows | Emails | Purpose |
|-------|--------|-------|--------|---------|
| Phase 1 | Months 1-2 | 9 | 43 | Launch-Ready — must exist before scaling |
| Phase 2 | Months 3-4 | 8 | 34 | High-Value — after Phase 1 data flows in |
| Phase 3 | Months 5-6 | 8 | 33 | Nice-to-Have — when team is established |
| **TOTAL** | **6 months** | **25** | **110+** | |

---

## SYSTEM ARCHITECTURE OVERVIEW

### Customer Lifecycle Stages

```
Anonymous Visitor
       |
       v
Email Subscriber ──────┬──── Welcome Flow (8 emails x 4 levels)
       |                ├──── Site Abandonment (1 email)
       |                v
       |         Product Browser ── Browse Abandonment (3 emails)
       |                |
       |                v
       |         Cart Adder ──────── Cart Abandonment (3 emails)
       |                |
       |                v
       |         Checkout Starter ── Checkout Abandonment (2 emails)
       |                |
       v                v
  First-Time Buyer ────┬──── Order Confirmation (1 email)
       |               ├──── Shipping Notification (1 email)
       |               ├──── Out for Delivery (1 email, optional)
       |               ├──── Arrived & Welcome (1 email)
       |               ├──── PP-Direct Upsell (2 emails)
       |               ├──── PP-Level Detection (1 email)
       |               ├──── PP-Mary S. Story (1 email)
       |               ├──── PP-Education Day 0-21 (4 emails)
       |               ├──── PP-Extended Upsell (3 emails)
       |               ├──── PP-Mid Check-In (3 emails)
       |               ├──── PP-Extended Education (5 emails x 4 levels)
       |               └──── PP-Support At-Risk (4 emails)
       |
       v
  Repeat Buyer ────────┬──── Replenishment Path A (1-pair, 3 emails)
       |               ├──── Replenishment Path B (3+3, 2 emails)
       |               └──── Replenishment Path C (5+5, 2 emails)
       |
       v
  VIP / Advocate ──────┬──── Review Request (2 emails)
                       ├──── Referral Flow (3 emails)
                       └──── Winback Path A (3 emails x 4 levels)
                       
  Never-Bought ────────┬──── Winback Path B (3 emails x 4 levels)
  Subscriber            ├──── FAQ/Objection Library (6 emails)
                       └──── Sunset Flow (2 emails)
```

### Recovery Funnel Hierarchy (by intent level)

```
Site Abandonment (lowest intent — no product view)
       |
       v
Browse Abandonment (mid intent — viewed product)
       |
       v
Abandoned Cart (high intent — added to cart)
       |
       v
Abandoned Checkout (highest intent — started checkout)
```

Each level converts higher and uses more aggressive recovery timing.

---

## FLOW CONNECTION MAP

Flows are not isolated — subscribers move between them based on behavior:

```
POP-UP SIGNUP
     |
     v
[Welcome Flow L1/L2/L3/Gen] ──(no purchase after 8 emails)──> [FAQ/Objection Library]
     |                                                              |
     |(purchases)                                                   v
     v                                                         [Winback Path B]
[Order Confirmation] ──> [Shipping] ──> [Out for Delivery] ──> [Arrived & Welcome]
     |                                                                |
     v                                                                v
[PP-Direct Upsell] ──> [PP-Level Detection] ──> [PP-Mary S. Story]
                              |
                              v
                    [PP-Education Day 0-21] ──> [PP-Extended Upsell]
                              |
                              v
                    [PP-Mid Check-In] ──> [Review Request] ──> [Referral Flow]
                              |
                              v
                    [Replenishment A/B/C] ──(inactive 90 days)──> [Winback Path A]
                                                                        |
                                                                        v
                                                              (inactive 120 days)
                                                                        |
                                                                        v
                                                                   [Sunset Flow]

BROWSE (no cart) ──> [Browse Abandonment]
CART (no checkout) ──> [Cart Abandonment]
CHECKOUT (no purchase) ──> [Checkout Abandonment]
NO OPENS 3-7 days ──> [PP-Support At-Risk]
```

---

## AVATAR SEGMENTATION & TONALITY MATRIX

### Level Definitions

| Level | Profile | Child Age | Audience % | Hope Level | Dominant Phase |
|-------|---------|-----------|------------|------------|----------------|
| Level 1 | Verbal, "almost trained", Pre-K driven | 3-5 yrs | ~35% | 70% Hope / 30% Realism | Phase 2 |
| Level 2 | Mixed verbal, sensory dominant, BCBA context | 5-7 yrs | ~40% (LARGEST) | 40% Hope / 60% Realism | Phase 3 |
| Level 3 | Non-verbal, high support needs, dignity-first | 6-10+ yrs | ~25% | 20% Hope / 80% Realism | Phase 4 |
| General | Cross-level, "still figuring out" | 3-10+ | ~50% signup volume | 50/50 Hope / Realism | Mixed |

### Which Flows Are Level-Segmented vs Cross-Level

| Type | Flows |
|------|-------|
| **Level-Segmented (4 variants each)** | Welcome Flow, PP-Extended Education, FAQ/Objection Library, Winback Path A, Winback Path B |
| **Cross-Level (DOC 5)** | Cart, Checkout, Browse, Order Confirmation, Shipping, Out for Delivery, Arrived & Welcome, PP-Direct Upsell, PP-Level Detection, PP-Mary S. Story, PP-Education Day 0-21, PP-Extended Upsell, PP-Mid Check-In, PP-Support At-Risk, Replenishment A/B/C, Review Request, Sunset, Referral |

### Segmentation Rule

- Before level tag is known → Cross-Level (DOC 5)
- After level tag is known → Level-specific (DOC 2/3/4)
- For high-velocity flows (Cart/Checkout) → Cross-Level even if tag known (speed > segmentation)

### Pop-Up Self-Selection (Entry Point)

| Option | Description | Tag |
|--------|-------------|-----|
| 1 | "Talks about potty but won't actually do it" | avatar_level1 |
| 2 | "Sensory issues, tried many methods" | avatar_level2 |
| 3 | "Non-verbal or high support needs" | avatar_level3 |
| 4 | "Still figuring out what's going on" | avatar_general |

---

## PHASE 1: LAUNCH-READY (Months 1-2)
### 9 Flows, 43 Unique Emails

These flows MUST exist before BrightKidCo email marketing is scaled.

---

### FLOW 01: Welcome Flow (CONSOLIDATED Discount + Education)
**The highest-priority flow — all subscribers enter here first.**

| Property | Value |
|----------|-------|
| Trigger | Pop-up signup with level tag |
| Emails | 8 per level variant = 32 total (8 × 4 levels) |
| Timing | Over 21 days |
| Segmentation | 4 level variants (avatar_level1, avatar_level2, avatar_level3, avatar_general) |
| Exit Conditions | Made a purchase, Unsubscribed, Already in higher-priority flow |
| Priority | HIGHEST |
| Primary Doc | DOC 2/3/4/5 (per level) + DOC 1 (foundation) |

#### Welcome Flow Timing Map

| Email | Day | Goal | Tipping Point |
|-------|-----|------|---------------|
| E1 | Day 0 | Welcome + code delivery (WELCOME10) | Recognizes her problem in the mail |
| E2 | Day 1 | Mechanism explanation ("It's not the method, it's a sensory gap") | "Holy shit, that explains it" |
| E3 | Day 3 | Last day / decision time + 60-day guarantee | 60-day guarantee + permission not to buy |
| E4 | Day 7 | Education / "You didn't fail" reframe | "You didn't fail" reframe |
| E5 | Day 14 | Slow acceptance / wisdom audience | Deeper mechanism education |
| E6 | Day 16 | Continued nurture | Social proof + peer stories |
| E7 | Day 19 | Final conversion push | Permission-not-to-buy energy |
| E8 | Day 21 | Last touch before flow exit | Gentle close, door stays open |

#### Welcome Flow 4-Level Variants

**Level 1 (DOC 2) — 70% Hope / 30% Realism:**
- Voice: Education-oriented, gentle, Pre-K driven
- Hook: "He's almost 3 and shows zero interest in the potty."
- Mechanism focus: Sensory gap explanation with hope framing
- Success metric: Mini-wins (first awareness signal)

**Level 2 (DOC 3) — 40% Hope / 60% Realism:**
- Voice: Science-first, mechanism specificity, BCBA-respectful
- Hook: "I used the Oh Crap method which totally stressed her and me out."
- Mechanism focus: Kelly Mahler interoception research, complements BCBA
- Success metric: Sensory awareness development over weeks

**Level 3 (DOC 4) — 20% Hope / 80% Realism:**
- Voice: Dignity-first, respectful, no urgency, no pressure
- Hook: "He's 7 and still in pull-ups. I've given up trying."
- Mechanism focus: Late-trainer stories (Maureen Bennie's son was 9.5)
- Success metric: Any sensory awareness, regardless of timeline

**General (DOC 5) — 50/50 Hope / Realism:**
- Voice: "Whether...Or...If..." language pattern, symptom-first
- Hook: Cross-level recognition anchors (3-5 scenarios per mail)
- Mechanism focus: Migration anchors to push toward level self-identification
- Success metric: Level self-identification + first purchase

#### Welcome Flow Klaviyo Architecture

```
[Trigger: Form Submit + avatar_level tag]
        |
        v
  ┌──────────────┐
  │  Welcome E1   │  ← Immediate after signup
  │  Welcome +    │
  │  Code (WELCOME10)
  └──────┬───────┘
         |
         v
  ┌──────────────────────┐
  │  Condition: Has       │
  │  Placed Order?        │
  └──────┬───────┬───────┘
        YES      NO
         |        |
         v        v
      (Exit)   ┌──────────────┐
               │  Welcome E2   │  ← Day 1
               │  Mechanism    │
               └──────┬───────┘
                      |
                      v
               ┌──────────────┐
               │  Welcome E3   │  ← Day 3
               │  Decision +   │
               │  60-day       │
               │  guarantee    │
               └──────┬───────┘
                      |
                      v
               ┌──────────────┐
               │  Welcome E4   │  ← Day 7
               │  "You didn't  │
               │  fail" reframe│
               └──────┬───────┘
                      |
                      v
               ┌──────────────┐
               │  E5-E8        │  ← Days 14-21
               │  Slow nurture │
               └──────────────┘
```

#### Flow Filters
- Placed Order zero times since starting this flow
- Started Checkout zero times since starting this flow
- Not been in this flow in last 90 days

#### Source References
- DOC1 §17 (lines 1074-1079), §18 (lines 1220-1239)
- DOC6 §3 (lines 344-385), §7 (lines 714-900)

---

### FLOW 02: Cart Abandonment Flow

| Property | Value |
|----------|-------|
| Trigger | Cart Abandoned (Klaviyo — requires custom "Added to Cart" snippet) |
| Emails | 3 |
| Timing | E1 at 1 hour, E2 at Day 1, E3 at Day 3 |
| Segmentation | Cross-level (DOC 5) |
| Exit Conditions | Made a purchase, Unsubscribed |
| Primary Doc | DOC 5 + DOC 1 |

#### Email Sequence

| Email | Timing | Goal | Tipping Point |
|-------|--------|------|---------------|
| E1 | Hour 1 | Mechanism reminder + reassurance | Recognizes the sensory gap |
| E2 | Day 1 | Specific reminder with stories | Peer stories + product value |
| E3 | Day 3 | 60-day guarantee, soft permission not to buy | Trust through permission |

#### Cart Recovery Logic (Dynamic Content)

| Cart Contents | Upsell Strategy |
|---------------|-----------------|
| 1 Pair in cart | Upsell to 3+3 ("most parents need more") |
| 3+3 in cart | Reminder + Free Shipping emphasize |
| 5+5 in cart | Total value emphasize ($119.99 vs. $34.99 × 10) |

#### Conversion Levers
- Lever 1: "It's not the method, it's a sensory gap"
- Lever 2: "Pull-ups make it worse" (mechanism specificity)
- Lever 3: 60-day guarantee (risk reversal)

#### Flow Filters
- Placed Order zero times since starting this flow
- Started Checkout zero times since starting this flow
- Not been in this flow in last 10 days

#### Technical Note
Klaviyo's default "Abandoned Cart" is actually checkout abandonment (fires on "Started Checkout"). True cart abandonment requires a custom "Added to Cart" Shopify snippet. Both flows coexist.

#### Source
- DOC1 §17 (lines 1080-1084), §24 (lines 1590-1600)

---

### FLOW 03: Checkout Abandonment Flow

| Property | Value |
|----------|-------|
| Trigger | Started Checkout Abandoned (Klaviyo native) |
| Emails | 2 |
| Timing | E1 at 1 hour, E2 at Day 1 |
| Segmentation | Cross-level (DOC 5) |
| Exit Conditions | Made a purchase, Unsubscribed |
| Primary Doc | DOC 5 + DOC 1 |

#### Email Sequence

| Email | Timing | Goal | Tone |
|-------|--------|------|------|
| E1 | Hour 1 | Friendly reminder + answer last doubts | "Friendly Reminder + Permission Not To Buy" |
| E2 | Day 1 | Final nudge with 60-day guarantee | Decision-respect, "you decide" |

#### Tonality (Conversion Moment Stage)
- Energy: "If today isn't right, that's a real answer"
- Do: Reduce friction, offer guarantee, soft permission
- Don't: Pressure tactics, fake scarcity, guilt-tripping

#### Flow Filters
- Placed Order zero times since starting this flow
- Not been in this flow in last 5 days

#### Source
- DOC1 §17 (lines 1085-1089)

---

### FLOW 04: Browse Abandonment Flow

| Property | Value |
|----------|-------|
| Trigger | Viewed Product, no Cart created (Klaviyo) |
| Emails | 3 (optional: 5 with discount emails) |
| Timing | E1 at 1-2 hours, E2 at Day 1, E3 at Day 2 |
| Segmentation | Cross-level (DOC 5) |
| Exit Conditions | Created cart, Made a purchase, Unsubscribed |
| Primary Doc | DOC 5 + DOC 1 |

#### Email Sequence

| Email | Timing | Goal | Content |
|-------|--------|------|---------|
| E1 | 1-2 hrs | Reminder | "See something you liked?" + dynamic product block |
| E2 | Day 1 | Trust building | Risk reversals (guarantees, shipping, refunds), recommended products |
| E3 | Day 2 | Social proof | Testimonials, review highlights, customer count |
| E4 (opt) | Day 3 | Offer | Small discount or incentive |
| E5 (opt) | Day 4 | Urgency | "Last chance" on offer |

#### Flow Filters
- Added to Cart zero times since starting this flow
- Placed Order zero times since starting this flow
- Checkout Started zero times since starting this flow
- Not been in this flow in last 15-30 days

#### Source
- DOC1 §17 (lines 1090-1094)

---

### FLOW 05: Order Confirmation Flow

| Property | Value |
|----------|-------|
| Trigger | Order Placed (Shopify → Klaviyo) |
| Emails | 1 (with cross-sell block) |
| Timing | Immediate |
| Segmentation | Cross-level (DOC 5) |
| Emotional State | Relieved, committed |
| Tipping Point | Clarity about delivery, what's coming |

#### Content
- Thank you + order details + delivery estimate (10 days standard)
- Soft cross-sell block (Wash Bag, Mattress Protector)
- Set expectations for what's coming

#### Tonality (Transactional Stage)
- Tone: Warm + Functional
- Language: Direct, informative, branded
- Don't: Too much sales talk

#### Source
- DOC1 §17 (lines 1096-1100), §24 (lines 1602-1606)

---

### FLOW 06: Shipping Notification Flow

| Property | Value |
|----------|-------|
| Trigger | Order Fulfilled |
| Emails | 1 |
| Timing | When order ships |
| Segmentation | Cross-level (DOC 5) |

#### Content
- Tracking information
- Delivery expectations (10 days, various US-based carriers — do NOT name specific carrier)
- "What to expect" anticipation builder

#### Source
- DOC1 §17 (lines 1102-1106)

---

### FLOW 07: Out for Delivery Flow (Optional)

| Property | Value |
|----------|-------|
| Trigger | Carrier update "Out for Delivery" |
| Emails | 1 (optional) |
| Timing | When carrier reports out for delivery |
| Segmentation | Cross-level (DOC 5) |

#### Content
- Build anticipation for delivery
- Prep tips: "Open the box together — let your kid touch it first"

#### Source
- DOC1 §17 (lines 1107-1111)

---

### FLOW 08: Arrived & Welcome Flow

| Property | Value |
|----------|-------|
| Trigger | Carrier update "Delivered" |
| Emails | 1 (with massive upsell) |
| Timing | When carrier reports delivered |
| Segmentation | Cross-level (DOC 5) |
| Emotional State | Anticipation peak |
| Tipping Point | "Open box together" — sensory prep |

#### Content
- Welcome new customer to the family
- Sensory prep tips: "Open the box together — let your kid touch it first. Sensory familiarity helps."
- Massive upsell block
- Set realistic Week-1 expectations

#### Tonality (Post-Purchase Early Stage)
- Tone: Warm + Reassurance + Education
- Language: "Here's what to expect"
- Energy: Welcome to the family

#### Source
- DOC1 §17 (lines 1112-1116), §24 (lines 1610-1612)

---

### FLOW 09: Post-Purchase Direct Upsell Flow

| Property | Value |
|----------|-------|
| Trigger | Order Placed + Day 1-3 |
| Emails | 2 (Wash Bag + Mattress Protector) |
| Timing | E1 at Day 1, E2 at Day 3 |
| Segmentation | Cross-level (DOC 5) |

#### Email Sequence

| Email | Timing | Product | Social Proof |
|-------|--------|---------|--------------|
| E1 | Day 1 | Wash Bag | "73% of parents add these" |
| E2 | Day 3 | Mattress Protector | "Makes nighttime training easier" |

#### Post-Purchase Upsell Logic

| Buyer Type | Upgrade Path |
|------------|--------------|
| 1-Pair buyer | 3+3 Upgrade Path (Replenishment) |
| 3+3 buyer | 5+5 Upgrade Path |
| 5+5 buyer | Accessory Cross-Sell (Wash Bag, Mattress, etc.) |

#### Source
- DOC1 §17 (lines 1117-1122), §24 (lines 1607-1609)

---

### FLOW 10 (renumbered): Post-Purchase Level-Detection Mail

| Property | Value |
|----------|-------|
| Trigger | Order Placed + Day 14 |
| Emails | 1 |
| Segmentation | Cross-level (asks level) |
| Filter | avatar_level = unknown (General Fallback customers) |

#### Mechanism
Email with 4 re-selection buttons:
- Click L1 button → migrates to avatar_level1
- Click L2 button → migrates to avatar_level2
- Click L3 button → migrates to avatar_level3
- No click → stays avatar_general

#### Purpose
Re-classify General Fallback customers into specific level segments for Phase 2+ level-specific flows.

#### Source
- DOC1 §17 (lines 1132-1137), §19 (lines 1328-1332)

---

### PHASE 1 IMPLEMENTATION ORDER

| Priority | Flow | Rationale |
|----------|------|-----------|
| 1 | Welcome Flow (all 4 variants) | Highest priority — all subscribers enter here |
| 2 | Cart + Checkout Abandonment | Immediate conversion lift |
| 3 | Order Confirmation + Shipping + Arrived | Customer expects these (transactional) |
| 4 | Post-Purchase Direct Upsell | Parallel to delivery, high-ROI |
| 5 | Post-Purchase Level-Detection | Can also come later, enables Phase 2 segmentation |

### PHASE 1 EMAIL COUNT VERIFICATION

| Flow | Emails | Calculation |
|------|--------|-------------|
| Welcome Flow | 32 | 8 emails × 4 level variants |
| Cart Abandonment | 3 | |
| Checkout Abandonment | 2 | |
| Order Confirmation | 1 | |
| Shipping Notification | 1 | |
| Out for Delivery | 1 | (optional) |
| Arrived & Welcome | 1 | |
| PP-Direct Upsell | 2 | |
| PP-Level Detection | 1 | |
| **TOTAL** | **43** | (44 with optional Out for Delivery) |

---

## PHASE 2: HIGH-VALUE (Months 3-4)
### 8 Flows, 34 Unique Emails

These flows deploy after Phase 1 runs and data flows in.

---

### FLOW 11: Post-Purchase Mary S. Story Flow

| Property | Value |
|----------|-------|
| Trigger | Order Placed + Day 3 |
| Emails | 1 |
| Segmentation | Cross-level (DOC 5) |
| Voice | Mary S. (Founder) — NOT Lena |

#### Purpose
Introduce founder story, brand origin, "why we built this."

#### Critical Rule
Mary S. does NOT appear in Phase 1. This is the ONLY place founder voice appears in regular flows. All other emails use Lena voice.

#### Source
- DOC1 §14 (lines 946-958), §17 (lines 1123-1127)

---

### FLOW 12: Post-Purchase Education Day 0-21 Flow

| Property | Value |
|----------|-------|
| Trigger | Order Placed |
| Emails | 4 |
| Timing | Days 0-21 post-purchase |
| Segmentation | Cross-level (DOC 5) |

#### Emotional State Journey

| Period | Emotional State | Mail Focus |
|--------|----------------|------------|
| Day 0-7 | Hoping, observing, vulnerable | Set realistic Week-1 expectations |
| Day 7-21 | Some progress or frustration | Mini-wins acknowledgment, troubleshooting |

#### Content Arc
1. "Here's what to expect this week" (expectation setting)
2. "Week 1 plateau is real. Hold the line." (patience coaching)
3. Mini-wins celebration ("Look at the wet spot for the first time")
4. Troubleshooting + "It's normal" reassurance

#### Tonality (Post-Purchase Mid Stage)
- Tone: Realistic + Patient + "It's normal"
- Language: "Week 1 plateau is real. Hold the line."
- Energy: Coach + cheerleader

#### Source
- DOC1 §17 (lines 1128-1132), §24 (lines 1614-1627)

---

### FLOW 13: Post-Purchase Extended Upsell Flow

| Property | Value |
|----------|-------|
| Trigger | Day 28 + level tag |
| Emails | 3 |
| Segmentation | Level-aware |

#### Purpose
Extended upsell sequence with level-specific targeting after initial onboarding period.

#### Source
- DOC1 §17 (lines 1139-1143)

---

### FLOW 14: Post-Purchase Mid Check-In Flow

| Property | Value |
|----------|-------|
| Trigger | Day 30-60 |
| Emails | 3 |
| Segmentation | Cross-level (DOC 5) |
| Emotional State | Trust building or considering refund |
| Tipping Point | Level-specific support kicks in |

#### Purpose
Check in on customer progress, provide coaching, celebrate mini-wins, prevent refund.

#### Source
- DOC1 §17 (lines 1144-1148), §24 (lines 1625-1627)

---

### FLOW 15: Replenishment Path A (1-Pair Buyer)

| Property | Value |
|----------|-------|
| Trigger | 1-pair order + Day 14 |
| Emails | 3 |
| Segmentation | Cross-level (DOC 5) |
| Upgrade Path | 1-Pair → 3+3 Bundle |

#### Purpose
Upgrade 1-pair buyers to 3+3 bundle. Timing: 14 days after purchase (before pair wears out).

#### Source
- DOC1 §17 (lines 1160-1164)

---

### FLOW 16: Replenishment Path B (3+3 Buyer)

| Property | Value |
|----------|-------|
| Trigger | 3+3 order + Day 75 |
| Emails | 2 |
| Segmentation | Cross-level (DOC 5) |
| Upgrade Path | 3+3 → 5+5 Bundle |

#### Purpose
Replenishment or upgrade for 3+3 buyers after ~75 days of use.

#### Source
- DOC1 §17 (lines 1165-1169)

---

### FLOW 17: Replenishment Path C (5+5 Buyer)

| Property | Value |
|----------|-------|
| Trigger | 5+5 order + Day 150 |
| Emails | 2 |
| Segmentation | Cross-level (DOC 5) |

#### Purpose
Replenishment for 5+5 buyers after ~150 days of use.

#### Source
- DOC1 §17 (lines 1170-1174)

---

### FLOW 18: Review Request Flow

| Property | Value |
|----------|-------|
| Trigger | Day 30 post-purchase |
| Emails | 2 |
| Segmentation | Cross-level (DOC 5) |

#### Purpose
Request reviews from satisfied customers after 30 days of product use. Include direct links to leave a review (reduce friction).

#### Source
- DOC1 §17 (lines 1176-1180)

---

### FLOW 19: Winback Path A (Post-Buyer Inactive)

| Property | Value |
|----------|-------|
| Trigger | Last purchase + 90 days no engagement |
| Emails | 3 |
| Segmentation | 4 level variants |
| Emotional State | Respectful re-engagement |
| Language | "How are you doing?" / "Whichever path you take" |

#### Email Sequence

| Email | Timing | Message |
|-------|--------|---------|
| E1 | Day 0 | "It's Been Awhile" — brand reminder, product highlights |
| E2 | Day 7 | Discount open — exclusive offer for them |
| E3 | Day 14 | Text-based closer — personal note, last chance, support offer |

#### Key Insight
Text-based emails from the founder consistently perform well for re-engagement.

#### Source
- DOC1 §17 (lines 1181-1185), §21 (lines 1463-1473)

---

### PHASE 2 IMPLEMENTATION ORDER

| Priority | Flow |
|----------|------|
| 1 | Browse Abandonment |
| 2 | PP-Mary S. Story |
| 3 | PP-Education Day 0-21 |
| 4 | Review Request |
| 5 | PP-Extended Upsell |
| 6 | PP-Mid Check-In |
| 7 | Replenishment Path A/B/C |
| 8 | Winback Path A |

### PHASE 2 EMAIL COUNT VERIFICATION

| Flow | Emails |
|------|--------|
| Browse Abandonment | 3 |
| PP-Mary S. Story | 1 |
| PP-Education Day 0-21 | 4 |
| PP-Extended Upsell | 3 |
| PP-Mid Check-In | 3 |
| Replenishment Path A | 3 |
| Replenishment Path B | 2 |
| Replenishment Path C | 2 |
| Review Request | 2 |
| Winback Path A | 3 (× 4 level variants = 12, but cross-level = 3) |
| **TOTAL** | **34** |

---

## PHASE 3: NICE-TO-HAVE (Months 5-6)
### 8 Flows, 33 Unique Emails

These flows deploy when Phase 1+2 run and marketing team is established.

---

### FLOW 20: Post-Purchase Extended Education Flow

| Property | Value |
|----------|-------|
| Trigger | Level tag activated + Day 22 |
| Emails | 5 per level variant = 20 total (5 × 4 levels) |
| Segmentation | 4 level variants |

#### Purpose
Deep level-specific education after initial onboarding period. This is where the full avatar-specific content arc plays out.

#### Level-Specific Content Focus

| Level | Focus | Key References |
|-------|-------|----------------|
| Level 1 | Pre-K readiness, gentle progress tracking, "almost there" coaching | DOC 2 |
| Level 2 | Sensory mechanism deep-dive, BCBA complementary approach, Kelly Mahler | DOC 3 |
| Level 3 | Dignity-first education, late-trainer stories, patience framing | DOC 4 |
| General | Cross-level education, migration anchors | DOC 5 |

#### Source
- DOC1 §17 (lines 1139-1143)

---

### FLOW 21: Post-Purchase Support At-Risk Flow

| Property | Value |
|----------|-------|
| Trigger | Day 3-7 no opens |
| Emails | 4 |
| Segmentation | Cross-level (DOC 5) |

#### Purpose
Re-engage customers who stopped opening emails. Prevent silent churn.

#### Source
- DOC1 §17 (lines 1154-1158)

---

### FLOW 22: Winback Path B (Subscriber Never-Bought)

| Property | Value |
|----------|-------|
| Trigger | Signup + 60 days no purchase |
| Emails | 3 per level variant = 12 total (3 × 4 levels) |
| Segmentation | 4 level variants |

#### Purpose
Win back subscribers who went through Welcome Flow but never converted to purchase.

#### Email Sequence

| Email | Timing | Message |
|-------|--------|---------|
| E1 | Day 0 | "We miss you" — brand reminder, what's new |
| E2 | Day 7 | Discount or offer to re-engage |
| E3 | Day 14 | Final personal outreach, support offer |

#### Source
- DOC1 §17 (lines 1186-1190)

---

### FLOW 23: Sunset Flow

| Property | Value |
|----------|-------|
| Trigger | 120 days inactive |
| Emails | 2 |
| Segmentation | Cross-level (DOC 5) |

#### Purpose
Final re-engagement before list cleaning / suppression. Protects sender reputation.

#### Email Sequence

| Step | Timing | Action |
|------|--------|--------|
| E1 | Day 0 | "Update your preferences" — stay/unsubscribe options |
| E2 | Day 3 | "Is this goodbye?" — final confirmation |
| Post-flow | Day 8 | Suppress profile (Suppressed = True) |

#### After Flow Completes
- Update profile property: Suppressed = True
- Add to suppression list
- Suppress for 6-12 months (not permanently)
- Re-enable if subscriber re-engages via another channel

#### When to Sunset vs Winback
- Winback (90-180 days no purchase): Focused on reactivation, sends offers
- Sunset (180+ days no engagement): Focused on list hygiene, removes unengaged
- Run winback first; if no reactivation, move to sunset

#### Source
- DOC1 §17 (lines 1191-1195)

---

### FLOW 24: FAQ/Objection Library Flow

| Property | Value |
|----------|-------|
| Trigger | Welcome flow end + no purchase |
| Emails | 6 |
| Segmentation | Cross-level (DOC 5) |

#### Purpose
Address top objections systematically for subscribers who completed Welcome but didn't buy.

#### Objection Map (from DOC1 §10)

| Code | Objection | Email Focus |
|------|-----------|-------------|
| D1 | "I've tried everything. Why would this be different?" | Mechanism specificity — sensory gap, not method |
| D2 | "Maybe I'm the problem" | Validation — "You did nothing wrong" |
| D3 | "What if I get my hopes up again and it fails?" | 60-day guarantee + permission-not-to-buy |
| D4 | "He's too old/severe for any product to help" | Late-trainer stories (Maureen Bennie, 9.5 years) |
| C1 | "I've never heard of this brand" | 16,511 reviews, 100,000+ parents, social proof |
| C2 | "I need to see it works for kids LIKE MINE" | Level-specific testimonials |
| C3 | "Is this worth $30-50 when I've already wasted so much?" | Math reframe ($657-1095/year on pull-ups) |
| B1 | "I tried underwear and it didn't help either" | Mechanism difference (sensory, not behavioral) |
| B2 | "My BCBA has a whole protocol. I trust that more." | "Complements BCBA, doesn't replace it" |
| B3 | "My kid will rip them off / refuse to wear them" | Sensory-friendly design specifics |
| B4 | "We have GI issues / withholding" | Specific guidance for GI comorbidity |

#### Source
- DOC1 §17 (lines 1196-1201), §10 (lines 601-748)

---

### FLOW 25: Referral Flow

| Property | Value |
|----------|-------|
| Trigger | Day 30 + positive engagement |
| Emails | 3 |
| Segmentation | Cross-level (DOC 5) |

#### Purpose
Leverage satisfied customers for referrals. "Share with a friend" incentives.

#### Source
- DOC1 §17 (lines 1203-1207)

---

### PHASE 3 IMPLEMENTATION ORDER

| Priority | Flow |
|----------|------|
| 1 | PP-Extended Education (× 4 levels) |
| 2 | PP-Support At-Risk |
| 3 | Winback Path B (× 4 levels) |
| 4 | Sunset |
| 5 | FAQ/Objection Library |
| 6 | Referral Flow |
| 7 | Birthday Mail (optional) |

### PHASE 3 EMAIL COUNT VERIFICATION

| Flow | Emails |
|------|--------|
| PP-Extended Education | 5 × 4 levels = 20 |
| PP-Support At-Risk | 4 |
| Winback Path B | 3 × 4 levels = 12 |
| Sunset | 2 |
| FAQ/Objection Library | 6 |
| Referral Flow | 3 |
| **TOTAL** | **33** (excluding optional Birthday Mail) |

---

## COMPLETE FLOW REFERENCE TABLE

| # | Flow | Phase | Trigger | Emails | Segmentation | Exit Conditions |
|---|------|-------|---------|--------|--------------|-----------------|
| 01 | Welcome Flow | 1 | Pop-up signup + level tag | 32 (8×4) | 4 level variants | Purchase, Unsubscribe, Higher-priority flow |
| 02 | Cart Abandonment | 1 | Cart Abandoned | 3 | Cross-level | Purchase, Unsubscribe |
| 03 | Checkout Abandonment | 1 | Started Checkout Abandoned | 2 | Cross-level | Purchase, Unsubscribe |
| 04 | Browse Abandonment | 2 | Viewed Product, no Cart | 3 | Cross-level | Cart created, Purchase, Unsubscribe |
| 05 | Order Confirmation | 1 | Order Placed | 1 | Cross-level | N/A (transactional) |
| 06 | Shipping Notification | 1 | Order Fulfilled | 1 | Cross-level | N/A (transactional) |
| 07 | Out for Delivery | 1 | Carrier "Out for Delivery" | 1 | Cross-level | N/A (transactional) |
| 08 | Arrived & Welcome | 1 | Carrier "Delivered" | 1 | Cross-level | N/A (transactional) |
| 09 | PP-Direct Upsell | 1 | Order Placed + Day 1-3 | 2 | Cross-level | Purchase, Unsubscribe |
| 10 | PP-Level Detection | 1 | Order Placed + Day 14 | 1 | Cross-level (asks level) | N/A |
| 11 | PP-Mary S. Story | 2 | Order Placed + Day 3 | 1 | Cross-level | N/A |
| 12 | PP-Education Day 0-21 | 2 | Order Placed | 4 | Cross-level | N/A |
| 13 | PP-Extended Upsell | 2 | Day 28 + level tag | 3 | Level-aware | Purchase, Unsubscribe |
| 14 | PP-Mid Check-In | 2 | Day 30-60 | 3 | Cross-level | N/A |
| 15 | PP-Extended Education | 3 | Level tag + Day 22 | 20 (5×4) | 4 level variants | N/A |
| 16 | PP-Support At-Risk | 3 | Day 3-7 no opens | 4 | Cross-level | Re-engaged (opens) |
| 17 | Replenishment Path A | 2 | 1-pair order + Day 14 | 3 | Cross-level | Purchase, Unsubscribe |
| 18 | Replenishment Path B | 2 | 3+3 order + Day 75 | 2 | Cross-level | Purchase, Unsubscribe |
| 19 | Replenishment Path C | 2 | 5+5 order + Day 150 | 2 | Cross-level | Purchase, Unsubscribe |
| 20 | Review Request | 2 | Day 30 post-purchase | 2 | Cross-level | N/A |
| 21 | Winback Path A | 2 | Last purchase + 90 days inactive | 3 | 4 level variants | Purchase, Unsubscribe |
| 22 | Winback Path B | 3 | Signup + 60 days no purchase | 12 (3×4) | 4 level variants | Purchase, Unsubscribe |
| 23 | Sunset | 3 | 120 days inactive | 2 | Cross-level | Re-engagement, Suppression |
| 24 | FAQ/Objection Library | 3 | Welcome end + no purchase | 6 | Cross-level | Purchase, Unsubscribe |
| 25 | Referral | 3 | Day 30 + positive engagement | 3 | Cross-level | N/A |

---

## KLAVIYO PROFILE PROPERTIES & TAGS

### Custom Profile Properties

| Property | Type | Values |
|----------|------|--------|
| avatar_level | string | "level1" / "level2" / "level3" / "general" |
| child_age | string | (optional, if mom shared) |
| signup_source | string | "popup" / "checkout" / "referral" |
| welcome_flow_completed | boolean | true/false |
| last_purchase_pack_size | string | "1pair" / "3+3" / "5+5" |
| vip_customer | boolean | true/false |

### Tags

**From Pop-up:**
- avatar_level1, avatar_level2, avatar_level3, avatar_general

**From Behavior:**
- welcome_completed, welcome_completed_no_purchase
- post_purchase_active, at_risk_no_open
- inactive_60_days, inactive_120_days

**From Purchase:**
- buyer_1pair, buyer_3plus3, buyer_5plus5
- repeat_buyer, vip_buyer (3+ orders)

### Migration Strategy
- Day 14 Level-Detection mail re-classifies General → specific level
- Purchase hints (underwear size → age hint → level hint)
- Bundle size → experience hint

---

## CROSS-LEVEL CALIBRATION RULES (All Flows)

1. **Symptom Description Over Level Label:** NEVER "Level 2" in copy; use "If your child doesn't feel when they need to go..."
2. **3-5 Recognition Anchors Per Mail:** Include scenarios for all levels (Level 1: "Sits 20 minutes and nothing happens", Level 2: "Pees immediately when pull-up comes off", Level 3: "Doesn't react to wet diaper")
3. **Age Ranges Instead of Fixed Ages:** "For kids 3 to 10+" not "For 5-year-olds"
4. **Verbal/Non-Verbal Inclusivity:** Always include both ("saying 'wet'" + "showing you with a gesture")
5. **Timeline Flexibility:** "Some kids show first signals after 2 weeks. Others need 8 weeks. Both are normal."
6. **Success Metrics Low Bar:** Mini-wins, not "fully trained" ("Look at the wet spot for the first time")

---

## BRAND CONSTANTS (All Flows)

| Constant | Value |
|----------|-------|
| 1 Pair | $34.99 |
| 3+3 Bundle | $79.99 + FREE Shipping (BESTSELLER) |
| 5+5 Bundle | $119.99 + FREE E-Book + FREE Magic Potty Targets + FREE Potty Progress Chart + FREE Shipping |
| Guarantee | 60-Day Money Back (NEVER say 30) |
| Reviews | 16,511 reviews · 4.9 ★ |
| Trust Signal | 100,000+ parents trust BrightKidCo |
| Sender | "Lena from BrightKidCo" <support@brightkidco.com> |
| Shipping | 10 days standard, various US-based carriers |
| Discount Code | WELCOME10 (auto-apply: brightkidco.com/discount/10%25OFF-WELCOME) |
| Font | Questrial weight 400 only (never bold for body) |
| Brand Green | #039902 |
| Mint | #DBFFCD |
| Cream | #FBF7EB / #FAF5E8 |
| Yellow | #F5C84B / #F5CB5C |

---

## TONALITY CALIBRATION BY FLOW STAGE

| Stage | Flows | Tone | Energy | Do | Don't |
|-------|-------|------|--------|----|-------|
| Pre-Purchase | Welcome, Cart, Browse, Checkout | Education + Soft Conversion | Calm, confident, "we're not in a hurry" | Validate failures, explain mechanism, soft CTA | Hard-sell, urgency manipulation |
| Conversion Moment | Cart Recovery final, Checkout | Friendly Reminder + Permission Not To Buy | Decision-respect, "you decide" | Reduce friction, offer guarantee | Pressure tactics, fake scarcity |
| Transactional | Order Confirm, Shipping | Warm + Functional | Professional but human | Clear info, set expectations | Too much sales talk |
| Post-Purchase Early | Arrived, Day 0-7 | Warm + Reassurance + Education | Welcome to the family | Set realistic Week-1 expectations | Hard re-sell, oversell ease |
| Post-Purchase Mid | Day 14-60 | Realistic + Patient + "It's normal" | Coach + cheerleader | Manage expectations, celebrate mini-wins | Promise quick wins |
| Lifecycle | Replenishment, Winback, Sunset | Respectful Re-engagement | Genuinely curious, low-pressure | Acknowledge time, no guilt | "You forgot us" guilt-tripping |

---

## FLOW A/B TESTING FRAMEWORK

### Testing Hierarchy (highest to lowest leverage)

| Lever | Impact | Test Duration |
|-------|--------|---------------|
| 1. Flow time delays | High | 2-4 weeks |
| 2. Email count in flow | High | 4-8 weeks |
| 3. Long-form vs. short-form copy | Medium-High | 2-4 weeks |
| 4. Offer type / discount level | High | 2-4 weeks |
| 5. Subject lines & preview text | Medium | 1-2 weeks |
| 6. Graphic vs. text-based emails | Medium | 2-4 weeks |
| 7. Categories vs. individual products | Low-Medium | 2-4 weeks |
| 8. CTA placement and design | Low | 2-4 weeks |

### Decision Frameworks

**Browse Abandonment — 3 vs 5 emails:**
- AOV > $75: Full 5-email sequence
- AOV $30-$75: 3-email core
- AOV < $30: 3-email core without discounts

**Cart Abandonment — Re-entry window:**
- Low-cost/impulse (< $50): 7-day re-entry
- Mid-range ($50-$150): 10-day re-entry
- High-consideration (> $150): 15-day re-entry

---

## VOICE RULES (All Flows)

### Lena (Primary Voice)
- Lena S., Customer Support, Mom of two autistic sons
- Sons: one is 6 (still training), other took until almost 8
- Peer-to-peer, never founder framing
- Empathy combined with knowledge, never preachy
- Every mail ends with Lena sign-off (max 2-3 sentences body + max 2 lines P.S.)
- Profile subtitle: "Customer Support · Mom of two autistic sons"

### Mary S. (Founder — Limited Use)
- ONLY in Post-Purchase Mary S. Story Flow (Flow 11)
- NOT in Phase 1 at all
- Separate identity from Lena

### Forbidden Phrases
- "easy", "simple", "quickly", "guaranteed", "miracle", "cure", "fix", "solve"
- Never compare to neurotypical kids as standard
- Never use level labels (Level 2/3) in copy
- Never use exclamation marks in body text
- Never use "we know how you feel"

---

## WHATSAPP CHAT INSIGHTS (Giuliano, 10/2025-5/2026)

- **Hyper-Personalization Push (5/20/26):** Giuliano pushed for post-purchase flows for each avatar and welcome flows for each avatar (hyper-personalized). Ayoub agreed.
- **No structural changes** to the 25-flow architecture were discussed.
- **Flow Building Pricing (11/10/25):** Flows were being actively built/quoted.
- **BFCM Flows (10/26/25):** Giuliano noted "makes no sense to set them up bc brand is in the beginning stages."

---

## CONTRADICTIONS & NOTES

1. **Phase 1 mail count:** DOC1 §18 says "32 mails — 8 × 4 levels" for Welcome Flow but §17 summary says Phase 1 = 43 unique mails. Consistent: 32 Welcome + 3 Cart + 2 Checkout + 1 Order Confirm + 1 Shipping + 1 Arrived + 2 PP-Direct Upsell + 1 PP-Level Detection = 43.
2. **Browse Abandonment placement:** Listed under "Pre-Purchase Flows" in §17 but marked as "PHASE 2" — confirmed Phase 2 in §18.
3. **Phase 3 line items:** §18 Phase 3 lists 7 items but §17 counts 8 flows. Birthday Mail is listed as "optional."
4. **Out for Delivery Flow:** Marked as "optional" in §17 — may not be implemented.
5. **DOC6 Browse Abandonment listed in Phase 1 table** but DOC1 §18 confirms Phase 2.

---

## SOURCE FILE REFERENCES

| Source File | Sections Used | Lines Referenced |
|-------------|---------------|-----------------|
| DOC1-MASTER-FOUNDATION.txt | §6 (4 Emotional Phases), §10 (Objection Map), §17 (Complete Flow Overview), §18 (Phased Rollout), §19 (Klaviyo Setup & Tag Logic), §21 (Tonality Calibration), §22 (Cross-Level Calibration), §24 (Buyer Journey Mapping) | 220-386, 601-748, 1071-1263, 1266-1353, 1401-1473, 1476-1519, 1556-1627 |
| DOC6-USAGE-GUIDE.txt | §3 (Which Doc for Which Mail), §5 (Brand Constants), §7 (Segmentation Strategy) | 340-385, 466-627, 714-900 |
| R1 Client Files | Full extraction | All |
| R2 Skill Loading | 14 flow skills loaded | All |
| R3 Wiki Extraction | 12 wiki pages referenced | All |
| WhatsApp Chat with Giuliano.txt | Flow architecture discussion (5/20/26) | 2500-2540 |

---

*Layer 16 Round 5 — Flow Architecture Synthesis Complete*
*25 flows · 110+ emails · 3 phases · 6 months*
