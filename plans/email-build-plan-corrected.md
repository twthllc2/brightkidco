# BKC Email Build Plan — Corrected

This is the actual pipeline. Every subagent follows this exactly.

---

## WHAT THE SUBAGENT GETS

1. **One copy file** (the email it's building)
2. **This plan** (how to build it)
3. **The progress file** (what's been built before — read first)

---

## STEP 1: READ THE PROGRESS FILE

Read `/root/projects/brightkidco/plans/progress.md` FIRST. This tells you:
- Which component IDs have already been used (DO NOT reuse)
- Which copy files are already built
- Brand rules that never change

---

## STEP 2: READ THE COPY FILE

Read the assigned copy file completely. Break it into sections. Note:
- Each section's heading and content
- The creative strategy at the bottom (visual direction suggestions)
- The shared data (sign-off name, footer text)

---

## STEP 3: READ THE COMPONENT INDEX

Read `/root/projects/brightkidco/outputs/email-assets/component-index-v2.md`.

This lists all 950 components organized by position category. Each entry has:
- Component ID (e.g., HERO-1, EDU-4, SP-06)
- Name and description
- Line number in the showcase file

Pick components that are NOT in the progress file's "used" list.

---

## STEP 4: BUILD THE EMAIL — SECTION BY SECTION

For each section of the copy, do this:

### 4a. Decide what type of component fits

Look at the copy for this section. Is it:
- A headline/hook? → Pick from HERO category
- Body text? → Pick from BODY — RECOGNITION & STORY or BODY — MECHANISM & EDUCATION
- A testimonial? → Pick from BODY — SOCIAL PROOF
- A product description? → Pick from PRODUCT SHOWCASE
- A guarantee? → Pick from GUARANTEE & TRUST
- A CTA? → Pick from CTA — THE CLOSE
- An emotional moment? → Pick from EMOTIONAL SUPPORT

### 4b. Read the component HTML from the showcase file

Open `/root/projects/brightkidco/outputs/email-assets/showcase-artifacts-final.html` at the component's line number. Read until you find the closing `</div>` before `<div class="card-footer">`. This is the HTML block.

Example: if the component is at line 3864, read from there. The HTML is inside `<div class="card-body">`. Extract everything between the opening `<div class="card-body">` and the matching closing `</div>`.

### 4c. Replace placeholder text

The component has sample text like "The underwear that reads your child's body signals". Replace it with the actual copy from the copy file. Keep all the styling (inline styles, colors, fonts, layout).

### 4d. Add the component to the email

Place the extracted HTML block in the email in the correct position.

---

## STEP 5: ASSEMBLE THE FULL EMAIL

The email structure is:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BrightKidCo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;700&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Questrial&display=swap" rel="stylesheet">
  <style>
    /* email client CSS resets — copy from cart-e1.html */
  </style>
</head>
<body>
  <!-- HEADER (same every email) -->
  <!-- Extract from cart-e1.jsx Header primitive -->

  <!-- BAND transition (gradient strip) -->
  <!-- Simple div: background gradient from color A to color B -->

  <!-- SECTION 1: Hero -->
  <!-- HTML extracted from showcase component -->

  <!-- BAND transition -->

  <!-- SECTION 2: Body -->
  <!-- HTML extracted from showcase component -->

  <!-- BAND transition -->

  <!-- ... more sections ... -->

  <!-- SIGNOFF (same every email) -->
  <!-- Extract from cart-e1.jsx Signoff primitive -->

  <!-- OUTLINE (same every email) -->
  <!-- "Reply to this email. Lena reads every response." -->

  <!-- FOOTER (same every email) -->
  <!-- Extract from cart-e1.jsx Footer primitive -->
</body>
</html>
```

---

## STEP 6: EMBED PRODUCT IMAGES

Every email must have at least 1 product image. Pick from `/root/projects/brightkidco/outputs/email-assets/product-photos/`.

Encode as base64:
```bash
base64 -w 0 path/to/photo.jpg
```

Embed in the email as:
```html
<img src="data:image/jpeg;base64,ACTUAL_BASE64_DATA" alt="Description" style="width:100%; display:block;">
```

Place images inside the relevant showcase components — replace the placeholder image area with the real product photo.

---

## STEP 7: UPDATE THE PROGRESS FILE

After building, update `/root/projects/brightkidco/plans/progress.md`:
- Add all component IDs you used to the "COMPONENTS USED" table
- Add the copy file to the "COPY FILES BUILT" table

---

## BAND TRANSITIONS

Between sections with different background colors, add a gradient band:
```html
<div style="height: 40px; background: linear-gradient(180deg, #COLOR_A 0%, #COLOR_B 100%);"></div>
```

Common background colors:
- Cream: #FBF7F1
- Warm: #FFF6E2
- Mint: #EAF6F2
- Lavender: #F0EDF8
- White: #FFFFFF
- Dark: #1F2D2F (CTA sections only)

---

## WHAT NOT TO DO

1. Do NOT use React.createElement primitives for content sections. Use raw HTML from the showcase.
2. Do NOT reuse component IDs from the progress file.
3. Do NOT skip the progress file read.
4. Do NOT build the same section order for every email. Vary the structure.
5. Do NOT skip product images.
6. Do NOT use em dashes, dollar signs, or retired patterns.
