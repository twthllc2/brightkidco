# Flow 27 — Sunset Flow

**Email Count:** 2 emails
**Brand Constants:** GF (single variant, no level segmentation)
**Primary Offer:** None — this is an exit/suppression flow

## Purpose

The final flow for completely disengaged subscribers who have not responded to any re-engagement attempts (flow-23 Winback A, flow-24 Winback B). This flow gives the subscriber a clear, respectful choice: confirm they want to stay (and reset their engagement status) or be automatically unsubscribed to protect sender reputation and list hygiene. No level segmentation — all unengaged subscribers receive the same sunset treatment.

## Trigger Logic

**Trigger event:** Tag `sunset_candidate` applied (from flow-24 Winback B completion with no engagement), OR confirmed 180 days with zero email opens across all flows.

**Klaviyo setup:**
- Trigger: Tag `sunset_candidate` applied
- OR: Profile property `days_since_last_open >= 180`
- Condition: No "Ordered" metric in the last 180 days
- Condition: No email open in the last 180 days

## Exit Conditions

- Customer clicks "I want to stay" (re-engagement CTA) → removed from sunset flow, tags reset, re-enters education or welcome flow
- Customer clicks unsubscribe → unsubscribed via Klaviyo suppression list
- Customer places an order → removed from sunset, enters Order Confirmation
- No response within 14 days after E2 → automatically unsubscribed via Klaviyo suppression

## Segment Filters

- **Completely disengaged subscribers at 180+ days of inactivity**
- No level segmentation — all unengaged subscribers are treated equally
- Exclude: Recent purchasers (last 180 days)
- Exclude: Customers who previously clicked "I want to stay" in the last 12 months

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Sunset 1 | T+0 (on trigger) | "We haven't heard from you in a while" — honest check-in + "Do you want to stay?" CTA |
| E2 — Sunset 2 | T+7 days (if no response) | "This is our last email" — final confirmation request + clear unsubscribe option |

After E2: If no response within 14 days → automatic unsubscribe via Klaviyo API/suppression list.

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Sunset Flow" — Tag/Time-based Trigger
2. **Set trigger:** Tag `sunset_candidate` OR 180 days since last email open
3. **Add conditions:** No purchase in last 180 days, no email opens in last 180 days
4. **Add timing:** E1 immediately, E2 at T+7 days
5. **Add re-engagement CTA (E1):** "I want to stay" — button click resets engagement (remove `sunset_candidate`, add `re_engaged` tag)
6. **Add clear unsubscribe path:** "If you'd rather not hear from us, click here to unsubscribe"
7. **Add Lena's note (E2):** "I understand if this isn't the right time — you're always welcome back"
8. **Set up auto-suppression:** Klaviyo suppression list automation — suppress profiles that don't respond within 14 days of E2
9. **Tag management:**
   - Re-engagement click: Remove `sunset_candidate`, add `re_engaged`, remove from sunset flow
   - Unsubscribe click: Add to suppression list
   - No response: Auto-suppress after 14-day window
10. **Compliance:** Ensure all CAN-SPAM compliance — clear unsubscribe, physical mailing address (123 Commerce Street, Suite 100, Austin, TX 78701)
11. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
12. **UTM convention:** `?utm_source=email&utm_medium=sunset&utm_campaign=sunset`

## A/B Test Recommendations

- **Test 1 — Re-engagement incentive:** "Stay and get 10% off your next order" vs. "Stay to hear about new products" vs. "Stay — no strings attached" — measure re-engagement rate
- **Test 2 — Lena's framing:** Direct from Lena ("I'm checking in personally") vs. automated system message — measure re-engagement
- **Test 3 — Sunset threshold:** 180 days vs. 150 days vs. 120 days of inactivity — measure deliverability impact vs. lost revenue
- **Test 4 — Auto-suppression delay:** 14 days vs. 7 days vs. 21 days after E2 — measure false positive risk (people who would have re-engaged given more time)
- **Test 5 — Unsubscribe vs. stay CTAs:** Balance of green "Stay" button vs. gray "Unsubscribe" link — measure which gets more clicks

## Conversion Benchmarks

- Expected open rate: 15–25%
- Expected click rate (re-engage): 3–8%
- Expected re-engagement rate: 2–6%
- Expected unsubscribe rate: 10–25%
- Expected auto-suppression rate: 60–80%
- Deliverability impact: Expected improvement in overall sender reputation by 5–15% after cleanup
- Unsubscribe rate target (flow): < 30% total (not all will unsubscribe — many will just not respond)
