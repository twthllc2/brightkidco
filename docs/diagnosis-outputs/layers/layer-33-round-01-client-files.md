# Layer 33 — Email Format Requirements: Client File Exhaustion

**Type:** Final Synthesis (R1)
**Generated:** 2026-05-25
**Sources:** DOC1-MASTER-FOUNDATION.txt, DOC6-USAGE-GUIDE.txt, Claude-Project-Instructions.txt, overnight-plan.md (L33 section), layer-29-visual-calibration.md, layer-09-voice-lena.md
**Missing:** layer-32-prototype-patterns.md (file not produced yet)

---

## TABLE OF CONTENTS

1. [Master Output Format Template](#1-master-output-format)
2. [Naming Convention Rules](#2-naming-conventions)
3. [Subject Line Format (3 Options)](#3-subject-lines)
4. [Preheader Format (3 Options)](#4-preheaders)
5. [Mail Body Section Structure](#5-mail-body)
6. [Lena Sign-Off Guidelines](#6-lena-sign-off)
7. [Mobile-First Notes Format](#7-mobile-first)
8. [Klaviyo Implementation Notes Format](#8-klaviyo-implementation)
9. [Brand Constants (Locked Values)](#9-brand-constants)
10. [Visual Design Standards](#10-visual-standards)
11. [Voice Rules (Format-Level)](#11-voice-rules)
12. [Content Composition Rules](#12-content-composition)
13. [Structural Do's and Don'ts](#13-structural-dos-donts)
14. [Footer Standard](#14-footer)
15. [Sender Identity](#15-sender-identity)
16. [Conflicts and Ambiguities](#16-conflicts)

---

<a name="1-master-output-format"></a>
## 1. MASTER OUTPUT FORMAT TEMPLATE

The canonical format every email deliverable must follow. Extracted verbatim from DOC6 (lines 266-288) and Claude-Project-Instructions.txt (lines 302-323). Both sources are identical.

**Source (DOC6 lines 266-288):**
```
**Mail: [Flow Name] – [Mail Position]**
**Avatar: [Level]**
**Send Timing: [Day X / Hour Y]**
--**Subject Lines (A/B test ready):**
1. [Option 1]
2. [Option 2]
3. [Option 3]
**Preheaders:**
1. [Option 1]
2. [Option 2]
3. [Option 3]
--**Mail Body:**
[Structured by sections]
--**Lena Sign-Off:**
[2-3 sentence sign-off]
--**Mobile-First Notes:**
[Layout/length considerations]
**Klaviyo Implementation Notes:**
[Trigger setup, exit conditions, segment filters]
```

**Source (Claude-Project-Instructions.txt lines 302-323):** Identical format, confirming this is the locked template.

**Source (overnight-plan.md lines 569-577):**
> "The format begins with the mail name and position: 'Mail: [Flow Name] – [Mail Position].' Below that: 'Avatar: [Level]' and 'Send Timing: [Day X / Hour Y].' Subject lines section provides 3 options marked as A/B test ready. Preheaders section provides 3 options. The mail body is structured by sections. The Lena Sign-Off is 2-3 sentences maximum. Mobile-First Notes describe layout and length considerations. Klaviyo Implementation Notes cover trigger setup, exit conditions, and segment filters."

### Format Components Summary

| # | Component | Specification |
|---|-----------|---------------|
| 1 | Mail Name | `Mail: [Flow Name] – [Mail Position]` |
| 2 | Avatar Tag | `Avatar: [Level]` |
| 3 | Send Timing | `Send Timing: [Day X / Hour Y]` |
| 4 | Subject Lines | 3 options, A/B test ready |
| 5 | Preheaders | 3 options |
| 6 | Mail Body | Structured by sections |
| 7 | Lena Sign-Off | 2-3 sentences max |
| 8 | Mobile-First Notes | Layout/length considerations |
| 9 | Klaviyo Implementation | Trigger setup, exit conditions, segment filters |

---

<a name="2-naming-conventions"></a>
## 2. NAMING CONVENTION RULES

### Mail Naming

**Source (DOC6 line 269):** `**Mail: [Flow Name] – [Mail Position]**`

**Source (overnight-plan.md line 573):** `"Mail: [Flow Name] – [Mail Position]"`

**Convention:** Every mail is identified by its flow name and position within that flow. The dash is an en-dash (–), not a hyphen.

**Examples from DOC6 (lines 393-401):**
- `Write Welcome Flow Mail 2 (Day 1) for avatar_level2`
- Position notation: `E2 of 8`, `E1 of 3`, etc.

### Avatar Tagging

**Source (DOC6 line 270):** `**Avatar: [Level]**`

**Source (Claude-Project-Instructions.txt lines 202-209):**
- `avatar_level1`: Verbal, 3-5 yrs, "almost trained" (Pre-K driven) — 70% hope
- `avatar_level2`: Mixed verbal, 5-7 yrs, sensory + BCBA context (LARGEST) — 40% hope
- `avatar_level3`: Non-verbal, 6-10+ yrs, dignity-first — 20% hope
- `avatar_general`: Cross-level, diagnostic-pending, label-rejecters — 50/50

### Send Timing

**Source (DOC6 line 271):** `**Send Timing: [Day X / Hour Y]**`

**Source (DOC6 lines 400-401):** Timing is expressed as "Day X after Trigger" with flow position notation (E1 of 8, E2 of 3, etc.)

---

<a name="3-subject-lines"></a>
## 3. SUBJECT LINE FORMAT (3 OPTIONS)

**Source (DOC6 lines 272-275):**
```
--**Subject Lines (A/B test ready):**
1. [Option 1]
2. [Option 2]
3. [Option 3]
```

**Source (Claude-Project-Instructions.txt lines 308-311):** Identical format.

**Source (overnight-plan.md line 575):** "Subject lines section provides 3 options marked as A/B test ready."

### Subject Line Rules

- Exactly 3 options per mail
- Marked as A/B test ready (Klaviyo A/B test implementation)
- Must follow voice rules (no "easy", "simple", "quickly", "guaranteed", "miracle", "cure", "fix", "solve")
- Must open with symptom recognition, not product
- Use verbatim language bank phrases where possible (DOC1 §7)
- Never promise outcomes ("Your child will...")
- Never use level labels in subject lines (cross-level sensitivity)

**Source (DOC1 §23 lines 1528-1529):** "Open with the symptom (not the solution)"

**Source (DOC6 lines 231-232):** Anti-fabrication rule applies — subject lines using RS quotes must be real quotes.

---

<a name="4-preheaders"></a>
## 4. PREHEADER FORMAT (3 OPTIONS)

**Source (DOC6 lines 276-279):**
```
**Preheaders:**
1. [Option 1]
2. [Option 2]
3. [Option 3]
```

**Source (Claude-Project-Instructions.txt lines 312-315):** Identical format.

**Source (overnight-plan.md line 575):** "Preheaders section provides 3 options."

### Preheader Rules

- Exactly 3 options per mail
- Should complement (not repeat) the subject line
- Short enough for mobile preview (typically 40-90 characters)
- Same voice rules apply as subject lines

---

<a name="5-mail-body"></a>
## 5. MAIL BODY SECTION STRUCTURE

**Source (DOC6 line 280):** `--**Mail Body:** [Structured by sections]`

**Source (Claude-Project-Instructions.txt line 316):** `--**Mail Body:** [Structured by sections]`

**Source (overnight-plan.md line 575):** "The mail body is structured by sections."

### Body Structure Rules

**Source (DOC1 §23 lines 1526-1539) — DO's:**
1. Open with the symptom (not the solution)
2. Acknowledge prior failures BEFORE proposing mechanism
3. Use 3-5 specific scenarios per mail (cross-level recognition)
4. Make Lena's voice the trust anchor (not brand voice)
5. Offer permission not to buy (reduces resistance)
6. Realistic timelines with ranges (not fixed promises)
7. Cite Kelly Mahler / SPARK research when relevant
8. Mini-wins as success metrics (not "fully trained")
9. Use {first_name} in greeting and key emotional moments (but not over-use)
10. End with peer-to-peer Lena moment + soft CTA

**Source (DOC1 §23 lines 1540-1550) — DON'Ts:**
1. ❌ Lead with the product
2. ❌ Use "easy/quick/simple" anywhere
3. ❌ Promise outcomes tied to timelines
4. ❌ Compare to neurotypical kids as standard
5. ❌ Suggest the parent isn't doing enough
6. ❌ Use level labels (Level 2/3) in copy
7. ❌ Stack social proof early (saves it for later)
8. ❌ Use urgency manipulation ("only 24 hours!")

### The Voice Formula (Body Flow)

**Source (layer-09-voice-lena.md §2.1):**
```
OBSERVATION → VALIDATION → MECHANISM → PERMISSION
```

| Step | What It Does | Example |
|------|-------------|---------|
| Observation | Name what the mom is experiencing | "He talks about the potty but won't actually use it." |
| Validation | Absolve guilt — it wasn't her | "That's not defiance. That's a signal-timing gap." |
| Mechanism | Explain WHY neurologically | "His nervous system processes the signal — just too late." |
| Permission | Give her an off-ramp | "Try it for 60 days. By your judgment." |

### Formula Weight by Phase

| Phase | Formula Weight | Variant |
|-------|---------------|---------|
| Phase 1 | Observation 40% / Validation 30% / Mechanism 20% / Permission 10% | Gentle education |
| Phase 2 | Validation 35% / Mechanism 35% / Observation 20% / Permission 10% | Validation + mechanism |
| Phase 3 | Mechanism 40% / Validation 25% / Permission 25% / Observation 10% | Science-first |
| Phase 4 | Permission 35% / Validation 30% / Observation 20% / Mechanism 15% | Gentle, no energy push |

### Content Composition

**Source (DOC6 lines 204-207, Claude-Project-Instructions.txt lines 244-247):**
- 30-50% authentic verbatim language or tightly paraphrased
- 30-50% Lena's voice (peer-to-peer, empathetic)
- 10-20% mechanism/brand language (doc-based)

**Source (DOC6 lines 222-225):** Each mail must contain 2-4 authentic verbatim quotes or tightly paraphrased lines from the RS. Cite informally ("one mom in our research described..." or directly in mail body as quote).

### Cross-Level Recognition Anchors

**Source (DOC1 §22 lines 1486-1500):** In EVERY mail there must be a block with at least 3 specific situations so all levels recognize themselves. Use symptom descriptions, not level labels.

---

<a name="6-lena-sign-off"></a>
## 6. LENA SIGN-OFF GUIDELINES

**Source (DOC6 line 282):** `--**Lena Sign-Off:** [2-3 sentence sign-off]`

**Source (DOC6 lines 106-112):**
```
LENA SIGN-OFF RULES:
- Every mail ends with Lena sign-off
- Maximum 2-3 sentences body + max 2 lines P.S.
- Profile subtitle: "Customer Support · Mom of two autistic sons"
- Reply encouragement appropriate to flow
```

**Source (Claude-Project-Instructions.txt lines 122-127):** Identical rules.

**Source (layer-09-voice-lena.md §8.1):**
- Every mail ends with Lena sign-off
- Body: max 2-3 sentences
- P.S.: max 2 lines
- Profile subtitle: "Customer Support · Mom of two autistic sons"

### Sign-Off Variants by Flow Position

**Source (layer-09-voice-lena.md §8.2-8.4):**

**Short (Emails 1-2 in a flow):**
```
Talk soon,
Lena
Customer Support · Mom of two autistic sons
```
P.S. variations:
- "P.S. If you want to see how the body-signal approach works, [link]. No pressure."
- "P.S. I've been where you are. Take your time."
- "P.S. 60 days to try it. By your judgment. [link]"

**Medium (Mid-Flow Emails 3-5):**
```
With understanding,
Lena
Customer Support · Mom of two autistic sons
```
P.S. variations:
- "P.S. Both my sons went through this. I know what it feels like to try everything. [link]"
- "P.S. Your BCBA built the foundation. This adds the body-signal layer. [link]"
- "P.S. 49% of autistic 4-5 year olds aren't trained. You're not behind. [link]"

**Long (Late-Flow / Winback Emails 6+):**
```
With care,
Lena
Customer Support · Mom of two autistic sons

P.S. My older son was 8 before we figured this out. If you've stepped back from
trying — I get it. When you're ready, the science will still be here. 60 days,
your judgment. [link]
```

### Sign-Off Energy by Phase

| Phase | Sign-Off Energy | Key Tone |
|-------|----------------|----------|
| Phase 1 | Warm, gentle | "I've been there" |
| Phase 2 | Empathetic | "I know this feeling" |
| Phase 3 | Science-respectful | "Here's what I learned" |
| Phase 4 | Gentle, no pressure | "Whenever you're ready" |

---

<a name="7-mobile-first"></a>
## 7. MOBILE-FIRST NOTES FORMAT

**Source (DOC6 line 285):** `--**Mobile-First Notes:** [Layout/length considerations]`

**Source (Claude-Project-Instructions.txt line 320):** `--**Mobile-First Notes:** [Layout/length considerations]`

**Source (overnight-plan.md line 575):** "Mobile-First Notes describe layout and length considerations."

### Mobile Design Requirements

**Source (layer-29-visual-calibration.md §1.3):**

| Pattern | Specification |
|---------|--------------|
| Max width | 600px |
| Body min | 16px mobile (accessibility) |
| Mobile-first | 60%+ traffic is mobile |
| CTAs | Min 48px height, full-width mobile |
| Cards | Subtle shadows, border-radius 12-16px |
| Whitespace | Section spacing 48-64px |
| Separators | "—" dash for list items, not bullets |

**Source (layer-29-visual-calibration.md §1.2):**

| Element | Specification |
|---------|--------------|
| Brand Font | Questrial (mandatory) |
| Weight | 400 only — NEVER bold for body text |
| Headlines | 24-32px Desktop / 20-24px Mobile |
| Body | 16px Mobile / 17px Desktop |
| Captions | 13-14px |
| Line-height | 1.5 minimum |
| Email-safe fallback | `Arial, Helvetica, sans-serif` |

### Mobile-First Notes Content Per Mail

The Mobile-First Notes section in each deliverable should address:
- Total word count target (varies by avatar: L1 short/scannable, L3 longer OK)
- CTA placement (above fold for L1, below fold OK for L3)
- Image count and alt-text requirements
- Any level-specific layout notes

---

<a name="8-klaviyo-implementation"></a>
## 8. KLAVIYO IMPLEMENTATION NOTES FORMAT

**Source (DOC6 line 287):** `**Klaviyo Implementation Notes:** [Trigger setup, exit conditions, segment filters]`

**Source (Claude-Project-Instructions.txt line 322):** `**Klaviyo Implementation Notes:** [Trigger setup, exit conditions, segment filters]`

**Source (overnight-plan.md line 575):** "Klaviyo Implementation Notes cover trigger setup, exit conditions, and segment filters."

### Required Implementation Elements

**Source (DOC1 §19 lines 1350-1353) — Exit Conditions:**
EVERY flow must have these exit conditions:
- Made a purchase (for conversion flows)
- Unsubscribed
- Already in higher-priority flow

**Source (DOC1 §16-19):** Pop-up setup, tag logic, and segmentation determine which avatar receives which flow. Implementation notes must specify:
- Trigger event (pop-up signup, cart abandon, browse abandon, etc.)
- Segment filters (avatar tag, purchase history, engagement)
- Exit conditions (above 3 minimum)
- Flow priority when overlapping

### Sender Configuration

**Source (DOC6 lines 132-135, Claude-Project-Instructions.txt lines 147-151):**
- From Email: support@brightkidco.com
- From Name: "Lena from BrightKidCo"
- Reply-To: support@brightkidco.com
- Sending Subdomain: send.brightkidco.com

---

<a name="9-brand-constants"></a>
## 9. BRAND CONSTANTS (LOCKED VALUES)

**Source (DOC6 lines 118-161, Claude-Project-Instructions.txt lines 133-194):**

### Pricing (USD)

| Offer | Price | Badge | Save Tag |
|-------|-------|-------|----------|
| 1 Pair | $34.99 | — | — |
| 3+3 FREE | $79.99 | BESTSELLER | Save 40% TODAY |
| 5+5 FREE | $119.99 | BEST VALUE / MAXIMUM VALUE | Save 60% TODAY |

Bonuses with 5+5:
- FREE E-Book "The Stress-Free Potty Training Guide"
- FREE Magic Potty Targets
- FREE Potty Progress Chart
- FREE Shipping

### Guarantee
- 60-Day Money Back (NEVER say 30)

### Reviews / Trust Signals
- 16,511 reviews · 4.9 ★ on site
- 100,000+ parents trust BrightKidCo
- NO Trustpilot links (no page exists)
- NO Facebook links (not used by brand)

### Discount Code
- Manual entry: 10%OFF-BKCO (DOC6 says WELCOME10 — CONFLICT, see §16)
- Auto-Apply Link: https://www.brightkidco.com/discount/10%25OFF-BKCO

### URLs (LOCKED)

| Page | URL |
|------|-----|
| Homepage | https://www.brightkidco.com |
| All Products | https://www.brightkidco.com/collections/all-products |
| Autistic Parent PDP | https://www.brightkidco.com/products/potty-training-underwear-for-sensory-sensitive-toddlers-sp... |
| Standard PDP | https://www.brightkidco.com/products/potty-training-underwear |
| Parent Stories | https://www.brightkidco.com/pages/real-parent-stories |
| FAQ | https://www.brightkidco.com/pages/faq |
| Contact | https://www.brightkidco.com/pages/contact |
| Instagram | https://www.instagram.com/brightkidco_official/ |
| TikTok | https://www.tiktok.com/@brightkidco.com |

### Shipping
- 10 days standard
- USA / UK / AU / NZ / Canada
- Various US-based carriers (do NOT name specific carrier in copy)

### Social
- Instagram: brightkidco_official
- TikTok: @brightkidco.com
- Facebook: NOT USED (do not include in any mail)

### Footer Links (in this exact order)
Shop · Parent Stories · Contact us · FAQ

### Key Research Stats
- 49% of autistic 4-5 year olds not toilet-trained (SPARK study)
- Kelly Mahler interoception research (gold standard reference)

---

<a name="10-visual-standards"></a>
## 10. VISUAL DESIGN STANDARDS

**Source (layer-29-visual-calibration.md §1):**

### Color Palette (LOCKED — Universal)

| Color Name | Hex Code | Role |
|------------|----------|------|
| Brand-Green | `#039902` | Primary — CTAs, accents |
| Mint | `#DBFFCD` | Secondary — highlight boxes |
| Cream Card | `#FBF7EB` | Secondary — card backgrounds |
| Cream Alt | `#FAF5E8` | Secondary — section backgrounds |
| Brand-Yellow | `#F5C84B` / `#F5CB5C` | Accent — badges, stars |
| Soft Gray | `#9AA8A7` | Neutral — subtle text |
| Dark Text | `#1A1A1A` | Primary — body text |
| Body Gray | `#4A4A4A` | Neutral — sub-captions |
| Off-white BG | `#FAF9F7` | Background — email background |

**Source (DOC6 lines 142-148, Claude-Project-Instructions.txt lines 158-164):** Same palette confirmed.

### Typography (LOCKED)

- Font: Questrial weight 400 only (never bold for body)
- Email-safe fallback: Arial, Helvetica, sans-serif
- Headlines: 24-32px Desktop / 20-24px Mobile
- Body: 16px Mobile / 17px Desktop
- Line-height: 1.5 minimum

### Image Rules

**DO:**
- Real parents and real kids in real homes
- Soft natural lighting, neutral cream/sage/sand tones
- Diverse representation
- Kids 3-10 years range
- Hands, silhouettes, half-faces (less invasive)
- Product context (visible underwear) — not packaging

**DON'T:**
- ❌ Stock images of neurotypical happy families
- ❌ Bright cartoon colors
- ❌ Children's faces full-on
- ❌ "Before/After" style with shame implications
- ❌ Pull-ups staged as "evil"
- ❌ NO cartoon kid illustrations — ever
- ❌ NO infantilized "Big Kid Underwear" graphics

### Level-Specific Visual Calibrations

| Level | Design Tone | Color Weight | CTA Aggressiveness |
|-------|-------------|--------------|-------------------|
| Level 1 | Optimistic but grounded | Green DOMINANT, most vibrant | MEDIUM |
| Level 2 | Calm, professional, science-adjacent | Mint/Gray PROMINENT, restrained | LOW |
| Level 3 | Quiet warmth + clinical reality | Cream/Gray DOMINANT, most muted | VERY LOW |
| General | Neutral, migration-friendly | Balanced | LOW-MEDIUM |

---

<a name="11-voice-rules"></a>
## 11. VOICE RULES (FORMAT-LEVEL)

**Source (DOC6 lines 89-105, Claude-Project-Instructions.txt lines 104-121, layer-09-voice-lena.md §3-4):**

### Absolute Voice Rules

| # | Rule | Source |
|---|------|--------|
| V1 | Peer-to-peer, NEVER founder framing | DOC6, CPI |
| V2 | Every mail ends with Lena sign-off (max 2-3 sentence body + max 2 lines P.S.) | DOC6, CPI |
| V3 | Profile subtitle: "Customer Support · Mom of two autistic sons" | DOC6, CPI |
| V4 | Never sound like marketing | DOC6, CPI |
| V5 | NEVER use: "easy", "simple", "quickly", "guaranteed", "miracle", "cure", "fix", "solve" | DOC6, CPI |
| V6 | Never compare to neurotypical kids as standard | DOC6, CPI |
| V7 | Always validate failed attempts before proposing mechanism | DOC6, CPI |
| V8 | 60-day guarantee, never 30 | DOC6, CPI |
| V9 | Pull-ups are a tool that blocks signal — not "bad" | DOC6, CPI |
| V10 | Autism is identity, not disease | DOC6, CPI |
| V11 | Mechanism specificity over brand promises | L9 |
| V12 | Permission-not-to-buy creates trust | L9 |
| V13 | Science-first (Kelly Mahler, SPARK, interoception) | L9 |
| V14 | Realistic timelines ("weeks, not days") | L9 |
| V15 | Lena sign-off is the universal trust lever | L9 |

### Forbidden Phrases (Absolute)

**Source (layer-09-voice-lena.md §5.1):**

| Phrase | Why Forbidden |
|--------|---------------|
| "Easy" | Minimizes the struggle |
| "Simple" | Implies the parent is overcomplicating |
| "Quickly" | Minimizes timeline |
| "Guaranteed" | Outcome promise |
| "Miracle" | Marketing language |
| "Cure" | Violates autism = identity |
| "Fix" | Implies the child is broken |
| "Solve" | Reduces the child to a problem |
| "Your child will..." | Promising outcomes |
| "Just like other kids" | NT comparison wound |

### Word Choice Replacements

**Source (layer-09-voice-lena.md §7.1):**

| Instead of... | Lena says... |
|---------------|-------------|
| "Fix" | "Support" |
| "Cure" | "Work with his body signals" |
| "Solve" | "Add alongside" |
| "Easy" | "Straightforward" |
| "Simple" | "One step" |
| "Quick" | "At his pace" |
| "Guaranteed" | "60-Day Money Back" |
| "Training" | "Body-signal learning" |
| "Potty train" | "Learn to feel when he needs to go" |
| "Diaper-free" | "Moving toward underwear" |
| "Defiant" | "Signal-timing gap" |
| "Stubborn" | "Doesn't feel it yet" |
| "Failure" | "Method mismatch" |

---

<a name="12-content-composition"></a>
## 12. CONTENT COMPOSITION RULES

### Mail Writing Process

**Source (DOC6 lines 256-263, Claude-Project-Instructions.txt lines 291-299):**

1. Always consult DOC 1 first (foundation)
2. Consult DOC 2/3/4/5 based on avatar
3. Consult RS PDFs for verbatim language
4. Apply 5 Big Conversion Levers from DOC 1
5. Open with symptom recognition (not product)
6. Include 3-5 specific scenarios
7. End with Lena sign-off (max 2-3 sentences)
8. Mary S. (Founder) only in dedicated Founder Story mails

### RS Integration Rule

**Source (DOC6 lines 240-243, Claude-Project-Instructions.txt lines 240-243):**

Mail text composition:
- 30-50% authentic verbatim language or tightly paraphrased
- 30-50% Lena's voice (peer-to-peer, empathetic)
- 10-20% mechanism/brand language (doc-based)

### Anti-Fabrication Rule (NON-NEGOTIABLE)

**Source (DOC6 lines 228-249, Claude-Project-Instructions.txt lines 262-285):**

**MAY NOT:**
- Invent customer quotes
- Fabricate testimonials
- Imagine "what a mom might say"
- Generate plausible-sounding but fake reviews
- Adapt quotes so heavily they become fictional

**MAY:**
- Lightly anonymize (change first names, ages within range)
- Combine themes from multiple real quotes into one representative statement (note internally)
- Paraphrase for length, keeping core meaning and voice

### Tonality by Flow Stage

**Source (DOC1 §21 lines 1401-1473):**

| Stage | Tone | Language | Energy |
|-------|------|----------|--------|
| Pre-Purchase | Education + Soft Conversion | Specific, mechanism-led, peer-to-peer | Calm, confident |
| Conversion Moment | Friendly Reminder + Permission | "If today isn't right, that's a real answer" | Decision-respect |
| Transactional | Warm + Functional | Direct, informative, branded | Professional but human |
| Post-Purchase Early | Warm + Reassurance + Education | "Here's what to expect" | Welcome to the family |
| Post-Purchase Mid | Realistic + Patient | "It's normal" | Coach + cheerleader |
| Lifecycle | Respectful Re-engagement | "How are you doing?" | Genuinely curious, low-pressure |

---

<a name="13-structural-dos-donts"></a>
## 13. STRUCTURAL DO'S AND DON'TS

**Source (DOC1 §23 lines 1526-1550):**

### DO's
1. ✅ Open with the symptom (not the solution)
2. ✅ Acknowledge prior failures BEFORE proposing mechanism
3. ✅ Use 3-5 specific scenarios per mail (cross-level recognition)
4. ✅ Make Lena's voice the trust anchor (not brand voice)
5. ✅ Offer permission not to buy (reduces resistance)
6. ✅ Realistic timelines with ranges (not fixed promises)
7. ✅ Cite Kelly Mahler / SPARK research when relevant
8. ✅ Mini-wins as success metrics (not "fully trained")
9. ✅ Use {first_name} in greeting and key emotional moments (not over-use)
10. ✅ End with peer-to-peer Lena moment + soft CTA

### DON'Ts
1. ❌ Lead with the product
2. ❌ Use "easy/quick/simple" anywhere
3. ❌ Promise outcomes tied to timelines
4. ❌ Compare to neurotypical kids as standard
5. ❌ Suggest the parent isn't doing enough
6. ❌ Use level labels (Level 2/3) in copy
7. ❌ Stack social proof early (saves it for later)
8. ❌ Use urgency manipulation ("only 24 hours!")

### Defaults

**Source (DOC6 lines 291-297, Claude-Project-Instructions.txt lines 327-333):**
- Uncertain audience → General Fallback (DOC 5)
- Uncertain phase → Phase 2-3 (most common)
- Uncertain tone → realism over hope
- Uncertain CTA → permission-not-to-buy

---

<a name="14-footer"></a>
## 14. FOOTER STANDARD

**Source (DOC1 §20 lines 1359-1392, layer-29-visual-calibration.md §1.5):**

```
[BrightKidCo Logo]
Built for the brain that learns differently.
[Links — all plain text, no bold]
Shop · Parent Stories · Contact us · FAQ
[Social Icons]
Instagram · TikTok
[Reviews microcopy]
16,511 reviews · 4.9 ★ — 100,000+ parents trust BrightKidCo
[Business Address]
BrightKidCo · [Address]
[Klaviyo Tags]
{% unsubscribe %} · Manage preferences
```

**Footer URL Links (locked):**
- Shop: https://www.brightkidco.com/collections/all-products
- Parent Stories: https://www.brightkidco.com/pages/real-parent-stories
- Contact: https://www.brightkidco.com/pages/contact
- FAQ: https://www.brightkidco.com/pages/faq
- Instagram: https://www.instagram.com/brightkidco_official/
- TikTok: https://www.tiktok.com/@brightkidco.com

**Rules:**
- NO Trustpilot link (no page exists)
- NO Facebook link (not used by brand)
- Reviews microcopy only as text, not clickable
- Footer is saved as a reusable block in Klaviyo — built once, used in all mails
- EVERY mail (except transactional receipts) ends with this footer

---

<a name="15-sender-identity"></a>
## 15. SENDER IDENTITY

**Source (DOC1 §20, DOC6 lines 132-135, Claude-Project-Instructions.txt lines 147-151, layer-29-visual-calibration.md §1.6):**

| Field | Value |
|-------|-------|
| From Email | support@brightkidco.com |
| From Name | "Lena from BrightKidCo" |
| Reply-To | support@brightkidco.com |
| Sending Subdomain | send.brightkidco.com |

---

<a name="16-conflicts"></a>
## 16. CONFLICTS AND AMBIGUITIES

### Conflict 1: Discount Code

**DOC6 (line 156):** `WELCOME10`
**Claude-Project-Instructions.txt (line 181):** `10%OFF-BKCO`

These are different discount codes. DOC6 uses "WELCOME10" while CPI uses "10%OFF-BKCO". Both auto-apply links use the same pattern but different codes. **Resolution needed from Brand Strategist.**

### Conflict 2: Auto-Apply Link Path

**DOC6 (line 157):** `brightkidco.com/discount/10%25OFF-WELCOME`
**CPI (line 182):** `https://www.brightkidco.com/discount/10%25OFF-BKCO`

Different discount codes in the auto-apply URLs. **Resolution needed.**

### Conflict 3: Facebook Usage

**DOC6 (line 161):** Lists Facebook as a social link with Profile ID
**CPI (line 186):** "Facebook: NOT USED (do not include in any mail)"
**DOC1 §20 (line 1386):** "NO Facebook link (not used by brand)"

DOC6 includes Facebook while CPI and DOC1 explicitly exclude it. **CPI and DOC1 are authoritative — Facebook is NOT used.**

### Ambiguity 1: Layer 32 Not Available

The file `layer-32-prototype-patterns.md` does not exist. This layer was supposed to provide existing format patterns from prototype emails. Without it, format patterns are derived solely from the client documents and voice/visual layers.

### Ambiguity 2: Bold Markers in Format Template

The output format template uses `--**Section:**` with double dashes as separators. It's unclear whether these dashes are formatting artifacts or intentional section separators. Both DOC6 and CPI use the same pattern, suggesting it's intentional.

### Ambiguity 3: Mail Body Internal Structure

The format template says `[Structured by sections]` for the mail body but does not define what those sections are. The body structure is implied by the voice formula (Observation → Validation → Mechanism → Permission) and the structural do's/don'ts, but no explicit section header template exists.

---

## FORMAT REQUIREMENT COUNT

| # | Requirement | Source Document(s) |
|---|-------------|-------------------|
| 1 | Mail naming: "Mail: [Flow Name] – [Mail Position]" | DOC6, CPI, overnight-plan |
| 2 | Avatar tagging: "Avatar: [Level]" | DOC6, CPI, overnight-plan |
| 3 | Send timing: "Send Timing: [Day X / Hour Y]" | DOC6, CPI, overnight-plan |
| 4 | Subject lines: 3 options, A/B test ready | DOC6, CPI, overnight-plan |
| 5 | Preheaders: 3 options | DOC6, CPI, overnight-plan |
| 6 | Mail body: structured by sections | DOC6, CPI, overnight-plan |
| 7 | Lena Sign-Off: 2-3 sentences max + 2 lines P.S. | DOC6, CPI, L9 |
| 8 | Mobile-First Notes: layout/length | DOC6, CPI, overnight-plan |
| 9 | Klaviyo Implementation Notes: trigger/exit/segments | DOC6, CPI, overnight-plan |
| 10 | Content composition: 30-50% verbatim, 30-50% Lena, 10-20% mechanism | DOC6, CPI |
| 11 | Voice formula: Observation → Validation → Mechanism → Permission | L9 |
| 12 | Forbidden phrases: 10 absolute forbidden words | DOC6, CPI, L9 |
| 13 | Footer standard: locked template with specific URLs | DOC1, L29 |
| 14 | Sender identity: locked From/Reply-To/Name | DOC1, DOC6, CPI, L29 |
| 15 | Color palette: 9 locked colors with hex codes | DOC6, CPI, L29 |
| 16 | Typography: Questrial 400, never bold body, fallback Arial | DOC6, CPI, L29 |
| 17 | Layout: 600px max, 48px CTA, 16px body min | L29 |
| 18 | Anti-fabrication: RS quotes only, never invent | DOC6, CPI |
| 19 | Cross-level rules: symptom over label, 3-5 anchors, age ranges | DOC1 |
| 20 | Exit conditions: purchase, unsubscribe, higher-priority flow | DOC1 |

**Total: 20 distinct format requirements documented across 6 source documents.**
