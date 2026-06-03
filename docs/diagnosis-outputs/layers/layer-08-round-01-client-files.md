# Layer 8 — Round 1: Segmentation Mechanics (Client Files)

**Source:** All 7 client files exhaustively read
**Extracted:** 2026-05-24
**Purpose:** Complete technical segmentation mechanics — pop-up, Klaviyo tags, profile properties, flow routing, segment definitions, migration strategy

---

## 1. POP-UP SPECIFICATION

**Source:** DOC1-MASTER-FOUNDATION.txt Section 16 (lines 1015-1068), DOC6-USAGE-GUIDE.txt Section 7 (lines 772-773)

### Technical Specs
| Attribute | Value |
|-----------|-------|
| Trigger | 8-15 seconds on site OR exit-intent |
| Display | 1-step pop-up with email + question |
| Mobile | Yes, full-screen on mobile |
| Frequency cap | Max 1x per 7 days per visitor |
| Tool | Klaviyo Forms or external tool (Privy, Justuno) |

### Step 1 Content
| Element | Text |
|---------|------|
| **Headline** | "Get 10% off + a potty training plan built for kids like yours." |
| **Subheadline** | "What describes your child best?" |
| **Option 1** | [ Talks about potty but won't actually do it ] → Tag: `avatar_level1` |
| **Option 2** | [ Sensory issues, tried many methods ] → Tag: `avatar_level2` |
| **Option 3** | [ Non-verbal or high support needs ] → Tag: `avatar_level3` |
| **Option 4** | [ Still figuring out what's going on ] → Tag: `avatar_general` |
| **Email Field** | [ enter your email ] |
| **CTA Button** | [ Get My 10% Code ] |
| **Privacy Note** | "We respect your inbox. Unsubscribe anytime." |

### Step 2 (immediately after submit)
| Element | Text |
|---------|------|
| **Headline** | "Your code is ready." |
| **Code Display** | WELCOME10 (prominent, large font) |
| **Note** | "Auto-applies at checkout. Valid 7 days." |
| **CTA Button** | [ Shop Now ] |
| **Close Option** | "or keep browsing" |

### Critical: Code is displayed DIRECTLY (not via email confirmation). Customer can buy immediately without checking inbox.

### Klaviyo Implementation (Pop-up)
- Email + tag written to Klaviyo on form submit
- Tag triggers Welcome Flow (level-specific variant)
- Klaviyo JavaScript snippet on all pages for web tracking

---

## 2. KLAVIYO PROFILE PROPERTIES

**Source:** DOC1-MASTER-FOUNDATION.txt Section 19 (lines 1287-1301)

### Standard Properties
| Property | Type | Notes |
|----------|------|-------|
| `first_name` | string | |
| `last_name` | string | |
| `email` | string | |
| `created_at` | datetime | |
| `consent` | boolean | For GDPR |

### Custom Properties (needed by BrightKidCo)
| Property | Type | Values | Notes |
|----------|------|--------|-------|
| `avatar_level` | string | `"level1"` / `"level2"` / `"level3"` / `"general"` | Core segmentation — set by pop-up or Level-Detection mail |
| `child_age` | string | optional | If mom shared it |
| `signup_source` | string | `"popup"` / `"checkout"` / `"referral"` | Where subscriber entered ecosystem |
| `welcome_flow_completed` | boolean | true/false | Prevents re-entering welcome flow |
| `last_purchase_pack_size` | string | `"1pair"` / `"3+3"` / `"5+5"` | Drives replenishment routing |
| `vip_customer` | boolean | true/false | High LTV flag (3+ orders) |

---

## 3. COMPLETE TAG TAXONOMY

**Source:** DOC1-MASTER-FOUNDATION.txt Section 19 (lines 1302-1321)

### Tags from Pop-Up (Avatar Level)
| Tag | Trigger | Welcome Flow Variant |
|-----|---------|---------------------|
| `avatar_level1` | Button: "Talks about potty but won't actually do it" | Level 1 (DOC 2) |
| `avatar_level2` | Button: "Sensory issues, tried many methods" | Level 2 (DOC 3) |
| `avatar_level3` | Button: "Non-verbal or high support needs" | Level 3 (DOC 4) |
| `avatar_general` | Button: "Still figuring out what's going on" | General Fallback (DOC 5) |

### Tags from Behavior (Engagement Tracking)
| Tag | Trigger | Purpose |
|-----|---------|---------|
| `welcome_completed` | Subscriber completes all 8 Welcome mails | Progression tracking |
| `welcome_completed_no_purchase` | Completed Welcome without purchase | Trigger FAQ/Objection flow |
| `post_purchase_active` | Purchase made | Enter post-purchase flows |
| `at_risk_no_open` | 3-7 days no opens | Trigger Support At-Risk flow |
| `inactive_60_days` | 60 days no engagement | Trigger Winback Path B |
| `inactive_120_days` | 120 days no engagement | Trigger Sunset flow |

### Tags from Purchase (Order-Based)
| Tag | Trigger | Purpose |
|-----|---------|---------|
| `buyer_1pair` | Purchased 1 Pair | Replenishment Path A |
| `buyer_3plus3` | Purchased 3+3 Bundle | Replenishment Path B |
| `buyer_5plus5` | Purchased 5+5 Bundle | Replenishment Path C |
| `repeat_buyer` | 2+ purchases | Loyalty routing |
| `vip_buyer` | 3+ orders | VIP treatment, excluded from some promotions |

### Tag Count: 15 tags minimum (4 avatar + 6 behavior + 5 purchase)

---

## 4. FLOW ROUTING RULES

**Source:** DOC1-MASTER-FOUNDATION.txt Sections 17 (lines 1071-1214), 19 (lines 1322-1354), DOC6-USAGE-GUIDE.txt Section 7 (lines 789-805)

### Flow Trigger Summary (All 25 Flows)

#### PRE-PURCHASE FLOWS
| # | Flow | Klaviyo Trigger | Audience Filter | Segmentation | Phase |
|---|------|-----------------|-----------------|-------------|-------|
| 01 | Welcome Flow | Form Submit | `avatar_levelX` tag | 4 level variants | 1 |
| 02 | Cart Abandonment | Cart Abandoned | No purchase 24h | Cross-level | 1 |
| 03 | Checkout Abandonment | Started Checkout | No purchase 1h | Cross-level | 1 |
| 04 | Browse Abandonment | Viewed Product | No cart 24h | Cross-level | 2 |

#### TRANSACTIONAL FLOWS
| # | Flow | Klaviyo Trigger | Segmentation | Phase |
|---|------|-----------------|-------------|-------|
| 05 | Order Confirmation | Order Placed | Cross-level | 1 |
| 06 | Shipping Notification | Order Fulfilled | Cross-level | 1 |
| 07 | Out for Delivery | Carrier update | Cross-level | 1 |
| 08 | Arrived & Welcome | Carrier Delivered | Cross-level | 1 |

#### POST-PURCHASE FLOWS
| # | Flow | Klaviyo Trigger | Segmentation | Phase |
|---|------|-----------------|-------------|-------|
| 09 | PP-Direct Upsell | Order Placed + Day 1-3 | Cross-level | 1 |
| 10 | PP-Mary S. Story | Order Placed + Day 3 | Cross-level | 2 |
| 11 | PP-Education Day 0-21 | Order Placed | Cross-level | 2 |
| 12 | PP-Level-Detection | Order Placed + Day 14 | Cross-level (asks level) | 1 |
| 13 | PP-Extended Education | Level tag + Day 22 | 4 level variants | 3 |
| 14 | PP-Extended Upsell | Day 28 + level tag | Level-aware | 2 |
| 15 | PP-Mid Check-In | Day 30-60 | Cross-level | 2 |
| 16 | PP-Support At-Risk | Day 3-7 no opens | Cross-level | 3 |

#### LIFECYCLE FLOWS
| # | Flow | Klaviyo Trigger | Segmentation | Phase |
|---|------|-----------------|-------------|-------|
| 17 | Replenishment A (1-Pair) | 1-pair order + Day 14 | Cross-level | 2 |
| 18 | Replenishment B (3+3) | 3+3 order + Day 75 | Cross-level | 2 |
| 19 | Replenishment C (5+5) | 5+5 order + Day 150 | Cross-level | 2 |
| 20 | Review Request | Day 30 post-purchase | Cross-level | 2 |
| 21 | Winback Path A (Post-Buyer) | Last purchase + 90d no engagement | 4 level variants | 2 |
| 22 | Winback Path B (Never-Bought) | Signup + 60d no purchase | 4 level variants | 3 |
| 23 | Sunset Flow | 120d inactive | Cross-level | 3 |

#### EDUCATION / SPECIAL FLOWS
| # | Flow | Klaviyo Trigger | Segmentation | Phase |
|---|------|-----------------|-------------|-------|
| 24 | FAQ/Objection Library | Welcome end + no purchase | Cross-level | 3 |
| 25 | Referral Flow | Day 30 + positive engagement | Cross-level | 3 |

### Segment Logic for Flow Routing

**Welcome Flow Routing:**
```
IF avatar_level == "level1"  → Welcome Flow Level 1
IF avatar_level == "level2"  → Welcome Flow Level 2
IF avatar_level == "level3"  → Welcome Flow Level 3
IF avatar_level == "general" → Welcome Flow General Fallback
```
Condition: `welcome_completed = false` prevents re-entry.

**Post-Purchase Routing:**
- Day 0-21 Education → `buyer_*` tag + days since purchase
- Day 14 Level-Detection → IF `avatar_level = unknown` (general or empty)
- Level-Specific Education (Phase 3) → `avatar_level` tag known after Day 14

**Cart/Checkout/Browse Routing:**
- Klaviyo cookies track even without pop-up opt-in
- Trigger via "Started Checkout" / "Active on Site" / "Viewed Product"
- Always cross-level (DOC 5) regardless of known tag

**Level-Segmented vs Cross-Level Rule:**
- Before level tag known → Cross-Level (DOC 5)
- After level tag known → Level-specific (DOC 2/3/4)
- Exception: High-velocity flows (Cart/Checkout/Browse) stay cross-level even if tag known (speed > segmentation)

---

## 5. EXIT CONDITIONS PER FLOW

**Source:** DOC1-MASTER-FOUNDATION.txt Section 19 (lines 1349-1354)

EVERY flow MUST have these exit conditions:
1. **Made a purchase** (for conversion flows) — person exits welcome/cart/checkout once they buy
2. **Unsubscribed** — removed from all flows
3. **Already in higher-priority flow** — prevents conflicting mail sends

Additional implicit exit conditions per flow type:
- Welcome Flow: exits when all 8 mails sent OR purchase made
- Cart Abandonment: exits when cart recovered OR 72h elapsed
- Post-Purchase: exits when all mails sent OR refund processed
- Sunset: exits when subscriber is permanently suppressed

---

## 6. SEGMENT DEFINITIONS

**Source:** DOC1-MASTER-FOUNDATION.txt (lines 78-89), DOC2 (lines 13-14), DOC3 (lines 13-15), DOC4 (lines 12-14), DOC5 (lines 10-19), DOC6 Section 7

### Avatar Level Segments

| Segment | Tag | Pop-up Button | Audience Share | Child Profile | DOC |
|---------|-----|---------------|----------------|---------------|-----|
| Level 1 | `avatar_level1` | "Talks about potty but won't actually do it" | ~35% | Verbal, 3-5 yrs, 1-3 failed attempts, Pre-K pressure | DOC 2 |
| Level 2 | `avatar_level2` | "Sensory issues, tried many methods" | ~40% (LARGEST) | Mixed verbal, 5-7 yrs, 3-5+ failed attempts, BCBA context | DOC 3 |
| Level 3 | `avatar_level3` | "Non-verbal or high support needs" | ~25% | Non-verbal, 6-10+ yrs, 5+ yrs attempts, resignation accepted | DOC 4 |
| General Fallback | `avatar_general` | "Still figuring out what's going on" | ~50% real volume | Cross-level mix (5 sub-groups) | DOC 5 |

### General Fallback Sub-Segments (5 Groups)
**Source:** DOC5 Sections 1-3 (lines 101-351)

| Sub-Group | Share of GF | Share of Total | Description |
|-----------|-------------|----------------|-------------|
| A — Diagnostic Entrants | ~25% | ~10% | No formal ASD diagnosis yet, waiting for evaluation |
| B — Diagnosis-Rejecters | ~15% | ~6% | Has diagnosis but rejects labels |
| C — Sensory-Difference Parents | ~25% | ~10% | SPD/ADHD, no ASD, but interoception issues |
| D — Overwhelmed Non-Selectors | ~25% | ~10% | Has ASD child but didn't select pop-up out of overwhelm |
| E — Cart/Browse Without Opt-In | ~10% | ~14% | Captured via Klaviyo cookie, no level tag |

### Purchase-Based Segments (Hint Only)

| Purchase Signal | Level Hint | Certainty |
|----------------|------------|-----------|
| Size 2T-3T | Likely Level 1 (3-4 yrs) | Low |
| Size 4T-5T | Mix (Level 1+2) | Low |
| Size XL/XXL | Likely Level 3 (7+) | Low |
| 1 Pair buyer | Tentative, new | Low |
| 3+3 Bundle buyer | Committed | Low |
| 5+5 Bundle buyer | High-investment, often Level 2-3 | Low |

### Reply Content Level Indicators
**Source:** DOC5 Section 31 (lines 1281-1301)

| Level | Keywords in Reply |
|-------|-------------------|
| Level 1 | "Pre-K is coming", age 3/4/5, "Oh Crap didn't work", "verbal but...", "almost trained" |
| Level 2 | "BCBA / ABA / OT", age 5/6/7, "sensory issues", "prompt-dependent", "withholding", "years of trying" |
| Level 3 | "Non-verbal / AAC", age 8/9/10, "never been trained", "specialty diapers", "years of giving up", "Medicaid" |

---

## 7. SEGMENT MIGRATION STRATEGY

**Source:** DOC5 Part H (lines 1192-1374)

### Why Migration Is Critical
General Fallback is NOT an end state — it is a TEMPORARY state until mom self-identifies.
1. Level-specific mails convert better
2. CLV higher with accurate segmentation
3. Post-purchase education can be personalized
4. Reduce refunds through accurate expectation management
5. Future marketing can be targeted

### 4 Migration Paths

#### Path 1: Click-Based Migration (strong)
- Customer clicks level-specific story links in General Fallback mails
- Click → automatic tag update via Klaviyo
- Example: Click on "Sarah's story (4yo verbal son)" → tag `avatar_level1`
- 4 anchors per mail: L1 story link, L2 story link, L3 story link, Cross-Level resource link
- Klaviyo: unique UTM per link → click event → update `avatar_level` profile property

#### Path 2: Reply-Based Migration
- Customer replies to mail with details about child
- Reply content analyzed for level indicators (see keywords above)
- Tag set based on reply content
- Klaviyo auto-tagging via reply-text-analysis possible but rarely implemented

#### Path 3: Purchase-Based Hints
- Underwear size → age hint → level hint
- Bundle size → experience hint
- Order Notes / custom field answers
- Klaviyo properties based on Shopify Order Data
- IMPORTANT: These are HINTS only, not confirmation

#### Path 4: Post-Purchase Level-Detection Mail (STRONGEST)
- Day 14 post-purchase sends dedicated mail
- 4 re-selection buttons mirroring pop-up options:
  - Button 1 → `avatar_level1`: "Verbal, 'almost trained' but inconsistent"
  - Button 2 → `avatar_level2`: "Sensory issues, tried many methods"
  - Button 3 → `avatar_level3`: "Non-verbal or high support needs"
  - Button 4 → `avatar_general` (stays): "I'm still figuring it out"
- Expected: Open 65-75%, Click 35-50%, Migration ~40-50%
- After 7 days no click: optional gentle reminder
- After 14 days no click: stays General permanently

---

## 8. ECOSYSTEM ARCHITECTURE — SEGMENTATION FLOW

**Source:** DOC6 Section 7 (lines 851-881)

```
VISITOR lands on site
│
↓
POP-UP appears (or Cart action)
│
├─ Pop-up filled with level selection
│ ├─ "Talks about potty"        → avatar_level1 → Welcome Flow L1 (DOC 2)
│ ├─ "Sensory issues"           → avatar_level2 → Welcome Flow L2 (DOC 3)
│ ├─ "Non-verbal"               → avatar_level3 → Welcome Flow L3 (DOC 4)
│ └─ "Still figuring out"       → avatar_general → Welcome Flow GF (DOC 5)
│
└─ Pop-up ignored, but Cart action
  └─ Cart/Checkout/Browse Flow (DOC 5 — Cross-Level)
|
▼
WHICHEVER PATH: Customer buys → Post-Purchase starts
│
├─ Day 0-13: Cross-Level Onboarding (DOC 5)
│ ├─ Order Confirm + Cross-Sell
│ ├─ Shipping
│ ├─ Arrived (with upsell)
│ └─ Direct Upsell Day 1-3
│
├─ Day 14: Level-Detection Mail (DOC 5)
│ ├─ Click L1 button → avatar_level1
│ ├─ Click L2 button → avatar_level2
│ ├─ Click L3 button → avatar_level3
│ └─ No click → stays avatar_general
│
└─ Day 14+: Phase 2/3 Flows (Level-specific if tag known, otherwise General)
```

---

## 9. LIST STRUCTURE & HEALTH

**Source:** DOC1-MASTER-FOUNDATION.txt (lines 1269-1286), DOC6 (lines 632-636)

### Sending Infrastructure
- From Email: `support@brightkidco.com`
- From Name: "Lena from BrightKidCo"
- Reply-To: `support@brightkidco.com`
- Sending Subdomain: `send.brightkidco.com`
- Domain Authentication: DKIM, SPF, DMARC required
- Klaviyo-Shopify integration installed

### List Health Mentions
- Privacy note on pop-up: "We respect your inbox. Unsubscribe anytime."
- Unsubscribe link in every footer (`{% unsubscribe %}`)
- Consent tracking for GDPR
- Sunset flow at 120 days inactivity
- No Trustpilot links (no page exists)
- No mention of specific list cleaning or maintenance procedures beyond sunset and winback flows

---

## 10. AUDIENCE DISTRIBUTION INSIGHTS

**Source:** DOC1 Section 1 (lines 78-89), DOC6 Section 7 (lines 741-765)

### First 30 Days After Pop-Up (Distorted Distribution)
- ~50% choose "Still figuring out" → General Fallback
- ~50% distribute across Level 1/2/3
- Reason: pop-up self-selection doesn't perfectly correlate with clinical level

### By Phase
- Most BrightKidCo subscribers are in Phase 2-3
- Phase 1 is top-of-funnel (rare)
- Phase 4 is win-back audience

### By Level Distribution (Actual Audience)
| Level | Audience Share | Dominant Phase | Hope Level | Tonality |
|-------|---------------|----------------|------------|----------|
| Level 1 | ~35% | Phase 2 | 70% hope | 70/30 Hope/Realism |
| Level 2 | ~40% (largest) | Phase 3 | 40% hope | 40/60 Hope/Realism |
| Level 3 | ~25% | Phase 4 | 20% hope | 20/80 Hope/Realism |
| General Fallback | ~50% real volume | Mixed | 50/50 | 50/50 Hope/Realism |

---

## Source Reference Index

| Data Point | Source File | Line(s) |
|------------|-------------|---------|
| Pop-up spec (headline, buttons, tags) | DOC1-MASTER-FOUNDATION.txt | 1015-1068 |
| Flow overview (25 flows) | DOC1-MASTER-FOUNDATION.txt | 1071-1214 |
| Phased rollout | DOC1-MASTER-FOUNDATION.txt | 1217-1263 |
| Klaviyo profile properties | DOC1-MASTER-FOUNDATION.txt | 1287-1301 |
| Klaviyo tags (avatar, behavior, purchase) | DOC1-MASTER-FOUNDATION.txt | 1302-1321 |
| Segment logic / flow routing | DOC1-MASTER-FOUNDATION.txt | 1322-1354 |
| Exit conditions | DOC1-MASTER-FOUNDATION.txt | 1349-1354 |
| Audience distribution (pop-up distortion) | DOC1-MASTER-FOUNDATION.txt | 78-89 |
| Sending infrastructure | DOC1-MASTER-FOUNDATION.txt | 1269-1286 |
| Segmentation strategy (big picture) | DOC6-USAGE-GUIDE.txt | 714-901 |
| Visual flow diagram | DOC6-USAGE-GUIDE.txt | 851-881 |
| Which flows level-segmented vs cross-level | DOC6-USAGE-GUIDE.txt | 789-805 |
| Segmentation principles | DOC6-USAGE-GUIDE.txt | 827-847 |
| Level 1 selection → avatar_level1 tag | DOC2-LEVEL1.txt | 13-14 |
| Level 2 selection → avatar_level2 tag | DOC3-LEVEL2.txt | 13-15 |
| Level 3 selection → avatar_level3 tag | DOC4-LEVEL3.txt | 12-14 |
| General Fallback selection paths | DOC5-GENERAL-FALLBACK.txt | 10-19 |
| GF 5 sub-groups (A-E) | DOC5-GENERAL-FALLBACK.txt | 101-264 |
| GF sub-group distribution | DOC5-GENERAL-FALLBACK.txt | 300-328 |
| Why they didn't level-segment | DOC5-GENERAL-FALLBACK.txt | 331-357 |
| Segment migration strategy | DOC5-GENERAL-FALLBACK.txt | 1192-1374 |
| Click-based migration | DOC5-GENERAL-FALLBACK.txt | 1240-1272 |
| Reply-based migration + keywords | DOC5-GENERAL-FALLBACK.txt | 1274-1308 |
| Purchase-based hints | DOC5-GENERAL-FALLBACK.txt | 1310-1332 |
| Level-Detection mail (Day 14) | DOC5-GENERAL-FALLBACK.txt | 1334-1374 |
| Onboarding workflow | Onboarding-todos.txt | 1-149 |
| Brand constants (pricing, sender, URLs) | DOC6-USAGE-GUIDE.txt | 116-168 |
| 4 avatar levels summary | DOC6-USAGE-GUIDE.txt | 741-765 |

---

*End of Layer 8 Round 1 extraction — all 7 files read completely, all segmentation mechanics documented with source references.*
