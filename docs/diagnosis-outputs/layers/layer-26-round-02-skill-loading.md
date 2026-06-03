# Layer 26 Round 02 — Skill Loading: Medicaid Sensitivity & Financial Messaging

## Skills Loaded

### 1. brightkidco-auto-queue
- Automated batch queuing protocol for BrightKidCo diagnosis
- Task body framework: 7 mandatory sections (Goal, Inputs, Context, Mission, Execution Instructions, Output Structure, Success Criteria)
- Wave sequence: 38 layers x 6 rounds = 228 tasks total
- Output path pattern: `/root/projects/brightkidco/outputs/diagnosis/layer-XX-round-0X-XXXXX.md`
- Agent rotation: batches of 15 across ops, ops2-ops15

### 2. copy (TENZA Copy Skill)
- Complete copywriting operating system
- Email copy frameworks: Welcome (7 emails), Cart Abandonment (3), Post-Purchase (6), Re-engagement (3)
- CTA design: action-oriented language, risk reversal, urgency
- Subject line formulas: curiosity, social proof, urgency, personalization, how-to, announcement, question, stat
- Quality gate: no AI-isms, brand voice match, A/B testable subject lines

### 3. marketing-engine
- Full-stack digital marketing reference (39 sub-skills)
- Covers: SEO, CRO, content, ads, email, social, analytics, growth
- Email sub-skills: email-sequence, email-marketing-bible, cold-email, lead-magnets
- CRO sub-skills: page-cro, form-cro, onboarding-cro, popup-cro, paywall-upgrade-cro, signup-flow-cro

## Pricing/Financial Messaging Rules Extracted

### From copy skill
- **Pricing CTA patterns**: "Give $10, get $10" (referral), discount urgency ("Your cart expires"), free shipping offers
- **Risk reversal**: guarantee, free trial — reduces perceived financial risk
- **Value framing**: Before-After-Bridge framework applies to pricing — "You're spending X" → "Imagine Y" → "Here's how"
- **Urgency mechanics**: limited time, limited availability, last chance — drive price-sensitive conversions

### From marketing-engine
- **paywall-upgrade-cro**: Conversion optimization for paid tier upgrades — relevant to Medicaid-to-private-pay transitions
- **revops**: Revenue operations — pricing strategy, LTV optimization
- **churn-prevention**: Retention economics — cost of losing a customer vs. cost of Medicaid rates

## Medicaid-Related Content

### Direct Medicaid references
- **None found** in any loaded skill. No skill contains Medicaid-specific pricing rules, reimbursement rates, or sensitivity guidelines.

### Indirect/Analogous Medicaid frameworks
1. **Price sensitivity in copy skill**: The urgency/discount mechanics map to Medicaid rate negotiations — families on Medicaid are price-sensitive; messaging must emphasize value without stigmatizing coverage type
2. **Segmentation from marketing-engine**: RFM analysis and customer journey planning can segment Medicaid vs. private-pay families — different messaging per segment
3. **Risk reversal (copy skill)**: For Medicaid families, "risk reversal" means removing financial barriers — "No out-of-pocket cost" is the Medicaid equivalent of "money-back guarantee"
4. **Post-purchase flow (copy skill)**: The 6-email post-purchase sequence maps to post-diagnosis follow-up — Medicaid families need reassurance that coverage is handled, private-pay families need payment plan options

## Gaps Identified
- No Medicaid-specific compliance language (CMS guidelines, EPSDT requirements)
- No state-specific Medicaid rate sensitivity rules
- No HIPAA-adjacent messaging guardrails for financial content
- The email-marketing skill was not found as a standalone skill (exists as sub-skills under marketing-engine)

## Recommendations for Layer 26
1. Build a Medicaid messaging sensitivity matrix: what to say vs. what NOT to say per coverage type
2. Create pricing tier messaging templates: Medicaid, sliding-scale, private-pay
3. Add compliance language review step before any financial messaging goes out
4. Use the copy skill's quality gate as a starting point, add Medicaid-specific banned phrases
