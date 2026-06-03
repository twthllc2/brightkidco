# Layer 19 — Migration Strategy: Definitive Synthesis

**BrightKidCo Email Ecosystem**
**Layer:** 19 — Migration Strategy
**Round:** 5 (Synthesis)
**Sources:** Rounds 01-04 (Client Files, Skill Loading, Wiki Extraction, Cross-Reference)
**Generated:** 2026-05-25

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [The 4 Migration Paths — Complete Documentation](#2-the-4-migration-paths)
3. [Tag Architecture & Application Rules](#3-tag-architecture)
4. [Migration Decision Tree](#4-migration-decision-tree)
5. [Sub-Group Migration Profiles](#5-sub-group-migration-profiles)
6. [Re-Engagement & Sunset Strategy](#6-re-engagement-sunset)
7. [Cross-Reference Map](#7-cross-reference-map)
8. [Implementation Priority & Phased Rollout](#8-implementation-priority)
9. [Edge Cases & Failure Handling](#9-edge-cases)
10. [Migration Rate Benchmarks](#10-benchmarks)
11. [Verbatim Rules from Client Files](#11-verbatim-rules)

---

## 1. EXECUTIVE SUMMARY

General Fallback is NOT an end state. It is a TEMPORARY state until mom self-identifies. The migration system moves subscribers from General Fallback (GF) to level-specific flows through 4 independent, parallel-safe paths.

**Core Philosophy (DOC5):**
> "General Fallback mails are not just conversion tools. They are also DATA COLLECTION tools."

**Expected Lifecycle Outcome:**
- 65-75% of GF subscribers migrate to a level-specific track
- 25-35% stay in GF permanently (valid outcome, not failure)
- Migration is one-directional — once tagged, never returns to GF

**Strongest Migration Tool:** Post-Purchase Level-Detection Mail at Day 14
- Open rate: 65-75%
- Click rate: 35-50%
- Migration rate: 40-50% of GF purchasers

**Zero-Harm Design:** Every path's fallback is "stay GF and continue receiving cross-level content." No subscriber is penalized for not migrating.

---

## 2. THE 4 MIGRATION PATHS — COMPLETE DOCUMENTATION

### 2.1 PATH 1: CLICK-BASED MIGRATION

**Source:** DOC5 Section 30, DOC1 Section 19

**Mechanism:** Customer clicks on level-specific story links embedded in General Fallback mails. Click triggers automatic tag update via Klaviyo.

**How It Works:**
1. In every General Fallback mail, 3-4 migration anchors are built in organically
2. Each link has unique UTM parameters
3. Klaviyo tracks click events
4. Custom flow trigger: "When link clicked → update profile property `avatar_level`"
5. Subsequent mails routed based on new tag

**Migration Anchors (verbatim from DOC5):**

| Level | Anchor Text |
|-------|------------|
| Level 1 | "If you have a verbal child under 5 who 'almost trained' multiple times, here's Sarah's story → [Link]" |
| Level 2 | "If your kid has sensory issues around the bathroom and you've worked with a BCBA, here's Lisa's path → [Link]" |
| Level 3 | "If your child is 7+ and non-verbal, here's Maria's journey → [Link]" |
| Cross-Level | "If you're not sure yet — here's the general framework → [Link]" |

**Etiquette Rules:**
- Migration anchors are organically placed in mail
- NEVER as "click here if you're Level X" cold-tag
- Instead as story recommendation
- Mom thinks: "That's my kid!"

**Klaviyo Implementation:**
1. Each link has unique UTM parameters
2. Klaviyo tracks click events
3. Custom flow trigger: "When link clicked → update profile property `avatar_level`"
4. Subsequent mails routed based on new tag

**Expected Rate:** 15-25% of GF subscribers click over Welcome period
**Conversion Uplift:** +30-50% vs. staying in GF
**Time to Effect:** Immediate on tag application

**Fallback Chain:**
```
GF Mail with migration anchors sent
     |
     v
Subscriber clicks a level story link? ──YES──> Tag applied → Level flows
     |
     NO (75-85% don't click)
     |
     v
Next GF mail has same anchors (retry)
     |
     v
After all GF Welcome mails exhausted, no click?
     |
     v
If purchased: → Path 3 (PP-Level Detection Day 14)
If not purchased: → Stay GF → Cross-level flows → Sunset (120d inactive)
```

---

### 2.2 PATH 2: REPLY-BASED MIGRATION

**Source:** DOC5 Section 31

**Mechanism:** Customer replies to mail with details about child. Tag is set based on reply content (manually or automatically processed).

**Level-1 Indicators in Replies:**
- "Pre-K is coming"
- "He's 3/4/5 years old"
- "Oh Crap didn't work"
- "He's verbal but..."
- "Almost trained"

**Level-2 Indicators in Replies:**
- "BCBA / ABA / OT"
- "5/6/7 years old"
- "Sensory issues"
- "Prompt-dependent"
- "Withholding"
- "Years of trying"

**Level-3 Indicators in Replies:**
- "Non-verbal" / "AAC"
- "8/9/10 years old"
- "Never been trained"
- "Specialty diapers"
- "Years of giving up"
- "Medicaid"

**Implementation Notes:**
- Mail content should attract replies ("Hit reply if anything resonates")
- Klaviyo auto-tagging via reply-text-analysis possible but rarely implemented
- If manually processed: simple workflow
- Confidence threshold: 70%+ required for automatic tag application

**Expected Rate:** 5-15% of GF subscribers
**Conversion Uplift:** +20-40%
**Time to Effect:** Manual review period

**Fallback Chain:**
```
GF Mail encourages reply
     |
     v
Subscriber replies? ──YES──> NLP analysis → Level indicators found?
     |                              |                    |
     NO                          YES (>70%)           NO (<70%)
     |                              |                    |
     v                              v                    v
No change.                   Tag applied →          Manual review
Continue Path 1.             Level flows            OR stay GF
```

---

### 2.3 PATH 3: POST-PURCHASE LEVEL-DETECTION MAIL (DAY 14)

**Source:** DOC5 Section 33, DOC1 Section 17 (Flow #12), DOC6 Section 7

**THIS IS THE STRONGEST MIGRATION METHOD.**

**Trigger:** Order Placed + Day 14

**Format (verbatim from DOC5):**
```
Subject: "Quick question about your kid"
Body:
Hey [first_name],
You've had the underwear for about a week. To send the
right kind of support — actually useful stuff, not generic
— can I ask one quick question?
How would you describe your kid right now?
→ [Button 1] Verbal, "almost trained" but inconsistent
→ [Button 2] Sensory issues, tried many methods
→ [Button 3] Non-verbal or high support needs
→ [Button 4] I'm still figuring it out — keep it general
Each button just helps me tag you so the next mails fit your
situation. Won't change anything else.
Thanks for being here.
Lena ——
```

**Klaviyo Implementation:**
1. 4 separate Buttons with unique UTM codes
2. Click → Klaviyo updates profile property:
   - Button 1 → `avatar_level1`
   - Button 2 → `avatar_level2`
   - Button 3 → `avatar_level3`
   - Button 4 → `avatar_general` (stays)
3. After 7 days without click: gentle reminder mail (optional)
4. After 14 days without click: stays General

**Expected Rates:**
- Open: 65-75% (very high due to "your kid" hook)
- Click: 35-50% (very high)
- Result: ~40-50% Migration from General to specific Level

**DOC6 Confirmation:**
> "Day 14: Level-Detection Mail (DOC 5) → Click on L1 button → avatar_level1 / Click on L2 button → avatar_level2 / Click on L3 button → avatar_level3 / No click → stays avatar_general"

**Fallback Chain:**
```
Day 14: Subscriber still in GF + has purchased
     |
     v
PP-Level Detection mail sent (4 buttons)
     |
     v
Subscriber clicks a button? ──YES──> Tag applied → Level flows
     |
     NO (50-60% don't engage)
     |
     v
Day 21: Gentle reminder (optional)
     |
     v
Still no response?
     |
     v
Path 4 kicks in: Purchase hints (size/bundle inference)
     |
     v
Confidence > 70%? ──YES──> Tag applied (probabilistic)
     |
     NO
     |
     v
Stay GF permanently → Cross-level flows only
```

---

### 2.4 PATH 4: PURCHASE-BASED HINTS

**Source:** DOC5 Section 32

**Mechanism:** Data from Shopify orders provides age and experience hints.

**Underwear Size → Age Hint:**
| Size | Likely Level |
|------|-------------|
| 2T-3T | Level 1 (3-4 years) |
| 4T-5T | Mix (Level 1+2) |
| XL/XXL | Level 3 (7+) |

**Bundle Size → Experience Hint:**
| Bundle | Signal |
|--------|--------|
| 1 Pair | Tentative, new |
| 3+3 Bundle | Committed |
| 5+5 Bundle | High-investment, often Level 2-3 |

**Order Notes:** When mom leaves note with details — manually or parsed via form

**Klaviyo Implementation:**
- Klaviyo Properties based on Shopify Order Data
- e.g. `last_purchase_size = XL` → trigger Level-3-Hint-Tag
- Then: subsequent mails Level-specific

**IMPORTANT CAVEAT (verbatim from DOC5):**
> "Purchase Hints are uncertain. They are only 'Hint', not 'Confirmation'. Therefore: Better Level-Detection-Mail for confirmation."

**Confidence Threshold:** 70%+ required for tag application

**Expected Rate:** 10-20% of GF purchasers
**Conversion Uplift:** +15-25%
**Time to Effect:** Day of purchase

**Fallback Chain:**
```
Purchase event detected (GF subscriber)
     |
     v
Size/bundle analysis → Confidence > 70%?
     |                        |
    YES                       NO
     |                        |
     v                        v
Tag applied (inferred)    Stay GF
     |                        |
     v                        v
Level flows              Wait for Path 3 (Day 14)
```

---

### 2.5 PATH INTERACTION: SEQUENCING & OVERRIDES

All 4 paths run in parallel with one critical sequencing constraint:

**Path 3 ALWAYS overrides Path 4 when they conflict.**

```
Day 0: Purchase event
     |
     v
Path 4 fires: Purchase hints analysis
     |              |
  Confidence>70%  Confidence<70%
     |              |
     v              v
  Tag applied     Stay GF
     |              |
     v              v
Day 14: Path 3 fires (PP-Level Detection mail)
     |
     v
Subscriber self-selects (clicks button)
     |
     v
If different from Path 4 tag → NEW tag applied (overrides)
If same → No change
If no click → Path 4 tag remains (if applied)
```

**Key Rule:** The subscriber's explicit choice (Path 3) takes priority over algorithmic inference (Path 4).

---

## 3. TAG ARCHITECTURE & APPLICATION RULES

### 3.1 Tag Taxonomy

**Avatar Level Tags (4):**
| Tag | Source | Application Timing |
|-----|--------|-------------------|
| `avatar_level1` | Pop-up / Path 1-4 | At signup or migration |
| `avatar_level2` | Pop-up / Path 1-4 | At signup or migration |
| `avatar_level3` | Pop-up / Path 1-4 | At signup or migration |
| `avatar_general` | Pop-up / Default | At signup (no level selected) |

**Behavioral Tags (6):**
| Tag | Trigger |
|-----|---------|
| `welcome_completed` | Welcome flow finished |
| `welcome_completed_no_purchase` | Welcome flow finished, no order |
| `post_purchase_active` | Purchased, currently engaged |
| `at_risk_no_open` | Day 3-7 no opens post-purchase |
| `inactive_60_days` | 60 days no engagement |
| `inactive_120_days` | 120 days no engagement |

**Purchase Tags (5):**
| Tag | Trigger |
|-----|---------|
| `buyer_1pair` | Single pair purchase |
| `buyer_3plus3` | 3+3 bundle purchase |
| `buyer_5plus5` | 5+5 bundle purchase |
| `repeat_buyer` | 2+ orders |
| `vip_buyer` | 3+ orders |

### 3.2 Klaviyo Profile Properties

**Standard Properties:**
- `first_name`, `last_name`, `email`, `created_at`, `consent` (GDPR)

**Custom Properties:**
| Property | Type | Values |
|----------|------|--------|
| `avatar_level` | string | `level1` / `level2` / `level3` / `general` |
| `child_age` | string | Optional, if mom shared |
| `signup_source` | string | `popup` / `checkout` / `referral` |
| `welcome_flow_completed` | boolean | true/false |
| `last_purchase_pack_size` | string | `1pair` / `3+3` / `5+5` |
| `vip_customer` | boolean | High LTV flag |

**Engagement Properties (from Wiki):**
| Property | Description |
|----------|-------------|
| `engagement_tier` | 7/14/30/60/90-day — dynamic by segment membership |
| `last_email_click` | Timestamp of last click |
| `last_email_open` | Timestamp (unreliable for MPP users) |
| `last_site_activity` | Timestamp of last website visit |
| `last_purchase` | Timestamp of last order |

**Migration Properties (from Wiki):**
| Property | Description |
|----------|-------------|
| `Suppressed` | Boolean — set by sunset flow on Day 8 |
| `migrated_from` | Source segment/tier before migration |
| `migration_trigger` | What caused migration (click, purchase, preference, sunset) |

**Predictive Properties (Klaviyo Analytics):**
| Property | Description |
|----------|-------------|
| `predicted_clv` | Predicted customer lifetime value |
| `predicted_propensity` | Likelihood to purchase in next 60 days (0-100%) |
| `churn_risk` | Probability of churning (1-5) |
| `expected_date_of_next_order` | EDNO prediction |

### 3.3 Tag Application Timing

1. **At pop-up signup:** Level tag applied immediately (`avatar_level1/2/3/general`)
2. **At purchase:** Buyer tags applied (`buyer_1pair`, `buyer_3plus3`, `buyer_5plus5`)
3. **At Day 14:** Level-Detection mail click updates `avatar_level`
4. **Based on behavior:** `welcome_completed`, `at_risk_no_open`, `inactive_60/120_days`
5. **Click-based migration:** Click on story links in GF mails updates `avatar_level`

### 3.4 Tag Removal Rules

No explicit tag removal rules documented. Tags are additive — new tags are applied as the subscriber progresses. The `avatar_level` property can be UPDATED (from `general` to `level1/2/3`) but not removed. Level tag is permanent — one-way migration only.

### 3.5 Flow Routing After Tag Change

When `avatar_level` changes (via migration):
- Subsequent mails route based on new tag
- Level-specific Welcome Flow variants, Post-Purchase Education, FAQ, Winback all switch
- Cross-level flows (Cart, Checkout, Browse) remain cross-level regardless of tag
- High-velocity flows (Cart/Checkout) ALWAYS cross-level — speed > segmentation (DOC6)

**DOC6 Rule:**
> "Before level tag known → Cross-Level (DOC 5)"
> "After level tag known → Level-specific (DOC 2/3/4)"
> "For high-velocity flows (Cart/Checkout) → Cross-Level even if tag known (speed > segmentation)"

### 3.6 Segment Logic for Flow Routing

**Welcome Flow Variants:**
- Level 1 → `avatar_level1` tag + `welcome_completed = false`
- Level 2 → `avatar_level2` tag + `welcome_completed = false`
- Level 3 → `avatar_level3` tag + `welcome_completed = false`
- General → `avatar_general` tag + `welcome_completed = false`

**Post-Purchase Flows:**
- Day 0-21 Education → `buyer_*` tag + `days_since_purchase`
- Day 14 Level-Detection → if `avatar_level = unknown`
- Level-Specific Education (Phase 3) → `avatar_level` tag known after Day 14

**Exit Conditions (DOC1):**
EVERY flow must have:
- Made a purchase (for conversion flows)
- Unsubscribed
- Already in higher-priority flow

---

## 4. MIGRATION DECISION TREE

```
START: Is subscriber in General Fallback (avatar_general)?
  |
  ├─ NO → Already level-specific. No migration needed.
  |
  └─ YES → Continue below.
       |
       ├─ Has subscriber PURCHASED?
       |    |
       |    ├─ YES → Is it Day 0-13 post-purchase?
       |    |    |
       |    |    ├─ YES → Path 4 (Purchase Hints) fires.
       |    |    |    |
       |    |    |    ├─ Size/bundle confidence > 70%?
       |    |    |    |    ├─ YES → Tag applied (inferred level).
       |    |    |    |    └─ NO → Stay GF, wait for Day 14.
       |    |    |    |
       |    |    |    └─ Path 1 (Click) + Path 2 (Reply) also active.
       |    |    |
       |    |    └─ NO (Day 14+) → Path 3 (PP-Level Detection) fires.
       |    |         |
       |    |         ├─ Subscriber clicks a level button?
       |    |         |    ├─ YES → Tag applied (explicit choice). DONE.
       |    |         |    └─ NO → Day 21 reminder. Still no?
       |    |         |         └─ Path 4 result remains (if any).
       |    |         |              If no Path 4 → Stay GF permanently.
       |    |         |
       |    |         └─ Path 1 (Click) + Path 2 (Reply) still active.
       |    |
       |    └─ Path 1 + Path 2 always available as supplementary.
       |
       └─ NO PURCHASE → Only Path 1 and Path 2 available.
            |
            ├─ Path 1: Click-based (every GF mail has migration anchors)
            |    |
            |    ├─ Clicks a level story? → Tag applied. DONE.
            |    └─ No click → Continue receiving GF mail with anchors.
            |
            ├─ Path 2: Reply-based (reply encouragement in GF mail)
            |    |
            |    ├─ Replies with level indicators? → NLP → Tag if confident. DONE.
            |    └─ No reply or unclear → No action.
            |
            └─ Neither path converts?
                 |
                 ├─ 60d inactive → Winback Path B
                 └─ 120d inactive → Sunset Flow → Suppression
```

### Quick Reference: Which Path When

| Subscriber State | Available Paths | Priority | Expected Total Migration |
|:----------------:|:--------------:|:--------:|:------------------------:|
| GF + No Purchase + Active | 1, 2 | Path 1 first (passive) | 15-25% over Welcome |
| GF + Purchased (Day 0-13) | 1, 2, 4 | Path 4 first (auto) | 10-20% from Path 4 |
| GF + Purchased (Day 14+) | 1, 2, 3 | Path 3 first (strongest) | **40-50%** from Path 3 |
| GF + Day 14 + Path 4 ran | 1, 2, 3 | Path 3 overrides | 40-50% from Path 3 |
| GF + Never Purchased + 60d | 1, 2 | Winback B | 2-4% |
| GF + Never Purchased + 120d | None | Sunset → Suppress | <1% |

---

## 5. SUB-GROUP MIGRATION PROFILES

### 5.1 The 5 General Fallback Sub-Groups (DOC5, Section 1)

| Sub-Group | Share of GF | Share of Total | Description |
|-----------|:-----------:|:--------------:|-------------|
| A — Diagnostic Entrants | ~25% | ~10% | No formal ASD diagnosis, waiting for evaluation |
| B — Diagnosis-Rejecters | ~15% | ~6% | Has diagnosis but doesn't identify as "autism mom" |
| C — Sensory-Difference Parents | ~25% | ~10% | SPD, ADHD, other neurological differences, NO ASD |
| D — Overwhelmed Non-Selectors | ~25% | ~10% | Has clear level but clicked pop-up away too fast |
| E — Cart/Browse without opt-in | ~10% | ~14% | No pop-up opt-in, captured via Klaviyo cookie |

### 5.2 Sub-Group × Migration Path Matrix

| Sub-Group | Path 1 (Click) | Path 2 (Reply) | Path 3 (PP-Level) | Path 4 (Purchase) | Best Path |
|:---------:|:--------------:|:--------------:|:-----------------:|:-----------------:|:---------:|
| A — Diagnostic | 15-25% | 5-10% | **40-50%** | 10-15% | Path 3 |
| B — Rejecters | <10% (DON'T push) | <5% | 15-25% | <5% | **NONE — stay GF** |
| C — Sensory | **20-35%** | 10-15% | **40-55%** | 15-20% | Path 1 or 3 |
| D — Overwhelmed | 10-15% | 5-10% | **40-50%** | 10-15% | Path 3 |
| E — Cart/Browse | N/A | N/A | **20-30%** | <5% | Path 3 |

### 5.3 Sub-Group Migration Sensitivity Rules

| Sub-Group | Language Sensitivity | Migration Approach | Fallback |
|:---------:|:-------------------:|-------------------|----------|
| A | NO diagnosis language | Gentle self-selection via story anchors | Stay GF → Cross-level |
| B | **NO ASD language EVER** | **Never push migration** — stay GF permanently | GF IS the destination |
| C | Science OK; NO ASD required | Mechanism hooks → L2 self-selection | Stay GF → Cross-level |
| D | Validation-heavy | PP-Level Detection (explicit choice) | Stay GF → Cross-level |
| E | Universal | Purchase-based inference only | Stay GF → Cross-level |

### 5.4 Migration Relevance by Sub-Group

**Sub-Group A (Diagnostic Entrants):** Most likely to migrate AFTER diagnosis. Education-first approach. Migration anchors should be gentle. Trigger: Diagnostic Process — after 2-3 mails realizes "That's ASD-typical" and chooses level.

**Sub-Group B (Diagnosis-Rejecters):** Least likely to migrate via level-specific paths. May self-select via symptom matching. Avoid diagnosis language. **NEVER push migration — GF IS the permanent destination for this group.**

**Sub-Group C (Sensory-Difference):** Won't migrate to ASD-specific levels. Stays General or creates custom path. Highly profitable — mechanism-oriented. Language: science OK, no ASD required.

**Sub-Group D (Overwhelmed Non-Selectors):** Highest migration potential. Has a real level, just didn't select it. Click-based and Level-Detection mail most effective. Validation-heavy messaging.

**Sub-Group E (Cart/Browse without opt-in):** Migration via purchase hints and post-purchase Level-Detection. No pre-purchase migration path. Universal language.

### 5.5 Self-Identification Triggers (DOC5, Section 35)

| Trigger | Mechanism |
|---------|-----------|
| Specific Symptom List | "Look at this list: which 3 sound like your kid?" → Mom reads, identifies |
| Testimonial Match | Three-Family-Pattern → "That's me, in the second story" |
| Language Matching | Verbatim quote exactly matches her situation |
| Diagnostic Process | Sub-Group A: after 2-3 mails realizes "That's ASD-typical" |
| Community Signal | Reads mail → posts in community → clearer self-image |

---

## 6. RE-ENGAGEMENT & SUNSET STRATEGY

### 6.1 Re-Engagement Flows

**Winback Path A (Post-Buyer Inactive):**
- Trigger: Last purchase + 90 days no engagement
- Mails: 3 (personal → discount → urgency)
- Segmentation: 4 level variants
- Phase: 2

**Winback Path B (Subscriber Never-Bought):**
- Trigger: Signup + 60 days no purchase
- Mails: 3
- Segmentation: 4 level variants
- Phase: 3

**Post-Purchase Support At-Risk Flow:**
- Trigger: Day 3-7 no opens
- Mails: 4
- Segmentation: Cross-level
- Phase: 3

### 6.2 Winback Flow Sequence (3 Emails)

```
Trigger: Placed Order
  → Wait: 60-120 days (non-replenishable) or 45-60 days (replenishable)
  → Filter: Placed Order = 0 since starting flow
  → Email 1: "It's Been Awhile" (warm, personal, 15% discount code)
    → Wait: 10 days
    → Split: Purchased since Email 1?
      → YES: End flow
      → NO: Continue
  → Email 2: Discount Follow-Up (expiration, social proof)
    → Wait: 1 day
    → Split: Purchased since Email 1?
      → YES: End flow
      → NO: Continue
  → Email 3: Text-Based Closer (founder's name, urgency)
```

**Performance Targets:**
| Metric | Target |
|--------|--------|
| Email 1 Open Rate | > 25% |
| Email 2 Open Rate | > 20% |
| Email 3 Open Rate | > 15% |
| Conversion Rate | > 3% within 30 days |
| Unsubscribe Rate | < 0.5% |

### 6.3 Sunset Flow (2 Emails + Suppression)

**Trigger:** 120 days inactive (configurable: 90-365 based on sending frequency)
**Purpose:** List hygiene — NOT revenue
**Phase:** 3

**Flow Sequence:**
```
Trigger: Added to Unengaged Segment
  → Email 1: "We Miss You" (immediate)
    → Wait: 7 days
    → Conditional Split: Opened or clicked in last 7 days?
      → YES: End flow (re-engaged)
      → NO: Continue to Email 2
  → Email 2: "Final Farewell"
    → Suppression (native or tag-based)
```

**Email 1 — "We Miss You":**
- Tone: Friendly, transparent, not promotional
- Subject lines: "Haven't heard from you lately", "Should we take a break?"
- CTAs: "I want to stay" (preference center) + "Unsubscribe" (equally prominent)
- NO aggressive offers — list hygiene, not conversion

**Email 2 — "Final Farewell":**
- Tone: Direct but friendly
- Subject lines: "Last call — staying or going?", "We're cleaning up our list"
- Key message: "If you don't click, we'll unsubscribe you"
- CTA: "Stay on the List" button

**Post-Flow Handling:**
- Add to suppression list (not permanent delete)
- Suppress for 6-12 months (may re-engage via other channels)
- If new purchase or re-engagement → remove suppression
- Run sunset flow quarterly

### 6.4 Re-Engagement Tone (DOC1, Section 21)

> "TONE: Respectful Re-engagement. LANGUAGE: 'How are you doing?' / 'Whichever path you take.' ENERGY: Genuinely curious, low-pressure. DO: Acknowledge time, no guilt, reopen conversation softly. DON'T: 'You forgot us' guilt-tripping, aggressive re-engage."

Sample opener:
> "It's been a while. No pressure — but if your kid is still in pull-ups, here's what I'd suggest looking at next."

### 6.5 Suppression Decision Tree

| Scenario | Action |
|----------|--------|
| Unsubscribes | Suppress immediately (legal) |
| Hard bounces | Suppress immediately (invalid) |
| Spam complaints | Suppress immediately (reputation) |
| No engagement 90 days | Enter winback flow |
| No engagement 120-180 days | Enter sunset flow |
| Completes sunset without re-engaging | Suppress permanently |
| Bot behavior detected | Suppress immediately |

### 6.6 Sunset vs. Winback Decision

| Window | Action | Focus |
|--------|--------|-------|
| 90-180 days no purchase | Winback flow | Reactivation, offers, product-focused |
| 180+ days no engagement | Sunset flow | List hygiene, preference updates, remove |

**Rule:** Run winback FIRST for dormant purchasers; if they don't reactivate, move to sunset.

### 6.7 Behavioral Tags for Re-Engagement

| Tag | Trigger | Action |
|-----|---------|--------|
| `at_risk_no_open` | Day 3-7 no opens | Triggers Support At-Risk flow |
| `inactive_60_days` | 60 days no engagement | Monitoring tag |
| `inactive_120_days` | 120 days no engagement | Triggers Sunset flow |

---

## 7. CROSS-REFERENCE MAP

### 7.1 Migration Path × Layer 8 (Segmentation Mechanics)

| Migration Concept | Layer 8 Implementation |
|------------------|----------------------|
| 4 Migration Paths | Paths 1-4 defined in Layer 8 §8.1-8.5 |
| Click-Based (Path 1) | UTM click tracking on story links → Klaviyo tag |
| Reply-Based (Path 2) | Reply content NLP → level indicators → tag if >70% |
| PP-Level Detection (Path 3) | Day 14 mail, 4 buttons → explicit self-selection |
| Purchase Hints (Path 4) | Size/bundle analysis → probabilistic → tag if >70% |
| GF Sub-Groups (A-E) | Each has different migration likelihood and optimal path |
| Tag Taxonomy (15 tags) | Migration adds `avatar_level` tags |
| 70% Confidence Threshold | Paths 2 and 4 only; Paths 1 and 3 are explicit choice |

### 7.2 Migration Path × Layer 16 (Flow Architecture)

| Migration Concept | Flow Architecture Implementation |
|------------------|--------------------------------|
| Post-Migration Entry | Level-specific Welcome (if not completed) or PP-Extended Education |
| Welcome Flow (4 variants) | Migration determines variant: L1, L2, L3, or GF |
| PP-Extended Education (4) | Post-purchase migrants enter level variant at Day 22 |
| PP-Level Detection (Flow 12) | IS Path 3 — the Day 14 migration mechanism |
| Winback A/B (4 variants) | Migrated → level-specific; GF → cross-level |
| FAQ/Objection Library (6) | Level-specific for migrated; cross-level for GF |
| Cart/Checkout/Browse | ALWAYS cross-level (DOC5) — unaffected by migration |
| Sunset Flow | Cross-level — works regardless of migration status |
| 25-Flow System | 5 level-segmented; 20 cross-level |

### 7.3 Migration Path × Layer 21 (Sub-Groups)

Sub-group data referenced from Layer 8 §7 (General Fallback Sub-Group Routing Matrix). When Layer 21 is produced, update with:
- Detailed sub-group characteristics and language preferences
- Sub-group-specific migration copy recommendations
- Sub-group behavioral indicators for automatic classification
- Sub-group × conversion probability matrices

### 7.4 Migration Impact Summary

| Metric | Before (GF Only) | After (Level-Specific) | Uplift |
|--------|:-----------------:|:----------------------:|:------:|
| L1 Conversion | 5-10% | 15-25% | **+100-150%** |
| L2 Conversion | 5-10% | 8-15% | **+60-80%** |
| L3 Conversion | 5-10% | 4-8% | **+30-60%** |
| Total GF Migrated | 0% | 65-75% over lifecycle | — |
| GF Staying Permanently | 100% | 25-35% | — |

---

## 8. IMPLEMENTATION PRIORITY & PHASED ROLLOUT

### 8.1 Phase 1 (Launch-Ready, Months 1-2)

**Migration-relevant flows:**
- Welcome Flow (8 mails × 4 levels = 32 mails) — includes migration anchors (Path 1)
- Post-Purchase Level-Detection Mail (Day 14) — PRIMARY migration tool (Path 3)

**Setup tasks:**
1. Klaviyo Setup: Upload all DOCs, set up project instructions
2. Tag Creation: Set up all `avatar_level` tags in Klaviyo
3. Flow Routing: Configure Welcome Flow variants based on tags
4. Shopify Integration: Sync Order Placed, Fulfilled, Delivered events
5. Web Tracking: Klaviyo JavaScript snippet

**Priority:** HIGHEST — these two flows cover 60-70% of total migration potential.

### 8.2 Phase 2 (High-Value, Months 3-4)

**Migration-relevant flows:**
- Browse Abandonment — includes migration anchors
- Winback Path A (Post-Buyer Inactive, 90 days) — level-specific re-engagement
- Post-Purchase Extended Upsell — level-aware

**Priority:** HIGH — captures lapsed buyers and browse-intent signals.

### 8.3 Phase 3 (Nice-to-Have, Months 5-6)

**Migration-relevant flows:**
- Winback Path B (Subscriber Never-Bought, 60 days) — level-specific
- Sunset Flow (120 days inactive) — last chance for engagement
- FAQ/Objection Library — migration anchors in educational content
- Reply-based migration tooling (Path 2)

**Priority:** MEDIUM — completes the full migration lifecycle.

### 8.4 Implementation Priority Order

| Priority | Item | Paths Covered | Impact |
|:--------:|------|:-------------:|:------:|
| 1 | Welcome Flow with migration anchors | Path 1 | 15-25% migration |
| 2 | PP-Level Detection Mail (Day 14) | Path 3 | 40-50% migration |
| 3 | Purchase Hints automation | Path 4 | 10-20% migration |
| 4 | Browse Abandonment anchors | Path 1 (supplementary) | 5-10% |
| 5 | Winback Path A | Re-engagement | Prevents sunset |
| 6 | Sunset Flow | Cleanup | Protects deliverability |
| 7 | Winback Path B | Re-engagement | Last resort |
| 8 | Reply-based tooling | Path 2 | 5-15% |

---

## 9. EDGE CASES & FAILURE HANDLING

### 9.1 Migration Failure Scenarios

**Scenario 1: Subscriber doesn't engage with Level-Detection mail**
- After 7 days: gentle reminder mail (optional)
- After 14 days: stays `avatar_general`
- No penalty, no forced assignment

**Scenario 2: Subscriber clicks wrong level**
- No documented correction mechanism
- Implicit: reply-based migration could override if subscriber writes in
- Path 3 (self-selection) can override Path 4 (inference) if subscriber re-selects

**Scenario 3: Subscriber ignores all migration anchors in GF mails**
- Remains in General Fallback indefinitely
- Continues receiving cross-level content
- Can still migrate via future Level-Detection mail or purchase

**Scenario 4: Path 4 applies wrong tag (low-confidence inference)**
- Mitigated by 70% confidence threshold
- If wrong: subscriber receives mismatched content → lower conversion but no harm
- Path 3 (Day 14) can override if subscriber self-selects differently

**Scenario 5: MPP user (Apple Mail Privacy Protection)**
- Open rate unreliable for ~50% of subscribers
- Use CLICKS as engagement fallback (not opens)
- Add "Active on Site" and "Placed Order" as secondary signals
- Migration via click-based paths unaffected (clicks are reliable)

### 9.2 No Explicit Rollback Rules

The client files do NOT document explicit rollback rules:
1. Migration is one-directional — once tagged, never returns to GF
2. Level-Detection fallback: no click → stays `avatar_general` permanently
3. Purchase hints are uncertain — only "Hint", not "Confirmation"
4. After 14 days without click: stays General (no forced migration)

### 9.3 Zero-Harm Guarantee

Every migration path is designed to be zero-harm on failure:
- Path 1: No click = no tag change = stays GF
- Path 2: No reply = no action = stays GF
- Path 3: No click = no tag change = stays GF
- Path 4: Low confidence = no action = stays GF

**The only harm scenario:** Path 4 applies a wrong tag with >70% confidence → subscriber receives mismatched content → lower conversion. Mitigated by Path 3 override on Day 14.

### 9.4 Sub-Group B Protection

Sub-Group B (Diagnosis-Rejecters) must NEVER be pushed toward migration. They stay GF permanently with ultra-gentle, label-free language. This is the ONE sub-group where GF IS the destination, not a waypoint.

---

## 10. MIGRATION RATE BENCHMARKS

| Metric | Benchmark | Source |
|--------|-----------|--------|
| Path 1 (Click) migration rate | 15-25% of GF | DOC5 §30 |
| Path 2 (Reply) migration rate | 5-15% of GF | DOC5 §31 |
| Path 3 (PP-Level) open rate | 65-75% | DOC5 §33 |
| Path 3 (PP-Level) click rate | 35-50% | DOC5 §33 |
| Path 3 (PP-Level) migration rate | 40-50% of GF purchasers | DOC5 §33 |
| Path 4 (Purchase) migration rate | 10-20% of GF purchasers | DOC5 §32 |
| Total lifecycle migration | 65-75% of GF | Cross-Reference |
| GF staying permanently | 25-35% | Cross-Reference |
| Sunset re-engagement rate | 1-3% | Wiki (08-sunset-flow) |
| Winback conversion target | > 3% within 30 days | Skill Loading |
| L1 conversion uplift | +100-150% | Cross-Reference |
| L2 conversion uplift | +60-80% | Cross-Reference |
| L3 conversion uplift | +30-60% | Cross-Reference |
| 7-day engaged tier size | 15-25% of active list | Wiki (05-engagement-tier) |
| 30-day engaged open rate | 20%+ threshold | Wiki (05-engagement-tier) |
| Predictive propensity "high" | 60%+ | Wiki (04-predictive) |
| Predictive propensity "nurture" | 20-60% | Wiki (04-predictive) |
| Predictive propensity "suppress" | Below 20% | Wiki (04-predictive) |
| Klaviyo predictive minimum | 500+ profiles, 180+ days | Wiki (Andrew Langhorn) |

---

## 11. VERBATIM RULES FROM CLIENT FILES

### Core Migration Philosophy (DOC5)

> "General Fallback is not an end state. It is a TEMPORARY state until mom self-identifies."

> "General Fallback mails are not just conversion tools. They are also DATA COLLECTION tools."

> "Goal of General-Fallback is not just conversion — but also MIGRATION to level-specific segments where possible."

### Segmentation Philosophy (DOC6)

> "PRINCIPLE 3: MIGRATION > FORCED SEGMENTATION. If unclear which level: use General Fallback, then migrate through Click/Reply/Purchase Hints. Never guess."

> "Migration anchors transform General audience into Level segments."

> "DOC 5 has the 'Whether...Or...If...' language, the universal symptom hooks and the migration strategy. It is the operationally most important doc."

### Migration Path Hierarchy (DOC5)

> "THIS IS THE STRONGEST MIGRATION METHOD." (referring to Post-Purchase Level-Detection Mail at Day 14)

> "Purchase Hints are uncertain. They are only 'Hint', not 'Confirmation'. Therefore: Better Level-Detection-Mail for confirmation."

### Tag Application (DOC1)

> "Tag triggers Welcome Flow (level-specific variant)" (pop-up tag → flow routing)

> "Click → Klaviyo updates profile property: Button 1 → avatar_level1, Button 2 → avatar_level2, Button 3 → avatar_level3, Button 4 → avatar_general (stays)"

### Flow Routing Rules (DOC6)

> "Before level tag known → Cross-Level (DOC 5)"
> "After level tag known → Level-specific (DOC 2/3/4)"
> "For high-velocity flows (Cart/Checkout) → Cross-Level even if tag known (speed > segmentation)"

### Migration Philosophy from Wiki

> "Engagement is the primary migration signal." — An open or click moves a subscriber from GF to engaged segment automatically.

> "Value signals prevent wrong migration." — A VIP who stops engaging should enter VIP winback, NOT standard sunset.

> "Behavioral signals are the fastest migration path." — Product view, cart add, or checkout reach immediately qualifies for behavioral segment.

> "Zero-party data is the unlock for data-poor subscribers." — Quiz results, preferences, or survey responses can move subscribers out of GF.

> "The sunset flow is the safety net." — If all migration attempts fail, the 2-email sunset + suppression protects deliverability. It's the exit door, not a punishment.

### Key Onboarding Rules

> "Include migration anchors in General Fallback mails" (Always Do list)

> "~50% of real volume is General Fallback (cross-level)" (About the Audience)

> "Migration strategy central" (DOC5 description)

---

## MISSING DATA

The following input file was not available:
- **WhatsApp Chat with Giuliano.txt** — File not found at `/root/projects/brightkidco/docs/extracted/`

Potential missing data:
- Migration strategy decisions discussed in chat
- Tag naming preferences
- Flow assignment preferences
- Any informal migration rules discussed verbally

---

*Layer 19 Round 5 — Synthesis Complete*
*All 4 input rounds consolidated: Client Files (Round 01), Skill Loading (Round 02), Wiki Extraction (Round 03), Cross-Reference (Round 04)*
*Total sources: 4 DOC files, 5 skills, 12 wiki files, 4 cross-reference targets*
