# Flow 16 — Post-Purchase Support At-Risk (4 Emails)

## Purpose
Re-engage post-purchase subscribers who have stopped opening emails (3–7 days no opens). This is the early-warning system — before they slip into inactivity. The goal is gentle re-engagement through helpful content, not sales pressure.

## Trigger Logic
- **Entry:** `at_risk_no_open` tag applied by behavioral tracking
- **Tag applied when:** 3–7 days of no email opens post-purchase (after confirmed inbox placement)
- **Delay:** Immediate on tag application
- **Tag applied on entry:** `flow_pp_at_risk`

## Exit Conditions
- Subscriber opens any email in the sequence → removed from flow → `post_purchase_active` tag restored
- Subscriber unsubscribes or marks as spam
- 60 days with no engagement in flow → `inactive_60_days` tag → routes to Winback Path A (Flow 23)
- 120 days no engagement → `inactive_120_days` tag → routes to Sunset Flow (Flow 27)

## Segment Filters
- **Level variants:** Cross-level (all levels receive same sequence)
- **Condition:** Must have `post_purchase_active` tag AND `at_risk_no_open` tag
- **Excludes:** VIP customers (separate handling), very recent purchasers (< 7 days)

## Timing Between Emails
| Email | Day | Topic | Goal |
|-------|-----|-------|------|
| E1 | Day 0 (on tag) | "It's been quiet — no pressure" | Gentle nudge, check-in from Lena |
| E2 | Day 4 | Helpful content — "Your child may be making progress you can't see" | Value-add without selling |
| E3 | Day 8 | Parent story — "Another mom was where you are" | Social proof and connection |
| E4 | Day 14 | Final check — "Here's a quick tip + the 60-day guarantee reminder" | Last touch before inactivity path |

## Klaviyo Setup Instructions
1. Create flow triggered by: Tag added — `at_risk_no_open`
2. No delay — fire immediately on tag addition
3. Tag: `flow_pp_at_risk` on entry
4. Conditional exit: If subscriber opens ANY email → remove `at_risk_no_open` tag, add back `post_purchase_active`, exit flow
5. Conditional exit: If 60 days no engagement in flow → remove from flow → add `inactive_60_days` tag
6. Sender: "Lena from BrightKidCo" <support@brightkidco.com>
7. Smart sending: Respect timezone

## A/B Test Recommendations
- **Tonality:** Gentle check-in vs. "We noticed you went quiet" (direct vs. indirect opening)
- **Subject line:** Question hook vs. statement hook vs. benefit hook
- **Email spacing:** 4 days vs. 7 days between sends
- **CTA:** "Read more" vs. "Hit reply and tell me how it's going" (reply encouragement)
- **Offer:** No offer vs. small re-engagement incentive (test on a subset)

## Conversion Benchmarks
- Open rate: 35–45% (target for at-risk segment)
- Re-engagement rate: 15–25%
- Unsubscribe rate: < 1.5% (expected higher for at-risk)
- Inactivity escalation avoidance: 20–30%
