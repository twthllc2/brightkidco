/* Checkout Flow — E1 | Cross-Level
   Wireframe: wireframes/checkout/checkout-03-e1.md
   Strategy: strategy-map.json → flows.checkout.emails.e1
   Generated: 2026-06-09
*/

// ══════════════════════════════════════════════════════
// SECTION 1: PREHEADER + HEADER
// ══════════════════════════════════════════════════════

const Email_checkout_03_e1 = () => (
  <EmailShell preheader={'Not chasing, just wondering if there\'s something we can help with before you go.'} bg="#FFFFFF">

    {/* ── Header ── */}
    <Header bg="#FFFFFF" />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-3 Permission Open
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 22px", textAlign: "center" }}>
      <h1 style={{
        fontSize: 32, lineHeight: 1.15, fontWeight: 700,
        margin: 0, letterSpacing: -0.5, color: B.ink,
      }}>
        {"You started checkout, here's the piece most parents are missing."}
      </h1>
      <p style={{
        fontSize: 17, lineHeight: 1.5, fontWeight: 500,
        color: B.soft, margin: "16px 0 0",
      }}>
        {"You started checkout, then stopped. That's okay. No hurry."}
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: TONAL SHIFT RULE — 1px #E8DED5
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "22px 0 0" }}>
      <div style={{ width: "100%", height: 1, background: "#E8DED5" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: LETTER — LETTER-02 Handwritten Opener (Lena's Voice)
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "22px 22px 0" }}>
      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 18px",
      }}>
        {"Whether your child is 3 or 10, verbal or not, if they don\u2019t seem to feel when they need to go, there\u2019s a reason standard methods haven\u2019t clicked."}
      </p>
      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 18px",
      }}>
        {"It\u2019s not stubbornness. It\u2019s not motivation. It\u2019s a "}
        <strong style={{ color: B.ink, fontWeight: 600 }}>signal-timing gap</strong>
        {" \u2014 the \u2018I need to go\u2019 message arrives from the body just a little too late for the brain to act on it. "}
        <span style={{ fontSize: 13, color: B.muted }}>Research shows this a real, measurable neurological difference (Nicholson et al. 2019).</span>
      </p>
      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: 0,
      }}>
        {"The Body-Signal Learning Layer in our underwear creates a gentle, sustained \u2018uh-oh\u2019 sensation for 30\u201360 seconds after every accident, giving the brain the feedback it\u2019s been missing. "}
        <strong style={{ color: B.ink, fontWeight: 600 }}>Not by training. By providing information.</strong>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: TESTIMONIAL — SP-01 Yellow Quote Block (Three-Family GF)
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "22px 22px 0" }}>
      <p style={{
        fontSize: 17, fontStyle: "italic", color: B.soft, margin: "0 0 16px",
      }}>
        {"Three different kids, one pattern. See if one sounds familiar:"}
      </p>

      <div style={{
        background: "#FBF7F1", borderRadius: 16, padding: "20px 22px",
        borderLeft: "3px solid #5DD07A", marginBottom: 18,
      }}>
        {/* Quote 1 */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 16 }}>
          <div style={{
            width: 12, height: 12, borderRadius: "50%",
            background: "#2BAEB4", opacity: 0.5, flexShrink: 0, marginTop: 5,
          }} />
          <p style={{
            fontSize: 16, fontStyle: "italic", color: B.ink, lineHeight: 1.5, margin: 0,
          }}>
            {"\u201CHe\u2019s been \u2018almost trained\u2019 for months. Talks about it. Won\u2019t do it.\u201D"}
          </p>
        </div>

        {/* Quote 2 */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 16 }}>
          <div style={{
            width: 12, height: 12, borderRadius: "50%",
            background: "#2BAEB4", opacity: 0.5, flexShrink: 0, marginTop: 5,
          }} />
          <p style={{
            fontSize: 16, fontStyle: "italic", color: B.ink, lineHeight: 1.5, margin: 0,
          }}>
            {"\u201CShe sat on the toilet for 30 minutes. Nothing. Pull-up back on? Immediate.\u201D"}
          </p>
        </div>

        {/* Quote 3 */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <div style={{
            width: 12, height: 12, borderRadius: "50%",
            background: "#2BAEB4", opacity: 0.5, flexShrink: 0, marginTop: 5,
          }} />
          <p style={{
            fontSize: 16, fontStyle: "italic", color: B.ink, lineHeight: 1.5, margin: 0,
          }}>
            {"\u201CHe doesn\u2019t react to being wet. Never has. We\u2019d stopped counting attempts.\u201D"}
          </p>
        </div>
      </div>

      <p style={{
        fontSize: 16, lineHeight: 1.6, color: B.soft, margin: 0, paddingBottom: 22,
      }}>
        {"If any of these are your morning, "}
        <strong style={{ color: B.ink, fontWeight: 600 }}>the missing piece is the same.</strong>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: PRODUCT — ProductShowcaseSoft
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 22px 22px" }}>
      <div style={{
        background: "#FFFFFF", border: "1.5px solid #1F2D2F",
        borderRadius: 20, overflow: "hidden",
        boxShadow: "4px 4px 0 #1F2D2F",
      }}>
        {/* Eyebrow */}
        <div style={{ textAlign: "center", padding: "20px 22px 0" }}>
          <div style={{
            fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase",
            color: B.teal, fontWeight: 700, marginBottom: 10,
          }}>
            YOUR CART
          </div>
        </div>

        {/* Hero shot */}
        <div style={{ position: "relative", background: "#FBF7F1", padding: "0 14px 14px" }}>
          <div style={{
            borderRadius: 20, overflow: "hidden",
            border: "1.5px solid #1F2D2F",
          }}>
            <img
              src="../../raw/product-photos/flat-lay/pocket-diaper-moon-cloud-blue.jpg"
              alt="BrightKidCo training pant in moon cloud blue pattern, flat lay"
              style={{
                width: "100%", height: 240, objectFit: "cover", display: "block",
              }}
            />
          </div>
          {/* Floating badge */}
          <div style={{
            position: "absolute", top: 24, right: 24,
            background: "#FFD866", border: "2px solid #1F2D2F",
            borderRadius: 999, padding: "6px 12px",
            fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
            transform: "rotate(4deg)", boxShadow: "2px 2px 0 #1F2D2F",
            display: "flex", alignItems: "center", gap: 5,
          }}>
            <span style={{ fontSize: 13 }}>&#10047;</span>
            <span>60 days calm</span>
          </div>
        </div>

        {/* Product info */}
        <div style={{ padding: "16px 22px 20px" }}>
          <p style={{
            fontSize: 22, fontWeight: 700, color: B.ink, margin: "0 0 4px",
          }}>
            {"Body-Signal Learning Layer\u2122 Pants"}
          </p>
          <p style={{
            fontSize: 16, color: B.soft, margin: 0,
          }}>
            {"Your cart is saved as-is."}
          </p>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: TRUST — TRUST-1 60-Day Seal
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 22px 22px" }}>
      <div style={{
        background: "#FBF7F1", border: "2px solid #5DD07A",
        borderRadius: 16, padding: 24, textAlign: "center",
      }}>
        {/* 60-Day Seal icon */}
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          background: "#5DD07A", display: "flex",
          alignItems: "center", justifyContent: "center",
          margin: "0 auto 16px",
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M9 12l2 2 4-4" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        </div>
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink, margin: "0 0 12px",
        }}>
          {"You don\u2019t have to believe me. 60 days to try it in your home, with your child, on your timeline. If nothing shifts for your child, no pause, no look, no step toward awareness, full refund. No forms, no hassle."}
        </p>
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink, fontWeight: 600, margin: 0,
        }}>
          {"Full refund. No forms, no hassle."}
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: CTA — CTA-11 Permission CTA
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 22px 22px", textAlign: "center" }}>
      <p style={{
        fontSize: 17, fontWeight: 700, color: B.ink, margin: "0 0 24px",
      }}>
        {"Complete your order. Your cart is saved as-is."}
      </p>
      <a href="#" style={{
        display: "inline-block", width: "100%", maxWidth: 280,
        padding: "0 32px", height: 52, lineHeight: "52px",
        background: "#2BAEB4", color: "#D8F57C",
        fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
        textDecoration: "none", borderRadius: 999, textAlign: "center",
      }}>
        {"Complete Your Order \u2192"}
      </a>
      <p style={{
        fontSize: 14, color: B.muted, fontStyle: "italic",
        margin: "20px 0 0",
      }}>
        {"Next time: Why this approach is different from everything you\u2019ve tried."}
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: SIGNOFF — Lena Sign-Off (SHORT variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#1F2D2F", padding: "22px 22px 36px" }}>
      <div style={{
        position: "relative", background: "#1F2A2C",
        border: "1.5px solid #2F3D40", borderRadius: 22,
        padding: "26px 24px 24px", overflow: "hidden",
      }}>
        {/* subtle top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg, #2BAEB4, #5DD07A)", opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FFD866 0%, #2BAEB4 100%)",
            padding: 2.5, position: "relative",
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6", display: "flex",
              alignItems: "center", justifyContent: "center",
              overflow: "hidden", border: "1.5px solid #1F2D2F",
            }}>
              <svg width="58" height="58" viewBox="0 0 58 58">
                <rect width="58" height="58" fill="#F5E8D0" />
                <circle cx="29" cy="22" r="10" fill="#D4A574" />
                <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                <text x="29" y="55" textAnchor="middle" fontSize="6" fill="#1F2D2F" fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
              </svg>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
              color: "#8FAFB2", fontWeight: 700, marginBottom: 2,
            }}>
              A note from
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
              Lena Bauer
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              {"Customer Support \u00B7 Mom of two autistic sons"}
            </div>
          </div>
        </div>

        {/* Dashed divider */}
        <div style={{
          borderTop: "1.5px dashed #3A4547", borderBottom: "1.5px dashed #3A4547",
          paddingTop: 16, paddingBottom: 16, marginBottom: 16,
        }}>
          <p style={{
            fontSize: 13, lineHeight: 1.65, color: "#B8CACD", margin: 0,
          }}>
            {"Thanks for being here. If you have a question, hit reply. You\u2019ll get me, not a template, not a bot. I read everything."}
          </p>
        </div>

        {/* Handwritten signature */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          paddingTop: 16, paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547",
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95,
              fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5,
            }}>
              Lena
            </div>
          </div>
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: FOOTER — BREZ-inspired
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px 30px", textAlign: "center" }}>
      <div style={{
        fontFamily: "'Fraunces', serif", fontSize: 20, fontStyle: "italic",
        fontWeight: 500, color: B.ink, marginBottom: 30, letterSpacing: -0.2,
      }}>
        {"Calm progress, one day at a time."}
      </div>

      {/* Footer links */}
      <div style={{ marginBottom: 14 }}>
        <a href="#" style={{ fontSize: 14, color: B.ink, fontWeight: 500, textDecoration: "none", margin: "0 10px" }}>Shop</a>
        <a href="#" style={{ fontSize: 14, color: B.ink, fontWeight: 500, textDecoration: "none", margin: "0 10px" }}>FAQ</a>
        <a href="#" style={{ fontSize: 14, color: B.ink, fontWeight: 500, textDecoration: "none", margin: "0 10px" }}>Contact</a>
      </div>

      {/* Social icons */}
      <div style={{ display: "flex", justifyContent: "center", gap: 22, margin: "14px 0 28px" }}>
        <a href="#">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill={B.ink} stroke="none" />
          </svg>
        </a>
        <a href="#">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8">
            <path d="M16 3h-3a5 5 0 0 0-5 5v3H5v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3z" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8">
            <path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Unsubscribe + legal */}
      <div style={{ fontSize: 11.5, color: B.muted, lineHeight: 1.65, margin: "0 auto", maxWidth: 340 }}>
        {"No longer want to receive these emails? "}
        <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>Unsubscribe</a>.
        <br />
        <span style={{ fontSize: 11 }}>
          {"123 Commerce Street, Suite 200, Portland, OR 97201"}
        </span>
      </div>
      <div style={{ marginTop: 12, fontSize: 11.5, color: B.muted, lineHeight: 1.65 }}>
        {"Questions? Reply to this email, Lena reads every response."}
      </div>

      {/* Gradient accent bar */}
      <div style={{ marginTop: 28, width: 60, height: 3, background: "linear-gradient(90deg, #2BAEB4, #5DD07A)", borderRadius: 3, margin: "28px auto 0" }} />
    </div>

  </EmailShell>
);

// Register on window for rendering
Object.assign(window, { Email_checkout_03_e1 });
