# Copy File Structure — Cross-Flow Comparison

> Compared 4 copy files from 4 different flows: cart, pp-education, winback-a, sunset
> Last updated: 2026-06-19

---

## 1. Universal Structure (same across all 4)

Every copy file has this skeleton:

```
1. Metadata           → flow, position, level, phase, purpose
2. Subject Line       → the subject text
3. Preview Text       → inbox preview
4. From Name          → "Lena from BrightKidCo"
5. Email Body         → the actual email copy (varies per flow — see below)
6. Lena Sign-Off      → personal closing + P.S.
7. Footer             → address, unsubscribe
8. Source Citations   → where each section came from
9. Creative Strategy  → full visual design direction (varies per flow — see below)
```

**This is the universal skeleton.** Every copy file follows it. The parts that VARY are #5 (Email Body) and #9 (Creative Strategy).

---

## 2. Email Body — How It Varies

### cart-02-e1.md — 7 numbered sections
```
Section 1: Hook
Section 2: Validation — Recognition Anchors (R2)
Section 3: Mechanism (R1, R4, R5)
Section 4: Social Proof — Three-Family Testimonial Pattern (R6)
Section 5: Product Introduction (Gentle, No Push)
Section 6: Guarantee / Risk Reversal
Section 7: CTA
```

### pped-11-d0.md — 7 numbered sections (different names)
```
Section 1: Hook + Validation
Section 2: Week 1 Guide — What to Expect
Section 3: Three-Family Testimonial Pattern
Section 4: Recognition Anchors (R2)
Section 5: Timeline Flexibility (R5) + Low-Bar Success (R6)
Section 6: Mechanism Deep Dive
Section 7: CTA (Permission-Based)
```

### winback-a-19-e1-gf.md — Continuous prose (NOT numbered sections)
- Email body is flowing paragraphs, not broken into named sections
- Has bold labels within prose (Hook, Validation, Mechanism, etc.)
- Includes 3 Subject Line Options in a table
- Includes 3 CTA Options in a table
- Different format entirely from cart and pp-education

### sunset-25-e1.md — Labeled copy blocks within prose
- Body has bold-labeled copy direction headers:
  - `Hook, Observation`
  - `Validation, No Guilt`
  - `Permission, Clear Choice`
  - `CTA`
  - `Footer Close, The Door is Always Open`
- Not numbered sections, but labeled blocks

---

## 3. Creative Strategy — How It Varies

### cart-02-e1.md — 9 sub-sections
```
1. The Big Idea
2. Layout Architecture (archetype, above/below fold, mobile collapse)
3. Custom Illustration / Contraption (SVG spec)
4. Color Narrative (7-color palette table, light/dark)
5. Typography as Design (font stack, hierarchy table, expressive treatment)
6. Decorative Furniture (dividers, bullets, borders, texture, signature, shape)
7. Hidden Detail / Easter Egg (3-dot progression)
8. Motion / Animation (GIF spec, client constraints)
9. Level Calibration (R1-R6 compliance, forbidden language)
```

### pped-11-d0.md — 9 sub-sections (same names, different depth)
```
1. Big Idea
2. Layout (11-row table with hex colors, pixel specs)
3. Contraption (8-part mechanical architecture)
4. Color (9-element palette + per-level calibration)
5. Typography (14-element type spec table)
6. Furniture (9 graphic/UI elements)
7. Easter Egg (testimonial-to-level mapping)
8. Motion (7 animation specs + 5 rules)
9. Level Calibration (R1-R6 + compliance score + 2 forbidden language checklists)
```

### winback-a-19-e1-gf.md — 6 sub-sections (DIFFERENT names)
```
1. Emotional Arc (ASCII flow diagram, hope/realism ratio)
2. Strategy Summary (narrative description)
3. R1-R6 Calibration Verification (6-row table)
4. GF Sub-Group Coverage (5 sub-groups A-E)
5. Forbidden Language Check (13-row table)
6. Lena Voice Compliance (17-row table)
```
**PLUS extra sections not in other flows:**
- Offer Framework (primary/secondary offer, guarantee language)
- Creative Brief (flow context, section structure, conversion levers, metrics, A/B tests)
- R1-R6 Deep Calibration Notes (6 rule-specific audits)
- Three-Family Testimonial Pattern (reserved for E2)
- Localization Notes (UK/AU/NZ, Medicaid, reply handling)

### sunset-25-e1.md — 9 sub-sections (same as cart)
```
1. Big Idea ("The Open Door")
2. Layout Architecture (ASCII wireframe with pixel specs)
3. Custom Contraption / Illustration (spec with CSS code)
4. Color Narrative (10-color palette + emotional arc)
5. Typography (font families, size/weight map table)
6. Decorative Furniture (7 elements, intentionally minimal)
7. Hidden Detail / Easter Egg (light angle + door echo)
8. Motion / Animation (3 animated elements + fallbacks)
9. Level Calibration (R1-R6 cross-level, hope/realism 30/70)
```

---

## 4. Key Differences Summary

| Aspect | cart | pp-education | winback-a | sunset |
|--------|------|-------------|-----------|--------|
| **Email body format** | 7 numbered sections | 7 numbered sections | Continuous prose | Labeled blocks |
| **Subject line format** | Single | Single | 3 options in table | Single |
| **CTA format** | Single | Single | 3 options in table | Single |
| **Creative Strategy sub-sections** | 9 | 9 | 6 (+5 extra sections) | 9 |
| **Strategy section names** | Standard | Standard | DIFFERENT | Standard |
| **Extra sections** | None | None | Offer Framework, Creative Brief, R1-R6 Deep, Testimonial Pattern, Localization | Copy Notes table |
| **Part architecture** | Flat | Two-part (Copy + Strategy) | Flat (7 top-level sections) | Two-part (Copy + Strategy) |

---

## 5. What This Means for the Build Pipeline

### The GOOD news:
- **Universal skeleton exists** — metadata → subject → preview → body → signoff → footer → citations → creative strategy
- **Creative Strategy sub-sections are mostly consistent** — 3 of 4 flows use the same 9-section structure (Big Idea, Layout, Contraption, Color, Typography, Furniture, Easter Egg, Motion, Level Calibration)
- **The email body always ends with CTA** — regardless of how it's structured
- **Signoff + Footer are always the same** — Lena's closing + address/unsubscribe

### The CHALLENGE:
- **Email body structure varies significantly** — some flows use numbered sections, some use prose, some use labeled blocks
- **winback-a is structurally different** from the other 3 — it has different creative strategy section names, extra sections, and a completely different email body format
- **The copy file is a BLUEPRINT, not a data file** — it contains both the email text AND the complete visual design direction. Converting it to JSX requires INTERPRETING the blueprint, not just parsing data.

### For building emails:
1. The **universal skeleton** gives us the outer structure (Header → Hero → Title → Body → CTA → Signoff → Footer)
2. The **email body sections** tell us what CONTENT goes in the middle (but format varies)
3. The **creative strategy** tells us what it should LOOK like (but interpretation required)
4. **winback-a needs special handling** — can't use the same pipeline as the other 3

---

## 6. The Real Question

The copy files are **creative briefs**, not structured data. They tell you WHAT the email should say AND HOW it should look. But they don't map directly to components.

To build an email from a copy file, you need to:
1. Read the email body sections → extract the text content
2. Read the creative strategy → understand the visual direction
3. Map the text content to primitives (which sections become Letter, which become custom cards, which become checklists, etc.)
4. Choose a color palette based on the Color Narrative section
5. Apply the typography specs
6. Build the custom JSX for sections that don't have a matching primitive

This is a **creative interpretation job**, not a mechanical translation. Each email needs a human (or AI) to make design decisions based on the blueprint.
