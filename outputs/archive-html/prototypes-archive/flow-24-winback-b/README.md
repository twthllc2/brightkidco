# Flow 24 — Winback Path B

**Email Count:** 3 emails (3 level variants: L1, L2, L3 — no GF variant)
**Brand Constants:** Level-segmented — L1/L2/L3 variants only (no General Fallback)
**Primary Offer:** 1 Pair ($34.99) for re-entry; 3+3 Bundle ($79.99) for committed re-engagement

## Purpose

The final re-engagement attempt for customers tagged `inactive_120_days` who did not respond to Winback Path A. This flow acknowledges the extended absence directly, respects the customer's autonomy, and gives them a clear choice: re-engage with a low-commitment offer (1 Pair) or unsubscribe permanently. No GF variant — only level-specific messaging for those whose avatar level is known.

## Trigger Logic

**Trigger event:** Tag `inactive_120_days` applied (from flow-23 Winback A completion without engagement, or from inactivity detection at 120 days).

**Klaviyo setup:**
- Trigger: Tag `inactive_120_days` applied
- Condition: `avatar_level` is set (level1/level2/level3) — no GF variant
- Condition: No "Ordered" metric in last 120 days
- Filter: No flow-24 sent in the last 180 days

## Exit Conditions

- Customer places an order → exits, enters Order Confirmation + Replenishment flows
- Customer clicks unsubscribe → tagged `unsubscribed`, exits permanently
- Customer clicks "I'm still interested" (low-engagement CTA) → keeps active, re-enters education
- Flow completes all 3 emails with no engagement → tagged for Sunset flow (flow-27)

## Segment Filters

- **Only L1/L2/L3 segments** (no GF — GF inactive users are moved directly to Sunset)
  - **L1 subdir:** `avatar_level == "level1"` — "We understand if life got busy" + Pre-K context if relevant
  - **L2 subdir:** `avatar_level == "level2"` — "We know the journey is hard" + sensory reframe
  - **L3 subdir:** `avatar_level == "level3"` — "Your child's timeline is the only one that matters" + dignity-first
- Exclude: Customers with pending refund/return requests

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Winback B1 | T+0 (on trigger) | "It's been a while — no pressure, just checking in" — genuine check-in + Lena's direct contact |
| E2 — Winback B2 | T+5 days | "If you're ready to try again — here's a simple path back" — low-commitment offer (1 Pair) |
| E3 — Winback B3 | T+10 days | "This is our last email unless you want to stay" — final choice: stay or unsubscribe |

After E3 with no engagement → tagged for flow-27 (Sunset).

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Winback B" — Tag Trigger (inactive_120_days)
2. **Set trigger:** Tag `inactive_120_days` applied
3. **Add condition:** `avatar_level` is level1/level2/level3 (not general/empty)
4. **Add branch split:** Split by `avatar_level` into L1/L2/L3 paths
5. **Each variant path:** 3 emails with level-specific winback copy
6. **Add timing:** E1 immediately, E2 at T+5 days, E3 at T+10 days
7. **Include low-commitment option (E2):** 1 Pair ($34.99) as risk-free re-entry point
8. **Add Lena's direct contact:** "Reply to this email and you'll reach me personally"
9. **Add unsubscribe preference:** Clear unsubscribe link in every email ("If you'd rather not hear from us, click here")
10. **Tag management:**
    - On open/click: Remove `inactive_120_days`, add `re_engaged_deep` tag
    - On unsubscribe: Add `unsubscribed` tag, remove from all flows
    - On no engagement after flow: Add `sunset_candidate` tag for flow-27
11. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
12. **UTM convention:** `?utm_source=email&utm_medium=winback&utm_campaign=winback-b`

## A/B Test Recommendations

- **Test 1 — Low-commitment vs. standard offer:** 1 Pair re-entry vs. 3+3 Bundle (same as before) — measure re-engagement rate
- **Test 2 — Transparency level:** "This is our last email" (honest) vs. "We'd love to have you back" (warm) — measure unsubscribe vs. re-engage ratio
- **Test 3 — E2 subject line:** "A simple way back" (low-barrier) vs. "We've missed you" (emotional) — measure open rate
- **Test 4 — Lena personal video vs. text:** Test video thumbnail (Lena face-to-face) vs. text-only — measure engagement rate
- **Test 5 — Level-specific effectiveness:** Compare L1 vs. L2 vs. L3 re-engagement rates to determine if any level requires different treatment

## Conversion Benchmarks

- Expected open rate: 20–32%
- Expected click rate: 4–10%
- Expected re-engagement rate: 5–12%
- Expected conversion rate: 2–5%
- Expected unsubscribe rate: 3–8% (higher — this is the "honest exit" flow)
- Unsubscribe rate target (sustainable): < 10% total across 3 emails
