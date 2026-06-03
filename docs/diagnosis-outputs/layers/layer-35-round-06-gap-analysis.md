# Layer 35 Round 6: Avatar Scope Constraint — Gap Analysis

**Type:** Gap Analysis (Round 6)
**Generated:** 2026-05-25
**Sources:** L35 R1 (Client Files), L35 R2 (Skill Loading), L4 (Avatar Levels), L21 (Sub-Groups), L20 (Language Pattern), Overnight Plan (Layer 35 definition)

---

## TABLE OF CONTENTS

1. [Round Output Completeness](#1-round-output-completeness)
2. [Gap Inventory by Priority](#2-gap-inventory)
3. [Ambiguous or Contradictory Rules](#3-ambiguities-contradictions)
4. [Edge Cases Not Covered](#4-edge-cases)
5. [Unanswered Questions](#5-unanswered-questions)
6. [Cross-Layer Conflict Documentation](#6-cross-layer-conflicts)
7. [Recommended Actions](#7-recommendations)
8. [Risk Assessment](#8-risk-assessment)

---

<a name="1-round-output-completeness"></a>
## 1. ROUND OUTPUT COMPLETENESS

| Round | Expected File | Status | Size |
|-------|--------------|--------|------|
| R1 — Client Files | layer-35-round-01-client-files.md | ✅ Exists | 13.7KB, 360 lines |
| R2 — Skill Loading | layer-35-round-02-skill-loading.md | ✅ Exists | 15.2KB, 231 lines |
| R3 — Wiki Extraction | layer-35-round-03-wiki-extraction.md | 🔴 MISSING | — |
| R4 — Cross-Reference | layer-35-round-04-cross-reference.md | 🔴 MISSING | — |
| R6 — Gap Analysis | layer-35-round-06-gap-analysis.md | ✅ This file | — |
| Synthesis | layer-35-avatar-scope.md | 🔴 MISSING | — |

**Impact:** 3 of 6 expected files are missing. R3 (wiki extraction) means no external/community knowledge was consulted. R4 (cross-reference) means no systematic cross-check against L4, L21, L9, L20 was performed. The synthesis file is the plan-mandated deliverable — its absence means downstream layers cannot reference avatar scope constraints.

---

<a name="2-gap-inventory"></a>
## 2. GAP INVENTORY BY PRIORITY

### GAP 1: No Synthesis File (layer-35-avatar-scope.md) [CRITICAL]

**What's missing:** The plan (overnight-plan-solo.md line 1071) requires `layer-35-avatar-scope.md` as the definitive output. It does not exist.

**Impact:** Every downstream layer that needs to reference "what the avatar system covers vs. what it doesn't" has no authoritative source. L36 (Deliverability), L37 (Klaviyo Setup), L38 (Brand Constants), and all email production tasks depend on this file.

**Recommendation:** Create the synthesis by consolidating R1 (73 scope rules extracted), R2 (skill alignment gaps), L4 (avatar level definitions), L21 (sub-group definitions), and this gap analysis into one file.

---

### GAP 2: Cross-Avatar Intersection Logic Undefined [CRITICAL]

**What's missing:** R1 §8 lists "Avatar Mixing — ABSOLUTELY FORBIDDEN" for the 3 emotional avatars (Deadline Parent, Social Pressure Mom, Overwhelmed at Home). But the actual avatar system has 4 levels × 3 emotional dimensions = 12 potential intersection combinations. None of the source documents define what happens at these intersections.

**Specific questions unanswered:**
- If a Level 2 parent ALSO has deadline pressure (Pre-K for a 5-year-old), does the Level 2 tonality (40% hope) override or blend with deadline urgency?
- If a Level 3 parent is also an "Overwhelmed at Home Mom," does the dignity-first framing (20% hope) conflict with the overwhelm avatar's need for practical coping?
- When emotional avatars are introduced in Phase 2+, how do they interact with the existing 4-level system? Are they orthogonal dimensions or replacement segments?

**Source:** R1 §1, R2 §3.2, Claude-Project-Instructions.txt lines 79-87 and 210-213

**Recommendation:** Define an explicit intersection matrix: Level × Emotional Dimension → tonality override rules. Decide whether emotional avatars are (a) orthogonal dimensions that modify tonality within a level, or (b) separate segments that replace levels. This decision affects the entire Phase 2 architecture.

---

### GAP 3: General Fallback Sub-Group Scope Rules Incomplete [CRITICAL]

**What's missing:** R1 §4 defines General Fallback as ~50% of volume with the "Whether...Or...If..." pattern. L21 defines 5 distinct sub-groups (A-E) with very different psychological profiles. But R1 does NOT specify which scope rules apply to which sub-group.

**Specific gaps:**

| Sub-Group | L21 Defines | R1/R2 Cover | Gap |
|-----------|------------|-------------|-----|
| A — Diagnostic Entrants | Education-first, no diagnosis assumed | Not mentioned | Scope rules for pre-diagnosis messaging missing |
| B — Diagnosis-Rejecters | Label-free, symptom-only language | Not mentioned | Scope rules for avoiding ALL diagnostic language missing |
| C — Sensory-Difference (non-ASD) | "Not just for autism" framing | Not mentioned | Scope rules for non-ASD positioning missing |
| D — Overwhelmed Non-Selectors | Migration anchors, cross-level symptom hooks | Partially covered (migration strategy in R1 §4) | Day 14 Level-Detection Mail scope rules missing |
| E — Cart/Browse Without Opt-In | Guarantee-first, abbreviated mechanism | Partially covered (Cart mails are cross-level per R1 §4) | Cart-specific tonality calibration missing |

**Source:** R1 §4, L21 full synthesis, R2 §1.3

**Recommendation:** Add sub-group-specific scope rules to the synthesis. Each sub-group needs: (a) which tonality calibration applies, (b) which forbidden phrases are active, (c) which conversion levers are in scope, (d) which migration triggers are allowed.

---

### GAP 4: Phase 2+ Emotional Avatar Integration Path Undefined [HIGH]

**What's missing:** The 3 excluded avatars (Deadline Parent, Social Pressure Mom, Overwhelmed at Home Mom) are explicitly "FOR FUTURE PHASES." But no document defines:
- WHEN Phase 2 starts (month 3 per R1 §3, but no trigger event)
- HOW emotional avatars get their own RS files integrated
- WHETHER emotional avatars REPLACE or AUGMENT the 4-level system
- WHAT flows they get (their own Welcome Flow? Shared flows with tonality overlay?)

**Source:** R1 §1, §3, Claude-Project-Instructions.txt lines 210-213

**Recommendation:** Define the Phase 2 integration architecture: (a) emotional avatar pop-up selection flow, (b) tag structure (level × emotion?), (c) which existing flows get emotional overlays vs. new flows, (d) RS file mapping per emotional avatar.

---

### GAP 5: Skill System Has No Avatar Scope Awareness [HIGH]

**What's missing:** R2 analyzed 3 skills and found that NONE define what's OUT of scope:

| Skill | Alignment | Critical Missing |
|-------|-----------|-----------------|
| client-onboarding-structure | 70% | No scope exclusion rules, no sub-group awareness |
| brand-voice-definition | 40% | No multi-segment voice variants, assumes one voice per brand |
| segmentation-strategy-framework | 25% | No avatar/persona segmentation layer at all |

**Impact:** When agents use these skills to generate email copy, they have no mechanism to enforce scope constraints. The skills don't know that Level 3 NEVER gets urgency, that emotional avatars are excluded from Phase 1, or that General Fallback has 5 sub-groups.

**Source:** R2 §4, §6

**Recommendation:** Update at minimum `client-onboarding-structure` and `brand-voice-definition` skills to include: (a) multi-segment voice variant matrix, (b) scope exclusion rules, (c) sub-group awareness for General Fallback, (d) forbidden phrase lists per level.

---

### GAP 6: Mary S. (Founder) Scope Boundaries Unclear for Phase 2+ [MEDIUM]

**What's missing:** R1 §3 states "Mary S. does NOT appear in Phase 1" and "introduced in Phase 2 as a separate dedicated mail." But:
- What specific flows does Mary S. appear in?
- Does Mary S. replace Lena in those flows or coexist?
- Does Mary S. have her own tonality calibration per level?
- What is the "Founder Story" mail structure?
- How does Mary S. interact with the 3 emotional avatars?

**Source:** R1 §3, §8, Claude-Project-Instructions.txt line 110-111

**Recommendation:** Define Mary S.'s Phase 2 scope: which flows, which tonality, which levels, and whether she has her own forbidden phrase list.

---

### GAP 7: No Dark Mode or Accessibility Scope Rules [MEDIUM]

**What's missing:** None of the scope documents address:
- Dark mode rendering rules for level-specific color calibrations
- Accessibility requirements (alt text, semantic HTML, screen reader compatibility)
- Font fallback strategy (L29 notes Questrial fails in Gmail/Outlook)

**Impact:** Level-specific visual calibrations (L29 §2-5) use different color weightings per level. In dark mode, Level 3's muted cream/gray palette may become unreadable.

**Source:** R1 (no mention), R2 (no mention), L29 §1.2

**Recommendation:** Add accessibility and dark mode scope rules to the synthesis. Define fallback colors per level for dark mode rendering.

---

### GAP 8: Migration Trigger Scope Rules Under-Specified [MEDIUM]

**What's missing:** R1 §4 mentions migration through Click/Reply/Purchase Hints and the Day 14 Level-Detection Mail. But:
- What specific click actions trigger level migration?
- What Klaviyo automation rules implement the migration?
- What happens when a subscriber matches MULTIPLE levels (e.g., has both Level 1 and Level 2 symptoms)?
- Is there a confidence threshold before migration, or any click = migration?
- Can subscribers migrate DOWN (e.g., from Level 2 to General Fallback)?

**Source:** R1 §4, L21 Sub-Group D migration paths

**Recommendation:** Define migration rules: (a) trigger events with exact Klaviyo conditions, (b) confidence scoring, (c) multi-match resolution, (d) downward migration policy.

---

### GAP 9: Urgency Calibration Boundary Between Level 1 and Level 2 [MEDIUM]

**What's missing:** Level 1 allows "Strong (Pre-K)" urgency. Level 2 has "LOW (baseline) — can spike to HIGH on trigger events." The boundary is unclear:
- What specific trigger events spike Level 2 urgency to HIGH?
- Is "school transition" a Pre-K equivalent for Level 2?
- Can Level 2 receive ANY time-limited offers?
- What about Level 2 children who are 5 and facing kindergarten deadlines?

**Source:** L4 §3.10, §4.11, R1 §7

**Recommendation:** Define explicit urgency boundary rules: (a) Level 2 trigger events that allow urgency, (b) urgency intensity caps per level, (c) whether "school deadline" is level-agnostic or level-specific.

---

### GAP 10: Testimonial Selection Scope Rules Incomplete [MEDIUM]

**What's missing:** R1 §9 defines RS-integration rules (30-50% verbatim, 2-4 quotes per mail). But:
- Which testimonial matches which level? (L4 has proof rankings per level but no testimonial-to-level mapping)
- Can a Level 1 testimonial appear in a General Fallback mail?
- What testimonial works for Sub-Group B (diagnosis-rejecters) who can't hear "autism mom" stories?
- Are there enough Level 3 testimonials in the RS files? (L4 notes Level 3 is 25% of audience but may have fewer RS quotes)

**Source:** R1 §9, L4 §3.14, §4.14, L21 sub-group profiles

**Recommendation:** Create a testimonial-to-level-to-sub-group mapping matrix. Flag any levels or sub-groups with insufficient testimonial coverage.

---

### GAP 11: Currency and Pricing Scope Across Markets [LOW]

**What's missing:** L32 gap analysis found prototype emails use EUR (€34) while locked spec uses USD ($34.99). The scope documents don't define:
- Whether pricing should adapt by geography (US 65%, UK 15%, AU/NZ 15%, CA 5%)
- Whether the 10% WELCOME10 discount applies globally
- Whether urgency language varies by market (US Pre-K vs UK Reception vs AU kindergarten)

**Source:** L32 R6 GAP 13, L4 §3.3 demographics

**Recommendation:** Define geographic scope rules: (a) currency display per market, (b) discount code applicability, (c) school-system-specific urgency hooks per country.

---

### GAP 12: Emoji and Visual Tone Scope Missing [LOW]

**What's missing:** No scope document defines whether emojis are allowed in subject lines, preheaders, or body copy. The prototype emails (L32) don't use emojis, but:
- Is this a deliberate scope rule or incidental?
- Does emoji usage differ per level? (Level 1 younger moms may expect emojis; Level 3 dignity-first may reject them)
- What about SMS companion copy (if SMS flows are built)?

**Source:** R1 (no mention), R2 (no mention), L32 (no emojis in prototype)

**Recommendation:** Define emoji scope: allowed/disallowed per channel (email subject, email body, SMS), per level.

---

<a name="3-ambiguities-contradictions"></a>
## 3. AMBIGUOUS OR CONTRADICTORY RULES

### CONTRADICTION 1: General Fallback Audience Share

| Source | Claim |
|--------|-------|
| R1 §2 | "~50% real volume" |
| R1 §2 (DOC1 verbatim) | "~50% choose 'Still figuring out' = General Fallback" |
| L4 §1 Executive Summary | "~50% real volume" |
| L21 Executive Summary | "~50% of all real email traffic" |

**Status:** Consistent across sources. No contradiction. But the "~50%" is an estimate — no hard data source cited.

**Recommendation:** Verify with actual Klaviyo data once the pop-up is live. The 50% figure shapes the entire General Fallback architecture.

---

### CONTRADICTION 2: Level 2 Urgency — "LOW" vs "Can Spike to HIGH"

| Source | Statement |
|--------|-----------|
| L4 §4.11 (Tonality) | "Urgency Level: LOW (baseline) — can spike to HIGH on trigger events" |
| L4 §4.8 (Triggers) | "PR #1: Prompt-Dependency Frustration — Strongest" |
| R1 §7 Rule 1 | "NEVER: Pre-K hooks for Level 2+3 audiences" |

**Ambiguity:** Level 2 urgency can "spike to HIGH" but Pre-K hooks are forbidden. What constitutes a legitimate spike? Elementary school transition? IEP deadline? Therapy milestone?

**Recommendation:** Define the 3-5 specific trigger events that allow Level 2 urgency spikes, with example copy for each.

---

### CONTRADICTION 3: Lena's Language for Sub-Group B (Diagnosis-Rejecters)

| Source | Statement |
|--------|-----------|
| L4 §2.3 | "Lena S., Customer Support, Mom of two autistic sons (6 and 8)" |
| L21 Sub-Group B | "MUST extend Lena's language — never 'autism mom'" |
| L21 Sub-Group B | "I'm mom of two boys who didn't follow the typical timeline" |

**Ambiguity:** Lena's identity includes "autistic sons." Sub-Group B cannot hear "autism." Does Lena have TWO identity framings? If so, which one appears in General Fallback emails that serve ALL 5 sub-groups simultaneously?

**Recommendation:** Define Lena's General Fallback identity: a single framing that works for all 5 sub-groups. The L21 suggestion ("mom of two boys who didn't follow the typical timeline") is a candidate but needs validation against Sub-Group D (who has ASD context and expects authenticity).

---

### CONTRADICTION 4: Hope Level for General Fallback

| Source | Statement |
|--------|-------|
| R1 §2 | "50/50" hope/realism |
| L4 §1 | "50/50" |
| L21 Sub-Group A | "High (70%)" hope |
| L21 Sub-Group B | "Medium (50%)" hope |
| L21 Sub-Group C | "Medium (50%)" hope |
| L21 Sub-Group D | "Varies" |
| L21 Sub-Group E | "Varies" |

**Ambiguity:** The "50/50" is an average across wildly different sub-groups. Sub-Group A needs 70% hope, Sub-Group B needs 50%, Sub-Group D varies by actual level. A single General Fallback flow serving all 5 sub-groups can't be simultaneously 70% hope and 50% hope.

**Recommendation:** Accept that General Fallback is a COMPROMISE tonality (50/50) that doesn't perfectly serve any sub-group. Document this as a known limitation. Alternatively, explore sub-group-specific branching within the General Fallback flow (more complex but more accurate).

---

### CONTRADICTION 5: "Whether...Or...If..." Pattern Scope

| Source | Statement |
|--------|-------|
| R1 §4 | General Fallback uses "Whether...Or...If..." pattern |
| R2 §1.2 | client-onboarding-structure references this pattern |
| L21 Sub-Group B | Needs "symptom language, never label" |
| L21 Sub-Group C | Needs "NO ASD-specific language as prerequisite" |

**Ambiguity:** The "Whether...Or...If..." pattern typically addresses multiple levels simultaneously. But Sub-Groups B and C cannot hear level-specific or ASD-specific language. Does the pattern work when some audience members reject the diagnostic framework entirely?

**Recommendation:** Test the "Whether...Or...If..." pattern against Sub-Group B's constraints. Example: "Whether your child is verbal or not..." is OK. "Whether your child has autism or SPD..." is NOT OK (uses diagnosis language). Define which "Whether" framings are safe.

---

<a name="4-edge-cases"></a>
## 4. EDGE CASES NOT COVERED

### EDGE CASE 1: Level Migration During Active Flow

**Scenario:** A subscriber starts the Welcome Flow as General Fallback. On Day 7, they click a Level 2-specific story link. They are now tagged `avatar_level2`. But they are mid-flow (Email 4 of 8).

**Question:** Do they (a) finish the General Fallback flow then start Level 2 flow, (b) immediately switch to Level 2 flow at Email 4, or (c) restart Level 2 from Email 1?

**Not covered in:** R1, R2, L4, L21

---

### EDGE CASE 2: Multi-Level Symptom Overlap

**Scenario:** A parent's child is 5 years old, partially verbal, has sensory issues AND Pre-K pressure. They match both Level 1 (Pre-K driven, verbal) and Level 2 (sensory issues, BCBA context).

**Question:** Which level tag takes priority? Is there a hierarchy (Level 2 > Level 1 if sensory issues present)?

**Not covered in:** R1, R2, L4

---

### EDGE CASE 3: Sub-Group C Purchaser Without ASD Context

**Scenario:** A Sub-Group C parent (SPD, no ASD) purchases. Post-purchase emails assume ASD context (Level-Detection Mail asks about autism severity). She has no ASD framework.

**Question:** Does the Post-Purchase Level-Detection Mail (Day 14) have a non-ASD variant? Or does she stay permanently in General Fallback post-purchase?

**Not covered in:** R1, R2, L21

---

### EDGE CASE 4: Pop-Up Self-Selection Mismatch

**Scenario:** A parent selects "Level 1" in the pop-up but their subsequent behavior (click patterns, browse history) suggests Level 2 (heavy research, BCBA-related content engagement).

**Question:** Does behavior override self-selection? Is there an auto-correction mechanism?

**Not covered in:** R1 (migration strategy mentions Click/Reply/Purchase but not behavioral re-classification)

---

### EDGE CASE 5: International Parent With Different School System

**Scenario:** A UK parent has a 4-year-old. UK "Reception" starts at age 4 (vs US Pre-K at 4-5). The Pre-K urgency hook doesn't resonate because the UK system is different.

**Question:** Are urgency hooks localized by geography? Does the system know the subscriber's country?

**Not covered in:** R1, R2, L4

---

### EDGE CASE 6: Subscriber With Multiple Children at Different Levels

**Scenario:** A parent has a 3-year-old (Level 1 traits) and a 7-year-old (Level 3 traits). They signed up via the pop-up for the younger child.

**Question:** Which level applies? Can they receive both Level 1 and Level 3 content? Is there a multi-child scope rule?

**Not covered in:** R1, R2, L4

---

<a name="5-unanswered-questions"></a>
## 5. UNANSWERED QUESTIONS

| # | Question | Source | Priority |
|---|----------|--------|----------|
| Q1 | When emotional avatars launch in Phase 2, do they get their own Welcome Flow or share the existing one with tonality overlays? | R1 §1 | HIGH |
| Q2 | Is the 50% General Fallback share a measured Klaviyo metric or a DOC1 estimate? | R1 §2 | HIGH |
| Q3 | How many verbatim RS quotes exist per level? Is Level 3 under-represented? | R1 §9 | MEDIUM |
| Q4 | Can a subscriber be tagged with BOTH an avatar level AND an emotional avatar simultaneously? | R1 §1 | HIGH |
| Q5 | What is the Klaviyo tag structure for the 5 General Fallback sub-groups? Are they tagged at all? | L21 | MEDIUM |
| Q6 | Does the Day 14 Level-Detection Mail work for Sub-Groups B and C who don't have ASD context? | L21 | MEDIUM |
| Q7 | What happens when a subscriber unsubscribes from the Welcome Flow but is still in Cart Abandonment? Do scope rules differ per flow? | R1 §3 | LOW |
| Q8 | Are there scope rules for REPLY handling? If a parent replies to a General Fallback email with level-specific details, who responds and how? | R1 §4 | MEDIUM |
| Q9 | The `email-copy-segmentation` skill was referenced but doesn't exist. Was it renamed, deprecated, or never created? | R2 §1.3 | LOW |
| Q10 | Does the anti-fabrication rule apply to mechanism descriptions (e.g., "the signal travels from bladder to brain") or only to customer quotes? | R1 §9 | LOW |

---

<a name="6-cross-layer-conflicts"></a>
## 6. CROSS-LAYER CONFLICT DOCUMENTATION

### Conflicts: L35 vs Referenced Layers

| ID | Severity | L35 Element | Conflicting Layer | Issue |
|----|----------|-------------|-------------------|-------|
| C1 | 🔴 CRITICAL | R1 defines 73 scope rules | No synthesis file | Rules exist but aren't consolidated into an authoritative source |
| C2 | 🔴 CRITICAL | Emotional avatars excluded from Phase 1 | L4 §2.1 (4 Emotional Phases) | The 4 Emotional Phases (Slow Realization → Resignation) are brand-wide, but the 3 Emotional Avatars (Deadline, Social, Overwhelmed) are Phase 2+. These are DIFFERENT concepts — potential confusion |
| C3 | 🟡 MAJOR | General Fallback = 50% volume | L21 Sub-Groups (A-E) | R1 treats GF as monolithic; L21 shows it's 5 distinct groups. Scope rules need sub-group granularity |
| C4 | 🟡 MAJOR | "Symptom-first, never level labels" | L4 verbatim language bank | L4 §3.8-3.9 includes phrases like "autism potty training" in Google search queries — these are search terms, not copy. But the line between search optimization and copy is blurry |
| C5 | 🟡 MAJOR | Lena = "Mom of two autistic sons" | L21 Sub-Group B | Sub-Group B can't hear "autism" — Lena's identity conflicts with their constraints |
| C6 | ⚠️ MODERATE | 4-level system (L1/L2/L3/General) | L21 Sub-Groups (A-E) | Sub-Groups A, B, C have NO clean level match. The 4-level system doesn't cover 60% of General Fallback |
| C7 | ⚠️ MODERATE | Mary S. excluded from Phase 1 | L32 prototype (Lena sign-off) | Prototype uses Lena correctly; no conflict. But Phase 2 Mary S. integration has zero scope rules |

### Confirmed Alignments

| L35 Element | Aligned Layer | Assessment |
|-------------|--------------|------------|
| Never mention "Level 1/2/3" in copy | L4 §3.16, L9 | ✅ Consistent across all sources |
| General Fallback = cross-level default | L21, R1 §4 | ✅ Consistent |
| Migration > Forced Segmentation | L21 Sub-Group D migration paths | ✅ L21 provides detailed migration mechanics |
| Anti-fabrication rule | L4 §2.3 (Lena rules) | ✅ Consistent |
| Tonality calibration per level | L4 §3.10, §4.11, R1 §7 | ✅ Hope/realism ratios consistent |
| Cart/Checkout = cross-level | R1 §4, L4 §2.3 | ✅ Consistent |

---

<a name="7-recommendations"></a>
## 7. RECOMMENDED ACTIONS

### Priority 1 — Blockers (Must Complete Before Email Production)

| # | Action | Gap Ref | Effort |
|---|--------|---------|--------|
| 1 | Create synthesis file (layer-35-avatar-scope.md) consolidating R1 + R2 + L4 + L21 + this gap analysis | GAP 1 | Medium |
| 2 | Create R4 (cross-reference) — systematically check L35 rules against L4, L9, L20, L21, L29, L32, L33 | Missing file | High |
| 3 | Define cross-avatar intersection matrix (Level × Emotional Dimension → tonality override) | GAP 2 | Medium |
| 4 | Define Lena's General Fallback identity that works for all 5 sub-groups | Contradiction 3 | Low (decision) |

### Priority 2 — Required for Level Variant Production

| # | Action | Gap Ref | Effort |
|---|--------|---------|--------|
| 5 | Add sub-group-specific scope rules to synthesis | GAP 3 | Medium |
| 6 | Define urgency boundary rules for Level 2 trigger events | GAP 9 | Low |
| 7 | Define migration trigger rules with exact Klaviyo conditions | GAP 8 | Medium |
| 8 | Create testimonial-to-level-to-sub-group mapping | GAP 10 | Medium |
| 9 | Define General Fallback tonality as explicit compromise with known limitations | Contradiction 4 | Low |

### Priority 3 — Enhancement

| # | Action | Gap Ref | Effort |
|---|--------|---------|--------|
| 10 | Update brand-voice-definition skill with multi-segment voice variants | GAP 5 | Medium |
| 11 | Update segmentation-strategy-framework skill with avatar layer | GAP 5 | Medium |
| 12 | Define Phase 2+ emotional avatar integration architecture | GAP 4 | High |
| 13 | Define Mary S. Phase 2 scope boundaries | GAP 6 | Medium |
| 14 | Add dark mode and accessibility scope rules | GAP 7 | Low |
| 15 | Define geographic scope rules (currency, urgency hooks) | GAP 11 | Low |
| 16 | Define emoji scope rules per channel and level | GAP 12 | Low |
| 17 | Create R3 (wiki extraction) if wiki content exists | Missing file | Medium |
| 18 | Resolve edge cases (6 scenarios above) with documented decisions | §4 | Medium |

---

<a name="8-risk-assessment"></a>
## 8. RISK ASSESSMENT

### High Risk

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Email copy violates scope rules because skills don't encode them | HIGH | HIGH — wrong tonality for Level 3 could trigger refund requests and reputation damage | Update skills before email production begins |
| General Fallback emails alienate Sub-Group B (diagnosis-rejecters) by using autism language | MEDIUM | HIGH — 6% of total audience, but vocal in communities | Define and test Sub-Group B-safe language patterns |
| Level migration during active flow causes confusing experience | MEDIUM | MEDIUM — subscriber gets mixed messaging | Define migration-during-flow rules before Klaviyo setup |
| Phase 2 emotional avatars conflict with Phase 1 level system | MEDIUM | HIGH — architectural conflict could require rebuilding flows | Define intersection matrix NOW, before Phase 1 launch |

### Medium Risk

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Sub-Group C (non-ASD) receives ASD-specific content post-purchase | MEDIUM | MEDIUM — alienates high-value segment | Create non-ASD post-purchase variant |
| Level 2 urgency spikes are applied inconsistently | MEDIUM | MEDIUM — some Level 2 parents get urgency they shouldn't | Define explicit trigger events with copy examples |
| Testimonial coverage is uneven across levels | MEDIUM | MEDIUM — Level 3 may have fewer authentic quotes | Audit RS files for per-level testimonial count |
| 50% General Fallback estimate is wrong | LOW | HIGH — if actual is 30% or 70%, architecture changes significantly | Validate with Klaviyo data within first 30 days |

### Low Risk

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Emoji usage inconsistency across levels | LOW | LOW | Define scope rule (no emojis in email is safest default) |
| Geographic urgency hooks mismatch | LOW | MEDIUM | Localize hooks per top-3 markets (US, UK, AU) |
| Dark mode renders level-specific colors unreadable | LOW | MEDIUM | Test and define dark mode fallbacks per level |

---

## SCOPE RULE COVERAGE SUMMARY

| Category | Rules Extracted (R1) | Skills Cover (R2) | Synthesis Status |
|----------|---------------------|-------------------|-----------------|
| Phase 1 vs Phase 2+ boundaries | 3 rules | 0% covered | Not synthesized |
| Avatar level scope | 4 rules | 70% covered | Not synthesized |
| Phased rollout boundaries | 3 rules | 0% covered | Not synthesized |
| General Fallback rules | 3 rules | 70% covered | Not synthesized |
| NEVER DO rules | 12 rules | 25% covered | Not synthesized |
| ALWAYS DO rules | 8 rules | 50% covered | Not synthesized |
| Segmentation principles | 5 rules | 40% covered | Not synthesized |
| Cross-level calibration | 6 rules | 60% covered | Not synthesized |
| Forbidden scope expansions | 16 rules | 0% covered | Not synthesized |
| RS-integration rules | 5 rules | 0% covered | Not synthesized |
| Anti-fabrication rules | 8 rules | 0% covered | Not synthesized |
| **TOTAL** | **73 rules** | **~25% covered** | **0% synthesized** |

**Bottom line:** 73 scope rules have been extracted from client files. Skills cover approximately 25% of them. None have been synthesized into an authoritative, consolidated source. The synthesis file (layer-35-avatar-scope.md) is the single most critical missing deliverable.

---

*Generated: 2026-05-25*
*File: /root/projects/brightkidco/outputs/diagnosis/layer-35-round-06-gap-analysis.md*
*Sources: L35 R1, L35 R2, L4, L21, Overnight Plan*
