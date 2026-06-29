# Flow Behavior — Level 3 (Maria)
## Conversion Gates, Dead-Ends, and Cross-Flow Continuity

> **Audience:** Stage 2/3 subagents and the lifecycle architect building operational logic on top of L3 copy. The other four L3 documents cover *who Maria is* (avatar), *what she receives* (sequence), and *how she feels* (emotional arc & trust meter). This document covers **what each email is allowed to ask for, what happens if she walks away, and how this email must feel next to whatever else is sitting in her inbox that week.**
>
> **Inputs:** `journey-l3-01-avatar.md`, `journey-l3-02-sequence.md`, `journey-l3-03-emotional-trust.md`, `demands/GIULIANO-DEMANDS.md` §2.5, §17, §18, §25.

---

## 0. EXECUTIVE FRAME — THE THREE QUESTIONS PER EMAIL

For every email Maria is scheduled to receive, this document answers three operational questions — the same three asked of L1 (Sarah) and L2 (Lisa). The answer for L3 is **never the same.** Where L1's gate is a full-width green button and L2's gate is a muted button with BCBA compatibility framing, L3's gate is **a text link or muted button inside a permission-not-to-buy wrapper, with zero urgency, zero math reframe, and zero full-width green anything.** Where L1's dead-end is Sunset at 120 days of zero engagement, L3's dead-end is identical on the system side but **her trust half-life is shorter and her unsubscribe cost is higher.** Where L1's cross-flow continuity is "two emails in the same week must feel like different chapters of the same conversation," L3's continuity is **"two emails in the same week must feel like two separate witnesses who have not compared notes."**

For L3:

1. **CONVERSION GATE — what kind of ask is allowed?**
   The answer is *almost always: a text link, or a very small muted button.* Hard CTAs are excluded from the L3 vocabulary entirely. The 3+3 Bundle is never the headline; the 1 Pair ($34.99) is. Math reframe is forbidden. "Less than a coffee a day" is **the single most forbidden phrase** in the L3 system because it is Medicaid-disrespectful, financially invalidating, and converts a dignity decision into a logistics transaction. The 60-Day Guarantee is not a sales lever — it is the *reason she is willing to take the emotional risk of trying.* And every email — not just the conversion email — must contain explicit **permission-not-to-buy** language.

2. **DEAD-END — what happens if she ignores this?**
   The system-level dead-end is identical to L1/L2: 120 days of zero opens + zero clicks + zero orders + ≥20 emails received triggers Sunset (§17.11), which is permanent exit to the Master Suppression List. But the *emotional* dead-end is asymmetric: L3 cannot afford another hope-cycle crash. A missed Cart E1 does not simply mean "she didn't buy" — it means "she paused at the threshold and concluded this wasn't for her." The operational consequence is the same; the trust consequence is much heavier. **L3 winback is also much more conservative** — long delays between touches, dignity-first language, never a "we miss you" framing, never a discount-as-incentive.

3. **CROSS-FLOW CONTINUITY — what else did she just get, and how must this email feel *distinct* from it?**
   Same inbox-fatigue risk as L1, but the cost of feeling-redundant is 3-5× higher because L3 trust is the most fragile in the system. On Day 45 post-purchase she might receive PP-Mid D45 ("How's it going?") + PP-Extended Education Theme 2 ("A pause. A glance. A flinch. They all count.") — two emails in the same window that both reference her child's progress. They must feel like **two separate witnesses** — Lena's reply invitation vs. an extended-education micro-wins reflection — not two emails repeating the same progress language.

The reference frame for all three questions is **the same system-level rules that govern L1 and L2**, plus the L3-specific overrides from §25 of GIULIANO-DEMANDS:

- Max 1 flow email per subscriber per day (§2.5).
- Cart Abandonment pauses Welcome E3+ but not E1-E2 if already sent (§2.5).
- Winback pauses nurture but allows transactional (§2.5).
- Sunset is permanent exit, no re-entry (§2.5).
- 7-week domain warming (Weeks 1–2 ice-breaker, 3–4 build, 5–6 scale, 7+ full) with hard content rules for Weeks 1–2: no promo codes, no hard-sell, no countdowns, no affiliate links, no >1 CTA, education required, plain-text preferred, reply prompts required, 60:40 text:image, Lena voice (§17).
- **L3 EXCLUDED from Weeks 1-2 of warming.** Only Welcome E1 fires during the ice-breaker window for L3 subscribers. E2-E8 and all cross-level flows are queued until Week 3 begins (§17.1).
- "Lena from BrightKidCo" <support@send.brightkidco.com> is the only from-address for Weeks 1–6 (§17.10). For L3, Lena stays the from-address across the entire lifecycle — she is the #3 trust lever.
- 90-Day Engaged minimum for sends during warming; if open rate drops <45% pause and narrow segment (§17.3).
- Sunset protocol is operational: 0 opens AND 0 clicks AND 0 orders in 120 days AND ≥20 emails received → tag `unengaged = True` and add to Master Suppression List (§17.11).
- Phase 1 Rule 1 forbids behavioral scoring in Phase 1 — all routing is tag-based (§18.1).
- **§25 L3-specific overrides:** NEVER math reframe; NEVER urgency of any kind; do NOT prominently mention shipping cost; NEVER name specific shipping carrier; NEVER push 5+5 bundle; primary offer is 1 Pair ($34.99); upgrade path is 1 Pair → 3+3 organic only; permission-not-to-buy in EVERY mail; dignity in every sentence; mini-wins count framing; acknowledge resignation reality; Lena peer voice; 60-Day Guarantee framing.

Every per-email verdict below is anchored to these system rules plus the §25 overrides. Where L3 has a level-specific carve-out (e.g., the 1 Pair offer, the Maureen Bennie late-trainer anchor, the "add alongside specialty diapers" framing), it is named. Where the system rule overrides L3 (no hard-sell during Weeks 1–2 of warming, even for L3), that is also named. **Where L3 disagrees with L1 or L2, L3 wins.** The hardest rule in the system — "if L1, L2, and L3 are in conflict, L3 is right" — applies to every per-email verdict in this document.

---

## 1. PRE-PURCHASE WINDOW — WELCOME FLOW (Hour 0 to Day 21)

### 1.1 WELCOME E1 — `welcome-01-e1-l3` (Hour 0, immediate)

**Phase state at trigger:** Hour-zero signup. Trust baseline 40-50 (wary but willing). Hope/realism 20/80 — heavy realism. **The Welcome flow has not yet earned the right to ask her for money, and for L3 the question "is this for me?" is dominant in her first 30 seconds.** She clicked button 3 ("Non-verbal or high support needs") with low click-through conviction. She is exhausted by suspicion. She has tried 30-50+ documented methods. The next size of pull-up is adult diapers. She has been at this for 6-10+ years.

**CONVERSION GATE:**
- **Hard CTA: NO.** Per the L3 avatar profile, E1 is the *recognition* email — its job is to convert "is this for me?" into "okay, keep going." A full-width green button at Hour 0 would collide with her 20/80 hope/realism and the "guard against hope" stance she walked in with. There is **no** full-width green button in L3 anywhere in the system.
- **Soft CTA: YES, with permission-not-to-buy framing.** The WELCOME10 code appears in E1 only, and it is framed as part of "your welcome" — not as a discount, not as an incentive, not as math reframe. The code appears in a quiet text link, not a banner.
- **Text link only: YES, dominant.** The dominant E1 ask is "read E2 tomorrow" — *not* "buy today." A single text-level link at the close ("If you'd like to read how this works for kids whose nervous systems process signals differently, the next note is on its way.") is the maximum L3 allows in E1.
- **Permission-not-to-buy: REQUIRED.** E1 contains explicit permission language: "You don't have to do anything with this. If you never open another email from us, that's a real answer." This is mandatory for every L3 mail, and E1 sets the standard.
- **Sender rule:** "Lena from BrightKidCo" <support@send.brightkidco.com>. Lena's identity anchor: "Mom of two autistic sons. One trained at 6. The other almost 8." Per §25, Lena is the #3 trust lever for L3. **During Weeks 1-2 of warming, this email fires alone for L3.** No Welcome E2-E8, no Browse, no Cart, no Checkout, no PP anything until Week 3 begins. The §17.1 rule is the system taking precedence over level-specific copy.

**DEAD-END:**
- **What if she ignores E1?** Welcome E2 is queued until Week 3 of domain warming begins. The system does not wait for an open — cadence is fixed. No At-Risk email at the pre-purchase stage (At-Risk is post-purchase only).
- **Winback / Sunset:** No winback fires from a missed welcome email alone. Winback B fires at Day 60+ no engagement for never-bought subscribers. A signup with no opens across 120 days + 20+ emails is the Sunset trigger.
- **Segment change:** If she opens E1, no segment change. If she does not open E1, no segment change at the data layer; the system simply continues to Welcome E2 once Week 3 begins. Per §18.1 Rule 1, there is no behavioral scoring in Phase 1.
- **Warming delay operational reality:** If she signed up during Week 1 of warming, her Welcome E1 fires immediately but E2-E8 are paused until Week 3 begins. This means **a maximum 14-day gap** between E1 and E2 for an L3 subscriber who joined during the ice-breaker window. She may unsubscribe during this gap — and that is acceptable. **For L3, a clean unsubscribe is preferable to a forced engagement.**

**CROSS-FLOW CONTINUITY:**
- **What other email did she likely just get?** None — this is Hour 0. She is not in any other flow yet.
- **If she browsed a product page (PDP) within 24 hours of signup without adding to cart:** Browse Abandonment E1 (`browse-04-e1`) is queued for 24h after browse. **But during Weeks 1-2 of warming, Browse E1 is also suppressed for L3.** The browse trigger fires, but the email is held. So if Maria browses during the warming window, the Browse E1 is queued — not lost, just delayed. Implementation note: a soft "we're reading your notes" courtesy email may be needed if her browse sits for >72 hours during warming, to prevent her from concluding "the brand is broken or ignoring me." That courtesy email must be Lena-signed, no CTA, no offer, no math.
- **If she added to cart at Hour 1 and abandoned it:** Cart Abandonment E1 fires 1 hour after abandonment. **But during Weeks 1-2 of warming, Cart E1 is also suppressed for L3.** The cart trigger fires, the email is held. The cart may expire before E1 is ever sent. **This is acceptable for L3** — the alternative (sending during warming) would risk deliverability and her trust simultaneously.
- **Cross-flow continuity rule for L3:** **Two emails in the same week must feel like two separate witnesses who have not compared notes.** The Lena voice stays the same, but the openings, the first lines, the structural patterns must all be distinct. Welcome E1 is *recognition*; Cart E1 (when it eventually fires) is *cart-presence*; Browse E1 is *educational hook*. Three voices in one. The mechanism line stays consistent; the entry point must not.

**Operational flag:** During Weeks 1–2 of warming, E1's open rate must clear 45% or the system pauses per §17.3. For L3, the threshold is **higher** because she is more selective — if open rate falls below 50%, the L3-specific subject line ("I don't know your story. But I know this feeling.") may have landed wrong, or the warming context may be wrong. Lena voice consistency is the audit: if E1 is signed by anyone other than "Lena from BrightKidCo," the trust loss is 15 points.

---

### 1.2 WELCOME E2 — `welcome-02-e2-l3` (Day 2) — MECHANISM, GENTLY

**Phase state at trigger:** 48 hours after E1. She has slept on E1, possibly re-read it, possibly mentioned it to her partner or to the L3 parent Facebook group. Trust cumulative 50-55. Hope/realism 20/80. **The mechanism reveal in E2 lands gently for L3** — the velocity is dialed down from L1's "Holy shit that explains it" tipping point. For L3, this is a recognition moment, not a revelation moment.

**CONVERSION GATE:**
- **Hard CTA: NO.** E2 is the **mechanism-respectfully-introduced** email — peer-level interoception, not clinician-level. The dominant ask is "read about how the body-signal layer works" — a *learn-more* text-level CTA, not a *buy-now* CTA. **No green button. No full-width anything. A text link in soft gray-brown.**
- **Soft CTA: YES, peer-language.** A text link: "Read about how the body-signal layer works — alongside what you're already using." This is the *add-alongside* framing that reappears at E6 and at FAQ E3.
- **Permission-not-to-buy: STRONG.** E2 contains explicit "if this isn't for your family, that's a real answer" language. **Math reframe forbidden** — no "less than a coffee a day," no "less than two months of disposable pull-ups," no cost-per-wear math. **Mechanism only.** The 1 Pair ($34.99) is not mentioned in E2 — the offer enters at E3.
- **Sender rule:** Lena only. Weeks 1-2 warming rules still apply if E2 is firing in the post-warming window (Days 2-5 of signup); the §17.1 grace period for L3 means E2 may still be in the warming-paused window for some L3 subscribers. No hard-sell, no countdowns, no >1 CTA, Lena voice (§17.2).

**DEAD-END:**
- **What if she ignores E2?** Welcome E3 fires at D5 regardless. The L3 cadence is D0/D2/D5/D7/D10/D14/D17/D21 — fixed progression, no At-Risk in pre-purchase.
- **Winback / Sunset:** No winback from a single missed E2. Same 120-day Sunset rule applies (§17.11).
- **Segment change:** None. E2 is an L3-tagged email sent to an L3-tagged subscriber. Per §18.1 Rule 1, no behavioral inference moves her off the L3 track. The +3 trust delta (50-55 → 55-58 in the emotional-trust document) is the L3 mechanism click — recognition, not revelation.
- **Cart interaction:** If she abandoned a cart during Weeks 1-2 of warming (which would itself be unusual given the suppression), the cart may have expired before Welcome E2 fires. **For L3, the cart trigger is suppressed during Weeks 1-2 anyway**, so this collision does not happen.

**CROSS-FLOW CONTINUITY:**
- **If Welcome E2 + Cart E2 fire the same week:** Once Week 3+ of warming is active, the cart and welcome flows can fire in the same window. Welcome E2 is *gentle mechanism* — "That's not failure — that's neurology." Cart E2 (24h after cart abandonment) is *single testimonial* — "Some parents who tried one pair..." The two should *not* share the same hook. Welcome E2 opens with peer observation; Cart E2 opens with a cart-aware observation. **The single testimonial in Cart E2 is a Maria-style reflection (not three-family pattern — too noisy for L3, too celebratory).**
- **If Welcome E2 + Browse E1 fire the same week:** Welcome E2 is peer-level mechanism; Browse E1 (24h after browse) is mechanism-light and educational. Browse E1 must NOT repeat Welcome E2's mechanism-deep voice. Browse E1 stays lighter, opens with "you were looking at something that helps kids who can't feel when they need to go" — observation-first, mechanism-second.
- **If she has done nothing (no cart, no browse) by D2:** Welcome E2 stands alone. This is its most important configuration. E2 is **the mechanism-respectfully-introduced email** — when it stands alone, it can be the longest L3 mechanism email in the system. **No exclamation marks in any line, including the body. No caps for emphasis. No "—" drama dashes that read as marketing.**

**Operational flag:** The subject line "He's never reacted to a wet diaper. That's not failure." is the L3 E2 anchor. If she has read E1 and the subject "I don't know your story. But I know this feeling." landed cleanly, E2's subject continues the recognition thread. **If the E2 subject uses any exclamation mark — even one — the warm thread breaks and unsubscribe risk spikes to 40-60%.** Audit: every L3 subject line must contain zero exclamation marks and zero caps for emphasis.

---

### 1.3 WELCOME E3 — `welcome-03-e3-l3` (Day 5) — THE GUARANTEE AS SHIELD

**Phase state at trigger:** 5 days of thinking. She has re-read E1 and E2, possibly googled "BrightKidCo" and "sensory underwear for autism," possibly mentioned the brand to her BCBA. Trust cumulative 55-58. Hope/realism 20/80. **This is the single most likely place a sales-y agency would add pressure. It is also the single most likely place L3 would unsubscribe.** The discipline is: the guarantee is enough. We do not need to add anything.

**CONVERSION GATE:**
- **Hard CTA: NO.** Per §25, L3 primary offer is the **1 Pair ($34.99).** The 3+3 Bundle ($79.99) is never the headline for L3 in Welcome. E3 introduces the 1 Pair as a single muted button or — preferred for L3 — a text link. Button copy, if used: *"Try one pair. By your judgment."* Text link, if used: *"If you'd like to try one pair."*
- **The 60-Day Guarantee is the explicit hook.** E3's entire conversion architecture rests on the guarantee. "60 days is enough time to know whether his nervous system is starting to connect." This is the line that absorbs the trust delta of asking for money for the first time. **No math reframe.** No "less than a coffee a day" — that is **the single most forbidden math reframe for L3** because ~40% use Medicaid Waiver and that phrase is Medicaid-disrespectful.
- **Permission-not-to-buy: STRONG + dignity.** E3 contains explicit "If today isn't the day, that's a real answer." E3 also contains the dignity anchor: "We know $34.99 is a stretch. We know that. Try one pair. Decide yourself." The "we know" framing is the L3 acknowledgment of her financial reality.
- **Carrier name: FORBIDDEN.** No "Ships via UPS" or "Ships via FedEx." No carrier name in body, subject, or preheader. **Prominent shipping cost: FORBIDDEN.** No "FREE SHIPPING" banner. The shipping cost, if any, must be so understated that it does not register as a separate element.
- **Sender rule:** Lena. Sign-off shifts to "With understanding," (E3-E5 progression). No countdown timers, no affiliate links, no "Shop Today" hard-sell (§17.2).

**DEAD-END:**
- **What if she ignores E3?** Welcome E4 fires at D7 regardless. No At-Risk in pre-purchase.
- **Winback / Sunset:** No winback from a single missed E3. **The 120-day Sunset rule still applies across the full lifecycle.**
- **Segment change:** None at the data layer. The +3 trust delta (55-58 → 58-62) is the *guarantee absorbing the money-ask cost.* If the trust delta lands flat or negative, the language is overclaiming and must be revised — but **never toward urgency. Always toward more permission language and more 60-Day Guarantee repetition.**
- **Cart interaction:** If she abandoned a cart and Cart E1/E2/E3 have all fired without recovery, E3 is the *first explicit 1 Pair offer* in the Welcome series. Cart E3 already used the 60-Day Guarantee as the close. **E3 and Cart E3 may land in the same week.** They must feel like *different witness angles* on the same guarantee, not the same email twice.

**CROSS-FLOW CONTINUITY:**
- **E3 is the highest-risk Welcome email for L3** — the first time money is asked. If she is also receiving Cart E3 (cart abandoned at Hour 1 of signup, no recovery, D3 of cart), the two emails arrive in the same window. They share the 60-Day Guarantee as the dominant lever but differ in opening: Welcome E3 opens with the guarantee itself; Cart E3 opens with permission-not-to-buy + "if today isn't the day." Same risk-reversal; different emotional entries.
- **The 49% SPARK stat is NOT used in L3 E3.** That statistic is L1 normalization language. For L3, the normalization language is *different methods, different nervous systems, different timelines* — not statistics. E3 stays mechanism-and-guarantee only.
- **The 1 Pair framing matters.** "Try one pair" is *not* a teaser for the bundle. It is the entire offer. E3 does not mention the 3+3 Bundle. E3 does not compare 1 Pair to 3+3. E3 does not math-reframe the difference. **E3 presents the 1 Pair as the complete offer, period.**

**Operational flag:** E3's +3 trust delta is the *calibrated maximum* for a single L3 money-ask email. If unsubscribe rate at E3 exceeds 2%, the language is overclaiming — but **never move toward urgency to compensate.** Move toward more permission-not-to-buy language, more 60-Day Guarantee repetition, more dignity framing. **The forbidden response to a low E3 open rate is: "Add urgency."** That is the exact opposite of what L3 needs.

---

### 1.4 WELCOME E4 — `welcome-04-e4-l3` (Day 7) — LATE IS NOT NEVER

**Phase state at trigger:** A full week. She has re-read E1, E2, E3. She is at the deepest fear: "is my child too late?" Trust cumulative 58-62. Hope/realism **18/82 — slight dip** because E4 confronts her deepest reality. **This is the email that either wins her for the next phase or loses her.**

**CONVERSION GATE:**
- **Hard CTA: NO.** E4 is **grief, dignity, and the possibility of late training without hype.** No bundle, no upgrade, no "and here's how to get started." The Maureen Bennie anchor is the *permission*, not a CTA. If a CTA appears at all, it is a text link to the 60-Day Guarantee page or to a peer-reflection post — never to "buy now."
- **Soft CTA: PERMISSION-ONLY.** The only acceptable close is permission-first: "Whatever progress means for your family is enough." No button. No link. No "click here." The email ends with permission, not with an ask.
- **Maureen Bennie callback — the single highest-leverage permission-grant for L3.** "A mom whose son trained at 9.5." This is the late-trainer anchor. It works because it is true, specific, named, and personal. **It is permission, not promise.** E4 must not say "your child will also train at 9.5." It says "Late is not never." That is the line. Nothing more.
- **Permission-not-to-buy: STRONG + grief-sensitive.** E4 is the email where the L3 grief component is most directly addressed. "Your child is doing the best his nervous system allows." "Whatever progress means for your family is enough." Both lines are §25 mandatory for L3 — dignity in every sentence, acknowledge resignation reality.
- **Sender rule:** Lena. Sign-off: "With understanding," (E3-E5 progression). No exclamation marks. No caps for emphasis.

**DEAD-END:**
- **What if she ignores E4?** Welcome E5 fires at D10 regardless. The flow continues. **If she ignores E4 specifically, the loss is greater than ignoring E1, E2, or E3.** E4 is the grief-sensitive pivot. Missing E4 means missing the permission-grant. The next chance for the Maureen Bennie anchor is FAQ E2 (D4) and Winback A Theme 2 (D110). **She will encounter the late-trainer anchor again — but each encounter is a fresh permission request.**
- **Winback / Sunset:** No winback from a missed E4. The 120-day Sunset rule applies.
- **Segment change:** None in Phase 1. The +6 trust delta (58-62 → 62-68) is the **largest single L3 Welcome delta** — if it lands cleanly. If E4 lands with any cheerleading tone, any "don't give up," any "it's never too late!" alone (without the Maureen B. anchor), the trust delta flips negative.

**CROSS-FLOW CONTINUITY:**
- **E4 is the identity-level email of the L3 Welcome flow.** If she is also in Cart E3 (cart abandoned at Hour 1, Day 7 of cart), the two emails do not collide because Cart E3 has already fired (72h after cart abandonment, by Day 3 of cart). E4 stands alone.
- **Browse E3 (D7 of browse, 60-Day Guarantee close) collision:** If she browsed a PDP at signup and never added to cart, Browse E3 fires at Day 7 of browse. By signup Day 7, Browse E3 is firing in the same window as Welcome E4. **They share the 60-Day Guarantee as the lever but differ in opening.** Welcome E4 opens with "Late is not never" (grief-sensitive). Browse E3 opens with "60 days for your child's nervous system" (guarantee close). Two witnesses on the same guarantee; two different emotional entries.
- **The Maureen Bennie anchor is intentional repetition.** It appears in Welcome E4, FAQ E2 (D4), and Winback A Theme 2 (D110). Each appearance is a fresh permission grant. If she has read E4 and is now receiving Winback A Theme 2 at D110, the anchor has been seeded three times — that is intentional repetition earning credibility, not redundancy.

**Operational flag:** E4's +6 trust delta is the **calibrated maximum** for a single L3 email across the entire pre-purchase phase. **A +7 or higher would indicate overclaim.** Audit the email against the §8.5 L3 forbidden list: any of the 30 phrases destroys the delta. The subject line "Late is not never" must remain exactly that — not "It's never too late!" not "Don't give up!" not "He can still do this!"

---

### 1.5 WELCOME E5 — `welcome-05-e5-l3` (Day 10) — MINI-WINS AS THE NEW SUCCESS METRIC

**Phase state at trigger:** 3 days to sit with E4's permission-grant. She is deciding whether the brand is "for her." Trust cumulative 62-68. Hope/realism **22/78 — tiny rise** because E5 reframes success. **This is the email where Maria starts to feel seen.**

**CONVERSION GATE:**
- **Hard CTA: NO.** E5 is *pure witness*. "A pause. A touch. Looking down. Those ARE progress." The Lena peer voice lands here: "One trained at 6. The other almost 8." Redefine success: not trained. Signal. A flinch. A momentary glance at the bathroom door.
- **No ask, no CTA.** Pure witness is the entire architecture. If a CTA appears, it is a text link to a peer-reflection post or to the FAQ — never to "buy now," never to the 1 Pair, never to a pricing page.
- **Permission-not-to-buy: STRONG + mini-wins.** "Even just knowing this exists is enough for today." E5 is the *highest-trust Welcome email* for L3 — the email where Lena's peer voice lands deepest. The mini-wins framing is §25 mandatory L3 Element 2.
- **Sender rule:** Lena. Sign-off: "With understanding," (E3-E5 progression). The transition from E1-E2 ("Talk soon,") to E3-E5 ("With understanding,") to E6+ ("With care,") is the **L3 sign-off progression** — each shift is a tonal cue to the reader that the email is taking her seriously without pushing.

**DEAD-END:**
- **What if she ignores E5?** Welcome E6 fires at D14 regardless. The flow continues. **If she ignores E5, she misses the mini-wins reframe.** She may still be measuring success in "trained" vs "not trained" — the most damaging frame for L3. The mini-wins reframe has a second chance at PP-Extended Education Theme 2 (D45).
- **Winback / Sunset:** No winback from a missed E5. The 120-day Sunset rule applies.
- **Segment change:** None in Phase 1. The +5 trust delta (62-68 → 68-73) is the *peak of Welcome Flow trust for L3.* **If E5 lands cleanly, she is in the "qualified openness" tier. She may not buy today, but she is willing to consider.**

**CROSS-FLOW CONTINUITY:**
- **E5 is the trust-peak of Welcome Flow.** If she is also receiving Browse E2 (D3 of browse, mechanism education), the mini-wins reframe is consistent across both emails. Browse E2 is mechanism-light; Welcome E5 is witness-deep. They share the language of interoception but differ in function: Browse E2 educates, Welcome E5 witnesses.
- **Mary S. Story collision:** If she has purchased (Welcome E1 → E5 in 10 days, then purchase at E5 trigger, then Mary S. Story at D3 post-purchase), the mini-wins language appears in Welcome E5 first and Mary S. Story second. The mini-wins anchor is intentional repetition — earning credibility, not redundancy.
- **The Lena peer voice is the consistency anchor.** Lena's "One trained at 6. The other almost 8" appears in Welcome E5 and reappears in PP-Education D7, PP-Support At-Risk E3, PP-Extended Education Theme 1, and Winback A Theme 1. The same Lena voice, the same Lena identity, the same Lena peer-trust architecture. **If the Lena voice breaks — if E5 is signed "The BrightKidCo Team" instead of "Lena" — the trust delta drops 15 points and the entire Welcome arc is at risk.**

**Operational flag:** E5 is where Maria is most likely to **reply** to Lena. Replies from L3 should be acknowledged within 48 hours by a real human (Lena or a peer-trained support agent), not an autoresponder. **An autoresponder reply at this moment is a Category 1 dignity violation** — it tells her the brand treats her like a ticket, not a person.

---

### 1.6 WELCOME E6 — `welcome-06-e6-l3` (Day 14) — ADD ALONGSIDE

**Phase state at trigger:** 4 days to sit with E5. She is testing whether we respect her system. Trust cumulative 68-73. Hope/realism **20/80 — holds** because E6 respects her system. **This is the highest-trust email in the L3 Welcome Flow.**

**CONVERSION GATE:**
- **Hard CTA: NO.** E6 introduces the *add-alongside* framing — BrightKidCo as the supplement, never the replacement. **Specialty diapers stay primary. This is a sensory add-on.** That framing is the §25 L3 mandatory complement framing — never "replace your pull-ups!" never "skip the BCBA protocol."
- **The 1 Pair CTA is allowed here.** If E6 carries a CTA, it is the 1 Pair ($34.99) as a single muted button or text link. The 3+3 Bundle is still not introduced in Welcome. The 1 Pair CTA is *low-aggression*: "See how the 1 Pair works alongside specialty diapers" or "Try one pair alongside what you're already using."
- **BCBA/OT respect: STRONG.** E6 is the email where her professional team loyalty is honored. "Your BCBA has been doing the hard work for years. We're not asking you to replace her protocol. We're offering a sensory add-on she may find useful." This is the **complement, never competitor** framing — §15.5 of GIULIANO-DEMANDS.
- **Permission-not-to-buy: STRONG + Medicaid-respectful.** E6 contains "If $34.99 is a stretch right now, that's a real answer. We know Medicaid paperwork is its own full-time job." The Medicaid acknowledgment is L3-specific and §25 mandatory.
- **Sender rule:** Lena. Sign-off shifts to "With care," (E6+ progression). The shift from "With understanding," to "With care," signals the tonal move from "we're getting to know each other" to "we're in it together."

**DEAD-END:**
- **What if she ignores E6?** Welcome E7 fires at D17 regardless. **E6 is the highest-trust Welcome email — if she ignores it, the loss is significant but not catastrophic.** The complement-not-competitor framing has a second chance at FAQ E5 (BCBA compatibility) and PP-Extended Education Theme 4 (D80, partner communication).
- **Winback / Sunset:** No winback from a missed E6. The 120-day Sunset rule applies.
- **Segment change:** None in Phase 1. The +2 trust delta (68-73 → 70-75) is the *L3-A "Add Alongside" lever* — the highest-trust moment in Welcome Flow.

**CROSS-FLOW CONTINUITY:**
- **Day 14 is the critical decision day AND the PP-Level Detection fire day for GF subscribers.** For L3-tagged Maria, PP-Level Detection does not fire — she is already tagged. **Day 14 is the highest-traffic Welcome day.** Welcome E6 may collide with Browse E3 (D7 of browse) if she browsed at D7 of signup.
- **The add-alongside framing is L3-specific.** E6's CTA is the complement-not-competitor close — it must not match L1's full-width green button or L2's BCBA-quoting button. **For L3, E6's CTA is a text link or a very small muted button. Never a button that takes more than 20% of the email width.**
- **Sign-off shift:** "With care," replaces "With understanding," starting at E6. The shift is a tonal cue; it is also a **cross-flow consistency signal.** Every L3 email from E6 onward uses "With care," and that consistency is part of the peer-trust architecture.

**Operational flag:** E6's open rate is the L3 Welcome Flow's diagnostic. If E6 open rate is materially lower than E5's, the add-alongside framing has not landed — the BCBA-respect language may be reading as condescension, or the 1 Pair CTA may be reading as pressure. **Do not respond by adding urgency. Add more permission-not-to-buy language.**

---

### 1.7 WELCOME E7 — `welcome-07-e7-l3` (Day 17) — DIGNITY DEEP

**Phase state at trigger:** 3 days to sit with E6. She is in the "I might try this" window. Trust cumulative 70-75. Hope/realism **18/82 — slight dip** because E7 confronts the cost of her child's neurology. **This is the test of whether the brand has internalized autism-as-identity.**

**CONVERSION GATE:**
- **Hard CTA: NO.** E7 is the most identity-sensitive line in the entire L3 journey. "His autism isn't being treated. His nervous system is being supported." **No "fix." No "cure." No "treat." No "heal." Even in negation.** E7 is mechanism-positive, not disease-negative.
- **No CTA in E7.** The email ends with permission-first close: "His nervous system is being supported — and that's a third option. Whatever you decide, we're here." **No button. No link. No ask.**
- **Permission-not-to-buy: STRONG + identity-sensitive.** E7 is the email where "your child is doing the best his nervous system allows" lands deepest. The dignity framing is §25 Element 1.
- **Sender rule:** Lena. Sign-off: "With care," (E6+ progression). **If E7 is signed by anyone other than Lena, the trust delta is negative — the brand has lost its #3 trust lever.**

**DEAD-END:**
- **What if she ignores E7?** Welcome E8 fires at D21 regardless. **E7 is the most identity-sensitive Welcome email. Missing E7 means missing the autism-as-identity anchor.** The anchor has a second chance at PP-Extended Education Theme 1 (D30, dignity-first progress).
- **Winback / Sunset:** No winback from a missed E7. The 120-day Sunset rule applies.
- **Segment change:** None in Phase 1. The trust delta is **-5 to +2 (70-75 → 65-72)** — a possible small dip because of subject intensity. **If it lands cleanly, it deepens trust meaningfully. If it lands with any "fix"/"cure"/"treat" in any form, the dip becomes -15 and the entire Welcome arc is at risk.**

**CROSS-FLOW CONTINUITY:**
- **E7 stands alone in tone.** It is the most identity-sensitive email in the Welcome series. If she is also receiving Browse E3 (D7 of browse), the two emails must feel like *two separate witnesses on different aspects of dignity* — Browse E3 is mechanism-light; Welcome E7 is identity-deep.
- **The "autism isn't being treated" framing is L3-specific.** It must not appear in any L1 or L2 email. For L1, the framing is "your child isn't broken." For L2, the framing is "your BCBA has been doing the hard work." For L3, the framing is "his autism isn't being treated — his nervous system is being supported." **Each level's identity framing is distinct.**
- **No exclamation marks. No caps. No emoji.** E7 is the email where the L3 visual discipline is most strictly enforced. The 56px gaps between sections, the muted earth tones, the absence of brand-yellow — all of these are §15.7 L3 visual requirements.

**Operational flag:** E7's trust delta is **the most volatile single-email delta in the L3 Welcome flow.** If the subject line is rewritten in any way that adds an exclamation mark, "fix," "cure," "treat," "heal," or any urgency, the trust loss is unrecoverable. Audit: subject line must remain "His autism isn't being treated. His nervous system is being supported." (or the L3-calibrated variant). Body must contain zero disease-framing language.

---

### 1.8 WELCOME E8 — `welcome-08-e8-l3` (Day 21) — THE REAL FAREWELL

**Phase state at trigger:** End of Welcome Flow. She has read all 8 emails. She is at a decision point: buy, wait, or leave. Hope/realism **20/80 — returns to baseline.** **This is NOT a "last call push." This is a real goodbye.**

**CONVERSION GATE:**
- **Hard CTA: NO.** E8 acknowledges all three possible outcomes: "Some L3 moms buy at 14-21 days. Some wait 30+, or much longer. Some never come back. And that's a real answer." No re-pitch. No bundle upsell. No "limited time."
- **Soft CTA: PERMISSION-ONLY.** The 1 Pair CTA may appear as a text link, but it is not the focus. The focus is the door-stays-open close.
- **Permission-not-to-buy: STRONG + final.** E8 is the trust meter anchor for the entire pre-purchase arc. It is the email that determines whether Maria will recognize the brand later in life as "the brand that didn't push me."
- **Sender rule:** Lena. Sign-off: "With care," (E6+ progression). **The Lena farewell at E8 is a permanent brand impression. Lena's identity must remain consistent — "Mom of two autistic sons" anchor established in E1.**

**DEAD-END:**
- **What if she ignores E8?** Welcome series ends. The next lever is **Cart Abandonment** (if she added to cart in the past), **Checkout Abandonment** (if she entered checkout in the past), **PP-Education D0** if she has purchased in the meantime, **FAQ/Objection Library** at Phase 3 trigger, **Winback B at Day 60+ no engagement** for the never-bought path.
- **Winback / Sunset:** No winback from a missed E8. The 120-day Sunset rule applies. **Winback B fires at D60+ no engagement for never-bought L3.**
- **Segment change:** None in Phase 1. The trust delta is **0 to +10 (65-72 → 65-75)**, depending on whether she buys. **If she does not buy, the trust meter holds; she enters FAQ/Objection Library at Phase 3 trigger, then Winback B at D60+.**

**CROSS-FLOW CONTINUITY:**
- **E8 is the trust-meter anchor.** If she purchased during Welcome (E5-E8), she transitions to Order Confirmation → Shipping → Arrived → PP-Education D0. If she did not purchase, she transitions to FAQ/Objection Library (6 emails) + Winback B (3 emails).
- **The Lena farewell is permanent.** E8's closing line — "Whatever you decide, the door stays open" — is the L3 brand promise. Every subsequent email must feel consistent with this farewell. If she receives a PP-Education D0 email the next week that uses cheerleading tone, the farewell is contradicted and trust drops.
- **No "last chance" framing.** The welcome flow has no code expiration, no countdown, no "limited time." WELCOME10 expired at D17 if she used it; if she didn't, that's a missed opportunity, not a manufactured urgency.

**Operational flag:** E8 is the email where **L3 winback conversion is highest** in the entire system per S02 §4.18 cross-cutting notes. Reason: L3 moms who bought and disengaged often return at developmental window shifts (new BCBA observation, regression, school transition). The late-trainer story gives permission to re-engage without re-litigating the original decision. **E8 is the seed for that permission — its language must be preserved verbatim in Winback A Theme 3.**

---

## 2. PHASE 1 CROSS-LEVEL FLOWS — POST-WARMING (Week 3+)

All Phase 1 cross-level flows are **suppressed for L3 during Weeks 1-2 of domain warming.** Once Week 3 begins, L3 receives them per behavior-trigger conditions. **Each cross-level flow must be calibrated to L3** — the L3 block overrides the cross-level body for L3-tagged subscribers.

### 2.1 Cart Abandonment (3 emails, post-Warming) — `cart-02-e1-l3`, `-e2-l3`, `-e3-l3`

**CONVERSION GATE:**
- **E1 (1h):** Text-level observation only. "You left something on the counter." Subject is soft, no urgency. **Mention cost without math reframe** — if cost appears at all, it is "1 Pair is $34.99. 60 days. Your judgment." Mechanism language: "Here's how the body-signal layer works — alongside what you're already using." **No countdown. No "your cart is waiting!" with a clock. No green button.**
- **E2 (24h):** Single testimonial (NOT three-family pattern — too noisy for L3, too celebratory). Maria-style reflection, peer voice. Reflective tone. **No math reframe. No bundle comparison. No "save $X with the bundle."**
- **E3 (72h):** 60-Day Guarantee + permission-not-to-buy + "No rush. The door stays open." **No additional discount.** Lena voice.

**DEAD-END:**
- If she ignores Cart E3, the cart expires. She transitions to FAQ/Objection Library (D1) at Phase 3 trigger, then Winback B at D60+ no engagement. **Cart Abandonment is the highest-leverage L3 pre-purchase touchpoint after Welcome** — a missed cart is a missed 1 Pair conversion.

**CROSS-FLOW CONTINUITY:**
- **Cart E1 and Welcome E2 same-day collision (post-Warming, Week 3+):** Welcome E2 is mechanism-respectfully-introduced; Cart E1 is cart-presence soft observation. They must feel like *two witnesses on the same guarantee, different emotional entries.* Welcome E2 opens with peer observation ("He's never reacted to a wet diaper"); Cart E1 opens with cart-aware observation ("You left something on the counter").
- **Cart E2 and Welcome E3 same-week collision:** Welcome E3 is guarantee-as-shield; Cart E2 is single-testimonial. They share the 60-Day Guarantee but differ in opening.
- **Cart E3 and Welcome E4 same-week collision:** Welcome E4 is grief-sensitive late-trainer anchor; Cart E3 is door-stays-open permission close. They share the permission language but differ in emotional depth.

---

### 2.2 Checkout Abandonment (2 emails, post-Warming) — `checkout-03-e1-l3`, `-e2-l3`

**CONVERSION GATE:**
- **E1 (1h):** "Your cart is here when you are." "If today isn't right, that's a real answer." **No chase.** No free shipping reminder callout. No carrier name. No countdown timer. **Single muted CTA or text link only.**
- **E2 (24h):** "Try it for 60 days. By your judgment." Final nudge. No discount. Lena voice.

**DEAD-END:**
- If she ignores Checkout E2, checkout expires. She transitions to FAQ/Objection Library at Phase 3 trigger.

**CROSS-FLOW CONTINUITY:**
- **Checkout E1 and Cart E3 same-week collision:** Cart E3 has fired (72h after cart, by checkout start); Checkout E1 fires 1h after checkout start. They share the door-stays-open language but Cart E3 is post-cart, Checkout E1 is post-checkout.
- **Checkout E2 and Browse E3 same-week collision:** Both are 60-Day Guarantee closes. They share the lever but differ in opening: Checkout E2 is "try it for 60 days, by your judgment"; Browse E3 is "60 days for your child's nervous system."

---

### 2.3 Browse Abandonment (3 emails, post-Warming) — `browse-04-e1-l3`, `-e2-l3`, `-e3-l3`

**CONVERSION GATE:**
- **E1 (24h):** Educational hook. "You were looking at something that helps kids who can't feel when they need to go." Observation-first. **No "still thinking about it?" passive-aggressive subject. No "X parents are viewing this right now."**
- **E2 (3d):** Mechanism + one Maria-style reflection (no celebration shot). "Here's how the body-signal layer works."
- **E3 (7d):** 60-Day Guarantee close. "60 days for your child's nervous system." Door-stays-open permission.

**DEAD-END:**
- If she ignores Browse E3, browse expires. She remains in Welcome Flow (if not yet at E8) or transitions to FAQ/Objection Library + Winback B.

**CROSS-FLOW CONTINUITY:**
- **Browse E1 and Welcome E1 same-week collision (rare, post-Warming):** Welcome E1 is recognition; Browse E1 is educational hook. They share the Lena voice but differ in opening.
- **Browse E3 and Welcome E4 same-week collision (Day 7 of browse + Day 7 of signup):** Both are Day 7 emails. Welcome E4 is grief-sensitive; Browse E3 is guarantee close.

---

### 2.4 Order Confirmation — Transactional — `transactional-05-order-l3`

**CONVERSION GATE:**
- **No upsell. No cross-sell.** No accessory. No "You bought 1 Pair — most parents get the 3+3." **Per §25, accessory upsell is skipped for L3** because it risks math reframe.
- Lena sign-off: "You've got this. We've got your back. — Lena."
- **No prominent shipping cost. No carrier name.** "Your order ships in 3-5 business days" — that's it.
- 60-Day Guarantee reminder: "60 days. By your judgment."

**DEAD-END:**
- She is now in the post-purchase arc. PP-Education D0 fires at D0 (or at the next 7am if D0 already passed). She will also receive Mary S. Story at D3.

**CROSS-FLOW CONTINUITY:**
- **Order Confirmation is transactional and exempted from §17.1 warming suppression.** It fires whenever she purchases.
- **The Lena sign-off carries the Welcome E1-E8 voice into the transactional flow.** The "We've got your back" language is consistent with Welcome E5 ("We see you") and E8 ("the door stays open").

---

### 2.5 Shipping & Out for Delivery — Transactional — `transactional-06-ship-l3`, `-07-ofd-l3`

**CONVERSION GATE:**
- **No carrier name in subject, body, or preheader.** "They're on their way." — that's the subject for shipment.
- **Prep guidance:** wash first, no fabric softener. Quiet excitement, not celebration.
- Lena: "We'll be in touch when they arrive."

**DEAD-END:**
- She transitions to Arrived & Welcome (delivery confirmed) within 1-3 days.

**CROSS-FLOW CONTINUITY:**
- **Shipping E1 and PP-Education D0 collision (rare):** Shipping E1 is "they're on their way"; PP-Education D0 is "what the first wear looks like." They share Lena voice but Shipping E1 is product-journey, PP-Education D0 is first-wear-education.

---

### 2.6 Arrived & Welcome — `arrived-08-l3` (post-Warming)

**CONVERSION GATE:**
- **No upsell to bundle.** L3 = 1-pair primary. Upsell skipped or replaced with "When you're ready, you can add more pairs" (permission-only).
- **No accessory cross-sell** — math risk for L3.
- **Body-signal mechanism explained at peer level, not clinician level.**
- First-wear protocol: "First few wears are about introducing the sensation, not results." Manage expectations explicitly.
- Link to PP-Education resources for ongoing support.

**DEAD-END:**
- She transitions to PP-Education D0 (or D7 if D0 already passed).

**CROSS-FLOW CONTINUITY:**
- **Arrived & Welcome and Mary S. Story collision:** Mary S. Story fires at D3 post-purchase; Arrived & Welcome fires at delivery confirmation (typically D2-D4). They may land in the same week. Arrived is *product-journey*; Mary S. is *founder peer voice*. **The Mary S. Story's "Why I started this" must not conflict with Arrived's first-wear protocol. Two separate voices; consistent dignity.**

---

## 3. POST-PURCHASE FLOW BEHAVIOR — D0 TO D100+

### 3.1 Mary S. Story (D3) — `pp-10-mary-s-l3`

**CONVERSION GATE:**
- Subject: "Why I started this. — Mary S." **NOT "I started BrightKidCo because my own child couldn't feel the signal..."** — that opener reads as marketing and the §8.5 L3 forbidden list flags founder stories as potential celebrity-endorsement triggers.
- **No offer in this email.** Founder story is ONCE only (not in Lena's regular mails).
- Sign-off: "— Mary S." (not Lena, per cross-cutting rule).
- Tone: peer, not pitch. Mary is a mom who built this for her own child; that resonates with L3 only if it's dignified, not triumphant.

**DEAD-END:**
- If she ignores Mary S. Story, no At-Risk triggers (she is engaged, just missed one email). She continues to PP-Education D7.

**CROSS-FLOW CONTINUITY:**
- **Mary S. Story and PP-Education D7 collision (D3 + D7 = 4 days apart, usually separate sends):** Mary S. is founder peer voice; PP-Education D7 is mechanism-reminder + mini-wins reframe. **The Mary S. identity is established here as a one-time voice.** Lena remains the dominant peer voice. Mary S. is "the founder" — distinct from Lena.

---

### 3.2 PP-Education D0 / D7 / D14 / D21 — `pp-11-education-l3`

**CONVERSION GATE:**
- **D0 (first wear):** "What the first wear looks like." Manage expectations from minute one. **No "Most parents see results in the first week!" — false specificity. No "Don't give up!" — cardinal sin.**
- **D7 (week 1 reality):** "Is anything happening?" Mechanism reframe: "The brain doesn't know what to do with a new input yet — it's the 'reception' phase." Permission close: "If you're wondering whether this is working, the honest answer is: you won't know in week 1. And that's not a flaw. That's the design."
- **D14 (mini-wins recognition):** "The smallest signs. They count." Recognition anchors: pause, look down, hand-to-waistband, shorter dry periods. "If you haven't seen any of these, that's also normal." Permission close.
- **D21 (three-week reality):** "Did he look at the wet spot?" Three-Family Testimonial with L3 anchor story (week 3 was nothing, week 8 was a pause, week 12 was a step). Lena sign-off: "With understanding,"

**DEAD-END:**
- If she disengages (no opens for 3-7 days post-purchase), **PP-Support At-Risk fires.** Triggered flow, highest-stakes for L3.

**CROSS-FLOW CONTINUITY:**
- **PP-Education D7 and PP-Mid D30 collision (rare, by timing):** PP-Ed D7 is mechanism-reminder; PP-Mid D30 is three-family-pattern. They share Lena voice but differ in opening.
- **PP-Education D14 and PP-Extended Upsell E1 (D28) collision:** PP-Ed D14 is mini-wins; PP-Ext Upsell E1 is "when you're ready" upgrade. The mini-wins anchor is established at D14; the upgrade follows at D28 — 14 days of space.

---

### 3.3 PP-Extended Upsell (D28 / D35 / D42) — `pp-12-extended-upsell-l3`

**CONVERSION GATE:**
- **L3 NEVER gets pushed to 5+5.** L3 escalation path is **1 Pair → 3+3 organic only.** This is a hard rule per §25.
- **E1 (D28):** Subject "When you're ready." Very low CTA. Text link: "See how the 3+3 bundle works alongside." **Permission-not-to-buy explicit.** No math reframe. No bundle comparison table. No "most parents who buy 1 Pair upgrade within 30 days" — false specificity.
- **E2 (D35):** "Practical add-ons. If you want them." Lena voice. Wash Bag, Magic Targets — but framed as "if and when you'd find them useful." **No "Magic Targets" as hero product** — visual targets may be sensory-overloading for L3.
- **E3 (D42):** "The door stays open." **No upsell in E3.** Lena farewell. Leave relationship intact.

**DEAD-END:**
- If she ignores E1-E3, she remains a 1-pair buyer and enters Replenishment A (D14/D30/D60 — she has already passed D14 and D30, so A3 at D60 is next).

**CROSS-FLOW CONTINUITY:**
- **PP-Extended Upsell E1 (D28) and PP-Mid D30 collision:** PP-Ext Upsell is "when you're ready" upgrade; PP-Mid D30 is three-family-pattern check-in. **PP-Mid D30 is the higher-priority content** (D30 is a milestone, D28 is an upsell). The §2.5 priority chain says Cart Abandonment > all others, but for L3 post-purchase, **PP-Mid D30 is the trust anchor and PP-Ext Upsell E1 is the soft monetization.** Tie-breaker: PP-Mid D30 fires first; PP-Ext Upsell E1 fires the next day.

---

### 3.4 PP-Mid Check-In (D30 / D45 / D60 / D75) — `pp-13-mid-checkin-l3`

**CONVERSION GATE:**
- **D30:** "Three moms. One month in." Three-Family Pattern with Maria's story as the L3 anchor: "She was 6 months in. Her son still didn't initiate. But last week, he walked toward the bathroom door. She stopped counting that as nothing." Gentle replenishment preview (text link, not button). Permission-first close.
- **D45:** "How's it going?" **Reply-to-this-email invitation.** No offers. No upsells. **Pure high-trust invitation.** Lena voice: "Hit reply. I read everything." **This is the highest-trust moment in the entire PP-mid arc.**
- **D60:** "At the 60-day mark." Guarantee reminder. Risk-reversal. Three-Family Testimonial with late-trainer anchor. **No urgency. No bundle push. No "limited time."**
- **D75:** "Looking ahead." Gentle replenishment preview for 1-pair buyers (text link, not button). Lena voice: "Whatever you decide about the next phase, we're here."

**DEAD-END:**
- If she ignores PP-Mid D45, **the trust meter is at its most volatile.** She may unsubscribe, may have a hope-crash, may tell her BCBA. **An autoresponder reply at D45 is a Category 1 dignity violation.**

**CROSS-FLOW CONTINUITY:**
- **PP-Mid D30 and Replenishment A2 (D30) collision:** Both fire at D30. PP-Mid D30 is three-family-pattern check-in; Replenishment A2 is wash-cycle reminder. **PP-Mid D30 is the higher-priority content** — Replenishment A2 is a soft reminder, PP-Mid is the milestone check-in. Tie-breaker: PP-Mid D30 fires first; Replenishment A2 fires the next day.
- **PP-Mid D45 and PP-Extended Education Theme 2 (D45) collision:** Both fire at D45. PP-Mid D45 is reply-to-Lena invitation; PP-Ext Ed Theme 2 is "A pause. A glance. A flinch. They all count." **PP-Mid D45 is the highest-trust moment of the entire arc.** Tie-breaker: PP-Mid D45 fires first; PP-Ext Ed Theme 2 fires the next day.

---

### 3.5 PP-Extended Education (D30 / D45 / D60 / D80 / D100) — `pp-14-extended-ed-l3`

**CONVERSION GATE:**
- **5 L3-specific themes:** Dignity-first progress (D30), Smallest signs that matter (D45), Sensory overload solutions (D60), Partner communication (D80), When to try again (D100). All 5 are L3-specific. **No generic Pre-K content (that's L1). No BCBA content (that's L2).**
- **No CTA in any PP-Extended Education email.** These are pure value-delivery emails. The only acceptable close is permission-first.

**DEAD-END:**
- If she ignores PP-Ext Ed Theme 5 (D100, "When to try again"), she is approaching the Winback A trigger at D90+ no engagement (though she is engaged, so Winback A would not fire).

**CROSS-FLOW CONTINUITY:**
- **PP-Ext Ed Theme 4 (D80, Partner Communication) and the partner dynamic:** This email acknowledges the partitioned-decision-maker reality ("he handles money") without pathologizing the partner. **No "have you tried talking to your partner?" — implies she hasn't. No partner-bashing.**
- **PP-Ext Ed Theme 5 (D100, When to try again) and the re-entry path:** This is the email where the 60-day guarantee restart is mentioned. **"The 60-day guarantee restarts whenever you're ready."** This is the most important line in the entire PP-Ext Ed arc.

---

### 3.6 PP-Support At-Risk (D3 / D7 / D14 / D21 no-open) — `pp-15-at-risk-l3`

**CONVERSION GATE:**
- **E1 (3 days no open):** "Haven't heard from you, checking in." **No "we miss you!" — forbidden for L3 even in sunset.** P.S.: "When you're ready to try again, the science will be here. 60 days, your judgment. No rush."
- **E2 (7 days no open):** "Here's how to get the most out of your pairs." Support offering. Mechanism reminder. Lena voice.
- **E3 (14 days no open):** "His nervous system is learning even when it doesn't show." Normalization. Dignity-first framing. Lena voice: "I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8."
- **E4 (21 days no open):** "Your 60-day guarantee is still active." **"The 60-day guarantee restarts whenever you're ready."** This is the re-entry path — the most important line in the entire PP-Support At-Risk arc.

**DEAD-END:**
- If she ignores E4 (21 days no open), she is approaching the Sunset trigger (120 days no engagement, but the Sunset definition is stricter — 0 opens AND 0 clicks AND 0 orders AND ≥20 emails received). **She is not yet at Sunset, but she is approaching disengagement.**

**CROSS-FLOW CONTINUITY:**
- **PP-Support At-Risk is the triggered flow with the highest L3 trust stakes.** It overlaps with PP-Education D7/D14/D21, PP-Mid D30, and the entire Replenishment A series. **PP-Support At-Risk takes priority because she has purchased and is going quiet — the trust meter is at its most volatile.** Other flows pause while PP-Support is active.

---

### 3.7 Replenishment A (D14 / D30 / D60) — `pp-16-replenish-a-l3`

**CONVERSION GATE:**
- **A1 (D14):** "Wash cycles reminder." Practical reminder, not sales.
- **A2 (D30):** "Consistency matters." Mechanism reminder. Permission-first.
- **A3 (D60):** "Your 60-day window." Guarantee reminder. Risk-reversal.
- **No bundle push. No math reframe. No "reorder now!"**

**DEAD-END:**
- If she ignores A3 (D60), she is approaching the 60-day guarantee close. PP-Mid D60 fires in the same window.

**CROSS-FLOW CONTINUITY:**
- **Replenishment A2 (D30) and PP-Mid D30 collision:** Both fire at D30. Tie-breaker: PP-Mid D30 fires first (milestone check-in is the higher-priority content).
- **Replenishment A3 (D60) and PP-Mid D60 collision:** Both fire at D60. Tie-breaker: PP-Mid D60 fires first (60-day mark is the milestone; replenishment is the soft reminder).

---

### 3.8 Review Request (D30 / D60) — `pp-17-review-l3`

**CONVERSION GATE:**
- **D30:** "Has BrightKidCo made a difference?" Direct review link + 1-2 leading questions. Peer request, not transaction. **Leading questions are dignity-first: "Did you see a small sign? Did your child look at the wet spot?"** — NOT "Did your child get trained?"
- **D60:** "Your experience helps other parents decide." Follow-up. Altruism framing.

**DEAD-END:**
- If she ignores Review E1 and E2, she remains in the PP arc. She is approaching PP-Extended Education Theme 4 (D80) and Theme 5 (D100), then Winback A at D90+ no engagement.

**CROSS-FLOW CONTINUITY:**
- **Review D30 and PP-Mid D30 collision:** Tie-breaker: PP-Mid D30 fires first.
- **Review D60 and PP-Mid D60 collision:** Tie-breaker: PP-Mid D60 fires first.

---

### 3.9 Winback A (D90+ post-purchase) — `pp-18-winback-a-l3`

**CONVERSION GATE:**
- **Theme 1 (D90):** "Just checking in. No expectations." Lena voice. **No "we miss you!" — forbidden for L3.** No offer. No urgency. Just presence.
- **Theme 2 (D110):** "A mom whose son got there at 9.5." Maureen B. callback (intentional repetition). "Whatever progress means for your family is enough." Lena voice.
- **Theme 3 (D130):** "Whatever you decide, the door is open." FAQ path after winback. No offer. No upsell. Lena farewell.

**DEAD-END:**
- If she ignores Winback A Theme 3 (D130), she is approaching the Sunset trigger (120 days no engagement — but she is re-engaging now, so Sunset does not fire). **She may stay on the Master Suppression List indefinitely if she does not re-engage.**

**CROSS-FLOW CONTINUITY:**
- **Winback A and the entire PP arc:** Winback A **pauses all nurture flows** per §2.5. PP-Education, PP-Mid, PP-Ext Ed, Replenishment, Review, Referral — all pause while Winback is active. **This is critical for L3 because Winback is also her highest-conversion cell.** The late-trainer story gives permission to re-engage without re-litigating the original decision.

---

### 3.10 Winback B (D60+ no-purchase) — `pp-19-winback-b-l3`

**CONVERSION GATE:**
- Same themes as Winback A, for the never-bought segment. **Trust meter is at its most fragile here.** She has not bought. She has been in the FAQ arc. She may have unsubscribed.
- **No "Why didn't you buy?" — confrontational. No "Other parents in your situation..." — comparison. No discount — desperation signal.**

**DEAD-END:**
- If she ignores Winback B Theme 3 (D100), she transitions to Sunset at D120 no engagement. **The Winback B → Sunset hand-off is the system-level final exit.**

**CROSS-FLOW CONTINUITY:**
- **Winback B and FAQ/Objection Library collision:** FAQ fires at Phase 3 trigger (Welcome end + no purchase). Winback B fires at D60+ no engagement. FAQ may be active when Winback B starts. **FAQ pauses while Winback is active** per §2.5.

---

### 3.11 FAQ / Objection Library (6 emails, Phase 3 trigger) — `pp-20-faq-l3`

**CONVERSION GATE:**
- **E1 (D1):** "Tried everything. We hear you." Mechanism: "The Body-Signal Learning Layer doesn't rely on a signal your child hasn't developed yet. It creates one." Lena peer voice.
- **E2 (D4):** "There's no age where it's too late." Maureen B. callback. Permission.
- **E3 (B4):** "When the body itself makes it hard." GI/withholding reframe.
- **E4 (C3):** "If you're wondering whether it's worth it." **CRITICAL: NO math reframe.** L3 block: "Only you can decide if it's worth it. 60 days. By your judgment." Cross-level body may contain math reframe; L3 block strips it.
- **E5 (B2):** "Your BCBA. Your team. We're not replacing anyone." BCBA respect. **Highest-trust-builder in FAQ arc.**
- **E6 (D3):** "If you're afraid of hoping again." **HIGHEST-STAKES FAQ EMAIL.** Three-family testimonial pattern. Permission-first close. **"I can't promise you a specific outcome. I can promise you a real mechanism, and a real guarantee."**

**DEAD-END:**
- If she ignores FAQ E6 (the hope-crash fear email), she transitions to Winback B at D60+ no engagement. **FAQ E6 is the trust-peak of the FAQ arc. Missing it means missing the hope-crash permission-grant.**

**CROSS-FLOW CONTINUITY:**
- **FAQ and Winback B:** FAQ pauses while Winback B is active. The FAQ → Winback B hand-off is the never-bought segment's exit path.
- **FAQ E4 (Worth $?) and the cross-level math reframe:** This is the single most important FAQ email for L3 because the cross-level body contains math reframe and the L3 block strips it. **Implementation MUST verify that the L3 block is applied, not the cross-level body.** A leaked math reframe in E4 is a Category 2 urgency violation — recoverable but with 15-20 trust points cost.

---

### 3.12 Referral Flow (D30+) — `pp-21-referral-l3`

**CONVERSION GATE:**
- **E1:** "Know another parent in this?" Incentive: discount on next purchase. Framed as "If you know someone who'd find this useful..." **NOT "Share and earn $20!" — transactional. NOT "Tell your BCBA!" — partner-bashing.**
- Lena voice. Permission-first.

**DEAD-END:**
- If she ignores Referral, no At-Risk triggers. She remains in the PP arc.

**CROSS-FLOW CONTINUITY:**
- **Referral and PP-Mid D30 collision:** Tie-breaker: PP-Mid D30 fires first.
- **L3 word-of-mouth is small but intensely trusted.** Her network includes BCBA, OT, SLP, Medicaid Waiver coordinator, special-ed teacher — and the parent Facebook groups where L3 moms find each other.

---

### 3.13 Sunset (D120 inactive) — `pp-22-sunset-l3`

**CONVERSION GATE:**
- **E1:** "Do you still want to hear from us?" One-click preference update. Respectful exit, never guilt. **"We miss you" is forbidden even in sunset.** "Just checking we're not bothering you" is the L3 tone.
- **E2:** "If you'd rather we didn't." Final farewell. No response = suppressed for 6-12 months. Lena voice.

**DEAD-END:**
- After Sunset, tag `unengaged = True`, add to Master Suppression List. **Highest priority — suppresses ALL other flows unconditionally.** Sunset = permanent exit. **Many L3 moms who exit via Sunset return at a developmental window shift (new BCBA observation, regression, school transition).** Master Suppression List keeps them on file for 6-12 months.

**CROSS-FLOW CONTINUITY:**
- **Sunset is the highest-priority flow.** It overrides Winback, PP-Education, Replenishment, Review, Referral — all pause while Sunset is active.

---

## 4. CROSS-FLOW RULES SPECIFIC TO L3

### 4.1 The 6 Mandatory Elements (Every L3 Mail)

Per §25, every L3 email must contain:
1. **Dignity in every sentence.** Each word passes: "Would this land as dignity on a mom who's been at this for 9 years?"
2. **"Mini-wins count" framing.** Success is signal, not training.
3. **Acknowledge the resignation reality.** She is not in crisis; she is in steady-state survival.
4. **Permission-not-to-buy in EVERY mail.** Not just the conversion mail. **Every. Mail.**
5. **Lena peer voice.** "Both my sons went through this." Lena has been through L3 territory (ages 6 and 8).
6. **60-Day Guarantee framing.** "Try it for 60 days. By your judgment."

**Missing any single one is a trust break.** The 6 elements are not aspirational — they are mandatory.

### 4.2 The §25 L3 Offer Restrictions

- **Primary offer: 1 Pair ($34.99)** — never the 3+3 Bundle as the headline.
- **Upgrade path: 1 Pair → 3+3 (organic, in PP-Extended Upsell).** NEVER pushed to 5+5.
- **NEVER math reframe.** NEVER prominent shipping cost. NEVER name specific shipping carrier.
- **NEVER urgency of any kind.** Countdown timers, "last chance," scarcity, "today only" — all 🚫.
- **NEVER "Don't give up!" or any cheerleading tone.** "Keep going!", "Stay strong!", "You've got this!" — all 🚫.
- **NEVER "Fix" / "Cure" / "Treat" / "Heal."** Even in negation.
- **NEVER adult diaper language as sales pressure.** The deepest emotional trigger in the L3 ecosystem.
- **NEVER grief as sales tool.** "Imagine him at 18 still in diapers" — repulsive.
- **NEVER "Easy" / "Quick" / "Simple" / "Effortless" / "Miracle" / "Breakthrough" / "Revolutionary" / "Game-changer" / "Life-changing."**

### 4.3 L3 Visual Rules

- **CTA: Text link or muted button. NEVER full-width green button.**
- **Spacing: 56px gaps (widest in system).**
- **Color: Cream + soft earth tones. ZERO Brand-Yellow (#F5C84B). ZERO neon.**
- **Imagery: Kids 6-10+, reflective, soft, dignified. No celebration shots. No before/after.**
- **No exclamation marks in subject lines or CTAs. No emoji in subject lines as decoration.**
- **No math reframe callouts, urgency banners, or prominent shipping cost.**

### 4.4 L3 Sign-Off Progression

- **E1-E2: "Talk soon,"**
- **E3-E5: "With understanding,"**
- **E6+: "With care,"**

The progression is a tonal cue to the reader. Each shift signals the email is taking her seriously without pushing.

### 4.5 L3 Hope/Realism Trajectory

| Stage | Ratio | Direction |
|---|---|---|
| Welcome E1 (D0) | 20/80 | Heavy realism (starting baseline) |
| Welcome E4 (D7) | 18/82 | Slight dip (Late is not never — confronts reality) |
| Welcome E5 (D10) | 22/78 | Tiny rise (mini-wins reframes success) |
| Welcome E7 (D17) | 18/82 | Slight dip (dignity deep confronts cost) |
| PP-Mid D60 | **15/85** | **Crushing realism (60-day mark — most-skewed cell)** |
| PP-Extended Ed | **15/85** | Resignation throughout |
| Winback A/B | **15/85** | Minimal hope |

**The trajectory does not rise. It holds and occasionally dips.** This is the correct shape: L3's realism is not a problem to solve; it is the texture of her life.

---

## 5. QUICK-REFERENCE IMPLEMENTATION CARD

```
L3 FLOW BEHAVIOR — IMPLEMENTATION CARD

CONVERSION GATE (EVERY EMAIL)
  CTA:            Text link or muted button. NEVER full-width green.
  OFFER:          1 Pair ($34.99). NEVER 3+3 as headline. NEVER 5+5.
  MATH REFRAME:   NEVER. EVER. (Especially FAQ E4.)
  URGENCY:        NEVER. ANY FORM.
  CHEERLEADING:   NEVER. ("Don't give up!" = cardinal sin.)
  PERMISSION:     "If today isn't the day, that's a real answer" in EVERY mail.
  FIX/CURE:       NEVER. EVEN IN NEGATION.
  ADULT DIAPERS:  NEVER as sales pressure.
  CARRIER NAME:   NEVER in subject, body, or preheader.
  SHIPPING COST:  NEVER prominent. NEVER a banner.
  EXCLAMATION:    NEVER in subject line. One max in sign-off only.

DEAD-END (EVERY EMAIL)
  MISSED:         Welcome cadence is fixed. No At-Risk in pre-purchase.
  WINBACK B:      D60+ no engagement for never-bought.
  WINBACK A:      D90+ no engagement for post-purchase.
  SUNSET:         120d 0 opens + 0 clicks + 0 orders + 20+ emails.
  RECOVERY:       Cat 1 (dignity) recoverable. Cat 2 (urgency) costly. Cat 3 (identity) unrecoverable.

CROSS-FLOW CONTINUITY (EVERY EMAIL)
  SAME WEEK:      Two emails = two separate witnesses. Different openings. Different first lines.
  LENA VOICE:     Consistent identity. "Mom of two autistic sons." Same in every mail.
  MAUREEN B.:     Intentional repetition. Welcome E4, FAQ E2, Winback A Theme 2.
  MINI-WINS:      Intentional repetition. Welcome E5, PP-Ed D14, PP-Ext Ed Theme 2.
  60-DAY GUARANTEE: Appears in EVERY conversion-adjacent mail.

THE 6 MANDATORY ELEMENTS (EVERY L3 MAIL)
  1. Dignity in every sentence
  2. Mini-wins count framing
  3. Acknowledge resignation reality
  4. Permission-not-to-buy in EVERY mail
  5. Lena peer voice
  6. 60-Day Guarantee framing

THE ONE THING       "Whatever progress means for your family is enough."
THE ONE DANGER      Any urgency. Any cheerleading. Any "Don't give up!"
                    Any math reframe. Any adult diaper sales pressure.

NON-NEGOTIABLE      Trust is earned, not assumed. Once earned, Maria
                    is the most loyal customer in the system. Once
                    broken, the L3 community word-of-mouth is small
                    but devastating.
```

---

*End of Level 3 (Maria) Flow Behavior — Stage 1 Reference Document*

*Source convergence: `journey-l3-01-avatar.md` (full), `journey-l3-02-sequence.md` (full), `journey-l3-03-emotional-trust.md` (full), `demands/GIULIANO-DEMANDS.md` §2.5, §17, §18, §25.*

*Every L3 subagent MUST treat this document as the operating manual for conversion gates, dead-ends, and cross-flow continuity. Where L1 and L3 are in conflict, L3 wins. Where L2 and L3 are in conflict, L3 wins. Where the system rule and L3 are in conflict, the system rule wins — except where §25 overrides.*