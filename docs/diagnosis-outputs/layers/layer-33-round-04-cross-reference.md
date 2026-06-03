# Layer 33 Round 4: Email Format Requirements — Cross-Reference

**Type:** Cross-Reference (R4)
**Generated:** 2026-05-25
**Sources:** L33 (Email Format Requirements), L29 (Visual Calibration), L9 (Voice — Lena), L38 (Brand Constants), DOC1, DOC6
**Note:** L33 R1-R3 output files do not exist yet. L32 (Prototype Patterns) output file does not exist. L38 output file does not exist. Cross-reference performed using source documents directly.

---

## 1. CROSS-REFERENCE MAP

| Source Layer | Target Layer | Connection Type | Description |
|---|---|---|---|
| L33 (Format) | L9 (Voice) | FORMAT-VOICE ALIGNMENT | Sign-off format (2-3 sentences max, P.S. 2 lines max) directly constrains L9 voice rules V2 |
| L33 (Format) | L9 (Voice) | FORMAT-VOICE ALIGNMENT | Subject line structure (3 A/B options) must reflect L9 forbidden/approved phrase catalogs |
| L33 (Format) | L9 (Voice) | FORMAT-VOICE ALIGNMENT | Preheader structure (3 options) must use L9 word choice catalog (Section 7) |
| L33 (Format) | L29 (Visual) | FORMAT-VISUAL ALIGNMENT | Mobile-first notes section must comply with L29 §9 technical standards (600px max, 480px breakpoint) |
| L33 (Format) | L29 (Visual) | FORMAT-VISUAL ALIGNMENT | CTA format constraints must align with L29 button specs (48px min height, full-width mobile) |
| L33 (Format) | L29 (Visual) | FORMAT-VISUAL ALIGNMENT | Image usage in format must follow L29 §1.4 universal image rules |
| L33 (Format) | L38 (Brand Constants) | FORMAT-BRAND ALIGNMENT | Pricing display must match L38 exact notation ($34.99, 3+3 FREE, 5+5 FREE) |
| L33 (Format) | L38 (Brand Constants) | FORMAT-BRAND ALIGNMENT | Footer structure must match L38: Shop · Parent Stories · Contact us · FAQ |
| L33 (Format) | L38 (Brand Constants) | FORMAT-BRAND ALIGNMENT | Sender identity format must match L38: "Lena from BrightKidCo" / support@brightkidco.com |
| L33 (Format) | L38 (Brand Constants) | FORMAT-BRAND ALIGNMENT | Guarantee language must be 60-day (never 30) per L38 |
| L33 (Format) | L32 (Prototypes) | FORMAT-PATTERN GAP | L32 output does not exist — cannot verify format alignment with existing prototype patterns |
| L33 (Format) | L3 (Emotional Phases) | FORMAT-PHASE ALIGNMENT | Tonality calibration per flow stage (DOC1 §21) determines which format elements apply per phase |
| L33 (Format) | L4 (Avatar Levels) | FORMAT-LEVEL ALIGNMENT | Avatar tag in format header (avatar_level1/2/3/general) determines content calibration |
| L33 (Format) | L8 (Segmentation) | FORMAT-SEGMENTATION ALIGNMENT | Klaviyo implementation notes in format must match L8 trigger/exit condition specs |

---

## 2. ALIGNMENT FINDINGS

### 2.1 L33 Format ↔ L9 Voice Alignment

**Sign-Off Format Constraint:**
- L33 specifies: "Lena Sign-Off is 2-3 sentences maximum"
- L9 V2 specifies: "Every mail ends with Lena sign-off (max 2-3 sentence body + max 2 lines P.S.)"
- ALIGNMENT: Perfect match. Both sources agree on the exact constraint.
- L9 provides 3 sign-off variants (short/medium/long) that all comply with L33's format requirement.

**Subject Lines:**
- L33 specifies: "3 options marked as A/B test ready"
- L9 forbidden phrases (§5) constrain what can appear in subject lines
- L9 approved phrases (§6) provide subject line building blocks
- ALIGNMENT: L33 format structure + L9 voice rules = subject lines must be 3 A/B options, each avoiding forbidden phrases, using approved language patterns

**Preheaders:**
- L33 specifies: "3 options"
- L9 word choice catalog (§7) constrains preheader vocabulary
- ALIGNMENT: Preheaders must use L9 word substitutions (e.g., "support" not "fix", "body-signal learning" not "training")

**Mail Body Structure:**
- L33 specifies: "structured by sections"
- DOC1 §23 structural do's: open with symptom, validate failures, 3-5 scenarios, Lena as trust anchor
- L9 core formula: OBSERVATION → VALIDATION → MECHANISM → PERMISSION
- ALIGNMENT: Body sections must follow L9's 4-step formula while respecting L33's section structure

### 2.2 L33 Format ↔ L29 Visual Alignment

**Mobile-First Notes Section:**
- L33 specifies a "Mobile-First Notes" section in every email output
- L29 §9.1: max width 600px, mobile breakpoint 480px
- L29 §9.2: buttons 44px min height, full-width mobile
- L29 §9.3: total email weight <500KB, <10 images
- ALIGNMENT: Mobile-first notes must reference L29 technical specs as the standard

**CTA Format:**
- L33 format includes CTA elements in body structure
- L29 §2.5/§3.5/§4.5: level-specific CTA calibration (L1 medium-aggressive, L2 restrained, L3 minimal)
- ALIGNMENT: CTA format must vary by avatar level — not a single format for all

**Layout Pattern Selection:**
- L29 §9.5 defines 4 layout patterns: CTA Tunnel, Value Ladder, Product Gallery, Narrative Arc
- L33 format needs to specify which pattern applies per flow type
- ALIGNMENT: Welcome flow → Value Ladder; Flash sales → CTA Tunnel; Educational → Narrative Arc

### 2.3 L33 Format ↔ L38 Brand Constants Alignment

**Pricing Display:**
- L33 format includes pricing in mail body
- L38 specifies exact notation: "$34.99", "3 + 3 FREE", "$79.99", "5 + 5 FREE", "$119.99"
- DOC6 §5: "$ symbol before number", "Period before cents", "Bundle notation with spaces around +", "FREE always in caps"
- ALIGNMENT: Perfect match across all three sources

**Footer Format:**
- L33 format includes footer section
- L38 specifies: Shop · Parent Stories · Contact us · FAQ (exact order)
- L38 specifies: Instagram · TikTok (no Facebook)
- L38 specifies: "16,511 reviews · 4.9 ★ — 100,000+ parents trust BrightKidCo"
- ALIGNMENT: Footer is locked — no variation permitted

**Sender Identity:**
- L33 format includes sender info
- L38 specifies: From "Lena from BrightKidCo" <support@brightkidco.com>, Reply-To support@brightkidco.com
- ALIGNMENT: Locked — no variation

**Discount Code:**
- L38 specifies: WELCOME10 (code), auto-apply link format
- DOC6 §5: "10%OFF-BKCO" (different code listed — CONFLICT, see §3.1)
- ALIGNMENT: Partial — code discrepancy between sources

### 2.4 L33 Format ↔ Cross-Level Rules (DOC1 §22)

**Format must encode cross-level calibration rules:**
- Rule 1: Symptom description over level label — format headers must use symptom, not "Level X"
- Rule 2: 3-5 recognition anchors per mail — format body must include recognition block
- Rule 3: Age ranges not fixed ages — format must use "3 to 10+" not "for 5-year-olds"
- Rule 4: Verbal/non-verbal inclusivity — format examples must include both
- Rule 5: Timeline flexibility — format must use ranges, not fixed promises
- Rule 6: Success metrics low bar — format must define wins as mini-wins

---

## 3. CONFLICT FLAGS

### 3.1 Discount Code Discrepancy (L38 vs DOC6)

**CONFLICT:** Two different discount codes appear in the source documents:
- DOC6 §5: Code = `10%OFF-BKCO`, Auto-apply = `brightkidco.com/discount/10%25OFF-BKCO`
- Overnight Plan §38 / DOC6 §2: Code = `WELCOME10`, Auto-apply = `brightkidco.com/discount/10%25OFF-WELCOME`

**Impact on L33 Format:** The format template must specify which discount code to use. Currently ambiguous.
**Resolution needed:** Verify with client which code is active in Klaviyo. Until resolved, format should note both as options.

### 3.2 Questrial Font vs Email Client Compatibility

**CONFLICT:**
- L38 specifies: "Font: Questrial weight 400 only"
- L29 §9.4 specifies: "System fonts only (Arial, Helvetica, sans-serif). Questrial does NOT work in Gmail or Outlook."
- L29 §1.2: "Email-safe fallback: Arial, Helvetica, sans-serif (Questrial fails in Gmail/Outlook)"

**Impact on L33 Format:** The format template must specify font stack as `Questrial, Arial, Helvetica, sans-serif` — brand font with system fallback. Body text in email HTML must use system fonts; Questrial only for clients that support web fonts.

**Resolution:** L29 correctly identifies the constraint. Format must use `font-family: Questrial, Arial, Helvetica, sans-serif` with explicit fallback. Body text rendered in Arial/Helvetica in Gmail/Outlook.

### 3.3 "Guaranteed" in Offer Tags vs Voice Rules

**CONFLICT:**
- L38/DOC6 offer tags include: "Save 40% TODAY", "Save 60% TODAY" — urgency language
- L9 V5 forbids: "guaranteed" — but the offer tags use outcome-adjacent language
- L9 §5.3 forbids: "You only have X days!" as manipulative urgency

**Impact on L33 Format:** Format must ensure offer tags don't cross into forbidden territory. "Save 40% TODAY" is acceptable (it's a factual discount claim, not an outcome promise). But format must NOT add "limited time" or countdown-style urgency to these tags.

**Resolution:** Acceptable as-is. Offer tags are factual price claims, not outcome promises.

### 3.4 Exclamation Marks in Format Templates

**CONFLICT:**
- DOC1 §23 forbids: "Use exclamation marks in body text (signals marketing)"
- DOC6 output format template uses: "Mail: [Flow Name] – [Mail Position]" with subject line options that may include exclamation marks

**Impact on L33 Format:** The format template itself must not use exclamation marks in body text sections. Subject lines and preheaders are exempt (they are display, not body).

**Resolution:** Exclamation marks forbidden in body text. Allowed in subject lines/preheaders only if they don't violate L9 voice rules.

### 3.5 Trustpilot Reference Inconsistency

**CONFLICT:**
- L38: "NO Trustpilot links (no page exists)"
- L29 §1.5 footer: Same — no Trustpilot
- DOC1 §20: Same — no Trustpilot
- All three agree, but format template must explicitly exclude Trustpilot from any social proof section

**Resolution:** No actual conflict — all sources agree. Format must hardcode "no Trustpilot" as a rule.

---

## 4. DEPENDENCY CHAIN

### 4.1 Format Dependencies (What L33 Requires FROM Other Layers)

| Dependency | Required By | Status | Impact if Missing |
|---|---|---|---|
| L9 Voice Rules (V1-V24) | Subject lines, preheaders, body, sign-off | AVAILABLE | Format would lack tonal constraints |
| L9 Forbidden Phrases (§5) | All text elements | AVAILABLE | Risk of trust-breaking language |
| L9 Sign-Off Variants (§8) | Sign-off section | AVAILABLE | Inconsistent sign-off formatting |
| L29 Technical Standards (§9) | Mobile-first notes, image specs | AVAILABLE | Email rendering failures |
| L29 Button Specs (§9.2) | CTA elements | AVAILABLE | Tap target failures on mobile |
| L29 Layout Patterns (§9.5) | Body structure | AVAILABLE | Wrong layout for flow type |
| L38 Brand Constants | Pricing, URLs, sender, footer | AVAILABLE (in docs) | Brand inconsistency |
| L32 Prototype Patterns | Format pattern validation | NOT AVAILABLE | Cannot verify format matches existing prototypes |
| L38 Output File | Verified brand constants | NOT AVAILABLE | Using doc-level constants, not verified against live site |

### 4.2 Format Outputs (What Other Layers Need FROM L33)

| Output | Needed By | Purpose |
|---|---|---|
| Email output template structure | All flow-building tasks | Standard deliverable format |
| Subject line format (3 A/B) | A/B testing setup | Klaviyo split-test configuration |
| Preheader format (3 options) | Open rate optimization | Preview text optimization |
| Sign-off format (2-3 sentences) | L9 voice enforcement | Consistent Lena identity |
| Mobile-first notes format | L29 visual implementation | Responsive design compliance |
| Klaviyo implementation notes format | L37 Klaviyo setup | Technical flow configuration |
| Quick-reference checklist format | QA process | Pre-send verification |

### 4.3 Critical Path

```
L38 Brand Constants (pricing, URLs, colors, sender)
    ↓
L9 Voice Rules (forbidden phrases, approved phrases, sign-off variants)
    ↓
L29 Visual Calibration (technical standards, button specs, layout patterns)
    ↓
L33 FORMAT REQUIREMENTS (email output template)
    ↓
All flow-building tasks (Welcome, Cart, Browse, Post-Purchase, etc.)
```

L33 is a GATEWAY layer — every downstream email task depends on its format template being correct.

---

## 5. GAPS EXPOSED BY CROSS-REFERENCING

### 5.1 Missing L32 Prototype Patterns

**Gap:** L32 (Prototype Patterns) output file does not exist. Without it, L33 cannot verify that its format requirements match the structure of existing email prototypes. If prototypes exist in HTML form, L33 format should be reverse-engineered from them.

**Impact:** Format template may not match what has already been built.

**Recommendation:** Create L32 from existing prototype HTML files before finalizing L33.

### 5.2 Missing L38 Verified Brand Constants

**Gap:** L38 output file does not exist. Brand constants are extracted from DOC1, DOC6, and the overnight plan, but NOT verified against the live brightkidco.com website. URLs, pricing, and product names may have changed since the docs were written.

**Impact:** Format template may embed stale brand constants.

**Recommendation:** Verify all L38 constants against brightkidco.com before using in production emails.

### 5.3 Format Template Does Not Specify Level-Specific Variations

**Gap:** L33 format description in the overnight plan (§33) describes a SINGLE format template. But L29 visual calibration and L9 voice rules both require level-specific variations (L1 vs L2 vs L3 vs General). The format template needs level-specific variants or explicit notes on where level calibration applies.

**Impact:** Without level-specific format notes, email builders may use a one-size-fits-all approach that violates L29/L9 calibration rules.

**Recommendation:** Extend L33 format to include a "Level Calibration Notes" section specifying which format elements vary by avatar level.

### 5.4 No SMS Format Specified

**Gap:** L9 V24 specifies SMS format: "Hey [Name], [symptom hook]. [CTA link]. -Lena" Max 160 chars. L33 only covers email format. SMS is a separate channel with different constraints.

**Impact:** SMS messages may not follow a standardized format.

**Recommendation:** Add SMS format template to L33 or create a separate L33-SMS spec.

### 5.5 No Dark Mode Format Guidance

**Gap:** L29 §9.6 QA checklist mentions "Dark mode rendering verified" but L33 format does not include dark mode notes. Modern email clients (Apple Mail, Gmail) default to dark mode for 30-40% of users.

**Impact:** Emails may render poorly in dark mode (invisible text, broken contrast).

**Recommendation:** Add dark mode rendering notes to L33 format template.

### 5.6 Quick-Reference Checklist Not Integrated Into Format

**Gap:** DOC6 §6 provides a comprehensive pre-send checklist (Voice, Avatar, Structure, Output, Brand Constants, RS-Integration). L33 format does not reference this checklist as part of the deliverable.

**Impact:** Email builders may skip QA steps.

**Recommendation:** Embed the DOC6 §6 checklist into L33 format as a final verification step.

---

## 6. FORMAT REQUIREMENTS SUMMARY (Derived from Cross-Reference)

### 6.1 Email Output Template (Standard Deliverable)

```
Mail: [Flow Name] – [Mail Position]
Avatar: [Level]
Send Timing: [Day X / Hour Y]

--Subject Lines (A/B test ready):
1. [Option 1 — must comply with L9 forbidden phrases]
2. [Option 2]
3. [Option 3]

Preheaders:
1. [Option 1 — must comply with L9 word choice catalog]
2. [Option 2]
3. [Option 3]

--Mail Body:
[Structured by sections — must follow L9 4-step formula: 
 Observation → Validation → Mechanism → Permission]
[Must include 3-5 recognition anchors per DOC1 §22 Rule 2]
[Must use symptom language, not level labels per DOC1 §22 Rule 1]
[Must use age ranges, not fixed ages per DOC1 §22 Rule 3]

--Lena Sign-Off:
[2-3 sentences max — must use L9 sign-off variants §8]
[P.S. max 2 lines]

--Mobile-First Notes:
[Must reference L29 §9 technical standards]
[600px max width, 480px breakpoint, <500KB total weight]

--Klaviyo Implementation Notes:
[Trigger setup per L37]
[Exit conditions: purchase, unsubscribe, higher-priority flow]
[Segment filters per L8]

--Level Calibration Notes:
[L1: 70% hope, medium-aggressive CTAs, urgency allowed]
[L2: 40% hope, restrained CTAs, science-adjacent]
[L3: 20% hope, minimal CTAs, dignity-first, no urgency]
[General: 50/50, "Whether...Or...If..." pattern]
```

### 6.2 Format Validation Checklist (from DOC6 §6)

VOICE:
- [ ] Sounds like Lena, not Brand?
- [ ] No marketing phrases ("easy", "miracle", "cure")?
- [ ] Failed methods validated before mechanism?

AVATAR:
- [ ] Tonality calibration correct? (L1: 70%, L2: 40%, L3: 20%, GF: 50/50)
- [ ] Symptom cluster matches the level?
- [ ] Forbidden phrases checked?

STRUCTURE:
- [ ] Open with symptom recognition?
- [ ] 3-5 specific scenarios?
- [ ] 5 Big Levers or level-specific applied?
- [ ] Permission-Not-To-Buy included?

OUTPUT:
- [ ] 3 Subject Lines + 3 Preheaders?
- [ ] Klaviyo Implementation Notes?
- [ ] Lena Sign-Off (max 2-3 sentences)?

BRAND CONSTANTS:
- [ ] Pricing correct? ($34.99 / $79.99 / $119.99)
- [ ] 60-Day (not 30)?
- [ ] Reviews count correct? (16,511 · 4.9★)
- [ ] NO Trustpilot links?
- [ ] Footer links correct? (Shop · Parent Stories · Contact us · FAQ)

RS-INTEGRATION:
- [ ] 2-4 verbatim quotes from RS used?
- [ ] Quotes cited informally?
- [ ] NO fabricated quotes or testimonials?

---

## 7. DEPENDENCY SUMMARY

**L33 depends on:**
- L9 (Voice) — for all text constraints, forbidden phrases, sign-off format
- L29 (Visual) — for technical email standards, button specs, layout patterns
- L38 (Brand Constants) — for pricing, URLs, colors, sender identity, footer
- L32 (Prototypes) — MISSING, needed for format pattern validation
- DOC1 §20 (Footer Standard), §23 (Structural Do's/Don'ts), §25 (Visual Cues)
- DOC6 §2 (Output Format), §5 (Brand Constants), §6 (Pre-Send Checklist)

**Downstream layers depend on L33 for:**
- Email output template structure
- Subject line / preheader format
- Sign-off format constraints
- Mobile-first specification
- Klaviyo implementation note format
- QA checklist integration
