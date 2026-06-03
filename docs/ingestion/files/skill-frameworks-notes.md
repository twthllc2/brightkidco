# Skill Frameworks Notes — BrightKidCo Ingestion

Extracted frameworks, rules, templates, and decision trees from Hermes email marketing skills.

---

## Group 1: Top-Level (6 skills)

---

### 1. email-html-generator

**Core Framework: Template Architecture**

Every email uses a standardized skeleton with these structural layers:
1. DOCTYPE declaration (XHTML 1.0 Transitional)
2. Head with Outlook fix (`<!--[if mso]>` conditional), CSS reset, mobile media queries
3. Preheader text (hidden div with `mso-hide:all`)
4. Outer container table (100% width, background color)
5. Inner content table (600px max, white background, border-radius)
6. Logo header (brand color background)
7. Body content (padded, Arial/Helvetica)
8. CTA button (pill-shaped, brand accent color)
9. Footer (gray background, unsubscribe link, legal text)

**Key Rules:**
- Single column layout only (no multi-column in email)
- Max width: 600px
- Font: Arial/Helvetica (web-safe for all clients)
- Font size: 16px body, 22-24px headlines
- Line height: 1.5-1.6 for readability
- Button min size: 44px height (accessibility)
- Padding: 20-40px on sides
- Mobile breakpoints at 600px: `.mobile-full` (100% width), `.mobile-pad` (20px 16px), `.mobile-center`, `.mobile-hide`

**Templates/Checklists:**

Content Block Macros (placeholders):
- `{{PRIMARY_COLOR}}` — Brand primary hex
- `{{CTA_COLOR}}` — Accent color for buttons
- `{{LOGO_URL}}` — CDN-hosted logo image
- `{{BRAND_NAME}}` — Display name
- `{{HEADLINE}}` / `{{PARAGRAPH}}` — Body content blocks
- `{{CTA_URL}}` / `{{CTA_TEXT}}` — Button destination and label
- `{{PREHEADER_TEXT}}` — Hidden preview text
- `{{UNSUBSCRIBE_URL}}` / `{{ADDRESS_LINE}}` / `{{FOOTER_TEXT}}` — Legal/compliance

CTA Button HTML Template:
```html
<td align="center" style="padding:10px 40px 30px;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="background-color:{{CTA_COLOR}}; border-radius:50px; padding:14px 35px;">
        <a href="{{CTA_URL}}" target="_blank" style="color:#ffffff; font-size:16px; font-weight:bold; font-family:Arial, Helvetica, sans-serif; text-decoration:none; display:inline-block;">
          {{CTA_TEXT}}
        </a>
      </td>
    </tr>
  </table>
</td>
```

**Decision Trees:**

Step-by-Step Build Process:
1. Extract brand colors from client website (primary, secondary/accent, background, text)
2. Build template: start with base → replace PRIMARY_COLOR → replace CTA_COLOR → set LOGO_URL → convert copy to HTML
3. Format content per rules (single column, 600px, font sizes, padding)
4. Test: send via Klaviyo preview → check Gmail/Outlook/Apple Mail → check mobile → click all links → verify unsubscribe

**BrightKidCo Applicability:**
- DIRECTLY applicable. BrightKidCo needs branded email templates for all flows (welcome, abandoned cart, post-purchase, etc.)
- Will need to extract BrightKidCo's brand colors (likely sensory-friendly, calming tones)
- The 600px single-column layout is ideal for product-focused emails
- CTA button template ready for "Shop Now" / "Learn More" actions
- Preheader text critical for open rates in crowded inboxes

---

### 2. brand-voice-definition

**Core Framework: 7-Step Voice Definition Process**

1. **Extract Raw Material** — Gather from website, social media, existing emails, competitor brands
2. **Analyze Voice Dimensions** — Score on 6 axes (1-5 scale):
   - Formal ↔ Casual
   - Serious ↔ Playful
   - Technical ↔ Simple
   - Authoritative ↔ Friendly
   - Salesy ↔ Educational
   - Short ↔ Long-form
3. **Define Voice Pillars** — 3-5 pillars, each with: one-sentence definition, Do example, Don't example
4. **Define Tone Variations** — How voice adapts per channel/touchpoint
5. **Document Keywords & Phrases** — Brand language (use) and avoided language (don't)
6. **Create Reference Emails** — One per flow type (welcome, abandoned cart, post-purchase) as style references
7. **Document in Client Wiki** — Save at `/root/wiki/clients/{client-name}/brand-voice.md`

**Key Rules:**
- Voice pillars MUST have both Do and Don't examples (not just abstract descriptions)
- Tone variations are per-channel, not universal (welcome ≠ abandoned cart ≠ SMS)
- Keywords list includes both brand language AND forbidden terms
- Reference emails serve as style anchors for ops agents writing copy

**Templates/Checklists:**

Voice Dimensions Score Table:
| Dimension | 1 | 2 | 3 | 4 | 5 |
|-----------|---|---|---|---|---|
| Formal ↔ Casual | Formal | — | — | — | Casual |
| Serious ↔ Playful | Serious | — | — | — | Playful |
| Technical ↔ Simple | Technical | — | — | — | Simple |
| Authoritative ↔ Friendly | Authoritative | — | — | — | Friendly |
| Salesy ↔ Educational | Salesy | — | — | — | Educational |
| Short ↔ Long-form | Short | — | — | — | Long-form |

Tone Variation Table:
| Channel | Tone Shift | Example |
|---------|-----------|---------|
| Welcome Email | Warm, generous | "Welcome — here's a gift" |
| Abandoned Cart | Urgent, helpful | "You forgot something important" |
| Post-Purchase | Educational, supportive | "Here's how to get the best results" |
| SMS | Short, direct, urgent | "🔥 Last chance: your 30% off expires tonight" |
| Customer Service | Patient, human | "We'll make this right — here's exactly what to do" |

Voice Pillar Template:
```
Pillar N: [Name]
  Definition: [One sentence]
  ✅ DO: "[Example of correct voice]"
  ❌ DON'T: "[Example of wrong voice]"
```

**Decision Trees:**

When to define brand voice:
- New client engagement → after audit, before copywriting
- Client has no brand guide → define from scratch using existing assets
- Auditing existing copy → score against dimensions, identify gaps
- Creating reference for ops agents → must include reference emails

**BrightKidCo Applicability:**
- CRITICAL for BrightKidCo. As a sensory underwear brand, the voice must balance:
  - Empathy for sensory sensitivities (not clinical/dismissive)
  - Practical product focus (comfort, function)
  - Parent/caregiver audience (understanding, not patronizing)
- Voice dimensions likely: Moderate casual (3-4), Playful but informed (3), Simple (4-5), Friendly (4), Educational (4), Medium-form (3)
- Key pillars to define: Sensory Empathy, Practical Comfort, Inclusive Design
- Forbidden language: "cure," "fix," "problem" (stigmatizing), "just get used to it"
- Brand language: "sensory-friendly," "comfort-first," "designed for how you feel"

---

### 3. client-credential-request

**Core Framework: 5-Step Credential Lifecycle**

1. **Request Credentials** — After payment confirmed, send standardized API key request template
2. **Receive and Verify** — Test key immediately via API call; 401 = wrong/expired, 200 = proceed
3. **Store Credentials** — In `/root/wiki/clients/{client-name}/client-info.md` YAML frontmatter
4. **Provision to Ops Agents** — Via environment variable, NOT in task body
5. **Client Offboarding** — Expire keys, remove env vars, flag for rotation

**Key Rules:**
- NEVER put API keys in Kanban task bodies
- NEVER commit credentials to git
- API keys are for Hermes use only, not exposed to agents in task files
- Rotate keys if a client relationship ends
- Test key immediately on receipt (don't assume it works)

**Templates/Checklists:**

Credential Request Template:
```
Hi {CLIENT_NAME},

To start building your email flows, I need access to your Klaviyo account. Here's how to generate the API key:

1. Log into your Klaviyo account at https://www.klaviyo.com
2. Go to Settings → API Keys
3. Click "Create Private API Key"
4. Name it "Tenza Marketing - Flow Builder"
5. Select these permissions:
   - Flows: Read + Write
   - Campaigns: Read + Write
   - Templates: Read + Write
   - Lists: Read + Write
   - Metrics: Read
6. Click Create
7. Copy the full API key and send it to me

Also need:
- Your Klaviyo account ID (from the URL when logged in)
- Your main subscriber list ID

This takes 3 minutes and lets me start building immediately.
```

Credential Storage Format:
```yaml
credentials:
  klaviyo_api_key: "kv_{REST_OF_KEY}"
  klaviyo_account_id: "XXXXXX"
  klaviyo_list_id: "YYYYYY"
  shopify_api_key: "" # if applicable
```

API Verification Command:
```bash
curl -s "https://a.klaviyo.com/api/accounts/" \
  -H "Authorization: Klaviyo-API-Key $KEY" \
  -H "Accept: application/json" \
  -H "revision: 2025-01-15"
```

**Decision Trees:**

Error Recovery:
| Symptom | Cause | Fix |
|---------|-------|-----|
| API returns 401 | Key is invalid or expired | Request new key from client |
| API returns 403 | Key lacks required scopes | Ask client to create key with full permissions |
| API returns 429 | Rate limited | Implement retry with backoff (wait 60s) |
| Client doesn't respond in 24h | Client busy | Escalate to follow up |

**BrightKidCo Applicability:**
- DIRECTLY applicable. BrightKidCo will need Klaviyo API credentials stored securely
- The credential request template can be adapted for BrightKidCo's owner
- Storage path: `/root/wiki/clients/brightkidco/client-info.md`
- Environment variable provisioning ensures ops agents can build flows without seeing raw keys

---

### 4. client-onboarding-structure

**Core Framework: Project Structure + Diagnosis-First Workflow**

Project folder structure:
```
/root/projects/{client-name}/
├── README.md                   # Client info, stakes, timeline
├── dashboard/
│   ├── tracker.md              # Deliverable tracker (⬜ → 🟡 → ✅)
│   └── session-log.md          # Session-by-session progress log
├── strategy/                   # Strategic analysis, audits
├── emails/                     # Email copy, designs, prototypes
├── flows/                      # Flow architecture
├── assets/                     # Brand assets, images
└── docs/                       # Client-provided documents
```

**Key Rules:**

Documentation-As-You-Go:
- Update tracker and session log after EVERY major step
- tracker.md: mark deliverables ⬜ → 🟡 → ✅
- session-log.md: log what was done, key decisions, open questions
- docs-log.md: catalog EVERY client-provided document with status (✅ Ingested / ⏳ Pending)

Honest Read-Status Reporting:
- When asked "have you read all the documents?" — answer honestly
- Break down: fully read, skimmed, not touched
- A partial read with honest status is trusted; a false claim destroys confidence

Diagnosis-First Workflow (CRITICAL):
1. **Ingest** — Pull all files, extract all PDFs, read everything
2. **Diagnose** — Present full landscape layer by layer
3. **Expand** — Go deeper on each layer until user is satisfied
4. **Plan** — Build execution plan based on diagnosed understanding
5. **Build** — Only then start producing deliverables

**WRONG:** Ingest → "Let's start building!" → User: "BUILD WHAT? BULLSHIT?"

Layered Diagnosis Framework:
Each layer gets:
1. What does it say? (facts)
2. Why does it exist? (problem it solves)
3. How does it connect? (dependencies)
4. What do we need to decide? (choices affecting execution)

Systematic Ingestion (20+ documents):
- Phase 1: Pull & Inventory (Tailscale SSH, count files, create tracker)
- Phase 2: Tiered Extraction (Tier 1: Strategy/voice → Tier 7: Visual assets)
- Phase 3: Duplicate Detection (never assume — verify with `cmp`)
- Phase 4: Verification (every source file has extraction, zero gaps)
- Phase 5: Read & Distill (large files in 500-line chunks, build brand-brief.md)

**Templates/Checklists:**

Email Prototype Output Format:
```
**Mail: [Flow Name] – [Mail Position]**
**Avatar: [Level/Cross-Level]**
**Send Timing: [Day X / Hour Y after Trigger]**

**Subject Lines (A/B test ready):**
1. [Option 1]
2. [Option 2]
3. [Option 3]

**Preheaders:**
1. [Option 1]
2. [Option 2]
3. [Option 3]

**Mail Body:**
[Structured by sections, mobile-first, brand voice]

**Sign-Off:**
[2-3 sentence persona sign-off]

**Mobile-First Notes:**
[Layout/length considerations]

**Klaviyo Implementation Notes:**
[Trigger setup, exit conditions, segment filters]
```

Brand Brief Sections:
- Brand Identity (name, product, voice persona, sending domain)
- Avatar/Segment definitions with tonality calibration
- Offers (exact writing, pricing, when to push which)
- Brand Constants (guarantee, reviews, shipping, URLs, colors, fonts)
- Voice Rules (NEVER list, ALWAYS list, sign-off format)
- Email Ecosystem Architecture
- Document Map
- Output Format
- Pre-Send Checklist

Docs-Log Pattern:
```markdown
# {client} — Ingested Docs Log

## Strategy Documents
| # | Document | Type | Status | Key Insight |
|---|----------|------|--------|-------------|
| 1 | doc-name.pdf | Strategy | ✅ Ingested | One-line summary |
```

Phased Delivery Timeline (3-day):
| Phase | When | What | Who |
|-------|------|------|-----|
| Night 1 | Overnight | Full diagnosis + email flow prototypes | Agent (autonomous) |
| Day 2 AM | User reviews | Diagnosis review + direction decision | User + Agent |
| Day 2 PM | After approval | Build remaining flows + iterate | User oversees, Agent builds |
| Day 3 | Final day | Review, iterate, polish, deliver | User + Agent |

**Decision Trees:**

System Document Discovery:
- Every serious client has a "system document" defining their entire email ecosystem
- Find it FIRST — usually a usage guide, project instructions, brand book, or email playbook
- Search for: `*guide*`, `*instructions*`, `*playbook*`, `*usage*`, `*ecosystem*`
- Contains: avatar segmentation, flow architecture, voice rules, tonality calibration, forbidden phrases, output format

Anti-Fabrication Check:
- NEVER fabricate customer quotes or testimonials
- Allowed: lightly anonymize, combine themes from real quotes, paraphrase for length
- Forbidden: invent quotes, fabricate testimonials, imagine "what a customer might say"

Overnight Autonomous Work:
- SAFE (research + synthesis): avatar synthesis, competitor teardown, science library, customer language bank, offer research, traffic landscape, deliverability planning, sequence framework
- NEEDS USER (direction decisions): offer architecture, copy direction, design choices, execution priorities
- Rule: Produce FACTS, ANALYSIS, FRAMEWORKS overnight. No creative decisions, no commitments.

**BrightKidCo Applicability:**
- DIRECTLY applicable. BrightKidCo project should live at `/root/projects/brightkidco/`
- Folder structure ready to create: README.md, dashboard/, strategy/, emails/, flows/, assets/, docs/
- Diagnosis-first workflow critical — BrightKidCo has specific sensory/comfort positioning that must be understood before building
- Email prototype format ready for all flow types
- Brand brief will consolidate all BrightKidCo knowledge into one working document
- Anti-fabrication rule important for any testimonials about sensory comfort

---

### 5. cold-email-infrastructure

**Core Framework: 7-Phase Cold Email Infrastructure Deployment**

1. **Phase 1: Mailserver Deployment** — docker-mailserver via docker-compose
2. **Phase 2: Bulk Inbox Creation** — `setup email add` inside container, 3 users per domain
3. **Phase 3: DKIM for All Domains** — Generate per domain, rebuild KeyTable + SigningTable
4. **Phase 4: DNS Records** — Cloudflare API (preferred) or Namecheap API
5. **Phase 5: Manyreach API Integration** — Bulk sender creation with warmup config
6. **Phase 6: Webmail (Optional)** — SnappyMail via Cloudflare Tunnel
7. **Phase 7: Daily Backup (Optional)** — Full-system backup cron

**Key Rules:**

Infrastructure:
- docker-mailserver requires at least ONE account before Dovecot starts (create within 120 seconds)
- `SSL_TYPE=self-signed` enables IMAPS (port 993); without it, Dovecot ssl=no
- Health check must use CMD-SHELL form (not exec form) for pipes to work
- Each cold email domain needs its own `mail.{domain}` subdomain resolving directly to server IP

DNS:
- Cloudflare API preferred over Namecheap (avoids setHosts wipe pitfall)
- Namecheap `setHosts` REPLACES all existing records — fetch first, append, then set
- DKIM public key must be single continuous line (no line breaks) in DNS TXT record
- Cloudflare proxy (orange cloud) blocks SMTP/IMAP — use DNS-only (grey cloud) for mail subdomains

Manyreach:
- API fields use camelCase (NOT snake_case) — snake_case silently creates无效 fields
- `customSmtpPass` / `customImapPass` (NOT `customSmtpPassword`)
- `dailyLimit` is required on create (default 0 fails)
- IMAP port must be string `"993"`, not integer `993`
- Use per-domain mail subdomain as SMTP/IMAP hostname, NOT main domain's mail subdomain
- Never use a hostname proxied through Cloudflare (ports 587/993 silently dropped)

**Templates/Checklists:**

DNS Records Needed Per Domain:
- MX `@` → `mail.yourdomain.com`
- TXT `@` → `v=spf1 mx ~all`
- TXT `_dmarc` → `v=DMARC1; p=none; rua=mailto:postmaster@domain.com`
- TXT `mail._domainkey` → `v=DKIM1; h=sha256; k=rsa; p=RSA_KEY`

Aggressive Warmup Config (50/day target, ~2 weeks):
```json
{
  "warmup": true,
  "warmupDailyLimit": 10,
  "warmupDailyLimitIncrease": true,
  "warmupDailyLimitIncreaseToMax": 50,
  "warmupDailyLimitIncreasePercent": 20,
  "warmupReplyPercent": 30,
  "warmupSkipWeekends": true
}
```

Verification Checklist:
- [ ] dig +short MX domain.com returns mail server
- [ ] dig +short TXT domain.com returns SPF
- [ ] dig +short TXT mail._domainkey.domain.com returns DKIM
- [ ] docker exec mailserver setup email list shows all accounts
- [ ] Manyreach API GET /senders returns all inboxes with warmup=true
- [ ] Test send from one inbox, check DKIM signature in headers

Agent Dispatch Pattern (Bulk Setup):
1. One agent for inbox creation (15 accounts, ~2 min)
2. One agent for DNS configuration (5 domains, ~10 min)
3. One agent for ManyReach registration (15 senders, ~10 min)
Split by function, NOT by domain — lets you retry only the failed phase.

**Decision Trees:**

17 Documented Pitfalls:
1. Container crash-loop (no accounts) → create within 120s
2. DNS conflict (A record blocks CNAME) → use separate subdomains
3. Namecheap setHosts wipes records → fetch first
4. Manyreach IMAP port type → string not integer
5. SSL_TYPE empty → IMAPS dead, senders disconnect
6. Manyreach 409 conflict → PATCH instead of re-POST
7. Manyreach field names → customSmtpPass not customSmtpPassword
8. Manyreach reconnect after downtime → PATCH to force re-test or delete+recreate
9. Home vs cold email domain → confirm before touching
10. Cloudflare API token vs Global Key → use Global Key for automation
11. Namecheap DNS error 2030288 → domain uses external DNS
12. Don't over-explain DNS → give 2 actionable options
13. Cloudflare proxy blocks SMTP/IMAP → use DNS-only subdomain
14. Health check exec vs shell form → use CMD-SHELL
15. DKIM key line breaks → join into single line
16. Stale DNS cache → query 8.8.8.8 directly
17. Agent timeout on bulk DNS → one domain at a time

**BrightKidCo Applicability:**
- PARTIALLY applicable. BrightKidCo is a product brand, not a cold email operation
- The infrastructure patterns (docker-mailserver, DKIM/SPF/DMARC) are useful if BrightKidCo needs transactional email or dedicated sending infrastructure
- Manyreach integration is NOT relevant (BrightKidCo uses Klaviyo for marketing, not cold outreach)
- DNS automation patterns could be useful for domain management
- The warmup concepts (gradual volume increase) apply to any new sending domain

---

### 6. klaviyo-api-tool

**Core Framework: Programmatic Klaviyo Flow Building**

API Base:
```
Base URL: https://a.klaviyo.com/api/
Headers:
  Authorization: Klaviyo-API-Key {PRIVATE_API_KEY}
  Accept: application/json
  Content-Type: application/json
  revision: 2025-01-15
```

8 Core Operations:
1. Get Account Details — `GET /accounts/`
2. Get All Lists — `GET /lists/`
3. Get All Flows — `GET /flows/`
4. Create Metric-Triggered Flow — `POST /flows/`
5. Create Flow Action (Email) — `POST /flow-actions/`
6. Add Time Delay — `POST /flow-actions/` (action_type: time_delay)
7. Update Flow Status (Draft → Live) — `PATCH /flows/{id}/`
8. Create Template — `POST /templates/`

**Key Rules:**
- API key scopes required: flows:read/write, campaigns:read/write, templates:read/write, lists:read/write, metrics:read
- Always create flows in DRAFT status first, verify, then set LIVE
- Send test email before marking complete
- Never expose API key in task bodies — use environment variables
- Each client has a separate API key — never reuse across clients

**Templates/Checklists:**

Flow Creation Payload:
```json
{
  "data": {
    "type": "flow",
    "attributes": {
      "name": "Welcome Flow - Brand Name",
      "status": "draft",
      "trigger_type": "metric",
      "definition": {
        "trigger": {
          "metric": {"id": "{LIST_SUBSCRIBED_METRIC_ID}"},
          "filter": {
            "operator": "equals",
            "property": "list_id",
            "value": "{LIST_ID}"
          }
        }
      }
    }
  }
}
```

Email Action Payload:
```json
{
  "data": {
    "type": "flow-action",
    "attributes": {
      "action_type": "send_email",
      "name": "Email 1 - Welcome",
      "position": 1,
      "definition": {
        "email": {
          "subject": "{SUBJECT_LINE}",
          "preview_text": "{PREVIEW_TEXT}",
          "from_name": "{FROM_NAME}",
          "from_email": "{FROM_EMAIL}",
          "reply_to_email": "{REPLY_EMAIL}",
          "content": {
            "html": "{HTML_CONTENT}",
            "text": "{PLAIN_TEXT_CONTENT}"
          }
        }
      }
    },
    "relationships": {
      "flow": {"data": {"type": "flow", "id": "{FLOW_ID}"}}
    }
  }
}
```

Time Delay Payload:
```json
{
  "data": {
    "type": "flow-action",
    "attributes": {
      "action_type": "time_delay",
      "name": "Delay 24 hours",
      "position": 2,
      "definition": {
        "delay": {"unit": "hours", "quantity": 24}
      }
    }
  }
}
```

Metric IDs Reference:
| Metric | Description |
|--------|-------------|
| List Subscribed | Person subscribes to a list |
| Added to Cart | Person adds item to cart |
| Started Checkout | Person begins checkout |
| Placed Order | Person completes purchase |
| Ordered Product | Person orders specific product |
| Fulfilled Order | Order is fulfilled |

Verification Checklist:
- [ ] Flow appears in Klaviyo under Flows with "Draft" status
- [ ] Trigger is set to the correct metric
- [ ] All email actions have correct subject lines
- [ ] Time delays match the spec
- [ ] Conditional splits (if any) are configured
- [ ] From name and email are correct
- [ ] Test email sends and renders properly
- [ ] Unsubscribe link is present and working

**Decision Trees:**

Error Handling:
| HTTP Status | Meaning | Fix |
|-------------|---------|-----|
| 400 | Bad Request | Check request body JSON validity |
| 401 | Unauthorized | API key is invalid or expired |
| 403 | Forbidden | API key lacks required scopes |
| 404 | Not Found | Flow/List ID doesn't exist |
| 429 | Rate Limited | Wait and retry with backoff |

Complete Flow Build Script Pattern:
- `create_flow(name, trigger_metric_id, list_id)` → returns flow_id
- `create_email_action(flow_id, subject, preview, from_name, from_email, html_content, position)` → returns action_id
- `add_time_delay(flow_id, hours, position)` → returns action_id
- All use `requests.post()` with proper headers and `raise_for_status()`

**BrightKidCo Applicability:**
- DIRECTLY applicable. This is the core tool for building BrightKidCo's Klaviyo flows
- Will need BrightKidCo's Klaviyo API key, account ID, and list ID
- Metric triggers needed: List Subscribed (welcome), Added to Cart (abandoned cart), Started Checkout (abandoned checkout), Placed Order (post-purchase)
- The Python script pattern can be adapted for bulk flow creation
- Flow status management (draft → live) critical for safe deployment
- Template creation API needed for reusable email designs

---

---

## Group 3: Deliverability and Technical (14 skills)

---

### 1. deliverability-audit-monitoring

## Purpose

Email deliverability is the single highest-leverage lever in email marketing ROI. A 10-percentage-point swing in deliverability on a 100 000-subscriber list produces a difference of €1 500 per campaign — €18 000 annually at one send per month. At 70 % deliverability the same list generates €10 500 per campaign instead of €12 000 at 80 %. This Standard Operating Procedure gives the Email Marketing Team a repeatable, 45-minute audit that catches reputation problems, authentication failures, seed-list placement drift, and list-hygiene decay before they become revenue emergencies.
The audit follows five phases executed in order:
1. **Preliminary Health Check** — Blacklist scan and authentication record review.
2. **Google Postmaster Tools Review** — IP/domain reputation, spam complaints, authentication pass rates, delivery errors.
3. **Klaviyo Health Check** — Campaign performance trends, list health (unengaged segments), deliverability-by-domain visual audit, Klaviyo Deliverability Score.
4. **GlockApps Inbox Placement Test** — Seed-based placement rate and Primary/Promotions breakdown.
5. **Decision & Escalation** — Score-based routing to maintenance, deeper audit, or 6-Week Recovery Protocol.
---

### Key Numbers Summary

- GPT Spam Complaint threshold: **0.03 %**
- Klaviyo ideal Spam Complaint rate: **< 0.01 %**
- Klaviyo core segment Open Rate benchmark: **40 %+**
- Bounce Rate threshold: **< 1 %**
- Klaviyo Deliverability Score: **70+ (Excellent)**, **65–69 (Fair)**, **< 65 (Poor)**
- Inbox Placement Rate benchmark: **90 %+**
- DNS propagation window: **30–60 minutes**
- GPT initial data population: **1–2 days**

## Pre-Flight Checklist

- [ ] Calendar blocked for 45–60 minutes with no interruptions.
- [ ] All four tool accounts accessible and logged in (Klaviyo, Google Postmaster Tools, GlockApps, MXToolbox).
- [ ] DNS zone file or DNS provider admin panel open for sending sub-domain and root domain.
- [ ] List of all active sending sub-domains and dedicated sending IPs (if applicable) ready.
- [ ] Most recent campaign send data (last 30 days of campaigns) available in Klaviyo.
- [ ] "Deliverability Audit & Monitoring — Month YYYY-MM" log document opened for note-taking.
- [ ] 6-Week Recovery Protocol template loaded and ready if score < 65 on Klaviyo Deliverability Score.
---

## Completion Checklist

- [ ] Phase 1 complete: Blacklist check passed (or listing logged and escalated). Authentication records verified and correct.
- [ ] Phase 2 complete: GPT domain verified, IP/domain reputation assessed, spam rate reviewed, authentication pass rate confirmed, delivery errors reviewed.
- [ ] Phase 3 complete: Campaign performance trends reviewed, list health assessed (unengaged segments sized), deliverability-by-domain visual audit completed, Klaviyo Deliverability Score recorded.
- [ ] Phase 4 complete: GlockApps inbox placement test created, campaign sent to seed list, placement report reviewed.
- [ ] Phase 5 complete: Scores consolidated, final status assigned (Pass / Watch / Escalate), audit log document saved.
- [ ] If Escalate: 6-Week Recovery Protocol has been initiated with documented owner and timeline.
- [ ] Audit log document filed in the Email Marketing shared drive with naming convention: `Deliverability_Audit_YYYY-MM-DD_FINAL.md`.
- [ ] Next audit date scheduled (default: first Monday of next month, or 2 weeks from now if status is Watch).
---

**BrightKidCo Applicability:** Applicable to BrightKidCo's email deliverability and technical infrastructure.

---


### 2. deliverability-authentication-setup

## Purpose

This SOP ensures every client's email program is built on a technically fortified foundation that mailbox providers (Gmail, Outlook, Yahoo, etc.) recognize as legitimate and trustworthy. Proper authentication is the single most important non-negotiable requirement for inbox placement. Without it, emails will be filtered to spam or blocked entirely, regardless of content quality.
A correctly configured infrastructure achieves three outcomes:
1. **Authentication Alignment** — SPF, DKIM, and DMARC all pass, and the envelope-from, mail-from, and auth records share the same domain.
2. **Reputation Isolation** — Marketing emails are sent from a dedicated subdomain, protecting the root domain's reputation from spam complaints.
3. **Visual Trust** — BIMI displays the brand logo next to emails, increasing recognition and trust.
Executing this SOP correctly on Day 1 prevents months of deliverability remediation later.

## Pre-Flight Checklist

Before beginning any DNS or Klaviyo work, confirm each of the following:
- [ ] DNS provider login and administrative access confirmed — able to add/edit TXT, CNAME, MX, and A records
- [ ] Klaviyo account access confirmed with Sending Domains permissions
- [ ] Root domain verified as owned and not blacklisted (MXToolbox blacklist check) — must show 0 listings
- [ ] All third-party sending services inventoried: customer support (Gorgias, Zendesk), transactional (Recharge, Yotpo, Judge.me), internal email (Google Workspace, Microsoft 365), and any other SaaS tools with email notifications
- [ ] Google Postmaster Tools account set up with team-accessible Google account
- [ ] Brand logo in vector format available for BIMI (if BIMI is in scope)
- [ ] Current DNS records backed up (export zone file or screenshot existing records)

## Completion Checklist

- [ ] Dedicated sending subdomain created and verified in Klaviyo — green checkmarks on SPF, DKIM, and Domain
- [ ] Two sender personas configured (Brand Announcer + Helpful Agent) with test emails sent from each
- [ ] DMARC record published at `p=none` with DMARC analysis platform connected and showing data
- [ ] Full sending source audit completed — all legitimate sources pass SPF and/or DKIM
- [ ] DMARC policy escalated to `p=quarantine` after 7+ days of clean data
- [ ] SPF lookup count verified at 10 or fewer (including all `include:` statements)
- [ ] BIMI record published (if applicable) with SVG and VMC hosted on HTTPS URLs — verified with BIMI Record Checker
- [ ] rDNS/PTR record configured for dedicated IP (if applicable)
- [ ] MX record configured for sending subdomain
- [ ] Sending subdomain added and verified in Google Postmaster Tools
- [ ] GPT shows 100% authentication pass rate across SPF, DKIM, and DMARC
- [ ] Blacklist check (MXToolbox) shows 0 listings for both root domain and subdomain
- [ ] All DNS records backed up and documented in client vault

### Plan 3: DMARC Policy Implementation (Phased Rollout)

#### Step 7: Publish DMARC Record at `p=none` (Monitoring Mode)
**Action:** Add a DMARC TXT record to DNS with policy set to `p=none` to begin collecting data without affecting delivery.
**Tool:** DNS provider
**Input:**
- **Host:** `_dmarc` (or `_dmarc.hello` for subdomain)
- **Type:** TXT
- **Value:** `v=DMARC1; p=none; rua=mailto:dmarc-reports@yourbrand.com; ruf=mailto:dmarc-forensics@yourbrand.com; fo=1; pct=100`
**Expected Result:** The DMARC record is live. Verify with `dig _dmarc.yourbrand.com TXT` or MXToolbox DMARC lookup.
**If Failed:** Ensure the `rua` email address is a monitored inbox — DMARC reports will be sent there from ISPs. If no `rua` is set, you won't receive reports.
**Undo:** Delete the `_dmarc` TXT record.
---
#### Step 8: Connect DMARC Reports to Analysis Platform
**Action:** Register the domain with a DMARC analysis platform (easyDMARC or dmarcian) and configure the `rua` email address to forward to the platform.
**Tool:** easyDMARC or dmarcian web app
**Input:** Domain name, `rua` email address from Step 7
**Expected Result:** The platform begins showing DMARC aggregate reports within 24–48 hours of the first email send.
**If Failed:** If no reports appear after 48 hours, verify that the DMARC `rua` tag is correctly formatted and that the mailbox accepts the reports. Some ISPs may require dedicated forwarding rules.
**Undo:** Remove the domain from the analysis platform.
---
#### Step 9: Conduct Sending Source Audit (7–14 Day Observation)
**Action:** Monitor DMARC reports over 7–14 days to identify every service sending email from the domain and subdomain.
**Tool:** DMARC analysis platform
**Input:** None — data flows in automatically from ISPs
**Expected Result:** A complete inventory of all sending sources, showing which pass SPF/DKIM and which fail. Common sources to identify:
- Klaviyo (marketing automation)

**BrightKidCo Applicability:** Applicable to BrightKidCo's email deliverability and technical infrastructure.

---


### 3. deliverability-content-signature-optimization

## 1.0 Executive Summary — The Primary Inbox Doctrine

**Mission:** To systematically and repeatedly achieve Primary Inbox placement by deploying a proprietary content injection technique that manipulates the content signature of every email, forcing algorithmic mailbox providers like Gmail to classify promotional sends as "Important" communications.
**Core Principle:** Standard deliverability practices are defensive. This doctrine is offensive. We do not ask the user to save us from the Promotions tab; we force the algorithm to keep us out of it in the first place.
This is achieved through a **two-part content injection system** that alters an email's DNA from a machine's perspective:
1. **The Universal "Transactional Cloak"** — A brute-force deployment in EVERY email
2. **The Situational "Conversational Cloak"** — A surgical, secondary layer for high-impact sends
When deployed correctly, these assets make a standard, image-heavy promotional email appear to an algorithm as a complex hybrid of a critical security alert and a personal, one-to-one message, making a "Promotions" classification highly unlikely.
---

### 3.1 Definition & Purpose

The Transactional Cloak is a large, static block of 300-400+ words of text, disguised as an "Important Privacy Information" or "Account Security" notice.
**It solves three critical problems simultaneously:**
1. **Annihilates the Text-to-Image Ratio Problem** — For visually-driven, image-heavy emails, this massive text block instantly creates a healthy, text-rich content profile
2. **Saturates the Email with High-Priority Keywords** — Terms like "Account is Secure," "Suspicious login," "Verify your account," "Shipping address," "Password," "Multi-Factor Authentication" are precisely the keywords algorithms treat as important
3. **Forces a Risk-Averse Decision** — The algorithm, seeing both promotional elements AND security alert characteristics, defaults to prioritizing the "important" signals

### 4.1 Definition & Purpose

The Conversational Cloak is a static block of ~300 words, engineered to mimic a hyper-personal, one-to-one email. It is the specialized weapon designed to add an overwhelming layer of non-uniform, human-like data to an email's content signature.
**How It Works:** While the Transactional Cloak makes an email look "important," the Conversational Cloak makes it look "personal" and "unique." It shatters algorithmic pattern recognition by introducing chaotic, conversational text that prevents classification as a bulk template. This is achieved through keyword stuffing with terms related to:
- Fake personal details (names, pets, locations, events)
- Technical details (devices, browsers, apps)
- Specific product names and past brand interactions
When an algorithm encounters an email fortified with **both** cloaks, it faces a complex hybrid that is simultaneously a security alert AND a personal message — making a "Promotions" classification a high-risk, low-confidence decision.

### 3.3 Master Text Template (Proprietary — Use Verbatim)

```
Important Privacy Information - Especially for Plain Text Readers.
Hi [Recipient Name],
This message is particularly important for those of you reading this in plain text, which often means you're using an older device. We know that users like you are often more interested in privacy policies and how companies manage their data.
Your Account is Secure. Right now, your account is 100% secure and there have been no breaches. We're committed to being proactive about your privacy, taking preventative measures to safeguard your data.
Why We're Contacting You. We believe in transparency and want to ensure you have all the information you need to stay safe online. While we employ the latest security measures to protect your account, it's equally important for you to be informed and vigilant.
What to Do if You Suspect an Issue. In the unlikely event of a security issue, we want you to be prepared. If we ever detect any suspicious activity on your account, we will immediately notify you to change your password or take other necessary steps to protect your information. Here are some potential triggers for security alerts: Suspicious login attempts from an unrecognized device or location. Changes to your account settings that you did not authorize. Potential unauthorized access to your personal information.
Proactive Security Measures. We take a proactive approach to security, constantly monitoring our systems and implementing the latest security protocols to protect your data. This includes: Robust encryption to safeguard your personal and financial information. Strict access controls to limit access to your data. Regular security audits to identify and address potential vulnerabilities. Comprehensive incident response plans to handle any security incidents swiftly and effectively.
Your Orders are Safe. We want to assure you that your orders with [CLIENT NAME] are completely safe. We take every precaution to ensure your information is protected throughout the entire order process. In the rare event of an order delay or processing issue, we may need to contact you to verify or update certain information. This may include: Confirming your shipping address. Clarifying order details. Providing updates on the estimated delivery time.
Important Security Reminder. Please remember that we will never ask you for sensitive information such as your credit card number, expiry date, or CVV via email. Protecting Your Data is Our Top Priority. At [CLIENT NAME], we take data security very seriously. We have implemented robust measures to protect your information, including Multi-Factor Authentication, Strong Password Policies, Regular Security Audits, and Incident Response Plans.
If we detect unusual activity, we may require you to verify your identity immediately. Failure to do so within 24 hours may result in temporary suspension of your access. Do not provide your full 16-digit credit card number to verify your identity.
Take Action Now if we ever have an issue:
1. Click the link we provide to verify your account on our website.
2. Follow the on-screen instructions to complete the verification process.
If you have any questions, please contact our support team immediately at [CLIENT SUPPORT EMAIL]. Thank you for your prompt attention to this matter.
Sincerely,
The [CLIENT NAME] Account Security Team
```

**BrightKidCo Applicability:** Applicable to BrightKidCo's email deliverability and technical infrastructure.

---


### 4. deliverability-domain-warming

## Purpose

When a new sending domain or dedicated IP address is first activated, it has zero reputation with mailbox providers. Gmail, Outlook, Yahoo, and others treat unknown senders with extreme suspicion — this is the same behavior spammers exploit. Sending full volume from a new domain immediately guarantees spam folder placement, blacklisting, or outright blocking.
This SOP provides a systematic, 6-week protocol for building sender reputation from the ground up by gradually increasing volume, sending exclusively to highly engaged subscribers first, and monitoring key metrics daily. The same protocol is used for **reputation recovery** (when an existing domain has been damaged) with even tighter engagement criteria in the initial phase.
The protocol is battle-tested on e-commerce brands ranging from $0 to $31K in 47 days (David Hunter case study methodology — anecdotal, not independently verified) and is designed to be executable without engagement data by identifying likely-engaged segments from purchase history.

## Pre-Flight Checklist

Before beginning the warm-up process, confirm:
- [ ] Authentication setup complete per SOP-deliverability-authentication-setup — SPF, DKIM, DMARC at `p=none` all verified
- [ ] Dedicated sending subdomain configured and verified in Klaviyo — green checkmarks on all 3
- [ ] Google Postmaster Tools set up and verifying the sending subdomain — data populating (may take 24-48 hours)
- [ ] Klaviyo segments built and ready (see Plan 1 for segment definitions)
- [ ] All non-essential automated flows paused (only keep: Welcome, Browse Abandon, Cart/Checkout Abandon, Post-Purchase)
- [ ] High-engagement campaign content prepared (Best Sellers, educational content, value-driven emails — no aggressive sales)
- [ ] Backup/export of current campaign calendar and flow settings
- [ ] Client briefed and agreed to the strategic pause and reduced sending audience

## Completion Checklist

- [ ] Week 1-2 completed: Vanguard segment reached >50% open rate consistently, GPT reputation stable
- [ ] Week 3-4 completed: 30-Day Engaged segment reached >45% open rate consistently
- [ ] Week 5-6 completed: 90-Day Engaged segment reached >40% open rate consistently
- [ ] All automated flows reactivated and performing at healthy benchmarks
- [ ] DMARC upgraded to `p=quarantine`
- [ ] Google Postmaster Tools shows "Medium" or "High" reputation
- [ ] Bounce rate <0.5% on all campaign sends
- [ ] Spam complaint rate <0.03% on all campaign sends
- [ ] Automated Sunset Unengaged flow built and active
- [ ] Permanent sending cadence established: 3-4 campaigns/week to 90-Day Engaged, 1/month to expanded list
- [ ] Warming KPI dashboard documented and handed off
- [ ] Client debrief completed with warming results summary

### Decision: How to Handle Accounts with No Engagement Data

**Condition:** The account is new with zero engagement history (no emails sent yet). Can't build engagement-based segments.
**Action:** Build segments from purchase data instead:
- Anyone who has purchased in the last 30 days → treat as "14-Day Engaged" equivalent
- Anyone who has purchased in the last 90 days → treat as "90-Day Engaged" equivalent
- If no purchase data exists, use lead source quality: organic sign-ups > giveaway sign-ups > co-registration sign-ups
**If NO engagement data AND NO purchase data:** Start by sending to the newest subscribers (added in last 7 days) and hand-pick a seed list of 50-100 known loyal customers (from customer support interactions, social media followers, etc.).

**BrightKidCo Applicability:** Applicable to BrightKidCo's email deliverability and technical infrastructure.

---


### 5. deliverability-list-hygiene

## Purpose

This SOP ensures that every email list under management is systematically cleaned of invalid, unengaged, and high-risk profiles on an ongoing basis. Proper list hygiene protects sender reputation, maintains inbox placement rates above 90%, keeps bounce rates below 0.5%, and ensures every marketing dollar reaches a human who opted in. Failure to execute these steps results in reputation damage that can take 6+ weeks to repair and directly costs revenue — a 10% drop in deliverability on a 100K-subscriber list loses €1,500+ per campaign.
---

## Pre-Flight Checklist

- [ ] Klaviyo account access with Analytics, Segments, Lists, Flows, and Settings permissions
- [ ] Google Postmaster Tools (GPT) set up and showing data for the sending domain
- [ ] Email verification service account active with available credits (ZeroBounce, NeverBounce, Kickbox, or similar)
- [ ] Last 90 days of campaign performance data available in Klaviyo Analytics
- [ ] Bounce rate trend data pulled — current rate known
- [ ] Spam complaint rate from last 30 days known (Klaviyo + GPT)
- [ ] Current suppression lists and sunset flow status verified (active/inactive)
---

### Step 17: Run the Monthly Hygiene Checklist

**Action:** Execute the following checklist on the 1st of each month. Record results.
**Tool:** This SOP + Klaviyo
**Input:** None
**Monthly Hygiene Checklist:**
- [ ] Review bounce rate trend (last 30 days) — target < 0.5%. If > 1%, escalate.
- [ ] Review spam complaint rate (last 30 days) — target < 0.03%. If > 0.03%, run Spam Complaint Analysis (Step 3 of Phase 1).
- [ ] Verify Sunset Flow is live and has processed profiles in the last 30 days
- [ ] Review the 120-Day Unengaged segment size — note any significant growth Change from last month.
- [ ] Export Ghost Profiles segment and review for manual suppression candidates
- [ ] Check Google Postmaster Tools — is domain reputation still Medium or High?
- [ ] Verify email verification service has sufficient credits for the coming month
- [ ] Review lead source quality metrics — any new sources added? Any source showing degradation?
- [ ] Audit disposable email domain list — add any new known disposable domains discovered this month
- [ ] Verify all campaign sends and flow triggers include the Master Suppression Segment and bot exclusion filters
**Expected Result:** All 10 items checked and documented. Issues found are escalated or resolved immediately.
**If Failed:** If any check fails, resolve it using the relevant phase procedure above before closing the monthly review.
**Undo:** N/A — checklist completion is documentation only.
---

## Completion Checklist

- [ ] Bounce rate documented (current rate: ___%) — target < 0.5%
- [ ] Spam complaint rate documented (current rate: ___%) — target < 0.03%
- [ ] All 7 engagement segments exist and have populated counts
- [ ] Revenue impact calculated and documented
- [ ] Real-time email verification is active at signup
- [ ] Role account detection verified or manual kludge built
- [ ] Opt-in consent tracking configured
- [ ] Lead source audit completed — each source classified (Safe / Monitor / Risky)
- [ ] Risky subscribers suppressed
- [ ] Disposable email domain blocklist built (minimum 20 domains)
- [ ] Non-engaged sleeper detection built
- [ ] Automated sunset protocol live (trigger segment + sunset flow + master suppression)
- [ ] Bot tagging flows live with universal exclusion applied
- [ ] Monthly hygiene checklist executed and issues documented
- [ ] All results logged to client deliverability dashboard or shared audit document
---

**BrightKidCo Applicability:** Applicable to BrightKidCo's email deliverability and technical infrastructure.

---


### 6. deliverability-spam-recovery

## Purpose

Restore sender reputation and email deliverability after degradation by executing a disciplined, phased re-engagement strategy. This protocol systematically re-builds mailbox-provider trust through positive engagement signals, list hygiene, and strategic sending pauses. It is designed for Fortune 500 e-commerce operations where poor deliverability directly impacts revenue — for a 100K-subscriber list, each 10% deliverability improvement recovers approximately €1,500 per campaign.
Apply this SOP when GPT (Google Postmaster Tools) reputation drops to "Low" (Orange) or "Bad" (Red), open rates fall below 45%, spam complaint rates exceed 0.03%, or transactional emails begin landing in spam. The protocol requires discipline, full client alignment, and a temporary shift in sending strategy.

### Step 2A — Code Red Protocol (Critically Damaged Accounts Only)

Execute all three sub-steps below, then proceed to Step 3 (Plan 1).
#### Step 2A.1 — Temporary Double Opt-In
| Field | Detail |
|---|---|
| **Action** | In your ESP, switch the default sign-up form from Single Opt-In to Double Opt-In. This forces new subscribers to confirm their email address via a confirmation click before being added to the list. The confirmation click is a strong positive engagement signal to mailbox providers. **Note:** This is a temporary crisis measure. Revert to Single Opt-In once reputation stabilizes (typically after Plan 3 completion). |
| **Tool** | ESP (e.g., Klaviyo) — Form/Sign-Up Settings |
| **Input** | Sign-up form ID, Double Opt-In toggle enabled; confirmation email template configured |
| **Expected Result** | New subscribers must click a confirmation link before being added to the list. Bots, typo domains, and low-intent sign-ups are blocked. Each confirmation triggers a positive engagement signal. |
| **If Failed** | If Double Opt-In causes excessive sign-up drop-off (> 60% confirmation rate), verify the confirmation email is being delivered (test with a seed account). If deliverability is so poor that even the confirmation email goes to spam, consider an alternative confirmation method (e.g., SMS verification) or continue with Single Opt-In but implement stricter list hygiene. |
| **Undo** | Revert to Single Opt-In in ESP form settings. |
#### Step 2A.2 — Modified Two-Step Welcome Flow
| Field | Detail |
|---|---|
| **Action** | In your ESP, modify the Welcome flow as follows: Send the first Welcome email as normal. Immediately after the first email, insert a Conditional Split node. Set the condition: subscriber opened the first Welcome email (within 72 hours). If opened → continue to the next email in the flow. If not opened → exit the flow (do not send further emails). This artificially inflates engagement rates for all subsequent emails in the flow, because only already-engaged subscribers receive them. **Note:** This is a temporary crisis measure. Revert to the standard Welcome flow once reputation stabilizes. |
| **Tool** | ESP (e.g., Klaviyo) — Flow Builder, Conditions |
| **Input** | Existing Welcome Flow; add Conditional Split after first email; condition: "Email Opened — First Welcome" within 72 hours |
| **Expected Result** | Only subscribers who opened the first Welcome email proceed through the remaining flow. Engagement metrics (open rate, click rate) on subsequent Welcome emails increase significantly (typically 10-20 percentage points). |
| **If Failed** | If open tracking is disabled or unreliable, use click tracking as the condition instead. If neither is available, skip this step and rely on Plan 1 and Plan 2 to rebuild reputation. |
| **Undo** | Remove the Conditional Split node from the Welcome Flow; restore the original flow path. |
#### Step 2A.3 — "Check Your Spam" Pop-Up
| Field | Detail |
|---|---|
| **Action** | Update the sign-up form success message (pop-up, inline, or landing page) to: "Thanks for signing up! Check your inbox (and spam folder!) for your 10% off code." This message turns motivated subscribers into recovery partners — they proactively find and engage with your emails, which sends positive signals to mailbox providers. Ensure the 10% off code is actually being sent and is visible if retrieved from spam. |
| **Tool** | ESP (e.g., Klaviyo) — Form Builder, Success Message editor; website CMS or pop-up tool |
| **Input** | Current success message replaced with the new text; 10% off code confirmed active in Welcome email |

## Pre-Flight Checklist

Before initiating any recovery plan, confirm each of the following:
- [ ] **Client briefing completed** — brief the client on why the approach works, what temporary adjustments are required (paused promotions, shifted content strategy), and obtain collaborative agreement to proceed.
- [ ] **Google Postmaster Tools configured** — confirm IP and Domain Reputation dashboards are active and accessible for the sending domain; note current GPT reputation level and the date of any drop.
- [ ] **Recent campaign audit performed** — compare recent campaigns against benchmarks: open rate (< 45%), spam complaint rate (> 0.03% or 0.01% target), bounce rate (> 1%), unsubscribe rate (> 0.5%). Identify the campaign or date range when reputation degraded.
- [ ] **List hygiene processes verified** — confirm Sunset/Unengaged suppression flows are active. Audit sign-up forms for low-quality subscriber sources. Check for list bombing or bot traffic.
- [ ] **Flow audit complete** — identify all active flows. Only these flows may remain on during recovery: Welcome Series, Browse Abandonment, Cart/Checkout Abandonment, Post-Purchase. All other flows must be paused.
- [ ] **Strategic pause initiated** — all non-essential promotional campaigns stopped. Welcome Series, Abandoned Cart/Checkout, and Post-Purchase flows continue (they target already-engaged users).
- [ ] **Segment infrastructure verified** — ability to build dynamic engagement segments by recency (14-Day Engaged, 30-Day Engaged, 60-Day Engaged, 90-Day Engaged) in the ESP. Segments defined as: subscribers who opened OR clicked any email within the specified lookback window.
- [ ] **Code Red assessment** — determine if the account is in Code Red status (nearly 100% of emails including transactional going to spam). If yes, prepare Temporary Double Opt-In, Modified Two-Step Welcome Flow, and "Check Your Spam" pop-up before beginning Plan 1.

## Completion Checklist

Use this checklist to confirm the protocol has been successfully completed:
- [ ] Google Postmaster Tools shows GPT reputation at consistent "Medium" (Yellow) or "High" (Green) for at least 7 consecutive days.
- [ ] All core flows fully re-activated and delivering to inbox: Welcome Series, Browse Abandonment, Cart/Checkout Abandonment, Post-Purchase.
- [ ] Permanent sending segment established: 90-Day Engaged (subscribers who opened or clicked in the last 90 days).
- [ ] Campaign open rate to 90-Day Engaged segment is ≥ 40-50%.
- [ ] Spam complaint rate is < 0.01% (absolute maximum 0.03%).
- [ ] Bounce rate is < 1%.
- [ ] Unsubscribe rate is < 0.5%.
- [ ] Code Red measures reverted (if applicable): Double Opt-In switched back to Single Opt-In; Welcome Flow restored to original (Conditional Split removed); "Check Your Spam" pop-up reverted to standard success message.
- [ ] Client debrief completed: summary of recovery timeline, engagement metrics before/after, GPT reputation progression, and recommendations for ongoing monitoring.
- [ ] Pre-BFCM accelerated measures de-escalated (if applicable): campaign frequency reduced from 4-5/week to standard cadence; 120-Day Engaged testing concluded.

**BrightKidCo Applicability:** Applicable to BrightKidCo's email deliverability and technical infrastructure.

---


### 7. deliverability-transactional-code

## 1.0 Executive Summary

Transactional emails are the backbone of eCommerce email operations — order confirmations, shipping notifications, password resets, and account alerts. Unlike promotional emails, transactional emails bypass certain spam filters by definition, but **only when properly coded**. Poorly coded transactional emails get flagged, delayed, or classified as spam, eroding the sender reputation that protects your entire program.
This SOP defines the technical standards for building, implementing, and testing transactional email templates that maximize deliverability, render correctly across all major clients, and integrate seamlessly with Klaviyo and Shopify.
**Why Transactional Email Code Matters for Deliverability:**
| Factor | Impact |
|--------|--------|
| HTML structure errors | Triggers spam filters (Gmail, Outlook) |
| Missing plain text fallback | Causes rendering failures on legacy clients |
| Inline CSS violations | Breaks Gmail and Outlook 365 rendering |
| Image-heavy without text | Increases spam score, reduces inbox placement |
| Broken transactional events | Delays critical customer communications |
---

### 3.1 Core Architecture

Every transactional email must use this structural pattern:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>[Email Subject Line]</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, Helvetica, sans-serif;">
    <!--[if mso]>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4;">
    <tr><td>
    <![endif]-->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4;">
        <tr>
            <td align="center" style="padding:20px 10px;">
                <!-- Container Table -->
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; width:100%; background-color:#ffffff; border-radius:4px;">
                    <tr>
                        <td style="padding:30px 30px 20px 30px;">
                            <!-- Main Content Area -->
                            <h1 style="font-size:24px; color:#333333; margin:0 0 15px 0;">[Main Heading]</h1>
                            <p style="font-size:16px; color:#555555; line-height:1.5; margin:0 0 15px 0;">[Body text]</p>

### 3.3 Critical Technical Specifications

| Specification | Requirement | Reason |
|--------------|-------------|--------|
| DOCTYPE | `<!DOCTYPE html>` or `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">` | Triggers standards mode in all clients |
| Layout method | Tables (`<table role="presentation">`) | Outlook uses Word rendering engine — divs break |
| CSS | Inline only on all elements | Gmail strips `<style>` blocks; Outlook ignores `<style>` in `<head>` |
| Width | 600px max (use `max-width:600px; width:100%`) | Standard email width across all viewports |
| Images | Hosted URLs only, no attachments | Attachments trigger spam filters |
| Alt text | Required on all images | Accessibility + broken image fallback |
| Font stack | Web-safe (`Arial, Helvetica, sans-serif` or `Georgia, Times New Roman, serif`) | Custom fonts fail in Outlook |
| Background colors | Inline on table cells | Background-image and bgcolor attributes have inconsistent support |

### 5.1 Pre-Send Testing Checklist

Before any transactional email goes live, test across this matrix:
| Client | Test Method | What to Check |
|--------|------------|---------------|
| Gmail (Chrome) | Send test to Gmail address | Inbox vs. spam placement, image rendering, link functionality |
| Gmail (Mobile App) | Send to Gmail on iOS/Android | Responsive layout, tap targets, font sizing |
| Outlook 365 | Send to Outlook.com or Office 365 | Table rendering, font fallbacks, button alignment |
| Outlook Desktop | Use Litmus or Email on Acid | Word rendering engine compatibility |
| Apple Mail (Desktop) | Send to iCloud / Mac Mail | WebKit rendering, image blocking behavior |
| Apple Mail (iOS) | Send to iPhone/iPad | Responsive scaling, touch targets |
| Dark Mode | Use Litmus or Email on Acid | Color inversion, readability |
| Plain Text Only | Check Klaviyo plain text tab | All dynamic content populates, no raw code visible |
| Screen Reader | Use NVDA or VoiceOver | Alt text on images, logical reading order |
| Mobile (general) | View at 320px and 375px widths | Content doesn't overflow, CTAs are tappable |

**BrightKidCo Applicability:** Applicable to BrightKidCo's email deliverability and technical infrastructure.

---


### 8. email-audit-execution

## 1. Purpose

This SOP ensures every email audit is executed identically — same checks, same scoring, same delivery format. The audit is Tenza's primary sales tool and client trust-builder. A sloppy audit loses the deal. A precise audit converts 40-60% of prospects into clients. *Source: Tenza internal data.* Missing a single revenue leak in the audit means leaving money on the table and damaging credibility when the client discovers it later.

### Phase 7: Score and Calculate (15 min)

**Goal:** Turn findings into a quantified report.
#### Step 49: Score Each Category
**Action:** Tally points per section:
- Account Setup: __ / 7
- Lead Generation: __ / 4
- Flows: __ / 18
- Campaigns: __ / 9
- Email Quality: __ / 7
- List Health: __ / 5
**Total: __ / 50**
**Tool:** Calculator / spreadsheet
**Input:** Phase 1-6 findings
**Expected Result:** Total score calculated with category breakdown
**If Failed:** N/A
#### Step 50: Calculate Estimated Monthly Revenue Leak
**Action:** Use client's monthly revenue and score to estimate leak:
**Formula:**
```
If client provided monthly email revenue:
  Revenue Leak = Monthly Email Revenue x (1 - Score/50) x 0.3
If client provided total monthly revenue (not email-specific):
  Revenue Leak = Total Monthly Revenue x 0.25 x (1 - Score/50) x 0.3
If no revenue data:
  Revenue Leak = "Estimated $X,XXX-$XX,XXX based on [list size] subscribers and industry averages"
```

### Decision: Score < 15 (Critical State)

**Check:** Total score
**If YES:** → Prioritize top 3 fixes in report. Do not overwhelm client with 20 recommendations. Focus on quick wins: Welcome Flow + Abandoned Checkout + Pop-up optimization.
**If NO:** → Provide full recommendation list prioritized by revenue impact.

## 2. Pre-Flight Checklist

Before opening Klaviyo, verify:
- [ ] Client has invited `ayoub@tenzamarketing.com` as collaborator in Klaviyo
- [ ] 2FA code obtained (if enabled) — do not start audit without live access
- [ ] Client's Shopify URL known and verified
- [ ] Loom recorder installed and tested
- [ ] Google Doc template duplicated: `[Client] — Email Revenue Leak Audit`
- [ ] Audit scoring sheet ready (50-point checklist below)
- [ ] Calculator ready for estimated revenue leak calculation
- [ ] Previous 90 days of client data is visible in Klaviyo (if new integration, note this limitation)
**If any item is missing:** Stop. Do not proceed with a partial audit. A partial audit is worse than no audit.

**BrightKidCo Applicability:** Applicable to BrightKidCo's email deliverability and technical infrastructure.

---


### 9. email-collection-list-growth

## 1. Executive Summary

Email list growth is the foundation of all e-commerce email revenue. More subscribers = more revenue, compounded over time. A growing list means more people entering your welcome flows, abandoned cart sequences, promotional campaigns, and automated birthday series. A shrinking list means declining revenue regardless of how well your emails perform.
The math is unforgiving: an email list is a perishable asset. Subscribers churn naturally every month — through unsubscribes, bounces, and inactivity. If your acquisition rate does not exceed your churn rate, your list is shrinking, and your revenue potential is declining. Constant, active list growth is not optional; it is the primary engine that ensures the long-term health and profitability of your email channel.
A brand that gains 2,000 subscribers/month with a 10K list will likely outperform a brand with a 20K list gaining only 250/month. Growth rate — not absolute list size — is the true indicator of channel health and future revenue trajectory.
---

### Purpose

A dedicated sign-up page serves as a central landing point for subscribers who actively want to join your list. Unlike pop-ups that interrupt, sign-up pages are opt-in by navigation.

### Purpose

Sign-up embeds are forms integrated directly into existing pages — passive collection points that work 24/7 without interrupting the browsing experience.

### Monthly Checklist

- [ ] Pop-up conversion rate recorded and trended
- [ ] Checkout opt-in verified as still active
- [ ] Total new subscribers recorded (trailing 30 days)
- [ ] Churn rate calculated and compared to acquisition rate
- [ ] Growth target set for next month
- [ ] A/B test planned and documented
- [ ] Offer fatigue checked (if conversion is declining, test a new offer)
- [ ] Form builder platform healthy (no bugs, design intact)

**BrightKidCo Applicability:** Applicable to BrightKidCo's email deliverability and technical infrastructure.

---


### 10. email-collection-popup-strategy

## 1. Executive Summary

Every e-commerce brand faces the "Leaky Bucket" problem. You invest heavily in advertising, content, and marketing to drive traffic to your website, yet **97-99% of new visitors leave without making a purchase.** A passive "subscribe" form in the footer is not enough to stop this leak. The pop-up — a high-conversion, strategically timed and designed form — is the single most important engine for predictable, automated revenue growth.
The financial math is straightforward: more subscribers = more revenue, compounded over time. By increasing pop-up conversion rate from a standard 2.5% to an optimized 8.75%, a brand with 30,000 monthly visitors generates an additional **$18,000 in automated revenue every month** — over **$216,000 annually** — from the welcome flow alone.
An email list is also a perishable asset. Subscribers churn daily via unsubscribes, bounces, and inactivity. If your acquisition rate does not exceed your churn rate, your list — and your revenue — is shrinking. A high-conversion pop-up system is the engine that ensures constant replenishment.
---

### Core Philosophy

We do not guess. A/B testing replaces assumptions with data. We are never "done" optimizing. Every test winner becomes the new champion, and a new challenger is tested against it immediately.

### 7.1 High Contrast — Pop-Up Must Stand Out From Site

The pop-up must visually separate from the website behind it. Use a dark overlay or blurred background so the form commands undivided attention. The offer text must be the highest-contrast element in the design.

### 8.6 Suppression Rules

Never show pop-ups to:
- Existing email subscribers (they are already on the list).
- Existing SMS subscribers (for SMS-specific pop-ups).
- Recent purchasers (within 30 days).
- VIP customers (show VIP-specific offers instead).
---

**BrightKidCo Applicability:** Applicable to BrightKidCo's email deliverability and technical infrastructure.

---


### 11. email-cta-conversion-design

## 1. Executive Summary

The call-to-action is the single most important element in any email. Everything else — headline, imagery, copy, layout — exists to support the CTA. This skill covers every dimension of CTA design: visual specs, placement psychology, copy frameworks, multi-CTA strategies, conversion layout patterns, and A/B testing.
**Core principle:** An email's only job is to get a click. Every design decision either increases or decreases the likelihood of that click. Optimize ruthlessly.

### 2.2 Dimension Rule Table

| Property | Minimum | Recommended | Maximum | Notes |
|----------|---------|-------------|---------|-------|
| Height | 44px | 48-56px | 64px | Apple/Google tap target minimum is 44px |
| Width (mobile) | Full-width (100%) | Full-width (100%) | Full-width | Span the screen on mobile |
| Width (desktop) | 160px | 220-300px | 400px | Auto-width or fixed, centered |
| Padding vertical | 12px | 14-16px | 20px | Generous internal padding |
| Padding horizontal | 24px | 36-48px | 60px | More padding = more perceived weight |
| Border-radius | 2px | 4-6px | 12px | Pill shape (50%) for design-forward brands |
| Font size | 14px | 16-18px | 20px | Larger for hero, smaller for secondary |
| Letter-spacing | Normal | Normal to 0.5px | 1px | Only for ALL CAPS CTAs |

### 3.2 Text Link Design Rules

```css
/* Text link (within body copy) */
.email-link {
  color: #222222;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 2px;
}
/* Text link (standalone, CTA-style) */
.email-link-cta {
  color: #CC3333;  /* Brand accent */
  font-weight: 700;
  text-decoration: underline;
}
/* Text link for dark backgrounds */
.email-link-light {
  color: #FFFFFF;
  font-weight: 700;
  text-decoration: underline;
}
```
**Rules:**
- Links must be visually distinguishable from body text — underline or bold (or both)
- Minimum 3:1 contrast ratio between link text and body text
- Minimum 44x44px tap target (add padding around linked text)

### 4.1 The Three Places a CTA Must Be

Every email must have a CTA in these positions:
**Position 1 — Above the Fold (mandatory)**
The hero section. Visible without scrolling. This is where 60-70% of all clicks come from.
```
┌──────────────────────────────────────┐
│  [LOGO]                              │
│                                      │
│  HEADLINE: Buy More, Save More       │  ← visible without scrolling
│  Subheadline: 20% off sitewide       │
│                                      │
│  [CTA: Shop the Sale]                │  ← 70% of clicks from here
├──────────────────────────────────────┤
│  (fold line — above here is free)    │
├──────────────────────────────────────┤
│  Supporting copy...                  │  ← 30% of clicks from below
└──────────────────────────────────────┘
```
**Implementation:**
```html
<!-- Above-the-fold hero with CTA — this must be in the first 300px of email -->
<table cellpadding="0" cellspacing="0" border="0" width="100%" role="presentation">
  <tr>
    <td style="padding:30px; text-align:center;">
      <h1 style="font-size:28px; font-weight:700; color:#222222; margin:0 0 8px;">
        Sale Ends Tonight

**BrightKidCo Applicability:** Applicable to BrightKidCo's email deliverability and technical infrastructure.

---


### 12. email-design-master

### The 600px Rule

- **Design at 600px max width.** This is the safe rendering width across ALL email clients.
- **Outlook desktop** renders at 600px by default. Wider = horizontal scroll.
- **Gmail app** renders at device width. 600px is fine.
- **Apple Mail** renders at device width. 600px is fine.

### The Big 5 Clients (Must Work In)

| Client | Rendering Engine | Market Share | Pain Points |
|--------|-----------------|-------------|-------------|
| **Apple Mail** | WebKit | ~40% | Best rendering. Supports modern CSS. |
| **Gmail (app)** | Custom | ~30% | Strips `<style>` blocks in some versions. No `@font-face`. |
| **Outlook (desktop)** | Word (yes, Word) | ~10% | The worst. See Outlook hacks below. |
| **Outlook (web/app)** | WebKit-ish | ~8% | Better than desktop. Some modern CSS. |
| **Yahoo Mail** | Custom | ~5% | Strips some CSS. Inconsistent. |

### Image Rules

- Always set `width` and `height` attributes (prevent layout shift)
- Always set `display:block` (prevent gaps in Outlook)
- Always set `alt` text (accessibility + image-off fallback)
- Optimize to <200KB per image (mobile load times)
- Use absolute URLs (`https://...` not relative)
- Host images on your domain or CDN (not Klaviyo's default)
- `.jpg` for photos, `.png` for logos/graphics with transparency
- `.gif` for animations (limited support — static fallback in Outlook)

### Standard Email Anatomy

```
[Preheader text — hidden, 40-100 chars]
[Logo — centered, max 200px wide]
[Hero image or headline — 600px max]
[Body copy — 2-3 short paragraphs]
[CTA button — table cell method]
[Secondary content — product grid, social proof]
[Footer — address, unsubscribe, social links]
```

**BrightKidCo Applicability:** Applicable to BrightKidCo's email deliverability and technical infrastructure.

---


### 13. email-design-standards-and-template-build

## 1. Executive Summary

This SOP covers the complete email design system: the principles, layout anatomy, visual hierarchy rules, mobile-first design standards, CTA optimization, image strategy, template library management, and design QA. Email design is the difference between a campaign that converts and one that gets ignored. Branded, conversion-optimized designs have been shown to drive up to 3x more revenue compared to basic templated layouts.
Design is your differentiator in a crowded inbox. Every decision — from button placement to font size to image compression — either removes friction or adds it. This SOP engineers email designs to minimize friction and maximize conversion at every level.
---

## 5. Mobile-First Design Rules

70%+ of email opens happen on mobile devices. Design for mobile first, then enhance for desktop.

### 6.3 Placement Rules

- **Above the fold:** Primary CTA in the hero section
- **Mid-email (optional):** For longer emails, a secondary CTA in the bridge or product section
- **Bottom:** Reinforced CTA after all content
- **Rule:** In emails longer than 1-2 scrolls, repeat the CTA at least once

## 10. Design QA Checklist

Run through this checklist before every send. If any item fails, correct it before sending.

**BrightKidCo Applicability:** Applicable to BrightKidCo's email deliverability and technical infrastructure.

---


### 14. email-template-library

## 1. Overview

This library provides ready-to-use email template specifications for every common e-commerce email type. Each template spec includes:
- Layout structure diagram
- HTML structure (table-based)
- Color rules
- Typography specs
- Image slots with dimensions
- CTA placement and design
- Responsive behavior
- Variants and when to use each
**Usage:** Copy the template structure for the email type you need, then customize copy, images, and brand colors. Do NOT reinvent the structural wireframe — these templates are pre-optimized for deliverability, readability, and conversion.

### 1.1 Universal Base Template

All templates in this library use the following base structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>{{subject}}</title>
  <style>
    body, table, td, p, a, li, blockquote {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img {
      border: 0; height: auto; line-height: 100%;
      outline: none; text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }
    @media (prefers-color-scheme: dark) {
      .dark-bg { background-color:#1A1A1A !important; }
      .dark-text { color:#E0E0E0 !important; }
      .dark-btn { background-color:#333333 !important; }
    }

### 3.1 Flash Sale Template

**Best for:** 24-48 hour sales, limited inventory events, holiday flash sales.
**Structure diagram:**
```
┌─────────────────────────────────────────┐
│   URGENCY BANNER: "Sale ends tonight!"  │  Red/orange banner, 40px height
├─────────────────────────────────────────┤
│            HEADER / LOGO                │
├─────────────────────────────────────────┤
│                                         │
│   HERO: SALE GRAPHIC (600×450)          │  Big percentage or offer visual
│   "UP TO 50% OFF"                        │
│                                         │
├─────────────────────────────────────────┤
│   TIMER: "03 : 24 : 17 : 42"            │  Countdown, days/hours/mins/secs
├─────────────────────────────────────────┤
│   "Shop by Category"                    │
│   [Women's] [Men's] [Accessories]       │  Category buttons or links
├─────────────────────────────────────────┤
│   Featured Product Grid (2×2)           │  Best deals, with strikethrough prices
├─────────────────────────────────────────┤
│        [CTA: Shop the Sale]             │  High-urgency button
├─────────────────────────────────────────┤
│   "Free shipping on orders over $50"    │  Fine-print details
├─────────────────────────────────────────┤
│             FOOTER                      │

### 3.2 Product Launch Template

**Best for:** New product introductions, major releases, seasonal collections.
**Structure diagram:**
```
┌─────────────────────────────────────────┐
│            HEADER / LOGO                │
├─────────────────────────────────────────┤
│                                         │
│    HERO: PRODUCT HERO (600×500)         │  Single hero product shot, dramatic
│    "Meet the [Product]"                  │
│                                         │
├─────────────────────────────────────────┤
│   "The product you've been waiting for"  │  H1: 32px
├─────────────────────────────────────────┤
│   [CTA: Explore Now]                    │  Primary CTA
├─────────────────────────────────────────┤
│   KEY FEATURES (3x)                     │  Feature icon + headline + description
│   [Icon] Feature 1                      │  Single-column, stacked
│   [Icon] Feature 2                      │
│   [Icon] Feature 3                      │
├─────────────────────────────────────────┤
│   GALLERY (3 images)                    │  Product detail shots, 600×300 each
├─────────────────────────────────────────┤
│   "What people are saying"              │  1-2 testimonials with photo
├─────────────────────────────────────────┤
│        [CTA: Get Yours Now]             │  Bottom CTA

**BrightKidCo Applicability:** Applicable to BrightKidCo's email deliverability and technical infrastructure.

---
---


### Group 5: Strategy and Analytics (13 skills)

---

#### 1. analytics-abtesting-iteration-protocol

**Core Framework: Scientific A/B Testing Methodology**

The skill applies evolutionary principles to email marketing -- every email is a controlled experiment with variables, traits, and fitness. The framework has 10 sections covering principle, golden rule, KPI table, test execution, Darwinian rule, stimulus hypoesthesia, testing roadmap, and documentation.

**Key Rules:**
- **Golden Rule:** If primary KPI is in range, do NOT change anything
- **One variable at a time. One test at a time.** Changing subject line AND body AND send time simultaneously = worthless data
- **Minimum sample sizes are non-negotiable:** 500/variant for subject lines, 1,000/variant for body copy, 1,000/variant for send time
- **Do nothing while the test is running.** Resist every impulse to tweak. Judge after settling period (24hr opens, 48hr clicks, 72hr+ conversions)
- **If you change anything before hitting sample size, your data is worthless**
- **Do NOT judge a test on Day 1** when you need Day 3 data for clicks and Day 7 data for conversions

**KPI Table (Email Marketing):**

| Metric | KPI Target | If Below KPI |
|---|---|---|
| Email delivery rate | 98%+ | DNS, domain warmup, list hygiene |
| Inbox placement rate | 90%+ | SPF/DKIM/DMARC, blacklist check |
| Campaign open rate | 30-50% | Subject line variables |
| Campaign click rate | 1.29%+ avg, 2%+ good | Body copy, CTA, offer strength |
| Campaign conversion rate | 0.05%+ avg, 0.10%+ good | Offer, landing page, audience match |
| Campaign RPR | $0.06+ avg, $0.15+ good | Click to Conversion to AOV funnel |
| Campaign unsub rate | <0.20% per send | Frequency, content mix, segmentation |
| Flow open rate (Welcome Email 1) | 40-55% | Subject line, sender name trust |
| Flow click rate | 3-5%+ | Body copy, CTA, offer, AI recs |
| Flow RPR | $1.58 industry median | Flow architecture, offer, segmentation |
| Abandoned checkout recovery | 8-12% total | Discount timing, email count, CTA |
| Spam complaint rate | <0.10% (Gmail) | List quality, cold segments |
| Bounce rate | <2% | List hygiene, double opt-in |

**Testing Roadmap (3 Phases):**
- Phase 1 (Days 1-30): Subject line formula, send day of week, welcome flow email count
- Phase 2 (Days 30-90): Cart discount timing, post-purchase cross-sell placement, campaign body copy framing
- Phase 3 (Days 90+): AI product recommendations, segment-based send optimization, preview text optimization

**Decision Tree:**
```
Is metric below KPI?
+-- YES -> Is sample size reached?
|   |-- NO -> Keep running. Do not judge.
|   +-- YES -> Is deliverability verified?
|       |-- NO -> Fix deliverability first. Retest.
|       +-- YES -> Use KPI Table to identify stimulus to test.
|           +-- Run test with One Variable at a Time.
|               |-- Metric hits KPI -> Keep variant. Make it DNA.
|               +-- Metric stays below KPI -> Different variable needed.
+-- NO -> Do not touch it. Scale it. Move to next bottleneck.
```

**BrightKidCo Applicability:**
- Subject line testing: Curiosity gap ("The sensory tool OTs don't want you to miss") vs. direct benefit ("20% off weighted blankets")
- Cart discount timing: Test 10% in Email 1 vs. Email 3 for high-AOV sensory products
- Welcome flow: Test 3-email vs. 5-email series (parents need more education on sensory products)
- Stimulus hypoesthesia risk: Parent audiences may fatigue on "sensory" messaging -- rotate educational vs. product-focused content

---

#### 2. analytics-performance-benchmarks-reporting

**Core Framework: Complete Benchmark Reference**

Sourced from Klaviyo 2026 data (183,000+ accounts) and BS&Co portfolio (14 brands, 7.97M emails). The single most important stat: **Flows generate 41% of total email revenue from just 5.3% of sends.**

**Key Rules and Benchmarks:**

Flow Concentration:
- Top 10% flow programs generate $7.79/recipient
- Industry median flow RPR: $1.58, campaign RPR: $0.06 (28x gap)
- Flow click rate: 5.58% vs campaign: 1.69% (3.3x)
- 48% of flow-driven revenue from NEW buyers

Per-Flow Benchmarks:

| Flow Type | Open Rate | Top Quartile | Conversion | Flow RPR |
|---|---|---|---|---|
| Welcome (Email 1) | 40-55% | 60-70% | 3-8% | $2.50-$4.00 |
| Abandoned Checkout (Email 1) | 35-45% | 50-60% | 5-8% recovery | $3.00-$6.00 |
| Browse Abandonment | 20-30% | 35-50% | 1-3% | $0.80-$2.00 |
| Post-Purchase (Email 1) | 45-55% | 60-70% | Low direct, high LTV | $1.00-$3.00 |
| Win-Back (Email 1) | 10-20% | 25-35% | 2-5% | $0.50-$1.50 |

Campaign Benchmarks:

| Metric | Poor | Average | Good | Excellent |
|---|---|---|---|---|
| Open Rate | <20% | 30-38% | 38-50% | >50% |
| Click Rate | <0.5% | 1.29% | 2-4% | >5% |
| Placed Order Rate | <0.03% | 0.05-0.10% | 0.10-0.25% | >0.25% |
| RPR | <$0.03 | $0.06-$0.15 | $0.15-$0.50 | >$0.50 |
| Unsub Rate | >0.5% | 0.10-0.20% | <0.10% | <0.05% |

Flow Multiplier Benchmarks:
- Under 5x: Severely underpowered flows
- 5-10x: Below median, clear opportunity
- 10-20x: Median range, reasonable program
- 20-30x: Above median, strong program
- 30x+: Top tier
- Portfolio median: 16.4x

Revenue Attribution:
- <10%: Broken/neglected
- 15-20%: Average
- 25-30%: Good (industry average 2026: 27%)
- 35-45%: Top tier

AI Recommendations Impact:
- Average click rate with AI: 3.75% (vs 1.69% without)
- Top performer: 8.79%
- Estimated flow RPR improvement: 20-40%

SMS Benchmarks:
- Open rate: 95-98% vs email 30-45%
- Click rate: 19-36% vs email 1.29-5.58%
- Email + SMS generates 20-30% more revenue per recipient

**Reporting Cadence:**
- Weekly: Email Scorecard (every Monday)
- Monthly: Deep analysis (first week of month)
- Quarterly: QBR (strategic trajectory)

**BrightKidCo Applicability:**
- Flow multiplier target: 16x+ (industry median)
- Welcome flow RPR target: $2.50-$4.00 (parents need education, higher engagement expected)
- Revenue attribution target: 27%+ (well-managed brand benchmark)
- AI product recommendations: Critical for BrightKidCo's large SKU catalog (sensory toys, tools, blankets)
- SMS opportunity: High-AOV products ($75+) with parent audience = strong SMS conversion potential

---

#### 3. analytics-program-diagnostics-optimization

**Core Framework: 3-Level Diagnostic Framework**

Diagnose in order: Level 1 (Flows -- highest ROI) -> Level 2 (Campaigns) -> Level 3 (Infrastructure). Never jump to campaign optimization if flows are broken.

**Key Rules:**
- Flow multiplier below 10x = start with flows
- 5 Universal Klaviyo Gaps (found in ~100 account audits): Extended ID not enabled, attribution windows misconfigured, mobile sign-up friction, missing high-intent flows (price-drop + low-inventory), BIMI not configured
- Campaign frequency: 3-4x/week optimal; >5x/week = fatigue
- Content mix: 30% sales/promotional, 50% educational/value, 20% brand/personality
- One email, one topic rule -- customers scan for 3-5 seconds

**Flow Diagnostic Decision Tree:**
```
Flow multiplier below 10x?
+-- YES -> Missing high-intent flows?
|   |-- YES -> Build missing flows first (highest ROI)
|   +-- NO -> Optimize existing flows
|       |-- Welcome RPR below $2.50? -> Add offer in Email 1, split subs vs buyers
|       |-- Cart recovery below 8%? -> Add discount, increase emails, add urgency
|       |-- Post-purchase repeat rate low? -> Add cross-sell, loyalty mention
|       +-- Browse abandonment inactive? -> Enable it ($0.80-$2.00 RPR easy win)
+-- NO -> Move to Level 2 (Campaign Diagnostics)
```

**Campaign Diagnostic:**
- Segmentation health: 30-Day Engaged (control), 60-Day (main), 90-Day (wider), VIP (exclusive), Non-Purchaser (conversion)
- Always exclude: hard bounces, unsubscribes, spam complainers, 120+ day non-openers

**Iteration Protocol (3 Phases):**
- Phase 1 (Weeks 1-4): Cart discount depth, welcome email count, subject line formula, send day
- Phase 2 (Weeks 5-12): Welcome offer timing, post-purchase cross-sell, body copy framing, browse abandonment
- Phase 3 (Weeks 12+): AI recs, segment-based optimization, winback offer, preview text

**Program-Level Decision Tree:**
```
Email revenue attribution?
+-- <15% -> Fix deliverability first, then diagnose flows
+-- 15-25% -> Diagnose flows (multiplier below 10x? build/optimize)
+-- 25-35% -> Campaign optimization (frequency, content mix, segmentation)
+-- 35%+ -> Advanced optimization (AI recs, technical gaps, SMS)
```

**BrightKidCo Applicability:**
- Flow multiplier diagnosis: Check if sensory product flows are generating 16x+ RPR vs campaigns
- Content mix: 50% educational (sensory integration tips, OT advice), 30% promotional (product offers), 20% brand (parent testimonials, founder story)
- High-intent flows missing: Price-drop alerts for sensory equipment, low-inventory alerts for popular items
- Cohort analysis: Track OT-referred vs self-discovered parents separately

---

#### 4. copywriting-body-copy-frameworks

**Core Framework: 4 Body Copy Frameworks + CTA Optimization**

**PAS (Problem-Agitate-Solve):** Most reliable for e-commerce. Mirror buying decisions: recognize problem -> emotional pain -> desire solution.
- Best for: Product-focused emails, abandoned cart, replenishment reminders

**AIDA (Attention-Interest-Desire-Action):** Classic funnel adapted for email.
- Best for: Product launches, bestseller campaigns, blog/newsletter with commercial angle

**BAB (Before-After-Bridge):** Shows transformation. Best for aspirational/lifestyle brands.
- Best for: Lifestyle brands, product education, testimonial-driven emails

**Storytelling Arc (Hook -> Conflict -> Resolution -> CTA):** Most emotionally engaging.
- Best for: Founder stories, customer success stories, brand-building emails

**"So What?" Test:** After every sentence, ask "So what?" -- if it doesn't inform, build desire, overcome objection, create urgency, or establish credibility, cut it.

**CTA Formula:** Action Verb + Benefit + (Optional: Urgency/Context)
- "Shop the Sale -- 30% Off Ends Tonight"
- One primary CTA per email. Max 30 characters for buttons. Min 44px tap target.
- First-person CTAs ("Claim My Discount") can outperform "Claim Your Discount"

**Email Length Rules:**
- Short-form (50-150 words): Flash sales, abandoned cart, transactional, mobile-first
- Long-form (200-500+ words): Welcome flow, founder stories, product education, high-ticket
- Decision factor: <$50 = short, >$50 = long; high frequency = short, low frequency = long

**Scannability:** Short paragraphs (1-3 sentences), bullets, bold key phrases, white space. "Bold Reading Path" technique -- bold text alone should tell the story.

**BrightKidCo Applicability:**
- PAS for sensory products: Problem (child struggling with sensory processing), Agitate (impact on daily life, school, sleep), Solve (BrightKidCo's therapeutic tools)
- AIDA for product launches: New sensory tools with OT endorsements
- Long-form for high-ticket items ($100+ sensory equipment), short-form for accessories
- CTA examples: "Find the Right Sensory Tool for Your Child", "Shop OT-Recommended Products"

---

#### 5. copywriting-brand-voice-storytelling

**Core Framework: Brand Voice Definition + Storytelling + Content Philosophy**

**Voice vs Tone:** Voice = consistent personality (never changes). Tone = emotional expression in context (changes by situation).

**Voice Matrix (4 Axes):**
1. Formal vs Casual
2. Serious vs Playful
3. Respectful vs Irreverent
4. Practical vs Aspirational

**Founder Story Arc:** Before -> Breaking Point -> Struggle -> Breakthrough -> Mission
- Rules: Be honest, make founder relatable (not heroic), connect struggle to customer need, include one specific memorable detail

**Customer Story Framework:** Situation -> Problem -> Discovery -> Experience -> Result -> Quote

**80/20 Rule:** 8 of 10 emails should provide value (education, entertainment, inspiration, community). 2 should directly promote.

**Content Pillars:** 3-5 core topics the brand "owns." Every email maps to at least one pillar.

**Objection Handling in Copy:**
- Price: Break down cost-per-use, compare alternatives
- Trust: Guarantees, testimonials, certifications
- Timing: Create urgency, emphasize opportunity cost of delay
- Commitment fear: Free trials, samples, easy returns

**Segment Voice Adaptation:**
- VIP: Exclusive, warm, personalized
- New subscribers: Educational, value-first, lower pressure
- Lapsed: Empathetic, offer-centered, humble
- Abandoned cart: Reminder + gentle urgency, personal

**"Reply to This Email" Strategy:** Replies are the strongest positive engagement signal for mailbox providers. Encourage replies with questions, help offers, feedback requests.

**BrightKidCo Applicability:**
- Voice: Practical + empathetic (parent-focused), not clinical or corporate
- Founder story: Why the founder created sensory products (personal connection to sensory processing)
- Content pillars: (1) Sensory education, (2) OT tips and routines, (3) Product deep-dives, (4) Parent success stories, (5) Child development science
- Objection handling: Price (cost-per-use over child's development), Trust (OT endorsements, clinical backing), "Will it work for my child?" (testimonials from parents with similar challenges)

---

#### 6. copywriting-sms-companion

**Core Framework: SMS as Urgency Multiplier**

SMS is not "email in a smaller format." It's the highest-engagement channel (90%+ open rate, 3-min average response) but most intrusive.

**When to Use SMS:**
- Flash sales (short window), shipping/delivery updates, abandoned cart escalation (Email 1-3 didn't convert), VIP exclusive launches, restock alerts, appointment/event reminders

**When NOT to Use SMS:**
- Brand storytelling, educational content, newsletters, post-purchase nurture, product catalog browsing, transactional receipts

**Character Limits:**
- Standard GSM-7: 160 characters (1 segment)
- Unicode triggered by: emojis, curly quotes, smart apostrophes, en/em dashes, special characters
- Keep under 160 chars / 1 segment always

**160-Character Formula:** [Hook/Context 15-30 chars] + [Value/Offer 60-80 chars] + [CTA/URL 30-50 chars] = ~150-160 chars

**5 SMS Templates:**
1. Flash Sale: `[OFFER] ends [TIMEFRAME]. Code [CODE] at checkout. Shop now: [URL]`
2. Abandoned Cart: `Hey [name]! Your [PRODUCT] is still waiting. Complete your order: [URL]`
3. Launch Alert: `Just dropped: [PRODUCT NAME]. [BENEFIT]. Shop now: [URL]`
4. Back-in-Stock: `[PRODUCT] is back! Last time it sold out in [TIME]. Don't wait: [URL]`
5. VIP Exclusive: `[Name], you're invited: [EXCLUSIVE OFFER]. Early access ends [TIMEFRAME]. [URL]`

**Compliance (TCPA):**
- Explicit written consent required (phone number alone is NOT consent)
- "Reply STOP" must work -- process opt-outs immediately
- Quiet hours: 9 PM - 8 AM (recipient's local timezone)
- Frequency cap: 4-8 SMS/month/subscriber
- TCPA violations: $500-$1,500 per message

**Coordination Rules:**
- SMS never sends before email in the same campaign
- Different copy, same core message
- Complement, not cannibalize

**BrightKidCo Applicability:**
- Restock alerts for popular sensory tools (limited inventory)
- Flash sale SMS for seasonal promotions (back-to-school sensory kits)
- Cart abandonment escalation (high-AOV items worth the SMS cost)
- VIP early access for new product drops
- Keep under 160 chars, no emojis (avoid Unicode cost), link at end

---

#### 7. copywriting-subject-line-engineering

**Core Framework: 7 Subject Line Formulas**

1. **Curiosity Gap:** Information void the reader must close. "The one product our CEO couldn't stop talking about"
2. **Direct Benefit:** States value proposition clearly. "Get 30% off your next order"
3. **Urgency/Scarcity:** FOMO via limited availability. "Only 3 left in stock"
4. **Personalization:** Uses subscriber data. "[Name], your cart is waiting"
5. **Question:** Prompts mental response. "Still thinking it over?"
6. **How-To:** Positions as valuable education. "How to double your email revenue"
7. **Social Proof:** Leverages others' behavior. "10,000 people bought this last week"

**Key Rules:**
- 47% of recipients open based on subject line alone
- 69% report spam based solely on subject line
- Mobile truncates at ~30-40 characters
- Sweet spot: 30-50 characters (including spaces)
- Put most compelling info in first 30 characters ("inverted pyramid rule")
- Preview text: 24% of opens influenced by it. Mobile shows ~30-50 chars. Never repeat subject line.

**Emoji Strategy:**
- Can boost open rates 2-5% when used appropriately
- Use for: Flash sales, celebrations, product categories
- Avoid for: B2B, luxury, transactional, high-sensitivity sends
- Max 2 emojis per subject line. Test on Gmail + Outlook + iOS.

**Spam Trigger Words to Avoid:**
- ALL CAPS: FREE, ACT NOW, LIMITED TIME, BUY NOW, CLICK HERE
- Punctuation: Multiple exclamation/question marks, dollar signs
- Safe alternatives: "On us" instead of "FREE", "Shop the collection" instead of "BUY NOW"

**A/B Testing Minimums:**

| Segment Size | Test % | Min Per Variant |
|---|---|---|
| <5,000 | 50% | 500 |
| 5,000-50,000 | 20-30% | 1,500 |
| 50,000-500,000 | 10-15% | 5,000 |
| 500,000+ | 5-10% | 10,000 |

**BrightKidCo Applicability:**
- Curiosity: "The sensory tool that changed everything for our family"
- Direct benefit: "OT-recommended weighted blankets -- 20% off this week"
- Social proof: "Join 5,000+ parents who found the right sensory tool"
- Personalization: "[Name], we found sensory products for [Child's Age Group]"
- Avoid "FREE" and "GUARANTEED" -- use "Complimentary" and "Backed by our promise"
- Preview text: Extend the subject line -- "Your child's sensory needs are unique. So are our solutions."

---

#### 8. segmentation-list-health

**Core Framework: List Health Monitoring and Data Quality**

The email list is a living asset that trends toward decay without systematic monitoring.

**6 Key Metrics:**

1. **List Growth Rate:** (New Subs / Total List) x 100
   - >5%/month = Excellent, 2-5% = Good, 1-2% = Fair, 0-1% = Weak, Negative = Critical

2. **List Churn Rate:** Components = Unsubscribes (<0.2%/campaign), Hard Bounces (<0.5%), Spam Complaints (<0.01%), Inactivity (180+ days)
   - <1%/month = Excellent, 1-2% = Good, 2-3% = Fair, >3% = Warning

3. **Net Growth Rate:** New Subs - (Unsubs + Bounces + Spam + Suppressed)
   - >3%/month = Excellent, 1-3% = Good, 0-1% = Fair, Negative = Critical

4. **Engagement Velocity:** Rolling 30-day comparison of open/click rates
   - Direction matters more than absolute rate

5. **Revenue Per Subscriber (Monthly):**
   - >$1.00 = Excellent, $0.50-$1.00 = Good, $0.20-$0.50 = Fair, <$0.20 = Weak

6. **Data Quality Checks:**
   - Duplicate emails: 0 target
   - Invalid emails (hard bounces): <1% of total list
   - Incomplete profiles (missing names): <10%
   - Stale data (12+ months, no engagement): <5%

**Suppression Logic:**
- Immediate suppression: Unsubscribed, hard bounced, spam complainers, bot profiles
- Sunset process: 90 days no engagement -> winback -> 120-180 days -> sunset flow -> suppress

**Monthly List Health Ritual (8 Steps, ~90 min):**
1. Calculate growth metrics (15 min)
2. Calculate churn metrics (15 min)
3. Calculate net growth (5 min)
4. Check engagement velocity (10 min)
5. Calculate revenue per subscriber (5 min)
6. Run data quality checks (15 min)
7. Review suppression lists (5 min)
8. Generate summary and action items (10 min)

**BrightKidCo Applicability:**
- Growth rate target: 2-5%/month (parent communities have strong organic growth potential)
- Revenue per subscriber target: $0.50-$1.00/month (high-AOV products)
- Stale data risk: Parents of children who age out of products become stale -- segment by child's age
- Data quality: Collect child's age at signup for personalization
- Suppression: Parents whose children have aged out should be sunset gracefully with "next stage" messaging

---

#### 9. segmentation-rfm-predictive

**Core Framework: RFM Analysis + Predictive Analytics + Zero-Party Data**

RFM scores every customer on 3 dimensions (1-5 scale each): Recency (how recently purchased), Frequency (how often), Monetary (how much spent). 125 combinations grouped into 11 actionable personas.

**11 RFM Personas:**

| Persona | Pattern | % of Customers | Strategy |
|---|---|---|---|
| Champions | R=5, F=5, M=5 | 2-5% | Reward, early access, VIP, referrals |
| Loyal Customers | R=4-5, F=4-5, M=3-5 | 8-15% | Upsell, cross-sell, reviews, referrals |
| Potential Loyalists | R=4-5, F=2-3, M=3-5 | 10-15% | Convert to regular buyers, loyalty program |
| New Customers | R=5, F=1, M=1-5 | 10-20% | Onboard, educate, build relationship |
| Promising | R=3-4, F=1, M=1-5 | 10-15% | Nurture with education, brand affinity |
| Need Attention | R=3, F=3, M=3 | 5-10% | Re-engage with limited-time offers |
| About to Sleep | R=2-3, F=2-3, M=2-3 | 5-10% | Winback with small discounts |
| At Risk | R=2, F=3-5, M=3-5 | 5-10% | Personalized outreach (high-value losing engagement) |
| Cannot Lose Them | R=1-2, F=5, M=5 | 1-3% | Highest priority winback, every channel |
| Hibernating | R=1-2, F=2-3, M=2-3 | 5-10% | Automated winback, one final offer before sunset |
| Lost | R=1, F=1, M=1 | 10-20% | Suppress or sunset. Only re-engage on opt-in. |

**Klaviyo Predictive Analytics:**
- **Predicted CLV:** Top 10% = VIP perks; Mid 50-80% = upsell; Bottom 50% = automated flows only
- **Churn Risk Score (1-5):** 1-2 = normal sends; 3 = reduce frequency; 4 = winback + incentive; 5 = immediate intervention
- **Next Purchase Date:** Within 7 days = send immediately; Within 30 days = prepare campaign; 30+ days = hold

**High-Value Targeting Combos:**
- High CLV + Low Engagement = Winback Priority
- High Churn Risk + Recent Purchase = Retention Push
- Low CLV + High Frequency = Upsell Opportunity (buying often but spending little)

**Zero-Party Data:** Information customers intentionally share (quiz results, preferences, surveys, post-purchase feedback). Most valuable data type.

**BrightKidCo Applicability:**
- Champions: Parents who buy multiple products across age stages -- reward with early access to new developmental tools
- At Risk: High-spending parents who stopped engaging -- their child may have aged out or found alternatives
- Cannot Lose Them: OTs or therapists who buy in bulk for their practice
- Zero-party data: Collect child's age, sensory needs, OT involvement, diagnosis context via quiz
- Predicted CLV: Parents with children ages 2-8 have highest CLV (longest product lifecycle)
- RFM automation: Update scores when parents buy for different children (frequency boost)

---

#### 10. segmentation-strategy-framework

**Core Framework: Five-Layer Segmentation Strategy**

Segmentation is the single highest-leverage action in email marketing -- doubles revenue per send vs. broadcast.

**Layer 1: Engagement-Based (The Backbone)**
- Engaged 30 Days: Opened OR Clicked in last 30 days (20-35% of list)
- Engaged 60 Days: Opened OR Clicked in last 60 days
- Engaged 90 Days: Opened OR Clicked in last 90 days (40-55% of list)
- Engaged 180 Days: Opened OR Clicked in last 180 days
- Unengaged 180+ Days: 0 opens AND 0 clicks in 180 days (<20% of list)

**Layer 2: Value-Based**
- VIP (Top 10% by Revenue): 8-12% of list -- exclusive perks, early access, minimum discount
- High AOV ($150+): 5-15% -- premium positioning, quality-over-quantity
- Frequent Buyers (3+ Orders): 10-20% -- loyalty recognition, referral incentives
- One-Time Buyers: 15-30% -- winback targeting, second-purchase conversion
- At-Risk (declining engagement): 5-15% -- reduced frequency, curiosity-gap subjects

**Layer 3: Behavioral (Highest-Converting)**
- Viewed Product (7 days, no purchase): 3-10% of list
- Added to Cart (24h, no purchase): 1-5%
- Reached Checkout (24h, no purchase): 0.5-2%
- Purchased Specific Product: Varies by catalog
- Browsed Collection (7 days, no purchase): Varies

**Layer 4: Demographic**
- Location (country, state, city): For localized offers
- Gender: Only if brand has gender-specific lines
- Age Range: Birthday flows, life-stage campaigns

**Layer 5: Purchase History**
- First-Time Buyers (30 days): 5-15% -- onboarding, education, second-purchase
- Repeat Buyers (2+): 15-30% -- loyalty, cross-sell, referral
- Lapsed (90+ days, no purchase): 10-20% -- escalating incentive winback
- Subscription Customers: Account management, not promotional

**Segment Overlap Rules:**
- VIP + Frequent Buyer = Highest priority, never aggressive discounts
- At-Risk + High CLV = VIP winback flow (not standard sunset)
- Unengaged + One-Time Buyer = Standard sunset timeline
- All campaigns exclude: unsub, bounced, spam, 180+ unengaged, bots

**BrightKidCo Applicability:**
- Engagement: 30-day engaged = active parents; 90-day = seasonal buyers; 180+ = likely aged out
- Value: VIP = OTs/therapists who order in bulk; Frequent = parents buying across age stages
- Behavioral: Viewed weighted blanket but didn't buy -> targeted follow-up with OT endorsement
- Demographic: Location for shipping offers; child's age for product relevance
- Purchase history: First-time = starter kits; Repeat = advanced tools; Lapsed = "next developmental stage" products

---

#### 11. strategy-campaign-calendar

**Core Framework: Annual Email Calendar + Monthly Planning Ritual**

Email is the highest-ROI channel, contributing 20-40% of total revenue on near-zero marginal cost.

**Quarterly Calendar Structure:**
- Q1 (Jan-Mar): Reset and Rebuild -- post-holiday recovery, list re-engagement, foundation building
- Q2 (Apr-Jun): Growth and Engagement -- seasonal gifting, mid-year review, list growth
- Q3 (Jul-Sep): Preparation and Pre-Season -- back-to-school, list cleaning, BFCM groundwork
- Q4 (Oct-Dec): BFCM and Holiday -- maximum revenue capture, holiday gifting, seasonal urgency

**Campaign Frequency by Segment:**

| Segment | Max Emails/Week |
|---|---|
| VIPs | 3-5 |
| Engaged 30-60 days | 2-3 |
| Engaged 90+ days | 1-2 |
| New subscribers | 2-3 (welcome flow + educational) |
| Recent buyers | 2-3 (post-purchase + cross-sell) |
| Lapsed | 1 maximum |
| Unengaged | Sunset only |

**Offer Strategy by Segment:**

| Segment | Typical Discount |
|---|---|
| VIPs | 20-40% or exclusive products |
| Existing customers | 15-25% |
| New subscribers | 10-20% (welcome flow) |
| Lapsed | 20-30% (winback) |
| Abandoned cart | 10-15% (Email 2-3, not first) |
| BFCM/holiday | 30-50% sitewide |

**Revenue Forecasting:**
- Email Revenue Target = Total Revenue Goal x Email Attribution %
- Per-campaign: Segment Size x Open Rate x Click Rate x Conversion Rate x AOV
- Flows = baseline (40-60%), Campaigns = variable (40-60%)

**Content Philosophy:**
- 50% promotional, 30% educational, 15% engagement, 5% brand storytelling
- Monthly planning ritual: Last week of month, 60-minute block

**BrightKidCo Applicability:**
- Q3 (Jul-Sep): Back-to-school = peak season for sensory products (OT referrals spike)
- Q4: Holiday gifting for sensory tools -- parents buy for children with sensory needs
- Frequency: 2-3x/week for engaged parents (they value educational content)
- Offer strategy: New subscribers get 10-15% starter kit discount; VIP OTs get 20-40% bulk pricing
- Revenue forecasting: Flows baseline + seasonal campaign spikes (back-to-school, holiday)
- Content mix: 50% educational (sensory tips, OT advice), 30% promotional, 15% parent community, 5% founder story

---

#### 12. strategy-client-reviews

**Core Framework: QBR + Monthly Reporting + Competitive Analysis + Client Retention**

**QBR Structure (60 min, every 90 days):**
1. Performance Summary (15 min) -- metrics dashboard with quarter-over-quarter comparison
2. What Worked / What Didn't (15 min) -- top 3 and bottom 3 campaigns/flows
3. Strategic Recommendations (15 min) -- 3-5 recommendations with ROI estimates
4. Next Quarter's Plan (15 min) -- calendar, revenue forecast, mutual commitments

**Monthly Report Format (first 5 business days):**
1. Executive Summary (1 paragraph)
2. Key Metrics Dashboard (revenue, sends, opens, clicks, unsubs, list growth)
3. Campaign Highlights (top 3 by revenue + bottom 1)
4. Flow Performance Review (per-flow revenue, conversion, notes)
5. List Health Snapshot (active %, at-risk %, unengaged %, health score)
6. Next Month Preview

**Weekly Update (every Friday, 200-300 words):**
- Sent campaigns with revenue
- Testing/optimization work
- Upcoming next week
- Quick wins
- Items needing client input

**Competitive Analysis:**
- Monthly: Quick scan of 3 competitors (subject lines, frequency, offers)
- Quarterly: Deep-dive of 5 competitors (full audit)
- Gap analysis: What competitors do vs. what we do vs. opportunity

**Client Health Scoring:**
- Green (healthy): QBR attendance, responsive, improving metrics, 8+/10 satisfaction
- Yellow (at risk): Passive attendance, slow response, flat metrics, 5-7/10
- Red (churning): Misses QBRs, slow response, declining metrics, <5/10

**Upsell/Expansion:**
- Month 1-3: Focus on core results, no upsell
- QBR 1: Mention 1-2 complementary services
- Month 6: Propose one new service as pilot
- QBR 2: Present pilot results + next expansion

**BrightKidCo Applicability:**
- QBR focus: Flow multiplier trend, back-to-school performance, parent engagement metrics
- Monthly report: Include child-age-segmented performance (different age groups = different products)
- Competitive analysis: Track other sensory product brands' email strategies
- Client retention: Proactive communication about seasonal opportunities (back-to-school, holiday)

---

#### 13. strategy-customer-journey

**Core Framework: 6-Stage Customer Journey Map**

Journey Arc: Anonymous Visitor -> Email Subscriber -> First Purchase -> Repeat Buyer -> VIP -> Advocate

**Stage Breakdown:**

| Stage | Goal | Key Metric | Email Touchpoints |
|---|---|---|---|
| Anonymous Visitor | Capture email | Signup rate 2-5% | Popup, exit-intent, landing page |
| Email Subscriber | First purchase (7-30 days) | Welcome conversion 5-15% | Welcome flow, browse abandonment, educational |
| First Purchase | Reduce remorse, collect review, drive 2nd | Repeat rate 15-25% (60 days) | Post-purchase, review request, cross-sell |
| Repeat Buyer | Increase frequency, move to VIP | Orders per 90 days | Replenishment, cross-sell, loyalty, VIP invite |
| VIP | Retain, increase share of wallet | 12-month retention 90%+ | Early access, exclusive offers, surprise and delight |
| Advocate | Amplify word-of-mouth | Referral conversion rate | Referral program, UGC, community invites |

**Journey Acceleration Tactics:**
- Speed up first purchase: Offer-first welcome, social proof in pre-purchase, urgency in cart, mobile-optimized welcome
- Increase repeat rate: Post-purchase cross-sell (10-20% lift), replenishment automation (20-40% for consumables), loyalty enrollment (15-30% higher frequency)
- Move up value ladder: Subscriber -> $50-100 AOV -> Repeat -> $75-150 AOV -> VIP -> $500+ LTV -> Advocate -> $1,000+ LTV + referrals

**VIP Strategy:**
- Qualification: Top 10% CLTV, 3+ orders in 6 months, 60%+ open rate, 1.5x+ brand AOV, $500+ lifetime spend
- Benefits: Early access, VIP-only products, free shipping, birthday gifts, double points, invite-only events, surprise gifts
- Cadence: Exclusive drops 1x/week, VIP offers 1x/2 weeks, brand story 1x/month, birthday/anniversary date-based, surprise and delight ad-hoc

**Retention vs Acquisition Economics:**
- Acquisition: High cost ($30-$150 CAC), 1-3% conversion, negative margin
- Retention: Low cost (pennies), 10-40% conversion, positive margin
- Retention investment ratio: Startup = 60/40 acquisition/retention; Growth = 40/60; Mature = 20/80
- 5% retention increase = 25-95% more profit (Bain and Co)

**BrightKidCo Applicability:**
- Journey has unique element: child's age drives product lifecycle
- Awareness: Parents discover via OT recommendations, social media, search
- Consideration: High-consideration purchase (sensory products for children)
- Purchase: First purchase often a gift or starter product
- Retention: Child ages -> need new products -> natural replenishment cycle
- Advocacy: Parents are passionate advocates when products work -- high referral potential
- Custom journey stages: "OT-referred" (higher trust, faster conversion), "Self-discovered" (needs more education), "Gift buyer" (different messaging)
- VIP: OTs and therapists who buy in bulk for practice -- highest LTV segment
- Acceleration: Age-based product recommendations speed up repeat purchases
- Retention focus: 80% retention / 20% acquisition for mature BrightKidCo program
---

## Group 4: Flows (12 skills)

---


### 1. flow-abandoned-cart

## Purpose
This SOP ensures every subscriber who adds a product to their cart — but does not proceed to checkout or complete purchase — receives a 3-email sequence designed to recover that sale. The abandoned cart flow is distinct from the abandoned checkout flow: it fires on the "Added to Cart" event rather than "Started Checkout," capturing customers earlier in the funnel. A critical distinction in the industry: approximately 90% of brands lack a proper cart abandon flow because Klaviyo's default "Abandoned Cart" flow is actually a checkout abandon flow. This SOP covers the true cart abandon flow that requires manual metric setup via a Shopify snippet.

## Pre-Flight Checklist
- [ ] **"Added to Cart" metric connected** — Requires Shopify snippet installation. Verified in Klaviyo: Analytics > Metrics
- [ ] **"Viewed Product" metric connected** — Prerequisite for connecting Added to Cart metric
- [ ] **Klaviyo admin access** — Flow creation and metric management permissions
- [ ] **Dynamic cart content block configured** — Using Split block with `{{ event.ImageURL }}`, `{{ event.Name }}`, `{{ event.Price|striptags }}`
- [ ] **Cart page URL confirmed** — e.g., `https://storename.com/cart`
- [ ] **Flow filters defined** — Re-entry window (7-15 days recommended) and exclusion filters

### Step 1: Connect the Viewed Product Metric
**Action:** Ensure "Viewed Product" metric is connected and feeding data in Klaviyo before proceeding with the Added to Cart metric.
**Tool:** Klaviyo — Analytics > Metrics
**Input:** None — verify metric exists and has recent event data
**Expected Result:** "Viewed Product" listed with timestamps and volume
**If Failed:** Follow Klaviyo's guide at https://help.klaviyo.com/hc/en-us/articles/115001396711 to connect via Shopify integration
**Undo:** N/A — verification has no side effects

### Step 2: Connect the "Added to Cart" Metric via Shopify Snippet
**Action:** Install the "Added to Cart" tracking snippet on the Shopify store to enable the metric. This is NOT automatically included in Klaviyo — it requires manual setup.
**Tool:** Shopify admin — Online Store > Themes > Edit Code > theme.liquid (or equivalent)
**Input:** The Klaviyo "Added to Cart" integration snippet (obtained from Klaviyo > Integrations > Shopify > Custom Code)
**Expected Result:** "Added to Cart" appears in Klaviyo Metrics within 24 hours with event data
**If Failed:** Verify the snippet was pasted in the correct location (before the closing `</body>` tag in theme.liquid). Check Klaviyo's JavaScript console tracking for errors. Contact Klaviyo support if the metric still does not appear after 24 hours.
**Undo:** Remove the snippet from the theme and re-save.

### Step 3: Verify the Metric is Feeding Data
**Action:** Wait 24 hours after snippet installation, then confirm data is flowing.
**Tool:** Klaviyo — Analytics > Metrics > "Added to Cart"
**Input:** None
**Expected Result:** Event count, timestamps, and associated product data visible
**If Failed:** Re-check snippet installation. Use Klaviyo's Event Feed (Analytics > Events) to look for raw "Added to Cart" events. If events exist but metric doesn't, trigger may need to be manually created.
**Undo:** N/A — verification has no side effects

### Step 4: Build the Cart Abandon Dynamic Content Block
**Action:** Create a Split block in the Klaviyo email editor for cart abandon dynamic content.
**Tool:** Klaviyo Email Editor — content blocks
**Input:**
- Create a "Split" block (not a Table block — Split is correct for cart abandon)
- Add Dynamic Image on left: `{{ event.ImageURL }}`
- Add text on right: Item name `{{ event.Name }}`, Price `{{ event.Price|striptags }}`
- Link images, text, and CTA to: `https://storename.com/cart`
**Expected Result:** A reusable content block that dynamically renders the cart item with the correct price variable format
**If Failed:** If `{{ event.Price|striptags }}` shows raw HTML, verify the filter syntax. If images don't load, check that `{{ event.ImageURL }}` returns a valid URL in preview.
**Undo:** Delete the Split block and rebuild.

### Step 5: Create the Abandoned Cart Flow
**Action:** Create a new flow triggered by "Added to Cart" metric.
**Tool:** Klaviyo — Flows > Create Flow > Create from Scratch
**Input:** Flow name: "Abandoned Cart" or client-branded equivalent
**Expected Result:** A blank flow canvas with the "Added to Cart" trigger
**If Failed:** If "Added to Cart" is not available as a trigger option, return to Step 2-3 and verify metric is connected and feeding data.
**Undo:** Delete the flow from the Flows page.

### Step 6: Apply Flow Filters
**Action:** Add exclusion filters to prevent sending to converted customers.
**Tool:** Klaviyo flow editor — trigger node > Filters
**Input:**
- Placed order 0 times since starting this flow
- Checkout started 0 times since starting this flow
- Has not been in this flow in the last X days (set X per client: 7-15 days)
**Expected Result:** Three filters displayed on the trigger node
**If Failed:** Same as Browse Abandonment filter setup — check syntax, re-save the trigger node.
**Undo:** Remove individual filters.

### Step 7: Build Email 1 — Brief Reminder (1-2 hours after trigger)
**Action:** Create the first cart abandon email as a simple reminder.
**Tool:** Klaviyo flow editor
**Input:**
- Send timing: 1-2 hours after trigger
- Goal: Drive immediate conversions with a quick, concise reminder
- Content: Quick remark addressing the abandoned items + Dynamic product section showing the cart items + Risk reversals / social proof (free shipping, guarantee, customer service mention)
**Expected Result:** Email 1 created with dynamic cart content rendering the left-behind items
**If Failed:** If the dynamic cart block shows all products incorrectly, verify the Split block configuration. The event data from "Added to Cart" fires per-item, so multiple items may require a loop or table structure — test with a multi-item cart event.
**Undo:** Delete Email 1.

**Subject Line Ideas (A/B test):**
- "Whatcha got there?"
- "You left something behind…"
- "Forget something?"
- "See something you liked?"
- "Is your wifi doing alright?"

### Step 8: Build Email 2 — Founder Nudge / Education (1 day after Email 1)
**Action:** Create the second email with a personal touch from the founder.
**Tool:** Klaviyo flow editor
**Input:**
- Send timing: 1 day after Email 1
- Goal: Provide a second reminder with a personalized founder note
- Content: Remark addressing their cart items + Offer help/support for questions + Dynamic cart section + Brand story reminder
**Expected Result:** Email 2 created with founder/personal angle and dynamic cart block
**If Failed:** If the email feels generic without a founder name available, use "Our team" framing instead — "Our team noticed your cart and wanted to check in…"
**Undo:** Delete Email 2.

**Subject Line Ideas:**
- "This would look good in your mailbox."
- "You have great taste."
- "Quick heads up"
- "Everything cool with your cart?"
- "Your order is waiting…"

### Step 9: Build Email 3 — Urgency & USPs (1 day after Email 2)
**Action:** Create the third email combining brand USPs with urgency.
**Tool:** Klaviyo flow editor
**Input:**
- Send timing: 1 day after Email 2
- Goal: Provide additional information on brand USPs and introduce urgency
- Content: Brand information highlighting unique selling propositions + Urgency regarding cart expiration or limited stock + Dynamic cart section
**Expected Result:** Email 3 created with USP messaging and urgency-driven call to action
**If Failed:** If urgency messaging lacks credibility without real inventory constraints, use cart expiration framing: "Your cart is being held but won't be available forever."
**Undo:** Delete Email 3.

**Subject Line Ideas:**
- "Here's why you loved it"
- "There's more to what you saw"
- "Running out of time"
- "Any interest left?"

### Step 10: Preview and Test All Emails
**Action:** Send test emails and preview with real subscriber profiles that have recent Added to Cart events.
**Tool:** Klaviyo email editor — Preview tab + "Send Test"
**Input:** A subscriber profile with recent "Added to Cart" events
**Expected Result:** All dynamic content renders correctly. Price field shows clean numbers (no HTML). Images load. Links point to `website.com/cart`.
**If Failed:** If `{{ event.Price|striptags }}` still shows HTML, use `{{ event.Price|default:'' }}` as fallback. Check that the cart link URL is correct and accessible.
**Undo:** Edit individual emails and re-test.

### Step 11: Review Flow Conditions
**Action:** Audit the full flow structure before activation.
**Tool:** Klaviyo flow editor
**Input:** Verify:
- Trigger: Added to Cart
- Filters: Placed order 0, Checkout started 0, Not in flow last X days
- Timing: Email 1 at 1-2 hours, Email 2 at +1 day, Email 3 at +1 day
**Expected Result:** Clean flow structure with no missing nodes or broken connections
**If Failed:** Correct any issues found.
**Undo:** N/A — review has no side effects.

### Step 12: Activate the Flow
**Action:** Click "Review and Start" and confirm activation.
**Tool:** Klaviyo flow editor — "Review and Start" button
**Input:** Final confirmation dialog
**Expected Result:** Flow status changes to "Active"
**If Failed:** Check for validation errors — common issues: empty email body, broken dynamic block, missing required content in templates.
**Undo:** Click "Stop Flow" in the flow editor.

### Decision: Re-entry window duration
**Check:** Product type and average browsing frequency
- **Low-cost/impulse products (< $50):** 7-day re-entry window
- **Mid-range products ($50-$150):** 10-day re-entry window
- **High-consideration products (> $150):** 15-day re-entry window

### Decision: 3-email core only or extended sequence
**Check:** Whether to extend to the full abandonment sequence (combined cart & checkout flow described in source material)
**Note:** This SOP covers the 3-email cart abandon flow only. For the abandoned checkout flow (Started Checkout trigger, 8-email sequence with first-time vs returning buyer branches), refer to the Abandoned Checkout SOP.
- **Client has both Added to Cart AND Started Checkout:** Build cart flow (this SOP) plus separate checkout abandon flow
- **Client only has Added to Cart metric:** Use this 3-email flow as the primary abandonment recovery

## Completion Checklist
- [ ] "Added to Cart" metric connected and feeding data via Shopify snippet
- [ ] "Viewed Product" metric verified as connected (prerequisite)
- [ ] Dynamic cart content Split block created with correct price variable
- [ ] Cart page URL confirmed and verified accessible
- [ ] Flow created with Added to Cart trigger
- [ ] All 3 exclusion filters applied
- [ ] Email 1 (Brief Reminder) built with dynamic cart block — send at 1-2 hours
- [ ] Email 2 (Founder Nudge) built — send at 1 day after Email 1
- [ ] Email 3 (Urgency & USPs) built — send at 1 day after Email 2
- [ ] All emails tested with real subscriber profiles
- [ ] Price variable tested to confirm no HTML artifacts
- [ ] Links verified — all pointing to website.com/cart
- [ ] Flow activated and status "Active"
- [ ] Re-entry window set to appropriate value (7-15 days)
- [ ] 30-day performance monitoring scheduled

## Error Recovery
| Error | Symptom | Root Cause | Fix |
|-------|---------|------------|-----|
| Price shows HTML tags | Price displays as `<span class=money>$45.00</span>` | `{{ event.Price }}` includes HTML formatting — the `striptags` filter is not applied or misspelled | Ensure price variable reads `{{ event.Price|striptags }}`. Test in preview. |
| "Added to Cart" not available as trigger | Metric missing from Klaviyo trigger list | Shopify snippet not installed or not firing | Re-install the snippet. Test by adding a product to cart on the live store, then check Klaviyo Event Feed within 30 minutes. |
| Zero flow volume after 48 hours | No profiles entering the flow | Filter blocking all traffic, or trigger metric not actually connected | Temporarily remove exclusion filters one by one to isolate the blocking filter. Check if "Added to Cart" metric has event data. |
| Dynamic images not rendering | Placeholder or broken image in preview | `{{ event.ImageURL }}` not populated by the event | Check the "Added to Cart" event properties in Klaviyo > Analytics > Events. If ImageURL is missing, the Shopify snippet may need updating. |
| Low click rate on cart link | Clicks below 3% | Cart link is incorrect or leads to an empty cart | Verify the cart URL (`website.com/cart`) works when accessed directly. Test in incognito mode. |

## Maintenance
**Review cadence:** Every 30 days — monitor flow performance metrics specifically checking the placed order rate and attributed revenue
**Update trigger:** Changes to Shopify cart page URL, Klaviyo event structure changes, Shopify theme updates that may remove the Added to Cart snippet
**Version history:**

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-04 | Initial creation from Chase Dimond / Core Email Flows source |



### 2. flow-abandoned-checkout

## Purpose
The Abandoned Checkout flow targets the highest-intent prospects in the entire ecommerce email program — customers who have initiated checkout (entered their email and/or payment details) but failed to complete the purchase. This is the deepest recovery funnel and should be treated as the most aggressive, urgent sequence in the email program. Because the customer is only a few clicks from completing the purchase, recovery rates are significantly higher than browse or cart abandonment. The flow splits between first-time buyers (who get a discount ladder) and returning buyers (who get a personal check-in without discount) at Email 6.

## Pre-Flight Checklist
- [ ] Klaviyo account with admin or manager permissions
- [ ] "Started Checkout" metric verified active and tracked from Shopify/WooCommerce via API
- [ ] NOTE: Klaviyo's default "Abandoned Cart" flow is actually checkout abandonment — confirm your metric
- [ ] Discount code(s) created for new-buyer path (Email 3 = 15% off or similar)
- [ ] Dynamic product blocks configured to show abandoned items
- [ ] Dynamic coupon code block ready (for personalized discount)
- [ ] Flow re-entry filter: "Has not been in flow in last 5 days"
- [ ] First-time buyer vs returning buyer segmentation ready (Placed Order count)
- [ ] Timer/countdown imagery or urgency template ready for Emails 3-7
- [ ] Plain text sender identity established (founder name/photo) for Email 6a path

---

#### Step 1: Create the Abandoned Checkout Flow Trigger
**Action:** Create a new flow triggered by "Started Checkout" metric.
**Tool:** Klaviyo — Flows > Create Flow > Metric Trigger > "Started Checkout"
**Input:** Select "Started Checkout" metric
**Expected Result:** A new flow appears with "Started Checkout" as the trigger event
**If Failed:** If "Started Checkout" doesn't appear, verify Shopify/Klaviyo integration is syncing this metric. You may need to add a Shopify snippet for true cart abandonment — the checkout metric is usually native.
**Undo:** Delete the flow draft.

#### Step 2: Apply Flow Filters
**Action:** Add required flow filters.
**Tool:** Klaviyo — Flow > Filters
**Input:**
- Filter 1: "Placed Order" 0 times since starting flow (to avoid sending if they complete purchase)
- Filter 2: "Has not been in flow" in last 5 days (re-entry suppression — adjust 1-10 days based on aggressiveness)
**Expected Result:** Only genuine checkout abandoners enter the flow. Re-entries suppressed for 5 days.
**If Failed:** If customers appear in flow after purchasing, check the "Placed Order" metric — it must track "since starting flow" not "over all time."
**Undo:** Remove or adjust filters.

#### Step 3: Configure Email 1 — Immediate Urgent Reminder
**Action:** Create Email 1 sent 30 minutes to 2 hours after trigger.
**Tool:** Klaviyo — Flow > Add Time Delay (30 min) > Add Email
**Input:**
- **Subject Line:** A/B test: "Need a little reminder?" vs "RE: Your Order" vs "[First Name], looks like this is yours..."
- **Content Buckets:**
  - Clever header reminding subscriber of items left at checkout
  - Dynamic product block showing abandoned items
  - Reviews/social proof to get customer over the hurdle (2-3 short testimonials)
  - Primary CTA: "Complete Your Purchase" or "Return to Checkout"
  - Footer with reassurance (secure checkout, support contact)
- **Design:** High-level branded template
**Expected Result:** 35-50%+ open rate. Highest conversion email in the flow.
**If Failed:** Test different send times (30 min vs 1 hr vs 2 hr). A/B test subject lines aggressively.
**Undo:** Pause email node.

#### Step 4: Configure Email 2 — Reminder with USPs
**Action:** Create Email 2 sent 1 day after Email 1. Conditional: only send if no purchase yet.
**Tool:** Klaviyo — Flow > Add Time Delay (1 day) > Conditional Split (Placed Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "Your cart", "You left these behind", "Are these yours?"
- **Content Buckets:**
  - Reminder of items left at checkout (dynamic block)
  - Highlight unique qualities: free shipping, featured in [publication], vegan/cruelty-free/exclusive, etc.
  - Brand USPs (2-4 bullet points)
  - Social proof snippet
  - CTA: "Complete Order Now"
- **Design:** High-level branded template
**Expected Result:** 25-35% open rate. Subscribers reminded of value proposition.
**If Failed:** Test different USP emphasis. Ensure dynamic block is showing correct items.
**Undo:** Pause email node.

#### Step 5: Configure Email 3 — Discount Offer
**Action:** Create Email 3 sent 1 day after Email 2. Conditional: only send if no purchase yet.
**Tool:** Klaviyo — Flow > Add Time Delay (1 day) > Conditional Split (Placed Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "Last chance!", "Need a hand?", "You're cutting it close!", "10% off, just for you"
- **Content Buckets:**
  - Offer a discount to convert (15% off, free shipping, or dollar-off)
  - Cart is "expiring" messaging
  - Community element or company values
  - Dynamic coupon code block
  - CTA: "Claim Your Discount" or "Complete Purchase"
- **Design:** High-level branded template with urgency visual
**Expected Result:** Discount offers conversion lift. Expect 15-20% open rate.
**If Failed:** If discount doesn't convert, check code works. Try different offer types ($ vs %).
**Undo:** Pause email node.

#### Step 6: Configure Email 4 — Testimonials
**Action:** Create Email 4 sent 1-2 days after Email 3. Conditional: only send if no purchase yet.
**Tool:** Klaviyo — Flow > Add Time Delay (1 day) > Conditional Split (Placed Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** Star rating emoji (⭐⭐⭐⭐⭐), "Our customers love it", "Don't just take our word for it"
- **Content Buckets:**
  - 3-5 customer testimonials with photos
  - Star ratings display
  - Social proof overcoming remaining skepticism
  - Reminder items still in checkout
  - CTA: "See What Others Are Saying" → routes back to checkout
- **Design:** Testimonial-focused high-level design
**Expected Result:** Social proof converts skeptical customers.
**If Failed:** Source more compelling testimonials. Test video testimonials.
**Undo:** Pause email node.

#### Step 7: Configure Email 5 — Last Chance (Strong Urgency)
**Action:** Create Email 5 sent 2 days after Email 4. Conditional: only send if no purchase yet.
**Tool:** Klaviyo — Flow > Add Time Delay (2 days) > Conditional Split (Placed Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "Last chance to claim", "Gone tomorrow", "Your cart is expiring"
- **Content Buckets:**
  - Strong urgency messaging (cart expiring, stock running low)
  - Countdown or expiry visual
  - Bold CTA
  - Minimal text, maximum impact
  - CTA: "Save My Cart" or "Buy Now"
- **Design:** Bold, minimal urgency template
**Expected Result:** Panic/urgency converts remaining on-the-fence customers.
**If Failed:** Test stronger subject lines. Consider incremental discount if path allows.
**Undo:** Pause email node.

#### Step 8: Configure Split — First-Time vs Returning Buyer
**Action:** Add a conditional split after Email 5 based on purchase history.
**Tool:** Klaviyo — Flow > Add Conditional Split > "What someone has done" > Placed Order > 1 time or more over all time
**Input:** Split condition: Placed Order >= 1 over all time
**Expected Result:** Recipients split into two paths: past buyers (go to 6a) and new buyers (go to 6b).
**If Failed:** Check "Placed Order" metric is tracking correctly. Verify split condition logic.
**Undo:** Remove split and merge back to single path.

#### Step 9a (Past Buyers Path): Configure Email 6a — Everything Okay? (Personal)
**Action:** Send Email 6a to past buyers. Text-based, personal, no discount.
**Tool:** Klaviyo — Past Buyers Branch > Add Time Delay (2 days) > Add Email
**Input:**
- **Subject Line Ideas:** "Need a hand?", "Everything okay with your order?"
- **Content:** Text-based email from founder or support team. Friendly check-in: "Hey [name], noticed your checkout didn't go through — anything we can help with?" No discount code. No urgency. Pure personal touch.
- **Design:** Plain text
- **No discount offered** — they've already proven they'll buy at full price
**Expected Result:** Past buyers feel valued. Low-pressure recovery. 15-25% open rate.
**If Failed:** Test founder name as sender. Adjust tone.
**Undo:** Pause email node.

#### Step 9b (New Buyers Path): Configure Email 6b — Discount Opener (New Only)
**Action:** Send Email 6b to first-time buyers. Flash discount with urgency.
**Tool:** Klaviyo — New Buyers Branch > Add Time Delay (2 days) > Add Email
**Input:**
- **Subject Line Ideas:** "Here's something special", "We saved your cart — with a gift"
- **Content:** Introduce a flash discount code (higher than Email 3 offer, e.g., 20% off). Create urgency: "Your exclusive 20% off expires in 24 hours." Show their cart items with the discount applied.
- **Design:** High-level branded template
**Expected Result:** First-time buyers get the final push they need to convert.
**If Failed:** Verify discount code is valid and exclusive to this path.
**Undo:** Pause email node.

#### Step 10a (New Buyers Path): Configure Email 7 — Discount Last Chance (New Only)
**Action:** Create Email 7 for new buyers only. Extreme urgency on discount.
**Tool:** Klaviyo — New Buyers Path > Add Time Delay (1-2 days) > Conditional Split (Placed Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "Last chance for _% off", "Your discount expires tonight", "Don't let it go to waste"
- **Content:** Extreme urgency messaging. Discount is about to expire. Timer/urgency visual. Clear big CTA: "Claim Your Discount — Last Chance."
- **Design:** Bold, urgent, minimal design
**Expected Result:** The final discount push converts the last remaining new buyers.
**If Failed:** Check that discount expiration aligns with messaging.
**Undo:** Pause email node.

#### Step 11a (New Buyers Path): Configure Email 8 — What Happened? (New Only)
**Action:** Create Email 8 for new buyers. Final personal message.
**Tool:** Klaviyo — New Buyers Path > Add Time Delay (2-3 days) > Conditional Split (Placed Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "What happened?", "We missed you", "Just checking in"
- **Content:** Text-based, personal. "Hey [name], we noticed you didn't complete your purchase. We'd love to have you as a customer — reply to this email and let us know if there's anything we can help with." Low-pressure, value-focused. Include support/FAQ links.
- **Design:** Plain text
**Expected Result:** The personal touch either converts or builds brand goodwill for future purchase.
**If Failed:** Adjust for brand voice (some brands prefer more direct, others softer).
**Undo:** Pause email node.

---

#### Step 12: Send Test Emails
**Action:** Send test versions of all email variants (8 emails, split across paths) to yourself and 2 team members.
**Tool:** Klaviyo — Email Preview & Test
**Input:** Test email addresses
**Expected Result:** All emails render correctly. Dynamic product blocks show abandoned items (not empty). Discount codes render. Links point to checkout with UTM parameters.
**If Failed:** Fix broken links, missing dynamic blocks, or incorrect coupon codes.
**Undo:** Edit and re-test.

#### Step 13: Verify Flow Logic End-to-End
**Action:** Walk the full flow tree including both branches of the first-time vs returning split.
**Tool:** Klaviyo — Flow Builder
**Input:** N/A
**Expected Result:** Both paths (past buyer → Email 6a only; new buyer → Emails 6b, 7, 8) are fully connected with correct conditions. No orphan nodes.
**If Failed:** Reattach disconnected paths. Add missing conditional splits.
**Undo:** Edit nodes.

#### Step 14: Publish the Flow
**Action:** Set the Abandoned Checkout Flow to "Live."
**Tool:** Klaviyo — Flow > Status > Set to Live
**Input:** N/A
**Expected Result:** Flow begins accepting checkout abandonment events immediately.
**If Failed:** Check for Klaviyo errors (flow validation, missing metrics).
**Undo:** Set flow to Draft.

---

#### Step 15: Monitor First 14 Days
**Action:** Review analytics daily.
**Tool:** Klaviyo — Flows > [Flow Name] > Analytics
**Input:** N/A
**Expected Result:** Email 1 open rate 35-50%+. Flow placed order rate 10-15%+.
**If Failed:** Low open rates → test subject lines. Low click rates → review CTAs and copy. Low conversion → verify discount codes and checkout flow.
**Undo:** Adjust individual emails.

#### Step 16: A/B Test Send Timing
**Action:** After 30 days, test Email 1 timing (30 min vs 1 hr vs 2 hr).
**Tool:** Clone flow > adjust timing on Email 1 > compare performance
**Input:** Current timing vs test timing
**Expected Result:** Optimal send window identified for the specific audience.
**If Failed:** No winner after 30 days — keep default 1 hour.
**Undo:** Revert to original timing.

---

### Decision: Re-Entry Suppression Window
**Check:** Ratio of new entries vs re-entries to the flow
**If HIGH re-entry rate (> 10% of entries):** Extend suppression window from 5 days to 7-10 days
**If LOW conversion on re-entries (< 5%):** Extend suppression window; frequent re-sends fatigue customers
**If HIGH conversion on re-entries (> 15%):** Consider shortening suppression window to 3 days

### Decision: Discount Timing in New Buyer Path
**Check:** Conversion rate on Email 3 (first discount) vs Email 6b (second discount)
**If Email 6b converts HIGHER:** First discount was too early — move Email 3 discount to Email 4-5
**If Email 3 converts HIGHER:** Discount early works — keep structure
**If both convert LOW:** Discount amount too low — increase from 10% to 15-20%

### Decision: Past Buyers Path Depth
**Check:** Conversion rate on Email 6a (personal check-in) for past buyers
**If > 20% convert:** Keep the single email — past buyers respond to personal touch
**If < 5% convert:** Past buyers need more — add a discount offer in Email 6a or extend to 3 emails

### Decision: Abandoned Cart vs Checkout Confusion
**Check:** Klaviyo defaults to "Started Checkout" for its "Abandoned Cart" trigger
**If flow fires when customer only adds to cart (didn't reach checkout):** You need a true "Added to Cart" metric via Shopify snippet — this flow is correct for checkout abandonment
**If flow doesn't fire within 2 hours of checkout start:** Verify the "Started Checkout" metric is firing from your store's checkout page

---

## Completion Checklist
- [ ] Abandoned Checkout Flow created with metric trigger "Started Checkout"
- [ ] Flow filters applied: Placed Order 0 since starting, Not in flow last 5 days
- [ ] Email 1: Immediate reminder with dynamic product block — 30 min to 2 hr delay
- [ ] Email 2: Reminder + USPs — 1 day delay
- [ ] Email 3: Discount offer — 1 day after Email 2
- [ ] Email 4: Testimonials — 1 day after Email 3
- [ ] Email 5: Last Chance urgency — 2 days after Email 4
- [ ] Split path: First-Time vs Returning Buyer activated
- [ ] Email 6a (Past Buyers): Personal text-based check-in — no discount
- [ ] Email 6b (New Buyers): Discount opener with flash urgency — 2 days after Email 5
- [ ] Email 7 (New Only): Discount last chance — 1-2 days after Email 6b
- [ ] Email 8 (New Only): "What happened?" Personal text — 2-3 days after Email 7
- [ ] All dynamic product blocks verified with abandoned items
- [ ] Discount code(s) active and tracked
- [ ] Test emails sent across desktop, mobile, Gmail, Outlook
- [ ] Flow set to Live

---

## Error Recovery
| Error | Symptom | Root Cause | Fix |
|-------|---------|------------|-----|
| Flow fires when cart is created (not checkout) | Recipients haven't started checkout | "Started Checkout" metric not wired correctly; Klaviyo defaults to cart | Verify "Started Checkout" metric in Klaviyo > Metrics. Ensure ecommerce platform fires this event at checkout page load. |
| Dynamic products empty | Product block shows blank space | Product catalog sync issue; metric event missing product data | Reconnect Shopify/WooCommerce integration. Check that "Started Checkout" event includes product array. |
| Discount code not applying | Customers report invalid code | Code expired or not synced to Klaviyo Promotions | Verify code in Klaviyo Promotions. Create new code if expired. |
| Split path not segmenting correctly | Past buyers go to discount path | Placed Order condition misconfigured (e.g., "0 times over all time" instead of ">= 1") | Audit split condition. Update to "Placed Order >= 1 times over all time." |
| Re-entry not suppressed | Same customer enters flow multiple times in same week | "Not in flow" filter missing or wrong duration | Add "Has not been in flow in last X days" filter. Set to 5 days minimum. |
| High unsubscribe rate | > 2% on any email | Too many emails too quickly; discount messaging too aggressive | Space out delays. Reduce promotional content. Add more value-focused content. |

---

## Maintenance
- **Review cadence:** Every 30 days — review flow analytics, discount performance, split path effectiveness
- **Update triggers:**
  - Discount/coupon changes → update codes in Email 3 and Email 6b
  - New testimonials available → rotate into Email 4
  - Brand redesign → update email templates
  - Checkout flow changes → verify "Started Checkout" metric still fires correctly
  - Subject line fatigue → refresh subject lines quarterly
- **Version history:**

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-04 | Initial creation — 8-email abandoned checkout flow with first-time vs returning buyer split |

---

*See also: `/root/.hermes/skills/email-marketing/flow-abandoned-checkout/SKILL.md` (Hermes agent skill for autonomous execution)*



### 3. flow-browse-abandonment

## Purpose
This SOP ensures every site visitor who views a product but does not add it to their cart receives a sequence of up to 5 automated emails designed to re-engage them, build trust through social proof and risk reversals, and drive conversion. Browse abandonment sits between site abandonment (lowest intent — user active on site but no product view) and cart abandonment (higher intent — user added to cart). Missing this flow means losing customers who expressed clear product interest but weren't sufficiently convinced to take the next step. The browse abandonment flow consistently recovers a significant portion of what would otherwise be lost revenue across every e-commerce program.

## Pre-Flight Checklist
- [ ] **Viewed Product metric connected** — Verify in Klaviyo: Analytics > Metrics > "Viewed Product" appears and has recent data feeding in
- [ ] **Klaviyo account active** — Admin-level access with flow creation permissions
- [ ] **Dynamic product block configured** — Browse Abandonment dynamic content template built (Table block with dynamic image, name, price, and product URL)
- [ ] **Shopify/Klaviyo integration active** — Product catalog syncing and events tracking confirmed
- [ ] **Flow filters defined** — Pre-decided re-entry window (recommended: 15-30 days) and exclusion filters

### Step 1: Verify the Viewed Product Metric
**Action:** Navigate to Klaviyo and confirm the Viewed Product metric is connected and receiving data.
**Tool:** Klaviyo web app — Analytics > Metrics
**Input:** None — navigate to the Metrics page
**Expected Result:** "Viewed Product" listed in metrics with recent event timestamps and volume data
**If Failed:** The Viewed Product metric must be connected manually. Follow Klaviyo's guide at https://help.klaviyo.com/hc/en-us/articles/115001396711 to connect via Shopify integration or manual event tracking. After connecting, wait 24 hours and re-check for data.
**Undo:** N/A — verification has no side effects

### Step 2: Build the Dynamic Product Block Template
**Action:** Create a static Table block in Klaviyo for browse abandonment dynamic content.
**Tool:** Klaviyo Email Editor — Content block library
**Input:** Product data (image, name, price, URL) from the Viewed Product event
**Expected Result:** A reusable content block that dynamically renders the product the subscriber viewed
**If Failed:** Ensure the Shopify/Klaviyo integration is active and syncing. If dynamic variables show no data in preview, check that the Viewed Product event includes ImageURL, Name, Price, and URL fields. Test with a real subscriber profile that has recent Viewed Product events.
**Undo:** Delete the Table block and rebuild.

**Dynamic variable reference (Browse Abandonment):**
- Image: `{{ event.ImageURL }}`
- Item Name: `{{ event.Name }}`
- Price: `{{ event.Price|default:'' }}`
- Product Link: `{{ event.URL }}`

### Step 3: Create the Browse Abandonment Flow
**Action:** Create a new flow in Klaviyo triggered by the "Viewed Product" metric.
**Tool:** Klaviyo — Flows > Create Flow > Create from Scratch
**Input:** Flow name: "Browse Abandonment" or client-branded equivalent
**Expected Result:** A blank flow canvas with the Viewed Product trigger at the top
**If Failed:** If "Viewed Product" is not available as a trigger option, return to Step 1 and confirm the metric is properly connected.
**Undo:** Delete the flow from the Flows page if created in error.

### Step 4: Apply Flow Filters
**Action:** Add exclusion filters to the trigger to prevent sending to customers who have already taken the next step.
**Tool:** Klaviyo flow editor — click the trigger node > Filters
**Input:**
- Checkout started 0 times since starting this flow
- Placed order 0 times since starting this flow
- Added to cart 0 times since starting this flow
- Has not been in this flow in the last 15-30 days (set specific value per client)
**Expected Result:** Four filters displayed on the trigger node, ensuring the flow only fires for true browse abandonment events
**If Failed:** If filters are not saving, check for special characters or copy the conditions exactly as listed. Re-save the trigger node.
**Undo:** Remove individual filters from the trigger node.

### Step 5: Build Email 1 — Reminder (Send at 1-2 hours after trigger)
**Action:** Create the first browse abandonment email as a simple reminder with dynamic product block.
**Tool:** Klaviyo flow editor — click "+" after trigger > Email > Drag in content blocks
**Input:**
- Send timing: 1-2 hours after trigger (default: 2 hours)
- Goal: Quick nudge to get the customer back to the site
- Content: Brief remark about the viewed item + Dynamic product block (image, name, price, CTA to product page)
**Expected Result:** Email 1 created with correct timing, dynamic product block rendering the viewed item, and a CTA linking to `{{ event.URL }}`
**If Failed:** If the dynamic product block shows placeholder text or no data, verify the event variables by previewing with a real profile that has a Viewed Product event within the last 24 hours.
**Undo:** Delete Email 1 from the flow.

**Subject Line Ideas (test A/B from this pool):**
- "See something you liked?"
- "Have your eyes on something?"
- "You've got good taste"
- "Waiting for you"
- "Ready when you are!"
- "Leave this behind?"

### Step 6: Build Email 2 — Brand Info & Risk Reversals (Send at 1 day after Email 1)
**Action:** Create the second email focused on building trust through risk reversals and brand reassurance.
**Tool:** Klaviyo flow editor — click "+" after Email 1 > Email
**Input:**
- Send timing: 1 day after Email 1
- Goal: Build increased trust and address purchase anxiety
- Content: Branded headline covering shipping information, guarantees, refund policies, and secure checkout + Dynamic product block with the viewed item + Recommended products section for alternative browsing
**Expected Result:** Email 2 created with trust-building content, risk reversal messaging, dynamic product block, and recommended products
**If Failed:** If product recommendations are not populating, ensure the product catalog is syncing in Klaviyo > Catalog section. For dynamic recommendations, use Klaviyo's predictive product block if available.
**Undo:** Delete Email 2 from the flow.

**Subject Line Ideas:**
- "You can trust us"
- "Waiting for you"
- "Trusted by [number of past customers]"
- "You may also like…"
- "Your move!"

### Step 7: Build Email 3 — Testimonials (Send at 1 day after Email 2)
**Action:** Create the third email using social proof through customer testimonials and reviews.
**Tool:** Klaviyo flow editor — click "+" after Email 2 > Email
**Input:**
- Send timing: 1 day after Email 2
- Goal: Overcome remaining trust barriers and encourage purchase
- Content: Customer testimonials and reviews + Dynamic abandoned product content + Mentions of media features, awards, or press that prove brand legitimacy
**Expected Result:** Email 3 created with social proof elements, testimonials, and dynamic product block
**If Failed:** If client has insufficient testimonials, use aggregate social proof (e.g., "Join 10,000+ happy customers") or pull from social media/Google reviews.
**Undo:** Delete Email 3 from the flow.

**Subject Line Ideas:**
- "⭐⭐⭐⭐⭐"
- "The people have spoken!"
- "Your item is a fan favorite…"
- "Here's what others are saying"
- "Customer approved"
- "\"[insert testimonial]\""

### Step 8 (Optional): Build Email 4 — Discount Opener (Send at 1 day after Email 3)
**Action:** Create the optional fourth email offering a small incentive to convert remaining non-buyers.
**Tool:** Klaviyo flow editor — click "+" after Email 3 > Conditional split or Email
**Input:**
- Send timing: 1 day after Email 3
- Goal: Provide a small incentive for customers who have seen social proof and trust-building content
- Content: Clear discount offer (amount determined per client) + Dynamic abandoned product content + Social proof icons (optional, for reinforcement)
**Expected Result:** Email 4 created with a discount offer that incentivizes purchase
**If Failed:** If the discount code doesn't work in preview, verify the coupon code in Klaviyo or Shopify and update the email content.
**Undo:** Delete Email 4 or unpublish the discount offer.

**Subject Line Ideas:**
- "Flash Discount! 🚨"
- "A special offer just for you"
- "Take [offer] OFF your cart!"
- "A special gift for you"
- "Act Fast 🎁"

**Decision Point:** Use Email 4 only for high-value products (AOV > $75) or when Email 1-3 conversion rates are below target. For low-cost products, the discount may not be necessary.

### Step 9 (Optional): Build Email 5 — Discount Closer (Send at 1 day after Email 4)
**Action:** Create the optional fifth email with urgency messaging around the expiring discount.
**Tool:** Klaviyo flow editor — click "+" after Email 4 > Email
**Input:**
- Send timing: 1 day after Email 4
- Goal: Introduce urgency to an existing discount to drive last-minute conversion
- Content: Last chance message for the discount + Dynamic abandoned product content + Urgency cues (expiration timer, limited-time language)
**Expected Result:** Email 5 created with urgency-driven discount messaging
**If Failed:** If the email lacks urgency credibility without a real expiration, use relative language: "Your offer won't last forever" or "This was a one-time offer."
**Undo:** Delete Email 5 or unpublish.

**Subject Line Ideas:**
- "[Offer] Expires Tonight 🚨"
- "Gone forever"
- "Your offer is heading out the door"
- "Bye 👋"
- "Last Chance to Claim Your Discount"

**Decision Point:** Only use Email 5 if Email 4 is active. Without a discount, Email 5 has no urgency lever.

### Step 10: Preview and Test All Emails
**Action:** Send test emails to yourself and preview each email with real subscriber profiles.
**Tool:** Klaviyo email editor — Preview tab + "Send Test" button
**Input:** A subscriber profile that has a history of Viewed Product events (or use Klaviyo's sample preview)
**Expected Result:** All dynamic content renders correctly. Subject lines, preview text, images, prices, CTAs, and links are accurate. Links point to correct product pages (`{{ event.URL }}`).
**If Failed:** 
- Broken dynamic content: Re-check variable syntax (double-check `{{ }}` braces and pipe filters)
- Broken links: Verify `{{ event.URL }}` resolves to a valid product page in preview
- Image missing: Check that `{{ event.ImageURL }}` returns a valid URL — test with real profile
**Undo:** Edit individual email content blocks and re-test.

### Step 11: Review Flow Filters and Conditions
**Action:** Audit all flow filters, timing, and condition branches before activating.
**Tool:** Klaviyo flow editor — review trigger node, all condition branches, and email nodes
**Input:** Verify against spec:
- Trigger: Viewed Product
- Filters: 4 exclusion conditions active
- Re-entry window: 15-30 days (as set)
- Email timing: Emails 1-3 mandatory, 4-5 optional
**Expected Result:** Flow structure is complete with correct timing, filters, and condition branches
**If Failed:** Edit nodes as needed. Delete extra nodes. Re-check filter syntax.
**Undo:** N/A — review has no side effects.

### Step 12: Activate the Flow
**Action:** Click "Review and Start" and confirm activation.
**Tool:** Klaviyo flow editor — green "Review and Start" button in top-right
**Input:** Final confirmation dialog
**Expected Result:** Flow status changes from "Draft" to "Active." The flow begins sending to eligible contacts within the Klaviyo processing window.
**If Failed:** If Klaviyo blocks activation due to validation errors, read the error message and fix the indicated issue (typically missing content in a required block, broken link, or filter syntax problem).
**Undo:** Click "Stop Flow" in the flow editor to immediately halt sending. All partially-sent sequences will stop.

### Decision: Should I use the 3-email core or extend to 5 emails?
**Check:** Review the client's AOV (average order value) and product price point
- **AOV > $75:** Use the full 5-email sequence (3 core + 2 optional discount emails) — higher value justifies deeper nurturing
- **AOV $30-$75:** Use the 3-email core sequence (Reminder + Brand Info + Testimonials) — add discount emails only if 3-email conversion is below 0.5%
- **AOV < $30:** Use the 3-email core without discounts — discount margin erodes profit on low AOV

### Decision: What re-entry window to use?
**Check:** Client's average purchase cycle and browsing frequency
- **High-frequency products (fashion, accessories):** 15-day re-entry window
- **Consideration products (electronics, furniture):** 30-day re-entry window
- **Seasonal products (swimwear, holiday):** 15-20 days during peak season, 30 days off-season

## Completion Checklist
- [ ] Viewed Product metric verified and feeding data in Klaviyo
- [ ] Dynamic product block created and tested with real subscriber preview
- [ ] Flow created with Viewed Product trigger and correct filters
- [ ] Email 1 (Reminder) built with dynamic product block — send at 1-2 hours
- [ ] Email 2 (Brand Info & Risk Reversals) built — send at 1 day after Email 1
- [ ] Email 3 (Testimonials/Social Proof) built — send at 1 day after Email 2
- [ ] Email 4 (Discount Opener) built if AOV warrants — send at 1 day after Email 3
- [ ] Email 5 (Discount Closer) built if Email 4 is active — send at 1 day after Email 4
- [ ] All emails tested via Klaviyo preview with real subscriber profiles
- [ ] All links verified pointing to correct product URLs
- [ ] Flow activated and status confirmed as "Active"
- [ ] Re-entry window set to appropriate value (15 days or 30 days)
- [ ] Flow monitoring scheduled — review performance at 7-day, 30-day, and 90-day marks

## Error Recovery
| Error | Symptom | Root Cause | Fix |
|-------|---------|------------|-----|
| Dynamic content not rendering | Email preview shows blank or placeholder images/text | Viewed Product event missing required fields (ImageURL, Name, Price, URL) | Verify Shopify/Klaviyo event mapping. Check event properties in Klaviyo > Analytics > Metrics > Viewed Product. Re-map fields if needed. |
| Zero flow volume after activation | No contacts entering the flow after 48 hours | Viewed Product metric not actually connected despite appearing in Metrics | Re-run the metric connection guide. Check that Shopify tracking code includes viewed product events. |
| Filter blocking all traffic | 0 contacts qualify despite known Viewed Product events | Filters are too restrictive — "has not been in flow" window too long, or exclusion filters overlap | Reduce re-entry window. Remove one exclusion filter at a time to identify which is blocking. |
| Low open rate on Email 1 (below 25%) | Open rate below benchmark | Subject line not compelling, or send time misaligned with audience | A/B test 3 subject lines from the approved pool. Test different send times (1 hour vs 2 hours vs 4 hours after trigger). |
| Discount emails not converting | Emails 4-5 have high open but low click rates | Discount is too small or not positioned as exclusive | Increase discount %, or frame as "exclusive offer just for you" rather than a general sale. |

## Maintenance
**Review cadence:** Every 30 days — monitor flow performance metrics (open rate, click rate, placed order rate, attributed revenue)
**Update trigger:** Changes to Klaviyo's event structure, Shopify integration updates, client pricing changes, or new product catalog additions
**Version history:**

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-04 | Initial creation from Chase Dimond / Core Email Flows source |



### 4. flow-cross-sell

## Purpose
This SOP ensures every customer who makes a purchase receives automated cross-sell or upsell email(s) designed to increase average order value (AOV) by offering complementary products. The cross-sell flow captures post-purchase momentum — the customer has already demonstrated purchase intent and trust — making them receptive to related product recommendations. Two approaches are covered: Immediate (sent 10-30 minutes after purchase, capitalizing on peak engagement) and Delayed (sent 10-30 days after fulfillment, when the customer may need refills or complementary items). The flow can be executed as either a General Cross-Sell (showing trending/bestselling products to all buyers) or a Specific Cross-Sell (product-triggered recommendations based on what was purchased).

## Pre-Flight Checklist
- [ ] **Klaviyo account with admin access** — Flow creation and metric management permissions
- [ ] **Placed Order metric active** — Verified in Klaviyo > Analytics > Metrics
- [ ] **Product catalog synced in Klaviyo** — Catalog section shows all products with images, prices, and URLs
- [ ] **Dynamic product block built** — Product block or Table block showing trending/bestselling products, or specific product(s) for the Specific approach
- [ ] **Complementary product pairings defined** — For Specific Cross-Sell: list of product X → product Y mappings (e.g., bought shoes → show socks + cleaning kit)
- [ ] **Fulfilled Order metric available** — Required for Delayed Cross-Sell (10-30 days after fulfillment)

### Step 1: Determine Cross-Sell Approach
**Action:** Decide between General Cross-Sell and Specific Cross-Sell based on product catalog and client data.
**Tool:** Product catalog review + client consultation
**Input:** Review product catalog for clear complementary relationships (e.g., phone + case, shoes + socks, coffee + mug)
**Expected Result:** Selection confirmed:
- **General Cross-Sell:** Use when products have broad appeal and most customers could benefit from any bestseller/trending item. Easier to set up but lower conversion.
- **Specific Cross-Sell:** Use when clear product pairings exist. Requires trigger filters per product but converts higher. Best for stores with defined product categories (hats, jackets, shoes, socks, cleaning kits).
**If Failed:** If unsure, start with General Cross-Sell. It requires less setup and provides baseline performance data.
**Undo:** Delete the flow and rebuild with the alternative approach.

### Step 2: Determine Timing
**Action:** Decide between Immediate (10-30 min after purchase) or Delayed (10-30 days after fulfillment).
**Tool:** Client consultation based on product type
**Input:**
- **Immediate Cross-Sell:** For products that can be combined in one shipment or are low-commitment add-ons (e.g., add a supplement to a supplement order). Uses Placed Order trigger.
- **Delayed Cross-Sell:** For products that complement after the main product has been used (e.g., refills, accessories, maintenance items). Uses Fulfilled Order trigger.
**Expected Result:** Timing approach selected
**If Failed:** Default to Immediate Cross-Sell (10-30 minutes) — it captures the highest engagement window.
**Undo:** N/A — strategy selection has no destructive side effects.

### Step 3: Build the Product Recommendation Block
**Action:** Create a product block in Klaviyo email editor displaying the cross-sell/upsell products.
**Tool:** Klaviyo email editor — Product block or Table block
**Input:**
- **General Cross-Sell:** Use Klaviyo's product block configured to show "Trending Products" or "Bestsellers" from the catalog. Include 3-4 products with image, name, price, and CTA.
- **Specific Cross-Sell:** Build a static product block showing the specific complementary product(s) for the trigger item. Use catalog product picker to select product Y.
**Expected Result:** A content block that renders the appropriate cross-sell products
**If Failed:** If the product block shows no products, verify the catalog sync in Klaviyo > Catalog. For Specific Cross-Sell, ensure the product exists in the catalog and has a published URL.
**Undo:** Delete the block and rebuild.

### Step 4: Prepare the Incentive (Optional)
**Action:** Decide whether to include a cross-sell incentive (discount, free shipping, same-day delivery).
**Tool:** Client consultation
**Input:** Options:
- % discount on the cross-sell item (e.g., "Add this for 15% off")
- Free shipping on orders over X
- "Same delivery day as your other items" — no extra shipping wait
**Expected Result:** Incentive copy and coupon code (if applicable) ready for the email
**If Failed:** If no incentive is available, use copy that frames the recommendation as a natural addition: "Customers who bought [product X] also love [product Y]."
**Undo:** Remove the incentive block from the email.

### Step 5A: Create the Immediate Cross-Sell Flow
**Action:** Create a new flow for Immediate Cross-Sell (10-30 minutes after purchase).
**Tool:** Klaviyo — Flows > Create Flow > Create from Scratch
**Input:**
- Flow name: "Cross-Sell — Immediate" or client-branded equivalent
- Trigger: Placed Order
- Filters:
  - Cancelled order 0 times since starting this flow
  - Has not been in this flow in the last 45 days
- Wait period: 10-30 minutes after trigger
**Expected Result:** Flow created with Placed Order trigger, exclusion filters, and short wait period
**If Failed:** If Placed Order is not available as trigger, check that the metric is active in Analytics > Metrics.
**Undo:** Delete the flow.

### Step 5B: Create the Delayed Cross-Sell Flow (Optional)
**Action:** Create a separate flow for Delayed Cross-Sell (10-30 days after fulfillment).
**Tool:** Klaviyo — Flows > Create Flow > Create from Scratch
**Input:**
- Flow name: "Cross-Sell — Delayed" or equivalent
- Trigger: Fulfilled Order
- Filters: Cancelled order 0 times since starting this flow
- Wait period: 10-30 days after trigger (set specific value per product cycle)
**Expected Result:** Flow created with Fulfilled Order trigger and longer wait period
**If Failed:** If Fulfilled Order is not available, check that your Shopify/Klaviyo integration is sending fulfillment events.
**Undo:** Delete the flow.

### Step 5C: Add Specific Cross-Sell Trigger Filters (If Using Specific Approach)
**Action:** Add product-specific trigger filters to the flow so it only fires when the customer buys product X.
**Tool:** Klaviyo flow editor — trigger node > Filters
**Input:**
- Add filter: "What someone has ordered" > "Contains at least one of" > Select product X
- For multiple X→Y pairings: Create separate flows OR use conditional splits within one flow
**Expected Result:** Flow only triggers when the specified product(s) are in the order
**If Failed:** If the product selector doesn't show products, verify catalog sync in Klaviyo > Catalog.
**Undo:** Remove the product filter.

### Step 6: Build the Cross-Sell Email
**Action:** Create a single email (or series) with the cross-sell/upsell offer.
**Tool:** Klaviyo flow editor — add Email node after the wait period
**Input:**
- Content structure:
  - Opening: Friendly follow-up referencing their recent purchase
  - Review request section (optional but recommended — collect feedback while cross-selling)
  - Incentive offer (if applicable)
  - Product recommendation block (3-4 products for General, 1-2 for Specific)
  - Clear CTA for each product
- Timing: Immediate — 10-30 minutes after trigger; Delayed — 10-30 days after fulfillment
**Expected Result:** Cross-sell email created with product recommendations, incentive (if used), and review request
**If Failed:** If the product block renders incorrect products, double-check the block configuration and catalog sync.
**Undo:** Delete the email node.

**Subject Line Ideas:**
- "Customers who bought [product] also bought…"
- "Complete your [product] setup"
- "You might also need this…"
- "Here's what goes perfectly with your purchase"
- "Add the finishing touch"
- "Was your order missing something?"

### Step 7: Preview and Test the Email
**Action:** Test the cross-sell email with a real subscriber profile that has a recent Placed Order event.
**Tool:** Klaviyo email editor — Preview tab + "Send Test"
**Input:** A subscriber profile that has made a recent purchase
**Expected Result:** Product recommendations render correctly. Links point to product pages. Incentive (if used) displays correctly.
**If Failed:** 
- Products not showing: Re-check catalog sync in Klaviyo > Catalog
- Wrong products: For Specific Cross-Sell, verify the trigger filter is working — test with a profile that bought the correct trigger product
- Broken links: Check product URLs in the catalog
**Undo:** Edit the email content and re-test.

### Step 8: Review Flow Structure
**Action:** Audit the complete flow before activation.
**Tool:** Klaviyo flow editor
**Input:** Verify:
- Trigger matches chosen approach (Placed Order or Fulfilled Order)
- Exclusion filters applied
- Wait period correct (10-30 min or 10-30 days)
- Email content complete and tested
**Expected Result:** Clean, complete flow structure
**If Failed:** Edit nodes as needed.
**Undo:** N/A.

### Step 9: Activate the Flow
**Action:** Click "Review and Start" and confirm.
**Tool:** Klaviyo flow editor — "Review and Start"
**Input:** Final confirmation
**Expected Result:** Flow status changes to "Active"
**If Failed:** Address any validation errors shown.
**Undo:** "Stop Flow" in the flow editor.

### Decision: Immediate vs Delayed Cross-Sell
**Check:** Product type and customer experience goals
- **Immediate (10-30 min):** Use for add-on items that ship together, low-commitment purchases, or digital products. Capitalizes on peak purchase momentum.
- **Delayed (10-30 days):** Use for physical products where the customer needs to experience the primary item first. Works well for consumables, accessories, and refills.

### Decision: General vs Specific Cross-Sell
**Check:** Product catalog structure and available data
- **General:** Product catalog has broad appeal items that most customers would be interested in (e.g., bestselling t-shirts). Easier setup. Lower conversion per email but reaches more people.
- **Specific:** Clear complementary product pairings exist (e.g., phone + case). Higher conversion. More setup work. Requires product mapping documentation.

### Decision: Include a cross-sell incentive?
**Check:** Margin analysis on cross-sell products
- **Margin > 50% on cross-sell item:** Offer 10-15% discount — you still profit
- **Margin 30-50%:** Offer free shipping on combined order instead of discount
- **Margin < 30%:** Do not offer discount. Use social proof instead ("Customers who bought X also bought Y")

## Completion Checklist
- [ ] Cross-sell approach selected (General or Specific)
- [ ] Timing approach selected (Immediate or Delayed, or both)
- [ ] Product recommendation block built and tested
- [ ] Incentive defined (if applicable) and coupon code tested
- [ ] Flow created with correct trigger (Placed Order or Fulfilled Order)
- [ ] Exclusion filters applied (Cancelled order, flow re-entry window)
- [ ] Specific product filters applied (if using Specific approach)
- [ ] Wait period set (10-30 minutes or 10-30 days)
- [ ] Email built with review request + product block + CTA
- [ ] Email tested with real subscriber profile
- [ ] Product links verified
- [ ] Flow activated and status "Active"
- [ ] AOV monitoring scheduled for 30-day review

## Error Recovery
| Error | Symptom | Root Cause | Fix |
|-------|---------|------------|-----|
| Cross-sell email sent to customers who cancelled | Customer received cross-sell after cancelling the triggering order | "Cancelled order 0 times" filter not applied or incorrectly configured | Add/re-check the "Cancelled order 0 times since starting this flow" filter on the trigger node |
| Wrong products shown | Customer sees unrelated recommendations | Catalog sync issue, or General approach showing items customer already bought | Sync catalog manually in Klaviyo > Catalog. Add filter to exclude products already in the triggering order. |
| Low click rate on recommendations | Clicks below 2% | Products not compelling, incentive missing, or positioning feels like spam | Test Specific approach vs General. Add incentive. Reframe copy as "complete your order" not "buy more." |
| Flow sending to the same customer every order | Customer gets cross-sell on every purchase | "Has not been in flow" filter missing | Add "Has not been in this flow in the last 45 days" filter on the trigger node |
| Delayed Cross-Sell not sending | No emails sent at 10-30 day mark | Fulfilled Order metric not feeding data, or wait period not configured | Check Fulfilled Order metric in Analytics > Metrics. Verify Shopify sends fulfillment events. |

## Maintenance
**Review cadence:** Every 30 days — monitor AOV uplift, cross-sell conversion rate, attributed revenue from the flow
**Update trigger:** New product catalog additions or removals, complementary product pairing changes, pricing changes
**Version history:**

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-04 | Initial creation from Chase Dimond / Core Email Flows source |



### 5. flow-post-purchase-new

## Purpose
The New Customer Post-Purchase flow is triggered when a customer makes their first purchase. This sequence of 4 emails is designed to reduce buyer's remorse, educate the customer on product usage, build brand loyalty, collect feedback, and open the door to repeat purchases. The tone is warm, personal, and educational — not promotional. Delivery timing is calibrated to the customer's shipping window so emails arrive when the product is in hand. This flow is the critical bridge between first purchase and customer lifetime value.

## Pre-Flight Checklist
- [ ] Klaviyo account with admin or manager permissions
- [ ] "Placed Order" metric firing correctly from ecommerce platform
- [ ] Flow filter set: "Placed Order equals 1 over all time"
- [ ] Cancelled order filter set: "Cancelled Order 0 times since starting flow"
- [ ] Shipping tracking data connected to Klaviyo (shipping status, estimated delivery)
- [ ] Brand social media accounts active and linked
- [ ] Content assets ready: product usage guides, blog posts, how-to content
- [ ] Review platform connected (for Email 4)
- [ ] Incentive for review configured (discount code, loyalty points, or giveaway entry)
- [ ] Founder photo and/or team photos for Email 1
- [ ] Repeat purchase discount code created (optional, Email 2)

---

#### Step 1: Create the Post-Purchase New Customer Flow
**Action:** Create a new flow triggered by "Placed Order" metric.
**Tool:** Klaviyo — Flows > Create Flow > Metric Trigger > "Placed Order"
**Input:** Select "Placed Order" metric
**Expected Result:** Flow appears with "Placed Order" as the trigger event
**If Failed:** If "Placed Order" metric is missing, verify ecommerce platform integration (Shopify/WooCommerce) is syncing order events.
**Undo:** Delete the flow draft.

#### Step 2: Apply Flow Filters
**Action:** Add flow filters to limit to first-time buyers only.
**Tool:** Klaviyo — Flow > Filters
**Input:**
- Filter 1: "Placed Order" equals 1 over all time (first-time buyer)
- Filter 2: "Cancelled Order" 0 times since starting this flow
**Expected Result:** Only first-time buyers with no cancellations enter the flow.
**If Failed:** Verify the "Placed Order" and "Cancelled Order" metrics exist and are accurate.
**Undo:** Remove or adjust filters.

#### Step 3: Configure Time Delays Based on Shipping
**Action:** Set time delays calibrated to shipping expectations. Create conditional timing if the brand has variable shipping windows.
**Tool:** Klaviyo — Flow Builder
**Input:**
- Email 1: Send 1 day after trigger (24 hours — enough time for excitement to build)
- Email 2: Send 3-5 days after Email 1 (aligned with typical delivery time)
- Email 3: Send 3-7 days after Email 2 (after customer has had time to use product)
- Email 4: Send 7-14 days after Email 3 (after ample product trial time)
**Expected Result:** Emails arrive at relevant moments in the post-purchase journey.
**If Failed:** For products with longer shipping (custom/furniture/large items), extend all delays by 2-3x. For digital products, compress delays (Email 2 after 24 hours).
**Undo:** Adjust time delays on each node.

#### Step 4: Configure Email 1 — Thank You from Founder
**Action:** Create Email 1 sent 1 day after purchase. Plain text or low-design format, from founder.
**Tool:** Klaviyo — Flow > Add Time Delay (1 day) > Add Email
**Input:**
- **Subject Line Ideas:** "Thank you, [first_name]!" (personalized), "You're what makes us great", "So you have your new [product] coming…", "Thank you so much"
- **Content Buckets:**
  - Warm thank you message from founder or team
  - Welcome the customer to the brand family
  - Mention that the order is being prepared/on its way
  - (Optional) Offer a repeat purchase discount code: "Here's WELCOME10 for 10% off your next order"
  - CTA: "Shop Bestsellers" or "Track Your Order"
- **Design:** Plain text from founder (feels personal and authentic)
**Expected Result:** 30-40%+ open rate. Customer feels valued and appreciated.
**If Failed:** Test founder vs brand sender name. Adjust personal tone.
**Undo:** Pause email node.

#### Step 5: Configure Email 2 — Brand Mission / FAQs
**Action:** Create Email 2 sent 3-5 days after Email 1. Conditional: only send if no cancellation.
**Tool:** Klaviyo — Flow > Add Time Delay (3-5 days) > Conditional Split (Cancelled Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "The gift that keeps on giving!", "Level up your [product]", "Where should we send your gift?"
- **Content Buckets:**
  - Address common FAQs about product usage, care, or sizing
  - (If applicable) Mention the purchase supports the brand's mission
  - Offer a discount for repeat purchase (if not already offered in Email 1)
  - Social community invitation (Instagram, Facebook group, TikTok)
  - CTA: "Join Our Community" or "Get the Most From Your [Product]"
- **Design:** High-level branded template or light plain text
**Expected Result:** 25-35% open rate. Customer feels supported post-purchase.
**If Failed:** Adjust delay timing based on feedback. Test community vs educational angle.
**Undo:** Pause email node.

#### Step 6: Configure Email 3 — Education / Best Use Cases
**Action:** Create Email 3 sent 3-7 days after Email 2. Customer should have received the product by now.
**Tool:** Klaviyo — Flow > Add Time Delay (3-7 days) > Conditional Split (Cancelled Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "[Brand] hacks you NEED", "Some [Brand] secrets", "3 tips to get the most out of your [product]"
- **Content Buckets:**
  - 3 pro tips for product usage
  - Best use cases
  - Blog articles or how-to guides (link out)
  - User-generated content showcasing product in use
  - CTA: "Read More Tips" or "Shop Accessories"
- **Design:** High-level branded template with how-to visuals
**Expected Result:** 20-30% open rate. Customer maximizes product utility → higher satisfaction.
**If Failed:** If product needs no education, replace with lifestyle content or brand storytelling.
**Undo:** Pause email node.

#### Step 7: Configure Email 4 — Review Request
**Action:** Create Email 4 sent 7-14 days after Email 3. Customer should have had ample time to try the product.
**Tool:** Klaviyo — Flow > Add Time Delay (7-14 days) > Conditional Split (Cancelled Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "What do you think?", "We hope you're enjoying [product]", "How was your experience?"
- **Content Buckets:**
  - Friendly request for product review
  - "We'd love your feedback — it helps other customers make informed decisions"
  - Reward/incentive for leaving a review (discount code, loyalty points, giveaway entry)
  - Direct link to review platform
  - CTA: "Write a Review" or "Share Your Feedback"
- **Design:** High-level branded template (clean, simple focus on CTA)
**Expected Result:** 5-15% of recipients leave a review. Social proof grows over time.
**If Failed:** Check review platform integration. Offer stronger incentive for review. Simplify the review process (one-click rating).
**Undo:** Pause email node.

---

#### Step 8: Send Test Emails
**Action:** Send test versions of all 4 emails to yourself and team.
**Tool:** Klaviyo — Email Preview & Test
**Input:** Test email addresses
**Expected Result:** All emails render correctly. Personalization tokens populate properly. Links work.
**If Failed:** Fix broken links, missing personalization, rendering issues.
**Undo:** Edit and re-test.

#### Step 9: Verify Flow Logic
**Action:** Walk the flow tree. Verify cancellation checks on Emails 2-4.
**Tool:** Klaviyo — Flow Builder
**Input:** N/A
**Expected Result:** Flow tree is clean. All emails fire in sequence. Cancellation exits the flow.
**If Failed:** Reconnect any disconnected paths. Check conditional split logic.
**Undo:** Edit nodes.

#### Step 10: Publish the Flow
**Action:** Set flow to "Live."
**Tool:** Klaviyo — Flow > Status > Set to Live
**Input:** N/A
**Expected Result:** Flow begins accepting first-time buyers immediately.
**If Failed:** Check for Klaviyo validation errors.
**Undo:** Set flow to Draft.

---

#### Step 11: Monitor First 30 Days
**Action:** Review flow analytics weekly for the first month.
**Tool:** Klaviyo — Flow Analytics
**Input:** N/A
**Expected Result:** Email 1 open rate 30-40%+. Repeat purchase rate 15-25% within 60 days. Review submission rate 5-15%.
**If Failed:** Low open rates → test subject lines. Low engagement → review content relevance. Low reviews → improve incentive.
**Undo:** Adjust individual emails, re-publish.

#### Step 12: Review Timing Alignment with Shipping
**Action:** After 30 days, survey customers on when they received the product vs when emails arrived.
**Tool:** Customer survey or support tickets review
**Input:** Customer feedback
**Expected Result:** Emails arrive at optimal moments (Email 3 comes after product received).
**If Failed:** Adjust time delays based on actual shipping data.
**Undo:** Revert to original timing.

---

### Decision: Discount Offer in Emails 1-2
**Check:** Repeat purchase rate within 60 days
**If REPEAT RATE > 20%:** No discount needed — remove or reduce discount offers in Emails 1-2
**If REPEAT RATE < 10%:** Add a compelling discount offer (15-20% off next order) to Email 2
**If REPEAT RATE < 5%:** Review product quality, customer experience, and pricing — email flow may not be the issue

### Decision: Shipping-Timed vs Date-Timed Delays
**Check:** Consistency of shipping speed
**If STANDARD shipping is 2-5 days for 90%+ of orders:** Fixed time delays work fine (Email 1 +1d, Email 2 +4d, Email 3 +8d, Email 4 +18d)
**If SHIPPING VARIES widely (3-21 days):** Use Klaviyo conditional timing based on delivery tracking events instead of fixed delays

### Decision: Education Content Depth
**Check:** Click rate on Email 3 (education)
**If CLICK RATE > 10%:** Educational content resonates — expand to 2-3 emails in future iterations
**If CLICK RATE < 3%:** Skip education — replace Email 3 with lifestyle/brand content or user-generated content

### Decision: Review Incentive Type
**Check:** Review submission rate
**If < 5% submission rate:** Increase incentive (e.g., from 10% off to 15% off, or enter to win a month's supply)
**If > 15% submission rate:** Current incentive is working; consider reducing it to protect margins
**If reviews are LOW quality (one-word):** Add guided questions to the review flow

---

## Completion Checklist
- [ ] Post-Purchase New Customer Flow created with "Placed Order" metric trigger
- [ ] Flow filter: Placed Order equals 1 over all time (first-time buyers only)
- [ ] Cancelled order suppression active on Emails 2-4
- [ ] Email 1: Thank you from founder — plain text, 1 day after purchase
- [ ] Email 2: Mission/FAQs/social — 3-5 days delay
- [ ] Email 3: Product education/tips — 3-7 days delay
- [ ] Email 4: Review request — 7-14 days after Email 3
- [ ] Repeat purchase discount (optional) active and tracked
- [ ] Review platform integration confirmed working
- [ ] All links tested, UTM parameters set
- [ ] Test emails rendered across desktop, mobile, Gmail, Outlook
- [ ] Flow set to Live

---

## Error Recovery
| Error | Symptom | Root Cause | Fix |
|-------|---------|------------|-----|
| Email fires after cancellation | Customer gets post-purchase emails after canceling | Cancellation check missing or misconfigured | Add "Cancelled Order 0 times since starting flow" condition to Emails 2-4. |
| Empty product personalization | "[product]" shows as blank | Order data not being passed to Klaviyo event | Check "Placed Order" metric includes product name in event properties. Use fallback: "[product|default:'your item']." |
| Review link broken | 404 or wrong page | Review platform URL misconfigured | Generate correct review link from review platform. Test in incognito. |
| Email 3 sent before delivery | Customer hasn't received product yet | Time delay too short for shipping window | Extend delays. Use conditional timing based on delivery tracking. |
| Low review submission | < 3% of recipients leave review | Incentive too weak; process too complex | Increase review incentive. Reduce steps to leave review. Add photo upload option. |
| Unsubscribe spike on Email 1 | > 0.5% unsubscribe rate | Email feels too transactional or salesy | Make Email 1 warmer, more personal. Remove promotional language. |

---

## Maintenance
- **Review cadence:** Every 30 days — review flow analytics, repeat purchase rate, review submission rate
- **Update triggers:**
  - New product launch → update Email 3 educational content
  - Review incentive changes → update Email 4 copy
  - Brand messaging refresh → update all email content
  - Shipping process changes → adjust time delays
  - New social accounts → update Email 2 community links
- **Version history:**

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-04 | Initial creation — 4-email post-purchase sequence for first-time buyers |

---

*See also: `/root/.hermes/skills/email-marketing/flow-post-purchase-new/SKILL.md` (Hermes agent skill for autonomous execution)*



### 6. flow-post-purchase-repeat

## Purpose
The Repeat Customer Post-Purchase flow is triggered when a customer makes their second purchase. This shorter 2-email sequence recognizes and celebrates their loyalty, deepens the brand relationship, and moves them into higher-value channels — SMS and social community. By Email 2, the goal is to convert them to SMS subscribers (higher engagement channel) and collect a review. This flow treats repeat customers as VIPs-in-waiting and lays the groundwork for the VIP Flow that activates at higher order counts or spend thresholds.

## Pre-Flight Checklist
- [ ] Klaviyo account with admin or manager permissions
- [ ] "Placed Order" metric firing correctly from ecommerce platform
- [ ] Flow filter set: "Placed Order equals 2 over all time"
- [ ] Cancelled order filter set: "Cancelled Order 0 times over all time"
- [ ] Social media links active (Instagram, Facebook group, TikTok)
- [ ] SMS opt-in integration active in Klaviyo (if using)
- [ ] Review platform connected (Loox, Ryviu, Yotpo, or Klaviyo)
- [ ] Birthday/gift program configured (if collecting birthday info in Email 1)
- [ ] Loyalty program details ready (points balance, rewards tiers)
- [ ] Founder photo and personal story for Email 2 personal touch
- [ ] Brand community details (Facebook group, rewards page, VIP details)

---

#### Step 1: Create the Repeat Customer Flow
**Action:** Create a new flow triggered by "Placed Order" metric with "equals 2 over all time" filter.
**Tool:** Klaviyo — Flows > Create Flow > Metric Trigger > "Placed Order"
**Input:** Select "Placed Order" metric
**Expected Result:** Flow appears with "Placed Order" as the trigger event
**If Failed:** Verify "Placed Order" metric is syncing from ecommerce platform.
**Undo:** Delete the flow draft.

#### Step 2: Apply Flow Filters
**Action:** Add flow filters for repeat customer targeting.
**Tool:** Klaviyo — Flow > Filters
**Input:**
- Filter 1: "Placed Order" equals 2 over all time
- Filter 2: "Cancelled Order" 0 times over all time
**Expected Result:** Only repeat customers with 2 orders and no cancellations enter the flow.
**If Failed:** Verify filter logic. Confirm "Cancelled Order" metric exists.
**Undo:** Remove or adjust filters.

#### Step 3: Configure Email 1 — Loyalty Thank You
**Action:** Create Email 1 sent 1 day after trigger.
**Tool:** Klaviyo — Flow > Add Time Delay (1 day) > Add Email
**Input:**
- **Subject Line Ideas:** "Wow, thank you again!", "Thanks again, friend!", "We see you, [first_name]"
- **Content Buckets:**
  - Warm thank you for their continued support and loyalty
  - Recognize this is their second purchase (make them feel seen)
  - Push to social community: "Join our Facebook group / Instagram / TikTok for exclusive content"
  - (Optional) Collect birthday info: "Reply with your birthday for a special gift" or add a link to a birthday form
  - Small loyalty gift or bonus points if a loyalty program exists
  - CTA: "Join Our Community" or "Connect With Us"
- **Design:** High-level branded template or plain text from founder
**Expected Result:** 30-40%+ open rate. Customer feels recognized and valued.
**If Failed:** Test founder vs brand sender. Adjust community CTA placement.
**Undo:** Pause email node.

#### Step 4: Configure Email 2 — SMS Conversion + Review
**Action:** Create Email 2 sent 3-10 days after Email 1. Conditional: only send if no cancellation.
**Tool:** Klaviyo — Flow > Add Time Delay (3-10 days) > Conditional Split (Cancelled Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "The gift that keeps on giving!", "We're thankful for our [Brand] Family!", "Want exclusive early access?"
- **Content Buckets:**
  - Primary goal: convert to SMS subscriber. "Get text alerts for early access, VIP deals, and drops."
  - SMS opt-in CTA button or link
  - Request product review: "Share your experience — we read every review"
  - Review CTA: "Write a Review"
  - (Optional) Personal note from founder thanking them again
  - (Optional) Loyalty points summary or tier progress
  - CTA: "Join SMS VIP List" + "Write a Review"
- **Design:** High-level branded template with two clear CTAs
**Expected Result:** 5-10% SMS opt-in rate. 5-15% review submission rate.
**If Failed:** Test SMS value proposition. Adjust timing. Simplify the ask (one CTA vs two).
**Undo:** Pause email node.

---

#### Step 5: Send Test Emails
**Action:** Send test versions of both emails to yourself and team.
**Tool:** Klaviyo — Email Preview & Test
**Input:** Test email addresses
**Expected Result:** Both emails render correctly. Social links work. SMS opt-in link works. Review link works.
**If Failed:** Fix broken links, personalization issues, rendering problems.
**Undo:** Edit and re-test.

#### Step 6: Verify Flow Logic
**Action:** Walk the flow tree. Verify cancellation check on Email 2.
**Tool:** Klaviyo — Flow Builder
**Input:** N/A
**Expected Result:** Flow tree is clean. Two emails with correct timing. Cancellation exits the flow.
**If Failed:** Reconnect disconnected paths.
**Undo:** Edit nodes.

#### Step 7: Publish the Flow
**Action:** Set flow to "Live."
**Tool:** Klaviyo — Flow > Status > Set to Live
**Input:** N/A
**Expected Result:** Flow begins accepting repeat customers immediately.
**If Failed:** Check for Klaviyo validation errors.
**Undo:** Set flow to Draft.

---

#### Step 8: Monitor First 30 Days
**Action:** Review flow analytics weekly.
**Tool:** Klaviyo — Flow Analytics
**Input:** N/A
**Expected Result:** Email 1 open rate 30-40%+. SMS opt-in rate 5-10%. Review submission rate 5-15%. Third purchase rate 25-35% within 90 days.
**If Failed:** Low SMS opt-in → test stronger value proposition. Low review rate → increase incentive.
**Undo:** Adjust individual emails.

#### Step 9: Track SMS Channel Contribution
**Action:** After 60 days, measure revenue from SMS-converted subscribers vs email-only.
**Tool:** Klaviyo — Segments > SMS Subscribers + Analytics
**Input:** N/A
**Expected Result:** SMS subscribers show 2-3x higher purchase frequency than email-only subscribers.
**If Failed:** If SMS isn't driving incremental revenue, adjust SMS content strategy or value proposition.
**Undo:** Pause SMS acquisition if ROI is negative.

---

### Decision: SMS Value Proposition
**Check:** SMS opt-in rate on Email 2
**If OPT-IN RATE > 10%:** Keep current offer. SMS acquisition is working.
**If OPT-IN RATE < 5%:** Test different value propositions:
- "Exclusive 15% off your next order" → cash value
- "First access to new drops" → exclusivity
- "Weekly insider tips" → education
**If OPT-IN RATE < 2%:** Reconsider timing — try sending Email 2 earlier (3 days vs 7-10 days).

### Decision: Single vs Dual CTA
**Check:** Click-through rate on Email 2
**If CLICK RATE > 8% with two CTAs:** Keep both — audience is engaged enough to handle two options
**If CLICK RATE < 4% with two CTAs:** Split into separate emails (Email 2a: SMS offer only, Email 2b: review request only)
**If one CTA has > 80% of clicks:** Make that the primary CTA and deprioritize the other

### Decision: Collect Birthday Info in Email 1
**Check:** Data collection rate
**If BIRTHDAY data collected > 10% of recipients:** Valuable — use for birthday flow and personalized offers
**If BIRTHDAY data collected < 3%:** Remove — friction outweighs benefit for this audience
**If BOUNCE rate on birthday link > 5%:** Form is broken — fix or replace with reply-based collection ("Reply with your birthday")

---

## Completion Checklist
- [ ] Repeat Customer Flow created with "Placed Order equals 2 over all time" trigger
- [ ] Filter: Cancelled Order 0 times over all time
- [ ] Email 1: Loyalty thank you — social community push — optional birthday collection — 1 day delay
- [ ] Email 2: SMS opt-in + review request — 3-10 day delay — cancellation check — 5-10% SMS conversion target
- [ ] SMS opt-in link/integration confirmed working
- [ ] Review platform link confirmed working
- [ ] Social media links accurate and active
- [ ] Test emails sent across desktop, mobile, Gmail, Outlook
- [ ] Flow set to Live

---

## Error Recovery
| Error | Symptom | Root Cause | Fix |
|-------|---------|------------|-----|
| SMS opt-in link broken | 404 or blank page | SMS integration not configured in Klaviyo | Set up Klaviyo SMS or create proper SMS opt-in landing page. |
| Wrong customers in flow | First-time buyers entering | "Placed Order equals 2" filter not set correctly | Update filter to "equals 2 over all time" — verify exact condition. |
| Review link broken | 404 or wrong page | Review platform URL misconfigured | Generate correct review link from review platform (usually order-specific). |
| Low SMS conversion | < 3% opt-in rate | Value proposition not compelling enough | Test stronger offers: "Get 20% off next order" or "Free shipping forever." |
| Unsubscribe on Email 1 | > 0.5% unsubscribes | Too promotional too soon | Reduce promotional language. Lead with gratitude. |

---

## Maintenance
- **Review cadence:** Every 60 days — review SMS opt-in rate, third-purchase conversion, community engagement
- **Update triggers:**
  - SMS offer changes → update Email 2 copy
  - Social media account changes → update Email 1 links
  - Loyalty program updates → integrate into Email 1
  - Review incentive changes → update Email 2
  - New SMS compliance requirements (TCPA/CASL) → update opt-in language
- **Version history:**

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-04 | Initial creation — 2-email repeat customer loyalty + SMS conversion sequence |

---

*See also: `/root/.hermes/skills/email-marketing/flow-post-purchase-repeat/SKILL.md` (Hermes agent skill for autonomous execution)*



### 7. flow-replenishment

## Purpose
This SOP ensures customers who buy consumable or replenishable products receive an automated restock reminder timed to when they're likely running out. Replenishment flows are essential for brands selling products that need regular reordering — supplements, skincare, razors, coffee, pet food, cleaning supplies, and any subscription-adjacent product. The flow functions as a "crossover between a post-purchase email and an abandoned cart email": like post-purchase it references the customer's previous order; like abandoned cart it focuses on a single product with simple copy, product imagery, and a clear call to action. Missing this flow means leaving recurring revenue on the table from customers who would happily reorder if reminded.

## Pre-Flight Checklist
- [ ] **Klaviyo account with admin access** — Flow creation permissions
- [ ] **Placed Order metric active** — Verified in Klaviyo > Analytics > Metrics
- [ ] **Replenishable products identified** — Catalog items marked as consumable/replenishable with known buyer cycle
- [ ] **Buyer cycle timing data available** — Known or estimated: how many days does one unit last for a typical customer? (e.g., 30-day protein tub, 90-day razor blade pack)
- [ ] **Dynamic product block built** — For the replenishable product (image, name, price, CTA)
- [ ] **Flow re-entry window defined** — Typically same as the buyer cycle (send reminder every cycle)

## Step-by-Step Procedure
**IMPORTANT NOTE:** The source material for this flow is thin — approximately 10 lines from the primary source (Core Email Flows.md, lines 625-634). The steps below are built from those source lines plus general e-commerce best practices. If specific client data contradicts any steps, the client data takes precedence.

### Step 1: Identify Replenishable Products
**Action:** Review the product catalog and identify which products are consumable/replenishable — items customers need to reorder.
**Tool:** Product catalog review (Shopify admin, Klaviyo catalog, or client spreadsheet)
**Input:** Product list with usage rates
**Expected Result:** A list of products that should have replenishment flows with their estimated buyer cycle (days until restock)
**If Failed:** If no buyer cycle data exists, estimate it based on product size/quantity and typical usage (e.g., a 30-count supplement = 30 days; a 12oz coffee bag at 2 cups/day = ~30 days). Document the estimate as an assumption and flag for client review.
**Undo:** N/A — identification has no side effects.

**Common replenishment products:**
- Supplements (protein, vitamins, greens powders)
- Skincare (moisturizer, serum, sunscreen)
- Coffee/tea
- Pet food/treats
- Razors/blades
- Cleaning supplies
- Baby products (diapers, wipes)
- Contact lenses
- Food/seasonal consumables

### Step 2: Determine Buyer Cycle Timing
**Action:** Set the time delay for each replenishment email based on how long the product lasts.
**Tool:** Client data, product label, or industry standard
**Input:**
- Example: A 30-day protein tub → send email at day 25-28
- Example: A 90-day razor blade pack → send email at day 80-85
- Example: A 2-month moisturizer → send email at day 50-55
**Expected Result:** Clear time delay value per product
**If Failed:** If exact timing is unknown, estimate conservatively (slightly longer than the product would last — it's better to send late than early, as an early reminder may be ignored).
**Undo:** Adjust timing later based on performance data.

### Step 3: Build the Replenishment Product Block
**Action:** Create a product block in Klaviyo email editor showing the replenishable item.
**Tool:** Klaviyo email editor — Product block or Table block
**Input:**
- Single product focus (the item they need to restock)
- Product image, name, price
- Clear CTA: "Restock Now" or "Reorder [Product Name]"
- Optional: Subscribe & Save offer if available
**Expected Result:** A content block that dynamically renders the replenishable product
**If Failed:** If the product doesn't appear, verify it's active in the Klaviyo catalog.
**Undo:** Delete the block and rebuild.

### Step 4: Create the Replenishment Flow
**Action:** Create a new flow triggered by the Placed Order event for replenishable products.
**Tool:** Klaviyo — Flows > Create Flow > Create from Scratch
**Input:**
- Flow name: "Replenishment — [Product Name]" or "Replenishment Reminder"
- Trigger: Placed Order
- Filter: "What someone has ordered" > "Contains at least one of" > Select the replenishable product(s)
- Exclusion filters: Cancelled order 0 times since starting this flow
- Wait period: Set to buyer cycle minus 2-5 days (e.g., 25 days for a 30-day product)
- Re-entry window: Same as buyer cycle (customer who reorders gets re-entered for the next cycle)
**Expected Result:** Flow created with product-specific trigger and timing aligned to the buyer cycle
**If Failed:** If "What someone has ordered" filter doesn't show the product, verify catalog sync in Klaviyo > Catalog.
**Undo:** Delete the flow.

### Step 5: Build the Replenishment Email
**Action:** Create a single email for the replenishment reminder.
**Tool:** Klaviyo flow editor — add Email node after the wait period
**Input:**
- Content structure:
  - Simple copy acknowledging their previous purchase
  - Reminder that it might be time to restock
  - Single product focus — the item they previously bought
  - Product image, details, and price
  - Clear CTA for reordering
- Optional elements:
  - Subscribe & Save offer (If available — converts better than one-time)
  - Bundle offer (reorder the same + try a complementary product)
  - "Same great price" reassurance
**Expected Result:** Replenishment email created with simple, focused content
**If Failed:** If the product block shows incorrect items, verify the trigger filter and catalog.
**Undo:** Delete the email node.

**Subject Line Ideas:**
- "Time to restock [Product Name]?"
- "Running low on [Product Name]?"
- "Your [Product Name] supply is almost gone"
- "Need a refill? We've got you covered"
- "It's been [X days] since your last order…"
- "[Product Name] reorder reminder"
- "Don't run out — restock now"
- "Ready for more [Product Name]?"

### Step 6: Preview and Test the Email
**Action:** Test the replenishment email with a real subscriber profile that purchased the product.
**Tool:** Klaviyo email editor — Preview tab + "Send Test"
**Input:** A subscriber profile with a recent purchase of the replenishable product
**Expected Result:** Product renders correctly with image, name, and price. CTA links to product page.
**If Failed:** If the product doesn't render, check catalog sync and trigger filter. If timing seems off, review the wait period.
**Undo:** Edit email content and re-test.

### Step 7: Review Flow Structure
**Action:** Audit the complete flow before activation.
**Tool:** Klaviyo flow editor
**Input:** Verify:
- Trigger: Placed Order with product filter
- Exclusion filter: Cancelled order 0 times
- Wait period: Aligned to buyer cycle
- Re-entry window: Set to match buyer cycle
**Expected Result:** Clean flow structure
**If Failed:** Edit nodes as needed.
**Undo:** N/A.

### Step 8: Activate the Flow
**Action:** Click "Review and Start" and confirm.
**Tool:** Klaviyo flow editor — "Review and Start"
**Input:** Final confirmation
**Expected Result:** Flow status changes to "Active"
**If Failed:** Address validation errors.
**Undo:** "Stop Flow" in the flow editor.

### Decision: Single email vs multi-email replenishment sequence
**Check:** Product price and reorder cycle length
- **Short cycle (< 30 days) + low AOV (< $30):** Single email is sufficient
- **Medium cycle (30-60 days) + mid AOV ($30-$75):** Single email with optional 7-day follow-up if no reorder
- **Long cycle (> 60 days) + high AOV (> $75):** 2-email sequence: reminder, then 7-day follow-up with incentive

### Decision: Include Subscribe & Save offer?
**Check:** Does the brand offer subscription pricing?
- **Yes:** Feature Subscribe & Save prominently — higher LTV, predictable revenue
- **No:** Frame as a restock reminder with convenience messaging — "We'll remind you when it's time"

### Decision: Bundled reorder vs single product?
**Check:** Do customers typically buy multiple replenishable products in one order?
- **Yes (e.g., skincare routine with 3 products):** Bundle reorder with all previously purchased replenishables
- **No (e.g., single supplement):** Single product focus

## Completion Checklist
- [ ] Replenishable products identified with buyer cycle timing
- [ ] Dynamic product block built for the product
- [ ] Flow created with Placed Order trigger and product-specific filter
- [ ] Exclusion filter applied (Cancelled order)
- [ ] Wait period set to buyer cycle minus buffer days
- [ ] Re-entry window configured
- [ ] Email built with simple copy and single product focus
- [ ] Email tested with real subscriber profile
- [ ] Product links verified
- [ ] Flow activated and status "Active"
- [ ] 30-day performance monitoring scheduled

## Error Recovery
| Error | Symptom | Root Cause | Fix |
|-------|---------|------------|-----|
| Replenishment email sent too early | Customer receives restock reminder before using up the product | Buyer cycle timing set incorrectly (too short) | Increase the wait period. If product lasts 30 days but typical customer takes 45 days to finish, set wait to 40 days. |
| Customer gets replenishment email for every product in a multi-product order | Multiple emails for the same customer on the same day | Separate flows per product, no "Has not been in flow" coordination | Use a single replenishment flow that bundles products from the same order, or add a global re-entry filter. |
| Low conversion on replenishment email | Click rate below 3% | Customer not aware they need a restock, or price has changed | Add Subscribe & Save option. Use specific usage-based copy: "It's been 28 days since you bought your 30-day supply of [Product]." |
| Flow sending to cancelled orders | Customer who cancelled gets restock reminder | Missing "Cancelled order 0 times" exclusion filter | Add the filter to the trigger node. |

## Maintenance
**Review cadence:** Every 30 days — monitor restock conversion rate, reorder intervals, and AOV from replenishment orders
**Update trigger:** Product formulation changes (new package size, new usage instructions), pricing changes, introduction of Subscribe & Save
**Version history:**

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-04 | Initial creation from Chase Dimond / Core Email Flows source. NOTE: Source material is thin (~10 lines). Steps built from source + general e-commerce best practices. |



### 8. flow-site-abandonment

## Purpose
This SOP ensures every brand deploying the Site Abandonment Flow captures visitors who browse the site without taking meaningful action (no product view, no cart add, no checkout). These visitors either didn't find a product they liked or got distracted. The flow sends a single, gentle reminder email prompting them to return and browse best-selling products. Proper execution prevents the "creepy" factor — the email must feel helpful, not surveilling. Without this flow, 70-85% of site visitors who browse and leave without conversion never return.

## Pre-Flight Checklist
Before building, verify:

- [ ] Klaviyo admin account with full flow editor access
- [ ] Active On Site metric is firing correctly (test with your own session)
- [ ] Brand has at least 3-5 best-selling products with product images and links
- [ ] Exclusion winback window determined (default: 30 days, can extend to 45)
- [ ] Flow naming convention agreed: `[Brand Name] — Site Abandonment`
- [ ] Subject line A/B test variant prepared (two subject lines minimum)
- [ ] Brand email template approved (design, header, footer, CTA button styling)

#### Step 1: Create a New Flow in Klaviyo
**Action:** Navigate to Klaviyo → Flows → Create Flow → Create from Scratch
**Tool:** Klaviyo web app (app.klaviyo.com)
**Input:** None — start from blank canvas
**Expected Result:** A new, empty flow canvas appears with the trigger selection modal
**If Failed:** Verify you have Flows Editor permissions under Settings → Account → Permissions
**Undo:** Delete the flow from Flows list if created in error

#### Step 2: Set the Flow Name
**Action:** Click the flow name (top left, default "Untitled Flow") and rename to `[Brand Name] — Site Abandonment`
**Tool:** Klaviyo flow editor
**Input:** Brand name + " — Site Abandonment"
**Expected Result:** Flow name updates across the editor
**If Failed:** Refresh the page and retry
**Undo:** Rename back to default

#### Step 3: Configure the Metric Trigger
**Action:** Click the trigger node → select "Active On Site" as the starting metric
**Tool:** Klaviyo trigger configuration panel
**Input:** Select "Active On Site" from the metric dropdown
**Expected Result:** A green "Active On Site" trigger node appears at the top of the flow canvas
**If Failed:** Search for "Active On Site" in the metric search bar. If missing, contact Klaviyo support or verify the metric is enabled under Analytics → Metrics → Browse All Metrics → Active On Site
**Undo:** Delete the trigger node and re-select

#### Step 4: Add Flow Filters
**Action:** Click the trigger node → under "Flow Filters" → add ALL of the following conditions:

1. **Placed Order** — "0 times since starting this flow"
2. **Checkout Started** — "0 times since starting this flow"
3. **Viewed Product** — "0 times since starting this flow"
4. **Added to Cart** — "0 times since starting this flow"
5. **Has not been in flow** — "in the last 30-45 days"

**Tool:** Klaviyo flow filter panel
**Input:** Each filter added one at a time via the "+ Add Filter" button
**Expected Result:** All 5 filters appear listed under the trigger node. Only subscribers meeting ALL conditions enter the flow.
**If Failed:** Ensure each filter uses "since starting this flow" (not "over all time") for metrics 1-4. If a filter option doesn't appear, check that the metric exists in your Klaviyo account.
**Undo:** Click the X on any filter to remove it

#### Step 5: Add Email Node
**Action:** Click the "+" below the trigger → select "Email" from the node menu
**Tool:** Klaviyo flow editor
**Input:** None
**Expected Result:** A new email node appears on the canvas with no timing delay (send immediately)
**If Failed:** Ensure no other node type was accidentally selected
**Undo:** Right-click the email node → Delete

#### Step 6: Configure Email Timing — No Delay
**Action:** Click the email node → under "Send Time" → ensure "Send Immediately" is selected (no waiting delay)
**Tool:** Klaviyo email node settings
**Input:** "Send Immediately" toggle = ON (default for first email in flow)
**Expected Result:** Email sends as soon as the trigger + filters evaluate to true
**If Failed:** Check that no wait interval was added by mistake
**Undo:** Set back to "Send Immediately"

#### Step 7: Design the Email Content
**Action:** Click the email node → "Edit Email" → design the email with:

- **Subject Line:** One of the following (A/B test preferred):
  - "Need some help?" (recommended control)
  - "Find something you like?"
  - "Let us point you in the right direction…"
  - "Waiting for you"
  - "Here's what you missed"
  - "Did you check these out?"

- **Preview Text:** 40-60 characters that complements the subject (e.g., "Saw you browsing — here are our customer favorites")

- **Body Content:**
  - Header section: Acknowledge their recent visit (e.g., "Saw you stopped by!") — keep it casual, not intrusive
  - Product showcase: 3-4 best-selling products in a grid or carousel layout with images, prices, and direct links
  - CTA: "Browse Best Sellers" or "Continue Shopping" button — clear, single primary CTA
  - Footer: Standard unsubscribe link, brand info, preference center link

**Tool:** Klaviyo email editor (drag-and-drop or custom HTML)
**Input:** Copy, product images, product links, CTA button
**Expected Result:** Email renders correctly in desktop and mobile preview
**If Failed:** 
  - Images not loading → verify image URLs are HTTPS and publicly accessible
  - Links broken → test each product link by clicking in preview mode
  - Mobile broken → use responsive email template or MJML framework
**Undo:** Revert to previous email version (Version History under Email Settings)

#### Step 8: Set Up A/B Subject Line Test
**Action:** In the email editor → "A/B Test" → enable subject line testing:

- **Control:** Primary subject line (e.g., "Need some help?")
- **Variant:** Secondary subject line (e.g., "Here's what you missed")
- **Sample Size:** 30-50% of recipients per variant
- **Winner Selection:** Higher open rate after 4-6 hours
- **Send Timeframe:** 4-6 hours for test phase, then send winning variant to remaining recipients

**Tool:** Klaviyo A/B test settings within email editor
**Input:** Subject line variants, sample percentages
**Expected Result:** A/B test configuration saved; first batch of recipients receives random variant
**If Failed:** Verify A/B testing is enabled in your Klaviyo plan
**Undo:** Disable A/B test and send a single subject line

#### Step 9: Review and Test the Flow
**Action:** Click "Review & Test" → send a test email to yourself and 2-3 team members
**Tool:** Klaviyo review panel (top right of flow editor)
**Input:** Enter email addresses for test sends
**Expected Result:** Test emails arrive in inbox (not spam) within 2-3 minutes; links resolve to correct product pages; images render; mobile viewport is clean
**If Failed:**
  - Email in spam → check SPF/DKIM/DMARC records in domain settings (Settings → Email → Sending Domains)
  - Links 404 → verify product URLs in email content
  - Images broken → replace image URLs with working HTTPS links
**Undo:** Edit email content and re-send test

#### Step 10: Publish the Flow
**Action:** Click "Review & Test" → click "Turn On Flow" (green toggle at top of page)
**Tool:** Klaviyo flow editor
**Input:** None — toggle the flow ON
**Expected Result:** Flow status changes to "Live." Counter begins showing recipients entering the flow.
**If Failed:** Check if any step has a warning triangle icon — click the icon to see what's missing
**Undo:** Toggle the flow OFF (this stops new entries but doesn't delete in-progress profiles)

#### Step 11: Set Up Performance Monitoring (First 14 Days)
**Action:** Navigate to the flow's analytics panel → check these daily for the first 14 days:

- **Recipients Entered:** Minimum 50/week (if lower, site traffic may be insufficient for this flow)
- **Open Rate:** Target > 20% (benchmark: 20-35%)
- **Click Rate:** Target > 2%
- **Unsubscribe Rate:** Should be < 0.5% — if higher, subject line or frequency feels "creepy"

**Tool:** Klaviyo flow analytics dashboard
**Input:** None — data populates automatically
**Expected Result:** Metrics trending toward targets within 14 days
**If Failed:** 
  - Open rate < 15% → test different subject line (less "surveillance" tone, more helpful)
  - Click rate < 1% → update product selection to better sellers or improve CTA copy
  - Unsubscribe rate > 0.5% → soften the tone or reduce mention of "we saw you"
**Undo:** Pause the flow by toggling OFF while making edits

#### Step 12: Document Subject Line Winner
**Action:** After A/B test completes (4-6 hours), record the winner → set as permanent subject line
**Tool:** Klaviyo A/B test results panel
**Input:** Update email subject line to winning variant
**Expected Result:** Control or Variant marked as winner; email now sends with winning subject line
**If Failed:** If no clear winner (difference < 5%), continue A/B testing with new variants
**Undo:** Revert to original subject line from email version history

### Decision 1: Single Email vs. Two-Email Flow
**Check:** Analyze open rate after 30 days. If open rate > 25%, consider adding a second email.
**If YES (open rate > 25%):** Add a second email with 3-day delay: "We've got new arrivals" with different bestsellers.
**If NO (open rate ≤ 25%):** Keep single email. The audience is low-intent; more emails risk unsubscribes.

### Decision 2: Exclusion Window Length
**Check:** Evaluate traffic volume. If monthly site visitors < 5,000, the 30-day exclusion window may be too short.
**If High Traffic (> 5,000 visitors/month):** Use 30-day exclusion window.
**If Low Traffic (< 5,000 visitors/month):** Extend to 45-day exclusion window to avoid re-entering the same users too quickly.

### Decision 3: Product Selection Strategy
**Check:** Are you using manually selected bestsellers or a dynamic product block?
**If Manual:** Update bestseller selection monthly based on sales data.
**If Dynamic:** Verify the Klaviyo Product Feed integration is active and syncing correctly.

## Completion Checklist
- [ ] Flow created and named `[Brand Name] — Site Abandonment`
- [ ] 5 flow filters applied (Placed Order, Checkout Started, Viewed Product, Added to Cart, Exclusion window)
- [ ] Single email built with subject line + preview text + body (3-4 bestsellers + CTA)
- [ ] A/B test configured (two subject line variants)
- [ ] Test email sent to self and team — renders correctly on desktop and mobile
- [ ] All links verified (product pages, CTA, unsubscribe)
- [ ] Flow published (Live) and confirmed receiving entries
- [ ] Monitoring dashboard bookmarked for 14-day check

## Error Recovery
| Error | Symptom | Root Cause | Fix |
|-------|---------|------------|-----|
| No one enters the flow | Recipients count stays at 0 after 7 days | "Active On Site" metric not firing | Verify metric under Analytics → Metrics. Test by browsing your own site with analytics cookies cleared. If missing, contact Klaviyo support to enable the metric. |
| Email lands in spam | Test email goes to spam folder | SPF/DKIM/DMARC not configured | Go to Settings → Email → Sending Domains → Verify DNS records with your domain host. Use MXToolbox to verify DKIM/SPF records. |
| "Creepy" feedback from customers | Unsubscribe rate > 1% or direct complaints | Tone feels surveilling | Rewrite copy to be less specific about tracking. Change "We saw you browsing" to "Stopped by recently? Check out what's new." Avoid mentioning exact products they viewed. |
| No clicks | Click rate < 1% after 14 days | Wrong products or weak CTA | Refresh product selection with current bestsellers. Test CTA copy: "Shop Best Sellers" vs. "Explore Now" vs. "Find Your Favorites." |
| A/B test not sending | No test results after 6 hours | Sample size too small | Verify at least 100 recipients entered the flow. If traffic is low, disable A/B test and use the recommended subject line. |
| Flow won't publish | Warning triangle on flow node | Missing required content (subject line, from name, etc.) | Click each warning triangle and complete the missing fields. Most common: empty "from name" or "reply-to email." |

## Maintenance
- **Review cadence:** Every 30 days — check open rate, click rate, and unsubscribe rate
- **Product refresh:** Update best-seller selection monthly
- **Subject line retest:** Every 90 days — consumer attention patterns shift seasonally
- **Trigger verification:** Check "Active On Site" metric is still firing at end of each month
- **Version history:**

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-04 | Initial creation — Site Abandonment Flow SOP from Chase Dimond framework |

## See Also
- [[SOP-flow-winback]] — Winback re-engagement flow for churned customers
- [[SOP-flow-vip]] — VIP rewards flow for top-spending segments
- [[SOP-flow-sunset]] — List hygiene / unengaged subscriber sunset flow
- Flow architecture: [[_synthesis-flow-architecture]]



### 9. flow-sunset

## Purpose
This SOP ensures every brand deploys a Sunset Flow that identifies unengaged subscribers, gives them a final chance to re-engage, and suppresses them if they don't respond. Proper list cleaning is critical to maintaining good email deliverability — unengaged subscribers drag down open rates, trigger spam complaints, and hurt sender reputation. The Sunset Flow sends 2 emails: a friendly "we miss you" message with an unsubscribe option, and a final "we'll unsubscribe you" email with a "Stay on the List" option. This is list hygiene — not revenue — but without it, deliverability degrades and revenue from engaged subscribers drops.

**Note:** The source material for this flow is thin (fewer than 20 lines of procedural detail). The following SOP builds on the available source data without fabricating steps beyond what is documented in the vault.

## Pre-Flight Checklist
Before building, verify:

- [ ] Klaviyo admin account with flow editor permissions
- [ ] Engagement data baseline: know your current list open rate (looking for subscribers who haven't opened in 90+ days)
- [ ] Unsubscribe page active and functional
- [ ] Preference center active (optional but recommended — lets subscribers choose frequency instead of leaving)
- [ ] Suppression protocol decided: manual suppression or Klaviyo's automatic "Suppress Unengaged" setting
- [ ] Brand email template approved (simple format — sunset emails should feel personal, not promotional)

#### Step 1: Determine Non-Engagement Window
**Action:** Review list engagement data (Klaviyo → Analytics → Email → Engagement) to determine the right non-engagement window:

- **Standard window:** 90 days without opening
- **Strict window (high-volume senders):** 60 days
- **Lenient window (low-volume brands):** 120-180 days

**Tool:** Klaviyo Analytics
**Input:** None (use existing data)
**Expected Result:** A documented non-engagement threshold (e.g., "subscribers who haven't opened any email in 120 days")
**If Failed:** Default to 90 days — industry standard for most ecommerce brands
**Undo:** Change threshold later as data informs

#### Step 2: Create the Unengaged Segment
**Action:** Navigate to Klaviyo → Segments → Create Segment → define:

- **Condition 1:** "Opened Email" = 0 times "in the last [X days]" (using your window from Step 1)
- **Condition 2:** "Clicked Email" = 0 times "in the last [X days]"
- **Condition 3:** "Placed Order" = 0 times "in the last [X days]"
- **Exclude:** Anyone already suppressed or unsubscribed

**Tool:** Klaviyo segment builder
**Input:** Conditions as defined above
**Expected Result:** Segment populates with unengaged subscribers who haven't opened, clicked, or purchased in the window
**If Failed:**
  - Segment too large (> 50% of list) → window too long — shorten it
  - Segment too small (< 1% of list) → window too short — lengthen it
**Undo:** Edit segment conditions

#### Step 3: Name and Save the Segment
**Action:** Name segment `[Brand Name] — Unengaged (Sunset Candidates)` → Save
**Tool:** Klaviyo segment builder
**Input:** Segment name
**Expected Result:** Segment appears with member count
**If Failed:** Rename and re-save
**Undo:** Delete segment

#### Step 4: Create New Flow in Klaviyo
**Action:** Navigate to Klaviyo → Flows → Create Flow → Create from Scratch
**Tool:** Klaviyo web app
**Input:** None
**Expected Result:** Blank flow canvas
**If Failed:** Verify permissions
**Undo:** Delete if created in error

#### Step 5: Name the Flow
**Action:** Rename to `[Brand Name] — Sunset Unengaged`
**Tool:** Klaviyo flow editor
**Input:** Brand name + " — Sunset Unengaged"
**Expected Result:** Flow name updates
**If Failed:** Refresh and retry
**Undo:** Rename back

#### Step 6: Configure the Trigger
**Action:** Set trigger to "Added to Segment" → select `[Brand Name] — Unengaged (Sunset Candidates)` segment

**Alternatively:** Use "Is in Segment" as the trigger with a recurring check (e.g., daily) if you want the flow to catch people who become unengaged over time.

**Tool:** Klaviyo trigger panel
**Input:** Segment selection
**Expected Result:** Subscribers who meet the unengaged criteria enter the flow
**If Failed:** Verify segment has members
**Undo:** Change trigger

#### Step 7: Add Flow Filter
**Action:** Click trigger node → "Flow Filters" → add:

- **Has not been in flow** — "in the last 180 days"

**Tool:** Klaviyo filter panel
**Input:** Add filter
**Expected Result:** Prevents subscribers from re-entering the sunset flow too frequently
**If Failed:** Ensure filter is set correctly
**Undo:** Remove filter

#### Step 8: Add Email 1 Node (Immediate)
**Action:** Click "+" below trigger → select "Email" → keep "Send Immediately"
**Tool:** Klaviyo flow editor
**Input:** None
**Expected Result:** Email 1 node with zero delay
**If Failed:** Re-add
**Undo:** Delete

#### Step 9: Design Email 1
**Action:** Click Email 1 → "Edit Email" → design:

- **Send Timing:** Immediately when subscriber enters the flow
- **Tone:** Friendly, transparent, not promotional. This is an awkward email by nature — own it.
- **Subject Line Ideas:**
  - "Haven't heard from you lately"
  - "Should we take a break?"
  - "We miss you 💔"
  - "Is everything okay?"
  - "Are you still there?"

- **Preview Text:** Honest and simple (e.g., "We won't take it personally if you'd like to unsubscribe")

- **Body Content:**
  - Opening: Acknowledge that they haven't engaged recently
  - Honest framing: Let them know you've noticed their inactivity and want to respect their inbox
  - Option A: "Stay on the list" — a link to the preference center or a "Keep me subscribed" CTA
  - Option B: "Unsubscribe" — a clear, easy unsubscribe link (don't hide it)
  - Optional: A reminder of what they're missing (brand highlights, popular products)
  - No aggressive offers or "come back" discounts — this flow is about list hygiene, not conversion

- **CTA Options:**
  - Primary: "I want to stay" (preference center)
  - Secondary: "Unsubscribe" (contrasting, equally prominent)

**Tool:** Klaviyo email editor
**Input:** Copy, preference center link, unsubscribe link
**Expected Result:** Email renders in desktop and mobile — should look personal, not templated
**If Failed:** 
  - Preference center link broken → check Klaviyo → Settings → Subscription forms and pages
  - Unsubscribe link missing → ensure footer has standard unsubscribe
**Undo:** Save draft, re-edit

#### Step 10: Add 7-Day Wait Node
**Action:** Click "+" below Email 1 → "Wait" → set to "7 days"
**Tool:** Klaviyo wait node
**Input:** 7 days
**Expected Result:** 7-day pause before the final email
**If Failed:** Check unit is "days"
**Undo:** Adjust timing

#### Step 11: Add Re-Engagement Check
**Action:** Between wait and Email 2 → add conditional split:

- **Condition:** "Opened Email" > 0 times in the last 7 days
  - AND/OR "Clicked Email" > 0 times in the last 7 days
- **If YES (engaged with Email 1):** End the flow (they re-engaged!)
- **If NO (still unengaged):** Continue to Email 2

**Tool:** Klaviyo conditional split
**Input:** Engagement conditions
**Expected Result:** Only subscribers who completely ignored Email 1 receive the final email
**If Failed:** Ensure timeframe ("in the last 7 days") aligns with the wait node
**Undo:** Remove split

#### Step 12: Design Email 2 — Final Farewell
**Action:** Click Email 2 → "Edit Email" → design:

- **Tone:** Direct but friendly. "We still haven't heard from you, so we'll go ahead and unsubscribe you to keep your inbox clean."
- **Format:** Best as plain text or simple email
- **Subject Line Ideas:**
  - "We'll miss you"
  - "Last call — staying or going?"
  - "We're cleaning up our list"
  - "We're making space"

- **Preview Text:** Direct (e.g., "We'll unsubscribe you unless you want to stay")

- **Body Content:**
  - Opening: "We still haven't heard from you"
  - Explanation: Transparent about list cleaning — "We want to make sure we're only emailing people who want to hear from us"
  - Action: Offer one last chance to stay subscribed
  - CTA: "Stay on the List" button or link
  - Default: "If you don't click, we'll unsubscribe you from future emails" — this is the key message
  - Closing: Thank them for their past support, leave the door open to re-subscribe later

**Tool:** Klaviyo email editor
**Input:** Copy, "Stay on the List" link
**Expected Result:** Email looks personal, feels like a genuine cleaning notice
**If Failed:** Ensure the "Stay on the List" link goes to preference center or re-engage flow
**Undo:** Save draft, re-edit

#### Step 13: Add Suppression at End of Flow
**Action:** At the end of the flow (after Email 2) → add a "Suppress Profile" node or manually configure suppression:

**Option A (Klaviyo Native — Recommended):**
- Navigate to Klaviyo → Settings → Email → Suppression Settings
- Enable "Suppress unengaged profiles after sunset flow"
- Set suppression to trigger after the sunset flow completes

**Option B (Manual Tag-Based):**
- Add a "Tag Profile" node at the end of the flow → tag as "sunset-suppressed"
- Create a separate process to suppress profiles with this tag
- Export to Mailchimp/other platform as needed

**Tool:** Klaviyo settings (suppression) or tag node
**Input:** Suppression configuration
**Expected Result:** Unengaged subscribers who don't re-engage after the sunset flow are suppressed — they stop receiving emails
**If Failed:** 
  - Using Option A → verify suppression settings are saved
  - Using Option B → check tags applied to test profile
**Undo:** Remove suppression or tags from profiles

#### Step 14: Send Test Emails
**Action:** Click "Review & Test" → send both emails to yourself and team
**Tool:** Klaviyo review panel
**Input:** Email addresses
**Expected Result:** Both emails arrive, links work ("Stay on the List", "Unsubscribe", preference center)
**If Failed:** 
  - Preference center link broken → fix in Klaviyo settings
  - "Stay on the List" link → verify it routes to preference center update page
**Undo:** Edit and re-send

#### Step 15: Publish the Flow
**Action:** Toggle flow ON
**Tool:** Klaviyo flow editor
**Input:** None
**Expected Result:** Flow goes "Live." Unengaged subscribers who meet the segment criteria enter the flow.
**If Failed:** Check for warning triangles
**Undo:** Toggle OFF

#### Step 16: Monitor List Health Impact (First 60 Days)
**Action:** Track these metrics weekly for the first 60 days:

- **Subscribers suppressed:** Number exiting the flow to suppression
- **List open rate:** Should improve as unengaged profiles are suppressed
- **Delivery rate:** Should improve (fewer bounces from stale addresses)
- **Spam complaint rate:** Should decrease

**Tool:** Klaviyo → Analytics → Email → Engagement + Deliverability
**Input:** None (data populates automatically)
**Expected Result:** List health metrics improve within 30 days of suppression
**If Failed:** 
  - List open rate not improving → suppression window may be too lenient
  - Spam complaints not decreasing → check if sunset emails themselves trigger complaints
**Undo:** Adjust suppression criteria or sunset messaging

### Decision 1: Sunset Window Length
**Check:** Sending frequency and list size.
**High volume (5+ emails/week):** 60-90 day window — unengaged subscribers hurt sender reputation faster.
**Low volume (1-2 emails/week):** 90-180 day window — more time before they're considered "unengaged."
**Default:** 90 days for most ecommerce brands.

### Decision 2: Suppress or Tag?
**Check:** Are you using Klaviyo exclusively, or multi-platform?
**Klaviyo only:** Use native suppression (Settings → Email → Suppression Settings).
**Multi-platform:** Use tag-based suppression and sync suppression lists across platforms.

### Decision 3: Preference Center or Hard Unsubscribe?
**Check:** Do you want to try to save the subscriber at a lower frequency?
**Yes (preferred):** Include a preference center link that lets them choose weekly/monthly digests.
**No:** Standard unsubscribe link only.

## Completion Checklist
- [ ] Unengaged subscriber segment created (X days without open/click/purchase)
- [ ] Flow created: `[Brand Name] — Sunset Unengaged`
- [ ] Trigger: "Added to Segment" → unengaged segment
- [ ] Filter: "Has not been in flow in last 180 days"
- [ ] Email 1 built ("we miss you" + stay/unsubscribe options)
- [ ] 7-day wait node between Email 1 and Email 2
- [ ] Re-engagement check before Email 2 (opened/clicked?)
- [ ] Email 2 built (final farewell + last chance to stay)
- [ ] Suppression configured (native or tag-based)
- [ ] Test emails verified (inbox, links, preference center)
- [ ] Flow published (Live)
- [ ] List health monitoring schedule set (weekly for first 60 days)

## Error Recovery
| Error | Symptom | Root Cause | Fix |
|-------|---------|------------|-----|
| Segment too large | > 40% of list is "unengaged" | Window too long or list has accumulated inactive profiles | Shorten window to 60 days. Suppress aggressively in batches. Run a re-engagement campaign to entire list first. |
| High unsubscribes from sunset emails | > 2% unsubscribe rate on sunset emails | Tone feels pushy or the "stay" option isn't clear | Soften tone. Make "Stay on the List" the primary CTA (bigger, more prominent). Ensure preference center is easy to use. |
| Suppression not working | Subscribers stay on list after flow | Suppression not configured after the flow | Verify native suppression is enabled or tag-based suppression is processing. Run a test with a dummy profile. |
| Re-engagement check misconfigured | Engaged subscribers still get Email 2 | Conditional split condition is wrong | Check that the split checks "Opened Email > 0 times in last 7 days" not "over all time." Test with a profile that opens Email 1. |
| No one re-engages | 0% re-engagement from sunset flow | Email 1 has no compelling reason to stay | Add a small incentive in Email 1 (e.g., "Click to stay subscribed and get 10% off your next order"). Test subject line with curiosity gap. |
| Sunset flow triggers on recently active subscribers | Someone who opened an email yesterday enters the flow | Segment refresh timing off or trigger type wrong | Ensure the segment condition is "Opened Email = 0 in last [X days]" not "over all time." Use daily segment refresh. |

## Maintenance
- **Segment review:** Every 30 days — check segment size relative to total list (target: 10-20% unengaged)
- **Window adjustment:** Every 90 days — adjust unengaged window based on sending frequency changes
- **Suppression audit:** Monthly — verify suppressed profiles are not accidentally receiving emails
- **List health report:** Monthly — review open rate, delivery rate, spam complaint rate trends
- **Sunset email refresh:** Every 180 days — refresh copy, test new subject lines

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-04 | Initial creation — Sunset Flow SOP from Chase Dimond framework + synthesis card. Source material is thin (< 20 lines); procedural detail limited to what's documented. |

## See Also
- [[SOP-flow-winback]] — Winback is a pre-sunset re-engagement step; sunset catches what winback misses
- [[SOP-flow-site-abandonment]] — Top-of-funnel recovery
- [[SOP-flow-vip]] — VIP rewards; VIPs get a longer sunset window before suppression
- [[_synthesis-flow-architecture]] — Flow connection map showing sunset's role as the list hygiene endpoint



### 10. flow-vip

## Purpose
This SOP ensures every brand deploys a VIP Flow that rewards the highest-value customers — those who spend more or order more frequently than the average customer. The VIP Flow shows appreciation, reinforces their status, and creates another purchase opportunity. It delivers 2 emails: a welcome-to-VIP email announcing perks and offering an exclusive discount, followed by a reminder featuring trending products. This flow strengthens loyalty among the brand's most valuable segment.

**Note:** The source material for this flow is thin (fewer than 20 lines of procedural detail). The following SOP builds on the available source data without fabricating steps beyond what is documented in the vault.

## Pre-Flight Checklist
Before building, verify:

- [ ] Klaviyo admin account with segment and flow editor permissions
- [ ] Customer data pipeline confirmed — Klaviyo is receiving purchase/spend data from ecommerce platform
- [ ] VIP segment criteria defined (see Step 2 for options)
- [ ] VIP-exclusive discount code configured and active (e.g., VIP20 for 20% off)
- [ ] Brand email template approved
- [ ] Trending/bestselling products identified for Email 2

#### Step 1: Analyze Customer Data
**Action:** Go to Klaviyo → Analytics → Metrics → Placed Order → "View Details" → review customer order frequency and spend distribution.

**Tool:** Klaviyo Analytics
**Input:** None — use existing data
**Expected Result:** Understanding of where the "high-value" threshold lies in your customer base (e.g., top 10% by spend, customers with 3+ orders)
**If Failed:** Export order data from ecommerce platform and analyze in spreadsheet
**Undo:** Document the threshold; adjust as data improves

#### Step 2: Create the VIP Segment
**Action:** Navigate to Klaviyo → Segments → Create Segment → define VIP criteria using one of these 4 approaches:

| Approach | Criteria | Best For |
|----------|----------|----------|
| A: Order count | "Placed Order" > X times over all time | High-frequency, low-AOV brands |
| B: Spend total | "Total Spent" > $X over all time | Low-frequency, high-AOV brands |
| C: Both AND | Order count > X AND Total Spent > $Y | Strict VIP — highest CLTV |
| D: Either OR | Order count > X OR Total Spent > $Y | Broader VIP — larger segment |

**Tool:** Klaviyo segment builder
**Input:** Criteria values based on Step 1 analysis
**Expected Result:** Segment populates with VIP customers (check preview)
**If Failed:**
  - No customers appear → thresholds too high — lower them
  - Too many customers (> 30% of base) → thresholds too low — raise them
**Undo:** Edit segment criteria or delete segment and recreate

#### Step 3: Name and Save the Segment
**Action:** Name segment `[Brand Name] — VIP Customers` → Save
**Tool:** Klaviyo segment builder
**Input:** Segment name
**Expected Result:** Segment appears in Segments list with member count
**If Failed:** Rename and re-save
**Undo:** Delete segment

#### Step 4: Create New Flow in Klaviyo
**Action:** Navigate to Klaviyo → Flows → Create Flow → create from a segment trigger
**Tool:** Klaviyo flow builder
**Input:** None
**Expected Result:** New flow with segment-based trigger
**If Failed:** Ensure segment exists and has members

#### Step 5: Name the Flow
**Action:** Rename to `[Brand Name] — VIP Flow`
**Tool:** Klaviyo flow editor
**Input:** Brand name + " — VIP Flow"
**Expected Result:** Flow name updates
**If Failed:** Refresh and retry
**Undo:** Rename back

#### Step 6: Configure the Trigger
**Action:** Set trigger to "Added to Segment" → select `[Brand Name] — VIP Customers` segment
**Tool:** Klaviyo trigger panel
**Input:** Segment selection
**Expected Result:** When a customer qualifies for the VIP segment, they enter the flow
**If Failed:** Verify segment trigger is available (should be for all segment types)
**Undo:** Change trigger to different segment or metric

#### Step 7: Add Flow Filter
**Action:** Click trigger node → "Flow Filters" → add:
- **Placed Order** — "0 times since starting this flow"

**Tool:** Klaviyo filter panel
**Input:** Add filter
**Expected Result:** Customers who have already purchased since entering the VIP flow are excluded
**If Failed:** Ensure "since starting this flow" is selected
**Undo:** Remove filter

#### Step 8: Add Email 1 Node (Immediate)
**Action:** Click "+" below trigger → select "Email" → keep "Send Immediately"
**Tool:** Klaviyo flow editor
**Input:** None
**Expected Result:** Email 1 node with zero delay
**If Failed:** Re-add node
**Undo:** Delete

#### Step 9: Design Email 1
**Action:** Click Email 1 → "Edit Email" → design:

- **Send Timing:** Immediately (no delay)
- **Subject Line Ideas:**
  - "You're officially a VIP 🎉"
  - "Welcome to the VIP club"
  - "Exclusive access — just for you"
  - "You've earned this"
  - "Our top customers get…"

- **Preview Text:** Reinforce exclusivity (e.g., "You're among our most valued customers — here's your welcome gift")

- **Body Content:**
  - Opening: Celebration — they've earned VIP status through their loyalty
  - Perks: List the VIP benefits (discount code, early access, free shipping, exclusive products)
  - Discount: Deliver the exclusive VIP discount code with clear explanation
  - CTA: "Shop Your VIP Perks" or "Claim Your Reward"
  - Personal note: Make it feel personal, like a thank-you from the brand

**Tool:** Klaviyo email editor
**Input:** Copy, discount code, perk details, CTA
**Expected Result:** Email renders in desktop and mobile preview
**If Failed:** Common issues: discount code not rendering → hard-code it
**Undo:** Save draft, edit further

#### Step 10: Add 7-Day Wait Node
**Action:** Click "+" below Email 1 → "Wait" → set to "7 days"
**Tool:** Klaviyo wait node
**Input:** 7 days
**Expected Result:** 7-day pause before Email 2
**If Failed:** Ensure unit is "days"
**Undo:** Adjust timing

#### Step 11: Add Purchase Filter
**Action:** Between wait and Email 2 → add conditional split:

- **Condition:** Placed order 0 times since entering this flow
- **If YES (no purchase):** Continue to Email 2
- **If NO (purchased):** End the flow

**Tool:** Klaviyo conditional split
**Input:** "Placed Order" = 0 "since entering this flow"
**Expected Result:** Only non-purchasers receive Email 2
**If Failed:** Check filter condition
**Undo:** Remove split

#### Step 12: Design Email 2
**Action:** Click Email 2 → "Edit Email" → design:

- **Subject Line Ideas:**
  - "Trending among VIPs 🔥"
  - "Don't miss these VIP picks"
  - "What other VIPs are loving"
  - "Your VIP discount expires soon"

- **Preview Text:** Social proof angle (e.g., "See what's trending with our top customers")

- **Body Content:**
  - Opening: Reference the VIP offer from Email 1
  - Trending products: 3-4 trending or best-selling products with images and prices
  - Social proof: "Our VIP customers love these"
  - Reminder: Reinforce the exclusive discount code
  - CTA: "Explore VIP Picks" or "Shop Now"

**Tool:** Klaviyo email editor
**Input:** Trending product images, links, copy
**Expected Result:** Email renders well
**If Failed:** Product block empty → verify product feed
**Undo:** Save draft and re-edit

#### Step 13: Send Test Emails
**Action:** Click "Review & Test" → send both emails to yourself and 2-3 team members
**Tool:** Klaviyo review panel
**Input:** Email addresses
**Expected Result:** Both emails arrive in inbox, discount code works, product links resolve
**If Failed:** 
  - Discount not working → verify code in platform
  - Product images broken → use HTTPS URLs
**Undo:** Edit and re-send

#### Step 14: Publish the Flow
**Action:** Toggle flow ON
**Tool:** Klaviyo flow editor
**Input:** None
**Expected Result:** Flow status = "Live." VIP customers in the segment enter the flow.
**If Failed:** Check for warning triangles
**Undo:** Toggle OFF

#### Step 15: Monitor Performance (First 30 Days)
**Action:** Check flow analytics weekly:

- **Recipients Entered:** Depends on VIP segment size
- **Email 1 Open Rate:** Target > 30% (VIP customers are more engaged)
- **Email 2 Open Rate:** Target > 20%
- **Conversion Rate:** Target > 5% repeat purchase within 30 days
- **Unsubscribe Rate:** Should be < 0.3%

**Tool:** Klaviyo flow analytics
**Input:** None
**Expected Result:** Metrics tracking toward targets
**If Failed:** 
  - Low open rates → test subject lines with stronger VIP framing
  - Low conversion → increase discount depth or add more compelling perks
**Undo:** Pause flow, make edits, resume

### Decision 1: Which Segment Approach?
| Segment Size | Approach | Why |
|-------------|----------|-----|
| Top 10% of customers by spend | Approach B or C (spend-based) | Focuses on revenue contribution |
| Repeat buyers (3+ orders) | Approach A (order count) | Rewards frequency/loyalty |
| Small customer base | Approach D (OR) | Keep VIP segment large enough to be meaningful |
| Large customer base (10K+) | Approach C (AND) | Strict criteria — true VIPs only |

### Decision 2: What Perks to Offer?
**Check:** Brand margins and product catalog.
**High margins, premium brand:** 20% off + early access to new drops + free shipping.
**Moderate margins:** 15% off + free shipping over $X.
**Low margins, high volume:** Free shipping + double loyalty points + exclusive access to limited products.

### Decision 3: Segment Refresh Frequency
**Check:** Customer purchase velocity.
**High velocity (weekly/monthly purchases):** Refresh segment daily or weekly.
**Low velocity (quarterly/annual purchases):** Refresh segment weekly or monthly.
**Default:** Set segment to refresh daily via Klaviyo segment scheduling.

## Completion Checklist
- [ ] VIP segment created with documented criteria
- [ ] Segment populated with qualifying customers
- [ ] Flow created: `[Brand Name] — VIP Flow`
- [ ] Trigger: "Added to Segment" → VIP segment
- [ ] Filter: Placed Order 0 times since starting flow
- [ ] Email 1 built (welcome + perks + discount)
- [ ] 7-day wait node between Email 1 and Email 2
- [ ] Purchase filter before Email 2 (non-buyers only)
- [ ] Email 2 built (trending products + discount reminder)
- [ ] Both test emails verified (inbox, codes, links)
- [ ] Flow published (Live)
- [ ] Monitoring schedule set (weekly for first 30 days)

## Error Recovery
| Error | Symptom | Root Cause | Fix |
|-------|---------|------------|-----|
| VIP segment empty | Segment shows 0 members | Thresholds too high or data not syncing | Check Klaviyo → Analytics → Placed Order to verify data is arriving. Lower threshold criteria. Test with a low threshold (e.g., 1 order) to confirm segment works. |
| Customers enter flow repeatedly | Same customer enters VIP flow multiple times | Segment trigger re-fires or flow filter missing | Ensure flow filter "Placed Order 0 times since starting flow" is in place. Check that segment is not set to re-evaluate existing members too frequently. |
| Low open rates on VIP flow | VIP emails perform worse than regular campaigns | VIP segment includes non-engaged customers | Add engagement filter to segment (e.g., "Opened Email in the last 60 days"). True VIPs should be engaged. |
| Discount code leaked to non-VIP | Discount code shared publicly | Code listed without restriction | Set code to single-use per customer or require account login in ecommerce platform |
| Segment too large (> 30% of base) | Most customers are "VIP" | Threshold too low | Raise spend or order count thresholds. True VIP should be top 10-20% of customers. |

## Maintenance
- **Review cadence:** Every 30 days — check segment health, open rates, conversion rate
- **Threshold adjustment:** Every 90 days — adjust VIP thresholds as customer base grows
- **Perk refresh:** Every quarter — update perks/discounts to maintain exclusivity
- **Product update:** Monthly — refresh trending products in Email 2
- **Segment cleanup:** Quarterly — remove unengaged profiles from VIP segment

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-04 | Initial creation — VIP Flow SOP from Chase Dimond framework + synthesis card. Source material is thin (< 20 lines); procedural detail limited to what's documented. |

## See Also
- [[SOP-flow-winback]] — Winback flow for lapsed VIPs (separate VIP winback variant recommended)
- [[SOP-flow-site-abandonment]] — Top-of-funnel recovery
- [[SOP-flow-sunset]] — List hygiene for unengaged subscribers
- [[_synthesis-flow-architecture]] — Flow connection map



### 11. flow-welcome

## Purpose
The Welcome Flow is the highest-revenue-producing automated sequence in any ecommerce email program. It is sent to new email subscribers over 7-14 days, converting curious prospects into first-time customers. This sequence addresses six core customer objections (Who is this brand? Are they real? Will they scam me? Does the product work? Is it worth the price?) through strategic content distribution. Missing or poorly executing this flow means losing the highest-intent, most engaged audience the brand will ever have.

## Pre-Flight Checklist
- [ ] Klaviyo account access with admin or manager permissions
- [ ] New subscriber list confirmed active and accepting signups
- [ ] Discount/incentive code created in Klaviyo Promotions or ecommerce platform
- [ ] Dynamic product blocks configured (bestsellers, categories)
- [ ] Subject line A/B testing enabled in flow settings
- [ ] Flow filter set: "Placed order 0 times over all time"
- [ ] Brand assets ready: logo, hero images, product photos, founder photo, social proof (reviews, press mentions)
- [ ] Back-population trigger configured (one-time clone for existing subscribers)
- [ ] Auto-resend logic configured for Email 1 non-openers

---

#### Step 1: Create the Welcome Flow Trigger
**Action:** Create a new flow in Klaviyo triggered by "List — Subscribed to List" for the primary subscriber list.
**Tool:** Klaviyo — Flows > Create Flow > List Trigger
**Input:** Select the subscriber list tied to pop-up/embedded forms
**Expected Result:** Flow appears in Klaviyo with "List: [List Name] — Subscribed" as the trigger
**If Failed:** Verify the list is connected to the signup forms. Check that the list is active.
**Undo:** Delete the flow draft or disable the trigger.

#### Step 2: Apply Flow Filter
**Action:** Add a flow filter: "Placed Order 0 times" over all time.
**Tool:** Klaviyo — Flow > Add Filter > "What someone has done" > Placed Order > 0 times Over All Time
**Input:** None required
**Expected Result:** Only non-buyers enter the flow. Existing customers are excluded.
**If Failed:** Verify the "Placed Order" metric exists in Klaviyo and is connected to Shopify/WooCommerce.
**Undo:** Remove the filter.

#### Step 3: Configure Email 1 — Welcome (Immediate)
**Action:** Create Email 1, send immediately after trigger (0 minute delay).
**Tool:** Klaviyo — Flow > Add Email > Set Timing to "Right away"
**Input:**
- **Subject Line A/B test:** Test 2 from the subject line pool (e.g., "Welcome to [Brand]!" vs "Your _% off code is waiting for you…")
- **Content Buckets:**
  - Welcome header + brand introduction (1-2 sentences)
  - Thank you for subscribing
  - Deliver discount code prominently
  - Introduce brand USPs (2-3 bullet points)
  - Social proof snippet (review or testimonial)
  - Bestseller product grid (dynamic block)
  - Primary CTA: "Shop Bestsellers" or "Claim Your Discount"
- **Preview Text:** Summarize the discount or brand intro in ~90 characters
- **Design:** High-level branded template (not plain text)
**Expected Result:** Email triggers immediately on subscription. Target 30-50%+ open rate.
**If Failed:** Check subject line preview rendering, test send to yourself. Verify dynamic blocks have products.
**Undo:** Pause the email node.

#### Step 4: Configure Auto-Resend for Email 1 Non-Openers
**Action:** Add a conditional split after Email 1: if "Opened Email" is false, add a 1-day delay and resend Email 1 with a different subject line.
**Tool:** Klaviyo — Flow > Add Conditional Split > "Did Open? Email" > select Email 1. Then add a time delay (1 day). Then add Email node with alternate subject line.
**Input:**
- Original Email 1: Subject A
- Resend Email 1: Subject B (different from A and from the A/B test variants)
- Content: Same body copy as Email 1
**Expected Result:** Subscribers who didn't open the first send receive a second chance with fresh subject line after 1 day.
**If Failed:** Check the conditional split logic. Verify "Opened Email" metric is tracking.
**Undo:** Remove the conditional split and resend node.

#### Step 5: Configure Email 2 — Brand Story
**Action:** Create Email 2 sent 1-2 days after Email 1. Set conditional: only send if recipient has NOT placed an order since entering flow.
**Tool:** Klaviyo — Flow > Add Time Delay (1 day) > Add Conditional Split (Placed Order 0 times) > Add Email
**Input:**
- **Subject Line Ideas:** "A note from our founder", "Our story", "The brains behind it all", "Here's a bit more about us"
- **Content Buckets:**
  - Brand founding story (2-3 paragraphs)
  - Mission statement
  - Founder photo if available (personal feel)
  - Unique quality standards / what makes the brand different
  - Reminder of discount code
  - Soft CTA: "Learn More" or "Shop Our Story"
- **Design:** High-level branded template
**Expected Result:** 20-40% open rate. Subscribers feel connected to the brand mission.
**If Failed:** Test different time delays (1 day vs 2 days). A/B test subject lines.
**Undo:** Pause or adjust the email node.

#### Step 6: Configure Email 3 — Brand USPs / Social Proof
**Action:** Create Email 3 sent 2-3 days after Email 2. Conditional: only send if no purchase made yet.
**Tool:** Klaviyo — Flow > Add Time Delay (2 days) > Add Conditional Split (Placed Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "Our Mission", "What Makes Us So Special?", "Not your average [industry] brand…", "Our customers say it best"
- **Content Buckets:**
  - Social proof: customer reviews, press features, celebrity endorsements
  - Popular products grid (dynamic block)
  - Why the brand stands out (2-3 USPs with icons or bullet points)
  - Mission statement reinforcement
  - Discount reminder
  - CTA: "See What Makes Us Different" or "Shop Best Sellers"
- **Design:** High-level branded template with testimonial callouts
**Expected Result:** 20-30% open rate. Undecided subscribers gain confidence.
**If Failed:** Review social proof sourcing. Ensure reviews are recent and relevant.
**Undo:** Pause email node.

#### Step 7: Configure Email 4 — Discount Reminder / Community Focus
**Action:** Create Email 4 sent 3-4 days after Email 3. Conditional: only send if no purchase yet.
**Tool:** Klaviyo — Flow > Add Time Delay (3 days) > Add Conditional Split (Placed Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "Don't forget your welcome discount!", "_% OFF your first order!", "We can't hold this forever", "Pending: claim your discount"
- **Content Buckets:**
  - Community focus (join social following, customer stories)
  - Urgency around discount offer (expiration messaging)
  - Risk reversals (guarantee, easy returns)
  - Testimonials for trust
  - CTA: "Claim Your Discount Before It's Gone"
- **Design:** High-level branded template with urgency visual
**Expected Result:** 20-30% open rate. Subscribers feeling urgency to convert.
**If Failed:** Adjust urgency language. Test subject lines with emojis.
**Undo:** Pause email node.

#### Step 8: Configure Email 5 — Us vs Them
**Action:** Create Email 5 sent 3-4 days after Email 4. Conditional: only send if no purchase yet.
**Tool:** Klaviyo — Flow > Add Time Delay (3 days) > Add Conditional Split (Placed Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "Us Vs Them", "Here Are The Facts", "Why We Shine", "The [Brand] Difference"
- **Content Buckets:**
  - Direct comparison: your brand vs competitors (factual, not negative)
  - Outline brand USPs with specific data points
  - Why customers choose this brand over alternatives
  - CTA: "See Why We're Different" or "Try the Best"
- **Design:** Comparison table or side-by-side visual (high-level design)
**Expected Result:** Subscribers who need more convincing get the final proof they need.
**If Failed:** Ensure competitor comparisons are accurate and defensible.
**Undo:** Pause email node.

#### Step 9: Configure Email 6 — Testimonials
**Action:** Create Email 6 sent 3-4 days after Email 5. Conditional: only send if no purchase yet.
**Tool:** Klaviyo — Flow > Add Time Delay (3 days) > Add Conditional Split (Placed Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "[Testimonial quote]", "Don't Believe Us? 🌟", "We're kind of a big deal…", "Our customers have spoken"
- **Content Buckets:**
  - 3-5 customer testimonials with photos if available
  - Media features and press logos
  - Ratings display (star ratings)
  - Any content proving brand legitimacy
  - CTA: "Join Our Happy Customers"
- **Design:** Testimonial cards with high-level branded design
**Expected Result:** Social proof overcomes remaining skepticism.
**If Failed:** Source more/different testimonials. Rotate press features.
**Undo:** Pause email node.

#### Step 10: Configure Email 7 — Last Chance
**Action:** Create Email 7 sent 3-4 days after Email 6. Conditional: only send if no purchase yet.
**Tool:** Klaviyo — Flow > Add Time Delay (3 days) > Add Conditional Split (Placed Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "Gone forever.", "[LAST CHANCE] _% off", "Final opportunity for _% off", "Tomorrow is the last day"
- **Content Buckets:**
  - Time/urgency-based graphic (countdown or expiration visual)
  - Explicitly state discount expiration
  - Keep it simple — one clear message
  - Strong CTA: "Shop Now — Last Chance"
- **Design:** Bold, minimal, urgency-driven design
**Expected Result:** Still-undecided subscribers get a final push to convert.
**If Failed:** Check that discount code is still valid. Adjust urgency tone.
**Undo:** Pause email node.

#### Step 11: Configure Email 8 — Everything Okay?
**Action:** Create Email 8 sent 5-7 days after Email 7. Conditional: only send if no purchase yet.
**Tool:** Klaviyo — Flow > Add Time Delay (5 days) > Add Conditional Split (Placed Order 0) > Add Email
**Input:**
- **Subject Line Ideas:** "Is everything okay?", "Just checking in", "We're here to help", "All good?"
- **Content Buckets:**
  - Text-based email (no high-level design — feels personal)
  - Founder/friendly tone: "Hey [name], noticed you haven't grabbed anything yet"
  - Remind of discount code (low pressure)
  - Offer resources (FAQ, customer service, sizing guide)
  - Encourage replies: encourage customer to respond with questions
  - CTA: "Reply to this email" or "Shop When You're Ready"
- **Design:** Plain text format (increased reply rates)
**Expected Result:** Personal touch primes subscribers for future purchase even if they don't buy now. Higher reply rates build relationship.
**If Failed:** Adjust personal tone. Test plain text vs light design.
**Undo:** Pause email node.

---

#### Step 12: Clone the Welcome Flow for Back-Population
**Action:** Clone the completed Welcome Flow in Klaviyo.
**Tool:** Klaviyo — Flows > Welcome Flow > Manage Flow > Clone
**Input:** Flow to clone = the completed Welcome Flow from Phase 1
**Expected Result:** A duplicate flow named "[Original Name] — Back Populate" appears.
**If Failed:** Check that the original flow is saved and published.
**Undo:** Delete the cloned flow.

#### Step 13: Adjust Subject Lines and Copy for Existing Subscribers
**Action:** Update subject lines and body copy in the cloned flow to frame the email as a brand update or re-introduction (not a standard first-time welcome).
**Tool:** Klaviyo — Edit each email in the cloned flow
**Input:** Change subject lines to reflect "new face of [Brand]" or "you're invited to see what's new." Adjust body copy to acknowledge the subscriber may have been on the list for a while.
**Expected Result:** Emails feel like a re-engagement / brand update, not a generic welcome.
**If Failed:** Review copy for tone misalignment with existing subscribers.
**Undo:** Re-clone the original flow.

#### Step 14: Back-Populate — Critical Setting
**Action:** Navigate to Manage Flow > Back Populate. Select "From When Button Is Clicked" (NOT "When They Joined").
**Tool:** Klaviyo — Flow > Manage Flow > Back Populate
**Input:**
- **Timing setting:** "Populate from the time the button is clicked" (CRITICAL)
- This sends the entire sequence to all existing subscribers at once
**Expected Result:** Existing list subscribers receive the re-engagement welcome sequence starting immediately.
**If Failed:** If you select "When They Joined," the flow sends emails based on old join dates, resulting in backdated timing. Start over if this happens.
**Undo:** Immediately turn off the cloned flow to stop sends.

---

#### Step 15: Send Test Emails
**Action:** Send test versions of all 8 emails to yourself and 2 team members. Verify rendering on desktop, mobile, and Gmail/Outlook/Apple Mail.
**Tool:** Klaviyo — Email Preview & Test
**Input:** Add test email addresses
**Expected Result:** All emails render correctly across clients. Links work. Dynamic blocks populate with real products. Subject lines and preview text display correctly.
**If Failed:** Fix broken links in Klaviyo. Adjust dynamic block fallback content. Resize images that break layout.
**Undo:** Edit and re-test.

#### Step 16: Verify Flow Logic End-to-End
**Action:** Walk through the flow tree and verify:
- Conditional splits fire on correct metrics
- Time delays are correct
- Auto-resend path only triggers for non-openers
- Each email sends only if no purchase occurred yet
**Tool:** Klaviyo — Flow Builder (visual tree)
**Input:** Flow tree review
**Expected Result:** Flow logic flows as designed. No orphaned paths, no infinite loops, no missing conditions.
**If Failed:** Rebuild the faulty split or node. Use Klaviyo's flow preview to simulate a profile entering the flow.
**Undo:** Edit individual nodes.

#### Step 17: Enable A/B Subject Line Testing
**Action:** Enable A/B testing on Email 1 (highest impact) and optionally on Emails 2-4. Set winning metric to "Opens" with 50/50 split and 4-6 hour test window.
**Tool:** Klaviyo — Email Node > A/B Test Settings
**Input:**
- Winning metric: Opens (or Clicks for later emails)
- Split: 50/50
- Test duration: 4-6 hours
- Send winning variant to remaining recipients
**Expected Result:** Subject lines are systematically optimized. Winning variant goes to most recipients.
**If Failed:** Ensure sufficient list size for statistical significance (>1000 recipients).
**Undo:** Disable A/B testing on individual nodes.

#### Step 18: Publish the Flow
**Action:** Set the Welcome Flow to "Live."
**Tool:** Klaviyo — Flow > Status > Set to Live
**Input:** None
**Expected Result:** Flow begins accepting new subscribers immediately. Auto-resend and all 8 emails fire according to schedule.
**If Failed:** Check that flow has no errors (Klaviyo flags missing conditions). Verify trigger list is connected.
**Undo:** Set flow to Draft.

#### Step 19: Activate Back-Population Flow
**Action:** Set the cloned back-population flow to "Live" for a limited window (24-48 hours).
**Tool:** Klaviyo — Cloned Flow > Status > Set to Live
**Input:** None
**Expected Result:** Existing list subscribers begin receiving the re-engagement sequence.
**If Failed:** If sends seem too aggressive, pause the flow and adjust timing.
**Undo:** Set cloned flow to Draft.

---

#### Step 20: Monitor First 7 Days Post-Launch
**Action:** Check flow analytics daily for the first week. Track: open rates, click rates, placed order rate, unsubscribe rate.
**Tool:** Klaviyo — Flows > [Welcome Flow] > Analytics
**Input:** Daily review
**Expected Result:** Email 1 open rate: 30-50%+. Overall flow conversion: 8-12%+ placed order rate.
**If Failed:** If open rates are low, test new subject lines. If click rates are low, review CTA placement and copy.
**Undo:** Adjust content per email, re-publish.

#### Step 21: A/B Test Time Delays
**Action:** After 30 days of data, test different time delays between emails (1 day vs 2 day, etc.)
**Tool:** Klaviyo — Clone the flow > Adjust time delays > Compare performance
**Input:** Current delay vs new delay hypothesis
**Expected Result:** Data shows optimal send timing for the specific audience.
**If Failed:** No statistical difference after 30 days — keep current timing.
**Undo:** Revert to original timing.

---

### Decision: Auto-Resend Timing
**Check:** Review open rate of Email 1 first send
**If OPEN RATE > 40%:** Keep 1-day auto-resend delay
**If OPEN RATE < 30%:** Reduce auto-resend delay to 12 hours or add a second auto-resend at 48 hours

### Decision: Discount Ladder Positioning
**Check:** Review conversion rate after Email 4 (discount reminder)
**If CONVERSION < 5% after Email 4:** Consider offering a small incremental discount in Emails 5-8
**If CONVERSION > 10% after Email 4:** Keep current structure; discount is working as positioned
**If UNSUBSCRIBE > 0.5% after discount emails:** Reduce discount language frequency; lead with value instead

### Decision: Email 3 (Social Proof) Content Depth
**Check:** Click rate on Email 3 vs Email 2
**If Email 3 clicks > Email 2 clicks:** Social proof is more compelling than brand story for this audience — increase testimonial content in future emails
**If Email 3 clicks < Email 2 clicks:** Brand story resonates more — move brand story earlier or make social proof more visual

### Decision: Back-Population Repeat Interval
**Check:** Revenue from back-population vs standard flow
**If back-population revenue > 20% of monthly email revenue:** Run back-population quarterly
**If back-population revenue < 5% of monthly email revenue:** Discontinue; focus on list growth

---

## Completion Checklist
- [ ] Welcome Flow created with all 8 emails — Klaviyo flow tree shows complete sequence
- [ ] Auto-resend configured for Email 1 non-openers — conditional split + resend node verified
- [ ] Flow filter applied: "Placed order 0 times over all time" — no existing customers in flow
- [ ] Back-population flow cloned and ready — copy adjusted for existing subscribers
- [ ] All subject lines added (8 primary + variants for auto-resend)
- [ ] A/B testing enabled on Email 1 — 50/50 split, opens as winning metric
- [ ] Test emails sent and verified across desktop, mobile, Gmail, Outlook
- [ ] All dynamic product blocks configured with real product fallbacks
- [ ] Tracking/UTM parameters set on all links
- [ ] Discount code active and verified in promotions
- [ ] Flow set to Live — new subscribers entering
- [ ] Back-population flow live for 24-48 hour window

---

## Error Recovery
| Error | Symptom | Root Cause | Fix |
|-------|---------|------------|-----|
| Low open rate on Email 1 | < 25% open rate | Subject line not compelling; sender name not recognized | A/B test 5+ new subject lines. Ensure sender name is brand name, not generic. |
| Dynamic products not showing | Blank product block | Product feed disconnected; metric not flowing | Reconnect Shopify/WooCommerce integration in Klaviyo > Integrations. Check product catalog sync. |
| Auto-resend not firing | Non-openers don't get second email | Conditional split metric wrong; "Opened Email" tracking not set up | Verify "Opened Email" metric exists. Recreate conditional split with correct metric. |
| Back-population sends at wrong time | Emails arriving with incorrect timing | "When They Joined" selected instead of "When Button Clicked" | Turn off flow. Re-clone from original. Select correct timing setting. |
| Unusually high unsubscribe rate | > 1% unsubscribes per email | Frequency too aggressive; content not relevant | Extend time delays. Review content relevance. Reduce promotional density. |
| Discount code not applying | Customers report code doesn't work | Code expired; code not connected to Klaviyo promotions | Check code validity in promotions dashboard. Re-sync Klaviyo promotions. |
| Placed order filter blocking valid entries | Customers in flow after purchase | Metric tracking delay; filter set incorrectly | Verify "Placed Order" metric fires on paid status. Check filter logic: "0 times since starting flow." |

---

## Maintenance
- **Review cadence:** Every 30 days — review flow analytics, subject line performance, conversion rates
- **Update triggers:**
  - Brand redesign or messaging change → update all email content
  - Discount/pricing change → update promo codes across all relevant emails
  - New social proof (awards, press, testimonials) → rotate into Emails 3, 4, 6
  - Seasonal campaigns → adjust timing or add seasonal variants
  - Subject line fatigue → refresh subject line pool quarterly
- **Version history:**

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-04 | Initial creation — 8-email welcome sequence with auto-resend, back-population, discount ladder |

---

*See also: `/root/.hermes/skills/email-marketing/flow-welcome/SKILL.md` (Hermes agent skill for autonomous execution)*



### 12. flow-winback

## Purpose
This SOP ensures every brand deploys a Customer Winback Flow that re-engages past customers who haven't purchased within their typical buying cycle. It's 5x more expensive to acquire new customers than retain existing ones, making this one of the highest-ROI flows. The Winback Flow sends a 3-email sequence — starting personal, doubling down with a discount, and closing with a text-based urgency email — designed to recover dormant customers before they churn permanently. Without this flow, brands lose repeat revenue and let high-LTV customers drift away silently.

## Pre-Flight Checklist
Before building, verify:

- [ ] Klaviyo admin account with full flow editor permissions
- [ ] Customer buying cycle analysis completed (data-driven, not assumed)
- [ ] Discount code configured (e.g., WELCOMEBACK15 for 15% off) — active in the ecommerce platform
- [ ] Brand email template ready (including text-based email format for email 3)
- [ ] "Placed Order" metric confirmed firing correctly in Klaviyo
- [ ] Delivery timing determined: 60-120 days (non-replenishable) or 45-60 days (replenishable)
- [ ] Subject line variants prepared for each of the 3 emails

#### Step 1: Analyze Customer Buying Cycle
**Action:** Export customer purchase data from Klaviyo (Analytics → Metrics → Placed Order → "View Details" → Export) or from the ecommerce platform. Calculate average days between first and second purchase for customers who have purchased at least twice.

**Tool:** Klaviyo Analytics or Shopify/Platform analytics
**Input:** Raw purchase data (order dates, customer IDs)
**Expected Result:** A clear average buying cycle length (e.g., "average repeat purchase occurs at 72 days")
**If Failed:** If insufficient data (< 50 repeat customers), use industry benchmarks: 60-90 days for general DTC, 30-60 days for consumables/replenishable
**Undo:** Document the benchmark used and update when actual data becomes available

#### Step 2: Classify Brand Type
**Action:** Determine if the brand sells replenishable or non-replenishable products:
- **Replenishable:** Products that get consumed and re-bought (skincare, supplements, food, toiletries, cleaning products, pet supplies)
- **Non-replenishable:** Products bought once and used for years (furniture, electronics, apparel, home decor, durable goods)

**Tool:** Product catalog review
**Input:** List of product categories and typical repurchase behavior
**Expected Result:** Classification documented (e.g., "SkinnyTee — Apparel — Non-replenishable")
**If Failed:** If the brand has both types, create separate winback flows for each product category with different timing
**Undo:** Change classification if further analysis contradicts initial assessment

#### Step 3: Create New Flow in Klaviyo
**Action:** Navigate to Klaviyo → Flows → Create Flow → Create from Scratch
**Tool:** Klaviyo web app
**Input:** None
**Expected Result:** Blank flow canvas opens
**If Failed:** Verify flow editor permissions
**Undo:** Delete flow if created in error

#### Step 4: Name the Flow
**Action:** Click flow name (top left) → rename to `[Brand Name] — Winback`
**Tool:** Klaviyo flow editor
**Input:** Brand name + " — Winback"
**Expected Result:** Flow name updates
**If Failed:** Refresh page, retry
**Undo:** Rename back

#### Step 5: Set the Trigger — Placed Order
**Action:** Click trigger node → select "Placed Order" as the starting event
**Tool:** Klaviyo trigger configuration
**Input:** Select "Placed Order" from metric dropdown
**Expected Result:** Green "Placed Order" trigger node appears
**If Failed:** Search for "Placed Order" in metric search
**Undo:** Delete trigger and re-select

#### Step 6: Configure the Time Delay Before Entering the Flow
**Action:** Under the trigger node settings → set the time delay BEFORE the flow starts based on your buying cycle

- **Non-replenishable:** 60-120 day delay
- **Replenishable:** 45-60 day delay

**Tool:** Klaviyo trigger → "Time Delay" setting on the connector between trigger and first email node
**Input:** Enter the number of days in the wait node
**Expected Result:** A wait node appears between the trigger and the first email with the specified delay
**If Failed:** Verify the delay is added as a separate "Wait" node, not as a filter
**Undo:** Delete the wait node and re-add with corrected timing

#### Step 7: Add Flow Filter
**Action:** Click the trigger node → "Flow Filters" → add:
- **Placed Order** — "0 times since starting this flow"

**Tool:** Klaviyo filter panel
**Input:** Add filter via "+ Add Filter"
**Expected Result:** Only customers who haven't purchased again enter the flow
**If Failed:** Ensure "since starting this flow" is selected, not "over all time"
**Undo:** Remove filter

#### Step 8: Add Email 1 Node with Timing
**Action:** Click the "+" after the delay → select "Email"
**Tool:** Klaviyo flow editor
**Input:** None
**Expected Result:** Email 1 node appears after the wait
**If Failed:** Ensure the node connects after the wait, not before
**Undo:** Delete node

#### Step 9: Design Email 1
**Action:** Click the email node → "Edit Email" → design content:

- **Send Timing:** Immediately after the wait delay expires (no additional delay)
- **Subject Line (A/B test recommended):**
  - "It's been awhile…"
  - "How's it been?"
  - "Let's catch up!"
  - "We miss you!"
  - "Time for a restock?"
  - "New memories await…"

- **Preview Text:** Warm, personal tone (e.g., "Hey — been thinking about you and wanted to share what's new")

- **Body Content:**
  - Opening: Warm, personal acknowledgment that it's been some time since their last purchase
  - Brand updates: Briefly highlight what's new or unique about the brand since their last visit
  - Product recommendations: Showcase relevant products (use product block or dynamic recommendations)
  - Discount offer: Introduce the discount code (e.g., "Here's 15% off — just for you. Use code WELCOMEBACK15")
  - CTA: "Come See What's New" or "Shop Your Favorites"

**Tool:** Klaviyo email editor
**Input:** Copy, product images, discount code, CTA button
**Expected Result:** Email renders in desktop and mobile preview
**If Failed:** 
  - Discount code not showing → verify the code is hardcoded or dynamic from Klaviyo coupon integration
  - Product block empty → verify product feed integration
**Undo:** Save draft without publishing; edit and re-save

#### Step 10: Add Wait Node (10-Day Delay)
**Action:** Click the "+" below Email 1 → select "Wait" → set to "10 days"
**Tool:** Klaviyo wait node
**Input:** 10 days
**Expected Result:** 10-day wait node connects Email 1 to Email 2
**If Failed:** Check the wait node is set to days, not hours
**Undo:** Change or delete wait node

#### Step 11: Add Email 2 Node
**Action:** Click the "+" below the wait node → select "Email"
**Tool:** Klaviyo flow editor
**Input:** None
**Expected Result:** Email 2 node after the 10-day wait
**If Failed:** Re-select email node if connection missed
**Undo:** Delete node

#### Step 12: Add Purchase Filter Between Email 1 and Email 2
**Action:** Between the wait node and Email 2 → add a conditional split:

- **Condition:** Placed order 0 times since Email 1 sent
- **If YES (no purchase):** Continue to Email 2
- **If NO (purchased):** End the flow

**Tool:** Klaviyo conditional split node
**Input:** "Placed Order" = 0 times "since entering this flow"
**Expected Result:** Only non-converters see Email 2. Customers who already purchased skip it.
**If Failed:** Verify the split is using "since entering this flow" not "over all time"
**Undo:** Remove split and re-add

#### Step 13: Design Email 2
**Action:** Click Email 2 → "Edit Email" → design content:

- **Subject Line (A/B test recommended):**
  - "X% OFF just for you"
  - "Just because we miss you"
  - "Take X% OFF your order"
  - "Limited Discount Inside"
  - "We got you a gift 🎁"

- **Preview Text:** Reinforce the offer (e.g., "Your exclusive discount is waiting")

- **Body Content:**
  - Opening: Continue the personal tone from Email 1 ("We miss you!")
  - Discount emphasis: Clearly present the discount code and expiration
  - Product showcase: Feature trending products or categories
  - Social proof: Optionally include a testimonial or review snippet
  - CTA: "Shop Your Discount" or "Claim Your Offer"
  - Soft ask: Ask if they need support or have feedback

**Tool:** Klaviyo email editor
**Input:** Copy, product images, discount code
**Expected Result:** Email renders well
**If Failed:** Verify discount code matches Email 1's code
**Undo:** Save draft and edit

#### Step 14: Add Wait Node (1-Day Delay)
**Action:** Click "+" below Email 2 → "Wait" node → set to "1 day"
**Tool:** Klaviyo wait node
**Input:** 1 day
**Expected Result:** 1-day wait between Email 2 and Email 3
**If Failed:** Ensure unit is "days" not "hours"
**Undo:** Adjust as needed

#### Step 15: Add Purchase Filter Before Email 3
**Action:** Between wait node and Email 3 → add conditional split:

- **Condition:** Placed order 0 times since entering this flow
- **If YES (no purchase):** Continue to Email 3
- **If NO (purchased):** End the flow

**Tool:** Klaviyo conditional split
**Input:** "Placed Order" = 0 times "since entering this flow"
**Expected Result:** Only non-converters from emails 1 and 2 receive Email 3
**If Failed:** Ensure the same filter logic is applied
**Undo:** Remove split

#### Step 16: Design Email 3 — Text-Based
**Action:** Click Email 3 → "Edit Email" → create a PLAIN TEXT email:

- **Format:** Text-based email (no heavy design, minimal images, plain text layout)
- **From Name:** Founder's name or a specific person's name (e.g., "Sarah from [Brand]")
- **Subject Line (A/B test recommended):**
  - "Just checking in."
  - "Do you still want X% OFF?"
  - "Are you still interested?"
  - "Last chance for X% OFF!"
  - "Last chance to claim your gift"

- **Body Content:**
  - Personal, direct tone from the founder
  - Acknowledge the prolonged absence
  - Remind them of the exclusive discount
  - Create urgency: discount is expiring
  - Invite reply (founder reads all messages)
  - CTA text link (not a button — text-based feels more personal): "Claim Your Discount"

**Tool:** Klaviyo email editor (use plain text block)
**Input:** Plain text copy, text CTA link
**Expected Result:** Email appears as a personal email from a founder
**If Failed:** 
  - If design tools force a template, strip it down to minimal layout (plain text block + single image if needed)
**Undo:** Revert to previous version

#### Step 17: Send Test Emails
**Action:** Click "Review & Test" → send all 3 emails as tests to yourself and 2-3 team members
**Tool:** Klaviyo review panel
**Input:** Email addresses
**Expected Result:** All 3 emails arrive in inbox (not spam). Links work. Discount codes render. The text-based email 3 looks personal, not template-like.
**If Failed:**
  - Email 3 doesn't look text-based → redesign using plain text blocks only
  - Discount code missing → hard-code the code in all 3 emails
**Undo:** Edit and re-send

#### Step 18: Review Flow Structure
**Action:** Visually inspect the full flow:

```
Trigger: Placed Order
  → Wait: 60-120 days (non-replenishable) or 45-60 days (replenishable)
  → Filter: Placed Order = 0 since starting flow
  → Email 1: "It's Been Awhile"
    → Wait: 10 days
    → Split: Purchased? → YES: End / NO: Continue
    → Email 2: Discount Follow-Up
      → Wait: 1 day
      → Split: Purchased? → YES: End / NO: Continue
      → Email 3: Text-Based Closer
```

**Tool:** Klaviyo flow canvas
**Input:** Visual review
**Expected Result:** Flow logic is correct. Wait nodes, splits, and emails are in the right order.
**If Failed:** Drag and drop to reorder nodes
**Undo:** Reorder back

#### Step 19: Publish the Flow
**Action:** Toggle the flow ON (green toggle at top of page)
**Tool:** Klaviyo flow editor
**Input:** None
**Expected Result:** Flow status changes to "Live." Recipients who meet the trigger + delay + filter enter the flow.
**If Failed:** Check for warning triangles — click each to see what's missing
**Undo:** Toggle OFF

#### Step 20: Set Up Performance Monitoring (First 30 Days)
**Action:** Check flow analytics weekly for the first 30 days:

- **Recipients Entered:** Should be consistent with customer base size
- **Email 1 Open Rate:** Target > 25%
- **Email 2 Open Rate:** Target > 20%
- **Email 3 Open Rate:** Target > 15%
- **Conversion Rate (repeat purchase):** Target > 3% within 30 days
- **Unsubscribe Rate:** Should be < 0.5% across all 3 emails

**Tool:** Klaviyo flow analytics
**Input:** None (data populates automatically)
**Expected Result:** Metrics trending toward targets
**If Failed:** 
  - Low open rates → test subject lines with more emotional pull
  - Low conversion → increase discount percentage or test offer framing
  - High unsubscribes on Email 3 → soften the urgency language
**Undo:** Pause flow while editing

### Decision 1: Buying Cycle Timing
**Check:** Is the brand replenishable or non-replenishable?
**If Replenishable (consumables):** Set initial delay to 45-60 days.
**If Non-replenishable (durables):** Set initial delay to 60-120 days.

### Decision 2: Discount or Gift?
**Check:** Does the brand have margin for a 15-20% discount?
**If Yes (healthy margins):** Use a discount code (e.g., 15% off).
**If No (thin margins):** Use a free shipping offer or gift-with-purchase instead.

### Decision 3: Text-Based from Founder or Brand?
**Check:** Does the brand have an identifiable founder or personality?
**If Yes (founder known):** Email 3 comes from the founder's name — highest personal touch.
**If No (corporate brand):** Email 3 comes from "The [Brand] Team" — still text-based, still personal.

### Decision 4: Discount Expiration Strategy
**Check:** Does Email 3 reference an expiring discount?
**If Yes (time-bound offer):** Set discount expiration to 3-5 days after Email 3 sends — this creates genuine urgency.
**If No (permanent code):** Add a "last chance" framing even without technical expiration (e.g., "We're retiring this offer soon").

## Completion Checklist
- [ ] Buying cycle analysis completed and documented
- [ ] Brand classified as replenishable or non-replenishable
- [ ] Flow created: `[Brand Name] — Winback`
- [ ] Initial wait delay set (60-120 days or 45-60 days)
- [ ] Filter applied: Placed Order 0 times since starting flow
- [ ] Email 1 built with subject + preview + body + discount
- [ ] 10-day wait node between Email 1 and Email 2
- [ ] Purchase split before Email 2 (non-buyers only)
- [ ] Email 2 built with discount focus
- [ ] 1-day wait node between Email 2 and Email 3
- [ ] Purchase split before Email 3 (non-buyers only)
- [ ] Email 3 built in plain text format
- [ ] All 3 test emails sent and verified (inbox, links, codes)
- [ ] Flow published (Live)
- [ ] Monitoring schedule set (weekly for first 30 days)

## Error Recovery
| Error | Symptom | Root Cause | Fix |
|-------|---------|------------|-----|
| Customers enter flow too early | Recipients who just purchased get winback email | Delay too short or trigger misconfigured | Verify initial wait delay is correct. Check the trigger is "Placed Order" with the proper delay, not "Active on Site" or other metric. |
| Discount code not working | Customer reaches site but code is rejected | Code expired, not created, or case-sensitive | Verify code is active in ecommerce platform. Set to case-insensitive. Hard-code the code in email copy as a fallback. |
| Email 3 doesn't feel personal | Email 3 looks like a template despite plain text | Using branded template instead of plain text layout | Strip to plain text block only. Remove header/footer images. Change from name to founder's name. |
| High unsubscribe on Email 1 | > 0.5% immediately from Email 1 | Wait delay too short (customer not ready) | Extend initial delay. Customer may still be in their natural buying cycle. |
| Zero conversions after 30 days | Flow sending successfully but no repeat purchases | Offer too weak, wrong products, or wrong audience | Increase discount percentage. Refresh product selection. Verify flow filters aren't excluding the wrong people. |
| Flow not triggering at all | Zero recipients after 3 weeks of being live | Wrong metric trigger or time delay misconfigured | Check trigger is "Placed Order" properly. Verify wait delay is after the trigger and before the first email. Test with a sample profile. |

## Maintenance
- **Review cadence:** Every 30 days — check open rates, conversion rate, and unsubscribe rate
- **Buying cycle update:** Re-analyze buying cycle every 90 days as customer base grows
- **Discount refresh:** Update discount code every 90 days (prevents code fatigue)
- **Subject line retest:** Every 90 days for all 3 emails
- **Product refresh:** Update product recommendations in all 3 emails quarterly

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-04 | Initial creation — Winback Flow SOP from Chase Dimond framework + wiki reference |

## See Also
- [[SOP-flow-site-abandonment]] — Top-of-funnel recovery for site visitors
- [[SOP-flow-vip]] — VIP rewards for high-spending customers
- [[SOP-flow-sunset]] — List hygiene flow for unengaged subscribers
- [[flow-winback]] — Wiki atomic note with email copy examples
- [[_synthesis-flow-architecture]] — Flow connection map and system context

---


---

## Group 2: Campaigns (13 skills)

---


### 1. campaign-back-in-stock

# SOP — Back In Stock Campaign

## Purpose

Convert demand that built up while a product was out of stock into immediate sales. The Back In Stock campaign is uniquely powerful because it combines two proven psychological drivers: popularity (the item sold out — others wanted it) and urgency (it might sell out again). Additionally, the back-in-stock email collection often brings new subscribers to the list — people who weren't subscribed before but signed up specifically for the restock notification. This SOP covers both the triggered flow (automated restock notifications for waitlist signups) and the campaign send (broader announcement of a popular item's return).

## Pre-Flight Checklist

- [ ] Klaviyo account logged in with campaign permissions
- [ ] Product confirmed back in stock with accurate inventory count in Shopify
- [ ] Back-in-stock waitlist snippet or app installed on product page (Klaviyo Back in Stock or equivalent)
- [ ] Waitlist signup data available in Klaviyo (profile property or segment)
- [ ] Product imagery updated and available
- [ ] Subject line + preview text variants drafted (3+ options)
- [ ] Discount or special offer decided for first-restock buyers (optional)
- [ ] UTM parameters defined for campaign attribution

## Procedure

### Plan 1: Inventory & Waitlist Verification

#### Step 1: Confirm Product is Back In Stock

**Action:** Verify the product has sufficient inventory to support a campaign send. Minimum threshold: enough stock to cover at least 7 days of projected demand.
**Tool:** Shopify Admin → Products → [Product Name] → Inventory.
**Input:** Product SKU. Check: quantity available, variants (size/color) in stock, expected re-supply date if limited quantity.
**Expected Result:** Product shows "In stock" with quantity > 0. Variants are available for the most popular options.
**If Failed:** If stock is very low (< 20 units), consider whether to send as a "Last Chance / Almost Sold Out" campaign instead.
**Undo:** None — this is a data verification step.

#### Step 2: Check Waitlist Signups

**Action:** Confirm that the back-in-stock waitlist has collected signups and those profiles are accessible in Klaviyo.
**Tool:** Klaviyo → Segments → Create Segment → Filter for "Back in Stock Waitlist" property or event.
**Input:** Criteria: "Has triggered 'Back in Stock Subscribe' event" OR "Has property 'back_in_stock_waitlist' contains [Product SKU/Name]."
**Expected Result:** Segment shows count of subscribers waiting for this specific product.
**If Failed:** If the back-in-stock snippet was not installed, collect waitlist via a manual form. If snippet was installed, check Klaviyo integration with Shopify.
**Undo:** N/A.

### Plan 2: Campaign Creation

#### Step 3: Build the Back In Stock Campaign Email

**Action:** Create the primary back-in-stock announcement email in Klaviyo.
**Tool:** Klaviyo → Campaigns → Create Campaign → Email.
**Input:**
- Subject line ideas: "Remember this?", "It's back!", "WE MEET AGAIN", "Guess Who's Back", "Sorry for the wait!", "RE-STOCKED"
- Preview text ideas: "Things came back for you", "Don't miss out (again)", "YOUR FAVES ARE BACK", "Hello Again", "More [product] has arrived!", "Sell-Out [Product]"
- Body layout: "Back in Stock" sticker/badge at top of email, header image showing the product (lifestyle shot preferred), simple body copy — "It's back. And it won't last long." or "[Product] is officially back in stock.", product detail shot, prominent CTA button ("Shop Now", "Grab One", "Get Yours Before It's Gone")
- GIF or animation showing product from multiple angles (recommended for engagement)
- Optional: "Back in Stock" flow triggered version with personalized subject including the product name.
**Expected Result:** Campaign draft saved with all content loaded. Test send renders correctly.
**If Failed:** Review alternatives — simpler text-based email can outperform when the product alone carries enough demand.
**Undo:** Save as draft. Edit freely until QA passes.

#### Step 4: Build Follow-Up Campaign (Part 2)

**Action:** Create a second email for subscribers who didn't purchase from the first send.
**Tool:** Klaviyo → Campaigns → Create Campaign → Email.
**Input:**
- Subject: "Guess Who's Back", "Sorry for the wait!", "RE-STOCKED"
- Preview: "Hello Again", "More anti-fog spray has arrived!", "Sell-Out Chambray"
- Body: Reinforce urgency ("Last time it sold out in hours"), different creative angle, same or similar CTA.
**Expected Result:** Follow-up draft saved, scheduled 24-72 hours after the first send.
**If Failed:** If the product sold out after the first send, cancel the follow-up.
**Undo:** Unschedule. Delete draft if not needed.

### Plan 3: Flow Setup (Back In Stock Automated)

#### Step 5: Configure Back In Stock Triggered Flow (if not already active)

**Action:** Set up or verify the automated back-in-stock flow that sends when a product returns to inventory.
**Tool:** Klaviyo → Flows → Create Flow → Back In Stock (or custom).
**Input:**
- Trigger: Product back in stock event + profile subscribed to waitlist for that product
- Email: Personalized — subject line includes the product name. Body: "[Product Name] is back!" with product image, price, and CTA.
- Timing: Send immediately when stock is restored.
**Expected Result:** Flow active and showing "Live" status in Klaviyo.
**If Failed:** If the Klaviyo back-in-stock snippet isn't installed on Shopify, follow the Klaviyo guide for installing it. The article from Klaviyo covers the specific Shopify integration steps.
**Undo:** Pause or archive the flow if it's causing issues.

### Plan 4: Deployment

#### Step 6: Segment Targeting

**Action:** Define the target segment for the campaign sends.
**Tool:** Klaviyo → Segments.
**Input:**
- **Primary segment (Waitlist):** Profiles who subscribed to the back-in-stock notification for this specific product.
- **Secondary segment (Interested):** Profiles who viewed the product page in the last 30-60 days, added to cart bu

[...content continues in source skill file...]


### 2. campaign-bestseller

# SOP — Bestseller Campaign

## Purpose

Reduce purchase overwhelm by curating and recommending the store's most popular products. For brands with large catalogs, the sheer number of choices can paralyze buyers into inaction. The Bestseller campaign solves this by showing shoppers what others — people like them — have already purchased and loved. This taps into social proof psychology and is one of the most reliable non-discount revenue drivers in the Klaviyo campaign stack.

## Pre-Flight Checklist

- [ ] Klaviyo account logged in with campaign permissions
- [ ] Sales data exported or accessible (last 30-90 days)
- [ ] Top 5-10 best-selling products identified by revenue or unit volume
- [ ] Product imagery available for selected bestsellers
- [ ] Email template ready for multi-product curation layout
- [ ] Subject line + preview text variants drafted (3+ options)
- [ ] Client approved product selection (if applicable)
- [ ] UTM parameters defined for campaign attribution

## Procedure

### Plan 1: Product Curation

#### Step 1: Identify Best-Selling Products

**Action:** Pull sales data to identify the top 5-10 products by revenue, unit volume, or both over the last 30-90 days.
**Tool:** Shopify → Analytics → Reports → Sales by Product. Alternative: eCommerce platform's product sales report.
**Input:** Time range (last 30-90 days), sort by revenue or units sold descending.
**Expected Result:** List of 5-10 products with names, SKUs, prices, images, and revenue/unit counts.
**If Failed:** If Shopify analytics is insufficient, export order data and aggregate manually or use a third-party tool.
**Undo:** Save the list. If client changes direction, re-run with different date range.

#### Step 2: Curate the Selection (3-5 Products)

**Action:** From the top 10, select 3-5 products for the email. Consider variety (different categories/prices within the store) and visual appeal.
**Tool:** Internal curation process — manual selection based on data.
**Input:** Top products list from Step 1. Also check: stock availability (don't feature out-of-stock items), margin (feature higher-margin products if possible), visual variety (mix of product types).
**Expected Result:** Finalized list of 3-5 bestseller products with images, prices, and short selling points.
**If Failed:** If fewer than 3 products have strong sales, reduce the email to 1-2 products or combine with another campaign type.
**Undo:** Swap products in or out before finalizing the email.

#### Step 3: Create (or Verify) Bestseller Collection in Shopify

**Action:** Create a Shopify collection tagged "bestsellers" or verify an existing one is accurate.
**Tool:** Shopify Admin → Products → Collections → Create Collection.
**Input:** Product list from Step 2. Manual collection (not automated) for precise control.
**Expected Result:** Collection created with the selected bestseller products. URL is stable.
**If Failed:** If products aren't appearing, check individual product status (published, in stock, not hidden).
**Undo:** Delete or edit the collection as needed.

### Plan 2: Campaign Build

#### Step 4: Build the Bestseller Email

**Action:** Create the campaign in Klaviyo with the curated bestseller products.
**Tool:** Klaviyo → Campaigns → Create Campaign → Email.
**Input:**
- Subject line: "You need these," "These best sellers are 🔥🔥🔥," "Compliments guaranteed"
- Preview text: "These are our MUST haves," "Our stuff is the COOLEST," "All the best—just for you"
- Body layout: Header with social proof angle (e.g., "Everyone's buying these right now"), product grid of 3-5 items (each with image, name, price, quick reason it's a bestseller), CTA buttons per product or one primary "Shop Bestsellers" CTA
- Design: Clean product-focused layout, minimal copy per item, price prominently displayed.
**Expected Result:** Campaign draft saved with all products loaded and links pointing to the bestseller collection.
**If Failed:** If products don't link correctly, check the collection URL. If layout breaks on mobile, adjust grid to single-column.
**Undo:** Save as draft. Edit freely until QA.

### Plan 3: Deployment

#### Step 5: Target Segment Selection

**Action:** Select the segment for this campaign.
**Tool:** Klaviyo → Segments.
**Input:** Recommended segment: active subscribers (opened or clicked in last 60 days) + past buyers (ordered in last 90 days). For new subscriber acquisition: send to all active non-buyers as an introduction to the brand's best products.
**Expected Result:** Segment reach count visible and acceptable.
**If Failed:** Narrow segment if reach is too broad. Broaden if too small.
**Undo:** Edit segment and re-preview.

#### Step 6: Send Campaign

**Action:** Deploy the bestseller campaign to the target segment.
**Tool:** Klaviyo → Campaign → Review → Send or Schedule.
**Input:** Final send time. Smart Send Time recommended.
**Expected Result:** Campaign shows "Sent" status. Reach count confirmed.
**If Failed:** If send is blocked, check Klaviyo system status and retry.
**Undo:** Unschedule before send time if changes are needed.

#### Step 7: Post-Send Monitoring

**Action:** Monitor engagement for the first 2 hours.
**Tool:** Klaviyo → Campaign → Reports.
**Input:** Watch open rate, click rate, bounce rate.
**Expected Result:** Open rate on track for segment benchmark (25-35%), click rate strong (3-6% is typical for bestseller campaigns), bounce rate < 2%, spam complaints < 0.1%.
**If Failed:** If click rate is below 2%, products may not be resonating with the segment. Try different products next time. If open rate is low, revise subject line.
**Undo:** No undo for sent emails. Record learnings.

### Plan 4: Post-Campaign Analysis

#### Step 8: Extract Performance Data

**Action:** Pull campaign metrics, especially click-through rates per product (if tracked via unique links).
**Tool:** Klaviyo → Campaign → Reports → Export.
**Input:** Campaign ID.
**Expected Result:** CSV with sent, delivered, opened, clicked, converted, 

[...content continues in source skill file...]


### 3. campaign-bfcm-holiday-mega

# SOP — BFCM/Holiday Mega-Campaign

> The highest-stakes email period of the year. Q4 (October–December) generates more eCommerce revenue than any other quarter. This SOP covers the full lifecycle: Pre-Season preparation (October), BFCM Week execution (late November), and Post-Season nurture (December–January). It is designed for brands running their entire holiday email program through Klaviyo.

---

## 1. Executive Summary

### What BFCM/Holiday Means for eCommerce Email Revenue

Black Friday / Cyber Monday is the Super Bowl of email marketing. Brands that execute well see 3-10x their normal daily revenue during BFCM week alone [Klaviyo 2026 BFCM Benchmarks]. The holiday season as a whole (October–December) typically accounts for 30-40% of annual eCommerce revenue [Shopify Q4 eCommerce Trends].

### The 3 Phases

| Phase | Timing | Focus |
|-------|--------|-------|
| **Pre-Season** | October – mid-November | Prepare infrastructure, warm engagement, build segments, finalize offers |
| **BFCM Week** | Late November (BFCM week) | Execute campaign cadence, accelerate flows, maximize revenue |
| **Post-Season** | December – January | Nurture new customers, harvest reviews, shipping deadline campaigns, New Year |

### Why This Is the Highest-Stakes Email Period

- **Inbox competition spikes:** Every brand sends during BFCM. Your subscribers' inboxes will have 50-100+ promotional emails on Black Friday alone.
- **Deliverability is fragile:** High sending volume + competitive inbox = elevated spam complaint risk. One bad send can tank reputation.
- **Revenue concentration is extreme:** For many brands, BFCM week generates more revenue than the previous 3 months combined.
- **Customer acquisition is expensive:** BFCM-acquired customers have high LTV potential *if* nurtured properly. Drop the ball post-BFCM and that acquisition spend is wasted.
- **The shipping deadline is the most powerful urgency lever in email:** Expect 1/3 to 1/2 of all Q4 email revenue in the 24 hours before the shipping cutoff.

---

## 2. Pre-BFCM Preparation (October)

Preparation begins 8-12 weeks before Black Friday [Klaviyo 2026 BFCM Benchmarks]. This phase determines whether BFCM execution succeeds or struggles.

### 2.1 Welcome Flow Update

**Action:** Add a countdown timer to the welcome series that counts down to BFCM day.

**Why:** Subscribers joining in October–November are likely BFCM shoppers. The welcome series should tease the upcoming sale without offering early discounts. The countdown timer builds anticipation and keeps your brand top-of-mind.

**Implementation:**
- Edit the Welcome flow in Klaviyo
- Add a dynamic countdown timer block to emails 2, 3, and 4
- Timer target: Black Friday (date confirmed)
- Copy: "Our biggest sale of the year starts in [COUNTDOWN]. Get ready."

### 2.2 Abandonment Flow Acceleration

**Action:** Reduce delays between abandonment emails during the BFCM window.

**Standard cadence:** Email 1 at 1 hour, Email 2 at 24 hours, Email 3 at 72 hours.

**BFCM accelerated cadence:**
- Abandoned Checkout: 15 min → 1 hour → 4 hours → 24 hours
- Abandoned Cart: 30 min → 2 hours → 6 hours
- Browse Abandonment: 2 hours → 12 hours → 24 hours

**Why acceleration works:** Purchase intent is at its highest during BFCM week. Every hour of delay risks losing the sale to a competitor. Accelerated flows capture the urgency window.

**Implementation:**
- Clone existing abandonment flows
- Create BFCM variants with accelerated timings
- Replace discount offers with scarcity messaging ("Going fast!", "Low stock!")
- Set BFCM flow activation dates so they auto-activate before Black Friday

### 2.3 Winback Flow Activation

**Action:** Activate or create a winback flow targeting lapsed customers (no purchase in 90+ days).

**Why:** Re-engaging existing subscribers is MUCH cheaper than acquiring new ones. Winback flows typically recover 5-15% of lapsed customers.

**Flow structure:**
1. Email 1 (Day 0): "We miss you — here's a sweet deal to come back"
2. Email 2 (Day 3): "Your spot is waiting" — social proof, best sellers
3. Email 3 (Day 7): "Last call" — final offer, urgency

**BFCM twist:** Target winback to complete before BFCM week so re-engaged subscribers are warm for the main event.

### 2.4 VIP Early Access List

**Action:** Build an exclusive early-access segment for BFCM.

**Segment definition:** Purchased 3+ times OR spent $500+ total AND opened/clicked in the last 60 days.

**Why VIPs matter:** Your top 10% of customers often generate 40-50% of revenue. They deserve first access to BFCM deals.

**VIP treatment during BFCM:**
- Early access: VIPs get access to BFCM deals 24 hours before the general public
- Higher discount tier: VIPs see deeper discounts than standard segments
- Personal thank-you from founder after purchase
- Exclusive post-BFCM offer (see Section 6)

**Implementation in Klaviyo:**
```
Segment: VIP Early Access
Conditions:
  - Placed order at least 3 times (all time) OR
  - Amount spent at least $500 (all time)
  - AND Has opened email at least once in the last 60 days
  - AND Has clicked email at least once in the last 60 days
```

### 2.5 List Health Audit

**Action:** Clean the email list before BFCM sending begins.

**What to remove:**
- Hard bounces — remove immediately
- Soft bounces (3+ consecutive) — suppress
- Unengaged subscribers (no open in 90+ days) — suppress from high-volume sends
- Role-based emails (info@, admin@, etc.) — suppress
- Known spam traps — remove via list cleaning service (ZeroBounce, NeverBounce)

**Re-permission campaign (run T-8 weeks):**
- Send: "Still want emails? Click here to stay."
- Non-responders: suppress entirely — do NOT email during BFCM
- Re-engaged subscribers: move to holiday segment with high-intent offers
- Expected result: 10-20% list reduction, 2-3x engagement improvement on remaining

**Deliverability benchmarks:**
| Metric | Threshold | Action if Exceeded |
|--------|-----------|-------------------|
| Bounce rate | < 3% | Pau

[...content continues in source skill file...]


### 4. campaign-bfcm-holiday

# SOP — BFCM/Holiday Campaign

## Purpose

Drive maximum Q4 revenue through a coordinated multi-campaign holiday strategy spanning Halloween through New Year. The BFCM/Holiday period represents the highest revenue opportunity of the year for eCommerce brands, with many brands generating 30–50% of annual revenue in Q4 alone. This SOP covers the full Q4 campaign calendar: Halloween hype, Shop Early, Gift Guide, 6 Days of Deals (BFCM), Shipping Deadline urgency sequence, Holiday/Xmas messaging, Sale Extended capture, Company Birthday (if applicable), and New Year campaigns. Each sub-campaign builds on the previous one to create a cohesive holiday experience that maximizes revenue while respecting subscriber engagement.

### Plan 1: Q4 Campaign Calendar & Segmentation

#### Step 1: Map the Q4 Campaign Calendar

**Action:** Plot all sub-campaigns on a single Q4 timeline. Identify key dates (Halloween, BFCM week, shipping deadline, Christmas, New Year) and work backward to schedule each campaign.

**Tool:** Calendar/spreadsheet (Google Sheets, Notion, or dedicated campaign calendar template).

**Input:** Brand's Q4 goals, past campaign calendar, USPS/UPS holiday shipping schedule (published typically in October), client input on priority campaigns.

**Expected Result:** Complete Q4 calendar mapped with campaign dates, segments assigned, and no date conflicts between sub-campaigns.

**If Failed:** If the calendar is too dense, prioritize the highest-revenue sub-campaigns: Gift Guide, 6 Days of Deals, Shipping Deadline, and Holiday/Xmas emails. Drop lower-priority ones (Halloween, Company Birthday) if bandwidth is tight.

**Undo:** Re-order or shift campaign dates as client feedback or deadlines change.

**Q4 Campaign Calendar:**

| Campaign | Timing | Theme |
--|-------------|-------|
| Late Oct | Halloween | Hype email, collection drop, holiday wishes |
| Early Nov | Shop Early | Beat delays, early bird deals |
| Early–Mid Nov | Gift Guide | Curated gifting for everyone on list |
| BFCM Week (Nov) | 6 Days of Deals | Daily BFCM deals, daily reveals |
| Early Dec | Holiday / Xmas | Happy Holidays, Merry Christmas, Gifting |
| Mid Dec (before cutoff) | Shipping Deadline | Heads up → Reminder → Last Chance |
| Late Dec | Sale Extended | "We extended our sale" capture |
| (Flexible) | Company Birthday | Brand affinity + revenue |
| Late Dec / Early Jan | New Year | New Year New You, resolutions |

#### Step 2: Define Global Segmentation Strategy

**Action:** Determine which segments each sub-campaign sends to. Build the segments in Klaviyo ahead of time.

**Tool:** Klaviyo → Segments → Create Segment.

**Input:** Segment definitions: All Active Subscribers (opened or clicked in last 90 days), Past Buyers (ordered at least once), Engaged Prospects (opened but never purchased), VIP (top 10% by spend or frequency), Lapsed (no purchase in 6+ months).

**Expected Result:** Segments created and saved in Klaviyo with live reach counts.

**If Failed:** If segment reach is too small, broaden criteria. If too large, add recency or engagement filters.

**Undo:** Edit segment criteria and re-run preview.

**Segmentation Reference Table:**

| Sub-Campaign | Primary Segment | Secondary Segment |
|-------------|----------------|-------------------|
| Halloween | All active subscribers | Past buyers + engaged prospects |
| Shop Early | Past buyers + engaged prospects | All subscribers |
| Gift Guide | All subscribers (gifting is universal) | Past buyers for personalized recs |
| 6 Days of Deals | All active subscribers | VIP (early access on Day 1) |
| Shipping Deadline | All active subscribers + recent buyers | Past 60-day buyers |
| Holiday / Xmas | All active subscribers | Segment by holiday preference (if known) |
| Sale Extended | Non-openers of BFCM sends | All subscribers (second chance) |
| Company Birthday | All subscribers (broad affinity) | VIP (higher discount tier) |
| New Year | All active subscribers | Past buyers (resolution products) |

### Plan 2: Halloween Campaign (Q4 Kickstart)

#### Step 3: Build Halloween Hype / Collection Drop Email

**Action:** Create the Halloween campaign email — the first Q4 promotional touchpoint. Start early for more promotional opportunities.

**Tool:** Klaviyo → Campaigns → Create Campaign → Email.

**Input:** Subject line from library (below), preview text, festive Halloween creative — spooky or playful depending on brand voice. Feature Halloween-specific products or seasonal bundling.

**Expected Result:** Halloween hype email drafted and ready for deployment in late October.

**If Failed:** If the brand doesn't have a Halloween collection, use a hybrid Fall + Halloween approach with 2 products from each category.

**Undo:** Save as draft. Do not schedule until creative is approved.

**Halloween Subject Lines:**
- "The 2022 Halloween Collection is Here"
- "Creep it Real"
- "Are You Ready?"

**Halloween Preview Text:**
- "This Year is BOO SH*T"
- "Witchlist Worthy"
- "Halloween is Coming"

**Brand Examples:**
- **The Chivery:** Music festival lineup format for collection drop
- **BaubleBar:** Simple hype email — can tease upcoming sale/collection
- **Luca+Danni:** Hybrid Fall+Halloween approach — play it safe with 2 products each

#### Step 4: Send Halloween Pt. 2 — Happy Halloween Wishes

**Action:** Send a second Halloween email on Halloween day itself. Keep it light — wish Happy Halloween, include light selling, and optionally drive social engagement or SMS opt-in.

**Tool:** Klaviyo → Campaigns → Create Campaign → Email.

**Input:** Subject line from library, preview text, festive imagery, light CTA (optional).

**Expected Result:** Halloween wishes email sent on October 31.

**If Failed:** If brand tone doesn't support a second send, skip Pt. 2 and save creative for other holiday sends.

**Undo:** Delete draft if client decides against it.

**Pt. 2 Subject Lines:**
- "Happy Halloween"
- "Last chance: 16% off all things Ghost"

**Brand Examples:**
- **PupSocks

[...content continues in source skill file...]


### 5. campaign-blog-newsletter

# SOP — Blog/Newsletter Campaign

## Purpose

Drive site traffic, build brand trust, and nurture subscribers with valuable educational content. Blog/newsletter campaigns are the primary vehicle for content marketing via email — they keep the brand top-of-mind without relying on discounts or promotions. This SOP covers three content approaches (Education Only, Hybrid, Conversion-focused), email build and design, deployment, performance monitoring, and the high-leverage tactic of converting top-performing content into evergreen flows. The goal is to create a sustainable content email engine that builds subscriber loyalty and generates predictable site traffic.

-------|----------------|
| Brand needs trust-building | Use Education Only or Hybrid approach |
| Low site traffic from email | Use any approach — all drive site visits |
| High non-buyer segment | Education Only — no purchase pressure |
| Launching new content | All three approaches work for new blog posts |
| Subscriber engagement declining | Education Only — higher click-through expected |
| Need revenue from content | Conversion-focused or Hybrid approach |
| Monthly/quarterly cadence | Newsletter format (named, e.g. "Snoozeletter") |

## Who to Send To

- **All active subscribers** — opens or clicks in last 60 days
- **Non-buyers** — Education Only is ideal for warming this segment
- **Past buyers** — Conversion-focused or Hybrid to drive repeat purchases
- **Engaged segment** — subscribers who clicked any link in last 30 days
- **Do not send to:** unengaged subscribers (no open/click in 90+ days), hard bounces,
  unsubscribes, spam complainers

## Pre-Flight Checklist

- [ ] Klaviyo account logged in with campaign permissions
- [ ] Blog/content piece selected and URL finalized
- [ ] Content approach selected (Education Only / Hybrid / Conversion-focused)
- [ ] Subject line + preview text variants drafted (3+ options)
- [ ] Email template selected — content-focused layout (not product-grid heavy)
- [ ] UTM parameters defined for blog traffic attribution
- [ ] Retargeting ad pixel verified on the blog landing page
- [ ] Featured images and/or GIF assets prepared
- [ ] Client approved content angle (if applicable)
- [ ] Segment selected and reach count verified
- [ ] Evergreen flow conversion noted for potential post-campaign (see Plan 5)

## Procedure

### Plan 1: Content Strategy Selection

#### Step 1: Choose the Content Approach

**Action:** Select one of the three content approaches based on campaign goal and
audience segment.

**Tool:** Campaign brief or content calendar — refer to the Decision Points section
below for a structured decision matrix.

**Input:** Goal for this send — is it trust building (Education Only), self-selection
(Hybrid), or driving a specific sale (Conversion-focused)?

**Expected Result:** One approach chosen and documented in the campaign brief.

**If Failed:** If the goal is unclear, default to Education Only — it carries the
lowest risk and has the highest click-through rates. Test other approaches in
subsequent sends.

**Undo:** Change the approach before building the email. Once sent, note the
approach used for performance comparison.

#### Step 2: Select the Content Asset

**Action:** Choose the blog post, guide, video, or educational asset that will be
the centerpiece of the email.

**Tool:** Content calendar, blog CMS, or editorial queue.

**Input:** Content must align with the chosen approach:
- Education Only: pure educational value, no product mentions
- Hybrid: content that can be paired naturally with a product recommendation
- Conversion-focused: content that builds a case for a specific product

**Expected Result:** One primary content asset confirmed with a working URL.

**If Failed:** If no content is ready, do not send. Pause the campaign until the
content calendar is populated. A blog/newsletter campaign without fresh content
will underperform.

**Undo:** Swap the content asset before building the email.

### Plan 2: Content & Email Copy

#### Step 3: Draft the Email Body

**Action:** Write the email copy using the micro-topic principle — one email, one
topic, one takeaway. The email is typically viewed for a maximum of 3-5 seconds,
so focus on a single point.

**Tool:** Google Docs, Notion, or directly in Klaviyo email builder.

**Input:**
- **Education Only:** Hook → educational value → CTA to read full article. No
  product mentions. Example: Gravity Blankets "Snoozeletter" — named newsletter
  with pure content and value.
- **Hybrid:** Primary section on education, secondary section on product. Example:
  Feals — primary section is a meditation guide, secondary section pushes their
  flight product. GIF used in the email to drive clicks to the article.
- **Conversion-focused:** Educational tips that each pair with a product. Example:
  Parachute — tips on how to master napping, with each tip linking to a product
  that meets that need.

**Expected Result:** Email copy drafted. Content is valuable, actionable, and
aligned with the chosen approach.

**If Failed:** If copy feels too salesy for Education Only, remove all product
references. If copy lacks a clear takeaway, apply the micro-topic test: "What is
the ONE single thing I want the customer to know after looking at this email?"

**Undo:** Revise copy before building the template. No undo after send.

#### Step 4: Write Subject Lines and Preview Text

**Action:** Draft 3+ subject line and preview text variants for A/B testing.

**Tool:** Klaviyo subject line tool or spreadsheet for tracking variants.

**Input:** Use the following patterns from the source material:

**Subject Line Ideas:**
- [HOW TO + INSERT TOPIC OF CONTENT] e.g., "How To Groom Your Dog At Home"
- [TOPIC 101] e.g., "Napping 101"
- [TOPIC + PRODUCT/OFFER] e.g., "Prep your skin for summer + 10% off"

**Real brand subject lines:**
- "Just breathe" — Feals
- "Community Snoozeletter: Snuggle Up" — Gravity Blankets
- "How to Stop Transepidermal Water Loss" — Yout

[...content continues in source skill file...]


### 6. campaign-bundle

# SOP — Bundle Campaign

## Purpose

The Bundle Campaign produces a dedicated email that promotes curated product bundles to increase average order value (AOV) and total revenue per purchase. By packaging complementary products together at a compelling price, brands sell more units per transaction without resorting to across-the-board discount codes.

**Why this matters:** Product bundles are one of the best tools for raising AOV. For brands that avoid blanket discount codes (e.g. WELCOME10, SITEWIDE20), bundles offer a way to provide genuine value without training customers to expect a percentage off everything in the store. The discount is tied to the bundle, not the brand — preserving full-price selling on individual items.

**What breaks if skipped:** Without a dedicated Bundle Campaign process, bundle promotions become ad-hoc and inconsistent. Opportunities to increase AOV are missed. Subscribers receive generic promotional emails that don't highlight the convenience and savings of curated sets. The brand fails to capture the revenue lift that bundles consistently deliver year-round.

**Core philosophy from source material:** Bundles should be leveraged year-round, not seasonally. By taking advantage of product bundles, you should be able to sell more product at higher price points consistently.

**Follow-up logic:** A Bundle Campaign can be re-run every 30–60 days with rotated products. It can also be turned into an automated flow triggered by post-purchase events (e.g. "Customers who bought X also saved with this bundle") or browsed-abandonment events. For partner bundles, a one-time campaign is typical unless the partnership is evergreen.

## Pre-Flight Checklist

- [ ] Klaviyo account logged in with campaign creation permissions
- [ ] Bundle strategy defined: curated sets (brand picks the combination), mix-and-match (customer chooses from a category), or partner bundles (two brands collaborate)
- [ ] At least 2–3 product bundles created in Shopify or on a dedicated landing page
- [ ] Bundle pricing finalized — discount percentage, flat-rate bundle price, or value-contrast pricing (e.g. "Was $116.99, now $59.99")
- [ ] Product imagery available showing bundled products together (lifestyle hero shot preferred)
- [ ] Email template approved for bundle showcase layout
- [ ] Subject line + preview text variants drafted (3+ options from source material)
- [ ] Bundle landing page or collection URL tested and working
- [ ] UTM parameters defined for campaign attribution
- [ ] Client or stakeholder approval obtained on bundle selection and pricing

## Step-by-Step Procedure

### Phase 1: Bundle Curation and Pricing

#### Step 1: Define Bundle Type

**Action:** Determine which bundle approach fits the brand and audience. Review the product catalog for natural pairings — products frequently bought together, complementary categories (e.g. skincare + body care), or seasonal/occasion-based combinations. Reference the three bundle types from source material.

**Tool:** eCommerce platform product analytics (Shopify Analytics, order history reports) or manual cross-sell analysis from past purchase data.

**Input:** Product catalog, past order data showing frequently co-purchased items, seasonality calendar, brand strategy notes.

**Expected Result:** Clear bundle type selected and documented:
- **Curated Sets (e.g. AESOP)** — Brand selects specific products. Best for controlled brand experience and higher perceived value. Format per source: relevant image + relevant text + relevant CTA per bundle section.
- **Mix-and-Match** — Customer chooses X products from a category for a fixed price. Best for fashion/apparel where personal taste varies.
- **Partner Bundles (e.g. KOPARI + Vanity Planet)** — Two brands collaborate combining products sold separately on two different stores. Advantage per source: convenience and money saving. The bundle bought for $59.99 would cost $116.99 otherwise.

**If Failed:** If no natural product pairings exist in analytics, consider a temporary "Create Your Own Bundle" promotion where customers receive a discount on any 3+ items. This can surface pairings for future curated sets.

**Undo:** Change bundle type before any design work begins. If pricing is wrong, recalculate before the email is built. No irreversible decisions at this stage.

---

#### Step 2: Select and Configure Bundles (1–3 Bundles)

**Action:** Choose 1–3 bundles to feature in the campaign. For each bundle, verify: product availability (all items in stock), pricing is correctly set, bundle page or collection is live, images exist (preferably a hero shot of the set together). For partner bundles, confirm the co-branded landing page and fulfillment pipeline.

**Tool:** Shopify Admin → Products → Collections (create a collection per bundle) OR Shopify Apps → Bundle/Quantity Breaks app (e.g. Bold Bundles, Rebolt). For partner bundles: coordinate with partner brand on shared landing page, pricing split, and fulfillment responsibilities.

**Input:** Bundle pairings from Step 1. Verify each product individually — published status, inventory levels, price, images.

**Expected Result:** Each bundle is live and purchasable via a stable URL:
- **AESOP-style**: Two distinct bundles (e.g. skincare set + body/hand care set), each with hero image, descriptive text, and CTA linking to that specific bundle page.
- **KOPARI-style**: Single headline bundle with a clear value contrast showing the savings in dollars ("$59.99 vs. $116.99 if purchased separately").

**If Failed:** If a product in the bundle is out of stock, substitute with a similar product or postpone that bundle. If the Shopify collection URL returns a 404, recreate the collection with correct products assigned. If a partner bundle fulfillment pipeline is untested, delay the campaign until a full end-to-end test order passes.

**Undo:** Remove or edit bundles from the collection. Unpublish the collection if the bundle is cancelled. Non-destructive until t

[...content continues in source skill file...]


### 7. campaign-flash-sale

# SOP — Flash Sale Email Campaign

## Purpose

Generate a concentrated spike in revenue by offering a time-limited discount to a targeted segment. The Flash Sale campaign is one of the highest-revenue-generating email types in the Klaviyo campaign stack. It works especially well for brands that rarely offer discounts, preserving the scarcity and urgency effect, but also performs for brands that discount regularly. This SOP ensures the campaign is built, segment-tested, deployed, and monitored correctly so the revenue spike is maximized without cannibalizing full-price sales.

## Pre-Flight Checklist

- [ ] Klaviyo account logged in with campaign permissions
- [ ] Discount code created in Shopify (amount, min order, expiration)
- [ ] Email template selected or built for flash sale creative
- [ ] Subject line and preview text drafted (3+ options per best practice)
- [ ] Target segment identified and ready for small-test send
- [ ] Client approval obtained for discount value and copy (if applicable)
- [ ] Brand voice guide available for copy reference
- [ ] UTM parameters defined for campaign attribution

## Procedure

### Plan 1: Campaign Setup

#### Step 1: Create the Discount Code

**Action:** Generate the discount code in Shopify (or client's eCommerce platform).
**Tool:** Shopify Admin → Discounts → Create Discount.
**Input:** Discount type (% off, $ off, or fixed price), value, minimum order (if any), expiration date (must match flash sale window).
**Expected Result:** Discount code generated and copyable. Test it in checkout to confirm it applies correctly.
**If Failed:** Check that the discount doesn't conflict with existing codes. Ensure expiration is set correctly (timezone matters).
**Undo:** Deactivate the discount code in Shopify after the sale window closes.

#### Step 2: Build the Email in Klaviyo

**Action:** Create a new campaign in Klaviyo.
**Tool:** Klaviyo → Campaigns → Create Campaign → Email.
**Input:** Subject line, preview text, preheader, email body with product images + CTA.
**Expected Result:** Campaign draft saved with all content loaded.
**If Failed:** Verify template is rendering correctly — send a test to yourself first.
**Undo:** Save as draft instead of scheduling. Do not click Send until QA is complete.

#### Step 3: Define the Target Segment

**Action:** Select or create the segment for this flash sale.
**Tool:** Klaviyo → Segments → Create Segment or Select Existing.
**Input:** Segment criteria — e.g., "Has placed order at least once in last 90 days," "Is not in suppression list," "Email engaged in last 60 days."
**Expected Result:** Segment shows predicted reach count.
**If Failed:** Narrow criteria if segment is too large (add recency/frequency filters). Broaden if too small.
**Undo:** Edit segment criteria and re-run preview.

### Plan 2: Segment Testing

#### Step 4: Send to a Small Test Segment First

**Action:** Clone the campaign and send to a 10-15% subset of the target segment.
**Tool:** Klaviyo → Campaign → A/B Test or manual segment clone to smaller group.
**Input:** Small test segment criteria (random sample or specific property filter).
**Expected Result:** Test send deployed. Monitor open rate, click rate, and any immediate bounces or complaints.
**If Failed:** If bounce rate > 2% or complaint rate > 0.1%, pause and run deliverability check before wider send.
**Undo:** Kill the full send. Analyze test results before proceeding.

#### Step 5: Evaluate Test Results

**Action:** Review test segment performance after 30–60 minutes.
**Tool:** Klaviyo → Campaign → Reports → Test Campaign.
**Input:** No new input. Compare against benchmark: open rate (25-40% for engaged segments), click rate (3-8%).
**Expected Result:** Metrics are within acceptable range with no deliverability flags.
**If Failed:** If open rate is below 20%, revise subject line and preview text. If click rate is below 2%, revise CTA, offer clarity, or design. Retest.
**Undo:** Delete test campaign. Create new one with revised content.

### Plan 3: Full Deployment

#### Step 6: Deploy Full Campaign

**Action:** Send the campaign to the full target segment.
**Tool:** Klaviyo → Campaign → Review → Send or Schedule.
**Input:** Final send time agreed with client. Smart Send Time recommended if available.
**Expected Result:** Campaign shows as "Sent" or "Scheduled." Reach count matches the segment size.
**If Failed:** If the campaign fails to send, check Klaviyo system status. If Smart Send Time causes delay, confirm the window.
**Undo:** If scheduled, unschedule before the send time. Update and re-schedule.

#### Step 7: Post-Send Monitoring (2 hours)

**Action:** Monitor deliverability and engagement for the first 2 hours post-send.
**Tool:** Klaviyo → Campaign → Reports → Live.
**Input:** Watch for: open rate trajectory, click rate, bounce rate, spam complaint rate.
**Expected Result:** Bounce rate < 2%, spam complaints < 0.1%, open rate on track for segment benchmark.
**If Failed:** If spam complaints spike (> 0.2%), immediately remove complainants from future sends. Review segment quality. If bounce rate spikes, run list hygiene.
**Undo:** No undo for sent emails. Record learnings for next send.

### Plan 4: Post-Campaign Analysis

#### Step 8: Extract Campaign Performance Report

**Action:** Pull campaign metrics and attribute revenue.
**Tool:** Klaviyo → Campaign → Reports → Export or Analytics → Revenue Attribution.
**Input:** Campaign ID, date range matching the send + 7 days for attributed revenue.
**Expected Result:** CSV or dashboard view showing: sent count, delivered, opened, clicked, converted, attributed revenue, ROI.
**If Failed:** If attribution looks off, verify that Klaviyo's revenue tracking snippet is on the Shopify thank-you page.
**Undo:** N/A — data capture.

#### Step 9: Document and Share Results

**Action:** Write a 1-page campaign summary for the client or internal records.
**Tool:** Google Docs or Notion or wiki.
**Input:** Send time, subject line, segment 

[...content continues in source skill file...]


### 8. campaign-free-shipping

# SOP — Free Shipping Email Campaign

## Purpose

Drive revenue and reduce cart abandonment by offering free shipping on orders. Shipping cost is the #1 reason for cart abandonment, making free shipping campaigns among the highest-converting email types in the Klaviyo campaign stack. This SOP covers the full lifecycle: segment selection, offer configuration, campaign build, deployment, and post-send monitoring to ensure the free shipping offer converts at maximum efficiency without eroding margin.

## Pre-Flight Checklist

- [ ] Klaviyo account logged in with campaign permissions
- [ ] Free shipping offer configured in Shopify (rules, minimum order threshold, geographic restrictions, expiration date)
- [ ] Offer code (if using) created and tested in private browser — verify free shipping applies at checkout
- [ ] Geographic restrictions confirmed — domestic-only or international shipping policy defined
- [ ] Email template selected — product-grid layout with free shipping as the hero offer above the fold
- [ ] Subject line + preview text variants drafted (3+ options; lead with "free shipping" or "free")
- [ ] Product selection finalized (3–6 products: best sellers + new arrivals with callout labels)
- [ ] Client approval obtained for offer terms and creative direction (if applicable)
- [ ] UTM parameters defined for campaign attribution
- [ ] Minimum order threshold confirmed and communicated in the email body

## Procedure

### Plan 1: Campaign Setup

#### Step 1: Configure the Free Shipping Offer

**Action:** Set up the free shipping rules in Shopify.
**Tool:** Shopify Admin → Settings → Shipping and Delivery → Manage Rates.
**Input:** Minimum order amount (if any), domestic/international zones, start and end dates.
**Expected Result:** Free shipping rate created and visible at checkout for qualifying orders. Rate passes a manual test in a private browser.
**If Failed:** Verify the shipping zone is active. Check no conflicting rates override the free shipping offer. Ensure the expiration date is set correctly (timezone-aware).
**Undo:** Disable or delete the shipping rate after the campaign window closes.

#### Step 2: Select Products for the Email

**Action:** Choose 3–6 products to feature in the free shipping campaign email.
**Tool:** Shopify analytics, sales reports, inventory dashboard.
**Input:** Best-selling products by revenue/units in the last 30–90 days, new arrivals, and high-margin items. Include a mix of price points to appeal to different customer segments.
**Expected Result:** Finalized product selection with images, prices, and callout labels (e.g., "Best Seller," "New Arrival," "Try Something New").
**If Failed:** If fewer than 3 products are compelling, use a "Shop All" CTA that leads to the full collection page.
**Undo:** Swap products in and out before final QA sign-off.

#### Step 3: Build the Email in Klaviyo

**Action:** Create the campaign email with free shipping as the hero element.
**Tool:** Klaviyo → Campaigns → Create Campaign → Email.
**Input:** Subject line, preview text, preheader, email body with hero free shipping banner → product grid → CTA button. The free shipping offer must be the most prominent visual element above the fold.
**Expected Result:** Campaign draft saved. Test send renders correctly on mobile (single-column) and desktop.
**If Failed:** If the template doesn't support the layout, clone a previous free shipping template. If images fail to load, re-upload assets or switch to hosted URLs.
**Undo:** Edit freely before scheduling. Keep in Draft until QA passes.

### Plan 2: Segmentation & Targeting

#### Step 4: Select the Target Segment

**Action:** Choose the subscriber segment for the free shipping offer.
**Tool:** Klaviyo → Segments.
**Input:** Recommended segments — All active subscribers (opened/clicked in last 60 days), Past buyers (ordered in last 90 days), Engaged non-buyers (opened 3+ emails, never purchased), Cart abandoners with items in cart.
**Expected Result:** Segment selected with reach count confirmed. Geographic restrictions in the shipping rules align with the segment's countries.
**If Failed:** If reach is too low, broaden recency or engagement criteria. If too large for the offer budget, add filters (e.g., minimum order history).
**Undo:** Edit segment criteria and re-preview before scheduling.

#### Step 5: Set Send Timing

**Action:** Determine the optimal send day and time.
**Tool:** Klaviyo Smart Send Time or brand historical send-time data.
**Input:** Best days: Tuesday, Wednesday, Thursday. Best times: 10:00 AM–12:00 PM or 6:00 PM–8:00 PM in the subscriber's timezone. For time-limited offers (e.g., "Free shipping this weekend"), send Friday 10:00 AM.
**Expected Result:** Send scheduled with confirmed day/time.
**If Failed:** If Smart Send Time is unavailable or has insufficient data, default to Tuesday 11:00 AM EST.
**Undo:** Reschedule before the send time.

### Plan 3: Deployment & Monitoring

#### Step 6: Final QA and Test Send

**Action:** Complete the full QA checklist before deploying.
**Tool:** Klaviyo → Campaign → Review → Send Test.
**Input:** Completion Checklist (below). Test the free shipping offer end-to-end in a private browser session — add a qualifying product to cart, proceed to checkout, and confirm $0 shipping.
**Expected Result:** All QA items pass. Offer works correctly at checkout. All links have UTM parameters.
**If Failed:** If the offer does not apply correctly at checkout, fix the shipping rules or discount code in Shopify. Do not send until the offer passes the test.
**Undo:** Keep in Draft until all items on the checklist are verified.

#### Step 7: Send the Campaign

**Action:** Deploy the campaign to the target segment.
**Tool:** Klaviyo → Campaign → Send or Schedule.
**Input:** Final approval from relevant stakeholders. Send immediately or schedule for the confirmed send time.
**Expected Result:** Campaign status shows "Sent" or "Scheduled" with the correct reach count.
**If Failed:*

[...content continues in source skill file...]


### 9. campaign-giveaway

# SOP — Giveaway Campaign

## Purpose

Generate new leads, grow email/SMS lists, and increase brand reach by offering a prize in exchange for entry. Giveaway campaigns are high-engagement drivers that can rapidly grow subscriber lists when executed correctly. This SOP covers the full lifecycle: prize selection, partner coordination (for co-branded giveaways), campaign build, deployment, winner selection, and post-campaign analysis. The goal is to attract the right audience — entrants who match the target customer profile — while minimizing spam complaints and low-quality signups.

## Pre-Flight Checklist

- [ ] Klaviyo account logged in with campaign permissions
- [ ] Prize confirmed: product value, number of winners, fulfillment logistics
- [ ] Giveaway terms and conditions drafted (entry window, eligibility, prize claim deadline)
- [ ] Partner brand confirmed (if co-branded giveaway) — audience sizes vetted for compatibility
- [ ] Giveaway landing page or signup form built and tested (mobile + desktop)
- [ ] Email template selected — giveaway-focused layout with prize visual hero
- [ ] Subject line + preview text variants drafted (3+ options; lead with prize value)
- [ ] Client/brand approval obtained for prize and creative direction
- [ ] UTM parameters defined for campaign attribution
- [ ] Winner selection process defined (random draw, entry date cut-off, alternate winner procedure)
- [ ] Prize claim deadline set (recommended: 48 hours) and included in terms

## Procedure

### Plan 1: Campaign Setup

#### Step 1: Select the Prize

**Action:** Choose the giveaway prize. The prize must be directly related to what the brand sells — unrelated prizes attract the wrong audience.
**Tool:** Product catalog, brand strategy brief.
**Input:** Prize value, product category, bundle options. For co-branded giveaways, align prize with both brands' audiences.
**Expected Result:** Prize confirmed — single product, bundle, or gift card. If co-branded, partner prize contribution agreed.
**If Failed:** If no compelling prize is available, consider a gift card (e.g., $250 store credit) or bundle the brand's top 3 best-sellers to increase perceived value.
**Undo:** Change the prize before building the campaign. Once announced, changing the prize may cause legal/compliance issues.

#### Step 2: Build the Giveaway Landing Page

**Action:** Create the landing page or signup form where entrants submit their information.
**Tool:** Klaviyo signup form, landing page builder, or the brand's website CMS.
**Input:** Prize visual, giveaway terms, entry form fields (email, name, optionally phone/SMS opt-in), social share buttons (to increase viral reach).
**Expected Result:** Landing page live and accepting entries. Test submission flows from end to end — user enters, receives confirmation, and data lands in the right Klaviyo list.
**If Failed:** If the form is not submitting data, check API integration between the landing page and Klaviyo. Use Klaviyo's native form builder as a fallback.
**Undo:** Unpublish the page or switch to draft mode if errors are found.

#### Step 3: Build the Email Campaign in Klaviyo

**Action:** Create the giveaway campaign email(s) with the prize as the hero element.
**Tool:** Klaviyo → Campaigns → Create Campaign → Email.
**Input:** Subject line (prize value-driven), preview text, preheader. Email body: hero prize image → headline with prize value → 2-3 bullet points on what makes this prize valuable → prominent CTA to enter.
**Expected Result:** Campaign draft saved. Test send renders correctly on mobile (single-column) and desktop.
**If Failed:** If images don't render, compress and re-upload. If the layout looks cluttered, simplify to a single-column design — mobile users are the majority of email opens.
**Undo:** Edit freely before scheduling. Keep in Draft until QA is complete.

### Plan 2: Segmentation & Targeting

#### Step 4: Select Target Segment

**Action:** Choose the subscriber segment for the giveaway campaign.
**Tool:** Klaviyo → Segments.
**Input:** Recommended segments — All active subscribers (opened/clicked in last 60 days), Engaged non-buyers (good for list warming), Past buyers (reward existing customers), Co-branded audience (if partnering, send to both brand lists).
**Expected Result:** Segment selected with reach count confirmed. For co-branded giveaways, verify partner's list is loaded and deduplicated.
**If Failed:** If reach is too low (< 1,000), broaden to all subscribers with email engagement in last 90 days. If too high for the prize budget, narrow to engaged subscribers only.
**Undo:** Edit segment criteria before scheduling.

#### Step 5: Set Send Timing

**Action:** Determine the optimal send timing for the giveaway launch and any reminder emails.
**Tool:** Klaviyo Smart Send Time or brand send-time data.
**Input:** Launch email: Tuesday–Thursday, 10:00 AM–12:00 PM. Reminder email (if used): 3–4 days after launch. Last chance email (if used): 24–48 hours before entry deadline.
**Expected Result:** Send schedule confirmed with appropriate spacing between emails.
**If Failed:** If Smart Send Time is unavailable, default to Tuesday 11:00 AM EST.
**Undo:** Reschedule before send time.

### Plan 3: Deployment & Monitoring

#### Step 6: QA the Campaign

**Action:** Final quality assurance before deployment.
**Tool:** Klaviyo → Campaign → Review → Send Test.
**Input:** Completion Checklist (below). Test the entry flow end-to-end. Verify UTM parameters on all links.
**Expected Result:** All QA items pass. Entry flow works on mobile and desktop.
**If Failed:** If the entry flow is broken (form not submitting, confirmation not sending), pause and fix before launch. Do not send the email until the landing page is fully functional.
**Undo:** Keep in Draft until all checks pass.

#### Step 7: Send the Campaign

**Action:** Deploy the giveaway campaign.
**Tool:** Klaviyo → Campaign → Send or Schedule.
**Input:** Final approval. Send immediately or at scheduled time.
**

[...content continues in source skill file...]


### 10. campaign-product-launch

# SOP — Product Launch Email Campaign

## Purpose

Generate excitement and sales for a new product or collection introduction. Product launch emails consistently perform well because they tap into the consumer psychology of desiring the latest and greatest. This campaign type converts subscribers into first-time buyers AND convinces previous buyers to purchase again. Even subscribers who open but don't buy get the benefit of brand top-of-mind awareness for their next purchase cycle. This SOP covers the full lifecycle: pre-launch teaser, launch day send, follow-up sequence, and revenue analysis.

## Pre-Flight Checklist

- [ ] Klaviyo account logged in with campaign permissions
- [ ] New product page live on Shopify (at least a coming soon/landing page for pre-launch)
- [ ] Product imagery — hero shot, lifestyle shot, detail shots — uploaded and approved
- [ ] Copy assets: product description, key features, benefits, unique selling points
- [ ] Client decision made: discount vs. no-discount approach (Section: Decision Points)
- [ ] Pre-launch teaser content drafted (if applicable)
- [ ] Launch day email drafted with subject line + preview text variants (3+)
- [ ] Follow-up sequence (1-2 emails) planned and drafted
- [ ] UTM parameters for each send in the sequence
- [ ] Target segments defined: new buyers vs. repeat buyers

## Procedure

### Plan 1: Pre-Launch Setup

#### Step 1: Confirm Product & Pricing Readiness

**Action:** Verify the product or collection is finalized in Shopify with correct pricing, images, inventory tracking, and a live product page.
**Tool:** Shopify Admin → Products → [Product Name].
**Input:** Product name, SKU, price, compare-at price (if any), images, description, variants.
**Expected Result:** Product page is live and publicly accessible. URL is stable and ready for email links.
**If Failed:** Work with the client to fix product data. Do not launch until the page is clean.
**Undo:** Unpublish the product page if mistakes are caught before launch.

#### Step 2: Build Pre-Launch Teaser Email (if applicable)

**Action:** Create a teaser email to build anticipation 2-5 days before the launch.
**Tool:** Klaviyo → Campaigns → Create Campaign → Email.
**Input:** Subject line (e.g., "Coming Soon", "Sneak Peek", "You asked, we created"), preview text hinting at the product, hero image with "Coming Soon" overlay or countdown, body copy teasing the product benefit without full reveal, CTA to "Get Notified" or "Learn More."
**Expected Result:** Teaser email saved as draft, scheduled to send 2-5 days before launch date.
**If Failed:** Reset creative brief if teaser doesn't generate enough curiosity. Consider a bolder subject line.
**Undo:** Delete draft and re-attempt. Unschedule before send time if client changes direction.

#### Step 3: Build Launch Day Email

**Action:** Create the primary launch day email.
**Tool:** Klaviyo → Campaigns → Create Campaign → Email.
**Input:** Subject line (e.g., "Just Arrived!", "Introducing Our New [PRODUCT]", "Meet [PRODUCT NAME]"), preview text with the product benefit or "Shop the new collection," hero shot showing the product, body copy: problem → solution → features → benefits → social proof (reviews if available), prominent CTA button ("Shop Now", "Get Yours", "Explore [PRODUCT]"), product imagery throughout.
**Expected Result:** Launch day email saved as draft with all content finalized.
**If Failed:** Review subject line open rates on similar past launches. Ensure preview text doesn't repeat subject line.
**Undo:** Save as draft. Do not schedule until QA clears.

### Plan 2: Decision — Discount vs. No-Discount

#### Step 4: Determine Discount Strategy

**Action:** Review the brand's standard approach to new product pricing. If the brand rarely offers discounts, do not offer one here. If discounts are common, consider a launch discount.
**Tool:** Internal decision — refer to brand positioning and client history.
**Input:** Client's previous launch behavior, brand voice guidelines, competitive landscape.
**Expected Result:** Clear decision documented: "No discount — standard launch" or "Launch discount of X%."
**If Failed:** If there's disagreement, default to no discount (more common approach per source material).
**Undo:** Discount can be added or removed before the email goes live.

**Without Discount:** Focus copy on product benefits, scarcity (limited stock), exclusivity (new arrival). Subject line: "Just Arrived!" "Introducing…"
**With Discount:** Lead with the offer. Subject line: "New + [X]% Off" "Meet [PRODUCT] — Save [X]% Today Only."

### Plan 3: Launch Deployment

#### Step 5: Send Launch Day Email

**Action:** Deploy the launch day email to the full eligible segment.
**Tool:** Klaviyo → Campaign → Review → Send/Schedule.
**Input:** Segment: all active subscribers (or buyers + prospects depending on strategy). Send time aligned with client timezone.
**Expected Result:** Campaign shown as "Sent." Monitored for first-hour engagement.
**If Failed:** If campaign doesn't send, check Klaviyo system status. If Smart Send Time causes unexpected delay, check the window setting.
**Undo:** If scheduled, unschedule before send time.

### Plan 4: Follow-Up Sequence

#### Step 6: Build Follow-Up Email 1 (24-48 hours after launch)

**Action:** Create a follow-up email for those who opened but didn't click, or didn't open at all.
**Tool:** Klaviyo → Campaigns → Create Campaign → Email.
**Input:** Subject: "Still thinking it over?" "Don't miss [PRODUCT NAME]" "Last chance for launch pricing." Body: reminder of product benefits, social proof, perhaps a limited-time angle (e.g., "first drop quantities are limited").
**Expected Result:** Follow-up email 1 saved as draft, scheduled for 24-48 hours after launch send.
**If Failed:** If open rate is low on follow-up, the subject line may be too similar to the launch email. Differentiate.
**Undo:** Unschedule if the launch underperforms and strategy needs revising.

#### Step 7: Build Follow-U

[...content continues in source skill file...]


### 11. campaign-refer-a-friend

## 2. Purpose

**What this produces:** A complete email campaign that activates existing customers as brand evangelists by incentivizing them to refer friends and family. The campaign consists of a trigger-based email sequence (post-purchase referral prompt, launch announcement, and/or program update notification) plus any supporting reminder and reward-confirmation messages.

**Why it matters:**

- Nielsen data shows consumers are **4x more likely** to purchase when referred by a friend or family member. Any channel that significantly increases conversion rate is worth investing in.
- Wharton School of Business research shows referred customers have a **16% higher lifetime value (LTV)** than non-referred customers. They not only convert at higher rates but also spend more per transaction.
- Deloitte data indicates referred customers have a **37% higher retention rate** compared to customers acquired through other channels.
- Referral marketing turns customer acquisition cost (CAC) on its head — your existing customers do the marketing work in exchange for rewards they actually value.

**When to run this campaign:**

- **Launch:** You are introducing a referral program for the first time.
- **Update:** You have changed the reward structure (e.g., increased rewards, added tiers, changed thresholds).
- **Ongoing trigger:** You send a post-purchase referral prompt after every completed order (automated flow).

---

## 3. Pre-Flight Checklist

Before building any email, verify each item below. Do not proceed until all checks pass.

- [ ] Referral platform (Swell Rewards / Smile.io / Talkable) is installed, configured, and generating unique referral links per customer
- [ ] Reward structure is finalized: what the referrer gets, what the friend gets, any minimum purchase thresholds, caps, or expiry windows
- [ ] Legal / compliance has approved all referral terms, conditions, and fine-print language
- [ ] ESP (Klaviyo / Mailchimp / HubSpot) is integrated with the referral platform so referral link data flows into customer profiles
- [ ] Post-purchase trigger event is set up and firing correctly (e.g., "Placed Order" event in Klaviyo)
- [ ] Suppression list is ready: exclude existing referrers from the launch announcement, exclude customers who already referred from the post-purchase prompt
- [ ] Segmentation is defined for each send (see Section 5 — Decision Points)
- [ ] Subject lines and preview text are drafted and approved (use the ideas in Section 4)
- [ ] Email templates are designed and rendered correctly on desktop, mobile web, and the major email clients (Gmail, Outlook, Apple Mail)
- [ ] Tracking parameters (UTM codes) are appended to all links for campaign attribution
- [ ] A/B test variants are defined if running subject line or CTA tests
- [ ] Reward fulfillment is live and tested end-to-end: referrer completes a referral, friend purchases, referrer receives reward, friend receives discount
- [ ] Fallback/default referral link is prepared for any customer whose unique link fails to generate
- [ ] Send schedule is confirmed: launch announcement date, post-purchase trigger timing (e.g., immediately after order confirmation or 24-hour delay), and any reminder cadence
- [ ] QA send has been executed to all test email addresses and all links, images, and personalization tags verified as working

---

## 4. Step-by-Step Procedure

### Plan 1: Campaign Strategy Definition

**Step 1.1 — Define reward structure**

| Action | Define the referral reward for both referrer and referred friend |
|---|---|
| Tool | Referral platform dashboard (Swell / Smile.io / Talkable) + stakeholder meeting |
| Input | Marketing budget, target CPA, product margins, competitive landscape |
| Expected Result | Documented reward tiers with clear thresholds and expiry rules |
| If Failed | Escalate to Director of Marketing for budget reallocation or tier simplification |
| Undo | Reset referral platform to default/disabled state |

Reward structure reference examples from the source:
- **Parade model:** Unique 20% discount code after first purchase; referrer earns up to $45 credit for first 3 friends who spend $40+, then $10 per friend after. Friend gets 20% off first $40+ purchase.
- **Beam model:** Double the previous reward. Friend gets $20 off $75+ purchase. Referrer gets $20 toward next order. Every purchase by a referred friend enters the referrer into a free product drawing.
- **Twice model:** Simple $5 off for both referrer and friend. No complex calculations — immediate value is obvious.

**Step 1.2 — Define audience segments**

| Action | Create ESP segments for each email in the campaign |
|---|---|
| Tool | ESP (Klaviyo / Mailchimp / HubSpot) — segment builder |
| Input | Customer purchase history, referral status, email engagement data |
| Expected Result | Three segments created: (1) Post-purchase trigger — customers who completed an order in the last 48 hours, (2) Launch audience — all existing customers with ≥1 purchase, (3) Program update audience — existing referral program members |
| If Failed | Verify ESP-referral platform integration; check data sync timestamps |
| Undo | Delete or deactivate the segments in ESP |

### Plan 2: Email Copy and Design

**Step 2.1 — Draft email copy: Launch announcement**

| Action | Write the launch announcement email that introduces the referral program |
|---|---|
| Tool | Google Docs or ESP email editor |
| Input | Reward structure from Step 1.1, brand voice guidelines |
| Expected Result | Email copy approved by copy lead and compliance |

**Required elements in every referral email:**

1. **Hero section:** Headline that states the value proposition immediately (e.g., "Give $20, Get $20" or "Share the love — $5 for you, $5 for a friend")
2. **Dual-sided rewards visual:** Show both benefits side by side. The Twice example uses a GIF showing the referrer and friend each receiving $5 off — this makes the math instantaneous for the reader. Parade shows a split l

[...content continues in source skill file...]


### 12. campaign-sms-list-growth

# SOP — SMS List Growth Campaign

## Purpose

Convert email subscribers into SMS subscribers through a targeted 3-email sequence. SMS marketing has significantly higher open rates (90–98%) and click-through rates (15–30%) than email, making it a critical channel for time-sensitive offers, launch announcements, and VIP engagement. This campaign targets email subscribers who have NOT yet opted into SMS — it uses a personal invitation from the founder (Email 1), a designed product-focused follow-up (Email 2), and a final urgency-driven reminder with incentive (Email 3). The goal is to grow the SMS list with engaged subscribers who are already familiar with the brand through email.

## Pre-Flight Checklist

| # | Item | Details | Verified? |
|---|------|---------|-----------|
| 1 | SMS platform is active and integrated with your email platform | | Verify API connection between email and SMS tools |
| 2 | SMS opt-in landing page or signup form is live and accepting submissions | | Test the signup flow end-to-end on mobile and desktop |
| 3 | SMS capture form is linked to the correct SMS list in your platform | | Confirm subscribers land in the right list/tag |
| 4 | Email list segment for the campaign is defined (non-SMS subscribers only) | | Exclude anyone already opted into SMS |
| 5 | Minimum list size of 1,000 subscribers is confirmed | | Smaller lists may not yield statistically meaningful results |
| 6 | Subject lines and preview text are drafted (see Procedure Step 3) | | Use the subject line and preview text tables below |
| 7 | Email copy for all three emails is written and approved | | Follow the frameworks in Procedure Steps 4-6 |
| 8 | Incentive (if using) is confirmed: budget, prize, and fulfillment process | | Email 3 may include a giveaway — confirm logistics |
| 9 | Brand voice guidelines are accessible (founder/spokesperson tone) | | All emails should feel straight to the point, relatable yet elevated |
| 10 | Send schedule is set on the calendar with timezone confirmed | | Allow 72 hours between Email 1 and Email 2, 48 hours between Email 2 and Email 3 |

## Procedure

### Step 1 — Identify Target Audience

| Action | Tool | Input | Expected Result | If Failed | Undo |
|---|---|---|---|---|---|
| Create a segment of email subscribers who are NOT currently opted into SMS | Email marketing platform (Klaviyo, Mailchimp, etc.) | Segment criteria: email subscribed = true AND SMS subscribed = false | A saved segment containing only email-only subscribers ready for the campaign | Check that your SMS platform is exporting opt-in status back to your email platform. Verify field mapping between platforms. | Delete the segment and start fresh with corrected criteria |

**Detail:** Subscribers likely joined your email list for exclusive content and special offers. Your SMS channel is an extension of this value. By targeting only email subscribers who have not yet opted into SMS, you avoid annoying existing SMS subscribers and focus your effort where growth is possible.

### Step 2 — Build SMS Signup Capture Destination

| Action | Tool | Input | Expected Result | If Failed | Undo |
|---|---|---|---|---|---|
| Confirm that the SMS opt-in form or landing page is functional and ready to receive traffic | Browser (Chrome, Safari), mobile device | URL of the SMS signup page | Page loads on desktop and mobile. SMS number field accepts input. User receives confirmation message after submitting. | Inspect the form submission in browser dev tools. Check that the API call to your SMS platform succeeds. If the form is not collecting data, rebuild it using your SMS platform's embed tool. | Revert to previous version of the landing page if a recent change broke it |

### Step 3 — Draft Subject Lines and Preview Text

Select subject lines and preview text for each email in the sequence. Use the tables below.

**Subject Line Options (choose one per email):**

| Email # | Recommended Subject Line |
|---|---|
| Email 1 | "A special invite" |
| Email 2 | "Win your custom hair care routine" |
| Email 3 | "Last chance to win $250 of Prose" |

*Note: Adapt the brand name (e.g., "Prose") to your client's brand name.*

**Preview Text Options (choose one per email):**

| Email # | Recommended Preview Text |
|---|---|
| Email 1 | "To receive launch updates, special promos and more." |
| Email 2 | "Exciting things are coming..." |
| Email 3 | "All you need to do is sign up for our texts" |

### Step 4 — Write Email 1: Text-Based from Founder/Spokesperson

| Action | Tool | Input | Expected Result | If Failed | Undo |
|---|---|---|---|---|---|
| Write a short, text-based email from the founder or company spokesperson. Include everything needed — nothing more, nothing less. | Email platform email editor (plain text mode) | Subject line from Step 3 (Email 1), brand voice guidelines | Email reads like a personal note. It explains the SMS channel, why it exists, and includes a clear CTA to join. | Review against brand voice. Confirm the CTA is a single button or link. If the CTA is unclear, rewrite to be more direct. | Delete draft and start a new email from scratch |

**Email 1 Framework:**
- **Sender Name:** Founder or company spokesperson (e.g., "Catherine — Prose")
- **Format:** Plain text, minimal to no design elements
- **Content:**
  - Personal greeting
  - 2-3 sentences about why you're texting (launch updates, special promos, personal connection)
  - Direct invitation to join the SMS list
  - Single clear CTA button or link to the signup page
- **Tone:** Straight to the point, relatable yet elevated
- **Goal:** Convert the warmest segment of your email list immediately with a simple, personal ask

**Example from Prose (real brand case study):** Email 1 in Prose's campaign was a short and simple text-based email. It contained everything the reader needed to know — nothing more, nothing less. The text was sent from the company spokesperson.

### Step 5 — Write Email 2: Designed Follow-Up with Product Imagery



[...content continues in source skill file...]


### 13. campaign-ugc

### Phase 1: Brief & Asset Curation (Days 1–2)

**Step 1.1 — Confirm campaign trigger**

| Field | Detail |
|---|---|
| **Action** | Confirm the campaign trigger: campaign brief OR new UGC asset availability. |
| **Tool** | Marketing calendar / Slack / shared drive |
| **Input** | Campaign brief doc or UGC submission log with dates |
| **Expected Result** | Clear trigger documented: either "brief-driven launch" (e.g., new product drop) or "asset-driven send" (e.g., 30+ high-quality UGC photos accumulated). |
| **If Failed** | Escalate to Email Marketing Manager. Do not proceed without a confirmed trigger. |
| **Undo** | N/A — gate step; nothing to roll back. |

**Step 1.2 — Curate UGC assets**

| Field | Detail |
|---|---|
| **Action** | Select 6–9 UGC assets from the approved rights-managed folder. Prefer images that show the product clearly, have good lighting, and reflect diverse body types or use cases. |
| **Tool** | Google Drive / Dropbox / DAM |
| **Input** | Rights-managed UGC asset folder |
| **Expected Result** | 6–9 images selected and copied into a campaign-specific subfolder. |
| **If Failed** | Fewer than 6 approved assets → reduce scope to single-product spotlight or postpone until more content is collected. |
| **Undo** | Delete the campaign subfolder; assets remain in master library. |

**Step 1.3 — Verify product link for each asset**

| Field | Detail |
|---|---|
| **Action** | For each selected image, identify the product(s) shown and confirm the product detail page URL is active. |
| **Tool** | E-commerce platform (Shopify, Magento, etc.) |
| **Input** | Asset list with product SKUs |
| **Expected Result** | Every image has a corresponding working URL. Log URLs in a spreadsheet mapped 1:1 to each image. |
| **If Failed** | Product is out of stock → either swap the image or add a "Notify me when back in stock" CTA. |
| **Undo** | Remove the product-asset mapping row from the spreadsheet. |

---

### Phase 2: Copy & Design (Days 3–5)

**Step 2.1 — Write subject line and preview text**

| Field | Detail |
|---|---|
| **Action** | Draft 3 subject lines and 3 preview-text options for review. Use active language and social-proof framing. |
| **Tool** | Google Docs or ESP copy editor |
| **Input** | Campaign brief, curated assets |
| **Expected Result** | 3 subject lines + 3 preview texts written and saved to the campaign copy doc. |
| **If Failed** | Writer's block → use vault examples as springboards (see Subject Line Ideas below). |
| **Undo** | Discard the draft doc; start fresh. |

**Subject Line Ideas (vault-sourced):**
- ❖ Do your ears stack up?
- ❖ Winter dressing made easy
- ❖ Are you in this email?

**Preview Text Ideas (vault-sourced):**
- ❖ Stack it like you mean it
- ❖ Light Layers
- ❖ Cold snaps.

**Step 2.2 — Build email layout**

| Field | Detail |
|---|---|
| **Action** | Assemble the HTML email with a hero section, UGC grid (3×3 or 3×2), product-link overlays on each image, and a bottom CTA module encouraging new submissions. |
| **Tool** | ESP visual builder (Klaviyo, Mailchimp, HubSpot) or custom HTML |
| **Input** | Curated assets, product URLs, copy doc |
| **Expected Result** | Mobile-responsive email with: (1) hero image or headline, (2) UGC grid where each image links to the product shown, (3) bottom community CTA with submission instructions. |
| **If Failed** | Images fail to render → compress to < 200 KB each, use exact-width dimensions, and test in Email on Acid or Litmus. |
| **Undo** | Revert to the ESP's previous template version. |

**Design guidelines for the UGC grid:**
- Use a clean grid layout (3 columns × 2–3 rows) for maximum visual impact.
- Each image card should have a subtle product-name overlay or a "Shop the look" CTA button beneath it.
- Maintain consistent aspect ratio across all images (square 1:1 is safest).
- Keep the bottom CTA simple: "Tag @brand and use #BrandHashtag for a chance to be featured."
- Follow the Mejuri approach (hero product + social proof), the Outdoor Voices approach (perfect grid + subtle bottom CTA), or the Rothy's approach (individual content blocks each with product link).

**Step 2.3 — Write body copy**

| Field | Detail |
|---|---|
| **Action** | Draft the email body copy: opening hook, transition to community spotlight, individual image captions (if any), closing CTA to submit UGC. |
| **Tool** | Google Docs |
| **Input** | Campaign brief, brand voice guidelines |
| **Expected Result** | Copy that flows: Hook → Social proof (x people are wearing this) → Grid of real customers → "Want to be featured? Here's how." |
| **If Failed** | Tone feels off → refer to last 3 approved UGC emails for voice reference. |
| **Undo** | Revert to previous version in Google Docs history. |

---

### Phase 3: Review & Approvals (Days 6–7)

**Step 3.1 — Internal peer review**

| Field | Detail |
|---|---|
| **Action** | Send the built email (full preview) to the Email Marketing Manager and a peer for copy, design, and link QA. |
| **Tool** | ESP sharing link or Litmus preview |
| **Input** | Completed email draft |
| **Expected Result** | At least one peer review completed with 0 critical errors (broken links, typos, missing images, broken layout). |
| **If Failed** | Critical errors found → log them in a shared tracking sheet, fix, and re-submit for review. |
| **Undo** | Discard the review thread; corrections overwrite the draft. |

**Step 3.2 — Legal / brand compliance check**

| Field | Detail |
|---|---|
| **Action** | Verify that all UGC images have rights logged, no competitor branding appears in photos, and the bottom CTA clearly states terms for submission (e.g., "By submitting, you agree to..."). |
| **Tool** | Rights-management log, brand guidelines |
| **Input** | Email draft with all images, footer, and submission CTA |
| **Expected Result** | 100% of assets have logged permissions; no compliance flags. |
| **If Failed** | Missing rights → pull the image immediately. Do NOT send. Escalate to Email Marketing

[...content continues in source skill file...]
