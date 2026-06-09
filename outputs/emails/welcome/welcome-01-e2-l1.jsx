/* Welcome Flow — E2 | L1
   Wireframe: wireframes/welcome/welcome-01-e2-l1.md
   Strategy: strategy-map.json → welcome.emails.e2-l1
   Generated: 2026-06-09
*/

const Email_Welcome_E2_L1 = () => (
  <EmailShell preheader="You didn't fail. The method assumes your child feels the 'I need to go' signal, here's what's really happening." bg="#FAF9F7">

    {/* ── Header ── */}
    <Header bg="#FAF9F7" />

    {/* ═══════ HERO: Mirror Moment ═══════ */}
    <div style={{ padding: "34px 22px 0", textAlign: "center", background: "#FDF8F3" }}>
      <Eyebrow color="#E8826A">THE AHA THAT CHANGES EVERYTHING</Eyebrow>
      <h1 style={{
        fontSize: 32, lineHeight: 1.1, fontWeight: 700,
        margin: "16px 0 0", letterSpacing: -0.6, color: B.ink,
      }}>
        The Real Reason<br/>Oh Crap Didn't Work
      </h1>
      <FramedImage
        height={220}
        label="SIGNAL BRIDGE"
        sublabel="3-frame illustration: Problem → Reframe → Solution tease"
      />
    </div>

    {/* ═══════ DIVIDER ═══════ */}
    <div style={{ padding: "40px 0", display: "flex", justifyContent: "center" }}>
      <div style={{ width: 60, height: 1.5, background: "#E2D5CA" }} />
    </div>

    {/* ═══════ LETTER: Paragraph Stack ═══════ */}
    <div style={{ background: "#FAF9F7", padding: "0 22px 24px", fontSize: 18, lineHeight: 1.6, color: "#3D322C" }}>
      {/* Hook */}
      <p style={{ margin: "0 0 14px" }}>
        Oh Crap stressed you both out. Sticker charts didn't stick. Timer sits became a battle.
      </p>

      {/* Failed Methods Recognition */}
      <p style={{ margin: "0 0 14px" }}>
        You did everything the books and the internet told you. You set timers. You offered M&Ms. You did the naked weekend, and held it for eight hours then peed on the rug.
      </p>
      <p style={{ margin: "0 0 14px" }}>
        You've tried 1-3 methods so far, and every single one assumed the same thing: that your child can feel when he needs to go.
      </p>
      <p style={{ margin: "0 0 14px", fontSize: 20, fontWeight: 600, color: B.ink }}>
        He can't.
      </p>
      <p style={{ margin: "0 0 14px" }}>
        Not because he's stubborn. Not because you're doing it wrong. Because the "I need to pee" signal, that internal body sensation most of us take for granted, doesn't arrive in time for many autistic children.
      </p>

      {/* Validation */}
      <p style={{ margin: "0 0 14px", fontSize: 20, fontWeight: 600, color: B.ink }}>
        Here's the thing that changes everything: you didn't fail. The methods did.
      </p>
      <p style={{ margin: "0 0 14px" }}>
        Oh Crap, sticker charts, timer sits, they all share a hidden assumption. They assume your child's nervous system sends the "I need to go" feeling loud and clear, and the only problem is getting him to the potty in time.
      </p>
      <p style={{ margin: "0 0 14px" }}>
        But for many autistic children, that signal is delayed or absent entirely. By the time his brain registers the message, it's already happening.
      </p>
      <p style={{ margin: 0, fontSize: 20, fontWeight: 600, color: B.ink }}>
        That's not defiance. That's neurology.
      </p>
    </div>

    {/* ═══════ DIVIDER ═══════ */}
    <div style={{ padding: "40px 0", display: "flex", justifyContent: "center" }}>
      <div style={{ width: 60, height: 1.5, background: "#E2D5CA" }} />
    </div>

    {/* ═══════ MECHANISM: Myth vs Fact ═══════ */}
    <div style={{ padding: "0 22px 24px" }}>
      <div style={{
        borderLeft: "3px solid #E8826A", borderRadius: 8,
        background: "#FDF8F3", padding: "16px 16px 16px 20px",
      }}>
        <p style={{
          margin: "0 0 14px", fontSize: 20, fontWeight: 500,
          color: B.ink, lineHeight: 1.4,
        }}>
          This called the <strong>interoception gap</strong> — the space between your child's body sending a signal and his brain receiving it.
        </p>
        <p style={{ margin: "0 0 14px", fontSize: 18, lineHeight: 1.6, color: "#3D322C" }}>
          The signal arrives, but milliseconds or minutes too late. That's why timed methods don't work: you can't build awareness with a clock. You need a signal — a real, physical cue that his nervous system can recognize before the event.
        </p>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "#3D322C" }}>
          The body-signal underwear creates a gentle sensation that lasts, 30 to 60 seconds of feedback, that bridges that gap.
        </p>
      </div>
    </div>

    {/* ═══════ DIVIDER ═══════ */}
    <div style={{ padding: "40px 0", display: "flex", justifyContent: "center" }}>
      <div style={{ width: 60, height: 1.5, background: "#E2D5CA" }} />
    </div>

    {/* ═══════ SOCIAL PROOF: Yellow Quote Block ═══════ */}
    <div style={{ padding: "0 22px 24px" }}>
      <div style={{
        background: "#FFD866", borderRadius: 16, padding: 20,
      }}>
        <p style={{
          margin: "0 0 16px", fontSize: 16, fontWeight: 500,
          color: B.ink, lineHeight: 1.4,
        }}>
          Real parents describe it exactly like this:
        </p>

        {/* Quote 1 */}
        <div style={{ marginBottom: 14 }}>
          <p style={{
            margin: 0, fontSize: 16, lineHeight: 1.5,
            color: B.ink, fontStyle: "italic",
          }}>
            "He says 'I need to pee' AFTER it's already happened."
          </p>
          <p style={{ margin: "4px 0 0", fontSize: 13, color: "#3D322C" }}>
            — L1 parent
          </p>
        </div>

        {/* Quote 2 */}
        <div style={{ marginBottom: 14 }}>
          <p style={{
            margin: 0, fontSize: 16, lineHeight: 1.5,
            color: B.ink, fontStyle: "italic",
          }}>
            "Some days he's great, other days zero."
          </p>
          <p style={{ margin: "4px 0 0", fontSize: 13, color: "#3D322C" }}>
            — L1 parent
          </p>
        </div>

        {/* Quote 3 */}
        <div style={{ marginBottom: 14 }}>
          <p style={{
            margin: 0, fontSize: 16, lineHeight: 1.5,
            color: B.ink, fontStyle: "italic",
          }}>
            "Is this interoception or stubbornness? That's the question I kept asking."
          </p>
          <p style={{ margin: "4px 0 0", fontSize: 13, color: "#3D322C" }}>
            — L1 parent
          </p>
        </div>

        {/* Closing */}
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: B.ink }}>
          Every mom who's been where you are now will tell you the same thing: once you understand the gap, everything changes. Not because the methods get better, because you finally stop fighting the wrong problem.
        </p>
      </div>
    </div>

    {/* ═══════ DIVIDER ═══════ */}
    <div style={{ padding: "40px 0", display: "flex", justifyContent: "center" }}>
      <div style={{ width: 60, height: 1.5, background: "#E2D5CA" }} />
    </div>

    {/* ═══════ PRODUCT: ProductShowcaseMedium ═══════ */}
    <ProductShowcaseMedium
      eyebrow="The product"
      title="BrightKidCo Body-Signal Learning Layer™ Pants"
      priceFrom="€34"
      ctaButton="See the pants"
    />

    {/* ═══════ DIVIDER ═══════ */}
    <div style={{ padding: "40px 0", display: "flex", justifyContent: "center" }}>
      <div style={{ width: 60, height: 1.5, background: "#E2D5CA" }} />
    </div>

    {/* ═══════ TRUST: 60-Day Seal ═══════ */}
    <div style={{ padding: "0 22px 24px" }}>
      <div style={{
        background: "#FDF8F3", borderRadius: 16, padding: 24,
        textAlign: "center",
      }}>
        <p style={{
          margin: "0 0 12px", fontSize: 20, fontWeight: 500,
          color: B.ink, lineHeight: 1.4,
        }}>
          You don't have to believe the science. You just have to try it.
        </p>
        <p style={{ margin: "0 0 12px", fontSize: 18, lineHeight: 1.6, color: "#3D322C" }}>
          <strong>60 days. By your judgment.</strong> If your child shows no sign of body awareness, no pause, no look, no step toward the potty, full refund. No questions. No forms. The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system.
        </p>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "#3D322C" }}>
          And Pre-K is coming. Every week of body-signal learning is a week closer to closing that gap.
        </p>
      </div>
    </div>

    {/* ═══════ CTA: Gentle Invite ═══════ */}
    <div style={{ background: "#1B2D45", padding: "20px 22px 44px", textAlign: "center" }}>
      {/* Coral micro-text */}
      <p style={{
        margin: "0 0 16px", fontSize: 13, fontWeight: 600,
        color: "#E06B52", letterSpacing: 0.5,
      }}>
        Pre-K prep starts here
      </p>

      {/* CTA Button */}
      <a href="#" style={{
        display: "block", padding: "14px 36px",
        background: "#1B2D45", color: "#FFFFFF",
        border: "2px solid #FFFFFF", borderRadius: 6,
        fontSize: 17, fontWeight: 700,
        textDecoration: "none", textAlign: "center",
        letterSpacing: 0.4,
      }}>
        See the Body-Signal System in Action →
      </a>

      {/* Price note */}
      <p style={{
        margin: "20px 0 0", fontSize: 16, lineHeight: 1.6,
        color: "#B8CACD",
      }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>

      {/* Secondary link */}
      <p style={{ margin: "14px 0 0" }}>
        <a href="#" style={{
          color: "#B8CACD", fontSize: 14,
          textDecoration: "underline",
        }}>
          Learn how 6 pairs build the learning rotation
        </a>
      </p>
    </div>

    {/* ═══════ NEXT TIME TEASER ═══════ */}
    <div style={{ padding: "24px 22px", background: "#FAF9F7" }}>
      <p style={{
        margin: 0, fontSize: 16, fontStyle: "italic",
        color: "#3D322C", lineHeight: 1.6,
      }}>
        Next time: The research behind the body-signal approach — and why 49% of children face this gap.
      </p>
    </div>

    {/* ═══════ SIGNOFF ═══════ */}
    <Signoff />

    {/* ═══════ OUTLINE + FOOTER ═══════ */}
    <OutLine />
    <Footer />

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E2_L1 });
