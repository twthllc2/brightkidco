# BrightKidCo — Strategy: 8 Decision Documents

> **Phase: Strategy (Section 6 of Overnight Plan — Rewritten with Synthesis Docs as Source)**
> Generated: May 28, 2026 | Sources: 32 synthesis docs + diagnosis layers + ingestion + research
> Output dirs: `/root/projects/brightkidco/outputs/strategy/` and `outputs/strategy/giuliano/`

---

## Purpose

The 32 synthesis docs give us the knowledge base — the facts, the proof points, the language, the competitor landscape. Strategy is where that knowledge gets **converted into decisions**. What flows do we build? How many emails? What's the messaging? How does segmentation work? What does the pop-up look like?

These are the documents that Ayoub reviews. He reads them and says "yes" or "adjust." Once approved, they become the blueprint for prototypes.

---

## Task Structure

**Each document has exactly 3 phases. Each phase is a separate task.**
- **Phase 1:** Read ALL relevant source files (32 synthesis docs, diagnosis layers, ingestion notes, research findings). Create strategy framework and decision matrix.
- **Phase 2:** Write the full strategy document. Every decision MUST cite its source.
- **Phase 3:** Review cross-check against all sources, refine, verify every decision is justified.

**Total: 8 documents × 3 phases = 24 tasks**
**Output: 8 strategy documents**

---

## UNIVERSAL RULES — APPLY TO ALL 8 AGENTS

These rules are MANDATORY. Failure to follow any rule means the output is rejected.

### Rule 1: Read Paths Exactly
Every file path in this document is absolute. Use it exactly as written. Do not guess paths.

### Rule 2: Every Decision Must Cite a Source
Every decision in your output MUST reference which source file it came from. Use inline citations like `(Source: 01-customer-avatar.md)` or `(Source: layer-16-flow-architecture.md)`. If you cannot find a source for a claim — DO NOT INCLUDE IT. No "I think." No "best practice says." Every decision justified.

### Rule 3: Read ALL Synthesis Docs Before Writing
Before writing any strategy document, read ALL 32 synthesis docs from `/root/projects/brightkidco/outputs/synthesis/`. Then read the specific diagnosis layers, ingestion notes, and research files listed for your document. Strategy written from memory or general knowledge will be rejected.

### Rule 4: Read the MASTER Compendiums + Demands First
Every agent MUST read all three MASTER compendiums and GIULIANO-DEMANDS.md before any other source files. These are listed as MANDATORY in every document's Phase 1. Do not skip them.

### Rule 5: Diagrams Are Mandatory
Each document has a minimum diagram count (listed in its header). Diagrams must be ASCII/Unicode box-drawing inside codeblocks. Each diagram must communicate something meaningful — a flow, a comparison, a decision tree, a process. Decorative diagrams (just a title with a box around it) do not count.

### Rule 6: Page Minimums
Each document has a minimum page count (listed in its header). This is estimated printed pages. If your document is under the minimum after writing — expand it. Add more analysis, more edge cases, more justification, more cross-references. Do not pad with fluff.

### Rule 7: Read Lists in Order
Your source files are listed in priority order. Read them in that order. The most important files are listed first. If you cannot read all files (token limit), read the top ones first, then the bottom ones. Never skip a file at the top of the list.

### Rule 8: Output Exactly One File
Your job is to produce exactly one file at the path specified. Nothing else. No extra files. No README. No notes. One file.

---

## SOURCE DIRECTORIES REFERENCE

```
Source Type              │ Directory
─────────────────────────┼──────────────────────────────────────────
Synthesis docs (32)      │ /root/projects/brightkidco/outputs/synthesis/
Diagnosis layers         │ /root/projects/brightkidco/docs/diagnosis-outputs/layers/
Diagnosis master         │ /root/projects/brightkidco/docs/diagnosis-outputs/MASTER-DIAGNOSIS-COMPENDIUM.md
Ingestion files          │ /root/projects/brightkidco/docs/ingestion/files/
Ingestion master         │ /root/projects/brightkidco/docs/ingestion/MASTER-INGESTION-COMPENDIUM.md
Research files           │ /root/projects/brightkidco/docs/research-notes/files/
Research master          │ /root/projects/brightkidco/docs/research-notes/MASTER-RESEARCH-COMPENDIUM.md
Client demands           │ /root/projects/brightkidco/demands/GIULIANO-DEMANDS.md
```

---

## THE 8 STRATEGY DOCUMENTS

---

### Strategy 01: Full Email Strategy

**Output file:** `/root/projects/brightkidco/outputs/strategy/1-full-email-strategy.md`
**Minimum size:** 20-30 pages | **Minimum diagrams:** 10
**Dependencies:** Requires ALL 32 synthesis docs to be read first
**Priority:** HIGH — this defines the entire email program

#### Goal
The master plan for the entire email program. The CEO-level view. What we're doing, why, and how it all connects. Without a master plan, you get random emails. With one, you get a system where every email serves a purpose in the customer journey.

#### Phase 1 — Read These Source Files

**MANDATORY — read all MASTER compendiums + demands + ALL 32 syntheis docs:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/MASTER-DIAGNOSIS-COMPENDIUM.md
/root/projects/brightkidco/docs/ingestion/MASTER-INGESTION-COMPENDIUM.md
/root/projects/brightkidco/docs/research-notes/MASTER-RESEARCH-COMPENDIUM.md
/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md
/root/projects/brightkidco/outputs/synthesis/01-customer-avatar.md
/root/projects/brightkidco/outputs/synthesis/02-competitor-landscape.md
/root/projects/brightkidco/outputs/synthesis/03-science-library.md
/root/projects/brightkidco/outputs/synthesis/04-mechanism-positioning.md
/root/projects/brightkidco/outputs/synthesis/05-customer-language-bank.md
/root/projects/brightkidco/outputs/synthesis/06-offer-research.md
/root/projects/brightkidco/outputs/synthesis/07-email-sequence-framework.md
/root/projects/brightkidco/outputs/synthesis/08-email-copy-brief.md
/root/projects/brightkidco/outputs/synthesis/09-deliverability-plan.md
/root/projects/brightkidco/outputs/synthesis/10-traffic-channel-map.md
/root/projects/brightkidco/outputs/synthesis/11-brand-voice-reference.md
/root/projects/brightkidco/outputs/synthesis/12-klaviyo-implementation-guide.md
/root/projects/brightkidco/outputs/synthesis/13-testimonial-sourcing.md
/root/projects/brightkidco/outputs/synthesis/14-objection-handling.md
/root/projects/brightkidco/outputs/synthesis/15-level-messaging-matrix.md
/root/projects/brightkidco/outputs/synthesis/16-executive-master-plan.md
/root/projects/brightkidco/outputs/synthesis/17-product-improvement-roadmap.md
/root/projects/brightkidco/outputs/synthesis/18-bcba-professional-strategy.md
/root/projects/brightkidco/outputs/synthesis/19-older-child-dignity-playbook.md
/root/projects/brightkidco/outputs/synthesis/20-partner-conflict-navigator.md
/root/projects/brightkidco/outputs/synthesis/21-customer-journey-map.md
/root/projects/brightkidco/outputs/synthesis/22-brand-content-marketing.md
/root/projects/brightkidco/outputs/synthesis/23-ad-creative-playbook.md
/root/projects/brightkidco/outputs/synthesis/24-landing-page-cro-strategy.md
/root/projects/brightkidco/outputs/synthesis/25-paid-media-strategy.md
/root/projects/brightkidco/outputs/synthesis/26-pricing-offer-architecture.md
/root/projects/brightkidco/outputs/synthesis/27-brand-identity-guidelines.md
/root/projects/brightkidco/outputs/synthesis/28-influencer-ugc-engine.md
/root/projects/brightkidco/outputs/synthesis/29-content-funnel-strategy.md
/root/projects/brightkidco/outputs/synthesis/30-customer-support-playbook.md
/root/projects/brightkidco/outputs/synthesis/31-competitive-battle-cards.md
/root/projects/brightkidco/outputs/synthesis/32-retention-loyalty-program.md
```

**DIAGNOSIS LAYERS:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-16-flow-architecture.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-16-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-16-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-16-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-16-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-16-round-06-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-17-tonality-calibration.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-17-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-17-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-17-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-17-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-17-round-06-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-18-cross-level-calibration.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-18-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-18-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-18-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-18-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-18-round-06-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-19-migration-strategy.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-19-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-19-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-19-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-19-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-19-round-06-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-14-frequency-wording.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-14-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-14-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-14-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-14-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-14-round-06-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-15-offers.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-15-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-15-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-15-round-03-external-research.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-15-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-15-round-06-gap-analysis.md
```

**INGESTION FILES:**
```
/root/projects/brightkidco/docs/ingestion/files/existing-email-notes.md
/root/projects/brightkidco/docs/ingestion/files/doc-system-notes.md
/root/projects/brightkidco/docs/ingestion/files/context-notes.md
/root/projects/brightkidco/docs/ingestion/files/skill-frameworks-notes.md
/root/projects/brightkidco/docs/ingestion/files/skills-strategy-notes.md
```

**RESEARCH FILES:**
```
/root/projects/brightkidco/docs/research-notes/files/email-benchmarks.md
/root/projects/brightkidco/docs/research-notes/files/competitor-email-strategies.md
```

#### Phase 2 — Write the Document

Your output MUST contain ALL of the following. Every decision cites its source.

1. **Complete Flow Map** — Diagram showing every flow (Welcome, Cart, Checkout, Browse, Post-Purchase New, Post-Purchase Repeat, Cross-Sell, Replenishment, Winback, Sunset, VIP, Site Abandonment), how they connect, where subscribers enter/exit, how they migrate. Minimum 1 large diagram covering all flows.

2. **Per-Flow Specification** — For each flow: purpose, trigger (Klaviyo condition), exit conditions, email count, purpose per email position, timing between emails, segmentation rules (which avatars get which version), tonality calibration (hope/realism ratio), offer rules, and migration path (where subscriber goes after flow completes).

3. **Flow-by-Avatar-Level Matrix** — Table showing which flows apply to which avatar level. Which flows are level-segmented (different content per level) vs cross-level (same content for all).

4. **Migration Paths** — What happens after Welcome completes. After first purchase. After 30 days of no purchase. After 90 days of no engagement. Flow charts for each path.

5. **Edge Case Handling** — Unknown avatar subscribers (general fallback path), multi-child families (which level to route to), non-parent subscribers (professionals, BCBAs), international variants (UK, AU, CA subscribers).

6. **Implementation Priority** — Which flows to build first, in what order, and why. Welcome is first (entry point). Post-purchase is second (revenue driver). Cart/Checkout recovery is third (revenue recovery). The rest follow.

7. **Email Volume & Frequency Plan** — Total emails per subscriber per week at each stage. Maximum emails per week. Cadence by flow.

#### Phase 3 — Validation

- [ ] All 32 synthesis docs read before writing
- [ ] Complete flow map diagram (all 12+ flows)
- [ ] Per-flow specification for EVERY flow
- [ ] Flow-by-avatar-level matrix
- [ ] Migration paths documented
- [ ] Edge cases handled (unknown, multi-child, non-parent, international)
- [ ] Implementation priority defined
- [ ] Every decision cites its source
- [ ] File size: 20-30 pages minimum
- [ ] Diagrams: minimum 10

---

### Strategy 02: Full Email Copy Strategy

**Output file:** `/root/projects/brightkidco/outputs/strategy/2-full-email-copy-strategy.md`
**Minimum size:** 40-60 pages | **Minimum diagrams:** 12
**Dependencies:** Requires Strategy 01 to be complete first
**Priority:** HIGH

#### Goal
Every flow, every email, the messaging, the approach, and WHY each decision is justified. The architect view — hand this to someone and they can build it. This is the actual build plan.

#### Phase 1 — Read These Source Files

**MANDATORY — read ALL MASTER compendiums + demands + ALL 32 synthesis docs first:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/MASTER-DIAGNOSIS-COMPENDIUM.md
/root/projects/brightkidco/docs/ingestion/MASTER-INGESTION-COMPENDIUM.md
/root/projects/brightkidco/docs/research-notes/MASTER-RESEARCH-COMPENDIUM.md
/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md
```
Then read these specific synthesis docs:
```
/root/projects/brightkidco/outputs/synthesis/01-customer-avatar.md
/root/projects/brightkidco/outputs/synthesis/03-science-library.md
/root/projects/brightkidco/outputs/synthesis/04-mechanism-positioning.md
/root/projects/brightkidco/outputs/synthesis/05-customer-language-bank.md
/root/projects/brightkidco/outputs/synthesis/07-email-sequence-framework.md
/root/projects/brightkidco/outputs/synthesis/08-email-copy-brief.md
/root/projects/brightkidco/outputs/synthesis/11-brand-voice-reference.md
/root/projects/brightkidco/outputs/synthesis/14-objection-handling.md
/root/projects/brightkidco/outputs/synthesis/15-level-messaging-matrix.md
/root/projects/brightkidco/outputs/synthesis/21-customer-journey-map.md
/root/projects/brightkidco/outputs/synthesis/30-customer-support-playbook.md
```

**DIAGNOSIS LAYERS:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-09-voice-lena.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-09-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-09-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-09-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-09-round-04-kommentare-mining.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-09-round-05-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-10-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-10-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-10-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-10-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-10-round-05-lever-synthesis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-10-round-06-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-11-objections.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-11-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-11-round-02-kommentare-mining.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-11-round-03-external-research.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-11-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-12-failed-methods.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-12-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-12-round-02-kommentare-mining.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-12-round-03-external-research.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-12-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-12-round-05-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-13-trust-pyramid.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-13-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-13-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-13-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-13-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-13-round-05-synthesis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-13-round-06-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-17-tonality-calibration.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-17-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-17-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-17-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-17-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-17-round-06-gap-analysis.md
```

**INGESTION FILES:**
```
/root/projects/brightkidco/docs/ingestion/files/skills-strategy-notes.md
/root/projects/brightkidco/docs/ingestion/files/doc-system-notes.md
/root/projects/brightkidco/docs/ingestion/files/context-notes.md
/root/projects/brightkidco/docs/ingestion/files/skill-frameworks-notes.md
/root/projects/brightkidco/docs/ingestion/files/wiki-copywriting-notes.md
/root/projects/brightkidco/docs/ingestion/files/wiki-copy-books-notes.md
/root/projects/brightkidco/docs/ingestion/files/kommentare-mining-notes.md
```

**RESEARCH FILES:**
```
/root/projects/brightkidco/docs/research-notes/files/ra2-r3-best-practices.md
/root/projects/brightkidco/docs/research-notes/files/ra2-r2-case-studies.md
/root/projects/brightkidco/docs/research-notes/files/competitor-email-strategies.md
```

**ALSO READ (after Strategy 01 exists):**
```
/root/projects/brightkidco/outputs/strategy/1-full-email-strategy.md
```

#### Phase 2 — Write the Document

1. **Email-by-Email Copy Strategy** — For EVERY email in EVERY flow: position in flow, send timing, goal (what does this email accomplish?), messaging angle (which emotional lever, which objection, which proof point), emotional state of subscriber at this point, CTA (exact text, placement), subject line options (3 minimum, each using a different conversion lever), preheader options (2 minimum), research justification (why this approach for this audience).

2. **Emotional Arc Per Flow** — Diagram showing the emotional journey across each flow's emails. Where does hope peak? Where does skepticism need to be addressed? Where is the CTA placed relative to the emotional arc?

3. **Objection Handling Per Email** — Which objections are preemptively addressed in which emails. Map: objection → email position → copy strategy. Why this objection is addressed at this point in the journey.

4. **Proof Point Distribution** — Which scientific facts / proof points appear in which emails. Not every email needs a proof point. Map when to introduce evidence.

5. **Lena's Voice Application Per Email** — For each email, how Lena sounds. The specific voice calibration. Examples of Lena-correct copy for each email position. What Lena would say differently in a Welcome email vs a Cart Abandonment email.

6. **Subject Line Matrix** — Table: flow × avatar level × email position → recommended subject line approach.

7. **CTA Framework** — Which CTAs appear in which emails. Primary vs secondary. Button copy patterns. Placement rules per flow stage.

#### Phase 3 — Validation

- [ ] Strategy 01 read before writing
- [ ] Email-by-email strategy for EVERY email in EVERY flow
- [ ] Emotional arc diagram per flow
- [ ] Objection handling map complete
- [ ] Proof point distribution documented
- [ ] Lena's voice application per email with examples
- [ ] Subject line matrix (flow × avatar level × email position)
- [ ] CTA framework complete
- [ ] Every decision cites its source
- [ ] File size: 40-60 pages minimum
- [ ] Diagrams: minimum 12

---

### Strategy 03: Segmentation Blueprint

**Output file:** `/root/projects/brightkidco/outputs/strategy/3-segmentation-blueprint.md`
**Minimum size:** 15-20 pages | **Minimum diagrams:** 8
**Dependencies:** Requires Strategy 01 to be complete first
**Priority:** HIGH

#### Goal
How the avatar system works end-to-end. Every avatar, every routing condition, every edge case. From pop-up to post-purchase. This is THE thing you review before anything gets built.

#### Phase 1 — Read These Source Files

**MANDATORY — read ALL MASTER compendiums + demands first:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/MASTER-DIAGNOSIS-COMPENDIUM.md
/root/projects/brightkidco/docs/ingestion/MASTER-INGESTION-COMPENDIUM.md
/root/projects/brightkidco/docs/research-notes/MASTER-RESEARCH-COMPENDIUM.md
/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md
```
Then read these synthesis docs:
```
/root/projects/brightkidco/outputs/synthesis/01-customer-avatar.md
/root/projects/brightkidco/outputs/synthesis/07-email-sequence-framework.md
/root/projects/brightkidco/outputs/synthesis/12-klaviyo-implementation-guide.md
/root/projects/brightkidco/outputs/synthesis/15-level-messaging-matrix.md
/root/projects/brightkidco/outputs/synthesis/21-customer-journey-map.md
/root/projects/brightkidco/outputs/strategy/1-full-email-strategy.md
```

**DIAGNOSIS LAYERS:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-08-segmentation-mechanics.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-08-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-08-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-08-round-03-external-research.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-08-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-08-round-06-segmentation-synthesis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-21-sub-groups.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-21-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-21-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-21-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-21-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-21-round-06-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-35-avatar-scope.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-35-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-35-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-35-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-35-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-35-round-06-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-04-avatar-levels.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-16-flow-architecture.md
```

**INGESTION FILES:**
```
/root/projects/brightkidco/docs/ingestion/files/doc-system-notes.md
/root/projects/brightkidco/docs/ingestion/files/context-notes.md
/root/projects/brightkidco/docs/ingestion/files/skill-frameworks-notes.md
```

**RESEARCH FILES:**
```
/root/projects/brightkidco/docs/research-notes/files/competitor-email-strategies.md
/root/projects/brightkidco/docs/research-notes/files/email-benchmarks.md
```

#### Phase 2 — Write the Document

1. **Avatar Definitions** — The 4 avatar levels (Level 1 — Sarah, Level 2 — Lisa, Level 3 — Maria, General Fallback). What defines each. Demographic, psychographic, behavioral markers. How to tell which level a subscriber belongs to.

2. **Segmentation Logic End-to-End** — Popup question → answer options → tag assignment → list placement → segment creation → flow routing → post-purchase re-segmentation. Complete flow diagram.

3. **Identification Methods** — How to identify which avatar level a subscriber belongs to: self-identification (popup question), behavioral signals (purchase patterns, email engagement, browsing), post-purchase re-segmentation (product review feedback, support interactions).

4. **Unknown Subscriber Path** — What happens with visitors who skip the popup or don't answer the segmentation question. General fallback path. Which flows they receive. How they get re-segmented later.

5. **Post-Purchase Re-Segmentation** — After first purchase, how does the system refine the avatar assignment? What signals trigger a re-segmentation? How does the subscriber migrate to a different flow?

6. **Cross-Level Flows** — When a Level 1 parent should receive Level 2 content (and vice versa). Rules for cross-level content distribution. Edge cases.

7. **Edge Cases** — Multi-child families (which level takes priority?), non-parent subscribers (professionals, BCBAs), international variants (UK, AU, CA — different cultural contexts), unengaged subscribers (sunset rules).

#### Phase 3 — Validation

- [ ] Strategy 01 read before writing
- [ ] All 4 avatar levels defined with identification markers
- [ ] Complete segmentation logic flow diagram (popup → tag → segment → flow → re-segment)
- [ ] Unknown subscriber fallback path defined
- [ ] Post-purchase re-segmentation logic
- [ ] Cross-level flow rules
- [ ] All edge cases handled
- [ ] Every decision cites its source
- [ ] File size: 15-20 pages minimum
- [ ] Diagrams: minimum 8

---

### Strategy 04: Pop-Up Strategy

**Output file:** `/root/projects/brightkidco/outputs/strategy/4-popup-strategy.md`
**Minimum size:** 10-15 pages | **Minimum diagrams:** 6
**Dependencies:** Requires Strategy 03 to be complete first
**Priority:** HIGH

#### Goal
The entry point to the entire email system. What the pop-up says, what it asks, what it offers, and how it feeds the segmentation engine.

#### Phase 1 — Read These Source Files

**MANDATORY — read ALL MASTER compendiums + demands first:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/MASTER-DIAGNOSIS-COMPENDIUM.md
/root/projects/brightkidco/docs/ingestion/MASTER-INGESTION-COMPENDIUM.md
/root/projects/brightkidco/docs/research-notes/MASTER-RESEARCH-COMPENDIUM.md
/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md
```
Then read these synthesis docs and strategy docs:
```
/root/projects/brightkidco/outputs/synthesis/01-customer-avatar.md
/root/projects/brightkidco/outputs/synthesis/05-customer-language-bank.md
/root/projects/brightkidco/outputs/synthesis/10-traffic-channel-map.md
/root/projects/brightkidco/outputs/synthesis/11-brand-voice-reference.md
/root/projects/brightkidco/outputs/synthesis/22-brand-content-marketing.md
/root/projects/brightkidco/outputs/synthesis/24-landing-page-cro-strategy.md
/root/projects/brightkidco/outputs/synthesis/27-brand-identity-guidelines.md
/root/projects/brightkidco/outputs/synthesis/29-content-funnel-strategy.md
/root/projects/brightkidco/outputs/strategy/3-segmentation-blueprint.md
```

**DIAGNOSIS LAYERS:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-08-segmentation-mechanics.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-15-offers.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-brand-constants.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-29-visual-calibration.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-09-voice-lena.md
```

**RESEARCH FILES:**
```
/root/projects/brightkidco/docs/research-notes/files/popup-lead-magnet-research.md
/root/projects/brightkidco/docs/research-notes/files/ra5-r1-popup-best-practices.md
/root/projects/brightkidco/docs/research-notes/files/ra5-r2-parent-popup-research.md
/root/projects/brightkidco/docs/research-notes/files/ra5-r3-competitor-popup-analysis.md
/root/projects/brightkidco/docs/research-notes/files/ra5-r4-klaviyo-popup-research.md
```

**INGESTION FILES:**
```
/root/projects/brightkidco/docs/ingestion/files/doc-system-notes.md
/root/projects/brightkidco/docs/ingestion/files/context-notes.md
```

#### Phase 2 — Write the Document

1. **Popup Design** — Brand colors, font usage, visual style, character/mascot usage (if applicable), mobile design, desktop design. Exact specs.

2. **Popup Copy** — Headline, body text, CTA button text, secondary text. Written in Lena's voice. Variants per traffic source if applicable.

3. **Segmentation Question** — The exact question wording, answer options (4 avatar levels + "I'm a professional"), radio button vs dropdown vs button selection. Why this format works.

4. **Incentive Structure** — What the visitor gets for signing up. Discount code (WELCOME10), free guide, nothing. Justification from research.

5. **Popup Timing** — Immediate, scroll-based (what %), exit-intent, time-delayed (how many seconds). Justification per traffic source.

6. **Technical Implementation** — Klaviyo form settings, tag logic (which tag for which avatar level), display rules (show once, hide after signup, frequency cap), mobile vs desktop variants.

7. **Fallback & Edge Cases** — What happens if visitor dismisses the popup. Pop-up blocker handling. Re-appearance rules. Thank-you state after signup.

#### Phase 3 — Validation

- [ ] Strategy 03 read before writing
- [ ] Popup design specs (colors, fonts, layout)
- [ ] Popup copy in Lena's voice
- [ ] Segmentation question with exact wording and answer options
- [ ] Incentive structure with justification
- [ ] Timing rules with justification
- [ ] Klaviyo technical implementation details
- [ ] Every decision cites its source
- [ ] File size: 10-15 pages minimum
- [ ] Diagrams: minimum 6

---

### Strategy G1: Business Overview (for Giuliano)

**Output file:** `/root/projects/brightkidco/outputs/strategy/giuliano/g1-business-overview.md`
**Minimum size:** 10-15 pages | **Minimum diagrams:** 6
**Dependencies:** Requires ALL 32 synthesis docs to be read first
**Priority:** HIGH — Giuliano reads this first

#### Goal
A 15-minute read for Giuliano. Who buys, why, what the market looks like, where BrightKidCo stands, and what's being built. Not a summary — a commander's assessment with clear decisions.

#### Phase 1 — Read These Source Files

**MANDATORY:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/MASTER-DIAGNOSIS-COMPENDIUM.md
/root/projects/brightkidco/docs/ingestion/MASTER-INGESTION-COMPENDIUM.md
/root/projects/brightkidco/docs/research-notes/MASTER-RESEARCH-COMPENDIUM.md
/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md
/root/projects/brightkidco/outputs/synthesis/01-customer-avatar.md
/root/projects/brightkidco/outputs/synthesis/02-competitor-landscape.md
/root/projects/brightkidco/outputs/synthesis/04-mechanism-positioning.md
/root/projects/brightkidco/outputs/synthesis/16-executive-master-plan.md
/root/projects/brightkidco/outputs/synthesis/21-customer-journey-map.md
```

**DIAGNOSIS LAYERS:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-02-customer-diagnosis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-02-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-02-round-02-kommentare-mining.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-02-round-03-external-market-research.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-02-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-04-avatar-levels.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-04-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-04-round-02-kommentare-mining.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-04-round-03-external-research.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-04-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-04-round-05-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-product-diagnosis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-round-02-competitors.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-round-05-competitive-gap.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-brand-constants.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-round-06-gap-analysis.md
```

**INGESTION FILES:**
```
/root/projects/brightkidco/docs/ingestion/files/context-notes.md
/root/projects/brightkidco/docs/ingestion/files/doc-system-notes.md
```

**RESEARCH FILES:**
```
/root/projects/brightkidco/docs/research-notes/files/competitor-email-strategies.md
/root/projects/brightkidco/docs/research-notes/files/ra4-r1-reddit-mining.md
/root/projects/brightkidco/docs/research-notes/files/ra4-r2-facebook-groups.md
/root/projects/brightkidco/docs/research-notes/files/ra4-r3-social-platforms.md
/root/projects/brightkidco/docs/research-notes/files/ra4-r5-forums-communities.md
```

#### Phase 2 — Write the Document

1. **Customer Snapshot** — Who buys from BrightKidCo. The 4 avatar levels in plain language. Key demographic and psychographic data. What drives purchase decisions.

2. **Competitive Position** — Where BKC fits in the market. Who the competitors are. What BKC does better. What competitors do better. Undefended territory.

3. **BSL™ Positioning** — What makes BrightKidCo different. Why the mechanism matters. How it's positioned vs every alternative.

4. **Email Program Overview** — What's being built. Number of flows, emails, key milestones. Timeline from strategy → prototypes → launch.

5. **Key Strategic Decisions** — The most important decisions made in the synthesis: segmentation approach, voice choice (Lena), offer structure, deliverability strategy. Why each was chosen.

6. **Giuliano's Action Items** — What Giuliano personally needs to do: approve strategy docs, provide brand assets, set up accounts, review prototypes.

#### Phase 3 — Validation

- [ ] Customer snapshot in plain language
- [ ] Competitive position with key advantages
- [ ] BSL™ positioning summary
- [ ] Email program overview with timeline
- [ ] Key strategic decisions with justifications
- [ ] Giuliano's action items
- [ ] File size: 10-15 pages
- [ ] Diagrams: minimum 6

---

### Strategy G2: Product & Offer Decisions (for Giuliano)

**Output file:** `/root/projects/brightkidco/outputs/strategy/giuliano/g2-product-offer-decisions.md`
**Minimum size:** 8-12 pages | **Minimum diagrams:** 4
**Dependencies:** None (parallel with G1, G3, G4)
**Priority:** HIGH

#### Goal
Product improvements to green-light. Optimal pricing, bundles, subscribe-save. This is where Giuliano makes concrete decisions about his product and pricing.

#### Phase 1 — Read These Source Files

**MANDATORY:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/MASTER-DIAGNOSIS-COMPENDIUM.md
/root/projects/brightkidco/docs/ingestion/MASTER-INGESTION-COMPENDIUM.md
/root/projects/brightkidco/docs/research-notes/MASTER-RESEARCH-COMPENDIUM.md
/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md
/root/projects/brightkidco/outputs/synthesis/03-science-library.md
/root/projects/brightkidco/outputs/synthesis/06-offer-research.md
/root/projects/brightkidco/outputs/synthesis/17-product-improvement-roadmap.md
/root/projects/brightkidco/outputs/synthesis/26-pricing-offer-architecture.md
/root/projects/brightkidco/outputs/synthesis/32-retention-loyalty-program.md
```

**DIAGNOSIS LAYERS:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-15-offers.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-15-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-15-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-15-round-03-external-research.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-15-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-15-round-06-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-product-diagnosis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-round-02-competitors.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-round-03-scientific-verification.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-round-05-competitive-gap.md
```

**INGESTION FILES:**
```
/root/projects/brightkidco/docs/ingestion/files/product-mechanism-notes.md
/root/projects/brightkidco/docs/ingestion/files/doc-system-notes.md
/root/projects/brightkidco/docs/ingestion/files/context-notes.md
```

**RESEARCH FILES:**
```
/root/projects/brightkidco/docs/research-notes/files/competitor-email-strategies.md
/root/projects/brightkidco/docs/research-notes/files/email-benchmarks.md
/root/projects/brightkidco/docs/research-notes/files/ra1-r3-review-exhaustion.md
/root/projects/brightkidco/docs/research-notes/files/ra2-r1-industry-reports.md
```

#### Phase 2 — Write the Document

1. **Product Improvement Recommendations** — What customers are asking for. What competitors offer that BKC doesn't. Prioritized roadmap: quick wins, strategic investments, nice-to-haves. Giuliano decides which to green-light.

2. **Pricing & Offer Structure** — Current pricing analysis. Competitor pricing comparison. Recommended bundle strategy. Subscribe & save model. Giuliano decides the final offer structure.

3. **Product Claims Audit** — Every BKC claim. Is it accurate? Supported by science? Which claims are most persuasive? Which need to be refined?

4. **Retention & Loyalty Recommendations** — Subscribe & save, referral program, loyalty program. Options with pros/cons. Giuliano decides direction.

#### Phase 3 — Validation

- [ ] Product improvement roadmap (prioritized)
- [ ] Pricing and offer recommendations
- [ ] Product claims audit
- [ ] Retention and loyalty options
- [ ] Every recommendation cites its source
- [ ] File size: 8-12 pages
- [ ] Diagrams: minimum 4

---

### Strategy G3: Brand & Marketing Direction (for Giuliano)

**Output file:** `/root/projects/brightkidco/outputs/strategy/giuliano/g3-brand-marketing-direction.md`
**Minimum size:** 12-18 pages | **Minimum diagrams:** 8
**Dependencies:** None (parallel with G1, G2, G4)
**Priority:** MEDIUM

#### Goal
Brand identity, voice, ad channels, content strategy, influencers. The direction Giuliano approves for all external-facing work.

#### Phase 1 — Read These Source Files

**MANDATORY:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/MASTER-DIAGNOSIS-COMPENDIUM.md
/root/projects/brightkidco/docs/ingestion/MASTER-INGESTION-COMPENDIUM.md
/root/projects/brightkidco/docs/research-notes/MASTER-RESEARCH-COMPENDIUM.md
/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md
/root/projects/brightkidco/outputs/synthesis/05-customer-language-bank.md
/root/projects/brightkidco/outputs/synthesis/11-brand-voice-reference.md
/root/projects/brightkidco/outputs/synthesis/22-brand-content-marketing.md
/root/projects/brightkidco/outputs/synthesis/23-ad-creative-playbook.md
/root/projects/brightkidco/outputs/synthesis/25-paid-media-strategy.md
/root/projects/brightkidco/outputs/synthesis/27-brand-identity-guidelines.md
/root/projects/brightkidco/outputs/synthesis/28-influencer-ugc-engine.md
/root/projects/brightkidco/outputs/synthesis/29-content-funnel-strategy.md
```

**DIAGNOSIS LAYERS:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-09-voice-lena.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-09-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-09-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-09-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-09-round-04-kommentare-mining.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-09-round-05-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-brand-constants.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-round-06-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-29-visual-calibration.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-29-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-29-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-29-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-29-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-33-format-requirements.md
```

**INGESTION FILES:**
```
/root/projects/brightkidco/docs/ingestion/files/doc-system-notes.md
/root/projects/brightkidco/docs/ingestion/files/context-notes.md
/root/projects/brightkidco/docs/ingestion/files/wiki-copywriting-notes.md
/root/projects/brightkidco/docs/ingestion/files/wiki-copy-books-notes.md
/root/projects/brightkidco/docs/ingestion/files/skill-frameworks-notes.md
```

**RESEARCH FILES:**
```
/root/projects/brightkidco/docs/research-notes/files/ra4-r1-reddit-mining.md
/root/projects/brightkidco/docs/research-notes/files/ra4-r2-facebook-groups.md
/root/projects/brightkidco/docs/research-notes/files/ra4-r3-social-platforms.md
/root/projects/brightkidco/docs/research-notes/files/ra4-r4-podcasts-blogs.md
/root/projects/brightkidco/docs/research-notes/files/ra4-r5-forums-communities.md
/root/projects/brightkidco/docs/research-notes/files/ra1-r5-social-recon.md
/root/projects/brightkidco/docs/research-notes/files/traffic-channel-intel.md
/root/projects/brightkidco/docs/research-notes/files/competitor-email-strategies.md
/root/projects/brightkidco/docs/research-notes/files/ra2-r1-industry-reports.md
/root/projects/brightkidco/docs/research-notes/files/ra2-r2-case-studies.md
/root/projects/brightkidco/docs/research-notes/files/popup-lead-magnet-research.md
/root/projects/brightkidco/docs/research-notes/files/ra5-r1-popup-best-practices.md
```

#### Phase 2 — Write the Document

1. **Brand Identity Summary** — Colors, typography, photography style, logo usage. The visual direction. What BKC looks like in ads, emails, social. Giuliano approves the visual direction.

2. **Brand Voice Summary** — Lena's voice. How BrightKidCo sounds. Examples of correct vs incorrect copy. The difference between Lena and a generic brand voice.

3. **Ad Creative Direction** — What hooks work on each platform. Types of ads to run (video, static, UGC). Creative testing approach.

4. **Paid Media Direction** — Which channels to prioritize, targeting strategy, budget allocation framework. Giuliano approves channel mix.

5. **Content Strategy Direction** — Content pillars, channel-by-channel content plan, lead magnets. What type of content to create.

6. **Influencer & UGC Direction** — Who to partner with, types of creators, UGC collection plan, budget considerations.

#### Phase 3 — Validation

- [ ] Brand identity summary (visual + voice)
- [ ] Ad creative direction per platform
- [ ] Paid media channel prioritization
- [ ] Content strategy direction
- [ ] Influencer and UGC direction
- [ ] Every recommendation cites its source
- [ ] File size: 12-18 pages
- [ ] Diagrams: minimum 8

---

### Strategy G4: Growth & Operations (for Giuliano)

**Output file:** `/root/projects/brightkidco/outputs/strategy/giuliano/g4-growth-operations.md`
**Minimum size:** 10-15 pages | **Minimum diagrams:** 6
**Dependencies:** None (parallel with G1, G2, G3)
**Priority:** MEDIUM

#### Goal
Support scripts, partner conflict, BCBA strategy, landing page CRO, retention. The operational and growth initiatives that need Giuliano's input.

#### Phase 1 — Read These Source Files

**MANDATORY:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/MASTER-DIAGNOSIS-COMPENDIUM.md
/root/projects/brightkidco/docs/ingestion/MASTER-INGESTION-COMPENDIUM.md
/root/projects/brightkidco/docs/research-notes/MASTER-RESEARCH-COMPENDIUM.md
/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md
/root/projects/brightkidco/outputs/synthesis/18-bcba-professional-strategy.md
/root/projects/brightkidco/outputs/synthesis/19-older-child-dignity-playbook.md
/root/projects/brightkidco/outputs/synthesis/20-partner-conflict-navigator.md
/root/projects/brightkidco/outputs/synthesis/24-landing-page-cro-strategy.md
/root/projects/brightkidco/outputs/synthesis/30-customer-support-playbook.md
/root/projects/brightkidco/outputs/synthesis/31-competitive-battle-cards.md
```

**DIAGNOSIS LAYERS:**
```
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-23-bcba-loyalty.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-23-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-23-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-23-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-23-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-23-round-06-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-25-partner-conflict.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-25-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-25-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-25-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-25-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-25-round-06-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-27-adult-diaper.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-27-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-27-round-02-skill-loading.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-27-round-03-wiki-extraction.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-27-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-27-round-06-gap-analysis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-11-objections.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-11-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-11-round-02-kommentare-mining.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-11-round-03-external-research.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-11-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-product-diagnosis.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-round-01-client-files.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-round-02-competitors.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-round-04-cross-reference.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-01-round-05-competitive-gap.md
/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-brand-constants.md
```

**INGESTION FILES:**
```
/root/projects/brightkidco/docs/ingestion/files/kommentare-mining-notes.md
/root/projects/brightkidco/docs/ingestion/files/context-notes.md
/root/projects/brightkidco/docs/ingestion/files/doc-system-notes.md
```

**RESEARCH FILES:**
```
/root/projects/brightkidco/docs/research-notes/files/competitor-email-strategies.md
/root/projects/brightkidco/docs/research-notes/files/ra4-r1-reddit-mining.md
/root/projects/brightkidco/docs/research-notes/files/ra4-r2-facebook-groups.md
/root/projects/brightkidco/docs/research-notes/files/ra1-r3-review-exhaustion.md
/root/projects/brightkidco/docs/research-notes/files/ra2-r2-case-studies.md
```

#### Phase 2 — Write the Document

1. **BCBA Strategy** — How to turn BCBAs into referral sources. Content for professionals. Parent ammunition scripts. Giuliano decides which approach to pursue.

2. **Partner Conflict Strategy** — How to help parents convince their partners. Scripts, forwardable emails, landing page for skeptical partners.

3. **Landing Page CRO** — Current page leaks. Trust signal placement. Pricing display. Product page structure. A/B testing plan. Giuliano approves CRO priorities.

4. **Customer Support Playbook** — Lena scripts for common objections. Return/warranty handling. FAQ content. Support as a conversion tool.

5. **Competitive Battle Cards** — One-pagers per competitor. Killer arguments for ads, support, content. Quick reference for the team.

#### Phase 3 — Validation

- [ ] BCBA strategy options
- [ ] Partner conflict strategy
- [ ] Landing page CRO recommendations
- [ ] Customer support playbook summary
- [ ] Competitive battle cards
- [ ] Every recommendation cites its source
- [ ] File size: 10-15 pages
- [ ] Diagrams: minimum 6

---

## STRATEGY DOCUMENT ORDER & DEPENDENCIES

```
PHASE 1 — Email Strategy + Giuliano Business Docs (parallel):
  ├── 1-full-email-strategy.md     (depends on: 32 synthesis docs)
  ├── G1-business-overview.md      (depends on: 32 synthesis docs)
  ├── G2-product-offer-decisions.md (depends on: synthesis docs 03,06,17,26,32)
  ├── G3-brand-marketing-direction.md (depends on: synthesis docs 05,11,22,23,25,27,28,29)
  └── G4-growth-operations.md      (depends on: synthesis docs 18,19,20,24,30,31)

PHASE 2 — Needs Strategy 01 first:
  ├── 2-full-email-copy-strategy.md (needs: 1-full-email-strategy.md)
  └── 3-segmentation-blueprint.md  (needs: 1-full-email-strategy.md)

PHASE 3 — Needs Strategy 03 first:
  └── 4-popup-strategy.md          (needs: 3-segmentation-blueprint.md)
```

---

## STRATEGY COMPLETION CHECKLIST

- [ ] 1-full-email-strategy.md: 20-30 pages, 10+ diagrams, every flow defined
- [ ] 2-full-email-copy-strategy.md: 40-60 pages, 12+ diagrams, every email has copy strategy
- [ ] 3-segmentation-blueprint.md: 15-20 pages, 8+ diagrams, all edge cases handled
- [ ] 4-popup-strategy.md: 10-15 pages, 6+ diagrams, technically implementable in Klaviyo
- [ ] G1-business-overview.md: 10-15 pages, 6+ diagrams, Giuliano reads in 15min
- [ ] G2-product-offer-decisions.md: 8-12 pages, 4+ diagrams, decisions to green-light
- [ ] G3-brand-marketing-direction.md: 12-18 pages, 8+ diagrams, brand direction approved
- [ ] G4-growth-operations.md: 10-15 pages, 6+ diagrams, operational initiatives approved
- [ ] Every strategic decision cites its source (synthesis doc, layer, research finding)
- [ ] Ayoub can read any strategy document and understand the WHY behind every decision
