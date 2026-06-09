/* Welcome Flow — E6 | L2
   Wireframe: wireframes/welcome/welcome-01-e6-l2.md
   Strategy: strategy-map.json → welcome.emails.e6-l2
   Generated: 2026-06-09
*/

const Email_welcome_01_e6_l2 = () => (
  <EmailShell preheader={'That "stays dry for 12 hours" feature you\'re paying for? It\'s why he\'s still in pull-ups. Here\'s what\'s actually happening.'} bg="#FAFAF8">

    {/* ── Header ── */}
    <Header bg="#FFFFFF" />

    {/* ══════ SECTION 2: HERO — COUNTER-INTUITIVE TRUTH ══════ */}
    <div style={{ padding: "34px 22px 0" }}>
      {/* Day 14 Badge */}
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <div style={{
          display: "inline-block", background: "#FFD866",
          padding: "7px 14px", borderRadius: 999, fontSize: 10.5,
          fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase",
          border: `2px solid ${B.ink}`, transform: "rotate(-1.5deg)",
          whiteSpace: "nowrap", lineHeight: 1.4,
        }}>
          ✿ Day 14
        </div>
      </div>

      {/* Eyebrow */}
      <div style={{ textAlign: "center" }}>
        <Eyebrow>The mechanism nobody talks about</Eyebrow>
      </div>

      {/* Split-screen hero image */}
      <div style={{
        display: "flex", borderRadius: 20, overflow: "hidden",
        border: `2px solid ${B.ink}`, marginBottom: 22,
      }}>
        {/* Left: Pull-up (cool blue-gray) */}
        <div style={{
          flex: 1, background: "#D8E2E8", padding: "28px 16px",
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", textAlign: "center",
          animation: "fadeInLeft 0.8s ease-out",
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: "50%",
            background: "#FFFFFF", border: `2px solid #A0B4C4`,
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 10,
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="4" y="6" width="16" height="12" rx="3" stroke="#A0B4C4" strokeWidth="2" fill="none" />
              <path d="M8,12 L16,12" stroke="#A0B4C4" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M12,9 L12,15" stroke="#A0B4C4" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            </svg>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#5A7080", letterSpacing: 0.5, textTransform: "uppercase" }}>
            Pull-ups
          </div>
          <div style={{ fontSize: 10, color: "#7A8E98", marginTop: 4 }}>
            Wicks away signal
          </div>
        </div>
        {/* Right: BKC (warm amber) */}
        <div style={{
          flex: 1, background: "#E8C99B", padding: "28px 16px",
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", textAlign: "center",
          animation: "fadeInRight 0.8s ease-out",
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: "50%",
            background: "#FFFDF6", border: `2px solid ${B.ink}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 10,
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" stroke={B.ink} strokeWidth="1.8" fill="none" />
              <path d="M9,12 C9,10 11,9 12,12 C13,15 15,14 15,12" stroke={B.teal} strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: B.ink, letterSpacing: 0.5, textTransform: "uppercase" }}>
            BKC
          </div>
          <div style={{ fontSize: 10, color: "#6B5A3E", marginTop: 4 }}>
            Cotton feels signal
          </div>
        </div>
      </div>

      {/* Hook heading — serif italic */}
      <h1 style={{
        fontFamily: "'Times New Roman', Georgia, serif",
        fontSize: 28, lineHeight: "1.15", fontWeight: 700, fontStyle: "italic",
        margin: "0 0 18px", letterSpacing: -0.4, color: B.ink,
        textAlign: "center",
      }}>
        Pull-ups keep kids completely dry.<br />
        That's the problem.
      </h1>

      {/* Body */}
      <p style={{
        fontSize: 15, lineHeight: 1.7, color: B.soft,
        margin: "0 0 14px", textAlign: "center",
      }}>
        Not for you, for your child's nervous system. The very technology you're paying a premium for, the moisture-wicking microfibers that promise "12 hours of dryness," the super-absorbent core that channels wetness away from the skin, that's the exact mechanism preventing progress.
      </p>
      <p style={{
        fontSize: 15, lineHeight: 1.7, color: B.soft,
        margin: "0 0 22px", textAlign: "center",
      }}>
        Let me explain why.
      </p>

      {/* CTA Button */}
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <a href="#" style={{
          display: "inline-block", padding: "17px 32px",
          background: B.ink, color: "#D8F57C", fontSize: 15.5, fontWeight: 700,
          textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
        }}>
          Try the 3+3 Bundle →
        </a>
      </div>
    </div>

    {/* ══════ DOT PATTERN DIVIDER — 20.2 ══════ */}
    <div style={{
      display: "flex", justifyContent: "center", flexWrap: "wrap",
      gap: 8, padding: "16px 22px",
    }}>
      {Array.from({ length: 48 }).map((_, i) => (
        <div key={i} style={{
          width: 4, height: 4, borderRadius: "50%",
          background: B.teal, opacity: 0.3 + (i % 6) * 0.1,
        }} />
      ))}
    </div>

    {/* ══════ SECTION 3: VALIDATION — LETTER-09 DOUBLE COLUMN ══════ */}
    <div style={{ background: "#FAF8F8", padding: "24px 24px 28px" }}>
      <div style={{ display: "flex", gap: 16 }}>
        {/* Left Column */}
        <div style={{ flex: 1 }}>
          <p style={{
            fontSize: 15, lineHeight: 1.7, color: B.soft,
            margin: "0 0 14px",
          }}>
            You've been told pull-ups are "part of the process." The pediatrician said it. The ABA consultant said it. The Facebook groups all recommend them. And you've watched your child sit in a pull-up for hours, dry, comfortable, and completely unaware.
          </p>
          <p style={{
            fontSize: 15, lineHeight: 1.7, color: B.soft,
            margin: 0,
          }}>
            You're not wrong to use them. Every parent does. But here's what no one told you:
          </p>
        </div>
        {/* Right Column */}
        <div style={{ flex: 1 }}>
          <p style={{
            fontSize: 15, lineHeight: 1.7, color: B.soft,
            margin: "0 0 14px",
          }}>
            Your BCBA's protocol assumes your child can feel when they need to go. Pull-ups were designed to keep kids comfortable during potty training <strong>for neurotypical kids who can already feel the signal.</strong> For a child with body signal differences, a child whose nervous system doesn't reliably register bladder fullness, pull-ups don't just fail to help. They actively prevent learning.
          </p>
        </div>
      </div>
    </div>

    {/* ══════ DOT PATTERN DIVIDER — 20.2 ══════ */}
    <div style={{
      display: "flex", justifyContent: "center", flexWrap: "wrap",
      gap: 8, padding: "16px 22px",
    }}>
      {Array.from({ length: 48 }).map((_, i) => (
        <div key={i} style={{
          width: 4, height: 4, borderRadius: "50%",
          background: B.teal, opacity: 0.3 + (i % 6) * 0.1,
        }} />
      ))}
    </div>

    {/* ══════ SECTION 4: MECHANISM — EDU-10 HOW IT WORKS ══════ */}
    <div style={{ background: "#FFFFFF", padding: "28px 14px 20px" }}>
      <H2 size={28} center>The science is clear</H2>

      {/* Two-column comparison */}
      <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
        {/* Left: Pull-Up */}
        <div style={{
          flex: 1, background: "#D8E2E8", borderRadius: 12,
          padding: "18px 14px", textAlign: "center",
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "#FFFFFF", border: "2px solid #A0B4C4",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 10px",
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20">
              <rect x="3" y="5" width="14" height="10" rx="2" stroke="#A0B4C4" strokeWidth="1.5" fill="none" />
              <path d="M6,10 L14,10" stroke="#A0B4C4" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#5A7080", marginBottom: 6 }}>
            Wicks away signal
          </div>
          <div style={{ fontSize: 12, color: "#7A8E98", lineHeight: 1.5 }}>
            Synthetic fibers block feedback
          </div>
        </div>
        {/* Right: Brain */}
        <div style={{
          flex: 1, background: "#E8C99B", borderRadius: 12,
          padding: "18px 14px", textAlign: "center",
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "#FFFDF6", border: `2px solid ${B.ink}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 10px",
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="7" stroke={B.ink} strokeWidth="1.5" fill="none" />
              <path d="M7,10 C7,8 9,7 10,10 C11,13 13,12 13,10" stroke={B.teal} strokeWidth="1.2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: B.ink, marginBottom: 6 }}>
            Interoception gap
          </div>
          <div style={{ fontSize: 12, color: "#6B5A3E", lineHeight: 1.5 }}>
            Milliseconds too late
          </div>
        </div>
      </div>

      {/* Body copy */}
      <p style={{
        fontSize: 15, lineHeight: 1.7, color: B.soft,
        margin: "0 0 14px", padding: "0 10px",
      }}>
        The science is clear: undergarment type directly affects toilet training outcomes. The brain needs feedback to learn.
      </p>
      <p style={{
        fontSize: 15, lineHeight: 1.7, color: B.soft,
        margin: "0 0 14px", padding: "0 10px",
      }}>
        For autistic children with body signal differences, that wetness signal is the ONLY feedback the brain can use. Pull-ups remove that feedback entirely — they pull the sensation away before the brain can register it. Your child stays too dry to learn.
      </p>
      <p style={{
        fontSize: 15, lineHeight: 1.7, color: B.soft,
        margin: "0 0 14px", padding: "0 10px",
      }}>
        Research confirms autistic children have significantly diminished body awareness. The signal from bladder to brain arrives, but milliseconds too late. Pull-ups don't give those sluggish milliseconds a fighting chance.
      </p>

      {/* Callout */}
      <div style={{
        background: "#FAF8F8", borderRadius: 12,
        padding: "18px 16px", margin: "0 10px",
      }}>
        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 18, lineHeight: 1.5, fontStyle: "italic",
          color: B.ink, margin: 0,
        }}>
          The $50-100 you're spending every month on pull-ups? You're paying to keep your child's brain from learning.
        </p>
      </div>
    </div>

    {/* ══════ DOT PATTERN DIVIDER — 20.2 ══════ */}
    <div style={{
      display: "flex", justifyContent: "center", flexWrap: "wrap",
      gap: 8, padding: "16px 22px",
    }}>
      {Array.from({ length: 48 }).map((_, i) => (
        <div key={i} style={{
          width: 4, height: 4, borderRadius: "50%",
          background: B.teal, opacity: 0.3 + (i % 6) * 0.1,
        }} />
      ))}
    </div>

    {/* ══════ SECTION 5: SOCIAL PROOF — SP-02 ══════ */}
    <div style={{ background: "#FAF8F8", padding: "24px 22px", borderLeft: `3px solid ${B.teal}` }}>
      <p style={{
        fontSize: 15, lineHeight: 1.7, color: B.soft,
        margin: "0 0 20px",
      }}>
        Here's what L2 parents actually say when they make the switch:
      </p>

      {/* Quote 1 */}
      <div style={{ marginBottom: 20 }}>
        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 18, lineHeight: 1.5, fontStyle: "italic",
          color: B.ink, margin: "0 0 6px",
        }}>
          "I've tried everything from the BCBA's protocol to OT sensory work to social stories. We're stuck."
        </p>
        <p style={{ fontSize: 12, color: B.muted, fontStyle: "italic", margin: 0 }}>
          — L2 parent, pre-BKC
        </p>
      </div>

      {/* Quote 2 */}
      <div style={{ marginBottom: 20 }}>
        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 18, lineHeight: 1.5, fontStyle: "italic",
          color: B.ink, margin: "0 0 6px",
        }}>
          "He will sit on the toilet for 45 minutes and then pee the second he stands up."
        </p>
        <p style={{ fontSize: 12, color: B.muted, fontStyle: "italic", margin: 0 }}>
          — L2 parent, describing the timing gap
        </p>
      </div>

      {/* Quote 3 */}
      <div style={{ marginBottom: 20 }}>
        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 18, lineHeight: 1.5, fontStyle: "italic",
          color: B.ink, margin: "0 0 6px",
        }}>
          "If I could just get him the signal, I know the rest would follow."
        </p>
        <p style={{ fontSize: 12, color: B.muted, fontStyle: "italic", margin: 0 }}>
          — L2 parent, naming the real need
        </p>
      </div>

      {/* Quote 4 — Micro-win */}
      <div style={{ marginBottom: 20 }}>
        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 18, lineHeight: 1.5, fontStyle: "italic",
          color: B.ink, margin: "0 0 6px",
        }}>
          "He initiated. Once. After 4 years."
        </p>
        <p style={{ fontSize: 12, color: B.muted, fontStyle: "italic", margin: 0 }}>
          — L2 parent, describing the first mini-win
        </p>
      </div>

      {/* Closing reflection */}
      <p style={{
        fontSize: 15, lineHeight: 1.7, color: B.soft,
        margin: 0,
      }}>
        That pause. That look down. That single step toward the bathroom. That's the body signal connection starting, a nervous system finally receiving the feedback it's been missing.
      </p>
    </div>

    {/* ══════ DOT PATTERN DIVIDER — 20.2 ══════ */}
    <div style={{
      display: "flex", justifyContent: "center", flexWrap: "wrap",
      gap: 8, padding: "16px 22px",
    }}>
      {Array.from({ length: 48 }).map((_, i) => (
        <div key={i} style={{
          width: 4, height: 4, borderRadius: "50%",
          background: B.teal, opacity: 0.3 + (i % 6) * 0.1,
        }} />
      ))}
    </div>

    {/* ══════ SECTION 6: PRODUCT INTRO — 3-LAYER SYSTEM ══════ */}
    <div style={{ background: "#FFFFFF", padding: "28px 14px 20px" }}>
      <p style={{
        fontSize: 15, lineHeight: 1.7, color: B.soft,
        margin: "0 0 18px", padding: "0 10px",
      }}>
        The BrightKidCo body-signal underwear is engineered for the opposite problem. Instead of wicking moisture away, it creates a sustained, gentle signal that the brain can register:
      </p>

      {/* 3-Layer Table */}
      <div style={{
        margin: "0 10px", border: `1.5px solid ${B.ink}`,
        borderRadius: 12, overflow: "hidden",
      }}>
        {/* Layer 1 */}
        <div style={{ padding: "14px 16px", borderBottom: `1.5px solid ${B.ink}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: 22, height: 22, borderRadius: "50%",
              background: B.teal, color: "#FFFFFF", fontSize: 11, fontWeight: 700,
            }}>◉</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: B.ink }}>
              Layer 1 — Signal Creation
            </span>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.5, color: B.soft, margin: "0 0 4px" }}>
            100% cotton inner that lets your child feel when wetness occurs
          </p>
          <p style={{ fontSize: 12, color: B.muted, fontStyle: "italic", margin: 0 }}>
            The sensory feedback the brain has been missing
          </p>
        </div>

        {/* Layer 2 */}
        <div style={{ padding: "14px 16px", borderBottom: `1.5px solid ${B.ink}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: 22, height: 22, borderRadius: "50%",
              background: B.green, color: "#FFFFFF", fontSize: 11, fontWeight: 700,
            }}>✓</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: B.ink }}>
              Layer 2 — Smart Absorption
            </span>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.5, color: B.soft, margin: "0 0 4px" }}>
            Absorbent core that protects furniture and floors without blocking the signal
          </p>
          <p style={{ fontSize: 12, color: B.muted, fontStyle: "italic", margin: 0 }}>
            Enough protection to say yes to wearing them, not enough to mask the feedback
          </p>
        </div>

        {/* Layer 3 */}
        <div style={{ padding: "14px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: 22, height: 22, borderRadius: "50%",
              background: B.teal, color: "#FFFFFF", fontSize: 11, fontWeight: 700,
            }}>♡</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: B.ink }}>
              Layer 3 — Outer Barrier
            </span>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.5, color: B.soft, margin: "0 0 4px" }}>
            Leak-resistant outer layer that contains accidents without "diaper-mode"
          </p>
          <p style={{ fontSize: 12, color: B.muted, fontStyle: "italic", margin: 0 }}>
            Keeps life manageable while learning happens
          </p>
        </div>
      </div>

      {/* Closing line */}
      <p style={{
        fontSize: 15, lineHeight: 1.7, color: B.soft,
        margin: "18px 10px 0",
      }}>
        This isn't pull-ups with a different logo. It's a fundamentally different mechanism.
      </p>
    </div>

    {/* ══════ DOT PATTERN DIVIDER — 20.2 ══════ */}
    <div style={{
      display: "flex", justifyContent: "center", flexWrap: "wrap",
      gap: 8, padding: "16px 22px",
    }}>
      {Array.from({ length: 48 }).map((_, i) => (
        <div key={i} style={{
          width: 4, height: 4, borderRadius: "50%",
          background: B.teal, opacity: 0.3 + (i % 6) * 0.1,
        }} />
      ))}
    </div>

    {/* ══════ SECTION 7: PRODUCT SHOWCASE — FULL ══════ */}
    <ProductShowcaseFull
      eyebrow="BrightKidCo"
      title="Body-Signal Learning"
      titleAccent="Layer™ Pants"
      sub=""
      priceFrom="€34"
      priceNote="Starter pair · 10% off first order"
      features={[
        { icon: "◉", label: "Body-Signal Layer™" },
        { icon: "✓", label: "60-day guarantee" },
        { icon: "♡", label: "Sensory-friendly" },
      ]}
      ctaButton="Shop the pants"
    />

    {/* ══════ DOT PATTERN DIVIDER — 20.2 ══════ */}
    <div style={{
      display: "flex", justifyContent: "center", flexWrap: "wrap",
      gap: 8, padding: "16px 22px",
    }}>
      {Array.from({ length: 48 }).map((_, i) => (
        <div key={i} style={{
          width: 4, height: 4, borderRadius: "50%",
          background: B.teal, opacity: 0.3 + (i % 6) * 0.1,
        }} />
      ))}
    </div>

    {/* ══════ SECTION 8: GUARANTEE — TRUST-2 ══════ */}
    <div style={{ background: "#FFFFFF", padding: "28px 22px 20px" }}>
      {/* Eyebrow */}
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <Eyebrow>By your judgment</Eyebrow>
      </div>

      {/* Heading */}
      <H2 size={28} center>60 days to try</H2>

      {/* Body */}
      <p style={{
        fontSize: 15, lineHeight: 1.7, color: B.soft,
        margin: "0 0 14px",
      }}>
        60 days to try the Body-Signal approach. By your judgment. Here's how you'll know it's working: your child shows any sign of awareness they've never shown before. A pause after the accident. A look down at the wet spot. A step toward the potty. That's the body signal bridge starting to form.
      </p>
      <p style={{
        fontSize: 15, lineHeight: 1.7, color: B.soft,
        margin: "0 0 14px",
      }}>
        If you see nothing, no change at all, full refund. Every dollar.
      </p>
      <p style={{
        fontSize: 15, lineHeight: 1.7, color: B.soft,
        margin: "0 0 22px",
      }}>
        The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system. We don't know if it will work for your child. We know it works for 92% of families who try it. But your child is not a statistic.
      </p>

      {/* CTA */}
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <a href="#" style={{
          display: "inline-block", padding: "17px 32px",
          background: B.ink, color: "#D8F57C", fontSize: 15.5, fontWeight: 700,
          textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
        }}>
          Try the 3+3 Bundle →
        </a>
      </div>

      {/* Fine print */}
      <p style={{
        fontSize: 12.5, color: B.soft, fontStyle: "italic",
        margin: "0 0 18px", textAlign: "center",
      }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>

      {/* Next time teaser */}
      <p style={{
        fontSize: 14, color: B.muted, margin: 0, textAlign: "center",
      }}>
        Next time: Your decision — what to do next, with no pressure.
      </p>
    </div>

    {/* ══════ SEPARATOR ══════ */}
    <div style={{
      height: 1, background: "#E8EAEB",
      margin: "0 22px",
    }} />

    {/* ══════ SECTION 9: SIGNOFF — LENA ══════ */}
    <Signoff />

    {/* ══════ SECTION 10: FOOTER ══════ */}
    <Footer />

  </EmailShell>
);

// Register on window for rendering
Object.assign(window, { Email_welcome_01_e6_l2 });
