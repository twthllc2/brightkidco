# Flow 05 — Shipping Notification

**Email Count:** 1 email (transactional)
**Brand Constants:** GF (single variant, no level segmentation)

## Purpose

Notify the customer that their order has shipped, provide tracking information, and build anticipation while reinforcing the 60-Day Guarantee. This is a transactional touchpoint that also serves as a soft entry into the Post-Purchase education ecosystem.

## Trigger Logic

**Trigger event:** Klaviyo "Fulfilled Order" or "Shipped Order" metric fires. Typically triggered by Shopify fulfillment status change.

**Klaviyo setup:**
- Trigger: "Fulfilled Order" metric (or custom webhook from shipping provider)
- Send immediately upon fulfillment
- Transactional priority — send regardless of marketing opt-in

## Exit Conditions

- One-time send — no ongoing flow
- Subscriber receives the single email and exits

## Segment Filters

- **All customers with a fulfilled order** — no level segmentation
- Profile properties used: `first_name`, `tracking_number`, `tracking_url`, `shipping_carrier`, `estimated_delivery_date`

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Shipping Confirmation | Immediately on fulfillment | "Your order is on its way!" — tracking link + what to do when it arrives + guarantee reminder |

Single email — no follow-up in this flow.

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Shipping Notification" — Metric Trigger
2. **Set trigger metric:** "Fulfilled Order" (integrated via Shopify)
3. **Send immediately** — no delay
4. **Add dynamic tracking block:** Use `{{ event.extra.TrackingNumber }}`, `{{ event.extra.TrackingURL }}`, `{{ event.extra.Carrier }}`
5. **Add preparation section:** Tips for when the package arrives — "Lay out the learning layer, read the quick-start guide, don't expect immediate results"
6. **Add social proof:** Brief testimonial about first-use experience
7. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
8. **UTM convention:** `?utm_source=email&utm_medium=transactional&utm_campaign=shipping`

## A/B Test Recommendations

- **Test 1 — Preparation content:** Detailed "what to expect when it arrives" vs. simple tracking link — measure support contact rate
- **Test 2 — Guarantee placement:** Guarantee above fold vs. below tracking info — measure click-through to shop
- **Test 3 — Anticipation builder:** Countdown-style ("Your package is getting warmer!") vs. standard tracking — measure open rate for follow-up flows

## Conversion Benchmarks

- Expected open rate: 60–75% (transactional — very high)
- Expected click rate (tracking): 25–40%
- Expected click rate (shop links): 2–5%
- Unsubscribe rate: N/A (transactional)
