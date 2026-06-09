/* PP-Extended Education — E1 | Level 3 (Maria)
   Wireframe: wireframes/pp-extended-ed/pped-22-e1-l3.md
   Strategy: strategy-map.json → pp-extended-ed.e1-l3
   Generated: 2026-06-09
*/

const Email_pped_22_e1_l3 = () => (
  <EmailShell
    preheader="Body-signal learning. Your pace. Your timeline."
    bg={B.paper}
  >
    {/* ── Section 1: Header ── */}
    <Header bg="#F6F2EA" />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO-9 — Whisper Tone
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "48px 32px 40px", textAlign: "center", background: B.cream }}>
      <Eyebrow color="#9AA8A7">A GENTLE PATH</Eyebrow>
      <h1 style={{
        fontFamily: F.main, fontSize: 28, lineHeight: 1.3, fontWeight: 400,
        letterSpacing: 0, color: B.ink, margin: "0 0 28px",
      }}>
        The gentle path
      </h1>

      {/* Hero image placeholder */}
      <div style={{
        borderRadius: 12, overflow: "hidden", marginBottom: 24,
        background: "#FBF7F1",
      }}>
        <ImgFrame
          height={180}
          radius={12}
          label="LIFESTYLE"
          sublabel="Warm-toned lifestyle setting, soft natural light, everyday moment. No child faces."
        />
      </div>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.muted,
        margin: 0,
      }}>
        Body-signal learning. Your pace. Your timeline.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       48px spacing
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: B.paper }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 3: LETTER-02 — Handwritten Opener
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 32px", background: B.paper }}>
      {/* Hook */}
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.soft,
        margin: "0 0 14px",
      }}>
        After all these years, you know your child better than anyone.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.ink,
        margin: "0 0 24px", fontWeight: 700,
      }}>
        That's not a line. That's the truth.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.soft,
        margin: "0 0 14px",
      }}>
        You've watched him in ways no therapist, no consultant, no book author ever could. You know when something is different. When a pause that never happened before happens. When he looks down instead of through.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.ink,
        margin: "0 0 28px", fontWeight: 700,
      }}>
        And when it doesn't. That too.
      </p>

      {/* Thin rule */}
      <div style={{ height: 1, background: "#E8DED5", margin: "0 0 28px" }} />

      {/* Validation */}
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.soft,
        margin: "0 0 14px",
      }}>
        You've been on this road for years. You've heard every pitch, every promise, every "this time it will be different." And every time, life went back to the way it was.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.soft,
        margin: "0 0 14px",
      }}>
        That's not failure. That's his nervous system doing exactly what autistic nervous systems do, processing body signals on a pathway that doesn't match the standard map.
      </p>

      {/* Citation — understated */}
      <p style={{
        fontFamily: F.main, fontSize: 14, lineHeight: 1.6, color: "#9AA8A7",
        margin: "0 0 14px", textAlign: "center",
      }}>
        Barmpagiannis and Baldimtsi's 2025 systematic review of 49 studies confirms: body signal differences in autism are real, measurable, and persistent through childhood.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.ink,
        margin: 0, fontWeight: 700,
      }}>
        You didn't miss something. The signal pathway was never built the way the method manuals assumed.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       48px spacing
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: B.paper }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: EDU-1 — Definition Block
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 32px", background: B.paper }}>
      <Eyebrow color="#9AA8A7">HOW IT WORKS</Eyebrow>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.ink,
        margin: "0 0 18px", fontWeight: 700, textAlign: "center",
      }}>
        The Body-Signal Learning Layer doesn't change who your child is.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.soft,
        margin: "0 0 18px",
      }}>
        The BSL Layer is not a training program. It's not a schedule. It's not a reward system. It's a gentle sensation that lasts—a loop that gives his brain information it's been missing.
      </p>

      {/* Simple diagram — earth tones only */}
      <div style={{
        background: "#FBF7F1", border: "1px solid #C5D5C7", borderRadius: 12,
        padding: "20px 16px", textAlign: "center", margin: "0 0 18px",
      }}>
        <svg width="320" height="50" viewBox="0 0 320 50">
          <text x="40" y="30" textAnchor="middle" fontSize="10" fill="#4A6568" fontFamily={F.main}>Accident</text>
          <line x1="72" y1="28" x2="108" y2="28" stroke="#C5D5C7" strokeWidth="1.5" />
          <text x="108" y="28" textAnchor="start" fontSize="10" fill="#C5D5C7">›</text>
          <text x="150" y="30" textAnchor="middle" fontSize="10" fill="#4A6568" fontFamily={F.main}>Layer 1 preserves</text>
          <line x1="208" y1="28" x2="230" y2="28" stroke="#C5D5C7" strokeWidth="1.5" />
          <text x="230" y="28" textAnchor="start" fontSize="10" fill="#C5D5C7">›</text>
          <text x="270" y="22" textAnchor="middle" fontSize="9" fill="#4A6568" fontFamily={F.main}>30-60s</text>
          <text x="270" y="36" textAnchor="middle" fontSize="9" fill="#4A6568" fontFamily={F.main}>gentle sensation</text>
        </svg>
      </div>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.soft,
        margin: "0 0 14px",
      }}>
        When an accident happens inside BrightKidCo underwear, Layer 1 preserves a gentle "uh-oh" sensation for 30 to 60 seconds. Just enough, sustained enough, for a nervous system that picks up signals slowly to register: something happened.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.soft,
        margin: "0 0 14px",
      }}>
        Pull-ups wick that entire sensation away in seconds. The brain never receives the feedback.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.ink,
        margin: 0, fontWeight: 700,
      }}>
        The BSL Layer doesn't train. It provides information. The brain does the rest, at its own pace.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       48px spacing
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: B.paper }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: SP-06 — Testimonial
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 32px", background: B.paper }}>
      <div style={{
        background: B.cream, border: "1px solid #C5D5C7", borderRadius: 12,
        padding: "28px 24px", borderLeft: "2px solid #C5D5C7",
        boxShadow: "4px 4px 0 #F6F2EA",
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.7, color: B.soft,
          margin: "0 0 14px",
        }}>
          Her son is 9, non-verbal, Level 3. She'd stopped pushing years ago. She kept him clean, kept him safe, kept him loved. She'd stopped believing in progress.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.7, color: B.soft,
          margin: "0 0 14px",
        }}>
          Three weeks later, she saw him pause. Pause—a full three-second pause—after an accident. He looked down. He touched the spot. Then he went back to what he was doing.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.7, color: B.ink,
          margin: "0 0 14px", fontWeight: 700,
        }}>
          "He's not trained. I don't know if he ever will be. But for the first time in 9 years, he noticed. That's enough for now."
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: "#9AA8A7",
          margin: 0, fontStyle: "italic",
        }}>
          — L3 mom, son 9, non-verbal
        </p>
      </div>

      {/* Closing quote */}
      <p style={{
        fontFamily: F.display, fontSize: 18, lineHeight: 1.5, color: B.ink,
        margin: "24px 0 0", fontStyle: "italic", textAlign: "center",
      }}>
        That's the gentle path. Not a destination. A step. One step. Taken at his pace.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       48px spacing
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: B.paper }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: PRODUCT — ProductShowcaseSoft
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 32px", background: B.paper }}>
      <Eyebrow color="#9AA8A7">ALONGSIDE</Eyebrow>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.soft,
        margin: "0 0 14px",
      }}>
        You already have a pair. You've had it for a few weeks now.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.soft,
        margin: "0 0 14px",
      }}>
        Maybe it's sitting in a drawer. Maybe he's worn it a few times. Maybe the rhythm hasn't found itself yet. All of that is okay.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.soft,
        margin: "0 0 14px",
      }}>
        The BSL Layer works best as an addition, worn alongside your current routine. Not a replacement. Not a switch. Just an extra source of information for his nervous system to learn from.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.ink,
        margin: "0 0 20px", fontWeight: 700,
      }}>
        One pair. Added alongside. No pressure to switch. No deadline to be diaper-free.
      </p>

      {/* Text link CTA — gray tone, no button */}
      <p style={{ textAlign: "center", margin: 0 }}>
        <a href="#" style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.8,
          color: "#9AA8A7", textDecoration: "underline",
        }}>
          You decide how it fits. That's the whole point.
        </a>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       48px spacing
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: B.paper }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: TRUST-1 — 60-Day Seal
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 32px", background: B.paper }}>
      <div style={{
        background: B.cream, border: "1px solid #C5D5C7", borderRadius: 12,
        padding: "28px 24px",
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.soft,
          margin: "0 0 14px",
        }}>
          The 60-day guarantee exists for one reason: so you can try without having to believe.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.soft,
          margin: 0,
        }}>
          If something shifts, it shifts. If not, you've been doing the right thing all along. Full refund. No questions. That's not a sales tactic. That's the only fair offer for someone who's been burned by promises before.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       Easter Egg — Open Door Bridge (between guarantee and CTA)
       ══════════════════════════════════════════════════════ */}
    <div style={{ textAlign: "center", padding: "6px 0", background: B.paper }}>
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ opacity: 0.2 }}>
        <path d="M3,9 L15,9 M9,3 L9,15" stroke="#DBFFCD" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       48px spacing
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 48, background: B.paper }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: CTA-4 — Gentle Invite (Text Links Only)
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 32px", background: B.paper }}>
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.soft,
        margin: "0 0 14px",
      }}>
        You know your child. You know your timeline. Whatever that timeline looks like, it's the right one.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.8, color: B.soft,
        margin: "0 0 14px",
      }}>
        If nothing has changed yet, that's not a sign that nothing will. Some pathways take longer to form than others.
      </p>

      {/* Repeated pull quote */}
      <p style={{
        fontFamily: F.display, fontSize: 18, lineHeight: 1.5, color: B.muted,
        margin: "24px 0 0", fontStyle: "italic", textAlign: "center",
      }}>
        "He's not trained. I don't know if he ever will be. But for the first time in 9 years, he noticed. That's enough for now."
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: TONAL SHIFT RULE
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E8DED5", marginTop: 48 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 10: SIGNOFF — Lena (QUIET variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.ink, padding: "0 22px 36px" }}>
      <div style={{
        position: "relative", background: "#1F2A2C",
        border: "1.5px solid #2F3D40", borderRadius: 12,
        padding: "26px 24px 24px", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: B.gradient, opacity: 0.9,
        }} />

        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{
            width: 58, height: 58, flexShrink: 0, borderRadius: "50%",
            background: `linear-gradient(135deg, #FFD866 0%, ${B.teal} 100%)`,
            padding: 2.5,
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6", display: "flex", alignItems: "center",
              justifyContent: "center", overflow: "hidden", border: `1.5px solid ${B.ink}`,
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
              Lena
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Customer Support · Mom of two autistic sons
            </div>
          </div>
        </div>

        {/* Dashed divider */}
        <div style={{
          borderTop: "1.5px dashed #3A4547", borderBottom: "1.5px dashed #3A4547",
          paddingTop: 16, paddingBottom: 16, marginBottom: 16,
        }}>
          <div style={{ fontSize: 14, color: "#B8CACD", marginBottom: 4 }}>
            Talk soon,
          </div>
          <div style={{
            fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95,
            fontWeight: 500, color: B.muted, letterSpacing: -0.5, marginTop: 2,
          }}>
            Lena
          </div>
        </div>

        {/* P.S. */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" }}>
          <span style={{ color: B.muted, fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>P.S.</span>
          Both my boys were different. One trained at 6. The other was almost 8. If your timeline looks nothing like mine, that doesn't mean it's wrong.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: FOOTER — Minimal
       ══════════════════════════════════════════════════════ */}
    <OutLine />
    <Footer />

  </EmailShell>
);

Object.assign(window, { Email_pped_22_e1_l3 });
