/* Cart Abandonment — E1 | Cross-Level
   Wireframe: wireframes/cart/cart-02-e1.md
   Strategy: strategy-map.json → flows.cart-abandonment.emails.e1
   Generated: 2026-06-09
*/

const Email_cart_02_e1 = () => (
  <EmailShell preheader="Your cart's still saved — plus, the explanation for why nothing's quite worked yet." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: FROM NAME
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px 16px", borderBottom: "1px solid #8A9B9D30" }}>
      <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568" }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-12 Before Snapshot
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px 0" }}>

      {/* Eyebrow */}
      <div style={{ fontSize: 13, letterSpacing: 0.15, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 500, fontFamily: F.main, marginBottom: 24, textAlign: "center" }}>
        YOUR CART'S STILL HERE. (no rush)
      </div>

      {/* Signal Path Illustration — Custom SVG */}
      <div style={{ width: "100%", marginBottom: 32, padding: "20px 0" }}>
        <svg width="100%" height="60" viewBox="0 0 552 60" preserveAspectRatio="xMidYMid meet">
          {/* Line from left (grey) to right (teal) */}
          <line x1="40" y1="30" x2="512" y2="30" stroke="#8A9B9D" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
          <line x1="40" y1="30" x2="512" y2="30" stroke="#2BAEB4" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
          <defs>
            <linearGradient id="signalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A9B9D" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2BAEB4" stopOpacity="1" />
            </linearGradient>
          </defs>
          <line x1="40" y1="30" x2="512" y2="30" stroke="url(#signalGrad)" strokeWidth="1.5" strokeDasharray="6 4" />
          {/* Node 1 (Sarah) — hollow */}
          <circle cx="40" cy="30" r="8" fill="none" stroke="#2BAEB4" strokeWidth="2" opacity="0.4" />
          {/* Node 2 (Lisa) — half filled */}
          <circle cx="276" cy="30" r="8" fill="#2BAEB4" opacity="0.6" />
          <circle cx="276" cy="30" r="8" fill="none" stroke="#2BAEB4" strokeWidth="2" opacity="0.6" />
          {/* Node 3 (Maria) — fully filled with glow */}
          <circle cx="512" cy="30" r="8" fill="#2BAEB4" opacity="1" />
          <circle cx="512" cy="30" r="8" fill="none" stroke="#2BAEB4" strokeWidth="2" opacity="1" />
          <circle cx="512" cy="30" r="12" fill="none" stroke="#2BAEB440" strokeWidth="1" opacity="0.5" />
          {/* Labels */}
          <text x="40" y="55" textAnchor="middle" fontSize="9" fill="#8A9B9D" fontFamily="Helvetica, Arial, sans-serif">Sarah</text>
          <text x="276" y="55" textAnchor="middle" fontSize="9" fill="#4A6568" fontFamily="Helvetica, Arial, sans-serif">Lisa</text>
          <text x="512" y="55" textAnchor="middle" fontSize="9" fill="#2BAEB4" fontFamily="Helvetica, Arial, sans-serif">Maria</text>
        </svg>
      </div>

      {/* Hook — verbatim from wireframe */}
      <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.01, color: "#1F2D2F", margin: "0 0 32px" }}>
        Whether you had one foot on the checkout button or you were still reading, if your child doesn't seem to feel when they need to go, you were looking in the right place. Your cart's still saved, no rush. The more useful thing in this email might be the explanation for why nothing's quite worked yet.
      </h1>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: VALIDATION — LETTER-07 Greeting Card
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 24px" }}>
      <div style={{ background: "#FFFFFF", borderRadius: 8, padding: 32 }}>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          You've probably seen some version of this: your child sits on the toilet for 20 minutes, nothing happens, and then they're wet 30 seconds after standing up. Or they play right through a wet diaper without reacting. Or they've been "almost trained" three times now. Or they don't initiate, ever. If even one of those sounds like your morning, you're not alone. And that pattern isn't about effort. It's about a signal your child's nervous system may not be receiving in time.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: MECHANISM — EDU-1 Definition Block
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>
      <div style={{ position: "relative", paddingLeft: 20 }}>
        {/* 2px vertical line inset 8px from left */}
        <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 2, background: "rgba(43, 174, 180, 0.6)" }} />
        {/* Eyebrow */}
        <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 500, letterSpacing: 0.15, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 10 }}>
          the mechanism
        </div>
        {/* Body — verbatim */}
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
          Here's what most parents never get told: the "I need to go" message travels from the bladder to the brain along a neurological pathway called interoception, the body's ability to sense internal signals. Research consistently shows this pathway works differently in children with sensory differences (Barmpagiannis &amp; Baldimtsi 2025, 49-study review). The signal either arrives too late, or it doesn't arrive at all.
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          That's not stubbornness. It's not defiance. It's signal-timing. And no method built on the assumption that the signal already exists can address that.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: TESTIMONIALS — SP-01 Three-Family Quote Block
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>
      {/* Eyebrow */}
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 24px" }}>
        A few real stories from parents who had the same question you're sitting with:
      </p>

      {/* Card 1 — Sarah */}
      <div style={{ background: "#FFFFFF", borderRadius: 8, boxShadow: "0 2px 8px rgba(31,45,47,0.06)", borderLeft: "2px solid rgba(43,174,180,0.4)", padding: 24, marginBottom: 16 }}>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "He talked about the potty but wouldn't actually go. After two weeks in Body-Signal underwear, he paused mid-play and looked down. That pause had never happened in three years."
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: 0.02, color: "#4A6568", margin: 0 }}>
          — Sarah, mom of a verbal 4-year-old
        </p>
      </div>

      {/* Card 2 — Lisa */}
      <div style={{ background: "#FFFFFF", borderRadius: 8, boxShadow: "0 2px 8px rgba(31,45,47,0.06)", borderLeft: "2px solid rgba(43,174,180,0.4)", padding: 24, marginBottom: 16 }}>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "My BCBA built the behavioral foundation. But nothing changed until my son's nervous system started receiving the wetness signal. That's what the underwear did, not training, just information his brain was missing."
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: 0.02, color: "#4A6568", margin: 0 }}>
          — Lisa, mom of a 6-year-old with sensory differences
        </p>
      </div>

      {/* Card 3 — Maria */}
      <div style={{ background: "#FFFFFF", borderRadius: 8, boxShadow: "0 2px 8px rgba(31,45,47,0.06)", borderLeft: "2px solid rgba(43,174,180,0.4)", padding: 24, marginBottom: 24 }}>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "He'd never shown any awareness in 9 years. Not one sign. After 6 weeks, he pulled at his pants. That was the first signal his nervous system had ever sent him. Not trained. But feeling something for the first time, that was enough."
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: 0.02, color: "#4A6568", margin: 0 }}>
          — Maria, mom of a non-verbal 8-year-old
        </p>
      </div>

      {/* Closing */}
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        Three different kids. Three different timelines. One common piece: the body-signal connection had never been given a chance to form.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: PRODUCT INTRODUCTION — ProductShowcaseSoft (Custom)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 24px" }}>
      <div style={{ background: "#FBF7F1", borderRadius: 8, padding: 24 }}>
        {/* Eyebrow */}
        <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 500, letterSpacing: 0.15, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 10 }}>
          the product in your cart
        </div>

        {/* Body — verbatim */}
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 20px" }}>
          The product in your cart, the Body-Signal Learning Layer underwear, is designed around exactly that missing connection. The cotton inner layer creates a gentle, sustained "uh-oh" sensation that lasts 30-60 seconds. Long enough for a brain that processes signals differently to register: something happened. Without a prompt. Without a timer. Without a sticker chart. Just the body doing the teaching.
        </p>

        {/* Abstract layer lines */}
        <div style={{ background: "#FFFFFF", borderRadius: 8, padding: "16px 20px" }}>
          {/* Layer 1 */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
            <div style={{ flex: 1, height: 2, background: "#2BAEB4", opacity: 0.7 }} />
            <div style={{ marginLeft: 16, fontFamily: "Helvetica, Arial, sans-serif", fontSize: 13, color: "#1F2D2F", fontWeight: 400 }}>
              Layer 1 · Inner Body-Signal Layer
            </div>
          </div>
          {/* Layer 2 */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
            <div style={{ flex: 1, height: 2, background: "#2BAEB4", opacity: 0.5 }} />
            <div style={{ marginLeft: 16, fontFamily: "Helvetica, Arial, sans-serif", fontSize: 13, color: "#1F2D2F", fontWeight: 400 }}>
              Layer 2 · Smart Absorption Core
            </div>
          </div>
          {/* Layer 3 */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1, height: 2, background: "#2BAEB4", opacity: 0.3 }} />
            <div style={{ marginLeft: 16, fontFamily: "Helvetica, Arial, sans-serif", fontSize: 13, color: "#1F2D2F", fontWeight: 400 }}>
              Layer 3 · Protective Outer Barrier
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: GUARANTEE — TRUST-4 Dashed Policy Quote
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 24px" }}>
      <div style={{ background: "#FBF7F1", padding: 40, textAlign: "center" }}>
        <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, color: "#1F2D2F", margin: "0 0 16px", lineHeight: 1.4 }}>
          60 days to try it. By your judgment.
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          If it doesn't work for your child, if you see no pause, no look, no step toward the bathroom, full refund. The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: CTA — CTAClose (Cart variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px", textAlign: "center" }}>
      <a href="#" style={{
        display: "inline-block",
        padding: "17px 32px",
        background: "#2BAEB4",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: 0.02,
        textDecoration: "none",
        borderRadius: 6,
        height: 56,
        lineHeight: "56px",
        width: "100%",
        maxWidth: 320,
        boxSizing: "border-box",
        textAlign: "center",
      }}>
        Check out when you're ready
      </a>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#4A6568", margin: "16px 0 0" }}>
        Your original offer is saved
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: NEXT TIME + LENA SIGN-OFF (SHORT variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>
      {/* Next time teaser */}
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 13, color: "#4A6568", margin: "0 0 32px" }}>
        Next time: What other parents actually noticed after trying it.
      </p>

      {/* Lena Sign-Off — SHORT */}
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#1F2D2F", margin: "0 0 4px" }}>
        Talk soon,
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#1F2D2F", margin: "0 0 4px" }}>
        Lena ——
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#4A6568", margin: "0 0 16px" }}>
        Customer Support · Mom of two autistic sons
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#1F2D2F", margin: 0 }}>
        P.S. If you want to see how the body-signal approach works, <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>learn more here</a>. No pressure.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px", fontWeight: 700 }}>
        BrightKidCo
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px" }}>
        [Physical Address]
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px" }}>
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a>
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", margin: 0 }}>
        Reply to this email. Lena reads every response.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: EASTER EGG — Signal Dot Progression
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "20px 24px 32px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 20, alignItems: "center" }}>
        {/* Dot 1: hollow */}
        <div style={{ width: 8, height: 8, borderRadius: "50%", border: "1.5px solid rgba(43,174,180,0.3)" }} />
        {/* Dot 2: half */}
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(43,174,180,0.6)" }} />
        {/* Dot 3: full */}
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2BAEB4" }} />
      </div>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_cart_02_e1 });
