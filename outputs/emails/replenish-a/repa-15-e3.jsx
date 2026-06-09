/* Replenish A — E3 | Cross-Level
   Wireframe: wireframes/replenish-a/repa-15-e3.md
   Strategy: strategy-map.json → flows.replenish-a.emails.e3
   Generated: 2026-06-09
*/

const Email_replenish_a_repa_15_e3 = () => (
  <EmailShell preheader="Your 1 pair has been working for 30 days. If you've been thinking about more, here's the bundle pricing before it shifts." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F6F2EA", padding: "6px 20px", textAlign: "center" }}>
      <div style={{ fontFamily: F.main, fontSize: 11, fontStyle: "italic", color: "#8A9B9D" }}>
        Your 1 pair has been working for 30 days. If you've been thinking about more, here's the bundle pricing before it shifts.
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — Logo + From Name
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568", marginTop: 8 }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO — HERO-10 Bold Declaration
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px 0" }}>

      {/* Eyebrow: DAY 30 */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 20, textAlign: "center" }}>
        DAY 30
      </div>

      {/* Hero Image — Framed: 2px B.ink border, 16px radius, 4px shadow */}
      <div style={{ borderRadius: 16, overflow: "hidden", border: `2px solid ${B.ink}`, boxShadow: `4px 4px 0 ${B.ink}`, marginBottom: 28 }}>
        <ImgFrame height={220} radius={0} label="LIFESTYLE HERO" sublabel="toddler-napping-watermelon-pink-shorts" />
      </div>

      {/* Headline: Last call: 3+3 pricing */}
      <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.02, color: "#1F2D2F", margin: "0 0 16px", textAlign: "center" }}>
        Last call: 3+3 pricing
      </h1>

      {/* Subhead */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 500, lineHeight: 1.5, color: "#4A6568", margin: "0 0 32px", textAlign: "center" }}>
        Your 1 pair has been working for 30 days. If you've been thinking about more, here's the bundle pricing before it shifts.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: DESDEEP-3 — Card Cascade Band
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 8, background: "linear-gradient(90deg, #E5E5E5 0%, #D8F57C 33%, #2BAEB4 66%, #E5E5E5 100%)", opacity: 0.4 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER-03 — Letter + Pull-Quote (Hook)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 24px" }}>
      {/* Hook Paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 18px" }}>
        Thirty days with the Body-Signal Learning Layer. However that's gone for your child, whether it's been a quiet 30 days of slow noticing, or 30 days with a couple of tiny moments that felt like the first real thing, you've had the chance to see what happens when a nervous system gets feedback it's been missing.
      </p>

      {/* Hook Paragraph 2 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 18px" }}>
        Whether your child is 3 and just starting to show signs of awareness, or 8 and you've been at this long enough to know what "trying" really costs, if they're wearing that 1 pair, you've <span style={{ fontWeight: 600, color: "#1F2D2F" }}>seen something</span>.
      </p>

      {/* Hook Paragraph 3 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        Maybe it was a pause. A look down. A pull at the waistband they've never done before. Or maybe nothing visible yet, and that's normal too.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: LETTER-03 — Validation + Pull-Quote
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px 44px" }}>
      {/* Intro */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        Here's what I hear from parents at the 30-day mark, and I've said this one myself:
      </p>

      {/* Pull-Quote Card */}
      <div style={{ background: "#FBF7F1", borderLeft: "3px solid #2BAEB4", borderRadius: 16, padding: 24, marginBottom: 24 }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 400, fontStyle: "italic", lineHeight: 1.4, color: "#1F2D2F", margin: "0 0 8px" }}>
          "One pair isn't enough for consistent learning."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, color: "#8A9B9D", margin: 0 }}>
          — Lena
        </p>
      </div>

      {/* Validation Paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 18px" }}>
        I bought 1 pair first too. Both my sons went through this. One pair feels safe, it's a test, a toe-dip. Smart move. But here's what happens: the pair gets worn, gets washed, goes in the drawer. By the time it's clean and dry again, the rhythm's broken.
      </p>

      {/* Validation Paragraph 2 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 18px" }}>
        If your child is starting to show signals, even small ones, <span style={{ fontWeight: 600, color: "#1F2D2F" }}>consistency is what builds the pathway</span>. The 3+3 Bundle gives you 6 pairs in rotation. Always a clean pair. Always the feedback loop running.
      </p>

      {/* Validation Paragraph 3 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        If your child hasn't shown signals yet, that's okay too. Every nervous system moves at its own pace. Some kids take 2 weeks. Others take 8. Both are normal. The 3+3 means you can keep the input steady without the laundry stress.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: 1px RULE — Tonal Shift
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E8E2DA" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: EDU-8 — Mechanism Diagram
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 24px" }}>

      {/* Eyebrow: WHY ROTATION MATTERS */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 16 }}>
        WHY ROTATION MATTERS
      </div>

      {/* Mechanism Paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 18px" }}>
        The Body-Signal Learning Layer works through sustained, repeated feedback. Every time the underwear creates that gentle sensation, the brain gets another data point: <span style={{ fontWeight: 600, color: "#1F2D2F" }}>something happened. I felt it.</span>
      </p>

      {/* Rotation Diagram — SVG */}
      <div style={{ width: "100%", margin: "24px 0", padding: "16px 0" }}>
        <svg width="100%" height="140" viewBox="0 0 372 140" preserveAspectRatio="xMidYMid meet">
          {/* 1-Pair Label */}
          <text x="0" y="16" fontSize="12" fill="#4A6568" fontWeight="600" fontFamily="Helvetica, Arial, sans-serif">1-Pair cycle</text>

          {/* 1-Pair blocks: WORN → WASH → DRY → WAIT */}
          <rect x="0" y="24" width="76" height="26" rx="6" fill="#2BAEB4" opacity="0.8" />
          <text x="38" y="41" textAnchor="middle" fontSize="9" fill="#FFFFFF" fontWeight="700" fontFamily="Helvetica, Arial, sans-serif">WORN</text>

          <text x="84" y="41" fontSize="11" fill="#8A9B9D" fontFamily="Helvetica, Arial, sans-serif">→</text>

          <rect x="96" y="24" width="76" height="26" rx="6" fill="#E5E5E5" />
          <text x="134" y="41" textAnchor="middle" fontSize="9" fill="#8A9B9D" fontWeight="600" fontFamily="Helvetica, Arial, sans-serif">WASH</text>

          <text x="180" y="41" fontSize="11" fill="#8A9B9D" fontFamily="Helvetica, Arial, sans-serif">→</text>

          <rect x="192" y="24" width="76" height="26" rx="6" fill="#E5E5E5" />
          <text x="230" y="41" textAnchor="middle" fontSize="9" fill="#8A9B9D" fontWeight="600" fontFamily="Helvetica, Arial, sans-serif">DRY</text>

          <text x="276" y="41" fontSize="11" fill="#8A9B9D" fontFamily="Helvetica, Arial, sans-serif">→</text>

          <rect x="288" y="24" width="76" height="26" rx="6" fill="#E5E5E5" />
          <text x="326" y="41" textAnchor="middle" fontSize="9" fill="#8A9B9D" fontWeight="600" fontFamily="Helvetica, Arial, sans-serif">WAIT</text>

          {/* 1-Pair signal bar — intermittent */}
          <rect x="0" y="58" width="76" height="8" rx="3" fill="#2BAEB4" opacity="0.5" />
          <rect x="96" y="58" width="76" height="8" rx="3" fill="#E5E5E5" />
          <rect x="192" y="58" width="76" height="8" rx="3" fill="#E5E5E5" />
          <rect x="288" y="58" width="76" height="8" rx="3" fill="#E5E5E5" />
          <text x="186" y="78" textAnchor="middle" fontSize="10" fill="#8A9B9D" fontStyle="italic" fontFamily="Helvetica, Arial, sans-serif">intermittent signal</text>

          {/* 3+3 Label */}
          <text x="0" y="100" fontSize="12" fill="#1F2D2F" fontWeight="600" fontFamily="Helvetica, Arial, sans-serif">3+3 rotation</text>

          {/* 3+3 signal bar — continuous */}
          <rect x="0" y="108" width="364" height="8" rx="3" fill="#2BAEB4" opacity="0.5" />
          <text x="182" y="128" textAnchor="middle" fontSize="10" fill="#2BAEB4" fontWeight="600" fontStyle="italic" fontFamily="Helvetica, Arial, sans-serif">continuous signal</text>
        </svg>
      </div>

      {/* Mechanism Paragraph 2 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 18px" }}>
        One pair interrupts that data stream every time it's in the wash. The 3+3 rotation keeps the signal arriving daily, not every other day, not "whenever the pair is dry."
      </p>

      {/* Mechanism Paragraph 3 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 24px" }}>
        For kids 3 to 10+, verbal or non-verbal, diagnosed or still figuring it out, the mechanism is the same. <span style={{ fontWeight: 600, color: "#1F2D2F" }}>The brain learns by repetition. Disruption slows the learning curve.</span>
      </p>

      {/* Parent Quote Card */}
      <div style={{ background: "#FBF7F1", borderLeft: "3px solid #2BAEB4", borderRadius: 16, padding: 20 }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 10px" }}>
          "He went from wondering to walking toward the bathroom. It took 5 weeks of consistent wear. If we only had 1 pair, we'd have lost half those wearing days to laundry."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, color: "#8A9B9D", margin: 0 }}>
          — BrightKidCo parent, internal review
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: 1px RULE — Tonal Shift
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E8E2DA" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 10: SP-14 — Three-Family Testimonials
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 24px" }}>
      {/* Intro */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 24px" }}>
        Three parents who each bought 1 pair first. Three different kids. One shared experience thirty days in:
      </p>

      {/* Card 1 — L1 pattern (B.teal border) */}
      <div style={{ background: "#FBF7F1", borderLeft: "3px solid #2BAEB4", borderRadius: 16, padding: 20, marginBottom: 16 }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "He said 'wet' for the first time ever on Week 3. It was after wearing them every day. I don't think we'd have gotten there without daily use."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#8A9B9D", margin: "0 0 4px" }}>
          Parent of a verbal 4-year-old
        </p>
        <p style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#B8CACD", margin: 0 }}>
          VERBAL · AGE 4
        </p>
      </div>

      {/* Card 2 — L2 pattern (B.green border) */}
      <div style={{ background: "#FBF7F1", borderLeft: "3px solid #5DD07A", borderRadius: 16, padding: 20, marginBottom: 16 }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "We're not trained yet. But he paused. He looked down. That's never happened before in 4 years of tries. Week 4 with the underwear. One pair was in the wash half the time."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#8A9B9D", margin: "0 0 4px" }}>
          Parent of a 6-year-old with sensory differences
        </p>
        <p style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#B8CACD", margin: 0 }}>
          SENSORY · AGE 6
        </p>
      </div>

      {/* Card 3 — L3 pattern (B.muted border) */}
      <div style={{ background: "#FBF7F1", borderLeft: "3px solid #8A9B9D", borderRadius: 16, padding: 20, marginBottom: 24 }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "He doesn't notice wetness. He never has. But after a month of consistent wear, he walks differently when he has an accident. That's new. I'll take it."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#8A9B9D", margin: "0 0 4px" }}>
          Parent of a non-verbal 9-year-old
        </p>
        <p style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#B8CACD", margin: 0 }}>
          NON-VERBAL · AGE 9
        </p>
      </div>

      {/* Closing */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        If any of these sound like your child, maybe not fully there yet, maybe different progress, maybe just starting, you know what 30 more days of consistent wear could look like.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: 1px RULE — Tonal Shift
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E8E2DA" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 12: PRODUCT — ProductShowcaseFull (3+3 Bundle)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 24px" }}>
      <div style={{ background: "#FFFFFF", border: `2px solid ${B.ink}`, borderRadius: 16, boxShadow: `4px 4px 0 ${B.ink}`, overflow: "hidden" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>

          {/* Left Column — Product Image */}
          <div style={{ width: 160, flexShrink: 0, borderRight: `2px solid ${B.ink}`, display: "flex", alignItems: "stretch" }}>
            <ImgFrame height={280} radius={0} label="PRODUCT" sublabel="penguin-multicolor" />
          </div>

          {/* Right Column — Product Details */}
          <div style={{ flex: 1, padding: "22px 20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {/* Eyebrow */}
            <div style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 8 }}>
              THE 3+3 BUNDLE
            </div>

            {/* Title */}
            <div style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, color: "#1F2D2F", marginBottom: 12 }}>
              6 pairs in rotation
            </div>

            {/* Price */}
            <div style={{ fontFamily: F.main, fontSize: 24, fontWeight: 700, color: "#1F2D2F", marginBottom: 12 }}>
              $79.99
            </div>

            {/* Savings Badge */}
            <div style={{ display: "inline-block", background: "#5DD07A", color: "#FFFFFF", padding: "4px 10px", borderRadius: 999, fontSize: 13, fontWeight: 700, marginBottom: 12, alignSelf: "flex-start" }}>
              62% SAVINGS vs 1-pair
            </div>

            {/* Free Shipping */}
            <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, color: "#5DD07A", marginBottom: 6 }}>
              Free shipping
            </div>

            {/* Per-pair note */}
            <div style={{ fontFamily: F.main, fontSize: 13, color: "#8A9B9D" }}>
              $13.33/pair
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: CTA-12 — Exit Close
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 24px", textAlign: "center" }}>

      {/* Body */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        No rush. No pressure. If 1 pair is working for your rhythm, keep going. If you want the consistency of a rotation, the pricing is here today.
      </p>

      {/* Guarantee line */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 24px" }}>
        Either way, 60 days, your judgment. If it doesn't work for your child, full refund.
      </p>

      {/* Primary CTA — B.teal bg, white text, 52px, pill */}
      <a href="#" style={{
        display: "inline-block",
        padding: "0 32px",
        background: "#2BAEB4",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: 0.5,
        textDecoration: "none",
        borderRadius: 999,
        height: 52,
        lineHeight: "52px",
        textAlign: "center",
        marginBottom: 12,
      }}>
        Get the 3+3 Bundle, $79.99 with free shipping →
      </a>

      {/* Price note */}
      <p style={{ fontFamily: F.main, fontSize: 13, fontStyle: "italic", color: "#8A9B9D", margin: "0 0 20px" }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>

      {/* Secondary CTA — B.teal outline, B.teal text, 48px, pill */}
      <div>
        <a href="#" style={{
          display: "inline-block",
          padding: "0 32px",
          background: "transparent",
          color: "#2BAEB4",
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: 0.5,
          textDecoration: "none",
          borderRadius: 999,
          height: 48,
          lineHeight: "48px",
          textAlign: "center",
          border: "2px solid #2BAEB4",
        }}>
          Keep using your 1 pair, the offer will be here when you're ready →
        </a>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: 1px RULE — Tonal Shift
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E8E2DA" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 15: TRUST-2 — Guarantee Detail Cards
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 24px" }}>
      <div style={{ display: "flex", gap: 12 }}>

        {/* Card 1 — 60-Day Money-Back */}
        <div style={{ flex: 1, background: "#FBF7F1", border: "1px solid #5DD07A", borderRadius: 16, padding: 16, textAlign: "center" }}>
          {/* Checkmark icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginBottom: 8 }}>
            <circle cx="12" cy="12" r="11" fill="none" stroke="#5DD07A" strokeWidth="1.5" />
            <path d="M7 12l3 3 7-7" fill="none" stroke="#5DD07A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, color: "#1F2D2F", lineHeight: 1.4 }}>
            60-DAY MONEY-BACK GUARANTEE
          </div>
        </div>

        {/* Card 2 — Free Shipping */}
        <div style={{ flex: 1, background: "#FBF7F1", border: "1px solid #5DD07A", borderRadius: 16, padding: 16, textAlign: "center" }}>
          {/* Truck icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginBottom: 8 }}>
            <rect x="1" y="6" width="14" height="11" rx="2" fill="none" stroke="#5DD07A" strokeWidth="1.5" />
            <path d="M15 10h4l3 3v4h-7V10z" fill="none" stroke="#5DD07A" strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="6" cy="18.5" r="2" fill="none" stroke="#5DD07A" strokeWidth="1.5" />
            <circle cx="18.5" cy="18.5" r="2" fill="none" stroke="#5DD07A" strokeWidth="1.5" />
          </svg>
          <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, color: "#1F2D2F", lineHeight: 1.4 }}>
            FREE SHIPPING ON BUNDLES
          </div>
        </div>

        {/* Card 3 — No Questions Asked */}
        <div style={{ flex: 1, background: "#FBF7F1", border: "1px solid #5DD07A", borderRadius: 16, padding: 16, textAlign: "center" }}>
          {/* Refund icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginBottom: 8 }}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="none" stroke="#5DD07A" strokeWidth="1.5" />
            <path d="M8 12l3-6h2l3 6" fill="none" stroke="#5DD07A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 15h6" fill="none" stroke="#5DD07A" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, color: "#1F2D2F", lineHeight: 1.4 }}>
            NO QUESTIONS ASKED REFUND
          </div>
        </div>

      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 16: SIGNOFF — Lena (MEDIUM variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#1F2D2F", padding: "0 22px 36px" }}>
      <div style={{
        position: "relative",
        background: "#1F2A2C",
        border: "1.5px solid #2F3D40",
        borderRadius: 22,
        padding: "26px 24px 24px",
        overflow: "hidden",
      }}>
        {/* Subtle top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg, #2BAEB4 0%, #5DD07A 100%)",
          opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          {/* Avatar with warm ring */}
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FFD866 0%, #2BAEB4 100%)",
            padding: 2.5,
            position: "relative",
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden",
              border: `1.5px solid ${B.ink}`,
            }}>
              {/* Portrait placeholder */}
              <svg width="58" height="58" viewBox="0 0 58 58">
                <rect width="58" height="58" fill="#F5E8D0" />
                <circle cx="29" cy="22" r="10" fill="#D4A574" />
                <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                <text x="29" y="55" textAnchor="middle" fontSize="6" fill={B.ink} fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
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
              Lena
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Customer Support · Mom of two autistic sons
            </div>
          </div>
        </div>

        {/* Closing words + Handwritten signature */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          paddingTop: 16, paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, color: "#B8CACD", marginBottom: 2 }}>
              With understanding,
            </div>
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 42,
              lineHeight: 0.95,
              fontWeight: 500,
              color: "#2BAEB4",
              letterSpacing: -0.5,
              marginTop: 2,
            }}>
              Lena
            </div>
          </div>

          {/* Flourish SVG */}
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#2BAEB4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#2BAEB4" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* P.S. */}
        <div style={{
          fontSize: 13, lineHeight: 1.65, color: "#B8CACD",
          fontStyle: "italic",
        }}>
          <span style={{ color: "#2BAEB4", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          I bought 1 pair first too. My older son was 8 before things clicked. The body-signal approach works on its own timeline, and so does your judgment. 60 days, your call.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 17: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>
      {/* Brand voice */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontStyle: "italic", color: "#8A9B9D", margin: "0 0 16px" }}>
        No spam. No templates. Just a mom who lives this too.
      </p>

      {/* CAN-SPAM explanation */}
      <p style={{ fontFamily: F.main, fontSize: 11, color: "#8A9B9D", margin: "0 0 12px", lineHeight: 1.6 }}>
        You're receiving this because you purchased a BrightKidCo 1-pair bundle. If you'd like fewer emails or to update preferences, <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>click here</a>.
      </p>

      {/* Legal */}
      <p style={{ fontFamily: F.main, fontSize: 11, color: "#8A9B9D", margin: "0 0 12px" }}>
        BrightKidCo · Brooklyn, NY 11201 · <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a>
      </p>

      {/* Gradient accent bar */}
      <div style={{ margin: "16px auto 0", width: 60, height: 3, background: "linear-gradient(90deg, #2BAEB4 0%, #5DD07A 100%)", borderRadius: 3 }} />
    </div>

  </EmailShell>
);

window.EMAILS = window.EMAILS || {};
window.EMAILS["replenish-a/repa-15-e3"] = Email_replenish_a_repa_15_e3;
