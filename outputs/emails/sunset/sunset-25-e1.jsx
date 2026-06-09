/* Sunset — E1 | Cross-Level
   Wireframe: wireframes/sunset/sunset-25-e1.md
   Strategy: strategy-map.json → flows.sunset.emails.e1
   Generated: 2026-06-09
*/

const Email_sunset_25_e1 = () => (
  <EmailShell preheader="Checking in, no pressure, just making sure you still want to hear from us." bg="#FFFFFF">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo, centered, white bg
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — Farewell-first Open Door Illustration
       600×300px canvas, line-art, B.muted stroke, radial warm light
       No lock, no handle, no latch (Easter egg)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "34px 22px 28px", textAlign: "center" }}>
      <div style={{ position: "relative", width: "100%", maxWidth: 420, margin: "0 auto" }}>
        <svg
          viewBox="0 0 600 300"
          width="100%"
          height="auto"
          style={{ display: "block" }}
          role="img"
          aria-label="An open door with warm light spilling through, the choice is yours"
        >
          <defs>
            <radialGradient id="warmLight" cx="60%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#FBF7F1" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          {/* Warm light gradient background */}
          <rect width="600" height="300" fill="url(#warmLight)" />
          {/* Floor line */}
          <line x1="100" y1="250" x2="500" y2="250" stroke="#8A9B9D" strokeWidth="2" />
          {/* Door frame — left jamb */}
          <line x1="250" y1="80" x2="250" y2="250" stroke="#8A9B9D" strokeWidth="2" />
          {/* Door frame — top */}
          <line x1="250" y1="80" x2="400" y2="80" stroke="#8A9B9D" strokeWidth="2" />
          {/* Door frame — right jamb */}
          <line x1="400" y1="80" x2="400" y2="250" stroke="#8A9B9D" strokeWidth="2" />
          {/* Door — open at 45° from inside looking out */}
          <line x1="250" y1="80" x2="355" y2="175" stroke="#8A9B9D" strokeWidth="2" />
          <line x1="250" y1="250" x2="355" y2="175" stroke="#8A9B9D" strokeWidth="2" />
          {/* Warm light spilling through */}
          <polygon points="250,80 400,80 355,175 250,250" fill="#FBF7F1" opacity="0.6" />
          {/* No lock, no handle, no latch — Easter egg mirrors "Our doors don't lock" */}
        </svg>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SPACER 24px
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 24 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 3: LETTER-01 — Hook + Body
       Georgia serif, B.soft body text, verbatim copy
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px", maxWidth: 520, margin: "0 auto" }}>
      {/* Hook Headline */}
      <h1 style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 22, fontWeight: 700, lineHeight: 1.3,
        color: "#1F2D2F", margin: "0 0 14px",
      }}>
        We haven't heard from you in a while.
      </h1>

      {/* Warm Linen Divider */}
      <div style={{ width: 120, height: 1, background: "#E8E2DA", margin: "14px auto" }} />

      {/* Body Paragraph 1 — Validation, Observation */}
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 16, fontWeight: 400, lineHeight: 1.6,
        color: "#4A6568", margin: "0 0 16px",
      }}>
        I get it. This stuff is hard. Sometimes the information comes at the wrong time. Sometimes you need a break. Sometimes the timing just isn't right, and that's okay.
      </p>

      {/* Body Paragraph 2 — Permission, Clear Choice Part 1 */}
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 16, fontWeight: 400, lineHeight: 1.6,
        color: "#4A6568", margin: "0 0 16px",
      }}>
        If you signed up hoping for answers and they didn't come fast enough, that's on us, not on you. If you put body-signal learning on the shelf because you had other things to fight for, that's real, and normal, and I've been there.
      </p>

      {/* Body Paragraph 3 — Personal Story */}
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 16, fontWeight: 400, lineHeight: 1.6,
        color: "#4A6568", margin: "0 0 16px",
      }}>
        My older son was eight before he finally trained. We took breaks. We stopped trying. We started again. That's not failure. That's how this works for a lot of families.
      </p>

      {/* Body Paragraph 4 — Permission, Clear Choice Part 2 */}
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 16, fontWeight: 400, lineHeight: 1.6,
        color: "#4A6568", margin: "0 0 16px",
      }}>
        I want to be direct with you: if you're still interested in body-signal learning for your child, click below and we'll keep sending you updates, science, and parent stories. We'd love to have you.
      </p>

      {/* Permission paragraph — italic */}
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 14, fontWeight: 400, fontStyle: "italic",
        lineHeight: 1.5, color: "#8A9B9D", margin: 0,
      }}>
        If not? No hard feelings at all. We'll stop emailing you after this one.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SPACER 32px
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 32 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: CTA-4 — Gentle Invite
       Teal pill button, "Yes, keep me updated"
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px", textAlign: "center" }}>
      <a href="#" style={{
        display: "inline-block",
        padding: "14px 32px",
        background: "#2BAEB4",
        color: "#FFFFFF",
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 15, fontWeight: 700,
        textDecoration: "none",
        borderRadius: 999,
        width: 240,
        textAlign: "center",
      }}>
        Yes, keep me updated
      </a>
    </div>

    {/* ══════════════════════════════════════════════════════
       SPACER 32px
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 32 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: PERMISSION CLOSE
       "Our doors don't lock" + "Whatever you choose"
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 14, fontWeight: 400, fontStyle: "italic",
        lineHeight: 1.5, color: "#8A9B9D",
        margin: "0 0 12px",
      }}>
        If your situation changes down the road, if a new challenge comes up, if you hear something from a therapist that makes you curious, if you just want to revisit the research, you can always come back. Our doors don't lock.
      </p>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 14, fontWeight: 400,
        lineHeight: 1.5, color: "#4A6568",
        margin: 0,
      }}>
        Whatever you choose, I'm glad you gave us a shot.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       WARM LINEN DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "24px 0", textAlign: "center" }}>
      <div style={{ display: "inline-block", width: 120, height: 1, background: "#E8E2DA" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: SIGNOFF — MEDIUM Variant
       "With understanding, Lena —— Customer Support"
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px", maxWidth: 520, margin: "0 auto" }}>
      {/* Closing */}
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 15, fontWeight: 400,
        color: "#4A6568", lineHeight: 1.4,
        margin: "0 0 4px",
      }}>
        With understanding,
      </p>

      {/* Name */}
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 15, fontWeight: 700,
        color: "#1F2D2F", lineHeight: 1.4,
        margin: "0 0 4px",
      }}>
        Lena ——
      </p>

      {/* Role */}
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 13, fontWeight: 400,
        color: "#4A6568", lineHeight: 1.4,
        margin: "0 0 20px",
      }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* P.S. Block */}
      <div style={{ borderTop: "1px solid #E8E2DA", paddingTop: 16 }}>
        <p style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 13, fontWeight: 400, fontStyle: "italic",
          lineHeight: 1.5, color: "#4A6568",
          margin: 0,
        }}>
          P.S. Both my sons went through this. I know what it feels like to try everything. If you're not sure yet, you can reply to this email and I'll answer honestly, no pitch, no pressure. You'll get me, not a template.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SPACER 24px
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 24 }} />

    {/* ══════════════════════════════════════════════════════
       WARM LINEN DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 0", textAlign: "center" }}>
      <div style={{ display: "inline-block", width: 120, height: 1, background: "#E8E2DA" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: FOOTER
       Unsubscribe, address, legal
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: "Arial, sans-serif",
        fontSize: 11, fontWeight: 400,
        color: "#8A9B9D", lineHeight: 1.6,
        margin: "0 0 12px",
      }}>
        You're receiving this because you subscribed to BrightKidCo updates. If you'd like to stay, click "Yes, keep me updated" above. If not, you can unsubscribe below.
      </p>
      <p style={{
        fontFamily: "Arial, sans-serif",
        fontSize: 11, fontWeight: 400,
        color: "#8A9B9D", lineHeight: 1.6,
        margin: 0,
      }}>
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a> | BrightKidCo · 123 Main Street, Suite 200, San Francisco, CA 94102
      </p>
    </div>

  </EmailShell>
);

// Register on window for rendering
Object.assign(window, { Email_sunset_25_e1 });
