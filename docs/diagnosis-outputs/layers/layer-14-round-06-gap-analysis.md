# Layer 14 Round 6: Frequency & Wording — Gap Analysis

**Purpose:** Identify what's missing, what needs more depth, and what contradicts other layers in the Layer 14 (Frequency & Wording System) diagnosis.

**Sources Reviewed:**
- L14 Synthesis (`layer-14-frequency-wording.md`, 713 lines, 36KB)
- L14 R1 (`layer-14-round-01-client-files.md`, 493 lines, 16KB — 54 rules)
- L14 R2 (`layer-14-round-02-skill-loading.md`, 351 lines, 18KB — 9 skills loaded)
- L14 R3 (`layer-14-round-03-wiki-extraction.md`, 308 lines, 14KB — 12 wiki pages)
- L14 R4 (`layer-14-round-04-cross-reference.md`, 309 lines, 24KB — 5 matrices, 6 conflicts, 8 gaps)
- Overnight Plan Layer 14 requirements
- L16 Flow Architecture — **DOES NOT EXIST**
- L17 Tonality Calibration — **DOES NOT EXIST**

---

## 1. COMPLETENESS ASSESSMENT

### 1.1 Plan Requirements vs. Delivered

| Plan Requirement | Status | Notes |
|---|---|---|
| Read Frequencies-Wording.txt + typo file | DONE (R1) | Both files read, confirmed identical (5,291 bytes each) |
| Read DOC1, DOC6 | DONE (R1) | Extensive extraction — 54 rules |
| Extract EVERY frequency rule | ~80% | Per-avatar ad frequency covered. Missing: ad frequency caps, frequency decay across sequences |
| Extract EVERY wording rule | ~85% | Avatar word banks, forbidden phrases, Lena voice covered. Missing: sentence-level tone markers, reading level |
| Extract EVERY timing rule | ~70% | Flow cadence templates present. Missing: specific send-time optimization, timezone handling, smart send logic |
| Extract EVERY cadence rule | ~75% | Campaign + flow cadences present. Missing: avatar-specific cadence variants, regression cadence, GI-specific cadence |
| Load email-collection-list-growth skill | DONE (R2) | Growth math, churn management, offer performance extracted |
| Load strategy-campaign-calendar skill | DONE (R2) | Quarterly cadence, monthly ritual, content mix extracted |
| Cross-reference L16 (Flow Architecture) | BLOCKED | L16 does not exist |
| Cross-reference L17 (Tonality Calibration) | BLOCKED | L17 does not exist |

**Overall completeness estimate: ~65%** — The synthesis covers the core framework well but is missing (a) R3 wiki findings, (b) R4 cross-reference findings, (c) several R2 details that were lost in summarization, and (d) all cross-layer validation against L16/L17.

---

## 2. CRITICAL FINDING: R3 AND R4 CONTENT LOST IN SYNTHESIS

### 2.1 R3 (Wiki Extraction) — Completely Absent from Synthesis

The synthesis file header states: *"Missing upstream: R3 (Wiki Extraction), R4 (Cross-Reference) — not yet produced."*

**This is factually wrong.** R3 and R4 both exist as complete documents. The synthesis was written before R3/R4 were completed and never updated.

**R3 content entirely missing from synthesis:**

| R3 Finding | Importance | Synthesis Coverage |
|---|---|---|
| **Volume doubling rule** (Day 8: 200 subs → Day 22: 100K+) | CRITICAL for deliverability | NOT in synthesis |
| **At-Risk segment definition** (opens but no clicks in 90 days) | HIGH — concrete Klaviyo segment | NOT in synthesis |
| **Recovery cadence protocol** (6-week recovery, expanding windows) | HIGH — essential for reputation recovery | NOT in synthesis |
| **Language/keyword discipline** (spam trigger avoidance, alt-text rules) | HIGH — directly affects wording | NOT in synthesis |
| **CXL flow timing intervals** (Welcome: D0/D3/D6/D9/D12; Checkout: 30min/24h/72h) | MEDIUM — alternative timing model | NOT in synthesis |
| **Flow architecture from CXL** (6 flow types with specific purposes) | MEDIUM — structural reference | NOT in synthesis |
| **A/B testing variables** (timing, personalization, sender name, CTA placement) | MEDIUM — testing framework | NOT in synthesis |
| **Micro-topics principle** (one email = one topic = one takeaway) | LOW — already covered in R2 | Redundant |

**Impact:** The synthesis is missing critical deliverability and volume ramp-up guidance that directly constrains frequency decisions. You cannot implement the 3-4x/week cadence without the doubling rule for new domains.

### 2.2 R4 (Cross-Reference) — Completely Absent from Synthesis

R4 produced 5 cross-reference matrices, identified 6 conflicts and 8 gaps. **None of this is in the synthesis.**

**R4 conflicts not carried into synthesis:**

| # | Conflict | Status in Synthesis |
|---|---|---|
| 1 | Campaign frequency (3-4x/week) vs. avatar sensitivity (Overwhelmed/Autistic fatigue) | NOT addressed |
| 2 | Content mix discrepancy (50/30/15/5 vs. 30/50/20) | Partially addressed (synthesis notes the discrepancy but doesn't resolve it definitively) |
| 3 | Cart recovery urgency vs. permission-not-to-buy | NOT addressed |
| 4 | Re-engagement "we miss you" vs. forbidden phrases | NOT addressed |
| 5 | BFCM 1-2/day volume vs. authentic Lena voice | NOT addressed |
| 6 | Post-purchase D2 cross-sell vs. trust pyramid order | NOT addressed |

**R4 gaps not carried into synthesis:**

| # | Gap | Severity |
|---|---|---|
| 1 | No Flow Architecture (L16) | HIGH |
| 2 | No Tonality Calibration (L17) | HIGH |
| 3 | No GI/Withholding frequency profile (#1 objection, 730 mentions) | CRITICAL |
| 4 | No regression frequency stage (278 mentions) | HIGH |
| 5 | No daycare/school wording rules (964 mentions) | MEDIUM |
| 6 | No nighttime training frequency separation (1,166 mentions) | HIGH |
| 7 | Generic frameworks vs. BrightKidCo specificity | MEDIUM |
| 8 | No avatar detection wording triggers | MEDIUM |

---

## 3. MISSING ELEMENTS — PRIORITY RANKED

### P0 — CRITICAL (Blocks implementation)

#### 3.1 GI/Withholding Avatar Missing
The #1 objection by Kommentare volume (730 mentions) has NO frequency profile, word bank, or tonality calibration. Parents of children with GI/withholding issues face a distinct emotional state (medical anxiety + frustration with pediatricians who dismiss it) that differs from all 4 existing avatars.

**What's needed:**
- Avatar 5: GI/Withholding Parent
- Dominant emotion: Medical anxiety + frustration with dismissive doctors
- Frequency level: High concern, medium urgency (medical, not deadline-driven)
- Word bank: constipation, withholding, bowel, GI, specialist, stool, pediatrician, gastroenterologist
- Hook examples: "If your child holds it in — and every pediatrician says 'they'll grow out of it'…"
- Specific forbidden phrases: "just give them fiber," "it's just constipation," "they'll grow out of it"

#### 3.2 R3/R4 Findings Not Integrated
All deliverability constraints, at-risk segment definitions, recovery protocols, conflict resolutions, and gap recommendations from R3 and R4 are invisible to anyone reading only the synthesis.

### P1 — HIGH (Degrades quality)

#### 3.3 No Regression Frequency Stage
278 Kommentare mentions. Regression is a critical emotional moment (skill exists, then disappears) that needs its own frequency profile. Parents experience a unique emotional state: hope-crash, "was it working and now it's not?", self-doubt about whether the method ever worked.

**What's needed:**
- Add Stage 7: Regression Frequency — "Customer recalibrates"
- Tone: Validation + science ("Regression means the skill exists. The neural pathway is there. It needs reinforcement, not restart.")
- Forbidden: "Start over," "go back to basics," "you must have done something wrong"

#### 3.4 Nighttime Training Separation
1,166 Kommentare mentions. Parents expect 24/7 results from a daytime product. The 6-stage emotional curve treats potty training as monolithic — no day/night distinction exists.

**What's needed:**
- Explicit daytime/nighttime frequency separation
- Nighttime messaging: "Nighttime is a different skill. Daytime first, nighttime comes later — sometimes much later."
- Prevents hope-crash when nighttime dryness doesn't follow daytime success

#### 3.5 Avatar Segmentation Overlap Not Resolved
Two incompatible segmentation schemes coexist without a crosswalk:
- Frequencies file: 4 emotional avatars (Deadline, Social Pressure, Overwhelmed, Autistic)
- DOC1/DOC6: 4 autism levels (Level 1 Verbal, Level 2 Mixed, Level 3 Non-verbal, General)

These are DIFFERENT dimensions. An Autistic Parent could be Level 1, 2, or 3. A Deadline Parent could have a Level 1 or Level 3 child. The synthesis acknowledges this in Gap 1/Gap 2 but provides NO resolution.

**What's needed:** Crosswalk matrix mapping emotional avatars × autism levels (minimum 4×4 = 16 combinations with frequency/wording guidance for each).

#### 3.6 Content Mix Discrepancy Unresolved
Two contradictory frameworks:
- strategy-campaign-calendar: 50% promo / 30% educational / 15% engagement / 5% brand
- analytics-program-diagnostics: 30% promo / 50% educational / 20% brand

The synthesis recommends 30/50/20 for BrightKidCo but doesn't provide the reasoning chain from the trust pyramid. R4 explicitly identified this as Conflict 2 but it's not in the synthesis.

### P2 — MEDIUM (Reduces effectiveness)

#### 3.7 No Avatar Detection Mechanism
L14 defines 4 avatars with distinct frequency/wording profiles but provides no mechanism for detecting which avatar a subscriber is. Without detection, the avatar-specific rules are theoretical — you can't apply them without knowing who you're talking to.

**What's needed:**
- Quiz question in Welcome E1 that maps to avatars
- Browse behavior signals (which product pages → which avatar)
- Email engagement pattern signals (opens urgency emails = Deadline; opens gentle emails = Overwhelmed)
- Purchase history signals

#### 3.8 Daycare/School Wording Rules
964 Kommentare mentions. Parents need specific language for communicating with daycare providers, teachers, and aides. L14 has no wording for this context.

**What's needed:** Word bank: daycare provider, teacher, aide, classroom, accident at school, spare clothes, IEP, accommodation, "how to talk to daycare," "what to send with them."

#### 3.9 No Frequency Cap for Ads
Email flows have a max 1x per 7 days rule (from Layer 08). No equivalent ad frequency cap exists in the source files or synthesis.

**What's needed:** Define ad frequency caps per avatar (Deadline Parent may tolerate higher frequency than Overwhelmed Mom who shuts down under pressure).

#### 3.10 Mechanism Messaging Incomplete for 2 of 4 Avatars
Avatar word banks for the Mechanism section have no example messages for Overwhelmed Mom and Autistic Parent (R1 Gap 3, synthesis Gap 3). Only word bank keywords exist — no complete example sentences.

### P3 — LOW (Polish/completeness)

#### 3.11 No A/B Testing Framework for Frequency
The source files define WHAT frequency to use but not HOW TO TEST it. R3 identified 4 A/B testing variables (timing, personalization, sender name, CTA placement) but these aren't in the synthesis.

#### 3.12 Frequency Decay Across Sequences
No rules for how frequency tone should shift across multi-email sequences. The 6-stage curve is per-ad; how does it apply to an 8-email Welcome Flow? Each email should map to a primary emotional stage.

#### 3.13 Subject Line Wording Per Avatar (Incomplete)
R2 provided generic subject line formulas adapted per avatar, but the synthesis doesn't include avatar-specific subject line guidance from DOC1/DOC6 (if it exists in those files — needs verification during Section 2 ingestion).

#### 3.14 Cross-Level Wording Rules Need More Depth
R1 extracted 6 cross-level calibration rules. R4 identified that these are "CRITICAL" at entry points and "Important" at differentiation. But there's no depth on how these rules apply per avatar level per flow stage — only general principles.

---

## 4. CROSS-LAYER CONTRADICTIONS

### 4.1 L16 and L17 Do Not Exist — Cross-Reference Impossible

The plan requires cross-referencing L14 with L16 (Flow Architecture) and L17 (Tonality Calibration). **Neither layer exists.** This means:

- **L14's flow-stage tonality rules** (Section 4 of synthesis) cannot be validated against actual flow architecture
- **L14's hope calibration** (Section 5) cannot be validated against tonality calibration
- **L14's cadence templates** (Section 7) cannot be mapped to specific flow triggers

R4 identified this as Gap 1 (HIGH severity) and Gap 2 (HIGH severity). These remain unresolved.

**Recommendation:** When L16 and L17 are produced, L14 must be re-audited for:
1. Flow trigger timing conflicts
2. Avatar routing logic consistency
3. Tonality stage alignment
4. Cadence template vs. actual flow structure

### 4.2 Conflict: Campaign Frequency vs. Avatar Sensitivity (R4 Conflict 1)

| Source | Says |
|---|---|
| L14 R2 (skills) | Optimal campaign frequency is 3-4x/week |
| L14 R1 (client files) | Overwhelmed Mom and Autistic Parent are frequency-sensitive |

**Contradiction:** Sending 3-4x/week to Overwhelmed Mom (exhaustion) or Autistic Parent (anxiety) will cause fatigue and unsubscribes. The generic "optimal" frequency doesn't account for avatar sensitivity.

**Resolution needed:** Segment by avatar. Overwhelmed + Autistic: 1-2x/week max. Deadline + Social Pressure: 3-4x/week.

### 4.3 Conflict: Cart Recovery Urgency vs. Permission-Not-to-Buy (R4 Conflict 3)

| Source | Says |
|---|---|
| L14 R2 (industry standard) | Cart abandonment E3 = "Last chance" + discount + urgency |
| L14 R1 (DOC1 rules) | "Urgency manipulation" is forbidden; permission-not-to-buy is a conversion lever |

**Contradiction:** Standard cart recovery copy directly violates Giuliano's wording rules. The synthesis includes both the standard cadence (Section 7.4) and the forbidden phrases (Section 10) without resolving the conflict.

**Resolution needed:** Replace "Last chance" with "Your cart is waiting — no pressure." Frame discounts as "we saved this for you" not "expires soon."

### 4.4 Conflict: Re-engagement Copy vs. Forbidden Phrases (R4 Conflict 4)

| Source | Says |
|---|---|
| L14 R2 (industry standard) | Re-engagement E1 = "We miss you" |
| L14 R1 (DOC1 rules) | "We miss you" / generic promotional copy is forbidden |

**Resolution needed:** Replace with "How are you doing?" (from DOC1 Lifecycle tonality).

### 4.5 Conflict: BFCM Volume vs. Authentic Voice (R4 Conflict 5)

| Source | Says |
|---|---|
| L14 R2 (industry standard) | BFCM = 1-2 emails/day |
| L14 R1 (DOC1 rules) | Every email needs 2-4 verbatim quotes, Lena voice, mechanism-first |

**Contradiction:** Impossible to maintain authentic voice at 1-2/day volume.

**Resolution needed:** BrightKidCo BFCM = 1 email/day max. "60-day guarantee = try before Pre-K" as the BFCM angle, not "50% off."

### 4.6 Conflict: Post-Purchase Cross-Sell Timing (R4 Conflict 6)

| Source | Says |
|---|---|
| L14 R2 (industry standard) | D2 = "Complete the set" cross-sell |
| L14 R1 (DOC1 trust pyramid) | Trust Tier 1 (mechanism) must be established before any selling |

**Resolution needed:** D2 = usage education only. Cross-sell moves to D7+ after trust reinforcement.

---

## 5. RECOMMENDED FIXES FOR SECTION 2 (INGESTION)

### 5.1 Must-Do in Section 2

| # | Fix | Effort | Impact |
|---|---|---|---|
| 1 | **Integrate R3 wiki findings** into synthesis (doubling rule, at-risk segment, recovery protocol, keyword discipline) | 30 min | HIGH — missing deliverability constraints |
| 2 | **Integrate R4 cross-reference** into synthesis (6 conflicts, 8 gaps, 5 matrices) | 45 min | HIGH — contradictions unresolved |
| 3 | **Create Avatar 5: GI/Withholding Parent** with full frequency/wording profile | 60 min | CRITICAL — #1 objection by volume |
| 4 | **Add Regression Frequency Stage** to the 6-stage curve (now 7 stages) | 30 min | HIGH — 278 mentions |
| 5 | **Create avatar × level crosswalk matrix** (4 emotional × 3 autism levels + General = 13+ combinations) | 45 min | HIGH — segmentation overlap unresolved |
| 6 | **Resolve all 6 conflicts** with explicit BrightKidCo overrides | 30 min | HIGH — implementation blockers |

### 5.2 Should-Do in Section 2

| # | Fix | Effort | Impact |
|---|---|---|---|
| 7 | Draft mechanism messaging examples for Overwhelmed Mom and Autistic Parent | 20 min | MEDIUM |
| 8 | Add nighttime training frequency separation | 20 min | MEDIUM |
| 9 | Add daycare/school wording rules | 15 min | MEDIUM |
| 10 | Define avatar detection signals | 30 min | MEDIUM |
| 11 | Define ad frequency caps per avatar | 15 min | MEDIUM |

### 5.3 Defer to Future Sections

| # | Fix | Reason |
|---|---|---|
| 12 | Sentence-level tone markers per avatar | Requires L17 (Tonality Calibration) |
| 13 | Frequency A/B testing protocols | Requires implementation context (L37 Klaviyo Setup) |
| 14 | Frequency decay mapping across Welcome Flow | Requires L16 (Flow Architecture) |
| 15 | Flow trigger logic for avatar routing | Requires L16 (Flow Architecture) |
| 16 | Re-audit L14 when L16/L17 are produced | Blocked on L16/L17 existence |

---

## 6. SYNTHESIS QUALITY ISSUES

### 6.1 Outdated Header
The synthesis header says "Missing upstream: R3 (Wiki Extraction), R4 (Cross-Reference) — not yet produced." Both R3 and R4 exist and have been produced. This header is factually incorrect and misleading.

### 6.2 Lost R2 Detail
Several R2 sections were summarized or omitted in the synthesis:
- Quarterly cadence calendar — present but condensed
- Flow email timing intervals — present but condensed
- VIP communication cadence — present but condensed
- Monthly planning/growth/health rituals — **omitted entirely**
- Send day/time best practices — **omitted entirely**
- Segment refresh cadence — **omitted entirely**
- Deliverability constraints — **omitted entirely**
- Retention vs acquisition allocation — **omitted entirely**

### 6.3 R4's Actionable Matrices Missing
R4 produced 5 detailed cross-reference matrices (A through E) that directly map frequency rules to flow stages, wording rules to tonality stages, and frequency × wording integration. These are the most actionable outputs for implementation. None are in the synthesis.

---

## 7. SUMMARY

| Metric | Value |
|---|---|
| Plan requirements met | ~65% |
| Rules in synthesis | 124 |
| Rules from R3/R4 NOT in synthesis | ~40+ additional findings |
| Conflicts identified (R4) | 6 (0 resolved in synthesis) |
| Gaps identified (R4) | 8 (0 addressed in synthesis) |
| New gaps identified (this analysis) | 5 |
| Missing layers blocking cross-reference | 2 (L16, L17) |
| Missing avatar (GI/Withholding) | 1 (CRITICAL — 730 mentions) |
| Missing frequency stage (Regression) | 1 (HIGH — 278 mentions) |
| Priority fixes for Section 2 | 11 (6 must-do, 5 should-do) |
| Deferred to future sections | 5 |

**Bottom line:** The synthesis is a strong foundation (124 rules, well-organized) but is operating on incomplete inputs. R3 and R4 findings are entirely absent, 6 contradictions remain unresolved, and the #1 objection by volume (GI/Withholding) has no avatar. Section 2 must integrate the missing rounds, resolve conflicts, and add the missing avatar before the frequency/wording system can be considered implementation-ready.
