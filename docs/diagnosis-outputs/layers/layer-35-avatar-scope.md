# LAYER 35: AVATAR SCOPE CONSTRAINT — COMPREHENSIVE SYNTHESIS
## BrightKidCo Email Ecosystem — Diagnosis Layer 35
**Generated:** 2026-05-25
**Synthesis Type:** Final — consolidating project-wide scope rules

**Sources:**
- Layer 04: Avatar Levels Comprehensive Synthesis (1237 lines, 60KB)
- Overnight Plan: Layer 35 definition + Layer 5 Emotional Dimensions
- Diagnosis Plan: Phase 1/Phase 2 scope boundaries
- Client Files: DOC1–DOC6, Autistic-1-full, Language Bank, MIRO
- STATUS.md and progress.md: Task structure references

**Data Quality Note:** Round 01–04 input files were not produced by upstream tasks. This synthesis was built from the authoritative source documents that define the avatar system. All scope rules trace to client-authored specifications, not agent inference.

---

## TABLE OF CONTENTS

1. [EXECUTIVE SUMMARY](#1-executive-summary)
2. [PHASE 1 SCOPE RULES — NON-NEGOTIABLE](#2-phase-1-scope-rules)
3. [PHASE 2 EXPANSION PLAN](#3-phase-2-expansion-plan)
4. [LEVEL-BY-LEVEL SCOPE DEFINITIONS](#4-level-by-level-scope-definitions)
5. [GENERAL FALLBACK SCOPE RULES](#5-general-fallback-scope-rules)
6. [FORBIDDEN SCOPE EXPANSIONS](#6-forbidden-scope-expansions)
7. [DECISION TREE FOR SCOPE QUESTIONS](#7-decision-tree-for-scope-questions)
8. [CROSS-REFERENCE TO OTHER LAYERS](#8-cross-reference-to-other-layers)

---

<a name="1-executive-summary"></a>
## 1. EXECUTIVE SUMMARY

### The One Rule

**Phase 1 email flows use ONLY the 4-level Autistic Parent avatar segmentation.** The three emotional dimensions (Deadline Pressure, Social Pressure, Overwhelmed Mom) are researched and documented but are **designated for Phase 2 and beyond.** They do not get their own email flows, segmentation criteria, or Klaviyo tags in Phase 1.

### What This Means in Practice

| Element | Phase 1 (Build Now) | Phase 2+ (Build Later) |
|---------|---------------------|------------------------|
| **Segmentation** | 4 levels: L1, L2, L3, General Fallback | 4 levels × 3 emotional dimensions = 12+ micro-segments |
| **Klaviyo Tags** | `avatar_level1`, `avatar_level2`, `avatar_level3`, `avatar_general` | Add: `emotion_deadline`, `emotion_social`, `emotion_overwhelmed` |
| **Flow Variants** | 4 Welcome Flow variants | 12+ Welcome Flow variants (level × dimension) |
| **Pop-Up** | 4 buttons (symptom-based) | Same 4 buttons + secondary dimension detection |
| **Email Tonality** | Level-specific only | Level × dimension calibration |
| **Forbidden Inflows** | Emotional dimension segmentation | — |

### Why This Constraint Exists

1. **Complexity management.** 4 flow variants are manageable; 12+ are not — especially without real engagement data.
2. **Data gap.** The emotional dimensions need behavioral data (click patterns, purchase speed, engagement frequency) that doesn't exist pre-launch.
3. **Diminishing returns.** The 4-level system captures ~80% of segmentation value. Emotional dimensions add ~15% more — worth it at scale, not at launch.
4. **Testing clarity.** You cannot A/B test segmentation hypotheses when you have 12+ segments and zero baseline data.

### The Scope Boundary in One Sentence

> **If it creates a separate email flow, Klaviyo tag, or segmentation branch based on emotional dimension (Deadline Pressure, Social Pressure, Overwhelmed Mom), it is Phase 2. Period.**

---

<a name="2-phase-1-scope-rules"></a>
## 2. PHASE 1 SCOPE RULES — NON-NEGOTIABLE

### 2.1 The 4 Allowed Segments

| Segment | Tag | Pop-Up Button | Audience Share | Welcome Flow Variant |
|---------|-----|---------------|----------------|---------------------|
| Level 1 — Verbal, Hope-Intact (Sarah) | `avatar_level1` | "Talks about potty but won't actually do it" | ~35% | DOC 2 + DOC 1 |
| Level 2 — Mixed Verbal, Method-Cycling (Lisa) | `avatar_level2` | "Sensory issues, tried many methods" | ~40% | DOC 3 + DOC 1 |
| Level 3 — Non-Verbal, Resigned, Dignity-Seeking (Maria) | `avatar_level3` | "Non-verbal or high support needs" | ~25% | DOC 4 + DOC 1 |
| General Fallback — Cross-Level | `avatar_general` | "Still figuring out what's going on" | ~50% real volume | DOC 5 + DOC 1 |

### 2.2 Phase 1 Segmentation Rules

**Rule 1: Tag-based routing only.**
All flow routing is determined by the 4 Klaviyo tags above. No behavioral scoring, no engagement-based inference, no emotional dimension detection.

**Rule 2: Level-specific tonality, not dimension-specific tonality.**
Each level has its own tonality calibration (hope/realism ratio, urgency level, science density, empathy intensity, CTA aggressiveness). These are set per level, not per emotional dimension.

| Tonality Element | Level 1 | Level 2 | Level 3 | General Fallback |
|-----------------|---------|---------|---------|-----------------|
| Hope Level | 70/30 | 40/60 | 20/80 | 50/50 |
| Urgency | HIGH (Pre-K) | LOW (baseline) | ZERO | Low–Medium |
| Science Density | Medium-Low | High | Medium-High | Medium |
| Empathy Intensity | Medium | High | Very High | High |
| CTA Aggressiveness | Medium | Low | Very Low | Medium-Low |
| Decision Period | 2–7 days | 7–21 days | 14–30+ days | 5–14 days |

**Rule 3: Cross-level flows use General Fallback language.**
Cart Abandonment, Checkout Abandonment, Browse Abandonment, Order Confirmation, Shipping, and Post-Purchase flows all use General Fallback (DOC 5) language regardless of tag. Speed matters more than segmentation in high-velocity flows.

**Rule 4: Welcome Flow is the ONLY level-specific flow in Phase 1.**
All other flows are cross-level. This is the scope boundary.

**Rule 5: Emotional dimensions inform — they do not govern.**
The emotional dimension research (Layer 5) is valuable for calibrating tone within level-specific flows, but it does NOT create separate flows, tags, or segmentation branches.

**Practical example of Rule 5:**
- ✅ ALLOWED: "Your Level 2 email can reference deadline pressure if the symptom cluster suggests it" (tonality calibration)
- ❌ FORBIDDEN: "Create a separate Welcome Flow for Deadline Pressure moms" (new segmentation branch)

### 2.3 Phase 1 Flow Inventory

| Flow | Segmentation | Source Document |
|------|-------------|-----------------|
| Welcome Flow — Level 1 | Level-specific | DOC 2 + DOC 1 |
| Welcome Flow — Level 2 | Level-specific | DOC 3 + DOC 1 |
| Welcome Flow — Level 3 | Level-specific | DOC 4 + DOC 1 |
| Welcome Flow — General | Level-specific | DOC 5 + DOC 1 |
| Cart Abandonment | Cross-level | DOC 5 |
| Checkout Abandonment | Cross-level | DOC 5 |
| Browse Abandonment | Cross-level | DOC 5 |
| Order Confirmation | Cross-level | DOC 5 |
| Shipping Notification | Cross-level | DOC 5 |
| Arrived & Welcome | Cross-level | DOC 5 |
| Post-Purchase Direct Upsell | Cross-level | DOC 5 |
| Post-Purchase Level Detection (Day 14) | Cross-level | DOC 5 |
| FAQ | Level-specific IF tag known | DOC 2/3/4/5 |
| Winback Path A | Level-specific IF tag known | DOC 2/3/4/5 |

**Total Phase 1 flows:** 14 (4 level-specific Welcome + 8 cross-level + 2 conditional level-specific)

### 2.4 Phase 1 Pop-Up Rules

**Configuration:**
- 1-step pop-up with email + 1 question
- 4 buttons → 4 tags
- No level labels in button text — symptom-based language only
- Mobile-optimized, full-screen on mobile
- Frequency: maximum once per 7 days per visitor
- Trigger: 8–15 seconds on site OR exit intent

**Why symptom-based buttons, not level labels:**
Parents don't self-identify as "Level 2." They identify with symptoms: "Sensory issues, tried many methods." The pop-up translates lived experience into segmentation without requiring the parent to understand the taxonomy.

### 2.5 Phase 1 Post-Purchase Level Detection

**Day 14 flow for General Fallback subscribers:**
- Email with 4 re-selection buttons (same symptom-based language)
- Mom re-selects after 1 week of product use
- Migration from `avatar_general` to specific level tag
- Future flows then use level-specific variants

**Purchase hints for level inference (passive, not active):**
- Underwear size → age hint → level hint
- Bundle size → experience hint

---

<a name="3-phase-2-expansion-plan"></a>
## 3. PHASE 2 EXPANSION PLAN

### 3.1 The 3 Emotional Dimensions

These are researched (Layer 5), documented, and cross-referenced — but NOT built into Phase 1 flows.

| Dimension | Core Emotion | Master Driver | Strongest At |
|-----------|-------------|---------------|-------------|
| **Deadline Pressure** | Panic with controlled surface | School enrollment clock | Level 1 (~60%), Level 2 (~30%) |
| **Social Pressure** | Chronic, quiet shame | Comparison to other families | Level 1 (~40%), Level 2 (~50%) |
| **Overwhelmed Mom** | Total exhaustion, survival mode | Daily crisis management | Level 2 (~40%), Level 3 (~50%) |

### 3.2 Dimension Detail: Deadline Pressure

**The Mom:** Has a school enrollment deadline (Pre-K, preschool, kindergarten). Clock is ticking. Dominant emotion: panic with thin control layer. She counts every day, every accident. She sleeps poorly. She needs SPEED.

**Inner monologue:** "School starts in three weeks. He has not had a single dry day. I do not know what to do. I cannot force him. I cannot call the school and say we need more time. What happens if he does not get in?"

**Phase 2 implication:** Deadline Pressure moms need separate Welcome Flow variants with accelerated timelines, stronger urgency, and faster CTAs. Decision period: 2–5 days (compressed from level baseline).

### 3.3 Dimension Detail: Social Pressure

**The Mom:** No formal deadline, but the feeling of being behind eats her. Mother-in-law asks at Sunday lunch. Best friend posts about her 2-year-old being dry. WhatsApp group celebrates successes. She is still changing diapers on a 3-year-old. Dominant emotion: shame. Chronic, quiet, gnawing shame.

**Inner monologue:** "All the other kids are further along. Why does this not work for us? I am starting to believe it is me."

**Phase 2 implication:** Social Pressure moms need validation-heavy flows that address identity, not logistics. The product must restore social confidence, not just dry underpants.

### 3.4 Dimension Detail: Overwhelmed Mom

**The Mom:** Potty training is permanent crisis mode. Multiple accidents daily. Changing clothes. Cleaning car seats. Wiping floors. She is in survival mode. Dominant emotion: total exhaustion. Not angry. Not panicking. Just empty.

**Inner monologue:** "I do not have it in me to wash his car seat again this week. We change his undies so many times throughout the day."

**Phase 2 implication:** Overwhelmed moms need relief-framed flows, not results-framed. They buy for RELIEF, not transformation. Decision period: 14–28 days but with highest loyalty once converted.

### 3.5 Phase 2 Expansion Mechanics

**New segmentation matrix (4 levels × 3 dimensions = 12 micro-segments):**

| | Deadline Pressure | Social Pressure | Overwhelmed Mom |
|---|:---:|:---:|:---:|
| **Level 1** | L1-DP (highest conversion) | L1-SP | L1-OM |
| **Level 2** | L2-DP | L2-SP (largest segment) | L2-OM |
| **Level 3** | L3-DP (rare) | L3-SP | L3-OM (dominant) |
| **General Fallback** | GF-DP | GF-SP | GF-OM |

**New Klaviyo tags needed:**
- `emotion_deadline`, `emotion_social`, `emotion_overwhelmed`
- Combined tags: `avatar_level1_emotion_deadline`, etc.

**New pop-up detection needed:**
- Secondary question after initial level selection
- OR behavioral inference from engagement patterns (click speed, open frequency, time-to-purchase)

**Estimated Phase 2 effort:**
- 3 new Welcome Flow variants per level = 12 total (or 3 cross-level dimension flows)
- Dimension-specific tonality calibration documents
- New pop-up flow with secondary detection
- Klaviyo tag logic expansion

### 3.6 What Emotional Dimensions CAN Do in Phase 1 (Inform, Not Govern)

| Allowed (Inform) | Forbidden (Govern) |
|------------------|-------------------|
| Calibrate urgency within Level 1 emails (deadline-aware tone) | Create a separate "Deadline Pressure" Welcome Flow |
| Reference social comparison in Level 2 copy when appropriate | Create a `emotion_social` Klaviyo tag |
| Acknowledge exhaustion in Level 3 emails (already done — dignity-first) | Build a separate "Overwhelmed Mom" segmentation branch |
| Use dimension research to write better subject lines | Route subscribers to dimension-specific flows |
| Inform A/B test hypotheses for Phase 2 | Implement behavioral scoring for dimension detection |

---

<a name="4-level-by-level-scope-definitions"></a>
## 4. LEVEL-BY-LEVEL SCOPE DEFINITIONS

### 4.1 Level 1 — Verbal, Hope-Intact Mom (Sarah)

**Avatar:** Sarah, 33, Denver. Jake is 4, Level 1 autism. Verbal, knows letters, can count to 20. Potty training not working reliably. Pre-K enrollment in 4 months.

**Scope boundaries:**

| In Scope (Phase 1) | Out of Scope (Phase 2+) |
|--------------------|-----------------------|
| Pre-K deadline urgency (this IS Level 1's core driver) | Deadline Pressure as separate segmentation dimension |
| Motor planning cluster (L1-E "gets it but doesn't get it") | — |
| "Almost trained" loop emails | — |
| Oh Crap failure validation | — |
| Hope-calibrated tonality (70/30) | — |
| Level 1 specific forbidden phrases | — |
| Pre-K calendar timing | — |

**Key scope rule:** Pre-K urgency is a LEVEL CHARACTERISTIC, not an emotional dimension. It stays in Phase 1 because it is intrinsic to Level 1's identity. The distinction: "Level 1 moms have Pre-K deadlines" (Phase 1) vs. "Deadline Pressure is a cross-level emotional state" (Phase 2).

**Symptom clusters in scope:** L1-A (Timing Problems), L1-B (Inconsistent Performance), L1-C (Verbal Refusal), L1-D (Potty Interest Without Action), L1-E ("Gets It But Doesn't Get It")

**Conversion levers in scope:** All 5 levers + L1-specific levers (Pre-K Readiness, "Gets it but doesn't get it" reframe, "Verbal doesn't mean independent", "Almost trained" loop, Before Pre-K Summer Window)

### 4.2 Level 2 — Mixed Verbal, Method-Cycling Mom (Lisa)

**Avatar:** Lisa, 37, Austin. Ethan is 6, Level 2 autism. Mixed verbal. ABA for 4 years, OT for 2 years. Tried every method including $2,000 private consultant. Still cannot initiate.

**Scope boundaries:**

| In Scope (Phase 1) | Out of Scope (Phase 2+) |
|--------------------|-----------------------|
| BCBA-respectful mechanism language | Social Pressure as separate segmentation |
| Prompt-dependency frustration (primary trigger) | Deadline Pressure as separate segmentation |
| Sensory cluster emails (L2-A) | — |
| Withholding/GI crisis (L2-B) | — |
| Skepticism-calibrated tonality (40/60) | — |
| Science-dense content | — |
| Level 2 specific forbidden phrases | — |

**Key scope rule:** Level 2 is the HARDEST mom to convert. Phase 1 emails must hit all 6 elements of the Level 2 Mail Formula: (1) Real symptom recognition, (2) Mechanism specificity, (3) Acknowledge BCBA/OT work, (4) Realistic timelines, (5) 60-day guarantee, (6) Permission-not-to-buy. Missing one element breaks conversion.

**Symptom clusters in scope:** L2-A (Sensory Defensiveness), L2-B (Withholding + GI), L2-C (Delayed Verbal Signals), L2-D (Schedule Dependency — PRIMARY TRIGGER), L2-E (Regression Cycles), L2-F (Location-Specific Training)

**BCBA respect language in scope:**
- ✅ "Your BCBA has built the behavioral foundation. This adds the sensory layer."
- ✅ "ABA addresses behavior. The sensory piece needs different input."
- ❌ "ABA doesn't work for potty training"
- ❌ "Your BCBA missed this"

### 4.3 Level 3 — Non-Verbal, Resigned, Dignity-Seeking Mom (Maria)

**Avatar:** Maria, 44, Cleveland. Daniel is 9, Level 3 autism with intellectual disability. Non-verbal. 6 years of intensive therapies. Stopped active training 2 years ago. Focuses on dignity now.

**Scope boundaries:**

| In Scope (Phase 1) | Out of Scope (Phase 2+) |
|--------------------|-----------------------|
| Dignity-first language (NON-NEGOTIABLE) | Overwhelmed Mom as separate segmentation |
| Complete Signal Absence (L3-A) | — |
| Size Progression Fear (L3-F) | — |
| Late-trainer stories (Maureen Bennie anchor) | — |
| "Add alongside specialty diapers" framing | — |
| Minimal urgency (ZERO) | — |
| Extended forbidden phrase list | — |
| Medicaid-aware pricing sensitivity | — |

**Key scope rule:** DIGNITY-FIRST IS NON-NEGOTIABLE. Every Level 3 email must pass the dignity test: "Does this email treat Daniel's autism as identity, not disease? Does it validate Maria's years of effort? Does it offer hope without false promises?"

**Symptom clusters in scope:** L3-A (Complete Signal Absence), L3-B (Sensory Overload Bathroom), L3-C (Withholding + Severe GI), L3-D (Communication Lack), L3-E (Physical Resistance), L3-F (Size Progression Fear)

**Extended forbidden phrases (Level 3 adds to Level 1+2 list):**
- "Your child WILL train"
- "Don't give up!"
- "It's never too late!" (as sole statement)
- "Save him from years of diapers"
- "Become like other kids"
- "Get out of diapers!" / "Be diaper-free!"
- "He deserves better" (implies failure)
- Adult diaper language as sales pressure
- Grief as sales tool
- Any exclamation-mark heavy subjects

### 4.4 General Fallback — Cross-Level Audience

**Tag:** `avatar_general` | **Real volume:** ~50% of email subscribers

**Scope boundaries:**

| In Scope (Phase 1) | Out of Scope (Phase 2+) |
|--------------------|-----------------------|
| "Whether...Or...If..." universal language pattern | Dimension-specific sub-flows |
| Universal symptom hooks | Behavioral dimension scoring |
| 5 sub-groups (A–E) with migration paths | — |
| Day 14 Level Detection flow | — |
| 50/50 hope/realism tonality | — |
| Cross-level email design | — |

**The 5 sub-groups in scope:**

| Sub-Group | Share of GF | Share of Total | Description |
|-----------|:-----------:|:--------------:|-------------|
| A — Diagnostic Entrants | ~25% | ~10% | No formal ASD diagnosis, confused |
| B — Diagnosis-Rejecters | ~15% | ~6% | Has diagnosis, rejects labels |
| C — Sensory-Difference Parents | ~25% | ~10% | SPD/ADHD, no ASD |
| D — Overwhelmed Non-Selectors | ~25% | ~10% | Has level, didn't select pop-up |
| E — Cart/Browse Without Opt-In | ~10% | ~14% | Captured via Klaviyo cookie |

**Key scope rule:** ~50% of General Fallback subscribers (~25% of total audience) will NEVER migrate to a specific level. Emails must be self-contained and effective for this permanent segment.

---

<a name="5-general-fallback-scope-rules"></a>
## 5. GENERAL FALLBACK SCOPE RULES

### 5.1 The 4 Universal Principles

1. **NEVER Level Labels** — "For kids who don't feel when they need to go"
2. **NEVER Fixed Age** — "If your child is anywhere from 3 to 10+"
3. **NEVER Diagnosis Prerequisite** — "For children whose nervous systems process signals differently"
4. **NEVER Verbal-Exclusive** — "Look for signals: pulling at pants, looking down"

### 5.2 Universal Symptom Hooks (Always In Scope)

- "Kids who sit on the toilet for 20 minutes and nothing happens"
- "Kids who pee right after the pull-up comes off"
- "Kids who play in a wet pull-up without reacting"
- "Kids who refuse to even try the toilet"
- "Kids whose pediatrician keeps saying 'wait until they're ready' — but readiness never arrives"

### 5.3 The "Whether...Or...If..." Pattern

This pattern is the core General Fallback language mechanic. One sentence feels personal to all levels simultaneously.

| Universal Statement | Hits A | Hits B | Hits C | Hits D | Hits E |
|---------------------|:------:|:------:|:------:|:------:|:------:|
| "Whether you're 3 weeks into wondering, or 3 years into trying..." | "wondering" = her | "trying" = inclusive | "trying" = her | "3 years" = exhaustion | All-inclusive |
| "Whether your kid is verbal or not, 3 or 10, diagnosed or watching..." | "watching" = her | "diagnosed or watching" = choice respected | "verbal or not" = inclusive | No burden = safe | Range = non-assuming |
| "If their nervous system processes signals differently..." | Inquiry-friendly | Label-free | Science-perfect | Symptom language | Mechanism |

### 5.4 Migration Path (In Scope)

**Active migration:** Day 14 Level Detection email with 4 re-selection buttons.
**Passive migration:** Purchase hints (underwear size → age → level; bundle size → experience).
**Expected migration rates:**

| Sub-Group | Click-Through to Level Story | Post-Purchase Self-Selection |
|:----------|:----------------------------:|:----------------------------:|
| A — Diagnostic Entrants | 15–25% | 40–50% |
| B — Diagnosis-Rejecters | <10% | 15–25% |
| C — Sensory-Difference | 20–35% | 40–55% |
| D — Overwhelmed Non-Selectors | 10–15% | 40–50% |
| E — Cart/Browse | <5% | 20–30% |

---

<a name="6-forbidden-scope-expansions"></a>
## 6. FORBIDDEN SCOPE EXPANSIONS

### 6.1 Absolute Forbidden (Phase 1)

| # | Forbidden Expansion | Why | Exception |
|---|---------------------|-----|-----------|
| 1 | **Separate Deadline Pressure flow** | Phase 2 segmentation; no data to detect it | Pre-K urgency IS allowed as Level 1 characteristic |
| 2 | **Separate Social Pressure flow** | Phase 2 segmentation; no behavioral detection | Social comparison references OK in Level 2 copy |
| 3 | **Separate Overwhelmed Mom flow** | Phase 2 segmentation; overlaps Level 3 dignity-first | Exhaustion acknowledgment OK in Level 3 copy |
| 4 | **`emotion_deadline` tag** | Creates invisible segmentation branch | — |
| 5 | **`emotion_social` tag** | Creates invisible segmentation branch | — |
| 6 | **`emotion_overwhelmed` tag** | Creates invisible segmentation branch | — |
| 7 | **Behavioral dimension scoring** | Requires engagement data that doesn't exist yet | — |
| 8 | **Level-specific Cart/Checkout flows** | Speed > segmentation in high-velocity flows | — |
| 9 | **5+ Welcome Flow variants** | 4 is the cap for Phase 1 | — |
| 10 | **Level labels in pop-up buttons** | Parents don't self-identify as "Level 2" | — |
| 11 | **Age-based routing** | Age ≠ level; a 5-year-old could be L1 or L3 | — |
| 12 | **Diagnosis-based routing** | Excludes Sub-Groups A, B, C in General Fallback | — |

### 6.2 Forbidden Language Expansions

**Never in any Phase 1 email:**
- "You're a Deadline Pressure mom" (dimension label)
- "Social Pressure is your biggest challenge" (dimension label)
- "You're overwhelmed — we get it" (dimension diagnosis)
- "Based on your behavior, we've identified your emotional state" (behavioral scoring)

### 6.3 Forbidden Flow Architecture Expansions

**Never in Phase 1:**
- Dimension-based flow splits (Welcome Flow → Deadline variant / Social variant / Overwhelmed variant)
- Cross-level dimension flows (separate "Deadline Pressure Welcome Flow" for all levels)
- Behavioral triggers based on emotional dimension detection
- Secondary pop-up question for dimension detection
- Klaviyo conditional logic based on engagement patterns → dimension assignment

---

<a name="7-decision-tree-for-scope-questions"></a>
## 7. DECISION TREE FOR SCOPE QUESTIONS

Use this decision tree when unsure whether something belongs in Phase 1.

```
START: Does this create a separate email, flow, tag, or segmentation branch?
│
├─ NO → Probably Phase 1. Proceed.
│   (Examples: tonality calibration, subject line, copy choice, design element)
│
├─ YES → Continue ↓
│
│   Is it based on the 4 avatar levels (L1, L2, L3, General Fallback)?
│   │
│   ├─ YES → Continue ↓
│   │
│   │   Is it the Welcome Flow or a post-purchase detection flow?
│   │   │
│   │   ├─ YES → Phase 1. Proceed.
│   │   │
│   │   └─ NO → Is it a high-velocity flow (Cart, Checkout, Browse)?
│   │       │
│   │       ├─ YES → Must be cross-level (General Fallback). Phase 1.
│   │       │
│   │       └─ NO → Can it use tag-based routing with existing 4 tags?
│   │           │
│   │           ├─ YES → Phase 1. Proceed.
│   │           │
│   │           └─ NO → Scope question. Likely Phase 2.
│   │
│   └─ NO → Continue ↓
│
│   Is it based on emotional dimensions (Deadline, Social, Overwhelmed)?
│   │
│   ├─ YES → PHASE 2. STOP. Do not build.
│   │
│   └─ NO → Continue ↓
│
│   Is it based on behavioral signals (click patterns, open frequency)?
│   │
│   ├─ YES → PHASE 2. STOP. No behavioral data exists yet.
│   │
│   └─ NO → Continue ↓
│
│   Is it based on age, diagnosis status, or verbal ability?
│   │
│   ├─ YES → Does it use existing pop-up buttons for routing?
│   │   │
│   │   ├─ YES → Phase 1. (Pop-up buttons already encode symptom-level info.)
│   │   │
│   │   └─ NO → PHASE 2. STOP. Age/diagnosis ≠ level.
│   │
│   └─ NO → Scope question. Escalate to strategist.
```

### 7.1 Quick Reference: Common Scope Questions

| Question | Answer |
|----------|--------|
| "Can I reference Pre-K in a Level 1 email?" | ✅ YES — Pre-K urgency is a Level 1 characteristic, not a dimension |
| "Can I create a separate Pre-K urgency flow?" | ❌ NO — that's Deadline Pressure segmentation |
| "Can I acknowledge exhaustion in Level 3 copy?" | ✅ YES — tonality calibration, not segmentation |
| "Can I create a separate Overwhelmed Mom flow?" | ❌ NO — Phase 2 segmentation |
| "Can I write different subject lines for Level 2 based on whether she has a BCBA?" | ✅ YES — copy choice within existing segment |
| "Can I tag subscribers as 'has BCBA' for routing?" | ❌ NO — new segmentation branch |
| "Can I use the 4 pop-up buttons for Cart Abandonment routing?" | ❌ NO — Cart Abandonment is always cross-level |
| "Can I add a 5th Welcome Flow variant for 'high support needs verbal kids'?" | ❌ NO — 4 is the Phase 1 cap |
| "Can I A/B test Level 1 tonality (70/30 vs 80/20)?" | ✅ YES — tonality calibration within existing segment |
| "Can I add a dimension detection question to the pop-up?" | ❌ NO — Phase 2 pop-up expansion |
| "Can I use Level 2's BCBA respect language in General Fallback emails?" | ✅ YES — but only if the email is self-contained for all levels |
| "Can I build a 'latest trainer success story' email for Level 3?" | ✅ YES — this is Level 3 content, not dimension segmentation |

---

<a name="8-cross-reference-to-other-layers"></a>
## 8. CROSS-REFERENCE TO OTHER LAYERS

### 8.1 Layer Dependencies

| Layer | Name | Relationship to L35 |
|-------|------|---------------------|
| **L04** | Avatar Levels | **PRIMARY SOURCE.** L35 constrains L04's 4 levels as Phase 1 scope. |
| **L05** | Emotional Dimensions | **PHASE 2 MATERIAL.** L05's 3 dimensions are documented but excluded from Phase 1 by L35. |
| **L02** | Customer Demographics | Level demographics inform tonality calibration within Phase 1 scope. |
| **L06** | Symptom Clusters | Each level's clusters are in scope for Phase 1 email hooks. |
| **L07** | Conversion Probabilities | Per-level conversion rates guide Phase 1 resource allocation. |
| **L08** | Segmentation Mechanics | Pop-up + Klaviyo tag logic is Phase 1 implementation. |
| **L09** | Voice (Lena) | Lena's voice applies to ALL Phase 1 emails. Not affected by L35. |
| **L10** | 5 Conversion Levers | All 5 levers are in scope for Phase 1. Level-specific strength varies. |
| **L11** | 10 Objections | All objections are in scope. Counter-strategies are level-calibrated. |
| **L21** | General Fallback Sub-Groups | All 5 sub-groups are in scope. Migration paths are Phase 1. |
| **L35** | Avatar Scope Constraint | **THIS LAYER.** Defines what is in and out of Phase 1. |
| **L36** | Deliverability Infrastructure | Sending setup. Not affected by L35. |
| **L37** | Klaviyo Technical Setup | Tag logic must use only Phase 1 tags. |
| **L38** | Brand Constants | Universal. Not affected by L35. |

### 8.2 Cross-Layer Consistency Rules

**Rule 1: L04 levels are authoritative for Phase 1.**
If a document references avatar levels, it must use the 4-level system (L1, L2, L3, General Fallback). Any reference to emotional dimensions as segmentation criteria is Phase 2 and must be flagged.

**Rule 2: L05 dimensions inform but do not govern.**
The emotional dimension research from L05 is valuable for calibrating tone within level-specific flows. But L05 does NOT create new flows, tags, or routing logic in Phase 1.

**Rule 3: L08 pop-up is 4 buttons only.**
The pop-up defined in L08 uses 4 symptom-based buttons. No secondary dimension question. No behavioral detection. No age/diagnosis routing.

**Rule 4: L37 Klaviyo tags are 4 primary tags.**
`avatar_level1`, `avatar_level2`, `avatar_level3`, `avatar_general`. Plus behavioral tags (welcome_completed, purchase tags, etc.). No emotional dimension tags.

**Rule 5: Cross-level flows use General Fallback.**
L08 defines which flows are level-specific vs cross-level. L35 enforces this: only Welcome Flow and conditional post-purchase flows are level-specific. Everything else is cross-level.

### 8.3 Scope Violation Detection

**Red flags that indicate scope creep:**
1. A document mentions "Deadline Pressure flow" or "Social Pressure flow" as a build target
2. A Klaviyo tag is created with `emotion_` prefix
3. A pop-up has more than 4 buttons or a secondary question
4. A Cart/Checkout/Browse flow routes by level tag
5. A Welcome Flow has more than 4 variants
6. An email uses dimension labels ("You're a Deadline Pressure mom")
7. Behavioral scoring is used to infer emotional dimensions
8. Age or diagnosis status is used as a routing criterion

**If any red flag is detected:** Flag it as Phase 2 scope creep and revert to Phase 1 rules.

---

## APPENDIX A: PHASE 1 vs PHASE 2 CHECKLIST

Use this checklist before building any email, flow, or segmentation element.

- [ ] Does it use only the 4 Klaviyo tags? (PASS = Phase 1)
- [ ] Is the Welcome Flow limited to 4 variants? (PASS = Phase 1)
- [ ] Are cross-level flows using General Fallback language? (PASS = Phase 1)
- [ ] Does the pop-up have exactly 4 buttons? (PASS = Phase 1)
- [ ] Is tonality calibrated per level, not per dimension? (PASS = Phase 1)
- [ ] Are emotional dimensions referenced as context, not segmentation? (PASS = Phase 1)
- [ ] Does the email treat autism as identity, not disease? (PASS = all phases)
- [ ] Does Level 3 pass the dignity test? (PASS = all phases)
- [ ] Are forbidden phrases avoided per level? (PASS = all phases)

---

## APPENDIX B: SCOPE RULE QUICK REFERENCE CARD

```
╔══════════════════════════════════════════════════════════════╗
║              AVATAR SCOPE CONSTRAINT — PHASE 1              ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  SEGMENTS: 4 only                                            ║
║    L1 (Sarah) · L2 (Lisa) · L3 (Maria) · General Fallback   ║
║                                                              ║
║  TAGS: 4 only                                                ║
║    avatar_level1 · avatar_level2 · avatar_level3 · avatar_general ║
║                                                              ║
║  WELCOME FLOWS: 4 variants                                   ║
║    DOC 2 · DOC 3 · DOC 4 · DOC 5 (each + DOC 1)            ║
║                                                              ║
║  OTHER FLOWS: Cross-level (General Fallback language)        ║
║    Cart · Checkout · Browse · Order · Shipping · PP          ║
║                                                              ║
║  POP-UP: 4 buttons (symptom-based, no labels)                ║
║                                                              ║
║  EXCLUDED (Phase 2+):                                        ║
║    ✗ Deadline Pressure flow/tag                              ║
║    ✗ Social Pressure flow/tag                                ║
║    ✗ Overwhelmed Mom flow/tag                                ║
║    ✗ Behavioral dimension scoring                            ║
║    ✗ Age/diagnosis-based routing                             ║
║    ✗ 5th Welcome Flow variant                                ║
║                                                              ║
║  ONE RULE: If it creates a separate flow, tag, or            ║
║  segmentation branch based on emotional dimension,           ║
║  it is Phase 2. Period.                                      ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

*End of Layer 35 — Avatar Scope Constraint Comprehensive Synthesis*
*Sources: Layer 04 (Avatar Levels, 1237 lines), Overnight Plan (L35 definition + L5 dimensions), Diagnosis Plan, Client Files (DOC1–DOC6)*
*Data Quality: Round 01–04 input files not produced by upstream tasks; synthesis built from authoritative project documents*
*Generated: 2026-05-25*
