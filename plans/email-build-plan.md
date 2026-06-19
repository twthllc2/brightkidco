# BKC Email Build Plan — Stupid Level of Detail

This is the universal process for building one BrightKidCo email from one copy file. Every agent that builds an email follows this exact process. No exceptions.

---

## WHAT THE AGENT RECEIVES

The agent gets three things:

1. **One copy file** — a markdown file with the full email copy. It has sections separated by headings. Each section contains text — paragraphs, bullet points, stats, quotes, CTAs. The copy file also has a "Creative Strategy" section at the bottom that describes the visual direction, tone, and layout ideas. This creative strategy is a SUGGESTION, not a rule. The agent reads it for context but does not follow it blindly.

2. **The component library** — a 2.5MB HTML file (`showcase-artifacts-final.html`) containing 950 pre-built visual components. Each component is a complete, styled HTML block that can be extracted and used in an email. Components are organized by position in the email (HERO, BODY, PRODUCT, CTA, etc.). Each component has a unique ID (like HERO-1, EDU-4, PROD-3, CTA-5). Each component contains placeholder text that gets replaced with actual copy.

3. **The component index** — a categorized list of all 950 components with their IDs, names, descriptions, and line numbers in the showcase file. This is the map the agent uses to find the right component.

The agent also has access to:

4. **29 product photos** — JPG/PNG images of the product. The agent picks 4+ per email and embeds them as base64.

5. **Brand tokens** — the color palette, fonts, and spacing values. These are fixed. Every email uses them.

6. **The primitives** — 14 reusable React components (Header, Footer, Band, Letter, etc.). The agent only uses these for the shell (header, footer, gradient transitions between sections). The actual content sections come from the 950-component library.

---

## THE UNIVERSAL WORKFLOW

### PHASE 1: READ AND UNDERSTAND THE COPY

**Step 1.1 — Read the entire copy file.**

Read it from top to bottom. Do not skip anything. Read the subject line, preview text, every section of body copy, the CTA, the sign-off, the footer text, and the creative strategy at the bottom.

**Step 1.2 — Break the copy into sections.**

The copy file has headings that separate sections. Break the copy into a list of sections. Each section has:
- A section type (hero, body text, stat, mechanism, testimonial, product description, guarantee, CTA, etc.)
- Content (the actual text — paragraphs, bullet points, quotes, stats)
- A length (short = 1-2 sentences, medium = 1 paragraph, long = 2+ paragraphs)

Write down this list. Example of what this looks like (NOT from a specific file — universal):

```
Section 1: Hook/Opener — 2 sentences — urgency or curiosity driven
Section 2: Validation — 1 paragraph — stat or acknowledgment
Section 3: Mechanism — 2 paragraphs — how it works explanation
Section 4: Testimonial — 1 quote + 1 paragraph context
Section 5: Product — 1 paragraph + bullet points
Section 6: Guarantee — 1-2 sentences
Section 7: CTA — button text + fine print
```

Every copy file is different. Some have 4 sections. Some have 10. The agent adapts.

**Step 1.3 — Read the creative strategy.**

The copy file has a creative strategy section at the bottom. Read it. It describes:
- The visual direction (what the designer imagined)
- Layout ideas (where images go, what components to use)
- Color suggestions
- Typography ideas

This is CONTEXT, not instructions. The agent uses it to understand the mood and tone. But the agent's primary guide is the 950-component library. If the creative strategy says "use a timeline illustration" but the component library has a better fit, the agent picks from the library.

**Step 1.4 — Identify the email type.**

Based on the copy file's metadata (flow name, email position, purpose), classify the email:
- Welcome email (educational, onboarding)
- Cart abandonment (reminder, urgency)
- Post-purchase (setup, check-in)
- Winback (re-engagement)
- Level detection (segmentation)
- Referral (share ask)
- Sunset (goodbye)
- etc.

This classification helps the agent know which component categories to prioritize. A welcome email uses more EDUCATION components. A cart abandonment uses more PRODUCT and CTA components. A winback uses more EMOTIONAL SUPPORT components.

---

### PHASE 2: DESIGN THE LAYOUT — SECTION BY SECTION

Now the agent processes each section of the copy, one at a time, from top to bottom. For each section, the agent makes a decision: what visual component from the 950-library best presents this content?

**Step 2.1 — Process the HERO section (top of email).**

The first section of every email is the hero — the first thing the reader sees. The agent looks at the copy for this section and asks:

- Is this a headline-only opener? → Pick a HERO component (30 options: Curiosity Gap, Data Shock, Permission Open, Story Fragment, etc.)
- Is this a product-forward opener? → Pick an IMAGE component (Product Hero, Lifestyle Grid, etc.)
- Is this a letter/personal opener? → Pick a LETTER-OPENER component (Handwritten Letter Opener, etc.)
- Is this a stat-driven opener? → Pick a HERO with data emphasis (Data Shock, Timeline Shock, etc.)

The agent reads the creative strategy to understand the intended mood, then picks the HERO component that matches. It reads the actual HTML from the showcase file at the component's line number, extracts the styled block.

**Step 2.2 — Process each BODY section.**

After the hero, the agent processes each body section one by one. For each section, the agent asks a series of questions:

**Question A: What type of content is this section?**

- Just text (paragraphs, no special structure)? → Consider a LETTER component (117 options in BODY — RECOGNITION & STORY)
- A stat or data point? → Consider an EDU or SP (social proof) component
- An explanation of how something works? → Consider a MECHANISM component (177 options in BODY — MECHANISM & EDUCATION)
- A parent quote or testimonial? → Consider a SOCIAL PROOF component (15 options)
- A product description? → Consider a PRODUCT SHOWCASE component (81 options)
- An emotional moment (grief, permission, guilt)? → Consider an EMOTIONAL SUPPORT component (37 options)
- A comparison or objection handling? → Consider a GUARANTEE & TRUST component (84 options)
- A story or narrative? → Consider a STORY component (STORY-01 through STORY-15, plus STORYDEEP variants)

**Question B: Can this section be illustrated with an image?**

After identifying the content type, the agent asks: would an image make this section better?

- Does the copy describe a product feature? → Add a product photo (from the 29 available)
- Does the copy describe a moment or experience? → Add a lifestyle photo
- Does the copy mention a stat? → Consider a stat visualization component
- Is the section purely text with no visual anchor? → Consider adding an image to break up the text

Rule: No section should be more than 3 paragraphs of pure text without a visual element (image, component, or illustration). Long text blocks kill readability.

**Question C: How should the text be presented?**

If the section is text-only (no image needed), the agent decides the presentation:

- Is it a letter/personal message? → Use a LETTER component (warm background, paragraph styling)
- Is it bullet points? → Use a CHECKLIST or STEP CARDS component
- Is it a stat with context? → Use a STAT ROW or SCIENCE CITATION component
- Is it a quote? → Use a QUOTE component (Pull Quote, Editorial Pull Quote, etc.)
- Is it a short bridge between sections? → Use a BAND transition (gradient color strip)
- Is it a headline + subtext? → Use an EYEBROW + H2 combination from primitives

**Step 2.3 — Ensure product visibility.**

After processing all sections, the agent checks: does this email show the product?

Rule: Every email must include at least one product image and one product-related component. This is e-commerce. Every email must remind the reader what they're buying and drive them toward the store.

If the copy doesn't have a product section, the agent adds one. It picks a PRODUCT SHOWCASE component and places it before the CTA. It uses one of the 29 product photos.

**Step 2.4 — Process the CTA section.**

The CTA (call to action) is the last major section before the sign-off. The agent picks a CTA component:

- Is this a hard sell? → Use CTA-1 (Dark Block) or CTA-5 (Product CTA)
- Is this a soft/permission-based ask? → Use CTA-4 (Gentle Invite) or CTA-11 (Permission CTA)
- Is this a curiosity-driven close? → Use CTA-3 (Curiosity Code)
- Does it need a guarantee reminder? → Use CTA-16 (Guarantee CTA)
- Is there pricing involved? → Use a PRICE component before the CTA button

The CTA must include a button. The button text comes from the copy file.

**Step 2.5 — Process the sign-off and footer.**

These are ALWAYS the same. The agent uses:
- Signoff component from primitives (Lena's card with avatar, name, signature, P.S.)
- OutLine from primitives ("Reply to this email. Lena reads every response.")
- Footer from primitives (tagline, links, unsubscribe, address, gradient bar)

No variation here. Every email ends the same way.

---

### PHASE 3: ASSEMBLE THE EMAIL

The agent now has a list of chosen components, one per section, in order. It assembles them into a single email.

**Step 3.1 — Extract component HTML.**

For each chosen component, the agent:
1. Goes to the showcase file at the component's line number
2. Reads the HTML between `<div class="card-body">` and the closing `</div>` before `<div class="card-footer">`
3. Extracts just the email HTML (not the card wrapper)
4. Replaces placeholder text with actual copy from the copy file

The placeholder replacement is straightforward:
- The component has sample text like "The underwear that reads your child's body signals"
- The agent replaces it with the actual headline from the copy file
- The component has sample stats like "73%" — replace with actual stats from the copy
- The component has sample quotes — replace with actual testimonials from the copy

**Step 3.2 — Add band transitions between sections.**

Between each component, the agent adds a Band (from primitives) — a gradient color strip that transitions from one section's background color to the next. This creates visual flow.

The agent picks background colors that vary between sections. Not every section gets the same color. The creative strategy suggests colors, but the agent also ensures variety:
- Warm sections: #FFFBF0, #FFF6E2, #F5F1EA
- Cool sections: #EAF6F2, #F0EDF8
- Neutral sections: #FFFFFF
- Dark sections: #1F2D2F (CTA and sign-off only)

**Step 3.3 — Embed product images.**

The agent picks 4+ product photos from the 29 available. It base64-encodes them and embeds them in the relevant components:
- Hero image goes in the HERO component or as a standalone image after the hero
- Product photos go in the PRODUCT SHOWCASE component
- Lifestyle photos go in IMAGE components between body sections

Rule: Images must be under 130KB each when base64-encoded. If an image is too large, pick a different one.

**Step 3.4 — Wrap in the email shell.**

The assembled components go inside the email shell:
1. DOCTYPE + HTML head (Google Fonts, email client CSS resets)
2. Preheader text (from copy file)
3. Header (BrightKidCo logo — always the same)
4. All assembled components in order
5. Signoff + OutLine + Footer (always the same)
6. React CDN scripts
7. Transpiled JS (from esbuild)
8. Mount code

---

### PHASE 4: BUILD AND VERIFY

**Step 4.1 — Write the JSX file.**

The agent writes a single JSX file containing:
- Brand tokens (window.BRAND, window.FONT)
- Shared data (sign-off text, footer text)
- Primitive components (Band, Header, Footer, etc. — only the ones used)
- Email data (all the copy text, organized by section)
- The email component (React.createElement calls assembling all sections)
- Embedded images (base64 data URIs)
- The final mount: `window.EmailName = EmailName;`

**Step 4.2 — Transpile with esbuild.**

```bash
npx esbuild outputs/email-name.jsx --bundle --format=iife --outfile=outputs/email-name.transpiled.js --loader:.jsx=jsx --jsx=react
```

**Step 4.3 — Wrap in HTML shell.**

Paste the transpiled JS into the HTML wrapper template. Replace the preheader text. Set the mount function name to match the email component.

**Step 4.4 — Verify in browser.**

Open the HTML file in a browser. Check:
- All images load
- Sections are visually distinct (different backgrounds, different component styles)
- Product images are visible
- CTA button works
- Sign-off and footer render correctly
- No broken layout

---

## RULES THAT NEVER CHANGE

1. **Every email must have product images.** Minimum 1, ideally 4. This is e-commerce.
2. **Header and footer are always Giuliano's originals.** No variation.
3. **The copy is a suggestion. The components are the brand.** The agent follows the component library's visual language, not the copy file's creative strategy.
4. **No retired patterns.** No tilted yellow quote cards, no universal Body Signal SVG, no em dashes in copy, no dollar signs (use euros), no external labels in customer text.
5. **Every section must have a visual element.** No more than 3 paragraphs of pure text without an image, component, or illustration breaking it up.
6. **Each email uses different component IDs.** The agent tracks which components it has used across emails and avoids repeating the same ones. With 950 components, there is no excuse for repetition.
7. **The email must be a single self-contained HTML file.** No external dependencies except Google Fonts and React CDN.
8. **The agent does not ask questions.** It reads the copy, makes decisions, builds the email. If something is ambiguous, the agent uses its judgment and picks the best option.

---

## THE OUTPUT

One standalone HTML file. Ready to preview in a browser. Ready to import into Klaviyo. No additional steps needed.
