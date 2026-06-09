/* Welcome Flow — E4 | Level 1
   Wireframe: wireframes/welcome/welcome-01-e4-l1.md
   Strategy: strategy-map.json → welcome.emails.e4-l1
   Generated: 2026-06-09
*/

const Email_Welcome_E4_L1 = () => (
  <EmailShell preheader="The 3-layer thing, without the jargon." bg="#FAF9F5">

    {/* ── Header ── */}
    <Header bg="#FFFFFF" />

    {/* ═══════ HERO — HERO-17: Social Proof Hero ═══════ */}
    <div style={{ background: "#FDF8F5", padding: "0 24px 24px", textAlign: "center" }}>
      {/* Hero Image */}
      <ImgFrame
        height={340}
        label="HERO · LIFESTYLE"
        sublabel="A child in BrightKidCo training pants playing — rearview, cat mustard palette, warm natural light"
      />
      {/* Real review as headline */}
      <h2 style={{
        fontSize: 28, fontWeight: 700, lineHeight: 1.2,
        letterSpacing: -0.5, color: "#2C2420",
        fontFamily: "'Georgia', serif",
        margin: "24px 0 8px",
      }}>
        3 years to train, then we found the signal
      </h2>
      <p style={{
        fontSize: 14, color: "#4A3F3A", lineHeight: 1.5,
        margin: "8px 0 0",
      }}>
        Every parent who's gotten through this will tell you the same thing.
      </p>
    </div>

    {/* ═══════ HOOK — LETTER-01: Pull-Quote Section ═══════ */}
    <div style={{ background: "#FFFFFF", padding: "24px" }}>
      <div style={{ borderLeft: "3px solid #E87A5D", paddingLeft: 20, marginBottom: 20 }}>
        <p style={{
          fontSize: 24, fontWeight: 700, lineHeight: 1.3,
          letterSpacing: -0.3, color: "#2C2420",
          fontFamily: "'Georgia', serif",
          fontStyle: "italic",
          margin: 0,
        }}>
          "It took us 3 years. He's finally trained."
        </p>
      </div>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
        margin: "0 0 14px",
      }}>
        That's a real review from a Level 1 parent. Another one says: "He had a perfect week, then a month of accidents."
      </p>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
        margin: 0,
      }}>
        If that sounds like your child, inconsistent, almost there but not quite, able to do it one day and not the next, you're not failing. You're experiencing what every L1 parent experiences before they understand what's really going on.
      </p>
    </div>

    {/* ═══════ VALIDATION — LETTER-01: Paragraph Stack ═══════ */}
    <div style={{ background: "#F5EDE8", padding: "24px", borderTop: "1px solid #E8DDD6" }}>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
        margin: "0 0 14px",
      }}>
        You've tried the sticker charts. You've done the timer sits. You've read the books. You've done naked weekends.
      </p>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
        margin: "0 0 14px",
      }}>
        And your child? He talks about the potty. He knows what to do. He's smart, you see it everywhere else. But when it comes to actually feeling the need to go and acting on it? Something doesn't connect.
      </p>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
        margin: "0 0 14px",
      }}>
        Here's the truth that changes everything: <strong>thisn't about the method. It's about the signal.</strong>
      </p>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
        margin: "0 0 14px",
      }}>
        Every parent who's gotten through this, and thousands have, will tell you the same thing. The problem isn't that your child won't train. The problem is that his brain isn't receiving the message that says "I need to go" in time to do something about it.
      </p>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
        margin: 0,
      }}>
        You didn't fail. The methods you tried assumed the signal was there. For many autistic children, it isn't.
      </p>
    </div>

    {/* ═══════ MECHANISM — EDU-9: Tip Cards ═══════ */}
    <div style={{ background: "#FFFFFF", padding: "24px", borderTop: "1px solid #E8DDD6" }}>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
        margin: "0 0 14px",
      }}>
        Here's what the research says: <strong>49% of autistic 4-5 year olds are still not toilet trained</strong> — 6x the rate of typically developing kids.
      </p>

      {/* 49% Stat Callout Box */}
      <div style={{
        background: "#F5EDE8", borderRadius: 4,
        padding: "16px 20px", textAlign: "center",
        marginBottom: 20,
      }}>
        <span style={{
          fontSize: 36, fontWeight: 700, color: "#2B6B76",
          lineHeight: 1,
        }}>49%</span>
        <span style={{
          fontSize: 14, color: "#4A3F3A", display: "block",
          marginTop: 4, lineHeight: 1.4,
        }}>of autistic 4-5 year olds still not toilet trained</span>
      </div>

      <p style={{
        fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
        margin: "0 0 14px",
      }}>
        Interoception works differently in autistic children. A 2025 systematic review of 49 studies confirmed this is settled science, and the critical finding: this is a <strong>childhood phenomenon</strong>. The intervention window is now.
      </p>

      {/* 3 Tip Cards — vertical stack with teal check markers */}
      <div style={{ marginBottom: 16 }}>
        <div style={{
          display: "flex", alignItems: "flex-start", gap: 12,
          padding: "14px 0", borderBottom: "1px solid #E8DDD6",
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 3 }}>
            <path d="M1,7 L5,11 L13,1" stroke="#2B6B76" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A3F3A", margin: 0 }}>
            The body-signal underwear creates a gentle "uh-oh" sensation lasting 30-60 seconds, long enough for a developing body signal system to register: <em>something happened.</em> Repeated exposure builds the neural pathway. The brain learns to recognize the signal <strong>before</strong> the accident, not after.
          </p>
        </div>
        <div style={{
          display: "flex", alignItems: "flex-start", gap: 12,
          padding: "14px 0", borderBottom: "1px solid #E8DDD6",
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 3 }}>
            <path d="M1,7 L5,11 L13,1" stroke="#2B6B76" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A3F3A", margin: 0 }}>
            Each accident becomes a learning moment instead of a crisis. The child's nervous system starts to map: <em>feeling wet = I need to go.</em>
          </p>
        </div>
        <div style={{
          display: "flex", alignItems: "flex-start", gap: 12,
          padding: "14px 0",
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 3 }}>
            <path d="M1,7 L5,11 L13,1" stroke="#2B6B76" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A3F3A", margin: 0 }}>
            The 3+3 Bundle gives you 6 pairs — enough for consistent daily rotation. No gaps in the learning cycle.
          </p>
        </div>
      </div>
    </div>

    {/* ═══════ SOCIAL PROOF — SP-01: Yellow Quote Block ═══════ */}
    <div style={{ background: "#FFFFFF", padding: "24px", borderTop: "1px solid #E8DDD6" }}>
      {/* Quote 1 */}
      <div style={{
        border: "1px solid #E8DDD6", borderRadius: 8,
        padding: 24, marginBottom: 16,
      }}>
        <div style={{
          background: "#FFD866", borderRadius: 4,
          padding: "4px 10px", display: "inline-block",
          marginBottom: 12, fontSize: 12, fontWeight: 700,
          letterSpacing: 0.5, textTransform: "uppercase",
          color: "#2C2420",
        }}>Parent Voice</div>
        <p style={{
          fontSize: 16, lineHeight: 1.5, fontStyle: "italic",
          color: "#2C2420", fontFamily: "'Georgia', serif",
          margin: "0 0 10px",
        }}>
          "He went today! Once! But he went!"
        </p>
        <p style={{
          fontSize: 13, letterSpacing: 0.3, color: "#8A7A72",
          margin: 0,
        }}>
          — Real L1 parent, 2 weeks into Body-Signal learning
        </p>
      </div>

      {/* Quote 2 */}
      <div style={{
        border: "1px solid #E8DDD6", borderRadius: 8,
        padding: 24, marginBottom: 16,
      }}>
        <div style={{
          background: "#FFD866", borderRadius: 4,
          padding: "4px 10px", display: "inline-block",
          marginBottom: 12, fontSize: 12, fontWeight: 700,
          letterSpacing: 0.5, textTransform: "uppercase",
          color: "#2C2420",
        }}>Parent Voice</div>
        <p style={{
          fontSize: 16, lineHeight: 1.5, fontStyle: "italic",
          color: "#2C2420", fontFamily: "'Georgia', serif",
          margin: "0 0 10px",
        }}>
          "He says 'I need to pee' AFTER it's already happened. After 2 weeks in BKC undies, he paused. Then he looked down. Then he walked to the potty. Small, but that never happened before."
        </p>
        <p style={{
          fontSize: 13, letterSpacing: 0.3, color: "#8A7A72",
          margin: 0,
        }}>
          — L1 parent review
        </p>
      </div>

      {/* Quote 3 */}
      <div style={{
        border: "1px solid #E8DDD6", borderRadius: 8,
        padding: 24, marginBottom: 16,
      }}>
        <div style={{
          background: "#FFD866", borderRadius: 4,
          padding: "4px 10px", display: "inline-block",
          marginBottom: 12, fontSize: 12, fontWeight: 700,
          letterSpacing: 0.5, textTransform: "uppercase",
          color: "#2C2420",
        }}>Parent Voice</div>
        <p style={{
          fontSize: 16, lineHeight: 1.5, fontStyle: "italic",
          color: "#2C2420", fontFamily: "'Georgia', serif",
          margin: "0 0 10px",
        }}>
          "We tried everything: Oh Crap, sticker charts, candy bribes, timer sits, social stories, nothing worked. Three weeks in BKC underwear and he stayed dry for 2 hours. Two hours. That had never happened in his entire life."
        </p>
        <p style={{
          fontSize: 13, letterSpacing: 0.3, color: "#8A7A72",
          margin: 0,
        }}>
          — Verified BKC customer
        </p>
      </div>

      {/* Closing copy */}
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
        margin: 0, fontStyle: "italic",
      }}>
        These aren't overnight success stories. They're real parents, real kids, real progress, on a timeline that respects neurology, not a marketing calendar.
      </p>
    </div>

    {/* ═══════ PRODUCT — FSHOP-N: ProductShowcaseFull ═══════ */}
    <div style={{ background: "#FFFFFF", padding: "24px", borderTop: "1px solid #E8DDD6" }}>
      {/* Product Image */}
      <ImgFrame
        height={400}
        label="PRODUCT · FLAT LAY"
        sublabel="BrightKidCo body-signal training pants in fox red white pattern — flat-lay, centered, fabric texture visible"
      />

      <h3 style={{
        fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
        color: "#2C2420", margin: "20px 0 12px",
      }}>3-Layer Breakdown</h3>

      <p style={{
        fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
        margin: "0 0 16px",
      }}>
        The BrightKidCo body-signal underwear is 3 layers designed for one purpose: give the brain feedback it's been missing.
      </p>

      {/* Layer Table */}
      <div style={{
        border: "1px solid #E8DDD6", borderRadius: 8,
        overflow: "hidden", marginBottom: 16,
      }}>
        {/* Layer 1 */}
        <div style={{
          display: "flex", alignItems: "flex-start", gap: 12,
          padding: "14px 16px", borderBottom: "1px solid #E8DDD6",
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 4 }}>
            <path d="M1,7 L5,11 L13,1" stroke="#2B6B76" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#2C2420", margin: "0 0 4px" }}>
              Layer 1 — Inner Body-Signal Layer
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.5, color: "#4A3F3A", margin: 0 }}>
              100% cotton, gentle "uh-oh" sensation when wet — the feedback the brain needs
            </p>
          </div>
        </div>
        {/* Layer 2 */}
        <div style={{
          display: "flex", alignItems: "flex-start", gap: 12,
          padding: "14px 16px", borderBottom: "1px solid #E8DDD6",
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 4 }}>
            <path d="M1,7 L5,11 L13,1" stroke="#2B6B76" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#2C2420", margin: "0 0 4px" }}>
              Layer 2 — Smart Absorption Core
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.5, color: "#4A3F3A", margin: 0 }}>
              Absorbs accidents without wicking the signal away (unlike pull-ups)
            </p>
          </div>
        </div>
        {/* Layer 3 */}
        <div style={{
          display: "flex", alignItems: "flex-start", gap: 12,
          padding: "14px 16px",
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 4 }}>
            <path d="M1,7 L5,11 L13,1" stroke="#2B6B76" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#2C2420", margin: "0 0 4px" }}>
              Layer 3 — Protective Outer Barrier
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.5, color: "#4A3F3A", margin: 0 }}>
              Leak-resistant protection — your furniture, your sanity
            </p>
          </div>
        </div>
      </div>

      <p style={{
        fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
        margin: "0 0 12px",
      }}>
        The <strong>3+3 Bundle</strong> gives you 6 pairs, enough for consistent daily rotation. No gaps in the learning cycle. Free shipping.
      </p>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
        margin: 0, fontWeight: 700,
      }}>
        L1 pricing: 3+3 Bundle, $79.99
      </p>
    </div>

    {/* ═══════ GUARANTEE — TRUST-1: 60-Day Seal ═══════ */}
    <div style={{
      background: "#FFFFFF", padding: "24px",
      borderTop: "1px solid #E8DDD6",
    }}>
      <div style={{
        border: "2px dashed #2B6B76", borderRadius: 8,
        padding: 24, textAlign: "center",
      }}>
        <h3 style={{
          fontSize: 22, fontWeight: 700, lineHeight: 1.3,
          color: "#2C2420", fontFamily: "'Georgia', serif",
          margin: "0 0 12px",
        }}>
          60 days. Your judgment.
        </h3>
        <p style={{
          fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
          margin: "0 0 14px",
        }}>
          You don't have to believe the research, the testimonials, or me. You just have to try.
        </p>
        <p style={{
          fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
          margin: "0 0 14px",
        }}>
          If your child shows no sign of body awareness, no pause, no look, no step toward the potty, full refund. No questions. No hoops.
        </p>
        <p style={{
          fontSize: 17, lineHeight: 1.6, color: "#4A3F3A",
          margin: 0,
        }}>
          That's not a sales tactic. It's the only honest offer when the outcome depends on your child's nervous system.
        </p>
      </div>
    </div>

    {/* ═══════ CTA — CTA-5: Product CTA ═══════ */}
    <div style={{
      background: "#FFFFFF", padding: "30px 24px",
      borderTop: "1px solid #E8DDD6", textAlign: "center",
    }}>
      {/* Calendar icon + 3 dots — L1 easter egg */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginBottom: 16 }}>
        <svg width="14" height="14" viewBox="0 0 14 14" style={{ opacity: 0.5 }}>
          <rect x="1" y="3" width="12" height="10" rx="2" stroke="#4A3F3A" strokeWidth="1.2" fill="none" />
          <line x1="1" y1="6" x2="13" y2="6" stroke="#4A3F3A" strokeWidth="1.2" />
          <line x1="4" y1="1" x2="4" y2="5" stroke="#4A3F3A" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="10" y1="1" x2="10" y2="5" stroke="#4A3F3A" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: 11, color: "#8A7A72", letterSpacing: 1 }}>• • •</span>
      </div>

      <p style={{
        fontSize: 14, lineHeight: 1.6, color: "#4A3F3A",
        margin: "0 0 16px",
      }}>
        See if the 3+3 Bundle closes the gap before Pre-K
      </p>

      {/* CTA Button — 56px height, L1 urgency */}
      <a href="https://www.brightkidco.com/collections/all-products" style={{
        display: "block",
        padding: "16px 24px",
        height: 56, lineHeight: "24px",
        background: "#2B6B76",
        color: "#FFFFFF",
        fontSize: 18, fontWeight: 700,
        letterSpacing: 0.5,
        textDecoration: "none",
        borderRadius: 8,
        textAlign: "center",
        boxSizing: "border-box",
      }}>
        Shop the 3+3 Bundle, $79.99
      </a>

      <p style={{
        fontSize: 14, lineHeight: 1.5, color: "#4A3F3A",
        margin: "14px 0 8px", fontStyle: "italic",
      }}>
        $13.33 per pair with the bundle — less than half the single-pair price.
      </p>

      {/* Trust signals row */}
      <p style={{
        fontSize: 13, lineHeight: 1.5, color: "#8A7A72",
        margin: 0,
      }}>
        ✓ Free shipping  ✓ 60-day returns  ✓ Secure checkout
      </p>
    </div>

    {/* ═══════ NEXT TEASER — LETTER-06: PS Teaser ═══════ */}
    <div style={{ background: "#FFFFFF", padding: "16px 16px", textAlign: "center" }}>
      <p style={{
        fontSize: 14, fontStyle: "italic", color: "#8A7A72",
        margin: 0,
      }}>
        <strong>Next time:</strong> Real stories from parents who've been exactly where you are.
      </p>
    </div>

    {/* ═══════ SIGNOFF — UTIL-05: Lena Sign-Off (MEDIUM variant) ═══════ */}
    <Signoff bg="#FFFFFF" />

    {/* ═══════ OUTLINE + FOOTER ═══════ */}
    <OutLine bg="#FFFFFF" />
    <Footer />

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E4_L1 });
