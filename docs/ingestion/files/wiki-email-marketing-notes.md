# Wiki Email Marketing — Complete Notes (60 Files)

> Extracted from `/root/wiki/tenza-marketing/email-marketing/__enqueued__/` (all 60 files, sorted alphabetically)
> Batch 1: Files 1-30 | Batch 2: Files 31-60
> Date: 2026-05-25

## Executive Summary — All 60 Files Combined

**Top 15 takeaways from the entire email marketing knowledge base:**

1. **6 essential flows** (CXL Framework): Newsletter Subscription, Checkout Abandonment, First Order, Second Order, Post-Purchase, Winback — split across Before/During/After Purchase phases.

2. **Flows = ~50% of email revenue**, campaigns = the other 50%. Most brands under-invest in flows.

3. **Welcome Flow = highest-ROI flow.** 8-email sequence over 7-14 days. Email ROI is $44 per $1 spent (vs $2 for paid ads). Can add 7 figures in annual revenue and lower CPA by up to 50%.

4. **Cart vs Checkout Abandon distinction is critical.** 90% of brands only have Checkout Abandon (Klaviyo default) — they're missing Cart Abandon entirely. 70-85% of carts are abandoned.

5. **Post-purchase = product adoption first, selling second.** Use "Fulfilled Order" trigger (not "Placed Order"). Sequence: eliminate buyer's remorse -> delivery tracking -> product education -> review request -> omnichannel build.

6. **Segmentation: go broad for niche brands.** Hyper-segmentation narrows audience. 10k segment at 5% click = 500 visits vs 50k broad at 2% = 1,000 visits.

7. **Email copy: one takeaway per email.** 5 takeaways = each gets 20% attention = none remembered.

8. **Second-order cost of broken email:** $1M brand at 8% email revenue leaves $170K/yr on the table (benchmark: 25-35%).

9. **Klaviyo Predictive Analytics (EDNO)** uses ML to predict when customers will reorder. Requires 500+ customers, 180 days history.

10. **NPS tracking, birthday flows, and creative engagement** (competitions, content distribution, surveys, product education, UGC) drive CLV beyond discount codes.

11. **Winback flow: keep it simple.** 3 emails max — 99% of retention comes from campaigns (3-4/week).

12. **Birthday flows go beyond coupons.** Collect zero-party data, trigger 2 weeks before birthday, send physical gift.

13. **6 creative engagement types beyond discounts:** Competitions, Content Distribution, Surveys, Product Education, UGC, Two-Way Conversations.

14. **Tenza growth framework:** $2,000 foundation (3 flows, 72 hrs) -> $500-800/mo management -> list growth -> advanced flows. 30-day guarantee.

15. **Copy anti-patterns:** Avoid unnecessary info, too-long copy, too many points, boring tone, no value.

---

## 1. EMAIL FLOW TYPES & SEQUENCES

### Core Flow Architecture (6 Essential Flows)
- **Welcome Flow** — triggered when someone joins list; filter: "Placed Order zero times since starting this flow"
- **Site Abandon Flow** — triggered when someone visits site then leaves without viewing products
- **Browse Abandon Flow** — triggered when someone views a product but doesn't add to cart
- **Cart Abandon Flow** — triggered when someone adds to cart but doesn't go to checkout
- **Checkout Abandon Flow** — triggered when someone goes to checkout but doesn't purchase
- **Post-Purchase Flow** — triggered after purchase; filter: "Made purchase since starting this flow"
- **Winback Flow** — triggered when someone hasn't purchased in 60+ days
- *Source: 03-email-flows.md, course-flows-intro-_-gamma.md*

### Flow Revenue Split
- Flows should generate ~50% of total email revenue; campaigns generate the other 50%
- *Source: course-flows-intro-_-gamma.md*

### Complete Flow Lifecycle (CXL Framework)
Six flows divided into three phases:
1. **Before Purchase:** Newsletter Subscription Flow (Trust | CR)
2. **During Purchase:** Checkout Abandonment Flow (Sales | CR)
3. **After Purchase:** First Order Flow, Second Order Flow, Post-Purchase Flow, Winback Flow (CLV)
- *Source: 05-email-automation-bestpractices-cxl-x-tantee.md*

---

## 2. ABANDONED CART FLOWS

### Standard 5-Email Cart Abandon Sequence (Budai Media)
- Email #1 — 1 hour after trigger — 4 customer reviews (no discount)
- Email #2 — 4 hours later — 4 customer reviews (no discount)
- Email #3 — 24 hours later — 4 customer reviews (no discount)
- Email #4 — 25 hours later — 3 bestsellers (no discount)
- Email #5 — 24 hours after — 3 bestsellers (no discount)
- *Source: 001-abandoned-cart-flows.md*

### Optimal 8-Email Cart Abandon Flow (Well Copy — $20M+ agency)
- Email 1: Quick Reminder — show exactly what they left behind, no fluff
- Email 2: Nudge with Social Proof — similar to email 1, add social proof
- Email 3: Brand Info + Risk Reversals — USPs, shipping info, guarantees
- Email 4: Testimonials — customer reviews of abandoned product
- Email 5: Last Chance — heavy urgency, deadline
- Email 6a: "Everything Okay?" — personal founder touch, offer support (past buyers)
- Email 6b: Discount Opener — flash discount for first-time buyers ONLY
- Email 7: Discount Last Chance — extreme urgency on discount
- Email 8: What Happened? — founder touch + last discount chance + support offer
- *Source: course-cart-_-checkout-abandon-flow-_-gamma.md, abandoned-cart-83-page-guide-_-gamma.md*

### Critical Distinction: Cart Abandon vs Checkout Abandon
- **Cart Abandon** = user added to cart but did NOT go to checkout (trigger: "Added to Cart")
- **Checkout Abandon** = user went to checkout but did NOT complete purchase (trigger: "Checkout Started")
- 90% of brands don't have a proper Cart Abandon Flow — Klaviyo's default "Abandoned Cart" is actually a checkout abandon
- Cart abandon captures MORE abandonments since it's higher in the funnel
- *Source: course-cart-_-checkout-abandon-flow-_-gamma.md, abandoned-cart-83-page-guide-_-gamma.md*

### Cart Abandon Email Templates
- **Email 1 (Nudge):** Logo, "Forget Something?", dynamic abandonment block, "FINISH MY ORDER" CTA, brand icons with social proof/risk reversals
- **Email 2:** Logo, "Your Order Is Waiting", social proof/risk reversals, dynamic block, CTA
- **Email 3 (Split by Product):** "Why You'd Love Our ___", background info, product pic, Klaviyo section, saved cart, CTA — can have 5+ versions
- **Email 4 (Testimonials):** Testimonial of product, verified customer label, Klaviyo section, saved cart, 5-star reviews, 3-4 testimonials, CTA
- **Email 6b (Discount):** "Take __ Off Your Order For a Limited Time!", Klaviyo section, generated discount code, support info
- **Email 7 (Last Chance):** "Last Chance to Save __ on Your Unfinished Order", Klaviyo section, CTA
- *Source: abandoned-cart-email-1.md through abandoned-cart-email-7.md*

### Key Cart Abandon Rules
1. Singular/plural — be careful if there may be 1 OR several items in cart
2. For one-product stores, you can be very specific about benefits
3. Dynamic product block in each email — CTA leads directly back to cart
4. Don't take them for a trip around the store — this is about the cart ONLY
5. Don't discount in early emails — save discount for later in sequence
6. Email design: clear headline, button high up, properly show item, icons/sections for info
- *Source: 001-abandoned-cart-flows.md, abandoned-cart-83-page-guide-_-gamma.md*

---

## 3. BROWSE ABANDONMENT FLOWS

### Standard 5-Email Browse Abandon Sequence (Budai Media)
- Email #1 — reminder — 1 hour after trigger — 4 customer reviews (no discount)
- Email #2 — reminder — 4 hours later — 4 customer reviews (no discount)
- Email #3 — reminder — 24 hours later — 3 bestsellers (no discount)
- Email #4 — reminder — 24 hours later — 4 customer reviews (no discount)
- Email #5 — reminder — 24 hours later — 4 customer reviews (no discount)
- *Source: 002-browse-abandonment-flows.md*

### Browse Abandon Flow (5 Emails — Gamma Course)
- Email #1: Reminder — simple reminder of item, dynamic abandoned content
- Email #2: Brand Info + Risk Reversals — build trust, show recommended products
- Email #3: Testimonials — social proof to overcome skepticism
- Email #4 [Optional]: Discount Opener — small offer for the nudge
- Email #5 [Optional]: Discount Closer — urgency on discount, second-best performer
- *Source: course-browse-abandon-flow-_-gamma.md*

### Browse Abandon Key Rules
- Remind visitor about the product they viewed and highlight benefits
- Focus CTA on selling the ONE item they viewed — don't flood with options
- No discount in first email
- Add customer reviews for social proof
- Use urgency in later emails ("popular item, stock running low")
- *Source: 002-browse-abandonment-flows.md*

---

## 4. WELCOME FLOW

### Standard 3-Email Welcome Flow (Budai Media)
- Email #1 — immediately after arriving on list — thank them, encourage discount use (48hr expiry), list 4 bestsellers
- Email #2 — 1 day later — reminder coupon expiring in 24 hours
- Email #3 — 12 hours later — similar to email 2 (different CTA)
- *Source: 004-welcome-flow-what-to-offer.md*

### 7-Email Welcome Series (Chase Chappell)
- Email 1: Welcome offer intro (20% off) — trigger: pop-up opt-in, delay: 0 min
- Email 2: Brand mission & story from founders (offer reminder) — trigger: no order in 24hrs, delay: 1 day
- Email 3: Best-selling products & benefits (offer reminder) — trigger: no order in 48hrs, delay: 2 days
- Email 4: Customer story highlights & reviews — delay: 3 days
- Email 5: Blog content on product science — delay: 4 days
- Email 6: Product routines/recommendations via pain points — delay: 5 days
- Email 7: Welcome offer bumped up for next 48 hours only — trigger: no purchase after 7 days
- *Source: 03-email-flows.md*

### Welcome Flow Offer Conversion Rates (Privy CEO data)
- No offer, just newsletter signup: 2-3% conversion
- Discount: 5-10% conversion
- Free shipping: ~10% conversion
- Free sample: 15-20% conversion
- *Source: 004-welcome-flow-what-to-offer.md*

### Welcome Flow Filters
Must add flow filters to stop emails when customer makes a purchase:
- Placed Order zero times since starting this flow
- Started Checkout zero times since starting this flow
- Viewed Product zero times since starting this flow
- *Source: 004-welcome-flow-what-to-offer.md*

### Welcome Flow Content Options (CXL)
- **Option 1 (Multi-email):** Brand history → brand evolution → today → vision → sales email (Day 12)
- **Option 2 (Single email):** Personal hello from team member → sales email (Day 7)
- Sales offer options: Discount code (10%), free shipping, or exclusive limited product/sample
- *Source: 05-email-automation-bestpractices-cxl-x-tantee.md*

---

## 5. SITE ABANDON FLOW

### Single Email Site Abandon Flow
- Purpose: Get customer back on site by showing bestsellers
- Content: Address their interest, show bestsellers, offer further browsing
- Subject lines: "Need some help?", "Find something you like?", "Let us point you in the right direction…"
- Only 1 email needed since user will also receive campaigns
- *Source: course-site-abandon-flow-_-gamma.md*

---

## 6. POST-PURCHASE FLOWS

### First & Second Order Flow (CXL)
- Written as unformatted email from support staff (NOT leadership) for authenticity
- Sent 24h after order
- Use correct signature but remove phone numbers for authenticity
- Purpose: personal appreciation & customer loyalty to increase CLV
- *Source: 05-email-automation-bestpractices-cxl-x-tantee.md*

### Post-Purchase Flow Sequence
- Email 1 (after order): Ask for Instagram photo
- Email 2 (5 days after): Ask for product review + product placement
  - Optional: Add FAQ with top 3 questions at bottom to minimize support effort
- Email 3 (10 days after): Cross-sell
- *Source: 05-email-automation-bestpractices-cxl-x-tantee.md*

---

## 7. WINBACK FLOW

### 4-Email Winback Sequence (CXL)
- Email 1 (60 days after order): Current bestsellers recommendation
- Email 2 (120 days after): Bestsellers + limited 72h discount offer
- Email 3 (122 days after): Reminder that 72h offer is expiring
- Email 4 (365 days after): Unformatted email from support asking for feedback
- Purpose: Reactivate dormant customers, increase CLV, gain churn insights
- *Source: 05-email-automation-bestpractices-cxl-x-tantee.md*

---

## 8. EMAIL KPI BENCHMARKS

### Target KPIs (Chase Chappell)
- Email pop-up opt-in rate: 10-15%+
- Email-attributed revenue: 30%+
- Email open rates: 40%+
- Click rate: 3-5%+
- Order rate: 2-5%+
- *Source: 03-email-flows.md*

### Cart Abandonment Statistics
- 70-85% of ecommerce carts are abandoned (2024)
- 30%+ of shoppers plan to buy later but don't
- 59% of US customers abandon because they're "just browsing" (using cart as "like button")
- 26% end up buying the abandoned item from a competitor
- *Source: abandoned-cart-83-page-guide-_-gamma.md, course-cart-_-checkout-abandon-flow-_-gamma.md*

---

## 9. SEGMENTATION STRATEGY

### Go Broad for Niche Brands (Adam Kitchen / Magnet Monster)
- Customer behavior changes over time — don't over-segment based on first purchase
- For niche brands with clear offering: keep majority of campaign strategy BROAD
- Hyper-segmentation reduces click rate but can halve total traffic/conversions
- Example: 10k sends at 5% CTR = 500 visits vs 50k sends at 2% CTR = 1,000 visits (100% uplift)
- Goal: maximize impressions, total conversions, minimize resource allocation
- *Source: 8-segmentation_strategy_-_creating.md*

### Recommended Engagement Tiers for Campaigns
- Use 30, 60, 90, and 180-day engaged segments
- Blend site activity AND email responsiveness
- Include "In Newsletter List" condition depending on consent management
- *Source: 8-segmentation_strategy_-_creating.md*

### Apple iOS MPP Segmentation Strategy
- Apple's Mail Privacy Protection (iOS 15) preloads tracking pixels — open rates unreliable for ~50% of users
- **New metrics for Apple users:** clicked email within X days, active on site in last X days, purchased in last X days
- **Click is most important engagement signal** since web tracking may also be disabled
- 3-step process: (1) Identify MPP users, (2) Identify unengaged MPP users, (3) Create new engaged segments excluding unengaged MPP
- Use 30-day base for "unengaged" definition; expand to 60/90 based on send frequency
- Add condition: customer received X emails within timeframe (don't suppress people you weren't emailing)
- *Source: 8-segmentation_strategy_.md*

### Long-Term Segmentation Opportunities
- Segment by product: recommend accessories, related products, product-specific email courses
- Segment by purchase count: first-time buyers get tips + popular add-ons; repeat buyers get different treatment
- Consider further segmentation based on goals and resources
- *Source: 05-email-automation-bestpractices-cxl-x-tantee.md*

---

## 10. DELIVERABILITY & SENDER REPUTATION

### 6-Week Delivery Recovery Protocol
- If open rates sub-40%, likely landing in promotions/spam
- **Weeks 1-3:** Create 14/30/60/90-day engaged lists; turn off all flows except Welcome, Browse Abandon, Cart/Checkout Abandon, Post-Purchase
- **Weeks 3-4:** Send 3x/week campaigns ONLY to 14-day engaged list; once 50%+ opens, expand to 30-day
- **Weeks 5-6:** Monitor opens stay above 40-50%; expand to 60-day engaged
- **Week 6+:** Send to 90-day engaged; 1x/month to expanded list
- Real client example: went from 20-30% opens to recovery in 60 days with revenue increase
- *Source: course-6-week-delivery-recovery-protocol-_-gamma.md*

---

## 11. DYNAMIC CONTENT IN ABANDONMENT EMAILS

### Dynamic Content is #1 Priority
- THE most important part of abandonment emails — items load per-user in Klaviyo
- Personalized dynamic content dramatically improves conversions
- Cart abandon and checkout abandon dynamic sections are DIFFERENT — always preview

### Checkout Abandon Dynamic Content (Klaviyo)
- Use "Table" block → Dynamic → Row collection: `event.extra.line_items`, Row alias: `item`
- Dynamic image variable: `{% if item.product.variant.images.0.src %}{{item.product.variant.images.0.src}}{%else%}{{item.product.images.0.src|missing_product_image}}{%endif%}`
- Item name: `{{ item.product.title }}`
- Price: `{% currency_format item.line_price|floatformat:2 %}`
- Quantity: `{{ item.quantity|floatformat:0 }}`
- Checkout link: `{{ event.extra.checkout_url|default:'' }}`

### Cart Abandon Dynamic Content (Klaviyo)
- Use "Split" block
- Dynamic image: `{{ event.ImageURL }}`
- Item name: `{{ event.Name }}`
- Price: `{{ event.Price|default:'' }}`
- Link: cart page URL or `{{ event.URL }}`

### Browse Abandon Dynamic Content (Klaviyo)
- Use static "Table" block
- Dynamic image: `{{ event.ImageURL }}`
- Item name: `{{ event.Name }}`
- Price: `{{ event Price|default:'' }}`
- Link: `{{ event.URL }}` (goes to product page they viewed)
- *Source: course-abandonment-dynamic-content-_-gamma.md, course-cart-_-checkout-abandon-flow-_-gamma.md*

---

## 12. FLOW A/B TESTING

### Priority Testing Areas (Highest → Lowest Levers)
1. **Time delays** — biggest lever: test time from customer action to first email, and delays between messages
2. **Long form vs short form** — especially for abandonment flows where objection handling matters
3. **Graphic vs text based** — applies to campaigns and flows
4. **Categories vs individual products** — product display format
5. **Subject lines and preview text** — standard test
- *Source: course-flow-a_b-tests-_-gamma.md*

### Subject Line Best Practices
- Don't overthink subject lines for flow emails
- Keep them short and to the point
- Plain, uninspired subject lines tend to work fine for automated flows
- A/B test 2 subject lines per email
- *Source: 004-welcome-flow-what-to-offer.md*

---

## 13. NEWSLETTER & CONTENT STRATEGY

### Newsletter Content Ideas (15 Types)
1. Testimonials
2. Launches
3. Freebies
4. Giveaways
5. Market Research
6. Value
7. YouTube videos
8. Group promotions
9. Livestream
10. Story
11. Special deals (Black Friday, Xmas, etc)
12. Questions
13. Promotion
14. Database reactivation
15. Updates
- *Source: 3-the-newsletter-vault-1.md*

### Content Calendar Rule: 80% Value / 20% CTA
- Example weekly rotation: Story Post → Quick Win → Pro-tips → Client Interview → Livestream → Freebie → Testimonial
- Always include testimonial on Sunday
- Livestream every Friday
- *Source: 3-group-calendar.md*

### Content Repurposing Loop (Infinite Content Loop)
One idea can become: new tweets → thread → individual tweets → auto-DM → YouTube video → 3 YouTube shorts → LinkedIn posts → LinkedIn carousel → email → Telegram voice note → blog post
- Monitor which ideas perform well, recycle into different formats
- *Source: 8-workflow-mastery.md*

---

## 14. CUSTOMER-CENTRIC APPROACH

### Key Principles
- Deliver right content at right time to right people
- Go beyond basic automations with advanced flow splits for personalization
- Understand DTC shopper journey stages and automate communication during each
- "Customer-centric" means adapting to where the customer is in their journey, not blasting everyone the same
- *Source: 06-automating-key-stages-of-customer-journey.md*

---

## 15. WINNING SUBJECT LINES LIBRARY

### Cart/Checkout Abandon Subject Lines
- "Watcha got there?"
- "You left something behind…"
- "Forget something?"
- "Eying something?"
- "See something you liked?"
- "Is your wifi doing alright?"
- "This catch your eye?"
- "This would look good in your mailbox."
- "You have great taste."
- "Everything cool with your cart?"
- "Your order is waiting…"
- "Running out of time"
- "Last chance to claim"
- "Your order is expiring"
- "Gone tomorrow"
- "[Offer] Expires Tonight 🚨"
- "Gone forever"
- "Your offer is heading out the door"
- "Bye 👋"
- "Everything okay?"
- "Just checking in"
- "Was this on purpose?"

### Browse Abandon Subject Lines
- "See something you liked?"
- "Have your eyes on something?"
- "You've got good taste"
- "Waiting for you"
- "Ready when you are!"
- "Leave this behind?"
- "You can trust us"
- "Trusted by [number]"
- "You may also like…"
- "⭐⭐⭐️⭐️⭐️"
- "The people have spoken!"
- "Flash Discount! 🚨"
- "A special offer just for you"
- "Act Fast 🎁"
- "[Offer] Expires Tonight 🚨"

### Site Abandon Subject Lines
- "Need some help?"
- "Find something you like?"
- "Let us point you in the right direction…"
- "Here's what you missed"
- "Did you check these out?"

---

## 16. KLAVIYO TECHNICAL SETUP

### Added to Cart Trigger (Not Built-In)
- Klaviyo does NOT have "Added to Cart" as a default metric — must be manually added
- Step 1: Add snippet to Shopify (Custom Liquid block on product page, or theme.liquid before `</body>`)
- Step 2: Test by adding `?utm_email=testing.email@gmail.com` to URL, add item to cart, check Klaviyo profile
- *Source: course-cart-_-checkout-abandon-flow-_-gamma.md*

### Klaviyo Dynamic Blocks Documentation
- https://help.klaviyo.com/hc/en-us/articles/360032871031-How-to-Build-Dynamic-Blocks-in-a-Flow-Email
- *Source: 001-abandoned-cart-flows.md, 002-browse-abandonment-flows.md*

---

## Files Referenced (30/30)

1. `001-abandoned-cart-flows.md`
2. `002-browse-abandonment-flows.md`
3. `004-welcome-flow-what-to-offer.md`
4. `03-3.md`
5. `03-email-flows.md`
6. `05-email-automation-bestpractices-cxl-x-tantee.md`
7. `06-automating-key-stages-of-customer-journey.md`
8. `1-overall-flow.md`
9. `3-group-calendar.md`
10. `3-the-newsletter-vault-1.md`
11. `31-the-newsletter-vault-1.md`
12. `8-segmentation_strategy_-_creating.md`
13. `8-segmentation_strategy_.md`
14. `8-workflow-mastery.md`
15. `abandoned-cart-83-page-guide-_-gamma.md`
16. `abandoned-cart-email-1.md`
17. `abandoned-cart-email-2.md`
18. `abandoned-cart-email-3.md`
19. `abandoned-cart-email-4.md`
20. `abandoned-cart-email-6b.md`
21. `abandoned-cart-email-7.md`
22. `browse-abandon-flow.md`
23. `cart-checkout-abandon-flows.md`
24. `course-6-week-delivery-recovery-protocol-_-gamma.md`
25. `course-abandonment-dynamic-content-_-gamma.md`
26. `course-browse-abandon-flow-_-gamma.md`
27. `course-cart-_-checkout-abandon-flow-_-gamma.md`
28. `course-flow-a_b-tests-_-gamma.md`
29. `course-flows-intro-_-gamma.md`
30. `course-site-abandon-flow-_-gamma.md`

---

# BATCH 2 — Files 31-60 (Detailed Notes)

---

## 17. WELCOME FLOW — FULL 8-EMAIL SEQUENCE

Source: `welcome-flow-mastery-_-gamma.md` (Max Sturtevant / Well Copy — $20M+ agency), `course-welcome-flow-_-gamma.md`, `step-1.md`

**Core insight:** For every $1 on paid ads you get $2 back; for every $1 on email you get $44 back. A dialed-in welcome flow adds 7 figures in annual revenue and lowers CPA by up to 50%.

**8-Email Welcome Flow (7-14 day duration):**

| Email | Name | Purpose | Timing |
|-------|------|---------|--------|
| 1 | Welcome + Offer | Deliver discount, brief brand intro | Immediate |
| 2 | Brand Story | Founding story, mission, face to the name | +24 hrs |
| 3 | Brand USPs | Unique selling propositions | +24 hrs |
| 4 | Discount Reminder | Urgency, social proof, risk reversals | +2 days |
| 5 | Us vs Them | Address competitors, pros/cons | +2 days |
| 6 | Testimonials | Dedicated social proof | +2 days |
| 7 | Final Offer | Strongest urgency | +2 days |
| 8 | Breakup / Downsell | Lower barrier or soft close | +2 days |

**Flow architecture:**
- Entry: "Someone joins list". Filter: "Made purchase since starting flow"
- Property: WelcomeFlow = Active/Inactive
- SMS branch: parallel welcome offer if consented
- Subject lines: "Welcome to __!", "Your _% off code is waiting...", "Here's your welcome gift!"
- Objections: Who is this brand? Are they real? Will they scam me? Does product work? Worth the price?
- Non-buyers: stay top of mind with campaigns. Abandonment flows = "clean up crew"

---

## 18. WINBACK FLOW — 3-EMAIL SEQUENCE

Source: `course-winback-flow-_-gamma.md`

99% of retention comes from campaigns (3-4/week). Winback is for CX automation.

| Email | Name | Purpose |
|-------|------|---------|
| 1 | "It's Been Awhile" | Make them feel missed |
| 2 | Discount Open | Automated custom discount |
| 3 | Text-Based Closer | Personal text email close |

Subject lines: "It's been awhile...", "We miss you!", "Time for a restock?", "X% OFF just for you", "We got you a gift"

---

## 19. POST-PURCHASE — 6-STEP FRAMEWORK (Adam Kitchen)

Source: `written-by-adam-kitchen-2.md` (Magnet Monster)

**Trigger: "Fulfilled Order" NOT "Placed Order"**

1. Eliminate buyer's remorse — CEO message, overcome anxiety
2. Manage delivery — Wonderment integration, separate flows per trigger
3. Educate on product — adoption BEFORE repeat purchase ask
4. Request review/UGC — after adoption confirmed
5. Build omnichannel — SMS, TikTok, Instagram
6. Drive repeat sales — time sensitivity for FMCG, bundles for AOV

Exclusion segments: don't muddy flow experience with campaign sends.

---

## 20. NPS FLOW IN KLAVIYO (Adam Kitchen)

Source: `written-by-adam-kitchen.md`

No third-party software needed. 0-6 Detractors, 7-8 Passives, 9-10 Promoters.
NPS = (% Promoters) - (% Detractors). Range: -100 to 100.

Setup: custom property -> preference centre -> flow at 21 days post-fulfillment -> image buttons -> route by score.

---

## 21. BIRTHDAY FLOW — ZERO-PARTY DATA + PHYSICAL GIFT

Source: `written-by-adam-kitchen-4.md`

4 steps: date property -> collect birthday + favorites via multistep forms -> date-based flow 2 weeks BEFORE birthday -> internal CS notification to send personalized physical gift.

---

## 22. PREDICTIVE ANALYTICS / EDNO FLOW

Source: `written-by-andrew-langhorn.md` (Magnet Monster)

Klaviyo ML predicts reorder timing. Requires: 500+ customers, 180+ days history.
Rules: Don't count down to EDNO. Complements replenishment flows. Use for first-time buyers.
Case: waterdrop — high-frequency buyers, gifting incentives, churn prevention.

---

## 23. 6 CREATIVE ENGAGEMENT TYPES (Adam Kitchen)

Source: `written-by-adam-kitchen-3.md`

1. Competitions — replies, clicks, ISP signals
2. Content Distribution — blogs, tutorials, newsletters
3. Surveys — zero-party data, feedback loops
4. Product Education — performs equal to offers, no margin erosion
5. UGC — reviews in flows and campaigns
6. Two-Way Conversations — text emails, ISP loves replies

---

## 24. SECOND-ORDER COST OF BROKEN EMAIL

Source: `tenza-second-order-problems.md`

$1M brand: 8% email = $80K/yr. Benchmark 25% = $250K/yr. Gap: $170K/yr.
5 effects: rising CPM, flat LTV, list degradation, invisible gap, compounding fix cost.

---

## 25. TENZA BUSINESS FRAMEWORK

Source: `tenza-growth-roadmap.md`, `tenza-guarantee-terms.md`, `tenza-mvm-client.md`

Phase 1: $2,000 (3 flows, 72 hrs, SPF/DKIM/DMARC). Phase 2: $500-800/mo (8-12 campaigns).
30-day guarantee. 9-step build process.

---

## 26. COPY ANTI-PATTERNS

Source: `course-what-to-avoid-in-your-copy-_-gamma.md`

Avoid: unnecessary info, too long, too many points, boring, no value. ONE takeaway per email.

---

## 27-30. SUPPLEMENTARY FILES

27. `goldenrules*.md` — P.T. Barnum business wisdom
28. `spiritualmarketing*.md` — Joe Vitale 5-step formula
29. `moneyvipprogram.com-10.md` — Twitter/X profile optimization
30. `perfect-flow-conversation-method...` — Sales conversation recovery

---

## Files 31-60 — Reference List

31. `course-welcome-flow-_-gamma.md` — 8-email welcome flow
32. `course-what-to-avoid-in-your-copy-_-gamma.md` — 5 copy anti-patterns
33. `course-winback-flow-_-gamma.md` — 3-email winback
34. `email-copy-frameworks.md` — Copy frameworks hub
35. `email-sequence-design.md` — Sequence design
36. `flows-intro.md` — Flows intro
37. `goldenrules-1.md` — P.T. Barnum (text)
38. `goldenrules.md` — P.T. Barnum (PDF)
39. `moneyvipprogram.com-10.md` — Twitter optimization
40. `perfect-flow-conversation-method...` — Sales recovery
41. `post-purchase-flow.md` — Post-purchase links
42. `site-abandon-flow.md` — Site abandon links
43. `spiritualmarketing-1.md` — Joe Vitale (alt)
44. `spiritualmarketing.md` — Joe Vitale (full)
45. `step-1.md` — Welcome flow architecture
46. `tenza-growth-roadmap.md` — Growth roadmap
47. `tenza-guarantee-terms.md` — Guarantee terms
48. `tenza-mvm-client.md` — DFY build process
49. `tenza-second-order-problems.md` — Broken email costs
50. `welcome-flow-mastery-_-gamma.md` — 8-email guide
51. `welcome-flow.md` — Welcome links
52. `when-they-enter-the-flow-2.md` — Flow triggers
53. `when-they-enter-the-flow-3.md` — Flow triggers
54. `when-they-enter-the-flow-4.md` — Flow triggers
55. `winback-flow.md` — Winback links
56. `written-by-adam-kitchen-2.md` — Post-purchase 6-step
57. `written-by-adam-kitchen-3.md` — 6 engagement types
58. `written-by-adam-kitchen-4.md` — Birthday flow
59. `written-by-adam-kitchen.md` — NPS flow
60. `written-by-andrew-langhorn.md` — EDNO flow
