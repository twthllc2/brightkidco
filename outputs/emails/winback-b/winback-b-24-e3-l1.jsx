/* Winback Path B — E3 | L1 (Sarah, Pre-K Parent)
   Wireframe: wireframes/winback-b/winback-b-24-e3-l1.md
   Strategy: strategy-map.json → flows.winback-b.emails.e3-l1
   Generated: 2026-06-09
*/

const Email_winback_b_24_e3_l1 = () => (
  <EmailShell preheader="The door's open whenever you are. If that's today or never, you've got my respect either way." bg="#FBF7F1">

    {/* === CONTRAPTION: Timeline Arc (Mobile horizontal bar above hero) === */}
    <div style={{
      background: "#FFFFFF", padding: "8px 24px",
      display: "flex", alignItems: "center", gap: 0,
    }}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Segment 1 — Day 0 */}
        <div style={{
          width: 12, height: 12, borderRadius: "50%",
          background: "#9AA8A7", opacity: 0.6,
        }} />
        {/* Line 1 */}
        <div style={{ flex: 1, height: 2, background: "#9AA8A7", opacity: 0.4 }} />
        {/* Segment 2 — Day 60 */}
        <div style={{
          width: 12, height: 12, borderRadius: "50%",
          background: "#9AA8A7", opacity: 0.6,
        }} />
        {/* Line 2 */}
        <div style={{ flex: 1, height: 2, background: "#039902" }} />
        {/* Segment 3 — Today (green + yellow glow) */}
        <div style={{
          width: 14, height: 14, borderRadius: "50%",
          background: "#039902",
          boxShadow: "0 0 8px rgba(245,200,75,0.3)",
        }} />
      </div>
    </div>
    {/* Labels for timeline */}
    <div style={{
      background: "#FFFFFF", padding: "0 24px 8px",
      display: "flex", alignItems: "center",
    }}>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <span style={{ fontFamily: F.main, fontSize: 11, color: B.muted, marginRight: 8 }}>Day 0</span>
        <span style={{ fontFamily: F.main, fontSize: 11, color: B.muted, flex: 1, textAlign: "center" }}>Day 60</span>
        <span style={{ fontFamily: F.main, fontSize: 11, color: B.muted }}>Today</span>
      </div>
    </div>

    {/* === SECTION 1: HEADER === */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src="../assets/brightkidco-logo-v2.png" alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: B.ink, marginTop: 8 }}>
        Lena from BrightKidCo
      </div>
      <div style={{ height: 2, background: "#039902", marginTop: 12 }} />
    </div>

    {/* === SECTION 2: HERO — HERO-20 Handwritten Letter Opener === */}
    <div style={{ background: "#FFFFFF", padding: "40px 24px 32px" }}>
      <h1 style={{
        fontFamily: F.main, fontSize: 28, fontWeight: 400, lineHeight: 1.3,
        color: B.ink, margin: 0,
      }}>
        Pre-K is coming, this my last email
      </h1>

      {/* Warm threshold illustration — L1 warmer accent */}
      <div style={{ marginTop: 20, marginBottom: 8 }}>
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
          <rect x="10" y="4" width="60" height="52" rx="2" stroke="#F5C84B" strokeWidth="1.5" fill="none" />
          <line x1="40" y1="10" x2="40" y2="50" stroke="#F5C84B" strokeWidth="1.5" />
          <circle cx="40" cy="7" r="1.5" fill="#F5C84B" />
        </svg>
      </div>

      <div style={{ height: 32 }} />
    </div>

    {/* === SECTION 3: DIRECT OPENING (LETTER-02) === */}
    <div style={{ background: "#FFFFFF", padding: "0 24px 24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        Hi {"{first_name}"},
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        I want to be direct with you.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        You signed up {"{X}"} weeks ago. Pre-K is coming, I know that deadline is real, and I know you've been thinking about it. I also know that if Body-Signal learning was going to click for your family, it probably would have by now.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.ink, margin: "0 0 16px",
      }}>
        It's okay if this wasn't the right time.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: 0,
      }}>
        You didn't fail. The method wasn't built wrong for your kid, your kid's nervous system is on its own schedule, and no product, no matter how well-designed, can rush a body that isn't ready yet.
      </p>
    </div>

    {/* === DIVIDER — em-dash === */}
    <div style={{ background: "#FFFFFF", padding: "0 24px", textAlign: "center" }}>
      <div style={{ fontFamily: F.main, fontSize: 14, color: B.muted, padding: "4px 0" }}>—</div>
    </div>

    {/* === SECTION 4: VALIDATION — You Showed Up === */}
    <div style={{ background: "#FFFFFF", padding: "24px" }}>
      <div style={{
        background: "#FBF7EB", borderRadius: 20, borderLeft: "3px solid #039902",
        padding: 20,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.ink, margin: "0 0 12px",
        }}>
          Here's the part I want you to remember:
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: 0,
        }}>
          You've already done the hardest thing, you showed up. You researched. You cared enough to read 10+ emails from a stranger who's been where you are. That's nothing. That's everything.
        </p>
      </div>
    </div>

    {/* === DIVIDER — em-dash === */}
    <div style={{ background: "#FFFFFF", padding: "0 24px", textAlign: "center" }}>
      <div style={{ fontFamily: F.main, fontSize: 14, color: B.muted, padding: "4px 0" }}>—</div>
    </div>

    {/* === SECTION 5: MECHANISM REMINDER === */}
    <div style={{ background: "#FFFFFF", padding: "24px", position: "relative" }}>
      {/* Green left-bar accent */}
      <div style={{
        position: "absolute", left: 20, top: 24, width: 2,
        height: "60%", background: "#039902",
      }} />

      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.ink, margin: "0 0 12px",
      }}>
        The signal-timing gap is real.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 12px",
      }}>
        Your child may be verbal, smart, "almost trained", and still not feel when they need to go. That's not defiance. That's a signal that arrives milliseconds too late, every time. Interoception research from Nicholson et al. (2019) shows this is a measurable neurological difference in autistic children, not a parenting failure, not a child refusing to cooperate.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 8px",
      }}>
        The Body-Signal Learning Layer creates a 30-60 second sustained "uh-oh" sensation that bridges that gap. It gives a slow to pick up signals brain the feedback window it needs to finally register: <em>something happened.</em>
      </p>

      {/* Citation */}
      <div style={{
        fontFamily: F.main, fontSize: 13, fontWeight: 400,
        color: B.muted, marginTop: 8,
      }}>
        Nicholson et al. (2019)
      </div>
    </div>

    {/* === DIVIDER — em-dash === */}
    <div style={{ background: "#FFFFFF", padding: "0 24px", textAlign: "center" }}>
      <div style={{ fontFamily: F.main, fontSize: 14, color: B.muted, padding: "4px 0" }}>—</div>
    </div>

    {/* === SECTION 6: OFFER BLOCK === */}
    <div style={{ background: "#FFFFFF", padding: "24px" }}>
      <div style={{
        background: "#FBF7EB", borderRadius: 20, padding: 24,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: "0 0 16px",
        }}>
          If you ever want to try it, the 3+3 Bundle is here.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.ink, margin: "0 0 16px",
        }}>
          $79.99. Free shipping. 60 days to test it by your own judgment. If your child shows any sign of body awareness, a pause, a look, a step toward the bathroom, you'll know the signal is working. If nothing changes, full refund. No questions. No hoops.
        </p>

        {/* Guarantee strip */}
        <div style={{
          background: "#DBFFCD", borderRadius: 8, padding: "12px 16px",
          textAlign: "center",
        }}>
          <div style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, color: "#039902" }}>
            60 days. By your judgment.
          </div>
        </div>
      </div>
    </div>

    {/* === SECTION 7: CTA BUTTON === */}
    <div style={{ background: "#FFFFFF", padding: "16px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <a href="https://www.brightkidco.com/products/3-3-bundle" style={{
          display: "block", maxWidth: 320, margin: "0 auto",
          padding: "16px 32px", minHeight: 52,
          background: B.teal, color: "#FFFFFF",
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.0, textDecoration: "none",
          borderRadius: 8, textAlign: "center",
        }}>
          Try the 3+3 Bundle, 60 days, your judgment →
        </a>
      </div>
      <div style={{
        fontFamily: F.main, fontSize: 13, fontWeight: 400, fontStyle: "italic",
        color: B.muted, textAlign: "center",
      }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </div>
    </div>

    {/* === SECTION 8: PERMISSION CLOSE === */}
    <div style={{ background: "#FFFFFF", padding: "24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        And if today isn't the day, that's a real answer.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        The product will be here next month. Next year. Whenever you're ready. I will too.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: 0,
      }}>
        This my last email in this series. I'm not going to keep filling your inbox. But my door, and the 60-day guarantee, is always open.
      </p>
    </div>

    {/* === DIVIDER — Green rule === */}
    <div style={{ background: "#FFFFFF", padding: "0 24px" }}>
      <div style={{ height: 2, background: "rgba(3,153,2,0.3)" }} />
    </div>

    {/* === SECTION 9: LENA SIGN-OFF — Long Variant (Winback) === */}
    <div style={{ background: "#FBF7F1", padding: "32px 24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, fontStyle: "italic",
        color: B.ink, margin: "0 0 8px",
      }}>
        With care,
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, color: B.ink,
        margin: "0 0 4px",
      }}>
        Lena ——
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 13, fontWeight: 400, color: B.muted,
        margin: "0 0 16px",
      }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* Dashed divider */}
      <div style={{ borderTop: "1px dashed #8A9B9D", margin: "16px 0" }} />

      <p style={{
        fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: 0,
      }}>
        P.S. If you ever want to talk it through, hit reply. You'll get me, not a bot. No sales pitch. Just another mom who's been there.
      </p>
    </div>

    {/* === DIVIDER === */}
    <div style={{ background: "#FFFFFF", padding: "0 24px" }}>
      <div style={{ height: 1, background: "rgba(224,224,224,0.5)" }} />
    </div>

    {/* === SECTION 10: FOOTER === */}
    <div style={{ background: "#FFFFFF", padding: "16px 24px 20px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main, fontSize: 12, fontWeight: 400, lineHeight: 1.5,
        color: B.muted, margin: "0 0 8px",
      }}>
        You're receiving this email because you signed up at BrightKidCo. If you'd prefer not to hear from us anymore, you can <a href="#" style={{ color: B.muted, textDecoration: "underline" }}>unsubscribe</a> here.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 12, fontWeight: 400, lineHeight: 1.5,
        color: B.muted, margin: 0,
      }}>
        BrightKidCo LLC · [Physical Address] · support@brightkidco.com
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_winback_b_24_e3_l1 });
