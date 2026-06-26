# LAYOUT REBUILD + COMPONENT RECHOOSE — ULTRA DETAIL PLAN

## THE FAILURE

```
ALL 125 layouts follow the SAME pattern:

  section 0: hero       → section 1: body      → section 2: body
  → section 3: product  → section 4: cta

  Same structure. Same section count. Same order.
  Every email = linear single-column. No variety.
```

## THE FIX

```
EACH email gets a structural template.

Template defines:
  A) How many sections? (2-8)
  B) Which section types appear? (not all 16 types in every email)
  C) What order? (product before education? hero-first? hero-last?)
  D) Column layout per section? (single-column, 2-column, card grid, image+text split)
  E) How many images? (image-light vs image-heavy depending on purpose)
  F) Where do images go? (hero-top, inline-body, product-center, testimonial-side)
  G) What color sequence? (already solved in Step 0)
```

---

## STEP 2 REBUILD — HOW IT WORKS

### 2.1 CLASSIFY EMAIL PURPOSE

Read the copy file → extract metadata → determine the email's JOB:

```
┌─────────────────────────────────────────────────────────────────┐
│ PURPOSE CLASSIFICATION                                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  awareness (READ ME):                                           │
│    First touch. No product. Build trust. Explain mechanism.      │
│    Flow+position: welcome E1-E3, browse, FAQ E1-E3,             │
│    site-abandonment, level-detection                            │
│                                                                  │
│  education (READ ME variant):                                   │
│    Teaching. Tips. How-to. Deep science.                         │
│    Flow+position: welcome E2-E3, pp-education, pp-extended-ed,  │
│    FAQ E4-E6, pp-at-risk                                        │
│                                                                  │
│  consideration (BUY ME, soft):                                  │
│    Product reveal. Social proof. Gentle ask.                     │
│    Flow+position: welcome E4-E5, browse E2-E3,                  │
│    pp-mary-story, pp-mid-checkin                                │
│                                                                  │
│  conversion (BUY ME, direct):                                   │
│    Close the sale. Guarantee. Urgency. Offer.                    │
│    Flow+position: welcome E6-E8, cart, checkout,                │
│    pp-direct-upsell, pp-extended-upsell                         │
│                                                                  │
│  retention (JOIN ME):                                           │
│    Keep engaged. Community. Tips. Progress.                      │
│    Flow+position: pp after purchase, replenish, review-request, │
│    referral, pp-level-detection                                 │
│                                                                  │
│  reengagement (JOIN ME, urgent):                                │
│    Come back. We miss you. What's new.                           │
│    Flow+position: winback, sunset, site-abandonment             │
│                                                                  │
│  transactional:                                                 │
│    Order confirmation. Shipping. Delivery.                       │
│    Flow+position: order-05, shipping-06, ofd-07, arrived-08     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 TEMPLATE LIBRARY (25+ structural templates)

Each purpose has 4-6 templates. Same purpose = different structures.

```
┌─────────────────────────────────────────────────────────────────┐
│ AWARENESS TEMPLATES (first touch, trust building)               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  AW-01: hero → letter → testimonial → cta                      │
│         Single-column, 2 images (hero + testimonial)            │
│         Text-heavy, warm, validation-focused                     │
│                                                                  │
│  AW-02: hero → definition(2-col: text+image) → cta             │
│         Hybrid, 1 image, science-focused                        │
│                                                                  │
│  AW-03: hero → testimonial → story → definition → cta          │
│         Single-column, 2 images, story-driven                   │
│                                                                  │
│  AW-04: hero(text-only) → letter → steps(3-step) → cta         │
│         Single-column, 0 images, education-heavy                │
│                                                                  │
│  AW-05: hero → testimonial → guarantee → cta                   │
│         Single-column, 2 images, trust-focused                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ EDUCATION TEMPLATES (teaching, deep dive)                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ED-01: hero → definition → comparison → steps → cta           │
│         Single-column, 1 image, science-heavy                   │
│                                                                  │
│  ED-02: hero → definition(2-col) → stat-block → cta            │
│         Hybrid, 1 image, data-driven                            │
│                                                                  │
│  ED-03: hero → definition → tips(card-grid 3×2) → cta          │
│         Grid, 1 image, practical tips                           │
│                                                                  │
│  ED-04: hero → definition → objections(FAQ) → cta              │
│         Single-column, 0 images, Q&A format                     │
│                                                                  │
│  ED-05: hero → reframe → definition → expert-quote → cta       │
│         Single-column, 2 images, credibility                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ CONSIDERATION TEMPLATES (product reveal, soft sell)             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  CO-01: hero-image(full-width) → product-showcase → cta        │
│         Image-heavy, 2-3 images, product-first                  │
│                                                                  │
│  CO-02: hero → story → product → cta                           │
│         Single-column, 2 images, narrative-driven               │
│                                                                  │
│  CO-03: hero → product(card-grid 2×2) → social-proof → cta     │
│         Grid, 4-5 images, social proof heavy                    │
│                                                                  │
│  CO-04: hero → product → feature-list → testimonial → cta      │
│         Single-column, 3 images, feature-focused                │
│                                                                  │
│  CO-05: hero → comparison → product → guarantee → cta          │
│         Single-column, 2 images, comparison sell                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ CONVERSION TEMPLATES (close the sale)                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  CV-01: hero → product → guarantee → cta                       │
│         Single-column, 2 images, trust + urgency                │
│                                                                  │
│  CV-02: hero → offer-card → product → cta                      │
│         Single-column, 2 images, discount-focused               │
│                                                                  │
│  CV-03: hero-image(full-width) → urgency-text → cta            │
│         Short (3 sections), image-heavy, urgent                 │
│                                                                  │
│  CV-04: hero → comparison → guarantee → cta                    │
│         Single-column, 1 image, comparison close                │
│                                                                  │
│  CV-05: hero → product(bundle-grid) → savings-stat → cta       │
│         Grid, 3 images, bundle/upsell                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ RETENTION TEMPLATES (engagement, community)                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  RT-01: hero → progress-timeline → tips(2×2) → cta             │
│         Grid + timeline, 3 images, milestone-focused            │
│                                                                  │
│  RT-02: hero → testimonial → product → cta                     │
│         Single-column, 2 images, cross-sell                     │
│                                                                  │
│  RT-03: hero → tips-grid(3×2) → cta                            │
│         Grid-heavy, 1 image, practical                          │
│                                                                  │
│  RT-04: hero → story → community → cta                         │
│         Single-column, 2 images, community vibe                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ RE-ENGAGEMENT TEMPLATES (winback, comeback)                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  RE-01: hero(text-only) → offer → cta                          │
│         Short (3 sections), 0-1 images, direct                  │
│                                                                  │
│  RE-02: hero → product → cta                                   │
│         3 sections, 2 images, product-focused                   │
│                                                                  │
│  RE-03: hero → testimonial → offer → cta                       │
│         4 sections, 1 image, social proof                       │
│                                                                  │
│  RE-04: hero-image → urgency → cta                             │
│         Short (3 sections), 2 images, urgent                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ TRANSACTIONAL TEMPLATES (order, shipping, delivery)             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TX-01: greeting → order-summary → product → tips → cta        │
│         5 sections, 1 image, informative                        │
│                                                                  │
│  TX-02: greeting → shipping-progress → product → cta           │
│         4 sections, 1 image, tracking                           │
│                                                                  │
│  TX-03: greeting → product → review-request → cta              │
│         4 sections, 1 image, review-driven                      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 2.3 TEMPLATE ASSIGNMENT

For each of the 125 emails, assign a template:

```
1. Determine PURPOSE from flow + position
2. Get list of TEMPLATES for that purpose
3. Pick the NEXT unused template for that flow
4. If all templates used in that flow → pick least-used across all flows
5. Assign colors using Step 0 color mapping
6. Output layout blueprint
```

**Variance guarantee:** Same flow = no two emails get the same template.
Different flow = templates can repeat (cross-flow, not same customer).

### 2.4 OUTPUT — THE NEW LAYOUT BLUEPRINT

```
{
  "email_id": "welcome-01-e1-l1",
  "purpose": "awareness",
  "template": "AW-03",
  "sections": [
    {
      "index": 0,
      "type": "hero",
      "color": "#FFFBF0",
      "column_layout": "single",
      "image_placement": "top",
      "has_image": true,
      "image_type": "lifestyle"
    },
    {
      "index": 1,
      "type": "testimonial",
      "color": "#FFF6E2",
      "column_layout": "single",
      "image_placement": "none",
      "has_image": false
    },
    {
      "index": 2,
      "type": "story",
      "color": "#EAF6F2",
      "column_layout": "single",
      "image_placement": "inline",
      "has_image": true,
      "image_type": "lifestyle"
    },
    {
      "index": 3,
      "type": "definition",
      "color": "#F0EDF8",
      "column_layout": "2-column",
      "image_placement": "right",
      "has_image": true,
      "image_type": "flatlay"
    },
    {
      "index": 4,
      "type": "cta",
      "color": "#1F2D2F",
      "column_layout": "single",
      "image_placement": "none",
      "has_image": false
    }
  ]
}
```

**New dimensions in the blueprint:**
```
column_layout:   single | 2-column | 3-grid | image-text-split
image_placement: top | bottom | left | right | inline | hero | none
has_image:       true/false
image_type:      lifestyle | flatlay | accessories
```

---

## STEP 3 REBUILD — RECHOOSE COMPONENTS

After Step 2 rebuild generates NEW layouts, Step 3 must run again:

```
Same process as before:
  1. For each section in each layout blueprint
  2. Query section-components.json for matching section type
  3. Pick component (prefer G+ > A* > A)
  4. Pick image from product-photos matching image_type
  5. Save picks JSON
  6. Run variance tracker to enforce ≤10x reuse
```

**Difference:** The blueprint now tells the subagent MORE detail:
- `column_layout: "2-column"` → subagent picks a 2-column component
- `image_placement: "right"` → subagent places image on the right
- `has_image: true` → subagent MUST include an image

This means the subagent doesn't just pick "any testimonial component" — it picks one that MATCHES the column layout and image placement.

---

## EXECUTION ORDER

```
1. ✅ Delete old outputs/html/ and outputs/layouts/
2. 🔄 Rebuild generate-layouts.py (30 templates, purpose classification)
3. 🔄 Run generate-layouts.py → 125 NEW layouts
4. 🔄 Run Step 3 picks (reuse existing pick logic with new layouts)
5. 🔄 Run variance tracker
6. 🔄 Launch 125 subagents (v4 approach) to assemble HTML
7. 🔄 Validate outputs
```

---

## WHY THIS WORKS WHEN THE PREVIOUS APPROACH FAILED

```
PREVIOUS:
  All 125 layouts use the template: hero → body → body → product → cta
  Linear, single-column, always 5 sections, always the same order
  Even with different components, the STRUCTURE is identical
  → Customer sees the same layout pattern → desensitization

NEW:
  125 layouts use 30+ different TEMPLATES
  Different section counts (2-8). Different column layouts.
  Different image placement. Different order (product-first, hero-last).
  Same flow = guaranteed different template.
  → Customer sees VARIED structures → no fatigue
```

---

## SCRIPT CHANGES

```
scripts/generate-layouts.py:
  REMOVE: current linear section classifier
  REPLACE WITH:
    1. classify_purpose(flow, position, copy_content)
    2. TEMPLATES dict (30+ templates per purpose)
    3. pick_template(purpose, flow, used_in_flow)
    4. assign_colors(sections) — keep existing logic
    5. Output new layout blueprint with all dimensions

scripts/track-variance.py:
  Keep as-is. Works with any picks format.

Other scripts:
  Delete: categorize-components.py, parse-email.py, decide-components.py
  (replaced by new Step 2 + Step 3)
```
