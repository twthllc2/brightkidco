/* PP-Extended Education — E1 | General Family (GF)
   Wireframe: wireframes/pp-extended-ed/pped-22-e1-gf.md
   Strategy: strategy-map.json → flows.pp-extended-ed.emails.e1-gf
   Generated: 2026-06-09
*/

const Email_pped_22_e1_gf = () => {
  const B = window.BRAND;
  const F = window.FONT;

  /* ── DESDEEP-5: Border Play divider ── */
  const BorderPlay = ({ opacity = 0.3, height = 24 }) => (
    <div style={{ padding: "14px 22px 0" }}>
      <div style={{
        height,
        border: `1px solid rgba(43,174,180,${opacity})`,
        borderRadius: 16,
      }} />
    </div>
  );

  /* ── Tonal shift rule ── */
  const TonalRule = () => (
    <div style={{ padding: "20px 0 0" }}>
      <div style={{ height: 1, background: "#E8DED5" }} />
    </div>
  );

  return (
    <EmailShell preheader="The signal arrives, just too late. Here's why that happens, and what it means for your child's nervous system." bg={B.paper}>

      {/* ══════════════════════════════════════════════════════
         SECTION 1: HEADER
         ══════════════════════════════════════════════════════ */}
      <Header bg={B.paper} />

      {/* ══════════════════════════════════════════════════════
         SECTION 2: HERO — HERO-13 Scientific Hook
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "0 22px", background: B.paper, textAlign: "center" }}>
        {/* Eyebrow */}
        <div style={{
          fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase",
          color: B.teal, fontWeight: 700, marginBottom: 10,
          paddingTop: 20, fontFamily: F.main,
        }}>
          UNDERSTANDING BODY SIGNALS
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 30, lineHeight: 1.2, fontWeight: 400,
          letterSpacing: -0.3, color: B.ink, margin: "0 0 16px",
          fontFamily: F.main,
        }}>
          When your child doesn't feel when they need to go
        </h1>

        {/* Signal pathway SVG illustration */}
        <div style={{
          background: "#FBF7F1", borderRadius: 20,
          padding: "12px 0", marginBottom: 16,
        }}>
          <svg width="420" height="160" viewBox="0 0 420 160" style={{ maxWidth: "100%" }}>
            {/* Body zone — amber glow */}
            <circle cx="70" cy="80" r="30" fill="#FFD866" opacity="0.18" />
            <circle cx="70" cy="80" r="18" fill="#FFD866" opacity="0.35" />
            <text x="70" y="125" textAnchor="middle" fontSize="9" fill={B.muted} fontFamily={F.main}>Body</text>

            {/* Signal path — dotted, teal */}
            <line x1="100" y1="80" x2="175" y2="80" stroke={B.teal} strokeWidth="2" strokeDasharray="6,4" opacity="0.55" />
            <circle cx="138" cy="80" r="4" fill={B.teal} opacity="0.3" />

            {/* Delay zone */}
            <rect x="180" y="64" width="56" height="32" rx="10" fill={B.teal} opacity="0.06" />
            <text x="208" y="84" textAnchor="middle" fontSize="8" fill={B.muted} fontFamily={F.main}>delay</text>

            {/* Continued path — faded */}
            <line x1="240" y1="80" x2="315" y2="80" stroke={B.teal} strokeWidth="2" strokeDasharray="6,4" opacity="0.35" />
            <circle cx="278" cy="80" r="4" fill={B.teal} opacity="0.18" />

            {/* Brain zone */}
            <circle cx="350" cy="80" r="30" fill={B.teal} opacity="0.1" />
            <circle cx="350" cy="80" r="18" fill={B.teal} opacity="0.2" />
            <text x="350" y="125" textAnchor="middle" fontSize="9" fill={B.muted} fontFamily={F.main}>Brain</text>

            {/* Pulsing dot traveling the path */}
            <circle r="5" fill="#FFD866" opacity="0.8">
              <animate attributeName="cx" values="110;150;190;230;270;310;350" dur="5s" repeatCount="indefinite" />
              <animate attributeName="cy" values="80;80;80;80;80;80;80" dur="5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.6;0.4;0.3;0.4;0.6;0.7" dur="5s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Subhead */}
        <p style={{
          fontSize: 17, color: B.soft, lineHeight: 1.5,
          fontWeight: 400, margin: "0 0 8px", fontFamily: F.main,
        }}>
          The signal arrives, just too late. Here's why that happens, and what it means for your child's nervous system.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 3: DESDEEP-5 Border Play (Hero → Body)
         ══════════════════════════════════════════════════════ */}
      <BorderPlay opacity={0.3} height={24} />

      {/* ══════════════════════════════════════════════════════
         SECTION 4: LETTER-01 Paragraph Stack (Hook + Validation)
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "8px 22px 0", background: B.paper, fontFamily: F.main }}>

        {/* Hook paragraph 1 */}
        <p style={{ fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
          Hi there, Let me describe something I hear from parents every day: Your child is interested in the potty. They'll sit when you ask. They might even tell you <em>after</em> they've gone. But the actual 'I need to go now' signal, that moment of connection between body and brain, it doesn't arrive in time.
        </p>

        {/* Hook paragraph 2 */}
        <p style={{ fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
          You've watched them pause mid-play, go still for a second, and then it's already happened. And you think: <em>Did they even feel it?</em> The honest answer is: probably not. Not the way we assume they should.
        </p>

        {/* Hook paragraph 3 — bold anchor */}
        <p style={{ fontSize: 17, lineHeight: 1.7, color: B.ink, fontWeight: 600, margin: "0 0 14px" }}>
          It's about the signal.
        </p>

        {/* Thin rule */}
        <div style={{ height: 1, background: "#E8DED5", margin: "16px 0" }} />

        {/* Validation paragraph 1 */}
        <p style={{ fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
          You didn't fail. The method didn't fail. The methods you've tried, sticker charts, timers, potty schedules, they all assume something that may not be true for your child's nervous system. They assume the body signal arrives in time to act on it.
        </p>

        {/* Stat Callout Box */}
        <div style={{
          background: B.cream,
          border: `1px solid rgba(43,174,180,0.3)`,
          borderRadius: 12, padding: 24, margin: "16px 0",
        }}>
          <div style={{
            fontSize: 36, color: B.teal, fontWeight: 400,
            fontFamily: F.main, lineHeight: 1.1, marginBottom: 10,
          }}>
            59%
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: B.ink, margin: "0 0 6px" }}>
            couldn't reliably tell when they needed to urinate
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: B.ink, margin: "0 0 10px" }}>
            71% couldn't signal when they needed a bowel movement
          </p>
          <p style={{ fontSize: 13, color: B.muted, margin: 0 }}>
            Iqbal 2022
          </p>
        </div>

        {/* Validation paragraph 2 — bold anchor */}
        <p style={{ fontSize: 17, lineHeight: 1.7, color: B.ink, fontWeight: 600, margin: 0 }}>
          That's not stubbornness. That's neurology.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 5: DESDEEP-5 Border Play (thinner — Body → Mechanism)
         ══════════════════════════════════════════════════════ */}
      <BorderPlay opacity={0.2} height={16} />

      {/* ══════════════════════════════════════════════════════
         SECTION 6: EDU-8 Mechanism Diagram — Interoception
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "8px 22px 0", background: B.paper, fontFamily: F.main }}>

        {/* Eyebrow */}
        <div style={{
          fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase",
          color: B.teal, fontWeight: 700, marginBottom: 10,
        }}>
          THE SCIENCE
        </div>

        {/* Interoception Pathway Diagram — 3 zones */}
        <div style={{
          background: "#FBF7F1", borderRadius: 16,
          padding: "20px 16px 16px", marginBottom: 16,
        }}>
          <svg width="100%" height="180" viewBox="0 0 380 180">
            {/* Zone 1: Body Signal */}
            <circle cx="60" cy="65" r="30" fill="#FFD866" opacity="0.15" />
            <circle cx="60" cy="65" r="18" fill="#FFD866" opacity="0.3" />
            {/* amber glow pulse */}
            <circle cx="60" cy="65" r="10" fill="#FFD866" opacity="0.5">
              <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0.3;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="60" y="110" textAnchor="middle" fontSize="9" fill={B.soft} fontFamily={F.main}>The signal exists.</text>

            {/* Zone 2: The Gap — dotted path, dimmed nodes */}
            <line x1="92" y1="65" x2="135" y2="65" stroke={B.muted} strokeWidth="1.5" strokeDasharray="4,4" opacity="0.35" />
            <circle cx="115" cy="65" r="5" fill={B.muted} opacity="0.2" />
            <line x1="145" y1="65" x2="190" y2="65" stroke={B.muted} strokeWidth="1.5" strokeDasharray="4,4" opacity="0.25" />
            <circle cx="168" cy="65" r="5" fill={B.muted} opacity="0.12" />
            <text x="155" y="110" textAnchor="middle" fontSize="9" fill={B.soft} fontFamily={F.main}>But the brain doesn't receive</text>
            <text x="155" y="122" textAnchor="middle" fontSize="9" fill={B.soft} fontFamily={F.main}>it in time.</text>

            {/* Zone 3: BSL Bridge — solid teal path */}
            <line x1="200" y1="65" x2="270" y2="65" stroke={B.teal} strokeWidth="2.5" opacity="0.65" />
            <circle cx="235" cy="65" r="5" fill={B.teal} opacity="0.45" />
            <circle cx="285" cy="65" r="24" fill={B.teal} opacity="0.1" />
            <circle cx="285" cy="65" r="14" fill={B.teal} opacity="0.25" />
            <circle cx="285" cy="65" r="6" fill={B.teal} opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.3;0.5" dur="3s" repeatCount="indefinite" />
            </circle>
            <text x="285" y="110" textAnchor="middle" fontSize="9" fill={B.soft} fontFamily={F.main}>Body-Signal Learning</text>
            <text x="285" y="122" textAnchor="middle" fontSize="9" fill={B.soft} fontFamily={F.main}>builds the bridge.</text>
          </svg>
        </div>

        {/* Mechanism paragraph 1 */}
        <p style={{ fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
          <span style={{ fontWeight: 600, color: B.ink }}>Interoception</span> — your brain's ability to sense what's happening inside your body. For children with sensory processing differences, that signal pathway works differently: the signal arrives faintly, too late, or not until the body has already released.
        </p>

        {/* Mechanism paragraph 2 */}
        <p style={{ fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 16px" }}>
          Standard potty training methods assume a strong, timely signal exists. But what if the signal never comes?
        </p>

        {/* Pull Quote — Fraunces italic, centered */}
        <div style={{ padding: "8px 12px 16px", textAlign: "center" }}>
          <p style={{
            fontFamily: F.display, fontSize: 22, lineHeight: 1.4,
            fontStyle: "italic", fontWeight: 400, color: B.ink,
            margin: 0,
          }}>
            It's not about training faster. It's about building awareness, at the pace your child's nervous system can actually learn.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 7: DESDEEP-5 Border Play divider
         ══════════════════════════════════════════════════════ */}
      <BorderPlay opacity={0.2} height={16} />

      {/* ══════════════════════════════════════════════════════
         SECTION 8: SP-06 Before/After Testimonial
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "8px 22px 0" }}>
        <div style={{
          background: B.cream, borderRadius: 16,
          boxShadow: `6px 6px 0 ${B.ink}`,
          padding: "24px 22px",
        }}>
          {/* Decorative quote mark — B.teal, 40px */}
          <div style={{
            fontSize: 40, color: B.teal, lineHeight: 1,
            marginBottom: 8, fontFamily: F.display,
          }}>
            &ldquo;
          </div>

          {/* Quote text */}
          <p style={{
            fontSize: 17, lineHeight: 1.6, color: B.ink,
            fontWeight: 500, fontStyle: "italic",
            margin: "0 0 16px",
          }}>
            A child who sits on the potty without going isn't being resistant. Their body genuinely hasn't sent the signal yet. When you understand that, the whole picture shifts.
          </p>

          {/* Attribution — signal dot + text */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 4, height: 4, borderRadius: "50%",
              background: B.teal, flexShrink: 0,
            }} />
            <p style={{
              fontSize: 13, color: B.muted, fontStyle: "italic",
              margin: 0,
            }}>
              Lena, Customer Support · Mom of two autistic sons
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 9: DESDEEP-5 Border Play divider
         ══════════════════════════════════════════════════════ */}
      <BorderPlay opacity={0.2} height={16} />

      {/* ══════════════════════════════════════════════════════
         SECTION 10: ProductShowcaseMedium — Product Introduction
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "8px 22px 0" }}>
        <div style={{
          background: B.paper, border: `2px solid ${B.ink}`,
          borderRadius: 16, overflow: "hidden",
          boxShadow: `6px 6px 0 ${B.ink}`,
        }}>
          {/* Eyebrow + Title + Sub */}
          <div style={{ padding: "20px 20px 0", textAlign: "center" }}>
            <div style={{
              fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase",
              color: B.teal, fontWeight: 700, marginBottom: 8,
            }}>
              THE PRODUCT
            </div>
            <h2 style={{
              fontSize: 24, lineHeight: 1.15, fontWeight: 400,
              letterSpacing: -0.3, color: B.ink, margin: "0 0 8px",
            }}>
              Body-Signal Learning{" "}
              <span style={{ ...B.gradientText, fontWeight: 700 }}>Layer™ Pants</span>
            </h2>
            <p style={{
              fontSize: 14, color: B.soft, lineHeight: 1.5,
              margin: "0 0 14px",
            }}>
              Underwear that creates the signal — a gentle sensation that gives your child's brain something to connect to.
            </p>
          </div>

          {/* Hero shot */}
          <div style={{ padding: "0 14px" }}>
            <ImgFrame
              height={260}
              radius={20}
              label="PRODUCT · HERO SHOT"
              sublabel="BrightKidCo Body-Signal Learning training pant, product flat lay"
            />
          </div>

          {/* Description + CTA */}
          <div style={{ padding: "16px 20px 20px" }}>
            <p style={{
              fontSize: 17, lineHeight: 1.7, color: B.soft,
              margin: "0 0 16px", textAlign: "center",
            }}>
              The underwear itself becomes a gentle sensation that lasts — a signal the nervous system has time to notice and process.
            </p>

            {/* CTA button — B.teal bg, D8F57C text, pill */}
            <a href="#" style={{
              display: "block", padding: "16px 24px",
              background: B.teal, color: "#D8F57C",
              fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
              textDecoration: "none", borderRadius: 999,
              textAlign: "center",
            }}>
              Learn how body signals work →
            </a>

            <p style={{
              fontSize: 14, color: B.soft, textAlign: "center",
              margin: "12px 0 0",
            }}>
              No pressure. The 60-day guarantee means you can try it by your own judgment.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 11: DESDEEP-5 Border Play divider
         ══════════════════════════════════════════════════════ */}
      <BorderPlay opacity={0.2} height={16} />

      {/* ══════════════════════════════════════════════════════
         SECTION 12: TRUST-1 — 60-Day Seal
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "8px 22px 0" }}>
        <div style={{
          background: B.cream, borderRadius: 16,
          border: `2px solid ${B.green}`,
          padding: 24, textAlign: "center",
        }}>
          <p style={{
            fontSize: 16, lineHeight: 1.6, color: B.ink,
            margin: 0,
          }}>
            Try it for 60 days. If nothing changes, full refund.{" "}
            <span style={{ fontWeight: 600 }}>Your judgment.</span>
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 13: Tonal Shift Rule — 1px #E8DED5
         ══════════════════════════════════════════════════════ */}
      <TonalRule />

      {/* ══════════════════════════════════════════════════════
         SECTION 14: CTA-4 — Gentle Invite
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "20px 22px 0", textAlign: "center", fontFamily: F.main }}>
        <p style={{
          fontSize: 17, lineHeight: 1.7, color: B.ink,
          margin: "0 0 24px",
        }}>
          This email is the first in a series about how body-signal learning works, the science behind why children with sensory differences struggle with potty training, and what a different approach looks like.
        </p>

        {/* CTA button — B.teal bg, D8F57C text, 280px desktop, pill */}
        <a href="#" style={{
          display: "inline-block", padding: "16px 32px",
          background: B.teal, color: "#D8F57C",
          fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
          textDecoration: "none", borderRadius: 999,
          textAlign: "center", width: 280, boxSizing: "border-box",
        }}>
          Learn how body signals work →
        </a>

        {/* Next time teaser */}
        <p style={{
          fontSize: 14, color: B.muted, fontStyle: "italic",
          margin: "20px 0 0",
        }}>
          Next time: Why the methods you tried couldn't work — and what actually can.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         Easter Egg — Open Door Bridge Icon
         Between CTA and sign-off, 18px, #DBFFCD at 30%
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "16px 22px 0", textAlign: "center" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" style={{ opacity: 0.3 }}>
          <path d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" stroke="#DBFFCD" strokeWidth="1.5" fill="none" />
          <rect x="9" y="6" width="6" height="14" rx="3" stroke="#DBFFCD" strokeWidth="1.5" fill="none" />
          <line x1="12" y1="6" x2="12" y2="20" stroke="#DBFFCD" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 15: Signoff — Lena (SHORT variant)
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "12px 22px 0" }}>
        <div style={{ background: B.ink, borderRadius: 22 }}>
          <div style={{
            position: "relative",
            background: "#1F2A2C",
            border: "1.5px solid #2F3D40",
            borderRadius: 22,
            padding: "26px 24px 24px",
            overflow: "hidden",
          }}>
            {/* Subtle top gradient accent */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 4,
              background: B.gradient, opacity: 0.9,
            }} />

            {/* Avatar + Name/Role */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
              {/* Avatar with warm gradient ring */}
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
                  overflow: "hidden", border: `1.5px solid ${B.ink}`,
                }}>
                  <svg width="58" height="58" viewBox="0 0 58 58">
                    <rect width="58" height="58" fill="#F5E8D0" />
                    <circle cx="29" cy="22" r="10" fill="#D4A574" />
                    <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                  </svg>
                </div>
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase", color: "#8FAFB2", fontWeight: 700, marginBottom: 2 }}>
                  A note from
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
                  Lena
                </div>
                <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
                  Customer Support · Mom of two autistic sons
                </div>
              </div>
            </div>

            {/* Dashed divider */}
            <div style={{ borderTop: "1.5px dashed #3A4547", paddingTop: 16, marginBottom: 16 }} />

            {/* Closing */}
            <p style={{ fontSize: 14, color: "#B8CACD", lineHeight: 1.6, margin: "0 0 10px" }}>
              With understanding,
            </p>

            {/* Signature — Caveat font, 42px, D8F57C */}
            <p style={{
              fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95,
              fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5,
              margin: "0 0 16px",
            }}>
              Lena ——
            </p>

            {/* Dashed divider */}
            <div style={{ borderTop: "1.5px dashed #3A4547", paddingTop: 16, marginBottom: 16 }} />

            {/* P.S. */}
            <p style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic", margin: 0 }}>
              <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>P.S.</span>
              One thing I wish someone had told me years earlier: a child who sits on the potty without going isn't being resistant. Their body genuinely hasn't sent the signal yet. When you understand that, the whole picture shifts.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 16: FOOTER — Standard
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.paper, padding: "30px 24px 30px", textAlign: "center" }}>
        {/* Tagline */}
        <div style={{
          fontFamily: F.display, fontSize: 20, fontStyle: "italic",
          fontWeight: 500, color: B.ink, marginBottom: 30,
          letterSpacing: -0.2,
        }}>
          Calm progress, one day at a time.
        </div>

        {/* Footer links */}
        {["Shop", "FAQ", "Contact"].map((l, i) => (
          <div key={i} style={{ fontSize: 14, color: B.ink, fontWeight: 500, marginBottom: 14 }}>
            <a href="#" style={{ color: B.ink, textDecoration: "none" }}>{l}</a>
          </div>
        ))}

        {/* Social icons — Instagram, TikTok */}
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
              <path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Unsubscribe + address + reply prompt */}
        <div style={{ fontSize: 11.5, color: B.muted, lineHeight: 1.65, margin: "0 auto", maxWidth: 340 }}>
          If you no longer wish to receive these emails, <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>unsubscribe here</a>.<br/>
          <span style={{ fontSize: 11 }}>Questions? Reply to this email, Lena reads every response.</span><br/>
          <span style={{ fontSize: 11 }}>BrightKidCo LLC · 548 Market St, PMB 72296, San Francisco, CA 94104</span>
        </div>

        {/* Gradient accent bar */}
        <div style={{ margin: "28px auto 0", width: 60, height: 3, background: B.gradient, borderRadius: 3 }} />
      </div>

    </EmailShell>
  );
};

Object.assign(window, { Email_pped_22_e1_gf });
