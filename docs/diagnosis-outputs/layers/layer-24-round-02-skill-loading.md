# Layer 24 Round 02: Skill Loading — School/IEP Context

## Skills Loaded

### 1. brightkidco-auto-queue

**Status:** Loaded successfully from `/root/.hermes/profiles/ops2/skills/brightkidco-auto-queue`

**Relevant Extracts:**

- **Wave sequence for Layer 24:** Layer 24 (School/IEP) is part of Wave 4 in the diagnosis section (38 layers × 6 rounds = 228 tasks total). The wave pattern is 6+6+3 (three layers, last one partial).
- **Task body framework:** Every diagnosis task uses 7 mandatory sections: Goal, Inputs, Context, Mission, Execution Instructions, Output Structure, Success Criteria. No extras allowed.
- **Agent rotation:** Layer 24 rounds are distributed across ops agents (R1→ops, R2→ops2, R3→ops3, R4→ops4, R5→ops5, R6→ops6).
- **Output path pattern:** R1-R5 outputs go to `/root/projects/brightkidco/outputs/diagnosis/layer-XX-round-0X-XXXXX.md`. R6 synthesis goes to `/root/projects/brightkidco/outputs/diagnosis/layer-XX-NAME.md`.
- **Critical pitfall — verify outputs by files, not task status:** After DB corruption events, output files may still exist on disk even though kanban has no record. Always check actual file existence and content before skipping tasks.
- **No School/IEP-specific content** in this skill — it's an operational protocol, not a content reference.

### 2. email-marketing

**Status:** NOT available as a registered skill in ops2 profile. The directory exists at `/root/.hermes/skills/email-marketing` with 55 sub-skills across 4 bundles:
- `campaigns/` — 14 campaign types
- `flows/` — 12 automated flows
- `deliverability-technical/` — 13 deliverability + design skills
- `strategy-analytics/` — 13 strategy + copywriting skills
- 6 top-level skills (brand-voice-definition, client-credential-request, etc.)

**Relevant Sub-Skills Extracted:**

#### brand-voice-definition (from email-marketing/brand-voice-definition)
- **Voice dimensions framework:** Score brands on 6 axes (Formal↔Casual, Serious↔Playful, Technical↔Simple, Authoritative↔Friendly, Salesy↔Educational, Short↔Long-form). **Relevance to School/IEP:** Each avatar level likely needs different voice calibration — Level 1 (Pre-K deadline urgency) may need more Authoritative+Urgent, Level 2 (IEP accommodation) may need Friendly+Empathetic, Level 3 (special needs school) may need Educational+Patient.
- **Voice pillars pattern:** 3-5 pillars with Do/Don't examples. **Relevance:** School/IEP messaging needs explicit pillars defining what to say and NOT say per level.
- **Tone variations table:** How voice adapts per channel/touchpoint. **Relevance:** School/IEP urgency language must adapt per level — Pre-K deadline pressure for Level 1 is appropriate, but the same urgency language is inappropriate for Level 3 families dealing with special needs school placement.

#### segmentation-strategy-framework (from email-marketing/strategy-analytics)
- **Five-layer segmentation model:** Engagement, Value, Behavioral, Demographic, Purchase History. **Relevance to School/IEP:** BrightKidCo's 3 avatar levels (Level 1 mainstream/preschool, Level 2 IEP, Level 3 special needs school) are a demographic/behavioral segmentation. The framework's "demographic segments enable persona-specific targeting" directly applies.
- **Segment overlap rules:** Subscribers can be in multiple segments. **Relevance:** A parent may be in both "Level 2 IEP" and "BCBA loyalty" segments — messaging must account for overlaps.
- **Suppression logic:** Certain segments excluded from campaigns. **Relevance:** Level 3 Medicaid families may need different suppression rules (never send math-reframe emails about pull-up costs).

**No School/IEP-specific content found** in any email-marketing sub-skill. The skills are generic e-commerce frameworks. However, the brand-voice and segmentation frameworks provide structural patterns that can be adapted for level-specific School/IEP messaging.

### 3. plan-driven-orchestrator

**Status:** Loaded successfully from `/root/.hermes/profiles/ops2/skills/plan-driven-orchestrator`

**Relevant Extracts:**

- **Orchestrator architecture:** Reads plan file verbatim → creates kanban tasks → dispatches in waves (4-6 at a time) → waits for completion → advances to next phase → sends Telegram notifications at phase boundaries. **Relevance:** Layer 24 is part of this autonomous overnight execution pipeline.
- **Task body rule:** NEVER simplify plan text. Each task body gets the FULL text for that layer. The plan IS the task spec. **Relevance:** Layer 24's 6 rounds must each have complete, unsimplified task bodies.
- **Verify outputs by files, not progress.jsonl:** The progress file can lie (DB corruption, ghost workers). Always check if actual output file exists and has content. **Relevance:** Critical for Layer 24 — the DB just recovered from corruption.
- **Max 15 concurrent agents** with busy_timeout=10000. More than 15 concurrent writes corrupts the SQLite kanban DB.
- **Recovery after DB corruption:** Orchestrator detects corruption, nukes DB, rebuilds, reads progress.jsonl to know which tasks completed, checks output FILES exist, recreates only missing tasks. **Relevance:** This is exactly what happened to Layer 24 — DB corrupted, tasks were recreated.

### 4. diagnosis-report-format

**Status:** Loaded successfully from `/root/.hermes/profiles/ops2/skills/diagnosis-report-format`

**Relevant Extracts:**

- **Diagnosis template:** Objective → Background → Data Gathered → Analysis → Key Decision Needed. **Relevance:** Layer 24's R6 synthesis should follow this structure.
- **Rules for diagnosis:**
  1. Present the REAL problem, not the surface problem
  2. Ground every claim in data — cite sources
  3. If data is incomplete, say so. "I don't know" is valid intelligence.
  4. Recommend ONE approach, not a menu of options
  5. Flag risks explicitly
  6. The diagnosis file is a LIVING document — updated every turn
- **Consolidation Rule:** One file per active issue. Don't fragment. If multiple fragmented files exist, consolidate into one. **Relevance:** Layer 24's 6 rounds should eventually consolidate into one `layer-24-school-iep.md` file.
- **Hard Numbers Rule:** Never be soft on completion. "171 source files, 14 extracted = 8%" not "mostly complete." **Relevance:** Layer 24's gap analysis (R6) must use hard numbers.
- **Outsider Diagnosis pattern:** Full system survey covering all processes, configs, errors. **Relevance:** Layer 24 could use this pattern to survey ALL school/IEP references across the entire diagnosis corpus.
- **Telegram-Ready Formatting:** Don't use pipe tables in Telegram messages. Use bullet lists with emoji prefixes or code-block tables. **Relevance:** When delivering Layer 24 findings to Telegram.

## Cross-Reference Notes to Other Layers

Based on the skills loaded:

1. **Layer 3 (Desperate Exhaustion):** The diagnosis-report-format's "real problem, not surface problem" rule applies. School deadline pressure (Pre-K) is a surface trigger; the real problem for Level 1 parents is Desperate Exhaustion from the potty training failure cycle.

2. **Layer 4 (Avatar Levels):** The email-marketing segmentation framework's demographic segmentation directly maps to BrightKidCo's 3 avatar levels. Each level needs different voice calibration (from brand-voice-definition).

3. **Layer 23 (BCBA Loyalty):** The segmentation overlap rules suggest that parents in both "Level 2 IEP" and "BCBA loyalty" segments need messaging that acknowledges the BCBA's role in the IEP process.

4. **Diagnosis consolidation:** Per the diagnosis-report-format's consolidation rule, all Layer 24 rounds (R1-R6) should consolidate into ONE final file (`layer-24-school-iep.md`), not multiple fragmented files.

## Templates/Patterns Found

1. **Voice Dimensions Table** (from brand-voice-definition): 6-axis scoring system adaptable for level-specific School/IEP messaging calibration.
2. **Five-Layer Segmentation Framework** (from segmentation-strategy-framework): Engagement, Value, Behavioral, Demographic, Purchase History — applicable to BrightKidCo's avatar level segmentation.
3. **Diagnosis Template** (from diagnosis-report-format): Objective → Background → Data Gathered → Analysis → Key Decision Needed.
4. **Task Body 7-Section Template** (from brightkidco-auto-queue): Goal, Inputs, Context, Mission, Execution Instructions, Output Structure, Success Criteria.
5. **Orchestrator Wave Pattern** (from plan-driven-orchestrator): Read plan → create tasks → dispatch → wait → advance. Applicable to how Layer 24 fits into the broader 228-task pipeline.
