# Layer 29 Round 2 — Visual Calibration: Skill Loading

## Skills Found and Loaded

### Primary Email Design Skills (5 loaded)

| # | Skill Name | Category | Status | Description |
|---|-----------|----------|--------|-------------|
| 1 | email-design-master | deliverability-technical | LOADED | Mobile-first email design system. Client rendering rules, dark mode compatibility, Outlook hacks, responsive email architecture. |
| 2 | email-design-standards-and-template-build | deliverability-technical | LOADED | Complete email design system. Template anatomy, mobile-first standards, CTA optimization, image strategy, design QA checklist. |
| 3 | email-template-library | deliverability-technical | LOADED | Pre-built template specifications for e-commerce. Welcome flow (3 variants), promotional campaigns, abandoned cart, post-purchase, newsletter templates. |
| 4 | email-html-generator | email-marketing | LOADED | Generate responsive HTML email templates for Klaviyo. Takes brand colors, fonts, content blocks → clean, mobile-first HTML. |
| 5 | email-cta-conversion-design | deliverability-technical | LOADED | Deep-dive on CTA optimization and conversion-centered design. Button specs, placement rules, copy frameworks, A/B testing variables. |

---

## Design Frameworks Extracted

### Framework 1: Mobile-First Email Architecture (from email-design-master)

**Core Principle:** 60%+ of email opens are mobile. Desktop-first designs break on mobile.

**Three Responsive Approaches:**
1. **Fluid/Responsive** — Media queries (`@media only screen and (max-width: 480px)`). Works in Apple Mail, iOS Mail, Gmail app. Does NOT work in Outlook desktop.
2. **Hybrid/Fluid (Spongy Method)** — Percentage-based widths with max-width + MSO conditionals. Works everywhere.
3. **Stacking (Column Collapse)** — Columns stack on mobile via `width:100% !important` on mobile.

**Mobile-First Checklist:**
- Single column on mobile (stack all multi-column layouts)
- 16px minimum font size on body text (iOS auto-zoomes below 13px)
- 44x44px minimum tap targets (Apple HIG)
- Preheader text optimized (first 40-100 chars visible in inbox)
- Hero image not wider than 600px
- CTA buttons are table cells with padding, not links with padding
- No horizontal scrolling on 320px viewport

**BrightKidCo Application:** All BrightKidCo emails must follow mobile-first architecture. Parents check email on phones while juggling kids — mobile experience is critical.

---

### Framework 2: Dark Mode Compatibility System (from email-design-master)

**Client Dark Mode Behavior:**
- Apple Mail (iOS/macOS): HIGH control — respects `@media (prefers-color-scheme: dark)`
- Outlook (iOS/Android): MEDIUM — partial media query support
- Gmail (app): LOW — auto-inverts, ignores media queries
- Yahoo Mail (app): LOW — auto-inversions

**Dark Mode Color System:**
| Purpose | Light Mode | Dark Mode | Notes |
|---------|-----------|-----------|-------|
| Page bg | #FFFFFF | #1a1a1a | NOT pure black |
| Section bg | #f8f8f8 | #2a2a2a | Subtle contrast |
| Body text | #333333 | #f5f5f5 | NOT pure white |
| Heading text | #1a1a1a | #ffffff | Maximum contrast |
| Primary link | Brand primary | #6db3f2 | Lighter version |
| Border | #e0e0e0 | #444444 | Subtle |
| CTA button bg | Brand primary | Brand primary (keep) | Don't change button colors |

**BrightKidCo Application:** All emails need dark mode meta tags, dark mode CSS overrides, and logo swap for dark backgrounds. Parent-focused emails with colorful kids imagery need careful dark mode handling.

---

### Framework 3: Email Client Compatibility Matrix (from email-design-master)

**The Big 5 Clients (Must Work In):**
| Client | Engine | Market Share | Pain Points |
|--------|--------|-------------|-------------|
| Apple Mail | WebKit | ~40% | Best rendering, supports modern CSS |
| Gmail (app) | Custom | ~30% | Strips `<style>` blocks, no `@font-face` |
| Outlook (desktop) | Word | ~10% | The worst. No border-radius, no bg-image, no CSS padding on div |
| Outlook (web/app) | WebKit-ish | ~8% | Better than desktop |
| Yahoo Mail | Custom | ~5% | Strips some CSS |

**What Gets Stripped:**
- `<style>` blocks: Gmail strips in some contexts. ALL critical styles must be inline.
- Media queries: NO in Outlook desktop, partial in Gmail
- `@font-face`: NO in Gmail and Outlook — stick to system fonts
- `background-image`: NO in Outlook desktop — use VML
- `border-radius`: NO in Outlook desktop — use VML roundrect
- `flexbox`/`grid`: ZERO support in Outlook

**BrightKidCo Application:** All templates must be built with table-based layouts, inline styles, and MSO conditional comments. System fonts only (Arial, Helvetica, sans-serif).

---

### Framework 4: 3 Keys to Great Email Design (from email-design-standards-and-template-build)

**Key 1: Ease of Click**
- Button above the fold (75% of clicks come from hero CTA)
- Large buttons (minimum 44x44px, full-width on mobile recommended)
- Clear CTAs with contrasting colors
- Centered buttons (better for mobile thumb reach)

**Key 2: Skimmability**
- Simple always wins — shorten the email as much as possible
- Clear sections (2-3 sections, clearly differentiated)
- Minimal copy (customers spend ~3 seconds per email)
- Clear headlines and main points (typography hierarchy)

**Key 3: Branding Consistency**
- Branded graphics aligned with brand identity
- Correct fonts (web-safe fallback stacks)
- Congruent styling across website, ads, email

**BrightKidCo Application:** BrightKidCo emails should be simple, with clear headlines, bold CTAs above the fold, and consistent use of brand colors (bright, kid-friendly palette). Copy should be minimal and punchy — parents are busy.

---

### Framework 5: Email Layout Anatomy (from email-design-standards-and-template-build)

**Standard Email Sections:**
1. **Preheader/Preview Text** — Under 100 chars, extends subject line, never blank
2. **Hero Section** — ~75% of design effort. Clear headline + strong graphic + value prop + CTA button above fold. Reverse triangle hierarchy.
3. **Bridge Section** — Supporting copy, testimonials, features. Transitions hero to product section.
4. **Product Section** — Individual CTAs per product. End with a general CTA (+25% clicks).
5. **CTA Section** — Primary above fold, secondary at bottom.
6. **Footer** — Unsubscribe, address, social links.
7. **Transitions** — Gradients, shape/line breaks, consistent backgrounds between sections.

**BrightKidCo Application:** Every BrightKidCo email should follow this anatomy. Hero should feature the key offer/product with a CTA. Bridge should include trust signals or product benefits. Product section with individual CTAs. Always end with general CTA.

---

### Framework 6: Visual Hierarchy Rules (from email-design-standards-and-template-build)

**Reverse Triangle Structure:** Wide attention (headline + image) → narrow to CTA

**Typography Scale:**
| Element | Mobile | Desktop | Weight |
|---------|--------|---------|--------|
| H1 / Headline | 24-32px | 32-48px | Bold |
| H2 / Subheadline | 20-24px | 24-32px | Semi-Bold |
| Body Copy | 16px min | 16-18px | Regular |
| CTA Button | 16-18px | 16-18px | Bold |
| Footer / Legal | 11-12px | 11-12px | Regular |

**Color Hierarchy:**
- Primary: Headlines, main CTAs, brand elements
- Secondary: Subheadlines, supporting elements
- Accent: CTAs, highlights, urgency indicators
- Neutral: Body copy, backgrounds, dividers
- **Contrast Rule:** CTA buttons must have minimum 4.5:1 contrast ratio

**BrightKidCo Application:** Use bright, high-contrast colors that appeal to parents. Headlines should be large and bold. CTAs should use brand accent color with 4.5:1 contrast. Body text 16px minimum for quick reading.

---

### Framework 7: CTA Optimization System (from email-cta-conversion-design)

**CTA Hierarchy of Impact:**
1. Placement — Is it visible without scrolling? (Highest impact)
2. Copy — Does it communicate a benefit or just an action?
3. Visual contrast — Does it stand out from everything else?
4. Size/tap target — Is it easy to tap on mobile?
5. Surrounding context — Does the layout guide the eye toward it?
6. Color — Does it signal urgency or calm?

**CTA Placement Rules:**
- Above the fold (mandatory) — 60-70% of clicks come from here
- Mid-email (optional, for long emails)
- Bottom/footer-adjacent (mandatory)

**CTA Copy Formula:** Action Verb + Benefit + (Optional) Urgency
- Good: "Get Hydrated" (benefit-driven)
- Good: "Shop 15% Off" (action + offer)
- Bad: "Shop Now" (forbidden — lazy, zero meaning)

**BrightKidCo Application:** Every email needs CTA above the fold + bottom. Use benefit-driven copy like "Get Their Favorites" or "Claim Your Discount." Never use "Shop Now." Buttons should be full-width on mobile, centered, 44px+ height.

---

### Framework 8: Image Strategy (from email-design-standards-and-template-build)

**Text-to-Image Ratio:** At least 40-60% text. Image-only emails trigger spam filters.

**Image Compression:**
- Hero images: 1200px width at 2x (600px display), compress to <100KB
- Product images: consistent sizing per row
- Total email weight: under 200KB (ideally under 100KB)
- Format: JPEG for photos (80-85% quality), PNG for graphics

**Image Slots (Universal Dimensions):**
| Image Type | Display | Export (2x) | Aspect | Format |
|------------|---------|-------------|--------|--------|
| Hero (full-width) | 600×400 | 1200×800 | 3:2 | JPEG |
| Product (grid) | 270×270 | 540×540 | 1:1 | JPEG/PNG |
| Product (single) | 300×300 | 600×600 | 1:1 | JPEG/PNG |
| Logo | 150×h | 300×2h | Variable | PNG transparent |
| Icon (feature) | 48×48 | 96×96 | 1:1 | PNG transparent |

**BrightKidCo Application:** Product images should be consistent 1:1 square crops. Hero images 600×400. All images compressed. Every image needs alt text. Use JPEG for product photos, PNG for logos/icons.

---

### Framework 9: Template System & Library (from email-template-library)

**7 Required Master Templates:**
1. Campaign Template — Promotional: hero, bridge, product section, CTA, footer
2. Welcome Flow Template — Brand intro, offer reveal, value props
3. Abandoned Cart Flow Template — Product reminder, urgency, CTA
4. Post-Purchase Flow Template — Thank you, cross-sell, social proof
5. Product Nurture Template — Educational layout with journey/step framework
6. Newsletter Template — Multi-content layout with article previews
7. Plain Text Template — Minimal design with simple text layout

**Template Variants:**
- Seasonal (holiday themes, color variants)
- Promotional (sale layouts, discount-focused)
- Educational (content-heavy, infographic sections)
- Launches (product spotlight, feature announcements)

**Naming Convention:** `{brand}-{type}-{variant}-v{number}` (e.g., `brightkidco-campaign-promo-v1`)

**BrightKidCo Application:** Build master templates for: Welcome flow (3 variants), Abandoned Cart, Product Launch, Bestseller, Post-Purchase. Use the naming convention for organization. Always test mobile + dark mode before saving.

---

### Framework 10: HTML Template Generator (from email-html-generator)

**Base Template Structure:**
- DOCTYPE: XHTML 1.0 Transitional
- Max width: 600px
- Background: #f4f4f4 (outer), #ffffff (inner)
- Font: Arial, Helvetica, sans-serif (system fonts only)
- MSO conditional comments for Outlook compatibility
- Dark mode CSS overrides
- Mobile media queries for stacking

**Content Block Macros:**
- `{{PRIMARY_COLOR}}` — Brand primary hex
- `{{CTA_COLOR}}` — Accent color for buttons
- `{{LOGO_URL}}` — CDN-hosted logo
- `{{BODY_CONTENT}}` — Paragraph blocks with h1/h2 tags
- `{{CTA_BUTTON}}` — Table-based button with border-radius:50px (pill shape)

**BrightKidCo Application:** Use the base template structure for all emails. Extract BrightKidCo brand colors and plug into macros. All CTAs use pill-shaped buttons (playful, kid-friendly).

---

### Framework 11: Conversion Layout Patterns (from email-cta-conversion-design)

**Pattern A — The CTA Tunnel:**
Logo → Hero Image → Headline → Single CTA Button → Footer. No distractions.
*Best for: Flash sales, product launches.*

**Pattern B — The Value Ladder:**
Hero + CTA → Value props → Press mentions → Testimonial → Bottom CTA. Start with action CTA, end with identity CTA ("Join Them").
*Best for: Welcome emails, cross-sells, higher AOV products.*

**Pattern C — The Product Gallery:**
Logo → "Shop the Look" → Product grid (2×2) → CTA. Products lead, CTA follows.
*Best for: Bestseller campaigns, visual catalogs.*

**Pattern D — The Narrative Arc:**
Hook → Solution → How it works (3 steps) → Testimonial → CTA.
*Best for: Educational emails, nurture flows, founder stories.*

**BrightKidCo Application:**
- Welcome flow: Pattern B (Value Ladder) — build trust before selling
- Flash sales: Pattern A (CTA Tunnel) — urgency, single focus
- Bestsellers: Pattern C (Product Gallery) — let products speak
- Educational content: Pattern D (Narrative Arc) — tell the story

---

## Visual Standards Extracted

### Standard 1: Email Dimensions
- Max width: 600px (industry standard, works across all clients)
- 2x export for Retina displays
- Figma artboard: 600px wide

### Standard 2: Button Specifications
- Height: 44px minimum (tap target), 48-56px recommended
- Width (mobile): Full-width (100%)
- Width (desktop): 220-300px auto-width, centered
- Padding: 14-16px vertical, 36-48px horizontal
- Border-radius: 4-6px (rounded) or 50% (pill)
- Font: 16-18px, Bold, white text on colored fill
- Pick ONE shape across all templates — never mix

### Standard 3: Typography Stack
- Safe sans: `Arial, Helvetica, sans-serif`
- Safe serif: `Georgia, 'Times New Roman', serif`
- NO custom fonts (fail in Gmail and Outlook)
- Body: 16px minimum
- Headlines: 24-32px mobile, 32-48px desktop

### Standard 4: File Size Targets
- Total HTML: <102KB (Gmail clips over 102KB)
- Individual image: <200KB
- Total email weight: <500KB
- Hero image: <150KB
- Number of images: <10

### Standard 5: Pre-Send QA Checklist
- Hero section has headline, visual, value prop, CTA above fold
- Reverse triangle hierarchy
- Branding consistent (colors, fonts, imagery)
- No "Shop Now" — CTAs are thematic and benefit-driven
- Single column on mobile
- Body font 16px minimum
- Full-width buttons on mobile
- All images have alt text
- Total image weight under 200KB
- 4.5:1 contrast ratio on CTAs
- Dark mode rendering verified

---

## Application to BrightKidCo

### Brand-Specific Recommendations

1. **Color Palette:** Use bright, kid-friendly colors. Primary color for CTAs, accent for urgency. Light backgrounds with high contrast for readability.

2. **Template Priority:**
   - Welcome Flow (3 variants) — first impression for new parents
   - Abandoned Cart — recover lost sales
   - Product Launch — showcase new kids' products
   - Bestseller — social proof driven
   - Post-Purchase — retention and cross-sell

3. **CTA Strategy:**
   - Use benefit-driven copy: "Get Their Favorites," "Claim Your Discount," "Find the Perfect Gift"
   - Never use "Shop Now"
   - Always above the fold + bottom
   - Full-width on mobile, centered pill-shaped buttons

4. **Image Strategy:**
   - Product images: 270×270px (1:1 square crop), consistent style
   - Hero images: 600×400px, lifestyle shots with kids
   - All images compressed under 100KB
   - Every image has descriptive alt text

5. **Dark Mode:**
   - All emails need dark mode meta tags
   - Logo swap for dark backgrounds
   - Keep CTA button colors unchanged in dark mode
   - Use #1a1a1a bg (not pure black) and #f5f5f5 text (not pure white)

6. **Mobile Optimization:**
   - Single column layout
   - 16px minimum body text
   - Full-width buttons
   - 44px+ tap targets
   - Test on 320px viewport

---

## Skills Summary

| Skill | Key Contribution | BrightKidCo Relevance |
|-------|-----------------|----------------------|
| email-design-master | Dark mode system, client compatibility matrix, Outlook hacks | All templates need dark mode + Outlook compatibility |
| email-design-standards-and-template-build | 3 Keys framework, layout anatomy, visual hierarchy, QA checklist | Core design principles for all BrightKidCo emails |
| email-template-library | 14 template specs, image dimensions, template selection guide | Ready-to-use templates for every email type |
| email-html-generator | Base HTML template, content block macros, brand color extraction | Foundation for building BrightKidCo templates |
| email-cta-conversion-design | CTA specs, placement rules, copy frameworks, conversion patterns | CTA optimization for maximum clicks |

---

*Skills loaded: 5/5. All design frameworks, template systems, and visual standards extracted. Ready for visual calibration per avatar level.*
