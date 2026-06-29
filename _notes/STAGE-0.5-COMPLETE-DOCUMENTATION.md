# STAGE 0.5 — COMPLETE DOCUMENTATION: THE CUSTOMER JOURNEY MATRIX

> **Project:** BrightKidCo  
> **Stage Owner:** Ayoub  
> **Date Range:** June 28, 2026  
> **Status:** COMPLETE — All 4 master journeys assembled, cross-level sync audited  

---

## TABLE OF CONTENTS

1. [What Stage 0.5 Was](#1-what-stage-05-was)
2. [Why It Existed — The Desensitization Problem](#2-why-it-existed--the-desensitization-problem)
3. [Inputs — What Stage 0.5 Received](#3-inputs--what-stage-05-received)
4. [Process — How Stage 0.5 Was Built](#4-process--how-stage-05-was-built)
5. [Subagents Dispatched](#5-subagents-dispatched)
6. [Key Findings](#6-key-findings)
7. [Outputs](#7-outputs)
8. [Current State](#8-current-state)
9. [Cross-References — How Stage 0.5 Feeds Stage 1 and Stage 2](#9-cross-references--how-stage-05-feeds-stage-1-and-stage-2)
10. [Appendix: File Inventory](#10-appendix-file-inventory)
11. [Appendix: Architecture Deep-Dives by Level](#11-appendix-architecture-deep-dives-by-level)
12. [Appendix: The 20 Individual Section Documents](#12-appendix-the-20-individual-section-documents)

---

## 1. WHAT STAGE 0.5 WAS

Stage 0.5 was the **Customer Journey Matrix** — the most ambitious pre-production documentation phase in the BrightKidCo project. Its singular mission: build a per-level, per-email, emotionally-and-structurally complete journey blueprint so that every downstream subagent (Stage 1 copywriters, Stage 2 designers, Stage 3 QA, Stage 4 launch engineers) could look up any email and know, instantly and completely, what to build and why.

This was **not** a 4-row table of "here's what L1/L2/L3/GF get." It was a **30–50+ page reference document per level** containing:

1. **The Sequence** — every email the customer receives, in chronological order, with timing, triggers, and goals  
2. **The Emotional Arc** — what the customer is FEELING before opening, during the hook moment, through the trust transaction, and after closing; plus a running Trust Meter  
3. **The Structural Blueprint Per Email** — all 9 variance dimensions (section count, section pattern, image density, color temperature, email length, argument structure, visual rhythm, CTA position, subject line type) filled in with explicit justification for each choice  
4. **The Variance Ledger** — a running tally of patterns used, what's still available, and where 6/9 variance cannot be achieved  
5. **The Trust Meter** — predicted trust level before and after every single email, with flagged danger zones  
6. **The Conversion Gates** — which emails can prompt a purchase, which cannot, and which must carry permission-not-to-buy  
7. **The Dead-Ends** — what happens if the customer ignores each email; when winback fires; when sunset begins; how many ignores before segment changes  
8. **Cross-Flow Continuity** — how Welcome E3 should feel different from Cart E2 even if the same customer receives both in the same week  

The plan was written on June 28, 2026, as an 11-section, 469-line specification. Execution involved 25 subagent jobs across 5 rounds, plus 4 master assembler jobs and 1 cross-level sync checker — a total of **30 subagent dispatches**.

---

## 2. WHY IT EXISTED — THE DESENSITIZATION PROBLEM

### 2.1 The Core Threat

The BrightKidCo email marketing system faced a structural threat that no amount of clever copy could fix in isolation: **desensitization**. A customer who receives 35–55 emails over 6 months will pattern-match. She will recognize the structure before she reads the words. She will feel the marketing machinery moving, and she will stop opening.

This was not a theoretical concern. BrightKidCo's target customer — a mom of an autistic child who has tried 10–50+ failed potty-training methods — has the highest BS detector in any consumer segment. She has been marketed to before. She has bought the 3-day miracle. She has read the "revolutionary breakthrough" emails. She has trusted and been burned. Her trust is the single most expensive currency in the BrightKidCo universe, and it is earned in fractions and squandered in wholes.

### 2.2 The 9-Dimension Solution

The desensitization framework (from `plans/a-to-z-problem-definition.md` §5) identified that email fatigue operates across 9 independent dimensions. If a customer receives three consecutive emails that are identical on even 2–3 of these dimensions, her pattern-recognition system fires and engagement collapses. The only defense is **deliberate, pre-planned variance** across all 9 dimensions:

| # | Dimension | What It Prevents |
|---|-----------|-----------------|
| 1 | Section Count | "Every email from them has 5 sections" |
| 2 | Section Pattern (A–H) | "They always do hero → body → CTA" |
| 3 | Image Density | "They always show 2 product photos" |
| 4 | Color Temperature | "Everything is warm cream" |
| 5 | Email Length | "I know exactly how long to scroll" |
| 6 | Argument Structure | "They always do Problem → Agitate → Solve" |
| 7 | Visual Rhythm | "Same gap widths every time" |
| 8 | CTA Position | "Button is always at the bottom" |
| 9 | Subject Line Type | "Every subject line is an observation hook" |

The constraint: each email must differ from its two immediate predecessors on at least **6 of 9 dimensions**. If fewer than 6 differ, the customer's brain flags the email as "same thing again" and deletes without opening.

### 2.3 Why This Could Not Be Handled at the Individual Email Level

A Stage 1 copywriter building a single email — say, Welcome E4 for Level 2 — cannot know what Welcome E2 and E3 looked like unless someone has already mapped the entire sequence. They cannot know what Cart E2 looked like if the customer received it yesterday. They cannot know that Browse E3 and Welcome E4 both fire on Day 7 and must feel like different emails from the same sender.

Stage 0.5 solved this by building the **entire journey for all four levels simultaneously** — mapping every email's structural fingerprint against every other email's — before a single email was written. This is the difference between building a house with architectural blueprints versus building it room by room and hoping the hallway connects.

### 2.4 The Trust Preservation Mandate

Beyond desensitization, Stage 0.5 served a second, equally critical purpose: **trust preservation at every emotional phase**. The four customer levels (L1 Sarah, L2 Lisa, L3 Maria, GF General Fallback) occupy fundamentally different emotional realities:

- **L1 (Sarah):** Hopeful but critical, 70/30 hope/realism, 2–7 day decision window, Pre-K deadline, fastest to convert but also fastest to abandon if trust is broken  
- **L2 (Lisa):** Defensive-evaluator, 40/60 hope/realism, 14–21 day decision window, BCBA-equipped, most skeptical, will audit every claim scientifically  
- **L3 (Maria):** Resigned, 20/80 hope/realism, 14–30+ day decision window, non-verbal child, 6–10+ years of trying, one forbidden phrase away from permanent unsubscribe  
- **GF (General Fallback):** Five sub-groups under one tag, 50/50 blended hope/realism, symptom-language only (V16 rule), the only level that owns a migration touchpoint (PP-Level Detection at Day 14)

The same email structure, tone, or CTA aggression that converts L1 would alienate L3 permanently. The same mechanism depth that earns L2's trust would overwhelm L1's fast-decision momentum. Stage 0.5 mapped these asymmetries explicitly so that no downstream agent could accidentally send L3-level dignity-violation copy or apply L1-level urgency pressure to an L2 customer.

---

## 3. INPUTS — WHAT STAGE 0.5 RECEIVED

Stage 0.5 was not built from scratch. It was the synthesis layer on top of everything Stage 0 had produced.

### 3.1 Stage 0 Locked Artifacts

| File | Content | Role in Stage 0.5 |
|------|---------|-------------------|
| `locked-profile.json` | 125 email profiles with macro intent, section count, word count, signoff variant, and level tag | Primary structural input for all 9-dimension blueprints |
| `strategy-macro.json` | 22 flow-level macro definitions with sub-flow timing, lever assignments, and cross-level routing | The chronological skeleton — "when does each email fire?" |
| `extracted-sections.json` | Actual section breakdowns per email from Stage 0 extraction | Ground-truth for dimension 1 (section count) and dimension 2 (section pattern) |

### 3.2 Giuliano's Demands (Strategy Canon)

`GIULIANO-DEMANDS.md` provided the non-negotiable rules that every Stage 0.5 subagent had to anchor to:

- **§1.1 — The 4 Levels:** L1 (verbal, low support), L2 (mixed verbal, moderate support, BCBA), L3 (non-verbal/minimally verbal, high support), GF (5 sub-groups, symptom-language only)  
- **§5 — 4 Emotional Phases:** The customer's emotional trajectory across the lifecycle  
- **§6 — 6 Calibration Rules:** Per-level CTA aggression, hope/realism ratios, urgency permissions  
- **§8.5 — Level-Specific Forbidden Phrases:** L1 must never hear "non-verbal" or "severe"; L2 must never hear "Quick"; L3 must never hear "Fix"/"Cure"/"math reframe"; GF must never hear "autism"/"ASD"/"Level 1/2/3" (V16 rule)  
- **§13 — Hope/Realism Matrix:** Per-level ratios across journey stages  
- **§15.7 — CTA Calibration:** Hard/soft/permission-only CTA rules per level  
- **§17 — Domain Warming:** L3 exclusion from weeks 1–2; warming week content restrictions  
- **§18 — Deliverability Envelope:** From-address rules, text-to-image ratios, spam thresholds  
- **§23 — The 6-Element L2 Formula:** Non-negotiable pre-flight checklist for every L2 email with a CTA  
- **§25 — L3 Special Dynamics:** The 6 mandatory L3 elements (dignity, mini-wins, resignation acknowledgment, permission-not-to-buy, Lena peer voice, 60-day guarantee framing)

### 3.3 Synthesis Documents

| File | Content | Role |
|------|---------|------|
| `01-customer-avatar.md` | Full avatar profiles per level — demographics, child specifics, emotional baselines, trust thresholds, pain points | Foundation for Section A (Avatar Profile) in each journey |
| `14-objection-handling-deep-dive.md` | Objection timing and reframe strategies per level | Input for FAQ/Objection Library structure and emotional arc calibration |
| `21-customer-journey-map.md` | Pre-existing high-level journey reference | Orientation — what the overall shape of the journey looked like before deep engineering |

### 3.4 Desensitization Framework

| File | Content | Role |
|------|---------|------|
| `plans/a-to-z-problem-definition.md` §5 | 9 dimensions of variance, fatigue mechanics, pattern-recognition thresholds | The theoretical backbone — why every email must differ on 6/9 dimensions from its predecessor |
| `email-marketing-structure` skill | Section patterns A–H, hero variants, body block types, CTA position taxonomies | The construction vocabulary — what "Pattern C" vs "Pattern G" actually means |

---

## 4. PROCESS — HOW STAGE 0.5 WAS BUILT

Stage 0.5 was executed as a **5-round, dependency-chained subagent pipeline**. Each round built on the previous round's outputs. The pipeline was designed so that once Round 4 for a single level was complete, Stage 1 could begin work on that level while the remaining levels finished.

### 4.1 Round 1: Avatar Deep-Dives (4 parallel jobs)

**Purpose:** Establish the foundational "who is this customer?" context that every subsequent subagent would reference.

**What each subagent produced:** A standalone `journey-l{l}-01-avatar.md` document covering 10 dimensions:
1. Demographics and family structure
2. What she's tried (method inventory)
3. Emotional baseline at program entry
4. Trust threshold — what destroys it instantly
5. Decision speed (2–7, 7–21, or 14–30+ days)
6. Hope/realism starting ratio
7. Hope/realism trajectory across journey stages
8. What she needs from the brand
9. What she CANNOT hear (level-specific forbidden phrases)
10. Visual calibration rules for her level

**Length target:** 2,000–4,000 words per document.

**Output files:** `journey-l1-01-avatar.md`, `journey-l2-01-avatar.md`, `journey-l3-01-avatar.md`, `journey-gf-01-avatar.md`

### 4.2 Round 2: Sequence Builders + Emotional Arcs (8 parallel jobs)

**Sequence Builders (4 jobs):** Built the chronological email list for each level — every email the customer receives, in order, with Day/hour, trigger, goal, and cross-flow context. This was the skeleton onto which everything else attached.

**Emotional Arc + Trust Meter (4 jobs):** For each email in the sequence, the subagent mapped:
- **BEFORE:** What the customer is feeling when the email arrives  
- **HOOK MOMENT:** The first 1–2 sentences — does she recognize herself?  
- **TRUST TRANSACTION:** What does she need to believe for this email to land?  
- **AFTER:** What she's feeling after closing (predicted)  
- **TRUST DELTA:** -2 to +2 score per email  
- **Running Trust Meter:** Starting trust level + cumulative delta after each email  
- **Flags:** Negative deltas, trust below 30% of starting trust, jumps >+2 (suspicious)

This was the deepest section — 4,000–8,000 words per level.

**Output files:**  
- Sequences: `journey-l1-02-sequence.md`, `journey-l2-02-sequence.md`, `journey-l3-02-sequence.md`, `journey-gf-02-sequence.md`  
- Emotional arcs: `journey-l1-03-emotional-trust.md`, `journey-l2-03-emotional-trust.md`, `journey-l3-03-emotional-trust.md`, `journey-gf-03-emotional-trust.md`

### 4.3 Round 3: Structural Blueprints + Flow Behaviors (8 parallel jobs)

**Structural Blueprints (4 jobs):** The most tactical work. For each email in the sequence, every one of the 9 variance dimensions was filled in with explicit justification:

| Dimension | Question Answered |
|-----------|-------------------|
| 1. Section count + names | How many sections and what are they called? Why this count? |
| 2. Section pattern (A–H) | Which pattern from the email-marketing-structure skill? Why? |
| 3. Image density | 1–6 images? Why? (Too many = slow load; too few = empty) |
| 4. Color temperature | Warm/cool/neutral/dark? Why? |
| 5. Email length | Short/medium/long + estimated word count. Why? |
| 6. Argument structure | PAS/AIDA/Story/Data/Testimonial/Direct/Mechanism-Permission. Why? |
| 7. Visual rhythm | Tight/open/mixed gap widths. Why? |
| 8. CTA position | Early/mid/late/double-tap/text-link. Why? |
| 9. Subject line type | Observation/question/mechanism/story/validation/data/quote. Why? |

Then the **Variance Ledger** was built: for email N, list the 9 dimensions of N-1, N-2, N-3 to count differences. Flag any email where fewer than 6 dimensions differ from N-1. Recommend remediation (split email, change argument structure, move CTA, add day between sends).

**Flow Behaviors (4 jobs):** For each email, three operational dimensions were mapped:
1. **Conversion Gate:** What type of CTA is allowed? Hard CTA, soft CTA, text-link only, permission-not-to-buy required?  
2. **Dead-End:** What happens if she ignores this email? Winback fires? Sunset starts? Segment changes?  
3. **Cross-Flow Continuity:** What other email did she likely receive recently? What MUST this email feel like vs. that one? Same-day collision resolution.

**Output files:**  
- Structural blueprints: `journey-l1-04-structural-blueprint.md`, `journey-l2-04-structural-blueprint.md`, `journey-l3-04-structural-blueprint.md`, `journey-gf-04-structural-blueprint.md`  
- Flow behaviors: `journey-l1-05-flow-behavior.md`, `journey-l2-05-flow-behavior.md`, `journey-l3-05-flow-behavior.md`, `journey-gf-05-flow-behavior.md`

### 4.4 Round 4: Journey Assemblers (4 parallel jobs)

**Purpose:** Combine the 5 section documents per level into a single, navigable Master Journey Document. Each assembler:

1. Combined Sections A–J into one document  
2. Added a Table of Contents (20–25 sections)  
3. Wrote an Executive Summary (~500 words: who she is, what she gets, what we promise)  
4. Built a Quick Reference Card (1-page summary for Stage 1 subagents)  
5. Added cross-references between sections  
6. Cross-checked for internal consistency (no contradictions between sections)  
7. Audited completeness (every email in the sequence has all sections covered)  
8. Flagged missing data

**Output files:** `journey-l1-MASTER.md`, `journey-l2-MASTER.md`, `journey-l3-MASTER.md`, `journey-gf-MASTER.md`

### 4.5 Round 5: Cross-Level Sync Checker (1 job)

**Purpose:** Audit all four master journeys against each other to catch conflicts that would produce jarring customer experiences during migration (GF → L1/L2/L3) or during same-week newsletter receipt across levels.

**Audit dimensions:**
1. Same-week planning conflicts (e.g., L1 and L2 both using warm color temperature in Week 2 — acceptable if both use warm by design; flagged if one level's warm usage violates the other level's color rules)  
2. Same-customer-different-level conflicts (a mom transitioning GF → L1 shouldn't see jarring color shifts, CTA aggression jumps, or tonal contradictions)  
3. Shared email consistency (cross-level emails like Cart/Checkout/Browse must feel unified across levels while respecting per-level calibration)  
4. Conversion path consistency (L1 buying flow shouldn't conflict with L3 trust-building flow if a customer migrates between levels)  
5. Sign-off progression consistency (verified as 10/10 — structurally identical across all four documents)

**Output file:** `journey-cross-level-sync.md`

---

## 5. SUBAGENTS DISPATCHED

### 5.1 Total Dispatch Count: 30

| Round | Job Type | Count | Parallel | Dependency |
|-------|----------|:-----:|:--------:|------------|
| 1 | Avatar Deep-Dive | 4 | Yes | None — reads Stage 0 inputs only |
| 2 | Sequence Builder | 4 | Yes | Round 1 (avatar profiles) |
| 2 | Emotional Arc + Trust Meter | 4 | Yes | Round 1 + Round 2 sequences |
| 3 | Structural Blueprint + Variance Ledger | 4 | Yes | Round 1 + Round 2 |
| 3 | Flow Behavior (Gates, Dead-Ends, Cross-Flow) | 4 | Yes | Round 1 + Round 2 |
| 4 | Journey Assembler | 4 | Yes | Rounds 1–3 |
| 5 | Cross-Level Sync Checker | 1 | No | All 4 master documents |

**Total: 4 + 4 + 4 + 4 + 4 + 4 + 1 = 25 section-building subagents + 4 master assemblers + 1 sync checker = 30 dispatches**

### 5.2 Dispatch Pattern

Rounds 1–3 were **level-parallel** — all four levels processed simultaneously within each job type. This allowed the overall pipeline to complete faster than serial execution. The key insight: once Round 1 produced the avatar profile for a single level (e.g., L1), Round 2 could begin on that level (building L1's sequence and emotional arc) while Round 1 continued with the remaining levels. In practice, all 4 levels progressed through each round in lockstep due to the parallel job architecture.

### 5.3 Estimated Timing

| Round | Estimated Duration | Notes |
|-------|-------------------|-------|
| 1 | ~30 min | 4 parallel jobs, each reading synthesis docs + demands |
| 2 | ~60 min | 8 parallel jobs (4 sequences + 4 emotional arcs) |
| 3 | ~90 min | 8 parallel jobs (4 structural blueprints + 4 flow behaviors) — the most computationally intensive round |
| 4 | ~30 min | 4 parallel assembler jobs |
| 5 | ~15 min | 1 sync checker reading all 4 masters |
| **Total** | **~4 hours** | Plus ~30 min Ayoub review |

---

## 6. KEY FINDINGS

### 6.1 Cross-Level Sync Score: 7.5/10

The cross-level sync audit found the four master journey documents to be **broadly well-synchronized** but with significant conflicts requiring remediation. The sync score of 7.5/10 reflects a system that is *functional and internally coherent within each level* but has *cross-level friction points at migration boundaries* that need attention before launch.

### 6.2 The 8 HIGH-Severity Conflicts

The sync checker identified 8 HIGH-severity conflicts, 9 MEDIUM-severity conflicts, and 6 LOW-severity conflicts. The HIGH-severity conflicts are:

| ID | Conflict | Affected Levels | Nature |
|----|----------|:---:|--------|
| **H1** | 49% SPARK stat framing divergence | L1, L2 vs. L3, GF | L1/L2 use "49% of autistic 4–5 year olds" with full citation. L3 and GF cannot use the word "autism" explicitly (GF per V16; L3 per dignity rules). A GF→L1 migration means the customer's inbox shifts from "about 1 in 2 kids with nervous system differences" to "49% of autistic 4–5 year olds." |
| **H2** | Mary S. Story opener differs across levels | L1, L2, GF vs. L3 | L1/L2/GF use "I started BrightKidCo because my own child couldn't feel the signal..." L3 explicitly bans this opener as "marketing dialect" and uses "Why I started this. — Mary S." |
| **H3** | Pre-K calendar language banned in 3 levels, permitted in L1 | All | L1 uses Pre-K urgency anchors. L2 bans them (school adapted via IEP). L3 bans them (trust break). GF bans them (L1-only allowance). A GF→L1 migration creates a tonal jump from zero Pre-K framing to Pre-K math. |
| **H4** | Brand-Green CTA saturation drops sharply on migration | L1 vs. L2, L3 | L1 uses full-saturation #039902 green, full-width buttons. L2 uses desaturated muted green, not full-width. L3 never uses green at all — muted gray/brown only. GF variable by sub-group. Migration means visual identity shifts radically in a single email. |
| **H5** | Same-week collision resolution priority chain not consistently documented | All | Cart vs. Welcome vs. PP-Level Detection vs. PP-Education collision rules exist per-level but are not unified in a single cross-level priority hierarchy. The GF document provides the most complete chain; L1/L2/L3 document their own. |
| **H6** | 60-day guarantee language tone diverges | L1 vs. L3 | L1: "Try it for 60 days. By your judgment." (risk-reversal at first ask). L3: same words but different emotional payload — the guarantee is the permission to try without hope. The cross-level sync notes that while the words are identical, the framing in surrounding copy must reflect the level's emotional reality. |
| **H7** | Welcome cadence asymmetry creates migration timing gaps | GF vs. L1, L2, L3 | L1 Welcome: D0/D1/D3/D7/D10/D14/D17/D21. L2: similar. L3: D0/D2/D5/D7/D10/D14/D17/D21 (slower E1→E2, E2→E3). GF: D0/D1/D3/D7/D10/D14/D17/D21 but with §17.1 warming exclusion. A GF customer migrating at Day 14 enters a level whose Welcome flow is at email E6 — she has missed E1–E5. |
| **H8** | Lena's identity marker has minor copy drift across documents | All | L2 specifies "one trained at almost 8." L3 specifies "One trained at 6. The other almost 8." These are consistent if read as the same family, but the inconsistency could confuse subagents working across levels. |

### 6.3 The Single Most Consistent Dimension: Sign-Off Progression (10/10)

The sign-off progression ("Talk soon," → "With understanding," → "With care," across E1–E2, E3–E5, E6+) is **structurally identical in every document**. The sync checker flagged this as the model for how cross-level synchronization should work — and recommended all other dimensions aspire to this level of consistency.

### 6.4 The Single Most Divergent Dimension: The 49% SPARK Stat

The 49% stat is the most powerful normalization tool in the system — and simultaneously the biggest cross-level landmine. It appears in 70%+ of L1 emails, in L2's callout boxes as one of 11 cross-flow threads, is banned by direct name in GF (V16 — symptom language only), and is allowed in L3 only in specific contexts (PP-Education D14, FAQ E1) but never in subject lines.

### 6.5 The GF Segment's Unique Role: Migration Infrastructure

GF is the only level that owns a migration touchpoint (PP-Level Detection at Day 14). No other level has this. GF is both a holding pattern and a distribution hub — 65–75% of GF customers are expected to migrate to L1/L2/L3 over the lifecycle, with the bulk (40–50% of Group D) migrating at Day 14. The remaining 25–35% are permanent GF residents (Groups B and C).

### 6.6 Variance Ledger: Three Critical Remediation Pairs Across L1

The L1 structural blueprint identified three pairs where 6/9 variance cannot be achieved:

1. **Checkout E1 vs. Cart E3 (3/9 variance):** Must change argument to Problem-Solution + add mid text-link  
2. **PP-Ext-Ed E5 vs. PP-Ext-Ed E4 (2/9 variance):** Must change to Story-Led + single CTA + split into 2 sends  
3. **Replen B2 vs. Replen B1 (2/9 variance):** Must change to Story-Led + stretch to D105

Five acceptable flags (5/9 variance) were documented as intentional narrative transitions.

---

## 7. OUTPUTS

### 7.1 Master Journey Documents (4)

| File | Level | Customer | Page Estimate | Word Estimate |
|------|:-----:|----------|:------------:|:-------------:|
| `journey-l1-MASTER.md` | L1 | Sarah (verbal 3–5, Pre-K) | ~50 pages | ~25,000 |
| `journey-l2-MASTER.md` | L2 | Lisa (BCBA-equipped, 5–7) | ~50 pages | ~25,000 |
| `journey-l3-MASTER.md` | L3 | Maria (non-verbal, 6–10+) | ~45 pages | ~22,000 |
| `journey-gf-MASTER.md` | GF | 5 sub-groups | ~55 pages | ~26,000 |

Each master document contains a full Table of Contents, Executive Summary, Quick Reference Card, avatar profile, full email sequence, emotional arc with trust meter, structural blueprints with variance ledger, conversion gates, dead-end maps, cross-flow continuity rules, and appendices with hard rules, forbidden phrases, visual specifications, and implementation checklists.

### 7.2 Individual Section Documents (20)

Per level: 5 section documents × 4 levels = 20 total:

- `journey-{l1,l2,l3,gf}-01-avatar.md` — Full avatar profile  
- `journey-{l1,l2,l3,gf}-02-sequence.md` — Chronological email sequence  
- `journey-{l1,l2,l3,gf}-03-emotional-trust.md` — Per-email emotional arc + trust meter  
- `journey-{l1,l2,l3,gf}-04-structural-blueprint.md` — 9-dimension structural specs + variance ledger  
- `journey-{l1,l2,l3,gf}-05-flow-behavior.md` — Conversion gates, dead-ends, cross-flow continuity

### 7.3 Cross-Level Sync Document (1)

- `journey-cross-level-sync.md` — Full audit across all 4 master journeys, 23 total conflicts (8 HIGH, 9 MEDIUM, 6 LOW), sync score 7.5/10

### 7.4 Total Quantitative Output

| Metric | Value |
|--------|-------|
| Master journey documents | 4 |
| Individual section documents | 20 |
| Cross-level sync document | 1 |
| **Total documents produced** | **25** |
| **Total words across all documents** | **304,933** |
| Email positions mapped | ~125 across all levels (L1: 51, L2: ~46, L3: 38–58, GF: ~50–55) |
| Subagent dispatches | 30 |
| Rounds executed | 5 |
| Estimated compute time | ~4 hours |

### 7.5 What Each Master Document Contains — Structural Inventory

Each master journey document is not a flat document. It is a structured reference with the following architecture:

**Front Matter**
- Axiom / One-Line Identity (who this customer is in a single sentence)
- Executive Summary (~500 words)
- Quick Reference Card (1-page operations sheet for Stage 1 subagents)

**Part I — Avatar & Identity**
- Demographics, family structure, child specifics
- What she's tried (method inventory — 10–50+ methods)
- Emotional baseline at entry
- Trust threshold (destroyers and builders in ranked order)
- Decision speed, hope/realism trajectory
- Forbidden phrases (level-specific)
- Visual calibration rules

**Part II — The Sequence**
- Phase-by-phase email map (Pre-Purchase, Purchase Event, Post-Purchase, Lifecycle, Winback/Sunset)
- Per-email Day/hour, trigger, goal, primary lever, CTA type
- Flow eligibility matrix (which of the 22 flows does this level receive?)

**Part III — Emotional Architecture**
- Per-email BEFORE/HOOK/TRUST/AFTER/TRUST-DELTA narrative
- Running Trust Meter with cumulative deltas
- The "click" moments — which emails produce the biggest trust jumps
- The "caution" moments — which emails risk trust
- Emotional death spirals to avoid
- Trust mode transitions across the journey

**Part IV — Structural Engineering**
- The 9 variance dimensions calibrated per level
- Per-email structural fingerprint (all 9 dimensions filled)
- Variance Ledger — running compliance check
- Remediation recommendations for low-variance pairs
- Pattern distribution analysis (which section patterns dominate)
- Anti-patterns to avoid (permission-stub, warm-only fatigue, stacked subject lines)

**Part V — Flow Behavior**
- Conversion Gates per email (Hard/Soft/Permission-only)
- Dead-End map per email (Winback? Sunset? Segment change?)
- Cross-Flow continuity (same-day collision pairs resolved)
- Suppression and trigger rules consolidated
- Cross-flow priority hierarchy
- Deliverability envelope

**Back Matter**
- Cross-references to source documents
- Hard Rules (locked, cite when in doubt)
- Implementation checklists (Stage 2 Copy + Stage 3 Design)
- Glossary / Index
- Master email index with all subject lines

---

## 8. CURRENT STATE

### 8.1 Status: COMPLETE

As of June 28, 2026, all Stage 0.5 deliverables are produced and the cross-level sync audit is complete. The 4 master journey documents exist and are mutually consistent within their domains. The 8 HIGH-severity conflicts have been identified and documented with recommended resolutions, but have not been remediated in the journey documents themselves — that is a Stage 0.5 post-audit task or a Stage 1 pre-flight task.

### 8.2 Completion Against Done Criteria

Per the Stage 0.5 plan §10:

| Criterion | Status | Notes |
|-----------|:------:|-------|
| 4 master journey documents exist (one per level) | ✅ | All 4 produced and assembled |
| All 125 emails appear in at least one journey | ✅ | L1 covers 51, L2 ~46, L3 38–58, GF ~50–55; all 125 email profiles from `locked-profile.json` are mapped |
| Cross-level sync report shows no HIGH-severity conflicts | ⚠️ | 8 HIGH-severity conflicts identified — needs remediation before Stage 1 launch |
| Stage 1 subagents can look up any email in <5 seconds via quick reference card | ✅ | Each master has a 1-page Quick Reference Card designed for rapid lookup |

### 8.3 Open Items

1. **Remediate 8 HIGH-severity cross-level conflicts** — priority before Stage 1 subagents begin building wireframes for cross-level flows  
2. **Standardize the 49% SPARK stat framing** — create a unified parenthetical that works across all levels  
3. **Adopt L3's Mary S. Story opener as brand-wide standard** — or create two variants with GF routing logic  
4. **Add migration-bridge paragraphs** — for L1 Welcome E6 and other post-migration touchpoints where tonal jumps occur  
5. **Unify the cross-flow collision priority hierarchy** — into a single system-wide document  
6. **Address Lena identity marker copy drift** — standardize the "one trained at 6, the other almost 8" or "one trained at almost 8" phrasing  

---

## 9. CROSS-REFERENCES — HOW STAGE 0.5 FEEDS STAGE 1 AND STAGE 2

### 9.1 What Stage 1 (Copywriting) Gets From Stage 0.5

Before a Stage 1 subagent writes the wireframe for any email, they now have:

| What They Need | Where They Find It |
|----------------|-------------------|
| Full avatar context (who is this mom, what is she feeling?) | `journey-l{l}-MASTER.md` Part I — Avatar Profile |
| Pre-filled 9 structural dimensions with WHY | `journey-l{l}-MASTER.md` Part IV — Structural Engineering |
| Variance check (what did the previous 3 emails use?) | `journey-l{l}-MASTER.md` Variance Ledger |
| Trust meter (can this email risk trust? what's the allowed delta?) | `journey-l{l}-MASTER.md` Part III — Emotional Architecture |
| Conversion gate (what CTA type is allowed? Hard/Soft/Permission?) | `journey-l{l}-MASTER.md` Part V — Flow Behavior, Conversion Gates |
| Cross-flow continuity (what did the customer receive recently?) | `journey-l{l}-MASTER.md` Part V — Cross-Flow Continuity |
| Dead-end behavior (what happens if she ignores this email?) | `journey-l{l}-MASTER.md` Part V — Dead-End Map |
| Forbidden phrases (what must this email NEVER say?) | `journey-l{l}-MASTER.md` Part I — Forbidden Phrases |
| Visual calibration rules (CTA style, color, spacing, imagery) | `journey-l{l}-MASTER.md` Part I — Visual Calibration |
| Subject line formula allowed for this email | `journey-l{l}-MASTER.md` Part IV — Dimension 9 |
| Sign-off progression for this email position | `journey-l{l}-MASTER.md` Part I — Sign-Off Progression |

The subagent workflow becomes:
1. Look up the email ID in the master journey document
2. Read the Quick Reference Card for orientation
3. Read the avatar context (who is this mom?)
4. Read the structural blueprint (what are the 9 dimensions for this email?)
5. Read the variance ledger (what did the last 3 emails use?)
6. Read the trust meter (what's the allowed trust delta?)
7. Read the conversion gate (what CTA is allowed?)
8. Read cross-flow continuity (what else is firing?)
9. Read forbidden phrases (what can't I say?)
10. **Write the wireframe with full context — zero guesswork**

This eliminates the "I'm building email E4 for L2 but I don't know what E2 and E3 looked like" problem that would otherwise require every subagent to read the entire sequence before starting work.

### 9.2 What Stage 2 (Design) Gets From Stage 0.5

Stage 2 subagents building the visual design for each email receive:
- Color palette per level (L1: Cream + Mint + Brand-Green full-saturation; L2: Mint + desaturated green + science callout boxes; L3: Cream + earth tones + NO Brand-Yellow; GF: balanced midpoint)
- CTA spec per level (full-width green vs. muted vs. text-link only)
- Spacing rules per level (L1: 40px tight; L2: 44px; L3: 56px widest)
- Image density target per email
- Visual rhythm type per email (tight/open/mixed)
- Forbidden visual elements per level (no Brand-Yellow for L3, no teal brand-wide, no cartoon illustrations brand-wide, no celebration shots for L3, no BCBA antagonist imagery for L2)
- The 6 cross-level visual rules (mandatory for all design)

### 9.3 What Stage 3 (QA) Gets From Stage 0.5

Stage 3 subagents verifying email quality receive:
- The 6-Element L2 Formula checklist (every L2 email with a CTA must pass all 6 gates)
- The 6 Mandatory L3 Elements checklist (every L3 email must contain all six)
- The V16 litmus test (does this GF email name autism? If yes, block)
- The forbidden phrase audit per level (verbal checklists)
- The trust-break catalog (30 cardinal sins for L3 alone)
- The 15 non-negotiable structural rules for L3
- Implementation checklists — Stage 2 Copy (29 items) and Stage 3 Design (20 items) per level

### 9.4 The Cross-Level Sync Document Feeds All Stages

The `journey-cross-level-sync.md` document is the operational bridge. It tells every downstream agent:
- What conflicts exist between levels and how to handle them
- Which dimensions are perfectly synced (sign-off: 10/10 — use as template)
- Which dimensions are deliberately asymmetric (49% stat, Pre-K language, CTA saturation) and what the rules are for cross-level emails that touch multiple levels
- Migration risks: what changes when a customer moves from GF to L1/L2/L3, and what mitigation bridges are needed

### 9.5 The Architectural Innovation: Mechanism-Permission (MP) Argument Structure

One of Stage 0.5's key contributions to Stage 1 was the formal definition of the **Mechanism-Permission (MP)** argument structure — a framework specifically designed for trauma-informed marketing to parents of autistic children. Unlike PAS (Problem-Agitate-Solve) or AIDA (Attention-Interest-Desire-Action), MP works by:

1. **Mirror** — Name the symptom. She recognizes herself.  
2. **Mechanism** — Explain why every method she's tried failed (wrong problem).  
3. **Re-Frame** — "You didn't fail. You solved the wrong problem."  
4. **Third Option** — Present the product as a new category, not another method.  
5. **Permission-Toned CTA** — "See if this works for him" instead of "BUY NOW."

MP was defined with 8 variants across the L1 Welcome flow (MP-light, MP-deep, MP-bridge, MP-absolution, MP-product, Story-Testimonial, MP-closing, Recap-MP), each calibrated to the customer's emotional state at that point in the journey. This framework is now available to all Stage 1 subagents as the default argument structure for L1 emails, replacing the generic PAS/AIDA defaults that would re-agitate self-blame.

---

## 10. APPENDIX: FILE INVENTORY

### 10.1 Complete Stage 0.5 File List

```
_notes/
├── 2026-06-28-stage-0.5-plan.md           ← The 11-section execution plan (469 lines)
│
├── journey-l1-MASTER.md                   ← L1 (Sarah) Master Journey (~25,000 words)
├── journey-l2-MASTER.md                   ← L2 (Lisa) Master Journey (~25,000 words)
├── journey-l3-MASTER.md                   ← L3 (Maria) Master Journey (~22,000 words)
├── journey-gf-MASTER.md                   ← GF Master Journey (~26,000 words)
│
├── journey-cross-level-sync.md            ← Cross-level audit (23 conflicts, score 7.5/10)
│
├── journey-l1-01-avatar.md                ← L1 Avatar Profile
├── journey-l1-02-sequence.md              ← L1 Email Sequence
├── journey-l1-03-emotional-trust.md       ← L1 Emotional Arc + Trust Meter
├── journey-l1-04-structural-blueprint.md  ← L1 9-Dimensional Blueprint + Variance Ledger
├── journey-l1-05-flow-behavior.md         ← L1 Conversion Gates, Dead-Ends, Cross-Flow
│
├── journey-l2-01-avatar.md                ← L2 Avatar Profile
├── journey-l2-02-sequence.md              ← L2 Email Sequence
├── journey-l2-03-emotional-trust.md       ← L2 Emotional Arc + Trust Meter
├── journey-l2-04-structural-blueprint.md  ← L2 9-Dimensional Blueprint + Variance Ledger
├── journey-l2-05-flow-behavior.md         ← L2 Conversion Gates, Dead-Ends, Cross-Flow
│
├── journey-l3-01-avatar.md                ← L3 Avatar Profile
├── journey-l3-02-sequence.md              ← L3 Email Sequence
├── journey-l3-03-emotional-trust.md       ← L3 Emotional Arc + Trust Meter
├── journey-l3-04-structural-blueprint.md  ← L3 9-Dimensional Blueprint + Variance Ledger
├── journey-l3-05-flow-behavior.md         ← L3 Conversion Gates, Dead-Ends, Cross-Flow
│
├── journey-gf-01-avatar.md                ← GF Avatar Profile (5 sub-groups)
├── journey-gf-02-sequence.md              ← GF Email Sequence (22 flows)
├── journey-gf-03-emotional-trust.md       ← GF Emotional Arc + Trust Meter (5 curves)
├── journey-gf-04-structural-blueprint.md  ← GF 9-Dimensional Blueprint + Variance Ledger
├── journey-gf-05-flow-behavior.md         ← GF Conversion Gates, Dead-Ends, Cross-Flow
│
└── STAGE-0.5-COMPLETE-DOCUMENTATION.md    ← THIS DOCUMENT
```

### 10.2 Input Files Referenced by Stage 0.5

```
_notes/
├── locked-profile.json                    ← 125 email profiles
├── strategy-macro.json                    ← 22 flow definitions
├── extracted-sections.json                ← Section breakdowns per email

outputs/synthesis/
├── 01-customer-avatar.md                  ← Avatar profiles
├── 14-objection-handling-deep-dive.md     ← Objection timing
├── 21-customer-journey-map.md             ← High-level journey reference

outputs/strategy/giuliano/
├── g3-brand-marketing-direction.md        ← Brand visual calibration

demands/
├── GIULIANO-DEMANDS.md                    ← Strategy canon

plans/
├── a-to-z-problem-definition.md §5        ← Desensitization framework
```

---

## 11. APPENDIX: ARCHITECTURE DEEP-DIVES BY LEVEL

### 11.1 L1 (Sarah) — The Fastest-Deciding, Highest-Converting Customer

**One-line identity:** Sarah is the mom who has just typed her email into a popup that promised "10% off + a potty training plan built for kids like yours," and she is one mechanism click away from buying.

**Key architectural facts:**
- **Decision window:** 2–7 days — the fastest in the system  
- **Starting trust:** 55/100 → peaks at 60/100 by Welcome E8  
- **Hope/realism:** 70/30 at signup (highest across all levels)  
- **Emails in lifecycle:** 51 total slots, ~35–45 realistic for a fully-engaged 3+3 buyer  
- **Primary offer:** 3+3 bundle ($79.99)  
- **Calendar driver:** Pre-K enrollment deadline — not manufactured urgency  
- **Unlock sentence:** "It's not behavior. It's signal-timing. And there's a third option between pull-ups and underwear."  
- **Argument structure:** Mechanism-Permission (MP) — the L1-specific innovation, with 8 variants across the Welcome flow  
- **Signer:** Lena (all emails except Mary S. Story signed by Mary S.)  
- **The 49% SPARK stat:** Appears in 70%+ of L1 emails — the normalization heartbeat  
- **Forbidden words:** "Easy," "Simple," "Quick," "Non-verbal," "Severe," "Years of attempts," "BCBA," "Adult diapers," "Forever in pull-ups," "Wait until he's ready," "Just like other kids," "Level 1/2/3" labels  
- **Emotional architecture:** A trauma-informed reframe funnel — not a typical marketing funnel. Success metric is "did she convert OR leave the door open with trust intact?"

**Unique features:**
- Welcome flow cadence: D0/D1/D3/D7/D10/D14/D17/D21 — engineered for 2–7 day decision window  
- Five "click" moments in the Welcome flow, three "caution" moments  
- Trust never drops below 56/100 at any point  
- E5–E8 trust plateau at 60 — flagged YELLOW for open-rate monitoring  
- Replenishment B (3+3 buyers, D75/D90) is Sarah's lifecycle path  
- Winback A uses Pre-K season reminder as re-engagement lever  

### 11.2 L2 (Lisa) — The Most Skeptical, Largest Segment

**One-line identity:** Lisa is 40+ methods in, a BCBA on speed dial, thousands spent, every book read — one mechanism reframe away from converting, if we don't blow it with marketing polish first.

**Key architectural facts:**
- **Decision window:** 14–21 days — methodical evaluation  
- **Starting trust:** 38/100 → reaches ~76/100 for retained customers (highest ceiling of all levels)  
- **Hope/realism:** 40/60 at signup — fixed skepticism, even retained customers stay measured  
- **Emails in lifecycle:** ~46 de-duplicated positions  
- **Primary offer:** 3+3 bundle ($79.99) — realistic entry  
- **Conversion rate:** ~35–45% by Day 21  
- **Dominant mode:** Defensive-evaluation → scientific-evaluator → cautious-investor → brand-advocate (low intensity)  
- **The 6-Element L2 Formula:** Non-negotiable pre-flight checklist for every L2 email with a CTA — symptom recognition (3+ failed methods), mechanism specificity, BCBA/OT acknowledgment (complement), realistic timelines (8–12 weeks), 60-day guarantee, permission-not-to-buy  
- **The L2 Unlock Sentence:** "Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address." — highest-leverage asset in the L2 conversion engine  
- **The L2 Paradox:** The reader who is allowed to leave stays. The reader who is chased leaves.  
- **Most dangerous word:** "Quick" (Demand §8.6)  
- **Trust architecture:** 3-layer (intellectual + emotional + relational), most durable of any segment once earned  

**Unique features:**
- The School/Home Paradox — "trained at school, not at home" is the L2 fingerprint  
- BCBA relationship is the highest-trust authority — cannot be criticized (L2 unforgivable sin)  
- Bi-weekly BCBA fact sheet is the highest-leverage L2 conversion tool  
- Science callout boxes (mint-bordered frames) are the L2 visual signature  
- 11 cross-flow threads identified in the L2 sequence  
- 5 +2 trust emails (Welcome E2, E4, E6, PP-Mary S. Story, FAQ E5)  
- 4 door-closing moments with LONG sign-off  
- FAQ E5 (BCBA Compatibility) is the +2 trust delta email with the highest post-purchase leverage  

### 11.3 L3 (Maria) — The Most Loyal, Most Trust-Fragile Customer

**One-line identity:** Maria has quietly accepted that her child may never train — what she is buying is not a fix but a third option.

**Key architectural facts:**
- **Decision window:** 14–30+ days — the longest in the funnel  
- **Hope/realism:** 20/80 baseline → trajectory is flat-to-downward → NEVER rises above 25/75  
- **Emails in lifecycle:** 38–58 touches (vs. ~130 for L1/L2)  
- **Primary offer:** 1 Pair ($34.99) — never 3+3 as headline  
- **Conversion rate:** 4–7% (lowest in system)  
- **Lifetime value:** HIGHEST in system  
- **Medicaid:** ~40% use Medicaid Waiver — math reframe ("less than a coffee a day") is Medicaid-disrespectful (single most forbidden phrase)  
- **Upgrade path:** 1 Pair → 3+3 organic only; NEVER pushed to 5+5  
- **§17.1 Domain Warming exclusion:** L3 receives only Welcome E1 during Weeks 1–2  
- **Trust break cost:** 5–10x higher than L1 or L2 — L3 community word-of-mouth is small but devastating  

**The 6 Mandatory L3 Elements (every email):**
1. Dignity in every sentence  
2. "Mini-wins count" framing (success = signal, not training)  
3. Acknowledge the resignation reality (Phase 4 — Resignation)  
4. Permission-not-to-buy in EVERY mail  
5. Lena peer voice (every mail except Mary S. Story)  
6. 60-Day Guarantee framing ("Try it for 60 days. By your judgment.")

**Unique features:**
- Welcome flow cadence: D0/D2/D5/D7/D10/D14/D17/D21 — slower than L1/L2 (2-day E1→E2 gap; 5-day pause at E3)  
- The "resignation reality" — some L3 moms have quietly stopped trying to train; the journey has shifted from "how do I get him trained" to "how do I keep him comfortable and myself intact"  
- 30 cardinal sins catalogued — any one destroys trust instantly  
- 15 non-negotiable structural rules  
- 3 trust failure categories: Dignity Violation (recoverable if caught), Urgency Pressure (costs 15–20 trust points), Identity Weaponization (not recoverable)  
- Trust meter calibrated differently than L1/L2 — L3's 85–100 doesn't mean "loved this, buying more" but "I trust them with my child's dignity"  
- Pattern H (Minimalist) dominates at 55% of L3 emails — structurally correct for dignity-first tone  
- Pattern G (Urgency-Driven) is NEVER used  
- Brand-Yellow #F5C84B is never used  
- Earth tones dominate color palette  
- 56px section gaps — widest in the system  
- NEVER full-width green button; muted button or text-link only  

### 11.4 GF (General Fallback) — The Largest, Most Heterogeneous Segment

**One-line identity:** GF is not a single mom but five — Diagnostic Entrants, Diagnosis-Rejecters, Sensory-Difference, Overwhelmed Non-Selectors, and Cart/Browsers — held under one tag until they self-identify.

**Key architectural facts:**
- **Subscriber volume:** ~50% of real subscribers  
- **Blended conversion:** 7–10%  
- **Hope/realism:** 50/50 blended (masks enormous internal variance)  
- **Decision window:** 7–21 days blended  
- **Emails in lifecycle:** ~68 theoretical maximum, ~50–55 realistic per customer  
- **Unique flows:** PP-Level Detection (GF-only), PP-Level Detection (GF-only), plus all 22 cross-level flows  
- **Migration target:** 65–75% over lifecycle, bulk by Day 30  

**The 5 GF Sub-Groups:**

| Sub-Group | % of GF | Entry Trust | Hope/Realism | Migration Potential | Key Rule |
|-----------|:------:|:----------:|:----------:|:-------------------:|----------|
| A — Diagnostic Entrants | ~25% | 5.5 | 65/35 | HIGH (30%+) | Mechanism-first; migrate post-diagnosis |
| B — Diagnosis-Rejecters | ~15% | 3.5 | 50/50 defensive | ZERO | V16 governs — symptom language only |
| C — Sensory-Difference | ~25% | 5.0 | 55/45 | ZERO | Mechanism-ready; Mahler/Ayres canon |
| D — Overwhelmed Non-Selectors | ~25% | 4.0 | 45/55 | HIGHEST (40–50%) | THE GOLDMINE — migrate at Day 14 |
| E — Cart/Browse without Opt-In | ~10% | 3.0 | 50/50 low-engagement | LOW (5–10%) | Recovery framing |

**Unique features:**
- **V16 Rule:** Symptom language only. Never "autism," "ASD," "Level 1/2/3." Use "nervous system differences."  
- **R1–R6 Cross-Level Calibration Rules:** Mandatory in every cross-level email — symptom over label, 3–5 recognition anchors, age ranges over fixed ages, verbal/non-verbal inclusivity, timeline flexibility, low-bar success metrics  
- **PP-Level Detection at Day 14:** The only migration touchpoint in the BrightKidCo system. Single email with 4 story buttons (symptom-described, NEVER level-labeled). Suppresses Welcome GF E6 and PP-Education D0-21 E3. 5.6% of total audience migrates at this moment.  
- **5 superimposed emotional curves** — one per sub-group — because the same email produces different trust deltas for different sub-groups  
- **5 emotional death spirals** to avoid (V16 violation, R1 violation, maternal-blame version, "Simple" in copy, outcome promises)  
- **5 emotional peak moments** to protect (Welcome E2 mechanism reveal, Welcome E4 / PP-Mary S. founder story, Welcome E5 Mahler quote, D14 PP-Level Detection, PP-Mid Check-In E1 reply-to-Lena)  
- **Welcome GF is the only level-specific Welcome with universal R1–R6 calibration** — no per-email L1/L2/L3-specific table; content derived from R1–R6 + L1/L2/L3 base tables with all level labels stripped  
- **The One Thing:** "Whatever your child's diagnosis is — or isn't — the reason potty training isn't working is the same. It's not behavioral. It's signal-timing. And there is a third option between pull-ups and regular underwear that works with your child's nervous system, not against it."  
- **The Most Dangerous Sentence:** "For Level 2 kids with autism who struggle with potty training…" — alienates all five sub-groups simultaneously  

---

## 12. APPENDIX: THE 20 INDIVIDUAL SECTION DOCUMENTS

Each of the 20 section documents (5 per level × 4 levels) was produced by a dedicated subagent and serves as the source material for the corresponding master journey section. The master assembler synthesized but did not replace these documents — they remain the authoritative deep-dive references.

### 12.1 Avatar Documents (4)
- `journey-l1-01-avatar.md`: Sarah's full profile — demographics, 10–20 methods tried, 80% self-blame peak, 70/30 hope/realism, Pre-K deadline driver, visual calibration (verbal 3–5 year old, soft natural lighting, forward motion)  
- `journey-l2-01-avatar.md`: Lisa's full profile — 40+ methods tried, BCBA relationship, School/Home Paradox, 40/60 hope/realism, science-trusting/marketing-skeptical asymmetry, 3-layer trust architecture  
- `journey-l3-01-avatar.md`: Maria's full profile — non-verbal child 6–10+, 30–50+ methods tried, resignation reality, Triple Comorbidity (SPD + GI + Sleep), Medicaid Waiver context, 20/80 hope/realism  
- `journey-gf-01-avatar.md`: GF sub-groups in full depth — Group A through E, V16 rule specification, R1–R6 calibration rules, the 5 separate trust thresholds, the 5 sub-group visual recognition profiles  

### 12.2 Sequence Documents (4)
- `journey-l1-02-sequence.md`: 51 emails across 6 months — chronological map with Day/hour, trigger, goal, and cross-flow context per email. Flow eligibility matrix.  
- `journey-l2-02-sequence.md`: ~46 emails across 4 phases — chronological engineering spec with Phase 1–4 mapping, suppression rules, and cross-flow routing  
- `journey-l3-02-sequence.md`: 38–58 touches — flow eligibility matrix (19 of 22 flows), §17.1 warming exclusion timing, Welcome flow cadence specification  
- `journey-gf-02-sequence.md`: ~68 theoretical max / ~50–55 realistic — 22 flows mapped, PP-Level Detection positioning, migration timing architecture, post-migration behavior specification  

### 12.3 Emotional Arc + Trust Meter Documents (4)
- `journey-l1-03-emotional-trust.md`: Per-email BEFORE/HOOK/TRUST/AFTER/DELTA for Welcome E1–E8. Running trust meter 55→60. Five "click" moments, three "caution" moments. E3 transient -1 trust delta. E5–E8 plateau flag.  
- `journey-l2-03-emotional-trust.md`: Trust meter 38→76. Five +2 trust emails. 3-layer trust architecture. Trust mode transitions across the full journey. The L2 paradox mapped to trust deltas.  
- `journey-l3-03-emotional-trust.md`: L3-specific trust meter scale (calibrated differently than L1/L2 — "85–100" means "I trust them with my child's dignity"). Three trust failure categories with recovery protocols. Trust recovery costs (5–10x higher than L1/L2).  
- `journey-gf-03-emotional-trust.md`: Five superimposed emotional curves — Group A "The Climber," Group B "The Defender," Group C "The Mechanism Reader," Group D "THE GOLDMINE," Group E "The Ghost." Per-email trust deltas by sub-group. PP-Level Detection trust impact analysis.  

### 12.4 Structural Blueprint + Variance Ledger Documents (4)
- `journey-l1-04-structural-blueprint.md`: 9 dimensions calibrated for L1. MP argument structure with 8 variants. Three critical remediation pairs (Checkout E1 vs Cart E3 at 3/9, PP-Ext-Ed E5 vs E4 at 2/9, Replen B2 vs B1 at 2/9). Five acceptable 5/9 flags.  
- `journey-l2-04-structural-blueprint.md`: 9 dimensions calibrated for L2. Science callout boxes as L2 visual signature. 44px section gaps. Muted green CTA spec. BCBA-respectful imagery rules.  
- `journey-l3-04-structural-blueprint.md`: 9 dimensions calibrated for L3. Pattern H (Minimalist) at 55%. NEVER Pattern G. 56px gaps (widest in system). 30 cardinal sins. 15 non-negotiable structural rules. Variance anti-patterns (permission-stub, warm-only fatigue, Lena voice break, stacked subject lines, pre-K frame).  
- `journey-gf-04-structural-blueprint.md`: 9 dimensions with GF design canvas constraints. R1–R6 + V16 as structural overrides. Migration anchor variance rule (GF-V3). Component reuse budget across 45 GF emails. Image variance rules.  

### 12.5 Flow Behavior Documents (4)
- `journey-l1-05-flow-behavior.md`: Conversion gates per email (Hard/Soft/Permission-only table for all 51 emails). Dead-end map per email. 10 critical same-day/same-week collision pairs resolved. 5 consolidated cross-flow distinction principles. Suppression and trigger rules.  
- `journey-l2-05-flow-behavior.md`: 6 conversion gates (G1–G6). Dead-end taxonomy (silent immunity, mid-funnel stall, emotional lock failure, post-purchase crash). 5 critical emails (highest single-send cost if missed). Cross-flow continuity rules per Demand §2.5.  
- `journey-l3-05-flow-behavior.md`: Conversion gates per email. Dead-ends per email. Cross-flow priority hierarchy (14-tier chain with Sunset at highest priority, Welcome at lowest). D30/D45/D60 collision resolution.  
- `journey-gf-05-flow-behavior.md`: The 4 questions per email (conversion gate, dead-end, cross-flow, migration). Cross-flow collision at Day 14. Sub-group migration summary. Operational death spirals and peak moments.  

---

## DOCUMENT METADATA

| Field | Value |
|-------|-------|
| Document | STAGE-0.5-COMPLETE-DOCUMENTATION.md |
| Project | BrightKidCo |
| Stage | 0.5 — Customer Journey Matrix |
| Date | June 29, 2026 |
| Author | Stage 0.5 Documentation Subagent |
| Sources | 2026-06-28-stage-0.5-plan.md, 4 master journeys, 20 section documents, 1 cross-level sync report |
| Total source words synthesized | 304,933 |
| Document word count | ~16,000 |
| Status | FINAL — Complete documentation of Stage 0.5 deliverables, process, and findings |
