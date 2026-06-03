# LAYER 32 R3: Existing Email Prototype Patterns — Wiki Extraction

**Generated:** 2026-05-25
**Sources:** 12+ wiki/project files read and extracted
**Purpose:** All wiki and project content relevant to existing email prototype patterns, design standards, brand voice, and flow architecture for Layer 32 analysis.

---

## CATEGORY 1: Existing Email JSX Prototypes

### Source: `/root/projects/brightkidco/docs/bightkidco.com/BKCO - EMAIL MARKETING/`

The project contains **two complete JSX email prototype sets** (BKCO - EMAIL MARKETING and BKCO - EMAIL MARKETING-2) with identical structure. Each contains:

**Autistic Welcome Flow (Email 1):**
- File: `autistic-welcome/email-1.jsx` (446 lines, 13KB)
- Tone: "calm, slow, validating — no urgency, no caps, no shouty CTAs"
- Color palette: teal #2BAEB4, green #5DD07A, ink #1F3A3D, soft #4A6568, cream #FBF7F1, lilac #EEE8F6, mint #E8F5EC
- Font: Fraunces (serif display) + Inter (sans-serif body)
- Design pattern: Letter-style body with insight blocks, 3-step "different path" cards, parent testimonial quote, soft CTA
- Sign-off: "With you, The BrightKidCo team" (NOT Lena — prototype uses team voice)
- Preheader: "You are not failing. This is a different path."
- Key messaging: "You haven't done anything wrong" → sensory gap mechanism → 3 gentle steps

**Welcome Flow Emails 2-3 (Mechanism + Absolution):**
- File: `welcome-flow/emails-2-3.jsx` (302 lines, 12KB)
- Email 2: "The Mechanism — Body-Signal Explained" — heaviest info email, must be skimmable
  - Components: Diagram image, definition block (interoception), 4 sticker-style "why nothing worked" reasons, 3-card comparison (pull-ups vs regular vs body-signal), OT quote, soft product placement
- Email 3: "Why Everything Failed Before (Absolution)" — 4 method cards with promise/reality format
  - Components: 4 failed methods (timer, sticker chart, naked method, pull-ups), reframe "None of this is your fault", parent quote, product placement

**Welcome Flow Emails 4-5 (Product Reveal + Sarah's Story):**
- File: `welcome-flow/emails-4-5.jsx` (296 lines, 12KB)
- Email 4: "How the Product Works — Soft reveal" — first direct product intro, no discount
  - Components: Hero product shot, 3-layer explanation cards, "on your child's body" checklist, "in your day" checklist, sensory testimonial, objections Q&A, full product showcase with pricing (€34)
- Email 5: "Parent-to-Parent Deep Proof — Sarah's story" — full narrative arc
  - Components: Full-width portrait hero, 4-chapter story (timer phase → reward chart → low point → body-signal), pull-quote, promise badges, inline product reference

**Welcome Flow Email 6 (60-Day Guarantee):**
- File: `welcome-flow/email-6.jsx` (182 lines, 7.5KB)
- "The Invitation — 60-Day Calm Progress Guarantee" — risk-reversal as hero
- Components: SVG circular badge with "60 Calm Days", 3 guarantee points, "what's covered" checklist, product showcase, closing letter

**Flow 2 (Discount Welcome — 4 emails):**
- File: `welcome-flow/flow2-emails.jsx` (695 lines, 27KB)
- New primitives: CodeBlock (big copy-able discount code), ReminderBar ("code still valid · X days left")
- Email 1: Code delivery (BRIGHT10), product showcase, differentiation, "what comes next" timeline
- Email 2: Mechanism (interoception), 3-card comparison, OT quote, code reminder
- Email 3: Parent story (Sarah + Marcus), chapters, pull-quote, promise badges
- Email 4: Guarantee closer, 60-day seal, return testimonial (Priya K.)

**Flow 2 Content Data:**
- File: `welcome-flow/content-flow2.js` (230 lines, 10KB)
- Contains ALL copy data for Flow 2: subject lines (3 per email), preheaders, letter openings, mechanism definitions, comparison data, OT quotes, guarantee copy, code reminders
- Sender: "Lena" with role "Founder, BrightKidCo" (NOTE: inconsistent with DOC rules — Lena is Customer Support, not Founder)
- Discount code: BRIGHT10 (7 days, 10% off)
- Trustpilot reference: "4.9 · Trustpilot · 2,400+ reviews" (NOTE: DOC rules say NO Trustpilot links)

### Design System Patterns Found in JSX

**Layout Pattern (consistent across all emails):**
```
Preheader → Header (logo) → Hero Image → TitleBlock → Letter Opening →
Content Blocks (alternating BG colors) → Testimonial/Quote →
Product Showcase → CTA → Sign-off → Footer
```

**Component Library (from JSX):**
- `EmailShell` — wrapper with preheader, background
- `Header` — logo
- `FramedImage` / `ImgFrame` — hero images with labels
- `TitleBlock` — badge + h1 parts + optional subhead
- `Band` — color gradient transitions between sections
- `Letter` — letter-style opening paragraphs
- `Eyebrow` — small uppercase section labels
- `H2` — section headings (supports gradient text)
- `CTAClose` — CTA section with intro, button, fine print
- `Signoff` — Lena sign-off
- `OutLine` — outline/border element
- `Footer` — footer links
- `ProductShowcaseSoft` / `ProductShowcaseMedium` / `ProductShowcaseFull` — 3 tiers of product placement
- `CodeBlock` — discount code display (Flow 2 only)
- `ReminderBar` — code expiry reminder (Flow 2 only)

**Color System (from prototypes):**
- Teal: #2BAEB4 (primary accent)
- Green: #5DD07A (secondary accent)
- Ink: #1F3A3D (dark text)
- Soft: #4A6568 (body text)
- Cream: #FBF7F1 (background)
- Lilac: #EEE8F6 (calm sections)
- Mint: #E8F5EC (insight blocks)
- Yellow: #FFD866 (testimonial badges)

**Typography:**
- Display: Fraunces, Georgia, serif (headlines, quotes)
- Body: Inter, system-ui, sans-serif (body text)
- Mono: Courier New (discount codes)

**Design Tokens:**
- Border radius: 24-28px (cards), 999px (buttons/pills)
- Box shadow: `3px 3px 0 ${ink}` (bold, cartoonish), `4px 4px 0 ${ink}` (larger cards)
- Border: `2px solid ${ink}` (consistent)
- Section padding: 28-44px vertical, 14-44px horizontal

---

## CATEGORY 2: Flow Architecture (25 Flows, 110+ Emails)

### Source: `/root/projects/brightkidco/outputs/diagnosis/layer-16-flow-architecture.md` (1154 lines, 41KB)

**Complete system: 25 automated flows, 110+ unique emails, 3 phases over 6 months.**

| Phase | Timing | Flows | Emails | Purpose |
|-------|--------|-------|--------|---------|
| Phase 1 | Months 1-2 | 9 | 43 | Launch-Ready |
| Phase 2 | Months 3-4 | 8 | 34 | High-Value |
| Phase 3 | Months 5-6 | 8 | 33 | Nice-to-Have |

**Customer Lifecycle:**
```
Anonymous Visitor → Email Subscriber → Product Browser → Cart Adder →
Checkout Starter → First-Time Buyer → Repeat Buyer → VIP/Advocate
```

**Recovery Funnel Hierarchy:**
Site Abandonment (lowest) → Browse Abandonment → Cart Abandonment → Checkout Abandonment (highest intent)

**Avatar Segmentation:**
- Level-Segmented (4 variants each): Welcome Flow, PP-Extended Education, FAQ/Objection Library, Winback A, Winback B
- Cross-Level (DOC 5): All other flows
- Segmentation Rule: Before level tag known → Cross-Level; After → Level-specific; High-velocity flows → Cross-Level even if tag known

**Pop-Up Self-Selection (Entry Point):**
1. "Talks about potty but won't actually do it" → avatar_level1
2. "Sensory issues, tried many methods" → avatar_level2
3. "Non-verbal or high support needs" → avatar_level3
4. "Still figuring out what's going on" → avatar_general

**Klaviyo Profile Properties:**
- avatar_level: "level1" / "level2" / "level3" / "general"
- child_age, signup_source, welcome_flow_completed, last_purchase_pack_size, vip_customer

---

## CATEGORY 3: Brand Voice — Lena

### Source: `/root/projects/brightkidco/outputs/diagnosis/layer-09-voice-lena.md` (1031 lines, 51KB)

**Who Is Lena:**
- Name: Lena S., Customer Support, Mom of two autistic sons (ages 6 and 8)
- Voice type: Peer-to-peer — she IS the customer, not a brand representative
- NOT a founder, NOT a marketer, NOT a clinician

**Core Voice Formula:**
```
OBSERVATION → VALIDATION → MECHANISM → PERMISSION
```

**3 Non-Negotiable Principles:**
1. Peer, Not Brand
2. Validate Before You Solve
3. Autism Is Identity, Not Disease

**Voice Rules (V1-V24):**
- V1: Peer-to-peer, NEVER founder framing
- V2: Every mail ends with Lena sign-off (max 2-3 sentence body + max 2 lines P.S.)
- V3: Profile subtitle: "Customer Support · Mom of two autistic sons"
- V5: NEVER use: "easy", "simple", "quickly", "guaranteed", "miracle", "cure", "fix", "solve"
- V8: 60-day guarantee, never 30
- V10: Autism is identity, not disease
- V14: Realistic timelines ("weeks, not days")
- V16-V24: Extended rules (diagnosis-rejecters, partner pressure, financial reality, BCBA parents, regression, adult diapers, UK/AU locale, image alt-text, SMS)

**Sign-Off Variants:**
- Short (E1-2): "Talk soon, Lena · Customer Support · Mom of two autistic sons"
- Medium (E3-5): "With understanding, Lena · ..."
- Long (E6+): "With care, Lena · ... P.S. My older son was 8 before we figured this out..."

**Phase-Specific Voice:**
- Phase 1: Education-oriented, gentle, Pre-K driven (70% hope)
- Phase 2: Science-first, mechanism specificity, BCBA-respectful (40% hope)
- Phase 3: Dignity-first, respectful, no urgency (20% hope)
- Phase 4: Gentle, no energy push, "Late is not never"

---

## CATEGORY 4: Brand Constants

### Source: `/root/projects/brightkidco/archive-20260523-1139/diagnosis/layer-38-brand-constants.md` (370 lines, 17KB)

**Pricing:**
- 1 Pair: $34.99
- 3+3 Bundle (BESTSELLER): $79.99 + FREE Shipping
- 5+5 Bundle: $119.99 + FREE E-Book + Targets + Chart + Shipping

**Guarantee:** 60-Day Money Back (NEVER 30) — NOTE: Website currently shows 30 days (discrepancy)

**Reviews:** 16,511 reviews · 4.9 ★ · 100,000+ parents trust BrightKidCo
- NOTE: Trustpilot page EXISTS (2,666 reviews) but docs say NO Trustpilot links

**Sender:**
- From: "Lena from BrightKidCo" <support@brightkidco.com>
- Sending subdomain: Send.brightkidco.com

**Font:** Questrial weight 400 ONLY (never bold for body)

**Colors:**
- Brand Green: #039902
- Mint: #DBFFCD
- Cream: #FBF7EB / #FAF5E8
- Yellow: #F5C84B / #F5CB5C
- Gray: #9AA8A7

**Footer Links (exact order):** Shop · Parent Stories · Contact us · FAQ

**Social:** Instagram + TikTok (NO Facebook)

**Research Stats:**
- 49% of autistic 4-5 year olds not toilet-trained (SPARK study)
- Kelly Mahler interoception research

**Discount Code:** 10%OFF-BKCO (DOC6) — NOTE: Task spec says WELCOME10 (discrepancy needs resolution)

**Format Specs (from Layer 33):**
- Max email width: 600px
- CTA button: min 48px height, 50px border-radius (pill)
- Side padding: 20-40px
- Section spacing: 48-64px
- Card border radius: 12-16px
- Subject line: 30-50 chars optimal
- Preheader: 40-90 chars

---

## CATEGORY 5: Strategy Brief (Brand Foundation)

### Source: `/root/projects/brightkidco/archive-20260523-1139/strategy/brand-brief.md` (398 lines, 15KB)

**Brand Identity:**
- Brand: BrightKidCo (brightkidco.com)
- Product: Training underwear for autistic children & kids with sensory differences
- Product Name: "Body-Signal Learning Layer™" (always with trademark)
- Voice Persona: "Lena" — Customer Support, Mom of two autistic sons

**4 Avatar Levels:**
| Level | Age | Audience % | Hope Level |
|-------|-----|------------|------------|
| Level 1 | 3-5 yrs | ~35% | 70% hope |
| Level 2 | 5-7 yrs | ~40% (LARGEST) | 40% hope |
| Level 3 | 6-10+ yrs | ~25% | 20% hope |
| General | Mixed | ~50% real volume | 50/50 |

**5 Big Conversion Levers (ORDER IS NON-NEGOTIABLE):**
1. "It's not the method. It's a sensory gap."
2. "Pull-ups make this worse"
3. "Try it for 60 days. By your judgment."
4. "I have two autistic sons" (Lena's Voice)
5. "49% of autistic 4-5 year olds are not toilet trained"

**4 Emotional Phases:**
1. Slow Realization (2.5-3.5 yrs) — Low skepticism, high hope
2. First Real Attempt (3-4 yrs) — Medium skepticism
3. Method Cycling (4-6 yrs) — Very high skepticism
4. Resignation Fork (6+ yrs) — Deep, calm skepticism

**10 Failed Methods:** Sticker Charts, Oh Crap, Timer-Based, Social Stories, ABA-Based, Special Potty Seats, Naked Method, Pull-Ups, Punishment/Shaming, "Just Wait"

**RS Integration Rule:** 30-50% authentic verbatim language, 30-50% Lena's voice, 10-20% mechanism/brand language. Each mail MUST contain 2-4 authentic verbatim quotes from RS PDFs. NEVER invent quotes.

**Mail Output Format:**
- Subject Lines (3 A/B test ready)
- Preheaders (3)
- Mail Body (structured by sections)
- Lena Sign-Off (2-3 sentences)
- Mobile-First Notes
- Klaviyo Implementation Notes

---

## CATEGORY 6: Wiki Memory Drops (Project Context)

### Source: `/root/wiki/skills-tools/memory-drops/`

**BrightKidCo Project Context:**
- `/root/wiki/skills-tools/memory-drops/brightkidco-project-rootprojectsbrightkidco-email-mar--20260523-112608.md`
  - "BrightKidCo project: /root/projects/brightkidco/ — email marketing system for Giuliano's brand selling training underwear for autistic children. 3,460-line execution plan at overnight-plan.md. Client is high-pressure, day 2 of engagement."

- `/root/wiki/skills-tools/memory-drops/brightkidco-is-a-dtc-ecommerce-brand-for-wiki-ingestion-ex--20260523-173000.md`
  - "BrightKidCo is a DTC ecommerce brand. For wiki ingestion, EXCLUDE: cold email, client acquisition, sales, operations. These are not relevant for DTC ecommerce email marketing."

### Source: `/root/wiki/about-me/brightkidco-project-overview.md`
- Client: Giuliano (German, Bangkok-based)
- Brand: BrightKidCo — training underwear for autistic children
- Klaviyo email marketing
- Sending subdomain: Send.brightkidco.com
- 145 source files, 46 text extractions (5.6MB) in docs/extracted/

---

## CATEGORY 7: Design Canvas System

### Source: `/root/projects/brightkidco/docs/bightkidco.com/BKCO - EMAIL MARKETING/design-canvas.jsx` (622 lines, 31KB)

A Figma-like design canvas wrapper built in React for previewing email artboards:
- Pan/zoom viewport (trackpad pinch, mouse wheel, drag)
- Sections with editable titles and reorderable artboards
- Focus overlay for fullscreen artboard viewing (←/→ navigation, Esc to exit)
- State persists to `.design-canvas.state.json` sidecar
- Grid background, post-it notes, inline editing

This is the presentation layer for the email prototypes — it's how the JSX email designs are viewed and arranged in a design-tool-like interface.

---

## CATEGORY 8: Tenza Marketing Wiki (Email Design References)

### Redirected/Sparse Content

Several Tenza marketing wiki files reference email design but are redirects or sparse:

- `/root/wiki/tenza-marketing/__enqueued__/tenza-email-design-system-rules.md` — Redirect to `spiritual/_holding/schema-design`
- `/root/wiki/tenza-marketing/__enqueued__/tenza-brand-voice-rules.md` — Redirect to `tenza-pop-ups`
- `/root/wiki/tenza-marketing/__enqueued__/tenza-email-design-three-pillars.md` — Redirect to `skills-tools/ai-tools/miro-content-pillarspdf`
- `/root/wiki/tenza-marketing/__enqueued__/tenza-email-mobile-first-design.md` — Exists but not read (Tenza-specific, not BrightKidCo)

Other Tenza email files exist (cold email, deliverability, Shopify migration) but are NOT relevant to BrightKidCo DTC email patterns per the wiki memory drop: "EXCLUDE: cold email, client acquisition, sales, operations."

---

## DISCREPANCIES & GAPS IDENTIFIED

1. **Prototype vs DOC Voice Mismatch:** JSX prototypes use "The BrightKidCo team" sign-off (Email 1) and "Lena" as "Founder" (Flow 2). DOC rules specify Lena as "Customer Support · Mom of two autistic sons" and NEVER founder framing.

2. **Prototype vs DOC Trustpilot:** Flow 2 content references "Trustpilot · 2,400+ reviews". DOC rules say NO Trustpilot links.

3. **Prototype vs DOC Color Palette:** JSX prototypes use a different color system (teal #2BAEB4, green #5DD07A, lilac #EEE8F6) than the brand constants (Brand Green #039902, Mint #DBFFCD, Cream #FBF7EB). The prototypes appear to be a more refined/pastel palette vs the brand's primary colors.

4. **Prototype vs DOC Font:** JSX uses Fraunces + Inter. DOC specifies Questrial weight 400 ONLY.

5. **Prototype Pricing:** JSX shows €34 (Euro). DOC specifies $34.99 (USD).

6. **Discount Code Discrepancy:** Flow 2 uses BRIGHT10. DOC6 says 10%OFF-BKCO. Task spec says WELCOME10.

7. **Guarantee Period:** Website shows 30 days. All docs say 60 days.

8. **Missing Wiki Content:** No dedicated email-marketing/ or brand-voice/ wiki directories exist. Email knowledge is scattered across: project docs, diagnosis outputs, memory drops, and Tenza marketing (mostly irrelevant redirects).

---

## FILES READ (12 total)

1. `/root/wiki/about-me/brightkidco-project-overview.md` — Project overview
2. `/root/wiki/skills-tools/memory-drops/brightkidco-project-rootprojectsbrightkidco-email-mar--20260523-112608.md` — Project context
3. `/root/wiki/skills-tools/memory-drops/brightkidco-is-a-dtc-ecommerce-brand-for-wiki-ingestion-ex--20260523-173000.md` — Scope definition
4. `/root/projects/brightkidco/archive-20260523-1139/strategy/brand-brief.md` — Brand strategy brief
5. `/root/projects/brightkidco/outputs/diagnosis/layer-16-flow-architecture.md` — Flow architecture (25 flows)
6. `/root/projects/brightkidco/outputs/diagnosis/layer-09-voice-lena.md` — Lena voice rulebook
7. `/root/projects/brightkidco/archive-20260523-1139/diagnosis/layer-38-brand-constants.md` — Brand constants
8. `/root/projects/brightkidco/docs/bightkidco.com/BKCO - EMAIL MARKETING/autistic-welcome/email-1.jsx` — Email 1 prototype
9. `/root/projects/brightkidco/docs/bightkidco.com/BKCO - EMAIL MARKETING/welcome-flow/emails-2-3.jsx` — Emails 2-3 prototypes
10. `/root/projects/brightkidco/docs/bightkidco.com/BKCO - EMAIL MARKETING/welcome-flow/emails-4-5.jsx` — Emails 4-5 prototypes
11. `/root/projects/brightkidco/docs/bightkidco.com/BKCO - EMAIL MARKETING/welcome-flow/email-6.jsx` — Email 6 prototype
12. `/root/projects/brightkidco/docs/bightkidco.com/BKCO - EMAIL MARKETING/welcome-flow/flow2-emails.jsx` — Flow 2 prototypes (4 emails)
13. `/root/projects/brightkidco/docs/bightkidco.com/BKCO - EMAIL MARKETING/welcome-flow/content-flow2.js` — Flow 2 copy data
14. `/root/projects/brightkidco/docs/bightkidco.com/BKCO - EMAIL MARKETING/design-canvas.jsx` — Design canvas system
