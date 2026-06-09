/* PP-At-Risk — E3 | Cross-Level
   Wireframe: wireframes/pp-at-risk/atrisk-23-e3.md
   Strategy: strategy-map.json → flows.pp-at-risk.emails.e3
   Generated: 2026-06-09
*/

const Email_pp_at_risk_23_e3 = () => (
  <EmailShell preheader="One small thing. Three days. No pressure." bg="#FFF9F5">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — BKC Logo centered
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFF9F5", padding: "20px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ marginTop: 14, borderBottom: "1px solid #E8E0D8" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — Custom Illustration "Soft Reset Still Life"
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F5EFEA" }}>
      <div style={{ position: "relative" }}>
        <ImgFrame
          height={320}
          radius={0}
          label="SOFT RESET STILL LIFE"
          sublabel="Small wooden child's chair with underwear draped over backrest, warm afternoon light, potted succulent. Flat vector, warm beige #F5EFEA background, 600×320px"
          aspect="600/320"
        />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HEADLINE — "One last thing before I go quiet"
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFF9F5", padding: "32px 30px 8px", textAlign: "center" }}>
      <h1 style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 24, fontWeight: 700, lineHeight: 1.3,
        color: "#3D2C2E", margin: 0, letterSpacing: -0.3,
      }}>
        One last thing before I go quiet
      </h1>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: BODY — HOOK
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFF9F5", padding: "16px 30px 24px" }}>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 18, lineHeight: 1.6, color: "#3D2C2E",
        margin: "0 0 16px", textAlign: "center",
        maxWidth: 520, marginLeft: "auto", marginRight: "auto",
      }}>
        Hey, It's been a little quiet. Noticed you haven't opened our last couple of emails, and that's totally okay. Maybe the underwear is sitting in a drawer. Maybe you tried it for a few days and didn't see what you were hoping for. Maybe life got busy and this fell off the priority list. Whatever the reason, there's no judgment here.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: VALIDATION — Rose border callout
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFF9F5", padding: "8px 30px 24px" }}>
      <div style={{
        borderLeft: "3px solid #D4A89B",
        padding: "20px 22px",
      }}>
        <p style={{
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontSize: 18, lineHeight: 1.6, color: "#3D2C2E",
          margin: "0 0 14px",
        }}>
          I hear from parents every week who say the same thing: 'I wanted it to work right away. When it didn't, I put it aside.' That's not failure. That's being human. You've been at this for a while, you've earned the right to take a step back. Some kids need a slower ramp. Some need longer wear times before the body starts registering the signal. And some need a reset, a few days off, then a fresh start.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: MECHANISM — "One thing worth trying" callout
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F5EFEA", padding: "32px 30px" }}>
      {/* Compass/Reset Icon */}
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <svg width="32" height="32" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="14" stroke="#D4A89B" strokeWidth="2" fill="none" />
          <path d="M16 6 L16 10 M16 22 L16 26 M6 16 L10 16 M22 16 L26 16" stroke="#D4A89B" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 12 L16 16" stroke="#D4A89B" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 16 L14 20" stroke="#D4A89B" strokeWidth="2" strokeLinecap="round" />
          <polygon points="10,10 13,13 11,14" fill="#D4A89B" />
        </svg>
      </div>

      <h2 style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 20, fontWeight: 700, lineHeight: 1.4,
        color: "#3D2C2E", margin: "0 0 16px", textAlign: "center",
      }}>
        One thing worth trying
      </h2>

      {/* Callout box */}
      <div style={{
        border: "2px solid #D4A89B",
        borderRadius: 8,
        padding: 20,
        background: "#FAF5F0",
      }}>
        <p style={{
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontSize: 18, lineHeight: 1.6, color: "#3D2C2E",
          margin: "0 0 14px",
        }}>
          Here's one thing worth trying this week, just one: Put the underwear on for 3 consecutive hours, three days in a row. That's it. No timer sits. No pressure to use the potty. Just wear.
        </p>
        <p style={{
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontSize: 18, lineHeight: 1.6, color: "#3D2C2E",
          margin: "0 0 14px",
        }}>
          Why 3 hours? Research on interoception suggests the body needs sustained exposure to the signal before the brain starts to register it. The Body-Signal Learning Layer creates that 30-60 second 'uh-oh' sensation after every event, but it takes repetition over hours, not minutes, for a nervous system that picks up signals slowly to begin picking it up.
        </p>
        <p style={{
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontSize: 18, lineHeight: 1.6, color: "#3D2C2E",
          margin: 0,
        }}>
          I've seen this small change shift things for parents who thought nothing would.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: CTA — Rose button + secondary text link
       ══════════════════════════════════════════════════════ */}
    {/* The door doesn't lock. Come back anytime. */}
    <div style={{ background: "#FFF9F5", padding: "32px 30px", textAlign: "center" }}>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 18, lineHeight: 1.6, color: "#3D2C2E",
        margin: "0 0 20px",
      }}>
        Try it for the next three days. See if anything shifts. If it doesn't, that's okay too. This email is the last one I'll send at this frequency. If you ever want to try again, the door is open. The 60-day guarantee doesn't expire, whenever you decide to give it a real try, it starts from that day. No pressure. Just one small thing to try. Your judgment.
      </p>
      <a href="#" style={{
        display: "inline-block",
        padding: "14px 32px",
        background: "#D4A89B",
        color: "#FFFFFF",
        fontSize: 16, fontWeight: 700,
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        textDecoration: "none",
        borderRadius: 25,
        letterSpacing: 0.5,
      }}>
        Try it for 3 days, no pressure
      </a>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 14, lineHeight: 1.4, color: "#8C7A6B",
        margin: "16px 0 0",
      }}>
        Or just tuck this away for later. No rush.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: SIGN-OFF — Lena + P.S.
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFF9F5", padding: "16px 30px 32px" }}>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 16, lineHeight: 1.6, color: "#3D2C2E",
        margin: "0 0 16px",
      }}>
        With care,<br />
        Lena ——<br />
        Customer Support · Mom of two autistic sons
      </p>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 15, fontStyle: "italic", lineHeight: 1.5, color: "#5A4A4B",
        margin: 0,
      }}>
        P.S. My older son was 8 before his body started connecting the dots. If this week doesn't change anything, that's not a closed door. Some nervous systems just need more time. When you're ready, we're here. <a href="#" style={{ color: "#5A4A4B", textDecoration: "underline" }}>60 days, your judgment.</a>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#EDE6DF", padding: "16px 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 11, lineHeight: 1.4, color: "#8C7A6B",
        margin: "0 0 8px",
      }}>
        BrightKidCo · Built for the brain that learns differently.
      </p>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 11, lineHeight: 1.4, color: "#8C7A6B",
        margin: "0 0 8px",
      }}>
        You're receiving this because you purchased from BrightKidCo and opted into email updates.
      </p>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 11, lineHeight: 1.4, color: "#8C7A6B",
        margin: 0,
      }}>
        <a href="#" style={{ color: "#8C7A6B", textDecoration: "underline" }}>Unsubscribe</a>
        {" · "}
        <a href="#" style={{ color: "#8C7A6B", textDecoration: "underline" }}>Manage Preferences</a>
      </p>
    </div>

  </EmailShell>
);

// Register on window for rendering
Object.assign(window, { Email_pp_at_risk_23_e3 });
