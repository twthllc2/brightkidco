# LAYER 35 ROUND 2: AVATAR SCOPE CONSTRAINT — SKILL LOADING

## Purpose

Load and extract avatar scope constraint rules from three Hermes skills relevant to avatar segmentation and scope. Cross-reference with Layer 35's definition in the overnight plan to identify alignment, gaps, and conflicts.

## Skills Loaded

1. **brand-voice-definition** (email-marketing category)
2. **client-onboarding-structure** (email-marketing category)
3. **segmentation-strategy-framework** (email-marketing/strategy-analytics category)

**Note:** The task specified `email-copy-segmentation` as the first skill. That skill does not exist in the system. The closest match is `segmentation-strategy-framework` (five-layer segmentation framework) which was loaded instead. The other two skills were loaded successfully.

---

## 1. SCOPE-RELATED RULES FROM SKILLS

### 1.1 From brand-voice-definition

**Scope Rules Extracted:**

| # | Rule | Source Section | Relevance to Avatar Scope |
|---|------|---------------|--------------------------|
| 1 | Voice dimensions must be scored on 6 axes (Formal↔Casual, Serious↔Playful, Technical↔Simple, Authoritative↔Friendly, Salesy↔Educational, Short↔Long-form) | Step 2: Analyze Voice Dimensions | Defines how voice adapts per avatar — each level needs different axis scores |
| 2 | Voice pillars get 3-5 definitions with DO/DON'T examples | Step 3: Define Voice Pillars | Each avatar level could need its own pillar set (e.g., Level 3 dignity-first pillar) |
| 3 | Tone varies per channel/touchpoint (Welcome, Abandoned Cart, Post-Purchase, SMS, Customer Service) | Step 4: Define Tone Variations | Maps to flow-level tonality but does NOT address avatar-level tonality differences |
| 4 | Keywords list with brand language and avoid-list | Step 5: Document Keywords & Phrases | For BrightKidCo: Level 3 has stricter avoid-list than Level 1 (no urgency, no math reframes) |
| 5 | Reference emails written per flow type | Step 6: Create Reference Emails | Would need 4× Welcome references for BrightKidCo (one per level), not just one |
| 6 | Brand voice guide saved to wiki at `/root/wiki/clients/{client-name}/brand-voice.md` | Step 7: Document in Client Wiki | Single brand voice doc — does NOT account for multi-level voice variants |

**Gap Identified:** The brand-voice-definition skill assumes ONE brand voice per client. BrightKidCo requires FOUR variant tonalities within the same brand (Level 1: 70% hope, Level 2: 40% hope, Level 3: 20% hope, General: 50/50). The skill has no framework for multi-segment voice variants.

### 1.2 From client-onboarding-structure

**Scope Rules Extracted:**

| # | Rule | Source Section | Relevance to Avatar Scope |
|---|------|---------------|--------------------------|
| 1 | Diagnosis-first workflow: ingest → diagnose → expand → plan → build | Diagnosis-First Workflow | Avatar scope must be fully diagnosed BEFORE building any flows |
| 2 | Layered diagnosis framework: "What does it say? Why does it exist? How does it connect? What do we need to decide?" | Layered Diagnosis Framework | Layer 35 answers "What does the avatar system cover?" — fits this framework |
| 3 | Build phase: audit existing assets → build prototypes → avatar-segmented variants → anti-fabrication check | Build Phase Workflow | Explicitly calls for "avatar-segmented variants" — acknowledges multi-level scope |
| 4 | Cross-level flows first (cart, checkout, browse, post-purchase), then level-specific variants (welcome × each level) | Step 3: Avatar-Segmented Variants | Aligns with Layer 35: Welcome = level-specific, Cart/Checkout = cross-level |
| 5 | Tonality calibration differs per level (hope vs realism ratio) | Step 3: Avatar-Segmented Variants | Directly references the avatar-tonality-calibration reference |
| 6 | Symptom-first language in copy — NEVER label levels in customer-facing content | Step 3: Avatar-Segmented Variants | Core scope rule: levels are backend tags, not copy language |
| 7 | General Fallback uses "Whether...Or...If..." pattern for cross-level reach | Avatar Tonality Calibration Reference | Aligns with Layer 20 and Layer 35's General Fallback scope definition |
| 8 | Migration > Forced Segmentation — if unclear, use General Fallback, let customers self-select through behavior | Avatar Tonality Calibration Reference | Defines General Fallback as the default scope for unknown-level subscribers |
| 9 | Cross-level flows use General for: Cart, Checkout, Browse, Post-Purchase Day 0-14 | Avatar Tonality Calibration Reference | Defines which flows are cross-level (in scope for all) vs level-specific |
| 10 | Anti-fabrication: never fabricate testimonials — only use verbatim from client research docs | Anti-Fabrication Check | Scope constraint: testimonial selection must match avatar level (Level 3 needs Level 3 stories) |

**Key Finding:** The client-onboarding-structure skill is the MOST aligned with Layer 35's scope rules. Its avatar-tonality-calibration reference explicitly defines the 4-level calibration matrix and the cross-level vs level-specific flow split.

### 1.3 From segmentation-strategy-framework

**Scope Rules Extracted:**

| # | Rule | Source Section | Relevance to Avatar Scope |
|---|------|---------------|--------------------------|
| 1 | Five-layer segmentation: Engagement, Value, Behavioral, Demographic, Purchase History | Overall Framework | This is a GENERIC e-commerce framework — does NOT include BrightKidCo's avatar-level segmentation |
| 2 | Engagement segments (30/60/90/180 days) are the backbone | Layer 1 | BrightKidCo adds a SIXTH layer: Avatar Level (level1/level2/level3/general) |
| 3 | Behavioral segments capture real-time intent (Viewed Product, Added to Cart, Reached Checkout) | Layer 3 | These are IN SCOPE for BrightKidCo alongside avatar segmentation |
| 4 | Segment overlap rules: VIP + Frequent Buyer = highest priority | Overlap Rules | BrightKidCo's overlap is different: Avatar Level × Emotional Phase (but Phase 1 excludes emotional dimensions) |
| 5 | Suppression logic: unengaged 180+ days → sunset flow | Suppression Logic | In scope for BrightKidCo — applies to all levels equally |
| 6 | Demographic segments only for groups >5% of list | Layer 4 | BrightKidCo's 4 levels all exceed 5% (Level 1: 35%, Level 2: 40%, Level 3: 25%, General: 50% volume) |

**Gap Identified:** The segmentation-strategy-framework has NO concept of avatar-level segmentation. It covers engagement, value, behavioral, demographic, and purchase history — but not the autism-severity-based segmentation that defines BrightKidCo's entire email architecture. The skill would need a Layer 6 addition for "Avatar/Persona Segmentation" to accommodate BrightKidCo's model.

---

## 2. HOW SKILLS DEFINE AVATAR BOUNDARIES

### 2.1 brand-voice-definition Boundaries

The skill defines boundaries through:
- **Voice dimension scores** (1-5 per axis) — one set per brand
- **Voice pillars** (3-5) — one set per brand
- **Tone variation table** — per channel, NOT per avatar level
- **Keywords list** — one avoid-list per brand

**Boundary Limitation:** The skill assumes a single voice identity per brand. It has no mechanism for defining different hope-to-realism ratios per segment. For BrightKidCo, this means the skill would produce ONE brand voice doc that cannot express the critical difference between Level 1 (70% hope) and Level 3 (20% hope).

### 2.2 client-onboarding-structure Boundaries

The skill defines boundaries through:
- **Phased delivery** (diagnosis → build) — scope must be diagnosed first
- **Flow segmentation rules** (level-specific vs cross-level) — directly from the avatar-tonality-calibration reference
- **Tonality calibration matrix** (hope/realism per level) — the most detailed avatar boundary definition in any skill
- **Forbidden phrases per level** — scaling strictness (Level 3 > Level 1)
- **Symptom-first rule** — levels never mentioned in copy

**Boundary Strength:** This skill has the strongest avatar boundary framework. The avatar-tonality-calibration reference is essentially a mini-Layer 35 for generic multi-segment clients.

### 2.3 segmentation-strategy-framework Boundaries

The skill defines boundaries through:
- **Segment definitions** (engagement, value, behavioral, demographic, purchase history)
- **Segment size targets** (healthy/warning/critical ranges)
- **Overlap rules** (which segments interact how)
- **Suppression logic** (who gets excluded)

**Boundary Limitation:** No avatar/persona segmentation layer. The framework is purely transactional (what they bought, when they engaged) — it does not capture WHO the customer is in terms of their child's needs or their emotional state.

---

## 3. CONFLICTS WITH LAYER 35'S DEFINITION

### 3.1 No Direct Conflicts

None of the three skills CONTRADICT Layer 35's scope rules. There are no statements in any skill that say emotional dimensions should be separate segmentation criteria in Phase 1, or that avatar levels should be mentioned in copy.

### 3.2 Gaps (Things Layer 35 Defines That Skills Don't Cover)

| Layer 35 Rule | Skill Coverage | Gap Severity |
|---------------|---------------|--------------|
| Phase 1 = Autistic Parent ONLY (3 emotional avatars excluded) | Not mentioned in any skill | HIGH — skills don't define scope exclusions |
| Emotional dimensions inform tonality, NOT segmentation | client-onboarding-structure hints at this but doesn't state it explicitly | MEDIUM |
| General Fallback has 5 sub-groups (A-E) | Not mentioned in any skill | MEDIUM — sub-group messaging needs are distinct |
| Mary S. excluded from Phase 1 regular emails | Not mentioned in any skill | LOW — voice-specific, not scope-specific |
| Cross-avatar intersection logic excluded (Level × Dimension = 12 combos) | Not mentioned in any skill | HIGH — this is a core scope constraint |
| "Whether...Or...If..." pattern for General Fallback | client-onboarding-structure references it | ALIGNED — no gap |
| Never mention "Level 1/2/3" in copy | client-onboarding-structure states this explicitly | ALIGNED — no gap |

### 3.3 Skill Assumptions That Partially Conflict

| Skill Assumption | Layer 35 Reality | Conflict Level |
|------------------|-----------------|----------------|
| brand-voice-definition: one voice per brand | BrightKidCo has 4 tonality variants within one brand | MEDIUM — skill needs extension, not correction |
| segmentation-strategy-framework: 5 segmentation layers | BrightKidCo adds a 6th: avatar level | LOW — additive, not conflicting |
| segmentation-strategy-framework: demographic = primary differentiator | BrightKidCo's primary differentiator is avatar level (autism severity), not demographics | MEDIUM — framework orientation mismatch |

---

## 4. SKILLS THAT NEED UPDATING FOR SCOPE

### 4.1 brand-voice-definition — Needs Major Update

**What's Missing:**
- Multi-segment voice variant support
- Hope/realism ratio calibration per segment
- Per-level forbidden phrases list
- Per-level reference emails (not just per-flow)

**Suggested Addition:**
```
### Step 2.5: Define Segment Voice Variants (If Multi-Segment)

If the client has distinct customer segments with different emotional needs:

| Segment | Hope | Realism | Urgency OK? | Math Reframes? | Forbidden Phrases |
|---------|------|---------|-------------|----------------|-------------------|
| Level 1 | 70%  | 30%     | Yes         | Yes            | [list]            |
| Level 2 | 40%  | 60%     | Limited     | Careful        | [list]            |
| Level 3 | 20%  | 80%     | NEVER       | NEVER          | [list]            |
| General | 50%  | 50%     | Soft only   | Yes            | [list]            |

Each segment gets its own voice pillar variant and reference email set.
```

### 4.2 segmentation-strategy-framework — Needs Minor Update

**What's Missing:**
- Avatar/persona segmentation layer
- How avatar-level tags interact with the existing 5 layers
- Segment overlap rules for avatar level × engagement × value

**Suggested Addition:**
```
## Layer 6: Avatar/Persona Segments (When Applicable)

For brands with distinct customer personas (health conditions, severity levels,
experience tiers), add avatar-level segmentation as a sixth layer.

| Segment | Tag | Purpose |
|---------|-----|---------|
| Avatar A | avatar_a | Primary persona — gets level-specific flows |
| Avatar B | avatar_b | Secondary persona |
| General | avatar_general | Unknown/migration — uses cross-level language |

Overlap rules: Avatar Level × Engagement determines flow routing.
Avatar Level × Value determines offer priority.
```

### 4.3 client-onboarding-structure — Needs No Major Update

This skill is already well-aligned with Layer 35. The avatar-tonality-calibration reference covers the core scope rules. Minor enhancement could add explicit references to scope exclusion rules (e.g., "define what's OUT of scope, not just what's in scope").

---

## 5. CROSS-REFERENCE: SKILLS ↔ LAYER 35

| Layer 35 Section | Skill That Covers It | Coverage Level |
|------------------|---------------------|----------------|
| Section 1: Phase 1 = Autistic Parent Only | None | MISSING |
| Section 2: Three Excluded Avatars | None | MISSING |
| Section 3: What Avatar System Covers (4 levels) | client-onboarding-structure (tonality calibration) | PARTIAL |
| Section 3.2: General Fallback Sub-Groups | None | MISSING |
| Section 4: What Avatar System Does NOT Cover | None | MISSING |
| Section 5.1: Flow Segmentation Rules | client-onboarding-structure (flow × segmentation table) | GOOD |
| Section 5.2: Tonality Calibration | client-onboarding-structure (avatar-tonality-calibration) | GOOD |
| Section 5.3: Copy Rules Derived from Scope | client-onboarding-structure (symptom-first rule) | PARTIAL |
| Section 6: Scope Boundary Summary | None | MISSING |
| Section 7: Cross-Reference Map | None | MISSING |

---

## 6. SUMMARY

**Skills Analyzed:** 3 (brand-voice-definition, client-onboarding-structure, segmentation-strategy-framework)

**Alignment Score:**
- client-onboarding-structure: 70% aligned with Layer 35 (strongest)
- brand-voice-definition: 40% aligned (needs multi-segment extension)
- segmentation-strategy-framework: 25% aligned (generic framework, no avatar concept)

**Critical Gaps:**
1. No skill defines what's OUT of scope (the 3 excluded emotional avatars)
2. No skill addresses the emotional dimensions as tonality-only (not segmentation) distinction
3. No skill documents the General Fallback's 5 sub-groups
4. No skill captures the cross-avatar intersection exclusion (Level × Dimension)

**Skills Needing Updates:**
1. brand-voice-definition — add multi-segment voice variant support
2. segmentation-strategy-framework — add avatar/persona segmentation layer
3. client-onboarding-structure — minor: add scope exclusion documentation pattern

**Skills Already Aligned:**
- client-onboarding-structure's avatar-tonality-calibration reference is the closest existing approximation to Layer 35's scope rules

---

*Layer 35 Round 2 complete. 3 skills loaded and analyzed. Scope rules extracted. Gaps identified. Skills assessed for update needs.*
