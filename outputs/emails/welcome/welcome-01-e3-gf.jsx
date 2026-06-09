/* Welcome Flow — E3 | General Family
   Wireframe: wireframes/welcome/welcome-01-e3-gf.md
   Strategy: strategy-map.json → welcome.emails.e3-gf
   Generated: 2026-06-09
*/

const Email_Welcome_E3_GF = () => (
  <EmailShell preheader="The science behind why traditional potty training fails some children, and what actually works." bg={B.paper}>

    {/* ── Header ── */}
    <Header bg={B.paper} />

    {/* ═══════ BAND TRANSITION ═══════ */}
    <Band from={B.teal} to="transparent" height={3} />

    {/* ═══════ HERO / TITLE BLOCK ═══════ */}
    <TitleBlock
      badge="3/8 — THE SIGNAL"
      part1="Three parents, three different kids,"
      part2="one common experience:"
      accent2={true}
    />

    {/* ═══════ BODY-SIGNAL WAVE ILLUSTRATION ═══════ */}
    <div style={{ padding: "0 22px 24px", background: B.paper }}>
      <ImgFrame
        height={200}
        radius={20}
        label="SIGNAL PATHWAY"
        sublabel="Concentric rings radiating from child silhouette — body signal traveling from bladder to brain"
      />
    </div>

    {/* ═══════ THREE-FAMILY HOOK (Pull-Quote Cards) ═══════ */}
    <div style={{ padding: "4px 24px 28px", background: B.paper }}>
      {/* Pull Quote 1 */}
      <div style={{
        background: "#F5F0EB",
        borderLeft: "3px solid #C4B5A5",
        borderRadius: 8,
        padding: "18px 20px",
        marginBottom: 14,
      }}>
        <p style={{
          margin: 0,
          fontFamily: "'Georgia', serif",
          fontSize: 17,
          fontStyle: "italic",
          lineHeight: 1.6,
          color: B.ink,
        }}>
          "He talks about the potty. He understands the concept. But when it's time to actually go, nothing."
        </p>
      </div>

      {/* Pull Quote 2 */}
      <div style={{
        background: "#EEF3ED",
        borderLeft: "3px solid #B8C9B4",
        borderRadius: 8,
        padding: "18px 20px",
        marginBottom: 14,
      }}>
        <p style={{
          margin: 0,
          fontFamily: "'Georgia', serif",
          fontSize: 17,
          fontStyle: "italic",
          lineHeight: 1.6,
          color: B.ink,
        }}>
          "We've done the OT sensory work, the BCBA protocol, the social stories, the sticker charts. We are stuck."
        </p>
      </div>

      {/* Pull Quote 3 */}
      <div style={{
        background: "#F0EEF5",
        borderLeft: "3px solid #B8B0CC",
        borderRadius: 8,
        padding: "18px 20px",
        marginBottom: 20,
      }}>
        <p style={{
          margin: 0,
          fontFamily: "'Georgia', serif",
          fontSize: 17,
          fontStyle: "italic",
          lineHeight: 1.6,
          color: B.ink,
        }}>
          "He's never shown a single sign of feeling wet or dirty. Not once in all these years."
        </p>
      </div>

      {/* Body Copy */}
      <p style={{
        margin: 0,
        fontSize: 15,
        lineHeight: 1.7,
        color: B.soft,
      }}>
        If any of these sound familiar, you're not alone. And you're not failing. You're working with a missing piece most potty training methods don't account for.
      </p>
    </div>

    {/* ═══════ GRADIENT BAND DIVIDER (20.3) ═══════ */}
    <div style={{
      height: 3,
      background: `linear-gradient(90deg, ${B.teal}33 0%, transparent 100%)`,
    }} />

    {/* ═══════ STAT ROW — 49% Validation (SP-03) ═══════ */}
    <div style={{ background: "#F8F6F0", padding: "32px 22px" }}>
      {/* Large Stat */}
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <span style={{
          fontFamily: "'Georgia', serif",
          fontSize: 48,
          fontWeight: 700,
          letterSpacing: -1,
          color: B.ink,
          lineHeight: 1,
        }}>49%</span>
      </div>
      <p style={{
        textAlign: "center",
        fontSize: 17,
        lineHeight: 1.6,
        color: B.soft,
        margin: "0 0 20px",
      }}>
        of autistic 4-5 year olds are not yet toilet trained.
      </p>

      {/* Bar Chart Comparison */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: B.ink, width: 50 }}>49%</span>
          <div style={{ flex: 1, height: 22, background: "#E8E4DC", borderRadius: 6, overflow: "hidden" }}>
            <div style={{ width: "49%", height: "100%", background: B.teal, borderRadius: 6 }} />
          </div>
          <span style={{ fontSize: 12, color: B.muted, width: 40 }}>ASD</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: B.ink, width: 50 }}>8%</span>
          <div style={{ flex: 1, height: 22, background: "#E8E4DC", borderRadius: 6, overflow: "hidden" }}>
            <div style={{ width: "8%", height: "100%", background: B.muted, borderRadius: 6 }} />
          </div>
          <span style={{ fontSize: 12, color: B.muted, width: 40 }}>typical</span>
        </div>
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <span style={{
            fontSize: 12,
            fontWeight: 700,
            color: B.teal,
            background: `${B.teal}15`,
            padding: "3px 10px",
            borderRadius: 999,
          }}>6:1 gap</span>
        </div>
      </div>

      {/* Citation */}
      <p style={{
        margin: 0,
        fontSize: 15,
        lineHeight: 1.6,
        color: B.soft,
      }}>
        That's not a made-up number. That's from a CDC-funded study of 743 children (Wiggins et al. 2022). Compare that to 8% of typically developing kids of the same age, and the gap is 6:1.
      </p>
    </div>

    {/* ═══════ MECHANISM — Why the Signal Doesn't Arrive (EDU-8) ═══════ */}
    <div style={{ background: B.paper, padding: "32px 22px" }}>
      <H2 center>Why the Signal Doesn't Arrive</H2>

      <ImgFrame
        height={180}
        radius={20}
        label="INTEROCEPTION DIAGRAM"
        sublabel="Brain-body connection — stylized illustration showing interoception signal pathway"
      />

      <p style={{ fontSize: 17, lineHeight: 1.6, color: B.soft, margin: "20px 0 14px" }}>
        Every sticker chart and timer sit assumes your child <em>feels</em> the sensation of a full bladder. But research consistently shows many autistic children have a measurable difference in <strong style={{ color: B.ink }}>interoception</strong> — the <strong style={{ color: B.ink }}>eighth sensory system</strong> that tells the brain when we're hungry, thirsty, or need the bathroom.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: B.soft, margin: 0 }}>
        The signal from bladder to brain is delayed or absent. It's not defiance. It's neurology. And here's the part that matters: <strong style={{ color: B.ink }}>interoception can be trained.</strong> The childhood window is the intervention opportunity.
      </p>
    </div>

    {/* ═══════ TESTIMONIAL — Three-Family Gallery ═══════ */}
    <div style={{ background: B.paper, padding: "24px 22px" }}>
      {/* Testimonial 1 */}
      <div style={{
        background: "#F5F0EB",
        borderLeft: "3px solid #C4B5A5",
        borderRadius: 8,
        padding: "18px 20px",
        marginBottom: 14,
      }}>
        <div style={{ color: "#D4A574", fontSize: 14, marginBottom: 8, letterSpacing: 2 }}>★★★★★</div>
        <p style={{
          margin: "0 0 10px",
          fontFamily: "'Georgia', serif",
          fontSize: 16,
          fontStyle: "italic",
          lineHeight: 1.5,
          color: B.ink,
        }}>
          "He said 'I need to pee' AFTER it's already happened for two years. After two weeks in BrightKidCo underwear, he paused. Then he looked down. Then he walked to the potty. It was small, maybe nothing to someone else. But that never happened before."
        </p>
        <div style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.4 }}>— Mom of a 5-year-old, Level 2</div>
      </div>

      {/* Testimonial 2 */}
      <div style={{
        background: "#EEF3ED",
        borderLeft: "3px solid #B8C9B4",
        borderRadius: 8,
        padding: "18px 20px",
        marginBottom: 14,
      }}>
        <div style={{ color: "#D4A574", fontSize: 14, marginBottom: 8, letterSpacing: 2 }}>★★★★★</div>
        <p style={{
          margin: "0 0 10px",
          fontFamily: "'Georgia', serif",
          fontSize: 16,
          fontStyle: "italic",
          lineHeight: 1.5,
          color: B.ink,
        }}>
          "I was skeptical. We'd tried everything. But the 60-day guarantee made me feel safe trying. Week three, she stopped in the middle of playing and touched her underwear. She didn't make it to the bathroom that time. But she FELT it."
        </p>
        <div style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.4 }}>— Mom of a 4-year-old, Level 1</div>
      </div>

      {/* Testimonial 3 */}
      <div style={{
        background: "#F0EEF5",
        borderLeft: "3px solid #B8B0CC",
        borderRadius: 8,
        padding: "18px 20px",
      }}>
        <div style={{ color: "#D4A574", fontSize: 14, marginBottom: 8, letterSpacing: 2 }}>★★★★★</div>
        <p style={{
          margin: "0 0 10px",
          fontFamily: "'Georgia', serif",
          fontSize: 16,
          fontStyle: "italic",
          lineHeight: 1.5,
          color: B.ink,
        }}>
          "In 9 years, he never once showed awareness of being wet. After a month in these, he looked down. He paused. That was huge for us."
        </p>
        <div style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.4 }}>— Mom of a 9-year-old, Level 3</div>
      </div>
    </div>

    {/* ═══════ PRODUCT — Body-Signal Learning System (ProductShowcaseFull) ═══════ */}
    <ProductShowcaseFull
      eyebrow="The product"
      title="The Body-Signal Learning"
      titleAccent="System™"
      sub="BrightKidCo isn't training underwear in the traditional sense. It's a Body-Signal Learning System built around one principle: the brain needs feedback to learn."
      priceFrom="$79.99"
      priceNote="3+3 Bundle · 6 pairs · Save 62% vs singles"
      features={[
        { icon: "◉", label: "Body-Signal Learning Layer™" },
        { icon: "✓", label: "60-day guarantee" },
        { icon: "♡", label: "Sensory-friendly" },
      ]}
      ctaButton="Start with the 3+3 Bundle, $79.99"
    />

    {/* ── 3-Layer System Detail ── */}
    <div style={{ padding: "0 22px 28px", background: B.paper }}>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "0 0 14px" }}>
        <strong style={{ color: B.ink }}>1. Cotton Inner Layer</strong> — Creates a gentle, sustained "uh-oh" sensation when wet. Not a shock, not an alarm. A 30-60 second window of feedback that gives a nervous system that picks up signals slowly time to register: <em>something happened.</em>
      </p>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "0 0 14px" }}>
        <strong style={{ color: B.ink }}>2. Smart Absorption Core</strong> — Protects furniture, floors, and clothes without wicking the wetness signal away like a pull-up does. It's the difference between "too dry to feel" and "there's a signal your brain can learn from."
      </p>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "0 0 14px" }}>
        <strong style={{ color: B.ink }}>3. Leak-Resistant Outer Barrier</strong> — Made for real life. Playgrounds. Car seats. Grandma's couch. Because you shouldn't have to choose between body awareness and mess-free days.
      </p>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0 }}>
        This isn't a pull-up replacement. It's a <strong style={{ color: B.ink }}>learning tool</strong>, designed for the brain that learns differently.
      </p>
    </div>

    {/* ═══════ CTA + GUARANTEE (CTA-5 + TRUST-1) ═══════ */}
    <div style={{ background: B.ink, padding: "20px 22px 44px", textAlign: "center" }}>
      {/* Guarantee Copy */}
      <p style={{
        fontSize: 14,
        lineHeight: 1.6,
        color: "#B8CACD",
        margin: "0 0 24px",
      }}>
        Whether you're just starting to explore or you've been at this for years, the bundle covers enough pairs to rotate through laundry cycles while your child's brain builds the connection.
      </p>
      <p style={{
        fontSize: 14,
        lineHeight: 1.6,
        color: "#B8CACD",
        margin: "0 0 24px",
      }}>
        Or start with 1 pair ($34.99) if you want to try before committing.
      </p>
      <p style={{
        fontSize: 13,
        lineHeight: 1.5,
        color: "#8A9B9D",
        fontStyle: "italic",
        margin: "0 0 20px",
      }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>

      {/* Primary CTA Button */}
      <a href="#" style={{
        display: "inline-block",
        padding: "17px 32px",
        background: B.ink,
        color: "#D8F57C",
        fontSize: 15.5,
        fontWeight: 700,
        textDecoration: "none",
        borderRadius: 999,
        letterSpacing: 0.3,
        border: `2px solid #D8F57C`,
      }}>
        Start with the 3+3 Bundle, $79.99 →
      </a>

      {/* Trust Row */}
      <div style={{ marginTop: 16, fontSize: 11.5, color: "#8A9B9D" }}>
        60-Day Guarantee · Free Shipping · Secure Checkout
      </div>
    </div>

    {/* ═══════ NEXT TIME TEASER ═══════ */}
    <div style={{ background: B.ink, padding: "0 22px 20px", textAlign: "center" }}>
      <p style={{
        fontSize: 14,
        color: "#B8CACD",
        margin: 0,
      }}>
        Next time: How the Body-Signal Learning Layer works — and why it's different from everything you've tried.
      </p>
    </div>

    {/* ═══════ SIGNOFF ═══════ */}
    <Signoff bg={B.ink} />

    {/* ═══════ OUTLINE + FOOTER ═══════ */}
    <OutLine />
    <Footer />

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E3_GF });
