# MASTER JOURNEY DOCUMENT — LEVEL 2 (LISA)

> **Reference document for all downstream agents (Stage 1 copy, Stage 2 design, Stage 3 QA, Stage 4 launch).** Synthesizes the five L2 journey documents into a single source of truth. Internal version: 2026-06-28.
>
> **Source documents synthesized in this master:**
> - `journey-l2-01-avatar.md` — Lisa persona in full depth
> - `journey-l2-02-sequence.md` — chronological email engineering spec (8 welcome + abandonment + transactional + PP + winback + FAQ + sunset)
> - `journey-l2-03-emotional-trust.md` — per-email emotional arc + running Trust Meter (38→76/100)
> - `journey-l2-04-structural-blueprint.md` — per-email structural engineering across 9 variance dimensions + Variance Ledger
> - `journey-l2-05-flow-behavior.md` — per-email conversion gates, dead-ends, cross-flow continuity
>
> **Grounded in:** `GIULIANO-DEMANDS.md` §1, §3, §5–§9, §13–§15, §17, §18, §23, §24; `01-customer-avatar.md` §3.3, §5–§14; `g3-brand-marketing-direction.md` §2.6; `strategy-macro.json` (22 flows / 130 positions filtered to L2); `locked-profile.json` (filter `level=l2`).

---

## TABLE OF CONTENTS

### Front Matter
- 0. The L2 Axiom and One-Line Identity
- 1. Executive Summary (~500 words)
- 2. Quick Reference Card

### Part I — Who Lisa Is
- 3. Avatar Snapshot
- 4. What She's Tried (and the School/Home Paradox)
- 5. Hope/Realism and Trust Posture at Entry
- 6. The L2 Trust Threshold (Destroyers and Builders)

### Part II — The Conversion Engine
- 7. The 6-Element L2 Formula (Pre-Flight Checklist)
- 8. The L2 Unlock Sentence
- 9. Forbidden Phrase Audit
- 10. Sign-Off Progression
- 11. CTA Style

### Part III — Sequence by Phase
- 12. Phase 1 — Pre-Purchase (Signup → Day ~21)
- 13. Phase 2 — Transactional & PP Early (Purchase → Day ~21 Post)
- 14. Phase 3 — PP Mid & Replenishment (Day ~22 → Day ~90 Post)
- 15. Phase 4 — Long-Tail (Day 90+ Post, or Never-Bought Post-Winback)

### Part IV — The Trust and Flow System
- 16. Trust Meter — Running Score 38 → 76
- 17. Conversion Gates, Dead-Ends, and Critical Emails
- 18. Cross-Flow Threads and Continuity

### Part V — Operations
- 19. Suppression & Trigger Rules
- 20. Deliverability Envelope
- 21. Visual Calibration Rules
- 22. Inconsistencies Flagged and Resolved

### Back Matter
- 23. Cross-References
- 24. Index
- 25. End Statement

---

## 0. THE L2 AXIOM AND ONE-LINE IDENTITY

**L2 axiom (brand-wide rule for every L2 touchpoint):**
> *Marketing polish triggers skepticism; mechanism specificity converts her into a scientific evaluator.*

**One-line identity:** Lisa is the largest segment (~40% of buyers), the most skeptical, and the most methodically evaluated prospect. She is 40+ methods in, a BCBA on speed dial, thousands spent, every book read — one mechanism reframe away from converting, if we don't blow it with marketing polish first.

**Trust posture at signup:** 38/100. Hope/Realism: 40/60. Mode: **defensive-evaluation** — she is not waiting to be persuaded; she is waiting to be allowed to trust.

**Trust posture at end of long-tail retention:** ~76/100. Hope/Realism: 35/65 (fixed skepticism). Mode: **brand-advocate (low intensity)** — she still reads every claim with a critic's eye, but she has renewed the trust contract with the brand ~20+ times.

---

## 1. EXECUTIVE SUMMARY

Lisa represents the single largest cohort of BrightKidCo's target audience, and the one that demands the most deliberate communication strategy. She is the buyer who has already cycled through forty or more methods — sticker charts, scheduled sits, *Oh Crap*, naked weekends, "feel the wet" underwear, ABA discrete-trial toileting protocols, OT sensory diets, behavioral consultants, GI medications — and still has a child in pull-ups at age five, six, or seven. She has a BCBA she has worked with for two to six years, an OT she has worked with for one to four, and a pediatrician who tells her to "wait." She has done the 2 a.m. Google searches. She has read the SPARK forum. She has cried at IEP meetings. She is methodically evaluating this brand with the same scrutiny she brings to a new BCBA protocol recommendation, because the cost of another failure — financial, emotional, marital, relational with her child — is no longer theoretical.

Her emotional posture at signup is **defensive-evaluation at 40% hope / 60% realism**. She opens Welcome E1 with her hand on the delete key and an internal monologue that runs: *"If they say 'miracle,' I'm out. If they say 'works in three days,' I'm out. If they don't mention his nervous system, I'm out. If they badmouth my BCBA, I'm out."* The conversion shift — from skeptic to scientific-evaluator — requires two moments to coincide: an emotional recognition moment in which she counts three or more failed methods in the brand's symptom inventory, and an intellectual mechanism click in which she reads the interoception explanation and has the "oh, that's why" realization. Both must fire, most often in Welcome E2 on Day 1, sometimes in Welcome E4 on Day 7.

The **L2 unlock sentence** is the gravitational center of the entire L2 brand voice: *"Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address."* It contains four payloads simultaneously — absolution ("you're not failing"), mechanism ("body-signal learning"), BCBA acknowledgment ("your BCBA has been doing the hard work"), and complement framing ("addresses it" — additive, never replacement). This single sentence, deployed cleanly at five mandatory touchpoints (Welcome E2, Welcome E4, FAQ E5, PP-Extended Education L2-2, Mary S. Story), is the highest-leverage asset in the L2 conversion engine.

The **6-Element L2 Formula** is the non-negotiable pre-flight contract for every L2 email with a CTA (per Demand §23): (1) symptom recognition naming 3+ failed methods, (2) mechanism specificity — interoception explained, not vague, (3) BCBA/OT acknowledgment framed as complement, never replacement, (4) realistic timelines — "8–12 weeks for most kids. Some longer," (5) 60-day guarantee surfaced, (6) permission-not-to-buy — explicit or implicit LONG sign-off. Unchecked = DO NOT SEND. Welcome E1 and E5 are exempted from full formula; transactional flows are exempted. Every other L2 email must pass.

The **forbidden-phrase audit** is brutal. The L2 most-dangerous word is "Quick" (Demand §8.6). Other brand-wide forbidden phrases include "Easy," "Simple," "Guaranteed," "Miracle," "Cure," "Fix," "Solve," "Just trust the process," "Don't give up!," "Your child should…," "Have you tried [obvious]?," "Just be more consistent," neurotypical comparison language, aggressive BCBA criticism, countdown timers, fake urgency, AI-isms ("revolutionary," "transformative," "leverage," "empower"), and L1 testimonial splices. One forbidden phrase in mid-Welcome can drop trust by 2–4 points in a single send. The mirror-image most dangerous L2 email is: *"Easy potty training in just 3 days — even for autistic kids! Try now before this offer expires!"* Every trigger fires.

The **L2 journey** spans four temporal phases and ~46 de-duplicated email positions. Phase 1 (pre-purchase, signup → day ~21) carries the Welcome Flow's 8 emails plus browse/cart/checkout abandonment flows. Phase 2 (transactional + PP early, purchase → day ~21 post) carries order/shipping/arrival plus PP-Direct Upsell, PP-Mary S. Story, and the PP-Education D0–21 workhorse. Phase 3 (PP mid + replenishment, day ~22 → day ~90 post) carries PP-Mid Check-In, PP-Extended Upsell, three Replenishment sub-flows (A/B/C keyed to original bundle), Review Request, and PP-Support At-Risk. Phase 4 (long-tail, day 90+ post or never-bought post-winback) carries PP-Extended Education L2-1 through L2-5, Winback A or B (mutually exclusive), Referral, FAQ/Objection Library, and Sunset.

The **Trust Meter** runs from 38/100 at signup to ~76/100 for retained customers at end of PP-Extended Education. Five email positions are eligible for the +2 trust delta — the highest single-send movement: **Welcome E2** (recognition + mechanism click), **Welcome E4** (absolution + wrong-problem reframe), **Welcome E6** (community anchor), **PP-Mary S. Story E1** (founder-as-peer), and **FAQ E5** (L2 unlock sentence in pure form). No email in the L2 sequence produces a negative trust delta if the 6-element pre-flight is honored. The trust ceiling is higher than L1's, and once earned, **L2 trust is the most durable** of any segment — structurally reinforced by the 3-Layer Trust Architecture (intellectual + emotional + relational) and the L2 unlock sentence that holds throughout.

**The single most important strategic insight:** Lisa does not buy a product. She renews (or terminates) a contract with each email open or close. The contract's terms are stable across the sequence: *I will explain something you haven't heard; I will respect your BCBA; I will not promise magic; I will let you leave.* Marketing polish breaks the contract. Mechanism specificity renews it. Permission-not-to-buy is the lever that paradoxically accelerates conversion — the L2 paradox. The L2 reader who is allowed to leave stays. The L2 reader who is chased leaves.

---

## 2. QUICK REFERENCE CARD

### The Five Critical Emails (miss = structural failure downstream)

| # | Email | Day | Cost of Missing |
|---|---|---|---|
| 1 | **WELCOME E2** | D1 | Conversion shift fails. L2 unlock sentence has no foundation. Conversion collapses to ~5–10%. |
| 2 | **WELCOME E4** | D7 | Emotional lock fails. She becomes a buyer without a translator; BCBA conversation at risk. |
| 3 | **SHIPPING E2** | Out for Delivery | Expectation-management uncalibrated. Week 1–2 drop-off risk spikes. |
| 4 | **PP-EDU D0-21 E3** | D14 post | Week 2 reality check missed. Regression normalization unanchored. |
| 5 | **FAQ E5** | Phase 4 | BCBA-conversation path unanchored. L2 unlock sentence in pure form never lands. |

### The Five +2 Trust Emails

| Email | Gate conjunction | Why both must fire |
|---|---|---|
| WELCOME E2 | Recognition + mechanism click | Defensive → scientific-evaluator shift |
| WELCOME E4 | Absolution + wrong-problem reframe | Emotional lock |
| WELCOME E6 | Three L2 testimonials + no L1 splice | Community anchor |
| PP-MARY S. STORY E1 | Founder disclosure + BCBA-respect | Founder-as-peer moment |
| FAQ E5 | L2 unlock pure + fact sheet referenced | Highest-leverage post-purchase asset |

### The Four Door-Closing Moments (LONG sign-off)

| Position | Day | Closes |
|---|---|---|
| Welcome E8 | D21 | Welcome Flow — pre-purchase |
| Winback A L2-3 | D120 post | Post-purchase re-engagement |
| Winback B L2-3 | D100 never-bought | Never-bought re-engagement |
| Sunset E2 | D120+ inactive | Permanent re-permission |

### The Six Conversion Gates (Demand §23 — non-negotiable)

| # | Gate | Tests |
|---|---|---|
| G1 | Symptom recognition (3+ failed methods) | Have you read what I've actually tried? |
| G2 | Mechanism specificity (interoception) | Do you have a *why*, not just a *what*? |
| G3 | BCBA/OT acknowledgment (complement) | Do you respect my professional team? |
| G4 | Realistic timelines (8–12 weeks, some longer) | Are you going to lie to me? |
| G5 | 60-day guarantee (risk removal) | Can I leave if you're wrong? |
| G6 | Permission-not-to-buy (no pressure) | Are you asking me to commit, or to choose? |

### The Eleven Cross-Flow Threads

L2 unlock sentence · 60-day + permission · 49% Wiggins / SPARK · Mahler / interoception · Lena MEDIUM sign-off · Lena LONG sign-off · L2 patience frame · Mary S. founder disclosure · Micro-moments vocabulary · BCBA-complement · 60-day decision window D60 cluster.

### Three Most-Dangerous Forbidden Phrases for L2

1. **"Quick"** — L2 most-dangerous word (Demand §8.6).
2. **"Easy" / "Simple"** — universal forbidden; insults years of effort.
3. **Any BCBA criticism** — unforgivable; BCBA is highest-trust authority.

### Three Trust Signals That Convert L2

1. Mechanism specificity (Mahler as "interoception researcher," not "our partner"; Wiggins 49% in mint-bordered callout).
2. BCBA-complement framing ("Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address.").
3. Permission-not-to-buy ("If this isn't the day, that's okay. The product will be here next month. So will I.").

### L2 Calibration Snapshot

- Science density: HIGH
- Empathy: HIGH
- CTA aggression: LOW
- Urgency allowed: Low (countdown timers NEVER)
- Energy: Clinical warmth
- Dangerous word: Quick
- Primary offer: 3+3 bundle ($79.99) — realistic L2 entry
- Conversion rate: ~35–45% by day 21 (lower than L1; L2's trust threshold is higher and reading time is longer)
- Retained-customer trust ceiling: 76/100 (highest of any level)

---

## 3. AVATAR SNAPSHOT

**Demographics.** Age 31–44 (skews 33–40); 95%+ female primary caregiver; USA 65%, UK 15%, AU/NZ 15%, CA 5%; ~60–65% college-educated (many in healthcare, teaching, social work — they speak the language of evidence); middle to upper-middle income, ~25% Medicaid. 3+3 bundle ($79.99) is the realistic entry. Employment: 45% working / 45% SAHM / ~10% reduced hours.

**Family.** Married/partnered dominant; single moms ~15%. Neurotypical sibling is common — the contrast is daily, unspoken. Father involvement varies; when present he's often the more skeptical "show me the data" voice — Lisa carries the emotional load, he carries the financial scrutiny. **Never pit them against each other** (Demand V17). Extended family is mostly unhelpful: grandparents who say "be more consistent," aunts forwarding "potty train in 3 days" articles.

**Child (5–7, mixed verbal, moderate ASD).** Past the Pre-K deadline; school has adapted via IEP. Functional language for daily needs but cannot reliably report on body states — the disconnect is the L2 fingerprint. Has an IEP, likely self-contained special-ed or inclusion with 1:1 aide. Knows the *concept* of pottying, can follow visual schedules, may initiate sitting — but **cannot translate the internal signal into action**.

**Comorbidities — the "Double A cluster."** SPD ubiquitous (bathroom = sensory minefield); GI issues high (129+ mentions — constipation, withholding, encopresis; "holds his poop for 4 days then has accidents in his sleep" — often the proximal reason pottying stalled); ADHD ~32.9%; Anxiety ~14.8%; speech delay milder than L3.

**Daily rhythm.** Mornings — sensory-diet routine, prompted bathroom (often unsuccessful — "sits 45 min then pees standing up"), outfit changes pre-loaded, school. Midday — Class Dojo/Seesaw reports; some days 100% prompted success, other days refusal/accidents/shutdown. Afternoons — OT, ABA in-home, speech, or sensory-friendly outing; by 3pm the kid is regulated-out. Evenings — bath, dinner (often GI-restricted), bathroom routine, pull-up, laundry. Bedtime — withholding risk peaks; Mom checks the pull-up at midnight, again at 3am. Late night — Lisa researches, 2am Google, Reddit, SPARK forum. **She has been doing this for years.**

**BCBA / OT relationship — the highest-trust authority.** The BCBA is her highest-trust authority for behavioral questions (not Google, not her pediatrician, not her mother) — 2–6 years with BCBA, 1–4 with OT. She carries **loyalty and resentment simultaneously** (loyalty because they've been there; resentment because the protocol hasn't worked). **She will not hear criticism of her BCBA** — the L2 unforgivable sin (Demand §8.5). She's probably already asked her BCBA about pull-ups, underwear, sensory tools, timers, rewards; the BCBA answered patiently, scientifically, with the protocol. Lisa still has the problem. **Strategic implication:** Give Lisa ammunition to bring back to her BCBA, not permission to override. The **bi-weekly BCBA fact sheet** (Demand §23) is the highest-leverage L2 conversion tool — it makes her a translator, not a rebel.

---

## 4. WHAT SHE'S TRIED (AND THE SCHOOL/HOME PARADOX)

**The single most important thing about Lisa: she has tried more than you can list.** This is the core identity of L2.

### 4.1 The Method Inventory (≥3 must be named in every L2 email)

- **Behavioral/reward:** sticker charts, M&M rewards, prize box, "big kid" undies promise
- **Timed/scheduled:** every-30-min reminders, bathroom timer watches, hourly prompts
- **Books/social stories:** standard potty library, custom social stories, picture schedules
- **Methods/books:** *Oh Crap*, 3-day method, naked weekend, "don't ask just sit," EC adaptations
- **ABA protocols:** discrete-trial toileting, prompted sitting, reinforcement schedules, fading procedures
- **OT sensory:** sensory diet pre-bathroom, brushing, compression, weighted lap pad, foot stool
- **Specialty underwear:** multiple trainer brands, cloth trainers, every pull-up size, "feel the wet" marketing that didn't deliver
- **Environmental hacks:** musical/character potties, his own bathroom, no-flush rules, night lights, white noise, portable potties in every room
- **Consultants / dietary / school-IEP:** private potty consultants ($2,500+ invoices), OT intensives, behavioral feeding-GI crossover; Miralax, fiber gummies, hydration tracking, magnesium, probiotic trials; accommodated bathrooms, 1:1 escort, picture schedules home, parent-teacher data logs

### 4.2 How Long, and What's Worked

**Years.** 2–6 years of active attempts since diagnosis, often 1–3 years of typical-developmental attempts before that. By age 5–7 she's crossed from "phase" to "chronic gap."

**Partial wins:** prompted success at school (real win, but prompt-dependent); situational wins (bathroom at OT, morning if regulated, occasionally if Mom catches him mid-dance); reduced meltdown severity when sensory prep done; **"looks down at the wet spot" micro-moment** — first recognition something happened, even after.

### 4.3 The "Trained at School, Not at Home" Paradox

The most common L2 scenario (Synthesis §3.3, §7.2): Mom drops kid at school. Note: *"Went 4/4 today!"* Pickup — asks *"Did you go potty?"* Kid says *"no"* because in his frame he didn't *initiate* it. At home, no internal cue fires. Pull-up fills. Couch, floor, bed. Mom feels gaslit by the school report. School thinks it's solved. Mom knows it isn't. **The school success is prompt-dependent — it does not transfer home because the prompt is gone.**

This paradox is the entry point for the interoception reframe. The word "failed" is wrong for everything else. **She didn't fail. The methods failed because they were solving the wrong problem.** This reframe is the entire emotional payload of the L2 brand voice.

---

## 5. HOPE/REALISM AND TRUST POSTURE AT ENTRY

### 5.1 Method-Cycling Exhaustion

Lisa is **exhausted in a way L1 and L3 are not.** L1 still has hope driving her (deadline pressure is energizing-painful). L3 has resignation, its own equilibrium. Lisa is in the middle: too tired to keep searching, too invested to give up. Physical exhaustion of caregiver, cognitive exhaustion of running a 24-hour data operation, emotional exhaustion of hoping and being disappointed on a 3–6 month cycle for years. **Copy must reduce her cognitive load, not add to it** — short sections, plain language, visual anchors, permission to skim.

### 5.2 The L2 Paradox: Highest Motivation + Highest Skepticism

Lisa has spent **thousands** on consultants. Bought the potties, the underwear, the books, the timers. Returned them. Written 1-star reviews. Told her sister "don't bother." Her reflex on seeing a BrightKidCo pop-up is **transactional skepticism:** "How much is this really going to cost me?" "What promises can I not believe?" "If this were real, my BCBA would have heard of it." "How is this different from the last 10 things?" "Is this person a parent, or just a marketer?" Skepticism is the immune response of a motivated buyer who has been burned.

### 5.3 Trust Asymmetry: Science HIGH, Marketing LOW

- **Trust in science: HIGH.** She reads research. Skims SPARK papers. Mahler on the nightstand. **This is our opening.** We can name Mahler, cite Wiggins 2022 (49%), reference SPARK, talk about interoception as a measurable construct. She will read carefully, verify, and trust when it verifies.
- **Trust in marketing: LOW.** Exclamation marks, "revolutionary," "transform your life," before/after, "join thousands," "don't miss out," countdown timers, all-caps, emojis in subjects, "amazing," "incredible," "breakthrough" — filtered as noise in 0.5 seconds. **This is why L2 cannot be sold with the L1 playbook.** L1 responds to Pre-K urgency and cheerleading; L2 reads the same email and feels patronized.

### 5.4 Hope / Realism: 40/60

Lisa enters with **40% hope, 60% realism** — still believes a solution exists (that's what makes her hyper-motivated), but burned enough that default is "show me, don't tell me."

- **40% hope:** opens welcome flow, reads mechanism, clicks through to science, considers showing BCBA
- **60% realism:** sizes up claim, scans for marketing tells, double-checks guarantee, assumes it won't work until she sees a reason

Ratio stays roughly stable until the **recognition moment**, when it shifts to ~55/45. If post-purchase validates, hope climbs to 55–65/45–35; if post-purchase disappoints early, it can collapse to 25/75 and she joins the L3 winback.

### 5.5 Hope/Realism Across Stages

| Stage | L2 Ratio | Tonality |
|---|---|---|
| Pre-Purchase | 40/60 | Education, mechanism depth, low frequency, no urgency |
| Conversion | 35/65 | Skeptical — guarantee + permission are the levers |
| Transactional | 40/60 | Warm realism, minimal sales talk |
| PP Early | 40/60 | Validation, "it's normal," reassurance |
| PP Mid | 35/65 | Patient, sensitive, never promise quick wins |
| Lifecycle | 35/65 | Fixed skepticism, even retained customers stay measured |

L2's hope ratio does NOT rise much over the journey — realism stays high by design; we're not converting her to an optimist but giving her a tool that works within her realistic frame.

---

## 6. THE L2 TRUST THRESHOLD (Destroyers and Builders)

### 6.1 What Destroys Trust Instantly (any one collapses conversion)

| Trust-destroyer | Why it fails for Lisa |
|---|---|
| **No mechanism explanation** | Leading with the product = just another piece of underwear. Dismissed. |
| **"Easy," "Quick," "Simple"** | She's been trying for years. Insults her effort and intelligence. "Quick" is her most dangerous word. |
| **Fake urgency / countdown timers** | She knows urgency tactics. L2 countdowns NEVER. |
| **Aggressive BCBA criticism (any form)** | Unforgivable. She will defend her BCBA even when frustrated with the BCBA. |
| **"Just like other kids" / NT comparison** | She's accepted difference. NT comparison is a wound, not a goal. |
| **Marketing AI-isms** | "Revolutionary," "transformative," "leverage," "empower" — dialect of products she stopped trusting. |
| **L1 story comparison** | L2 stories need L2 contexts (BCBA, sensory, OT). Don't splice in L1 testimonials. |
| **"Just trust the process" / "Don't give up!"** | Patronizing cheerleading from an untrusted brand. |
| **Heavy math reframe** | "$79.99 less than two specialist copays" = salesy. Gentle in L2; forbidden for L3. |

### 6.2 What Builds Trust

| Trust-builder | Why it works |
|---|---|
| **Mechanism + Mahler "interoception researcher"** | "The interoceptive system senses internal body states. For autistic children, this signal often arrives late, weak, or not at all." She recognizes herself. |
| **Wiggins 2022 / SPARK (49%)** | "49% of autistic 4–5 year olds are not toilet trained. You are not behind." Her permission to stop pretending. |
| **BCBA acknowledgment — complement, never replacement** | "Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address." **The L2 unlock sentence.** |
| **Risk-removal stack: realistic timelines + 60-day guarantee + permission-not-to-buy** | She trusts anyone who doesn't promise magic and gives her the exit. **The paradox: permission to leave makes her stay.** |
| **"Lena has two autistic sons" + verbatim parent quotes + "we don't replace pull-ups"** | Peer signal + anti-evangelism. MEDIUM sign-off variant. |

---

## 7. THE 6-ELEMENT L2 FORMULA (Pre-Flight Checklist)

Per Demand §23, **every L2 email with a CTA must contain all 6 elements**. Pre-flight checklist:

- [ ] **(1) Symptom recognition** — 3+ failed methods named, OR explicit recognition moment matching avatar §1
- [ ] **(2) Mechanism specificity** — interoception explained (not vague); Mahler cited as "researcher" not "partner"
- [ ] **(3) BCBA/OT acknowledgment** — complement framing; "your BCBA has been doing the hard work for years" or equivalent
- [ ] **(4) Realistic timelines** — "8–12 weeks for most kids. Some longer." (NO "Quick." NO "30 days.")
- [ ] **(5) 60-day guarantee** — surfaced with any CTA
- [ ] **(6) Permission-not-to-buy** — explicit or implicit LONG sign-off; NEVER pressure

**Unchecked = DO NOT SEND.** Applies to all L2 emails with CTAs except transactional flows (Order, Shipping, Arrived — operational) and the partial-exempt Welcome E1 (intro/observation) and Welcome E5 (mechanism-only deep-dive).

**BCBA never rules:** always frame as complement, not replacement.
- ❌ "ABA doesn't work for potty training" → ✅ "Your BCBA has been doing the hard work for years"
- ❌ "Your BCBA missed this" → ✅ "ABA + Body-Signal = both pieces"
- ❌ "BCBA protocols are flawed" → ✅ "The missing layer the protocol can't address"

---

## 8. THE L2 UNLOCK SENTENCE

The single most important sentence in the L2 brand voice:

> *"Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address."*

Contains four payloads simultaneously:
- **Absolution** ("you're not failing")
- **Mechanism** ("body-signal learning… the missing layer")
- **BCBA acknowledgment** ("your BCBA has been doing the hard work")
- **Complement framing** ("addresses it" — additive, not replacement)
- **Wrong-problem reframe** (deepest L2 lever)

### 8.1 Mandatory Appearances

- Welcome E2 (mechanism deep dive) — first articulation
- Welcome E4 (deep reframe) — full airing, paired with the prompt-dependency loop
- FAQ E5 (BCBA Compatibility objection) — purest form
- PP-Ext Edu L2-2 (BCBA Integration Tips) — practical extension
- PP-Mary S. Story E1 — Mary S. framing: "we worked with our BCBA, not against her"

### 8.2 Implicit Appearances (echoed in BCBA-respect language)

- Every PP-Education email (D0–21)
- Every Replenishment email
- Every Winback email (Path A and B)

If the L2 reader walks away remembering one sentence, this is the one.

### 8.3 The One Thing (Avatar §10)

> *"Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address. You're not failing potty training. You solved the wrong problem — and now there's a layer that addresses it."*

---

## 9. FORBIDDEN PHRASE AUDIT

| Phrase | Status | Reason |
|---|---|---|
| "Easy," "Simple" | Universal forbidden | Insults effort |
| **"Quick"** | **L2 MOST DANGEROUS** (Demand §8.6) | Years of trying |
| "Guaranteed" | Brand-wide forbidden | Use "60-day money back" |
| "Miracle," "Cure," "Fix," "Solve" | Brand-wide forbidden | Autism is identity, not disease |
| "Just trust the process" | Forbidden | Patronizing |
| "Don't give up!" | Forbidden | Cheerleading from untrusted brand |
| "Your child should…" | Forbidden | Heard from mother, pediatrician, in-laws |
| "Have you tried [obvious]?" | Forbidden | Same |
| "Just be more consistent" | Forbidden | Same |
| NT comparison ("just like other kids") | Forbidden | L2 has accepted difference |
| Aggressive BCBA criticism (any form) | UNFORGIVABLE | BCBA is highest-trust authority |
| Countdown timers | Forbidden for L2 | Never (Demand §15.7) |
| Fake urgency / "limited time" | Forbidden | L2 immune response |
| AI-isms ("revolutionary," "transformative," "leverage," "empower") | Forbidden | Marketing dialect she filters as noise |
| L1 testimonials spliced in | Forbidden | L2 needs L2 contexts |
| "Pre-K is coming!" / direct Pre-K urgency | Forbidden for L2 | School adapted via IEP |
| "Don't worry" / "We understand" (empty) | Forbidden | Empty empathy reads patronizing |
| "Independence!" (without realism anchor) | Conditional 🔴 | Must pair with "at his pace" |
| "The next size is adult diapers" | Forbidden for L2 | L3-only trigger |
| "Risk-free" | Forbidden | Insurance jargon; use "60-day money back" |

### 9.1 The Single Most Dangerous L2 Email

> *"Easy potty training in just 3 days — even for autistic kids! Try now before this offer expires!"*

Or any equivalent. Lisa's immune system fires at "Easy" (universal forbidden), at "3 days" (L2 most-dangerous: "Quick"), at "autistic kids" in marketing voice, at "before this offer expires." Then she marks spam, leaves a 1-star review, tells her three Facebook groups "stay away." **The most dangerous L2 email is the most polished L1 email.** The shinier it is, the harder it collapses.

---

## 10. SIGN-OFF PROGRESSION

| Position | Sign-off | Variant |
|---|---|---|
| Welcome E1–E2 | "Talk soon," | SHORT |
| Welcome E3–E5 | "With understanding," | MEDIUM |
| Welcome E6+ | "With care, Lena." | LONG |
| Winback (A or B) E3 / Sunset E2 / Welcome E8 | "With care, Lena" + LONG permission sentence | DEEPEST |

The progression mirrors the journey: SHORT for first contact (professional peer); MEDIUM once trust begins (recognition moment); LONG for retention and farewell (Lena-as-trusted-peer); DEEPEST at the door-closing moments (Lena-as-Lena).

**The LONG sign-off** (used at Welcome E8, Winback A L2-3, Winback B L2-3, Sunset E2 — the four door-closing moments):
> *"If this isn't the day, that's okay. The product will be here next month. So will I."*

---

## 11. CTA STYLE — L2 QUICK-REFERENCE

- **Color:** Muted green (desaturated #039902 hue)
- **Height:** 48px min
- **Width:** NOT full-width (vs L1 which is full-width)
- **Shadow:** Soft, subtle
- **Border-radius:** 12–16px
- **Wording:** Soft-action. Examples: "See the science," "Read the full story," "Try it for 60 days," "Show your BCBA," "Reply to Lena." **NEVER "BUY NOW."**
- **Countdown timers:** NEVER (Demand §15.7)
- **Generous whitespace** around the CTA — no clutter
- **Spacing:** 44px section gaps (vs L1 48–64px, L3 56–72px)

The L2 CTA is the visual equivalent of permission-not-to-buy.

---

## 12. PHASE 1 — PRE-PURCHASE (Signup → Day ~21)

This is the conversion phase. Lisa enters in **defensive-evaluation mode**. The phase must produce the **conversion shift** — from skeptic to scientific-evaluator — via the recognition moment (3+ symptom matches) coinciding with the mechanism click ("oh, that's why"). When both fire, hope/realism shifts from 40/60 to ~55/45, and the email sequence has done its job.

### 12.1 Welcome Flow (Flow 1) — 8 Emails, Level-Specific

**WELCOME-01-E1-L2 — Day 0 (immediate)**
- *Subject:* "Welcome — and a thank you for reading this far" / "Your WELCOME10 code is here" / "From Lena — and what brought me to this work"
- *Lever:* L4 (Lena Peer Trust)
- *Copy:* Welcome + WELCOME10 code. Mirror: "You've tried BCBA, OT, social stories, sticker charts, every potty book, every consultant… and nothing's clicking." Lena introduction — mom of two sons (one trained at almost 8). Sign-off: "Talk soon,"
- *6-element check:* Partial (E1 exempted; voice + BCBA-respect must be unmistakably L2).
- *CTA:* "Read the science when you're ready" (permission-not-to-buy implicit).
- *Visual:* Lena MEDIUM sign-off: "Mom of two autistic sons (one 6, one trained at almost 8)."
- *Trust delta:* +1 (38→39). Defense cracked; first read survived.

**WELCOME-01-E2-L2 — Day 1 — CRITICAL**
- *Subject:* "Why nothing has worked yet" / "The layer nobody talks about"
- *Lever:* L1 (Sensory Gap) + L2 (Pull-Ups Harm) + L5 (49% Stat)
- *Copy:* THE CRITICAL L2 EMAIL. **6-Element Formula MANDATORY in full.** Name 3+ failed methods. Explain interoception ("the interoceptive system senses internal body states. For autistic children, this signal often arrives late, weak, or not at all"). Mahler as "interoception researcher," NOT "our partner." Wiggins 2022 / SPARK 49% in mint-bordered callout. L2 unlock sentence. "8–12 weeks for most kids. Some longer." 60-day guarantee surfaced. Permission: "If this isn't the day, that's okay."
- *CTA:* "See the science" / "Read the full story" / "Try it for 60 days" — never "BUY NOW."
- *Trust delta:* **+2** (39→41). Mode shift: defensive → scientific-evaluator.

**WELCOME-01-E3-L2 — Day 3**
- *Subject:* "60 days. By your judgment."
- *Lever:* L3 (Guarantee) — strong
- *Copy:* 60-day guarantee prominent. L2 phrase: "By your judgment." Mirror skepticism: "You've been promised results before."
- *CTA:* "Try it for 60 days" — guarantee surfaced in button label.
- *Trust delta:* +1 (41→42). First taste of the L2 paradox: permission to leave is the lever.

**WELCOME-01-E4-L2 — Day 7 — CRITICAL**
- *Subject:* "You didn't fail. Your BCBA didn't fail."
- *Lever:* L1 + L2-A (BCBA complement)
- *Copy:* Deep reframe — absolution + prompt-dependency loop named. "Went 4/4 today!" at school, no initiation at home. Frame ABA + Body-Signal = both pieces. L2 unlock sentence gets full airing.
- *CTA:* Double-tap: "Show your BCBA" / "Read the body-signal science."
- *Trust delta:* **+2** (42→44). Emotional lock; "oh, I'm not crazy."

**WELCOME-01-E5-L2 — Day 10**
- *Subject:* "Mahler, Wiggins, SPARK — and what they tell us"
- *Lever:* L1 (Science depth) + L5 (49% Stat)
- *Copy:* Science deep-dive. Mahler as "interoception researcher." Wiggins 2022 / SPARK (49%). Nicholson 2019, Iqbal 2022 cited. No product pitch; pure mechanism education. NO "leverage," "transform," "revolutionary."
- *CTA:* "Read the original study" / "Bookmark this email." Read-only.
- *Trust delta:* +1 (44→45). She's a scientific evaluator; feed her data.

**WELCOME-01-E6-L2 — Day 14**
- *Subject:* "What other L2 families have seen"
- *Lever:* L4 (Peer Trust)
- *Copy:* L2-specific testimonials (10–15 sentences each). (1) 18-month prompt-dependency; (2) BCBA integrated body-signal learning; (3) week-6 regression, week-10 recovery. Every testimonial includes "I showed my BCBA" / "we adjusted the protocol" / "it wasn't linear." No "amazing," "incredible," "life-changing."
- *Sign-off:* First appearance of LONG: "With care, Lena."
- *Trust delta:* +1 (45→46). Sign-off moves to LONG.

**WELCOME-01-E7-L2 — Day 17**
- *Subject:* "The prompt-dependency loop, named"
- *Lever:* L2-D (Beyond prompt-dependence)
- *Copy:* "Your child has been trained to comply. We help them feel." The loop: prompt → compliance → voiding → no internal association → no generalization → prompt needed again. Break: wetness-sensing layer gives the body a signal it can register, repeatedly. Clinical warmth — warmth of a thoughtful specialist, not a peer-mom.
- *CTA:* "Read the body-signal research" / "Show your BCBA the cycle."
- *Trust delta:* +1 (46→47). Has the mechanism to defend in BCBA conversation.

**WELCOME-01-E8-L2 — Day 21**
- *Subject:* "The door stays open" / "From Lena — a thank you, whatever you decide"
- *Lever:* L4 (Lena Peer Trust)
- *Copy:* Gentle close. Door open. Lena farewell: "I had two L2-like sons. One trained at almost 8. The path is long, but it bends." LONG sign-off: "If this isn't the day, that's okay. The product will be here next month. So will I." **No discount. No urgency.**
- *CTA:* Text link: "Reply to this email" / "Visit the FAQ" / "Read the science library."
- *Trust delta:* +1 (47→48). Mode shift: scientific-evaluator → decision-ready.
- *Decision point:* Three paths: (1) **Purchase within 24–72h** — most common L2 conversion; (2) **Linger in PP-Education / FAQ/Objection Library**; (3) **Drop to Winback B** at 60d no purchase.

### 12.2 Browse Abandonment (Flow 4) — 3 Emails

**BROWSE-04-E1** (24h): mechanism education hook + 3 R2 recognition anchors ("trained at school not at home," "knows the concept but can't translate," "BCBA protocol that's working but not transferring home"). No product CTA; redirect to science. Trust delta +1 (48→49).

**BROWSE-04-E2** (3d): deep mechanism + one L2 testimonial (Three-Family Pattern inclusion if room). 49% Wiggins in callout. L2 framing: "Your BCBA's protocol addresses the behavior layer; this addresses the sensory layer." Trust delta +1 (49→50).

**BROWSE-04-E3** (7d): 60-day guarantee + gentle close. "60 days for your child's nervous system to start connecting the dots." Permission: "If today isn't the day, that's a real answer." Trust delta +1 (50→51). Browse does NOT suppress Welcome.

### 12.3 Cart Abandonment (Flow 2) — 3 Emails

**CART-02-E1** (1h): Lena voice: "I saw these were on your mind…" Recognition R2: "school success that doesn't transfer home," "the 45-minute sit," "the wet spot he looked at." **Suppression rule:** Cart Abandonment SUPPRESSES Welcome E3+ during active cart. Trust delta +1 (51→52).

**CART-02-E2** (24h): Three-Family Pattern (L2 slot names BCBA). Math reframe: "Most parents who start with 1 pair add the 3+3 within a week — the body-signal layer builds with consistent wear." Math reframe OK for L2 (FORBIDDEN for L3). Trust delta +1 (52→53).

**CART-02-E3** (72h): permission-led close. "No rush. If this isn't the day, that's okay. Whatever you choose — thanks for reading this far." L2 paradox in full. Trust delta +1 if converts (53→54); holds if not.

### 12.4 Checkout Abandonment (Flow 3) — 2 Emails

**CHECKOUT-03-E1** (1h): "If today isn't right, that's a real answer." Lena voice. Cart contents visible. **NO additional discount** (insults highest-intent). Trust delta +1 if converts; holds if not.

**CHECKOUT-03-E2** (24h): "Try it for 60 days. By your judgment." Free shipping reminder. Trust delta 0 or +1 (53–54).

**Phase 1 ending trust: 54/100** (purchaser) or **53/100** (lingerer). Conversion rate ~35–45% by day 21.

---

## 13. PHASE 2 — TRANSACTIONAL & PP EARLY (Purchase → Day ~21 Post)

Lisa has converted. Hope/realism moves from 35/65 (conversion) to 40/60 (transactional/PP early). The brand's job: **validation without over-promising.**

### 13.1 Order Confirmation (Flow 5) — 1 Email

**ORDER-05-E1** (immediate): Lena voice: "You've got this. We've got your back. — Lena." Order summary, 60-day guarantee reminder. Cross-sell 1 accessory (wash bag) gently. **Google 2024 rule: predominantly transactional. NO promotional content beyond wash bag.** Phase 2 allows reduced formula in transactional flows. Trust delta +1 (54→55). Mode shift: decision-ready → cautious-investor.

### 13.2 Shipping & Out for Delivery (Flow 6) — 2 Emails

**SHIPPING-06-E1** (on fulfillment): Lena: "Can't wait for you to try them. — Lena." Tracking info, delivery estimate. Trust delta +1 (55→56).

**SHIPPING-06-E2** (Out for Delivery) — CRITICAL: "Today's the day!" **The most important expectation-management moment in the entire sequence.** Wash first (no fabric softener — blocks the wetness-sensing layer). Let child unbox. No expectations. L2 patience frame: "First few wears are about introducing the sensation, not results. He's learning a new language his nervous system hasn't heard before. Give it time." **Over-promise here = trust collapse at week 2. Under-promise = trust holds through 8–12 weeks.** Trust delta +1 (56→57).

### 13.3 Arrived & Welcome (Flow 7) — 1 Email

**ARRIVED-07-E1** (delivery confirmed): "They're here!" Mechanism: "The wetness-signal layer works by letting your child FEEL when they're wet — not absorb it silently like a pull-up." What-to-expect timeline in **mint-bordered callout box (the L2 visual signature):** "Week 1: awareness. Week 2–4: recognition. Week 4–8: active response." Gentle 1→3+3 upsell. Trust delta +1 (57→58).

### 13.4 PP-Direct Upsell (Flow 8) — 2 Emails

**PP-DIRECT-UPSELL-E1** (D1 post): "Most parents who start with 1 pair add the 3+3 within a week. Here's why." Bundle comparison table. Helper tone, not seller tone. Math reframe OK for L2. Trust delta 0.

**PP-DIRECT-UPSELL-E2** (D3 post): "Your 1 pair is on its way. Here's how the 3+3 bundle complements it." 10% off add-on. Trust delta 0 or +1.

### 13.5 PP-Mary S. Story (Flow 10) — 1 Email

**PP-MARY-S-STORY-E1** (D3 post): Founder story. "I started BrightKidCo because my own child couldn't feel the signal — and after two years of trying everything, I realized the missing piece wasn't behavioral. It was neurological. It was the body-signal layer." BCBA: "we worked with our BCBA, not against her." Timeline: "it took us 9 months." **Signed as Mary S., not Lena. Mary S. (founder) and Lena (customer support / mom) are never mixed.** No offer — pure brand building. **Phase placement disputed (I09: S01 says Phase 1, S02 implies Phase 2); recommended D3 post-purchase.** Trust delta +1 (58→59). Mode shift: cautious-investor → brand-advocate-in-formation.

### 13.6 PP-Education D0–21 (Flow 11) — 4 Emails

**PP-EDUCATION-D0-21-E1** (D0 post): "Your first wear." "Put on like regular underwear. No expectations. Just observe. Watch for nothing. Watch for everything. Don't log yet." L2 framing: "your BCBA's protocol continues; the body-signal layer is added alongside." **"Don't log yet" is the deepest L2 permission signal.** Trust delta +1 (59→60).

**PP-EDUCATION-D0-21-E2** (D7 post): "What to look for." Micro-signs: pause, touch, look down, shorter dry periods. "These ARE progress — even if no voiding happens in the toilet yet." L2 framing: scientific observation, not celebration. Trust delta +1 (60→61).

**PP-EDUCATION-D0-21-E3** (D14 post) — CRITICAL: "Week two reality." Progress isn't linear. Regression is normal. Don't stop. "Some kids respond by day 3. Others by day 30. Most by day 60. A few need 90. All normal." 49% Wiggins in callout. L2: "your BCBA has seen this curve before — trust the protocol AND the new layer." **Common drop-off point at week 2; the curve is the lifeline.** Trust delta +1 (61→62).

**PP-EDUCATION-D0-21-E4** (D21 post): "Celebrate the small wins." "He looked at the wet spot!" Share wins, encourage logging. Soft upsell if 1-pair buyer. Trust delta +1 (62→63). Mode shift: cautious-investor → cautious-retention.

**Phase 2 ending trust: 63/100.** Higher than L1 at the same point because L2 has read more science, more BCBA-respect language, more mechanism depth. **More durable.**

---

## 14. PHASE 3 — PP MID & REPLENISHMENT (Day ~22 → Day ~90 Post)

Hope/realism holds at 35/65 — she's a steady investor, not an enthusiast. Brand's job: patience + replenishment logistics + zero over-promising.

### 14.1 PP-Mid Check-In (Flow 13) — 3 Emails (timing I05: D45/D60/D75 resolved via S02)

**PP-MID-CHECKIN-E1** (D45): Three-Family Testimonial (Sarah / Lisa-customer / Maria). The Lisa here is a customer named Lisa with an L2-shaped journey. Each mom is somewhere different on the curve. "Reply to this email with how it's going" — **highest-trust invitation in the brand.** Trust delta +1 (63→64).

**PP-MID-CHECKIN-E2** (D60): "How's it going?" Reply invitation. "60 days is the guarantee threshold; you have full information now, and your next decision is yours." Post-purchase permission-not-to-buy. Trust delta +1 (64→65).

**PP-MID-CHECKIN-E3** (D75): "At the 60-day mark." Guarantee reinforcement: "60 days have passed. If the body-signal layer hasn't shifted, you can use the guarantee. No interrogation. No restocking fees." Permission: "or stay with us longer; some L2 families see the shift at week 12." Trust delta +1 (65→66).

### 14.2 PP-Extended Upsell (Flow 12) — 3 Emails

**PP-EXT-UPSELL-E1** (D28): "Your BCBA's protocol continues. The 3+3 bundle or 5+5 lets the body-signal layer stay consistent without rotation gaps." Math reframe OK for L2. **L3 rule: never push 5+5** (L2 is allowed 5+5). Trust delta 0.

**PP-EXT-UPSELL-E2** (D35): Wash Bag, Magic Targets accessory cross-sell. Trust delta 0.

**PP-EXT-UPSELL-E3** (D42): "Whatever you decide about more pairs, the 60-day guarantee stands. Last touch from us on this — leave the relationship intact." Trust delta +1 (66→67).

### 14.3 Replenishment A/B (Flow 16) — 5 Emails Across Sub-Flows

Sub-flow determined by original purchase: 1-pair → A; 3+3 → B; 5+5 → C.

**REPLENISHMENT-A-1** (D14, 1-pair): Wash guidance. "Pairs need a few wash cycles to hit peak wetness-signal performance. No fabric softener — it coats the sensing layer." Trust delta +1 (held at 67).

**REPLENISHMENT-A-2** (D30, 1-pair): "Consistency matters." Rotation logic. Trust delta 0 or +1.

**REPLENISHMENT-A-3** (D60, 1-pair): "Day 60 is your guarantee checkpoint." Trust delta +1 (67→68).

**REPLENISHMENT-B-1** (D75, 3+3): "Time to rotate." 5+5 nudge. Trust delta 0.

**REPLENISHMENT-B-2** (D90, 3+3): 5+5 helper nudge. Trust delta 0 or +1.

**REPLENISHMENT-C-1** (D150, 5+5): "Long haul support." "Your BCBA's protocol + the body-signal layer = the long-road toolkit." Trust delta +1 (68→69).

**REPLENISHMENT-C-2** (D180, 5+5): Accessory refresh (Wash Bag, Magic Targets). Trust delta 0.

### 14.4 Review Request (Flow 17) — 2 Emails (timing I07: D30/D60 resolved via S02)

**REVIEW-REQUEST-E1** (D30): "Has BrightKidCo made a difference? Share your experience." "Your review helps other L2 families decide." Peer request, not transaction. Trust delta +1 (69→70). Mode shift: cautious-retention → brand-advocate (low intensity).

**REVIEW-REQUEST-E2** (D60): "Your experience helps other parents decide." "If you're not ready to write yet, that's fine." L2 permission. Trust delta +1 if writes (70→71); 0 if not.

### 14.5 PP-Support At-Risk (Flow 15) — 4 Emails (Conditional on No-Opens)

Trigger: 3-7 days no opens post-purchase. **No upsells. NEVER "We miss you" or guilt-tripping.**

**PP-SUPPORT-AT-RISK-E1** (3d no open): "I noticed you haven't opened recent emails. Just checking in." Concerned peer, NOT corporate. Trust delta +1 if re-engages; 0 if not.

**PP-SUPPORT-AT-RISK-E2** (7d): "Here's how to get the most out of your pairs." Wash/rotation tips. Trust delta 0 or +1.

**PP-SUPPORT-AT-RISK-E3** (14d): "Your child's nervous system is learning even when it doesn't show." Scientific patience, no cheerleading. Trust delta 0 or +1.

**PP-SUPPORT-AT-RISK-E4** (21d): "Your 60-day guarantee is still active. 60 days. By your judgment. If you need to use it, no interrogation." Trust delta +1 if guarantee used cleanly; 0 if not.

**Phase 3 ending trust: ~71/100.** Trust structurally reinforced — ~20+ emails read, multiple mechanism explanations, multiple BCBA-respect frames.

---

## 15. PHASE 4 — LONG-TAIL (Day 90+ Post, or Never-Bought Post-Winback)

Voice stays clinical-warm. L2 unlock sentence remains the gravitational center. The L2 reader is either a retained customer receiving PP-Extended Education and Review/Replenishment cycles, or a never-bought L2 receiving Winback B and the FAQ/Objection Library.

### 15.1 PP-Extended Education L2-Themed (Flow 14) — 5 Emails

Timing inferred (I12): D30 / D50 / D70 / D100 / D130. **Phase placement disputed** (I13: S01 Phase 3 vs Phase 4); resolved as Phase 4.

**PP-EXT-EDU-L2-1** (Interoception Science, ~D30): Mahler 8 interoceptive senses explained for parents. Stat callout box around Mahler citation. L2 framing: "your BCBA will recognize this framework." **Mahler cited as "interoception researcher" — NOT "our partner."** No product CTA. Trust delta +1 (71→72).

**PP-EXT-EDU-L2-2** (BCBA Integration Tips, ~D50) — CRITICAL: "How to bring body-signal learning into your BCBA's protocol." Practical: language to use, timing of protocol revision. **The bi-weekly BCBA fact sheet (highest-leverage L2 conversion tool, Demand §23) gets its deepest airing here.** **Deepest post-purchase BCBA-respect moment in the entire sequence.** Lena MEDIUM or LONG sign-off. Trust delta +1 (72→73).

**PP-EXT-EDU-L2-3** (Sensory Bathroom Setup, ~D70): Foot stool, lighting, white noise, picture schedules, weighted lap pad, no-flush rule. "The bathroom is a sensory minefield — these are the OT-tested setups that reduce the load." Trust delta +1 (73→74).

**PP-EXT-EDU-L2-4** (Prompt-to-Awareness Shift, ~D100): 5-phase fading: full prompt → visual cue only → verbal cue every other visit → cue only when child initiates → no cue. "This is the BCBA's domain — share the phasing with them." Trust delta +1 (74→75).

**PP-EXT-EDU-L2-5** (Long-Term Progress Tracking, ~D130): 3-metric dashboard (dry periods, micro-moments, successful voids). "Your BCBA is already data-driven — this is the layer they can't measure, made measurable. Or don't log at all." **Permission to not log is the deepest data-respect signal.** Trust delta +1 (75→76). The **final L2 email** in the post-purchase education chain.

### 15.2 Winback Path A (Flow 18) — 3 L2-Themed Emails

Trigger: 90 days no engagement (post-purchaser). **Suppression: Winback pauses ALL nurture flows while active.**

**WINBACK-A-L2-1** (D90): "It's been a while. No judgment — life with an L2 kid is full." Lena: "I had two of these kids; some weeks I couldn't open email either." No upsell. No urgency. **NEVER "We miss you."** L2: "your BCBA's protocol continues; we're here when you need the body-signal layer again." Trust delta +1 if re-engages; 0 if not.

**WINBACK-A-L2-2** (D105): "A recent interoception study reinforces what we built the body-signal layer to do." Mahler update, SPARK data release, Nicholson 2019 deep-cite. Stat callout. Scientific-evaluator re-engagement. Trust delta +1 if re-engages.

**WINBACK-A-L2-3** (D120): "Your 60-day guarantee has long passed, but the door is still open." LONG sign-off. **Third door-closing moment.** Trust delta +1 if re-engages; 0 if moves to Sunset.

### 15.3 Winback Path B (Flow 19) — 3 L2-Themed Emails

Trigger: 60 days no purchase (never-bought). **Mutually exclusive with Winback A.** Never-bought L2 needs stronger mechanism proof.

**WINBACK-B-L2-1** (D60): "It's been a while. I wanted to send one more thing before I stop." Mechanism refresh, no pressure. L2 unlock sentence: "the body-signal layer is still the missing piece your BCBA's protocol can't address." Trust delta +1 if re-engages.

**WINBACK-B-L2-2** (D80): Same as Winback A L2-2 but **harder-hitting on the science** — never-bought needs more proof. Trust delta +1 if engages.

**WINBACK-B-L2-3** (D100): "60 days. By your judgment. If it doesn't shift the body-signal layer, full refund. Or — if this isn't the day — that's the real answer." LONG sign-off. **Fourth door-closing moment.** Trust delta +1 if converts; 0 if not.

### 15.4 Referral Flow (Flow 21) — 3 Emails

Trigger: Post-purchase D30+ with satisfaction indicator.

**REFERRAL-E1**: "Know another parent who's struggling? Share BrightKidCo." L2 framing: "if you know another L2 family — one with the BCBA context, the sensory profile, the long road — send them this." Incentive: discount on next purchase. Trust delta +1 if shares; 0 if not.

**REFERRAL-E2**: Lena voice: "When something works for our kids, we tell each other." Community framing.

**REFERRAL-E3**: Final reminder + dual-sided incentive (referrer + referred both get discount). Soft close: "or don't share; the relationship stays the same."

### 15.5 FAQ / Objection Library (Flow 20) — 6 Emails (Level-Specific Blocks)

4-step reframe: Name → Validate → Reframe → Absolve.

**FAQ-E1 — "Tried Everything" (D1):** G1 dominant. "40+ methods. None addressed the body-signal layer." 4-step reframe (Defeated → Absolved). SPARK 49% stat. BCBA: "your BCBA's protocol was the closest — it just couldn't reach the sensory piece." Citation: Nicholson et al. 2019; SPARK. Trust delta +1.

**FAQ-E2 — "Too Old/Severe" (D4):** G3-A (Late Train). Late-trainer stories. "Trained at 8, 9, 11 — the curve is wider than you think." Mahler citation. BCBA: "your BCBA has seen late-trainers; the protocol is the same." Hopeless → Empowered. Citation: Faulkner et al. 2017. Trust delta +1.

**FAQ-E3 — "GI/Withholding" (B4):** G1 + Medical reframe. "GI issues + body-signal gap = the proximal reason pottying stalled. The body-signal layer helps the nervous system register what the GI tract is already saying." Scared → Supported. Citation: McElhanon et al. 2014. Trust delta +1.

**FAQ-E4 — "Worth $30–50?" (C3):** G3 + Math reframe. "Less than two specialist copays. 60 days. By your judgment." **Math reframe applies to L1-L2 ONLY; L3 NEVER math reframe.** Defensive → Valued. Trust delta +1.

**FAQ-E5 — "BCBA Compatibility" (B2) — CRITICAL:** G2-A (Complement) dominant. **L2 unlock sentence in its purest form:** "Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address." Bi-weekly BCBA fact sheet referenced. Conflicted → Confident. **Trust delta +2 (highest-leverage post-purchase asset).**

**FAQ-E6 — "Hope-Crash Fear" (D3):** G3 + G4. "60 days. By your judgment. If the body-signal layer doesn't shift, full refund. The exit is the point. That's why it works." Citation: Hample 2020. Protected → Safe to try. Trust delta +1.

### 15.6 Sunset (Flow 22) — 2 Emails

Trigger: 120 days no open AND no click AND no purchase AND received 20+ emails (per S01 §3.3 Flow 27). **Inconsistency I08:** S02 says "120d inactive post-Winback"; S01 specifies multi-condition. Resolved using S01's stricter trigger. **HIGHEST PRIORITY** — suppresses ALL other flows unconditionally. After Sunset: tag `unengaged = True`, add to Master Suppression List.

**SUNSET-E1** (D120 inactive): "Do you still want to hear from us?" One-click preference update. "No guilt; the door stays open." Trust delta 0 or +1.

**SUNSET-E2** (4–7 days after E1): Final farewell. No response = suppressed for 6–12 months. LONG sign-off. **Fifth door-closing moment (technically the closing of the relationship).** Trust delta 0.

**Phase 4 ending trust: ~76/100** (retained customer ceiling) or **~54/100** (never-bought ceiling) or **70/100** (Sunset exit).

---

## 16. TRUST METER — RUNNING SCORE 38 → 76

```
Trust
  80 ┤                                                    ╭─── 76
     │                                               ╭────╯
  75 ┤                                          ╭────╯
     │                                     ╭────╯
  70 ┤                                ╭────╯
     │                          ╭─────╯
  65 ┤                    ╭─────╯
     │              ╭─────╯
  60 ┤        ╭─────╯
     │   ╭────╯
  55 ┤───╯
     │╭╯
  50 ┤╯
     │
  45 ┤
     │
  40 ┤
     │
  35 ┤
     └──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──
        E1 E2 E3 E4 E5 E6 E7 E8 ──B1B2B3──C1C2C3──PP──FAQ─Sunset
        WELCOME FLOW       BROWSE CART    PP MID        PHASE 4
```

### 16.1 Trust Threshold Markers

| Marker | Trust | Significance |
|---|---|---|
| **Defense cracked** | 39 | Welcome E1 — first read survived |
| **Mode shift** | 41 | Welcome E2 — defensive → scientific-evaluator |
| **Emotionally locked** | 44 | Welcome E4 — recognition + L2 unlock |
| **Decision-ready** | 48 | Welcome E8 — door-stays-open |
| **Conversion** | 54 | Phase 1 end — purchase |
| **First-wear trust** | 60 | PP-Edu D0-21 E1 |
| **Mid-cycle trust** | 65 | PP-Mid Check-In E2 — 60-day mark |
| **Brand-advocate** | 70 | Review Request E1 |
| **Long-haul advocate** | 76 | PP-Ext Edu L2-5 — final retained state |
| **Sunset exit** | 70 | Sunset E1/E2 — door never locked |

### 16.2 Trust Delta Scoring

- **+2:** Recognition moment (3+ symptom matches) AND mechanism click both fire. L2 unlock sentence delivered cleanly.
- **+1:** Recognition OR mechanism deepens OR BCBA-respect lands.
- **0:** Steady-state transactional. No arc movement.
- **–1:** Polite friction (wrong timing, slightly salesy, but no forbidden phrase).
- **–2:** Forbidden phrase, BCBA criticism, fake urgency, "Quick"/"Easy"/"Miracle." May mark spam or leave 1-star review.

### 16.3 The 3-Layer Trust Architecture

L2 trust is built in three layers, each reinforcing the next:

1. **Intellectual trust** (Welcome E2, E5, E7; PP-Ext Edu L2-1): Mechanism explained. Citations cited. Science respected.
2. **Emotional trust** (Welcome E4, E8; FAQ E1, E6): Absolution given. Wrong-problem reframed. Permission granted.
3. **Relational trust** (Welcome E1, E8; PP-Mary S. Story; PP-Ext Edu L2-2; Sunset E2): Lena-as-Lena. "Mom of two autistic sons." The door never closes.

Each email must serve at least one layer. The strongest emails serve two. The strongest moments serve all three.

### 16.4 Trust Threshold Test (Before Any L2 Email Sends)

1. **Does this email pass Lisa's 30-second filter?** (No exclamation cascade, no "Quick," no "Easy," no AI-isms, no countdown timer)
2. **Does this email name her experience?** (3+ failed methods, or 1+ sensory/BCBA anchor)
3. **Does this email let her leave?** (Permission-not-to-buy explicit or implicit)

If any answer is no, the email is not L2-calibrated. Send blocked.

### 16.5 Trust Mode Transitions

```
DEFENSIVE-EVALUATION (40/60)
   ▼ WELCOME E1 (subject line survives; first body line quoted)
DEFENSIVE-EVALUATION (40/60, lightly cracked)
   ▼ WELCOME E2 (recognition + mechanism click + L2 unlock)
SCIENTIFIC-EVALUATOR (45/55)
   ▼ WELCOME E4 (emotion locked; wrong-problem reframe)
SCIENTIFIC-EVALUATOR (50/50)
   ▼ WELCOME E8 (door-stays-open)
DECISION-READY (55/45)
   ▼ Conversion
CAUTIOUS-INVESTOR (35/65)
   ▼ PP-Education D0-21 E1-E4
CAUTIOUS-RETENTION (40/60)
   ▼ PP-Mid / Replenishment
CAUTIOUS-RETENTION (40/60)
   ▼ Review Request / PP-Extended Education
BRAND-ADVOCATE (low intensity) (35/65 — fixed skepticism)
```

---

## 17. CONVERSION GATES, DEAD-ENDS, AND CRITICAL EMAILS

### 17.1 Dominant Gate Per Email (L2 Cheat-Sheet, Condensed)

| Email | Dominant Gate(s) |
|---|---|
| WELCOME E1 | MEDIUM sign-off (G6 implicit via code) |
| WELCOME E2 | **ALL 6 simultaneously** — conversion shift |
| WELCOME E3 | G5 + G6 (guarantee + permission) |
| WELCOME E4 | G3 (BCBA) + recognition |
| WELCOME E5 | G2 (mechanism dominant) |
| WELCOME E6 | G1 (testimonials) + G6 |
| WELCOME E7 | G2 (mechanism operational) + G3 (BCBA) |
| WELCOME E8 | G6 (LONG sign-off, recap) |
| CART E2 | G1 (testimonial) + G3 (BCBA-named) |
| CART E3 | G5 + G6 (L2 paradox) |
| PP-MARY S. STORY E1 | Founder arc (all 6) |
| PP-EDU D0-21 E1 | G6 ("don't log yet") |
| PP-EDU D0-21 E3 | G4 (timeline curve) + G5 (49% stat) |
| PP-MID CHECKIN E2 | G5 + G6 (60-day decision) |
| PP-EXT-EDU L2-2 | **G3 dominant** (BCBA fact sheet) |
| WINBACK A L2-3 / B L2-3 / SUNSET E2 | G6 (LONG sign-off) |
| FAQ E5 | **G3 dominant** (L2 unlock pure, +2 delta) |
| FAQ E6 | G5 + G6 (hope-crash fear) |

### 17.2 Dead-End Taxonomy (Four Types)

| Dead-end type | Trigger emails | What it costs |
|---|---|---|
| **Silent immunity** (delete-key reflex never released) | WELCOME E1 missed; BROWSE/CART/CHECKOUT E1 missed | Welcome E2 may still fire but trust is brittle; conversion rate drops ~50% |
| **Mid-funnel stall** (mechanism click doesn't fire) | WELCOME E2 missed; WELCOME E5 missed | She doesn't enter scientific-evaluator mode; L2 unlock sentence has no foundation; conversion collapses to ~5–10% |
| **Emotional lock failure** (recognition moment without absolution) | WELCOME E4 missed | Hope/realism stays at 40/60; trust ceiling capped at ~60/100 |
| **Post-purchase crash** (expectation spike uncalibrated) | SHIPPING E2 missed; PP-EDU D0-21 E1/E3 missed | Week 1–2 drop-off; Lisa interprets micro-signs as failure; guarantee risk spikes at D45–60 |

**The most expensive dead-end:** mid-funnel stall (Welcome E2 missed). The 6-element formula never lands; the L2 conversion engine has no foundation.

**The most common dead-end:** post-purchase crash. Lisa's data-driven instinct pushes her to over-log in Week 1; without SHIPPING E2's patience frame and PP-EDU D0-21 E3's curve normalization, she may interpret "no immediate voiding" as failure.

**The least recoverable dead-end:** emotional lock failure. If E4's absolution doesn't land, Lisa continues to carry the "I failed" frame; she becomes a buyer without a translator — the highest-risk retained-customer state.

### 17.3 The 5 Critical Emails (Highest Single-Send Cost if Missed)

1. **WELCOME E2** — Conversion shift fails. E2 is the foundation.
2. **WELCOME E4** — Emotional lock fails. Absolution never lands.
3. **SHIPPING E2** — Expectation-management frame uncalibrated. Week 1 drop-off spikes.
4. **PP-EDU D0-21 E3** — Week 2 reality check missed. Regression normalization unanchored.
5. **FAQ E5** — BCBA-conversation path unanchored. L2 unlock sentence in pure form never lands.

### 17.4 The 5 +2 Trust Emails (Already Listed in Quick Reference)

### 17.5 The 4 Door-Closing Moments (Already Listed in Quick Reference)

---

## 18. CROSS-FLOW THREADS AND CONTINUITY

### 18.1 The Eleven Cross-Flow Threads

| Thread | Emails | Function |
|---|---|---|
| **L2 unlock sentence** | E2, E4, FAQ E5, PP-Ext Edu L2-2, Mary S. Story, Winback A L2-1, Winback B L2-1 | The gravitational center; the L2 conversion engine |
| **60-day + permission** | E3, E8, Cart E3, Browse E3, Checkout E2, FAQ E6, PP-Mid Check-In E2/E3, Replenishment A3, PP-Support E4, Winback A L2-3, Winback B L2-3, Sunset E2 | Risk reversal; the L2 paradox in action |
| **49% Wiggins / SPARK** | E2, E5, Browse E2, PP-Edu D0-21 E3, FAQ E1, Winback A L2-2, Winback B L2-2 | Normalization; the L2 visual signature |
| **Mahler / interoception** | E2, E5, PP-Ext Edu L2-1, FAQ E2, Winback A L2-2, Winback B L2-2 | Mechanism depth; the L2 trust contract |
| **Lena MEDIUM sign-off** | E1–E5 (progression to LONG) | Peer-voice thread; the L2 trust anchor |
| **Lena LONG sign-off** | E8, Winback A L2-3, Winback B L2-3, Sunset E2 | The four door-closing moments; the deepest permission |
| **L2 patience frame** | SHIPPING E2, PP-Edu D0-21 E1/E3, PP-Mid Check-In E1, PP-Support E3, FAQ E2 | Expectation management; the L2 timeline patience |
| **Mary S. founder disclosure** | PP-Mary S. Story E1, PP-Ext Edu L2-2, PP-Ext Edu L2-4, FAQ E5 (implicit) | Founder-as-peer; the L2 trust exceptional moment |
| **Micro-moments vocabulary** | PP-Edu D0-21 E2, PP-Ext Edu L2-5 | The L2 observational language; data-driven moms get vocabulary |
| **BCBA-complement** | E2, E4, PP-Direct Upsell E1/E2, PP-Ext Upsell E1, PP-Ext Edu L2-2/L2-4, Mary S. Story, FAQ E5, Winback A L2-1, Winback B L2-1 | The L2 BCBA-respect engine; the L2 conversion path |
| **60-day-decision-window D60 cluster** | PP-Mid Check-In E2, Replenishment A3, Review E2 (all D60) | Triple D60 touchpoints; the L2 60-day convergence |

These eleven threads are the **structural backbone** of the L2 sequence. Every email is part of at least one thread; the strongest emails (Welcome E2, Welcome E4, FAQ E5) are part of four or more. If any thread is broken, the L2 reader experiences the email as marketing contamination, and trust drops.

### 18.2 Cross-Flow Continuity Rules (Demand §2.5)

- **Cart Abandonment** suppresses Welcome E3+ during active cart (E1–E2 already delivered stay delivered).
- **Winback (A or B)** pauses ALL nurture flows while active — Welcome, PP-Education, Replenishment.
- **Sunset** suppresses ALL flows unconditionally; tag `unengaged = True`, Master Suppression List.
- **PP-Level Detection** is GF-only (L2 is already level-tagged, never receives this flow).
- **Max 1 flow email per subscriber per day** — no double-saturate.
- **Winback A and Winback B** are mutually exclusive — purchase event decides.
- **PP-Support At-Risk** fires only on 3–7 day no-open post-purchase, conditional.

### 18.3 The 60-Day Language Is the Most-Repeated Thread

The 60-day + permission thread appears in 12+ positions across the sequence: Welcome E3, Welcome E8, Cart E3, Browse E3, Checkout E2, FAQ E6, PP-Mid Check-In E2/E3, Replenishment A3, PP-Support E4, Winback A L2-3, Winback B L2-3, Sunset E2. It is the **structural backbone of L2 risk reversal**.

---

## 19. SUPPRESSION & TRIGGER RULES (Consolidated)

| Rule | Source | Effect |
|---|---|---|
| Cart Abandonment suppresses Welcome E3+ during active cart | S01 §3.1 Flow 07 | Welcome pauses; Cart runs |
| Winback (A or B) pauses ALL nurture flows while active | S02 cross-cutting notes | Welcome, PP-Education, Replenishment pause |
| Sunset suppresses ALL other flows unconditionally | S01 §3.3 Flow 27 | Highest priority |
| PP-Support At-Risk only fires on 3-7 days no opens post-purchase | S02 §4.15 | Conditional; pauses regular PP-Education cadence if open-rate drops |
| L3 rule: NEVER push 5+5 | S02 §4.12 | L3: 1-pair → 3+3 at most, organic only |
| L3 NEVER math reframe | S02 §4.20 E4 + L2 avatar §4.1 | Forbidden for L3; allowed (gentle) for L2 |
| Replenishment C sub-flow fires for 5+5 buyers only | S02 §4.16 | Long-haul loyalty path |
| PP-Level Detection is gf-only | S02 §4.9 | Does NOT fire for tagged L2 |
| Max 1 flow email per subscriber per day | S02 cross-cutting | No double-saturate |
| Winback A and B mutually exclusive | S02 cross-cutting | Purchase event decides |

---

## 20. DELIVERABILITY ENVELOPE (Demand §17)

L2 is the **LEAST forgiving segment** — high-open segment, but high-spam-complaint risk if forbidden phrases slip in. Requirements:

- **From-address:** "Lena from BrightKidCo" `<support@send.brightkidco.com>` through Week 6, then `hello@`/`orders@` may be added.
- **Max 1 promo link** per email.
- **No countdown timers, no affiliate links, no hard-sell language.**
- **Reply prompt in EVERY email** — replies are the #1 deliverability signal; L2 is the most likely segment to reply because peer-voice lands.
- **60:40 text:image ratio**; mint/cream/white L2 palette; muted green CTA, 48px min height, NOT full-width.
- **Spam complaint threshold:** <0.01% (warning) / 0.03% (critical). One "Easy potty training in 3 days" email at L2 can spike this; the gate is the gate.

---

## 21. VISUAL CALIBRATION RULES (Per G3 §2.6 + Demand §15.1, §15.7)

**CTA style** — aggression LOW; muted green (same hue as #039902 but desaturated); 48px min height but NOT full-width; softer edges, gentler shadow; soft-action wording ("See the science," "Read the full story," "Try it for 60 days," "Show your BCBA") — never "BUY NOW"; countdown timers NEVER. The L2 CTA is the visual equivalent of permission-not-to-buy.

**Spacing** — 44px section gaps (vs L1 48–64px, L3 56–72px); generous whitespace around the CTA; no clutter; cards with subtle shadows, 12–16px border-radius.

**Color energy** — backgrounds Mint (#DBFFCD) + white; **science callout boxes** in mint-bordered frames around stats, citations, mechanism explanations (the L2 visual signature — the science gets its own frame); Yellow accents (#F5C84B) sparingly for badges/trust signals; Cream (#FBF7EB) for card backgrounds; body text #1A1A1A on off-white #FAF9F7 with high contrast (L2 reads every word, often at 2am).

**Imagery** — kids aged 5–7 (L2 mom doesn't recognize a 3-year-old); sensory context visible (fidget toy, weighted lap pad, sensory-friendly bathroom, OT session); BCBA-respectful (professionals shown calm, competent — never antagonist); mixed-verbal cues (gesture, picture schedules, partial language — NOT full conversation, NOT non-verbal isolation); real parents/kids in real homes (Demand §15.6 — never stock, never cartoon illustrations); micro-moments as the L2 recognition image-language ("wet spot looked at," "Mom's hand on his shoulder during a sensory moment," "OT session calm-down"). NO: full children's faces, crying children, frustrated parent faces, bright cartoon colors, "before/after" comparisons. Image alt-text per V23: "calm/sensory-aware" for L2.

**Stat callout boxes — the L2 visual signature.** Any statistic, citation, or mechanism explanation gets a dedicated mint-bordered frame:

```
┌─────────────────────────────────────────────────┐
│  ★ 49% of autistic 4-5 year olds are not        │
│     toilet trained.                             │
│     Source: SPARK study, Wiggins et al. 2022    │
└─────────────────────────────────────────────────┘
```

The boxed framing tells Lisa: *"this is the science part. Slow down and read it."* Visual equivalent of the 6-element formula's mechanism specificity requirement.

**Photography vs illustration** — photography dominates for L2 (real kids in real bathrooms in real sensory contexts); illustration reserved for mechanism explainers; brand characters used sparingly in educational content only (no Melon Pop in CTA paths).

---

## 22. INCONSISTENCIES FLAGGED AND RESOLVED

| ID | Conflict | Resolution | Source |
|---|---|---|---|
| I02 | Welcome cadence S02 vs S01 | Use S02 | Sequence §1 |
| I05 | PP-Mid Check-In timing (S01 D30-60 vs S02 D45/D60/D75) | Use S02 explicit cadence D45/D60/D75 | Flow-behavior §3.1 |
| I07 | Review Request timing (S01 D21-30 vs S02 D30/D60) | Use S02 | Flow-behavior §3.14 |
| I08 | Sunset trigger (S02 120d inactive post-Winback vs S01 multi-condition) | Use S01 stricter trigger (120d no open AND no click AND no purchase AND received 20+ emails) | Flow-behavior §4.19 |
| I09 | Mary S. Story phase (S01 Phase 1 vs S02 Phase 2) | Recommended Day 3 post-purchase (Phase 2) | Sequence §3.5 |
| I12 | PP-Ext Edu per-email timings | Inferred D30/D50/D70/D100/D130 (S02 leaves unspecified) | Sequence §5.1 |
| I13 | PP-Ext Edu phase (S01 Phase 3 vs S01 Appendix C6 flag) | Resolved as Phase 4 in the L2 sequence | Sequence §5.1 |
| I14 | Winback A phase (S01 Phase 2 vs Phase 3) | Resolved as Phase 4 | Sequence §5.2 |

---

## 23. CROSS-REFERENCES

**Source documents synthesized in this master:**
- `journey-l2-01-avatar.md` §0–§11 — Lisa persona in full depth
- `journey-l2-02-sequence.md` §0–§12 — chronological email engineering spec
- `journey-l2-03-emotional-trust.md` §0–§10 — per-email emotional arc + running Trust Meter
- `journey-l2-04-structural-blueprint.md` §0–§12 — per-email structural engineering + Variance Ledger
- `journey-l2-05-flow-behavior.md` §0–§6 — conversion gates, dead-ends, cross-flow continuity

**Upstream grounding:**
- `GIULIANO-DEMANDS.md` §1, §3, §5–§9, §13–§15, §17, §18, §23, §24
- `01-customer-avatar.md` (synthesis) §3.3, §5–§14
- `g3-brand-marketing-direction.md` §2.6
- `strategy-macro.json` (22 flows / 130 positions filtered to L2)
- `locked-profile.json` (filter `level=l2`)
- `extracted-sections.json`
- `outputs/copy/welcome/welcome-01-e[1-8]-l2.md`
- `outputs/copy/winback-a/winback-a-19-e3-l2.md`
- `outputs/copy/faq/faq-20-e5-l2.md` (L2 unlock sentence in purest form)

**Email-marketing-structure skill** §9.2 (anatomy & variance framework) — informs the 9 variance dimensions and Variance Ledger in `journey-l2-04-structural-blueprint.md`.

**Sister documents (parallel structure, different levels):**
- `journey-l1-MASTER.md` (when assembled) — Pre-K deadline pressure
- `journey-l3-MASTER.md` (when assembled) — Dignity-preservation; never push 5+5; never math reframe

---

## 24. INDEX

**A**
- Absolution — Welcome E4, Welcome E8, FAQ E1, FAQ E6
- "amazing," "incredible," "life-changing" — forbidden brand-wide
- AI-isms — forbidden ("revolutionary," "transformative," "leverage," "empower")

**B**
- BCBA — highest-trust authority for L2; never criticized; always complemented
- BCBA fact sheet (bi-weekly) — highest-leverage L2 conversion tool (Demand §23)
- Browse Abandonment (Flow 4) — 3 emails; does not suppress Welcome
- Bundle ladder — 1-pair → 3+3 → 5+5 (L2 allowed; L3 NOT allowed)

**C**
- Cart Abandonment (Flow 2) — 3 emails; suppresses Welcome E3+ during active cart
- Checkout Abandonment (Flow 3) — 2 emails; no additional discount
- Clinical warmth — the L2 energy; warmth of a thoughtful specialist, not a peer-mom
- Conversion gates (G1–G6) — Demand §23; non-negotiable
- Conversion rate — ~35–45% by day 21
- Conversion shift — defensive → scientific-evaluator; Welcome E2

**D**
- Dead-end taxonomy — silent immunity, mid-funnel stall, emotional lock failure, post-purchase crash
- Defense cracked — Trust 39 (Welcome E1)
- Decision-ready — Trust 48 (Welcome E8)
- Defensive-evaluation mode — starting mode at Trust 38
- D60 cluster — PP-Mid Check-In E2, Replenishment A3, Review E2 (all D60)
- Door-stays-open — the conversion lever; permission-not-to-buy
- Door-closing moments — Welcome E8, Winback A L2-3, Winback B L2-3, Sunset E2

**E**
- Email positions total — ~46 de-duplicated (welcome 8 + abandonment 8 max + transactional 4 + PP-edu 4 + PP-upsell 2 + PP-support 4 conditional + replenishment 2–5 + review 2 + PP-extended-edu 5 + winback 3 + winback-B 3 + referral 3 + faq 6 + sunset 2)
- Expectation management — Shipping E2 + PP-Edu D0-21 E1/E3
- "Easy," "Simple" — universal forbidden

**F**
- FAQ/Objection Library (Flow 20) — 6 emails; level-specific blocks
- First-wear trust — Trust 60 (PP-Edu D0-21 E1)
- Flows total — 22 in `strategy-macro.json`
- Forbidden phrases — Easy, Simple, Quick, Guaranteed, Miracle, Cure, Fix, Solve, "Just trust the process," "Don't give up!," "Your child should…," "Have you tried [obvious]?," "Just be more consistent," NT comparison, aggressive BCBA criticism, fake urgency, AI-isms, countdown timers
- 4-step reframe — Name → Validate → Reframe → Absolve

**G**
- Gates (G1–G6) — symptom recognition, mechanism, BCBA, timeline, guarantee, permission
- Guarantee, 60-day — surfaced with any CTA; "60 days. By your judgment."

**H**
- Hample 2020 — FAQ E6 citation (hope-crash fear)
- Hope/realism — 40/60 at signup; ~55/45 post-recognition; 35/65 in conversion and PP mid; 35/65 fixed in lifecycle

**I**
- Interoception — Mahler 8 senses; "the signal arrives late, weak, or not at all"
- Iqbal 2022 — Welcome E5 citation
- Inconsistencies — I02, I05, I07, I08, I09, I12, I13, I14 (see §22)

**L**
- L2 paradox — the more we let her leave, the more she stays
- L2 unlock sentence — "Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address."
- Lena MEDIUM sign-off — "Talk soon," (E1–E2); "With understanding," (E3–E5)
- Lena LONG sign-off — "With care, Lena." + LONG permission sentence (E6+, E8, Winback, Sunset)
- Logo — Mary S. (founder) and Lena (customer support / mom) never mixed
- LONG sign-off — "If this isn't the day, that's okay. The product will be here next month. So will I."

**M**
- Mahler, Kelly — "interoception researcher," NOT "our partner"; 8 interoceptive senses
- Mary S. — founder; appears ONCE (PP-Mary S. Story E1); "9 months" timeline; "we worked with our BCBA, not against her"
- Math reframe — allowed for L2; FORBIDDEN for L3
- McElhanon et al. 2014 — FAQ E3 citation (GI/withholding)
- Mechanism click — "oh, that's why" realization; Welcome E2
- Method inventory (3+ must be named) — sticker charts, M&M, prize box, Oh Crap, every-30-min timers, naked weekends, social stories, ABA protocols, OT sensory, multiple trainer brands, environmental hacks, consultants, dietary
- Mid-cycle trust — Trust 65 (PP-Mid Check-In E2)
- Mint-bordered callout boxes — the L2 visual signature
- Mode transitions — defensive → scientific-evaluator → decision-ready → cautious-investor → cautious-retention → brand-advocate

**N**
- Nicholson et al. 2019 — FAQ E1 citation ("tried everything"); Welcome E5
- NT comparison — forbidden
- "Now or never" — forbidden

**O**
- "Oh, that's why" — mechanism click; the intellectual reframe

**P**
- Permission-not-to-buy — explicit or implicit; the L2 paradox in action
- PP-Direct Upsell (Flow 8) — 2 emails, level-aware framing
- PP-Education D0-21 (Flow 11) — 4 emails; workhorse
- PP-Extended Education L2-themed (Flow 14) — 5 emails; D30/D50/D70/D100/D130
- PP-Extended Upsell (Flow 12) — 3 emails; D28/D35/D42
- PP-Mary S. Story (Flow 10) — 1 email; D3 post-purchase (placement disputed)
- PP-Mid Check-In (Flow 13) — 3 emails; D45/D60/D75
- PP-Support At-Risk (Flow 15) — 4 emails; conditional on no-opens
- Pre-flight checklist — 6 elements; unchecked = DO NOT SEND

**Q**
- "Quick" — L2 most-dangerous word (Demand §8.6)
- "Quiet desperation" — 2am Google, SPARK forum — Lisa's research habitat

**R**
- Recognition moment — 3+ symptom matches; "yes, yes, yes, exactly"
- Replenishment A/B/C (Flow 16) — sub-flows keyed to original purchase (1-pair / 3+3 / 5+5)
- Review Request (Flow 17) — 2 emails; D30/D60
- Risk reversal — 60-day guarantee + permission-not-to-buy
- "Risk-free" — forbidden; use "60-day money back"

**S**
- School/home paradox — the L2 fingerprint; "Went 4/4 today!" at school, no initiation at home
- Scientific-evaluator mode — post-E2; reads more carefully; checks science; considers showing BCBA
- Sign-off progression — SHORT (E1–E2) → MEDIUM (E3–E5) → LONG (E6+)
- Sunset (Flow 22) — 2 emails; HIGHEST PRIORITY; suppresses ALL flows unconditionally
- SPARK 49% — Wiggins et al. 2022; the L2 normalization anchor
- Stat callout boxes — mint-bordered; the L2 visual signature
- Suppression hierarchy — Cart → Welcome E3+; Winback → all nurture; Sunset → all

**T**
- Three-Family Pattern — Sarah / Lisa / Maria testimonial template
- Timeline, realistic — "8–12 weeks for most kids. Some longer"; 60 days in some cases; Mary S. 9 months; some L2 families at week 12+
- Trust ceiling — 76/100 for retained customers (highest of any level)
- Trust Meter — 38 → 39 → 41 → 42 → 44 → 45 → 46 → 47 → 48 → 49–51 (Browse) → 52–54 (Cart) → 54 (Checkout) → 55–63 (Phase 2) → 64–71 (Phase 3) → 72–76 (Phase 4)
- Trust Threshold Test — 3 questions: 30-second filter? Names her experience? Lets her leave?

**U**
- Unlock sentence, L2 — see L2 unlock sentence
- "Urgent!" / "Limited time!" — forbidden

**V**
- Variance Ledger — 9 dimensions across L2 emails; threshold <6/9 = desensitization risk
- Visual signature — mint-bordered science callout boxes
- V17 — never pit caregiver roles against each other
- V23 — image alt-text "calm/sensory-aware" for L2

**W**
- Welcome E1–E8 — the conversion engine
- "We miss you" — FORBIDDEN
- Winback Path A (Flow 18) — 3 L2-themed; D90/D105/D120 post-purchase
- Winback Path B (Flow 19) — 3 L2-themed; D60/D80/D100 never-bought
- Wiggins et al. 2022 — SPARK 49% statistic

---

## 25. END STATEMENT

Lisa is the largest segment (~40%), the most skeptical, and the most methodically evaluated prospect. She is one mechanism reframe away from converting, if we don't blow it with marketing polish first.

The L2 conversion engine is **the contract.** Every email is a renewal. Every ignored email is a contract that is held but not signed. Every dead-end is a contract that the L2 reader chose to walk away from. The flow behavior is the state machine of that contract — the engineering spec for how each renewal or termination changes the L2 reader's trust state, and what the next email must do to keep her in the system.

The 6-element L2 formula is the contract template. The L2 unlock sentence is the contract's gravitational center. The forbidden-phrase audit is the contract's negative space. The Trust Meter is the contract's running ledger. The cross-flow threads are the contract's continuity. The eleven cross-flow threads are the structural continuity contract that runs through every email. Marketing polish triggers her skepticism; mechanism specificity converts her. Permission-not-to-buy is the lever that paradoxically accelerates conversion.

The L2 trust ceiling is **76/100** — the highest of any level — and once earned, L2 trust is the **most durable**, structurally reinforced by the 3-Layer Trust Architecture (intellectual + emotional + relational) and the L2 unlock sentence that holds throughout.

**When in doubt:** Return to the **6-element formula**, the **forbidden phrase list**, the **L2 unlock sentence**, and the **trust meter.**

> *"Your BCBA has been doing the hard work. Body-signal learning is the missing layer."*
>
> *"If this isn't the day, that's okay. The product will be here next month. So will I."*

**End.**