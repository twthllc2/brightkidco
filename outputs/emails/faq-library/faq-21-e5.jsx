/* FAQ/Objection Library — E5 | Cross-Level (R1–R6)
   Wireframe: wireframes/faq-library/faq-21-e5.md
   Copy: copy/faq-library/faq-21-e5.md
   Flow 21 · Day 5 of FAQ Sequence
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
// Mint Callout component (EDU-10 / Bridge Strategy)
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
// Testimonial Card component
// ══════════════════════════════════════════════════════
const TestimonialCard = ({ name, children }) => (
  <div style={{
    background: "#FFFFFF",
    borderLeft: `4px solid ${B.green}`,
    borderRadius: 12,
    padding: "20px 22px",
    marginBottom: 16,
  }}>
    <div style={{ fontSize: 16, fontWeight: 700, color: B.ink, marginBottom: 10 }}>
      {name}
    </div>
    <p style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontSize: 15,
      fontWeight: 400,
      fontStyle: "italic",
      lineHeight: 1.6,
      color: B.soft,
      margin: 0,
    }}>
      {children}
    </p>
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

const Email_faq_21_e5 = () => (
  <EmailShell preheader="Whether you're navigating a BCBA, an IEP, a GI protocol, or all three — the answer starts in the same place." bg={B.cream}>

    {/* ── Header ── */}
    <Header bg={B.paper} />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-3 Permission Open
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "40px 24px" }}>
      {/* Hero illustration placeholder — three puzzle pieces */}
      <div style={{ marginBottom: 24 }}>
        <ImgFrame
          height={260}
          label="HERO ILLUSTRATION"
          sublabel="Three puzzle pieces (clipboard, building, stethoscope) pointing toward one missing green center piece. Hand-drawn style."
          radius={20}
        />
      </div>

      <h1 style={{
        fontFamily: F.main,
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: -0.5,
        color: B.ink,
        margin: "0 0 16px",
        textAlign: "center",
      }}>
        Your BCBA has a protocol. Your school has a policy. Your GI doctor has a treatment plan.
      </h1>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 12px",
        textAlign: "center",
      }}>
        If you're reading this, you're probably managing all three at once, and none of them are getting your child out of pull-ups.
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: 0,
        textAlign: "center",
      }}>
        Here's why. And what to do about it.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       WAVE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <WaveDivider height={32} opacity={0.6} />

    {/* ══════════════════════════════════════════════════════
       SECTION 3: BCBA OBJECTION (LETTER-03)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "32px 24px" }}>
      <Eyebrow>THE BCBA QUESTION</Eyebrow>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 16px",
      }}>
        Your BCBA has been doing the hard work for years. ABA addresses the behavioral component, compliance, routines, prompt-fading, scheduled sits. What it can't address is the sensory component: your child's ability to FEEL the signal.
      </p>

      <PullQuote>
        Your BCBA can't prompt a sensory signal into existence.
      </PullQuote>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: 0,
      }}>
        This isn't about replacing ABA. It's about filling a gap ABA isn't designed for.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       WAVE DIVIDER (thinner)
       ══════════════════════════════════════════════════════ */}
    <WaveDivider height={24} opacity={0.4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: SCHOOL OBJECTION (LETTER-03)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "32px 24px" }}>
      <Eyebrow>THE SCHOOL QUESTION</Eyebrow>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 16px",
      }}>
        Your school or daycare has policies based on neurotypical timelines. If your child isn't 'fully trained,' they require a pull-up.
      </p>

      <PullQuote>
        Pull-ups actively remove the wetness signal your child needs.
      </PullQuote>

      <MintCallout>
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          lineHeight: 1.6,
          color: B.ink,
          margin: 0,
        }}>
          Underwear under the pull-up: daycare sees the pull-up, your child still feels the feedback.
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
        Your school has policies. We work around them.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       WAVE DIVIDER (thinner)
       ══════════════════════════════════════════════════════ */}
    <WaveDivider height={24} opacity={0.4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: MEDICAL/GI OBJECTION (LETTER-03)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "32px 24px" }}>
      <Eyebrow>THE MEDICAL QUESTION</Eyebrow>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 16px",
      }}>
        Your GI doctor manages the medical piece — withholding, constipation, MiraLAX, ER visits when things go wrong.
      </p>

      <PullQuote>
        Your GI doctor can't prescribe body awareness.
      </PullQuote>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 12px",
      }}>
        That's critical care. But the same interoception gap that blocks pee signals also blocks poop signals.
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: 0,
        fontWeight: 600,
      }}>
        Your GI doctor manages the medical piece. We handle the sensory learning layer alongside.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       WAVE DIVIDER (thinnest)
       ══════════════════════════════════════════════════════ */}
    <WaveDivider height={20} opacity={0.3} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: MECHANISM (EDU-10: Callout)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "32px 24px" }}>
      <MintCallout>
        <p style={{
          fontFamily: F.main,
          fontSize: 17,
          lineHeight: 1.7,
          color: B.ink,
          margin: "0 0 12px",
          fontWeight: 600,
        }}>
          Here's what connects all three:
        </p>

        <p style={{
          fontFamily: F.main,
          fontSize: 17,
          lineHeight: 1.7,
          color: B.ink,
          margin: "0 0 12px",
        }}>
          Every system your child is in — BCBA, school, medical — assumes the 'I need to go' signal arrives in time to act on it.
        </p>

        <p style={{
          fontFamily: F.main,
          fontSize: 17,
          lineHeight: 1.7,
          color: B.ink,
          margin: "0 0 12px",
        }}>
          For kids whose nervous systems process body signals differently, that assumption is the crack everything else falls through.
        </p>

        <p style={{
          fontFamily: F.main,
          fontSize: 13,
          color: B.muted,
          margin: 0,
          fontStyle: "italic",
        }}>
          Nicholson et al. 2019 — interoception gap research
        </p>
      </MintCallout>

      <div style={{ marginTop: 16 }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
          <span style={{ fontFamily: F.display, fontSize: 17, color: B.ink, flexShrink: 0 }}>•</span>
          <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink, margin: 0 }}>
            Your BCBA can't prompt a sensory signal.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
          <span style={{ fontFamily: F.display, fontSize: 17, color: B.ink, flexShrink: 0 }}>•</span>
          <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink, margin: 0 }}>
            Your school can't teach interoception in a pull-up.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontFamily: F.display, fontSize: 17, color: B.ink, flexShrink: 0 }}>•</span>
          <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink, margin: 0 }}>
            Your GI doctor can't prescribe body awareness.
          </p>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       WAVE DIVIDER (thinner)
       ══════════════════════════════════════════════════════ */}
    <WaveDivider height={24} opacity={0.4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: THREE-FAMILY TESTIMONIALS (SP-05)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "32px 24px" }}>
      <Eyebrow>THREE FAMILIES. THREE SITUATIONS. ONE COMMON THREAD.</Eyebrow>

      <TestimonialCard name="Sarah">
        Her son was 4, verbal, and 'almost trained' three separate times. BCBA protocol had him on a 30-minute sit schedule for 18 months. Nothing changed. Two weeks in the body-signal underwear, he paused mid-play for the first time. That was Week 2. By Week 8 he was initiating on his own.
      </TestimonialCard>

      <TestimonialCard name="Lisa">
        Her daughter was 6, sensory-sensitive, in ABA since age 3, and had an IEP that required pull-ups during school hours. The school would put the pull-up back on the minute she arrived. The bridge strategy, underwear under the pull-up, changed everything. She started coming home dry after two weeks.
      </TestimonialCard>

      <TestimonialCard name="Maria">
        Her child was 8, non-verbal, with a history of withholding that led to two ER visits. The underwear didn't fix the medical piece, that's for the doctor. But for the first time he started pausing, looking down, acknowledging something was happening. That's not training. That's signal awareness. And that was enough.
      </TestimonialCard>
    </div>

    {/* ══════════════════════════════════════════════════════
       WAVE DIVIDER (thinner)
       ══════════════════════════════════════════════════════ */}
    <WaveDivider height={24} opacity={0.4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: WHAT THIS DOESN'T/DOES (LETTER-03)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "32px 24px" }}>
      {/* What This Doesn't Promise */}
      <div style={{
        background: "#FFFFFF",
        borderTop: `1px solid ${B.muted}`,
        borderRadius: 12,
        padding: "20px 22px",
        marginBottom: 16,
      }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: B.ink, marginBottom: 12 }}>
          WHAT THIS DOESN'T PROMISE:
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 16, color: B.soft, flexShrink: 0 }}>•</span>
          <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft, margin: 0 }}>
            This isn't a guarantee your child will be 'fully trained' in X weeks.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 16, color: B.soft, flexShrink: 0 }}>•</span>
          <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft, margin: 0 }}>
            This isn't asking you to replace your BCBA's protocol.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 16, color: B.soft, flexShrink: 0 }}>•</span>
          <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft, margin: 0 }}>
            This isn't one more thing to add to your already full plate.
          </p>
        </div>
      </div>

      {/* What This Does Offer */}
      <div style={{
        background: B.cream,
        borderTop: `1px solid ${B.muted}`,
        borderRadius: 12,
        padding: "20px 22px",
      }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: B.ink, marginBottom: 12 }}>
          WHAT THIS DOES OFFER:
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 16, color: B.soft, flexShrink: 0 }}>•</span>
          <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft, margin: 0 }}>
            A 60-day chance to see if your child starts to notice something.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 16, color: B.soft, flexShrink: 0 }}>•</span>
          <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft, margin: 0 }}>
            A full refund if it doesn't work.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 16, color: B.soft, flexShrink: 0 }}>•</span>
          <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft, margin: 0 }}>
            A bridge strategy that works WITH your existing systems.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 16, color: B.soft, flexShrink: 0 }}>•</span>
          <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft, margin: 0 }}>
            A peer who's been through all three.
          </p>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: PRODUCT + GUARANTEE (TRUST-1)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "32px 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 20px",
      }}>
        If any of this sounds like your situation, the 3+3 Bundle is $79.99 with free shipping and a 60-Day Guarantee.
      </p>

      <GuaranteeSeal />

      <p style={{
        fontFamily: F.main,
        fontSize: 13,
        lineHeight: 1.6,
        color: B.soft,
        margin: "16px 0 0",
        fontStyle: "italic",
      }}>
        Try the underwear for 60 days. If you don't see the first signals, a pause, a look down, a pull at the pants, return for a full refund. Your call.
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 14,
        color: B.muted,
        margin: "16px 0 0",
      }}>
        $13.33 per pair with the bundle — less than half the single-pair price.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: CTA (CTA-4: Gentle Invite)
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
        See the bridge strategy for your child's situation →
      </a>

      <p style={{
        fontFamily: F.main,
        fontSize: 14,
        color: B.muted,
        margin: "16px 0 0",
      }}>
        Try it for 60 days. By your judgment. If it doesn't work, full refund.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: PERMISSION CLOSE (LETTER-03)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "24px 24px" }}>
      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: "0 0 16px",
      }}>
        On the other hand, if today isn't the right day, that's a real answer. The systems your child is in aren't going anywhere. Neither are we.
      </p>

      <p style={{
        fontFamily: F.main,
        fontSize: 17,
        lineHeight: 1.7,
        color: B.soft,
        margin: 0,
      }}>
        Reply to this email and tell me about your child's situation — BCBA, school, medical, whatever it is. I read everything.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: LENA SIGN-OFF (MEDIUM variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "24px 24px" }}>
      <p style={{
        fontFamily: F.display,
        fontSize: 16,
        fontStyle: "italic",
        color: B.ink,
        margin: "0 0 12px",
      }}>
        With understanding,
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

      <p style={{
        fontFamily: F.main,
        fontSize: 14,
        fontStyle: "italic",
        color: B.muted,
        margin: 0,
        lineHeight: 1.6,
      }}>
        P.S. Both my sons had BCBAs. Both had school accommodations. One had GI issues. The systems aren't the enemy — they just weren't designed to build a sensory signal. That's what this fills. 60 days to see if it fits your child.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: FOOTER (UTIL-04)
       ══════════════════════════════════════════════════════ */}
    <Footer />

  </EmailShell>
);

// Register on window
Object.assign(window, { Email_faq_21_e5 });
