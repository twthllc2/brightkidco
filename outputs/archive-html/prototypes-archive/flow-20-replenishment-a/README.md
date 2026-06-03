# Flow 20 — Replenishment Path A

**Email Count:** 3 emails
**Brand Constants:** GF (single variant, no level segmentation)
**Primary Offer:** 3+3 Bundle ($79.99) — BESTSELLER; 5+5 Bundle ($119.99) for high-volume users

## Purpose

Replenishment flow for customers who purchased a bundle (3+3 or 5+5) and are due for a restock approximately 90 days post-purchase. Path A targets bundle buyers with a higher AOV. The tone is practical and experience-based — "You already know it works, now stock up."

## Trigger Logic

**Trigger event:** Time delay — 90 days after "Ordered" metric, AND the order value >= $79.99 (i.e., bundle buyer).

**Klaviyo setup:**
- Trigger: Time-based (90 days after "Ordered" metric)
- Condition: `$value >= 79.99` (bundle buyer)
- Condition: `post_purchase_active` tag is set
- Filter: No recent replenishment purchase (< 7 days ago)

## Exit Conditions

- Customer places a replenishment order → exits
- Customer clicks unsubscribe
- Flow completes all 3 emails
- After 120 days with no purchase → tagged `inactive_120_days`

## Segment Filters

- **Bundle buyers at 90 days post-purchase** (order value $79.99+)
- If `avatar_level` is known, tonality adjusted:
  - L1: "Your child is making progress — keep the momentum going"
  - L2: "Consistency is key — you've come this far"
  - L3: "No pressure — just a reminder that we're here when you need more"
  - GF: "Time to restock? Here's what other parents do"

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Replenishment 1 | Day 90 | "Time flies — 3 months of progress!" — celebration + restock reminder |
| E2 — Replenishment 2 | Day 97 | "Your bundle is due for a refresh" — practical restock message + bundle comparison |
| E3 — Replenishment 3 | Day 104 | "Stock up and save — bundle pricing stays the same" — final reminder with guarantee |

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Replenishment A" — Time-based Trigger
2. **Set trigger:** Time delay of 90 days after "Ordered" metric
3. **Add condition:** `$value >= 79.99` (bundle buyer)
4. **Add timing:** E1 at T+90 days, E2 at T+97 days, E3 at T+104 days
5. **Add product recommendation:** Based on previous purchase — if bought 3+3, suggest 5+5 upgrade
6. **Add progress celebration:** "3 months in — here's what parents at this stage often notice"
7. **Add bundle comparison table:** 1 Pair ($34.99) vs. 3+3 ($79.99) vs. 5+5 ($119.99)
8. **Add guarantee block:** 60-Day Calm Progress Guarantee on all replenishment orders
9. **Apply tags:** `replen_a_1` through `replen_a_3`; `replenishment_completed` on purchase
10. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
11. **UTM convention:** `?utm_source=email&utm_medium=replenishment&utm_campaign=replenishment-a`

## A/B Test Recommendations

- **Test 1 — Upgrade vs. same-bundle:** Suggest 5+5 upgrade to 3+3 buyers vs. repeat 3+3 — measure AOV impact
- **Test 2 — Celebration vs. practical framing:** "3 months of progress!" vs. "Time to restock" — measure conversion
- **Test 3 — Timing:** Day 90 vs. Day 75 vs. Day 105 — find optimal replenishment window
- **Test 4 — Subject line personalization:** Include number of days since purchase vs. generic "Time for a restock" — measure open rate

## Conversion Benchmarks

- Expected open rate: 40–55%
- Expected click rate: 10–18%
- Expected conversion rate (replenishment): 12–20%
- Expected AOV on replenishment: $79.99–$119.99
- Unsubscribe rate target: < 0.5%
