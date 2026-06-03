# Layer 16 Round 2: Flow Architecture — Skill Loading

## Skills Loaded (14 total)

| # | Skill | Category | Status |
|---|-------|----------|--------|
| 1 | flow-welcome | email-marketing/flows | LOADED |
| 2 | flow-abandoned-cart | email-marketing/flows | LOADED |
| 3 | flow-abandoned-checkout | email-marketing/flows | LOADED |
| 4 | flow-post-purchase-new | email-marketing/flows | LOADED |
| 5 | flow-post-purchase-repeat | email-marketing/flows | LOADED |
| 6 | flow-cross-sell | email-marketing/flows | LOADED |
| 7 | flow-browse-abandonment | email-marketing/flows | LOADED |
| 8 | flow-site-abandonment | email-marketing/flows | LOADED |
| 9 | flow-sunset | email-marketing/flows | LOADED |
| 10 | flow-winback | email-marketing/flows | LOADED |
| 11 | flow-vip | email-marketing/flows | LOADED |
| 12 | flow-replenishment | email-marketing/flows | LOADED |
| 13 | strategy-customer-journey | email-marketing/strategy-analytics | LOADED |
| 14 | strategy | strategy | LOADED |

---

## Flow Architecture Frameworks

### 1. Customer Lifecycle Flow Map

The complete flow architecture maps to 6 customer journey stages:

```
Anonymous Visitor → Email Subscriber → First Purchase → Repeat Buyer → VIP → Advocate
```

**Flow assignments by stage:**

| Stage | Flows | Purpose |
|-------|-------|---------|
| Anonymous → Subscriber | Site Abandonment, Welcome | Capture + convert browsers |
| Subscriber → First Purchase | Welcome (8-email), Browse Abandonment, Abandoned Cart, Abandoned Checkout | Drive first conversion |
| First Purchase → Repeat | Post-Purchase New (4-email), Cross-Sell/Up-Sell, Replenishment | Reduce remorse, drive 2nd purchase |
| Repeat → VIP | Post-Purchase Repeat (2-email), VIP Flow | Loyalty deepening |
| VIP → Advocate | VIP Flow, Referral programs | Amplify word-of-mouth |
| At-Risk → Lapsed | Winback → Sunset → Suppression | Protect deliverability |

### 2. Flow Connection Architecture

Flows are interconnected — customers move between them:

- **Site Abandonment** (1 email) — catches visitors who didn't view products
- **Browse Abandonment** (3-5 emails) — catches product viewers who didn't cart
- **Abandoned Cart** (3 emails) — catches cart additions without checkout
- **Abandoned Checkout** (8 emails) — catches checkout starters who didn't buy
- **Welcome Flow** (8 emails) — converts new subscribers to first purchase
- **Post-Purchase New** (4 emails) — first-time buyer retention
- **Post-Purchase Repeat** (2-email) — repeat buyer loyalty + SMS conversion
- **Cross-Sell** (1 email) — immediate or delayed AOV increase
- **Replenishment** (1 email) — timed restock reminders
- **VIP Flow** (2 emails) — high-value customer rewards
- **Winback** (3 emails) — dormant customer re-engagement
- **Sunset** (2 emails) — list hygiene, final re-engagement attempt

### 3. The Recovery Funnel Hierarchy

Abandonment flows form a conversion funnel by intent level:

```
Site Abandonment (lowest intent — no product view)
  ↓
Browse Abandonment (mid intent — viewed product)
  ↓
Abandoned Cart (high intent — added to cart)
  ↓
Abandoned Checkout (highest intent — started checkout)
```

Each level is more aggressive and converts higher.

---

## Automation Trigger Patterns

### Metric-Based Triggers

| Flow | Primary Trigger | Metric Source |
|------|----------------|---------------|
| Welcome | New subscriber added to list | List/Segment trigger |
| Browse Abandonment | Viewed Product | Klaviyo Shopify integration |
| Abandoned Cart | Added to Cart | Shopify snippet (manual install) |
| Abandoned Checkout | Started Checkout | Klaviyo Shopify native |
| Post-Purchase New | Placed Order (1st) | Klaviyo Shopify native |
| Post-Purchase Repeat | Placed Order (2nd) | Klaviyo Shopify native |
| Cross-Sell (Immediate) | Placed Order | Klaviyo Shopify native |
| Cross-Sell (Delayed) | Fulfilled Order | Klaviyo Shopify native |
| Replenishment | Placed Order | Klaviyo Shopify native + product filter |
| VIP | Added to Segment | Segment-based trigger |
| Winback | Placed Order + time delay | Metric trigger + wait node |
| Sunset | Added to Segment | Segment-based trigger |
| Site Abandonment | Active On Site | Klaviyo native |

### Segment-Based Triggers (2 flows)

- **VIP Flow:** Triggered when customer "Added to Segment" — VIP segment (top 10-20% by spend/orders)
- **Sunset Flow:** Triggered when subscriber "Added to Segment" — unengaged segment (0 opens/clicks/purchases in 90+ days)

### Time-Delayed Triggers (1 flow)

- **Winback:** Placed Order trigger → Wait 60-120 days (non-replenishable) or 45-60 days (replenishable) → then flow emails begin

---

## Filter/Segment Design Patterns

### Universal Flow Filters

Every flow should include these core filters:

| Filter | Purpose | Applies To |
|--------|---------|------------|
| Placed Order 0 times since starting flow | Stop flow if customer converts | All recovery + nurturing flows |
| Has not been in flow in last X days | Prevent re-entry fatigue | All flows (7-180 days varies) |
| Cancelled Order 0 times since starting flow | Skip cancelled customers | Post-purchase flows |

### Flow-Specific Filters

| Flow | Unique Filters |
|------|---------------|
| Browse Abandonment | Checkout started 0 times, Placed order 0 times, Added to cart 0 times, Not in flow 15-30 days |
| Abandoned Cart | Checkout started 0 times, Not in flow 7-15 days |
| Abandoned Checkout | Placed Order 0, Not in flow 5 days |
| Site Abandonment | Placed Order 0, Checkout Started 0, Viewed Product 0, Added to Cart 0, Not in flow 30-45 days |
| Post-Purchase New | Placed Order = 1 over all time, Cancelled Order 0 |
| Post-Purchase Repeat | Placed Order = 2 over all time, Cancelled Order 0 |
| Replenishment | Product-specific filter ("Contains at least one of" specific product), Cancelled order 0 |
| VIP | Placed Order 0 since starting flow |
| Winback | Placed Order 0 since starting flow |
| Sunset | Not in flow 180 days |

### Segment Design Patterns

**VIP Segment (4 approaches):**

| Approach | Criteria | Best For |
|----------|----------|----------|
| A: Order count | Placed Order > X times over all time | High-frequency, low-AOV |
| B: Spend total | Total Spent > $X over all time | Low-frequency, high-AOV |
| C: Both AND | Order count > X AND Total Spent > $Y | Strict VIP — highest CLTV |
| D: Either OR | Order count > X OR Total Spent > $Y | Broader VIP — larger segment |

**Sunset Segment:**
- Condition 1: Opened Email = 0 times in last X days (60-180)
- Condition 2: Clicked Email = 0 times in last X days
- Condition 3: Placed Order = 0 times in last X days
- Exclude: Already suppressed or unsubscribed

---

## A/B Testing Frameworks for Flows

### Subject Line Testing Protocol

Every flow email should A/B test subject lines. Pattern:

- Sample size: 30-50% of recipients per variant
- Winner selection: Higher open rate after 4-6 hours
- Send winning variant to remaining recipients

### Subject Line Pools by Flow Type

**Welcome Flow:**
- "Welcome to [Brand] 🎉" vs "You're in! Here's your [X]% off"
- Curiosity gap, discount-first, brand-first variants

**Browse Abandonment:**
- "See something you liked?" vs "Have your eyes on something?" vs "You've got good taste"
- Gentle reminder, personal, taste-based variants

**Abandoned Cart:**
- "Whatcha got there?" vs "You left something behind…" vs "Forget something?"
- Casual, direct, question-based variants

**Abandoned Checkout:**
- "Need a little reminder?" vs "RE: Your Order" vs "[First Name], looks like this is yours..."
- Professional, reference-style, personal variants

**Post-Purchase:**
- "Thank you, [first_name]!" vs "You're what makes us great"
- Gratitude, validation variants

**Winback:**
- "It's been awhile…" vs "How's it been?" vs "We miss you!"
- Time-based, personal, emotional variants

**Sunset:**
- "Haven't heard from you lately" vs "Should we take a break?" vs "We miss you 💔"
- Honest, question, emotional variants

### Flow Variant Testing

Beyond subject lines, test:
- **Send timing:** 30 min vs 1 hr vs 2 hr for abandonment flows
- **Discount depth:** 10% vs 15% vs 20% for recovery flows
- **Email count:** 3-email core vs 5-email extended for browse abandonment
- **Content format:** Plain text vs branded template for post-purchase
- **Re-entry windows:** 7 days vs 15 days for cart abandonment

### Decision Frameworks for Testing

**Browse Abandonment — 3 vs 5 emails:**
- AOV > $75: Use full 5-email sequence
- AOV $30-$75: Use 3-email core
- AOV < $30: Use 3-email core without discounts

**Cart Abandonment — Re-entry window:**
- Low-cost/impulse (< $50): 7-day re-entry
- Mid-range ($50-$150): 10-day re-entry
- High-consideration (> $150): 15-day re-entry

**Browse Abandonment — Re-entry window:**
- High-frequency (fashion, accessories): 15-day
- Consideration (electronics, furniture): 30-day
- Seasonal: 15-20 days peak, 30 days off-season

---

## Flow Timing Architecture

### Email Sequence Timing by Flow

| Flow | Email 1 | Email 2 | Email 3 | Email 4 | Email 5 | Email 6 | Email 7 | Email 8 |
|------|---------|---------|---------|---------|---------|---------|---------|---------|
| Welcome | Immediate | +1 day | +1 day | +2 days | +2 days | +3 days | +3 days | +4 days |
| Browse Abandon | 1-2 hrs | +1 day | +1 day | +1 day (opt) | +1 day (opt) | — | — | — |
| Abandoned Cart | 1-2 hrs | +1 day | +1 day | — | — | — | — | — |
| Abandoned Checkout | 30 min-2 hrs | +1 day | +1 day | +1 day | +2 days | +2 days (split) | +1-2 days | +2-3 days |
| Post-Purchase New | +1 day | +3-5 days | +3-7 days | +7-14 days | — | — | — | — |
| Post-Purchase Repeat | +1 day | +3-10 days | — | — | — | — | — | — |
| Cross-Sell (Immediate) | 10-30 min | — | — | — | — | — | — | — |
| Cross-Sell (Delayed) | 10-30 days | — | — | — | — | — | — | — |
| Replenishment | Buyer cycle - 2-5 days | — | — | — | — | — | — | — |
| VIP | Immediate | +7 days | — | — | — | — | — | — |
| Winback | +60-120 days (wait) | +10 days | +1 day | — | — | — | — | — |
| Sunset | Immediate | +7 days | — | — | — | — | — | — |
| Site Abandonment | Immediate | — | — | — | — | — | — | — |

---

## Dynamic Content Patterns

### Common Dynamic Variables

| Variable | Usage | Flow |
|----------|-------|------|
| `{{ event.ImageURL }}` | Product image | Browse/Cart/Checkout abandonment |
| `{{ event.Name }}` | Product name | Browse/Cart/Checkout abandonment |
| `{{ event.Price\|striptags }}` | Clean price (no HTML) | Cart abandonment (critical — raw Price includes HTML) |
| `{{ event.Price\|default:'' }}` | Fallback price | Browse abandonment |
| `{{ event.URL }}` | Product page link | Browse abandonment |
| `{{ first_name }}` | Personalization | All flows |

### Dynamic Block Types

| Block Type | Use Case | Flows |
|------------|----------|-------|
| Split block | Cart abandon dynamic content | Abandoned Cart |
| Table block | Browse abandon dynamic content | Browse Abandonment |
| Product block | Bestsellers/trending | Welcome, Site Abandon, Cross-Sell |
| Dynamic coupon | Personalized discount codes | Abandoned Checkout, VIP |

---

## Critical Implementation Notes

### The Cart vs Checkout Distinction
- Klaviyo's default "Abandoned Cart" flow is actually checkout abandonment (fires on "Started Checkout")
- True cart abandonment requires manual "Added to Cart" metric setup via Shopify snippet
- Both flows can coexist — cart flow catches earlier funnel, checkout flow catches deeper intent

### Replenishment Flow Classification
- Functions as "crossover between post-purchase and abandoned cart"
- Trigger: Placed Order + product-specific filter
- Timing: Buyer cycle minus 2-5 days (e.g., 25 days for 30-day product)
- Re-entry: Same as buyer cycle (each reorder re-enters for next cycle)

### Abandoned Checkout Split Logic
- After Email 5, split into first-time vs returning buyer paths
- Returning buyers: Personal text-based check-in only (no discount — they've proven they'll buy at full price)
- New buyers: Flash discount → urgency → personal outreach

### Sunset Flow = List Hygiene, Not Revenue
- Purpose: Protect deliverability by removing unengaged subscribers
- 2 emails: "We miss you" with stay/unsubscribe options → final farewell with "Stay on the List"
- After flow: Suppress profile (native Klaviyo or tag-based)

---

## Missing Flow Skills

All 12 expected flow-* skills were found and loaded. No missing skills.

The complete flow skill inventory:
1. flow-welcome ✓
2. flow-abandoned-cart ✓
3. flow-abandoned-checkout ✓
4. flow-post-purchase-new ✓
5. flow-post-purchase-repeat ✓
6. flow-cross-sell ✓
7. flow-browse-abandonment ✓
8. flow-site-abandonment ✓
9. flow-sunset ✓
10. flow-winback ✓
11. flow-vip ✓
12. flow-replenishment ✓

---

## Strategy Skill Summary

The `strategy` skill provides the LLM Council methodology (5 modes: Contrarian, First Principles, Expansionist, Outsider, Executor) and strategic frameworks (SWOT, Porter's Five Forces, Blue Ocean, BCG Matrix, Ansoff Matrix). It includes review gates for research, copy, and ops outputs.

The `strategy-customer-journey` skill provides the complete lifecycle map with stage transitions, email touchpoint assignments, VIP segment strategy, retention vs acquisition economics, and journey acceleration tactics.

---

*Loaded: 14 skills total (12 flow-* + strategy-customer-journey + strategy)*
*All flow-* skills present — none missing*
*Source: Hermes skills library at /root/.hermes/profiles/ops14/skills/*
