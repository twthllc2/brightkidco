/* Winback Path A — E1 | L3 (Maria)
   Wireframe: wireframes/winback-a/winback-a-19-e1-l3.md
   Copy: copy/winback-a/winback-a-19-e1-l3.md
   Strategy: strategy-map.json → flows.winback-a.emails.e1-l3
   Generated: 2026-06-09
*/

const MW = 420;
const LOGO = "../assets/brightkidco-logo-v2.png";

/* ── L3 palette — dignity-first, minimal ── */
const L3 = {
  brandGreen: "#039902",
  cream: "#FBF7EB",
  charcoal: "#1A1A1A",
  mint: "#DBFFCD",
  warmGray: "#6B6B6B",
  divider: "#E8E2DA",
};

const Email_winback_a_19_e1_l3 = () => (
  <EmailShell preheader="We're not asking you to try again. Just reminding you what's here." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: L3.cream, padding: "6px 20px", textAlign: "center" }}>
      <span style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 11, fontStyle: "italic", color: L3.warmGray }}>
        We're not asking you to try again. Just reminding you what's here.
      </span>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — Logo Only
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO — HERO-9 Whisper Tone (L3 Dignity)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 32px" }}>
      <h1 style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 24, fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.3, color: L3.charcoal, margin: "0 0 20px" }}>
        It's been a while. This exists. No pressure.
      </h1>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.warmGray, margin: 0 }}>
        We're not here to ask why you stopped using them, or to encourage you to try again. That's not our place. You know your child best. You know what's right for your family.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: LETTER — Opening (Spacious Paragraphs)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 32px" }}>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: "0 0 16px" }}>
        It's been a few months since you picked up a pair from us.
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: "0 0 16px" }}>
        You had a reason to step back, and <strong style={{ fontWeight: 700 }}>you were right to trust that</strong>.
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: "0 0 16px" }}>
        We're not here to ask why you stopped using them, or to encourage you to try again. That's not our place. You know your child best. You know what's right for your family.
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: 0 }}>
        But we did want to let you know: we're still here.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER — Hook (Gentle Re-engagement)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 32px" }}>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: "0 0 16px" }}>
        The underwear your child wore was designed around one idea: the body learns best when it gets the right signal.
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: "0 0 16px" }}>
        For some children, that signal arrives quickly. For others, it takes time. For some, it looks different than expected, and that's still progress.
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: "0 0 16px" }}>
        If your child paused. Looked down. Walked toward the bathroom, even after. Stayed dry a little longer than before.
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: 0 }}>
        Those moments matter. Not because they mean "it worked." Because they mean something shifted. Even a small shift is real.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: LETTER — Validation (Honor Their Choice)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 32px" }}>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: "0 0 16px" }}>
        You've been doing this for years. You've seen products come and go. You've heard promises that didn't deliver.
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: "0 0 16px" }}>
        If you put the underwear aside, that decision was valid. The product will be here. The 60-day guarantee will be here. So will I.
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: 0 }}>
        <strong style={{ fontWeight: 700 }}>There is no deadline.</strong> No threshold you need to meet.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: PULL-QUOTE — Mint BG
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 32px" }}>
      <div style={{ background: L3.mint, borderLeft: `3px solid ${L3.brandGreen}`, borderRadius: 16, padding: 28 }}>
        <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 18, fontStyle: "italic", lineHeight: 1.5, color: L3.charcoal, margin: 0 }}>
          Those moments matter. Not because they mean "it worked." Because they mean something shifted.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: EDU-3 — Mechanism Reminder (Gentle Reframe)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 32px" }}>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: "0 0 16px" }}>
        The body-signal underwear works by giving the brain a sensation it may never have received before, a gentle, sustained "uh-oh" feeling that lasts 30 to 60 seconds after the moment passes.
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: "0 0 16px" }}>
        Pull-ups wick that sensation away. Regular underwear delivers it in a split second that the brain can't always catch. The BSL layer holds the signal long enough for a deeply nervous system that picks up signals slowly to register: <em>something happened.</em>
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: 0 }}>
        It doesn't force the brain to respond differently. It gives the brain the information it needs to make its own connections, in its own time.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: PRODUCT — 1 Pair Only
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 32px" }}>
      {/* Product Image — no border, no shadow */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <img
          src="/root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-cloud-raindrop-white.jpg"
          alt="BrightKidCo training pants, cloud raindrop white, flat lay"
          style={{ width: 180, height: 240, objectFit: "cover", borderRadius: 16 }}
        />
      </div>

      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: "0 0 16px" }}>
        If you still have the pair you bought, you already have the mechanism. Pull it out. Let your child wear it alongside their current routine, during a quiet afternoon at home, without pressure, without a timer.
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: 0 }}>
        If you don't still have it, one pair is $34.99. Add it next to what you're already using. No replacement. No switching.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: CTA-12 — Exit Close (Permission-Framed)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 32px" }}>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: L3.charcoal, margin: "0 0 20px" }}>
        You decide. No timeline. No push. If it fits your child's journey, it's here. If today's not the day, that's a real answer.
      </p>

      {/* CTA — text only, underline, no button */}
      <div style={{ marginBottom: 20 }}>
        <a href="#" style={{
          display: "inline-block",
          fontFamily: "'Questrial', Arial, Helvetica, sans-serif",
          fontSize: 15,
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: L3.brandGreen,
          textDecoration: "underline",
          padding: "10px 0",
          minWidth: 44,
          minHeight: 44,
        }}>
          YOU DECIDE. NO TIMELINE.
        </a>
      </div>

      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 14, fontWeight: 400, color: L3.warmGray, fontStyle: "italic", margin: 0 }}>
        Next time: What parents who tried again discovered — and why the second attempt often looks different.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: TRUST-1 — 60-Day Guarantee (In Passing)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 32px", textAlign: "center" }}>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 14, color: L3.warmGray, margin: 0 }}>
        The 60-day guarantee will be here.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: SIGNOFF — Lena Sign-Off (WINBACK variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: L3.cream, padding: "48px 32px" }}>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: L3.charcoal, margin: "0 0 20px" }}>
        Whatever you choose, we're glad you were part of this community. The door is always open.
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 400, color: L3.charcoal, margin: "0 0 4px" }}>
        With care,
      </p>
      <div style={{ fontFamily: "'Caveat', cursive", fontSize: 42, color: L3.brandGreen, lineHeight: 0.95, margin: "8px 0 12px" }}>
        Lena
      </div>
      {/* Flourish SVG */}
      <svg width="54" height="40" viewBox="0 0 54 40" style={{ opacity: 0.55, marginBottom: 12 }}>
        <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke={L3.brandGreen} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M48,12 L52,10 L50,14" stroke={L3.brandGreen} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 12, color: L3.warmGray, margin: "0 0 20px" }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* Dashed divider */}
      <div style={{ borderTop: `1px dashed ${L3.divider}`, margin: "0 0 20px" }} />

      {/* P.S. */}
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 14, lineHeight: 1.65, color: L3.charcoal, fontStyle: "italic", margin: 0 }}>
        <span style={{ fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>P.S.</span>
        If you have a question about anything, how it works, what signs to look for, whether it's worth trying again, hit reply. You'll get me, not a template. I read everything.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 32px", textAlign: "center" }}>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 11, color: L3.warmGray, margin: "0 0 8px" }}>
        BrightKidCo · Brooklyn, NY 11201
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 11, color: L3.warmGray, margin: "0 0 12px" }}>
        No longer want these emails? <a href="#" style={{ color: L3.warmGray, textDecoration: "underline" }}>Unsubscribe</a> or <a href="#" style={{ color: L3.warmGray, textDecoration: "underline" }}>Manage Preferences</a>
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 12, color: L3.brandGreen, fontStyle: "italic", margin: "0 0 12px" }}>
        Built for the brain that learns differently.
      </p>
      <p style={{ fontFamily: "'Questrial', Arial, Helvetica, sans-serif", fontSize: 10, color: L3.warmGray, margin: 0 }}>
        © 2026 BrightKidCo. All rights reserved.
      </p>
    </div>

  </EmailShell>
);

window.EMAILS = window.EMAILS || {};
window.EMAILS["winback-a/winback-a-19-e1-l3"] = Email_winback_a_19_e1_l3;
