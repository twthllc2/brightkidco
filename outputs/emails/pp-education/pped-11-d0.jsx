/* PP-Education — D0 (Day 0) | Cross-Level
   Wireframe: wireframes/pp-education/pped-11-d0.md
   Strategy: strategy-map.json → flows.pp-education.emails.d0
   Generated: 2026-06-09
*/

const Email_pp_education_11_d0 = () => (
  <EmailShell preheader="No prompts. No pressure. Just one hour of wearing. Here's what Week 1 looks like." bg="#FFFFFF">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo Centered
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src="../../raw/BKCO - EMAIL MARKETING/assets/brightkidco-logo-v2.png" alt="BrightKidCo" style={{ height: 34 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO-16 — Mechanism Tease
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "34px 22px 0", textAlign: "center" }}>

      {/* Mint capsule badge */}
      <div style={{
        display: "inline-block",
        background: "#DBFFCD",
        padding: "6px 16px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 700,
        fontFamily: F.main,
        color: "#1F2D2F",
        letterSpacing: 1.5,
        textTransform: "uppercase",
        marginBottom: 20,
      }}>
        WEEK 1 GUIDE
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: F.main,
        fontSize: 28,
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: -0.4,
        color: "#1F2D2F",
        margin: "0 0 16px",
      }}>
        Your first wear guide
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
        No prompts. No pressure. Just one hour of wearing. Here's what Week 1 looks like.
      </p>

      {/* Product Image — Cloud/Raindrop */}
      <div style={{ marginBottom: 48 }}>
        <img
          src="../../raw/product-photos/flat-lay/training-pant-cloud-raindrop-white.jpg"
          alt="BrightKidCo Body-Signal Learning Layer training pant in cloud raindrop white pattern"
          style={{
            width: "100%",
            height: 300,
            objectFit: "cover",
            borderRadius: 20,
            display: "block",
          }}
        />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 4, background: "linear-gradient(180deg, #2BAEB4 0%, #5DD07A 100%)" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: LETTER-01 — HOOK + VALIDATION
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 20px" }}>
      <div style={{ borderRadius: 16, padding: 32 }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 17,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          Whether your child is 3 or 10, verbal or non-verbal, newly navigating this or years into the journey, if the "I need to go" signal hasn't been arriving the way traditional methods assume it should, you're in the right place.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 17,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          Your Bright Body-Signal underwear has arrived (or is on its way to you now). Maybe you're excited. Maybe you're skeptical. Maybe you're both, and that's completely normal.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 17,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: 0,
        }}>
          You bought this because something wasn't working with every other method you tried. That wasn't you. That wasn't your child. That was a signal-timing gap, a piece most potty training approaches simply don't address.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 4, background: "linear-gradient(180deg, #FBF7F1 0%, #DBFFCD 100%)" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: WEEK 1 GUIDE CARD
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#DBFFCD", padding: "48px 20px" }}>
      <div style={{ background: "#FBF7F1", borderRadius: 16, padding: 32 }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 16px",
        }}>
          Here's the approach for the first seven days:
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 17,
          fontWeight: 700,
          fontStyle: "italic",
          lineHeight: 1.7,
          color: "#1F2D2F",
          margin: "0 0 16px",
        }}>
          Put the underwear on like regular underwear. Let your child wear it for 1–2 hours daily. No prompts. No pressure. No timer sits. No "tell me when you need to go."
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          Just let the sensation do the teaching.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: 0,
        }}>
          For Week 1, the only goal is: <em style={{ color: "#1F2D2F" }}>let your child's nervous system notice a new feeling.</em> That's it. Not the toilet. Not a "success." Not a change in bathroom behavior.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 4, background: "linear-gradient(180deg, #DBFFCD 0%, #FFFFFF 100%)" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: SP-08 — THREE-FAMILY TESTIMONIALS
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
        Three parents, three different kids, one common starting point:
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
          — "My son put them on, played for an hour, and I saw nothing. On Day 6 he paused mid-play and looked down. That was the first time in 3 years he's noticed anything."
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
          — "My daughter screamed when we tried to put them on. I almost gave up. Day 4 she tolerated 45 minutes. That was our win for the week."
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
          — "We're on Day 10 and haven't seen anything yet. I'm trying to trust the process. My husband says I'm impatient. Maybe he's right."
        </p>
      </div>

      {/* Bridge */}
      <p style={{
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 700,
        lineHeight: 1.7,
        color: "#1F2D2F",
        margin: 0,
      }}>
        If any of those sound like your morning, keep going. You're not behind. You're not doing it wrong.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 4, background: "linear-gradient(180deg, #FFFFFF 0%, #FBF7F1 100%)" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 10: RECOGNITION ANCHORS (R2)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 20px" }}>
      <div style={{ borderRadius: 16, padding: 32 }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 18px",
        }}>
          Here's what Week 1 typically looks like across different kids:
        </p>

        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          — He sits on the toilet, you wait, nothing happens. Then 30 seconds after you put the pull-up back on, there's pee in it.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          — She plays in a wet pull-up without flinching. Hasn't noticed in years.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          — He doesn't react when he's wet. Doesn't ask for a change. Doesn't acknowledge it happened.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          — She knows what to do but won't do it. "Almost trained" for months or longer.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 20px",
        }}>
          — He's been in pull-ups for years and you've stopped counting the attempts.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 700,
          lineHeight: 1.7,
          color: "#1F2D2F",
          margin: 0,
        }}>
          If even one of these describes your child, you bought the right product. The mechanism is built for exactly this.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 4, background: "linear-gradient(180deg, #FBF7F1 0%, #DBFFCD 100%)" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 12: TIMELINE + WINS (R5 + R6)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#DBFFCD", padding: "48px 20px" }}>
      <div style={{ borderRadius: 16, padding: 22 }}>

        {/* Timeline */}
        <p style={{
          fontFamily: F.main,
          fontSize: 17,
          fontWeight: 700,
          lineHeight: 1.4,
          color: "#1F2D2F",
          margin: "0 0 14px",
        }}>
          When will something happen?
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 8px",
        }}>
          — Some kids show first awareness in 1–2 weeks (a pause, a look down, a step toward the bathroom)
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 8px",
        }}>
          — Others need 4–8 weeks of consistent wear before the signal starts registering
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "0 0 14px",
        }}>
          — Some require 12+ weeks
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 700,
          lineHeight: 1.7,
          color: "#1F2D2F",
          margin: "0 0 28px",
        }}>
          All of these are normal. The nervous system doesn't follow a calendar.
        </p>

        {/* Win Checklist */}
        <p style={{
          fontFamily: F.main,
          fontSize: 17,
          fontWeight: 700,
          lineHeight: 1.4,
          color: "#1F2D2F",
          margin: "0 0 14px",
        }}>
          What counts as a win this week:
        </p>

        <div style={{ marginBottom: 20 }}>
          {[
            "They wore the underwear for any amount of time without a fight",
            "They paused, even once, during an accident",
            "They touched their pants while wet or pulled at them",
            "They showed curiosity about the underwear",
            "They tolerated it for 30+ minutes",
            'They said "wet" or showed you with a gesture',
            "They stayed dry 2 hours instead of 30 minutes",
          ].map((win, i) => (
            <p key={i} style={{
              fontFamily: F.main,
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.7,
              color: "#4A6568",
              margin: "0 0 8px",
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
            }}>
              <span style={{ color: "#5DD07A", fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span>{win}</span>
            </p>
          ))}
        </div>

        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 700,
          lineHeight: 1.7,
          color: "#1F2D2F",
          margin: 0,
        }}>
          That's a real win. Not "fully trained." Not "accident-free." Any one of these.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 4, background: "linear-gradient(180deg, #DBFFCD 0%, #FBF7F1 100%)" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 14: EDU-8 — MECHANISM DEEP DIVE
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
          The reason standard methods fail isn't motivation or defiance. It's neurology.
        </p>

        {/* 49% stat highlight */}
        <div style={{
          display: "inline-block",
          background: "#FFD866",
          padding: "4px 10px",
          borderRadius: 6,
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 700,
          color: "#1F2D2F",
          marginBottom: 4,
        }}>
          49%
        </div>
        <span style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
        }}>
          {" "}of autistic 4–5 year olds aren't toilet trained yet — not because parents didn't try, but because traditional methods assume a signal that isn't reliably arriving.
        </span>

        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#4A6568",
          margin: "14px 0 0",
        }}>
          The BSL Layer creates a gentle sensation lasting 30–60 seconds that gives the brain time to register: <em style={{ color: "#1F2D2F" }}>something happened.</em> Pull-ups wick that sensation away completely. Week 1 is about reintroducing that sensation.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 4, background: "linear-gradient(180deg, #FBF7F1 0%, #FFFFFF 100%)" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 16: CTA-2 — PERMISSION-BASED CTA
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 20px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        fontWeight: 400,
        lineHeight: 1.7,
        color: "#4A6568",
        margin: "0 0 14px",
      }}>
        Week 1 is about showing up. Nothing more.
      </p>
      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        fontWeight: 400,
        lineHeight: 1.7,
        color: "#4A6568",
        margin: "0 0 14px",
      }}>
        If your child wears the underwear for one hour today, even if nothing "happens", you've done enough.
      </p>
      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        fontWeight: 400,
        lineHeight: 1.7,
        color: "#4A6568",
        margin: "0 0 24px",
      }}>
        When you're ready for Week 2, I'll be here.
      </p>

      {/* CTA Button — Teal pill */}
      <a href="#" style={{
        display: "inline-block",
        padding: "17px 32px",
        background: "#2BAEB4",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 15.5,
        fontWeight: 700,
        textDecoration: "none",
        borderRadius: 999,
        letterSpacing: 0.3,
        minHeight: 48,
        lineHeight: "48px",
        textAlign: "center",
      }}>
        Keep a progress log →
      </a>

      <p style={{
        fontFamily: F.main,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.6,
        color: "#4A6568",
        margin: "16px 0 0",
      }}>
        Tracking tiny signs, a pause, a look, a touch, helps you see what's actually changing.
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
            Both my sons went through this. One showed first awareness at 2 weeks. The other took 3 months. Both got there in their own time. Your child will too.
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

        {/* P.S. */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          Track every pause, every look, every gesture this week. Those tiny moments matter more than you think.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 18: FOOTER
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

      {/* Guarantee */}
      <div style={{ marginTop: 24 }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 14,
          fontWeight: 700,
          color: "#1F2D2F",
          margin: "0 0 6px",
        }}>
          60-Day Money-Back Guarantee
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 13,
          color: "#4A6568",
          margin: 0,
        }}>
          Your judgment, your timeline. No questions asked.
        </p>
      </div>

      {/* Gradient bar */}
      <div style={{ margin: "24px auto 0", width: 60, height: 3, background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", borderRadius: 3 }} />
    </div>

  </EmailShell>
);

Object.assign(window, { Email_pp_education_11_d0 });
window.EMAILS = window.EMAILS || {};
window.EMAILS["pp-education/pped-11-d0"] = Email_pp_education_11_d0;
