/* PP-Extended Education — E5 | Level 1 (Sarah)
   Wireframe: wireframes/pp-extended-ed/pped-22-e5-l1.md
   Strategy: strategy-map.json → flows.pp-extended-ed.emails.e5-l1
   Generated: 2026-06-09
*/

const Email_pped_22_e5_l1 = () => {
  const B = window.BRAND;
  const F = window.FONT;

  return (
    <EmailShell preheader="Pre-K is coming. Here's the school readiness protocol — teacher conversation, pull-up system, and the rhythm that keeps learning alive." bg="#FAF9F7">

      {/* ══════════════════════════════════════════════════════
         SECTION 1: HEADER
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
        <img src="../assets/brightkidco-logo-v2.png" alt="BrightKidCo" style={{ height: 34 }} />
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 2: HERO — HERO-17 Social Proof Hero
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#FFFFFF", padding: "34px 24px 0" }}>
        {/* Mint Badge */}
        <div style={{ marginBottom: 16 }}>
          <span style={{
            display: "inline-block",
            background: "#DBFFCD",
            padding: "6px 16px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 700,
            fontFamily: "Questrial, sans-serif",
            color: B.ink,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>School Readiness</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 22,
          lineHeight: 1.3,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
          color: B.ink,
          margin: "0 0 10px",
          textAlign: "left",
        }}>
          Pre-K is coming, here's how to set him up
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: 16,
          lineHeight: 1.5,
          fontFamily: "Arial, Helvetica, sans-serif",
          color: B.soft,
          margin: "0 0 32px",
        }}>
          School readiness, teacher conversations and the window you still have
        </p>

        {/* Pathways Illustration — SVG placeholder */}
        <div style={{
          width: "100%",
          height: 180,
          borderRadius: 20,
          background: "#FAF9F7",
          border: `2px dashed ${B.teal}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}>
          <svg width="400" height="160" viewBox="0 0 400 160">
            {/* Child figure */}
            <circle cx="80" cy="60" r="18" fill="#D4A574" />
            <path d="M60,120 C60,85 68,78 80,78 C92,78 100,85 100,120 Z" fill="#C98C6B" />
            <line x1="65" y1="95" x2="50" y2="110" stroke="#C98C6B" strokeWidth="3" strokeLinecap="round" />
            <line x1="95" y1="95" x2="110" y2="110" stroke="#C98C6B" strokeWidth="3" strokeLinecap="round" />
            <line x1="72" y1="120" x2="72" y2="145" stroke="#C98C6B" strokeWidth="3" strokeLinecap="round" />
            <line x1="88" y1="120" x2="88" y2="145" stroke="#C98C6B" strokeWidth="3" strokeLinecap="round" />

            {/* Solid path (weeks 1-7) */}
            <path d="M100,90 C140,88 160,85 200,85 C230,85 250,88 270,90" stroke="#5DD07A" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Dotted path (Pre-K horizon) */}
            <path d="M270,90 C300,92 320,95 350,95" stroke="#5DD07A" strokeWidth="2" fill="none" strokeDasharray="6,5" strokeLinecap="round" />

            {/* Growth markers */}
            <circle cx="140" cy="87" r="4" fill="#FFD866" />
            <circle cx="190" cy="85" r="5" fill="#FFD866" />
            <circle cx="230" cy="86" r="4" fill="#FFD866" />
            {/* Easter egg — larger yellow leaf */}
            <path d="M255,78 C260,72 268,72 270,78 C268,84 260,84 255,78 Z" fill="#F5C84B" />

            {/* Potty icon */}
            <rect x="350" y="88" width="18" height="22" rx="4" fill="#E8E4DE" stroke={B.ink} strokeWidth="1.5" />
            <ellipse cx="359" cy="86" rx="12" ry="5" fill="#E8E4DE" stroke={B.ink} strokeWidth="1.5" />

            {/* Schoolhouse silhouette at horizon */}
            <rect x="340" y="40" width="30" height="24" rx="2" fill="#D0D8D7" opacity="0.4" />
            <polygon points="340,42 355,28 370,42" fill="#D0D8D7" opacity="0.4" />
            <rect x="351" y="50" width="8" height="14" rx="1" fill="#D0D8D7" opacity="0.3" />
          </svg>

          {/* Clock tick marks — Easter egg */}
          <div style={{ position: "absolute", bottom: 12, right: 14, display: "flex", gap: 4, transform: "rotate(-25deg)" }}>
            <div style={{ width: 4, height: 12, background: "#9AA8A7", opacity: 0.1, borderRadius: 2 }} />
            <div style={{ width: 4, height: 16, background: "#9AA8A7", opacity: 0.1, borderRadius: 2 }} />
            <div style={{ width: 4, height: 12, background: "#9AA8A7", opacity: 0.1, borderRadius: 2 }} />
            <div style={{ width: 4, height: 8, background: "#9AA8A7", opacity: 0.1, borderRadius: 2 }} />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         GRADIENT BAND (UTIL-01)
         ══════════════════════════════════════════════════════ */}
      <div style={{ height: 4, background: B.gradient }} />

      {/* ══════════════════════════════════════════════════════
         SECTION 3: LETTER — LETTER-03 Hook + Validation
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#FBF7EB", borderRadius: 20, margin: "32px 24px", padding: "32px 24px" }}>
        <p style={{
          fontSize: 16, lineHeight: 1.5,
          fontFamily: "Arial, Helvetica, sans-serif",
          color: B.soft, margin: "0 0 14px",
        }}>
          It's been about seven weeks since you started. Maybe you're seeing small shifts, a pause, a look down, a walk toward the bathroom that used to end in a meltdown. Maybe it's slower than you hoped. Either way, here's what I know about where you are right now:
        </p>
        <p style={{
          fontSize: 18, lineHeight: 1.4,
          fontFamily: "Georgia, serif",
          fontWeight: 700,
          color: B.ink, margin: "0 0 14px",
        }}>
          Pre-K is coming. And you're wondering if he'll be ready.
        </p>
        <p style={{
          fontSize: 16, lineHeight: 1.5,
          fontFamily: "Arial, Helvetica, sans-serif",
          color: B.soft, margin: 0,
        }}>
          That question sits heavy. I get it. Both my sons went through this, the calendar ticking while the progress felt like millimeters.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 4: PULL-QUOTE
         ══════════════════════════════════════════════════════ */}
      <div style={{
        background: "#FBF7EB",
        borderRadius: 20,
        margin: "0 24px 32px",
        padding: "20px 24px",
        borderLeft: "3px solid #D4A853",
      }}>
        <p style={{
          fontFamily: "Fraunces, Georgia, serif",
          fontSize: 22,
          fontStyle: "italic",
          color: "#D4A853",
          lineHeight: 1.4,
          margin: 0,
        }}>
          "Your child's progress in the last seven weeks is real. Even if it doesn't look like 'trained' yet."
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 5: SCIENCE CITATION
         ══════════════════════════════════════════════════════ */}
      <div style={{
        background: "#FBF7EB",
        borderRadius: 16,
        margin: "0 24px 32px",
        padding: "22px 24px",
      }}>
        <p style={{
          fontSize: 15, lineHeight: 1.5,
          fontFamily: "Arial, Helvetica, sans-serif",
          color: B.soft, margin: 0,
        }}>
          Research shows autistic children have significantly reduced body awareness, the ability to sense internal body states like bladder fullness (Nicholson et al., 2019, Journal of Autism and Developmental Disorders). What you're seeing over these weeks isn't failure. It's a nervous system literally <em>building new pathways</em>.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         GRADIENT BAND
         ══════════════════════════════════════════════════════ */}
      <div style={{ height: 4, background: B.gradient }} />

      {/* ══════════════════════════════════════════════════════
         SECTION 6: EDU-3 — SCHOOL READINESS CHECKLIST
         ══════════════════════════════════════════════════════ */}
      <div style={{
        background: "#FFFFFF",
        borderRadius: 20,
        margin: "32px 24px",
        padding: "22px 24px",
      }}>
        {/* Section intro */}
        <p style={{
          fontSize: 16, lineHeight: 1.5,
          fontFamily: "Arial, Helvetica, sans-serif",
          color: B.ink, fontWeight: 700,
          margin: "0 0 20px",
        }}>
          Here are three things you can start this week:
        </p>

        {/* ── Step 1: The teacher conversation template ── */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "#039902", color: "#FFFFFF",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 700,
              fontFamily: "Arial, Helvetica, sans-serif",
              flexShrink: 0,
            }}>1</div>
            <div style={{
              fontSize: 18, fontWeight: 700,
              fontFamily: "Georgia, serif",
              color: B.ink,
            }}>The teacher conversation template</div>
          </div>
          {/* Block quote with mint left bar */}
          <div style={{
            borderLeft: "3px solid #DBFFCD",
            paddingLeft: 12,
          }}>
            <p style={{
              fontSize: 15, fontStyle: "italic",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: B.soft, lineHeight: 1.5, margin: 0,
            }}>
              "My son is autistic. He's learning to connect body signals to the bathroom, but right now the signal arrives AFTER he needs to go. We use BrightKidCo underwear that gives him a gentle sensation so his brain learns. When he has an accident, please just help him change quietly. No shame, no pressure. We're building awareness, not compliance."
            </p>
          </div>
        </div>

        {/* ── Step 2: Pull-up-over-underwear (MINT HIGHLIGHT) ── */}
        <div style={{
          background: "#DBFFCD",
          borderRadius: 16,
          padding: "18px 20px",
          marginBottom: 24,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "#039902", color: "#FFFFFF",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 700,
              fontFamily: "Arial, Helvetica, sans-serif",
              flexShrink: 0,
            }}>2</div>
            <div style={{
              fontSize: 18, fontWeight: 700,
              fontFamily: "Georgia, serif",
              color: B.ink,
            }}>The pull-up-over-underwear system</div>
          </div>
          <p style={{
            fontSize: 15, lineHeight: 1.5,
            fontFamily: "Arial, Helvetica, sans-serif",
            color: B.ink, margin: 0,
          }}>
            Send him to school in a thin pull-up OVER his BrightKidCo underwear. This does two things: The pull-up protects against accidents in the classroom. The underwear underneath still has skin contact, so the body-signal learning continues throughout the school day.
          </p>
        </div>

        {/* ── Step 3: Morning and after-school rhythm ── */}
        <div style={{ marginBottom: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "#039902", color: "#FFFFFF",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 700,
              fontFamily: "Arial, Helvetica, sans-serif",
              flexShrink: 0,
            }}>3</div>
            <div style={{
              fontSize: 18, fontWeight: 700,
              fontFamily: "Georgia, serif",
              color: B.ink,
            }}>The morning and after-school rhythm</div>
          </div>
          <p style={{
            fontSize: 15, lineHeight: 1.5,
            fontFamily: "Arial, Helvetica, sans-serif",
            color: B.soft, margin: "0 0 10px",
          }}>
            <strong style={{ color: B.ink }}>Morning:</strong> 10 minutes of calm bathroom time before leaving. No pressure to perform. Just the routine of sitting with his underwear on.
          </p>
          <p style={{
            fontSize: 15, lineHeight: 1.5,
            fontFamily: "Arial, Helvetica, sans-serif",
            color: B.soft, margin: 0,
          }}>
            <strong style={{ color: B.ink }}>After-school:</strong> 30 minutes in BrightKidCo underwear only (no pull-up) when he gets home.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         GRADIENT BAND
         ══════════════════════════════════════════════════════ */}
      <div style={{ height: 4, background: B.gradient }} />

      {/* ══════════════════════════════════════════════════════
         SECTION 7: CTA-5 — PRODUCT CTA
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#FFFFFF", padding: "32px 24px", textAlign: "center" }}>
        <p style={{
          fontSize: 16, lineHeight: 1.5,
          fontFamily: "Arial, Helvetica, sans-serif",
          color: B.ink, margin: "0 0 20px",
        }}>
          The 3+3 Bundle is still the best place to start if you haven't tried it yet, 6 pairs, free shipping, and the 60-day guarantee. If you already have pairs, one extra set means more learning time between laundry cycles.
        </p>
        <a href="#" style={{
          display: "inline-block",
          padding: "17px 32px",
          background: "#039902",
          color: "#FFFFFF",
          fontSize: 16, fontWeight: 700,
          fontFamily: "Arial, Helvetica, sans-serif",
          textDecoration: "none",
          borderRadius: 999,
          minWidth: 200,
          minHeight: 44,
          lineHeight: "44px",
          textAlign: "center",
        }}>Shop the 3+3 Bundle →</a>
        <p style={{
          fontSize: 14, lineHeight: 1.5,
          fontFamily: "Arial, Helvetica, sans-serif",
          color: "#4A4A4A", margin: "16px 0 0",
          fontStyle: "italic",
        }}>
          60 days to try. Full refund if it doesn't work for your child. Your judgment.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 8: SIGNOFF — LENA (MEDIUM)
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "0 24px 32px", background: "#FAF9F7" }}>
        <div style={{
          background: "#1F2A2C",
          border: "1.5px solid #2F3D40",
          borderRadius: 22,
          padding: "26px 24px 24px",
          overflow: "hidden",
          position: "relative",
        }}>
          {/* Top gradient accent */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 4,
            background: B.gradient, opacity: 0.9,
          }} />

          {/* Top row: avatar + name/role */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <div style={{
              width: 58, height: 58, flexShrink: 0,
              borderRadius: "50%",
              background: `linear-gradient(135deg, #FFD866 0%, ${B.teal} 100%)`,
              padding: 2.5,
            }}>
              <div style={{
                width: "100%", height: "100%", borderRadius: "50%",
                background: "#FFFDF6",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: `1.5px solid ${B.ink}`,
              }}>
                <svg width="58" height="58" viewBox="0 0 58 58">
                  <rect width="58" height="58" fill="#F5E8D0" />
                  <circle cx="29" cy="22" r="10" fill="#D4A574" />
                  <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                  <text x="29" y="55" textAnchor="middle" fontSize="6" fill={B.ink} fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
                </svg>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
                color: "#8FAFB2", fontWeight: 700, marginBottom: 2,
              }}>A note from</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
                Lena Bauer
              </div>
              <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
                Customer Support · Mom of two autistic sons
              </div>
            </div>
          </div>

          {/* Handwritten signature */}
          <div style={{
            display: "flex", alignItems: "center", gap: 14,
            paddingTop: 16, paddingBottom: 16,
            borderTop: "1.5px dashed #3A4547",
            borderBottom: "1.5px dashed #3A4547",
            marginBottom: 16,
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, color: "#B8CACD", marginBottom: 2, fontFamily: "Georgia, serif" }}>
                With understanding,
              </div>
              <div style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 42, lineHeight: 0.95, fontWeight: 500,
                color: "#D8F57C", letterSpacing: -0.5, marginTop: 2,
              }}>Lena</div>
            </div>
            <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
              <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M48,12 L52,10 L50,14" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* P.S. */}
          <div style={{
            fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic",
          }}>
            <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>P.S.</span>
            If your Pre-K asks about accommodations, reply to this email and I'll send you a one-page teacher info sheet that explains body-signal learning in teacher-friendly language. I send these to every parent who asks.
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 9: FOOTER
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#FFFFFF", padding: "30px 24px 30px", textAlign: "center" }}>
        {/* Tagline */}
        <div style={{
          fontFamily: "Fraunces, Georgia, serif",
          fontSize: 20, fontStyle: "italic", fontWeight: 500,
          color: B.ink, marginBottom: 30, letterSpacing: -0.2,
        }}>
          "Built for the brain that learns differently."
        </div>

        {/* Social icons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 22, margin: "14px 0 28px" }}>
          <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill={B.ink} stroke="none" /></svg></a>
          <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8"><path d="M16 3h-3a5 5 0 0 0-5 5v3H5v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3z" strokeLinejoin="round" /></svg></a>
          <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8"><path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
        </div>

        {/* Unsubscribe + Address */}
        <div style={{ fontSize: 11.5, color: B.muted, lineHeight: 1.65, margin: "0 auto", maxWidth: 340 }}>
          No longer want to receive these emails? <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>Unsubscribe</a>.<br />
          <span style={{ fontSize: 11 }}>You're receiving this because you signed up at brightkidco.com and indicated your child is in the Pre-K window.</span><br />
          <span style={{ fontSize: 11 }}>123 Parent Support Lane, Los Angeles, CA 90001</span>
        </div>

        {/* 60-Day Guarantee */}
        <div style={{ marginTop: 28 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: B.ink, marginBottom: 4 }}>60-Day Money-Back Guarantee</div>
          <div style={{ fontSize: 13, color: B.soft }}>Your judgment, your timeline. No questions asked.</div>
        </div>

        {/* Gradient bar */}
        <div style={{ margin: "20px auto 0", width: 60, height: 3, background: B.gradient, borderRadius: 3 }} />
      </div>

    </EmailShell>
  );
};

Object.assign(window, { Email_pped_22_e5_l1 });
