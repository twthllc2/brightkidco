# Phase 0.6: Flow Completeness Scan

> Scanned: xhtml-emails (127 files) + copy (124 files + 0 top-level)

## Coverage Summary

- **Total xhtml-email flows:** 25 (127 emails)
- **Total copy flows:** 22 (124 copy files)
- **Flows in BOTH:** 4
- **Flows only in xhtml (no copy):** 21
- **Flows only in copy (no xhtml):** 18

## Flows in Both (4)

| Flow | XHTML Emails | Copy Files | Match? |
|------|-------------|------------|--------|
| flow-23-sunset | 2 | 2 | ✓ |
| flow-01-welcome/L3 | 32 | 32 | ✓ |
| flow-21-winback-a/L3 | 12 | 12 | ✓ |
| flow-22-winback-b/L3 | 12 | 12 | ✓ |

## Flows Only in XHTML-Emails (21 — no copy files)

| Flow | Emails | Variants |
|------|--------|----------|
| flow-08-arrived | 1 | none |
| flow-16-at-risk | 4 | none |
| flow-04-browse-abandonment | 3 | none |
| flow-02-cart-abandonment | 3 | none |
| flow-03-checkout-abandonment | 2 | none |
| flow-13-extended-edu/L3 | 20 | none |
| flow-14-extended-upsell | 3 | none |
| flow-24-faq-objection | 6 | none |
| flow-12-level-detection | 2 | none |
| flow-10-mary-story | 1 | none |
| flow-15-mid-check-in | 3 | none |
| flow-05-order-confirmation | 1 | none |
| flow-07-out-delivery | 1 | none |
| flow-11-pp-education-d0-21 | 4 | none |
| flow-25-referral | 3 | none |
| flow-17-replenishment-a | 3 | none |
| flow-18-replenishment-b | 2 | none |
| flow-19-replenishment-c | 2 | none |
| flow-20-review | 2 | none |
| flow-06-shipping | 1 | none |
| flow-09-upsell | 2 | none |

## Flows Only in Copy (18 — no xhtml-emails)

| Flow | Copy Files |
|------|------------|
| browse | 3 |
| cart | 3 |
| checkout | 2 |
| faq-library | 6 |
| pp-at-risk | 4 |
| pp-direct-upsell | 2 |
| pp-education | 4 |
| pp-extended-ed | 20 |
| pp-extended-upsell | 3 |
| pp-level-detection | 1 |
| pp-mary-story | 1 |
| pp-mid-checkin | 3 |
| replenish-a | 3 |
| replenish-b | 2 |
| replenish-c | 2 |
| review-request | 2 |
| site-abandonment | 1 |
| transactional | 4 |

## Top-Level Copy Files


## Key Findings

1. **4/43 flows have BOTH xhtml and copy** — 9% alignment
2. **21 flows have xhtml-emails but NO copy** — emails exist without source copy
3. **18 flows have copy but NO xhtml-emails** — copy exists without built emails
4. **0 top-level copy files** — not organized into flow folders
