/* Winback Path B — E1 | L2 (Lisa)
   Wireframe: wireframes/winback-b/winback-b-24-e1-l2.md
   Strategy: strategy-map.json → flows.winback-b.emails.e1-l2
   Generated: 2026-06-09
*/

const MW = 420;
const LOGO = "../assets/brightkidco-logo-v2.png";
const B = window.BRAND;
const F = window.FONT;

const Email_winback_b_24_e1_l2 = () => (
  <EmailShell preheader="New parent data on what happens when you add the sensory layer your BCBA built the foundation for." bg="#FFFFFF">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR — UTIL-06
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F6F2EA", padding: "6px 20px", textAlign: "center" }}>
      <span style={{ fontFamily: F.main, fontSize: 11, fontStyle: "italic", color: "#9AA8A7" }}>
        New parent data on what happens when you add the sensory layer your BCBA built the foundation for.
      </span>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — UTIL-08
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ fontFamily: F.main, fontSize: 14, color: "#8A9B9D", marginTop: 8 }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO — HERO-13 Scientific Hook
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 24px 32px", textAlign: "center" }}>
      <h1 style={{ fontFamily: F.main, fontSize: 26, fontWeight: 400, lineHeight: 1.4, color: "#1F2D2F", margin: 0, letterSpacing: 0 }}>
        The piece your therapy is missing
      </h1>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: DESDEEP-16 — PAPER TEXTURE
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 8, background: "#FAF9F7" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: HOOK — Real Symptom Recognition (Letter Section 1)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "36px 24px" }}>
      {/* L2 Marker Phrase — Fraunces italic */}
      <p style={{ fontFamily: F.display, fontSize: 18, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 20px" }}>
        "We've been doing scheduled sits for 2 years. He never goes on his own."
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
        I hear this from L2 parents almost every day. You've done the BCBA protocol, the OT sensory work, the social stories, the timer sits that became a battle, the sticker charts that lost meaning after week one. Maybe you even hired a private consultant.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        Prompt-dependency is not training. Your child learned to wait for the adult cue, not to feel the internal signal. And after all that time, all that investment, the frustration of being stuck is heavier than the hope of trying something new.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DASHED RULE — #9AA8A7 25%
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      <hr style={{ border: "none", borderTop: "1px dashed #9AA8A7", opacity: 0.25, margin: 0 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: VALIDATION — You Didn't Fail (Letter Section 2)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "36px 24px" }}>
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
        That heaviness isn't failure. It's the weight of solving the wrong problem.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        Every method you tried assumed your child CAN feel the 'I need to go' signal. BCBA protocols built compliance, the behavioral framework of sitting, waiting, and responding to a timer. OT addressed sensory sensitivities, the bathroom environment that dysregulates. Both are essential. Neither addresses the root cause.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DASHED RULE — #9AA8A7 25%
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      <hr style={{ border: "none", borderTop: "1px dashed #9AA8A7", opacity: 0.25, margin: 0 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: MECHANISM — Interoception Gap Deep (ED8)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "36px 24px" }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", color: "#9AA8A7", fontWeight: 400, marginBottom: 16 }}>
        THE INTEROCEPTION GAP
      </div>

      {/* Science Callout Box — Mint background */}
      <div style={{ background: "#DBFFCD", border: "1px solid #C8E8B8", borderRadius: 16, padding: 24, marginBottom: 24 }}>
        <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
          Here's what the research shows: autistic children process internal body signals differently. Interoception, the "eighth sensory system" as researcher Kelly Mahler calls it, is the sense that tells us when we're hungry, thirsty, or need the bathroom. For many autistic children, this signal is delayed or absent.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
          Nicholson et al. (2019) demonstrated that children with autism show significantly diminished body awareness, the brain doesn't register the bladder-fullness signal until it's too late. The message travels, but it arrives milliseconds after the event.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
          This isn't stubbornness. It's neurology.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
          Iqbal (2022) found that only 19% of autistic children could recognize when they were thirsty. If thirst doesn't register, how can we expect bladder fullness to?
        </p>
        {/* Citations */}
        <p style={{ fontFamily: F.main, fontSize: 12, color: "#9AA8A7", margin: "16px 0 0" }}>
          Nicholson et al. (2019) — Diminished body awareness in autism
        </p>
        <p style={{ fontFamily: F.main, fontSize: 12, color: "#9AA8A7", margin: "4px 0 0" }}>
          Iqbal (2022) — 19% thirst recognition in autistic children
        </p>
        <p style={{ fontFamily: F.main, fontSize: 12, color: "#9AA8A7", margin: "4px 0 0" }}>
          Kelly Mahler — Interoception research, "eighth sensory system"
        </p>
      </div>

      {/* Key reframe */}
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 24px" }}>
        This isn't stubbornness. It's neurology.
      </p>

      {/* 3-Layer BSL Visual Diagram */}
      <div style={{ marginBottom: 0 }}>
        {/* Layer 1: Signal Creation */}
        <div style={{ background: "#FBF7EB", borderRadius: "16px 16px 0 0", padding: "16px 20px", borderBottom: "1px solid #E8DCC8" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#5DD07A", flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#5DD07A", marginBottom: 2 }}>Layer 1</div>
              <div style={{ fontFamily: F.main, fontSize: 14, color: "#1F2D2F" }}>Signal Creation — gentle, sustained "uh-oh" sensation (30–60 seconds)</div>
            </div>
          </div>
        </div>
        {/* Layer 2: Smart Absorption */}
        <div style={{ background: "#E8DCC8", padding: "16px 20px", borderBottom: "1px solid #D4C8B4" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#5DD07A", flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#5DD07A", marginBottom: 2 }}>Layer 2</div>
              <div style={{ fontFamily: F.main, fontSize: 14, color: "#1F2D2F" }}>Smart Absorption — protects clothing without wicking the learning signal</div>
            </div>
          </div>
        </div>
        {/* Layer 3: Leak-Resistant */}
        <div style={{ background: "#DBFFCD", borderRadius: "0 0 16px 16px", padding: "16px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#5DD07A", flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#5DD07A", marginBottom: 2 }}>Layer 3</div>
              <div style={{ fontFamily: F.main, fontSize: 14, color: "#1F2D2F" }}>Leak-Resistant — outer barrier that preserves dignity</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       DASHED RULE — #9AA8A7 25%
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      <hr style={{ border: "none", borderTop: "1px dashed #9AA8A7", opacity: 0.25, margin: 0 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: BCBA/OT ACKNOWLEDGMENT
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "36px 24px" }}>
      {/* Callout Box — Sand bg, dashed border, Warm Sage left-border */}
      <div style={{ background: "#E8DCC8", border: "1px dashed #7B9E7B", borderLeft: "3px solid #7B9E7B", borderRadius: 16, padding: 24 }}>
        <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
          The Body-Signal Learning Layer doesn't replace your BCBA's work. It adds the component that was missing: sustained sensory feedback.
        </p>
        {/* Layer labels in Green */}
        <p style={{ fontFamily: F.main, fontSize: 14, lineHeight: 1.6, color: "#5DD07A", margin: "0 0 8px" }}>
          Layer 1: Creates a gentle, sustained "uh-oh" sensation (30–60 seconds) the slow-to-pick-up-signals brain can finally register.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 14, lineHeight: 1.6, color: "#5DD07A", margin: "0 0 8px" }}>
          Layer 2: Protects clothing without wicking away the learning signal the way pull-ups do.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 14, lineHeight: 1.6, color: "#5DD07A", margin: "0 0 16px" }}>
          Layer 3: Leak-resistant outer barrier that preserves dignity.
        </p>
        {/* Pull-up reframe */}
        <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          Pull-ups are designed to keep kids completely dry. For neurotypical kids who already feel the signal, that's helpful. For kids with body signal differences, it removes the one external feedback loop their brain can use.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       DASHED RULE — #9AA8A7 25%
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      <hr style={{ border: "none", borderTop: "1px dashed #9AA8A7", opacity: 0.25, margin: 0 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: TESTIMONIAL — Peer L2 Parent (SP-02)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "36px 24px" }}>
      {/* Pull Quote — Fraunces italic */}
      <p style={{ fontFamily: F.display, fontSize: 20, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 20px" }}>
        "He initiated. Once. After 4 years."
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
        An L2 parent shared that with me last month. Four years of scheduled sits, ABA protocols, sensory work, bribes, rewards, and social stories. Then, six weeks after adding the Body-Signal Learning Layer to their daily routine, without changing anything else, her son paused mid-play, looked down, and walked to the bathroom.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
        Not trained. Not consistent. But a pause. A moment where his brain finally caught the signal.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 20px" }}>
        That pause is what happens when the nervous system receives information it's been missing.
      </p>

      {/* Testimonial Card — Mint bg, B.teal left-border */}
      <div style={{ background: "#DBFFCD", borderLeft: "3px solid #2BAEB4", borderRadius: 16, padding: 20, position: "relative", overflow: "hidden" }}>
        {/* Semi-transparent quotation mark */}
        <div style={{ position: "absolute", top: 8, left: 16, fontFamily: F.display, fontSize: 48, color: "#5DD07A", opacity: 0.2, lineHeight: 1 }}>
          "
        </div>
        <p style={{ fontFamily: F.display, fontSize: 20, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: 0, paddingLeft: 24, position: "relative" }}>
          "He initiated. Once. After 4 years."
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       DASHED RULE — #9AA8A7 25%
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      <hr style={{ border: "none", borderTop: "1px dashed #9AA8A7", opacity: 0.25, margin: 0 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: REALISTIC TIMELINES
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "36px 24px" }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", color: "#9AA8A7", fontWeight: 400, marginBottom: 16 }}>
        WHAT TO EXPECT
      </div>
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
        Some kids show first signals in 4–8 weeks. Others need 12+. Some show a pause, a look, a single step toward the bathroom, and that's a win.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
        Progress isn't linear. Regression isn't starting over, it's part of wiring.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        The 60-day guarantee covers the full learning window. Not because we promise results, because we can't ask you to believe us. We can only ask you to try.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DASHED RULE — #9AA8A7 25%
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      <hr style={{ border: "none", borderTop: "1px dashed #9AA8A7", opacity: 0.25, margin: 0 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: OFFER — 3+3 Bundle
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "36px 24px" }}>
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
        Your BCBA built the behavioral foundation. This adds the sensory layer.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 20px" }}>
        The 3+3 Bundle gives you six pairs, enough for a rotation so you can start without disrupting your current routine. Add them alongside everything you're already doing.
      </p>

      {/* Pricing Card — Sand bg */}
      <div style={{ background: "#E8DCC8", borderRadius: 16, padding: 24 }}>
        <div style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, color: "#1F2D2F", marginBottom: 8 }}>
          3+3 Bundle, $79.99
        </div>
        <div style={{ fontFamily: F.main, fontSize: 14, color: "#4A6568", marginBottom: 12 }}>
          Free shipping · 60-Day Guarantee
        </div>
        <div style={{ fontFamily: F.main, fontSize: 13, fontStyle: "italic", color: "#9AA8A7" }}>
          That's $13.33 per pair with the bundle — less than half the single-pair price.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: PERMISSION — Not-to-Buy
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "36px 24px" }}>
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
        If today isn't the day, that's a real answer. The product will be here next month. So will I.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        I have two autistic sons. One trained at 6, the other at almost 8. I know what it's like to step back from trying, and I also know what it's like when the right piece finally clicks into place.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: CTA — Lowest Aggression (CTA-5)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px 36px", textAlign: "center" }}>
      <a href="#" style={{
        display: "inline-block",
        width: 280,
        maxWidth: "100%",
        padding: "14px 24px",
        background: "#2BAEB4",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: "1.0",
        textDecoration: "none",
        borderRadius: 8,
        height: 48,
        boxSizing: "border-box",
        textAlign: "center",
      }}>
        When you're ready to try
      </a>
      <div style={{ fontFamily: F.main, fontSize: 14, color: "#9AA8A7", marginTop: 12 }}>
        60-day guarantee stands.
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       2px RULE — #039902 at 30% opacity
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      <hr style={{ border: "none", borderTop: "2px solid rgba(3, 153, 2, 0.3)", margin: 0 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: LENA SIGN-OFF — Long Variant (Winback)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FAF9F7", padding: "40px 24px" }}>
      <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 8px" }}>
        With care,
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, color: "#1F2D2F", margin: "0 0 4px" }}>
        Lena ——
      </p>
      <p style={{ fontFamily: F.main, fontSize: 13, color: "#9AA8A7", margin: "0 0 24px" }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* Dashed divider */}
      <div style={{ borderTop: "1px dashed #9AA8A7", margin: "0 0 24px" }} />

      <p style={{ fontFamily: F.main, fontSize: 14, lineHeight: 1.6, color: "#4A4A4A", margin: 0 }}>
        P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment. <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>link</a>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       1px RULE — #E0E0E0 at 50%
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      <hr style={{ border: "none", borderTop: "1px solid rgba(224, 224, 224, 0.5)", margin: 0 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: FOOTER — UTIL-04
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "20px 24px 30px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 11, lineHeight: 1.6, color: "#9AA8A7", margin: "0 0 4px" }}>
        BrightKidCo
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, lineHeight: 1.6, color: "#9AA8A7", margin: "0 0 4px" }}>
        Austin, TX 78701
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, lineHeight: 1.6, color: "#9AA8A7", margin: "0 0 4px" }}>
        No longer want these emails? <a href="#" style={{ color: "#9AA8A7", textDecoration: "underline" }}>Unsubscribe</a> or <a href="#" style={{ color: "#9AA8A7", textDecoration: "underline" }}>Manage Preferences</a>.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, lineHeight: 1.6, color: "#9AA8A7", margin: 0 }}>
        Questions? Reply to this email, Lena reads every response.
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_winback_b_24_e1_l2 });
