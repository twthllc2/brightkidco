# Flow 17 — FAQ/Objection Library (6 Emails × 4 Level Variants)

## Purpose
Answer the top objections that prevent non-purchasers from converting. This flow routes subscribers who completed the Welcome Flow without purchasing. Each email addresses one or two specific objections (D-series, C-series, B-series) with mechanism-based responses in Lena's voice. This is the highest-leverage conversion flow for never-bought subscribers.

## Trigger Logic
- **Entry:** `welcome_completed_no_purchase` tag applied after Welcome Flow ends (Day 21)
- **Delay:** 2–3 days after Welcome Flow completes (to give space before objection handling)
- **Tag applied on entry:** `flow_faq_objection`

## Exit Conditions
- Subscriber makes a purchase → `purchased` tag → exit flow → route to Order Confirmation (Flow 04)
- Subscriber unsubscribes or marks as spam
- 60 days in flow with no purchase → `inactive_60_days` tag → route to Winback Path B (Flow 24)
- 120 days no engagement → `inactive_120_days` tag → route to Sunset Flow (Flow 27)

## Segment Filters
- **Level variants:** 4 branches — L1, L2, L3, GF (split by `avatar_level` property)
- **Condition:** Must have `welcome_completed_no_purchase` tag
- **Excludes:** Any subscriber who has purchased at any point

## Timing Between Emails
| Email | Day | Objections Addressed | Level Variants |
|-------|-----|---------------------|----------------|
| E1 | Day 3 | D1 (tried everything) + D2 (self-blame) | All 4 levels |
| E2 | Day 10 | D3 (hope-risk) + C3 (financial/worth) | All 4 levels |
| E3 | Day 17 | B1 (tried underwear) + B3 (sensory refusal) | All 4 levels |
| E4 | Day 24 | C1 (brand unknown) + C2 (kids like mine) | All 4 levels |
| E5 | Day 31 | B2 (BCBA conflict — L2) + B4 (GI issues — L3) | L2/L3 specific |
| E6 | Day 38 | Summary — "If you ever want to revisit" | All 4 levels |

## Klaviyo Setup Instructions
1. Create flow triggered by: Tag added — `welcome_completed_no_purchase`
2. Add delay: 2 days (gap between Welcome end and FAQ start)
3. Create 4 flow branches based on `avatar_level` property:
   - Branch A: `avatar_level1` → L1 objection copy
   - Branch B: `avatar_level2` → L2 objection copy
   - Branch C: `avatar_level3` → L3 objection copy
   - Branch D: no level / `avatar_general` → GF copy
4. Tag: `flow_faq_objection` on entry
5. Add purchase-tracking metric: If subscriber purchases, exit flow and apply `purchased` tag
6. Add inactivity exit: If 60 days in flow without conversion → `inactive_60_days` → route to Flow 24
7. Sender: "Lena from BrightKidCo" <support@brightkidco.com>
8. Smart sending: Respect timezone

## A/B Test Recommendations
- **Subject line:** Objection-as-question ("What if I've tried everything?") vs. benefit framing ("Why this is different")
- **Order:** D1 first vs. L3 (guarantee) first for L3 segment
- **CTA:** "See the science" vs. "Try it 60 days risk-free" vs. "Read more"
- **Level re-detection:** Include migration anchors in E4 for GF → level-specific
- **Timing:** 7-day gap vs. 5-day gap — does faster pacing increase conversion?

## Conversion Benchmarks
- Open rate: 40–50%
- Click rate: 10–18%
- Conversion rate: 5–12% (highest for L1, lowest for L3)
- Unsubscribe rate: < 1%
- Route to Winback: 60–70% (non-converters)
