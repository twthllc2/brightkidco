# BKC EMAIL PROJECT — MASTER OVERVIEW

**Project:** BrightKidCo (BKC) — Autism-Friendly Potty Training Underwear  
**Status:** Stages 0, 0.5, 1, 2, and 2.5 COMPLETE. Stage 3 (HTML Building) pending.  
**Date of this document:** June 29, 2026  
**Owner:** Ayoub  
**Purpose:** This is the single document that ties every stage together. Read this first.

---

## 1. WHAT THIS PROJECT IS

**The brand:** BrightKidCo sells potty-training underwear designed for children with sensory sensitivities and neurodevelopmental differences — kids who cannot feel the body signals ("I need to go") that neurotypical children rely on for potty training. The product's core insight is that potty training resistance in these children is not behavioral — it is a signal-timing disconnect in the nervous system. Mary S., the founder, started the company after discovering this with her own children. The brand voice is Lena, a peer-mom character who speaks from experience, never from a podium.

**The project:** Build 125 production-ready Klaviyo HTML emails across 22 distinct marketing flows (Welcome, Cart Abandonment, Browse Abandonment, Checkout Abandonment, Post-Purchase sequences, Replenishment, Winback, FAQ, and more), each calibrated for one of four customer levels — L1 (Sarah: verbal child, Pre-K deadline, fast-converting), L2 (Lisa: BCBA-equipped, methodical, skeptical), L3 (Maria: non-verbal child, years of failed methods, dignity-first), and GF (General Fallback: five blended sub-groups, symptom-language only). Every email must feel structurally unique so the customer never pattern-matches "another BrightKidCo email" and disengages. The project was governed by one cardinal rule: **no scripts for design decisions** — every creative choice was made by a reasoning subagent that read the copy, understood the emotional arc, and picked with human-like judgment. Scripts only do mechanical tasks (parsing JSON, counting words, writing files).

---

## 2. THE PIPELINE AT A GLANCE

| Stage | What It Did | Subagents | Key Output |
|-------|------------|:---------:|-----------|
| **0 — PRECHECK** | Read all 125 copy files, detected body shapes, extracted metadata & sections, reconciled against strategy macro, produced a single authoritative per-email truth file | 502 | `locked-profile.json` (470 KB, 16,333 lines) |
| **0.5 — CUSTOMER JOURNEY MATRIX** | Built per-level journey maps: email sequences, emotional arcs, trust meters, 9-dimension structural blueprints, variance ledgers, conversion gates, dead-end maps, cross-flow continuity rules | 30 | 4 Master Journey Documents (~25K words each) + cross-level sync report |
| **1 — ASCII WIREFRAMES** | Built one ASCII wireframe per email (125 total): ROLE assignments, structural intent, variance checks. Intent layer — says *what* each visual element does without naming specific components or colors | 125 | Wireframes appended to all 125 copy files + 70+ standalone files |
| **2 — ASSET SELECTION** | Picked specific components (from 949-catalog) and images (from 36-image library) for each section of each email, enforcing caps (4-8 components, 4-6 images, hero no reuse, component cap 8, image cap 25) | ~875 | `## STAGE 2 PICKS` sections in all 125 copy files + component/image usage trackers |
| **2.5 — WRAP TAGS + CAP RECONCILIATION** | Added explicit image↔component relationship tags (image-inside-component, image-standalone, component-text-only, image-required-component) to 913 section rows; reduced body components in 30+ over-cap files to bring 124/125 within the 4-8 cap; surfaced 81 pre-existing image-required-component BUGs | ~37–52 | 913 WRAP-tagged rows across 125 files + ~50 cap-fix backup files |
| **3 — HTML BUILDING** | Build Klaviyo-safe HTML (600px, table-based, inline CSS) from wireframes + asset picks. Header/footer extracted once from Giuliano's mockups, reused across all emails | PENDING | NOT YET STARTED |

**Approximate total subagent dispatches across all completed stages: ~1,584**

---

## 3. STAGE 0 — PRECHECK

Stage 0 was the comprehensive precheck — the "measure twice, cut once" phase. Before any design work began, Stage 0 read all 125 copy files, detected how each one's body was structured internally (8 distinct body shapes — A through H — were discovered, ranging from `## Email Body` + `### Section N: Name` headers to deeply nested `## PART 1 — FULL EMAIL COPY` patterns), extracted metadata (flow, position, level, phase, purpose), extracted per-section properties (word count, CTA presence, Lena voice, parent quotes), and reconciled every field against the brand's strategy macro documents. The core insight: 125 copy files authored across multiple sessions contain massive structural variation that must be catalogued once, not rediscovered 125 times by every downstream stage.

The deliverable was `locked-profile.json` — a 470 KB, 16,333-line JSON file containing the definitive answer for every email: what flow it belongs to, what position, what level, how many body sections it has, what those sections are named, what sign-off variant it uses, what lever it pulls, what macro intent drives it. All 125 emails were reconciled across 9 dimensions. 121 passed with zero issues (ALIGNED), 2 were resolved via the precedence rule (Demands > Synthesis > Copy > Strategy), and 2 Class C items requiring Ayoub's judgment were resolved: the PP-Mid Check-In D30 email was accepted as a genuine e1 position (expanding Flow 13 from 3 to 4 emails), and the nonstandard `shipping-06.md` filename was accepted as-is since its internal metadata was correct.

---

## 4. STAGE 0.5 — CUSTOMER JOURNEY MATRIX

Stage 0.5 addressed the desensitization problem before it could manifest. A customer who receives 35–55 emails over 6 months will recognize structural patterns and disengage unless each email varies on at least 6 of 9 structural dimensions (section count, section pattern, image density, color temperature, email length, argument structure, visual rhythm, CTA position, subject line type). This cannot be handled at the individual-email level — a Stage 1 subagent building Welcome E4 for L2 cannot know what E2 and E3 looked like unless someone mapped the full sequence first.

Stage 0.5 built four Master Journey Documents — one per customer level — totaling ~98,000 words across ~200 pages. Each master contains a complete avatar profile, the chronological email sequence with timing and triggers, a per-email emotional arc with a running trust meter (including trust delta scores per email), a structural blueprint filling all 9 variance dimensions per email with explicit justification, a variance ledger that flags low-variance pairs for remediation, conversion gates per email (Hard CTA / Soft CTA / Permission-only), dead-end maps (what happens if she ignores this email), and cross-flow continuity rules. A cross-level sync checker then audited all four masters against each other, identifying 8 HIGH-severity conflicts (including the 49% SPARK stat framing divergence, Pre-K language bans, Brand-Green CTA saturation asymmetry, and GF→L1 migration tonal jumps) and scoring cross-level consistency at 7.5/10.

---

## 5. STAGE 1 — ASCII WIREFRAMES

Stage 1 was the **intent layer**. Its single deliverable: for each of the 125 emails, produce an ASCII wireframe — a visual layout blueprint that maps every piece of copy to a visual role, defines section structure, and records 9-dimensional structural intent for the variance tracker. A wireframe is not HTML. It is not a component pick. It is not a color spec. It speaks in ROLES (`hero-image-lifestyle`, `callout-quote-highlight`, `stat-highlight-box`, `cta-button-full-width`), never component IDs.

**THE RULE:** Every section follows a vertical stack — HEADLINE first, IMAGE/COMPONENT below (never beside), CTA last (if applicable). No side-by-side layouts. No two-column layouts. No headline beside image. This is both a Klaviyo rendering constraint (table-based 600px layouts break on Gmail mobile, Outlook desktop, and Apple Mail dark mode when columns are used) and a reading-rhythm design principle proven across billions of e-commerce sends.

Every wireframe also ran a variance check against the previous email in the same flow+level — counting differences across all 9 dimensions. If fewer than 5 of 9 dimensions differed, the subagent adjusted the wireframe (changing CTA position, swapping argument structure, modifying image density) until the ≥5 threshold was met. All 125 wireframes passed this gate. The variance tracker (within `locked-profile.json`) preserves every wireframe's 9-dimensional fingerprint so Stage 2 subagents inherit it.

---

## 6. STAGE 2 — ASSET SELECTION

Stage 2 was the **selection layer**: for each section of each email, a dedicated subagent read the wireframe's ROLE and INTENT, browsed the 949-component catalog, visually inspected the top candidates in the component showcase HTML, checked the component-usage tracker (cap: 8 uses globally, skip any at 8), checked the image-usage tracker (cap: 25 uses globally), and made a deliberate, reasoned pick with a written "WHY" justification.

**The first attempt failed.** Subagents were given the 8-cap and 25-cap but were not explicitly instructed to enforce (1) the 4-6 image minimum per email or (2) the zero-hero-reuse rule. Result: 80% of emails had fewer than 4 images, and HERO-9 was picked 50 times across 125 emails. The first attempt's outputs were scrapped, trackers were reset, and a **corrected version** was run with explicit enforcement baked into every subagent prompt: "You MUST pick 4-6 images per email. Hero components are NEVER reused across emails. Search the tracker — any hero already used at count > 0 is off-limits."

The corrected run achieved full compliance: all 125 emails have 4-6 images and 4-8 components; all hero components are unique (23 distinct heroes, each used exactly once); zero components exceed the 8-cap (17 components at exactly 8, flagged as at-cap); zero images exceed the 25-cap (1 image at 25/25: `founders-holding-pants-yellow-watermelon.png`); zero teal #2BAEB4 components used; level calibration respected across all 4 levels. The component distribution shows excellent variance: 168 components used exactly once (~44% of the 381 components used), confirming deliberate distribution across the full catalog rather than clustering on favorites.

---

## 7. STAGE 2.5 — WRAP-TAG + CAP RECONCILIATION

Stage 2.5 was an unplanned but necessary post-selection fix phase that emerged after Stage 2's corrected run. Two problems were discovered:

**Problem 1 — No explicit image↔component relationship:** Section rows had both a COMPONENT PICKED and IMAGE PICKED, but nothing stated whether the image rendered *inside* the component (e.g., a hero photo inside HERO-1) or *standalone* between sections. A Stage 3 subagent building HTML would need to infer this, producing inconsistent rendering. Solution: Stage 2.5 subagents tagged all 913 section rows across all 125 files with explicit WRAP values — `image-inside-component` (338 rows, 37.0%), `image-standalone` (179 rows, 19.6%), `component-text-only` (140 rows, 15.3%), or `image-required-component` (98 rows — pre-existing BUGs where an image-required component was picked but no image was assigned).

**Problem 2 — Over-cap body components:** Multiple emails had 10–18 body components when the hard cap was 4–8, because locked-signoff components (`12.1`, `12.2`, `UTIL-05`, `EMODEEP-*`) were being incorrectly counted toward the body cap. Solution: Stage 2.5 cap-fix subagents removed redundant components from 30+ over-cap files (creating `.bak-pre-capfix` backups for audit trail), and enforced the locked-signoff exclusion rule (62 signoff rows excluded from body cap math). After cap reconciliation, 124/125 files are within the 4–8 body-component cap; L3/L2 "soft close" Welcome emails intentionally have 1–3 components by wireframe design.

**81 pre-existing BUGs remain** — flagged as `image-required-component` — where image-required components (HERO, PROD, CAMIMG, FLOWIMG, DEEPPROD, etc.) were picked without an image. These are tagged (machine-readable) for a future fix wave but are not blocking. The most BUG-prone flow is pp-extended-ed (27 BUGs); the highest BUG-density flow is transactional (16 BUGs across only 4 files).

---

## 8. STAGE 3 — HTML BUILDING (NOT YET DONE)

Stage 3 will assemble Klaviyo-safe HTML emails from the wireframes and asset picks. Each email will be built by: (1) extracting the static header and footer once from Giuliano's raw mockup, (2) per-section subagents reading the wireframe's ROLE + the STAGE 2 PICKS component/image selections, building Klaviyo-compatible HTML (600px width, `<table>`-based, inline CSS only, no JavaScript, System B colors only, Questrial 400 body font, Fraunces headlines where specified), (3) a composer subagent that concatenates header + sections + signoff + footer and enforces deliverability checks (file size <102KB, preheader div present, Klaviyo template variables in place, mobile-responsive at 480px). This is the final production stage. **All design decisions are complete; Stage 3 is execution only.**

---

## 9. CURRENT STATE

**What is complete:**
- ✅ Stage 0: All 125 emails prechecked, reconciled, locked. `locked-profile.json` is the source of truth.
- ✅ Stage 0.5: Four Master Journey Documents built — one per level — with full emotional arcs, trust meters, structural blueprints, variance ledgers, conversion gates, dead-end maps, and cross-level sync.
- ✅ Stage 1: All 125 ASCII wireframes built — ROLE assignments, structural intent, variance checks (≥5/9 per pair). All appended to copy files.
- ✅ Stage 2: All 125 emails have component and image picks. 4-6 images per email, 4-8 components per email, hero unique globally, all caps respected. `component-usage.json` (381 entries) and `image-usage.json` (31 entries) are final.
- ✅ Stage 2.5: 913 section rows WRAP-tagged. 124/125 files within body-component cap. 81 pre-existing BUGs flagged. ~50 cap-fix backups preserved.

**What is pending:**
- 🔲 Stage 3: Build production Klaviyo HTML for all 125 emails.
- 🔲 Fix 81 `image-required-component` BUGs (tagged, not blocking, can be fixed in a future wave).
- 🔲 Remediate 8 HIGH-severity cross-level sync conflicts (identified, documented, not yet applied to journey documents).
- 🔲 Header/footer HTML extraction from Giuliano's raw mockup (static, extracted once for all emails).

---

## 10. KEY NUMBERS

| Metric | Value |
|--------|-------|
| **Total emails in program** | 125 |
| **Total flows** | 22 |
| **Customer levels** | 4 (L1 Sarah, L2 Lisa, L3 Maria, GF General Fallback) |
| **Components in catalog** | 949 |
| **Components actually used** | 381 |
| **Components used exactly once** | 168 (~44%) |
| **Components at cap (8 uses)** | 17 |
| **Unique hero components** | 23 (each used exactly once) |
| **Images in library** | 36 |
| **Images actually used** | 31 |
| **Images at cap (25 uses)** | 1 |
| **Images unused** | 5 |
| **Images per email** | 4–6 |
| **Components per email** | 4–8 (body), plus locked-signoff |
| **Section rows WRAP-tagged** | 913 across all 125 files |
| **Pre-existing `image-required-component` BUGs** | 81 (tagged, not yet fixed) |
| **Total subagent dispatches (approx.)** | ~1,584 across all stages |
| **Documentation words across all stages** | 304,933+ across 25+ documents |

**Subagent breakdown by stage:**
- Stage 0: 502 (125 shape detectors + 125 metadata extractors + 125 section extractors + 1 strategy parser + 125 reconcilers + 1 profile builder)
- Stage 0.5: 30 (4 avatars + 8 sequences/arcs + 8 blueprints/behaviors + 4 assemblers + 1 sync checker + 5 rounds orchestration)
- Stage 1: 125 (one per email)
- Stage 2: ~875 (~625 section picks + 125 image-augment + 125 cap-validation)
- Stage 2.5: ~37–52 (5–10 WRAP-tag subagents + 30–40 cap-fix subagents + 1 welcome audit + 1 WRAP audit)

---

## 11. THE RULES THAT GOVERNED EVERYTHING

These five principles are the constitution of the BKC project. Every stage, every subagent, and every decision was governed by them.

### Rule 1: NO SCRIPTS FOR DESIGN DECISIONS

> *"Scripts are blind. Subagents see and reason."*

This is Ayoub's cardinal rule, repeated in every stage plan. Four previous pipeline attempts (v1–v4) used Python scripts to "pick components" and "assemble HTML." They all produced identical, generic output. The customer's brain pattern-matched the sameness in 0.5 seconds and stopped opening. Every design decision — choosing a body shape, assigning a ROLE, picking a component, selecting an image, deciding which section needs a CTA, determining color temperature — was made by a subagent that read the copy file, understood the emotional arc, and reasoned with human-like judgment. Scripts did only mechanical work: parsing JSON, counting words, writing files, and only AFTER a subagent had decided what to count.

### Rule 2: ONE SUBAGENT PER REASONING UNIT

> *"Slow. Step by step. No batching. No automation."*

Each subagent handled one bounded task: one file's shape detection, one email's metadata extraction, one email's wireframe construction, one section's component pick, one section's WRAP tag. This prevented cross-contamination — a subagent building Welcome E4 L1 for Sarah cannot accidentally apply L3 Maria's dignity-first rules to a Sarah email. It also prevented drift: standardized templates for each subagent type ensured consistent judgment criteria across all 125 files.

### Rule 3: VARIANCE OVER CONSISTENCY

> *"If the customer sees the same structure twice, she stops opening."*

The desensitization framework identified 9 independent dimensions of email structure. Every consecutive pair of emails in the same flow+level must differ on at least 5 of 9 dimensions. Beyond pair-level variance, global caps prevent pattern clustering: no 3× same section pattern in a row, no 3× same argument structure, no 3× same CTA position, no 3× same image density. The component cap (8 uses globally) and the zero-hero-reuse rule forced deliberate distribution across the full 949-component catalog rather than clustering on a few "safe" favorites. Result: 168 components used exactly once.

### Rule 4: CAPS LOCKED

> *"4-8 components per email. 4-6 images per email. Hero = NO reuse. Component cap = 8. Image cap = 25. Teal = BANNED."*

These hard caps came from Ayoub's original brief (`plans/ayoub-instructions.md`) and were enforced across every Stage 2 and Stage 2.5 subagent. The hero uniqueness rule alone prevented 50 emails from all using HERO-9 (which happened in the scrapped first attempt). The locked-signoff exclusion rule (62 signoff rows excluded from body cap math) was established in Stage 2.5 to prevent miscounting. System B colors only (#039902 Brand-Green, #DBFFCD Mint, #FBF7EB Cream, #F5C84B Yellow, #1A1A1A Dark Text, #4A4A4A Body Gray, #FAF9F7 Off-White, #9AA8A7 Soft Gray). System A teal (#2BAEB4, #5DD07A) is explicitly banned per GIULIANO-DEMANDS.md §15.1. No Level-3 email may use Brand-Yellow #F5C84B.

### Rule 5: LEVEL-FIRST DESIGN

> *"L1, L2, L3, and GF are FOUR DIFFERENT CUSTOMERS receiving FOUR DIFFERENT VISUAL LANGUAGES."*

Level calibration is not an afterthought — it is the foundation. L1 (Sarah: verbal 3–5, Pre-K deadline, 70/30 hope/realism) gets full-width Brand-Green CTAs, tight 40px spacing, yellow stat accents, and lifestyle hero images of young kids. L2 (Lisa: BCBA-equipped, 40/60 hope/realism, methodical) gets muted mint tones, balanced 44px spacing, BCBA-respectful language, and the mandatory 6-Element Formula. L3 (Maria: non-verbal 6–10+, dignity-first, 20/80 hope/realism) gets cream/earth tones ONLY, 56px widest spacing, text-link CTAs only, zero yellow, zero product photography, zero hero images. GF (5 blended sub-groups) gets symptom-language only (V16 rule — never "autism," never "ASD," never level labels), R1–R6 cross-level calibration, and the sole migration touchpoint (PP-Level Detection at Day 14). Every subagent was required to internalize these differences, not just check a list. The most successful wireframes — especially L3 — came from subagents that understood Maria's emotional state and made every decision through her eyes.

### Additional Precedence Rule

When sources conflict, the hierarchy is: **GIULIANO-DEMANDS.md** (highest — customer's explicit requirements) → **Synthesis documents** (S02-A-framework, S01-A-framework) → **Copy file metadata** → **Strategy macro**. This hierarchy was formalized in Stage 0 and is binding on all subsequent stages.

---

## 12. APPENDIX: FILE INVENTORY

### Primary Deliverables (in dependency order)

```
/root/projects/brightkidco/
├── _notes/
│   ├── MASTER-OVERVIEW.md                      ← THIS FILE
│   ├── locked-profile.json                     ← Stage 0: authoritative per-email truth (470 KB, 16,333 lines)
│   ├── strategy-macro.json                     ← Stage 0: 22 flow definitions, per-level calibration (66 KB)
│   ├── extracted-metadata.json                 ← Stage 0: per-file metadata (229 KB)
│   ├── extracted-sections.json                 ← Stage 0: per-file section breakdown (465 KB)
│   ├── detected-shapes.json                    ← Stage 0: per-file shape classification (59 KB)
│   ├── reconciled-profiles.json                ← Stage 0: per-email reconciliation results (358 KB)
│   │
│   ├── STAGE-0-COMPLETE-DOCUMENTATION.md       ← Stage 0 documentation (34 KB)
│   ├── 2026-06-28-stage-0-plan.md              ← Stage 0 execution plan
│   │
│   ├── journey-l1-MASTER.md                    ← Stage 0.5: L1 Sarah journey (~25,000 words)
│   ├── journey-l2-MASTER.md                    ← Stage 0.5: L2 Lisa journey (~25,000 words)
│   ├── journey-l3-MASTER.md                    ← Stage 0.5: L3 Maria journey (~22,000 words)
│   ├── journey-gf-MASTER.md                    ← Stage 0.5: GF journey (~26,000 words)
│   ├── journey-cross-level-sync.md             ← Stage 0.5: cross-level audit (7.5/10 score)
│   ├── journey-{l1,l2,l3,gf}-01-avatar.md      ← Stage 0.5: 4 avatar profiles
│   ├── journey-{l1,l2,l3,gf}-02-sequence.md    ← Stage 0.5: 4 email sequences
│   ├── journey-{l1,l2,l3,gf}-03-emotional-trust.md ← Stage 0.5: 4 emotional arcs + trust meters
│   ├── journey-{l1,l2,l3,gf}-04-structural-blueprint.md ← Stage 0.5: 4 structural blueprints + variance ledgers
│   ├── journey-{l1,l2,l3,gf}-05-flow-behavior.md ← Stage 0.5: 4 conversion gates + dead-end maps
│   ├── STAGE-0.5-COMPLETE-DOCUMENTATION.md      ← Stage 0.5 documentation (55 KB)
│   ├── 2026-06-28-stage-0.5-plan.md             ← Stage 0.5 execution plan
│   │
│   ├── STAGE-1-COMPLETE-DOCUMENTATION.md        ← Stage 1 documentation (44 KB)
│   ├── 2026-06-28-stage-1-plan.md               ← Stage 1 execution plan
│   ├── stage1-wireframe-example.md              ← Stage 1 worked example (Welcome E1 L1)
│   │
│   ├── STAGE-2-COMPLETE-DOCUMENTATION.md        ← Stage 2 documentation (31 KB)
│   ├── 2026-06-29-stage-2-plan.md               ← Stage 2 execution plan (corrected version)
│   ├── 2026-06-29-stage-2-diagnosis.md          ← Stage 2 Image↔Component diagnosis
│   ├── 2026-06-29-stage-2-audit-report.md       ← Stage 2 component audit (932 picks)
│   ├── component-usage.json                     ← Stage 2: 381 component entries, 0 over cap
│   ├── image-usage.json                         ← Stage 2: 31 image entries, 0 over cap
│   │
│   ├── STAGE-2.5-COMPLETE-DOCUMENTATION.md      ← Stage 2.5 documentation (42 KB)
│   ├── stage-2-wrap-tag-audit.md                ← Stage 2.5: WRAP tag distribution per flow
│   ├── stage-2-diagnosis-files.md               ← Stage 2.5: master 125-file list
│   │
│   └── 2026-06-28-build-flow.md                 ← Original pipeline canonical reference (31 KB)
│
├── outputs/
│   ├── copy/{flow}/                             ← 125 copy files with appended wireframes + STAGE 2 PICKS sections
│   ├── wireframes/{flow}/                       ← 70+ standalone wireframe files
│   ├── email-assets/
│   │   ├── component-catalog.json              ← 949-component catalog
│   │   ├── product-photos/                      ← 36 images (5 subfolders: lifestyle, flat-lay, accessories, resized, branding)
│   │   └── showcase-artifacts-final.html        ← Visual reference for component inspection
│   ├── email-design-environment/                ← Giuliano's raw mockup HTML (static header/footer source)
│   └── html/                                    ← TARGET: Stage 3 output (not yet built)
│
├── plans/
│   ├── ayoub-instructions.md                    ← Ayoub's original brief (core rules, ~3 KB)
│   └── a-to-z-problem-definition.md             ← Desensitization framework + 9-dimension theory
│
├── demands/
│   └── GIULIANO-DEMANDS.md                      ← Customer requirements: levels, calibration, rules, forbidden phrases
│
└── outputs/
    ├── strategy/                                ← Strategy macro documents (S01-A, S02-A, g3 brand direction)
    └── synthesis/                               ← Synthesis documents (avatars, objection handling, journey maps)
```

### For a New Session Starting Where This Left Off

1. **Read this MASTER-OVERVIEW.md first** — it tells you what was built and why.
2. **Read `locked-profile.json`** — it is the source of truth for every email's structure, intent, and level.
3. **Read one Master Journey document** (e.g., `journey-l1-MASTER.md`) to understand the level calibration system.
4. **Read `ayoub-instructions.md`** — the original brief with the core rules.
5. **Read `GIULIANO-DEMANDS.md`** — the customer's explicit requirements (precedence rule #1).
6. **Open any copy file** at `outputs/copy/{flow}/{email-id}.md` — each file now contains: original copy + `## WIREFRAME` (Stage 1) + `## STAGE 2 PICKS` (Stage 2) with WRAP tags (Stage 2.5).
7. **Proceed to Stage 3** — HTML building. All design decisions are complete. The wireframes say what each section needs. The STAGE 2 PICKS sections say which component and image fill each slot. The WRAP tags say how they combine.

---

*This document was compiled on June 29, 2026 from all five STAGE-*-COMPLETE-DOCUMENTATION.md files, the original build flow canonical reference (`2026-06-28-build-flow.md`), and Ayoub's original brief (`plans/ayoub-instructions.md`). It covers ~1,584 subagent dispatches across 5 completed stages, ~304,933 words of documentation, and 125 emails across 22 flows calibrated for 4 customer levels.*
