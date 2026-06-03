# Layer 16 Round 3: Flow Architecture — Wiki Extraction

Extracted: 2026-05-25
Source: /root/wiki — tenza-marketing/_hub-email-marketing/, skills-tools/, marketing-copy/
Wiki pages referenced: 12+

---

## 1. CORE FLOW ARCHITECTURE FRAMEWORK

Source: tenza-marketing/_hub-email-marketing/__enqueued__/tenza-core-email-flows-reference.md

Every eCommerce brand needs a baseline set of automated email flows. These are the high-impact, always-on sequences that drive the majority of automated revenue — typically 30-50% of total email revenue when properly built.

### The Essential Flows

**1. Welcome Flow (Subscriber Onboarding)**
- Trigger: Email signup (modal, popup, checkout)
- Sequence: 3-5 emails over 7-14 days
- Goal: Convert subscriber to first-time buyer
- Content arc: Brand story → Best sellers → Social proof → Offer → CTA
- KPI: Welcome-to-purchase conversion rate (benchmark: 15-25%)

**2. Abandoned Cart Flow**
- Trigger: Items added to cart, no purchase within 1 hour
- Sequence: 3 emails over 72 hours
- Goal: Recover lost revenue
- Cadence: Email 1 at 1 hour (reminder), Email 2 at 24 hours (social proof + urgency), Email 3 at 72 hours (offer or incentive)
- KPI: Recovery rate (benchmark: 8-15% of abandoned carts converted)

**3. Browse Abandonment Flow**
- Trigger: Viewed product page or category, did not add to cart
- Sequence: 2-3 emails over 48 hours
- Goal: Recover intent before competitor capture
- Content: Product highlight → Category exploration → Social proof
- KPI: Click-to-purchase conversion rate

**4. Post-Purchase Flow**
- Trigger: Order confirmed
- Sequence: 4-6 emails over 14-30 days
- Goal: Retention + upsell + review generation
- Cadence: Order confirmation (transactional) → Shipping update → Usage tips → Review request → Cross-sell → Loyalty program invite
- KPI: Repeat purchase rate within 60 days

**5. Winback Flow**
- Trigger: No purchase in 90-180 days
- Sequence: 3 emails over 2 weeks
- Goal: Re-activate dormant customers
- Content: "We miss you" → What's new → Incentive to return
- KPI: Reactivation rate (benchmark: 5-10%)

**6. Sunset Flow**
- Trigger: No opens or clicks in 180+ days
- Action: Reduce frequency → Final "still interested?" email → Unsubscribe
- Goal: Maintain list hygiene and protect sender reputation
- KPI: Bounce rate reduction, spam complaint rate

### Flow Architecture Principles
- Single-trigger flows are easier to debug than multi-trigger
- Use conditional splits for segments (VIP vs. new vs. lapsed) within flows
- Add suppression lists to prevent cross-flow overlap
- Always include an explicit unsubscribe within each flow

---

## 2. WELCOME FLOW — DETAILED ARCHITECTURE

Source: tenza-marketing/_hub-email-marketing/__enqueued__/01-welcome-flow.md
Source: tenza-marketing/_hub-delivery/__enqueued__/welcome-flow-build-spec.md

### Overview
The Welcome Flow is the most important automated sequence in your email program. It fires when someone joins your email list and is their first direct brand experience beyond the website. This flow converts a curious subscriber into a first-time buyer by building brand affinity, trust, and urgency over a structured 7-14 day arc. A well-built welcome flow typically drives 15-25% welcome-to-purchase conversion and contributes a significant share of total automated revenue.

### Trigger
- Event: List Subscribe → Email List
- Start: Immediately upon subscription

### Flow Structure (from build spec)
```
[Trigger: List Subscribe]
        │
        ▼
  ┌──────────────┐
  │  Welcome E1   │  ← 0 min after trigger
  │  (Intro/Brand)│
  └──────┬───────┘
         │
         ▼
  ┌──────────────────────┐
  │  Condition: Has      │
  │  Prior Purchase?     │
  └──────┬───────┬───────┘
        YES      NO
         │        │
         ▼        ▼
      (Skip)   ┌──────────────┐
               │  Welcome E2   │  ← 24 hr after trigger
               │  (Value Prop) │
               └──────┬───────┘
                      │
                      ▼
               ┌──────────────┐
               │  Welcome E3   │  ← 48 hr after trigger
               │  (Offer/Push) │  includes AI product recs
               └──────────────┘
```

### Email Specifications

**Welcome E1 — Brand Introduction**
- Timing: 0 minutes after subscribe
- Subject line: Warm brand intro, max 50 chars
- Preview text: Extend subject, max 90 chars
- Body: Welcome + brand story + what to expect
- CTA: "Explore [Collection]" → product catalog
- AI Recs: No

**Welcome E2 — Value Proposition**
- Timing: 24 hours after subscribe
- Subject line: Highlight benefit / social proof
- Preview text: Build curiosity
- Body: Customer testimonial / best-sellers
- CTA: "Shop Best Sellers" → top products
- Filter: Skip if Placed Order ≥ 1
- AI Recs: No

**Welcome E3 — Offer / Conversion Push**
- Timing: 48 hours after subscribe
- Subject line: Incentive-driven (discount / free shipping)
- Preview text: Urgency or scarcity angle
- Body: Offer details + social proof
- CTA: "Claim Your Offer" → offer landing page
- AI Recs: Yes — include 4 recommended products

### Offer Benchmarks (from Privy CEO data)
- No offer, just newsletter signup: 2-3% conversion
- Discount offer: 5-10% conversion
- Free shipping: ~10% conversion
- Free sample: 15-20% conversion
- 20% off is a common starting offer

### Content Arc (5-step)
1. Brand story & thank you — introduce the brand mission, founder story, and a warm welcome
2. Best sellers — showcase top products with benefits and social proof
3. Social proof — customer stories, testimonials, review highlights
4. Offer / incentive — deliver the welcome discount (if not already given) with urgency
5. Final CTA — last chance to use the offer before it expires

### Conditional Filter Logic
On the branch between E1 and E2:
1. Add a Conditional Split node
2. Evaluation: Placed Order count ≥ 1 (at least once)
3. YES branch → no further emails (exit flow)
4. NO branch → continue to E2 and E3

### Flow Filters to Add
- "Placed Order zero times since starting this flow" — removes buyers
- "Started Checkout zero times since starting this flow" — removes those already in checkout
- "Viewed Product zero times since starting this flow" — removes active browsers

### UTM Parameters
- utm_source=klaviyo
- utm_medium=email
- utm_campaign=welcome-series

### Common Mistakes
- Forgetting the conditional filter on E2+ (sends welcome to existing customers)
- Incorrect timing (hours vs days — always use "hours after trigger")
- Missing UTM params on links
- Enabling flow before all emails are fully built

---

## 3. ABANDONED CART FLOW — DETAILED ARCHITECTURE

Source: tenza-marketing/_hub-email-marketing/__enqueued__/02-abandoned-cart.md

### Overview
The Abandoned Cart Flow targets customers who added items to their cart but left without completing a purchase. With 70-85% of eCommerce carts abandoned, this is the single highest-leverage recovery opportunity. These customers have already demonstrated high purchase intent — they selected products, filled in shipping details, and were only a click away from converting. A well-optimized abandoned cart flow recovers 8-15% of otherwise lost revenue and is typically the highest-converting flow in any email program.

### Critical Technical Distinction
There is a critical distinction between "Added to Cart" (earlier in funnel, more volume) and "Checkout Started" (further down funnel, higher intent). Klaviyo's default "Abandoned Cart" flow is actually a Checkout Abandon flow. To capture the majority of abandonments, you must set up a proper Added to Cart trigger using a custom snippet on your Shopify theme.

### Standard 3-Email Cadence (Budai Media)
- Email #1 (1 hour after trigger): Customer reviews — dynamic product block showing abandoned items, social proof
- Email #2 (4 hours later): More customer reviews, reinforce product value
- Email #3 (24 hours later): Customer reviews again, different angle

### 4-Email Cadence (Chase Chappell)
- Email 1 (15 min): Dynamic product images of items in cart
- Email 2 (12 hours): Reminder with special offer, features & benefits
- Email 3 (24 hours): 10% off or similar incentive
- Email 4 (48 hours): Last chance

### Technical Setup (Shopify + Klaviyo)
1. Add custom liquid snippet to product page to fire "Added to Cart" event
2. Test the snippet works by navigating to site with ?utm_email=test@email.com
3. Set flow trigger to "Added to Cart" (not "Checkout Started")
4. Add flow filter: "Placed Order zero times since starting this flow"
5. Add flow filter: "Started Checkout zero times since starting this flow"

### Dynamic Content Best Practices
- Every email should include a dynamic product block showing the exact items abandoned
- For single-product stores, write highly specific benefit copy
- For multi-product stores, use conditional logic: if 1 item → singular copy, if 2+ → plural copy

### Optimization Tips
- A/B test offer vs. no-offer — many brands recover sufficient revenue without discounting
- Test timing: try 15 min / 1 hr / 4 hr / 24 hr / 48 hr spacing
- For high-AOV stores, consider phone call or SMS follow-up for very large carts
- Add exit-intent popups that capture email before the customer leaves

---

## 4. BROWSE ABANDONMENT FLOW — DETAILED ARCHITECTURE

Source: tenza-marketing/_hub-email-marketing/__enqueued__/03-browse-abandonment.md

### Overview
The Browse Abandonment Flow targets visitors who viewed one or more product pages but did not add anything to their cart. These customers have shown interest but need more information, trust-building, or a nudge to move down the funnel. Unlike abandoned cart, browse abandonment recovery requires convincing the prospect that your product and brand are worth their investment. This flow typically uses 2-3 emails over 48 hours to re-engage browsers before they find a competitor.

### Standard 3-Email Cadence
- Email #1 (1 hour): Simple reminder — "See something you liked?" with dynamic product block showing viewed items
- Email #2 (24 hours): Brand info and risk reversals — shipping information, guarantees, refunds, social proof, recommended products
- Email #3 (48 hours): Testimonials — customer success stories and reviews to overcome objections

### Optional Emails
- Email #4 (Day 3): Discount opener — small offer or incentive to tip the decision
- Email #5 (Day 4): Discount closer — "Last chance" urgency on the offer

### Content Strategy by Email
| Email | Goal | Content |
|-------|------|---------|
| #1 | Reminder | Dynamic product images, simple headline, single CTA |
| #2 | Trust building | Risk reversals (guarantees, shipping, refunds), recommended products |
| #3 | Social proof | Testimonials, review highlights, customer count |
| #4 (opt) | Offer | Discount or incentive, dynamic product block, social proof icons |
| #5 (opt) | Urgency | Last chance on offer, expiring discount |

### Technical Setup
- Trigger: "Viewed Product" event (ensure this is firing correctly from your store)
- Flow filters: "Added to Cart zero times since starting this flow", "Placed Order zero times since starting this flow"
- Use dynamic content blocks to show the exact products the customer viewed
- For category-level browsing, show top products from that category

### Risk Reversals That Work
- Free shipping and returns
- Money-back guarantee (30/60/90 day)
- "No questions asked" return policy
- Secure checkout badges
- Try-before-you-buy options

### Optimization Tips
- Test longer-form copy vs. short-form — sometimes objections need to be worked through
- Browse abandoners may need more education about product benefits than cart abandoners
- Consider segmenting by new vs. returning visitor for different messaging
- If the customer viewed multiple products, use the most recently viewed as primary

---

## 5. POST-PURCHASE FLOW — DETAILED ARCHITECTURE

Source: tenza-marketing/_hub-email-marketing/__enqueued__/04-post-purchase.md

### Overview
The Post-Purchase Flow fires immediately after a customer places an order. This is a critical retention sequence that serves multiple purposes: improving the customer experience, reducing buyer's remorse, educating on product usage, generating reviews, and driving repeat purchases. A well-constructed post-purchase flow nurtures the customer from confirmation through delivery to loyalty enrollment over 14-30 days.

### Standard 6-Email Cadence (Tenza Core Reference)
1. Order confirmation (transactional, immediate) — thank you, order details, delivery estimate
2. Shipping update (triggered by fulfillment) — tracking information, what to expect
3. Usage tips (Day 3-5 after delivery) — how to get the most out of the product
4. Review request (Day 7-14 after delivery) — ask for product review, link to socials
5. Cross-sell / upsell (Day 14-21) — complementary products based on purchase
6. Loyalty program invite (Day 21-30) — enrollment in rewards or VIP program

### New vs. Returning Customer Segmentation
- First-time buyers: Welcome them to the community, tell the brand story, provide a discount incentive for the next purchase. Trigger: "Placed Order" with filter "Number of orders equals 1 all time."
- Repeat customers: Thank them for returning, draw attention to FAQs, provide a loyalty discount. Trigger: "Placed Order" with filter "Number of orders greater than 1 all time."

### Key Emails and Purpose
| Email | Timing | Purpose |
|-------|--------|---------|
| Order confirmation | Immediate | Reduce anxiety, confirm purchase, set delivery expectations |
| Shipping/tracking | On fulfillment | Build anticipation, reduce "where is my order" tickets |
| Usage tips | Day 3-5 post-delivery | Improve product results, reduce returns, increase satisfaction |
| Review request | Day 7-14 | Generate social proof, identify detractors early |
| Cross-sell | Day 14-21 | Increase AOV through complementary products |
| Loyalty invite | Day 21-30 | Drive long-term retention and repeat purchases |

### Best Practices
- Make the thank-you email personal — a note from the founder goes a long way
- Educational content significantly reduces returns and increases perceived value
- Use dynamic content to personalize product tips based on what was ordered
- The review email should include direct links to leave a review (reduce friction)
- Add a "support" or "contact us" CTA to reduce customer service tickets
- For fulfillment-based triggers, ensure your store passes tracking events correctly to Klaviyo

---

## 6. WINBACK FLOW — DETAILED ARCHITECTURE

Source: tenza-marketing/_hub-email-marketing/__enqueued__/05-winback-flow.md

### Overview
The Winback Flow targets customers who have not made a purchase in 90-180 days. Its purpose is to re-activate dormant customers before they churn permanently. The flow keeps it simple — 3 emails over 2 weeks, with a progression from sentimental reconnection to incentive-driven conversion. The benchmark reactivation rate is 5-10%.

### Standard 3-Email Cadence
| Email | Timing | Message |
|-------|--------|---------|
| #1 — "It's Been Awhile" | Day 0 | We miss you, brand reminder, product highlights, purely for customer experience |
| #2 — "Discount Open" | Day 7 | Exclusive discount just for them, simple benefits, the offer is the focus |
| #3 — "Text-Based Closer" | Day 14 | Personal note from founder, last chance for the discount, urgency, support offer |

### Implementation Rules
- Add flow filter: "Placed Order zero times since starting this flow"
- Customers here are still receiving regular campaigns — the winback flow is supplementary
- Consider segmenting by previous purchase category for personalized product recommendations
- If a customer re-activates (places an order), move them into the post-purchase flow
- For customers who don't engage after 3 emails, consider moving them to the sunset flow

### When to Start the Winback Window
- Short cycle products (consumables, fashion): 90 days
- Long cycle products (durables, electronics): 180 days
- Analyze your average time between purchases to set the right trigger window

### Key Insight
Text-based emails from the founder consistently perform well for re-engagement.

---

## 7. VIP / EXCLUSIVE CUSTOMER FLOW

Source: tenza-marketing/_hub-email-marketing/__enqueued__/06-vip-flow.md

### Overview
The VIP Flow targets the highest-value customers — typically the top 10-15% of the customer base by order frequency or revenue. The Pareto Principle (80/20 rule) applies: roughly 20% of customers produce 80% of sales. These customers have the best lifetime value (LTV) and deserve special treatment. The VIP flow nurtures these relationships with exclusive offers, early access, surprise gifts, and premium content.

### VIP Definition Criteria
- By order count: "Placed order at least 3 times in the last 365 days"
- By revenue: "Placed order value at least $X" (e.g., $500 total)
- By AOV threshold: Customers whose average order value is significantly above store average
- Combination: Use any of the above based on business model

### VIP Sub-Segmentation
- Brand enthusiasts — reach them with products they already love
- High rollers — people who like to feel special; exclusivity drives purchases
- Advocacy candidates — those most likely to refer friends and family

### Content Strategy
- Exclusive offers: VIP-only discounts, free shipping on every order, birthday gifts
- Early access: Product drops, sales, and new collections open to VIPs before the general public
- Surprise & delight: Unexpected gifts, handwritten notes, bonus items in orders
- VIP-only products: A collection of products available exclusively to this segment
- Advocacy program: Referral bonuses, "share with a friend" incentives
- Behind the scenes: Founder updates, production stories, community highlights

### Implementation Best Practices
- Use conditional splits to further personalize within the VIP segment
- Example: "High AOV" VIPs get luxury-focused content, "High Frequency" VIPs get replenishment reminders
- Personalize emails based on past purchase behavior
- Offer a free product once they order a certain amount to incentivize larger purchases
- Collect zero-party data (birthdays, preferences, favorite products) to deepen personalization
- Set up internal notifications for VIP actions like birthdays or large purchases

### Common Pitfalls
- Treating all VIPs the same — segment within the segment
- Over-incentivizing (training customers to wait for discounts)
- Forgetting the "surprise" element — predictable VIP programs lose their magic

---

## 8. REPLENISHMENT FLOW

Source: tenza-marketing/_hub-email-marketing/__enqueued__/07-replenishment-flow.md

### Overview
The Replenishment Flow targets customers who have purchased a consumable product and are nearing the end of their supply. This is a timing-based flow that sends a reminder to reorder before the customer runs out, effectively preventing them from turning to a competitor. It works best for products with predictable consumption cycles like oils, shampoos, supplements, packaged foods, pet supplies, and skincare.

### Timing Logic (example with 30-day supply)
- Email #1: 25 days after trigger (5 days before expected depletion)
- Email #2: 1 day after email #1 (24 hours later)

### Standard 2-Email Cadence
- Email #1 (25 days after purchase): Thank them for believing in the brand, encourage continued use, nudge to restock. Include at least 3 customer reviews. CTA options: reorder same product, buy bundle, or explore similar products.
- Email #2 (26 days after purchase): Simple reminder to reorder soon or get a monthly subscription. Include at least 3 reviews of the subscription option.

### Timing Calculation
- Determine the average consumption period for each product
- Set email #1 to send at approximately 80-90% of the consumption period
- For products with variable usage, use the conservative end of the range

### Flow Filters
- "Placed Order zero times since starting this flow" — stops flow if customer already reordered
- "Has not been in this flow since the last X days" — prevents re-entry too soon
- If you want to skip the flow for subscribers, add filter: "Has not subscribed to this product"

### Products That Work Best
- Skincare and cosmetics (serums, moisturizers, cleansers)
- Supplements and vitamins
- Pet food and treats
- Coffee, tea, and specialty food items
- Household consumables (cleaning products, laundry supplies)
- Baby products (diapers, wipes, formula)

---

## 9. SUNSET FLOW — LIST HYGIENE

Source: tenza-marketing/_hub-email-marketing/__enqueued__/08-sunset-flow.md

### Overview
The Sunset Flow manages subscribers who have not opened or clicked any emails in 180+ days. Its primary goal is not revenue but list hygiene — protecting sender reputation by removing disengaged contacts before they become a deliverability liability. ISPs monitor engagement rates; sending to unengaged subscribers increases the risk of landing in spam folders for the entire list.

### Standard 2-Email Cadence
| Step | Timing | Action |
|------|--------|--------|
| Enter flow | Day 0 | Email 1: "Update your preferences" CTA |
| Wait | 3 days | — |
| Day 3 | Email 2: "Is this goodbye?" — final confirmation |
| Wait | 5 days | — |
| Day 8 | Update profile property: Create "Suppress = True" | | | |

### After Flow Completes
- Update a profile property (e.g., Suppressed = True)
- Add the subscriber to a suppression list
- Consider suppressing for 6-12 months rather than permanently deleting
- If the subscriber makes a new purchase or re-engages via another channel, remove suppression

### Setting Up the Trigger
- In Klaviyo, create a segment: "Last opened email > 180 days ago AND Last clicked email > 180 days ago"
- Use this as the trigger for the sunset flow
- Add filter to exclude those who have already been through the sunset flow
- Consider excluding high-value customers (VIPs) and recent purchasers

### When to Sunset vs. When to Winback
- Winback flow (90-180 days no purchase): Focused on reactivation, sends offers, product-focused
- Sunset flow (180+ days no engagement): Focused on list hygiene, sends preference updates, removes unengaged
- Run winback first for dormant purchasers; if they don't reactivate, move them to sunset

### Best Practices for List Hygiene
- Run the sunset flow quarterly to keep your list clean
- Track spam complaint rate (benchmark: < 0.1%) and bounce rate (< 2%)
- Suppressed subscribers still exist in your database but are excluded from sends
- Consider a "preference center" link in every campaign email
- Never suppress someone who has made a purchase in the last 12 months unless they explicitly unsubscribe

---

## 10. CROSS-SELL & UPSELL FLOW

Source: tenza-marketing/_hub-email-marketing/__enqueued__/10-cross-sell-upsell.md

### Overview
The Cross-sell & Upsell Flow triggers after a purchase to recommend complementary or higher-value products based on the customer's purchase history and product affinity. Cross-selling suggests related items that enhance the original purchase, while upselling encourages a higher-tier product or larger quantity.

### Content Strategy
| Email | Timing | Message |
|-------|--------|---------|
| #1 — "Complete Your [Purchase]" | Day 3-5 | Complementary products — "You bought X, you'll love Y" |
| #2 — "Customers Also Bought" | Day 7-10 | Social proof-driven cross-sell — "People who bought X also bought Z" |
| #3 — "Upgrade Your Experience" | Day 14-21 | Upsell to premium version, bundle, or subscription |

### Cross-sell vs. Upsell
| | Cross-sell | Upsell |
|---|-----------|--------|
| Definition | Recommend related/complementary items | Recommend higher-tier version or larger quantity |
| Best for | Increasing items per order | Increasing value per item |
| Timing | 3-7 days post-purchase | 7-21 days post-purchase |
| Risk | Can feel pushy if irrelevant | Can cause buyer's remorse if too aggressive |

### Placement Options
- Option A: Standalone cross-sell flow that fires X days after purchase
- Option B: Integrated as email #5 in the post-purchase flow (recommended for most brands)
- Option C: Triggered by specific product purchase (strongest affinity signal)

### Common Pitfalls
- Recommending products the customer already owns
- Cross-selling too soon (before the customer has received their original order)
- Being too aggressive — 2-3 cross-sell attempts max per purchase cycle
- Ignoring product margins — prioritize cross-sells with higher margins
- One-size-fits-all recommendations — always personalize based on what was purchased

---

## 11. FLOW A/B TESTING & OPTIMIZATION

Source: tenza-marketing/_hub-email-marketing/__enqueued__/09-flow-ab-testing.md

### Testing Hierarchy (highest to lowest leverage)
| Lever | Impact | Test Duration | Complexity |
|-------|--------|---------------|------------|
| 1. Flow time delays | High | 2-4 weeks | Low |
| 2. Email count in flow | High | 4-8 weeks | Medium |
| 3. Long-form vs. short-form copy | Medium-High | 2-4 weeks | Low |
| 4. Offer type / discount level | High | 2-4 weeks | Low |
| 5. Subject lines & preview text | Medium | 1-2 weeks | Low |
| 6. Graphic vs. text-based emails | Medium | 2-4 weeks | Medium |
| 7. Categories vs. individual products | Low-Medium | 2-4 weeks | Medium |
| 8. CTA placement and design | Low | 2-4 weeks | Low |

### Common Flow A/B Tests
| Flow | Best Tests |
|------|------------|
| Welcome | Offer vs. no offer, 3-email vs. 5-email sequence, offer type (discount vs. free shipping) |
| Abandoned Cart | First email timing, with vs. without discount, discount % |
| Browse Abandonment | Number of emails, long vs. short copy, inclusion of testimonials |
| Post-Purchase | Timing of review request, cross-sell vs. upsell placement |
| Winback | Offer strength, text-based vs. designed email, timing between emails |
| Replenishment | Timing of first email (how many days before depletion), subscription pitch |

### How to Run a Flow A/B Test
1. Duplicate the flow — create a variant of your existing flow
2. Change one variable at a time — if you change timing and content together, you won't know which drove the result
3. Split traffic evenly — use Klaviyo's A/B testing feature or random split by profile property
4. Run for sufficient time — minimum 2-4 weeks, or until you have enough data for statistical significance
5. Analyze results per email — don't just look at the flow's overall performance
6. Implement the winner — replace the original flow with the winning variant
7. Test the next variable — move down the testing hierarchy

### Optimization Benchmarks
- Incremental lift target: 5-15% improvement per test
- Aim for continuous improvement through compounding tests over months
- Document every test and its result in a shared testing log

---

## 12. EMAIL MARKETING HUB — TOOLS & AUTOMATION

Source: tenza-marketing/__enqueued__/_hub-email-marketing.md

Email flows, campaigns, Klaviyo, deliverability, design, strategy. Files in this hub: 336.

### Email Marketing Tools Referenced
- AI copy frameworks for Claude & ChatGPT
- AI outreach DM framework
- Cold email AI revenue leak report tool
- Klaviyo Composer AI email generation
- LinkedIn AI content system
- n8n cold email automation workflow
- n8n email auto-responder workflow
- n8n marketing analytics workflows
- UVM welcome flow automation

---

## BRIGHTKIDCO APPLICABILITY NOTES

### Flow Priority for BrightKidCo (children's products DTC)
1. **Welcome Flow** — highest priority, first build
2. **Abandoned Cart** — highest revenue recovery lever
3. **Browse Abandonment** — capture intent signals
4. **Post-Purchase** — retention + review generation
5. **Replenishment** — if products are consumable/reorderable
6. **Winback** — re-activate dormant customers
7. **VIP** — reward top 10-15% customers
8. **Cross-sell/Upsell** — increase AOV
9. **Sunset** — list hygiene

### Key Architectural Decisions
- Single-trigger flows are easier to debug than multi-trigger
- Use conditional splits for segments within flows
- Add suppression lists to prevent cross-flow overlap
- Always include an explicit unsubscribe within each flow
- Flow filters should prevent buyers from receiving abandonment emails
- UTM parameters on every link for tracking

### Trigger/Filter Pattern
Every flow follows this architecture:
1. **Trigger** — the event that starts the flow (List Subscribe, Added to Cart, Viewed Product, Placed Order, etc.)
2. **Flow Filters** — conditions that remove people who shouldn't continue (already purchased, already in checkout, etc.)
3. **Conditional Splits** — branches within the flow for different segments (VIP vs. new, first-time vs. repeat)
4. **Suppression Lists** — cross-flow overlap prevention
5. **Timing Delays** — the cadence between emails (hours/days after trigger or previous email)
