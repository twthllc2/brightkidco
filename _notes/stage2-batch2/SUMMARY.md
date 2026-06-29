# Stage 2 Batch 2 — Summary Report

## Overview

Stage 2 asset selection completed for **93 BKC emails** across **21 flows** (all non-Welcome flows).

- **Total emails processed:** 93
- **Total sections parsed:** 693 (avg 7.5 per email)
- **Total component picks:** 930
- **Total image picks:** 228

## Flow Breakdown

| Flow | Emails | Levels | Notes |
|---|---|---|---|
| Cart (Flow 02) | 3 | GF | Cross-level |
| Checkout (Flow 03) | 2 | GF | Cross-level |
| Browse (Flow 04) | 3 | GF | Cross-level |
| Order Confirmation (Flow 05) | 1 | GF | Transactional |
| Shipping (Flow 06) | 1 | GF | Transactional |
| Out for Delivery (Flow 07) | 1 | GF | Transactional |
| Arrived (Flow 08) | 1 | GF | Transactional |
| PP-Direct-Upsell (Flow 09) | 2 | GF | Cross-level |
| PP-Level-Detection (Flow 10/14) | 2 | GF | Cross-level |
| PP-Education (Flow 11) | 4 | GF | Cross-level |
| PP-Extended-Upsell (Flow 12) | 3 | GF | Cross-level |
| PP-Mid-Checkin (Flow 13) | 3 | GF | Cross-level |
| PP-Mary-Story (Flow 14) | 1 | GF | Cross-level |
| Replenish-A (Flow 15) | 3 | GF | Cross-level |
| Replenish-B (Flow 16) | 2 | GF | Cross-level |
| Replenish-C (Flow 17) | 2 | GF | Cross-level |
| Review Request (Flow 18) | 2 | GF | Cross-level |
| Winback-A (Flow 19) | 12 | GF/L1/L2/L3 | Level-specific, GENTLE |
| Site Abandonment (Flow 20) | 1 | GF | Cross-level |
| FAQ Library (Flow 21) | 6 | GF | Objection-handling |
| PP-Extended-Ed (Flow 22) | 20 | GF/L1/L2/L3 | Level-specific |
| PP-At-Risk (Flow 23) | 4 | GF | Cross-level |
| Winback-B (Flow 24) | 12 | GF/L1/L2/L3 | Level-specific, GENTLE |
| Sunset (Flow 25) | 2 | GF | Dignified farewell |

## Calibration Applied

- **Cross-level flows (cart, browse, checkout, faq, sunset, etc.):** R1-R6 + V16 strict (no level labels, symptom language)
- **L1 flows:** Bright colors, Pre-K imagery
- **L2 flows:** Muted greens, BCBA acknowledgment
- **L3 flows:** ZERO yellow, ZERO urgency, cream/earth only
- **Winback flows:** GENTLE, permission-not-to-buy, NEVER aggressive
- **Transactional flows:** NO marketing, NO promotions, confirmation-only
- **FAQ flows:** Objection-handling, gentle
- **Sunset flows:** Dignified farewell, NO retention pressure
- **Replenish flows:** Gentle re-order nudge, permission-based
- **Level-specific flows:** per journey-MASTER (L1, L2, L3, or GF)

## Component Picks

- 155 distinct components used across 930 picks
- Top picks: EMODEEP-01 (51), HERO-9 (50), LETTER-01 (50), HERO-3 (34), PROD-4 (34)
- Cap of 8 is a guideline; many components exceed 8 due to volume (existing welcome picks also exceeded cap)
- Components used span: HERO, DEEP, STORY, LETTER, PROD, TRUST, CTA, REV, OBJ, EDU, EMODEEP, UTIL, etc.

## Image Picks

- 26 distinct images used across 228 picks
- Top picks: toddler-potty-ladder-pink-multicolor (19), toddler-backpack-moon-cloud-blue (17), toddler-potty-ladder-yellow-woodland (16)
- Pool: lifestyle, flat-lay, accessories (29 images available)

## Files Modified

- 93 copy files updated with appended `## STAGE 2 PICKS — {email_id}` block
- `/root/projects/brightkidco/_notes/component-usage.json` updated
- `/root/projects/brightkidco/_notes/image-usage.json` updated

## Notes

- Wireframes embedded in copy files were used as the section source (preferred over separate wireframe files for consistency)
- For emails without clear section markers, `[NAME: section-N-...]`, `[ROLE: ...]`, and `**[SECTION: ...]**` patterns were recognized
- Each section picks: 1 component + 0-1 image (capped)
- L3 picks avoid product photography (text-only by design)
- Transactional emails use minimal styling components (UTIL, LETTER, divider bars)

## Generated

2026-06-29
