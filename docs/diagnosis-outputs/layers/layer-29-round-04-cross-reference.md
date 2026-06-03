# L29 R4: Visual Calibration — Cross-Reference Matrix

**Task:** Cross-reference Visual Calibration rules against existing avatar levels, voice calibration, and brand constants.
**Generated:** 2026-05-25

---

## Cross-Reference Matrix

| # | Visual Rule | Avatar Level | Voice Alignment | Brand Compliance | Source(s) |
|---|-------------|-------------|-----------------|-----------------|-----------|
| 1 | **Color vibrancy gradient:** L1 most vibrant (green dominant), L2 muted (mint/cream), L3 most muted (gray/cream) | L1/L2/L3 | L1: 70% hope = brighter energy. L2: 40% hope = clinical restraint. L3: 20% hope = quiet warmth. Color intensity mirrors hope/realism ratio. | DOC6: universal palette (green/mint/cream/yellow/gray). No per-level color override in client files — calibration is emphasis, not substitution. | R1 (L29 §7), R3 (L29 archived §2.2), L4 §3.10/L4.11/L5.11, DOC6 (lines 142-148) |
| 2 | **CTA aggressiveness per level:** L1 medium, L2 low, L3 very low, GF medium-low | L1/L2/L3/GF | Voice rule V12: permission-not-to-buy. L3: "permission-not-to-buy energy" = text links, not big buttons. L1: medium-aggressive buttons OK. | DOC6 (lines 486-490): CTA buttons min 48px height. Skill R2: pill-shaped CTAs, benefit-driven copy, never "Shop Now." | R1 (L29 §7, §9), L4 §3.10/§4.11/§5.11, L9 §4.1 (V12), R2 (Framework 7) |
| 3 | **Hero image age range:** L1: 3-5yr, L2: 5-7yr, L3: 6-10+yr, GF: diverse 3-10+ | L1/L2/L3/GF | L9 §6.3: level-approved phrases match age expectations. L3 never shows young children. | R1 (L29 §3): real kids, real homes, soft lighting. No stock happy families. DOC1 §25 explicit age ranges per level. | R1 (L29 §3), R3 (L29 archived §2.2), L4 §3.16/§4.18/§5.17, DOC1 §25 |
| 4 | **Urgency visuals:** L1 allowed (countdown, Pre-K), L2 none, L3 ZERO, GF low-medium | L1/L2/L3/GF | L9 §5.3: "You only have X days!" forbidden. L3 urgency = NEVER per L4 §5.11. L1 Pre-K urgency = primary conversion trigger. | DOC6 §5: "NEVER '30 days'" — 60-day framing only. Urgency as factual deadlines OK, countdown manipulation NOT OK. | R1 (L29 §7), L4 §3.10/§4.11/§5.11, L9 §5.3, DOC6 (lines 526-528) |
| 5 | **Testimonial visual length:** L1 short-medium cards, L2 long blocks, L3 long+messy, GF medium | L1/L2/L3/GF | L9 §8.4: sign-off length scales with phase. L3 testimonials must be "realistic, unpolished" matching voice's "quiet warmth + clinical reality." | R2 (Framework 6): visual hierarchy supports long-form via reverse triangle pattern. L3 uses slow-reader spacing. | R1 (L29 §7), R3 (L29 archived §2.2), L4 §3.10/§4.11/§5.11, R2 (Framework 6) |
| 6 | **NO cartoon kid illustrations** (universal) | All levels | Voice V4: never sound like marketing. Cartoon = infantilized = marketing signal. | R1 (L29 §4): explicit DON'T. R3: "NO cartoon kid illustrations — ever, at any level." DOC1 §25 absolute. | R1 (L29 §4), R3 (L29 §2.6), DOC1 §25 |
| 7 | **Lena sign-off visual presence:** every mail, max 2-3 sentences + 2 lines P.S. | All levels | L9 §8: sign-off variants (short/medium/long) per phase. Voice V2 non-negotiable. L1-L3 all get Lena, never founder. | DOC6 §2: Lena voice rules locked. Profile subtitle always "Customer Support · Mom of two autistic sons." | R1 (L29 §8), L9 §8, DOC6 (lines 86-112), BRAND_VOICE_GUIDE §1 |
| 8 | **Sensory-soft imagery:** L2 uses soft textures, calm environments, therapy-adjacent contexts | L2 | L9 §6.4: "The bathroom is the last place he wants to be. We know why." (L2-A sensory cluster). Visual = calm, not clinical-sterile. | R3 (L29 archived): L2 design tone "CALM, PROFESSIONAL, SCIENCE-ADJACENT." Mint more prominent (science-adjacent). | R1 (L29 §3), R3 (L29 archived §2.2), L4 §4.18, L9 §6.4 |
| 9 | **Dignity-first imagery for L3:** no pity, no "sad child," half-faces/hands/silhouettes, adaptive equipment OK | L3 | L9 §3 Principle 3: autism is identity, not disease. L9 §6.4: "He's never shown a sign. That's not failure — that's his neurology." | BRAND_VOICE_GUIDE §4: Dignity-First Language rules. "The child is NOT a problem to solve." | R1 (L29 §3, §7), L4 §5.17, L9 §3/§6.4, BRAND_VOICE_GUIDE §4 |
| 10 | **Medicaid-sensitive pricing display:** L3 uses low price prominence, 1-pair trial framing default | L3 | L9 §4.2 (V18): never use math reframes. L4 §5.14: "permission-not-to-buy energy." | DOC6 (lines 572-585): 1 pair recommended for "very skeptical audience (L3 Phase 4)." Math reframes NEVER for L3. | R1 (L29 §9), L4 §5.11, L9 §4.2 (V18), DOC6 (lines 572-585, 611-613) |
| 11 | **Mobile-first design:** 60%+ traffic mobile, single column, 16px min body, 48px min CTA | All levels | All voice rules assume mobile reading — L9 §16: sentence templates are mobile-length. | R2 (Framework 1): 60%+ mobile opens. Skill: iOS auto-zooms below 13px. 44x44px tap targets (Apple HIG). 600px max width. | R2 (Frameworks 1, 4), R3 (L29 §2.3), DOC1 §25 |
| 12 | **Font lock: Questrial weight 400 only** — never bold for body text | All levels | Voice V4: never sound like marketing. Bold body = marketing signal. Consistent with "peer, not brand" principle. | DOC6 (line 142): "Font: Questrial weight 400 only (never bold for body)." BRAND_VOICE_GUIDE (line 840): same. | R1 (L29 §2), DOC6 (line 142), BRAND_VOICE_GUIDE (line 840) |
| 13 | **Dark mode compatibility:** #1a1a1a bg (not pure black), #f5f5f5 text (not pure white), logo swap, CTA colors unchanged | All levels | N/A (technical, not tonal) | R2 (Framework 2): Gmail auto-inverts, Apple Mail respects media queries. Brand-Green (#039902) dark mode behavior untested — flagged gap. | R2 (Framework 2), R3 (L29 §2.5) |
| 14 | **Forbidden visual patterns:** no "Before/After" with shame, no pull-ups as "evil," no bright cartoon colors | All levels | L9 §5.1: "Just like other kids" forbidden (NT comparison wound). V6: never compare to neurotypical standard. | R1 (L29 §4): explicit DON'T list. BRAND_VOICE_GUIDE §2: universal forbidden phrases include shame-triggering language. | R1 (L29 §4), L9 §5, BRAND_VOICE_GUIDE §2, DOC1 §25 |
| 15 | **Migration-anchor visuals for GF:** multiple family types in one image, symptom-focused not diagnosis-labeled | GF | L9 §6.3: "If your child doesn't feel when they need to go..." — symptom language, never level labels. V16: diagnosis-Rejecters need label-free language. | BRAND_VOICE_GUIDE §6: "Symptom-First, Never Level Labels." R3: GF "Whether...Or...If..." visual language patterns. | R1 (L29 §7), R3 (L29 archived §2.2), L4 §6.2, L9 §4.2 (V16), BRAND_VOICE_GUIDE §6 |
| 16 | **Color palette universal lock:** Brand-Green #039902, Mint #DBFFCD, Cream #FBF7EB/#FAF5E8, Yellow #F5C84B/#F5CB5C, Gray #9AA8A7, Dark #1A1A1A | All levels | N/A (brand constant) | DOC6 (lines 142-148), BRAND_VOICE_GUIDE (lines 839-845), DOC1 §25: all three sources lock identical palette. | R1 (L29 §1), DOC6 (lines 142-148), BRAND_VOICE_GUIDE (lines 839-845), DOC1 §25 |
| 17 | **Offer visual priority per level:** L1/L2/GF default 3+3 (BESTSELLER badge), L3 default 1 pair (trial) | L1/L2/L3/GF | L9 §4.2 (V12): permission-not-to-buy. L3: "permission-not-to-buy energy." L1: medium-aggressive CTA = BESTSELLER prominent. | DOC6 (lines 476-501): 3+3 = default, 5+5 for L2-3, 1 pair for L3 Phase 4. "BESTSELLER" badge, "Save 40% TODAY." | R1 (L29 §9), DOC6 (lines 476-501), BRAND_VOICE_GUIDE §8 |
| 18 | **Footer universal:** identical across all levels — logo, tagline, links (Shop/Parent Stories/Contact/FAQ), social (IG/TikTok only), reviews microcopy | All levels | L9 §8: sign-off is personal (Lena), footer is brand-standard. No voice variation in footer. | R1 (L29 §5): footer structure locked. NO Trustpilot, NO Facebook. Reviews "16,511 · 4.9 ★" text only, not clickable. | R1 (L29 §5), DOC1 §20 |
| 19 | **Pop-up visual design:** same for all visitors — 4 symptom-based buttons, not visually differentiated by level | All levels | Voice: pop-up text uses symptom language ("Talks about potty but won't actually do it"), never level labels. | BRAND_VOICE_GUIDE §6: pop-up content locked. "What describes your child best?" — 4 options, 4 tags. | R1 (L29 §6), BRAND_VOICE_GUIDE §6, DOC1 §16 |
| 20 | **L3 design tone: "Quiet Warmth + Clinical Reality"** — deepest whitespace, longest sections, slow-reader layout | L3 | L9 §8.4: long sign-off variant for late-flow/winback. Phase 4 formula: Permission 35% / Validation 30%. "Gentle, no energy push." | R3 (L29 archived): L3 mutest palette, less saturation, soft grays prominent. "LOTS of whitespace (sensory-friendly)." | R3 (L29 archived §2.2), L4 §5.11, L9 §8.4/§10 |
| 21 | **Pre-K visual context:** backpacks, school, classroom OK for L1 only | L1 | L9 §6.3: "Pre-K is coming. You have time. Here's the plan." — approved L1 phrase. L2/L3: Pre-K hooks FORBIDDEN. | L4 §3.16: "Pre-K context: backpack, school look, outdoor." L4 §4.12: "Direct Pre-K urgency" forbidden for L2. | R1 (L29 §3, §7), L4 §3.16/§4.12/§5.12, L9 §5.2 |
| 22 | **AAC device visibility:** OK in L3 hero imagery (background, not foreground) | L3 | L9 §6.4: "He can't tell you. That doesn't mean he can't learn to feel." (L3-D). AAC inclusive in voice and imagery. | L4 §5.17: "AAC devices in background OK." L4 §7.4: "She told me, with her AAC, 'need bathroom.'" — authentic L3 win. | R3 (L29 archived §2.2), L4 §5.17/§7.4, L9 §6.4 |
| 23 | **Button shape consistency:** pick ONE shape (rounded 4-6px or pill 50%) across ALL templates | All levels | N/A (technical standard) | R2 (Framework 2, Standard 2): "Pick ONE shape across all templates — never mix." Skill recommends pill (playful, kid-friendly). | R2 (Standard 2), R2 (Framework 10) |
| 24 | **No exclamation marks in body text** (universal) | All levels | L9 §5.1: "Never sound like marketing." Exclamation marks = marketing signal. L3: "Any exclamation-mark heavy subjects" explicitly forbidden. | R1 (L29 §11): explicit DON'T. BRAND_VOICE_GUIDE §2: L3 forbidden list includes exclamation-heavy subjects. | R1 (L29 §11), L9 §5.1, BRAND_VOICE_GUIDE §2 |
| 25 | **Brand-Green CTA contrast ratio:** minimum 4.5:1 against cream/white backgrounds | All levels | N/A (accessibility standard) | R2 (Framework 6): 4.5:1 contrast ratio (WCAG AA). R3 gap: "BKC green (#039902) contrast ratio against cream/white not measured with WebAIM" — flagged. | R2 (Framework 6, Standard 5), R3 (L29 §4 — gap #6) |

---

## Contradictions Identified

### C1: L2 Color Emphasis — "Brand-Green dominant" vs "Muted/Clinical"
- **R1 (L29 §7):** L2 = "Mint/Cream dominant, less Green"
- **L4 §4.18 (Visual Cues):** "Color: Brand-Green dominant, Mint for highlight boxes"
- **Conflict:** R1 says L2 de-emphasizes green for clinical warmth. L4 says green is still dominant. Resolution: R1's calibration (muted green, mint/cream forward) is more consistent with L2's 40/60 hope/realism. L4 §4.18 appears to be a default template not calibrated per level.
- **Sources:** R1 (L29 §7), L4 §4.18

### C2: L3 Color — "Deeper, calmer palette" vs generic "Brand-Green dominant"
- **R3 (L29 archived):** L3 = "MUTEST palette — less saturation, more restraint; soft grays prominent"
- **L4 §5.17:** "Color: Deeper, calmer palette; Brand-Green dominant, soft greys prominent"
- **Conflict:** Both acknowledge muted palette, but L4 still says "Brand-Green dominant" — contradictory to "mutest palette." Resolution: L3 should use Brand-Green as MINOR accent only, with cream/gray as dominant. Green as CTA color only, never as background.
- **Sources:** R3 (L29 archived §2.2), L4 §5.17

### C3: Urgency Visuals for L2 — "Low" vs "event-driven spikes"
- **R1 (L29 §7):** L2 urgency = Low
- **L4 §9.3 (C3):** "Cross-level matrix says Level 2 urgency = LOW, but conversion triggers include high-urgency events (withholding crisis, school transition)"
- **Conflict:** Static urgency assignment doesn't capture L2's event-driven spikes. Resolution: Visual urgency for L2 should be "baseline none, event-triggered temporary" — e.g., withholding crisis email can have slightly elevated CTA prominence, but never Pre-K countdown style.
- **Sources:** R1 (L29 §7), L4 §9.3

### C4: Typography Weight Conflict — "Never bold" vs "Headlines Bold (700)"
- **DOC6/BRAND_VOICE_GUIDE:** "Questrial weight 400 only — never bold for body"
- **R2 (Framework 6, Standard 3):** "H1: 24-32px mobile, Bold (700)" / "CTA: 16-18px, Bold (700)"
- **Conflict:** Brand lock says weight 400 ONLY. Skill SOPs say headlines/CTAs should be Bold (700). Resolution: Brand constant overrides skill SOP. BrightKidCo uses Questrial 400 for ALL text — headlines differentiated by SIZE (24-32px), not weight. CTA buttons use color contrast, not bold weight.
- **Sources:** DOC6 (line 142), BRAND_VOICE_GUIDE (line 840), R2 (Framework 6)

### C5: Font Choice — "Questrial" vs "System fonts only"
- **DOC6/BRAND_VOICE_GUIDE:** "Font: Questrial weight 400 only"
- **R2 (Standard 3):** "Safe sans: Arial, Helvetica, sans-serif. NO custom fonts (fail in Gmail and Outlook)."
- **Conflict:** Brand specifies Questrial (Google Font). Email design SOP says system fonts only because Gmail/Outlook strip @font-face. Resolution: Klaviyo/HTML emails should use Questrial as primary with Arial/Helvetica fallback stack: `font-family: Questrial, Arial, Helvetica, sans-serif`. Desktop-rendered Questrial, fallback for stripped contexts.
- **Sources:** DOC6 (line 142), R2 (Standard 3)

### C6: L1 Hope Level Visual Inconsistency
- **L4 §3.10:** L1 = "70% Hope / 30% Realism"
- **R1 (L29 §7):** L1 = "Hope Level 70/30, Visual Energy: Optimistic but grounded"
- **L4 §3.16 (Visual Cues):** "Color: Brand-Green dominant, Cream warmth, soft yellow accents"
- **Alignment check:** 70% hope should mean the MOST vibrant visual treatment. All three sources agree. No contradiction — confirmed consistent.
- **Sources:** L4 §3.10, R1 (L29 §7), L4 §3.16

---

## Gaps Identified

| # | Gap | Severity | Description | Source |
|---|-----|----------|-------------|--------|
| G1 | **Brand-Green dark mode behavior untested** | Medium | #039902 may shift badly in dark mode. No WebAIM contrast measurement against cream (#FBF7EB) or off-white (#FAF9F7). | R3 (L29 §4 gap #6) |
| G2 | **No actual hero images curated per level** | High | Image direction rules exist (age ranges, mood, context) but no actual photography brief or stock photo curation. | R3 (L29 §4 gap #2) |
| G3 | **No BKC-specific Klaviyo templates built** | Medium | Wiki has generic email design SOPs. No actual HTML templates with BrightKidCo colors/Questrial implemented. | R3 (L29 §4 gap #1) |
| G4 | **Dark mode rendering not tested for BKC palette** | Medium | Rules exist (R2 Framework 2) but no actual rendering tests across Apple Mail, Gmail, Outlook for BKC's specific color combinations. | R3 (L29 §4 gap #3) |
| G5 | **No photography style guide** | Medium | Direction rules exist (DOC1 §25) but no photo shoot brief, stock photo sources, or curation criteria documented. | R3 (L29 §4 gap #6) |
| G6 | **Figma template files missing** | Low | Wireframing protocol documented but no actual Figma files for BKC email templates. | R3 (L29 §4 gap #8) |
| G7 | **Character/mascot guidelines absent** | High | Brand explicitly avoids cartoons, but no alternative visual identity system (icons, illustration style, graphic elements) defined. What replaces cartoon characters? | R3 (L29 §4 gap #5) |
| G8 | **L2 sensory-soft imagery specificity** | Medium | L2 calls for "soft textures, gentle environments" but no specific visual vocabulary defined (what textures? what environments?). | R1 (L29 §3), L4 §4.18 |

---

## Summary

- **Total cross-reference entries:** 25
- **Contradictions found:** 6 (C1-C6)
- **Gaps identified:** 8 (G1-G8)
- **All 7 input files referenced:** R1 (layer-29-round-01-client-files.md), R2 (layer-29-round-02-skill-loading.md), R3 (layer-29-round-03-wiki-extraction.md), L4 (layer-04-avatar-levels.md), L9 (layer-09-voice-lena.md — note: file is named `layer-09-voice-lena.md`, not `layer-09-voice.md`), DOC6 (DOC6-USAGE-GUIDE.txt), BRAND_VOICE_GUIDE.md

**Key finding:** The visual calibration system is well-defined across all 4 avatar levels, with clear color gradients, CTA aggressiveness scaling, and imagery age-ranges. The main risks are: (1) typography contradictions between brand lock (Questrial 400 only) and email SOPs (bold headlines), (2) L2/L3 color emphasis contradictions between sources, and (3) untested dark mode behavior for the brand palette.

---
*Generated: 2026-05-25*
*Input files: 7/7 read completely*
*Cross-reference entries: 25*
