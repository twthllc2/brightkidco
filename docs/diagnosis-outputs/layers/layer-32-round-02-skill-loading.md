# Layer 32 Round 2: Existing Email Prototype Patterns — Skill Loading

## Objective
Load and extract ALL relevant skills for email prototype pattern analysis.

## Skills Inventory

### Category 1: Email HTML Generation & Design (4 skills)

#### 1. email-html-generator
- **Purpose:** Generate responsive HTML email templates for Klaviyo e-commerce
- **Key Techniques:**
  - Base template skeleton (XHTML 1.0 Transitional, 600px max width)
  - Content block macros (header, body, CTA, footer with {{PLACEHOLDERS}})
  - Brand color extraction from client websites
  - Mobile-first responsive design (media queries at 480px breakpoint)
  - Outlook MSO conditional comments for rendering fixes
  - Preheader text implementation (hidden div with opacity:0)
- **Relevance to L32:** Core template architecture patterns — the skeleton structure, placeholder system, and responsive breakpoints define how every prototype email is built

#### 2. email-design-master
- **Purpose:** Mobile-first email design system covering client rendering, dark mode, Outlook hacks
- **Key Techniques:**
  - The 600px rule (safe rendering width across ALL email clients)
  - 3 responsive approaches: fluid/media queries, hybrid/spongy method, stacking/column collapse
  - Dark mode compatibility (meta tags, CSS media queries, image swapping, color inversions)
  - Big 5 client compatibility matrix (Apple Mail, Gmail, Outlook desktop/web, Yahoo)
  - Table-based layout (mandatory — div-based breaks in Outlook)
  - Inline styles (mandatory — Gmail strips <style> blocks)
  - VML for Outlook background images and rounded buttons
  - Font stacks (system fonts only — no @font-face)
  - Product grid 2-column stacking pattern
- **Relevance to L32:** Every prototype must conform to these rendering constraints — dark mode, Outlook, mobile are non-negotiable patterns

#### 3. email-cta-conversion-design
- **Purpose:** Deep-dive on CTA optimization and conversion-centered design
- **Key Techniques:**
  - CTA Hierarchy of Impact: placement > copy > visual contrast > size > context > color
  - Universal button specs (44-56px height, 14px+ font, table-cell method)
  - 3 mandatory CTA positions: above fold (70% of clicks), mid-email, bottom
  - Button shape guide (square/rounded/pill — pick ONE per brand)
  - Text link best practices (underline+bold, 44px tap target, 3:1 contrast)
  - CTA after social proof pattern (15-30% conversion lift)
  - Outlook-specific VML button fix
  - Full-width mobile button with media queries
- **Relevance to L32:** CTA patterns are the conversion engine — every prototype must have proper placement, sizing, and cross-client button implementation

#### 4. email-template-library
- **Purpose:** Pre-built template specifications for every e-commerce email type
- **Key Techniques:**
  - Universal base template (dark mode ready, responsive, 600px max)
  - Universal footer module (social links, unsubscribe, preferences, address)
  - Welcome flow templates: 3 variants (Classic Offer-First, Brand Story, Product Showcase)
  - Flash sale template (urgency banner, countdown timer, category grid, strikethrough prices)
  - Product launch template (dramatic hero, feature icons, gallery, testimonials)
  - Bestseller template patterns
  - Abandoned cart single & multi-product templates
  - Post-purchase templates (thank you, review request, cross-sell)
  - Newsletter templates (editorial, curated, digest)
  - Dimension specs per element (hero 600x400, products 270x270, icons 48x48)
  - Color rules per template type
  - Typography specs (H1 32px, body 16-18px, CTA 18px)
- **Relevance to L32:** The template library is the pattern catalog — each template IS a prototype pattern with exact dimensions, colors, and structure

---

### Category 2: Automated Flow Architecture (6 skills)

#### 5. flow-welcome (8-email series)
- **Purpose:** Highest-revenue automated sequence for new subscribers
- **Key Techniques:**
  - 8-email sequence over 7-14 days addressing 6 core objections
  - Auto-resend for Email 1 non-openers (1-day delay, different subject)
  - Flow filter: "Placed order 0 times over all time"
  - Email sequence: Welcome > Brand Story > USPs/Social Proof > Discount Reminder > Us vs Them > Testimonials > Last Chance > Everything Okay?
  - Back-population strategy (clone flow, adjust copy, "From When Button Is Clicked")
  - A/B testing on Email 1 (50/50 split, opens as winning metric)
  - Decision points: auto-resend timing, discount ladder, content depth
- **Relevance to L32:** Welcome flow defines the longest and most complex automated email pattern — 8 distinct email types with different purposes

#### 6. flow-abandoned-cart (3-email series)
- **Purpose:** Recover sales from cart abandoners (distinct from checkout abandon)
- **Key Techniques:**
  - Triggered by "Added to Cart" metric (requires Shopify snippet — NOT automatic)
  - Dynamic content block using Split block with {{event.ImageURL}}, {{event.Name}}, {{event.Price|striptags}}
  - 3-email sequence: Brief Reminder (1-2 hrs) > Founder Nudge (1 day) > Urgency & USPs (1 day)
  - Flow filters: Placed order 0, Checkout started 0, not in flow last X days
  - Re-entry window by product cost: 7 days (<$50), 10 days ($50-150), 15 days (>$150)
  - Price variable {{event.Price|striptags}} critical for clean rendering
- **Relevance to L32:** Cart abandon pattern shows event-driven triggers, dynamic content blocks, and the split between cart vs checkout abandonment

#### 7. flow-abandoned-checkout (8-email series)
- **Purpose:** Recover highest-intent abandoners who started checkout
- **Key Techniques:**
  - Triggered by "Started Checkout" metric
  - 8-email sequence with first-time vs returning buyer split at Email 6
  - First-time buyers get discount ladder; returning buyers get personal check-in (no discount)
  - Flow filter: Placed Order 0 times since starting flow, not in flow last 5 days
  - More aggressive timing than cart abandon
  - Dynamic coupon code block for personalized discount
- **Relevance to L32:** Checkout abandon demonstrates buyer-segment branching (new vs returning) and discount ladder patterns

#### 8. flow-post-purchase-new (4-email sequence)
- **Purpose:** Reduce buyer's remorse, educate, build loyalty, collect reviews
- **Key Techniques:**
  - Triggered by "Placed Order" with filter: Placed Order equals 1 over all time (first-time buyers)
  - Cancelled order filter: 0 times since starting flow
  - 4 emails calibrated to shipping window (when product is in hand)
  - Tone: warm, personal, educational — NOT promotional
  - Content: product usage guides, how-to content, review collection
  - Review incentive: discount code, loyalty points, or giveaway entry
- **Relevance to L32:** Post-purchase pattern shows non-promotional email design, shipping-window timing, and review collection patterns

#### 9. flow-sunset (2-email sequence)
- **Purpose:** Clean unengaged subscribers to protect deliverability
- **Key Techniques:**
  - Non-engagement window: 90 days standard, 60 days strict, 120-180 days lenient
  - Segment: Opened Email 0 times AND Clicked Email 0 times in window
  - 2 emails: "We miss you" with unsubscribe option > "We'll unsubscribe you" with Stay option
  - Personal format (not promotional)
  - Suppression protocol: manual or Klaviyo auto-suppress
- **Relevance to L32:** Sunset pattern shows list hygiene emails — minimal design, personal tone, unsubscribe-focused

#### 10. flow-cross-sell / flow-replenishment / flow-winback / flow-vip
- **Purpose:** Additional flow types for complete lifecycle coverage
- **Key Techniques (from descriptions):**
  - Cross-sell: post-purchase product recommendations
  - Replenishment: timing-based reminders for consumable products
  - Winback: re-engagement for lapsed customers
  - VIP: loyalty rewards for high-value customers
- **Relevance to L32:** Each flow type represents a distinct email pattern with unique timing, tone, and content requirements

---

### Category 3: Campaign Types (3 skills loaded)

#### 11. campaign-flash-sale
- **Purpose:** Generate concentrated revenue spike with time-limited discount
- **Key Techniques:**
  - 4-phase process: Setup > Segment Testing > Full Deployment > Post-Campaign Analysis
  - Small test segment first (10-15%), evaluate after 30-60 min, then full send
  - Send timing: Tue/Wed best, 8-10 AM or 12-1 PM or 7-9 PM windows
  - Mobile-first: subject <40 chars, hero <200KB, CTA 44x44px min
  - 8 subject line types: Urgency, Curiosity, Social Proof, Benefit, Exclusive, Scarcity, Playful, Simple
  - Smart Send Time for segments with 500+ profiles
  - Post-send monitoring: bounce <2%, spam <0.1%
- **Relevance to L32:** Flash sale defines the promotional campaign pattern — urgency-driven, discount-focused, segment-tested

#### 12. campaign-product-launch
- **Purpose:** Generate excitement for new product/collection introduction
- **Key Techniques:**
  - Pre-launch teaser (2-5 days before), launch day send, follow-up sequence
  - Decision: discount vs no-discount approach
  - Target segments: new buyers vs repeat buyers
  - Product imagery: hero shot, lifestyle shot, detail shots
  - UTM parameters per send
- **Relevance to L32:** Product launch pattern shows multi-phase campaign design with teaser → launch → follow-up structure

#### 13. campaign-bestseller / campaign-back-in-stock / campaign-bundle / campaign-giveaway / campaign-free-shipping / campaign-ugc / campaign-refer-a-friend / campaign-sms-list-growth / campaign-blog-newsletter / campaign-bfcm-holiday / campaign-bfcm-holiday-mega
- **Purpose:** Additional campaign types (11 more available)
- **Relevance to L32:** Each represents a distinct campaign pattern — curated recommendations, inventory alerts, bundles, social proof, referral mechanics, SMS integration, editorial content, and seasonal mega-campaigns

---

### Category 4: Copywriting & Content (3 skills)

#### 14. brand-voice-definition
- **Purpose:** Framework for defining and documenting brand voice for email
- **Key Techniques:**
  - 6 voice dimensions scored 1-5: Formal↔Casual, Serious↔Playful, Technical↔Simple, Authoritative↔Friendly, Salesy↔Educational, Short↔Long-form
  - 3-5 voice pillars with do/don't examples
  - Tone variations per channel (Welcome=warm, Abandoned Cart=urgent, Post-Purchase=educational, SMS=short/direct)
  - Keywords & phrases (brand language + avoid list)
  - Reference emails per flow type
- **Relevance to L32:** Brand voice determines the tone and language patterns across ALL email prototypes

#### 15. copywriting-subject-line-engineering
- **Purpose:** Complete reference for subject lines and preview text
- **Key Techniques:**
  - 7 formulas: Curiosity Gap, Direct Benefit, Urgency/Scarcity, Personalization, Question, How-To, Social Proof
  - Preview text strategies: Complement, Urgency Add, Benefit Reinforce, Curiosity Tease, Social Proof
  - Length optimization: 30-50 chars sweet spot, inverted pyramid rule
  - Emoji strategy: when to use (flash sales, celebrations) vs avoid (B2B, transactional)
  - A/B testing: min sample sizes, 4-6 hr duration, what to test (formula, personalization, emoji, urgency, length, case)
  - Spam trigger words to avoid + safe alternatives
  - 50+ subject line swipe file by category
- **Relevance to L32:** Subject lines are the first pattern subscribers encounter — every email prototype needs tested subject line variants

#### 16. copywriting-body-copy-frameworks
- **Purpose:** Email body copy structure and CTA optimization
- **Key Techniques:**
  - PAS (Problem-Agitate-Solve): pain-point driven emails, abandoned cart, replenishment
  - AIDA (Attention-Interest-Desire-Action): product launches, general promotions
  - BAB (Before-After-Bridge): transformation stories, winback, testimonials
  - Storytelling framework: narrative arc for brand stories
  - CTA optimization within each framework
  - Mobile formatting rules
- **Relevance to L32:** Body copy frameworks define the internal structure patterns of email content

---

### Category 5: Deliverability & Technical (2 skills)

#### 17. deliverability-authentication-setup
- **Purpose:** Configure SPF, DKIM, DMARC, BIMI for email authentication
- **Key Techniques:**
  - Dedicated sending subdomain setup (hello.brand.com, news.brand.com, etc.)
  - SPF, DKIM, DMARC configuration with phased rollout
  - BIMI implementation for brand logo display
  - Reputation isolation: marketing emails on subdomain, protect root domain
  - Google Postmaster Tools setup
  - Third-party sending service inventory
- **Relevance to L32:** Authentication patterns ensure prototypes actually reach the inbox — technical foundation for all email design

#### 18. deliverability-list-hygiene / deliverability-spam-recovery / deliverability-domain-warming / deliverability-content-signature-optimization / deliverability-audit-monitoring / deliverability-transactional-code / email-design-standards-and-template-build / email-collection-list-growth / email-collection-popup-strategy / email-audit-execution
- **Purpose:** Additional deliverability and technical skills (10 more available)
- **Relevance to L32:** Supporting technical patterns for list health, spam recovery, domain warming, and audit processes

---

### Category 6: Strategy & Analytics (3 skills)

#### 19. segmentation-strategy-framework
- **Purpose:** Five-layer segmentation framework for Klaviyo
- **Key Techniques:**
  - Layer 1: Engagement-based (30/60/90/180-day windows, unengaged 180+)
  - Layer 2: Value-based (VIP, high-LTV, discount-sensitive)
  - Layer 3: Behavioral (product views, cart adds, category exploration)
  - Layer 4: Demographic (location, language, season)
  - Layer 5: Purchase history (first-time, repeat, lapsed)
  - "Engaged" = opened OR clicked (not AND)
  - Segment interaction logic
- **Relevance to L32:** Segmentation determines WHO receives each email prototype pattern — target audience shapes content

#### 20. analytics-abtesting-iteration-protocol / analytics-performance-benchmarks-reporting / analytics-program-diagnostics-optimization / strategy-campaign-calendar / strategy-customer-journey / strategy-client-reviews / segmentation-rfm-predictive / segmentation-list-health / copywriting-sms-companion / copywriting-brand-voice-storytelling
- **Purpose:** Additional strategy and analytics skills (10 more available)
- **Relevance to L32:** A/B testing protocols, performance benchmarks, campaign calendars, and customer journey mapping provide the measurement and planning patterns

---

### Category 7: Supporting Skills (2 skills)

#### 21. diagnosis-report-format
- **Purpose:** Template for writing diagnosis files
- **Key Techniques:**
  - Structure: Objective > Background > Data Gathered > Analysis > Recommendations
  - Word-for-word capture of what was asked
  - Real problem vs surface problem distinction
- **Relevance to L32:** Provides the output format for documenting email prototype pattern analysis

#### 22. plan-format
- **Purpose:** Template for writing execution plans
- **Key Techniques:**
  - Approver-level vs executor-level detail separation
  - Two-document pattern: approver plan + task files
  - Scope, impact, waves, order, operators, estimated time, risk points
  - Infrastructure plans require VERY DETAILED step-by-step
- **Relevance to L32:** Provides the format for creating actionable plans from pattern analysis

---

## Key Techniques Summary (Cross-Skill Patterns)

### HTML Architecture Patterns
1. Table-based layout (mandatory for Outlook)
2. 600px max width
3. Inline styles for all critical CSS
4. MSO conditional comments for Outlook
5. VML for background images and rounded buttons
6. System font stacks only (no @font-face)
7. Dark mode meta tags + media queries + image swapping

### Content Structure Patterns
1. Preheader text (40-100 chars, hidden div)
2. Logo header (centered, max 150-200px)
3. Hero image/section (600x400-500px)
4. Body copy (PAS/AIDA/BAB frameworks)
5. CTA button (table-cell method, 44-56px height)
6. Social proof section (testimonials, reviews, press)
7. Footer (address, unsubscribe, preferences, social links)

### Flow Patterns
1. Event-driven triggers (subscribed, added to cart, started checkout, placed order)
2. Flow filters (purchase exclusion, re-entry suppression)
3. Conditional splits (opened? purchased? first-time vs returning?)
4. Time delays calibrated to customer journey stage
5. Auto-resend for non-openers
6. Dynamic content blocks (product data, cart contents, discount codes)

### Campaign Patterns
1. Segment testing (10-15% test before full send)
2. A/B testing (subject lines, send times, content)
3. Send timing optimization (day of week, time of day)
4. Mobile-first design (subject <40 chars, hero <200KB)
5. Post-send monitoring (bounce, spam, open, click rates)

### Copywriting Patterns
1. 7 subject line formulas (curiosity, benefit, urgency, personalization, question, how-to, social proof)
2. 4 body copy frameworks (PAS, AIDA, BAB, Storytelling)
3. Brand voice dimensions (6 axes scored 1-5)
4. Tone variation per touchpoint
5. Preview text as "second subject line"

---

## Skill Gaps Identified

1. **Interactive/AMP emails** — No skill covering AMP for Email (interactive carousels, forms, accordions)
2. **Email accessibility (a11y)** — Mentioned briefly in design-master but no dedicated WCAG/508 compliance skill
3. **Email analytics deep-dive** — Benchmarks skill exists but no detailed attribution modeling or cohort analysis skill
4. **Plain text email design** — Mentioned as fallback but no dedicated plain-text email optimization skill
5. **International/multilingual email** — No skill for localization, RTL support, or multi-language campaigns
6. **User-generated content email design** — campaign-ugc exists but no design pattern skill for UGC integration
7. **Email personalization beyond name** — Dynamic content, conditional blocks, product recommendations — referenced but no standalone skill
8. **Email testing/QA automation** — Manual testing described; no automated rendering test pipeline skill
9. **Klaviyo-specific API patterns** — klaviyo-api-tool exists but no email-specific API integration patterns
10. **Competitive email analysis** — No framework for analyzing competitor email programs

---

## Total Skills Loaded: 22 (exceeds minimum of 8)
## Total Skills Available in Library: 55+ across email-marketing + supporting skills
