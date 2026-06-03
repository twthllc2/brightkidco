# S7-I3-P1: Segment Configuration — Level-Based Segments

**Part:** 1 of 2 (Part 2 covers behavior + purchase segments)
**Source:** Patched Segmentation Strategy §3, §5, §7; Giuliano-Demands §15; Plan §7 Item 3
**Output for:** Klaviyo Implementation

---

## Table of Contents

1. [Segment Architecture Overview](#1-segment-architecture-overview)
2. [Level-Based Segments (Welcome Flow Routing)](#2-level-based-segments-welcome-flow-routing)
3. [Level Detection & Migration Segments](#3-level-detection--migration-segments)
4. [Klaviyo Filter Syntax Reference](#4-klaviyo-filter-syntax-reference)
5. [Tag-Based vs Property-Based Approach](#5-tag-based-vs-property-based-approach)
6. [Welcome Flow Routing Conditions](#6-welcome-flow-routing-conditions)
7. [Level Detection Popup Integration](#7-level-detection-popup-integration)
8. [Fallback Routing for Unsegmented Subscribers](#8-fallback-routing-for-unsegmented-subscribers)
9. [Segment Maintenance & Migration](#9-segment-maintenance--migration)

---

## 1. Segment Architecture Overview

### 1.1 Segment Categories

The BrightKidCo Klaviyo implementation uses 20+ segments across 3 categories:

| Category | Count | Segments | Purpose |
|----------|:-----:|----------|:-------:|
| **Level-Based** (Part 1) | 6 | avatar_level1, avatar_level2, avatar_level3, avatar_general, popup_quiz_completed, level_detected | Welcome Flow routing + level detection |
| **Behavior-Based** (Part 2) | 8+ | Engagement, At-Risk, Inactive, Sunset, etc. | Behavioral state tracking |
| **Purchase-Based** (Part 2) | 6+ | buyer_1pair, buyer_3plus3, buyer_5plus5, etc. | Post-purchase routing |

### 1.2 Core Routing Principle

> **Before level tag known** (GF/no tag) → Cross-Level (DOC 5)
> **After level tag known** → Level-specific (DOC 2/3/4) for educational/winback/FAQ flows
> **High-velocity flows** (Cart/Checkout/Browse) → Cross-Level even if tag known
> **Post-Purchase Day 0-21** → Cross-Level (DOC 5) — education-first
> **Post-Purchase Day 22+** → Level-specific if tag known

*Source: Segmentation Strategy §6.1; Demands §1*

### 1.3 Segment Naming Convention

All segments use lowercase with underscores:
- Level segments: `avatar_levelX` prefix
- Detection segments: descriptive function name
- Tags use: `avatar_level1`, `avatar_level2`, `avatar_level3`, `avatar_general`
- Profile properties use: `avatar_level` = `level1`/`level2`/`level3`/`general`

---

## 2. Level-Based Segments (Welcome Flow Routing)

### 2.1 Segment: `avatar_level1` — Welcome Flow L1

**Purpose:** Routes Level 1 subscribers into Welcome Flow variant L1 (DOC 2)

| Property | Value |
|----------|-------|
| **Klaviyo Name** | `Welcome L1 — Avatar Level 1` |
| **Segment ID** | `avatar_level1` |
| **Used By** | Welcome Flow (Flow 01) |
| **Expected Volume** | ~17.5% of total list |

#### Klaviyo Filter Conditions

**Approach A — Tag-Based (Primary, Phase 1):**

```
Condition 1: What someone has or has not done
  Has at least one of the following tags: avatar_level1
  AND
Condition 2: What someone has or has not done
  Does not have at least one of the following tags: welcome_completed
```

**Klaviyo UI configuration:**
```
Segment Definition:
  Tags — contains at least one of: avatar_level1
    AND
  Tags — does not contain: welcome_completed
```

**Approach B — Property-Based (Fallback, for cross-reference):**

```
Condition 1: About someone
  avatar_level equals: level1
  AND
Condition 2: What someone has or has not done
  Does not have at least one of the following tags: welcome_completed
```

**Klaviyo API representation (tag-based):**
```json
{
  "data": {
    "type": "segment",
    "attributes": {
      "name": "Welcome L1 — Avatar Level 1",
      "definition": {
        "conditions": [
          {
            "type": "tag",
            "method": "contains-all",
            "value": ["avatar_level1"]
          },
          {
            "type": "tag",
            "method": "does-not-contain",
            "value": ["welcome_completed"]
          }
        ]
      }
    }
  }
}
```

#### Tags Applied By This Segment

| Tag | When Applied | Method |
|-----|:-----------:|:------:|
| `avatar_level1` | Pop-up Button 1 click — "Talks about potty but won't actually do it" | Klaviyo form action |
| `avatar_level1` | Click-based migration anchor in GF mail | UTM click tracking |
| `avatar_level1` | PP-Level Detection mail Button 1 | UTM click tracking |

#### Profile Properties Set

| Property | Value | When |
|----------|:-----:|:----:|
| `avatar_level` | `level1` | On tag assignment (via Klaviyo form/trigger) |
| `signup_source` | `popup` / `checkout` / `referral` | On signup |

#### Exit Conditions

| Condition | Exit To |
|-----------|:-------:|
| `welcome_completed` tag applied | Removes from segment → PP-Education Day 0-21 |
| Made a purchase during Welcome | Welcome exits → PP-Day 0-21 (cross-level) |
| Unsubscribed | Klaviyo suppression — no further sends |
| Cart Abandonment overrides (E1-E2 already sent) | Paused during cart session |

---

### 2.2 Segment: `avatar_level2` — Welcome Flow L2

**Purpose:** Routes Level 2 subscribers into Welcome Flow variant L2 (DOC 3)

| Property | Value |
|----------|-------|
| **Klaviyo Name** | `Welcome L2 — Avatar Level 2` |
| **Segment ID** | `avatar_level2` |
| **Used By** | Welcome Flow (Flow 01) |
| **Expected Volume** | ~20% of total list (LARGEST segment) |

#### Klaviyo Filter Conditions

**Approach A — Tag-Based (Primary, Phase 1):**

```
Condition 1: What someone has or has not done
  Has at least one of the following tags: avatar_level2
  AND
Condition 2: What someone has or has not done
  Does not have at least one of the following tags: welcome_completed
```

**Klaviyo UI configuration:**
```
Segment Definition:
  Tags — contains at least one of: avatar_level2
    AND
  Tags — does not contain: welcome_completed
```

**Approach B — Property-Based (Fallback):**

```
Condition 1: About someone
  avatar_level equals: level2
  AND
Condition 2: What someone has or has not done
  Does not have at least one of the following tags: welcome_completed
```

#### Tags Applied By This Segment

| Tag | When Applied | Method |
|-----|:-----------:|:------:|
| `avatar_level2` | Pop-up Button 2 click — "Sensory issues, tried many methods" | Klaviyo form action |
| `avatar_level2` | Click-based migration anchor in GF mail | UTM click tracking |
| `avatar_level2` | PP-Level Detection mail Button 2 | UTM click tracking |

#### Profile Properties Set

| Property | Value | When |
|----------|:-----:|:----:|
| `avatar_level` | `level2` | On tag assignment |
| `signup_source` | `popup` / `checkout` / `referral` | On signup |

#### Exit Conditions

Same as L1 (Section 2.1).

---

### 2.3 Segment: `avatar_level3` — Welcome Flow L3

**Purpose:** Routes Level 3 subscribers into Welcome Flow variant L3 (DOC 4) — dignity-first content

| Property | Value |
|----------|-------|
| **Klaviyo Name** | `Welcome L3 — Avatar Level 3` |
| **Segment ID** | `avatar_level3` |
| **Used By** | Welcome Flow (Flow 01) |
| **Expected Volume** | ~12.5% of total list |

#### Klaviyo Filter Conditions

**Approach A — Tag-Based (Primary, Phase 1):**

```
Condition 1: What someone has or has not done
  Has at least one of the following tags: avatar_level3
  AND
Condition 2: What someone has or has not done
  Does not have at least one of the following tags: welcome_completed
```

**Klaviyo UI configuration:**
```
Segment Definition:
  Tags — contains at least one of: avatar_level3
    AND
  Tags — does not contain: welcome_completed
```

**Approach B — Property-Based (Fallback):**

```
Condition 1: About someone
  avatar_level equals: level3
  AND
Condition 2: What someone has or has not done
  Does not have at least one of the following tags: welcome_completed
```

#### Tags Applied By This Segment

| Tag | When Applied | Method |
|-----|:-----------:|:------:|
| `avatar_level3` | Pop-up Button 3 click — "Non-verbal or high support needs" | Klaviyo form action |
| `avatar_level3` | Click-based migration anchor in GF mail | UTM click tracking |
| `avatar_level3` | PP-Level Detection mail Button 3 | UTM click tracking |

#### Profile Properties Set

| Property | Value | When |
|----------|:-----:|:----:|
| `avatar_level` | `level3` | On tag assignment |
| `signup_source` | `popup` / `checkout` / `referral` | On signup |

#### Exit Conditions

Same as L1 (Section 2.1).

---

### 2.4 Segment: `avatar_general` — Welcome Flow GF (Cross-Level)

**Purpose:** Routes General Fallback subscribers into Welcome Flow variant GF (DOC 5)

| Property | Value |
|----------|-------|
| **Klaviyo Name** | `Welcome GF — General Fallback` |
| **Segment ID** | `avatar_general` |
| **Used By** | Welcome Flow (Flow 01), PP-Level Detection (Flow 09) |
| **Expected Volume** | ~50% of total list |

#### Klaviyo Filter Conditions

**Approach A — Tag-Based (Primary, Phase 1):**

```
Condition 1: What someone has or has not done
  Has at least one of the following tags: avatar_general
  AND
Condition 2: What someone has or has not done
  Does not have at least one of the following tags: welcome_completed
```

**Klaviyo UI configuration:**
```
Segment Definition:
  Tags — contains at least one of: avatar_general
    AND
  Tags — does not contain: welcome_completed
```

**Approach B — Property-Based (Fallback):**

```
Condition 1: About someone
  avatar_level equals: general
  AND
Condition 2: What someone has or has not done
  Does not have at least one of the following tags: welcome_completed
```

#### Tags Applied By This Segment

| Tag | When Applied | Method |
|-----|:-----------:|:------:|
| `avatar_general` | Pop-up Button 4 click — "Still figuring out what's going on" | Klaviyo form action |
| `avatar_general` | No pop-up selection (Sub-Group E, checkbox entry) | Default assignment |
| (stays) | PP-Level Detection Button 4 | No change — stays GF |

#### Profile Properties Set

| Property | Value | When |
|----------|:-----:|:----:|
| `avatar_level` | `general` | On tag assignment or default |
| `signup_source` | `popup` / `checkout` / `referral` / `other` | On signup |

#### Exit Conditions

| Condition | Exit To |
|-----------|:-------:|
| `welcome_completed` tag applied | Removes from segment → PP-Education Day 0-21 |
| `welcome_completed_no_purchase` | FAQ/Objection Library (Flow 24) |
| Made a purchase during Welcome | Welcome exits → PP-Day 0-21 → PP-Level Detection at Day 14 |
| Unsubscribed | Klaviyo suppression |

---

### 2.5 Segment Definition Summary Table

| Segment | Tag Condition | welcome_completed Check | Purpose |
|---------|:------------:|:----------------------:|:-------:|
| `avatar_level1` | tag contains `avatar_level1` | != true | Welcome Flow L1 |
| `avatar_level2` | tag contains `avatar_level2` | != true | Welcome Flow L2 |
| `avatar_level3` | tag contains `avatar_level3` | != true | Welcome Flow L3 |
| `avatar_general` | tag contains `avatar_general` | != true | Welcome Flow GF |

**Important:** The `welcome_completed != true` filter prevents re-entry into Welcome Flow for subscribers who have already completed it. This tag is applied by the Welcome Flow itself on completion.

---

## 3. Level Detection & Migration Segments

### 3.1 Segment: `popup_quiz_completed`

**Purpose:** Tracks which subscribers have completed the pop-up self-selection quiz (regardless of which level they chose)

| Property | Value |
|----------|-------|
| **Klaviyo Name** | `Pop-up Quiz Completed` |
| **Segment ID** | `popup_quiz_completed` |
| **Used By** | Analytics, migration tracking, frequency capping |
| **Expected Volume** | ~50% of total list (all pop-up completers) |

#### Klaviyo Filter Conditions

**Single condition:**

```
Condition 1: What someone has or has not done
  Has at least one of the following tags: popup_quiz_completed
```

**Klaviyo UI configuration:**
```
Segment Definition:
  Tags — contains at least one of: popup_quiz_completed
```

#### When Applied

| Trigger | Method |
|---------|:------:|
| Immediately after pop-up form submit (regardless of which button) | Klaviyo form action — apply tag |
| Independent of which `avatar_levelX` tag is also applied | Runs in parallel with level tag |

#### Purpose & Usage

1. **Analytics:** Track pop-up completion rate = `popup_quiz_completed` count / total form views
2. **Frequency control:** Segment visitors who have ALREADY completed the quiz to suppress re-showing the pop-up (combined with cookie-based 7-day frequency cap)
3. **Migration tracking:** Cross-reference with level-specific tags to measure click-based migration
4. **Re-targeting:** Subscribers who completed quiz but never purchased can receive targeted content about their chosen level

#### Profile Properties Set

| Property | Value | When |
|----------|:-----:|:----:|
| (none additional) | — | Tag only; `popup_quiz_completed` alone carries no profile property change |

---

### 3.2 Segment: `level_detected`

**Purpose:** Identifies subscribers whose avatar level has been determined through ANY mechanism — pop-up, click-based migration, PP-Level Detection mail, or purchase inference.

| Property | Value |
|----------|-------|
| **Klaviyo Name** | `Level Detected` |
| **Segment ID** | `level_detected` |
| **Used By** | Flow routing gates, analytics, segment health monitoring |
| **Expected Volume** | 50-65% of total list (after migration) |

#### Klaviyo Filter Conditions

**Approach A — Tag-Based:**

```
Condition 1: About someone
  avatar_level exists
  AND
Condition 2: About someone
  avatar_level is not empty
```

**Klaviyo UI configuration:**
```
Segment Definition:
  About someone — avatar_level — is known
```

**Approach B — Property-Based (Alternative):**

```
Condition 1: What someone has or has not done
  Has at least one of the following tags: avatar_level1 OR avatar_level2 OR avatar_level3 OR avatar_level_general
```

**Klaviyo API representation (property-based):**
```json
{
  "data": {
    "type": "segment",
    "attributes": {
      "name": "Level Detected",
      "definition": {
        "conditions": [
          {
            "type": "profile-property",
            "property": "avatar_level",
            "method": "is-known"
          }
        ]
      }
    }
  }
}
```

#### When This Condition Is Met

| Method | Trigger | avatar_level Value |
|--------|---------|:------------------:|
| Pop-up self-selection | Form submit + button click | `level1` / `level2` / `level3` / `general` |
| Click-based migration anchor | UTM tracked link in GF mail | `level1` / `level2` / `level3` |
| PP-Level Detection mail (Day 14) | Button click in detection email | `level1` / `level2` / `level3` / `general` |
| Purchase inference (>70% confidence) | Algorithmic tag assignment (Phase 2+) | `level1` / `level2` / `level3` |

#### Profile Properties Set

| Property | Value | When |
|----------|:-----:|:----:|
| `avatar_level` | `level1` / `level2` / `level3` / `general` | At detection time |
| `detection_source` | `popup` / `click_migration` / `pp_level_detection` / `purchase_inference` | At detection time |
| `detection_date` | ISO date string | At detection time |

#### Usage

1. **Segment health:** Compare `level_detected` count vs total list size to measure segmentation coverage
2. **GF subset:** `level_detected` where `avatar_level = general` identifies GF subscribers who DID complete the pop-up (vs those who never did — Sub-Group E)
3. **Flow gate:** Post-purchase flows that require level awareness check this segment before routing to level-specific content

---

### 3.3 Segment: Unknown Level (Inverse of level_detected)

**Purpose:** Identifies subscribers who have NEVER had a level assigned — the inverse of `level_detected`.

**Klaviyo Filter Conditions:**
```
Condition 1: About someone
  avatar_level is empty OR does not exist
```

**Klaviyo UI configuration:**
```
Segment Definition:
  About someone — avatar_level — is unknown
```

**Routing Behavior:**
All subscribers without `avatar_level` are treated as General Fallback (equivalent to `avatar_general`). All flows use cross-level (DOC 5) content. Purchase triggers PP-Level Detection at Day 14.

**Note:** This inverse segment is a system monitoring segment, not a flow-triggering segment. The 4 level-based segments (Sections 2.1-2.4) handle the actual routing. If a subscriber has no `avatar_level` and no tag, they fall through to the default routing (Section 8).

---

## 4. Klaviyo Filter Syntax Reference

### 4.1 Tag-Based Conditions

Klaviyo segments use two tag conditions:

| Condition Type | Syntax | Description |
|---------------|--------|-------------|
| **Has tag** | `Has at least one of the following tags: avatar_level1` | Profile must have this tag |
| **Does not have tag** | `Does not have at least one of the following tags: welcome_completed` | Profile must NOT have this tag |

**Multiple values in one condition (OR within condition):** Klaviyo allows specifying multiple tags in a single "Has at least one of" condition — the profile needs ANY of the listed tags.

**Multiple conditions (AND between conditions):** Each condition block is an AND gate. All conditions must be met.

### 4.2 Property-Based Conditions

| Condition Type | Syntax | Description |
|---------------|--------|-------------|
| **Property equals** | `avatar_level equals level1` | Exact string match |
| **Property is known** | `avatar_level is known` | Property exists and is not empty |
| **Property is unknown** | `avatar_level is unknown` | Property does not exist or is empty |

### 4.3 Klaviyo Segment Definition Structure

```json
{
  "definition": {
    "conditions": [
      {
        "type": "tag",
        "method": "contains-all",
        "value": ["avatar_level1"]
      },
      {
        "type": "tag",
        "method": "does-not-contain",
        "value": ["welcome_completed"]
      }
    ]
  }
}
```

| Field | Values | Description |
|-------|--------|-------------|
| `type` | `tag`, `profile-property`, `metric`, `list-membership` | Condition type |
| `method` | `contains-all`, `does-not-contain`, `equals`, `is-known`, `is-unknown`, `greater-than`, `less-than`, `at-least-one-event` | Comparison operator |
| `value` | String, array of strings, number | Comparison value |
| `property` | Property name (for type=profile-property) | Which property to check |

### 4.4 Important Klaviyo Filtering Behavior

1. **Tag conditions are case-sensitive:** `avatar_level1` not `Avatar_Level1` or `avatar_level_1`
2. **Segment membership updates in near-real-time:** When a tag is applied/removed, segment membership updates within seconds
3. **OR vs AND:** Multiple values in one condition = OR. Multiple condition blocks = AND
4. **Inverse segments:** Klaviyo's "is unknown" condition is the inverse of "is known" on the same property
5. **Tag-based vs property-based:** Both approaches produce identical routing results. Tag-based is preferred for Phase 1 because Klaviyo forms apply tags natively. Property-based is a cross-reference check.

---

## 5. Tag-Based vs Property-Based Approach

### 5.1 Tag-Based (Phase 1 — Primary)

**Why tag-based for Phase 1:**
- Klaviyo forms natively apply tags on submit — no custom code needed
- UTM click tracking can apply tags natively
- Simpler to set up and debug in Klaviyo UI
- Easier to audit: tags are visible on profile directly
- Aligns with existing segmentation strategy tag taxonomy (§7.1)

**Implementation steps:**
1. Create the 4 avatar level tags in Klaviyo: `avatar_level1`, `avatar_level2`, `avatar_level3`, `avatar_general`
2. Create behavioral tags: `welcome_completed`, `welcome_completed_no_purchase`, `post_purchase_active`, `at_risk_no_open`, `inactive_60_days`, `inactive_120_days`
3. Create purchase tags: `buyer_1pair`, `buyer_3plus3`, `buyer_5plus5`, `repeat_buyer`, `vip_buyer`
4. Create detection tags: `popup_quiz_completed`
5. Configure pop-up form to apply the corresponding tag on each button click
6. Configure Welcome Flow entry segments using tag conditions (Section 2)
7. Configure UTM click tracking for migration anchors to apply level tags

### 5.2 Property-Based (Phase 2 — Cross-Reference)

**Why property-based as secondary:**
- More structured data — properties support type checking (string, boolean, integer)
- Better for analytics and reporting (can query by property value)
- Enables multi-value conditions (e.g., `avatar_level IN (level1, level2)`)
- Required for RFM and behavioral scoring in Phase 2+

**Implementation steps:**
1. Create custom profile property `avatar_level` (string type)
2. Set value via Klaviyo form or API trigger on tag assignment
3. Create `signup_source` property (string: `popup` / `checkout` / `referral` / `other`)
4. Create `welcome_flow_completed` property (boolean: true/false)

### 5.3 Tag-Property Synchronization

To maintain consistency between tags and properties:

| Event | Tag Applied | Property Set |
|-------|:-----------:|:------------:|
| Pop-up Button 1 | `avatar_level1` | `avatar_level` = `level1` |
| Pop-up Button 2 | `avatar_level2` | `avatar_level` = `level2` |
| Pop-up Button 3 | `avatar_level3` | `avatar_level` = `level3` |
| Pop-up Button 4 | `avatar_general` | `avatar_level` = `general` |
| Click migration L1 | `avatar_level1` | `avatar_level` = `level1` |
| Click migration L2 | `avatar_level2` | `avatar_level` = `level2` |
| Click migration L3 | `avatar_level3` | `avatar_level` = `level3` |
| PP-Level Detection | Corresponding tag | Corresponding value |
| Welcome completed | `welcome_completed` | `welcome_flow_completed` = `true` |
| Welcome completed (no purchase) | `welcome_completed_no_purchase` | (same as above + no purchase flag) |

**Synchronization method:** Use Klaviyo API triggers or flow-based profile property updates to set both the tag and the property on the same event. A single form submit or UTM click should result in both the tag and property being set atomically.

### 5.4 Which to Use for Which Purpose

| Purpose | Primary | Secondary |
|---------|:------:|:---------:|
| Welcome Flow entry | Tag-based (Phase 1) | Property-based (Phase 2 cross-ref) |
| PP-Level Detection routing | Tag-based | Property-based |
| Analytics & reporting | Property-based | Tag-based |
| Segment migration tracking | Both | — |
| Engagement tracking | Tag-based | — |
| Purchase segmentation | Tag-based | — |
| RFM scoring (Phase 2+) | — | Property-based |

---

## 6. Welcome Flow Routing Conditions

### 6.1 Flow Entry Triggers

| Variant | Entry Segment | Trigger Event | Timing |
|---------|:------------:|:-------------:|:------:|
| Welcome L1 | `avatar_level1` (tag `avatar_level1`, no `welcome_completed`) | Form submit with `avatar_level1` tag | Immediate |
| Welcome L2 | `avatar_level2` (tag `avatar_level2`, no `welcome_completed`) | Form submit with `avatar_level2` tag | Immediate |
| Welcome L3 | `avatar_level3` (tag `avatar_level3`, no `welcome_completed`) | Form submit with `avatar_level3` tag | Immediate |
| Welcome GF | `avatar_general` (tag `avatar_general`, no `welcome_completed`) | Form submit with `avatar_general` tag | Immediate |

All triggered by Klaviyo form submit event. The Welcome Flow is the only level-specific flow in Phase 1 (Demands §31 Rule 4).

### 6.2 Flow Exit / Completion

| Event | Action |
|-------|:------:|
| All 8 emails sent | Apply `welcome_completed` tag |
| No purchase during Welcome | Apply `welcome_completed_no_purchase` tag → Route to FAQ/Objection Library (Flow 24) |
| Purchase during Welcome | Exit Welcome → Route to PP-Day 0-21 (cross-level) → PP-Level Detection at Day 14 |

### 6.3 Welcome Flow Cadence (from Demands §6)

| Mail | Timing | Segment Condition |
|------|:------:|:----------------:|
| E1 | Day 0 | Segment membership at flow entry |
| E2 | Day 1 | Not exited (no purchase yet) |
| E3 | Day 3 | Not exited |
| E4 | Day 7 | Not exited |
| E5 | Day 14 | Not exited + NOT in PP-Level Detection (suppression Rule 2) |
| E6 | Day 16 | Not exited |
| E7 | Day 18 | Not exited |
| E8 | Day 21 | Not exited |

**Suppression Note:** PP-Level Detection takes priority over all other Day 14 mails (Suppression Rule 2). If a GF subscriber also reaches Welcome E5 on Day 14, PP-Level Detection fires instead. Welcome E5 is skipped or delayed for that subscriber.

### 6.4 Post-Welcome Routing Decision Tree

```
WELCOME FLOW COMPLETED
    │
    ├─ Purchase made? ──Yes──> PP-Day 0-21 (cross-level, DOC 5)
    │                             │
    │                             └─ Day 14: PP-Level Detection (if GF)
    │                             └─ Day 22+: PP-Extended Education (level-specific if known)
    │
    └─ No purchase ──> Apply welcome_completed_no_purchase tag
                        └─> Route to FAQ/Objection Library (Flow 24)
                        └─> 60 days no purchase → Winback Path B (Flow 22)
```

---

## 7. Level Detection Popup Integration

### 7.1 Pop-Up Self-Selection (Primary Detection)

The pop-up is the PRIMARY level detection mechanism. Configuring it creates the 4 level-based segments.

**Trigger:** 8-15 seconds after arrival OR exit-intent
**Display:** 1-step pop-up with email + 1 question + first name
**Frequency:** Max 1x per 7 days per visitor (cookie-based)
**Implementation:** Klaviyo Forms (or external tool: Privy, Justuno)

#### Step 1 — Self-Selection Content

**Headline:** "Get 10% off + a potty training plan built for kids like yours."
**Subheadline:** "What describes your child best?"
**Email Field:** [enter your email] — required
**First Name Field:** [enter your first name] — required
**CTA Button:** [Get My 10% Code]

#### The 4 Buttons → Tags → Segments

| Button Label | Tag Applied | Segment Entered | Profile Property |
|-------------|:-----------:|:---------------:|:----------------:|
| "Talks about potty but won't actually do it" | `avatar_level1` | avatar_level1 | avatar_level = level1 |
| "Sensory issues, tried many methods" | `avatar_level2` | avatar_level2 | avatar_level = level2 |
| "Non-verbal or high support needs" | `avatar_level3` | avatar_level3 | avatar_level = level3 |
| "Still figuring out what's going on" | `avatar_general` | avatar_general | avatar_level = general |

#### Step 2 — Offer Delivery (Immediately After Submit)

**Headline:** "Your code is ready."
**Code Display:** WELCOME10
**Note:** "Auto-applies at checkout. Valid 7 days."
**CTA Button:** [Shop Now]
**Close Option:** "or keep browsing"

**Critical:** Code is displayed DIRECTLY in the pop-up, not sent via email. Customer can buy immediately without checking inbox.

#### Klaviyo Form Integration Checklist

- [ ] Pop-up form created in Klaviyo (or external tool connected via Klaviyo API)
- [ ] Email + tag written to Klaviyo profile on submit
- [ ] Tag triggers corresponding Welcome Flow variant
- [ ] First name collected for personalization
- [ ] `signup_source` custom property set to `"popup"`
- [ ] `popup_quiz_completed` tag applied alongside level tag
- [ ] GDP/UK: GDPR-compliant consent checkbox included for UK/EU visitors

### 7.2 Click-Based Detection (Secondary — Migration Anchors)

Embed 4 migration anchors in every GF mail with UTM tracking. Each anchor applies the corresponding level tag when clicked:

| Anchor | Link Text | Tag Applied | Segment Entered |
|--------|-----------|:-----------:|:---------------:|
| L1 | "If you have a verbal child under 5 who 'almost trained' multiple times, here's Sarah's story →" | `avatar_level1` | avatar_level1 |
| L2 | "If your kid has sensory issues around the bathroom and you've worked with a BCBA, here's Lisa's path →" | `avatar_level2` | avatar_level2 |
| L3 | "If your child is 7+ and non-verbal, here's Maria's journey →" | `avatar_level3` | avatar_level3 |
| Stay GF | "If you're not sure yet — here's the general framework →" | (no change) | (stays in avatar_general) |

**Expected migration:** 15-25% of GF subscribers via click-based detection.

**Implementation:** Each link has a unique UTM campaign parameter (`utm_campaign=level_migration_l1`, etc.) that triggers a Klaviyo tag assignment via tracked link click.

### 7.3 PP-Level Detection (Day 14 — Post-Purchase)

For GF subscribers who purchase during Welcome Flow:

| Element | Detail |
|---------|--------|
| **Trigger** | Order Placed + Day 14 + No level tag (avatar_general or unknown) |
| **Segment targeted** | Subscribers in `avatar_general` who have made a purchase |
| **Subject** | "Quick question about your kid" |
| **Expected performance** | 65-75% open rate, 35-50% click rate, 40-50% migration |

**4 buttons → tags (re-uses the same tag system):**

| Button | Tag Applied | Segment Entered |
|--------|:-----------:|:---------------:|
| "Verbal, 'almost trained' but inconsistent" | `avatar_level1` | avatar_level1 |
| "Sensory issues, tried many methods" | `avatar_level2` | avatar_level2 |
| "Non-verbal or high support needs" | `avatar_level3` | avatar_level3 |
| "I'm still figuring it out — keep it general" | (stays avatar_general) | avatar_general |

**Important rule (Demands §15):** PP-Level Detection takes priority over ALL other Day 14 mails. No other Day 14 content should compete. See Suppression Rule 2.

### 7.4 Complete Detection Flow

```
SUBSCRIBER ENTERS
    │
    ├─ POP-UP SELF-SELECTION (primary)
    │     └─ 4 buttons → 4 tags → 4 segments → Welcome Flow
    │
    ├─ CLICK-BASED MIGRATION (ongoing, GF mail)
    │     └─ UTM click → tag applied → segment updated → level-specific flows
    │
    ├─ PP-LEVEL DETECTION (Day 14, post-purchase GF only)
    │     └─ 4 buttons → tag → segment → PP-Extended Education (level-specific)
    │
    └─ PURCHASE INFERENCE (Phase 2+, >70% confidence)
          └─ tag applied → segment updated (probabilistic)
```

### 7.5 Zero-Harm Design

Every path's fallback is "stay GF and continue receiving cross-level content." No subscriber is penalized for not migrating. The GF content is self-contained and conversion-effective even without migration.

---

## 8. Fallback Routing for Unsegmented Subscribers

### 8.1 Who Falls Through

Subscribers who enter the system without any `avatar_level` tag:

| Entry Method | Volume | Reason |
|-------------|:------:|--------|
| Checkout form (purchased without pop-up) | Significant | Captured via Shopify → Klaviyo sync |
| Manual import | Low | List imports from previous platform |
| Referral link without pop-up | Low | Incoming without segmentation context |
| Klaviyo cookie capture (browse/cart) | Low | Tracking-pixel captured without email |
| Pop-up ignored or blocked | Medium | Ad-blockers, pop-up blockers, no-click |

### 8.2 Routing Behavior

| Condition | Action |
|-----------|:------:|
| No `avatar_level` tag AND no `avatar_level` property | Treat as General Fallback (equivalent to `avatar_general`) |
| All pre-purchase flows | Use cross-level (DOC 5) content |
| Purchase event | Trigger PP-Level Detection at Day 14 |
| `signup_source` | Set to appropriate value (`checkout` / `other`) |

### 8.3 Fallback Hierarchy (Priority Order)

```
1. Has pop-up tag              → use that level (most reliable: explicit self-selection)
2. Migrated via click          → use that level (self-selected via story link)
3. Migrated via PP-Level Detection → use that level (explicit re-selection)
4. Inferred >70% confidence    → apply tag (probabilistic, Phase 2+)
5. Otherwise                   → stay GF permanently (cross-level content only)
```

### 8.4 Default Routing Configuration

For any subscriber who does not match one of the 4 level-based segments, Klaviyo flow entry conditions should fall through to cross-level defaults:

**In Welcome Flow:**
- Entry condition: Tag `avatar_general` exists OR no avatar_level tag exists
- Uses: Welcome Flow GF (DOC 5) — cross-level content

**In all other flows:**
- Default to cross-level (DOC 5) content
- No subscriber receives no email — every subscriber has a default path

### 8.5 Segment: Unsegmented (Dashboard Monitoring)

For operational monitoring, create a segment:

```
Segment Definition:
  About someone — avatar_level — is unknown
  AND
  Tags — does not contain: avatar_level1 OR avatar_level2 OR avatar_level3 OR avatar_general
```

This segment monitors the size of the unsegmented population. Target: <5% of total list after Phase 1 launch.

---

## 9. Segment Maintenance & Migration

### 9.1 Segment Health Metrics

Monitor these metrics monthly:

| Metric | Target | Tracking Method |
|--------|:-----:|:---------------:|
| Total subscribers with level assigned | >90% | Compare `level_detected` count vs total list |
| GF share of total | ~50% (declining with migration) | `avatar_general` segment size |
| Unsegmented share | <5% | "Unsegmented" segment (Section 8.5) |
| Level 1 segment share | ~17.5% of total | `avatar_level1` segment size |
| Level 2 segment share | ~20% of total | `avatar_level2` segment size |
| Level 3 segment share | ~12.5% of total | `avatar_level3` segment size |
| Pop-up quiz completion rate | >40% of visitors | `popup_quiz_completed` vs total form views |

### 9.2 Migration Funnel Tracking

| Stage | Metric | Expected |
|:----:|--------|:--------:|
| Pop-up | Completion rate | 40-60% of shown pop-ups |
| Click-based migration | % of GF who click a migration anchor | 15-25% |
| PP-Level Detection (Day 14) | % who re-select a level | 40-50% of purchasers |
| Purchase inference (Phase 2+) | % assigned algorithmically | 10-20% of remaining |
| Permanently GF | % who never migrate | 25-35% of initial GF |

### 9.3 Segment Lifecycle

```
NEW SUBSCRIBER
    │
    ├─ Pop-up completes ──> One of 4 level segments ──> Welcome Flow ──> Post-Welcome routing
    │
    └─ No pop-up ──> Unsegmented (Fallback GF routing) ──> Purchase → PP-Level Detection
                                                           └─> Migration anchor click → level segment
                                                           └─> GF permanently → cross-level forever
```

### 9.4 Migration Priority

| Priority | Migration Path | Segment Impact |
|:--------:|:-------------:|:--------------:|
| 1 (Highest) | GF → Level 2 | Largest segment, highest conversion potential |
| 2 | GF → Level 1 | Pre-K urgency, +100-150% uplift |
| 3 | GF → Level 3 | Dignity-first, longer timeline |

### 9.5 Sub-Group B Special Case (Diagnosis-Rejecters)

| Rule | Description |
|:----:|-------------|
| NEVER push migration | Use ultra-gentle language only |
| NEVER use ASD-specific language | Symptom language only |
| GF-D lever ("Not just for autism") | THE key conversion lever for this sub-group |
| Stay GF permanently | If label rejection persists, no migration attempts |
| `label_sensitive` property | Internal flag (Phase 2) for diagnosis-rejecter routing |

---

## Appendix A: All Tags Referenced in Part 1

| Tag | Category | Applied By |
|-----|:--------:|:----------:|
| `avatar_level1` | Level | Pop-up Button 1, click migration L1, PP-Level Detection Button 1 |
| `avatar_level2` | Level | Pop-up Button 2, click migration L2, PP-Level Detection Button 2 |
| `avatar_level3` | Level | Pop-up Button 3, click migration L3, PP-Level Detection Button 3 |
| `avatar_general` | Level | Pop-up Button 4, default assignment |
| `popup_quiz_completed` | Detection | Pop-up form submit (any button) |
| `welcome_completed` | Behavior | Welcome Flow on completion |
| `welcome_completed_no_purchase` | Behavior | Welcome Flow on completion (no purchase path) |

## Appendix B: All Profile Properties Referenced in Part 1

| Property | Type | Values | Set By |
|----------|:----:|:------:|:------:|
| `avatar_level` | string | `level1` / `level2` / `level3` / `general` | Pop-up, click migration, PP-Level Detection |
| `signup_source` | string | `popup` / `checkout` / `referral` / `other` | Signup method detection |
| `welcome_flow_completed` | boolean | `true` / `false` | Welcome Flow completion |
| `detection_source` | string | `popup` / `click_migration` / `pp_level_detection` / `purchase_inference` | Level detection method |
| `detection_date` | string | ISO date | Level detection timestamp |
| `child_age` | string | free text | Optional, from pop-up |

## Appendix C: Segment Dependency Map (Part 1 Only)

```
POP-UP FORM SUBMIT
    │
    ├─ avatar_level1 tag + avatar_level=level1 ──> Segment: avatar_level1 ──> Welcome L1
    ├─ avatar_level2 tag + avatar_level=level2 ──> Segment: avatar_level2 ──> Welcome L2
    ├─ avatar_level3 tag + avatar_level=level3 ──> Segment: avatar_level3 ──> Welcome L3
    └─ avatar_general tag + avatar_level=general ──> Segment: avatar_general ──> Welcome GF
            │
            └─ (with popup_quiz_completed tag) ──> Segment: popup_quiz_completed

CLICK MIGRATION (UTM tracked)
    ├─ avatar_level1 tag ──> Segment: avatar_level1
    ├─ avatar_level2 tag ──> Segment: avatar_level2
    └─ avatar_level3 tag ──> Segment: avatar_level3

PP-LEVEL DETECTION (Day 14)
    ├─ avatar_level1 tag ──> Segment: avatar_level1
    ├─ avatar_level2 tag ──> Segment: avatar_level2
    ├─ avatar_level3 tag ──> Segment: avatar_level3
    └─ (stays avatar_general) ──> Segment: avatar_general

LEVEL DETECTED (system monitoring)
    ├─ avatar_level exists ──> Segment: level_detected
    └─ avatar_level unknown ──> Segment: Unsegmented (inverse, monitoring only)
```

---

*Part 1 of Segment Configuration complete. Part 2 covers: engagement-based segments (Engaged 90d, At-Risk, Inactive, Sunset), purchase-based segments (buyer_1pair, 3+3, 5+5, repeat_buyer, vip_buyer), value-based segments (VIP, High AOV), and geographic segments.*
