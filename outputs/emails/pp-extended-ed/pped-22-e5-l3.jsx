/* PP-Extended Education — E5 (D50) | L3 Maria — Older child, severe/profound, dignity-centered
   Wireframe: wireframes/pp-extended-ed/pped-22-e5-l3.md
   Strategy: strategy-map.json → flows.pp-extended-ed.emails.e5-l3
   Generated: 2026-06-09
*/

const Email_Email_pped_22_e5_l3 = () => (
  <EmailShell preheader="You've been doing this for years. You don't have to do it alone." bg="#FBF7EB">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HERO-9 — Whisper Tone
       No header image, no logo bar. Starts with breathing room.
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "40px 28px 32px", background: "#FBF7EB" }}>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, fontWeight: 400,
        color: "#4A4035", margin: 0,
      }}>
        You've been doing this for years. Years of appointments, therapies, schedules. Years of people who mean well but don't fully understand what your days look like.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       48px gap
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: "#FBF7EB" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: LETTER-02 — Personal Note
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FBF7EB", borderRadius: 12, padding: 32,
      marginLeft: 16, marginRight: 16,
    }}>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, fontWeight: 400,
        color: "#4A4035", margin: "0 0 14px",
      }}>
        The parent who nods when you say 'he's never given me a signal in 8 years', not because she read about it, but because she lived it.
      </p>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, fontWeight: 400,
        color: "#4A4035", margin: "0 0 14px",
      }}>
        The mom who doesn't try to offer advice, just sits beside you in the silence of knowing.
      </p>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 17, lineHeight: 1.65, fontWeight: 400, fontStyle: "italic",
        color: "#4A4035", margin: 0,
      }}>
        That kind of connection is rare. And it matters more than any product ever could.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       48px gap
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: "#FBF7EB" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 3: PULL-QUOTE BLOCK
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#F3EDE0", borderRadius: 12,
      padding: "20px 12px 20px 20px",
      marginLeft: 16, marginRight: 16,
      borderLeft: "3px solid #D4A574",
    }}>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 17, lineHeight: 1.65, fontWeight: 400, fontStyle: "italic",
        color: "#4A4035", margin: 0,
      }}>
        "That moment isn't training. But it's the first time his body told his brain something."
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       48px gap
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: "#FBF7EB" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: QUIET GATHERING SVG
       Three abstract figures sitting in a loose circle
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FBF7EB", padding: "0 28px",
      display: "flex", justifyContent: "center",
    }}>
      <svg
        width="240" height="120" viewBox="0 0 240 120"
        role="img" aria-label="Three parents sitting together in quiet understanding"
        style={{ display: "block" }}
      >
        {/* Soft warm circle of light beneath */}
        <defs>
          <radialGradient id="quietGlow" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#FBF7EB" />
            <stop offset="100%" stopColor="#FBF7EB" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="120" cy="75" rx="100" ry="45" fill="url(#quietGlow)" />

        {/* Figure 1 — left, slightly shorter */}
        <ellipse cx="80" cy="62" rx="22" ry="36" fill="#FBF7EB" stroke="#D4A574" strokeWidth="1.2" />

        {/* Figure 2 — center, tallest */}
        <ellipse cx="120" cy="56" rx="24" ry="42" fill="#FBF7EB" stroke="#D4A574" strokeWidth="1.2" />

        {/* Figure 3 — right, medium height */}
        <ellipse cx="160" cy="60" rx="22" ry="38" fill="#FBF7EB" stroke="#D4A574" strokeWidth="1.2" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       48px gap
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: "#FBF7EB" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER-02 — Community Invite
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FBF7EB", borderRadius: 12, padding: 32,
      marginLeft: 16, marginRight: 16,
    }}>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, fontWeight: 400,
        color: "#4A4035", margin: "0 0 14px",
      }}>
        We built a small community for L3 parents. Not a Facebook group with thousands of strangers. A quiet space, a private circle, where parents of kids with high support needs share what actually works.
      </p>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, fontWeight: 400,
        color: "#4A4035", margin: "0 0 14px",
      }}>
        No success stories that make you feel behind. No 'have you tried...' from people who don't understand.
      </p>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, fontWeight: 400,
        color: "#4A4035", margin: 0,
      }}>
        Just other parents who know what it means when your child doesn't register wetness, can't tell you what they need, and is growing bigger than the pull-up size chart goes.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       48px gap
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: "#FBF7EB" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: CTA-6 — Social CTA
       Soft text link, not a button
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FBF7EB", borderRadius: 12, padding: 32,
      marginLeft: 16, marginRight: 16,
    }}>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, fontWeight: 700,
        color: "#4A4035", margin: "0 0 14px",
      }}>
        The community is open if you want it. No pressure to participate.
      </p>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, fontWeight: 400,
        color: "#4A4035", margin: "0 0 14px",
      }}>
        No obligation to buy anything more. Just a door you can walk through when you're ready.
      </p>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 17, lineHeight: 1.65, fontWeight: 400, fontStyle: "italic",
        color: "#4A4035", margin: 0,
      }}>
        When you're with parents who get it, the weight shifts. Not because the problem changes, because you're not carrying it alone anymore.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       48px gap
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: "#FBF7EB" }} />

    {/* ══════════════════════════════════════════════════════
       THIN SEPARATOR LINE
       ══════════════════════════════════════════════════════ */}
    <div style={{ display: "flex", justifyContent: "center", background: "#FBF7EB" }}>
      <div style={{ width: 80, height: 1, background: "#D4A574" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       48px gap
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: "#FBF7EB" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: LENA SIGN-OFF (MEDIUM-LONG)
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FBF7EB", borderRadius: 12, padding: 32,
      marginLeft: 16, marginRight: 16,
    }}>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 15, lineHeight: 1.6, fontWeight: 400,
        color: "#4A4035", margin: "0 0 4px",
      }}>
        With care,
      </p>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 15, lineHeight: 1.6, fontWeight: 700,
        color: "#4A4035", margin: "0 0 4px",
      }}>
        Lena ——
      </p>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 14, lineHeight: 1.5, fontWeight: 400,
        color: "#4A4035", margin: "0 0 16px",
      }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* Thin separator */}
      <div style={{ height: 1, background: "#D4A574", margin: "0 0 16px" }} />

      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 14, lineHeight: 1.6, fontWeight: 400,
        color: "#4A4035", margin: "0 0 14px",
      }}>
        One of my sons was 8 before we figured anything out. I spent years thinking we were the only ones. We weren't. Neither are you.
      </p>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 14, lineHeight: 1.6, fontWeight: 400,
        color: "#4A4035", margin: 0,
      }}>
        The community link is at the bottom of this email, bookmark it for whenever you're ready.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       48px gap
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: "#FBF7EB" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: FLOATING FEATHER (Easter Egg)
       Single bezier curve, barely visible
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FBF7EB",
      display: "flex", justifyContent: "center",
      padding: "0 28px",
    }}>
      <svg width="35" height="22" viewBox="0 0 35 22" aria-hidden="true" style={{ display: "block" }}>
        <path
          d="M0,20 Q15,18 20,10 Q25,2 35,0"
          stroke="#D4A574"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
          strokeLinecap="round"
        />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       48px gap
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: "#FBF7EB" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 9: FOOTER
       CAN-SPAM compliant, compact, de-emphasized
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FBF7EB", borderRadius: 12, padding: 22,
      marginLeft: 16, marginRight: 16,
    }}>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 10, lineHeight: 1.5, fontWeight: 400,
        color: "#9C8B75", margin: "0 0 10px", textAlign: "center",
      }}>
        You're receiving this email because you're part of the BrightKidCo community.
      </p>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 10, lineHeight: 1.5, fontWeight: 400,
        color: "#9C8B75", margin: "0 0 10px", textAlign: "center",
      }}>
        BrightKidCo<br />
        123 Main Street, Suite 200<br />
        Portland, OR 97201<br />
        United States
      </p>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 10, lineHeight: 1.5, fontWeight: 400,
        color: "#9C8B75", margin: "0 0 6px", textAlign: "center",
      }}>
        <a href="#" style={{ color: "#9C8B75", textDecoration: "underline" }}>Unsubscribe</a>
        {" · "}
        <a href="#" style={{ color: "#9C8B75", textDecoration: "underline" }}>Manage Preferences</a>
      </p>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 10, lineHeight: 1.5, fontWeight: 400,
        color: "#9C8B75", margin: 0, textAlign: "center",
      }}>
        © 2026 BrightKidCo LLC. All rights reserved.
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_Email_pped_22_e5_l3 });
