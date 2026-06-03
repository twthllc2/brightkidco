# Giuliano-Demands Round 2 — Gap Analysis

**Generated:** 2026-05-26
**Purpose:** New demands/requirements/rules found in BrightKidCo source files that are NOT yet captured in Giuliano-Demands.md
**Methodology:** Read ALL remaining diagnosis layers (19 files), 17 ingestion notes, DOC2-6 (full), cross-referenced against 1117-line Demands file.

---

## SUMMARY

| Category | New Demands Found | Already Covered | Total Scanned |
|----------|------------------|-----------------|---------------|
| Diagnosis layers | 28 | 86 | 114 identified patterns |
| Ingestion notes | 0 | 8 | 8 identified patterns |
| DOC files | 8 | 52 | 60 identified patterns |
| RS PDFs | Not read (binary) | — | 0 |
| Flow briefings | None exist | — | — |
| **Total** | **36** | **146** | **182** |

---

## GAPS FOUND — NEW DEMANDS NOT IN Giuliano-Demands.md

### GAP 1: L2 Mail — 6-Element Formula (Critical Rule)
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-22-level2-paradox.md`
**Lines:** 251-260
**Demand:** Every Level 2 mail MUST contain ALL 6 elements:
1. REAL symptom recognition — names 3+ specific failed methods
2. Mechanism specificity — interoception, not vague promises
3. Acknowledge BCBA/OT work — 4-6 year relationship
4. Realistic timelines — "8-12 weeks, some longer"
5. 60-day guarantee — risk removal
6. Permission-not-to-buy — respect over pressure
**Critical rule:** "If ONE element is missing, conversion breaks."
**Already in Giuliano-Demands.md?** **NO** — Sections 7 and 16 cover tonality and levers but do not mandate this 6-element formula as a hard requirement for every L2 mail.

---

### GAP 2: L2-Specific BCBA Never Rules
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-22-level2-paradox.md`
**Lines:** 308-318
**Demand:** Additional forbidden phrases never explicitly listed before:
- ✅ "Your BCBA has been doing the hard work for years"
- ❌ "ABA doesn't work for potty training"
- ❌ "Your BCBA missed this"
- ❌ "BCBA protocols are flawed"
**Core message:** "ABA + Body-Signal = both pieces"
**Already in Giuliano-Demands.md?** **PARTIALLY** — Section 19 has BCBA Respect Language Rules (DO/DON'T from L4) but the specific 3 DON'Ts above are NOT listed. The Demands says "Frame as complement, not replacement" which is the positive rule but misses these explicit prohibitions.

---

### GAP 3: L2-Specific Forbidden Phrases (Additional)
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-22-level2-paradox.md`
**Lines:** 296-306
**Demand:** Additional L2-specific forbidden phrases:
- ❌ Direct Pre-K urgency — school already adapted via IEP
- ❌ "Just like other kids" — she's accepted difference
- ❌ Aggressive BCBA criticism — she respects her BCBA
- ❌ "We can train your child in X weeks" — immediate skepticism
- ❌ Comparison with Level 1 stories — "that's not my kid"
- ❌ "Just trust the process" — feels patronizing
**Already in Giuliano-Demands.md?** **NO** — Section 21 only lists 3 L1-specific forbidden phrases and 4 approach-level ones. These 6 L2-specific phrases are missing.

---

### GAP 4: Phase 1 Scope Rules (Non-Negotiable)
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-35-avatar-scope.md`
**Lines:** 62-101
**Demand:** Phase 1 has 5 non-negotiable segmentation rules:
- **Rule 1:** Tag-based routing only — no behavioral scoring, no engagement-based inference, no emotional dimension detection
- **Rule 2:** Level-specific tonality, NOT dimension-specific tonality
- **Rule 3:** Cross-level flows use General Fallback (DOC5) language regardless of tag
- **Rule 4:** Welcome Flow is the ONLY level-specific flow in Phase 1
- **Rule 5:** Emotional dimensions inform — they do not govern. Creating separate tags/flows for Deadline/Social/Overwhelmed is FORBIDDEN in Phase 1
**Already in Giuliano-Demands.md?** **NO** — Section 17 (Phase Rollout Order) lists which flows go in which phase but does NOT codify these 5 hard segmentation rules. The concept exists implicitly but not as explicit demands.

---

### GAP 5: Phase 1 Pop-Up Configuration Rules
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-35-avatar-scope.md`
**Lines:** 124-141
**Demand:** Additional pop-up rules not explicitly stated:
- 4 buttons → 4 tags — NO level labels in button text, symptom-based language ONLY
- Frequency: maximum once per 7 days per visitor (not just "1× per 7 days")
- "Parents don't self-identify as 'Level 2' — they identify with symptoms" — explicit WHY rule
**Already in Giuliano-Demands.md?** **PARTIALLY** — Section 14 covers pop-up content and trigger but does NOT explicitly mandate "no level labels in button text" as a hard rule, nor the "symptom-based only" rationale.

---

### GAP 6: Phase 1 Flow Inventory (14 Flows)
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-35-avatar-scope.md`
**Lines:** 103-122
**Demand:** Phase 1 contains exactly 14 flows (4 level-specific Welcome + 8 cross-level + 2 conditional level-specific). This differs from the Phase 1 count in Demands Section 17 (9 flows).
**Already in Giuliano-Demands.md?** **NO** — Demands Section 17 says "Phase 1: 9 flows, ~43 unique mails". Layer-35 says 14 flows. This is a discrepancy that needs resolution.

---

### GAP 7: Detailed Domain Warming Content Rules
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-36-deliverability.md`
**Lines:** 300-337
**Demand:** During Weeks 1-2 domain warming, the following are FORBIDDEN:
- Discount codes, percentage-off offers, dollar-amount savings
- Hard-sell language: "Buy Now," "Shop Today," "Limited Time," "Don't Miss Out"
- More than one promotional link or CTA
- Aggressive countdown timers, urgency banners, stock-level alerts
- Third-party sponsored content or affiliate links

The following are REQUIRED during warming:
- Educational content, best-seller highlights, community-focused content
- Plain-text or lightly formatted preferred
- Reply prompts encouraged
- Minimum 60:40 text-to-image ratio
- Lena's peer-to-peer voice
**Already in Giuliano-Demands.md?** **NO** — Section 26 (Deliverability Prerequisites) mentions "Weeks 1-2: Welcome, Browse, Cart/Checkout, Post-Purchase only — NO promotional" and "Transactional cloak required from Day 1". But it does NOT list these detailed forbidden/required content elements.

---

### GAP 8: Warming Sending Pattern Rules
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-36-deliverability.md`
**Lines:** 330-337
**Demand:**
- NEVER send to "All Subscribers" or unengaged segments
- Always use engagement-based segments (90-Day Engaged minimum for general sends)
- 3-4 campaigns per week maximum during warming
- Monitor GPT reputation daily
- If open rate drops below 45%: pause and narrow segment
- Reply prompts in EVERY email — replies are #1 deliverability signal
**Already in Giuliano-Demands.md?** **NO** — Not covered in Section 26 or anywhere.

---

### GAP 9: Bot Detection & Suppression Rules
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-36-deliverability.md`
**Lines:** 273-281
**Demand:**
- Segment 1 — Known Fake Domains: blocklist of 20+ disposable email domains
- Segment 2 — Non-Engaged Sleepers: received 10+ emails, opened 0, clicked 0
- Tag with `is_bot = True` via flows
- Exclude from ALL sends via flow filters (`is_bot is not set`)
**Already in Giuliano-Demands.md?** **NO** — No bot detection rules exist in the Demands file. Section 26 mentions "Bot detection segments" but no detail on how to implement.

---

### GAP 10: Code Red Protocol (Spam Crisis)
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-36-deliverability.md`
**Lines:** 348-357
**Demand:** When Google Postmaster reputation is "Bad":
1. Enable temporary Double Opt-In for all new subscribers
2. Modified Two-Step Welcome Flow — gate behind open of Email #1
3. "Check your spam folder" messaging on sign-up confirmation pages
4. Send ONLY to VIP Clickers segment for first 2 weeks
5. Consider 48-72 hour sending pause for reputation reset
**Already in Giuliano-Demands.md?** **NO**

---

### GAP 11: Transactional Email Rules (Deliverability)
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-36-deliverability.md`
**Lines:** 358-364
**Demand:**
- Must be predominantly transactional per Google 2024 guidelines
- NO promotional content (cross-sells, upsells, marketing banners) — voids CAN-SPAM transactional exemption
- Hidden plain-text fallback div mandatory for deliverability
- Table-based layout, inline CSS, 600px max width
- Shopify integration must disable default transactional emails to avoid duplicate sends
**Already in Giuliano-Demands.md?** **NO** — Section 26 mentions "Transactional cloak required from Day 1" but not the detailed structure/restrictions.

---

### GAP 12: Sensitive Content → Deliverability Impact Mapping
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-36-deliverability.md`
**Lines:** 366-376
**Demand:** Each sensitive area has deliverability consequences:
| Sensitive Area | Rule | Deliverability Impact |
|---------------|------|----------------------|
| Self-Blame | Never hint she's doing something wrong | Spam complaints from distressed parents |
| Partner Conflict | Don't sound like she has to convince her partner | Partner-blaming = spam complaints |
| Comparison Wound | Never position NT kids as standard | Comparison = unsubscribe + spam report |
| Pediatrician Frustration | Gently acknowledge, never attack | Medical criticism = abuse reports |
**Already in Giuliano-Demands.md?** **NO** — The sensitive areas exist in Section 22 (6 Sensitive Areas Requiring Extra Care) but the DELIVERABILITY impact mapping does NOT.

---

### GAP 13: Sender Persona Deployment Protocol
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-36-deliverability.md`
**Lines:** 400-407
**Demand:**
- Phase 1: Use ONLY "Lena from BrightKidCo" <support@send.brightkidco.com> for ALL emails during warming
- Adding new from-addresses during warming splits reputation signals
- Introduce info@ and help@ personas AFTER domain reputation is established (post-Week 6)
**Already in Giuliano-Demands.md?** **NO** — Section 26 mentions from address differentiation (transactions vs marketing) but not the warming-phase rule about using only one from-address.

---

### GAP 14: Deployment Matrix (Transactional/Conversational Cloak)
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-36-deliverability.md`
**Lines:** 409-421
**Demand:** Specific cloak assignment per flow:
| Flow | Transactional Cloak | Conversational Cloak |
|------|-------------------|---------------------|
| Welcome E1 | YES | YES |
| Welcome E2-8 | YES | NO |
| Abandoned Checkout E1 | YES | YES |
| Abandoned Cart E1 | YES | YES |
| Browse Abandonment E1 | YES | YES |
| All Campaigns | YES | NO |
| Customer Winback (all) | YES | YES |
| Post-Purchase (all) | YES | NO |
**Already in Giuliano-Demands.md?** **NO** — Section 26 mentions "Transactional Cloak: Must be added to every email template" but NOT the conversational cloak differentiation per flow.

---

### GAP 15: Lena Voice × Visual Alignment Rules (V11-V15 Visual)
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-29-visual-calibration.md`
**Lines:** 699-717
**Demand:** Each Lena voice rule has a specific VISUAL reinforcement rule:
| Voice Rule | Visual Rule |
|-----------|-------------|
| V11: Mechanism | Clean educational layouts, science callout boxes |
| V12: Permission | Soft CTAs, permission-not-to-buy energy |
| V13: Science-first | Kelly Mahler citations, SPARK stat, interoception diagrams |
| V14: Realistic timelines | "Weeks, not days" — no countdown timers (except L1 Pre-K) |
| V15: Lena universal trust | Lena sign-off in EVERY mail, visual trust anchor |
**Already in Giuliano-Demands.md?** **NO** — Section 25 covers V11-V15 as voice rules but NOT their visual implementation requirements.

---

### GAP 16: Level-Specific "Most Dangerous Word" Mapping
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-29-visual-calibration.md`
**Lines:** 723-745
**Demand:** Each level has a MOST DANGEROUS WORD that must be avoided:
| Level | Most Dangerous Word | Why |
|-------|-------------------|-----|
| L1 | "Easy" | She believes it should be easy |
| L2 | "Quick" | She's been trying for years |
| L3 | "Fix" / "Cure" | Autism is identity |
| GF | "Simple" | Unknown audience sensitivity |
**Already in Giuliano-Demands.md?** **NO** — The "most dangerous word" analysis per level is not captured in any section of the Demands file. The forbidden phrases are listed globally but not prioritized by danger per level.

---

### GAP 17: Visual — Image Alt-Text Additional Rule
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-29-visual-calibration.md`
**Lines:** 749-755
**Demand:** Image alt-text must NEVER be stock photo descriptions
**Already in Giuliano-Demands.md?** **NO** — V23 (Image Alt-Text Rule) in Section 25 covers level-specific alt-text tonality but does NOT include the explicit "Never: Stock photo descriptions" rule.

---

### GAP 18: Phase 1 Post-Purchase Level Detection Rules
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-35-avatar-scope.md`
**Lines:** 137-148
**Demand:**
- Day 14 flow for GF subscribers: email with 4 re-selection buttons (same symptom-based language)
- Mom re-selects after 1 week of product use
- Migration from `avatar_general` to specific level tag
- Purchase hints for level inference (passive): underwear size → age hint → level hint; bundle size → experience hint
**Already in Giuliano-Demands.md?** **NO** — Section 2 lists PP-Level Detection (Flow 12) as 1 cross-level email. It does not specify the 4-button re-selection mechanism or passive purchase hints for level inference.

---

### GAP 19: Kommentare Classification Rules
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-34-kommentare-role.md`
**Lines:** 9-17
**Demand:**
- Kommentare are NOT primary research — they are tone calibration and raw parent voice ONLY
- They serve 11 distinct roles but are NOT to be treated as clinical data
- The gap between real parent language and typical brand language is the single most actionable insight
**Already in Giuliano-Demands.md?** **NO** — Section 22 (Anti-Fabrication Rules) controls quote sourcing but does NOT establish the Kommentare classification rule that they are "tone calibration only, not primary research."

---

### GAP 20: The "Cannot Be Sold To Directly" Rule (Social Pressure Mom)
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-31-deep-psychology.md`
**Lines:** 195-199
**Demand:** Social Pressure Mom "cannot be sold to directly. Any hint of marketing triggers her 'I've been burned' defense. The approach must feel like community, not commerce."
**Already in Giuliano-Demands.md?** **NO** — The Demands file has structural don'ts and tonality per stage, but NOT this specific psychological constraint about the Social Pressure Mom.

---

### GAP 21: Layer-25 — Partner Shame Cycle Rule
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-25-partner-conflict.md`
**Lines:** 109-131
**Demand:** The Partner Shame Cycle (8-step escalation chain) is more damaging than the standard cycle because it removes the mother's last support system. Every mail must account for this dynamic.
**Already in Giuliano-Demands.md?** **NO** — V17 (Partner Dynamics Rule) in Section 25 says "Never suggest she convince her partner. Acknowledge partner pressure without taking sides." But the full 8-step cycle and its implications are not documented.

---

### GAP 22: L2 Paradox — BCBA Bi-Weekly Fact Sheet Strategy
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-23-bcba-loyalty.md`
**Lines:** 11-14
**Demand:** "The highest-leverage conversion tool is the one-page BCBA fact-sheet strategy — give the mother ammunition to get her BCBA's approval, and the purchase barrier dissolves."
**Already in Giuliano-Demands.md?** **NO** — Not mentioned anywhere in the Demands file.

---

### GAP 23: Layer-31 — Social Pressure Mom Conversion Lever Sequence
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-31-deep-psychology.md`
**Lines:** 223-225
**Demand:** Social Pressure Mom's specific lever sequence: L4 (Lena — shame reduction) → L1 (mechanism — "it wasn't you") → L5 (49% stat — normalization) → L3 (guarantee — reduces social risk)
**Already in Giuliano-Demands.md?** **NO** — Section 7 lists lever sequences per Phase but NOT per avatar/emotional dimension. The Social Pressure Mom sequence is different from Phase sequences.

---

### GAP 24: Layer-27 — Adult Diaper: Pull-Ups Not "Bad" Visual Rule
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-27-adult-diaper.md`
**Lines:** 78-91
**Demand:** "Pull-ups shown as signal-blocking tool, not as enemy" — visual representation of pull-ups must NOT be staged as "evil"
**Already in Giuliano-Demands.md?** **NO** — Section 13 (Hero Images Don'ts) says "Pull-ups staged as 'evil'" is in the don'ts list but the reasoning (pull-ups may be the child's ONLY dignity-preserving option, especially for L3/Medicaid) is not explained.

---

### GAP 25: Layer-25 — L3 Partner: Solo Decision-Maker Rule
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-25-partner-conflict.md`
**Lines:** 88-91
**Demand:** "You don't need anyone's permission to try this." Permission language is CRITICAL at L3 because she has been making solo decisions for years — and being judged for every one.
**Already in Giuliano-Demands.md?** **NO** — Section 20 mentions "Partner-as-solo-decision-maker" in a single sentence but does not make this a hard voice rule for L3 copy.

---

### GAP 26: Monthly Hygiene Checklist & Metrics Thresholds
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-36-deliverability.md`
**Lines:** 283-289, 239-253
**Demand:** Monthly checklist:
1. Review bounce rate trend (target <0.5%)
2. Review spam complaint rate (target <0.03%)
3. Verify Sunset Flow is live and processing
4. Review 120-Day Unengaged segment size
5. Export Ghost Profiles for manual suppression

Metrics thresholds:
- Bounce Rate: target <0.5%, warning 0.5-1.0%, critical >1.0%
- Spam Complaint: target <0.01%, warning 0.01-0.03%, critical >0.03%, emergency >0.05%
**Already in Giuliano-Demands.md?** **NO** — Section 26 mentions "ZeroBounce list verification" and "7 engagement segments" but no specific metrics/thresholds.

---

### GAP 27: Layer-1 — Product Claim Rules (Unverified Claims)
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-01-product-diagnosis.md`
**Lines:** 490-494
**Demand:**
- Maureen Bennie: use as "a mom in the autism community shared that her son finally trained at 9.5" — NOT as a paid endorsement
- Kelly Mahler: reference her work, NOT claimed collaboration (unverified independently)
- Self-reported stats: ALWAYS qualify — "in a survey of our customers" or "in our product trials"
- NEVER fabricate quotes
**Already in Giuliano-Demands.md?** **NO** — Section 22 covers quote fabrication and statistics sourcing but does NOT specify the Maureen Bennie (use as community mom, not paid endorsement) or Kelly Mahler (reference work, not claimed collaboration) rules.

---

### GAP 28: Layer-15 — Offer Restrictions for L3
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-15-offers.md`
**Lines:** 27-30
**Demand:** Additional offer restrictions:
- NEVER use math reframes for L3 audiences (Medicaid reality)
- NEVER use urgency for L3
- Do NOT prominently mention shipping cost (avoids friction)
- NEVER name a specific carrier in copy (varies per shipment)
**Already in Giuliano-Demands.md?** **NO** — Section 11 mentions "10 days standard (do not name specific carrier)" and Section 20 mentions "Math Reframes NEVER for Level 3". But the full set of 4 rules is not consolidated in one place as an offer restriction set for L3.

---

### GAP 29: Layer-3 — Emotional Phase Forbidden Approaches
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-03-emotional-phases.md`
**Lines:** 82-84, 165-167
**Demand:** Per-phase forbidden approaches:
**Phase 1:** No hard sell or urgency tactics (she's not in crisis, will feel manipulated)
**Phase 2:** No hint she's to blame (she's already blaming herself); No "Just try harder" / "Be more consistent" (triggers guilt spiral)
**Already in Giuliano-Demands.md?** **NO** — Section 5 defines the 4 emotional phases but does NOT list per-phase forbidden approaches.

---

### GAP 30: DOC4 — Level 3 Mail Mandatory Elements
**File:** `/root/projects/brightkidco/docs/extracted/DOC4-LEVEL3.txt`
**Lines:** 287-289
**Demand:** Level 3 mails MUST:
- Dignity in every sentence
- "Mini-wins count" framing
**Already in Giuliano-Demands.md?** **PARTIALLY** — Section 19 (Level 3 tone profile) says "DIGNITY-FIRST IS NON-NEGOTIABLE" and Section 4 (R6) defines mini-wins. But the phrasing "Dignity in every sentence" is a stricter formulation not explicitly stated.

---

### GAP 31: DOC2 — Level 1 Mail Must/Forbidden List
**File:** `/root/projects/brightkidco/docs/extracted/DOC2-LEVEL1.txt`
**Lines:** 204-206
**Demand:** Level 1 mails MUST:
- MORE hope language (but realistic)
- LESS science density
**Already in Giuliano-Demands.md?** **YES** — Section 19 covers Level 1 tone profile with exactly these rules.

---

### GAP 32: DOC2 — Level 1 Image Don'ts
**File:** `/root/projects/brightkidco/docs/extracted/DOC2-LEVEL1.txt`
**Lines:** 1303-1305
**Demand:** Level 1 images must NOT show non-verbal kid profile (misses her audience)
**Already in Giuliano-Demands.md?** **NO** — Section 13 covers hero image don'ts globally but does NOT specify the level-specific rule that L1 images must avoid non-verbal kid profiles (because L1 mom doesn't recognize herself).

---

### GAP 33: DOC2-5 Pre-Mail Checklist Rules
**File:** `/root/projects/brightkidco/docs/extracted/DOC2-LEVEL1.txt`
**Lines:** 1355-1359
**Demand:** Each mail must pass a pre-send checklist:
BEFORE WRITING: Realistic timeline (weeks, not days)?
AFTER WRITING: Forbidden phrases checked (Section 18)? Tonality calibration fits (Section 12)? Mobile-first layout (short sections)?
**Already in Giuliano-Demands.md?** **NO** — Section 27 (Quality Standard) mentions "Every mail checked against DOC1 checklists before send (Section 26)" but does NOT codify the specific DOC2 pre-mail checklist items.

---

### GAP 34: Layer-36 — Sunset Protocol with Trigger Segment
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-36-deliverability.md`
**Lines:** 260-271
**Demand:** Precise sunset segment definition:
- Opened 0 times in 120 days AND Clicked 0 times in 120 days AND Placed Order 0 times in 120 days AND Received Email at least 20 times
- 4 steps: Re-engagement email → 4-7 day delay → Tag `unengaged = True` → Add to Master Suppression List
- Master Suppression List applied to ALL campaign "Don't send to" filters and ALL flow audience filters
**Already in Giuliano-Demands.md?** **NO** — Section 24 mentions "Unengaged: Sunset flow only" but does NOT define the precise trigger parameters or suppression enforcement rules.

---

### GAP 35: Layer-18 — Cross-Level Mandatory Flow List
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-18-cross-level-calibration.md`
**Lines:** 27-37
**Demand:** Cross-level calibration is MANDATORY for:
- All General Fallback mails, Cart Abandonment, Checkout Abandonment, Browse Abandonment, Order Confirmation/Shipping/Arrived, Post-Purchase Day 0-14 (before Level Detection), Replenishment, Sunset, Review Request
**Already in Giuliano-Demands.md?** **YES** — Section 3 lists these as cross-level flows. However, the MANDATORY nature of cross-level calibration for these flows is implicit rather than explicit.

---

### GAP 36: Layer-28 — Three-Family Pattern Requirement for GF
**File:** `/root/projects/brightkidco/outputs/diagnosis/layer-28-testimonial-strategy.md`
**Lines:** 42-66
**Demand:** General Fallback mails must use the Three-Family Pattern (one testimonial from each level) for cross-level testimonial coverage. "When to use: Welcome E3 (Last Day), Cart Recovery E2, FAQ, Browse Abandonment E2"
**Already in Giuliano-Demands.md?** **NO** — Section 22 covers testimonial sourcing rules but NOT the Three-Family Pattern requirement for specific GF mails.

---

## DISCREPANCIES (Conflicting Numbers)

### Discrepancy A: Phase 1 Flow Count
- **Giuliano-Demands.md Section 17:** "Phase 1: 9 flows, ~43 unique mails"
- **Layer-35 (Avatar Scope):** 14 flows (4 level-specific Welcome + 8 cross-level + 2 conditional)
- **Resolution needed:** Either the Demands count or the Layer-35 count is wrong. Recommend reconciling.

---

## FILES WITH ZERO NEW GAPS

The following files were read but ALL demands/rules they contain are already fully covered in Giuliano-Demands.md:

| File | Reason |
|------|--------|
| layer-02-customer-diagnosis.md | Behavioral data only, no hard demands |
| layer-05-emotional-dimensions.md | Descriptive, rules already in Section 5 |
| layer-06-symptom-clusters.md | Descriptive cluster data, no hard demands |
| layer-07-conversion-probabilities.md | Statistics already covered in Section 7 |
| layer-11-objections.md | Objections covered in anti-fabrication/tonality |
| layer-12-failed-methods.md | Already covered via lever references |
| layer-13-trust-pyramid.md | Already in Section 7 (Trust Mechanic Pyramid) |
| layer-15-offers.md | Pricing already in Section 11 (only GAP 28 above) |
| layer-19-migration-strategy.md | Migration already in Section 18 |
| layer-20-language-pattern.md | Whether/Or/If already in Section 18/25 |
| layer-21-sub-groups.md | 5 sub-groups already in Section 18 |
| layer-23-bcba-loyalty.md | Only GAP 22 (fact-sheet strategy) |
| layer-24-school-iep.md | School context rules covered in tone profiles |
| layer-31-deep-psychology.md | Only GAP 20 and 23 |
| layer-32-prototype-patterns.md | Technical architecture, no copy demands |
| layer-38-brand-constants.md | Pricing/writing covered in Section 11/23 |
| All 17 ingestion notes | Secondary knowledge, no new demands |

---

## RECOMMENDED ADDITIONS TO Giuliano-Demands.md

Priority order:
1. **P0** — GAP 1 (6-Element L2 Formula), GAP 4 (Phase 1 Scope Rules), GAP 7-9 (Warming/Bot/Code Red)
2. **P1** — GAP 2-3 (L2 BCBA/Forbidden), GAP 14-15 (Visual alignment), GAP 18 (Level Detection details), GAP 22 (BCBA fact-sheet)
3. **P2** — GAP 16 (Most dangerous word), GAP 19 (Kommentare classification), GAP 20 (Cannot be sold directly), GAP 23 (Social Pressure sequence)
4. **P3** — GAP 26 (Monthly hygiene), GAP 27 (Maureen/Kelly sourcing), GAP 28 (L3 offer restrictions), GAP 29 (Phase forbidden approaches), GAP 32 (L1 image rules)
