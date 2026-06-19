# BKC Email Build Plan — Ultra-Detailed Index

---

## 1. INPUTS — What the Agent Receives
  1.1 Copy File
    1.1.1 Metadata block (flow name, email position, level, phase)
    1.1.2 Subject line options
    1.1.3 Preview text options
    1.1.4 From name and reply-to
    1.1.5 Body copy — broken into labeled sections by heading
    1.1.6 CTA options (button text, placement, aggression level)
    1.1.7 Shared data (sign-off name, sign-off text, P.S., out-line, footer tagline, footer links, footer address)
    1.1.8 Source citations
    1.1.9 Creative strategy section
      1.1.9.1 Big idea / emotional arc
      1.1.9.2 Layout architecture description
      1.1.9.3 Custom illustration or contraption description
      1.1.9.4 Color narrative
      1.1.9.5 Typography direction
      1.1.9.6 Decorative furniture description
      1.1.9.7 Easter eggs or hidden details
      1.1.9.8 Motion or animation notes
      1.1.9.9 Level calibration (what this email is NOT — which other levels it should not resemble)

  1.2 Component Library (showcase-artifacts-final.html)
    1.2.1 File location and size (2.5MB, ~31K lines)
    1.2.2 Structure: each component wrapped in `<div class="card">` with header, body, footer
    1.2.3 The actual email HTML lives inside `<div class="card-body">`
    1.2.4 Component header contains the component ID and name
    1.2.5 Component footer contains a plain-English description of what it does
    1.2.6 Components use placeholder text that gets replaced with actual copy
    1.2.7 Components are already styled with brand tokens (colors, fonts, spacing)

  1.3 Component Index (component-index-v2.md)
    1.3.1 File location and structure
    1.3.2 13 position categories (Shell/Header, Hero, Body Recognition, Body Mechanism, Social Proof, Images/Photos, Product Showcase, Guarantee/Trust, CTA, Emotional Support, Flow-Specific, Seasonal/Campaign, Signoff/Footer)
    1.3.3 Each entry has: component ID, source tag ([G], [G+], [A*], [A]), name, description, line number in showcase file
    1.3.4 Source tags explained
      1.3.4.1 [G] = literal Giuliano source (5 total)
      1.3.4.2 [G+] = Giuliano-derived, wraps or aliases a [G] component (22 total)
      1.3.4.3 [A*] = quality-approved, has star marker, Giuliano approved design (363 total)
      1.3.4.4 [A] = agent/standard, no star, no Giuliano source (560 total)
    1.3.5 Retired patterns (banned, never use)
      1.3.5.1 Tilted yellow quote card (was in 18/20 flows)
      1.3.5.2 60-day seal outside guarantee flows
      1.3.5.3 Universal lime-on-dark CTA outside Cart/Winback B/PP At Risk
      1.3.5.4 Universal Body Signal SVG outside Welcome E3/PP Ed D14/FAQ/PP Ext Ed W2
      1.3.5.5 Em dashes in any copy text
      1.3.5.6 Dollar sign pricing (use euros)
      1.3.5.7 External labels in customer text

  1.4 Product Photos (29 images)
    1.4.1 File location
    1.4.2 Image types: flat-lay (12), lifestyle (11), accessories (5), placeholder (1)
    1.4.3 File sizes and base64 sizes
    1.4.4 Which photos work for hero vs product grid vs lifestyle section

  1.5 Brand Tokens
    1.5.1 Color palette (teal, tealDeep, green, greenDeep, ink, soft, muted, cream, paper, gradient, gradientText)
    1.5.2 Font families (Questrial for body, Fraunces for display, Caveat for signature)
    1.5.3 Max width (420px)
    1.5.4 These are fixed. Every email uses them. Never changed.

  1.6 Primitives (14 components from Giuliano's source)
    1.6.1 EmailShell — outer wrapper
    1.6.2 Header — logo bar
    1.6.3 ImgFrame — dashed placeholder frame
    1.6.4 FramedImage — solid border + shadow container
    1.6.5 Band — gradient color transition strip
    1.6.6 PartBadge — small rounded pill badge
    1.6.7 TitleBlock — badge + headline + subhead
    1.6.8 Letter — body copy with greeting + paragraphs
    1.6.9 Eyebrow — small uppercase label
    1.6.10 H2 — section heading
    1.6.11 CTAClose — dark background CTA block
    1.6.12 Signoff — Lena's personal card
    1.6.13 OutLine — reply prompt
    1.6.14 Footer — tagline, links, unsubscribe, address
    1.6.15 Used only for: header, footer, sign-off, out-line, band transitions between sections. NOT for content sections — those come from the 950-library.

---

## 2. PHASE 1 — READ AND UNDERSTAND THE COPY
  2.1 Read the entire copy file from top to bottom
    2.1.1 Do not skip any section
    2.1.2 Read metadata, subject lines, preview text, body, CTA, shared data, citations, creative strategy
    2.1.3 Read time: ~2-3 minutes for a standard copy file

  2.2 Break the copy into a section list
    2.2.1 Identify each section by its heading
    2.2.2 For each section, record:
      2.2.2.1 Section number (1, 2, 3, ...)
      2.2.2.2 Section heading (as written in the copy file)
      2.2.2.3 Content type (text, stat, quote, bullet list, product description, CTA, etc.)
      2.2.2.4 Content length (short: 1-2 sentences, medium: 1 paragraph, long: 2+ paragraphs)
      2.2.2.5 Whether the section contains or references an image
      2.2.2.6 Emotional function (hook, validate, educate, prove, sell, close)
    2.2.3 This produces a numbered list of sections — the blueprint for the email

  2.3 Read the creative strategy
    2.3.1 Read the big idea / emotional arc
    2.3.2 Read the layout architecture description
    2.3.3 Read the color narrative
    2.3.4 Read the typography direction
    2.3.5 Read the level calibration (what this email is NOT)
    2.3.6 Extract useful context: mood, tone, energy level, visual direction
    2.3.7 Mark anything that conflicts with the component library — the library wins

  2.4 Classify the email type
    2.4.1 Welcome (educational, onboarding, discovery)
    2.4.2 Cart abandonment (reminder, urgency, social proof)
    2.4.3 Checkout abandonment (trust, reassurance)
    2.4.4 Browse abandonment (recommendation, curiosity)
    2.4.5 Post-purchase (setup guide, check-in, review request)
    2.4.6 Level detection (segmentation, interactive)
    2.4.7 Winback (re-engagement, re-education)
    2.4.8 Replenishment (restock reminder)
    2.4.9 Referral (share ask, gift)
    2.4.10 Sunset (goodbye, last chance)
    2.4.11 Cross-sell (complementary product)
    2.4.12 Campaign/seasonal (flash sale, holiday, back-to-school)
    2.4.13 The classification determines which component categories to prioritize

---

## 3. PHASE 2 — DESIGN THE LAYOUT SECTION BY SECTION
  3.1 Process Section 1: HERO (top of email)
    3.1.1 Read the copy for this section
    3.1.2 Determine the opener type:
      3.1.2.1 Headline-only opener (text emphasis, no image lead)
      3.1.2.2 Product-forward opener (image leads, text supports)
      3.1.2.3 Letter/personal opener (warm, peer-to-peer)
      3.1.2.4 Stat/data-driven opener (number leads)
      3.1.2.5 Story/narrative opener (scene or moment)
      3.1.2.6 Question-based opener (curiosity or mirror)
    3.1.3 Match opener type to component category:
      3.1.3.1 Headline-only → HERO category (30 options): Curiosity Gap, Data Shock, Permission Open, Story Fragment, Mirror Moment, Identity Statement, Counter-Intuitive Truth, Visual Metaphor, Whisper Tone, Bold Declaration, Question Storm, Before Snapshot, Scientific Hook, Quote Bomb, Level Callout, Mechanism Tease, Social Proof Hero, Guilt Absolution, Timeline Shock
      3.1.3.2 Product-forward → IMAGES & PHOTOS category: Product Hero Image, Product On-Body, Product Flat Lay, Lifestyle Grid, etc.
      3.1.3.3 Letter/personal → HERO category: Handwritten Letter Opener (HERO-20)
      3.1.3.4 Stat-driven → HERO category: Data Shock (HERO-2), Scientific Hook (HERO-13), Timeline Shock (HERO-19)
      3.1.3.5 Story/narrative → HERO category: Story Fragment (HERO-4), Emotional Hero (M1)
      3.1.3.6 Question-based → HERO category: Question Storm (HERO-11), Mirror Moment (HERO-5)
    3.1.4 Read the chosen component's HTML from the showcase file at its line number
    3.1.5 Extract the HTML from inside `<div class="card-body">`
    3.1.6 Replace placeholder text with actual headline/copy from the copy file
    3.1.7 If the hero needs an image, pick one from the 29 product photos and embed as base64
    3.1.8 Record: component ID, what it looks like, what copy went in

  3.2 Process Section 2 through Section N (body sections)
    3.2.1 For each section, apply the same decision tree:

    3.2.2 STEP A — Identify content type
      3.2.2.1 Pure text (paragraphs, no special structure)
      3.2.2.2 Stat or data point (number + context)
      3.2.2.3 Mechanism explanation (how something works)
      3.2.2.4 Testimonial or parent quote
      3.2.2.5 Product description or feature list
      3.2.2.6 Bullet point list
      3.2.2.7 Comparison (us vs them)
      3.2.2.8 Objection handling
      3.2.2.9 Emotional moment (grief, permission, guilt, hope)
      3.2.2.10 Story or narrative arc
      3.2.2.11 Bridge/transition (short text connecting two ideas)
      3.2.2.12 CTA or action prompt

    3.2.3 STEP B — Determine if an image is needed or possible
      3.2.3.1 Does the copy describe a product feature? → Add product photo
      3.2.3.2 Does the copy describe a moment or experience? → Add lifestyle photo
      3.2.3.3 Does the copy mention a stat? → Consider stat visualization component
      3.2.3.4 Is the section purely text with no visual anchor? → Add an image to break it up
      3.2.3.5 Has it been more than 2 sections since the last image? → Add an image
      3.2.3.6 Rule: no more than 3 paragraphs of pure text without a visual element

    3.2.3A STEP B2 — Decide HOW to present the image
      3.2.3A.1 Never drop a naked image into the email. Every image needs a home.
      3.2.3A.2 Is the image the main focus of this section? → Standalone image with border and shadow (like FramedImage from primitives)
      3.2.3A.3 Does the image support a product description? → Wrap inside a PRODUCT SHOWCASE component (PROD-1 through PROD-12, or PDISP-1 through PDISP-20) that includes product name, short description, and price
      3.2.3A.4 Does the image illustrate a parent story or testimonial? → Wrap inside a SOCIAL PROOF component (SP-04 Review Screenshot, SP-09 UGC Photo Grid, IMG-12 Customer Testimonial Photo) that pairs the image with a quote
      3.2.3A.5 Does the image show the product in use during daily life? → Use a LIFESTYLE component (IMG-09 Lifestyle Grid, IMG-19 Product in Context, DEEPIMG-7 Full-Bleed Lifestyle, PROD-8 Lifestyle Collage)
      3.2.3A.6 Does the image break up long text? → Use a small inline image or an ILLUSTRATION component (Illu_GentleMorning, Illu_Signal, etc.) between text blocks, not full-width
      3.2.3A.7 Does the image show before/after or comparison? → Use a SPLIT component (IMG-06 Before/After Split, STORY-03 Split Before/After, DEEPIMG-2 Split Image Comparison)
      3.2.3A.8 Multiple product photos together? → Use a GRID layout (IMG-07 UGC Photo Grid, IMG-09 Lifestyle Grid, DEEPPROD-9 Product Flat Lay Artistic, DEEPUGC-3 UGC Grid 4x4)
      3.2.3A.9 The key question: what story does this image tell, and which component format tells that story best?

    3.2.4 STEP C — Pick the component
      3.2.4.1 Based on content type (Step A) and image need (Step B), go to the matching category in the component index
      3.2.4.2 Read the component names and descriptions in that category
      3.2.4.3 Pick the one that best fits the content's tone, structure, and emotional function
      3.2.4.4 Read the chosen component's HTML from the showcase file
      3.2.4.5 Extract the HTML
      3.2.4.6 Replace placeholder text with actual copy

    3.2.5 Content type → component category mapping:
      3.2.5.1 Pure text → BODY — RECOGNITION & STORY (117 options): Letter variants, Story variants, Deep variants, Letter variants
      3.2.5.2 Stat or data → BODY — MECHANISM & EDUCATION (177 options): EDU-11 Science Citation, SP-03 Stat Row, M10 Stat Block, EDU-7 Did You Know
      3.2.5.3 Mechanism explanation → BODY — MECHANISM & EDUCATION: EDU-8 Mechanism Diagram, EDU-10 How It Works, EDU-5 Infographic, EDUDEEP variants
      3.2.5.4 Testimonial or quote → BODY — SOCIAL PROOF (15 options): SP-01 Yellow Quote Block, SP-06 Before/After, SP-08 Stacked Mini-Reviews, SP-13 Review of the Week
      3.2.5.5 Product description → PRODUCT SHOWCASE (81 options): PROD-1 Full Showcase, PROD-3 Layer Breakdown, PROD-5 Feature Grid, PROD-8 Lifestyle Collage
      3.2.5.6 Bullet list → BODY — MECHANISM & EDUCATION: EDU-3 Checklist, EDU-9 Tip Cards, EDU-14 Quick Reference Card
      3.2.5.7 Comparison → GUARANTEE & TRUST (84 options): CMP-4 Feature Comparison Table, CMP-7 Scorecard Showdown, CMP-10 6-Month Cost Analysis
      3.2.5.8 Objection handling → GUARANTEE & TRUST: OBJ-01 through OBJ-15 (15 objection components)
      3.2.5.9 Emotional moment → EMOTIONAL SUPPORT (37 options): EMO-1 Permission Slip, EMO-3 Guilt Reduction, EMO-7 You're Not Alone, EMO-8 Grief Acknowledgment, EMO-12 Hope Gradient
      3.2.5.10 Story or narrative → BODY — RECOGNITION & STORY: STORY-01 Chapter Cards, STORY-02 Vertical Timeline, STORY-03 Split Before/After, STORY-05 Diary Entry, STORY-07 Dialogue, STORY-10 Stacked Story
      3.2.5.11 Bridge/transition → BAND (from primitives) — gradient color strip connecting sections
      3.2.5.12 CTA or action → CTA — THE CLOSE (53 options): CTA-1 Dark Block, CTA-2 Soft Link, CTA-4 Gentle Invite, CTA-5 Product CTA, CTA-8 Dual CTA, CTA-11 Permission CTA

    3.2.6 STEP D — Handle long copy
      3.2.6.1 If a section has more than 3 paragraphs, split it into sub-sections
      3.2.6.2 Each sub-section gets its own component
      3.2.6.3 Alternate between text components and visual components
      3.2.6.4 Never paste a full page of text into one component — it becomes unreadable
      3.2.6.5 The email must be scannable — reader should get the gist by scrolling without reading every word

  3.3 Ensure product visibility (mandatory check after all sections processed)
    3.3.1 Does the email include at least one product image? → If no, add one
    3.3.2 Does the email include at least one product-related component? → If no, add a PRODUCT SHOWCASE component before the CTA
    3.3.3 Does the email drive toward the store? → The CTA must link to the product or cart
    3.3.4 Rule: this is e-commerce, not a newsletter. Every email sells.

  3.4 Process the CTA section
    3.4.1 Read the CTA copy from the copy file (button text, intro text, fine print)
    3.4.2 Determine CTA aggression level:
      3.4.2.1 Hard sell (direct, product-focused) → CTA-1 Dark Block, CTA-5 Product CTA
      3.4.2.2 Soft/permission-based → CTA-4 Gentle Invite, CTA-11 Permission CTA
      3.4.2.3 Curiosity-driven → CTA-3 Curiosity Code
      3.4.2.4 Guarantee-anchored → CTA-16 Guarantee CTA
      3.4.2.5 Dual (primary + secondary) → CTA-8 Dual CTA
      3.4.2.6 Social proof bridge → CTA-6 Social CTA
    3.4.3 If pricing is involved, add a PRICE component before the CTA button
      3.4.3.1 PRICE-1 Price Hero
      3.4.3.2 PRICE-2 Bundle Price
      3.4.3.3 PRICE-3 Cost Per Use
      3.4.3.4 PRICE-11 Starter vs Bundle
    3.4.4 Extract the chosen CTA component HTML
    3.4.5 Replace placeholder text with actual CTA copy

  3.5 Process sign-off and footer (always the same)
    3.5.1 Signoff component from primitives — Lena's card with avatar, name, title, signature, P.S.
    3.5.2 OutLine from primitives — "Reply to this email. Lena reads every response."
    3.5.3 Footer from primitives — tagline, links, unsubscribe, address, gradient bar
    3.5.4 No variation. Every email ends the same way.

---

## 4. PHASE 3 — ASSEMBLE THE EMAIL
  4.1 Build the component sequence
    4.1.1 List all chosen components in order (hero, section 2, section 3, ..., CTA, signoff, footer)
    4.1.2 Assign background colors to each section
      4.1.2.1 Warm palette: #FFFBF0, #FFF6E2, #F5F1EA
      4.1.2.2 Cool palette: #EAF6F2, #F0EDF8
      4.1.2.3 Neutral: #FFFFFF
      4.1.2.4 Dark: #1F2D2F (CTA and sign-off only)
      4.1.2.5 Ensure adjacent sections have different background colors
    4.1.3 Add Band transitions between sections (from primitives)
      4.1.3.1 Band goes between every two sections with different backgrounds
      4.1.3.2 Band height: 40px default, 50px before dark CTA section
      4.1.3.3 Band gradient: from section A's background to section B's background

  4.2 Extract and prepare each component
    4.2.1 For each chosen component:
      4.2.1.1 Go to the showcase file at the component's line number
      4.2.1.2 Read the HTML inside `<div class="card-body">`
      4.2.1.3 Extract just the email HTML (strip the card wrapper)
      4.2.1.4 Replace all placeholder text with actual copy from the copy file
      4.2.1.5 Replace placeholder stats with actual numbers
      4.2.1.6 Replace placeholder quotes with actual testimonials
      4.2.1.7 Replace placeholder product names with actual product names
      4.2.1.8 Keep all styling, layout, colors, fonts intact

  4.3 Embed product images
    4.3.1 Select 4+ product photos from the 29 available
      4.3.1.1 Hero image: lifestyle or flat-lay, largest/most eye-catching
      4.3.1.2 Product grid images: 3 flat-lay or product shots
      4.3.1.3 Optional: additional lifestyle images for body sections
    4.3.2 Base64-encode each image
    4.3.3 Embed in the relevant components as `<img src="data:image/jpeg;base64,...">`
    4.3.4 Verify each image is under 130KB base64

  4.4 Write the JSX file
    4.4.1 Section 1: Brand tokens (window.BRAND, window.FONT)
    4.4.2 Section 2: Shared data (sign-off, footer text from copy file)
    4.4.3 Section 3: Primitive components used (Band, Header, Footer, Signoff, OutLine, etc.)
    4.4.4 Section 4: Embedded images (base64 data URIs as variables)
    4.4.5 Section 5: Email data object (all copy text organized by section)
    4.4.6 Section 6: Email component function
      4.4.6.1 Returns React.createElement tree
      4.4.6.2 Each section is a React.createElement call
      4.4.6.3 Components from the 950-library are rendered as inline HTML (dangerouslySetInnerHTML or direct createElement with the extracted HTML)
      4.4.6.4 Bands connect sections
      4.4.6.5 Signoff, OutLine, Footer at the bottom
    4.4.7 Section 7: window.EmailName = EmailName; (export)

---

## 5. PHASE 4 — BUILD AND VERIFY
  5.1 Transpile with esbuild
    5.1.1 Command: npx esbuild outputs/email-name.jsx --bundle --format=iife --outfile=outputs/email-name.transpiled.js --loader:.jsx=jsx --jsx=react
    5.1.2 Verify no errors in output
    5.1.3 Check file size (should be 300KB-600KB depending on image count)

  5.2 Wrap in HTML shell
    5.2.1 HTML head: DOCTYPE, charset, viewport, email client meta tags
    5.2.2 Google Fonts link (Questrial, Fraunces, Caveat)
    5.2.3 Email client CSS resets (body margin, table collapse, img display, preheader hide)
    5.2.4 Mobile responsive media queries (max-width: 420px, min-width: 601px)
    5.2.5 Outlook conditional comments (MSO table wrapper)
    5.2.6 Body with background color #FBF7F1
    5.2.7 Email container: max-width 420px, centered
    5.2.8 Preheader text (hidden, from copy file)
    5.2.9 Root div for React mount
    5.2.10 React CDN scripts (react@18, react-dom@18)
    5.2.11 Transpiled JS (paste contents of .transpiled.js)
    5.2.12 Mount code: ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(EmailName));

  5.3 Verify in browser
    5.3.1 Start local server: python3 -m http.server 8888 --directory outputs/
    5.3.2 Open the HTML file
    5.3.3 Check: all images load
    5.3.4 Check: sections are visually distinct (different backgrounds, different component styles)
    5.3.5 Check: product images are visible and prominent
    5.3.6 Check: CTA button renders and is clickable
    5.3.7 Check: sign-off and footer render correctly
    5.3.8 Check: no broken layout, no overlapping elements
    5.3.9 Check: email is 420px wide on desktop, full-width on mobile
    5.3.10 Check: headline is above hero image (not below)
    5.3.11 Check: hero image has correct spacing (margin 16px 14px 20px)
    5.3.12 Check: sign-off avatar doesn't overflow its circle (overflow hidden)

---

## 6. RULES THAT NEVER CHANGE
  6.1 Every email must have product images (minimum 1, ideally 4)
  6.2 Header and footer are always Giuliano's originals — no variation
  6.3 The copy is a suggestion. The components are the brand.
  6.4 No retired patterns (yellow quote cards, universal SVG, em dashes, dollar signs, external labels)
  6.5 No more than 3 paragraphs of pure text without a visual element
  6.6 Each email uses different component IDs — track and avoid repetition
  6.7 Email must be a single self-contained HTML file
  6.8 Agent does not ask questions — reads copy, makes decisions, builds email
  6.9 Every email reminds the reader about the product and drives toward the store
  6.10 Component library wins over creative strategy when they conflict

---

## 7. COMPONENT CATEGORY QUICK REFERENCE (count per category)
  7.1 Shell & Header: 30
  7.2 Hero: 30
  7.3 Body — Recognition & Story: 117
  7.4 Body — Mechanism & Education: 177
  7.5 Body — Social Proof & Testimonials: 15
  7.6 Body — Images & Photos: 140
  7.7 Product Showcase: 81
  7.8 Guarantee & Trust: 84
  7.9 CTA — The Close: 53
  7.10 Emotional Support: 37
  7.11 Flow-Specific Patterns: 103
  7.12 Seasonal & Campaign: 76
  7.13 Signoff & Footer: 7
  7.14 TOTAL: 950
