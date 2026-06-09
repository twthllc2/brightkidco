/* PP Level Detection E1 (Flow 14) — Cross-Level (pp-leveldetect-01-e1)
   Wireframe: wireframes/pp-level-detection/pp-leveldetect-01-e1.md
   Copy: copy/pp-level-detection/pp-leveldetect-01-e1.md
   Strategy: strategy-map.json → pp-level-detection.emails.e1
   Generated: 2026-06-09
*/

const Email_pp_level_detection_01_e1 = () => (
  <EmailShell preheader="One tap. Help us send you the right content." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo
       ══════════════════════════════════════════════════════ */}
    <Header bg="#FFFFFF" />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-5 Mirror Moment
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "34px 22px 0" }}>

      {/* Quick question badge */}
      <div style={{ textAlign: "center", marginBottom: 14 }}>
        <span style={{
          display: "inline-block",
          background: "#EAF6F2",
          padding: "4px 12px",
          borderRadius: 999,
          fontSize: 10.5, fontWeight: 700,
          letterSpacing: 2, textTransform: "uppercase",
          color: "#2BAEB4",
          fontFamily: "'Questrial', 'Helvetica Neue', Arial, sans-serif",
        }}>
          Quick question
        </span>
      </div>

      {/* Hero image with ink border frame */}
      <div style={{
        borderRadius: 16, overflow: "hidden",
        border: "2px solid #1F2D2F",
        boxShadow: "3px 3px 0 #1F2D2F",
        marginBottom: 24,
      }}>
        <ImgFrame height={220} label="LIFESTYLE SHOT" sublabel="Toddler on potty, warm natural light" radius={0} />
      </div>

      {/* Headline — gradient text on "your child" */}
      <h1 style={{
        fontFamily: "'Fraunces', Georgia, serif",
        fontSize: 34, fontWeight: 700, lineHeight: 1.1,
        letterSpacing: -0.5, color: "#1F2D2F",
        margin: "0 0 12px", textAlign: "center",
      }}>
        Which one sounds like{" "}
        <span style={{
          background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          your child
        </span>?
      </h1>

      {/* Subtext */}
      <p style={{
        fontFamily: "'Questrial', 'Helvetica Neue', Arial, sans-serif",
        fontSize: 16, fontWeight: 400, lineHeight: 1.5,
        color: "#4A6568", margin: "0 0 8px", textAlign: "center",
      }}>
        Two weeks in. Help us send you the right content.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: LEVEL DETECTION — FLOW-12 Four Clickable Buttons
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "20px 22px" }}>

      {/* ── Card 1: Verbal & Aware (L1 — green #5DD07A) ── */}
      <a href="#" style={{ textDecoration: "none", display: "block", marginBottom: 12 }}>
        <div style={{
          background: "#FFFFFF", borderRadius: 16,
          border: "2px solid #1F2D2F",
          boxShadow: "3px 3px 0 #1F2D2F",
          padding: "20px 22px",
          display: "flex", alignItems: "center", gap: 16,
        }}>
          {/* Color circle with emoji */}
          <div style={{
            width: 48, height: 48, flexShrink: 0,
            borderRadius: "50%",
            background: "#5DD07A",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22,
          }}>
            💬
          </div>
          <div>
            <div style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 17, fontWeight: 700, lineHeight: 1.2,
              color: "#1F2D2F", marginBottom: 4,
            }}>
              Verbal & aware
            </div>
            <div style={{
              fontFamily: "'Questrial', 'Helvetica Neue', Arial, sans-serif",
              fontSize: 13, fontWeight: 400, lineHeight: 1.4,
              color: "#4A6568",
            }}>
              Can tell you when they need to go, but signals arrive late
            </div>
          </div>
        </div>
      </a>

      {/* ── Card 2: Sometimes Aware (L2 — teal #2BAEB4) ── */}
      <a href="#" style={{ textDecoration: "none", display: "block", marginBottom: 12 }}>
        <div style={{
          background: "#FFFFFF", borderRadius: 16,
          border: "2px solid #1F2D2F",
          boxShadow: "3px 3px 0 #1F2D2F",
          padding: "20px 22px",
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <div style={{
            width: 48, height: 48, flexShrink: 0,
            borderRadius: "50%",
            background: "#2BAEB4",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22,
          }}>
            🤔
          </div>
          <div>
            <div style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 17, fontWeight: 700, lineHeight: 1.2,
              color: "#1F2D2F", marginBottom: 4,
            }}>
              Sometimes aware
            </div>
            <div style={{
              fontFamily: "'Questrial', 'Helvetica Neue', Arial, sans-serif",
              fontSize: 13, fontWeight: 400, lineHeight: 1.4,
              color: "#4A6568",
            }}>
              Inconsistent signals, mixed communication, pauses sometimes
            </div>
          </div>
        </div>
      </a>

      {/* ── Card 3: Rarely Aware (L3 — pink #FFB5A0) ── */}
      <a href="#" style={{ textDecoration: "none", display: "block", marginBottom: 12 }}>
        <div style={{
          background: "#FFFFFF", borderRadius: 16,
          border: "2px solid #1F2D2F",
          boxShadow: "3px 3px 0 #1F2D2F",
          padding: "20px 22px",
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <div style={{
            width: 48, height: 48, flexShrink: 0,
            borderRadius: "50%",
            background: "#FFB5A0",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22,
          }}>
            🫧
          </div>
          <div>
            <div style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 17, fontWeight: 700, lineHeight: 1.2,
              color: "#1F2D2F", marginBottom: 4,
            }}>
              Rarely aware
            </div>
            <div style={{
              fontFamily: "'Questrial', 'Helvetica Neue', Arial, sans-serif",
              fontSize: 13, fontWeight: 400, lineHeight: 1.4,
              color: "#4A6568",
            }}>
              Doesn't react to wet, no signal, needs full-body sensation
            </div>
          </div>
        </div>
      </a>

      {/* ── Card 4: Not Sure Yet (GF — yellow #FFD866, dashed variant) ── */}
      <a href="#" style={{ textDecoration: "none", display: "block", marginBottom: 18 }}>
        <div style={{
          background: "#EAF6F2", borderRadius: 16,
          border: "2px dashed #2BAEB4",
          padding: "20px 22px",
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <div style={{
            width: 48, height: 48, flexShrink: 0,
            borderRadius: "50%",
            background: "#FFD866",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22,
          }}>
            ❓
          </div>
          <div>
            <div style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 17, fontWeight: 700, lineHeight: 1.2,
              color: "#1F2D2F", marginBottom: 4,
            }}>
              Not sure yet
            </div>
            <div style={{
              fontFamily: "'Questrial', 'Helvetica Neue', Arial, sans-serif",
              fontSize: 13, fontWeight: 400, lineHeight: 1.4,
              color: "#4A6568",
            }}>
              Still figuring it out, and that's completely fine
            </div>
          </div>
        </div>
      </a>

      {/* Helper text */}
      <p style={{
        fontFamily: "'Questrial', 'Helvetica Neue', Arial, sans-serif",
        fontSize: 14, fontWeight: 400, lineHeight: 1.5,
        color: "#8A9B9D", margin: 0, textAlign: "center",
      }}>
        Pick the one that sounds most like your child. We'll tailor what you see next.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: GUARANTEE — TRUST-1 60-Day (text)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "20px 20px 24px" }}>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 15, fontWeight: 400, lineHeight: 1.6,
        color: "#4A6568", margin: 0, textAlign: "center",
      }}>
        Whatever you tell us, the <strong style={{ color: "#2BAEB4" }}>60-day guarantee</strong> still stands. You decide if this approach is working for your family.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: TRUST BADGES — TRUST-5 Promise Badges Strip
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "16px 24px", textAlign: "center" }}>
      {/* Icons row */}
      <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 8 }}>
        {/* Shield */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A9B9D" strokeWidth="1.8">
          <path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z" strokeLinejoin="round" />
        </svg>
        {/* Star */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A9B9D" strokeWidth="1.8">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
        </svg>
        {/* Heart */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A9B9D" strokeWidth="1.8">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinejoin="round" />
        </svg>
      </div>
      <p style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 13, fontWeight: 400, lineHeight: 1.5,
        color: "#8A9B9D", margin: 0,
      }}>
        16,511 reviews · 4.9 ★ — 100,000+ parents trust BrightKidCo
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: LENA SIGN-OFF — UTIL-05 (SHORT, no P.S.)
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
        {/* Top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg, #FFD866, #2BAEB4)",
          opacity: 0.9,
        }} />

        {/* Body text */}
        <p style={{
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontSize: 13, fontWeight: 400, lineHeight: 1.65,
          color: "#B8CACD", fontStyle: "italic",
          margin: "0 0 14px",
        }}>
          Thanks for being here. If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything.
        </p>

        {/* Lena handwritten signature */}
        <div style={{ marginBottom: 14 }}>
          <div style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 42, lineHeight: 0.95, fontWeight: 500,
            color: "#D8F57C", letterSpacing: -0.5,
            borderBottom: "1px solid #5DD07A",
            display: "inline-block", paddingBottom: 2,
          }}>
            Lena
          </div>
          <div style={{ marginTop: 4, display: "flex", gap: 2 }}>
            <span style={{ color: "#D8F57C", fontSize: 14 }}>—,</span>
          </div>
        </div>

        {/* Role */}
        <p style={{
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontSize: 12, fontWeight: 400, lineHeight: 1.5,
          color: "#8A9B9D", margin: 0,
        }}>
          Customer Support · Mom of two autistic sons
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: FOOTER
       ══════════════════════════════════════════════════════ */}
    <Footer />

  </EmailShell>
);

Object.assign(window, { Email_pp_level_detection_01_e1 });
window.EMAILS = window.EMAILS || {};
window.EMAILS["pp-level-detection/pp-leveldetect-01-e1"] = Email_pp_level_detection_01_e1;
