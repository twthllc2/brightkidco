/* FAQ/Objection Library — E6 | Cross-Level (R1–R6)
   Wireframe: wireframes/faq-library/faq-21-e6.md
   Copy: copy/faq-library/faq-21-e6.md
   Flow 21 · Day 6 of FAQ Sequence (Final FAQ Email)
   Generated: 2026-06-09
*/

// ══════════════════════════════════════════════════════
// Wave Divider — inline SVG signal-wave
// ══════════════════════════════════════════════════════
const WaveDivider = ({ height = 32, opacity = 0.6 }) => (
  <div style={{ padding: "0 22px", height, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <svg width="376" height={height} viewBox={`0 0 376 ${height}`} style={{ opacity }}>
      <path
        d="M0,16 Q20,4 40,16 T80,16 T120,16 T160,16 T200,16 T240,16 T280,16 T320,16 T360,16 L376,16"
        stroke={B.cream}
        strokeWidth="2"
        fill="none"
      />
    </svg>
  </div>
);

// ══════════════════════════════════════════════════════
// Pull Quote component
// ══════════════════════════════════════════════════════
const PullQuote = ({ children }) => (
  <div style={{
    borderLeft: `3px solid ${B.green}`,
    padding: "12px 18px",
    margin: "16px 0",
    background: "transparent",
  }}>
    <p style={{
      fontFamily: F.display,
      fontSize: 20,
      fontWeight: 400,
      fontStyle: "italic",
      lineHeight: 1.4,
      color: B.ink,
      margin: 0,
    }}>
      {children}
    </p>
  </div>
);

// ══════════════════════════════════════════════════════
// Mint Callout component
// ══════════════════════════════════════════════════════
const MintCallout = ({ children }) => (
  <div style={{
    background: "#DBFFCD",
    borderRadius: 12,
    padding: "20px",
    margin: "16px 0",
  }}>
    {children}
  </div>
);

// ══════════════════════════════════════════════════════
// 60-Day Guarantee Seal component
// ══════════════════════════════════════════════════════
const GuaranteeSeal = () => (
  <div style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    borderRadius: "50%",
    background: "#FFD866",
    border: `2px solid ${B.ink}`,
    margin: "16px auto",
    textAlign: "center",
    padding: 12,
  }}>
    <div>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: B.ink }}>60-DAY</div>
      <div style={{ fontSize: 12, fontWeight: 700, color: B.ink, lineHeight: 1.2 }}>GUARANTEE</div>
    </div>
  </div>
);


// ══════════════════════════════════════════════════════
// SECTION 1: EMAIL SHELL + PREHEADER + HEADER
// ══════════════════════════════════════════════════════

const Email_faq_21_e6 = () => (
  <EmailShell preheader="Three of the most common concerns parents bring to me, addressed here, honestly." bg={B.cream}>

    {/* ── Header ── */}
    <Header bg={B.paper} />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-3 Permission Open (Text-Only)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "40px 24px", textAlign: "center" }}>

      <h1 style={{
        fontFamily: F.main,
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: -0.5,
        color: B.ink,
        margin: "0 0 20px",
      }}>
        Three questions I hear every week, and the same answer connects them all.
      </h1>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 24px",
      }}>
        You're doing the work at home. Your child is starting to show signs. But three questions keep coming up, and they're stopping you from moving forward.
      </p>

      {/* Three italic question hooks — recognition anchors */}
      <div style={{ margin: "0 0 24px" }}>
        <p style={{
          fontFamily: F.display,
          fontSize: 18,
          fontStyle: "italic",
          lineHeight: 1.5,
          color: B.ink,
          margin: "0 0 12px",
        }}>
          "Can I still use pull-ups for trips without undoing progress?"
        </p>
        <p style={{
          fontFamily: F.display,
          fontSize: 18,
          fontStyle: "italic",
          lineHeight: 1.5,
          color: B.ink,
          margin: "0 0 12px",
        }}>
          "What about poop? The pee is getting better, but poop is a different story."
        </p>
        <p style={{
          fontFamily: F.display,
          fontSize: 18,
          fontStyle: "italic",
          lineHeight: 1.5,
          color: B.ink,
          margin: 0,
        }}>
          "My child can't tell me when they need to go, how is this supposed to work?"
        </p>
      </div>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: 0,
      }}>
        Let me take each one.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       WAVE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <WaveDivider height={32} opacity={0.6} />

    {/* ══════════════════════════════════════════════════════
       SECTION 3: TRAVEL OBJECTION (LETTER-03)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "32px 24px" }}>
      <Eyebrow>ON OUTINGS AND TRAVEL</Eyebrow>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 16px",
      }}>
        Every parent I know has stood at the door with a bag full of extra clothes, wondering whether to reach for a pull-up or stay consistent. Here's the truth: temporary pull-ups for specific outings do NOT undo daytime progress.
      </p>

      <PullQuote>
        Temporary pull-ups for specific outings do NOT undo daytime progress.
      </PullQuote>

      <MintCallout>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          lineHeight: 1.6,
          color: B.ink,
          margin: "0 0 8px",
        }}>
          <strong>Road trips:</strong> put the Body-Signal underwear under a pull-up (the signal still gets through).
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          lineHeight: 1.6,
          color: B.ink,
          margin: "0 0 8px",
        }}>
          <strong>Flights:</strong> pull-up for the journey, underwear at the destination.
        </p>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          lineHeight: 1.6,
          color: B.ink,
          margin: 0,
        }}>
          <strong>Day trips:</strong> pack 2-3 extra pairs.
        </p>
      </MintCallout>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: 0,
        fontWeight: 600,
      }}>
        Travel doesn't reset learning, it just needs a different strategy.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       WAVE DIVIDER (thinner)
       ══════════════════════════════════════════════════════ */}
    <WaveDivider height={24} opacity={0.4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: POOP OBJECTION (LETTER-03)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "32px 24px" }}>
      <Eyebrow>ON POOP-SPECIFIC STRUGGLES</Eyebrow>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 16px",
      }}>
        Poop training is harder than pee training for most kids, especially autistic kids. It's a different sensation, a different muscle group, and often a different level of fear. Your child might be doing okay with peeing but will NOT poop on the toilet. They hold it until they can't anymore. You don't know how to bridge the gap.
      </p>

      <PullQuote>
        The two systems are connected. The same body signal pathway that helps with pee awareness often helps with poop awareness too.
      </PullQuote>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 12px",
        fontWeight: 600,
      }}>
        Your GI doctor leads on any medical withholding. We add alongside.
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: 0,
      }}>
        If it's just a preference for the pull-up for poop, use the pull-up-over-underwear method — the signal still gets through.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       WAVE DIVIDER (thinner)
       ══════════════════════════════════════════════════════ */}
    <WaveDivider height={24} opacity={0.4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: COMMUNICATION OBJECTION (LETTER-03)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "32px 24px" }}>
      <Eyebrow>ON COMMUNICATION BARRIERS</Eyebrow>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 16px",
      }}>
        Your child might be non-verbal or minimally verbal. They can't tell you when they need to go. Picture cards, sign language, visual schedules, none of it helps, because the problem isn't communication. It's interoception.
      </p>

      <PullQuote>
        Your child can't tell you they need to go because their brain isn't receiving the signal to report.
      </PullQuote>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 16px",
        fontWeight: 600,
      }}>
        No words required. Your child's body is learning to talk to itself.
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: 0,
        fontStyle: "italic",
      }}>
        I've seen some of the most beautiful 'first signals' from kids who've never shown any awareness of wetness — a child who's never reacted in their life, looking down at the spot on their underwear. That's the nervous system recognizing the signal for the first time. It doesn't need words.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       WAVE DIVIDER (thinnest)
       ══════════════════════════════════════════════════════ */}
    <WaveDivider height={20} opacity={0.3} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: UNIFYING REFRAME (EDU-10)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "32px 24px" }}>
      <h2 style={{
        fontFamily: F.main,
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 1.15,
        color: B.ink,
        margin: "0 0 16px",
        textAlign: "center",
      }}>
        Three different concerns, one shared explanation.
      </h2>

      <MintCallout>
        <p style={{
          fontFamily: F.main,
          fontSize: 17,
          lineHeight: 1.7,
          color: B.ink,
          margin: 0,
        }}>
          Whether your child is 3 or 10, verbal or not, the interoception gap is the common thread. The 'I need to go' signal arrives from the body just a little too late, too weak, or not at all. The methods you've tried couldn't create a signal that wasn't there.
        </p>
      </MintCallout>

      {/* Product Description — 3-Layer BSL System */}
      <div style={{
        background: "#FFFFFF",
        borderLeft: `2px solid ${B.green}`,
        borderRadius: 12,
        padding: "20px 22px",
        margin: "16px 0",
      }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 17,
          lineHeight: 1.7,
          color: B.ink,
          margin: "0 0 12px",
          fontWeight: 600,
        }}>
          The Body-Signal Learning Layer:
        </p>

        <div style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
          <span style={{ fontSize: 16, color: B.green, flexShrink: 0 }}>◆</span>
          <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink, margin: 0 }}>
            Cotton inner — gentle sustained sensation
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
          <span style={{ fontSize: 16, color: B.green, flexShrink: 0 }}>◆</span>
          <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink, margin: 0 }}>
            Smart absorption core — protects without blocking
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 16, color: B.green, flexShrink: 0 }}>◆</span>
          <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink, margin: 0 }}>
            Outer barrier — leak-resistant
          </p>
        </div>
      </div>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: 0,
        fontWeight: 600,
      }}>
        Not by training. By giving the nervous system information.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: GUARANTEE (TRUST-1)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "32px 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 16px",
      }}>
        You don't have to believe a single word I've written. 60 days to try it in your home, with your child, on your timeline.
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 20px",
      }}>
        If nothing shifts — no pause, no look down, no pull at their pants, no step toward awareness — full refund. No forms, no hassle.
      </p>

      <GuaranteeSeal />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: CTA (CTA-4: Gentle Invite)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "30px 24px", textAlign: "center" }}>
      <a href="https://www.brightkidco.com/products/3-3-bundle" style={{
        display: "inline-block",
        padding: "16px 32px",
        background: B.teal,
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: 1.2,
        textTransform: "uppercase",
        textDecoration: "none",
        borderRadius: 999,
        minHeight: 48,
        lineHeight: "48px",
      }}>
        When you're ready, it's here. →
      </a>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: LENA SIGN-OFF (LONG variant — E6 exclusive)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "24px 24px" }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 16px",
      }}>
        Both my sons went through every one of these struggles. The outings anxiety. The poop battle. The silence of a child who couldn't tell me what was happening in his own body. Every question you have, I've asked myself at some point.
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 20px",
      }}>
        When you're ready to try, I'm here.
      </p>

      <p style={{
        fontFamily: F.display,
        fontSize: 16,
        fontStyle: "italic",
        color: B.ink,
        margin: "0 0 12px",
      }}>
        With care,
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 14,
        color: B.soft,
        margin: "0 0 4px",
      }}>
        Lena ——
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 14,
        color: B.soft,
        margin: "0 0 20px",
      }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* P.S. 1 — Medical alongside */}
      <p style={{
        fontFamily: F.main,
        fontSize: 14,
        fontStyle: "italic",
        color: B.muted,
        margin: "0 0 12px",
        lineHeight: 1.6,
      }}>
        P.S. If your child has medical GI involvement, please keep your doctor in the lead. Our underwear adds alongside — it's not a replacement for medical care.
      </p>

      {/* P.S. 2 — Late is not never */}
      <p style={{
        fontFamily: F.main,
        fontSize: 14,
        fontStyle: "italic",
        color: B.muted,
        margin: 0,
        lineHeight: 1.6,
      }}>
        P.S. My older son was 8 before we figured this out. Late is not never.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: FOOTER (UTIL-04)
       ══════════════════════════════════════════════════════ */}
    <Footer />

  </EmailShell>
);

// Register on window
Object.assign(window, { Email_faq_21_e6 });
