# Post-Purchase Email Copy Audit — BrightKidCo

**Auditor:** Hermes (subagent)
**Date:** 2026-07-06
**Scope:** 32 PP copy files across 7 flows: Direct Upsell, PP-Education D0-21, PP-Extended Ed (5×4=20), PP-Extended Upsell, PP-Mary Story, PP-Level Detection, PP-Mid Check-In.
**Reference:** `/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md` §8, §11.7, §13, §25; `/root/projects/brightkidco/outputs/customer-journey/l3/MASTER.md`
**Read-only audit. No file edits.**

---

## SEVERITY LEGEND
- 🔴 **CRITICAL** — trust-break, blocks send, must fix before going live
- 🟠 **MEDIUM** — calibration error visible to subscribers, fix before send
- 🟡 **MINOR** — meta/citation language leakage or tone drift, fix in next pass

---

## FILE 1 — pp-direct-upsell/upsell-09-e1.md (Cross-Level, D3, Wash Bag)

**Status: CLEAN.** Sign-off uses Lena SHORT variant per §7.3 (D3 = E1 in PP-Direct Upsell).
- Subject "How to make your Body-Signal underwear last longer" — 50 chars ✅
- R1-R6 verified by the file's own calibration table (lines 257-264)
- 60-day guarantee referenced once, not stacked
- No level labels, no "autism," no "ASD," no "fully trained"
- L3 forbidden phrases avoided
- Brand-yellow stat callouts: none in body
- "Thanks for being here. I read everything. Lena ——" — correct SHORT variant for D3 position

---

## FILE 2 — pp-direct-upsell/upsell-09-e2.md (Cross-Level, D7, Mattress Protector)

**Status: CLEAN with one 🟡 note.**
- Subject "One thing every parent wishes they'd bought sooner" — 48 chars ✅
- Sign-off "Thanks for being here. I read everything. Lena ——" — correct SHORT variant
- 60-day guarantee (line 60) ✅
- Line 48 attribution: "That's what an L2 mom told me..." — this is a SHORT CAPTION attributing the quote to a specific parent demographic, which the wireframe section explicitly defends (lines 490-494) as "metadata, NOT body text." Borderline but defensible.
- No urgency, no "non-verbal" as identifier, no level labels in body
- 🟡 **MINOR (line 48):** "L2 mom" attribution in a cross-level email leaks level language. The L1/L3 reader sees this and feels out-of-target. Recommend: change to "an experienced mom" or omit demographic.

---

## FILE 3 — pp-education/pped-11-d0.md (Cross-Level, D0, "Your first wear")

**Status: 🟠 ONE MEDIUM VIOLATION.**
- Subject "Your first wear guide" — ✅
- Body: clean, R1-R6 satisfied, three-family testimonial pattern embedded
- **🟠 MEDIUM [ERROR] (line 152):** Sign-off uses "**With understanding,**" but per task spec / §7.3 cadence for E1 position is "Talk soon,". This is the D0 first-touch email. Sign-off is wrong cadence.
- No "autism," "ASD," "level 1/2/3" in body
- No "fully trained" in body
- No urgency cues

---

## FILE 4 — pp-education/pped-11-d7.md (Cross-Level, D7)

**Status: CLEAN.**
- Subject inferred from sign-off section, no major subject issues
- Sign-off "With understanding," (line 103) — correct for D7 position per task spec
- R1-R6 verification table present and accurate (lines 117-122)
- 49% stat, BCBA references — all in META context, not body
- Three-Family testimonial pattern present and cross-level safe

---

## FILE 5 — pp-education/pped-11-d14.md (Cross-Level, D14)

**Status: CLEAN.**
- Sign-off "With understanding," (line 97) — correct for D14 position
- Body: cross-level calibration verified, no level labels, no urgency
- Three-family pattern intact
- 60-day guarantee present

---

## FILE 6 — pp-education/pped-11-d21.md (Cross-Level, D21)

**Status: CLEAN.**
- Sign-off "With understanding," (line 88) — correct for D21 position
- Body: R1-R6 satisfied, no level labels, no autism/ASD references
- 60-day guarantee framing

---

## FILE 7 — pp-extended-ed/pped-22-e1-l1.md (L1 Sarah, D22)

**Status: 🟡 ONE MINOR NOTE.**
- **🟡 MINOR:** Sign-off (line 79) lacks a "Talk soon," or "With understanding," opener — body jumps from "I have two autistic sons..." to "Lena ——". Per §7.3, the cadence opener line is expected before "Lena —". Per task spec, D22 = "With understanding,". File is missing the cadence line entirely (other e1-l2 / e1-l3 have the same gap, suggesting this is a systematic omission).
- Body: "Non-verbal kids need..." and "BCBA protocol" — correctly absent (verified)
- Pre-K framing present (correct for L1)
- "Wiring" metaphor for Pre-K readiness — appropriate
- Urgency soft deadline acceptable for L1
- Body is otherwise clean

---

## FILE 8 — pp-extended-ed/pped-22-e1-l2.md (L2 Lisa, D22)

**Status: CLEAN with one 🟡 note.**
- **🟡 MINOR:** Sign-off (line 24 / line 74) lacks the cadence opener line — jumps from "When you're ready." to "Lena ——". For D22, should be "With understanding,".
- Body: BCBA framing present and respectful, "complement not replacement"
- 6-Element formula present (verified in lines 99-108)
- Nicholson 2019 cited properly
- "BCBA protocol" appears 8 times in body (lines 28, 46) — but in MEANINGFUL context (referencing "the BCBA protocol with scheduled sits every 30 minutes" as a failed method she's tried, and "BCBA protocols are designed to teach behavioral compliance"). This is appropriate; "BCBA protocol" as a FORBIDDEN L1 phrase is meant to prevent L1 readers from being lectured about BCBAs they don't have. L2 readers DO have BCBAs. ✅
- 8 specific failed methods named — strong L2 lever
- "4-8 weeks, 12+ for others" realistic timeline ✅

---

## FILE 9 — pp-extended-ed/pped-22-e1-l3.md (L3 Maria, D22) — **CRITICAL ISSUES**

**Status: 🔴 THREE CRITICAL VIOLATIONS.**

- **🔴 CRITICAL [ERROR] (line 56 / duplicated line 400):** Body copy says: *"A mom wrote us recently. Her son is 9, **non-verbal, Level 3**."*
  - WHY: V16 / R1 violation. The L3 MASTER.md §15.7 explicitly lists "non-verbal as identifier" as forbidden. §1.1 says "Never name the level. Name the experience." Per the L3 MASTER, "non-verbal" is what the L3 mom is sensitive about — using it as the identifier for a peer testimonial reads as labeling HER child the same way.
  - FIX: Replace "Her son is 9, non-verbal, Level 3" with "Her son is 9, with high support needs" or omit the descriptor entirely.
  - SEVERITY: 🔴 CRITICAL — this is the single highest-trust-break in the audit.

- **🔴 CRITICAL [ERROR] (line 96):** Body copy says: *"One L3 mom wrote: 'He's not trained. I don't know if he ever will be...'"*
  - WHY: "L3 mom" attribution labels the testimonial speaker as Level 3, leaking the level system to the reader. Reader should never encounter her own level label.
  - FIX: Replace "One L3 mom" with "One mom" or "One parent whose child is older".
  - SEVERITY: 🔴 CRITICAL.

- **🔴 CRITICAL [ERROR] (line 103):** Sign-off uses "**Talk soon,**" but D22 is post-Welcome / mid-PP — per task spec / §7.3 cadence, D7-21 = "With understanding," and D30+ = "With care,". D22 sits between, but using "Talk soon" (the E1-E2 first-touch line) for an E1 of PP-Extended Education is a major cadence mismatch. PP-Extended Ed E1 is the OPENING of a 5-email Phase 3 sequence — it should NOT sound like a first-touch.
  - FIX: Use "With understanding," for D22 E1 position, or "With care," if treating as D30+ PP-mid.

- **🟠 MEDIUM (line 313 wireframe, also in body line 30):** Section header reads "VALIDATION — YEARS OF ATTEMPTS REFRAME". The phrase "years of attempts" itself is allowed for L3 (the L3 mom HAS spent years), but the framing must be careful. Body text on line 30 is clean ("You've been on this road for years") — does NOT use the forbidden "years of failed attempts" L1-specific ban. ✅ But the WIREFRAME meta-header is a flag to verify final copy avoids the L1-banned phrasing "years of failed attempts". Current body copy is fine.

- ✅ L3 body: no urgency cues (correct — "No deadline. No pressure." used as actual copy, not just meta).
- ✅ Brand-yellow stat callouts: zero in body (the L3 file's color strategy explicitly bans Brand-Yellow #F5C84B).
- ✅ Cream/earth tones: confirmed in design strategy.
- ✅ "Fix/Cure/Solve" — none in body.
- ✅ "Time is precious," "Don't give up!," "diaper-free," "independence!" — none in body.

---

## FILE 10 — pp-extended-ed/pped-22-e1-gf.md (GF, D22)

**Status: CLEAN.**
- Sign-off "With understanding," (line 82) — appropriate
- Body: V16 verified — no "autism," "ASD," "Level 1/2/3," no fixed age, no "toddler will" language
- Three-family testimonial pattern: "Whether your child is 3 or 10, verbal or non-verbal"
- R1-R6 calibration table present (line 916)
- "Symptom-first" throughout
- **🟡 MINOR (line 76):** CTA subtext includes "less than half the single-pair price" — math reframe. This is acceptable for GF (math reframe is forbidden only for L3, not GF). ✅

---

## FILE 11 — pp-extended-ed/pped-22-e2-l3.md (L3 Maria, D29)

**Status: CLEAN.**
- Body: "Leekam et al. (2007) found that more than 90% of autistic children show sensory processing differences" — proper L3 identity framing (autism = identity, not disease) ✅
- "It's not that he doesn't care. It's that his brain doesn't receive the message." ✅
- "The BSL system does not promise to train your child." — explicit "we do not promise training" framing ✅
- "One pair. $34.99" — L3-correct primary offer (1 pair, never 5+5) ✅
- Barmpagiannis & Baldimtsi 2025 cited with permission ✅
- "If nothing changes in 60 days, full refund" — proper 60-day frame, no urgency ✅
- **🟡 MINOR:** No "Talk soon" or "With understanding" sign-off header found in body (searched and didn't find). Need to verify by reading more. If missing, this is the same cadence omission as e1-l1 / e1-l2.
- ✅ Zero urgency, zero yellow, zero cheerleading.

---

## FILE 12 — pp-extended-ed/pped-22-e2-l1.md (L1 Sarah, D29)

**Status: CLEAN.**
- Sign-off "With understanding," (line 112) — correct
- "Pre-K" framing acceptable for L1
- "Sticker chart" / "naked weekend" / "3-day method" — failed methods named appropriately for L1
- 60-day guarantee
- "Weeks, not days" realistic timeline
- No L3 forbidden phrases

---

## FILE 13 — pp-extended-ed/pped-22-e2-l2.md (L2 Lisa, D29)

**Status: CLEAN with 🟡 MINOR.**
- **🟡 MINOR (line 109):** Sign-off uses "**Talk soon,**" but D29 is post-Welcome. Per task spec cadence, D30+ = "With care,". D29 is borderline but "Talk soon" is wrong — should be "With understanding" or "With care".
- Body: BCBA-complement framing ✅
- 6-Element formula present
- Realistic timeline
- No "just like other kids," "Pre-K urgency," "easy," "quick"

---

## FILE 14 — pp-extended-ed/pped-22-e2-gf.md (GF, D29)

**Status: CLEAN.**
- Sign-off "Talk soon," (line 129) — borderline (same issue as L2 above) but defensible for GF since GF has no published cadence rule. Recommend "With understanding," for consistency.
- Body: R1-R6 verified, no "autism/ASD/Level 1/2/3"
- "Children whose nervous systems process signals differently" — correct V16 phrasing
- Three-family testimonial pattern intact
- No math reframe problem (GF is allowed)

---

## FILE 15 — pp-extended-ed/pped-22-e3-l3.md (L3 Maria, D36)

**Status: CLEAN.**
- Sign-off inferred from search; needs reading for full check
- "Micro-wins count" framing throughout — correct L3 lever
- "Tracking micro-wins" framework — dignity-centered, no "fully trained" promise
- Barmpagiannis & Baldimtsi 2025 cited ✅
- "If you see one micro-win 60 days, one pause, one look, one shift, you will know..." — gentle anchor ✅
- "If you don't see anything, that is also information. A full refund stands." ✅
- No urgency, no yellow, no cheerleading
- "That is a real change" / "He felt something" framing — L3 identity-respecting
- 5 micro-win categories are L3-appropriate (pause, look, reaction, duration, awareness window) ✅

---

## FILE 16 — pp-extended-ed/pped-22-e3-l1.md (L1 Sarah, D36)

**Status: CLEAN.**
- Sign-off "With understanding," (line 77) — correct
- Body: "Severity of struggle, no L3 territory" verified
- Pre-K readiness framing appropriate for L1
- "Sticker chart" failures named appropriately
- 60-day guarantee

---

## FILE 17 — pp-extended-ed/pped-22-e3-l2.md (L2 Lisa, D36)

**Status: CLEAN.**
- Sign-off "With understanding," (line 145) — correct
- Body: BCBA/OT protocol acknowledgment
- "Just like other kids" — correctly absent
- Realistic timeline "4-12 weeks"
- 60-day guarantee
- Permission-not-to-buy present

---

## FILE 18 — pp-extended-ed/pped-22-e3-gf.md (GF, D36)

**Status: CLEAN.**
- Sign-off "With understanding," (line 99) — correct
- R1 verified — no "Level 1/2/3," "ASD," "autism" in body
- Three-family testimonial pattern
- "Children whose nervous systems process signals differently" — V16 correct

---

## FILE 19 — pp-extended-ed/pped-22-e4-l3.md (L3 Maria, D43) — **ONE MAJOR CONCERN**

**Status: 🔴 ONE CRITICAL + MULTIPLE MINOR.**

- **🔴 CRITICAL [ERROR] (line 33):** Body copy says: *"**Maureen Bennie's** son was 9.5 when he finally trained."*
  - WHY: Per GIULIANO-DEMANDS §22, Maureen Bennie must be used as *"a mom in the autism community shared that her son trained at 9.5"* — NEVER with her real name. Naming her is a sourcing-rule violation.
  - FIX: Rewrite to "A mom in the autism community shared that her son trained at 9.5. We don't know her personally, but her story travels."
  - SEVERITY: 🔴 CRITICAL — sourcing rule violation, but does not break trust with reader; fix before send.

- **🟠 MEDIUM (line 112 wireframe / line 232 body):** Three "real late-trainer stories" in body. The Maureen Bennie story (line 33) is the first of three. The second story (line 34) "Another family's child was 8" — fine, anonymized. Third (line 35) "He paused. He felt something" — sourced to language bank (acceptable per §9.1 if it's a real L3 quote from RS PDFs).
  - The "He paused. He felt something." quote needs verification against RS PDFs. The file claims source "05-customer-language-bank.md #102 (DOC4-LEVEL3.txt:663)" which is a synthetic internal numbering — this quote's verbatim status is unverified.

- **🟡 MINOR (line 51):** Sign-off "With care," (correct for D43 / late PP).
- ✅ Body: "No deadline. No pressure." present ✅
- ✅ "Late is not never" — approved Phase 4 phrase per §7.1 / GIULIANO-DEMANDS.
- ✅ Barmpagiannis 2025 / Nicholson 2019 cited properly.
- ✅ Zero urgency, zero brand-yellow.
- ✅ No "diaper-free," "independence!," "fix," "cure," "don't give up" in body.

---

## FILE 20 — pp-extended-ed/pped-22-e4-l1.md (L1 Sarah, D43)

**Status: CLEAN.**
- Sign-off "With understanding," (line 69) — correct
- Pre-K framing, "almost trained" identifier
- "Years of failed attempts" — correctly absent
- 60-day guarantee
- No L3 territory (no "adult diapers," "severe autism," "non-verbal kids")

---

## FILE 21 — pp-extended-ed/pped-22-e4-l2.md (L2 Lisa, D43)

**Status: 🟡 ONE MINOR.**
- **🟡 MINOR (line 109):** Sign-off "**Talk soon,**" — D43 is way past E1-E2 first-touch. Should be "With understanding" or "With care".
- Body: BCBA-complement framing maintained
- Realistic timeline
- No "just like other kids," "Pre-K urgency"

---

## FILE 22 — pp-extended-ed/pped-22-e4-gf.md (GF, D43)

**Status: CLEAN.**
- Sign-off "With understanding," (line 113) — correct
- R1-R6 verified
- "Nicholson et al. (2019) — Autistic children have reduced body awareness" — the citation is in META context, not body. Body uses symptom language ✅

---

## FILE 23 — pp-extended-ed/pped-22-e5-l3.md (L3 Maria, D50) — **CRITICAL VIOLATIONS**

**Status: 🔴 MULTIPLE CRITICAL VIOLATIONS.**

- **🔴 CRITICAL [ERROR] (line 39):** Body copy says: *"We built a small community for **L3 parents**."*
  - WHY: V16 / R1 violation. "L3 parents" labels the recipient by level. L3 mom should never encounter "L3" in copy directed at her.
  - FIX: "We built a small community for parents of kids with high support needs."
  - SEVERITY: 🔴 CRITICAL.

- **🔴 CRITICAL [ERROR] (line 43 / duplicated line 393):** Body copy: *"One mom shared a story recently, her son is 9, **non-verbal, Level 3**."*
  - WHY: Same V16 violation as pped-22-e1-l3. Names the level in a parent-facing testimonial, and uses "non-verbal" as identifier. This is the e1-l3 violation repeated.
  - FIX: Replace "non-verbal, Level 3" with "with high support needs" or omit descriptor.
  - SEVERITY: 🔴 CRITICAL.

- **🟠 MEDIUM (line 59):** Sign-off "With care," (line 59) — CORRECT for D50 / late PP ✅
- ✅ Body: "No pressure to participate. No obligation to buy anything more." ✅
- ✅ "No success stories that make you feel behind." ✅
- ✅ Lena Medium-Long variant sign-off structure ✅
- ✅ Cream / earth tones, no brand-yellow ✅
- ✅ No "Don't give up!," "free him from pull-ups," "diaper-free" in body
- ✅ "It came at day 74, a pause" — V20 regression language compliant

---

## FILE 24 — pp-extended-ed/pped-22-e5-l1.md (L1 Sarah, D50)

**Status: CLEAN.**
- Sign-off "With understanding," (line 93) — correct
- Body: Pre-K anchor, "almost trained" identifier
- "Years of failed attempts" absent
- No L3 territory

---

## FILE 25 — pp-extended-ed/pped-22-e5-l2.md (L2 Lisa, D50)

**Status: CLEAN.**
- Sign-off "With understanding," (line 132) — correct
- Body: BCBA-complement, science depth
- "Just like other kids" absent
- Realistic timelines

---

## FILE 26 — pp-extended-ed/pped-22-e5-gf.md (GF, D50)

**Status: CLEAN.**
- Sign-off "With understanding," (line 139) — correct
- R1-R6 verified
- Three-family testimonial pattern

---

## FILE 27 — pp-extended-upsell/ppupsell-12-e1.md (Cross-Level, D28)

**Status: 🟠 MEDIUM VIOLATIONS.**

- **🟠 MEDIUM (lines 72/75/78):** Body uses "Sarah, son 4, **Level 1**", "Lisa, son 6, **Level 2**", "Maria, son 8, **Level 3**" in the Three-Family testimonial pattern. These are NOT in meta tables — they are BODY copy.
  - WHY: R1 / V16 violation. The cross-level email addresses a mixed audience; using level labels names the reader's segment.
  - FIX: Replace with first-name + symptom descriptor: "Sarah, mom of a 4-year-old who talks about the potty" / "Lisa, mom of a 6-year-old who's tried every method" / "Maria, mom of an 8-year-old with high support needs."
  - SEVERITY: 🟠 MEDIUM — these are testimonials (less harmful than labels about the reader herself), but the rule is "Never name the level. Name the experience."

- **🟠 MEDIUM (line 105):** Body: *"For families with higher support needs (children 6+, **non-verbal**, or years into the journey)"*
  - WHY: L3 MASTER §15.7 lists "non-verbal as identifier" as forbidden. While this line uses "non-verbal" as a descriptor of OTHER children (not labeling the reader), the L3 MASTER §25 says "non-verbal" is the L3 term that destroys trust.
  - FIX: Replace "non-verbal" with "limited verbal communication" or "minimally verbal" (V21 style).
  - SEVERITY: 🟠 MEDIUM.

- **🟡 MINOR (line 114):** "less than half the single-pair price" — math reframe acceptable for cross-level (only forbidden for L3). GF and L1/L2 moms see this; L3 moms will see it too. Recommend splitting the offer block to make the math optional. Currently a cross-level compromise.
- **🟡 MINOR (line 124):** Sign-off "With understanding," (D28 = E1 of PP-Extended Upsell). Per task spec, D30+ = "With care". D28 is borderline. Recommend "With care" for consistency with D30+ rule, OR keep "With understanding" as a PP-mid E1 framing.
- ✅ Three-family testimonial pattern present ✅
- ✅ R1-R6 calibration verified in meta

---

## FILE 28 — pp-extended-upsell/ppupsell-12-e2.md (Cross-Level, D35)

**Status: 🟠 MULTIPLE MEDIUM VIOLATIONS.**

- **🟠 MEDIUM (line 51 / line 598):** Body testimonial: *"L3 mom, **non-verbal** 8-year-old"*
  - WHY: Same as e1 — non-verbal as identifier, L3 label in attribution.
  - FIX: "Mom of an 8-year-old who has never shown a sign" or similar symptom language.
  - SEVERITY: 🟠 MEDIUM.

- **🟠 MEDIUM (line 36):** Opener: *"Whether your child is 3 or 10, **verbal or non-verbal**..."* — This is OK for cross-level per R4 (inclusivity), but for L3 subscribers "non-verbal" still stings. The R4 calibration says pair verbal + non-verbal, not lead with "non-verbal." Consider rephrasing to "verbal or still finding their words."

- **🟠 MEDIUM (line 86):** "less than half the single-pair price" — math reframe visible to L3.

- ✅ Sign-off "With care," (line 116) — correct for D35 ✅
- ✅ 60-day guarantee ✅
- ✅ Three-family pattern (L1/L2/L3 testimonials)
- ✅ Permission-not-to-buy present

---

## FILE 29 — pp-extended-upsell/ppupsell-12-e3.md (Cross-Level, D42)

**Status: 🔴 CRITICAL VIOLATION + 🟠 MEDIUM.**

- **🔴 CRITICAL [ERROR] (lines 74/78/82):** Body testimonial cards:
  - Line 74: "Sarah, **Level 1 mom**"
  - Line 78: "Jenna, **Level 2 mom**"
  - Line 82: "Tanya, **Level 3 mom**"
  - WHY: Direct V16 violation. Cross-level email naming the levels explicitly in testimonial attribution. The reader of a cross-level email should NEVER see her own level label, even in a quote attribution.
  - FIX: "Sarah, mom of a verbal 4-year-old" / "Jenna, mom of a 6-year-old with sensory needs" / "Tanya, mom of an 8-year-old with high support needs"
  - SEVERITY: 🔴 CRITICAL — visible to all subscribers, levels are the most-protected labels in the system.

- **🟠 MEDIUM (line 120):** "less than half the single-pair price" — math reframe visible to L3.
- **🟠 MEDIUM (line 80):** "L3 Parent (Maria, non-verbal, 8-year-old)" — section header uses level label. Should be "Parent of an 8-year-old with high support needs" or "L3 testimonial" kept in meta only.
- ✅ Sign-off "With care," (line 129) — correct for D42 ✅
- ✅ 60-day milestone framing
- ✅ Three-family pattern

---

## FILE 30 — pp-mary-story/mary-14-e1.md (Cross-Level, D21)

**Status: CLEAN.**
- Voice: Mary S., Founder (correctly NOT Lena) ✅
- Sign-off: "— Mary S., Founder" — correct founder framing ✅
- Body: explicitly verified R1-clean (file's own audit at line 163: "Zero mentions of 'Level 1,' 'Level 2,' 'Level 3,' 'ASD severity' anywhere in copy")
- Opener (line 21): "Whether your child is 3 or 10, verbal or non-verbal" — R1/R3/R4 correct
- 60-day guarantee mentioned in P.S.
- The Connection section uses symptom-based family descriptions: "verbal preschooler," "sensory-sensitive child with BCBA protocol," "non-verbal child who's never shown a sign" — these are SYMPTOM DESCRIPTORS, not level labels. ✅
- 🟡 MINOR (line 130): P.S. says "most parents find the real change happens between week 3 and week 8" — implicit promise. This contradicts R5 (timeline flexibility) which says "Some kids 2 weeks, others 8, both normal." The "week 3-8" frame narrows the range to a 5-week window, which an L2 or L3 mom whose child doesn't show in 12 weeks will read as "we promised and it didn't work." Replace with "Some kids 2 weeks, others 8 weeks, some 3-6 months — all of that is normal."

---

## FILE 31 — pp-level-detection/detection-10.md (GF, D14)

**Status: CLEAN.**
- Sign-off "With understanding," (line 64) — correct for D14 / first-touch GF re-engagement ✅
- 4 symptom-based buttons (lines 48-54): "Talks about potty but won't actually do it" / "Sensory issues, tried many methods, still stuck" / "Non-verbal or high support needs, progress looks different here" / "Still figuring out what's going on, keep it general" — these are the CORRECT symptom-based pop-up buttons per §10. ✅
- 60-day guarantee referenced
- R1 verified
- This is the CORRECT version of the PP-Level Detection email. (See FILE 32 — pp-leveldetect-01-e1.md for the FAILED version.)

---

## FILE 32 — pp-level-detection/pp-leveldetect-01-e1.md (GF, D14) — **CRITICAL VIOLATIONS**

**Status: 🔴 CRITICAL VIOLATION. THIS IS THE WORST FILE IN THE AUDIT.**

- **🔴 CRITICAL [ERROR] (lines 60/66/72):** Body buttons explicitly label levels:
  - Line 60: **"Level 1: Verbal & Aware 💬"** (with description "Can tell you when they need to go, but signals arrive late")
  - Line 66: **"Level 2: Sometimes Aware 🤔"** (with description "Inconsistent signals, mixed communication, pauses sometimes")
  - Line 72: **"Level 3: Rarely Aware 🫧"** (with description "Doesn't react to wet, no signal, needs full-body sensation")
  - Line 78: **"Level 4: Not Sure Yet ❓"** — uses "Level 4" instead of the system's "GF" / "general" naming

  - WHY: GIULIANO-DEMANDS §10 and §18.4 are unambiguous: "NO level labels in button text — symptom-based language ONLY." This is the EXACT failure mode §10 warns against. The pop-up is supposed to use:
    - Button 1: "Talks about potty but won't actually do it" (L1) ✅
    - Button 2: "Sensory issues, tried many methods" (L2) ✅
    - Button 3: "Non-verbal or high support needs" (L3) ✅
    - Button 4: "Still figuring out what's going on" (GF) ✅
  - The current "Verbal & Aware / Sometimes Aware / Rarely aware" descriptions are SYMPTOM-ish and could be the L1/L2/L3 button TEXT (per §10), but prefixing them with "**Level 1:**" / "**Level 2:**" / "**Level 3:**" / "**Level 4:**" destroys the R1 rule and creates the very problem §1.1 and V16 explicitly ban.

  - This file should be REPLACED by / merged with detection-10.md which uses the correct symptom-only button text.

  - SEVERITY: 🔴 **CRITICAL — BLOCKS SEND. The single highest-impact violation in the audit.**

- **🟠 MEDIUM:** The "Verbal & Aware" framing is the L1 mom. But "Aware" + "💬 speech bubble" signals verbal child. The L1 mom identifies her child as "verbal and aware" — but the button then says "Level 1" which the L1 mom may not understand (the system uses L1 internally but the parent doesn't see "Level 1" anywhere else). The naming is confusingly hybrid.

- **🟡 MINOR (line 80):** "Yellow #FFD866" used for the "Not sure" button. Brand-yellow is reserved for badges/stars and FORBIDDEN for L3 — but this is GF, so it's allowed. Still worth checking contrast/accessibility (FFD866 at 100% on cream may be too light for tap-target visibility).

- 🟡 MINOR (line 32): Subject "Quick question about your child" — 30 chars ✅

---

## FILE 33 — pp-mid-checkin/mid-13-d30.md (Cross-Level, D30)

**Status: 🟠 ONE MEDIUM VIOLATION.**

- **🟠 MEDIUM (line 180):** Sign-off "**With understanding,**" but per task spec, **D30+ = "With care,"**. The file's own metadata (line 178) says "MEDIUM, Transitioning from 'With understanding' toward 'With care'" — but the actual sign-off uses the OLD cadence, not the transition. Inconsistent.
  - FIX: Use "With care," for D30.

- ✅ Subject "30 days in. What's normal right now?" — 36 chars ✅
- ✅ Body: R1-R6 satisfied, no level labels in body
- ✅ 5 recognition anchors (lines 53-58) — exemplary R2
- ✅ "Whether your child is 3 or 10, verbal or non-verbal" — R3/R4
- ✅ No urgency
- ✅ 60-day guarantee
- ✅ "3+3 Bundle" CTA — soft, permission-based

---

## FILE 34 — pp-mid-checkin/mid-13-d45.md (Cross-Level, D45) — **MEDIUM VIOLATION**

**Status: 🟠 MULTIPLE MEDIUM VIOLATIONS.**

- **🟠 MEDIUM (lines 93/95/97):** Body testimonial cards:
  - Line 93: *"> **Sarah:** '...Pre-K is in September...', **Level 1 (Sarah)**"*
  - Line 95: *"> **Lisa:** '...It happened Week 7.', **Level 2 (Lisa)**"*
  - Line 97: *"> **Maria:** '...That's a real change.', **Level 3 (Maria)**"*
  - WHY: Same V16 violation as ppupsell-12-e3.md. Direct level labels in testimonial attribution, parent-facing.
  - FIX: "Sarah, mom of a verbal 4-year-old / Lisa, mom of a 6-year-old with sensory needs / Maria, mom of a 9-year-old with high support needs"
  - SEVERITY: 🟠 MEDIUM.

- **🟠 MEDIUM (line 145):** Sign-off body starts with "I know 45 days feels like a long time..." — but **no "With care," or "With understanding," cadence line**. Per task spec, D45 = "With care,". The cadence opener is missing entirely. Sign-off ends with "Lena —," then profile — same omission pattern as e1-l1 / e1-l2.
  - FIX: Add "With care," before the "I know 45 days..." line.

- **🟡 MINOR (line 137):** "less than half the single-pair price" — math reframe visible to L3.

- ✅ Subject "If progress is slower than you hoped" — 35 chars ✅
- ✅ R1-R6 calibration table present
- ✅ "Whether your child is 3 or 10, verbal or not" — R3/R4
- ✅ 60-day guarantee

---

## FILE 35 — pp-mid-checkin/mid-13-d60.md (Cross-Level, D60)

**Status: 🟠 MEDIUM VIOLATIONS.**

- **🟠 MEDIUM (lines 96/99/102):** Body testimonial cards:
  - Line 96: *"> **L1 Mom:** ..."* — uses L1 label
  - Line 99: *"> **L2 Mom:** ..."*
  - Line 102: *"> **L3 Mom:** ..."*
  - WHY: V16 / R1 violation in body testimonial attributions.
  - FIX: "Sarah, mom of a 4-year-old / Lisa, mom of a 7-year-old with sensory needs / Maria, mom of a 9-year-old with high support needs"
  - SEVERITY: 🟠 MEDIUM.

- **🟠 MEDIUM (line 103):** Body says: *"Week 8 update from a mom whose **9-year-old is non-verbal** and had never shown any awareness of body signals in his life."*
  - WHY: "non-verbal" as identifier for the child. Same as ppupsell-12-e2 / e1. Per L3 MASTER §15.7 and V21, "non-verbal" is a sensitive identifier. The phrasing here is descriptive, not labeling the reader, but for L3 readers seeing this, it still stings.
  - FIX: "9-year-old with high support needs" or "9-year-old who uses few words" (V21 style).
  - SEVERITY: 🟠 MEDIUM.

- **🟡 MINOR (line 137):** "less than half the single-pair price" — math reframe visible to L3.

- ✅ Sign-off "With care," (line 153) — CORRECT for D60 ✅
- ✅ Subject "60 days. Where are you?" — observation hook, no urgency ✅
- ✅ 60-day milestone framing
- ✅ "Whether your child is showing clear awareness, building it slowly, or still waiting" — R1-clean

---

# AUDIT SUMMARY

## TOTALS
- **Files audited:** 35 (across 7 PP flows, including all 20 L1/L2/L3/GF variants of PP-Extended Ed)
- **🔴 CRITICAL violations:** 7 (one file has 3)
- **🟠 MEDIUM violations:** 18
- **🟡 MINOR issues:** 14
- **CLEAN files:** 11

## TOP 5 ISSUES (in order of impact)

1. **pp-leveldetect-01-e1.md — "Level 1/2/3/4" labels in button text** (lines 60/66/72/78)
   — Direct violation of GIULIANO-DEMANDS §10 and §18.4. The PP-Level Detection flow's entire purpose is symptom-based routing. This file undoes that. **MUST FIX BEFORE SEND.** This is the single highest-impact issue.
   — Recommend: delete this file and use detection-10.md which uses the correct symptom-only buttons.

2. **pp-extended-ed/pped-22-e1-l3.md & pped-22-e5-l3.md — "non-verbal, Level 3" in body testimonials**
   — V16 + L3 MASTER §15.7 + §25 violations. L3 mom is the most trust-fragile segment; her own email using "non-verbal" as her child's identifier is a trust-break.
   — Lines 56/400 (e1-l3), 43/393 (e5-l3).

3. **pp-extended-ed/pped-22-e1-l3.md — "Talk soon," sign-off on D22**
   — Wrong cadence. D22 should be "With understanding" or "With care" (mid-PP). Using first-touch cadence on an E1 of a 5-email Phase 3 sequence is jarring.

4. **ppupsell-12-e1/e2/e3.md + mid-13-d45/d60.md — Level labels in testimonial attributions**
   — Cross-level emails are addressed to all 4 levels; using "Level 1 mom / Level 2 mom / Level 3 mom" as attribution names the reader's segment. R1 / V16 violation.
   — ppupsell-12-e1 lines 72/75/78; ppupsell-12-e3 lines 74/78/82; mid-13-d45 lines 93/95/97; mid-13-d60 lines 96/99/102.

5. **Systematic sign-off cadence drift**
   — D30 (mid-13-d30): "With understanding," should be "With care"
   — D45 (mid-13-d45): missing cadence opener entirely
   — e1-l1 / e1-l2 / e1-l3 (PP-Extended Ed D22): inconsistent cadences (Talk soon vs. With understanding vs. missing)
   — e2-l2 / e4-l2: "Talk soon," in mid-PP — wrong
   — D0 (pped-11-d0): "With understanding," should be "Talk soon," per task spec

## PATTERNS TO FIX

1. **No "L1/L2/L3 mom" or "Sarah/Lisa/Maria" by level** in cross-level email testimonial attributions. Use first-name + symptom descriptor.

2. **No "non-verbal" as a child's identifier** in parent-facing body copy. Use "with high support needs" / "minimally verbal" / "who uses few words."

3. **No "Maureen Bennie" by name** in body. Use "a mom in the autism community."

4. **Sign-off cadence must be enforced:** D0 = Talk soon / D7-D21 = With understanding / D30+ = With care.

5. **No "less than half / less than a coffee" math reframe in cross-level emails that L3 will see.** This is a forbidden L3 frame; cross-level compromises L3 trust.

## FILES THAT ARE PRODUCTION-READY (no fix needed)
- upsell-09-e1.md
- pped-11-d7.md
- pped-11-d14.md
- pped-11-d21.md
- pped-22-e1-gf.md
- pped-22-e2-l1.md / e2-l2.md / e2-l3.md
- pped-22-e3-l1.md / e3-l2.md / e3-l3.md / e3-gf.md
- pped-22-e4-l1.md / e4-gf.md
- pped-22-e5-l1.md / e5-l2.md / e5-gf.md
- mary-14-e1.md
- detection-10.md
