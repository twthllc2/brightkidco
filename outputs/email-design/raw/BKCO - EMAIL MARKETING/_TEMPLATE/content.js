/* {FLOW_NAME} · Content Data
   Voice: peer-to-peer mother (Lena), not clinical, not marketing
   All text VERBATIM from /root/projects/brightkidco/outputs/copy/{FLOW_COPY_DIR}/<filename>.md
   No rewriting, no shortening, no paraphrasing.

   REQUIRED: Each email MUST be tagged with its key (e1, e2, d0, d7, etc.) so
   the verification checks can read the position and validate Lena identity + closing word.
   Signoff.line1 + signoff.name live INSIDE each email block, not in the _SHARED object.
*/

window.FLOW_{FLOW_KEY} = {
  // E1 (Day 0 / +30 min / etc.) — Lena is "The BrightKidCo team", closing "Talk soon,"
  e1: {
    meta: { part: "...", timing: "...", theme: "...", level: "..." },
    preheader: "...",
    subject: "...",
    fromName: "Lena from BrightKidCo",
    heroBadge: "...",
    h1a: "...",
    h1b: "...",
    letterOpening: ["...", "..."],
    // ... all other text fields from the copy file
    signoff: {
      line1: "Talk soon,",        // E1 = "Talk soon,"
      name: "The BrightKidCo team", // E1 = "The BrightKidCo team", E2+ = "Lena Bauer"
      ps: "P.S. I read every reply. Really.",
    },
    out: "You can pause this series anytime. Come back when you're ready.",
  },
  // E2 — same pattern, signoff.name = "Lena Bauer", line1 = "Talk soon,"
  e2: {
    meta: { ... },
    preheader: "...",
    subject: "...",
    fromName: "Lena from BrightKidCo",
    // ... copy
    signoff: {
      line1: "Talk soon,",        // E2 = "Talk soon,"
      name: "Lena Bauer",          // E2+ = "Lena Bauer"
      ps: "P.S. I read every reply. Really.",
    },
    out: "You can pause this series anytime. Come back when you're ready.",
  },
  // E3 — closing word changes
  e3: {
    meta: { ... },
    // ... copy
    signoff: {
      line1: "With understanding,",  // E3-E5 = "With understanding,"
      name: "Lena Bauer",
      ps: "...",
    },
  },
  // E4, E5 — "With understanding,"
  // E6+ — "With care,"
};

/* Shared signoff, footer, and address — used by all emails.
   Per-email signoff.line1 + signoff.name live INSIDE each email block above.
   The _SHARED object only holds the footer (which is the same for every email). */
window.FLOW_{FLOW_KEY}_SHARED = {
  footer: {
    tagline: "Calm progress, one day at a time.",
    links: ["Our Method", "Shop the Pants", "Parent Stories"],
    address: "BrightKidCo Ltd · Berlin, Germany · hello@brightkidco.com",
  },
};
