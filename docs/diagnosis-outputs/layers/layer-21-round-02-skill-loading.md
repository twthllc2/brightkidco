# Layer 21 Round 02: General Fallback Sub-Groups — Skill Loading

> Loaded: segmentation-strategy-framework, segmentation-list-health, segmentation-rfm-predictive, copywriting-brand-voice-storytelling, copywriting-body-copy-frameworks, copy
> Purpose: Extract every framework, rule, and template for General Fallback audience segmentation, sub-group identification, and cross-level content strategy.

---

## SKILL 1: segmentation-strategy-framework

### Five-Layer Segmentation Framework (Core Architecture)

The foundation for identifying sub-groups within any audience. Applied to General Fallback, these five layers define how subscribers move from undifferentiated mass to actionable micro-segments:

| Layer | Type | Purpose | Application to General Fallback |
|-------|------|---------|-------------------------------|
| 1 | Engagement-Based | Controls who receives campaigns vs. excluded | Identifies which Fallback subscribers are active enough to receive content |
| 2 | Value-Based | Groups by revenue contribution | Separates high-value Fallback customers from one-time browsers |
| 3 | Behavioral | Captures real-time intent signals | Detects micro-behaviors that reveal sub-group membership |
| 4 | Demographic | Location/persona targeting | Geographic or persona-based sub-group splits |
| 5 | Purchase History | Lifecycle stage determination | Maps Fallback subscribers to lifecycle phases |

### Sub-Group Identification via Engagement Windows

The engagement segmentation framework defines 5 concentric windows for identifying subscriber activity levels — directly applicable to splitting General Fallback into sub-groups by engagement depth:

| Segment | Definition | Sub-Group Application |
|---------|-----------|----------------------|
| Engaged 30 Days | Opened OR clicked 1+ times in last 30 days | "Active Fallback" — highest-priority sub-group |
| Engaged 60 Days | Opened OR clicked 1+ times in last 60 days | "Warm Fallback" — responsive but slower-cycling |
| Engaged 90 Days | Opened OR clicked 1+ times in last 90 days | "Standard Fallback" — baseline campaign audience |
| Engaged 180 Days | Opened OR clicked 1+ times in last 180 Days | "Peripheral Fallback" — broad reach, low frequency |
| Unengaged 180+ | 0 opens AND 0 clicks in 180+ days | "Cold Fallback" — sunset or re-engage candidate |

**Key Rule:** OR logic (not AND) for engagement — captures both openers and clickers. Using AND excludes legitimate engaged subscribers.

### Segment Overlap Rules for Sub-Group Logic

Segments are not mutually exclusive. A subscriber can exist in multiple sub-groups simultaneously. The overlap rules define priority:

- **VIP + Frequent Buyer** = Highest Priority — never aggressive discount
- **At-Risk + High CLV** = Winback Priority — VIP winback flow, not standard sunset
- **Unengaged + One-Time Buyer** = Suppression Candidate — standard sunset timeline
- **Frequent Buyer + Engaged 30 Days** = Broadcast Qualifier — receives standard campaigns

**Suppression Logic (applies to all sub-groups):**
- Unsubscribed, hard bounced, spam complainers — always suppressed
- Unengaged 180+ days — excluded unless in sunset flow
- Bot-tagged (`is_bot = True`) — always suppressed
- Unengaged-tagged (`unengaged = True`) — always suppressed

### Segment Size Benchmarks

| Segment | Healthy Range | Warning | Critical |
|---------|--------------|---------|----------|
| Engaged 30 Days | 20-35% | < 15% | < 10% |
| Engaged 90 Days | 40-55% | < 30% | < 20% |
| Unengaged 180+ Days | < 20% | 20-30% | > 30% |
| VIP (Top 10%) | 8-12% | — | — |
| Frequent Buyers (3+) | 10-20% | — | — |
| One-Time Buyers | 15-30% | — | — |
| At-Risk | 5-15% | — | — |

### Behavioral Intent Signals (Sub-Group Differentiators)

| Behavioral Signal | Definition | Sub-Group Implication |
|------------------|-----------|----------------------|
| Viewed Product (7d) | Viewed 1+ times in 7d, 0 purchases since | "Browser" sub-group — intent without commitment |
| Added to Cart (24h) | Added 1+ times in 1d, 0 purchases since | "Considerer" sub-group — high intent |
| Reached Checkout (24h) | Reached checkout 1+ times in 1d, 0 purchases | "Near-Convert" sub-group — highest intent |
| Purchased Product | Placed order with specific SKU/category | "Buyer" sub-group — post-purchase messaging |
| Browsed Collection | Viewed collection 1+ times in 7d, 0 purchases | "Explorer" sub-group — category interest |

---

## SKILL 2: segmentation-list-health

### List Health Metrics for Sub-Group Tracking

These metrics determine whether sub-groups are healthy or decaying:

| Metric | Formula | Target | Sub-Group Application |
|--------|---------|--------|----------------------|
| Growth Rate | New Subs / Total List × 100 | > 2%/month | Track which sub-groups are gaining vs. losing members |
| Churn Rate | (Unsubs + Bounces + Spam) / Total Sent × 100 | < 1%/month | Monitor sub-group decay rate |
| Net Growth | New Subs - (Unsubs + Bounces + Spam + Suppressed) | Positive | True health of each sub-group |
| Engagement Velocity | (Current Rate - Previous Rate) / Previous Rate × 100 | Stable or increasing | Track sub-group engagement trends |
| Revenue Per Subscriber | Email Revenue / Total List Size | > $0.50/month | Measure monetary value per sub-group |

### Engagement Velocity by Sub-Group

Track velocity separately for each sub-group to detect trends:

| Pattern | Meaning | Action |
|---------|---------|--------|
| Open rate up, click rate up | Healthy sub-group | Continue current strategy |
| Open rate up, click rate down | MPP inflation or subject line mismatch | Audit subject lines vs. content |
| Open rate down, click rate up | More targeted sends | Good — reduce sends to unengaged |
| Both rates down | Sub-group fatigue | Reduce frequency, re-segment |
| All sub-groups declining simultaneously | Sender reputation issue | Full deliverability audit |

### Data Quality Checks (Sub-Group Integrity)

| Check | Benchmark | Impact on Sub-Groups |
|-------|-----------|---------------------|
| Duplicate Emails | 0 duplicates | Inflates sub-group sizes, skews metrics |
| Invalid Emails (Hard Bounces) | < 1% of list | Corrupts sub-group composition |
| Incomplete Profiles | < 10% missing name | Limits personalization within sub-groups |
| Stale Data (12+ months inactive) | < 5% of list | Dead weight in sub-groups |

### Suppression Framework for Sub-Group Management

| Suppression Type | Action | Sub-Group Impact |
|-----------------|--------|-----------------|
| Unsubscribed | Suppress immediately | Legal obligation — remove from all sub-groups |
| Hard Bounced | Suppress immediately | Invalid address — no recovery |
| Spam Complaint | Suppress immediately | Reputation risk |
| 90 days unengaged | Enter winback flow | Still within recovery window |
| 120-180 days unengaged | Enter sunset flow | Final recovery attempt |
| Sunset completed without re-engagement | Suppress permanently | Remove from sub-groups |
| Bot behavior | Suppress immediately | Not real — waste of resources |

### Monthly List Health Ritual (Sub-Group Audit)

Execute on the 1st of every month:
1. Calculate growth metrics per sub-group (15 min)
2. Calculate churn metrics per sub-group (15 min)
3. Calculate net growth per sub-group (5 min)
4. Check engagement velocity per sub-group (10 min)
5. Calculate revenue per subscriber per sub-group (5 min)
6. Run data quality checks (15 min)
7. Review suppression lists (5 min)
8. Generate summary and action items (10 min)

---

## SKILL 3: segmentation-rfm-predictive

### RFM Scoring for Sub-Group Identification

RFM (Recency, Frequency, Monetary) transforms raw data into actionable personas. Each dimension scored 1-5, creating 125 possible combinations grouped into 11 personas:

| Persona | RFM Pattern | % of Customers | Sub-Group Strategy |
|---------|------------|----------------|-------------------|
| Champions | R=5, F=5, M=5 | 2-5% | VIP treatment, early access, referral incentives |
| Loyal Customers | R=4-5, F=4-5, M=3-5 | 8-15% | Upsell, cross-sell, reviews/referrals |
| Potential Loyalists | R=4-5, F=2-3, M=3-5 | 10-15% | Convert to regular buyers, loyalty program |
| New Customers | R=5, F=1, M=1-5 | 10-20% | Onboard, educate, build relationship |
| Promising | R=3-4, F=1, M=1-5 | 10-15% | Nurture with educational content |
| Need Attention | R=3, F=3, M=3 | 5-10% | Re-engage with limited-time offers |
| About to Sleep | R=2-3, F=2-3, M=2-3 | 5-10% | Winback with small discounts |
| At Risk | R=2, F=3-5, M=3-5 | 5-10% | Personalized outreach |
| Cannot Lose Them | R=1-2, F=5, M=5 | 1-3% | Highest priority winback, every channel |
| Hibernating | R=1-2, F=2-3, M=2-3 | 5-10% | Automated winback, final offer before sunset |
| Lost | R=1, F=1, M=1 | 10-20% | Suppress or sunset |

### Persona Priority for Campaign Targeting

1. Champions — highest response, lowest discount sensitivity
2. Loyal Customers — reliable responders, good upsell
3. Need Attention — moderate value, strategic push needed
4. At Risk / Cannot Lose Them — urgent, high-value, time-sensitive
5. Potential Loyalists / Promising / New Customers — building for future
6. About to Sleep / Hibernating — one-shot winback before sunset
7. Lost — excluded from all campaigns

### Predictive Analytics for Sub-Group Behavior

| Predictive Metric | Sub-Group Application |
|------------------|----------------------|
| Predicted CLV (Top 10%) | VIP perks, early access, account management |
| Predicted CLV (Mid 50-80%) | Upsell campaigns, loyalty enrollment |
| Predicted CLV (Bottom 50%) | Automated flows only, no paid spend |
| Churn Risk 1-2 | Normal sends, monitor |
| Churn Risk 3 | Reduce frequency, re-engagement content |
| Churn Risk 4 | Winback sequence, incentive, personalized subject |
| Churn Risk 5 | Immediate intervention, strong offer, multi-channel |
| Next Purchase in 7 days | Send immediately, product recommendation |
| Next Purchase in 30 days | Prepare campaign, show new arrivals |
| Next Purchase 30+ days | Hold until closer |

### Cross-Segment Predictive Combinations

| Combination | Definition | Action |
|-------------|-----------|--------|
| High CLV + Low Engagement | Top 30% CLV + 0 engagement in 90 days | Personalized winback, strong offer, founder's name |
| High Churn Risk + Recent Purchase | Churn risk 4+ + purchased in last 30 days | Post-purchase onboarding, loyalty enrollment, cross-sell |
| Low CLV + High Frequency | Bottom 40% CLV + 3+ orders | Upsell to higher-AOV products, bundle with premium |

### Zero-Party Data for Sub-Group Precision

| Collection Channel | Data Captured | Sub-Group Application |
|-------------------|--------------|----------------------|
| Quiz Results | Skin type, preferences, goals | Ultra-targeted product recommendations |
| Preference Center | Frequency, categories, channels | Throttle sends, topic-target campaigns |
| Survey Responses | Satisfaction, improvement requests | NPS-based sub-grouping |
| Post-Purchase Feedback | Why they bought, what they want | Personalize next campaign |

---

## SKILL 4: copywriting-brand-voice-storytelling

### Voice Matrix for Multi-Audience Content

The voice matrix defines brand personality across four axes — essential for maintaining consistency while serving multiple sub-groups:

| Axis | Description | Sub-Group Implication |
|------|-------------|---------------------|
| Formal vs Casual | Sentence structure, vocabulary | Adjust formality per sub-group sophistication |
| Serious vs Playful | Tone of humor/levity | Lighter tone for engaged, serious for at-risk |
| Respectful vs Irreverent | Convention challenging | Match sub-group expectations |
| Practical vs Aspirational | Benefit framing | Practical for browsers, aspirational for loyalists |

### Segment-Specific Tone Adjustments (Cross-Level Voice Rules)

| Segment/Sub-Group | Voice Adjustment | Do | Don't |
|------------------|-----------------|----|-------|
| VIP / High LTV | More exclusive, warmer, personalized | "As one of our most valued customers..." | Generic mass-market language |
| New Subscribers | More educational, value-first, lower pressure | "Here's how to get started..." | Hard sell before relationship built |
| Lapsed / Winback | More empathetic, offer-centered, humble | "We miss you", "Come back — we saved your spot" | Guilt-tripping or aggressive urgency |
| Abandoned Cart | Reminder + gentle urgency, personal | "Your cart is waiting, [First Name]" | Accusatory tone |
| Post-Purchase | Gratitude + support, upselling secondary | "Thank you for your order" | Aggressive cross-sell in confirmation |
| Cold / Unengaged | Low-pressure, high-value, re-engagement focused | "Is this still relevant?" | More of the same that caused unengagement |

### The Relationship Ladder (Voice Evolution by Sub-Group Stage)

```
NEW SUBSCRIBER: Formal, educational, value-first
       ↓
FIRST PURCHASE: Warm, supportive, grateful
       ↓
REPEAT BUYER: Familiar, personalized, conversational
       ↓
VIP: Exclusive, intimate, family-like
       ↓
ADVOCATE: Celebratory, community-focused, partnership
```

### Content Pillars for Multi-Audience Strategy

Every email must map to at least one content pillar. For General Fallback sub-groups, rotate pillars across sends:

| Pillar | Topics | Best Sub-Groups |
|--------|--------|----------------|
| Education | How-to guides, tips, tutorials | New, Promising, Explorers |
| Inspiration | Customer stories, lifestyle | Loyal, Champions, Advocates |
| Entertainment | Quizzes, interactive content | Engaged 30-day, Active |
| Community | User showcases, events, social proof | Repeat Buyers, Loyal |
| Exclusive | Behind-the-scenes, early access, member-only | VIP, Champions, Cannot Lose Them |

### 80/20 Rule (Value vs. Promotion Balance)

For every 10 emails:
- 8 provide value (education, entertainment, inspiration, community)
- 2 directly promote (sales, launches, offers)

**Applies differently per sub-group:**
- VIP/Champions: Can tolerate slightly more promotional (70/30)
- New/Promising: Must be heavily value-first (90/10)
- Lapsed/Winback: Mix of value reminder + offer (60/40)

### Dynamic Content for Voice Adaptation

Use conditional logic to swap copy blocks based on sub-group:
- **Subject line:** Curiosity for warm, benefit for cold
- **Greeting:** "[First Name]" for engaged, "Friend" for unengaged
- **Offer depth:** Higher discounts for lapsed, exclusivity for VIP
- **Body copy length:** Shorter for mobile-heavy/younger, longer for high-consideration

---

## SKILL 5: copywriting-body-copy-frameworks

### Body Copy Frameworks for Multi-Audience Content

Each framework serves different sub-group needs:

#### Framework 1: PAS (Problem-Agitate-Solve)
**Best for:** Sub-groups with clear pain points (At-Risk, Need Attention, About to Sleep)

1. **Problem** — Identify the customer's pain point or unmet need
2. **Agitate** — Make the problem feel worse (cost of not solving)
3. **Solve** — Present product as the natural solution

**Sub-Group Application:** Use PAS for subscribers who need to be reminded why they engaged in the first place. The agitation step reconnects them to their original motivation.

#### Framework 2: AIDA (Attention-Interest-Desire-Action)
**Best for:** Product launches, bestseller campaigns, warming up cold sub-groups

1. **Attention** — Strong opening that stops the scroll
2. **Interest** — Build engagement with relevance/context
3. **Desire** — Make them want it through benefits + social proof
4. **Action** — Clear, specific CTA

**Sub-Group Application:** Use AIDA for sub-groups that need to be taken through a full persuasion journey — especially New Customers and Promising segments.

#### Framework 3: Before-After-Bridge (BAB)
**Best for:** Aspirational sub-groups, transformation narratives (Potential Loyalists, Champions)

1. **Before** — Describe the world before the product
2. **After** — Describe the world after the product
3. **Bridge** — Show how the product gets them there

**Sub-Group Application:** Use BAB for sub-groups that respond to lifestyle/aspirational messaging. Show the transformation they could experience.

#### Framework 4: Storytelling Arc (Hook → Conflict → Resolution → CTA)
**Best for:** Brand-building, founder stories, loyalty sub-groups (Loyal, Champions, Advocates)

1. **Hook** — Opening line that makes them keep reading
2. **Conflict** — Tension or challenge
3. **Resolution** — How the brand/product resolved it
4. **CTA** — Clear next step

**Sub-Group Application:** Use Storytelling for sub-groups with high brand affinity. They want the narrative, not just the offer.

### CTA Formulas by Sub-Group Purpose

| Sub-Group | Primary CTA | Secondary CTA |
|-----------|-------------|---------------|
| Sales (all) | "Shop Now" / "Get [X]% Off" | "Browse the Collection" |
| New Subscribers | "Start Your Journey" | "Learn More" |
| Lapsed/Winback | "Come Back — [X]% Off" | "See What's New" |
| VIP/Champions | "Get Early Access" | "See the Collection" |
| Abandoned Cart | "Complete Your Order" | "Continue Shopping" |
| Review Request | "Write a Review" | "Share Your Photos" |
| Referral | "Refer a Friend" | "Share Your Link" |

### Email Length Rules by Sub-Group

| Factor | Short-Form (50-150 words) | Long-Form (200-500+ words) |
|--------|--------------------------|---------------------------|
| Price point | < $50 | $50+ |
| Send frequency | 4+ per month | 1-2 per month |
| Sub-group engagement | Low attention span | High brand affinity |
| Product complexity | Simple/convenience | Complex/educational |
| Email goal | Direct response | Brand building |
| Sub-group | Cold/inactive | Warm/VIP |

### The "So What?" Test (Quality Gate)

Every sentence must pass one of these tests:
- Does this inform the reader?
- Does this build desire?
- Does this overcome an objection?
- Does this create urgency?
- Does this establish credibility?

**Cut immediately:** Generic brand fluff, redundant descriptions, over-explaining obvious features, empty transitional phrases, industry jargon.

### Tone Calibration by Sub-Group

| Tone | Best Sub-Groups | Example |
|------|----------------|---------|
| Promotional | Engaged, Active, Champions | "Get 30% off — but hurry, it ends tonight." |
| Educational | New, Promising, Explorers | "Here's why this ingredient matters." |
| Personal | Loyal, VIP, Cannot Lose Them | "I started this brand in my kitchen." |
| Urgent | Near-Convert, Abandoned Cart | "Your cart expires in 2 hours." |
| Celebratory | Champions, Loyal, Milestone | "Happy 1-year anniversary with us!" |
| Empathetic | Lapsed, At-Risk, Hibernating | "It's been quiet between us." |

---

## SKILL 6: copy (Copywriting Operating System)

### Copy Formats by Sub-Group Lifecycle Stage

| Stage | Email Type | Timing | Sub-Group Match |
|-------|-----------|--------|----------------|
| Welcome (7 emails) | Onboarding series | D0-D14 | New Subscribers, Promising |
| Cart Abandonment (3 emails) | Recovery | 1h, 24h, 72h | Near-Convert, Considerer |
| Post-Purchase (6 emails) | Retention + upsell | D0-D30 | First-Time Buyers, Repeat |
| Re-engagement (3 emails) | Winback | D0, D3, D7 | At-Risk, Hibernating, About to Sleep |

### Subject Line Formulas for Sub-Group Targeting

| Formula | Best Sub-Groups | Example |
|---------|----------------|---------|
| Curiosity | Engaged, Active | "[Number] ways to [benefit]" |
| Social Proof | New, Promising | "Join [Number] others who..." |
| Urgency | Near-Convert, Abandoned Cart | "Last chance to [benefit]" |
| Personalization | VIP, Loyal, Champions | "[Name], your [thing] is ready" |
| How-to | New, Explorers, Educational | "How to [desired outcome]" |
| Announcement | Champions, VIP | "Introducing [new product]" |
| Question | At-Risk, Need Attention | "Struggling with [problem]?" |
| Stat | Cold, Skeptical | "[Number]% of [audience] [action]" |

### AI-ism Banned List (Quality Standard)

Never use: dive into, unlock, game-changer, in today's fast-paced, leveraging, revolutionize, transformative, empower, disrupt, best-in-class, cutting-edge, world-class, reimagine, supercharge, synergy, holistic, think outside the box, low-hanging fruit, dot-com bubble, ninja, guru, rockstar

### Quality Gate for All Sub-Group Content

- No AI-isms from banned list
- Brand voice matches sub-group tone calibration
- Subject line A/B testable (2+ variations)
- CTA specific and action-oriented (one per section)
- Length matches sub-group expectations
- Read aloud: natural flow?
- Would you click this if you received it?

---

## CROSS-SKILL SYNTHESIS: Application to Layer 21 General Fallback Sub-Groups

### Framework Summary for Sub-Group Design

| Framework | Source Skill | Application |
|-----------|-------------|-------------|
| 5-Layer Segmentation (Engagement/Value/Behavioral/Demographic/Purchase) | segmentation-strategy-framework | Primary architecture for defining the 5 General Fallback sub-groups |
| Engagement Windows (30/60/90/180 day) | segmentation-strategy-framework | Split Fallback by engagement depth into active/warm/standard/peripheral/cold |
| RFM Personas (11 types) | segmentation-rfm-predictive | Map Fallback subscribers to behavioral personas for targeted messaging |
| Predictive CLV + Churn Risk | segmentation-rfm-predictive | Identify high-value at-risk Fallback subscribers for priority intervention |
| Zero-Party Data Collection | segmentation-rfm-predictive | Quiz/preference/survey data for micro-segmentation within Fallback |
| List Health Metrics (Growth/Churn/Net/Velocity/Revenue) | segmentation-list-health | Monitor sub-group health over time, detect decay early |
| Suppression Framework | segmentation-list-health | Manage who exits sub-groups (sunset, bounce, spam) |
| Voice Matrix (4 axes) | copywriting-brand-voice-storytelling | Maintain consistent brand voice while adapting tone per sub-group |
| Relationship Ladder (5 stages) | copywriting-brand-voice-storytelling | Map voice evolution as subscribers move through sub-groups |
| Content Pillars (5 types) | copywriting-brand-voice-storytelling | Rotate content themes across sub-groups for variety |
| 80/20 Rule (Value/Promotion) | copywriting-brand-voice-storytelling | Balance value vs. offer per sub-group engagement level |
| PAS / AIDA / BAB / Storytelling | copywriting-body-copy-frameworks | Choose the right body copy framework per sub-group's persuasion needs |
| CTA Formulas by Purpose | copywriting-body-copy-frameworks | Match CTA intensity and language to sub-group intent level |
| Email Length Rules (Short vs Long) | copywriting-body-copy-frameworks | Format length based on sub-group attention span and price point |
| Tone Calibration by Segment | copywriting-body-copy-frameworks | Shift tone (promotional/educational/personal/urgent/empathetic) per sub-group |
| Copy Formats by Lifecycle Stage | copy (Copywriting OS) | Map email types (welcome/cart/post-purchase/re-engagement) to sub-group lifecycle |
| Subject Line Formulas by Sub-Group | copy (Copywriting OS) | Target subject lines to sub-group psychology |

### Key Multi-Audience Frameworks Extracted

1. **Five-Layer Segmentation Framework** — The primary architecture for splitting any audience into actionable sub-groups across engagement, value, behavioral, demographic, and purchase dimensions.

2. **RFM Persona Matrix (11 Personas)** — Maps 125 score combinations to 11 actionable personas with specific treatment strategies, directly applicable to identifying behavioral sub-groups within General Fallback.

3. **Relationship Ladder (Voice Evolution)** — Five-stage voice progression (New Subscriber → First Purchase → Repeat Buyer → VIP → Advocate) that defines how messaging tone evolves as subscribers move through sub-groups.

4. **Segment-Specific Tone Adjustment Framework** — Six segment types with explicit Do/Don't rules for voice adaptation, ensuring cross-level content maintains brand consistency while resonating with each sub-group.

5. **PAS/AIDA/BAB/Storytelling Framework Selection** — Four body copy frameworks matched to sub-group persuasion needs: PAS for pain-point sub-groups, AIDA for cold/warming sub-groups, BAB for aspirational sub-groups, Storytelling for high-affinity sub-groups.

6. **Predictive Cross-Segment Combinations** — Three high-value combinations (High CLV + Low Engagement, High Churn Risk + Recent Purchase, Low CLV + High Frequency) for identifying subscribers that cross sub-group boundaries and need specialized treatment.

---

*Generated: Layer 21 Round 02 — Skill Loading*
*Skills loaded: 6/6*
*Frameworks extracted: 17 cross-skill frameworks*
*Output path: /root/projects/brightkidco/outputs/diagnosis/layer-21-round-02-skill-loading.md*
