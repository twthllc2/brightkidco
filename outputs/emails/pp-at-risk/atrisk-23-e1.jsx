/* PP-At-Risk — E1 | Cross-Level
   Wireframe: wireframes/pp-at-risk/atrisk-23-e1.md
   Strategy: strategy-map.json → pp-at-risk.e1
   Generated: 2026-06-09
*/

// ══════════════════════════════════════════════════════
// SECTION 1: EMAIL SHELL + PREHEADER
// ══════════════════════════════════════════════════════
// Text-only personal letter. No header, no hero, no band.
// The absence of visual clutter IS the design.

const Email_Email_atrisk_23_e1 = () => (
  <EmailShell
    preheader="No pressure. Just wanted to see how things are going with the underwear."
    bg="#FAF9F7"
  >

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HOOK — centered greeting (the hook IS the headline)
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "40px 40px 0", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 1.6,
        color: "#3A3A3A",
        margin: 0,
      }}>
        Haven't heard from you in a bit. So I thought I'd check in, how's it going?
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: VALIDATION — centered paragraph
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "32px 40px 0", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 1.6,
        color: "#3A3A3A",
        margin: 0,
      }}>
        If the underwear is sitting in a drawer, that's okay. Some kids need a break. Some moms need a break. That's real. I took breaks too. My older son was 8 before we figured this out, and there were months when the underwear just sat there.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: MECHANISM — centered paragraphs with SPARK stat + dad quote
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "32px 40px 0", textAlign: "center" }}>
      {/* Paragraph 1: body-signal learning + SPARK stat */}
      <p style={{
        fontFamily: F.main,
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 1.6,
        color: "#3A3A3A",
        margin: "0 0 24px",
      }}>
        Body-signal learning doesn't work on a timeline. Some kids process interoception at a different pace, and that pace isn't a reflection of you or your child.{" "}
        <em>49% of autistic 4-5 year olds aren't trained.</em>{" "}
        You're not behind. You're not doing it wrong. The nervous system takes the time it takes.
      </p>

      {/* Paragraph 2: when the underwear goes back on */}
      <p style={{
        fontFamily: F.main,
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 1.6,
        color: "#3A3A3A",
        margin: "0 0 24px",
      }}>
        When the underwear goes back on, whether that's tomorrow, next week, or next month, the body-signal learning starts wherever your child is. Not on a Pre-K deadline. Not on anyone else's timeline.
      </p>

      {/* Paragraph 3: dad quote (italic, 15px) */}
      <p style={{
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 1.6,
        color: "#3A3A3A",
        fontStyle: "italic",
        margin: 0,
      }}>
        One dad told me: "We put them in a drawer for three weeks. When we pulled them out, something had shifted. He didn't say anything. But he paused before he peed. That pause was new."
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: CTA — text link, centered, no button
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "32px 40px 0", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 1.6,
        color: "#3A3A3A",
        margin: "0 0 16px",
      }}>
        If you want to tell me what's happening, whether things are going well, whether you hit a wall, whether you just needed a breather,{" "}
        <a href="mailto:support@brightkidco.com" style={{ color: "#7A9A7A", textDecoration: "none" }}>
          reply to this email
        </a>
        . I read every response.
      </p>
      <p style={{
        fontFamily: F.main,
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 1.6,
        color: "#7A9A7A",
        margin: 0,
      }}>
        No judgment. Just curious.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: LENA SIGN-OFF
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "32px 40px 0" }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 1.4,
        color: "#3A3A3A",
        margin: "0 0 4px",
      }}>
        Talk soon,
      </p>
      <p style={{
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 1.4,
        color: "#3A3A3A",
        margin: "0 0 4px",
      }}>
        Lena ——
      </p>
      <p style={{
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 1.4,
        color: "#3A3A3A",
        margin: "0 0 24px",
      }}>
        Customer Support · Mom of two autistic sons
      </p>
      <p style={{
        fontFamily: F.main,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.4,
        color: "#8A8A8A",
        fontStyle: "italic",
        margin: 0,
      }}>
        P.S. When you're ready to try again, the science will be here. 60 days, your judgment. No rush.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: FOOTER DIVIDER — the ONLY decorative element
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "32px 40px 0" }}>
      <div style={{ borderTop: "1px solid #D4C9B8" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: FOOTER — legal + unsubscribe
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "24px 40px 40px", textAlign: "center" }}>
      <p style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: 11,
        fontWeight: 400,
        lineHeight: 1.3,
        color: "#8A8A8A",
        margin: 0,
      }}>
        You're receiving this email because you purchased from BrightKidCo and agreed to receive post-purchase support from Lena. If you'd prefer not to hear from us,{" "}
        <a href="#" style={{ color: "#8A8A8A", textDecoration: "underline" }}>unsubscribe here</a>
        . BrightKidCo, 1234 Parent Lane, Austin, TX 78701, United States.
      </p>
    </div>

  </EmailShell>
);

// Register on window for rendering
Object.assign(window, { Email_Email_atrisk_23_e1 });
