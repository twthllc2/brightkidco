/* Welcome Flow — E3 | L1
   Wireframe: wireframes/welcome/welcome-01-e3-l1.md
   Strategy: strategy-map.json → welcome.emails.e3-l1
   Generated: 2026-06-09
*/

const Email_Welcome_E3_L1 = () => (
  <EmailShell preheader="49% of autistic 4-5 year olds aren't trained. Not a parenting failure, a documented difference." bg="#FAF9F7">

    {/* ── Header ── */}
    <Header bg={B.paper} />

    {/* ═══ BAND TRANSITION ═══ */}
    <Band from={B.paper} to={B.cream} height={40} />

    {/* ═══ HERO — Bold Declaration ═══ */}
    <TitleBlock
      badge="3/8 — THE SIGNAL"
      part1="The Science Behind the"
      part2={'"Uh-Oh" Sensation'}
      accent2={true}
    />

    {/* ═══ Signal Path Illustration ═══ */}
    <div style={{ padding: "24px 22px 0" }}>
      <ImgFrame
        height={160}
        radius={20}
        label="SIGNAL PATH · ANIMATED ILLUSTRATION"
        sublabel="Dotted neural arc: fragmented → connecting → solid emerald glow"
      />
    </div>

    {/* ═══ LETTER — Hook + Validation + Mechanism ═══ */}
    <div style={{ background: "#FAF9F7", padding: "24px 22px" }}>

      {/* Hook — warm entry, no border */}
      <p style={{ margin: "0 0 14px", fontSize: 17, color: B.ink, lineHeight: 1.6 }}>
        Pre-K starts in a few months. He needs to be trained. You've tried sticker charts. You've tried timers. You've probably read Oh Crap, tried the naked weekend, and wondered why nothing stuck. Here's what nobody told you, and it changes everything about how you think about this.
      </p>

      {/* ── Signal Dot Divider (8px) ── */}
      <div style={{ textAlign: "center", padding: "18px 0" }}>
        <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: B.green }} aria-hidden="true" />
      </div>

      {/* Validation — 3px emerald left border */}
      <div style={{ borderLeft: `3px solid ${B.green}`, paddingLeft: 16, marginBottom: 14 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 10px", lineHeight: 1.25, color: B.ink }}>
          Forty-nine percent of autistic 4-5 year olds aren't toilet trained.
        </h2>
        <p style={{ fontSize: 32, fontWeight: 700, color: B.green, margin: "0 0 10px", fontFamily: "'Questrial', sans-serif", lineHeight: 1 }}>
          49%
        </p>
        <p style={{ fontSize: 17, color: B.soft, lineHeight: 1.6, margin: 0 }}>
          That's a CDC-funded study of 743 children (Wiggins et al. 2022). Compare that to just 8% of typically developing kids at the same age. That is 6 times more likely to still not be trained. This not a failure of parenting. It's not a failure of your child. It's a documented, measurable neurological gap, and naming it is the first step to closing it.
        </p>
      </div>

      {/* ── Signal Dot Divider (10px) ── */}
      <div style={{ textAlign: "center", padding: "18px 0" }}>
        <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: B.green }} aria-hidden="true" />
      </div>

      {/* Mechanism — plain */}
      <p style={{ fontSize: 17, color: B.soft, lineHeight: 1.6, margin: "0 0 14px" }}>
        Here's what's actually happening. Your child's brain isn't receiving the body's signal early enough. Research shows autistic children process internal body signals differently — the feeling of 'I need to go' arrives AFTER it's already happened.
      </p>
      <p style={{ fontSize: 17, color: B.soft, lineHeight: 1.6, margin: "0 0 14px" }}>
        This why everything you've tried felt like it almost worked. Sticker charts assume he can feel the signal. Timers assume the body runs on a predictable clock. For kids whose brains don't receive the signal on time, they create frustration.
      </p>
      <p style={{ fontSize: 17, color: B.soft, lineHeight: 1.6, margin: 0 }}>
        The Body-Signal Learning Layer gives the nervous system the feedback it's been missing. When an accident happens, the cotton inner layer preserves a gentle 'uh-oh' sensation for 30-60 seconds, sustained long enough for the brain to register: something happened.
      </p>
    </div>

    {/* ═══ Signal Path GIF ═══ */}
    <div style={{ padding: "0 22px 24px" }}>
      <ImgFrame
        height={160}
        radius={20}
        label="SIGNAL PATH GIF"
        sublabel="2-second animated cycle · fragmented → connecting → solid emerald glow"
      />
    </div>

    {/* ═══ TESTIMONIAL — Yellow Quote Block ═══ */}
    <div style={{ padding: "24px 22px" }}>
      <div style={{
        background: "#FFFDF6",
        borderTop: "2px solid #FFD866",
        borderLeft: `3px solid ${B.green}`,
        borderRadius: 20,
        padding: "24px 22px",
      }}>
        <p style={{ fontSize: 16, lineHeight: 1.5, color: "#777777", fontStyle: "italic", margin: "0 0 14px" }}>
          "He says 'I need to pee' AFTER it's already happened." That's what one L1 mom told us before she started using BSL. Two weeks in, something shifted. Her son paused mid-accident. Then he looked down. Then he walked to the potty. Not a full success. Not yet. But that pause had never happened before in three years of trying.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.5, color: "#777777", fontStyle: "italic", margin: 0 }}>
          That's what a 30-second sustained signal does. It doesn't train your child. It gives his brain the information it's been missing.
        </p>
      </div>
    </div>

    {/* ═══ MECHANISM — Step Cards ═══ */}
    <div style={{ padding: "24px 22px" }}>
      <H2 center>The BSL System — 3 Layers</H2>

      {/* Step 1 */}
      <div style={{
        background: "#FFFFFF",
        borderRadius: 20,
        padding: "18px 22px",
        marginBottom: 12,
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
      }}>
        <span style={{ fontSize: 18, color: B.green, lineHeight: 1, marginTop: 2 }}>●</span>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: B.ink, marginBottom: 4 }}>Layer 1 (cotton inner)</div>
          <div style={{ fontSize: 16, color: B.soft, lineHeight: 1.5 }}>creates the sustained signal.</div>
        </div>
      </div>

      {/* Step 2 */}
      <div style={{
        background: "#FFFFFF",
        borderRadius: 20,
        padding: "18px 22px",
        marginBottom: 12,
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
      }}>
        <span style={{ fontSize: 18, color: B.green, lineHeight: 1, marginTop: 2 }}>●</span>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: B.ink, marginBottom: 4 }}>Layer 2 (smart absorption core)</div>
          <div style={{ fontSize: 16, color: B.soft, lineHeight: 1.5 }}>protects clothes and furniture without blocking the learning sensation.</div>
        </div>
      </div>

      {/* Step 3 */}
      <div style={{
        background: "#FFFFFF",
        borderRadius: 20,
        padding: "18px 22px",
        marginBottom: 14,
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
      }}>
        <span style={{ fontSize: 18, color: B.green, lineHeight: 1, marginTop: 2 }}>●</span>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: B.ink, marginBottom: 4 }}>Layer 3 (protective outer barrier)</div>
          <div style={{ fontSize: 16, color: B.soft, lineHeight: 1.5 }}>resists leaks so you can stay calm while your child's brain does the work.</div>
        </div>
      </div>

      <p style={{ fontSize: 17, color: B.ink, fontStyle: "italic", textAlign: "center", margin: 0 }}>
        "It's built for the brain that learns differently."
      </p>
    </div>

    {/* ═══ PRODUCT — ProductShowcaseFull ═══ */}
    <ProductShowcaseFull
      eyebrow="The method"
      title="Body-Signal Learning"
      titleAccent="Layer™"
      priceFrom="$79.99"
      priceNote="3+3 Bundle · 6 pairs · Save 62%"
      features={[
        { icon: "◉", label: "Body-Signal Layer™" },
        { icon: "✓", label: "60-day guarantee" },
        { icon: "♡", label: "Sensory-friendly" },
      ]}
      ctaButton="See if the 3+3 bundle works for your child"
    />

    {/* ═══ GUARANTEE — 60-Day Seal ═══ */}
    <div style={{ padding: "16px 22px" }}>
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <span style={{
          display: "inline-block",
          background: "#DBFFCD",
          color: B.green,
          padding: "6px 14px",
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 0.5,
        }}>
          60-Day Money Back
        </span>
      </div>
      <p style={{ fontSize: 15, color: B.soft, textAlign: "center", lineHeight: 1.5, margin: 0 }}>
        60 days to try it. By your judgment. If it doesn't work for your child, full refund.
      </p>
    </div>

    {/* ═══ CTA + PRICING ═══ */}
    <div style={{ padding: "24px 22px" }}>
      {/* Primary CTA */}
      <a href="#" style={{
        display: "block",
        padding: "17px 32px",
        background: B.green,
        color: "#FFFFFF",
        fontSize: 15.5,
        fontWeight: 700,
        textDecoration: "none",
        borderRadius: 999,
        textAlign: "center",
        letterSpacing: 0.3,
        marginBottom: 14,
      }}>
        See if the 3+3 bundle works for your child
      </a>

      {/* Secondary Link */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <a href="#" style={{
          fontSize: 13,
          color: B.tealDeep,
          textDecoration: "underline",
        }}>
          Learn how body signals work
        </a>
      </div>

      {/* Pricing Box */}
      <div style={{
        background: "#FFFDF6",
        borderRadius: 20,
        padding: "22px 24px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 17, fontWeight: 700, color: B.ink, marginBottom: 6 }}>
          3 + 3 FREE Bundle, 6 pairs
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: B.ink, marginBottom: 8 }}>
          $79.99 + FREE Shipping
        </div>
        <div style={{
          display: "inline-block",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          color: B.green,
          marginBottom: 10,
        }}>
          BESTSELLER
        </div>
        <div style={{ fontSize: 14, color: B.soft, marginBottom: 4 }}>
          Save 62% vs. buying singles
        </div>
        <div style={{ fontSize: 13, color: B.soft, lineHeight: 1.5 }}>
          That's $13.33 per pair with the bundle — less than half the single-pair price.
        </div>
      </div>
    </div>

    {/* ═══ DIVIDER ═══ */}
    <div style={{ padding: "0 22px" }}>
      <hr style={{ border: "none", borderTop: "1px solid #E5E0D8", margin: 0 }} />
    </div>

    {/* ═══ NEXT TIME TEASER ═══ */}
    <div style={{ padding: "20px 22px", textAlign: "center" }}>
      <p style={{ fontSize: 14, color: "#4A6568", margin: 0, lineHeight: 1.5 }}>
        Next time: How the Body-Signal Learning Layer works — and why it's different from everything you've tried.
      </p>
    </div>

    {/* ═══ SIGNOFF — Lena ═══ */}
    <div style={{ background: B.ink, padding: "0 22px 36px" }}>
      <div style={{
        position: "relative",
        background: "#1F2A2C",
        border: "1.5px solid #2F3D40",
        borderRadius: 22,
        padding: "26px 24px 24px",
        overflow: "hidden",
      }}>
        {/* subtle top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: B.gradient, opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: `linear-gradient(135deg, #FFD866 0%, ${B.teal} 100%)`,
            padding: 2.5,
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
            <div style={{ fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase", color: "#8FAFB2", fontWeight: 700, marginBottom: 2 }}>
              A note from
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
              Lena Bauer
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Customer Support · Mom of two autistic sons
            </div>
          </div>
        </div>

        {/* Handwritten signature */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          paddingTop: 16, paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }}>
              With understanding,
            </div>
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 42, lineHeight: 0.95,
              fontWeight: 500, color: "#D8F57C",
              letterSpacing: -0.5, marginTop: 2,
            }}>
              Lena
            </div>
          </div>
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Personal P.S. */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8. If your kid is anywhere on this curve, that's normal here.
        </div>
      </div>
    </div>

    {/* ═══ OUTLINE ═══ */}
    <div style={{ background: "#FFFFFF", padding: "18px 24px 0", textAlign: "center", fontSize: 12.5, color: B.muted, fontStyle: "italic" }}>
      Reply to this email, Lena reads every response.
    </div>

    {/* ═══ FOOTER ═══ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px 30px", textAlign: "center" }}>
      <div style={{ fontFamily: "'Questrial', sans-serif", fontSize: 20, fontStyle: "italic", fontWeight: 500, color: B.ink, marginBottom: 30, letterSpacing: -0.2 }}>
        Built for the brain that learns differently.
      </div>
      {["Shop", "Parent Stories", "Contact us", "FAQ"].map((l, i) => (
        <div key={i} style={{ fontSize: 14, color: B.ink, fontWeight: 500, marginBottom: 14 }}>
          <a href="#" style={{ color: B.ink, textDecoration: "none" }}>{l}</a>
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "center", gap: 22, margin: "14px 0 28px" }}>
        {/* Instagram */}
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill={B.ink} stroke="none" /></svg></a>
        {/* TikTok */}
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8"><path d="M16 3h-3a5 5 0 0 0-5 5v3H5v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3z" strokeLinejoin="round" /></svg></a>
      </div>
      <div style={{ fontSize: 11.5, color: B.muted, lineHeight: 1.65, margin: "0 auto", maxWidth: 340 }}>
        16,511 reviews · 4.9 ★, 100,000+ parents trust BrightKidCo
      </div>
      <div style={{ marginTop: 14, fontSize: 11, color: B.muted, lineHeight: 1.65 }}>
        BrightKidCo · Berlin, Germany · hello@brightkidco.com
      </div>
      <div style={{ marginTop: 8, fontSize: 11, color: B.muted }}>
        {"{% unsubscribe %} · Manage preferences"}
      </div>
      <div style={{ margin: "28px auto 0", width: 60, height: 3, background: B.gradient, borderRadius: 3 }} />
    </div>

    {/* ═══ EASTER EGG — Hidden Clock (L1 only) ═══ */}
    <div style={{ position: "relative", height: 0, overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: 80, left: 20, width: 60, height: 60, opacity: 0.3 }}>
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
          <div key={i} style={{
            position: "absolute",
            top: "50%", left: "50%",
            width: 1, height: i < 6 ? 6 : 3,
            background: "#DBFFCD",
            transformOrigin: "center 30px",
            transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-24px)`,
            opacity: i < 6 ? 1 : 0.4,
          }} />
        ))}
      </div>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E3_L1 });
