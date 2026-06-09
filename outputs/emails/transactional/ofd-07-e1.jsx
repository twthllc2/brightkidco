/* Out for Delivery — E1 | Cross-Level (R1-R6)
   Wireframe: wireframes/transactional/ofd-07-e1.md
   Copy: copy/transactional/ofd-07-e1.md
   Strategy: strategy-map.json → transactional.emails.e3
   Generated: 2026-06-09
*/

const Email_transactional_ofd_07_e1 = () => (
  <EmailShell preheader="Quick tip: open the box together and let your child feel the fabric first. Sensory familiarity helps the learning begin." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: BRAND HEADER (UTIL-08 Nav Bar)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ fontFamily: F.main, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#8A9B9D", marginTop: 8, fontWeight: 700 }}>
        Body-Signal Learning
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: FROM NAME
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "32px 24px 0", borderBottom: "1px solid #8A9B9D30" }}>
      <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568" }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO — HERO-2 Warm Hero
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 24px 0" }}>

      {/* Tracking Status Bar */}
      <div style={{ background: "rgba(193, 154, 107, 0.4)", borderRadius: 8, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
        <svg width="28" height="28" viewBox="0 0 28 28">
          {/* Cardboard box icon */}
          <rect x="4" y="8" width="20" height="14" rx="2" fill="none" stroke="#1F2D2F" strokeWidth="1.5" />
          <line x1="4" y1="14" x2="24" y2="14" stroke="#1F2D2F" strokeWidth="1" />
          <line x1="14" y1="8" x2="14" y2="14" stroke="#1F2D2F" strokeWidth="1" />
          <path d="M8,8 L8,4 L20,4 L20,8" fill="none" stroke="#1F2D2F" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div>
          <div style={{ fontFamily: F.main, fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#1F2D2F" }}>
            Tracking
          </div>
          <div style={{ fontFamily: F.main, fontSize: 15, fontWeight: 700, color: "#1F2D2F" }}>
            Out for Delivery
          </div>
        </div>
      </div>

      {/* Signal Path SVG — dotted line from package downward */}
      <div style={{ width: "100%", marginBottom: 24, padding: "8px 0" }}>
        <svg width="100%" height="40" viewBox="0 0 372 40" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="ofdSignalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A9B9D" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#2BAEB4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#5DD07A" stopOpacity="1" />
            </linearGradient>
          </defs>
          <line x1="20" y1="20" x2="352" y2="20" stroke="url(#ofdSignalGrad)" strokeWidth="1.5" strokeDasharray="6 4" />
          {/* Signal dot at end — bright green */}
          <circle cx="352" cy="20" r="5" fill="#5DD07A" />
          <circle cx="352" cy="20" r="8" fill="none" stroke="#5DD07A" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>

      {/* Headline — verbatim from copy */}
      <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.02, color: "#1F2D2F", margin: "0 0 20px" }}>
        Out for delivery today, your Body-Signal underwear is arriving!
      </h1>

      {/* Body preview text */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 32px" }}>
        Your package is out for delivery today. That box on the truck? It's carrying more than underwear, it's carrying the piece that's been missing.
      </p>

      {/* CTA — TRACK YOUR DELIVERY */}
      <div style={{ textAlign: "center", paddingBottom: 8 }}>
        <a href="#" style={{
          display: "inline-block",
          padding: "0 32px",
          height: 48,
          lineHeight: "48px",
          background: "#5DD07A",
          color: "#FFFFFF",
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: 0.02,
          textTransform: "uppercase",
          textDecoration: "none",
          borderRadius: 999,
        }}>
          ◉ Track your delivery →
        </a>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: ANTICIPATION BODY COPY — LETTER-01 Paragraph Stack
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 24px" }}>
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        Your package is out for delivery today. That box on the truck? It's carrying more than underwear, it's carrying the piece that's been missing.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        Whether you've been trying for weeks or years, verbal or non-verbal, 3 or 10, if your child doesn't feel when they need to go, the Body-Signal Learning Layer is about to give their brain the feedback it's been missing.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: DIVIDER — Hand-drawn wavy line
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "30px 24px 20px", textAlign: "center" }}>
      <svg width="200" height="12" viewBox="0 0 200 12" preserveAspectRatio="xMidYMid meet">
        <path d="M0,6 Q25,0 50,6 Q75,12 100,6 Q125,0 150,6 Q175,12 200,6" fill="none" stroke="#8A9B9D" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: SECTION HEADER — "What to Do When It Arrives"
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 24px 12px", textAlign: "center" }}>
      <div style={{ fontFamily: F.main, fontSize: 18, fontWeight: 700, letterSpacing: 0.02, textTransform: "uppercase", color: "#1F2D2F" }}>
        ═══ What to Do When It Arrives ═══
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: 3-STEP CARDS — EDU-2 Step Cards
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 24px 40px" }}>
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 16px", textAlign: "center" }}>
        Here's what to do when the box lands on your porch:
      </p>

      {/* Cards row */}
      <div style={{ display: "flex", gap: 12 }}>

        {/* Step 1 — Wash */}
        <div style={{ flex: 1, background: "#FFFFFF", borderRadius: 12, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.04)", position: "relative" }}>
          {/* Signal dots easter egg — 1 dot */}
          <div style={{ position: "absolute", top: 10, right: 10 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8A9B9D", opacity: 0.6 }} />
          </div>
          {/* Step number dot */}
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#5DD07A", opacity: 0.3, marginBottom: 10 }} />
          {/* Icon — water droplet */}
          <svg width="40" height="40" viewBox="0 0 40 40" style={{ marginBottom: 10 }}>
            <path d="M20,6 C20,6 10,18 10,24 C10,30 14,34 20,34 C26,34 30,30 30,24 C30,18 20,6 20,6Z" fill="none" stroke="#1F2D2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="24" cy="22" r="2" fill="#2BAEB4" opacity="0.5" />
          </svg>
          <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#1F2D2F", marginBottom: 6 }}>
            ① Wash
          </div>
          <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.4, color: "#4A6568", margin: 0 }}>
            before first wear. The cotton inner layer is the signal-creator. Wash once on gentle cycle, no fabric softener, it coats the cotton and dulls the sensation.
          </p>
        </div>

        {/* Step 2 — Hold */}
        <div style={{ flex: 1, background: "#FFFFFF", borderRadius: 12, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.04)", position: "relative" }}>
          {/* Signal dots easter egg — 2 dots */}
          <div style={{ position: "absolute", top: 10, right: 10, display: "flex", gap: 3 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8A9B9D", opacity: 0.6 }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8A9B9D", opacity: 0.6 }} />
          </div>
          {/* Step number dot */}
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#5DD07A", opacity: 0.3, marginBottom: 10 }} />
          {/* Icon — hands holding */}
          <svg width="40" height="40" viewBox="0 0 40 40" style={{ marginBottom: 10 }}>
            <path d="M10,28 C10,28 12,20 16,20 C18,20 20,22 20,24 C20,22 22,20 24,20 C28,20 30,28 30,28" fill="none" stroke="#1F2D2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="20" cy="18" r="4" fill="none" stroke="#2BAEB4" strokeWidth="1.5" opacity="0.5" />
          </svg>
          <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#1F2D2F", marginBottom: 6 }}>
            ② Hold
          </div>
          <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.4, color: "#4A6568", margin: 0 }}>
            Let your child hold it. Open the package together. Let them touch the fabric, explore it, get familiar. Some kids need a day or two of sensory familiarity before wearing. That's normal.
          </p>
        </div>

        {/* Step 3 — Wear */}
        <div style={{ flex: 1, background: "#FFFFFF", borderRadius: 12, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.04)", position: "relative" }}>
          {/* Signal dots easter egg — 3 dots */}
          <div style={{ position: "absolute", top: 10, right: 10, display: "flex", gap: 3 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8A9B9D", opacity: 0.6 }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8A9B9D", opacity: 0.6 }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8A9B9D", opacity: 0.6 }} />
          </div>
          {/* Step number dot */}
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#5DD07A", opacity: 0.3, marginBottom: 10 }} />
          {/* Icon — underwear outline */}
          <svg width="40" height="40" viewBox="0 0 40 40" style={{ marginBottom: 10 }}>
            <path d="M12,10 L28,10 L30,16 L28,28 L22,32 L18,32 L12,28 L10,16 Z" fill="none" stroke="#1F2D2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="20" cy="16" r="2.5" fill="#5DD07A" opacity="0.6" />
          </svg>
          <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#1F2D2F", marginBottom: 6 }}>
            ③ Wear
          </div>
          <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.4, color: "#4A6568", margin: 0 }}>
            Start with 1-2 hours at home. No prompts. No pressure. Just wear, let the underwear do the teaching. The gentle "uh-oh" feedback after every accident is how the brain learns to connect sensation to action.
          </p>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: DIVIDER — Hand-drawn wavy line
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "20px 24px", textAlign: "center" }}>
      <svg width="200" height="12" viewBox="0 0 200 12" preserveAspectRatio="xMidYMid meet">
        <path d="M0,6 Q25,0 50,6 Q75,12 100,6 Q125,0 150,6 Q175,12 200,6" fill="none" stroke="#8A9B9D" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: SECTION HEADER — "What to Expect in Week 1"
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 24px 12px", textAlign: "center" }}>
      <div style={{ fontFamily: F.main, fontSize: 18, fontWeight: 700, letterSpacing: 0.02, textTransform: "uppercase", color: "#1F2D2F" }}>
        ═══ What to Expect in Week 1 ═══
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: WEEK 1 EXPECTATIONS — LETTER-01 with left border
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 24px 40px" }}>
      <div style={{ borderLeft: "2px solid rgba(93, 208, 122, 0.3)", paddingLeft: 18 }}>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
          Most kids don't show first signs in the first week. That's not delay, that's desensitization. The nervous system needs time to register a new sensation.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
          Some kids show awareness in 2 weeks. Others need 8. Both normal.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 12px" }}>
          Look for the small wins:
        </p>
        {/* Signal dot bullets */}
        <div style={{ paddingLeft: 4 }}>
          {[
            "A pause before an accident",
            "Looking down at the wet spot",
            "Pulling at their pants afterward",
            "Staying dry 2 hours instead of 30 minutes",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#5DD07A", opacity: 0.3, flexShrink: 0 }} />
              <span style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "12px 0 0" }}>
          These aren't failures, they're the <span style={{ color: "#5DD07A", fontStyle: "italic" }}>signal</span> wiring.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: GENTLE REMINDER — Mint Highlight Callout
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "40px 24px" }}>
      <div style={{ background: "#DBFFCD", borderRadius: 16, borderLeft: "4px solid #5DD07A", padding: 20 }}>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
          Pull-ups wick moisture away completely. That's great for furniture, but it removes the one piece of feedback the brain can use, the feeling of wetness. The Body-Signal Learning Layer lets that <span style={{ color: "#5DD07A", fontStyle: "italic" }}>signal</span> through. Just enough. Just long enough.
        </p>
      </div>
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "20px 0 0" }}>
        Your job isn't to teach. Your job is to let the underwear do the teaching, and be there when the <span style={{ color: "#5DD07A", fontStyle: "italic" }}>signal</span> finally arrives.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: DIVIDER — Hand-drawn wavy line
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "20px 24px", textAlign: "center" }}>
      <svg width="200" height="12" viewBox="0 0 200 12" preserveAspectRatio="xMidYMid meet">
        <path d="M0,6 Q25,0 50,6 Q75,12 100,6 Q125,0 150,6 Q175,12 200,6" fill="none" stroke="#8A9B9D" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: GUARANTEE — Teal-bordered card
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "40px 24px" }}>
      <div style={{ border: "2px solid #2BAEB4", borderRadius: 8, padding: 20 }}>
        <p style={{ fontFamily: F.main, fontSize: 20, fontWeight: 700, color: "#1F2D2F", margin: "0 0 8px", lineHeight: 1.4 }}>
          60 days to try it. By your judgment.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
          If it doesn't work for your child, full refund. No questions.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: CTA REPEAT — FLOW-9 Shipping Tracker
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 24px 40px", textAlign: "center" }}>
      <a href="#" style={{
        display: "inline-block",
        padding: "0 32px",
        height: 48,
        lineHeight: "48px",
        background: "#5DD07A",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: 0.02,
        textTransform: "uppercase",
        textDecoration: "none",
        borderRadius: 999,
      }}>
        ◉ Track your delivery →
      </a>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: LENA SIGN-OFF — UTIL-05 Signoff Card
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 24px 40px" }}>
      <div style={{ background: "#1F2D2F", border: "1.5px solid #2F3D40", borderRadius: 22, padding: "26px 24px 24px", position: "relative", overflow: "hidden" }}>
        {/* Top gradient accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #2BAEB4, #5DD07A)", opacity: 0.9 }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          {/* Avatar with teal gradient ring */}
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
            padding: 2.5,
            position: "relative",
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden",
              border: "1.5px solid #1F2D2F",
            }}>
              <svg width="58" height="58" viewBox="0 0 58 58">
                <rect width="58" height="58" fill="#F5E8D0" />
                <circle cx="29" cy="22" r="10" fill="#D4A574" />
                <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                <text x="29" y="55" textAnchor="middle" fontSize="6" fill="#1F2D2F" fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
              </svg>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase", color: "#8FAFB2", fontWeight: 700, marginBottom: 2 }}>
              A note from
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
              Lena
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Customer Support · Mom of two autistic sons
            </div>
          </div>
        </div>

        {/* Dashed separator */}
        <div style={{ borderTop: "1.5px dashed #3A4547", paddingTop: 16, marginBottom: 16 }} />

        {/* Personal message */}
        <div style={{ fontSize: 14, lineHeight: 1.65, color: "#B8CACD", marginBottom: 16 }}>
          I've been where you are. Take your time. When it arrives, let your child hold it first. That's enough for today.
        </div>

        {/* Closing + handwritten signature */}
        <div style={{ fontSize: 14, color: "#B8CACD", marginBottom: 4 }}>
          Talk soon,
        </div>
        <div style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 42,
          lineHeight: 0.95,
          fontWeight: 500,
          color: "#5DD07A",
          letterSpacing: -0.5,
          marginTop: 2,
          marginBottom: 4,
        }}>
          Lena
        </div>
        <div style={{ fontSize: 14, color: "#B8CACD" }}>
          ——
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 16: FOOTER — CAN-SPAM Compliant
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#1F2D2F", padding: "20px 22px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 6px" }}>
        You're receiving this because you placed an order with BrightKidCo.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 700, color: "#8A9B9D", margin: "0 0 6px" }}>
        BrightKidCo
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 6px" }}>
        [Physical Address]
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 6px" }}>
        <a href="mailto:support@brightkidco.com" style={{ color: "#2BAEB4", textDecoration: "underline" }}>support@brightkidco.com</a>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 6px" }}>
        Reply to this email. Lena reads every response.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: 0 }}>
        If you don't want to receive shipping updates, you can <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>unsubscribe here</a>.
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, {
  Email_transactional_ofd_07_e1,
});
window.EMAILS = window.EMAILS || {};
window.EMAILS["transactional/ofd-07-e1"] = Email_transactional_ofd_07_e1;
