# Flow 22 — Replenishment Path C

**Email Count:** 2 emails
**Brand Constants:** GF (single variant, no level segmentation)
**Primary Offer:** Accessories (Wash Bag $9.99, Mattress Protector $19.99) + any bundle

## Purpose

Replenishment flow for customers who have already made a second purchase (repeat buyers) and are due for accessory or bundle replenishment. Path C targets the highest-LTV segment — loyal customers who already understand the product and just need a nudge to re-order accessories or stock up on the 5+5 Bundle.

## Trigger Logic

**Trigger event:** Time delay — 120 days after the LAST "Ordered" metric, AND `total_orders >= 2` (repeat buyer), AND no purchase in the last 90 days.

**Klaviyo setup:**
- Trigger: Time-based (120 days after last "Ordered" metric)
- Condition: `total_orders >= 2` (repeat buyer)
- Condition: No "Ordered" metric in the last 90 days
- Condition: `post_purchase_active` tag is set (or equivalent loyal customer tag)
- Filter: `lifetime_value >= 100` (engaged customer)

## Exit Conditions

- Customer places an order → exits
- Customer clicks unsubscribe
- Flow completes both emails
- No response after flow → tagged `inactive_120_days` + enters winback (flow-23)

## Segment Filters

- **Repeat buyers (2+ orders) at 120 days since last purchase**
- If `avatar_level` is known, tonality-adjusted messaging:
  - VIP tone: "You're part of the BrightKidCo community — here's a quick restock reminder"
- Exclude: Customers with pending guarantee/refund requests

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Replenishment C1 | Day 120 (since last order) | "It's been a while — how's everything going?" — community check-in + restock suggestion |
| E2 — Replenishment C2 | Day 127 | "Your go-to products are still here" — product reminder + bundle comparison + guarantee |

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Replenishment C" — Time-based Trigger
2. **Set trigger:** Time delay of 120 days after last "Ordered" metric
3. **Add conditions:** `total_orders >= 2`, no purchase in last 90 days
4. **Add timing:** E1 at T+120 days, E2 at T+127 days
5. **Add personalized product recommendations:** Based on previous purchase history (Klaviyo predictive analytics or Shopify data)
6. **Add VIP/loyalty framing:** "You're one of our valued returning customers"
7. **Add accessory suggestion:** Wash Bag, Mattress Protector if not previously purchased
8. **Add guarantee block:** 60-Day Calm Progress Guarantee
9. **Apply tags:** `replen_c_1`, `replen_c_2`; `replenishment_completed` on purchase
10. **Post-flow routing:** If no purchase → enter winback flow (flow-23)
11. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
12. **UTM convention:** `?utm_source=email&utm_medium=replenishment&utm_campaign=replenishment-c`

## A/B Test Recommendations

- **Test 1 — Replenishment vs. new product discovery:** Remind of previously purchased items vs. suggest items they haven't tried — measure AOV
- **Test 2 — Customer loyalty framing:** "Welcome back" (warm) vs. "Your products are waiting" (convenience) — measure conversion
- **Test 3 — Timing from last purchase:** 120 days vs. 90 days vs. 150 days — find optimal re-engagement window for repeat buyers
- **Test 4 — Accessory upsell in replenishment:** Include accessory recommendations vs. pure bundle focus — measure accessory attachment rate

## Conversion Benchmarks

- Expected open rate: 42–55%
- Expected click rate: 12–20%
- Expected conversion rate: 15–25%
- Expected AOV: $79.99–$139.98 (bundle + accessories)
- Unsubscribe rate target: < 0.4% (loyal audience — low churn)
