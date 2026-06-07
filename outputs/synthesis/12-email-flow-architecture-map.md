# BKC Complete Email Flow Architecture & Conversion Touchpoint Map

> **Purpose:** Full system map of every automated flow, product presentation
> critical points, segmentation triggers, and conversion optimization touchpoints.
> **Generated:** June 07, 2026
> **Sources:** Brand Voice Reference (L11), Flow SOPs (12 flows), Customer Journey
> Strategy, Segmentation Framework, Deliverability Doctrine, 124 existing copy files

---

## 1. THE COMPLETE FLOW INVENTORY

### 1.1 Customer Journey Arc

```
 Anonymous Visitor
     |
     v
 [POP-UP] ──tag: avatar_level1/level2/level3/general
     |
     v
 Email Subscriber
     |
     ├──> WELCOME FLOW (01) .............. 8 emails × 4 avatar variants = 32 mails
     |
     ├──> BROWSE ABANDONMENT (04) ....... 3 emails
     ├──> CART ABANDONMENT (02) ......... 3 emails
     ├──> CHECKOUT ABANDONMENT (03) ..... 2 emails
     |
     v
 First Purchase
     |
     ├──> ORDER CONFIRMATION (05) ....... 1 email
     ├──> SHIPPING NOTIFICATION (06) .... 1 email
     ├──> OUT FOR DELIVERY (07) ......... 1 email
     ├──> ARRIVED & WELCOME (08) ........ 1 email
     |
     ├──> PP-DIRECT UPSELL (09) ......... 2 emails
     ├──> PP-LEVEL DETECTION (10) ....... 1 email  [CRITICAL SEGMENTATION POINT]
     ├──> PP-EDUCATION DAY 0-7 (11) ..... 4 emails
     ├──> PP-EXTENDED UPSELL (12) ....... 3 emails
     ├──> PP-MID CHECK-IN (13) .......... 3 emails (D30/D45/D60)
     ├──> PP-MARY STORY (14) ............ 1 email  [FOUNDER VOICE - NOT LENA]
     |
     v
 Repeat Buyer / At-Risk
     |
     ├──> REPLENISHMENT A (15) .......... 3 emails
     ├──> REPLENISHMENT B (16) .......... 2 emails
     ├──> REPLENISHMENT C (17) .......... 2 emails
     ├──> REVIEW REQUEST (18) ........... 2 emails
     |
     ├──> WINBACK PATH A (19) ........... 3 emails × 4 variants = 12 mails
     ├──> SITE ABANDONMENT (20) ......... 1 email
     ├──> FAQ/OBJECTION LIBRARY (21) .... 6 emails
     ├──> PP-EXTENDED EDUCATION (22) .... 5 emails × 4 variants = 20 mails
     ├──> PP-AT-RISK SUPPORT (23) ....... 4 emails
     |
     v
 Lapsed / Churned
     |
     ├──> WINBACK PATH B (24) ........... 3 emails × 4 variants = 12 mails
     ├──> SUNSET FLOW (25) .............. 2 emails
     |
     v
 Advocacy
     |
     ├──> REFERRAL ....................... TBD
     └──> VIP FLOW ....................... TBD
```

### 1.2 Total Email Count

| Category | Flows | Unique Mails | × Avatar Variants | Total Variants |
|----------|-------|-------------|-------------------|----------------|
| Acquisition | 4 | 16 | ×4 for Welcome | 28 |
| Transactional | 4 | 4 | ×1 | 4 |
| Post-Purchase | 6 | 14 | ×1 | 14 |
| Lifecycle | 3 | 7 | ×1 | 7 |
| Winback/Recovery | 4 | 14 | ×4 for 19+24 | 30 |
| At-Risk/Support | 2 | 9 | ×4 for 22 | 23 |
| Hygiene | 1 | 2 | ×1 | 2 |
| Loyalty/Referral | 2 | TBD | TBD | TBD |
| **TOTAL** | **26** | **~66** | | **~108** |

---

## 2. PRODUCT/CONVERSION CRITICAL TOUCHPOINTS

These are the emails where product presentation directly drives revenue.
Getting these wrong = lost revenue. Getting them right = conversion engine.

### 2.1 TIER 1: Revenue-Generating Emails (Highest Priority)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                   PRODUCT PRESENTATION CRITICAL POINTS                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  FLOW           │ EMAIL          │ WHY CRITICAL           │ H/R  │ CTA AGG. ║
║ ────────────────┼────────────────┼────────────────────────┼──────┼──────────║
║  Welcome E1     │ Code Delivery  │ FIRST impression +     │ Varies│ Medium   ║
║                 │                │ discount hook          │      │          ║
║  Welcome E4     │ Discount       │ URGENCY on welcome     │ Varies│ HIGH     ║
║                 │ Reminder       │ discount expiry        │      │          ║
║  Welcome E5     │ Us vs Them     │ COMPETITIVE proof      │ Varies│ Medium   ║
║  Welcome E7     │ Last Chance    │ FINAL push before      │ Varies│ HIGH     ║
║                 │                │ discount expires       │      │          ║
║ ────────────────┼────────────────┼────────────────────────┼──────┼──────────║
║  Cart Abandon   │ All 3 emails   │ RECOVERY — highest     │ 45/55│ Soft     ║
║                 │                │ intent before checkout │      │          ║
║  Checkout Aban. │ Both emails    │ CLOSEST to purchase    │ 35/65│ Soft     ║
║ ────────────────┼────────────────┼────────────────────────┼──────┼──────────║
║  Browse Aban.   │ E1 + E2        │ PRODUCT-SPECIFIC       │ 50/50│ Light    ║
║                 │                │ re-engagement          │      │          ║
║ ────────────────┼────────────────┼────────────────────────┼──────┼──────────║
║  PP-Direct      │ E1             │ CROSS-SELL on highest  │ 60/40│ Soft     ║
║  Upsell (09)    │                │ satisfaction moment    │      │          ║
║  PP-Extended    │ E1-E3          │ UPSELL for buyers who  │ Varies│ Medium   ║
║  Upsell (12)    │                │ need more education    │      │          ║
║ ────────────────┼────────────────┼────────────────────────┼──────┼──────────║
║  Replenish A    │ All 3          │ REPEAT PURCHASE on     │ 60/40│ Helpful  ║
║  (15)           │                │ consumption cycle      │      │          ║
║ ────────────────┼────────────────┼────────────────────────┼──────┼──────────║
║  Winback A/B    │ E1 + E2        │ REACTIVATION with      │ 30-  │ Dignity- ║
║  (19/24)        │                │ discount incentive     │ 35/65│ first    ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 2.2 TIER 2: Trust-Building Emails (Indirect Conversion)

| Flow | Email | Purpose | Conversion Impact |
|------|-------|---------|-------------------|
| Welcome E2 | Brand Story | Build emotional connection | Primes for E4-E7 |
| Welcome E3 | Social Proof | Build credibility | Overcomes skepticism |
| Welcome E6 | Testimonials | Proof from peers | Reduces risk perception |
| Welcome E8 | "Everything OK?" | Personal check-in | Primes for future purchase |
| PP-Education (11) | E1-E4 | Product education | Reduces buyer's remorse |
| PP-Mid Check-In (13) | All 3 | Troubleshooting | Prevents returns, drives reviews |
| FAQ Library (21) | All 6 | Objection handling | Removes barriers to purchase |
| Review Request (18) | All 2 | Social proof generation | Fuels other flows' proof |
| Sunset (25) | E2 | Final re-engagement | Last recovery attempt |

### 2.3 The Product Presentation Structure (Section 5 of Every Email)

From the brand voice reference, every BKC email follows an 8-section hierarchy:

```
SECTION 1: Hook / Observation         ← NEVER start with product
SECTION 2: Validation                  ← Name failed methods
SECTION 3: Mechanism / Education       ← WHY neurologically
SECTION 4: Testimonial / Social Proof  ← Real parent stories
SECTION 5: PRODUCT / OFFER             ← THE CONVERSION POINT
  ├── Frame as "adds the body-signal layer"
  ├── Pricing table: 1 Pair $34.99 / 3+3 FREE $79.99 / 5+5 FREE $119.99
  └── Bundle notation: "3 + 3 FREE" with spaces around +
SECTION 6: Guarantee / Risk Removal    ← 60-Day Money Back (NEVER 30)
SECTION 7: CTA                         ← Level-appropriate aggressiveness
SECTION 8: Lena Sign-Off               ← MANDATORY every email
```

**Key insight:** Product is Section 5 of 8. The first 4 sections build trust and
mechanism understanding BEFORE the product appears. This is the core conversion
architecture — mechanism-first, product-second.

---

## 3. SEGMENTATION FOR CONVERSION

### 3.1 Avatar-Level Segmentation (Pop-Up Tags)

The pop-up is the PRIMARY segmentation mechanism. Every subscriber enters
tagged with one of four avatar levels:

```
┌──────────────────────────────────────────────────────────────────┐
│                    POP-UP SEGMENTATION MATRIX                      │
├──────────────────────────────────────────────────────────────────┤
│                                                                    │
│  POP-UP OPTION                    │ TAG APPLIED   │ AVATAR LEVEL  │
│ ──────────────────────────────────┼───────────────┼───────────────│
│  "Talks about potty but won't     │ avatar_level1 │ Level 1:      │
│   actually do it"                 │               │ Sarah (35%)   │
│                                   │               │ Verbal, 3-5yr │
│                                   │               │ Hope-intact   │
│ ──────────────────────────────────┼───────────────┼───────────────│
│  "Sensory issues, tried many      │ avatar_level2 │ Level 2:      │
│   methods"                        │               │ Lisa (40%) 🏆 │
│                                   │               │ Mixed, 5-7yr  │
│                                   │               │ Method-cycling│
│ ──────────────────────────────────┼───────────────┼───────────────│
│  "Non-verbal or high support      │ avatar_level3 │ Level 3:      │
│   needs"                          │               │ Maria (25%)   │
│                                   │               │ Non-verbal    │
│                                   │               │ 6-10+yr       │
│                                   │               │ Resigned      │
│ ──────────────────────────────────┼───────────────┼───────────────│
│  "Still figuring out what's       │ avatar_general│ General:      │
│   going on"                       │               │ Fallback      │
│                                   │               │ Cross-level   │
│                                   │               │ ~50% real vol │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

### 3.2 How Avatar Tags Flow Into Email Content

Every flow has avatar-specific content variants. The tag determines:

1. **Hope/Realism ratio** — L1: 70/30, L2: 40/60, L3: 20/80, GF: 50/50
2. **Validation depth** — L1: light (1-3 methods), L2: deep (3-5+), L3: maximum
3. **Mechanism density** — L1: gentle, L2: science-first (Kelly Mahler mandatory),
   L3: gentle (dignity-first)
4. **CTA aggressiveness** — L1: medium, L2: low, L3: very low, GF: medium-low
5. **Forbidden phrases** — Each level has unique forbidden words
6. **Sign-off energy** — L1: encouraging, L2: empathetic, L3: gentle/no pressure

### 3.3 Klaviyo Segment Architecture

From the Segmentation Strategy Framework, the five layers that map to BKC:

```
LAYER 1: ENGAGEMENT (The Backbone)
  ├── Engaged 30 Days .............. Core campaign audience
  ├── Engaged 90 Days .............. Standard campaign default
  ├── Engaged 180 Days ............. Broad reach
  └── Unengaged 180+ Days .......... Sunset flow trigger

LAYER 2: VALUE
  ├── VIP (Top 10%) ................ Exclusive perks flow
  ├── High AOV (>$150) ............. Upsell campaigns
  ├── Frequent Buyers (3+) ......... Loyalty recognition
  ├── One-Time Buyers .............. Winback targeting
  └── At-Risk (Declining) .......... Re-engagement

LAYER 3: BEHAVIORAL
  ├── Viewed Product (7d) .......... Browse abandonment trigger
  ├── Added to Cart (24h) .......... Cart abandonment trigger
  ├── Reached Checkout (24h) ....... Checkout abandonment trigger
  ├── Purchased Specific Product ... Post-purchase cross-sell
  └── Browsed Collection ........... Collection-level campaigns

LAYER 4: DEMOGRAPHIC
  ├── Location (Country) ........... UK: "nappies" not "diapers" (V22)
  ├── Language ..................... Klaviyo country segment routing
  └── Timezone ..................... Send-time optimization

LAYER 5: PURCHASE HISTORY
  ├── First-Time Buyers (30d) ...... Welcome flow exit → PP flows
  ├── Repeat Buyers (2+) ........... Loyalty/VIP enrollment
  ├── Lapsed (90d) ................. Winback flow trigger
  └── Subscription Customers ....... Account management
```

### 3.4 Segment Overlap Rules (Critical for BKC)

| Overlap | Treatment | BKC Application |
|---------|-----------|-----------------|
| VIP + Frequent Buyer | Highest priority, minimum discount | Never discount deep to VIPs |
| At-Risk + High CLV | VIP winback flow, not standard sunset | Separate Path A vs Path B |
| Unengaged + One-Time | Standard sunset timeline | Enter sunset-25 |
| Engaged 30d + Any Avatar | Receive avatar-specific campaigns | Core campaign audience |

---

## 4. FLOW-BY-FLOW ARCHITECTURE

### 4.1 WELCOME FLOW (01) — 8 Emails × 4 Avatar Variants

```
TRIGGER: Pop-up submission → tag applied (avatar_level1/2/3/general)
FILTER: Placed Order 0 times over all time
RE-ENTRY: New subscribers only (flow filter blocks buyers)

TIMELINE:
  E1 (Immediate) ──→ auto-resend at 1d for non-openers
    └──→ E2 (1-2d) ──→ E3 (2-3d) ──→ E4 (3-4d)
       └──→ E5 (3-4d) ──→ E6 (3-4d) ──→ E7 (3-4d) ──→ E8 (5-7d)

PURPOSE PER EMAIL:
  E1: Code delivery + brand intro + first product impression
  E2: Brand story (Mary S. ONLY appears here in Phase 2)
  E3: Social proof + 16,511 reviews · 4.9★
  E4: Discount reminder + community focus + URGENCY
  E5: Us vs Them (competitive differentiation)
  E6: Testimonials (3-5 real parent stories)
  E7: Last chance (discount expiry)
  E8: "Everything OK?" — plain text, personal check-in

PRODUCT PRESENTATION:
  E1: Dynamic bestseller grid + discount code
  E3: Popular products grid + USPs
  E4: Testimonials + discount urgency
  E5: Comparison table with data points
  E6: Testimonial cards + star ratings
  E7: Single message + strong CTA

CONVERSION OPTIMIZATION:
  - A/B test subject lines on E1 (highest impact)
  - Auto-resend for non-openers at 1d
  - Each email has Placed Order 0 filter (buyers exit)
  - Target: 30-50%+ open on E1, 8-12%+ flow conversion
  - Back-population: Clone for existing subscribers (24-48h window)

DEPLOYMENT:
  - E1: Brand Announcer sender (info@)
  - E1: Both Transactional + Conversational Cloaks (inbox placement)
  - E2-E8: Transactional Cloak only
  - From: "Lena from BrightKidCo" <support@brightkidco.com>
```

### 4.2 CART ABANDONMENT (02) — 3 Emails

```
TRIGGER: Added to Cart (requires Shopify snippet)
FILTER: Placed Order 0 + Checkout Started 0 + Added to Cart 0

TIMELINE:
  E1 (1h) ──→ E2 (1d) ──→ E3 (2d)

PURPOSE PER EMAIL:
  E1: Reminder with dynamic cart content + soft CTA
  E2: Social proof + risk removal (60-day guarantee)
  E3: Final nudge + discount offer (if margin allows)

PRODUCT PRESENTATION:
  - Dynamic cart content block ({{ event.ImageURL }}, Name, Price)
  - Link back to cart page, not product page
  - Show exact item abandoned with image

VOICE: Cross-level urgency, 45/55 H/R
  E1: "You left the 3+3 bundle in your cart. I'm not chasing..."
  E2: "60 days to decide. Your call."
  E3: "If today isn't right, that's a real answer."

DEPLOYMENT:
  - Helpful Agent sender (help@)
  - E1: Transactional + Conversational Cloaks
  - E2-E3: Transactional Cloak only
```

### 4.3 CHECKOUT ABANDONMENT (03) — 2 Emails

```
TRIGGER: Started Checkout
FILTER: Placed Order 0 since starting flow

TIMELINE:
  E1 (1-2h) ──→ E2 (1d)

PURPOSE PER EMAIL:
  E1: Permission-first recovery ("If today isn't right...")
  E2: Discount/incentive to complete

PRODUCT PRESENTATION:
  - Dynamic checkout content (items, prices)
  - Minimal — these buyers ALMOST purchased
  - Focus on friction removal, not education

VOICE: Permission-not-to-buy, 35/65 H/R
  "If today isn't right, that's a real answer. The product
   will be here next month. So will I."

DEPLOYMENT:
  - Helpful Agent sender (help@)
  - E1: Transactional + Conversational Cloaks
  - E2: Transactional Cloak only
```

### 4.4 BROWSE ABANDONMENT (04) — 3 Emails

```
TRIGGER: Viewed Product
FILTER: Cart 0 + Checkout 0 + Order 0 + Not in flow 15-30d

TIMELINE:
  E1 (1-2h) ──→ E2 (1d) ──→ E3 (3-5d)

PURPOSE PER EMAIL:
  E1: Quick reminder with viewed product
  E2: Social proof + complementary products
  E3: Risk removal + soft closing

PRODUCT PRESENTATION:
  - Dynamic product block ({{ event.ImageURL }}, Name, Price, URL)
  - Show VIEWED product + related/complementary items
  - Level-appropriate image guidelines

VOICE: Gentle interest, 50/50 H/R
  Light touch — "just wanted to share what we noticed"

DEPLOYMENT:
  - Helpful Agent sender (help@)
  - E1: Transactional + Conversational Cloaks
  - E2-E3: Transactional Cloak only
```

### 4.5 TRANSACTIONAL FLOWS (05-08) — 4 Emails

```
ORDER CONFIRMATION (05): Warm functional, 80/20 H/R
  "Your order is confirmed. Here's what's coming and when."

SHIPPING NOTIFICATION (06): Informational Lena, 80/20 H/R
  "Your underwear is on its way. 10 days to most doorsteps."

OUT FOR DELIVERY (07): Warm-ready, 75/25 H/R
  "It's almost here. Open the box together."

ARRIVED & WELCOME (08): Reassuring Lena, 75/25 H/R
  "Your underwear is here. Open the box together — let your
   kid touch it first. Sensory familiarity helps."

VOICE RULES: V1, V2, V3, V4 (minimal, professional)
PRODUCT: No selling — purely informational
DEPLOYMENT: Helpful Agent sender (help@), Transactional Cloak only
```

### 4.6 POST-PURCHASE FLOWS (09-14) — 14 Emails

```
PP-DIRECT UPSELL (09): 2 emails
  Purpose: Cross-sell complementary products immediately
  Voice: Gentle, 60/40 H/R
  Product: Dynamic recommendations based on purchase
  Critical: This is the HIGHEST SATISFACTION moment — cross-sell now

PP-LEVEL DETECTION (10): 1 email ⭐ CRITICAL SEGMENTATION POINT
  Purpose: Detect which avatar level the buyer actually is
  Voice: Coach Lena, diagnostic
  Mechanism: Ask questions → tag based on response
  This email determines ALL subsequent post-purchase content

PP-EDUCATION (11): 4 emails (Day 0/7/14/21)
  Purpose: Product education + usage guidance
  Voice: Educational → patient → gentle
  D0: How to use (introduce the underwear)
  D7: First week check-in (what to expect)
  D14: Two-week progress check (signal detection)
  D21: Three-week encouragement (regression normalization)

PP-EXTENDED UPSELL (12): 3 emails
  Purpose: Upsell for buyers who need more education
  Voice: Varies by level
  Product: Different bundle sizes, complementary products

PP-MID CHECK-IN (13): 3 emails (Day 30/45/60)
  Purpose: Long-term troubleshooting + support
  Voice: Patient → gentle coach → extra empathy
  D30: One-month check-in
  D45: 6-week assessment
  D60: 60-day guarantee deadline approach

PP-MARY STORY (14): 1 email
  Purpose: Founder story (ONLY place Mary S. appears)
  Voice: Founder voice — NOT Lena
  Critical: V2 rule — Mary appears ONLY in Phase 2 dedicated mail
```

### 4.7 LIFECYCLE FLOWS (15-18) — 7 Emails

```
REPLENISHMENT A (15): 3 emails
REPLENISHMENT B (16): 2 emails
REPLENISHMENT C (17): 2 emails
  Purpose: Drive repeat purchase on consumption cycle
  Voice: Helpful reminder, 60/40 H/R
  Product: Same product, different timing/cadence
  A: Standard replenishment
  B: Aggressive (fast movers)
  C: Gentle (slow movers)

REVIEW REQUEST (18): 2 emails
  Purpose: Collect social proof for other flows
  Voice: Grateful ask, 70/30 H/R
  Product: NO selling — purely review collection
  Critical: Reviews fuel Welcome E3, E6, Browse E2, Cart E2
```

### 4.8 WINBACK/RECOVERY FLOWS (19-24) — 30 Emails

```
WINBACK PATH A (19): 3 emails × 4 variants = 12 mails
  Trigger: Lapsed customer (90-120d no purchase)
  Voice: Permission-always, 30/70 H/R
  E1: "It's been a while" — personal check-in
  E2: Discount focus — escalating incentive
  E3: Text-based closer — founder voice, plain text
  Product: Trending products + discount code

SITE ABANDONMENT (20): 1 email
  Trigger: Active on site, no product view, no cart
  Voice: Light touch, 50/50 H/R
  Product: Bestsellers showcase (no viewed product to reference)

FAQ/OBJECTION LIBRARY (21): 6 emails
  Purpose: Handle remaining objections for cold leads
  Voice: Science-deep Lena, 40/60 H/R
  Product: Objection-specific product framing
  6 emails covering 6 core objections

PP-EXTENDED EDUCATION (22): 5 emails × 4 variants = 20 mails
  Purpose: Extended education for buyers who need more support
  Voice: Varies by level (patience → gentle → dignity-first)
  Product: Educational — usage tips, not selling

PP-AT-RISK SUPPORT (23): 4 emails
  Purpose: Save at-risk customers from churning
  Voice: Empathetic Lena, 30/70 H/R
  Product: Extra support, not discounting

WINBACK PATH B (24): 3 emails × 4 variants = 12 mails
  Trigger: Deeply lapsed (120-180d+)
  Voice: Re-engagement, 35/65 H/R
  E1: Curious/soft re-engagement
  E2: Escalating incentive
  E3: Final attempt
  Product: Strongest discount in the system
```

### 4.9 HYGIENE (25) — 2 Emails

```
SUNSET FLOW (25): 2 emails
  Trigger: 180+ days no engagement
  Voice: Respectful goodbye, 50/50 H/R
  E1: "We'll miss you" + strong final offer
  E2: "Going quiet" — unsubscribe invitation
  Product: Final offer before suppression
  Critical: Protects deliverability by removing dead weight
```

---

## 5. CONTENT OPTIMIZATION FOR CLICKS & REVENUE

### 5.1 The Deliverability Engine (Primary Inbox Cloaking)

Every BKC email uses a two-part content injection system:

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    PRIMARY INBOX CLOAKING DOCTRINE                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ASSET 1: UNIVERSAL TRANSACTIONAL CLOAK (EVERY email)                       ║
║  ├── 300-400+ words of hidden "Account Security" text                       ║
║  ├── Annihilates text-to-image ratio problem                                ║
║  ├── Saturates with high-priority keywords                                  ║
║  └── Forces algorithm to classify as Important                               ║
║                                                                              ║
║  ASSET 2: SITUATIONAL CONVERSATIONAL CLOAK (Surgical)                       ║
║  ├── ~300 words mimicking hyper-personal 1:1 email                          ║
║  ├── Deployed on FIRST email of:                                            ║
║  │   ├── Welcome Flow                                                       ║
║  │   ├── Abandoned Checkout                                                 ║
║  │   ├── Abandoned Cart                                                     ║
║  │   ├── Browse Abandonment                                                 ║
║  │   └── Winback Flow (ALL emails — cold audience)                          ║
║  └── Also used for reputation repair (any email < 30% open rate)            ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 5.2 Sender Persona Assignment

| Flow Type | Sender Persona | Email | Rationale |
|-----------|---------------|-------|-----------|
| Welcome | Brand Announcer | info@ | Official brand introduction |
| Cart Abandonment | Helpful Agent | help@ | Support, not sales push |
| Checkout Abandonment | Helpful Agent | help@ | Service framing |
| Browse Abandonment | Helpful Agent | help@ | Supportive suggestion |
| Transactional | Helpful Agent | help@ | Customer service function |
| Post-Purchase | Helpful Agent | help@ | Service function |
| Winback | Helpful Agent | help@ | Personal check-in framing |
| Sunset | Helpful Agent | help@ | Administrative action |
| Campaigns | Brand Announcer | info@ | Brand broadcast |

### 5.3 CTA Calibration by Level

| Level | Aggressiveness | Copy Style | Button Style |
|-------|---------------|------------|--------------|
| Level 1 | Medium | "Learn more about how body signals work" | Full-width, pill, Brand-Green |
| Level 2 | Low | "See the science behind the body-signal learning layer" | Full-width, pill, muted green |
| Level 3 | Very Low | "Read one family's story" | Text links OK, muted cream |
| General | Medium-Low | "If your child doesn't feel when they need to go..." | Full-width, pill, balanced green |

### 5.4 The Voice Formula (Every Email)

```
OBSERVATION ──→ VALIDATION ──→ MECHANISM ──→ PERMISSION
     │               │               │               │
     ▼               ▼               ▼               ▼
 "He talks       "That's not      "His nervous     "Try it for
  about the       defiance.        system           60 days. By
  potty but       That's a         processes the    your
  won't           signal-timing    signal — just    judgment."
  actually        gap."            too late."
  use it."
```

Weight shifts by phase:
- Phase 1 (Slow Realization): Obs 40% / Val 30% / Mech 20% / Perm 10%
- Phase 2 (First Attempt): Val 35% / Mech 35% / Obs 20% / Perm 10%
- Phase 3 (Method Cycling): Mech 40% / Val 25% / Perm 25% / Obs 10%
- Phase 4 (Resignation): Perm 35% / Val 30% / Obs 20% / Mech 15%

### 5.5 Revenue-Optimizing Decision Points

| Decision | Check | Action |
|----------|-------|--------|
| Auto-resend timing | E1 open rate | >40%: keep 1d. <30%: reduce to 12h |
| Discount ladder | Conv. after E4 | <5%: increment discount. >10%: keep. >0.5% unsub: reduce |
| Social proof depth | E3 clicks vs E2 | E3 > E2: more testimonials. E3 < E2: more brand story |
| Back-population ROI | Revenue vs standard | >20% monthly: run quarterly. <5%: discontinue |
| Winback timing | Recovery rate | <3% at 30d: increase discount or refresh products |
| Sunset entry | Engagement decay | 180d for most. 120d for fast-moving. 240d for premium |

---

## 6. GAPS & MISSING COMPONENTS

### 6.1 Flows Defined in Voice Reference But NOT Yet in Copy

| Flow | Status | Priority |
|------|--------|----------|
| VIP Flow | Defined in SOPs, no BKC copy yet | HIGH — rewards top 10% |
| Referral Flow | Defined in voice table, no copy | MEDIUM — advocacy engine |
| Product Launch Flow | SOP requested but file missing | HIGH — new product drops |

### 6.2 Flow Details Still TBD

- **Back-in-Stock Flow** — Referenced in sender persona matrix, not built
- **Preference Center Flow** — Needed for segment refinement
- **SMS Integration** — V24 rule exists but no SMS flow architecture
- **VIP Winback Variant** — Separate from standard winback for high-CLTV lapsed

### 6.3 Segmentation Gaps

- **Behavioral segments not yet wired** — Viewed Product/Cart metrics need Shopify snippet
- **RFM analysis layer** — Not yet built (referenced as SOP)
- **Predictive analytics** — Not yet implemented
- **Cross-flow suppression** — Needs master suppression segment built

---

## 7. CONVERSION FUNNEL METRICS

### 7.1 Key Performance Targets

| Metric | Target | Source |
|--------|--------|--------|
| Welcome flow conversion | 8-12%+ | Flow-Welcome SOP |
| Welcome E1 open rate | 30-50%+ | Flow-Welcome SOP |
| Cart abandonment recovery | 5-10% | Industry benchmark |
| Checkout abandonment recovery | 10-15% | Industry benchmark |
| Browse abandonment recovery | 2-5% | Industry benchmark |
| Post-purchase repeat rate (60d) | 15-25% | Journey Strategy |
| Winback reactivation rate | 3-5% | Flow-Winback SOP |
| VIP retention rate (12mo) | 90%+ | Journey Strategy |
| Unsubscribe rate (per email) | <0.5% | All flow SOPs |
| Spam complaint rate | <0.1% | Deliverability Doctrine |

### 7.2 Revenue Attribution by Flow

```
REVENUE CONTRIBUTION (estimated by flow type):

  Welcome Flow .............. 20-30% of email revenue (highest)
  Abandoned Cart ............ 10-20%
  Abandoned Checkout ........ 10-15%
  Browse Abandonment ........ 3-8%
  Post-Purchase Upsell ...... 10-15%
  Replenishment ............. 10-20% (highest per-email for consumables)
  Winback ................... 5-10%
  VIP ....................... 5-10%
  Campaigns ................ 20-30%
  Educational ............... 5-10%
```

---

## 8. BRAND CONSTANTS QUICK-REFERENCE

```
PRICING:         1 Pair $34.99 | 3+3 FREE $79.99 | 5+5 FREE $119.99
GUARANTEE:       60-Day Money Back (NEVER 30)
REVIEWS:         16,511 · 4.9★ · 100,000+ parents
SENDER:          "Lena from BrightKidCo" <support@brightkidco.com>
SHIPPING:        10 days · USA/UK/AU/NZ/CA · Never name carrier
FONT:            Questrial 400 (never bold body)
COLORS:          Green #039902 · Mint #DBFFCD · Cream #FBF7EB
                 Yellow #F5C84B · Gray #9AA8A7
FOOTER:          Shop · Parent Stories · Contact us · FAQ
SOCIAL:          Instagram · TikTok (NO Facebook)
RESEARCH:        49% SPARK stat · Kelly Mahler interoception
DISCOUNT:        [WELCOME10 / 10%OFF-BKCO — verify active]
```

---

*End of BKC Email Flow Architecture Map*
