# BrightKidCo Build Pipeline — Canonical Reference

**Owner:** Ayoub | **Date:** June 28, 2026 | **Status:** Living document

> **Purpose:** This file is the single source of truth for HOW we turn 125 copy files into 125 production HTML emails. If the session dies, this file tells whoever picks up what we were doing and why.
>
> **What this is NOT:** This is not the strategy. It's not the demands. It's the BUILD MECHANISM.

---

## 1. THE CORE INVARIANTS (these do not change)

### 1.1 No scripts for design decisions
**RULE:** No Python scripts (or any automation) make design decisions about which component goes where, which image, which color treatment, which section breakdown.

**What scripts CAN do:** parse text, count words, list files, read JSON, write files, mechanical extraction.

**What scripts CANNOT do:** choose a hero variant, pick a component for a section, decide if this paragraph should be a callout, choose a color temperature.

**Why:** Four failed pipeline attempts (v1-v4) all used scripts to "pick" components and "assemble" HTML. They produced identical generic output. The customer's brain pattern-matched in 0.5 seconds. Desensitization was total. (Source: a-to-z-problem-definition.md §9.1)

### 1.2 One subagent per reasoning unit
A subagent is a reasoning engine. Scripts can't reason — subagents can. Every decision that requires UNDERSTANDING (copy intent, visual treatment choice, section break placement) gets a subagent. Every mechanical task (parsing, counting, file I/O) can use scripts or inline code.

### 1.3 The pipeline has 4 stages
- **Stage 0:** Precheck (read all metadata, reconcile with strategy) — *to be written*
- **Stage 0.5:** Customer journey matrix per level — *to be written*
- **Stage 1:** Wireframes (one subagent per email, 125 jobs)
- **Stage 2:** HTML assembly (per-section subagents per email)

Stage 0 and 0.5 are deferred. Stage 1 and Stage 2 are documented below in full.

---

## 2. STAGE 1 — WIREFRAMES

### 2.1 What a wireframe IS

A wireframe is a paragraph-by-paragraph interpretation of the copy file that records:
- What each section is trying to convey (emotional job, not literal meaning)
- Where one section ends and the next begins (paragraph-level granularity)
- What copy stays as standalone text vs wraps inside a component
- What copy becomes a typographic anchor (bold phrase, key term) vs a full component
- What visual treatment the section needs (image-led, text-only, callout-wrapped, diagram-capable, etc.)
- Where transitions happen between sections
- Where the Lena sign-off lives and what variant

A wireframe does NOT include:
- Specific component IDs from the 949 catalog
- Specific hex color codes (those are CONSTANTS, not decisions)
- Specific image filenames
- HTML structure
- The actual word "Component-237"

The wireframe is INTENT, not implementation. Stage 2 turns intent into HTML.

### 2.2 What a wireframe CONTAINS

Every wireframe is APPENDED to the bottom of its copy file as a new Markdown section. The wireframe always contains these blocks IN THIS ORDER:

**Block 1 — ALIGNMENT CHECK (mandatory gate)**
- Macro from strategy (which flow, which email, lever names from S01 §3 or 1-full-email-strategy.md)
- Copy metadata (from the file's own Metadata table)
- Wireframe section count
- Lever match (✅/❌ per lever)
- Visual intent match (✅/❌)
- Status: ALIGNED or DIVERGENT
- If DIVERGENT: flag the divergence, halt, escalate to Ayoub

**Block 2 — COPY UNDERSTANDING**
- What this email is trying to do (1 paragraph)
- Emotional job: the arc (e.g., "Mirror confusion → Validate → Reframe → Plant curiosity")
- Reader state: where in the customer journey, what skepticism window, what decision pressure
- Level-specific notes (L1/L2/L3/GF calibration from g3 §2.6)

**Block 3 — SECTION-BY-SECTION BREAKDOWN**
For EACH section in the copy:
- Section name (from copy file headers)
- Paragraph count
- Per-paragraph: line range, what the paragraph conveys, what treatment it needs
- Treatment options are: standalone text, typographic anchor (bold/key term), wrapped in component (callout/stat/quote/etc.), replaced by component (image-led hero, diagram, product showcase, CTA button), inline component mid-paragraph
- Transition: how this section flows to the next

**Block 4 — STRUCTURAL INTENT (for variance tracker)**
| Dimension | This Email's Choice |
|-----------|---------------------|
| Section count | (number) |
| Section pattern | (A-H from email-marketing-structure §3) |
| Image density target | (1-6) |
| Color temperature | (warm/cool/neutral/dark) |
| Email length | (short/medium/long, word count estimate) |
| Argument structure | (PAS/AIDA/Story-led/Data-led/Testimonial-led/Direct) |
| Visual rhythm | (tight/open/mixed) |
| CTA position | (early/mid/late/double-tap/text-link) |
| Subject line type | (observation/question/mechanism/story/validation/data/quote) |

**Block 5 — VARIANCE CHECK vs journey**
- Read previous email's wireframe in the same flow+level (or journey matrix if Stage 0.5 complete)
- List this email's 9 dimensions
- List previous email's 9 dimensions
- Count differences (must differ on ≥5 of 9)
- If <5: ADJUST the wireframe before saving

**Block 6 — DEPENDENCIES FOR STAGE 2**
- Which Giuliano header HTML to use (placeholder until extraction path specified)
- Which Giuliano footer HTML to use (placeholder until extraction path specified)
- Component catalog path
- Image assets path
- Open questions for Stage 2 subagents

**Block 7 — SIGN-OFF INTENT**
- Lena variant (SHORT/MEDIUM/LONG)
- Closing words ("Talk soon," / "With understanding," / "With care,")
- Reply prompt confirmation (required for deliverability)

### 2.3 The Stage 1 subagent prompt

Every Stage 1 subagent receives:

**Mandatory inputs:**
1. The copy file path (one file, full read)
2. The email-marketing-structure skill (loaded fresh)
3. The strategy section for this flow (S01 §3 or 1-full-email-strategy §3 — which file has the macro for this flow)
4. The per-level visual calibration from g3 §2.6
5. The previous email's wireframe in the same flow+level (for variance check) OR the journey matrix (if Stage 0.5 complete)
6. The variance tracker JSON (read-only)
7. This canonical reference (build-flow.md)

**Mandatory process:**
1. Read the copy file fully
2. Read the strategy macro for this email
3. Run the alignment check FIRST. If DIVERGENT, halt and report.
4. If ALIGNED, build the copy understanding block
5. Build section-by-section breakdown paragraph by paragraph
6. Determine structural intent for all 9 dimensions
7. Run variance check vs previous email
8. If <5 dimensions differ, ADJUST the wireframe (e.g., change CTA position, swap argument structure, change image density) until ≥5 differ
9. Append the wireframe to the copy file
10. Update the variance tracker JSON

**Mandatory outputs:**
- The wireframe appended to the copy file
- An entry in the variance tracker JSON
- A one-line report back to the orchestrator: "Email X wireframed. Sections: 4. Pattern: A. Variance: 6/9. Status: ✅."

### 2.4 Dependency order for Stage 1

Stage 1 subagents CANNOT run all 125 in parallel. Each wireframe's variance check requires the PREVIOUS email's wireframe (in the same flow+level customer journey).

**Order:**
- Welcome flow L1: E1 → E2 → E3 → E4 → E5 → E6 → E7 → E8 (8 jobs, sequential)
- Welcome flow L2: E1 → E2 → E3 → E4 → E5 → E6 → E7 → E8 (8 jobs, sequential)
- Welcome flow L3: E1 → E2 → E3 → E4 → E5 → E6 → E7 → E8 (8 jobs, sequential)
- Welcome flow GF: E1 → E2 → E3 → E4 → E5 → E6 → E7 → E8 (8 jobs, sequential)
- Cart: E1 → E2 → E3 (3 jobs, sequential)
- ... etc for each flow

**Within a flow:** strictly sequential (E2 depends on E1).
**Across flows:** can parallelize at the flow level (Welcome L1 can run while Cart is running, because they serve different decision points in the journey).
**Cross-level in same flow+position:** can parallelize (Welcome E1 L1, L2, L3, GF can run together because they serve different customer segments with different copy).

**Optimal parallelism:** 4 levels × flows at the same time = up to 10+ concurrent subagents possible, but most safely run 4-8 concurrent to avoid subagent overload.

**Math:** 125 wireframes ÷ ~6 concurrent = ~21 batches of work, each batch sequential within itself.

### 2.5 The variance tracker

**Path:** /root/projects/brightkidco/_notes/variance-tracker.json

**Format:**
```json
{
  "version": "1.0",
  "last_updated": "2026-06-28T00:00:00Z",
  "flows": {
    "welcome-l1": {
      "welcome-01-e1-l1": {
        "section_count": 4,
        "section_pattern": "A",
        "image_density_target": 2,
        "color_temperature": "warm",
        "email_length": "short",
        "argument_structure": "pas-light",
        "visual_rhythm": "open",
        "cta_position": "late",
        "subject_type": "observation",
        "section_names": ["hook", "validation", "mechanism", "cta"]
      }
    }
  }
}
```

Every Stage 1 subagent reads the relevant flow entry, performs the variance check, writes back.

**Caps on tracker entries:**
- No 3x same section_pattern in a row (across customer journey)
- No 3x same image_density in a row
- No 3x same color_temperature in a row
- No 3x same email_length in a row
- No 3x same argument_structure in a row
- No 3x same visual_rhythm in a row
- No 3x same cta_position in a row
- Subject line types should rotate across the 7 types

### 2.6 Stage 1 done criteria

Stage 1 is DONE when:
- All 125 copy files have a wireframe appended at the bottom
- All 125 entries exist in variance-tracker.json
- All variances are ≥5/9 vs previous email in flow+level
- All alignment checks passed

**Total subagent jobs:** 125 (one per email)
**Total batches:** ~21 (sequential within flow, parallel across flows)
**Estimated time per subagent:** 5-15 minutes depending on copy length and variance pressure

---

## 3. STAGE 2 — HTML ASSEMBLY

### 3.1 What Stage 2 IS

Stage 2 turns each wireframe into a production-ready Klaviyo HTML email. It is the EXECUTION stage. All design decisions were made in Stage 1. Stage 2 picks the actual components, applies the actual colors, builds the actual HTML.

### 3.2 Why per-section subagents

A single subagent building the whole email would lose context across sections, repeat decisions, or miss variance. Per-section subagents keep each decision tight:

- One subagent = one section = one focused decision
- The wireframe tells the subagent WHAT the section needs
- The subagent picks the SPECIFIC component from the 949 catalog
- No drift across sections

### 3.3 The Stage 2 task structure

For each email, Stage 2 dispatches N+2 subagents where N = number of body sections:

- **Task 0 (HEADER):** Static across ALL emails. Run ONCE, extract from Giuliano's raw mockup, save as a reusable HTML snippet. ALL Stage 2 jobs import this.
- **Task 1, 2, ... N (BODY SECTIONS):** Per-section subagents. Each reads the wireframe's section breakdown for that section. Each picks the component, picks the images, builds the HTML for that section.
- **Task Z (FOOTER):** Static across ALL emails. Run ONCE, extract from Giuliano's raw mockup, save as a reusable HTML snippet.

**For a 5-section email:** 5 section subagents + 1 header subagent (run once) + 1 footer subagent (run once) = 7 jobs total (5 of which are unique to this email).

### 3.4 Task 0 — HEADER subagent (run once)

**Input:** Giuliano's raw mockup HTML file (path TBD per Ayoub), this build-flow.md

**Process:**
1. Open Giuliano's raw mockup
2. Find the header section (logo, brand name, any static elements at top)
3. Extract the HTML for the header
4. Convert to Klaviyo-safe HTML:
   - 600px table-based
   - Inline CSS
   - No JavaScript
   - Logo centered, max height 60px
   - Off-White background (#FAF9F7) or transparent (per Giuliano's choice)
5. Save as /root/projects/brightkidco/outputs/html/_snippets/header.html
6. Confirm: same header works on all 125 emails

**Output:** header.html + one-line confirmation "Header extracted. Tested on 1 email. Ready for batch."

### 3.5 Task Z — FOOTER subagent (run once)

**Input:** Giuliano's raw mockup HTML file (path TBD per Ayoub), this build-flow.md, GIULIANO-DEMANDS.md §16 (locked URLs and brand footer requirements)

**Process:**
1. Open Giuliano's raw mockup
2. Find the footer section
3. Extract the footer HTML
4. Convert to Klaviyo-safe HTML:
   - Physical mailing address (CAN-SPAM required)
   - Unsubscribe link
   - Reply-to email reference
   - Social media links (Instagram + TikTok ONLY — Facebook NOT used, Trustpilot NOT used)
   - Copyright
   - "View in browser" link
5. Save as /root/projects/brightkidco/outputs/html/_snippets/footer.html
6. Confirm: same footer works on all 125 emails

**Output:** footer.html + one-line confirmation.

### 3.6 Per-section subagent (Tasks 1-N)

**Input:**
- The wireframe section breakdown for THIS section (Block 3 of the wireframe)
- The wireframe structural intent (Block 4)
- The component catalog at /root/projects/brightkidco/outputs/email-assets/component-catalog.json (949 entries)
- The showcase HTML at /root/projects/brightkidco/outputs/email-assets/showcase-artifacts-final.html (visual reference)
- Brand tokens (locked colors, fonts, spacing)
- Image assets at /root/projects/brightkidco/outputs/email-assets/product-photos/
- Component usage tracker (must read before picking, write after)
- Image usage tracker (must read before picking, write after)

**Process:**
1. Read the wireframe for THIS section
2. Identify the visual treatment the wireframe specified (image-led hero, callout component, standalone text, etc.)
3. Open the showcase HTML and FIND components that match the treatment intent
4. **CRITICAL: components are VISUAL PATTERNS, not metadata records.** The subagent must STUDY the component visually, not just query by label.
5. Check component usage tracker:
   - Skip if already at 8 uses (max cap)
   - Skip if already used in this email (no duplicates within email)
   - Skip if already used in this flow+position across levels (per-demand §7.6)
6. Pick the best-matching component (giuliano_derived > quality_approved > agent_standard)
7. Identify images needed for this section (check image tracker, no duplicates in email, max 20-25 uses per image)
8. Build the section HTML:
   - Table-based, inline CSS
   - Klaviyo-safe (no flexbox, no grid, no JS)
   - Body min 16px, CTA min 48px height
   - Apply System B colors (green #039902, NOT Giuliano teal #2BAEB4)
   - Apply Questrial 400 font (no bold body, headlines Fraunces if specified)
   - Match the wireframe's typographic intent (bold anchors, callout backgrounds, etc.)
   - Inject the actual copy text from the copy file (not section labels)
9. Save section as /root/projects/brightkidco/outputs/html/_sections/{email-id}-s{n}.html
10. Update component usage tracker
11. Update image usage tracker
12. Report back: "Section N built. Component: X. Images: [list]. Size: X KB."

### 3.7 The composer (assembly subagent)

After all section subagents finish for one email, a final composer subagent:

**Input:**
- header.html
- All section HTML files for this email
- footer.html
- The wireframe (to verify section order matches intent)

**Process:**
1. Read all section HTML files in wireframe-defined order
2. Concatenate into a single email HTML
3. Wrap in the standard email shell:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>{subject}</title>
     <!-- preheader div, hidden -->
   </head>
   <body>
     <table width="100%" cellpadding="0" cellspacing="0" border="0">
       <tr><td align="center">
         <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
           {header}
           {section 1}
           {section 2}
           ...
           {section N}
           {signoff}
           {footer}
         </table>
       </td></tr>
     </table>
   </body>
   </html>
   ```
4. Add preheader div (hidden, for inbox preview)
5. Add Klaviyo template variables ({{ first_name }}, {{ unsubscribe_url }}, etc.)
6. Validate:
   - Total size <102KB
   - 4-6 images present
   - 4-8 components used
   - No duplicate components within email
   - No duplicate images within email
   - Tables, inline CSS, no JS
   - Mobile-responsive (single column at 480px)
7. Save final email as /root/projects/brightkidco/outputs/html/{flow}/{email-id}.html
8. Report back: "Email X built. Size: X KB. Sections: N. Components: [list]. Status: ✅"

### 3.8 Component usage tracker

**Path:** /root/projects/brightkidco/_notes/component-usage.json

**Format:**
```json
{
  "version": "1.0",
  "last_updated": "2026-06-28T00:00:00Z",
  "components": {
    "HERO-5": 0,
    "HERO-13": 0,
    "CALLOUT-3": 0,
    ...
  },
  "images": {
    "lifestyle/toddler-playing.jpg": 0,
    "flat-lay/3pair-bundle.jpg": 0,
    ...
  },
  "completed_emails": []
}
```

Every Stage 2 subagent reads before picking, writes after.

**Caps:**
- Max 8 uses per component (from demands §7.6)
- Max ~20-25 uses per image (from demands §7.6, product images repeat more)
- No duplicate component in same email
- No duplicate image in same email

### 3.9 Color system rule (NON-NEGOTIABLE)

Giuliano's showcase HTML uses System A colors (Teal #2BAEB4, Green #5DD07A).
The copy files demand System B colors (Brand-Green #039902, Mint #DBFFCD, Cream #FBF7EB, Yellow #F5C84B, Dark Text #1A1A1A, Body Gray #4A4A4A, Off-White #FAF9F7, Soft Gray #9AA8A7).

**Rule:** Every component picked from the showcase catalog must have its colors SWAPPED to System B before HTML assembly.

**Source:** GIULIANO-DEMANDS.md §15.1 ("Teal palette NOT USED — green is LAW per DOC1").

**Verification:** Every composer subagent must run a color check on the final HTML. Any teal hex codes (#2BAEB4, #5DD07A) = FAIL. Only System B colors allowed.

### 3.10 Level calibration at Stage 2

Stage 2 subagents MUST apply level-specific visual rules:

**L1 (Sarah):**
- CTA: full-width, Brand-Green #039902, 52px height
- Spacing: tighter (40px gaps)
- Color energy: full saturation Brand-Green + Yellow accents
- Imagery: kids 3-5, hopeful, Pre-K forward-looking
- Forbidden: non-verbal imagery, BCBA language, "severe", adult diaper refs

**L2 (Lisa):**
- CTA: muted green, 48px height
- Spacing: balanced (44px gaps)
- Color energy: desaturated mint tones
- Imagery: kids 5-7, sensory context, BCBA-respectful
- 6-element mandatory formula per email: symptom recognition, mechanism specificity, BCBA acknowledgment, realistic timelines, 60-day guarantee, permission-not-to-buy

**L3 (Maria):**
- CTA: text link OR very small muted button
- Spacing: widest (56px gaps)
- Color energy: cream, soft neutrals, zero yellow
- Imagery: kids 6-10+, quiet warmth, dignity-centered
- NEVER math reframes, urgency, cheerleading, hope framing

**GF (General Fallback):**
- CTA: medium-low aggression, balanced
- Spacing: balanced (44px gaps)
- Color: balanced mid-saturation
- Imagery: cross-level, universal
- 6 cross-level calibration rules (R1-R6) MUST be satisfied

(Source: g3 §2.6, GIULIANO-DEMANDS.md §15.7)

### 3.11 Stage 2 done criteria

Stage 2 is DONE for one email when:
- HTML file exists at /root/projects/brightkidco/outputs/html/{flow}/{email-id}.html
- File size <102KB
- 4-6 images present
- 4-8 components used
- All sections from wireframe present in order
- Header and footer applied
- System B colors only (no teal)
- Level calibration applied
- Klaviyo template variables in place
- Preheader set
- Validates against email-marketing-structure skill checklist

Stage 2 is DONE for the program when all 125 emails meet the above.

### 3.12 Stage 2 subagent totals

Per email: N section subagents + 1 composer = N+1 jobs (header and footer are shared)
For 125 emails averaging 5 sections: 125 × 6 = 750 section subagent jobs + 125 composer jobs = 875 jobs
Plus: 1 header extraction + 1 footer extraction = 877 total Stage 2 subagent jobs

Plus parallel batches: with 10 concurrent subagents, ~88 batches.

**This is the scale of Stage 2.** Stage 1 is 125 jobs. Stage 2 is 877 jobs.

---

## 4. CONSTANTS (DO NOT CHANGE)

These are LOCKED across all emails, all flows, all levels:

### 4.1 Color tokens (System B, per GIULIANO-DEMANDS §15.1)

```
Brand-Green     #039902  → CTAs, accents, primary action
Dark Text       #1A1A1A  → Body, sign-off
Body Gray       #4A4A4A  → Sub-captions, secondary copy
Mint            #DBFFCD  → Highlight boxes, soft backgrounds
Cream Card      #FBF7EB  → Card backgrounds, quote blocks
Brand-Yellow    #F5C84B  → Badges, stars, stat callouts, trust signals (L1 only)
Off-White       #FAF9F7  → Overall email background
Soft Gray       #9AA8A7  → Subtle text, captions
```

**NEVER USE:** Teal #2BAEB4, Teal-Green #5DD07A (System A Giuliano — explicit BAN).

### 4.2 Typography

```
Brand font:     Questrial (mandatory)
Font weight:    400 ONLY for body (NEVER bold for body)
Headline font:  Fraunces (when specified)
Headline size:  24-32px desktop / 22-24px mobile
Body size:      17px desktop / 16px mobile (min 16px accessibility)
CTA size:       16-18px, weight 700 (exception to no-bold rule)
Caption size:   13-14px
```

### 4.3 Technical

```
Max width:      600px
Mobile break:   480px
File size:      <102KB (Gmail clips over this)
Image format:   JPG photos / PNG graphics
Image size:     <100KB each
Layout:         Tables only (no flexbox/grid)
CSS:            Inline only (Gmail strips <style>)
JS:             NEVER
External CSS:   NEVER
MSO conditional: Required for Outlook
Preheader:      Required (hidden div)
Footer:         Physical address + unsubscribe + reply-to + social
```

### 4.4 Sender info

```
From Name:      Lena from BrightKidCo
From Email:     support@send.brightkidco.com (Phase 1 only)
Reply-To:       support@brightkidco.com (ALWAYS)
Sending Domain: send.brightkidco.com
```

### 4.5 Locked URLs (per GIULIANO-DEMANDS §16.4)

```
Homepage:                       https://www.brightkidco.com
All Products:                   https://www.brightkidco.com/collections/all-products
ASD PDP (Phase 1 primary):      https://www.brightkidco.com/products/potty-training-underwear-for-sensory-sensitive-toddlers-sp
Standard PDP:                   https://www.brightkidco.com/products/potty-training-underwear
Parent Stories:                 https://www.brightkidco.com/pages/real-parent-stories
FAQ:                            https://www.brightkidco.com/pages/faq
Contact:                        https://www.brightkidco.com/pages/contact
Instagram:                      https://www.instagram.com/brightkidco_official/
TikTok:                         https://www.tiktok.com/@brightkidco.com
Facebook:                       DO NOT USE
Trustpilot:                     DO NOT USE
```

### 4.6 Lena sign-off variants (per GIULIANO-DEMANDS §7.3, §11.7)

```
SHORT  → Welcome E1-E2, transactional. Closing: "Talk soon,"
MEDIUM → E3-E5, emotional/education. Closing: "With understanding,"
LONG   → E6+, winback, last day. Closing: "With care,"
```

### 4.7 Discount code (per GIULIANO-DEMANDS §16.3)

```
WELCOME10 → 10% off, 7-day validity, auto-applies at checkout
Conflict: 10%OFF-BKCO noted — confirm with Giuliano before use
```

### 4.8 Forbidden phrases (per GIULIANO-DEMANDS §8)

Brand-wide NEVER:
```
Easy, Simple, Effortless, Train your kid in 3 days, Finally solved everything,
Guaranteed results, Just like neurotypical kids, Suffering from autism,
High-functioning, Low-functioning, Wait until they're ready, Just try harder,
Be more consistent, Your child should..., Most children at this age...,
Have you tried [obvious method], Don't worry, We understand (empty),
Cure/Solve/Fix, Your child will be normal, Get him trained!
```

AI-isms NEVER:
```
dive into, unlock, game-changer, in today's fast-paced, leveraging,
revolutionize, transformative, empower, disrupt, best-in-class,
cutting-edge, world-class, reimagine, supercharge, synergy, holistic,
think outside the box, low-hanging fruit, ninja, guru, rockstar
```

Trigger words to avoid: Amazing, Incredible, Transformation, Breakthrough, Revolutionary, Secret, Unlock, Game-changer, Life-changing.

### 4.9 The 6 Cross-Level Calibration Rules (R1-R6)

Mandatory for ALL cross-level flows. Violation destroys segment trust.

```
R1 — Symptom Over Label: Never name the level. Name the experience.
R2 — 3-5 Recognition Anchors Per Mail: L1/L2/L3 specific situations.
R3 — Age Ranges Over Fixed Ages: "For kids 3 to 10+" not "For 5-year-olds."
R4 — Verbal/Non-Verbal Inclusivity: Always cover both communication modes.
R5 — Timeline Flexibility: "Some kids 2 weeks. Others 8. Both normal."
R6 — Low-Bar Success Metrics: Micro-wins, not "fully trained."
```

---

## 5. THE 9 VARIANCE DIMENSIONS (per GIULIANO-DEMANDS §5.4)

Every Stage 1 wireframe and every Stage 2 HTML must respect these dimensions and ensure no customer journey repeats the same pattern 3x in a row:

1. **Section count** (2-7, vary)
2. **Section order** (rotate patterns A-H from email-marketing-structure §3)
3. **Image density** (1-6, mix image-heavy vs text-heavy)
4. **Color temperature** (warm/cool/neutral/dark, rotate)
5. **Email length** (150w short to 1200w long)
6. **Argument structure** (PAS, AIDA, Story-led, Data-led, Testimonial-led, Direct)
7. **Visual rhythm** (tight 40px vs airy 80px vs mixed)
8. **CTA position** (early/mid/late/double-tap/text-link)
9. **Subject line formula** (observation/question/mechanism/story/validation/data/quote)

A customer receives 20-35 emails over 6 months. No 3 consecutive emails in their journey should share the same value on any of these 9 dimensions.

---

## 6. THE GATES

### 6.1 Gate 1: Alignment (Stage 1, per email)
Before any wireframe proceeds, the alignment check must pass. If the wireframe's section count, lever match, or visual intent diverges from strategy macro → HALT → flag Ayoub.

### 6.2 Gate 2: Variance (Stage 1, per email)
Every wireframe must differ from the previous email in the same flow+level on ≥5 of 9 dimensions. If not, ADJUST before saving.

### 6.3 Gate 3: Component cap (Stage 2, per section)
No component used more than 8 times across all 125 emails. No component used twice in same email. No component used in same flow+position across levels.

### 6.4 Gate 4: Image cap (Stage 2, per email)
No image used twice in same email. No image used more than ~25 times across all 125 emails.

### 6.5 Gate 5: Color system (Stage 2, per email)
Final HTML must contain ONLY System B colors. Any teal hex code = FAIL.

### 6.6 Gate 6: Level calibration (Stage 2, per email)
Per-level visual rules applied correctly. L1 has Pre-K urgency, L2 has 6-element formula, L3 has ZERO urgency, GF has R1-R6 satisfied.

### 6.7 Gate 7: Technical (Stage 2, per email)
File size <102KB, 4-6 images, 4-8 components, table-based, inline CSS, no JS, mobile-responsive, Klaviyo template variables present.

### 6.8 Gate 8: Forbidden phrases (Stage 1 + Stage 2)
Every email checked against brand-wide forbidden list, AI-isms list, level-specific forbidden phrases, trigger words.

---

## 7. SCOPE & NUMBERS

```
Total copy files:           125
Total flows:                22
Phase 1 (launch, M1-2):     47 emails
Phase 2 (high-value, M3-4): 31 emails
Phase 3 (nice-to-have, M5-6): 47 emails

Level-specific flows:       Welcome (8×4=32), PP-Extended-Ed (5×4=20),
                            Winback A (3×4=12), Winback B (3×4=12)
Cross-level flows:          Everything else (~49 emails)

Stage 1 subagent jobs:      125 (one per email)
Stage 2 subagent jobs:      877 (~750 section + 125 composer + 2 static)
Total subagent jobs:        ~1002

Concurrent subagent limit:  ~6-10 (configurable in Hermes)
Total batches:              ~125-170
Estimated total time:       varies (each subagent ~5-15 min)
```

---

## 8. FILE STRUCTURE (target output)

```
/root/projects/brightkidco/
├── _notes/                              # Build pipeline notes
│   ├── 2026-06-28-build-flow.md         # THIS FILE
│   ├── stage1-wireframe-example.md      # Worked example
│   ├── variance-tracker.json            # Stage 1 writes
│   ├── component-usage.json             # Stage 2 writes
│   └── image-usage.json                 # Stage 2 writes
├── outputs/
│   ├── copy/                            # Source (125 .md files)
│   ├── strategy/                        # Strategy docs (input)
│   ├── synthesis/                       # Synthesis docs (input)
│   ├── demands/                         # Demands docs (input)
│   ├── email-assets/                    # Images + components
│   │   ├── product-photos/              # 36 images
│   │   ├── component-catalog.json       # 949 components
│   │   └── showcase-artifacts-final.html # Visual reference
│   ├── email-design-environment/        # Giuliano's raw mockups (input)
│   ├── html/                            # FINAL OUTPUT
│   │   ├── _snippets/
│   │   │   ├── header.html              # Static, extracted once
│   │   │   └── footer.html              # Static, extracted once
│   │   ├── _sections/                   # Per-section intermediate
│   │   │   ├── welcome-01-e1-l1-s1.html
│   │   │   ├── welcome-01-e1-l1-s2.html
│   │   │   └── ...
│   │   ├── welcome/
│   │   │   ├── welcome-01-e1-l1.html    # Final emails
│   │   │   ├── welcome-01-e1-l2.html
│   │   │   └── ...
│   │   ├── cart/
│   │   ├── browse/
│   │   └── ... (one folder per flow)
│   └── email-viewer/                    # Existing Svelte viewer
└── plans/                               # Existing plan docs
```

---

## 9. OPEN QUESTIONS (DEFERRED)

These block Stage 0/0.5 work and Stage 2 header/footer extraction:

- [ ] **Header extraction path** — which file in /outputs/email-design-environment/ has Giuliano's raw header? Exact line range?
- [ ] **Footer extraction path** — same question for footer
- [ ] **Stage 0 precheck** — to be written: read all 125 metadata headers, reconcile with strategy, build reconciliation table
- [ ] **Stage 0.5 customer journey matrix** — to be written: per-level 30-email journey map showing structural pattern assignments to avoid desensitization
- [ ] **Variance tracker format** — locked at JSON above, but specific schema may evolve with first usage

---

## 10. WHAT THIS DOCUMENT IS NOT

- Not a substitute for the strategy files (1-full-email-strategy.md, S01-A-framework.md)
- Not a substitute for the synthesis files (01-customer-avatar.md, etc.)
- Not a substitute for the demands (GIULIANO-DEMANDS.md)
- Not a substitute for the a-to-z problem definition

This file documents the BUILD MECHANISM. The other files document WHAT to build and WHY.

If you read this file alone, you know HOW to build. To know WHAT to build, read GIULIANO-DEMANDS.md + 1-full-email-strategy.md. To know WHY each decision was made, read a-to-z-problem-definition.md.

---

## 11. CHANGE LOG

- **2026-06-28 (initial):** Pipeline documented. Stage 1 + Stage 2 written in detail. Stage 0 + Stage 0.5 deferred. Header/footer extraction paths pending from Ayoub.