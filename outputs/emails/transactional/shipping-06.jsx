/* Shipping Notification — E1 | Cross-Level
   Wireframe: wireframes/transactional/shipping-06.md
   Strategy: strategy-map.json → transactional.emails.e2
   Generated: 2026-06-09
*/

const Email_transactional_shipping_06 = () => (
  <EmailShell preheader="Tracking number inside. Here's what to expect when your package arrives." bg="#FFFFFF">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{
      padding: "6px 20px", fontSize: 11, fontStyle: "italic",
      color: "#8A9B9D", background: "#F6F2EA", textAlign: "center",
      fontFamily: "'Questrial', 'Helvetica Neue', sans-serif",
    }}>
      Tracking number inside. Here's what to expect when your package arrives.
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — Logo + From Name
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{
        fontFamily: "'Questrial', 'Helvetica Neue', sans-serif",
        fontSize: 14, fontWeight: 400, color: "#4A6568", marginTop: 8,
      }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO — HERO-2 Warm Hero
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 24px 0" }}>

      {/* Package icon — small, top-left */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 16 }}>
        <rect x="3" y="7" width="18" height="14" rx="2" stroke="#2BAEB4" strokeWidth="1.8" fill="none" />
        <path d="M3 9L12 14L21 9" stroke="#2BAEB4" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
        <path d="M12 14V21" stroke="#2BAEB4" strokeWidth="1.8" />
      </svg>

      {/* Headline */}
      <h1 style={{
        fontFamily: "'Questrial', 'Helvetica Neue', sans-serif",
        fontSize: 24, fontWeight: 700, lineHeight: 1.3,
        letterSpacing: "0.02em", color: "#1F2D2F", margin: "0 0 14px",
      }}>
        Your Body-Signal underwear is on its way!
      </h1>

      {/* Subhead */}
      <p style={{
        fontFamily: "'Questrial', 'Helvetica Neue', sans-serif",
        fontSize: 16, fontWeight: 500, lineHeight: 1.5,
        color: "#4A6568", margin: "0 0 14px",
      }}>
        Good news, your Body-Signal Learning Layer underwear shipped today.
      </p>

      {/* Body */}
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 16, lineHeight: 1.6, color: "#4A6568", margin: "0 0 32px",
      }}>
        Your tracking number is below so you can follow the package as it makes its way to you.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: PACKAGE JOURNEY LINE — Custom SVG
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 0 32px", textAlign: "center" }}>
      <svg width="600" height="80" viewBox="0 0 600 80" style={{ maxWidth: "100%" }}>
        {/* Dotted path — full length */}
        <line x1="60" y1="40" x2="540" y2="40" stroke="#2BAEB4" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />

        {/* Signal-wave bumps along the dotted path */}
        <path d="M140,40 C150,34 155,46 165,40" stroke="#2BAEB4" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M220,40 C230,34 235,46 245,40" stroke="#2BAEB4" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M340,40 C350,34 355,46 365,40" stroke="#2BAEB4" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M430,40 C440,34 445,46 455,40" stroke="#2BAEB4" strokeWidth="1" fill="none" opacity="0.4" />

        {/* Warehouse icon — left */}
        <rect x="48" y="28" width="24" height="24" rx="4" stroke="#8A9B9D" strokeWidth="1.5" fill="none" />
        <path d="M52,52 L60,44 L68,52" stroke="#8A9B9D" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <line x1="60" y1="44" x2="60" y2="36" stroke="#8A9B9D" strokeWidth="1.5" />
        <text x="60" y="68" textAnchor="middle" fontSize="9" fill="#8A9B9D" fontFamily="'Questrial', sans-serif">Warehouse</text>

        {/* In Transit dot — slightly off-center, one hop forward (at ~58% not 50%) */}
        <circle cx="348" cy="40" r="6" fill="#2BAEB4" opacity="0.8">
          <animate attributeName="r" values="6;7.5;6" dur="2s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
        </circle>
        {/* Glow ring */}
        <circle cx="348" cy="40" r="10" fill="none" stroke="#2BAEB4" strokeWidth="1" opacity="0.3">
          <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
        </circle>
        <text x="348" y="58" textAnchor="middle" fontSize="9" fill="#4A6568" fontFamily="'Questrial', sans-serif">In Transit</text>

        {/* Home icon — right */}
        <path d="M528,52 L540,40 L552,52" stroke="#2BAEB4" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <rect x="532" y="44" width="16" height="12" rx="2" stroke="#2BAEB4" strokeWidth="1.5" fill="none" />
        <rect x="537" y="48" width="6" height="8" stroke="#2BAEB4" strokeWidth="1.2" fill="none" />
        <text x="540" y="68" textAnchor="middle" fontSize="9" fill="#2BAEB4" fontFamily="'Questrial', sans-serif">Your Home</text>
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: TRACKING CALLOUT — FLOW-9 Shipping Tracker
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px 40px" }}>
      <div style={{
        background: "#F9F7F4", border: "1px solid rgba(43,174,180,0.5)",
        borderRadius: 12, padding: 20,
      }}>
        {/* Tracking Number label */}
        <div style={{
          fontFamily: "'Questrial', 'Helvetica Neue', sans-serif",
          fontSize: 13, color: "#8A9B9D", textTransform: "uppercase",
          letterSpacing: 1, fontWeight: 700, marginBottom: 6,
        }}>
          Tracking Number
        </div>

        {/* Tracking Number value */}
        <div style={{
          fontFamily: "'SF Mono', 'Courier New', monospace",
          fontSize: 14, color: "#8A9B9D", marginBottom: 16,
        }}>
          [TRACKING_NUMBER_HERE]
        </div>

        {/* Internal divider */}
        <div style={{ height: 1, background: "#2BAEB4", opacity: 0.5, marginBottom: 16 }} />

        {/* Estimated Delivery label */}
        <div style={{
          fontFamily: "'Questrial', 'Helvetica Neue', sans-serif",
          fontSize: 13, color: "#8A9B9D", textTransform: "uppercase",
          letterSpacing: 1, fontWeight: 700, marginBottom: 6,
        }}>
          Estimated Delivery
        </div>

        {/* Delivery estimate value + amber badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            fontFamily: "'Questrial', 'Helvetica Neue', sans-serif",
            fontSize: 16, fontWeight: 600, color: "#1F2D2F",
          }}>
            Arrives in 3-7 business days
          </div>
          <span style={{
            display: "inline-block", background: "#E8B84B", color: "#FFFFFF",
            fontSize: 10, fontWeight: 700, padding: "3px 10px",
            borderRadius: 999, letterSpacing: 0.5, whiteSpace: "nowrap",
          }}>
            arrives
          </span>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: TRACKING NOTE — Carrier Info
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px 40px" }}>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 16, lineHeight: 1.6, color: "#4A6568", margin: 0,
      }}>
        Depending on where you are, delivery usually takes 3-7 business days. Some carriers update tracking faster than others, if the number doesn't show movement right away, that's normal and usually updates within 24-48 hours.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: WAVE SQUIGGLE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "8px 24px" }}>
      <svg width="100%" height="24" viewBox="0 0 552 24" preserveAspectRatio="none" style={{ display: "block" }}>
        <path d="M0,12 C40,4 80,20 120,12 C160,4 200,20 240,12 C280,4 320,20 360,12 C400,4 440,20 480,12 C520,4 552,12 552,12"
          stroke="#2BAEB4" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: WHAT'S IN YOUR PACKAGE — 3-Layer System
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 24px" }}>

      {/* Section header with emerald left border */}
      <div style={{ position: "relative", paddingLeft: 20, marginBottom: 20 }}>
        <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 3, background: "#2BAEB4" }} />
        <h2 style={{
          fontFamily: "'Questrial', 'Helvetica Neue', sans-serif",
          fontSize: 18, fontWeight: 600, lineHeight: 1.3, color: "#1F2D2F", margin: 0,
        }}>
          What's in Your Package
        </h2>
      </div>

      {/* Body copy */}
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 16, lineHeight: 1.6, color: "#4A6568", margin: "0 0 24px",
      }}>
        Your package from BrightKidCo contains your Body-Signal Learning Layer underwear, designed with three layers:
      </p>

      {/* 3-Layer Exploded View — Custom SVG */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <svg width="400" height="200" viewBox="0 0 400 200" style={{ maxWidth: "100%" }}>
          {/* Layer 1 — innermost (Signal Layer) */}
          <ellipse cx="200" cy="50" rx="120" ry="28" fill="#F9F7F4" stroke="#2BAEB4" strokeWidth="1.5" />
          <text x="200" y="48" textAnchor="middle" fontSize="11" fill="#1F2D2F" fontFamily="'Questrial', sans-serif" fontWeight="600">Layer 1 (innermost)</text>
          <text x="200" y="62" textAnchor="middle" fontSize="10" fill="#4A6568" fontFamily="'Helvetica Neue', Arial, sans-serif">Signal Layer</text>

          {/* Arrow between Layer 1 and 2 */}
          <path d="M200,80 L200,90" stroke="#8A9B9D" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
          <path d="M196,87 L200,93 L204,87" stroke="#8A9B9D" strokeWidth="1" fill="none" opacity="0.5" />

          {/* Layer 2 — middle (Smart Absorption) */}
          <ellipse cx="200" cy="110" rx="120" ry="28" fill="#F9F7F4" stroke="#2BAEB4" strokeWidth="1.5" opacity="0.8" />
          <text x="200" y="108" textAnchor="middle" fontSize="11" fill="#1F2D2F" fontFamily="'Questrial', sans-serif" fontWeight="600">Layer 2 (middle)</text>
          <text x="200" y="122" textAnchor="middle" fontSize="10" fill="#4A6568" fontFamily="'Helvetica Neue', Arial, sans-serif">Smart Absorption</text>

          {/* Arrow between Layer 2 and 3 */}
          <path d="M200,140 L200,150" stroke="#8A9B9D" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
          <path d="M196,147 L200,153 L204,147" stroke="#8A9B9D" strokeWidth="1" fill="none" opacity="0.5" />

          {/* Layer 3 — outer (Leak Barrier) */}
          <ellipse cx="200" cy="170" rx="120" ry="28" fill="#F9F7F4" stroke="#2BAEB4" strokeWidth="1.5" opacity="0.6" />
          <text x="200" y="168" textAnchor="middle" fontSize="11" fill="#1F2D2F" fontFamily="'Questrial', sans-serif" fontWeight="600">Layer 3 (outer)</text>
          <text x="200" y="182" textAnchor="middle" fontSize="10" fill="#4A6568" fontFamily="'Helvetica Neue', Arial, sans-serif">Leak Barrier</text>
        </svg>
      </div>

      {/* Bullet list with signal-dot markers */}
      <div style={{ marginBottom: 0 }}>
        {/* Bullet 1 */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" style={{ flexShrink: 0, marginTop: 5 }}>
            <circle cx="6" cy="6" r="3" fill="#2BAEB4" />
            <path d="M9,6 C10,4.5 11,7.5 12,6" stroke="#2BAEB4" strokeWidth="0.8" fill="none" opacity="0.6" />
          </svg>
          <p style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 16, lineHeight: 1.6, color: "#4A6568", margin: 0,
          }}>
            A cotton inner layer that creates a gentle, sustained signal
          </p>
        </div>

        {/* Bullet 2 */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" style={{ flexShrink: 0, marginTop: 5 }}>
            <circle cx="6" cy="6" r="3" fill="#2BAEB4" />
            <path d="M9,6 C10,4.5 11,7.5 12,6" stroke="#2BAEB4" strokeWidth="0.8" fill="none" opacity="0.6" />
          </svg>
          <p style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 16, lineHeight: 1.6, color: "#4A6568", margin: 0,
          }}>
            A smart absorption layer that protects without blocking the feedback
          </p>
        </div>

        {/* Bullet 3 */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" style={{ flexShrink: 0, marginTop: 5 }}>
            <circle cx="6" cy="6" r="3" fill="#2BAEB4" />
            <path d="M9,6 C10,4.5 11,7.5 12,6" stroke="#2BAEB4" strokeWidth="0.8" fill="none" opacity="0.6" />
          </svg>
          <p style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 16, lineHeight: 1.6, color: "#4A6568", margin: 0,
          }}>
            A leak-resistant outer barrier
          </p>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: WAVE SQUIGGLE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "8px 24px" }}>
      <svg width="100%" height="24" viewBox="0 0 552 24" preserveAspectRatio="none" style={{ display: "block" }}>
        <path d="M0,12 C40,4 80,20 120,12 C160,4 200,20 240,12 C280,4 320,20 360,12 C400,4 440,20 480,12 C520,4 552,12 552,12"
          stroke="#2BAEB4" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: WHEN IT ARRIVES — First Steps
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 24px" }}>

      {/* Section header with emerald left border */}
      <div style={{ position: "relative", paddingLeft: 20, marginBottom: 20 }}>
        <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 3, background: "#2BAEB4" }} />
        <h2 style={{
          fontFamily: "'Questrial', 'Helvetica Neue', sans-serif",
          fontSize: 18, fontWeight: 600, lineHeight: 1.3, color: "#1F2D2F", margin: 0,
        }}>
          When It Arrives
        </h2>
      </div>

      {/* Wash Tip Card — amber left border */}
      <div style={{
        background: "#F9F7F4", borderLeft: "4px solid #E8B84B",
        borderRadius: 8, padding: "18px 20px", marginBottom: 20,
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          {/* Wash icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <rect x="4" y="8" width="16" height="12" rx="3" stroke="#E8B84B" strokeWidth="1.5" fill="none" />
            <path d="M4,12 C8,10 12,14 16,12 C20,10 20,14 20,12" stroke="#E8B84B" strokeWidth="1.2" fill="none" opacity="0.6" />
            <circle cx="12" cy="16" r="1.5" fill="#E8B84B" opacity="0.4" />
          </svg>
          <p style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 16, lineHeight: 1.6, color: "#4A6568", margin: 0,
          }}>
            Wash the underwear before first use, cold water, gentle cycle, no fabric softener. The Body-Signal Layer works best when the cotton is clean and absorbent.
          </p>
        </div>
      </div>

      {/* Then let your child wear them... */}
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 16, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px",
      }}>
        Then let your child wear them for 1-2 hours at home. Don't prompt. Don't pressure. Let the sensation do the teaching.
      </p>

      {/* The learning starts from the first wear... */}
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 16, lineHeight: 1.6, color: "#4A6568", margin: 0,
      }}>
        The learning starts from the first wear, each time the Body-Signal Layer creates that gentle 'uh-oh' sensation, the brain gets a piece of information it may never have received before.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: WEEK 1 EXPECTATIONS — What to Expect
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 24px" }}>

      {/* Section header with emerald left border */}
      <div style={{ position: "relative", paddingLeft: 20, marginBottom: 20 }}>
        <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 3, background: "#2BAEB4" }} />
        <h2 style={{
          fontFamily: "'Questrial', 'Helvetica Neue', sans-serif",
          fontSize: 18, fontWeight: 600, lineHeight: 1.3, color: "#1F2D2F", margin: 0,
        }}>
          What to Expect in Week 1
        </h2>
      </div>

      {/* Paragraph 1 */}
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 16, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px",
      }}>
        Week 1 is about familiarity, not progress. Your child might not react at all at first, that's normal. The nervous system needs time to recognize a new sensation.
      </p>

      {/* Paragraph 2 — bold anchor */}
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 16, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px",
      }}>
        Some kids show first awareness in <strong style={{ color: "#1F2D2F" }}>2 weeks</strong>. Others need <strong style={{ color: "#1F2D2F" }}>8 weeks</strong>. <strong style={{ color: "#1F2D2F" }}>Both are normal.</strong>
      </p>

      {/* Paragraph 3 — bold anchor on "awareness" */}
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 16, lineHeight: 1.6, color: "#4A6568", margin: 0,
      }}>
        The goal in the first week isn't the potty. It's <strong style={{ color: "#1F2D2F" }}>awareness</strong>. If your child pauses for a moment when they feel wet, even once, that's the signal starting to wire.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: TONAL SHIFT RULE
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px" }}>
      <div style={{ height: 1, background: "#E5E5E5" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: GUARANTEE — You Made the Right Decision
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "40px 24px" }}>
      <div style={{ position: "relative", paddingLeft: 20, borderLeft: "3px solid #5DD07A" }}>

        {/* Section header */}
        <h2 style={{
          fontFamily: "'Questrial', 'Helvetica Neue', sans-serif",
          fontSize: 18, fontWeight: 600, lineHeight: 1.3, color: "#1F2D2F", margin: "0 0 16px",
        }}>
          You Made the Right Decision
        </h2>

        {/* Guarantee body */}
        <p style={{
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontSize: 16, lineHeight: 1.6, color: "#4A6568", margin: 0,
        }}>
          If you're wondering whether this will work, you don't have to hope. You have 60 days to see what happens. The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system. If you don't see the shifts you're hoping for, you get every dollar back.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: SIGNOFF — Lena (SHORT variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#1F2D2F", padding: "0 22px 36px" }}>
      <div style={{
        position: "relative", background: "#1F2A2C",
        border: "1.5px solid #2F3D40", borderRadius: 22,
        padding: "26px 24px 24px", overflow: "hidden",
      }}>
        {/* Subtle top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg, #2BAEB4 0%, #5DD07A 100%)", opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          {/* Avatar with warm ring */}
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FFD866 0%, #2BAEB4 100%)",
            padding: 2.5, position: "relative",
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden", border: "1.5px solid #1F2D2F",
            }}>
              {/* Portrait placeholder */}
              <svg width="58" height="58" viewBox="0 0 58 58">
                <rect width="58" height="58" fill="#F5E8D0" />
                <circle cx="29" cy="22" r="10" fill="#D4A574" />
                <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                <text x="29" y="55" textAnchor="middle" fontSize="6" fill="#1F2D2F" fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
              </svg>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
              color: "#8FAFB2", fontWeight: 700, marginBottom: 2,
            }}>
              A note from
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
              Lena Bauer
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Customer Support · Mom of two autistic sons
            </div>
          </div>
        </div>

        {/* Handwritten signature — Caveat font, gradient accent color */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          paddingTop: 16, paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }}>
              Talk soon,
            </div>
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 42, lineHeight: 0.95, fontWeight: 500,
              color: "#D8F57C", letterSpacing: -0.5, marginTop: 2,
            }}>
              Lena
            </div>
          </div>

          {/* Tiny flourish SVG */}
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* P.S. */}
        <div style={{
          fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic",
        }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          Both my sons went through this. I know what it feels like to wait for a package that might change everything. Take your time when it arrives.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: FOOTER — Standard
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: "'Questrial', 'Helvetica Neue', sans-serif",
        fontSize: 14, fontWeight: 500, color: "#1F2D2F", margin: "0 0 8px",
      }}>
        Lena from BrightKidCo
      </p>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 11, color: "#8A9B9D", margin: "0 0 8px",
      }}>
        orders@send.brightkidco.com
      </p>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 11, color: "#8A9B9D", margin: "0 0 8px",
      }}>
        Reply to this email, Lena reads every response.
      </p>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 11, color: "#8A9B9D", margin: "0 0 8px",
      }}>
        [Physical address]
      </p>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 11, color: "#8A9B9D", margin: "0 0 20px",
      }}>
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a>
      </p>

      {/* Gradient accent bar */}
      <div style={{
        margin: "0 auto", width: 60, height: 3,
        background: "linear-gradient(90deg, #2BAEB4 0%, #5DD07A 100%)",
        borderRadius: 3,
      }} />
    </div>

  </EmailShell>
);

window.EMAILS["transactional/shipping-06"] = Email_transactional_shipping_06;
