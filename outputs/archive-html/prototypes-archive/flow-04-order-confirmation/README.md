# Flow 04 — Order Confirmation

**Email Count:** 1 email (transactional)
**Brand Constants:** GF (single variant, no level segmentation)
**Primary Offer:** Already purchased — confirmation of order details

## Purpose

Provide immediate transactional confirmation of a completed order. This email sets expectations, reinforces the purchase decision with social proof / guarantee language, and includes a subtle upsell pathway (what to expect next). It is the entry point into the Post-Purchase ecosystem.

## Trigger Logic

**Trigger event:** Klaviyo "Ordered" metric fires. Sent immediately after order placement.

**Klaviyo setup:**
- Trigger: "Ordered" metric
- Condition: `$value >= 34.99` (valid order)
- Send immediately (no delay)
- This is a transactional email — must send regardless of marketing opt-in status

## Exit Conditions

- One-time send — no ongoing flow
- Subscriber receives the single email and exits

## Segment Filters

- **All first-time purchasers** and returning purchasers
- No level segmentation needed — this is transactional
- Profile properties to populate: `first_name`, `order_number`, `total_price`, `line_items`

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Order Confirmation | Immediately on order | "We've got your order!" — order summary + guarantee reaffirmation + what's next |

Single email — no follow-up in this flow.

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Order Confirmation" — Metric Trigger
2. **Set trigger metric:** "Ordered" with `$value >= 34.99`
3. **Send immediately** (no wait filter, no timing)
4. **Add dynamic content:** Order summary block using `{{ event.extra.CustomerEmail }}`, `{{ event.extra.OrderNumber }}`, `{{ event.extra.LineItems }}`
5. **Guarantee block:** Include "60-Day Calm Progress Guarantee" section
6. **What's next section:** Tease the education sequence (flow-12) and level detection (flow-09)
7. **Profile property updates:** Set `total_orders`, `last_purchase_date`, `lifetime_value`
8. **Tag:** Apply `post_purchase_active` tag
9. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
10. **UTM convention:** `?utm_source=email&utm_medium=transactional&utm_campaign=order-confirmation`

## A/B Test Recommendations

- **Test 1 — Social proof inclusion:** With testimonial block vs. without — measure future open/click rates on post-purchase flows
- **Test 2 — Upsell teaser:** "Want to upgrade to 5+5?" vs. "Your journey starts here" — measure upsell flow entry rate
- **Test 3 — Delivery timeline clarity:** Estimated delivery date vs. "Processing now" — measure customer support contact rate

## Conversion Benchmarks

- Expected open rate: 55–70% (transactional — typically high)
- Expected click rate: 5–15%
- Unsubscribe rate: N/A (transactional — should be near zero if properly marked as transactional)
