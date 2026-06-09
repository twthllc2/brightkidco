/* Cart Abandonment — E3 | Cross-Level
   Wireframe: wireframes/cart/cart-02-e3.md
   Strategy: strategy-map.json → flows.cart-abandonment.emails.e3
   Generated: 2026-06-09
*/

const Email_cart_02_e3 = () => (
  <EmailShell preheader="If you've been burned before, I get it. Here's what's different." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo + 60-Day Guarantee Badge
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <img src="../assets/brightkidco-logo-v2.png" alt="BrightKidCo" style={{ height: 34, opacity: 0.6 }} />
      <div style={{
        background: "#5DD07A",
        borderRadius: 4,
        padding: "4px 10px",
        display: "inline-block",
      }}>
        <span style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#1F2D2F" }}>
          60-Day Guarantee
        </span>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HOOK — HERO-12 Direct Address
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>
      <p style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.01, color: "#1F2D2F", margin: "0 0 24px" }}>
        I'll be direct: if you're hesitating because you've been burned before, I get it.
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        That skepticism is earned. Every product promises. Every method disappoints. You've sat through the pitch, bought the kit, tried the protocol, and nothing changed.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: RECOGNITION ANCHORS — "Whether...Or...If..."
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 24px" }}>
      <div style={{ background: "#FBF7F1", borderRadius: 8, padding: 32 }}>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          Whether your child sits on the toilet for 20 minutes and nothing happens, or they play in a wet pull-up without flinching, or they've been in pull-ups for years and you've stopped counting the attempts, if they don't feel when they need to go, every method that assumes they do was working on the wrong foundation.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: MECHANISM — EDU-1 Definition Block
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>
      <div style={{ position: "relative", paddingLeft: 20 }}>
        <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 2, background: "rgba(43, 174, 180, 0.6)" }} />
        <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 500, letterSpacing: 0.15, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 10 }}>
          what makes this different
        </div>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
          Here's what makes this different: it's not another method. It's not another promise. The Body-Signal Learning Layer creates a gentle sensation that lasts, 30 to 60 seconds of feedback after every accident, that bridges the gap between the nervous system and the body. Not training. Body-signal learning.
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, fontStyle: "italic", color: "#4A6568", margin: 0, lineHeight: 1.6 }}>
          Pull-ups wick that signal away completely. Body-Signal underwear helps the brain receive information it's been missing.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: GUARANTEE — TRUST-4 STRUCTURAL CENTERPIECE
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 24px" }}>
      <div style={{ background: "#FBF7F1", padding: 40 }}>
        {/* Guarantee badge */}
        <div style={{ background: "#DBFFCD", borderRadius: 8, padding: "16px 24px", marginBottom: 24, textAlign: "center" }}>
          <p style={{ fontFamily: F.main, fontSize: 20, fontWeight: 600, color: "#1F2D2F", margin: 0, letterSpacing: 0.02 }}>
            60 DAYS. YOUR JUDGMENT. NO PRESSURE.
          </p>
        </div>

        {/* Guarantee body — verbatim */}
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
          I can't promise your child will train by a certain date. No one can. But here's what I can promise: 60 days to try. If your child shows no sign of awareness, no pause, no look, no step toward the potty, no reaction at all, full refund. Every dollar.
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: TESTIMONIALS — SP-01 Three-Family Quote Block
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 24px", fontStyle: "italic" }}>
        "Three parents, three different kids, one common experience:"
      </p>

      {/* Card 1 — Verbal child */}
      <div style={{ background: "#FFFFFF", borderRadius: 16, boxShadow: "0 2px 8px rgba(31,45,47,0.06)", borderTop: "1px solid rgba(43,174,180,0.3)", padding: 24, marginBottom: 16 }}>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, fontStyle: "italic", color: "#4A6568", margin: "0 0 10px", lineHeight: 1.5 }}>
          A mom whose child talked about the potty but wouldn't go:
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
          "He talked about it but wouldn't go. After 3 weeks in BKC, he paused. Then he looked down. Then he walked to the potty, after the accident, but he's never done that before."
        </p>
      </div>

      {/* Card 2 — Never noticed */}
      <div style={{ background: "#FFFFFF", borderRadius: 16, boxShadow: "0 2px 8px rgba(31,45,47,0.06)", borderTop: "1px solid rgba(43,174,180,0.3)", padding: 24, marginBottom: 16 }}>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, fontStyle: "italic", color: "#4A6568", margin: "0 0 10px", lineHeight: 1.5 }}>
          A mom whose child never once noticed being wet:
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
          "She never once noticed she was wet. In Week 4, she pulled at her pants. That's the first signal I've ever seen."
        </p>
      </div>

      {/* Card 3 — High support needs */}
      <div style={{ background: "#FFFFFF", borderRadius: 16, boxShadow: "0 2px 8px rgba(31,45,47,0.06)", borderTop: "1px solid rgba(43,174,180,0.3)", padding: 24, marginBottom: 24 }}>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, fontStyle: "italic", color: "#4A6568", margin: "0 0 10px", lineHeight: 1.5 }}>
          A mom whose child has high support needs and is 9 years old:
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
          "He's not trained. But he's feeling something for the first time in 9 years. That's enough for now."
        </p>
      </div>

      {/* Closing */}
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        If any of these sound like your child, that's the gap we're talking about.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: PRODUCT / OFFER — ProductShowcaseSoft
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>
      {/* Option 1 */}
      <div style={{ padding: "12px 0", borderBottom: "1px solid #8A9B9D20" }}>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 600, color: "#1F2D2F", margin: 0 }}>
          1 Pair ($34.99)
        </p>
      </div>
      {/* Option 2 */}
      <div style={{ padding: "12px 0", borderBottom: "1px solid #8A9B9D20", marginBottom: 16 }}>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 600, color: "#1F2D2F", margin: "0 0 4px" }}>
          3+3 Bundle ($79.99, Free Shipping, 6 pairs for rotation)
        </p>
      </div>
      {/* Price anchor */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 700, color: "#2BAEB4", margin: 0 }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: CTA — CTAClose (Pill shape, 50px radius)
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
        borderRadius: 50,
        height: 56,
        lineHeight: "56px",
        width: "100%",
        maxWidth: 320,
        boxSizing: "border-box",
        textAlign: "center",
      }}>
        Complete Your Purchase
      </a>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: LENA SIGN-OFF (LONG variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#1F2D2F", margin: "0 0 4px" }}>
        With care,
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#1F2D2F", margin: "0 0 4px" }}>
        Lena ——
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#4A6568", margin: "0 0 16px" }}>
        Customer Support · Mom of two autistic sons
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#1F2D2F", margin: 0, lineHeight: 1.6 }}>
        P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment.
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

  </EmailShell>
);

Object.assign(window, { Email_cart_02_e3 });
