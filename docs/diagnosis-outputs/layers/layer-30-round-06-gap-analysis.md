# Layer 30 Round 6: Anti-Fabrication — Gap Analysis

**Generated:** 2026-05-25
**Status:** COMPLETE
**Inputs Used:**
- R1 Client Files (403 lines, exhaustive extraction of 15 rules, 79 phrases, 6 claim categories, 8 quote rules, 6 sensitive areas)
- L01 Product Diagnosis (771 lines — competitor claims, scientific backing, pricing)
- L11 Objections (843 lines — 18 objections, 2,868+ parent mentions, copy snippets)

**Note:** R2-R5 and the synthesis (layer-30-anti-fabrication.md) were not produced in prior rounds. This gap analysis is based on the R1 extraction plus cross-layer context from L01 and L11.

---

## EXECUTIVE SUMMARY

The existing anti-fabrication framework is **strong on explicit prohibitions** (79 forbidden phrases, 6 banned claim categories, 15 core rules) but has **significant gaps in boundary conditions, enforcement mechanisms, and edge-case scenarios**. The rules were written for the IDEAL case — a copywriter who reads all documents carefully. They do not account for real-world degradation: prompt drift, ambiguous paraphrase boundaries, AI hallucination risks, post-purchase content, or cross-channel consistency.

**12 gaps identified. 4 High-risk, 5 Medium-risk, 3 Low-risk.**

---

## GAP 1: No Definition of "Tightly Paraphrased" — Paraphrase Boundary Is Undefined

**Risk Level:** HIGH
**Category:** Unclear Boundary

### The Problem

Rule 3 permits "paraphrase for length, keeping core meaning and voice." Rule 12 requires "30-50% authentic verbatim language or tightly paraphrased." But there is NO definition of where paraphrase ends and fabrication begins.

Consider: A real RS quote says "He started pausing and looking down. That tiny pause was HUGE." If a copywriter writes "He began noticing when he needed to go" — is that paraphrase or fabrication? The emotional specificity ("pause," "looking down") is lost. The mechanism detail is generalized. It SOUNDS like it could be a real parent quote but isn't.

### Why It's Dangerous

- AI language models will naturally generalize and "clean up" quotes, pushing past the paraphrase boundary without flagging it
- "Tightly paraphrased" is subjective — two reviewers will draw the line differently
- The rule against "rewriting into nicer English" (Rule 11) is clear in intent but vague in execution
- Combined with Rule 13 (2-4 quotes per mail), there's pressure to produce paraphrases when exact matches don't exist — creating a fabrication incentive

### Recommendation

Create a **Paraphrase Fidelity Scale** with explicit examples:

| Level | Description | Example | Allowed? |
|-------|-------------|---------|----------|
| 1 — Verbatim | Exact quote | "That tiny pause was HUGE" | ✅ Always |
| 2 — Light Edit | Minor grammar/tense change | "That tiny pause was huge" | ✅ Always |
| 3 — Compression | Shortened, core language preserved | "That pause was huge" | ✅ With note |
| 4 — Reframe | Same idea, different words | "He started noticing the signal" | ⚠️ Flag for review |
| 5 — Reconstruction | New sentence, inferred meaning | "He began recognizing body cues" | ❌ Fabrication |

---

## GAP 2: No Anti-Fabrication Rules for AI-Generated Content

**Risk Level:** HIGH
**Category:** Enforcement Gap

### The Problem

All 15 rules assume a HUMAN copywriter reading PDFs and writing copy. None address the scenario where an AI model (like the one generating this analysis) writes email copy. AI models have specific failure modes:

1. **Hallucinated quotes:** The model generates a plausible-sounding parent quote that doesn't exist in any RS PDF
2. **Confabulated statistics:** "92% of parents saw improvement" gets misremembered as "94%" or "9 out of 10"
3. **Source blending:** The model combines the SPARK stat (49%) with a Kelly Mahler quote into one sentence that implies a connection that doesn't exist
4. **Confident fabrication:** The model states a claim with high confidence that it cannot verify — e.g., "Dr. Sarah Mitchell recommends BrightKidCo for all autistic children"

### Why It's Dangerous

- AI-generated copy will increasingly be the norm for email production at scale
- Current rules say "don't fabricate" but don't specify HOW to verify when AI is the author
- There's no human-in-the-loop checkpoint defined between AI draft and send
- The "flag don't fabricate" protocol (Rule 4) assumes the copywriter KNOWS they don't have a source — AI doesn't always know what it doesn't know

### Recommendation

Add **AI-Specific Anti-Fabrication Protocol:**

1. Every AI-generated quote must be traceable to a specific RS PDF + page/line number
2. Every statistic must have a named source verifiable in the client files
3. AI drafts must pass a **Source Verification Checklist** before human review:
   - [ ] Every attributed quote has a file path reference
   - [ ] Every statistic matches the client file exactly (no rounding)
   - [ ] No claims are made that aren't in the approved claim inventory (L01 Section 9)
4. Human reviewer must verify quotes against RS PDFs before send

---

## GAP 3: Specialist Endorsement Boundaries Are Unprotected

**Risk Level:** HIGH
**Category:** Unaddressed Fabrication Scenario

### The Problem

L01 identifies 3 named specialists: Sarah Mitchell (BCBA), Dr. Michael Anderson (MD), and Mary S. (founder). The anti-fabrication rules cover quotes from RS PDFs and testimonials from DOC files — but there are NO rules about:

1. **Exaggerating specialist credentials:** Writing "Dr. Sarah Mitchell, leading autism researcher" when she's a BCBA, not a researcher
2. **Implying specialist endorsement of specific claims:** "Dr. Anderson confirms that BrightKidCo's 3-layer system trains body awareness in 2 weeks" — he never said that
3. **Creating new specialist quotes:** An AI or copywriter invents a quote from "a pediatric OT" who doesn't exist
4. **Extending endorsement scope:** Sarah Mitchell endorsed the product for comfort and awareness — not for potty training outcomes

### Why It's Dangerous

- Specialist endorsements are BKC's highest-trust asset (L01 Advantage 4)
- Fabricated or exaggerated specialist claims could trigger FTC endorsement guidelines
- The ASD parent audience is particularly sensitive to medical authority misuse
- One exposed fabrication from a "specialist" would damage trust more than any product claim

### Recommendation

Add **Specialist Endorsement Rules:**

1. Specialist quotes must come ONLY from the approved endorsement files (DOC 2/3/4/5 or BRAND_VOICE_GUIDE.md)
2. Never extend a specialist's endorsement beyond what they explicitly stated
3. Credential descriptions must be exact — no upgrading "BCBA" to "researcher" or "pediatrician"
4. New specialist quotes require written approval from the specialist
5. Any AI-generated specialist-adjacent language ("experts agree," "specialists recommend") must reference the specific named specialist, never generic authority

---

## GAP 4: Lena Persona Boundary Erosion

**Risk Level:** HIGH
**Category:** Unclear Boundary

### The Problem

Rule 10 states: "Lena's voice is the only fictional persona — and even she must stay within her defined profile (mom of two autistic sons, ages 6 and 8)." But:

1. **No rules for what Lena CAN'T say:** Can Lena reference specific products she "bought"? Can she describe her son's "progress"? Can she share "her" experience with specific BKC features?
2. **No boundary between Lena-as-narrator and Lena-as-testimonial:** If Lena says "my son started pausing when he felt wet" — is that a testimonial? It's fictional. It's persona voice. But it SOUNDS like a real parent review.
3. **Age drift risk:** Over multiple emails, a copywriter or AI may give Lena's sons different ages, different names, different details — creating inconsistencies that expose the fiction
4. **Scope creep:** Lena starts as narrator, becomes confidant, becomes testimonial source. Each step is small. The cumulative effect is a fabricated testimonial.

### Why It's Dangerous

- Lena is the ONLY approved fictional voice — if her boundary is unclear, the entire "no fabrication" rule has a loophole
- Parents in the ASD community are highly attuned to inauthenticity
- If Lena's "experiences" are indistinguishable from real testimonials, the anti-fabrication rule is functionally violated

### Recommendation

Create **Lena Persona Guardrails:**

1. Lena describes EMOTIONS and OBSERVATIONS, never specific product outcomes
2. Lena never says "my son did X after using BKC" — only "I know what it feels like when..."
3. Lena's biographical details are fixed and documented (sons' ages, names, key facts) — no drift allowed
4. Lena sign-off rules (already in B6) must include: no new biographical details without approval
5. Lena quotes must be distinguishable from real testimonials by format (e.g., always in first person, always in sign-off section, never in review/testimonial block)

---

## GAP 5: No Rules for Post-Purchase and Transactional Content

**Risk Level:** MEDIUM
**Category:** Unaddressed Fabrication Scenario

### The Problem

All anti-fabrication rules focus on **pre-purchase email copy** — welcome sequences, cart recovery, FAQ emails. But BKC also has:

1. **Post-purchase sequences** (mentioned in L01 P2 action: "Create post-purchase 7-day education sequence")
2. **Transactional emails** (order confirmation, shipping updates)
3. **Customer support templates**
4. **Social media content** (if emails are repurposed)

None of these have anti-fabrication rules. Post-purchase content is especially risky because:
- It may include "success story" quotes to encourage continued use
- It may reference product outcomes ("Your child should be showing progress by now")
- It may include medical/therapeutic guidance that isn't in the approved claim inventory

### Recommendation

Extend anti-fabrication rules to ALL customer-facing content, not just pre-purchase emails. Add a scope statement: "These rules apply to every piece of content that carries the BrightKidCo name, including post-purchase, transactional, support, and social content."

---

## GAP 6: Self-Reported Statistics Lack Qualification Language

**Risk Level:** MEDIUM
**Category:** Unclear Boundary

### The Problem

L01 identifies 6 self-reported statistics (92% body awareness, 87% reduced pull-up use, 94% less stressed, 97.6% would recommend, 82% ASD awareness, 14% needed longer). The rules require:

- Statistics must be sourced (Rule 7)
- Self-reported stats must be qualified: "in a survey of our customers"

But there are no rules for:
1. **How often qualification must appear:** Once per email? Every time the stat is cited?
2. **Whether qualification can be dropped in subject lines or preview text:** "92% of parents saw results" in a subject line has no room for "in a survey of our customers"
3. **Whether percentages can be rounded:** Is "92%" the same as "9 out of 10"? Is "87%" the same as "almost 90%"?
4. **Whether the sample size must be included:** "In a survey of 5,679 parents" vs. "In a survey of our customers"

### Recommendation

Create **Statistical Qualification Rules:**

1. Every self-reported stat MUST include "in a survey of our customers" or equivalent — even in subject lines
2. Rounding is allowed only UP to the nearest clean number if the actual stat is higher (92% → "9 out of 10" is OK; 87% → "9 out of 10" is NOT)
3. Sample size is optional but recommended for credibility
4. Subject lines using stats must pass the "FTC smell test" — would a regulator consider this misleading without context?

---

## GAP 7: Competitor Comparison Claims Are Unregulated

**Risk Level:** MEDIUM
**Category:** Unaddressed Fabrication Scenario

### The Problem

L01 contains extensive competitor data (Section 5) — pricing, features, guarantees. The email copy snippets in L11 reference competitor costs ("Pull-ups cost $876 a year"). But there are NO anti-fabrication rules for competitor claims:

1. **Can BKC claim competitors "block" body signals?** The word "block" implies intentional harm. Pull-ups absorb moisture — that's their design, not a malicious act.
2. **Can BKC claim competitors don't work?** "Pull-ups do nothing" (L11 copy) is a claim about a competitor's product effectiveness.
3. **Can BKC use competitor pricing without verification?** "$876 a year" for pull-ups — is this current? Verified? Based on what usage assumptions?
4. **Can BKC imply competitor products are harmful?** "Pull-ups are actively preventing learning" (L01) is a strong claim.

### Why It's Dangerous

- FTC has specific rules about comparative advertising — claims must be substantiated
- Pull-Ups (Huggies/Kimberly-Clark) has legal resources to challenge false claims
- The ASD community is tight-knit — attacking pull-ups could alienate parents who still use them

### Recommendation

Add **Competitor Comparison Rules:**

1. Competitor claims must be factually verifiable and current
2. Never attribute intent to competitors ("designed to block learning") — describe the mechanism difference instead
3. Pricing comparisons must include assumptions (usage rate, time period)
4. Use "the alternative" or "traditional options" rather than naming specific brands when possible
5. Never claim competitors are harmful — only that BKC's mechanism is different

---

## GAP 8: No Pre-Send Verification Checklist Is Enforced

**Risk Level:** MEDIUM
**Category:** Enforcement Gap

### The Problem

Rule 15 references a pre-send verification checklist that includes "NO fabricated quotes or testimonials?" But:

1. The checklist is mentioned, not defined — what exactly gets checked?
2. There's no documented verification PROCESS — who checks? Against what source files?
3. There's no PASS/FAIL criteria — what happens if a quote can't be traced?
4. There's no audit trail — no record of who verified what, when

### Recommendation

Create a **Formal Pre-Send Verification Protocol:**

```
PRE-SEND ANTI-FABRICATION CHECKLIST

□ Every attributed quote traced to RS PDF (file + approximate location)
□ Every statistic matches approved claim inventory (L01 Section 9)
□ No forbidden phrases present (check against B1-B7 lists)
□ No banned claims present (check against C1-C6 categories)
□ Self-reported stats properly qualified
□ Specialist quotes from approved sources only
□ Lena content stays within persona guardrails
□ No competitor claims that aren't factually verified
□ No outcome promises or timeline commitments
□ Universal symptom fallback used where no real quote exists

Verified by: _____________ Date: _____________
Source files checked against: _____________
```

---

## GAP 9: "Universal Symptom Descriptions" Are Not Defined

**Risk Level:** MEDIUM
**Category:** Unclear Boundary

### The Problem

Rule 9 states: "When in doubt, use the universal symptom descriptions instead of specific quotes." But the universal symptom descriptions are not defined in the anti-fabrication rules. They presumably exist in the BRAND_VOICE_GUIDE.md universal language library, but:

1. What qualifies as a "universal symptom description"?
2. Can a copywriter CREATE a symptom description, or must they use only the pre-approved ones?
3. Is "many autistic children struggle to feel body signals" a universal symptom description or a medical claim?
4. Who maintains the approved list?

### Recommendation

Define the **Universal Symptom Description Library** explicitly:
1. List all approved universal symptom descriptions in the anti-fabrication reference
2. Mark them as approved-for-use without source citation
3. Any NEW universal symptom description must be reviewed before use
4. Distinguish between "symptom descriptions" (observable, non-medical) and "medical claims" (requiring source citation)

---

## GAP 10: Cross-Channel Consistency Not Addressed

**Risk Level:** LOW
**Category:** Enforcement Gap

### The Problem

Anti-fabrication rules are written for EMAIL. But BKC's content ecosystem likely includes:
- Website copy (Shopify pages)
- Social media posts
- Ad copy (Facebook, Google)
- Influencer briefs
- Customer support scripts

Each channel may have different copywriters, different review processes, and different pressure to "punch up" claims. A social media post saying "92% of parents see results in 2 weeks!" without qualification would violate the rules — but the rules don't apply to social media.

### Recommendation

Extend the anti-fabrication scope to ALL customer-facing channels. Create channel-specific quick-reference cards with the most relevant rules for each format.

---

## GAP 11: No Rules for User-Generated Content Curation

**Risk Level:** LOW
**Category:** Unaddressed Fabrication Scenario

### The Problem

BKC has 16,511+ reviews (L01). If BKC curates, edits, or selectively quotes reviews in emails, the anti-fabrication rules don't cover:

1. **Selective quoting:** Cherry-picking the most positive sentences from a mixed review
2. **Review editing:** Correcting grammar in a quoted review (is this "light anonymization" or fabrication?)
3. **Context removal:** Quoting "These are great!" from a review that also says "...but they didn't help with poop"
4. **Review synthesis:** Combining themes from multiple reviews into one "representative" quote

### Recommendation

Add **Review Quoting Rules:**

1. Quoted reviews must be representative of the reviewer's overall sentiment
2. Grammar corrections are allowed only for readability, not to change meaning
3. Selective quoting must not remove context that changes the claim (e.g., a "but" clause)
4. Review synthesis (combining themes) must be noted internally, per Rule 3

---

## GAP 12: No Escalation Protocol for Ambiguous Cases

**Risk Level:** LOW
**Category:** Enforcement Gap

### The Problem

Rule 4 says "Flag it to Ayoub/Yurishizu instead of fabricating." But:

1. What counts as "ambiguous"? A copywriter might not realize a paraphrase has crossed the line
2. Is there a response time expectation? If the copywriter flags and waits 3 days, the campaign is delayed
3. What if Ayoub is unavailable? Is there a backup decision-maker?
4. Can the copywriter use the universal symptom fallback while waiting, or must they halt?

### Recommendation

Define the **Escalation Protocol:**

1. **Ambiguity triggers:** Quote can't be found in RS PDFs; paraphrase feels like it's changing meaning; statistic rounding exceeds 5%; specialist quote scope is unclear
2. **Response time:** 24 hours for quote verification; 4 hours for urgent campaign deadlines
3. **Backup:** If primary reviewer unavailable, use universal symptom fallback and flag for post-send review
4. **Document:** Every flagged item gets logged for pattern analysis (if copywriters are flagging the same type repeatedly, the rules need updating)

---

## PRIORITY-ACTIONED LIST

| Priority | Gap | Risk | Action |
|----------|-----|------|--------|
| P0 | Gap 2: AI Anti-Fabrication | HIGH | Add AI-specific verification protocol |
| P0 | Gap 3: Specialist Endorsement Boundaries | HIGH | Add specialist endorsement rules |
| P0 | Gap 4: Lena Persona Erosion | HIGH | Create Lena guardrails document |
| P1 | Gap 1: Paraphrase Boundary | HIGH | Create paraphrase fidelity scale with examples |
| P1 | Gap 8: Pre-Send Checklist | MEDIUM | Formalize verification protocol |
| P1 | Gap 9: Universal Symptom Definitions | MEDIUM | Define approved symptom description library |
| P2 | Gap 6: Stat Qualification Rules | MEDIUM | Create statistical qualification standards |
| P2 | Gap 7: Competitor Comparison | MEDIUM | Add competitor comparison rules |
| P2 | Gap 5: Post-Purchase Content | MEDIUM | Extend rules to all content types |
| P3 | Gap 11: UGC Curation | LOW | Add review quoting rules |
| P3 | Gap 10: Cross-Channel | LOW | Extend scope to all channels |
| P3 | Gap 12: Escalation Protocol | LOW | Define ambiguity escalation process |

---

## FILE METADATA

- **Output Path:** /root/projects/brightkidco/outputs/diagnosis/layer-30-round-06-gap-analysis.md
- **Inputs Read:** 3 of 7 (R1 exists; R2-R5 missing; L01 and L11 available)
- **Gaps Identified:** 12
- **Risk Breakdown:** 4 High, 5 Medium, 3 Low
- **Action Recommendations:** 12 (one per gap)
- **Generated by:** ops9 — 2026-05-25
