/* Welcome Flow — E5 | L1
   Wireframe: wireframes/welcome/welcome-01-e5-l1.md
   Strategy: strategy-map.json → welcome.emails.e5-l1
   Generated: 2026-06-09
*/

const Email_Welcome_E5_L1 = () => (
  <EmailShell preheader="Three methods. Zero results. Here's what every method missed." bg="#FAF9F5">

    {/* ── Header ── */}
    <Header bg="#FFFFFF" />

    {/* ══════════════ BAND TRANSITION ══════════════ */}
    <Band from={B.teal} to={B.green} height={40} />

    {/* ══════════════ HERO: Before Snapshot (HERO-12) ══════════════ */}
    <div style={{ padding: "0 14px 48px" }}>
      <div style={{
        background: "#FFFDF6",
        border: `2px solid ${B.ink}`,
        borderRadius: 20,
        boxShadow: `6px 6px 0 ${B.ink}`,
        overflow: "hidden",
      }}>
        <ImgFrame
          height={300}
          radius={0}
          label="HERO · BEFORE SNAPSHOT"
          sublabel="Lifestyle: parent + child, warm, natural light, genuine moment, not stock"
        />
        <div style={{ padding: "24px 22px 28px", textAlign: "center" }}>
          <h2 style={{
            fontSize: 28, lineHeight: 1.15, fontWeight: 700,
            margin: 0, letterSpacing: -0.4, color: B.ink,
          }}>
            What if I've tried everything?
          </h2>
          <p style={{ fontSize: 13, color: B.soft, marginTop: 10, lineHeight: 1.5 }}>
            Three methods. Zero results. Here's what every method missed.
          </p>
        </div>
      </div>
    </div>

    {/* ══════════════ LETTER: HOOK (LETTER-01) ══════════════ */}
    <div style={{
      background: "#FBF7F1",
      padding: "4px 24px 28px",
      fontSize: 15, lineHeight: 1.7, color: B.soft,
    }}>
      <p style={{ margin: "0 0 14px", fontSize: 17, color: B.ink, fontWeight: 600 }}>
        You've tried three methods. Maybe more. Oh Crap stressed you both out. Sticker charts didn't stick. The timer sits turned into a battle of wills.
      </p>
      <p style={{ margin: "0 0 14px" }}>
        And here you are. Still searching. Still wondering what you're missing.
      </p>

      {/* Pull-quote — Fraunces italic, center-aligned */}
      <p style={{
        margin: "18px 0",
        fontFamily: "'Fraunces', serif",
        fontSize: 22, fontStyle: "italic", lineHeight: 1.4,
        color: B.ink, textAlign: "center",
      }}>
        "What if I've tried everything and nothing works?" — the most honest question a parent can ask.
      </p>

      <p style={{ margin: "0 0 14px" }}>
        I get it. That's the most honest question a parent can ask. You've invested time, money, and hope into approaches that promised results. Each time you thought "this is the one", and each time, you ended up back here, with a child who still can't feel when they need to go.
      </p>
      <p style={{ margin: 0 }}>
        That's not naivety. That's love. You kept trying because giving up felt worse.
      </p>
    </div>

    {/* ══════════════ GRADIENT BAND ══════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════ VALIDATION: Objection Naming ══════════════ */}
    <div style={{ background: "#FFFFFF", padding: "22px 22px 48px" }}>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
        First: you didn't fail. Those methods didn't fail either, they just couldn't work for your child.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
        Here's why.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
        Every potty training method you've ever read assumes one thing: that your child can <em>feel</em> when they need to go. The sensation of a full bladder. The "uh-oh, something's happening" signal. That's the foundation that every method builds on.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 18px" }}>
        But research shows that for many autistic children, that signal doesn't arrive in time. The brain and bladder are talking, just on different frequencies.
      </p>

      {/* ── Science Callout Box ── */}
      <div style={{
        background: "#FFF8EE",
        borderLeft: "1px solid #FFD866",
        borderRadius: 8,
        padding: "16px 18px",
        marginBottom: 18,
      }}>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: B.soft, margin: 0 }}>
          <span style={{
            fontFamily: "'Fraunces', serif", fontStyle: "italic", fontWeight: 500,
          }}>Nicholson et al. (2019)</span>{" "}
          found that children with ASD show significantly diminished body awareness, the ability to sense internal body states like bladder fullness. It's not behavioral. It's neurological.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0 }}>
        And here's the thing: you can't build awareness with a clock. You can't sticker-chart your way to a signal that isn't arriving.
      </p>
    </div>

    {/* ══════════════ GRADIENT BAND ══════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════ REFRAME: Mechanism Answer ══════════════ */}
    <div style={{ background: "#FFFFFF", padding: "22px 22px 48px" }}>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
        So when you ask "Why would this be different?", the answer is the mechanism.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
        The <strong style={{ fontWeight: 700 }}>body-signal underwear</strong> creates a gentle sensation that lasts, 30 to 60 seconds after every accident, that gives the brain feedback it's been missing. Not a punishment. Not a shock. A <strong style={{ fontWeight: 700 }}>signal</strong>.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0 }}>
        Research confirms interoception can be trained — that body awareness can improve with the right sustained input. The 3-Layer System is built on that science.
      </p>
    </div>

    {/* ══════════════ GRADIENT BAND ══════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════ SIGNAL GAP DIAGRAM (EDU-4) ══════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 14px 48px" }}>
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        {/* Left Panel: What's happening now */}
        <div style={{
          flex: 1, background: "#FFFFFF",
          border: `1.5px solid ${B.muted}`,
          borderRadius: 12, padding: 18,
        }}>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: 1.5,
            textTransform: "uppercase", color: B.teal, marginBottom: 10,
          }}>
            What's happening now
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.5, color: B.soft }}>
            <p style={{ margin: "0 0 6px" }}>Bladder full →</p>
            <p style={{ margin: "0 0 6px" }}>Signal travels →</p>
            <p style={{ margin: "0 0 6px" }}>Brain registers →</p>
            <p style={{ margin: "0 0 6px" }}>BUT signal arrives too late →</p>
            <p style={{ margin: 0, fontWeight: 600 }}>"I need to go" = already wet</p>
          </div>
        </div>

        {/* Arrow */}
        <div style={{ flexShrink: 0, color: B.teal, fontSize: 24, fontWeight: 700 }}>→</div>

        {/* Right Panel: What BSL changes */}
        <div style={{
          flex: 1, background: "#FFFFFF",
          border: `1.5px solid ${B.muted}`,
          borderRadius: 12, padding: 18,
        }}>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: 1.5,
            textTransform: "uppercase", color: B.teal, marginBottom: 10,
          }}>
            What BSL changes
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.5, color: B.soft }}>
            <p style={{ margin: "0 0 6px" }}>BSL Layer →</p>
            <p style={{ margin: "0 0 6px" }}>Creates 30-60s sustained sensation →</p>
            <p style={{ margin: "0 0 6px" }}>Brain gets feedback →</p>
            <p style={{ margin: 0, fontWeight: 600 }}>Brain learns to recognize signal before event</p>
          </div>
        </div>
      </div>
    </div>

    {/* ══════════════ SOCIAL PROOF: Yellow Quote Block (SP-01) ══════════════ */}
    <div style={{ background: "#FFF8EE", padding: "22px 22px 36px", position: "relative" }}>
      {/* Decorative opening quote mark */}
      <div style={{
        position: "absolute", top: 14, left: 18,
        fontSize: 48, lineHeight: 1, color: "#FFD866",
        fontFamily: "'Fraunces', serif", fontWeight: 700,
        pointerEvents: "none",
      }}>
        {"\u201C"}
      </div>

      {/* Stars */}
      <div style={{ fontSize: 14, color: "#FFD866", marginBottom: 12, paddingLeft: 36 }}>
        ★★★★★
      </div>

      {/* Quote */}
      <div style={{
        fontSize: 15, lineHeight: 1.7, color: B.soft,
        fontStyle: "italic", paddingLeft: 36, marginBottom: 14,
      }}>
        "He said 'I need to pee' AFTER it already happened. After 2 weeks in BKC undies, he paused. Then he looked down. Then he walked to the potty. Small, but that never happened before."
      </div>

      {/* Closing */}
      <div style={{ fontSize: 14, lineHeight: 1.5, color: B.soft, textAlign: "center" }}>
        That pause. That look. That's the signal firing for the first time.
      </div>
    </div>

    {/* ══════════════ PRODUCT: 3-Layer System (ProductShowcaseFull) ══════════════ */}
    <ProductShowcaseFull
      eyebrow="The product"
      title="Body-Signal Learning"
      titleAccent="Layer™ Pants"
      priceFrom="$79.99"
      priceNote="3+3 Bundle · 6 pairs for consistent learning"
      ctaButton="Try the 3+3 Bundle"
      features={[
        { icon: "◉", label: "Body-Signal Layer™" },
        { icon: "✓", label: "60-day guarantee" },
        { icon: "♡", label: "Sensory-friendly" },
      ]}
      guaranteeBadge={true}
    />

    {/* ══════════════ GRADIENT BAND ══════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════ GUARANTEE: 60-Day Seal (TRUST-1) ══════════════ */}
    <div style={{ background: "#E8EDE4", padding: "28px 22px 40px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
        {/* Badge */}
        <div style={{
          width: 56, height: 56, flexShrink: 0,
          border: `2px solid ${B.ink}`,
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontSize: 28, fontWeight: 700, color: B.ink, lineHeight: 1 }}>60</span>
        </div>

        <div style={{ flex: 1 }}>
          <p style={{
            fontSize: 15, lineHeight: 1.7, color: B.ink,
            margin: "0 0 14px", fontWeight: 700,
          }}>
            60 days to try. By your judgment.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: B.ink, margin: "0 0 14px" }}>
            You don't have to believe me. Honestly.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
            If your child shows no sign of body awareness, no pause, no look, no step toward the potty, full refund. No questions. No return shipping costs. No "but did you try it for exactly 60 days?" fine print.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
            The guarantee exists because the outcome depends on your child's nervous system, not on hype. Some kids show first signs in 2 weeks. Others need 8. The 60-day window covers the full range of what's normal.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0 }}>
            I can't promise your child will be trained by September. I can promise that 60 days in Body-Signal underwear will give you better information about your child's interoception than any method you've tried before.
          </p>
        </div>
      </div>
    </div>

    {/* ══════════════ CTA: Product CTA (CTA-5) ══════════════ */}
    <div style={{ background: "#FFFFFF", padding: "36px 22px 48px", textAlign: "center" }}>
      <p style={{
        fontSize: 14, lineHeight: 1.6, color: B.soft,
        margin: "0 0 20px", fontStyle: "italic",
      }}>
        Next time: Why pull-ups might be the one thing holding your child back.
      </p>

      <a href="#" style={{
        display: "inline-block",
        padding: "17px 32px",
        background: B.teal,
        color: "#FFFFFF",
        fontSize: 15.5,
        fontWeight: 700,
        textDecoration: "none",
        borderRadius: 999,
        letterSpacing: 0.3,
      }}>
        See if the 3+3 Bundle closes the gap before Pre-K
      </a>

      <div style={{ marginTop: 16, fontSize: 11, color: B.muted, letterSpacing: 0.3 }}>
        Free shipping · 60-day guarantee · Secure checkout
      </div>

      <p style={{ fontSize: 11.5, color: B.muted, marginTop: 14, lineHeight: 1.5 }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>
    </div>

    {/* ══════════════ SIGNOFF: Lena (Medium) ══════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 14px 36px" }}>
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

        {/* Personal message */}
        <div style={{
          fontSize: 12.5, lineHeight: 1.65, color: "#B8CACD",
          borderBottom: "1.5px dashed #3A4547",
          paddingBottom: 16, marginBottom: 16,
        }}>
          I have two autistic sons. One trained at 6. The other took us until he was almost 8. I know what it's like to read an email like this and think "I've heard this before."
          <br/><br/>
          Your skepticism is legitimate. So is the science.
          <br/><br/>
          If you've got a question, hit reply. You'll get me, not a template, not a bot. I read everything.
        </div>

        {/* Handwritten signature */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          paddingTop: 16, paddingBottom: 16,
          borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }}>
              With care,
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

          {/* tiny flourish SVG */}
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Personal P.S. */}
        <div style={{
          fontSize: 13, lineHeight: 1.65, color: "#B8CACD",
          fontStyle: "italic",
        }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          Pre-K is coming. If September is your target, Day 10 of the Welcome Flow is when most parents who go on to succeed place their first order. The 3+3 Bundle ($79.99, free shipping) gives your child 6 pairs of consistent daily wear. 60-day guarantee means you decide if it worked.
        </div>
      </div>
    </div>

    {/* ══════════════ OUTLINE ══════════════ */}
    <OutLine bg="#FFFFFF" />

    {/* ══════════════ FOOTER ══════════════ */}
    <Footer />

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E5_L1 });
