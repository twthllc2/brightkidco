/* PP-Extended Education — E4 (Day 43) | Level 3 (Maria)
   Wireframe: wireframes/pp-extended-ed/pped-22-e4-l3.md
   Strategy: strategy-map.json → pp-extended-ed.e4-l3
   Generated: 2026-06-09
*/

const Email_Email_pped_22_e4_l3 = () => (
  <EmailShell
    preheader="Your child is growing. That's not a crisis. Here's a gentle way to think about what's ahead."
    bg="#FCFAF5"
  >
    {/* ── Section 1: Header ── */}
    <div style={{
      background: "#FCFAF5",
      padding: "20px 30px",
      textAlign: "center",
      borderBottom: "none",
    }}>
      <img
        src="../assets/brightkidco-logo-v2.png"
        alt="BrightKidCo"
        style={{ height: 34 }}
      />
      <div style={{
        fontFamily: F.main,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.2,
        letterSpacing: 1,
        color: "#888888",
        textAlign: "center",
        textTransform: "uppercase",
        marginTop: 6,
      }}>
        BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO-9 — Whisper Tone
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#F9F5EE",
      padding: "60px 30px 40px",
      textAlign: "center",
      position: "relative",
      minHeight: 360,
    }}>
      {/* Growing Rings Illustration */}
      <div style={{
        width: 360,
        height: 200,
        margin: "0 auto 24px",
        position: "relative",
        overflow: "hidden",
      }}>
        <svg width="360" height="200" viewBox="0 0 360 200" style={{ display: "block" }}>
          <defs>
            <radialGradient id="ringGrad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FBF7EB" />
              <stop offset="50%" stopColor="#DBFFCD" />
              <stop offset="100%" stopColor="#039902" stopOpacity="0.15" />
            </radialGradient>
            <radialGradient id="ringGrad2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#DBFFCD" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#039902" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient id="ringGrad3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FBF7EB" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#DBFFCD" stopOpacity="0.2" />
            </radialGradient>
            <filter id="softBlur">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>
          {/* Outer ring */}
          <ellipse cx="180" cy="100" rx="160" ry="80" fill="url(#ringGrad1)" opacity="0.35" filter="url(#softBlur)" />
          {/* Middle ring */}
          <ellipse cx="180" cy="100" rx="120" ry="60" fill="url(#ringGrad2)" opacity="0.45" filter="url(#softBlur)" />
          {/* Inner ring */}
          <ellipse cx="180" cy="100" rx="80" ry="40" fill="url(#ringGrad3)" opacity="0.55" filter="url(#softBlur)" />
          {/* Organic dots */}
          <circle cx="100" cy="80" r="4" fill="#039902" opacity="0.3" style={{ filter: "blur(2px)" }} />
          <circle cx="260" cy="70" r="3" fill="#039902" opacity="0.25" style={{ filter: "blur(2px)" }} />
          <circle cx="150" cy="130" r="3.5" fill="#039902" opacity="0.28" style={{ filter: "blur(2px)" }} />
          <circle cx="220" cy="120" r="2.5" fill="#039902" opacity="0.2" style={{ filter: "blur(2px)" }} />
          <circle cx="180" cy="60" r="2" fill="#039902" opacity="0.18" style={{ filter: "blur(2px)" }} />
        </svg>
      </div>

      {/* H1 */}
      <h1 style={{
        fontFamily: F.main,
        fontSize: 24,
        lineHeight: 1.3,
        fontWeight: 700,
        letterSpacing: 0.5,
        color: "#2D2D2D",
        textAlign: "center",
        margin: "0 0 16px",
      }}>
        The size on the box<br />
        doesn't define what's possible
      </h1>

      {/* Sub */}
      <p style={{
        fontFamily: F.display,
        fontStyle: "italic",
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.4,
        color: "#666666",
        textAlign: "center",
        margin: 0,
      }}>
        Your child is growing.<br />
        That's not a crisis.
      </p>

      {/* Hidden Detail: Floating Feather */}
      <div style={{
        position: "absolute",
        bottom: 30,
        right: 40,
        width: 60,
        height: "auto",
        transform: "rotate(-30deg)",
        opacity: 0.08,
      }}>
        <svg width="60" height="100" viewBox="0 0 60 100">
          {/* Central quill */}
          <line x1="30" y1="95" x2="30" y2="5" stroke="#039902" strokeWidth="1" opacity="0.2" />
          {/* Barbs - right side */}
          {[10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 86, 90].map((y, i) => (
            <line key={`r${i}`} x1="30" y1={y} x2={30 + 14 - i * 0.8} y2={y - 3}
              stroke="#DBFFCD" strokeWidth="0.8" opacity={0.6 - i * 0.04} />
          ))}
          {/* Barbs - left side */}
          {[10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 86, 90].map((y, i) => (
            <line key={`l${i}`} x1="30" y1={y} x2={30 - 14 + i * 0.8} y2={y - 3}
              stroke="#DBFFCD" strokeWidth="0.8" opacity={0.6 - i * 0.04} />
          ))}
          {/* Bottom barbs dissolve into dots */}
          <circle cx="24" cy="92" r="1" fill="#DBFFCD" opacity="0.1" />
          <circle cx="27" cy="94" r="1" fill="#DBFFCD" opacity="0.08" />
          <circle cx="33" cy="93" r="1" fill="#DBFFCD" opacity="0.09" />
          <circle cx="36" cy="91" r="1" fill="#DBFFCD" opacity="0.07" />
        </svg>
      </div>
    </div>

    {/* 36px gap (generous spacing) */}
    <div style={{ height: 36, background: "#FCFAF5" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 3: LETTER-02 — Handwritten Opener
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 30px", background: "#FCFAF5" }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.7,
        color: "#444444",
        margin: "0 0 24px",
      }}>
        His body is growing the way it should.
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.7,
        color: "#444444",
        margin: "0 0 24px",
      }}>
        The pull-ups are tighter. The diaper size went up again. Maybe you've started thinking about what comes next — the specialty sizes, what happens when he's too big to lift, what happens when he's taller than you at the changing table.
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.7,
        color: "#444444",
        margin: "0 0 24px",
      }}>
        That's not failure. That's neurology moving at its own pace.
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.7,
        color: "#444444",
        margin: "0 0 24px",
      }}>
        The research tells us something important: the childhood window for body signal learning extends well beyond what most parents are told (Nicholson et al. 2019). There is no deadline that passes while you're not looking. Your child's nervous system is still developing, still capable of learning to recognize new signals.
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1.7,
        color: "#2D2D2D",
        margin: 0,
      }}>
        Late is not never.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: SP-06 — Late-Trainer Stories
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "28px 30px 0", background: "#FCFAF5" }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.7,
        color: "#444444",
        margin: "0 0 20px",
      }}>
        Here's what we know from families who've walked this path:
      </p>

      {/* Story Block 1 */}
      <div style={{
        borderLeft: "2px solid #039902",
        paddingLeft: 12,
        marginBottom: 20,
      }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.6,
          color: "#555555",
          margin: 0,
        }}>
          <strong style={{ color: "#2D2D2D" }}>Maureen Bennie's son was 9.5 when he finally trained.</strong> Not suddenly. Not overnight. But his nervous system caught up in its own time.
        </p>
      </div>

      {/* Story Block 2 */}
      <div style={{
        borderLeft: "2px solid #039902",
        paddingLeft: 12,
        marginBottom: 20,
      }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.6,
          color: "#555555",
          margin: 0,
        }}>
          <strong style={{ color: "#2D2D2D" }}>Another family's child was 8.</strong> The first signal wasn't a trip to the bathroom. It was a pause. A look down. A moment of recognition that something had happened.
        </p>
      </div>

      {/* Story Block 3 */}
      <div style={{
        borderLeft: "2px solid #039902",
        paddingLeft: 12,
        marginBottom: 20,
      }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.6,
          color: "#555555",
          margin: 0,
        }}>
          <strong style={{ color: "#2D2D2D" }}>One mom described it this way:</strong> "He paused. He felt something." — that was the beginning of everything.
        </p>
      </div>

      <p style={{
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.7,
        color: "#444444",
        margin: "0 0 12px",
      }}>
        These aren't "fully trained in 3 weeks" stories. They're real timelines for real kids whose nervous systems needed more time.
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1.7,
        color: "#2D2D2D",
        margin: 0,
      }}>
        Late is not never.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: EDU-1 — Definition Block (Mechanism)
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "36px 30px", background: "#FCFAF5" }}>
      <div style={{
        background: "#FBF7EB",
        border: "1px solid #E8DCC8",
        borderRadius: 12,
        padding: "48px 30px",
      }}>
        {/* Quote / Intro */}
        <p style={{
          fontFamily: F.display,
          fontStyle: "italic",
          fontSize: 17,
          fontWeight: 400,
          lineHeight: 1.6,
          color: "#444444",
          textAlign: "center",
          margin: "0 0 16px",
        }}>
          What changes during adolescence isn't the destination, it's the definition of progress.
        </p>

        {/* Body */}
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#444444",
          margin: "0 0 14px",
        }}>
          A body that's growing means a nervous system that's still wiring. The body signal pathway — the one that carries the "I need to go" signal — is still forming. For a deeply slow to pick up signals child, the goal isn't toilet training by a certain age. The goal is <strong style={{ color: "#2D2D2D" }}>giving the brain enough information, consistently, over enough time, that it eventually learns to recognize the signal on its own.</strong>
        </p>

        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#444444",
          margin: 0,
        }}>
          You don't have to replace anything. You don't have to add pressure to an already full day. One pair of Body-Signal Learning underwear, worn alongside your current routine for a few hours at a time, is enough. The Body-Signal Learning Layer creates a sustained 30–60 second gentle sensation that the slow to pick up signals brain can finally register. Not something forced from outside. Not something that changes who he is. Just information his nervous system has been missing.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: LETTER-02 — Closing Paragraph
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 30px", background: "#FCFAF5" }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.7,
        color: "#444444",
        margin: "0 0 24px",
      }}>
        Whatever progress means for your family at this stage, that's the right definition. If the underwear never leads to training but it gives his brain more sensory feedback during these growing years, that's not a failure. That's his nervous system getting what it needs.
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1.7,
        color: "#2D2D2D",
        margin: 0,
      }}>
        No deadline. No pressure. Just the science, available when you're ready.
      </p>
    </div>

    {/* 36px gap */}
    <div style={{ height: 36, background: "#FCFAF5" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: CTA-4 — Gentle Invite
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 30px", background: "#FCFAF5", textAlign: "center" }}>
      {/* Primary CTA Button */}
      <a href="#" style={{
        display: "block",
        padding: "16px 36px",
        background: "#007A00",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: 0.3,
        textDecoration: "none",
        borderRadius: 6,
        width: 260,
        margin: "0 auto",
        textAlign: "center",
      }}>
        When You're Ready, It's Here
      </a>

      {/* 12px gap */}
      <div style={{ height: 12 }} />

      {/* Secondary Link */}
      <a href="#" style={{
        fontFamily: F.main,
        fontSize: 14,
        fontWeight: 400,
        color: "#888888",
        textDecoration: "underline",
        textAlign: "center",
        display: "block",
      }}>
        or read more about growing bodies and body-signal learning →
      </a>

      {/* 16px gap */}
      <div style={{ height: 16 }} />

      {/* Trust Line */}
      <p style={{
        fontFamily: F.main,
        fontSize: 13,
        fontWeight: 400,
        color: "#999999",
        textAlign: "center",
        margin: 0,
      }}>
        60 days · no pressure · your judgment
      </p>
    </div>

    {/* 40px gap */}
    <div style={{ height: 40, background: "#FCFAF5" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: Lena Sign-Off (Long Variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FCFAF5", padding: "0 30px" }}>
      {/* Closing */}
      <p style={{
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 1.6,
        color: "#555555",
        margin: "0 0 4px",
      }}>
        With care,
      </p>

      {/* Name */}
      <p style={{
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 700,
        fontStyle: "italic",
        color: "#2D2D2D",
        margin: "0 0 4px",
      }}>
        Lena
      </p>

      {/* Profile */}
      <p style={{
        fontFamily: F.main,
        fontSize: 12,
        fontWeight: 400,
        color: "#999999",
        margin: "0 0 16px",
      }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* P.S. */}
      <p style={{
        fontFamily: F.display,
        fontStyle: "italic",
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.5,
        color: "#444444",
        margin: 0,
      }}>
        P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment.
      </p>
    </div>

    {/* 30px gap */}
    <div style={{ height: 30, background: "#FCFAF5" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 9: UTIL-04 — Footer
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FCFAF5",
      borderTop: "1px solid #E5E5E5",
      padding: "14px 30px",
      textAlign: "center",
    }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 11,
        fontWeight: 400,
        lineHeight: 1.3,
        color: "#AAAAAA",
        margin: "0 0 6px",
      }}>
        BrightKidCo · 123 Support Lane · Portland, OR 97201
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 11,
        fontWeight: 400,
        lineHeight: 1.3,
        color: "#AAAAAA",
        margin: "0 0 6px",
      }}>
        <a href="{{unsubscribe_url}}" style={{ color: "#AAAAAA", textDecoration: "underline" }}>Unsubscribe</a> · <a href="{{manage_preferences_url}}" style={{ color: "#AAAAAA", textDecoration: "underline" }}>Manage Preferences</a>
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 11,
        fontWeight: 400,
        lineHeight: 1.3,
        color: "#AAAAAA",
        margin: 0,
      }}>
        Questions? Hit reply, you get me, not a bot. Lena reads every response.
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_Email_pped_22_e4_l3 });
