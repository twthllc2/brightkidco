/* Welcome Flow — E1 | L1
   Wireframe: wireframes/welcome/welcome-01-e1-l1.md
   Strategy: strategy-map.json → welcome.emails.e1-l1
   Generated: 2026-06-09
*/

const Email_Welcome_E1_L1 = () => (
  <EmailShell preheader="His brain and bladder are sending messages on different frequencies. Here's what that means." bg="#FAF9F7">

    {/* ── Header ── */}
    <Header bg={B.paper} />

    {/* ═══════ HERO: Handwritten Letter Opener ═══════ */}
    <div style={{ padding: "34px 22px 0", textAlign: "center" }}>
      <Eyebrow>A NOTE FROM LENA</Eyebrow>
      <FramedImage
        height={220}
        label="LIFESTYLE"
        sublabel="Toddler with potty training ladder, bright yellow woodland setting, natural light"
      />
      <h1 style={{
        fontSize: 28, lineHeight: 1.15, fontWeight: 700,
        margin: "20px 0 0", letterSpacing: -0.5, color: B.ink,
      }}>
        He talks about it but<br/>won't do it
      </h1>
      <p style={{
        fontSize: 17, color: B.soft, marginTop: 14,
        lineHeight: 1.5, fontWeight: 500,
      }}>
        His brain and bladder are sending messages on different frequencies. Here's what that means.
      </p>
    </div>

    {/* ═══════ BAND: Hero → Body ═══════ */}
    <Band from={B.teal} to={B.green} height={40} />

    {/* ═══════ LETTER: Hook + Validation ═══════ */}
    <div style={{
      background: B.paper, padding: "4px 24px 28px",
      fontSize: 15, lineHeight: 1.7, color: B.soft,
    }}>
      {/* Hook paragraph 1 */}
      <p style={{ margin: "0 0 14px", fontSize: 17, color: B.ink, fontWeight: 600 }}>
        He talks about the potty, "I need to go," he says, looking right at you. Then he pees on the floor 30 seconds later. Not because he's being difficult. Not because he doesn't understand. Because the signal arrives too late.
      </p>

      {/* Parent Quote 1 */}
      <div style={{
        background: "#FBF7EB", borderLeft: "3px solid #DBFFCD",
        borderRadius: 12, padding: "12px 16px 12px 20px",
        margin: "0 0 14px", boxShadow: "0 2px 8px rgba(26,26,26,0.06)",
      }}>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: B.ink, fontStyle: "italic" }}>
          "He says 'I need to pee' AFTER it's already happened."
        </p>
      </div>

      {/* Hook paragraph 2 */}
      <p style={{ margin: "0 0 14px" }}>
        That sentence, if it sounds familiar, is the entire problem in seven words. Your child knows what the potty is. He wants to use it. He tells you he's going. But his body doesn't give him the message until the toilet is irrelevant.
      </p>

      {/* Hook paragraph 3 */}
      <p style={{ margin: "0 0 14px" }}>
        You know he's smart. You've seen him figure things out. So why won't his body cooperate with what his brain clearly wants?
      </p>

      {/* Validation paragraph 1 */}
      <p style={{ margin: "0 0 14px", fontSize: 17, color: B.ink, fontWeight: 600 }}>
        Thisn't your fault. And it's not his.
      </p>

      {/* Validation paragraph 2 */}
      <p style={{ margin: "0 0 14px" }}>
        For months, maybe longer, you've been asking the same questions. Is he being stubborn? Does he need more time? Did I do something wrong? You've read the articles. You've tried the methods. You've watched other kids his age figure it out while yours keeps having accidents.
      </p>

      {/* Validation paragraph 3 */}
      <p style={{ margin: "0 0 14px" }}>
        Here's what almost no one told you: his brain and bladder are sending messages on <span style={{ fontWeight: 600, color: B.ink }}>different frequencies</span>. There's nothing wrong with either one. They just aren't connected the way traditional potty training assumes they are.
      </p>

      {/* Parent Quote 2 */}
      <div style={{
        background: "#FBF7EB", borderLeft: "3px solid #DBFFCD",
        borderRadius: 12, padding: "12px 16px 12px 20px",
        margin: "0 0 14px", boxShadow: "0 2px 8px rgba(26,26,26,0.06)",
      }}>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: B.ink, fontStyle: "italic" }}>
          "He has a perfect week, then a month of accidents."
        </p>
      </div>

      {/* Validation paragraph 4 */}
      <p style={{ margin: 0 }}>
        That inconsistency, the good days followed by the bad, isn't a behavioral choice. It's not regression. It's a <span style={{ fontWeight: 600, color: B.ink }}>neurological signal gap</span> that doesn't care about yesterday's success. Your child can't "try harder" to feel something his body isn't telling him.
      </p>
    </div>

    {/* ═══════ BAND: Body → Mechanism ═══════ */}
    <Band from={B.teal} to={B.green} height={24} />

    {/* ═══════ MECHANISM: Did You Know ═══════ */}
    <div style={{ background: B.paper, padding: "24px 22px" }}>
      <Eyebrow>DID YOU KNOW?</Eyebrow>

      {/* Stat Callout Box */}
      <div style={{
        background: B.paper, border: `1px solid ${B.teal}`,
        borderTop: "4px solid #FFD866", borderRadius: 12,
        padding: 24, margin: "0 0 20px",
      }}>
        <p style={{ margin: "0 0 8px", fontSize: 16, color: B.soft, lineHeight: 1.5 }}>
          This gap has a name:
        </p>
        <p style={{
          margin: "0 0 8px", fontFamily: "'Fraunces', serif",
          fontSize: 24, lineHeight: 1.2, color: B.teal, fontStyle: "italic",
        }}>
          interoception
        </p>
        <p style={{ margin: 0, fontSize: 16, color: B.soft, lineHeight: 1.5 }}>
          — the body's ability to sense internal signals like hunger, thirst, and the need to use the bathroom.
        </p>
      </div>

      {/* Mechanism body */}
      <p style={{ margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: B.soft }}>
        Research shows autistic children show significantly diminished body awareness — a real, measurable neurological difference, not a behavioral issue.
      </p>
      <p style={{ margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: B.soft }}>
        Over 90% of autistic children have <span style={{ fontWeight: 600, color: B.ink }}>sensory processing differences</span>, which is why timed sits and sticker charts fail. You can't reward a child into feeling something their nervous system isn't delivering.
      </p>
      <p style={{ margin: 0, fontSize: 13, color: B.muted }}>
        Nicholson et al. 2019
      </p>
    </div>

    {/* ═══════ PRODUCT: ProductShowcaseMedium ═══════ */}
    <ProductShowcaseMedium
      eyebrow="THE METHOD SARAH USED"
      title="Body-Signal Learning Layer™"
      priceFrom="€34"
      ctaButton="See the pants"
    />

    {/* ═══════ CTA: Gentle Invite ═══════ */}
    <div style={{ background: B.paper, padding: "24px 22px 44px", textAlign: "center" }}>
      <p style={{
        margin: "0 0 14px", fontSize: 17, color: B.ink,
        fontWeight: 600, lineHeight: 1.6,
      }}>
        Here's the good news: interoception can be trained.
      </p>
      <p style={{ margin: "0 0 14px", fontSize: 17, color: B.soft, lineHeight: 1.6 }}>
        Hample, Mahler &amp; Amspacher (2020) showed that targeted interoception intervention produces measurable improvement in body awareness. The gap isn't permanent. But it needs a different approach, one that doesn't assume the signal is already there.
      </p>
      <p style={{ margin: "0 0 14px", fontSize: 17, color: B.soft, lineHeight: 1.6 }}>
        The next email in this series will show you what that approach looks like. Not another method. Not a reward system. A genuine mechanism designed for the way your child's nervous system actually works.
      </p>
      <p style={{ margin: "0 0 24px", fontSize: 17, color: B.ink, fontWeight: 600 }}>
        Let's explore what's really happening with his body signals.
      </p>

      {/* CTA Button — full-width green */}
      <a href="#" style={{
        display: "block", padding: "17px 32px",
        background: "#039902", color: "#FFFFFF",
        fontSize: 18, fontWeight: 700,
        textDecoration: "none", borderRadius: 999,
        letterSpacing: 0.5, textAlign: "center",
      }}>
        See How Body-Signal Learning Works →
      </a>

      {/* Secondary text link */}
      <p style={{ margin: "20px 0 0" }}>
        <a href="#" style={{ color: B.teal, fontSize: 14, textDecoration: "underline" }}>
          Read the science behind it →
        </a>
      </p>

      {/* Price note */}
      <p style={{ margin: "16px 0 0", fontSize: 14, color: B.muted, fontStyle: "italic" }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>
    </div>

    {/* ═══════ TONAL SHIFT RULE ═══════ */}
    <div style={{ height: 1, background: "#E8DED5" }} />

    {/* ═══════ TRUST: 60-Day Seal ═══════ */}
    <div style={{
      background: B.cream, padding: 24, borderRadius: 16,
      border: `2px solid ${B.green}`, margin: "24px 22px",
      textAlign: "center",
    }}>
      <p style={{ margin: 0, fontSize: 16, color: B.ink, lineHeight: 1.6 }}>
        Try it for 60 days.
      </p>
    </div>

    {/* ═══════ SIGNOFF ═══════ */}
    <Signoff />

    {/* ═══════ OUTLINE + FOOTER ═══════ */}
    <OutLine />
    <Footer />

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E1_L1 });
