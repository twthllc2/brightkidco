# LAYER 16 R1: Flow Architecture — Client File Exhaustion
## BrightKidCo Email Ecosystem: 25 Flows, 110+ Emails, 3 Phases

**Extracted from:** DOC1-MASTER-FOUNDATION.txt, DOC6-USAGE-GUIDE.txt, Onboarding-todos.txt, WhatsApp Chat with Giuliano.txt

---

## Phase Summary

| Phase | Timing | Flows | Unique Mails | Description |
|-------|--------|-------|-------------|-------------|
| Phase 1 | Months 1-2 (Launch-Ready) | 9 flows | 43 unique mails | Must exist before email marketing is scaled |
| Phase 2 | Months 3-4 (High-Value) | 8 flows | 34 unique mails | After Phase 1 runs and data flows in |
| Phase 3 | Months 5-6 (Nice-to-Have) | 8 flows | 33 unique mails | When Phase 1+2 run and marketing team is established |
| **TOTAL** | **6 months** | **25 flows** | **110+ unique mails** | |

---

## PHASE 1: LAUNCH-READY (Months 1-2) — 9 Flows, 43 Unique Mails

### Flow 01: Welcome Flow (CONSOLIDATED Discount + Education)
- **Trigger:** Pop-up signup with level tag
- **Email Count:** 8 emails per level variant = 32 total (8 × 4 levels)
- **Timing:** Over 21 days
- **Segmentation:** 4 level variants (avatar_level1, avatar_level2, avatar_level3, avatar_general)
- **Level-Specific Variants:**
  - Level 1 → DOC 2 (Verbal, 3-5 yrs, Pre-K driven, 70% hope)
  - Level 2 → DOC 3 (Mixed verbal, 5-7 yrs, BCBA context, 40% hope)
  - Level 3 → DOC 4 (Non-verbal, 6-10+ yrs, dignity-first, 20% hope)
  - General → DOC 5 (Cross-level, ~50% real volume, 50/50 hope)
- **Exit Conditions:** Made a purchase, Unsubscribed, Already in higher-priority flow
- **Klaviyo Routing:** Tag determines which Welcome Flow variant and tonality
- **Purpose:** Convert subscribers to first purchase through education, mechanism explanation, and trust building
- **Email Timing Map:**
  - Day 0 (E1): Welcome + code delivery
  - Day 1 (E2): Mechanism explanation ("It's not the method, it's a sensory gap")
  - Day 3 (E3): Last day / decision time + 60-day guarantee
  - Day 7 (E4): Education / "You didn't fail" reframe
  - Day 14-21 (E5-E8): Slow acceptance / wisdom audience
- **Priority:** HIGHEST — all subscribers enter here first
- **Source:** DOC1 §17 (lines 1074-1079), DOC1 §18 (lines 1220-1239), DOC6 §3 (lines 344-385), DOC6 §7 (lines 714-900)

### Flow 02: Cart Abandonment Flow
- **Trigger:** Cart Abandoned (Klaviyo)
- **Email Count:** 3 emails
- **Timing:** E1 at 1 hour, E2 at Day 1, E3 at Day 3
- **Segmentation:** Cross-level (DOC 5)
- **Filter:** No purchase 24h after cart abandonment
- **Exit Conditions:** Made a purchase, Unsubscribed
- **Purpose:** Recover abandoned carts with mechanism reminder, stories, and 60-day guarantee
- **Email Details:**
  - E1 (Hour 1): Mechanism reminder + reassurance
  - E2 (Day 1): Specific reminder with stories
  - E3 (Day 3): 60-day guarantee, soft permission not to buy
- **Conversion Levers:** Lever 1 (sensory gap), Lever 2 (pull-ups make it worse), Lever 3 (60-day guarantee)
- **Cart Recovery Logic:**
  - Has 1 Pair in cart → Upsell to 3+3 ("most parents need more")
  - Has 3+3 in cart → Reminder + Free Shipping emphasize
  - Has 5+5 in cart → Total value emphasize ($119.99 vs. $34.99 × 10)
- **Source:** DOC1 §17 (lines 1080-1084), DOC1 §24 (lines 1590-1600)

### Flow 03: Checkout Abandonment Flow
- **Trigger:** Started Checkout Abandoned (Klaviyo)
- **Email Count:** 2 emails
- **Timing:** E1 at 1 hour, E2 at Day 1
- **Segmentation:** Cross-level (DOC 5)
- **Filter:** No purchase 1h after checkout start
- **Exit Conditions:** Made a purchase, Unsubscribed
- **Purpose:** Recover checkout abandoners with softer touch than cart (higher intent)
- **Source:** DOC1 §17 (lines 1085-1089)

### Flow 04: Browse Abandonment Flow
- **Trigger:** Viewed Product no Cart (Klaviyo)
- **Email Count:** 3 emails
- **Timing:** After product view, no cart created within 24h
- **Segmentation:** Cross-level (DOC 5)
- **Filter:** No cart 24h after product view
- **Exit Conditions:** Created cart, Made a purchase, Unsubscribed
- **Purpose:** Re-engage browsers who viewed products but didn't add to cart
- **Source:** DOC1 §17 (lines 1090-1094)

### Flow 05: Order Confirmation Flow
- **Trigger:** Order Placed (Shopify → Klaviyo)
- **Email Count:** 1 email (with cross-sell block)
- **Timing:** Immediate after order
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Confirm order, set delivery expectations, include soft cross-sell
- **Emotional State:** Relieved, committed
- **Tipping Point:** Clarity about delivery, what's coming
- **Source:** DOC1 §17 (lines 1096-1100), DOC1 §24 (lines 1602-1606)

### Flow 06: Shipping Notification Flow
- **Trigger:** Order Fulfilled
- **Email Count:** 1 email
- **Timing:** When order ships
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Notify customer of shipment, set delivery expectations
- **Source:** DOC1 §17 (lines 1102-1106)

### Flow 07: Out for Delivery Flow (optional)
- **Trigger:** Carrier update "Out for Delivery"
- **Email Count:** 1 email (optional)
- **Timing:** When carrier reports out for delivery
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Build anticipation for delivery
- **Source:** DOC1 §17 (lines 1107-1111)

### Flow 08: Arrived & Welcome Flow
- **Trigger:** Carrier update "Delivered"
- **Email Count:** 1 email (with massive upsell)
- **Timing:** When carrier reports delivered
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Welcome new customer, provide sensory prep tips ("Open the box together — let your kid touch it first"), upsell
- **Emotional State:** Anticipation peak
- **Tipping Point:** "Open box together" — sensory prep
- **Source:** DOC1 §17 (lines 1112-1116), DOC1 §24 (lines 1610-1612)

### Flow 09: Post-Purchase Direct Upsell Flow
- **Trigger:** Order Placed + Day 1-3
- **Email Count:** 2 emails (Wash Bag + Mattress Protector)
- **Timing:** E1 at Day 1, E2 at Day 3
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Cross-sell complementary products while buying energy is high
- **Social Proof:** "73% of parents add these"
- **Post-Purchase Upsell Logic:**
  - 1-Pair buyer → 3+3 Upgrade Path A (Replenishment)
  - 3+3 buyer → 5+5 Upgrade Path B
  - 5+5 buyer → Accessory Cross-Sell (Wash Bag, Mattress, etc.)
- **Source:** DOC1 §17 (lines 1117-1122), DOC1 §24 (lines 1607-1609)

---

## PHASE 2: HIGH-VALUE (Months 3-4) — 8 Flows, 34 Unique Mails

### Flow 10: Post-Purchase Mary S. Story Flow
- **Trigger:** Order Placed + Day 3
- **Email Count:** 1 email
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Introduce founder story, brand origin, "why we built this"
- **Voice:** Mary S. (Founder) — NOT Lena. Only place founder voice appears in regular flows.
- **Note:** Mary S. does NOT appear in Phase 1. Introduced in Phase 2 as dedicated mail.
- **Source:** DOC1 §14 (lines 946-958), DOC1 §17 (lines 1123-1127)

### Flow 11: Post-Purchase Education Day 0-21 Flow
- **Trigger:** Order Placed
- **Email Count:** 4 emails
- **Timing:** Days 0-21 post-purchase
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Educate new customers on product usage, manage expectations, troubleshoot
- **Emotional State Journey:**
  - Day 0-7: Hoping, observing, vulnerable → Set realistic Week-1 expectations
  - Day 7-21: Some progress or frustration → Mini-wins acknowledgment
- **Source:** DOC1 §17 (lines 1128-1132), DOC1 §24 (lines 1614-1627)

### Flow 12: Post-Purchase Level-Detection Mail
- **Trigger:** Order Placed + Day 14
- **Email Count:** 1 email
- **Segmentation:** Cross-level (asks level)
- **Filter:** If avatar_level = unknown (General Fallback customers)
- **Purpose:** Re-classify General Fallback customers into specific level segments
- **Mechanism:** Mail with 4 re-selection buttons → migration to specific level for future flows
  - Click on L1 button → avatar_level1
  - Click on L2 button → avatar_level2
  - Click on L3 button → avatar_level3
  - No click → stays avatar_general
- **Source:** DOC1 §17 (lines 1132-1137), DOC1 §19 (lines 1328-1332)

### Flow 13: Post-Purchase Extended Upsell Flow
- **Trigger:** Day 28 + level tag
- **Email Count:** 3 emails
- **Segmentation:** Level-aware
- **Purpose:** Extended upsell sequence with level-specific targeting
- **Source:** DOC1 §17 (lines 1139-1143)

### Flow 14: Post-Purchase Mid Check-In Flow
- **Trigger:** Day 30-60
- **Email Count:** 3 emails
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Check in on customer progress, provide coaching, celebrate mini-wins
- **Emotional State:** Trust building or considering refund
- **Tipping Point:** Level-specific support kicks in
- **Source:** DOC1 §17 (lines 1144-1148), DOC1 §24 (lines 1625-1627)

### Flow 15: Replenishment Path A (1-Pair Buyer)
- **Trigger:** 1-pair order + Day 14
- **Email Count:** 3 emails
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Upgrade 1-pair buyers to 3+3 bundle
- **Upgrade Path:** 1-Pair → 3+3 Upgrade
- **Source:** DOC1 §17 (lines 1160-1164)

### Flow 16: Replenishment Path B (3+3 Buyer)
- **Trigger:** 3+3 order + Day 75
- **Email Count:** 2 emails
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Replenishment or upgrade for 3+3 buyers (after ~75 days of use)
- **Upgrade Path:** 3+3 → 5+5 Upgrade
- **Source:** DOC1 §17 (lines 1165-1169)

### Flow 17: Replenishment Path C (5+5 Buyer)
- **Trigger:** 5+5 order + Day 150
- **Email Count:** 2 emails
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Replenishment for 5+5 buyers (after ~150 days of use)
- **Source:** DOC1 §17 (lines 1170-1174)

---

## PHASE 2 (continued): Additional Flows

### Flow 18: Review Request Flow
- **Trigger:** Day 30 post-purchase
- **Email Count:** 2 emails
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Request reviews from satisfied customers after 30 days of product use
- **Source:** DOC1 §17 (lines 1176-1180)

### Flow 19: Winback Path A (Post-Buyer Inactive)
- **Trigger:** Last purchase + 90 days no engagement
- **Email Count:** 3 emails
- **Segmentation:** 4 level variants
- **Purpose:** Re-engage lapsed buyers with level-specific messaging
- **Emotional State:** Respectful re-engagement
- **Language:** "How are you doing?" / "Whichever path you take"
- **Source:** DOC1 §17 (lines 1181-1185), DOC1 §21 (lines 1463-1473)

---

## PHASE 3: NICE-TO-HAVE (Months 5-6) — 8 Flows, 33 Unique Mails

### Flow 20: Post-Purchase Extended Education Flow
- **Trigger:** Level tag activated + Day 22
- **Email Count:** 5 emails
- **Segmentation:** 4 level variants
- **Purpose:** Deep level-specific education after initial onboarding period
- **Source:** DOC1 §17 (lines 1139-1143)

### Flow 21: Post-Purchase Support At-Risk Flow
- **Trigger:** Day 3-7 no opens
- **Email Count:** 4 emails
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Re-engage customers who stopped opening emails
- **Source:** DOC1 §17 (lines 1154-1158)

### Flow 22: Winback Path B (Subscriber Never-Bought)
- **Trigger:** Signup + 60 days no purchase
- **Email Count:** 3 emails
- **Segmentation:** 4 level variants
- **Purpose:** Win back subscribers who never converted to purchase
- **Source:** DOC1 §17 (lines 1186-1190)

### Flow 23: Sunset Flow
- **Trigger:** 120 days inactive
- **Email Count:** 2 emails
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Final re-engagement before list cleaning / suppression
- **Source:** DOC1 §17 (lines 1191-1195)

### Flow 24: FAQ/Objection Library Flow
- **Trigger:** Welcome flow end + no purchase
- **Email Count:** 6 emails
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Address top objections systematically for subscribers who completed Welcome but didn't buy
- **Key Objections Addressed:**
  - D1: "I've tried everything. Why would this be different?"
  - D2: "Maybe I'm the problem"
  - D3: "What if I get my hopes up again and it fails?"
  - D4: "He's too old/severe for any product to help"
  - C1: "I've never heard of this brand"
  - C2: "I need to see it works for kids LIKE MINE"
  - C3: "Is this worth $30-50 when I've already wasted so much?"
  - B1: "I tried underwear and it didn't help either"
  - B2: "My BCBA has a whole protocol. I trust that more."
  - B3: "My kid will rip them off / refuse to wear them"
  - B4: "We have GI issues / withholding"
- **Source:** DOC1 §17 (lines 1196-1201), DOC1 §10 (lines 601-748)

### Flow 25: Referral Flow
- **Trigger:** Day 30 + positive engagement
- **Email Count:** 3 emails
- **Segmentation:** Cross-level (DOC 5)
- **Purpose:** Leverage satisfied customers for referrals
- **Source:** DOC1 §17 (lines 1203-1207)

---

## IMPLEMENTATION PRIORITY ORDER

### Phase 1 Implementation Order (marketer perspective):
1. **Welcome Flow** (highest priority — all subscribers enter here)
2. **Cart + Checkout Abandonment** (immediate conversion lift)
3. **Transactional flows** (Order Confirmation, Shipping, Arrived) — customer expects these
4. **Post-Purchase Direct Upsell** (parallel to delivery)
5. **Level-Detection Mail** (can also come later)

### Phase 2 Implementation Order:
1. Browse Abandonment
2. PP-Mary-S Story
3. PP-Education Day 0-21
4. Review Request
5. PP-Extended Upsell
6. PP-Mid Check-In
7. Replenishment Path A/B/C
8. Winback Path A

### Phase 3 Implementation Order:
1. PP-Extended Education (× 4 levels)
2. PP-Support At-Risk
3. Winback Path B (× 4 levels)
4. Sunset
5. FAQ/Objection Library
6. Referral Flow
7. Birthday Mail (optional)

---

## LEVEL-SPECIFIC FILTER RULES

### Pop-Up Segmentation (Entry Point)
- **Option 1:** "Talks about potty but won't actually do it" → Tag: avatar_level1
- **Option 2:** "Sensory issues, tried many methods" → Tag: avatar_level2
- **Option 3:** "Non-verbal or high support needs" → Tag: avatar_level3
- **Option 4:** "Still figuring out what's going on" → Tag: avatar_general

### Audience Distribution
- ~35% Level 1 (verbal, younger children, fewer attempts)
- ~40% Level 2 (mixed, sensory dominant, BCBA context) — LARGEST
- ~25% Level 3 (non-verbal, older children, years of attempts)
- ~50% choose "Still figuring out" = General Fallback (highest-volume profile)

### Tonality Calibration per Level
- **Level 1:** 70% Hope / 30% Realism — Education-oriented, gentle
- **Level 2:** 40% Hope / 60% Realism — Science-first, mechanism specificity
- **Level 3:** 20% Hope / 80% Realism — Dignity-first, respectful, no urgency
- **General:** 50/50 Hope / Realism — "Whether...Or...If..." language pattern

### Which Flows are Level-Segmented vs Cross-Level
- **Level-Segmented (4 variants per flow):** Welcome Flow, PP-Extended Education, FAQ, Winback Path A/B
- **Cross-Level (1 mail for all, DOC 5):** Cart, Checkout, Browse, Order Confirmation, Shipping, Arrived & Welcome, PP-Direct Upsell, PP-Level Detection, PP-Education Day 0-21, PP-Mid Check-In, Replenishment A/B/C, Review Request, Sunset, Referral

### Rule
- Before level tag known → Cross-Level (DOC 5)
- After level tag known → Level-specific (DOC 2/3/4)
- For high-velocity flows (Cart/Checkout) → Cross-Level even if tag known (speed > segmentation)

---

## FLOW-LEVEL TAGGING & SEGMENTATION RULES

### Klaviyo Profile Properties
- `avatar_level` (string: "level1" / "level2" / "level3" / "general")
- `child_age` (optional, if mom shared)
- `signup_source` (string: "popup" / "checkout" / "referral")
- `welcome_flow_completed` (boolean)
- `last_purchase_pack_size` (string: "1pair" / "3+3" / "5+5")
- `vip_customer` (boolean, for high LTV)

### Klaviyo Tags
**From Pop-up:** avatar_level1, avatar_level2, avatar_level3, avatar_general
**From Behavior:** welcome_completed, welcome_completed_no_purchase, post_purchase_active, at_risk_no_open, inactive_60_days, inactive_120_days
**From Purchase:** buyer_1pair, buyer_3plus3, buyer_5plus5, repeat_buyer, vip_buyer (3+ orders)

### Migration Strategy
- Day 14 Level-Detection mail re-classifies General → specific level
- Purchase hints (underwear size → age hint → level hint)
- Bundle size → experience hint

### Exit Conditions (critical for Klaviyo)
- Every flow must have: Made a purchase (for conversion flows), Unsubscribed, Already in higher-priority flow

---

## CROSS-LEVEL CALIBRATION RULES (All Flows)

1. **Symptom Description Over Level Label:** NEVER "Level 2" in copy; use "If your child doesn't feel when they need to go..."
2. **3-5 Recognition Anchors Per Mail:** Include scenarios for all levels (Level 1: "Sits 20 minutes and nothing happens", Level 2: "Pees immediately when pull-up comes off", Level 3: "Doesn't react to wet diaper")
3. **Age Ranges Instead of Fixed Ages:** "For kids 3 to 10+" not "For 5-year-olds"
4. **Verbal/Non-Verbal Inclusivity:** Always include both ("saying 'wet'" + "showing you with a gesture")
5. **Timeline Flexibility:** "Some kids show first signals after 2 weeks. Others need 8 weeks. Both are normal."
6. **Success Metrics Low Bar:** Mini-wins, not "fully trained" ("Look at the wet spot for the first time")

---

## WHATSAPP CHAT INSIGHTS

The WhatsApp chat (Giuliano conversation, 10/2025-5/2026) contains the following flow-relevant discussion:

- **Hyper-Personalization Push (5/20/26):** Giuliano pushed for post-purchase flows for each avatar and welcome flows for each avatar (hyper-personalized). Ayoub agreed and took ownership of building the flows. Giuliano noted "The numbers of mails in the flows can be for sure adjust if u say it's too much or too less."
- **No structural changes** to the 25-flow architecture were discussed in the chat. The conversation was primarily about a separate deliverability code snippet business.
- **Flow Building Pricing (11/10/25):** Giuliano asked "What ur charge for flow building" — confirming flows were being actively built/quoted.
- **BFCM Flows (10/26/25):** Giuliano noted "BFCM flows - but makes no sense to set them up bc we will not drive that much revenue with that bc brand is in the beginning stages."

---

## CONTRADICTIONS & NOTES

1. **Phase 1 mail count:** DOC1 §18 says "32 mails — 8 × 4 levels" for Welcome Flow but §17 summary says Phase 1 = 43 unique mails. This is consistent: 32 Welcome + 3 Cart + 2 Checkout + 1 Order Confirm + 1 Shipping + 1 Arrived + 2 PP-Direct Upsell + 1 PP-Level Detection = 43.
2. **Browse Abandonment placement:** Listed under "Pre-Purchase Flows" in §17 but marked as "PHASE 2" — confirmed Phase 2 in §18.
3. **Phase 3 line items:** §18 Phase 3 lists 7 items (PP-Extended Education through Birthday Mail) but §17 counts 8 flows for Phase 3. The Birthday Mail is listed as "optional."
4. **Out for Delivery Flow:** Marked as "optional" in §17 — may not be implemented.
5. **WhatsApp chat:** No flow architecture changes found. The document architecture described in DOC1 is the authoritative source.

---

## SOURCE FILE REFERENCES

| Source File | Sections Used | Lines Referenced |
|------------|---------------|-----------------|
| DOC1-MASTER-FOUNDATION.txt | §6 (4 Emotional Phases), §10 (Objection Map), §17 (Complete Flow Overview), §18 (Phased Rollout), §19 (Klaviyo Setup & Tag Logic), §21 (Tonality Calibration), §22 (Cross-Level Calibration), §24 (Buyer Journey Mapping) | 220-386, 601-748, 1071-1263, 1266-1353, 1401-1473, 1476-1519, 1556-1627 |
| DOC6-USAGE-GUIDE.txt | §3 (Which Doc for Which Mail), §5 (Brand Constants), §7 (Segmentation Strategy) | 340-385, 466-627, 714-900 |
| Onboarding-todos.txt | Step 2 (Reading priorities), "What You Need to Know Upfront" | 36-56, 92-132 |
| WhatsApp Chat with Giuliano.txt | Flow architecture discussion (5/20/26), BFCM flows (10/26/25) | 2500-2540, 724-726 |
