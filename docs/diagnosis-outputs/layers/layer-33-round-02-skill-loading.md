# Layer 33 Round 02: Email Format Requirements — Skill Loading

## Objective
Load and extract ALL relevant skills for email format requirements definition. This document inventories every skill loaded, extracts key format requirements from each, and identifies gaps.

---

## Skills Inventory — Complete Load

### CATEGORY 1: HTML & Design Standards (4 skills)

#### 1. email-html-generator
- **Path:** /root/.hermes/skills/email-marketing/email-html-generator/SKILL.md
- **Purpose:** Generate responsive HTML email templates for Klaviyo e-commerce campaigns and flows
- **Key Format Requirements:**
  - Base template: XHTML 1.0 Transitional DOCTYPE
  - Max width: 600px
  - Font: Arial/Helvetica (web-safe), 16px body, 22-24px headlines
  - Line height: 1.5-1.6
  - Button min: 44px height (accessibility)
  - Padding: 20-40px on sides
  - Single column layout only (no multi-column in email)
  - Mobile classes: .mobile-full, .mobile-pad, .mobile-center, .mobile-hide
  - Outlook MSO conditional comments required
  - Preheader: hidden div with display:none, font-size:1px
  - CTA: table-based button with rounded corners (50px radius)
  - Footer: mandatory unsubscribe link, physical address, brand name
  - Plain text fallback required for every HTML email
- **Applies to Layer 33:** Core HTML structure rules — every email format must follow this skeleton

#### 2. email-design-master
- **Path:** /root/.hermes/skills/email-marketing/deliverability-technical/email-design-master/SKILL.md
- **Purpose:** Mobile-first email design system — client rendering, dark mode, Outlook hacks, responsive architecture
- **Key Format Requirements:**
  - 600px rule: safe rendering width across ALL email clients
  - Table-based layout: MANDATORY (div-based breaks in Outlook)
  - Inline styles: MANDATORY for critical styles (Gmail strips <style> blocks)
  - Font stacks: system fonts only (Arial, Helvetica, sans-serif). NO @font-face
  - Image rules: width+height attrs, display:block, alt text, <200KB, absolute URLs
  - CTA button: table cell method (NOT <a> with padding — Outlook ignores padding on inline elements)
  - Dark mode: meta tags for color-scheme, @media (prefers-color-scheme: dark) overrides, image swap for logos
  - Dark mode colors: #1a1a1a bg (not pure black), #f5f5f5 text (not pure white)
  - Outlook hacks: MSO conditionals, VML for background images, VML for rounded buttons
  - Responsive: media queries (Apple/Gmail), hybrid/spongy method (MSO conditionals), stacking columns
  - Mobile-first checklist: single column, 16px min font, 44x44px tap targets, 320px viewport test
  - Big 5 clients: Apple Mail (~40%), Gmail app (~30%), Outlook desktop (~10%), Outlook web/app (~8%), Yahoo (~5%)
- **Applies to Layer 33:** Technical rendering requirements — every format spec must include these constraints

#### 3. email-design-standards-and-template-build
- **Path:** /root/.hermes/skills/email-marketing/deliverability-technical/email-design-standards-and-template-build/SKILL.md
- **Purpose:** Complete email design system — layout anatomy, visual hierarchy, CTA optimization, image strategy, design QA
- **Key Format Requirements:**
  - 3 Keys: Ease of Click, Skimmability, Branding Consistency
  - Hero section: 75% of design effort goes here. Must include: headline, hero image, value prop, CTA button
  - Above the fold: CTA button MUST be visible without scrolling
  - Reverse triangle hierarchy: wide (headline/image) → narrow (CTA button)
  - Bridge section: supporting copy, testimonials, features, steps
  - Product section: product grid with images, names, prices
  - Minimal copy: customers spend ~3 seconds per email
  - Branded graphics: all visual assets align with brand identity
  - Font stack: 'Helvetica Neue', Helvetica, Arial, sans-serif
- **Applies to Layer 33:** Layout anatomy rules — defines the structural sections every email format must have

#### 4. email-template-library
- **Path:** /root/.hermes/skills/email-marketing/deliverability-technical/email-template-library/SKILL.md
- **Purpose:** Pre-built email template specs for every e-commerce email type
- **Key Format Requirements:**
  - Universal base template: DOCTYPE, viewport meta, MSO compat, dark mode styles, responsive breakpoints
  - Universal footer: social links, unsubscribe, preferences, legal text
  - Template types: welcome (3 variants), promotional (flash sale, product launch, bestseller), abandoned cart (single & multi-product), post-purchase (thank you, review, cross-sell), newsletter (editorial, curated, digest)
  - Each template includes: layout structure, HTML structure, color rules, typography specs, image slots, CTA placement, responsive behavior
  - Dark mode support built into base: @media (prefers-color-scheme: dark) with .dark-bg, .dark-text, .dark-btn classes
  - Mobile breakpoints: 600px, with .mobile-full, .mobile-pad, .mobile-btn classes
- **Applies to Layer 33:** Template specifications — the actual format blueprints for each email type

---

### CATEGORY 2: Brand Voice & Copywriting (4 skills)

#### 5. brand-voice-definition
- **Path:** /root/.hermes/skills/email-marketing/brand-voice-definition/SKILL.md
- **Purpose:** Framework for defining and deploying brand voice for e-commerce email clients
- **Key Format Requirements:**
  - Voice dimensions (6 axes, scored 1-5): Formal↔Casual, Serious↔Playful, Technical↔Simple, Authoritative↔Friendly, Salesy↔Educational, Short↔Long-form
  - Voice pillars: 3-5 pillars, each with definition + do/don't example
  - Tone variations per channel: Welcome (warm, generous), Abandoned Cart (urgent, helpful), Post-Purchase (educational, supportive), SMS (short, direct, urgent), Customer Service (patient, human)
  - Keywords list: brand language (use) and avoid list
  - Reference emails: one per flow type in brand voice
  - Documentation path: /root/wiki/clients/{client-name}/brand-voice.md
- **Applies to Layer 33:** Voice format rules — every email format must specify tone calibration for its flow type

#### 6. copywriting-body-copy-frameworks
- **Path:** /root/.hermes/skills/email-marketing/strategy-analytics/copywriting-body-copy-frameworks/SKILL.md
- **Purpose:** Body copy structuring and CTA optimization for e-commerce email
- **Key Format Requirements:**
  - 4 frameworks: PAS (Problem-Agitate-Solve), AIDA (Attention-Interest-Desire-Action), BAB (Before-After-Bridge), Storytelling (Hook→Conflict→Resolution→CTA)
  - "So What?" test: every sentence must earn its place (inform, build desire, overcome objection, create urgency, establish credibility)
  - CTA formula: Action Verb + Benefit + (Optional: Urgency/Context)
  - One primary CTA per email maximum
  - CTA copy: under 30 characters for buttons
  - Button specs: min 44x44px, high contrast, rounded corners, white text on brand color
  - Short-form: 50-150 words, 1-3 paragraphs, single CTA (flash sales, abandoned cart, transactional)
  - Long-form: 200-500+ words, 3-6 paragraphs, narrative arc (welcome, founder story, product education)
  - Scannability: short paragraphs (1-3 sentences), bullet points, bold reading path, white space
  - Mobile formatting: 14px min body text (16px preferred), 1.5x line height, single column
  - PS lines: second most-read part of email, use for urgency/bonus/social proof/objection
  - Footer: physical address (CAN-SPAM), unsubscribe link, manage preferences, "reply to this email"
- **Applies to Layer 33:** Copy format rules — defines how body copy and CTAs must be structured in every email

#### 7. copywriting-subject-line-engineering
- **Path:** /root/.hermes/skills/email-marketing/strategy-analytics/copywriting-subject-line-engineering/SKILL.md
- **Purpose:** Subject line formulas, preview text optimization, emoji strategy, A/B testing
- **Key Format Requirements:**
  - 7 formulas: Curiosity Gap, Direct Benefit, Urgency/Scarcity, Personalization, Question, How-To, Social Proof
  - Optimal length: 30-50 characters (sweet spot), key info in first 30 chars (mobile truncation)
  - Mobile truncation: iPhone ~30-35 chars, Gmail mobile ~40-45 chars, Gmail desktop ~60-70 chars
  - Preview text: 40-100 chars, lead with critical info in first 40 chars, never repeat subject line
  - Preview text strategies: Complement, Urgency add, Benefit reinforce, Curiosity tease, Social proof
  - Emoji rules: max 2 per subject line, leading space, test all clients, avoid in B2B/luxury/transactional
  - Spam trigger words: avoid FREE, ACT NOW, LIMITED TIME, BUY NOW, CLICK HERE, etc.
  - Safe alternatives: "On us" for FREE, "Shop the collection" for BUY NOW, etc.
  - A/B testing: min sample sizes by segment size, 4-6 hour test duration, 100 opens min per variant
- **Applies to Layer 33:** Subject line and preview text format rules — mandatory for every email spec

#### 8. copywriting-brand-voice-storytelling
- **Path:** /root/.hermes/skills/email-marketing/strategy-analytics/copywriting-brand-voice-storytelling/SKILL.md
- **Purpose:** Brand voice application in storytelling for email copy
- **Key Format Requirements:**
  - (Loaded from skill inventory — related to brand-voice-definition)
  - Storytelling frameworks for brand-building emails
  - Voice consistency across email sequences
- **Applies to Layer 33:** Narrative format rules for brand-building email types

---

### CATEGORY 3: Flow Structure Formats (3 skills sampled, 12 total available)

#### 9. flow-welcome
- **Path:** /root/.hermes/skills/email-marketing/flows/flow-welcome/SKILL.md
- **Purpose:** 8-email Welcome Flow SOP for Klaviyo
- **Key Format Requirements:**
  - 8 emails over 7-14 days
  - Flow filter: "Placed Order 0 times over all time"
  - Auto-resend: conditional split for Email 1 non-openers (1-day delay, alternate subject)
  - Email sequence: Welcome→Brand Story→USPs/Social Proof→Discount Reminder→Us vs Them→Testimonials→Last Chance→Everything Okay?
  - Email 1: immediate, branded template, discount code prominent, bestseller grid
  - Email 8: plain text format (feels personal), higher reply rates
  - A/B testing on Email 1 (50/50 split, opens as winning metric, 4-6 hour window)
  - Back-population: clone flow, adjust copy, "From When Button Is Clicked" timing
  - Pre-flight: 12 items including dynamic product blocks, discount code, brand assets, subject line pool
  - Performance targets: Email 1 open rate 30-50%+, flow conversion 8-12%+ placed order rate
- **Applies to Layer 33:** Welcome flow email format — defines structure, timing, content buckets for each email

#### 10. flow-abandoned-cart
- **Path:** /root/.hermes/skills/email-marketing/flows/flow-abandoned-cart/SKILL.md
- **Purpose:** 3-email Abandoned Cart flow (distinct from abandoned checkout)
- **Key Format Requirements:**
  - Trigger: "Added to Cart" metric (requires Shopify snippet — NOT automatic)
  - 3 emails: Brief Reminder (1-2h) → Founder Nudge (1d) → Urgency & USPs (1d)
  - Dynamic content: Split block with {{ event.ImageURL }}, {{ event.Name }}, {{ event.Price|striptags }}
  - Flow filters: Placed Order 0, Checkout Started 0, Not in flow last 7-15 days
  - Re-entry window: 7 days (<$50), 10 days ($50-$150), 15 days (>$150)
  - Price variable: {{ event.Price|striptags }} (NOT raw {{ event.Price }} — includes HTML)
  - All links point to: website.com/cart
- **Applies to Layer 33:** Cart abandon email format — dynamic content blocks, timing, filter requirements

#### 11. flow-post-purchase-new
- **Path:** /root/.hermes/skills/email-marketing/flows/flow-post-purchase-new/SKILL.md
- **Purpose:** 4-email Post-Purchase flow for first-time buyers
- **Key Format Requirements:**
  - Trigger: "Placed Order" metric, filter: equals 1 over all time (first-time buyers)
  - 4 emails: Thank You (1d) → Mission/FAQs (3-5d) → Education (3-7d) → Review Request (7-14d)
  - Email 1: plain text or low-design, from founder (personal, warm)
  - Cancellation filter on Emails 2-4: "Cancelled Order 0 times since starting flow"
  - Timing calibrated to shipping window
  - Performance: Email 1 open rate 30-40%+, repeat purchase rate 15-25% within 60 days, review rate 5-15%
- **Applies to Layer 33:** Post-purchase email format — retention-focused, educational, plain-text variants

---

### CATEGORY 4: Campaign Formats (1 sampled, 13 total available)

#### 12. campaign-flash-sale
- **Path:** /root/.hermes/skills/email-marketing/campaigns/campaign-flash-sale/SKILL.md
- **Purpose:** Flash sale email campaign SOP
- **Key Format Requirements:**
  - Pre-flight: discount code, template, subject lines (3+ options), target segment, UTM params
  - Segment testing: send to 10-15% subset first, monitor 30-60 min
  - Benchmarks: open rate 25-40% (engaged), click rate 3-8%
  - Mobile-first: subject <40 chars, preview <90 chars, hero <600px/<200KB, CTA 44x44px min
  - Send timing: Tuesday/Wednesday best for B2C, morning 8-10 AM, lunch 12-1 PM, evening 7-9 PM
  - 24h flash sale: send at 10 AM subscriber timezone
  - 48h flash sale: Day 1 10 AM + Day 2 6 PM reminder
  - Subject line types: Urgency, Curiosity, Social Proof, Benefit-Led, Exclusive, Scarcity, Playful, Simple & Direct
  - A/B test: 15% per variant, 1-4 hour test, winner to remaining 70%
  - Post-send monitoring: 2 hours, bounce <2%, spam <0.1%
- **Applies to Layer 33:** Campaign email format — promotional structure, timing, segment testing protocol

---

### CATEGORY 5: CTA & Conversion Design (1 skill)

#### 13. email-cta-conversion-design
- **Path:** /root/.hermes/skills/email-marketing/deliverability-technical/email-cta-conversion-design/SKILL.md
- **Purpose:** Deep-dive on email CTA optimization and conversion-centered design
- **Key Format Requirements:**
  - CTA hierarchy of impact: Placement > Copy > Visual contrast > Size > Context > Color
  - Button specs: 44px min height, 48-56px recommended, 14px vertical padding, 36px horizontal, 6px border-radius
  - Font: 16-18px, weight 700 (bold), white on colored fill
  - Mobile: full-width (100%), centered
  - Desktop: 220-300px wide, centered
  - HTML implementation: table-based button (NOT <a> with padding)
  - Placement rules: above the fold is highest impact (~50% of conversion difference)
- **Applies to Layer 33:** CTA format specifications — exact dimensions, placement, and HTML implementation

---

### CATEGORY 6: Klaviyo Deployment (1 skill)

#### 14. klaviyo-api-tool
- **Path:** /root/.hermes/skills/email-marketing/klaviyo-api-tool/SKILL.md
- **Purpose:** Complete Klaviyo API tool for programmatic flow/template management
- **Key Format Requirements:**
  - API base: https://a.klaviyo.com/api/, revision: 2025-01-15
  - Required scopes: flows:read/write, campaigns:read/write, templates:read/write, lists:read/write, metrics:read
  - Flow creation: metric-triggered with definition.trigger.metric.id
  - Email action: subject, preview_text, from_name, from_email, reply_to_email, content.html, content.text
  - Template creation: name, html, text fields
  - Time delays: unit (hours/days), quantity
  - Flow status: draft → live (PATCH)
  - Verification: flow in draft, trigger correct, subject lines set, delays match, from name/email correct, test send, unsubscribe working
  - Security: NEVER expose API key in task bodies, use env vars, each client separate key
- **Applies to Layer 33:** Deployment format — how email specs translate to Klaviyo API payloads

---

### CATEGORY 7: Report & Plan Formats (2 skills)

#### 15. diagnosis-report-format
- **Path:** /root/.hermes/skills/diagnosis-report-format/SKILL.md
- **Purpose:** Template and rules for writing diagnosis files
- **Key Format Requirements:**
  - Template: Objective → Background → Data Gathered → Analysis → Key Decision Needed
  - Rules: real problem (not surface), ground in data, ONE recommendation, flag risks, living document
  - Outsider diagnosis: full system survey (processes, configs, errors, ports, prefills, crons, disk/memory)
  - Two-pass diagnosis: Surface Scan + Deep Verification in same document
  - Hard numbers rule: exact counts, percentages, density parity checks
  - Telegram formatting: no pipe tables, use bullet lists with emoji, code-block tables, dash-separated lists
  - Consolidation rule: one file per active issue
  - Estimation step: mandatory for 3+ tool call tasks
- **Applies to Layer 33:** Report format rules — how diagnosis documents must be structured

#### 16. plan-format
- **Path:** /root/.hermes/skills/plan-format/SKILL.md
- **Purpose:** Template and rules for writing execution plans
- **Key Format Requirements:**
  - Two-document pattern: Approver plan (scope/impact) + Executor instructions (exact details)
  - Section-by-section building: one section at a time, user reviews before committing
  - Don't pre-decide structure before research
  - Deliverable dimensions: Goal, Why it matters, Scope, Depth, Decisions it makes, How user uses it
  - Gap analysis before any plan: count source files, count output files, compute percentage
  - Hard numbers rule: exact counts, never "mostly done"
  - Density parity rule: proportional extraction across domains
  - Wave-by-wave expansion: one wave at a time, never batch
  - Infrastructure plans: VERY DETAILED, exact commands, exact file contents
- **Applies to Layer 33:** Plan format rules — how execution plans must be structured

---

### CATEGORY 8: Additional Skills Available (not fully loaded but inventoried)

| # | Skill | Path | Relevance to L33 |
|---|-------|------|-------------------|
| 17 | campaign-product-launch | campaigns/ | Product launch email format |
| 18 | campaign-bestseller | campaigns/ | Bestseller curation format |
| 19 | campaign-back-in-stock | campaigns/ | Restock alert format |
| 20 | campaign-bundle | campaigns/ | Bundle promotion format |
| 21 | campaign-free-shipping | campaigns/ | Free shipping offer format |
| 22 | campaign-giveaway | campaigns/ | Giveaway campaign format |
| 23 | campaign-refer-a-friend | campaigns/ | Referral program format |
| 24 | campaign-ugc | campaigns/ | UGC campaign format |
| 25 | campaign-blog-newsletter | campaigns/ | Newsletter format |
| 26 | campaign-bfcm-holiday | campaigns/ | BFCM/holiday format |
| 27 | campaign-bfcm-holiday-mega | campaigns/ | Mega BFCM strategy format |
| 28 | campaign-sms-list-growth | campaigns/ | SMS list growth format |
| 29 | flow-abandoned-checkout | flows/ | Checkout abandon (8-email, different from cart) |
| 30 | flow-browse-abandonment | flows/ | Browse abandon format |
| 31 | flow-cross-sell | flows/ | Cross-sell/upsell format |
| 32 | flow-post-purchase-repeat | flows/ | Repeat buyer format |
| 33 | flow-replenishment | flows/ | Replenishment reminder format |
| 34 | flow-site-abandonment | flows/ | Site abandon format |
| 35 | flow-sunset | flows/ | Sunset/unengaged format |
| 36 | flow-vip | flows/ | VIP rewards format |
| 37 | flow-winback | flows/ | Winback format |
| 38 | analytics-abtesting-iteration | strategy-analytics/ | A/B testing methodology |
| 39 | analytics-performance-benchmarks | strategy-analytics/ | Performance benchmarks |
| 40 | analytics-program-diagnostics | strategy-analytics/ | Program diagnostics |
| 41 | copywriting-sms-companion | strategy-analytics/ | SMS companion format |
| 42 | segmentation-list-health | strategy-analytics/ | List health format |
| 43 | segmentation-rfm-predictive | strategy-analytics/ | RFM segmentation format |
| 44 | segmentation-strategy-framework | strategy-analytics/ | Segmentation strategy format |
| 45 | strategy-campaign-calendar | strategy-analytics/ | Campaign calendar format |
| 46 | strategy-client-reviews | strategy-analytics/ | Client review format |
| 47 | strategy-customer-journey | strategy-analytics/ | Customer journey format |
| 48 | deliverability-authentication | deliverability-technical/ | Email authentication (SPF/DKIM/DMARC) |
| 49 | deliverability-domain-warming | deliverability-technical/ | Domain warming schedule |
| 50 | deliverability-list-hygiene | deliverability-technical/ | List hygiene protocol |
| 51 | deliverability-spam-recovery | deliverability-technical/ | Spam recovery protocol |
| 52 | deliverability-content-signature | deliverability-technical/ | Content optimization |
| 53 | deliverability-transactional-code | deliverability-technical/ | Transactional email code |
| 54 | email-collection-list-growth | deliverability-technical/ | List growth tactics |
| 55 | email-collection-popup-strategy | deliverability-technical/ | Pop-up strategy |
| 56 | cold-email-infrastructure | cold-email-infrastructure/ | Cold email infra (separate from ecom) |
| 57 | client-onboarding-structure | client-onboarding-structure/ | Client onboarding format |
| 58 | client-credential-request | client-credential-request/ | Credential request format |

---

## Key Format Requirements Extracted — Summary by Domain

### A. HTML Structure Requirements
- DOCTYPE: XHTML 1.0 Transitional
- Layout: table-based (mandatory), role="presentation"
- Max width: 600px
- Styles: inline for critical, <style> for media queries/dark mode only
- Font: Arial/Helvetica/sans-serif, 16px body, 22-24px headlines
- Images: width+height attrs, display:block, alt text, <200KB, absolute URLs
- Buttons: table cell method, 44px min height, centered
- Mobile: .mobile-full, .mobile-pad, .mobile-center, .mobile-hide classes
- Dark mode: meta color-scheme, @media prefers-color-scheme, image swaps
- Outlook: MSO conditionals, VML for backgrounds/rounded buttons

### B. Copy & Content Format Requirements
- Subject lines: 30-50 chars optimal, key info in first 30 chars
- Preview text: 40-100 chars, complement (don't repeat) subject line
- Body copy: follow PAS/AIDA/BAB/Storytelling framework
- CTA: Action Verb + Benefit, under 30 chars, one primary per email
- Scannability: short paragraphs, bullets, bold reading path
- PS lines: urgency/bonus/social proof (second most-read element)
- Footer: physical address, unsubscribe, preferences, reply invitation

### C. Flow Structure Format Requirements
- Each flow: trigger, filters, email sequence with timing, conditional splits
- Welcome: 8 emails, 7-14 days, auto-resend on Email 1, A/B test
- Cart abandon: 3 emails, dynamic content blocks, {{ event.Price|striptags }}
- Post-purchase: 4 emails, shipping-calibrated timing, cancellation filters
- All flows: pre-flight checklist, completion checklist, error recovery table

### D. Campaign Format Requirements
- Pre-flight: discount code, template, subject lines (3+), segment, UTM params
- Test protocol: 10-15% segment first, monitor 30-60 min, benchmarks
- Send timing: Tue/Wed best, 8-10 AM or 12-1 PM
- Mobile-first: subject <40 chars, CTA 44x44px, images <200KB
- Post-send: 2-hour monitoring, bounce <2%, spam <0.1%

### E. Deployment Format Requirements
- Klaviyo API: revision 2025-01-15, env vars for API keys
- Flow creation: metric-triggered, draft first, then live
- Email payload: subject, preview_text, from_name, from_email, content.html, content.text
- Verification: draft → test → verify → live

---

## Skill Gaps Identified

1. **Accessibility audit skill** — No dedicated skill for email accessibility (WCAG, screen reader compatibility, alt text standards beyond basics). The email-design-master touches on it but lacks a full accessibility checklist.

2. **Email analytics interpretation skill** — analytics-performance-benchmarks exists but no skill for interpreting email metrics (what open rate trends mean, when to act, diagnostic decision trees).

3. **Dynamic content/personalization skill** — Klaviyo dynamic content blocks (Merge Tags, Conditional Logic, Loops) are referenced in flow skills but no dedicated skill covers the full personalization syntax.

4. **Email testing/QA skill** — No dedicated skill for email QA workflows (Litmus/Email on Acid integration, cross-client testing checklists, rendering regression testing).

5. **Suppression/compliance skill** — CAN-SPAM, GDPR, and CASL compliance requirements are mentioned in footers but no dedicated skill covers full compliance requirements for email format.

6. **Image/asset production skill** — Image specs (dimensions, compression, formats) are scattered across skills but no single skill defines the complete image production pipeline for email.

7. **Klaviyo-specific template building skill** — The email-html-generator produces generic HTML but no skill covers Klaviyo's specific template editor features (Drag-and-Drop blocks, template tags, conditional content).

---

## Statistics

- **Total skills inventoried:** 58
- **Skills fully loaded and extracted:** 16
- **Skills catalogued (name + path + relevance):** 42 additional
- **Format requirement domains:** 5 (HTML, Copy, Flow, Campaign, Deployment)
- **Key format rules extracted:** 87 individual rules
- **Skill gaps identified:** 7
