# Flow 14 — PP-Mid Check-In

**Email Count:** 3 emails
**Brand Constants:** GF (single variant, no level segmentation)
**Primary Offer:** None (engagement/retention flow) — soft upsell in E3

## Purpose

Check in with customers at the 30-day, 45-day, and 60-day marks post-purchase. This flow serves as the backbone of BrightKidCo's retention strategy — it collects progress feedback, provides milestone-appropriate encouragement, reduces return risk by managing expectations, and builds the relationship with Lena. The 60-day email aligns with the guarantee window.

## Trigger Logic

**Trigger event:** Time delay — 30 days after "Ordered" metric (or after flow-12 Education completes).

**Klaviyo setup:**
- Trigger: Time-based (30 days after "Ordered" metric)
- Condition: `post_purchase_active` tag is set
- Filter: No unsubscribe, no refund request

## Exit Conditions

- Customer requests refund/return → exit (tag for returns flow)
- Customer clicks unsubscribe
- Flow completes all 3 emails (exits naturally after Day 60)
- Customer purchases additional items → stay in flow but adjust tonality

## Segment Filters

- **All post-purchase customers** at specific day intervals
- If `avatar_level` is known, tonality-adjusted check-in questions:
  - L1: "Has the Pre-K deadline pressure eased?"
  - L2: "Are you noticing any sensory shifts?"
  - L3: "How is your child tolerating the layer?"
  - GF: "How's the journey going overall?"

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Check-In 30d | Day 30 | "30 days in — how are you feeling?" — progress check, encouragement, ask for feedback |
| E2 — Check-In 45d | Day 45 | "45 days — small shifts add up" — celebrate micro-milestones, education reinforcement |
| E3 — Check-In 60d | Day 60 | "60 days — the guarantee window" — progress reflection + guarantee reminder + soft upsell for replenishment |

After E3:
- If no purchase → enter flow-16 (At-Risk) if engagement is low
- If purchased → enter flow-20/21/22 (Replenishment)
- All subscribers → enter flow-15 (Extended Education)

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "PP-Mid Check-In" — Time-based Trigger
2. **Set trigger:** Time delay of 30 days after "Ordered" metric (or after flow-12 completion)
3. **Add timing:** E1 at T+30 days, E2 at T+45 days, E3 at T+60 days (from trigger)
4. **Add feedback mechanism:** Reply-to encouragement — "Hit reply and tell me how it's going" — Lena reads all replies
5. **Add conditional split:** Branch by `avatar_level` for check-in questions
6. **Add milestone markers:** Use Klaviyo profile properties to track check-in responses
7. **Add guarantee mention (E3 only):** 60-Day Calm Progress Guarantee — "Still finding your rhythm? You have until Day 60"
8. **Add replenishment teaser (E3):** "If things are going well, now's the time to stock up"
9. **Set up post-flow routing:** Tag-based routing to flow-15, flow-16, or flow-20
10. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
11. **UTM convention:** `?utm_source=email&utm_medium=checkin&utm_campaign=pp-mid-checkin`

## A/B Test Recommendations

- **Test 1 — Feedback request type:** Open-ended "Tell me your story" vs. structured "Click a milestone" — measure reply rate
- **Test 2 — Guarantee message tone:** Celebration ("You made it 60 days!") vs. gentle reminder ("Your guarantee window is still open") — measure retention and upsell
- **Test 3 — Replenishment timing:** Introduce replenishment in E2 vs. E3 — measure conversion without increasing return risk
- **Test 4 — E1 subject line:** "How's it going?" (personal) vs. "Your 30-day check-in" (systematic) — measure open rate

## Conversion Benchmarks

- Expected open rate: 45–60%
- Expected click rate: 8–15%
- Expected reply rate: 3–8% (high for email — valuable qualitative data)
- Expected replenishment conversion (E3): 5–12%
- Expected return rate reduction: 10–20% (vs. no check-in)
- Unsubscribe rate target: < 0.3%
