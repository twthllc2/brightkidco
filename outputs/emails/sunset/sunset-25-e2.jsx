/* Sunset — E2 | Cross-Level
   Wireframe: wireframes/sunset/sunset-25-e2.md
   Strategy: strategy-map.json → flows.sunset.emails.e2
   Generated: 2026-06-09
*/

const Email_sunset_25_e2 = () => (
  <EmailShell preheader="You're always welcome back. But if today isn't the day, that's a real answer." bg="#FFFFFF">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo, centered, white bg, border-bottom
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center", borderBottom: "1px solid #E8E2DA" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — Open Door Easter Egg
       Small 160×100px illustration, B.teal on B.cream
       Door angled ~15°, "Still here." below
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "20px 24px", textAlign: "center" }}>
      <div style={{ display: "inline-block" }}>
        <svg
          width="160"
          height="100"
          viewBox="0 0 160 100"
          role="img"
          aria-label="A door slightly open with warm light, still here when you're ready."
          data-door="15deg-open"
        >
          <defs>
            <linearGradient id="lightSliver" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FBF7F1" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {/* Door frame — left jamb */}
          <line x1="55" y1="10" x2="55" y2="85" stroke="#2BAEB4" strokeWidth="1.5" />
          {/* Door frame — top */}
          <line x1="55" y1="10" x2="115" y2="10" stroke="#2BAEB4" strokeWidth="1.5" />
          {/* Door frame — right jamb */}
          <line x1="115" y1="10" x2="115" y2="85" stroke="#2BAEB4" strokeWidth="1.5" />
          {/* Floor */}
          <line x1="40" y1="85" x2="130" y2="85" stroke="#2BAEB4" strokeWidth="1.5" />
          {/* Door — angled ~15° inward */}
          <line x1="55" y1="10" x2="75" y2="85" stroke="#2BAEB4" strokeWidth="1.5" />
          {/* Light sliver — 3px wide at widest, soft gradient */}
          <rect x="75" y="10" width="4" height="75" fill="url(#lightSliver)" opacity="0.7" />
        </svg>
        {/* "Still here." — Questrial 11px, B.muted, uppercase, letter-spacing 1px */}
        <div style={{
          fontFamily: "Questrial, Arial, Helvetica, sans-serif",
          fontSize: 11, fontWeight: 400,
          color: "#8A9B9D", textTransform: "uppercase",
          letterSpacing: 1, marginTop: 8,
        }}>
          Still here.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SPACER 32px
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 32 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HOOK — Cream Card
       "This our last email." headline + body
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FBF7F1",
      padding: "48px 32px",
      borderRadius: 12,
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      margin: "0 24px",
    }}>
      {/* Headline */}
      <h1 style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 28, fontWeight: 400, lineHeight: 1.2,
        color: "#1F2D2F", margin: "0 0 16px",
      }}>
        This our last email.
      </h1>

      {/* Body */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: "#4A6568", margin: 0,
      }}>
        We haven't heard from you in a while, and we're respecting your inbox. If today isn't the right time, that's a real answer. The product will be here when you're ready. So will I.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SPACER 32px
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 32 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: RECOGNITION ANCHORS — White
       Whether...Or...If... pattern + 4 recognition anchors
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FFFFFF",
      padding: "32px 32px",
      margin: "0 24px",
    }}>
      {/* Paragraph 1 — recognition hook (B.ink) */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 17, fontWeight: 400, lineHeight: 1.7,
        color: "#1F2D2F", margin: "0 0 16px",
      }}>
        Whether your child talks about the potty but doesn't use it, or you've been at this for years and stopped counting the attempts, if the signal isn't arriving, you're not alone in that.
      </p>

      {/* Paragraph 2 — expansion (B.soft) */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 17, fontWeight: 400, lineHeight: 1.7,
        color: "#4A6568", margin: 0,
      }}>
        Some kids are 3 and just starting to show signs. Others are 10+ and you've tried everything. Some parents have just begun looking. Others have stepped back from trying entirely. Every version belongs here.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SPACER 32px
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 32 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: VALIDATION + MECHANISM — Mint Card
       Lena's personal story + interoception explanation
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#DBFFCD",
      padding: "48px 32px",
      borderRadius: 12,
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      margin: "0 24px",
    }}>
      {/* Paragraph 1 — personal validation (B.ink) */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 17, fontWeight: 400, lineHeight: 1.7,
        color: "#1F2D2F", margin: "0 0 16px",
      }}>
        If you've stepped back from trying, I get it. Both my sons went through this. My older son was 8 before we figured out what was really going on. And I know what it feels like when every method you try ends the same way.
      </p>

      {/* Paragraph 2 — research (B.soft) */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 17, fontWeight: 400, lineHeight: 1.7,
        color: "#4A6568", margin: "0 0 16px",
      }}>
        What we've learned, from the research and from thousands of families, is that it's not about effort. It's not about motivation. For kids whose nervous systems process body signals differently, the standard methods were solving the wrong problem.
      </p>

      {/* Paragraph 3 — interoception (B.soft) */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 17, fontWeight: 400, lineHeight: 1.7,
        color: "#4A6568", margin: 0,
      }}>
        The signal that says "I need to go", interoception, arrives differently for some kids. It arrives too late, or it doesn't arrive at all. And no method that assumes it's already there can bridge that gap.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SPACER 32px
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 32 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: PERMISSION / GENTLE CLOSE — White
       Open door promise + final italic validation
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FFFFFF",
      padding: "32px 32px",
      margin: "0 24px",
    }}>
      {/* Paragraph 1 — permission (B.soft) */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: "#4A6568", margin: "0 0 16px",
      }}>
        If your child's situation has changed, if you're ready to try something different down the road, you're always welcome back. If today isn't the day, that's okay. The science will still be here. The Body-Signal Learning Layer will still be here. So will I.
      </p>

      {/* Final italic line — "You've been doing the work..." */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 17, fontWeight: 400, fontStyle: "italic",
        lineHeight: 1.6, color: "#1F2D2F",
        margin: 0,
      }}>
        Whichever path you take, thanks for letting us into your inbox. You've been doing the work. That's what matters.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SPACER 40px
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 40 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: SIGNOFF — LONG Variant (Cream Card)
       "With care, Lena" + P.S. with 60-day guarantee
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FBF7F1",
      padding: "32px 32px",
      borderRadius: 12,
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      margin: "0 24px",
    }}>
      {/* Closing — "With care," */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 16, fontWeight: 400, fontStyle: "italic",
        color: "#1F2D2F", lineHeight: 1.4,
        margin: "0 0 4px",
      }}>
        With care,
      </p>

      {/* Name — "Lena," */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 18, fontWeight: 400,
        color: "#2BAEB4", lineHeight: 1.4,
        margin: "0 0 4px",
      }}>
        Lena,
      </p>

      {/* Role */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 14, fontWeight: 400,
        color: "#8A9B9D", lineHeight: 1.4,
        margin: "0 0 20px",
      }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* Thin Rule before P.S. */}
      <div style={{ width: "100%", height: 1, background: "#E8E2DA", marginBottom: 16 }} />

      {/* P.S. Block */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 15, fontWeight: 400,
        lineHeight: 1.5, color: "#4A6568",
        margin: 0,
      }}>
        P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment. https://brightkidco.com
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SPACER 48px
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48 }} />

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ borderTop: "1px solid #E8E2DA", margin: "0 24px" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: FOOTER
       Links, reviews, unsubscribe, address, copyright
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 32px 48px", textAlign: "center" }}>
      {/* Footer links */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 13, fontWeight: 400,
        color: "#2BAEB4",
        margin: "0 0 12px",
      }}>
        <a href="#" style={{ color: "#2BAEB4", textDecoration: "none" }}>Shop</a>
        {" · "}
        <a href="#" style={{ color: "#2BAEB4", textDecoration: "none" }}>Parent Stories</a>
        {" · "}
        <a href="#" style={{ color: "#2BAEB4", textDecoration: "none" }}>Contact Us</a>
        {" · "}
        <a href="#" style={{ color: "#2BAEB4", textDecoration: "none" }}>FAQ</a>
      </p>

      {/* Reviews line */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 13, fontWeight: 400,
        color: "#8A9B9D",
        margin: "0 0 12px",
      }}>
        16,511 reviews · 4.9 ★ · 100,000+ parents
      </p>

      {/* Contact / Unsubscribe */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 12, fontWeight: 400,
        color: "#8A9B9D",
        margin: "0 0 8px",
      }}>
        support@brightkidco.com | <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a> | <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Preferences</a>
      </p>

      {/* Address */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 12, fontWeight: 400,
        color: "#8A9B9D",
        margin: "0 0 8px",
      }}>
        BrightKidCo · 123 Main Street, Suite 200, San Francisco, CA 94102
      </p>

      {/* Copyright */}
      <p style={{
        fontFamily: "Questrial, Arial, Helvetica, sans-serif",
        fontSize: 11, fontWeight: 400,
        color: "#8A9B9D",
        margin: 0,
      }}>
        © 2026 BrightKidCo. All rights reserved.
      </p>
    </div>

  </EmailShell>
);

// Register on window for rendering
Object.assign(window, { Email_sunset_25_e2 });
