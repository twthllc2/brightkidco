# Phase 0.8: Deliverability Scan

> Scanned: 127 HTML files
> Location: /root/projects/email-ops/email-design/xhtml-emails

## Summary

| Metric | Count | Percentage |
|--------|-------|------------|
| Total files scanned | 127 | 100% |
| Has MIME hints | 21 | 16% |
| Has text/plain fallback | 0 | 0% |
| Has unsubscribe | 127 | 100% |
| Has physical address | 33 | 25% |
| Has preheader | 127 | 100% |
| Excessive CAPS | 127 | 100% |
| Has spam trigger words | 127 | 100% |
| Low text ratio (<15%) | 0 | 0% |
| Has sender info | 0 | 0% |
| Has reply-to | 10 | 7% |

## Spam Trigger Word Counts

| Word | Files |
|------|-------|
| subscribe | 127 |
| guarantee | 105 |
| free | 71 |
| discount | 8 |
| satisfaction | 1 |

## Files with Low Text Ratio (0)


## Key Findings

1. **127/127 files (100%) have unsubscribe** — good for CAN-SPAM
2. **33/127 files (25%) have physical address** — 94 missing
3. **127/127 files (100%) have preheader** — inbox preview
4. **0/127 files (0%) have text/plain fallback** — 127 missing
5. **127/127 files (100%) have excessive CAPS** — spam risk
6. **127/127 files (100%) contain spam trigger words**
7. **0/127 files (0%) have low text ratio** — image-heavy emails
