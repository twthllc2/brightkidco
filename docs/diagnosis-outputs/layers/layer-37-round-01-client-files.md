# Layer 37 — Round 1: Klaviyo Technical Setup (Client File Exhaustion)

Extracted from: DOC6-USAGE-GUIDE.txt, Onboarding-todos.txt, Claude-Project-Instructions.txt, overnight-plan.md (L605-616)

---

## 1. Custom Profile Properties

| Property | Type | Allowed Values | Source |
|----------|------|----------------|--------|
| `avatar_level` | string | `level1`, `level2`, `level3`, `general` | overnight-plan.md:607 |
| `child_age` | string (optional) | Free-form age if the mom shared | overnight-plan.md:607 |
| `signup_source` | string | `popup`, `checkout`, `referral` | overnight-plan.md:607 |
| `welcome_flow_completed` | boolean | true/false | overnight-plan.md:607 |
| `last_purchase_pack_size` | string | `1pair`, `3+3`, `5+5` | overnight-plan.md:607 |
| `vip_customer` | boolean | true/false (high LTV) | overnight-plan.md:607 |

---

## 2. Tags

### Avatar Tags (from Pop-Up)

Set by the 1-step pop-up which has email + 1 question with 4 buttons. Each button maps to one tag.

| Tag | Segment | Tonality | Audience % |
|-----|---------|----------|------------|
| `avatar_level1` | Verbal, 3-5 yrs, Pre-K driven | 70% hope | ~35% |
| `avatar_level2` | Mixed verbal, 5-7 yrs, BCBA context | 40% hope | ~40% (LARGEST) |
| `avatar_level3` | Non-verbal, 6-10+ yrs, dignity-first | 20% hope | ~25% |
| `avatar_general` | Cross-level, diagnostic-pending, label-rejecters | 50/50 hope | ~50% real volume |

Source: DOC6-USAGE-GUIDE.txt:172-182, Claude-Project-Instructions.txt:199-210, overnight-plan.md:609

### Behavioral Tags

| Tag | Meaning | Source |
|-----|---------|--------|
| `welcome_completed` | Finished welcome flow | overnight-plan.md:609 |
| `welcome_completed_no_purchase` | Finished welcome flow, never bought | overnight-plan.md:609 |
| `post_purchase_active` | Bought, currently engaged | overnight-plan.md:609 |
| `at_risk_no_open` | No opens recently | overnight-plan.md:609 |
| `inactive_60_days` | No engagement for 60 days | overnight-plan.md:609 |
| `inactive_120_days` | No engagement for 120 days | overnight-plan.md:609 |

### Purchase Tags

| Tag | Meaning | Source |
|-----|---------|--------|
| `buyer_1pair` | Bought single pair ($34.99) | overnight-plan.md:609 |
| `buyer_3plus3` | Bought 3+3 bundle ($79.99) | overnight-plan.md:609 |
| `buyer_5plus5` | Bought 5+5 bundle ($119.99) | overnight-plan.md:609 |
| `repeat_buyer` | Multiple purchases | overnight-plan.md:609 |
| `vip_buyer` | High LTV customer | overnight-plan.md:609 |

---

## 3. Flow Triggers

### Welcome Flow
- **Trigger:** Form Submit (pop-up)
- **Filter:** avatar_level tag determines which variant (L1/L2/L3/General)
- **Tag routing:** Each of the 4 pop-up buttons sets a different avatar tag → routes to the correct Welcome Flow variant
- **Source:** overnight-plan.md:611, DOC6:772-776

### Cart Abandonment
- **Trigger:** Cart Abandoned
- **Condition:** No purchase in 24 hours
- **Cross-level:** YES (uses DOC 5, even if avatar tag known — speed > segmentation)
- **Source:** overnight-plan.md:611, DOC6:793

### Checkout Abandonment
- **Trigger:** Started Checkout
- **Condition:** No purchase in 1 hour
- **Cross-level:** YES (uses DOC 5)
- **Source:** overnight-plan.md:611, DOC6:794

### Browse Abandonment
- **Trigger:** Viewed Product
- **Condition:** No cart added in 24 hours
- **Cross-level:** YES (uses DOC 5)
- **Source:** overnight-plan.md:611, DOC6:795

### Order Confirmation
- **Trigger:** Order Placed
- **Condition:** All customers (no filter)
- **Cross-level:** YES
- **Source:** overnight-plan.md:611, DOC6:796

### Shipping Notification
- **Trigger:** Order Fulfilled
- **Condition:** All customers
- **Cross-level:** YES
- **Source:** overnight-plan.md:611, DOC6:797

### Arrived & Welcome
- **Trigger:** Carrier Delivered
- **Condition:** All customers
- **Cross-level:** YES
- **Source:** overnight-plan.md:611, DOC6:798

### Post-Purchase Direct Upsell
- **Trigger:** Order Placed
- **Timing:** Days 1-3 after purchase
- **Cross-level:** YES
- **Upsell logic:**
  - 1-Pair buyer → upsell to 3+3 (Replenishment, Path A)
  - 3+3 buyer → upsell to 5+5 (Path B)
  - 5+5 buyer → accessory cross-sell (Wash Bag, Mattress, etc.)
- **Source:** overnight-plan.md:611, DOC6:593-597, DOC6:799

### Post-Purchase Level-Detection
- **Trigger:** Order Placed
- **Timing:** Day 14
- **Condition:** No level tag set (still `avatar_general`)
- **Mechanism:** Mail with 4 re-selection buttons → click sets avatar tag → migration to specific level for future flows
- **Source:** overnight-plan.md:611, DOC6:777-780, DOC6:800

---

## 4. Exit Conditions

For every flow:

| Exit Condition | Applies To | Source |
|----------------|------------|--------|
| Made a purchase | Conversion flows (Cart, Checkout, Browse) | overnight-plan.md:613 |
| Unsubscribed | All flows | overnight-plan.md:613 |
| Already in a higher-priority flow | All flows | overnight-plan.md:613 |

---

## 5. Technical Implementation Details

### Email Sender Configuration
- From Email: `support@brightkidco.com`
- From Name: `Lena from BrightKidCo`
- Reply-To: `support@brightkidco.com`
- Sending Subdomain: `Send.brightkidco.com`
- Source: Claude-Project-Instructions.txt:148-151, DOC6:632-635

### Email Platform
- Klaviyo (confirmed in Claude-Project-Instructions.txt:52)

### Discount Code
- Manual entry code: `10%OFF-BKCO`
- Auto-apply link: `https://www.brightkidco.com/discount/10%25OFF-BKCO`
- Source: DOC6:522-524, Claude-Project-Instructions.txt:181-182

### Segmentation Architecture
- Pop-up: 1-step with email + 1 question → 4 buttons → 4 tags
- Tag determines Welcome Flow variant AND tonality
- Before level tag known → Cross-Level (DOC 5)
- After level tag known → Level-specific (DOC 2/3/4)
- For high-velocity flows (Cart/Checkout) → Cross-Level even if tag known (speed > segmentation)
- Source: DOC6:772-805

### Cart Recovery Logic
- Has 1 Pair in cart → Upsell to 3+3 ("most parents need more")
- Has 3+3 in cart → Reminder + Free Shipping emphasis
- Has 5+5 in cart → Total value emphasis ($119.99 vs $34.99 × 10 = $349.90)
- Source: DOC6:586-592

### Post-Purchase Level Detection (Day 14)
- Only triggers for `avatar_general` customers
- Mail presents 4 buttons (Level 1/2/3/General)
- Click on button → sets avatar tag
- Migration to specific level for all future flows
- No click → stays `avatar_general`
- Source: DOC6:777-780, DOC6:874-878

### Purchase Hints (backend logic)
- Underwear size gives age hint → level hint
- Bundle size gives experience hint
- Source: DOC6:782-783

### Mail Output Format (Klaviyo Implementation Notes per mail)
Every mail draft must include:
- Trigger setup
- Exit conditions
- Segment filters
- Source: DOC6:287-288, Claude-Project-Instructions.txt:322-323

### Key Klaviyo Segments Referenced
- Level-segmented flows (4 variants): Welcome Flow
- Cross-level flows (1 variant): Cart, Checkout, Browse, Order Confirmation, Shipping, Arrived, PP-Direct Upsell, PP-Level Detection
- Source: DOC6:789-800

### Review Workflow
- All copy goes through Yurishizu (Brand Strategist) review before Klaviyo implementation
- Yurishizu speaks German; deliverables in English
- Source: DOC6:331-335, DOC6:992-993

---

## 6. Source File References

| File | What Was Extracted |
|------|--------------------|
| DOC6-USAGE-GUIDE.txt | Avatar tags, segmentation architecture, flow routing, cart recovery logic, post-purchase upsell logic, level-detection mechanism, sender config, brand constants |
| Onboarding-todos.txt | Klaviyo workflow (implement in Klaviyo after approval), brand overview, audience structure |
| Claude-Project-Instructions.txt | Email platform (Klaviyo), sender details (email, name, reply-to, subdomain), avatar segmentation, flow output format with Klaviyo Implementation Notes section |
| overnight-plan.md (L605-616) | Custom profile properties (6), all tags (15), all flow triggers (9), exit conditions (3) |

---

*Extracted: 2026-05-25 | Task: t_27e3f7de | Layer 37 Round 1*
