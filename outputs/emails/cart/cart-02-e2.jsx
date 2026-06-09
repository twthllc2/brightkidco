/* Cart Abandonment — E2 | Cross-Level
   Wireframe: wireframes/cart/cart-02-e2.md
   Strategy: strategy-map.json → flows.cart-abandonment.emails.e2
   Generated: 2026-06-09
*/

const Email_cart_02_e2 = () => (
  <EmailShell preheader="Three parents, three different kids, one common experience — plus the 3+3 bundle." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: FROM NAME
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px 16px", borderBottom: "1px solid #8A9B9D30" }}>
      <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568" }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: SIGNAL PROGRESS METER (Custom SVG)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px 0" }}>
      <svg width="100%" height="90" viewBox="0 0 552 90" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="spGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8A9B9D" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2BAEB4" stopOpacity="1" />
          </linearGradient>
        </defs>
        {/* Source node */}
        <circle cx="60" cy="15" r="8" fill="#8A9B9D" opacity="0.4" />
        <circle cx="60" cy="15" r="8" fill="none" stroke="#8A9B9D" strokeWidth="2" opacity="0.4" />
        <text x="60" y="8" textAnchor="middle" fontSize="8" fill="#8A9B9D" fontFamily="Helvetica, Arial, sans-serif">Source</text>
        {/* Path to L1 */}
        <line x1="68" y1="15" x2="276" y2="15" stroke="#8A9B9D" strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />
        <line x1="68" y1="15" x2="276" y2="15" stroke="#2BAEB4" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        {/* Path to L2 */}
        <line x1="68" y1="15" x2="276" y2="45" stroke="#8A9B9D" strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />
        <line x1="68" y1="15" x2="276" y2="45" stroke="#2BAEB4" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        {/* Path to L3 */}
        <line x1="68" y1="15" x2="276" y2="75" stroke="#8A9B9D" strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />
        <line x1="68" y1="15" x2="276" y2="75" stroke="#2BAEB4" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        {/* Converge to destination */}
        <line x1="284" y1="15" x2="480" y2="45" stroke="url(#spGrad2)" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="284" y1="45" x2="480" y2="45" stroke="url(#spGrad2)" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="284" y1="75" x2="480" y2="45" stroke="url(#spGrad2)" strokeWidth="1" strokeDasharray="4 3" />
        {/* L1 node */}
        <circle cx="276" cy="15" r="6" fill="#2BAEB4" opacity="0.6" />
        <text x="290" y="12" fontSize="7.5" fill="#4A6568" fontFamily="Helvetica, Arial, sans-serif">Pause, Week 2</text>
        {/* L2 node */}
        <circle cx="276" cy="45" r="6" fill="#2BAEB4" opacity="0.7" />
        <text x="290" y="42" fontSize="7.5" fill="#4A6568" fontFamily="Helvetica, Arial, sans-serif">Pull at pants, Week 4</text>
        {/* L3 node */}
        <circle cx="276" cy="75" r="6" fill="#2BAEB4" opacity="0.8" />
        <text x="290" y="72" fontSize="7.5" fill="#4A6568" fontFamily="Helvetica, Arial, sans-serif">Pause mid-accident, Week 8</text>
        {/* Destination node */}
        <circle cx="480" cy="45" r="8" fill="#2BAEB4" opacity="1" />
        <circle cx="480" cy="45" r="12" fill="none" stroke="#2BAEB440" strokeWidth="1.5" />
        <text x="480" y="62" textAnchor="middle" fontSize="8" fill="#2BAEB4" fontWeight="600" fontFamily="Helvetica, Arial, sans-serif">Signal received</text>
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO QUOTE — Terracotta hero with hook
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 24px 0" }}>
      {/* Hand-drawn SVG quote mark */}
      <div style={{ marginBottom: 16 }}>
        <svg width="48" height="48" viewBox="0 0 48 48">
          <path d="M8,32 C8,20 16,12 28,12 L28,16 C20,16 14,22 14,28 L20,28 C22,28 24,30 24,32 Z" fill="#C46A4A" opacity="0.7" />
          <path d="M24,32 C24,20 32,12 44,12 L44,16 C36,16 30,22 30,28 L36,28 C38,28 40,30 40,32 Z" fill="#C46A4A" opacity="0.7" />
        </svg>
      </div>

      {/* Hero quote */}
      <p style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, fontStyle: "italic", letterSpacing: -0.02, color: "#C46A4A", margin: "0 0 24px", lineHeight: 1.15 }}>
        "The moment he stands up he pees."
      </p>

      {/* Hook body — verbatim */}
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 12px" }}>
        That's a real parent, describing their child before trying Body-Signal underwear.
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        If that sentence lands a little too close to your morning, whether your child is 3 or 10, verbal or not, whether you've tried 2 methods or 12, the same piece is usually missing.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: RECOGNITION ANCHORS
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
        If any of these sound familiar:
      </p>
      {[
        "He sits on the toilet, waits, nothing. Then pees 30 seconds after getting up.",
        "She doesn't react when she's wet, keeps playing, doesn't notice.",
        "He knows what to do but can't feel the urge in time.",
        "She's 'almost trained' more than once, but it never sticks.",
        "He's been in pull-ups for years and you've stopped counting.",
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2BAEB4", boxShadow: "0 0 4px rgba(43,174,180,0.2)", flexShrink: 0, marginTop: 7 }} />
          <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
            {item}
          </p>
        </div>
      ))}
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: VALIDATION — LETTER-07 Greeting Card
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 24px" }}>
      <div style={{ background: "#FFFFFF", borderRadius: 8, padding: 32 }}>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          You're not alone in this. And more importantly, your child is not broken. Their nervous system processes body signals differently. The "I need to go" message isn't arriving the way traditional methods assume it should. That's not defiance. That's neurology.
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "14px 0 0" }}>
          Whether your child can tell you they peed or just looks down confused; whether they've been at this for 3 months or 3 years, the gap is the same one. The signal doesn't arrive in time.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: MECHANISM — EDU-1 Definition Block
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>
      <div style={{ position: "relative", paddingLeft: 20 }}>
        <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 2, background: "rgba(43, 174, 180, 0.6)" }} />
        <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 500, letterSpacing: 0.15, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 10 }}>
          the mechanism
        </div>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
          What we've learned, from Kelly Mahler's work on interoception, from the Nicholson et al. (2019) study on body awareness in autistic children, from 49 studies confirming these differences are real and measurable, is that the brain needs feedback it's not getting.
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
          Most training methods assume your child can already feel the "I need to go" sensation. For kids whose nervous systems process internal signals differently, that assumption is the reason those methods failed.
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          The Body-Signal Learning Layer in our underwear is designed differently. It creates a gentle, sustained "uh-oh" sensation, 30 to 60 seconds of feedback, that gives the brain time to register: something happened. Over time, that repeated signal builds neural pathways. The brain starts to recognize the feeling before the event, not after.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: TESTIMONIALS — SP-01 Asymmetric Cards
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 24px", fontStyle: "italic" }}>
        "Three parents, three different kids, one common experience:"
      </p>

      {/* Card 1 (L1 — narrower, -1deg) */}
      <div style={{ width: "80%", background: "#FFFFFF", borderRadius: 12, boxShadow: "0 2px 8px rgba(31,45,47,0.06)", borderTop: "2px solid rgba(43,174,180,0.3)", padding: 24, marginBottom: 16, transform: "rotate(-1deg)" }}>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
          He was "almost trained" for months. Sometimes he'd go, sometimes he wouldn't. After 2 weeks in Body-Signal underwear, he paused mid-play and looked down. That pause had never happened before in 3 years.
        </p>
      </div>

      {/* Card 2 (L2 — full width, +1deg) */}
      <div style={{ width: "100%", background: "#FFFFFF", borderRadius: 12, boxShadow: "0 2px 8px rgba(31,45,47,0.06)", borderTop: "2px solid rgba(43,174,180,0.3)", padding: 24, marginBottom: 16, transform: "rotate(1deg)" }}>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
          She had the BCBA protocol, sensory OT, social stories, sticker charts, everything. She still didn't initiate. At Week 4, she pulled at her pants right before peeing. Her mom called it "the first time I saw her feel something coming."
        </p>
      </div>

      {/* Card 3 (L3 — narrower, -1deg) */}
      <div style={{ width: "80%", background: "#FFFFFF", borderRadius: 12, boxShadow: "0 2px 8px rgba(31,45,47,0.06)", borderTop: "2px solid rgba(43,174,180,0.3)", padding: 24, marginBottom: 24, transform: "rotate(-1deg)" }}>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
          He's not trained. Not fully. But after 8 weeks, he paused mid-accident for the first time in 6 years. He looked down. He felt something. That pause was everything.
        </p>
      </div>

      {/* Pull quote */}
      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, color: "#2BAEB4", margin: "0 0 16px" }}>
        "He went today! Once! But he went!"
      </p>

      {/* Closing */}
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        That's what a first win looks like. It's not "fully potty trained." It's not "no more pull-ups." It's a pause. A look. A single step toward the bathroom. Those are real wins, and they're happening for families across every level.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: OFFER — ProductShowcaseSoft (Bundle Upsell)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "rgba(43,174,180,0.05)", padding: "48px 24px" }}>
      <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 500, letterSpacing: 0.15, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 10 }}>
        the 3+3 bundle
      </div>

      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        If you had 1 pair in your cart, most parents find that one pair alone isn't enough for real rotation. The underwear needs to be worn consistently every day so the brain gets repeated feedback signals. One pair means laundry every night. Three pairs means the nervous system gets the consistent input it needs.
      </p>

      {/* Bundle card */}
      <div style={{ background: "#FFFFFF", borderRadius: 8, padding: 24, marginBottom: 16 }}>
        <div style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, color: "#1F2D2F", marginBottom: 8 }}>
          THE 3+3 BUNDLE
        </div>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, color: "#1F2D2F", margin: "0 0 8px" }}>
          6 pairs · $79.99 · Free Shipping
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, color: "#4A6568", margin: 0, marginBottom: 16 }}>
          $13.33 per pair
        </p>
        {/* Product flat lay image */}
        <div style={{ textAlign: "center" }}>
          <img
            src="../../raw/product-photos/flat-lay/training-pant-watermelon-pink.jpg"
            alt="BrightKidCo body-signal training pants in watermelon pink, flat lay"
            style={{ width: 200, height: 200, objectFit: "cover", borderRadius: 8 }}
          />
        </div>
      </div>

      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        The 3+3 Bundle gives you 6 pairs at $79.99 with free shipping, that's 62% off buying them individually. Enough for daily rotation, enough for the brain to start building those signal pathways day after day.
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        If you already had the 3+3 in your cart, you're all set, your original offer is saved, with free shipping and the full 60-day guarantee.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 700, color: "#2BAEB4", margin: 0 }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: GUARANTEE — TRUST-4
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 24px" }}>
      <div style={{ background: "#FBF7F1", padding: 40, textAlign: "center" }}>
        <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, color: "#1F2D2F", margin: "0 0 16px", lineHeight: 1.4 }}>
          60 days to try it. By your judgment.
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          If it doesn't work for your child, no pause, no look, no step toward the potty, full refund. No questions. No pressure. Just your timeline.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: CTA — CTAClose (Cart variant)
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
        maxWidth: 360,
        boxSizing: "border-box",
        textAlign: "center",
      }}>
        Upgrade to the 3+3 Bundle, $79.99
      </a>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#4A6568", margin: "16px 0 0" }}>
        <a href="#" style={{ color: "#4A6568", textDecoration: "underline" }}>No rush, I'll read about the science first</a>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: NEXT TIME + LENA SIGN-OFF (MEDIUM variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>
      {/* Next time teaser */}
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 13, color: "#4A6568", margin: "0 0 32px" }}>
        Next time: 60 days to try it. Your judgment. No pressure.
      </p>

      {/* Lena Sign-Off — MEDIUM */}
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#1F2D2F", margin: "0 0 4px" }}>
        With understanding,
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#1F2D2F", margin: "0 0 4px" }}>
        Lena ——
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#4A6568", margin: "0 0 16px" }}>
        Customer Support · Mom of two autistic sons
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#1F2D2F", margin: "0 0 14px" }}>
        P.S. Both my sons went through this. One trained at 6, the other at almost 8. I know what it feels like to try everything. <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>See how the Body-Signal approach works →</a>
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#1F2D2F", margin: 0 }}>
        P.S. Your 60-day guarantee is valid on every order. Try it, watch for a pause or a look, and decide from there. <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>Complete your purchase →</a>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px", fontWeight: 700 }}>
        BrightKidCo
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px" }}>
        [Physical address from store settings]
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

Object.assign(window, { Email_cart_02_e2 });
