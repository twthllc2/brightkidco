# Flow 07 — Arrived + Welcome

**Email Count:** 1 email (transactional + nurture hybrid)
**Brand Constants:** GF (single variant, no level segmentation)

## Purpose

Welcome the new customer to the BrightKidCo family upon delivery of their first order. This email bridges transactional confirmation with the post-purchase education ecosystem, setting expectations for the learning journey and inviting the customer into the educational flows.

## Trigger Logic

**Trigger event:** Klaviyo custom metric "Package Delivered" fires (from shipping carrier webhook / AfterShip integration), OR a time-based delay of 3–5 days after "Fulfilled Order" metric (fallback if delivery tracking unavailable).

**Klaviyo setup:**
- Trigger: Custom metric "Package Delivered"
- Alternative: Time delay of 4 days after "Fulfilled Order" metric
- Send immediately on trigger

## Exit Conditions

- One-time send — no ongoing flow
- Subscriber receives the single email and exits

## Segment Filters

- **All first-time customers** receiving delivery
- Profile properties used: `first_name`, `avatar_level` (if assigned), `total_orders`

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Arrived | Immediately on delivery signal | "It's here! Welcome to the journey" — unpacking guide + reset expectations + education flow teaser |

Single email — no follow-up in this flow. Transitions into flow-12 (Education) and flow-14 (Mid Check-In).

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Arrived" — Metric Trigger
2. **Set trigger metric:** Custom "Package Delivered" or time-based (4 days after "Fulfilled Order")
3. **Send immediately** — no delay
4. **Add dynamic content:** Customer name, product purchased
5. **Add unpacking section:** Quick-start guidance — wash before first use, wear for 2 hours on first day, gradual introduction
6. **Add timeline expectation:** "Most families see first awareness within 2–6 weeks — all normal timelines"
7. **Tag:** Ensure `post_purchase_active` tag is applied (should be from prior flows)
8. **Trigger next flow:** After this email completes, subscriber should enter flow-12 (Education) and eventually flow-14 (Mid Check-In)
9. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
10. **UTM convention:** `?utm_source=email&utm_medium=transactional&utm_campaign=arrived`

## A/B Test Recommendations

- **Test 1 — Timeline expectation setting:** "2–6 weeks for first awareness" vs. "Every child is different — trust the process" — measure check-in engagement rate
- **Test 2 — Education flow invitation:** Direct CTA to start education (flow-12) vs. softer "We'll check in with tips" — measure education flow open rates
- **Test 3 — Social proof at arrival:** Include testimonial of a parent at 2-week mark vs. no testimonial — measure confidence/reassurance (survey)

## Conversion Benchmarks

- Expected open rate: 55–68%
- Expected click rate: 10–20%
- Unsubscribe rate: < 0.3% (transactional)
