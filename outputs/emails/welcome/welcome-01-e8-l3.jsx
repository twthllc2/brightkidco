/* Welcome Flow — E8 (Day 21) | Level 3 — Maria
   Wireframe: wireframes/welcome/welcome-01-e8-l3.md
   Strategy: strategy-map.json → welcome.emails.e8-l3
   Generated: 2026-06-09
*/

const Email_welcome_01_e8_l3 = () => (
  <EmailShell preheader="This my last email. Whatever you decide, we're still here when you need us." bg="#FAF7F3">

    {/* ════════════════ SECTION 1: HEADER ════════════════ */}
    <Header bg="#FAF7F3" />

    {/* ════════════════ SECTION 2: LENA SIGNATURE STAMP ════════════════ */}
    {/* HERO-9 — Whisper Tone: no image, no product, just a quiet typographic opening */}
    <div style={{ padding: "40px 24px 16px", textAlign: "center" }}>
      <div style={{
        width: 40, height: 40, borderRadius: "50%",
        background: "#F5F0EB",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{
          fontFamily: "'Georgia', serif", fontSize: 20, fontWeight: 700,
          color: "#A0836C", lineHeight: 1,
        }}>L</span>
      </div>
    </div>

    {/* ════════════════ SECTION 3: HOOK — PERSONAL LETTER ════════════════ */}
    {/* LETTER-07 — Greeting Card: Georgia Bold 28px headline, max 540px */}
    <div style={{ padding: "8px 24px 32px", maxWidth: 540, margin: "0 auto" }}>
      <h1 style={{
        fontFamily: "'Georgia', serif", fontSize: 28, fontWeight: 700,
        lineHeight: 1.3, color: "#3D3A37", margin: "0 0 20px",
      }}>
        This my last email.
      </h1>
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
        color: "#5C5955", margin: "0 0 16px",
      }}>
        And it's not about selling you anything.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
        color: "#5C5955", margin: "0 0 16px",
      }}>
        If you've read this far, you already know what BrightKidCo is. You know about the Body-Signal Learning Layer. You know the science, 49 studies confirming what you've sensed all along: that your child's nervous system processes body signals differently, and that's not a failure of effort or will.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
        color: "#5C5955", margin: "0 0 16px",
      }}>
        You know because you've lived it.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
        color: "#5C5955", margin: 0,
      }}>
        "He's never shown a single sign of feeling wet or dirty", that's not something you read in a book. That's something you noticed in your own child, year after year, while the internet told you to try sticker charts and timer sits and social stories that assumed a child who could feel the signal in the first place.
      </p>
    </div>

    {/* ── Thin rule divider (20.1 — Wave Divider) ── */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ borderTop: "1px solid #D4C9BC" }} />
    </div>

    {/* ════════════════ SECTION 4: RECAP ════════════════ */}
    {/* Recap: 3 bullet sections with bold lead + body */}
    <div style={{ padding: "32px 24px 16px", maxWidth: 540, margin: "0 auto" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 22, fontWeight: 700,
        lineHeight: 1.4, color: "#3D3A37", margin: "0 0 20px",
      }}>
        So here's what you've learned across these emails:
      </h2>

      {/* Recap bullet 1: The real problem */}
      <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 20 }}>
        <span style={{
          fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
          color: "#D4C9BC", flexShrink: 0, marginTop: 1,
        }}>●</span>
        <div>
          <p style={{
            fontFamily: F.main, fontSize: 17, fontWeight: 700,
            lineHeight: 1.6, color: "#3D3A37", margin: "0 0 4px",
          }}>
            The real problem isn't behavior, it's neurology.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
            color: "#5C5955", margin: 0,
          }}>
            The interoception gap is a measurable, documented difference in autistic children. The brain and bladder are speaking different languages.
          </p>
        </div>
      </div>

      {/* Recap bullet 2: The mechanism */}
      <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 20 }}>
        <span style={{
          fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
          color: "#D4C9BC", flexShrink: 0, marginTop: 1,
        }}>●</span>
        <div>
          <p style={{
            fontFamily: F.main, fontSize: 17, fontWeight: 700,
            lineHeight: 1.6, color: "#3D3A37", margin: "0 0 4px",
          }}>
            The Body-Signal Learning Layer addresses this directly.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
            color: "#5C5955", margin: 0,
          }}>
            Unlike pull-ups that wick away the signal completely, the 3-layer system creates a gentle sensation that lasts for 30-60 seconds. Long enough for the brain to register: something happened.
          </p>
        </div>
      </div>

      {/* Recap bullet 3: What progress looks like */}
      <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 0 }}>
        <span style={{
          fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
          color: "#D4C9BC", flexShrink: 0, marginTop: 1,
        }}>●</span>
        <div>
          <p style={{
            fontFamily: F.main, fontSize: 17, fontWeight: 700,
            lineHeight: 1.6, color: "#3D3A37", margin: "0 0 4px",
          }}>
            Progress doesn't look like the books describe.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
            color: "#5C5955", margin: 0,
          }}>
            One parent told us: "He looked down at the wet spot for the first time in 9 years." That's not a headline. That's a nervous system receiving a signal it never received before.
          </p>
        </div>
      </div>
    </div>

    {/* ── Thin rule divider (20.1 — Wave Divider) ── */}
    <div style={{ padding: "16px 24px" }}>
      <div style={{ borderTop: "1px solid #D4C9BC" }} />
    </div>

    {/* ════════════════ SECTION 5: SOFT CTA ════════════════ */}
    {/* CTA-2 — Soft Link + TRUST-4 — Dashed Policy Quote */}
    <div style={{ padding: "32px 24px" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 22, fontWeight: 700,
        lineHeight: 1.4, color: "#3D3A37", margin: "0 0 20px",
      }}>
        Here's what I'll leave you with:
      </h2>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
        color: "#5C5955", margin: "0 0 16px",
      }}>
        One pair of BrightKidCo underwear. $34.99. Backed by a 60-day guarantee, no questions, no pressure.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
        color: "#5C5955", margin: "0 0 16px",
      }}>
        That's not an investment in a product. It's an addition to whatever you're already doing. It doesn't replace your routine, your BCBA's protocol, or the approach that works for your child. It adds one thing your child's nervous system has been missing: a signal.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
        color: "#5C5955", margin: "0 0 16px",
      }}>
        If it helps, you'll know within 60 days. If it doesn't, you'll get your money back.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
        color: "#5C5955", margin: "0 0 24px",
      }}>
        And if thisn't the day, that's okay. The product will be here next month. So will I.
      </p>

      {/* CTA Card */}
      <div style={{
        background: "#F5F0EB",
        border: "2px solid #8BA89A",
        borderRadius: 12,
        padding: 24,
        textAlign: "center",
        boxShadow: "inset 0 0 12px rgba(60, 55, 50, 0.04)",
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
          color: "#5C5955", margin: "0 0 4px",
        }}>
          1 Pair, $34.99
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
          color: "#5C5955", margin: "0 0 20px",
        }}>
          60-Day Guarantee, No Questions, No Pressure.
        </p>

        {/* CTA Button: #7A9E8A Soft Sage */}
        <a href="#" style={{
          display: "inline-block",
          padding: "14px 28px",
          background: "#7A9E8A",
          color: "#FFFFFF",
          fontFamily: F.main,
          fontSize: 17,
          fontWeight: 700,
          textDecoration: "none",
          borderRadius: 6,
          boxShadow: "2px 2px 0 #3D3A37",
        }}>
          When you're ready, it's here.
        </a>
      </div>

      {/* "No pressure" micro-copy */}
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <span style={{
          fontFamily: "'Georgia', serif", fontSize: 13,
          fontStyle: "italic", color: "#5C5955",
          borderBottom: "1px dotted #D4C9BC",
          paddingBottom: 2,
        }}>
          No pressure
        </span>
      </div>
    </div>

    {/* ════════════════ SECTION 6: LENA SIGN-OFF (LONG VARIANT) ════════════════ */}
    {/* Transparent background, Georgia Regular 17px, left-aligned, max 480px */}
    <div style={{ padding: "8px 24px 32px", maxWidth: 480 }}>
      <p style={{
        fontFamily: "'Georgia', serif", fontSize: 17,
        lineHeight: 1.5, color: "#5C5955", margin: "0 0 16px",
      }}>
        Whatever you choose, thanks for reading this far. If thisn't the day, that's okay. The product will be here next month. So will I.
      </p>
      <p style={{
        fontFamily: "'Georgia', serif", fontSize: 17,
        lineHeight: 1.5, color: "#5C5955", margin: "0 0 16px",
      }}>
        I have two autistic sons. I know what it's like when "later" turns into another year. But I also know what it's like to push too early.
      </p>
      <p style={{
        fontFamily: "'Georgia', serif", fontSize: 17,
        lineHeight: 1.5, color: "#5C5955", margin: "0 0 20px",
      }}>
        Trust your read.
      </p>
      <p style={{
        fontFamily: "'Georgia', serif", fontSize: 19, fontWeight: 700,
        lineHeight: 1.5, color: "#5C5955", margin: 0,
      }}>
        Lena ——
      </p>
    </div>

    {/* ════════════════ SECTION 7: FOOTER ════════════════ */}
    {/* Hairline separator: 0.5px solid #E8E2D9 */}
    <div style={{ borderTop: "0.5px solid #E8E2D9", padding: "24px 24px 30px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.4,
        color: "#A99E93", margin: "0 0 4px",
      }}>
        BrightKidCo
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.4,
        color: "#A99E93", margin: "0 0 4px",
      }}>
        1234 Innovation Drive, Suite 200
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.4,
        color: "#A99E93", margin: "0 0 4px",
      }}>
        Portland, OR 97201
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.4,
        color: "#A99E93", margin: "0 0 10px",
      }}>
        United States
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.4,
        color: "#A99E93", margin: "0 0 6px",
      }}>
        No longer want these emails? <a href="#" style={{ color: "#A99E93", textDecoration: "underline" }}>Unsubscribe</a> or <a href="#" style={{ color: "#A99E93", textDecoration: "underline" }}>Manage Preferences</a>
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.4,
        color: "#A99E93", margin: "0 0 6px",
      }}>
        Questions? Reply to this email, Lena reads every response.
      </p>
      <p style={{
        fontFamily: "'Georgia', serif", fontSize: 10,
        fontStyle: "italic", color: "#A99E93",
        margin: "0 0 6px",
      }}>
        P.S., Lena reads every reply.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.4,
        color: "#A99E93", margin: 0,
      }}>
        © 2026 BrightKidCo. All rights reserved.
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_welcome_01_e8_l3 });
