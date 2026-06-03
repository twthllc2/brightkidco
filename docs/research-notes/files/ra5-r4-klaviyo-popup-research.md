# RA5 R4: Klaviyo Popup & Signup Form Research

## Overview

Klaviyo's built-in signup form builder is BKC's primary tool for on-site lead capture. This research catalogs every form type, feature, targeting rule, and A/B testing capability available natively in Klaviyo — plus identifies where third-party tools fill gaps. All recommendations are specific to BKC's Shopify + Klaviyo stack.

---

## 1. Klaviyo Form Types Catalog

Klaviyo offers **5 distinct form types**, each suited to different engagement strategies:

### 1.1 Popup (Modal)
- **What it is:** A centered modal overlay that appears on top of page content
- **Best for:** Desktop visitors, highest-converting form type, primary list-building tool
- **Key features:** Full design customization, multi-step support, image/video embed, coupon delivery
- **Typical conversion rate:** 3-7% of visitors (well-optimized)
- **BKC use case:** Primary email + SMS capture with welcome discount

### 1.2 Flyout
- **What it is:** A smaller form that slides in from the edge of the page (bottom-left, bottom-right, top, bottom)
- **Best for:** Mobile visitors, secondary capture for popup-dismissers, less intrusive alternative
- **Key features:** Slide-in animation, compact layout, dismissible
- **Typical conversion rate:** 2-4% (lower friction, lower impact than popup)
- **BKC use case:** Mobile-first capture, or follow-up for visitors who dismissed the main popup

### 1.3 Embedded Form
- **What it is:** A form placed directly within page content (footer, sidebar, blog post, collection page)
- **Best for:** Persistent signup opportunity across all pages, blog readers, content consumers
- **Key features:** Inline styling, integrates with page layout, always visible
- **Typical conversion rate:** 0.5-2% (lower than popups but zero friction)
- **BKC use case:** Footer form on every page, blog sidebar for content-driven signups

### 1.4 Full-Page Form
- **What it is:** A form that takes over the entire browser viewport
- **Best for:** Special promotions, pre-launch signups, high-impact campaigns
- **Key features:** Full-screen takeover, maximum visual impact, strong CTA focus
- **Typical conversion rate:** 5-10% (highest impact, highest friction)
- **BKC use case:** Limited use — maybe seasonal promotions or product launch waitlists

### 1.5 Teaser
- **What it is:** A small tab or button that sits at the edge of the screen; expands into a form when clicked
- **Best for:** Persistent reminder after main popup is dismissed, passive list growth
- **Key features:** Minimal screen real estate, click-to-expand, configurable position
- **BKC use case:** "Still want 10% off?" teaser that appears after popup dismissal

---

## 2. Klaviyo Form Feature Set

### 2.1 Multi-Step Forms (Native)
- Klaviyo supports multi-step forms natively — no third-party tool needed
- **Recommended structure for BKC:**
  - Step 1: Collect email address only
  - Step 2: Collect SMS number (optional)
  - Step 3: Confirmation with coupon code
- **Why multi-step works:** Asking for email-only first converts 20-40% higher than asking for email + SMS simultaneously. Even with SMS as "optional," visitors see two fields and assume both are required.

### 2.2 Coupon / Discount Integration (Native)
- **Static coupons:** Display a fixed code (e.g., "WELCOME10") in the form's success state
- **Unique coupons:** Klaviyo generates unique, single-use codes from Shopify and displays them per-subscriber
- **Coupon delivery:** Code shown on-screen AND sent in welcome email (dual delivery prevents loss)
- **Minimum spend coupling:** Can set conditions like "$10 off $50+ orders" in the popup copy

### 2.3 Teasers (Native)
- Small expandable tab that persists after popup dismissal
- Can be configured as a fallback: if visitor dismisses popup, teaser remains
- A/B testable: test teaser vs. no-teaser to measure impact

### 2.4 Countdown Timer (Native)
- Built-in countdown timer block for urgency-based forms
- Configurable end date/time
- BKC use case: "Sale ends in..." or "Limited time offer" popups

### 2.5 Counter Block (Native)
- Gamification element showing progress toward a goal
- BKC use case: "Join 12,847 parents who trust BKC" — social proof counter

### 2.6 Custom CSS (Limited)
- Klaviyo allows some custom CSS within the form builder
- **Limitation:** Less design freedom than dedicated popup tools (Wisepops, OptinMonster, JustUno)
- Cannot embed arbitrary HTML/JS within forms

### 2.7 Form-to-Flow Integration (Native)
- Submissions automatically trigger Klaviyo flows
- Can add submitted profiles to specific lists
- Properties captured in the form become profile properties for segmentation
- **BKC use case:** Popup submission → Welcome Flow trigger → 5-email nurture sequence

---

## 3. Targeting & Display Rules

### 3.1 Trigger Types

| Trigger | Desktop | Mobile | Description |
|---------|---------|--------|-------------|
| Time delay | Yes | Yes | Show after X seconds on page (recommended: 8-15s desktop, 15-30s mobile) |
| Scroll depth | Yes | Yes | Show after visitor scrolls X% of page (recommended: 50% desktop, 40% mobile) |
| Exit intent | Yes | NOT supported | Cursor moves toward browser close button — highest converting trigger |
| Page count | Yes | Yes | Show after visitor views X pages (recommended: 2+ pages) |
| Click-based | Yes | Yes | Show when visitor clicks a specific element (button, link) |

### 3.2 Targeting Rules

| Rule | Available | Description |
|------|-----------|-------------|
| URL targeting | Yes | Show/hide on specific URLs, URL contains, URL starts with |
| Device type | Yes | Desktop only, mobile only, or both |
| Location/Country | Yes | Target by visitor country |
| New vs. returning | Yes | Show only to new visitors or returning visitors |
| Traffic source | Yes | Target by referral source (organic, paid, social, direct) |
| Custom properties | Yes | Target based on Klaviyo profile properties |
| Already subscribed | Yes | Auto-hide form for existing email/SMS subscribers |
| Cart status | Limited | Basic — no real-time cart contents display |
| Customer lifetime value | NOT available | Cannot target by LTV natively |
| Product viewed | Limited | Can target by URL but not by product category in cart |

### 3.3 Frequency Capping
- Configure how often the form displays to the same visitor
- **Recommended:** Show once per session, don't re-show for 14-30 days after dismissal
- Configurable in form settings under "Targeting & behaviors" tab

### 3.4 Suppression Rules
- Suppress form for visitors already in a specific Klaviyo list
- Suppress for visitors who already submitted any form
- Suppress based on Klaviyo segment membership

---

## 4. A/B Testing Capabilities (Native)

### 4.1 What You Can Test
- **Form content:** Headlines, body copy, CTA text, button color, images, layout
- **Offers:** Coupon vs. no coupon, 10% off vs. free shipping, $10 off vs. 15% off
- **Timing:** Time delay vs. scroll depth vs. exit intent
- **Teaser:** With teaser vs. without teaser
- **Gamification:** Countdown timer vs. no timer, counter block vs. no counter
- **Form type:** Popup vs. flyout for same offer

### 4.2 How A/B Testing Works in Klaviyo
1. Navigate to Sign-up forms → select form → "Create A/B test"
2. Name the test descriptively (e.g., "Newsletter - CTA Button Color")
3. Create 2-4 variations (Klaviyo recommends max 4)
4. Set traffic split (equal by default)
5. Launch and wait for statistical significance
6. Klaviyo declares a winner based on submission rate
7. Implement winning variation

### 4.3 Limitations of Klaviyo A/B Testing
- **No true control group:** Cannot test popup vs. no-popup to measure true incrementality
- **Cannot edit live tests:** Must end test to make changes to variations
- **No multi-variate testing:** Can only test one variable at a time (recommended best practice)
- **No revenue attribution:** Measures signup rate, not downstream revenue impact

### 4.4 A/B Testing Best Practices for BKC
1. Test one variable at a time
2. Run each test for minimum 1-2 weeks (2-4 weeks optimal)
3. Need sufficient traffic volume for statistical significance
4. Start with highest-impact tests: offer type → timing → design → copy
5. Document every test result for future reference

### 4.5 Recommended BKC Test Sequence
1. **Test 1:** Coupon (10% off) vs. no coupon — measure signup rate AND unsubscribe rate
2. **Test 2:** Exit intent vs. 10-second delay — measure conversion rate by trigger
3. **Test 3:** Email-only step 1 vs. email + SMS together — measure total subscriber capture
4. **Test 4:** Product image (BKC product) vs. no image vs. lifestyle image
5. **Test 5:** "Get 10% off" vs. "Join the BKC family" — discount framing vs. community framing

---

## 5. Feature Comparison: Klaviyo Native vs. Third-Party Tools

| Feature | Klaviyo Native | Third-Party (Wisepops, OptinMonster, JustUno) |
|---------|---------------|----------------------------------------------|
| Popup, flyout, embedded | Yes | Yes |
| Full-page form | Yes | Yes |
| Multi-step forms | Yes | Yes |
| Exit intent (desktop) | Yes | Yes |
| Exit intent (mobile) | No | Yes (some tools) |
| Coupon integration | Yes (static + unique) | Yes |
| Countdown timer | Yes | Yes |
| A/B testing | Yes (basic) | Yes (advanced, with control groups) |
| AI product recommendations | No | Yes (some tools) |
| Cart recovery popup | Limited | Yes (show live cart contents) |
| Customer LTV targeting | No | Yes |
| Custom CSS/HTML | Limited | Full control |
| Gamification (spin-to-win) | No | Yes (some tools) |
| Quiz integration | No (native) | Yes (Typeform, Octane AI) |
| Conditional logic | Limited | Advanced |
| Revenue attribution | No | Yes |
| Direct Klaviyo integration | Native | Via API (most tools support) |

---

## 6. Klaviyo Limitations & Workarounds

### 6.1 No Mobile Exit Intent
- **Limitation:** Exit intent (cursor movement) doesn't work on touch devices
- **Workaround:** Use time delay (15-30s) or scroll depth (40%) for mobile; use exit intent only on desktop
- **Alternative:** Some third-party tools detect mobile "back button" intent or rapid scroll-up

### 6.2 Limited Conditional Logic
- **Limitation:** Cannot build complex branching forms (e.g., "If user selects 'baby', show baby-specific fields")
- **Workaround:** Use multi-step forms with simple branching; use Klaviyo segments post-submission for personalization
- **Alternative:** Typeform or Octane AI for quiz-style forms, pass data to Klaviyo via API

### 6.3 No Quiz/Native Interactive Forms
- **Limitation:** Cannot build interactive quiz-style popups natively
- **Workaround:** Use Octane AI or Typeform for quiz → pass quiz answers as Klaviyo profile properties → segment based on answers
- **BKC use case:** "Which BKC product is right for your child?" quiz → capture email → personalize welcome flow based on quiz result

### 6.4 No AI Product Recommendations in Forms
- **Limitation:** Cannot show personalized product recommendations inside the popup
- **Workaround:** Use static bestseller images; post-signup, use Klaviyo's product recommendation engine in emails/flows

### 6.5 Design Flexibility Constraints
- **Limitation:** Form builder is functional but not pixel-perfect; limited font choices, no arbitrary HTML embedding
- **Workaround:** Use custom CSS within Klaviyo's allowed scope; for brand-critical pages, consider third-party popup tool with full CSS control

---

## 7. Template Recommendations for BKC

### 7.1 Primary Popup: "Welcome Discount" (Highest Priority)
- **Type:** Popup, 2-step
- **Step 1:** "Get 10% off your first order" + email field + CTA button
- **Step 2:** "Want SMS updates too?" + phone field (optional) + "No thanks" link
- **Success state:** Unique coupon code displayed + "Check your email for your code"
- **Trigger:** Exit intent (desktop), 15-second delay (mobile)
- **Targeting:** New visitors only, all pages
- **Frequency:** Once per session, suppress for 30 days after dismissal

### 7.2 Secondary Popup: "Newsletter Signup"
- **Type:** Flyout, single step
- **Content:** "Join 10,000+ parents" + email field + CTA
- **Trigger:** 50% scroll depth on blog pages and collection pages
- **Targeting:** Visitors who dismissed or already saw the welcome popup
- **No coupon:** Position as community/newsletter value, not discount

### 7.3 Footer Embedded Form (All Pages)
- **Type:** Embedded
- **Content:** "Stay in the loop — new products, parenting tips, exclusive offers"
- **Fields:** Email only
- **Placement:** Footer of every page

### 7.4 Seasonal/Flash Sale Popup
- **Type:** Full-page or popup with countdown timer
- **Content:** Seasonal offer + countdown timer + email/SMS capture
- **Trigger:** Immediate or 5-second delay
- **Targeting:** All visitors during sale period
- **Frequency:** Once per day during sale

### 7.5 Teaser (Post-Dismissal)
- **Type:** Teaser tab
- **Content:** "Still want 10% off? →" 
- **Trigger:** Appears after popup dismissal
- **Click action:** Expands into the welcome popup

---

## 8. A/B Testing Strategy for BKC

### Phase 1: Foundation Tests (Weeks 1-4)
| Test | Variable A | Variable B | Metric |
|------|-----------|-----------|--------|
| Offer impact | 10% off coupon | No coupon | Signup rate |
| Trigger timing | Exit intent | 10s time delay | Signup rate |
| Form type | Popup | Flyout (mobile only) | Mobile signup rate |

### Phase 2: Optimization Tests (Weeks 5-8)
| Test | Variable A | Variable B | Metric |
|------|-----------|-----------|--------|
| Discount framing | "10% off" | "Save $X on your first order" | Signup rate |
| Social proof | "Join 10,000+ parents" | No social proof | Signup rate |
| Image | BKC product photo | Lifestyle/child photo | Signup rate |
| SMS step | Include SMS step 2 | Skip SMS, email only | Total subscribers |

### Phase 3: Advanced Tests (Weeks 9-12)
| Test | Variable A | Variable B | Metric |
|------|-----------|-----------|--------|
| CTA copy | "Get my discount" | "Join the family" | Signup rate |
| Teaser | With teaser tab | Without teaser | Total signups |
| Form style | Minimal/clean | Bold/colorful | Signup rate |
| Mobile delay | 15 seconds | 30 seconds | Mobile signup rate |

### Measurement Framework
- **Primary metric:** Form submission rate (submissions / impressions)
- **Secondary metrics:** Email-only vs. email+SMS capture rate, welcome flow open rate, first-purchase conversion rate
- **Anti-metric:** Unsubscribe rate within 7 days (flags low-quality signups from aggressive tactics)
- **Run time:** Minimum 2 weeks per test, 4 weeks for lower-traffic pages
- **Sample size:** Need ~1,000 impressions per variation for statistical significance

---

## 9. Key Takeaways for BKC Implementation

1. **Start with Klaviyo native forms** — they cover 80% of BKC's popup needs without additional cost
2. **Always use multi-step (email first, SMS second)** — captures more email subscribers than asking for both simultaneously
3. **Unique coupon codes from Shopify** — prevent code sharing and track redemption accurately
4. **Exit intent on desktop, time delay on mobile** — optimize by device type
5. **Frequency cap aggressively** — once per session, 30-day suppression protects UX
6. **Test offers before design** — the incentive matters more than the button color
7. **Consider third-party tools only after exhausting Klaviyo native** — evaluate Wisepops or OptinMonster if BKC needs quiz integration, AI recommendations, or advanced targeting
8. **Every popup must connect to a flow** — the popup is just the entry point; the Welcome Flow does the conversion work

---

## Sources

- Klaviyo Help Center: How to A/B test a sign-up form (help.klaviyo.com)
- Klaviyo Help Center: Mobile popup optimization (help.klaviyo.com)
- Poper: Klaviyo Signup Forms Ultimate Guide (poper.ai)
- Pea Soup Digital: Klaviyo Forms Best Practices (peasoupdigital.co.uk)
- Wisepops: How to Make Better Klaviyo Popups [2026] (wisepops.com)
- Ecommerce Intelligence: Klaviyo Popups & Signup Forms (ecommerceintelligence.com)
- Tribe Studio: Klaviyo Best Practice for Sign-Up Forms (tribe.studio)
- Blade Commerce: How to A/B Test a Pop Up Form on Klaviyo (bladecommerce.com)
- Klaviyo Blog: Exit Popups (klaviyo.com)
