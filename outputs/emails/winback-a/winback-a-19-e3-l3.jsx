/* Winback Path A — E3 (Day 14) | Level 3 (Maria)
   Wireframe: wireframes/winback-a/winback-a-19-e3-l3.md
   Strategy: strategy-map.json → flows.winback-a.emails.e3-l3
   Generated: 2026-06-09
*/

const Email_winback_a_19_e3_l3 = () => (
  <EmailShell preheader="Just a quiet check-in. You decide what's next." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "8px 30px", borderBottom: "none" }}>
      <div style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, lineHeight: 1.4, color: "#8A9B9D", textAlign: "left" }}>
        Just a quiet check-in. You decide what's next.
      </div>
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
       SECTION 3: HERO — HERO-9 Whisper Tone (Text-Only)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 30px 24px" }}>

      {/* Eyebrow */}
      <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, fontFamily: F.main, marginBottom: 24, textAlign: "left" }}>
        DAY 14 · FINAL CHECK-IN
      </div>

      {/* NO hero image — L3 uses text-only hero per dignity-first calibration */}

      {/* Heading */}
      <h1 style={{ fontFamily: F.main, fontSize: 24, fontWeight: 700, lineHeight: 1.2, letterSpacing: -0.01, color: "#1F2D2F", margin: "0 0 16px" }}>
        Checking in, no pressure
      </h1>

      {/* Subhead */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: 0 }}>
        Just a quiet check-in. You decide what's next.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: DESDEEP-4 — Minimalist Statement
       ══════════════════════════════════════════════════════ */}
    <div style={{ width: 60, height: 8, borderTop: "2px solid #2BAEB4", margin: "0 auto" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER-01 — Dignity Hook
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "28px 32px" }}>
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        It's been a while since we last wrote. You bought a pair of Body-Signal underwear, and maybe they're sitting in a drawer. Maybe you tried them once or twice and it didn't click. Maybe you never even opened the package.
      </p>

      {/* "That's okay." — bold, centered, standalone paragraph */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 20px", textAlign: "center" }}>
        That's okay.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        You know your child better than anyone. If the timing wasn't right, or if the sensation was too much, or if life simply got in the way, none of that is failure. It's information. You've spent years gathering information about what works and what doesn't for your child.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        This just one more data point.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: EDU-3 — Mechanism Reminder (Brief)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "28px 32px" }}>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        The Body-Signal underwear works by creating a gentle sensation that lasts when wetness happens, 30 to 60 seconds of feedback that a deeply nervous system that picks up signals slowly can register. It's not an overnight change. It's not a replacement for your current routine.
      </p>

      {/* "It's a signal." — bold, centered, standalone paragraph */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 700, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 20px", textAlign: "center" }}>
        It's a signal.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        For some children, that signal is the first time their brain has ever received the message: "Something happened." The pause. The look down. The moment before the meltdown used to start, that's nothing.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        For others, the signal still isn't enough. And that's real, too.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: PRODUCT-SHOWCASE-SOFT — 1 Pair (L3 Offer)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "28px 32px" }}>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        If you still have the pair you bought, they're ready when you are. Wear them alongside your current diapers, no need to replace anything. Just add one layer of information to your child's day.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        If you need another pair, or a different size, they're here.
      </p>

      {/* NO product image — L3 uses text-only product per dignity-first calibration */}

      {/* Product Details */}
      <p style={{ fontFamily: F.main, fontSize: 20, fontWeight: 700, color: "#2BAEB4", margin: "0 0 4px" }}>
        1 Pair: $34.99
      </p>
      <p style={{ fontFamily: F.main, fontSize: 14, color: "#8A9B9D", margin: 0 }}>
        Free shipping over $35.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: TRUST-1 — 60-Day Guarantee (Dignity Frame)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "28px 32px", borderRadius: 12 }}>
      {/* Heading */}
      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 700, color: "#1F2D2F", margin: "0 0 16px", lineHeight: 1.4 }}>
        60 days. No questions. By your judgment.
      </p>

      {/* Body */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        If the Body-Signal underwear doesn't do anything for your child, if you try them consistently for two months and see nothing, full refund. Not because we expect that. But because you should be able to try something new without adding another disappointment to the pile.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        You've earned the right to be skeptical. We mean it when we say your judgment is the only one that matters.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 9: LETTER-01 — Closing Permission
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "28px 32px" }}>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        This the last email in this sequence. Not because we're giving up on you, but because we respect your timeline.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        If you're ever ready to try again, the product is here. The science is here. I'm here.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        And if not, <span style={{ fontWeight: 700, color: "#1F2D2F" }}>you've been doing right by your child every single day</span>. No email from me changes that.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 10: CTA-12 — Exit Close (Maximum Permission)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 30px", borderTop: "1px solid #E8E2DA" }}>
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#1F2D2F", margin: "0 0 4px" }}>
        With care,
      </p>
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#1F2D2F", margin: "0 0 4px" }}>
        Lena ——
      </p>
      <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#8A9B9D", margin: "0 0 16px" }}>
        Customer Support · Mom of two autistic sons
      </p>
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, fontStyle: "italic" }}>
        P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "20px 30px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 8px" }}>
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a>
        {" · "}
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Update Preferences</a>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 8px" }}>
        BrightKidCo, Built for the brain that learns differently.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, color: "#8A9B9D", margin: 0 }}>
        60-day money-back guarantee · Free shipping on bundles · WELCOME10 auto-applies
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_winback_a_19_e3_l3 });
window.EMAILS = window.EMAILS || {};
window.EMAILS["winback-a/winback-a-19-e3-l3"] = Email_winback_a_19_e3_l3;
