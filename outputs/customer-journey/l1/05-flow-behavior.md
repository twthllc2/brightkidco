# Flow Behavior — Level 1 (Sarah)
## Conversion Gates, Dead-Ends, and Cross-Flow Continuity

> **Audience:** Stage 2/3 subagents and the lifecycle architect building operational logic on top of L1 copy. The other four L1 documents cover *who Sarah is* (avatar), *what she receives* (sequence), and *how she feels* (emotional arc). This document covers **what each email is allowed to ask for, what happens if she walks away, and how this email must feel next to whatever else is sitting in her inbox that week.**
>
> **Inputs:** `journey-l1-01-avatar.md`, `journey-l1-02-sequence.md`, `journey-l1-03-emotional-trust.md`, `demands/GIULIANO-DEMANDS.md` §2.5, §17, §18.

---

## 0. EXECUTIVE FRAME — THE THREE QUESTIONS PER EMAIL

For every email Sarah is scheduled to receive, this document answers three operational questions:

1. **CONVERSION GATE — what kind of ask is allowed?**
   Hard sell (full-price button, "BUY NOW") is not a binary yes/no. It depends on the **phase** (pre-purchase, purchase event, post-purchase, lifecycle, winback) and the **emotional trust level** she has earned. The gate is the *brightest line the email can approach without tripping her BS detector* — the line below which a hard CTA converts and above which a hard CTA costs more trust than it earns revenue.

2. **DEAD-END — what happens if she ignores this?**
   Every email has a downstream consequence. Some emails are **safety nets** (a missed PP-Ed D7 fires a different cadence). Some are **terminal** (a Sunset email that gets no response suppresses her for 6–12 months per §17.11). The dead-end is the *operational behavior of the system in the absence of engagement*.

3. **CROSS-FLOW CONTINUITY — what else did she just get, and how must this email feel *distinct* from it?**
   Sarah's inbox is not a single-thread conversation. On Day 1 of her signup she might receive Welcome E1 in the morning and a Browse Abandonment E1 in the afternoon. On Day 30 post-purchase she might receive PP-Mid E1, Replenishment A2, and Review E1 — three emails in the same day. **If two emails in the same week feel like the same email, one of them has failed** (the avatar profile is explicit: she scans for repetition, inboxes fatigue, and "I've already read this" is a fast path to unsubscribe).

The reference frame for all three questions is: **§2.5 cross-flow suppression, §17 deliverability, and §18 warming rules.** Together those sections define a system in which:
- Max 1 flow email per subscriber per day (§2.5).
- Cart Abandonment pauses Welcome E3+ but not E1-E2 if already sent (§2.5).
- Winback pauses nurture but allows transactional (§2.5).
- Sunset is permanent exit, no re-entry (§2.5).
- 7-week domain warming (Weeks 1–2 ice-breaker, 3–4 build, 5–6 scale, 7+ full) with hard content rules for Weeks 1–2: no promo codes, no hard-sell, no countdowns, no affiliate links, no >1 CTA, education required, plain-text preferred, reply prompts required, 60:40 text:image, Lena voice (§17).
- "Lena from BrightKidCo" <support@send.brightkidco.com> is the only from-address for Weeks 1–6 (§17.10).
- 90-Day Engaged minimum for sends during warming; if open rate drops <45% pause and narrow segment (§17.3).
- Sunset protocol is operational: 0 opens AND 0 clicks AND 0 orders in 120 days AND ≥20 emails received → tag `unengaged = True` and add to Master Suppression List (§17.11).
- Phase 1 Rule 1 forbids behavioral scoring in Phase 1 — all routing is tag-based (§18.1).

Every per-email verdict in this document is anchored to these system rules. Where L1 has a level-specific carve-out (Pre-K urgency allowed, math reframe allowed, Lena voice across the lifecycle), that is named. Where the system rule overrides L1 (no hard-sell during Weeks 1–2 of warming, even for L1), that is also named.

---

## 1. PRE-PURCHASE WINDOW — WELCOME FLOW + ABANDONMENT (Hour 0 to Day 21)

### 1.1 WELCOME E1 — `welcome-01-e1-l1` (Hour 0, immediate)

**Phase 1 state at trigger:** Hour-zero signup. Trust baseline 55/100. She has just typed her email into the 10%-off popup, BS detector at maximum. Hope/realism 70/30. **The Welcome flow has not yet earned the right to ask her for money.**

**CONVERSION GATE:**
- **Hard CTA: NO.** Per the avatar profile and emotional-trust document, E1 is the survival email — its job is to convert "mildly skeptical signup" into "okay, keep going." The CTA is permission-toned text: *Let's explore what's really happening with his body signals*. A hard sell at Hour 0 would collide with her 30% skepticism and the "guard against marketing" stance she walked in with.
- **Soft CTA: YES, with care.** The WELCOME10 code and a permission-toned link to the L1 mechanism page are allowed. The 10% code is not framed as a discount in E1 — it is framed as part of "your welcome."
- **Text link only / Permission-not-to-buy: YES.** The dominant E1 ask is "read E2 tomorrow" — not "buy today." Per the trust pyramid (Tier 1 mechanism specificity is the foundation), E1 is laying the floor.
- **Sender rule:** Must be "Lena from BrightKidCo" <support@send.brightkidco.com>. During Weeks 1–2 of domain warming, no promotional framing, no countdown, no >1 CTA (§17.2). E1 must satisfy the warming content rules even though it is a level-specific flow, because new subscribers *are* the warming audience.

**DEAD-END:**
- **What if she ignores E1?** Welcome E2 fires at D1 regardless. The system does not wait for an open. There is no At-Risk email at the pre-purchase stage (At-Risk is post-purchase only — see §1.16 below).
- **Winback / Sunset:** No winback fires from a missed welcome email alone. Winback A/B fires at Day 90+ no engagement (§17.11). A signup with no opens across 120 days + 20+ emails is the Sunset trigger.
- **Segment change:** If she opens E1, no segment change. If she does not open E1, no segment change at the data layer; the system simply continues to Welcome E2. Per §18.1 Rule 1, there is no behavioral scoring in Phase 1, so even zero opens do not move her off the L1 welcome track.
- **The one exception:** If E1 lands in spam (deliverability failure, not behavioral), the Code Red protocol in §17.6 may pause E2-E8 and gate them behind an E1 open. That is operational, not behavioral.

**CROSS-FLOW CONTINUITY:**
- **What other email did she likely just get?** None — this is Hour 0. She is not in any other flow yet.
- **If she browsed a product page (PDP) within 24 hours of signup without adding to cart:** Browse Abandonment E1 (`browse-04-e1`) is queued for the next-day send. E1 of Welcome and Browse E1 must therefore feel **different**. Welcome E1 is *narrative* (mirror → mechanism → permission). Browse E1 is *educational hook* (mechanism-light, "you were looking at something that helps kids who can't feel when they need to go"). If they feel like the same email, Browse E1 is wasted.
- **If she added to cart at Hour 1 and abandoned it:** Cart Abandonment E1 fires 1 hour after abandonment. By Hour 1 of her signup day, her inbox is: Welcome E1 (signed Lena, narrative) + Cart E1 (signed Lena, transactional, mechanism-reminder). Both must be Lena-signed per §17.10, but Welcome E1 carries the mirror, Cart E1 carries the cart contents. Distinct openings, distinct first lines, distinct subject lines — but the same sender, the same voice, the same mechanism line. Cross-flow continuity rule: **Welcome E1 establishes the voice; Cart E1 references the cart.**

**Operational flag:** During Weeks 1–2 of warming, if E1's open rate drops below 45%, pause the entire flow per §17.3. The system rule overrides the level-specific copy.

---

### 1.2 WELCOME E2 — `welcome-01-e2-l1` (Day 1)

**Phase 1 state at trigger:** 24 hours after E1. She has slept on E1, possibly re-read it, possibly mentioned it to her partner (who responded with disagreement voice). Trust cumulative 56. Hope/realism ~75/25.

**CONVERSION GATE:**
- **Hard CTA: NO.** E2 is the **mechanism-click tipping point** — the highest single-email trust gain (+2) in the entire welcome series. A hard CTA here would cannibalize the mechanism landing. The dominant ask is "click the body-signal-system link" — a *learn-more* CTA, not a *buy-now* CTA. The CTA is `See the Body-Signal System in Action` — a text-level link, not a full-width buy button.
- **Soft CTA: YES.** Three soft CTAs are allowed in E2 (per the section count in the sequence document: Hook → Validation → Mechanism → Social Proof → CTA, with multiple smaller CTAs along the way). Each is permission-toned.
- **Permission-not-to-buy: STRONG.** E2 contains the "if today isn't the day, that's a real answer" tone even though it is the most mechanism-dense email.
- **Sender rule:** Lena only, Weeks 1–2 warming, no hard-sell, no countdowns, no >1 promo link (§17.2).

**DEAD-END:**
- **What if she ignores E2?** Welcome E3 fires at D3 regardless. No At-Risk at the pre-purchase stage. The flow's cadence (D0/D1/D3/D7/D10/D14/D17/D21) is fixed — engagement is not required for progression.
- **Winback / Sunset:** No winback from a single missed E2. Same 120-day Sunset rule applies (§17.11).
- **Segment change:** None. E2 is an L1-tagged email sent to an L1-tagged subscriber. Per §18.1 Rule 1, no behavioral inference moves her off the L1 track.
- **The cart interaction:** If she abandoned a cart at Hour 1, by D1 she is in: Welcome E2 + Cart E2 (24h after cart abandonment). The Welcome E2 + Cart E2 same-day collision is the most common cross-flow moment of the entire pre-purchase phase. The two emails must feel like different chapters of the same conversation, not the same email sent twice.

**CROSS-FLOW CONTINUITY:**
- **If Welcome E2 + Cart E2 fire the same day:** Welcome E2 is the **narrative mechanism** email — "you didn't fail, the methods did" (Tier 3 reframe). Cart E2 is the **social-proof + product-value** email — 1-pair → 3+3 dynamic upsell, Three-Family Pattern testimonial block, lever L4 Peer Trust + L2 Pull-Ups Harm. The two should *not* share the same hook or the same opening line. Welcome E2 opens with "Oh Crap stressed you both out" (method naming). Cart E2 opens with a *cart-aware* observation — "I saw these were on your mind" (Lena voice, R2 recognition anchors). The same voice; the same mechanism; but distinct openings, distinct proofs.
- **If Welcome E2 + Browse E1 fire the same day:** Welcome E2 is mechanism-deep; Browse E1 is mechanism-light. They cannot both be the mechanism-dense email. Welcome E2 wins the deep-mechanism slot; Browse E1 is the educational hook — "you were looking at something that helps kids who can't feel when they need to go." Browse E1 stays light so that Welcome E2 still lands the click.
- **If she has done nothing (no cart, no browse) by D1:** Welcome E2 stands alone. This is its most important configuration. E2 is **the most important email in her pre-purchase journey** (per the emotional-trust document, "the tipping point email"). When it stands alone, it can be the longest email in the flow (1,085 words).

**Operational flag:** If E2's open rate is materially lower than E1's, the system has a delivery or subject-line problem. E2 must pass E1's open rate, or the warming schedule is at risk (§17.3).

---

### 1.3 WELCOME E3 — `welcome-01-e3-l1` (Day 3) — FIRST HARD CTA

**Phase 1 state at trigger:** 72 hours of thinking. She has re-read E1 and E2, googled reviews, possibly mentioned the mechanism to her partner or friend, possibly added to cart. Trust cumulative 57. Hope/realism ~78/22. **The transient -1 trust delta in E3 is the cost of asking for money for the first time.**

**CONVERSION GATE:**
- **Hard CTA: YES — this is the first hard CTA in the welcome flow.** Welcome E3 introduces the 3+3 bundle at $79.99. The button is **full-width Brand-Green #039902, 48px+ tap-friendly, white text** (per the avatar profile's L1 CTA style §15.7). The button text is *See if this works for him* or *Try it for 60 days* — never "BUY NOW" (L1 forbids).
- **Soft CTA: YES, parallel to the hard CTA.** A secondary text link to the FAQ or to the mechanism page is allowed. The hard CTA is the dominant element; the soft CTA preserves the trust transaction.
- **Permission-not-to-buy: STRONG.** Pre-K math is the urgency lever ("60 days before Pre-K = enough time"), but the email *must* also carry "if today isn't the day, that's a real answer" energy. Money-vs-need tension is real at E3; the 60-day guarantee absorbs most of the dip but not all of it.
- **Sender rule:** Lena. Weeks 1–2 warming: no countdown timers, no affiliate links, no "Shop Today" hard-sell phrasing (§17.2). "See if this works for him" is allowed because it is permission-toned, not transactional.

**DEAD-END:**
- **What if she ignores E3?** Welcome E4 fires at D7 regardless. No At-Risk at the pre-purchase stage. The flow continues.
- **Winback / Sunset:** No winback from a single missed E3.
- **Segment change:** None at the data layer. The -1 trust delta is *emotional*, not operational — it does not move her to a different segment in Phase 1.
- **Cart interaction:** If she abandoned a cart and Cart E1/E2/E3 have all fired without recovery, E3 is the *re-attempt* — it returns to the mechanism and re-presents the 3+3 bundle from a different angle (60-day guarantee front-and-center). If she has not touched the cart, E3 is the first time the 3+3 bundle is presented in the welcome series.

**CROSS-FLOW CONTINUITY:**
- **If she abandoned a cart at Hour 1, by D3:** Cart E3 has already fired (72h after abandonment). Welcome E3 and Cart E3 both arrive in the same window. They are the *closing argument and the closing argument* — same end goal (convert her), different lever. Welcome E3 lever: L3 60-Day Guarantee + Pre-K calendar math. Cart E3 lever: L3 60-Day Guarantee + permission-not-to-buy. Same risk-reversal; different openings.
- **If she has not touched the cart:** Welcome E3 is the moment the 3+3 bundle enters her consideration set. Cart E3 does not fire. Welcome E3 stands alone and is allowed to be the dominant money-ask email of the week.
- **The 49% SPARK stat:** E3 contains the 49% normalization. If Cart E3 has already used the 49% stat, Welcome E3 may use it again (the rule of thumb is 70%+ of L1 emails carry it; repetition is allowed, but the framing must differ — Welcome E3 frames it as "you are not behind," Cart E3 frames it as "this is why the third option exists").

**Operational flag:** E3 is the highest-risk email in the flow. The -1 trust delta is the calibration for *money-vs-need tension absorbed by guarantee*. If unsubscribe rate at E3 exceeds 2%, the CTA copy is overclaiming and must be revised. If open rate is below 45%, the system pauses and narrows the segment (§17.3).

---

### 1.4 WELCOME E4 — `welcome-01-e4-l1` (Day 7)

**Phase 1 state at trigger:** A full week. She has asked her partner, googled "BrightKidCo reviews," possibly had a regression. Trust cumulative 59. Hope/realism 75/25. **The absolution moment** — *You didn't fail. You solved the wrong problem.* is the unlock.

**CONVERSION GATE:**
- **Hard CTA: YES.** E4 carries multiple CTAs (per the sequence document's section count, three CTAs in the email). The pricing box features the 3+3 bundle at $79.99 with rotation rationale. Button text: *See if the 3+3 Bundle closes the gap before Pre-K* — the first explicit Pre-K timing anchor in the welcome series.
- **Soft CTA: YES, parallel.** A "Read the parent quotes" link is the soft secondary. The hard CTA is dominant; the soft CTA is the "still thinking" out.
- **Permission-not-to-buy: STRONG.** Despite the absolution moment and the hard CTA, E4 is the most permission-rich email in the flow. The sign-off "With understanding," signals the tonal shift from "we're getting to know each other" (E1-E2) to "we understand what you're going through" (E3-E5). The hard CTA is paired with the 60-day guarantee.
- **Sender rule:** Lena. Weeks 1–2 warming continues to forbid countdowns and "Shop Today" hard-sell (§17.2). E4 satisfies the warming content rules because the mechanism is the dominant content, not the price.

**DEAD-END:**
- **What if she ignores E4?** Welcome E5 fires at D10 regardless. The flow continues.
- **Winback / Sunset:** No winback from a missed E4. The 120-day Sunset rule still applies across the full lifecycle.
- **Segment change:** None in Phase 1 (§18.1). The +2 trust delta is the identity-level unlock; if she doesn't engage with E4, the *emotional* residue is "this brand gets me" or "I missed it." She is still L1-tagged.

**CROSS-FLOW CONTINUITY:**
- **E4 is the identity-level email of the welcome flow.** Its dominant lever is L1 Deep Mechanism + L5 Normalization. If she is also in Cart E3 (cart abandoned at Hour 1, no recovery, day 7 of cart abandonment), the two emails do not collide — Cart E3 has already fired by Day 3 of the cart. But if she abandoned a *second* cart at Day 5, the new Cart E1 fires at Day 5 + 1h, overlapping with the Day 7 E4. The system rule (max 1 flow email per subscriber per day, §2.5) means one is held until the next day. The tie-breaker: **Cart E1 fires first** because the cart is time-sensitive (72h cart recovery window). Welcome E4 fires the next day.
- **Browse Abandonment interaction:** If she browsed the PDP at signup and never added to cart, Browse E1 fired at D1, Browse E2 at D3. By D7, Browse E3 fires (7 days after browse, 60-day guarantee close). Browse E3 is the *first offer* in the browse series — it presents the 3+3 bundle for the first time from the browse angle. Welcome E4 and Browse E3 both land at D7. They share the 3+3 bundle presentation but differ in opening: Welcome E4 opens with "It took us 3 years" (absolution hook), Browse E3 opens with "60 days for your child's nervous system to start connecting" (guarantee hook). Same product, different emotional entry.
- **The 49% stat appears in E4** as the normalization re-anchor after the absolution. If she has seen the 49% in E2 and E3, the third appearance in E4 is *repetition earning credibility*, not redundancy.

**Operational flag:** E4's +2 trust delta is the **calibrated maximum** for a single L1 email. A +3 would indicate overclaim. Audit the email against the trust pyramid Tier 3 (failure acknowledgment) and Tier 5 (60-day guarantee re-stated) — both must be present and the absolution must not slip into "Easy" or "Just try harder" framing.

---

### 1.5 WELCOME E5 — `welcome-01-e5-l1` (Day 10) — THE PRE-K MATH EMAIL

**Phase 1 state at trigger:** 3 days to sit with E4's absolution. Trust cumulative 59. Hope/realism 70/30. **Pre-K urgency is now explicit** — this is the only L1 email where calendar pressure is openly stated.

**CONVERSION GATE:**
- **Hard CTA: YES.** E5 carries the 3+3 bundle at $79.99 with the 3-layer product education (the "show me what's different" moment) and the Pre-K math. Button text: *See if the 3+3 Bundle closes the gap before Pre-K.* Full-width Brand-Green button.
- **Soft CTA: YES.** A link to the 8-week plan or the L1 mechanism page is the soft secondary.
- **Permission-not-to-buy: STRONG + L1-specific.** E5 is also where partner-disagreement must be addressed: *This is your decision* (implicit, never stated). The avatar profile forbids partner-conflict triggers; the email must imply autonomy without saying it.
- **Sender rule:** Lena. Weeks 1–2 warming: the Pre-K calendar math is *factual*, not manufactured. The 60-day guarantee is a real deadline (return-by-date math), not a countdown gimmick. §17.2 forbids countdown timers during warming — E5's "60 days" is a math statement, not a clock.

**DEAD-END:**
- **What if she ignores E5?** Welcome E6 fires at D14 regardless. The 75-85% of unconverted Sarahs are now in "I will buy or I will leave" territory.
- **Winback / Sunset:** No winback from a missed E5. The welcome flow's deadline structure is internal: by D17 the WELCOME10 code expires; by D21 the series ends. The next re-engagement lever is Cart Abandonment (if cart is still active), the WELCOME10 expiration (E7), or the Winback B path at Day 90+ no engagement.
- **Segment change:** None in Phase 1. The neutral 0 trust delta is the *right* calibration — information density offsetting calendar pressure.

**CROSS-FLOW CONTINUITY:**
- **E5 is the longest email in the welcome flow (1,186 words, 11 sections, Shape G).** It does double duty: Pre-K timeline + 3-layer product education. If she is also receiving Browse E2 (Day 3 of browse, 3-layer product education), the 3-layer description is consistent across both emails but the *entry* is different. Browse E2 opens with deep mechanism. Welcome E5 opens with Pre-K math.
- **If she is receiving PP-Level Detection E1 (Day 14 GF) simultaneously:** Per §2.5, PP-Level Detection takes priority at Day 14. But E5 fires at D10, before the Day 14 collision. PP-Level Detection is for GF-tagged subscribers only; L1-tagged Sarah does not receive it.
- **Cart interaction:** If a cart is still active (added at Hour 1, abandoned, Cart E1/E2/E3 all fired without recovery), the cart has expired by D10 (72h cart window). E5 stands alone.

**Operational flag:** E5's 3-layer product education is information-dense. If the welcome flow's open rate drops below 50% at E5 (per the emotional-trust document's monitoring flag), the 3-layer block is too long; consider trimming. The 3-layer is the L1-A lever and must not be cut entirely, but the length can be reduced.

---

### 1.6 WELCOME E6 — `welcome-01-e4-l1` (Day 14) — SOCIAL PROOF

**Phase 1 state at trigger:** 4 days to sit with E5. Decision window closing — bought, about to buy, or decided not to. Trust cumulative 60. Hope/realism 72/28.

**CONVERSION GATE:**
- **Hard CTA: YES.** E6 carries the 3+3 bundle re-introduction with math reframe ("less than two months of disposable pull-ups"). Button text: *See if the 3+3 bundle works for your child.*
- **Soft CTA: YES.** A "Read more L1 stories" link is the soft secondary.
- **Permission-not-to-buy: STRONG + pull-up reframe.** E6 is the L1-specific move where pull-ups are reframed as a signal-blocking tool, *not* a villain. The email's lever is L4 Peer Trust (L1-specific testimonials) + L1-A Pre-K (calendar math). The hard CTA is paired with the pull-up reframe — "you didn't make a wrong choice using pull-ups. Every parent uses them."
- **Sender rule:** Lena. Sign-off shifts to "With care," (E6+ progression). The shift is operationally important: the email reader's psychology shifts from "we're getting to know each other" to "we're in it together."

**DEAD-END:**
- **What if she ignores E6?** Welcome E7 fires at D17 regardless. The flow is in the closing-argument phase.
- **Winback / Sunset:** No winback from a missed E6. Same 120-day Sunset rule.
- **Segment change:** None in Phase 1. The +1 trust delta is the L1-testimonial earn.

**CROSS-FLOW CONTINUITY:**
- **Day 14 is a critical decision day AND the PP-Level Detection fire day for GF-tagged subscribers.** Per §2.5, PP-Level Detection takes priority over all Day 14 content for GF subscribers. For L1-tagged Sarah, the Day 14 content is Welcome E6, plus possibly a PP-Ed D14 if she is already a customer (which she is not, because she has not purchased — this is the pre-purchase phase). So the Day 14 collision is between Welcome E6 and any cross-level email scheduled at Day 14. Browse E3 fires at D7 of browse (so if she browsed at D0 of signup, Browse E3 fires at D7; if she browsed later, Browse E3 fires later). The Browse E3 + Welcome E6 collision is unlikely in the same week.
- **The pull-up reframe** is L1-specific. The testimonial must be L1-voice (verbal 3-5 year old, Pre-K deadline scenario, "perfect week then regression" pattern). If she has previously read E4's absolution testimonial ("It took us 3 years"), E6's testimonial is the *L1 micro-win* — a different anchor, a different proof, a different opening.
- **Sign-off shift:** "With care," replaces "With understanding," starting at E6. The shift is a tonal cue to the reader; it is also a *cross-flow consistency* signal — every L1 email from E6 onward uses "With care," and that consistency is part of the peer-trust architecture.

**Operational flag:** E6's open rate should be 45%+ (per the avatar profile's expected floor). If it drops below 45%, the L1 testimonial anchor is not specific enough. Replace with a different L1 micro-win story.

---

### 1.7 WELCOME E7 — `welcome-01-e7-l1` (Day 17) — LAST CALL

**Phase 1 state at trigger:** WELCOME10 code expires around E7. By D17, 50-65% of L1 signups who will ever convert have already purchased. Trust cumulative 60. Hope/realism 70/30.

**CONVERSION GATE:**
- **Hard CTA: YES — the hardest ask in the welcome series.** Code + guarantee + "the last 10%" frame. Button text: *Pre-K is coming. Close the gap with 6 pairs of body-signal learning underwear. See if the 3+3 Bundle Works for Your Child.*
- **Soft CTA: YES.** A "Read L1 parent stories" link is the soft secondary.
- **Permission-not-to-buy: STRONG + open-door P.S.** *Reply to this email if anything here resonates. You'll get me, not a template, not a bot. I read every single response.* The P.S. is the door — it is *also* a deliverability lever per §17.2 (reply prompts required in every email).
- **Sender rule:** Lena. The code expiration is calendared (real deadline), not manufactured. Per §17.2, no countdown timers — the WELCOME10 expiration is a *date*, not a *clock*.

**DEAD-END:**
- **What if she ignores E7?** Welcome E8 fires at D21. After E8, the welcome series ends. If she has not purchased, the next lever is Cart Abandonment (if she added to cart in the past and abandoned), Checkout Abandonment (if she entered checkout in the past), or **Winback B at Day 90+ no engagement** (the never-bought path).
- **Winback / Sunset:** No winback from a missed E7. The 120-day Sunset rule applies across the full lifecycle.
- **Segment change:** None in Phase 1. The 0 trust delta is the right calibration — closing-argument neutrality.

**CROSS-FLOW CONTINUITY:**
- **E7 is the closing argument of the welcome series.** It is *also* the last email before the WELCOME10 code expires. The "last 10%" frame is the L1-specific reframe for the gap between 90% trained and fully trained. If she is also receiving Cart E3 (cart abandoned at Hour 1, all three cart emails fired without recovery, no recovery, no second cart), the cart is expired by D17. E7 stands alone in the closing.
- **The Lena open-door P.S. is a deliverability lever.** Per §17.2, reply prompts are required in every email during warming. E7's P.S. — *Reply to this email and tell me about your child* — is a *strategic* reply prompt, not just a deliverability one. It is a re-entry path.
- **Sign-off consistency:** E7 uses "With care," matching E6. The "With care," sign-off continues through E8 and into the post-purchase and winback phases.

**Operational flag:** E7 is the highest-pressure moment in the welcome flow. If unsubscribe rate at E7 exceeds 2%, the code-expiration framing is overclaim. Audit for manufactured urgency.

---

### 1.8 WELCOME E8 — `welcome-01-e8-l1` (Day 21) — SERIES FINALE

**Phase 1 state at trigger:** Trust cumulative 60. Hope/realism 65-70/30-35. **The series finale is a trust-preservation email, not a conversion email.**

**CONVERSION GATE:**
- **Hard CTA: YES, but with the softest possible framing.** E8's CTA is *Get the 3+3 Bundle, $79.99* — simple action verb + benefit + price. Full-width Brand-Green button, but the *tone* of the email is door-open, not door-close.
- **Soft CTA: YES, dominant.** The P.S. is the soft CTA: *If BrightKidCo isn't right for your family, I'll tell you honestly. Reply to this email and tell me about your child. I personally read every response, no bots, no templates.* This P.S. is the re-entry path.
- **Permission-not-to-buy: STRONGEST IN THE FLOW.** E8 explicitly carries the permission-to-walk-away tone. The 21-day journey is recap'd; the door is left open.
- **Sender rule:** Lena. Sign-off "With care," (E6+). The P.S. satisfies §17.2 reply-prompt requirement.

**DEAD-END:**
- **What if she ignores E8?** The welcome series ends. The next lever is:
  1. **Cart Abandonment** — if she added to cart in the past and the cart has not been recovered.
  2. **Browse Abandonment** — if she viewed the PDP and never added to cart.
  3. **Winback B** at Day 90+ no engagement (the never-bought path). Winback B is the re-engagement path for non-purchasers after a 60-90 day quiet period.
  4. **Sunset** at 120 days no engagement per §17.11.
- **Winback / Sunset:** Sunset fires only after Winback A/B without re-engagement. Winback B fires at Day 90+ for signups who never purchased.
- **Segment change:** None in Phase 1. The 0 trust delta is the *trust-preservation* calibration, not a no-effect calibration.

**CROSS-FLOW CONTINUITY:**
- **E8 is the trust-preservation email.** If she is also in PP-Ed D21 (post-purchase Day 21 — possible only if she bought early in the welcome series, around D3-D5), the two emails do not collide in this phase because PP-Ed is post-purchase only. If she is a non-buyer, E8 stands alone.
- **Winback B preparation:** E8 is the last email of the welcome series. After E8, the next re-engagement lever is Winback B at Day 90+ no engagement. The 49% stat reappears in E8 as the final normalization. The P.S. is the re-entry path.
- **Sign-off consistency:** "With care," continues.

**Operational flag:** E8's open rate is expected to drop to 30-35% (per the emotional-trust document). If it drops below 30%, the series finale is not compelling. The P.S. needs revision.

---

### 1.9 CART ABANDONMENT E1 — `cart-02-e1` (1 hour after abandonment)

**Phase 1 state at trigger:** Cart abandoned. Sarah's first reaction: *I'll come back later.* She has not yet looked at reviews, not yet asked her partner. Hope/realism unchanged from signup (75/25 if E1/E2 already landed, or 70/30 if E1 only).

**CONVERSION GATE:**
- **Hard CTA: YES — return to cart.** The CTA is "Return to your cart" or "Pick up where you left off," paired with the cart contents. Full-width Brand-Green button. **L1 allows hard CTAs in cart abandonment** because the cart itself is a hard ask — she added the product, the only question is whether she completes the purchase.
- **Soft CTA: YES.** A secondary link to the L1 mechanism page (for the undecided) is allowed.
- **Permission-not-to-buy: YES, but lighter than Welcome E1.** Cart E1 is the "I saw these were on your mind" email — peer-voiced, cart-aware. Permission-not-to-buy is present but not the dominant tone (her cart is still warm).
- **Sender rule:** Lena. **No discount in E1** per the strategy-macro notes — discount is reserved for Cart E3 (and even then optional). The mechanism reminder re-anchors without repeating Welcome E2's mechanism landing.
- **Transactional vs. conversational cloak:** Per §17.8, Cart E1 carries both transactional and conversational cloaks. This is important: Google 2024 inbox rules treat cart abandonment as a transactional-ish email, so the email can carry a 60-day guarantee reminder + cart contents without being suppressed as promotional.

**DEAD-END:**
- **What if she ignores Cart E1?** Cart E2 fires at 24h after abandonment. The system does not wait for an open.
- **Winback / Sunset:** No winback from a missed Cart E1.
- **Segment change:** None. The cart is still active.
- **Cross-flow impact:** Per §2.5, **Cart Abandonment SUPPRESSES Welcome E3+ during active cart.** If Sarah abandoned a cart at Hour 1, Welcome E3-E8 are paused. Welcome E1-E2 (already sent) remain delivered. The cart is the dominant flow.

**CROSS-FLOW CONTINUITY:**
- **The most common cross-flow moment of the pre-purchase phase is Welcome E2 + Cart E1 (same day, if she added to cart at Hour 1 and abandoned immediately) and Welcome E2 + Cart E2 (same day, if she abandoned at Hour 1 and Cart E2 fires 24h later).** These two emails must feel like different chapters. Welcome E2 is the mechanism deep-dive. Cart E1 is the cart-aware reminder. Welcome E2 + Cart E2 is even more delicate: Welcome E2 is "you didn't fail" (absolution), Cart E2 is "I saw these were on your mind" (Lena voice, social proof). Same sender, same Lena, but different openings, different proofs.
- **If she abandoned a 1-pair cart, Cart E2 dynamically upsells to 3+3** with the "Most parents who buy 1 pair come back for 3+3 within a week" line. The upsell hook is *inside* Cart E2, not in Cart E1 — Cart E1 is the cart-respect email.
- **The WELCOME10 code** may or may not be referenced in Cart E1. If Welcome E1 has already introduced the code, Cart E1 does not need to repeat it. The code's expiration lives in Welcome E7.

**Operational flag:** Cart E1 must fire within 1 hour of cart abandonment per the strategy-macro trigger window. If the system is delayed, the cart recovery rate drops. This is operational, not behavioral.

---

### 1.10 CART ABANDONMENT E2 — `cart-02-e2` (24 hours after abandonment)

**Phase 1 state at trigger:** Cart still abandoned. She has had 24 hours to think. Trust has been built by Welcome E1/E2 (if delivered) or she is in the cart-only path.

**CONVERSION GATE:**
- **Hard CTA: YES — return to cart, with the 3+3 dynamic upsell if she abandoned a 1-pair cart.** The CTA is "Pick up your cart" or "Complete your order," with the cart contents. Full-width Brand-Green button.
- **Soft CTA: YES.** A "Read L1 parent stories" link is the soft secondary.
- **Permission-not-to-buy: YES, but lighter than Cart E1's.** Cart E2 is the social-proof email of the abandonment series. The Three-Family Pattern (one testimonial per level path — Sarah/Lisa/Maria) provides cross-level proof.
- **Sender rule:** Lena. **Cross-level R1-R6 mandatory** — Cart E2 is cross-level by design (it must work for all four levels). The lever is L4 Peer Trust + L2 Pull-Ups Harm. No discount.

**DEAD-END:**
- **What if she ignores Cart E2?** Cart E3 fires at 72h after abandonment. After Cart E3, the cart is considered expired.
- **Winback / Sunset:** No winback from a missed Cart E2. Same 120-day Sunset rule.
- **Segment change:** None.

**CROSS-FLOW CONTINUITY:**
- **If Welcome E2 + Cart E2 fire the same day (cart abandoned at Hour 1, D1 of signup):** This is the most-delicate cross-flow moment. Welcome E2 is mechanism-deep (L1-specific, absolution moment). Cart E2 is mechanism-light, social-proof-heavy. The two must feel like different conversations: Welcome E2 = "you didn't fail," Cart E2 = "other L1 moms bought this and it worked." Same Lena, different openings, different proof.
- **If Cart E2 fires alongside a Browse E1 or Browse E2:** Browse is mechanism-led, Cart is social-proof-led. They can co-exist if their openings differ.
- **The 1-pair → 3+3 dynamic upsell** is a Cart E2-specific move. If she abandoned a 1-pair cart and has read Welcome E3 (which presents the 3+3 bundle), the Cart E2 upsell is *repetition*. The system rule (max 1 flow email per subscriber per day, §2.5) does not prevent the two from being in the same week; the repetition is allowed as long as the framing differs (Welcome E3 = "the 3+3 bundle is your best option," Cart E2 = "most 1-pair buyers come back for 3+3 within a week").

**Operational flag:** Cart E2 is the social-proof lever. If the 1-pair → 3+3 upsell is underperforming, the dynamic is wrong — the upsell hook should be in Cart E2, not Cart E1.

---

### 1.11 CART ABANDONMENT E3 — `cart-02-e2` (72 hours after abandonment) — FINAL CART RECOVERY

**Phase 1 state at trigger:** Cart still abandoned after 72 hours. This is the **last cart-recovery email** before the cart is considered expired.

**CONVERSION GATE:**
- **Hard CTA: YES — last attempt to recover the cart.** Button text: *Try it for 60 days. By your judgment.* Or similar permission-toned ask.
- **Soft CTA: YES.** A "Read the FAQ" link is the soft secondary.
- **Permission-not-to-buy: STRONGEST IN THE CART SERIES.** Cart E3's tone is "No rush. If this isn't the day, that's okay. Whatever you choose — thanks for reading this far." The 60-day guarantee is the risk-reversal. The optional 10% discount is tested but not assumed.
- **Sender rule:** Lena. Cross-level R1-R6 mandatory. Lever: L3 60-Day Guarantee + L4 Lena.

**DEAD-END:**
- **What if she ignores Cart E3?** The cart is considered expired. Welcome flow resumes (E3+ if she is still in Welcome's window, or the welcome series resumes from where it was paused).
- **Winback / Sunset:** No winback from a missed Cart E3. Same 120-day Sunset rule.
- **Segment change:** None in Phase 1. Cart abandonment does not change her L1 tag.

**CROSS-FLOW CONTINUITY:**
- **Cart E3 is the closing argument of the cart series.** If Welcome E3 is paused (cart active, suppression rule), it has not fired by the time Cart E3 fires. If she has been in the welcome series up to E2 and then added to cart at Hour 4 of Day 1, the cart takes over and Welcome E3-E8 are paused. By D3 of the cart (D4 of signup), Cart E3 fires. Welcome E3 would have fired at D3 of signup, but it is paused — Cart E3 is the only flow email she receives that day.
- **After Cart E3, the welcome series resumes** (E3+ if she is still in the window). The resumption respects the original cadence: if Cart E3 fired at signup D4, Welcome E3 fires at signup D7 (the cart recovery delayed it). The two must feel like a continuous conversation.
- **The Lena close** is the door: *Whatever you choose — thanks for reading this far. If today isn't the day, that's a real answer.* This is the same permission-toned close used in Welcome E1 and E8.

**Operational flag:** Cart E3 is the final cart-recovery lever. If the cart recovery rate is below 5-8% across the three emails combined, the cart is under-recovering — review the lever mix (mechanism-light Cart E1, social-proof Cart E2, guarantee Cart E3).

---

### 1.12 CHECKOUT ABANDONMENT E1 — `checkout-03-e1` (1 hour after checkout abandonment)

**Phase 1 state at trigger:** Highest-intent abandoner — she was 1 click away from completing the order. Trust cumulative ~58-60. Hope/realism ~78/22.

**CONVERSION GATE:**
- **Hard CTA: YES — return to checkout.** Button text: *Complete your order* or *Pick up where you left off.* Full-width Brand-Green button. Cart contents + pricing transparency (no shipping-cost surprise).
- **Soft CTA: YES.** A "Read the FAQ" link is the soft secondary.
- **Permission-not-to-buy: STRONG.** Per the sequence document: *If today isn't right, that's a real answer.* The first decision-respect email — no chasing.
- **Sender rule:** Cross-level only — no L1/L2/L3 segmentation in the body. Lena voice. Lever: L3 Guarantee.

**DEAD-END:**
- **What if she ignores Checkout E1?** Checkout E2 fires at 24h after abandonment. After E2, checkout is expired.
- **Winback / Sunset:** No winback from a missed Checkout E1.
- **Segment change:** None in Phase 1.
- **Cross-flow impact:** Per §2.5, **Checkout Abandonment does NOT suppress Welcome.** Sarah made it further than cart — she is highest-intent. If she is in Welcome E3-E8, this fires alongside those emails. The system rule (max 1 flow email per subscriber per day) still applies.

**CROSS-FLOW CONTINUITY:**
- **Checkout E1 + Welcome E3 (or E4, E5, E6) firing the same day:** The checkout is the highest-intent conversation. Welcome is the relationship-building conversation. The two must feel different. Checkout E1 is "complete your order" (transactional-respecting). Welcome E3-E6 is "see if this works for him" (relationship-respecting). Same Lena, different openings, different asks.
- **Cart E1/E2/E3 + Checkout E1 collisions** are impossible because they are mutually exclusive — she either abandoned a cart (did not enter checkout) or abandoned a checkout (entered checkout, did not complete). The system routes her to one flow or the other.

**Operational flag:** Checkout E1 fires within 1 hour of checkout abandonment per the strategy-macro trigger window. Delay = drop in recovery.

---

### 1.13 CHECKOUT ABANDONMENT E2 — `checkout-03-e2` (24 hours after checkout abandonment)

**Phase 1 state at trigger:** Checkout still abandoned. She has had 24 hours to think. Trust cumulative ~58-60.

**CONVERSION GATE:**
- **Hard CTA: YES — final checkout nudge.** Button text: *Try it for 60 days. By your judgment.* Lever: L3 Guarantee + L1 Mechanism.
- **Soft CTA: YES.** A "Read the FAQ" link is the soft secondary.
- **Permission-not-to-buy: STRONG.** Final nudge. Free shipping reminder (L1-specific objection — financial hesitation). NO additional discount — checkout abandoners are highest-intent; discounting would feel desperate.
- **Sender rule:** Cross-level only. Lena voice.

**DEAD-END:**
- **What if she ignores Checkout E2?** The checkout is expired. She will not return to this checkout session. The next lever is Welcome flow resumption (if paused by the cart, but checkout does not pause welcome) or Winback B at Day 90+ no engagement.
- **Winback / Sunset:** No winback from a missed Checkout E2. Same 120-day Sunset rule.
- **Segment change:** None in Phase 1.

**CROSS-FLOW CONTINUITY:**
- **Checkout E2 is the last checkout email.** If she is also in Welcome E3-E8, the two are not in the same week (Checkout E2 fires at 24h after checkout abandonment, which is typically within 24-48h of signup; Welcome E3 fires at D3 of signup). If they overlap, the max-1-per-day rule resolves the collision.
- **The free-shipping reminder** addresses the L1 financial-hesitation objection ($79.99 is real money). It is Checkout E2-specific — Welcome E3 also addresses this, but the framing is different (Welcome E3 = "less than two months of pull-ups," Checkout E2 = "free shipping is included").

**Operational flag:** No discount in Checkout E2. If A/B testing shows discount increases recovery, add it carefully — discounting at the highest-intent moment cannibalizes the full-price anchor.

---

### 1.14 BROWSE ABANDONMENT E1 — `browse-04-e1` (24 hours after browse)

**Phase 1 state at trigger:** Sarah viewed a product page (e.g., the ASD PDP) but did NOT add to cart. Lower intent than cart — she was looking, not buying. Trust cumulative 56-58 (if Welcome E1/E2 have fired).

**CONVERSION GATE:**
- **Hard CTA: NO.** E1 of Browse Abandonment is the *educational hook*. The dominant ask is "click to learn more," not "buy now." Button text: *Learn more about the body-signal system* or similar. No full-width Brand-Green "BUY NOW" — a text link or a soft secondary button at most.
- **Soft CTA: YES, dominant.** A "Read the mechanism" text link is the primary ask.
- **Permission-not-to-buy: STRONGEST IN BROWSE.** E1's tone is "you were looking at something that helps kids who can't feel when they need to go" — purely educational.
- **Sender rule:** Lena. Lever: L1 Sensory Gap. R1-R6 calibration mandatory. The email must be L1-aware even though it is cross-level.

**DEAD-END:**
- **What if she ignores Browse E1?** Browse E2 fires at D3 after browse. Browse does not pause Welcome or Cart — it runs in parallel (§2.5).
- **Winback / Sunset:** No winback from a missed Browse E1.
- **Segment change:** None in Phase 1.

**CROSS-FLOW CONTINUITY:**
- **Browse E1 + Welcome E2 firing the same day** (if she browsed at signup and Browse E1 fires at D1): Welcome E2 is the mechanism deep-dive. Browse E1 is the mechanism-light hook. They cannot both be the mechanism-dense email. Welcome E2 wins the deep slot. Browse E1 stays light.
- **Browse E1 is mechanism-light on purpose.** Welcome E2 carries the mechanism click. If Browse E1 attempts to deep-dive on mechanism, it cannibalizes Welcome E2's tipping-point function.

**Operational flag:** Browse E1 must be mechanism-light. If the email drifts into mechanism-deep, it competes with Welcome E2.

---

### 1.15 BROWSE ABANDONMENT E2 & E3 — `browse-04-e2` (D3) and `browse-04-e3` (D7)

**Phase 1 state at trigger:** Browse still no cart. She has had 3 days (E2) or 7 days (E3) to think.

**CONVERSION GATE (E2 — D3):**
- **Hard CTA: NO.** E2 carries the 3-layer product education (same as Welcome E5, but earlier in her journey). The dominant ask is "understand the 3 layers" — a learn-more CTA.
- **Soft CTA: YES, dominant.** A "Read the 3-layer breakdown" text link.
- **Permission-not-to-buy: STRONG.** E2 is the deep-mechanism + product-education email.
- **Sender rule:** Lena. Cross-level R1-R6. Lever: L1 + L4.

**CONVERSION GATE (E3 — D7):**
- **Hard CTA: YES — the first offer presentation in the browse series.** Button text: *See if the 3+3 bundle works for your child.* Lever: L3 60-Day Guarantee.
- **Soft CTA: YES.** A "Read the FAQ" link.
- **Permission-not-to-buy: STRONG.** Gentle close. Door stays open. Lena's voice anchors the sign-off.
- **Sender rule:** Lena. Cross-level R1-R6.

**DEAD-END (E2 / E3):**
- **What if she ignores E2 or E3?** Browse series ends after E3. The next lever is the welcome series resumption (if paused — but browse does not pause welcome) or the WELCOME10 code expiration (E7) or Winback B at Day 90+ no engagement.
- **Winback / Sunset:** No winback from a missed browse email. Same 120-day Sunset rule.
- **Segment change:** None in Phase 1.

**CROSS-FLOW CONTINUITY:**
- **Browse E2 + Welcome E2 (or Welcome E3, E4, E5) firing the same week:** Browse E2 carries the 3-layer education. Welcome E5 also carries the 3-layer education. If she is at D3 of browse and D7 of signup, Browse E2 and Welcome E4 may fire the same week. They share the mechanism but differ in opening: Browse E2 opens with the 3-layer breakdown, Welcome E4 opens with the absolution. **The 3-layer explanation is consistent across emails — same language, same diagram, same "Layer 1: signal creation" structure.** The opening and the framing differ; the substance does not.
- **Browse E3 + Welcome E4 firing the same day** (browse at D0 of signup, D7 of browse = D7 of signup): Browse E3 is the 60-day guarantee close. Welcome E4 is the absolution moment. They can co-exist if their openings differ: Browse E3 = "60 days for your child's nervous system to start connecting" (guarantee hook), Welcome E4 = "It took us 3 years" (absolution hook). Same Lena, different openings.

**Operational flag:** Browse E3 is the first offer presentation in the browse series. If the offer is presented earlier (E1 or E2), the educational sequence collapses. Keep the offer out of E1 and E2.

---

## 2. PURCHASE EVENT WINDOW (Hour 0 of Post-Purchase)

### 2.1 ORDER CONFIRMATION — `order-05-e1` (immediate post-purchase)

**Phase 2 state at trigger:** Sarah completed checkout. She is now a customer. Trust jumps to 61 (the order confirmation removes money-vs-need tension). Hope/realism shifts to 50/50 (neutral transactional).

**CONVERSION GATE:**
- **Hard CTA: NO.** Order Confirmation is the *transactional* email. Per Google 2024 rules (§17.7) and §15.7, Order Confirmation must be predominantly transactional. Promotional content is limited to ONE accessory cross-sell (the wash bag).
- **Soft CTA: YES, single accessory.** The wash bag cross-sell is the exception, not the rule. The dominant content is order summary + shipping estimate + 60-day guarantee reminder.
- **Permission-not-to-buy: IMPLIED.** The transactional email is confirmation, not sales.
- **Sender rule:** Lena. The Order Confirmation is the *first* post-purchase email — the tone shifts from "we're trying to win you" to "we're supporting you." The 60-day guarantee reminder is the trust re-anchor.

**DEAD-END:**
- **What if she ignores Order Confirmation?** Shipping, Out for Delivery, and Arrived & Welcome continue regardless. The PP-Education D0 email fires at purchase.
- **Winback / Sunset:** No winback from a missed Order Confirmation.
- **Segment change:** Her tag changes from `prospect` to `customer`. The PP-* flows are now eligible.

**CROSS-FLOW CONTINUITY:**
- **Order Confirmation + PP-Education D0 fire at the same time** (both triggered by purchase). They are co-fire events, not cross-flow collisions. The Order Confirmation carries the order details; PP-Ed D0 carries the first-wear protocol. The two must feel like *one conversation split into two emails* — not two separate asks.
- **No Welcome E3-E8 collision:** The order confirmation fires at purchase. Welcome E3+ was paused (cart) or already completed (no cart). If Welcome E3+ is still in the window, the Order Confirmation supersedes it — the customer is now a buyer, not a prospect.
- **Sender consistency:** Lena signs the Order Confirmation, Lena signs PP-Ed D0. The PP-Education D0 has sign-off "Talk soon," (or close variant) — same as Welcome E1-E2. The transition from prospect to customer is *not* signaled by a sign-off change; it is signaled by the content.

**Operational flag:** Per §17.7, Order Confirmation must be predominantly transactional. If the wash bag cross-sell is over 30% of the email's content, the transactional cloak is broken and the email is at risk of inbox-suppression.

---

### 2.2 SHIPPING NOTIFICATION — `shipping-06` (on fulfillment)

**Phase 2 state at trigger:** Order fulfilled. Tracking info is available. Trust cumulative 62. Hope/realism 50/50.

**CONVERSION GATE:**
- **Hard CTA: NO.** Shipping is a transactional email.
- **Soft CTA: NO.** No cross-sell in the shipping email. Per §17.7, transactional emails are predominantly transactional.
- **Permission-not-to-buy: IMPLIED.** The email is the bridge between order and arrival.
- **Sender rule:** Lena. Lever: L4 Lena. Sign-off: excitement-building (*Can't wait for you to try them. — Lena.*).

**DEAD-END:**
- **What if she ignores Shipping?** Out for Delivery and Arrived & Welcome continue regardless.
- **Winback / Sunset:** No winback from a missed Shipping.
- **Segment change:** None.

**CROSS-FLOW CONTINUITY:**
- **Shipping is the bridge between Order Confirmation and Arrived & Welcome.** It carries no offers, no asks — only tracking and excitement. The Lena sign-off anchors the peer-voice consistency.
- **No collision with welcome or cart** — those flows are completed by the time Shipping fires (Sarah is now a customer).

**Operational flag:** Shipping email is critical for delivery confirmation. If the tracking link is broken or the shipping estimate is wrong, the email fails operationally.

---

### 2.3 OUT FOR DELIVERY — `ofd-07-e1` (morning of delivery)

**Phase 2 state at trigger:** Package scanned as out for delivery. Sarah is in anticipation mode.

**CONVERSION GATE:**
- **Hard CTA: NO.** Out for Delivery is a transactional-prep email.
- **Soft CTA: NO.** No cross-sell.
- **Permission-not-to-buy: IMPLIED.** The email is prep guidance.
- **Sender rule:** Lena. Lever: L4 Lena. The "first few wears are about introducing the sensation, not results" line is the expectation-setter.

**DEAD-END:**
- **What if she ignores Out for Delivery?** Arrived & Welcome fires when delivery is confirmed.
- **Winback / Sunset:** No winback from a missed Out for Delivery.
- **Segment change:** None.

**CROSS-FLOW CONTINUITY:**
- **Out for Delivery + Arrived & Welcome** are a continuous conversation. The Out for Delivery sets expectations ("first few wears"); the Arrived & Welcome delivers the first-wear protocol.
- **No collision with PP-Ed D0** — they fire at the same moment (delivery confirmation), but the system rule (max 1 flow email per subscriber per day) means one is held if needed. In practice, the Order Confirmation, PP-Ed D0, Shipping, and Arrived & Welcome do not all fire the same day — they fire across a 3-7 day window.

**Operational flag:** The expectation-management line in Out for Delivery is the L1-specific deliverability lever — if she expects "trained in 3 days," she will be disappointed; if she expects "introducing the sensation," she is set up for the actual journey.

---

### 2.4 ARRIVED & WELCOME — `arrived-08` (delivery confirmed)

**Phase 2 state at trigger:** Package delivered. Sarah is now a customer with the product in hand. Trust cumulative 63.

**CONVERSION GATE:**
- **Hard CTA: NO.** Arrived & Welcome is the *education* email — first-wear protocol + 8-week timeline.
- **Soft CTA: YES, gentle upsell if 1-pair buyer.** If she bought the 1-pair ($34.99), the upsell to 3+3 is here. If she bought the 3+3 (Sarah's dominant cart), the upsell is a gentle accessory suggestion (wash bag).
- **Permission-not-to-buy: YES.** The first-wear protocol is the dominant content. The 8-week timeline is the realistic anchor.
- **Sender rule:** Lena. Lever: L1 Mechanism.

**DEAD-END:**
- **What if she ignores Arrived & Welcome?** PP-Education D0-D7 continues. PP-Education D7 fires at D7 regardless.
- **Winback / Sunset:** No winback from a missed Arrived & Welcome.
- **Segment change:** None.

**CROSS-FLOW CONTINUITY:**
- **Arrived & Welcome + PP-Education D0 fire at the same time** (delivery confirmation). Arrived & Welcome carries the first-wear protocol; PP-Ed D0 carries "Your first wear" expectation management. The two must feel like a continuous conversation.
- **If she bought 1-pair, Arrived & Welcome carries the 1-pair → 3+3 upsell** (rotation-pitch). PP-Ed D0 does not carry an upsell. The two emails share the "first wear" content but the upsell lives only in Arrived & Welcome.
- **The 8-week timeline** is the promise — every subsequent PP email must reinforce it. The Arrived & Welcome is the anchor.

**Operational flag:** If the 8-week timeline is misrepresented (e.g., "Most kids train in 2 weeks"), the email violates §17.2 (no overclaim) and trips the BS detector. The 8-week arc must be honest.

---

## 3. POST-PURCHASE WINDOW (Day 0 to Day 60)

### 3.1 PP-EDUCATION D0 — `pped-11-d0` (Day 0 post-purchase)

**Phase 3 state at trigger:** Sarah has the product. Trust cumulative 63. Hope/realism 65/35.

**CONVERSION GATE:**
- **Hard CTA: NO.** PP-Ed D0 is the *expectation-management* email.
- **Soft CTA: NO.** No offers, no cross-sells.
- **Permission-not-to-buy: IMPLIED.** The dominant content is "No results expected today. Just observe."
- **Sender rule:** Lena. Lever: L4 Lena.

**DEAD-END:**
- **What if she ignores PP-Ed D0?** PP-Ed D7 fires at D7 regardless. The At-Risk flow (E1) fires at 3 days no open.
- **Winback / Sunset:** No winback from a missed PP-Ed D0.
- **Segment change:** None in Phase 1.

**CROSS-FLOW CONTINUITY:**
- **PP-Ed D0 + Order Confirmation + Arrived & Welcome** all fire at the same trigger event (purchase or delivery). The system rule (max 1 flow email per subscriber per day) means they are spaced across the order-fulfillment-delivery window. PP-Ed D0 is the "first wear" companion to Arrived & Welcome.
- **No collision with Welcome E3+** — the customer is now post-purchase, not pre-purchase.

**Operational flag:** PP-Ed D0's "no results expected today" line is the L1-specific expectation-setter. If the email drifts into "you should see signs in 3 days," it violates §17.2.

---

### 3.2 PP-EDUCATION D7 — `pped-11-d7` (Day 7 post-purchase)

**Phase 3 state at trigger:** Sarah has been observing for 7 days. Trust cumulative 64. Hope/realism 65/35.

**CONVERSION GATE:**
- **Hard CTA: NO.** PP-Ed D7 is the *observation-vocabulary* email — what to look for, what counts as progress.
- **Soft CTA: NO.** No offers. R6 low-bar success metrics: "He paused for 2 seconds before peeing" IS progress.
- **Permission-not-to-buy: IMPLIED.** The dominant content is mechanism education (L1 Mechanism).
- **Sender rule:** Lena. Lever: L1 Mechanism.

**DEAD-END:**
- **What if she ignores PP-Ed D7?** PP-Ed D14 fires at D14 regardless. The At-Risk flow (E1) may have fired at 3 days no open.
- **Winback / Sunset:** No winback from a missed PP-Ed D7.
- **Segment change:** None in Phase 1. The At-Risk E1 may fire if she has not opened any email in 3 days.

**CROSS-FLOW CONTINUITY:**
- **PP-Ed D7 + Replenishment A1 (1-pair buyers only) collide at D14 for 1-pair buyers.** Sarah is a 3+3 buyer, so Replenishment A does not apply to her. Replenishment B fires at D75. No collision at D7.
- **At-Risk E1 (3 days no open)** may have fired if she hasn't opened any email since PP-Ed D0. The At-Risk email is *concerned peer*, not sales — it does not collide with PP-Ed D7 functionally.

**Operational flag:** PP-Ed D7's observation vocabulary is the L1-specific lever. If the email drifts into "you should see X by D7," it violates the realistic-timeline rule (R5).

---

### 3.3 PP-EDUCATION D14 — `pped-11-d14` (Day 14 post-purchase) — REGRESSION-RISK MOMENT

**Phase 3 state at trigger:** Day 14. Sarah has seen some micro-signs; then they vanished; she panics. Trust cumulative 64. Hope/realism 60/40.

**CONVERSION GATE:**
- **Hard CTA: NO.** PP-Ed D14 is the *regression-reframe* email.
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: IMPLIED.** V20 anchor: *This isn't starting over. His nervous system is recalibrating.*
- **Sender rule:** Lena. Lever: L5 Normalization.

**DEAD-END:**
- **What if she ignores PP-Ed D14?** PP-Ed D21 fires at D21 regardless. PP-Ext-Ed E1 fires at D22+.
- **Winback / Sunset:** No winback from a missed PP-Ed D14.
- **Segment change:** None in Phase 1.

**CROSS-FLOW CONTINUITY:**
- **Day 14 post-purchase is the same calendar day as Day 14 of signup for early buyers.** If she bought at D3 of signup, Day 14 post-purchase = Day 17 of signup = Welcome E7 (the last-call email). The two collide. Per §2.5, max 1 flow email per subscriber per day. The system rule resolves the collision. **Welcome E7 is the dominant flow at signup D17** (the closing argument). PP-Ed D14 is delayed by 1 day. The two must feel like a continuous conversation: Welcome E7 = "the last 10%," PP-Ed D14 = "regression is normal."
- **The 49% stat reappears in PP-Ed D14** as the normalization pillar. The stat has appeared in Welcome E2, E3, E4, E6, E8. By the time she reaches PP-Ed D14, the 49% is *familiar and credible*, not surprising.

**Operational flag:** PP-Ed D14 is the first regression-risk moment. If the email's tone drifts into "don't worry" or "you're doing great," it violates the realistic-timeline rule. The V20 anchor is the exact framing.

---

### 3.4 PP-EDUCATION D21 — `pped-11-d21` (Day 21 post-purchase)

**Phase 3 state at trigger:** Day 21. The "do I keep going?" moment. Trust cumulative 64. Hope/realism 65/35.

**CONVERSION GATE:**
- **Hard CTA: NO.** PP-Ed D21 is the *win-logging* email.
- **Soft CTA: YES, gentle upsell if 1-pair buyer.** For 3+3 buyers (Sarah's dominant path), the gentle accessory suggestion (wash bag, magic targets) is allowed.
- **Permission-not-to-buy: YES.** Celebrate the small wins. R6 low-bar wins explicitly.
- **Sender rule:** Lena. Lever: L4 Peer Trust.

**DEAD-END:**
- **What if she ignores PP-Ed D21?** PP-Ext-Ed E1 fires at D22+. The extended education series begins.
- **Winback / Sunset:** No winback from a missed PP-Ed D21.
- **Segment change:** None.

**CROSS-FLOW CONTINUITY:**
- **PP-Ed D21 = Welcome E8 (signup D21) for buyers who bought at signup D0.** If she bought immediately, Day 21 PP = Day 21 signup. Welcome E8 is the series finale. PP-Ed D21 is the win-logging email. The system rule resolves the collision. **PP-Ed D21 takes priority** (the customer is now post-purchase; Welcome E8 has already been the closer for the pre-purchase phase). The two must feel continuous: Welcome E8 = "the door stays open," PP-Ed D21 = "celebrate the small wins."
- **PP-Ext-Ed E1 fires at D22+, which is Day 1 after PP-Ed D21.** The extended education begins the day after PP-Ed D21 ends. No collision; sequential flow.

**Operational flag:** PP-Ed D21 is the L1-specific win-logging moment. If the email drifts into "look how far you've come" cheerleading, it violates the L1 tone (peer, not cheerleader).

---

### 3.5 PP-DIRECT UPSELL E1 & E2 — `upsell-09-e1` (D1) and `upsell-09-e2` (D3) — 1-PAIR BUYERS ONLY

**Phase 3 state at trigger:** 1-pair buyers only. Sarah's dominant cart is 3+3, so this flow typically does NOT fire for her. If she bought 1-pair ($34.99), this fires.

**CONVERSION GATE:**
- **Hard CTA: YES — 1-pair → 3+3 bundle upsell.** Button text: *Most parents who buy 1 pair come back for 3+3 within a week. Here's why.* Full-width Brand-Green button.
- **Soft CTA: YES.** A "Read why rotation matters" link.
- **Permission-not-to-buy: YES.** Helper tone, not seller. NEVER "You didn't buy enough." Frame as rotation need.
- **Sender rule:** Lena. Lever: L4 Peer Trust + L2 Pull-Ups Harm. Math reframe OK (L1 allows; L3 never).

**DEAD-END:**
- **What if she ignores PP-Upsell E1/E2?** PP-Education continues. Replenishment A fires at D14 for 1-pair buyers.
- **Winback / Sunset:** No winback from a missed PP-Upsell.
- **Segment change:** None in Phase 1.

**CROSS-FLOW CONTINUITY:**
- **PP-Upsell E1 (D1) + PP-Ed D0 (D0):** PP-Ed D0 fired yesterday (D0). PP-Upsell E1 fires at D1. The two must feel continuous: PP-Ed D0 = "first wear," PP-Upsell E1 = "now that you have 1 pair, here's why 3+3 helps."
- **PP-Upsell E2 (D3) + Mary S. Story (D3):** Both fire at D3. PP-Upsell E2 carries the offer; Mary S. Story carries the founder narrative. They share D3 but the openings differ: PP-Upsell E2 = "Your 1 pair is on its way. Here's how the 3+3 bundle complements it" (helper), Mary S. Story = "I started BrightKidCo because my own child couldn't feel the signal" (founder). Same day, different asks.
- **10% off add-on (PP-Upsell E2)** is optional — test without discount first. If A/B testing shows discount increases conversion, add it; if it cannibalizes full-price, leave it out.

**Operational flag:** PP-Upsell does NOT fire for 3+3 buyers. The system must segment correctly: 1-pair buyers get the upsell; 3+3 buyers skip directly to PP-Education.

---

### 3.6 PP-MARY S. STORY — `mary-14-e1` (Day 3 post-purchase)

**Phase 3 state at trigger:** Day 3. Cross-level. Trust cumulative 63.

**CONVERSION GATE:**
- **Hard CTA: NO.** Mary S. Story is the *founder narrative* — brand-building, not selling.
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: IMPLIED.** The founder story is mechanism-anchored, not inspirational.
- **Sender rule:** Mary S. signs off, NOT Lena. This is the ONLY email signed by Mary S. in the entire customer journey. The founder story mirrors Lena's voice — both are moms of kids who couldn't feel the signal.

**DEAD-END:**
- **What if she ignores Mary S. Story?** PP-Ed D7 continues.
- **Winback / Sunset:** No winback from a missed Mary S. Story.
- **Segment change:** None.

**CROSS-FLOW CONTINUITY:**
- **Mary S. Story + PP-Upsell E2 (D3) for 1-pair buyers:** Both fire at D3. The system rule (max 1 per day) may require spacing. Mary S. Story is the *brand-building* moment; PP-Upsell E2 is the *offer* moment. The two are co-fire events.
- **Mary S. Story + PP-Upsell E1 (D3 for 3+3 buyers):** For 3+3 buyers (Sarah's dominant path), PP-Upsell does NOT fire. Mary S. Story stands alone at D3.
- **The sign-off shift (Mary S., not Lena)** is intentional and unique. The reader's psychology is: Lena is the peer (every other email), Mary S. is the founder (this one email). The single appearance is the brand's restraint.

**Operational flag:** Mary S. Story is the only founder-narrative email. It must not be repeated. If she ignores it, the next founder-adjacent moment is the 60-day guarantee window (PP-Mid E3).

---

### 3.7 PP-EXTENDED EDUCATION E1-E5 (Day 22+ to Day 75+) — L1-SPECIFIC

**Phase 3 state at trigger:** Day 22+ post-purchase. Trust cumulative 64. Hope/realism 65/35 → 55/45.

**CONVERSION GATE (E1 — Pre-K timeline real talk, Day 22+):**
- **Hard CTA: NO.** PP-Ext-Ed E1 is the *Pre-K timeline* email. Calendar math. 8-week plan.
- **Soft CTA: YES.** A "Read the 8-week plan" link.
- **Permission-not-to-buy: STRONG.** No offers. The dominant content is the realistic week-by-week plan.
- **Sender rule:** Lena. Sign-off: SHORT variant. Lever: L1-A Pre-K Readiness.

**CONVERSION GATE (E2 — When other parents ask, Day 25+):**
- **Hard CTA: NO.** E2 is the *social-context scripts* email. Lena voice.
- **Soft CTA: NO.** No offers. Mechanism-anchored responses to "Why is he still in pull-ups?"
- **Permission-not-to-buy: IMPLIED.** Social context scripts. Sign-off: SHORT.

**CONVERSION GATE (E3 — Accidents happen, Day 30+):**
- **Hard CTA: NO.** E3 is the *regression handling* email. V20 anchor.
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: IMPLIED.** Sign-off: MEDIUM.

**CONVERSION GATE (E4 — Building consistency, Day 45+):**
- **Hard CTA: NO.** E4 is the *consistency framing* email.
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: IMPLIED.** Lena voice. No urgency. Sign-off: MEDIUM.

**CONVERSION GATE (E5 — Graduation prep, Day 75+):**
- **Hard CTA: NO.** E5 is the *graduation protocol* email. The transition from "in training" to "trained."
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: STRONG.** No pressure to rush the graduation. Sign-off: MEDIUM.

**DEAD-END (all 5 PP-Ext-Ed emails):**
- **What if she ignores any of them?** The extended education continues on a relaxed cadence (every 2-3 weeks). The next email is the next one in the series.
- **Winback / Sunset:** No winback from a missed PP-Ext-Ed email. The 120-day Sunset rule applies across the full lifecycle.
- **Segment change:** None in Phase 1.

**CROSS-FLOW CONTINUITY:**
- **PP-Ext-Ed E1 (D22+) + PP-Ext-Upsell E1 (D28) collide at D22-D28 window.** PP-Ext-Ed E1 carries the Pre-K timeline (education). PP-Ext-Upsell E1 carries the 3+3 → 5+5 bundle upgrade. The two share D22-D28 but the openings differ: PP-Ext-Ed E1 = "Pre-K timeline real talk" (education), PP-Ext-Upsell E1 = "Complete kit urgency" (offer). The 5+5 push is L1-specific.
- **PP-Ext-Ed E2 (D25+) + PP-Ext-Upsell E1 (D28) + PP-Ext-Upsell E2 (D35, accessories) cluster around D25-D35.** This is the *accessory + education + upsell* cluster. The system rule (max 1 per day) spaces them. The cross-flow rule: PP-Ext-Ed is education (no offers); PP-Ext-Upsell is offer. The Lena sign-off is consistent.
- **PP-Ext-Ed E3 (D30+) + PP-Mid E1 (D30) + Replenishment A2 (D30, 1-pair only) + Review E1 (D30) cluster at D30.** This is the *Day 30 cluster* — three to four emails. Per the sequence document: send order is PP-Mid E1 (peer voice) → Replenishment A2 (practical, 1-pair only) → Review E1 (transactional). PP-Ext-Ed E3 fits somewhere in this cluster. The max-1-per-day rule spaces them across D30-D35.

**Operational flag:** PP-Ext-Ed emails must be L1-specific. The themes (Pre-K timeline, social context, regression, consistency, graduation) are L1-only. Other levels (L2, L3) have their own themes.

---

### 3.8 PP-EXTENDED UPSELL E1-E3 (Day 28-D42)

**Phase 3 state at trigger:** Day 28+. Trust cumulative 64. Hope/realism 55-65/35-45.

**CONVERSION GATE (E1 — Complete kit urgency, D28):**
- **Hard CTA: YES — 3+3 → 5+5 bundle upgrade.** Button text: *Most L1 families who start with 3+3 rotate into 5+5 within 3 months.* L1 allows medium push.
- **Soft CTA: YES.** A "Read why 5+5 helps" link.
- **Permission-not-to-buy: YES.** Helper tone, not seller. Frame as rotation need.
- **Sender rule:** Lena. Lever: L1-A Pre-K (urgency).

**CONVERSION GATE (E2 — Accessory cross-sell, D35):**
- **Hard CTA: YES — Wash Bag + Magic Targets.** Button text: *Add the Wash Bag to your routine* or *Magic Targets for Pre-K prep.*
- **Soft CTA: YES.** A "See all accessories" link.
- **Permission-not-to-buy: YES.** Practical add-ons, not bundles.
- **Sender rule:** Lena. Lever: L4 Lena.

**CONVERSION GATE (E3 — Final upsell, D42):**
- **Hard CTA: YES — final upsell touchpoint.** Button text: *Try the 5+5 bundle before Pre-K.* Lever: L3 Guarantee.
- **Soft CTA: YES.** A "Read the 60-day guarantee" link.
- **Permission-not-to-buy: STRONGEST.** Last touch — leave relationship intact. Door stays open.
- **Sender rule:** Lena.

**DEAD-END:**
- **What if she ignores all three PP-Ext-Upsell emails?** PP-Mid Check-In continues (D45, D60). Replenishment B fires at D75.
- **Winback / Sunset:** No winback from a missed PP-Ext-Upsell.
- **Segment change:** None in Phase 1.

**CROSS-FLOW CONTINUITY:**
- **PP-Ext-Upsell E1 (D28) + PP-Ext-Ed E1 (D22+) + PP-Ext-Ed E2 (D25+):** The D22-D28 cluster. PP-Ext-Ed is education, PP-Ext-Upsell is offer. They are spaced by the max-1-per-day rule.
- **PP-Ext-Upsell E2 (D35, accessories) + PP-Ext-Ed E3 (D30+, accidents happen):** PP-Ext-Ed E3 is regression handling (V20 anchor). PP-Ext-Upsell E2 is accessory cross-sell. Different openings, different asks.
- **PP-Ext-Upsell E3 (D42) + PP-Mid E2 (D45):** PP-Ext-Upsell E3 is the final upsell. PP-Mid E2 is the "how's it going?" check-in. The two share D42-D45. PP-Ext-Upsell E3 is offer; PP-Mid E2 is no-offer. The sign-off "With care," is consistent.

**Operational flag:** L3 never gets the 5+5 push. The system must segment correctly: L1 = medium push (allowed), L2 = light push, L3 = no push. PP-Ext-Upsell E1 for L3 must be omitted or replaced with a low-CTA variant.

---

### 3.9 PP-MID CHECK-IN E1-E3 (Day 30, D45, D60)

**Phase 3 state at trigger:** Day 30+ post-purchase. Trust cumulative 64-65. Hope/realism 55-65/35-45.

**CONVERSION GATE (E1 — Three-Family Testimonial, D30):**
- **Hard CTA: NO.** PP-Mid E1 is the *peer-voice celebration* email.
- **Soft CTA: NO.** No offers. Permission not to buy more pairs yet.
- **Permission-not-to-buy: STRONGEST.** The "no upsell" email. Three-Family Testimonial (Sarah/Lisa/Maria stories) + reply-to-Lena invitation.
- **Sender rule:** Lena. Lever: L4 Peer Trust + L1 Mechanism.

**CONVERSION GATE (E2 — How's it going?, D45):**
- **Hard CTA: NO.** PP-Mid E2 is the *high-trust invitation* email.
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: YES.** Reply-to-this-email framing. Lena voice.
- **Sender rule:** Lena. Lever: L4 Lena Peer Trust.

**CONVERSION GATE (E3 — 60-day mark, D60):**
- **Hard CTA: NO.** PP-Mid E3 is the *guarantee reminder* email.
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: STRONG.** Risk-reversal reminder. "60 days. By your judgment." Door stays open whether or not she refunds.
- **Sender rule:** Lena. Lever: L3 Guarantee.

**DEAD-END:**
- **What if she ignores PP-Mid E1/E2/E3?** Replenishment B fires at D75. Review E2 fires at D60 (alongside PP-Mid E3). The guarantee window closes at D60 — if she refunds, the PP flows end.
- **Winback / Sunset:** No winback from a missed PP-Mid. The 120-day Sunset rule applies.
- **Segment change:** If she refunds (invokes the 60-day guarantee), her tag changes from `customer` to `refunded`. The PP flows end; she may re-enter via Winback A.

**CROSS-FLOW CONTINUITY:**
- **PP-Mid E1 (D30) + Replenishment A2 (D30, 1-pair only) + Review E1 (D30):** The Day 30 cluster. Per the sequence document: send order is PP-Mid E1 (peer voice) → Replenishment A2 (practical, 1-pair only) → Review E1 (transactional). For 3+3 buyers (Sarah's dominant path), Replenishment A does not apply. PP-Mid E1 + Review E1 = 2 emails at D30. Max-1-per-day rule may space them.
- **PP-Mid E2 (D45) + Replenishment A3 (D60, 1-pair only) + PP-Ext-Ed E4 (D45+):** The D45 cluster. PP-Mid E2 is the check-in. PP-Ext-Ed E4 is the consistency framing. The two share D45 but the openings differ.
- **PP-Mid E3 (D60) + Review E2 (D60) + Replenishment A3 (D60, 1-pair only):** The D60 cluster. Send order per the sequence document: Review E2 (transactional ask) AFTER PP-Mid E3 (guarantee priority). The guarantee must be the priority message on Day 60.

**Operational flag:** PP-Mid E3 is the GUARANTEE WINDOW email. Per §17.7, this is technically a transactional-class email (risk-reversal, refund path). The promotional content is zero. If the refund path is buried, the email fails its primary function.

---

### 3.10 REVIEW REQUEST E1 & E2 (Day 30, D60)

**Phase 3 state at trigger:** Day 30+ post-purchase.

**CONVERSION GATE:**
- **Hard CTA: NO.** Review Request is a *peer request*, not a transaction.
- **Soft CTA: YES — direct review link.** 1-2 leading questions.
- **Permission-not-to-buy: IMPLIED.** Altruism framing: "Other parents need to hear what worked (and didn't) for your child."
- **Sender rule:** Lena. Lever: L4 Lena.

**DEAD-END:**
- **What if she ignores Review E1?** Review E2 fires at D60.
- **What if she ignores Review E2?** No third review ask. The review opportunity passes.
- **Winback / Sunset:** No winback from a missed review request.
- **Segment change:** None.

**CROSS-FLOW CONTINUITY:**
- **Review E1 (D30) + PP-Mid E1 (D30):** Both fire at D30. Send order: PP-Mid E1 first (peer voice), then Review E1. The two must feel continuous: PP-Mid E1 = "celebrate any progress," Review E1 = "share your experience."
- **Review E2 (D60) + PP-Mid E3 (D60):** Both fire at D60. Send order: PP-Mid E3 first (guarantee priority), then Review E2. The guarantee is the priority message on Day 60.

**Operational flag:** Review requests are cross-level (single copy). The L1 voice is in the L1-tagged block of the email, not the body. The body is R1-R6 calibrated.

---

### 3.11 REPLENISHMENT A (1-Pair Buyers) — NOT SARAH'S TYPICAL PATH

**Phase 3 state at trigger:** 1-pair buyers only. Sarah is 3+3, so Replenishment A does NOT fire. Documented for completeness.

**DEAD-END:**
- **What if she ignores Replenishment A emails?** Replenishment A is wash-cycle and consistency reminders. If she ignores all three, she is at risk of running out of pairs.
- **Winback / Sunset:** No winback from a missed Replenishment A.

**CROSS-FLOW CONTINUITY:**
- **Replenishment A1 (D14) + PP-Ed D14 (D14):** Same day. Replenishment A1 is the wash-cycle reminder. PP-Ed D14 is the regression-reframe. The two must feel continuous: PP-Ed D14 = "regression is normal," Replenishment A1 = "wash cycles matter."
- **Replenishment A2 (D30) + PP-Mid E1 (D30) + Review E1 (D30):** The Day 30 cluster. Send order: PP-Mid E1 → Replenishment A2 → Review E1.
- **Replenishment A3 (D60) + PP-Mid E3 (D60) + Review E2 (D60):** The Day 60 cluster. Send order: PP-Mid E3 → Review E2 → Replenishment A3 (or A3 first, then Review E2 — Review E2 is transactional, A3 is practical).

**Operational flag:** Replenishment A does not fire for 3+3 buyers. The system must segment correctly.

---

## 4. EXTENDED LIFECYCLE WINDOW (Day 60 to Day 180)

### 4.1 REPLENISHMENT B1 & B2 (Day 75, D90) — SARAH'S PATH (3+3 BUYERS)

**Phase 4 state at trigger:** Day 75+ post-purchase. Sarah's 3+3 bundle has been rotated for 2.5-3 months. Trust cumulative 64-66. Hope/realism 50-55/45-50.

**CONVERSION GATE:**
- **Hard CTA: YES — 3+3 → 5+5 bundle upgrade.** Button text: *Time to rotate. Most families who start with 3+3 rotate into 5+5 within 3 months.* L1 allows medium push.
- **Soft CTA: YES.** A "Read why 5+5 helps" link.
- **Permission-not-to-buy: YES.** Helper tone, not seller.
- **Sender rule:** Lena. Lever: L4 Lena.

**DEAD-END:**
- **What if she ignores Replenishment B1?** Replenishment B2 fires at D90.
- **What if she ignores Replenishment B2?** Replenishment C fires at D150 only if she upgraded to 5+5. If she did not upgrade, no Replenishment C. The next lever is Winback A at D90+ no engagement.
- **Winback / Sunset:** Winback A fires at D90+ no engagement. If she has been opening emails, she stays in the lifecycle track. If she has not, she enters Winback A.
- **Segment change:** None in Phase 1.

**CROSS-FLOW CONTINUITY:**
- **Replenishment B1 (D75) + PP-Ext-Ed E5 (D75+, graduation prep):** Same D75+ window. Replenishment B1 is the bundle upgrade. PP-Ext-Ed E5 is the graduation protocol. The two share D75 but the openings differ: Replenishment B1 = "time to rotate" (practical), PP-Ext-Ed E5 = "graduation prep" (milestone). The Lena sign-off "With care," is consistent.
- **Replenishment B2 (D90) + Winback A E1 (D90+ no engagement):** If she has been opening, she receives Replenishment B2. If she has not, she receives Winback A E1 instead. The system rules determine which fires.

**Operational flag:** Replenishment B is the 3+3 → 5+5 upgrade lever. The push is L1-allowed (medium). L3 never gets the 5+5 push.

---

### 4.2 REPLENISHMENT C1 & C2 (Day 150, D180) — 5+5 BUYERS ONLY

**Phase 4 state at trigger:** Day 150+ post-purchase. Sarah reaches this only if she upgraded to 5+5.

**CONVERSION GATE:**
- **Hard CTA: NO.** Replenishment C1 is the *loyalty acknowledgment* email.
- **Soft CTA: NO offers in C1.** Replenishment C2 carries the accessory refresh (Wash Bag, Magic Targets cross-sell).
- **Permission-not-to-buy: YES.** "Long haul support" framing.
- **Sender rule:** Lena. Lever: L4 Lena.

**DEAD-END:**
- **What if she ignores Replenishment C?** No more replenishment emails. The next lever is Winback A at D90+ no engagement (if she goes quiet after D150).
- **Winback / Sunset:** Winback A fires at D90+ no engagement. The 120-day Sunset rule applies.

**CROSS-FLOW CONTINUITY:**
- **Replenishment C1 (D150) + Replenishment C2 (D180):** Sequential. C1 is loyalty, C2 is accessory. They share the D150-D180 window but the openings differ.

**Operational flag:** Replenishment C does not fire for 3+3 buyers who did not upgrade.

---

## 5. AT-RISK SUPPORT (Conditional: 3-7-14-21 Days No Open, Post-Purchase)

### 5.1 PP-SUPPORT AT-RISK E1-E4 (3-7-14-21 days no open)

**Phase 3 state at trigger:** Sarah has gone quiet post-purchase. She bought but stopped opening emails.

**CONVERSION GATE (E1 — 3 days no open):**
- **Hard CTA: NO.** At-Risk E1 is the *concerned peer* check-in.
- **Soft CTA: NO.** No offers, no upsells.
- **Permission-not-to-buy: IMPLIED.** The dominant content is "I noticed you haven't opened recent emails. Just checking in."
- **Sender rule:** Lena. Lever: L4 Lena. NEVER "We miss you" or guilt-tripping.

**CONVERSION GATE (E2 — 7 days no open):**
- **Hard CTA: NO.** At-Risk E2 is the *support offering* email. Practical tips.
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: IMPLIED.** Wash protocols, observation cues, common pitfalls.
- **Sender rule:** Lena. Lever: L1 Mechanism.

**CONVERSION GATE (E3 — 14 days no open):**
- **Hard CTA: NO.** At-Risk E3 is the *normalization* email. "Your child's nervous system is learning even when it doesn't show."
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: IMPLIED.** Value reminder. Mechanism-deep.
- **Sender rule:** Lena. Lever: L5 Normalization.

**CONVERSION GATE (E4 — 21 days no open):**
- **Hard CTA: NO.** At-Risk E4 is the *guarantee reminder* email.
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: IMPLIED.** "Your 60-day guarantee is still active."
- **Sender rule:** Lena. Lever: L3 Guarantee.

**DEAD-END:**
- **What if she ignores all 4 At-Risk emails?** The PP-Support At-Risk series ends after E4. The next lever is Winback A at D90+ no engagement (if she remains quiet). If she refunds within the 60-day window, the PP flows end.
- **Winback / Sunset:** Winback A fires at D90+ no engagement. The 120-day Sunset rule applies.
- **Segment change:** None in Phase 1.

**CROSS-FLOW CONTINUITY:**
- **At-Risk E1 (3 days no open) may collide with PP-Ed D7 (D7) if she has not opened any email since D0.** The system rule (max 1 per day) resolves the collision. At-Risk E1 takes priority (the at-risk signal is the more urgent concern).
- **At-Risk E2 (7 days no open) may collide with PP-Ed D7 (D7) or PP-Ed D14 (D14) depending on her open pattern.** The system rule resolves the collision.
- **At-Risk E3 (14 days no open) may collide with PP-Ed D14 (D14) — same day.** The 14-day threshold is meaningful: this is when "did she give up?" becomes the question. At-Risk E3 takes priority.
- **At-Risk E4 (21 days no open) may collide with PP-Ed D21 (D21).** At-Risk E4 is the guarantee reminder; PP-Ed D21 is the win-logging email. The system rule resolves the collision. At-Risk E4 takes priority (the guarantee window is closing).

**Operational flag:** NEVER "We miss you" or guilt-tripping. The avatar profile is explicit. If the email drifts into "we miss you" or "don't forget about us," it violates the L1 tone and trips the unsubscribe lever.

---

## 6. WINBACK & SUNSET WINDOW (Day 90+)

### 6.1 WINBACK PATH A E1-E3 (Day 90+ no engagement, post-purchaser)

**Phase 5 state at trigger:** Sarah purchased AND went 90 days without opening emails. She is the L1-A lever's target: Pre-K season re-anchor. Trust cumulative 64. Hope/realism 50/50.

**CONVERSION GATE (E1 — Pre-K season reminder):**
- **Hard CTA: NO.** Winback A E1 is the *calendar re-anchor* email. If Pre-K season is approaching, the calendar math re-opens the decision.
- **Soft CTA: YES, gentle.** A "Read more" link.
- **Permission-not-to-buy: STRONG.** No hard ask. Lena voice.
- **Sender rule:** Lena. Lever: L1-A Pre-K Readiness. Sign-off: SHORT.

**CONVERSION GATE (E2 — Mechanism refresher):**
- **Hard CTA: NO.** Winback A E2 is the *mechanism re-engagement* email. 49% stat. Lena voice.
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: IMPLIED.** Mechanism-led.
- **Sender rule:** Lena. Lever: L1 Mechanism. Sign-off: LONG.

**CONVERSION GATE (E3 — Guarantee + permission):**
- **Hard CTA: NO.** Winback A E3 is the *guarantee reminder + permission* email.
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: STRONGEST.** "Your 60-day guarantee is still active. If today isn't the day, that's okay." Door open. Lena voice.
- **Sender rule:** Lena. Lever: L3 Guarantee. Sign-off: LONG.

**DEAD-END:**
- **What if she ignores Winback A E1/E2/E3?** Winback B fires (alt path) or Sunset fires if she continues to be quiet.
- **Winback / Sunset:** Sunset fires if Winback A/B do not re-engage her. The 120-day Sunset rule applies.
- **Segment change:** If she re-engages, no segment change. If she does not, she is tagged `unengaged = True` and added to Master Suppression List per §17.11.

**CROSS-FLOW CONTINUITY:**
- **Winback A E1 (D90+) + Replenishment B2 (D90):** If she has been opening, Replenishment B2 fires. If not, Winback A E1 fires. The system rules determine which. They do not collide.
- **Winback A E2 + Winback A E3** are sequential. Same sender, same Lena, but different openings: E2 = mechanism refresher, E3 = guarantee + permission. The P.S. in E3 is the door.
- **The 60-day guarantee** referenced in Winback A E3 is *expired* by D90+ (the window closed at D60). The email is a *courtesy* reminder, not a transactional guarantee offer. The tone is "the guarantee was there for you; if you didn't use it, that's okay."

**Operational flag:** Winback A is post-purchaser. Winback B is non-purchaser or continuation. The system must route correctly.

---

### 6.2 WINBACK PATH B E1-E3 (Day 90+ no engagement, non-purchaser or continuation)

**Phase 5 state at trigger:** Sarah is a non-purchaser (welcome flow ended without a buy) or is continuing from Winback A. Trust cumulative 64. Hope/realism 50/50.

**CONVERSION GATE (E1 — Re-introduction):**
- **Hard CTA: NO.** Winback B E1 is the *re-introduction* email. Lena voice. Mechanism-light.
- **Soft CTA: YES, gentle.** A "Read the mechanism" link.
- **Permission-not-to-buy: STRONG.** No hard ask.
- **Sender rule:** Lena. Lever: L4 Lena. Sign-off: SHORT.

**CONVERSION GATE (E2 — Deeper mechanism):**
- **Hard CTA: NO.** Winback B E2 is the *testimonial* email.
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: IMPLIED.** Mechanism + testimonial.
- **Sender rule:** Lena. Lever: L1 Mechanism + L4. Sign-off: LONG.

**CONVERSION GATE (E3 — Guarantee + final farewell):**
- **Hard CTA: NO.** Winback B E3 is the *guarantee + final farewell* email.
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: STRONGEST.** "Whatever you choose — thanks for reading this far."
- **Sender rule:** Lena. Lever: L3 Guarantee. Sign-off: LONG.

**DEAD-END:**
- **What if she ignores Winback B E1/E2/E3?** Sunset fires.
- **Winback / Sunset:** Sunset fires after Winback A/B without re-engagement.
- **Segment change:** If she does not engage, she is tagged `unengaged = True` and added to Master Suppression List per §17.11. She may re-enter via popup or transaction event.

**CROSS-FLOW CONTINUITY:**
- **Winback B E1 (D90+ no engagement) + Welcome E8 (signup D21):** Welcome E8 fired at signup D21. By the time Winback B fires at D90+, the welcome series is long past. Winback B is the re-entry path. The Lena sign-off "With care," is consistent.
- **Winback B E3 (final farewell) + Sunset E1:** Winback B E3 is the last winback email. If she does not engage, Sunset E1 fires (re-permission check). The tone shifts from "we're still here" to "do you want to be on this list?"

**Operational flag:** Winback B is the never-bought path. The system must distinguish post-purchaser quiet (Winback A) from never-bought quiet (Winback B).

---

### 6.3 SUNSET E1 & E2 (Continued no engagement after Winback)

**Phase 5 state at trigger:** Sarah has not engaged after Winback A/B. This is the LAST engagement attempt before suppression.

**CONVERSION GATE (E1 — Re-permission check):**
- **Hard CTA: NO.** Sunset E1 is the *re-permission* email. "Do you still want to hear from us?"
- **Soft CTA: NO.** One-click preference update. No hard ask.
- **Permission-not-to-buy: IMPLIED.** The tone is respect: "If you'd rather not hear from us, that's okay. One click and we'll stop."
- **Sender rule:** Lena. Lever: L4 Lena.

**CONVERSION GATE (E2 — Final farewell):**
- **Hard CTA: NO.** Sunset E2 is the *final farewell* email.
- **Soft CTA: NO.** No offers.
- **Permission-not-to-buy: IMPLIED.** "If you do not respond, you are suppressed for 6-12 months. The door stays open for re-entry."
- **Sender rule:** Lena. Lever: L4 Lena.

**DEAD-END (TERMINAL):**
- **What if she ignores Sunset E2?** She is tagged `unengaged = True` and added to Master Suppression List per §17.11. **This is the only terminal state in the L1 flow.** She cannot re-enter any flow. She may re-enter via popup or transaction event.
- **Winback / Sunset:** Sunset is the terminal. No winback fires after Sunset.
- **Segment change:** Tag change to `unengaged = True`. Suppression from all marketing email for 6-12 months.

**CROSS-FLOW CONTINUITY:**
- **Sunset E1 + Winback B E3 (final farewell):** If Winback B E3 was the last re-engagement, Sunset E1 is the next (and last) email. The tone shifts from "we're still here" to "do you want to be on this list?"
- **Sunset E2 is the absolute end.** No further emails. The Master Suppression List applies.

**Operational flag:** Sunset emails carry a -1 risk each per the emotional-trust document. If Sunset emails feel like pressure, she unsubscribes with negative sentiment. Sunset is the *trust-preservation terminal* — if it lands well, she remains on the list as a future re-entry candidate. The unsubscribe is graceful, not bitter.

---

## 7. THE CRITICAL CROSS-FLOW DISTINCTION — WELCOME E3 vs CART E1 SAME WEEK

The brief specifically asks: if Welcome E3 (7 sections, testimonial-heavy) and Cart E1 (3 sections, mechanism) both fire the same week, how do we make them distinct?

**Scenario:** Sarah added the 3+3 bundle to cart at Hour 1 of signup. She abandoned immediately. By D1 of signup, she has received:
- **Welcome E1** (D0, narrative mechanism)
- **Cart E1** (Hour 1, cart-aware reminder)

By D3, she receives:
- **Welcome E2** (D1, mechanism deep-dive, absolution moment) — already delivered
- **Cart E2** (24h after cart, social proof) — already delivered
- **Welcome E3** (D3, first hard CTA, testimonial-heavy, 7-8 sections)
- **Cart E3** (72h after cart, guarantee + permission)

**The Welcome E3 + Cart E3 same-week collision is the most-delicate moment of the entire pre-purchase phase.** Both are closing arguments. Both carry the 60-day guarantee. Both carry Lena's voice. Both reference the 3+3 bundle.

**How they must be distinct:**

### 7.1 Opening
- **Welcome E3** opens with the **calendar hook**: *"Pre-K starts in a few months. He needs to be trained. You've tried sticker charts..."* The opening is the L1-mirror + Pre-K calendar.
- **Cart E3** opens with the **guarantee hook**: *"Whatever you choose — thanks for reading this far. If today isn't the day, that's okay."* The opening is permission-not-to-buy, door-open.

### 7.2 Mechanism density
- **Welcome E3** is **mechanism-heavy** with 7-8 sections. It includes the 49% SPARK stat, the 3+3 bundle re-introduction, the math reframe, the 60-day guarantee, the L1 testimonial. The mechanism is the *floor* the email is built on.
- **Cart E3** is **mechanism-light**. The mechanism has already been covered in Welcome E2. Cart E3 is the closing — guarantee + permission. It does not re-explain the mechanism.

### 7.3 The 60-day guarantee
- **Welcome E3** frames the 60-day guarantee as **risk-reversal at first ask**: *"60 days. By your judgment. If it doesn't work for him, you don't keep it."* The guarantee is the *shield against the first hard CTA*.
- **Cart E3** frames the 60-day guarantee as **door-open permission**: *"60 days. By your judgment. Whether you buy or not, the product will be here next month. So will I."* The guarantee is the *bridge between conversion and non-conversion*.

### 7.4 The Lena voice
- **Welcome E3** uses Lena's voice in the **mechanism and validation sections** — "I have two autistic sons. One's 6, still in the middle of it." Lena is the peer-credibility anchor for the first hard ask.
- **Cart E3** uses Lena's voice in the **sign-off** — "I saw these were on your mind. Whatever you choose — thanks for reading this far." Lena is the door-closer, the respect-for-the-decision anchor.

### 7.5 Sign-off progression
- **Welcome E3** uses **"With understanding,"** (E3-E5 progression). The shift from "Talk soon," (E1-E2) signals the tonal shift to "we understand what you're going through."
- **Cart E3** uses the **LONG sign-off variant**: *"Whatever you choose — thanks for reading this far. If this isn't the day, that's okay. The product will be here next month. So will I. I have two autistic sons. I know what it's like when 'later' turns into another year. But I also know what it is to push too early. Trust your read. Lena ——"*

### 7.6 Subject line and preheader
- **Welcome E3** subject: mirror or mechanism hook (e.g., "Pre-K starts in a few months"). Preheader: validation or mechanism.
- **Cart E3** subject: cart-aware (e.g., "Your 3+3 bundle is still here"). Preheader: guarantee or permission.

### 7.7 Send-time spacing
Per §2.5, max 1 flow email per subscriber per day. If Welcome E3 and Cart E3 would fire on the same day, one is held until the next day. **Cart E3 takes priority** because the cart is time-sensitive (72h cart window). Welcome E3 fires the day after.

### 7.8 The reader's psychology
- **Welcome E3** is read as: *"This brand is teaching me something. They're walking me through the decision. Lena is a real person. The 3+3 bundle is the right offer."*
- **Cart E3** is read as: *"I left these in my cart. They're reaching out one more time. Lena respects my decision either way."*

The two are *not* the same email. Welcome E3 is the *first hard ask in a relationship*. Cart E3 is the *last reach-out in a transaction*. The Lena voice, the mechanism, and the guarantee are shared; the *framing* is different.

---

## 8. CONSOLIDATED CROSS-FLOW DISTINCTION PRINCIPLES

Across the entire L1 sequence, the cross-flow continuity rules are:

### 8.1 Same sender, different openings
Every L1 email is signed by Lena. The opening is the primary differentiator. If two emails in the same week share the same opening, the second one is wasted.

### 8.2 Mechanism density matches the email's role
- Welcome E1-E2: mechanism-light to mechanism-deep (the mechanism lands across the first two emails).
- Welcome E3-E5: mechanism-deep (the 3+3 bundle + 3-layer education).
- Welcome E6-E8: mechanism-light (social proof, last call, gentle close).
- Cart E1-E3: mechanism-light (the mechanism has been covered; cart is about conversion).
- PP-Ed D0-D21: mechanism-deep → mechanism-light (the mechanism is being applied; observations are the new content).
- PP-Ext-Ed E1-E5: mechanism-medium (the mechanism is being maintained; new contexts).
- Winback A/B: mechanism-refresh (re-anchor the mechanism, then door-open).
- Sunset: mechanism-absent (re-permission, no mechanism re-explained).

### 8.3 The 49% stat is the L1 heartbeat
The 49% SPARK stat appears in 70%+ of L1 emails. The framing changes by phase:
- Welcome E2: introduction + citation.
- Welcome E3: reframe ("You are not behind").
- Welcome E4: identity ("You didn't fail").
- Welcome E6: normalization ("Other moms like you").
- Welcome E8: recap ("The numbers stack up").
- PP-Ed D14: regression-normalization.
- PP-Ext-Ed E3: regression-recalibration.
- Winback A E2: refresh.

### 8.4 Sign-off progression is the phase marker
- **"Talk soon,"** = E1-E2 (getting to know each other)
- **"With understanding,"** = E3-E5 (we understand what you're going through)
- **"With care,"** = E6+ (we're in it together)
- **LONG sign-off** = Cart E3, Winback B E3, last-call moments (peer, door-open)
- **SHORT sign-off** = Transactional + most emails (clean, no-fatigue)

The sign-off is a *subliminal phase marker*. The reader's psychology tracks the sign-off progression. If a post-purchase email uses "Talk soon," it sends a confusing signal. If a Welcome E1 uses "With care," it sends a confusing signal. The sign-off discipline is part of the L1 architecture.

### 8.5 The 60-day guarantee is the L1 trust anchor
The guarantee appears in:
- Welcome E3, E4, E5, E6, E7 (closing argument)
- Cart E3 (final cart recovery)
- Order Confirmation (post-purchase confidence)
- PP-Mid E3 (60-day mark)
- Replenishment A3 (guarantee threshold, 1-pair only)
- PP-At-Risk E4 (21 days no open, guarantee still active)
- Winback A E3 (guarantee + permission)
- Winback B E3 (guarantee + final farewell)

The guarantee is the single most-repeated L1-specific element. Its framing changes by phase, but the substance is the same: 60 days, by your judgment.

### 8.6 Lena's two sons are the L1 peer-credibility anchor
Lena's voice carries the L1-credibility in nearly every email. The two-sons mention is the *specific* L1 detail that signals "this is a real mom, not a brand." The two-sons line appears in:
- Welcome E2, E3, E4, E5, E6, E7, E8
- Order Confirmation
- PP-Ed D0, D7
- PP-Mid E1, E2
- PP-Ext-Ed E1, E2, E3, E4, E5
- Replenishment B1, B2
- Winback A E1, E2, E3
- Winback B E1, E2, E3

The two-sons line is the *L1 specificity marker*. Mary S. signs only the founder story (D3 PP). Everyone else is Lena.

---

## 9. THE DEAD-END MAP — WHAT HAPPENS IF SARAH IGNORES EACH EMAIL

The table below consolidates the dead-end behavior for every L1 email:

| Email | What if ignored? | Winback fires? | Sunset starts? | Segment change? |
|-------|------------------|----------------|----------------|------------------|
| Welcome E1 | E2 fires D1 | No (not from single miss) | No | None (§18.1) |
| Welcome E2 | E3 fires D3 | No | No | None |
| Welcome E3 | E4 fires D7 | No | No | None |
| Welcome E4 | E5 fires D10 | No | No | None |
| Welcome E5 | E6 fires D14 | No | No | None |
| Welcome E6 | E7 fires D17 | No | No | None |
| Welcome E7 | E8 fires D21 | No | No | None |
| Welcome E8 | Welcome ends | Winback B at D90+ | At 120d + 20 emails (§17.11) | None |
| Cart E1 | E2 fires 24h | No | No | None |
| Cart E2 | E3 fires 72h | No | No | None |
| Cart E3 | Cart expires | No (cart is the recovery lever) | No | None |
| Checkout E1 | E2 fires 24h | No | No | None |
| Checkout E2 | Checkout expires | No | No | None |
| Browse E1 | E2 fires D3 | No | No | None |
| Browse E2 | E3 fires D7 | No | No | None |
| Browse E3 | Browse ends | Winback B at D90+ | At 120d + 20 emails | None |
| Order Confirmation | Shipping continues | No | No | prospect → customer |
| Shipping | Out for Delivery continues | No | No | None |
| Out for Delivery | Arrived & Welcome continues | No | No | None |
| Arrived & Welcome | PP-Ed D0+ continues | No | No | None |
| PP-Ed D0 | PP-Ed D7 continues | No | No | None |
| PP-Ed D7 | PP-Ed D14 continues | No | No | None |
| PP-Ed D14 | PP-Ed D21 continues | No | No | None |
| PP-Ed D21 | PP-Ext-Ed E1+ continues | No | No | None |
| PP-Upsell E1 | PP-Upsell E2 D3 | No | No | None |
| PP-Upsell E2 | PP-Ed D7 continues | No | No | None |
| Mary S. Story | PP-Ed D7 continues | No | No | None |
| PP-Ext-Ed E1 | E2 continues | No | No | None |
| PP-Ext-Ed E2 | E3 continues | No | No | None |
| PP-Ext-Ed E3 | E4 continues | No | No | None |
| PP-Ext-Ed E4 | E5 continues | No | No | None |
| PP-Ext-Ed E5 | E5 is the last | No | No | None |
| PP-Ext-Upsell E1 | E2 D35 | No | No | None |
| PP-Ext-Upsell E2 | E3 D42 | No | No | None |
| PP-Ext-Upsell E3 | PP-Mid D45+ continues | No | No | None |
| PP-Mid E1 | E2 D45 | No | No | None |
| PP-Mid E2 | E3 D60 | No | No | None |
| PP-Mid E3 | Replenishment B D75 | No | No | If refund: customer → refunded |
| Review E1 | Review E2 D60 | No | No | None |
| Review E2 | No more review asks | No | No | None |
| Replenishment A1 (1-pair) | A2 D30 | No | No | None |
| Replenishment A2 (1-pair) | A3 D60 | No | No | None |
| Replenishment A3 (1-pair) | No more A | No | No | None |
| Replenishment B1 (3+3) | B2 D90 | Winback A at D90+ if no engagement | At 120d + 20 emails | None |
| Replenishment B2 (3+3) | No more B | Winback A at D90+ | At 120d + 20 emails | None |
| Replenishment C1 (5+5) | C2 D180 | No | At 120d + 20 emails | None |
| Replenishment C2 (5+5) | No more C | No | At 120d + 20 emails | None |
| At-Risk E1 (3d) | E2 7d | No (At-Risk is the recovery) | No | None |
| At-Risk E2 (7d) | E3 14d | No | No | None |
| At-Risk E3 (14d) | E4 21d | No | No | None |
| At-Risk E4 (21d) | PP flow continues | Winback A at D90+ | At 120d + 20 emails | None |
| Winback A E1 | E2 | No (Winback A is the recovery) | No | None |
| Winback A E2 | E3 | No | No | None |
| Winback A E3 | Winback B fires | No (transitions to Winback B) | If B fails, yes | None |
| Winback B E1 | E2 | No | No | None |
| Winback B E2 | E3 | No | No | None |
| Winback B E3 | Sunset E1 fires | No (Sunset is next) | Yes (after Sunset) | None |
| Sunset E1 | Sunset E2 fires | No (Sunset is the recovery) | Yes (if E2 fails) | unengaged = True after E2 |
| Sunset E2 | **TERMINAL** | **None — terminal state** | **Yes — suppression** | **unengaged = True, Master Suppression List** |

---

## 10. CROSS-FLOW COLLISION PATTERNS — THE CRITICAL SAME-DAY / SAME-WEEK PAIRS

The most-delicate cross-flow moments for Sarah are:

### 10.1 D0-D1: Welcome E1/E2 + Cart E1/E2
**Pair:** Welcome E1 (D0, narrative) + Cart E1 (Hour 1, cart-aware) → Welcome E2 (D1, mechanism) + Cart E2 (24h, social proof).
**Risk:** Both emails are mechanism-aware. They must feel like different chapters.
**Rule:** Welcome = mechanism + absolution. Cart = cart-aware + social proof. Same Lena, different openings.

### 10.2 D3: Welcome E3 + Cart E3
**Pair:** Welcome E3 (D3, first hard CTA, 7 sections) + Cart E3 (72h after cart, guarantee close).
**Risk:** Both are closing arguments. Both carry the 60-day guarantee.
**Rule:** Welcome E3 = mechanism-heavy + 49% stat + math reframe. Cart E3 = mechanism-light + permission + door-open. Cart E3 takes priority if same-day collision (max-1-per-day rule).

### 10.3 D7: Welcome E4 + Browse E3
**Pair:** Welcome E4 (D7, absolution) + Browse E3 (7 days after browse, 60-day guarantee close).
**Risk:** Both can land on D7. Both may carry the 3+3 bundle introduction.
**Rule:** Welcome E4 = "It took us 3 years" (absolution hook). Browse E3 = "60 days for your child's nervous system to start connecting" (guarantee hook). Same Lena, different openings.

### 10.4 D14: Welcome E6 + PP-Ed D14 (for early buyers)
**Pair:** Welcome E6 (D14, L1 testimonials) + PP-Ed D14 (regression reframe).
**Risk:** Both fire on D14 for early buyers (D0 signup + D0 purchase = D14 PP = D14 signup).
**Rule:** Welcome E6 = social proof + Pre-K math. PP-Ed D14 = regression is normal. PP-Ed D14 takes priority if same-day collision (the customer is now post-purchase).

### 10.5 D17-D21: Welcome E7/E8 + PP-Ed D17/D21 (for early buyers)
**Pair:** Welcome E7 (D17, last call) + PP-Ed D17 (if any) → Welcome E8 (D21, gentle close) + PP-Ed D21 (win logging).
**Risk:** The closing arc of welcome overlaps with the early PP arc.
**Rule:** Welcome E7/E8 are pre-purchase closing. PP-Ed D17/D21 are post-purchase education. For buyers, PP-Ed takes priority. For non-buyers, Welcome E7/E8 are the closer.

### 10.6 D28-D35: PP-Ext-Upsell E1 + PP-Ext-Ed E1/E2/E3
**Pair:** PP-Ext-Upsell E1 (D28, 5+5 upgrade) + PP-Ext-Ed E1 (D22+, Pre-K timeline) + PP-Ext-Ed E2 (D25+, social context) + PP-Ext-Ed E3 (D30+, accidents happen) + PP-Ext-Upsell E2 (D35, accessories).
**Risk:** Multiple emails in the D22-D35 window.
**Rule:** PP-Ext-Ed = education (no offers). PP-Ext-Upsell = offer. The system rule (max 1 per day) spaces them. Sign-off "With care," is consistent.

### 10.7 D30: PP-Mid E1 + Replenishment A2 + Review E1 + PP-Ext-Ed E3
**Pair:** PP-Mid E1 (D30, peer voice) + Replenishment A2 (D30, 1-pair only) + Review E1 (D30, transactional) + PP-Ext-Ed E3 (D30+, regression).
**Risk:** Three to four emails at D30. The Day 30 cluster.
**Rule:** Send order: PP-Mid E1 (peer voice) → Replenishment A2 (practical, 1-pair only) → Review E1 (transactional). PP-Ext-Ed E3 fits somewhere in the D30+ window. Max-1-per-day rule spaces them.

### 10.8 D60: PP-Mid E3 + Review E2 + Replenishment A3
**Pair:** PP-Mid E3 (D60, guarantee priority) + Review E2 (D60, transactional ask) + Replenishment A3 (D60, 1-pair only).
**Risk:** Three emails at D60. The guarantee window closes.
**Rule:** Send order: PP-Mid E3 (guarantee priority) → Review E2 (transactional). Replenishment A3 fits somewhere in the D60 window. The guarantee must be the priority message on Day 60.

### 10.9 D75-D90: Replenishment B + PP-Ext-Ed E5 + Winback A
**Pair:** Replenishment B1 (D75, 5+5 upgrade) + PP-Ext-Ed E5 (D75+, graduation prep) + Replenishment B2 (D90) + Winback A E1 (D90+ no engagement).
**Risk:** Multiple emails in the D75-D90 window. The 90-day mark is the Winback A trigger.
**Rule:** If she has been opening, she receives Replenishment B + PP-Ext-Ed E5. If not, she receives Winback A E1. The system routes correctly.

### 10.10 D150-D180: Replenishment C1 + Replenishment C2
**Pair:** Replenishment C1 (D150, loyalty) + Replenishment C2 (D180, accessory refresh).
**Risk:** Sequential, no collision.

---

## 11. THE CONVERSION GATE — FULL CONSOLIDATION

| Email | Hard CTA | Soft CTA | Permission-not-to-buy | Notes |
|-------|----------|----------|------------------------|-------|
| Welcome E1 | NO | YES | STRONG | Survival email. WELCOME10 code only. |
| Welcome E2 | NO | YES | STRONG | Mechanism click. Tipping point. |
| Welcome E3 | YES | YES | STRONG | First hard CTA. 3+3 bundle. -1 trust delta. |
| Welcome E4 | YES | YES | STRONG | Absolution moment. Pre-K timing anchor. |
| Welcome E5 | YES | YES | STRONG | Pre-K math + 3-layer education. |
| Welcome E6 | YES | YES | STRONG | L1 testimonials. Pull-up reframe. |
| Welcome E7 | YES | YES | STRONG | Last call. WELCOME10 expiration. |
| Welcome E8 | YES (softest) | YES (dominant) | STRONGEST | Series finale. Door-open. |
| Cart E1 | YES | YES | YES | Cart-aware. No discount. |
| Cart E2 | YES | YES | YES | Social proof. 1-pair → 3+3 dynamic upsell. |
| Cart E3 | YES | YES | STRONGEST | Guarantee + permission. Optional 10%. |
| Checkout E1 | YES | YES | STRONG | Decision-respect. Cart contents + pricing. |
| Checkout E2 | YES | YES | STRONG | Final nudge. Free shipping. No discount. |
| Browse E1 | NO | YES (dominant) | STRONG | Educational hook. Mechanism-light. |
| Browse E2 | NO | YES (dominant) | STRONG | 3-layer product education. |
| Browse E3 | YES | YES | STRONG | First offer in browse series. |
| Order Confirmation | NO | YES (wash bag) | IMPLIED | Transactional. One cross-sell. |
| Shipping | NO | NO | IMPLIED | Transactional. |
| Out for Delivery | NO | NO | IMPLIED | Transactional. Expectation-setter. |
| Arrived & Welcome | NO | YES (gentle) | IMPLIED | First-wear protocol. 8-week timeline. |
| PP-Ed D0 | NO | NO | IMPLIED | "No results expected today." |
| PP-Ed D7 | NO | NO | IMPLIED | Observation vocabulary. R6 low-bar. |
| PP-Ed D14 | NO | NO | IMPLIED | Regression reframe. V20 anchor. |
| PP-Ed D21 | NO | YES (gentle) | YES | Win-logging. Soft upsell. |
| PP-Upsell E1 | YES | YES | YES | 1-pair → 3+3. Math reframe OK. |
| PP-Upsell E2 | YES | YES | YES | 10% off optional. |
| Mary S. Story | NO | NO | IMPLIED | Founder narrative. Mary signs, not Lena. |
| PP-Ext-Ed E1 | NO | YES | STRONG | Pre-K timeline. 8-week plan. |
| PP-Ext-Ed E2 | NO | NO | IMPLIED | Social context scripts. |
| PP-Ext-Ed E3 | NO | NO | IMPLIED | Regression handling. V20 anchor. |
| PP-Ext-Ed E4 | NO | NO | IMPLIED | Consistency framing. |
| PP-Ext-Ed E5 | NO | NO | STRONG | Graduation protocol. |
| PP-Ext-Upsell E1 | YES | YES | YES | 5+5 upgrade. L1 medium push. |
| PP-Ext-Upsell E2 | YES | YES | YES | Accessory cross-sell. |
| PP-Ext-Upsell E3 | YES | YES | STRONGEST | Final upsell. Door-open. |
| PP-Mid E1 | NO | NO | STRONGEST | Three-Family Testimonial. No upsell. |
| PP-Mid E2 | NO | NO | IMPLIED | "How's it going?" Reply invitation. |
| PP-Mid E3 | NO | NO | IMPLIED | 60-day mark. Guarantee reminder. |
| Review E1 | NO | YES (review link) | IMPLIED | Peer request. Altruism framing. |
| Review E2 | NO | YES (review link) | IMPLIED | Follow-up. Altruism framing. |
| Replenishment A1 | NO | NO | IMPLIED | Wash cycles. 1-pair only. |
| Replenishment A2 | NO | NO | IMPLIED | Consistency matters. 1-pair only. |
| Replenishment A3 | NO | NO | IMPLIED | Guarantee threshold. 1-pair only. |
| Replenishment B1 | YES | YES | YES | 5+5 upgrade. Helper tone. |
| Replenishment B2 | YES | YES | YES | 5+5 upgrade. Helper tone. |
| Replenishment C1 | NO | NO | IMPLIED | Loyalty acknowledgment. |
| Replenishment C2 | YES | YES | YES | Accessory refresh. |
| At-Risk E1 | NO | NO | IMPLIED | Concerned peer. NEVER "we miss you." |
| At-Risk E2 | NO | NO | IMPLIED | Support offering. Practical tips. |
| At-Risk E3 | NO | NO | IMPLIED | Normalization. |
| At-Risk E4 | NO | NO | IMPLIED | Guarantee reminder. |
| Winback A E1 | NO | YES (gentle) | STRONG | Pre-K season reminder. |
| Winback A E2 | NO | NO | IMPLIED | Mechanism refresher. |
| Winback A E3 | NO | NO | STRONGEST | Guarantee + permission. Door-open. |
| Winback B E1 | NO | YES (gentle) | STRONG | Re-introduction. |
| Winback B E2 | NO | NO | IMPLIED | Deeper mechanism. Testimonial. |
| Winback B E3 | NO | NO | STRONGEST | Guarantee + final farewell. |
| Sunset E1 | NO | NO | IMPLIED | Re-permission check. One-click. |
| Sunset E2 | NO | NO | IMPLIED | Final farewell. Terminal. |

---

## 12. THE RULES THAT GOVERN EVERY EMAIL

The conversion gate, dead-end, and cross-flow continuity for every L1 email are governed by five system rules from the GIULIANO-DEMANDS:

1. **§2.5 — Max 1 flow email per subscriber per day.** If two emails would fire on the same day, one is held. The tie-breaker hierarchy: Cart > PP-Level Detection > Winback > Sunset > All Other.
2. **§17.2 — Warming content rules (Weeks 1-2).** No promo codes, no hard-sell, no countdowns, no affiliate links, no >1 CTA. Education required. Plain-text preferred. Reply prompts required. 60:40 text:image. Lena voice.
3. **§17.6 — Code Red Protocol.** If spam rate >0.03% or GPT reputation = "Bad": enable double opt-in, gate Welcome E2-E8 behind E1 open, pause all sends except VIP Clickers, 48-72 hour complete sending pause.
4. **§17.11 — Sunset Protocol.** 0 opens AND 0 clicks AND 0 orders in 120 days AND ≥20 emails received → tag `unengaged = True` → Master Suppression List.
5. **§18.1 — Phase 1 Rule 1.** Tag-based routing only. No behavioral scoring. No engagement-based inference. No emotional dimension detection.

The conversion gate, dead-end, and cross-flow continuity in this document are *operational* — they are the rules the lifecycle architect encodes in the email platform. The *emotional* and *copy* elements are in the other L1 documents. The two layers (operational + copy) must work together: if the operational layer routes a Cart E3 to a subscriber whose L1 tag has not been set, the copy layer fails. If the copy layer ships a hard CTA in an L1 welcome email at Week 1 of warming, the operational layer fails.

---

## 13. THE SINGLE OPERATIONAL RULE

If the lifecycle architect remembers only one thing from this document, it should be this:

> **Every L1 email is a phase-specific moment in a single conversation. The conversation has a beginning (Welcome E1), a middle (mechanism click, absolution, decision, education, social proof), and an end (last call, gentle close, winback, sunset). Within that conversation, the conversion gate opens and closes by phase; the dead-end behavior is operational; the cross-flow continuity requires that no two emails in the same week feel like the same email.**

The Lena voice is the constant. The mechanism is the heartbeat. The 49% SPARK stat is the normalization. The 60-day guarantee is the trust anchor. The Pre-K calendar is the urgency lever. The two-sons mention is the L1 specificity marker. The sign-off progression is the subliminal phase marker. The max-1-per-day rule is the system constraint. The 120-day Sunset rule is the terminal.

If an email violates any of these — Lena voice absent, mechanism missing, 49% absent, guarantee absent, calendar manufactured, two-sons absent, sign-off mismatched, max-1-per-day violated, Sunset premature — the email fails. The trust transaction collapses. The conversion gate stays closed. The cross-flow continuity breaks.

The L1 sequence is 51 emails across 6 months for the fully-engaged Sarah. The realistic count is 35-45 emails for a 3+3 buyer in Pre-K season. The maximum is ~60 emails if every conditional flow fires. The minimum is the welcome series (8 emails) if she ignores everything.

The architecture holds whether she converts on Welcome E3 (best case) or on Cart E3 (second best) or on Winback B E2 (third best) or never (the 120-day Sunset). The architecture holds because it is *trauma-informed reframe funnel* (per the emotional-trust document), not a typical marketing funnel. The funnel's success metric is not "did she convert?" but "did she convert *or* leave the door open with trust intact?" Both outcomes are wins at L1.

---

*End of Level 1 (Sarah) Flow Behavior Document — BrightKidCo Customer Journey Reference*
*Sources: `journey-l1-01-avatar.md`, `journey-l1-02-sequence.md`, `journey-l1-03-emotional-trust.md`, `demands/GIULIANO-DEMANDS.md` §2.5, §17, §18.*
*Generated: 2026-06-28*
