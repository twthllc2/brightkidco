# Layer 6 — Symptom Clusters Gap Analysis (Round 5)

**Generated:** 2026-05-25
**Source Files:**
- L6 R1: Client Files — 489 lines, 80+ parent quotes extracted (OK)
- L6 R2: Kommentare Mining — 1278 lines, 1009 tagged comments across 17 clusters (OK)
- L6 R3: External Research — **MISSING** (0 bytes, file not found)
- L6 R4: Cross-Reference — 480 lines, robust (reconstructed without R3)
- DOC1-MASTER-FOUNDATION, DOC2-LEVEL1, DOC3-LEVEL2, DOC4-LEVEL3

---

## 1. CRITICAL GAPS (High Severity)

These gaps fundamentally weaken the Layer 6 foundation and affect downstream layers.

### Gap 1: R3 — External Research Entirely Missing

| Field | Value |
|-------|-------|
| **Gap** | Layer 6 R3 (External Research) was never produced. The file exists as a 0-byte placeholder only. |
| **Severity** | **HIGH** |
| **Affected Layer** | Layer 6 (Symptom Clusters) — foundation for all cluster validity |
| **Impact** | The symptom clusters rely entirely on (a) source doc parent quotes and (b) Facebook Kommentare mining. Neither source is clinically validated. Without external research (academic papers on interoception in autism, peer-reviewed sensory processing data, clinical prevalence studies), the clusters have no external validity anchor. |
| **Downstream Effect** | R4 (Cross-Reference) explicitly notes "R3 was NOT FOUND — cross-reference built from existing layer syntheses." This means every email flow, conversion lever, and avatar profile that references Layer 6 clusters rests on an unvalidated foundation. |
| **Evidence** | R4 header: "Note: Layer 6 R3 (external research) was NOT FOUND — cross-reference built from Layer 2/4/5/10 data" |
| **Recommendation** | **Blocking.** Produce R3 before using any L6 cluster in downstream content. Minimum scope: (1) Interoception in autism — peer-reviewed studies on body signal awareness prevalence, (2) Sensory Processing Disorder comorbidity rates with autism (confirm the ~80% figure), (3) GI-autism connection prevalence (confirm L2 50% / L3 60-70%), (4) Potty training regression in ASD populations, (5) AAC effectiveness for interoceptive communication. |
| **Dependency** | Blocking R6 (Layer 6 synthesis), all Layer 7-10 tasks |

---

### Gap 2: Level 3 Under-Representation in Kommentare Data

| Field | Value |
|-------|-------|
| **Gap** | Level 3 comments account for only 70 of 1009 tagged comments (6.9%), yet the estimated audience share is ~25%. Nearly 4x under-sampled. |
| **Severity** | **HIGH** |
| **Affected Layer** | Layer 6 — Level 3 clusters specifically |
| **Impact** | Level 3 has 6 symptom clusters but only 7-13 matched comments per cluster. The thin corpus means: (a) parent language formulations may be incomplete, (b) rare-but-important symptom manifestations may be missed, (c) the emotional weight of L3 clusters (Size Progression Fear, Physical Resistance) is known from source docs but cannot be cross-validated against real parent comments. |
| **Evidence** | R2 frequency table: L3-A:13, L3-B:11, L3-C:7, L3-D:23, L3-E:7, L3-F:9 |
| **Root Cause** | The 8 Kommentare files appear to be general parenting/potty-training Facebook groups, not autism Level 3-specific groups. Level 3 parents are less active in general parenting forums because their daily care load is higher. **A separate mining of Level 3-specific communities (e.g., autism-specific Facebook groups, r/SpicyAutism, special needs parenting forums) would likely yield richer data.** |
| **Recommendation** | **High priority.** Re-mine from Level 3-specific sources: r/SpicyAutism, autism parenting groups with a higher proportion of high-support-needs parents, and special needs nursing forums. Expect 200+ L3 comments minimum. |
| **Dependency** | All Level 3 cluster-specific email flows |

---

### Gap 3: L1-E "Gets It But Doesn't Get It" — Only 1 Match in 1009 Comments

| Field | Value |
|-------|-------|
| **Gap** | Level 1 Cluster E (described as "THE Level 1 marker sentence" in R1) has only 1 tagged match in the entire Kommentare corpus. |
| **Severity** | **HIGH** |
| **Affected Layer** | Layer 6 — Level 1 cluster E |
| **Impact** | R1 asserts this cluster has "~95% recognition" and calls it "THE Level 1 marker." But the regex found exactly 1 match ("bright kid" — a marginal hit from Kommentare-6). This means either: (a) the regex patterns were too narrow, missing variations like "he's so smart but..." or "intellectually he gets it," or (b) this exact language appears in the source docs (which were compiled from clinical interviews and expert language) but is NOT how real parents describe the situation in Facebook comments. If (b) is true, the cluster's prominence may be overstated. |
| **Evidence** | R2 L1-E section: "Signal count: 1" — the only match is "bright kid" which is a keyword, not the cluster's defining sentence |
| **Recommendation** | **High priority — needs resolution before using in email copy.** Broaden regex patterns to include: "he's so smart but", "intellectually understands", "knows what to do but can't", "understands the concept", "can explain but can't do". Re-scan all 8 Kommentare files with wider patterns. If still <10 matches, this cluster may need redefinition or de-emphasis. |
| **Dependency** | Welcome E1 (recommended combination: Cluster E + Cluster A) — if Cluster E is weak, the primary Level 1 welcome flow is built on a false premise |

---

### Gap 4: L2-C "Delayed Verbal Signals" — Only 2 Matches in 1009 Comments

| Field | Value |
|-------|-------|
| **Gap** | Level 2 Cluster C (Delayed Verbal Signals) has only 2 tagged matches (0.2% of corpus). |
| **Severity** | **HIGH** |
| **Affected Layer** | Layer 6 — Level 2 cluster C |
| **Impact** | R1 describes this as affecting ~70% of Level 2 parents, with recognition "High." But the real comment data shows almost no parent language matching the patterns. The matched patterns ("says 'wet' after", "scripted speech", "echolalia", "PECS") returned only 2 hits — and both are PECS-related, which is about AAC tools, not delayed verbal signals. The core cluster phenomenon (verbal child who can't communicate interoceptive needs in real time) may be described very differently by parents — perhaps as "he doesn't tell me," "she won't say she needs to go," etc. — which were categorized under other clusters. |
| **Evidence** | R2 L2-C section: 2 matches total, both PECS references. The search pattern may have been too clinically specific. |
| **Recommendation** | **High priority.** Check if "doesn't tell me" / "won't say" / "can't tell me" patterns were assigned to other clusters (possible cross-contamination with L3-D Communication Lack). Reclassify or broaden L2-C patterns to capture the actual parent language. |
| **Dependency** | FAQ E1 (L2 Cluster A + Cluster C) — FAQ email relies on this cluster |

---

## 2. MEDIUM SEVERITY GAPS

Gaps that should be addressed but are not blocking immediate downstream work.

### Gap 5: L2-A "Sensory Defensiveness" Unclear Boundary with L1-D/L3-B

| Field | Value |
|-------|-------|
| **Gap** | Level 2 Cluster A (Sensory Defensiveness) has 13 matches (1.3%) — most are "won't sit on potty" which overlaps heavily with L1-D "won't sit" patterns. |
| **Severity** | **MEDIUM** |
| **Affected Layer** | Layer 6 — Cross-level boundary clarity |
| **Impact** | The same parent quote "won't sit on the potty" can be tagged as L1-D (Potty Interest Without Action), L2-A (Sensory Defensiveness), or L3-B (Sensory Overload) depending on interpretation. R2's 13 matches for L2-A may undercount because the pattern is non-specific. The sensory-specific language (flushing sounds, lighting, cold seat) appeared rarely (e.g., Kommentare-2:4497 "flushing sounds", Kommentare-3:7118 "bathroom light"). |
| **Evidence** | R2 L2-A matches: most are "won't sit on potty" — the same string found in L1-D matches. Only 2-3 mention sensory specifics. |
| **Recommendation** | Define explicit severity thresholds across L1-A/L2-A/L3-B sensory spectrum: Level 1 = mild preference, Level 2 = avoidance with distress, Level 3 = meltdown/inability to enter. Ensure cluster assignment uses these thresholds, not just patterns. |
| **Dependency** | Level-based segmentation in Klaviyo — wrong cluster assignment = wrong email content |

---

### Gap 6: Level Cluster Boundaries — L1-D vs L1-E Too Similar

| Field | Value |
|-------|-------|
| **Gap** | Level 1 clusters D (Potty Interest Without Action) and E ("Gets It But Doesn't Get It") describe the same phenomenon from different angles. |
| **Severity** | **MEDIUM** |
| **Affected Layer** | Layer 6 — Level 1 cluster structure |
| **Impact** | Cluster D: "Loves potty but won't go" — interest without execution. Cluster E: "Gets it but doesn't get it" — intellectual understanding without execution. Both boil down to: the child has cognitive/intentional engagement with potty training but cannot execute the physical act. The distinction between "interest" (D) and "intellectual understanding" (E) is subtle and may not matter for email strategy — both trigger the same conversion lever (Lever 1: reframe as signal gap). The same parent could easily be describing both clusters simultaneously. |
| **Evidence** | R1 descriptions: L1-D "Motivation and interest are there. What's missing: the internal signal." L1-E "Intellectual understanding but can't connect to action." These are functionally identical from a product standpoint. |
| **Recommendation** | Consider merging L1-D and L1-E into a single cluster "Cognitive-Execution Gap" before building email flows. The separate clusters create unnecessary segmentation complexity without different conversion strategies. |
| **Dependency** | Welcome E1, Cart Abandon E1 (uses both clusters) |

---

### Gap 7: L2-B vs L3-C Withholding Severity Threshold Undefined

| Field | Value |
|-------|-------|
| **Gap** | Withholding clusters at L2-B and L3-C lack a clear severity threshold. |
| **Severity** | **MEDIUM** |
| **Affected Layer** | Layer 6 — Level 2/3 boundary |
| **Impact** | Both clusters describe the same behavior (holding bowel movements, constipation, Miralax use) but L3-C emphasizes "hospitalized for impaction" and "GI specialist." The implication is that L3 withholding is more severe, but what distinguishes a L2 user from a L3 user with the same symptom? If a L2 child also has Miralax and GI specialists (as some Kommentare quotes suggest), the cluster assignment becomes ambiguous. This matters because L3 users should NOT receive Lever 2 messaging ("pull-ups make it worse") while L2 users can. |
| **Evidence** | R2 shows Miralax mentions spread across both L2-B (234 matches) and L3-C (7 matches). Many L2-B comments mention daily Miralax and "holding for hours" — which could be reclassified as L3-C severity. |
| **Recommendation** | Define a quantitative threshold: (1) hospitalization/impaction = L3-C, (2) daily Miralax with GI follow-up = borderline, (3) withholding without medical intervention = L2-B. Reclassify ambiguous entries. |
| **Dependency** | Lever 2 (pull-ups) messaging safety — wrong assignment could send inappropriate content to medically fragile parents |

---

## 3. CONTRADICTION LOG

### Contradiction 1: Audience Share vs. Kommentare Distribution

| Finding A (Source Docs) | Finding B (Kommentare Mining) | Resolution Needed |
|--------------------------|-------------------------------|-------------------|
| Audience share: ~35% L1, ~40% L2, ~25% L3 | Kommentare distribution: 17.2% L1, 75.8% L2, 6.9% L3 | Level 2 is massively overrepresented in Facebook comments (75.8% vs 40% expected). This could mean: (1) Level 2 parents are the most active online potty-training community members, (2) the mining regex was biased toward Level 2 patterns, (3) audience share estimates from source docs are wrong. **Resolution:** Review the regex patterns used for each level to check for bias. Also, source docs' audience share may be based on clinical diagnosis data, not online community behavior — both could be valid for different purposes. |

### Contradiction 2: L1-E Importance — Clinical vs. Community Language

| Finding A (R1 — Source Docs) | Finding B (R2 — Kommentare) | Resolution Needed |
|-------------------------------|------------------------------|-------------------|
| "Gets It But Doesn't Get It" is "THE Level 1 marker sentence" — ~95% recognition | Only 1 match in 1009 Kommentare comments | The exact phrase may be from clinical/expert interviews, not from real parent language on Facebook. Facebook parents may describe the same phenomenon differently ("he knows how" / "he just won't"). **Resolution:** R3 (external research) could validate whether this is a known clinical descriptor. If real parents don't use this language, email copy should use their actual formulations. |

### Contradiction 3: Withholding as "Sensory Only" vs. "Also Behavioral"

| Finding A (R1/R4) | Finding B (Kommentare) | Resolution Needed |
|--------------------|------------------------|-------------------|
| "Withholding is not behavior — it's fear/sensory trigger." Product positioning insists it's purely neurological. | Many parent comments frame withholding as habitual or intentional: "he just won't go" / "he chooses to hold it" / "he wants the pull-up." | Parents often describe withholding in behavioral language, not sensory language. If the product messaging insists on purely sensory framing, it may contradict how parents actually understand their child's behavior. **Resolution:** Research whether withholding in autism always has a sensory root or whether habit/choice plays a role. Acknowledging both dimensions may build more trust than a purely sensory reframe. |

### Contradiction 4: Level 2 "Sensory Defensiveness" Recognition vs. Evidence

| Finding A (R1) | Finding B (R2) | Resolution Needed |
|----------------|-----------------|-------------------|
| "~80% of Level 2 parents recognize themselves" in Sensory Defensiveness cluster | Only 13 matches (1.3% of total) — most are generic "won't sit" patterns, not sensory-specific language | If 80% of Level 2 parents experience this, their comments should reflect sensory-specific language. The 13 match count suggests either: (1) the regex wasn't broad enough, (2) the described sensory triggers (flushing sound, cold seat) match source doc descriptions but don't appear in Facebook comments, or (3) recognition in a survey/poll doesn't equal spontaneous discussion in comments. **Resolution:** Check if sensory-defensiveness language was miscategorized to other clusters. Also, survey-based recognition data may overestimate vs. spontaneous mention data. |

---

## 4. OVERLAP MAP — Symptoms Appearing in Multiple Levels

| Symptom / Pattern | Appears In Level(s) | Notes |
|--------------------|---------------------|-------|
| "Won't sit on potty / toilet" | L1-D, L2-A, L3-B | Most overlapping pattern in the corpus. Same parent string tagged differently depending on assumed level. Needs disambiguation criteria. |
| Withholding / Miralax / constipation | L2-B, L3-C | Severity split. Many L2-B comments (234) contain Miralax and holding, blurring with L3-C (7). |
| "Doesn't care when wet" | L3-A, L1-A | L3-A uses this as sign of complete signal absence. But many L1 comments describe the same behavior in younger/verbal kids. The difference is chronicity/duration, not behavior. |
| "Says no / refuses" | L1-C, L2-A, L2-D | Verbal refusal overlaps with sensory avoidance and demand avoidance. A "no" from a child could be refusal (L1-C), sensory overload (L2-A), or prompt-dependency pushback (L2-D). |
| Communication difficulty | L2-C, L3-D | Both describe inability to communicate body needs. L2-C = has words but can't connect to body; L3-D = doesn't have the words. On a spectrum, these merge. |
| Scheduled / prompted sits | L2-D, L1-B | Prompt-dependency is the primary L2-D signal, but L1 parents also describe timed schedules and inconsistent results. Key distinction: L2-D = years of compliance training; L1-B = general inconsistency. |
| Regression after change | L2-E (primary), L1-B (secondary) | Regression is L2-E's definition, but L1 parents also describe "good days and bad days" which is regression-like. |
| Public bathroom avoidance | L2-A, L2-F, L3-B | L2-A = sensory aversion to public toilets; L2-F = location-specific training; L3-B = can't enter bathrooms. Three different reasons for the same observed behavior. |

---

## 5. LOW SEVERITY GAPS

### Gap 8: Missing Nighttime/Nocturnal Enuresis Cluster

| Field | Value |
|-------|-------|
| **Gap** | None of the 17 symptom clusters specifically address nighttime wetting as a distinct cluster. |
| **Severity** | **LOW** |
| **Recommendation** | Nighttime bladder control uses different neurological pathways (sleep-regulatory hormones, deep sleep arousal threshold). Consider adding a cross-level cluster if Kommentare data shows specific nighttime patterns (dry nights, "soaking through diaper," morning dryness). Current data doesn't support a separate cluster yet. |

### Gap 9: No Layer 3 (Market/Competition) Cross-Reference

| Field | Value |
|-------|-------|
| **Gap** | R4 cross-references Layers 2, 4, 5, and 10 but not Layer 3 (Market/Competition). |
| **Severity** | **LOW** |
| **Recommendation** | Future cross-reference work should map symptom clusters against competitor positioning. Which clusters do competitors already address? Where is the competitive white space? Layer 3 integration would strengthen the conversion lever map. |

### Gap 10: General Fallback Profile Has No Symptom Clusters

| Field | Value |
|-------|-------|
| **Gap** | ~50% of pop-up signups choose "Still figuring out" → General Fallback profile (per DOC1). This segment has zero symptom cluster mappings in Layer 6. |
| **Severity** | **LOW** (General Fallback is intentionally a catch-all) |
| **Recommendation** | Consider creating a reduced set of General Fallback symptom clusters (3-4 cross-level clusters that cover the most likely scenarios) so that unsegmented users still receive relevant body-signal language in their emails. |

---

## 6. PRIORITY-RANKED RECOMMENDATIONS

### Must Do (Blocking)

| # | Action | Reason | Assigned |
|---|--------|--------|----------|
| 1 | **Produce Layer 6 R3 — External Research** — Academic literature on interoception in autism, SPD comorbidity rates, GI-autism connection prevalence | The entire Layer 6 foundation lacks external validity. Every downstream layer (L7-L10) depends on this. | L6 R3 |
| 2 | **Broaden L1-E regex patterns and re-scan** — "he's so smart but," "intellectually understands," "knows what to do but can't" | THE Level 1 marker has only 1 match — cluster may be invalid or patterns too narrow. Must resolve before using in Welcome E1. | L6 R2 revision |
| 3 | **Broaden L2-C regex patterns and re-scan** — "doesn't tell me," "won't say," "can't let me know" patterns that may have been miscategorized | Only 2 matches for a cluster described as affecting ~70% of L2 parents. | L6 R2 revision |

### Should Do (Recommended)

| # | Action | Reason |
|---|--------|--------|
| 4 | **Re-mine Level 3 from L3-specific sources** (r/SpicyAutism, special needs parenting groups) | Level 3 is 4x under-sampled in current corpus. L3 clusters need richer evidence. |
| 5 | **Define explicit cross-level thresholds** for overlapping clusters (L1-D vs L2-A vs L3-B sensory spectrum, L2-B vs L3-C withholding severity) | Prevents cluster assignment ambiguity and wrong email content. |
| 6 | **Resolve contradiction: audience share vs. Kommentare distribution** | Either regex bias or audience share error. Either way, the mismatch needs explanation. |

### Nice to Have

| # | Action | Reason |
|---|--------|--------|
| 7 | Consider merging L1-D and L1-E into a single cognitive-execution gap cluster | They trigger identical conversion strategies. Separate clusters add complexity without differentiation. |
| 8 | Add Layer 3 (Market/Competition) to cross-reference | Identify competitive white space per symptom cluster. |
| 9 | Create General Fallback symptom clusters (3-4 cross-level) | Cover the ~50% unsegmented audience with body-signal language. |

---

## 7. SPECTRUM DIAGRAM — How Clusters Flow Into Each Other

```
LEVEL 1 (Mild)
  L1-A Timing Problems ──────────────────┐
  L1-B Inconsistency ────┐               │
  L1-C Verbal Refusal ───┤               ├── L1-E "Gets It" (merge candidate with D)
  L1-D Interest w/o Action ──────────────┘
                                         │
                    ┌────────────────────┘
                    ▼
LEVEL 2 (Moderate)
  L2-A Sensory Defensiveness ────────────┐
  L2-B Withholding + GI ─────────────────┤
  L2-C Delayed Verbal ───────────────────┤── Prompt Dependency Cluster
  L2-D Schedule Dependency ──────────────┤      (highest conversion)
  L2-E Regression Cycles ────────────────┤
  L2-F Location-Specific ────────────────┘
                                         │
                    ┌────────────────────┘
                    ▼
LEVEL 3 (Severe)
  L3-A Complete Signal Absence ──────────┐
  L3-B Sensory Overload Bathroom ────────┤
  L3-C Withholding + Severe GI ──────────┤── Medical/Emergency Cluster
  L3-D Communication Lack ───────────────┤      (NOT a training issue)
  L3-E Physical Resistance ──────────────┤
  L3-F Size Progression Fear ────────────┘
```

---

## 8. DATA QUALITY SUMMARY

| Metric | Value | Assessment |
|--------|-------|------------|
| R1 (Client Files) | 489 lines, 80+ quotes | **Strong** — Well-structured, verbatim parent language |
| R2 (Kommentare) | 1009 tags across 17/17 clusters | **Moderate** — Good volume but sampling bias across levels |
| R3 (External Research) | **MISSING** | **CRITICAL** — No external validity anchor |
| R4 (Cross-Reference) | 480 lines, 5-layer mapping | **Strong** — Well-structured despite missing R3 |
| DOC1-4 (Source) | 4 documents, ~150KB+ total | **Strong** — Comprehensive foundation |
| Level parity in R2 | L1: 174, L2: 765, L3: 70 | **Poor** — L2 10x L3, L2 4x L1 |
| Overlapping clusters | 8+ symptom patterns span multiple levels | **Needs work** — Thresholds undefined |

---

*End of Layer 6 R5 — Symptom Clusters Gap Analysis*
*Total gaps identified: 10 (4 high severity, 3 medium severity, 3 low severity)*
*Contradictions documented: 4*
*Overlapping symptoms mapped: 8*
*Priority recommendations: 3 blocking, 3 recommended, 3 nice-to-have*
