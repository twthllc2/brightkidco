/* Welcome Flow — E8 | L1 (Sarah)
   Wireframe: wireframes/welcome/welcome-01-e8-l1.md
   Strategy: strategy-map.json → welcome.emails.e8-l1
   Generated: 2026-06-09
*/

/* ── L1-specific palette (warm resolution, not in brand tokens) ── */
const L1C = {
  green: "#2D5A3D",
  terracotta: "#B55A3B",
  sageBorder: "#D0E0D0",
  offWhite: "#FDFCF8",
  bodyText: "#3A3530",
  heading: "#2C2420",
  socialBg: "#F9F6F0",
  guaranteeBg: "#E8F0E8",
  footerGrey: "#8A8580",
  white: "#FFFFFF",
  teal: "#2BAEB4",
  trustText: "#4A6568",
};

const Email_Welcome_E8_L1 = () => (
  <EmailShell
    preheader="The right approach can close the gap before September gets here. Here's what 21 days of emails boiled down to."
    bg={L1C.offWhite}
  >

    {/* ═══════════════ SECTION 1: LOGO HEADER + TERRACOTTA ACCENT ═══════════════ */}
    <div style={{ background: L1C.offWhite, padding: "28px 32px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
    </div>
    <div style={{ background: L1C.offWhite, padding: "12px 32px 0" }}>
      <div style={{ width: 60, height: 2, background: L1C.terracotta, margin: "0 auto" }} />
    </div>

    {/* ═══════════════ SECTION 2: HOOK (HERO-3) ═══════════════ */}
    <div style={{ background: L1C.offWhite, padding: "20px 32px 28px" }}>
      <h1 style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 22, lineHeight: 1.3, fontWeight: 700,
        color: L1C.heading, margin: "0 auto",
        textAlign: "center", maxWidth: 520,
      }}>
        Pre-K doesn't wait. You know that better than anyone. But the right approach can close the gap before September gets here.
      </h1>
    </div>

    {/* ═══════════════ SECTION 3: VALIDATION + RECAP (3-Column) ═══════════════ */}
    <div style={{ background: L1C.offWhite, padding: "0 32px 20px" }}>
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 16, lineHeight: 1.6, color: L1C.bodyText, margin: "0 0 16px",
      }}>
        You've read the science over these past three weeks. You've seen how the numbers stack up, 49% of autistic 4-5 year olds aren't toilet trained yet (Wiggins et al. 2022, N=743, CDC-funded). Not because their parents didn't try. Because traditional methods assume a body signal that hasn't arrived yet. I know that hit close to home when you first read it. It did for me too.
      </p>
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 16, lineHeight: 1.6, color: L1C.bodyText, margin: "0 0 16px",
      }}>
        Here's what 21 days of emails boiled down to:
      </p>

      {/* 3-column recap grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {/* Column 1 — The Problem */}
        <div style={{
          background: L1C.white, borderRadius: 12,
          padding: "16px 14px",
          border: `1px solid ${L1C.sageBorder}`,
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}>
          <div style={{ fontSize: 20, marginBottom: 6 }}>🧠</div>
          <div style={{
            fontFamily: "'Georgia', serif",
            fontSize: 14, fontWeight: 700, color: L1C.heading, marginBottom: 6,
          }}>The Problem</div>
          <p style={{
            fontFamily: "'Georgia', serif",
            fontSize: 13, lineHeight: 1.5, color: L1C.bodyText, margin: 0,
          }}>
            Your child may not feel the body signal that tells them to go. It's neurology, not willingness.
          </p>
        </div>

        {/* Column 2 — The Mechanism */}
        <div style={{
          background: L1C.white, borderRadius: 12,
          padding: "16px 14px",
          border: `1px solid ${L1C.sageBorder}`,
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}>
          <div style={{ fontSize: 20, marginBottom: 6 }}>⚙️</div>
          <div style={{
            fontFamily: "'Georgia', serif",
            fontSize: 14, fontWeight: 700, color: L1C.heading, marginBottom: 6,
          }}>The Mechanism</div>
          <p style={{
            fontFamily: "'Georgia', serif",
            fontSize: 13, lineHeight: 1.5, color: L1C.bodyText, margin: 0,
          }}>
            The Body-Signal Learning Layer creates a gentle sensation that teaches the brain to recognize the signal.
          </p>
        </div>

        {/* Column 3 — The Proof */}
        <div style={{
          background: L1C.white, borderRadius: 12,
          padding: "16px 14px",
          border: `1px solid ${L1C.sageBorder}`,
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}>
          <div style={{ fontSize: 20, marginBottom: 6 }}>🔬</div>
          <div style={{
            fontFamily: "'Georgia', serif",
            fontSize: 14, fontWeight: 700, color: L1C.heading, marginBottom: 6,
          }}>The Proof</div>
          <p style={{
            fontFamily: "'Georgia', serif",
            fontSize: 13, lineHeight: 1.5, color: L1C.bodyText, margin: 0,
          }}>
            Parents report their children saying 'wet' for the first time within two weeks. The feedback loop forms.
          </p>
        </div>
      </div>
    </div>

    {/* ═══════════════ DOT DIVIDER ═══════════════ */}
    <div style={{ padding: "20px 0", textAlign: "center", letterSpacing: 8, color: L1C.footerGrey, fontSize: 6, opacity: 0.7 }}>
      · · ·
    </div>

    {/* ═══════════════ SECTION 4: SOCIAL PROOF (SP-01 — Warm Cream) ═══════════════ */}
    <div style={{ background: L1C.offWhite, padding: "0 32px 20px" }}>
      <div style={{
        background: L1C.socialBg, borderRadius: 12,
        padding: "20px 24px",
        borderLeft: `4px solid ${L1C.terracotta}`,
      }}>
        <div style={{
          fontFamily: "'Georgia', serif",
          fontSize: 14, color: L1C.terracotta, fontWeight: 500, marginBottom: 16,
        }}>
          Real parents, real words:
        </div>

        {/* Quote 1 */}
        <div style={{ marginBottom: 12 }}>
          <p style={{
            fontFamily: "'Georgia', serif",
            fontSize: 16, lineHeight: 1.6, color: L1C.bodyText,
            fontStyle: "italic", margin: "0 0 4px",
          }}>
            "He says 'I need to pee' AFTER it's already happened. Some days he's great, other days zero."
          </p>
          <div style={{
            fontFamily: "'Georgia', serif",
            fontSize: 13, color: L1C.footerGrey,
          }}>Sarah, L1 mom</div>
        </div>

        {/* Quote 2 */}
        <div style={{ marginBottom: 12 }}>
          <p style={{
            fontFamily: "'Georgia', serif",
            fontSize: 16, lineHeight: 1.6, color: L1C.bodyText,
            fontStyle: "italic", margin: "0 0 4px",
          }}>
            "He had a perfect week, then a month of accidents. I didn't know if it was refusal or inability. Turns out it was neither, he just couldn't feel it."
          </p>
          <div style={{
            fontFamily: "'Georgia', serif",
            fontSize: 13, color: L1C.footerGrey,
          }}>L1 parent, 3 weeks into Body-Signal</div>
        </div>

        {/* Quote 3 */}
        <div>
          <p style={{
            fontFamily: "'Georgia', serif",
            fontSize: 16, lineHeight: 1.6, color: L1C.bodyText,
            fontStyle: "italic", margin: "0 0 4px",
          }}>
            "He went today! Once! But he went!"
          </p>
          <div style={{
            fontFamily: "'Georgia', serif",
            fontSize: 13, color: L1C.footerGrey,
          }}>Real review, real moment</div>
        </div>
      </div>
    </div>

    {/* ═══════════════ DOT DIVIDER ═══════════════ */}
    <div style={{ padding: "20px 0", textAlign: "center", letterSpacing: 8, color: L1C.footerGrey, fontSize: 6, opacity: 0.7 }}>
      · · ·
    </div>

    {/* ═══════════════ SECTION 5: PRODUCT INTRO (Three-Layer Stack) ═══════════════ */}
    <div style={{ background: L1C.offWhite, padding: "0 32px 24px" }}>
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 16, lineHeight: 1.6, color: L1C.bodyText, margin: "0 0 16px",
      }}>
        The 3+3 Bundle was designed for this exact situation. Six pairs mean you always have a clean set ready, no rushing laundry, no 'he's in pull-ups because everything else is dirty.' Three-layer system:
      </p>

      <div style={{
        display: "flex", flexDirection: "column", gap: 14,
        maxWidth: 520,
      }}>
        {/* Layer 1 — Cotton Inner */}
        <div style={{
          display: "flex", gap: 14, alignItems: "flex-start",
          padding: "14px 16px",
          background: L1C.white, borderRadius: 12,
          borderLeft: `4px solid ${L1C.teal}`,
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}>
          <div style={{ fontSize: 20, flexShrink: 0 }}>💧</div>
          <div>
            <div style={{
              fontFamily: "'Georgia', serif",
              fontSize: 15, fontWeight: 700, color: L1C.heading, marginBottom: 4,
            }}>
              ① Cotton Inner
            </div>
            <div style={{
              fontFamily: "'Georgia', serif",
              fontSize: 14, lineHeight: 1.5, color: L1C.bodyText,
            }}>
              ✦ Gentle wetness signal that creates the 'uh-oh' moment
            </div>
          </div>
        </div>

        {/* Layer 2 — Smart Absorption */}
        <div style={{
          display: "flex", gap: 14, alignItems: "flex-start",
          padding: "14px 16px",
          background: L1C.white, borderRadius: 12,
          borderLeft: `4px solid ${L1C.teal}`,
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}>
          <div style={{ fontSize: 20, flexShrink: 0 }}>🛡</div>
          <div>
            <div style={{
              fontFamily: "'Georgia', serif",
              fontSize: 15, fontWeight: 700, color: L1C.heading, marginBottom: 4,
            }}>
              ② Smart Absorption
            </div>
            <div style={{
              fontFamily: "'Georgia', serif",
              fontSize: 14, lineHeight: 1.5, color: L1C.bodyText,
            }}>
              ✦ Protects without blocking the feedback loop
            </div>
          </div>
        </div>

        {/* Layer 3 — Leak-Resistant Barrier */}
        <div style={{
          display: "flex", gap: 14, alignItems: "flex-start",
          padding: "14px 16px",
          background: L1C.white, borderRadius: 12,
          borderLeft: `4px solid ${L1C.teal}`,
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}>
          <div style={{ fontSize: 20, flexShrink: 0 }}>✓</div>
          <div>
            <div style={{
              fontFamily: "'Georgia', serif",
              fontSize: 15, fontWeight: 700, color: L1C.heading, marginBottom: 4,
            }}>
              ③ Leak-Resistant Barrier
            </div>
            <div style={{
              fontFamily: "'Georgia', serif",
              fontSize: 14, lineHeight: 1.5, color: L1C.bodyText,
            }}>
              ✦ Confidence for outings and Pre-K drop-offs
            </div>
          </div>
        </div>
      </div>

      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 16, lineHeight: 1.6, color: L1C.bodyText, margin: "16px 0 0",
      }}>
        At $79.99 with free shipping, that's less than two months of disposable pull-ups. And unlike pull-ups, these actually teach something.
      </p>
    </div>

    {/* ═══════════════ DOT DIVIDER ═══════════════ */}
    <div style={{ padding: "20px 0", textAlign: "center", letterSpacing: 8, color: L1C.footerGrey, fontSize: 6, opacity: 0.7 }}>
      · · ·
    </div>

    {/* ═══════════════ SECTION 6: GUARANTEE PANEL ═══════════════ */}
    <div style={{ background: L1C.offWhite, padding: "0 32px 24px" }}>
      <div style={{
        background: L1C.guaranteeBg, borderRadius: 12,
        border: `1px solid ${L1C.sageBorder}`,
        padding: "20px 24px",
      }}>
        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 16, lineHeight: 1.6, color: L1C.bodyText, margin: "0 0 14px",
        }}>
          The 60-day guarantee isn't a sales tactic. It's the only honest offer when the outcome depends on your child's nervous system.
        </p>
        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 16, lineHeight: 1.6, color: L1C.bodyText, margin: "0 0 14px",
        }}>
          Try the 3+3 Bundle for 60 days. If your child shows no sign of body awareness, no pause, no look down, no step toward the potty, send them back. Full refund. No hoops, no restocking fees, no 'but you need to try harder.'
        </p>
        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 14, lineHeight: 1.5, color: L1C.footerGrey,
          fontStyle: "italic", margin: 0,
        }}>
          Your judgment, your timeline, your call.
        </p>
      </div>
    </div>

    {/* ═══════════════ SECTION 7: CTA + TRUST SIGNALS ═══════════════ */}
    <div style={{ background: L1C.offWhite, padding: "28px 32px" }}>
      {/* Primary CTA Button */}
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <style>{`
          @keyframes ctaPulse {
            0%, 100% { border-color: ${L1C.green}; }
            50% { border-color: #4A7A5A; }
          }
          @media (prefers-reduced-motion: reduce) {
            .l1-cta-btn { animation: none !important; }
          }
        `}</style>
        <a href="#" style={{
          display: "inline-block",
          width: "100%", maxWidth: 300, padding: "18px 24px",
          background: L1C.green, color: L1C.white,
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: 18, fontWeight: 700, textDecoration: "none",
          borderRadius: 6, textAlign: "center",
          border: `2px solid ${L1C.green}`,
          animation: "ctaPulse 3s ease-in-out infinite",
        }} className="l1-cta-btn">
          Get the 3+3 Bundle, $79.99
        </a>
      </div>

      {/* Subtext */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 13, lineHeight: 1.4, color: L1C.footerGrey,
        textAlign: "center", margin: "0 0 12px",
      }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>

      {/* Trust signals */}
      <p style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 13, lineHeight: 1.4, color: L1C.trustText,
        textAlign: "center", margin: "0 0 14px",
      }}>
        ✓ Free shipping on all bundles · ✓ 60-day money-back guarantee, no risk · ✓ 24/7 parent support, real humans, real answers
      </p>

      {/* Secondary link */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 14, color: L1C.terracotta,
        textAlign: "center", margin: 0,
      }}>
        <a href="#" style={{ color: L1C.terracotta, textDecoration: "underline" }}>
          or browse individual pairs starting at $34.99
        </a>
      </p>
    </div>

    {/* ═══════════════ SECTION 8: LENA SIGN-OFF ═══════════════ */}
    <div style={{ background: L1C.offWhite, padding: "0 32px 24px" }}>
      <div style={{
        background: L1C.white, borderRadius: 12,
        padding: "24px 24px",
        border: `1px solid ${L1C.sageBorder}`,
      }}>
        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 16, lineHeight: 1.6, color: L1C.bodyText, margin: "0 0 14px",
        }}>
          Whatever you choose, thanks for reading this far. If thisn't the day, that's okay. The product will be here next month. So will I.
        </p>
        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 16, lineHeight: 1.6, color: L1C.bodyText, margin: "0 0 14px",
        }}>
          I have two autistic sons. I know what it's like when 'later' turns into another year. But I also know what it's like to push too early.
        </p>
        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 16, lineHeight: 1.6, color: L1C.bodyText, margin: "0 0 20px",
        }}>
          Trust your read.
        </p>
        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 16, fontStyle: "italic", color: L1C.bodyText, margin: "0 0 4px",
        }}>
          With care,
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: "'Georgia', serif",
              fontSize: 22, color: L1C.heading, opacity: 0.6, margin: "0 0 4px",
            }}>
              Lena —,
            </div>
          </div>
          {/* Signature flourish SVG */}
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke={L1C.heading} strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke={L1C.heading} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* P.S. */}
        <p style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: 13, lineHeight: 1.65, color: L1C.footerGrey, fontStyle: "italic",
          margin: "16px 0 0",
        }}>
          P.S. Not sure yet? Reply to this email and tell me about your child. I personally read every response, no bots, no templates. If BrightKidCo isn't right for your family, I'll tell you honestly.
        </p>
      </div>
    </div>

    {/* ═══════════════ SECTION 9: FOOTER ═══════════════ */}
    <div style={{ background: L1C.offWhite, padding: "30px 32px 16px", textAlign: "center" }}>
      <div style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 12, lineHeight: 1.4, color: L1C.footerGrey,
      }}>
        <div style={{ marginBottom: 4 }}>BrightKidCo LLC</div>
        <div>123 Commerce Street, Suite 200</div>
        <div style={{ marginBottom: 12 }}>Portland, OR 97204</div>
        <div>
          <a href="#" style={{ color: L1C.footerGrey, textDecoration: "underline" }}>Unsubscribe</a>
          {" | "}
          <a href="#" style={{ color: L1C.footerGrey, textDecoration: "underline" }}>Manage Preferences</a>
        </div>
        <div style={{ marginTop: 8, fontStyle: "italic" }}>
          Questions? Hit reply, Lena reads every message.
        </div>
        <div style={{ marginTop: 8 }}>© 2026 BrightKidCo. All rights reserved.</div>
      </div>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E8_L1 });
