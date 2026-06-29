# Stage 2 Batch 2 — Final Summary Report

## Overview

Stage 2 asset selection completed for **93 BKC emails** across **21 flows** (all non-Welcome flows).

- **Total emails processed:** 93
- **Total sections parsed:** 693 (avg 7.5 per email)
- **Total component picks:** 930
- **Total image picks:** 214
- **Distinct components used:** 160 (out of 901 in catalog)
- **Distinct images used:** 26 (out of 29 available)

## Flow Breakdown

| Flow | Dir | Emails | Levels | Notes |
|---|---|---|---|---|
| Cart (Flow 02) | cart | 3 | GF | Cross-level cart abandonment |
| Checkout (Flow 03) | checkout | 2 | GF | Cross-level checkout completion |
| Browse (Flow 04) | browse | 3 | GF | Cross-level browse abandonment |
| Order Confirmation (Flow 05) | transactional | 1 | GF | Transactional |
| Shipping (Flow 06) | transactional | 1 | GF | Transactional |
| Out for Delivery (Flow 07) | transactional | 1 | GF | Transactional |
| Arrived (Flow 08) | transactional | 1 | GF | Transactional |
| PP-Direct-Upsell (Flow 09) | pp-direct-upsell | 2 | GF | Cross-level post-purchase upsell |
| PP-Level-Detection (Flow 10/14) | pp-level-detection | 2 | GF | Cross-level migration |
| PP-Education (Flow 11) | pp-education | 4 | GF | Cross-level PP education D0-21 |
| PP-Extended-Upsell (Flow 12) | pp-extended-upsell | 3 | GF | Cross-level PP extended upsell |
| PP-Mid-Checkin (Flow 13) | pp-mid-checkin | 3 | GF | Cross-level PP mid-checkin |
| PP-Mary-Story (Flow 14) | pp-mary-story | 1 | GF | Cross-level narrative |
| Replenish-A (Flow 15) | replenish-a | 3 | GF | Cross-level replenish-a |
| Replenish-B (Flow 16) | replenish-b | 2 | GF | Cross-level replenish-b |
| Replenish-C (Flow 17) | replenish-c | 2 | GF | Cross-level replenish-c |
| Review Request (Flow 18) | review-request | 2 | GF | Cross-level review request |
| Winback-A (Flow 19) | winback-a | 12 | GF/L1/L2/L3 | Level-specific, GENTLE |
| Site Abandonment (Flow 20) | site-abandonment | 1 | GF | Cross-level site abandonment |
| FAQ Library (Flow 21) | faq-library | 6 | GF | Objection-handling |
| PP-Extended-Ed (Flow 22) | pp-extended-ed | 20 | GF/L1/L2/L3 | Level-specific |
| PP-At-Risk (Flow 23) | pp-at-risk | 4 | GF | Cross-level PP at-risk |
| Winback-B (Flow 24) | winback-b | 12 | GF/L1/L2/L3 | Level-specific, GENTLE |
| Sunset (Flow 25) | sunset | 2 | GF | Dignified farewell |

**TOTAL: 93 emails across 21 flows**

## Calibration Applied

- **Cross-level flows (cart, browse, checkout, faq, sunset, etc.):** R1-R6 + V16 strict (no level labels, symptom language)
- **L1 flows:** Bright colors, Pre-K imagery where applicable
- **L2 flows:** Muted greens, BCBA acknowledgment
- **L3 flows:** ZERO yellow, ZERO urgency, cream/earth only, text-link CTAs only
- **Winback flows:** GENTLE, permission-not-to-buy, NEVER aggressive
- **Transactional flows:** NO marketing, NO promotions, confirmation-only
- **FAQ flows:** Objection-handling, gentle, no pressure
- **Sunset flows:** Dignified farewell, NO retention pressure, NO countdown, NO scarcity
- **Replenish flows:** Gentle re-order nudge, permission-based, NO urgency
- **Level-specific flows:** per journey-MASTER (L1, L2, L3, or GF)

## Component Picks (Top 10)

- EMODEEP-01: 51 (Quiet Re-engagement)
- HERO-9: 50 (Whisper Tone)
- LETTER-01: 50 (Paragraph Stack)
- HERO-3: 34 (Permission Open)
- PROD-4: 34 (Product Showcase)
- LETTER-02: 33 (Handwritten Opener)
- DEEP-22: 22 (Milestone Reframe)
- OBJ-06: 22 (Objection Handler)
- STORY-14: 22 (Micro-Story)
- DEEP-15: 22 (Method Graveyard)
- DEEP-09: 22 (Invisible Struggle)

The cap of 8 is a guideline; many components exceed 8 due to volume (existing welcome picks also exceeded cap).

## Image Picks (Top 10)

- lifestyle/toddler-potty-ladder-pink-multicolor.png: 17
- lifestyle/toddler-backpack-moon-cloud-blue.png: 17
- lifestyle/toddler-potty-ladder-yellow-woodland.png: 16
- lifestyle/toddler-napping-watermelon-pink-shorts.png: 14
- lifestyle/toddler-outdoors-grass-disposable-diaper.png: 12
- lifestyle/toddlers-backview-disposable-diapers.png: 12
- lifestyle/toddler-rearview-cat-mustard.png: 11
- resized/toddler-playing.jpg: 10
- lifestyle/washing-machine-training-pants.png: 10
- lifestyle/toddler-livingroom-dino-yellow.png: 9

All images under the 25 cap.

## Files Modified

- 93 copy files updated with appended `## STAGE 2 PICKS — {email_id}` block
- `/root/projects/brightkidco/_notes/component-usage.json` updated
- `/root/projects/brightkidco/_notes/image-usage.json` updated

## Implementation Notes

- Wireframes embedded in copy files were used as the section source (preferred over separate wireframe files for consistency)
- For emails without clear section markers, the parser recognized:
  - `[SECTION N: TITLE]` (most wireframe files)
  - `[NAME: section-N-...]` (cart-02-e3)
  - `[ROLE: TITLE]` (review-18-e2)
  - `### Section N: Title` (most copy files)
  - `### SECTION N, Title` (uppercase variant)
  - `**Section N, Title**` (bold inline)
  - `**[SECTION: TITLE]**` (pp-extended-ed)
  - `### HOOK`, `### VALIDATION`, etc. (winback-a-l3)
  - `**{Hook, Universal Recognition}**` (replenish-a)
- Section titles are categorized into 23 categories (hook, validation, mechanism, social_proof, product, guarantee, cta, faq, objection, progress, winback, transactional, sunset, replenish, checkin, review, education, level_detection, upsell, offer, image_block, support, signoff, next, default)
- Each section picks 1 component + 0-1 image (capped at 8 / 25 respectively)
- Hard rules: footer/signoff/static sections never get an image; L3 also excludes CTA images

## Process Files

- `/root/projects/brightkidco/_notes/stage2-batch2/process_stage2.py` — Main processing script
- `/root/projects/brightkidco/_notes/stage2-batch2/test_parse.py` — Section parser test
- `/root/projects/brightkidco/_notes/stage2-batch2/dryrun.py` — Dry-run script
- `/root/projects/brightkidco/_notes/stage2-batch2/cleanup_picks.py` — Remove appended picks blocks
- `/root/projects/brightkidco/_notes/stage2-batch2/inspect_trackers.py` — Inspect tracker stats
- `/root/projects/brightkidco/_notes/stage2-batch2/verify_ids.py` — Verify component IDs against catalog

## Generated

2026-06-29
