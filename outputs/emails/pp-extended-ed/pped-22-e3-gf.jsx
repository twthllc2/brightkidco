/* PP-Extended Education — E3 (D36) | GF (General Family / Inclusive)
   Wireframe: wireframes/pp-extended-ed/pped-22-e3-gf.md
   Strategy: strategy-map.json → flows.pp-extended-ed.emails.e3-gf
   Generated: 2026-06-09
*/

const Email_pped_22_e3_gf = () => (
  <EmailShell preheader="What 'progress' actually looks like in weeks 5-8 — and why most parents miss it" bg={B.paper}>

    {/* ══════════════════════════════════════════════════════
       SECTION 1: BRAND HEADER — UTIL-08 Nav Bar
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "48px 24px 24px", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO-19 — Timeline Shock
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFBF0", position: "relative" }}>
      {/* Hero illustration placeholder */}
      <div style={{ position: "relative" }}>
        <ImgFrame
          height={260}
          label="THE INVISIBLE BRIDGE"
          sublabel="Child figure on body side, planks crossing gap to brain side · bridge being built plank by plank · whimsical, warm, hand-drawn feeling"
          radius={0}
        />
        {/* Subtle teal→green gradient overlay */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(180deg, rgba(43,174,180,0.08) 0%, rgba(93,208,122,0.12) 100%)",
          pointerEvents: "none",
        }} />
      </div>
      {/* Headline + Subhead */}
      <div style={{ padding: "0 32px 24px" }}>
        <h1 style={{
          fontFamily: F.main, fontSize: 22, fontWeight: 400, lineHeight: 1.3,
          color: B.ink, margin: "0 0 10px", textAlign: "center",
        }}>
          The small things that mean more than you think
        </h1>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontStyle: "italic", lineHeight: 1.4,
          color: B.soft, margin: 0, textAlign: "center",
        }}>
          What 'progress' actually looks like in weeks 5-8 — and why most parents miss it
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND — Hero → Letter Opening
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={44} />

    {/* ══════════════════════════════════════════════════════
       SECTION 3: LETTER OPENING — LETTER-01 Paragraph Stack
       Drop-cap "L" · Lena signature · warm yellow bg
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFF6E2", padding: "24px 24px" }}>
      {/* Drop-cap "L" + signature */}
      <div style={{ marginBottom: 16 }}>
        <span style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 48, fontWeight: 700, lineHeight: 0.9,
          color: B.teal, float: "left", marginRight: 10, marginTop: 4,
        }}>L</span>
        <span style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 18, color: B.ink, lineHeight: 1.2,
        }}>ena here.</span>
      </div>
      <div style={{ clear: "both" }} />

      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 16px",
      }}>
        If you're five to eight weeks in, you might be wondering: Is anything actually happening?
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 16px",
      }}>
        The answer is probably yes, just not in the way you expected.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 16px",
      }}>
        The underwear doesn't work like a switch. It doesn't produce a 'trained' child on a schedule. What it does is quieter than that. And most parents don't realize they're seeing progress until we show them what to look for.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: 0,
      }}>
        So here's what to watch for in weeks 5-8.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND — Letter Opening → Micro-Signals
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={44} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: MICRO-SIGNALS LIST — Sticker Card
       5 icons · section header · anchor list
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "24px 24px" }}>
      <div style={{
        background: B.paper,
        border: `2px solid ${B.ink}`,
        borderRadius: 18,
        boxShadow: `4px 4px 0 ${B.ink}`,
        padding: "24px 24px",
      }}>
        {/* Section header */}
        <h2 style={{
          fontFamily: F.main, fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
          color: B.ink, margin: "0 0 16px", textAlign: "center",
        }}>
          The micro-signals nobody tells you about
        </h2>

        {/* Intro copy */}
        <p style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 20px",
        }}>
          Your child may not be saying 'I need to go.' They may not be walking to the bathroom on their own. That's normal.
        </p>

        {/* 5 micro-signal items with icon circles */}
        {[
          { icon: "⏸", text: "A pause mid-play. Not an accident. Just a pause." },
          { icon: "👁", text: "A glance at their pants after they've gone." },
          { icon: "✋", text: "A hand reaching toward their waistband." },
          { icon: "⏱", text: "A shorter delay between 'it happened' and showing you." },
          { icon: "🧘", text: "Sitting still for a few extra minutes after a change." },
        ].map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 12,
            marginBottom: i < 4 ? 14 : 20,
          }}>
            {/* Teal circle icon */}
            <div style={{
              width: 24, height: 24, flexShrink: 0,
              borderRadius: "50%", background: B.teal,
              border: `1.5px solid ${B.ink}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, color: B.paper, marginTop: 2,
            }}>
              {item.icon}
            </div>
            <p style={{
              fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
              margin: 0,
            }}>
              {item.text}
            </p>
          </div>
        ))}

        {/* Closing copy */}
        <p style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 14px",
        }}>
          These are not 'fully trained' moments. They're not supposed to be. They're the first connection forming between body and brain. A nervous system that couldn't register the signal at all is starting to notice: something happened.
        </p>

        {/* Bold emphasis */}
        <p style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: 0, fontWeight: 700,
        }}>
          That's the transition from reactive to proactive. It starts in the noticing. Not in the doing.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND — Micro-Signals → Mechanism Bridge
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={44} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: MECHANISM BRIDGE — SP-06 Pull-Quote
       Single parent quote on soft teal bg
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#EAF6F2", padding: "24px 24px" }}>
      {/* Pull-quote */}
      <p style={{
        fontFamily: "'Fraunces', Georgia, serif",
        fontSize: 20, fontStyle: "italic", lineHeight: 1.4,
        color: B.ink, margin: "0 0 8px", textAlign: "center",
      }}>
        "He paused. He felt something."
      </p>
      {/* Attribution */}
      <p style={{
        fontFamily: F.main, fontSize: 13, color: B.soft,
        margin: "0 0 20px", textAlign: "center",
      }}>
        — Parent verbatim quote
      </p>

      {/* Follow-up copy */}
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 16px",
      }}>
        That pause was week 6. By week 12, he was walking to the bathroom half the time.
      </p>

      {/* Mechanism copy */}
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: 0,
      }}>
        The BSL Layer creates a sustained, gentle sensation that gives the brain time to register: something happened. The more that connection fires, the stronger it gets — in micro-moments, not dramatic breakthroughs.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND — Mechanism Bridge → Why This Matters
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={44} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: WHY THIS MATTERS — LETTER-01 Body Copy
       Cream bg · mechanism explanation
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "24px 24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 16px",
      }}>
        The parent who told us: 'He paused. He felt something.' That pause was week 6. By week 12, he was walking to the bathroom half the time. Not every child follows that curve. Some show awareness sooner, some take longer. The shape of progress depends on your child's nervous system, not a timeline a product promised you.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: 0,
      }}>
        But the mechanism is the same: the BSL Layer creates a sustained, gentle sensation that gives the brain time to register: something happened. The more that connection fires, the stronger it gets — in micro-moments, not dramatic breakthroughs.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND with Door Easter Egg — Why This Matters → Guidance
       ══════════════════════════════════════════════════════ */}
    <div style={{
      height: 44,
      background: `linear-gradient(180deg, ${B.teal} 0%, ${B.green} 100%)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative",
    }}>
      {/* Open door Easter egg */}
      <svg width="20" height="24" viewBox="0 0 20 24" fill="none" style={{ opacity: 0.35 }}>
        <rect x="2" y="0" width="16" height="24" rx="1" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
        <rect x="5" y="0" width="10" height="24" rx="0" stroke="#FFFFFF" strokeWidth="1" fill="rgba(255,255,255,0.15)" />
        <circle cx="13" cy="12" r="1.2" fill="#FFFFFF" />
        <path d="M2 0 L8 6 L8 24 L2 24 Z" fill="rgba(255,255,255,0.1)" stroke="#FFFFFF" strokeWidth="0.8" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: WHAT TO DO / GUIDANCE — LETTER-01
       Warm cream bg · grounded direction
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FAF7F0", padding: "24px 24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 16px",
      }}>
        Keep wearing. Keep the routine steady. Don't add pressure, the pressure doesn't help the signal.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 16px",
      }}>
        The goal in weeks 5-8 isn't training. It's noticing. If your child shows even one of those micro-signals, you're seeing the pathway form.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: 0,
      }}>
        If you haven't seen anything yet, that's also normal. Some nervous systems take longer to build the connection. The 60-day window is designed for this range. You're not behind.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND — Guidance → CTA Section
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={44} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: CTA SECTION — CTA-6 Social CTA
       Deep ink bg · permission-based · green pill button
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.ink, padding: "30px 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: "#FFFFFF",
        margin: "0 0 12px",
      }}>
        You've been at this for over a month. Whether you're seeing small signs or waiting for the first one, you've done the hardest part: showing up consistently.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: "#FFFFFF",
        margin: "0 0 24px",
      }}>
        If this the right time to continue, the product is here. If you need to pause and come back, that works too.
      </p>

      {/* CTA Button — green pill */}
      <a href="#" style={{
        display: "inline-block",
        padding: "14px 32px",
        height: 48,
        lineHeight: "48px",
        background: "#D8F57C",
        color: B.ink,
        fontFamily: F.main,
        fontSize: 14,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        textDecoration: "none",
        borderRadius: 999,
        textAlign: "center",
      }}>
        Continue the journey
      </a>

      {/* Secondary text */}
      <p style={{
        fontFamily: F.main, fontSize: 14, color: "#8A9B9D",
        margin: "16px 0 0",
      }}>
        60 days to decide. By your judgment.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       THIN DIVIDER — CTA → Sign-Off
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.ink, padding: "0 24px" }}>
      <div style={{
        height: 1,
        background: "rgba(255,255,255,0.2)",
        width: "20%",
        margin: "0 auto",
      }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: LENA SIGN-OFF — UTIL-05 MEDIUM
       Deep ink bg · Caveat signature · P.S. personal story
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.ink, padding: "24px 24px" }}>
      <p style={{
        fontFamily: "'Caveat', cursive",
        fontSize: 18, lineHeight: 1.2, color: "#FFFFFF",
        margin: "0 0 4px",
      }}>
        With understanding,
      </p>
      <p style={{
        fontFamily: "'Caveat', cursive",
        fontSize: 18, lineHeight: 1.2, color: "#FFFFFF",
        margin: "0 0 4px",
      }}>
        Lena ——
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 14, lineHeight: 1.3, color: "#FFFFFF",
        margin: "0 0 16px",
      }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* Thin decorative rule */}
      <div style={{
        height: 1,
        background: "rgba(255,255,255,0.2)",
        width: "20%",
        margin: "0 auto 16px",
      }} />

      {/* P.S. */}
      <p style={{
        fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: "#8A9B9D",
        margin: 0,
      }}>
        <span style={{ fontWeight: 700 }}>P.S.</span> One of my sons showed his first awareness in week 7. His brother took until week 10. Both trained, on their own timelines, not mine.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: FOOTER — UTIL-04
       Deep ink bg · legal text · unsubscribe
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.ink, padding: "16px 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.3, letterSpacing: 0.5,
        color: "#8A9B9D", margin: "0 0 8px",
      }}>
        You're receiving this because you're on the BrightKidCo list.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.3, letterSpacing: 0.5,
        color: "#8A9B9D", margin: "0 0 8px",
      }}>
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a>
        {" | "}
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Manage Preferences</a>
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.3, letterSpacing: 0.5,
        color: "#8A9B9D", margin: "0 0 4px",
      }}>
        BrightKidCo, Built for the brain that learns differently.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.3, letterSpacing: 0.5,
        color: "#8A9B9D", margin: 0,
      }}>
        [Physical Address, BrightKidCo HQ]
      </p>
    </div>

  </EmailShell>
);

// Register on window for rendering
Object.assign(window, { Email_pped_22_e3_gf });
