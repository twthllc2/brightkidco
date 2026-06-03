# Flow 02 — Cart Abandonment

**Email Count:** 3 emails
**Brand Constants:** GF (single variant, no level segmentation)
**Primary Offer:** 3+3 Bundle ($79.99) — BESTSELLER

## Purpose

Recover revenue from shoppers who added items to cart but did not complete purchase. The sequence re-engages with mechanism-focused education, risk reversal via the 60-Day Guarantee, and gentle urgency without aggressive discounting (no discount stacking policy).

## Trigger Logic

**Trigger event:** Klaviyo "Added to Cart" metric fires and no "Ordered" metric within 1 hour.

**Klaviyo setup:**
- Trigger: "Added to Cart" metric
- Condition: `$value >= 34.99` (minimum order value — 1 pair)
- Condition: No "Ordered" metric in the last 60 minutes
- Filter: `$email` is not empty

## Exit Conditions

- Subscriber places an order (any value) → exits immediately
- Subscriber clicks unsubscribe
- Flow completes all 3 emails
- 7-day inactivity after flow completes → tagged for winback

## Segment Filters

- **All cart abandoners** with `$value >= 34.99`
- Additional filter: Avatar level is available → use tonality-appropriate copy (L1/L2/L3/GF variants applied via Klaviyo conditional splits)
- Exclude: Subscribers currently in Welcome Flow (unless they've already received welcome_completed tag)

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Cart 1h | 1 hour after abandonment | "Forgot something?" — gentle reminder with product image |
| E2 — Cart 24h | 24 hours after abandonment | Mechanism-focused — "It's not the method" + social proof |
| E3 — Cart 72h | 72 hours after abandonment | Guarantee emphasis — "Try it for 60 days. By your judgment." |

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Cart Abandonment" — Metric Trigger
2. **Set trigger metric:** "Added to Cart" with `$value >= 34.99`
3. **Add wait filters:** 1-hour minimum wait for "Ordered" metric before E1 sends
4. **Add timing:** Use the timing from the table above between each email
5. **Conditional split (optional):** Branch by `avatar_level` if level-specific copy is desired
6. **Profile properties:** Set `cart_abandonment_recovered = true` on purchase
7. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
8. **UTM convention:** `?utm_source=email&utm_medium=cart&utm_campaign=cart-abandonment`

## A/B Test Recommendations

- **Test 1 — Incentive vs. education:** Offer free shipping reminder vs. mechanism education (no incentive) — measure recovery rate
- **Test 2 — Timing:** 1h/24h/72h vs. 2h/48h/96h — measure recovery rate by interval
- **Test 3 — CTA text:** "See the mechanism that changes everything" vs. "Complete your order" — measure click rate
- **Test 4 — E1 subject line:** "Did your cart take a nap?" (playful) vs. "You left something behind" (direct) — measure open rate
- **Test 5 — E3 social proof inclusion:** With testimonial vs. without — measure conversion rate

## Conversion Benchmarks

- Expected open rate: 40–50%
- Expected click rate: 15–25%
- Expected recovery rate: 8–15%
- Unsubscribe rate target: < 0.8% per email
