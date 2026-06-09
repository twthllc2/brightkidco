/* Winback Path A — E1 | GF (General Fallback)
   Wireframe: wireframes/winback-a/winback-a-19-e1-gf.md
   Copy: copy/winback-a/winback-a-19-e1-gf.md
   Strategy: strategy-map.json → flows.winback-a.emails.e1-gf
   Generated: 2026-06-09
*/

const Email_winback_a_19_e1_gf = () => (
  <EmailShell preheader="Whether your child showed signs or didn't, both tell you something." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F6F2EA", padding: "6px 20px", textAlign: "center" }}>
      <span style={{ fontFamily: F.main, fontSize: 11, fontStyle: "italic", color: "#8A9B9D" }}>
        Whether your child showed signs or didn't, both tell you something.
      </span>
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
       SECTION 3: HERO — HERO-9 Whisper Tone
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 30px" }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 16, textAlign: "center" }}>
        WINBACK · DAY 0
      </div>

      {/* Headline */}
      <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.02, color: "#1F2D2F", margin: "0 0 20px", textAlign: "center" }}>
        How's it going with the body signals?
      </h1>

      {/* Subhead */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 500, lineHeight: 1.5, color: "#4A6568", margin: 0, textAlign: "center" }}>
        It's been 90 days since your order. So I'm checking in, no pressure attached.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: DESDEEP-4 — Minimalist Statement Band
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "8px 0", textAlign: "center" }}>
      <div style={{ width: 60, height: 2, background: "#2BAEB4", margin: "0 auto" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER-02 — Handwritten Opener (Hook)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 30px 44px" }}>
      {/* Greeting */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontStyle: "italic", color: "#1F2D2F", margin: "0 0 20px" }}>
        Hey there,
      </p>

      {/* Hook paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        It's been about 90 days since your order. So I'm checking in, no pressure attached.
      </p>

      {/* Hook paragraph 2 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        Whether your child showed their first glimmer of awareness or you're still waiting for any sign, both of those tell you something useful. And neither means you did anything wrong.
      </p>

      {/* Hook paragraph 3 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        If you're reading this thinking "we paused after a week" or "it didn't click" or "I'm not sure if it's working", that's exactly why I'm writing. The body-signal learning pathway doesn't work the same way for every child.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: SP-08 — Stacked Mini-Reviews (Recognition Anchors)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 30px 44px" }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 20, textAlign: "center" }}>
        WHAT PARENTS TELL ME
      </div>

      {/* Card 1 */}
      <div style={{ background: "#FBF7F1", borderLeft: "3px solid #2BAEB4", borderRadius: 16, padding: 20, marginBottom: 16 }}>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#1F2D2F", margin: 0, lineHeight: 1.5 }}>
          He wore them for a few days, nothing changed, we stopped.
        </p>
      </div>

      {/* Card 2 */}
      <div style={{ background: "#FBF7F1", borderLeft: "3px solid #5DD07A", borderRadius: 16, padding: 20, marginBottom: 16 }}>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#1F2D2F", margin: 0, lineHeight: 1.5 }}>
          She showed a tiny pause in week two, then nothing for a month.
        </p>
      </div>

      {/* Card 3 */}
      <div style={{ background: "#FBF7F1", borderLeft: "3px solid #8A9B9D", borderRadius: 16, padding: 20, marginBottom: 16 }}>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#1F2D2F", margin: 0, lineHeight: 1.5 }}>
          He never seemed to notice, even after weeks.
        </p>
      </div>

      {/* Card 4 */}
      <div style={{ background: "#FBF7F1", borderLeft: "3px solid #2BAEB4", borderRadius: 16, padding: 20, marginBottom: 16 }}>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#1F2D2F", margin: 0, lineHeight: 1.5 }}>
          We had a good week, then regression, then we gave up.
        </p>
      </div>

      {/* Card 5 */}
      <div style={{ background: "#FBF7F1", borderLeft: "3px solid #5DD07A", borderRadius: 16, padding: 20 }}>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#1F2D2F", margin: 0, lineHeight: 1.5 }}>
          I'm not even sure what "working" should look like.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 30px" }}>
      <div style={{ height: 1, background: "#E8E2DA" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: EDU-3 — Interoception Explainer (Mechanism)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F8F6F3", padding: "44px 30px" }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 20 }}>
        WHY THE PATHWAY MATTERS
      </div>

      {/* Body paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 24px" }}>
        If any of those sound familiar, here's what most parents don't realize: the interoception pathway doesn't build on a straight line. It builds in cycles. Pauses are part of the process. Some weeks the signal registers. Some weeks the nervous system recalibrates. Both are normal.
      </p>

      {/* Mechanism diagram — Non-linear pathway SVG */}
      <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 24, marginBottom: 24, textAlign: "center" }}>
        <svg width="100%" height="60" viewBox="0 0 360 60" preserveAspectRatio="xMidYMid meet">
          {/* Non-linear pathway */}
          <path d="M20,40 L60,20 L100,35 L140,15 L180,30 L220,10 L260,25 L300,18 L340,30"
                stroke="#2BAEB4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* Caption */}
          <text x="180" y="56" textAnchor="middle" fontSize="11" fill="#4A6568" fontFamily="Helvetica, Arial, sans-serif" fontStyle="italic">
            The pathway doesn't build on a straight line.
          </text>
        </svg>
      </div>

      {/* Body paragraph 2 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        For some kids, the first sign comes in 2-4 weeks of consistent wear. For others, it takes 8-12 weeks, or longer. And for some, the first sign isn't "I need to go." It's smaller: a pause. A look down. A hand toward the pants. A moment of stillness where there used to be none.
      </p>

      {/* Body paragraph 3 — bold reading path */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        Those aren't failures. Those are the nervous system{" "}
        <span style={{ fontWeight: 600, color: "#1F2D2F" }}>starting to receive information</span>{" "}
        it's been missing.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 30px" }}>
      <div style={{ height: 1, background: "#E8E2DA" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: LETTER-02 — Action Guidance Block
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 30px" }}>
      {/* Bold header */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, color: "#1F2D2F", margin: "0 0 16px" }}>
        Here's what I'd suggest if you're unsure:
      </p>

      {/* Paused path */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        If you paused because it didn't seem to work, try 2 hours of wear daily for 2-3 weeks. Consistency matters more than intensity. The wetness signal needs repetition before the brain learns to recognize it. Pull-ups wick that signal away completely, so if your child is still in pull-ups during the day, the learning window narrows.
      </p>

      {/* Saw something path */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        If you saw something, even once, that's real. Build on it.
      </p>

      {/* Saw nothing path */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        If you didn't see anything, that's also real. Some nervous systems need more time. And some children may need to try alongside other approaches.
      </p>

      {/* Guarantee reminder */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        Your original 60-day guarantee still stands. If the underwear didn't work for your child, the guarantee covers it. No questions. Your judgment.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 30px" }}>
      <div style={{ height: 1, background: "#E8E2DA" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: PRODUCT INTRODUCTION — ProductShowcaseSoft
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 30px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
        {/* Product Image */}
        <div style={{ flexShrink: 0 }}>
          <div style={{
            width: 180, height: 240, borderRadius: 16,
            border: "1px solid #1F2D2F", boxShadow: "4px 4px 0 #1F2D2F",
            overflow: "hidden", background: "#FBF7F1",
          }}>
            <ImgFrame height={240} radius={0} label="Product" sublabel="Training Pants" />
          </div>
        </div>

        {/* Product Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, color: "#1F2D2F", margin: "0 0 12px" }}>
            The 3+3 Bundle ($79.99) is still available.
          </p>
          <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#4A6568", margin: "0 0 12px", lineHeight: 1.5 }}>
            1 Pair ($34.99) is also available if you want to test before committing.
          </p>
          <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 700, color: "#2BAEB4", margin: 0 }}>
            Use code WELCOME10 at checkout for 10% off.
          </p>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: CTA-11 — Permission CTA
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 30px 44px", textAlign: "center" }}>
      {/* Primary CTA Button */}
      <a href="#" style={{
        display: "block", padding: "0 32px", height: 52, lineHeight: "52px",
        background: "#2BAEB4", color: "#FFFFFF", fontFamily: F.main,
        fontSize: 18, fontWeight: 700, textDecoration: "none",
        borderRadius: 999, textAlign: "center", boxSizing: "border-box",
      }}>
        Get the 3+3 Bundle, $79.99 with free shipping →
      </a>

      {/* Fine print */}
      <p style={{ fontFamily: F.main, fontSize: 13, fontStyle: "italic", color: "#8A9B9D", margin: "16px 0 0" }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>

      {/* Secondary CTA */}
      <p style={{ fontFamily: F.main, fontSize: 14, marginTop: 16, marginBottom: 0 }}>
        <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>
          or try 1 Pair for $34.99
        </a>
      </p>

      {/* Reply invite */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontStyle: "italic", color: "#4A6568", margin: "20px 0 0" }}>
        Hit reply and tell me how it's going.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 30px" }}>
      <div style={{ height: 1, background: "#E8E2DA" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: TRUST-1 — 60-Day Guarantee Seal
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 30px", textAlign: "center" }}>
      {/* Seal */}
      <div style={{
        display: "inline-block", background: "#FBF7F1",
        border: "2px solid #5DD07A", borderRadius: "50%",
        width: 100, height: 100, lineHeight: "100px",
        textAlign: "center", marginBottom: 16,
      }}>
        <span style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, color: "#5DD07A", lineHeight: 1.3, display: "inline-block", verticalAlign: "middle" }}>
          60 DAYS<br/>· YOUR JUDGMENT ·
        </span>
      </div>

      {/* Body text */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        Your original 60-day guarantee still stands. If the underwear didn't work for your child, the guarantee covers it. No questions. Your judgment.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: SIGNOFF — Lena Sign-Off (MEDIUM variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#1F2D2F", padding: "32px 30px" }}>
      <div style={{
        background: "#1F2A2C", border: "1.5px solid #2F3D40",
        borderRadius: 22, padding: "26px 24px 24px", overflow: "hidden",
      }}>
        {/* Top gradient accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #2BAEB4, #5DD07A)" }} />

        {/* "With care," */}
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, color: "#B8CACD", margin: "0 0 8px" }}>
          With care,
        </p>

        {/* Handwritten signature */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: "'Caveat', cursive", fontSize: 42,
              lineHeight: 0.95, fontWeight: 500, color: "#2BAEB4",
              letterSpacing: -0.5, marginTop: 2,
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

        {/* Subtitle */}
        <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 16px" }}>
          Customer Support · Mom of two autistic sons
        </p>

        {/* Dashed divider */}
        <div style={{ borderTop: "1px dashed #3A4547", marginBottom: 16 }} />

        {/* P.S. */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" }}>
          <span style={{ color: "#2BAEB4", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>P.S.</span>
          If you hit reply, you get me, not a bot. I read everything. Sometimes it takes me a day to answer, but I will.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 30px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#8A9B9D", margin: "0 0 8px" }}>
        BrightKidCo · Brooklyn, NY 11201
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#8A9B9D", margin: "0 0 8px" }}>
        No longer want these emails? <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a> or <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Manage Preferences</a>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, fontStyle: "italic", color: "#2BAEB4", margin: "0 0 8px" }}>
        Built for the brain that learns differently.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 10, fontWeight: 400, color: "#8A9B9D", margin: "0 0 20px" }}>
        © 2026 BrightKidCo. All rights reserved.
      </p>
      {/* Gradient accent bar */}
      <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #2BAEB4, #5DD07A)", margin: "0 auto", borderRadius: 3 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: EASTER EGG — Recognition Anchor Dots
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "20px 30px 32px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 12, alignItems: "center" }}>
        {/* 5 dots representing the 5 recognition anchors spanning all levels */}
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#2BAEB4", opacity: 0.4 }} />
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#5DD07A", opacity: 0.6 }} />
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#8A9B9D", opacity: 0.5 }} />
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#2BAEB4", opacity: 0.7 }} />
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#5DD07A", opacity: 0.9 }} />
      </div>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_winback_a_19_e1_gf });
window.EMAILS = window.EMAILS || {};
window.EMAILS["winback-a/winback-a-19-e1-gf"] = Email_winback_a_19_e1_gf;
