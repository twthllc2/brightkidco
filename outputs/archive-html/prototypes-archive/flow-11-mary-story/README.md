# Flow 11 — Mary S. Story

**Email Count:** 1 email
**Brand Constants:** GF (single variant — one universal story email)
**Primary Offer:** 3+3 Bundle ($79.99) — BESTSELLER (mentioned in story context)

## Purpose

Share a powerful, authentic parent testimonial from "Mary S." — a real-feeling narrative of a mother's journey from desperation to breakthrough with the Body-Signal Learning Layer™. This single email is used as a standalone nurture touch for skeptical subscribers, as a follow-up to browse abandoners, and as library content for the FAQ/Objection flow. It builds deep emotional trust through Lena's peer-to-peer voice.

## Trigger Logic

**Trigger event:** Manual insertion into flows OR time-based trigger for subscribers tagged as `at_risk_no_open` or `inactive_60_days` OR conditional trigger for subscribers who viewed the "Parent Stories" page.

**Klaviyo setup:**
- Not an auto-flow by default — used as a content block within other flows
- Can be deployed as a standalone flow triggered by:
  - Custom event "Viewed Parent Stories"
  - Profile property `high_skepticism_score` (if tracked)
  - Tag `needs_parent_story`
- Sent as a one-off campaign or within a conditional branch of another flow

## Exit Conditions

- One-time send — no ongoing flow
- Subscriber clicks unsubscribe
- After send, subscriber is tagged `mary_story_sent`

## Segment Filters

- **Skeptical or hesitant subscribers** (people who have been in flows for 30+ days without purchase)
- **L2 and GF segments** (highest skepticism levels) — use in conditional branches
- Exclude: Subscribers who have already received this email (check `mary_story_sent` tag)

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Mary Story | Trigger-based (no auto-timer) | Mary S.'s journey — "From desperation to dry days" — full narrative testimonial |

Single email — used as a library asset.

## Klaviyo Setup Instructions

1. **Create flow (optional):** Klaviyo → Flows → Create Flow → "Mary Story" — can be campaign or flow
2. **Set trigger options:**
   - Option A: Embed within flow-10 (Browse Abandonment) as E3.5 after E3 clicks
   - Option B: Trigger by custom event "Viewed Parent Stories"
   - Option C: One-off campaign to high-skepticism segment
3. **Include full testimonial:** 10–15 sentence narrative from Mary S.'s perspective
4. **Add Lena framing:** Introduction paragraph from Lena explaining why she's sharing this story
5. **Add soft CTA:** "If Mary's story resonates, see how it works for your child" — link to product
6. **Add guarantee block:** 60-Day Calm Progress Guarantee
7. **Add social proof bar:** 16,511 reviews · 4.9 ★
8. **Tag on send:** Apply `mary_story_sent` tag
9. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
10. **UTM convention:** `?utm_source=email&utm_medium=story&utm_campaign=mary-story`

## A/B Test Recommendations

- **Test 1 — Story length:** Full 15-sentence story vs. condensed 8-sentence version — measure read rate (engagement time) and click-through
- **Test 2 — Lena framing:** Lena intro vs. cold story start — measure open rate and story completion
- **Test 3 — CTA type:** "See the mechanism" (educational CTA) vs. "Shop the 3+3 Bundle" (direct CTA) — measure conversion
- **Test 4 — Placement in Browse flow:** Mid-flow (E2-E3 gap) vs. end of flow (after E5) — measure impact on browse conversion

## Conversion Benchmarks

- Expected open rate: 40–55%
- Expected click rate: 8–18%
- Expected conversion rate (skeptical audience): 2–5%
- Unsubscribe rate target: < 0.3% (high-value story content)
