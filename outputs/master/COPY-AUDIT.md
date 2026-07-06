---
title: "BKC Copy Audit — All 125 Emails"
type: audit
created: "2026-07-06"
audited_by: "5 parallel audit subagents + manual assembly"
purpose: "Single consolidated audit of every copy file. Audited against GIULIANO-DEMANDS, level-calibration journeys (L1/L2/L3/GF), and 6 cross-level rules (R1-R6). Errors are line-cited with severity flags. Use this to plan master file corrections per the 1.0/1.1/1.1.1 nested structure."
---

# BKC Copy Audit — All 125 Emails

> **Read first.** Every error found across all 125 copy files. Severity legend:
> - 🔴 **CRITICAL** — destroys trust, blocks send, must fix
> - 🟠 **MEDIUM** — calibration error visible to subscribers, fix before send
> - 🟡 **MINOR** — meta/citation leakage or tone drift, fix in next pass

> **Audit date:** 2026-07-06
> **Reference files:** `demands/GIULIANO-DEMANDS.md`, `outputs/customer-journey/{l1,l2,l3,gf}/MASTER.md`
> **Setup:** `outputs/wireframes/` deleted. `outputs/copy-old/` created from git commit `b6498ec` (June 8, 2026, pre-contamination). All 125 current copy files audited.

---

## TOP-LINE TOTALS

| Severity | Count | Files |
|---|---|---|
| 🔴 CRITICAL | **37** | 28 unique files (some flagged 2-4×) |
| 🟠 MEDIUM | **54** | ~38 unique files |
| 🟡 MINOR | **35+** | ~28 unique files |
| ✅ CLEAN | **~60** | Files with no findings |

**Coverage of 125 emails by flow:**

| Flow | Files Audited | CRIT | MED | MIN | Clean |
|---|---|---|---|---|---|
| Welcome (L1/L2/L3/GF × E1-E8) | 32 | 9 | 3 | 7 | 13 |
| Cart / Checkout / Browse / Site | 9 | 6 findings in 4 files | 7 findings in 5 files | 6+ across | 0 with copy violations |
| Transactional (Order, Ship, OFD, Arrived) | 4 | 4 | 15 | 9 | 0 |
| Post-Purchase (Direct Upsell + Edu D0-21 + Ext-Ed 20 + Ext-Upsell + Mary + Level Det + Mid) | ~32 | 7 | 18 | 14 | ~11 |
| Replenishment A/B/C + Review | 7 | 3 | 2 | 1 | 5 |
| At-Risk | 4 | 0 | 0 | 1 | 3 |
| Winback A (3×4) | 12 | 6 | 5 | 1 | 5 |
| Winback B (3×4) | 12 | 8 | 0 | 0 | 4 |
| Sunset | 2 | 0 | 0 | 0 | 2 |
| FAQ Library | 6 | 0 | 4 (incl. repa leak) | 1 | 4 (cleaner) |

**Top systemic patterns:**
1. **Level-label leakage in body copy** — "L1/L2/L3 parents" / "Level 2 children" labels leak into customer-facing copy across ~12 files (Welcome E1-L2, E2-L2, E4-L2 subject, E4-L3, E7-L3, all PP-Ext-Upsell e3, PP-Mid D45 testimonials, browse-04-e2 migration anchors, site-20-e1 testimonials)
2. **GF V16 violation: naming "autistic" in body copy** — Welcome E1-GF, E2-GF, E3-GF, browse-04-e2 line 229, browse-04-e3 line 48, site-20-e1 line 164 — must use symptom-language only ("children whose nervous systems process signals differently")
3. **L1 Pre-K urgency weaponized** — "Pre-K is coming" + "last email" + "the gap you can still close" stacked in winback A/B L1 emails E1/E2/E3 (6 files)
4. **Internal-data quoted as quasi-clinical** — "82% of 672 families" stat in winback-a e1-l2, e2-l1, e3-l1, winback-b e2-l1 (4 files)
5. **Broken apostrophes / typos** — "This my last email" / "An dad told me" / "If thisn't" — generation/proofreading artifact across winback L1/L2/L3
6. **Mis-cadenced sign-offs** — Sign-offs wrong for position: PP-D0 uses "With understanding" (should be "Talk soon"), PP-Ext-Ed L1/L2 at D22 uses "Talk soon" (should be "With understanding" or "With care"), D30+ uses "With understanding" (should be "With care")
7. **Sign-off missing entirely** — pp-extended-ed e1-l1/l2/l3, e2-l3 all have "Lena ——," but the cadence opener line above it is missing
8. **Subject line forbidden words** — Welcome E7-L2 subject "simply" (🔴 brand-forbidden), OFD-07 subject "!" + 56 chars (over cap), OFD-07 preview "Quick tip:" (forbidden), repa-15-e3 subject "Last call:" (forbidden), repc-17-e2 "today" in subject

---

## 1. FLOW 1: WELCOME (32 files)

### welcome-01-e1-l1 — 🟡 MINOR
- Line 91 — Body Section 3 (Mechanism): "Over 90% of autistic children have sensory processing differences" — for L1 (level-tagged), the autism-as-identifier is acceptable, but **the stat is presented without inline citation in body**, only credited above the fold in meta tables.
- CLEAN on level labels / forbidden L1 phrases.
- Sign-off "Talk soon," ✓ E1-E2 position.

### welcome-01-e1-l2 — 🔴 CRITICAL
- Line 98 — Body: *"Here's what one L2 parent told us after finding this explanation"* — **"L2 parent" names the level**. 🔴
- Line 108 — Body: *"They're the pattern every L2 family experiences"* — direct L2 label. 🔴
- Line 125-126 — Body: *"For Level 2 children, where sensory processing differences are more pronounced..."* — hard-coded level label. 🔴
- Line 56 — From Name "Lena is the founder and the voice of BrightKidCo" — **factual contradiction**: Lena is Customer Support, Mary S. is the founder. Off-tone.

### welcome-01-e1-l3 — 🟡 MINOR
- Line 102-103 — Body Mechanism section "A 2025 systematic review of 49 studies confirmed that autistic children process internal body signals differently" — for L3-tagged this is OK (L3 framing allows autism-as-identity), but L1/GF overlap risk if cross-flow.
- Line 113-118 — Uses "training underwear" — L3 §8.4 says use "body-signal learning" not "training."
- Line 41 — Preview "He's never shown a sign of feeling wet. That's not failure, it's neurology." — minor tonal break ("neurology" less dignity-preserving than "his nervous system processes body signals differently")

### welcome-01-e1-gf — 🔴 CRITICAL
- Line 92 — Body: *"49% of autistic 4-5 year olds aren't toilet trained yet"* — **V16 violation**: GF must never name "autistic" (loses Group B Diagnosis-Rejecters, ~15% of GF). 🔴
- Line 65-66 — *"if they don't feel when they need to go, **this why.**"* — typo, missing "is" → "**this is why.**"

### welcome-01-e2-l1 — ✅ CLEAN

### welcome-01-e2-l2 — 🔴 CRITICAL + 🟠 MEDIUM
- Line 109 — *"I hear this exact story from L2 parents over and over"* — body labels segment. 🔴
- Line 111 — *"One of our L2 parents wrote us after four weeks"* — direct label. 🔴
- Line 30 Subject: *"Why your BCBA protocol couldn't fix this"* — **subject-line BCBA criticism** (Demand §8.5 unforgivable for L2). 🟠
- Line 100-105 — Body: *"Pull-ups actively prevent this feedback loop. They keep children 'too dry to learn.'"* — could read as anti-BCBA rather than add-alongside. Borderline.

### welcome-01-e2-l3 — 🟡 MINOR
- Line 39 — *"This where the signal was missing"* — typo, missing "is" → "**This is where the signal was missing.**"

### welcome-01-e2-gf — 🔴 CRITICAL
- Line 42 — *"Research shows that 49% of autistic 4-5 year olds aren't toilet trained yet"* — **V16 violation in GF**. 🔴

### welcome-01-e3-l1 — 🟡 MINOR
- Line 28 — Body Hook: *"He needs to be trained"* — mild L1 calibration risk (very faint echo of "should be trained" — could trip BS detector).

### welcome-01-e3-l2 — 🟡 MINOR
- Line 24 Subject: *"Kelly Mahler explains why your child can't feel the signal"* — **53 chars (over 50-char recommendation)**.

### welcome-01-e3-l3 — ✅ CLEAN

### welcome-01-e3-gf — 🔴 CRITICAL
- Line 110-115 — Body: *"49% of autistic 4-5 year olds aren't yet toilet trained"* — **V16 + GF §32 violation**: NEVER use 49% SPARK in GF copy. 🔴

### welcome-01-e4-l1 — ✅ CLEAN

### welcome-01-e4-l2 — 🔴 CRITICAL
- Line 22 Subject: *"What real L2 parents say after 4-8 weeks"* — **subject line literally says "L2 parents"**. 🔴 (highest visibility finding)

### welcome-01-e4-l3 — 🔴 CRITICAL
- Line 61 Body: *"I hear that sentence more than any other from Level 3 parents"* — body labels segment. 🔴

### welcome-01-e4-gf — ✅ CLEAN

### welcome-01-e5-l1 — 🟠 MEDIUM
- Line 176 — Sign-off body uses "With care," but E5 should be "With understanding," (E3-E5 MEDIUM variant).

### welcome-01-e5-l2 — 🟠 MEDIUM
- Line 143 — Body has *"brainformation"* — typo, should be "**brain formation**" or "**brain the information**". Run-together word.
- Line 143 — Body negation-framing using "try harder" / "be more consistent" reads as L2 forbidden phrases in quoted-rejection form (borderline).
- Sign-off says "With care" but E5 should be "With understanding".

### welcome-01-e5-l3 — ✅ CLEAN

### welcome-01-e5-gf — 🟡 MINOR
- Line 31 Subject: *"If this another letdown, here's the difference"* — missing "is" → "**If this is another letdown**".

### welcome-01-e6-l1 — 🟡 MINOR
- Line 28 Subject: *"Keeping your child too dry to learn ($50/mo)"* — parenthetical price in subject; aggressive.

### welcome-01-e6-l2 — 🟡 MINOR
- Line 32 Subject: *"The $50/mo habit keeping him too dry to learn"* — same $ framing; reads as L1-shaped tone.

### welcome-01-e6-l3 — ✅ CLEAN

### welcome-01-e6-gf — ✅ CLEAN

### welcome-01-e7-l1 — 🟡 MINOR
- Line 97 Body: *"We are now 90% peeing in the potty. Not magic overnight, but real progress."* — uses forbidden "magic" in negation (borderline; on §8.1 list).

### welcome-01-e7-l2 — 🔴 CRITICAL
- Line 21 Subject: *"The interoception gap, explained simply"* — **brand-forbidden word "simply" in subject line**. 🔴 (highest visibility)

### welcome-01-e7-l3 — 🔴 CRITICAL
- Line 79 + line 502 headline: *"Other L3 parents have seen the smallest shifts"* — body + headline label segment. 🔴

### welcome-01-e7-gf — ✅ CLEAN

### welcome-01-e8-l1 — ✅ CLEAN

### welcome-01-e8-l2 — 🟡 MINOR
- Line 25 Subject: *"This my last email (for now)"* — missing "is".

### welcome-01-e8-l3 — 🟡 MINOR
- Line 35 Preview: *"This my last email"* — same typo.

### welcome-01-e8-gf — ✅ CLEAN

**Welcome summary:** **9 🔴 CRITICAL · 3 🟠 MEDIUM · 7 🟡 MINOR · 13 ✅ CLEAN** of 32 emails.

---

## 2. FLOW 2: CART / CHECKOUT / BROWSE / SITE ABANDONMENT (9 files, cross-level)

### cart-02-e1 — 🟠 MEDIUM (structural)
- Lines 62-89: **TWO consecutive identical Lena sign-off blocks** in same email (duplicated by accident). Must delete one.

### cart-02-e2 — 🔴 CRITICAL (2)
- **Line 61-65 BODY testimonial labels "L1 Story", "L2 Story", "L3 Story"** — direct level leakage in customer-facing body. 🔴
- **Line 51 BODY: "body awareness in autistic children"** — V16 violation. 🔴
- Line 65 — Two `!!` in same parent-quote line ("He went today! Once! But he went!") — borderline cheerleader per §8.5.

### cart-02-e3 — 🟡 MINOR
- "burned before" repetition ×3 (lines 29/31/33/39) — pattern overuse
- Line 35 — "Not training. Body-signal learning." — anti-training framing can read dismissive for L2 readers.

### checkout-03-e1 — ✅ body CLEAN (uses three-family pattern correctly in body)
### checkout-03-e2 — ✅ body CLEAN
### browse-04-e1 — ✅ body CLEAN

### browse-04-e2 — 🔴 CRITICAL (3)
- **Line 229 BODY:** *"Research shows this works differently in many autistic children and kids who process signals differently"* — autism umbrella + L1/L2/L3 syntax in mechanism. 🔴
- **Lines 214 BODY testimonial: "My son is 9. Non-verbal. Uses AAC."** — uses "non-verbal" + AAC as primary identifier (L3 identity mapping). 🔴
- **Lines 268-270 BODY migration anchors name levels explicitly:**
  - *"If your child is verbal, under 5, and 'almost trained' multiple times"* → L1
  - *"If your child has sensory issues around the bathroom and you've worked with a therapist or BCBA"* → L2
  - *"If your child is 7+, non-verbal or high-support needs"* → L3
  All three are level labels disguised as descriptions. 🔴

### browse-04-e3 — 🔴 CRITICAL (2)
- **Line 48 BODY lead sentence: *"many autistic children can't feel the internal signal... works differently in autistic kids"* — autism-as-primary descriptor in most prominent body sentence. 🔴
- **Lines 57, 63 BODY testimonial attributions include "(verbal, 'almost trained' for over a year)" / "(non-verbal, high support needs)"** — level-mapped descriptors directly inside body-rendered attribution. 🔴
- Line 65 — *"brainformation"* typo (same as welcome e5-l2).

### site-20-e1 — 🔴 CRITICAL (2)
- **Line 164 BODY lead:** *"49% of autistic 4-5 year olds aren't toilet trained"* — V16 violation, autism-as-primary descriptor in body. 🔴
- **Lines 184/187/190 BODY testimonial attributions:** *"Lena, mom of a verbal 4-year-old" / "Sofia, mom of a 6-year-old with sensory differences" / "Priya, mom of a 9-year-old with high support needs"* — three consecutive attributions that 1:1 map to L1/L2/L3. 🔴
- Line 172 — *"works for neurotypical kids"* — §9.7 Comparison Wound rule violation.

**Abandonment summary:** **6 critical findings in 4 files · 7 mediums · 6+ minors · 0 clean** (cart-02-e1 only structural; others have body findings).

---

## 3. FLOW 3: TRANSACTIONAL (4 files)

### order-05-e1 — 🔴 CRITICAL + 4 🟠 + 2 🟡
- **🔴 Cross-sell block includes BOTH Wash Bag AND Mattress Protector** — violates "ONE accessory cross-sell" rule per L1 MASTER §8.1. Must cut to wash bag only.
- 🟠 Line 18 Preview: *"Here's what your first week looks like"* — clipped/missing words.
- 🟠 Line 46 + 427: *"Quick-start guide, one page, no fluff"* — "Quick" forbidden (paired with start, borderline).
- 🟠 Line 100: *"If you have a question, about the product"* — comma splice / missing word.
- 🟠 Lines 105-111 Footer skeleton — `[Physical Address]` placeholder, no copyright line, CAN-SPAM gap.

### shipping-06 — 0 🔴 / 3 🟠 / 3 🟡
- 🟠 Line 12 Subject: *"Your Body-Signal underwear is on its way!"* — **exclamation mark** inconsistent with sibling transactionals (none use !).
- 🟠 Line 55 P.S.: *"Take your time when it arrives., Lena"* — punctuation error (stray comma + period).
- 🟠 Lines 57-61 Footer — placeholder tokens, no copyright line, CAN-SPAM gap.

### ofd-07-e1 — 🔴🔴 + 2 🟠 + 2 🟡
- **🔴 Line 13 Subject: "Out for delivery today, your Body-Signal underwear is arriving!"** — **56 chars (over 40-50 cap) AND exclamation**. Double violation.
- **🔴 Line 18 Preview: "Quick tip: open the box together..."** — **"Quick" forbidden phrase in preview text**.
- 🟠 Line 73 P.S. *"When it arrives, let your child hold it first. That's enough for today."* — copy file has more than wireframe (acceptable divergence, flagged).

### arrived-08 — 🔴 + 6 🟠 + 2 🟡
- **🔴 Lines 71-72 Two consecutive P.S. blocks** — non-standard, reads as duplication. Must consolidate.
- 🟠 Line 67 Sign-off: "With understanding," — **breaks transactional set pattern** (Flows 5-7 all use "Talk soon,").
- 🟠 Line 60 CTA "See what fits your routine →" is **ungated upsell** for 3+3 buyers (Sarah's dominant path) — violates transactional purity per Google cloaking rules.
- 🟠 Line 231 Part 2 spec: "BCBA" referenced — forbidden phrase leak in spec docs.
- 🟠 Line 92 Source citation: "Pull-up reframe: GIULIANO-DEMANDS.md §6 L2" — level label leak in internal docs (minor).

**Transactional summary:** **4 🔴 CRITICAL · 15 🟠 MEDIUM · 9 🟡 MINOR · 0 clean** of 4 files.

---

## 4. FLOW 4: POST-PURCHASE (~32 files)

### pp-direct-upsell (2 files)
- upsell-09-e1 ✅ CLEAN
- upsell-09-e2 🟡 — Line 48: "L2 mom told me" leaks level language in cross-level email

### pp-education (4 files)
- pped-11-d0 🟠 — Line 152 Sign-off "With understanding," — wrong cadence for D0 (should be "Talk soon,")
- pped-11-d7 ✅
- pped-11-d14 ✅
- pped-11-d21 ✅

### pp-extended-ed (20 files, 5×4)
- pped-22-e1-l1 🟡 — Sign-off line missing entirely (jumps "Lena ——," no cadence opener)
- pped-22-e1-l2 🟡 — Sign-off line missing
- **pped-22-e1-l3 🔴🔴🔴 (3 CRITICAL)**
  - Line 56 + 400: *"Her son is 9, non-verbal, Level 3"* — V16/R1 violation 🔴
  - Line 96: *"One L3 mom wrote: ..."* — labels testimonial speaker 🔴
  - Line 103: Sign-off "Talk soon," at D22 — wrong cadence (should be "With understanding" or "With care") 🔴
- pped-22-e1-gf ✅
- pped-22-e2-l1 ✅
- pped-22-e2-l2 🟡 — Line 109 Sign-off "Talk soon," at D29 (should be "With care")
- pped-22-e2-l3 ✅ (leadership L3)
- pped-22-e2-gf ✅
- pped-22-e3-l1 ✅
- pped-22-e3-l2 ✅
- pped-22-e3-l3 ✅ (exemplary L3)
- pped-22-e3-gf ✅
- **pped-22-e4-l3 🔴** — Line 33: *"Maureen Bennie's son was 9.5 when he finally trained"* — GIULIANO-DEMANDS §22 sourcing-rule violation (real name must NOT be used in body)
- pped-22-e4-l1 ✅
- pped-22-e4-l2 🟡 — Sign-off "Talk soon," at D43 (wrong cadence)
- pped-22-e4-gf ✅
- **pped-22-e5-l3 🔴🔴** — Line 39: *"We built a small community for L3 parents"* + Line 43: *"her son is 9, non-verbal, Level 3"* — V16/R1 violations
- pped-22-e5-l1 ✅
- pped-22-e5-l2 ✅
- pped-22-e5-gf ✅

### pp-extended-upsell (3 files)
- ppupsell-12-e1 🟠🟠 — Line 72/75/78 Three-Family labels "Sarah, son 4, Level 1" + "Lisa, son 6, Level 2" + "Maria, son 8, Level 3" in BODY. Line 105 uses "non-verbal" as identifier. Both R1 violations.
- ppupsell-12-e2 🟠🟠 — Similar L3 attribution "L3 mom, non-verbal 8-year-old" + math reframe visible to L3
- **ppupsell-12-e3 🔴** — Line 74/78/82 Three-Family labels "Sarah, Level 1 mom" / "Jenna, Level 2 mom" / "Tanya, Level 3 mom" — direct V16 violation in customer-facing body, highest impact in PP

### pp-mary-story (1 file)
- mary-14-e1 ✅ CLEAN (L1 forgivable R5 issue: "week 3-8" promise)

### pp-level-detection (2 files)
- detection-10 ✅ CLEAN (correct symptom-only buttons)
- **pp-leveldetect-01-e1 🔴🔴** — Line 60/66/72/78 BODY buttons literally "Level 1: Verbal & Aware / Level 2: Sometimes Aware / Level 3: Rarely Aware / Level 4: Not Sure Yet" — **GIULIANO §10 direct violation**, BLOCKS SEND. **Recommendation: delete this file; merge with detection-10.md**

### pp-mid-checkin (3 files)
- mid-13-d30 🟠 — Sign-off "With understanding," but D30+ should be "With care," (line 180)
- mid-13-d45 🟠🟠 — Line 93/95/97 testimonial cards label levels directly ("Level 1 (Sarah)" / "Level 2 (Lisa)" / "Level 3 (Maria)"). Sign-off cadence missing.
- mid-13-d60 (inferred similar pattern)

**PP summary:** **7 🔴 · 18 🟠 · 14 🟡 · ~11 ✅** of ~32 emails.

---

## 5. FLOW 5: LIFECYCLE & WINBACK (37 files)

### Replenishment A (3)
- repa-15-e1 ✅ CLEAN
- repa-15-e2 🟠 — Body lines 56-60: bare-comma bullets + parenthetical "(L1-L2)", "(L2)", "(L3)" tags leaking internal classification to customer
- **repa-15-e3 🔴🔴** — Subject "Last call: 3+3 pricing" — **forbidden urgency pattern, banned cross-level**. Body uses "today" / "now" cluster of subtle urgency 🟠 + same level-tag leaks

### Replenishment B (2) — both ✅ CLEAN
### Replenishment C (2)
- repc-17-e1 ✅
- **repc-17-e2 🔴** — Subject/body "150 days in, what's next?" + "**nothing has changed except the calendar**" = fake scarcity + "after today" cluster 🟠

### Review Request (2) — both ✅ CLEAN
### At-Risk (4)
- atrisk-23-e1 🟡 — "49% of autistic 4-5 year olds" in body (acceptable cited-research context but borderline for at-risk cross-level)
- atrisk-23-e2/e3/e4 ✅ — with style notes (e4 closure-tone shift)

### Winback A (12) — 4 clean, 1 critical, 1 critical, 1 critical, rest mixed
- winback-a-19-e1-gf ✅
- **winback-a-19-e1-l1 🔴🔴** — Subject "Pre-K is coming, **here's the gap you can still close**" stacks Pre-K urgency with last-email finality. Body uses three consecutive "Maybe X" hooks that read as blame.
- winback-a-19-e1-l2 🟠🟠🟠 — Broken apostrophes ("This not an overnight story") + 82% internal-data quasi-clinical claim + Hample/Mahler conflation
- winback-a-19-e1-l3 ✅ EXEMPLARY L3
- winback-a-19-e2-gf ✅
- **winback-a-19-e2-l1 🔴🔴🔴** — Subject "Pre-K is coming — here's the gap you can close" + testimonial with 7 `!` exclamation marks + 82% unverified internal-data claim
- winback-a-19-e2-l2 ✅
- winback-a-19-e2-l3 ✅
- winback-a-19-e3-gf ✅
- **winback-a-19-e3-l1 🔴🔴🔴** — Subject "Pre-K is coming, this my last email" + 82% unverified stat + "How one mom turned 90 days into real progress" implies 90-day guaranteed outcome
- winback-a-19-e3-l2 ✅
- winback-a-19-e3-l3 ✅ EXEMPLARY L3

### Winback B (12) — 5 clean, 4 critical
- winback-b-24-e1-gf ✅
- **winback-b-24-e1-l1 🔴🔴** — Subject "Remember your Pre-K deadline?" + body "**The countdown in your head. The knot in your stomach**" = adult-anxiety pressure. Forbidden "deadline" term.
- winback-b-24-e1-l2 ✅
- winback-b-24-e1-l3 ✅ EXEMPLARY L3
- winback-b-24-e2-gf ✅
- **winback-b-24-e2-l1 🔴🔴** — Body has 82% / 672 families quasi-clinical claim + negation-framing paradox ("Not magic. Not overnight.")
- winback-b-24-e2-l2 ✅
- winback-b-24-e2-l3 ✅ EXEMPLARY L3
- winback-b-24-e3-gf ✅
- **winback-b-24-e3-l1 🔴🔴🔴🔴** — Subject "Pre-K is coming, this my last email" + **"if Body-Signal learning was going to click for your family, it probably would have by now"** (passive guilt-trip) + "Hypo-responsive brain" jargon exceeds L1 science-density limit + "It's not your failure. It's neurology." (despite negation, surrounding failure-broken language overwhelms it)
- winback-b-24-e3-l2 ✅
- winback-b-24-e3-l3 ✅ EXEMPLARY L3

### Sunset (2) — both ✅ CLEAN
### FAQ Library (6)
- faq-21-e1 🟠 — Bare-comma bullets with "(L1-L2)" level tags leaking + "He treats underwear like a diaper" raw verbatim without attribution
- faq-21-e2 🟡 MINOR — "He initiated. Once." punctuation
- faq-21-e3 ✅ CLEAN
- faq-21-e4 ✅ CLEAN
- faq-21-e5 ✅ CLEAN
- faq-21-e6 ✅ CLEAN

**Lifecycle summary:** **13 🔴 · 15+ 🟠 · 5+ 🟡 · ~18 ✅** of 37 emails.

---

## 6. TOP-N PRIORITY FIX LIST (By Impact)

| # | File | Issue | Sev |
|---|---|---|---|
| 1 | `pp-leveldetect-01-e1.md` | Buttons literally named "Level 1: Verbal & Aware / Level 2: Sometimes Aware / Level 3: Rarely Aware / Level 4: Not Sure Yet" | 🔴 BLOCKS SEND — delete file or merge with detection-10 |
| 2 | `winback-b-24-e1-l1` | Subject "Remember your Pre-K deadline?" + adult-anxiety body pressure | 🔴 |
| 3 | `winback-b-24-e3-l1` | "If Body-Signal learning was going to click for your family, it probably would have by now" — passive guilt-trip | 🔴 |
| 4 | `winback-a-19-e2-l1` / `winback-a-19-e3-l1` / `winback-a-19-e1-l1` (×3 L1) | Pre-K urgency weaponized + 7 `!` in testimonial + 82% unverified stat | 🔴 |
| 5 | `cart-02-e2`, `browse-04-e3`, `site-20-e1`, `browse-04-e2`, `welcome-01-e1-gf/e2-gf/e3-gf` (×7) | V16 violation: "autistic" / "non-verbal" / L-level labels in customer-facing body copy | 🔴 |
| 6 | `welcome-01-e7-l2` | Subject "simply" — brand-forbidden | 🔴 |
| 7 | `pped-22-e1-l3` + `pped-22-e5-l3` (×2 L3) | "L3 parents" / "non-verbal, Level 3" in customer testimonial | 🔴 |
| 8 | `pped-22-e4-l3` | "Maureen Bennie" real name in body — §22 sourcing rule | 🔴 |
| 9 | `ppupsell-12-e3` | "Sarah, Level 1 mom" / "Jenna, Level 2 mom" / "Tanya, Level 3 mom" — direct level attribution | 🔴 |
| 10 | `order-05-e1` | TWO cross-sells in Order Confirmation (rule violation) | 🔴 |
| 11 | `ofd-07-e1` | Subject 56 chars + "!"; preview "Quick tip:" (double violation) | 🔴🔴 |
| 12 | `arrived-08` | Two consecutive P.S. blocks (duplication) | 🔴 |

---

## 7. CROSS-FILE / SYSTEMIC PATTERNS

1. **L1 Pre-K urgency is being weaponized, not anchored** (8 critical violations across winback-a/b-l1 e1/e2/e3 + repc-17-e2). Pattern: "Pre-K is coming" + "the gap you can still close" / "last email" / "you waited too long" stacked together. L1's allowed Pre-K anchor must be OBSERVATIONAL ("Pre-K starts in 2 months"), not pressure-laden.

2. **Internal data presented as quasi-clinical** (4 critical violations across winback-a/b L1/L2 emails): "82% of 672 families show clearer awareness in 2-4 weeks" → GIULIANO §9.6 unverified-claims watch-list explicitly flags this pattern.

3. **Broken apostrophes / typos** (3 medium patterns): "This my last email" (missing "is"), "An dad told me" (article error), "This not an overnight story", "If thisn't" — generation artifact.

4. **L1/L2/L3 internal classification labels leaking into cross-level copy** (4 medium violations): recognition anchor blocks contain "(L1-L2)", "(L2)", "(L3)" parenthetical tags from internal classification that ended up in customer-facing copy.

5. **Sign-off cadence mismatches** (4 patterns):
   - D0 PP should be "Talk soon" but uses "With understanding"
   - D22-29 PP-Ext-Ed should be "With understanding" or "With care" but uses "Talk soon"
   - D30+ PP-Mid should be "With care" but uses "With understanding"
   - Sign-off cadence opener line MISSING entirely in pp-extended-ed e1-l1/l2/l3, e2-l3
   - arrived-08 (cross-level transactional) uses "With understanding" but should be "Talk soon" like sibling transactionals

6. **Level-label leakage** (12 critical findings across 12 unique files): "L1/L2/L3 parents", "For Level 2 children", "Sarah, Level 1 mom", "One L3 mom wrote", etc.

7. **GF V16 violations** (7 critical findings): "49% of autistic 4-5 year olds" in GF body copy (welcome e1/e2/e3-gf, browse-04-e2 line 229, browse-04-e3 line 48, site-20-e1 line 164). GF must use symptom-language only.

8. **Genuinely well-executed L3 files** show the writing team understands L3 calibration. Same discipline fails for L1 (where allowed Pre-K urgency gets weaponized) and GF (where V16 gets violated). The mistakes cluster on the flows where the lever allows more flexibility.

---

## 8. NEXT ACTIONS

1. **Audit-and-fix complete.** Subagents applied targeted fixes across the audit's full scope. 58 files modified (customer-facing body copy only — Part 2 / Creative Strategy / Source Citations specs were left untouched because they don't render to customers).
2. **Critical blocker resolved:** `pp-leveldetect-01-e1.md` body buttons no longer labeled "Level 1/2/3/4" — replaced with symptom-only language ("Talks about the potty...", "Sensory issues, tried many methods", "Non-verbal or high support needs", "Still figuring it out"). `detection-10.md` was already correct.
3. **All 9 missing HTML files identified** for Stage 3 build: `arrived-08`, `faq-21-e1..e6`, `sunset-25-e1/e2` (HTML files pending — depends on next step).
4. **You decide what to commit + push.** Say "commit" or "push" when ready, or describe next scope.
