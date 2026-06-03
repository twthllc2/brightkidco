# L14 R3: Frequency & Wording System — Wiki Extraction

## Overview

Extracted frequency, wording, cadence, and timing knowledge from 10 wiki pages across the Tenza Marketing, Email Marketing, Business Strategy, and Deliverability domains. Organized by system component: frequency frameworks, wording/subject line guidance, cadence management, and timing protocols.

---

## Wiki Pages Referenced

1. **Campaign Strategy (Gamma)** — `/root/wiki/tenza-marketing/business-strategy/__enqueued__/course-campaign-strategy-gamma.md`
2. **Email Automation Best Practices (CXL)** — `/root/wiki/tenza-marketing/email-marketing/__enqueued__/05-email-automation-bestpractices-cxl-x-tantee.md`
3. **Tenza Deliverability SOP** — `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/TENZA-DELIVERABILITY-SOP.md`
4. **Phase 2: Gradual Ramp-Up Schedule** — `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/tenza-deliverability-sop--phase-2-the-gradual-ramp-up-schedule-weeks-2-4.md`
5. **At-Risk Segment: Reduced Sending Frequency** — `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/TENZA-DELIVERABILITY-SOP--the-at-risk-segment-identifying-users-for-reduced-sending-frequency.md`
6. **Re-activating Core Flows & Resuming Normal Cadence** — `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/TENZA-DELIVERABILITY-SOP--re-activating-core-flows-resuming-a-normal-cadence.md`
7. **Content Rules for Avoiding the Promotions Tab** — `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/TENZA-DELIVERABILITY-SOP--content-rules-for-avoiding-the-promotions-tab.md`
8. **Subject Lines + Preview Text** — `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/Campaigns-and-types--subject-lines-preview-text.md`
9. **Flash Sale Subject Lines** — `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/Campaigns-and-types--flash-sale.md`
10. **Non-Discount & Educational Campaigns** — `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/Campaigns-and-types--non-discount-educational-campaigns.md`
11. **Email & SMS Campaigns Benchmark** — `/root/wiki/tenza-marketing/business-strategy/__enqueued__/07-balancing-your-communication-with-email-sms-campaigns.md`
12. **Email Campaign A/B Testing** — `/root/wiki/tenza-marketing/business-strategy/__enqueued__/3.-email-sms-campaigns.md`

---

## SECTION 1: FREQUENCY FRAMEWORKS

### 1.1 Optimal Campaign Sending Frequency (Gamma Course)

**Source:** `course-campaign-strategy-gamma.md`

**The 3 Tiers of Frequency:**

| Frequency | Outcome |
|-----------|---------|
| 1-2x per week | Customer forgets about you. Unable to form habit of opening emails. Leaving money on the table. |
| 3-4x per week | **OPTIMAL.** High revenue. Low unsubscribes. Top of mind with customer. Every email has equal weight and impact. |
| 5-7x per week | Higher unsubscribes. Customers can get annoyed. Dilutes the power of your messaging. Revenue plateaus. |

**Key Finding:** "3-4 campaigns per week consistently outperform."

**Why NOT 1x per week:**
- Average American exposed to 70+ ecommerce brands daily (younger audience almost double)
- Over 1 week = 490 different brands competing for attention
- Engagement and open rate DROP with once-per-week (counter-intuitive)
- Real case study: Bumping a client from 2x/week to 4x/week improved results

**Why NOT 2x per day:**
- "You don't want to ram content down your audience's throat"
- The issue isn't just frequency — it's sending the RIGHT content
- If you send only sales-focused content, audience gets annoyed regardless of frequency
- Balance: value + entertainment + tips alongside sales content

### 1.2 Flow Timing Intervals (CXL Course)

**Source:** `05-email-automation-bestpractices-cxl-x-tantee.md`

**Welcome/Newsletter Flow Timing:**
- Email 1: Right after Opt-In → Content part 1
- Email 2: Day 3 after Opt-In → Content part 2
- Email 3: Day 6 after Opt-In → Content part 3
- Email 4: Day 9 after Opt-In → Content part 4
- Sales Email: Day 12 after Opt-In (multi-email) OR Day 7 after Opt-In (single-email)
- Rule: Only send sales email if customer has NOT ordered since registering

**Checkout Abandonment Flow Timing:**
- Email 1: 30 minutes after abandoning → Reminder (cart reserved for 24h)
- Email 2: 24 hours after abandonment → Plain text from customer support
- Email 3: 72 hours after abandonment → Discount code or one-time offer

**Post-Purchase Flow Timing:**
- Email 1: Asking for Instagram photo (5 days after order)
- Email 2: Asking for product review + product placement (10 days after order)

**Winback Flow Timing:**
- Email 1: 60 days after order → Current bestsellers recommendation
- Email 2: 120 days after order → Bestsellers + limited 72h discount
- Email 3: 122 days after order → Reminder that 72h offer is expiring
- Email 4: 365 days after order → Feedback request from customer support

### 1.3 Sending Volume Ramp-Up Protocol (Deliverability SOP)

**Source:** `tenza-deliverability-sop--phase-2-the-gradual-ramp-up-schedule-weeks-2-4.md`

**The Doubling Rule:**

| Day | Daily Sending Volume |
|-----|---------------------|
| Day 8 | 200 subscribers |
| Day 9 | 400 subscribers |
| Day 10 | 800 subscribers |
| Day 15 | ~10,000 subscribers |
| Day 22 | ~100,000+ subscribers |

**Expanding Target Audience:**
- Start with hyper-engaged "14-Day" group
- Expand to "30-Day Engaged" segment
- Then to "60-Day Engaged" segment
- Demonstrates positive reputation extends beyond most engaged followers

### 1.4 At-Risk Segment Frequency Reduction

**Source:** `TENZA-DELIVERABILITY-SOP--the-at-risk-segment-identifying-users-for-reduced-sending-frequency.md`

**Strategy:** Proactively reduce sending frequency for subscribers showing fatigue signs.
- Main engaged list: 3-4 campaigns per week
- At-risk segment: 1 high-value campaign per week
- Prevents list churn and preserves long-term subscriber value

**Segment Definition (Klaviyo):**
- Name: `[ADVANCED] At-Risk Engagers (90 Day)`
- Condition 1: Opened email at least once in last 90 days
- AND Condition 2: Clicked email zero times in last 90 days
- AND Condition 3: Person can receive email marketing
- Classic definition: opening but no longer clicking = declining intent

### 1.5 Recovery Cadence Protocol (Deliverability SOP)

**Source:** `TENZA-DELIVERABILITY-SOP--re-activating-core-flows-resuming-a-normal-cadence.md`

**Protocol:** After sender reputation stabilizes (positive trend), re-activate paused flows one by one, monitoring individual performance. By end of week 6:
- Full automated system running
- Normal healthy campaign schedule to "90-Day Engaged" audience
- Consistent "Medium" or "High" reputation in Google Postmaster Tools

---

## SECTION 2: WORDING & SUBJECT LINE GUIDANCE

### 2.1 Subject Line Formulas (Campaigns & Types)

**Source:** `Campaigns-and-types--subject-lines-preview-text.md`

**Subject Line Ideas:**
- `[HOW TO + INSERT TOPIC]` — e.g., "How To Groom Your Dog At Home"
- `[TOPIC 101]` — e.g., "Napping 101"
- `[TOPIC + PRODUCT/OFFER]` — e.g., "Prep your skin for summer + 10% off"

**Preview Text Ideas:**
- `[INSERT CONTENT TEASER]`
- "Hope you learn a thing or two..."

### 2.2 Flash Sale Subject Lines

**Source:** `Campaigns-and-types--flash-sale.md`

**Subject Line Ideas:**
- `LIMITED TIME 💥`
- `⚡ Flash Sale Starts NOW! ⚡`
- `FLASH SALE: [INSERT %] OFF`

**Preview Text Ideas:**
- "Don't miss the chance to save big."
- "Here's a flash sale where you can get UP TO [INSERT %] OFF"
- "FLASH SALE! TODAY ONLY!"

### 2.3 Language & Keyword Discipline (Deliverability SOP)

**Source:** `TENZA-DELIVERABILITY-SOP--content-rules-for-avoiding-the-promotions-tab.md`

**Keyword Moderation:**
- Avoid or creatively modify high-trigger spam words
- Instead of "Buy One Get One Free" → test "BOGO Event" or "A Gift For You"

**Tone Down Urgency:**
- Minimize: "Buy Now," "Ends Midnight," excessive all-caps, exclamation points
- Replace with: sophisticated copy that creates urgency through scarcity and desirability

**Image Alt-Text Rules:**
- No keyword stuffing in alt-text
- Descriptive and literal (e.g., "Model wearing the new crimson silk dress" NOT "50% Off Dress Sale Buy Now")

**Link & Structure Rules:**
- Consolidate links to single collections page rather than multiple product links
- Keep unique URLs below 8-10 per email
- Compress all images before importing to Klaviyo

### 2.4 A/B Testing Variables

**Source:** `3.-email-sms-campaigns.md`

**Key A/B Test Variables:**
- Timing (day of week/month, time, smart send optimization)
- Personalization (first name in subject line)
- Sender name as human (e.g., "Adam at Magnet Monster")
- CTA placement (examine heatmaps)

---

## SECTION 3: CONTENT STRATEGY & WORDING PHILOSOPHY

### 3.1 What To Send (Campaign Strategy)

**Source:** `course-campaign-strategy-gamma.md`

**Core Principle:** No one wants to only receive offers, discounts, and "pick me!" content. Doing so seems needy — creates sales resistance.

**The Balance:**
1. Avoid annoying your list with discounts over and over
2. Position yourself as a sought-after brand who doesn't need to beg for purchases

**Education + Positioning = Sales Without Discounts:**
- Educate the customer on a problem, a process, or a solution
- Position your product as the solution
- Guides customer to make the right decision
- Earns trust points needed for buying decision

### 3.2 Micro Topics (Campaign Strategy)

**Source:** `course-campaign-strategy-gamma.md`

**Core Principle:** Each email will only be looked at for a MAXIMUM of 3-5 seconds.

**The Rule:**
- Focus on ONE specific point per email
- Ask: "What is the ONE single thing I want my customer to know after looking at this email?"
- One email. One topic. One takeaway.
- Micro topics = small sub-topics of industry, process, and product info
- Easier to digest one point than 10

### 3.3 Non-Discount & Educational Campaigns

**Source:** `Campaigns-and-types--non-discount-educational-campaigns.md`

Modern customers conduct due diligence before buying. Email content should:
- A) Educate the customer on a problem, process, or solution
- B) Position your product as the solution
- Successfully doing both guides customers to informed decisions and builds trust

---

## SECTION 4: FLOW STRUCTURE & TIMING TEMPLATES

### 4.1 Complete Flow Architecture (CXL Course)

**Source:** `05-email-automation-bestpractices-cxl-x-tantee.md`

**Before Purchase:**
1. Email Newsletter Subscription Flow → Trust | CR

**During Purchase:**
2. Checkout Abandonment Flow → Sales | CR

**After Purchase:**
3. First Order Flow → Customer relationship | CLV
4. Second Order Flow → Customer relationship | CLV + Additional value
5. Post-Purchase Flow → Sales | CLV
6. Winback Flow → Sales | CLV

### 4.2 Welcome Flow Options

**Option 1: Multi-Email Flow** (more intense relationship building)
- Content around brand history, products, team members, USPs, famous users
- Risk: can become annoying & aggressive if content isn't valuable

**Option 2: Single Email Flow** (personal hello from team)
- Short hello from team member
- Request to reach out with questions
- More personal, less aggressive

### 4.3 First & Second Order Flows

- Written as unformatted email in the name of E-Commerce team member or support staff
- Must look real & personal
- Use correct signature (remove phone numbers)
- Important: coming from NOT a leading person, but someone involved in daily matters
- Goal: feel authentic and real

---

## SECTION 5: DIAGNOSTIC NOTES FOR FREQUENCY & WORDING SYSTEM

### What Aligns with Client Files
- The 3-4x per week frequency standard is a well-established DTC ecommerce best practice
- Flow timing intervals (welcome, abandonment, post-purchase) follow industry standard cadences
- Subject line formulas provide concrete, testable variations
- The "one email, one topic, one takeaway" principle is universally recommended

### What Contradicts or Adds Nuance
- The wiki shows that 1x/week is actually WORSE than 3-4x/week (counter-intuitive)
- At-risk subscribers should get REDUCED frequency (1x/week vs 3-4x/week) — a segmentation-based frequency strategy
- Deliverability SOP recommends 6-week recovery cadence with expanding engagement windows (14-day → 30-day → 60-day → 90-day)
- Subject line wording must balance engagement with deliverability (avoid spam triggers)

### What's New for the Diagnosis
- The "doubling rule" for volume ramp-up is critical for new domains or recovery scenarios
- The At-Risk Engager segment definition (opens but no clicks in 90 days) is a concrete, buildable Klaviyo segment
- The A/B testing framework identifies 4 primary variables: timing, personalization, sender name, CTA placement
- Image alt-text and link consolidation are non-obvious deliverability signals that affect wording strategy

---

## Wiki Pages Cross-Referenced (12 total)

| # | Page | Domain | Relevance |
|---|------|--------|-----------|
| 1 | Campaign Strategy (Gamma) | tenza-marketing/business-strategy | Frequency tiers, content strategy, micro topics |
| 2 | Email Automation Best Practices (CXL) | tenza-marketing/email-marketing | Flow timing intervals, complete flow architecture |
| 3 | TENZA Deliverability SOP (hub) | tenza-marketing/email-marketing | Full deliverability framework with 85 atomic notes |
| 4 | Phase 2 Ramp-Up Schedule | tenza-marketing/email-marketing | Doubling rule for sending volume |
| 5 | At-Risk Segment | tenza-marketing/email-marketing | Reduced frequency for fatiguing subscribers |
| 6 | Re-activating Core Flows | tenza-marketing/email-marketing | Recovery cadence protocol |
| 7 | Content Rules for Promotions Tab | tenza-marketing/email-marketing | Wording discipline, spam avoidance |
| 8 | Subject Lines + Preview Text | tenza-marketing/email-marketing | Subject line formulas |
| 9 | Flash Sale Subject Lines | tenza-marketing/email-marketing | Promotional subject line templates |
| 10 | Non-Discount & Educational Campaigns | tenza-marketing/email-marketing | Educational content strategy |
| 11 | Email & SMS Campaigns Benchmark | tenza-marketing/business-strategy | Calendar building, segmentation |
| 12 | Email Campaign A/B Testing | tenza-marketing/business-strategy | Testing variables |
