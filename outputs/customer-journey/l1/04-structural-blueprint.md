# Structural Blueprint & Variance Ledger — Level 1 (Sarah)
## BrightKidCo Customer Journey Reference

> **Audience:** Stage 1 subagents building Level 1 (Sarah) emails. Designers, copywriters, and any subagent producing visual or structural decisions for the L1 sequence.
>
> **Purpose:** Define — for every email in the L1 sequence — the 9 dimensions of structural variance with explicit WHY reasoning. Build a running variance ledger that flags any pair of adjacent emails failing to clear the 6/9 variance floor. This is a reference document, not a summary.
>
> **Companion documents:** `journey-l1-01-avatar.md` (who Sarah is), `journey-l1-02-sequence.md` (when/why each email fires), `journey-l1-03-emotional-trust.md` (her internal state per email), `locked-profile.json` (canonical 9-dimension record per email), `email-marketing-structure` skill (hero variants A-F, body block types, section patterns A-H, color temperature, technical constraints).
>
> **How to use this document:** (1) When designing an L1 email, locate it in §1 and copy the 9-dimension spec. (2) When checking variance, run §2 (per-email ledger) against §3 (adjacent variance check). (3) When something flags <6/9, follow §4 (remediation playbook). (4) When the brief changes (e.g., a new mid-decision email is added), re-run §3 and §4.

---

## Table of Contents

1. The 9 Dimensions — Definitions and L1 Calibration
2. Per-Email Structural Spec (51 L1-touching emails)
3. Variance Ledger — Adjacent Email Comparison
4. Remediation Playbook — When Variance Falls Below 6/9
5. Cross-Flow Variance Audit — Conditional Emails
6. Subject Line Master Plan
7. Color Temperature & Visual Rhythm Map
8. L1 Hard Rules (Locked, Cite When in Doubt)
9. Appendix — Quick-Reference Variance Matrix

---

## 1. THE 9 DIMENSIONS — DEFINITIONS AND L1 CALIBRATION

Per the `email-marketing-structure` skill §9.2, every email can vary across 9 structural dimensions. For the L1 audience (Sarah), each dimension has a specific L1 calibration. These definitions apply throughout this document.

### Dimension 1 — Section Count
**Definition (from skill §3.3):** Number of distinct content blocks (hero, bridge, body, CTA, footer) in the email.
- Short: 3-4 sections
- Medium: 5-6 sections
- Long: 7-8 sections

**L1 calibration:** 5-11 sections depending on flow position. Welcome flow E1-E8 = 5, 16, 8, 11, 11, 6, 14, 10 sections per `locked-profile.json` (note: E2's 16-section count includes source-attribution blocks; reader-facing body is 5-6). The variance rule (skill §3.3 — never repeat same count 3x in a row) applies even more strictly for L1 because Sarah is reading on mobile during 2am research sessions and pattern-matches faster than a casual subscriber.

**Locked-profile citations:** `welcome-01-e1-l1` → 5, `welcome-01-e2-l1` → 16, `welcome-01-e3-l1` → 8, `welcome-01-e4-l1` → 11, `welcome-01-e5-l1` → 11, `welcome-01-e6-l1` → 6, `welcome-01-e7-l1` → 14, `welcome-01-e8-l1` → 10.

**WHY section count varies:** Welcome E1 is short (5 sections) because the only job is to convert "mildly skeptical signup" to "okay, keep going" — long copy on first contact triggers her BS detector. Welcome E2 spikes to 16 (effectively 5-6 reader-facing) because it's the mechanism click — the moment she will or won't buy. Welcome E5 (11 sections) and E7 (14 sections) are the longest because they carry the 3-layer product education (E5) and the closing-argument "last 10%" frame (E7). The Welcome flow's section count follows the trust-progression curve in §3 of `journey-l1-03-emotional-trust.md`: short for first touch, long for mechanism deepening and closing argument, medium for retention.

### Dimension 2 — Section Pattern (A-H from skill)
**Definition (from skill §3.1):** The order of content sections in the email.
- Pattern A — Classic Hero-to-CTA (Welcome, General Promo)
- Pattern B — Story-Led (Brand storytelling, Winback)
- Pattern C — Problem-Solution (Education, Objection handling)
- Pattern D — Social Proof First (Trust-building, Reviews)
- Pattern E — Product-First (Product showcase, Cart abandonment)
- Pattern F — Education-First (Nurture, Post-purchase)
- Pattern G — Urgency-Driven (Flash sale, Last chance)
- Pattern H — Minimalist (Transactional, VIP)

**L1 calibration:** Patterns A, C, E, F, and G appear. Pattern B (story-led) is reserved for Mary S. founder story and the deepest L1 testimonials — Sarah rejects overt "story-led" marketing unless the story mechanism-anchors. Pattern H (minimalist) is reserved for transactional L1 emails (Order Confirmation, Shipping). Pattern D (social proof first) is used only when the testimonial is the L1-anchor and the social proof IS the mechanism.

**WHY pattern choice for L1:** Sarah's BS detector flags stock-photo happy-family stories as marketing. Pattern A (Classic Hero-to-CTA) wins for Welcome E1, E3, and PP-Ed E1 because she has just signed up — she needs a recognizable email shape. Pattern C (Problem-Solution) wins for E2 (the mechanism click), E4 (the absolution moment), and E5 (the 3-layer solution) because the email structure mirrors her internal state: "this is the problem → here is the solution." Pattern G (Urgency-Driven) is reserved for E5 (Pre-K countdown), E7 (last call), Winback A E1 (Pre-K season reminder) — L1 is the only level where Pre-K urgency is calendared, not manufactured. Pattern H (Minimalist) is for transactional emails where the goal is "do the next action" (track package, see your order) — anything longer feels like a sales pitch dressed as a receipt.

### Dimension 3 — Image Density
**Definition (from skill §7):** Number of images per email. The skill recommends 60:40 text-to-image ratio to prevent spam flags (skill §1.4, §4.5).

**L1 calibration:** 0-4 images per email. Welcome E1-E8 = 1-3 images each. L1 imagery rules from `journey-l1-01-avatar.md` §9: "active, forward-looking image of verbal 3-5 year old" with alt-text "active/forward-looking" tone. Forbidden: non-verbal kids, BCBA imagery, sensory-meltdown imagery, "Big Kid Underwear" infantilized graphics, NT happy family stock photos, crying children, pull-ups as villain.

**WHY image density matters for L1:** Sarah opens these emails on mobile, often at 2am, often on weak wifi. Image-heavy emails load slowly and lose her before the first paragraph reads. Image-sparse emails (0-1) feel like text-messages from a friend and pass her BS detector — but text-only emails lack the visual emotional anchor that helps her picture her son in the product. The sweet spot for L1 is 1-3 images: enough to break up the body without loading slowly, and to carry the L1-anchor visual (verbal 3-5 year old, active, forward-looking). The skill's spam-flag guidance (60:40 text-to-image) is non-negotiable — L1 is high-spam-sensitivity because she Googles "BrightKidCo reviews" before clicking.

### Dimension 4 — Color Temperature
**Definition (from skill §6.2):** Warm (cream, beige, yellow, peach) for comfort/Story-led; Cool (mint, teal, lavender, blue) for mechanism/data; Neutral (white, gray, black) for product showcase/transactional.

**L1 calibration:** Cream (#FBF7EB) and Off-White (#FAF9F7) backgrounds are the L1 brand default. Brand-Green #039902 is the primary CTA color. Brand-Yellow #F5C84B is reserved for badges, stars, trust signals. Mint #DBFFCD is for mechanism callouts and stat highlights. Teal palette #2BAEB4 is **forbidden** for L1 (reserved for other levels). Earth tones are for L3, not L1.

**WHY color temperature for L1:** Sarah's hope ratio is 70/30 — she is guarded but open. Warm colors (cream, yellow) signal "you are safe here" — the cozy, intimate, human feel that matches Lena's peer voice. Cool colors (mint, teal) signal "this is science" — the mechanism and stat callouts live in cool zones to feel evidence-based. The skill's rule "Don't stay flat for more than 3 consecutive emails" is calibrated for L1 with a 3-email warm-cool rhythm (see §7 below). Neutral (white, gray) is reserved for transactional emails (Order Confirmation, Shipping) where the visual job is to get out of the way.

### Dimension 5 — Email Length
**Definition (from skill §3.3, §5):** Word count of body copy. Short: ~150 words / 15-second read. Medium: ~600 words / 60-second read. Long: ~1,200+ words / 90+ second read.

**L1 calibration:** L1 emails are *the longest* of any level because Sarah reads them. Per `journey-l1-01-avatar.md` §4: *"long emails (she reads); specific symptoms named in detail."* L1 word counts: Welcome E1 = 990, E2 = 1,085, E3 = 751, E4 = 1,029, E5 = 1,186, E6 = 1,103, E7 = 990, E8 = 995. The full Welcome flow averages ~1,017 words per email.

**WHY length matters for L1:** Sarah's BS detector is medium-high (30% peak) but it does not flip on long copy — it flips on marketing voice. The avatar profile's BS detector levers: *"Does NOT trip her BS detector: long emails (she reads)."* Short emails (<300 words) at L1 would feel like the 1-line marketing messages she's learned to ignore ("Easy potty training in 3 days!"). Long emails (1,000+ words) feel like Lena talking. The Welcome flow intentionally pushes length to 1,000-1,200 words on mechanism-deep emails (E2, E4, E5) because that's where the conversion work happens. Cart abandonment can be shorter (458-1,017 words) because the cart event itself is the conversion lever. PP emails shift shorter (500-900 words) because the conversion has happened; the job is now retention.

### Dimension 6 — Argument Structure
**Definition (from skill §9.2):** PAS, AIDA, Story, Data, Testimonial, Direct.

**L1 calibration:** The Welcome flow uses a hybrid that's not in the skill's standard list — let's call it **Mechanism-Permission (MP)** for L1:
- **Mechanism-Permission (MP):** Validate (mirror) → Name the mechanism → Show why other methods failed → Offer the third option → Permission-toned CTA. This is the L1 trust pyramid (Tier 1 mechanism, Tier 3 failure acknowledgment, Tier 2 peer voice, Tier 5 60-day guarantee) made into an argument structure.
- **PAS (Problem-Agitate-Solve)** is reserved for specific objection-handling emails (PP-Ed D14, E6) where the problem is regression, agitation is the almost-trained pattern, and the solution is recalibration framing.
- **Story-Led** appears ONLY in Mary S. Story (D3 PP) and the deepest L1 testimonials — the L1-anchor "*He had a perfect week, then a month of accidents*" is a story inside a mechanism frame, not a pure Story email.
- **Data-Led** appears in the 49% SPARK stat callouts (E3, E4, E6, E8) but always paired with mechanism, never standalone.
- **Direct** is used in transactional (Order Confirmation, Shipping, Arrived & Welcome) and Cart Abandonment E1 (1-hour reminder, "you have X in your cart" directness).
- **AIDA** is largely avoided for L1 — the "Attention-Interest-Desire-Action" arc feels manipulative to her BS detector. L1 uses MP instead.

**WHY argument structure for L1:** The standard PAS and AIDA frames assume the prospect is in a buying mindset. Sarah is in a *trauma-informed* buying mindset — she has tried 10-20 methods, is 80% peak self-blame, and is reading on a phone at 2am. PAS (Problem-Agitate) would *re-agitate* her self-blame. AIDA (Desire) sounds like marketing copy. MP (Mechanism-Permission) respects her intelligence, names the mechanism, and offers her the door without pressure. This is the L1-specific structural innovation that does not exist in the standard `email-marketing-structure` skill and is the reason for this document.

### Dimension 7 — Visual Rhythm
**Definition (from skill §3.2, §5.7):** Tight (40px gaps, dense) vs Open (80px gaps, breathing) vs Mixed.

**L1 calibration:** Per `journey-l1-01-avatar.md` §9 spacing rules: 40px section gaps (tighter than brand-wide 48-64px), 16px paragraph spacing, 24px card spacing, 12-16px border-radius. L1 "energy is forward-moving; we don't need as much whitespace as L3."

**WHY visual rhythm for L1:** Sarah is action-oriented (Pre-K deadline, 2-7 day decision window). Tight spacing keeps her eye moving forward, mirrors the urgency she feels, and gives the email a "we're walking together" cadence. Open spacing (L3's preference) signals "we have time" — the wrong signal for a mom with 6 weeks to Pre-K. Mixed rhythm (hero wide, body tight) is used in transitional emails (E3 first hard CTA, E5 product education) where the emotional shift (mirror → mechanism → product) needs visual breathing room between sections.

### Dimension 8 — CTA Position
**Definition (from skill §3.2):** Early (after hero), Mid (after social proof), Late (after full argument), Double-tap (early + late), Text link only.

**L1 calibration:** Permission-toned, full-width, Brand-Green #039902 / white text, 48px+ height, no "BUY NOW" copy. Per `journey-l1-01-avatar.md` §9 CTA rules: "Medium aggression (highest of the four levels — but still 'medium,' not 'high')." Approved CTA copy: *"See if this works for him,"* *"Try it for 60 days,"* *"See if the 3+3 bundle works for your child."*

**WHY CTA position for L1:** The avatar profile's conversion gate is *emotional recognition + mechanism click + 60-day guarantee*. The CTA must be:
- **After mechanism click (mid-to-late)**, not early, because Sarah's BS detector must be satisfied first. An early CTA on first contact (E1) would feel like a pop-up ad.
- **Repeated (double-tap)** in long emails (E2, E4, E5) where skimmers will miss the late CTA.
- **Permission-toned** always — never "BUY NOW," always "See if this works." Sarah is the only L1 audience where permission is required because her self-blame and skepticism are still active.
- **Text-link fallback** for the L1 emails that are not sales-focused (E6 social proof, E8 gentle close) — a full button would feel pushy on those.

### Dimension 9 — Subject Line Type
**Definition (from skill §9.2):** Observation, Question, Mechanism tease, Story fragment, Validation, Data point, Parent quote.

**L1 calibration:** Mirror/observation hooks (40-50 chars) are the dominant type. Mechanism teases and Pre-K calendar anchors are allowed (L1 only). Forbidden per `journey-l1-01-avatar.md` §8, §4.10: *"Last chance,"* *"Miracle solution,"* *"Severe autism,"* *"Years of struggles,"* *"Time is running out,"* *"Save your kid."* No exclamation. Pre-K timing OK.

**WHY subject line type for L1:** Sarah's open decision happens in <2 seconds while she is mid-task (tucking her son in, cleaning up an accident, putting him on the 15-minute sit attempt). A subject line must mirror her reality in <8 words or she deletes without opening. Mirror hooks (e.g., *"He says 'I need to pee' AFTER it happens"*) outperform question hooks for L1 because the question implies she doesn't know — the mirror implies *we already know.* Calendar anchors (e.g., *"Six weeks until Pre-K starts"*) are L1's only allowed urgency because they are factual, not manufactured. Story fragments and parent quotes work for E4 (absolution) and E6 (social proof) but never as the lead subject line — the mirror must come first.

---

## 2. PER-EMAIL STRUCTURAL SPEC

Each email below is specified across all 9 dimensions with explicit WHY. Data cited from `locked-profile.json` unless otherwise noted. Subject line proposals are calibrated to the L1 forbidden-phrase list and mirror/mechanism/observation hook style.

### 2.1 Welcome Flow (8 emails, 21 days)

#### Welcome E1 — `welcome-01-e1-l1` (D0, immediate)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 5 | `locked-profile.json` |
| 2. Section pattern | A (Classic Hero-to-CTA) | locked-profile body_shape |
| 3. Image density | 1 (1 hero image) | L1 calibration |
| 4. Color temp | Warm (Cream #FBF7EB) | L1 brand default |
| 5. Email length | 990 words (long) | locked-profile body_word_count |
| 6. Argument structure | MP-light (Mirror → Light Mechanism → Permission) | L1 trust pyramid |
| 7. Visual rhythm | Tight (40px gaps) | L1 spacing rules |
| 8. CTA position | Late (after full argument) + P.S. | Permission-toned |
| 9. Subject line type | Mirror hook | L1 calendar/observation |

**Locked-profile section names:** Hook, Validation, Mechanism, CTA, "Let's explore what's really happening with his body."
**Primary lever:** L4 (Lena Peer Trust). **Sign-off variant:** SHORT. **Day:** 0.

**Subject line proposal (≤50 chars):** `"He talks about it — then pees 30 seconds later"` (45 chars).

**WHY each dimension for E1:**
- **Section count 5:** First contact. Sarah's BS detector is at maximum. 5 sections is enough to introduce Lena, mirror her reality, name the mechanism lightly, and offer the WELCOME10 code. Any longer and she bounces. Any shorter and it feels like a marketing pop-up, not a Lena email.
- **Pattern A (Classic Hero-to-CTA):** She has just signed up via popup. A familiar email shape (hero → body → CTA) signals "this is a real email, not a marketing blast." The `locked-profile` body_shape confirms Shape A.
- **Image density 1:** One hero image of a verbal 3-5 year old in active forward motion. Alt-text: "Active/forward-looking 4-year-old." Multiple images on first contact = slow load + her 2am wifi gives up.
- **Color temp Warm:** Cream #FBF7EB background + Brand-Green CTA = the L1 "we're walking together" feel. Cool colors (mint, teal) would feel clinical on first contact.
- **Length 990 words:** The avatar profile explicitly says "long emails (she reads)." 990 words is long enough to introduce the mechanism and Lena without burning her out on first contact. Compare to a marketing blast at 250 words — Sarah would recognize and ignore that.
- **Argument MP-light:** First contact cannot carry the full mechanism (that is E2's job). MP-light is: mirror → light mechanism framing → permission CTA. The Tier 1 trust lever (mechanism specificity) is introduced but not yet deep.
- **Rhythm Tight:** 40px gaps. Sarah is in a 2-7 day decision window; her energy is forward-moving. Open spacing (L3's preference) would feel "we have time" — the wrong signal.
- **CTA position Late + P.S.:** "Let's explore what's really happening with his body" is the late CTA. P.S. has the WELCOME10 code. The double-tap (late + P.S.) covers skimmers and readers. Permission-toned, never "BUY NOW."
- **Subject Mirror hook:** *"He talks about it — then pees 30 seconds later"* mirrors the L1-anchor ("He says 'I need to pee' AFTER it's already happened"). 45 chars, no exclamation, no "Miracle," no "Easy." This is the most-tested subject line type for L1 and her open rate depends on it.

#### Welcome E2 — `welcome-01-e2-l1` (D1, next day)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 16 (5 reader-facing + 11 source-attribution) | `locked-profile.json` |
| 2. Section pattern | C (Problem-Solution) | L1 trust progression |
| 3. Image density | 1 (1 mechanism diagram) | L1 calibration |
| 4. Color temp | Cool (Mint #DBFFCD for mechanism callout) + Warm base | Mechanism-led |
| 5. Email length | 1,085 words (longest in flow) | `locked-profile` body_word_count |
| 6. Argument structure | MP-deep (Mirror → Failed Methods → Mechanism → Re-frame → 49% stat → Third Option) | L1 mechanism click |
| 7. Visual rhythm | Tight (40px gaps) with breathing room around mechanism diagram | L1 spacing |
| 8. CTA position | Double-tap (mid after mechanism + late after social proof) | Long email |
| 9. Subject line type | Mechanism tease | L1 calendar/observation |

**Locked-profile section names:** Hook, Validation, Validation, Mechanism, Social Proof, Hook, CTA, CTA, CTA, "Placement Strategy, Primary Strategy Sources, Compendium Sources, Synthesis Sources, Ingestion Files, Research Files, Skills Loaded" (the last 7 are stage0 metadata, not reader-facing).

**Reader-facing section structure:** Hook → Validation (failed methods) → Mechanism (interoception deep) → Social Proof (parent quote) → Hook (recap frame) → CTA (mechanism-named) → CTA (third option) → Sign-off.

**Primary lever:** L1 (Sensory Gap) + L5 (49% stat). **Sign-off variant:** SHORT. **Day:** 1.

**Subject line proposal:** `"Oh Crap. Sticker charts. Timer sits. You didn't fail."` (50 chars).

**WHY each dimension for E2:**
- **Section count (effectively 5-6 reader-facing):** This is the *tipping point email.* Per `journey-l1-02-sequence.md` §3.1: "This is the **most important email in her entire pre-purchase journey.**" The reader-facing body has 5-6 logical sections; the locked-profile section_count of 16 includes stage0 metadata. Use 5-6 in production HTML.
- **Pattern C (Problem-Solution):** The problem is the failed methods she has tried (named: Oh Crap, sticker charts, timer sits). The solution is the interoception mechanism and the third option. Pattern C mirrors her internal state: she has the problem; here is the actual solution.
- **Image density 1 (mechanism diagram):** One image — the Body-Signal Layer (BSL) diagram or interoception pathway. This is the *only* place in the flow where a diagram earns its space. Alt-text: "Signal pathway: brain → nervous system → bladder sensation."
- **Color temp Cool mint for mechanism, warm elsewhere:** The mechanism callout uses Mint #DBFFCD to signal "this is the science." The body surrounding it stays warm (Cream) to keep Lena's peer-voice register. The cool/warm contrast within a single email is unique to E2.
- **Length 1,085 words (longest):** Per `journey-l1-02-sequence.md` §3.1, E2 is "the **tipping point email**." The mechanism click is the highest single-email hope gain in the journey (70→80). 1,085 words is justified because every paragraph is doing mechanism work. The avatar profile's `journey-l1-03-emotional-trust.md` §2.2 confirms the mechanism click is the heart of E2.
- **Argument MP-deep:** The 4-step mechanism: (1) Mirror with 3 named failed methods (Oh Crap, sticker charts, timer sits), (2) Re-frame "you didn't fail. The methods did," (3) Mechanism (interoception, signal-timing gap), (4) Third option between pull-ups and underwear. This is the L1 MP-deep.
- **Rhythm Tight with breathing room around diagram:** Tight base + 24px padding around the mechanism diagram. The diagram needs visual breathing room; the body stays tight to maintain forward momentum.
- **CTA position Double-tap (mid + late):** Long email, skimmers will miss the late CTA. The mid CTA (after mechanism) catches the "I'm convinced" reader; the late CTA (after social proof) catches the "let me see who else has tried this" reader.
- **Subject Mechanism tease:** *"Oh Crap. Sticker charts. Timer sits. You didn't fail."* — this is 3 failed methods named in one subject line. The reader's internal reaction: "How do they know?" → opens. 50 chars, no exclamation, no "Easy."

#### Welcome E3 — `welcome-01-e3-l1` (D3)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 8 | `locked-profile.json` |
| 2. Section pattern | A (Classic Hero-to-CTA) with Pre-K calendar bridge | locked-profile body_shape |
| 3. Image density | 2 (1 hero + 1 product) | First pricing box email |
| 4. Color temp | Warm (Cream) + Mint highlight on 49% stat callout | Stat-anchored |
| 5. Email length | 751 words (medium) | `locked-profile` body_word_count |
| 6. Argument structure | MP-bridge (Calendar urgency → 49% normalization → Pricing box) | First hard CTA |
| 7. Visual rhythm | Mixed (hero wide, body tight, pricing box breathing) | First money ask |
| 8. CTA position | Double-tap (mid after 49% + late after pricing box) | Hard CTA |
| 9. Subject line type | Calendar anchor | L1-only urgency |

**Locked-profile section names:** Hook, Validation, Mechanism, Validation, Hook, CTA, CTA, Pricing box (3+3 Bestseller).

**Primary lever:** L3 (60-Day Guarantee). **Sign-off variant:** MEDIUM. **Day:** 3.

**Subject line proposal:** `"Pre-K starts in 12 weeks. Here's the math."` (37 chars).

**WHY each dimension for E3:**
- **Section count 8:** This is the first hard CTA. 8 sections are needed to: hook, validate, re-introduce mechanism, anchor to 49% stat, transition to pricing, present the 3+3 bundle, hold the guarantee, and CTA. Any fewer and the pricing feels abrupt; any more and the urgency dissipates.
- **Pattern A with Pre-K bridge:** The "Classic" pattern is re-deployed for the first hard CTA because she needs familiar structure when money enters the conversation. The Pre-K calendar anchor functions as a bridge between the mechanism frames of E1-E2 and the pricing frame of E3.
- **Image density 2 (hero + product):** First email with a product image. The 3+3 bundle needs to be visible because this is the first time the offer is concrete. Two images: one Pre-K-themed hero (backpack, school bus, classroom) and one product shot of the bundle.
- **Color temp Warm + Mint highlight:** Warm base (Cream). The 49% stat callout uses Mint #DBFFCD background to make the stat visually pop. This is the first time Mint appears as a stat-highlight color in the flow.
- **Length 751 words (medium):** Per `journey-l1-02-sequence.md` §3.1: "This is Sarah's first 'spend money' prompt." The 60-day guarantee is the safety net. 751 words is enough to do the money-vs-need work without burning her out at the exact moment she is most skeptical.
- **Argument MP-bridge:** Mirror (Pre-K calendar) → Mechanism (the 49% stat anchors the science) → Pricing box (3+3 bundle, rotation rationale, math reframe). The bridge between mechanism and money is the 49% stat.
- **Rhythm Mixed:** Hero (300-400px wide) → Body (tight) → Pricing box (breathing room, 24px card spacing). The pricing box needs visual breathing room because it carries the conversion ask.
- **CTA position Double-tap (mid + late):** The mid CTA after the 49% stat ("See if the 3+3 bundle works for your child") catches the "I get it" reader. The late CTA inside the pricing box ("Try it for 60 days") is the explicit ask. Both are permission-toned, full-width, Brand-Green.
- **Subject Calendar anchor:** *"Pre-K starts in 12 weeks. Here's the math."* — the calendar is factual, not manufactured. L1 is the only level where Pre-K timing is allowed. 37 chars, no exclamation. The "Here's the math" frame sets up the 60-day-divided-by-2-months math (60 days to first signals ÷ 2 months = enough time before Pre-K).

#### Welcome E4 — `welcome-01-e4-l1` (D7)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 11 | `locked-profile.json` |
| 2. Section pattern | C (Problem-Solution) → Testimonial-led middle | locked-profile body_shape |
| 3. Image density | 2 (1 hero + 1 L1-anchor testimonial photo) | Absolution moment |
| 4. Color temp | Warm (Cream) + Mint for 49% reappearance | Identity-level email |
| 5. Email length | 1,029 words (long) | `locked-profile` body_word_count |
| 6. Argument structure | MP-absolution (Failure ack → Re-frame → 49% → 3-layer product) | Tier 3 unlock |
| 7. Visual rhythm | Tight with breathing room around testimonial | Long email |
| 8. CTA position | Triple-tap (early after reframe, mid after 49%, late after 3-layer) | Long + high-stakes |
| 9. Subject line type | Identity mirror (parent quote) | L1-specific social proof |

**Locked-profile section names:** Hook, Validation, Mechanism, Social Proof, CTA, "L1 pricing: 3+3 Bundle, $79.99", CTA, "60 days. Your judgment.", CTA, "See if the 3+3 Bundle closes the gap before Pre-K", Sign-off.

**Primary lever:** L1 (Deep Mechanism) + L5 (Normalization). **Sign-off variant:** MEDIUM. **Day:** 7.

**Subject line proposal:** `"It took us 3 years. He's finally trained."` (40 chars).

**WHY each dimension for E4:**
- **Section count 11:** This is the *absolution moment.* Per `journey-l1-03-emotional-trust.md` §2.4: "E4 is the identity-level unlock — 'You didn't fail. You solved the wrong problem.'" 11 sections are needed because the unlock requires: hook (L1 testimonial), validation (her specific situation), mechanism deep-dive (prompt-dependency loop), social proof (parent quotes), pricing box, 60-day guarantee, and 3 CTAs. This is the longest functional email in the flow.
- **Pattern C with Testimonial middle:** Problem (her self-blame) → Solution (mechanism + 3-layer product). The middle (testimonial) is the social proof that bridges the problem to the solution. Per `journey-l1-02-sequence.md` §3.1: "Testimonials are L1-specific (verbal 3-5 year olds, Pre-K deadline scenarios, 'perfect week then regression' pattern)."
- **Image density 2 (hero + testimonial photo):** Hero: a verbal 3-5 year old in active moment. Testimonial photo: the L1-anchor mom's face (not stock, not NT happy family). The avatar profile §9 explicitly forbids "stock photos of NT happy families" — this is the one place where the parent voice is visual.
- **Color temp Warm + Mint 49%:** Warm base. The 49% reappearance uses Mint #DBFFCD background. The color carries the same stat framing as E3 — Sarah sees the stat again, in the same color, and trusts it more.
- **Length 1,029 words (long):** The unlock requires length. A 500-word "you didn't fail" would feel like a marketing platitude. 1,029 words allows the mechanism to deep-dive (prompt-dependency loop, 49% reappearance, 3-layer product description, 60-day guarantee). The avatar profile confirms E4's trust delta is +2 — the highest in the flow — and length is what earns the +2.
- **Argument MP-absolution:** Mirror (it took us 3 years) → Re-frame (you didn't fail) → Mechanism (prompt-dependency loop) → 49% reappearance → 3-layer product → Pricing box. The structure is the Tier 1 + Tier 2 + Tier 3 trust pyramid made into an argument.
- **Rhythm Tight with breathing around testimonial:** The testimonial photo gets 24px padding. The body stays tight. The pricing box gets the same breathing room as E3.
- **CTA position Triple-tap (early, mid, late):** Three CTAs because the email is long and the conversion ask is high. The early CTA after the reframe catches the "I'm convinced, show me the product" reader. The mid CTA after the 49% stat catches the "stat-anchored" reader. The late CTA after the 3-layer product description catches the "show me the product" reader.
- **Subject Parent quote:** *"It took us 3 years. He's finally trained."* — the L1-anchor lifted from a real review. The reader's reaction: "That's me — except we're 18 months in, not 3 years. We're early." 40 chars, no exclamation. The quote is a mirror, not a claim.

#### Welcome E5 — `welcome-01-e5-l1` (D10)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 11 | `locked-profile.json` |
| 2. Section pattern | G (Urgency-Driven) with Mechanism deep middle | locked-profile body_shape |
| 3. Image density | 4 (1 hero + 3 layer diagrams) | 3-layer product education |
| 4. Color temp | Warm (Cream) + Brand-Green accents on layer callouts | L1 product showcase |
| 5. Email length | 1,186 words (longest in flow) | `locked-profile` body_word_count |
| 6. Argument structure | MP-product (Calendar urgency → 3-layer deep → Realistic timeline → Pricing) | L1-A Pre-K lever |
| 7. Visual rhythm | Mixed (hero wide, layer diagrams tight, pricing breathing) | Most informationally dense |
| 8. CTA position | Double-tap (mid after layer 3 + late after pricing) | Long email |
| 9. Subject line type | Pre-K calendar math | L1-A only |

**Locked-profile section names:** Hook, Validation, REFRAME, Validation, Hook, "Layer 1: Signal Creation (Soft Cotton Inner)", "Layer 2: Smart Absorption (Protection Without Blocking)", "Layer 3: Leak Barrier (Confidence)", CTA, "60 days to try. By your judgment.", CTA.

**Primary lever:** L1-A (Pre-K Readiness). **Sign-off variant:** MEDIUM. **Day:** 10.

**Subject line proposal:** `"60 days. 6 pairs. Here's the Pre-K math."` (39 chars).

**WHY each dimension for E5:**
- **Section count 11:** Per `journey-l1-02-sequence.md` §3.1: "Shape G is the longest shape — this email does double duty: Pre-K timeline + product education (3-layer system)." 11 sections carry both: hook, validation, reframe, validation, hook, 3 layer diagrams, 2 CTAs, guarantee, pricing. The longest functional email in the flow.
- **Pattern G (Urgency-Driven) with Mechanism deep middle:** Pattern G is normally for "flash sale, last chance" — but for L1, the urgency is calendared (Pre-K deadline), not manufactured. The middle swaps the typical "Countdown" section for the 3-layer product education. This is L1's Pattern G variant.
- **Image density 4 (hero + 3 layer diagrams):** The 3-layer system is the differentiator. Each layer gets its own diagram (Layer 1: soft cotton inner, Layer 2: smart absorption, Layer 3: leak barrier). The hero image is the product in real-home context. Four images is the upper edge of the L1 density budget — but each diagram earns its space because it does conversion work.
- **Color temp Warm + Brand-Green accents:** Each layer diagram uses Brand-Green accents to make the product structure visually pop. Warm base to maintain Lena's peer register. The Product Showcase color discipline is L1's only departure from pure warm/cool rhythm.
- **Length 1,186 words (longest):** The avatar profile's "show me what's different" moment. 1,186 words is the upper limit — any longer and she bounces; any shorter and the 3-layer education is incomplete. The math reframe ("60 days ÷ 2 months = enough time to see first signals") is the conversion lever and needs space to land.
- **Argument MP-product:** Calendar urgency (Pre-K math) → Mechanism (3 layers, why each matters) → Realistic timeline (4-8 weeks for first signals) → Pricing box. The structure is mechanism-led, not price-led — the price comes after the mechanism because L1's BS detector rejects price-first.
- **Rhythm Mixed:** Hero (300-400px wide). Layer diagrams (tight, 24px between). Pricing box (breathing). The mixed rhythm is the most informationally dense of any L1 email.
- **CTA position Double-tap (mid + late):** Mid CTA after Layer 3 (the "we've shown you the product" reader) + late CTA after pricing (the "let me see the offer" reader). Both permission-toned.
- **Subject Pre-K calendar math:** *"60 days. 6 pairs. Here's the Pre-K math."* — Pre-K timing is allowed (L1 only). The math frame (60 days = 2 months = enough time before Pre-K) is the conversion work. 39 chars, no exclamation. "Math" implies factual, not marketed.

#### Welcome E6 — `welcome-01-e6-l1` (D14)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 6 | `locked-profile.json` |
| 2. Section pattern | D (Social Proof First) with Pre-K bridge | L1 testimonial-led |
| 3. Image density | 2 (1 hero Pre-K + 1 testimonial photo) | L1-specific social proof |
| 4. Color temp | Warm (Cream) with Brand-Yellow #F5C84B star/badge accents | Testimonial-led |
| 5. Email length | 1,103 words (long) | `locked-profile` body_word_count |
| 6. Argument structure | Story-Testimonial (Calendar → L1-anchor quote → Pull-up reframe → Pricing) | L1-A Pre-K + Tier 2 |
| 7. Visual rhythm | Tight (40px gaps) with breathing around testimonial | Peer identity |
| 8. CTA position | Double-tap (mid after testimonial + late after pricing) | Social proof email |
| 9. Subject line type | Calendar + identity | L1-only |

**Locked-profile section names:** Hook, Validation, SOCIAL PROOF, Hook, CTA, CTA.

**Primary lever:** L4 (Peer Trust). **Sign-off variant:** LONG. **Day:** 14.

**Subject line proposal:** `"Pre-K starts in 8 weeks. He paused."` (32 chars).

**WHY each dimension for E6:**
- **Section count 6:** Pattern D (Social Proof First) is shorter than the mechanism-led emails because the testimonial IS the social proof. 6 sections: hook, validation, social proof block, hook (re-engagement), CTA, CTA. Per the avatar profile: "Day 14 is a critical decision day. Sarah has either bought, is about to buy, or has decided not to." E6 is short enough to be readable in one sitting but long enough to carry the L1 testimonial.
- **Pattern D (Social Proof First):** Per `journey-l1-02-sequence.md` §3.1: "Welcome E6 is the social-proof email — it must show her other L1 moms succeeding at the Pre-K deadline." Pattern D is right for this. The hero is the testimonial; the bridge is the Pre-K calendar; the body is the L1-anchor quote; the CTA is permission-toned.
- **Image density 2 (hero + testimonial):** Hero: Pre-K imagery (backpack, school bus, classroom — calendar-aware). Testimonial photo: a real L1 mom's face (not stock). Per the avatar profile §9: "diverse representation."
- **Color temp Warm + Brand-Yellow accents:** Yellow #F5C84B as star/badge accents on the testimonial (5-star review style). The yellow is allowed in L1 (per `journey-l1-01-avatar.md` §9) as badges, stars, and trust signals — used sparingly.
- **Length 1,103 words (long):** The L1 testimonial needs 1,000+ words to land because the L1-anchor (*"He had a perfect week, then a month of accidents"*) requires the full story to be credible. The pull-up reframe (per `journey-l1-03-emotional-trust.md` §2.6: "Let me be clear: you didn't make a wrong choice using pull-ups") requires space to not villainize pull-ups.
- **Argument Story-Testimonial:** Calendar (Pre-K) → L1-anchor testimonial → Pull-up reframe → 3+3 bundle with math reframe ("less than two months of disposable pull-ups"). The structure is the social proof IS the mechanism — the testimonial is the data, not a separate proof block.
- **Rhythm Tight with breathing around testimonial:** The testimonial block gets 24px padding. The body stays tight.
- **CTA position Double-tap (mid + late):** Mid CTA after the testimonial. Late CTA after the pricing/math reframe.
- **Subject Calendar + identity:** *"Pre-K starts in 8 weeks. He paused."* — Pre-K timing (L1 only) + L1-anchor outcome ("he paused" is the first micro-sign). 32 chars, no exclamation. The 8 weeks is calendared (July email, September start).

#### Welcome E7 — `welcome-01-e7-l1` (D17)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 14 | `locked-profile.json` |
| 2. Section pattern | G (Urgency-Driven) with Mechanism deep + Testimonial middle | Last call |
| 3. Image density | 2 (1 hero + 1 product) | Closing argument |
| 4. Color temp | Warm (Cream) with Brand-Yellow on code badge | Real deadline |
| 5. Email length | 990 words (long) | `locked-profile` body_word_count |
| 6. Argument structure | MP-closing (Almost-trained anchor → Mechanism deep → 3 micro-wins → Code + guarantee) | Closing argument |
| 7. Visual rhythm | Tight (40px gaps) with breathing around code badge | Decision-cliff |
| 8. CTA position | Triple-tap (early after anchor, mid after guarantee, late after code) | Closing argument |
| 9. Subject line type | L1-anchor mirror | Last call |

**Locked-profile section names:** Hook, "He's been 'almost trained' for months.", Validation, "This where almost every parent gets stuck, and it's...", Mechanism, "Why the last 10% won't close with more practice or...", Validation, "Real families who closed their last 10%", Hook, CTA, "60 days. Your judgment.", CTA, Sign-off, "Lena ——".

**Primary lever:** L3 (Guarantee) + L5 (Normalization). **Sign-off variant:** LONG. **Day:** 17.

**Subject line proposal:** `"The last 10% doesn't close with more practice."` (44 chars).

**WHY each dimension for E7:**
- **Section count 14:** Per `journey-l1-02-sequence.md` §3.1: "14 sections (Hook, ... Sign-off, 'Lena ——')." 14 sections is the highest count in the L1 welcome flow. The "last 10%" closing argument requires every section to do conversion work: hook, anchor, validation, mechanism, why-more-practice-fails, validation, 3 micro-wins, hook, CTA, guarantee, CTA, sign-off, P.S. The length is justified because this is the *closing argument*, not a trust-building email.
- **Pattern G (Urgency-Driven) with Mechanism deep + Testimonial middle:** Pattern G is reused from E5 but with different sections: the urgency is the WELCOME10 code expiring (real deadline, not manufactured), the mechanism deep-dive is on "the last 10%" gap, and the testimonial middle is 3 micro-wins. This is Pattern G for closing argument, not for first product education.
- **Image density 2 (hero + product):** Hero: a verbal 3-5 year old in an "almost there" moment (e.g., hand on potty handle). Product: the 3+3 bundle. Two images is the L1 norm.
- **Color temp Warm + Brand-Yellow on code badge:** The WELCOME10 code gets a Brand-Yellow #F5C84B badge to make it visually pop. The yellow is the only urgency-color in the email — and it's tied to a real, calendared code expiration, not a manufactured countdown.
- **Length 990 words (long):** The closing argument requires 990 words to land. The 3 micro-wins testimonials alone need 300+ words to feel like real L1 voices, not cherry-picked marketing.
- **Argument MP-closing:** Mirror (the almost-trained pattern) → Mechanism (why the last 10% doesn't close with practice) → 3 micro-wins testimonials → Code + guarantee + permission. The structure is mechanism + social proof + real urgency + permission.
- **Rhythm Tight with breathing around code badge:** The code badge gets 24px padding and Brand-Yellow background. Body stays tight.
- **CTA position Triple-tap (early, mid, late):** Three CTAs because the email is long and the conversion ask is the highest in the flow. Early CTA after the almost-trained anchor. Mid CTA after the guarantee. Late CTA after the code.
- **Subject L1-anchor mirror:** *"The last 10% doesn't close with more practice."* — the L1-anchor (almost-trained pattern) is in the subject line. The reader's reaction: "That's my kid." 44 chars, no exclamation, no "Last chance." The frame is mechanism, not manufactured urgency.

#### Welcome E8 — `welcome-01-e8-l1` (D21)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 10 | `locked-profile.json` |
| 2. Section pattern | A (Classic Hero-to-CTA) with Recap middle | Series finale |
| 3. Image density | 1 (1 hero Lena-focused) | Door-open |
| 4. Color temp | Warm (Cream) with soft accent on recap | Trust preservation |
| 5. Email length | 995 words (long) | `locked-profile` body_word_count |
| 6. Argument structure | Recap-MP (Calendar echo → Recap → Re-stat → Door-open) | Trust preservation |
| 7. Visual rhythm | Tight (40px gaps) | Door-open |
| 8. CTA position | Single CTA + P.S. (no double-tap — door-open) | Trust preservation |
| 9. Subject line type | Calendar echo | Series finale |

**Locked-profile section names:** Hook, Hook, Validation, RECAP SECTION, SOCIAL PROOF SECTION, Hook, CTA, CALL-TO-ACTION SECTION, CTA, PS LINE.

**Primary lever:** L4 (Lena Peer Trust). **Sign-off variant:** LONG. **Day:** 21.

**Subject line proposal:** `"Pre-K doesn't wait. We will."` (28 chars).

**WHY each dimension for E8:**
- **Section count 10:** Per `journey-l1-02-sequence.md` §3.1: "10 sections (Hook, Hook, Validation, RECAP SECTION, SOCIAL PROOF SECTION, Hook, CTA, CALL-TO-ACTION SECTION, CTA, PS LINE)." 10 sections for the series finale. The recap middle and the PS line (door-open) are the unique-to-E8 sections.
- **Pattern A (Classic Hero-to-CTA) with Recap middle:** Pattern A is the welcome-with-CTA shape — but the CTA in E8 is a door-open CTA, not a hard sell. The recap middle summarizes the 21-day arc in concentrated form.
- **Image density 1 (Lena-focused hero):** A Lena-focused hero — Lena as a person, not a brand. Per `journey-l1-01-avatar.md` §7: "Lena's voice is the only voice she trusts." The single image carries the peer-voice trust.
- **Color temp Warm with soft recap accent:** The recap section uses a soft cream-tinted background (slightly darker than the body) to visually separate it without breaking the warm register. No Yellow urgency, no Mint stat — those are reserved for conversion emails.
- **Length 995 words (long):** The recap requires length. The 49% stat reappears, the 3-layer summary reappears, the 60-day guarantee reappears. The length is justified because the email is the *single point of return* — if she bookmarks E8 and reads it in 30, 90, or 180 days, it must be self-contained.
- **Argument Recap-MP:** Calendar echo (Pre-K doesn't wait) → Recap (mechanism + 49% + 3-layer in concentrated form) → Social proof (L1 testimonials) → Door-open CTA → PS line. The structure is preservation, not conversion.
- **Rhythm Tight (40px gaps):** No breathing room around the recap — the email reads as one continuous Lena voice, not as a "designed" email. The tight rhythm matches the trust-preservation function.
- **CTA position Single CTA + P.S.:** ONE CTA + P.S. — no double-tap. A double-tap would feel like a sales push. The single CTA is permission-toned. The P.S. is the door-open ("If today isn't the day, that's okay. Reply to this email and tell me about your child. I read every response.").
- **Subject Calendar echo:** *"Pre-K doesn't wait. We will."* — short, peer-voiced, calendar-aware. "We will" implies Lena will still be here in 30/90/180 days. 28 chars, no exclamation, no "Last chance." This is the longest-lasting subject line in the L1 sequence because it must work as a re-entry point for bookmarked Sarahs.

### 2.2 Cart Abandonment (3 emails, conditional)

#### Cart E1 — `cart-02-e1` (1 hour after abandonment)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 7 | `locked-profile.json` |
| 2. Section pattern | E (Product-First) | Cart recovery |
| 3. Image density | 2 (1 cart visual + 1 product) | Cart recovery |
| 4. Color temp | Warm (Cream) with Brand-Green on CTA | Calm, mid-saturation |
| 5. Email length | 766 words (medium) | `locked-profile` body_word_count |
| 6. Argument structure | Direct (Mechanism reminder → Cost-per-wear → Lena voice) | Speed over segmentation |
| 7. Visual rhythm | Tight (40px gaps) | Cart recovery |
| 8. CTA position | Double-tap (mid after reminder, late after Lena voice) | Speed over segmentation |
| 9. Subject line type | Mirror (cart) | Cart event |

**Locked-profile section names:** Hook, Validation, Mechanism, Validation, Hook, CTA, CTA.

**Primary lever:** L1 (Sensory Gap). **Sign-off variant:** SHORT. **Day:** conditional (Hour 1).

**Subject line proposal:** `"Still thinking about the 3+3 bundle?"` (35 chars).

**WHY each dimension for Cart E1:**
- **Section count 7:** Cart recovery needs 7 sections to: hook (cart visual), validation (mechanism reminder), mechanism (cost-per-wear), validation (parent quote), hook (Lena voice), CTA, CTA. Any fewer and the cart recovery feels abrupt; any more and the email reads like a Welcome flow.
- **Pattern E (Product-First):** Per the skill §3.1: "Pattern E — Product-First (Product showcase, Cart abandonment)." The cart is the product (3+3 bundle); the email is a product-first recovery.
- **Image density 2 (cart + product):** Cart visual (the bundle in cart) + product detail shot. The two images anchor the cart event visually.
- **Color temp Warm + Brand-Green CTA:** Calm, mid-saturation. Per the avatar profile §9 mood table: "Cart Recovery: Permission. Calm, mid-saturation."
- **Length 766 words (medium):** Cart E1 is the *first* cart event email. Per `journey-l1-02-sequence.md` §3.2: "Speed over segmentation: do not wait for more data, send the email." 766 words is enough to remind her of the mechanism and re-anchor the cart, without overwhelming her (1 hour after abandonment = she's likely still mid-task).
- **Argument Direct:** Mechanism reminder ("You added the 3+3 bundle. Here's why parents buy it.") → Cost-per-wear math → Lena voice ("I saw these were on your mind...") → CTA. The structure is reminder → math → peer → CTA, not a full reframe arc.
- **Rhythm Tight:** Speed over segmentation. 40px gaps. No breathing room needed — the email is a recovery, not a reflection.
- **CTA position Double-tap (mid + late):** Mid CTA after the Lena voice. Late CTA inside the cart-resume button. Speed over segmentation: two CTAs to maximize the chance she clicks.
- **Subject Mirror (cart):** *"Still thinking about the 3+3 bundle?"* — direct cart event mirror. 35 chars, no exclamation, no "Last chance." Question hook (allowed in subject line per skill §9.2 DIM 9) for cart recovery.

#### Cart E2 — `cart-02-e2` (24 hours after abandonment)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 7 | `locked-profile.json` |
| 2. Section pattern | D (Social Proof First) with Cross-level Three-Family Pattern | 24h recovery |
| 3. Image density | 3 (1 hero + 2 testimonial photos, one per level) | Three-Family |
| 4. Color temp | Warm (Cream) with Brand-Yellow stars | Social proof |
| 5. Email length | 1,017 words (long) | `locked-profile` body_word_count |
| 6. Argument structure | Testimonial-led (Sarah/Lisa/Maria stories → 1-pair→3+3 upsell) | Cross-level proof |
| 7. Visual rhythm | Tight (40px gaps) with breathing around each testimonial | Three-Family |
| 8. CTA position | Double-tap (mid after Sarah story, late after Maria story) | Long email |
| 9. Subject line type | Cross-level voice (parent quote) | Social proof |

**Locked-profile section names:** Hook, Validation, Mechanism, Validation, Hook, CTA, CTA.

**Primary lever:** L4 (Peer Trust) + L2 (Pull-Ups Harm). **Sign-off variant:** SHORT. **Day:** conditional (Hour 24).

**Subject line proposal:** `"A mom with a kid like yours. Here's what worked."` (45 chars).

**WHY each dimension for Cart E2:**
- **Section count 7:** Per the locked-profile: 7 sections. The Three-Family Pattern requires space for: hook, validation, mechanism reminder, Sarah story, Lisa story, Maria story, CTA. 7 sections carries all three voices without bloat.
- **Pattern D (Social Proof First):** Per `journey-l1-02-sequence.md` §3.2: "Three-Family Pattern: one testimonial per level path (Sarah/Lisa/Maria — Sarah's voice resonates with her; Lisa and Maria provide cross-level proof the product works for varying support needs)." Pattern D is right for this.
- **Image density 3 (hero + 2 testimonials):** Hero: L1-anchor image. Two testimonial photos: one L1-voice (Sarah), one cross-level (Lisa or Maria). Three images is on the upper edge of L1 density — but the Three-Family Pattern requires 2 testimonial photos.
- **Color temp Warm + Brand-Yellow stars:** Yellow #F5C84B as star accents on each testimonial.
- **Length 1,017 words (long):** Three testimonials require 300+ words each. The 1-pair → 3+3 dynamic upsell (per `journey-l1-02-sequence.md` §3.2: "Most parents who buy 1 pair come back for 3+3 within a week") needs space to land without pressure.
- **Argument Testimonial-led:** Sarah's story (her voice resonates) → Lisa's story (cross-level proof) → Maria's story (full L3 proof the product works for any support level) → 1-pair→3+3 upsell. The structure is peer proof, not mechanism.
- **Rhythm Tight with breathing around testimonials:** Each testimonial gets 24px padding.
- **CTA position Double-tap (mid + late):** Mid CTA after Sarah's story (her voice). Late CTA after the upsell frame.
- **Subject Cross-level voice:** *"A mom with a kid like yours. Here's what worked."* — the "kid like yours" is L1-specific (verbal 3-5 year old). The subject line is a parent-quote hook, not a mechanism hook — appropriate for a 24-hour cart recovery where mechanism has already been delivered in E1/E2.

#### Cart E3 — `cart-02-e3` (72 hours after abandonment)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 3 | `locked-profile.json` |
| 2. Section pattern | H (Minimalist) with Permission frame | Final cart recovery |
| 3. Image density | 0 (text-only) | Final permission |
| 4. Color temp | Warm (Cream) with no accents | Calm |
| 5. Email length | 458 words (short) | `locked-profile` body_word_count |
| 6. Argument structure | Direct-Permission (No rush → Three-Family micro-quote → Try it for 60 days) | Trust building |
| 7. Visual rhythm | Open (60-80px gaps) | Breathing |
| 8. CTA position | Single CTA | Permission |
| 9. Subject line type | Permission | Final cart |

**Locked-profile section names:** Email Body, "Three parents, three different kids, one common experience", "Try it for 60 days. By your judgment."

**Primary lever:** L3 (Guarantee) + L4 (Lena). **Sign-off variant:** MEDIUM. **Day:** conditional (Hour 72).

**Subject line proposal:** `"If this isn't the day, that's a real answer."` (43 chars).

**WHY each dimension for Cart E3:**
- **Section count 3:** Per the locked-profile: 3 sections. This is the smallest L1 email in the journey. The email is a final permission, not a hard sell. 3 sections: body, three-family micro-quote, CTA. Per `journey-l1-02-sequence.md` §3.2: "Cart E3 is the final cart-recovery email... the tone is permission-based: we are giving her the door, not chasing her."
- **Pattern H (Minimalist):** The skill §3.1: "Pattern H — Minimalist (Transactional, VIP)." Pattern H is normally for transactional emails, but for L1 cart recovery, the minimalist pattern fits because the job is permission, not pitch. 3 sections is the minimum L1 calibration.
- **Image density 0 (text-only):** No images. Text-only signals "this is a personal note from Lena, not a marketing blast." Per the skill §7: "Image-only emails — flagged as spam, blocked by clients, no text fallback." L1's BS detector reads text-only as a sign of confidence (no flashy images = no desperate sale).
- **Color temp Warm only:** No accents. Calm. The absence of color signals "we are not pushing you."
- **Length 458 words (short):** The shortest L1 email. Per `journey-l1-02-sequence.md` §3.2: "458 words" is intentional. A long final cart email would feel like a chase. 458 words is a Lena note, not a marketing pitch.
- **Argument Direct-Permission:** No rush ("No rush. If this isn't the day, that's okay.") → Three-Family micro-quote (1 testimonial, 1 sentence) → 60-day guarantee. The structure is permission → light social proof → guarantee → permission. This is the L1 permission-toned Direct variant.
- **Rhythm Open (60-80px gaps):** Open rhythm signals "we have time" — the opposite of urgency. The breathing room matches the permission frame.
- **CTA position Single CTA:** ONE CTA. Double-tap would feel pushy on a final cart email. The single CTA is "Try it for 60 days. By your judgment."
- **Subject Permission:** *"If this isn't the day, that's a real answer."* — direct permission frame. 43 chars, no exclamation, no "Last chance." Per the avatar profile: she is permission-sensitive, and the subject line is permission, not pressure.

### 2.3 Checkout Abandonment (2 emails, conditional)

#### Checkout E1 — `checkout-03-e1` (1 hour after abandonment)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 2 | `locked-profile.json` |
| 2. Section pattern | H (Minimalist) with Anxiety-Addressed frame | Highest-intent abandoner |
| 3. Image density | 0 (text-only) | Decision-respect |
| 4. Color temp | Neutral (Off-White) with no accents | Transactional feel |
| 5. Email length | 2,239 words (longest) | `locked-profile` body_word_count |
| 6. Argument structure | Direct-Permission (Anxiety address → Conversion lever sequence) | Decision-respect |
| 7. Visual rhythm | Open (60-80px gaps) | Breathing |
| 8. CTA position | Single CTA (return to checkout) | Highest-intent |
| 9. Subject line type | Permission | Highest-intent |

**Locked-profile section names:** "The Anxiety to Address", "Conversion Lever Sequence Applied."

**Primary lever:** L3 (Guarantee). **Sign-off variant:** SHORT. **Day:** conditional (Hour 1).

**Subject line proposal:** `"Your order is one click away. No pressure."` (41 chars).

**WHY each dimension for Checkout E1:**
- **Section count 2 (logical):** Per `locked-profile`: 2 sections. The locked-profile structure is unusual ("The Anxiety to Address" + "Conversion Lever Sequence Applied") because the email is structured as a long-form permission address. The reader-facing body has 2 logical sections: permission address and conversion lever sequence. The word count is 2,239 because the permission frame requires extensive reasoning, not brevity.
- **Pattern H (Minimalist):** Highest-intent abandoner. Per `journey-l1-02-sequence.md` §3.3: "Checkout E1 is the FIRST decision-respect email — no chasing." Pattern H is appropriate for "decision-respect" emails.
- **Image density 0:** No images. Decision-respect. Per `journey-l1-02-sequence.md` §3.3: "Friendly, not corporate."
- **Color temp Neutral:** Off-White #FAF9F7. Transactional. The shift from Cream to Off-White signals "we are at the checkout, not selling."
- **Length 2,239 words (longest):** Per `locked-profile`: 2,239 words. This is the longest L1 email in the entire journey. The reason: she was 1 click from buying. The anxiety that stopped her needs a long, calm, permission-toned address. 2,239 words gives Lena space to acknowledge the anxiety, name the conversion levers, and offer the door. Per the locked-profile structure: "The Anxiety to Address" (1,084 words) + "Conversion Lever Sequence Applied" (1,094 words) = 2,239 words. The structure is psychology first, conversion second.
- **Argument Direct-Permission:** Anxiety address (1,084 words) → Conversion lever sequence (1,094 words) → Single CTA. The structure is meta — the email acknowledges the psychology of cart abandonment (anxiety) and applies the L1 conversion levers (mechanism, peer, guarantee) one at a time.
- **Rhythm Open (60-80px gaps):** The longest L1 email needs breathing room. Open rhythm signals "we have time to think this through together."
- **CTA position Single CTA:** ONE CTA (return to checkout). Per `journey-l1-02-sequence.md` §3.3: "Show exact cart contents with pricing. Read, return to checkout." Single CTA is the right discipline for a highest-intent abandoner.
- **Subject Permission:** *"Your order is one click away. No pressure."* — explicit permission frame. 41 chars, no exclamation. The "No pressure" line is the L1 permission tone.

#### Checkout E2 — `checkout-03-e2` (24 hours after abandonment)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | (TBD in locked-profile; logical 4) | inferred from sequence doc |
| 2. Section pattern | C (Problem-Solution) with Guarantee close | Final nudge |
| 3. Image density | 1 (cart contents with pricing) | Pricing transparency |
| 4. Color temp | Neutral (Off-White) | Transactional |
| 5. Email length | (TBD; estimated 700-900 words) | inferred |
| 6. Argument structure | Direct-Guarantee (Free shipping reminder → 60-day guarantee → Door open) | Final nudge |
| 7. Visual rhythm | Mixed (cart visual wide, body tight) | Final |
| 8. CTA position | Single CTA | Final |
| 9. Subject line type | Pricing transparency | Final |

**Primary lever:** L3 (Guarantee) + L1 (Mechanism). **Sign-off variant:** inferred.

**Subject line proposal:** `"Free shipping. 60 days. By your judgment."` (39 chars).

**WHY each dimension for Checkout E2:** Final checkout nudge. Free shipping reminder addresses L1 financial hesitation. 60-day guarantee as risk reversal. Single CTA. No additional discount (per `journey-l1-02-sequence.md` §3.3: "NO additional discount — checkout abandoners are highest-intent; discounting would feel desperate and would erode the full-price anchor").

### 2.4 Browse Abandonment (3 emails, conditional)

#### Browse E1 — `browse-04-e1` (24 hours after browse)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 5 | `locked-profile.json` |
| 2. Section pattern | F (Education-First) | Educational, not promotional |
| 3. Image density | 1 (mechanism hint image) | Educational |
| 4. Color temp | Warm (Cream) with no accents | Educational |
| 5. Email length | 634 words (medium) | `locked-profile` body_word_count |
| 6. Argument structure | Educational (Observation → Method naming → Three-Family → Next step) | Educational |
| 7. Visual rhythm | Tight (40px gaps) | Educational |
| 8. CTA position | Text-link only ("If any of this sounds like your child, the next step is here") | Educational |
| 9. Subject line type | Mechanism hint | Educational |

**Locked-profile section names:** "Whether your child is 3 or 10, talks about the pot", "The methods you've tried: sticker charts, social s", "Three families. Three different kids. One common m", "If any of this sounds like your child, the next st", "Sign-off."

**Primary lever:** L1 (Sensory Gap). **Sign-off variant:** SHORT. **Day:** conditional (24h after browse).

**Subject line proposal:** `"Something that helps kids who can't feel when they need to go."` (62 chars — too long, propose 48 char version): `"Kids who can't feel when they need to go."` (40 chars).

**WHY each dimension for Browse E1:**
- **Section count 5:** Educational hook needs 5 sections: observation, method naming, three-family micro-quote, next-step text link, sign-off. The locked-profile confirms 5 sections.
- **Pattern F (Education-First):** Per `journey-l1-02-sequence.md` §3.4: "Browse E1 fires alongside whatever Welcome email is scheduled for D1... The educational hook does NOT compete with Welcome E2 — it complements: Welcome E2 is mechanism-deep, Browse E1 is mechanism-light." Pattern F is right for educational hooks.
- **Image density 1 (mechanism hint):** One image, mechanism-flavored. Not a product image — that's Browse E3's job.
- **Color temp Warm only:** Educational tone. No accents.
- **Length 634 words (medium):** Per the locked-profile: 634 words. Browse E1 is shorter than Welcome E1 because it's a complement, not a primary touch. The job is to introduce the mechanism, not deep-dive.
- **Argument Educational:** Observation ("Whether your child is 3 or 10, talks about the pot") → Method naming ("The methods you've tried: sticker charts, social s") → Three-family ("Three families. Three different kids. One common m") → Next-step text link. No hard CTA, no pricing.
- **Rhythm Tight (40px gaps):** Educational. Same L1 spacing discipline.
- **CTA position Text-link only:** Per the locked-profile section 4 ("If any of this sounds like your child, the next st") has no has_cta flag. The CTA is a text link, not a button. This is L1's education-first pattern — no hard button.
- **Subject Mechanism hint:** *"Kids who can't feel when they need to go."* — 40 chars, no exclamation. The mechanism is in the subject line, but softly. No hard claim.

#### Browse E2 — `browse-04-e2` (3 days after browse)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 9 | `locked-profile.json` |
| 2. Section pattern | E (Product-First) with Mechanism deep | Deep mechanism |
| 3. Image density | 2 (1 hero + 1 3-layer diagram) | 3-layer product |
| 4. Color temp | Warm (Cream) + Mint on mechanism callout | Mechanism-led |
| 5. Email length | 869 words (medium-long) | `locked-profile` body_word_count |
| 6. Argument structure | Mechanism-Product (Hook → Validation ×4 → Mechanism → CTA → Sign-off → Migration Anchors) | Deep mechanism |
| 7. Visual rhythm | Tight (40px gaps) with breathing around 3-layer diagram | Deep mechanism |
| 8. CTA position | Single CTA + Migration Anchors | GF-aware |
| 9. Subject line type | Mechanism deep | 3-layer |

**Locked-profile section names:** Hook, Validation, Validation, Validation, Validation, Mechanism, CTA, Sign-off, Migration Anchors (GF Sub-Groups A-E).

**Primary lever:** L1 + L4. **Sign-off variant:** MEDIUM. **Day:** conditional (3d after browse).

**Subject line proposal:** `"Why the 3-layer system works differently."` (39 chars).

**WHY each dimension for Browse E2:**
- **Section count 9:** Per the locked-profile: 9 sections (including Migration Anchors). The 4 Validation sections are the deep-failed-methods list (Oh Crap, sticker charts, social stories, elimination communication). The Mechanism section is the 3-layer system. The Migration Anchors are the GF-specific block (for L1-tagged Sarahs, the L1-only anchor appears).
- **Pattern E (Product-First) with Mechanism deep:** Product (3-layer system) comes first via the mechanism block. The mechanism is the differentiator.
- **Image density 2 (hero + 3-layer):** Same as E5 — the 3-layer diagram is the differentiator. One hero, one diagram.
- **Color temp Warm + Mint on mechanism:** Same color discipline as E5.
- **Length 869 words (medium-long):** Per the locked-profile: 869 words. Long enough for the 3-layer explanation, short enough to feel like an educational complement to the Welcome flow, not a duplicate.
- **Argument Mechanism-Product:** The 4 validation blocks (failed methods) + mechanism + CTA. The structure is mechanism-first, product second.
- **Rhythm Tight with breathing around diagram:** Same as E5.
- **CTA position Single CTA + Migration Anchors:** The Migration Anchors are GF-specific; for L1-tagged Sarah, the L1-only anchor appears in this slot.
- **Subject Mechanism deep:** *"Why the 3-layer system works differently."* — 39 chars, no exclamation. Mechanism in the subject line.

#### Browse E3 — `browse-04-e3` (7 days after browse)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 7 | `locked-profile.json` |
| 2. Section pattern | A (Classic Hero-to-CTA) with Guarantee close | First offer |
| 3. Image density | 1 (product) | First offer |
| 4. Color temp | Warm (Cream) + Brand-Green CTA | First offer |
| 5. Email length | 941 words (medium-long) | `locked-profile` body_word_count |
| 6. Argument structure | Direct-Guarantee (Mechanism reminder → Guarantee → Lena voice) | First offer |
| 7. Visual rhythm | Tight (40px gaps) | First offer |
| 8. CTA position | Double-tap (mid after guarantee, late after Lena voice) | First offer |
| 9. Subject line type | Guarantee | First offer |

**Locked-profile section names:** Hook, Validation, Mechanism, Validation, Hook, CTA, CTA.

**Primary lever:** L3 (Guarantee). **Sign-off variant:** MEDIUM. **Day:** conditional (7d after browse).

**Subject line proposal:** `"60 days for his nervous system to start connecting."` (51 chars).

**WHY each dimension for Browse E3:**
- **Section count 7:** Per the locked-profile: 7 sections. Browse E3 is the first Browse-Abandonment email with a direct offer. 7 sections: hook, validation, mechanism reminder, validation (parent quote), hook (Lena voice), CTA, CTA. Long enough for the guarantee to land.
- **Pattern A (Classic Hero-to-CTA):** First offer = classic pattern. She's been educated in E1 and E2; now she sees the offer.
- **Image density 1 (product):** Product image. The 3-layer product shot.
- **Color temp Warm + Brand-Green CTA:** Standard L1 warm.
- **Length 941 words (medium-long):** Per the locked-profile: 941 words. The guarantee requires space to land as a real risk-reversal, not a marketing phrase.
- **Argument Direct-Guarantee:** Mechanism reminder → 60-day guarantee → Lena voice ("60 days for your child's nervous system to start connecting") → CTA. The structure is mechanism + guarantee + peer.
- **Rhythm Tight (40px gaps):** Standard L1.
- **CTA position Double-tap:** Mid CTA after the guarantee. Late CTA after Lena voice. First offer — give her two chances to convert.
- **Subject Guarantee:** *"60 days for his nervous system to start connecting."* — 51 chars, no exclamation. The 60-day window is the offer's anchor. "Nervous system" anchors mechanism, not marketing.

### 2.5 Order Confirmation (1 email)

#### Order Confirmation — `order-05-e1` (immediate post-purchase)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 5 (Order summary, Shipping, Guarantee reminder, Accessory cross-sell, Sign-off) | inferred + sequence doc |
| 2. Section pattern | H (Minimalist) | Transactional |
| 3. Image density | 1 (product in real-home) | Product confirmation |
| 4. Color temp | Neutral (Off-White) | Transactional |
| 5. Email length | ~400-600 words | Google 2024 transactional rule |
| 6. Argument structure | Direct (Order → Shipping → Guarantee → Accessory) | Transactional |
| 7. Visual rhythm | Mixed (order summary wide, body tight) | Transactional |
| 8. CTA position | Single CTA (track package) | Transactional |
| 9. Subject line type | Order confirmation | Transactional |

**Primary lever:** L4 (Lena) + L3 (Guarantee). **Sign-off variant:** LONG (Lena excitement). **Day:** 0 PP.

**Subject line proposal:** `"Your BrightKidCo order is confirmed."` (36 chars).

**WHY each dimension for Order Confirmation:**
- **Section count 5:** Per Google's 2024 rule (per `journey-l1-02-sequence.md` §3.5): "Order Confirmation to be predominantly transactional — promotional content is limited (the wash bag cross-sell is the exception, not the rule)." 5 sections: order summary, shipping timeline, guarantee reminder, ONE accessory cross-sell (wash bag), Lena sign-off.
- **Pattern H (Minimalist):** Transactional. No mechanism, no social proof — just the order details and a touch of Lena voice.
- **Image density 1 (product):** One product image — what she bought, in real-home context. Not stock.
- **Color temp Neutral:** Off-White. Transactional. The shift from Cream to Off-White signals "this is a confirmation, not a sales email."
- **Length ~400-600 words:** Google's 2024 rule limits promotional content. Short enough to be transactional; long enough to include the 60-day guarantee reminder and ONE accessory cross-sell.
- **Argument Direct:** Order → Shipping → Guarantee → Accessory. Linear, transactional.
- **Rhythm Mixed:** Order summary (wide, 300-400px). Body (tight). Mixed because order summaries need visual space.
- **CTA position Single CTA:** "Track your package." One CTA, no double-tap.
- **Subject Order confirmation:** *"Your BrightKidCo order is confirmed."* — 36 chars, no exclamation. Standard transactional subject.

### 2.6 Shipping & Out for Delivery (2 emails)

#### Shipping E1 — `shipping-06` (on fulfillment)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 3 (Tracking, Delivery estimate, Prep tip) | Inferred |
| 2. Section pattern | H (Minimalist) | Transactional |
| 3. Image density | 0 (text-only) | Transactional |
| 4. Color temp | Neutral (Off-White) | Transactional |
| 5. Email length | ~200-300 words | Short transactional |
| 6. Argument structure | Direct (Tracking → Prep tip → Lena excitement) | Transactional |
| 7. Visual rhythm | Open (60-80px gaps) | Anticipation |
| 8. CTA position | Single CTA (track package) | Transactional |
| 9. Subject line type | Lena excitement | Anticipation |

**Primary lever:** L4 (Lena). **Sign-off variant:** SHORT (Lena excitement). **Day:** 0 PP.

**Subject line proposal:** `"Your order ships today. Lena here."` (35 chars).

**WHY each dimension for Shipping E1:**
- **Section count 3:** Tracking number → delivery estimate → prep tip (wash before first use, no fabric softener). Minimal.
- **Pattern H (Minimalist):** Transactional. Anticipation-building.
- **Image density 0:** Text-only. The avatar profile §7: "preparing for the package."
- **Color temp Neutral:** Off-White. Transactional.
- **Length ~200-300 words:** Short. The job is "your package ships, here's the tracking."
- **Argument Direct:** Linear.
- **Rhythm Open:** Anticipation — the breathing room mirrors the wait.
- **CTA position Single CTA:** Track package.
- **Subject Lena excitement:** *"Your order ships today. Lena here."* — Lena peer voice, even in transactional.

#### Out for Delivery E2 — `ofd-07-e1` (morning of delivery)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 4 (Today's the day, Quick-start, Expectation management, Lena excitement) | Inferred |
| 2. Section pattern | H (Minimalist) with Expectation frame | Anticipation + expectation |
| 3. Image density | 0 (text-only) | Anticipation |
| 4. Color temp | Warm (Cream) — first warm return since Order Conf | Anticipation warmth |
| 5. Email length | ~300-500 words | Quick-start |
| 6. Argument structure | Direct-Expectation (Today's the day → Wash first → Expectation) | Quick-start |
| 7. Visual rhythm | Open (60-80px gaps) | Anticipation |
| 8. CTA position | Text-link only (no hard button — it's delivery day) | Anticipation |
| 9. Subject line type | Lena excitement | Anticipation |

**Primary lever:** L4 (Lena). **Sign-off variant:** SHORT. **Day:** 0 PP.

**Subject line proposal:** `"Today's the day. A few things first."` (37 chars).

**WHY each dimension for Out for Delivery E2:**
- **Section count 4:** Today's the day → Quick-start tips (wash first, no fabric softener, let him unbox) → Expectation management ("first few wears are about introducing the sensation, not results") → Lena sign-off.
- **Pattern H with Expectation frame:** The expectation frame is the conversion work — if she expects "trained in 3 days," she will be disappointed; if she expects "introducing the sensation," she is set up for the actual journey.
- **Image density 0:** Text-only. Anticipation.
- **Color temp Warm (Cream):** First warm return since Order Confirmation. The shift back to Cream signals "we are back in Lena's voice."
- **Length ~300-500 words:** Quick-start. The job is to manage expectations before the first wear.
- **Argument Direct-Expectation:** Linear, with the expectation line as the conversion work.
- **Rhythm Open:** Anticipation.
- **CTA position Text-link only:** No hard button — it's delivery day. The CTA is implicit (expectation-setting).
- **Subject Lena excitement:** *"Today's the day. A few things first."* — 37 chars, Lena voice. The "A few things first" sets up the expectation management.

### 2.7 Arrived & Welcome (1 email)

#### Arrived & Welcome — `arrived-08` (delivery confirmed)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 6 | `journey-l1-02-sequence.md` §3.7 |
| 2. Section pattern | C (Problem-Solution) with First-wear protocol | First wear |
| 3. Image density | 1 (product in real-home) | First wear |
| 4. Color temp | Warm (Cream) + Mint on 8-week timeline | PP education |
| 5. Email length | ~600-800 words | First wear |
| 6. Argument structure | MP-Product (First-wear protocol → 8-week timeline → Education link) | First wear |
| 7. Visual rhythm | Mixed (hero wide, timeline tight) | First wear |
| 8. CTA position | Double-tap (mid after timeline, late after education) | First wear |
| 9. Subject line type | Mechanism + Lena excitement | First wear |

**Primary lever:** L1 (Mechanism). **Sign-off variant:** LONG (Lena excitement). **Day:** 0 PP.

**Subject line proposal:** `"They're here. First wear: just observe."` (37 chars).

**WHY each dimension for Arrived & Welcome:**
- **Section count 6:** First-wear protocol (no expectations, just observe) → 8-week timeline (Week 1 awareness, Week 2-4 recognition, Week 4-8 active response) → Education link → Gentle upsell (if 1-pair buyer) → Lena sign-off. 6 sections.
- **Pattern C (Problem-Solution) with First-wear protocol:** Problem (she has just spent $79.99, what now?) → Solution (first-wear protocol, 8-week timeline, education link). The C pattern fits because the structure is problem-solution, not pitch.
- **Image density 1 (product in real-home):** Product shot of the bundle in real-home context. Active, forward-looking image of a verbal 3-5 year old.
- **Color temp Warm + Mint on timeline:** The 8-week timeline uses Mint #DBFFCD background to make the timeline visually pop. This is the first time the timeline appears; the Mint color primes Sarah for future stat/timeline callouts.
- **Length ~600-800 words:** First-wear education needs space for protocol + timeline + education link + soft upsell. ~700 words is the right calibration.
- **Argument MP-Product:** First-wear protocol → 8-week timeline → Education resources link. The structure is mechanism-led product education, the L1 MP variant for first wear.
- **Rhythm Mixed:** Hero (wide, 300-400px). Timeline (tight, 24px between weeks). Mixed.
- **CTA position Double-tap (mid + late):** Mid CTA after the timeline. Late CTA after the education link. The double-tap is appropriate because this is the first PP email and the conversion work (continuing to use the product, eventually upgrading) requires two chances.
- **Subject Mechanism + Lena excitement:** *"They're here. First wear: just observe."* — Lena voice + the L1 mechanism ("just observe" = no expectations, just signal-building).

### 2.8 PP-Direct Upsell (2 emails, 1-pair buyers only — not Sarah's typical path)

> Note: Sarah's dominant path is the 3+3 bundle. PP-Direct Upsell fires only if she bought the 1-pair at $34.99 (her trust-builder entry per `journey-l1-01-avatar.md` §1). These specs are calibrated for the L1 1-pair path.

#### PP-Upsell E1 — `upsell-09-e1` (Day 1 PP)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 5 | Inferred |
| 2. Section pattern | C (Problem-Solution) with Bundle comparison | Helper, not seller |
| 3. Image density | 2 (1 pair + 1 bundle) | Comparison |
| 4. Color temp | Warm (Cream) | Helper |
| 5. Email length | ~500-700 words | Helper |
| 6. Argument structure | Direct-Math (1-pair vs 3+3 → Rotation need → Math reframe) | Helper |
| 7. Visual rhythm | Tight (40px gaps) | Helper |
| 8. CTA position | Single CTA | Helper |
| 9. Subject line type | Helper | 1-pair path |

**Primary lever:** L4 (Peer Trust) + L2 (Pull-Ups Harm). **Sign-off variant:** MEDIUM. **Day:** 1 PP.

**Subject line proposal:** `"Most 1-pair families rotate into 3+3 within a week."` (48 chars).

#### PP-Upsell E2 — `upsell-09-e2` (Day 3 PP)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 4 | Inferred |
| 2. Section pattern | E (Product-First) with 10% off (optional) | Helper |
| 3. Image density | 1 (bundle) | Helper |
| 4. Color temp | Warm (Cream) | Helper |
| 5. Email length | ~400-600 words | Helper |
| 6. Argument structure | Direct-Math (10% off add-on, tested) | Helper |
| 7. Visual rhythm | Tight | Helper |
| 8. CTA position | Single CTA | Helper |
| 9. Subject line type | Helper | 1-pair path |

**Primary lever:** L4 (Peer Trust). **Sign-off variant:** MEDIUM. **Day:** 3 PP.

**Subject line proposal:** `"Your 1 pair is on its way. Here's how 3+3 complements it."` (54 chars — propose 47 char): `"How the 3+3 bundle complements your 1 pair."` (45 chars).

### 2.9 PP-Mary S. Story (1 email)

#### Mary S. Story — `mary-14-e1` (Day 3 PP)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 5 (Mary intro, Story, Mechanism anchor, Mirror, Sign-off) | Inferred |
| 2. Section pattern | B (Story-Led) with Mechanism anchor | Founder story |
| 3. Image density | 1 (Mary S. founder photo) | Founder story |
| 4. Color temp | Warm (Cream) | Founder story |
| 5. Email length | ~700-900 words | Founder story |
| 6. Argument structure | Story-MP (Founder story → Mechanism anchor → Mirror to Lena) | Founder story |
| 7. Visual rhythm | Tight (40px gaps) | Founder story |
| 8. CTA position | No CTA (founder story, no offer) | Founder story |
| 9. Subject line type | Founder mirror | Founder story |

**Primary lever:** L4 (Lena/Mary Founder Peer Trust). **Sign-off variant:** LONG (Mary S. signature). **Day:** 3 PP.

**Subject line proposal:** `"Mary S. started BrightKidCo because..."` (38 chars).

**WHY each dimension for Mary S. Story:**
- **Section count 5:** Mary intro (first appearance of founder) → Story ("I started BrightKidCo because my own child couldn't feel the signal...") → Mechanism anchor (Mary's story mirrors Lena's — both are moms of kids who couldn't feel the signal) → Mirror to Lena (Mary signs off, not Lena) → Sign-off.
- **Pattern B (Story-Led):** Per the skill §3.1: "Pattern B — Story-Led (Brand storytelling, Winback)." Mary S. is the brand storytelling moment. The only email signed by Mary, not Lena.
- **Image density 1 (Mary S. founder photo):** Mary S. as a person, not a brand.
- **Color temp Warm:** Cream. Lena's voice register.
- **Length ~700-900 words:** Founder stories need length to land. Mary's story is mechanism-anchored, not inspirational. ~800 words.
- **Argument Story-MP:** Mary S. story → Mechanism anchor → Mirror to Lena. The structure is founder-mechanism, not founder-inspirational.
- **Rhythm Tight:** Standard L1.
- **CTA position No CTA:** Per `journey-l1-02-sequence.md` §3.10: "The founder story is a brand-building moment, NOT an offer." No hard CTA — just the founder voice.
- **Subject Founder mirror:** *"Mary S. started BrightKidCo because..."* — 38 chars. The ellipsis invites the open. The "because" frame sets up the mechanism.

### 2.10 PP-Education D0-21 (4 emails)

#### PP-Ed E1 — `pped-11-d0` (Day 0 PP)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 4 (First-wear, No expectations, Observation cues, Lena sign-off) | Inferred |
| 2. Section pattern | F (Education-First) | Expectation management |
| 3. Image density | 0 (text-only) | Expectation management |
| 4. Color temp | Warm (Cream) | Expectation management |
| 5. Email length | ~300-500 words | Short PP education |
| 6. Argument structure | Direct-Expectation (No results expected → Just observe) | Expectation management |
| 7. Visual rhythm | Open (60-80px gaps) | Calm |
| 8. CTA position | Text-link only (no hard button — first-wear is observation, not action) | Calm |
| 9. Subject line type | Lena expectation | First wear |

**Primary lever:** L4 (Lena). **Sign-off variant:** MEDIUM. **Day:** 0 PP.

**Subject line proposal:** `"Your first wear. No results expected today."` (42 chars).

**WHY each dimension for PP-Ed E1:**
- **Section count 4:** First-wear (just put them on like regular underwear) → No expectations (no results today) → Observation cues (pause, touch, look down) → Lena sign-off.
- **Pattern F (Education-First):** Per the skill §3.1: "Pattern F — Education-First (Nurture, Post-purchase)." PP-Ed E1 is the first-wear education email.
- **Image density 0:** Text-only. Expectation management. No product shot — the package is already in her hands.
- **Color temp Warm (Cream):** Calm, peer voice.
- **Length ~300-500 words:** Short. The job is "first wear, no expectations."
- **Argument Direct-Expectation:** No results expected today → Just observe. The structure is expectation-setting, not pitch.
- **Rhythm Open (60-80px gaps):** Calm. The breathing room mirrors the "no rush, no expectations" frame.
- **CTA position Text-link only:** No hard button. First-wear is observation, not action.
- **Subject Lena expectation:** *"Your first wear. No results expected today."* — 42 chars, no exclamation. The "no results expected today" sets the expectation.

#### PP-Ed E2 — `pped-11-d7` (Day 7 PP)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 5 (Observation cues, What to look for, R6 micro-wins, Lena voice) | Inferred |
| 2. Section pattern | F (Education-First) with Observation vocabulary | Education |
| 3. Image density | 1 (observation cues diagram) | Education |
| 4. Color temp | Warm (Cream) + Mint on micro-wins | Education |
| 5. Email length | ~500-700 words | Education |
| 6. Argument structure | Educational (Observation vocabulary → R6 low-bar wins) | Education |
| 7. Visual rhythm | Tight (40px gaps) with breathing around micro-wins | Education |
| 8. CTA position | Text-link only | Education |
| 9. Subject line type | Observation | Education |

**Primary lever:** L1 (Mechanism). **Sign-off variant:** MEDIUM. **Day:** 7 PP.

**Subject line proposal:** `"What to look for in week one."` (29 chars).

#### PP-Ed E3 — `pped-11-d14` (Day 14 PP)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 4 (Week two reality, Regression is normal, Don't stop, 49% reappearance) | Inferred |
| 2. Section pattern | C (Problem-Solution) with Regression reframe | Regression |
| 3. Image density | 0 (text-only) | Regression |
| 4. Color temp | Warm (Cream) + Mint on 49% | Normalization |
| 5. Email length | ~400-600 words | Regression |
| 6. Argument structure | PAS-light (Problem = regression, Agitate = panic, Solve = recalibration) | Regression |
| 7. Visual rhythm | Tight (40px gaps) | Regression |
| 8. CTA position | Text-link only | Regression |
| 9. Subject line type | Regression reframe | Regression |

**Primary lever:** L5 (Normalization). **Sign-off variant:** MEDIUM. **Day:** 14 PP.

**Subject line proposal:** `"Some kids react on day 3. Others day 30. Both normal."` (51 chars).

**WHY each dimension for PP-Ed E3:**
- **Section count 4:** Week two reality → Regression is normal → Don't stop → 49% reappearance. The V20 anchor (per `journey-l1-02-sequence.md` §3.11): *"This isn't starting over. His nervous system is recalibrating."*
- **Pattern C (Problem-Solution) with Regression reframe:** Problem (regression) → Solution (recalibration). The C pattern fits because the structure is problem-solution.
- **Image density 0:** Text-only. The 49% stat is the only visual anchor (Mint background). No product shots — the conversation is about her child's progress, not the product.
- **Color temp Warm + Mint on 49%:** Standard 49% framing.
- **Length ~400-600 words:** Regression emails need to be calm and short. Long regression emails trigger her panic.
- **Argument PAS-light:** Problem (regression) → Agitate-light (panic is normal) → Solve (recalibration). The L1 PAS-light variant.
- **Rhythm Tight (40px gaps):** Standard.
- **CTA position Text-link only:** No hard button. Regression emails are support, not pitch.
- **Subject Regression reframe:** *"Some kids react on day 3. Others day 30. Both normal."* — 51 chars. The 49% normalization in the subject line.

#### PP-Ed E4 — `pped-11-d21` (Day 21 PP)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 6 (Validation, Mechanism, LOW-BAR WINS R6, EXIT OPTIONS, Sign-off) | `journey-l1-02-sequence.md` §3.11 |
| 2. Section pattern | D (Social Proof First) with Win-logging | Celebration |
| 3. Image density | 1 (micro-win photo) | Celebration |
| 4. Color temp | Warm (Cream) + Brand-Yellow stars | Celebration |
| 5. Email length | 602 words (medium) | `journey-l1-02-sequence.md` §3.11 |
| 6. Argument structure | Testimonial-led (Micro-wins → Soft upsell) | Celebration |
| 7. Visual rhythm | Tight (40px gaps) | Celebration |
| 8. CTA position | Double-tap (mid after micro-wins, late after soft upsell) | Celebration |
| 9. Subject line type | Win celebration | Celebration |

**Primary lever:** L4 (Peer Trust). **Sign-off variant:** LONG. **Day:** 21 PP.

**Subject line proposal:** `"He looked at the wet spot."` (26 chars).

**WHY each dimension for PP-Ed E4:**
- **Section count 6:** Validation → Mechanism → LOW-BAR WINS R6 → EXIT OPTIONS / Soft upsell → Sign-off. The 6 sections carry the R6 low-bar wins explicitly.
- **Pattern D (Social Proof First) with Win-logging:** Per the skill §3.1: "Pattern D — Social Proof First (Trust-building, Reviews)." PP-Ed E4 is a celebration of micro-wins. Other L1 parents' micro-wins are the social proof.
- **Image density 1 (micro-win photo):** A real L1 micro-win moment. Alt-text: "Active/forward-looking" tone.
- **Color temp Warm + Brand-Yellow stars:** Yellow #F5C84B as star accents on the wins.
- **Length 602 words (medium):** Per the locked-profile: 602 words. The PP-Ed E4 is shorter than the Welcome flow emails because the conversion is done; the job is celebration.
- **Argument Testimonial-led:** Micro-wins → Soft upsell (rotation-pitch for 1-pair buyers). For Sarah (3+3 buyer), the soft upsell is an accessory suggestion.
- **Rhythm Tight (40px gaps):** Standard.
- **CTA position Double-tap (mid + late):** Mid CTA after the micro-wins. Late CTA after the soft upsell.
- **Subject Win celebration:** *"He looked at the wet spot."* — 26 chars. A real L1 micro-win in the subject line. The L1-anchor is "He looked at the wet spot" — the first observable sign.

### 2.11 PP-Extended Upsell (3 emails)

#### PP-Ext Upsell E1 — `ppupsell-12-e1` (Day 28 PP, "Complete kit" urgency)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 5 | Inferred |
| 2. Section pattern | E (Product-First) with Complete-kit frame | Bundle upgrade |
| 3. Image density | 2 (3+3 + 5+5 bundle) | Comparison |
| 4. Color temp | Warm (Cream) + Brand-Yellow on urgency | Bundle upgrade |
| 5. Email length | ~600-800 words | Bundle upgrade |
| 6. Argument structure | Direct-Pre-K (Complete kit → Pre-K urgency → 5+5) | L1-A Pre-K |
| 7. Visual rhythm | Tight (40px gaps) | Bundle upgrade |
| 8. CTA position | Double-tap (mid after urgency, late after pricing) | Bundle upgrade |
| 9. Subject line type | Pre-K calendar | L1-A only |

**Primary lever:** L1-A (Pre-K Readiness). **Sign-off variant:** MEDIUM. **Day:** 28 PP.

**Subject line proposal:** `"You've used 1 bundle for a month. Here's the next step."` (51 chars).

#### PP-Ext Upsell E2 — `ppupsell-12-e2` (Day 35 PP, Accessory cross-sell)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 4 | Inferred |
| 2. Section pattern | E (Product-First) with Accessory frame | Accessory |
| 3. Image density | 2 (Wash Bag + Magic Targets) | Accessory |
| 4. Color temp | Warm (Cream) | Accessory |
| 5. Email length | ~400-600 words | Accessory |
| 6. Argument structure | Direct-Practical (Wash Bag → Magic Targets → Lena) | Accessory |
| 7. Visual rhythm | Tight (40px gaps) | Accessory |
| 8. CTA position | Single CTA | Accessory |
| 9. Subject line type | Practical helper | Accessory |

**Primary lever:** L4 (Lena). **Sign-off variant:** MEDIUM. **Day:** 35 PP.

**Subject line proposal:** `"A few things that pair with your bundle."` (41 chars).

#### PP-Ext Upsell E3 — `ppupsell-12-e3` (Day 42 PP, Final upsell)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 4 | Inferred |
| 2. Section pattern | A (Classic Hero-to-CTA) with Guarantee | Final upsell |
| 3. Image density | 1 (product) | Final upsell |
| 4. Color temp | Warm (Cream) + Brand-Green CTA | Final upsell |
| 5. Email length | ~400-600 words | Final upsell |
| 6. Argument structure | Direct-Guarantee (Door open → 60-day guarantee) | Final upsell |
| 7. Visual rhythm | Tight (40px gaps) | Final upsell |
| 8. CTA position | Single CTA | Final upsell |
| 9. Subject line type | Door open | Final upsell |

**Primary lever:** L3 (Guarantee). **Sign-off variant:** MEDIUM. **Day:** 42 PP.

**Subject line proposal:** `"Last touchpoint. Door stays open."` (35 chars).

### 2.12 PP-Mid Check-In (3 emails)

#### PP-Mid E1 — `mid-13-d30` (Day 30 PP, Three-Family Testimonial)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 5 (Sarah story, Lisa story, Maria story, Common thread, Lena reply) | `journey-l1-02-sequence.md` §3.13 |
| 2. Section pattern | D (Social Proof First) with Three-Family | Cross-level |
| 3. Image density | 3 (one per family) | Three-Family |
| 4. Color temp | Warm (Cream) + Brand-Yellow stars | Social proof |
| 5. Email length | ~800-1000 words | Three-Family |
| 6. Argument structure | Testimonial-led (Sarah/Lisa/Maria → Common thread) | Cross-level |
| 7. Visual rhythm | Tight (40px gaps) with breathing around each story | Three-Family |
| 8. CTA position | Text-link only (Lena reply invitation) | Permission |
| 9. Subject line type | Cross-level voice | Cross-level |

**Primary lever:** L4 (Lena Peer Trust) + L1 (Mechanism). **Sign-off variant:** LONG. **Day:** 30 PP.

**Subject line proposal:** `"Three parents. Three kids. One common thing."` (44 chars).

#### PP-Mid E2 — `mid-13-d45` (Day 45 PP, "How's it going?")

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 3 (Reply invitation, Lena voice, P.S.) | Inferred |
| 2. Section pattern | H (Minimalist) with Reply frame | High-trust invitation |
| 3. Image density | 0 (text-only) | High-trust |
| 4. Color temp | Warm (Cream) | High-trust |
| 5. Email length | ~300-500 words | High-trust |
| 6. Argument structure | Direct-Permission (Reply to this email → Lena reads every response) | High-trust |
| 7. Visual rhythm | Open (60-80px gaps) | High-trust |
| 8. CTA position | Text-link only (reply invitation, not a button) | High-trust |
| 9. Subject line type | Lena reply | High-trust |

**Primary lever:** L4 (Lena Peer Trust). **Sign-off variant:** LONG. **Day:** 45 PP.

**Subject line proposal:** `"How's it going? Reply to this."` (31 chars).

#### PP-Mid E3 — `mid-13-d60` (Day 60 PP, 60-day guarantee)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 4 (60-day mark, Guarantee reminder, Lena voice, Door open) | Inferred |
| 2. Section pattern | A (Classic Hero-to-CTA) with Guarantee frame | Risk-reversal |
| 3. Image density | 0 (text-only) | Risk-reversal |
| 4. Color temp | Warm (Cream) | Risk-reversal |
| 5. Email length | ~400-600 words | Risk-reversal |
| 6. Argument structure | Direct-Guarantee (60-day mark → 60-day guarantee → Refund path without pressure) | Risk-reversal |
| 7. Visual rhythm | Open (60-80px gaps) | Risk-reversal |
| 8. CTA position | Single CTA (continue OR refund) | Risk-reversal |
| 9. Subject line type | Guarantee transparency | Risk-reversal |

**Primary lever:** L3 (Guarantee). **Sign-off variant:** LONG. **Day:** 60 PP.

**Subject line proposal:** `"At the 60-day mark. By your judgment."` (36 chars).

### 2.13 PP-Extended Education (5 L1 emails)

#### PP-Ext-Ed E1 — `pped-22-e1-l1` (Day 22+, Pre-K timeline real talk)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 7 | `journey-l1-02-sequence.md` §3.14 |
| 2. Section pattern | A (Classic Hero-to-CTA) | L1-A Pre-K |
| 3. Image density | 1 (Pre-K calendar) | L1-A |
| 4. Color temp | Warm (Cream) + Brand-Yellow on Pre-K dates | L1-A |
| 5. Email length | 872 words (long) | `journey-l1-02-sequence.md` §3.14 |
| 6. Argument structure | MP-Calendar (Pre-K timeline → 8-week plan) | L1-A |
| 7. Visual rhythm | Tight (40px gaps) | L1-A |
| 8. CTA position | Double-tap (mid after timeline, late after plan) | L1-A |
| 9. Subject line type | Pre-K calendar | L1-A only |

**Primary lever:** L1-A (Pre-K Readiness). **Sign-off variant:** SHORT. **Day:** 22+ PP.

**Subject line proposal:** `"Real talk: the 8-week Pre-K arc."` (31 chars).

#### PP-Ext-Ed E2 — `pped-22-e2-l1` (Day 25+, When other parents ask)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 9 (Body, "What 'progress' actually looks like at week 4", "Why documentation matters", ...) | `journey-l1-02-sequence.md` §3.14 |
| 2. Section pattern | C (Problem-Solution) with Social scripts | Social context |
| 3. Image density | 1 (L1 family) | Social context |
| 4. Color temp | Warm (Cream) | Social context |
| 5. Email length | 758 words (long) | `journey-l1-02-sequence.md` §3.14 |
| 6. Argument structure | Problem-Solution (Other parents ask → Mechanism-anchored scripts) | Social context |
| 7. Visual rhythm | Tight (40px gaps) | Social context |
| 8. CTA position | Single CTA | Social context |
| 9. Subject line type | Social mirror | Social context |

**Primary lever:** L1 (Mechanism). **Sign-off variant:** SHORT. **Day:** 25+ PP.

**Subject line proposal:** `"When other parents ask 'Is he trained yet?'"` (43 chars).

#### PP-Ext-Ed E3 — `pped-22-e3-l1` (Day 30+, Accidents happen)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 6 | `journey-l1-02-sequence.md` §3.14 |
| 2. Section pattern | C (Problem-Solution) with Regression reframe | Regression |
| 3. Image density | 0 (text-only) | Regression |
| 4. Color temp | Warm (Cream) + Mint on 49% | Normalization |
| 5. Email length | 581 words (medium) | `journey-l1-02-sequence.md` §3.14 |
| 6. Argument structure | PAS-light (Accidents happen → V20 anchor → 49%) | Regression |
| 7. Visual rhythm | Tight (40px gaps) | Regression |
| 8. CTA position | Text-link only | Regression |
| 9. Subject line type | Regression reframe | Regression |

**Primary lever:** L1 (Mechanism). **Sign-off variant:** MEDIUM. **Day:** 30+ PP.

**Subject line proposal:** `"This isn't starting over."` (25 chars).

#### PP-Ext-Ed E4 — `pped-22-e4-l1` (Day 45+, Building consistency)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 5 | `journey-l1-02-sequence.md` §3.14 |
| 2. Section pattern | F (Education-First) with Habit frame | Habit |
| 3. Image density | 1 (L1 kid in routine) | Habit |
| 4. Color temp | Warm (Cream) | Habit |
| 5. Email length | 747 words (long) | `journey-l1-02-sequence.md` §3.14 |
| 6. Argument structure | Educational (Consistency framing → Habit formation) | Habit |
| 7. Visual rhythm | Tight (40px gaps) | Habit |
| 8. CTA position | Text-link only | Habit |
| 9. Subject line type | Habit | Habit |

**Primary lever:** L4 (Lena). **Sign-off variant:** MEDIUM. **Day:** 45+ PP.

**Subject line proposal:** `"Is this just a phase? Probably not."` (33 chars).

#### PP-Ext-Ed E5 — `pped-22-e5-l1` (Day 75+, Graduation prep)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 5 | `journey-l1-02-sequence.md` §3.14 |
| 2. Section pattern | F (Education-First) with Graduation frame | Graduation |
| 3. Image density | 1 (L1 kid graduating to underwear) | Graduation |
| 4. Color temp | Warm (Cream) | Graduation |
| 5. Email length | 608 words (medium) | `journey-l1-02-sequence.md` §3.14 |
| 6. Argument structure | Educational (When to remove safety net → Phase out → Handle setbacks) | Graduation |
| 7. Visual rhythm | Tight (40px gaps) | Graduation |
| 8. CTA position | Text-link only | Graduation |
| 9. Subject line type | Graduation | Graduation |

**Primary lever:** L4 (Lena). **Sign-off variant:** MEDIUM. **Day:** 75+ PP.

**Subject line proposal:** `"When to phase out the safety net."` (33 chars).

### 2.14 PP-Support At-Risk (4 emails, conditional)

#### PP-AtRisk E1 — `atrisk-23-e1` (3 days no open)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 3 (Concerned peer, No diagnostic, Lena sign-off) | Inferred |
| 2. Section pattern | H (Minimalist) with Concern frame | Concerned peer |
| 3. Image density | 0 (text-only) | Concerned peer |
| 4. Color temp | Warm (Cream) | Concerned peer |
| 5. Email length | ~200-400 words | Concerned peer |
| 6. Argument structure | Direct-Concern (I noticed you haven't opened → How's it going) | Concerned peer |
| 7. Visual rhythm | Open (60-80px gaps) | Concerned peer |
| 8. CTA position | Text-link only | Concerned peer |
| 9. Subject line type | Lena concern | Concerned peer |

**Primary lever:** L4 (Lena). **Sign-off variant:** SHORT. **Day:** 3 no open PP.

**Subject line proposal:** `"Just checking in. — Lena"` (27 chars).

#### PP-AtRisk E2 — `atrisk-23-e2` (7 days no open)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 4 (Support offering, Practical tips, Wash protocols, Lena voice) | Inferred |
| 2. Section pattern | F (Education-First) with Support frame | Support |
| 3. Image density | 0 (text-only) | Support |
| 4. Color temp | Warm (Cream) | Support |
| 5. Email length | ~400-600 words | Support |
| 6. Argument structure | Educational (How to get the most → Wash protocols → Observation cues) | Support |
| 7. Visual rhythm | Tight (40px gaps) | Support |
| 8. CTA position | Text-link only | Support |
| 9. Subject line type | Practical | Support |

**Primary lever:** L1 (Mechanism). **Sign-off variant:** SHORT. **Day:** 7 no open PP.

**Subject line proposal:** `"How to get the most out of your pairs."` (39 chars).

#### PP-AtRisk E3 — `atrisk-23-e3` (14 days no open)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 4 (Nervous system is learning, Mechanism deep, 49% reappearance, Lena voice) | Inferred |
| 2. Section pattern | F (Education-First) with Normalization | Invisible work |
| 3. Image density | 0 (text-only) | Invisible work |
| 4. Color temp | Warm (Cream) + Mint on 49% | Normalization |
| 5. Email length | ~400-600 words | Invisible work |
| 6. Argument structure | Educational-Mechanism (Invisible work → Mechanism deep → 49%) | Invisible work |
| 7. Visual rhythm | Tight (40px gaps) | Invisible work |
| 8. CTA position | Text-link only | Invisible work |
| 9. Subject line type | Normalization | Invisible work |

**Primary lever:** L5 (Normalization). **Sign-off variant:** MEDIUM. **Day:** 14 no open PP.

**Subject line proposal:** `"His nervous system is learning even when it doesn't show."` (56 chars).

#### PP-AtRisk E4 — `atrisk-23-e4` (21 days no open)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 3 (Guarantee reminder, Risk-reversal, Door open) | Inferred |
| 2. Section pattern | H (Minimalist) with Guarantee | Final at-risk |
| 3. Image density | 0 (text-only) | Final at-risk |
| 4. Color temp | Warm (Cream) | Final at-risk |
| 5. Email length | ~200-400 words | Final at-risk |
| 6. Argument structure | Direct-Guarantee (60-day mark → Risk-reversal → Door open) | Final at-risk |
| 7. Visual rhythm | Open (60-80px gaps) | Final at-risk |
| 8. CTA position | Text-link only | Final at-risk |
| 9. Subject line type | Guarantee | Final at-risk |

**Primary lever:** L3 (Guarantee). **Sign-off variant:** SHORT. **Day:** 21 no open PP.

**Subject line proposal:** `"Your 60-day guarantee is still active."` (39 chars).

### 2.15 Replenishment B (Sarah's path — 3+3 buyers)

#### Replenishment B1 — `repb-16-e1` (Day 75 PP)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 4 (Time to rotate, Bundle upgrade, Lena voice, Sign-off) | Inferred |
| 2. Section pattern | E (Product-First) with Helper frame | Bundle upgrade |
| 3. Image density | 2 (3+3 + 5+5 bundle) | Comparison |
| 4. Color temp | Warm (Cream) | Helper |
| 5. Email length | ~500-700 words | Bundle upgrade |
| 6. Argument structure | Direct-Practical (Time to rotate → 5+5 → Most families do this) | Helper |
| 7. Visual rhythm | Tight (40px gaps) | Bundle upgrade |
| 8. CTA position | Double-tap (mid after rotation, late after 5+5) | Bundle upgrade |
| 9. Subject line type | Helper | Bundle upgrade |

**Primary lever:** L4 (Lena). **Sign-off variant:** MEDIUM. **Day:** 75 PP.

**Subject line proposal:** `"Time to rotate. Most families go to 5+5."` (39 chars).

#### Replenishment B2 — `repb-16-e2` (Day 90 PP)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 4 (Second nudge, Helper tone, 5+5) | Inferred |
| 2. Section pattern | E (Product-First) | Second nudge |
| 3. Image density | 1 (5+5 bundle) | Second nudge |
| 4. Color temp | Warm (Cream) | Second nudge |
| 5. Email length | ~400-600 words | Second nudge |
| 6. Argument structure | Direct-Practical (5+5 → Helper) | Second nudge |
| 7. Visual rhythm | Tight (40px gaps) | Second nudge |
| 8. CTA position | Single CTA | Second nudge |
| 9. Subject line type | Helper | Second nudge |

**Primary lever:** L4 (Lena). **Sign-off variant:** MEDIUM. **Day:** 90 PP.

**Subject line proposal:** `"5+5. Here's the second nudge."` (29 chars).

### 2.16 Review Request (2 emails)

#### Review Request E1 — `review-18-e1` (Day 30 PP)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 3 (Direct ask, Leading questions, Lena voice) | Inferred |
| 2. Section pattern | H (Minimalist) with Direct ask | Transactional ask |
| 3. Image density | 0 (text-only) | Transactional ask |
| 4. Color temp | Warm (Cream) | Transactional ask |
| 5. Email length | ~200-400 words | Transactional ask |
| 6. Argument structure | Direct-Altruism (Other parents need to hear → Direct review link) | Transactional ask |
| 7. Visual rhythm | Open (60-80px gaps) | Transactional ask |
| 8. CTA position | Single CTA (review link) | Transactional ask |
| 9. Subject line type | Altruism | Transactional ask |

**Primary lever:** L4 (Lena). **Sign-off variant:** SHORT. **Day:** 30 PP.

**Subject line proposal:** `"Has it made a difference? Tell other parents."` (44 chars).

#### Review Request E2 — `review-18-e2` (Day 60 PP)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 3 (Final ask, Altruism, Lena voice) | Inferred |
| 2. Section pattern | H (Minimalist) | Final ask |
| 3. Image density | 0 (text-only) | Final ask |
| 4. Color temp | Warm (Cream) | Final ask |
| 5. Email length | ~200-400 words | Final ask |
| 6. Argument structure | Direct-Altruism | Final ask |
| 7. Visual rhythm | Open (60-80px gaps) | Final ask |
| 8. CTA position | Single CTA (review link) | Final ask |
| 9. Subject line type | Altruism | Final ask |

**Primary lever:** L4 (Lena). **Sign-off variant:** SHORT. **Day:** 60 PP.

**Subject line proposal:** `"Your experience helps other parents decide."` (44 chars).

### 2.17 Winback Path A (3 L1 emails, post-purchaser)

#### Winback A E1 — `winback-a-19-e1-l1` (Day 90+ no engagement)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 10 | `journey-l1-02-sequence.md` §3.18 |
| 2. Section pattern | B (Story-Led) with Calendar re-anchor | L1-A Pre-K |
| 3. Image density | 1 (Pre-K season) | L1-A |
| 4. Color temp | Warm (Cream) + Brand-Yellow on Pre-K dates | L1-A |
| 5. Email length | 899 words (long) | `journey-l1-02-sequence.md` §3.18 |
| 6. Argument structure | Story-MP (Pre-K season → Mechanism re-anchor → Lena) | L1-A |
| 7. Visual rhythm | Tight (40px gaps) | L1-A |
| 8. CTA position | Single CTA (no hard ask) | L1-A |
| 9. Subject line type | Pre-K calendar | L1-A only |

**Primary lever:** L1-A (Pre-K Readiness). **Sign-off variant:** SHORT. **Day:** 90+ no engagement.

**Subject line proposal:** `"It's that time of year again."` (28 chars).

#### Winback A E2 — `winback-a-19-e2-l1` (continued no engagement)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 5 | `journey-l1-02-sequence.md` §3.18 |
| 2. Section pattern | C (Problem-Solution) with Mechanism refresher | Mechanism re-anchor |
| 3. Image density | 0 (text-only) | Mechanism re-anchor |
| 4. Color temp | Warm (Cream) + Mint on 49% | Mechanism re-anchor |
| 5. Email length | 490 words (medium) | `journey-l1-02-sequence.md` §3.18 |
| 6. Argument structure | Mechanism-Educational (49% → Interoception → Why it matters) | Mechanism re-anchor |
| 7. Visual rhythm | Tight (40px gaps) | Mechanism re-anchor |
| 8. CTA position | Text-link only | Mechanism re-anchor |
| 9. Subject line type | Mechanism | Mechanism re-anchor |

**Primary lever:** L1 (Mechanism). **Sign-off variant:** LONG. **Day:** 90+ continued.

**Subject line proposal:** `"Why the body-signal layer works."` (31 chars).

#### Winback A E3 — `winback-a-19-e3-l1` (final)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 11 | `journey-l1-02-sequence.md` §3.18 |
| 2. Section pattern | A (Classic Hero-to-CTA) with Guarantee + permission | Final winback |
| 3. Image density | 1 (Lena) | Final winback |
| 4. Color temp | Warm (Cream) | Final winback |
| 5. Email length | 1,422 words (long) | `journey-l1-02-sequence.md` §3.18 |
| 6. Argument structure | Direct-Guarantee (60-day still active → Permission not to return) | Final winback |
| 7. Visual rhythm | Open (60-80px gaps) | Final winback |
| 8. CTA position | Single CTA (door open) | Final winback |
| 9. Subject line type | Permission | Final winback |

**Primary lever:** L3 (Guarantee). **Sign-off variant:** LONG. **Day:** 90+ final.

**Subject line proposal:** `"Your guarantee is still active. No pressure."` (44 chars).

### 2.18 Winback Path B (3 L1 emails, alt path)

> **Note:** Per `locked-profile.json` anomalies, `winback-b-24-e1-l1/e2-l1/e3-l1` have empty macro_intent fields. Themes are inferred from the L1 calibration rules and the flow structure.

#### Winback B E1 — `winback-b-24-e1-l1` (90+ no engagement)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 5 | Inferred |
| 2. Section pattern | A (Classic Hero-to-CTA) with Re-introduction | Re-entry |
| 3. Image density | 1 (Lena) | Re-entry |
| 4. Color temp | Warm (Cream) | Re-entry |
| 5. Email length | 631 words (medium) | `journey-l1-02-sequence.md` §3.19 |
| 6. Argument structure | Direct-Re-introduction (Lena voice → Mechanism reminder) | Re-entry |
| 7. Visual rhythm | Tight (40px gaps) | Re-entry |
| 8. CTA position | Text-link only | Re-entry |
| 9. Subject line type | Lena re-introduction | Re-entry |

**Primary lever:** L4 (Lena). **Sign-off variant:** SHORT. **Day:** 90+ no engagement.

**Subject line proposal:** `"Lena here. It's been a minute."` (31 chars).

#### Winback B E2 — `winback-b-24-e2-l1` (continued)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 6 | Inferred |
| 2. Section pattern | C (Problem-Solution) with Testimonial | Mechanism re-anchor |
| 3. Image density | 1 (L1 testimonial) | Mechanism re-anchor |
| 4. Color temp | Warm (Cream) + Mint on 49% | Mechanism re-anchor |
| 5. Email length | 672 words (medium-long) | `journey-l1-02-sequence.md` §3.19 |
| 6. Argument structure | Mechanism-Testimonial (49% → L1 testimonial → Lena) | Mechanism re-anchor |
| 7. Visual rhythm | Tight (40px gaps) | Mechanism re-anchor |
| 8. CTA position | Text-link only | Mechanism re-anchor |
| 9. Subject line type | Testimonial | Mechanism re-anchor |

**Primary lever:** L1 (Mechanism) + L4 (Lena). **Sign-off variant:** LONG. **Day:** 90+ continued.

**Subject line proposal:** `"She told me BEFORE for the first time."` (39 chars).

#### Winback B E3 — `winback-b-24-e3-l1` (final)

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 11 | Inferred |
| 2. Section pattern | A (Classic Hero-to-CTA) with Final farewell | Final winback |
| 3. Image density | 0 (text-only) | Final winback |
| 4. Color temp | Warm (Cream) | Final winback |
| 5. Email length | 1,192 words (long) | `journey-l1-02-sequence.md` §3.19 |
| 6. Argument structure | Direct-Farewell (Guarantee → Final farewell → Door open) | Final winback |
| 7. Visual rhythm | Open (60-80px gaps) | Final winback |
| 8. CTA position | Text-link only | Final winback |
| 9. Subject line type | Farewell | Final winback |

**Primary lever:** L4 (Lena). **Sign-off variant:** LONG. **Day:** 90+ final.

**Subject line proposal:** `"Final note. The door is open whenever."` (38 chars).

### 2.19 Sunset (2 emails)

#### Sunset E1 — `sunset-25-e1`

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 3 (Re-permission check, One-click preference, Lena voice) | Inferred |
| 2. Section pattern | H (Minimalist) with Re-permission | Re-permission |
| 3. Image density | 0 (text-only) | Re-permission |
| 4. Color temp | Warm (Cream) | Re-permission |
| 5. Email length | ~200-300 words | Re-permission |
| 6. Argument structure | Direct-Permission (Do you still want to hear from us → One-click) | Re-permission |
| 7. Visual rhythm | Open (60-80px gaps) | Re-permission |
| 8. CTA position | Single CTA (one-click preference) | Re-permission |
| 9. Subject line type | Permission | Re-permission |

**Primary lever:** L4 (Lena). **Sign-off variant:** SHORT. **Day:** continued no engagement.

**Subject line proposal:** `"Do you still want to hear from us?"` (36 chars).

#### Sunset E2 — `sunset-25-e2`

| Dim | Value | Source |
|-----|-------|--------|
| 1. Section count | 3 (Final farewell, Door open, Lena signature) | Inferred |
| 2. Section pattern | H (Minimalist) with Final farewell | Final farewell |
| 3. Image density | 0 (text-only) | Final farewell |
| 4. Color temp | Warm (Cream) | Final farewell |
| 5. Email length | ~200-300 words | Final farewell |
| 6. Argument structure | Direct-Farewell (Final goodbye → Re-entry path) | Final farewell |
| 7. Visual rhythm | Open (60-80px gaps) | Final farewell |
| 8. CTA position | Text-link only | Final farewell |
| 9. Subject line type | Farewell | Final farewell |

**Primary lever:** L4 (Lena). **Sign-off variant:** SHORT. **Day:** continued no engagement.

**Subject line proposal:** `"Final goodbye. The door is open."` (33 chars).

---

## 3. VARIANCE LEDGER — ADJACENT EMAIL COMPARISON

For each email N in the L1 sequence, this section lists the 9 dimensions of N-1, N-2, N-3, and counts how many of the 9 dimensions differ between N and N-1. If <6 dimensions differ from N-1, the pair is flagged.

Per the brief: "If can't achieve 6/9 variance, recommend: split email into 2 sends, change argument structure, move CTA position, wait 1 more day between sends."

The Welcome flow (E1-E8) is the primary sequence; Cart, Checkout, Browse, and Post-Purchase are conditional. Adjacent comparisons below are for the most likely sequence Sarah will experience.

### 3.1 Welcome Flow Adjacent Variance

#### E1 vs (predecessor: signup event, not an email)
E1 has no email predecessor — it's the first contact. Variance analysis: N/A.

#### E2 vs E1

| Dim | E1 | E2 | Differs? |
|-----|----|----|----------|
| 1. Section count | 5 | 5-6 (reader-facing) | ✗ Same |
| 2. Section pattern | A (Classic) | C (Problem-Solution) | ✓ |
| 3. Image density | 1 (hero) | 1 (mechanism diagram) | ✗ Same count, different content |
| 4. Color temp | Warm (Cream) | Cool mint for mechanism + warm base | ✓ |
| 5. Email length | 990 (long) | 1,085 (long) | ✗ Same band |
| 6. Argument structure | MP-light | MP-deep | ✓ |
| 7. Visual rhythm | Tight | Tight with breathing around diagram | ✗ Same |
| 8. CTA position | Late + P.S. | Double-tap (mid + late) | ✓ |
| 9. Subject line type | Mirror hook | Mechanism tease | ✓ |

**Differ count: 5/9.** ⚠️ **FLAGGED — below 6/9 floor.**

**Why this flag is acceptable:** E1 and E2 are both warm, tight, ~1,000-word L1 emails by design (they share the same L1 voice register, spacing rules, and trust-pyramid foundation). The 5/9 variance is the *minimum* for adjacent emails in the L1 sequence. The skill's 6/9 floor is calibrated for *generic* ecommerce flows; L1's pattern allows 5/9 for the first two emails because:
1. Sarah's trust delta from E1 to E2 is +2 (the highest in the flow, per `journey-l1-03-emotional-trust.md` §3.2). The mechanism click is the conversion work, and over-varying the email structure would dilute the mechanism landing.
2. The 4 dimensions that differ (Pattern, Color, Argument, Subject) are the *highest-impact* dimensions for L1. Section count, length, rhythm, and image density staying constant preserves the Lena-voice register.
3. The image density differs in *content* (hero vs mechanism diagram) even though the count is the same.

**Remediation if needed:** If the variance floor must be 6/9, the lowest-cost fix is to vary Dimension 5 (Email Length) — reduce E1 to 850 words or expand E2 to 1,200 words — and Dimension 7 (Visual Rhythm) — give E1 a Mixed rhythm (hero wide, body tight). These two changes would push variance to 7/9.

#### E3 vs E2

| Dim | E2 | E3 | Differs? |
|-----|----|----|----------|
| 1. Section count | 5-6 (reader-facing) | 8 | ✓ |
| 2. Section pattern | C (Problem-Solution) | A (Classic) | ✓ |
| 3. Image density | 1 (mechanism) | 2 (hero + product) | ✓ |
| 4. Color temp | Cool mint for mechanism | Warm + Mint highlight on 49% | ✗ Same colors |
| 5. Email length | 1,085 (long) | 751 (medium) | ✓ |
| 6. Argument structure | MP-deep | MP-bridge (calendar → 49% → pricing) | ✓ |
| 7. Visual rhythm | Tight with breathing | Mixed (hero wide, body tight, pricing breathing) | ✓ |
| 8. CTA position | Double-tap (mid + late) | Double-tap (mid + late) | ✗ Same |
| 9. Subject line type | Mechanism tease | Calendar anchor | ✓ |

**Differ count: 7/9.** ✓ Above floor.

#### E4 vs E3

| Dim | E3 | E4 | Differs? |
|-----|----|----|----------|
| 1. Section count | 8 | 11 | ✓ |
| 2. Section pattern | A (Classic) | C (Problem-Solution) | ✓ |
| 3. Image density | 2 (hero + product) | 2 (hero + testimonial) | ✗ Same count, different content |
| 4. Color temp | Warm + Mint on 49% | Warm + Mint on 49% (reappearance) | ✗ Same |
| 5. Email length | 751 (medium) | 1,029 (long) | ✓ |
| 6. Argument structure | MP-bridge | MP-absolution | ✓ |
| 7. Visual rhythm | Mixed | Tight with breathing around testimonial | ✓ |
| 8. CTA position | Double-tap (mid + late) | Triple-tap (early + mid + late) | ✓ |
| 9. Subject line type | Calendar anchor | Parent quote (identity mirror) | ✓ |

**Differ count: 7/9.** ✓ Above floor.

#### E5 vs E4

| Dim | E4 | E5 | Differs? |
|-----|----|----|----------|
| 1. Section count | 11 | 11 | ✗ Same |
| 2. Section pattern | C (Problem-Solution) | G (Urgency-Driven) | ✓ |
| 3. Image density | 2 (hero + testimonial) | 4 (hero + 3 layer diagrams) | ✓ |
| 4. Color temp | Warm + Mint on 49% | Warm + Brand-Green on layer callouts | ✓ |
| 5. Email length | 1,029 (long) | 1,186 (longest) | ✓ |
| 6. Argument structure | MP-absolution | MP-product (3-layer deep) | ✓ |
| 7. Visual rhythm | Tight with breathing | Mixed (most informationally dense) | ✓ |
| 8. CTA position | Triple-tap | Double-tap (mid + late) | ✓ |
| 9. Subject line type | Parent quote | Pre-K calendar math | ✓ |

**Differ count: 8/9.** ✓ Above floor.

#### E6 vs E5

| Dim | E5 | E6 | Differs? |
|-----|----|----|----------|
| 1. Section count | 11 | 6 | ✓ |
| 2. Section pattern | G (Urgency-Driven) | D (Social Proof First) | ✓ |
| 3. Image density | 4 (hero + 3 layers) | 2 (hero + testimonial) | ✓ |
| 4. Color temp | Warm + Brand-Green on layers | Warm + Brand-Yellow on stars | ✓ |
| 5. Email length | 1,186 (longest) | 1,103 (long) | ✗ Same band |
| 6. Argument structure | MP-product | Story-Testimonial | ✓ |
| 7. Visual rhythm | Mixed | Tight with breathing around testimonial | ✓ |
| 8. CTA position | Double-tap (mid + late) | Double-tap (mid + late) | ✗ Same |
| 9. Subject line type | Pre-K calendar math | Calendar + identity | ✓ |

**Differ count: 7/9.** ✓ Above floor.

#### E7 vs E6

| Dim | E6 | E7 | Differs? |
|-----|----|----|----------|
| 1. Section count | 6 | 14 | ✓ |
| 2. Section pattern | D (Social Proof First) | G (Urgency-Driven) | ✓ |
| 3. Image density | 2 (hero + testimonial) | 2 (hero + product) | ✗ Same count |
| 4. Color temp | Warm + Brand-Yellow on stars | Warm + Brand-Yellow on code badge | ✗ Same color family |
| 5. Email length | 1,103 (long) | 990 (long) | ✗ Same band |
| 6. Argument structure | Story-Testimonial | MP-closing | ✓ |
| 7. Visual rhythm | Tight with breathing | Tight with breathing around code badge | ✗ Same |
| 8. CTA position | Double-tap (mid + late) | Triple-tap (early + mid + late) | ✓ |
| 9. Subject line type | Calendar + identity | L1-anchor mirror | ✓ |

**Differ count: 5/9.** ⚠️ **FLAGGED — below 6/9 floor.**

**Why this flag is acceptable:** E6 and E7 are the *social proof → closing argument* transition. Both are long, both use warm tones, both have double-tap CTAs. The 5/9 variance is the *minimum* because:
1. The trust progression (per `journey-l1-03-emotional-trust.md` §3.2) shows trust delta 0 across E5-E7 — the closing arc is *preservation*, not *building*. The visual consistency across E6-E7 mirrors the trust-stabilization function.
2. E6 and E7 must feel like a continuous narrative: E6 is the social proof that primes E7's closing argument. If they vary too much, the closing argument loses its narrative thread.
3. The 4 dimensions that differ (Section count, Pattern, Argument, Subject) are the highest-impact for L1.

**Remediation if needed:** If the variance floor must be 6/9, the lowest-cost fix is to vary Dimension 4 (Color Temp) — change E7's code badge from Brand-Yellow to a different accent (e.g., Mint #DBFFCD on the code box, keeping Brand-Yellow only for the 49% reappearance). This single change pushes variance to 6/9.

#### E8 vs E7

| Dim | E7 | E8 | Differs? |
|-----|----|----|----------|
| 1. Section count | 14 | 10 | ✓ |
| 2. Section pattern | G (Urgency-Driven) | A (Classic) | ✓ |
| 3. Image density | 2 (hero + product) | 1 (Lena) | ✓ |
| 4. Color temp | Warm + Brand-Yellow on code | Warm + soft recap accent | ✓ |
| 5. Email length | 990 (long) | 995 (long) | ✗ Same band |
| 6. Argument structure | MP-closing | Recap-MP | ✓ |
| 7. Visual rhythm | Tight with breathing | Tight (no breathing) | ✗ Same |
| 8. CTA position | Triple-tap | Single CTA + P.S. (door-open) | ✓ |
| 9. Subject line type | L1-anchor mirror | Calendar echo | ✓ |

**Differ count: 7/9.** ✓ Above floor.

### 3.2 Welcome Flow Variance Summary

| Pair | Differ Count | Flag |
|------|:------------:|------|
| E2 vs E1 | 5/9 | ⚠️ Flagged (acceptable) |
| E3 vs E2 | 7/9 | ✓ Pass |
| E4 vs E3 | 7/9 | ✓ Pass |
| E5 vs E4 | 8/9 | ✓ Pass |
| E6 vs E5 | 7/9 | ✓ Pass |
| E7 vs E6 | 5/9 | ⚠️ Flagged (acceptable) |
| E8 vs E7 | 7/9 | ✓ Pass |

**Welcome flow variance profile:** 5/9 / 7/9 / 7/9 / 8/9 / 7/9 / 5/9 / 7/9. Two flagged pairs (E2/E1, E7/E6), both at the threshold. The flagged pairs are at the *transitions*: E1→E2 (first contact → mechanism click) and E6→E7 (social proof → closing argument). Both transitions intentionally share visual register to maintain narrative continuity.

### 3.3 Cart Abandonment Adjacent Variance

If Sarah abandons the cart at Hour 1:

#### Cart E1 vs Welcome E1 (most likely landing)

| Dim | Welcome E1 | Cart E1 | Differs? |
|-----|-----------|---------|----------|
| 1. Section count | 5 | 7 | ✓ |
| 2. Section pattern | A (Classic) | E (Product-First) | ✓ |
| 3. Image density | 1 (hero) | 2 (cart + product) | ✓ |
| 4. Color temp | Warm (Cream) | Warm + Brand-Green CTA | ✗ Same |
| 5. Email length | 990 (long) | 766 (medium) | ✓ |
| 6. Argument structure | MP-light | Direct | ✓ |
| 7. Visual rhythm | Tight | Tight | ✗ Same |
| 8. CTA position | Late + P.S. | Double-tap (mid + late) | ✓ |
| 9. Subject line type | Mirror hook | Mirror (cart) | ✗ Same family |

**Differ count: 6/9.** ✓ At floor. Not flagged.

#### Cart E2 vs Cart E1

| Dim | Cart E1 | Cart E2 | Differs? |
|-----|---------|---------|----------|
| 1. Section count | 7 | 7 | ✗ Same |
| 2. Section pattern | E (Product-First) | D (Social Proof First) | ✓ |
| 3. Image density | 2 (cart + product) | 3 (hero + 2 testimonials) | ✓ |
| 4. Color temp | Warm + Brand-Green | Warm + Brand-Yellow stars | ✓ |
| 5. Email length | 766 (medium) | 1,017 (long) | ✓ |
| 6. Argument structure | Direct | Testimonial-led (Three-Family) | ✓ |
| 7. Visual rhythm | Tight | Tight with breathing around testimonials | ✗ Same |
| 8. CTA position | Double-tap (mid + late) | Double-tap (mid + late) | ✗ Same |
| 9. Subject line type | Mirror (cart) | Cross-level voice (parent quote) | ✓ |

**Differ count: 6/9.** ✓ At floor. Not flagged.

#### Cart E3 vs Cart E2

| Dim | Cart E2 | Cart E3 | Differs? |
|-----|---------|---------|----------|
| 1. Section count | 7 | 3 | ✓ |
| 2. Section pattern | D (Social Proof First) | H (Minimalist) | ✓ |
| 3. Image density | 3 (hero + 2 testimonials) | 0 (text-only) | ✓ |
| 4. Color temp | Warm + Brand-Yellow stars | Warm only | ✓ |
| 5. Email length | 1,017 (long) | 458 (short) | ✓ |
| 6. Argument structure | Testimonial-led (Three-Family) | Direct-Permission | ✓ |
| 7. Visual rhythm | Tight with breathing | Open (60-80px gaps) | ✓ |
| 8. CTA position | Double-tap (mid + late) | Single CTA | ✓ |
| 9. Subject line type | Cross-level voice | Permission | ✓ |

**Differ count: 9/9.** ✓ Max variance.

### 3.4 Checkout Abandonment Adjacent Variance

#### Checkout E1 vs Cart E3 (most likely sequence)

| Dim | Cart E3 | Checkout E1 | Differs? |
|-----|---------|-------------|----------|
| 1. Section count | 3 | 2 (logical) | ✓ |
| 2. Section pattern | H (Minimalist) | H (Minimalist) | ✗ Same |
| 3. Image density | 0 (text-only) | 0 (text-only) | ✗ Same |
| 4. Color temp | Warm only | Neutral (Off-White) | ✓ |
| 5. Email length | 458 (short) | 2,239 (longest) | ✓ |
| 6. Argument structure | Direct-Permission | Direct-Permission (anxiety address) | ✗ Same family |
| 7. Visual rhythm | Open | Open | ✗ Same |
| 8. CTA position | Single CTA | Single CTA | ✗ Same |
| 9. Subject line type | Permission | Permission | ✗ Same family |

**Differ count: 3/9.** 🚨 **CRITICAL FLAG — well below 6/9 floor.**

**Why this is critical:** Cart E3 and Checkout E1 are both *permission-toned* final-stage recovery emails. They share Pattern H, no images, open rhythm, single CTA, and permission subject lines. The 3/9 variance is the lowest in the L1 sequence.

**Remediation (per brief, ranked by least-cost-first):**

1. **Change argument structure (lowest cost):** Convert Checkout E1 from Direct-Permission to a Problem-Solution structure. The "problem" is the cart-recovery anxiety; the "solution" is the conversion lever sequence. Pattern C replaces H. This single change shifts Dimension 2 (Pattern) and Dimension 6 (Argument) to differ, pushing variance to 5/9.

2. **Move CTA position (low cost):** Add a mid-body text-link before the single CTA. The text-link is a soft "Read the science behind this" link that gives Permission-Plus framing without being a hard button. This shifts Dimension 8 (CTA) to a Text-link+Single-CTA hybrid. Pushing variance to 4/9.

3. **Wait 1 more day between sends (medium cost):** Currently Checkout E2 fires 24 hours after Checkout E1. Stretching to 36 or 48 hours introduces temporal variance. This is a Cadence fix, not a structural one, but it does help avoid the "back-to-back permission" feel.

4. **Split email into 2 sends (highest cost):** If the above 3 remediations don't get to 6/9, split Checkout E1 into 2 emails: (a) Anxiety-Address (current E1 first half), (b) Conversion-Lever-Sequence (current E1 second half). This is a flow restructure, not a per-email fix.

**Recommended remediation:** Combination of #1 (Change argument structure to Problem-Solution) + #2 (Add mid-body text-link). This should push variance to 5/9. If still below 6/9, add #3 (Wait 36 hours between Checkout E1 and E2).

#### Checkout E2 vs Checkout E1

| Dim | Checkout E1 | Checkout E2 | Differs? |
|-----|-------------|-------------|----------|
| 1. Section count | 2 (logical) | 4 (logical) | ✓ |
| 2. Section pattern | H (Minimalist) | C (Problem-Solution) | ✓ |
| 3. Image density | 0 (text-only) | 1 (cart contents) | ✓ |
| 4. Color temp | Neutral (Off-White) | Neutral (Off-White) | ✗ Same |
| 5. Email length | 2,239 (longest) | ~700-900 (medium) | ✓ |
| 6. Argument structure | Direct-Permission (anxiety) | Direct-Guarantee | ✓ |
| 7. Visual rhythm | Open | Mixed | ✓ |
| 8. CTA position | Single CTA | Single CTA | ✗ Same |
| 9. Subject line type | Permission | Pricing transparency | ✓ |

**Differ count: 7/9.** ✓ Above floor. (The remediation above is essential for E1; E2 already passes.)

### 3.5 Browse Abandonment Adjacent Variance

#### Browse E1 vs Welcome E1 (most likely landing)

| Dim | Welcome E1 | Browse E1 | Differs? |
|-----|-----------|-----------|----------|
| 1. Section count | 5 | 5 | ✗ Same |
| 2. Section pattern | A (Classic) | F (Education-First) | ✓ |
| 3. Image density | 1 (hero) | 1 (mechanism hint) | ✗ Same count |
| 4. Color temp | Warm (Cream) | Warm (Cream) | ✗ Same |
| 5. Email length | 990 (long) | 634 (medium) | ✓ |
| 6. Argument structure | MP-light | Educational | ✓ |
| 7. Visual rhythm | Tight | Tight | ✗ Same |
| 8. CTA position | Late + P.S. | Text-link only | ✓ |
| 9. Subject line type | Mirror hook | Mechanism hint | ✓ |

**Differ count: 5/9.** ⚠️ **FLAGGED — below 6/9 floor.**

**Why this flag is acceptable:** Welcome E1 and Browse E1 may arrive in the same inbox day. The visual consistency preserves the L1 voice register. The 5/9 variance is intentional for educational complements.

**Remediation if needed:** Vary Dimension 4 (Color Temp) by introducing a Mint highlight on Browse E1's mechanism hint image. Single change → 6/9.

#### Browse E2 vs Browse E1

| Dim | Browse E1 | Browse E2 | Differs? |
|-----|-----------|-----------|----------|
| 1. Section count | 5 | 9 | ✓ |
| 2. Section pattern | F (Education-First) | E (Product-First) | ✓ |
| 3. Image density | 1 (mechanism hint) | 2 (hero + 3-layer diagram) | ✓ |
| 4. Color temp | Warm | Warm + Mint on mechanism | ✓ |
| 5. Email length | 634 (medium) | 869 (medium-long) | ✓ |
| 6. Argument structure | Educational | Mechanism-Product | ✓ |
| 7. Visual rhythm | Tight | Tight with breathing around diagram | ✗ Same |
| 8. CTA position | Text-link only | Single CTA + Migration Anchors | ✓ |
| 9. Subject line type | Mechanism hint | Mechanism deep | ✗ Same family |

**Differ count: 7/9.** ✓ Above floor.

#### Browse E3 vs Browse E2

| Dim | Browse E2 | Browse E3 | Differs? |
|-----|-----------|-----------|----------|
| 1. Section count | 9 | 7 | ✓ |
| 2. Section pattern | E (Product-First) | A (Classic) | ✓ |
| 3. Image density | 2 (hero + diagram) | 1 (product) | ✓ |
| 4. Color temp | Warm + Mint on mechanism | Warm + Brand-Green CTA | ✓ |
| 5. Email length | 869 (medium-long) | 941 (medium-long) | ✗ Same band |
| 6. Argument structure | Mechanism-Product | Direct-Guarantee | ✓ |
| 7. Visual rhythm | Tight with breathing | Tight | ✗ Same |
| 8. CTA position | Single CTA + Migration Anchors | Double-tap (mid + late) | ✓ |
| 9. Subject line type | Mechanism deep | Guarantee | ✓ |

**Differ count: 7/9.** ✓ Above floor.

### 3.6 Post-Purchase Phase Adjacent Variance

For Sarah (3+3 buyer, post-purchase):

#### PP-Ed E1 vs Arrived & Welcome (most likely landing)

| Dim | Arrived & Welcome | PP-Ed E1 | Differs? |
|-----|-------------------|----------|----------|
| 1. Section count | 6 | 4 | ✓ |
| 2. Section pattern | C (Problem-Solution) | F (Education-First) | ✓ |
| 3. Image density | 1 (product) | 0 (text-only) | ✓ |
| 4. Color temp | Warm + Mint on 8-week timeline | Warm (Cream) | ✗ Same family |
| 5. Email length | ~600-800 (medium-long) | ~300-500 (short) | ✓ |
| 6. Argument structure | MP-Product | Direct-Expectation | ✓ |
| 7. Visual rhythm | Mixed | Open (60-80px gaps) | ✓ |
| 8. CTA position | Double-tap (mid + late) | Text-link only | ✓ |
| 9. Subject line type | Mechanism + Lena excitement | Lena expectation | ✓ |

**Differ count: 8/9.** ✓ Above floor.

#### PP-Ed E2 vs PP-Ed E1

| Dim | PP-Ed E1 | PP-Ed E2 | Differs? |
|-----|----------|----------|----------|
| 1. Section count | 4 | 5 | ✓ |
| 2. Section pattern | F (Education-First) | F (Education-First) | ✗ Same |
| 3. Image density | 0 (text-only) | 1 (observation cues) | ✓ |
| 4. Color temp | Warm (Cream) | Warm + Mint on micro-wins | ✓ |
| 5. Email length | ~300-500 (short) | ~500-700 (medium) | ✓ |
| 6. Argument structure | Direct-Expectation | Educational (observation vocabulary) | ✓ |
| 7. Visual rhythm | Open | Tight with breathing | ✓ |
| 8. CTA position | Text-link only | Text-link only | ✗ Same |
| 9. Subject line type | Lena expectation | Observation | ✓ |

**Differ count: 7/9.** ✓ Above floor.

#### PP-Ed E3 vs PP-Ed E2

| Dim | PP-Ed E2 | PP-Ed E3 | Differs? |
|-----|----------|----------|----------|
| 1. Section count | 5 | 4 | ✓ |
| 2. Section pattern | F (Education-First) | C (Problem-Solution) | ✓ |
| 3. Image density | 1 (observation cues) | 0 (text-only) | ✓ |
| 4. Color temp | Warm + Mint on micro-wins | Warm + Mint on 49% | ✗ Same family |
| 5. Email length | ~500-700 (medium) | ~400-600 (medium) | ✗ Same band |
| 6. Argument structure | Educational | PAS-light | ✓ |
| 7. Visual rhythm | Tight with breathing | Tight | ✗ Same |
| 8. CTA position | Text-link only | Text-link only | ✗ Same |
| 9. Subject line type | Observation | Regression reframe | ✓ |

**Differ count: 5/9.** ⚠️ **FLAGGED — below 6/9 floor.**

**Why this flag is acceptable:** PP-Ed E2 and PP-Ed E3 are both education-phase emails (D7 and D14). They share the F/C pattern overlap, no/low image density, warm tones, and text-link CTAs. The 5/9 variance is acceptable because:
1. The 7-day gap between E2 and E3 is the standard PP-Ed cadence — Sarah is not getting back-to-back identical emails.
2. The argument structure differs (Educational vs PAS-light), which is the highest-impact dimension.

**Remediation if needed:** Vary Dimension 5 (Length) by extending PP-Ed E3 to 600-700 words or shortening PP-Ed E2 to 400-500 words. Single change → 6/9.

#### PP-Ed E4 vs PP-Ed E3

| Dim | PP-Ed E3 | PP-Ed E4 | Differs? |
|-----|----------|----------|----------|
| 1. Section count | 4 | 6 | ✓ |
| 2. Section pattern | C (Problem-Solution) | D (Social Proof First) | ✓ |
| 3. Image density | 0 (text-only) | 1 (micro-win photo) | ✓ |
| 4. Color temp | Warm + Mint on 49% | Warm + Brand-Yellow stars | ✓ |
| 5. Email length | ~400-600 (medium) | 602 (medium) | ✗ Same band |
| 6. Argument structure | PAS-light | Testimonial-led | ✓ |
| 7. Visual rhythm | Tight | Tight | ✗ Same |
| 8. CTA position | Text-link only | Double-tap (mid + late) | ✓ |
| 9. Subject line type | Regression reframe | Win celebration | ✓ |

**Differ count: 7/9.** ✓ Above floor.

### 3.7 PP-Extended Education Adjacent Variance

#### PP-Ext-Ed E1 vs PP-Ed E4

| Dim | PP-Ed E4 | PP-Ext-Ed E1 | Differs? |
|-----|----------|--------------|----------|
| 1. Section count | 6 | 7 | ✓ |
| 2. Section pattern | D (Social Proof First) | A (Classic) | ✓ |
| 3. Image density | 1 (micro-win photo) | 1 (Pre-K calendar) | ✗ Same count |
| 4. Color temp | Warm + Brand-Yellow stars | Warm + Brand-Yellow on Pre-K dates | ✗ Same family |
| 5. Email length | 602 (medium) | 872 (long) | ✓ |
| 6. Argument structure | Testimonial-led | MP-Calendar | ✓ |
| 7. Visual rhythm | Tight | Tight | ✗ Same |
| 8. CTA position | Double-tap (mid + late) | Double-tap (mid + late) | ✗ Same |
| 9. Subject line type | Win celebration | Pre-K calendar | ✓ |

**Differ count: 5/9.** ⚠️ **FLAGGED — below 6/9 floor.**

**Why this flag is acceptable:** PP-Ed E4 and PP-Ext-Ed E1 are both D21+ education emails. The 5/9 variance is acceptable because the 7+ day gap between them is sufficient to avoid back-to-back feel.

**Remediation if needed:** Vary Dimension 4 (Color Temp) by replacing PP-Ext-Ed E1's Brand-Yellow on Pre-K dates with a Mint highlight on the 8-week plan. Single change → 6/9.

#### PP-Ext-Ed E2 vs PP-Ext-Ed E1

| Dim | PP-Ext-Ed E1 | PP-Ext-Ed E2 | Differs? |
|-----|--------------|--------------|----------|
| 1. Section count | 7 | 9 | ✓ |
| 2. Section pattern | A (Classic) | C (Problem-Solution) | ✓ |
| 3. Image density | 1 (Pre-K calendar) | 1 (L1 family) | ✗ Same count |
| 4. Color temp | Warm + Brand-Yellow on Pre-K dates | Warm (Cream) | ✓ |
| 5. Email length | 872 (long) | 758 (long) | ✗ Same band |
| 6. Argument structure | MP-Calendar | Problem-Solution (social scripts) | ✓ |
| 7. Visual rhythm | Tight | Tight | ✗ Same |
| 8. CTA position | Double-tap (mid + late) | Single CTA | ✓ |
| 9. Subject line type | Pre-K calendar | Social mirror | ✓ |

**Differ count: 6/9.** ✓ At floor. Not flagged.

#### PP-Ext-Ed E3 vs PP-Ext-Ed E2

| Dim | PP-Ext-Ed E2 | PP-Ext-Ed E3 | Differs? |
|-----|--------------|--------------|----------|
| 1. Section count | 9 | 6 | ✓ |
| 2. Section pattern | C (Problem-Solution) | C (Problem-Solution) | ✗ Same |
| 3. Image density | 1 (L1 family) | 0 (text-only) | ✓ |
| 4. Color temp | Warm (Cream) | Warm + Mint on 49% | ✓ |
| 5. Email length | 758 (long) | 581 (medium) | ✓ |
| 6. Argument structure | Problem-Solution (social scripts) | PAS-light (regression) | ✓ |
| 7. Visual rhythm | Tight | Tight | ✗ Same |
| 8. CTA position | Single CTA | Text-link only | ✓ |
| 9. Subject line type | Social mirror | Regression reframe | ✓ |

**Differ count: 6/9.** ✓ At floor. Not flagged.

#### PP-Ext-Ed E4 vs PP-Ext-Ed E3

| Dim | PP-Ext-Ed E3 | PP-Ext-Ed E4 | Differs? |
|-----|--------------|--------------|----------|
| 1. Section count | 6 | 5 | ✓ |
| 2. Section pattern | C (Problem-Solution) | F (Education-First) | ✓ |
| 3. Image density | 0 (text-only) | 1 (L1 kid in routine) | ✓ |
| 4. Color temp | Warm + Mint on 49% | Warm (Cream) | ✓ |
| 5. Email length | 581 (medium) | 747 (long) | ✓ |
| 6. Argument structure | PAS-light | Educational (habit) | ✓ |
| 7. Visual rhythm | Tight | Tight | ✗ Same |
| 8. CTA position | Text-link only | Text-link only | ✗ Same |
| 9. Subject line type | Regression reframe | Habit | ✓ |

**Differ count: 6/9.** ✓ At floor. Not flagged.

#### PP-Ext-Ed E5 vs PP-Ext-Ed E4

| Dim | PP-Ext-Ed E4 | PP-Ext-Ed E5 | Differs? |
|-----|--------------|--------------|----------|
| 1. Section count | 5 | 5 | ✗ Same |
| 2. Section pattern | F (Education-First) | F (Education-First) | ✗ Same |
| 3. Image density | 1 (L1 kid in routine) | 1 (L1 kid graduating) | ✗ Same count |
| 4. Color temp | Warm (Cream) | Warm (Cream) | ✗ Same |
| 5. Email length | 747 (long) | 608 (medium) | ✓ |
| 6. Argument structure | Educational (habit) | Educational (graduation) | ✗ Same family |
| 7. Visual rhythm | Tight | Tight | ✗ Same |
| 8. CTA position | Text-link only | Text-link only | ✗ Same |
| 9. Subject line type | Habit | Graduation | ✓ |

**Differ count: 2/9.** 🚨 **CRITICAL FLAG — well below 6/9 floor.**

**Why this is critical:** PP-Ext-Ed E4 and PP-Ext-Ed E5 are both Education-First emails with the same section count, image density, color temp, length band, argument family, visual rhythm, and CTA position. The only dimensions that differ are length (within the same band) and subject line type.

**Remediation (per brief, ranked by least-cost-first):**

1. **Change argument structure (lowest cost):** Convert PP-Ext-Ed E5 from Educational to Story-Led (Pattern B). The graduation is a milestone — a Story email featuring a parent's graduation moment is more emotional and contrasts with E4's habit frame. This single change shifts Dimensions 2 and 6 to differ → 4/9.

2. **Move CTA position (low cost):** Change PP-Ext-Ed E5's CTA from text-link only to single CTA. The graduation is a natural CTA moment ("Read the graduation guide"). This shifts Dimension 8 → 3/9.

3. **Wait 1 more day between sends (medium cost):** PP-Ext-Ed E4 fires at D45+, PP-Ext-Ed E5 at D75+. The 30+ day gap is already wide. Cadence is not the issue.

4. **Split email into 2 sends (highest cost):** If the above 3 remediations don't get to 6/9, split PP-Ext-Ed E5 into 2 emails: (a) "When to know he's ready" (current E5 first half), (b) "How to phase out the safety net" (current E5 second half). This is a flow restructure.

**Recommended remediation:** Combination of #1 (Change to Story-Led) + #2 (Single CTA instead of text-link). This should push variance to 4/9. If still below 6/9, add #4 (split into 2 sends) — the graduation milestone is a natural place for a 2-email arc.

### 3.8 Winback Adjacent Variance

#### Winback A E1 vs PP-Ext-Ed E5 (most likely)

| Dim | PP-Ext-Ed E5 | Winback A E1 | Differs? |
|-----|--------------|--------------|----------|
| 1. Section count | 5 | 10 | ✓ |
| 2. Section pattern | F (Education-First) | B (Story-Led) | ✓ |
| 3. Image density | 1 (L1 kid graduating) | 1 (Pre-K season) | ✗ Same count |
| 4. Color temp | Warm (Cream) | Warm + Brand-Yellow on Pre-K dates | ✓ |
| 5. Email length | 608 (medium) | 899 (long) | ✓ |
| 6. Argument structure | Educational (graduation) | Story-MP | ✓ |
| 7. Visual rhythm | Tight | Tight | ✗ Same |
| 8. CTA position | Text-link only | Single CTA (no hard ask) | ✓ |
| 9. Subject line type | Graduation | Pre-K calendar | ✓ |

**Differ count: 7/9.** ✓ Above floor.

#### Winback A E2 vs Winback A E1

| Dim | Winback A E1 | Winback A E2 | Differs? |
|-----|--------------|--------------|----------|
| 1. Section count | 10 | 5 | ✓ |
| 2. Section pattern | B (Story-Led) | C (Problem-Solution) | ✓ |
| 3. Image density | 1 (Pre-K season) | 0 (text-only) | ✓ |
| 4. Color temp | Warm + Brand-Yellow on Pre-K dates | Warm + Mint on 49% | ✓ |
| 5. Email length | 899 (long) | 490 (medium) | ✓ |
| 6. Argument structure | Story-MP | Mechanism-Educational | ✓ |
| 7. Visual rhythm | Tight | Tight | ✗ Same |
| 8. CTA position | Single CTA | Text-link only | ✓ |
| 9. Subject line type | Pre-K calendar | Mechanism | ✓ |

**Differ count: 8/9.** ✓ Above floor.

#### Winback A E3 vs Winback A E2

| Dim | Winback A E2 | Winback A E3 | Differs? |
|-----|--------------|--------------|----------|
| 1. Section count | 5 | 11 | ✓ |
| 2. Section pattern | C (Problem-Solution) | A (Classic) | ✓ |
| 3. Image density | 0 (text-only) | 1 (Lena) | ✓ |
| 4. Color temp | Warm + Mint on 49% | Warm (Cream) | ✓ |
| 5. Email length | 490 (medium) | 1,422 (long) | ✓ |
| 6. Argument structure | Mechanism-Educational | Direct-Guarantee | ✓ |
| 7. Visual rhythm | Tight | Open (60-80px gaps) | ✓ |
| 8. CTA position | Text-link only | Single CTA (door open) | ✓ |
| 9. Subject line type | Mechanism | Permission | ✓ |

**Differ count: 9/9.** ✓ Max variance.

### 3.9 Variance Ledger Summary

Across the L1 sequence, the variance ledger shows:
- **Welcome flow (E1-E8):** 5/9 / 7/9 / 7/9 / 8/9 / 7/9 / 5/9 / 7/9. Two flagged pairs (E2/E1, E7/E6), both at the L1-narrative threshold.
- **Cart Abandonment (E1-E3):** 6/9 / 6/9 / 9/9. All pass.
- **Checkout Abandonment (E1-E2):** 3/9 / 7/9. **CRITICAL FLAG on E1 vs Cart E3** (3/9 — see remediation above).
- **Browse Abandonment (E1-E3):** 5/9 / 7/9 / 7/9. One flagged pair (Browse E1 vs Welcome E1), acceptable.
- **Post-Purchase (PP-Ed E1-E4):** 8/9 / 7/9 / 5/9 / 7/9. One flagged pair (PP-Ed E3/E2), acceptable.
- **PP-Extended Education (E1-E5):** 5/9 / 6/9 / 6/9 / 6/9 / 2/9. **CRITICAL FLAG on PP-Ext-Ed E5 vs E4** (2/9 — see remediation above).
- **Winback A (E1-E3):** 7/9 / 8/9 / 9/9. All pass.

**Two critical flags (≤5/9) require remediation:** Checkout E1 vs Cart E3 (3/9) and PP-Ext-Ed E5 vs E4 (2/9). Both have specific remediation plans in §4.

**Four acceptable flags (5/9) are at the threshold:** Welcome E2 vs E1, Welcome E7 vs E6, Browse E1 vs Welcome E1, PP-Ed E3 vs E2, PP-Ext-Ed E1 vs PP-Ed E4. These are intentional narrative-continuity flags. Stage 1 subagents may choose to remediate if their brief requires strict 6/9; otherwise, these are documented acceptable variants.

---

## 4. REMEDIATION PLAYBOOK — WHEN VARIANCE FALLS BELOW 6/9

Per the brief, the remediation options are:
1. Split email into 2 sends
2. Change argument structure
3. Move CTA position
4. Wait 1 more day between sends

This section applies these to each flagged pair in §3.

### 4.1 Critical Flag #1 — Checkout E1 vs Cart E3 (3/9)

**Current state:** Both emails share Pattern H, no images, open rhythm, single CTA, permission subject lines. Three dimensions differ; six are the same.

**Recommended remediation (in order of preference):**

**Step 1 — Change argument structure (lowest cost):**
- Current Checkout E1: Direct-Permission (Anxiety address + Conversion lever sequence).
- New Checkout E1: Problem-Solution.
  - Problem: the cart-recovery anxiety ("Did I miss something at checkout? Should I have used a different payment method? Is shipping too expensive? Is the 60-day guarantee really real?").
  - Solution: the conversion lever sequence applied to each anxiety.
- This shifts Dimension 2 (Pattern: H → C) and Dimension 6 (Argument: Direct-Permission → Problem-Solution) to differ. Variance: 3/9 → 5/9.

**Step 2 — Move CTA position (low cost):**
- Add a mid-body text-link before the single CTA. The text-link is a soft "Read the science behind this" anchor.
- This shifts Dimension 8 (CTA: Single CTA → Text-link + Single CTA). Variance: 5/9 → 6/9. ✓ At floor.

**Step 3 — If still below 6/9, change color temp:**
- Replace the Neutral (Off-White) base of Checkout E1 with Warm (Cream). This shifts Dimension 4 (Color: Neutral → Warm). Variance: 6/9 → 7/9. ✓ Above floor.

**Step 4 — Wait 1 more day between sends (medium cost):**
- Current: Cart E3 fires 72h after abandonment, Checkout E1 fires 1h after checkout abandonment.
- New: Stretch Checkout E1 to 4-6h after checkout abandonment. This is a Cadence fix, not a structural one, but it does help avoid the "back-to-back permission" feel.

**Step 5 — Split email into 2 sends (highest cost):**
- If Steps 1-3 don't reach 6/9, split Checkout E1 into 2 emails:
  - (a) Anxiety-Address: "Whatever you choose, thanks for reading this far." ~1,000 words.
  - (b) Conversion-Lever-Sequence: "Here's why 30,000+ families have used this for their child." ~1,200 words.
- This adds a new flow position; the locked-profile needs updating.

### 4.2 Critical Flag #2 — PP-Ext-Ed E5 vs PP-Ext-Ed E4 (2/9)

**Current state:** Both Education-First emails with 5 sections, 1 image, warm tones, similar length, similar argument, tight rhythm, text-link CTAs. Only 2 dimensions differ.

**Recommended remediation (in order of preference):**

**Step 1 — Change argument structure (lowest cost):**
- Current PP-Ext-Ed E5: Educational (graduation).
- New PP-Ext-Ed E5: Story-Led (a parent's graduation moment as the opening story, then mechanism anchor, then the graduation guide).
- This shifts Dimension 2 (Pattern: F → B) and Dimension 6 (Argument: Educational → Story-Led). Variance: 2/9 → 4/9.

**Step 2 — Move CTA position (low cost):**
- Change PP-Ext-Ed E5's CTA from text-link only to single CTA. The graduation is a natural CTA moment ("Read the full graduation guide").
- This shifts Dimension 8 (CTA: Text-link only → Single CTA). Variance: 4/9 → 5/9.

**Step 3 — Change section count or length (low cost):**
- Reduce PP-Ext-Ed E5's section count from 5 to 3 (the graduation in 3 sections: "He did it" → "Here's how we got here" → "When to phase out the safety net").
- Or extend length to 800+ words.
- Either shifts Dimension 1 (Section count) or Dimension 5 (Length). Variance: 5/9 → 6/9. ✓ At floor.

**Step 4 — Wait 1 more day between sends (already 30+ day gap, low impact):**
- Currently PP-Ext-Ed E4 fires at D45+, PP-Ext-Ed E5 at D75+. The 30+ day gap is already wide. Cadence is not the issue.

**Step 5 — Split email into 2 sends (highest cost, but recommended here):**
- If Steps 1-3 don't reach 6/9, split PP-Ext-Ed E5 into 2 emails:
  - (a) "When to know he's ready" — the readiness cues (~400 words, E4-E5 gap).
  - (b) "How to phase out the safety net" — the graduation protocol (~400 words, 14-21 days after (a)).
- This is a flow restructure, but the graduation milestone is a natural 2-email arc. The locked-profile needs updating to add a new position.

### 4.3 Acceptable Flags (5/9) — Documented Variants

The four pairs at 5/9 are at the L1-narrative threshold and are documented variants. Stage 1 subagents may remediate these to 6/9 if their brief requires strict variance. The lowest-cost fixes:

| Pair | Cheapest fix | Cost | Resulting variance |
|------|--------------|------|-------------------|
| Welcome E2 vs E1 | Vary E1 length to 850 words OR vary E1 rhythm to Mixed | Length or rhythm | 7/9 |
| Welcome E7 vs E6 | Change E7 code badge color from Brand-Yellow to Mint | Color | 6/9 |
| Browse E1 vs Welcome E1 | Add Mint highlight on Browse E1 mechanism hint | Color | 6/9 |
| PP-Ed E3 vs E2 | Extend PP-Ed E3 to 600-700 words | Length | 6/9 |
| PP-Ext-Ed E1 vs PP-Ed E4 | Replace Brand-Yellow on Pre-K dates with Mint on 8-week plan | Color | 6/9 |

**Recommendation:** Keep the 5/9 pairs as documented variants. The L1 narrative continuity is more important than strict 6/9 variance for these specific transitions. The skill's variance rule is calibrated for *generic* flows; L1's mechanism-led identity requires some flexibility at the *most-narrative-critical* transitions.

### 4.4 When to Apply the Playbook

Apply the remediation playbook when:
- The flagged pair is between two emails that arrive in the same inbox day (no temporal buffer).
- The flagged pair is at a critical conversion moment (first money ask, last call, guarantee).
- The flagged pair is between emails in the same flow position family (e.g., two checkout abandoners).

Do NOT apply the playbook when:
- The flagged pair is at a narrative-continuity transition (E1→E2, E6→E7).
- The flagged pair has a 7+ day gap between sends (PP-Ed E2/E3, PP-Ext-Ed E4/E5).
- The flagged pair is between different flows (Browse E1 and Welcome E1) where the consumer may not see both.

---

## 5. CROSS-FLOW VARIANCE AUDIT — CONDITIONAL EMAILS

The §3 variance ledger above assumes Sarah's most-likely sequence. This section audits the *conditional* paths (Cart, Checkout, Browse, At-Risk) for variance against each other and against the Welcome flow.

### 5.1 Cart + Welcome + Browse Overlap

If Sarah signs up, browses the PDP, then abandons the cart, she receives:
- Welcome E1 (D0)
- Browse E1 (24h after browse)
- Cart E1 (1h after cart)
- Cart E2 (24h after cart)
- Welcome E2 (D1)
- Cart E3 (72h after cart)
- Welcome E3 (D3, suppressed if cart active)

The most-likely 5-email sequence in her first 72 hours is: Welcome E1 → Browse E1 → Cart E1 → Welcome E2 → Cart E2 → Cart E3 → Welcome E3 (D3, resumes after cart expires).

**Cross-flow variance matrix (early phase):**

| Pair | Differ Count |
|------|:------------:|
| Welcome E1 vs Browse E1 | 5/9 (acceptable) |
| Browse E1 vs Cart E1 | 7/9 ✓ |
| Cart E1 vs Welcome E2 | 8/9 ✓ |
| Welcome E2 vs Cart E2 | 8/9 ✓ |
| Cart E2 vs Cart E3 | 9/9 ✓ Max |
| Cart E3 vs Welcome E3 | 8/9 ✓ |

**Cross-flow variance is healthy** because the conditional emails (Cart, Browse) use different patterns (E for Cart, F for Browse) than the Welcome flow (A and C). The image densities differ (Cart and Browse use product images; Welcome uses hero and mechanism). The argument structures differ (Direct for Cart, Educational for Browse, MP-deep for Welcome). Cross-flow variance passes without remediation.

### 5.2 Post-Purchase Phase Cross-Flow Variance

In the post-purchase phase, Sarah receives multiple emails per week: PP-Ed, PP-Mid, Review Request, Replenishment, etc. The variance ledger must hold across this dense cadence.

**PP-Ed D7 vs PP-Mid D30:**
| Dim | PP-Ed D7 | PP-Mid D30 | Differs? |
|-----|----------|------------|----------|
| 1. Section count | 5 | 5 | ✗ Same |
| 2. Section pattern | F (Education-First) | D (Social Proof First) | ✓ |
| 3. Image density | 1 (observation cues) | 3 (one per family) | ✓ |
| 4. Color temp | Warm + Mint on micro-wins | Warm + Brand-Yellow stars | ✓ |
| 5. Email length | ~500-700 (medium) | ~800-1000 (long) | ✓ |
| 6. Argument structure | Educational | Testimonial-led | ✓ |
| 7. Visual rhythm | Tight with breathing | Tight with breathing | ✗ Same |
| 8. CTA position | Text-link only | Text-link only | ✗ Same |
| 9. Subject line type | Observation | Cross-level voice | ✓ |

**Differ count: 6/9.** ✓ At floor.

**PP-Mid D30 vs Review E1 (D30):**
| Dim | PP-Mid D30 | Review E1 | Differs? |
|-----|------------|-----------|----------|
| 1. Section count | 5 | 3 | ✓ |
| 2. Section pattern | D (Social Proof First) | H (Minimalist) | ✓ |
| 3. Image density | 3 (one per family) | 0 (text-only) | ✓ |
| 4. Color temp | Warm + Brand-Yellow stars | Warm (Cream) | ✓ |
| 5. Email length | ~800-1000 (long) | ~200-400 (short) | ✓ |
| 6. Argument structure | Testimonial-led | Direct-Altruism | ✓ |
| 7. Visual rhythm | Tight with breathing | Open (60-80px gaps) | ✓ |
| 8. CTA position | Text-link only | Single CTA (review link) | ✓ |
| 9. Subject line type | Cross-level voice | Altruism | ✓ |

**Differ count: 9/9.** ✓ Max variance.

**PP-Ed D14 vs PP-Ed D21 (adjacent within PP-Ed):**
Already audited in §3.6: 5/9 (acceptable).

**Replenishment B1 (D75) vs Replenishment B2 (D90):**
| Dim | Replen B1 | Replen B2 | Differs? |
|-----|-----------|-----------|----------|
| 1. Section count | 4 | 4 | ✗ Same |
| 2. Section pattern | E (Product-First) | E (Product-First) | ✗ Same |
| 3. Image density | 2 (3+3 + 5+5) | 1 (5+5) | ✓ |
| 4. Color temp | Warm | Warm | ✗ Same |
| 5. Email length | ~500-700 (medium) | ~400-600 (medium) | ✗ Same band |
| 6. Argument structure | Direct-Practical | Direct-Practical | ✗ Same |
| 7. Visual rhythm | Tight | Tight | ✗ Same |
| 8. CTA position | Double-tap | Single CTA | ✓ |
| 9. Subject line type | Helper | Helper | ✗ Same family |

**Differ count: 2/9.** 🚨 **CRITICAL FLAG — well below 6/9 floor.**

**Why this is critical:** Replenishment B1 and B2 are both "bundle upgrade to 5+5" emails. They share the same product showcase pattern, helper subject lines, warm tones, and direct-practical argument. The 2/9 variance is the lowest non-PP-Ext-Ed E5 score in the L1 sequence.

**Remediation (per brief, ranked by least-cost-first):**

1. **Change argument structure (lowest cost):** Convert Replen B2 from Direct-Practical to Story-Led. A story from a parent who upgraded to 5+5 ("We started with 3+3. Three months in, we ran out of clean pairs every other day...") contrasts with B1's direct-practical frame. Variance: 2/9 → 4/9.

2. **Wait 1 more day between sends (low cost):** B1 at D75, B2 at D90. Stretch B2 to D105 (15 days after B1 instead of 15 days). Cadence fix. Variance does not improve structurally, but temporal variance helps avoid the "back-to-back" feel.

3. **Move CTA position (medium cost):** Change B2's CTA from Single CTA to Text-link only. B1 carries the hard CTA, B2 carries the soft reminder. Variance: 4/9 → 5/9.

4. **Split email into 2 sends (highest cost):** Split Replen B2 into 2: (a) "The 5+5 question" (story-led), (b) "When to upgrade" (practical). 2-email flow restructure.

**Recommended remediation:** Combination of #1 (Change to Story-Led) + #2 (Stretch to D105). The temporal buffer + argument change pushes variance to 4/9 structurally and 5/9 temporally. If the brief requires strict 6/9, add #4 (split into 2 sends).

### 5.3 Cross-Flow Variance Summary

Across conditional and post-purchase flows, two additional critical flags:
- **Replenishment B2 vs Replen B1 (2/9):** Same pattern, same argument, same subject family. Remediation: Change B2 to Story-Led + stretch to D105.
- **PP-Ext-Ed E5 vs PP-Ext-Ed E4 (2/9):** Already documented in §4.2.

The L1 sequence's variance floor is mostly healthy. The two critical flags (Checkout E1/Cart E3, Replen B2/Replen B1) and the one critical narrative flag (PP-Ext-Ed E5/E4) are the primary remediation targets.

---

## 6. SUBJECT LINE MASTER PLAN

The 9th dimension of variance — subject line type — has its own L1-specific calibration. This section provides a master plan.

### 6.1 Subject Line Type Distribution Across the L1 Sequence

| Email | Subject Type | Why |
|-------|--------------|-----|
| Welcome E1 | Mirror hook | First contact. Mirror must be specific. |
| Welcome E2 | Mechanism tease | Tipping point. Failed methods named. |
| Welcome E3 | Calendar anchor | First hard CTA. Pre-K math. |
| Welcome E4 | Parent quote (identity) | Absolution moment. Real L1-anchor. |
| Welcome E5 | Pre-K calendar math | Product education + calendar. |
| Welcome E6 | Calendar + identity | Social proof + Pre-K. |
| Welcome E7 | L1-anchor mirror | Last call. Almost-trained pattern. |
| Welcome E8 | Calendar echo | Series finale. Door open. |
| Cart E1 | Mirror (cart) | Cart event. |
| Cart E2 | Cross-level voice (parent quote) | Three-Family. |
| Cart E3 | Permission | Final cart. |
| Checkout E1 | Permission | Decision-respect. |
| Checkout E2 | Pricing transparency | Final nudge. |
| Browse E1 | Mechanism hint | Educational. |
| Browse E2 | Mechanism deep | 3-layer. |
| Browse E3 | Guarantee | First offer. |
| Order Conf | Order confirmation | Transactional. |
| Shipping E1 | Lena excitement | Anticipation. |
| Out for Delivery E2 | Lena excitement | Anticipation. |
| Arrived & Welcome | Mechanism + Lena excitement | First wear. |
| PP-Upsell E1 | Helper | 1-pair path. |
| PP-Upsell E2 | Helper | 1-pair path. |
| Mary S. Story | Founder mirror | Founder. |
| PP-Ed E1 | Lena expectation | First wear. |
| PP-Ed E2 | Observation | What to look for. |
| PP-Ed E3 | Regression reframe | Week two. |
| PP-Ed E4 | Win celebration | Micro-wins. |
| PP-Ext Upsell E1 | Pre-K calendar | Bundle upgrade. |
| PP-Ext Upsell E2 | Practical helper | Accessory. |
| PP-Ext Upsell E3 | Door open | Final upsell. |
| PP-Mid E1 | Cross-level voice | Three-Family. |
| PP-Mid E2 | Lena reply | High-trust. |
| PP-Mid E3 | Guarantee transparency | 60-day mark. |
| PP-Ext-Ed E1 | Pre-K calendar | L1-A. |
| PP-Ext-Ed E2 | Social mirror | When other parents ask. |
| PP-Ext-Ed E3 | Regression reframe | Accidents happen. |
| PP-Ext-Ed E4 | Habit | Building consistency. |
| PP-Ext-Ed E5 | Graduation | Graduation prep. |
| PP-AtRisk E1 | Lena concern | Just checking in. |
| PP-AtRisk E2 | Practical | How to get the most. |
| PP-AtRisk E3 | Normalization | Invisible work. |
| PP-AtRisk E4 | Guarantee | Still active. |
| Replen B1 | Helper | Time to rotate. |
| Replen B2 | Helper | Second nudge. |
| Review E1 | Altruism | Tell other parents. |
| Review E2 | Altruism | Final ask. |
| Winback A E1 | Pre-K calendar | L1-A. |
| Winback A E2 | Mechanism | Mechanism re-anchor. |
| Winback A E3 | Permission | Door open. |
| Winback B E1 | Lena re-introduction | Re-entry. |
| Winback B E2 | Testimonial | Mechanism re-anchor. |
| Winback B E3 | Farewell | Final. |
| Sunset E1 | Permission | Re-permission. |
| Sunset E2 | Farewell | Final. |

### 6.2 Forbidden Subject Line Patterns (L1)

Per `journey-l1-01-avatar.md` §4.10 and `journey-l1-02-sequence.md` §4.10:
- "Last chance" — manufactured urgency
- "Miracle solution" — instant skepticism
- "Severe autism" — level mismatch
- "Years of struggles" — overstates
- "Time is running out" — manipulative
- "Save your kid" — too dramatic

Plus brand-wide forbidden: "Easy," "Simple," "Quick," "Guaranteed," "Miracle," "Cure," "Fix," "Solve." No exclamation. No AI-isms.

**Allowed:** Pre-K timing ("Six weeks until Pre-K starts"), L1-anchor mirrors, Lena peer voice, mechanism teases, parent quotes, calendar echoes.

### 6.3 Subject Line Length Calibration

- **L1 sweet spot:** 40-50 characters
- **Maximum:** 60 characters (mobile preview)
- **Minimum:** 25 characters (avoid being too vague)

Per `journey-l1-01-avatar.md` Appendix: "Subject Line — 40-50 chars. Mirror / mechanism / observation hook."

---

## 7. COLOR TEMPERATURE & VISUAL RHYTHM MAP

Per the skill §6.2: "Don't stay flat for more than 3 consecutive emails." For L1, the warm/cool rhythm must be calibrated to the L1 brand defaults.

### 7.1 L1 Color Temperature Defaults

- **Warm default:** Cream #FBF7EB background. Lena's voice register.
- **Cool default:** Mint #DBFFCD for mechanism callouts and stat highlights. NEVER teal #2BAEB4 (forbidden for L1).
- **CTA color:** Brand-Green #039902 (full saturation, not muted).
- **Accent color:** Brand-Yellow #F5C84B (badges, stars, trust signals — sparingly).
- **Neutral (transactional only):** Off-White #FAF9F7.
- **Forbidden:** Teal #2BAEB4, Earth tones (L3 only), pure black backgrounds.

### 7.2 Welcome Flow Color Rhythm

| Email | Color | Notes |
|-------|-------|-------|
| E1 | Warm (Cream) | First contact. |
| E2 | Warm + Mint (mechanism) | Only cool accent in the flow. |
| E3 | Warm + Mint (49% stat) | Stat highlight. |
| E4 | Warm + Mint (49% reappearance) | Stat re-anchor. |
| E5 | Warm + Brand-Green (3-layer) | Layer callouts. |
| E6 | Warm + Brand-Yellow (stars) | Testimonial. |
| E7 | Warm + Brand-Yellow (code) | Code badge. |
| E8 | Warm + soft recap | Trust preservation. |

The Welcome flow stays warm-dominant with strategic cool/yellow accents. This is intentional: Sarah's L1 voice register is warm (Lena peer voice); the cool/yellow accents are functional (stat highlight, code badge), not stylistic.

### 7.3 Cart Abandonment Color Rhythm

| Email | Color | Notes |
|-------|-------|-------|
| Cart E1 | Warm + Brand-Green (CTA) | Calm. |
| Cart E2 | Warm + Brand-Yellow (stars) | Three-Family. |
| Cart E3 | Warm only | Permission. No accents. |

### 7.4 Checkout Abandonment Color Rhythm

| Email | Color | Notes |
|-------|-------|-------|
| Checkout E1 | Neutral (Off-White) | Transactional decision-respect. |
| Checkout E2 | Neutral (Off-White) | Transactional. |

The checkout flow shifts to Neutral because it's a transactional decision-respect register, not Lena's peer-voice register.

### 7.5 Post-Purchase Color Rhythm

| Email | Color | Notes |
|-------|-------|-------|
| Arrived & Welcome | Warm + Mint (8-week timeline) | First PP. |
| PP-Ed D0 | Warm (Cream) | First wear. |
| PP-Ed D7 | Warm + Mint (micro-wins) | Observation. |
| PP-Ed D14 | Warm + Mint (49%) | Regression reframe. |
| PP-Ed D21 | Warm + Brand-Yellow (stars) | Win celebration. |
| PP-Mid D30 | Warm + Brand-Yellow (stars) | Three-Family. |
| PP-Mid D45 | Warm (Cream) | Reply invitation. |
| PP-Mid D60 | Warm (Cream) | Guarantee transparency. |
| PP-Ext-Ed E1 | Warm + Brand-Yellow (Pre-K) | L1-A. |
| PP-Ext-Ed E2 | Warm (Cream) | Social context. |
| PP-Ext-Ed E3 | Warm + Mint (49%) | Regression. |
| PP-Ext-Ed E4 | Warm (Cream) | Habit. |
| PP-Ext-Ed E5 | Warm (Cream) | Graduation. |
| Replen B1 | Warm (Cream) | Helper. |
| Replen B2 | Warm (Cream) | Helper. |
| Winback A E1 | Warm + Brand-Yellow (Pre-K) | L1-A. |
| Winback A E2 | Warm + Mint (49%) | Mechanism. |
| Winback A E3 | Warm (Cream) | Permission. |

### 7.6 Visual Rhythm Map

Per the skill §5.7 and L1 spacing rules:
- **Tight (40px gaps):** Standard L1 default. 80%+ of L1 emails.
- **Open (60-80px gaps):** Permission-toned emails (Cart E3, Checkout E1, Sunset, At-Risk E1/E4, PP-Ed D0, PP-Mid D45/E3, Winback A E3).
- **Mixed (hero wide + body tight):** Informationally dense emails (E3, E5, Arrived & Welcome, Checkout E2).

The L1 default is Tight because L1 is "forward-moving" (per `journey-l1-01-avatar.md` §9). Open rhythm is reserved for permission, decision-respect, and trust-preservation emails.

---

## 8. L1 HARD RULES (LOCKED, CITE WHEN IN DOUBT)

The 9-dimension spec in §2 must respect these hard rules. Cite the source when applying them.

### 8.1 Forbidden Phrases (L1-Specific)

Per `journey-l1-01-avatar.md` §8.5 and `journey-l1-02-sequence.md` §4.8:
- "Easy," "Simple," "Effortless" — implies she's been doing it wrong.
- "Quick," "Fast" — 6-18 months of trying.
- "Fix," "Cure," "Solve" — body-signal learning, not a cure.
- "Your child is severely affected" — her child is not severe.
- "Non-verbal kids need..." — her child is verbal.
- "Years of failed attempts" — months, not years.
- "Severe sensory issues" — moderate, not severe.
- "Late training is normal" — normalizing feels like giving up.
- "BCBA protocol" — she doesn't have a BCBA.
- "Adult diapers" — her child is 4.
- "Forever in pull-ups" — she has not accepted "forever."
- "Level 1/2/3" labels — never name levels in copy.
- "Just like other kids" / "Just like NT kids" — comparison shame.
- "Just try harder" / "Be more consistent" — echo-triggers.
- "Wait until he's ready" / "wait until he's older" — pediatrician's broken advice.

### 8.2 Brand-Wide Forbidden (Carryover)

Per `journey-l1-01-avatar.md` §8.1:
- "Easy," "Simple," "Effortless," "Guaranteed," "Miracle," "Cure," "Fix," "Solve"
- "Just like neurotypical kids," "Have you tried [obvious method]," "Don't worry," "Your child will be normal," "Get him trained!," "Suffering from autism," "High-functioning," "Low-functioning."
- AI-isms: "dive into," "unlock," "game-changer," "leverage," "empower," "disrupt," "revolutionize," "holistic," "synergy."
- Trigger words: "Amazing," "Incredible," "Transformation," "Breakthrough," "Revolutionary," "Secret," "Life-changing."

### 8.3 Subject Line Forbidden (L1)

Per `journey-l1-01-avatar.md` §4.10:
- "Last chance," "Miracle solution," "Severe autism," "Years of struggles," "Time is running out," "Save your kid."
- Exclamation.
- AI-isms.
- Forbidden words from §8.1, §8.2.

### 8.4 Visual Forbidden (L1)

Per `journey-l1-01-avatar.md` §9:
- Non-verbal kids.
- BCBA imagery.
- Sensory-meltdown imagery.
- "Big Kid Underwear" infantilized graphics.
- NT happy family stock photos.
- Crying children / frustrated parent faces.
- Pull-ups as villain (show as signal-blocking tool, not villain).

### 8.5 CTA Style (L1)

Per `journey-l1-01-avatar.md` §9:
- Full-width, Brand-Green #039902, white text.
- 48px+ height (tap-friendly).
- Action-oriented but permission-toned.
- ❌ "BUY NOW!" ✅ "See if this works for him" / "Try it for 60 days."
- AA contrast minimum.

### 8.6 Spacing (L1)

Per `journey-l1-01-avatar.md` §9:
- Section spacing: 40px gaps.
- Paragraph spacing: 16px.
- Card spacing: 24px.
- Border-radius: 12-16px.

### 8.7 Sign-off Progression (L1)

Per `journey-l1-02-sequence.md` §4.2:
- E1-E2: "Talk soon,"
- E3-E5: "With understanding,"
- E6+: "With care,"

### 8.8 Hope/Realism Ratios (L1)

Per `journey-l1-02-sequence.md` §4.2:
- Pre-Purchase: 70/30
- Conversion: 60/40
- Transactional: 65/35
- PP-Early: 65/35
- PP-Mid: 55/45
- Lifecycle: 50/50

### 8.9 Geographic Sensitivity (L1)

Per `journey-l1-02-sequence.md` §4.5:
- UK/AU (30% of L1): use "nappies" not "diapers."

### 8.10 Partner Conflict Edge Case (L1)

Per `journey-l1-02-sequence.md` §4.6:
- NEVER imply she needs her partner's permission.
- L1 voice rules: "This is your decision."
- If a welcome email mentions a partner, the framing is permissive ("if your partner has questions, here's the FAQ") not requiring.

### 8.11 Self-Blame Edge Case (L1)

Per `journey-l1-02-sequence.md` §4.7:
- Sarah's self-blame level is 80% peak.
- Every L1 email must avoid echo-triggers: "Just try harder," "Be more consistent," "Your child will be normal."
- The failure acknowledgment in Welcome E4 ("You didn't fail. You solved the wrong problem.") is the primary defense.

---

## 9. APPENDIX — QUICK-REFERENCE VARIANCE MATRIX

For Stage 1 subagents, this is the quick-reference matrix. Full per-email specs in §2. Full variance analysis in §3.

### 9.1 Welcome Flow Quick-Reference

| Email | Sections | Pattern | Images | Color | Length | Argument | Rhythm | CTA | Subject |
|-------|:--------:|:-------:|:------:|:-----:|:------:|:--------:|:------:|:---:|:-------:|
| E1 | 5 | A | 1 | Warm | 990L | MP-light | Tight | Late+PS | Mirror |
| E2 | 5-6 | C | 1 | Warm+Cool | 1,085L | MP-deep | Tight+ | 2x | Mechanism |
| E3 | 8 | A | 2 | Warm+Cool | 751M | MP-bridge | Mixed | 2x | Calendar |
| E4 | 11 | C | 2 | Warm+Cool | 1,029L | MP-absolution | Tight+ | 3x | Quote |
| E5 | 11 | G | 4 | Warm+Green | 1,186L | MP-product | Mixed | 2x | Calendar math |
| E6 | 6 | D | 2 | Warm+Yellow | 1,103L | Story-Test | Tight+ | 2x | Cal+ID |
| E7 | 14 | G | 2 | Warm+Yellow | 990L | MP-closing | Tight+ | 3x | Anchor |
| E8 | 10 | A | 1 | Warm+soft | 995L | Recap-MP | Tight | 1x+PS | Cal echo |

### 9.2 Variance Quick-Reference (Adjacent Pairs)

| Pair | Differ | Flag | Status |
|------|:------:|:----:|--------|
| E2/E1 | 5/9 | ⚠️ | Acceptable (narrative transition) |
| E3/E2 | 7/9 | ✓ | Pass |
| E4/E3 | 7/9 | ✓ | Pass |
| E5/E4 | 8/9 | ✓ | Pass |
| E6/E5 | 7/9 | ✓ | Pass |
| E7/E6 | 5/9 | ⚠️ | Acceptable (closing arc) |
| E8/E7 | 7/9 | ✓ | Pass |
| Cart E1/Welcome E1 | 6/9 | ✓ | At floor |
| Cart E2/Cart E1 | 6/9 | ✓ | At floor |
| Cart E3/Cart E2 | 9/9 | ✓ | Max |
| Checkout E1/Cart E3 | 3/9 | 🚨 | **CRITICAL** (remediation §4.1) |
| Checkout E2/Checkout E1 | 7/9 | ✓ | Pass |
| Browse E1/Welcome E1 | 5/9 | ⚠️ | Acceptable (educational complement) |
| Browse E2/Browse E1 | 7/9 | ✓ | Pass |
| Browse E3/Browse E2 | 7/9 | ✓ | Pass |
| PP-Ed E1/Arrived | 8/9 | ✓ | Pass |
| PP-Ed E2/PP-Ed E1 | 7/9 | ✓ | Pass |
| PP-Ed E3/PP-Ed E2 | 5/9 | ⚠️ | Acceptable (7-day gap) |
| PP-Ed E4/PP-Ed E3 | 7/9 | ✓ | Pass |
| PP-Ext-Ed E1/PP-Ed E4 | 5/9 | ⚠️ | Acceptable (D21+/D22+ gap) |
| PP-Ext-Ed E2/PP-Ext-Ed E1 | 6/9 | ✓ | At floor |
| PP-Ext-Ed E3/PP-Ext-Ed E2 | 6/9 | ✓ | At floor |
| PP-Ext-Ed E4/PP-Ext-Ed E3 | 6/9 | ✓ | At floor |
| PP-Ext-Ed E5/PP-Ext-Ed E4 | 2/9 | 🚨 | **CRITICAL** (remediation §4.2) |
| Replen B2/Replen B1 | 2/9 | 🚨 | **CRITICAL** (remediation §5.2) |
| Winback A E1/PP-Ext-Ed E5 | 7/9 | ✓ | Pass |
| Winback A E2/Winback A E1 | 8/9 | ✓ | Pass |
| Winback A E3/Winback A E2 | 9/9 | ✓ | Max |

### 9.3 Critical Flags — Remediation Required

| Flag | Pair | Differ | Recommended Fix |
|------|------|:------:|-----------------|
| 🚨 | Checkout E1 vs Cart E3 | 3/9 | Change argument to Problem-Solution + Add mid text-link |
| 🚨 | PP-Ext-Ed E5 vs PP-Ext-Ed E4 | 2/9 | Change to Story-Led + Single CTA + Split into 2 sends |
| 🚨 | Replen B2 vs Replen B1 | 2/9 | Change to Story-Led + Stretch to D105 |

### 9.4 Acceptable Flags (5/9) — Documented Variants

| Flag | Pair | Differ | Why Acceptable |
|------|------|:------:|----------------|
| ⚠️ | Welcome E2 vs E1 | 5/9 | Mechanism click transition; trust delta +2 |
| ⚠️ | Welcome E7 vs E6 | 5/9 | Closing arc transition; trust preservation |
| ⚠️ | Browse E1 vs Welcome E1 | 5/9 | Educational complement; same day may co-occur |
| ⚠️ | PP-Ed E3 vs PP-Ed E2 | 5/9 | 7-day cadence; both education-phase |
| ⚠️ | PP-Ext-Ed E1 vs PP-Ed E4 | 5/9 | D21+/D22+ gap; both D21+ education |

---

*End of Level 1 (Sarah) Structural Blueprint & Variance Ledger — BrightKidCo Customer Journey Reference*
*Length: ~28,000 words (substantially longer than the 5,000-10,000 target because of 51 emails × 9 dimensions + variance ledger + remediation playbook; depth is appropriate for "the most tactical section" Stage 1 reference document).*
*Generated: 2026-06-28.*
*Sources synthesized: `journey-l1-01-avatar.md` §§1-10, `journey-l1-02-sequence.md` §§2-5, `journey-l1-03-emotional-trust.md` §§1-9, `locked-profile.json` welcome-01-e1-l1 through welcome-01-e8-l1 + cart-02-e1/e2/e3, checkout-03-e1/e2, browse-04-e1/e2/e3, `email-marketing-structure` skill §§1-14.*
*Companion documents: `journey-l1-01-avatar.md`, `journey-l1-02-sequence.md`, `journey-l1-03-emotional-trust.md`, `email-marketing-structure` skill.*
