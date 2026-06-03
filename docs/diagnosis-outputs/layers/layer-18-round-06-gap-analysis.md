# Layer 18 — Cross-Level Calibration: Gap Analysis (Round 6)

## Overview

This gap analysis examines the Cross-Level Calibration rules across DOC1 (Master Foundation, Section 22) and DOC5 (General Fallback Profile). The core 6 rules from DOC1 plus the expanded framework in DOC5 provide a strong foundation, but significant gaps remain — particularly around level coverage balance, General Fallback sub-group interactions, migration timing, and cross-level flow specificity.

---

## Gap 1: Hope/Realism Contradiction Across Phases

**Severity: HIGH**

DOC1 Section 6 defines distinct hope requirements per phase:
- Phase 1: 70% hope / 30% realism
- Phase 2: 50/50
- Phase 3: 20% hope / 80% realism (actually "Med-Low hope")
- Phase 4: "Hidden" hope, calm resignation

DOC5 Section 20 prescribes 50/50 hope/realism for General Fallback mails.

But DOC5 Section 7 (4-Phase Mix Dynamics) also says every GF mail must "simultaneously address all 4 phases." This creates a fundamental tension: 50/50 hope won't satisfy Phase 1 parents (who need 70% hope) or Phase 4 parents (who need deep calm, not hopeful language). The 50/50 compromise risks feeling too hopeful for Phase 3-4 and too restrained for Phase 1.

**What's missing:** A structural rule for HOW to layer hope within a single GF mail. The "3-Level Psychological Pyramid" (Surface/Middle/Deep from DOC5 Section 6) partially addresses this, but the pyramid maps to symptom depth, not hope modulation. There's no equivalent "hope gradient" within the mail structure — e.g., opener at 50/50, body at 60/40 hope, mechanism section at 30/70, closer at 50/50.

**Recommendation:** Add a "Hope Gradient Per Section" rule that maps hope levels to the mail's structural sections, so a single mail can satisfy multiple phases without collapsing to a flat 50/50.

---

## Gap 2: Level 3 Underrepresentation in Universal Symptom Hooks

**Severity: HIGH**

DOC5 Section 8 lists Universal Symptom Hooks (Priority 1 and Priority 2). Analysis of level coverage:

| Hook | Level 1 | Level 2 | Level 3 |
|------|---------|---------|---------|
| "Sits on toilet 20 min, nothing" | ✓ | ✓ | ✓ |
| "Pees right after pull-up off" | ✓ | ✓ | ✓ |
| "Plays in wet pull-up w/o reacting" | - | ✓ | ✓ |
| "Refuses to even try toilet" | ✓ | ✓ | ✓ |
| "Pediatrician says 'wait'" | ✓ | ✓ | ✓ |
| "Holds BMs until pull-ups" | ✓ | ✓ | ✓ |
| "Can talk about pottying but can't do it" | ✓ | ✓ | - |
| "'Almost trained' multiple times" | ✓ | ✓ | - |
| "Pees seconds after leaving toilet" | ✓ | ✓ | ✓ |
| "Doesn't notice/care they're wet" | - | ✓ | ✓ |
| "Screams when toilet flushes" | - | ✓ | ✓ |
| "Same toilet only, elsewhere = meltdown" | - | ✓ | ✓ |

Level 3-specific hooks are limited to sensory reactions and toilet aversion. Missing Level 3 hooks:
- "Has been in pull-ups for 5+ years with zero progress"
- "Is moving to adult diapers / specialty sizes"
- "Non-verbal and shows no body-signal awareness at all"
- "Has GI issues alongside toileting (chronic constipation, withholding)"
- "School/program has given up on toileting goals"
- "Puberty approaching with no toileting independence"

**Recommendation:** Add 4-6 Level 3-dominant symptom hooks to Priority 1 or create a Priority 1B tier. The current hooks skew toward "the child sometimes does X" (Level 1-2) rather than "the child never does X" (Level 3).

---

## Gap 3: Missing Sub-Group Interaction Rules

**Severity: HIGH**

DOC5 defines 5 sub-groups within General Fallback:
- A: Diagnostic Entrants (~25%)
- B: Diagnosis-Rejecters (~15%)
- C: Sensory-Difference Parents (~25%)
- D: Overwhelmed Non-Selectors (~25%)
- E: Cart/Browse Without Opt-In (~10%)

The doc provides tonality and language guidance per sub-group, but NO rules for what happens when sub-group needs conflict within a single mail:

**Conflict 1: Sub-Group A vs. Sub-Group B**
- A wants education about autism diagnosis ("Is this autism?")
- B actively rejects diagnosis language ("My kid is just my kid")
- Both receive the same GF mail

**Conflict 2: Sub-Group C vs. Sub-Group D**
- C has no ASD diagnosis (ADHD/SPD only) and wants mechanism science
- D has a child with a clear ASD level but didn't self-select
- Both need different things from the same symptom language

**Conflict 3: Sub-Group E vs. All Others**
- E has no pop-up context, no email engagement history, mobile-heavy browsing
- E needs direct, symptom-recognition + mechanism + guarantee
- Other sub-groups need the full "Whether...Or...If..." structure

**What's missing:** A priority/subordination rule for sub-group conflicts. When Sub-Group A's needs clash with Sub-Group B's needs, which wins? Currently the rules say "address all simultaneously" but don't provide a conflict resolution hierarchy.

**Recommendation:** Add a "Sub-Group Priority Matrix" that establishes:
1. Symptom-first language always wins over label-specific language (resolves A vs. B)
2. Mechanism language is the universal bridge (resolves C vs. D)
3. For Sub-Group E, front-load recognition + guarantee, skip the "journey" framing

---

## Gap 4: Migration Timing Rules Missing

**Severity: MEDIUM-HIGH**

DOC5 Part H (Sections 28-33) describes 4 migration paths:
1. Click-based migration
2. Reply-based migration
3. Purchase-based hints
4. Post-purchase level detection (Day 14)

But there are NO rules for WHEN migration attempts should begin:

- Should migration anchors appear in Welcome E1 (first mail)?
- Should they wait until E3 or E4 (after the mechanism is understood)?
- How many GF mails should a subscriber receive before being "migrated"?
- What's the minimum engagement threshold before migration makes sense?

The Day 14 post-purchase level detection mail is well-specified, but for non-purchasers who stay in the Welcome flow, there's no guidance on migration timing.

**What's missing:**
- Minimum mail count before migration anchors appear (suggested: E2+, after mechanism is introduced)
- Engagement threshold for migration (don't migrate someone who hasn't opened the last 2 mails)
- Graceful fallback when migration fails (subscriber stays GF permanently — what then?)
- Migration rate expectations (what % should migrate within 30 days? 60 days?)

**Recommendation:** Add a "Migration Timing Ladder":
- E1: No migration (focus on code delivery + universal recognition)
- E2: First migration anchors (after mechanism is established)
- E3: Strongest migration push (Three-Family testimonial)
- E4+: Soft migration anchors in every mail
- Post-purchase Day 14: Formal detection mail

---

## Gap 5: Browse Abandonment Flow Underdeveloped

**Severity: MEDIUM-HIGH**

Cross-level flow coverage comparison:

| Flow | Sample Openers | Subject Lines | Email Sequence | Migration Anchors |
|------|---------------|---------------|----------------|-------------------|
| Welcome | 5+ variants | 15+ | E1-E8 specified | ✓ detailed |
| Cart Abandonment | 3 variants | 9 | E1-E3 specified | ✓ detailed |
| Checkout Abandonment | Referenced | 3 | E1-E3 implied | Partial |
| Browse Abandonment | 1 variant | 3 | E1 only | Minimal |
| Post-Purchase | 2 variants | 5 | Day 0-14 specified | ✓ (Day 14) |
| Winback | 1 variant | 0 | Not specified | None |
| Sunset | Referenced | 0 | Not specified | None |

Browse Abandonment — the flow where a non-subscriber browses the site without adding to cart — has only ONE sample opener and THREE subject lines. For a cross-level audience that includes Sub-Group E (10% of GF, no pop-up opt-in), this is a critical gap. Browse abandoners are the hardest to convert because they have no email history and no engagement context.

**What's missing:**
- Full Browse Abandonment email sequence (E1-E3 minimum)
- Browse-specific symptom hooks (what did they look at? product page? blog?)
- Browse-specific migration strategy
- Browse-specific tonality calibration (even more skeptical than Cart abandoners)

**Recommendation:** Develop a full Browse Abandonment sequence with at least 3 emails, each with cross-level calibration rules specific to the browse context.

---

## Gap 6: Geographic/Cultural Language Calibration Missing

**Severity: MEDIUM**

DOC1 Section 2 specifies geo distribution: 65% US, 15% UK, 15% AU/NZ, 5% CA. But there are NO rules for how language should adapt across these markets.

Specific gaps:
- "Potty training" (US) vs. "toilet training" (UK/AU)
- "Pull-ups" (US brand) vs. "pull-ups" (generic in UK/AU) — is the brand name universal?
- "Pre-K" (US concept) vs. "nursery" (UK) vs. "kindergarten" (AU) — DOC5 already flags Pre-K as forbidden, but doesn't provide UK/AU alternatives
- "Pediatrician" (US) vs. "paediatrician" (UK/AU spelling) vs. "health visitor" (UK concept)
- "BCBA" and "ABA" are US-centric therapy terms; UK parents may use "SEN" (Special Educational Needs)
- Medicaid is US-specific; UK parents have NHS, AU parents have NDIS

The forbidden phrase "Pre-K" (DOC5 Section 24) acknowledges the US-centricity but doesn't provide alternatives for other markets.

**What's missing:**
- A geographic language substitution table
- Market-specific urgency triggers (UK: school reception year; AU: school starting age)
- Insurance/program terminology per market
- Spelling/terminology preferences per market

**Recommendation:** Add a "Geographic Calibration" section to the cross-level rules with a substitution table and market-specific triggers.

---

## Gap 7: Post-Purchase GF Rules (Day 0-14) Missing

**Severity: MEDIUM**

DOC5 mentions the post-purchase period before level detection (Day 0-14) in several places but provides NO specific calibration rules for this period. A GF buyer in this window is in a unique state:

- She has committed (purchased) but hasn't been level-tagged
- She's in the "Use & Adaptation" phase (DOC1 Section 24)
- She needs realistic Week-1 expectations
- She's hoping, observing, vulnerable
- Mini-wins acknowledgment matters

**What's missing:**
- Tonality calibration for post-purchase GF (is it still 50/50 hope?)
- What symptom hooks to use during the "observation period"
- How to handle a GF buyer who reports zero progress in Week 1
- Whether to attempt migration BEFORE Day 14 (via email engagement signals)
- What to do if the buyer doesn't open the Day 14 detection mail

**Recommendation:** Add a "Post-Purchase GF Calibration" section covering Day 0-14 tonality, symptom hooks, progress framing, and fallback when Day 14 detection fails.

---

## Gap 8: Unified Forbidden Phrases Checklist Missing

**Severity: MEDIUM**

Forbidden phrases are scattered across two documents:

**DOC1 Section 15 (Forbidden Phrases & Sensitive Areas):**
- "Easy" / "Quick" / "Simple"
- "Cure" / "Fix" / "Solve"
- "He'll be normal"
- "Just like other kids"
- "Get him trained!"
- Heavy resignation language
- School-specific urgency (Pre-K)

**DOC5 Section 24 (Forbidden Phrases — Cross-Level Specific):**
- "For Level 1/2/3 kids..."
- "Diagnosed autism only"
- "Verbal kids will..."
- "Your toddler will..."
- School-specific urgency (Pre-K)
- Aggressive math reframes
- "Just like other kids"
- Strictly behavioral language
- "Get him trained!"
- Heavy resignation language
- "Easy" / "Quick" / "Simple"
- "Cure" / "Fix" / "Solve"
- "He'll be normal"
- "When she's potty trained..."

There's significant overlap but also additions in each list. A marketer building a GF mail needs to cross-reference TWO lists. Some entries appear in both (redundant), and there's no single source of truth.

**What's missing:**
- A unified forbidden phrases checklist combining DOC1 + DOC5 + any level-specific additions from DOC2-4
- A "severity" ranking (which violations are "delete immediately" vs. "rephrase")
- A "context-dependent" category (phrases that are forbidden in GF but OK in level-specific mails)

**Recommendation:** Create a single "Forbidden Phrases Master Checklist" that consolidates all entries from DOC1, DOC5, and DOC2-4 with severity ratings and context exceptions.

---

## Gap 9: Winback Flow Cross-Level Rules Missing

**Severity: MEDIUM**

DOC5 provides ONE winback sample opener:
"It's been a while. Wherever you are now — still in pull-ups, on a new method, or taking a break — I wanted to share one new piece. Maybe it lands, maybe it doesn't."

But there's no:
- Winback email sequence (how many emails? timing?)
- Winback-specific symptom hooks (she's been away — what's changed?)
- Winback-specific tonality (she's MORE skeptical now, not less)
- Winback-specific migration strategy (has her child aged into a different level?)
- Winback-specific forbidden phrases
- Winback-specific subject lines

For a cross-level audience, winback is especially complex because:
- Sub-Group A may have gotten a diagnosis since she left
- Sub-Group D may have self-identified since she left
- Sub-Group C may have discovered new sensory information
- Her child is older now — phase may have shifted

**What's missing:** A full winback cross-level calibration section with sequence, tonality, symptom hooks, and migration re-engagement rules.

**Recommendation:** Develop a winback cross-level strategy that accounts for the subscriber's time away and potential identity/phase shifts.

---

## Gap 10: A/B Testing Guidance for Cross-Level Mails

**Severity: MEDIUM-LOW**

The cross-level rules are highly prescriptive — exact tonality ratios, specific symptom hooks, structural formulas. But there's NO guidance on what to test or iterate on:

- Should you test the hope/realism ratio (50/50 vs. 60/40 vs. 40/60)?
- Should you test symptom hook order (Level 1 hooks first vs. Level 3 hooks first)?
- Should you test testimonial format (Three-Family vs. Single Cross-Level)?
- Should you test migration anchor placement (mid-mail vs. footer vs. PS line)?
- Should you test the "Whether...Or...If..." structure vs. a simpler opener?
- What metrics define success for a cross-level mail (open rate? click rate? conversion? migration rate?)

**What's missing:**
- A testing roadmap for GF mails
- Priority order of what to test first
- Success metrics per test type
- Minimum sample sizes for meaningful results (GF is 50% of audience — large enough for A/B tests)

**Recommendation:** Add a "Testing & Iteration" section with a prioritized testing roadmap for GF mails.

---

## Gap 11: Sub-Group E (Cart/Browse Without Opt-In) Underspecified

**Severity: MEDIUM-LOW**

Sub-Group E is 10% of GF but has unique characteristics that aren't addressed:
- No pop-up context (she never answered "Still figuring out")
- No email engagement history (first contact is a cart/browse trigger)
- Mobile-heavy browsing (impulsive, not research-driven)
- Active buying intent (cart action signals interest)
- But abandoned — what stopped her?

The cross-level rules treat all GF subscribers the same, but Sub-Group E needs a distinct approach:
- She doesn't need the "journey" framing (she's not in a journey — she's in a transaction)
- She needs symptom recognition + mechanism + guarantee, fast
- She may not even know what BrightKidCo is (no Welcome flow context)
- Migration anchors are premature — she needs conversion first

**What's missing:**
- Sub-Group E-specific tonality (direct, transactional, not "journey")
- Sub-Group E-specific email sequence (shorter, more urgent)
- Sub-Group E-specific forbidden phrases (no "wherever you are" — she's at the cart)
- Sub-Group E-specific subject lines (product-focused, not symptom-focused)

**Recommendation:** Add a "Sub-Group E Calibration" section with distinct tonality, sequence, and language rules for cart/browse abandoners without opt-in.

---

## Gap 12: Identity Flexibility Rules Lack Specificity

**Severity: MEDIUM-LOW**

DOC5 Section 39 (Identity Flexibility) says:
- Address different identities
- Don't fixate on one
- Inclusive language throughout
- "Whatever you call this" acknowledgment

But this is vague. What identities exist? How do you address them simultaneously?

Known identities in the GF audience:
- "Autism mom" (some embrace it, some reject it)
- "Special needs parent" (broader, less specific)
- "Neurodivergent parent" (Sub-Group C prefers this)
- "Sensory parent" (Sub-Group C)
- "Just a mom" (Sub-Group B rejects all labels)
- "Advigliger" (Sub-Group D doesn't identify with anything)

**What's missing:**
- A list of recognized identities and how to address each
- Language that works across ALL identities (not just "whatever you call this")
- Specific examples of identity-inclusive sentences
- Guidance on when to use identity language vs. when to avoid it entirely

**Recommendation:** Expand Section 39 into a full "Identity Calibration" section with a recognized identity list and specific language examples for each.

---

## Priority-Ordered Recommendations

| Priority | Gap | Severity | Effort | Impact |
|----------|-----|----------|--------|--------|
| 1 | Gap 1: Hope/Realism Contradiction | HIGH | Medium | Resolves fundamental mail structure tension |
| 2 | Gap 3: Sub-Group Interaction Rules | HIGH | Medium | Prevents conflicting messaging in same mail |
| 3 | Gap 2: Level 3 Underrepresentation | HIGH | Low | Fixes imbalanced symptom hook coverage |
| 4 | Gap 4: Migration Timing Rules | MEDIUM-HIGH | Low | Prevents premature/late migration attempts |
| 5 | Gap 5: Browse Abandonment Underdeveloped | MEDIUM-HIGH | Medium | Closes gap on critical non-opt-in flow |
| 6 | Gap 7: Post-Purchase GF Rules | MEDIUM | Medium | Covers 14-day blind spot after purchase |
| 7 | Gap 8: Unified Forbidden Phrases | MEDIUM | Low | Eliminates cross-referencing between docs |
| 8 | Gap 6: Geographic/Cultural Calibration | MEDIUM | Medium | Serves 35% non-US audience properly |
| 9 | Gap 9: Winback Cross-Level Rules | MEDIUM | Medium | Addresses re-engagement after absence |
| 10 | Gap 11: Sub-Group E Underspecified | MEDIUM-LOW | Low | Improves highest-intent GF sub-group |
| 11 | Gap 12: Identity Flexibility Specificity | MEDIUM-LOW | Low | Makes vague rules actionable |
| 12 | Gap 10: A/B Testing Guidance | MEDIUM-LOW | Low | Enables data-driven iteration |

---

## Summary

The Cross-Level Calibration framework (DOC1 Section 22 + DOC5) provides a solid foundation with 6 core rules, symptom-first language, and migration strategy. However, 12 gaps remain:

- **3 HIGH severity:** Hope/realism contradiction, sub-group interaction conflicts, Level 3 underrepresentation
- **2 MEDIUM-HIGH:** Migration timing, Browse Abandonment flow
- **5 MEDIUM:** Post-purchase GF rules, unified forbidden phrases, geographic calibration, winback rules, identity flexibility
- **2 MEDIUM-LOW:** Sub-Group E specificity, A/B testing guidance

The most critical fix is Gap 1 (Hope/Realism Contradiction) — it's a structural tension that affects every GF mail written. The second priority is Gap 3 (Sub-Group Interactions) — without conflict resolution rules, marketers will default to one sub-group's needs and alienate the others.

Total gaps identified: 12 (exceeds minimum of 5).
