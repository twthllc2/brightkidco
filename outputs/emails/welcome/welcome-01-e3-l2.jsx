/* Welcome Flow — E3 | Level 2 (Lisa)
   Wireframe: wireframes/welcome/welcome-01-e3-l2.md
   Strategy: strategy-map.json → welcome.emails.e3-l2
   Generated: 2026-06-09
*/

/* ── L2-specific palette (amber/gold/navy not covered by brand tokens) ── */
const L2 = {
  amber: "#D4893D",
  gold: "#E8C87A",
  navy: "#1A2A3A",
  offWhite: "#FAF8F5",
  textGrey: "#4A4A4A",
  taupe: "#F5F0EB",
  creamBeige: "#F0EBE2",
  lightBeige: "#E8E0D5",
  mutedCite: "#8A9B9D",
};

const Email_Welcome_E3_L2 = () => (
  <EmailShell
    preheader="Your OT mentioned interoception. Here's what the research actually says, and why it changes everything for L2 potty training."
    bg={L2.offWhite}
  >

    {/* ── HEADER ── */}
    <Header bg={L2.offWhite} />

    {/* ═══════════════ BAND TRANSITION ═══════════════ */}
    <Band from={L2.offWhite} to={L2.taupe} height={40} />

    {/* ═══════════════ HERO — MECHANISM TEASE (two-column) ═══════════════ */}
    <div style={{ background: L2.taupe, padding: "30px 30px 40px" }}>
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        {/* Left: Interoception Gap Diagram placeholder */}
        <div style={{
          flex: 1, minWidth: 0,
          background: "#FFFFFF",
          border: `2px solid ${L2.navy}`,
          borderRadius: 16,
          padding: 20,
          textAlign: "center",
          position: "relative",
        }}>
          {/* Simplified bridge diagram */}
          <svg width="220" height="180" viewBox="0 0 220 180" style={{ display: "block", margin: "0 auto" }}>
            {/* Brain icon */}
            <ellipse cx="110" cy="30" rx="28" ry="20" stroke={L2.navy} strokeWidth="2" fill="none" />
            <text x="110" y="34" textAnchor="middle" fontSize="9" fill={L2.navy} fontWeight="700">BRAIN</text>

            {/* Dashed arrow — signal path with gap */}
            <line x1="110" y1="52" x2="110" y2="80" stroke={L2.amber} strokeWidth="2" strokeDasharray="4 3" />
            <text x="130" y="72" fontSize="7" fill={L2.mutedCite} fontStyle="italic">gap</text>

            {/* Bridge glow */}
            <rect x="95" y="80" width="30" height="24" rx="6" fill={L2.gold} opacity="0.85" />
            <text x="110" y="95" textAnchor="middle" fontSize="6" fill={L2.navy} fontWeight="700">BRIDGE</text>

            {/* Lower dashed arrow */}
            <line x1="110" y1="106" x2="110" y2="134" stroke={L2.amber} strokeWidth="2" strokeDasharray="4 3" />

            {/* Bladder icon */}
            <ellipse cx="110" cy="150" rx="28" ry="20" stroke={L2.navy} strokeWidth="2" fill="none" />
            <text x="110" y="154" textAnchor="middle" fontSize="9" fill={L2.navy} fontWeight="700">BLADDER</text>
          </svg>
          <div style={{
            fontSize: 10, letterSpacing: 1, textTransform: "uppercase",
            color: L2.amber, fontWeight: 700, marginTop: 10,
          }}>
            Interoception Gap Diagram
          </div>
        </div>

        {/* Right: Headline + subject display */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 13, letterSpacing: 1, textTransform: "uppercase",
            color: L2.amber, fontWeight: 700, marginBottom: 12,
          }}>
            Part three of six
          </div>
          <h1 style={{
            fontSize: 28, lineHeight: 1.3, fontWeight: 700,
            color: L2.navy, margin: "0 0 14px", letterSpacing: -0.5,
            fontFamily: "'Georgia', 'Times New Roman', Times, serif",
          }}>
            Kelly Mahler explains why your child can't feel the signal
          </h1>
          <p style={{
            fontSize: 17, lineHeight: 1.6, color: L2.textGrey, margin: 0,
            fontFamily: "'Georgia', serif",
          }}>
            Your OT mentioned interoception. Here's what the research actually says, and why it changes everything for L2 potty training.
          </p>
        </div>
      </div>
    </div>

    {/* ── DOT DIVIDER ── */}
    <div style={{ padding: "30px 0 20px", textAlign: "center", letterSpacing: 8, color: L2.mutedCite, fontSize: 6 }}>
      · · · ·
    </div>

    {/* ═══════════════ HOOK (LETTER-09 Double Column) ═══════════════ */}
    <div style={{ background: L2.offWhite, padding: "0 30px 40px" }}>
      <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
        {/* Left: Body copy (60%) */}
        <div style={{ flex: 3, minWidth: 0 }}>
          <p style={{
            fontSize: 17, lineHeight: 1.6, color: L2.textGrey, margin: "0 0 14px",
            fontFamily: "'Georgia', serif",
          }}>
            You've heard the word "interoception" from your OT or BCBA. Maybe it came up in a sensory evaluation, or you stumbled across it during one of those 2am research sessions we both know you've had.
          </p>
          <p style={{
            fontSize: 17, lineHeight: 1.6, color: L2.textGrey, margin: 0,
            fontFamily: "'Georgia', serif",
          }}>
            Here's what that word actually means for potty training, because if you're an L2 parent, this the missing piece that explains why nothing else worked.
          </p>
        </div>

        {/* Right: Abstract textile texture with amber glow (40%) */}
        <div style={{
          flex: 2, minWidth: 0,
          background: `radial-gradient(circle at center, ${L2.gold}33 0%, ${L2.taupe} 70%)`,
          borderRadius: 16, height: 200,
          border: `1px dashed ${L2.gold}66`,
        }} />
      </div>
    </div>

    {/* ── DOT DIVIDER ── */}
    <div style={{ padding: "0 0 20px", textAlign: "center", letterSpacing: 8, color: L2.mutedCite, fontSize: 6 }}>
      · · · ·
    </div>

    {/* ═══════════════ VALIDATION ═══════════════ */}
    <div style={{ background: L2.offWhite, padding: "0 30px 40px" }}>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: L2.textGrey, margin: "0 0 14px",
        fontFamily: "'Georgia', serif",
      }}>
        Interoception researcher Kelly Mahler calls it the "eighth sensory system", the internal sense that tells your body when you're hungry, thirsty, or need the bathroom. For most of us, these signals arrive automatically. We feel the tug of a full bladder, and we act on it.
      </p>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: L2.textGrey, margin: "0 0 14px",
        fontFamily: "'Georgia', serif",
      }}>
        For autistic children, this sense works differently.
      </p>
      {/* Emphasis line — centered, bold, anchor */}
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: L2.navy, margin: "0 0 14px",
        fontFamily: "'Georgia', serif", fontWeight: 700, textAlign: "center",
        paddingTop: 6, paddingBottom: 6,
      }}>
        Not missing. Not broken. Different.
      </p>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: L2.textGrey, margin: 0,
        fontFamily: "'Georgia', serif",
      }}>
        The signal from bladder to brain follows a neurological pathway that operates on a different frequency. Your child isn't ignoring the feeling, they may not be receiving it at all, or it arrives milliseconds too late to act on.
      </p>
    </div>

    {/* ── DOT DIVIDER ── */}
    <div style={{ padding: "0 0 20px", textAlign: "center", letterSpacing: 8, color: L2.mutedCite, fontSize: 6 }}>
      · · · ·
    </div>

    {/* ═══════════════ MECHANISM — STAT BLOCK + EDU-10 ═══════════════ */}
    <div style={{ background: L2.offWhite, padding: "0 30px 40px" }}>
      {/* 19% Stat Block */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{
          fontSize: 36, fontWeight: 700, color: L2.amber,
          lineHeight: 1, marginBottom: 6,
        }}>
          19%
        </div>
        <div style={{
          fontSize: 17, color: L2.navy, fontFamily: "'Georgia', serif",
          fontWeight: 500, marginBottom: 4,
        }}>
          of autistic children can recognize when they're thirsty
        </div>
        <div style={{
          fontSize: 13, color: L2.mutedCite, letterSpacing: 0.5,
        }}>
          — Iqbal 2022
        </div>
      </div>

      {/* Body text */}
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: L2.textGrey, margin: "0 0 14px",
        fontFamily: "'Georgia', serif",
      }}>
        Think about that. Thirst is one of the most basic internal signals — a survival cue. If a child can't feel thirst, how can we expect them to feel a full bladder?
      </p>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: L2.textGrey, margin: "0 0 14px",
        fontFamily: "'Georgia', serif",
      }}>
        The Body-Signal Learning Layer creates a sustained, gentle "uh-oh" sensation that lasts 30-60 seconds after every accident, giving the brain enough time to register: <em>something happened. That feeling connects to that action.</em>
      </p>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: L2.textGrey, margin: "0 0 28px",
        fontFamily: "'Georgia', serif",
      }}>
        This why prompt-dependency is so common in L2 kids. Compliance isn't awareness. The protocol can't bridge the interoception gap. The Body-Signal Layer can.
      </p>

      {/* EDU-10 — 3-Layer Blueprint */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Layer 1 */}
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%", background: L2.amber,
            color: "#FFFFFF", fontSize: 13, fontWeight: 700, display: "flex",
            alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>1</div>
          <div>
            <div style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 1,
              textTransform: "uppercase", color: L2.navy, marginBottom: 4,
            }}>
              Signal Creation — cotton inner
            </div>
            <p style={{
              fontSize: 15, lineHeight: 1.6, color: L2.textGrey, margin: 0,
              fontFamily: "'Georgia', serif",
            }}>
              The cotton inner allows a gentle "uh-oh" sensation to reach the skin, not overwhelming, not cold, not alarm-based. Just 30-60 seconds of gentle sensation that lasts that says <em>"something happened"</em> to a nervous system that might otherwise miss it entirely.
            </p>
          </div>
        </div>

        {/* Layer 2 */}
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%", background: L2.amber,
            color: "#FFFFFF", fontSize: 13, fontWeight: 700, display: "flex",
            alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>2</div>
          <div>
            <div style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 1,
              textTransform: "uppercase", color: L2.navy, marginBottom: 4,
            }}>
              Protection Without Blocking — smart absorption
            </div>
            <p style={{
              fontSize: 15, lineHeight: 1.6, color: L2.textGrey, margin: 0,
              fontFamily: "'Georgia', serif",
            }}>
              Enough absorbency to protect furniture and clothing, but not so much that it wicks away the learning signal. Unlike pull-ups, which are engineered to keep kids 100% dry, Layer 2 preserves exactly enough moisture for the brain to register the event.
            </p>
          </div>
        </div>

        {/* Layer 3 */}
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%", background: L2.amber,
            color: "#FFFFFF", fontSize: 13, fontWeight: 700, display: "flex",
            alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>3</div>
          <div>
            <div style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 1,
              textTransform: "uppercase", color: L2.navy, marginBottom: 4,
            }}>
              Leak Resistance Without Diaper-Mode — outer barrier
            </div>
            <p style={{
              fontSize: 15, lineHeight: 1.6, color: L2.textGrey, margin: 0,
              fontFamily: "'Georgia', serif",
            }}>
              A breathable outer layer that contains accidents without feeling like a diaper. Your child won't feel wrapped or restricted. They'll feel underwear, with a built-in teacher.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* ── DOT DIVIDER ── */}
    <div style={{ padding: "0 0 20px", textAlign: "center", letterSpacing: 8, color: L2.mutedCite, fontSize: 6 }}>
      · · · ·
    </div>

    {/* ═══════════════ TESTIMONIAL (SP-02 — Expert Endorsement) ═══════════════ */}
    <div style={{ background: L2.creamBeige, padding: "40px 30px", borderLeft: `3px solid ${L2.gold}`, paddingLeft: 30 + 12 }}>
      <p style={{
        fontSize: 16, lineHeight: 1.65, color: L2.textGrey, margin: "0 0 10px",
        fontFamily: "'Georgia', serif", fontStyle: "italic", letterSpacing: 0.3,
      }}>
        "We've been doing scheduled sits for 2 years. He never goes on his own. I tried bribery, rewards, sticker charts, ABA protocols, special seats. Nothing changes the fundamental issue."
      </p>
      <div style={{
        fontSize: 13, color: L2.mutedCite, marginBottom: 20,
        fontFamily: "'Helvetica Neue', sans-serif",
      }}>
        Real L2 parent, from our community
      </div>

      <p style={{
        fontSize: 17, lineHeight: 1.6, color: L2.textGrey, margin: "0 0 14px",
        fontFamily: "'Georgia', serif",
      }}>
        This parent found us after 2 years of scheduled sits. She was at the end of her rope, not because she hadn't tried, but because every method assumed her child could feel the signal. When she switched to the Body-Signal Learning Layer, the first change wasn't in her child. It was in her understanding.
      </p>

      <p style={{
        fontSize: 16, lineHeight: 1.65, color: L2.textGrey, margin: 0,
        fontFamily: "'Georgia', serif", fontStyle: "italic", letterSpacing: 0.3,
      }}>
        "I finally understood: he wasn't being difficult. His body wasn't telling him. We're only 3 weeks in, but I caught him looking down after an accident. He never did that before. It's small, but it's real."
      </p>
    </div>

    {/* ── DOT DIVIDER ── */}
    <div style={{ padding: "40px 0 20px", textAlign: "center", letterSpacing: 8, color: L2.mutedCite, fontSize: 6 }}>
      · · · ·
    </div>

    {/* ═══════════════ PRODUCT INTRO (LETTER-09 continued + numbered badges) ═══════════════ */}
    <div style={{ background: L2.offWhite, padding: "0 30px 40px" }}>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: L2.textGrey, margin: "0 0 20px",
        fontFamily: "'Georgia', serif",
      }}>
        The Body-Signal Learning Underwear is a 3-layer system, and each layer has one job:
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {/* Layer 1 */}
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%", background: L2.amber,
            color: "#FFFFFF", fontSize: 13, fontWeight: 700, display: "flex",
            alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>1</div>
          <div>
            <div style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 1,
              textTransform: "uppercase", color: L2.navy, marginBottom: 4,
            }}>
              Signal Creation — cotton inner
            </div>
            <p style={{
              fontSize: 15, lineHeight: 1.6, color: L2.textGrey, margin: 0,
              fontFamily: "'Georgia', serif",
            }}>
              The cotton inner allows a gentle "uh-oh" sensation to reach the skin, not overwhelming, not cold, not alarm-based. Just 30-60 seconds of gentle sensation that lasts that says <em>"something happened"</em> to a nervous system that might otherwise miss it entirely.
            </p>
          </div>
        </div>

        {/* Layer 2 */}
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%", background: L2.amber,
            color: "#FFFFFF", fontSize: 13, fontWeight: 700, display: "flex",
            alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>2</div>
          <div>
            <div style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 1,
              textTransform: "uppercase", color: L2.navy, marginBottom: 4,
            }}>
              Protection Without Blocking — smart absorption
            </div>
            <p style={{
              fontSize: 15, lineHeight: 1.6, color: L2.textGrey, margin: 0,
              fontFamily: "'Georgia', serif",
            }}>
              Enough absorbency to protect furniture and clothing, but not so much that it wicks away the learning signal. Unlike pull-ups, which are engineered to keep kids 100% dry, Layer 2 preserves exactly enough moisture for the brain to register the event.
            </p>
          </div>
        </div>

        {/* Layer 3 */}
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%", background: L2.amber,
            color: "#FFFFFF", fontSize: 13, fontWeight: 700, display: "flex",
            alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>3</div>
          <div>
            <div style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 1,
              textTransform: "uppercase", color: L2.navy, marginBottom: 4,
            }}>
              Leak Resistance Without Diaper-Mode — outer barrier
            </div>
            <p style={{
              fontSize: 15, lineHeight: 1.6, color: L2.textGrey, margin: 0,
              fontFamily: "'Georgia', serif",
            }}>
              A breathable outer layer that contains accidents without feeling like a diaper. Your child won't feel wrapped or restricted. They'll feel underwear, with a built-in teacher.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* ── DOT DIVIDER ── */}
    <div style={{ padding: "0 0 20px", textAlign: "center", letterSpacing: 8, color: L2.mutedCite, fontSize: 6 }}>
      · · · ·
    </div>

    {/* ═══════════════ GUARANTEE (TRUST-2 — Guarantee Detail Cards) ═══════════════ */}
    <div style={{ padding: "40px 30px 0" }}>
      <div style={{
        background: L2.lightBeige,
        border: `2px solid ${L2.amber}`,
        borderRadius: 8,
        padding: 20,
      }}>
        <h3 style={{
          fontSize: 20, fontWeight: 700, color: L2.navy, margin: "0 0 12px",
          fontFamily: "'Georgia', serif",
        }}>
          60 days. Your judgment.
        </h3>
        <p style={{
          fontSize: 17, lineHeight: 1.6, color: L2.textGrey, margin: "0 0 14px",
          fontFamily: "'Georgia', serif",
        }}>
          Here's the honest truth: I don't know if the Body-Signal Learning Layer will work for your child. Every nervous system is different. What I do know is that the 60-day window is long enough for your child's brain to build the neural pathway, or not.
        </p>
        <p style={{
          fontSize: 17, lineHeight: 1.6, color: L2.textGrey, margin: "0 0 14px",
          fontFamily: "'Georgia', serif",
        }}>
          If you see any sign of body awareness, a pause, a look down, a step toward the bathroom, you'll know the signal is connecting. If nothing changes after 60 days of consistent wear, full refund. No hoops. No questions.
        </p>
        <p style={{
          fontSize: 17, lineHeight: 1.6, color: L2.textGrey, margin: 0,
          fontFamily: "'Georgia', serif",
        }}>
          Thisn't a sales tactic. It's the only honest offer when the outcome depends on your child's nervous system, not on your effort.
        </p>
      </div>
    </div>

    {/* ── DOT DIVIDER ── */}
    <div style={{ padding: "40px 0 20px", textAlign: "center", letterSpacing: 8, color: L2.mutedCite, fontSize: 6 }}>
      · · · ·
    </div>

    {/* ═══════════════ PRODUCT SHOWCASE (ProductShowcaseFull) ═══════════════ */}
    <ProductShowcaseFull
      eyebrow="The product"
      title="Body-Signal Learning"
      titleAccent="Layer™ Pants"
      sub="3-layer system designed to teach body awareness through gentle sensation"
      priceFrom="$79.99"
      priceNote="3+3 Bundle · 10% off first order"
      features={[
        { icon: "◉", label: "Body-Signal Layer™" },
        { icon: "✓", label: "60-day guarantee" },
        { icon: "♡", label: "Sensory-friendly" },
      ]}
      ctaButton="See the 3+3 Bundle, $79.99"
      guaranteeBadge={true}
    />

    {/* ── DOT DIVIDER ── */}
    <div style={{ padding: "0 0 20px", textAlign: "center", letterSpacing: 8, color: L2.mutedCite, fontSize: 6 }}>
      · · · ·
    </div>

    {/* ═══════════════ CTA SECTION (CTA-5 — Product CTA) ═══════════════ */}
    <div style={{ background: L2.navy, padding: "20px 22px 44px", textAlign: "center" }}>
      {/* Micro-copy */}
      <p style={{
        fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 24px",
      }}>
        Free shipping included + 60-day guarantee
      </p>

      {/* Primary CTA button */}
      <a href="#" style={{
        display: "inline-block", padding: "17px 32px",
        background: L2.navy, color: "#D8F57C",
        fontSize: 15.5, fontWeight: 700,
        textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
        border: `2px solid #D8F57C`,
      }}>
        See the 3+3 Bundle, $79.99 →
      </a>

      {/* Secondary text link */}
      <div style={{ marginTop: 20 }}>
        <a href="#" style={{
          fontSize: 14, color: L2.amber,
          textDecoration: "underline", textDecorationColor: L2.amber,
        }}>
          Start with 1 Pair ($34.99)
        </a>
      </div>

      {/* Permission framing */}
      <p style={{
        fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "20px 0 8px",
      }}>
        When you're ready to try, the 3+3 Bundle is here. No deadline. No countdown. Your timeline, your call.
      </p>
      <p style={{
        fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: 0,
      }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>

      {/* Next time teaser */}
      <p style={{
        fontSize: 14, lineHeight: 1.6, color: L2.mutedCite,
        fontStyle: "italic", margin: "24px 0 0",
      }}>
        Next time: How the Body-Signal Learning Layer works — and why it's different from everything you've tried.
      </p>
    </div>

    {/* ═══════════════ SIGNOFF (MEDIUM — E3 variant) ═══════════════ */}
    <div style={{ background: L2.navy, padding: "0 22px 36px" }}>
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
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: B.gradient, opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          {/* Avatar with warm ring */}
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: `linear-gradient(135deg, #FFD866 0%, ${B.teal} 100%)`,
            padding: 2.5,
            position: "relative",
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden",
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
            }}>
              A note from
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
              Lena Bauer
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Founder · Mom of two
            </div>
          </div>
        </div>

        {/* Dashed border separator */}
        <div style={{
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          padding: "16px 0",
          marginBottom: 16,
        }}>
          <div style={{
            fontSize: 12.5, color: "#B8CACD", marginBottom: 2,
          }}>
            With understanding,
          </div>
          <div style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 42, lineHeight: 0.95, fontWeight: 500,
            color: "#D8F57C", letterSpacing: -0.5, marginTop: 2,
          }}>
            Lena
          </div>
        </div>

        {/* Personal message (E3 variant) */}
        <div style={{
          fontSize: 13, lineHeight: 1.65, color: "#B8CACD",
          fontStyle: "italic",
        }}>
          I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8.
          <br/><br/>
          If your kid is anywhere on that curve, weeks of nothing, then a tiny pause, then back to nothing, that's normal here. That's not failure. That's neurology unfolding on its own timeline.
          <br/><br/>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal" }}>
            P.S.
          </span>{" "}
          I read every reply. If something in this email hit home, hit reply and tell me. You'll get me, not a bot.
        </div>
      </div>
    </div>

    {/* ═══════════════ OUTLINE + FOOTER ═══════════════ */}
    <OutLine bg={L2.offWhite} />
    <Footer />

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E3_L2 });
