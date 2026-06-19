# BKC Email Build — Progress Tracker

This file is read by EVERY subagent before it starts building. It prevents component reuse and enforces brand rules.

---

## COMPONENTS USED

Track every component ID used across all built emails. Subagents MUST NOT reuse any ID listed here.

| Email | Component IDs Used |
|-------|-------------------|
| cart-e1 | (primitives only — no showcase components) |
| welcome-e2-l1 | (primitives only — no showcase components) |
| welcome-01-e1-gf | HERO-5, DEEP-09, EDU-8, SP-08, PROD-3, TRUST-1, CTA-4 |
| winback-a-19-e1-gf | HERO-18, STORY-14, LETTER-04, EDU-10, DEEP-05, EMO-4, TRUST-1, CTA-4 |
| cart-02-e2 | HERO-4, DEEP-02, EDUDEEP-2, STORY-13, PROD-10, TRUST-1, CTAMAX-06 |
| repa-15-e1 | HERO-3, STORY-14, SP-08, EDU-10, CTA-4 |
| sunset-25-e1 | HERO-9, DEEP-02, EMO-4, CTA-4 |

---

## COPY FILES BUILT

| Copy File | Status | Output File |
|-----------|--------|-------------|
| cart-02-e1.md | ✅ Built | cart-e1.html (primitives only, rebuild needed) |
| welcome-01-e2-l1.md | ✅ Built | welcome-e2-l1.html (primitives only, rebuild needed) |
| cart-02-e2.md | ✅ Built | cart-02-e2.html (showcase components: HERO-4, DEEP-02, EDUDEEP-2, STORY-13, PROD-10, TRUST-1, CTAMAX-06) |
| sunset-25-e1.md | ✅ Built | sunset-25-e1.html (showcase components: HERO-9, DEEP-02, EMO-4, CTA-4) |
| repa-15-e1.md | ✅ Built | repa-15-e1.html (showcase components: HERO-3, STORY-14, SP-08, EDU-10, CTA-4) |
| welcome-01-e1-gf.md | ✅ Built | welcome-01-e1-gf.html (showcase components: HERO-5, DEEP-09, EDU-8, SP-08, PROD-3, TRUST-1, CTA-4) |

---

## BRAND RULES (NEVER VIOLATE)

1. **Header:** BrightKidCo SVG logo, same every email. Copied from cart-e1.jsx Header primitive.
2. **Footer:** Tagline, links, unsubscribe, address, gradient bar. Same every email. Copied from cart-e1.jsx Footer primitive.
3. **Signoff:** Lena's personal card with avatar, name, signature, P.S. Same every email. Copied from cart-e1.jsx Signoff primitive.
4. **OutLine:** "Reply to this email. Lena reads every response." Same every email.
5. **Product images:** Every email MUST include at least 1 product image. Minimum 4 recommended.
6. **No retired patterns:** No tilted yellow quote cards, no universal Body Signal SVG, no em dashes, no dollar signs (use euros), no external labels in customer text.
7. **Max width:** 420px.
8. **Fonts:** Questrial (body), Fraunces (display), Caveat (signature). Loaded via Google Fonts CDN.
9. **Colors:** teal #2BAEB4, green #5DD07A, ink #1F2D2F, soft #4A6568, muted #8A9B9D, cream #FBF7F1.

---

## HOW TO BUILD (CORRECTED PIPELINE)

### Step 1: Read this progress file
Know what components have been used. Know the brand rules.

### Step 2: Read the copy file
Break it into sections. Note the creative strategy.

### Step 3: Read the component INDEX (component-index-v2.md)
See what's available in each category. The index lists component IDs, names, descriptions, and line numbers.

### Step 4: For EACH section of the copy, pick a component
- Read the showcase file (showcase-artifacts-final.html) at the component's line number
- Extract the HTML inside `<div class="card-body">`
- Replace placeholder text with actual copy
- Pick a DIFFERENT component ID than any used in previous emails

### Step 5: Assemble the email
- Header (same every email)
- Content sections (raw HTML blocks from showcase, in order)
- Band transitions between sections (gradient color strips)
- Signoff + OutLine + Footer (same every email)

### Step 6: Embed product images
- Pick 4+ photos from the 29 available
- Base64 encode them
- Place in relevant sections

### Step 7: Write HTML file
- DOCTYPE, head with Google Fonts, email client CSS
- Body with 420px max-width container
- All assembled HTML sections
- No React needed for content sections

### Step 8: Update this progress file
- Add component IDs used
- Add copy file to "built" list
