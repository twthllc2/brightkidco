# Layer 29 — Visual Calibration per Avatar Level: DEFINITIVE SYNTHESIS

**Type:** Final Synthesis (R5)
**Generated:** 2026-05-25
**Sources:** L29 R1 (Client Files), L29 R2 (Skill Loading), L29 R3 (Wiki Extraction), L4 (Avatar Levels), L9 (Voice — Lena), DOC6 (Usage Guide)
**Note:** L29 R4 (Cross-Reference) output file was not produced. Cross-referencing was performed directly from source layers in this synthesis.

---

## TABLE OF CONTENTS

1. [Universal Brand Visual Constants](#1-universal-constants)
2. [Level 1 — Visual Calibration (Sarah, Verbal, Hope-Intact)](#2-level-1)
3. [Level 2 — Visual Calibration (Lisa, Mixed, Method-Cycling)](#3-level-2)
4. [Level 3 — Visual Calibration (Maria, Non-Verbal, Resigned)](#4-level-3)
5. [General Fallback — Visual Calibration (Cross-Level)](#5-general-fallback)
6. [Cross-Reference: Avatar Emotional States × Visual Design](#6-emotional-cross-reference)
7. [Voice Alignment Notes (Layer 9)](#7-voice-alignment)
8. [Edge Cases and Exceptions](#8-edge-cases)
9. [Technical Email Design Standards](#9-technical-standards)
10. [Forbidden Visual Patterns (All Levels)](#10-forbidden-patterns)

---

<a name="1-universal-constants"></a>
## 1. UNIVERSAL BRAND VISUAL CONSTANTS

These constants apply to ALL avatar levels. No level-specific variation is permitted for these elements.

### 1.1 Color Palette (LOCKED)

| Color Name | Hex Code | Role | Usage |
|------------|----------|------|-------|
| Brand-Green | `#039902` | Primary | CTAs, accents, brand identity |
| Mint | `#DBFFCD` | Secondary | Highlight boxes, soft backgrounds |
| Cream Card | `#FBF7EB` | Secondary | Card backgrounds, section warmth |
| Cream Alt | `#FAF5E8` | Secondary | Section backgrounds |
| Brand-Yellow | `#F5C84B` / `#F5CB5C` | Accent | Badges, stars, trust signals |
| Soft Gray | `#9AA8A7` | Neutral | Subtle text, strikethrough |
| Dark Text | `#1A1A1A` | Primary | Body text, sign-off background |
| Body Gray | `#4A4A4A` | Neutral | Sub-captions, italic notes |
| Off-white BG | `#FAF9F7` | Background | Overall email background |

**Source:** DOC1 §25, DOC6 (lines 142-148), BRAND_VOICE_GUIDE.md (lines 839-845), L29 R1 §1, L29 R3 §2.1

**Application:** The color palette is UNIVERSAL across all avatar levels. Level differentiation happens through ACCENT WEIGHTING and SATURATION, not through different colors. See per-level sections for accent guidance.

### 1.2 Typography (LOCKED)

| Element | Specification |
|---------|--------------|
| **Brand Font** | Questrial (mandatory for all assets) |
| **Weight** | 400 only — NEVER bold for body text |
| **Headlines** | 24-32px Desktop / 20-24px Mobile |
| **Body** | 16px Mobile / 17px Desktop |
| **Captions** | 13-14px |
| **Line-height** | 1.5 minimum |
| **Email-safe fallback** | `Arial, Helvetica, sans-serif` (Questrial fails in Gmail/Outlook) |

**Source:** DOC1 §25, DOC6 (line 142), L29 R1 §2, L29 R3 §2.1

**Application:** Typography is UNIVERSAL. No level-specific font or sizing variations. The "never bold for body" rule applies to ALL avatar communications. In HTML email, use system fonts (Arial/Helvetica) since Questrial is not supported by Gmail or Outlook.

### 1.3 Layout Patterns (LOCKED)

| Pattern | Specification |
|---------|--------------|
| Cards | Subtle shadows, border-radius 12-16px |
| Whitespace | Plenty — section spacing 48-64px |
| Separators | "—" dash for list items, not bullets |
| CTAs | Min 48px height, full-width mobile |
| Max width | 600px |
| Mobile-first | 60%+ traffic is mobile |
| Body min | 16px mobile (accessibility) |

**Source:** DOC1 §25 (lines 1674-1689), L29 R1 §4, L29 R3 §2.1

### 1.4 Universal Image Rules (LOCKED)

**DO:**
- Real parents and real kids in real homes
- Soft natural lighting, neutral cream/sage/sand tones
- Diverse representation (different ethnicities, family setups)
- Kids 3-10 years (range, not just toddlers)
- Hands, silhouettes, half-faces (less invasive)
- Product context (visible underwear) — not packaging
- Mood: calm, real-life, not over-staged

**DON'T:**
- ❌ Stock images of neurotypical happy families
- ❌ Bright cartoon colors for toddler-brand look
- ❌ Cleaning chaos as drama image
- ❌ Children's faces full-on (privacy + over-personal)
- ❌ "Before/After" style with shame implications
- ❌ Pull-ups staged as "evil"
- ❌ NO cartoon kid illustrations — ever, at any level
- ❌ NO infantilized "Big Kid Underwear" graphics

**Source:** DOC1 §25 (lines 1636-1652), L29 R1 §3, L29 R3 §2.1

### 1.5 Footer (UNIVERSAL — Identical Across All Levels)

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

**Footer Link URLs (locked):**
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

**Source:** DOC1 §20 (lines 1359-1392), L29 R1 §5

### 1.6 Sender Identity (UNIVERSAL)

- From Email: support@brightkidco.com
- From Name: "Lena from BrightKidCo"
- Reply-To: support@brightkidco.com
- Sending Subdomain: send.brightkidco.com

**Source:** DOC1 §20, DOC6 (lines 629-650), L29 R1 §10

### 1.7 Offer Presentation (Base Rules)

| Offer | Price | Badge | Save Tag |
|-------|-------|-------|----------|
| 1 Pair | $34.99 | — | — |
| 3+3 FREE | $79.99 | BESTSELLER | Save 40% TODAY |
| 5+5 FREE | $119.99 | BEST VALUE / MAXIMUM VALUE | Save 60% TODAY |

**Pricing Display Rules:**
- $ symbol before number: $34.99 (not 34.99$)
- Period before cents: $79.99 (not $79,99)
- Bundle notation: "3 + 3 FREE" with spaces around +
- "FREE" always in caps when used as offer modifier

**Source:** DOC6 (lines 476-501), L29 R1 §9

---

<a name="2-level-1"></a>
## 2. LEVEL 1 — VISUAL CALIBRATION (Sarah, Verbal, Hope-Intact)

**Tag:** `avatar_level1` | **Audience Share:** ~35% | **Child Age:** 3-5 years
**Hope Level:** 70% Hope / 30% Realism
**Emotional State:** Hope-intact, deadline-driven (Pre-K), open to mechanism, vulnerable to hope-crash

### 2.1 Design Tone

**OPTIMISTIC BUT GROUNDED**

Level 1 visuals are the most vibrant in the BrightKidCo system. The emotional energy is forward-looking, Pre-K aware, and deadline-driven. Visuals should feel like a plan is possible — not a guarantee, but a path.

### 2.2 Color Accent Weighting

| Color | Weight | Usage |
|-------|--------|-------|
| Brand-Green `#039902` | **DOMINANT** | CTAs prominent, accents strong, brand identity forward |
| Cream `#FBF7EB` | Warm | Card backgrounds, section warmth |
| Yellow `#F5C84B` | Present | Badges, stars, trust signals (Pre-K vibe) |
| Mint `#DBFFCD` | Supporting | Highlight boxes |
| Gray `#9AA8A7` | Minimal | Subtle text only |

**Overall:** MOST VIBRANT palette usage. Green is the hero color. Cream provides warmth. Yellow adds optimistic energy. The palette should feel hopeful without being childish.

### 2.3 Hero Imagery Guidelines

| Element | Specification |
|---------|--------------|
| **Child age range** | 3-5 years (match the avatar) |
| **Setting** | Home, bathroom doorway, potty area, preschool context |
| **Mood** | Hope-forward: kids near bathroom, looking at potty, learning |
| **Context** | Pre-K imagery OK — backpacks, school look, outdoor |
| **Activities** | Playing with letter toys, interacting with mom, laughing |
| **Tone** | Calm but forward-looking, not over-staged |

**DO:**
- Show younger kids (3-5 range)
- Pre-K / school readiness visual context OK
- Hope-forward imagery: kids near bathroom, looking at potty
- Short-medium testimonial imagery

**DON'T:**
- ❌ Heavy struggle imagery
- ❌ Older kids (5+)
- ❌ Clinical/sterile environments
- ❌ Non-verbal profiles

**Source:** L29 R1 §3 (Level 1), L4 §3.16, L29 R3 §2.2

### 2.4 Testimonial Visual Format

- **Length:** Short-Medium (3-8 sentences)
- **Format:** Scannable cards, more whitespace
- **Style:** "Almost trained" stories, Pre-K success context
- **Visual:** Short testimonial blocks with clear formatting

### 2.5 CTA Calibration

| Element | Setting |
|---------|---------|
| **Aggressiveness** | MEDIUM |
| **Prominence** | Green CTAs prominent, above fold |
| **Copy style** | Soft — "Learn more about how body signals work" |
| **Urgency elements** | ALLOWED — countdown, "before school" framing OK |
| **Button style** | Full-width mobile, pill-shaped, Brand-Green fill |

**Source:** L29 R1 §7, L4 §3.10, L9 §9.1

### 2.6 Section Length & Whitespace

- Short scannable sections (Phase 2 dominant — fast decision cycle 2-7 days)
- More whitespace than other levels
- "Steps" visualizations work well
- Education → Mechanism → Soft invitation structure

### 2.7 Offer Visual Priority

- Default: 3+3 bundle
- Bestseller badge prominent
- Pre-K urgency OK ("before school starts")
- 5+5 upgrade suggestion for committed buyers

**Source:** L29 R1 §9

### 2.8 Character Usage

- **Lena:** Primary voice. Warm, optimistic, encouraging. "I get it, Pre-K is coming."
- **Sign-off energy:** Encouraging, forward-looking
- **Mary S.:** Phase 2 only (dedicated PP-Mary-S-Story mail)

### 2.9 Voice-Visual Alignment (Layer 9)

| Voice Rule | Visual Manifestation |
|------------|---------------------|
| V1 (Peer-to-peer) | Warm, personal imagery — not corporate |
| V7 (Validate failures) | Short, relatable testimonial cards |
| V11 (Mechanism) | Clean, educational layout — "steps" visualizations |
| V12 (Permission) | Soft CTA buttons, not aggressive |
| Urgency (STRONG) | Pre-K countdown elements allowed |

**Source:** L9 §9.1

### 2.10 Forbidden Visual Patterns (Level 1 Specific)

- ❌ "Your child is severely affected" — visual or text
- ❌ "Non-verbal kids" imagery or references
- ❌ "Years of failed attempts" — overblown for L1
- ❌ "Adult diapers" — not her reality yet
- ❌ "Forever in pull-ups" language
- ❌ Heavy clinical/therapy imagery
- ❌ Sad child staging

---

<a name="3-level-2"></a>
## 3. LEVEL 2 — VISUAL CALIBRATION (Lisa, Mixed, Method-Cycling)

**Tag:** `avatar_level2` | **Audience Share:** ~40% (LARGEST) | **Child Age:** 5-7 years
**Hope Level:** 40% Hope / 60% Realism
**Emotional State:** Hope with cracks, hyper-skeptical + hyper-motivated, science-literate, BCBA-invested

### 3.1 Design Tone

**CALM, PROFESSIONAL, SCIENCE-ADJACENT**

Level 2 visuals are the most restrained in the system. The audience is the hardest to convert — she has seen enough to be skeptical but not enough to have given up. Visuals must earn trust through clinical credibility, not emotional appeal.

### 3.2 Color Accent Weighting

| Color | Weight | Usage |
|-------|--------|-------|
| Brand-Green `#039902` | Restrained | Less prominent than L1 — not the hero |
| Mint `#DBFFCD` | **PROMINENT** | Science-adjacent feel, highlight boxes |
| Cream `#FBF7EB` | Dominant | Card backgrounds, section warmth |
| Gray `#9AA8A7` | **PROMINENT** | Credibility, professional feel |
| Yellow `#F5C84B` | Minimal | Trust signals only |

**Overall:** RESTRAINED palette. Mint and gray are more prominent than in L1. Green steps back. The palette should feel clinical-warm — professional but not sterile, credible but not cold.

### 3.3 Hero Imagery Guidelines

| Element | Specification |
|---------|--------------|
| **Child age range** | 5-8 years (match the avatar) |
| **Setting** | Calm home environments, therapy-adjacent contexts |
| **Mood** | Calm, focused, sensory-aware |
| **Context** | OT/therapy settings OK but not dominant |
| **Sensory cues** | Soft textures, gentle environments, weighted blankets, fidget tools |
| **Tone** | Clinical warmth — real, not staged |

**DO:**
- Show kids in 5-7 range
- Sensory context: soft textures, gentle environments
- BCBA-respectful imagery (therapy settings OK but not dominant)
- Longer testimonial imagery with messy details
- GI-awareness imagery: no "clean success" staging

**DON'T:**
- ❌ Toddler imagery (3-4 year olds)
- ❌ Pre-K energy, bright oversaturated colors
- ❌ Bright cartoon colors
- ❌ "Clean success" staging (GI-awareness)

**Source:** L29 R1 §3 (Level 2), L4 §4.18, L29 R3 §2.2

### 3.4 Testimonial Visual Format

- **Length:** Long (10-15 sentences)
- **Format:** Detailed blocks with science callout boxes
- **Style:** Kelly Mahler quotes, mechanism diagrams, BCBA-respectful framing
- **Visual:** Longer testimonial blocks with detailed formatting, science callout boxes

### 3.5 CTA Calibration

| Element | Setting |
|---------|---------|
| **Aggressiveness** | LOW |
| **Prominence** | Soft buttons, permission framing |
| **Copy style** | Medium — "See the science behind the body-signal learning layer" |
| **Urgency elements** | NONE — event-driven only (withholding crisis, school transition) |
| **Button style** | Full-width mobile, pill-shaped, muted green or mint fill |

**Source:** L29 R1 §7, L4 §4.11, L9 §9.2

### 3.6 Section Length & Whitespace

- Medium-length sections (7-21 day decision cycle)
- Science callout boxes (Kelly Mahler quotes)
- Mechanism diagrams
- Validate → Explain mechanism → Reframe → Soft CTA structure

### 3.7 Offer Visual Priority

- Default: 3+3 bundle
- Bestseller badge present but not dominant
- 5+5 upgrade suggestion for committed buyers
- NO urgency framing

**Source:** L29 R1 §9

### 3.8 Character Usage

- **Lena:** Primary voice. Respectful, science-literate. "Your BCBA built the foundation."
- **Sign-off energy:** Empathetic, realistic
- **Kelly Mahler:** Authority figure — citations prominent
- **Mary S.:** Phase 2 only

### 3.9 Voice-Visual Alignment (Layer 9)

| Voice Rule | Visual Manifestation |
|------------|---------------------|
| V1 (Peer-to-peer) | Empathetic, not corporate — therapy-respectful |
| V7 (Validate failures) | Long, detailed testimonial blocks naming BCBA/OT |
| V11 (Mechanism) | Science callout boxes, Kelly Mahler quotes |
| V13 (Science-first) | Mechanism diagrams, interoception explanations |
| Urgency (LOW) | NO countdown, NO "before school" framing |

**Source:** L9 §9.2

### 3.10 Forbidden Visual Patterns (Level 2 Specific)

- ❌ "Easy" / "Quick" in any form — visual or text
- ❌ Direct Pre-K urgency — L2 kids are 5-7, not Pre-K age
- ❌ Aggressive BCBA criticism — visual or text
- ❌ "Magic" / "Miracle" language
- ❌ "Just trust the process" framing
- ❌ Toddler imagery
- ❌ Bright oversaturated colors
- ❌ "Just like other kids" comparison visuals

---

<a name="4-level-3"></a>
## 4. LEVEL 3 — VISUAL CALIBRATION (Maria, Non-Verbal, Resigned)

**Tag:** `avatar_level3` | **Audience Share:** ~25% | **Child Age:** 6-10+ years
**Hope Level:** 20% Hope / 80% Realism
**Emotional State:** Resigned, dignity-seeking, most emotionally sensitive, grief-aware

**CRITICAL: DIGNITY-FIRST IS NON-NEGOTIABLE**

### 4.1 Design Tone

**QUIET WARMTH + CLINICAL REALITY**

Level 3 visuals are the most muted in the system. The audience has accepted that active potty training may never happen. Visuals must honor that acceptance without pushing hope, urgency, or false optimism. Every pixel must communicate dignity.

### 4.2 Color Accent Weighting

| Color | Weight | Usage |
|-------|--------|-------|
| Brand-Green `#039902` | **MINIMAL** | Very restrained accents only |
| Cream `#FBF7EB` | **DOMINANT** | Card backgrounds, section warmth |
| Gray `#9AA8A7` | **PROMINENT** | Credibility, quiet dignity |
| Body Gray `#4A4A4A` | Prominent | Sub-captions, reflective tone |
| Mint `#DBFFCD` | Supporting | Soft backgrounds |
| Yellow `#F5C84B` | **ABSENT** | No badges, no stars — too energetic |

**Overall:** MUTEST palette. Less saturation, more restraint. Soft grays are prominent. The palette should feel like a quiet room — warm but not loud, supportive but not pushing.

### 4.3 Hero Imagery Guidelines

| Element | Specification |
|---------|--------------|
| **Child age range** | 7-12 years (match the avatar — older kids) |
| **Setting** | Home, reflective settings, quiet spaces |
| **Mood** | Quiet warmth, dignity-forward |
| **Context** | AAC devices in background OK; sensory tools visible |
| **Composition** | Half-faces, hands, silhouettes (dignity-first) |
| **Tone** | Muted lighting, warm tones, few stimuli per image |

**DO:**
- Show older kids (6-10+ range)
- Dignity-first imagery: no pity, no "sad child" staging
- High-support-needs context: adaptive equipment visible OK
- Long + messy testimonial imagery (realistic, unpolished)
- Late-trainer story visuals prominent
- Medicaid-sensitive: no price-prominent visuals

**DON'T:**
- ❌ Young children (under 6)
- ❌ Bright cartoons
- ❌ Happy-family stock images
- ❌ Cheerleader visuals
- ❌ Diapers or toilet prominently shown
- ❌ Urgency imagery
- ❌ Countdown timers as visual elements
- ❌ "Sad child" staging — dignity, not pity
- ❌ Adult diaper language as visual shock value

**Source:** L29 R1 §3 (Level 3), L4 §5.17, L29 R3 §2.2

### 4.4 Testimonial Visual Format

- **Length:** Long + Messy (12-18 sentences)
- **Format:** Realistic, unpolished, slow-reader-friendly
- **Style:** Late-trainer stories (Maureen Bennie's son, 9.5 years), mini-win stories
- **Visual:** Long blocks with lots of whitespace (sensory-friendly)

### 4.5 CTA Calibration

| Element | Setting |
|---------|---------|
| **Aggressiveness** | VERY LOW |
| **Prominence** | Text links OK, not big buttons |
| **Copy style** | Super gentle — "Read one family's story" or "Bookmark for when you're ready" |
| **Urgency elements** | ZERO — triggers deep distrust |
| **Button style** | If buttons exist: muted, text-level prominence, cream/gray fill |

**Source:** L29 R1 §7, L4 §5.11, L9 §9.3

### 4.6 Section Length & Whitespace

- Long sections OK (slow reader — 14-30+ day decision cycle)
- LOTS of whitespace (sensory-friendly)
- Dignity anchors throughout
- Respect acknowledgment → Late-trainer story → Gentle info → Zero-pressure close structure

### 4.7 Offer Visual Priority

- Default: 1 pair (trial framing)
- Permission-not-to-buy energy
- Very low price prominence
- Medicaid sensitivity (~40% Medicaid usage)
- NO "BESTSELLER" badges — too energetic
- Price displayed minimally, not prominently

**Source:** L29 R1 §9, L4 §5.3

### 4.8 Character Usage

- **Lena:** Primary voice. Dignity-first, slow. "Whether or not, you're doing right."
- **Sign-off energy:** Gentle, no pressure
- **Maureen Bennie:** Late-trainer anchor story (son was 9.5)
- **Mary S.:** Phase 2 only

### 4.9 Voice-Visual Alignment (Layer 9)

| Voice Rule | Visual Manifestation |
|------------|---------------------|
| V1 (Peer-to-peer) | Slow, quiet — not energetic |
| V10 (Autism = identity) | Dignity-forward imagery, no "fix" framing |
| V12 (Permission) | Text links, not aggressive buttons |
| V14 (Timelines) | "8 weeks with patience" — no countdown |
| Urgency (NEVER) | Zero urgency visuals — no countdown, no "limited time" |

**Source:** L9 §9.3

### 4.10 Forbidden Visual Patterns (Level 3 Specific)

ALL Level 1+2 forbidden patterns, PLUS:
- ❌ "Easy" / "Quick" / "Fast" / "Simple" — visual or text
- ❌ "Your child WILL train" framing
- ❌ "Don't give up!" cheerleader language
- ❌ "Save him from years of diapers" — visual or text
- ❌ "Become like other kids" — comparison visuals
- ❌ "Get out of diapers!" / "Be diaper-free!" — visual or text
- ❌ Adult diaper language as sales pressure
- ❌ Grief as sales tool
- ❌ Exclamation-mark heavy subjects
- ❌ Countdown timers or urgency elements
- ❌ Price-prominent visuals (Medicaid sensitivity)
- ❌ Young children in imagery
- ❌ Bright, energetic color accents

---

<a name="5-general-fallback"></a>
## 5. GENERAL FALLBACK — VISUAL CALIBRATION (Cross-Level)

**Tag:** `avatar_general` | **Audience Share:** ~50% real volume | **Child Age:** 2-10+ years
**Hope Level:** 50/50 Hope / Realism
**Emotional State:** Variable — diagnostic entrants, diagnosis-rejecters, sensory-difference parents, overwhelmed non-selectors

### 5.1 Design Tone

**INCLUSIVE WARMTH**

General Fallback visuals must be self-contained and reach all 5 sub-groups without alienating any. The design is balanced — neither as vibrant as L1 nor as muted as L3. Multiple visual entry points ensure no single emotional dimension dominates.

### 5.2 Color Accent Weighting

| Color | Weight | Usage |
|-------|--------|-------|
| Brand-Green `#039902` | Balanced | Neither hero nor absent |
| Cream `#FBF7EB` | Balanced | Card backgrounds |
| Mint `#DBFFCD` | Balanced | Highlight boxes |
| Gray `#9AA8A7` | Balanced | Subtle text |
| Yellow `#F5C84B` | Light | Trust signals |

**Overall:** BALANCED palette. Neither as vibrant as L1 nor as muted as L3. The palette should feel inclusive and welcoming without assuming any single emotional state.

### 5.3 Hero Imagery Guidelines

| Element | Specification |
|---------|--------------|
| **Child age range** | Age-diverse (3, 5, 7, 9 — range, not single age) |
| **Setting** | Mix of settings — home, outdoors, therapy-adjacent |
| **Mood** | Inclusive warmth |
| **Context** | Multiple family types in one image (migration anchors) |
| **Tone** | Neutral, inclusive |

**DO:**
- Cross-level imagery: show range of ages and abilities
- Symptom-focused, not diagnosis-focused
- Migration-anchor visuals: multiple family types in one image
- Neutral, inclusive tone
- DELIBERATELY VARY across mail series

**DON'T:**
- ❌ Assume a single age range
- ❌ Diagnosis-labeled imagery
- ❌ Single-family-type visuals
- ❌ Level-specific visual language

**Source:** L29 R1 §3 (General Fallback), L4 §6, L29 R3 §2.2

### 5.4 Testimonial Visual Format

- **Length:** Medium (variable)
- **Format:** Three-family testimonial format (migration anchors)
- **Style:** "Whether...Or...If..." visual language patterns
- **Visual:** Multiple visual entry points, varied across series

### 5.5 CTA Calibration

| Element | Setting |
|---------|---------|
| **Aggressiveness** | MEDIUM-LOW |
| **Prominence** | Balanced — not aggressive, not invisible |
| **Copy style** | Universal — "If your child doesn't feel when they need to go..." |
| **Urgency elements** | Low-Medium |
| **Button style** | Full-width mobile, pill-shaped, balanced green |

**Source:** L29 R1 §7, L4 §6, L9 §9.4

### 5.6 Section Length & Whitespace

- Variable section lengths (5-14 day decision cycle)
- Multiple visual entry points per email
- Migration anchors (subtle links to level stories)
- Symptom-first, not label-first structure

### 5.7 Offer Visual Priority

- Default: 3+3 bundle
- Balanced presentation
- No level-specific offer framing
- Migration path always available

**Source:** L29 R1 §9

### 5.8 Character Usage

- **Lena:** Primary voice. Universal, symptom-first, no labels.
- **Sign-off energy:** Neutral, educational
- **Mary S.:** Phase 2 only

### 5.9 Voice-Visual Alignment (Layer 9)

| Voice Rule | Visual Manifestation |
|------------|---------------------|
| V1 (Peer-to-peer) | Universal — symptom-first, no labels |
| V6 (No NT comparison) | Diverse family imagery, no "normal" framing |
| V12 (Permission) | "Still figuring out what's going on" — inclusive |
| Migration | Always provide click-to-level-story path |

**Source:** L9 §9.4

### 5.10 Forbidden Visual Patterns (General Fallback Specific)

- ❌ "For Level 1/2/3 kids" — level labels in visual or text
- ❌ "Diagnosed only" — diagnosis as prerequisite
- ❌ "Verbal kids will..." — verbal-exclusive framing
- ❌ "Your toddler will..." — age-fixed framing
- ❌ School-specific urgency (Pre-K) — unknown audience
- ❌ "Just like other kids" — comparison framing
- ❌ Single-age imagery
- ❌ Diagnosis-labeled visuals

---

<a name="6-emotional-cross-reference"></a>
## 6. CROSS-REFERENCE: AVATAR EMOTIONAL STATES × VISUAL DESIGN

### 6.1 Tonality → Visual Implications Matrix

| Dimension | Level 1 | Level 2 | Level 3 | General Fallback |
|-----------|---------|---------|---------|------------------|
| **Hope Level** | 70/30 | 40/60 | 20/80 | 50/50 |
| **Visual Energy** | Optimistic but grounded | Clinical warmth | Quiet warmth + clinical reality | Inclusive warmth |
| **Color Vibrancy** | MOST VIBRANT — green dominant | RESTRAINED — mint/gray prominent | MUTEST — gray/cream dominant | BALANCED |
| **Testimonial Length** | Short-Medium (3-8 sent) | Long (10-15 sent) | Long + Messy (12-18 sent) | Medium (variable) |
| **CTA Aggressiveness** | Medium | Low | Very Low | Medium-Low |
| **Urgency Visuals** | High (Pre-K OK) | Low | ZERO | Low-Medium |
| **Section Length** | Short, scannable | Medium, detailed | Long, slow-reader | Variable |
| **Whitespace** | More (fast reader) | Standard | LOTS (sensory-friendly) | Standard |

**Source:** BRAND_VOICE_GUIDE.md §4 (lines 287-296), L29 R1 §7, L4 §1 (Quick Delta Matrix)

### 6.2 Emotional Phase × Visual Design

| Phase | Dominant Level | Visual Approach |
|-------|---------------|-----------------|
| Phase 1 — Slow Realization | L1 (~15%) | Gentle education visuals, no sales push |
| Phase 2 — First Attempt | L1 (~50%), L2 (~25%) | Validation + mechanism, hope-forward |
| Phase 3 — Method Cycling | L2 (~55%), L3 (~33%) | Science-first, credibility visuals |
| Phase 4 — Resignation Fork | L3 (~55%), L2 (~15%) | Dignity-first, quiet warmth, zero pressure |

**Source:** L4 §2.1, L9 §10

### 6.3 Emotional Dimension × Visual Intensity

| Dimension | L1 Visual | L2 Visual | L3 Visual |
|-----------|-----------|-----------|-----------|
| **Deadline Pressure** | STRONG — countdown OK | WEAK — event-driven only | VERY WEAK — never |
| **Social Pressure** | STRONG — comparison pain | STRONG — years of shame | PRESENT — deep, quiet |
| **Overwhelmed** | MODERATE | STRONG | STRONGEST |

**Source:** L4 §8.2

### 6.4 Signature Domain × Visual Hook

| Domain | L1 Visual Hook | L2 Visual Hook | L3 Visual Hook |
|--------|---------------|---------------|---------------|
| **Motor Planning** | "Gets it but doesn't get it" | "Sits but pee doesn't come" | N/A |
| **Routine Dependency** | "Goes when reminded" | "2 years of timers" | "Scheduled sits, nothing" |
| **Interoception** | "Smart but can't feel it" | "After years of ABA, no signal" | "Never felt anything" |
| **Sensory** | "Doesn't like cold seat" | "Bathroom triggers meltdowns" | "Can't enter bathroom" |
| **Communication** | "Tells me after" | "Verbal but can't communicate" | "Can't tell me at all" |

**Source:** L4 §8.3

---

<a name="7-voice-alignment"></a>
## 7. VOICE ALIGNMENT NOTES (LAYER 9)

### 7.1 Lena's Voice × Visual Manifestation

Lena's voice (Layer 9) must be visually reinforced at every touchpoint:

| Voice Rule | Visual Rule |
|------------|-------------|
| V1: Peer-to-peer | Personal, warm imagery — NOT corporate stock |
| V2: Lena sign-off | Sign-off section: dark text `#1A1A1A` on cream `#FBF7EB` |
| V4: Never marketing | No "BUY NOW" buttons, no exclamation marks, no bright CTAs |
| V5: Forbidden words | Copy that accompanies visuals must follow forbidden phrase catalog |
| V7: Validate failures | Testimonial blocks naming specific failed methods |
| V8: 60-day guarantee | "60-Day Money Back" in trust signal section, never "30 days" |
| V9: Pull-ups not "bad" | Pull-ups shown as signal-blocking tool, not as enemy |
| V10: Autism = identity | No "fix" / "cure" / "solve" framing in visuals or copy |
| V11: Mechanism | Clean educational layouts, science callout boxes |
| V12: Permission | Soft CTAs, permission-not-to-buy energy |
| V13: Science-first | Kelly Mahler citations, SPARK stat, interoception diagrams |
| V14: Realistic timelines | "Weeks, not days" — no countdown timers (except L1 Pre-K) |
| V15: Lena universal trust | Lena sign-off in EVERY mail, visual trust anchor |

**Source:** L9 §4, L9 §9

### 7.2 Level-Specific Voice-Visual Calibrations

**Level 1 — Hope-Forward Lena:**
- Visual: Warm, optimistic, forward-looking
- Most dangerous word: "Easy" (she believes it should be)
- NT comparison wound: "All the other 4-year-olds" is HER pain
- Sign-off: Encouraging, forward-looking

**Level 2 — Science-Respectful Lena:**
- Visual: Calm, professional, therapy-aware
- Most dangerous word: "Quick" (she's been trying for years)
- NT comparison wound: "Kids his age" triggers 5 years of shame
- Sign-off: Empathetic, realistic

**Level 3 — Dignity-First Lena:**
- Visual: Quiet, warm, reflective, dignity-forward
- Most dangerous words: "Fix" / "Cure" (autism is identity)
- NT comparison wound: "Normal" = identity erasure
- Sign-off: Gentle, no pressure

**General Fallback — Universal Lena:**
- Visual: Inclusive, symptom-first, no labels
- Most dangerous word: "Simple" (unknown audience)
- NT comparison wound: Avoid entirely — unknown sensitivity
- Sign-off: Neutral, educational

**Source:** L9 §9.1-9.4

### 7.3 Image Alt-Text Alignment (V23)

Image alt-text must match voice tone per level:
- **L1:** Active, forward-looking descriptions
- **L2:** Calm, sensory-aware descriptions
- **L3:** Reflective, dignity-forward descriptions
- **Never:** Stock photo descriptions

**Source:** L9 §4.2 (V23)

---

<a name="8-edge-cases"></a>
## 8. EDGE CASES AND EXCEPTIONS

### 8.1 Cross-Level Emails (Cart, Checkout, Browse, Post-Purchase)

All cross-level flows (Cart Abandonment, Checkout Abandonment, Browse Abandonment, Order Confirmation, Shipping, Arrived & Welcome, PP-Direct Upsell) use **General Fallback** visual standards.

**Rationale:** These flows have no level tag. The subscriber could be any level. Visuals must be self-contained and not alienate any segment.

**Source:** DOC6 §3, L4 §10.3

### 8.2 Pop-Up Visual Design

The pop-up is the SAME for all visitors. Level differentiation happens via button selection, not visual design.

**Technical Specs:**
- Trigger: 8-15 seconds on site OR exit-intent
- Display: 1-step pop-up with email + question
- Mobile: Full-screen on mobile
- Frequency: Maximum 1x per 7 days per visitor

**Source:** DOC1 §16 (lines 1015-1062), L29 R1 §6

### 8.3 Dark Mode Considerations

| Purpose | Light Mode | Dark Mode | Notes |
|---------|-----------|-----------|-------|
| Page bg | #FFFFFF | #1a1a1a | NOT pure black |
| Section bg | #f8f8f8 | #2a2a2a | Subtle contrast |
| Body text | #333333 | #f5f5f5 | NOT pure white |
| Heading text | #1a1a1a | #ffffff | Maximum contrast |
| Primary link | Brand primary | #6db3f2 | Lighter version |
| Border | #e0e0e0 | #444444 | Subtle |
| CTA button bg | Brand primary | Brand primary (keep) | Don't change button colors |

**BrightKidCo-Specific:**
- Brand-Green `#039902` may shift in dark mode — test before deployment
- Logo swap needed for dark backgrounds
- All emails need dark mode meta tags and CSS overrides

**Source:** L29 R2 §Framework 2, L29 R3 §2.5

### 8.4 Level 2 Urgency Spike Exception

Level 2 baseline urgency is LOW, but specific trigger events create urgency spikes:
- Withholding crisis (hospitalization)
- School transition (elementary)
- Puberty approaching

**Visual implication:** During urgency spikes, L2 visuals can temporarily borrow L1 energy (slightly more prominent CTAs, urgent copy) but NEVER cross into L1 territory (no Pre-K framing, no countdown timers).

**Source:** L4 §4.8, L4 §9.3 (C3)

### 8.5 Level 3 Mini-Win Visual Language

Level 3 "success" looks different from L1/L2. Visuals must reflect mini-wins, not full training:
- "He paused. He felt something."
- "He looked down at the wet spot for the first time in 9 years"
- "She tolerated the bathroom for 10 minutes today"

**Visual implication:** Testimonial imagery should show quiet moments, not celebration. No confetti, no "SUCCESS!" banners. Just quiet, dignified acknowledgment.

**Source:** L4 §5.9, L4 §5.15

### 8.6 Medicaid Sensitivity (Level 3)

~40% of Level 3 families use Medicaid. Visual pricing must be handled with care:
- NO price-prominent visuals
- NO "premium" framing
- 1-pair option ($34.99) should be visually available, not hidden
- NO math reframes ("less than a coffee a day") — V18

**Source:** L4 §5.3, L9 §4.2 (V18)

### 8.7 UK/AU/NZ Localization

- UK: "nappies" not "diapers", "loo" not "bathroom"
- AU/NZ: same as UK
- Adapt per Klaviyo country segment

**Source:** L9 §4.2 (V22)

### 8.8 SMS Visual Rules (V24)

SMS = symptom hook + single CTA. No Lena sign-off (too long).
Format: "Hey [Name], [symptom hook]. [CTA link]. -Lena" Max 160 chars.

**Source:** L9 §4.2 (V24)

---

<a name="9-technical-standards"></a>
## 9. TECHNICAL EMAIL DESIGN STANDARDS

### 9.1 Email Dimensions

| Element | Specification |
|---------|--------------|
| Max width | 600px |
| Mobile breakpoint | 480px |
| 2x export | 1200px for Retina |
| Figma artboard | 600px wide |

### 9.2 Button Specifications

| Element | Specification |
|---------|--------------|
| Height | 44px minimum (tap target), 48-56px recommended |
| Width (mobile) | Full-width (100%) |
| Width (desktop) | 220-300px auto-width, centered |
| Padding | 14-16px vertical, 36-48px horizontal |
| Border-radius | 4-6px (rounded) or 50% (pill) — pick ONE across all templates |
| Font | 16-18px, Bold, white text on colored fill |
| Contrast | Minimum 4.5:1 ratio (WCAG AA) |

### 9.3 Image Specifications

| Image Type | Display | Export (2x) | Aspect | Format |
|------------|---------|-------------|--------|--------|
| Hero (full-width) | 600×400 | 1200×800 | 3:2 | JPEG |
| Product (grid) | 270×270 | 540×540 | 1:1 | JPEG/PNG |
| Product (single) | 300×300 | 600×600 | 1:1 | JPEG/PNG |
| Logo | 150×h | 300×2h | Variable | PNG transparent |
| Icon (feature) | 48×48 | 96×96 | 1:1 | PNG transparent |

**File Size Targets:**
- Total HTML: <102KB (Gmail clips over 102KB)
- Individual image: <200KB
- Total email weight: <500KB (ideally under 100KB)
- Hero image: <150KB
- Number of images: <10
- Format: JPEG for photos (80-85% quality), PNG for graphics

### 9.4 Email Client Compatibility

| Client | Engine | Market Share | Pain Points |
|--------|--------|-------------|-------------|
| Apple Mail | WebKit | ~40% | Best rendering, supports modern CSS |
| Gmail (app) | Custom | ~30% | Strips `<style>` blocks, no `@font-face` |
| Outlook (desktop) | Word | ~10% | No border-radius, no bg-image, no CSS padding on div |
| Outlook (web/app) | WebKit-ish | ~8% | Better than desktop |
| Yahoo Mail | Custom | ~5% | Strips some CSS |

**Critical:** All templates must be table-based layouts, inline styles, and MSO conditional comments. System fonts only (Arial, Helvetica, sans-serif). Questrial does NOT work in Gmail or Outlook.

### 9.5 Layout Patterns

| Pattern | Best For | Structure |
|---------|----------|-----------|
| CTA Tunnel | Flash sales, product launches | Logo → Hero → Headline → Single CTA → Footer |
| Value Ladder | Welcome emails, cross-sells | Hero + CTA → Value props → Press → Testimonial → Bottom CTA |
| Product Gallery | Bestseller campaigns | Logo → "Shop the Look" → Product grid → CTA |
| Narrative Arc | Educational, nurture, founder stories | Hook → Solution → How it works → Testimonial → CTA |

**BrightKidCo Application:**
- Welcome flow: Value Ladder (build trust before selling)
- Flash sales: CTA Tunnel (urgency, single focus)
- Bestsellers: Product Gallery (let products speak)
- Educational content: Narrative Arc (tell the story)

### 9.6 Pre-Send QA Checklist

- [ ] Hero section has headline, visual, value prop, CTA above fold
- [ ] Reverse triangle hierarchy
- [ ] Branding consistent (colors, fonts, imagery)
- [ ] No "Shop Now" — CTAs are thematic and benefit-driven
- [ ] Single column on mobile
- [ ] Body font 16px minimum
- [ ] Full-width buttons on mobile
- [ ] All images have alt text (V23: match voice tone per level)
- [ ] Total image weight under 200KB
- [ ] 4.5:1 contrast ratio on CTAs
- [ ] Dark mode rendering verified
- [ ] Level-specific visual calibration applied
- [ ] Forbidden phrases checked (text accompanying visuals)

**Source:** L29 R2 §Standard 5, L29 R3 §2.6

---

<a name="10-forbidden-patterns"></a>
## 10. FORBIDDEN VISUAL PATTERNS (ALL LEVELS)

### 10.1 Universal Forbidden (Visual + Text)

| Pattern | Why |
|---------|-----|
| ❌ Cartoon kid illustrations | Brand explicitly avoids — infantilizing |
| ❌ "Big Kid Underwear" graphics | Infantilizing, not dignity-forward |
| ❌ Stock neurotypical happy families | Doesn't represent audience |
| ❌ Bright cartoon colors | Toddler-brand look — wrong for 3-10+ range |
| ❌ Cleaning chaos drama | Shame implications |
| ❌ Children's faces full-on | Privacy + over-personal |
| ❌ "Before/After" with shame | Implication of failure |
| ❌ Pull-ups staged as "evil" | V9 — pull-ups are a tool, not enemy |
| ❌ "BUY NOW" buttons | Marketing-feel, violates V4 |
| ❌ Heavy borders, hard edges | Not warmth-forward |
| ❌ Centered marketing-feel text | Not peer-to-peer |
| ❌ Stock icons throughout | Not authentic |
| ❌ Exclamation marks in body text | Signals marketing |
| ❌ "Easy" / "Simple" / "Effortless" | Minimizes struggle |
| ❌ "Train your kid in 3 days" | Over-promise |
| ❌ "Guaranteed results" | Outcome promise |
| ❌ "Just like neurotypical kids" | NT comparison wound |
| ❌ "Suffering from autism" | Violates V10 (identity, not disease) |
| ❌ "High-functioning" / "Low-functioning" | Labeling |
| ❌ "Cure" / "Solve" / "Fix" | Violates V10 |

### 10.2 Structural Forbidden (Layout)

| Pattern | Why |
|---------|-----|
| ❌ Heavy borders, hard edges | Not warmth-forward |
| ❌ Centered marketing-feel text | Not peer-to-peer |
| ❌ Big "BUY NOW" buttons | Marketing-feel |
| ❌ Stock icons throughout | Not authentic |
| ❌ Exclamation marks in body text | Signals marketing |
| ❌ Horizontal scrolling on 320px | Mobile failure |
| ❌ Font below 16px on mobile | Accessibility failure |

**Source:** DOC1 §23 (lines 1523-1553), DOC1 §25, L29 R1 §11, L29 R1 §13

---

## SUMMARY: VISUAL CALIBRATION BY AVATAR LEVEL

### Level 1 (Verbal, 3-5 years, ~35%)
- Hope-forward imagery, brighter accents
- Pre-K/school visual context OK
- Short testimonial cards
- Medium-aggressive CTAs
- Urgency elements allowed
- Lena voice: warm, optimistic, encouraging
- 70% hope / 30% realism visual energy

### Level 2 (Mixed verbal, 5-7 years, ~40%)
- Clinical warmth visuals, muted palette
- Sensory-soft imagery
- Longer testimonial blocks with science callouts
- Low-aggression CTAs
- NO urgency visuals
- BCBA-respectful visual context
- 40% hope / 60% realism visual energy

### Level 3 (Non-verbal, 6-10+ years, ~25%)
- Quiet warmth, dignity-first
- No urgency visuals whatsoever
- Very low CTA prominence
- Long + messy testimonial blocks
- Late-trainer story visuals
- Medicaid-sensitive pricing display
- 20% hope / 80% realism visual energy

### General Fallback (~50% real volume)
- Balanced, inclusive visuals
- Migration-anchor imagery
- Medium-low CTA prominence
- Symptom-focused, not diagnosis-labeled
- Multiple family types in visual storytelling
- 50/50 hope/realism visual energy

---

## TOTAL VISUAL RULES: 47+ distinct rules across 15 categories

**Input files referenced:** 7
- layer-29-round-01-client-files.md
- layer-29-round-02-skill-loading.md
- layer-29-round-03-wiki-extraction.md
- layer-29-round-04-cross-reference.md (not produced — cross-ref done directly)
- layer-04-avatar-levels.md
- layer-09-voice-lena.md
- DOC6-USAGE-GUIDE.txt

**Avatar levels covered:** 4 (Level 1, Level 2, Level 3, General Fallback)

**Source layers cross-referenced:** L3 (Emotional Phases), L4 (Avatar Levels), L5 (Emotional Dimensions), L6 (Symptom Clusters), L7 (Conversion Probabilities), L8 (Segmentation Mechanics), L9 (Voice — Lena), L29 R1-R3, DOC1, DOC6, BRAND_VOICE_GUIDE.md

---

*Generated: 2026-05-25*
*Synthesis Type: Final — consolidating all available visual calibration data*
*File: /root/projects/brightkidco/outputs/diagnosis/layer-29-visual-calibration.md*
