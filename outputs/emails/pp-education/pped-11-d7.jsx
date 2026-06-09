/* PP-Education — D7 (Day 7) | Cross-Level
   Wireframe: wireframes/pp-education/pped-11-d7.md
   Strategy: strategy-map.json → flows.pp-education.emails.d7
   Generated: 2026-06-09
*/

const Email_pp_education_11_d7 = () => (
  <EmailShell preheader="Your child's nervous system is doing exactly what it needs to right now. Here's what Week 2 looks like." bg="#FFFFFF">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo Centered
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src="../../raw/BKCO - EMAIL MARKETING/assets/brightkidco-logo-v2.png" alt="BrightKidCo" style={{ height: 34 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO-9 — Whisper Tone
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "34px 22px 0", textAlign: "center" }}>

      {/* Headline — whisper tone, text-first */}
      <h1 style={{
        fontFamily: F.main,
        fontSize: 28,
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: -0.4,
        color: "#1F2D2F",
        margin: "0 0 16px",
      }}>
        If nothing happened in week 1, that's exactly right
      </h1>

      {/* Subheadline */}
      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        fontWeight: 400,
        lineHeight: 1.7,
        color: "#4A6568",
        margin: "0 0 48px",
      }}>
        Your child's nervous system is doing exactly what it needs to right now. Here's what Week 2 looks like.
      </p>

      {/* Product Image — Woodland Creature */}
      <div style={{ marginBottom: 48 }}>
        <img
          src="../../raw/product-photos/flat-lay/diaper-woodland-creature-yellow.jpg"
          alt="BrightKidCo Body-Signal Learning Layer training pant in woodland creature yellow pattern"
          style={{
            width: "100%",
            height: 280,
            objectFit: "cover",
            borderRadius: 20,
            display: "block",
          }}
        />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: SECTION HEADER — OBSERVATION
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 20px 10px", textAlign: "center" }}>
      <div style={{
        fontSize: 10.5,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: "#2BAEB4",
        fontWeight: 700,
      }}>
        OBSERVATION
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: LETTER-01 — THE OPEN (Observation)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 20px" }}>
      <div style={{ borderRadius: 16, padding: 32 }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 17,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 16px",
        }}>
          Whether your child is 3 or 10, verbal or not, diagnosed or wondering, if they've been wearing the Body-Signal underwear for a week and you're sitting here thinking, "Is anything happening?", I want you to hear this:
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 28,
          fontWeight: 700,
          lineHeight: 1.2,
          color: "#1F2D2F",
          margin: 0,
        }}>
          That's exactly where you're supposed to be.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: SECTION HEADER — VALIDATION
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 20px 10px", textAlign: "center" }}>
      <div style={{
        fontSize: 10.5,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: "#2BAEB4",
        fontWeight: 700,
      }}>
        VALIDATION
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: LETTER-01 — WHY NOTHING IS NOTHING
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 20px" }}>
      <div style={{ borderRadius: 16, padding: 32 }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          Week 1 isn't about signals. It isn't about progress. It's about something quieter: desensitization.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          Your child's nervous system has spent years (months, weeks, however long) feeling one way in their underwear. Dry. Comfortable. Familiar. Now there's a new sensation, a gentle feedback layer that creates awareness by being present. And the brain's first job isn't to act on it. It's to stop ignoring it.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 22,
          fontWeight: 700,
          lineHeight: 1.3,
          color: "#1F2D2F",
          margin: 0,
        }}>
          That takes time.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: RECOGNITION ANCHORS (R2)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#DBFFCD", padding: "48px 20px" }}>
      <div style={{ borderRadius: 16, padding: 22 }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 18px",
        }}>
          If you're seeing any of these, you're on track:
        </p>

        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          — Your child doesn't seem to notice the underwear at all
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          — They take it off after a few minutes
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          — They're going about their day like nothing changed
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 20px",
        }}>
          — You haven't seen a single pause, look, or signal
        </p>

        {/* Triple validation */}
        <p style={{
          fontFamily: F.main,
          fontSize: 22,
          fontWeight: 700,
          lineHeight: 1.3,
          color: "#1F2D2F",
          margin: 0,
        }}>
          All of that is normal. Expected. Right on schedule.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: SECTION HEADER — MECHANISM
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 20px 10px", textAlign: "center" }}>
      <div style={{
        fontSize: 10.5,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: "#2BAEB4",
        fontWeight: 700,
      }}>
        MECHANISM
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: EDU-4 — WHY THE BRAIN NEEDS REPETITION
       (Radio Analogy — unique to D7)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 20px" }}>
      <div style={{ background: "#FBF7F1", borderRadius: 16, padding: 22 }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          The Body-Signal Learning Layer creates a gentle sensation lasting 30-60 seconds after every accident. But the brain doesn't know what to do with it yet — it's a new input. Week 1 is the "reception" phase, the brain learning to receive the signal before it can act on it.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          Think of it like a radio finding a station. First you hear static. Then a crackle. Then a voice through the noise. Week 1 is the static phase. Week 2-3 is when words start forming.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 22,
          fontWeight: 700,
          lineHeight: 1.3,
          color: "#1F2D2F",
          margin: 0,
        }}>
          The underwear is doing the teaching. Your job right now is simply to let it, consistently, daily, without pressure.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: SECTION HEADER — TIPS
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 20px 10px", textAlign: "center" }}>
      <div style={{
        fontSize: 10.5,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: "#2BAEB4",
        fontWeight: 700,
      }}>
        TIPS
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: PRACTICAL TIPS
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 20px" }}>
      <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 22 }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 18px",
        }}>
          Try these if you want to help the process along:
        </p>

        <div style={{ marginBottom: 12 }}>
          <p style={{
            fontFamily: F.main,
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#4A6568",
            margin: "0 0 12px",
            display: "flex",
            alignItems: "flex-start",
            gap: 8,
          }}>
            <span style={{ color: "#5DD07A", fontWeight: 700, flexShrink: 0 }}>✓</span>
            <span>Wear for 2 hours after school or therapy, when the bladder is naturally fuller, the signal has more to work with</span>
          </p>
          <p style={{
            fontFamily: F.main,
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#4A6568",
            margin: "0 0 12px",
            display: "flex",
            alignItems: "flex-start",
            gap: 8,
          }}>
            <span style={{ color: "#5DD07A", fontWeight: 700, flexShrink: 0 }}>✓</span>
            <span>Try before bath time, the bathroom context helps the brain connect sensation to location</span>
          </p>
          <p style={{
            fontFamily: F.main,
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#4A6568",
            margin: "0 0 12px",
            display: "flex",
            alignItems: "flex-start",
            gap: 8,
          }}>
            <span style={{ color: "#5DD07A", fontWeight: 700, flexShrink: 0 }}>✓</span>
            <span>Wear during a calm activity like reading a favorite book, a quiet nervous system receives new signals more easily</span>
          </p>
          <p style={{
            fontFamily: F.main,
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#4A6568",
            margin: 0,
            display: "flex",
            alignItems: "flex-start",
            gap: 8,
          }}>
            <span style={{ color: "#5DD07A", fontWeight: 700, flexShrink: 0 }}>✓</span>
            <span>Start with short intervals (30-60 minutes) if your child resists, build up tolerance gradually</span>
          </p>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: SECTION HEADER — TESTIMONIALS
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 20px 10px", textAlign: "center" }}>
      <div style={{
        fontSize: 10.5,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: "#2BAEB4",
        fontWeight: 700,
      }}>
        TESTIMONIALS
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: SP-05 — THREE-FAMILY TESTIMONIALS
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 20px" }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.7,
        color: "#1F2D2F",
        margin: "0 0 24px",
      }}>
        Three parents. Three different kids. One shared week 1:
      </p>

      {/* Card 1 — L1 mom */}
      <div style={{ background: "#FBF7F1", borderRadius: 12, padding: 22, marginBottom: 12 }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 1.7,
          color: "#4A6568",
          margin: 0,
        }}>
          — "He's been wearing them all week and I haven't seen any change. But I'm not giving up yet. I keep reminding myself, the strategy doc said week 1 is just the warm-up."
        </p>
      </div>

      {/* Mint separator */}
      <div style={{ height: 3, background: "#DBFFCD", marginBottom: 12 }} />

      {/* Card 2 — L2 mom */}
      <div style={{ background: "#FBF7F1", borderRadius: 12, padding: 22, marginBottom: 12 }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 1.7,
          color: "#4A6568",
          margin: 0,
        }}>
          — "She takes the underwear off within 10 minutes. We're starting with 5-minute intervals and working up. Her OT says building tolerance is the first real skill, so that's what we're doing."
        </p>
      </div>

      {/* Mint separator */}
      <div style={{ height: 3, background: "#DBFFCD", marginBottom: 12 }} />

      {/* Card 3 — L3 mom */}
      <div style={{ background: "#FBF7F1", borderRadius: 12, padding: 22, marginBottom: 24 }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 1.7,
          color: "#4A6568",
          margin: 0,
        }}>
          — "He doesn't seem to notice the underwear at all, same as everything else. But I noticed he's keeping them on longer than day 1. Day 1 it was instant-off. Today he wore them for almost 45 minutes before I had to change him. That's something."
        </p>
      </div>

      {/* Bridge */}
      <p style={{
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 1.7,
        color: "#4A6568",
        margin: "0 0 8px",
      }}>
        If any of these sound familiar, you're exactly where you should be.
      </p>
      <p style={{
        fontFamily: F.main,
        fontSize: 22,
        fontWeight: 700,
        lineHeight: 1.3,
        color: "#1F2D2F",
        margin: 0,
      }}>
        The timeline isn't the same for every kid. But the mechanism is.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: SECTION HEADER — PERMISSION
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 20px 10px", textAlign: "center" }}>
      <div style={{
        fontSize: 10.5,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: "#2BAEB4",
        fontWeight: 700,
      }}>
        PERMISSION
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: PERMISSION EXIT
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 20px" }}>
      <div style={{ borderRadius: 16, padding: 32 }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          If you're wondering whether this working, the honest answer is: you won't know in week 1. And that's not a flaw. That's the design.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          Week 2-3 is when the first signals start for most kids. A pause. A look down. A step toward the bathroom after the fact. A pull at the pants. Those are the first words in a new language the brain is learning to speak.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          Your job this week: put the underwear on. Let the body-signal layer do the teaching. Don't prompt. Don't pressure. Don't expect.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 22,
          fontWeight: 700,
          lineHeight: 1.3,
          color: "#1F2D2F",
          margin: 0,
        }}>
          Just let it happen.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 16: CTA — NO PURCHASE CTA (Forward Bridge Only)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 20px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 1.7,
        color: "#4A6568",
        margin: 0,
      }}>
        Next time: The two-week mark — what to look for and what's totally normal.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 17: LENA SIGN-OFF (MEDIUM)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 20px" }}>
      <div style={{
        position: "relative",
        background: "#1F2A2C",
        border: "1.5px solid #2F3D40",
        borderRadius: 22,
        padding: "26px 24px 24px",
        overflow: "hidden",
      }}>
        {/* Top gradient accent bar */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
        }} />

        {/* Avatar + Name row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{
            width: 58,
            height: 58,
            flexShrink: 0,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FFD866 0%, #2BAEB4 100%)",
            padding: 2.5,
          }}>
            <div style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "#FFFDF6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              border: "1.5px solid #1F2D2F",
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

        {/* Dashed border + personal story */}
        <div style={{
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          padding: "16px 0",
          marginBottom: 16,
        }}>
          <p style={{
            fontFamily: F.main,
            fontSize: 12.5,
            lineHeight: 1.65,
            color: "#B8CACD",
            margin: "0 0 10px",
          }}>
            I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8. I remember week 1 with both of them, wondering, waiting, hoping the first week would show something. It didn't. But week 3 did.
          </p>
          <p style={{
            fontFamily: F.main,
            fontSize: 12.5,
            lineHeight: 1.65,
            color: "#B8CACD",
            margin: 0,
          }}>
            You're not behind. You're not doing it wrong. The underwear is working, even when it doesn't look like it.
          </p>
        </div>

        {/* Signature */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <div>
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 42,
              lineHeight: 0.95,
              fontWeight: 500,
              color: "#D8F57C",
              letterSpacing: -0.5,
            }}>
              Lena
            </div>
            <div style={{
              fontFamily: F.main,
              fontSize: 12.5,
              color: "#B8CACD",
              marginTop: 4,
            }}>
              With understanding,
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
       SECTION 18: TRUST-5 — PROMISE BADGES STRIP
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 20px 48px" }}>
      <div style={{
        background: "#FBF7F1",
        borderRadius: 8,
        padding: "16px 20px",
        textAlign: "center",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 10,
        }}>
          <span style={{ fontFamily: F.main, fontSize: 12, color: "#4A6568" }}>60-Day</span>
          <span style={{ fontFamily: F.main, fontSize: 12, color: "#4A6568" }}>Free Shipping</span>
          <span style={{ fontFamily: F.main, fontSize: 12, color: "#4A6568" }}>Hassle-Free Returns</span>
        </div>
        <p style={{
          fontFamily: F.main,
          fontSize: 14,
          color: "#4A6568",
          margin: 0,
        }}>
          16,511 reviews · <span style={{ color: "#FFD866" }}>★</span><span style={{ color: "#FFD866" }}>★</span><span style={{ color: "#FFD866" }}>★</span><span style={{ color: "#FFD866" }}>★</span><span style={{ color: "#FFD866" }}>★</span>
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 19: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: "'Fraunces', Georgia, serif",
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: 500,
        color: "#1F2D2F",
        marginBottom: 24,
        letterSpacing: -0.2,
      }}>
        Built for the brain that learns differently.
      </p>

      {/* Social icons */}
      <div style={{ display: "flex", justifyContent: "center", gap: 22, margin: "14px 0 28px" }}>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F2D2F" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="#1F2D2F" stroke="none" /></svg></a>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F2D2F" strokeWidth="1.8"><path d="M16 3h-3a5 5 0 0 0-5 5v3H5v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3z" strokeLinejoin="round" /></svg></a>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F2D2F" strokeWidth="1.8"><path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
      </div>

      <div style={{ fontSize: 11.5, color: "#8A9B9D", lineHeight: 1.65, margin: "0 auto", maxWidth: 340 }}>
        No longer want these emails? <a href="#" style={{ color: "#1F2D2F", textDecoration: "underline" }}>Unsubscribe</a>.<br />
        <span style={{ fontSize: 11 }}>123 Commerce Street, Suite 200, Nashville, TN 37201</span>
      </div>

      {/* Gradient bar */}
      <div style={{ margin: "24px auto 0", width: 60, height: 3, background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", borderRadius: 3 }} />
    </div>

  </EmailShell>
);

Object.assign(window, { Email_pp_education_11_d7 });
window.EMAILS = window.EMAILS || {};
window.EMAILS["pp-education/pped-11-d7"] = Email_pp_education_11_d7;
