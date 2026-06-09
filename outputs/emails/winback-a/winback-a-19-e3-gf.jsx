/* Winback Path A — E3 | General Fallback (GF)
   Wireframe: wireframes/winback-a/winback-a-19-e3-gf.md
   Copy: copy/winback-a/winback-a-19-e3-gf.md
   Strategy: strategy-map.json → flows.winback-a.emails.e3-gf
   Generated: 2026-06-09
*/

const Email_winback_a_19_e3_gf = () => (
  <EmailShell preheader="No pressure. No deadline. Just a note from Lena." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ width: "100%", height: 36, background: "#FBF7F1", padding: "8px 30px", fontFamily: F.main, fontSize: 12, fontWeight: 400, lineHeight: 1.4, color: "#8A9B9D", textAlign: "left" }}>
      No pressure. No deadline. Just a note from Lena.
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — Logo + From Name
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px", borderBottom: "1px solid #E8E2DA", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568" }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO — HERO-9 Whisper Tone
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 30px 24px" }}>

      {/* Eyebrow */}
      <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, fontFamily: F.main, marginBottom: 16 }}>
        WINBACK · FINAL TOUCH
      </div>

      {/* Hero Image */}
      <div style={{ width: "100%", marginBottom: 24 }}>
        <ImgFrame height={180} label="Hero Lifestyle" sublabel="Warm lifestyle image — founders holding pants, natural light" radius={16} />
      </div>

      {/* Heading */}
      <h1 style={{ fontFamily: F.main, fontSize: 26, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.01, color: "#1F2D2F", margin: "0 0 16px" }}>
        Still figuring it out? Door's open.
      </h1>

      {/* Subhead — verbatim from wireframe */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: 0 }}>
        Whether you used them for a week or a month, whether your child showed a flicker of awareness or nothing at all, whether you're still deciding or you'd already decided: this email isn't trying to change your mind.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: DESDEEP-4 — Minimalist Statement
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "24px 30px", textAlign: "center" }}>
      <div style={{ width: 60, height: 8, borderTop: "2px solid #2BAEB4", margin: "0 auto" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER-01 — Hook Paragraph Stack
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px", fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568" }}>
      <p style={{ margin: "0 0 16px" }}>
        It's just a check-in. From one parent to another.
      </p>
      <p style={{ margin: "0 0 16px" }}>
        <strong style={{ fontWeight: 700, color: "#1F2D2F" }}>The thing about body-signal learning is that it doesn't follow a timeline.</strong>
      </p>
      <p style={{ margin: "0 0 16px" }}>
        Some kids show their first sign, a pause, a look down, a pull at their pants, in 2 weeks. Others need 8 weeks. Some take longer. And some take a break, then come back, and suddenly something clicks that wasn't clicking before.
      </p>
      <p style={{ margin: 0 }}>
        That's not failure. That's a nervous system learning at its own pace.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: 1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 30px" }}>
      <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: LETTER-01 — Mechanism Reframe
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px", fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568" }}>
      <p style={{ margin: "0 0 16px" }}>
        <strong style={{ fontWeight: 700, color: "#1F2D2F" }}>If you stopped because nothing seemed to change, here's what that might mean:</strong>
      </p>
      <p style={{ margin: "0 0 16px" }}>
        Your child's brain was still receiving the information. Every time they wore the underwear and felt that gentle sensation, even if you didn't see an outward sign, their body signal system was logging data. Building a connection that wasn't there before.
      </p>
      <p style={{ margin: 0 }}>
        <strong style={{ fontWeight: 700, color: "#1F2D2F" }}>The awareness often shows up after the break. Not during.</strong>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: EDU-10 — How It Works (Mechanism Reminder)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "32px 30px", borderRadius: 16 }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 16 }}>
        HOW THE SIGNAL WORKS
      </div>

      {/* Body — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 24px" }}>
        The Body-Signal Learning Layer creates a gentle sensation that lasts when wetness happens — 30 to 60 seconds of feedback that gives the brain time to register something happened.
      </p>

      {/* Mechanism Diagram — Simple Flow */}
      <div style={{ background: "#FFFFFF", borderRadius: 12, padding: "20px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
          {/* Step 1 */}
          <div style={{ textAlign: "center", padding: "8px 12px" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#FBF7F1", border: "2px solid #2BAEB4", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
              <span style={{ fontSize: 20 }}>💧</span>
            </div>
            <div style={{ fontFamily: F.main, fontSize: 12, fontWeight: 600, color: "#1F2D2F" }}>Wetness</div>
          </div>
          {/* Arrow */}
          <div style={{ fontFamily: F.main, fontSize: 18, color: "#2BAEB4", fontWeight: 700 }}>→</div>
          {/* Step 2 */}
          <div style={{ textAlign: "center", padding: "8px 12px" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#FBF7F1", border: "2px solid #2BAEB4", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
              <span style={{ fontSize: 20 }}>⏱</span>
            </div>
            <div style={{ fontFamily: F.main, fontSize: 12, fontWeight: 600, color: "#1F2D2F" }}>30-60s feedback</div>
          </div>
          {/* Arrow */}
          <div style={{ fontFamily: F.main, fontSize: 18, color: "#2BAEB4", fontWeight: 700 }}>→</div>
          {/* Step 3 */}
          <div style={{ textAlign: "center", padding: "8px 12px" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#FBF7F1", border: "2px solid #2BAEB4", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
              <span style={{ fontSize: 20 }}>🧠</span>
            </div>
            <div style={{ fontFamily: F.main, fontSize: 12, fontWeight: 600, color: "#1F2D2F" }}>Brain registers</div>
          </div>
          {/* Arrow */}
          <div style={{ fontFamily: F.main, fontSize: 18, color: "#2BAEB4", fontWeight: 700 }}>→</div>
          {/* Step 4 */}
          <div style={{ textAlign: "center", padding: "8px 12px" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#FBF7F1", border: "2px solid #2BAEB4", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
              <span style={{ fontSize: 20 }}>✨</span>
            </div>
            <div style={{ fontFamily: F.main, fontSize: 12, fontWeight: 600, color: "#1F2D2F" }}>Awareness builds</div>
          </div>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: 1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 30px" }}>
      <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: SP-08 — Stacked Mini-Reviews
                   (5 Recognition Anchors)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px" }}>
      {/* Intro — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 20px" }}>
        <strong style={{ fontWeight: 700 }}>Here's what "something" can look like:</strong>
      </p>

      {/* Recognition Anchor Card */}
      <div style={{ background: "#FBF7F1", borderLeft: "3px solid #2BAEB4", borderRadius: 12, padding: "20px 22px" }}>
        {/* Anchor 1 — verbatim */}
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          — A pause during play. Just one. That wasn't there before.
        </p>
        {/* Anchor 2 — verbatim */}
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          — A look at the wet spot. For the first time.
        </p>
        {/* Anchor 3 — verbatim */}
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          — A step toward the bathroom. Even after the accident.
        </p>
        {/* Anchor 4 — verbatim */}
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          — Staying dry 2 hours instead of 30 minutes.
        </p>
        {/* Anchor 5 — verbatim */}
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
          — Saying "wet" or showing you with a gesture. Once.
        </p>
      </div>

      {/* Closing — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "20px 0 0" }}>
        None of these are "trained." All of them are progress. And they all happened for real families, some after weeks of nothing, some after a months-long break.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: 1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 30px" }}>
      <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: PRODUCT SHOWCASE — SOFT
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px" }}>
      {/* Intro — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 600, lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 20px" }}>
        <strong style={{ fontWeight: 700 }}>You already own the underwear. So there's nothing to decide today.</strong>
      </p>

      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        If you want to try again, tomorrow, next week, next month, they're in the drawer. The Body-Signal Learning Layer doesn't expire. The mechanism still works the same way it did the first day.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        And the 60-day guarantee? Still stands. If nothing has changed and you're ready to move on, full refund. Your judgment. Always has been.
      </p>

      {/* Product Image */}
      <div style={{ width: "100%", marginBottom: 16 }}>
        <ImgFrame height={200} label="3+3 Bundle" sublabel="BrightKidCo 3+3 Bundle — flat-lay, laundry bag" radius={16} />
      </div>

      {/* Product Details */}
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, color: "#1F2D2F", margin: "0 0 4px" }}>
          3+3 Bundle
        </p>
        <p style={{ fontFamily: F.main, fontSize: 20, fontWeight: 700, color: "#2BAEB4", margin: "0 0 4px" }}>
          $79.99
        </p>
        <p style={{ fontFamily: F.main, fontSize: 14, color: "#8A9B9D", margin: "0 0 4px" }}>
          Free Shipping · 60-Day Guarantee
        </p>
        <p style={{ fontFamily: F.main, fontSize: 14, color: "#8A9B9D", margin: 0 }}>
          $13.33/pair — less than half single price
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: CTA-12 — Exit Close (Permission Frame)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px", textAlign: "center" }}>
      {/* Outline Button — CTA-12 */}
      <a href="#" style={{
        display: "inline-block",
        padding: "14px 32px",
        background: "transparent",
        border: "2px solid #2BAEB4",
        color: "#2BAEB4",
        fontFamily: F.main,
        fontSize: 17,
        fontWeight: 700,
        textDecoration: "none",
        borderRadius: 999,
        lineHeight: 1.4,
      }}>
        Check your order — your 3+3 is ready when you are
      </a>

      {/* Subtext */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#8A9B9D", margin: "20px 0 0" }}>
        60-day guarantee still stands. Always has.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: 1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 30px" }}>
      <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: LENA SIGN-OFF — Long Variant
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 30px" }}>
      {/* Closing lines — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
        No pressure. No deadline. No guilt.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 24px" }}>
        The door is open. Whenever you walk through it, or don't, that's your call.
      </p>

      {/* Signoff — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, color: "#1F2D2F", margin: "0 0 4px" }}>
        With care,
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 600, color: "#1F2D2F", margin: "0 0 4px" }}>
        Lena ——
      </p>
      <p style={{ fontFamily: F.main, fontSize: 13, color: "#8A9B9D", margin: "0 0 20px" }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* P.S. — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, fontStyle: "italic" }}>
        P.S. If you have a question about why you didn't see the results you hoped for, hit reply. I read every message. No templates, no bots, just me. If I don't have the answer, I'll find someone who does.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 16: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "20px 30px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, color: "#8A9B9D", margin: "0 0 8px" }}>
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a> · <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Update Preferences</a>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, color: "#8A9B9D", margin: "0 0 8px" }}>
        BrightKidCo, Built for the brain that learns differently.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, color: "#8A9B9D", margin: 0 }}>
        60-day money-back guarantee · Free shipping on bundles · WELCOME10 auto-applies
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_winback_a_19_e3_gf });
window.EMAILS = window.EMAILS || {};
window.EMAILS["winback-a/winback-a-19-e3-gf"] = Email_winback_a_19_e3_gf;
