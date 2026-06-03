# BrightKidCo — Email Marketing Project

## Client

- **Name:** Giuliano
- **Brand:** brightkidco.com
- **Niche:** Kids brand (ecommerce)
- **Location:** Germany
- **Notes:** German — expects precision, data-backed strategy, professional delivery. Provided 54+ strategy documents + email prototypes. Business partner is final decision-maker.

## Project Status

| Phase | Status |
|-------|--------|
| Source Ingestion & Synthesis (32 docs) | ✅ Complete |
| Strategy Documents (8 docs, 793KB) | ✅ Complete |
| Email Copy + Creative Strategy (10 waves, 124 files, ~2.2MB) | ✅ Complete |
| **Email HTML (124 files)** | **✅ Complete** |
| **Showcase Site (2,589 sections)** | **🔄 Running (~330/2589, 13%)** |

### Pipeline

```
Copy/Creative (124 files ✅) → Email HTML (124/124 ✅) → Showcase Site (330/2589 🔄)
```

## Project Structure

```
brightkidco/
├── README.md              ← This file
├── compile-jsx.mjs        ← JSX → HTML compiler (esbuild + React)
├── generate-task.py       ← Task body generator for Ralph
├── plans/                 ← Execution plans
│   ├── email-jsx-production.md    (40KB — 9 waves, 124 tasks)
│   └── email-html-production.md   (24KB — conversion rules)
├── outputs/
│   ├── copy/              ← 124 email copy + creative strategy files
│   ├── jsx/               ← 124 compiled JSX components
│   ├── html/              ← 124 production HTML email files
│   ├── html-preview/      ← Preview HTML files
│   ├── task-bodies/       ← 124 Ralph task definitions
│   └── strategy/          ← Email strategy docs (S1-S4) + Giuliano-facing (G1-G4)
├── email-artifact-library.md     ← 101 reusable email components
├── raw/                   ← Client-provided source files
├── showcase/              ← Showcase site (2,589 sections being built)
│   ├── PLAN.md            ← 173-wave execution plan
│   ├── STATUS.md          ← Showcase progress tracking
│   ├── artifact-template-library.html  ← 50+ visual templates
│   ├── outputs/artifacts/ ← Built section artifacts (~330 done)
│   └── src/               ← Site source
└── scripts/               ← Utility scripts
```

## Deliverables

### Email HTML (124/124 — ✅ Complete)

| Flow | Files | Status |
|------|-------|--------|
| Welcome Flow E1-E8 (all levels) | 32 | ✅ Complete |
| Cart Abandonment | 3 | ✅ Complete |
| Checkout Abandonment | 2 | ✅ Complete |
| Browse Abandonment | 3 | ✅ Complete |
| Transactional (Order/Shipping/OFD/Arrived) | 4 | ✅ Complete |
| PP Direct Upsell | 2 | ✅ Complete |
| PP Level Detection | 1 | ✅ Complete |
| PP Education (D0/D7/D14/D21) | 4 | ✅ Complete |
| PP Extended Education | 20 | ✅ Complete |
| PP Extended Upsell | 3 | ✅ Complete |
| PP Mary Story | 1 | ✅ Complete |
| PP Mid Check-In | 3 | ✅ Complete |
| PP At-Risk | 4 | ✅ Complete |
| Replenish A/B/C | 7 | ✅ Complete |
| Review Request | 2 | ✅ Complete |
| Winback Path A | 12 | ✅ Complete |
| Winback Path B | 12 | ✅ Complete |
| Site Abandonment | 1 | ✅ Complete |
| FAQ Library | 6 | ✅ Complete |
| Sunset | 2 | ✅ Complete |

### Showcase Site (~330/2589 — 🔄 In Progress)

- 173 waves × 15 agents
- ~30 hours remaining at current pace
- Auto-transitions from email phase

## Orchestration

Ralph-loop cron fires every 2 minutes — reads STATUS.md + kanban, validates outputs, advances waves, reports to Telegram. Fully autonomous.

### Provider Setup

- **Ralph:** OpenGateway (`custom:Opengateway.gitlawb.com`) → fallback `opencode-go`
- **Main AI:** opencode-go (`deepseek-v4-flash`)
- **Key distribution:** Per the API distribution strategy (Key #2 for cron, Key #3 for agents)

## Tech Stack

- **JSX Compilation:** esbuild + React → static HTML email
- **Agent Orchestration:** Ralph loop (Hermes cron + kanban)
- **Artifact Library:** 101 reusable email visual components
- **Showcase:** 50+ visual templates, section-by-section building
