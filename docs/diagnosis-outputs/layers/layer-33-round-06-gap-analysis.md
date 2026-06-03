# L33 R6: Email Format Requirements — Gap Analysis

**Generated:** 2026-05-25
**Task:** Identify gaps, inconsistencies, and missing elements in the Email Format Requirements analysis
**Sources:** DOC1-MASTER-FOUNDATION.txt, DOC6-USAGE-GUIDE.txt, overnight-plan.md (Layer 33 section), existing Layer 27-31 gap analyses

---

## EXECUTIVE SUMMARY

**The Layer 33 synthesis file does not exist.** None of the expected round outputs (R1-R5) have been produced. The synthesis target (`layer-33-format-requirements.md`) is 0 bytes. This gap analysis therefore operates against the SOURCE MATERIALS (DOC1, DOC6, plan) to identify what the synthesis must contain, and what the source materials themselves are missing.

Additionally, Layer 32 (Prototype Patterns) — a required cross-reference for Layer 33 — also does not exist, creating a cascading dependency gap.

**14 gaps identified. 7 are high-priority. 2 are blockers for downstream email creation.**

---

## 1. COMPLETENESS CHECKLIST AGAINST PLAN REQUIREMENTS

The plan specifies Layer 33's mission (line 1001-1005):

| Plan Requirement | Status | Notes |
|---|---|---|
| Read DOC1, extract format requirements | [DONE] — Source exists | DOC1 sections 13, 16, 17, 19, 23, 25 contain format guidance |
| Read DOC6, extract format requirements | [DONE] — Source exists | DOC6 sections 2, 4, 5 contain format templates |
| Read Claude-Project-Instructions.txt | [MISSING] | File not found — cannot verify if format rules exist there |
| Load `email-design-standards-and-template-build` skill | [PARTIAL] | Skill exists in skills list but was NOT loaded during R1-R5 (those rounds don't exist) |
| Load `email-html-generator` skill | [PARTIAL] | Same — skill exists but never loaded |
| Cross-reference Layer 32 (Existing Patterns) | [BLOCKED] | Layer 32 synthesis (`layer-32-prototype-patterns.md`) does not exist |
| Cross-reference Layer 38 (Brand Constants) | [DONE] — Source exists | Brand constants defined in plan lines 617-642 |
| Output synthesis file | [MISSING] | `layer-33-format-requirements.md` is 0 bytes |

**Overall: 1/8 plan requirements met. 3/8 partial. 2/8 missing. 2/8 blocked.**

---

## 2. SPECIFIC GAPS WITH FILE REFERENCES

### GAP 1 (BLOCKER): Layer 33 Synthesis File Does Not Exist [CRITICAL]

**What's missing:** The output file `/root/projects/brightkidco/outputs/diagnosis/layer-33-format-requirements.md` does not exist. No round outputs (R1 through R5) exist either. This means Layer 33 has never been executed.

**Impact:** Every downstream email creation task that references Layer 33 for format specifications will have nothing to read. This is a blocker for the entire email writing pipeline.

**Recommendation:** Execute R1 through R5 for Layer 33 before this gap analysis can be considered complete. At minimum, R1 (client file extraction) and R6 (final synthesis) are needed.

---

### GAP 2 (BLOCKER): Layer 32 Prototype Patterns Missing [CRITICAL]

**What's missing:** `/root/projects/brightkidco/outputs/diagnosis/layer-32-prototype-patterns.md` does not exist. The plan specifies Layer 33 must cross-reference Layer 32 for existing email patterns.

**Impact:** Without Layer 32, the format requirements synthesis cannot validate whether the required format matches what already works in existing BrightKidCo email prototypes. Pattern-vs-specification conflicts will go undetected.

**Recommendation:** Layer 32 must be completed before Layer 33 can be finalized. If time-constrained, at minimum extract the structural patterns from the HTML email files in `/root/projects/brightkidco/docs/bightkidco.com/` and include them as an appendix.

---

### GAP 3 (HIGH): No Subject Line Specification with Character Limits [HIGH]

**What's missing:** The plan description (line 573-575) says "Subject lines section provides 3 options marked as A/B test ready." DOC1 does not specify:
- Character count limits for subject lines (mobile vs desktop)
- A/B testing methodology (what to test, sample sizes, significance thresholds)
- Subject line formulas per flow type (Welcome vs Cart vs Post-Purchase)
- Emoji usage rules (allowed? which? when?)

**Source reference:** DOC1 has no dedicated subject line section. The verbatim language bank (DOC1 §7, line 389+) provides raw phrases but no formatting guidance.

**Impact:** Email writers will guess at subject line length, potentially truncating on mobile (35-40 char visible) or writing too generic.

**Recommendation:** Add subject line specification section to synthesis:
- Mobile: 35-40 characters max visible
- Desktop: 60-65 characters max visible
- 3 A/B variants per mail: curiosity hook, symptom hook, social proof hook
- No emoji in Phase 1 (too early, too casual for the audience's emotional state)
- Specific formulas per flow type

---

### GAP 4 (HIGH): No Preheader Specification [HIGH]

**What's missing:** The plan says "Preheaders section provides 3 options." No source material defines:
- Preheader character limits (40-130 chars depending on client)
- Preheader strategy (complement vs extend vs contrast with subject)
- Whether preheaders are visible in the email body or hidden

**Source reference:** Neither DOC1 nor DOC6 mention preheaders at all.

**Impact:** Preheaders are the second-highest-impact element after subject lines. Without specification, writers will either skip them or write them inconsistently.

**Recommendation:** Add preheader specification:
- 40-100 characters (safe across all major clients)
- Must complement (not repeat) the subject line
- 3 variants per mail matching subject line A/B groups
- Never display in email body (use hidden preheader technique)

---

### GAP 5 (HIGH): No Email Section Structure Template [HIGH]

**What's missing:** The plan says "The mail body is structured by sections." DOC1 §23 (line 1523-1553) provides do's and don'ts but does NOT define:
- How many sections per email
- Section naming conventions
- Section order (hook → mechanism → proof → CTA?)
- Section length guidelines (words per section)
- When to use images vs text-only
- CTA button placement rules (primary CTA position, secondary CTA rules)

**Source reference:** DOC1 §23 provides behavioral rules (open with symptom, acknowledge failures first) but not structural templates. DOC6 §4 provides a "Universal Prompt Template" (line 69+) but it's for Claude prompts, not email HTML structure.

**Impact:** Without a section template, every email will have different structure, creating inconsistent reading experience across the flow.

**Recommendation:** Define a standard email section template:
1. Hook (1-2 sentences — symptom recognition)
2. Validation (2-3 sentences — "you did nothing wrong")
3. Mechanism/Information (3-5 sentences — the "why")
4. Evidence/Story (2-4 sentences — peer proof)
5. CTA Block (soft CTA + permission not to buy)
6. Lena Sign-Off (2-3 sentences + P.S.)

With word count ranges per section and per email type.

---

### GAP 6 (HIGH): Mobile-First Design Specifications Incomplete [HIGH]

**What's missing:** The plan mentions "Mobile-First Notes describe layout and length considerations." DOC1 §25 (line 1630+) provides visual cues for hero images but does NOT specify:
- Email width (600px standard? 640px?)
- Font size minimums for mobile (14px body? 16px?)
- Touch target minimums for CTA buttons (44x44px?)
- Single-column vs multi-column rules
- Image-to-text ratio for deliverability
- Dark mode rendering considerations

**Source reference:** DOC1 §25 covers hero images and visual cues but not technical mobile specifications. DOC6 has no mobile-specific guidance.

**Impact:** HTML email builders will use default template settings rather than mobile-optimized specifications. 65% of the audience (US) primarily reads on mobile.

**Recommendation:** Add mobile-first specification section:
- Max width: 600px
- Body font: 16px minimum (Questrial 400)
- CTA buttons: 48px height minimum, full-width on mobile
- Single-column layout for all content sections
- Image-to-text: 60/40 ratio max for deliverability
- Dark mode: use `prefers-color-scheme` media query, test all brand colors

---

### GAP 7 (HIGH): Klaviyo Implementation Notes Missing per Mail Type [HIGH]

**What's missing:** The plan says "Klaviyo Implementation Notes cover trigger setup, exit conditions, and segment filters." DOC1 §19 (line 1266+) provides flow-level triggers but NOT:
- Per-mail trigger conditions within a flow
- Time delay specifications between emails
- Conditional split logic per mail
- Suppression rules (which segments skip which mails)
- Dynamic content blocks per avatar level

**Source reference:** DOC1 §19 has a flow trigger summary table (line 1338-1348) but it's flow-level, not mail-level. Individual mail triggers within flows are not specified.

**Impact:** Klaviyo implementation requires per-mail specifications. Flow-level triggers are insufficient for building the actual automation.

**Recommendation:** For each email in the synthesis, add a Klaviyo Implementation Notes block:
- Trigger: specific event + delay
- Entry conditions: tags, properties
- Exit conditions: purchase, unsubscribe, flow conflict
- Suppression: which segments skip this mail
- Dynamic content: which blocks vary by avatar level

---

### GAP 8 (HIGH): `Claude-Project-Instructions.txt` Not Found [HIGH]

**What's missing:** The plan (line 1002) specifies reading `Claude-Project-Instructions.txt` as a source for format requirements. This file was not found in `/root/projects/brightkidco/docs/extracted/` or nearby directories.

**Source reference:** DOC6 §2 (line 66+) contains what appears to be the Claude Project Instructions embedded within the usage guide. It's possible this is the same content, but the standalone file is missing.

**Impact:** If the standalone file contains additional format requirements not in DOC6, those requirements are lost.

**Recommendation:** Verify whether DOC6 §2 IS the Claude Project Instructions. If yes, note the equivalence in the synthesis. If no, locate the standalone file.

---

### GAP 9 (MEDIUM): No CTA Specification per Flow Type [MEDIUM]

**What's missing:** DOC1 §23 says "End with peer-to-peer Lena moment + soft CTA" and "End mails with hard-sell CTAs" is forbidden. But no source specifies:
- CTA button text per flow type
- CTA button color/brand guidelines
- Primary vs secondary CTA rules
- CTA placement (inline text link vs button vs both)
- When to use "Shop Now" vs "Learn More" vs "See How It Works"

**Source reference:** DOC1 §16 (pop-up) uses "Shop Now" and "Get My 10% Code" but these are pop-up CTAs, not email CTAs.

**Impact:** CTA inconsistency across flows reduces click-through rates and creates jarring experience.

**Recommendation:** Define CTA hierarchy:
- Welcome Flow: "See How It Works" (E1-E2), "Try It Risk-Free" (E3), "Shop Now" (E4+)
- Cart Abandonment: "Complete Your Order" (E1), "Come Back to Cart" (E2)
- Post-Purchase: "Get the Bundle" (upsell), "Tell Us About [Child]" (level detection)
- Brand Green (#039902) button, white text, 48px height

---

### GAP 10 (MEDIUM): No Email Length Guidelines per Flow Position [MEDIUM]

**What's missing:** No source specifies how long each email should be:
- Word count ranges per email
- Reading time targets
- Length rules per phase (Phase 2 vs Phase 3 vs Phase 4)
- When to use short-form vs long-form

**Source reference:** DOC1 §23 provides structural do's/don'ts but no word counts. The overnight plan has no length specifications.

**Impact:** Without length guidelines, Welcome E1 could be 200 words or 800 words. Inconsistent length across a flow creates reader fatigue.

**Recommendation:** Define length tiers:
- Short (150-250 words): Transactional, Cart E1, Welcome E1
- Medium (300-450 words): Most Welcome emails, Post-Purchase
- Long (500-700 words): Mechanism explanation, Last Day, Founder Story
- Phase 3/4 emails: always Short or Medium (decision fatigue per L31 findings)

---

### GAP 11 (MEDIUM): Cross-Layer Conflict — Lena Voice Rules vs Email Format [MEDIUM]

**What's missing:** DOC1 §13 (Lena Voice) specifies sign-off variants (short/medium/long) but does NOT specify which variant goes with which email type beyond examples. The plan (Layer 33) says "The Lena Sign-Off is 2-3 sentences maximum" but DOC1 §13 shows medium and long variants that exceed 3 sentences.

**Source reference:** 
- DOC1 §13 (line 906-927): 3 sign-off variants, short is 4 lines, medium is 6 lines, long is 7 lines
- Plan line 575: "Lena Sign-Off is 2-3 sentences maximum"

**Impact:** Contradictory guidance. Writers will either follow DOC1 (longer sign-offs) or the plan (shorter), creating inconsistency.

**Recommendation:** Resolve the contradiction. Likely: the plan's "2-3 sentences" refers to the sign-off BODY, not including the P.S. and name line. Clarify in synthesis: "Sign-off body: max 3 sentences. P.S.: max 2 lines. Name line: always included."

---

### GAP 12 (MEDIUM): No Image/Visual Specification per Email Type [MEDIUM]

**What's missing:** DOC1 §25 (line 1630+) provides hero image guidance but does NOT specify:
- When images are required vs optional per email type
- Image dimensions and aspect ratios
- Alt text requirements
- Image loading behavior (lazy load? inline?)
- Product image placement rules

**Source reference:** DOC1 §25 covers hero image do's (real parents, soft lighting) but not technical specs.

**Impact:** Image inconsistency across emails. Some may be image-heavy, others text-only.

**Recommendation:** Add image specification per email type:
- Welcome E1: No hero image (text-only, intimate feel)
- Mechanism emails: 1 diagram/illustration max
- Cart/Checkout: Product image required
- Post-Purchase: Unboxing/lifestyle images
- All images: alt text mandatory, max 200KB, JPG preferred

---

### GAP 13 (LOW): No Font Stack Fallback Specification [LOW]

**What's missing:** Layer 38 specifies "Questrial weight 400 only" but does NOT specify:
- Fallback font stack for email clients that don't support Google Fonts
- Font rendering for Outlook (which ignores @import)
- Bold/italic rules (the plan says "never bold for body text" — does this apply to headings too?)

**Source reference:** Layer 38 (plan line 629): "Font: Questrial weight 400 only. Never bold for body text."

**Impact:** Minor — most email clients support web fonts or have reasonable fallbacks. But Outlook (still 10%+ of B2C) will render Times New Roman without a fallback stack.

**Recommendation:** Add font stack: `font-family: 'Questrial', 'Helvetica Neue', Helvetica, Arial, sans-serif;`

---

### GAP 14 (LOW): No Dark Mode Color Mapping [LOW]

**What's missing:** Layer 38 defines brand colors (Green #039902, Mint #DBFFCD, Cream #FBF7EB, Yellow #F5C84B, Gray #9AA8A7) but dark mode inverts these. Mint on dark background becomes illegible. Yellow may disappear.

**Source reference:** Layer 38 (plan line 631).

**Impact:** Low priority for Phase 1 launch but will matter as open rates grow on Apple Mail and Outlook dark mode.

**Recommendation:** Add dark mode overrides for key colors. At minimum: `@media (prefers-color-scheme: dark)` block for brand green and cream backgrounds.

---

## 3. CROSS-LAYER CONFLICT DOCUMENTATION

### Conflict 1: Layer 33 vs Layer 32 — Missing Cross-Reference

Layer 33 requires cross-referencing Layer 32 (Prototype Patterns). Layer 32 does not exist. This means the format requirements cannot be validated against what actually works in existing BrightKidCo emails.

**Resolution:** Complete Layer 32 first, or at minimum extract structural patterns from the HTML files.

### Conflict 2: Layer 33 vs Layer 9 — Sign-Off Length Contradiction

Layer 9 (Lena Voice) defines sign-off variants with 4-7 lines. Layer 33 plan says "2-3 sentences maximum." These are contradictory.

**Resolution:** Clarify that "2-3 sentences" = sign-off body only, excluding P.S. and name line.

### Conflict 3: Layer 33 vs Layer 38 — Font Specification Gaps

Layer 38 specifies Questrial 400 but Layer 33 (per plan) should include "Mobile-First Notes." The font spec doesn't address mobile font sizes, line heights, or fallback stacks.

**Resolution:** Layer 33 must EXTEND Layer 38's font spec with mobile-specific values.

### Conflict 4: Layer 33 vs Layer 37 — Klaviyo Granularity Mismatch

Layer 37 (Klaviyo Setup) provides flow-level triggers. Layer 33 plan says "Klaviyo Implementation Notes cover trigger setup, exit conditions, and segment filters" per mail. These operate at different granularities.

**Resolution:** Layer 33 should provide per-mail Klaviyo specs that reference Layer 37's flow-level specs.

---

## 4. PRIORITIZED GAP-FILL RECOMMENDATIONS

| Priority | Gap | Action | Blocks |
|---|---|---|---|
| P0 | #1 Synthesis missing | Execute R1-R5, produce synthesis | All downstream email creation |
| P0 | #2 Layer 32 missing | Execute Layer 32 or extract patterns | Layer 33 cross-reference |
| P1 | #3 Subject line spec | Add subject line section with char limits, formulas | Email writing |
| P1 | #4 Preheader spec | Add preheader section with strategy | Email writing |
| P1 | #5 Section template | Define standard email structure | Email consistency |
| P1 | #6 Mobile specs | Add mobile-first technical specs | HTML email building |
| P1 | #7 Klaviyo per-mail notes | Add per-mail implementation specs | Klaviyo setup |
| P1 | #8 Claude-Project-Instructions.txt | Locate file or confirm DOC6 equivalence | Completeness |
| P2 | #9 CTA specification | Define CTA hierarchy per flow | Click-through rates |
| P2 | #10 Length guidelines | Define word count tiers per email type | Reader experience |
| P2 | #11 Sign-off contradiction | Resolve 2-3 sentence vs multi-line conflict | Voice consistency |
| P2 | #12 Image specification | Define image rules per email type | Visual consistency |
| P3 | #13 Font fallback | Add fallback font stack | Outlook rendering |
| P3 | #14 Dark mode colors | Add dark mode overrides | Dark mode readers |

---

## 5. OVERALL QUALITY ASSESSMENT

**Source Material Quality: 72/100**

DOC1 provides strong foundational guidance across 25+ sections. The brand voice, structural do's/don'ts, visual cues, and flow overview are well-defined. However, format-specific technical details (subject lines, preheaders, mobile specs, CTA rules, email length) are either missing or scattered across sections without a unified format specification.

DOC6 provides the deployment framework and Claude project instructions but lacks email format specifics.

**Synthesis Completeness: 0/100**

The synthesis file does not exist. No round outputs exist. Layer 33 has never been executed.

**Combined Assessment: 15/100**

The source materials contain ~70% of what's needed, but the synthesis has never been produced. The gaps in source materials (subject line specs, preheader specs, mobile technical specs, CTA rules, length guidelines) are exactly the kind of details that R2 (skill loading) and R3 (wiki extraction) would fill — but those rounds were never run.

**Bottom line:** Layer 33 is the format backbone for all 110+ emails. It does not exist yet. Every downstream email creation task will either guess at format requirements or re-derive them independently, creating inconsistency. Layer 33 must be executed from R1 through R6 before email writing begins.
