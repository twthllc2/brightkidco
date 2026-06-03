# Flow 03 — Checkout Abandonment

**Email Count:** 2 emails
**Brand Constants:** GF (single variant, no level segmentation)
**Primary Offer:** Whatever was in the checkout cart (dynamic product)

## Purpose

Recover revenue from shoppers who entered the checkout process but abandoned before confirming payment. This flow targets higher-intent buyers than cart abandonment — users who were one click away from purchase. The tone is reassuring, low-pressure, and removes friction rather than adding urgency.

## Trigger Logic

**Trigger event:** Klaviyo "Started Checkout" metric fires and no "Ordered" metric within 1 hour.

**Klaviyo setup:**
- Trigger: "Started Checkout" metric
- Condition: `$value >= 34.99`
- Condition: No "Ordered" metric in the last 60 minutes
- Filter: `$email` is not empty

## Exit Conditions

- Subscriber places an order → exits immediately
- Subscriber clicks unsubscribe
- Flow completes all 2 emails

## Segment Filters

- **All checkout abandoners** with `$value >= 34.99`
- Exclude: Users who received cart abandonment E3 in the last 7 days (avoid overlap fatigue)
- If avatar level is known, tonality is adjusted via conditional split

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Checkout 1h | 1 hour after checkout abandonment | "Payment didn't go through?" — friction removal, guarantee reminder |
| E2 — Checkout 24h | 24 hours after checkout abandonment | "Still thinking about it?" — mechanism + testimonial, final gentle nudge |

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Checkout Abandonment" — Metric Trigger
2. **Set trigger metric:** "Started Checkout" with `$value >= 34.99`
3. **Add wait filter:** 1-hour window for "Ordered" metric before E1 sends
4. **Add timing:** E1 at T+1h, E2 at T+24h
5. **Add dynamic product block:** Use Klaviyo `{{ event.extra_items }}` or `{{ event.ShopifyItems }}` to show abandoned products
6. **Add conditional split (optional):** Branch by `avatar_level` for tonality
7. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
8. **UTM convention:** `?utm_source=email&utm_medium=checkout&utm_campaign=checkout-abandonment`

## A/B Test Recommendations

- **Test 1 — Friction removal vs. guarantee emphasis:** "Need help checking out?" (support-focused) vs. "Try it 60 days risk-free" (guarantee-focused) — measure recovery rate
- **Test 2 — E2 send timing:** 24h vs. 48h — measure conversion by timing
- **Test 3 — Dynamic product display:** Show exact items in cart vs. show recommended upsell bundle — measure AOV
- **Test 4 — Subject line personalization:** "Your {product} is still warm" vs. generic "Complete your checkout" — measure open rate

## Conversion Benchmarks

- Expected open rate: 45–55%
- Expected click rate: 18–30%
- Expected recovery rate: 12–20%
- Unsubscribe rate target: < 0.5% per email
