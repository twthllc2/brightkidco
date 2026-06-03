# Flow 06 — Out for Delivery

**Email Count:** 1 email (transactional)
**Brand Constants:** GF (single variant, no level segmentation)

## Purpose

Notify the customer that their package is out for delivery today, creating excitement and readiness. This email includes practical tips for the first use and reaffirms the support relationship with Lena.

## Trigger Logic

**Trigger event:** Shipping carrier webhook or Klaviyo custom metric "Out for Delivery" fires, triggered by Shopify/fulfillment provider when the package is scanned as out for delivery.

**Klaviyo setup:**
- Trigger: Custom metric "Out for Delivery"
- Send immediately upon trigger
- Transactional — send regardless of marketing opt-in
- May require integration with fulfillment API or AfterShip/TrackingMore

## Exit Conditions

- One-time send — no ongoing flow
- Subscriber receives the single email and exits

## Segment Filters

- **All customers with a package out for delivery** — no level segmentation
- Profile properties used: `first_name`, `tracking_number`, `estimated_delivery_date`

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Out for Delivery | Immediately when carrier scans "Out for Delivery" | "Almost there! Your package is out for delivery" — today's excitement + first-use tips + Lena's contact info for questions |

Single email — no follow-up in this flow.

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Out for Delivery" — Metric Trigger
2. **Set trigger metric:** Custom "Out for Delivery" metric (requires integration with shipping provider)
3. **Send immediately** — no delay
4. **Add dynamic content:** Tracking number, delivery ETA
5. **Add first-use tips:** Brief section on initial setup — washing instructions, wearing schedule, patience messaging
6. **Add Lena's direct line:** "Hit reply if you have any questions — I read every message"
7. **Soft upsell (optional):** "If you love it, check out the 5+5 Bundle for full coverage"
8. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
9. **UTM convention:** `?utm_source=email&utm_medium=transactional&utm_campaign=out-for-delivery`

## A/B Test Recommendations

- **Test 1 — Excitement vs. education tone:** "Your package is on its way!" (excitement) vs. "What to expect when it arrives" (educational) — measure engagement with post-purchase flow
- **Test 2 — First-use tip placement:** Tips before tracking vs. tips after tracking — measure click-through
- **Test 3 — Next-step CTA:** "Read the quick-start guide" vs. "Contact Lena with questions" — measure support ticket volume

## Conversion Benchmarks

- Expected open rate: 60–72%
- Expected click rate: 15–30%
- Unsubscribe rate: N/A (transactional)
