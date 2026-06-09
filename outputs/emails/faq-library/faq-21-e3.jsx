/* FAQ/Objection Library — E3 | Cross-Level
   Wireframe: wireframes/faq-library/faq-21-e3.md
   Strategy: strategy-map.json → flows.faq-library.emails.e3
   Generated: 2026-06-09
*/

const Email_faq_21_e3 = () => (
  <EmailShell preheader="Whether they scream, hold, or run, the answer isn't more pressure." bg={B.paper}>

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F6F2EA", padding: "6px 20px", textAlign: "center" }}>
      <span style={{ fontFamily: F.main, fontSize: 11, fontStyle: "italic", color: B.muted }}>
        Whether they scream, hold, or run, the answer isn't more pressure.
      </span>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — Logo + From Name
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "20px 22px 10px", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ fontSize: 13, color: B.soft, marginTop: 6, fontFamily: F.main }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO-10 — Bold Declaration
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "28px 22px 24px", textAlign: "center" }}>
      {/* Eyebrow */}
      <div style={{
        fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
        color: B.teal, marginBottom: 14,
      }}>
        POWER STRUGGLE · REFUSAL · BATHROOM FEAR
      </div>

      {/* Headline */}
      <h1 style={{
        fontSize: 32, lineHeight: 1.15, fontWeight: 700, margin: 0,
        letterSpacing: -0.5, color: B.ink, fontFamily: F.main,
      }}>
        Your child isn't stubborn. Their nervous system is protecting them.
      </h1>

      {/* Signal Path SVG — Scattered zigzag → Smooth steady pulse */}
      <div style={{ margin: "20px auto 0", maxWidth: 420 }}>
        <svg width="100%" viewBox="0 0 420 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Scattered zigzag (left side — chaos) */}
          <path d="M0,30 L20,18 L35,38 L55,12 L72,35 L90,20 L105,40 L120,15 L138,38 L155,22"
            stroke="#D4C9B8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
          {/* Transition zone */}
          <path d="M155,22 L175,26 L195,28 L210,30"
            stroke={B.green} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
          {/* Smooth steady pulse (right side — calm) */}
          <path d="M210,30 L230,22 L245,38 L260,22 L275,38 L290,22 L305,38 L320,22 L335,38 L350,22 L365,38 L380,30 L400,30 L420,30"
            stroke={B.green} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
          {/* Smooth glow accent */}
          <path d="M210,30 L230,22 L245,38 L260,22 L275,38 L290,22 L305,38 L320,22 L335,38 L350,22 L365,38 L380,30 L400,30 L420,30"
            stroke={B.green} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.15" />
        </svg>
      </div>

      {/* 3 Nervous System Dots */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 18, marginTop: 16 }}>
        {/* Alarm — large */}
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#E85D4A", margin: "0 auto 4px" }} />
          <span style={{ fontSize: 10, color: B.muted, fontFamily: F.main }}>Alarm</span>
        </div>
        {/* Alert — large */}
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#F5A623", margin: "0 auto 4px" }} />
          <span style={{ fontSize: 10, color: B.muted, fontFamily: F.main }}>Alert</span>
        </div>
        {/* Calm — small, barely visible */}
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: B.green, margin: "0 auto 4px", opacity: 0.4 }} />
          <span style={{ fontSize: 10, color: B.muted, fontFamily: F.main, opacity: 0.6 }}>Calm</span>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: DESDEEP-6 — Color Block (32px)
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 32, background: B.cream, opacity: 0.4 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER-09 — Double Column (Three Objections)
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "28px 22px 28px" }}>

      {/* 3-Column Symptom Grid */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {/* Column 1: POWER STRUGGLE */}
        <div style={{ flex: 1, textAlign: "center", padding: "10px 6px" }}>
          <div style={{ fontSize: 20, marginBottom: 6 }}>💥</div>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
            color: B.ink, marginBottom: 6, fontFamily: F.main,
          }}>POWER STRUGGLE</div>
          <div style={{ fontSize: 12, lineHeight: 1.5, color: B.soft, fontFamily: F.main }}>
            Holds their pee for hours rather than sit on the toilet
          </div>
        </div>
        {/* Column 2: REFUSAL */}
        <div style={{ flex: 1, textAlign: "center", padding: "10px 6px" }}>
          <div style={{ fontSize: 20, marginBottom: 6 }}>✋</div>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
            color: B.ink, marginBottom: 6, fontFamily: F.main,
          }}>REFUSAL</div>
          <div style={{ fontSize: 12, lineHeight: 1.5, color: B.soft, fontFamily: F.main }}>
            Screaming, arching, fighting every attempt
          </div>
        </div>
        {/* Column 3: BATHROOM FEAR */}
        <div style={{ flex: 1, textAlign: "center", padding: "10px 6px" }}>
          <div style={{ fontSize: 20, marginBottom: 6 }}>🛡️</div>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
            color: B.ink, marginBottom: 6, fontFamily: F.main,
          }}>BATHROOM FEAR</div>
          <div style={{ fontSize: 12, lineHeight: 1.5, color: B.soft, fontFamily: F.main }}>
            Walking past the bathroom triggers a meltdown
          </div>
        </div>
      </div>

      {/* HOOK — Unified framing */}
      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 20px",
        fontFamily: F.main,
      }}>
        These three situations all share one thing: Your child's nervous system has learned that the bathroom, the potty, and the pressure to perform are overwhelming. And when a nervous system goes into protective mode, no amount of gentle encouragement, sticker charts, or consequences can override it.
      </p>

      {/* THIN RULE */}
      <div style={{ height: 1, background: "#E8DED5", margin: "20px 0" }} />

      {/* VALIDATION BLOCK */}
      <div style={{
        background: B.cream, borderLeft: `3px solid ${B.teal}`, padding: "16px 18px",
        borderRadius: 4, marginBottom: 20,
      }}>
        <p style={{
          fontSize: 17, lineHeight: 1.7, color: B.ink, fontWeight: 600, margin: "0 0 14px",
          fontFamily: F.main,
        }}>
          Your child is not being stubborn. They're not winning a battle of wills. They're not manipulating you.
        </p>
        <p style={{
          fontSize: 17, lineHeight: 1.7, color: B.soft, margin: 0,
          fontFamily: F.main,
        }}>
          When a child screams at the sight of the potty, when they hold their pee all day rather than sit down, when they rip off every pair of underwear you try — that's a sensory feedback loop that has gone into alarm mode. The bathroom has become associated with overwhelm. The pressure to "perform" has created a threat response. And a child in threat mode cannot learn, cannot cooperate, and cannot feel the subtle signal their body is trying to send.
        </p>
      </div>

      {/* LENA'S PERSONAL STORY */}
      <div style={{
        background: B.cream, borderRadius: 16, borderLeft: `3px solid ${B.green}`,
        padding: "18px 20px", marginBottom: 20,
      }}>
        <p style={{
          fontSize: 17, lineHeight: 1.7, color: B.soft, margin: 0, fontStyle: "italic",
          fontFamily: F.main,
        }}>
          "Both my sons went through phases where any mention of the potty triggered a full shutdown. I was told it was defiance. I was told to 'be firmer.' I tried being firmer. It made everything worse."
        </p>
        <div style={{ fontSize: 13, color: B.muted, marginTop: 8, fontFamily: F.main }}>
          — Lena
        </div>
      </div>

      {/* THIN RULE */}
      <div style={{ height: 1, background: "#E8DED5", margin: "20px 0" }} />

      {/* MECHANISM REFRAME */}
      <p style={{
        fontSize: 20, lineHeight: 1.4, color: B.ink, margin: "0 0 16px",
        fontFamily: F.display, fontStyle: "italic", textAlign: "center",
      }}>
        "The Body-Signal Learning Layer doesn't require your child to sit on the potty. It doesn't require compliance. It doesn't even require them to try."
      </p>
      <p style={{
        fontSize: 20, lineHeight: 1.4, color: B.ink, margin: "0 0 20px",
        fontFamily: F.display, fontStyle: "italic", textAlign: "center",
      }}>
        "It just needs to be worn."
      </p>
      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.ink, fontWeight: 600, margin: "0 0 24px",
        fontFamily: F.main, textAlign: "center",
      }}>
        The learning happens through sensation, not instruction.
      </p>

      {/* 3-SCENARIO RESPONSE CARDS */}
      {/* Card 1: FOR THE CHILD WHO FIGHTS THE POTTY */}
      <div style={{
        background: B.cream, borderRadius: 12, borderLeft: `2px solid ${B.teal}`,
        padding: "14px 16px", marginBottom: 10,
      }}>
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
          color: B.teal, marginBottom: 6, fontFamily: F.main,
        }}>FOR THE CHILD WHO FIGHTS THE POTTY</div>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0, fontFamily: F.main }}>
          You don't mention the potty. You put the underwear on during play, in their favorite corner of the living room, anywhere that doesn't trigger the bathroom fear. The sensation does the teaching without the pressure.
        </p>
      </div>

      {/* Card 2: FOR THE CHILD WHO RIPS EVERYTHING */}
      <div style={{
        background: B.cream, borderRadius: 12, borderLeft: `2px solid ${B.teal}`,
        padding: "14px 16px", marginBottom: 10,
      }}>
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
          color: B.teal, marginBottom: 6, fontFamily: F.main,
        }}>FOR THE CHILD WHO RIPS EVERYTHING</div>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0, fontFamily: F.main }}>
          The underwear is tagless, flat-seamed, 100% cotton inner layer, designed to feel less intrusive than a pull-up, not more. Many kids who fight everything else tolerate this one because the sensation is predictable, not surprising.
        </p>
      </div>

      {/* Card 3: FOR THE CHILD TERRIFIED OF THE BATHROOM */}
      <div style={{
        background: B.cream, borderRadius: 12, borderLeft: `2px solid ${B.teal}`,
        padding: "14px 16px",
      }}>
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
          color: B.teal, marginBottom: 6, fontFamily: F.main,
        }}>FOR THE CHILD TERRIFIED OF THE BATHROOM</div>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0, fontFamily: F.main }}>
          You start in the safest space in your home. The bathroom can come later — days, weeks, or months later. The signal doesn't need the toilet to work.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: DESDEEP-6 — Color Block (24px)
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 24, background: B.cream, opacity: 0.4 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: SP-03 — Stat Row (Quick Trust Signals)
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "24px 22px" }}>
      <div style={{
        background: B.cream, borderRadius: 12, display: "flex", gap: 0,
        overflow: "hidden",
      }}>
        {/* Stat 1 */}
        <div style={{ flex: 1, textAlign: "center", padding: "16px 10px", borderRight: `1px solid #E8DED5` }}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>⏱</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: B.ink, fontFamily: F.main }}>60-Day Guarantee</div>
        </div>
        {/* Stat 2 */}
        <div style={{ flex: 1, textAlign: "center", padding: "16px 10px", borderRight: `1px solid #E8DED5` }}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>🔔</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: B.ink, fontFamily: F.main }}>30-60 second signal</div>
        </div>
        {/* Stat 3 */}
        <div style={{ flex: 1, textAlign: "center", padding: "16px 10px" }}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>🚫</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: B.ink, fontFamily: F.main }}>No bathroom required</div>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: SOCIAL PROOF — Single Testimonial
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 22px 24px" }}>
      <div style={{
        background: B.cream, borderRadius: 16, borderLeft: `3px solid ${B.green}`,
        padding: "20px 22px", position: "relative",
        boxShadow: "2px 2px 0 rgba(31,45,47,0.12)",
      }}>
        <p style={{
          fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 12px",
          fontFamily: F.main, fontStyle: "italic",
        }}>
          "He fought every single thing — the potty, the underwear, the whole concept. I put the Body-Signal undies on during his favorite TV show. Didn't say a word. Three days later, I found him standing in front of the bathroom door, pants around his ankles, looking confused. He didn't make it to the toilet. But he never did that before."
        </p>
        <div style={{ fontSize: 13, color: B.muted, fontFamily: F.main }}>
          — Mom of a 6-year-old who had been in pull-ups for 4 years
        </div>
        {/* Easter Egg: Pulse Dot */}
        <div style={{
          position: "absolute", bottom: 14, right: 14,
          width: 8, height: 8, borderRadius: "50%",
          background: B.green, opacity: 0.05,
        }} />
      </div>
      <p style={{
        fontSize: 16, lineHeight: 1.6, color: B.soft, margin: "16px 0 0",
        fontFamily: F.main,
      }}>
        Not every child responds the same way. But that pause, that moment when the brain finally registers the signal — that's the first step, and it doesn't require the bathroom OR your child's cooperation. Just the sensation, repeated over time, building a pathway their nervous system has never had before.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: DESDEEP-6 — Color Block (24px)
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 24, background: B.cream, opacity: 0.4 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 10: EDU-12 — Comparison Matrix
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "24px 22px" }}>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <div style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
          color: B.teal, marginBottom: 8, fontFamily: F.main,
        }}>WHY EXISTING APPROACHES FAIL</div>
      </div>

      <div style={{
        border: `2px solid ${B.ink}`, borderRadius: 12, overflow: "hidden",
      }}>
        {/* Header row */}
        <div style={{ display: "flex", borderBottom: `2px solid ${B.ink}` }}>
          <div style={{
            flex: 1, padding: "10px 8px", fontSize: 10, fontWeight: 700,
            letterSpacing: 0.5, textTransform: "uppercase", color: B.ink,
            textAlign: "center", fontFamily: F.main, borderRight: `2px solid ${B.ink}`,
          }}>PULL-UPS</div>
          <div style={{
            flex: 1, padding: "10px 8px", fontSize: 10, fontWeight: 700,
            letterSpacing: 0.5, textTransform: "uppercase", color: B.ink,
            textAlign: "center", fontFamily: F.main, borderRight: `2px solid ${B.ink}`,
          }}>COTTON UNDERWEAR</div>
          <div style={{
            flex: 1, padding: "10px 8px", fontSize: 10, fontWeight: 700,
            letterSpacing: 0.5, textTransform: "uppercase", color: B.green,
            textAlign: "center", fontFamily: F.main,
            background: B.cream, borderLeft: `3px solid ${B.green}`,
          }}>BSL UNDERWEAR</div>
        </div>

        {/* Row 1: Sensation */}
        <div style={{ display: "flex", borderBottom: `1px solid #E8DED5` }}>
          <div style={{
            flex: 1, padding: "10px 8px", fontSize: 12, color: B.soft,
            textAlign: "center", fontFamily: F.main, borderRight: `2px solid ${B.ink}`,
          }}>Wicks away wetness signal</div>
          <div style={{
            flex: 1, padding: "10px 8px", fontSize: 12, color: B.soft,
            textAlign: "center", fontFamily: F.main, borderRight: `2px solid ${B.ink}`,
          }}>Floods all at once, overwhelming sensation</div>
          <div style={{
            flex: 1, padding: "10px 8px", fontSize: 12, color: B.soft,
            textAlign: "center", fontFamily: F.main,
            background: B.cream, borderLeft: `3px solid ${B.green}`,
          }}>Gentle, sustained 30-60 sec signal</div>
        </div>

        {/* Row 2: Brain signal */}
        <div style={{ display: "flex", borderBottom: `1px solid #E8DED5` }}>
          <div style={{
            flex: 1, padding: "10px 8px", fontSize: 12, color: B.soft,
            textAlign: "center", fontFamily: F.main, borderRight: `2px solid ${B.ink}`,
          }}>Brain gets NO signal</div>
          <div style={{
            flex: 1, padding: "10px 8px", fontSize: 12, color: B.soft,
            textAlign: "center", fontFamily: F.main, borderRight: `2px solid ${B.ink}`,
          }}>Brain gets TOO MUCH signal</div>
          <div style={{
            flex: 1, padding: "10px 8px", fontSize: 12, color: B.ink, fontWeight: 600,
            textAlign: "center", fontFamily: F.main,
            background: B.cream, borderLeft: `3px solid ${B.green}`,
          }}>Brain gets RIGHT amount</div>
        </div>

        {/* Row 3: Learning */}
        <div style={{ display: "flex" }}>
          <div style={{
            flex: 1, padding: "10px 8px", fontSize: 12, color: B.soft,
            textAlign: "center", fontFamily: F.main, borderRight: `2px solid ${B.ink}`,
          }}>❌ No learning</div>
          <div style={{
            flex: 1, padding: "10px 8px", fontSize: 12, color: B.soft,
            textAlign: "center", fontFamily: F.main, borderRight: `2px solid ${B.ink}`,
          }}>❌ No learning</div>
          <div style={{
            flex: 1, padding: "10px 8px", fontSize: 12, color: B.green, fontWeight: 600,
            textAlign: "center", fontFamily: F.main,
            background: B.cream, borderLeft: `3px solid ${B.green}`,
          }}>✅ Signal building</div>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: ProductShowcaseFull
       ══════════════════════════════════════════════════════ */}
    <ProductShowcaseFull
      eyebrow="THE PRODUCT"
      title="Body-Signal Learning Layer™"
      titleAccent="Pants"
      sub="Underwear that creates the signal — a gentle sensation that gives your child's brain something to connect to."
      priceFrom="€34"
      priceNote="Starter pair · 10% off first order"
      features={[
        { icon: "◉", label: "Body-Signal Layer™" },
        { icon: "✓", label: "60-day guarantee" },
        { icon: "♡", label: "Sensory-friendly" },
        { icon: "🧵", label: "Tagless, flat-seam" },
      ]}
      ctaButton="Learn how the Body-Signal Layer works with any child"
    />

    {/* ══════════════════════════════════════════════════════
       SECTION 12: TRUST-2 — Guarantee Detail Cards
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 22px 24px" }}>
      <div style={{ display: "flex", gap: 8 }}>
        {/* Card 1: NO PAUSE */}
        <div style={{
          flex: 1, background: B.cream, borderRadius: 12, border: `2px solid ${B.green}`,
          padding: "14px 10px", textAlign: "center",
        }}>
          <div style={{ fontSize: 18, marginBottom: 6 }}>✓</div>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
            color: B.teal, marginBottom: 6, fontFamily: F.main,
          }}>NO PAUSE</div>
          <div style={{ fontSize: 12, lineHeight: 1.5, color: B.soft, fontFamily: F.main }}>
            If your child shows no sign of awareness, <strong style={{ color: B.ink }}>FULL REFUND</strong>
          </div>
        </div>

        {/* Card 2: NO LOOK */}
        <div style={{
          flex: 1, background: B.cream, borderRadius: 12, border: `2px solid ${B.green}`,
          padding: "14px 10px", textAlign: "center",
        }}>
          <div style={{ fontSize: 18, marginBottom: 6 }}>✓</div>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
            color: B.teal, marginBottom: 6, fontFamily: F.main,
          }}>NO LOOK</div>
          <div style={{ fontSize: 12, lineHeight: 1.5, color: B.soft, fontFamily: F.main }}>
            If your child never looks down at a wet spot, <strong style={{ color: B.ink }}>FULL REFUND</strong>
          </div>
        </div>

        {/* Card 3: NO MOMENT */}
        <div style={{
          flex: 1, background: B.cream, borderRadius: 12, border: `2px solid ${B.green}`,
          padding: "14px 10px", textAlign: "center",
        }}>
          <div style={{ fontSize: 18, marginBottom: 6 }}>✓</div>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
            color: B.teal, marginBottom: 6, fontFamily: F.main,
          }}>NO MOMENT</div>
          <div style={{ fontSize: 12, lineHeight: 1.5, color: B.soft, fontFamily: F.main }}>
            If you never wonder "did they feel something?" — <strong style={{ color: B.ink }}>FULL REFUND</strong>
          </div>
        </div>
      </div>

      <p style={{
        fontSize: 16, lineHeight: 1.6, color: B.ink, textAlign: "center",
        margin: "16px 0 0", fontFamily: F.main,
      }}>
        No questions. The guarantee is there because the outcome depends on your child's nervous system.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: 1px RULE — Tonal Shift
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E8DED5", margin: "0 22px" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 14: CTA-5 — Product CTA
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "28px 22px 36px", textAlign: "center" }}>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: B.ink, margin: "0 0 20px",
        fontFamily: F.main,
      }}>
        Still have questions? Hit reply, I read every response.
      </p>

      <a href="#" style={{
        display: "inline-block", padding: "16px 32px",
        background: B.teal, color: "#D8F57C",
        fontSize: 16, fontWeight: 700, fontFamily: F.main,
        textDecoration: "none", borderRadius: 999,
        letterSpacing: 0.3, minHeight: 52, lineHeight: "52px",
        textAlign: "center",
      }}>
        Learn how the Body-Signal Layer works with any child →
      </a>

      <p style={{
        fontSize: 13, lineHeight: 1.6, color: B.muted, fontStyle: "italic",
        margin: "16px 0 0", fontFamily: F.main,
      }}>
        60 days to try it. By your judgment. If your child shows no sign of awareness, no pause, no look down, no moment where you wonder "did they feel something?" — full refund.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: SIGNOFF — Lena (FAQ variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.ink, padding: "0 22px 36px" }}>
      <div style={{
        background: "#1F2A2C", border: "1.5px solid #2F3D40",
        borderRadius: 22, padding: "26px 24px 24px", overflow: "hidden",
        position: "relative",
      }}>
        {/* subtle top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: B.gradient, opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          {/* Avatar with warm ring */}
          <div style={{
            width: 58, height: 58, flexShrink: 0, borderRadius: "50%",
            background: `linear-gradient(135deg, #FFD866 0%, ${B.teal} 100%)`,
            padding: 2.5, position: "relative",
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6", display: "flex", alignItems: "center",
              justifyContent: "center", overflow: "hidden",
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
              Lena S.
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Customer Support · Mom of two autistic sons
            </div>
          </div>
        </div>

        {/* Dashed divider */}
        <div style={{ borderTop: "1.5px dashed #3A4547", margin: "0 0 16px" }} />

        {/* Signoff text */}
        <div style={{
          fontSize: 14, lineHeight: 1.65, color: "#B8CACD", marginBottom: 16,
          fontFamily: F.main,
        }}>
          Every child's nervous system is different. What works for one might not work for another, and that's okay. The 60-day guarantee exists so you can find out without pressure. If your child fights everything right now, I see you. That's normal here. Start with one pair during the calmest 30 minutes of your day. Nothing else needs to change.
        </div>

        {/* Signed */}
        <div style={{ marginBottom: 16 }}>
          <div style={{
            fontFamily: "'Caveat', cursive", fontSize: 28, color: "#D8F57C",
            lineHeight: 0.95, marginBottom: 4,
          }}>, Lena</div>
          <div style={{ fontSize: 12, color: "#8FAFB2" }}>
            Customer Support · Mom of two autistic sons
          </div>
        </div>

        {/* Dashed divider */}
        <div style={{ borderTop: "1.5px dashed #3A4547", margin: "0 0 16px" }} />

        {/* P.S. */}
        <div style={{
          fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic",
        }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          If your child fights everything right now, I see you. Start with one pair during the calmest 30 minutes of your day. Nothing else needs to change.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 16: FOOTER
       ══════════════════════════════════════════════════════ */}
    <Footer />

  </EmailShell>
);

// Register on window for rendering
Object.assign(window, { Email_faq_21_e3 });
