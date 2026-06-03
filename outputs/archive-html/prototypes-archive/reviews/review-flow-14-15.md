# Review: Flow 14 — PP-Mid Check-In & Flow 15 — Extended Education L1

**Reviewer:** ops7  
**Date:** 2026-05-26  
**Focus areas:** Check-in timing (Flow 14), educational depth (Flow 15 L1)  
**Files reviewed:**  
- flow-14-mid-checkin/ (README.md, 3 emails HTML+TXT)  
- flow-15-extended-education/ (README.md, 5 L1 emails HTML+TXT)

---

## 1. Flow 14 — PP-Mid Check-In (3 Emails)

### 1.1 Timing Architecture

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Check-In 30d | Day 30 | Progress check, encouragement, feedback request |
| E2 — Check-In 45d | Day 45 | Regression normalization + neurological explanation |
| E3 — Check-In 60d | Day 60 | Milestone reflection + next-phase guidance |

**Assessment: STRONG.** The 30/45/60 spacing is well-calibrated. Day 30 is early enough to catch parents who are anxious about lack of progress. Day 45 lands at the point where the initial novelty has worn off and regression is common — the content matches this perfectly. Day 60 aligns with the guarantee window, which is strategically sound. The 15-day gap between each is tight enough to feel like a coherent narrative without being overbearing.

**Suggestion (minor):** Consider adding a short exit survey / feedback capture at E3 that feeds into the `avatar_level` or `post_purchase_experience` profile property — the reply-to-email mechanic is great for qualitative data but a one-click "How is it going?" poll (Great / Okay / Struggling) would give structured data for after-flow routing decisions.

### 1.2 Content Quality

**E1 (Day 30 — "30 days in — how's it going?"):**
- Excellent use of parent story (Jessica) to normalize the middle ground
- Four tips (micro-wins, underwear anchor, drop the timer, accept plateaus) are concrete, actionable, and avoid generic advice
- CTA split (troubleshooting guide + community) is appropriate for early-stage check-in
- Tone is warm, non-scripted — hits the Lena voice well

**E2 (Day 45 — "Regression isn't failure — here's why"):**
- Best email in the flow. The strength-training analogy for regression is smart and accessible
- Neurological detail (insula, interoceptive refinement) is pitched at the right level — informative without being overwhelming
- Actionable guidance ("don't go back to pull-ups", "reduce prompts", "lower your expectation bar") is direct and parent-facing
- Proof points (Mahler 2020, Nicholson et al. 2019) add credibility

**E3 (Day 60 — "60 days. Here's what to look for next."):**
- Three-pathway framing (clear progress / uneven / still waiting) is inclusive and reassuring
- Kristy's story ("I almost quit and good thing I didn't") is emotionally powerful
- Missing the upsell/replenishment teaser described in the README — the README says "If things are going well, now's the time to stock up" but the email body doesn't explicitly include this. The CTA links to guides, not to a product page. **Minor gap between README spec and implementation.**

### 1.3 Design Consistency
- All 3 emails use consistent colour palette (#039902 green, #FBF7EB cream, #DBFFCD light green)
- Same Questrial font, same rounded button style, same signature block
- Mobile responsive with @media queries
- No major rendering or spacing issues

### 1.4 Timing Verdict
**PASS.** The 30-45-60 day cadence is appropriate for a mid-check-in flow. No change recommended to the spacing. The timing naturally segments the customer journey into early (anxiety), middle (regression/plateau), and later (milestone/decision point) phases.

---

## 2. Flow 15 — Extended Education L1 (5 Emails)

### 2.1 L1 Timing Overview

| Email | Day | Topic |
|-------|-----|-------|
| E1 | Day 22 | Pre-K timeline reality check |
| E2 | Day 30 | Timeline expectation setting (2-6 weeks first signals) |
| E3 | Day 38 | Pre-K countdown strategies |
| E4 | Day 48 | Language-to-body connection (verbal child paradox) |
| E5 | Day 60 | Summer training window + replenishment tease |

### 2.2 Educational Depth Assessment

**Overall: EXCELLENT.** The L1 sequence shows deep understanding of the Level 1 parent profile (verbal child, Pre-K deadline pressure, language-before-body frustration). The educational content progresses logically from awareness through strategy to execution.

**E1 — Pre-K timeline reality check:**
- Opens with the emotional hook ("There's a date on your calendar... September. Pre-K. The enrollment deadline.")
- Sets realistic expectations: "most autistic children show first reliable signal within 2-6 weeks"
- Distinguishes between "awareness" and "training" — crucial framing
- Excellent micro-win list (pause, look down, touch, delayed reaction)
- Sarah's story feels authentic and level-appropriate

**E2 — Timeline expectation setting:**
- Detailed week-by-week breakdown (weeks 1-2, 2-4, 4-6, 6-8, 8+) is the strongest educational content in the sequence
- Megan's story (tiny steps adding up) is a powerful narrative device
- "You're right in the middle of that window" is perfectly reassuring for Day 30
- Good bridge to Pre-K timing in the closing

**E3 — Pre-K countdown strategies:**
- Three strategies (vocabulary bridge, 3-step prompt fade, classroom simulation) are specific, actionable, and level-appropriate
- "Before Pre-K simulation" — role-playing telling a teacher — addresses a real point of anxiety for L1 parents
- Danielle's Pre-K success story validates the approach
- Notably shorter HTML body than other emails — content is denser but the visual pacing is tighter

**E4 — Language-to-body connection:**
- Addresses a very specific L1 pain point: "He can talk about it perfectly but won't do it"
- The explanation of the insula vs cognitive brain is pedagogically sound
- Four strategies (body-focused language, body game, name pre-signals, separate language from action) are practical
- Amanda's story ("my body feels tight") is a standout anecdote — this is the kind of micro-victory that resonates deeply with L1 parents
- This email fills a genuine gap in most potty training content for autistic children

**E5 — Summer window:**
- Seasonal positioning is smart and timely
- Four summer advantages (fewer layers, outdoor time, longer days, Pre-K runway) are well-argued
- Water play as interoception tool is creative and evidence-informed
- The replenishment CTA ("Need more pairs? Grab the 3+3 Bundle — $79.99") is the only explicit product offer in the 5-email L1 sequence — it's well-placed at E5 as a gentle upsell after value has been delivered
- Kaitlyn's summer training story wraps the sequence on a hopeful, achievable note

### 2.3 Educational Depth Verdict
**EXCEPTIONAL for L1.** The sequence covers:
1. Timeline expectations (what to expect and when)
2. Neurological understanding (insula, interoception)
3. Practical strategies (vocabulary bridge, prompt fade, role-play)
4. Objection handling (language-without-action paradox)
5. Seasonal optimisation (summer advantage)

The only gap is that E4 (the language-to-body connection) could benefit from a second related CTA — the single CTA "Download the body-language bridge guide" is somewhat thin compared to the two-CTA pattern in other emails.

### 2.4 L1 Tonality Check
- ✅ Warm, research-backed, non-judgmental Lena voice throughout
- ✅ Pre-K deadline anxiety is acknowledged but reframed as manageable
- ✅ Verbal child's strengths are celebrated (language is a gift, not a shortcut)
- ✅ No pushy sales language until E5's gentle bundle mention
- ✅ Stories are level-appropriate (L1 parents with verbal children)

---

## 3. Cross-Flow Observations

### 3.1 Timing Overlap Between Flow 14 and Flow 15 L1

Flow 14 triggers at Day 30 and flows Day 30/45/60.  
Flow 15 L1 triggers at Day 22 and flows Day 22/30/38/48/60.

This means:
- **Day 30:** Both flows send an email on Day 30 (Flow 14 E1 + Flow 15 L1 E2). This is the only same-day overlap. Both are check-in / timeline setting, so the overlap is thematically coherent (Flow 14 asks "how's it going?" while Flow 15 says "here's the timeline"). Acceptable — no merge needed.
- **Day 60:** Both flows send an email on Day 60 (Flow 14 E3 + Flow 15 L1 E5). Flow 14 reflects on the 60-day milestone while Flow 15 talks about summer training. These are complementary rather than conflicting. Acceptable.
- No other days overlap. The overall cadence (22 → 30 → 38 → 45 → 48 → 60) produces a steady stream of 2 emails/month, which is reasonable for post-purchase nurturing.

**Verdict:** Minor overlap at Day 30 and Day 60 is acceptable but worth monitoring for unsubscribe rates at those points. If Day 30 unsubscribe spikes, consider offsetting Flow 15 L1 E2 by 2-3 days.

### 3.2 Content Depth Progression

Flow 14 is emotional/relational — check-in, encouragement, belonging.  
Flow 15 L1 is educational/strategic — timelines, techniques, preparation.

This is good separation of concerns. The parent gets both a "how are you feeling?" touchpoint and a "here's what to do" guide simultaneously, which is the right combination for retention + progression.

### 3.3 Cross-Flow Verdict
**PASS.** The flows complement rather than contradict each other. The thematic split (Flow 14 = emotional check-in, Flow 15 = educational strategy) is purposeful and well-executed.

---

## 4. Recommendations

### 4.1 Priority
1. **Align E3 Flow 14 README with email content** — either add the replenishment teaser to E3 HTML (as described in the README) or update the README to match what was actually built
2. **Monitor Day 30 cumulative send** — the only same-day overlap. Track unsubscribe rates for Day 30 across both flows and offset by 2-3 days if >0.5%

### 4.2 Nice-to-have
3. **Add a second CTA to L1 E4** — the single "Download the body-language bridge guide" is thin; add a secondary link (e.g., related blog post or community group)
4. **Consider a structured feedback capture in Flow 14 E3** — a one-click poll alongside the reply-to-email mechanic would give structured data for post-flow routing
5. **E5 replenishment CTA — test placement** — the bundle mention in E5 could be tested at E4 vs E5 to see if earlier exposure increases conversion without increasing return risk

---

## 5. Summary

| Flow | Score | Key Strengths | Key Issues |
|------|-------|---------------|------------|
| Flow 14 PP-Mid Check-In | 4.5/5 | Excellent tonality, strong E2 regression framing, well-spaced timeline | README vs email spec gap (E3 replenishment teaser missing) |
| Flow 15 Extended Edu L1 | 4.8/5 | Exceptional L1-specific depth, strong parent stories, excellent pedagogical progression | E4 single CTA is thin |

**Overall:** Both flows are production-ready with minor clean-up. The L1 educational sequence is a standout — it fills a genuine content gap in the autistic potty training space with empathy, specificity, and actionable guidance.

---

*Files:*
- flow-14-mid-checkin/ → `/root/projects/brightkidco/outputs/prototypes/flow-14-mid-checkin/`
- flow-15-extended-education/ L1 portion → `/root/projects/brightkidco/outputs/prototypes/flow-15-extended-education/L1-email-*.html`
