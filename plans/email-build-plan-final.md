# BKC Email Build Plan — Final v2

One email at a time. Sequential. Log updated after each build.

---

## STEP 1: READ THE COPY FILE

Read the assigned copy file completely. Break it into numbered sections:
- Section number, heading, content type, length, emotional function

Also read the creative strategy for visual direction (suggestions, not rules).

---

## STEP 2: READ THE COMPONENT INDEX

Read the component index. 950 components across 13 categories. Note which categories have the most unused components.

---

## STEP 3: READ THE LOG FILE

Read the log. Check:
- Which component IDs have been used (max 3 uses per ID)
- Which structure patterns have been used (max 2 uses per pattern)
- Which categories are underused (pick from those to ensure variety)

---

## STEP 4: DECIDE THE EMAIL STRUCTURE FIRST

Before picking ANY components, decide the STRUCTURE of this email. The structure is the ORDER of sections and the overall shape.

**Do NOT use the same structure as the previous email.** The log tracks which structures have been used.

Structure options (pick one that's different from the last email):

**A. Hero-first (standard)**
Header → Hero → Body sections → Product → CTA → Signoff → Footer

**B. Letter-first (personal)**
Header → Letter/greeting → Body sections → Product → CTA → Signoff → Footer

**C. Stat-first (data shock)**
Header → Big number/stat → Explanation → Body → Product → CTA → Signoff → Footer

**D. Testimonial-first (social proof)**
Header → Parent quote/story → Validation → Mechanism → Product → CTA → Signoff → Footer

**E. Image-first (visual)**
Header → Large product photo → Text overlay → Body → CTA → Signoff → Footer

**F. Short-form (3 sections only)**
Header → Hook → CTA → Signoff → Footer

**G. Long-form (8+ sections)**
Header → Hook → Validation → Mechanism → Testimonials → Product → Guarantee → CTA → Signoff → Footer

Write down the structure BEFORE picking components.

---

## STEP 5: DESIGN SECTION BY SECTION

For each section in your chosen structure:

**5a. What type of content goes here?**
- Hook? Validation? Mechanism? Testimonial? Product? Guarantee? CTA?

**5b. Pick a component from the RIGHT category**
- Look at the component INDEX
- Find 3-5 candidates in the matching category
- READ their actual HTML from the showcase file (line numbers in index)
- See what they look like: colors, layout, mood
- Pick the one that FITS the content AND is NOT overused in the log

**5c. Check visual coherence**
- Background color of this component should CONTRAST with the previous section
- Don't put two dark backgrounds in a row
- Don't put two text-heavy sections in a row

**5d. Write down:** Component ID, background color, section purpose

---

## STEP 6: CHOOSE IMAGES AND PLACEMENT

**Do NOT always use hero + 3 product grid.** Vary the image layout.

Image placement options:
- Hero image only (large, top of email)
- Product images only (grid or row, no hero)
- Images in the middle (after mechanism section)
- Images at the end (before CTA)
- No hero image (text-led email)
- Single large image (full-width, no grid)
- Mixed: 1 hero + 1 product (sparse)

Pick 4 photos from /root/projects/brightkidco/outputs/email-assets/product-photos/ (under 130KB each).

Decide: which section gets which image? Are images standalone or inside a component?

---

## STEP 7: READ SHOWCASE HTML AND EXTRACT BLOCKS

For each chosen component:
1. Read the showcase file at the component's line number
2. Extract HTML from inside `<div class="card-body">`
3. Replace placeholder text with real copy from the copy file
4. Replace placeholder images with actual product photos (base64)

---

## STEP 8: BUILD THE JSX

1. Copy primitives from /root/projects/brightkidco/templates/primitives.jsx
2. For each content section: put extracted showcase HTML in a string variable, render via dangerouslySetInnerHTML
3. Wrap with primitives (Header, Band, Signoff, OutLine, Footer)
4. Embed 4 product photos as base64

---

## STEP 9: BUILD HTML

1. Transpile: npx esbuild --format=iife --loader:.jsx=jsx --jsx=transform
2. Wrap in HTML shell (copy from cart-e1.html)
3. Save standalone HTML

---

## STEP 10: VERIFY AND UPDATE LOG

Check: different structure from previous emails? Different components? Different image layout?
Update log.md with component IDs, structure pattern, and email entry.

---

## RULES
1. Header, signoff, out-line, footer — always the same
2. Every email must have at least 1 product image
3. No em dashes, no dollar signs (euros)
4. Max width 420px, Google Fonts, brand colors
5. 6-8 showcase components per email
6. Max 3 uses per component ID
7. Max 2 uses per structure pattern
8. Read candidate HTML before choosing
9. Check background colors of adjacent sections
10. Each email MUST look structurally different from the previous one
